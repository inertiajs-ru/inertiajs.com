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
    name: 'Создаем редиректы'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVkaXJlY3RzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJsYW5ndWFnZSIsImNvZGUiLCJkZWRlbnQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsaUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsb0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSxxQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JO0FBRlcsQ0FBYjtBQWNQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFBa0Q7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBbEQsNEVBTEssRUFNTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlLQU5LLEVBT0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxSEFQSyxFQVFMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsU0FEdUI7QUFFN0JPLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBd0IzQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0F4QjJCLENBQTlCO0FBc0NJLFdBQU8sRUFBQyxvQkF0Q1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJLLEVBK0NMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBL0NLLEVBZ0RMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBQXNDO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdEMsUUFBMkY7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUEzRixVQUFvSjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXBKLDhCQUFrTztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWxPLGdGQUErVjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQS9WLGtCQUE4WjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTlaLGlDQUE0ZTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTVlLG9FQUE2bEI7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE3bEIsY0FoREssRUFpREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0R0FqREssRUFrREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFsREssRUFtREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrTUFBZ007QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBaE0sWUFuREssRUFvREwsMERBQUMsc0VBQUQ7QUFBb0IsWUFBUSxFQUFFLENBQUM7QUFDN0JULFVBQUksRUFBRSxTQUR1QjtBQUU3Qk8sY0FBUSxFQUFFLEtBRm1CO0FBRzdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSHlCLEtBQUQsRUFNM0I7QUFDRFQsVUFBSSxFQUFFLE9BREw7QUFFRE8sY0FBUSxFQUFFLE1BRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBTjJCLENBQTlCO0FBWUksV0FBTyxFQUFDLG9CQVpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwREssRUFpRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBNEI7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBNUIsMkRBQTZJO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQTdJLHFGQUE4UjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUE5UixZQWpFSyxDQUFQO0FBbUVEO0tBdkV1QkwsVTtBQXlFeEI7QUFDQUEsVUFBVSxDQUFDTSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZGlyZWN0cy42OTZlM2JmMmNlNWE5NmM1ZjBiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cf0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjRjycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyN0b3AnLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0LXQvCDRgNC10LTQuNGA0LXQutGC0YsnXG4gIH0sIHtcbiAgICB1cmw6ICcjMzAzLXJlc3BvbnNlLWNvZGUnLFxuICAgIG5hbWU6ICczMDMgcmVzcG9uc2UgY29kZSdcbiAgfSwge1xuICAgIHVybDogJyNleHRlcm5hbC1yZWRpcmVjdHMnLFxuICAgIG5hbWU6ICdFeHRlcm5hbCByZWRpcmVjdHMnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQn9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40Y9gfTwvaDE+XG4gICAgPHA+e2BXaGVuIG1ha2luZyBhIG5vbi1HRVQgSW5lcnRpYSByZXF1ZXN0LCB2aWEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGluZXJ0aWEtbGluaz5gfTwvaW5saW5lQ29kZT57YCBvciBtYW51YWxseSwgYmUgc3VyZSB0byBhbHdheXMgcmVzcG9uZCB3aXRoIGEgcHJvcGVyIEluZXJ0aWEgcmVzcG9uc2UuYH08L3A+XG4gICAgPHA+e2BGb3IgZXhhbXBsZSwgaWYgeW91J3JlIGNyZWF0aW5nIGEgbmV3IHVzZXIsIGhhdmUgeW91ciBcInN0b3JlXCIgZW5kcG9pbnQgcmV0dXJuIGEgcmVkaXJlY3QgYmFjayB0byBhIHN0YW5kYXJkIEdFVCBlbmRwb2ludCwgc3VjaCBhcyB5b3VyIHVzZXIgaW5kZXggcGFnZS5gfTwvcD5cbiAgICA8cD57YEluZXJ0aWEgd2lsbCBhdXRvbWF0aWNhbGx5IGZvbGxvdyB0aGlzIHJlZGlyZWN0IGFuZCB1cGRhdGUgdGhlIHBhZ2UgYWNjb3JkaW5nbHkuIEhlcmUncyBhIHNpbXBsaWZpZWQgZXhhbXBsZS5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBpbmRleCgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZXJ0aWE6OnJlbmRlcignVXNlcnMvSW5kZXgnLCBbXG4gICAgICAgICAgICAgICAgICAgICd1c2VycycgPT4gVXNlcjo6YWxsKCksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XFxuXG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gc3RvcmUoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFVzZXI6OmNyZWF0ZShcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdDo6dmFsaWRhdGUoW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZW1haWwnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJywgJ2VtYWlsJ10sXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgKTtcXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVkaXJlY3Q6OnJvdXRlKCd1c2VycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIFVzZXJzQ29udHJvbGxlciA8IEFwcGxpY2F0aW9uQ29udHJvbGxlclxuICAgICAgICAgIGRlZiBpbmRleFxuICAgICAgICAgICAgcmVuZGVyIGluZXJ0aWE6ICdVc2Vycy9JbmRleCcsIHByb3BzOiB7dXNlcnM6IFVzZXIuYWxsfVxuICAgICAgICAgIGVuZFxcblxuICAgICAgICAgIGRlZiBjcmVhdGVcbiAgICAgICAgICAgIFVzZXIuY3JlYXRlIHBhcmFtcy5yZXF1aXJlKDp1c2VyKS5wZXJtaXQoOm5hbWUsIDplbWFpbClcXG5cbiAgICAgICAgICAgIHJlZGlyZWN0X3RvIHVzZXJzX3BhdGhcbiAgICAgICAgICBlbmRcbiAgICAgICAgZW5kXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YDMwMyByZXNwb25zZSBjb2RlYH08L2gyPlxuICAgIDxwPntgTm90ZSwgd2hlbiByZWRpcmVjdGluZyBhZnRlciBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFBVVGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQQVRDSGB9PC9pbmxpbmVDb2RlPntgIG9yIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YERFTEVURWB9PC9pbmxpbmVDb2RlPntgIHJlcXVlc3QgeW91IG11c3QgdXNlIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgMzAzYH08L2lubGluZUNvZGU+e2AgcmVzcG9uc2UgY29kZSwgb3RoZXJ3aXNlIHRoZSBzdWJzZXF1ZW50IHJlcXVlc3Qgd2lsbCBub3QgYmUgdHJlYXRlZCBhcyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEdFVGB9PC9pbmxpbmVDb2RlPntgIHJlcXVlc3QuIEEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgMzAzYH08L2lubGluZUNvZGU+e2AgcmVkaXJlY3QgaXMgdGhlIHNhbWUgYXMgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AzMDJgfTwvaW5saW5lQ29kZT57YCBleGNlcHQgdGhhdCB0aGUgZm9sbG93LXVwIHJlcXVlc3QgaXMgZXhwbGljaXRseSBjaGFuZ2VkIHRvIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgR0VUYH08L2lubGluZUNvZGU+e2AgcmVxdWVzdC5gfTwvcD5cbiAgICA8cD57YElmIHlvdSdyZSB1c2luZyBvbmUgb2Ygb3VyIG9mZmljaWFsIHNlcnZlci1zaWRlIGFkYXB0ZXJzLCByZWRpcmVjdHMgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNvbnZlcnRlZC5gfTwvcD5cbiAgICA8aDI+e2BFeHRlcm5hbCByZWRpcmVjdHNgfTwvaDI+XG4gICAgPHA+e2BTb21ldGltZXMgaXQncyBuZWNlc3NhcnkgdG8gcmVkaXJlY3QgdG8gYW4gZXh0ZXJuYWwgd2Vic2l0ZSwgb3IgZXZlbiBhbm90aGVyIG5vbi1JbmVydGlhIGVuZHBvaW50IGluIHlvdXIgYXBwLCB3aXRoaW4gYW4gSW5lcnRpYSByZXF1ZXN0LiBUaGlzIGlzIHBvc3NpYmxlIHVzaW5nIGEgc2VydmVyLXNpZGUgaW5pdGlhdGVkIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHdpbmRvdy5sb2NhdGlvbmB9PC9pbmxpbmVDb2RlPntgIHZpc2l0LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJldHVybiBJbmVydGlhOjpsb2NhdGlvbigkdXJsKTtcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgIyB0b2RvXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgVGhpcyB3aWxsIGdlbmVyYXRlIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDA5IENvbmZsaWN0YH08L2lubGluZUNvZGU+e2AgcmVzcG9uc2UsIHdoaWNoIGluY2x1ZGVzIHRoZSBkZXN0aW5hdGlvbiBVUkwgaW4gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1Mb2NhdGlvbmB9PC9pbmxpbmVDb2RlPntgIGhlYWRlci4gQ2xpZW50LXNpZGUsIEluZXJ0aWEgd2lsbCBkZXRlY3QgdGhpcyByZXNwb25zZSBhbmQgYXV0b21hdGljYWxseSBkbyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHdpbmRvdy5sb2NhdGlvbiA9IHVybGB9PC9pbmxpbmVDb2RlPntgIHZpc2l0LmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==