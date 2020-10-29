webpackHotUpdate_N_E("pages/error-handling",{

/***/ "./pages/error-handling.mdx":
/*!**********************************!*\
  !*** ./pages/error-handling.mdx ***!
  \**********************************/
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



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\error-handling.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <script>\n          export let status\n\n          $: title = {\n            503: '503: Service Unavailable',\n            500: '500: Server Error',\n            404: '404: Page Not Found',\n            403: '403: Forbidden',\n          }[status]\n\n          $: description = {\n            503: 'Sorry, we are doing some maintenance. Please check back soon.',\n            500: 'Whoops, something went wrong on our servers.',\n            404: 'Sorry, the page you are looking for could not be found.',\n            403: 'Sorry, you are forbidden from accessing this page.',\n          }[status]\n        </script>\n\n        <div>\n          <h1>{title}</h1>\n          <div>{description}</div>\n        </div>\n      "], ["\n        <script>\n          export let status\\n\n          $: title = {\n            503: '503: Service Unavailable',\n            500: '500: Server Error',\n            404: '404: Page Not Found',\n            403: '403: Forbidden',\n          }[status]\\n\n          $: description = {\n            503: 'Sorry, we are doing some maintenance. Please check back soon.',\n            500: 'Whoops, something went wrong on our servers.',\n            404: 'Sorry, the page you are looking for could not be found.',\n            403: 'Sorry, you are forbidden from accessing this page.',\n          }[status]\n        </script>\\n\n        <div>\n          <h1>{title}</h1>\n          <div>{description}</div>\n        </div>\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import React from 'react'\n\n        export default function ErrorPage({ status }) {\n          const title = {\n            503: '503: Service Unavailable',\n            500: '500: Server Error',\n            404: '404: Page Not Found',\n            403: '403: Forbidden',\n          }[status]\n\n          const description = {\n            503: 'Sorry, we are doing some maintenance. Please check back soon.',\n            500: 'Whoops, something went wrong on our servers.',\n            404: 'Sorry, the page you are looking for could not be found.',\n            403: 'Sorry, you are forbidden from accessing this page.',\n          }[status]\n\n          return (\n            <div>\n              <h1>{title}</h1>\n              <div>{description}</div>\n            </div>\n          )\n        }\n      "], ["\n        import React from 'react'\\n\n        export default function ErrorPage({ status }) {\n          const title = {\n            503: '503: Service Unavailable',\n            500: '500: Server Error',\n            404: '404: Page Not Found',\n            403: '403: Forbidden',\n          }[status]\\n\n          const description = {\n            503: 'Sorry, we are doing some maintenance. Please check back soon.',\n            500: 'Whoops, something went wrong on our servers.',\n            404: 'Sorry, the page you are looking for could not be found.',\n            403: 'Sorry, you are forbidden from accessing this page.',\n          }[status]\\n\n          return (\n            <div>\n              <h1>{title}</h1>\n              <div>{description}</div>\n            </div>\n          )\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <template>\n          <div>\n            <h1>{{ title }}</h1>\n            <div>{{ description }}</div>\n          </div>\n        </template>\n\n        <script>\n        export default {\n          props: {\n            status: Number,\n          },\n          computed: {\n            title() {\n              return {\n                503: '503: Service Unavailable',\n                500: '500: Server Error',\n                404: '404: Page Not Found',\n                403: '403: Forbidden',\n              }[this.status]\n            },\n            description() {\n              return {\n                503: 'Sorry, we are doing some maintenance. Please check back soon.',\n                500: 'Whoops, something went wrong on our servers.',\n                404: 'Sorry, the page you are looking for could not be found.',\n                403: 'Sorry, you are forbidden from accessing this page.',\n              }[this.status]\n            },\n          },\n        }\n        </script>\n      "], ["\n        <template>\n          <div>\n            <h1>{{ title }}</h1>\n            <div>{{ description }}</div>\n          </div>\n        </template>\\n\n        <script>\n        export default {\n          props: {\n            status: Number,\n          },\n          computed: {\n            title() {\n              return {\n                503: '503: Service Unavailable',\n                500: '500: Server Error',\n                404: '404: Page Not Found',\n                403: '403: Forbidden',\n              }[this.status]\n            },\n            description() {\n              return {\n                503: 'Sorry, we are doing some maintenance. Please check back soon.',\n                500: 'Whoops, something went wrong on our servers.',\n                404: 'Sorry, the page you are looking for could not be found.',\n                403: 'Sorry, you are forbidden from accessing this page.',\n              }[this.status]\n            },\n          },\n        }\n        </script>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        # todo\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        use Throwable;\n        use Inertia\\Inertia;\n\n        /**\n         * Prepare exception for rendering.\n         *\n         * @param  \\Throwable  $e\n         * @return \\Throwable\n         */\n        public function render($request, Throwable $e)\n        {\n            $response = parent::render($request, $e);\n\n            if (!app()->environment('local') && in_array($response->status(), [500, 503, 404, 403])) {\n                return Inertia::render('Error', ['status' => $response->status()])\n                    ->toResponse($request)\n                    ->setStatusCode($response->status());\n            } else if ($response->status() === 419) {\n                return back()->with([\n                    'message' => 'The page expired, please try again.',\n                ]);\n            }\n\n            return $response;\n        }\n      "], ["\n        use Throwable;\n        use Inertia\\\\Inertia;\\n\n        /**\n         * Prepare exception for rendering.\n         *\n         * @param  \\\\Throwable  $e\n         * @return \\\\Throwable\n         */\n        public function render($request, Throwable $e)\n        {\n            $response = parent::render($request, $e);\\n\n            if (!app()->environment('local') && in_array($response->status(), [500, 503, 404, 403])) {\n                return Inertia::render('Error', ['status' => $response->status()])\n                    ->toResponse($request)\n                    ->setStatusCode($response->status());\n            } else if ($response->status() === 419) {\n                return back()->with([\n                    'message' => 'The page expired, please try again.',\n                ]);\n            }\\n\n            return $response;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Обработка ошибок',
  links: [{
    url: '#development',
    name: 'Development'
  }, {
    url: '#production',
    name: 'Production'
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
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "Development"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430 \u0438\u0437 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u0441\u0442\u043E\u0440\u043E\u043D \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u043E\u0439 - \u044D\u0442\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, Laravel \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/facade/ignition"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 166
    }
  }), "Ignition"), ", \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0445\u043E\u0440\u043E\u0448\u043E \u043E\u0442\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043E\u0432\u043A\u0443 \u0441\u0442\u0435\u043A\u0430 \u043F\u0440\u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0412\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441 XHR (\u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Inertia) \u0438 \u0441\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0412\u0430\u043C \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043F\u0430\u0442\u044C\u0441\u044F \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0441\u0435\u0442\u0438 \u0432 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "Inertia \u0440\u0435\u0448\u0430\u0435\u0442 \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u0432\u0441\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0435 Inertia \u0432 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0412\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u044D\u0442\u043E\u0442 \u0437\u0430\u043F\u0440\u043E\u0441 \u0447\u0435\u0440\u0435\u0437 XHR!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "my-6 relative rounded overflow-hidden bg-gray-500",
    style: {
      paddingTop: '80.5%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "absolute inset-0 w-full h-full flex items-center justify-center text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("iframe", {
    className: "absolute inset-0 w-full h-full",
    src: "https://player.vimeo.com/video/363562630?autoplay=1&loop=1&muted=1&background=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "Production"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "\u0412 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u0432\u044B \u0437\u0430\u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435 \u0438\u043D\u0435\u0440\u0446\u0438\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0432\u0430\u0448\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u043B \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043E\u0448\u0438\u0431\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      description: 'Extend the render() method in your App\\Exceptions\\Handler.php.',
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
      lineNumber: 50,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, "Notice how we're returning an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 42
    }
  }, "Error"), " page component in the example above. You'll need to actually create this. Here's an example error page component you can use as a starting point."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJyb3ItaGFuZGxpbmcubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInBhZGRpbmdUb3AiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsa0JBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxjQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsYUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJO0FBRlcsQ0FBYjtBQVdQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscXdCQUFpSztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ25MLFlBQVE7QUFEMkssR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBakssOHNCQU5LLEVBU0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2OUJBVEssRUFVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHczQkFWSyxFQVdMO0FBQUssYUFBUyxFQUFDLG1EQUFmO0FBQW1FLFNBQUssRUFBRTtBQUN4RUUsZ0JBQVUsRUFBRTtBQUQ0RCxLQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0Y7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFIRSxFQUlGO0FBQVEsYUFBUyxFQUFDLGdDQUFsQjtBQUFtRCxPQUFHLEVBQUMsaUZBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRSxDQVhLLEVBaUJMLDBEQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNGJBakJLLEVBa0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJLLEVBbUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaTJDQW5CSyxFQW9CTCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlAsVUFBSSxFQUFFLFNBRHVCO0FBRTdCUSxjQUFRLEVBQUUsS0FGbUI7QUFHN0JDLGlCQUFXLEVBQUUsa0VBSGdCO0FBSTdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSnlCLEtBQUQsRUE0QjNCO0FBQ0RYLFVBQUksRUFBRSxPQURMO0FBRURRLGNBQVEsRUFBRSxNQUZUO0FBR0RFLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQTVCMkIsQ0FBOUI7QUFrQ0ksV0FBTyxFQUFDLG9CQWxDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJLLEVBdURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQXFDO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBckMsdUpBdkRLLEVBd0RMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCWCxVQUFJLEVBQUUsUUFEdUI7QUFFN0JRLGNBQVEsRUFBRSxNQUZtQjtBQUc3QkUsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBb0MzQjtBQUNEWCxVQUFJLEVBQUUsT0FETDtBQUVEUSxjQUFRLEVBQUUsS0FGVDtBQUdERSxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FwQzJCLEVBOEQzQjtBQUNEWCxVQUFJLEVBQUUsUUFETDtBQUVEUSxjQUFRLEVBQUUsTUFGVDtBQUdERSxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0E5RDJCLENBQTlCO0FBc0ZJLFdBQU8sRUFBQyxvQkF0Rlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhESyxDQUFQO0FBZ0pEO0tBcEp1QlAsVTtBQXNKeEI7QUFDQUEsVUFBVSxDQUFDUSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Vycm9yLWhhbmRsaW5nLmY3ZGQ3M2Q1NTdjNTRiYTBhZmJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlJ1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Ce0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0LonLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcjZGV2ZWxvcG1lbnQnLFxuICAgIG5hbWU6ICdEZXZlbG9wbWVudCdcbiAgfSwge1xuICAgIHVybDogJyNwcm9kdWN0aW9uJyxcbiAgICBuYW1lOiAnUHJvZHVjdGlvbidcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0LpgfTwvaDE+XG4gICAgPGgyPntgRGV2ZWxvcG1lbnRgfTwvaDI+XG4gICAgPHA+e2DQntC00L3QsCDQuNC3INC/0YDQuNGP0YLQvdGL0YUg0YHRgtC+0YDQvtC9INGA0LDQsdC+0YLRiyDRgSDRgdC10YDQstC10YDQvdC+0Lkg0YHRgNC10LTQvtC5IC0g0Y3RgtC+INCy0YHRgtGA0L7QtdC90L3QsNGPINC+0LHRgNCw0LHQvtGC0LrQsCDQuNGB0LrQu9GO0YfQtdC90LjQuSwg0LrQvtGC0L7RgNGD0Y4g0JLRiyDQv9C+0LvRg9GH0LDQtdGC0LUg0LHQtdGB0L/Qu9Cw0YLQvdC+LiDQndCw0L/RgNC40LzQtdGALCBMYXJhdmVsINC/0L7RgdGC0LDQstC70Y/QtdGC0YHRjyDRgSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ZhY2FkZS9pZ25pdGlvblwiXG4gICAgICB9fT57YElnbml0aW9uYH08L2E+e2AsINC60YDQsNGB0LjQstGL0Lwg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtC8INGB0L7QvtCx0YnQtdC90LjRjyDQvtCxINC+0YjQuNCx0LrQsNGFLCDQutC+0YLQvtGA0YvQuSDQvtGC0L7QsdGA0LDQttCw0LXRgiDRhdC+0YDQvtGI0L4g0L7RgtGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC90YPRjiDRgtGA0LDRgdGB0LjRgNC+0LLQutGDINGB0YLQtdC60LAg0L/RgNC4INC70L7QutCw0LvRjNC90L7QuSDRgNCw0LfRgNCw0LHQvtGC0LrQtS5gfTwvcD5cbiAgICA8cD57YNCf0YDQvtCx0LvQtdC80LAg0LIg0YLQvtC8LCDRh9GC0L4g0LXRgdC70Lgg0JLRiyDQtNC10LvQsNC10YLQtSDQt9Cw0L/RgNC+0YEgWEhSICjRh9GC0L4g0LTQtdC70LDQtdGCIEluZXJ0aWEpINC4INGB0YLQsNC70LrQuNCy0LDQtdGC0LXRgdGMINGBINC+0YjQuNCx0LrQvtC5INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAsINCS0LDQvCDQvtCx0YvRh9C90L4g0L7RgdGC0LDQtdGC0YHRjyDQutC+0L/QsNGC0YzRgdGPINCy0L4g0LLQutC70LDQtNC60LUg0YHQtdGC0Lgg0LIg0LjQvdGB0YLRgNGD0LzQtdC90YLQsNGFINGA0LDQt9GA0LDQsdC+0YLQutC4INCS0LDRiNC10LPQviDQsdGA0LDRg9C30LXRgNCwLmB9PC9wPlxuICAgIDxwPntgSW5lcnRpYSDRgNC10YjQsNC10YIg0Y3RgtGDINC/0YDQvtCx0LvQtdC80YMsINC/0L7QutCw0LfRi9Cy0LDRjyDQstGB0LUg0L7RgtCy0LXRgtGLINC90LUgSW5lcnRpYSDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0YDQtdC20LjQvNC1LiDQrdGC0L4g0L7Qt9C90LDRh9Cw0LXRgiwg0YfRgtC+INCS0Ysg0L/QvtC70YPRh9C40YLQtSDRgtCw0LrQvtC5INC20LUg0LrRgNCw0YHQuNCy0YvQuSDQvtGC0YfQtdGCINC+0LEg0L7RiNC40LHQutCw0YUsINC00LDQttC1INC10YHQu9C4INCS0Ysg0YHQtNC10LvQsNC70Lgg0Y3RgtC+0YIg0LfQsNC/0YDQvtGBINGH0LXRgNC10LcgWEhSIWB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiByZWxhdGl2ZSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTUwMFwiIHN0eWxlPXt7XG4gICAgICBwYWRkaW5nVG9wOiAnODAuNSUnXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc21cIj7Ql9Cw0LPRgNGD0LfQutCwJmhlbGxpcDs8L2Rpdj5cbiAgPGlmcmFtZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGxcIiBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMzYzNTYyNjMwP2F1dG9wbGF5PTEmbG9vcD0xJm11dGVkPTEmYmFja2dyb3VuZD0xXCI+PC9pZnJhbWU+XG4gICAgPC9kaXY+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDQvNC+0LTQsNC70YzQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1INC/0YDQtdC00L3QsNC30L3QsNGH0LXQvdC+INGC0L7Qu9GM0LrQviDQtNC70Y8g0YbQtdC70LXQuSDRgNCw0LfRgNCw0LHQvtGC0LrQuC48L05vdGljZT5cbiAgICA8aDI+e2BQcm9kdWN0aW9uYH08L2gyPlxuICAgIDxwPntg0JIg0L/RgNC+0LjQt9Cy0L7QtNGB0YLQstC1INCy0Ysg0LfQsNGF0L7RgtC40YLQtSDQstC10YDQvdGD0YLRjCDQv9GA0LDQstC40LvRjNC90YvQuSDQvtGC0LLQtdGCINC+0LEg0L7RiNC40LHQutC1INC40L3QtdGA0YbQuNC4INCy0LzQtdGB0YLQviDRgtC+0LPQviwg0YfRgtC+0LHRiyDQv9C+0LvQsNCz0LDRgtGM0YHRjyDQvdCwINC80L7QtNCw0LvRjNC90L7QtSDQv9C+0LLQtdC00LXQvdC40LUuINCU0LvRjyDRjdGC0L7Qs9C+INCy0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQvtCx0L3QvtCy0LjRgtGMINC+0LHRgNCw0LHQvtGC0YfQuNC6INC40YHQutC70Y7Rh9C10L3QuNC5INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINCy0LDRiNC10Lkg0L/Qu9Cw0YLRhNC+0YDQvNGLLCDRh9GC0L7QsdGLINC+0L0g0LLQvtC30LLRgNCw0YnQsNC7INC90LDRgdGC0YDQsNC40LLQsNC10LzRg9GOINGB0YLRgNCw0L3QuNGG0YMg0L7RiNC40LHQutC4LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0V4dGVuZCB0aGUgcmVuZGVyKCkgbWV0aG9kIGluIHlvdXIgQXBwXFxcXEV4Y2VwdGlvbnNcXFxcSGFuZGxlci5waHAuJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgdXNlIFRocm93YWJsZTtcbiAgICAgICAgdXNlIEluZXJ0aWFcXFxcSW5lcnRpYTtcXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXBhcmUgZXhjZXB0aW9uIGZvciByZW5kZXJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgXFxcXFRocm93YWJsZSAgJGVcbiAgICAgICAgICogQHJldHVybiBcXFxcVGhyb3dhYmxlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZnVuY3Rpb24gcmVuZGVyKCRyZXF1ZXN0LCBUaHJvd2FibGUgJGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgICRyZXNwb25zZSA9IHBhcmVudDo6cmVuZGVyKCRyZXF1ZXN0LCAkZSk7XFxuXG4gICAgICAgICAgICBpZiAoIWFwcCgpLT5lbnZpcm9ubWVudCgnbG9jYWwnKSAmJiBpbl9hcnJheSgkcmVzcG9uc2UtPnN0YXR1cygpLCBbNTAwLCA1MDMsIDQwNCwgNDAzXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdFcnJvcicsIFsnc3RhdHVzJyA9PiAkcmVzcG9uc2UtPnN0YXR1cygpXSlcbiAgICAgICAgICAgICAgICAgICAgLT50b1Jlc3BvbnNlKCRyZXF1ZXN0KVxuICAgICAgICAgICAgICAgICAgICAtPnNldFN0YXR1c0NvZGUoJHJlc3BvbnNlLT5zdGF0dXMoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCRyZXNwb25zZS0+c3RhdHVzKCkgPT09IDQxOSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYWNrKCktPndpdGgoW1xuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZScgPT4gJ1RoZSBwYWdlIGV4cGlyZWQsIHBsZWFzZSB0cnkgYWdhaW4uJyxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cXG5cbiAgICAgICAgICAgIHJldHVybiAkcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgIyB0b2RvXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgTm90aWNlIGhvdyB3ZSdyZSByZXR1cm5pbmcgYW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRXJyb3JgfTwvaW5saW5lQ29kZT57YCBwYWdlIGNvbXBvbmVudCBpbiB0aGUgZXhhbXBsZSBhYm92ZS4gWW91J2xsIG5lZWQgdG8gYWN0dWFsbHkgY3JlYXRlIHRoaXMuIEhlcmUncyBhbiBleGFtcGxlIGVycm9yIHBhZ2UgY29tcG9uZW50IHlvdSBjYW4gdXNlIGFzIGEgc3RhcnRpbmcgcG9pbnQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxuICAgICAgICAgICAgPGRpdj57eyBkZXNjcmlwdGlvbiB9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHN0YXR1czogTnVtYmVyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgICAgICAgNTAwOiAnNTAwOiBTZXJ2ZXIgRXJyb3InLFxuICAgICAgICAgICAgICAgIDQwNDogJzQwNDogUGFnZSBOb3QgRm91bmQnLFxuICAgICAgICAgICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJyxcbiAgICAgICAgICAgICAgfVt0aGlzLnN0YXR1c11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICA1MDM6ICdTb3JyeSwgd2UgYXJlIGRvaW5nIHNvbWUgbWFpbnRlbmFuY2UuIFBsZWFzZSBjaGVjayBiYWNrIHNvb24uJyxcbiAgICAgICAgICAgICAgICA1MDA6ICdXaG9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIG9uIG91ciBzZXJ2ZXJzLicsXG4gICAgICAgICAgICAgICAgNDA0OiAnU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgICAgICAgICAgNDAzOiAnU29ycnksIHlvdSBhcmUgZm9yYmlkZGVuIGZyb20gYWNjZXNzaW5nIHRoaXMgcGFnZS4nLFxuICAgICAgICAgICAgICB9W3RoaXMuc3RhdHVzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JQYWdlKHsgc3RhdHVzIH0pIHtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHtcbiAgICAgICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgICA1MDA6ICc1MDA6IFNlcnZlciBFcnJvcicsXG4gICAgICAgICAgICA0MDQ6ICc0MDQ6IFBhZ2UgTm90IEZvdW5kJyxcbiAgICAgICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJyxcbiAgICAgICAgICB9W3N0YXR1c11cXG5cbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgIDUwMzogJ1NvcnJ5LCB3ZSBhcmUgZG9pbmcgc29tZSBtYWludGVuYW5jZS4gUGxlYXNlIGNoZWNrIGJhY2sgc29vbi4nLFxuICAgICAgICAgICAgNTAwOiAnV2hvb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgc2VydmVycy4nLFxuICAgICAgICAgICAgNDA0OiAnU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgICAgICA0MDM6ICdTb3JyeSwgeW91IGFyZSBmb3JiaWRkZW4gZnJvbSBhY2Nlc3NpbmcgdGhpcyBwYWdlLicsXG4gICAgICAgICAgfVtzdGF0dXNdXFxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgZXhwb3J0IGxldCBzdGF0dXNcXG5cbiAgICAgICAgICAkOiB0aXRsZSA9IHtcbiAgICAgICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgICA1MDA6ICc1MDA6IFNlcnZlciBFcnJvcicsXG4gICAgICAgICAgICA0MDQ6ICc0MDQ6IFBhZ2UgTm90IEZvdW5kJyxcbiAgICAgICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJyxcbiAgICAgICAgICB9W3N0YXR1c11cXG5cbiAgICAgICAgICAkOiBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgIDUwMzogJ1NvcnJ5LCB3ZSBhcmUgZG9pbmcgc29tZSBtYWludGVuYW5jZS4gUGxlYXNlIGNoZWNrIGJhY2sgc29vbi4nLFxuICAgICAgICAgICAgNTAwOiAnV2hvb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgc2VydmVycy4nLFxuICAgICAgICAgICAgNDA0OiAnU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgICAgICA0MDM6ICdTb3JyeSwgeW91IGFyZSBmb3JiaWRkZW4gZnJvbSBhY2Nlc3NpbmcgdGhpcyBwYWdlLicsXG4gICAgICAgICAgfVtzdGF0dXNdXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==