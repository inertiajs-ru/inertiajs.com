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
  }, "DELETE"), " \u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u0434 \u043E\u0442\u0432\u0435\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 265
    }
  }, "303"), ", \u0438\u043D\u0430\u0447\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 372
    }
  }, "GET"), " \u0437\u0430\u043F\u0440\u043E\u0441. \u0420\u0435\u0434\u0438\u0440\u0435\u043A\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 441
    }
  }, "303"), " \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u0435\u043D \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 520
    }
  }, "302"), ", \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u044F\u0432\u043D\u043E \u0437\u0430\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 633
    }
  }, "GET"), " \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVkaXJlY3RzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJsYW5ndWFnZSIsImNvZGUiLCJkZWRlbnQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsaUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsaUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSwwQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JO0FBRlcsQ0FBYjtBQWNQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQUpLLEVBS0w7QUFBQTtBQUFBO0FB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R0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBNUIsMkRBQTZJO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQTdJLHFGQUE4UjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUE5UixZQWpFSyxDQUFQO0FBbUVEO0tBdkV1QkwsVTtBQXlFeEI7QUFDQUEsVUFBVSxDQUFDTSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZGlyZWN0cy4xMGJmZTBiYzg0ZTA1OTcwMmIzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cf0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjRjycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyN0b3AnLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0LXQvCDRgNC10LTQuNGA0LXQutGC0YsnXG4gIH0sIHtcbiAgICB1cmw6ICcjMzAzLdC60L7QtC3QvtGC0LLQtdGC0LAnLFxuICAgIG5hbWU6ICczMDMg0LrQvtC0INC+0YLQstC10YLQsCdcbiAgfSwge1xuICAgIHVybDogJyPQstC90LXRiNC90LjQtS3Qv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40Y8nLFxuICAgIG5hbWU6ICfQktC90LXRiNC90LjQtSDQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40Y8nXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQn9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40Y9gfTwvaDE+XG4gICAgPHA+e2DQn9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0LfQsNC/0YDQvtGB0LAgSW5lcnRpYSwg0L7RgtC70LjRh9C90L7Qs9C+INC+0YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgR0VUYH08L2lubGluZUNvZGU+e2AsINGH0LXRgNC10LcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGluZXJ0aWEtbGluaz5gfTwvaW5saW5lQ29kZT57YCDQuNC70Lgg0LLRgNGD0YfQvdGD0Y4sINC+0LHRj9C30LDRgtC10LvRjNC90L4g0LLRgdC10LPQtNCwINC+0YLQstC10YfQsNC50YLQtSDQv9GA0LDQstC40LvRjNC90YvQvCDQvtGC0LLQtdGC0L7QvCBJbmVydGlhLmB9PC9wPlxuICAgIDxwPntg0J3QsNC/0YDQuNC80LXRgCwg0LXRgdC70Lgg0JLRiyDRgdC+0LfQtNCw0LXRgtC1INC90L7QstC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINC/0YPRgdGC0Ywg0JLQsNGI0LAg0LrQvtC90LXRh9C90LDRjyDRgtC+0YfQutCwIFwic3RvcmVcIiDQstC10YDQvdC10YIg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC+0LHRgNCw0YLQvdC+INC90LAg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQutC+0L3QtdGH0L3Rg9GOINGC0L7Rh9C60YMgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgR0VUYH08L2lubGluZUNvZGU+e2AsINGC0LDQutGD0Y4g0LrQsNC6INGB0YLRgNCw0L3QuNGG0LAg0LjQvdC00LXQutGB0LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLmB9PC9wPlxuICAgIDxwPntgSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQv9C+0YHQu9C10LTRg9C10YIg0LfQsCDRjdGC0LjQvCDQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40LXQvCDQuCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40Lwg0L7QsdGA0LDQt9C+0Lwg0L7QsdC90L7QstC40YIg0YHRgtGA0LDQvdC40YbRgy4g0JLQvtGCINGD0L/RgNC+0YnQtdC90L3Ri9C5INC/0YDQuNC80LXRgC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBpbmRleCgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZXJ0aWE6OnJlbmRlcignVXNlcnMvSW5kZXgnLCBbXG4gICAgICAgICAgICAgICAgICAgICd1c2VycycgPT4gVXNlcjo6YWxsKCksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XFxuXG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gc3RvcmUoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFVzZXI6OmNyZWF0ZShcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdDo6dmFsaWRhdGUoW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZW1haWwnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJywgJ2VtYWlsJ10sXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgKTtcXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVkaXJlY3Q6OnJvdXRlKCd1c2VycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIFVzZXJzQ29udHJvbGxlciA8IEFwcGxpY2F0aW9uQ29udHJvbGxlclxuICAgICAgICAgIGRlZiBpbmRleFxuICAgICAgICAgICAgcmVuZGVyIGluZXJ0aWE6ICdVc2Vycy9JbmRleCcsIHByb3BzOiB7dXNlcnM6IFVzZXIuYWxsfVxuICAgICAgICAgIGVuZFxcblxuICAgICAgICAgIGRlZiBjcmVhdGVcbiAgICAgICAgICAgIFVzZXIuY3JlYXRlIHBhcmFtcy5yZXF1aXJlKDp1c2VyKS5wZXJtaXQoOm5hbWUsIDplbWFpbClcXG5cbiAgICAgICAgICAgIHJlZGlyZWN0X3RvIHVzZXJzX3BhdGhcbiAgICAgICAgICBlbmRcbiAgICAgICAgZW5kXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YDMwMyDQutC+0LQg0L7RgtCy0LXRgtCwYH08L2gyPlxuICAgIDxwPntg0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1OiDQv9GA0Lgg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC4INC/0L7RgdC70LUg0LfQsNC/0YDQvtGB0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUFVUYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFBBVENIYH08L2lubGluZUNvZGU+e2Ag0LjQu9C4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YERFTEVURWB9PC9pbmxpbmVDb2RlPntgINCS0Ysg0LTQvtC70LbQvdGLINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQutC+0LQg0L7RgtCy0LXRgtCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDMwM2B9PC9pbmxpbmVDb2RlPntgLCDQuNC90LDRh9C1INC/0L7RgdC70LXQtNGD0Y7RidC40Lkg0LfQsNC/0YDQvtGBINC90LUg0LHRg9C00LXRgiDRgNCw0YHRgdC80LDRgtGA0LjQstCw0YLRjNGB0Y8g0LrQsNC6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEdFVGB9PC9pbmxpbmVDb2RlPntgINC30LDQv9GA0L7RgS4g0KDQtdC00LjRgNC10LrRgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AzMDNgfTwvaW5saW5lQ29kZT57YCDQsNC90LDQu9C+0LPQuNGH0LXQvSDQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgMzAyYH08L2lubGluZUNvZGU+e2AsINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDRgtC+0LPQviwg0YfRgtC+INC/0L7RgdC70LXQtNGD0Y7RidC40Lkg0LfQsNC/0YDQvtGBINGP0LLQvdC+INC30LDQvNC10L3Rj9C10YLRgdGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEdFVGB9PC9pbmxpbmVDb2RlPntgINC30LDQv9GA0L7RgdC+0LwuYH08L3A+XG4gICAgPHA+e2BJZiB5b3UncmUgdXNpbmcgb25lIG9mIG91ciBvZmZpY2lhbCBzZXJ2ZXItc2lkZSBhZGFwdGVycywgcmVkaXJlY3RzIHdpbGwgYXV0b21hdGljYWxseSBiZSBjb252ZXJ0ZWQuYH08L3A+XG4gICAgPGgyPntg0JLQvdC10YjQvdC40LUg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNGPYH08L2gyPlxuICAgIDxwPntgU29tZXRpbWVzIGl0J3MgbmVjZXNzYXJ5IHRvIHJlZGlyZWN0IHRvIGFuIGV4dGVybmFsIHdlYnNpdGUsIG9yIGV2ZW4gYW5vdGhlciBub24tSW5lcnRpYSBlbmRwb2ludCBpbiB5b3VyIGFwcCwgd2l0aGluIGFuIEluZXJ0aWEgcmVxdWVzdC4gVGhpcyBpcyBwb3NzaWJsZSB1c2luZyBhIHNlcnZlci1zaWRlIGluaXRpYXRlZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3aW5kb3cubG9jYXRpb25gfTwvaW5saW5lQ29kZT57YCB2aXNpdC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICByZXR1cm4gSW5lcnRpYTo6bG9jYXRpb24oJHVybCk7XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgICMgdG9kb1xuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YFRoaXMgd2lsbCBnZW5lcmF0ZSBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwOSBDb25mbGljdGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlLCB3aGljaCBpbmNsdWRlcyB0aGUgZGVzdGluYXRpb24gVVJMIGluIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtTG9jYXRpb25gfTwvaW5saW5lQ29kZT57YCBoZWFkZXIuIENsaWVudC1zaWRlLCBJbmVydGlhIHdpbGwgZGV0ZWN0IHRoaXMgcmVzcG9uc2UgYW5kIGF1dG9tYXRpY2FsbHkgZG8gYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3aW5kb3cubG9jYXRpb24gPSB1cmxgfTwvaW5saW5lQ29kZT57YCB2aXNpdC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=