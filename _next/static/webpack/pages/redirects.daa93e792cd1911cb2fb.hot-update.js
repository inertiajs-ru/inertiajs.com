webpackHotUpdate_N_E("pages/redirects",{

/***/ "./pages/redirects.mdx":
/*!*****************************!*\
  !*** ./pages/redirects.mdx ***!
  \*****************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dedent-js */ "./node_modules/dedent-js/lib/index.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dedent_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\redirects.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        # todo\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        return Inertia::location($url);\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        class UsersController < ApplicationController\n          def index\n            render inertia: 'Users/Index', props: {users: User.all}\n          end\n\n          def create\n            User.create params.require(:user).permit(:name, :email)\n\n            redirect_to users_path\n          end\n        end\n      "], ["\n        class UsersController < ApplicationController\n          def index\n            render inertia: 'Users/Index', props: {users: User.all}\n          end\\n\n          def create\n            User.create params.require(:user).permit(:name, :email)\\n\n            redirect_to users_path\n          end\n        end\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        class UsersController extends Controller\n        {\n            public function index()\n            {\n                return Inertia::render('Users/Index', [\n                    'users' => User::all(),\n                ]);\n            }\n\n            public function store()\n            {\n                User::create(\n                    Request::validate([\n                        'name' => ['required', 'max:50'],\n                        'email' => ['required', 'max:50', 'email'],\n                    ])\n                );\n\n                return Redirect::route('users');\n            }\n        }\n      "], ["\n        class UsersController extends Controller\n        {\n            public function index()\n            {\n                return Inertia::render('Users/Index', [\n                    'users' => User::all(),\n                ]);\n            }\\n\n            public function store()\n            {\n                User::create(\n                    Request::validate([\n                        'name' => ['required', 'max:50'],\n                        'email' => ['required', 'max:50', 'email'],\n                    ])\n                );\\n\n                return Redirect::route('users');\n            }\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Перенаправления',
  links: [{
    url: '#top',
    name: 'Making redirects'
  }, {
    url: '#303-response-code',
    name: '303 response code'
  }, {
    url: '#external-redirects',
    name: 'External redirects'
  }]
};
var layoutProps = {
  meta: meta
};
var MDXLayout = _components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u041F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "When making a non-GET Inertia request, via ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 55
    }
  }, "<inertia-link>"), " or manually, be sure to always respond with a proper Inertia response."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "For example, if you're creating a new user, have your \"store\" endpoint return a redirect back to a standard GET endpoint, such as your user index page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "Inertia will automatically follow this redirect and update the page accordingly. Here's a simplified example."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
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
      lineNumber: 40,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, "303 response code"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, "Note, when redirecting after a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 43
    }
  }, "PUT"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 96
    }
  }, "PATCH"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 153
    }
  }, "DELETE"), " request you must use a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 231
    }
  }, "303"), " response code, otherwise the subsequent request will not be treated as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 356
    }
  }, "GET"), " request. A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 419
    }
  }, "303"), " redirect is the same as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 497
    }
  }, "302"), " except that the follow-up request is explicitly changed to a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 610
    }
  }, "GET"), " request."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, "If you're using one of our official server-side adapters, redirects will automatically be converted."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, "External redirects"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "Sometimes it's necessary to redirect to an external website, or even another non-Inertia endpoint in your app, within an Inertia request. This is possible using a server-side initiated ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 197
    }
  }, "window.location"), " visit."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, "This will generate a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "409 Conflict"), " response, which includes the destination URL in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 146
    }
  }, "X-Inertia-Location"), " header. Client-side, Inertia will detect this response and automatically do a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 291
    }
  }, "window.location = url"), " visit."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVkaXJlY3RzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJsYW5ndWFnZSIsImNvZGUiLCJkZWRlbnQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsaUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsb0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSxxQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JO0FBRlcsQ0FBYjtBQWNQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQUpLLEVBS0w7QUFBQTtBQUFBO0FB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUE5UixZQWpFSyxDQUFQO0FBbUVEO0tBdkV1QkwsVTtBQXlFeEI7QUFDQUEsVUFBVSxDQUFDTSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZGlyZWN0cy5kYWE5M2U3OTJjZDE5MTFjYjJmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cf0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjRjycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyN0b3AnLFxuICAgIG5hbWU6ICdNYWtpbmcgcmVkaXJlY3RzJ1xuICB9LCB7XG4gICAgdXJsOiAnIzMwMy1yZXNwb25zZS1jb2RlJyxcbiAgICBuYW1lOiAnMzAzIHJlc3BvbnNlIGNvZGUnXG4gIH0sIHtcbiAgICB1cmw6ICcjZXh0ZXJuYWwtcmVkaXJlY3RzJyxcbiAgICBuYW1lOiAnRXh0ZXJuYWwgcmVkaXJlY3RzJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0J/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNGPYH08L2gxPlxuICAgIDxwPntgV2hlbiBtYWtpbmcgYSBub24tR0VUIEluZXJ0aWEgcmVxdWVzdCwgdmlhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxpbmVydGlhLWxpbms+YH08L2lubGluZUNvZGU+e2Agb3IgbWFudWFsbHksIGJlIHN1cmUgdG8gYWx3YXlzIHJlc3BvbmQgd2l0aCBhIHByb3BlciBJbmVydGlhIHJlc3BvbnNlLmB9PC9wPlxuICAgIDxwPntgRm9yIGV4YW1wbGUsIGlmIHlvdSdyZSBjcmVhdGluZyBhIG5ldyB1c2VyLCBoYXZlIHlvdXIgXCJzdG9yZVwiIGVuZHBvaW50IHJldHVybiBhIHJlZGlyZWN0IGJhY2sgdG8gYSBzdGFuZGFyZCBHRVQgZW5kcG9pbnQsIHN1Y2ggYXMgeW91ciB1c2VyIGluZGV4IHBhZ2UuYH08L3A+XG4gICAgPHA+e2BJbmVydGlhIHdpbGwgYXV0b21hdGljYWxseSBmb2xsb3cgdGhpcyByZWRpcmVjdCBhbmQgdXBkYXRlIHRoZSBwYWdlIGFjY29yZGluZ2x5LiBIZXJlJ3MgYSBzaW1wbGlmaWVkIGV4YW1wbGUuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgVXNlcnNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gaW5kZXgoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ1VzZXJzL0luZGV4JywgW1xuICAgICAgICAgICAgICAgICAgICAndXNlcnMnID0+IFVzZXI6OmFsbCgpLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxcblxuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIHN0b3JlKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBVc2VyOjpjcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3Q6OnZhbGlkYXRlKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJyA9PiBbJ3JlcXVpcmVkJywgJ21heDo1MCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VtYWlsJyA9PiBbJ3JlcXVpcmVkJywgJ21heDo1MCcsICdlbWFpbCddLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICk7XFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZGlyZWN0Ojpyb3V0ZSgndXNlcnMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIgPCBBcHBsaWNhdGlvbkNvbnRyb2xsZXJcbiAgICAgICAgICBkZWYgaW5kZXhcbiAgICAgICAgICAgIHJlbmRlciBpbmVydGlhOiAnVXNlcnMvSW5kZXgnLCBwcm9wczoge3VzZXJzOiBVc2VyLmFsbH1cbiAgICAgICAgICBlbmRcXG5cbiAgICAgICAgICBkZWYgY3JlYXRlXG4gICAgICAgICAgICBVc2VyLmNyZWF0ZSBwYXJhbXMucmVxdWlyZSg6dXNlcikucGVybWl0KDpuYW1lLCA6ZW1haWwpXFxuXG4gICAgICAgICAgICByZWRpcmVjdF90byB1c2Vyc19wYXRoXG4gICAgICAgICAgZW5kXG4gICAgICAgIGVuZFxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2AzMDMgcmVzcG9uc2UgY29kZWB9PC9oMj5cbiAgICA8cD57YE5vdGUsIHdoZW4gcmVkaXJlY3RpbmcgYWZ0ZXIgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQVVRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUEFUQ0hgfTwvaW5saW5lQ29kZT57YCBvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BERUxFVEVgfTwvaW5saW5lQ29kZT57YCByZXF1ZXN0IHlvdSBtdXN0IHVzZSBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDMwM2B9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlIGNvZGUsIG90aGVyd2lzZSB0aGUgc3Vic2VxdWVudCByZXF1ZXN0IHdpbGwgbm90IGJlIHRyZWF0ZWQgYXMgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCByZXF1ZXN0LiBBIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDMwM2B9PC9pbmxpbmVDb2RlPntgIHJlZGlyZWN0IGlzIHRoZSBzYW1lIGFzIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgMzAyYH08L2lubGluZUNvZGU+e2AgZXhjZXB0IHRoYXQgdGhlIGZvbGxvdy11cCByZXF1ZXN0IGlzIGV4cGxpY2l0bHkgY2hhbmdlZCB0byBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEdFVGB9PC9pbmxpbmVDb2RlPntgIHJlcXVlc3QuYH08L3A+XG4gICAgPHA+e2BJZiB5b3UncmUgdXNpbmcgb25lIG9mIG91ciBvZmZpY2lhbCBzZXJ2ZXItc2lkZSBhZGFwdGVycywgcmVkaXJlY3RzIHdpbGwgYXV0b21hdGljYWxseSBiZSBjb252ZXJ0ZWQuYH08L3A+XG4gICAgPGgyPntgRXh0ZXJuYWwgcmVkaXJlY3RzYH08L2gyPlxuICAgIDxwPntgU29tZXRpbWVzIGl0J3MgbmVjZXNzYXJ5IHRvIHJlZGlyZWN0IHRvIGFuIGV4dGVybmFsIHdlYnNpdGUsIG9yIGV2ZW4gYW5vdGhlciBub24tSW5lcnRpYSBlbmRwb2ludCBpbiB5b3VyIGFwcCwgd2l0aGluIGFuIEluZXJ0aWEgcmVxdWVzdC4gVGhpcyBpcyBwb3NzaWJsZSB1c2luZyBhIHNlcnZlci1zaWRlIGluaXRpYXRlZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3aW5kb3cubG9jYXRpb25gfTwvaW5saW5lQ29kZT57YCB2aXNpdC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICByZXR1cm4gSW5lcnRpYTo6bG9jYXRpb24oJHVybCk7XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgICMgdG9kb1xuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YFRoaXMgd2lsbCBnZW5lcmF0ZSBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwOSBDb25mbGljdGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlLCB3aGljaCBpbmNsdWRlcyB0aGUgZGVzdGluYXRpb24gVVJMIGluIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtTG9jYXRpb25gfTwvaW5saW5lQ29kZT57YCBoZWFkZXIuIENsaWVudC1zaWRlLCBJbmVydGlhIHdpbGwgZGV0ZWN0IHRoaXMgcmVzcG9uc2UgYW5kIGF1dG9tYXRpY2FsbHkgZG8gYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3aW5kb3cubG9jYXRpb24gPSB1cmxgfTwvaW5saW5lQ29kZT57YCB2aXNpdC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=