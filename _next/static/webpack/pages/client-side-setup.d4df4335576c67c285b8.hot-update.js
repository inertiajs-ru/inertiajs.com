webpackHotUpdate_N_E("pages/client-side-setup",{

/***/ "./pages/client-side-setup.mdx":
/*!*************************************!*\
  !*** ./pages/client-side-setup.mdx ***!
  \*************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dedent-js */ "./node_modules/dedent-js/lib/index.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dedent_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notice */ "./components/Notice.js");
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\client-side-setup.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        resolveComponent: name => import(`./Pages/${name}.svelte`),\n      "], ["\n        resolveComponent: name => import(\\`./Pages/\\${name}.svelte\\`),\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}\n      "], ["\n        resolveComponent={name => import(\\`./Pages/\\${name}\\`).then(module => module.default)}\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),\n      "], ["\n        resolveComponent: name => import(\\`./Pages/\\${name}\\`).then(module => module.default),\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { App } from '@inertiajs/inertia-svelte'\n\n        const el = document.getElementById('app')\n\n        new App({\n          target: el,\n          props: {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(`./Pages/${name}.svelte`),\n          },\n        })\n      "], ["\n        import { App } from '@inertiajs/inertia-svelte'\\n\n        const el = document.getElementById('app')\\n\n        new App({\n          target: el,\n          props: {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(\\`./Pages/\\${name}.svelte\\`),\n          },\n        })\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { App } from '@inertiajs/inertia-react'\n        import React from 'react'\n        import { render } from 'react-dom'\n\n        const el = document.getElementById('app')\n\n        render(\n          <App\n            initialPage={JSON.parse(el.dataset.page)}\n            resolveComponent={name => require(`./Pages/${name}`).default}\n          />,\n          el\n        )\n      "], ["\n        import { App } from '@inertiajs/inertia-react'\n        import React from 'react'\n        import { render } from 'react-dom'\\n\n        const el = document.getElementById('app')\\n\n        render(\n          <App\n            initialPage={JSON.parse(el.dataset.page)}\n            resolveComponent={name => require(\\`./Pages/\\${name}\\`).default}\n          />,\n          el\n        )\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\n\n        import { createApp, h } from 'vue'\n        import { App, plugin } from '@inertiajs/inertia-vue3'\n\n        const el = document.getElementById('app')\n\n        createApp({\n          render: () => h(App, {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(`./Pages/${name}`).default,\n          })\n        }).use(plugin).mount(el)\n\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\n\n        import { App, plugin } from '@inertiajs/inertia-vue'\n        import Vue from 'vue'\n\n        Vue.use(plugin)\n\n        const el = document.getElementById('app')\n\n        new Vue({\n          render: h => h(App, {\n            props: {\n              initialPage: JSON.parse(el.dataset.page),\n              resolveComponent: name => require(`./Pages/${name}`).default,\n            },\n          }),\n        }).$mount(el)\n      "], ["\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\\n\n        import { createApp, h } from 'vue'\n        import { App, plugin } from '@inertiajs/inertia-vue3'\\n\n        const el = document.getElementById('app')\\n\n        createApp({\n          render: () => h(App, {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(\\`./Pages/\\${name}\\`).default,\n          })\n        }).use(plugin).mount(el)\\n\\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\\n\n        import { App, plugin } from '@inertiajs/inertia-vue'\n        import Vue from 'vue'\\n\n        Vue.use(plugin)\\n\n        const el = document.getElementById('app')\\n\n        new Vue({\n          render: h => h(App, {\n            props: {\n              initialPage: JSON.parse(el.dataset.page),\n              resolveComponent: name => require(\\`./Pages/\\${name}\\`).default,\n            },\n          }),\n        }).$mount(el)\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        npm install @inertiajs/inertia @inertiajs/inertia-svelte\n        yarn add @inertiajs/inertia @inertiajs/inertia-svelte\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        npm install @inertiajs/inertia @inertiajs/inertia-react\n        yarn add @inertiajs/inertia @inertiajs/inertia-react\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        npm install @inertiajs/inertia @inertiajs/inertia-vue\n        yarn add @inertiajs/inertia @inertiajs/inertia-vue\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Установка клиентской части',
  links: [{
    url: '#установка-зависимостей',
    name: 'Установка зависимостей'
  }, {
    url: '#инициализация-приложения',
    name: 'Инициализация приложения'
  }, {
    url: '#индикатор-загрузки',
    name: 'Индикатор загрузки'
  }, {
    url: '#разделение-кода',
    name: 'Разделение кода'
  }]
};
var layoutProps = {
  meta: meta
};
var MDXLayout = _components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0447\u0430\u0441\u0442\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043B\u0435 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0412\u044B \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/server-side-setup"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }), "\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"), ", \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0443\u044E \u0441\u0440\u0435\u0434\u0443. Inertia \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 React, Vue.js \u0438 Svelte."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0435 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u044B Inertia \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E NPM \u0438\u043B\u0438 Yarn."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'bash',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'React',
      language: 'bash',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      language: 'bash',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0442\u0435\u043C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0444\u0430\u0439\u043B JavaScript, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 Inertia. \u0412\u0441\u0435, \u0447\u0442\u043E \u043C\u044B \u0437\u0434\u0435\u0441\u044C \u0434\u0435\u043B\u0430\u0435\u043C, \u044D\u0442\u043E \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0443\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0431\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 70,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 8
    }
  }, "resolveComponent"), " - \u044D\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u043E\u0431\u0449\u0430\u0435\u0442 Inertia, \u043A\u0430\u043A \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041E\u043D \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0438\u043C\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u0441\u0442\u0440\u043E\u043A\u0443) \u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, "\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u044B Inertia \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 XHR, \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. \u0427\u0442\u043E\u0431\u044B \u0440\u0435\u0448\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, Inertia \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/inertiajs/progress"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 179
    }
  }), "\u043F\u0430\u043A\u0435\u0442 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430"), ", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://ricostacruz.com/nprogress/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 63
    }
  }), "NProgress.js"), ", \u0445\u043E\u0440\u043E\u0448\u0435\u0439 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u043E\u0439 \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 10
    }
  }), "npm install @inertiajs/progress\nyarn add @inertiajs/progress\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u0441\u0432\u043E\u0435\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 10
    }
  }), "import { InertiaProgress } from '@inertiajs/progress'\n\nInertiaProgress.init()\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 5
    }
  }, "\u041E\u043D \u0442\u0430\u043A\u0436\u0435 \u0438\u043C\u0435\u0435\u0442 \u0440\u044F\u0434 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 87
    }
  }, "init()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 10
    }
  }), "InertiaProgress.init({\n  // \u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u0432 \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445, \u043F\u043E\u0441\u043B\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0439\n  // \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F.\n  delay: 250,\n\n  // \u0426\u0432\u0435\u0442 \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F.\n  color: '#29d',\n\n  // \u0421\u043B\u0435\u0434\u0443\u0435\u0442 \u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0441\u0442\u0438\u043B\u0438 NProgress \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E.\n  includeCSS: true,\n\n  // \u0411\u0443\u0434\u0435\u0442 \u043B\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0441\u0447\u0435\u0442\u0447\u0438\u043A NProgress.\n  showSpinner: false,\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, "\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0434\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0434\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia, \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/tc39/proposal-dynamic-import"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 90
    }
  }), "\u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043C\u043F\u043E\u0440\u0442"), ". \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u0430\u043C \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u043F\u043B\u0430\u0433\u0438\u043D Babel. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u043B\u0430\u0433\u0438\u043D:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 10
    }
  }), "npm install @babel/plugin-syntax-dynamic-import\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0442\u0435\u043C \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0432 \u0441\u0432\u043E\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0444\u0430\u0439\u043B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 48
    }
  }, ".babelrc"), " \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-json"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 10
    }
  }), "{\n  \"plugins\": [\"@babel/plugin-syntax-dynamic-import\"]\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 Laravel Mix v4, \u043F\u043B\u0430\u0433\u0438\u043D \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0430 Babel \u0443\u0436\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D. \u041E\u0434\u043D\u0430\u043A\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0441 Laravel Mix v4 \u043F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0430, \u043A\u043E\u0433\u0434\u0430 \u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0438\u043B\u0438 \u0432 \u0444\u0430\u0439\u043B\u0430\u0445 Vue \u0438\u0437-\u0437\u0430", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", {
    href: "https://github.com/JeffreyWay/laravel-mix/issues/1856#issuecomment-448082909",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 3
    }
  }, "\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"), "Webpack", ' ', ". As a workaround, you need to drop Mix entirely or downgrade to Laravel Mix v3."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, "Finally, update the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 32
    }
  }, "resolveComponent"), " callback in your app initialization to use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 140
    }
  }, "import"), " instead of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 206
    }
  }, "require"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 196,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, "Consider using cache busting to force browsers to load the latest version of your assets. To do this, add the following to your webpack config:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 10
    }
  }), "output: {\n  chunkFilename: 'js/[name].js?id=[chunkhash]',\n}\n")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50LXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLDRCQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSwyQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSTtBQUZXLENBQWI7QUFpQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtB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O0FBQUEsdUpBbkxLLEVBb0xMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBQUwsQ0FwTEssQ0FBUDtBQTJMRDtLQS9MdUJMLFU7QUFpTXhCO0FBQ0FBLFVBQVUsQ0FBQ00sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jbGllbnQtc2lkZS1zZXR1cC5kNGRmNDMzNTU3NmM2N2MyODViOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAg0LrQu9C40LXQvdGC0YHQutC+0Lkg0YfQsNGB0YLQuCcsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPRg9GB0YLQsNC90L7QstC60LAt0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5JyxcbiAgICBuYW1lOiAn0KPRgdGC0LDQvdC+0LLQutCwINC30LDQstC40YHQuNC80L7RgdGC0LXQuSdcbiAgfSwge1xuICAgIHVybDogJyPQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjy3Qv9GA0LjQu9C+0LbQtdC90LjRjycsXG4gICAgbmFtZTogJ9CY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0YDQuNC70L7QttC10L3QuNGPJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C40L3QtNC40LrQsNGC0L7RgC3Qt9Cw0LPRgNGD0LfQutC4JyxcbiAgICBuYW1lOiAn0JjQvdC00LjQutCw0YLQvtGAINC30LDQs9GA0YPQt9C60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YDQsNC30LTQtdC70LXQvdC40LUt0LrQvtC00LAnLFxuICAgIG5hbWU6ICfQoNCw0LfQtNC10LvQtdC90LjQtSDQutC+0LTQsCdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCj0YHRgtCw0L3QvtCy0LrQsCDQutC70LjQtdC90YLRgdC60L7QuSDRh9Cw0YHRgtC4YH08L2gxPlxuICAgIDxwPntg0J/QvtGB0LvQtSDRgtC+0LPQviwg0LrQsNC6INCS0Ysg0L3QsNGB0YLRgNC+0LjQu9C4IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2VydmVyLXNpZGUtc2V0dXBcIlxuICAgICAgfX0+e2DQutC+0L3RhNC40LPRg9GA0LDRhtC40Y4g0L/Qu9Cw0YLRhNC+0YDQvNGLINC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LBgfTwvYT57YCwg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INC90LDRgdGC0YDQvtC40YLRjCDQutC70LjQtdC90YLRgdC60YPRjiDRgdGA0LXQtNGDLiBJbmVydGlhINCyINC90LDRgdGC0L7Rj9GJ0LXQtSDQstGA0LXQvNGPINC/0L7QtNC00LXRgNC20LjQstCw0LXRgiBSZWFjdCwgVnVlLmpzINC4IFN2ZWx0ZS5gfTwvcD5cbiAgICA8aDI+e2DQo9GB0YLQsNC90L7QstC60LAg0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5YH08L2gyPlxuICAgIDxwPntg0KPRgdGC0LDQvdC+0LLQuNGC0LUg0LrQu9C40LXQvdGC0YHQutC40LUg0LDQtNCw0L/RgtC10YDRiyBJbmVydGlhINGBINC/0L7QvNC+0YnRjNGOIE5QTSDQuNC70LggWWFybi5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2Jhc2gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBucG0gaW5zdGFsbCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZVxuICAgICAgICB5YXJuIGFkZCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2Jhc2gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBucG0gaW5zdGFsbCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0XG4gICAgICAgIHlhcm4gYWRkIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnYmFzaCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIG5wbSBpbnN0YWxsIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlXG4gICAgICAgIHlhcm4gYWRkIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0YDQuNC70L7QttC10L3QuNGPYH08L2gyPlxuICAgIDxwPntg0JfQsNGC0LXQvCDQvtCx0L3QvtCy0LjRgtC1INGB0LLQvtC5INC+0YHQvdC+0LLQvdC+0Lkg0YTQsNC50LsgSmF2YVNjcmlwdCwg0YfRgtC+0LHRiyDQt9Cw0LPRgNGD0LfQuNGC0Ywg0L/RgNC40LvQvtC20LXQvdC40LUgSW5lcnRpYS4g0JLRgdC1LCDRh9GC0L4g0LzRiyDQt9C00LXRgdGMINC00LXQu9Cw0LXQvCwg0Y3RgtC+INC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0LrQu9C40LXQvdGC0YHQutGD0Y4g0YHRgtGA0YPQutGC0YPRgNGDINGBINC/0L7QvNC+0YnRjNGOINCx0LDQt9C+0LLQvtCz0L4g0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiyBJbmVydGlhLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAzXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IGNyZWF0ZUFwcCwgaCB9IGZyb20gJ3Z1ZSdcbiAgICAgICAgaW1wb3J0IHsgQXBwLCBwbHVnaW4gfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlMydcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgY3JlYXRlQXBwKHtcbiAgICAgICAgICByZW5kZXI6ICgpID0+IGgoQXBwLCB7XG4gICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0LFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLnVzZShwbHVnaW4pLm1vdW50KGVsKVxcblxcblxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAyXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IEFwcCwgcGx1Z2luIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZSdcbiAgICAgICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXFxuXG4gICAgICAgIFZ1ZS51c2UocGx1Z2luKVxcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICByZW5kZXI6IGggPT4gaChBcHAsIHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLiRtb3VudChlbClcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgPEFwcFxuICAgICAgICAgICAgaW5pdGlhbFBhZ2U9e0pTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKX1cbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ9e25hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdH1cbiAgICAgICAgICAvPixcbiAgICAgICAgICBlbFxuICAgICAgICApXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgbmV3IEFwcCh7XG4gICAgICAgICAgdGFyZ2V0OiBlbCxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfS5zdmVsdGVcXGApLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlQ29tcG9uZW50YH08L2lubGluZUNvZGU+e2AgLSDRjdGC0L4g0L7QsdGA0LDRgtC90YvQuSDQstGL0LfQvtCyLCDQutC+0YLQvtGA0YvQuSDRgdC+0L7QsdGJ0LDQtdGCIEluZXJ0aWEsINC60LDQuiDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LrQvtC80L/QvtC90LXQvdGCINGB0YLRgNCw0L3QuNGG0YsuINCe0L0g0L/QvtC70YPRh9Cw0LXRgiDQuNC80Y8g0YHRgtGA0LDQvdC40YbRiyAo0YHRgtGA0L7QutGDKSDQuCDQtNC+0LvQttC10L0g0LLQvtC30LLRgNCw0YnQsNGC0Ywg0Y3QutC30LXQvNC/0LvRj9GAINC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsuYH08L3A+XG4gICAgPGgyPntg0JjQvdC00LjQutCw0YLQvtGAINC30LDQs9GA0YPQt9C60LhgfTwvaDI+XG4gICAgPHA+e2DQn9C+0YHQutC+0LvRjNC60YMg0LfQsNC/0YDQvtGB0YsgSW5lcnRpYSDQstGL0L/QvtC70L3Rj9GO0YLRgdGPINGH0LXRgNC10LcgWEhSLCDQuNC90LTQuNC60LDRgtC+0YAg0LfQsNCz0YDRg9C30LrQuCDQsdGA0LDRg9C30LXRgNCwINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC+0YLRgdGD0YLRgdGC0LLRg9C10YIuINCn0YLQvtCx0Ysg0YDQtdGI0LjRgtGMINGN0YLRgyDQv9GA0L7QsdC70LXQvNGDLCBJbmVydGlhINC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGCINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LkgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pbmVydGlhanMvcHJvZ3Jlc3NcIlxuICAgICAgfX0+e2DQv9Cw0LrQtdGCINC/0YDQvtCz0YDQtdGB0YHQsGB9PC9hPntgLCDQutC+0YLQvtGA0YvQuSDQuNC90YLQtdCz0YDQuNGA0YPQtdGC0YHRjyDRgSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9yaWNvc3RhY3J1ei5jb20vbnByb2dyZXNzL1wiXG4gICAgICB9fT57YE5Qcm9ncmVzcy5qc2B9PC9hPntgLCDRhdC+0YDQvtGI0LXQuSDQvdC10LHQvtC70YzRiNC+0Lkg0LHQuNCx0LvQuNC+0YLQtdC60L7QuSDQuNC90LTQuNC60LDRgtC+0YDQsCDQstGL0L/QvtC70L3QtdC90LjRjy5gfTwvcD5cbiAgICA8cD57YNCd0LDRh9C90LjRgtC1INGBINC10LPQviDRg9GB0YLQsNC90L7QstC60Lg6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1iYXNoXCJcbiAgICAgIH19PntgbnBtIGluc3RhbGwgQGluZXJ0aWFqcy9wcm9ncmVzc1xueWFybiBhZGQgQGluZXJ0aWFqcy9wcm9ncmVzc1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQn9C+0YHQu9C1INGD0YHRgtCw0L3QvtCy0LrQuCDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQudGC0LUg0LXQs9C+INCyINGB0LLQvtC10Lwg0L/RgNC40LvQvtC20LXQvdC40LguYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWFQcm9ncmVzcyB9IGZyb20gJ0BpbmVydGlhanMvcHJvZ3Jlc3MnXG5cbkluZXJ0aWFQcm9ncmVzcy5pbml0KClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0J7QvSDRgtCw0LrQttC1INC40LzQtdC10YIg0YDRj9C0INC/0LDRgNCw0LzQtdGC0YDQvtCyINC90LDRgdGC0YDQvtC50LrQuCwg0LrQvtGC0L7RgNGL0LUg0JLRiyDQvNC+0LbQtdGC0LUg0L/QtdGA0LXQtNCw0YLRjCDQvNC10YLQvtC00YMgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5pdCgpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWFQcm9ncmVzcy5pbml0KHtcbiAgLy8g0JfQsNC00LXRgNC20LrQsCDQsiDQvNC40LvQu9C40YHQtdC60YPQvdC00LDRhSwg0L/QvtGB0LvQtSDQutC+0YLQvtGA0L7QuVxuICAvLyDQstC+INCy0YDQtdC80Y8g0L3QsNCy0LjQs9Cw0YbQuNC4INC/0L7Rj9Cy0LjRgtGB0Y8g0LjQvdC00LjQutCw0YLQvtGAINCy0YvQv9C+0LvQvdC10L3QuNGPLlxuICBkZWxheTogMjUwLFxuXG4gIC8vINCm0LLQtdGCINC40L3QtNC40LrQsNGC0L7RgNCwINCy0YvQv9C+0LvQvdC10L3QuNGPLlxuICBjb2xvcjogJyMyOWQnLFxuXG4gIC8vINCh0LvQtdC00YPQtdGCINC70Lgg0LLQutC70Y7Rh9Cw0YLRjCDRgdGC0LjQu9C4IE5Qcm9ncmVzcyDQv9C+INGD0LzQvtC70YfQsNC90LjRji5cbiAgaW5jbHVkZUNTUzogdHJ1ZSxcblxuICAvLyDQkdGD0LTQtdGCINC70Lgg0L7RgtC+0LHRgNCw0LbQsNGC0YzRgdGPINGB0YfQtdGC0YfQuNC6IE5Qcm9ncmVzcy5cbiAgc2hvd1NwaW5uZXI6IGZhbHNlLFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCg0LDQt9C00LXQu9C10L3QuNC1INC60L7QtNCwYH08L2gyPlxuICAgIDxwPntg0KfRgtC+0LHRiyDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YDQsNC30LTQtdC70LXQvdC40LUg0LrQvtC00LAg0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYSwg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INCy0LrQu9GO0YfQuNGC0YwgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWR5bmFtaWMtaW1wb3J0XCJcbiAgICAgIH19Pntg0LTQuNC90LDQvNC40YfQtdGB0LrQuNC5INC40LzQv9C+0YDRgmB9PC9hPntgLiDQlNC70Y8g0Y3RgtC+0LPQviDQstCw0Lwg0L/QvtC90LDQtNC+0LHQuNGC0YHRjyDQv9C70LDQs9C40L0gQmFiZWwuINCh0L3QsNGH0LDQu9CwINGD0YHRgtCw0L3QvtCy0LjRgtC1INC/0LvQsNCz0LjQvTpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWJhc2hcIlxuICAgICAgfX0+e2BucG0gaW5zdGFsbCBAYmFiZWwvcGx1Z2luLXN5bnRheC1keW5hbWljLWltcG9ydFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQl9Cw0YLQtdC8INGB0L7Qt9C00LDQudGC0LUg0LIg0YHQstC+0LXQvCDQv9GA0L7QtdC60YLQtSDRhNCw0LnQuyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AuYmFiZWxyY2B9PC9pbmxpbmVDb2RlPntgINGB0L4g0YHQu9C10LTRg9GO0YnQuNC8OmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNvblwiXG4gICAgICB9fT57YHtcbiAgXCJwbHVnaW5zXCI6IFtcIkBiYWJlbC9wbHVnaW4tc3ludGF4LWR5bmFtaWMtaW1wb3J0XCJdXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj5cbiAg0JXRgdC70Lgg0JLRiyDQuNGB0L/QvtC70YzQt9GD0LXRgtC1IExhcmF2ZWwgTWl4IHY0LCDQv9C70LDQs9C40L0g0LTQuNC90LDQvNC40YfQtdGB0LrQvtCz0L4g0LjQvNC/0L7RgNGC0LAgQmFiZWwg0YPQttC1INC90LDRgdGC0YDQvtC10L0uINCe0LTQvdCw0LrQviDRgdGD0YnQtdGB0YLQstGD0LXRgiDQuNC30LLQtdGB0YLQvdCw0Y8g0L/RgNC+0LHQu9C10LzQsCDRgSBMYXJhdmVsIE1peCB2NCDQv9GA0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Lgg0LTQuNC90LDQvNC40YfQtdGB0LrQvtCz0L4g0LjQvNC/0L7RgNGC0LAsINC60L7Qs9C00LAg0JLRiyDQvdC1INC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YHRgtC40LvQuCDQsiDRhNCw0LnQu9Cw0YUgVnVlINC40Lct0LfQsFxuICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0plZmZyZXlXYXkvbGFyYXZlbC1taXgvaXNzdWVzLzE4NTYjaXNzdWVjb21tZW50LTQ0ODA4MjkwOVwiPtC+0LPRgNCw0L3QuNGH0LXQvdC40Y88L2E+V2VicGFja3snICd9LiBBcyBhXG4gIHdvcmthcm91bmQsIHlvdSBuZWVkIHRvIGRyb3AgTWl4IGVudGlyZWx5IG9yIGRvd25ncmFkZSB0byBMYXJhdmVsIE1peCB2My5cbiAgICA8L05vdGljZT5cbiAgICA8cD57YEZpbmFsbHksIHVwZGF0ZSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUNvbXBvbmVudGB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrIGluIHlvdXIgYXBwIGluaXRpYWxpemF0aW9uIHRvIHVzZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbXBvcnRgfTwvaW5saW5lQ29kZT57YCBpbnN0ZWFkIG9mIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlcXVpcmVgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiBpbXBvcnQoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLnRoZW4obW9kdWxlID0+IG1vZHVsZS5kZWZhdWx0KSxcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICByZXNvbHZlQ29tcG9uZW50PXtuYW1lID0+IGltcG9ydChcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkudGhlbihtb2R1bGUgPT4gbW9kdWxlLmRlZmF1bHQpfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gaW1wb3J0KFxcYC4vUGFnZXMvXFwke25hbWV9LnN2ZWx0ZVxcYCksXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgQ29uc2lkZXIgdXNpbmcgY2FjaGUgYnVzdGluZyB0byBmb3JjZSBicm93c2VycyB0byBsb2FkIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB5b3VyIGFzc2V0cy4gVG8gZG8gdGhpcywgYWRkIHRoZSBmb2xsb3dpbmcgdG8geW91ciB3ZWJwYWNrIGNvbmZpZzpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19Pntgb3V0cHV0OiB7XG4gIGNodW5rRmlsZW5hbWU6ICdqcy9bbmFtZV0uanM/aWQ9W2NodW5raGFzaF0nLFxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9