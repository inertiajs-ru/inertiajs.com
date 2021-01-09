webpackHotUpdate_N_E("pages/validation",{

/***/ "./pages/validation.mdx":
/*!******************************!*\
  !*** ./pages/validation.mdx ***!
  \******************************/
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



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\validation.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { App } from '@inertiajs/inertia-svelte'\n\n        const el = document.getElementById('app')\n\n        new App({\n          target: el,\n          props: {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(`./Pages/${name}.svelte`),\n            resolveErrors: page => (page.props.errors || {}),\n          },\n        })\n      "], ["\n        import { App } from '@inertiajs/inertia-svelte'\\n\n        const el = document.getElementById('app')\\n\n        new App({\n          target: el,\n          props: {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(\\`./Pages/\\${name}.svelte\\`),\n            resolveErrors: page => (page.props.errors || {}),\n          },\n        })\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { App } from '@inertiajs/inertia-react'\n        import React from 'react'\n        import { render } from 'react-dom'\n\n        const el = document.getElementById('app')\n\n        render(\n          <App\n            initialPage={JSON.parse(el.dataset.page)}\n            resolveComponent={name => require(`./Pages/${name}`).default}\n            resolveErrors={page => (page.props.errors || {})},\n          />,\n          el\n        )\n      "], ["\n        import { App } from '@inertiajs/inertia-react'\n        import React from 'react'\n        import { render } from 'react-dom'\\n\n        const el = document.getElementById('app')\\n\n        render(\n          <App\n            initialPage={JSON.parse(el.dataset.page)}\n            resolveComponent={name => require(\\`./Pages/\\${name}\\`).default}\n            resolveErrors={page => (page.props.errors || {})},\n          />,\n          el\n        )\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\n\n        import { createApp, h } from 'vue'\n        import { App, plugin } from '@inertiajs/inertia-vue3'\n\n        const el = document.getElementById('app')\n\n        createApp({\n          render: () => h(App, {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(`./Pages/${name}`).default,\n            resolveErrors: page => (page.props.errors || {}),\n          })\n        }).use(plugin).mount(el)\n\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\n\n        import { App, plugin } from '@inertiajs/inertia-vue'\n        import Vue from 'vue'\n\n        Vue.use(plugin)\n\n        const el = document.getElementById('app')\n\n        new Vue({\n          render: h => h(App, {\n            props: {\n              initialPage: JSON.parse(el.dataset.page),\n              resolveComponent: name => require(`./Pages/${name}`).default,\n              resolveErrors: page => (page.props.errors || {}),\n            },\n          }),\n        }).$mount(el)\n      "], ["\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\\n\n        import { createApp, h } from 'vue'\n        import { App, plugin } from '@inertiajs/inertia-vue3'\\n\n        const el = document.getElementById('app')\\n\n        createApp({\n          render: () => h(App, {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(\\`./Pages/\\${name}\\`).default,\n            resolveErrors: page => (page.props.errors || {}),\n          })\n        }).use(plugin).mount(el)\\n\\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\\n\n        import { App, plugin } from '@inertiajs/inertia-vue'\n        import Vue from 'vue'\\n\n        Vue.use(plugin)\\n\n        const el = document.getElementById('app')\\n\n        new Vue({\n          render: h => h(App, {\n            props: {\n              initialPage: JSON.parse(el.dataset.page),\n              resolveComponent: name => require(\\`./Pages/\\${name}\\`).default,\n              resolveErrors: page => (page.props.errors || {}),\n            },\n          }),\n        }).$mount(el)\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <script>\n          import { Inertia } from '@inertiajs/inertia'\n\n          export let errors = {}\n\n          let values = {\n            first_name: null,\n            last_name: null,\n            email: null,\n          }\n\n          function handleSubmit() {\n            Inertia.post('/users', values)\n          }\n        </script>\n\n        <form on:submit|preventDefault={handleSubmit}>\n          <label for=\"first_name\">First name:</label>\n          <input id=\"first_name\" bind:value={values.first_name}>\n          {#if errors.first_name}<div>{errors.first_name}</div>{/if}\n\n          <label for=\"last_name\">Last name:</label>\n          <input id=\"last_name\" bind:value={values.last_name}>\n          {#if errors.last_name}<div>{errors.last_name}</div>{/if}\n\n          <label for=\"email\">Email:</label>\n          <input id=\"email\" bind:value={values.email}>\n          {#if errors.email}<div>{errors.email}</div>{/if}\n\n          <button type=\"submit\">Submit</button>\n        </form>\n      "], ["\n        <script>\n          import { Inertia } from '@inertiajs/inertia'\\n\n          export let errors = {}\\n\n          let values = {\n            first_name: null,\n            last_name: null,\n            email: null,\n          }\\n\n          function handleSubmit() {\n            Inertia.post('/users', values)\n          }\n        </script>\\n\n        <form on:submit|preventDefault={handleSubmit}>\n          <label for=\"first_name\">First name:</label>\n          <input id=\"first_name\" bind:value={values.first_name}>\n          {#if errors.first_name}<div>{errors.first_name}</div>{/if}\\n\n          <label for=\"last_name\">Last name:</label>\n          <input id=\"last_name\" bind:value={values.last_name}>\n          {#if errors.last_name}<div>{errors.last_name}</div>{/if}\\n\n          <label for=\"email\">Email:</label>\n          <input id=\"email\" bind:value={values.email}>\n          {#if errors.email}<div>{errors.email}</div>{/if}\\n\n          <button type=\"submit\">Submit</button>\n        </form>\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n        import { usePage } from '@inertiajs/inertia-react'\n        import React, { useState } from 'react'\n\n        export default function Edit() {\n          const { errors } = usePage().props\n\n          const [values, setValues] = useState({\n            first_name: null,\n            last_name: null,\n            email: null,\n          })\n\n          function handleChange(e) {\n            setValues(values => ({\n              ...values,\n              [e.target.id]: e.target.value,\n            }))\n          }\n\n          function handleSubmit(e) {\n            e.preventDefault()\n            Inertia.post('/users', values)\n          }\n\n          return (\n            <form onSubmit={handleSubmit}>\n              <label for=\"first_name\">First name:</label>\n              <input id=\"first_name\" value={values.first_name} onChange={handleChange} />\n              {errors.first_name && <div>{errors.first_name}</div>}\n              <label for=\"last_name\">Last name:</label>\n              <input id=\"last_name\" value={values.last_name} onChange={handleChange} />\n              {errors.last_name && <div>{errors.last_name}</div>}\n              <label for=\"email\">Email:</label>\n              <input id=\"email\" value={values.email} onChange={handleChange} />\n              {errors.email && <div>{errors.email}</div>}\n              <button type=\"submit\">Submit</button>\n            </form>\n          )\n        }\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\n        import { usePage } from '@inertiajs/inertia-react'\n        import React, { useState } from 'react'\\n\n        export default function Edit() {\n          const { errors } = usePage().props\\n\n          const [values, setValues] = useState({\n            first_name: null,\n            last_name: null,\n            email: null,\n          })\\n\n          function handleChange(e) {\n            setValues(values => ({\n              ...values,\n              [e.target.id]: e.target.value,\n            }))\n          }\\n\n          function handleSubmit(e) {\n            e.preventDefault()\n            Inertia.post('/users', values)\n          }\\n\n          return (\n            <form onSubmit={handleSubmit}>\n              <label for=\"first_name\">First name:</label>\n              <input id=\"first_name\" value={values.first_name} onChange={handleChange} />\n              {errors.first_name && <div>{errors.first_name}</div>}\n              <label for=\"last_name\">Last name:</label>\n              <input id=\"last_name\" value={values.last_name} onChange={handleChange} />\n              {errors.last_name && <div>{errors.last_name}</div>}\n              <label for=\"email\">Email:</label>\n              <input id=\"email\" value={values.email} onChange={handleChange} />\n              {errors.email && <div>{errors.email}</div>}\n              <button type=\"submit\">Submit</button>\n            </form>\n          )\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <template>\n          <form @submit.prevent=\"submit\">\n            <label for=\"first_name\">First name:</label>\n            <input id=\"first_name\" v-model=\"form.first_name\" />\n            <div v-if=\"errors.first_name\">{{ errors.first_name }}</div>\n            <label for=\"last_name\">Last name:</label>\n            <input id=\"last_name\" v-model=\"form.last_name\" />\n            <div v-if=\"errors.last_name\">{{ errors.last_name }}</div>\n            <label for=\"email\">Email:</label>\n            <input id=\"email\" v-model=\"form.email\" />\n            <div v-if=\"errors.email\">{{ errors.email }}</div>\n            <button type=\"submit\">Submit</button>\n          </form>\n        </template>\n\n        <script>\n        export default {\n          props: {\n            errors: Object,\n          },\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                email: null,\n              },\n            }\n          },\n          methods: {\n            submit() {\n              this.$inertia.post('/users', this.form)\n            },\n          },\n        }\n        </script>\n      "], ["\n        <template>\n          <form @submit.prevent=\"submit\">\n            <label for=\"first_name\">First name:</label>\n            <input id=\"first_name\" v-model=\"form.first_name\" />\n            <div v-if=\"errors.first_name\">{{ errors.first_name }}</div>\n            <label for=\"last_name\">Last name:</label>\n            <input id=\"last_name\" v-model=\"form.last_name\" />\n            <div v-if=\"errors.last_name\">{{ errors.last_name }}</div>\n            <label for=\"email\">Email:</label>\n            <input id=\"email\" v-model=\"form.email\" />\n            <div v-if=\"errors.email\">{{ errors.email }}</div>\n            <button type=\"submit\">Submit</button>\n          </form>\n        </template>\\n\n        <script>\n        export default {\n          props: {\n            errors: Object,\n          },\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                email: null,\n              },\n            }\n          },\n          methods: {\n            submit() {\n              this.$inertia.post('/users', this.form)\n            },\n          },\n        }\n        </script>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        # todo\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        class UsersController extends Controller\n        {\n            public function create()\n            {\n                return Inertia::render('Users/Create');\n            }\n\n            public function store()\n            {\n              Request::validate([\n                  'first_name' => ['required', 'max:50'],\n                  'last_name' => ['required', 'max:50'],\n                  'email' => ['required', 'max:50', 'email'],\n              ]);\n\n              $user = User::create(\n                Request::only('first_name', 'last_name', 'email')\n              );\n\n              return Redirect::route('users.show', $user);\n            }\n        }\n      "], ["\n        class UsersController extends Controller\n        {\n            public function create()\n            {\n                return Inertia::render('Users/Create');\n            }\\n\n            public function store()\n            {\n              Request::validate([\n                  'first_name' => ['required', 'max:50'],\n                  'last_name' => ['required', 'max:50'],\n                  'email' => ['required', 'max:50', 'email'],\n              ]);\\n\n              $user = User::create(\n                Request::only('first_name', 'last_name', 'email')\n              );\\n\n              return Redirect::route('users.show', $user);\n            }\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Валидация',
  links: [{
    url: '#как-это-устроено',
    name: 'Как это устроено'
  }, {
    url: '#обмен-ошибками',
    name: 'Обмен ошибками'
  }, {
    url: '#отображение-ошибок',
    name: 'Отображение ошибок'
  }, {
    url: '#повторное-заполнение-ввода',
    name: 'Повторное заполнение ввода'
  }, {
    url: '#устранение-ошибок',
    name: 'Устранение ошибок'
  }, {
    url: '#пакеты-ошибок',
    name: 'Пакеты ошибок'
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
      lineNumber: 41,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, "\u0412\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "\u041A\u0430\u043A \u044D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u043E"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0438\u043D\u0430\u0447\u0435, \u0447\u0435\u043C \u0432 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0435, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 ajax, \u0433\u0434\u0435 \u0412\u044B \u043E\u0442\u043B\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438\u0437 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 182
    }
  }, "422"), " \u0438 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u0444\u043E\u0440\u043C\u044B. \u042D\u0442\u043E \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E Inertia \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 331
    }
  }, "422"), ". \u0421\u043A\u043E\u0440\u0435\u0435, Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u043A\u0430\u043A \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B. \u0412\u043E\u0442 \u043A\u0430\u043A:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0412\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0412\u044B \u043D\u0435 \u0441\u0440\u0430\u0437\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0435 \u044D\u0442\u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u0438\u0434\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 JSON ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 158
    }
  }, "422"), ". \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0412\u044B \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 (\u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430) \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0444\u043E\u0440\u043C\u044B, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0412\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0432 \u0441\u0435\u0430\u043D\u0441\u0435. \u0422\u0430\u043A\u0438\u0435 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438, \u043A\u0430\u043A Laravel, \u0434\u0435\u043B\u0430\u044E\u0442 \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0442\u0435\u043C, \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437, \u043A\u043E\u0433\u0434\u0430 \u044D\u0442\u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u0441\u0435\u0430\u043D\u0441\u0435, \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F Inertia, \u0434\u0435\u043B\u0430\u044F \u0438\u0445 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u0439 \u0444\u043E\u0440\u043C\u0435. \u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C\u0438, \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, "\u041E\u0431\u043C\u0435\u043D \u043E\u0448\u0438\u0431\u043A\u0430\u043C\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0431\u044B\u043B\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0412\u0430\u0448\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u0430\u044F \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0438\u043C\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 166
    }
  }, "errors"), ". \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u044B, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A \u0430\u0434\u0430\u043F\u0442\u0435\u0440 Laravel, \u0434\u0435\u043B\u0430\u044E\u0442 \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u0414\u0440\u0443\u0433\u0438\u043C \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 52,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u0448\u0438\u0431\u043A\u0438 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043A\u0430\u043A \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0438\u0445 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0438\u0445 \u043D\u0430\u043B\u0438\u0447\u0438\u044F. \u0412\u043E\u0442 \u043A\u0430\u043A \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0432 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430\u0445 Vue \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0448\u0438\u0431\u043A\u0430\u043C \u0447\u0435\u0440\u0435\u0437 \u043E\u0431\u044A\u0435\u043A\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 106
    }
  }, "$page.props.errors"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0432\u0432\u043E\u0434\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    }
  }, "\u0425\u043E\u0442\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A \u0432 Inertia \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0445 \u0444\u043E\u0440\u043C, \u044D\u0442\u043E\u0442 \u043F\u043E\u0434\u0445\u043E\u0434 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u043B\u0443\u0447\u0448\u0435, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0412\u0430\u043C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0441\u0442\u0430\u0440\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0438 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0444\u043E\u0440\u043C\u044B, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043E\u043D \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F. \u0418 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/manual-visits#component-state"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 193
    }
  }), "\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430"), " \u0434\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 56
    }
  }, "post"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 110
    }
  }, "put"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 163
    }
  }, "patch"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 219
    }
  }, "delete"), ". \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u0441\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0430\u0440\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u043A \u0435\u0441\u0442\u044C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, "\u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435, \u0447\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C, - \u044D\u0442\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 57
    }
  }, "errors"), ", \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F Inertia \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0442 \u043E\u0442\u0432\u0435\u0442\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 70
    }
  }, "422"), ", Inertia \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C, \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043B\u0438 \u043E\u0442\u0432\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E Inertia \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 237
    }
  }, "page.props.errors"), " \u043D\u0430 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043E\u0448\u0438\u0431\u043E\u043A. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0448\u0438\u0431\u043E\u043A \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0437\u0432\u0430\u043D \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 376
    }
  }, "onError()"), " \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 458
    }
  }, "onSuccess()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u0430\u0448\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0430\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E, \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0435 \u043E\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 86
    }
  }, "errors"), ", \u0432\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C Inertia, \u043A\u0430\u043A \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u0438 \u043E\u0448\u0438\u0431\u043A\u0438. \u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 241
    }
  }, "resolveErrors()"), ", \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7())
    }, {
      name: 'Svelte',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 5
    }
  }, "Note, the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 22
    }
  }, "resolveErrors()"), " callback must always return an object, even if there are no errors."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 5
    }
  }, "\u041F\u0430\u043A\u0435\u0442\u044B \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 5
    }
  }, "For pages that have more than one form, it's possible to run into conflicts when displaying validation errors if two forms share the same field names. For example, imagine a \"create company\" form and a \"create user\" form that both have a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 250
    }
  }, "name"), " field. Since both forms will be displaying the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 350
    }
  }, "page.props.errors.name"), " validation error, generating a validation error for the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 477
    }
  }, "name"), " field in either form will cause the error to appear in both forms."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }, "To get around this, you can use error bags. Error bags scope the validation errors returned from the server within a unique key specific to that form. Continuing with our example above, you might have a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 215
    }
  }, "createCompany"), " error bag for the first form, and a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 313
    }
  }, "createUser"), " error bag for the second form."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
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
      lineNumber: 280,
      columnNumber: 10
    }
  }), "Inertia.post('/companies', data, {\n  errorBag: 'createCompany',\n})\n\nInertia.post('/users', data, {\n  errorBag: 'createUser',\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 5
    }
  }, "Doing this will cause the validation errors to come back from the server as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 88
    }
  }, "page.props.errors.createCompany"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 172
    }
  }, "page.props.errors.createUser"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 5
    }
  }, "Note, if you're using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/forms#form-helper"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 38
    }
  }), "form helper"), ", it's not necessary to use error bags, since validation errors are automatically scoped to the form object."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmFsaWRhdGlvbi5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxXQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsbUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsNkJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSxvQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLGdCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkk7QUFGVyxDQUFiO0FBdUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4RkFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdTBCQUFpTDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWpMLDBkQUFzVTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXRVLG1iQU5LLEVBT0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpc0JBQXlKO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBekosODlCQVBLLEVBUUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0bkRBUkssRUFTTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVGQVRLLEVBVUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2eUJBQWlLO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBakssd3RDQVZLLEVBV0wsMERBQUMsc0VBQUQ7QUFBb0IsWUFBUSxFQUFFLENBQUM7QUFDN0JMLFVBQUksRUFBRSxTQUR1QjtBQUU3Qk8sY0FBUSxFQUFFLEtBRm1CO0FBRzdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSHlCLEtBQUQsRUF3QjNCO0FBQ0RULFVBQUksRUFBRSxPQURMO0FBRURPLGNBQVEsRUFBRSxNQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQXhCMkIsQ0FBOUI7QUE4QkksV0FBTyxFQUFDLG9CQTlCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEssRUEwQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrR0ExQ0ssRUEyQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpNkJBM0NLLEVBNENMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCVCxVQUFJLEVBQUUsUUFEdUI7QUFFN0JPLGNBQVEsRUFBRSxNQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBd0MzQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0F4QzJCLEVBZ0YzQjtBQUNEVCxVQUFJLEVBQUUsUUFETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FoRjJCLENBQTlCO0FBNkdJLFdBQU8sRUFBQyxvQkE3R1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVDSyxFQTBKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhkQUFxRztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFyRyxNQTFKSyxFQTJKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBKQTNKSyxFQTRKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDA5QkE1SkssRUE2Skw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0NkJBQTRMO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDOU0sWUFBUTtBQURzTSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRIQUE1TCwyRUFFbUQ7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZuRCxRQUV5RztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRnpHLFFBRThKO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGOUosY0FFc047QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZ0TiwyWkE3SkssRUFnS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwT0FBb0Q7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFwRCxvT0FoS0ssRUFpS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5R0FqS0ssRUFrS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrUkFBaUU7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFqRSx5aEJBQXdPO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXhPLGlZQUFtWDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFuWCx3SUFBcWM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBcmMsTUFsS0ssRUFtS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5WUFBaUY7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqRixrZUFBNE87QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBNU8sbUxBbktLLEVBb0tMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCVCxVQUFJLEVBQUUsUUFEdUI7QUFFN0JPLGNBQVEsRUFBRSxJQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBc0MzQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0F0QzJCLEVBdUQzQjtBQUNEVCxVQUFJLEVBQUUsUUFETDtBQUVETyxjQUFRLEVBQUUsSUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0F2RDJCLENBQTlCO0FBc0VJLFdBQU8sRUFBQyxvQkF0RVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBLSyxFQTJPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFpQjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFqQix5RUEzT0ssRUE0T0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRkE1T0ssRUE2T0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyUEFBcVA7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFyUCxzREFBeVY7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBelYsK0RBQXdkO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBeGQsd0VBN09LLEVBOE9MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb05BQWtOO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWxOLDJDQUFvVDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFwVCxvQ0E5T0ssRUErT0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzVCLGlCQUFhO0FBRGUsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnSkFBTCxDQS9PSyxFQXlQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQUFtRjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFuRixXQUF1SztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUF2SyxNQXpQSyxFQTBQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFpQztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ25ELFlBQVE7QUFEMkMsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBakMsaUhBMVBLLENBQVA7QUE4UEQ7S0FsUXVCTCxVO0FBb1F4QjtBQUNBQSxVQUFVLENBQUNNLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmFsaWRhdGlvbi4xNjFlMzQwZDA2MTA1OWVkNjBmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9CS0LDQu9C40LTQsNGG0LjRjycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPQutCw0Lot0Y3RgtC+LdGD0YHRgtGA0L7QtdC90L4nLFxuICAgIG5hbWU6ICfQmtCw0Log0Y3RgtC+INGD0YHRgtGA0L7QtdC90L4nXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7QsdC80LXQvS3QvtGI0LjQsdC60LDQvNC4JyxcbiAgICBuYW1lOiAn0J7QsdC80LXQvSDQvtGI0LjQsdC60LDQvNC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0YLQvtCx0YDQsNC20LXQvdC40LUt0L7RiNC40LHQvtC6JyxcbiAgICBuYW1lOiAn0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvtGI0LjQsdC+0LonXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QvtCy0YLQvtGA0L3QvtC1LdC30LDQv9C+0LvQvdC10L3QuNC1LdCy0LLQvtC00LAnLFxuICAgIG5hbWU6ICfQn9C+0LLRgtC+0YDQvdC+0LUg0LfQsNC/0L7Qu9C90LXQvdC40LUg0LLQstC+0LTQsCdcbiAgfSwge1xuICAgIHVybDogJyPRg9GB0YLRgNCw0L3QtdC90LjQtS3QvtGI0LjQsdC+0LonLFxuICAgIG5hbWU6ICfQo9GB0YLRgNCw0L3QtdC90LjQtSDQvtGI0LjQsdC+0LonXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QsNC60LXRgtGLLdC+0YjQuNCx0L7QuicsXG4gICAgbmFtZTogJ9Cf0LDQutC10YLRiyDQvtGI0LjQsdC+0LonXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQktCw0LvQuNC00LDRhtC40Y9gfTwvaDE+XG4gICAgPGgyPntg0JrQsNC6INGN0YLQviDRg9GB0YLRgNC+0LXQvdC+YH08L2gyPlxuICAgIDxwPntg0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QuiDQv9GA0L7QstC10YDQutC4INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAg0LIgSW5lcnRpYSDRgNCw0LHQvtGC0LDQtdGCINC90LXQvNC90L7Qs9C+INC40L3QsNGH0LUsINGH0LXQvCDQsiDQutC70LDRgdGB0LjRh9C10YHQutC+0Lkg0YTQvtGA0LzQtSwg0YPQv9GA0LDQstC70Y/QtdC80L7QuSBhamF4LCDQs9C00LUg0JLRiyDQvtGC0LvQsNCy0LvQuNCy0LDQtdGC0LUg0L7RiNC40LHQutC4INC/0YDQvtCy0LXRgNC60Lgg0LjQtyDQvtGC0LLQtdGC0L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MjJgfTwvaW5saW5lQ29kZT57YCDQuCDQstGA0YPRh9C90YPRjiDQvtCx0L3QvtCy0LvRj9C10YLQtSDRgdC+0YHRgtC+0Y/QvdC40LUg0L7RiNC40LHQutC4INGE0L7RgNC80YsuINCt0YLQviDQv9C+0YLQvtC80YMsINGH0YLQviBJbmVydGlhINC90LjQutC+0LPQtNCwINC90LUg0L/QvtC70YPRh9Cw0LXRgiDQvtGC0LLQtdGC0L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MjJgfTwvaW5saW5lQ29kZT57YC4g0KHQutC+0YDQtdC1LCBJbmVydGlhINGA0LDQsdC+0YLQsNC10YIg0LHQvtC70YzRiNC1INC60LDQuiDRgdGC0LDQvdC00LDRgNGC0L3QsNGPINC+0YLQv9GA0LDQstC60LAg0L/QvtC70L3QvtGB0YLRgNCw0L3QuNGH0L3QvtC5INGE0L7RgNC80YsuINCS0L7RgiDQutCw0Lo6YH08L3A+XG4gICAgPHA+e2DQodC90LDRh9Cw0LvQsCDQktGLINC+0YLQv9GA0LDQstC70Y/QtdGC0LUg0YTQvtGA0LzRgyDRgSDQv9C+0LzQvtGJ0YzRjiBJbmVydGlhLiDQkiDRgdC70YPRh9Cw0LUg0L7RiNC40LHQvtC6INC/0YDQvtCy0LXRgNC60Lgg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCDQktGLINC90LUg0YHRgNCw0LfRgyDQstC+0LfQstGA0LDRidCw0LXRgtC1INGN0YLQuCDQvtGI0LjQsdC60Lgg0LIg0LLQuNC00LUg0L7RgtCy0LXRgtCwIEpTT04gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2AuINCS0LzQtdGB0YLQviDRjdGC0L7Qs9C+INCS0Ysg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9GP0LXRgtC1ICjQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwKSDQvtCx0YDQsNGC0L3QviDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0YTQvtGA0LzRiywg0L3QsCDQutC+0YLQvtGA0L7QuSDQktGLINC90LDRhdC+0LTQuNGC0LXRgdGMLCDQv9C+0LrQsNC30YvQstCw0Y8g0L7RiNC40LHQutC4INC/0YDQvtCy0LXRgNC60Lgg0LIg0YHQtdCw0L3RgdC1LiDQotCw0LrQuNC1INGE0YDQtdC50LzQstC+0YDQutC4LCDQutCw0LogTGFyYXZlbCwg0LTQtdC70LDRjtGCINGN0YLQviDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC5gfTwvcD5cbiAgICA8cD57YNCX0LDRgtC10LwsINC60LDQttC00YvQuSDRgNCw0LcsINC60L7Qs9C00LAg0Y3RgtC4INC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4INC/0YDQuNGB0YPRgtGB0YLQstGD0Y7RgiDQsiDRgdC10LDQvdGB0LUsINC+0L3QuCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQv9C10YDQtdC00LDRjtGC0YHRjyBJbmVydGlhLCDQtNC10LvQsNGPINC40YUg0LTQvtGB0YLRg9C/0L3Ri9C80Lgg0L3QsCDRgdGC0L7RgNC+0L3QtSDQutC70LjQtdC90YLQsCDQsiDQutCw0YfQtdGB0YLQstC1INGB0LLQvtC50YHRgtCyINGB0YLRgNCw0L3QuNGG0YssINC60L7RgtC+0YDRi9C1INCS0Ysg0LzQvtC20LXRgtC1INC+0YLQvtCx0YDQsNC30LjRgtGMINCyINGB0LLQvtC10Lkg0YTQvtGA0LzQtS4g0J/QvtGB0LrQvtC70YzQutGDINGB0LLQvtC50YHRgtCy0LAg0Y/QstC70Y/RjtGC0YHRjyDRgNC10LDQutGC0LjQstC90YvQvNC4LCDQvtC90Lgg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L7RgtC+0LHRgNCw0LbQsNGO0YLRgdGPINC/0L7RgdC70LUg0LfQsNCy0LXRgNGI0LXQvdC40Y8g0L7RgtC/0YDQsNCy0LrQuCDRhNC+0YDQvNGLLmB9PC9wPlxuICAgIDxoMj57YNCe0LHQvNC10L0g0L7RiNC40LHQutCw0LzQuGB9PC9oMj5cbiAgICA8cD57YNCU0LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQvtGI0LjQsdC60Lgg0L/RgNC+0LLQtdGA0LrQuCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwINCx0YvQu9C4INC00L7RgdGC0YPQv9C90Ysg0L3QsCDRgdGC0L7RgNC+0L3QtSDQutC70LjQtdC90YLQsCwg0JLQsNGI0LAg0YHQtdGA0LLQtdGA0L3QsNGPINC40L3RhNGA0LDRgdGC0YDRg9C60YLRg9GA0LAg0LTQvtC70LbQvdCwINC00LXQu9C40YLRjNGB0Y8g0LjQvNC4INGBINC/0L7QvNC+0YnRjNGOINGB0LLQvtC50YHRgtCy0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JzYH08L2lubGluZUNvZGU+e2AuINCd0LXQutC+0YLQvtGA0YvQtSDQsNC00LDQv9GC0LXRgNGLLCDRgtCw0LrQuNC1INC60LDQuiDQsNC00LDQv9GC0LXRgCBMYXJhdmVsLCDQtNC10LvQsNGO0YIg0Y3RgtC+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LiDQlNGA0YPQs9C40Lwg0LzQvtC20LXRgiDQv9C+0YLRgNC10LHQvtCy0LDRgtGM0YHRjyDRgdC00LXQu9Cw0YLRjCDRjdGC0L4g0LLRgNGD0YfQvdGD0Y4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQvtCx0YDQsNGC0LjRgtC10YHRjCDQuiDQtNC+0LrRg9C80LXQvdGC0LDRhtC40Lgg0JLQsNGI0LXQs9C+INC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQtdGA0LLQtdGA0L3QvtCz0L4g0LDQtNCw0L/RgtC10YDQsCDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40LguYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgVXNlcnNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gY3JlYXRlKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdVc2Vycy9DcmVhdGUnKTtcbiAgICAgICAgICAgIH1cXG5cbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzdG9yZSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFJlcXVlc3Q6OnZhbGlkYXRlKFtcbiAgICAgICAgICAgICAgICAgICdmaXJzdF9uYW1lJyA9PiBbJ3JlcXVpcmVkJywgJ21heDo1MCddLFxuICAgICAgICAgICAgICAgICAgJ2xhc3RfbmFtZScgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnXSxcbiAgICAgICAgICAgICAgICAgICdlbWFpbCcgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnLCAnZW1haWwnXSxcbiAgICAgICAgICAgICAgXSk7XFxuXG4gICAgICAgICAgICAgICR1c2VyID0gVXNlcjo6Y3JlYXRlKFxuICAgICAgICAgICAgICAgIFJlcXVlc3Q6Om9ubHkoJ2ZpcnN0X25hbWUnLCAnbGFzdF9uYW1lJywgJ2VtYWlsJylcbiAgICAgICAgICAgICAgKTtcXG5cbiAgICAgICAgICAgICAgcmV0dXJuIFJlZGlyZWN0Ojpyb3V0ZSgndXNlcnMuc2hvdycsICR1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAjIHRvZG9cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvtGI0LjQsdC+0LpgfTwvaDI+XG4gICAgPHA+e2DQn9C+0YHQutC+0LvRjNC60YMg0L7RiNC40LHQutC4INCy0LDQu9C40LTQsNGG0LjQuCDRgdGC0LDQvdC+0LLRj9GC0YHRjyDQtNC+0YHRgtGD0L/QvdGL0LzQuCDQvdCwINGB0YLQvtGA0L7QvdC1INC60LvQuNC10L3RgtCwINC60LDQuiDRgdCy0L7QudGB0YLQstCwINC60L7QvNC/0L7QvdC10L3RgtC+0LIg0YHRgtGA0LDQvdC40YbRiywg0JLRiyDQvNC+0LbQtdGC0LUg0L7RgtC+0LHRgNCw0LbQsNGC0Ywg0LjRhSDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LjRhSDQvdCw0LvQuNGH0LjRjy4g0JLQvtGCINC60LDQuiDRjdGC0L4g0YHQtNC10LvQsNGC0YwuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIj5GaXJzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCIgdi1tb2RlbD1cImZvcm0uZmlyc3RfbmFtZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMuZmlyc3RfbmFtZVwiPnt7IGVycm9ycy5maXJzdF9uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCI+TGFzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzLmxhc3RfbmFtZVwiPnt7IGVycm9ycy5sYXN0X25hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycy5lbWFpbFwiPnt7IGVycm9ycy5lbWFpbCB9fTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGVycm9yczogT2JqZWN0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgdGhpcy4kaW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB0aGlzLmZvcm0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcbiAgICAgICAgaW1wb3J0IHsgdXNlUGFnZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoKSB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IHVzZVBhZ2UoKS5wcm9wc1xcblxuICAgICAgICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgfSlcXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgc2V0VmFsdWVzKHZhbHVlcyA9PiAoe1xuICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIEluZXJ0aWEucG9zdCgnL3VzZXJzJywgdmFsdWVzKVxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCIgdmFsdWU9e3ZhbHVlcy5maXJzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmZpcnN0X25hbWUgJiYgPGRpdj57ZXJyb3JzLmZpcnN0X25hbWV9PC9kaXY+fVxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCI+TGFzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIHZhbHVlPXt2YWx1ZXMubGFzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmxhc3RfbmFtZSAmJiA8ZGl2PntlcnJvcnMubGFzdF9uYW1lfTwvZGl2Pn1cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB2YWx1ZT17dmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxkaXY+e2Vycm9ycy5lbWFpbH08L2Rpdj59XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICAgIGV4cG9ydCBsZXQgZXJyb3JzID0ge31cXG5cbiAgICAgICAgICBsZXQgdmFsdWVzID0ge1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgICAgICBJbmVydGlhLnBvc3QoJy91c2VycycsIHZhbHVlcylcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIj5GaXJzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5maXJzdF9uYW1lfT5cbiAgICAgICAgICB7I2lmIGVycm9ycy5maXJzdF9uYW1lfTxkaXY+e2Vycm9ycy5maXJzdF9uYW1lfTwvZGl2PnsvaWZ9XFxuXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiPkxhc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5sYXN0X25hbWV9PlxuICAgICAgICAgIHsjaWYgZXJyb3JzLmxhc3RfbmFtZX08ZGl2PntlcnJvcnMubGFzdF9uYW1lfTwvZGl2PnsvaWZ9XFxuXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5lbWFpbH0+XG4gICAgICAgICAgeyNpZiBlcnJvcnMuZW1haWx9PGRpdj57ZXJyb3JzLmVtYWlsfTwvZGl2PnsvaWZ9XFxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINGH0YLQviDQsiDQsNC00LDQv9GC0LXRgNCw0YUgVnVlINCS0Ysg0YLQsNC60LbQtSDQvNC+0LbQtdGC0LUg0L/QvtC70YPRh9C40YLRjCDQtNC+0YHRgtGD0L8g0Log0L7RiNC40LHQutCw0Lwg0YfQtdGA0LXQtyDQvtCx0YrQtdC60YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgJHBhZ2UucHJvcHMuZXJyb3JzYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPGgyPntg0J/QvtCy0YLQvtGA0L3QvtC1INC30LDQv9C+0LvQvdC10L3QuNC1INCy0LLQvtC00LBgfTwvaDI+XG4gICAgPHA+e2DQpdC+0YLRjyDQvtCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6INCyIEluZXJ0aWEg0LDQvdCw0LvQvtCz0LjRh9C90LAg0L7RgtC/0YDQsNCy0LrQtSDQv9C+0LvQvdC+0YHRgtGA0LDQvdC40YfQvdGL0YUg0YTQvtGA0LwsINGN0YLQvtGCINC/0L7QtNGF0L7QtCDQvdCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0L3QsNC80L3QvtCz0L4g0LvRg9GH0YjQtSwg0L/QvtGB0LrQvtC70YzQutGDINCS0LDQvCDQvdC1INC90YPQttC90L4g0LLRgNGD0YfQvdGD0Y4g0L/QvtCy0YLQvtGA0L3QviDQt9Cw0L/QvtC70L3Rj9GC0Ywg0YHRgtCw0YDRi9C1INCy0YXQvtC00L3Ri9C1INC00LDQvdC90YvQtSDRhNC+0YDQvNGLLmB9PC9wPlxuICAgIDxwPntg0J/RgNC4INCy0L7Qt9C90LjQutC90L7QstC10L3QuNC4INC+0YjQuNCx0L7QuiDQv9GA0L7QstC10YDQutC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQv9C10YDQtdC90LDQv9GA0LDQstC70Y/QtdGC0YHRjyDQvtCx0YDQsNGC0L3QviDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0YTQvtGA0LzRiywg0L3QsCDQutC+0YLQvtGA0L7QuSDQvtC9INGD0LbQtSDQvdCw0YXQvtC00LjRgtGB0Y8uINCYINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIEluZXJ0aWEg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YHQvtGF0YDQsNC90Y/QtdGCIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvbWFudWFsLXZpc2l0cyNjb21wb25lbnQtc3RhdGVcIlxuICAgICAgfX0+e2DRgdC+0YHRgtC+0Y/QvdC40LUg0LrQvtC80L/QvtC90LXQvdGC0LBgfTwvYT57YCDQtNC70Y8g0LfQsNC/0YDQvtGB0L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHB1dGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYXRjaGB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRlbGV0ZWB9PC9pbmxpbmVDb2RlPntgLiDQrdGC0L4g0L7Qt9C90LDRh9Cw0LXRgiwg0YfRgtC+INCy0YHQtSDQstGF0L7QtNC90YvQtSDQtNCw0L3QvdGL0LUg0YHRgtCw0YDQvtC5INGE0L7RgNC80Ysg0L7RgdGC0LDRjtGC0YHRjyDQsiDRgtC+0YfQvdC+0YHRgtC4INC60LDQuiDQtdGB0YLRjC5gfTwvcD5cbiAgICA8cD57YNCV0LTQuNC90YHRgtCy0LXQvdC90L7QtSwg0YfRgtC+INC40LfQvNC10L3QuNC70L7RgdGMLCAtINGN0YLQviDRgdCy0L7QudGB0YLQstC+IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yc2B9PC9pbmxpbmVDb2RlPntgLCDQutC+0YLQvtGA0L7QtSDRgtC10L/QtdGA0Ywg0YHQvtC00LXRgNC20LjRgiDQvtGI0LjQsdC60Lgg0LLQsNC70LjQtNCw0YbQuNC4LmB9PC9wPlxuICAgIDxoMj57YNCj0YHRgtGA0LDQvdC10L3QuNC1INC+0YjQuNCx0L7QumB9PC9oMj5cbiAgICA8cD57YNCf0L7RgdC60L7Qu9GM0LrRgyDQv9GA0LjQu9C+0LbQtdC90LjRjyBJbmVydGlhINC90LjQutC+0LPQtNCwINC90LUg0LPQtdC90LXRgNC40YDRg9GO0YIg0L7RgtCy0LXRgtGLIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQyMmB9PC9pbmxpbmVDb2RlPntgLCBJbmVydGlhINC90LXQvtCx0YXQvtC00LjQvCDQtNGA0YPQs9C+0Lkg0YHQv9C+0YHQvtCxINC+0L/RgNC10LTQtdC70LjRgtGMLCDRgdC+0LTQtdGA0LbQuNGCINC70Lgg0L7RgtCy0LXRgiDQvtGI0LjQsdC60Lgg0L/RgNC+0LLQtdGA0LrQuC4g0JTQu9GPINGN0YLQvtCz0L4gSW5lcnRpYSDQv9GA0L7QstC10YDRj9C10YIg0L7QsdGK0LXQutGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhZ2UucHJvcHMuZXJyb3JzYH08L2lubGluZUNvZGU+e2Ag0L3QsCDQvdCw0LvQuNGH0LjQtSDQvtGI0LjQsdC+0LouINCSINGB0LvRg9GH0LDQtSDQv9C+0Y/QstC70LXQvdC40Y8g0L7RiNC40LHQvtC6INCx0YPQtNC10YIg0LLRi9C30LLQsNC9INC+0LHRgNCw0YLQvdGL0Lkg0LLRi9C30L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkVycm9yKClgfTwvaW5saW5lQ29kZT57YCDQstC80LXRgdGC0L4g0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN1Y2Nlc3MoKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwPntg0JXRgdC70Lgg0JLQsNGI0LUg0L/RgNC40LvQvtC20LXQvdC40LUg0YHQvtC+0LHRidCw0LXRgiDQvtCxINC+0YjQuNCx0LrQsNGFLCDQuNGB0L/QvtC70YzQt9GD0Y8g0YHQstC+0LnRgdGC0LLQviwg0L7RgtC70LjRh9C90L7QtSDQvtGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yc2B9PC9pbmxpbmVDb2RlPntgLCDQstGLINC00L7Qu9C20L3RiyDRgdC+0L7QsdGJ0LjRgtGMIEluZXJ0aWEsINC60LDQuiDQuNGB0L/RgNCw0LLQuNGC0Ywg0Y3RgtC4INC+0YjQuNCx0LrQuC4g0K3RgtC+INC80L7QttC90L4g0YHQtNC10LvQsNGC0Ywg0YEg0L/QvtC80L7RidGM0Y4g0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlRXJyb3JzKClgfTwvaW5saW5lQ29kZT57YCwg0L/RgNC40LzQtdC90Y/QtdC80L7Qs9C+INC90LAg0YPRgNC+0LLQvdC1INCw0LTQsNC/0YLQtdGA0LAuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDNcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgaW1wb3J0IHsgY3JlYXRlQXBwLCBoIH0gZnJvbSAndnVlJ1xuICAgICAgICBpbXBvcnQgeyBBcHAsIHBsdWdpbiB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS12dWUzJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBjcmVhdGVBcHAoe1xuICAgICAgICAgIHJlbmRlcjogKCkgPT4gaChBcHAsIHtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHQsXG4gICAgICAgICAgICByZXNvbHZlRXJyb3JzOiBwYWdlID0+IChwYWdlLnByb3BzLmVycm9ycyB8fCB7fSksXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkudXNlKHBsdWdpbikubW91bnQoZWwpXFxuXFxuXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDJcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgaW1wb3J0IHsgQXBwLCBwbHVnaW4gfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlJ1xuICAgICAgICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcXG5cbiAgICAgICAgVnVlLnVzZShwbHVnaW4pXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgIHJlbmRlcjogaCA9PiBoKEFwcCwge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0LFxuICAgICAgICAgICAgICByZXNvbHZlRXJyb3JzOiBwYWdlID0+IChwYWdlLnByb3BzLmVycm9ycyB8fCB7fSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KS4kbW91bnQoZWwpXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gICAgICAgIGltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgcmVuZGVyKFxuICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgIGluaXRpYWxQYWdlPXtKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSl9XG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50PXtuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHR9XG4gICAgICAgICAgICByZXNvbHZlRXJyb3JzPXtwYWdlID0+IChwYWdlLnByb3BzLmVycm9ycyB8fCB7fSl9LFxuICAgICAgICAgIC8+LFxuICAgICAgICAgIGVsXG4gICAgICAgIClcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBuZXcgQXBwKHtcbiAgICAgICAgICB0YXJnZXQ6IGVsLFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9LnN2ZWx0ZVxcYCksXG4gICAgICAgICAgICByZXNvbHZlRXJyb3JzOiBwYWdlID0+IChwYWdlLnByb3BzLmVycm9ycyB8fCB7fSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BOb3RlLCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUVycm9ycygpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2sgbXVzdCBhbHdheXMgcmV0dXJuIGFuIG9iamVjdCwgZXZlbiBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzLmB9PC9wPlxuICAgIDxoMj57YNCf0LDQutC10YLRiyDQvtGI0LjQsdC+0LpgfTwvaDI+XG4gICAgPHA+e2BGb3IgcGFnZXMgdGhhdCBoYXZlIG1vcmUgdGhhbiBvbmUgZm9ybSwgaXQncyBwb3NzaWJsZSB0byBydW4gaW50byBjb25mbGljdHMgd2hlbiBkaXNwbGF5aW5nIHZhbGlkYXRpb24gZXJyb3JzIGlmIHR3byBmb3JtcyBzaGFyZSB0aGUgc2FtZSBmaWVsZCBuYW1lcy4gRm9yIGV4YW1wbGUsIGltYWdpbmUgYSBcImNyZWF0ZSBjb21wYW55XCIgZm9ybSBhbmQgYSBcImNyZWF0ZSB1c2VyXCIgZm9ybSB0aGF0IGJvdGggaGF2ZSBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5hbWVgfTwvaW5saW5lQ29kZT57YCBmaWVsZC4gU2luY2UgYm90aCBmb3JtcyB3aWxsIGJlIGRpc3BsYXlpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhZ2UucHJvcHMuZXJyb3JzLm5hbWVgfTwvaW5saW5lQ29kZT57YCB2YWxpZGF0aW9uIGVycm9yLCBnZW5lcmF0aW5nIGEgdmFsaWRhdGlvbiBlcnJvciBmb3IgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5hbWVgfTwvaW5saW5lQ29kZT57YCBmaWVsZCBpbiBlaXRoZXIgZm9ybSB3aWxsIGNhdXNlIHRoZSBlcnJvciB0byBhcHBlYXIgaW4gYm90aCBmb3Jtcy5gfTwvcD5cbiAgICA8cD57YFRvIGdldCBhcm91bmQgdGhpcywgeW91IGNhbiB1c2UgZXJyb3IgYmFncy4gRXJyb3IgYmFncyBzY29wZSB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyIHdpdGhpbiBhIHVuaXF1ZSBrZXkgc3BlY2lmaWMgdG8gdGhhdCBmb3JtLiBDb250aW51aW5nIHdpdGggb3VyIGV4YW1wbGUgYWJvdmUsIHlvdSBtaWdodCBoYXZlIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY3JlYXRlQ29tcGFueWB9PC9pbmxpbmVDb2RlPntgIGVycm9yIGJhZyBmb3IgdGhlIGZpcnN0IGZvcm0sIGFuZCBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNyZWF0ZVVzZXJgfTwvaW5saW5lQ29kZT57YCBlcnJvciBiYWcgZm9yIHRoZSBzZWNvbmQgZm9ybS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvY29tcGFuaWVzJywgZGF0YSwge1xuICBlcnJvckJhZzogJ2NyZWF0ZUNvbXBhbnknLFxufSlcblxuSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCBkYXRhLCB7XG4gIGVycm9yQmFnOiAnY3JlYXRlVXNlcicsXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BEb2luZyB0aGlzIHdpbGwgY2F1c2UgdGhlIHZhbGlkYXRpb24gZXJyb3JzIHRvIGNvbWUgYmFjayBmcm9tIHRoZSBzZXJ2ZXIgYXMgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGFnZS5wcm9wcy5lcnJvcnMuY3JlYXRlQ29tcGFueWB9PC9pbmxpbmVDb2RlPntgIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWdlLnByb3BzLmVycm9ycy5jcmVhdGVVc2VyYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHA+e2BOb3RlLCBpZiB5b3UncmUgdXNpbmcgdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvZm9ybXMjZm9ybS1oZWxwZXJcIlxuICAgICAgfX0+e2Bmb3JtIGhlbHBlcmB9PC9hPntgLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGVycm9yIGJhZ3MsIHNpbmNlIHZhbGlkYXRpb24gZXJyb3JzIGFyZSBhdXRvbWF0aWNhbGx5IHNjb3BlZCB0byB0aGUgZm9ybSBvYmplY3QuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9