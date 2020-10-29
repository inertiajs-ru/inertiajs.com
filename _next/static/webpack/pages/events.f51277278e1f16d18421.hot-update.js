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
  }, "\u0427\u0442\u043E\u0431\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043C\u0435\u0442\u043E\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 77
    }
  }, "Inertia.on()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "Inertia \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0442\u0430\u043A \u0447\u0442\u043E \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u043D\u0438\u043C\u0438 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u043C. \u041F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 147
    }
  }, "inertia:"), " \u043A \u0438\u043C\u0435\u043D\u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u041A\u043E\u0433\u0434\u0430 \u0412\u044B \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0435 \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439, Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0412\u0430\u043C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u043E\u0431\u044B\u0442\u0438\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u0412 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0438 \u0441 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u043E\u0439 \u043B\u043E\u0432\u0443\u0448\u043A\u043E\u0439 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0435 \u043D\u0430 \u0434\u0440\u0443\u0433\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u044B, \u0435\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 139
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
  }, "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 31
    }
  }, "start"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 86
    }
  }, "invalid"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 143
    }
  }, "error"), ") support cancellation, allowing you to prevent Inertia's default behaviour. Just like native events, if only one event listener calls ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 331
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxTQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxzQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLGlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsUUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVRJLEVBWUo7QUFDREQsT0FBRyxFQUFFLFdBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FaSSxFQWVKO0FBQ0RELE9BQUcsRUFBRSxVQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLFVBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FsQkksRUFxQko7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FyQkksRUF3Qko7QUFDREQsT0FBRyxFQUFFLFNBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0F4QkksRUEyQko7QUFDREQsT0FBRyxFQUFFLFdBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0EzQkksRUE4Qko7QUFDREQsT0FBRyxFQUFFLDBCQURKO0FBRURDLFFBQUksRUFBRTtB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QUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd01BQUwsQ0FsTUssQ0FBUDtBQThNRDtLQWxOdUJELFU7QUFvTnhCO0FBQ0FBLFVBQVUsQ0FBQ0csY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMuZjUxMjc3Mjc4ZTFmMTZkMTg0MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQodC+0LHRi9GC0LjRjycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPRgNC10LPQuNGB0YLRgNCw0YbQuNGPLdGB0LvRg9GI0LDRgtC10LvQtdC5JyxcbiAgICBuYW1lOiAn0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDRgdC70YPRiNCw0YLQtdC70LXQuSdcbiAgfSwge1xuICAgIHVybDogJyPRg9C00LDQu9C10L3QuNC1LdGB0LvRg9GI0LDRgtC10LvQtdC5JyxcbiAgICBuYW1lOiAn0KPQtNCw0LvQtdC90LjQtSDRgdC70YPRiNCw0YLQtdC70LXQuSdcbiAgfSwge1xuICAgIHVybDogJyPQvtGC0LzQtdC90LAt0YHQvtCx0YvRgtC40LknLFxuICAgIG5hbWU6ICfQntGC0LzQtdC90LAg0YHQvtCx0YvRgtC40LknXG4gIH0sIHtcbiAgICB1cmw6ICcjc3RhcnQnLFxuICAgIG5hbWU6ICdTdGFydCdcbiAgfSwge1xuICAgIHVybDogJyNwcm9ncmVzcycsXG4gICAgbmFtZTogJ1Byb2dyZXNzJ1xuICB9LCB7XG4gICAgdXJsOiAnI3N1Y2Nlc3MnLFxuICAgIG5hbWU6ICdTdWNjZXNzJ1xuICB9LCB7XG4gICAgdXJsOiAnI2ludmFsaWQnLFxuICAgIG5hbWU6ICdJbnZhbGlkJ1xuICB9LCB7XG4gICAgdXJsOiAnI2Vycm9yJyxcbiAgICBuYW1lOiAnRXJyb3InXG4gIH0sIHtcbiAgICB1cmw6ICcjZmluaXNoJyxcbiAgICBuYW1lOiAnRmluaXNoJ1xuICB9LCB7XG4gICAgdXJsOiAnI25hdmlnYXRlJyxcbiAgICBuYW1lOiAnTmF2aWdhdGUnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7QsdGA0LDRgtC90YvQtS3QstGL0LfQvtCy0Yst0YHQvtCx0YvRgtC40LknLFxuICAgIG5hbWU6ICfQntCx0YDQsNGC0L3Ri9C1INCy0YvQt9C+0LLRiyDRgdC+0LHRi9GC0LjQuSdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCh0L7QsdGL0YLQuNGPYH08L2gxPlxuICAgIDxwPntgSW5lcnRpYSDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgiDRgdC40YHRgtC10LzRgyDRgdC+0LHRi9GC0LjQuSwg0LrQvtGC0L7RgNCw0Y8g0L/QvtC30LLQvtC70Y/QtdGCINCS0LDQvCDCq9C/0L7QtNC60LvRjtGH0LDRgtGM0YHRj8K7INC6INGA0LDQt9C70LjRh9C90YvQvCDRgdC+0LHRi9GC0LjRj9C8INC20LjQt9C90LXQvdC90L7Qs9C+INGG0LjQutC70LAg0LHQuNCx0LvQuNC+0YLQtdC60LguYH08L3A+XG4gICAgPGgyPntg0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDRgdC70YPRiNCw0YLQtdC70LXQuWB9PC9oMj5cbiAgICA8cD57YNCn0YLQvtCx0Ysg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0Ywg0L/RgNC+0YHQu9GD0YjQuNCy0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjQuSwg0LjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQvNC10YLQvtC0IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEub24oKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgU3RhcnRpbmcgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJbmVydGlhINC40YHQv9C+0LvRjNC30YPQtdGCINGB0L7QsdGB0YLQstC10L3QvdGL0LUg0YHQvtCx0YvRgtC40Y8g0LHRgNCw0YPQt9C10YDQsCwg0YLQsNC6INGH0YLQviDQktGLINGC0LDQutC20LUg0LzQvtC20LXRgtC1INGA0LDQsdC+0YLQsNGC0Ywg0YEg0L3QuNC80Lgg0YLQsNC60LjQvCDQttC1INC+0LHRgNCw0LfQvtC8LiDQn9GA0L7RgdGC0L4g0L3QtSDQt9Cw0LHRg9C00YzRgtC1INC00L7QsdCw0LLQuNGC0YwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5lcnRpYTpgfTwvaW5saW5lQ29kZT57YCDQuiDQuNC80LXQvdC4INGB0L7QsdGL0YLQuNGPLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2Bkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmVydGlhOnN0YXJ0JywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQo9C00LDQu9C10L3QuNC1INGB0LvRg9GI0LDRgtC10LvQtdC5YH08L2gyPlxuICAgIDxwPntg0JrQvtCz0LTQsCDQktGLINGA0LXQs9C40YHRgtGA0LjRgNGD0LXRgtC1INC/0YDQvtGB0LvRg9GI0LjQstCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40LksIEluZXJ0aWEg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0JLQsNC8INC+0LHRgNCw0YLQvdGL0Lkg0LLRi9C30L7QsiDQtNC70Y8g0YPQtNCw0LvQtdC90LjRjyDQv9GA0L7RgdC70YPRiNC40LLQsNGC0LXQu9GPINGB0L7QsdGL0YLQuNC5LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BsZXQgcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyID0gSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN0YXJ0aW5nIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC52aXNpdC51cmx9XFxgKVxufSlcblxuLy8gUmVtb3ZlIHRoZSBsaXN0ZW5lclxucmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JIg0YHQvtGH0LXRgtCw0L3QuNC4INGBINC+0LHRgNCw0LHQvtGC0LDQvdC90L7QuSDQu9C+0LLRg9GI0LrQvtC5INCS0Ysg0LzQvtC20LXRgtC1INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGD0LTQsNC70LjRgtGMINC/0YDQvtGB0LvRg9GI0LjQstCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40Lkg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L3QsCDQtNGA0YPQs9GD0Y4g0YHRgtGA0LDQvdC40YbRgy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgZXhwb3J0IGRlZmF1bHQge1xuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJG9uY2UoXG4gICAgICAnaG9vazpkZXN0cm95ZWQnLFxuICAgICAgSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxcYFN0YXJ0aW5nIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC52aXNpdC51cmx9XFxgKVxuICAgICAgfSlcbiAgICApXG4gIH0sXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCSINC60LDRh9C10YHRgtCy0LUg0LDQu9GM0YLQtdGA0L3QsNGC0LjQstGLLCDQtdGB0LvQuCDQktGLINC40YHQv9C+0LvRjNC30YPQtdGC0LUg0YHQvtCx0YHRgtCy0LXQvdC90YvQtSDRgdC+0LHRi9GC0LjRjyDQsdGA0LDRg9C30LXRgNCwLCDQktGLINC80L7QttC10YLQtSDRg9C00LDQu9C40YLRjCDQv9GA0L7RgdC70YPRiNC40LLQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5LCDQuNGB0L/QvtC70YzQt9GD0Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGxldCBzdGFydEV2ZW50TGlzdGVuZXIgPSBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN0YXJ0aW5nIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC52aXNpdC51cmx9XFxgKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmVydGlhOnN0YXJ0Jywgc3RhcnRFdmVudExpc3RlbmVyKVxuXG4vLyBSZW1vdmUgdGhlIGxpc3RlbmVyXG5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbmVydGlhOnN0YXJ0Jywgc3RhcnRFdmVudExpc3RlbmVyKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0J7RgtC80LXQvdCwINGB0L7QsdGL0YLQuNC5YH08L2gyPlxuICAgIDxwPntg0J3QtdC60L7RgtC+0YDRi9C1INGB0L7QsdGL0YLQuNGPIChgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdGFydGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbnZhbGlkYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yYH08L2lubGluZUNvZGU+e2ApIHN1cHBvcnQgY2FuY2VsbGF0aW9uLCBhbGxvd2luZyB5b3UgdG8gcHJldmVudCBJbmVydGlhJ3MgZGVmYXVsdCBiZWhhdmlvdXIuIEp1c3QgbGlrZSBuYXRpdmUgZXZlbnRzLCBpZiBvbmx5IG9uZSBldmVudCBsaXN0ZW5lciBjYWxscyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BldmVudC5wcmV2ZW50RGVmYXVsdCgpYH08L2lubGluZUNvZGU+e2AsIHRoZSBldmVudCB3aWxsIGJlIGNhbmNlbGxlZC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gIGlmICghY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG5hdmlnYXRlIGF3YXk/JykpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEFzIGEgY29udmVuaWVuY2UsIGlmIHlvdSByZWdpc3RlciB5b3VyIGV2ZW50IGxpc3RlbmVyIHVzaW5nIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEub24oKWB9PC9pbmxpbmVDb2RlPntgLCB5b3UgY2FuIGFsc28gY2FuY2VsIHRoZSBldmVudCBieSByZXR1cm5pbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmFsc2VgfTwvaW5saW5lQ29kZT57YCBmcm9tIHRoZSBsaXN0ZW5lci5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbmF2aWdhdGUgYXdheT8nKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YFN0YXJ0YH08L2gyPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0YXJ0YH08L2lubGluZUNvZGU+e2AgZXZlbnQgZmlyZXMgYmVmb3JlIGEgcmVxdWVzdCBpcyBtYWRlIHRvIHRoZSBzZXJ2ZXIuIFRoaXMgaXMgdXNlZnVsIGZvciBkaXNwbGF5aW5nIGxvYWRpbmcgaW5kaWNhdG9ycyBhbmQgZm9yIGludGVyY2VwdGluZyB2aXNpdHMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3N0YXJ0JywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YENhbmNlbCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RhcnRgfTwvaW5saW5lQ29kZT57YCBldmVudCB0byBwcmV2ZW50IHRoZSB2aXNpdCBmcm9tIGhhcHBlbmluZy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbmF2aWdhdGUgYXdheT8nKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YFByb2dyZXNzYH08L2gyPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByb2dyZXNzYH08L2lubGluZUNvZGU+e2AgZXZlbnQgZmlyZXMgYXMgcHJvZ3Jlc3MgaW5jcmVtZW50cyBkdXJpbmcgZmlsZSB1cGxvYWRzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdwcm9ncmVzcycsIGV2ZW50ID0+IHtcbiAgdGhpcy5mb3JtLnByb2dyZXNzID0gZXZlbnQuZGV0YWlsLnByb2dyZXNzLnBlcmNlbnRhZ2Vcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwcm9ncmVzc2B9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGlzIG5vdCBjYW5jZWxhYmxlLmB9PC9wPlxuICAgIDxoMj57YFN1Y2Nlc3NgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3VjY2Vzc2B9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGZpcmVzIG9uIHN1Y2Nlc3NmdWwgcGFnZSB2aXNpdHMuIE5vdGUsIHRoaXMgZG9lcyBgfTxlbSBwYXJlbnROYW1lPVwicFwiPntgbm90YH08L2VtPntgIGluY2x1ZGUgaGlzdG9yeSB2aXNpdHMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3N1Y2Nlc3MnLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN1Y2Nlc3NmdWxseSBtYWRlIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC5wYWdlLnVybH1cXGApXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3VjY2Vzc2B9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGlzIG5vdCBjYW5jZWxhYmxlLmB9PC9wPlxuICAgIDxoMj57YEludmFsaWRgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW52YWxpZGB9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGZpcmVzIHdoZW4gYSBub24tSW5lcnRpYSByZXNwb25zZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXIsIHN1Y2ggYXMgYW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaHRtbGB9PC9pbmxpbmVDb2RlPntgIG9yIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGpzb25gfTwvaW5saW5lQ29kZT57YCByZXNwb25zZS4gQSB2YWxpZCBJbmVydGlhIHJlc3BvbnNlIGlzIG9uZSB0aGF0IGhhcyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhYH08L2lubGluZUNvZGU+e2AgaGVhZGVyIHNldCB0byBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2Agd2l0aCBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGpzb25gfTwvaW5saW5lQ29kZT57YCBwYXlsb2FkIGNvbnRhaW5pbmcgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi90aGUtcHJvdG9jb2wjdGhlLXBhZ2Utb2JqZWN0XCJcbiAgICAgIH19PntgdGhlIHBhZ2Ugb2JqZWN0YH08L2E+e2AuYH08L3A+XG4gICAgPHA+e2BUaGlzIGV2ZW50IGlzIGZpcmVkIGZvciBhbGwgcmVzcG9uc2UgdHlwZXMsIGluY2x1ZGluZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AyMDBgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDAwYH08L2lubGluZUNvZGU+e2AsIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A1MDBgfTwvaW5saW5lQ29kZT57YCByZXNwb25zZSBjb2Rlcy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignaW52YWxpZCcsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgQW4gaW52YWxpZCBJbmVydGlhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cXGApXG4gIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC5yZXNwb25zZSlcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YENhbmNlbCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW52YWxpZGB9PC9pbmxpbmVDb2RlPntgIGV2ZW50IHRvIHByZXZlbnQgSW5lcnRpYSBmcm9tIHNob3dpbmcgdGhlIG5vbi1JbmVydGlhIHJlc3BvbnNlIG1vZGFsLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdpbnZhbGlkJywgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIEhhbmRsZSB0aGUgaW52YWxpZCByZXNwb25zZSB5b3Vyc2VsZlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YEVycm9yYH08L2gyPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yYH08L2lubGluZUNvZGU+e2AgZXZlbnQgZmlyZXMgb24gdW5leHBlY3RlZCBYSFIgZXJyb3JzLCBzdWNoIGFzIG5ldHdvcmsgaW50ZXJydXB0aW9ucywgYW5kIGZvciBlcnJvcnMgZ2VuZXJhdGVkIGluIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlQ29tcG9uZW50KClgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjay5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignZXJyb3InLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYEFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGFuIEluZXJ0aWEgdmlzaXQuXFxgKVxuICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwuZXJyb3IpXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BDYW5jZWwgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yYH08L2lubGluZUNvZGU+e2AgZXZlbnQgdG8gcHJldmVudCB0aGUgZXJyb3IgZnJvbSBiZWluZyB0aHJvd24uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ2Vycm9yJywgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIEhhbmRsZSB0aGUgZXJyb3IgeW91cnNlbGZcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YE5vdGUsIHRoaXMgZXZlbnQgd2lsbCBgfTxlbSBwYXJlbnROYW1lPVwicFwiPntgbm90YH08L2VtPntgIGZpcmUgZm9yIFhIUiByZXF1ZXN0cyB0aGF0IHJlY2VpdmUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDAwYH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDUwMGB9PC9pbmxpbmVDb2RlPntgIGxldmVsIHJlc3BvbnNlcywgb3IgZm9yIG5vbi1JbmVydGlhIHJlc3BvbnNlcywgYXMgdGhlc2Ugc2l0dWF0aW9ucyBhcmUgaGFuZGxlZCBpbiBvdGhlciB3YXlzIGJ5IEluZXJ0aWEuIFNlZSB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9lcnJvci1oYW5kbGluZ1wiXG4gICAgICB9fT57YGVycm9yIGhhbmRsaW5nYH08L2E+e2AgcGFnZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gfTwvcD5cbiAgICA8aDI+e2BGaW5pc2hgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmluaXNoYH08L2lubGluZUNvZGU+e2AgZXZlbnQgZmlyZXMgYWZ0ZXIgYW4gWEhSIHJlcXVlc3QgaGFzIGNvbXBsZXRlZCBmb3IgYm90aCBzdWNjZXNzZnVsIGFuZCB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VzLiBUaGlzIGV2ZW50IGlzIHVzZWZ1bCBmb3IgaGlkaW5nIGxvYWRpbmcgaW5kaWNhdG9ycy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignZmluaXNoJywgZXZlbnQgPT4ge1xuICBOUHJvZ3Jlc3MuZG9uZSgpXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmluaXNoYH08L2lubGluZUNvZGU+e2AgZXZlbnQgaXMgbm90IGNhbmNlbGFibGUuYH08L3A+XG4gICAgPGgyPntgTmF2aWdhdGVgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbmF2aWdhdGVgfTwvaW5saW5lQ29kZT57YCBldmVudCBmaXJlcyBvbiBzdWNjZXNzZnVsIHBhZ2UgdmlzaXRzLCBhcyB3ZWxsIGFzIHdoZW4gbmF2aWdhdGluZyB0aHJvdWdoIGhpc3RvcnkuIFRoaXMgZXZlbnQgaXMgdXNlZnVsIGZvciB0cmFja2luZyBhbmFseXRpY3MgYW5kIHRoaW5ncyBvZiB0aGF0IG5hdHVyZS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignbmF2aWdhdGUnLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYE5hdmlnYXRlZCB0byBcXCR7ZXZlbnQuZGV0YWlsLnBhZ2UudXJsfVxcYClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYXZpZ2F0ZWB9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGlzIG5vdCBjYW5jZWxhYmxlLmB9PC9wPlxuICAgIDxoMj57YEV2ZW50IGNhbGxiYWNrc2B9PC9oMj5cbiAgICA8cD57YEluIGFkZGl0aW9uIHRvIHRoZSBnbG9iYWwgZXZlbnRzLCBJbmVydGlhIGFsc28gcHJvdmlkZXMgYSBudW1iZXIgb2YgZXZlbnQgY2FsbGJhY2tzIHdoZW4gbWFudWFsbHkgbWFraW5nIEluZXJ0aWEgdmlzaXRzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnZpc2l0KHVybCwge1xuICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiB7fSxcbiAgb25DYW5jZWw6ICgpID0+IHt9LFxuICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgb25GaW5pc2g6ICgpID0+IHt9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==