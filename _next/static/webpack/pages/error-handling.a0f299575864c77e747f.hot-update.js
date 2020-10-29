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
  }, "One of the nice things about working with a server-side framework is the built-in exception handling you get for free. For example, Laravel ships with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/facade/ignition"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 163
    }
  }), "Ignition"), ", a beautiful error reporting tool which displays a nicely formatted stack trace in local development."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "The challenge is, if you're making an XHR request (which Inertia does), and you hit a server-side error, you're typically left digging through the network tab in your browser's devtools."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "Inertia solves this by showing all non-Inertia responses in a modal. Meaning you get the same beautiful error-reporting, even though you've made that request over XHR!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJyb3ItaGFuZGxpbmcubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInBhZGRpbmdUb3AiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsa0JBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxjQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsYUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJO0FBRlcsQ0FBYjtBQVdQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0tBQThKO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDaEwsWUFBUTtBQUR3SyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE5SiwyR0FOSyxFQVNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa01BVEssRUFVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtLQVZLLEVBV0w7QUFBSyxhQUFTLEVBQUMsbURBQWY7QUFBbUUsU0FBSyxFQUFFO0FBQ3hFRSxnQkFBVSxFQUFFO0FBRDRELEtBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRjtBQUFLLGFBQVMsRUFBQyx5RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhFLEVBSUY7QUFBUSxhQUFTLEVBQUMsZ0NBQWxCO0FBQW1ELE9BQUcsRUFBQyxpRkFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpFLENBWEssRUFpQkwsMERBQUMsMERBQUQ7QUFBUSxXQUFPLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFqQkssRUFrQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQkssRUFtQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpT0FuQkssRUFvQkwsMERBQUMsc0VBQUQ7QUFBb0IsWUFBUSxFQUFFLENBQUM7QUFDN0JQLFVBQUksRUFBRSxTQUR1QjtBQUU3QlEsY0FBUSxFQUFFLEtBRm1CO0FBRzdCQyxpQkFBVyxFQUFFLGtFQUhnQjtBQUk3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUp5QixLQUFELEVBNEIzQjtBQUNEWCxVQUFJLEVBQUUsT0FETDtBQUVEUSxjQUFRLEVBQUUsTUFGVDtBQUdERSxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0E1QjJCLENBQTlCO0FBa0NJLFdBQU8sRUFBQyxvQkFsQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCSyxFQXVETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFxQztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXJDLHVKQXZESyxFQXdETCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlgsVUFBSSxFQUFFLFFBRHVCO0FBRTdCUSxjQUFRLEVBQUUsTUFGbUI7QUFHN0JFLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQW9DM0I7QUFDRFgsVUFBSSxFQUFFLE9BREw7QUFFRFEsY0FBUSxFQUFFLEtBRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBcEMyQixFQThEM0I7QUFDRFgsVUFBSSxFQUFFLFFBREw7QUFFRFEsY0FBUSxFQUFFLE1BRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBOUQyQixDQUE5QjtBQXNGSSxXQUFPLEVBQUMsb0JBdEZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4REssQ0FBUDtBQWdKRDtLQXBKdUJQLFU7QUFzSnhCO0FBQ0FBLFVBQVUsQ0FBQ1EsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcnJvci1oYW5kbGluZy5hMGYyOTk1NzU4NjRjNzdlNzQ3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQntCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI2RldmVsb3BtZW50JyxcbiAgICBuYW1lOiAnRGV2ZWxvcG1lbnQnXG4gIH0sIHtcbiAgICB1cmw6ICcjcHJvZHVjdGlvbicsXG4gICAgbmFtZTogJ1Byb2R1Y3Rpb24nXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQntCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6YH08L2gxPlxuICAgIDxoMj57YERldmVsb3BtZW50YH08L2gyPlxuICAgIDxwPntgT25lIG9mIHRoZSBuaWNlIHRoaW5ncyBhYm91dCB3b3JraW5nIHdpdGggYSBzZXJ2ZXItc2lkZSBmcmFtZXdvcmsgaXMgdGhlIGJ1aWx0LWluIGV4Y2VwdGlvbiBoYW5kbGluZyB5b3UgZ2V0IGZvciBmcmVlLiBGb3IgZXhhbXBsZSwgTGFyYXZlbCBzaGlwcyB3aXRoIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZmFjYWRlL2lnbml0aW9uXCJcbiAgICAgIH19PntgSWduaXRpb25gfTwvYT57YCwgYSBiZWF1dGlmdWwgZXJyb3IgcmVwb3J0aW5nIHRvb2wgd2hpY2ggZGlzcGxheXMgYSBuaWNlbHkgZm9ybWF0dGVkIHN0YWNrIHRyYWNlIGluIGxvY2FsIGRldmVsb3BtZW50LmB9PC9wPlxuICAgIDxwPntgVGhlIGNoYWxsZW5nZSBpcywgaWYgeW91J3JlIG1ha2luZyBhbiBYSFIgcmVxdWVzdCAod2hpY2ggSW5lcnRpYSBkb2VzKSwgYW5kIHlvdSBoaXQgYSBzZXJ2ZXItc2lkZSBlcnJvciwgeW91J3JlIHR5cGljYWxseSBsZWZ0IGRpZ2dpbmcgdGhyb3VnaCB0aGUgbmV0d29yayB0YWIgaW4geW91ciBicm93c2VyJ3MgZGV2dG9vbHMuYH08L3A+XG4gICAgPHA+e2BJbmVydGlhIHNvbHZlcyB0aGlzIGJ5IHNob3dpbmcgYWxsIG5vbi1JbmVydGlhIHJlc3BvbnNlcyBpbiBhIG1vZGFsLiBNZWFuaW5nIHlvdSBnZXQgdGhlIHNhbWUgYmVhdXRpZnVsIGVycm9yLXJlcG9ydGluZywgZXZlbiB0aG91Z2ggeW91J3ZlIG1hZGUgdGhhdCByZXF1ZXN0IG92ZXIgWEhSIWB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiByZWxhdGl2ZSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTUwMFwiIHN0eWxlPXt7XG4gICAgICBwYWRkaW5nVG9wOiAnODAuNSUnXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc21cIj5Mb2FkaW5nJmhlbGxpcDs8L2Rpdj5cbiAgPGlmcmFtZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGxcIiBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMzYzNTYyNjMwP2F1dG9wbGF5PTEmbG9vcD0xJm11dGVkPTEmYmFja2dyb3VuZD0xXCI+PC9pZnJhbWU+XG4gICAgPC9kaXY+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+Tm90ZSwgdGhlIG1vZGFsIGJlaGF2aW91ciBpcyBvbmx5IGludGVuZGVkIGZvciBkZXZlbG9wbWVudCBwdXJwb3Nlcy48L05vdGljZT5cbiAgICA8aDI+e2BQcm9kdWN0aW9uYH08L2gyPlxuICAgIDxwPntgSW4gcHJvZHVjdGlvbiB5b3UnbGwgd2FudCB0byByZXR1cm4gYSBwcm9wZXIgSW5lcnRpYSBlcnJvciByZXNwb25zZSBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIG1vZGFsIGJlaGF2aW91ci4gVG8gZG8gdGhpcyB5b3UnbGwgbmVlZCB0byB1cGRhdGUgeW91ciBmcmFtZXdvcmsncyBkZWZhdWx0IGV4Y2VwdGlvbiBoYW5kbGVyIHRvIHJldHVybiBhIGN1c3RvbSBlcnJvciBwYWdlLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0V4dGVuZCB0aGUgcmVuZGVyKCkgbWV0aG9kIGluIHlvdXIgQXBwXFxcXEV4Y2VwdGlvbnNcXFxcSGFuZGxlci5waHAuJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgdXNlIFRocm93YWJsZTtcbiAgICAgICAgdXNlIEluZXJ0aWFcXFxcSW5lcnRpYTtcXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXBhcmUgZXhjZXB0aW9uIGZvciByZW5kZXJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgXFxcXFRocm93YWJsZSAgJGVcbiAgICAgICAgICogQHJldHVybiBcXFxcVGhyb3dhYmxlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZnVuY3Rpb24gcmVuZGVyKCRyZXF1ZXN0LCBUaHJvd2FibGUgJGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgICRyZXNwb25zZSA9IHBhcmVudDo6cmVuZGVyKCRyZXF1ZXN0LCAkZSk7XFxuXG4gICAgICAgICAgICBpZiAoIWFwcCgpLT5lbnZpcm9ubWVudCgnbG9jYWwnKSAmJiBpbl9hcnJheSgkcmVzcG9uc2UtPnN0YXR1cygpLCBbNTAwLCA1MDMsIDQwNCwgNDAzXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdFcnJvcicsIFsnc3RhdHVzJyA9PiAkcmVzcG9uc2UtPnN0YXR1cygpXSlcbiAgICAgICAgICAgICAgICAgICAgLT50b1Jlc3BvbnNlKCRyZXF1ZXN0KVxuICAgICAgICAgICAgICAgICAgICAtPnNldFN0YXR1c0NvZGUoJHJlc3BvbnNlLT5zdGF0dXMoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCRyZXNwb25zZS0+c3RhdHVzKCkgPT09IDQxOSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYWNrKCktPndpdGgoW1xuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZScgPT4gJ1RoZSBwYWdlIGV4cGlyZWQsIHBsZWFzZSB0cnkgYWdhaW4uJyxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cXG5cbiAgICAgICAgICAgIHJldHVybiAkcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgIyB0b2RvXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgTm90aWNlIGhvdyB3ZSdyZSByZXR1cm5pbmcgYW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRXJyb3JgfTwvaW5saW5lQ29kZT57YCBwYWdlIGNvbXBvbmVudCBpbiB0aGUgZXhhbXBsZSBhYm92ZS4gWW91J2xsIG5lZWQgdG8gYWN0dWFsbHkgY3JlYXRlIHRoaXMuIEhlcmUncyBhbiBleGFtcGxlIGVycm9yIHBhZ2UgY29tcG9uZW50IHlvdSBjYW4gdXNlIGFzIGEgc3RhcnRpbmcgcG9pbnQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxuICAgICAgICAgICAgPGRpdj57eyBkZXNjcmlwdGlvbiB9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHN0YXR1czogTnVtYmVyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgICAgICAgNTAwOiAnNTAwOiBTZXJ2ZXIgRXJyb3InLFxuICAgICAgICAgICAgICAgIDQwNDogJzQwNDogUGFnZSBOb3QgRm91bmQnLFxuICAgICAgICAgICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJyxcbiAgICAgICAgICAgICAgfVt0aGlzLnN0YXR1c11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICA1MDM6ICdTb3JyeSwgd2UgYXJlIGRvaW5nIHNvbWUgbWFpbnRlbmFuY2UuIFBsZWFzZSBjaGVjayBiYWNrIHNvb24uJyxcbiAgICAgICAgICAgICAgICA1MDA6ICdXaG9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIG9uIG91ciBzZXJ2ZXJzLicsXG4gICAgICAgICAgICAgICAgNDA0OiAnU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgICAgICAgICAgNDAzOiAnU29ycnksIHlvdSBhcmUgZm9yYmlkZGVuIGZyb20gYWNjZXNzaW5nIHRoaXMgcGFnZS4nLFxuICAgICAgICAgICAgICB9W3RoaXMuc3RhdHVzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JQYWdlKHsgc3RhdHVzIH0pIHtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHtcbiAgICAgICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgICA1MDA6ICc1MDA6IFNlcnZlciBFcnJvcicsXG4gICAgICAgICAgICA0MDQ6ICc0MDQ6IFBhZ2UgTm90IEZvdW5kJyxcbiAgICAgICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJyxcbiAgICAgICAgICB9W3N0YXR1c11cXG5cbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgIDUwMzogJ1NvcnJ5LCB3ZSBhcmUgZG9pbmcgc29tZSBtYWludGVuYW5jZS4gUGxlYXNlIGNoZWNrIGJhY2sgc29vbi4nLFxuICAgICAgICAgICAgNTAwOiAnV2hvb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgc2VydmVycy4nLFxuICAgICAgICAgICAgNDA0OiAnU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgICAgICA0MDM6ICdTb3JyeSwgeW91IGFyZSBmb3JiaWRkZW4gZnJvbSBhY2Nlc3NpbmcgdGhpcyBwYWdlLicsXG4gICAgICAgICAgfVtzdGF0dXNdXFxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgZXhwb3J0IGxldCBzdGF0dXNcXG5cbiAgICAgICAgICAkOiB0aXRsZSA9IHtcbiAgICAgICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgICA1MDA6ICc1MDA6IFNlcnZlciBFcnJvcicsXG4gICAgICAgICAgICA0MDQ6ICc0MDQ6IFBhZ2UgTm90IEZvdW5kJyxcbiAgICAgICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJyxcbiAgICAgICAgICB9W3N0YXR1c11cXG5cbiAgICAgICAgICAkOiBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgIDUwMzogJ1NvcnJ5LCB3ZSBhcmUgZG9pbmcgc29tZSBtYWludGVuYW5jZS4gUGxlYXNlIGNoZWNrIGJhY2sgc29vbi4nLFxuICAgICAgICAgICAgNTAwOiAnV2hvb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgc2VydmVycy4nLFxuICAgICAgICAgICAgNDA0OiAnU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgICAgICA0MDM6ICdTb3JyeSwgeW91IGFyZSBmb3JiaWRkZW4gZnJvbSBhY2Nlc3NpbmcgdGhpcyBwYWdlLicsXG4gICAgICAgICAgfVtzdGF0dXNdXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==