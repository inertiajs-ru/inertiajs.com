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
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u043F\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 30
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFudWFsLXZpc2l0cy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsbUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxRQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsU0FESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsdUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSx1QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLHlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLDZCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBbEJJLEVBcUJKO0FBQ0RELE9BQUcsRUFBRSxtQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQXJCSSxFQXdCSjtBQUNERCxPQUFHLEVBQUUsMEJBREo7QUFFREMsUUFBSSxFQUFFO0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNUIsd0ZBaFJLLEVBaVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUdBQUwsQ0FqUkssQ0FBUDtBQXlSRDtLQTdSdUJMLFU7QUErUnhCO0FBQ0FBLFVBQVUsQ0FBQ00sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYW51YWwtdmlzaXRzLjhjODYxNWE5N2Y2ZDVhNWY3N2QzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlJ1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cf0L7RgdC10YnQtdC90LjRjyDQstGA0YPRh9C90YPRjicsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPQvNC10YLQvtC0JyxcbiAgICBuYW1lOiAn0JzQtdGC0L7QtCdcbiAgfSwge1xuICAgIHVybDogJyPQtNCw0L3QvdGL0LUnLFxuICAgIG5hbWU6ICfQlNCw0L3QvdGL0LUnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LjRgdGC0L7RgNC40Y8t0LHRgNCw0YPQt9C10YDQsCcsXG4gICAgbmFtZTogJ9CY0YHRgtC+0YDQuNGPINCx0YDQsNGD0LfQtdGA0LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtGB0YLQvtGP0L3QuNC1LdC60L7QvNC/0L7QvdC10L3RgtCwJyxcbiAgICBuYW1lOiAn0KHQvtGB0YLQvtGP0L3QuNC1INC60L7QvNC/0L7QvdC10L3RgtCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7RhdGA0LDQvdC10L3QuNC1LdC/0YDQvtC60YDRg9GC0LrQuCcsXG4gICAgbmFtZTogJ9Ch0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuCdcbiAgfSwge1xuICAgIHVybDogJyPRh9Cw0YHRgtC40YfQvdGL0LUt0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4JyxcbiAgICBuYW1lOiAn0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCdcbiAgfSwge1xuICAgIHVybDogJyPQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtS3Qt9Cw0LPQvtC70L7QstC60LgnLFxuICAgIG5hbWU6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtSDQt9Cw0LPQvtC70L7QstC60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7RgtC80LXQvdCwLdC/0L7RgdC10YnQtdC90LjRjycsXG4gICAgbmFtZTogJ9Ce0YLQvNC10L3QsCDQv9C+0YHQtdGJ0LXQvdC40Y8nXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7QsdGA0LDRgtC90YvQtS3QstGL0LfQvtCy0Yst0YHQvtCx0YvRgtC40LknLFxuICAgIG5hbWU6ICfQntCx0YDQsNGC0L3Ri9C1INCy0YvQt9C+0LLRiyDRgdC+0LHRi9GC0LjQuSdcbiAgfSwge1xuICAgIHVybDogJyPRg9GB0YLQsNGA0LXQstCw0L3QuNC1LdC/0YDQvtC80LjRgdCwJyxcbiAgICBuYW1lOiAn0KPRgdGC0LDRgNC10LLQsNC90LjQtSDQv9GA0L7QvNC40YHQsCdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCf0L7RgdC10YnQtdC90LjRjyDQstGA0YPRh9C90YPRjmB9PC9oMT5cbiAgICA8cD57YNCf0L7QvNC40LzQviBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2xpbmtzXCJcbiAgICAgIH19Pntg0YHQvtC30LTQsNC90LjRjyDRgdGB0YvQu9C+0LpgfTwvYT57YCwg0YLQsNC60LbQtSDQvNC+0LbQvdC+INCy0YDRg9GH0L3Rg9GOINC00LXQu9Cw0YLRjCDQuNC90LXRgNGG0LjQvtC90L3Ri9C1INC/0L7RgdC10YnQtdC90LjRjy4g0K3RgtC+INC00LXQu9Cw0LXRgtGB0Y8g0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEudmlzaXQoKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAvLyBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICB0aGlzLiRpbmVydGlhLnZpc2l0KHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgcmVwbGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTY3JvbGw6IGZhbHNlLFxuICAgICAgICAgIG9ubHk6IFtdLFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsVG9rZW46IGNhbmNlbFRva2VuID0+IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsOiAoKSA9PiB7fSxcbiAgICAgICAgICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgICAgICAgICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgICAgICAgICBvblN1Y2Nlc3M6IHBhZ2UgPT4ge30sXG4gICAgICAgICAgb25GaW5pc2g6ICgpID0+IHt9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgSW5lcnRpYS52aXNpdCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICBvbmx5OiBbXSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiB7fSxcbiAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge30sXG4gICAgICAgICAgb25TdGFydDogdmlzaXQgPT4ge30sXG4gICAgICAgICAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gICAgICAgICAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICAgICAgICAgIG9uRmluaXNoOiAoKSA9PiB7fSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLnZpc2l0KHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgcmVwbGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTY3JvbGw6IGZhbHNlLFxuICAgICAgICAgIG9ubHk6IFtdLFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsVG9rZW46IGNhbmNlbFRva2VuID0+IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsOiAoKSA9PiB7fSxcbiAgICAgICAgICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgICAgICAgICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgICAgICAgICBvblN1Y2Nlc3M6IHBhZ2UgPT4ge30sXG4gICAgICAgICAgb25GaW5pc2g6ICgpID0+IHt9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YNCe0LTQvdCw0LrQviDQvtCx0YvRh9C90L4g0LLQvNC10YHRgtC+INGN0YLQvtCz0L4g0YDQtdC60L7QvNC10L3QtNGD0LXRgtGB0Y8g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC+0LTQuNC9INC40Lcg0LzQtdGC0L7QtNC+0LIg0LHRi9GB0YLRgNC+0LPQviDQtNC+0YHRgtGD0L/QsC4g0K3RgtC4INC80LXRgtC+0LTRiyDQuNC80LXRjtGCINGC0LUg0LbQtSDQv9Cw0YDQsNC80LXRgtGA0YssINGH0YLQviDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnZpc2l0KClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLy8gaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgdGhpcy4kaW5lcnRpYS5nZXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnBvc3QodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnB1dCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuJGluZXJ0aWEucGF0Y2godXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLmRlbGV0ZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuJGluZXJ0aWEucmVwbGFjZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuJGluZXJ0aWEucmVsb2FkKG9wdGlvbnMpIC8vIFVzZXMgdGhlIGN1cnJlbnQgVVJMXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLmdldCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucHV0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5wYXRjaCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEuZGVsZXRlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZXBsYWNlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZWxvYWQob3B0aW9ucykgLy8gVXNlcyB0aGUgY3VycmVudCBVUkxcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLmdldCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucHV0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5wYXRjaCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEuZGVsZXRlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZXBsYWNlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZWxvYWQob3B0aW9ucykgLy8gVXNlcyB0aGUgY3VycmVudCBVUkxcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JzQtdGC0L7QtGB9PC9oMj5cbiAgICA8cD57YNCY0YHQv9C+0LvRjNC30YPQudGC0LUg0L7Qv9GG0LjRjiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BtZXRob2RgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDRg9GB0YLQsNC90L7QstC40YLRjCDQvNC10YLQvtC0INC30LDQv9GA0L7RgdCwINC90LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZ2V0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3RgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHV0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoYH08L2lubGluZUNvZGU+e2Ag0LjQu9C4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRlbGV0ZWB9PC9pbmxpbmVDb2RlPntgLiDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDRjdGC0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZ2V0YH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQodXJsLCB7IG1ldGhvZDogJ3Bvc3QnIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQlNCw0L3QvdGL0LVgfTwvaDI+XG4gICAgPHA+e2DQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC+0L/RhtC40Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YWB9PC9pbmxpbmVDb2RlPntgIG9wdGlvbiB0byBhZGQgZGF0YSB0byB0aGUgcmVxdWVzdC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS52aXNpdCgnL3VzZXJzJywge1xuICBtZXRob2Q6ICdwb3N0JyxcbiAgZGF0YToge1xuICAgIG5hbWU6ICdKb2huIERvZScsXG4gICAgZW1haWw6ICdqb2huLmRvZUBleGFtcGxlLmNvbScsXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BBcyBhIGNvbnZlbmllbmNlLCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZ2V0KClgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdCgpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHB1dCgpYH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoKClgfTwvaW5saW5lQ29kZT57YCBtZXRob2RzIGFsbCBpbmNsdWRlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRhdGFgfTwvaW5saW5lQ29kZT57YCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy91c2VycycsIHtcbiAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgZW1haWw6ICdqb2huLmRvZUBleGFtcGxlLmNvbScsXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0JjRgdGC0L7RgNC40Y8g0LHRgNCw0YPQt9C10YDQsGB9PC9oMj5cbiAgICA8cD57YFdoZW4gbWFraW5nIHZpc2l0cywgSW5lcnRpYSBhdXRvbWF0aWNhbGx5IGFkZHMgYSBuZXcgZW50cnkgaW50byB0aGUgYnJvd3NlciBoaXN0b3J5LiBIb3dldmVyLCBpdCdzIGFsc28gcG9zc2libGUgdG8gcmVwbGFjZSB0aGUgY3VycmVudCBoaXN0b3J5IGVudHJ5IHVzaW5nIGJ5IHNldHRpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlcGxhY2VgfTwvaW5saW5lQ29kZT57YCBvcHRpb24gdG8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLmdldCgnL3VzZXJzJywgeyBzZWFyY2g6ICdKb2huJyB9LCB7IHJlcGxhY2U6IHRydWUgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQXMgYSBzaG9ydGN1dCwgeW91IGNhbiB1c2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVwbGFjZSgpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgZG8gdGhpcy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5yZXBsYWNlKCcvdXNlcnMnLCB7IHNlYXJjaDogJ0pvaG4nIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj5cbiAgTm90ZSB0aGF0IHZpc2l0cyBtYWRlIHRvIHRoZSBzYW1lIFVSTCAoaW5jbHVkaW5nIHF1ZXJ5IHN0cmluZ3MpIGF1dG9tYXRpY2FsbHkgc2V0IDxpbmxpbmVDb2RlPnJlcGxhY2U8L2lubGluZUNvZGU+IHRveycgJ31cbiAgPGlubGluZUNvZGU+dHJ1ZTwvaW5saW5lQ29kZT4uXG4gICAgPC9Ob3RpY2U+XG4gICAgPGgyPntg0KHQvtGB0YLQvtGP0L3QuNC1INC60L7QvNC/0L7QvdC10L3RgtCwYH08L2gyPlxuICAgIDxwPntgQnkgZGVmYXVsdCBwYWdlIHZpc2l0cyB0byB0aGUgc2FtZSBwYWdlIGZvcmNlIGEgZnJlc2ggcGFnZSBjb21wb25lbnQgaW5zdGFuY2UsIHdoaWNoIGNsZWFycyBvdXQgYW55IGxvY2FsIHN0YXRlLCBzdWNoIGFzIGZvcm0gaW5wdXRzLCBzY3JvbGwgcG9zaXRpb25zIGFuZCBmb2N1cyBzdGF0ZXMuYH08L3A+XG4gICAgPHA+e2BJbiBjZXJ0YWluIHNpdHVhdGlvbnMgaXQncyBuZWNlc3NhcnkgdG8gcHJlc2VydmUgdGhlIHBhZ2UgY29tcG9uZW50IHN0YXRlLiBGb3IgZXhhbXBsZSwgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSwgeW91IG5lZWQgdG8gcHJlc2VydmUgeW91ciBmb3JtIGRhdGEgaW4gdGhlIGV2ZW50IHRoYXQgdmFsaWRhdGlvbiBlcnJvcnMgY29tZSBiYWNrLmB9PC9wPlxuICAgIDxwPntgVGhpcyBjYW4gYmUgZG9uZSBieSBzZXR0aW5nIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZVN0YXRlYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIHRvIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRydWVgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5nZXQoJy91c2VycycsIHsgc2VhcmNoOiAnSm9obicgfSwgeyBwcmVzZXJ2ZVN0YXRlOiB0cnVlIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEZvciBjb252ZW5pZW5jZSwgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3QoKWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwdXQoKWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYXRjaCgpYH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlcGxhY2UoKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZHMgYXV0bWF0aWNhbGx5IHNldCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZVN0YXRlYH08L2lubGluZUNvZGU+e2AgdG8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxoMj57YNCh0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuGB9PC9oMj5cbiAgICA8cD57YFdoZW4gbmF2aWdhdGluZyBiZXR3ZWVuIHBhZ2VzLCBJbmVydGlhIG1pbWljcyBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3VyIGJ5IGF1dG9tYXRpY2FsbHkgcmVzZXR0aW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGRvY3VtZW50IGJvZHkgKGFzIHdlbGwgYXMgYW55IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2Nyb2xsLW1hbmFnZW1lbnQjc2Nyb2xsLXJlZ2lvbnNcIlxuICAgICAgfX0+e2BzY3JvbGwgcmVnaW9uc2B9PC9hPntgIHlvdSd2ZSBkZWZpbmVkKSwgYmFjayB0byB0aGUgdG9wLiBVc2UgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByZXNlcnZlU2Nyb2xsYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIHRvIGRpc2FibGUgdGhpcyBiZWhhdmlvdXIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQodXJsLCB7IHByZXNlcnZlU2Nyb2xsOiB0cnVlIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2Nyb2xsLW1hbmFnZW1lbnRcIlxuICAgICAgfX0+e2BzY3JvbGwgbWFuYWdlbWVudGB9PC9hPntgIHBhZ2UuYH08L3A+XG4gICAgPGgyPntg0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bvbmx5YH08L2lubGluZUNvZGU+e2Agb3B0aW9uIGFsbG93cyB5b3UgdG8gcmVxdWVzdCBhIHN1YnNldCBvZiB0aGUgcHJvcHMgKGRhdGEpIGZyb20gdGhlIHNlcnZlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byB0aGUgc2FtZSBwYWdlLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnZpc2l0KCcvdXNlcnMnLCB7IHNlYXJjaDogJ0pvaG4nIH0sIHsgb25seTogWyd1c2VycyddIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvcGFydGlhbC1yZWxvYWRzXCJcbiAgICAgIH19PntgcGFydGlhbCByZWxvYWRzYH08L2E+e2AgcGFnZS5gfTwvcD5cbiAgICA8aDI+e2DQn9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtSDQt9Cw0LPQvtC70L7QstC60LhgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaGVhZGVyc2B9PC9pbmxpbmVDb2RlPntgIG9wdGlvbiBhbGxvd3MgeW91IHRvIGFkZCBjdXN0b20gaGVhZGVycyB0byBhIHJlcXVlc3QuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBoZWFkZXJzOiB7XG4gICAgJ0N1c3RvbS1IZWFkZXInOiAndmFsdWUnLFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPlRoZSBJbmVydGlhIGhlYWRlcnMgdGFrZSBwcmlvcml0eSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSBvdmVyd3JpdHRlbi48L05vdGljZT5cbiAgICA8aDI+e2DQntGC0LzQtdC90LAg0L/QvtGB0LXRidC10L3QuNGPYH08L2gyPlxuICAgIDxwPntgWW91IGNhbiBjYW5jZWwgYSB2aXNpdCB1c2luZyBhIGNhbmNlbCB0b2tlbiwgd2hpY2ggSW5lcnRpYSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgdmlhIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkNhbmNlbFRva2VuKClgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjayBwcmlvciB0byBtYWtpbmcgdGhlIHZpc2l0LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy91c2VycycsIGRhdGEsIHtcbiAgb25DYW5jZWxUb2tlbjogY2FuY2VsVG9rZW4gPT4gKHRoaXMuY2FuY2VsVG9rZW4gPSBjYW5jZWxUb2tlbiksXG59KVxuXG4vLyBDYW5jZWwgdGhlIHZpc2l0XG50aGlzLmNhbmNlbFRva2VuLmNhbmNlbCgpXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFdoZW4gYSB2aXNpdCBpcyBjYW5jZWxsZWQsIGJvdGggdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uQ2FuY2VsKClgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25GaW5pc2goKWB9PC9pbmxpbmVDb2RlPntgIGV2ZW50IGNhbGxiYWNrcyB3aWxsIGJlIGNhbGxlZC5gfTwvcD5cbiAgICA8aDI+e2DQntCx0YDQsNGC0L3Ri9C1INCy0YvQt9C+0LLRiyDRgdC+0LHRi9GC0LjQuWB9PC9oMj5cbiAgICA8cD57YEluIGFkZGl0aW9uIHRvIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2V2ZW50c1wiXG4gICAgICB9fT57YGdsb2JhbCBldmVudHNgfTwvYT57YCwgSW5lcnRpYSBhbHNvIHByb3ZpZGVzIGEgbnVtYmVyIG9mIHBlci12aXNpdCBldmVudCBjYWxsYmFja3MuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgb25DYW5jZWw6ICgpID0+IHt9LFxuICBvbkZpbmlzaDogKCkgPT4ge30sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BSZXR1cm5pbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmFsc2VgfTwvaW5saW5lQ29kZT57YCBmcm9tIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN0YXJ0KClgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjayB3aWxsIGNhdXNlIHRoZSB2aXNpdCB0byBiZSBjYW5jZWxsZWQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEuZGVsZXRlKFxcYC91c2Vycy9cXCR7dXNlci5pZH1cXGAsIHtcbiAgb25TdGFydDogKCkgPT4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHVzZXI/JyksXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJdCdzIGFsc28gcG9zc2libGUgdG8gcmV0dXJuIGEgcHJvbWlzZSBmcm9tIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN1Y2Nlc3MoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLiBUaGlzIHdpbGwgZGVsYXkgdGhlIFwiZmluaXNoXCIgZXZlbnQgdW50aWwgdGhlIHByb21pc2UgaGFzIHJlc29sdmVkLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QodXJsLCB7XG4gIG9uU3VjY2VzczogKCkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmRvVGhpbmcoKSxcbiAgICAgIHRoaXMuZG9Bbm90aGVyVGhpbmcoKVxuICAgIF0pXG4gIH1cbiAgb25GaW5pc2g6ICgpID0+IHtcbiAgICAvLyBUaGlzIHdvbid0IGJlIGNhbGxlZCB1bnRpbCBkb1RoaW5nKClcbiAgICAvLyBhbmQgZG9Bbm90aGVyVGhpbmcoKSBoYXZlIGZpbmlzaGVkLlxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCj0YHRgtCw0YDQtdCy0LDQvdC40LUg0L/RgNC+0LzQuNGB0LBgfTwvaDI+XG4gICAgPHA+e2BBcyBvZiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B2MC4zLjBgfTwvaW5saW5lQ29kZT57YCwgSW5lcnRpYSBkZXByZWNhdGVkIHRoZSBwcm9taXNlIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnZpc2l0KClgfTwvaW5saW5lQ29kZT57YC4gSWYgeW91IGNhbGwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGhlbigpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNhdGNoKClgfTwvaW5saW5lQ29kZT57YCBvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5hbGx5KClgfTwvaW5saW5lQ29kZT57YCBvbiBhbiBJbmVydGlhIHZpc2l0LCB5b3Ugd2lsbCBub3cgZ2V0IHRoZSBmb2xsb3dpbmcgY29uc29sZSB3YXJuaW5nOmB9PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWwtNCBib3JkZXItb3JhbmdlLTMwMCBiZy1vcmFuZ2UtMTAwIHRleHQtb3JhbmdlLTkwMCB0ZXh0LXNtIGZvbnQtbW9ub1wiPlxuICA8ZGl2PlxuICAgIEluZXJ0aWEuanMgdmlzaXQgcHJvbWlzZXMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLiBQbGVhc2UgdXNlIHRoZSBuZXcgdmlzaXRcbiAgICBldmVudCBjYWxsYmFja3MgaW5zdGVhZC5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtdC00XCI+TGVhcm4gbW9yZSBhdCBodHRwczovL2luZXJ0aWFqcy5jb20vbWFudWFsLXZpc2l0cyNwcm9taXNlLWRlcHJlY2F0aW9uPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHA+e2BUaGUgcHJlZmVycmVkIGFwcHJvYWNoIGlzIHRvIHVzZSB0aGUgbmV3IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIjZXZlbnQtY2FsbGJhY2tzXCJcbiAgICAgIH19PntgZXZlbnQgY2FsbGJhY2tzYH08L2E+e2AgaW5zdGVhZC4gRm9yIGV4YW1wbGUsIGluc3RlYWQgb2YgdXNpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGhlbigpYH08L2lubGluZUNvZGU+e2AsIHVzZSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25TdWNjZXNzKClgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjay5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvcHJvZmlsZScsIGRhdGEsIHtcbiAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIHN1Y2Nlc3MgZXZlbnRcbiAgfSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEluc3RlYWQgb2YgdXNpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmluYWxseSgpYH08L2lubGluZUNvZGU+e2AsIHVzZSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25GaW5pc2goKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy9wcm9maWxlJywgZGF0YSwge1xuICBvbkZpbmlzaDogKCkgPT4ge1xuICAgIC8vIEhhbmRsZSBmaW5pc2ggZXZlbnRcbiAgfSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEFuZCBpbnN0ZWFkIG9mIHVzaW5nIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNhdGNoKClgfTwvaW5saW5lQ29kZT57YCwgaXQncyBiZXR0ZXIgdG8gaGFuZGxlIHRoZXNlIHVuZXhwZWN0ZWQgZXJyb3JzIHVzaW5nIGEgZ2xvYmFsIGVycm9yIGV2ZW50IGhhbmRsZXIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEub24oJ2Vycm9yJywgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIEhhbmRsZSB0aGUgZXJyb3IgeW91cnNlbGZcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=