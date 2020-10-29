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
  }, "\u041E\u043F\u0446\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 18
    }
  }, "headers"), " \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0412\u0430\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0432 \u0437\u0430\u043F\u0440\u043E\u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 Inertia \u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0438 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0442\u043E\u043A\u0435\u043D \u043E\u0442\u043C\u0435\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 150
    }
  }, "onCancelToken()"), " \u0434\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u041A\u043E\u0433\u0434\u0430 \u0432\u0438\u0437\u0438\u0442 \u043E\u0442\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F, \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0437\u0432\u0430\u043D\u044B \u043A\u0430\u043A \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 78
    }
  }, "onCancel()"), ", \u0442\u0430\u043A \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 144
    }
  }, "onFinish()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "\u0412 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/events"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 27
    }
  }), "\u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C"), ", Inertia \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0440\u044F\u0434 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0445 \u0432\u044B\u0437\u043E\u0432\u043E\u0432 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 20
    }
  }, "false"), " \u0438\u0437 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 94
    }
  }, "onStart()"), " \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u043E\u0442\u043C\u0435\u043D\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u0422\u0430\u043A\u0436\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u0435 \u0438\u0437 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 64
    }
  }, "onSuccess()"), ". \u042D\u0442\u043E \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \xABfinish\xBB \u0434\u043E \u0442\u0435\u0445 \u043F\u043E\u0440, \u043F\u043E\u043A\u0430 \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u041D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 22
    }
  }, "v0.3.0"), ", Inertia \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u043B\u0430 \u043F\u0440\u043E\u043C\u0438\u0441, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u044B\u0439 \u0438\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 120
    }
  }, "Inertia.visit()"), ". \u0415\u0441\u043B\u0438 \u0412\u044B \u0432\u044B\u0437\u043E\u0432\u0435\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 202
    }
  }, "then()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 258
    }
  }, "catch()"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 318
    }
  }, "finally()"), " \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F Inertia, \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u0438:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
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
  }, "\u041E\u0431\u0435\u0449\u0430\u043D\u0438\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F Inertia.js \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0438 \u0438 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0432\u044B\u043F\u0443\u0441\u043A\u0435. \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    "class": "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 3
    }
  }, "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0430 https://inertiajs.com/manual-visits#promise-deprecation")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 - \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043D\u043E\u0432\u044B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D1%8B-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 70
    }
  }), "\u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439"), ". \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432\u043C\u0435\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 78
    }
  }, "then()"), " \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 160
    }
  }, "onSuccess()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
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
      lineNumber: 307,
      columnNumber: 10
    }
  }), "Inertia.post('/profile', data, {\n  onSuccess: () => {\n    // Handle success event\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 5
    }
  }, "\u0412\u043C\u0435\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 33
    }
  }, "finally()"), " \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 118
    }
  }, "onFinish()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
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
      lineNumber: 316,
      columnNumber: 10
    }
  }), "Inertia.post('/profile', data, {\n  onFinish: () => {\n    // Handle finish event\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 5
    }
  }, "\u0418 \u0432\u043C\u0435\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 35
    }
  }, "catch()"), " \u044D\u0442\u0438 \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u043B\u0443\u0447\u0448\u0435 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u043E\u0448\u0438\u0431\u043E\u043A."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
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
      lineNumber: 325,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFudWFsLXZpc2l0cy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsbUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxRQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsU0FESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsdUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSx1QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLHlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLDZCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBbEJJLEVBcUJKO0FBQ0RELE9BQUcsRUFBRSxtQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQXJCSSxFQXdCSjtBQUNERCxPQUFHLEVBQUUsMEJBREo7QUFFREMsUUFBSSxFQUFFO0FB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LEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBOUIsaWZBOVFLLEVBK1FMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUdBQUwsQ0EvUUssQ0FBUDtBQXVSRDtLQTNSdUJMLFU7QUE2UnhCO0FBQ0FBLFVBQVUsQ0FBQ00sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYW51YWwtdmlzaXRzLjk2YjNkNGYyY2Y2OWJhNjc3YzUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlJ1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cf0L7RgdC10YnQtdC90LjRjyDQstGA0YPRh9C90YPRjicsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPQvNC10YLQvtC0JyxcbiAgICBuYW1lOiAn0JzQtdGC0L7QtCdcbiAgfSwge1xuICAgIHVybDogJyPQtNCw0L3QvdGL0LUnLFxuICAgIG5hbWU6ICfQlNCw0L3QvdGL0LUnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LjRgdGC0L7RgNC40Y8t0LHRgNCw0YPQt9C10YDQsCcsXG4gICAgbmFtZTogJ9CY0YHRgtC+0YDQuNGPINCx0YDQsNGD0LfQtdGA0LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtGB0YLQvtGP0L3QuNC1LdC60L7QvNC/0L7QvdC10L3RgtCwJyxcbiAgICBuYW1lOiAn0KHQvtGB0YLQvtGP0L3QuNC1INC60L7QvNC/0L7QvdC10L3RgtCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7RhdGA0LDQvdC10L3QuNC1LdC/0YDQvtC60YDRg9GC0LrQuCcsXG4gICAgbmFtZTogJ9Ch0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuCdcbiAgfSwge1xuICAgIHVybDogJyPRh9Cw0YHRgtC40YfQvdGL0LUt0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4JyxcbiAgICBuYW1lOiAn0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCdcbiAgfSwge1xuICAgIHVybDogJyPQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtS3Qt9Cw0LPQvtC70L7QstC60LgnLFxuICAgIG5hbWU6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtSDQt9Cw0LPQvtC70L7QstC60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7RgtC80LXQvdCwLdC/0L7RgdC10YnQtdC90LjRjycsXG4gICAgbmFtZTogJ9Ce0YLQvNC10L3QsCDQv9C+0YHQtdGJ0LXQvdC40Y8nXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7QsdGA0LDRgtC90YvQtS3QstGL0LfQvtCy0Yst0YHQvtCx0YvRgtC40LknLFxuICAgIG5hbWU6ICfQntCx0YDQsNGC0L3Ri9C1INCy0YvQt9C+0LLRiyDRgdC+0LHRi9GC0LjQuSdcbiAgfSwge1xuICAgIHVybDogJyPRg9GB0YLQsNGA0LXQstCw0L3QuNC1LdC/0YDQvtC80LjRgdCwJyxcbiAgICBuYW1lOiAn0KPRgdGC0LDRgNC10LLQsNC90LjQtSDQv9GA0L7QvNC40YHQsCdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCf0L7RgdC10YnQtdC90LjRjyDQstGA0YPRh9C90YPRjmB9PC9oMT5cbiAgICA8cD57YNCf0L7QvNC40LzQviBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2xpbmtzXCJcbiAgICAgIH19Pntg0YHQvtC30LTQsNC90LjRjyDRgdGB0YvQu9C+0LpgfTwvYT57YCwg0YLQsNC60LbQtSDQvNC+0LbQvdC+INCy0YDRg9GH0L3Rg9GOINC00LXQu9Cw0YLRjCDQuNC90LXRgNGG0LjQvtC90L3Ri9C1INC/0L7RgdC10YnQtdC90LjRjy4g0K3RgtC+INC00LXQu9Cw0LXRgtGB0Y8g0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEudmlzaXQoKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAvLyBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICB0aGlzLiRpbmVydGlhLnZpc2l0KHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgcmVwbGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTY3JvbGw6IGZhbHNlLFxuICAgICAgICAgIG9ubHk6IFtdLFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsVG9rZW46IGNhbmNlbFRva2VuID0+IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsOiAoKSA9PiB7fSxcbiAgICAgICAgICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgICAgICAgICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgICAgICAgICBvblN1Y2Nlc3M6IHBhZ2UgPT4ge30sXG4gICAgICAgICAgb25GaW5pc2g6ICgpID0+IHt9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgSW5lcnRpYS52aXNpdCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICBvbmx5OiBbXSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiB7fSxcbiAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge30sXG4gICAgICAgICAgb25TdGFydDogdmlzaXQgPT4ge30sXG4gICAgICAgICAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gICAgICAgICAgb25TdWNjZXNzOiBwYWdlID0+IHt9LFxuICAgICAgICAgIG9uRmluaXNoOiAoKSA9PiB7fSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLnZpc2l0KHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgcmVwbGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTY3JvbGw6IGZhbHNlLFxuICAgICAgICAgIG9ubHk6IFtdLFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsVG9rZW46IGNhbmNlbFRva2VuID0+IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsOiAoKSA9PiB7fSxcbiAgICAgICAgICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgICAgICAgICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgICAgICAgICBvblN1Y2Nlc3M6IHBhZ2UgPT4ge30sXG4gICAgICAgICAgb25GaW5pc2g6ICgpID0+IHt9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YNCe0LTQvdCw0LrQviDQvtCx0YvRh9C90L4g0LLQvNC10YHRgtC+INGN0YLQvtCz0L4g0YDQtdC60L7QvNC10L3QtNGD0LXRgtGB0Y8g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC+0LTQuNC9INC40Lcg0LzQtdGC0L7QtNC+0LIg0LHRi9GB0YLRgNC+0LPQviDQtNC+0YHRgtGD0L/QsC4g0K3RgtC4INC80LXRgtC+0LTRiyDQuNC80LXRjtGCINGC0LUg0LbQtSDQv9Cw0YDQsNC80LXRgtGA0YssINGH0YLQviDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnZpc2l0KClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLy8gaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgdGhpcy4kaW5lcnRpYS5nZXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnBvc3QodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnB1dCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuJGluZXJ0aWEucGF0Y2godXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLmRlbGV0ZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuJGluZXJ0aWEucmVwbGFjZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuJGluZXJ0aWEucmVsb2FkKG9wdGlvbnMpIC8vIFVzZXMgdGhlIGN1cnJlbnQgVVJMXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLmdldCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucHV0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5wYXRjaCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEuZGVsZXRlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZXBsYWNlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZWxvYWQob3B0aW9ucykgLy8gVXNlcyB0aGUgY3VycmVudCBVUkxcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLmdldCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucHV0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5wYXRjaCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEuZGVsZXRlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZXBsYWNlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZWxvYWQob3B0aW9ucykgLy8gVXNlcyB0aGUgY3VycmVudCBVUkxcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JzQtdGC0L7QtGB9PC9oMj5cbiAgICA8cD57YNCY0YHQv9C+0LvRjNC30YPQudGC0LUg0L7Qv9GG0LjRjiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BtZXRob2RgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDRg9GB0YLQsNC90L7QstC40YLRjCDQvNC10YLQvtC0INC30LDQv9GA0L7RgdCwINC90LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZ2V0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3RgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHV0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoYH08L2lubGluZUNvZGU+e2Ag0LjQu9C4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRlbGV0ZWB9PC9pbmxpbmVDb2RlPntgLiDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDRjdGC0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZ2V0YH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQodXJsLCB7IG1ldGhvZDogJ3Bvc3QnIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQlNCw0L3QvdGL0LVgfTwvaDI+XG4gICAgPHA+e2DQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC+0L/RhtC40Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YWB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINC00L7QsdCw0LLQuNGC0Ywg0LTQsNC90L3Ri9C1INCyINC30LDQv9GA0L7RgS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS52aXNpdCgnL3VzZXJzJywge1xuICBtZXRob2Q6ICdwb3N0JyxcbiAgZGF0YToge1xuICAgIG5hbWU6ICdKb2huIERvZScsXG4gICAgZW1haWw6ICdqb2huLmRvZUBleGFtcGxlLmNvbScsXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQlNC70Y8g0YPQtNC+0LHRgdGC0LLQsCDQstGB0LUg0LzQtdGC0L7QtNGLIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGdldCgpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3QoKWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwdXQoKWB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoKClgfTwvaW5saW5lQ29kZT57YCDQstC60LvRjtGH0LDRjtGCINCyINC60LDRh9C10YHRgtCy0LUg0LLRgtC+0YDQvtCz0L4g0LDRgNCz0YPQvNC10L3RgtCwINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy91c2VycycsIHtcbiAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgZW1haWw6ICdqb2huLmRvZUBleGFtcGxlLmNvbScsXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0JjRgdGC0L7RgNC40Y8g0LHRgNCw0YPQt9C10YDQsGB9PC9oMj5cbiAgICA8cD57YNCf0YDQuCDQv9C+0YHQtdGJ0LXQvdC40LggSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQtNC+0LHQsNCy0LvRj9C10YIg0L3QvtCy0YPRjiDQt9Cw0L/QuNGB0Ywg0LIg0LjRgdGC0L7RgNC40Y4g0LHRgNCw0YPQt9C10YDQsC4g0J7QtNC90LDQutC+INGC0LDQutC20LUg0LzQvtC20L3QviDQt9Cw0LzQtdC90LjRgtGMINGC0LXQutGD0YnRg9GOINC30LDQv9C40YHRjCDQsiDQuNGB0YLQvtGA0LjQuCwg0YPRgdGC0LDQvdC+0LLQuNCyINC00LvRjyDQv9Cw0YDQsNC80LXRgtGA0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVwbGFjZWB9PC9pbmxpbmVDb2RlPntgINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLmdldCgnL3VzZXJzJywgeyBzZWFyY2g6ICdKb2huJyB9LCB7IHJlcGxhY2U6IHRydWUgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JIg0LrQsNGH0LXRgdGC0LLQtSDRj9GA0LvRi9C60LAg0LLRiyDQvNC+0LbQtdGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC80LXRgtC+0LQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVwbGFjZSgpYH08L2lubGluZUNvZGU+e2AsINGH0YLQvtCx0Ysg0YHQtNC10LvQsNGC0Ywg0Y3RgtC+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnJlcGxhY2UoJy91c2VycycsIHsgc2VhcmNoOiAnSm9obicgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPlxuICDQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINGH0YLQviDQv9C+0YHQtdGJ0LXQvdC40Y8g0L7QtNC90L7Qs9C+INC4INGC0L7Qs9C+INC20LUgVVJMICjQstC60LvRjtGH0LDRjyDRgdGC0YDQvtC60Lgg0LfQsNC/0YDQvtGB0LApINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDRjtGCINC00LvRjyA8aW5saW5lQ29kZT5yZXBsYWNlPC9pbmxpbmVDb2RlPiDQt9C90LDRh9C10L3QuNC1eycgJ30gPGlubGluZUNvZGU+dHJ1ZTwvaW5saW5lQ29kZT4uXG4gICAgPC9Ob3RpY2U+XG4gICAgPGgyPntg0KHQvtGB0YLQvtGP0L3QuNC1INC60L7QvNC/0L7QvdC10L3RgtCwYH08L2gyPlxuICAgIDxwPntg0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L/RgNC4INC/0L7RgdC10YnQtdC90LjQuCDRgtC+0Lkg0LbQtSDRgdGC0YDQsNC90LjRhtGLINC/0YDQuNC90YPQtNC40YLQtdC70YzQvdC+INGB0L7Qt9C00LDQtdGC0YHRjyDQvdC+0LLRi9C5INGN0LrQt9C10LzQv9C70Y/RgCDQutC+0LzQv9C+0L3QtdC90YLQsCDRgdGC0YDQsNC90LjRhtGLLCDQutC+0YLQvtGA0YvQuSDQvtGH0LjRidCw0LXRgiDQu9GO0LHQvtC1INC70L7QutCw0LvRjNC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUsINGC0LDQutC+0LUg0LrQsNC6INCy0YXQvtC00L3Ri9C1INC00LDQvdC90YvQtSDRhNC+0YDQvNGLLCDQv9C+0LvQvtC20LXQvdC40Y8g0L/RgNC+0LrRgNGD0YLQutC4INC4INGB0L7RgdGC0L7Rj9C90LjRjyDRhNC+0LrRg9GB0LAuYH08L3A+XG4gICAgPHA+e2DQkiDQvtC/0YDQtdC00LXQu9C10L3QvdGL0YUg0YHQuNGC0YPQsNGG0LjRj9GFINC90LXQvtCx0YXQvtC00LjQvNC+INGB0L7RhdGA0LDQvdC40YLRjCDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiy4g0J3QsNC/0YDQuNC80LXRgCwg0L/RgNC4INC+0YLQv9GA0LDQstC60LUg0YTQvtGA0LzRiyDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0YHQvtGF0YDQsNC90LjRgtGMINC00LDQvdC90YvQtSDRhNC+0YDQvNGLINC90LAg0YLQvtGCINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0L7RiNC40LHQutC4INC/0YDQvtCy0LXRgNC60Lgg0LLQtdGA0L3Rg9GC0YHRjy5gfTwvcD5cbiAgICA8cD57YNCt0YLQviDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMLCDRg9GB0YLQsNC90L7QstC40LIg0LTQu9GPINC/0LDRgNCw0LzQtdGC0YDQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZVN0YXRlYH08L2lubGluZUNvZGU+e2Ag0LfQvdCw0YfQtdC90LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEuZ2V0KCcvdXNlcnMnLCB7IHNlYXJjaDogJ0pvaG4nIH0sIHsgcHJlc2VydmVTdGF0ZTogdHJ1ZSB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQlNC70Y8g0YPQtNC+0LHRgdGC0LLQsCDQvNC10YLQvtC00YsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdCgpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHB1dCgpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoKClgfTwvaW5saW5lQ29kZT57YCDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXBsYWNlKClgfTwvaW5saW5lQ29kZT57YCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRg9GB0YLQsNC90LDQstC70LjQstCw0Y7RgiDQtNC70Y8g0L/QsNGA0LDQvNC10YLRgNCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByZXNlcnZlU3RhdGVgfTwvaW5saW5lQ29kZT57YCDQt9C90LDQtdGH0L3QuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRydWVgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8aDI+e2DQodC+0YXRgNCw0L3QtdC90LjQtSDQv9GA0L7QutGA0YPRgtC60LhgfTwvaDI+XG4gICAgPHA+e2DQn9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQvNC10LbQtNGDINGB0YLRgNCw0L3QuNGG0LDQvNC4IEluZXJ0aWEg0LjQvNC40YLQuNGA0YPQtdGCINC/0L7QstC10LTQtdC90LjQtSDQsdGA0LDRg9C30LXRgNCwINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgdCx0YDQsNGB0YvQstCw0Y8g0L/QvtC70L7QttC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuCDRgtC10LvQsCDQtNC+0LrRg9C80LXQvdGC0LAgKNCwINGC0LDQutC20LUg0LvRjtCx0YvQtSDQvtC/0YDQtdC00LXQu9C10L3QvdGL0LUg0JLQsNC80LggYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9zY3JvbGwtbWFuYWdlbWVudCMlRDAlQkUlRDAlQjElRDAlQkIlRDAlQjAlRDElODElRDElODIlRDAlQjgtJUQwJUJGJUQxJTgwJUQwJUJFJUQwJUJBJUQxJTgwJUQxJTgzJUQxJTgyJUQwJUJBJUQwJUI4XCJcbiAgICAgIH19Pntg0L7QsdC70LDRgdGC0Lgg0L/RgNC+0LrRgNGD0YLQutC4YH08L2E+e2ApINC+0LHRgNCw0YLQvdC+INC90LDQstC10YDRhS4g0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQvtC/0YbQuNGOIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByZXNlcnZlU2Nyb2xsYH08L2lubGluZUNvZGU+e2AsINGH0YLQvtCx0Ysg0L7RgtC60LvRjtGH0LjRgtGMINGN0YLQviDQv9C+0LLQtdC00LXQvdC40LUuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQodXJsLCB7IHByZXNlcnZlU2Nyb2xsOiB0cnVlIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCU0LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuCDRgdC80L7RgtGA0LjRgtC1INGB0YLRgNCw0L3QuNGG0YMgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9zY3JvbGwtbWFuYWdlbWVudFwiXG4gICAgICB9fT57YHNjcm9sbCBtYW5hZ2VtZW50YH08L2E+e2AuYH08L3A+XG4gICAgPGgyPntg0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuGB9PC9oMj5cbiAgICA8cD57YNCe0L/RhtC40Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25seWB9PC9pbmxpbmVDb2RlPntgINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQktCw0Lwg0LfQsNC/0YDQsNGI0LjQstCw0YLRjCDQv9C+0LTQvNC90L7QttC10YHRgtCy0L4g0YHQstC+0LnRgdGC0LIgKNC00LDQvdC90YvRhSkg0YEg0YHQtdGA0LLQtdGA0LAg0L/RgNC4INC/0L7RgdC70LXQtNGD0Y7RidC40YUg0L/QvtGB0LXRidC10L3QuNGP0YUg0YLQvtC5INC20LUg0YHRgtGA0LDQvdC40YbRiy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS52aXNpdCgnL3VzZXJzJywgeyBzZWFyY2g6ICdKb2huJyB9LCB7IG9ubHk6IFsndXNlcnMnXSB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQlNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40Lgg0YHQvNC+0YLRgNC40YLQtSDRgdGC0YDQsNC90LjRhtGDIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvcGFydGlhbC1yZWxvYWRzXCJcbiAgICAgIH19PntgcGFydGlhbCByZWxvYWRzYH08L2E+e2AuYH08L3A+XG4gICAgPGgyPntg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUg0LfQsNCz0L7Qu9C+0LLQutC4YH08L2gyPlxuICAgIDxwPntg0J7Qv9GG0LjRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BoZWFkZXJzYH08L2lubGluZUNvZGU+e2Ag0L/QvtC30LLQvtC70Y/QtdGCINCS0LDQvCDQtNC+0LHQsNCy0LvRj9GC0Ywg0LIg0LfQsNC/0YDQvtGBINGB0L7QsdGB0YLQstC10L3QvdGL0LUg0LfQsNCz0L7Qu9C+0LLQutC4LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy91c2VycycsIGRhdGEsIHtcbiAgaGVhZGVyczoge1xuICAgICdDdXN0b20tSGVhZGVyJzogJ3ZhbHVlJyxcbiAgfSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj7Ql9Cw0LPQvtC70L7QstC60LggSW5lcnRpYSDQuNC80LXRjtGCINC/0YDQuNC+0YDQuNGC0LXRgiDQuCDQv9C+0Y3RgtC+0LzRgyDQvdC1INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L/QtdGA0LXQt9Cw0L/QuNGB0LDQvdGLLjwvTm90aWNlPlxuICAgIDxoMj57YNCe0YLQvNC10L3QsCDQv9C+0YHQtdGJ0LXQvdC40Y9gfTwvaDI+XG4gICAgPHA+e2DQktGLINC80L7QttC10YLQtSDQvtGC0LzQtdC90LjRgtGMINC/0L7RgdC10YnQtdC90LjQtSwg0LjRgdC/0L7Qu9GM0LfRg9GPINGC0L7QutC10L0g0L7RgtC80LXQvdGLLCDQutC+0YLQvtGA0YvQuSBJbmVydGlhINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INCz0LXQvdC10YDQuNGA0YPQtdGCINC4INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGCINGBINC/0L7QvNC+0YnRjNGOINC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25DYW5jZWxUb2tlbigpYH08L2lubGluZUNvZGU+e2Ag0LTQviDRgdC+0LLQtdGA0YjQtdC90LjRjyDQv9C+0YHQtdGJ0LXQvdC40Y8uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiAodGhpcy5jYW5jZWxUb2tlbiA9IGNhbmNlbFRva2VuKSxcbn0pXG5cbi8vIENhbmNlbCB0aGUgdmlzaXRcbnRoaXMuY2FuY2VsVG9rZW4uY2FuY2VsKClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JrQvtCz0LTQsCDQstC40LfQuNGCINC+0YLQvNC10L3Rj9C10YLRgdGPLCDQsdGD0LTRg9GCINCy0YvQt9Cy0LDQvdGLINC60LDQuiDQvtCx0YDQsNGC0L3Ri9C1INCy0YvQt9C+0LLRiyDRgdC+0LHRi9GC0LjQuSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkNhbmNlbCgpYH08L2lubGluZUNvZGU+e2AsINGC0LDQuiDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkZpbmlzaCgpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPGgyPntg0J7QsdGA0LDRgtC90YvQtSDQstGL0LfQvtCy0Ysg0YHQvtCx0YvRgtC40LlgfTwvaDI+XG4gICAgPHA+e2DQkiDQtNC+0L/QvtC70L3QtdC90LjQtSDQuiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2V2ZW50c1wiXG4gICAgICB9fT57YNCz0LvQvtCx0LDQu9GM0L3Ri9C8INGB0L7QsdGL0YLQuNGP0LxgfTwvYT57YCwgSW5lcnRpYSDRgtCw0LrQttC1INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGCINGA0Y/QtCDQvtCx0YDQsNGC0L3Ri9GFINCy0YvQt9C+0LLQvtCyINGB0L7QsdGL0YLQuNC5INC00LvRjyDQutCw0LbQtNC+0LPQviDQv9C+0YHQtdGJ0LXQvdC40Y8uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgb25DYW5jZWw6ICgpID0+IHt9LFxuICBvbkZpbmlzaDogKCkgPT4ge30sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQktC+0LfQstGA0LDRgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmYWxzZWB9PC9pbmxpbmVDb2RlPntgINC40Lcg0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN0YXJ0KClgfTwvaW5saW5lQ29kZT57YCDQv9GA0LjQstC10LTQtdGCINC6INC+0YLQvNC10L3QtSDQv9C+0YHQtdGJ0LXQvdC40Y8uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEuZGVsZXRlKFxcYC91c2Vycy9cXCR7dXNlci5pZH1cXGAsIHtcbiAgb25TdGFydDogKCkgPT4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHVzZXI/JyksXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQotCw0LrQttC1INCy0L7Qt9C80L7QttC90L4g0LLQtdGA0L3Rg9GC0Ywg0L7QsdC10YnQsNC90LjQtSDQuNC3INC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25TdWNjZXNzKClgfTwvaW5saW5lQ29kZT57YC4g0K3RgtC+INC30LDQtNC10YDQttC40YIg0YHQvtCx0YvRgtC40LUgwqtmaW5pc2jCuyDQtNC+INGC0LXRhSDQv9C+0YAsINC/0L7QutCwINC+0LHQtdGJ0LDQvdC40LUg0L3QtSDQsdGD0LTQtdGCINCy0YvQv9C+0LvQvdC10L3Qvi5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KHVybCwge1xuICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5kb1RoaW5nKCksXG4gICAgICB0aGlzLmRvQW5vdGhlclRoaW5nKClcbiAgICBdKVxuICB9XG4gIG9uRmluaXNoOiAoKSA9PiB7XG4gICAgLy8gVGhpcyB3b24ndCBiZSBjYWxsZWQgdW50aWwgZG9UaGluZygpXG4gICAgLy8gYW5kIGRvQW5vdGhlclRoaW5nKCkgaGF2ZSBmaW5pc2hlZC5cbiAgfSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQo9GB0YLQsNGA0LXQstCw0L3QuNC1INC/0YDQvtC80LjRgdCwYH08L2gyPlxuICAgIDxwPntg0J3QsNGH0LjQvdCw0Y8g0YEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdjAuMy4wYH08L2lubGluZUNvZGU+e2AsIEluZXJ0aWEg0LjRgdC60LvRjtGH0LjQu9CwINC/0YDQvtC80LjRgSwg0LLQvtC30LLRgNCw0YnQsNC10LzRi9C5INC40LcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSW5lcnRpYS52aXNpdCgpYH08L2lubGluZUNvZGU+e2AuINCV0YHQu9C4INCS0Ysg0LLRi9C30L7QstC10YLQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0aGVuKClgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY2F0Y2goKWB9PC9pbmxpbmVDb2RlPntgINC40LvQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5hbGx5KClgfTwvaW5saW5lQ29kZT57YCDQstC+INCy0YDQtdC80Y8g0L/QvtGB0LXRidC10L3QuNGPIEluZXJ0aWEsINCS0Ysg0L/QvtC70YPRh9C40YLQtSDRgdC70LXQtNGD0Y7RidC10LUg0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjQtSDQutC+0L3RgdC+0LvQuDpgfTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwicHktNCBweC02IGJvcmRlci1sLTQgYm9yZGVyLW9yYW5nZS0zMDAgYmctb3JhbmdlLTEwMCB0ZXh0LW9yYW5nZS05MDAgdGV4dC1zbSBmb250LW1vbm9cIj5cbiAgPGRpdj5cbiAgICDQntCx0LXRidCw0L3QuNGPINC/0L7RgdC10YnQtdC90LjRjyBJbmVydGlhLmpzINGD0YHRgtCw0YDQtdC70Lgg0Lgg0LHRg9C00YPRgiDRg9C00LDQu9C10L3RiyDQsiDRgdC70LXQtNGD0Y7RidC10Lwg0LLRi9C/0YPRgdC60LUuINCS0LzQtdGB0YLQviDRjdGC0L7Qs9C+INC40YHQv9C+0LvRjNC30YPQudGC0LUg0L3QvtCy0YvQtSDQvtCx0YDQsNGC0L3Ri9C1INCy0YvQt9C+0LLRiyDRgdC+0LHRi9GC0LjQuSDQv9C+0YHQtdGJ0LXQvdC40Y8uXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibXQtNFwiPtCj0LfQvdCw0LnRgtC1INCx0L7Qu9GM0YjQtSDQvdCwIGh0dHBzOi8vaW5lcnRpYWpzLmNvbS9tYW51YWwtdmlzaXRzI3Byb21pc2UtZGVwcmVjYXRpb248L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cD57YNCf0YDQtdC00L/QvtGH0YLQuNGC0LXQu9GM0L3Ri9C5INC/0L7QtNGF0L7QtCAtINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQstC80LXRgdGC0L4g0Y3RgtC+0LPQviDQvdC+0LLRi9C1IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIjJUQwJUJFJUQwJUIxJUQxJTgwJUQwJUIwJUQxJTgyJUQwJUJEJUQxJThCJUQwJUI1LSVEMCVCMiVEMSU4QiVEMCVCNyVEMCVCRSVEMCVCMiVEMSU4Qi0lRDElODElRDAlQkUlRDAlQjElRDElOEIlRDElODIlRDAlQjglRDAlQjlcIlxuICAgICAgfX0+e2DQvtCx0YDQsNGC0L3Ri9C1INCy0YvQt9C+0LLRiyDRgdC+0LHRi9GC0LjQuWB9PC9hPntgLiDQndCw0L/RgNC40LzQtdGALCDQstC80LXRgdGC0L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGhlbigpYH08L2lubGluZUNvZGU+e2Ag0LjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQvtCx0YDQsNGC0L3Ri9C5INCy0YvQt9C+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25TdWNjZXNzKClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvcHJvZmlsZScsIGRhdGEsIHtcbiAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIHN1Y2Nlc3MgZXZlbnRcbiAgfSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCS0LzQtdGB0YLQviDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5hbGx5KClgfTwvaW5saW5lQ29kZT57YCDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INC+0LHRgNCw0YLQvdGL0Lkg0LLRi9C30L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkZpbmlzaCgpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3Byb2ZpbGUnLCBkYXRhLCB7XG4gIG9uRmluaXNoOiAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGZpbmlzaCBldmVudFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0Jgg0LLQvNC10YHRgtC+INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNhdGNoKClgfTwvaW5saW5lQ29kZT57YCDRjdGC0Lgg0L3QtdC+0LbQuNC00LDQvdC90YvQtSDQvtGI0LjQsdC60Lgg0LvRg9GH0YjQtSDQvtCx0YDQsNCx0LDRgtGL0LLQsNGC0Ywg0YEg0L/QvtC80L7RidGM0Y4g0LPQu9C+0LHQsNC70YzQvdC+0LPQviDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINGB0L7QsdGL0YLQuNC5INC+0YjQuNCx0L7Qui5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5vbignZXJyb3InLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBlcnJvciB5b3Vyc2VsZlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==