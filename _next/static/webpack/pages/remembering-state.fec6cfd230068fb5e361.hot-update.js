webpackHotUpdate_N_E("pages/remembering-state",{

/***/ "./pages/remembering-state.mdx":
/*!*************************************!*\
  !*** ./pages/remembering-state.mdx ***!
  \*************************************/
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



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\remembering-state.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          import { page, remember } from '@inertiajs/inertia-svelte'\n\n          let form = remember({\n            first_name: $page.props.user.first_name,\n            last_name: $page.props.user.last_name,\n          }, `Users/Edit:${$page.props.user.id}`)\n      "], ["\n          import { page, remember } from '@inertiajs/inertia-svelte'\\n\n          let form = remember({\n            first_name: $page.props.user.first_name,\n            last_name: $page.props.user.last_name,\n          }, \\`Users/Edit:\\${$page.props.user.id}\\`)\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: props.user.first_name,\n            last_name: props.user.last_name,\n          }, `Users/Edit:${this.user.id}`)\n        }\n      "], ["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: props.user.first_name,\n            last_name: props.user.last_name,\n          }, \\`Users/Edit:\\${this.user.id}\\`)\n        }\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        {\n          remember: {\n            data: ['form'],\n            key: () => `Users/Edit:${this.user.id}`,\n          },\n          data() {\n            return {\n              form: {\n                first_name: this.user.first_name,\n                last_name: this.user.last_name,\n              },\n            }\n          },\n        }\n      "], ["\n        {\n          remember: {\n            data: ['form'],\n            key: () => \\`Users/Edit:\\${this.user.id}\\`,\n          },\n          data() {\n            return {\n              form: {\n                first_name: this.user.first_name,\n                last_name: this.user.last_name,\n              },\n            }\n          },\n        }\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          import { page, remember } from '@inertiajs/inertia-svelte'\n\n          let form = remember({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\n\n      "], ["\n          import { page, remember } from '@inertiajs/inertia-svelte'\\n\n          let form = remember({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\\n\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\n\n        }\n      "], ["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\\n\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        {\n          remember: {\n            data: ['form'],\n            key: 'Users/Create',\n          },\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n              },\n            }\n          },\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { remember } from '@inertiajs/inertia-svelte'\n\n        let form = remember({\n          first_name: null,\n          last_name: null,\n        })\n\n        // ...\n      "], ["\n        import { remember } from '@inertiajs/inertia-svelte'\\n\n        let form = remember({\n          first_name: null,\n          last_name: null,\n        })\\n\n        // ...\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: null,\n            last_name: null,\n            // ...\n          })\n\n          // ...\n        }\n      "], ["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: null,\n            last_name: null,\n            // ...\n          })\\n\n          // ...\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        {\n          // Option 1: Object\n          remember: {\n            data: ['form'],\n          },\n\n          // Option 2: Array\n          remember: ['form'],\n\n          // Option 3: String\n          remember: 'form',\n\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                // ...\n              },\n            }\n          },\n        }\n      "], ["\n        {\n          // Option 1: Object\n          remember: {\n            data: ['form'],\n          },\\n\n          // Option 2: Array\n          remember: ['form'],\\n\n          // Option 3: String\n          remember: 'form',\\n\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                // ...\n              },\n            }\n          },\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Состояние запоминания',
  links: [{
    url: '#top',
    name: 'Введение'
  }, {
    url: '#multiple-components',
    name: 'Multiple components'
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
  }, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "When navigating browser history, Inertia restores pages using prop data cached in history state. Inertia does not, however, restore local page component state, since this is beyond its reach. This can lead to outdated pages in your browser history."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "For example, if a user partially completes a form, then navigates away, and then returns back, the form will be reset and their work will be lost."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "To mitigate this issue, you can tell Inertia which local component state to save in the browser history."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      description: 'Use the "remember" property.',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'React',
      description: 'Use the "useRememberedState" hook.',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      description: 'Use the "remember" store.',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, "Now, whenever your local ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, "form"), " state changes, Inertia will automatically save this data to the history state, and restore it on history navigation."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, "Multiple components"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, "If your page contains multiple components that use the remember functionality, you'll need to provide a unique identifier for each component, so that Inertia knows which data to restore to each component."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }, {
      name: 'Svelte',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, "If you have multiple instances of the same component on the page using the remember functionality, be sure to also include a unique identifier for each component instance."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }, {
      name: 'Svelte',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject9())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVtZW1iZXJpbmctc3RhdGUubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsdUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsc0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISTtBQUZXLENBQWI7QUFXUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNTSxTQUFTLEdBQUdDLDBEQUFsQjtBQUVlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpSUFKSyxFQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ1FBTEssRUFNTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBKQU5LLEVBT0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnSEFQSyxFQVFMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsUUFEdUI7QUFFN0JPLGlCQUFXLEVBQUUsOEJBRmdCO0FBRzdCQyxjQUFRLEVBQUUsSUFIbUI7QUFJN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFKeUIsS0FBRCxFQXlCM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRE8saUJBQVcsRUFBRSxvQ0FGWjtBQUdEQyxjQUFRLEVBQUUsS0FIVDtBQUlEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSkgsS0F6QjJCLEVBeUMzQjtBQUNEVixVQUFJLEVBQUUsUUFETDtBQUVETyxpQkFBVyxFQUFFLDJCQUZaO0FBR0RDLGNBQVEsRUFBRSxJQUhUO0FBSURDLFVBQUksRUFBRUMsZ0RBQUY7QUFKSCxLQXpDMkIsQ0FBOUI7QUFxREksV0FBTyxFQUFDLG9CQXJEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkssRUE4REw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBZ0M7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFoQywwSEE5REssRUErREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkEvREssRUFnRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvTkFoRUssRUFpRUwsMERBQUMsc0VBQUQ7QUFBb0IsWUFBUSxFQUFFLENBQUM7QUFDN0JWLFVBQUksRUFBRSxRQUR1QjtBQUU3QlEsY0FBUSxFQUFFLElBRm1CO0FBRzdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSHlCLEtBQUQsRUFtQjNCO0FBQ0RWLFVBQUksRUFBRSxPQURMO0FBRURRLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQW5CMkIsRUFnQzNCO0FBQ0RWLFVBQUksRUFBRSxRQURMO0FBRURRLGNBQVEsRUFBRSxJQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQWhDMkIsQ0FBOUI7QUEwQ0ksV0FBTyxFQUFDLG9CQTFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakVLLEVBNEdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUxBNUdLLEVBNkdMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCVixVQUFJLEVBQUUsUUFEdUI7QUFFN0JRLGNBQVEsRUFBRSxJQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBbUIzQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVEUSxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FuQjJCLEVBZ0MzQjtBQUNEVixVQUFJLEVBQUUsUUFETDtBQUVEUSxjQUFRLEVBQUUsSUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FoQzJCLENBQTlCO0FBMENJLFdBQU8sRUFBQyxvQkExQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdHSyxDQUFQO0FBeUpEO0tBN0p1Qk4sVTtBQStKeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlbWVtYmVyaW5nLXN0YXRlLmZlYzZjZmQyMzAwNjhmYjVlMzYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KHQvtGB0YLQvtGP0L3QuNC1INC30LDQv9C+0LzQuNC90LDQvdC40Y8nLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcjdG9wJyxcbiAgICBuYW1lOiAn0JLQstC10LTQtdC90LjQtSdcbiAgfSwge1xuICAgIHVybDogJyNtdWx0aXBsZS1jb21wb25lbnRzJyxcbiAgICBuYW1lOiAnTXVsdGlwbGUgY29tcG9uZW50cydcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCh0L7RgdGC0L7Rj9C90LjQtSDQt9Cw0L/QvtC80LjQvdCw0L3QuNGPYH08L2gxPlxuICAgIDxwPntgV2hlbiBuYXZpZ2F0aW5nIGJyb3dzZXIgaGlzdG9yeSwgSW5lcnRpYSByZXN0b3JlcyBwYWdlcyB1c2luZyBwcm9wIGRhdGEgY2FjaGVkIGluIGhpc3Rvcnkgc3RhdGUuIEluZXJ0aWEgZG9lcyBub3QsIGhvd2V2ZXIsIHJlc3RvcmUgbG9jYWwgcGFnZSBjb21wb25lbnQgc3RhdGUsIHNpbmNlIHRoaXMgaXMgYmV5b25kIGl0cyByZWFjaC4gVGhpcyBjYW4gbGVhZCB0byBvdXRkYXRlZCBwYWdlcyBpbiB5b3VyIGJyb3dzZXIgaGlzdG9yeS5gfTwvcD5cbiAgICA8cD57YEZvciBleGFtcGxlLCBpZiBhIHVzZXIgcGFydGlhbGx5IGNvbXBsZXRlcyBhIGZvcm0sIHRoZW4gbmF2aWdhdGVzIGF3YXksIGFuZCB0aGVuIHJldHVybnMgYmFjaywgdGhlIGZvcm0gd2lsbCBiZSByZXNldCBhbmQgdGhlaXIgd29yayB3aWxsIGJlIGxvc3QuYH08L3A+XG4gICAgPHA+e2BUbyBtaXRpZ2F0ZSB0aGlzIGlzc3VlLCB5b3UgY2FuIHRlbGwgSW5lcnRpYSB3aGljaCBsb2NhbCBjb21wb25lbnQgc3RhdGUgdG8gc2F2ZSBpbiB0aGUgYnJvd3NlciBoaXN0b3J5LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXNlIHRoZSBcInJlbWVtYmVyXCIgcHJvcGVydHkuJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICB7XG4gICAgICAgICAgLy8gT3B0aW9uIDE6IE9iamVjdFxuICAgICAgICAgIHJlbWVtYmVyOiB7XG4gICAgICAgICAgICBkYXRhOiBbJ2Zvcm0nXSxcbiAgICAgICAgICB9LFxcblxuICAgICAgICAgIC8vIE9wdGlvbiAyOiBBcnJheVxuICAgICAgICAgIHJlbWVtYmVyOiBbJ2Zvcm0nXSxcXG5cbiAgICAgICAgICAvLyBPcHRpb24gMzogU3RyaW5nXG4gICAgICAgICAgcmVtZW1iZXI6ICdmb3JtJyxcXG5cbiAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgZGVzY3JpcHRpb246ICdVc2UgdGhlIFwidXNlUmVtZW1iZXJlZFN0YXRlXCIgaG9vay4nLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyB1c2VSZW1lbWJlcmVkU3RhdGUgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICAgICAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlUmVtZW1iZXJlZFN0YXRlKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICB9KVxcblxuICAgICAgICAgIC8vIC4uLlxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VzZSB0aGUgXCJyZW1lbWJlclwiIHN0b3JlLicsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgcmVtZW1iZXIgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICBsZXQgZm9ybSA9IHJlbWVtYmVyKHtcbiAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgfSlcXG5cbiAgICAgICAgLy8gLi4uXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgTm93LCB3aGVuZXZlciB5b3VyIGxvY2FsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZvcm1gfTwvaW5saW5lQ29kZT57YCBzdGF0ZSBjaGFuZ2VzLCBJbmVydGlhIHdpbGwgYXV0b21hdGljYWxseSBzYXZlIHRoaXMgZGF0YSB0byB0aGUgaGlzdG9yeSBzdGF0ZSwgYW5kIHJlc3RvcmUgaXQgb24gaGlzdG9yeSBuYXZpZ2F0aW9uLmB9PC9wPlxuICAgIDxoMj57YE11bHRpcGxlIGNvbXBvbmVudHNgfTwvaDI+XG4gICAgPHA+e2BJZiB5b3VyIHBhZ2UgY29udGFpbnMgbXVsdGlwbGUgY29tcG9uZW50cyB0aGF0IHVzZSB0aGUgcmVtZW1iZXIgZnVuY3Rpb25hbGl0eSwgeW91J2xsIG5lZWQgdG8gcHJvdmlkZSBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIGNvbXBvbmVudCwgc28gdGhhdCBJbmVydGlhIGtub3dzIHdoaWNoIGRhdGEgdG8gcmVzdG9yZSB0byBlYWNoIGNvbXBvbmVudC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAge1xuICAgICAgICAgIHJlbWVtYmVyOiB7XG4gICAgICAgICAgICBkYXRhOiBbJ2Zvcm0nXSxcbiAgICAgICAgICAgIGtleTogJ1VzZXJzL0NyZWF0ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyB1c2VSZW1lbWJlcmVkU3RhdGUgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICAgICAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlUmVtZW1iZXJlZFN0YXRlKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgfSwgJ1VzZXJzL0NyZWF0ZScpXFxuXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAgIGltcG9ydCB7IHBhZ2UsIHJlbWVtYmVyIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgICBsZXQgZm9ybSA9IHJlbWVtYmVyKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgfSwgJ1VzZXJzL0NyZWF0ZScpXFxuXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgSWYgeW91IGhhdmUgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIHRoZSBzYW1lIGNvbXBvbmVudCBvbiB0aGUgcGFnZSB1c2luZyB0aGUgcmVtZW1iZXIgZnVuY3Rpb25hbGl0eSwgYmUgc3VyZSB0byBhbHNvIGluY2x1ZGUgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCBjb21wb25lbnQgaW5zdGFuY2UuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHtcbiAgICAgICAgICByZW1lbWJlcjoge1xuICAgICAgICAgICAgZGF0YTogWydmb3JtJ10sXG4gICAgICAgICAgICBrZXk6ICgpID0+IFxcYFVzZXJzL0VkaXQ6XFwke3RoaXMudXNlci5pZH1cXGAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IHRoaXMudXNlci5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogdGhpcy51c2VyLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgdXNlUmVtZW1iZXJlZFN0YXRlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgICAgICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVJlbWVtYmVyZWRTdGF0ZSh7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBwcm9wcy51c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgICBsYXN0X25hbWU6IHByb3BzLnVzZXIubGFzdF9uYW1lLFxuICAgICAgICAgIH0sIFxcYFVzZXJzL0VkaXQ6XFwke3RoaXMudXNlci5pZH1cXGApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAgIGltcG9ydCB7IHBhZ2UsIHJlbWVtYmVyIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgICBsZXQgZm9ybSA9IHJlbWVtYmVyKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6ICRwYWdlLnByb3BzLnVzZXIuZmlyc3RfbmFtZSxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogJHBhZ2UucHJvcHMudXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgfSwgXFxgVXNlcnMvRWRpdDpcXCR7JHBhZ2UucHJvcHMudXNlci5pZH1cXGApXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==