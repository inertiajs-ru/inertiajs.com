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
  title: 'Manual visits',
  links: [{
    url: '#method',
    name: 'Method'
  }, {
    url: '#data',
    name: 'Data'
  }, {
    url: '#browser-history',
    name: 'Browser history'
  }, {
    url: '#component-state',
    name: 'Component state'
  }, {
    url: '#scroll-preservation',
    name: 'Scroll preservation'
  }, {
    url: '#partial-reloads',
    name: 'Partial reloads'
  }, {
    url: '#custom-headers',
    name: 'Custom headers'
  }, {
    url: '#visit-cancellation',
    name: 'Visit cancellation'
  }, {
    url: '#event-callbacks',
    name: 'Event callbacks'
  }, {
    url: '#promise-deprecation',
    name: 'Promise deprecation'
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
  }, "Manual visits"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, "In addition to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/links"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 27
    }
  }), "creating links"), ", it's also possible to manually make Inertia visits. This is done using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 113
    }
  }, "Inertia.visit()"), " method."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, "However, generally it's preferred to use one of the shortcut methods instead. These methods share all the same options as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 134
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
  }, "Method"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, "Use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 20
    }
  }, "method"), " option to set the request method to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 111
    }
  }, "get"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 164
    }
  }, "post"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 218
    }
  }, "put"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 271
    }
  }, "patch"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 328
    }
  }, "delete"), ". The default is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 399
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
  }, "Data"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Browser history"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Component state"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Scroll preservation"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Partial reloads"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Custom headers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Visit cancellation"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Event callbacks"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Promise deprecation"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Learn more at https://inertiajs.ru/manual-visits#promise-deprecation")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFudWFsLXZpc2l0cy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsZUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLFNBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxPQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBSEksRUFNSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FOSSxFQVNKO0FBQ0RELE9BQUcsRUFBRSxrQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVRJLEVBWUo7QUFDREQsT0FBRyxFQUFFLHNCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBWkksRUFlSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FmSSxFQWtCSjtBQUNERCxPQUFHLEVBQUUsaUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FsQkksRUFxQko7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBckJJLEVBd0JKO0FBQ0RELE9BQUcsRUFBRSxrQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFG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QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE1Qix3RkFoUkssRUFpUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzVCLGlCQUFhO0FBRGUsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1R0FBTCxDQWpSSyxDQUFQO0FBeVJEO0tBN1J1QkwsVTtBQStSeEI7QUFDQUEsVUFBVSxDQUFDTSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hbnVhbC12aXNpdHMuZWE4N2NkYzdhZWY4ZjRmNzIyMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAnTWFudWFsIHZpc2l0cycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyNtZXRob2QnLFxuICAgIG5hbWU6ICdNZXRob2QnXG4gIH0sIHtcbiAgICB1cmw6ICcjZGF0YScsXG4gICAgbmFtZTogJ0RhdGEnXG4gIH0sIHtcbiAgICB1cmw6ICcjYnJvd3Nlci1oaXN0b3J5JyxcbiAgICBuYW1lOiAnQnJvd3NlciBoaXN0b3J5J1xuICB9LCB7XG4gICAgdXJsOiAnI2NvbXBvbmVudC1zdGF0ZScsXG4gICAgbmFtZTogJ0NvbXBvbmVudCBzdGF0ZSdcbiAgfSwge1xuICAgIHVybDogJyNzY3JvbGwtcHJlc2VydmF0aW9uJyxcbiAgICBuYW1lOiAnU2Nyb2xsIHByZXNlcnZhdGlvbidcbiAgfSwge1xuICAgIHVybDogJyNwYXJ0aWFsLXJlbG9hZHMnLFxuICAgIG5hbWU6ICdQYXJ0aWFsIHJlbG9hZHMnXG4gIH0sIHtcbiAgICB1cmw6ICcjY3VzdG9tLWhlYWRlcnMnLFxuICAgIG5hbWU6ICdDdXN0b20gaGVhZGVycydcbiAgfSwge1xuICAgIHVybDogJyN2aXNpdC1jYW5jZWxsYXRpb24nLFxuICAgIG5hbWU6ICdWaXNpdCBjYW5jZWxsYXRpb24nXG4gIH0sIHtcbiAgICB1cmw6ICcjZXZlbnQtY2FsbGJhY2tzJyxcbiAgICBuYW1lOiAnRXZlbnQgY2FsbGJhY2tzJ1xuICB9LCB7XG4gICAgdXJsOiAnI3Byb21pc2UtZGVwcmVjYXRpb24nLFxuICAgIG5hbWU6ICdQcm9taXNlIGRlcHJlY2F0aW9uJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntgTWFudWFsIHZpc2l0c2B9PC9oMT5cbiAgICA8cD57YEluIGFkZGl0aW9uIHRvIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvbGlua3NcIlxuICAgICAgfX0+e2BjcmVhdGluZyBsaW5rc2B9PC9hPntgLCBpdCdzIGFsc28gcG9zc2libGUgdG8gbWFudWFsbHkgbWFrZSBJbmVydGlhIHZpc2l0cy4gVGhpcyBpcyBkb25lIHVzaW5nIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnZpc2l0KClgfTwvaW5saW5lQ29kZT57YCBtZXRob2QuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8vIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgIHRoaXMuJGluZXJ0aWEudmlzaXQodXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICByZXBsYWNlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVN0YXRlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVNjcm9sbDogZmFsc2UsXG4gICAgICAgICAgb25seTogW10sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgb25DYW5jZWxUb2tlbjogY2FuY2VsVG9rZW4gPT4ge30sXG4gICAgICAgICAgb25DYW5jZWw6ICgpID0+IHt9LFxuICAgICAgICAgIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICAgICAgICAgIG9uUHJvZ3Jlc3M6IHByb2dyZXNzID0+IHt9LFxuICAgICAgICAgIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgICAgICAgICBvbkZpbmlzaDogKCkgPT4ge30sXG4gICAgICAgIH0pXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLnZpc2l0KHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgcmVwbGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVTY3JvbGw6IGZhbHNlLFxuICAgICAgICAgIG9ubHk6IFtdLFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsVG9rZW46IGNhbmNlbFRva2VuID0+IHt9LFxuICAgICAgICAgIG9uQ2FuY2VsOiAoKSA9PiB7fSxcbiAgICAgICAgICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgICAgICAgICBvblByb2dyZXNzOiBwcm9ncmVzcyA9PiB7fSxcbiAgICAgICAgICBvblN1Y2Nlc3M6IHBhZ2UgPT4ge30sXG4gICAgICAgICAgb25GaW5pc2g6ICgpID0+IHt9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgIEluZXJ0aWEudmlzaXQodXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICByZXBsYWNlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVN0YXRlOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXJ2ZVNjcm9sbDogZmFsc2UsXG4gICAgICAgICAgb25seTogW10sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgb25DYW5jZWxUb2tlbjogY2FuY2VsVG9rZW4gPT4ge30sXG4gICAgICAgICAgb25DYW5jZWw6ICgpID0+IHt9LFxuICAgICAgICAgIG9uU3RhcnQ6IHZpc2l0ID0+IHt9LFxuICAgICAgICAgIG9uUHJvZ3Jlc3M6IHByb2dyZXNzID0+IHt9LFxuICAgICAgICAgIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgICAgICAgICBvbkZpbmlzaDogKCkgPT4ge30sXG4gICAgICAgIH0pXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgSG93ZXZlciwgZ2VuZXJhbGx5IGl0J3MgcHJlZmVycmVkIHRvIHVzZSBvbmUgb2YgdGhlIHNob3J0Y3V0IG1ldGhvZHMgaW5zdGVhZC4gVGhlc2UgbWV0aG9kcyBzaGFyZSBhbGwgdGhlIHNhbWUgb3B0aW9ucyBhcyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnZpc2l0KClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLy8gaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgdGhpcy4kaW5lcnRpYS5nZXQodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnBvc3QodXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLnB1dCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuJGluZXJ0aWEucGF0Y2godXJsLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICB0aGlzLiRpbmVydGlhLmRlbGV0ZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuJGluZXJ0aWEucmVwbGFjZSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuJGluZXJ0aWEucmVsb2FkKG9wdGlvbnMpIC8vIFVzZXMgdGhlIGN1cnJlbnQgVVJMXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLmdldCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucHV0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5wYXRjaCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEuZGVsZXRlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZXBsYWNlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZWxvYWQob3B0aW9ucykgLy8gVXNlcyB0aGUgY3VycmVudCBVUkxcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICBJbmVydGlhLmdldCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEucHV0KHVybCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5wYXRjaCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIEluZXJ0aWEuZGVsZXRlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZXBsYWNlKHVybCwgb3B0aW9ucylcbiAgICAgICAgSW5lcnRpYS5yZWxvYWQob3B0aW9ucykgLy8gVXNlcyB0aGUgY3VycmVudCBVUkxcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntgTWV0aG9kYH08L2gyPlxuICAgIDxwPntgVXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BtZXRob2RgfTwvaW5saW5lQ29kZT57YCBvcHRpb24gdG8gc2V0IHRoZSByZXF1ZXN0IG1ldGhvZCB0byBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BnZXRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwdXRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGF0Y2hgfTwvaW5saW5lQ29kZT57YCBvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkZWxldGVgfTwvaW5saW5lQ29kZT57YC4gVGhlIGRlZmF1bHQgaXMgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZ2V0YH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEudmlzaXQodXJsLCB7IG1ldGhvZDogJ3Bvc3QnIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2BEYXRhYH08L2gyPlxuICAgIDxwPntgVXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkYXRhYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIHRvIGFkZCBkYXRhIHRvIHRoZSByZXF1ZXN0LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnZpc2l0KCcvdXNlcnMnLCB7XG4gIG1ldGhvZDogJ3Bvc3QnLFxuICBkYXRhOiB7XG4gICAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgICBlbWFpbDogJ2pvaG4uZG9lQGV4YW1wbGUuY29tJyxcbiAgfSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEFzIGEgY29udmVuaWVuY2UsIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BnZXQoKWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0KClgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHV0KClgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGF0Y2goKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZHMgYWxsIGluY2x1ZGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YWB9PC9pbmxpbmVDb2RlPntgIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywge1xuICBuYW1lOiAnSm9obiBEb2UnLFxuICBlbWFpbDogJ2pvaG4uZG9lQGV4YW1wbGUuY29tJyxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2BCcm93c2VyIGhpc3RvcnlgfTwvaDI+XG4gICAgPHA+e2BXaGVuIG1ha2luZyB2aXNpdHMsIEluZXJ0aWEgYXV0b21hdGljYWxseSBhZGRzIGEgbmV3IGVudHJ5IGludG8gdGhlIGJyb3dzZXIgaGlzdG9yeS4gSG93ZXZlciwgaXQncyBhbHNvIHBvc3NpYmxlIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgaGlzdG9yeSBlbnRyeSB1c2luZyBieSBzZXR0aW5nIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXBsYWNlYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIHRvIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRydWVgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5nZXQoJy91c2VycycsIHsgc2VhcmNoOiAnSm9obicgfSwgeyByZXBsYWNlOiB0cnVlIH0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEFzIGEgc2hvcnRjdXQsIHlvdSBjYW4gdXNlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlcGxhY2UoKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IGRvIHRoaXMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucmVwbGFjZSgnL3VzZXJzJywgeyBzZWFyY2g6ICdKb2huJyB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+XG4gIE5vdGUgdGhhdCB2aXNpdHMgbWFkZSB0byB0aGUgc2FtZSBVUkwgKGluY2x1ZGluZyBxdWVyeSBzdHJpbmdzKSBhdXRvbWF0aWNhbGx5IHNldCA8aW5saW5lQ29kZT5yZXBsYWNlPC9pbmxpbmVDb2RlPiB0b3snICd9XG4gIDxpbmxpbmVDb2RlPnRydWU8L2lubGluZUNvZGU+LlxuICAgIDwvTm90aWNlPlxuICAgIDxoMj57YENvbXBvbmVudCBzdGF0ZWB9PC9oMj5cbiAgICA8cD57YEJ5IGRlZmF1bHQgcGFnZSB2aXNpdHMgdG8gdGhlIHNhbWUgcGFnZSBmb3JjZSBhIGZyZXNoIHBhZ2UgY29tcG9uZW50IGluc3RhbmNlLCB3aGljaCBjbGVhcnMgb3V0IGFueSBsb2NhbCBzdGF0ZSwgc3VjaCBhcyBmb3JtIGlucHV0cywgc2Nyb2xsIHBvc2l0aW9ucyBhbmQgZm9jdXMgc3RhdGVzLmB9PC9wPlxuICAgIDxwPntgSW4gY2VydGFpbiBzaXR1YXRpb25zIGl0J3MgbmVjZXNzYXJ5IHRvIHByZXNlcnZlIHRoZSBwYWdlIGNvbXBvbmVudCBzdGF0ZS4gRm9yIGV4YW1wbGUsIHdoZW4gc3VibWl0dGluZyBhIGZvcm0sIHlvdSBuZWVkIHRvIHByZXNlcnZlIHlvdXIgZm9ybSBkYXRhIGluIHRoZSBldmVudCB0aGF0IHZhbGlkYXRpb24gZXJyb3JzIGNvbWUgYmFjay5gfTwvcD5cbiAgICA8cD57YFRoaXMgY2FuIGJlIGRvbmUgYnkgc2V0dGluZyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJlc2VydmVTdGF0ZWB9PC9pbmxpbmVDb2RlPntgIG9wdGlvbiB0byBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEuZ2V0KCcvdXNlcnMnLCB7IHNlYXJjaDogJ0pvaG4nIH0sIHsgcHJlc2VydmVTdGF0ZTogdHJ1ZSB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BGb3IgY29udmVuaWVuY2UsIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0KClgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHV0KClgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGF0Y2goKWB9PC9pbmxpbmVDb2RlPntgIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXBsYWNlKClgfTwvaW5saW5lQ29kZT57YCBtZXRob2RzIGF1dG1hdGljYWxseSBzZXQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJlc2VydmVTdGF0ZWB9PC9pbmxpbmVDb2RlPntgIHRvIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRydWVgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8aDI+e2BTY3JvbGwgcHJlc2VydmF0aW9uYH08L2gyPlxuICAgIDxwPntgV2hlbiBuYXZpZ2F0aW5nIGJldHdlZW4gcGFnZXMsIEluZXJ0aWEgbWltaWNzIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvdXIgYnkgYXV0b21hdGljYWxseSByZXNldHRpbmcgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgZG9jdW1lbnQgYm9keSAoYXMgd2VsbCBhcyBhbnkgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9zY3JvbGwtbWFuYWdlbWVudCNzY3JvbGwtcmVnaW9uc1wiXG4gICAgICB9fT57YHNjcm9sbCByZWdpb25zYH08L2E+e2AgeW91J3ZlIGRlZmluZWQpLCBiYWNrIHRvIHRoZSB0b3AuIFVzZSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJlc2VydmVTY3JvbGxgfTwvaW5saW5lQ29kZT57YCBvcHRpb24gdG8gZGlzYWJsZSB0aGlzIGJlaGF2aW91ci5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS52aXNpdCh1cmwsIHsgcHJlc2VydmVTY3JvbGw6IHRydWUgfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9zY3JvbGwtbWFuYWdlbWVudFwiXG4gICAgICB9fT57YHNjcm9sbCBtYW5hZ2VtZW50YH08L2E+e2AgcGFnZS5gfTwvcD5cbiAgICA8aDI+e2BQYXJ0aWFsIHJlbG9hZHNgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25seWB9PC9pbmxpbmVDb2RlPntgIG9wdGlvbiBhbGxvd3MgeW91IHRvIHJlcXVlc3QgYSBzdWJzZXQgb2YgdGhlIHByb3BzIChkYXRhKSBmcm9tIHRoZSBzZXJ2ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gdGhlIHNhbWUgcGFnZS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS52aXNpdCgnL3VzZXJzJywgeyBzZWFyY2g6ICdKb2huJyB9LCB7IG9ubHk6IFsndXNlcnMnXSB9KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3BhcnRpYWwtcmVsb2Fkc1wiXG4gICAgICB9fT57YHBhcnRpYWwgcmVsb2Fkc2B9PC9hPntgIHBhZ2UuYH08L3A+XG4gICAgPGgyPntgQ3VzdG9tIGhlYWRlcnNgfTwvaDI+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaGVhZGVyc2B9PC9pbmxpbmVDb2RlPntgIG9wdGlvbiBhbGxvd3MgeW91IHRvIGFkZCBjdXN0b20gaGVhZGVycyB0byBhIHJlcXVlc3QuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBoZWFkZXJzOiB7XG4gICAgJ0N1c3RvbS1IZWFkZXInOiAndmFsdWUnLFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPlRoZSBJbmVydGlhIGhlYWRlcnMgdGFrZSBwcmlvcml0eSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSBvdmVyd3JpdHRlbi48L05vdGljZT5cbiAgICA8aDI+e2BWaXNpdCBjYW5jZWxsYXRpb25gfTwvaDI+XG4gICAgPHA+e2BZb3UgY2FuIGNhbmNlbCBhIHZpc2l0IHVzaW5nIGEgY2FuY2VsIHRva2VuLCB3aGljaCBJbmVydGlhIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGFuZCBwcm92aWRlcyB2aWEgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uQ2FuY2VsVG9rZW4oKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrIHByaW9yIHRvIG1ha2luZyB0aGUgdmlzaXQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBvbkNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbiA9PiAodGhpcy5jYW5jZWxUb2tlbiA9IGNhbmNlbFRva2VuKSxcbn0pXG5cbi8vIENhbmNlbCB0aGUgdmlzaXRcbnRoaXMuY2FuY2VsVG9rZW4uY2FuY2VsKClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgV2hlbiBhIHZpc2l0IGlzIGNhbmNlbGxlZCwgYm90aCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25DYW5jZWwoKWB9PC9pbmxpbmVDb2RlPntgIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkZpbmlzaCgpYH08L2lubGluZUNvZGU+e2AgZXZlbnQgY2FsbGJhY2tzIHdpbGwgYmUgY2FsbGVkLmB9PC9wPlxuICAgIDxoMj57YEV2ZW50IGNhbGxiYWNrc2B9PC9oMj5cbiAgICA8cD57YEluIGFkZGl0aW9uIHRvIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2V2ZW50c1wiXG4gICAgICB9fT57YGdsb2JhbCBldmVudHNgfTwvYT57YCwgSW5lcnRpYSBhbHNvIHByb3ZpZGVzIGEgbnVtYmVyIG9mIHBlci12aXNpdCBldmVudCBjYWxsYmFja3MuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBvblN0YXJ0OiB2aXNpdCA9PiB7fSxcbiAgb25Qcm9ncmVzczogcHJvZ3Jlc3MgPT4ge30sXG4gIG9uU3VjY2VzczogcGFnZSA9PiB7fSxcbiAgb25DYW5jZWw6ICgpID0+IHt9LFxuICBvbkZpbmlzaDogKCkgPT4ge30sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BSZXR1cm5pbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmFsc2VgfTwvaW5saW5lQ29kZT57YCBmcm9tIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN0YXJ0KClgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjayB3aWxsIGNhdXNlIHRoZSB2aXNpdCB0byBiZSBjYW5jZWxsZWQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEuZGVsZXRlKFxcYC91c2Vycy9cXCR7dXNlci5pZH1cXGAsIHtcbiAgb25TdGFydDogKCkgPT4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHVzZXI/JyksXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJdCdzIGFsc28gcG9zc2libGUgdG8gcmV0dXJuIGEgcHJvbWlzZSBmcm9tIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN1Y2Nlc3MoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLiBUaGlzIHdpbGwgZGVsYXkgdGhlIFwiZmluaXNoXCIgZXZlbnQgdW50aWwgdGhlIHByb21pc2UgaGFzIHJlc29sdmVkLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QodXJsLCB7XG4gIG9uU3VjY2VzczogKCkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmRvVGhpbmcoKSxcbiAgICAgIHRoaXMuZG9Bbm90aGVyVGhpbmcoKVxuICAgIF0pXG4gIH1cbiAgb25GaW5pc2g6ICgpID0+IHtcbiAgICAvLyBUaGlzIHdvbid0IGJlIGNhbGxlZCB1bnRpbCBkb1RoaW5nKClcbiAgICAvLyBhbmQgZG9Bbm90aGVyVGhpbmcoKSBoYXZlIGZpbmlzaGVkLlxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YFByb21pc2UgZGVwcmVjYXRpb25gfTwvaDI+XG4gICAgPHA+e2BBcyBvZiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B2MC4zLjBgfTwvaW5saW5lQ29kZT57YCwgSW5lcnRpYSBkZXByZWNhdGVkIHRoZSBwcm9taXNlIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnZpc2l0KClgfTwvaW5saW5lQ29kZT57YC4gSWYgeW91IGNhbGwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGhlbigpYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNhdGNoKClgfTwvaW5saW5lQ29kZT57YCBvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5hbGx5KClgfTwvaW5saW5lQ29kZT57YCBvbiBhbiBJbmVydGlhIHZpc2l0LCB5b3Ugd2lsbCBub3cgZ2V0IHRoZSBmb2xsb3dpbmcgY29uc29sZSB3YXJuaW5nOmB9PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWwtNCBib3JkZXItb3JhbmdlLTMwMCBiZy1vcmFuZ2UtMTAwIHRleHQtb3JhbmdlLTkwMCB0ZXh0LXNtIGZvbnQtbW9ub1wiPlxuICA8ZGl2PlxuICAgIEluZXJ0aWEuanMgdmlzaXQgcHJvbWlzZXMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLiBQbGVhc2UgdXNlIHRoZSBuZXcgdmlzaXRcbiAgICBldmVudCBjYWxsYmFja3MgaW5zdGVhZC5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtdC00XCI+TGVhcm4gbW9yZSBhdCBodHRwczovL2luZXJ0aWFqcy5ydS9tYW51YWwtdmlzaXRzI3Byb21pc2UtZGVwcmVjYXRpb248L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cD57YFRoZSBwcmVmZXJyZWQgYXBwcm9hY2ggaXMgdG8gdXNlIHRoZSBuZXcgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIiNldmVudC1jYWxsYmFja3NcIlxuICAgICAgfX0+e2BldmVudCBjYWxsYmFja3NgfTwvYT57YCBpbnN0ZWFkLiBGb3IgZXhhbXBsZSwgaW5zdGVhZCBvZiB1c2luZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0aGVuKClgfTwvaW5saW5lQ29kZT57YCwgdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN1Y2Nlc3MoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy9wcm9maWxlJywgZGF0YSwge1xuICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAvLyBIYW5kbGUgc3VjY2VzcyBldmVudFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgSW5zdGVhZCBvZiB1c2luZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmaW5hbGx5KClgfTwvaW5saW5lQ29kZT57YCwgdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkZpbmlzaCgpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2suYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL3Byb2ZpbGUnLCBkYXRhLCB7XG4gIG9uRmluaXNoOiAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGZpbmlzaCBldmVudFxuICB9LFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQW5kIGluc3RlYWQgb2YgdXNpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY2F0Y2goKWB9PC9pbmxpbmVDb2RlPntgLCBpdCdzIGJldHRlciB0byBoYW5kbGUgdGhlc2UgdW5leHBlY3RlZCBlcnJvcnMgdXNpbmcgYSBnbG9iYWwgZXJyb3IgZXZlbnQgaGFuZGxlci5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5vbignZXJyb3InLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gSGFuZGxlIHRoZSBlcnJvciB5b3Vyc2VsZlxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==