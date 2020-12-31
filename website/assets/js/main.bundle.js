(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!**************************************!*\
  !*** multi ./website/src/js/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mat/Sites/jekyll/docuhyde/website/src/js/main.js */"hyXs");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "E4hX":
/*!*******************************************!*\
  !*** ./website/src/js/modules/helpers.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(breakpoints, browser) {/* eslint-disable no-undef */
// Avoid `console` errors in browsers that lack a console.
;

(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length; // eslint-disable-next-line no-multi-assign

  var console = window.console = window.console || {}; // eslint-disable-next-line no-plusplus

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Add tabbing indicator to window


var handleFirstTab = function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

window.addEventListener('keydown', handleFirstTab); // Detect if mobile or desktop.

var body = document.getElementsByTagName('body')[0];
breakpoints({
  xlarge: ['1281px', '1680px'],
  large: ['981px', '1280px'],
  medium: ['737px', '980px'],
  small: ['481px', '736px'],
  xsmall: [null, '480px']
});

if (browser.mobile) {
  body.classList.add('is-mobile');
} else {
  breakpoints.on('>medium', function () {
    body.classList.remove('is-mobile');
    body.classList.add('is-desktop');
  });
  breakpoints.on('<=medium', function () {
    body.classList.remove('is-desktop');
    body.classList.add('is-mobile');
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! breakpoints */ "a6Qp"), __webpack_require__(/*! browser */ "txRt")))

/***/ }),

/***/ "a6Qp":
/*!******************************!*\
  !*** external "breakpoints" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = breakpoints;

/***/ }),

/***/ "hyXs":
/*!********************************!*\
  !*** ./website/src/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(browser) {/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers */ "R5XZ");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! airbnb-browser-shims */ "OuUZ");
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/helpers */ "E4hX");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__);



/* eslint-disable no-console */

/* eslint-disable no-undef */
// External
 // Internal


var body = document.getElementsByTagName('body')[0];
var html = document.getElementsByTagName('html')[0]; // Remove loading class fron bosy on window load.

window.onload = function () {
  window.setTimeout(function () {
    body.classList.remove('is-loading');
  }, 100);
};

html.setAttribute('data-browser', browser.name); // LocalStorage.

if (typeof localStorage !== 'undefined') {
  if (localStorage.getItem('theme')) {
    var theme = localStorage.getItem('theme');
    body.removeAttribute('data-theme', 'light');
    body.removeAttribute('data-theme', 'dark');
    body.setAttribute('data-theme', theme);
  }
} // set dark mode if user's system prefers it.


if (window.matchMedia) {
  if (true) {
    console.log('supports matchmedia');
  }

  if (matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('theme') === null) {
    if (true) {
      console.log('prefers dark');
    }

    body.removeAttribute('data-theme', 'light');
    body.setAttribute('data-theme', 'dark');
  }
} // Switch between dark and light mode.


var switchTheme = document.getElementById('switch-theme');
switchTheme.addEventListener('click', function (e) {
  e.preventDefault();
  body.classList.add('color-theme-in-transition');

  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  window.setTimeout(function () {
    body.classList.remove('color-theme-in-transition');
  }, 1500);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! browser */ "txRt")))

/***/ }),

