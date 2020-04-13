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

/* WEBPACK VAR INJECTION */(function(breakpoints, browser) {// Avoid `console` errors in browsers that lack a console.
;

(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

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
/* WEBPACK VAR INJECTION */(function(browser) {/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airbnb-browser-shims */ "OuUZ");
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/helpers */ "E4hX");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_helpers__WEBPACK_IMPORTED_MODULE_1__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsLmluc3BlY3QgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicmVha3BvaW50c1wiIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlclwiIl0sIm5hbWVzIjpbIm1ldGhvZCIsIm5vb3AiLCJtZXRob2RzIiwibGVuZ3RoIiwiY29uc29sZSIsIndpbmRvdyIsImhhbmRsZUZpcnN0VGFiIiwiZSIsImtleUNvZGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYnJlYWtwb2ludHMiLCJ4bGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwieHNtYWxsIiwiYnJvd3NlciIsIm1vYmlsZSIsIm9uIiwicmVtb3ZlIiwiaHRtbCIsIm9ubG9hZCIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW1lIiwicmVtb3ZlQXR0cmlidXRlIiwibWF0Y2hNZWRpYSIsInByb2Nlc3MiLCJsb2ciLCJtYXRjaGVzIiwic3dpdGNoVGhlbWUiLCJnZXRFbGVtZW50QnlJZCIsInByZXZlbnREZWZhdWx0IiwiZ2V0QXR0cmlidXRlIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUFDLENBQUMsWUFBTTtBQUNOLE1BQUlBLE1BQUo7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUNkLFFBRGMsRUFFZCxP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QUQsV0FBVyxDQUFDekIsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBQ1AsQ0FBRCxFQUFPO0FBQzNDQSxHQUFDLENBQUNrQyxjQUFGO0FBRUEvQixNQUFJLENBQUNDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQiwyQkFBbkI7O0FBQ0EsTUFBSUYsSUFBSSxDQUFDZ0MsWUFBTCxDQUFrQixZQUFsQixNQUFvQyxPQUF4QyxFQUFpRDtBQUMvQ2hDLFFBQUksQ0FBQ21CLFlBQUwsQ0FBa0IsWUFBbEIsRUFBZ0MsTUFBaEM7QUFDQUUsZ0JBQVksQ0FBQ1ksT0FBYixDQUFxQixPQUFyQixFQUE4QixNQUE5QjtBQUNELEdBSEQsTUFHTztBQUNMakMsUUFBSSxDQUFDbUIsWUFBTCxDQUFrQixZQUFsQixFQUFnQyxPQUFoQztBQUNBRSxnQkFBWSxDQUFDWSxPQUFiLENBQXFCLE9BQXJCLEVBQThCLE9BQTlCO0FBQ0Q7O0FBQ0R0QyxRQUFNLENBQUN1QixVQUFQLENBQWtCLFlBQU07QUFDdEJsQixRQUFJLENBQUNDLFNBQUwsQ0FBZWMsTUFBZixDQUFzQiwyQkFBdEI7QUFDRCxHQUZELEVBRUcsSUFGSDtBQUdELENBZEQsRTs7Ozs7Ozs7Ozs7O0FDaERBLHlCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIiwiLy8gQXZvaWQgYGNvbnNvbGVgIGVycm9ycyBpbiBicm93c2VycyB0aGF0IGxhY2sgYSBjb25zb2xlLlxuOygoKSA9PiB7XG4gIGxldCBtZXRob2RcbiAgY29uc3Qgbm9vcCA9ICgpID0+IHt9XG4gIGNvbnN0IG1ldGhvZHMgPSBbXG4gICAgJ2Fzc2VydCcsXG4gICAgJ2NsZWFyJyxcbiAgICAnY291bnQnLFxuICAgICdkZWJ1ZycsXG4gICAgJ2RpcicsXG4gICAgJ2RpcnhtbCcsXG4gICAgJ2Vycm9yJyxcbiAgICAnZXhjZXB0aW9uJyxcbiAgICAnZ3JvdXAnLFxuICAgICdncm91cENvbGxhcHNlZCcsXG4gICAgJ2dyb3VwRW5kJyxcbiAgICAnaW5mbycsXG4gICAgJ2xvZycsXG4gICAgJ21hcmtUaW1lbGluZScsXG4gICAgJ3Byb2ZpbGUnLFxuICAgICdwcm9maWxlRW5kJyxcbiAgICAndGFibGUnLFxuICAgICd0aW1lJyxcbiAgICAndGltZUVuZCcsXG4gICAgJ3RpbWVsaW5lJyxcbiAgICAndGltZWxpbmVFbmQnLFxuICAgICd0aW1lU3RhbXAnLFxuICAgICd0cmFjZScsXG4gICAgJ3dhcm4nLFxuICBdXG4gIGxldCBsZW5ndGggPSBtZXRob2RzLmxlbmd0aFxuICBsZXQgY29uc29sZSA9ICh3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9KVxuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIG1ldGhvZCA9IG1ldGhvZHNbbGVuZ3RoXVxuXG4gICAgLy8gT25seSBzdHViIHVuZGVmaW5lZCBtZXRob2RzLlxuICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG4gICAgICBjb25zb2xlW21ldGhvZF0gPSBub29wXG4gICAgfVxuICB9XG59KSgpXG5cbi8vIEFkZCB0YWJiaW5nIGluZGljYXRvciB0byB3aW5kb3dcbmNvbnN0IGhhbmRsZUZpcnN0VGFiID0gKGUpID0+IHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgIC8vIHRoZSBcIkkgYW0gYSBrZXlib2FyZCB1c2VyXCIga2V5XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd1c2VyLWlzLXRhYmJpbmcnKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRmlyc3RUYWIpXG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVGaXJzdFRhYilcblxuLy8gRGV0ZWN0IGlmIG1vYmlsZSBvciBkZXNrdG9wLlxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXVxuYnJlYWtwb2ludHMoe1xuICB4bGFyZ2U6IFsnMTI4MXB4JywgJzE2ODBweCddLFxuICBsYXJnZTogWyc5ODFweCcsICcxMjgwcHgnXSxcbiAgbWVkaXVtOiBbJzczN3B4JywgJzk4MHB4J10sXG4gIHNtYWxsOiBbJzQ4MXB4JywgJzczNnB4J10sXG4gIHhzbWFsbDogW251bGwsICc0ODBweCddLFxufSlcblxuaWYgKGJyb3dzZXIubW9iaWxlKSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtbW9iaWxlJylcbn0gZWxzZSB7XG4gIGJyZWFrcG9pbnRzLm9uKCc+bWVkaXVtJywgKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbW9iaWxlJylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLWRlc2t0b3AnKVxuICB9KVxuICBicmVha3BvaW50cy5vbignPD1tZWRpdW0nLCAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kZXNrdG9wJylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLW1vYmlsZScpXG4gIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGJyZWFrcG9pbnRzOyIsIi8vIEV4dGVybmFsXG5pbXBvcnQgJ2FpcmJuYi1icm93c2VyLXNoaW1zJ1xuXG4vLyBJbnRlcm5hbFxuaW1wb3J0ICcuL21vZHVsZXMvaGVscGVycydcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF1cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdXG5cbi8vIFJlbW92ZSBsb2FkaW5nIGNsYXNzIGZyb24gYm9zeSBvbiB3aW5kb3cgbG9hZC5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKVxuICB9LCAxMDApXG59XG5cbmh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJyb3dzZXInLCBicm93c2VyLm5hbWUpXG5cbi8vIExvY2FsU3RvcmFnZS5cbmlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpIHtcbiAgICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpXG4gICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKVxuICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKVxuICAgIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgdGhlbWUpXG4gIH1cbn1cblxuLy8gc2V0IGRhcmsgbW9kZSBpZiB1c2VyJ3Mgc3lzdGVtIHByZWZlcnMgaXQuXG5pZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLmxvZygnc3VwcG9ydHMgbWF0Y2htZWRpYScpXG4gIH1cbiAgaWYgKFxuICAgIG1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzICYmXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09IG51bGxcbiAgKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwcmVmZXJzIGRhcmsnKVxuICAgIH1cbiAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdsaWdodCcpXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpXG4gIH1cbn1cblxuLy8gU3dpdGNoIGJldHdlZW4gZGFyayBhbmQgbGlnaHQgbW9kZS5cbmNvbnN0IHN3aXRjaFRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC10aGVtZScpXG5cbnN3aXRjaFRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgYm9keS5jbGFzc0xpc3QuYWRkKCdjb2xvci10aGVtZS1pbi10cmFuc2l0aW9uJylcbiAgaWYgKGJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJykgPT09ICdsaWdodCcpIHtcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpXG4gIH0gZWxzZSB7XG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpXG4gIH1cbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY29sb3ItdGhlbWUtaW4tdHJhbnNpdGlvbicpXG4gIH0sIDE1MDApXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSBicm93c2VyOyJdLCJzb3VyY2VSb290IjoiIn0=