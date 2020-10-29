webpackHotUpdate_N_E("pages/events",{

/***/ "./pages/events.mdx":
/*!**************************!*\
  !*** ./pages/events.mdx ***!
  \**************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dedent-js */ "./node_modules/dedent-js/lib/index.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dedent_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\events.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */





var meta = {
  title: 'События',
  links: [{
    url: '#регистрация-слушателей',
    name: 'Регистрация слушателей'
  }, {
    url: '#удаление-слушателей',
    name: 'Удаление слушателей'
  }, {
    url: '#отмена-событий',
    name: 'Отмена событий'
  }, {
    url: '#start',
    name: 'Start'
  }, {
    url: '#progress',
    name: 'Progress'
  }, {
    url: '#success',
    name: 'Success'
  }, {
    url: '#invalid',
    name: 'Invalid'
  }, {
    url: '#error',
    name: 'Error'
  }, {
    url: '#finish',
    name: 'Finish'
  }, {
    url: '#navigate',
    name: 'Navigate'
  }, {
    url: '#обратные-вызовы-событий',
    name: 'Обратные вызовы событий'
  }]
};
var layoutProps = {
  meta: meta
};
var MDXLayout = _components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, "Inertia \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0412\u0430\u043C \xAB\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C\u0441\u044F\xBB \u043A \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u0435\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, "To register an event listener, use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 51
    }
  }, "Inertia.on()"), " method."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, "Under the hood Inertia uses native browser events, so you can also work with them that way as well. Just be sure to append ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 135
    }
  }, "inertia:"), " to the event name."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 10
    }
  }), "document.addEventListener('inertia:start', event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u0435\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, "When you register an event listener, Inertia automatically returns you a callback to remove the event listener."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 10
    }
  }), "let removeStartEventListener = Inertia.on('start', event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n\n// Remove the listener\nremoveStartEventListener()\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, "Combined with a destroyed hook, you can automatically remove the event listener when you navigate to a different page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 10
    }
  }), "export default {\n  mounted() {\n    this.$once(\n      'hook:destroyed',\n      Inertia.on('start', event => {\n        console.log(`Starting a visit to ${event.detail.visit.url}`)\n      })\n    )\n  },\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, "Alternatively, if you're using native browser events, you can remove the event listener using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 106
    }
  }, "removeEventListener()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 10
    }
  }), "let startEventListener = event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n}\n\ndocument.addEventListener('inertia:start', startEventListener)\n\n// Remove the listener\ndocument.removeEventListener('inertia:start', startEventListener)\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, "Some events (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, "start"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 80
    }
  }, "invalid"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 137
    }
  }, "error"), ") support cancellation, allowing you to prevent Inertia's default behaviour. Just like native events, if only one event listener calls ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 325
    }
  }, "event.preventDefault()"), ", the event will be cancelled."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  if (!confirm('Are you sure you want to navigate away?')) {\n    event.preventDefault()\n  }\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }, "As a convenience, if you register your event listener using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 72
    }
  }, "Inertia.on()"), ", you can also cancel the event by returning ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 177
    }
  }, "false"), " from the listener."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  return confirm('Are you sure you want to navigate away?')\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, "Start"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 16
    }
  }, "start"), " event fires before a request is made to the server. This is useful for displaying loading indicators and for intercepting visits."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, "Cancel the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, "start"), " event to prevent the visit from happening."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  return confirm('Are you sure you want to navigate away?')\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, "Progress"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 16
    }
  }, "progress"), " event fires as progress increments during file uploads."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('progress', event => {\n  this.form.progress = event.detail.progress.percentage\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 16
    }
  }, "progress"), " event is not cancelable."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, "Success"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 16
    }
  }, "success"), " event fires on successful page visits. Note, this does ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 127
    }
  }, "not"), " include history visits."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('success', event => {\n  console.log(`Successfully made a visit to ${event.detail.page.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 16
    }
  }, "success"), " event is not cancelable."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }, "Invalid"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 16
    }
  }, "invalid"), " event fires when a non-Inertia response is received from the server, such as an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 152
    }
  }, "html"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 208
    }
  }, "json"), " response. A valid Inertia response is one that has the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 316
    }
  }, "X-Inertia"), " header set to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 388
    }
  }, "true"), " with a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 448
    }
  }, "json"), " payload containing ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/the-protocol#the-page-object"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 520
    }
  }), "the page object"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }, "This event is fired for all response types, including ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 66
    }
  }, "200"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 119
    }
  }, "400"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 176
    }
  }, "500"), " response codes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('invalid', event => {\n  console.log(`An invalid Inertia response was received.`)\n  console.log(event.detail.response)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }, "Cancel the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 23
    }
  }, "invalid"), " event to prevent Inertia from showing the non-Inertia response modal."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('invalid', event => {\n  event.preventDefault()\n  // Handle the invalid response yourself\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    }
  }, "Error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 16
    }
  }, "error"), " event fires on unexpected XHR errors, such as network interruptions, and for errors generated in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 171
    }
  }, "resolveComponent()"), " callback."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('error', event => {\n  console.log(`An unexpected error occurred during an Inertia visit.`)\n  console.log(event.detail.error)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, "Cancel the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 23
    }
  }, "error"), " event to prevent the error from being thrown."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('error', event => {\n  event.preventDefault()\n  // Handle the error yourself\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 5
    }
  }, "Note, this event will ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 34
    }
  }, "not"), " fire for XHR requests that receive ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 105
    }
  }, "400"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 161
    }
  }, "500"), " level responses, or for non-Inertia responses, as these situations are handled in other ways by Inertia. See the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/error-handling"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 326
    }
  }), "error handling"), " page for more information."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 5
    }
  }, "Finish"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 16
    }
  }, "finish"), " event fires after an XHR request has completed for both successful and unsuccessful responses. This event is useful for hiding loading indicators."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('finish', event => {\n  NProgress.done()\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 16
    }
  }, "finish"), " event is not cancelable."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 5
    }
  }, "Navigate"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 16
    }
  }, "navigate"), " event fires on successful page visits, as well as when navigating through history. This event is useful for tracking analytics and things of that nature."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('navigate', event => {\n  console.log(`Navigated to ${event.detail.page.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 16
    }
  }, "navigate"), " event is not cancelable."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 5
    }
  }, "Event callbacks"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 5
    }
  }, "In addition to the global events, Inertia also provides a number of event callbacks when manually making Inertia visits."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 10
    }
  }), "Inertia.visit(url, {\n  onCancelToken: cancelToken => {},\n  onCancel: () => {},\n  onStart: visit => {},\n  onProgress: progress => {},\n  onSuccess: page => {},\n  onFinish: () => {},\n})\n")));
}
_c = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c;

