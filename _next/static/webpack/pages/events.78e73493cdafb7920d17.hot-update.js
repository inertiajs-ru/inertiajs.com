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
  }, "error"), ") \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442 \u043E\u0442\u043C\u0435\u043D\u0443, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 Inertia \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E. \u041A\u0430\u043A \u0438 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0435\u0441\u043B\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 369
    }
  }, "event.preventDefault()"), ", \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u0414\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430, \u0435\u0441\u043B\u0438 \u0412\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0435 \u0441\u0432\u043E\u0439 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 83
    }
  }, "Inertia.on()"), ", \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0435, \u0432\u0435\u0440\u043D\u0443\u0432 \u0438\u0437 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 199
    }
  }, "false"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 20
    }
  }, "start"), " \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440. \u042D\u0442\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, "start"), ", \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 20
    }
  }, "progress"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u043C\u0435\u0440\u0435 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u0430\u0439\u043B\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 20
    }
  }, "progress"), " \u043D\u0435 \u043E\u0442\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
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
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 20
    }
  }, "success"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u044D\u0442\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 148
    }
  }, "\u043D\u0435"), " \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 20
    }
  }, "success"), " \u043D\u0435 \u043E\u0442\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
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
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 20
    }
  }, "invalid"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D \u043D\u0435-Inertia \u043E\u0442\u0432\u0435\u0442, \u0442\u0430\u043A\u043E\u0439 \u043A\u0430\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 142
    }
  }, "html"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 199
    }
  }, "json"), " \u043E\u0442\u0432\u0435\u0442. \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 Inertia - \u044D\u0442\u043E \u043E\u0442\u0432\u0435\u0442, \u0443 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 318
    }
  }, "X-Inertia"), " \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0432 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 398
    }
  }, "true"), " \u0441 \u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 472
    }
  }, "json"), ", \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/the-protocol#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 537
    }
  }), "\u043E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }, "\u042D\u0442\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0438\u043F\u043E\u0432 \u043E\u0442\u0432\u0435\u0442\u043E\u0432, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043A\u043E\u0434\u044B \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 81
    }
  }, "200"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 134
    }
  }, "400"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 188
    }
  }, "500"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 29
    }
  }, "invalid"), ", \u0447\u0442\u043E\u0431\u044B Inertia \u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u043B\u0430 \u0440\u0435\u0436\u0438\u043C \u043E\u0442\u0432\u0435\u0442\u0430, \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043E\u0442 Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 20
    }
  }, "error"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u044B\u0445 \u043E\u0448\u0438\u0431\u043A\u0430\u043C XHR, \u0442\u0430\u043A\u0438\u0445 \u043A\u0430\u043A \u043F\u0435\u0440\u0435\u0431\u043E\u0438 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u0435\u0442\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043A \u043E\u0448\u0438\u0431\u043A\u0430\u043C, \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u043C\u044B\u043C \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u0432\u044B\u0437\u043E\u0432\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 203
    }
  }, "resolveComponent()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 29
    }
  }, "error"), ", \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u044D\u0442\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 47
    }
  }, "\u043D\u0435"), " \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0434\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 XHR, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u043E\u0442\u0432\u0435\u0442\u044B \u0443\u0440\u043E\u0432\u043D\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 143
    }
  }, "400"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 197
    }
  }, "500"), ", \u0438\u043B\u0438 \u0434\u043B\u044F \u043D\u0435\u0438\u043D\u0435\u0440\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u044D\u0442\u0438 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u043C\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia. See the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/error-handling"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 364
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxTQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxzQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLGlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsUUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVRJLEVBWUo7QUFDREQsT0FBRyxFQUFFLFdBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FaSSxFQWVKO0FBQ0RELE9BQUcsRUFBRSxVQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLFVBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FsQkksRUFxQko7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FyQkksRUF3Qko7QUFDREQsT0FBRyxFQUFFLFNBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0F4QkksRUEyQko7QUFDREQsT0FBRyxFQUFFLFdBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0EzQkksRUE4Qko7QUFDREQsT0FBRyxFQUFFLDBCQURKO0FBRURDLFFBQUksRUFBRTtB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TSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdNQUFMLENBbE1LLENBQVA7QUE4TUQ7S0FsTnVCRCxVO0FBb054QjtBQUNBQSxVQUFVLENBQUNHLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjc4ZTczNDkzY2RhZmI3OTIwZDE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KHQvtCx0YvRgtC40Y8nLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0YDQtdCz0LjRgdGC0YDQsNGG0LjRjy3RgdC70YPRiNCw0YLQtdC70LXQuScsXG4gICAgbmFtZTogJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y8g0YHQu9GD0YjQsNGC0LXQu9C10LknXG4gIH0sIHtcbiAgICB1cmw6ICcj0YPQtNCw0LvQtdC90LjQtS3RgdC70YPRiNCw0YLQtdC70LXQuScsXG4gICAgbmFtZTogJ9Cj0LTQsNC70LXQvdC40LUg0YHQu9GD0YjQsNGC0LXQu9C10LknXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7RgtC80LXQvdCwLdGB0L7QsdGL0YLQuNC5JyxcbiAgICBuYW1lOiAn0J7RgtC80LXQvdCwINGB0L7QsdGL0YLQuNC5J1xuICB9LCB7XG4gICAgdXJsOiAnI3N0YXJ0JyxcbiAgICBuYW1lOiAnU3RhcnQnXG4gIH0sIHtcbiAgICB1cmw6ICcjcHJvZ3Jlc3MnLFxuICAgIG5hbWU6ICdQcm9ncmVzcydcbiAgfSwge1xuICAgIHVybDogJyNzdWNjZXNzJyxcbiAgICBuYW1lOiAnU3VjY2VzcydcbiAgfSwge1xuICAgIHVybDogJyNpbnZhbGlkJyxcbiAgICBuYW1lOiAnSW52YWxpZCdcbiAgfSwge1xuICAgIHVybDogJyNlcnJvcicsXG4gICAgbmFtZTogJ0Vycm9yJ1xuICB9LCB7XG4gICAgdXJsOiAnI2ZpbmlzaCcsXG4gICAgbmFtZTogJ0ZpbmlzaCdcbiAgfSwge1xuICAgIHVybDogJyNuYXZpZ2F0ZScsXG4gICAgbmFtZTogJ05hdmlnYXRlJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHRgNCw0YLQvdGL0LUt0LLRi9C30L7QstGLLdGB0L7QsdGL0YLQuNC5JyxcbiAgICBuYW1lOiAn0J7QsdGA0LDRgtC90YvQtSDQstGL0LfQvtCy0Ysg0YHQvtCx0YvRgtC40LknXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQodC+0LHRi9GC0LjRj2B9PC9oMT5cbiAgICA8cD57YEluZXJ0aWEg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YIg0YHQuNGB0YLQtdC80YMg0YHQvtCx0YvRgtC40LksINC60L7RgtC+0YDQsNGPINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQktCw0LwgwqvQv9C+0LTQutC70Y7Rh9Cw0YLRjNGB0Y/CuyDQuiDRgNCw0LfQu9C40YfQvdGL0Lwg0YHQvtCx0YvRgtC40Y/QvCDQttC40LfQvdC10L3QvdC+0LPQviDRhtC40LrQu9CwINCx0LjQsdC70LjQvtGC0LXQutC4LmB9PC9wPlxuICAgIDxoMj57YNCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0YHQu9GD0YjQsNGC0LXQu9C10LlgfTwvaDI+XG4gICAgPHA+e2DQp9GC0L7QsdGLINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGMINC/0YDQvtGB0LvRg9GI0LjQstCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40LksINC40YHQv9C+0LvRjNC30YPQudGC0LUg0LzQtdGC0L7QtCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLm9uKClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN0YXJ0aW5nIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC52aXNpdC51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgSW5lcnRpYSDQuNGB0L/QvtC70YzQt9GD0LXRgiDRgdC+0LHRgdGC0LLQtdC90L3Ri9C1INGB0L7QsdGL0YLQuNGPINCx0YDQsNGD0LfQtdGA0LAsINGC0LDQuiDRh9GC0L4g0JLRiyDRgtCw0LrQttC1INC80L7QttC10YLQtSDRgNCw0LHQvtGC0LDRgtGMINGBINC90LjQvNC4INGC0LDQutC40Lwg0LbQtSDQvtCx0YDQsNC30L7QvC4g0J/RgNC+0YHRgtC+INC90LUg0LfQsNCx0YPQtNGM0YLQtSDQtNC+0LHQsNCy0LjRgtGMIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGluZXJ0aWE6YH08L2lubGluZUNvZGU+e2Ag0Log0LjQvNC10L3QuCDRgdC+0LHRi9GC0LjRjy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5lcnRpYTpzdGFydCcsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgU3RhcnRpbmcgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0KPQtNCw0LvQtdC90LjQtSDRgdC70YPRiNCw0YLQtdC70LXQuWB9PC9oMj5cbiAgICA8cD57YNCa0L7Qs9C00LAg0JLRiyDRgNC10LPQuNGB0YLRgNC40YDRg9C10YLQtSDQv9GA0L7RgdC70YPRiNC40LLQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5LCBJbmVydGlhINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINCS0LDQvCDQvtCx0YDQsNGC0L3Ri9C5INCy0YvQt9C+0LIg0LTQu9GPINGD0LTQsNC70LXQvdC40Y8g0L/RgNC+0YHQu9GD0YjQuNCy0LDRgtC10LvRjyDRgdC+0LHRi9GC0LjQuS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgbGV0IHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lciA9IEluZXJ0aWEub24oJ3N0YXJ0JywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn0pXG5cbi8vIFJlbW92ZSB0aGUgbGlzdGVuZXJcbnJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcigpXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCSINGB0L7Rh9C10YLQsNC90LjQuCDRgSDQvtCx0YDQsNCx0L7RgtCw0L3QvdC+0Lkg0LvQvtCy0YPRiNC60L7QuSDQktGLINC80L7QttC10YLQtSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRg9C00LDQu9C40YLRjCDQv9GA0L7RgdC70YPRiNC40LLQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5INC/0YDQuCDQv9C10YDQtdGF0L7QtNC1INC90LAg0LTRgNGD0LPRg9GOINGB0YLRgNCw0L3QuNGG0YMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGV4cG9ydCBkZWZhdWx0IHtcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRvbmNlKFxuICAgICAgJ2hvb2s6ZGVzdHJveWVkJyxcbiAgICAgIEluZXJ0aWEub24oJ3N0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbiAgICAgIH0pXG4gICAgKVxuICB9LFxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQkiDQutCw0YfQtdGB0YLQstC1INCw0LvRjNGC0LXRgNC90LDRgtC40LLRiywg0LXRgdC70Lgg0JLRiyDQuNGB0L/QvtC70YzQt9GD0LXRgtC1INGB0L7QsdGB0YLQstC10L3QvdGL0LUg0YHQvtCx0YvRgtC40Y8g0LHRgNCw0YPQt9C10YDQsCwg0JLRiyDQvNC+0LbQtdGC0LUg0YPQtNCw0LvQuNGC0Ywg0L/RgNC+0YHQu9GD0YjQuNCy0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjQuSwg0LjRgdC/0L7Qu9GM0LfRg9GPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlbW92ZUV2ZW50TGlzdGVuZXIoKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BsZXQgc3RhcnRFdmVudExpc3RlbmVyID0gZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5lcnRpYTpzdGFydCcsIHN0YXJ0RXZlbnRMaXN0ZW5lcilcblxuLy8gUmVtb3ZlIHRoZSBsaXN0ZW5lclxuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5lcnRpYTpzdGFydCcsIHN0YXJ0RXZlbnRMaXN0ZW5lcilcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCe0YLQvNC10L3QsCDRgdC+0LHRi9GC0LjQuWB9PC9oMj5cbiAgICA8cD57YNCd0LXQutC+0YLQvtGA0YvQtSDRgdC+0LHRi9GC0LjRjyAoYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RhcnRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW52YWxpZGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BlcnJvcmB9PC9pbmxpbmVDb2RlPntgKSDQv9C+0LTQtNC10YDQttC40LLQsNGO0YIg0L7RgtC80LXQvdGDLCDRh9GC0L4g0L/QvtC30LLQvtC70Y/QtdGCINC/0YDQtdC00L7RgtCy0YDQsNGC0LjRgtGMINC/0L7QstC10LTQtdC90LjQtSBJbmVydGlhINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLiDQmtCw0Log0Lgg0LIg0YHQu9GD0YfQsNC1INGBINGB0L7QsdGB0YLQstC10L3QvdGL0LzQuCDRgdC+0LHRi9GC0LjRj9C80LgsINC10YHQu9C4INGC0L7Qu9GM0LrQviDQvtC00LjQvSDQv9GA0L7RgdC70YPRiNC40LLQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5INCy0YvQt9GL0LLQsNC10YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXZlbnQucHJldmVudERlZmF1bHQoKWB9PC9pbmxpbmVDb2RlPntgLCDRgdC+0LHRi9GC0LjQtSDQsdGD0LTQtdGCINC+0YLQvNC10L3QtdC90L4uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3N0YXJ0JywgZXZlbnQgPT4ge1xuICBpZiAoIWNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQlNC70Y8g0YPQtNC+0LHRgdGC0LLQsCwg0LXRgdC70Lgg0JLRiyDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQtdGC0LUg0YHQstC+0Lkg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5INGBINC/0L7QvNC+0YnRjNGOIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEub24oKWB9PC9pbmxpbmVDb2RlPntgLCDQktGLINGC0LDQutC20LUg0LzQvtC20LXRgtC1INC+0YLQvNC10L3QuNGC0Ywg0YHQvtCx0YvRgtC40LUsINCy0LXRgNC90YPQsiDQuNC3INGB0LvRg9GI0LDRgtC10LvRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmYWxzZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgU3RhcnRgfTwvaDI+XG4gICAgPHA+e2DQodC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdGFydGB9PC9pbmxpbmVDb2RlPntgINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0L/QtdGA0LXQtCDQvtGC0L/RgNCw0LLQutC+0Lkg0LfQsNC/0YDQvtGB0LAg0L3QsCDRgdC10YDQstC10YAuINCt0YLQviDQv9C+0LvQtdC30L3QviDQtNC70Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQuNC90LTQuNC60LDRgtC+0YDQvtCyINC30LDQs9GA0YPQt9C60Lgg0Lgg0L7RgtGB0LvQtdC20LjQstCw0L3QuNGPINC/0L7RgdC10YnQtdC90LjQuS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN0YXJ0aW5nIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC52aXNpdC51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0J7RgtC80LXQvdC40YLQtSDRgdC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdGFydGB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINC/0L7RgdC10YnQtdC90LjQtSDQvdC1INC/0YDQvtC40LfQvtGI0LvQvi5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbmF2aWdhdGUgYXdheT8nKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YFByb2dyZXNzYH08L2gyPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJvZ3Jlc3NgfTwvaW5saW5lQ29kZT57YCDQt9Cw0L/Rg9GB0LrQsNC10YLRgdGPINC/0L4g0LzQtdGA0LUg0YPQstC10LvQuNGH0LXQvdC40Y8g0L/RgNC+0LPRgNC10YHRgdCwINCy0L4g0LLRgNC10LzRjyDQt9Cw0LPRgNGD0LfQutC4INGE0LDQudC70L7Qsi5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbigncHJvZ3Jlc3MnLCBldmVudCA9PiB7XG4gIHRoaXMuZm9ybS5wcm9ncmVzcyA9IGV2ZW50LmRldGFpbC5wcm9ncmVzcy5wZXJjZW50YWdlXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQodC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwcm9ncmVzc2B9PC9pbmxpbmVDb2RlPntgINC90LUg0L7RgtC80LXQvdGP0LXQvNC+0LUuYH08L3A+XG4gICAgPGgyPntgU3VjY2Vzc2B9PC9oMj5cbiAgICA8cD57YNCh0L7QsdGL0YLQuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN1Y2Nlc3NgfTwvaW5saW5lQ29kZT57YCDQt9Cw0L/Rg9GB0LrQsNC10YLRgdGPINC/0YDQuCDRg9GB0L/QtdGI0L3QvtC8INC/0L7RgdC10YnQtdC90LjQuCDRgdGC0YDQsNC90LjRhtGLLiDQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINGH0YLQviDRjdGC0L4gYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YNC90LVgfTwvZW0+e2Ag0LLQutC70Y7Rh9Cw0LXRgiDQv9C+0YHQtdGJ0LXQvdC40LUg0LjRgdGC0L7RgNC40LguYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3N1Y2Nlc3MnLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN1Y2Nlc3NmdWxseSBtYWRlIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC5wYWdlLnVybH1cXGApXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQodC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdWNjZXNzYH08L2lubGluZUNvZGU+e2Ag0L3QtSDQvtGC0LzQtdC90Y/QtdC80L7QtS5gfTwvcD5cbiAgICA8aDI+e2BJbnZhbGlkYH08L2gyPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW52YWxpZGB9PC9pbmxpbmVDb2RlPntgINC30LDQv9GD0YHQutCw0LXRgtGB0Y8sINC60L7Qs9C00LAg0L7RgiDRgdC10YDQstC10YDQsCDQv9C+0LvRg9GH0LXQvSDQvdC1LUluZXJ0aWEg0L7RgtCy0LXRgiwg0YLQsNC60L7QuSDQutCw0LogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaHRtbGB9PC9pbmxpbmVDb2RlPntgINC40LvQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bqc29uYH08L2lubGluZUNvZGU+e2Ag0L7RgtCy0LXRgi4g0JTQvtC/0YPRgdGC0LjQvNGL0Lkg0L7RgtCy0LXRgiBJbmVydGlhIC0g0Y3RgtC+INC+0YLQstC10YIsINGDINC60L7RgtC+0YDQvtCz0L4g0LfQsNCz0L7Qu9C+0LLQvtC6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYWB9PC9pbmxpbmVDb2RlPntgINGD0YHRgtCw0L3QvtCy0LvQtdC9INCyINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgINGBINC/0L7Qu9C10LfQvdC+0Lkg0L3QsNCz0YDRg9C30LrQvtC5IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGpzb25gfTwvaW5saW5lQ29kZT57YCwg0YHQvtC00LXRgNC20LDRidC10LkgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi90aGUtcHJvdG9jb2wjJUQwJUJFJUQwJUIxJUQxJThBJUQwJUI1JUQwJUJBJUQxJTgyLSVEMSU4MSVEMSU4MiVEMSU4MCVEMCVCMCVEMCVCRCVEMCVCOCVEMSU4NiVEMSU4QlwiXG4gICAgICB9fT57YNC+0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLYH08L2E+e2AuYH08L3A+XG4gICAgPHA+e2DQrdGC0L4g0YHQvtCx0YvRgtC40LUg0LfQsNC/0YPRgdC60LDQtdGC0YHRjyDQtNC70Y8g0LLRgdC10YUg0YLQuNC/0L7QsiDQvtGC0LLQtdGC0L7Qsiwg0LLQutC70Y7Rh9Cw0Y8g0LrQvtC00Ysg0L7RgtCy0LXRgtC+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgMjAwYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwMGB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDUwMGB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdpbnZhbGlkJywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBBbiBpbnZhbGlkIEluZXJ0aWEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlxcYClcbiAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLnJlc3BvbnNlKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0J7RgtC80LXQvdC40YLQtSDRgdC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbnZhbGlkYH08L2lubGluZUNvZGU+e2AsINGH0YLQvtCx0YsgSW5lcnRpYSDQvdC1INC+0YLQvtCx0YDQsNC20LDQu9CwINGA0LXQttC40Lwg0L7RgtCy0LXRgtCwLCDQvtGC0LvQuNGH0L3QvtCz0L4g0L7RgiBJbmVydGlhLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdpbnZhbGlkJywgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIEhhbmRsZSB0aGUgaW52YWxpZCByZXNwb25zZSB5b3Vyc2VsZlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YEVycm9yYH08L2gyPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JgfTwvaW5saW5lQ29kZT57YCDQt9Cw0L/Rg9GB0LrQsNC10YLRgdGPINC/0YDQuCDQvdC10L/RgNC10LTQstC40LTQtdC90L3Ri9GFINC+0YjQuNCx0LrQsNC8IFhIUiwg0YLQsNC60LjRhSDQutCw0Log0L/QtdGA0LXQsdC+0Lgg0LIg0YDQsNCx0L7RgtC1INGB0LXRgtC4LCDQsCDRgtCw0LrQttC1INC6INC+0YjQuNCx0LrQsNC8LCDQs9C10L3QtdGA0LjRgNGD0LXQvNGL0Lwg0L/RgNC4INC+0LHRgNCw0YLQvdC+0Lwg0LLRi9C30L7QstC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnQoKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdlcnJvcicsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCBkdXJpbmcgYW4gSW5lcnRpYSB2aXNpdC5cXGApXG4gIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC5lcnJvcilcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCe0YLQvNC10L3QuNGC0LUg0YHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDQv9GA0LXQtNC+0YLQstGA0LDRgtC40YLRjCDQstC+0LfQvdC40LrQvdC+0LLQtdC90LjQtSDQvtGI0LjQsdC60LguYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ2Vycm9yJywgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIEhhbmRsZSB0aGUgZXJyb3IgeW91cnNlbGZcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0YfRgtC+INGN0YLQviDRgdC+0LHRi9GC0LjQtSBgfTxlbSBwYXJlbnROYW1lPVwicFwiPntg0L3QtWB9PC9lbT57YCDRgdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC00LvRjyDQt9Cw0L/RgNC+0YHQvtCyIFhIUiwg0LrQvtGC0L7RgNGL0LUg0L/QvtC70YPRh9Cw0Y7RgiDQvtGC0LLQtdGC0Ysg0YPRgNC+0LLQvdGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwMGB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDUwMGB9PC9pbmxpbmVDb2RlPntgLCDQuNC70Lgg0LTQu9GPINC90LXQuNC90LXRgNGG0LjQvtC90L3Ri9GFINC+0YLQstC10YLQvtCyLCDQv9C+0YHQutC+0LvRjNC60YMg0Y3RgtC4INGB0LjRgtGD0LDRhtC40Lgg0L7QsdGA0LDQsdCw0YLRi9Cy0LDRjtGC0YHRjyDQtNGA0YPQs9C40LzQuCDRgdC/0L7RgdC+0LHQsNC80Lgg0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYS4gU2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2Vycm9yLWhhbmRsaW5nXCJcbiAgICAgIH19PntgZXJyb3IgaGFuZGxpbmdgfTwvYT57YCBwYWdlIGZvciBtb3JlIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDxoMj57YEZpbmlzaGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5pc2hgfTwvaW5saW5lQ29kZT57YCBldmVudCBmaXJlcyBhZnRlciBhbiBYSFIgcmVxdWVzdCBoYXMgY29tcGxldGVkIGZvciBib3RoIHN1Y2Nlc3NmdWwgYW5kIHVuc3VjY2Vzc2Z1bCByZXNwb25zZXMuIFRoaXMgZXZlbnQgaXMgdXNlZnVsIGZvciBoaWRpbmcgbG9hZGluZyBpbmRpY2F0b3JzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdmaW5pc2gnLCBldmVudCA9PiB7XG4gIE5Qcm9ncmVzcy5kb25lKClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5pc2hgfTwvaW5saW5lQ29kZT57YCBldmVudCBpcyBub3QgY2FuY2VsYWJsZS5gfTwvcD5cbiAgICA8aDI+e2BOYXZpZ2F0ZWB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYXZpZ2F0ZWB9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGZpcmVzIG9uIHN1Y2Nlc3NmdWwgcGFnZSB2aXNpdHMsIGFzIHdlbGwgYXMgd2hlbiBuYXZpZ2F0aW5nIHRocm91Z2ggaGlzdG9yeS4gVGhpcyBldmVudCBpcyB1c2VmdWwgZm9yIHRyYWNraW5nIGFuYWx5dGljcyBhbmQgdGhpbmdzIG9mIHRoYXQgbmF0dXJlLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCduYXZpZ2F0ZScsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgTmF2aWdhdGVkIHRvIFxcJHtldmVudC5kZXRhaWwucGFnZS51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5hdmlnYXRlYH08L2lubGluZUNvZGU+e2AgZXZlbnQgaXMgbm90IGNhbmNlbGFibGUuYH08L3A+XG4gICAgPGgyPntgRXZlbnQgY2FsbGJhY2tzYH08L2gyPlxuICAgIDxwPntgSW4gYWRkaXRpb24gdG8gdGhlIGdsb2JhbCBldmVudHMsIEluZXJ0aWEgYWxzbyBwcm92aWRlcyBhIG51bWJlciBvZiBldmVudCBjYWxsYmFja3Mgd2hlbiBtYW51YWxseSBtYWtpbmcgSW5lcnRpYSB2aXNpdHMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQodXJsLCB7XG4gIG9uQ2FuY2VsVG9rZW46IGNhbmNlbFRva2VuID0+IHt9LFxuICBvbkNhbmNlbDogKCkgPT4ge30sXG4gIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICBvbkZpbmlzaDogKCkgPT4ge30sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9