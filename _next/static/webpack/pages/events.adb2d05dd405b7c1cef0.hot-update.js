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
  }, "invalid"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D \u043D\u0435-Inertia response is received from the server, such as an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 174
    }
  }, "html"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 230
    }
  }, "json"), " response. A valid Inertia response is one that has the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 338
    }
  }, "X-Inertia"), " header set to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 410
    }
  }, "true"), " with a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 470
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
      columnNumber: 542
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxTQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxzQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLGlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsUUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVRJLEVBWUo7QUFDREQsT0FBRyxFQUFFLFdBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FaSSxFQWVKO0FBQ0RELE9BQUcsRUFBRSxVQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLFVBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FsQkksRUFxQko7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FyQkksRUF3Qko7QUFDREQsT0FBRyxFQUFFLFNBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0F4QkksRUEyQko7QUFDREQsT0FBRyxFQUFFLFdBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0EzQkksRUE4Qko7QUFDREQsT0FBRyxFQUFFLDBCQURKO0FBRURDLFFBQUksRUFBRTtB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VSxFQUFDO0FBQWpCLEtBQTJCO0FBQzVCLGlCQUFhO0FBRGUsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3TUFBTCxDQWxNSyxDQUFQO0FBOE1EO0tBbE51QkQsVTtBQW9OeEI7QUFDQUEsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy5hZGIyZDA1ZGQ0MDViN2MxY2VmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Ch0L7QsdGL0YLQuNGPJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GA0LXQs9C40YHRgtGA0LDRhtC40Y8t0YHQu9GD0YjQsNGC0LXQu9C10LknLFxuICAgIG5hbWU6ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPINGB0LvRg9GI0LDRgtC10LvQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9GD0LTQsNC70LXQvdC40LUt0YHQu9GD0YjQsNGC0LXQu9C10LknLFxuICAgIG5hbWU6ICfQo9C00LDQu9C10L3QuNC1INGB0LvRg9GI0LDRgtC10LvQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0YLQvNC10L3QsC3RgdC+0LHRi9GC0LjQuScsXG4gICAgbmFtZTogJ9Ce0YLQvNC10L3QsCDRgdC+0LHRi9GC0LjQuSdcbiAgfSwge1xuICAgIHVybDogJyNzdGFydCcsXG4gICAgbmFtZTogJ1N0YXJ0J1xuICB9LCB7XG4gICAgdXJsOiAnI3Byb2dyZXNzJyxcbiAgICBuYW1lOiAnUHJvZ3Jlc3MnXG4gIH0sIHtcbiAgICB1cmw6ICcjc3VjY2VzcycsXG4gICAgbmFtZTogJ1N1Y2Nlc3MnXG4gIH0sIHtcbiAgICB1cmw6ICcjaW52YWxpZCcsXG4gICAgbmFtZTogJ0ludmFsaWQnXG4gIH0sIHtcbiAgICB1cmw6ICcjZXJyb3InLFxuICAgIG5hbWU6ICdFcnJvcidcbiAgfSwge1xuICAgIHVybDogJyNmaW5pc2gnLFxuICAgIG5hbWU6ICdGaW5pc2gnXG4gIH0sIHtcbiAgICB1cmw6ICcjbmF2aWdhdGUnLFxuICAgIG5hbWU6ICdOYXZpZ2F0ZSdcbiAgfSwge1xuICAgIHVybDogJyPQvtCx0YDQsNGC0L3Ri9C1LdCy0YvQt9C+0LLRiy3RgdC+0LHRi9GC0LjQuScsXG4gICAgbmFtZTogJ9Ce0LHRgNCw0YLQvdGL0LUg0LLRi9C30L7QstGLINGB0L7QsdGL0YLQuNC5J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KHQvtCx0YvRgtC40Y9gfTwvaDE+XG4gICAgPHA+e2BJbmVydGlhINC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGCINGB0LjRgdGC0LXQvNGDINGB0L7QsdGL0YLQuNC5LCDQutC+0YLQvtGA0LDRjyDQv9C+0LfQstC+0LvRj9C10YIg0JLQsNC8IMKr0L/QvtC00LrQu9GO0YfQsNGC0YzRgdGPwrsg0Log0YDQsNC30LvQuNGH0L3Ri9C8INGB0L7QsdGL0YLQuNGP0Lwg0LbQuNC30L3QtdC90L3QvtCz0L4g0YbQuNC60LvQsCDQsdC40LHQu9C40L7RgtC10LrQuC5gfTwvcD5cbiAgICA8aDI+e2DQoNC10LPQuNGB0YLRgNCw0YbQuNGPINGB0LvRg9GI0LDRgtC10LvQtdC5YH08L2gyPlxuICAgIDxwPntg0KfRgtC+0LHRiyDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjCDQv9GA0L7RgdC70YPRiNC40LLQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5LCDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INC80LXRgtC+0LQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSW5lcnRpYS5vbigpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3N0YXJ0JywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEluZXJ0aWEg0LjRgdC/0L7Qu9GM0LfRg9C10YIg0YHQvtCx0YHRgtCy0LXQvdC90YvQtSDRgdC+0LHRi9GC0LjRjyDQsdGA0LDRg9C30LXRgNCwLCDRgtCw0Log0YfRgtC+INCS0Ysg0YLQsNC60LbQtSDQvNC+0LbQtdGC0LUg0YDQsNCx0L7RgtCw0YLRjCDRgSDQvdC40LzQuCDRgtCw0LrQuNC8INC20LUg0L7QsdGA0LDQt9C+0LwuINCf0YDQvtGB0YLQviDQvdC1INC30LDQsdGD0LTRjNGC0LUg0LTQvtCx0LDQstC40YLRjCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbmVydGlhOmB9PC9pbmxpbmVDb2RlPntgINC6INC40LzQtdC90Lgg0YHQvtCx0YvRgtC40Y8uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2luZXJ0aWE6c3RhcnQnLCBldmVudCA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN0YXJ0aW5nIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC52aXNpdC51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCj0LTQsNC70LXQvdC40LUg0YHQu9GD0YjQsNGC0LXQu9C10LlgfTwvaDI+XG4gICAgPHA+e2DQmtC+0LPQtNCwINCS0Ysg0YDQtdCz0LjRgdGC0YDQuNGA0YPQtdGC0LUg0L/RgNC+0YHQu9GD0YjQuNCy0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjQuSwgSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQstC+0LfQstGA0LDRidCw0LXRgiDQktCw0Lwg0L7QsdGA0LDRgtC90YvQuSDQstGL0LfQvtCyINC00LvRjyDRg9C00LDQu9C10L3QuNGPINC/0YDQvtGB0LvRg9GI0LjQstCw0YLQtdC70Y8g0YHQvtCx0YvRgtC40LkuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGxldCByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIgPSBJbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgU3RhcnRpbmcgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG59KVxuXG4vLyBSZW1vdmUgdGhlIGxpc3RlbmVyXG5yZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIoKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQkiDRgdC+0YfQtdGC0LDQvdC40Lgg0YEg0L7QsdGA0LDQsdC+0YLQsNC90L3QvtC5INC70L7QstGD0YjQutC+0Lkg0JLRiyDQvNC+0LbQtdGC0LUg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YPQtNCw0LvQuNGC0Ywg0L/RgNC+0YHQu9GD0YjQuNCy0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjQuSDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQvdCwINC00YDRg9Cz0YPRjiDRgdGC0YDQsNC90LjRhtGDLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BleHBvcnQgZGVmYXVsdCB7XG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy4kb25jZShcbiAgICAgICdob29rOmRlc3Ryb3llZCcsXG4gICAgICBJbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXFxgU3RhcnRpbmcgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG4gICAgICB9KVxuICAgIClcbiAgfSxcbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JIg0LrQsNGH0LXRgdGC0LLQtSDQsNC70YzRgtC10YDQvdCw0YLQuNCy0YssINC10YHQu9C4INCS0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10YLQtSDRgdC+0LHRgdGC0LLQtdC90L3Ri9C1INGB0L7QsdGL0YLQuNGPINCx0YDQsNGD0LfQtdGA0LAsINCS0Ysg0LzQvtC20LXRgtC1INGD0LTQsNC70LjRgtGMINC/0YDQvtGB0LvRg9GI0LjQstCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40LksINC40YHQv9C+0LvRjNC30YPRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZW1vdmVFdmVudExpc3RlbmVyKClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgbGV0IHN0YXJ0RXZlbnRMaXN0ZW5lciA9IGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgU3RhcnRpbmcgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2luZXJ0aWE6c3RhcnQnLCBzdGFydEV2ZW50TGlzdGVuZXIpXG5cbi8vIFJlbW92ZSB0aGUgbGlzdGVuZXJcbmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2luZXJ0aWE6c3RhcnQnLCBzdGFydEV2ZW50TGlzdGVuZXIpXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQntGC0LzQtdC90LAg0YHQvtCx0YvRgtC40LlgfTwvaDI+XG4gICAgPHA+e2DQndC10LrQvtGC0L7RgNGL0LUg0YHQvtCx0YvRgtC40Y8gKGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0YXJ0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGludmFsaWRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JgfTwvaW5saW5lQ29kZT57YCkg0L/QvtC00LTQtdGA0LbQuNCy0LDRjtGCINC+0YLQvNC10L3Rgywg0YfRgtC+INC/0L7Qt9Cy0L7Qu9GP0LXRgiDQv9GA0LXQtNC+0YLQstGA0LDRgtC40YLRjCDQv9C+0LLQtdC00LXQvdC40LUgSW5lcnRpYSDQv9C+INGD0LzQvtC70YfQsNC90LjRji4g0JrQsNC6INC4INCyINGB0LvRg9GH0LDQtSDRgSDRgdC+0LHRgdGC0LLQtdC90L3Ri9C80Lgg0YHQvtCx0YvRgtC40Y/QvNC4LCDQtdGB0LvQuCDRgtC+0LvRjNC60L4g0L7QtNC40L0g0L/RgNC+0YHQu9GD0YjQuNCy0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjQuSDQstGL0LfRi9Cy0LDQtdGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGV2ZW50LnByZXZlbnREZWZhdWx0KClgfTwvaW5saW5lQ29kZT57YCwg0YHQvtCx0YvRgtC40LUg0LHRg9C00LXRgiDQvtGC0LzQtdC90LXQvdC+LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgaWYgKCFjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbmF2aWdhdGUgYXdheT8nKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JTQu9GPINGD0LTQvtCx0YHRgtCy0LAsINC10YHQu9C4INCS0Ysg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LXRgtC1INGB0LLQvtC5INGB0LvRg9GI0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjQuSDRgSDQv9C+0LzQvtGJ0YzRjiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLm9uKClgfTwvaW5saW5lQ29kZT57YCwg0JLRiyDRgtCw0LrQttC1INC80L7QttC10YLQtSDQvtGC0LzQtdC90LjRgtGMINGB0L7QsdGL0YLQuNC1LCDQstC10YDQvdGD0LIg0LjQtyDRgdC70YPRiNCw0YLQtdC70Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmFsc2VgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbmF2aWdhdGUgYXdheT8nKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YFN0YXJ0YH08L2gyPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RhcnRgfTwvaW5saW5lQ29kZT57YCDRgdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC/0LXRgNC10LQg0L7RgtC/0YDQsNCy0LrQvtC5INC30LDQv9GA0L7RgdCwINC90LAg0YHQtdGA0LLQtdGALiDQrdGC0L4g0L/QvtC70LXQt9C90L4g0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LjQvdC00LjQutCw0YLQvtGA0L7QsiDQt9Cw0LPRgNGD0LfQutC4INC4INC+0YLRgdC70LXQttC40LLQsNC90LjRjyDQv9C+0YHQtdGJ0LXQvdC40LkuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3N0YXJ0JywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCe0YLQvNC10L3QuNGC0LUg0YHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RhcnRgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDQv9C+0YHQtdGJ0LXQvdC40LUg0L3QtSDQv9GA0L7QuNC30L7RiNC70L4uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3N0YXJ0JywgZXZlbnQgPT4ge1xuICByZXR1cm4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG5hdmlnYXRlIGF3YXk/Jylcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2BQcm9ncmVzc2B9PC9oMj5cbiAgICA8cD57YNCh0L7QsdGL0YLQuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByb2dyZXNzYH08L2lubGluZUNvZGU+e2Ag0LfQsNC/0YPRgdC60LDQtdGC0YHRjyDQv9C+INC80LXRgNC1INGD0LLQtdC70LjRh9C10L3QuNGPINC/0YDQvtCz0YDQtdGB0YHQsCDQstC+INCy0YDQtdC80Y8g0LfQsNCz0YDRg9C30LrQuCDRhNCw0LnQu9C+0LIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3Byb2dyZXNzJywgZXZlbnQgPT4ge1xuICB0aGlzLmZvcm0ucHJvZ3Jlc3MgPSBldmVudC5kZXRhaWwucHJvZ3Jlc3MucGVyY2VudGFnZVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJvZ3Jlc3NgfTwvaW5saW5lQ29kZT57YCDQvdC1INC+0YLQvNC10L3Rj9C10LzQvtC1LmB9PC9wPlxuICAgIDxoMj57YFN1Y2Nlc3NgfTwvaDI+XG4gICAgPHA+e2DQodC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdWNjZXNzYH08L2lubGluZUNvZGU+e2Ag0LfQsNC/0YPRgdC60LDQtdGC0YHRjyDQv9GA0Lgg0YPRgdC/0LXRiNC90L7QvCDQv9C+0YHQtdGJ0LXQvdC40Lgg0YHRgtGA0LDQvdC40YbRiy4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0Y3RgtC+IGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2DQvdC1YH08L2VtPntgINCy0LrQu9GO0YfQsNC10YIg0L/QvtGB0LXRidC10L3QuNC1INC40YHRgtC+0YDQuNC4LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdzdWNjZXNzJywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdWNjZXNzZnVsbHkgbWFkZSBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwucGFnZS51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3VjY2Vzc2B9PC9pbmxpbmVDb2RlPntgINC90LUg0L7RgtC80LXQvdGP0LXQvNC+0LUuYH08L3A+XG4gICAgPGgyPntgSW52YWxpZGB9PC9oMj5cbiAgICA8cD57YNCh0L7QsdGL0YLQuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGludmFsaWRgfTwvaW5saW5lQ29kZT57YCDQt9Cw0L/Rg9GB0LrQsNC10YLRgdGPLCDQutC+0LPQtNCwINC+0YIg0YHQtdGA0LLQtdGA0LAg0L/QvtC70YPRh9C10L0g0L3QtS1JbmVydGlhIHJlc3BvbnNlIGlzIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlciwgc3VjaCBhcyBhbiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BodG1sYH08L2lubGluZUNvZGU+e2Agb3IgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntganNvbmB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlLiBBIHZhbGlkIEluZXJ0aWEgcmVzcG9uc2UgaXMgb25lIHRoYXQgaGFzIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWFgfTwvaW5saW5lQ29kZT57YCBoZWFkZXIgc2V0IHRvIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRydWVgfTwvaW5saW5lQ29kZT57YCB3aXRoIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntganNvbmB9PC9pbmxpbmVDb2RlPntgIHBheWxvYWQgY29udGFpbmluZyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3RoZS1wcm90b2NvbCN0aGUtcGFnZS1vYmplY3RcIlxuICAgICAgfX0+e2B0aGUgcGFnZSBvYmplY3RgfTwvYT57YC5gfTwvcD5cbiAgICA8cD57YFRoaXMgZXZlbnQgaXMgZmlyZWQgZm9yIGFsbCByZXNwb25zZSB0eXBlcywgaW5jbHVkaW5nIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDIwMGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MDBgfTwvaW5saW5lQ29kZT57YCwgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDUwMGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlIGNvZGVzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdpbnZhbGlkJywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBBbiBpbnZhbGlkIEluZXJ0aWEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlxcYClcbiAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLnJlc3BvbnNlKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQ2FuY2VsIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbnZhbGlkYH08L2lubGluZUNvZGU+e2AgZXZlbnQgdG8gcHJldmVudCBJbmVydGlhIGZyb20gc2hvd2luZyB0aGUgbm9uLUluZXJ0aWEgcmVzcG9uc2UgbW9kYWwuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ2ludmFsaWQnLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBpbnZhbGlkIHJlc3BvbnNlIHlvdXJzZWxmXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgRXJyb3JgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JgfTwvaW5saW5lQ29kZT57YCBldmVudCBmaXJlcyBvbiB1bmV4cGVjdGVkIFhIUiBlcnJvcnMsIHN1Y2ggYXMgbmV0d29yayBpbnRlcnJ1cHRpb25zLCBhbmQgZm9yIGVycm9ycyBnZW5lcmF0ZWQgaW4gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnQoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdlcnJvcicsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCBkdXJpbmcgYW4gSW5lcnRpYSB2aXNpdC5cXGApXG4gIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC5lcnJvcilcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YENhbmNlbCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JgfTwvaW5saW5lQ29kZT57YCBldmVudCB0byBwcmV2ZW50IHRoZSBlcnJvciBmcm9tIGJlaW5nIHRocm93bi5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignZXJyb3InLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBlcnJvciB5b3Vyc2VsZlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgTm90ZSwgdGhpcyBldmVudCB3aWxsIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2Bub3RgfTwvZW0+e2AgZmlyZSBmb3IgWEhSIHJlcXVlc3RzIHRoYXQgcmVjZWl2ZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MDBgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNTAwYH08L2lubGluZUNvZGU+e2AgbGV2ZWwgcmVzcG9uc2VzLCBvciBmb3Igbm9uLUluZXJ0aWEgcmVzcG9uc2VzLCBhcyB0aGVzZSBzaXR1YXRpb25zIGFyZSBoYW5kbGVkIGluIG90aGVyIHdheXMgYnkgSW5lcnRpYS4gU2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2Vycm9yLWhhbmRsaW5nXCJcbiAgICAgIH19PntgZXJyb3IgaGFuZGxpbmdgfTwvYT57YCBwYWdlIGZvciBtb3JlIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDxoMj57YEZpbmlzaGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5pc2hgfTwvaW5saW5lQ29kZT57YCBldmVudCBmaXJlcyBhZnRlciBhbiBYSFIgcmVxdWVzdCBoYXMgY29tcGxldGVkIGZvciBib3RoIHN1Y2Nlc3NmdWwgYW5kIHVuc3VjY2Vzc2Z1bCByZXNwb25zZXMuIFRoaXMgZXZlbnQgaXMgdXNlZnVsIGZvciBoaWRpbmcgbG9hZGluZyBpbmRpY2F0b3JzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdmaW5pc2gnLCBldmVudCA9PiB7XG4gIE5Qcm9ncmVzcy5kb25lKClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5pc2hgfTwvaW5saW5lQ29kZT57YCBldmVudCBpcyBub3QgY2FuY2VsYWJsZS5gfTwvcD5cbiAgICA8aDI+e2BOYXZpZ2F0ZWB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYXZpZ2F0ZWB9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGZpcmVzIG9uIHN1Y2Nlc3NmdWwgcGFnZSB2aXNpdHMsIGFzIHdlbGwgYXMgd2hlbiBuYXZpZ2F0aW5nIHRocm91Z2ggaGlzdG9yeS4gVGhpcyBldmVudCBpcyB1c2VmdWwgZm9yIHRyYWNraW5nIGFuYWx5dGljcyBhbmQgdGhpbmdzIG9mIHRoYXQgbmF0dXJlLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCduYXZpZ2F0ZScsIGV2ZW50ID0+IHtcbiAgY29uc29sZS5sb2coXFxgTmF2aWdhdGVkIHRvIFxcJHtldmVudC5kZXRhaWwucGFnZS51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5hdmlnYXRlYH08L2lubGluZUNvZGU+e2AgZXZlbnQgaXMgbm90IGNhbmNlbGFibGUuYH08L3A+XG4gICAgPGgyPntgRXZlbnQgY2FsbGJhY2tzYH08L2gyPlxuICAgIDxwPntgSW4gYWRkaXRpb24gdG8gdGhlIGdsb2JhbCBldmVudHMsIEluZXJ0aWEgYWxzbyBwcm92aWRlcyBhIG51bWJlciBvZiBldmVudCBjYWxsYmFja3Mgd2hlbiBtYW51YWxseSBtYWtpbmcgSW5lcnRpYSB2aXNpdHMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQodXJsLCB7XG4gIG9uQ2FuY2VsVG9rZW46IGNhbmNlbFRva2VuID0+IHt9LFxuICBvbkNhbmNlbDogKCkgPT4ge30sXG4gIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICBvbkZpbmlzaDogKCkgPT4ge30sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9