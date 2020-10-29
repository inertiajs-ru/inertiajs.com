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
  }, "\u041E\u0434\u043D\u0430 \u0438\u0437 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u0441\u0442\u043E\u0440\u043E\u043D \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u043E\u0439 - \u044D\u0442\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, Laravel \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
  }, "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0432\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441 XHR (\u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Inertia) \u0438 \u0441\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0432\u0430\u043C \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043F\u0430\u0442\u044C\u0441\u044F \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0441\u0435\u0442\u0438 \u0432 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "Inertia \u0440\u0435\u0448\u0430\u0435\u0442 \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u0432\u0441\u0435 \u043D\u0435\u0438\u043D\u0435\u0440\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u0432 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0432\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u044D\u0442\u043E\u0442 \u0437\u0430\u043F\u0440\u043E\u0441 \u0447\u0435\u0440\u0435\u0437 XHR!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
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
  }, "Loading\u2026"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("iframe", {
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
  }, "Note, the modal behaviour is only intended for development purposes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "In production you'll want to return a proper Inertia error response instead of relying on the modal behaviour. To do this you'll need to update your framework's default exception handler to return a custom error page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJyb3ItaGFuZGxpbmcubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInBhZGRpbmdUb3AiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsa0JBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxjQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsYUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJO0FBRlcsQ0FBYjtBQVdQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscXdCQUFpSztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ25MLFlBQVE7QUFEMkssR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBakssOHNCQU5LLEVBU0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2OUJBVEssRUFVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHc3QkFWSyxFQVdMO0FBQUssYUFBUyxFQUFDLG1EQUFmO0FBQW1FLFNBQUssRUFBRTtBQUN4RUUsZ0JBQVUsRUFBRTtBQUQ0RCxLQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0Y7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRSxFQUlGO0FBQVEsYUFBUyxFQUFDLGdDQUFsQjtBQUFtRCxPQUFHLEVBQUMsaUZBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRSxDQVhLLEVBaUJMLDBEQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBakJLLEVBa0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJLLEVBbUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaU9BbkJLLEVBb0JMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCUCxVQUFJLEVBQUUsU0FEdUI7QUFFN0JRLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsaUJBQVcsRUFBRSxrRUFIZ0I7QUFJN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFKeUIsS0FBRCxFQTRCM0I7QUFDRFgsVUFBSSxFQUFFLE9BREw7QUFFRFEsY0FBUSxFQUFFLE1BRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBNUIyQixDQUE5QjtBQWtDSSxXQUFPLEVBQUMsb0JBbENaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkssRUF1REw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBcUM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFyQyx1SkF2REssRUF3REwsMERBQUMsc0VBQUQ7QUFBb0IsWUFBUSxFQUFFLENBQUM7QUFDN0JYLFVBQUksRUFBRSxRQUR1QjtBQUU3QlEsY0FBUSxFQUFFLE1BRm1CO0FBRzdCRSxVQUFJLEVBQUVDLGdEQUFGO0FBSHlCLEtBQUQsRUFvQzNCO0FBQ0RYLFVBQUksRUFBRSxPQURMO0FBRURRLGNBQVEsRUFBRSxLQUZUO0FBR0RFLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQXBDMkIsRUE4RDNCO0FBQ0RYLFVBQUksRUFBRSxRQURMO0FBRURRLGNBQVEsRUFBRSxNQUZUO0FBR0RFLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQTlEMkIsQ0FBOUI7QUFzRkksV0FBTyxFQUFDLG9CQXRGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeERLLENBQVA7QUFnSkQ7S0FwSnVCUCxVO0FBc0p4QjtBQUNBQSxVQUFVLENBQUNRLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXJyb3ItaGFuZGxpbmcuYjExY2Q3Mzk1NzFkZDFiYmQ1NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QuicsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyNkZXZlbG9wbWVudCcsXG4gICAgbmFtZTogJ0RldmVsb3BtZW50J1xuICB9LCB7XG4gICAgdXJsOiAnI3Byb2R1Y3Rpb24nLFxuICAgIG5hbWU6ICdQcm9kdWN0aW9uJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QumB9PC9oMT5cbiAgICA8aDI+e2BEZXZlbG9wbWVudGB9PC9oMj5cbiAgICA8cD57YNCe0LTQvdCwINC40Lcg0L/RgNC40Y/RgtC90YvRhSDRgdGC0L7RgNC+0L0g0YDQsNCx0L7RgtGLINGBINGB0LXRgNCy0LXRgNC90L7QuSDRgdGA0LXQtNC+0LkgLSDRjdGC0L4g0LLRgdGC0YDQvtC10L3QvdCw0Y8g0L7QsdGA0LDQsdC+0YLQutCwINC40YHQutC70Y7Rh9C10L3QuNC5LCDQutC+0YLQvtGA0YPRjiDQstGLINC/0L7Qu9GD0YfQsNC10YLQtSDQsdC10YHQv9C70LDRgtC90L4uINCd0LDQv9GA0LjQvNC10YAsIExhcmF2ZWwg0L/QvtGB0YLQsNCy0LvRj9C10YLRgdGPINGBIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZmFjYWRlL2lnbml0aW9uXCJcbiAgICAgIH19PntgSWduaXRpb25gfTwvYT57YCwg0LrRgNCw0YHQuNCy0YvQvCDQuNC90YHRgtGA0YPQvNC10L3RgtC+0Lwg0YHQvtC+0LHRidC10L3QuNGPINC+0LEg0L7RiNC40LHQutCw0YUsINC60L7RgtC+0YDRi9C5INC+0YLQvtCx0YDQsNC20LDQtdGCINGF0L7RgNC+0YjQviDQvtGC0YTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90L3Rg9GOINGC0YDQsNGB0YHQuNGA0L7QstC60YMg0YHRgtC10LrQsCDQv9GA0Lgg0LvQvtC60LDQu9GM0L3QvtC5INGA0LDQt9GA0LDQsdC+0YLQutC1LmB9PC9wPlxuICAgIDxwPntg0J/RgNC+0LHQu9C10LzQsCDQsiDRgtC+0LwsINGH0YLQviDQtdGB0LvQuCDQstGLINC00LXQu9Cw0LXRgtC1INC30LDQv9GA0L7RgSBYSFIgKNGH0YLQviDQtNC10LvQsNC10YIgSW5lcnRpYSkg0Lgg0YHRgtCw0LvQutC40LLQsNC10YLQtdGB0Ywg0YEg0L7RiNC40LHQutC+0Lkg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCwg0LLQsNC8INC+0LHRi9GH0L3QviDQvtGB0YLQsNC10YLRgdGPINC60L7Qv9Cw0YLRjNGB0Y8g0LLQviDQstC60LvQsNC00LrQtSDRgdC10YLQuCDQsiDQuNC90YHRgtGA0YPQvNC10L3RgtCw0YUg0YDQsNC30YDQsNCx0L7RgtC60Lgg0LLQsNGI0LXQs9C+INCx0YDQsNGD0LfQtdGA0LAuYH08L3A+XG4gICAgPHA+e2BJbmVydGlhINGA0LXRiNCw0LXRgiDRjdGC0YMg0L/RgNC+0LHQu9C10LzRgywg0L/QvtC60LDQt9GL0LLQsNGPINCy0YHQtSDQvdC10LjQvdC10YDRhtC40L7QvdC90YvQtSDRgNC10LDQutGG0LjQuCDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0YDQtdC20LjQvNC1LiDQrdGC0L4g0L7Qt9C90LDRh9Cw0LXRgiwg0YfRgtC+INCy0Ysg0L/QvtC70YPRh9C40YLQtSDRgtCw0LrQvtC5INC20LUg0LrRgNCw0YHQuNCy0YvQuSDQvtGC0YfQtdGCINC+0LEg0L7RiNC40LHQutCw0YUsINC00LDQttC1INC10YHQu9C4INCy0Ysg0YHQtNC10LvQsNC70Lgg0Y3RgtC+0YIg0LfQsNC/0YDQvtGBINGH0LXRgNC10LcgWEhSIWB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiByZWxhdGl2ZSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTUwMFwiIHN0eWxlPXt7XG4gICAgICBwYWRkaW5nVG9wOiAnODAuNSUnXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc21cIj5Mb2FkaW5nJmhlbGxpcDs8L2Rpdj5cbiAgPGlmcmFtZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGxcIiBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMzYzNTYyNjMwP2F1dG9wbGF5PTEmbG9vcD0xJm11dGVkPTEmYmFja2dyb3VuZD0xXCI+PC9pZnJhbWU+XG4gICAgPC9kaXY+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+Tm90ZSwgdGhlIG1vZGFsIGJlaGF2aW91ciBpcyBvbmx5IGludGVuZGVkIGZvciBkZXZlbG9wbWVudCBwdXJwb3Nlcy48L05vdGljZT5cbiAgICA8aDI+e2BQcm9kdWN0aW9uYH08L2gyPlxuICAgIDxwPntgSW4gcHJvZHVjdGlvbiB5b3UnbGwgd2FudCB0byByZXR1cm4gYSBwcm9wZXIgSW5lcnRpYSBlcnJvciByZXNwb25zZSBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIG1vZGFsIGJlaGF2aW91ci4gVG8gZG8gdGhpcyB5b3UnbGwgbmVlZCB0byB1cGRhdGUgeW91ciBmcmFtZXdvcmsncyBkZWZhdWx0IGV4Y2VwdGlvbiBoYW5kbGVyIHRvIHJldHVybiBhIGN1c3RvbSBlcnJvciBwYWdlLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0V4dGVuZCB0aGUgcmVuZGVyKCkgbWV0aG9kIGluIHlvdXIgQXBwXFxcXEV4Y2VwdGlvbnNcXFxcSGFuZGxlci5waHAuJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgdXNlIFRocm93YWJsZTtcbiAgICAgICAgdXNlIEluZXJ0aWFcXFxcSW5lcnRpYTtcXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXBhcmUgZXhjZXB0aW9uIGZvciByZW5kZXJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgXFxcXFRocm93YWJsZSAgJGVcbiAgICAgICAgICogQHJldHVybiBcXFxcVGhyb3dhYmxlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZnVuY3Rpb24gcmVuZGVyKCRyZXF1ZXN0LCBUaHJvd2FibGUgJGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgICRyZXNwb25zZSA9IHBhcmVudDo6cmVuZGVyKCRyZXF1ZXN0LCAkZSk7XFxuXG4gICAgICAgICAgICBpZiAoIWFwcCgpLT5lbnZpcm9ubWVudCgnbG9jYWwnKSAmJiBpbl9hcnJheSgkcmVzcG9uc2UtPnN0YXR1cygpLCBbNTAwLCA1MDMsIDQwNCwgNDAzXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdFcnJvcicsIFsnc3RhdHVzJyA9PiAkcmVzcG9uc2UtPnN0YXR1cygpXSlcbiAgICAgICAgICAgICAgICAgICAgLT50b1Jlc3BvbnNlKCRyZXF1ZXN0KVxuICAgICAgICAgICAgICAgICAgICAtPnNldFN0YXR1c0NvZGUoJHJlc3BvbnNlLT5zdGF0dXMoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCRyZXNwb25zZS0+c3RhdHVzKCkgPT09IDQxOSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYWNrKCktPndpdGgoW1xuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZScgPT4gJ1RoZSBwYWdlIGV4cGlyZWQsIHBsZWFzZSB0cnkgYWdhaW4uJyxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cXG5cbiAgICAgICAgICAgIHJldHVybiAkcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgIyB0b2RvXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgTm90aWNlIGhvdyB3ZSdyZSByZXR1cm5pbmcgYW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRXJyb3JgfTwvaW5saW5lQ29kZT57YCBwYWdlIGNvbXBvbmVudCBpbiB0aGUgZXhhbXBsZSBhYm92ZS4gWW91J2xsIG5lZWQgdG8gYWN0dWFsbHkgY3JlYXRlIHRoaXMuIEhlcmUncyBhbiBleGFtcGxlIGVycm9yIHBhZ2UgY29tcG9uZW50IHlvdSBjYW4gdXNlIGFzIGEgc3RhcnRpbmcgcG9pbnQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxuICAgICAgICAgICAgPGRpdj57eyBkZXNjcmlwdGlvbiB9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHN0YXR1czogTnVtYmVyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgICAgICAgNTAwOiAnNTAwOiBTZXJ2ZXIgRXJyb3InLFxuICAgICAgICAgICAgICAgIDQwNDogJzQwNDogUGFnZSBOb3QgRm91bmQnLFxuICAgICAgICAgICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJyxcbiAgICAgICAgICAgICAgfVt0aGlzLnN0YXR1c11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICA1MDM6ICdTb3JyeSwgd2UgYXJlIGRvaW5nIHNvbWUgbWFpbnRlbmFuY2UuIFBsZWFzZSBjaGVjayBiYWNrIHNvb24uJyxcbiAgICAgICAgICAgICAgICA1MDA6ICdXaG9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIG9uIG91ciBzZXJ2ZXJzLicsXG4gICAgICAgICAgICAgICAgNDA0OiAnU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgICAgICAgICAgNDAzOiAnU29ycnksIHlvdSBhcmUgZm9yYmlkZGVuIGZyb20gYWNjZXNzaW5nIHRoaXMgcGFnZS4nLFxuICAgICAgICAgICAgICB9W3RoaXMuc3RhdHVzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JQYWdlKHsgc3RhdHVzIH0pIHtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHtcbiAgICAgICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgICA1MDA6ICc1MDA6IFNlcnZlciBFcnJvcicsXG4gICAgICAgICAgICA0MDQ6ICc0MDQ6IFBhZ2UgTm90IEZvdW5kJyxcbiAgICAgICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJyxcbiAgICAgICAgICB9W3N0YXR1c11cXG5cbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgIDUwMzogJ1NvcnJ5LCB3ZSBhcmUgZG9pbmcgc29tZSBtYWludGVuYW5jZS4gUGxlYXNlIGNoZWNrIGJhY2sgc29vbi4nLFxuICAgICAgICAgICAgNTAwOiAnV2hvb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgc2VydmVycy4nLFxuICAgICAgICAgICAgNDA0OiAnU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgICAgICA0MDM6ICdTb3JyeSwgeW91IGFyZSBmb3JiaWRkZW4gZnJvbSBhY2Nlc3NpbmcgdGhpcyBwYWdlLicsXG4gICAgICAgICAgfVtzdGF0dXNdXFxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgZXhwb3J0IGxldCBzdGF0dXNcXG5cbiAgICAgICAgICAkOiB0aXRsZSA9IHtcbiAgICAgICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgICA1MDA6ICc1MDA6IFNlcnZlciBFcnJvcicsXG4gICAgICAgICAgICA0MDQ6ICc0MDQ6IFBhZ2UgTm90IEZvdW5kJyxcbiAgICAgICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJyxcbiAgICAgICAgICB9W3N0YXR1c11cXG5cbiAgICAgICAgICAkOiBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgIDUwMzogJ1NvcnJ5LCB3ZSBhcmUgZG9pbmcgc29tZSBtYWludGVuYW5jZS4gUGxlYXNlIGNoZWNrIGJhY2sgc29vbi4nLFxuICAgICAgICAgICAgNTAwOiAnV2hvb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgc2VydmVycy4nLFxuICAgICAgICAgICAgNDA0OiAnU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgICAgICA0MDM6ICdTb3JyeSwgeW91IGFyZSBmb3JiaWRkZW4gZnJvbSBhY2Nlc3NpbmcgdGhpcyBwYWdlLicsXG4gICAgICAgICAgfVtzdGF0dXNdXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==