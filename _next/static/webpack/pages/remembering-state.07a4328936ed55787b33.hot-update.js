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
  }, "\u0415\u0441\u043B\u0438 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432 \u043E\u0434\u043D\u043E\u0433\u043E \u0438 \u0442\u043E\u0433\u043E \u0436\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0435\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F, \u043D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0442\u0430\u043A\u0436\u0435 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVtZW1iZXJpbmctc3RhdGUubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsdUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsc0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISTtBQUZXLENBQWI7QUFXUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNTSxTQUFTLEdBQUdDLDBEQUFsQjtBQUVlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpSUFKSyxFQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbzdDQUxLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtd0JBTkssRUFPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdwQkFQSyxFQVFMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsUUFEdUI7QUFFN0JPLGlCQUFXLEVBQUUsOEJBRmdCO0FBRzdCQyxjQUFRLEVBQUUsSUFIbUI7QUFJN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFKeUIsS0FBRCxFQXlCM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRE8saUJBQVcsRUFBRSxvQ0FGWjtBQUdEQyxjQUFRLEVBQUUsS0FIVDtBQUlEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSkgsS0F6QjJCLEVBeUMzQjtBQUNEVixVQUFJLEVBQUUsUUFETDtBQUVETyxpQkFBVyxFQUFFLDJCQUZaO0FBR0RDLGNBQVEsRUFBRSxJQUhUO0FBSURDLFVBQUksRUFBRUMsZ0RBQUY7QUFKSCxLQXpDMkIsQ0FBOUI7QUFxREksV0FBTyxFQUFDLG9CQXJEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkssRUE4REw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2TEFBMEM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUExQyxvbUJBOURLLEVBK0RMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUlBL0RLLEVBZ0VMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNnZDQWhFSyxFQWlFTCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlYsVUFBSSxFQUFFLFFBRHVCO0FBRTdCUSxjQUFRLEVBQUUsSUFGbUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQW1CM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRFEsY0FBUSxFQUFFLEtBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBbkIyQixFQWdDM0I7QUFDRFYsVUFBSSxFQUFFLFFBREw7QUFFRFEsY0FBUSxFQUFFLElBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBaEMyQixDQUE5QjtBQTBDSSxXQUFPLEVBQUMsb0JBMUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqRUssRUE0R0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzaUNBNUdLLEVBNkdMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCVixVQUFJLEVBQUUsUUFEdUI7QUFFN0JRLGNBQVEsRUFBRSxJQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBbUIzQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVEUSxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FuQjJCLEVBZ0MzQjtBQUNEVixVQUFJLEVBQUUsUUFETDtBQUVEUSxjQUFRLEVBQUUsSUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FoQzJCLENBQTlCO0FBMENJLFdBQU8sRUFBQyxvQkExQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdHSyxDQUFQO0FBeUpEO0tBN0p1Qk4sVTtBQStKeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlbWVtYmVyaW5nLXN0YXRlLjA3YTQzMjg5MzZlZDU1Nzg3YjMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KHQvtGB0YLQvtGP0L3QuNC1INC30LDQv9C+0LzQuNC90LDQvdC40Y8nLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcjdG9wJyxcbiAgICBuYW1lOiAn0JLQstC10LTQtdC90LjQtSdcbiAgfSwge1xuICAgIHVybDogJyNtdWx0aXBsZS1jb21wb25lbnRzJyxcbiAgICBuYW1lOiAn0J3QtdGB0LrQvtC70YzQutC+INC60L7QvNC/0L7QvdC10L3RgtC+0LInXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQodC+0YHRgtC+0Y/QvdC40LUg0LfQsNC/0L7QvNC40L3QsNC90LjRj2B9PC9oMT5cbiAgICA8cD57YNCf0YDQuCDQvdCw0LLQuNCz0LDRhtC40Lgg0L/QviDQuNGB0YLQvtGA0LjQuCDQsdGA0LDRg9C30LXRgNCwIEluZXJ0aWEg0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINGB0YLRgNCw0L3QuNGG0YssINC40YHQv9C+0LvRjNC30YPRjyDQtNCw0L3QvdGL0LUsINC60Y3RiNC40YDQvtCy0LDQvdC90YvQtSDQsiDQuNGB0YLQvtGA0LjQuC4g0J7QtNC90LDQutC+IEluZXJ0aWEg0L3QtSDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0YHQvtGB0YLQvtGP0L3QuNC1INC60L7QvNC/0L7QvdC10L3RgtCwINC70L7QutCw0LvRjNC90L7QuSDRgdGC0YDQsNC90LjRhtGLLCDQv9C+0YHQutC+0LvRjNC60YMg0Y3RgtC+INC90LXQtNC+0YHRgtGD0L/QvdC+LiDQrdGC0L4g0LzQvtC20LXRgiDQv9GA0LjQstC10YHRgtC4INC6INC/0L7Rj9Cy0LvQtdC90LjRjiDRg9GB0YLQsNGA0LXQstGI0LjRhSDRgdGC0YDQsNC90LjRhiDQsiDQuNGB0YLQvtGA0LjQuCDQktCw0YjQtdCz0L4g0LHRgNCw0YPQt9C10YDQsC5gfTwvcD5cbiAgICA8cD57YNCd0LDQv9GA0LjQvNC10YAsINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRh9Cw0YHRgtC40YfQvdC+INC30LDQv9C+0LvQvdGP0LXRgiDRhNC+0YDQvNGDLCDQt9Cw0YLQtdC8INGD0YXQvtC00LjRgiwg0LAg0LfQsNGC0LXQvCDQstC+0LfQstGA0LDRidCw0LXRgtGB0Y8g0L7QsdGA0LDRgtC90L4sINGE0L7RgNC80LAg0LHRg9C00LXRgiDRgdCx0YDQvtGI0LXQvdCwLCDQuCDQtdCz0L4g0YDQsNCx0L7RgtCwINCx0YPQtNC10YIg0L/QvtGC0LXRgNGP0L3QsC5gfTwvcD5cbiAgICA8cD57YNCn0YLQvtCx0Ysg0YHQvNGP0LPRh9C40YLRjCDRjdGC0YMg0L/RgNC+0LHQu9C10LzRgywg0JLRiyDQvNC+0LbQtdGC0LUg0YPQutCw0LfQsNGC0YwgSW5lcnRpYSwg0LrQsNC60L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LvQvtC60LDQu9GM0L3QvtCz0L4g0LrQvtC80L/QvtC90LXQvdGC0LAg0YHQu9C10LTRg9C10YIg0YHQvtGF0YDQsNC90LjRgtGMINCyINC40YHRgtC+0YDQuNC4INCx0YDQsNGD0LfQtdGA0LAuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgZGVzY3JpcHRpb246ICdVc2UgdGhlIFwicmVtZW1iZXJcIiBwcm9wZXJ0eS4nLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBPcHRpb24gMTogT2JqZWN0XG4gICAgICAgICAgcmVtZW1iZXI6IHtcbiAgICAgICAgICAgIGRhdGE6IFsnZm9ybSddLFxuICAgICAgICAgIH0sXFxuXG4gICAgICAgICAgLy8gT3B0aW9uIDI6IEFycmF5XG4gICAgICAgICAgcmVtZW1iZXI6IFsnZm9ybSddLFxcblxuICAgICAgICAgIC8vIE9wdGlvbiAzOiBTdHJpbmdcbiAgICAgICAgICByZW1lbWJlcjogJ2Zvcm0nLFxcblxuICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgLy8gLi4uXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VzZSB0aGUgXCJ1c2VSZW1lbWJlcmVkU3RhdGVcIiBob29rLicsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IHVzZVJlbWVtYmVyZWRTdGF0ZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICAgICAgICAgIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VSZW1lbWJlcmVkU3RhdGUoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgIH0pXFxuXG4gICAgICAgICAgLy8gLi4uXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXNlIHRoZSBcInJlbWVtYmVyXCIgc3RvcmUuJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyByZW1lbWJlciB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIGxldCBmb3JtID0gcmVtZW1iZXIoe1xuICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICB9KVxcblxuICAgICAgICAvLyAuLi5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQotC10L/QtdGA0YwsINC60L7Qs9C00LAg0JLQsNGI0LAg0LvQvtC60LDQu9GM0L3QsNGPINGE0L7RgNC80LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZm9ybWB9PC9pbmxpbmVDb2RlPntgINC40LfQvNC10L3Rj9C10YLRgdGPLCBJbmVydGlhINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGB0L7RhdGA0LDQvdGP0LXRgiDRjdGC0Lgg0LTQsNC90L3Ri9C1INCyINGB0L7RgdGC0L7Rj9C90LjQtSDQuNGB0YLQvtGA0LjQuCDQuCDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LjRhSDQv9GA0Lgg0L3QsNCy0LjQs9Cw0YbQuNC4INC/0L4g0LjRgdGC0L7RgNC40LguYH08L3A+XG4gICAgPGgyPntg0J3QtdGB0LrQvtC70YzQutC+INC60L7QvNC/0L7QvdC10L3RgtC+0LJgfTwvaDI+XG4gICAgPHA+e2DQldGB0LvQuCDQktCw0YjQsCDRgdGC0YDQsNC90LjRhtCwINGB0L7QtNC10YDQttC40YIg0L3QtdGB0LrQvtC70YzQutC+INC60L7QvNC/0L7QvdC10L3RgtC+0LIsINC60L7RgtC+0YDRi9C1INC40YHQv9C+0LvRjNC30YPRjtGCINGE0YPQvdC60YbQuNGOINC30LDQv9C+0LzQuNC90LDQvdC40Y8sINCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQv9GA0LXQtNC+0YHRgtCw0LLQuNGC0Ywg0YPQvdC40LrQsNC70YzQvdGL0Lkg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LTQu9GPINC60LDQttC00L7Qs9C+INC60L7QvNC/0L7QvdC10L3RgtCwLCDRh9GC0L7QsdGLIEluZXJ0aWEg0LfQvdCw0LvQsCwg0LrQsNC60LjQtSDQtNCw0L3QvdGL0LUg0L3Rg9C20L3QviDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0LTQu9GPINC60LDQttC00L7Qs9C+INC60L7QvNC/0L7QvdC10L3RgtCwLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICB7XG4gICAgICAgICAgcmVtZW1iZXI6IHtcbiAgICAgICAgICAgIGRhdGE6IFsnZm9ybSddLFxuICAgICAgICAgICAga2V5OiAnVXNlcnMvQ3JlYXRlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IHVzZVJlbWVtYmVyZWRTdGF0ZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICAgICAgICAgIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VSZW1lbWJlcmVkU3RhdGUoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICB9LCAnVXNlcnMvQ3JlYXRlJylcXG5cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgICAgaW1wb3J0IHsgcGFnZSwgcmVtZW1iZXIgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICAgIGxldCBmb3JtID0gcmVtZW1iZXIoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICB9LCAnVXNlcnMvQ3JlYXRlJylcXG5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQldGB0LvQuCDRgyDQktCw0YEg0LXRgdGC0Ywg0L3QtdGB0LrQvtC70YzQutC+INGN0LrQt9C10LzQv9C70Y/RgNC+0LIg0L7QtNC90L7Qs9C+INC4INGC0L7Qs9C+INC20LUg0LrQvtC80L/QvtC90LXQvdGC0LAg0L3QsCDRgdGC0YDQsNC90LjRhtC1LCDQuNGB0L/QvtC70YzQt9GD0Y7RidC10Lkg0YTRg9C90LrRhtC40Y4g0LfQsNC/0L7QvNC40L3QsNC90LjRjywg0L3QtSDQt9Cw0LHRg9C00YzRgtC1INGC0LDQutC20LUg0LLQutC70Y7Rh9C40YLRjCDRg9C90LjQutCw0LvRjNC90YvQuSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0Y3QutC30LXQvNC/0LvRj9GA0LAg0LrQvtC80L/QvtC90LXQvdGC0LAuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHtcbiAgICAgICAgICByZW1lbWJlcjoge1xuICAgICAgICAgICAgZGF0YTogWydmb3JtJ10sXG4gICAgICAgICAgICBrZXk6ICgpID0+IFxcYFVzZXJzL0VkaXQ6XFwke3RoaXMudXNlci5pZH1cXGAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IHRoaXMudXNlci5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogdGhpcy51c2VyLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgdXNlUmVtZW1iZXJlZFN0YXRlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgICAgICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVJlbWVtYmVyZWRTdGF0ZSh7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBwcm9wcy51c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgICBsYXN0X25hbWU6IHByb3BzLnVzZXIubGFzdF9uYW1lLFxuICAgICAgICAgIH0sIFxcYFVzZXJzL0VkaXQ6XFwke3RoaXMudXNlci5pZH1cXGApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAgIGltcG9ydCB7IHBhZ2UsIHJlbWVtYmVyIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgICBsZXQgZm9ybSA9IHJlbWVtYmVyKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6ICRwYWdlLnByb3BzLnVzZXIuZmlyc3RfbmFtZSxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogJHBhZ2UucHJvcHMudXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgfSwgXFxgVXNlcnMvRWRpdDpcXCR7JHBhZ2UucHJvcHMudXNlci5pZH1cXGApXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==