$RefreshReg$(_c, "MDXContent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxTQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxzQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLGlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsUUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVRJLEVBWUo7QUFDREQsT0FBRyxFQUFFLFdBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FaSSxFQWVKO0FBQ0RELE9BQUcsRUFBRSxVQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLFVBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FsQkksRUFxQko7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FyQkksRUF3Qko7QUFDREQsT0FBRyxFQUFFLFNBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0F4QkksRUEyQko7QUFDREQsT0FBRyxFQUFFLFdBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0EzQkksRUE4Qko7QUFDREQsT0FBRyxFQUFFLDBCQURKO0FBRURDLFFBQUksRUFBRTtB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LEtBQTJCO0FBQzVCLGlCQUFhO0FBRGUsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3TUFBTCxDQWxNSyxDQUFQO0FBOE1EO0tBbE51QkQsVTtBQW9OeEI7QUFDQUEsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy43MjVjYWY0Y2U3MzYzYjJkMTEwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Ch0L7QsdGL0YLQuNGPJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GA0LXQs9C40YHRgtGA0LDRhtC40Y8t0YHQu9GD0YjQsNGC0LXQu9C10LknLFxuICAgIG5hbWU6ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPINGB0LvRg9GI0LDRgtC10LvQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9GD0LTQsNC70LXQvdC40LUt0YHQu9GD0YjQsNGC0LXQu9C10LknLFxuICAgIG5hbWU6ICfQo9C00LDQu9C10L3QuNC1INGB0LvRg9GI0LDRgtC10LvQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0YLQvNC10L3QsC3RgdC+0LHRi9GC0LjQuScsXG4gICAgbmFtZTogJ9Ce0YLQvNC10L3QsCDRgdC+0LHRi9GC0LjQuSdcbiAgfSwge1xuICAgIHVybDogJyNzdGFydCcsXG4gICAgbmFtZTogJ1N0YXJ0J1xuICB9LCB7XG4gICAgdXJsOiAnI3Byb2dyZXNzJyxcbiAgICBuYW1lOiAnUHJvZ3Jlc3MnXG4gIH0sIHtcbiAgICB1cmw6ICcjc3VjY2VzcycsXG4gICAgbmFtZTogJ1N1Y2Nlc3MnXG4gIH0sIHtcbiAgICB1cmw6ICcjaW52YWxpZCcsXG4gICAgbmFtZTogJ0ludmFsaWQnXG4gIH0sIHtcbiAgICB1cmw6ICcjZXJyb3InLFxuICAgIG5hbWU6ICdFcnJvcidcbiAgfSwge1xuICAgIHVybDogJyNmaW5pc2gnLFxuICAgIG5hbWU6ICdGaW5pc2gnXG4gIH0sIHtcbiAgICB1cmw6ICcjbmF2aWdhdGUnLFxuICAgIG5hbWU6ICdOYXZpZ2F0ZSdcbiAgfSwge1xuICAgIHVybDogJyPQvtCx0YDQsNGC0L3Ri9C1LdCy0YvQt9C+0LLRiy3RgdC+0LHRi9GC0LjQuScsXG4gICAgbmFtZTogJ9Ce0LHRgNCw0YLQvdGL0LUg0LLRi9C30L7QstGLINGB0L7QsdGL0YLQuNC5J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KHQvtCx0YvRgtC40Y9gfTwvaDE+XG4gICAgPHA+e2BJbmVydGlhINC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGCINGB0LjRgdGC0LXQvNGDINGB0L7QsdGL0YLQuNC5LCDQutC+0YLQvtGA0LDRjyDQv9C+0LfQstC+0LvRj9C10YIg0JLQsNC8IMKr0L/QvtC00LrQu9GO0YfQsNGC0YzRgdGPwrsg0Log0YDQsNC30LvQuNGH0L3Ri9C8INGB0L7QsdGL0YLQuNGP0Lwg0LbQuNC30L3QtdC90L3QvtCz0L4g0YbQuNC60LvQsCDQsdC40LHQu9C40L7RgtC10LrQuC5gfTwvcD5cbiAgICA8aDI+e2DQoNC10LPQuNGB0YLRgNCw0YbQuNGPINGB0LvRg9GI0LDRgtC10LvQtdC5YH08L2gyPlxuICAgIDxwPntgVG8gcmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIsIHVzZSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSW5lcnRpYS5vbigpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgU3RhcnRpbmcgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BVbmRlciB0aGUgaG9vZCBJbmVydGlhIHVzZXMgbmF0aXZlIGJyb3dzZXIgZXZlbnRzLCBzbyB5b3UgY2FuIGFsc28gd29yayB3aXRoIHRoZW0gdGhhdCB3YXkgYXMgd2VsbC4gSnVzdCBiZSBzdXJlIHRvIGFwcGVuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbmVydGlhOmB9PC9pbmxpbmVDb2RlPntgIHRvIHRoZSBldmVudCBuYW1lLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2Bkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmVydGlhOnN0YXJ0JywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQo9C00LDQu9C10L3QuNC1INGB0LvRg9GI0LDRgtC10LvQtdC5YH08L2gyPlxuICAgIDxwPntgV2hlbiB5b3UgcmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIsIEluZXJ0aWEgYXV0b21hdGljYWxseSByZXR1cm5zIHlvdSBhIGNhbGxiYWNrIHRvIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGxldCByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIgPSBJbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgU3RhcnRpbmcgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG59KVxuXG4vLyBSZW1vdmUgdGhlIGxpc3RlbmVyXG5yZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIoKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BDb21iaW5lZCB3aXRoIGEgZGVzdHJveWVkIGhvb2ssIHlvdSBjYW4gYXV0b21hdGljYWxseSByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4geW91IG5hdmlnYXRlIHRvIGEgZGlmZmVyZW50IHBhZ2UuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGV4cG9ydCBkZWZhdWx0IHtcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRvbmNlKFxuICAgICAgJ2hvb2s6ZGVzdHJveWVkJyxcbiAgICAgIEluZXJ0aWEub24oJ3N0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbiAgICAgIH0pXG4gICAgKVxuICB9LFxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BBbHRlcm5hdGl2ZWx5LCBpZiB5b3UncmUgdXNpbmcgbmF0aXZlIGJyb3dzZXIgZXZlbnRzLCB5b3UgY2FuIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgdXNpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGxldCBzdGFydEV2ZW50TGlzdGVuZXIgPSBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN0YXJ0aW5nIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC52aXNpdC51cmx9XFxgKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmVydGlhOnN0YXJ0Jywgc3RhcnRFdmVudExpc3RlbmVyKVxuXG4vLyBSZW1vdmUgdGhlIGxpc3RlbmVyXG5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbmVydGlhOnN0YXJ0Jywgc3RhcnRFdmVudExpc3RlbmVyKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0J7RgtC80LXQvdCwINGB0L7QsdGL0YLQuNC5YH08L2gyPlxuICAgIDxwPntgU29tZSBldmVudHMgKGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0YXJ0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGludmFsaWRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JgfTwvaW5saW5lQ29kZT57YCkgc3VwcG9ydCBjYW5jZWxsYXRpb24sIGFsbG93aW5nIHlvdSB0byBwcmV2ZW50IEluZXJ0aWEncyBkZWZhdWx0IGJlaGF2aW91ci4gSnVzdCBsaWtlIG5hdGl2ZSBldmVudHMsIGlmIG9ubHkgb25lIGV2ZW50IGxpc3RlbmVyIGNhbGxzIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGV2ZW50LnByZXZlbnREZWZhdWx0KClgfTwvaW5saW5lQ29kZT57YCwgdGhlIGV2ZW50IHdpbGwgYmUgY2FuY2VsbGVkLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgaWYgKCFjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbmF2aWdhdGUgYXdheT8nKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQXMgYSBjb252ZW5pZW5jZSwgaWYgeW91IHJlZ2lzdGVyIHlvdXIgZXZlbnQgbGlzdGVuZXIgdXNpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSW5lcnRpYS5vbigpYH08L2lubGluZUNvZGU+e2AsIHlvdSBjYW4gYWxzbyBjYW5jZWwgdGhlIGV2ZW50IGJ5IHJldHVybmluZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmYWxzZWB9PC9pbmxpbmVDb2RlPntgIGZyb20gdGhlIGxpc3RlbmVyLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgU3RhcnRgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RhcnRgfTwvaW5saW5lQ29kZT57YCBldmVudCBmaXJlcyBiZWZvcmUgYSByZXF1ZXN0IGlzIG1hZGUgdG8gdGhlIHNlcnZlci4gVGhpcyBpcyB1c2VmdWwgZm9yIGRpc3BsYXlpbmcgbG9hZGluZyBpbmRpY2F0b3JzIGFuZCBmb3IgaW50ZXJjZXB0aW5nIHZpc2l0cy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN0YXJ0aW5nIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC52aXNpdC51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQ2FuY2VsIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdGFydGB9PC9pbmxpbmVDb2RlPntgIGV2ZW50IHRvIHByZXZlbnQgdGhlIHZpc2l0IGZyb20gaGFwcGVuaW5nLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgUHJvZ3Jlc3NgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJvZ3Jlc3NgfTwvaW5saW5lQ29kZT57YCBldmVudCBmaXJlcyBhcyBwcm9ncmVzcyBpbmNyZW1lbnRzIGR1cmluZyBmaWxlIHVwbG9hZHMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3Byb2dyZXNzJywgZXZlbnQgPT4ge1xuICB0aGlzLmZvcm0ucHJvZ3Jlc3MgPSBldmVudC5kZXRhaWwucHJvZ3Jlc3MucGVyY2VudGFnZVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByb2dyZXNzYH08L2lubGluZUNvZGU+e2AgZXZlbnQgaXMgbm90IGNhbmNlbGFibGUuYH08L3A+XG4gICAgPGgyPntgU3VjY2Vzc2B9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdWNjZXNzYH08L2lubGluZUNvZGU+e2AgZXZlbnQgZmlyZXMgb24gc3VjY2Vzc2Z1bCBwYWdlIHZpc2l0cy4gTm90ZSwgdGhpcyBkb2VzIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2Bub3RgfTwvZW0+e2AgaW5jbHVkZSBoaXN0b3J5IHZpc2l0cy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3VjY2VzcycsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgU3VjY2Vzc2Z1bGx5IG1hZGUgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnBhZ2UudXJsfVxcYClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdWNjZXNzYH08L2lubGluZUNvZGU+e2AgZXZlbnQgaXMgbm90IGNhbmNlbGFibGUuYH08L3A+XG4gICAgPGgyPntgSW52YWxpZGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbnZhbGlkYH08L2lubGluZUNvZGU+e2AgZXZlbnQgZmlyZXMgd2hlbiBhIG5vbi1JbmVydGlhIHJlc3BvbnNlIGlzIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlciwgc3VjaCBhcyBhbiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BodG1sYH08L2lubGluZUNvZGU+e2Agb3IgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntganNvbmB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlLiBBIHZhbGlkIEluZXJ0aWEgcmVzcG9uc2UgaXMgb25lIHRoYXQgaGFzIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWFgfTwvaW5saW5lQ29kZT57YCBoZWFkZXIgc2V0IHRvIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRydWVgfTwvaW5saW5lQ29kZT57YCB3aXRoIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntganNvbmB9PC9pbmxpbmVDb2RlPntgIHBheWxvYWQgY29udGFpbmluZyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3RoZS1wcm90b2NvbCN0aGUtcGFnZS1vYmplY3RcIlxuICAgICAgfX0+e2B0aGUgcGFnZSBvYmplY3RgfTwvYT57YC5gfTwvcD5cbiAgICA8cD57YFRoaXMgZXZlbnQgaXMgZmlyZWQgZm9yIGFsbCByZXNwb25zZSB0eXBlcywgaW5jbHVkaW5nIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDIwMGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MDBgfTwvaW5saW5lQ29kZT57YCwgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDUwMGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlIGNvZGVzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdpbnZhbGlkJywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBBbiBpbnZhbGlkIEluZXJ0aWEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlxcYClcbiAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLnJlc3BvbnNlKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQ2FuY2VsIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbnZhbGlkYH08L2lubGluZUNvZGU+e2AgZXZlbnQgdG8gcHJldmVudCBJbmVydGlhIGZyb20gc2hvd2luZyB0aGUgbm9uLUluZXJ0aWEgcmVzcG9uc2UgbW9kYWwuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ2ludmFsaWQnLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBpbnZhbGlkIHJlc3BvbnNlIHlvdXJzZWxmXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgRXJyb3JgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JgfTwvaW5saW5lQ29kZT57YCBldmVudCBmaXJlcyBvbiB1bmV4cGVjdGVkIFhIUiBlcnJvcnMsIHN1Y2ggYXMgbmV0d29yayBpbnRlcnJ1cHRpb25zLCBhbmQgZm9yIGVycm9ycyBnZW5lcmF0ZWQgaW4gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnQoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdlcnJvcicsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCBkdXJpbmcgYW4gSW5lcnRpYSB2aXNpdC5cXGApXG4gIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC5lcnJvcilcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YENhbmNlbCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JgfTwvaW5saW5lQ29kZT57YCBldmVudCB0byBwcmV2ZW50IHRoZSBlcnJvciBmcm9tIGJlaW5nIHRocm93bi5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignZXJyb3InLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBlcnJvciB5b3Vyc2VsZlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgTm90ZSwgdGhpcyBldmVudCB3aWxsIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2Bub3RgfTwvZW0+e2AgZmlyZSBmb3IgWEhSIHJlcXVlc3RzIHRoYXQgcmVjZWl2ZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MDBgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNTAwYH08L2lubGluZUNvZGU+e2AgbGV2ZWwgcmVzcG9uc2VzLCBvciBmb3Igbm9uLUluZXJ0aWEgcmVzcG9uc2VzLCBhcyB0aGVzZSBzaXR1YXRpb25zIGFyZSBoYW5kbGVkIGluIG90aGVyIHdheXMgYnkgSW5lcnRpYS4gU2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2Vycm9yLWhhbmRsaW5nXCJcbiAgICAgIH19PntgZXJyb3IgaGFuZGxpbmdgfTwvYT57YCBwYWdlIGZvciBtb3JlIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDxoMj57YEZpbmlzaGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5pc2hgfTwvaW5saW5lQ29kZT57YCBldmVudCBmaXJlcyBhZnRlciBhbiBYSFIgcmVxdWVzdCBoYXMgY29tcGxldGVkIGZvciBib3RoIHN1Y2Nlc3NmdWwgYW5kIHVuc3VjY2Vzc2Z1bCByZXNwb25zZXMuIFRoaXMgZXZlbnQgaXMgdXNlZnVsIGZvciBoaWRpbmcgbG9hZGluZyBpbmRpY2F0b3JzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdmaW5pc2gnLCBldmVudCA9PiB7XG4gIE5Qcm9ncmVzcy5kb25lKClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5pc2hgfTwvaW5saW5lQ29kZT57YCBldmVudCBpcyBub3QgY2FuY2VsYWJsZS5gfTwvcD5cbiAgICA8aDI+e2BOYXZpZ2F0ZWB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYXZpZ2F0ZWB9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGZpcmVzIG9uIHN1Y2Nlc3NmdWwgcGFnZSB2aXNpdHMsIGFzIHdlbGwgYXMgd2hlbiBuYXZpZ2F0aW5nIHRocm91Z2ggaGlzdG9yeS4gVGhpcyBldmVudCBpcyB1c2VmdWwgZm9yIHRyYWNraW5nIGFuYWx5dGljcyBhbmQgdGhpbmdzIG9mIHRoYXQgbmF0dXJlLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCduYXZpZ2F0ZScsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgTmF2aWdhdGVkIHRvIFxcJHtldmVudC5kZXRhaWwucGFnZS51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5hdmlnYXRlYH08L2lubGluZUNvZGU+e2AgZXZlbnQgaXMgbm90IGNhbmNlbGFibGUuYH08L3A+XG4gICAgPGgyPntgRXZlbnQgY2FsbGJhY2tzYH08L2gyPlxuICAgIDxwPntgSW4gYWRkaXRpb24gdG8gdGhlIGdsb2JhbCBldmVudHMsIEluZXJ0aWEgYWxzbyBwcm92aWRlcyBhIG51bWJlciBvZiBldmVudCBjYWxsYmFja3Mgd2hlbiBtYW51YWxseSBtYWtpbmcgSW5lcnRpYSB2aXNpdHMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQodXJsLCB7XG4gIG9uQ2FuY2VsVG9rZW46IGNhbmNlbFRva2VuID0+IHt9LFxuICBvbkNhbmNlbDogKCkgPT4ge30sXG4gIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICBvbkZpbmlzaDogKCkgPT4ge30sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9