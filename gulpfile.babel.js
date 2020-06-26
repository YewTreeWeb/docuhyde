/* eslint-disable no-console */
import { src, dest, watch, lastRun, series, parallel } from 'gulp'
import autoprefixer from 'autoprefixer'
import rucksack from 'rucksack-css'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import named from 'vinyl-named'
import buffer from 'vinyl-buffer'
import merge from 'merge-stream'
import browserSync from 'browser-sync'
import plugins from 'gulp-load-plugins'
import del from 'del'
import read from 'read-yaml'
import shell from 'shelljs'
import pngquant from 'imagemin-pngquant'
import jpegtran from 'imagemin-jpegtran'
import zopfli from 'imagemin-zopfli'
import giflossy from 'imagemin-giflossy'
import mozjpeg from 'imagemin-mozjpeg'
import webp from 'imagemin-webp'
import extReplace from 'gulp-ext-replace'
import yargs from 'yargs'
import pkg from './package.json'
import webpackConfig from './config/webpack.config'

const { prod } = yargs.argv

const $ = plugins({
  rename: {
    'gulp-group-css-media-queries': 'gcmq',
    'gulp-sass-glob': 'sassGlob',
    'gulp-cloudinary-upload': 'cloudinary',
    'gulp-clean-css': 'cleanCSS',
    'gulp-html-autoprefixer': 'htmlAutoprefixer',
    'gulp-gh-pages': 'ghPages',
    'gulp-replace-image-src': 'rep',
  },
  pattern: ['gulp-*', '*', '-', '@*/gulp{-,.}*'],
  replaceString: /\bgulp[\-.]/,
})

const sync = browserSync.create()

// Get Gulp configs.
const config = read.sync('./config/gulp.config.yml')

/**
 * Environment
 */
export const env = (done) => {
  console.log(
    prod
      ? 'Running Gulp & Jekyll in production'
      : 'Running Gulp & Jekyll in development'
  )
  done()
}

/**
 * Styles
 */
export const styles = () => {
  return (
    src(config.styles.src, { allowEmpty: true })
      .pipe($.plumber())
      // .pipe($.if(!prod, $.sourcemaps.init())) // Start sourcemap.
      .pipe(
        $.cssimport({
          matchPattern: '*.css',
        })
      )
      .pipe($.sassGlob())
      .pipe(
        $.sass({
          precision: 6,
          outputStyle: 'compact',
        })
      )
      .pipe(
        $.size({
          showFiles: true,
        })
      )
      .pipe(
        $.postcss([
          rucksack({
            fallbacks: true,
          }),
          autoprefixer({
            grid: true,
            cascade: false,
          }),
        ])
      )
      .pipe($.gcmq())
      .pipe($.csscomb())
      .pipe(
        $.if(
          prod,
          $.cleanCSS({
            level: {
              1: {
                all: true,
                normalizeUrls: false,
              },
              2: {
                all: false,
                removeEmpty: true,
                removeDuplicateFontRules: true,
                removeDuplicateMediaBlocks: true,
                removeDuplicateRules: true,
              },
            },
          })
        )
      )
      .pipe(
        $.if(
          prod,
          $.size({
            title: 'Minified CSS',
            showFiles: true,
          })
        )
      )
      // .pipe($.if(!prod, $.sourcemaps.write('.')))
      .pipe($.if(!prod, dest(config.distAssets + config.styles.dist)))
      .pipe($.if(!prod, sync.stream()))
      .pipe(dest(config.jekyllDist + config.styles.dist))
  )
}

/**
 * Scripts
 */
export const js = () => {
  return src(config.js.src, { allowEmpty: true })
    .pipe($.plumber())
    .pipe(named())
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(
      $.size({
        showFiles: true,
      })
    )
    .pipe(
      $.if(
        prod,
        $.rename({
          suffix: '.min',
        })
      )
    )
    .pipe(
      $.size({
        title: 'Minified JS',
        showFiles: true,
      })
    )
    .pipe($.if(!prod, dest(config.distAssets + config.js.dist)))
    .pipe(dest(config.jekyllDist + config.js.dist))
}

/**
 * Vendors
 */
const vendors = Object.keys(pkg.dependencies || {})

export const vendorTask = () => {
  if (vendors.length === 0) {
    return new Promise((resolve) => {
      console.log(config.vendors.notification)
      resolve()
    })
  }

  return src(
    vendors.map((dependency) => `./node_modules/${dependency}/**/*.*`),
    {
      base: './node_modules/',
    }
  ).pipe(dest(config.vendors.dist))
}

/**
 * Images
 */
