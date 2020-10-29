webpackHotUpdate_N_E("pages/manual-visits",{

/***/ "./pages/manual-visits.mdx":
/*!*********************************!*\
  !*** ./pages/manual-visits.mdx ***!
  \*********************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dedent-js */ "./node_modules/dedent-js/lib/index.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dedent_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notice */ "./components/Notice.js");
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\manual-visits.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n\n        Inertia.get(url, data, options)\n        Inertia.post(url, data, options)\n        Inertia.put(url, data, options)\n        Inertia.patch(url, data, options)\n        Inertia.delete(url, options)\n        Inertia.replace(url, options)\n        Inertia.reload(options) // Uses the current URL\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\\n\n        Inertia.get(url, data, options)\n        Inertia.post(url, data, options)\n        Inertia.put(url, data, options)\n        Inertia.patch(url, data, options)\n        Inertia.delete(url, options)\n        Inertia.replace(url, options)\n        Inertia.reload(options) // Uses the current URL\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n\n        Inertia.get(url, data, options)\n        Inertia.post(url, data, options)\n        Inertia.put(url, data, options)\n        Inertia.patch(url, data, options)\n        Inertia.delete(url, options)\n        Inertia.replace(url, options)\n        Inertia.reload(options) // Uses the current URL\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\\n\n        Inertia.get(url, data, options)\n        Inertia.post(url, data, options)\n        Inertia.put(url, data, options)\n        Inertia.patch(url, data, options)\n        Inertia.delete(url, options)\n        Inertia.replace(url, options)\n        Inertia.reload(options) // Uses the current URL\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        // import { Inertia } from '@inertiajs/inertia'\n\n        this.$inertia.get(url, data, options)\n        this.$inertia.post(url, data, options)\n        this.$inertia.put(url, data, options)\n        this.$inertia.patch(url, data, options)\n        this.$inertia.delete(url, options)\n        this.$inertia.replace(url, options)\n        this.$inertia.reload(options) // Uses the current URL\n      "], ["\n        // import { Inertia } from '@inertiajs/inertia'\\n\n        this.$inertia.get(url, data, options)\n        this.$inertia.post(url, data, options)\n        this.$inertia.put(url, data, options)\n        this.$inertia.patch(url, data, options)\n        this.$inertia.delete(url, options)\n        this.$inertia.replace(url, options)\n        this.$inertia.reload(options) // Uses the current URL\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n\n        Inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onFinish: () => {},\n        })\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\\n\n        Inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onFinish: () => {},\n        })\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n\n        Inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onFinish: () => {},\n        })\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\\n\n        Inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onFinish: () => {},\n        })\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        // import { Inertia } from '@inertiajs/inertia'\n\n        this.$inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onFinish: () => {},\n        })\n      "], ["\n        // import { Inertia } from '@inertiajs/inertia'\\n\n        this.$inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onFinish: () => {},\n        })\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Посещения вручную',
  links: [{
    url: '#метод',
    name: 'Метод'
  }, {
    url: '#данные',
    name: 'Данные'
  }, {
    url: '#история-браузера',
    name: 'История браузера'
  }, {
    url: '#состояние-компонента',
    name: 'Состояние компонента'
  }, {
    url: '#сохранение-прокрутки',
    name: 'Сохранение прокрутки'
  }, {
    url: '#частичные-перезагрузки',
    name: 'Частичные перезагрузки'
  }, {
    url: '#пользовательские-заголовки',
    name: 'Пользовательские заголовки'
  }, {
    url: '#отмена-посещения',
    name: 'Отмена посещения'
  }, {
    url: '#обратные-вызовы-событий',
    name: 'Обратные вызовы событий'
  }, {
    url: '#устаревание-промиса',
    name: 'Устаревание промиса'
  }]
};
var layoutProps = {
  meta: meta
};
var MDXLayout = _components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0432\u0440\u0443\u0447\u043D\u0443\u044E"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, "\u041F\u043E\u043C\u0438\u043C\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/links"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }), "\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043E\u043A"), ", \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u0435\u043B\u0430\u0442\u044C \u0438\u043D\u0435\u0440\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F. \u042D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u0435\u0442\u043E\u0434\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 119
    }
  }, "Inertia.visit()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'React',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430\u043A\u043E \u043E\u0431\u044B\u0447\u043D\u043E \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0434\u0438\u043D \u0438\u0437 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430. \u042D\u0442\u0438 \u043C\u0435\u0442\u043E\u0434\u044B \u0438\u043C\u0435\u044E\u0442 \u0442\u0435 \u0436\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u0447\u0442\u043E \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 140
    }
  }, "Inertia.visit()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'React',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }, {
      name: 'Svelte',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, "\u041C\u0435\u0442\u043E\u0434"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u043F\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 30
    }
  }, "method"), ", \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u0435\u0442\u043E\u0434 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 120
    }
  }, "get"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 173
    }
  }, "post"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 227
    }
  }, "put"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 280
    }
  }, "patch"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 338
    }
  }, "delete"), ". \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u044D\u0442\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 411
    }
  }, "get"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
  }), "Inertia.visit(url, { method: 'post' })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }
  }, "\u0414\u0430\u043D\u043D\u044B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }, "Use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 20
    }
  }, "data"), " option to add data to the request."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
  }), "Inertia.visit('/users', {\n  method: 'post',\n  data: {\n    name: 'John Doe',\n    email: 'john.doe@example.com',\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 5
    }
  }, "As a convenience, the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 34
    }
  }, "get()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 89
    }
  }, "post()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 145
    }
  }, "put()"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 203
    }
  }, "patch()"), " methods all include ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 279
    }
  }, "data"), " as the second argument."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
  }), "Inertia.post('/users', {\n  name: 'John Doe',\n  email: 'john.doe@example.com',\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, "When making visits, Inertia automatically adds a new entry into the browser history. However, it's also possible to replace the current history entry using by setting the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 183
    }
  }, "replace"), " option to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 249
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 10
    }
  }), "Inertia.get('/users', { search: 'John' }, { replace: true })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 5
    }
  }, "As a shortcut, you can use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 39
    }
  }, "replace()"), " method to automatically do this."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 10
    }
  }), "Inertia.replace('/users', { search: 'John' })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, "Note that visits made to the same URL (including query strings) automatically set ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 85
    }
  }, "replace"), " to", ' ', Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 3
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    }
  }, "By default page visits to the same page force a fresh page component instance, which clears out any local state, such as form inputs, scroll positions and focus states."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, "In certain situations it's necessary to preserve the page component state. For example, when submitting a form, you need to preserve your form data in the event that validation errors come back."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 5
    }
  }, "This can be done by setting the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 44
    }
  }, "preserveState"), " option to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 116
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 10
    }
  }), "Inertia.get('/users', { search: 'John' }, { preserveState: true })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "For convenience, the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 33
    }
  }, "post()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 89
    }
  }, "put()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 144
    }
  }, "patch()"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 204
    }
  }, "replace()"), " methods autmatically set ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 287
    }
  }, "preserveState"), " to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 352
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }, "When navigating between pages, Inertia mimics default browser behaviour by automatically resetting the scroll position of the document body (as well as any ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/scroll-management#scroll-regions"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 168
    }
  }), "scroll regions"), " you've defined), back to the top. Use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 79
    }
  }, "preserveScroll"), " option to disable this behaviour."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
  }), "Inertia.visit(url, { preserveScroll: true })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, "For more information, see the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/scroll-management"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 42
    }
  }), "scroll management"), " page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 16
    }
  }, "only"), " option allows you to request a subset of the props (data) from the server on subsequent visits to the same page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 10
    }
  }), "Inertia.visit('/users', { search: 'John' }, { only: ['users'] })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 5
    }
  }, "For more information, see the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/partial-reloads"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 42
    }
  }), "partial reloads"), " page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 5
    }
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 16
    }
  }, "headers"), " option allows you to add custom headers to a request."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
  }), "Inertia.post('/users', data, {\n  headers: {\n    'Custom-Header': 'value',\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 5
    }
  }, "The Inertia headers take priority and therefore cannot be overwritten."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 5
    }
  }, "You can cancel a visit using a cancel token, which Inertia automatically generates and provides via the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 116
    }
  }, "onCancelToken()"), " callback prior to making the visit."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
  }), "Inertia.post('/users', data, {\n  onCancelToken: cancelToken => (this.cancelToken = cancelToken),\n})\n\n// Cancel the visit\nthis.cancelToken.cancel()\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 5
    }
  }, "When a visit is cancelled, both the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 48
    }
  }, "onCancel()"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 111
    }
  }, "onFinish()"), " event callbacks will be called."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 5
    }
  }, "In addition to the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/events"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 31
    }
  }), "global events"), ", Inertia also provides a number of per-visit event callbacks."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 10
    }
  }), "Inertia.post('/users', data, {\n  onStart: visit => {},\n  onProgress: progress => {},\n  onSuccess: page => {},\n  onCancel: () => {},\n  onFinish: () => {},\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 5
    }
  }, "Returning ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 22
    }
  }, "false"), " from the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 85
    }
  }, "onStart()"), " callback will cause the visit to be cancelled."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 10
    }
  }), "Inertia.delete(`/users/${user.id}`, {\n  onStart: () => confirm('Are you sure you want to delete this user?'),\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 5
    }
  }, "It's also possible to return a promise from the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 60
    }
  }, "onSuccess()"), " callback. This will delay the \"finish\" event until the promise has resolved."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 10
    }
  }), "Inertia.post(url, {\n  onSuccess: () => {\n    return Promise.all([\n      this.doThing(),\n      this.doAnotherThing()\n    ])\n  }\n  onFinish: () => {\n    // This won't be called until doThing()\n    // and doAnotherThing() have finished.\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u043C\u0438\u0441\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 5
    }
  }, "As of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 18
    }
  }, "v0.3.0"), ", Inertia deprecated the promise that is returned from ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 127
    }
  }, "Inertia.visit()"), ". If you call ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 204
    }
  }, "then()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 260
    }
  }, "catch()"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 319
    }
  }, "finally()"), " on an Inertia visit, you will now get the following console warning:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    "class": "py-4 px-6 border-l-4 border-orange-300 bg-orange-100 text-orange-900 text-sm font-mono",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 3
    }
  }, "Inertia.js visit promises have been deprecated and will be removed in a future release. Please use the new visit event callbacks instead."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    "class": "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 3
    }
  }, "Learn more at https://inertiajs.com/manual-visits#promise-deprecation")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 5
    }
  }, "The preferred approach is to use the new ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#event-callbacks"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 53
    }
  }), "event callbacks"), " instead. For example, instead of using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 77
    }
  }, "then()"), ", use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 141
    }
  }, "onSuccess()"), " callback."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 10
    }
  }), "Inertia.post('/profile', data, {\n  onSuccess: () => {\n    // Handle success event\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 5
    }
  }, "Instead of using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 29
    }
  }, "finally()"), ", use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 96
    }
  }, "onFinish()"), " callback."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 10
    }
  }), "Inertia.post('/profile', data, {\n  onFinish: () => {\n    // Handle finish event\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 5
    }
  }, "And instead of using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 33
    }
  }, "catch()"), ", it's better to handle these unexpected errors using a global error event handler."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 10
    }
  }), "Inertia.on('error', event => {\n  event.preventDefault()\n  // Handle the error yourself\n})\n")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFudWFsLXZpc2l0cy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsbUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxRQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsU0FESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsdUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSx1QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLHlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLDZCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBbEJJLEVBcUJKO0FBQ0RELE9BQUcsRUFBRSxtQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQXJCSSxFQXdCSjtBQUNERCxPQUFHLEVBQUUsMEJBREo7QUFFREMsUUFBSSxFQUFFO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTVCLHdGQWhSSyxFQWlSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVHQUFMLENBalJLLENBQVA7QUF5UkQ7S0E3UnVCTCxVO0FBK1J4QjtBQUNBQSxVQUFVLENBQUNNLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFudWFsLXZpc2l0cy4xNmE4MTg2NzQyOWEyZTViY2I5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQn9C+0YHQtdGJ0LXQvdC40Y8g0LLRgNGD0YfQvdGD0Y4nLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0LzQtdGC0L7QtCcsXG4gICAgbmFtZTogJ9Cc0LXRgtC+0LQnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LTQsNC90L3Ri9C1JyxcbiAgICBuYW1lOiAn0JTQsNC90L3Ri9C1J1xuICB9LCB7XG4gICAgdXJsOiAnI9C40YHRgtC+0YDQuNGPLdCx0YDQsNGD0LfQtdGA0LAnLFxuICAgIG5hbWU6ICfQmNGB0YLQvtGA0LjRjyDQsdGA0LDRg9C30LXRgNCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7RgdGC0L7Rj9C90LjQtS3QutC+0LzQv9C+0L3QtdC90YLQsCcsXG4gICAgbmFtZTogJ9Ch0L7RgdGC0L7Rj9C90LjQtSDQutC+0LzQv9C+0L3QtdC90YLQsCdcbiAgfSwge1xuICAgIHVybDogJyPRgdC+0YXRgNCw0L3QtdC90LjQtS3Qv9GA0L7QutGA0YPRgtC60LgnLFxuICAgIG5hbWU6ICfQodC+0YXRgNCw0L3QtdC90LjQtSDQv9GA0L7QutGA0YPRgtC60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YfQsNGB0YLQuNGH0L3Ri9C1LdC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCcsXG4gICAgbmFtZTogJ9Cn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUt0LfQsNCz0L7Qu9C+0LLQutC4JyxcbiAgICBuYW1lOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUg0LfQsNCz0L7Qu9C+0LLQutC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0YLQvNC10L3QsC3Qv9C+0YHQtdGJ0LXQvdC40Y8nLFxuICAgIG5hbWU6ICfQntGC0LzQtdC90LAg0L/QvtGB0LXRidC10L3QuNGPJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHRgNCw0YLQvdGL0LUt0LLRi9C30L7QstGLLdGB0L7QsdGL0YLQuNC5JyxcbiAgICBuYW1lOiAn0J7QsdGA0LDRgtC90YvQtSDQstGL0LfQvtCy0Ysg0YHQvtCx0YvRgtC40LknXG4gIH0sIHtcbiAgICB1cmw6ICcj0YPRgdGC0LDRgNC10LLQsNC90LjQtS3Qv9GA0L7QvNC40YHQsCcsXG4gICAgbmFtZTogJ9Cj0YHRgtCw0YDQtdCy0LDQvdC40LUg0L/RgNC+0LzQuNGB0LAnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQn9C+0YHQtdGJ0LXQvdC40Y8g0LLRgNGD0YfQvdGD0Y5gfTwvaDE+XG4gICAgPHA+e2DQn9C+0LzQuNC80L4gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9saW5rc1wiXG4gICAgICB9fT57YNGB0L7Qt9C00LDQvdC40Y8g0YHRgdGL0LvQvtC6YH08L2E+e2AsINGC0LDQutC20LUg0LzQvtC20L3QviDQstGA0YPRh9C90YPRjiDQtNC10LvQsNGC0Ywg0LjQvdC10YDRhtC40L7QvdC90YvQtSDQv9C+0YHQtdGJ0LXQvdC40Y8uINCt0YLQviDQtNC10LvQsNC10YLRgdGPINGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnZpc2l0KClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLy8gaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgdGhpcy4kaW5lcnRpYS52aXNpdCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICBvbmx5OiBbXSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiB7fSxcbiAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge30sXG4gICAgICAgICAgb25TdGFydDogdmlzaXQgPT4ge30sXG4gICAgICAgICAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gICAgICAgICAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICAgICAgICAgIG9uRmluaXNoOiAoKSA9PiB7fSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgIEluZXJ0aWEudmlzaXQodXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICByZXBsYWNlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVN0YXRlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVNjcm9sbDogZmFsc2UsXG4gICAgICAgICAgb25seTogW10sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgb25DYW5jZWxUb2tlbjogY2FuY2VsVG9rZW4gPT4ge30sXG4gICAgICAgICAgb25DYW5jZWw6ICgpID0+IHt9LFxuICAgICAgICAgIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICAgICAgICAgIG9uUHJvZ3Jlc3M6IHByb2dyZXNzID0+IHt9LFxuICAgICAgICAgIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgICAgICAgICBvbkZpbmlzaDogKCkgPT4ge30sXG4gICAgICAgIH0pXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgSW5lcnRpYS52aXNpdCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICBvbmx5OiBbXSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiB7fSxcbiAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge30sXG4gICAgICAgICAgb25TdGFydDogdmlzaXQgPT4ge30sXG4gICAgICAgICAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gICAgICAgICAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICAgICAgICAgIG9uRmluaXNoOiAoKSA9PiB7fSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQntC00L3QsNC60L4g0L7QsdGL0YfQvdC+INCy0LzQtdGB0YLQviDRjdGC0L7Qs9C+INGA0LXQutC+0LzQtdC90LTRg9C10YLRgdGPINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQvtC00LjQvSDQuNC3INC80LXRgtC+0LTQvtCyINCx0YvRgdGC0YDQvtCz0L4g0LTQvtGB0YLRg9C/0LAuINCt0YLQuCDQvNC10YLQvtC00Ysg0LjQvNC10Y7RgiDRgtC1INC20LUg0L/QsNGA0LDQvNC10YLRgNGLLCDRh9GC0L4g0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSW5lcnRpYS52aXNpdCgpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8vIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgIHRoaXMuJGluZXJ0aWEuZ2V0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgdGhpcy4kaW5lcnRpYS5wb3N0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgdGhpcy4kaW5lcnRpYS5wdXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnBhdGNoKHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgdGhpcy4kaW5lcnRpYS5kZWxldGUodXJsLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnJlcGxhY2UodXJsLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnJlbG9hZChvcHRpb25zKSAvLyBVc2VzIHRoZSBjdXJyZW50IFVSTFxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgSW5lcnRpYS5nZXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnBvc3QodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnB1dCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucGF0Y2godXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLmRlbGV0ZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucmVwbGFjZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucmVsb2FkKG9wdGlvbnMpIC8vIFVzZXMgdGhlIGN1cnJlbnQgVVJMXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgSW5lcnRpYS5nZXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnBvc3QodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnB1dCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucGF0Y2godXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLmRlbGV0ZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucmVwbGFjZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucmVsb2FkKG9wdGlvbnMpIC8vIFVzZXMgdGhlIGN1cnJlbnQgVVJMXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCc0LXRgtC+0LRgfTwvaDI+XG4gICAgPHA+e2DQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC+0L/RhtC40Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbWV0aG9kYH08L2lubGluZUNvZGU+e2AsINGH0YLQvtCx0Ysg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LzQtdGC0L7QtCDQt9Cw0L/RgNC+0YHQsCDQvdCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGdldGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHB1dGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYXRjaGB9PC9pbmxpbmVDb2RlPntgINC40LvQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkZWxldGVgfTwvaW5saW5lQ29kZT57YC4g0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0Y3RgtC+IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGdldGB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnZpc2l0KHVybCwgeyBtZXRob2Q6ICdwb3N0JyB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0JTQsNC90L3Ri9C1YH08L2gyPlxuICAgIDxwPntgVXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkYXRhYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIHRvIGFkZCBkYXRhIHRvIHRoZSByZXF1ZXN0LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnZpc2l0KCcvdXNlcnMnLCB7XG4gIG1ldGhvZDogJ3Bvc3QnLFxuICBkYXRhOiB7XG4gICAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgICBlbWFpbDogJ2pvaG4uZG9lQGV4YW1wbGUuY29tJyxcbiAgfSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEFzIGEgY29udmVuaWVuY2UsIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BnZXQoKWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0KClgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHV0KClgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGF0Y2goKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZHMgYWxsIGluY2x1ZGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YWB9PC9pbmxpbmVDb2RlPntgIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywge1xuICBuYW1lOiAnSm9obiBEb2UnLFxuICBlbWFpbDogJ2pvaG4uZG9lQGV4YW1wbGUuY29tJyxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQmNGB0YLQvtGA0LjRjyDQsdGA0LDRg9C30LXRgNCwYH08L2gyPlxuICAgIDxwPntgV2hlbiBtYWtpbmcgdmlzaXRzLCBJbmVydGlhIGF1dG9tYXRpY2FsbHkgYWRkcyBhIG5ldyBlbnRyeSBpbnRvIHRoZSBicm93c2VyIGhpc3RvcnkuIEhvd2V2ZXIsIGl0J3MgYWxzbyBwb3NzaWJsZSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGhpc3RvcnkgZW50cnkgdXNpbmcgYnkgc2V0dGluZyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVwbGFjZWB9PC9pbmxpbmVDb2RlPntgIG9wdGlvbiB0byBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEuZ2V0KCcvdXNlcnMnLCB7IHNlYXJjaDogJ0pvaG4nIH0sIHsgcmVwbGFjZTogdHJ1ZSB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BBcyBhIHNob3J0Y3V0LCB5b3UgY2FuIHVzZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXBsYWNlKClgfTwvaW5saW5lQ29kZT57YCBtZXRob2QgdG8gYXV0b21hdGljYWxseSBkbyB0aGlzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnJlcGxhY2UoJy91c2VycycsIHsgc2VhcmNoOiAnSm9obicgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPlxuICBOb3RlIHRoYXQgdmlzaXRzIG1hZGUgdG8gdGhlIHNhbWUgVVJMIChpbmNsdWRpbmcgcXVlcnkgc3RyaW5ncykgYXV0b21hdGljYWxseSBzZXQgPGlubGluZUNvZGU+cmVwbGFjZTwvaW5saW5lQ29kZT4gdG97JyAnfVxuICA8aW5saW5lQ29kZT50cnVlPC9pbmxpbmVDb2RlPi5cbiAgICA8L05vdGljZT5cbiAgICA8aDI+e2DQodC+0YHRgtC+0Y/QvdC40LUg0LrQvtC80L/QvtC90LXQvdGC0LBgfTwvaDI+XG4gICAgPHA+e2BCeSBkZWZhdWx0IHBhZ2UgdmlzaXRzIHRvIHRoZSBzYW1lIHBhZ2UgZm9yY2UgYSBmcmVzaCBwYWdlIGNvbXBvbmVudCBpbnN0YW5jZSwgd2hpY2ggY2xlYXJzIG91dCBhbnkgbG9jYWwgc3RhdGUsIHN1Y2ggYXMgZm9ybSBpbnB1dHMsIHNjcm9sbCBwb3NpdGlvbnMgYW5kIGZvY3VzIHN0YXRlcy5gfTwvcD5cbiAgICA8cD57YEluIGNlcnRhaW4gc2l0dWF0aW9ucyBpdCdzIG5lY2Vzc2FyeSB0byBwcmVzZXJ2ZSB0aGUgcGFnZSBjb21wb25lbnQgc3RhdGUuIEZvciBleGFtcGxlLCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtLCB5b3UgbmVlZCB0byBwcmVzZXJ2ZSB5b3VyIGZvcm0gZGF0YSBpbiB0aGUgZXZlbnQgdGhhdCB2YWxpZGF0aW9uIGVycm9ycyBjb21lIGJhY2suYH08L3A+XG4gICAgPHA+e2BUaGlzIGNhbiBiZSBkb25lIGJ5IHNldHRpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByZXNlcnZlU3RhdGVgfTwvaW5saW5lQ29kZT57YCBvcHRpb24gdG8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLmdldCgnL3VzZXJzJywgeyBzZWFyY2g6ICdKb2huJyB9LCB7IHByZXNlcnZlU3RhdGU6IHRydWUgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgRm9yIGNvbnZlbmllbmNlLCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdCgpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHB1dCgpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoKClgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVwbGFjZSgpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kcyBhdXRtYXRpY2FsbHkgc2V0IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByZXNlcnZlU3RhdGVgfTwvaW5saW5lQ29kZT57YCB0byBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPGgyPntg0KHQvtGF0YDQsNC90LXQvdC40LUg0L/RgNC+0LrRgNGD0YLQutC4YH08L2gyPlxuICAgIDxwPntgV2hlbiBuYXZpZ2F0aW5nIGJldHdlZW4gcGFnZXMsIEluZXJ0aWEgbWltaWNzIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvdXIgYnkgYXV0b21hdGljYWxseSByZXNldHRpbmcgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgZG9jdW1lbnQgYm9keSAoYXMgd2VsbCBhcyBhbnkgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9zY3JvbGwtbWFuYWdlbWVudCNzY3JvbGwtcmVnaW9uc1wiXG4gICAgICB9fT57YHNjcm9sbCByZWdpb25zYH08L2E+e2AgeW91J3ZlIGRlZmluZWQpLCBiYWNrIHRvIHRoZSB0b3AuIFVzZSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJlc2VydmVTY3JvbGxgfTwvaW5saW5lQ29kZT57YCBvcHRpb24gdG8gZGlzYWJsZSB0aGlzIGJlaGF2aW91ci5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS52aXNpdCh1cmwsIHsgcHJlc2VydmVTY3JvbGw6IHRydWUgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9zY3JvbGwtbWFuYWdlbWVudFwiXG4gICAgICB9fT57YHNjcm9sbCBtYW5hZ2VtZW50YH08L2E+e2AgcGFnZS5gfTwvcD5cbiAgICA8aDI+e2DQp9Cw0YHRgtC40YfQvdGL0LUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4YH08L2gyPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9ubHlgfTwvaW5saW5lQ29kZT57YCBvcHRpb24gYWxsb3dzIHlvdSB0byByZXF1ZXN0IGEgc3Vic2V0IG9mIHRoZSBwcm9wcyAoZGF0YSkgZnJvbSB0aGUgc2VydmVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIHRoZSBzYW1lIHBhZ2UuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQoJy91c2VycycsIHsgc2VhcmNoOiAnSm9obicgfSwgeyBvbmx5OiBbJ3VzZXJzJ10gfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9wYXJ0aWFsLXJlbG9hZHNcIlxuICAgICAgfX0+e2BwYXJ0aWFsIHJlbG9hZHNgfTwvYT57YCBwYWdlLmB9PC9wPlxuICAgIDxoMj57YNCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC1INC30LDQs9C+0LvQvtCy0LrQuGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BoZWFkZXJzYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIGFsbG93cyB5b3UgdG8gYWRkIGN1c3RvbSBoZWFkZXJzIHRvIGEgcmVxdWVzdC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCBkYXRhLCB7XG4gIGhlYWRlcnM6IHtcbiAgICAnQ3VzdG9tLUhlYWRlcic6ICd2YWx1ZScsXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+VGhlIEluZXJ0aWEgaGVhZGVycyB0YWtlIHByaW9yaXR5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIG92ZXJ3cml0dGVuLjwvTm90aWNlPlxuICAgIDxoMj57YNCe0YLQvNC10L3QsCDQv9C+0YHQtdGJ0LXQvdC40Y9gfTwvaDI+XG4gICAgPHA+e2BZb3UgY2FuIGNhbmNlbCBhIHZpc2l0IHVzaW5nIGEgY2FuY2VsIHRva2VuLCB3aGljaCBJbmVydGlhIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGFuZCBwcm92aWRlcyB2aWEgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uQ2FuY2VsVG9rZW4oKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrIHByaW9yIHRvIG1ha2luZyB0aGUgdmlzaXQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiAodGhpcy5jYW5jZWxUb2tlbiA9IGNhbmNlbFRva2VuKSxcbn0pXG5cbi8vIENhbmNlbCB0aGUgdmlzaXRcbnRoaXMuY2FuY2VsVG9rZW4uY2FuY2VsKClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgV2hlbiBhIHZpc2l0IGlzIGNhbmNlbGxlZCwgYm90aCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25DYW5jZWwoKWB9PC9pbmxpbmVDb2RlPntgIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkZpbmlzaCgpYH08L2lubGluZUNvZGU+e2AgZXZlbnQgY2FsbGJhY2tzIHdpbGwgYmUgY2FsbGVkLmB9PC9wPlxuICAgIDxoMj57YNCe0LHRgNCw0YLQvdGL0LUg0LLRi9C30L7QstGLINGB0L7QsdGL0YLQuNC5YH08L2gyPlxuICAgIDxwPntgSW4gYWRkaXRpb24gdG8gdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvZXZlbnRzXCJcbiAgICAgIH19PntgZ2xvYmFsIGV2ZW50c2B9PC9hPntgLCBJbmVydGlhIGFsc28gcHJvdmlkZXMgYSBudW1iZXIgb2YgcGVyLXZpc2l0IGV2ZW50IGNhbGxiYWNrcy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCBkYXRhLCB7XG4gIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICBvbkNhbmNlbDogKCkgPT4ge30sXG4gIG9uRmluaXNoOiAoKSA9PiB7fSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFJldHVybmluZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmYWxzZWB9PC9pbmxpbmVDb2RlPntgIGZyb20gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uU3RhcnQoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrIHdpbGwgY2F1c2UgdGhlIHZpc2l0IHRvIGJlIGNhbmNlbGxlZC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5kZWxldGUoXFxgL3VzZXJzL1xcJHt1c2VyLmlkfVxcYCwge1xuICBvblN0YXJ0OiAoKSA9PiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdXNlcj8nKSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEl0J3MgYWxzbyBwb3NzaWJsZSB0byByZXR1cm4gYSBwcm9taXNlIGZyb20gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uU3VjY2VzcygpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2suIFRoaXMgd2lsbCBkZWxheSB0aGUgXCJmaW5pc2hcIiBldmVudCB1bnRpbCB0aGUgcHJvbWlzZSBoYXMgcmVzb2x2ZWQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCh1cmwsIHtcbiAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuZG9UaGluZygpLFxuICAgICAgdGhpcy5kb0Fub3RoZXJUaGluZygpXG4gICAgXSlcbiAgfVxuICBvbkZpbmlzaDogKCkgPT4ge1xuICAgIC8vIFRoaXMgd29uJ3QgYmUgY2FsbGVkIHVudGlsIGRvVGhpbmcoKVxuICAgIC8vIGFuZCBkb0Fub3RoZXJUaGluZygpIGhhdmUgZmluaXNoZWQuXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0KPRgdGC0LDRgNC10LLQsNC90LjQtSDQv9GA0L7QvNC40YHQsGB9PC9oMj5cbiAgICA8cD57YEFzIG9mIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHYwLjMuMGB9PC9pbmxpbmVDb2RlPntgLCBJbmVydGlhIGRlcHJlY2F0ZWQgdGhlIHByb21pc2UgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEudmlzaXQoKWB9PC9pbmxpbmVDb2RlPntgLiBJZiB5b3UgY2FsbCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0aGVuKClgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY2F0Y2goKWB9PC9pbmxpbmVDb2RlPntgIG9yIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZpbmFsbHkoKWB9PC9pbmxpbmVDb2RlPntgIG9uIGFuIEluZXJ0aWEgdmlzaXQsIHlvdSB3aWxsIG5vdyBnZXQgdGhlIGZvbGxvd2luZyBjb25zb2xlIHdhcm5pbmc6YH08L3A+XG4gICAgPGRpdiBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItbC00IGJvcmRlci1vcmFuZ2UtMzAwIGJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtOTAwIHRleHQtc20gZm9udC1tb25vXCI+XG4gIDxkaXY+XG4gICAgSW5lcnRpYS5qcyB2aXNpdCBwcm9taXNlcyBoYXZlIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2UuIFBsZWFzZSB1c2UgdGhlIG5ldyB2aXNpdFxuICAgIGV2ZW50IGNhbGxiYWNrcyBpbnN0ZWFkLlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm10LTRcIj5MZWFybiBtb3JlIGF0IGh0dHBzOi8vaW5lcnRpYWpzLmNvbS9tYW51YWwtdmlzaXRzI3Byb21pc2UtZGVwcmVjYXRpb248L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cD57YFRoZSBwcmVmZXJyZWQgYXBwcm9hY2ggaXMgdG8gdXNlIHRoZSBuZXcgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIiNldmVudC1jYWxsYmFja3NcIlxuICAgICAgfX0+e2BldmVudCBjYWxsYmFja3NgfTwvYT57YCBpbnN0ZWFkLiBGb3IgZXhhbXBsZSwgaW5zdGVhZCBvZiB1c2luZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0aGVuKClgfTwvaW5saW5lQ29kZT57YCwgdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN1Y2Nlc3MoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy9wcm9maWxlJywgZGF0YSwge1xuICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAvLyBIYW5kbGUgc3VjY2VzcyBldmVudFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgSW5zdGVhZCBvZiB1c2luZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5hbGx5KClgfTwvaW5saW5lQ29kZT57YCwgdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkZpbmlzaCgpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2suYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3Byb2ZpbGUnLCBkYXRhLCB7XG4gIG9uRmluaXNoOiAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGZpbmlzaCBldmVudFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQW5kIGluc3RlYWQgb2YgdXNpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY2F0Y2goKWB9PC9pbmxpbmVDb2RlPntgLCBpdCdzIGJldHRlciB0byBoYW5kbGUgdGhlc2UgdW5leHBlY3RlZCBlcnJvcnMgdXNpbmcgYSBnbG9iYWwgZXJyb3IgZXZlbnQgaGFuZGxlci5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5vbignZXJyb3InLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBlcnJvciB5b3Vyc2VsZlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==