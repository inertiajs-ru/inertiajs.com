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


var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\events.mdx";
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
    url: '#before',
    name: 'Before'
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
    url: '#error',
    name: 'Error'
  }, {
    url: '#invalid',
    name: 'Invalid'
  }, {
    url: '#exception',
    name: 'Exception'
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
      lineNumber: 62,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, "Inertia \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0412\u0430\u043C \xAB\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C\u0441\u044F\xBB \u043A \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u0435\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043C\u0435\u0442\u043E\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 77
    }
  }, "Inertia.on()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 70,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', (event) => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, "Inertia \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0442\u0430\u043A \u0447\u0442\u043E \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u043D\u0438\u043C\u0438 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u043C. \u041F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 147
    }
  }, "inertia:"), " \u043A \u0438\u043C\u0435\u043D\u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 79,
      columnNumber: 10
    }
  }), "document.addEventListener('inertia:start', (event) => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u0435\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, "\u041A\u043E\u0433\u0434\u0430 \u0412\u044B \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0435 \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439, Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0412\u0430\u043C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u043E\u0431\u044B\u0442\u0438\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 87,
      columnNumber: 10
    }
  }), "let removeStartEventListener = Inertia.on('start', (event) => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n\n// \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044F\nremoveStartEventListener()\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, "\u0412 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0438 \u0441 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u043E\u0439 \u043B\u043E\u0432\u0443\u0448\u043A\u043E\u0439 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0435 \u043D\u0430 \u0434\u0440\u0443\u0433\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 97,
      columnNumber: 10
    }
  }), "export default {\n  mounted() {\n    this.$once(\n      'hook:destroyed',\n      Inertia.on('start', (event) => {\n        console.log(`Starting a visit to ${event.detail.visit.url}`)\n      })\n    )\n  },\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u044B, \u0435\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 139
    }
  }, "removeEventListener()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 111,
      columnNumber: 10
    }
  }), "let startEventListener = (event) => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n}\n\ndocument.addEventListener('inertia:start', startEventListener)\n\n// \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044F\ndocument.removeEventListener('inertia:start', startEventListener)\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 31
    }
  }, "before"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 87
    }
  }, "invalid"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 144
    }
  }, "error"), ") \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442 \u043E\u0442\u043C\u0435\u043D\u0443, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 Inertia \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E. \u041A\u0430\u043A \u0438 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0435\u0441\u043B\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 370
    }
  }, "event.preventDefault()"), ", \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 124,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('before', (event) => {\n  if (!confirm('Are you sure you want to navigate away?')) {\n    event.preventDefault()\n  }\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430, \u0435\u0441\u043B\u0438 \u0412\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0435 \u0441\u0432\u043E\u0439 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 83
    }
  }, "Inertia.on()"), ", \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0435, \u0432\u0435\u0440\u043D\u0443\u0432 \u0438\u0437 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 199
    }
  }, "false"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 135,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('before', (event) => {\n  return confirm('Are you sure you want to navigate away?')\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, "Before"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 20
    }
  }, "before"), " \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442, \u043A\u043E\u0433\u0434\u0430 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0437\u0430\u043F\u0440\u043E\u0441 \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443. \u042D\u0442\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 145,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('before', (event) => {\n  console.log(`About to make a visit to ${event.detail.visit.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0446\u0435\u043B\u044C \u044D\u0442\u043E\u0433\u043E \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F - \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u0412\u0430\u043C \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 154,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('before', (event) => {\n  return confirm('Are you sure you want to navigate away?')\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, "Start"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 20
    }
  }, "start"), " \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443. \u042D\u0442\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
      lineNumber: 164,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', (event) => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 20
    }
  }, "start"), " \u043D\u0435 \u043E\u0442\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }
  }, "Progress"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 20
    }
  }, "progress"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u043C\u0435\u0440\u0435 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u0430\u0439\u043B\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
      lineNumber: 175,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('progress', (event) => {\n  this.form.progress = event.detail.progress.percentage\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 20
    }
  }, "progress"), " \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 5
    }
  }, "Success"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 20
    }
  }, "success"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0435\u0441\u043B\u0438 \u043D\u0435\u0442 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u044D\u0442\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 174
    }
  }, "\u043D\u0435"), " \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
      lineNumber: 186,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('success', (event) => {\n  console.log(`Successfully made a visit to ${event.detail.page.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 20
    }
  }, "success"), " \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, "Error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 16
    }
  }, "error"), " event fires when validation errors are present on \"successful\" page visits."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
      lineNumber: 197,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('error', (errors) => {\n  console.log(errors)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 16
    }
  }, "error"), " event is not cancelable."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }, "Invalid"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 20
    }
  }, "invalid"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D \u043D\u0435-Inertia \u043E\u0442\u0432\u0435\u0442, \u0442\u0430\u043A\u043E\u0439 \u043A\u0430\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 142
    }
  }, "html"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 199
    }
  }, "json"), " \u043E\u0442\u0432\u0435\u0442. \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 Inertia - \u044D\u0442\u043E \u043E\u0442\u0432\u0435\u0442, \u0443 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 318
    }
  }, "X-Inertia"), " \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0432 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 398
    }
  }, "true"), " \u0441 \u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
      lineNumber: 207,
      columnNumber: 537
    }
  }), "\u043E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, "\u042D\u0442\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0438\u043F\u043E\u0432 \u043E\u0442\u0432\u0435\u0442\u043E\u0432, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043A\u043E\u0434\u044B \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 81
    }
  }, "200"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 134
    }
  }, "400"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 188
    }
  }, "500"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
      lineNumber: 211,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('invalid', (event) => {\n  console.log(`\u041F\u043E\u043B\u0443\u0447\u0435\u043D \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u0438\u043D\u0435\u0440\u0446\u0438\u0438.`)\n  console.log(event.detail.response)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 29
    }
  }, "invalid"), ", \u0447\u0442\u043E\u0431\u044B Inertia \u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u043B\u0430 \u0440\u0435\u0436\u0438\u043C \u043E\u0442\u0432\u0435\u0442\u0430, \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043E\u0442 Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
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
      lineNumber: 221,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('invalid', (event) => {\n  event.preventDefault()\n  // Handle the invalid response yourself\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 5
    }
  }, "Exception"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 20
    }
  }, "exception"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u044B\u0445 \u043E\u0448\u0438\u0431\u043A\u0430\u0445 XHR, \u0442\u0430\u043A\u0438\u0445 \u043A\u0430\u043A \u043F\u0440\u0435\u0440\u044B\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0442\u0438, \u0438 \u043F\u0440\u0438 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u0432\u044B\u0437\u043E\u0432\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 198
    }
  }, "resolveComponent()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 232,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('exception', (event) => {\n  console.log(`An unexpected error occurred during an Inertia visit.`)\n  console.log(event.detail.error)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 29
    }
  }, "exception"), ", \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
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
      lineNumber: 242,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('exception', (event) => {\n  event.preventDefault()\n  // Handle the error yourself\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u044D\u0442\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 47
    }
  }, "\u043D\u0435"), " \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0434\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 XHR, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u043E\u0442\u0432\u0435\u0442\u044B \u0443\u0440\u043E\u0432\u043D\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 143
    }
  }, "400"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 197
    }
  }, "500"), ", \u0438\u043B\u0438 \u0434\u043B\u044F \u043D\u0435\u0438\u043D\u0435\u0440\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u044D\u0442\u0438 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u043C\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia. \u0421\u043C. \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/error-handling"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 369
    }
  }), "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A"), " \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 5
    }
  }, "Finish"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 20
    }
  }, "finish"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430 XHR \u043A\u0430\u043A \u0434\u043B\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0434\u043B\u044F \u043D\u0435\u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432. \u042D\u0442\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
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
      lineNumber: 256,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('finish', (event) => {\n  NProgress.done()\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 20
    }
  }, "finish"), " \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 5
    }
  }, "Navigate"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 20
    }
  }, "navigate"), " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0445 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438. \u042D\u0442\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438 \u0438 \u0442\u043E\u043C\u0443 \u043F\u043E\u0434\u043E\u0431\u043D\u043E\u0433\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
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
      lineNumber: 267,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('navigate', (event) => {\n  console.log(`Navigated to ${event.detail.page.url}`)\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 20
    }
  }, "navigate"), " \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 5
    }
  }, "\u0412 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C, Inertia \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0440\u044F\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/manual-visits#event-callbacks"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 80
    }
  }), "\u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0445 \u0432\u044B\u0437\u043E\u0432\u043E\u0432 \u0441\u043E\u0431\u044B\u0442\u0438\u0439"), " \u043F\u0440\u0438 \u0440\u0443\u0447\u043D\u043E\u043C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0439 Inertia."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxTQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxzQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLGlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsU0FESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVRJLEVBWUo7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FaSSxFQWVKO0FBQ0RELE9BQUcsRUFBRSxXQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLFVBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FsQkksRUFxQko7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FyQkksRUF3Qko7QUFDREQsT0FBRyxFQUFFLFVBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0F4QkksRUEyQko7QUFDREQsT0FBRyxFQUFFLFlBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0EzQkksRUE4Qko7QUFDREQsT0FBRyxFQUFFLFNBREo7QUFFREMsUUFBSSxFQUFFO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsK0lBQTNFLDBMQXZOSyxDQUFQO0FBMk5EO0tBL051QkQsVTtBQWlPeEI7QUFDQUEsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy4zYzhmZTMyY2ExYzVhMjE3ZTU3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Ch0L7QsdGL0YLQuNGPJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GA0LXQs9C40YHRgtGA0LDRhtC40Y8t0YHQu9GD0YjQsNGC0LXQu9C10LknLFxuICAgIG5hbWU6ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPINGB0LvRg9GI0LDRgtC10LvQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9GD0LTQsNC70LXQvdC40LUt0YHQu9GD0YjQsNGC0LXQu9C10LknLFxuICAgIG5hbWU6ICfQo9C00LDQu9C10L3QuNC1INGB0LvRg9GI0LDRgtC10LvQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0YLQvNC10L3QsC3RgdC+0LHRi9GC0LjQuScsXG4gICAgbmFtZTogJ9Ce0YLQvNC10L3QsCDRgdC+0LHRi9GC0LjQuSdcbiAgfSwge1xuICAgIHVybDogJyNiZWZvcmUnLFxuICAgIG5hbWU6ICdCZWZvcmUnXG4gIH0sIHtcbiAgICB1cmw6ICcjc3RhcnQnLFxuICAgIG5hbWU6ICdTdGFydCdcbiAgfSwge1xuICAgIHVybDogJyNwcm9ncmVzcycsXG4gICAgbmFtZTogJ1Byb2dyZXNzJ1xuICB9LCB7XG4gICAgdXJsOiAnI3N1Y2Nlc3MnLFxuICAgIG5hbWU6ICdTdWNjZXNzJ1xuICB9LCB7XG4gICAgdXJsOiAnI2Vycm9yJyxcbiAgICBuYW1lOiAnRXJyb3InXG4gIH0sIHtcbiAgICB1cmw6ICcjaW52YWxpZCcsXG4gICAgbmFtZTogJ0ludmFsaWQnXG4gIH0sIHtcbiAgICB1cmw6ICcjZXhjZXB0aW9uJyxcbiAgICBuYW1lOiAnRXhjZXB0aW9uJ1xuICB9LCB7XG4gICAgdXJsOiAnI2ZpbmlzaCcsXG4gICAgbmFtZTogJ0ZpbmlzaCdcbiAgfSwge1xuICAgIHVybDogJyNuYXZpZ2F0ZScsXG4gICAgbmFtZTogJ05hdmlnYXRlJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHRgNCw0YLQvdGL0LUt0LLRi9C30L7QstGLLdGB0L7QsdGL0YLQuNC5JyxcbiAgICBuYW1lOiAn0J7QsdGA0LDRgtC90YvQtSDQstGL0LfQvtCy0Ysg0YHQvtCx0YvRgtC40LknXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQodC+0LHRi9GC0LjRj2B9PC9oMT5cbiAgICA8cD57YEluZXJ0aWEg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YIg0YHQuNGB0YLQtdC80YMg0YHQvtCx0YvRgtC40LksINC60L7RgtC+0YDQsNGPINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQktCw0LwgwqvQv9C+0LTQutC70Y7Rh9Cw0YLRjNGB0Y/CuyDQuiDRgNCw0LfQu9C40YfQvdGL0Lwg0YHQvtCx0YvRgtC40Y/QvCDQttC40LfQvdC10L3QvdC+0LPQviDRhtC40LrQu9CwINCx0LjQsdC70LjQvtGC0LXQutC4LmB9PC9wPlxuICAgIDxoMj57YNCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0YHQu9GD0YjQsNGC0LXQu9C10LlgfTwvaDI+XG4gICAgPHA+e2DQp9GC0L7QsdGLINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGMINC/0YDQvtGB0LvRg9GI0LjQstCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40LksINC40YHQv9C+0LvRjNC30YPQudGC0LUg0LzQtdGC0L7QtCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLm9uKClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXFxgU3RhcnRpbmcgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJbmVydGlhINC40YHQv9C+0LvRjNC30YPQtdGCINGB0L7QsdGB0YLQstC10L3QvdGL0LUg0YHQvtCx0YvRgtC40Y8g0LHRgNCw0YPQt9C10YDQsCwg0YLQsNC6INGH0YLQviDQktGLINGC0LDQutC20LUg0LzQvtC20LXRgtC1INGA0LDQsdC+0YLQsNGC0Ywg0YEg0L3QuNC80Lgg0YLQsNC60LjQvCDQttC1INC+0LHRgNCw0LfQvtC8LiDQn9GA0L7RgdGC0L4g0L3QtSDQt9Cw0LHRg9C00YzRgtC1INC00L7QsdCw0LLQuNGC0YwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5lcnRpYTpgfTwvaW5saW5lQ29kZT57YCDQuiDQuNC80LXQvdC4INGB0L7QsdGL0YLQuNGPLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2Bkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmVydGlhOnN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYFN0YXJ0aW5nIGEgdmlzaXQgdG8gXFwke2V2ZW50LmRldGFpbC52aXNpdC51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCj0LTQsNC70LXQvdC40LUg0YHQu9GD0YjQsNGC0LXQu9C10LlgfTwvaDI+XG4gICAgPHA+e2DQmtC+0LPQtNCwINCS0Ysg0YDQtdCz0LjRgdGC0YDQuNGA0YPQtdGC0LUg0L/RgNC+0YHQu9GD0YjQuNCy0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjQuSwgSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQstC+0LfQstGA0LDRidCw0LXRgiDQktCw0Lwg0L7QsdGA0LDRgtC90YvQuSDQstGL0LfQvtCyINC00LvRjyDRg9C00LDQu9C10L3QuNGPINC/0YDQvtGB0LvRg9GI0LjQstCw0YLQtdC70Y8g0YHQvtCx0YvRgtC40LkuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGxldCByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIgPSBJbmVydGlhLm9uKCdzdGFydCcsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn0pXG5cbi8vINCj0LTQsNC70LjRgtGMINGB0LvRg9GI0LDRgtC10LvRj1xucmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JIg0YHQvtGH0LXRgtCw0L3QuNC4INGBINC+0LHRgNCw0LHQvtGC0LDQvdC90L7QuSDQu9C+0LLRg9GI0LrQvtC5INCS0Ysg0LzQvtC20LXRgtC1INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGD0LTQsNC70LjRgtGMINC/0YDQvtGB0LvRg9GI0LjQstCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40Lkg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L3QsCDQtNGA0YPQs9GD0Y4g0YHRgtGA0LDQvdC40YbRgy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgZXhwb3J0IGRlZmF1bHQge1xuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJG9uY2UoXG4gICAgICAnaG9vazpkZXN0cm95ZWQnLFxuICAgICAgSW5lcnRpYS5vbignc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXFxgU3RhcnRpbmcgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG4gICAgICB9KVxuICAgIClcbiAgfSxcbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JIg0LrQsNGH0LXRgdGC0LLQtSDQsNC70YzRgtC10YDQvdCw0YLQuNCy0YssINC10YHQu9C4INCS0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10YLQtSDRgdC+0LHRgdGC0LLQtdC90L3Ri9C1INGB0L7QsdGL0YLQuNGPINCx0YDQsNGD0LfQtdGA0LAsINCS0Ysg0LzQvtC20LXRgtC1INGD0LTQsNC70LjRgtGMINC/0YDQvtGB0LvRg9GI0LjQstCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40LksINC40YHQv9C+0LvRjNC30YPRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZW1vdmVFdmVudExpc3RlbmVyKClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgbGV0IHN0YXJ0RXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5lcnRpYTpzdGFydCcsIHN0YXJ0RXZlbnRMaXN0ZW5lcilcblxuLy8g0KPQtNCw0LvQuNGC0Ywg0YHQu9GD0YjQsNGC0LXQu9GPXG5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbmVydGlhOnN0YXJ0Jywgc3RhcnRFdmVudExpc3RlbmVyKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0J7RgtC80LXQvdCwINGB0L7QsdGL0YLQuNC5YH08L2gyPlxuICAgIDxwPntg0J3QtdC60L7RgtC+0YDRi9C1INGB0L7QsdGL0YLQuNGPIChgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BiZWZvcmVgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW52YWxpZGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BlcnJvcmB9PC9pbmxpbmVDb2RlPntgKSDQv9C+0LTQtNC10YDQttC40LLQsNGO0YIg0L7RgtC80LXQvdGDLCDRh9GC0L4g0L/QvtC30LLQvtC70Y/QtdGCINC/0YDQtdC00L7RgtCy0YDQsNGC0LjRgtGMINC/0L7QstC10LTQtdC90LjQtSBJbmVydGlhINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLiDQmtCw0Log0Lgg0LIg0YHQu9GD0YfQsNC1INGBINGB0L7QsdGB0YLQstC10L3QvdGL0LzQuCDRgdC+0LHRi9GC0LjRj9C80LgsINC10YHQu9C4INGC0L7Qu9GM0LrQviDQvtC00LjQvSDQv9GA0L7RgdC70YPRiNC40LLQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5INCy0YvQt9GL0LLQsNC10YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXZlbnQucHJldmVudERlZmF1bHQoKWB9PC9pbmxpbmVDb2RlPntgLCDRgdC+0LHRi9GC0LjQtSDQsdGD0LTQtdGCINC+0YLQvNC10L3QtdC90L4uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ2JlZm9yZScsIChldmVudCkgPT4ge1xuICBpZiAoIWNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQlNC70Y8g0YPQtNC+0LHRgdGC0LLQsCwg0LXRgdC70Lgg0JLRiyDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQtdGC0LUg0YHQstC+0Lkg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5INGBINC/0L7QvNC+0YnRjNGOIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEub24oKWB9PC9pbmxpbmVDb2RlPntgLCDQktGLINGC0LDQutC20LUg0LzQvtC20LXRgtC1INC+0YLQvNC10L3QuNGC0Ywg0YHQvtCx0YvRgtC40LUsINCy0LXRgNC90YPQsiDQuNC3INGB0LvRg9GI0LDRgtC10LvRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmYWxzZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdiZWZvcmUnLCAoZXZlbnQpID0+IHtcbiAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgQmVmb3JlYH08L2gyPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgYmVmb3JlYH08L2lubGluZUNvZGU+e2Ag0YHRgNCw0LHQsNGC0YvQstCw0LXRgiwg0LrQvtCz0LTQsCDRgdC+0LHQuNGA0LDQtdGC0YHRjyDQt9Cw0L/RgNC+0YEg0Log0YHQtdGA0LLQtdGA0YMuINCt0YLQviDQv9C+0LvQtdC30L3QviDQtNC70Y8g0L/QtdGA0LXRhdCy0LDRgtCwINC/0L7RgdC10YnQtdC90LjQuS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignYmVmb3JlJywgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYEFib3V0IHRvIG1ha2UgYSB2aXNpdCB0byBcXCR7ZXZlbnQuZGV0YWlsLnZpc2l0LnVybH1cXGApXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQntGB0L3QvtCy0L3QsNGPINGG0LXQu9GMINGN0YLQvtCz0L4g0LzQtdGA0L7Qv9GA0LjRj9GC0LjRjyAtINC/0L7Qt9Cy0L7Qu9C40YLRjCDQktCw0Lwg0L/RgNC10LTQvtGC0LLRgNCw0YLQuNGC0Ywg0L/QvtGB0LXRidC10L3QuNC1LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdiZWZvcmUnLCAoZXZlbnQpID0+IHtcbiAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgU3RhcnRgfTwvaDI+XG4gICAgPHA+e2DQodC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdGFydGB9PC9pbmxpbmVDb2RlPntgINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0L/RgNC4INC30LDQv9GD0YHQutC1INC30LDQv9GA0L7RgdCwINC6INGB0LXRgNCy0LXRgNGDLiDQrdGC0L4g0L/QvtC70LXQt9C90L4g0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LjQvdC00LjQutCw0YLQvtGA0L7QsiDQt9Cw0LPRgNGD0LfQutC4LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdzdGFydCcsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdGFydGluZyBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwudmlzaXQudXJsfVxcYClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCh0L7QsdGL0YLQuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0YXJ0YH08L2lubGluZUNvZGU+e2Ag0L3QtSDQvtGC0LzQtdC90Y/QtdGC0YHRjy5gfTwvcD5cbiAgICA8aDI+e2BQcm9ncmVzc2B9PC9oMj5cbiAgICA8cD57YNCh0L7QsdGL0YLQuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByb2dyZXNzYH08L2lubGluZUNvZGU+e2Ag0LfQsNC/0YPRgdC60LDQtdGC0YHRjyDQv9C+INC80LXRgNC1INGD0LLQtdC70LjRh9C10L3QuNGPINC/0YDQvtCz0YDQtdGB0YHQsCDQstC+INCy0YDQtdC80Y8g0LfQsNCz0YDRg9C30LrQuCDRhNCw0LnQu9C+0LIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gIHRoaXMuZm9ybS5wcm9ncmVzcyA9IGV2ZW50LmRldGFpbC5wcm9ncmVzcy5wZXJjZW50YWdlXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQodC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwcm9ncmVzc2B9PC9pbmxpbmVDb2RlPntgINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQvtGC0LzQtdC90LXQvdC+LmB9PC9wPlxuICAgIDxoMj57YFN1Y2Nlc3NgfTwvaDI+XG4gICAgPHA+e2DQodC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdWNjZXNzYH08L2lubGluZUNvZGU+e2Ag0LfQsNC/0YPRgdC60LDQtdGC0YHRjyDQv9GA0Lgg0YPRgdC/0LXRiNC90L7QvCDQv9C+0YHQtdGJ0LXQvdC40Lgg0YHRgtGA0LDQvdC40YbRiywg0LXRgdC70Lgg0L3QtdGCINC+0YjQuNCx0L7QuiDQv9GA0L7QstC10YDQutC4LiDQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINGH0YLQviDRjdGC0L4gYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YNC90LVgfTwvZW0+e2Ag0LjRgdGC0L7RgNC40YfQtdGB0LrQuNC1INC/0L7RgdC10YnQtdC90LjRjy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignc3VjY2VzcycsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBTdWNjZXNzZnVsbHkgbWFkZSBhIHZpc2l0IHRvIFxcJHtldmVudC5kZXRhaWwucGFnZS51cmx9XFxgKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3VjY2Vzc2B9PC9pbmxpbmVDb2RlPntgINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQvtGC0LzQtdC90LXQvdC+LmB9PC9wPlxuICAgIDxoMj57YEVycm9yYH08L2gyPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yYH08L2lubGluZUNvZGU+e2AgZXZlbnQgZmlyZXMgd2hlbiB2YWxpZGF0aW9uIGVycm9ycyBhcmUgcHJlc2VudCBvbiBcInN1Y2Nlc3NmdWxcIiBwYWdlIHZpc2l0cy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignZXJyb3InLCAoZXJyb3JzKSA9PiB7XG4gIGNvbnNvbGUubG9nKGVycm9ycylcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BlcnJvcmB9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGlzIG5vdCBjYW5jZWxhYmxlLmB9PC9wPlxuICAgIDxoMj57YEludmFsaWRgfTwvaDI+XG4gICAgPHA+e2DQodC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbnZhbGlkYH08L2lubGluZUNvZGU+e2Ag0LfQsNC/0YPRgdC60LDQtdGC0YHRjywg0LrQvtCz0LTQsCDQvtGCINGB0LXRgNCy0LXRgNCwINC/0L7Qu9GD0YfQtdC9INC90LUtSW5lcnRpYSDQvtGC0LLQtdGCLCDRgtCw0LrQvtC5INC60LDQuiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BodG1sYH08L2lubGluZUNvZGU+e2Ag0LjQu9C4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGpzb25gfTwvaW5saW5lQ29kZT57YCDQvtGC0LLQtdGCLiDQlNC+0L/Rg9GB0YLQuNC80YvQuSDQvtGC0LLQtdGCIEluZXJ0aWEgLSDRjdGC0L4g0L7RgtCy0LXRgiwg0YMg0LrQvtGC0L7RgNC+0LPQviDQt9Cw0LPQvtC70L7QstC+0LogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhYH08L2lubGluZUNvZGU+e2Ag0YPRgdGC0LDQvdC+0LLQu9C10L0g0LIg0LfQvdCw0YfQtdC90LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2Ag0YEg0L/QvtC70LXQt9C90L7QuSDQvdCw0LPRgNGD0LfQutC+0LkgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntganNvbmB9PC9pbmxpbmVDb2RlPntgLCDRgdC+0LTQtdGA0LbQsNGJ0LXQuSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3RoZS1wcm90b2NvbCMlRDAlQkUlRDAlQjElRDElOEElRDAlQjUlRDAlQkElRDElODItJUQxJTgxJUQxJTgyJUQxJTgwJUQwJUIwJUQwJUJEJUQwJUI4JUQxJTg2JUQxJThCXCJcbiAgICAgIH19Pntg0L7QsdGK0LXQutGCINGB0YLRgNCw0L3QuNGG0YtgfTwvYT57YC5gfTwvcD5cbiAgICA8cD57YNCt0YLQviDRgdC+0LHRi9GC0LjQtSDQt9Cw0L/Rg9GB0LrQsNC10YLRgdGPINC00LvRjyDQstGB0LXRhSDRgtC40L/QvtCyINC+0YLQstC10YLQvtCyLCDQstC60LvRjtGH0LDRjyDQutC+0LTRiyDQvtGC0LLQtdGC0L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AyMDBgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDAwYH08L2lubGluZUNvZGU+e2Ag0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNTAwYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG5cbkluZXJ0aWEub24oJ2ludmFsaWQnLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXFxg0J/QvtC70YPRh9C10L0g0L3QtdCy0LXRgNC90YvQuSDQvtGC0LLQtdGCINC40L3QtdGA0YbQuNC4LlxcYClcbiAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLnJlc3BvbnNlKVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0J7RgtC80LXQvdC40YLQtSDRgdC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbnZhbGlkYH08L2lubGluZUNvZGU+e2AsINGH0YLQvtCx0YsgSW5lcnRpYSDQvdC1INC+0YLQvtCx0YDQsNC20LDQu9CwINGA0LXQttC40Lwg0L7RgtCy0LXRgtCwLCDQvtGC0LvQuNGH0L3QvtCz0L4g0L7RgiBJbmVydGlhLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCdpbnZhbGlkJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBpbnZhbGlkIHJlc3BvbnNlIHlvdXJzZWxmXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgRXhjZXB0aW9uYH08L2gyPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXhjZXB0aW9uYH08L2lubGluZUNvZGU+e2Ag0LfQsNC/0YPRgdC60LDQtdGC0YHRjyDQv9GA0Lgg0L3QtdC/0YDQtdC00LLQuNC00LXQvdC90YvRhSDQvtGI0LjQsdC60LDRhSBYSFIsINGC0LDQutC40YUg0LrQsNC6INC/0YDQtdGA0YvQstCw0L3QuNGPINGB0LXRgtC4LCDQuCDQv9GA0Lgg0L7RiNC40LHQutCw0YUsINGB0LPQtdC90LXRgNC40YDQvtCy0LDQvdC90YvRhSDQsiDQvtCx0YDQsNGC0L3QvtC8INCy0YvQt9C+0LLQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlQ29tcG9uZW50KClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignZXhjZXB0aW9uJywgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKFxcYEFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGFuIEluZXJ0aWEgdmlzaXQuXFxgKVxuICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwuZXJyb3IpXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQntGC0LzQtdC90LjRgtC1INGB0L7QsdGL0YLQuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGV4Y2VwdGlvbmB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINC/0YDQtdC00L7RgtCy0YDQsNGC0LjRgtGMINCy0L7Qt9C90LjQutC90L7QstC10L3QuNC1INC+0YjQuNCx0LrQuC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignZXhjZXB0aW9uJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBlcnJvciB5b3Vyc2VsZlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0Y3RgtC+INGB0L7QsdGL0YLQuNC1IGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2DQvdC1YH08L2VtPntgINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0LTQu9GPINC30LDQv9GA0L7RgdC+0LIgWEhSLCDQutC+0YLQvtGA0YvQtSDQv9C+0LvRg9GH0LDRjtGCINC+0YLQstC10YLRiyDRg9GA0L7QstC90Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDAwYH08L2lubGluZUNvZGU+e2Ag0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNTAwYH08L2lubGluZUNvZGU+e2AsINC40LvQuCDQtNC70Y8g0L3QtdC40L3QtdGA0YbQuNC+0L3QvdGL0YUg0L7RgtCy0LXRgtC+0LIsINC/0L7RgdC60L7Qu9GM0LrRgyDRjdGC0Lgg0YHQuNGC0YPQsNGG0LjQuCDQvtCx0YDQsNCx0LDRgtGL0LLQsNGO0YLRgdGPINC00YDRg9Cz0LjQvNC4INGB0L/QvtGB0L7QsdCw0LzQuCDRgSDQv9C+0LzQvtGJ0YzRjiBJbmVydGlhLiDQodC8LiDRgdGC0YDQsNC90LjRhtGDIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvZXJyb3ItaGFuZGxpbmdcIlxuICAgICAgfX0+e2DQvtCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6YH08L2E+e2Ag0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4LmB9PC9wPlxuICAgIDxoMj57YEZpbmlzaGB9PC9oMj5cbiAgICA8cD57YNCh0L7QsdGL0YLQuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZpbmlzaGB9PC9pbmxpbmVDb2RlPntgINC30LDQv9GD0YHQutCw0LXRgtGB0Y8g0L/QvtGB0LvQtSDQt9Cw0LLQtdGA0YjQtdC90LjRjyDQt9Cw0L/RgNC+0YHQsCBYSFIg0LrQsNC6INC00LvRjyDRg9GB0L/QtdGI0L3Ri9GFLCDRgtCw0Log0Lgg0LTQu9GPINC90LXRg9GB0L/QtdGI0L3Ri9GFINC+0YLQstC10YLQvtCyLiDQrdGC0L4g0YHQvtCx0YvRgtC40LUg0L/QvtC70LXQt9C90L4g0LTQu9GPINGB0LrRgNGL0YLQuNGPINC40L3QtNC40LrQsNGC0L7RgNC+0LIg0LfQsNCz0YDRg9C30LrQuC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5vbignZmluaXNoJywgKGV2ZW50KSA9PiB7XG4gIE5Qcm9ncmVzcy5kb25lKClcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCh0L7QsdGL0YLQuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZpbmlzaGB9PC9pbmxpbmVDb2RlPntgINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQvtGC0LzQtdC90LXQvdC+LmB9PC9wPlxuICAgIDxoMj57YE5hdmlnYXRlYH08L2gyPlxuICAgIDxwPntg0KHQvtCx0YvRgtC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbmF2aWdhdGVgfTwvaW5saW5lQ29kZT57YCDQt9Cw0L/Rg9GB0LrQsNC10YLRgdGPINC/0YDQuCDRg9GB0L/QtdGI0L3Ri9GFINC/0L7RgdC10YnQtdC90LjRj9GFINGB0YLRgNCw0L3QuNGG0YssINCwINGC0LDQutC20LUg0L/RgNC4INC90LDQstC40LPQsNGG0LjQuCDQv9C+INC40YHRgtC+0YDQuNC4LiDQrdGC0L4g0YHQvtCx0YvRgtC40LUg0L/QvtC70LXQt9C90L4g0LTQu9GPINC+0YLRgdC70LXQttC40LLQsNC90LjRjyDQsNC90LDQu9C40YLQuNC60Lgg0Lgg0YLQvtC80YMg0L/QvtC00L7QsdC90L7Qs9C+LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuXG5JbmVydGlhLm9uKCduYXZpZ2F0ZScsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcXGBOYXZpZ2F0ZWQgdG8gXFwke2V2ZW50LmRldGFpbC5wYWdlLnVybH1cXGApXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQodC+0LHRi9GC0LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYXZpZ2F0ZWB9PC9pbmxpbmVDb2RlPntgINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQvtGC0LzQtdC90LXQvdC+LmB9PC9wPlxuICAgIDxoMj57YNCe0LHRgNCw0YLQvdGL0LUg0LLRi9C30L7QstGLINGB0L7QsdGL0YLQuNC5YH08L2gyPlxuICAgIDxwPntg0JIg0LTQvtC/0L7Qu9C90LXQvdC40LUg0Log0LPQu9C+0LHQsNC70YzQvdGL0Lwg0YHQvtCx0YvRgtC40Y/QvCwgSW5lcnRpYSDRgtCw0LrQttC1INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGCINGA0Y/QtCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL21hbnVhbC12aXNpdHMjZXZlbnQtY2FsbGJhY2tzXCJcbiAgICAgIH19Pntg0L7QsdGA0LDRgtC90YvRhSDQstGL0LfQvtCy0L7QsiDRgdC+0LHRi9GC0LjQuWB9PC9hPntgINC/0YDQuCDRgNGD0YfQvdC+0Lwg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0L/QvtGB0LXRidC10L3QuNC5IEluZXJ0aWEuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9