export const localImages = () => {
  return src(config.image.src, { allowEmpty: true, since: lastRun(images) })
    .pipe($.plumber())
    .pipe($.changed(config.jekyllDist + config.image.dist))
    .pipe(
      $.if(
        prod,
        $.cache(
          $.imagemin(
            [
              jpegtran({
                progressive: true,
              }),
              pngquant({
                speed: 1,
                quality: [0.5, 0.5], // lossy settings
              }),
              zopfli({
                more: true,
              }),
              giflossy({
                optimizationLevel: 3,
                optimize: 3, // keep-empty: Preserve empty transparent frames
                lossy: 2,
              }),
              $.imagemin.svgo({
                plugins: [
                  {
                    removeViewBox: true,
                  },
                  {
                    cleanupIDs: true,
                  },
                ],
              }),
              mozjpeg({
                quality: 90,
              }),
            ],
            {
              verbose: true,
            }
          )
        )
      )
    )
    .pipe($.if(!prod, dest(config.distAssets + config.image.dist)))
    .pipe(
      $.size({
        title: 'images',
      })
    )
    .pipe(dest(config.jekyllDist + config.image.dist))
}

/**
 * Create image spritesheet
 */
export const sprite = () => {
  // Generate our spritesheet
  const spriteData = src(config.image.sprites, {
    allowEmpty: true,
    since: lastRun(sprite),
  }).pipe(
    $.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
    })
  )

  // Pipe image stream through image optimizer and onto disk
  const imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(
      $.imagemin(
        [
          pngquant({
            speed: 1,
            quality: [0.5, 0.5], // lossy settings
          }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe($.if(!prod, dest(config.distAssets + config.image.dist)))
    .pipe(dest(config.jekyllDist + config.image.dist))

  // Pipe CSS stream through CSS optimizer and onto disk
  const cssStream = spriteData.css
    .pipe(
      $.cleanCSS({
        level: {
          1: {
            all: true,
            normalizeUrls: false,
          },
        },
      })
    )
    .pipe(
      $.replace(
        'background-image:url(sprite.png);',
        'background-image:url(sprite.png);background-image:url(sprite.webp);'
      )
    )
    .pipe($.replace(/sprite/g, '../images/sprite'))
    .pipe($.replace(/.icon-/g, '.'))
    .pipe($.if(!prod, dest(config.distAssets + config.styles.dist)))
    .pipe(dest(config.jekyllDist + config.styles.dist))

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream)
}

/**
 * Convert to .webp
 */
export const webpImg = () => {
  return src(config.image.webp, { since: lastRun(webpImg) })
    .pipe($.plumber())
    .pipe(
      $.cache(
        $.imagemin([
          webp({
            quality: 75,
          }),
        ])
      )
    )
    .pipe(extReplace('.webp'))
    .pipe(
      $.size({
        title: 'Coverted to webp',
      })
    )
    .pipe($.if(!prod, dest(config.distAssets + config.image.dist)))
    .pipe(dest(config.jekyllDist + config.image.dist))
}

/**
 * SVG Sprites
 */
export const svgSprites = () => {
  return src(config.image.svgsprites, {
    allowEmpty: true,
    since: lastRun(svgSprites),
  })
    .pipe($.plumber())
    .pipe($.svgmin())
    .pipe(
      $.rename({
        prefix: 'icon-',
      })
    )
    .pipe(
      $.svgstore({
        fileName: 'icons.svg',
        inlineSvg: true,
      })
    )
    .pipe(
      $.cheerio({
        // run($, file) {
        //   $('svg').attr('style', 'display:none!important')
        // },
        run() {
          $('svg').attr('style', 'display:none!important')
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(
      $.size({
        showFiles: true,
      })
    )
    .pipe($.if(!prod, dest(config.distAssets + config.image.dist)))
    .pipe(dest(config.jekyllDist + config.image.dist))
}

/**
 * Upload images to Cloudinary servers
 */
export const cloudinaryUpload = () => {
  return src(config.cloudinary.src, {
    allowEmpty: true,
    since: lastRun(cloudinary),
  })
    .pipe($.plumber())
    .pipe(
      $.cloudinary({
        config: {
          cloud_name: config.cloudinary.account.name,
          api_key: config.cloudinary.account.key,
          api_secret: config.cloudinary.account.secret,
        },
      })
    )
    .pipe(
      $.cloudinary.manifest({
        path: config.cloudinary.manifest,
        merge: true,
      })
    )
    .pipe(dest(config.cloudinary.dist))
}

/**
 * Replace image src with Cloudinary URL
 */
export const replaceImgSrc = (done) => {
  src(`${config.dist}/**/*.html`, {
    allowEmpty: true,
    since: lastRun(replaceImgSrc),
  })
    .pipe($.plumber())
    .pipe(
      $.rep({
        prependSrc: `https://res.cloudinary.com/${config.cloudinary.account.name}/${config.cloudinary.path}/${config.cloudinary.transformations}`,
        keepOrigin: false,
      })
    )
    .pipe(dest(config.dist))
  done()
}

/**
 * Upload and replace image src
 */
export const images = (done) => {
  if (config.cloudinary.key) {
    series(cloudinaryUpload, replaceImgSrc)
  } else {
    series(localImages, webpImg)
  }
  done()
}

/**
 * HTML Minify
 */
export const html = () => {
  return src(`${config.dist}/**/*.html`)
    .pipe($.plumber())
    .pipe($.htmlAutoprefixer())
    .pipe(
      $.htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: false,
        removeAttributeQuotes: false,
        removeRedundantAttributes: false,
        minifyJS: true,
        minifyCSS: true,
      })
    )
    .pipe(
      $.size({
        title: 'optimized HTML',
      })
    )
    .pipe(dest(config.dist))
}

/**
 * Fonts
 */
export const fonts = (done) => {
  src(config.fonts.src, { allowEmpty: true })
    .pipe($.plumber())
    .pipe($.if(!prod, dest(config.distAssets + config.fonts.dist)))
    .pipe(dest(config.jekyllDist + config.fonts.dist))
    .pipe(
      $.size({
        title: 'Fonts completed',
      })
    )
  done()
}

/**
 * Jekyll
 */

// Run Jekyll build
export const jekyll = (done) => {
  const JEKYLL_ENV = prod ? 'JEKYLL_ENV=production' : 'JEKYLL_ENV=development'
  const build = !prod
    ? `jekyll build --config config/jekyll.config.yml,config/jekyll.config.dev.yml ${config.jekyll.flags.dev}`
    : `jekyll build --config config/jekyll.config.yml ${config.jekyll.flags.prod}`
  if (process.env.NODE_ENV !== 'production') {
    console.info(JEKYLL_ENV, build)
  }
  shell.exec(`${JEKYLL_ENV} bundle exec ${build}`)
  done()
}

/**
 * Clean
 */
export const cleanBuild = () => {
  return del(config.clean.dist)
}
export const cleanCache = (done) => {
  $.cache.clearAll()
  done()
}

/**
 * Copy
 */
export const copy = (done) => {
  src(config.copy.src, {
    allowEmpty: true,
    since: lastRun(copy),
  })
    .pipe($.plumber())
    .pipe($.if('*.css', $.cleanCSS()))
    .pipe($.if('*.js', $.uglify()))
    .pipe(
      $.if(
        !prod,
        $.if('*.css', dest(config.distAssets + config.copy.distStyles))
      )
    )
    .pipe($.if('*.css', dest(config.jekyllDist + config.copy.distStyles)))
    .pipe(
      $.if(!prod, $.if('*.js', dest(config.distAssets + config.copy.distJs)))
    )
    .pipe($.if('*.js', dest(config.jekyllDist + config.copy.distJs)))
  done()
}

/**
 * Reload browser
 */
export const reload = (done) => {
  sync.reload()
  done()
}

/**
 * Watch and live reload
 */
export const serve = (done) => {
  sync.init({
    port: config.browsersync.port,
    ui: {
      port: config.browsersync.port + 1,
    },
    server: {
      baseDir: 'website/build',
    },
    files: ['build'],
    logLevel: config.browsersync.debug ? 'debug' : '',
    injectChanges: true,
    notify: config.browsersync.notify,
    ghostMode: {
      clicks: config.browsersync.preferences.clicks,
      scroll: config.browsersync.preferences.scroll,
    },
    open: config.browsersync.open, // Toggle to automatically open page when starting.
  })

  done()

  watch(config.watch.scss).on('add', styles).on('change', styles)
  watch(config.watch.js)
    .on('add', series(js, reload))
    .on('change', series(js, reload))
  watch(config.watch.fonts)
    .on('add', series(fonts, reload))
    .on('change', series(fonts, reload))
  watch(config.watch.svgsprites)
    .on('add', series(svgSprites, reload))
    .on('change', series(svgSprites, reload))
  watch(config.watch.jekyll, series(jekyll, reload))
  if (config.cloudinary.key) {
    watch(config.watch.images, series(cloudinaryUpload, replaceImgSrc, reload))
  } else {
    watch(config.watch.images, series(images, webpImg, reload))
  }
  watch(config.watch.sprites, series(sprite, webpImg, reload))
}

/**
 * Deploy
 */
export const deploy = (done) => {
  if (config.deploy) {
    let live
    switch (config.deploy) {
      case 'firebase':
        live = 'firebase deploy'
        break
      case 'netlify':
        live = prod ? 'netlify deploy --prod' : 'netlify deploy'
        break
      default:
        live = null
        break
    }
    if (config.deploy !== 'github' || config.deploy !== 'ghPages') {
      shell.exec(live)
    } else {
      src(config.dist).pipe(ghPages())
    }
  }
  done()
}

/**
 * Build site
 */
export const build = series(
  env,
  parallel(cleanBuild, cleanCache),
  jekyll,
  vendorTask,
  copy,
  parallel(styles, js, images, fonts),
  parallel(svgSprites, sprite),
  html,
  deploy
)

/**
 * Default
 */
export const dev = series(
  env,
  cleanBuild,
  jekyll,
  vendorTask,
  copy,
  parallel(styles, js, images, fonts),
  parallel(svgSprites, sprite),
  serve
)

export default dev
