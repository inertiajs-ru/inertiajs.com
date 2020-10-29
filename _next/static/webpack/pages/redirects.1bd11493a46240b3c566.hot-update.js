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
    url: '#303-код-ответа',
    name: '303 код ответа'
  }, {
    url: '#внешние-перенаправления',
    name: 'Внешние перенаправления'
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
  }, "\u041F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 Inertia, \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043E\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 57
    }
  }, "GET"), ", \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 116
    }
  }, "<inertia-link>"), " \u0438\u043B\u0438 \u0432\u0440\u0443\u0447\u043D\u0443\u044E, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u043C \u043E\u0442\u0432\u0435\u0442\u043E\u043C Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0435\u0441\u043B\u0438 \u0412\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u043F\u0443\u0441\u0442\u044C \u0412\u0430\u0448\u0430 \u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430 \"store\" \u0432\u0435\u0440\u043D\u0435\u0442 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0435\u0447\u043D\u0443\u044E \u0442\u043E\u0447\u043A\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 155
    }
  }, "GET"), ", \u0442\u0430\u043A\u0443\u044E \u043A\u0430\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u043D\u0434\u0435\u043A\u0441\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0437\u0430 \u044D\u0442\u0438\u043C \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0431\u043D\u043E\u0432\u0438\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. \u0412\u043E\u0442 \u0443\u043F\u0440\u043E\u0449\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0438\u043C\u0435\u0440."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "303 \u043A\u043E\u0434 \u043E\u0442\u0432\u0435\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435: \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 65
    }
  }, "PUT"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 118
    }
  }, "PATCH"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 176
    }
  }, "DELETE"), " request you must use a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 254
    }
  }, "303"), " response code, otherwise the subsequent request will not be treated as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 379
    }
  }, "GET"), " request. A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 442
    }
  }, "303"), " redirect is the same as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 520
    }
  }, "302"), " except that the follow-up request is explicitly changed to a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 633
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
  }, "\u0412\u043D\u0435\u0448\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVkaXJlY3RzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJsYW5ndWFnZSIsImNvZGUiLCJkZWRlbnQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsaUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsaUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSwwQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JO0FBRlcsQ0FBYjtBQWNQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpTkFBb0Q7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFwRCx1Q0FBK0c7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBL0csb1ZBTEssRUFNTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDh0QkFBc0o7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF0Siw4TkFOSyxFQU9MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNG5CQVBLLEVBUUwsMERBQUMsc0VBQUQ7QUFBb0IsWUFBUSxFQUFFLENBQUM7QUFDN0JMLFVBQUksRUFBRSxTQUR1QjtBQUU3Qk8sY0FBUSxFQUFFLEtBRm1CO0FBRzdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSHlCLEtBQUQsRUF3QjNCO0FBQ0RULFVBQUksRUFBRSxPQURMO0FBRURPLGNBQVEsRUFBRSxNQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQXhCMkIsQ0FBOUI7QUFzQ0ksV0FBTyxFQUFDLG9CQXRDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkssRUErQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRUEvQ0ssRUFnREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvU0FBNEQ7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE1RCxRQUFpSDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWpILDBCQUEySztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQTNLLDhCQUF5UDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXpQLGdGQUFzWDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXRYLGtCQUFxYjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXJiLGlDQUFtZ0I7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFuZ0Isb0VBQW9uQjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXBuQixjQWhESyxFQWlETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRHQWpESyxFQWtETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZJQWxESyxFQW1ETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtNQUFnTTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFoTSxZQW5ESyxFQW9ETCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlQsVUFBSSxFQUFFLFNBRHVCO0FBRTdCTyxjQUFRLEVBQUUsS0FGbUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQU0zQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FOMkIsQ0FBOUI7QUFZSSxXQUFPLEVBQUMsb0JBWlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBESyxFQWlFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUE0QjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUE1QiwyREFBNkk7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBN0kscUZBQThSO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQTlSLFlBakVLLENBQVA7QUFtRUQ7S0F2RXVCTCxVO0FBeUV4QjtBQUNBQSxVQUFVLENBQUNNLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVkaXJlY3RzLjFiZDExNDkzYTQ2MjQwYjNjNTY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0J/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNGPJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI3RvcCcsXG4gICAgbmFtZTogJ9Ch0L7Qt9C00LDQtdC8INGA0LXQtNC40YDQtdC60YLRiydcbiAgfSwge1xuICAgIHVybDogJyMzMDMt0LrQvtC0LdC+0YLQstC10YLQsCcsXG4gICAgbmFtZTogJzMwMyDQutC+0LQg0L7RgtCy0LXRgtCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9Cy0L3QtdGI0L3QuNC1LdC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjRjycsXG4gICAgbmFtZTogJ9CS0L3QtdGI0L3QuNC1INC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjRjydcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCf0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjRj2B9PC9oMT5cbiAgICA8cD57YNCf0YDQuCDQstGL0L/QvtC70L3QtdC90LjQuCDQt9Cw0L/RgNC+0YHQsCBJbmVydGlhLCDQvtGC0LvQuNGH0L3QvtCz0L4g0L7RgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCwg0YfQtdGA0LXQtyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8aW5lcnRpYS1saW5rPmB9PC9pbmxpbmVDb2RlPntgINC40LvQuCDQstGA0YPRh9C90YPRjiwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQstGB0LXQs9C00LAg0L7RgtCy0LXRh9Cw0LnRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8IEluZXJ0aWEuYH08L3A+XG4gICAgPHA+e2DQndCw0L/RgNC40LzQtdGALCDQtdGB0LvQuCDQktGLINGB0L7Qt9C00LDQtdGC0LUg0L3QvtCy0L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0L/Rg9GB0YLRjCDQktCw0YjQsCDQutC+0L3QtdGH0L3QsNGPINGC0L7Rh9C60LAgXCJzdG9yZVwiINCy0LXRgNC90LXRgiDQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40LUg0L7QsdGA0LDRgtC90L4g0L3QsCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC60L7QvdC10YfQvdGD0Y4g0YLQvtGH0LrRgyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCwg0YLQsNC60YPRjiDQutCw0Log0YHRgtGA0LDQvdC40YbQsCDQuNC90LTQtdC60YHQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8uYH08L3A+XG4gICAgPHA+e2BJbmVydGlhINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC/0L7RgdC70LXQtNGD0LXRgiDQt9CwINGN0YLQuNC8INC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjQtdC8INC4INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LjQvCDQvtCx0YDQsNC30L7QvCDQvtCx0L3QvtCy0LjRgiDRgdGC0YDQsNC90LjRhtGDLiDQktC+0YIg0YPQv9GA0L7RidC10L3QvdGL0Lkg0L/RgNC40LzQtdGALmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIFVzZXJzQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIGluZGV4KClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdVc2Vycy9JbmRleCcsIFtcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJzJyA9PiBVc2VyOjphbGwoKSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cXG5cbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzdG9yZSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVXNlcjo6Y3JlYXRlKFxuICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0Ojp2YWxpZGF0ZShbXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZScgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdlbWFpbCcgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnLCAnZW1haWwnXSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICApO1xcblxuICAgICAgICAgICAgICAgIHJldHVybiBSZWRpcmVjdDo6cm91dGUoJ3VzZXJzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgVXNlcnNDb250cm9sbGVyIDwgQXBwbGljYXRpb25Db250cm9sbGVyXG4gICAgICAgICAgZGVmIGluZGV4XG4gICAgICAgICAgICByZW5kZXIgaW5lcnRpYTogJ1VzZXJzL0luZGV4JywgcHJvcHM6IHt1c2VyczogVXNlci5hbGx9XG4gICAgICAgICAgZW5kXFxuXG4gICAgICAgICAgZGVmIGNyZWF0ZVxuICAgICAgICAgICAgVXNlci5jcmVhdGUgcGFyYW1zLnJlcXVpcmUoOnVzZXIpLnBlcm1pdCg6bmFtZSwgOmVtYWlsKVxcblxuICAgICAgICAgICAgcmVkaXJlY3RfdG8gdXNlcnNfcGF0aFxuICAgICAgICAgIGVuZFxuICAgICAgICBlbmRcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntgMzAzINC60L7QtCDQvtGC0LLQtdGC0LBgfTwvaDI+XG4gICAgPHA+e2DQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LU6INC/0YDQuCDQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40Lgg0L/QvtGB0LvQtSDQt9Cw0L/RgNC+0YHQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQVVRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUEFUQ0hgfTwvaW5saW5lQ29kZT57YCDQuNC70LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgREVMRVRFYH08L2lubGluZUNvZGU+e2AgcmVxdWVzdCB5b3UgbXVzdCB1c2UgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AzMDNgfTwvaW5saW5lQ29kZT57YCByZXNwb25zZSBjb2RlLCBvdGhlcndpc2UgdGhlIHN1YnNlcXVlbnQgcmVxdWVzdCB3aWxsIG5vdCBiZSB0cmVhdGVkIGFzIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgR0VUYH08L2lubGluZUNvZGU+e2AgcmVxdWVzdC4gQSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AzMDNgfTwvaW5saW5lQ29kZT57YCByZWRpcmVjdCBpcyB0aGUgc2FtZSBhcyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDMwMmB9PC9pbmxpbmVDb2RlPntgIGV4Y2VwdCB0aGF0IHRoZSBmb2xsb3ctdXAgcmVxdWVzdCBpcyBleHBsaWNpdGx5IGNoYW5nZWQgdG8gYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCByZXF1ZXN0LmB9PC9wPlxuICAgIDxwPntgSWYgeW91J3JlIHVzaW5nIG9uZSBvZiBvdXIgb2ZmaWNpYWwgc2VydmVyLXNpZGUgYWRhcHRlcnMsIHJlZGlyZWN0cyB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY29udmVydGVkLmB9PC9wPlxuICAgIDxoMj57YNCS0L3QtdGI0L3QuNC1INC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjRj2B9PC9oMj5cbiAgICA8cD57YFNvbWV0aW1lcyBpdCdzIG5lY2Vzc2FyeSB0byByZWRpcmVjdCB0byBhbiBleHRlcm5hbCB3ZWJzaXRlLCBvciBldmVuIGFub3RoZXIgbm9uLUluZXJ0aWEgZW5kcG9pbnQgaW4geW91ciBhcHAsIHdpdGhpbiBhbiBJbmVydGlhIHJlcXVlc3QuIFRoaXMgaXMgcG9zc2libGUgdXNpbmcgYSBzZXJ2ZXItc2lkZSBpbml0aWF0ZWQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2luZG93LmxvY2F0aW9uYH08L2lubGluZUNvZGU+e2AgdmlzaXQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgcmV0dXJuIEluZXJ0aWE6OmxvY2F0aW9uKCR1cmwpO1xuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAjIHRvZG9cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BUaGlzIHdpbGwgZ2VuZXJhdGUgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MDkgQ29uZmxpY3RgfTwvaW5saW5lQ29kZT57YCByZXNwb25zZSwgd2hpY2ggaW5jbHVkZXMgdGhlIGRlc3RpbmF0aW9uIFVSTCBpbiB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLUxvY2F0aW9uYH08L2lubGluZUNvZGU+e2AgaGVhZGVyLiBDbGllbnQtc2lkZSwgSW5lcnRpYSB3aWxsIGRldGVjdCB0aGlzIHJlc3BvbnNlIGFuZCBhdXRvbWF0aWNhbGx5IGRvIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2luZG93LmxvY2F0aW9uID0gdXJsYH08L2lubGluZUNvZGU+e2AgdmlzaXQuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9