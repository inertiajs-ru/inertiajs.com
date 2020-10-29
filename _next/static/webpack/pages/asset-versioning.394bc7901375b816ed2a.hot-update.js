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
      description: 'Посредник HandleInertiaRequests обеспечивает разумное значение по умолчанию для приложений Laravel, которое использует либо хеш значения конфигурации "app.asset_url" config value or the mix-manifest.json file.'
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
  }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0432 Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438, \u0447\u0442\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u0436\u0435\u0441\u0442\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0412\u0430\u0448\u0438\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432. \u041E\u0434\u043D\u0430\u043A\u043E Inertia \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0434\u0435\u043B\u0430\u0435\u0442 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E. \u041E\u0431\u044B\u0447\u043D\u043E \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0442\u043E\u0439 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u043A\u0435\u0448\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u043A\u043E\u043D\u0435\u0446 URL-\u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u0412\u0430\u0448\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 Laravel Mix, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0432\u043A\u043B\u044E\u0447\u0438\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }), "\u0432\u0435\u0440\u0441\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), " \u0432 \u0412\u0430\u0448\u0435\u043C \u0444\u0430\u0439\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 52
    }
  }, "webpack.mix.js"), "."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNzZXQtdmVyc2lvbmluZy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiZGVzY3JpcHRpb24iLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLDZCQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsYUFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLFlBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSxlQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkk7QUFGVyxDQUFiO0FBY1AsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0tBSkssRUFLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhzREFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBTkssRUFPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtxQkFBOEk7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUE5SSxzWkFQSyxFQVFMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsU0FEdUI7QUFFN0JPLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRixtQkFIeUI7QUF5QjdCQyxpQkFBVyxFQUFFO0FBekJnQixLQUFELEVBMEIzQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0ExQjJCLENBQTlCO0FBc0NJLFdBQU8sRUFBQyxvQkF0Q1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJLLEVBK0NMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBL0NLLEVBZ0RMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOGtEQWhESyxFQWlETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBXQUFxRjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3ZHLFlBQVE7QUFEK0YsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtR0FBckYsNEVBRStDO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRi9DLE1BakRLLENBQVA7QUFxREQ7S0F6RHVCTCxVO0FBMkR4QjtBQUNBQSxVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXNzZXQtdmVyc2lvbmluZy4zOTRiYzc5MDEzNzViODE2ZWQyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cj0L/RgNCw0LLQu9C10L3QuNC1INCy0LXRgNGB0LjRj9C80Lgg0LDQutGC0LjQstC+0LInLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0LLRgdGC0YPQv9C70LXQvdC40LUnLFxuICAgIG5hbWU6ICfQktGB0YLRg9C/0LvQtdC90LjQtSdcbiAgfSwge1xuICAgIHVybDogJyPQvdCw0YHRgtGA0L7QudC60LAnLFxuICAgIG5hbWU6ICfQndCw0YHRgtGA0L7QudC60LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7Rh9C40YHRgtC60LAt0LrQtdGI0LAnLFxuICAgIG5hbWU6ICfQntGH0LjRgdGC0LrQsCDQutC10YjQsCdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCj0L/RgNCw0LLQu9C10L3QuNC1INCy0LXRgNGB0LjRj9C80Lgg0LDQutGC0LjQstC+0LJgfTwvaDE+XG4gICAgPHA+e2DQntC00L3QsCDQuNC3INGA0LDRgdC/0YDQvtGB0YLRgNCw0L3QtdC90L3Ri9GFINC/0YDQvtCx0LvQtdC8INGBINC+0LTQvdC+0YHRgtGA0LDQvdC40YfQvdGL0LzQuCDQv9GA0LjQu9C+0LbQtdC90LjRj9C80LggLSDQvtCx0L3QvtCy0LvQtdC90LjQtSDRgNC10YHRg9GA0YHQvtCyINGB0LDQudGC0LAsINC60L7Qs9C00LAg0L7QvdC4INCx0YvQu9C4INC40LfQvNC10L3QtdC90YsuIEluZXJ0aWEg0YPQv9GA0L7RidCw0LXRgiDRjdGC0L4sINC/0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCDQvtGC0YHQu9C10LbQuNCy0LDRjyDRgtC10LrRg9GJ0YPRjiDQstC10YDRgdC40Y4g0YDQtdGB0YPRgNGB0L7QsiDQktCw0YjQtdCz0L4g0YHQsNC50YLQsC4g0JIg0YHQu9GD0YfQsNC1INC40LfQvNC10L3QtdC90LjRjyDQsNC60YLQuNCy0LAgSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQstGL0L/QvtC70L3QuNGCINC20LXRgdGC0LrQvtC1INC/0L7RgdC10YnQtdC90LjQtSDRgdGC0YDQsNC90LjRhtGLINCy0LzQtdGB0YLQviDQvtCx0YvRh9C90L7Qs9C+INC/0L7RgdC10YnQtdC90LjRjyBhamF4INC/0YDQuCDRgdC70LXQtNGD0Y7RidC10Lwg0LfQsNC/0YDQvtGB0LUuYH08L3A+XG4gICAgPGgyPntg0J3QsNGB0YLRgNC+0LnQutCwYH08L2gyPlxuICAgIDxwPntg0KfRgtC+0LHRiyDQstC60LvRjtGH0LjRgtGMINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC+0LUg0L7QsdC90L7QstC70LXQvdC40LUg0YDQtdGB0YPRgNGB0L7Qsiwg0JLQsNC8INC/0YDQvtGB0YLQviDQvdGD0LbQvdC+INGB0L7QvtCx0YnQuNGC0YwgSW5lcnRpYSwg0LrQsNC60LDRjyDRgyDQktCw0YEg0YLQtdC60YPRidCw0Y8g0LLQtdGA0YHQuNGPLiDQrdGC0L4g0LzQvtC20LXRgiDQsdGL0YLRjCDQu9GO0LHQsNGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0cmluZ2B9PC9pbmxpbmVDb2RlPntgICjQsdGD0LrQstGLLCDRh9C40YHQu9CwINC40LvQuCDRhdC10Ygg0YTQsNC50LvQsCksINC10YHQu9C4INC+0L3QsCDQuNC30LzQtdC90Y/QtdGC0YHRjyDQv9GA0Lgg0L7QsdC90L7QstC70LXQvdC40Lgg0JLQsNGI0LjRhSDRgNC10YHRg9GA0YHQvtCyLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVmlhIHRoZSBIYW5kbGVJbmVydGlhUmVxdWVzdHMgbWlkZGxld2FyZSAocmVjb21tZW5kZWQpXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGNsYXNzIEhhbmRsZUluZXJ0aWFSZXF1ZXN0cyBleHRlbmRzIE1pZGRsZXdhcmVcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIHZlcnNpb24oUmVxdWVzdCAkcmVxdWVzdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50Ojp2ZXJzaW9uKCRyZXF1ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxcblxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IE1hbnVhbGx5XG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIHVzZSBJbmVydGlhXFxcXEluZXJ0aWE7XFxuXG4gICAgICAgIEluZXJ0aWE6OnZlcnNpb24oJHZlcnNpb24pO1xuICAgICAgICBJbmVydGlhOjp2ZXJzaW9uKGZuICgpID0+ICR2ZXJzaW9uKTsgLy8gTGF6aWx5XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICfQn9C+0YHRgNC10LTQvdC40LogSGFuZGxlSW5lcnRpYVJlcXVlc3RzINC+0LHQtdGB0L/QtdGH0LjQstCw0LXRgiDRgNCw0LfRg9C80L3QvtC1INC30L3QsNGH0LXQvdC40LUg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LTQu9GPINC/0YDQuNC70L7QttC10L3QuNC5IExhcmF2ZWwsINC60L7RgtC+0YDQvtC1INC40YHQv9C+0LvRjNC30YPQtdGCINC70LjQsdC+INGF0LXRiCDQt9C90LDRh9C10L3QuNGPINC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuCBcImFwcC5hc3NldF91cmxcIiBjb25maWcgdmFsdWUgb3IgdGhlIG1peC1tYW5pZmVzdC5qc29uIGZpbGUuJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBJbmVydGlhUmFpbHMuY29uZmlndXJlIGRvIHxjb25maWd8XG4gICAgICAgICAgY29uZmlnLnZlcnNpb24gPSAnMS4wJ1xuICAgICAgICBlbmRcXG5cbiAgICAgICAgIyBZb3UgY2FuIGFsc28gdXNlIGxhenkgZXZhbHVhdGlvblxuICAgICAgICBJbmVydGlhUmFpbHMuY29uZmlndXJlIGRvIHxjb25maWd8XG4gICAgICAgICAgY29uZmlnLnZlcnNpb24gPSBsYW1iZGEgeyBJbmVydGlhUmFpbHM6OlZlcnNpb24ubGFzdCB9XG4gICAgICAgIGVuZFxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQntGH0LjRgdGC0LrQsCDQutC10YjQsGB9PC9oMj5cbiAgICA8cD57YNCe0LHQvdC+0LLQu9C10L3QuNC1INCw0LrRgtC40LLQvtCyINCyIEluZXJ0aWEg0YDQsNCx0L7RgtCw0LXRgiDQsiDQv9GA0LXQtNC/0L7Qu9C+0LbQtdC90LjQuCwg0YfRgtC+INC/0L7RgdC10YnQtdC90LjQtSDQttC10YHRgtC60L7QuSDRgdGC0YDQsNC90LjRhtGLINC/0YDQuNCy0LXQtNC10YIg0Log0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC1INCS0LDRiNC40YUg0LDQutGC0LjQstC+0LIuINCe0LTQvdCw0LrQviBJbmVydGlhINC90LAg0YHQsNC80L7QvCDQtNC10LvQtSDQvdC40YfQtdCz0L4g0L3QtSDQtNC10LvQsNC10YIg0LTQu9GPINGN0YLQvtCz0L4uINCe0LHRi9GH0L3QviDRjdGC0L4g0LTQtdC70LDQtdGC0YHRjyDRgSDQv9C+0LzQvtGJ0YzRjiDRgtC+0Lkg0LjQu9C4INC40L3QvtC5INGE0L7RgNC80Ysg0L7Rh9C40YHRgtC60Lgg0LrQtdGI0LAuINCd0LDQv9GA0LjQvNC10YAsINC00L7QsdCw0LLQu9C10L3QuNC1INC/0LDRgNCw0LzQtdGC0YDQsCDQt9Cw0L/RgNC+0YHQsCDQstC10YDRgdC40Lgg0LIg0LrQvtC90LXRhiBVUkwt0LDQtNGA0LXRgdC+0LIg0JLQsNGI0LjRhSDRgNC10YHRg9GA0YHQvtCyLmB9PC9wPlxuICAgIDxwPntg0JXRgdC70Lgg0JLRiyDQuNGB0L/QvtC70YzQt9GD0LXRgtC1IExhcmF2ZWwgTWl4LCDQktGLINC80L7QttC10YLQtSDRgdC00LXQu9Cw0YLRjCDRjdGC0L4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LgsINCy0LrQu9GO0YfQuNCyIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2xhcmF2ZWwuY29tL2RvY3MvbWl4I3ZlcnNpb25pbmctYW5kLWNhY2hlLWJ1c3RpbmdcIlxuICAgICAgfX0+e2DQstC10YDRgdC40L7QvdC40YDQvtCy0LDQvdC40LVgfTwvYT57YCDQsiDQktCw0YjQtdC8INGE0LDQudC70LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2VicGFjay5taXguanNgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=