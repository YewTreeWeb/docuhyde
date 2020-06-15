/* eslint-disable no-undef */

// Avoid `console` errors in browsers that lack a console.
;(() => {
  let method
  const noop = () => {}
  const methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn',
  ]
  let { length } = methods
  // eslint-disable-next-line no-multi-assign
  const console = (window.console = window.console || {})

  // eslint-disable-next-line no-plusplus
  while (length--) {
    method = methods[length]

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop
    }
  }
})()

// Add tabbing indicator to window
const handleFirstTab = (e) => {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing')
    window.removeEventListener('keydown', handleFirstTab)
  }
}

window.addEventListener('keydown', handleFirstTab)

// Detect if mobile or desktop.

const body = document.getElementsByTagName('body')[0]
breakpoints({
  xlarge: ['1281px', '1680px'],
  large: ['981px', '1280px'],
  medium: ['737px', '980px'],
  small: ['481px', '736px'],
  xsmall: [null, '480px'],
})

if (browser.mobile) {
  body.classList.add('is-mobile')
} else {
  breakpoints.on('>medium', () => {
    body.classList.remove('is-mobile')
    body.classList.add('is-desktop')
  })
  breakpoints.on('<=medium', () => {
    body.classList.remove('is-desktop')
    body.classList.add('is-mobile')
  })
}

// Hybrid lazyloading
;(async () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img.lazyload')
    images.forEach((img) => {
      img.src = img.dataset.src
    })
  } else {
    // Dynamically import the LazySizes library
    const lazySizesPlugin = await import(
      '/assets/js/unveilhooks/ls.unveilhooks.min.js',
      '/assets/js/ls.blur-up.min.js'
    )
    const lazySizesLib = await import('/assets/js/lazysizes.min.js')
    // Initiate LazySizes (reads data-src & class=lazyload)
    lazySizes.init() // lazySizes works off a global.
  }
})()
