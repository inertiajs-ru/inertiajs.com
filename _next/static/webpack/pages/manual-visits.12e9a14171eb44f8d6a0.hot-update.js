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
  }, "data"), ", \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0437\u0430\u043F\u0440\u043E\u0441."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u0414\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u0432\u0441\u0435 \u043C\u0435\u0442\u043E\u0434\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 36
    }
  }, "get()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 91
    }
  }, "post()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 147
    }
  }, "put()"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 203
    }
  }, "patch()"), " \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 306
    }
  }, "data"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u041F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u043E\u0432\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u041E\u0434\u043D\u0430\u043A\u043E \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0432 \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 169
    }
  }, "replace"), " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 234
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
  }, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u044F\u0440\u043B\u044B\u043A\u0430 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 59
    }
  }, "replace()"), ", \u0447\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0438 \u0442\u043E\u0433\u043E \u0436\u0435 URL (\u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430) \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442 \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 114
    }
  }, "replace"), " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435", ' ', " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 161
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 5
    }
  }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0439 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0447\u0438\u0449\u0430\u0435\u0442 \u043B\u044E\u0431\u043E\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435, \u0442\u0430\u043A\u043E\u0435 \u043A\u0430\u043A \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B, \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0438 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0444\u043E\u043A\u0443\u0441\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    }
  }, "\u0412 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0444\u043E\u0440\u043C\u044B \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B \u043D\u0430 \u0442\u043E\u0442 \u0441\u043B\u0443\u0447\u0430\u0439, \u0435\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, "\u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0432 \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 55
    }
  }, "preserveState"), " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 126
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
      lineNumber: 211,
      columnNumber: 10
    }
  }), "Inertia.get('/users', { search: 'John' }, { preserveState: true })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u043C\u0435\u0442\u043E\u0434\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 32
    }
  }, "post()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 88
    }
  }, "put()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 143
    }
  }, "patch()"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 201
    }
  }, "replace()"), " \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442 \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 301
    }
  }, "preserveState"), " \u0437\u043D\u0430\u0435\u0447\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 372
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0435 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C\u0438 Inertia \u0438\u043C\u0438\u0442\u0438\u0440\u0443\u0435\u0442 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u044F \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0442\u0435\u043B\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 (\u0430 \u0442\u0430\u043A\u0436\u0435 \u043B\u044E\u0431\u044B\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0412\u0430\u043C\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/scroll-management#%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8-%D0%BF%D1%80%D0%BE%D0%BA%D1%80%D1%83%D1%82%D0%BA%D0%B8"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 185
    }
  }), "\u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438"), ") \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430\u0432\u0435\u0440\u0445. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u043F\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 75
    }
  }, "preserveScroll"), ", \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
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
      lineNumber: 220,
      columnNumber: 10
    }
  }), "Inertia.visit(url, { preserveScroll: true })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/scroll-management"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 70
    }
  }), "scroll management"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 5
    }
  }, "\u041E\u043F\u0446\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 18
    }
  }, "only"), " \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0412\u0430\u043C \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C \u043F\u043E\u0434\u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432 (\u0434\u0430\u043D\u043D\u044B\u0445) \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u0440\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0445 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
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
      lineNumber: 229,
      columnNumber: 10
    }
  }), "Inertia.visit('/users', { search: 'John' }, { only: ['users'] })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/partial-reloads"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 70
    }
  }), "partial reloads"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 5
    }
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 16
    }
  }, "headers"), " option allows you to add custom headers to a request."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
      lineNumber: 238,
      columnNumber: 10
    }
  }), "Inertia.post('/users', data, {\n  headers: {\n    'Custom-Header': 'value',\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 5
    }
  }, "The Inertia headers take priority and therefore cannot be overwritten."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 5
    }
  }, "You can cancel a visit using a cancel token, which Inertia automatically generates and provides via the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 116
    }
  }, "onCancelToken()"), " callback prior to making the visit."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
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
      lineNumber: 249,
      columnNumber: 10
    }
  }), "Inertia.post('/users', data, {\n  onCancelToken: cancelToken => (this.cancelToken = cancelToken),\n})\n\n// Cancel the visit\nthis.cancelToken.cancel()\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 5
    }
  }, "When a visit is cancelled, both the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 48
    }
  }, "onCancel()"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 111
    }
  }, "onFinish()"), " event callbacks will be called."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
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
      lineNumber: 260,
      columnNumber: 31
    }
  }), "global events"), ", Inertia also provides a number of per-visit event callbacks."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
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
      lineNumber: 263,
      columnNumber: 10
    }
  }), "Inertia.post('/users', data, {\n  onStart: visit => {},\n  onProgress: progress => {},\n  onSuccess: page => {},\n  onCancel: () => {},\n  onFinish: () => {},\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }, "Returning ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 22
    }
  }, "false"), " from the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 85
    }
  }, "onStart()"), " callback will cause the visit to be cancelled."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
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
      lineNumber: 274,
      columnNumber: 10
    }
  }), "Inertia.delete(`/users/${user.id}`, {\n  onStart: () => confirm('Are you sure you want to delete this user?'),\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 5
    }
  }, "It's also possible to return a promise from the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 60
    }
  }, "onSuccess()"), " callback. This will delay the \"finish\" event until the promise has resolved."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
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
      lineNumber: 281,
      columnNumber: 10
    }
  }), "Inertia.post(url, {\n  onSuccess: () => {\n    return Promise.all([\n      this.doThing(),\n      this.doAnotherThing()\n    ])\n  }\n  onFinish: () => {\n    // This won't be called until doThing()\n    // and doAnotherThing() have finished.\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u043C\u0438\u0441\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 5
    }
  }, "As of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 18
    }
  }, "v0.3.0"), ", Inertia deprecated the promise that is returned from ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 127
    }
  }, "Inertia.visit()"), ". If you call ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 204
    }
  }, "then()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 260
    }
  }, "catch()"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 319
    }
  }, "finally()"), " on an Inertia visit, you will now get the following console warning:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    "class": "py-4 px-6 border-l-4 border-orange-300 bg-orange-100 text-orange-900 text-sm font-mono",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 3
    }
  }, "Inertia.js visit promises have been deprecated and will be removed in a future release. Please use the new visit event callbacks instead."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    "class": "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 3
    }
  }, "Learn more at https://inertiajs.com/manual-visits#promise-deprecation")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
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
      lineNumber: 305,
      columnNumber: 53
    }
  }), "event callbacks"), " instead. For example, instead of using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 77
    }
  }, "then()"), ", use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 141
    }
  }, "onSuccess()"), " callback."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
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
      lineNumber: 308,
      columnNumber: 10
    }
  }), "Inertia.post('/profile', data, {\n  onSuccess: () => {\n    // Handle success event\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 5
    }
  }, "Instead of using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 29
    }
  }, "finally()"), ", use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 96
    }
  }, "onFinish()"), " callback."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
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
      lineNumber: 317,
      columnNumber: 10
    }
  }), "Inertia.post('/profile', data, {\n  onFinish: () => {\n    // Handle finish event\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 5
    }
  }, "And instead of using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 33
    }
  }, "catch()"), ", it's better to handle these unexpected errors using a global error event handler."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
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
      lineNumber: 326,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFudWFsLXZpc2l0cy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsbUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxRQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsU0FESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsdUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSx1QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLHlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLDZCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBbEJJLEVBcUJKO0FBQ0RELE9BQUcsRUFBRSxtQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQXJCSSxFQXdCSjtBQUNERCxPQUFHLEVBQUUsMEJBREo7QUFFREMsUUFBSSxFQUFFO0FB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTVCLHdGQS9RSyxFQWdSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVHQUFMLENBaFJLLENBQVA7QUF3UkQ7S0E1UnVCTCxVO0FBOFJ4QjtBQUNBQSxVQUFVLENBQUNNLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFudWFsLXZpc2l0cy4xMmU5YTE0MTcxZWI0NGY4ZDZhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQn9C+0YHQtdGJ0LXQvdC40Y8g0LLRgNGD0YfQvdGD0Y4nLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0LzQtdGC0L7QtCcsXG4gICAgbmFtZTogJ9Cc0LXRgtC+0LQnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LTQsNC90L3Ri9C1JyxcbiAgICBuYW1lOiAn0JTQsNC90L3Ri9C1J1xuICB9LCB7XG4gICAgdXJsOiAnI9C40YHRgtC+0YDQuNGPLdCx0YDQsNGD0LfQtdGA0LAnLFxuICAgIG5hbWU6ICfQmNGB0YLQvtGA0LjRjyDQsdGA0LDRg9C30LXRgNCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7RgdGC0L7Rj9C90LjQtS3QutC+0LzQv9C+0L3QtdC90YLQsCcsXG4gICAgbmFtZTogJ9Ch0L7RgdGC0L7Rj9C90LjQtSDQutC+0LzQv9C+0L3QtdC90YLQsCdcbiAgfSwge1xuICAgIHVybDogJyPRgdC+0YXRgNCw0L3QtdC90LjQtS3Qv9GA0L7QutGA0YPRgtC60LgnLFxuICAgIG5hbWU6ICfQodC+0YXRgNCw0L3QtdC90LjQtSDQv9GA0L7QutGA0YPRgtC60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YfQsNGB0YLQuNGH0L3Ri9C1LdC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCcsXG4gICAgbmFtZTogJ9Cn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUt0LfQsNCz0L7Qu9C+0LLQutC4JyxcbiAgICBuYW1lOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUg0LfQsNCz0L7Qu9C+0LLQutC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0YLQvNC10L3QsC3Qv9C+0YHQtdGJ0LXQvdC40Y8nLFxuICAgIG5hbWU6ICfQntGC0LzQtdC90LAg0L/QvtGB0LXRidC10L3QuNGPJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHRgNCw0YLQvdGL0LUt0LLRi9C30L7QstGLLdGB0L7QsdGL0YLQuNC5JyxcbiAgICBuYW1lOiAn0J7QsdGA0LDRgtC90YvQtSDQstGL0LfQvtCy0Ysg0YHQvtCx0YvRgtC40LknXG4gIH0sIHtcbiAgICB1cmw6ICcj0YPRgdGC0LDRgNC10LLQsNC90LjQtS3Qv9GA0L7QvNC40YHQsCcsXG4gICAgbmFtZTogJ9Cj0YHRgtCw0YDQtdCy0LDQvdC40LUg0L/RgNC+0LzQuNGB0LAnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQn9C+0YHQtdGJ0LXQvdC40Y8g0LLRgNGD0YfQvdGD0Y5gfTwvaDE+XG4gICAgPHA+e2DQn9C+0LzQuNC80L4gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9saW5rc1wiXG4gICAgICB9fT57YNGB0L7Qt9C00LDQvdC40Y8g0YHRgdGL0LvQvtC6YH08L2E+e2AsINGC0LDQutC20LUg0LzQvtC20L3QviDQstGA0YPRh9C90YPRjiDQtNC10LvQsNGC0Ywg0LjQvdC10YDRhtC40L7QvdC90YvQtSDQv9C+0YHQtdGJ0LXQvdC40Y8uINCt0YLQviDQtNC10LvQsNC10YLRgdGPINGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnZpc2l0KClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLy8gaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgdGhpcy4kaW5lcnRpYS52aXNpdCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICBvbmx5OiBbXSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiB7fSxcbiAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge30sXG4gICAgICAgICAgb25TdGFydDogdmlzaXQgPT4ge30sXG4gICAgICAgICAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gICAgICAgICAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICAgICAgICAgIG9uRmluaXNoOiAoKSA9PiB7fSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgIEluZXJ0aWEudmlzaXQodXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICByZXBsYWNlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVN0YXRlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVNjcm9sbDogZmFsc2UsXG4gICAgICAgICAgb25seTogW10sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgb25DYW5jZWxUb2tlbjogY2FuY2VsVG9rZW4gPT4ge30sXG4gICAgICAgICAgb25DYW5jZWw6ICgpID0+IHt9LFxuICAgICAgICAgIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICAgICAgICAgIG9uUHJvZ3Jlc3M6IHByb2dyZXNzID0+IHt9LFxuICAgICAgICAgIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgICAgICAgICBvbkZpbmlzaDogKCkgPT4ge30sXG4gICAgICAgIH0pXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgSW5lcnRpYS52aXNpdCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICBvbmx5OiBbXSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiB7fSxcbiAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge30sXG4gICAgICAgICAgb25TdGFydDogdmlzaXQgPT4ge30sXG4gICAgICAgICAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gICAgICAgICAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICAgICAgICAgIG9uRmluaXNoOiAoKSA9PiB7fSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQntC00L3QsNC60L4g0L7QsdGL0YfQvdC+INCy0LzQtdGB0YLQviDRjdGC0L7Qs9C+INGA0LXQutC+0LzQtdC90LTRg9C10YLRgdGPINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQvtC00LjQvSDQuNC3INC80LXRgtC+0LTQvtCyINCx0YvRgdGC0YDQvtCz0L4g0LTQvtGB0YLRg9C/0LAuINCt0YLQuCDQvNC10YLQvtC00Ysg0LjQvNC10Y7RgiDRgtC1INC20LUg0L/QsNGA0LDQvNC10YLRgNGLLCDRh9GC0L4g0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSW5lcnRpYS52aXNpdCgpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8vIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgIHRoaXMuJGluZXJ0aWEuZ2V0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgdGhpcy4kaW5lcnRpYS5wb3N0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgdGhpcy4kaW5lcnRpYS5wdXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnBhdGNoKHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgdGhpcy4kaW5lcnRpYS5kZWxldGUodXJsLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnJlcGxhY2UodXJsLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnJlbG9hZChvcHRpb25zKSAvLyBVc2VzIHRoZSBjdXJyZW50IFVSTFxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgSW5lcnRpYS5nZXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnBvc3QodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnB1dCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucGF0Y2godXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLmRlbGV0ZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucmVwbGFjZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucmVsb2FkKG9wdGlvbnMpIC8vIFVzZXMgdGhlIGN1cnJlbnQgVVJMXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgSW5lcnRpYS5nZXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnBvc3QodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnB1dCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucGF0Y2godXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLmRlbGV0ZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucmVwbGFjZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucmVsb2FkKG9wdGlvbnMpIC8vIFVzZXMgdGhlIGN1cnJlbnQgVVJMXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCc0LXRgtC+0LRgfTwvaDI+XG4gICAgPHA+e2DQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC+0L/RhtC40Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbWV0aG9kYH08L2lubGluZUNvZGU+e2AsINGH0YLQvtCx0Ysg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LzQtdGC0L7QtCDQt9Cw0L/RgNC+0YHQsCDQvdCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGdldGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHB1dGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYXRjaGB9PC9pbmxpbmVDb2RlPntgINC40LvQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkZWxldGVgfTwvaW5saW5lQ29kZT57YC4g0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0Y3RgtC+IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGdldGB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnZpc2l0KHVybCwgeyBtZXRob2Q6ICdwb3N0JyB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0JTQsNC90L3Ri9C1YH08L2gyPlxuICAgIDxwPntg0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQvtC/0YbQuNGOIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRhdGFgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDQtNC+0LHQsNCy0LjRgtGMINC00LDQvdC90YvQtSDQsiDQt9Cw0L/RgNC+0YEuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQoJy91c2VycycsIHtcbiAgbWV0aG9kOiAncG9zdCcsXG4gIGRhdGE6IHtcbiAgICBuYW1lOiAnSm9obiBEb2UnLFxuICAgIGVtYWlsOiAnam9obi5kb2VAZXhhbXBsZS5jb20nLFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JTQu9GPINGD0LTQvtCx0YHRgtCy0LAg0LLRgdC1INC80LXRgtC+0LTRiyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BnZXQoKWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0KClgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHV0KClgfTwvaW5saW5lQ29kZT57YCDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYXRjaCgpYH08L2lubGluZUNvZGU+e2Ag0LLQutC70Y7Rh9Cw0Y7RgiDQsiDQutCw0YfQtdGB0YLQstC1INCy0YLQvtGA0L7Qs9C+INCw0YDQs9GD0LzQtdC90YLQsCDQt9C90LDRh9C10L3QuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRhdGFgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB7XG4gIG5hbWU6ICdKb2huIERvZScsXG4gIGVtYWlsOiAnam9obi5kb2VAZXhhbXBsZS5jb20nLFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCY0YHRgtC+0YDQuNGPINCx0YDQsNGD0LfQtdGA0LBgfTwvaDI+XG4gICAgPHA+e2DQn9GA0Lgg0L/QvtGB0LXRidC10L3QuNC4IEluZXJ0aWEg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LTQvtCx0LDQstC70Y/QtdGCINC90L7QstGD0Y4g0LfQsNC/0LjRgdGMINCyINC40YHRgtC+0YDQuNGOINCx0YDQsNGD0LfQtdGA0LAuINCe0LTQvdCw0LrQviDRgtCw0LrQttC1INC80L7QttC90L4g0LfQsNC80LXQvdC40YLRjCDRgtC10LrRg9GJ0YPRjiDQt9Cw0L/QuNGB0Ywg0LIg0LjRgdGC0L7RgNC40LgsINGD0YHRgtCw0L3QvtCy0LjQsiDQtNC70Y8g0L/QsNGA0LDQvNC10YLRgNCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlcGxhY2VgfTwvaW5saW5lQ29kZT57YCDQt9C90LDRh9C10L3QuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRydWVgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5nZXQoJy91c2VycycsIHsgc2VhcmNoOiAnSm9obicgfSwgeyByZXBsYWNlOiB0cnVlIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCSINC60LDRh9C10YHRgtCy0LUg0Y/RgNC70YvQutCwINCy0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQvNC10YLQvtC0IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlcGxhY2UoKWB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINGB0LTQtdC70LDRgtGMINGN0YLQviDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5yZXBsYWNlKCcvdXNlcnMnLCB7IHNlYXJjaDogJ0pvaG4nIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj5cbiAg0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0L/QvtGB0LXRidC10L3QuNGPINC+0LTQvdC+0LPQviDQuCDRgtC+0LPQviDQttC1IFVSTCAo0LLQutC70Y7Rh9Cw0Y8g0YHRgtGA0L7QutC4INC30LDQv9GA0L7RgdCwKSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRg9GB0YLQsNC90LDQstC70LjQstCw0Y7RgiDQtNC70Y8gPGlubGluZUNvZGU+cmVwbGFjZTwvaW5saW5lQ29kZT4g0LfQvdCw0YfQtdC90LjQtXsnICd9IDxpbmxpbmVDb2RlPnRydWU8L2lubGluZUNvZGU+LlxuICAgIDwvTm90aWNlPlxuICAgIDxoMj57YNCh0L7RgdGC0L7Rj9C90LjQtSDQutC+0LzQv9C+0L3QtdC90YLQsGB9PC9oMj5cbiAgICA8cD57YNCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC/0YDQuCDQv9C+0YHQtdGJ0LXQvdC40Lgg0YLQvtC5INC20LUg0YHRgtGA0LDQvdC40YbRiyDQv9GA0LjQvdGD0LTQuNGC0LXQu9GM0L3QviDRgdC+0LfQtNCw0LXRgtGB0Y8g0L3QvtCy0YvQuSDRjdC60LfQtdC80L/Qu9GP0YAg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiywg0LrQvtGC0L7RgNGL0Lkg0L7Rh9C40YnQsNC10YIg0LvRjtCx0L7QtSDQu9C+0LrQsNC70YzQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1LCDRgtCw0LrQvtC1INC60LDQuiDQstGF0L7QtNC90YvQtSDQtNCw0L3QvdGL0LUg0YTQvtGA0LzRiywg0L/QvtC70L7QttC10L3QuNGPINC/0YDQvtC60YDRg9GC0LrQuCDQuCDRgdC+0YHRgtC+0Y/QvdC40Y8g0YTQvtC60YPRgdCwLmB9PC9wPlxuICAgIDxwPntg0JIg0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9GFINGB0LjRgtGD0LDRhtC40Y/RhSDQvdC10L7QsdGF0L7QtNC40LzQviDRgdC+0YXRgNCw0L3QuNGC0Ywg0YHQvtGB0YLQvtGP0L3QuNC1INC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsuINCd0LDQv9GA0LjQvNC10YAsINC/0YDQuCDQvtGC0L/RgNCw0LLQutC1INGE0L7RgNC80Ysg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INGB0L7RhdGA0LDQvdC40YLRjCDQtNCw0L3QvdGL0LUg0YTQvtGA0LzRiyDQvdCwINGC0L7RgiDRgdC70YPRh9Cw0LksINC10YHQu9C4INC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4INCy0LXRgNC90YPRgtGB0Y8uYH08L3A+XG4gICAgPHA+e2DQrdGC0L4g0LzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCwg0YPRgdGC0LDQvdC+0LLQuNCyINC00LvRjyDQv9Cw0YDQsNC80LXRgtGA0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJlc2VydmVTdGF0ZWB9PC9pbmxpbmVDb2RlPntgINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLmdldCgnL3VzZXJzJywgeyBzZWFyY2g6ICdKb2huJyB9LCB7IHByZXNlcnZlU3RhdGU6IHRydWUgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JTQu9GPINGD0LTQvtCx0YHRgtCy0LAg0LzQtdGC0L7QtNGLIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3QoKWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwdXQoKWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYXRjaCgpYH08L2lubGluZUNvZGU+e2Ag0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVwbGFjZSgpYH08L2lubGluZUNvZGU+e2Ag0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNGO0YIg0LTQu9GPINC/0LDRgNCw0LzQtdGC0YDQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZVN0YXRlYH08L2lubGluZUNvZGU+e2Ag0LfQvdCw0LXRh9C90LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPGgyPntg0KHQvtGF0YDQsNC90LXQvdC40LUg0L/RgNC+0LrRgNGD0YLQutC4YH08L2gyPlxuICAgIDxwPntg0J/RgNC4INC/0LXRgNC10YXQvtC00LUg0LzQtdC20LTRgyDRgdGC0YDQsNC90LjRhtCw0LzQuCBJbmVydGlhINC40LzQuNGC0LjRgNGD0LXRgiDQv9C+0LLQtdC00LXQvdC40LUg0LHRgNCw0YPQt9C10YDQsCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiwg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YHQsdGA0LDRgdGL0LLQsNGPINC/0L7Qu9C+0LbQtdC90LjQtSDQv9GA0L7QutGA0YPRgtC60Lgg0YLQtdC70LAg0LTQvtC60YPQvNC10L3RgtCwICjQsCDRgtCw0LrQttC1INC70Y7QsdGL0LUg0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C1INCS0LDQvNC4IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2Nyb2xsLW1hbmFnZW1lbnQjJUQwJUJFJUQwJUIxJUQwJUJCJUQwJUIwJUQxJTgxJUQxJTgyJUQwJUI4LSVEMCVCRiVEMSU4MCVEMCVCRSVEMCVCQSVEMSU4MCVEMSU4MyVEMSU4MiVEMCVCQSVEMCVCOFwiXG4gICAgICB9fT57YNC+0LHQu9Cw0YHRgtC4INC/0YDQvtC60YDRg9GC0LrQuGB9PC9hPntgKSDQvtCx0YDQsNGC0L3QviDQvdCw0LLQtdGA0YUuINCY0YHQv9C+0LvRjNC30YPQudGC0LUg0L7Qv9GG0LjRjiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZVNjcm9sbGB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINC+0YLQutC70Y7Rh9C40YLRjCDRjdGC0L4g0L/QvtCy0LXQtNC10L3QuNC1LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnZpc2l0KHVybCwgeyBwcmVzZXJ2ZVNjcm9sbDogdHJ1ZSB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQlNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40Lgg0YHQvNC+0YLRgNC40YLQtSDRgdGC0YDQsNC90LjRhtGDIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2Nyb2xsLW1hbmFnZW1lbnRcIlxuICAgICAgfX0+e2BzY3JvbGwgbWFuYWdlbWVudGB9PC9hPntgLmB9PC9wPlxuICAgIDxoMj57YNCn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LhgfTwvaDI+XG4gICAgPHA+e2DQntC/0YbQuNGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9ubHlgfTwvaW5saW5lQ29kZT57YCDQv9C+0LfQstC+0LvRj9C10YIg0JLQsNC8INC30LDQv9GA0LDRiNC40LLQsNGC0Ywg0L/QvtC00LzQvdC+0LbQtdGB0YLQstC+INGB0LLQvtC50YHRgtCyICjQtNCw0L3QvdGL0YUpINGBINGB0LXRgNCy0LXRgNCwINC/0YDQuCDQv9C+0YHQu9C10LTRg9GO0YnQuNGFINC/0L7RgdC10YnQtdC90LjRj9GFINGC0L7QuSDQttC1INGB0YLRgNCw0L3QuNGG0YsuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQoJy91c2VycycsIHsgc2VhcmNoOiAnSm9obicgfSwgeyBvbmx5OiBbJ3VzZXJzJ10gfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4INGB0LzQvtGC0YDQuNGC0LUg0YHRgtGA0LDQvdC40YbRgyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3BhcnRpYWwtcmVsb2Fkc1wiXG4gICAgICB9fT57YHBhcnRpYWwgcmVsb2Fkc2B9PC9hPntgLmB9PC9wPlxuICAgIDxoMj57YNCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC1INC30LDQs9C+0LvQvtCy0LrQuGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BoZWFkZXJzYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIGFsbG93cyB5b3UgdG8gYWRkIGN1c3RvbSBoZWFkZXJzIHRvIGEgcmVxdWVzdC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCBkYXRhLCB7XG4gIGhlYWRlcnM6IHtcbiAgICAnQ3VzdG9tLUhlYWRlcic6ICd2YWx1ZScsXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+VGhlIEluZXJ0aWEgaGVhZGVycyB0YWtlIHByaW9yaXR5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIG92ZXJ3cml0dGVuLjwvTm90aWNlPlxuICAgIDxoMj57YNCe0YLQvNC10L3QsCDQv9C+0YHQtdGJ0LXQvdC40Y9gfTwvaDI+XG4gICAgPHA+e2BZb3UgY2FuIGNhbmNlbCBhIHZpc2l0IHVzaW5nIGEgY2FuY2VsIHRva2VuLCB3aGljaCBJbmVydGlhIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGFuZCBwcm92aWRlcyB2aWEgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uQ2FuY2VsVG9rZW4oKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrIHByaW9yIHRvIG1ha2luZyB0aGUgdmlzaXQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiAodGhpcy5jYW5jZWxUb2tlbiA9IGNhbmNlbFRva2VuKSxcbn0pXG5cbi8vIENhbmNlbCB0aGUgdmlzaXRcbnRoaXMuY2FuY2VsVG9rZW4uY2FuY2VsKClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgV2hlbiBhIHZpc2l0IGlzIGNhbmNlbGxlZCwgYm90aCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25DYW5jZWwoKWB9PC9pbmxpbmVDb2RlPntgIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkZpbmlzaCgpYH08L2lubGluZUNvZGU+e2AgZXZlbnQgY2FsbGJhY2tzIHdpbGwgYmUgY2FsbGVkLmB9PC9wPlxuICAgIDxoMj57YNCe0LHRgNCw0YLQvdGL0LUg0LLRi9C30L7QstGLINGB0L7QsdGL0YLQuNC5YH08L2gyPlxuICAgIDxwPntgSW4gYWRkaXRpb24gdG8gdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvZXZlbnRzXCJcbiAgICAgIH19PntgZ2xvYmFsIGV2ZW50c2B9PC9hPntgLCBJbmVydGlhIGFsc28gcHJvdmlkZXMgYSBudW1iZXIgb2YgcGVyLXZpc2l0IGV2ZW50IGNhbGxiYWNrcy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCBkYXRhLCB7XG4gIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICBvbkNhbmNlbDogKCkgPT4ge30sXG4gIG9uRmluaXNoOiAoKSA9PiB7fSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFJldHVybmluZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmYWxzZWB9PC9pbmxpbmVDb2RlPntgIGZyb20gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uU3RhcnQoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrIHdpbGwgY2F1c2UgdGhlIHZpc2l0IHRvIGJlIGNhbmNlbGxlZC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5kZWxldGUoXFxgL3VzZXJzL1xcJHt1c2VyLmlkfVxcYCwge1xuICBvblN0YXJ0OiAoKSA9PiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdXNlcj8nKSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEl0J3MgYWxzbyBwb3NzaWJsZSB0byByZXR1cm4gYSBwcm9taXNlIGZyb20gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uU3VjY2VzcygpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2suIFRoaXMgd2lsbCBkZWxheSB0aGUgXCJmaW5pc2hcIiBldmVudCB1bnRpbCB0aGUgcHJvbWlzZSBoYXMgcmVzb2x2ZWQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCh1cmwsIHtcbiAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuZG9UaGluZygpLFxuICAgICAgdGhpcy5kb0Fub3RoZXJUaGluZygpXG4gICAgXSlcbiAgfVxuICBvbkZpbmlzaDogKCkgPT4ge1xuICAgIC8vIFRoaXMgd29uJ3QgYmUgY2FsbGVkIHVudGlsIGRvVGhpbmcoKVxuICAgIC8vIGFuZCBkb0Fub3RoZXJUaGluZygpIGhhdmUgZmluaXNoZWQuXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0KPRgdGC0LDRgNC10LLQsNC90LjQtSDQv9GA0L7QvNC40YHQsGB9PC9oMj5cbiAgICA8cD57YEFzIG9mIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHYwLjMuMGB9PC9pbmxpbmVDb2RlPntgLCBJbmVydGlhIGRlcHJlY2F0ZWQgdGhlIHByb21pc2UgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEudmlzaXQoKWB9PC9pbmxpbmVDb2RlPntgLiBJZiB5b3UgY2FsbCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0aGVuKClgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY2F0Y2goKWB9PC9pbmxpbmVDb2RlPntgIG9yIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZpbmFsbHkoKWB9PC9pbmxpbmVDb2RlPntgIG9uIGFuIEluZXJ0aWEgdmlzaXQsIHlvdSB3aWxsIG5vdyBnZXQgdGhlIGZvbGxvd2luZyBjb25zb2xlIHdhcm5pbmc6YH08L3A+XG4gICAgPGRpdiBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItbC00IGJvcmRlci1vcmFuZ2UtMzAwIGJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtOTAwIHRleHQtc20gZm9udC1tb25vXCI+XG4gIDxkaXY+XG4gICAgSW5lcnRpYS5qcyB2aXNpdCBwcm9taXNlcyBoYXZlIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2UuIFBsZWFzZSB1c2UgdGhlIG5ldyB2aXNpdFxuICAgIGV2ZW50IGNhbGxiYWNrcyBpbnN0ZWFkLlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm10LTRcIj5MZWFybiBtb3JlIGF0IGh0dHBzOi8vaW5lcnRpYWpzLmNvbS9tYW51YWwtdmlzaXRzI3Byb21pc2UtZGVwcmVjYXRpb248L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cD57YFRoZSBwcmVmZXJyZWQgYXBwcm9hY2ggaXMgdG8gdXNlIHRoZSBuZXcgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIiNldmVudC1jYWxsYmFja3NcIlxuICAgICAgfX0+e2BldmVudCBjYWxsYmFja3NgfTwvYT57YCBpbnN0ZWFkLiBGb3IgZXhhbXBsZSwgaW5zdGVhZCBvZiB1c2luZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0aGVuKClgfTwvaW5saW5lQ29kZT57YCwgdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN1Y2Nlc3MoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy9wcm9maWxlJywgZGF0YSwge1xuICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAvLyBIYW5kbGUgc3VjY2VzcyBldmVudFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgSW5zdGVhZCBvZiB1c2luZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5hbGx5KClgfTwvaW5saW5lQ29kZT57YCwgdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkZpbmlzaCgpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2suYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3Byb2ZpbGUnLCBkYXRhLCB7XG4gIG9uRmluaXNoOiAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGZpbmlzaCBldmVudFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQW5kIGluc3RlYWQgb2YgdXNpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY2F0Y2goKWB9PC9pbmxpbmVDb2RlPntgLCBpdCdzIGJldHRlciB0byBoYW5kbGUgdGhlc2UgdW5leHBlY3RlZCBlcnJvcnMgdXNpbmcgYSBnbG9iYWwgZXJyb3IgZXZlbnQgaGFuZGxlci5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5vbignZXJyb3InLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBlcnJvciB5b3Vyc2VsZlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==