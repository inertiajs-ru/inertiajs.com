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



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\manual-visits.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n\n        Inertia.get(url, data, options)\n        Inertia.post(url, data, options)\n        Inertia.put(url, data, options)\n        Inertia.patch(url, data, options)\n        Inertia.delete(url, options)\n        Inertia.replace(url, options)\n        Inertia.reload(options) // \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 URL\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\\n\n        Inertia.get(url, data, options)\n        Inertia.post(url, data, options)\n        Inertia.put(url, data, options)\n        Inertia.patch(url, data, options)\n        Inertia.delete(url, options)\n        Inertia.replace(url, options)\n        Inertia.reload(options) // \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 URL\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n\n        Inertia.get(url, data, options)\n        Inertia.post(url, data, options)\n        Inertia.put(url, data, options)\n        Inertia.patch(url, data, options)\n        Inertia.delete(url, options)\n        Inertia.replace(url, options)\n        Inertia.reload(options) // \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 URL\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\\n\n        Inertia.get(url, data, options)\n        Inertia.post(url, data, options)\n        Inertia.put(url, data, options)\n        Inertia.patch(url, data, options)\n        Inertia.delete(url, options)\n        Inertia.replace(url, options)\n        Inertia.reload(options) // \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 URL\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        // import { Inertia } from '@inertiajs/inertia'\n\n        this.$inertia.get(url, data, options)\n        this.$inertia.post(url, data, options)\n        this.$inertia.put(url, data, options)\n        this.$inertia.patch(url, data, options)\n        this.$inertia.delete(url, options)\n        this.$inertia.replace(url, options)\n        this.$inertia.reload(options) // \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 URL\n      "], ["\n        // import { Inertia } from '@inertiajs/inertia'\\n\n        this.$inertia.get(url, data, options)\n        this.$inertia.post(url, data, options)\n        this.$inertia.put(url, data, options)\n        this.$inertia.patch(url, data, options)\n        this.$inertia.delete(url, options)\n        this.$inertia.replace(url, options)\n        this.$inertia.reload(options) // \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 URL\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n\n        Inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          errorBag: null,\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onBefore: visit => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onError: errors => {},\n          onFinish: () => {},\n        })\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\\n\n        Inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          errorBag: null,\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onBefore: visit => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onError: errors => {},\n          onFinish: () => {},\n        })\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n\n        Inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          errorBag: null,\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onBefore: visit => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onError: errors => {},\n          onFinish: () => {},\n        })\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\\n\n        Inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          errorBag: null,\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onBefore: visit => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onError: errors => {},\n          onFinish: () => {},\n        })\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        // import { Inertia } from '@inertiajs/inertia'\n\n        this.$inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          errorBag: null,\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onBefore: visit => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onError: errors => {},\n          onFinish: () => {},\n        })\n      "], ["\n        // import { Inertia } from '@inertiajs/inertia'\\n\n        this.$inertia.visit(url, {\n          method: 'get',\n          data: {},\n          replace: false,\n          preserveState: false,\n          preserveScroll: false,\n          only: [],\n          headers: {},\n          errorBag: null,\n          onCancelToken: cancelToken => {},\n          onCancel: () => {},\n          onBefore: visit => {},\n          onStart: visit => {},\n          onProgress: progress => {},\n          onSuccess: page => {},\n          onError: errors => {},\n          onFinish: () => {},\n        })\n      "]);

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
    url: '#пакеты-ошибок',
    name: 'Пакеты ошибок'
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
      lineNumber: 57,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0432\u0440\u0443\u0447\u043D\u0443\u044E"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 62,
      columnNumber: 19
    }
  }), "\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043E\u043A"), ", \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u0435\u043B\u0430\u0442\u044C \u0438\u043D\u0435\u0440\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F. \u042D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u0435\u0442\u043E\u0434\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430\u043A\u043E \u043E\u0431\u044B\u0447\u043D\u043E \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0434\u0438\u043D \u0438\u0437 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430. \u042D\u0442\u0438 \u043C\u0435\u0442\u043E\u0434\u044B \u0438\u043C\u0435\u044E\u0442 \u0442\u0435 \u0436\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u0447\u0442\u043E \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 139,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, "\u041C\u0435\u0442\u043E\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 18
    }
  }, "reload()"), " - \u044D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043F\u0440\u0438\u0447\u0435\u043C \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 160
    }
  }, "preserveState"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 224
    }
  }, "preserveScroll"), " \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 308
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }, "\u041C\u0435\u0442\u043E\u0434"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 5
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u043F\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 30
    }
  }, "method"), ", \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u0435\u0442\u043E\u0434 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 120
    }
  }, "get"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 173
    }
  }, "post"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 227
    }
  }, "put"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 280
    }
  }, "patch"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 338
    }
  }, "delete"), ". \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u044D\u0442\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 411
    }
  }, "get"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 182,
      columnNumber: 10
    }
  }), "Inertia.visit(url, { method: 'post' })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
    }
  }, "\u0414\u0430\u043D\u043D\u044B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u043F\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 30
    }
  }, "data"), ", \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0437\u0430\u043F\u0440\u043E\u0441."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
      lineNumber: 188,
      columnNumber: 10
    }
  }), "Inertia.visit('/users', {\n  method: 'post',\n  data: {\n    name: 'John Doe',\n    email: 'john.doe@example.com',\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u0432\u0441\u0435 \u043C\u0435\u0442\u043E\u0434\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 36
    }
  }, "get()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 91
    }
  }, "post()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 147
    }
  }, "put()"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 203
    }
  }, "patch()"), " \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 306
    }
  }, "data"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 199,
      columnNumber: 10
    }
  }), "Inertia.post('/users', {\n  name: 'John Doe',\n  email: 'john.doe@example.com',\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u043E\u0432\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u041E\u0434\u043D\u0430\u043A\u043E \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0432 \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 169
    }
  }, "replace"), " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 234
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
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
      lineNumber: 208,
      columnNumber: 10
    }
  }), "Inertia.get('/users', { search: 'John' }, { replace: true })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0445 \u043E\u0434\u043D\u043E\u0433\u043E \u0438 \u0442\u043E\u0433\u043E \u0436\u0435 URL-\u0430\u0434\u0440\u0435\u0441\u0430 \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 50
    }
  }, "replace"), " \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 122
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0439 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0447\u0438\u0449\u0430\u0435\u0442 \u043B\u044E\u0431\u043E\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435, \u0442\u0430\u043A\u043E\u0435 \u043A\u0430\u043A \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B, \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0438 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0444\u043E\u043A\u0443\u0441\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, "\u0412 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0444\u043E\u0440\u043C\u044B \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B \u043D\u0430 \u0442\u043E\u0442 \u0441\u043B\u0443\u0447\u0430\u0439, \u0435\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }, "\u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0432 \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 55
    }
  }, "preserveState"), " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 126
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
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
      lineNumber: 219,
      columnNumber: 10
    }
  }), "Inertia.get('/users', { search: 'John' }, { preserveState: true })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 5
    }
  }, "\u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 55
    }
  }, "preserveState"), " \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043E\u0442\u0432\u0435\u0442\u0430, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
      lineNumber: 224,
      columnNumber: 10
    }
  }), "Inertia.post('/users', data, {\n  preserveState: (page) => Object.keys(page.props.errors).length,\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u043C\u0435\u0442\u043E\u0434\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 32
    }
  }, "post"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 86
    }
  }, "put"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 139
    }
  }, "patch"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 194
    }
  }, "delete"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 251
    }
  }, "reload"), " \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 323
    }
  }, "preserveState"), " \u0438\u043C\u0435\u044E\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 400
    }
  }, "true"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 232,
      columnNumber: 185
    }
  }), "\u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438"), ") \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430\u0432\u0435\u0440\u0445. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u043F\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 75
    }
  }, "preserveScroll"), ", \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
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
      lineNumber: 235,
      columnNumber: 10
    }
  }), "Inertia.visit(url, { preserveScroll: true })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 5
    }
  }, "\u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 55
    }
  }, "preserveScroll"), " \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043E\u0442\u0432\u0435\u0442\u0430, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
      lineNumber: 240,
      columnNumber: 10
    }
  }), "Inertia.post('/users', data, {\n  preserveScroll: (page) => Object.keys(page.props.errors).length,\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
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
      lineNumber: 246,
      columnNumber: 70
    }
  }), "\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u043E\u0439"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 5
    }
  }, "\u041E\u043F\u0446\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 18
    }
  }, "only"), " \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0412\u0430\u043C \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C \u043F\u043E\u0434\u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432 (\u0434\u0430\u043D\u043D\u044B\u0445) \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u0440\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0445 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
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
      lineNumber: 251,
      columnNumber: 10
    }
  }), "Inertia.visit('/users', { search: 'John' }, { only: ['users'] })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
      lineNumber: 255,
      columnNumber: 70
    }
  }), "\u0447\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 5
    }
  }, "\u041F\u0430\u043A\u0435\u0442\u044B \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0431\u043E\u043B\u0435\u0435 \u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B, \u043C\u043E\u0433\u0443\u0442 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u0443\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u044B \u043F\u0440\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438, \u0435\u0441\u043B\u0438 \u0434\u0432\u0435 \u0444\u043E\u0440\u043C\u044B \u0438\u043C\u0435\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0438\u043C\u0435\u043D\u0430 \u043F\u043E\u043B\u0435\u0439. \u0427\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0439\u0442\u0438 \u044D\u0442\u043E, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0430\u043A\u0435\u0442\u044B \u043E\u0448\u0438\u0431\u043E\u043A. \u041F\u0430\u043A\u0435\u0442\u044B \u043E\u0448\u0438\u0431\u043E\u043A \u043E\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u044B\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043B\u044E\u0447\u0430, \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u043D\u043E\u0433\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0444\u043E\u0440\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
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
      lineNumber: 260,
      columnNumber: 10
    }
  }), "Inertia.post('/companies', data, {\n  errorBag: 'createCompany',\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/validation#error-bags"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 70
    }
  }), "\u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 5
    }
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 5
    }
  }, "\u041E\u043F\u0446\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 18
    }
  }, "headers"), " \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0412\u0430\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0432 \u0437\u0430\u043F\u0440\u043E\u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
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
      lineNumber: 271,
      columnNumber: 10
    }
  }), "Inertia.post('/users', data, {\n  headers: {\n    'Custom-Header': 'value',\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 Inertia \u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0438 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0442\u043E\u043A\u0435\u043D \u043E\u0442\u043C\u0435\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 150
    }
  }, "onCancelToken()"), " \u0434\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }), "Inertia.post('/users', data, {\n  onCancelToken: (cancelToken) => (this.cancelToken = cancelToken),\n})\n\n// \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0438\u0437\u0438\u0442\nthis.cancelToken.cancel()\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 5
    }
  }, "\u041A\u043E\u0433\u0434\u0430 \u0432\u0438\u0437\u0438\u0442 \u043E\u0442\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F, \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0437\u0432\u0430\u043D\u044B \u043A\u0430\u043A \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 78
    }
  }, "onCancel()"), ", \u0442\u0430\u043A \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 144
    }
  }, "onFinish()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
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
      lineNumber: 293,
      columnNumber: 27
    }
  }), "\u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C"), ", Inertia \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0440\u044F\u0434 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0445 \u0432\u044B\u0437\u043E\u0432\u043E\u0432 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
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
      lineNumber: 296,
      columnNumber: 10
    }
  }), "Inertia.post('/users', data, {\n  onBefore: (visit) => {},\n  onStart: (visit) => {},\n  onProgress: (progress) => {},\n  onSuccess: (page) => {},\n  onError: (errors) => {},\n  onCancel: () => {},\n  onFinish: () => {},\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 5
    }
  }, "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 20
    }
  }, "false"), " \u0438\u0437 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 94
    }
  }, "onBefore()"), " \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u043E\u0442\u043C\u0435\u043D\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }), "Inertia.delete(`/users/${user.id}`, {\n  onBefore: () => confirm('\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F?'),\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 5
    }
  }, "\u0422\u0430\u043A\u0436\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u0435 \u0438\u0437 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0445 \u0432\u044B\u0437\u043E\u0432\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 64
    }
  }, "onSuccess()"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 126
    }
  }, "onError()"), ". \u042D\u0442\u043E \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \xABfinish\xBB \u0434\u043E \u0442\u0435\u0445 \u043F\u043E\u0440, \u043F\u043E\u043A\u0430 \u043F\u0440\u043E\u043C\u0438\u0441 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }), "Inertia.post(url, {\n  onSuccess: () => {\n    return Promise.all([\n      this.doThing(),\n      this.doAnotherThing()\n    ])\n  }\n  onFinish: () => {\n    // \u042D\u0442\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0437\u044B\u0432\u0430\u0442\u044C\u0441\u044F, \u043F\u043E\u043A\u0430 \u043D\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0442\u0441\u044F\n    // doThing() \u0438 doAnotherThing().\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u043C\u0438\u0441\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 5
    }
  }, "\u041D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 22
    }
  }, "v0.3.0"), ", Inertia \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u043B\u0430 \u043F\u0440\u043E\u043C\u0438\u0441, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u044B\u0439 \u0438\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 120
    }
  }, "Inertia.visit()"), ". \u0415\u0441\u043B\u0438 \u0412\u044B \u0432\u044B\u0437\u043E\u0432\u0435\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 202
    }
  }, "then()"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 258
    }
  }, "catch()"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 318
    }
  }, "finally()"), " \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F Inertia, \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u0438:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    "class": "py-4 px-6 border-l-4 border-orange-300 bg-orange-100 text-orange-900 text-sm font-mono",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 3
    }
  }, "\u041E\u0431\u0435\u0449\u0430\u043D\u0438\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F Inertia.js \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0438 \u0438 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0432\u044B\u043F\u0443\u0441\u043A\u0435. \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    "class": "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 3
    }
  }, "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0430 https://inertiajs.com/manual-visits#promise-deprecation")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
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
      lineNumber: 339,
      columnNumber: 70
    }
  }), "\u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0441\u043E\u0431\u044B\u0442\u0438\u0439"), ". \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432\u043C\u0435\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 78
    }
  }, "then()"), " \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 160
    }
  }, "onSuccess()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
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
      lineNumber: 342,
      columnNumber: 10
    }
  }), "Inertia.post('/profile', data, {\n  onSuccess: () => {\n    // \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F\n  },\n  onError: (errors) => {\n    // \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 5
    }
  }, "\u0412\u043C\u0435\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 33
    }
  }, "finally()"), " \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 118
    }
  }, "onFinish()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
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
      lineNumber: 354,
      columnNumber: 10
    }
  }), "Inertia.post('/profile', data, {\n  onFinish: () => {\n    // \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F\n  },\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 5
    }
  }, "\u0418 \u0432\u043C\u0435\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 35
    }
  }, "catch()"), " \u044D\u0442\u0438 \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u043B\u0443\u0447\u0448\u0435 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u043E\u0448\u0438\u0431\u043E\u043A."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
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
      lineNumber: 363,
      columnNumber: 10
    }
  }), "Inertia.on('exception', (event) => {\n  event.preventDefault()\n  // \u0423\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u0435 \u043E\u0448\u0438\u0431\u043A\u0443 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\n})\n")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFudWFsLXZpc2l0cy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsbUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxRQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsU0FESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsdUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSx1QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLHlCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkksRUFrQko7QUFDREQsT0FBRyxFQUFFLGdCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBbEJJLEVBcUJKO0FBQ0RELE9BQUcsRUFBRSw2QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQXJCSSxFQXdCSjtBQUNERCxPQUFHLEVBQUUsbUJBREo7QUFFREMsUUFBSSxFQUFFO0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBakgsTUF4U0ssRUF5U0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzVCLGlCQUFhO0FBRGUsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpUEFBTCxDQXpTSyxFQWlUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9JQUE4QjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlCLGlmQWpUSyxFQWtUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9RQUFMLENBbFRLLENBQVA7QUEwVEQ7S0E5VHVCTCxVO0FBZ1V4QjtBQUNBQSxVQUFVLENBQUNNLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFudWFsLXZpc2l0cy4xYzdjZjZmYjdmZjc2NDQ2MjBmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQn9C+0YHQtdGJ0LXQvdC40Y8g0LLRgNGD0YfQvdGD0Y4nLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0LzQtdGC0L7QtCcsXG4gICAgbmFtZTogJ9Cc0LXRgtC+0LQnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LTQsNC90L3Ri9C1JyxcbiAgICBuYW1lOiAn0JTQsNC90L3Ri9C1J1xuICB9LCB7XG4gICAgdXJsOiAnI9C40YHRgtC+0YDQuNGPLdCx0YDQsNGD0LfQtdGA0LAnLFxuICAgIG5hbWU6ICfQmNGB0YLQvtGA0LjRjyDQsdGA0LDRg9C30LXRgNCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7RgdGC0L7Rj9C90LjQtS3QutC+0LzQv9C+0L3QtdC90YLQsCcsXG4gICAgbmFtZTogJ9Ch0L7RgdGC0L7Rj9C90LjQtSDQutC+0LzQv9C+0L3QtdC90YLQsCdcbiAgfSwge1xuICAgIHVybDogJyPRgdC+0YXRgNCw0L3QtdC90LjQtS3Qv9GA0L7QutGA0YPRgtC60LgnLFxuICAgIG5hbWU6ICfQodC+0YXRgNCw0L3QtdC90LjQtSDQv9GA0L7QutGA0YPRgtC60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YfQsNGB0YLQuNGH0L3Ri9C1LdC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCcsXG4gICAgbmFtZTogJ9Cn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QsNC60LXRgtGLLdC+0YjQuNCx0L7QuicsXG4gICAgbmFtZTogJ9Cf0LDQutC10YLRiyDQvtGI0LjQsdC+0LonXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUt0LfQsNCz0L7Qu9C+0LLQutC4JyxcbiAgICBuYW1lOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUg0LfQsNCz0L7Qu9C+0LLQutC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0YLQvNC10L3QsC3Qv9C+0YHQtdGJ0LXQvdC40Y8nLFxuICAgIG5hbWU6ICfQntGC0LzQtdC90LAg0L/QvtGB0LXRidC10L3QuNGPJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHRgNCw0YLQvdGL0LUt0LLRi9C30L7QstGLLdGB0L7QsdGL0YLQuNC5JyxcbiAgICBuYW1lOiAn0J7QsdGA0LDRgtC90YvQtSDQstGL0LfQvtCy0Ysg0YHQvtCx0YvRgtC40LknXG4gIH0sIHtcbiAgICB1cmw6ICcj0YPRgdGC0LDRgNC10LLQsNC90LjQtS3Qv9GA0L7QvNC40YHQsCcsXG4gICAgbmFtZTogJ9Cj0YHRgtCw0YDQtdCy0LDQvdC40LUg0L/RgNC+0LzQuNGB0LAnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQn9C+0YHQtdGJ0LXQvdC40Y8g0LLRgNGD0YfQvdGD0Y5gfTwvaDE+XG4gICAgPHA+e2DQn9C+0LzQuNC80L4gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9saW5rc1wiXG4gICAgICB9fT57YNGB0L7Qt9C00LDQvdC40Y8g0YHRgdGL0LvQvtC6YH08L2E+e2AsINGC0LDQutC20LUg0LzQvtC20L3QviDQstGA0YPRh9C90YPRjiDQtNC10LvQsNGC0Ywg0LjQvdC10YDRhtC40L7QvdC90YvQtSDQv9C+0YHQtdGJ0LXQvdC40Y8uINCt0YLQviDQtNC10LvQsNC10YLRgdGPINGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnZpc2l0KClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLy8gaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgdGhpcy4kaW5lcnRpYS52aXNpdCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICBvbmx5OiBbXSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBlcnJvckJhZzogbnVsbCxcbiAgICAgICAgICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiB7fSxcbiAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge30sXG4gICAgICAgICAgb25CZWZvcmU6IHZpc2l0ID0+IHt9LFxuICAgICAgICAgIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICAgICAgICAgIG9uUHJvZ3Jlc3M6IHByb2dyZXNzID0+IHt9LFxuICAgICAgICAgIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgICAgICAgICBvbkVycm9yOiBlcnJvcnMgPT4ge30sXG4gICAgICAgICAgb25GaW5pc2g6ICgpID0+IHt9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgSW5lcnRpYS52aXNpdCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICBvbmx5OiBbXSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBlcnJvckJhZzogbnVsbCxcbiAgICAgICAgICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiB7fSxcbiAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge30sXG4gICAgICAgICAgb25CZWZvcmU6IHZpc2l0ID0+IHt9LFxuICAgICAgICAgIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICAgICAgICAgIG9uUHJvZ3Jlc3M6IHByb2dyZXNzID0+IHt9LFxuICAgICAgICAgIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgICAgICAgICBvbkVycm9yOiBlcnJvcnMgPT4ge30sXG4gICAgICAgICAgb25GaW5pc2g6ICgpID0+IHt9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgIEluZXJ0aWEudmlzaXQodXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICByZXBsYWNlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVN0YXRlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVNjcm9sbDogZmFsc2UsXG4gICAgICAgICAgb25seTogW10sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgZXJyb3JCYWc6IG51bGwsXG4gICAgICAgICAgb25DYW5jZWxUb2tlbjogY2FuY2VsVG9rZW4gPT4ge30sXG4gICAgICAgICAgb25DYW5jZWw6ICgpID0+IHt9LFxuICAgICAgICAgIG9uQmVmb3JlOiB2aXNpdCA9PiB7fSxcbiAgICAgICAgICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgICAgICAgICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgICAgICAgICBvblN1Y2Nlc3M6IHBhZ2UgPT4ge30sXG4gICAgICAgICAgb25FcnJvcjogZXJyb3JzID0+IHt9LFxuICAgICAgICAgIG9uRmluaXNoOiAoKSA9PiB7fSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQntC00L3QsNC60L4g0L7QsdGL0YfQvdC+INCy0LzQtdGB0YLQviDRjdGC0L7Qs9C+INGA0LXQutC+0LzQtdC90LTRg9C10YLRgdGPINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQvtC00LjQvSDQuNC3INC80LXRgtC+0LTQvtCyINCx0YvRgdGC0YDQvtCz0L4g0LTQvtGB0YLRg9C/0LAuINCt0YLQuCDQvNC10YLQvtC00Ysg0LjQvNC10Y7RgiDRgtC1INC20LUg0L/QsNGA0LDQvNC10YLRgNGLLCDRh9GC0L4g0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSW5lcnRpYS52aXNpdCgpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8vIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgIHRoaXMuJGluZXJ0aWEuZ2V0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgdGhpcy4kaW5lcnRpYS5wb3N0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgdGhpcy4kaW5lcnRpYS5wdXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnBhdGNoKHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgdGhpcy4kaW5lcnRpYS5kZWxldGUodXJsLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnJlcGxhY2UodXJsLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnJlbG9hZChvcHRpb25zKSAvLyDQmNGB0L/QvtC70YzQt9GD0LXRgiDRgtC10LrRg9GJ0LjQuSBVUkxcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgIEluZXJ0aWEuZ2V0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5wb3N0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5wdXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnBhdGNoKHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5kZWxldGUodXJsLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnJlcGxhY2UodXJsLCBvcHRpb25zKVxuICAgICAgICBJbmVydGlhLnJlbG9hZChvcHRpb25zKSAvLyDQmNGB0L/QvtC70YzQt9GD0LXRgiDRgtC10LrRg9GJ0LjQuSBVUkxcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLmdldCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucHV0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5wYXRjaCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEuZGVsZXRlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZXBsYWNlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZWxvYWQob3B0aW9ucykgLy8g0JjRgdC/0L7Qu9GM0LfRg9C10YIg0YLQtdC60YPRidC40LkgVVJMXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0JzQtdGC0L7QtCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZWxvYWQoKWB9PC9pbmxpbmVDb2RlPntgIC0g0Y3RgtC+INC/0YDQvtGB0YLQviDRgdC+0LrRgNCw0YnQtdC90LjQtSwg0LrQvtGC0L7RgNC+0LUg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L/QvtGB0LXRidCw0LXRgiDRgtC10LrRg9GJ0YPRjiDRgdGC0YDQsNC90LjRhtGDLCDQv9GA0LjRh9C10Lwg0LTQu9GPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByZXNlcnZlU3RhdGVgfTwvaW5saW5lQ29kZT57YCDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZVNjcm9sbGB9PC9pbmxpbmVDb2RlPntgINGD0YHRgtCw0L3QvtCy0LvQtdC90L4g0LfQvdCw0YfQtdC90LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPGgyPntg0JzQtdGC0L7QtGB9PC9oMj5cbiAgICA8cD57YNCY0YHQv9C+0LvRjNC30YPQudGC0LUg0L7Qv9GG0LjRjiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BtZXRob2RgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDRg9GB0YLQsNC90L7QstC40YLRjCDQvNC10YLQvtC0INC30LDQv9GA0L7RgdCwINC90LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZ2V0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3RgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHV0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoYH08L2lubGluZUNvZGU+e2Ag0LjQu9C4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRlbGV0ZWB9PC9pbmxpbmVDb2RlPntgLiDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDRjdGC0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZ2V0YH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQodXJsLCB7IG1ldGhvZDogJ3Bvc3QnIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQlNCw0L3QvdGL0LVgfTwvaDI+XG4gICAgPHA+e2DQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC+0L/RhtC40Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YWB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINC00L7QsdCw0LLQuNGC0Ywg0LTQsNC90L3Ri9C1INCyINC30LDQv9GA0L7RgS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS52aXNpdCgnL3VzZXJzJywge1xuICBtZXRob2Q6ICdwb3N0JyxcbiAgZGF0YToge1xuICAgIG5hbWU6ICdKb2huIERvZScsXG4gICAgZW1haWw6ICdqb2huLmRvZUBleGFtcGxlLmNvbScsXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQlNC70Y8g0YPQtNC+0LHRgdGC0LLQsCDQstGB0LUg0LzQtdGC0L7QtNGLIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGdldCgpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3QoKWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwdXQoKWB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoKClgfTwvaW5saW5lQ29kZT57YCDQstC60LvRjtGH0LDRjtGCINCyINC60LDRh9C10YHRgtCy0LUg0LLRgtC+0YDQvtCz0L4g0LDRgNCz0YPQvNC10L3RgtCwINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy91c2VycycsIHtcbiAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgZW1haWw6ICdqb2huLmRvZUBleGFtcGxlLmNvbScsXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0JjRgdGC0L7RgNC40Y8g0LHRgNCw0YPQt9C10YDQsGB9PC9oMj5cbiAgICA8cD57YNCf0YDQuCDQv9C+0YHQtdGJ0LXQvdC40LggSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQtNC+0LHQsNCy0LvRj9C10YIg0L3QvtCy0YPRjiDQt9Cw0L/QuNGB0Ywg0LIg0LjRgdGC0L7RgNC40Y4g0LHRgNCw0YPQt9C10YDQsC4g0J7QtNC90LDQutC+INGC0LDQutC20LUg0LzQvtC20L3QviDQt9Cw0LzQtdC90LjRgtGMINGC0LXQutGD0YnRg9GOINC30LDQv9C40YHRjCDQsiDQuNGB0YLQvtGA0LjQuCwg0YPRgdGC0LDQvdC+0LLQuNCyINC00LvRjyDQv9Cw0YDQsNC80LXRgtGA0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVwbGFjZWB9PC9pbmxpbmVDb2RlPntgINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLmdldCgnL3VzZXJzJywgeyBzZWFyY2g6ICdKb2huJyB9LCB7IHJlcGxhY2U6IHRydWUgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPlxuICDQn9GA0Lgg0L/QvtGB0LXRidC10L3QuNGP0YUg0L7QtNC90L7Qs9C+INC4INGC0L7Qs9C+INC20LUgVVJMLdCw0LTRgNC10YHQsCDQtNC70Y8gPGlubGluZUNvZGU+cmVwbGFjZTwvaW5saW5lQ29kZT4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINC30L3QsNGH0LXQvdC40LUgPGlubGluZUNvZGU+dHJ1ZTwvaW5saW5lQ29kZT4uXG4gICAgPC9Ob3RpY2U+XG4gICAgPGgyPntg0KHQvtGB0YLQvtGP0L3QuNC1INC60L7QvNC/0L7QvdC10L3RgtCwYH08L2gyPlxuICAgIDxwPntg0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L/RgNC4INC/0L7RgdC10YnQtdC90LjQuCDRgtC+0Lkg0LbQtSDRgdGC0YDQsNC90LjRhtGLINC/0YDQuNC90YPQtNC40YLQtdC70YzQvdC+INGB0L7Qt9C00LDQtdGC0YHRjyDQvdC+0LLRi9C5INGN0LrQt9C10LzQv9C70Y/RgCDQutC+0LzQv9C+0L3QtdC90YLQsCDRgdGC0YDQsNC90LjRhtGLLCDQutC+0YLQvtGA0YvQuSDQvtGH0LjRidCw0LXRgiDQu9GO0LHQvtC1INC70L7QutCw0LvRjNC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUsINGC0LDQutC+0LUg0LrQsNC6INCy0YXQvtC00L3Ri9C1INC00LDQvdC90YvQtSDRhNC+0YDQvNGLLCDQv9C+0LvQvtC20LXQvdC40Y8g0L/RgNC+0LrRgNGD0YLQutC4INC4INGB0L7RgdGC0L7Rj9C90LjRjyDRhNC+0LrRg9GB0LAuYH08L3A+XG4gICAgPHA+e2DQkiDQvtC/0YDQtdC00LXQu9C10L3QvdGL0YUg0YHQuNGC0YPQsNGG0LjRj9GFINC90LXQvtCx0YXQvtC00LjQvNC+INGB0L7RhdGA0LDQvdC40YLRjCDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiy4g0J3QsNC/0YDQuNC80LXRgCwg0L/RgNC4INC+0YLQv9GA0LDQstC60LUg0YTQvtGA0LzRiyDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0YHQvtGF0YDQsNC90LjRgtGMINC00LDQvdC90YvQtSDRhNC+0YDQvNGLINC90LAg0YLQvtGCINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0L7RiNC40LHQutC4INC/0YDQvtCy0LXRgNC60Lgg0LLQtdGA0L3Rg9GC0YHRjy5gfTwvcD5cbiAgICA8cD57YNCt0YLQviDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMLCDRg9GB0YLQsNC90L7QstC40LIg0LTQu9GPINC/0LDRgNCw0LzQtdGC0YDQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZVN0YXRlYH08L2lubGluZUNvZGU+e2Ag0LfQvdCw0YfQtdC90LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEuZ2V0KCcvdXNlcnMnLCB7IHNlYXJjaDogJ0pvaG4nIH0sIHsgcHJlc2VydmVTdGF0ZTogdHJ1ZSB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQktGLINGC0LDQutC20LUg0LzQvtC20LXRgtC1INC+0YLQu9C+0LbQtdC90L3QviDQvtGG0LXQvdC40YLRjCDQv9Cw0YDQsNC80LXRgtGAIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByZXNlcnZlU3RhdGVgfTwvaW5saW5lQ29kZT57YCDQvdCwINC+0YHQvdC+0LLQtSDQvtGC0LLQtdGC0LAsINC/0YDQtdC00L7RgdGC0LDQstC40LIg0L7QsdGA0LDRgtC90YvQuSDQstGL0LfQvtCyLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy91c2VycycsIGRhdGEsIHtcbiAgcHJlc2VydmVTdGF0ZTogKHBhZ2UpID0+IE9iamVjdC5rZXlzKHBhZ2UucHJvcHMuZXJyb3JzKS5sZW5ndGgsXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQlNC70Y8g0YPQtNC+0LHRgdGC0LLQsCDQvNC10YLQvtC00YsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwdXRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGF0Y2hgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGVsZXRlYH08L2lubGluZUNvZGU+e2Ag0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVsb2FkYH08L2lubGluZUNvZGU+e2Ag0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LTQu9GPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByZXNlcnZlU3RhdGVgfTwvaW5saW5lQ29kZT57YCDQuNC80LXRjtGCINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxoMj57YNCh0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuGB9PC9oMj5cbiAgICA8cD57YNCf0YDQuCDQv9C10YDQtdGF0L7QtNC1INC80LXQttC00YMg0YHRgtGA0LDQvdC40YbQsNC80LggSW5lcnRpYSDQuNC80LjRgtC40YDRg9C10YIg0L/QvtCy0LXQtNC10L3QuNC1INCx0YDQsNGD0LfQtdGA0LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4sINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGB0LHRgNCw0YHRi9Cy0LDRjyDQv9C+0LvQvtC20LXQvdC40LUg0L/RgNC+0LrRgNGD0YLQutC4INGC0LXQu9CwINC00L7QutGD0LzQtdC90YLQsCAo0LAg0YLQsNC60LbQtSDQu9GO0LHRi9C1INC+0L/RgNC10LTQtdC70LXQvdC90YvQtSDQktCw0LzQuCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3Njcm9sbC1tYW5hZ2VtZW50IyVEMCVCRSVEMCVCMSVEMCVCQiVEMCVCMCVEMSU4MSVEMSU4MiVEMCVCOC0lRDAlQkYlRDElODAlRDAlQkUlRDAlQkElRDElODAlRDElODMlRDElODIlRDAlQkElRDAlQjhcIlxuICAgICAgfX0+e2DQvtCx0LvQsNGB0YLQuCDQv9GA0L7QutGA0YPRgtC60LhgfTwvYT57YCkg0L7QsdGA0LDRgtC90L4g0L3QsNCy0LXRgNGFLiDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC+0L/RhtC40Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJlc2VydmVTY3JvbGxgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDQvtGC0LrQu9GO0YfQuNGC0Ywg0Y3RgtC+INC/0L7QstC10LTQtdC90LjQtS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS52aXNpdCh1cmwsIHsgcHJlc2VydmVTY3JvbGw6IHRydWUgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JLRiyDRgtCw0LrQttC1INC80L7QttC10YLQtSDQvtGC0LvQvtC20LXQvdC90L4g0L7RhtC10L3QuNGC0Ywg0L/QsNGA0LDQvNC10YLRgCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZVNjcm9sbGB9PC9pbmxpbmVDb2RlPntgINC90LAg0L7RgdC90L7QstC1INC+0YLQstC10YLQsCwg0L/RgNC10LTQvtGB0YLQsNCy0LjQsiDQvtCx0YDQsNGC0L3Ri9C5INCy0YvQt9C+0LIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBwcmVzZXJ2ZVNjcm9sbDogKHBhZ2UpID0+IE9iamVjdC5rZXlzKHBhZ2UucHJvcHMuZXJyb3JzKS5sZW5ndGgsXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQlNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40Lgg0YHQvNC+0YLRgNC40YLQtSDRgdGC0YDQsNC90LjRhtGDIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2Nyb2xsLW1hbmFnZW1lbnRcIlxuICAgICAgfX0+e2DRg9C/0YDQsNCy0LvQtdC90LjQtSDQv9GA0L7QutGA0YPRgtC60L7QuWB9PC9hPntgLmB9PC9wPlxuICAgIDxoMj57YNCn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LhgfTwvaDI+XG4gICAgPHA+e2DQntC/0YbQuNGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9ubHlgfTwvaW5saW5lQ29kZT57YCDQv9C+0LfQstC+0LvRj9C10YIg0JLQsNC8INC30LDQv9GA0LDRiNC40LLQsNGC0Ywg0L/QvtC00LzQvdC+0LbQtdGB0YLQstC+INGB0LLQvtC50YHRgtCyICjQtNCw0L3QvdGL0YUpINGBINGB0LXRgNCy0LXRgNCwINC/0YDQuCDQv9C+0YHQu9C10LTRg9GO0YnQuNGFINC/0L7RgdC10YnQtdC90LjRj9GFINGC0L7QuSDQttC1INGB0YLRgNCw0L3QuNGG0YsuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQoJy91c2VycycsIHsgc2VhcmNoOiAnSm9obicgfSwgeyBvbmx5OiBbJ3VzZXJzJ10gfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4INGB0LzQvtGC0YDQuNGC0LUg0YHRgtGA0LDQvdC40YbRgyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3BhcnRpYWwtcmVsb2Fkc1wiXG4gICAgICB9fT57YNGH0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LhgfTwvYT57YC5gfTwvcD5cbiAgICA8aDI+e2DQn9Cw0LrQtdGC0Ysg0L7RiNC40LHQvtC6YH08L2gyPlxuICAgIDxwPntg0JTQu9GPINGB0YLRgNCw0L3QuNGGLCDRgdC+0LTQtdGA0LbQsNGJ0LjRhSDQsdC+0LvQtdC1INC+0LTQvdC+0Lkg0YTQvtGA0LzRiywg0LzQvtCz0YPRgiDQstC+0LfQvdC40LrQvdGD0YLRjCDQutC+0L3RhNC70LjQutGC0Ysg0L/RgNC4INC+0YLQvtCx0YDQsNC20LXQvdC40Lgg0L7RiNC40LHQvtC6INC/0YDQvtCy0LXRgNC60LgsINC10YHQu9C4INC00LLQtSDRhNC+0YDQvNGLINC40LzQtdGO0YIg0L7QtNC40L3QsNC60L7QstGL0LUg0LjQvNC10L3QsCDQv9C+0LvQtdC5LiDQp9GC0L7QsdGLINC+0LHQvtC50YLQuCDRjdGC0L4sINCS0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQv9Cw0LrQtdGC0Ysg0L7RiNC40LHQvtC6LiDQn9Cw0LrQtdGC0Ysg0L7RiNC40LHQvtC6INC+0YXQstCw0YLRi9Cy0LDRjtGCINC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4LCDQstC+0LfQstGA0LDRidCw0LXQvNGL0LUg0YHQtdGA0LLQtdGA0L7QvCwg0LIg0L/RgNC10LTQtdC70LDRhSDRg9C90LjQutCw0LvRjNC90L7Qs9C+INC60LvRjtGH0LAsINGB0L/QtdGG0LjRhNC40YfQvdC+0LPQviDQtNC70Y8g0Y3RgtC+0Lkg0YTQvtGA0LzRiy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvY29tcGFuaWVzJywgZGF0YSwge1xuICBlcnJvckJhZzogJ2NyZWF0ZUNvbXBhbnknLFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4INGB0LzQvtGC0YDQuNGC0LUg0YHRgtGA0LDQvdC40YbRgyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3ZhbGlkYXRpb24jZXJyb3ItYmFnc1wiXG4gICAgICB9fT57YNCy0LDQu9C40LTQsNGG0LjQuGB9PC9hPntgLmB9PC9wPlxuICAgIDxoMj57YNCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC1INC30LDQs9C+0LvQvtCy0LrQuGB9PC9oMj5cbiAgICA8cD57YNCe0L/RhtC40Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaGVhZGVyc2B9PC9pbmxpbmVDb2RlPntgINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQktCw0Lwg0LTQvtCx0LDQstC70Y/RgtGMINCyINC30LDQv9GA0L7RgSDRgdC+0LHRgdGC0LLQtdC90L3Ri9C1INC30LDQs9C+0LvQvtCy0LrQuC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCBkYXRhLCB7XG4gIGhlYWRlcnM6IHtcbiAgICAnQ3VzdG9tLUhlYWRlcic6ICd2YWx1ZScsXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+0JfQsNCz0L7Qu9C+0LLQutC4IEluZXJ0aWEg0LjQvNC10Y7RgiDQv9GA0LjQvtGA0LjRgtC10YIg0Lgg0L/QvtGN0YLQvtC80YMg0L3QtSDQvNC+0LPRg9GCINCx0YvRgtGMINC/0LXRgNC10LfQsNC/0LjRgdCw0L3Riy48L05vdGljZT5cbiAgICA8aDI+e2DQntGC0LzQtdC90LAg0L/QvtGB0LXRidC10L3QuNGPYH08L2gyPlxuICAgIDxwPntg0JLRiyDQvNC+0LbQtdGC0LUg0L7RgtC80LXQvdC40YLRjCDQv9C+0YHQtdGJ0LXQvdC40LUsINC40YHQv9C+0LvRjNC30YPRjyDRgtC+0LrQtdC9INC+0YLQvNC10L3Riywg0LrQvtGC0L7RgNGL0LkgSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQs9C10L3QtdGA0LjRgNGD0LXRgiDQuCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgiDRgSDQv9C+0LzQvtGJ0YzRjiDQvtCx0YDQsNGC0L3QvtCz0L4g0LLRi9C30L7QstCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uQ2FuY2VsVG9rZW4oKWB9PC9pbmxpbmVDb2RlPntgINC00L4g0YHQvtCy0LXRgNGI0LXQvdC40Y8g0L/QvtGB0LXRidC10L3QuNGPLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy91c2VycycsIGRhdGEsIHtcbiAgb25DYW5jZWxUb2tlbjogKGNhbmNlbFRva2VuKSA9PiAodGhpcy5jYW5jZWxUb2tlbiA9IGNhbmNlbFRva2VuKSxcbn0pXG5cbi8vINCe0YLQvNC10L3QuNGC0Ywg0LLQuNC30LjRglxudGhpcy5jYW5jZWxUb2tlbi5jYW5jZWwoKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQmtC+0LPQtNCwINCy0LjQt9C40YIg0L7RgtC80LXQvdGP0LXRgtGB0Y8sINCx0YPQtNGD0YIg0LLRi9C30LLQsNC90Ysg0LrQsNC6INC+0LHRgNCw0YLQvdGL0LUg0LLRi9C30L7QstGLINGB0L7QsdGL0YLQuNC5IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uQ2FuY2VsKClgfTwvaW5saW5lQ29kZT57YCwg0YLQsNC6INC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uRmluaXNoKClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8aDI+e2DQntCx0YDQsNGC0L3Ri9C1INCy0YvQt9C+0LLRiyDRgdC+0LHRi9GC0LjQuWB9PC9oMj5cbiAgICA8cD57YNCSINC00L7Qv9C+0LvQvdC10L3QuNC1INC6IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvZXZlbnRzXCJcbiAgICAgIH19Pntg0LPQu9C+0LHQsNC70YzQvdGL0Lwg0YHQvtCx0YvRgtC40Y/QvGB9PC9hPntgLCBJbmVydGlhINGC0LDQutC20LUg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YIg0YDRj9C0INC+0LHRgNCw0YLQvdGL0YUg0LLRi9C30L7QstC+0LIg0YHQvtCx0YvRgtC40Lkg0LTQu9GPINC60LDQttC00L7Qs9C+INC/0L7RgdC10YnQtdC90LjRjy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCBkYXRhLCB7XG4gIG9uQmVmb3JlOiAodmlzaXQpID0+IHt9LFxuICBvblN0YXJ0OiAodmlzaXQpID0+IHt9LFxuICBvblByb2dyZXNzOiAocHJvZ3Jlc3MpID0+IHt9LFxuICBvblN1Y2Nlc3M6IChwYWdlKSA9PiB7fSxcbiAgb25FcnJvcjogKGVycm9ycykgPT4ge30sXG4gIG9uQ2FuY2VsOiAoKSA9PiB7fSxcbiAgb25GaW5pc2g6ICgpID0+IHt9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JLQvtC30LLRgNCw0YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmFsc2VgfTwvaW5saW5lQ29kZT57YCDQuNC3INC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25CZWZvcmUoKWB9PC9pbmxpbmVDb2RlPntgINC/0YDQuNCy0LXQtNC10YIg0Log0L7RgtC80LXQvdC1INC/0L7RgdC10YnQtdC90LjRjy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5kZWxldGUoXFxgL3VzZXJzL1xcJHt1c2VyLmlkfVxcYCwge1xuICBvbkJlZm9yZTogKCkgPT4gY29uZmlybSgn0JLRiyDRg9Cy0LXRgNC10L3Riywg0YfRgtC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDRjdGC0L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjz8nKSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCi0LDQutC20LUg0LLQvtC30LzQvtC20L3QviDQstC10YDQvdGD0YLRjCDQvtCx0LXRidCw0L3QuNC1INC40Lcg0L7QsdGA0LDRgtC90YvRhSDQstGL0LfQvtCy0L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN1Y2Nlc3MoKWB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uRXJyb3IoKWB9PC9pbmxpbmVDb2RlPntgLiDQrdGC0L4g0LfQsNC00LXRgNC20LjRgiDRgdC+0LHRi9GC0LjQtSDCq2ZpbmlzaMK7INC00L4g0YLQtdGFINC/0L7RgCwg0L/QvtC60LAg0L/RgNC+0LzQuNGBINC90LUg0LHRg9C00LXRgiDQstGL0L/QvtC70L3QtdC9LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QodXJsLCB7XG4gIG9uU3VjY2VzczogKCkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmRvVGhpbmcoKSxcbiAgICAgIHRoaXMuZG9Bbm90aGVyVGhpbmcoKVxuICAgIF0pXG4gIH1cbiAgb25GaW5pc2g6ICgpID0+IHtcbiAgICAvLyDQrdGC0L4g0L3QtSDQsdGD0LTQtdGCINCy0YvQt9GL0LLQsNGC0YzRgdGPLCDQv9C+0LrQsCDQvdC1INC30LDQstC10YDRiNCw0YLRgdGPXG4gICAgLy8gZG9UaGluZygpINC4IGRvQW5vdGhlclRoaW5nKCkuXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0KPRgdGC0LDRgNC10LLQsNC90LjQtSDQv9GA0L7QvNC40YHQsGB9PC9oMj5cbiAgICA8cD57YNCd0LDRh9C40L3QsNGPINGBIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHYwLjMuMGB9PC9pbmxpbmVDb2RlPntgLCBJbmVydGlhINC40YHQutC70Y7Rh9C40LvQsCDQv9GA0L7QvNC40YEsINCy0L7Qt9Cy0YDQsNGJ0LDQtdC80YvQuSDQuNC3IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEudmlzaXQoKWB9PC9pbmxpbmVDb2RlPntgLiDQldGB0LvQuCDQktGLINCy0YvQt9C+0LLQtdGC0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGhlbigpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNhdGNoKClgfTwvaW5saW5lQ29kZT57YCDQuNC70LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmluYWxseSgpYH08L2lubGluZUNvZGU+e2Ag0LLQviDQstGA0LXQvNGPINC/0L7RgdC10YnQtdC90LjRjyBJbmVydGlhLCDQktGLINC/0L7Qu9GD0YfQuNGC0LUg0YHQu9C10LTRg9GO0YnQtdC1INC/0YDQtdC00YPQv9GA0LXQttC00LXQvdC40LUg0LrQvtC90YHQvtC70Lg6YH08L3A+XG4gICAgPGRpdiBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItbC00IGJvcmRlci1vcmFuZ2UtMzAwIGJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtOTAwIHRleHQtc20gZm9udC1tb25vXCI+XG4gIDxkaXY+XG4gICAg0J7QsdC10YnQsNC90LjRjyDQv9C+0YHQtdGJ0LXQvdC40Y8gSW5lcnRpYS5qcyDRg9GB0YLQsNGA0LXQu9C4INC4INCx0YPQtNGD0YIg0YPQtNCw0LvQtdC90Ysg0LIg0YHQu9C10LTRg9GO0YnQtdC8INCy0YvQv9GD0YHQutC1LiDQktC80LXRgdGC0L4g0Y3RgtC+0LPQviDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INC90L7QstGL0LUg0L7QsdGA0LDRgtC90YvQtSDQstGL0LfQvtCy0Ysg0YHQvtCx0YvRgtC40Lkg0L/QvtGB0LXRidC10L3QuNGPLlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm10LTRcIj7Qo9C30L3QsNC50YLQtSDQsdC+0LvRjNGI0LUg0L3QsCBodHRwczovL2luZXJ0aWFqcy5jb20vbWFudWFsLXZpc2l0cyNwcm9taXNlLWRlcHJlY2F0aW9uPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHA+e2DQn9GA0LXQtNC/0L7Rh9GC0LjRgtC10LvRjNC90YvQuSDQv9C+0LTRhdC+0LQgLSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LLQvNC10YHRgtC+INGN0YLQvtCz0L4g0L3QvtCy0YvQtSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiIyVEMCVCRSVEMCVCMSVEMSU4MCVEMCVCMCVEMSU4MiVEMCVCRCVEMSU4QiVEMCVCNS0lRDAlQjIlRDElOEIlRDAlQjclRDAlQkUlRDAlQjIlRDElOEItJUQxJTgxJUQwJUJFJUQwJUIxJUQxJThCJUQxJTgyJUQwJUI4JUQwJUI5XCJcbiAgICAgIH19Pntg0L7QsdGA0LDRgtC90YvQtSDQstGL0LfQvtCy0Ysg0YHQvtCx0YvRgtC40LlgfTwvYT57YC4g0J3QsNC/0YDQuNC80LXRgCwg0LLQvNC10YHRgtC+INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRoZW4oKWB9PC9pbmxpbmVDb2RlPntgINC40YHQv9C+0LvRjNC30YPQudGC0LUg0L7QsdGA0LDRgtC90YvQuSDQstGL0LfQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uU3VjY2VzcygpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3Byb2ZpbGUnLCBkYXRhLCB7XG4gIG9uU3VjY2VzczogKCkgPT4ge1xuICAgIC8vINCe0LHRgNCw0LHQvtGC0LrQsCDRg9GB0L/QtdGI0L3QvtCz0L4g0YHQvtCx0YvRgtC40Y9cbiAgfSxcbiAgb25FcnJvcjogKGVycm9ycykgPT4ge1xuICAgIC8vINCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Log0L/RgNC+0LLQtdGA0LrQuFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JLQvNC10YHRgtC+INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZpbmFsbHkoKWB9PC9pbmxpbmVDb2RlPntgINC40YHQv9C+0LvRjNC30YPQudGC0LUg0L7QsdGA0LDRgtC90YvQuSDQstGL0LfQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uRmluaXNoKClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvcHJvZmlsZScsIGRhdGEsIHtcbiAgb25GaW5pc2g6ICgpID0+IHtcbiAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0YHQvtCx0YvRgtC40Y8g0LfQsNCy0LXRgNGI0LXQvdC40Y9cbiAgfSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCYINCy0LzQtdGB0YLQviDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BjYXRjaCgpYH08L2lubGluZUNvZGU+e2Ag0Y3RgtC4INC90LXQvtC20LjQtNCw0L3QvdGL0LUg0L7RiNC40LHQutC4INC70YPRh9GI0LUg0L7QsdGA0LDQsdCw0YLRi9Cy0LDRgtGMINGBINC/0L7QvNC+0YnRjNGOINCz0LvQvtCx0LDQu9GM0L3QvtCz0L4g0L7QsdGA0LDQsdC+0YLRh9C40LrQsCDRgdC+0LHRi9GC0LjQuSDQvtGI0LjQsdC+0LouYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEub24oJ2V4Y2VwdGlvbicsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vINCj0YHRgtGA0LDQvdC40YLQtSDQvtGI0LjQsdC60YMg0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3QvlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==