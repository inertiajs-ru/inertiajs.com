webpackHotUpdate_N_E("pages/routing",{

/***/ "./pages/routing.mdx":
/*!***************************!*\
  !*** ./pages/routing.mdx ***!
  \***************************/
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



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\routing.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        class UsersController < ApplicationController\n          def index\n            render inertia: 'Users/Index', props: {\n              users: User.all.map do |user|\n                user.as_json(\n                  only: [ :id, :name, :email ]\n                ).merge(\n                  edit_url: edit_user_path(user)\n                )\n              end,\n              create_url: new_user_path\n            }\n          end\n        end\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        class UsersController extends Controller\n        {\n            public function index()\n            {\n                return Inertia::render('Users/Index', [\n                    'users' => User::all()->map(function ($user) {\n                        return [\n                            'id' => $user->id,\n                            'name' => $user->name,\n                            'email' => $user->email,\n                            'edit_url' => URL::route('users.edit', $user),\n                        ];\n                    }),\n                    'create_url' => URL::route('users.create'),\n                ]);\n            }\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Маршрутизация',
  links: [{
    url: '#top',
    name: 'Определение маршрутов'
  }, {
    url: '#создание-url-адресов',
    name: 'Создание URL-адресов'
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
      lineNumber: 29,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia \u0432\u0441\u044F \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0412\u0430\u043C \u043D\u0435 \u043D\u0443\u0436\u0435\u043D Vue Router \u0438\u043B\u0438 React Router. \u041F\u0440\u043E\u0441\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u044B, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0412\u0430\u043C\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u0443\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 URL-\u0430\u0434\u0440\u0435\u0441\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C URL-\u0430\u0434\u0440\u0435\u0441\u0430 \u0438\u0437 \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u043E\u0432. \u041E\u0434\u043D\u0430\u043A\u043E \u0443 \u0412\u0430\u0441 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u044D\u0442\u0438\u043C \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A\u0430\u043C \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u0412\u043E\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432 \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u044B \u0441 Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "\u041F\u0435\u0440\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 - \u0441\u043E\u0437\u0434\u0430\u0442\u044C URL-\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u0445 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0442\u043E, \u043A\u0430\u043A \u0432 \u044D\u0442\u043E\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 157
    }
  }, "edit_url"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 216
    }
  }, "create_url"), " \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 286
    }
  }, "Users/Index"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 39,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, "\u0414\u0440\u0443\u0433\u043E\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 - \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043A\u0430\u043A JSON, \u0430 \u0437\u0430\u0442\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E \u0434\u043B\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 URL-\u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u0438\u0437 \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-php"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 10
    }
  }), "<script>\n  let routes = {{ json_encode($routes) }}\n</script>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 Laravel, \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", {
    href: "https://github.com/tightenco/ziggy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 52
    }
  }, "Ziggy"), " library does this for you automatically via a global ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 168
    }
  }, "route()"), " function. If you're using Ziggy with Vue.js, it's helpful to make this function available as a custom ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 326
    }
  }, "$route"), " property so you can use it directly in your templates."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 10
    }
  }), "Vue.prototype.$route = (...args) => route(...args).url()\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 10
    }
  }), "<inertia-link :href=\"$route('users.create')\">Create User</inertia-link>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, "For Ruby on Rails there is a similar library called ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", {
    href: "https://github.com/railsware/js-routes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 64
    }
  }, "JsRoutes"), "."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm91dGluZy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxlQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsTUFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLHVCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBSEk7QUFGVyxDQUFiO0FBV1AsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0ZBSkssRUFLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlJQUxLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpNUJBTkssRUFPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVHQVBLLEVBUUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3cUNBUkssRUFTTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG90QkFBd0o7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBeEosY0FBbU47QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBbk4sb0VBQXlSO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXpSLE1BVEssRUFVTCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QkwsVUFBSSxFQUFFLFNBRHVCO0FBRTdCTyxjQUFRLEVBQUUsS0FGbUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQXNCM0I7QUFDRFQsVUFBSSxFQUFFLE9BREw7QUFFRE8sY0FBUSxFQUFFLE1BRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBdEIyQixDQUE5QjtBQXlDSSxXQUFPLEVBQUMsb0JBekNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSyxFQW9ETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDB6QkFwREssRUFxREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzVCLGlCQUFhO0FBRGUsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFBTCxDQXJESyxFQTJETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdMQUErQztBQUFHLFFBQUksRUFBQyxvQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQS9DLDREQUFtSztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW5LLDZHQUFpVTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpVLDREQTNESyxFQTRETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQUFMLENBNURLLEVBZ0VMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0ZBQUwsQ0FoRUssRUFvRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REFBMkQ7QUFBRyxRQUFJLEVBQUMsd0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBM0QsTUFwRUssQ0FBUDtBQXNFRDtLQTFFdUJMLFU7QUE0RXhCO0FBQ0FBLFVBQVUsQ0FBQ00sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb3V0aW5nLjk0NTY1YzUxMjQ5OTFiNmIwOGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0JzQsNGA0YjRgNGD0YLQuNC30LDRhtC40Y8nLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcjdG9wJyxcbiAgICBuYW1lOiAn0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDQvNCw0YDRiNGA0YPRgtC+0LInXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtC30LTQsNC90LjQtS11cmwt0LDQtNGA0LXRgdC+0LInLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0L3QuNC1IFVSTC3QsNC00YDQtdGB0L7QsidcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCc0LDRgNGI0YDRg9GC0LjQt9Cw0YbQuNGPYH08L2gxPlxuICAgIDxoMj57YNCe0L/RgNC10LTQtdC70LXQvdC40LUg0LzQsNGA0YjRgNGD0YLQvtCyYH08L2gyPlxuICAgIDxwPntg0KEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYSDQstGB0Y8g0LzQsNGA0YjRgNGD0YLQuNC30LDRhtC40Y8g0L7Qv9GA0LXQtNC10LvRj9C10YLRgdGPINC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAuINCt0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0JLQsNC8INC90LUg0L3Rg9C20LXQvSBWdWUgUm91dGVyINC40LvQuCBSZWFjdCBSb3V0ZXIuINCf0YDQvtGB0YLQviDRgdC+0LfQtNCw0LnRgtC1INC80LDRgNGI0YDRg9GC0YssINC40YHQv9C+0LvRjNC30YPRjyDQstGL0LHRgNCw0L3QvdGD0Y4g0JLQsNC80Lgg0YHQtdGA0LLQtdGA0L3Rg9GOINGB0YLRgNGD0LrRgtGD0YDRgy5gfTwvcD5cbiAgICA8aDI+e2DQodC+0LfQtNCw0L3QuNC1IFVSTC3QsNC00YDQtdGB0L7QsmB9PC9oMj5cbiAgICA8cD57YNCd0LXQutC+0YLQvtGA0YvQtSDRgdC10YDQstC10YDQvdGL0LUg0L/Qu9Cw0YLRhNC+0YDQvNGLINC/0L7Qt9Cy0L7Qu9GP0Y7RgiDRgdC+0LfQtNCw0LLQsNGC0YwgVVJMLdCw0LTRgNC10YHQsCDQuNC3INC40LzQtdC90L7QstCw0L3QvdGL0YUg0LzQsNGA0YjRgNGD0YLQvtCyLiDQntC00L3QsNC60L4g0YMg0JLQsNGBINC90LUg0LHRg9C00LXRgiDQtNC+0YHRgtGD0L/QsCDQuiDRjdGC0LjQvCDQv9C+0LzQvtGJ0L3QuNC60LDQvCDQvdCwINGB0YLQvtGA0L7QvdC1INC60LvQuNC10L3RgtCwLiDQktC+0YIg0L3QtdGB0LrQvtC70YzQutC+INGB0L/QvtGB0L7QsdC+0LIg0L/Qvi3Qv9GA0LXQttC90LXQvNGDINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQuNC80LXQvdC+0LLQsNC90L3Ri9C1INC80LDRgNGI0YDRg9GC0Ysg0YEgSW5lcnRpYS5gfTwvcD5cbiAgICA8cD57YNCf0LXRgNCy0YvQuSDQstCw0YDQuNCw0L3RgiAtINGB0L7Qt9C00LDRgtGMIFVSTC3QsNC00YDQtdGB0LAg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCDQuCDQstC60LvRjtGH0LjRgtGMINC40YUg0LIg0LrQsNGH0LXRgdGC0LLQtSDRgdCy0L7QudGB0YLQsi4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1INC90LAg0YLQviwg0LrQsNC6INCyINGN0YLQvtC8INC/0YDQuNC80LXRgNC1INC80Ysg0L/QtdGA0LXQtNCw0LXQvCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BlZGl0X3VybGB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNyZWF0ZV91cmxgfTwvaW5saW5lQ29kZT57YCDQutC+0LzQv9C+0L3QtdC90YLRgyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BVc2Vycy9JbmRleGB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIFVzZXJzQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIGluZGV4KClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdVc2Vycy9JbmRleCcsIFtcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJzJyA9PiBVc2VyOjphbGwoKS0+bWFwKGZ1bmN0aW9uICgkdXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnID0+ICR1c2VyLT5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZScgPT4gJHVzZXItPm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VtYWlsJyA9PiAkdXNlci0+ZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VkaXRfdXJsJyA9PiBVUkw6OnJvdXRlKCd1c2Vycy5lZGl0JywgJHVzZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICdjcmVhdGVfdXJsJyA9PiBVUkw6OnJvdXRlKCd1c2Vycy5jcmVhdGUnKSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIgPCBBcHBsaWNhdGlvbkNvbnRyb2xsZXJcbiAgICAgICAgICBkZWYgaW5kZXhcbiAgICAgICAgICAgIHJlbmRlciBpbmVydGlhOiAnVXNlcnMvSW5kZXgnLCBwcm9wczoge1xuICAgICAgICAgICAgICB1c2VyczogVXNlci5hbGwubWFwIGRvIHx1c2VyfFxuICAgICAgICAgICAgICAgIHVzZXIuYXNfanNvbihcbiAgICAgICAgICAgICAgICAgIG9ubHk6IFsgOmlkLCA6bmFtZSwgOmVtYWlsIF1cbiAgICAgICAgICAgICAgICApLm1lcmdlKFxuICAgICAgICAgICAgICAgICAgZWRpdF91cmw6IGVkaXRfdXNlcl9wYXRoKHVzZXIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICAgIGNyZWF0ZV91cmw6IG5ld191c2VyX3BhdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBlbmRcbiAgICAgICAgZW5kXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0JTRgNGD0LPQvtC5INCy0LDRgNC40LDQvdGCIC0g0YHQtNC10LvQsNGC0Ywg0L7Qv9GA0LXQtNC10LvQtdC90LjRjyDQvNCw0YDRiNGA0YPRgtC+0LIg0LTQvtGB0YLRg9C/0L3Ri9C80Lgg0L3QsCDRgdGC0L7RgNC+0L3QtSDQutC70LjQtdC90YLQsCDQutCw0LogSlNPTiwg0LAg0LfQsNGC0LXQvCDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0Y3RgtC+INC00LvRjyDQs9C10L3QtdGA0LDRhtC40LggVVJMLdCw0LTRgNC10YHQvtCyINC40Lcg0LjQvNC10L3QvtCy0LDQvdC90YvRhSDQvNCw0YDRiNGA0YPRgtC+0LIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1waHBcIlxuICAgICAgfX0+e2A8c2NyaXB0PlxuICBsZXQgcm91dGVzID0ge3sganNvbl9lbmNvZGUoJHJvdXRlcykgfX1cbjwvc2NyaXB0PlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQldGB0LvQuCDQktGLINC40YHQv9C+0LvRjNC30YPQtdGC0LUgTGFyYXZlbCwg0LHQuNCx0LvQuNC+0YLQtdC60LAgYH08YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RpZ2h0ZW5jby96aWdneVwiPntgWmlnZ3lgfTwvYT57YCBsaWJyYXJ5IGRvZXMgdGhpcyBmb3IgeW91IGF1dG9tYXRpY2FsbHkgdmlhIGEgZ2xvYmFsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJvdXRlKClgfTwvaW5saW5lQ29kZT57YCBmdW5jdGlvbi4gSWYgeW91J3JlIHVzaW5nIFppZ2d5IHdpdGggVnVlLmpzLCBpdCdzIGhlbHBmdWwgdG8gbWFrZSB0aGlzIGZ1bmN0aW9uIGF2YWlsYWJsZSBhcyBhIGN1c3RvbSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Akcm91dGVgfTwvaW5saW5lQ29kZT57YCBwcm9wZXJ0eSBzbyB5b3UgY2FuIHVzZSBpdCBkaXJlY3RseSBpbiB5b3VyIHRlbXBsYXRlcy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgVnVlLnByb3RvdHlwZS4kcm91dGUgPSAoLi4uYXJncykgPT4gcm91dGUoLi4uYXJncykudXJsKClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICB9fT57YDxpbmVydGlhLWxpbmsgOmhyZWY9XCIkcm91dGUoJ3VzZXJzLmNyZWF0ZScpXCI+Q3JlYXRlIFVzZXI8L2luZXJ0aWEtbGluaz5cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgRm9yIFJ1Ynkgb24gUmFpbHMgdGhlcmUgaXMgYSBzaW1pbGFyIGxpYnJhcnkgY2FsbGVkIGB9PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYWlsc3dhcmUvanMtcm91dGVzXCI+e2BKc1JvdXRlc2B9PC9hPntgLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==