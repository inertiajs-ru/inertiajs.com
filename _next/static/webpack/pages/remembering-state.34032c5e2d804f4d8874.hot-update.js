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
    name: 'Несколько компонентов'
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
  }, "\u041F\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 Inertia \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438. \u041E\u0434\u043D\u0430\u043A\u043E Inertia \u043D\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u044D\u0442\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0435\u0441\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0444\u043E\u0440\u043C\u0443, \u0437\u0430\u0442\u0435\u043C \u0443\u0445\u043E\u0434\u0438\u0442, \u0430 \u0437\u0430\u0442\u0435\u043C \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E, \u0444\u043E\u0440\u043C\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u0430, \u0438 \u0435\u0433\u043E \u0440\u0430\u0431\u043E\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0441\u043C\u044F\u0433\u0447\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C Inertia, \u043A\u0430\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "\u0422\u0435\u043F\u0435\u0440\u044C, \u043A\u043E\u0433\u0434\u0430 \u0412\u0430\u0448\u0430 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 47
    }
  }, "form"), " \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F, Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u044D\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0438\u0445 \u043F\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F, \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430, \u0447\u0442\u043E\u0431\u044B Inertia \u0437\u043D\u0430\u043B\u0430, \u043A\u0430\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0443\u0436\u043D\u043E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVtZW1iZXJpbmctc3RhdGUubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsdUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsc0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISTtBQUZXLENBQWI7QUFXUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNTSxTQUFTLEdBQUdDLDBEQUFsQjtBQUVlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpSUFKSyxFQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbzdDQUxLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtd0JBTkssRUFPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdwQkFQSyxFQVFMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsUUFEdUI7QUFFN0JPLGlCQUFXLEVBQUUsOEJBRmdCO0FBRzdCQyxjQUFRLEVBQUUsSUFIbUI7QUFJN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFKeUIsS0FBRCxFQXlCM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRE8saUJBQVcsRUFBRSxvQ0FGWjtBQUdEQyxjQUFRLEVBQUUsS0FIVDtBQUlEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSkgsS0F6QjJCLEVBeUMzQjtBQUNEVixVQUFJLEVBQUUsUUFETDtBQUVETyxpQkFBVyxFQUFFLDJCQUZaO0FBR0RDLGNBQVEsRUFBRSxJQUhUO0FBSURDLFVBQUksRUFBRUMsZ0RBQUY7QUFKSCxLQXpDMkIsQ0FBOUI7QUFxREksV0FBTyxFQUFDLG9CQXJEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkssRUE4REw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2TEFBMEM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUExQyxvbUJBOURLLEVBK0RMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUlBL0RLLEVBZ0VMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNnZDQWhFSyxFQWlFTCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlYsVUFBSSxFQUFFLFFBRHVCO0FBRTdCUSxjQUFRLEVBQUUsSUFGbUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQW1CM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRFEsY0FBUSxFQUFFLEtBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBbkIyQixFQWdDM0I7QUFDRFYsVUFBSSxFQUFFLFFBREw7QUFFRFEsY0FBUSxFQUFFLElBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBaEMyQixDQUE5QjtBQTBDSSxXQUFPLEVBQUMsb0JBMUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqRUssRUE0R0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtTEE1R0ssRUE2R0wsMERBQUMsc0VBQUQ7QUFBb0IsWUFBUSxFQUFFLENBQUM7QUFDN0JWLFVBQUksRUFBRSxRQUR1QjtBQUU3QlEsY0FBUSxFQUFFLElBRm1CO0FBRzdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSHlCLEtBQUQsRUFtQjNCO0FBQ0RWLFVBQUksRUFBRSxPQURMO0FBRURRLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQW5CMkIsRUFnQzNCO0FBQ0RWLFVBQUksRUFBRSxRQURMO0FBRURRLGNBQVEsRUFBRSxJQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQWhDMkIsQ0FBOUI7QUEwQ0ksV0FBTyxFQUFDLG9CQTFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0dLLENBQVA7QUF5SkQ7S0E3SnVCTixVO0FBK0p4QjtBQUNBQSxVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVtZW1iZXJpbmctc3RhdGUuMzQwMzJjNWUyZDgwNGY0ZDg4NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQodC+0YHRgtC+0Y/QvdC40LUg0LfQsNC/0L7QvNC40L3QsNC90LjRjycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyN0b3AnLFxuICAgIG5hbWU6ICfQktCy0LXQtNC10L3QuNC1J1xuICB9LCB7XG4gICAgdXJsOiAnI211bHRpcGxlLWNvbXBvbmVudHMnLFxuICAgIG5hbWU6ICfQndC10YHQutC+0LvRjNC60L4g0LrQvtC80L/QvtC90LXQvdGC0L7QsidcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCh0L7RgdGC0L7Rj9C90LjQtSDQt9Cw0L/QvtC80LjQvdCw0L3QuNGPYH08L2gxPlxuICAgIDxwPntg0J/RgNC4INC90LDQstC40LPQsNGG0LjQuCDQv9C+INC40YHRgtC+0YDQuNC4INCx0YDQsNGD0LfQtdGA0LAgSW5lcnRpYSDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0YHRgtGA0LDQvdC40YbRiywg0LjRgdC/0L7Qu9GM0LfRg9GPINC00LDQvdC90YvQtSwg0LrRjdGI0LjRgNC+0LLQsNC90L3Ri9C1INCyINC40YHRgtC+0YDQuNC4LiDQntC00L3QsNC60L4gSW5lcnRpYSDQvdC1INCy0L7RgdGB0YLQsNC90LDQstC70LjQstCw0LXRgiDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQvtC80L/QvtC90LXQvdGC0LAg0LvQvtC60LDQu9GM0L3QvtC5INGB0YLRgNCw0L3QuNGG0YssINC/0L7RgdC60L7Qu9GM0LrRgyDRjdGC0L4g0L3QtdC00L7RgdGC0YPQv9C90L4uINCt0YLQviDQvNC+0LbQtdGCINC/0YDQuNCy0LXRgdGC0Lgg0Log0L/QvtGP0LLQu9C10L3QuNGOINGD0YHRgtCw0YDQtdCy0YjQuNGFINGB0YLRgNCw0L3QuNGGINCyINC40YHRgtC+0YDQuNC4INCS0LDRiNC10LPQviDQsdGA0LDRg9C30LXRgNCwLmB9PC9wPlxuICAgIDxwPntg0J3QsNC/0YDQuNC80LXRgCwg0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGH0LDRgdGC0LjRh9C90L4g0LfQsNC/0L7Qu9C90Y/QtdGCINGE0L7RgNC80YMsINC30LDRgtC10Lwg0YPRhdC+0LTQuNGCLCDQsCDQt9Cw0YLQtdC8INCy0L7Qt9Cy0YDQsNGJ0LDQtdGC0YHRjyDQvtCx0YDQsNGC0L3Qviwg0YTQvtGA0LzQsCDQsdGD0LTQtdGCINGB0LHRgNC+0YjQtdC90LAsINC4INC10LPQviDRgNCw0LHQvtGC0LAg0LHRg9C00LXRgiDQv9C+0YLQtdGA0Y/QvdCwLmB9PC9wPlxuICAgIDxwPntg0KfRgtC+0LHRiyDRgdC80Y/Qs9GH0LjRgtGMINGN0YLRgyDQv9GA0L7QsdC70LXQvNGDLCDQktGLINC80L7QttC10YLQtSDRg9C60LDQt9Cw0YLRjCBJbmVydGlhLCDQutCw0LrQvtC1INGB0L7RgdGC0L7Rj9C90LjQtSDQu9C+0LrQsNC70YzQvdC+0LPQviDQutC+0LzQv9C+0L3QtdC90YLQsCDRgdC70LXQtNGD0LXRgiDRgdC+0YXRgNCw0L3QuNGC0Ywg0LIg0LjRgdGC0L7RgNC40Lgg0LHRgNCw0YPQt9C10YDQsC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VzZSB0aGUgXCJyZW1lbWJlclwiIHByb3BlcnR5LicsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAge1xuICAgICAgICAgIC8vIE9wdGlvbiAxOiBPYmplY3RcbiAgICAgICAgICByZW1lbWJlcjoge1xuICAgICAgICAgICAgZGF0YTogWydmb3JtJ10sXG4gICAgICAgICAgfSxcXG5cbiAgICAgICAgICAvLyBPcHRpb24gMjogQXJyYXlcbiAgICAgICAgICByZW1lbWJlcjogWydmb3JtJ10sXFxuXG4gICAgICAgICAgLy8gT3B0aW9uIDM6IFN0cmluZ1xuICAgICAgICAgIHJlbWVtYmVyOiAnZm9ybScsXFxuXG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXNlIHRoZSBcInVzZVJlbWVtYmVyZWRTdGF0ZVwiIGhvb2suJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgdXNlUmVtZW1iZXJlZFN0YXRlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgICAgICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVJlbWVtYmVyZWRTdGF0ZSh7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgLy8gLi4uXG4gICAgICAgICAgfSlcXG5cbiAgICAgICAgICAvLyAuLi5cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdVc2UgdGhlIFwicmVtZW1iZXJcIiBzdG9yZS4nLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IHJlbWVtYmVyIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgbGV0IGZvcm0gPSByZW1lbWJlcih7XG4gICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgIH0pXFxuXG4gICAgICAgIC8vIC4uLlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YNCi0LXQv9C10YDRjCwg0LrQvtCz0LTQsCDQktCw0YjQsCDQu9C+0LrQsNC70YzQvdCw0Y8g0YTQvtGA0LzQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bmb3JtYH08L2lubGluZUNvZGU+e2Ag0LjQt9C80LXQvdGP0LXRgtGB0Y8sIEluZXJ0aWEg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YHQvtGF0YDQsNC90Y/QtdGCINGN0YLQuCDQtNCw0L3QvdGL0LUg0LIg0YHQvtGB0YLQvtGP0L3QuNC1INC40YHRgtC+0YDQuNC4INC4INCy0L7RgdGB0YLQsNC90LDQstC70LjQstCw0LXRgiDQuNGFINC/0YDQuCDQvdCw0LLQuNCz0LDRhtC40Lgg0L/QviDQuNGB0YLQvtGA0LjQuC5gfTwvcD5cbiAgICA8aDI+e2DQndC10YHQutC+0LvRjNC60L4g0LrQvtC80L/QvtC90LXQvdGC0L7QsmB9PC9oMj5cbiAgICA8cD57YNCV0YHQu9C4INCS0LDRiNCwINGB0YLRgNCw0L3QuNGG0LAg0YHQvtC00LXRgNC20LjRgiDQvdC10YHQutC+0LvRjNC60L4g0LrQvtC80L/QvtC90LXQvdGC0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LjRgdC/0L7Qu9GM0LfRg9GO0YIg0YTRg9C90LrRhtC40Y4g0LfQsNC/0L7QvNC40L3QsNC90LjRjywg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INC/0YDQtdC00L7RgdGC0LDQstC40YLRjCDRg9C90LjQutCw0LvRjNC90YvQuSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LrQvtC80L/QvtC90LXQvdGC0LAsINGH0YLQvtCx0YsgSW5lcnRpYSDQt9C90LDQu9CwLCDQutCw0LrQuNC1INC00LDQvdC90YvQtSDQvdGD0LbQvdC+INCy0L7RgdGB0YLQsNC90L7QstC40YLRjCDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LrQvtC80L/QvtC90LXQvdGC0LAuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHtcbiAgICAgICAgICByZW1lbWJlcjoge1xuICAgICAgICAgICAgZGF0YTogWydmb3JtJ10sXG4gICAgICAgICAgICBrZXk6ICdVc2Vycy9DcmVhdGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgdXNlUmVtZW1iZXJlZFN0YXRlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgICAgICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVJlbWVtYmVyZWRTdGF0ZSh7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgIH0sICdVc2Vycy9DcmVhdGUnKVxcblxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgICBpbXBvcnQgeyBwYWdlLCByZW1lbWJlciB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgICAgbGV0IGZvcm0gPSByZW1lbWJlcih7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgIH0sICdVc2Vycy9DcmVhdGUnKVxcblxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YElmIHlvdSBoYXZlIG11bHRpcGxlIGluc3RhbmNlcyBvZiB0aGUgc2FtZSBjb21wb25lbnQgb24gdGhlIHBhZ2UgdXNpbmcgdGhlIHJlbWVtYmVyIGZ1bmN0aW9uYWxpdHksIGJlIHN1cmUgdG8gYWxzbyBpbmNsdWRlIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGVhY2ggY29tcG9uZW50IGluc3RhbmNlLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICB7XG4gICAgICAgICAgcmVtZW1iZXI6IHtcbiAgICAgICAgICAgIGRhdGE6IFsnZm9ybSddLFxuICAgICAgICAgICAga2V5OiAoKSA9PiBcXGBVc2Vycy9FZGl0OlxcJHt0aGlzLnVzZXIuaWR9XFxgLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLnVzZXIuZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWU6IHRoaXMudXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IHVzZVJlbWVtYmVyZWRTdGF0ZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICAgICAgICAgIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VSZW1lbWJlcmVkU3RhdGUoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogcHJvcHMudXNlci5maXJzdF9uYW1lLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBwcm9wcy51c2VyLmxhc3RfbmFtZSxcbiAgICAgICAgICB9LCBcXGBVc2Vycy9FZGl0OlxcJHt0aGlzLnVzZXIuaWR9XFxgKVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgICBpbXBvcnQgeyBwYWdlLCByZW1lbWJlciB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgICAgbGV0IGZvcm0gPSByZW1lbWJlcih7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiAkcGFnZS5wcm9wcy51c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgICBsYXN0X25hbWU6ICRwYWdlLnByb3BzLnVzZXIubGFzdF9uYW1lLFxuICAgICAgICAgIH0sIFxcYFVzZXJzL0VkaXQ6XFwkeyRwYWdlLnByb3BzLnVzZXIuaWR9XFxgKVxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=