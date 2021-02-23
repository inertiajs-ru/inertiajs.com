webpackHotUpdate_N_E("pages/csrf-protection",{

/***/ "./pages/csrf-protection.mdx":
/*!***********************************!*\
  !*** ./pages/csrf-protection.mdx ***!
  \***********************************/
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



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\csrf-protection.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        # todo\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        use Throwable;\n        use Inertia\\Inertia;\n\n        /**\n         * \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0430.\n         *\n         * @param  \\Throwable  $e\n         * @return \\Throwable\n         */\n        public function render($request, Throwable $e)\n        {\n            $response = parent::render($request, $e);\n\n            if ($response->status() === 419) {\n                return back()->with([\n                    'message' => '\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0441\u0442\u0435\u043A, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.',\n                ]);\n            }\n\n            return $response;\n        }\n      "], ["\n        use Throwable;\n        use Inertia\\\\Inertia;\\n\n        /**\n         * \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0430.\n         *\n         * @param  \\\\Throwable  $e\n         * @return \\\\Throwable\n         */\n        public function render($request, Throwable $e)\n        {\n            $response = parent::render($request, $e);\\n\n            if ($response->status() === 419) {\n                return back()->with([\n                    'message' => '\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0441\u0442\u0435\u043A, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.',\n                ]);\n            }\\n\n            return $response;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'CSRF защита',
  links: [{
    url: '#создание-запросов',
    name: 'Создание запросов'
  }, {
    url: '#обработка-несоответствий',
    name: 'Обработка несоответствий'
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
      lineNumber: 30,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "CSRF \u0437\u0430\u0449\u0438\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u0430\u0448\u0430 \u0432\u0435\u0431-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0437\u0430\u0449\u0438\u0442\u0443 \u043E\u0442 \u043F\u043E\u0434\u0434\u0435\u043B\u043A\u0438 \u043C\u0435\u0436\u0441\u0430\u0439\u0442\u043E\u0432\u044B\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 (CSRF), \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u0431\u0435\u0434\u0438\u0442\u044C\u0441\u044F, \u0447\u0442\u043E \u043A\u0430\u0436\u0434\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 Inertia \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 185
    }
  }, "POST"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 239
    }
  }, "PUT"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 292
    }
  }, "PATCH"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 348
    }
  }, "DELETE"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u043E \u0438\u0437 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 - \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0442\u043E\u043A\u0435\u043D CSRF \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0432 \u043A\u0430\u0436\u0434\u044B\u0439 \u043E\u0442\u0432\u0435\u0442. \u0417\u0430\u0442\u0435\u043C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u043A\u0435\u043D \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 38,
      columnNumber: 10
    }
  }), "this.$inertia.post('/users', {\n  name: this.name,\n  email: this.email,\n  _token: this.$page.props.csrf_token,\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "\u0412\u044B \u0434\u0430\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", {
    href: "/shared-data",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 48
    }
  }, "\u043E\u0431\u0449\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), " , \u0447\u0442\u043E\u0431\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 127
    }
  }, "csrf_token"), " \u0432 \u043A\u0430\u0436\u0434\u044B\u0439 \u043E\u0442\u0432\u0435\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430\u043A\u043E \u043B\u0443\u0447\u0448\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u044E CSRF, \u0443\u0436\u0435 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0443\u044E \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/axios/axios"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 79
    }
  }), "axios"), ". Axios - \u044D\u0442\u043E HTTP-\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E Inertia \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043F\u043E\u0434 \u043A\u0430\u043F\u043E\u0442\u043E\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, "Axios \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 cookie-\u0444\u0430\u0439\u043B\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 63
    }
  }, "XSRF-TOKEN"), ". \u0415\u0441\u043B\u0438 \u043E\u043D \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442, \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0442\u043E\u043A\u0435\u043D \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 181
    }
  }, "X-XSRF-TOKEN"), " \u0434\u043B\u044F \u043B\u044E\u0431\u044B\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u043D \u0434\u0435\u043B\u0430\u0435\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "\u0421\u0430\u043C\u044B\u0439 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E - \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u043E\u0435 \u041F\u041E \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u0440\u043E\u0441\u0442\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u043A\u0443\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 127
    }
  }, "XSRF-TOKEN"), " \u0432 \u043A\u0430\u0436\u0434\u044B\u0439 \u043E\u0442\u0432\u0435\u0442, \u0430 \u0437\u0430\u0442\u0435\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0442\u043E\u043A\u0435\u043D, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 247
    }
  }, "X-XSRF-TOKEN"), ", \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0432 \u0437\u0430\u043F\u0440\u043E\u0441\u0430\u0445 \u043E\u0442 axios."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/laravel/framework/blob/5.8/src/Illuminate/Foundation/Http/Middleware/VerifyCsrfToken.php#L176-L188"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 44
    }
  }), "Laravel"), ", \u0434\u0435\u043B\u0430\u044E\u0442 \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0442\u043E \u0435\u0441\u0442\u044C \u0442\u0430\u043C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 Laravel, \u043D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043C\u0435\u0442\u0430\u0442\u0435\u0433 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    "class": "bg-gray-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 61
    }
  }, "csrf-token"), " \u0438\u0437 \u0412\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u0442\u0430\u043A \u043A\u0430\u043A \u044D\u0442\u043E \u043F\u043E\u043C\u0435\u0448\u0430\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C\u0443 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E \u0442\u043E\u043A\u0435\u043D\u0430 CSRF."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, "\u041A\u043E\u0433\u0434\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0442\u043E\u043A\u0435\u043D\u0430 CSRF, \u0412\u0430\u0448\u0430 \u0432\u0435\u0431-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430, \u0441\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0432\u044B\u0434\u0430\u0441\u0442 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u043E\u0442\u0432\u0435\u0442\u0443 \u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 Laravel \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 191
    }
  }, "TokenMismatchException"), ", \u0447\u0442\u043E \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442 \u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 297
    }
  }, "419"), ". \u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u044D\u0442\u043E \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 Inertia, \u043E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0432 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u043C \u043E\u043A\u043D\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("video", {
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("source", {
    src: "/mp4/csrf-mismatch-modal.mp4",
    type: "video/mp4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 3
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, "\u041D\u043E \u044D\u0442\u043E \u043D\u0435 \u043B\u0443\u0447\u0448\u0438\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442. \u041B\u0443\u0447\u0448\u0438\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u0441 \u044D\u0442\u0438\u043C\u0438 \u043E\u0448\u0438\u0431\u043A\u0430\u043C\u0438 - \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0444\u043B\u044D\u0448-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u043C \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0441\u0442\u0435\u043A. \u042D\u0442\u043E \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C\u0443 \u043E\u0442\u0432\u0435\u0442\u0443 Inertia \u0441 \u0444\u043B\u044D\u0448-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u043C, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u043A\u0430\u043A \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0412\u044B \u0437\u0430\u0442\u0435\u043C \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435: \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u0432\u043E\u0438\u043C\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/shared-data#%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 408
    }
  }), "\u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u043C\u0438"), " \u0441 Inertia.js, \u0447\u0442\u043E\u0431\u044B \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      description: 'Расширьте метод render() в Вашем App\\Exceptions\\Handler.php.',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, "\u041A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 - \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u043B\u0443\u0447\u0448\u0438\u0439 \u043E\u043F\u044B\u0442 \u0434\u043B\u044F \u0412\u0430\u0448\u0438\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439. \u0412\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043E\u0448\u0438\u0431\u043A\u0438, \u043E\u043D\u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0441\u0442\u0435\u043A, \u0438 \u0438\u0445 \u043F\u0440\u043E\u0441\u044F\u0442 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043F\u043E\u043F\u044B\u0442\u043A\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("video", {
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("source", {
    src: "/mp4/csrf-mismatch-warning.mp4",
    type: "video/mp4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 3
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3NyZi1wcm90ZWN0aW9uLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsYUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLG9CQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsMkJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISTtBQUZXLENBQWI7QUFXUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNTSxTQUFTLEdBQUdDLDBEQUFsQjtBQUVlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFKSyxFQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUdBTEssRUFNTDtBQUFBO0FBQUE7QUFB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Qyw4QkFBWjtBQUEyQyxRQUFJLEVBQUMsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURFLENBOUJLLEVBaUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbS9EQUFtWjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3JhLFlBQVE7QUFENlosR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSEFBblosNEhBakNLLEVBb0NMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsU0FEdUI7QUFFN0JPLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsaUJBQVcsRUFBRSxnRUFIZ0I7QUFJN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFKeUIsS0FBRCxFQXdCM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRE8sY0FBUSxFQUFFLE1BRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBeEIyQixDQUE5QjtBQThCSSxXQUFPLEVBQUMsb0JBOUJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQ0ssRUFtRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxakNBbkVLLEVBb0VMO0FBQU8sWUFBUSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRjtBQUFRLE9BQUcsRUFBQyxnQ0FBWjtBQUE2QyxRQUFJLEVBQUMsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURFLENBcEVLLENBQVA7QUF3RUQ7S0E1RXVCTixVO0FBOEV4QjtBQUNBQSxVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3NyZi1wcm90ZWN0aW9uLjM0Y2EyODk3NTg0MGYxMTA2N2ZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlJ1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ0NTUkYg0LfQsNGJ0LjRgtCwJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0LfQsNC/0YDQvtGB0L7QsicsXG4gICAgbmFtZTogJ9Ch0L7Qt9C00LDQvdC40LUg0LfQsNC/0YDQvtGB0L7QsidcbiAgfSwge1xuICAgIHVybDogJyPQvtCx0YDQsNCx0L7RgtC60LAt0L3QtdGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuScsXG4gICAgbmFtZTogJ9Ce0LHRgNCw0LHQvtGC0LrQsCDQvdC10YHQvtC+0YLQstC10YLRgdGC0LLQuNC5J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntgQ1NSRiDQt9Cw0YnQuNGC0LBgfTwvaDE+XG4gICAgPGgyPntg0KHQvtC30LTQsNC90LjQtSDQt9Cw0L/RgNC+0YHQvtCyYH08L2gyPlxuICAgIDxwPntg0JXRgdC70Lgg0JLQsNGI0LAg0LLQtdCxLdC/0LvQsNGC0YTQvtGA0LzQsCDQstC60LvRjtGH0LDQtdGCINC30LDRidC40YLRgyDQvtGCINC/0L7QtNC00LXQu9C60Lgg0LzQtdC20YHQsNC50YLQvtCy0YvRhSDQt9Cw0L/RgNC+0YHQvtCyIChDU1JGKSwg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INGD0LHQtdC00LjRgtGM0YHRjywg0YfRgtC+INC60LDQttC00YvQuSDQt9Cw0L/RgNC+0YEgSW5lcnRpYSDQstC60LvRjtGH0LDQtdGCINC90LXQvtCx0YXQvtC00LjQvNGL0Lkg0YLQvtC60LXQvSDQtNC70Y8g0LfQsNC/0YDQvtGB0L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQT1NUYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFBVVGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQQVRDSGB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YERFTEVURWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwPntg0J7QtNC90L4g0LjQtyDRgNC10YjQtdC90LjQuSAtINCy0LrQu9GO0YfQsNGC0Ywg0YLQvtC60LXQvSBDU1JGINCyINC60LDRh9C10YHRgtCy0LUg0YHQstC+0LnRgdGC0LLQsCDQsiDQutCw0LbQtNGL0Lkg0L7RgtCy0LXRgi4g0JfQsNGC0LXQvCDQktGLINC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YLQvtC60LXQvSDQv9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0LfQsNC/0YDQvtGB0L7QsiBJbmVydGlhLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2B0aGlzLiRpbmVydGlhLnBvc3QoJy91c2VycycsIHtcbiAgbmFtZTogdGhpcy5uYW1lLFxuICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgX3Rva2VuOiB0aGlzLiRwYWdlLnByb3BzLmNzcmZfdG9rZW4sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQktGLINC00LDQttC1INC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YTRg9C90LrRhtC40Y4gYH08YSBocmVmPVwiL3NoYXJlZC1kYXRhXCI+e2DQvtCx0YnQuNGFINC00LDQvdC90YvRhWB9PC9hPntgICwg0YfRgtC+0LHRiyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQstC60LvRjtGH0LDRgtGMIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNzcmZfdG9rZW5gfTwvaW5saW5lQ29kZT57YCDQsiDQutCw0LbQtNGL0Lkg0L7RgtCy0LXRgi5gfTwvcD5cbiAgICA8cD57YNCe0LTQvdCw0LrQviDQu9GD0YfRiNC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC70Y8g0Y3RgtC+0LPQviDRhNGD0L3QutGG0LjRjiBDU1JGLCDRg9C20LUg0LLRgdGC0YDQvtC10L3QvdGD0Y4g0LIgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvc1wiXG4gICAgICB9fT57YGF4aW9zYH08L2E+e2AuIEF4aW9zIC0g0Y3RgtC+IEhUVFAt0LHQuNCx0LvQuNC+0YLQtdC60LAsINC60L7RgtC+0YDRg9GOIEluZXJ0aWEg0LjRgdC/0L7Qu9GM0LfRg9C10YIg0L/QvtC0INC60LDQv9C+0YLQvtC8LmB9PC9wPlxuICAgIDxwPntgQXhpb3Mg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L/RgNC+0LLQtdGA0Y/QtdGCINC90LDQu9C40YfQuNC1IGNvb2tpZS3RhNCw0LnQu9CwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFhTUkYtVE9LRU5gfTwvaW5saW5lQ29kZT57YC4g0JXRgdC70Lgg0L7QvSDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIsINC+0L0g0LHRg9C00LXRgiDQstC60LvRjtGH0LDRgtGMINGC0L7QutC10L0g0LIg0LfQsNCz0L7Qu9C+0LLQvtC6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtWFNSRi1UT0tFTmB9PC9pbmxpbmVDb2RlPntgINC00LvRjyDQu9GO0LHRi9GFINC30LDQv9GA0L7RgdC+0LIsINC60L7RgtC+0YDRi9C1INC+0L0g0LTQtdC70LDQtdGCLmB9PC9wPlxuICAgIDxwPntg0KHQsNC80YvQuSDQv9GA0L7RgdGC0L7QuSDRgdC/0L7RgdC+0LEg0YDQtdCw0LvQuNC30L7QstCw0YLRjCDRjdGC0L4gLSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0L/RgNC+0LzQtdC20YPRgtC+0YfQvdC+0LUg0J/QniDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwLiDQn9GA0L7RgdGC0L4g0LLQutC70Y7Rh9C40YLQtSDRhNCw0LnQuyDQutGD0LrQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYU1JGLVRPS0VOYH08L2lubGluZUNvZGU+e2Ag0LIg0LrQsNC20LTRi9C5INC+0YLQstC10YIsINCwINC30LDRgtC10Lwg0L/RgNC+0LLQtdGA0YzRgtC1INGC0L7QutC10L0sINC40YHQv9C+0LvRjNC30YPRjyDQt9Cw0LPQvtC70L7QstC+0LogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1YU1JGLVRPS0VOYH08L2lubGluZUNvZGU+e2AsINC+0YLQv9GA0LDQstC70LXQvdC90YvQuSDQsiDQt9Cw0L/RgNC+0YHQsNGFINC+0YIgYXhpb3MuYH08L3A+XG4gICAgPHA+e2DQndC10LrQvtGC0L7RgNGL0LUg0YTRgNC10LnQvNCy0L7RgNC60LgsINGC0LDQutC40LUg0LrQsNC6IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbGFyYXZlbC9mcmFtZXdvcmsvYmxvYi81Ljgvc3JjL0lsbHVtaW5hdGUvRm91bmRhdGlvbi9IdHRwL01pZGRsZXdhcmUvVmVyaWZ5Q3NyZlRva2VuLnBocCNMMTc2LUwxODhcIlxuICAgICAgfX0+e2BMYXJhdmVsYH08L2E+e2AsINC00LXQu9Cw0Y7RgiDRjdGC0L4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LgsINGC0L4g0LXRgdGC0Ywg0YLQsNC8INC60L7QvdGE0LjQs9GD0YDQsNGG0LjRjyDQvdC1INGC0YDQtdCx0YPQtdGC0YHRjy5gfTwvcD5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj5cbiAg0JXRgdC70Lgg0JLRiyDQuNGB0L/QvtC70YzQt9GD0LXRgtC1IExhcmF2ZWwsINC90LUg0LfQsNCx0YPQtNGM0YLQtSDQvtC/0YPRgdGC0LjRgtGMINC80LXRgtCw0YLQtdCzIDxpbmxpbmVDb2RlIGNsYXNzPVwiYmctZ3JheS02MDBcIj5jc3JmLXRva2VuPC9pbmxpbmVDb2RlPiDQuNC3INCS0LDRiNC10LPQviDQv9GA0L7QtdC60YLQsCwg0YLQsNC6INC60LDQuiDRjdGC0L4g0L/QvtC80LXRiNCw0LXRgiDQv9GA0LDQstC40LvRjNC90L7QvNGDINC+0LHQvdC+0LLQu9C10L3QuNGOINGC0L7QutC10L3QsCBDU1JGLlxuICAgIDwvTm90aWNlPlxuICAgIDxoMj57YNCe0LHRgNCw0LHQvtGC0LrQsCDQvdC10YHQvtC+0YLQstC10YLRgdGC0LLQuNC5YH08L2gyPlxuICAgIDxwPntg0JrQvtCz0LTQsCDQv9GA0L7QuNGB0YXQvtC00LjRgiDQvdC10YHQvtC+0YLQstC10YLRgdGC0LLQuNC1INGC0L7QutC10L3QsCBDU1JGLCDQktCw0YjQsCDQstC10LEt0L/Qu9Cw0YLRhNC+0YDQvNCwLCDRgdC60L7RgNC10LUg0LLRgdC10LPQviwg0LLRi9C00LDRgdGCINC40YHQutC70Y7Rh9C10L3QuNC1LCDQutC+0YLQvtGA0L7QtSDQv9GA0LjQstC10LTQtdGCINC6INC+0YLQstC10YLRgyDRgSDQvtGI0LjQsdC60L7QuS4g0J3QsNC/0YDQuNC80LXRgCwg0LIgTGFyYXZlbCDQs9C10L3QtdGA0LjRgNGD0LXRgtGB0Y8g0LjRgdC60LvRjtGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgVG9rZW5NaXNtYXRjaEV4Y2VwdGlvbmB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L4g0L/RgNC40LLQvtC00LjRgiDQuiDRgdGC0YDQsNC90LjRhtC1INGBINC+0YjQuNCx0LrQvtC5IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQxOWB9PC9pbmxpbmVDb2RlPntgLiDQn9C+0YHQutC+0LvRjNC60YMg0Y3RgtC+INC90LXQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3Ri9C5INC+0YLQstC10YIgSW5lcnRpYSwg0L7RiNC40LHQutCwINC+0YLQvtCx0YDQsNC20LDQtdGC0YHRjyDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0L7QutC90LUuYH08L3A+XG4gICAgPHZpZGVvIGNvbnRyb2xzPlxuICA8c291cmNlIHNyYz1cIi9tcDQvY3NyZi1taXNtYXRjaC1tb2RhbC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICA8L3ZpZGVvPlxuICAgIDxwPntg0J3QviDRjdGC0L4g0L3QtSDQu9GD0YfRiNC40Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40Lkg0L7Qv9GL0YIuINCb0YPRh9GI0LjQuSDRgdC/0L7RgdC+0LEg0YHQv9GA0LDQstC40YLRjNGB0Y8g0YEg0Y3RgtC40LzQuCDQvtGI0LjQsdC60LDQvNC4IC0g0LLQtdGA0L3Rg9GC0Ywg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC+0LHRgNCw0YLQvdC+INC90LAg0L/RgNC10LTRi9C00YPRidGD0Y4g0YHRgtGA0LDQvdC40YbRgyDQstC80LXRgdGC0LUg0YEg0YTQu9GN0Ygt0YHQvtC+0LHRidC10L3QuNC10Lwg0L4g0YLQvtC8LCDRh9GC0L4g0YHRgNC+0Log0LTQtdC50YHRgtCy0LjRjyDRgdGC0YDQsNC90LjRhtGLINC40YHRgtC10LouINCt0YLQviDQv9GA0LjQstC10LTQtdGCINC6INC00LXQudGB0YLQstC40YLQtdC70YzQvdC+0LzRgyDQvtGC0LLQtdGC0YMgSW5lcnRpYSDRgSDRhNC70Y3RiC3RgdC+0L7QsdGJ0LXQvdC40LXQvCwg0LTQvtGB0YLRg9C/0L3Ri9C8INC60LDQuiDRgdCy0L7QudGB0YLQstC+LCDQutC+0YLQvtGA0L7QtSDQktGLINC30LDRgtC10Lwg0LzQvtC20LXRgtC1INC+0YLQvtCx0YDQsNC30LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRji4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1OiDQktCw0Lwg0L3Rg9C20L3QviDQsdGD0LTQtdGCINC/0L7QtNC10LvQuNGC0YzRgdGPINGB0LLQvtC40LzQuCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3NoYXJlZC1kYXRhIyVEMCVCMSVEMSU4QiVEMSU4MSVEMSU4MiVEMSU4MCVEMSU4QiVEMCVCNS0lRDElODElRDAlQkUlRDAlQkUlRDAlQjElRDElODklRDAlQjUlRDAlQkQlRDAlQjglRDElOEZcIlxuICAgICAgfX0+e2DQsdGL0YHRgtGA0YvQtSDRgdC+0L7QsdGJ0LXQvdC40Y/QvNC4YH08L2E+e2Ag0YEgSW5lcnRpYS5qcywg0YfRgtC+0LHRiyDRjdGC0L4g0YDQsNCx0L7RgtCw0LvQvi5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgZGVzY3JpcHRpb246ICfQoNCw0YHRiNC40YDRjNGC0LUg0LzQtdGC0L7QtCByZW5kZXIoKSDQsiDQktCw0YjQtdC8IEFwcFxcXFxFeGNlcHRpb25zXFxcXEhhbmRsZXIucGhwLicsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHVzZSBUaHJvd2FibGU7XG4gICAgICAgIHVzZSBJbmVydGlhXFxcXEluZXJ0aWE7XFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDQn9C+0LTQs9C+0YLQvtCy0LjRgtGMINC40YHQutC70Y7Rh9C10L3QuNC1INC00LvRjyDRgNC10L3QtNC10YDQuNC90LPQsC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICBcXFxcVGhyb3dhYmxlICAkZVxuICAgICAgICAgKiBAcmV0dXJuIFxcXFxUaHJvd2FibGVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBmdW5jdGlvbiByZW5kZXIoJHJlcXVlc3QsIFRocm93YWJsZSAkZSlcbiAgICAgICAge1xuICAgICAgICAgICAgJHJlc3BvbnNlID0gcGFyZW50OjpyZW5kZXIoJHJlcXVlc3QsICRlKTtcXG5cbiAgICAgICAgICAgIGlmICgkcmVzcG9uc2UtPnN0YXR1cygpID09PSA0MTkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFjaygpLT53aXRoKFtcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnID0+ICfQodGA0L7QuiDQtNC10LnRgdGC0LLQuNGPINGB0YLRgNCw0L3QuNGG0Ysg0LjRgdGC0LXQuiwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQty4nLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxcblxuICAgICAgICAgICAgcmV0dXJuICRyZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAjIHRvZG9cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQmtC+0L3QtdGH0L3Ri9C5INGA0LXQt9GD0LvRjNGC0LDRgiAtINCz0L7RgNCw0LfQtNC+INC70YPRh9GI0LjQuSDQvtC/0YvRgiDQtNC70Y8g0JLQsNGI0LjRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuS4g0JLQvNC10YHRgtC+INGC0L7Qs9C+LCDRh9GC0L7QsdGLINCy0LjQtNC10YLRjCDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L7RiNC40LHQutC4LCDQvtC90Lgg0L/QvtC70YPRh9Cw0Y7RgiDRgdC+0L7QsdGJ0LXQvdC40LUg0L4g0YLQvtC8LCDRh9GC0L4g0YHRgNC+0Log0LTQtdC50YHRgtCy0LjRjyDRgdGC0YDQsNC90LjRhtGLINC40YHRgtC10LosINC4INC40YUg0L/RgNC+0YHRj9GCINC/0L7QstGC0L7RgNC40YLRjCDQv9C+0L/Ri9GC0LrRgy5gfTwvcD5cbiAgICA8dmlkZW8gY29udHJvbHM+XG4gIDxzb3VyY2Ugc3JjPVwiL21wNC9jc3JmLW1pc21hdGNoLXdhcm5pbmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgPC92aWRlbz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=