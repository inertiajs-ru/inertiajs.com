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
  }, "Since Inertia requests are made via XHR, there's no default browser loading indicator. To solve this, Inertia provides an optional ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/inertiajs/progress"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 143
    }
  }), "progress package"), " that integrates with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://ricostacruz.com/nprogress/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 60
    }
  }), "NProgress.js"), ", a nice little progress bar library."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, "Start by installing it:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "Once it's been installed, initialize it in your app."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "It also comes with a number of customization options, which you can pass to the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 92
    }
  }, "init()"), " method."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }), "InertiaProgress.init({\n  // The delay after which the progress bar will\n  // appear during navigation, in milliseconds.\n  delay: 250,\n\n  // The color of the progress bar.\n  color: '#29d',\n\n  // Whether to include the default NProgress styles.\n  includeCSS: true,\n\n  // Whether the NProgress spinner will be shown.\n  showSpinner: false,\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "To use code splitting with Inertia you'll need to enable ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/tc39/proposal-dynamic-import"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 69
    }
  }), "dynamic imports"), ". You'll need a Babel plugin to make this work. First, install the plugin:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "Next, create a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 27
    }
  }, ".babelrc"), " file in your project with the following:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "If you're using Laravel Mix v4, the dynamic imports Babel plugin is already configured. However, there is a known issue with Laravel Mix v4 when using dynamic imports where you cannot use styles within Vue files due to a Webpack", ' ', Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", {
    href: "https://github.com/JeffreyWay/laravel-mix/issues/1856#issuecomment-448082909",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 3
    }
  }, "limitation"), ". As a workaround, you need to drop Mix entirely or downgrade to Laravel Mix v3."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, "Finally, update the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 32
    }
  }, "resolveComponent"), " callback in your app initialization to use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 140
    }
  }, "import"), " instead of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 197,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "Consider using cache busting to force browsers to load the latest version of your assets. To do this, add the following to your webpack config:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
      lineNumber: 217,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50LXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLDRCQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSwyQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSTtBQUZXLENBQWI7QUFpQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtB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QUEsdUpBcExLLEVBcUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBQUwsQ0FyTEssQ0FBUDtBQTRMRDtLQWhNdUJMLFU7QUFrTXhCO0FBQ0FBLFVBQVUsQ0FBQ00sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jbGllbnQtc2lkZS1zZXR1cC4zZTA5ZjEyNWE4NDJjYTE5N2Q5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAg0LrQu9C40LXQvdGC0YHQutC+0Lkg0YfQsNGB0YLQuCcsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPRg9GB0YLQsNC90L7QstC60LAt0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5JyxcbiAgICBuYW1lOiAn0KPRgdGC0LDQvdC+0LLQutCwINC30LDQstC40YHQuNC80L7RgdGC0LXQuSdcbiAgfSwge1xuICAgIHVybDogJyPQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjy3Qv9GA0LjQu9C+0LbQtdC90LjRjycsXG4gICAgbmFtZTogJ9CY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0YDQuNC70L7QttC10L3QuNGPJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C40L3QtNC40LrQsNGC0L7RgC3Qt9Cw0LPRgNGD0LfQutC4JyxcbiAgICBuYW1lOiAn0JjQvdC00LjQutCw0YLQvtGAINC30LDQs9GA0YPQt9C60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YDQsNC30LTQtdC70LXQvdC40LUt0LrQvtC00LAnLFxuICAgIG5hbWU6ICfQoNCw0LfQtNC10LvQtdC90LjQtSDQutC+0LTQsCdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCj0YHRgtCw0L3QvtCy0LrQsCDQutC70LjQtdC90YLRgdC60L7QuSDRh9Cw0YHRgtC4YH08L2gxPlxuICAgIDxwPntg0J/QvtGB0LvQtSDRgtC+0LPQviwg0LrQsNC6INCS0Ysg0L3QsNGB0YLRgNC+0LjQu9C4IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2VydmVyLXNpZGUtc2V0dXBcIlxuICAgICAgfX0+e2DQutC+0L3RhNC40LPRg9GA0LDRhtC40Y4g0L/Qu9Cw0YLRhNC+0YDQvNGLINC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LBgfTwvYT57YCwg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INC90LDRgdGC0YDQvtC40YLRjCDQutC70LjQtdC90YLRgdC60YPRjiDRgdGA0LXQtNGDLiBJbmVydGlhINCyINC90LDRgdGC0L7Rj9GJ0LXQtSDQstGA0LXQvNGPINC/0L7QtNC00LXRgNC20LjQstCw0LXRgiBSZWFjdCwgVnVlLmpzINC4IFN2ZWx0ZS5gfTwvcD5cbiAgICA8aDI+e2DQo9GB0YLQsNC90L7QstC60LAg0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5YH08L2gyPlxuICAgIDxwPntg0KPRgdGC0LDQvdC+0LLQuNGC0LUg0LrQu9C40LXQvdGC0YHQutC40LUg0LDQtNCw0L/RgtC10YDRiyBJbmVydGlhINGBINC/0L7QvNC+0YnRjNGOIE5QTSDQuNC70LggWWFybi5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2Jhc2gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBucG0gaW5zdGFsbCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZVxuICAgICAgICB5YXJuIGFkZCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2Jhc2gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBucG0gaW5zdGFsbCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0XG4gICAgICAgIHlhcm4gYWRkIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnYmFzaCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIG5wbSBpbnN0YWxsIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlXG4gICAgICAgIHlhcm4gYWRkIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0YDQuNC70L7QttC10L3QuNGPYH08L2gyPlxuICAgIDxwPntg0JfQsNGC0LXQvCDQvtCx0L3QvtCy0LjRgtC1INGB0LLQvtC5INC+0YHQvdC+0LLQvdC+0Lkg0YTQsNC50LsgSmF2YVNjcmlwdCwg0YfRgtC+0LHRiyDQt9Cw0LPRgNGD0LfQuNGC0Ywg0L/RgNC40LvQvtC20LXQvdC40LUgSW5lcnRpYS4g0JLRgdC1LCDRh9GC0L4g0LzRiyDQt9C00LXRgdGMINC00LXQu9Cw0LXQvCwg0Y3RgtC+INC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0LrQu9C40LXQvdGC0YHQutGD0Y4g0YHRgtGA0YPQutGC0YPRgNGDINGBINC/0L7QvNC+0YnRjNGOINCx0LDQt9C+0LLQvtCz0L4g0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiyBJbmVydGlhLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAzXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IGNyZWF0ZUFwcCwgaCB9IGZyb20gJ3Z1ZSdcbiAgICAgICAgaW1wb3J0IHsgQXBwLCBwbHVnaW4gfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlMydcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgY3JlYXRlQXBwKHtcbiAgICAgICAgICByZW5kZXI6ICgpID0+IGgoQXBwLCB7XG4gICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0LFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLnVzZShwbHVnaW4pLm1vdW50KGVsKVxcblxcblxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAyXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IEFwcCwgcGx1Z2luIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZSdcbiAgICAgICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXFxuXG4gICAgICAgIFZ1ZS51c2UocGx1Z2luKVxcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICByZW5kZXI6IGggPT4gaChBcHAsIHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLiRtb3VudChlbClcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgPEFwcFxuICAgICAgICAgICAgaW5pdGlhbFBhZ2U9e0pTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKX1cbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ9e25hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdH1cbiAgICAgICAgICAvPixcbiAgICAgICAgICBlbFxuICAgICAgICApXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgbmV3IEFwcCh7XG4gICAgICAgICAgdGFyZ2V0OiBlbCxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfS5zdmVsdGVcXGApLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlQ29tcG9uZW50YH08L2lubGluZUNvZGU+e2AgLSDRjdGC0L4g0L7QsdGA0LDRgtC90YvQuSDQstGL0LfQvtCyLCDQutC+0YLQvtGA0YvQuSDRgdC+0L7QsdGJ0LDQtdGCIEluZXJ0aWEsINC60LDQuiDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LrQvtC80L/QvtC90LXQvdGCINGB0YLRgNCw0L3QuNGG0YsuINCe0L0g0L/QvtC70YPRh9Cw0LXRgiDQuNC80Y8g0YHRgtGA0LDQvdC40YbRiyAo0YHRgtGA0L7QutGDKSDQuCDQtNC+0LvQttC10L0g0LLQvtC30LLRgNCw0YnQsNGC0Ywg0Y3QutC30LXQvNC/0LvRj9GAINC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsuYH08L3A+XG4gICAgPGgyPntg0JjQvdC00LjQutCw0YLQvtGAINC30LDQs9GA0YPQt9C60LhgfTwvaDI+XG4gICAgPHA+e2BTaW5jZSBJbmVydGlhIHJlcXVlc3RzIGFyZSBtYWRlIHZpYSBYSFIsIHRoZXJlJ3Mgbm8gZGVmYXVsdCBicm93c2VyIGxvYWRpbmcgaW5kaWNhdG9yLiBUbyBzb2x2ZSB0aGlzLCBJbmVydGlhIHByb3ZpZGVzIGFuIG9wdGlvbmFsIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaW5lcnRpYWpzL3Byb2dyZXNzXCJcbiAgICAgIH19PntgcHJvZ3Jlc3MgcGFja2FnZWB9PC9hPntgIHRoYXQgaW50ZWdyYXRlcyB3aXRoIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3JpY29zdGFjcnV6LmNvbS9ucHJvZ3Jlc3MvXCJcbiAgICAgIH19PntgTlByb2dyZXNzLmpzYH08L2E+e2AsIGEgbmljZSBsaXR0bGUgcHJvZ3Jlc3MgYmFyIGxpYnJhcnkuYH08L3A+XG4gICAgPHA+e2BTdGFydCBieSBpbnN0YWxsaW5nIGl0OmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtYmFzaFwiXG4gICAgICB9fT57YG5wbSBpbnN0YWxsIEBpbmVydGlhanMvcHJvZ3Jlc3Ncbnlhcm4gYWRkIEBpbmVydGlhanMvcHJvZ3Jlc3NcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgT25jZSBpdCdzIGJlZW4gaW5zdGFsbGVkLCBpbml0aWFsaXplIGl0IGluIHlvdXIgYXBwLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBJbmVydGlhUHJvZ3Jlc3MgfSBmcm9tICdAaW5lcnRpYWpzL3Byb2dyZXNzJ1xuXG5JbmVydGlhUHJvZ3Jlc3MuaW5pdCgpXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEl0IGFsc28gY29tZXMgd2l0aCBhIG51bWJlciBvZiBjdXN0b21pemF0aW9uIG9wdGlvbnMsIHdoaWNoIHlvdSBjYW4gcGFzcyB0byB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5pdCgpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhUHJvZ3Jlc3MuaW5pdCh7XG4gIC8vIFRoZSBkZWxheSBhZnRlciB3aGljaCB0aGUgcHJvZ3Jlc3MgYmFyIHdpbGxcbiAgLy8gYXBwZWFyIGR1cmluZyBuYXZpZ2F0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gIGRlbGF5OiAyNTAsXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gIGNvbG9yOiAnIzI5ZCcsXG5cbiAgLy8gV2hldGhlciB0byBpbmNsdWRlIHRoZSBkZWZhdWx0IE5Qcm9ncmVzcyBzdHlsZXMuXG4gIGluY2x1ZGVDU1M6IHRydWUsXG5cbiAgLy8gV2hldGhlciB0aGUgTlByb2dyZXNzIHNwaW5uZXIgd2lsbCBiZSBzaG93bi5cbiAgc2hvd1NwaW5uZXI6IGZhbHNlLFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCg0LDQt9C00LXQu9C10L3QuNC1INC60L7QtNCwYH08L2gyPlxuICAgIDxwPntgVG8gdXNlIGNvZGUgc3BsaXR0aW5nIHdpdGggSW5lcnRpYSB5b3UnbGwgbmVlZCB0byBlbmFibGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWR5bmFtaWMtaW1wb3J0XCJcbiAgICAgIH19PntgZHluYW1pYyBpbXBvcnRzYH08L2E+e2AuIFlvdSdsbCBuZWVkIGEgQmFiZWwgcGx1Z2luIHRvIG1ha2UgdGhpcyB3b3JrLiBGaXJzdCwgaW5zdGFsbCB0aGUgcGx1Z2luOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtYmFzaFwiXG4gICAgICB9fT57YG5wbSBpbnN0YWxsIEBiYWJlbC9wbHVnaW4tc3ludGF4LWR5bmFtaWMtaW1wb3J0XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YE5leHQsIGNyZWF0ZSBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YC5iYWJlbHJjYH08L2lubGluZUNvZGU+e2AgZmlsZSBpbiB5b3VyIHByb2plY3Qgd2l0aCB0aGUgZm9sbG93aW5nOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNvblwiXG4gICAgICB9fT57YHtcbiAgXCJwbHVnaW5zXCI6IFtcIkBiYWJlbC9wbHVnaW4tc3ludGF4LWR5bmFtaWMtaW1wb3J0XCJdXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj5cbiAgSWYgeW91J3JlIHVzaW5nIExhcmF2ZWwgTWl4IHY0LCB0aGUgZHluYW1pYyBpbXBvcnRzIEJhYmVsIHBsdWdpbiBpcyBhbHJlYWR5IGNvbmZpZ3VyZWQuIEhvd2V2ZXIsIHRoZXJlIGlzIGEga25vd25cbiAgaXNzdWUgd2l0aCBMYXJhdmVsIE1peCB2NCB3aGVuIHVzaW5nIGR5bmFtaWMgaW1wb3J0cyB3aGVyZSB5b3UgY2Fubm90IHVzZSBzdHlsZXMgd2l0aGluIFZ1ZSBmaWxlcyBkdWUgdG8gYSBXZWJwYWNreycgJ31cbiAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KZWZmcmV5V2F5L2xhcmF2ZWwtbWl4L2lzc3Vlcy8xODU2I2lzc3VlY29tbWVudC00NDgwODI5MDlcIj5saW1pdGF0aW9uPC9hPi4gQXMgYVxuICB3b3JrYXJvdW5kLCB5b3UgbmVlZCB0byBkcm9wIE1peCBlbnRpcmVseSBvciBkb3duZ3JhZGUgdG8gTGFyYXZlbCBNaXggdjMuXG4gICAgPC9Ob3RpY2U+XG4gICAgPHA+e2BGaW5hbGx5LCB1cGRhdGUgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnRgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjayBpbiB5b3VyIGFwcCBpbml0aWFsaXphdGlvbiB0byB1c2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW1wb3J0YH08L2lubGluZUNvZGU+e2AgaW5zdGVhZCBvZiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXF1aXJlYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gaW1wb3J0KFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZGVmYXVsdCksXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgcmVzb2x2ZUNvbXBvbmVudD17bmFtZSA9PiBpbXBvcnQoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLnRoZW4obW9kdWxlID0+IG1vZHVsZS5kZWZhdWx0KX1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IGltcG9ydChcXGAuL1BhZ2VzL1xcJHtuYW1lfS5zdmVsdGVcXGApLFxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YENvbnNpZGVyIHVzaW5nIGNhY2hlIGJ1c3RpbmcgdG8gZm9yY2UgYnJvd3NlcnMgdG8gbG9hZCB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgeW91ciBhc3NldHMuIFRvIGRvIHRoaXMsIGFkZCB0aGUgZm9sbG93aW5nIHRvIHlvdXIgd2VicGFjayBjb25maWc6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YG91dHB1dDoge1xuICBjaHVua0ZpbGVuYW1lOiAnanMvW25hbWVdLmpzP2lkPVtjaHVua2hhc2hdJyxcbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==