/***/ "txRt":
/*!**************************!*\
  !*** external "browser" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = browser;

/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsLmluc3BlY3QgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicmVha3BvaW50c1wiIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlclwiIl0sIm5hbWVzIjpbIm1ldGhvZCIsIm5vb3AiLCJtZXRob2RzIiwibGVuZ3RoIiwiY29uc29sZSIsIndpbmRvdyIsImhhbmRsZUZpcnN0VGFiIiwiZSIsImtleUNvZGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYnJlYWtwb2ludHMiLCJ4bGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwieHNtYWxsIiwiYnJvd3NlciIsIm1vYmlsZSIsIm9uIiwicmVtb3ZlIiwiaHRtbCIsIm9ubG9hZCIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW1lIiwicmVtb3ZlQXR0cmlidXRlIiwibWF0Y2hNZWRpYSIsInByb2Nlc3MiLCJsb2ciLCJtYXRjaGVzIiwic3dpdGNoVGhlbWUiLCJnZXRFbGVtZW50QnlJZCIsInByZXZlbnREZWZhdWx0IiwiZ2V0QXR0cmlidXRlIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZTs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQ0E7O0FBQUMsQ0FBQyxZQUFNO0FBQ04sTUFBSUEsTUFBSjs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQ2QsUUFEYyxF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Y0FBVCxDQUF3QixjQUF4QixDQUFwQjtBQUVBRCxXQUFXLENBQUN6QixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFDUCxDQUFELEVBQU87QUFDM0NBLEdBQUMsQ0FBQ2tDLGNBQUY7QUFFQS9CLE1BQUksQ0FBQ0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLDJCQUFuQjs7QUFDQSxNQUFJRixJQUFJLENBQUNnQyxZQUFMLENBQWtCLFlBQWxCLE1BQW9DLE9BQXhDLEVBQWlEO0FBQy9DaEMsUUFBSSxDQUFDbUIsWUFBTCxDQUFrQixZQUFsQixFQUFnQyxNQUFoQztBQUNBRSxnQkFBWSxDQUFDWSxPQUFiLENBQXFCLE9BQXJCLEVBQThCLE1BQTlCO0FBQ0QsR0FIRCxNQUdPO0FBQ0xqQyxRQUFJLENBQUNtQixZQUFMLENBQWtCLFlBQWxCLEVBQWdDLE9BQWhDO0FBQ0FFLGdCQUFZLENBQUNZLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIsT0FBOUI7QUFDRDs7QUFDRHRDLFFBQU0sQ0FBQ3VCLFVBQVAsQ0FBa0IsWUFBTTtBQUN0QmxCLFFBQUksQ0FBQ0MsU0FBTCxDQUFlYyxNQUFmLENBQXNCLDJCQUF0QjtBQUNELEdBRkQsRUFFRyxJQUZIO0FBR0QsQ0FkRCxFOzs7Ozs7Ozs7Ozs7QUNuREEseUIiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAoaWdub3JlZCkgKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG4vLyBBdm9pZCBgY29uc29sZWAgZXJyb3JzIGluIGJyb3dzZXJzIHRoYXQgbGFjayBhIGNvbnNvbGUuXG47KCgpID0+IHtcbiAgbGV0IG1ldGhvZFxuICBjb25zdCBub29wID0gKCkgPT4ge31cbiAgY29uc3QgbWV0aG9kcyA9IFtcbiAgICAnYXNzZXJ0JyxcbiAgICAnY2xlYXInLFxuICAgICdjb3VudCcsXG4gICAgJ2RlYnVnJyxcbiAgICAnZGlyJyxcbiAgICAnZGlyeG1sJyxcbiAgICAnZXJyb3InLFxuICAgICdleGNlcHRpb24nLFxuICAgICdncm91cCcsXG4gICAgJ2dyb3VwQ29sbGFwc2VkJyxcbiAgICAnZ3JvdXBFbmQnLFxuICAgICdpbmZvJyxcbiAgICAnbG9nJyxcbiAgICAnbWFya1RpbWVsaW5lJyxcbiAgICAncHJvZmlsZScsXG4gICAgJ3Byb2ZpbGVFbmQnLFxuICAgICd0YWJsZScsXG4gICAgJ3RpbWUnLFxuICAgICd0aW1lRW5kJyxcbiAgICAndGltZWxpbmUnLFxuICAgICd0aW1lbGluZUVuZCcsXG4gICAgJ3RpbWVTdGFtcCcsXG4gICAgJ3RyYWNlJyxcbiAgICAnd2FybicsXG4gIF1cbiAgbGV0IHsgbGVuZ3RoIH0gPSBtZXRob2RzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cbiAgY29uc3QgY29uc29sZSA9ICh3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF1cblxuICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cbiAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgY29uc29sZVttZXRob2RdID0gbm9vcFxuICAgIH1cbiAgfVxufSkoKVxuXG4vLyBBZGQgdGFiYmluZyBpbmRpY2F0b3IgdG8gd2luZG93XG5jb25zdCBoYW5kbGVGaXJzdFRhYiA9IChlKSA9PiB7XG4gIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAvLyB0aGUgXCJJIGFtIGEga2V5Ym9hcmQgdXNlclwiIGtleVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndXNlci1pcy10YWJiaW5nJylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUZpcnN0VGFiKVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRmlyc3RUYWIpXG5cbi8vIERldGVjdCBpZiBtb2JpbGUgb3IgZGVza3RvcC5cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF1cbmJyZWFrcG9pbnRzKHtcbiAgeGxhcmdlOiBbJzEyODFweCcsICcxNjgwcHgnXSxcbiAgbGFyZ2U6IFsnOTgxcHgnLCAnMTI4MHB4J10sXG4gIG1lZGl1bTogWyc3MzdweCcsICc5ODBweCddLFxuICBzbWFsbDogWyc0ODFweCcsICc3MzZweCddLFxuICB4c21hbGw6IFtudWxsLCAnNDgwcHgnXSxcbn0pXG5cbmlmIChicm93c2VyLm1vYmlsZSkge1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLW1vYmlsZScpXG59IGVsc2Uge1xuICBicmVha3BvaW50cy5vbignPm1lZGl1bScsICgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW1vYmlsZScpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdpcy1kZXNrdG9wJylcbiAgfSlcbiAgYnJlYWtwb2ludHMub24oJzw9bWVkaXVtJywgKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGVza3RvcCcpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdpcy1tb2JpbGUnKVxuICB9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBicmVha3BvaW50czsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG4vLyBFeHRlcm5hbFxuaW1wb3J0ICdhaXJibmItYnJvd3Nlci1zaGltcydcblxuLy8gSW50ZXJuYWxcbmltcG9ydCAnLi9tb2R1bGVzL2hlbHBlcnMnXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdXG5jb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXVxuXG4vLyBSZW1vdmUgbG9hZGluZyBjbGFzcyBmcm9uIGJvc3kgb24gd2luZG93IGxvYWQuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJylcbiAgfSwgMTAwKVxufVxuXG5odG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icm93c2VyJywgYnJvd3Nlci5uYW1lKVxuXG4vLyBMb2NhbFN0b3JhZ2UuXG5pZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB7XG4gICAgY29uc3QgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKVxuICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0JylcbiAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJylcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIHRoZW1lKVxuICB9XG59XG5cbi8vIHNldCBkYXJrIG1vZGUgaWYgdXNlcidzIHN5c3RlbSBwcmVmZXJzIGl0LlxuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coJ3N1cHBvcnRzIG1hdGNobWVkaWEnKVxuICB9XG4gIGlmIChcbiAgICBtYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcyAmJlxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSBudWxsXG4gICkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZygncHJlZmVycyBkYXJrJylcbiAgICB9XG4gICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKVxuICAgIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKVxuICB9XG59XG5cbi8vIFN3aXRjaCBiZXR3ZWVuIGRhcmsgYW5kIGxpZ2h0IG1vZGUuXG5jb25zdCBzd2l0Y2hUaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtdGhlbWUnKVxuXG5zd2l0Y2hUaGVtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnY29sb3ItdGhlbWUtaW4tdHJhbnNpdGlvbicpXG4gIGlmIChib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScpID09PSAnbGlnaHQnKSB7XG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKVxuICB9IGVsc2Uge1xuICAgIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0JylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKVxuICB9XG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbG9yLXRoZW1lLWluLXRyYW5zaXRpb24nKVxuICB9LCAxNTAwKVxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0gYnJvd3NlcjsiXSwic291cmNlUm9vdCI6IiJ9