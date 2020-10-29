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
  }, "\u0412 production \u0412\u044B \u0437\u0430\u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435 \u0438\u043D\u0435\u0440\u0446\u0438\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0412\u0430\u0448\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u043B \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043E\u0448\u0438\u0431\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043A\u0430\u043A \u0432 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u043C \u0432\u044B\u0448\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 95
    }
  }, "Error"), ". \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u044D\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C. \u0412\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJyb3ItaGFuZGxpbmcubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInBhZGRpbmdUb3AiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsa0JBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxjQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsYUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJO0FBRlcsQ0FBYjtBQVdQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscXdCQUFpSztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ25MLFlBQVE7QUFEMkssR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBakssOHNCQU5LLEVBU0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2OUJBVEssRUFVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHczQkFWSyxFQVdMO0FBQUssYUFBUyxFQUFDLG1EQUFmO0FBQW1FLFNBQUssRUFBRTtBQUN4RUUsZ0JBQVUsRUFBRTtBQUQ0RCxLQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0Y7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFIRSxFQUlGO0FBQVEsYUFBUyxFQUFDLGdDQUFsQjtBQUFtRCxPQUFHLEVBQUMsaUZBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRSxDQVhLLEVBaUJMLDBEQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNGJBakJLLEVBa0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJLLEVBbUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbXlDQW5CSyxFQW9CTCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlAsVUFBSSxFQUFFLFNBRHVCO0FBRTdCUSxjQUFRLEVBQUUsS0FGbUI7QUFHN0JDLGlCQUFXLEVBQUUsa0VBSGdCO0FBSTdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSnlCLEtBQUQsRUE0QjNCO0FBQ0RYLFVBQUksRUFBRSxPQURMO0FBRURRLGNBQVEsRUFBRSxNQUZUO0FBR0RFLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQTVCMkIsQ0FBOUI7QUFrQ0ksV0FBTyxFQUFDLG9CQWxDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJLLEVBdURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK2JBQTBGO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMUYsdXBCQXZESyxFQXdETCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlgsVUFBSSxFQUFFLFFBRHVCO0FBRTdCUSxjQUFRLEVBQUUsTUFGbUI7QUFHN0JFLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQW9DM0I7QUFDRFgsVUFBSSxFQUFFLE9BREw7QUFFRFEsY0FBUSxFQUFFLEtBRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBcEMyQixFQThEM0I7QUFDRFgsVUFBSSxFQUFFLFFBREw7QUFFRFEsY0FBUSxFQUFFLE1BRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBOUQyQixDQUE5QjtBQXNGSSxXQUFPLEVBQUMsb0JBdEZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4REssQ0FBUDtBQWdKRDtLQXBKdUJQLFU7QUFzSnhCO0FBQ0FBLFVBQVUsQ0FBQ1EsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcnJvci1oYW5kbGluZy5jYjRkNWU4YWFmYjRmYzYzNDdjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQntCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI2RldmVsb3BtZW50JyxcbiAgICBuYW1lOiAnRGV2ZWxvcG1lbnQnXG4gIH0sIHtcbiAgICB1cmw6ICcjcHJvZHVjdGlvbicsXG4gICAgbmFtZTogJ1Byb2R1Y3Rpb24nXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQntCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6YH08L2gxPlxuICAgIDxoMj57YERldmVsb3BtZW50YH08L2gyPlxuICAgIDxwPntg0J7QtNC90LAg0LjQtyDQv9GA0LjRj9GC0L3Ri9GFINGB0YLQvtGA0L7QvSDRgNCw0LHQvtGC0Ysg0YEg0YHQtdGA0LLQtdGA0L3QvtC5INGB0YDQtdC00L7QuSAtINGN0YLQviDQstGB0YLRgNC+0LXQvdC90LDRjyDQvtCx0YDQsNCx0L7RgtC60LAg0LjRgdC60LvRjtGH0LXQvdC40LksINC60L7RgtC+0YDRg9GOINCS0Ysg0L/QvtC70YPRh9Cw0LXRgtC1INCx0LXRgdC/0LvQsNGC0L3Qvi4g0J3QsNC/0YDQuNC80LXRgCwgTGFyYXZlbCDQv9C+0YHRgtCw0LLQu9GP0LXRgtGB0Y8g0YEgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mYWNhZGUvaWduaXRpb25cIlxuICAgICAgfX0+e2BJZ25pdGlvbmB9PC9hPntgLCDQutGA0LDRgdC40LLRi9C8INC40L3RgdGC0YDRg9C80LXQvdGC0L7QvCDRgdC+0L7QsdGJ0LXQvdC40Y8g0L7QsSDQvtGI0LjQsdC60LDRhSwg0LrQvtGC0L7RgNGL0Lkg0L7RgtC+0LHRgNCw0LbQsNC10YIg0YXQvtGA0L7RiNC+INC+0YLRhNC+0YDQvNCw0YLQuNGA0L7QstCw0L3QvdGD0Y4g0YLRgNCw0YHRgdC40YDQvtCy0LrRgyDRgdGC0LXQutCwINC/0YDQuCDQu9C+0LrQsNC70YzQvdC+0Lkg0YDQsNC30YDQsNCx0L7RgtC60LUuYH08L3A+XG4gICAgPHA+e2DQn9GA0L7QsdC70LXQvNCwINCyINGC0L7QvCwg0YfRgtC+INC10YHQu9C4INCS0Ysg0LTQtdC70LDQtdGC0LUg0LfQsNC/0YDQvtGBIFhIUiAo0YfRgtC+INC00LXQu9Cw0LXRgiBJbmVydGlhKSDQuCDRgdGC0LDQu9C60LjQstCw0LXRgtC10YHRjCDRgSDQvtGI0LjQsdC60L7QuSDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwLCDQktCw0Lwg0L7QsdGL0YfQvdC+INC+0YHRgtCw0LXRgtGB0Y8g0LrQvtC/0LDRgtGM0YHRjyDQstC+INCy0LrQu9Cw0LTQutC1INGB0LXRgtC4INCyINC40L3RgdGC0YDRg9C80LXQvdGC0LDRhSDRgNCw0LfRgNCw0LHQvtGC0LrQuCDQktCw0YjQtdCz0L4g0LHRgNCw0YPQt9C10YDQsC5gfTwvcD5cbiAgICA8cD57YEluZXJ0aWEg0YDQtdGI0LDQtdGCINGN0YLRgyDQv9GA0L7QsdC70LXQvNGDLCDQv9C+0LrQsNC30YvQstCw0Y8g0LLRgdC1INC+0YLQstC10YLRiyDQvdC1IEluZXJ0aWEg0LIg0LzQvtC00LDQu9GM0L3QvtC8INGA0LXQttC40LzQtS4g0K3RgtC+INC+0LfQvdCw0YfQsNC10YIsINGH0YLQviDQktGLINC/0L7Qu9GD0YfQuNGC0LUg0YLQsNC60L7QuSDQttC1INC60YDQsNGB0LjQstGL0Lkg0L7RgtGH0LXRgiDQvtCxINC+0YjQuNCx0LrQsNGFLCDQtNCw0LbQtSDQtdGB0LvQuCDQktGLINGB0LTQtdC70LDQu9C4INGN0YLQvtGCINC30LDQv9GA0L7RgSDRh9C10YDQtdC3IFhIUiFgfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTYgcmVsYXRpdmUgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS01MDBcIiBzdHlsZT17e1xuICAgICAgcGFkZGluZ1RvcDogJzgwLjUlJ1xuICAgIH19PlxuICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtXCI+0JfQsNCz0YDRg9C30LrQsCZoZWxsaXA7PC9kaXY+XG4gIDxpZnJhbWUgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsXCIgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzM2MzU2MjYzMD9hdXRvcGxheT0xJmxvb3A9MSZtdXRlZD0xJmJhY2tncm91bmQ9MVwiPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPtCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0LzQvtC00LDQu9GM0L3QvtC1INC/0L7QstC10LTQtdC90LjQtSDQv9GA0LXQtNC90LDQt9C90LDRh9C10L3QviDRgtC+0LvRjNC60L4g0LTQu9GPINGG0LXQu9C10Lkg0YDQsNC30YDQsNCx0L7RgtC60LguPC9Ob3RpY2U+XG4gICAgPGgyPntgUHJvZHVjdGlvbmB9PC9oMj5cbiAgICA8cD57YNCSIHByb2R1Y3Rpb24g0JLRiyDQt9Cw0YXQvtGC0LjRgtC1INCy0LXRgNC90YPRgtGMINC/0YDQsNCy0LjQu9GM0L3Ri9C5INC+0YLQstC10YIg0L7QsSDQvtGI0LjQsdC60LUg0LjQvdC10YDRhtC40Lgg0LLQvNC10YHRgtC+INGC0L7Qs9C+LCDRh9GC0L7QsdGLINC/0L7Qu9Cw0LPQsNGC0YzRgdGPINC90LAg0LzQvtC00LDQu9GM0L3QvtC1INC/0L7QstC10LTQtdC90LjQtS4g0JTQu9GPINGN0YLQvtCz0L4g0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INC+0LHQvdC+0LLQuNGC0Ywg0L7QsdGA0LDQsdC+0YLRh9C40Log0LjRgdC60LvRjtGH0LXQvdC40Lkg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0JLQsNGI0LXQuSDQv9C70LDRgtGE0L7RgNC80YssINGH0YLQvtCx0Ysg0L7QvSDQstC+0LfQstGA0LDRidCw0Lsg0L3QsNGB0YLRgNCw0LjQstCw0LXQvNGD0Y4g0YHRgtGA0LDQvdC40YbRgyDQvtGI0LjQsdC60LguYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRXh0ZW5kIHRoZSByZW5kZXIoKSBtZXRob2QgaW4geW91ciBBcHBcXFxcRXhjZXB0aW9uc1xcXFxIYW5kbGVyLnBocC4nLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICB1c2UgVGhyb3dhYmxlO1xuICAgICAgICB1c2UgSW5lcnRpYVxcXFxJbmVydGlhO1xcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJlcGFyZSBleGNlcHRpb24gZm9yIHJlbmRlcmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICBcXFxcVGhyb3dhYmxlICAkZVxuICAgICAgICAgKiBAcmV0dXJuIFxcXFxUaHJvd2FibGVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBmdW5jdGlvbiByZW5kZXIoJHJlcXVlc3QsIFRocm93YWJsZSAkZSlcbiAgICAgICAge1xuICAgICAgICAgICAgJHJlc3BvbnNlID0gcGFyZW50OjpyZW5kZXIoJHJlcXVlc3QsICRlKTtcXG5cbiAgICAgICAgICAgIGlmICghYXBwKCktPmVudmlyb25tZW50KCdsb2NhbCcpICYmIGluX2FycmF5KCRyZXNwb25zZS0+c3RhdHVzKCksIFs1MDAsIDUwMywgNDA0LCA0MDNdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ0Vycm9yJywgWydzdGF0dXMnID0+ICRyZXNwb25zZS0+c3RhdHVzKCldKVxuICAgICAgICAgICAgICAgICAgICAtPnRvUmVzcG9uc2UoJHJlcXVlc3QpXG4gICAgICAgICAgICAgICAgICAgIC0+c2V0U3RhdHVzQ29kZSgkcmVzcG9uc2UtPnN0YXR1cygpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJHJlc3BvbnNlLT5zdGF0dXMoKSA9PT0gNDE5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhY2soKS0+d2l0aChbXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyA9PiAnVGhlIHBhZ2UgZXhwaXJlZCwgcGxlYXNlIHRyeSBhZ2Fpbi4nLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxcblxuICAgICAgICAgICAgcmV0dXJuICRyZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAjIHRvZG9cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINC60LDQuiDQsiDQv9GA0LjQstC10LTQtdC90L3QvtC8INCy0YvRiNC1INC/0YDQuNC80LXRgNC1INC80Ysg0LLQvtC30LLRgNCw0YnQsNC10Lwg0LrQvtC80L/QvtC90LXQvdGCINGB0YLRgNCw0L3QuNGG0YsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRXJyb3JgfTwvaW5saW5lQ29kZT57YC4g0JLQsNC8INC90YPQttC90L4g0LHRg9C00LXRgiDRjdGC0L4g0YHQvtC30LTQsNGC0YwuINCS0L7RgiDQv9GA0LjQvNC10YAg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiyDQvtGI0LjQsdC60LgsINC60L7RgtC+0YDRi9C5INCS0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDQutCw0YfQtdGB0YLQstC1INC+0YLQv9GA0LDQstC90L7QuSDRgtC+0YfQutC4LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cbiAgICAgICAgICAgIDxkaXY+e3sgZGVzY3JpcHRpb24gfX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzdGF0dXM6IE51bWJlcixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICA1MDM6ICc1MDM6IFNlcnZpY2UgVW5hdmFpbGFibGUnLFxuICAgICAgICAgICAgICAgIDUwMDogJzUwMDogU2VydmVyIEVycm9yJyxcbiAgICAgICAgICAgICAgICA0MDQ6ICc0MDQ6IFBhZ2UgTm90IEZvdW5kJyxcbiAgICAgICAgICAgICAgICA0MDM6ICc0MDM6IEZvcmJpZGRlbicsXG4gICAgICAgICAgICAgIH1bdGhpcy5zdGF0dXNdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgNTAzOiAnU29ycnksIHdlIGFyZSBkb2luZyBzb21lIG1haW50ZW5hbmNlLiBQbGVhc2UgY2hlY2sgYmFjayBzb29uLicsXG4gICAgICAgICAgICAgICAgNTAwOiAnV2hvb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgc2VydmVycy4nLFxuICAgICAgICAgICAgICAgIDQwNDogJ1NvcnJ5LCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGNvdWxkIG5vdCBiZSBmb3VuZC4nLFxuICAgICAgICAgICAgICAgIDQwMzogJ1NvcnJ5LCB5b3UgYXJlIGZvcmJpZGRlbiBmcm9tIGFjY2Vzc2luZyB0aGlzIHBhZ2UuJyxcbiAgICAgICAgICAgICAgfVt0aGlzLnN0YXR1c11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yUGFnZSh7IHN0YXR1cyB9KSB7XG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB7XG4gICAgICAgICAgICA1MDM6ICc1MDM6IFNlcnZpY2UgVW5hdmFpbGFibGUnLFxuICAgICAgICAgICAgNTAwOiAnNTAwOiBTZXJ2ZXIgRXJyb3InLFxuICAgICAgICAgICAgNDA0OiAnNDA0OiBQYWdlIE5vdCBGb3VuZCcsXG4gICAgICAgICAgICA0MDM6ICc0MDM6IEZvcmJpZGRlbicsXG4gICAgICAgICAgfVtzdGF0dXNdXFxuXG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICA1MDM6ICdTb3JyeSwgd2UgYXJlIGRvaW5nIHNvbWUgbWFpbnRlbmFuY2UuIFBsZWFzZSBjaGVjayBiYWNrIHNvb24uJyxcbiAgICAgICAgICAgIDUwMDogJ1dob29wcywgc29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gb3VyIHNlcnZlcnMuJyxcbiAgICAgICAgICAgIDQwNDogJ1NvcnJ5LCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGNvdWxkIG5vdCBiZSBmb3VuZC4nLFxuICAgICAgICAgICAgNDAzOiAnU29ycnksIHlvdSBhcmUgZm9yYmlkZGVuIGZyb20gYWNjZXNzaW5nIHRoaXMgcGFnZS4nLFxuICAgICAgICAgIH1bc3RhdHVzXVxcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGV4cG9ydCBsZXQgc3RhdHVzXFxuXG4gICAgICAgICAgJDogdGl0bGUgPSB7XG4gICAgICAgICAgICA1MDM6ICc1MDM6IFNlcnZpY2UgVW5hdmFpbGFibGUnLFxuICAgICAgICAgICAgNTAwOiAnNTAwOiBTZXJ2ZXIgRXJyb3InLFxuICAgICAgICAgICAgNDA0OiAnNDA0OiBQYWdlIE5vdCBGb3VuZCcsXG4gICAgICAgICAgICA0MDM6ICc0MDM6IEZvcmJpZGRlbicsXG4gICAgICAgICAgfVtzdGF0dXNdXFxuXG4gICAgICAgICAgJDogZGVzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICA1MDM6ICdTb3JyeSwgd2UgYXJlIGRvaW5nIHNvbWUgbWFpbnRlbmFuY2UuIFBsZWFzZSBjaGVjayBiYWNrIHNvb24uJyxcbiAgICAgICAgICAgIDUwMDogJ1dob29wcywgc29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gb3VyIHNlcnZlcnMuJyxcbiAgICAgICAgICAgIDQwNDogJ1NvcnJ5LCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGNvdWxkIG5vdCBiZSBmb3VuZC4nLFxuICAgICAgICAgICAgNDAzOiAnU29ycnksIHlvdSBhcmUgZm9yYmlkZGVuIGZyb20gYWNjZXNzaW5nIHRoaXMgcGFnZS4nLFxuICAgICAgICAgIH1bc3RhdHVzXVxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=