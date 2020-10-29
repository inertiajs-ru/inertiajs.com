webpackHotUpdate_N_E("pages/asset-versioning",{

/***/ "./pages/asset-versioning.mdx":
/*!************************************!*\
  !*** ./pages/asset-versioning.mdx ***!
  \************************************/
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



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\asset-versioning.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        InertiaRails.configure do |config|\n          config.version = '1.0'\n        end\n\n        # You can also use lazy evaluation\n        InertiaRails.configure do |config|\n          config.version = lambda { InertiaRails::Version.last }\n        end\n      "], ["\n        InertiaRails.configure do |config|\n          config.version = '1.0'\n        end\\n\n        # You can also use lazy evaluation\n        InertiaRails.configure do |config|\n          config.version = lambda { InertiaRails::Version.last }\n        end\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        /*\n        |----------------------------------------------------------------\n        | Via the HandleInertiaRequests middleware (recommended)\n        |----------------------------------------------------------------\n        */\n\n        class HandleInertiaRequests extends Middleware\n        {\n            public function version(Request $request)\n            {\n                return parent::version($request);\n            }\n        }\n\n        /*\n        |----------------------------------------------------------------\n        | Manually\n        |----------------------------------------------------------------\n        */\n\n        use Inertia\\Inertia;\n\n        Inertia::version($version);\n        Inertia::version(fn () => $version); // Lazily\n      "], ["\n        /*\n        |----------------------------------------------------------------\n        | Via the HandleInertiaRequests middleware (recommended)\n        |----------------------------------------------------------------\n        */\\n\n        class HandleInertiaRequests extends Middleware\n        {\n            public function version(Request $request)\n            {\n                return parent::version($request);\n            }\n        }\\n\n        /*\n        |----------------------------------------------------------------\n        | Manually\n        |----------------------------------------------------------------\n        */\\n\n        use Inertia\\\\Inertia;\\n\n        Inertia::version($version);\n        Inertia::version(fn () => $version); // Lazily\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Управление версиями активов',
  links: [{
    url: '#вступление',
    name: 'Вступление'
  }, {
    url: '#настройка',
    name: 'Настройка'
  }, {
    url: '#очистка-кеша',
    name: 'Очистка кеша'
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
  }, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u044F\u043C\u0438 \u0430\u043A\u0442\u0438\u0432\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430 \u0438\u0437 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0441 \u043E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u043C\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 - \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0441\u0430\u0439\u0442\u0430, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0438 \u0431\u044B\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u044B. Inertia \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u044D\u0442\u043E, \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u044F \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u0430 Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442 \u0436\u0435\u0441\u0442\u043A\u043E\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F ajax \u043F\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432, \u0412\u0430\u043C \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C Inertia, \u043A\u0430\u043A\u0430\u044F \u0443 \u0412\u0430\u0441 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043B\u044E\u0431\u0430\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 147
    }
  }, "string"), " (\u0431\u0443\u043A\u0432\u044B, \u0447\u0438\u0441\u043B\u0430 \u0438\u043B\u0438 \u0445\u0435\u0448 \u0444\u0430\u0439\u043B\u0430), \u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0412\u0430\u0448\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
      description: 'The HandleInertiaRequests middleware provides a sensible default for Laravel applications, which uses either a hash of the "app.asset_url" config value or the mix-manifest.json file.'
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
  }, "\u041E\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0435\u0448\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0432 Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438, \u0447\u0442\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u0436\u0435\u0441\u0442\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0432\u0430\u0448\u0438\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432. \u041E\u0434\u043D\u0430\u043A\u043E Inertia \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0434\u0435\u043B\u0430\u0435\u0442 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E. \u041E\u0431\u044B\u0447\u043D\u043E \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0442\u043E\u0439 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u043A\u0435\u0448\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u043A\u043E\u043D\u0435\u0446 URL-\u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u0432\u0430\u0448\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 Laravel Mix, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0432\u043A\u043B\u044E\u0447\u0438\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://laravel.com/docs/mix#versioning-and-cache-busting"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 90
    }
  }), "\u0432\u0435\u0440\u0441\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), " in your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 46
    }
  }, "webpack.mix.js"), " file."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNzZXQtdmVyc2lvbmluZy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiZGVzY3JpcHRpb24iLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLDZCQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsYUFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLFlBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSxlQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkk7QUFGVyxDQUFiO0FBY1AsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0tBSkssRUFLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhzREFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBTkssRUFPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtxQkFBOEk7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUE5SSxzWkFQSyxFQVFMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsU0FEdUI7QUFFN0JPLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRixtQkFIeUI7QUF5QjdCQyxpQkFBVyxFQUFFO0FBekJnQixLQUFELEVBMEIzQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0ExQjJCLENBQTlCO0FBc0NJLFdBQU8sRUFBQyxvQkF0Q1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJLLEVBK0NMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBL0NLLEVBZ0RMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOGtEQWhESyxFQWlETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBXQUFxRjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3ZHLFlBQVE7QUFEK0YsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtR0FBckYsZUFFeUM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGekMsV0FqREssQ0FBUDtBQXFERDtLQXpEdUJMLFU7QUEyRHhCO0FBQ0FBLFVBQVUsQ0FBQ08sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hc3NldC12ZXJzaW9uaW5nLmI4ZWUzM2M2ODFjZWRhOTEyOTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KPQv9GA0LDQstC70LXQvdC40LUg0LLQtdGA0YHQuNGP0LzQuCDQsNC60YLQuNCy0L7QsicsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPQstGB0YLRg9C/0LvQtdC90LjQtScsXG4gICAgbmFtZTogJ9CS0YHRgtGD0L/Qu9C10L3QuNC1J1xuICB9LCB7XG4gICAgdXJsOiAnI9C90LDRgdGC0YDQvtC50LrQsCcsXG4gICAgbmFtZTogJ9Cd0LDRgdGC0YDQvtC50LrQsCdcbiAgfSwge1xuICAgIHVybDogJyPQvtGH0LjRgdGC0LrQsC3QutC10YjQsCcsXG4gICAgbmFtZTogJ9Ce0YfQuNGB0YLQutCwINC60LXRiNCwJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KPQv9GA0LDQstC70LXQvdC40LUg0LLQtdGA0YHQuNGP0LzQuCDQsNC60YLQuNCy0L7QsmB9PC9oMT5cbiAgICA8cD57YNCe0LTQvdCwINC40Lcg0YDQsNGB0L/RgNC+0YHRgtGA0LDQvdC10L3QvdGL0YUg0L/RgNC+0LHQu9C10Lwg0YEg0L7QtNC90L7RgdGC0YDQsNC90LjRh9C90YvQvNC4INC/0YDQuNC70L7QttC10L3QuNGP0LzQuCAtINC+0LHQvdC+0LLQu9C10L3QuNC1INGA0LXRgdGD0YDRgdC+0LIg0YHQsNC50YLQsCwg0LrQvtCz0LTQsCDQvtC90Lgg0LHRi9C70Lgg0LjQt9C80LXQvdC10L3Riy4gSW5lcnRpYSDRg9C/0YDQvtGJ0LDQtdGCINGN0YLQviwg0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC+0YLRgdC70LXQttC40LLQsNGPINGC0LXQutGD0YnRg9GOINCy0LXRgNGB0LjRjiDRgNC10YHRg9GA0YHQvtCyINCS0LDRiNC10LPQviDRgdCw0LnRgtCwLiDQkiDRgdC70YPRh9Cw0LUg0LjQt9C80LXQvdC10L3QuNGPINCw0LrRgtC40LLQsCBJbmVydGlhINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INCy0YvQv9C+0LvQvdC40YIg0LbQtdGB0YLQutC+0LUg0L/QvtGB0LXRidC10L3QuNC1INGB0YLRgNCw0L3QuNGG0Ysg0LLQvNC10YHRgtC+INC+0LHRi9GH0L3QvtCz0L4g0L/QvtGB0LXRidC10L3QuNGPIGFqYXgg0L/RgNC4INGB0LvQtdC00YPRjtGJ0LXQvCDQt9Cw0L/RgNC+0YHQtS5gfTwvcD5cbiAgICA8aDI+e2DQndCw0YHRgtGA0L7QudC60LBgfTwvaDI+XG4gICAgPHA+e2DQp9GC0L7QsdGLINCy0LrQu9GO0YfQuNGC0Ywg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60L7QtSDQvtCx0L3QvtCy0LvQtdC90LjQtSDRgNC10YHRg9GA0YHQvtCyLCDQktCw0Lwg0L/RgNC+0YHRgtC+INC90YPQttC90L4g0YHQvtC+0LHRidC40YLRjCBJbmVydGlhLCDQutCw0LrQsNGPINGDINCS0LDRgSDRgtC10LrRg9GJ0LDRjyDQstC10YDRgdC40Y8uINCt0YLQviDQvNC+0LbQtdGCINCx0YvRgtGMINC70Y7QsdCw0Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RyaW5nYH08L2lubGluZUNvZGU+e2AgKNCx0YPQutCy0YssINGH0LjRgdC70LAg0LjQu9C4INGF0LXRiCDRhNCw0LnQu9CwKSwg0LXRgdC70Lgg0L7QvdCwINC40LfQvNC10L3Rj9C10YLRgdGPINC/0YDQuCDQvtCx0L3QvtCy0LvQtdC90LjQuCDQktCw0YjQuNGFINGA0LXRgdGD0YDRgdC+0LIuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBWaWEgdGhlIEhhbmRsZUluZXJ0aWFSZXF1ZXN0cyBtaWRkbGV3YXJlIChyZWNvbW1lbmRlZClcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgY2xhc3MgSGFuZGxlSW5lcnRpYVJlcXVlc3RzIGV4dGVuZHMgTWlkZGxld2FyZVxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gdmVyc2lvbihSZXF1ZXN0ICRyZXF1ZXN0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ6OnZlcnNpb24oJHJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XFxuXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgTWFudWFsbHlcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgdXNlIEluZXJ0aWFcXFxcSW5lcnRpYTtcXG5cbiAgICAgICAgSW5lcnRpYTo6dmVyc2lvbigkdmVyc2lvbik7XG4gICAgICAgIEluZXJ0aWE6OnZlcnNpb24oZm4gKCkgPT4gJHZlcnNpb24pOyAvLyBMYXppbHlcbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBIYW5kbGVJbmVydGlhUmVxdWVzdHMgbWlkZGxld2FyZSBwcm92aWRlcyBhIHNlbnNpYmxlIGRlZmF1bHQgZm9yIExhcmF2ZWwgYXBwbGljYXRpb25zLCB3aGljaCB1c2VzIGVpdGhlciBhIGhhc2ggb2YgdGhlIFwiYXBwLmFzc2V0X3VybFwiIGNvbmZpZyB2YWx1ZSBvciB0aGUgbWl4LW1hbmlmZXN0Lmpzb24gZmlsZS4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIEluZXJ0aWFSYWlscy5jb25maWd1cmUgZG8gfGNvbmZpZ3xcbiAgICAgICAgICBjb25maWcudmVyc2lvbiA9ICcxLjAnXG4gICAgICAgIGVuZFxcblxuICAgICAgICAjIFlvdSBjYW4gYWxzbyB1c2UgbGF6eSBldmFsdWF0aW9uXG4gICAgICAgIEluZXJ0aWFSYWlscy5jb25maWd1cmUgZG8gfGNvbmZpZ3xcbiAgICAgICAgICBjb25maWcudmVyc2lvbiA9IGxhbWJkYSB7IEluZXJ0aWFSYWlsczo6VmVyc2lvbi5sYXN0IH1cbiAgICAgICAgZW5kXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCe0YfQuNGB0YLQutCwINC60LXRiNCwYH08L2gyPlxuICAgIDxwPntg0J7QsdC90L7QstC70LXQvdC40LUg0LDQutGC0LjQstC+0LIg0LIgSW5lcnRpYSDRgNCw0LHQvtGC0LDQtdGCINCyINC/0YDQtdC00L/QvtC70L7QttC10L3QuNC4LCDRh9GC0L4g0L/QvtGB0LXRidC10L3QuNC1INC20LXRgdGC0LrQvtC5INGB0YLRgNCw0L3QuNGG0Ysg0L/RgNC40LLQtdC00LXRgiDQuiDQv9C10YDQtdC30LDQs9GA0YPQt9C60LUg0LLQsNGI0LjRhSDQsNC60YLQuNCy0L7Qsi4g0J7QtNC90LDQutC+IEluZXJ0aWEg0L3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC90LjRh9C10LPQviDQvdC1INC00LXQu9Cw0LXRgiDQtNC70Y8g0Y3RgtC+0LPQvi4g0J7QsdGL0YfQvdC+INGN0YLQviDQtNC10LvQsNC10YLRgdGPINGBINC/0L7QvNC+0YnRjNGOINGC0L7QuSDQuNC70Lgg0LjQvdC+0Lkg0YTQvtGA0LzRiyDQvtGH0LjRgdGC0LrQuCDQutC10YjQsC4g0J3QsNC/0YDQuNC80LXRgCwg0LTQvtCx0LDQstC70LXQvdC40LUg0L/QsNGA0LDQvNC10YLRgNCwINC30LDQv9GA0L7RgdCwINCy0LXRgNGB0LjQuCDQsiDQutC+0L3QtdGGIFVSTC3QsNC00YDQtdGB0L7QsiDQstCw0YjQuNGFINGA0LXRgdGD0YDRgdC+0LIuYH08L3A+XG4gICAgPHA+e2DQldGB0LvQuCDQstGLINC40YHQv9C+0LvRjNC30YPQtdGC0LUgTGFyYXZlbCBNaXgsINCy0Ysg0LzQvtC20LXRgtC1INGB0LTQtdC70LDRgtGMINGN0YLQviDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCwg0LLQutC70Y7Rh9C40LIgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vbGFyYXZlbC5jb20vZG9jcy9taXgjdmVyc2lvbmluZy1hbmQtY2FjaGUtYnVzdGluZ1wiXG4gICAgICB9fT57YNCy0LXRgNGB0LjQvtC90LjRgNC+0LLQsNC90LjQtWB9PC9hPntgIGluIHlvdXIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2VicGFjay5taXguanNgfTwvaW5saW5lQ29kZT57YCBmaWxlLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==