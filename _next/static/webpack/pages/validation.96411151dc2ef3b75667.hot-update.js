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
  }, "errors"), ", \u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C Inertia, \u043A\u0430\u043A \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u0438 \u043E\u0448\u0438\u0431\u043A\u0438. \u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
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
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 50
    }
  }, "resolveErrors()"), " \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043E\u043A \u043D\u0435\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "\u0414\u043B\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0431\u043E\u043B\u0435\u0435 \u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B, \u043C\u043E\u0433\u0443\u0442 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u0443\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u044B \u043F\u0440\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438, \u0435\u0441\u043B\u0438 \u0434\u0432\u0435 \u0444\u043E\u0440\u043C\u044B \u0438\u043C\u0435\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0438\u043C\u0435\u043D\u0430 \u043F\u043E\u043B\u0435\u0439. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0435\u0431\u0435 \u0444\u043E\u0440\u043C\u0443 \xAB\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E\xBB \u0438 \u0444\u043E\u0440\u043C\u0443 \xAB\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\xBB, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 264
    }
  }, "name"), ". \u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u0431\u0435 \u0444\u043E\u0440\u043C\u044B \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0443 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 371
    }
  }, "page.props.errors.name"), " validation error, generating a validation error for the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 498
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmFsaWRhdGlvbi5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxXQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsbUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsNkJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSxvQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLGdCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkk7QUFGVyxDQUFiO0FBdUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEs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QUFBLG9OQUFrTjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFsTiwyQ0FBb1Q7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBcFQsb0NBOU9LLEVBK09MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0pBQUwsQ0EvT0ssRUF5UEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFBbUY7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBbkYsV0FBdUs7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBdkssTUF6UEssRUEwUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBaUM7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNuRCxZQUFRO0FBRDJDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWpDLGlIQTFQSyxDQUFQO0FBOFBEO0tBbFF1QkwsVTtBQW9ReEI7QUFDQUEsVUFBVSxDQUFDTSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZhbGlkYXRpb24uOTY0MTExNTFkYzJlZjNiNzU2NjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQktCw0LvQuNC00LDRhtC40Y8nLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0LrQsNC6LdGN0YLQvi3Rg9GB0YLRgNC+0LXQvdC+JyxcbiAgICBuYW1lOiAn0JrQsNC6INGN0YLQviDRg9GB0YLRgNC+0LXQvdC+J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHQvNC10L0t0L7RiNC40LHQutCw0LzQuCcsXG4gICAgbmFtZTogJ9Ce0LHQvNC10L0g0L7RiNC40LHQutCw0LzQuCdcbiAgfSwge1xuICAgIHVybDogJyPQvtGC0L7QsdGA0LDQttC10L3QuNC1LdC+0YjQuNCx0L7QuicsXG4gICAgbmFtZTogJ9Ce0YLQvtCx0YDQsNC20LXQvdC40LUg0L7RiNC40LHQvtC6J1xuICB9LCB7XG4gICAgdXJsOiAnI9C/0L7QstGC0L7RgNC90L7QtS3Qt9Cw0L/QvtC70L3QtdC90LjQtS3QstCy0L7QtNCwJyxcbiAgICBuYW1lOiAn0J/QvtCy0YLQvtGA0L3QvtC1INC30LDQv9C+0LvQvdC10L3QuNC1INCy0LLQvtC00LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YPRgdGC0YDQsNC90LXQvdC40LUt0L7RiNC40LHQvtC6JyxcbiAgICBuYW1lOiAn0KPRgdGC0YDQsNC90LXQvdC40LUg0L7RiNC40LHQvtC6J1xuICB9LCB7XG4gICAgdXJsOiAnI9C/0LDQutC10YLRiy3QvtGI0LjQsdC+0LonLFxuICAgIG5hbWU6ICfQn9Cw0LrQtdGC0Ysg0L7RiNC40LHQvtC6J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0JLQsNC70LjQtNCw0YbQuNGPYH08L2gxPlxuICAgIDxoMj57YNCa0LDQuiDRjdGC0L4g0YPRgdGC0YDQvtC10L3QvmB9PC9oMj5cbiAgICA8cD57YNCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Log0L/RgNC+0LLQtdGA0LrQuCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwINCyIEluZXJ0aWEg0YDQsNCx0L7RgtCw0LXRgiDQvdC10LzQvdC+0LPQviDQuNC90LDRh9C1LCDRh9C10Lwg0LIg0LrQu9Cw0YHRgdC40YfQtdGB0LrQvtC5INGE0L7RgNC80LUsINGD0L/RgNCw0LLQu9GP0LXQvNC+0LkgYWpheCwg0LPQtNC1INCS0Ysg0L7RgtC70LDQstC70LjQstCw0LXRgtC1INC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4INC40Lcg0L7RgtCy0LXRgtC+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2Ag0Lgg0LLRgNGD0YfQvdGD0Y4g0L7QsdC90L7QstC70Y/QtdGC0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC+0YjQuNCx0LrQuCDRhNC+0YDQvNGLLiDQrdGC0L4g0L/QvtGC0L7QvNGDLCDRh9GC0L4gSW5lcnRpYSDQvdC40LrQvtCz0LTQsCDQvdC1INC/0L7Qu9GD0YfQsNC10YIg0L7RgtCy0LXRgtC+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2AuINCh0LrQvtGA0LXQtSwgSW5lcnRpYSDRgNCw0LHQvtGC0LDQtdGCINCx0L7Qu9GM0YjQtSDQutCw0Log0YHRgtCw0L3QtNCw0YDRgtC90LDRjyDQvtGC0L/RgNCw0LLQutCwINC/0L7Qu9C90L7RgdGC0YDQsNC90LjRh9C90L7QuSDRhNC+0YDQvNGLLiDQktC+0YIg0LrQsNC6OmB9PC9wPlxuICAgIDxwPntg0KHQvdCw0YfQsNC70LAg0JLRiyDQvtGC0L/RgNCw0LLQu9GP0LXRgtC1INGE0L7RgNC80YMg0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYS4g0JIg0YHQu9GD0YfQsNC1INC+0YjQuNCx0L7QuiDQv9GA0L7QstC10YDQutC4INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAg0JLRiyDQvdC1INGB0YDQsNC30YMg0LLQvtC30LLRgNCw0YnQsNC10YLQtSDRjdGC0Lgg0L7RiNC40LHQutC4INCyINCy0LjQtNC1INC+0YLQstC10YLQsCBKU09OIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQyMmB9PC9pbmxpbmVDb2RlPntgLiDQktC80LXRgdGC0L4g0Y3RgtC+0LPQviDQktGLINC/0LXRgNC10L3QsNC/0YDQsNCy0LvRj9C10YLQtSAo0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCkg0L7QsdGA0LDRgtC90L4g0L3QsCDRgdGC0YDQsNC90LjRhtGDINGE0L7RgNC80YssINC90LAg0LrQvtGC0L7RgNC+0Lkg0JLRiyDQvdCw0YXQvtC00LjRgtC10YHRjCwg0L/QvtC60LDQt9GL0LLQsNGPINC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4INCyINGB0LXQsNC90YHQtS4g0KLQsNC60LjQtSDRhNGA0LXQudC80LLQvtGA0LrQuCwg0LrQsNC6IExhcmF2ZWwsINC00LXQu9Cw0Y7RgiDRjdGC0L4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguYH08L3A+XG4gICAgPHA+e2DQl9Cw0YLQtdC8LCDQutCw0LbQtNGL0Lkg0YDQsNC3LCDQutC+0LPQtNCwINGN0YLQuCDQvtGI0LjQsdC60Lgg0L/RgNC+0LLQtdGA0LrQuCDQv9GA0LjRgdGD0YLRgdGC0LLRg9GO0YIg0LIg0YHQtdCw0L3RgdC1LCDQvtC90Lgg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L/QtdGA0LXQtNCw0Y7RgtGB0Y8gSW5lcnRpYSwg0LTQtdC70LDRjyDQuNGFINC00L7RgdGC0YPQv9C90YvQvNC4INC90LAg0YHRgtC+0YDQvtC90LUg0LrQu9C40LXQvdGC0LAg0LIg0LrQsNGH0LXRgdGC0LLQtSDRgdCy0L7QudGB0YLQsiDRgdGC0YDQsNC90LjRhtGLLCDQutC+0YLQvtGA0YvQtSDQktGLINC80L7QttC10YLQtSDQvtGC0L7QsdGA0LDQt9C40YLRjCDQsiDRgdCy0L7QtdC5INGE0L7RgNC80LUuINCf0L7RgdC60L7Qu9GM0LrRgyDRgdCy0L7QudGB0YLQstCwINGP0LLQu9GP0Y7RgtGB0Y8g0YDQtdCw0LrRgtC40LLQvdGL0LzQuCwg0L7QvdC4INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC+0YLQvtCx0YDQsNC20LDRjtGC0YHRjyDQv9C+0YHQu9C1INC30LDQstC10YDRiNC10L3QuNGPINC+0YLQv9GA0LDQstC60Lgg0YTQvtGA0LzRiy5gfTwvcD5cbiAgICA8aDI+e2DQntCx0LzQtdC9INC+0YjQuNCx0LrQsNC80LhgfTwvaDI+XG4gICAgPHA+e2DQlNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0L7RiNC40LHQutC4INC/0YDQvtCy0LXRgNC60Lgg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCDQsdGL0LvQuCDQtNC+0YHRgtGD0L/QvdGLINC90LAg0YHRgtC+0YDQvtC90LUg0LrQu9C40LXQvdGC0LAsINCS0LDRiNCwINGB0LXRgNCy0LXRgNC90LDRjyDQuNC90YTRgNCw0YHRgtGA0YPQutGC0YPRgNCwINC00L7Qu9C20L3QsCDQtNC10LvQuNGC0YzRgdGPINC40LzQuCDRgSDQv9C+0LzQvtGJ0YzRjiDRgdCy0L7QudGB0YLQstCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yc2B9PC9pbmxpbmVDb2RlPntgLiDQndC10LrQvtGC0L7RgNGL0LUg0LDQtNCw0L/RgtC10YDRiywg0YLQsNC60LjQtSDQutCw0Log0LDQtNCw0L/RgtC10YAgTGFyYXZlbCwg0LTQtdC70LDRjtGCINGN0YLQviDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC4g0JTRgNGD0LPQuNC8INC80L7QttC10YIg0L/QvtGC0YDQtdCx0L7QstCw0YLRjNGB0Y8g0YHQtNC10LvQsNGC0Ywg0Y3RgtC+INCy0YDRg9GH0L3Rg9GOLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L7QsdGA0LDRgtC40YLQtdGB0Ywg0Log0LTQvtC60YPQvNC10L3RgtCw0YbQuNC4INCS0LDRiNC10LPQviDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LXRgNCy0LXRgNC90L7Qs9C+INCw0LTQsNC/0YLQtdGA0LAg0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIFVzZXJzQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIGNyZWF0ZSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZXJ0aWE6OnJlbmRlcignVXNlcnMvQ3JlYXRlJyk7XG4gICAgICAgICAgICB9XFxuXG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gc3RvcmUoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBSZXF1ZXN0Ojp2YWxpZGF0ZShbXG4gICAgICAgICAgICAgICAgICAnZmlyc3RfbmFtZScgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnXSxcbiAgICAgICAgICAgICAgICAgICdsYXN0X25hbWUnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJ10sXG4gICAgICAgICAgICAgICAgICAnZW1haWwnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJywgJ2VtYWlsJ10sXG4gICAgICAgICAgICAgIF0pO1xcblxuICAgICAgICAgICAgICAkdXNlciA9IFVzZXI6OmNyZWF0ZShcbiAgICAgICAgICAgICAgICBSZXF1ZXN0Ojpvbmx5KCdmaXJzdF9uYW1lJywgJ2xhc3RfbmFtZScsICdlbWFpbCcpXG4gICAgICAgICAgICAgICk7XFxuXG4gICAgICAgICAgICAgIHJldHVybiBSZWRpcmVjdDo6cm91dGUoJ3VzZXJzLnNob3cnLCAkdXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgIyB0b2RvXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L7RiNC40LHQvtC6YH08L2gyPlxuICAgIDxwPntg0J/QvtGB0LrQvtC70YzQutGDINC+0YjQuNCx0LrQuCDQstCw0LvQuNC00LDRhtC40Lgg0YHRgtCw0L3QvtCy0Y/RgtGB0Y8g0LTQvtGB0YLRg9C/0L3Ri9C80Lgg0L3QsCDRgdGC0L7RgNC+0L3QtSDQutC70LjQtdC90YLQsCDQutCw0Log0YHQstC+0LnRgdGC0LLQsCDQutC+0LzQv9C+0L3QtdC90YLQvtCyINGB0YLRgNCw0L3QuNGG0YssINCS0Ysg0LzQvtC20LXRgtC1INC+0YLQvtCx0YDQsNC20LDRgtGMINC40YUg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC40YUg0L3QsNC70LjRh9C40Y8uINCS0L7RgiDQutCw0Log0Y3RgtC+INGB0LTQtdC70LDRgtGMLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIHYtbW9kZWw9XCJmb3JtLmZpcnN0X25hbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzLmZpcnN0X25hbWVcIj57eyBlcnJvcnMuZmlyc3RfbmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiPkxhc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibGFzdF9uYW1lXCIgdi1tb2RlbD1cImZvcm0ubGFzdF9uYW1lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycy5sYXN0X25hbWVcIj57eyBlcnJvcnMubGFzdF9uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIC8+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMuZW1haWxcIj57eyBlcnJvcnMuZW1haWwgfX08L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBlcnJvcnM6IE9iamVjdCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgIHRoaXMuJGluZXJ0aWEucG9zdCgnL3VzZXJzJywgdGhpcy5mb3JtKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG4gICAgICAgIGltcG9ydCB7IHVzZVBhZ2UgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCkge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSB1c2VQYWdlKCkucHJvcHNcXG5cbiAgICAgICAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgIH0pXFxuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIHNldFZhbHVlcyh2YWx1ZXMgPT4gKHtcbiAgICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBJbmVydGlhLnBvc3QoJy91c2VycycsIHZhbHVlcylcbiAgICAgICAgICB9XFxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3RfbmFtZVwiPkZpcnN0IG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIHZhbHVlPXt2YWx1ZXMuZmlyc3RfbmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAge2Vycm9ycy5maXJzdF9uYW1lICYmIDxkaXY+e2Vycm9ycy5maXJzdF9uYW1lfTwvZGl2Pn1cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiPkxhc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiB2YWx1ZT17dmFsdWVzLmxhc3RfbmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAge2Vycm9ycy5sYXN0X25hbWUgJiYgPGRpdj57ZXJyb3JzLmxhc3RfbmFtZX08L2Rpdj59XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdmFsdWU9e3ZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8ZGl2PntlcnJvcnMuZW1haWx9PC9kaXY+fVxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgICBleHBvcnQgbGV0IGVycm9ycyA9IHt9XFxuXG4gICAgICAgICAgbGV0IHZhbHVlcyA9IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICB9XFxuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICAgICAgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB2YWx1ZXMpXG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImZpcnN0X25hbWVcIiBiaW5kOnZhbHVlPXt2YWx1ZXMuZmlyc3RfbmFtZX0+XG4gICAgICAgICAgeyNpZiBlcnJvcnMuZmlyc3RfbmFtZX08ZGl2PntlcnJvcnMuZmlyc3RfbmFtZX08L2Rpdj57L2lmfVxcblxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0X25hbWVcIj5MYXN0IG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiBiaW5kOnZhbHVlPXt2YWx1ZXMubGFzdF9uYW1lfT5cbiAgICAgICAgICB7I2lmIGVycm9ycy5sYXN0X25hbWV9PGRpdj57ZXJyb3JzLmxhc3RfbmFtZX08L2Rpdj57L2lmfVxcblxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBiaW5kOnZhbHVlPXt2YWx1ZXMuZW1haWx9PlxuICAgICAgICAgIHsjaWYgZXJyb3JzLmVtYWlsfTxkaXY+e2Vycm9ycy5lbWFpbH08L2Rpdj57L2lmfVxcblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0LIg0LDQtNCw0L/RgtC10YDQsNGFIFZ1ZSDQktGLINGC0LDQutC20LUg0LzQvtC20LXRgtC1INC/0L7Qu9GD0YfQuNGC0Ywg0LTQvtGB0YLRg9C/INC6INC+0YjQuNCx0LrQsNC8INGH0LXRgNC10Lcg0L7QsdGK0LXQutGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YCRwYWdlLnByb3BzLmVycm9yc2B9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxoMj57YNCf0L7QstGC0L7RgNC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDQstCy0L7QtNCwYH08L2gyPlxuICAgIDxwPntg0KXQvtGC0Y8g0L7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QuiDQsiBJbmVydGlhINCw0L3QsNC70L7Qs9C40YfQvdCwINC+0YLQv9GA0LDQstC60LUg0L/QvtC70L3QvtGB0YLRgNCw0L3QuNGH0L3Ri9GFINGE0L7RgNC8LCDRjdGC0L7RgiDQv9C+0LTRhdC+0LQg0L3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC90LDQvNC90L7Qs9C+INC70YPRh9GI0LUsINC/0L7RgdC60L7Qu9GM0LrRgyDQktCw0Lwg0L3QtSDQvdGD0LbQvdC+INCy0YDRg9GH0L3Rg9GOINC/0L7QstGC0L7RgNC90L4g0LfQsNC/0L7Qu9C90Y/RgtGMINGB0YLQsNGA0YvQtSDQstGF0L7QtNC90YvQtSDQtNCw0L3QvdGL0LUg0YTQvtGA0LzRiy5gfTwvcD5cbiAgICA8cD57YNCf0YDQuCDQstC+0LfQvdC40LrQvdC+0LLQtdC90LjQuCDQvtGI0LjQsdC+0Log0L/RgNC+0LLQtdGA0LrQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9GP0LXRgtGB0Y8g0L7QsdGA0LDRgtC90L4g0L3QsCDRgdGC0YDQsNC90LjRhtGDINGE0L7RgNC80YssINC90LAg0LrQvtGC0L7RgNC+0Lkg0L7QvSDRg9C20LUg0L3QsNGF0L7QtNC40YLRgdGPLiDQmCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiBJbmVydGlhINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGB0L7RhdGA0LDQvdGP0LXRgiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL21hbnVhbC12aXNpdHMjY29tcG9uZW50LXN0YXRlXCJcbiAgICAgIH19Pntg0YHQvtGB0YLQvtGP0L3QuNC1INC60L7QvNC/0L7QvdC10L3RgtCwYH08L2E+e2Ag0LTQu9GPINC30LDQv9GA0L7RgdC+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwdXRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGF0Y2hgfTwvaW5saW5lQ29kZT57YCDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkZWxldGVgfTwvaW5saW5lQ29kZT57YC4g0K3RgtC+INC+0LfQvdCw0YfQsNC10YIsINGH0YLQviDQstGB0LUg0LLRhdC+0LTQvdGL0LUg0LTQsNC90L3Ri9C1INGB0YLQsNGA0L7QuSDRhNC+0YDQvNGLINC+0YHRgtCw0Y7RgtGB0Y8g0LIg0YLQvtGH0L3QvtGB0YLQuCDQutCw0Log0LXRgdGC0YwuYH08L3A+XG4gICAgPHA+e2DQldC00LjQvdGB0YLQstC10L3QvdC+0LUsINGH0YLQviDQuNC30LzQtdC90LjQu9C+0YHRjCwgLSDRjdGC0L4g0YHQstC+0LnRgdGC0LLQviBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BlcnJvcnNgfTwvaW5saW5lQ29kZT57YCwg0LrQvtGC0L7RgNC+0LUg0YLQtdC/0LXRgNGMINGB0L7QtNC10YDQttC40YIg0L7RiNC40LHQutC4INCy0LDQu9C40LTQsNGG0LjQuC5gfTwvcD5cbiAgICA8aDI+e2DQo9GB0YLRgNCw0L3QtdC90LjQtSDQvtGI0LjQsdC+0LpgfTwvaDI+XG4gICAgPHA+e2DQn9C+0YHQutC+0LvRjNC60YMg0L/RgNC40LvQvtC20LXQvdC40Y8gSW5lcnRpYSDQvdC40LrQvtCz0LTQsCDQvdC1INCz0LXQvdC10YDQuNGA0YPRjtGCINC+0YLQstC10YLRiyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MjJgfTwvaW5saW5lQ29kZT57YCwgSW5lcnRpYSDQvdC10L7QsdGF0L7QtNC40Lwg0LTRgNGD0LPQvtC5INGB0L/QvtGB0L7QsSDQvtC/0YDQtdC00LXQu9C40YLRjCwg0YHQvtC00LXRgNC20LjRgiDQu9C4INC+0YLQstC10YIg0L7RiNC40LHQutC4INC/0YDQvtCy0LXRgNC60LguINCU0LvRjyDRjdGC0L7Qs9C+IEluZXJ0aWEg0L/RgNC+0LLQtdGA0Y/QtdGCINC+0LHRitC10LrRgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWdlLnByb3BzLmVycm9yc2B9PC9pbmxpbmVDb2RlPntgINC90LAg0L3QsNC70LjRh9C40LUg0L7RiNC40LHQvtC6LiDQkiDRgdC70YPRh9Cw0LUg0L/QvtGP0LLQu9C10L3QuNGPINC+0YjQuNCx0L7QuiDQsdGD0LTQtdGCINCy0YvQt9Cy0LDQvSDQvtCx0YDQsNGC0L3Ri9C5INCy0YvQt9C+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25FcnJvcigpYH08L2lubGluZUNvZGU+e2Ag0LLQvNC10YHRgtC+INC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25TdWNjZXNzKClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cD57YNCV0YHQu9C4INCS0LDRiNC1INC/0YDQuNC70L7QttC10L3QuNC1INGB0L7QvtCx0YnQsNC10YIg0L7QsSDQvtGI0LjQsdC60LDRhSwg0LjRgdC/0L7Qu9GM0LfRg9GPINGB0LLQvtC50YHRgtCy0L4sINC+0YLQu9C40YfQvdC+0LUg0L7RgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BlcnJvcnNgfTwvaW5saW5lQ29kZT57YCwg0JLRiyDQtNC+0LvQttC90Ysg0YHQvtC+0LHRidC40YLRjCBJbmVydGlhLCDQutCw0Log0LjRgdC/0YDQsNCy0LjRgtGMINGN0YLQuCDQvtGI0LjQsdC60LguINCt0YLQviDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMINGBINC/0L7QvNC+0YnRjNGOINC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUVycm9ycygpYH08L2lubGluZUNvZGU+e2AsINC/0YDQuNC80LXQvdGP0LXQvNC+0LPQviDQvdCwINGD0YDQvtCy0L3QtSDQsNC00LDQv9GC0LXRgNCwLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAzXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IGNyZWF0ZUFwcCwgaCB9IGZyb20gJ3Z1ZSdcbiAgICAgICAgaW1wb3J0IHsgQXBwLCBwbHVnaW4gfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlMydcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgY3JlYXRlQXBwKHtcbiAgICAgICAgICByZW5kZXI6ICgpID0+IGgoQXBwLCB7XG4gICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0LFxuICAgICAgICAgICAgcmVzb2x2ZUVycm9yczogcGFnZSA9PiAocGFnZS5wcm9wcy5lcnJvcnMgfHwge30pLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLnVzZShwbHVnaW4pLm1vdW50KGVsKVxcblxcblxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAyXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IEFwcCwgcGx1Z2luIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZSdcbiAgICAgICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXFxuXG4gICAgICAgIFZ1ZS51c2UocGx1Z2luKVxcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICByZW5kZXI6IGggPT4gaChBcHAsIHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdCxcbiAgICAgICAgICAgICAgcmVzb2x2ZUVycm9yczogcGFnZSA9PiAocGFnZS5wcm9wcy5lcnJvcnMgfHwge30pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSkuJG1vdW50KGVsKVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEFwcCB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIHJlbmRlcihcbiAgICAgICAgICA8QXBwXG4gICAgICAgICAgICBpbml0aWFsUGFnZT17SlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpfVxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudD17bmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0fVxuICAgICAgICAgICAgcmVzb2x2ZUVycm9ycz17cGFnZSA9PiAocGFnZS5wcm9wcy5lcnJvcnMgfHwge30pfSxcbiAgICAgICAgICAvPixcbiAgICAgICAgICBlbFxuICAgICAgICApXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgbmV3IEFwcCh7XG4gICAgICAgICAgdGFyZ2V0OiBlbCxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfS5zdmVsdGVcXGApLFxuICAgICAgICAgICAgcmVzb2x2ZUVycm9yczogcGFnZSA9PiAocGFnZS5wcm9wcy5lcnJvcnMgfHwge30pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0L7QsdGA0LDRgtC90YvQuSDQstGL0LfQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVFcnJvcnMoKWB9PC9pbmxpbmVDb2RlPntgINCy0YHQtdCz0LTQsCDQtNC+0LvQttC10L0g0LLQvtC30LLRgNCw0YnQsNGC0Ywg0L7QsdGK0LXQutGCLCDQtNCw0LbQtSDQtdGB0LvQuCDQvtGI0LjQsdC+0Log0L3QtdGCLmB9PC9wPlxuICAgIDxoMj57YNCf0LDQutC10YLRiyDQvtGI0LjQsdC+0LpgfTwvaDI+XG4gICAgPHA+e2DQlNC70Y8g0YHRgtGA0LDQvdC40YYsINGB0L7QtNC10YDQttCw0YnQuNGFINCx0L7Qu9C10LUg0L7QtNC90L7QuSDRhNC+0YDQvNGLLCDQvNC+0LPRg9GCINCy0L7Qt9C90LjQutC90YPRgtGMINC60L7QvdGE0LvQuNC60YLRiyDQv9GA0Lgg0L7RgtC+0LHRgNCw0LbQtdC90LjQuCDQvtGI0LjQsdC+0Log0L/RgNC+0LLQtdGA0LrQuCwg0LXRgdC70Lgg0LTQstC1INGE0L7RgNC80Ysg0LjQvNC10Y7RgiDQvtC00LjQvdCw0LrQvtCy0YvQtSDQuNC80LXQvdCwINC/0L7Qu9C10LkuINCd0LDQv9GA0LjQvNC10YAsINC/0YDQtdC00YHRgtCw0LLRjNGC0LUg0YHQtdCx0LUg0YTQvtGA0LzRgyDCq9GB0L7Qt9C00LDRgtGMINC60L7QvNC/0LDQvdC40Y7CuyDQuCDRhNC+0YDQvNGDIMKr0YHQvtC30LTQsNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPwrssINGDINC60L7RgtC+0YDRi9GFINC10YHRgtGMINC/0L7Qu9C1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5hbWVgfTwvaW5saW5lQ29kZT57YC4g0J/QvtGB0LrQvtC70YzQutGDINC+0LHQtSDRhNC+0YDQvNGLINCx0YPQtNGD0YIg0L7RgtC+0LHRgNCw0LbQsNGC0Ywg0L7RiNC40LHQutGDINC/0YDQvtCy0LXRgNC60LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGFnZS5wcm9wcy5lcnJvcnMubmFtZWB9PC9pbmxpbmVDb2RlPntgIHZhbGlkYXRpb24gZXJyb3IsIGdlbmVyYXRpbmcgYSB2YWxpZGF0aW9uIGVycm9yIGZvciB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbmFtZWB9PC9pbmxpbmVDb2RlPntgIGZpZWxkIGluIGVpdGhlciBmb3JtIHdpbGwgY2F1c2UgdGhlIGVycm9yIHRvIGFwcGVhciBpbiBib3RoIGZvcm1zLmB9PC9wPlxuICAgIDxwPntgVG8gZ2V0IGFyb3VuZCB0aGlzLCB5b3UgY2FuIHVzZSBlcnJvciBiYWdzLiBFcnJvciBiYWdzIHNjb3BlIHRoZSB2YWxpZGF0aW9uIGVycm9ycyByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgd2l0aGluIGEgdW5pcXVlIGtleSBzcGVjaWZpYyB0byB0aGF0IGZvcm0uIENvbnRpbnVpbmcgd2l0aCBvdXIgZXhhbXBsZSBhYm92ZSwgeW91IG1pZ2h0IGhhdmUgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BjcmVhdGVDb21wYW55YH08L2lubGluZUNvZGU+e2AgZXJyb3IgYmFnIGZvciB0aGUgZmlyc3QgZm9ybSwgYW5kIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY3JlYXRlVXNlcmB9PC9pbmxpbmVDb2RlPntgIGVycm9yIGJhZyBmb3IgdGhlIHNlY29uZCBmb3JtLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy9jb21wYW5pZXMnLCBkYXRhLCB7XG4gIGVycm9yQmFnOiAnY3JlYXRlQ29tcGFueScsXG59KVxuXG5JbmVydGlhLnBvc3QoJy91c2VycycsIGRhdGEsIHtcbiAgZXJyb3JCYWc6ICdjcmVhdGVVc2VyJyxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YERvaW5nIHRoaXMgd2lsbCBjYXVzZSB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgdG8gY29tZSBiYWNrIGZyb20gdGhlIHNlcnZlciBhcyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWdlLnByb3BzLmVycm9ycy5jcmVhdGVDb21wYW55YH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhZ2UucHJvcHMuZXJyb3JzLmNyZWF0ZVVzZXJgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cD57YE5vdGUsIGlmIHlvdSdyZSB1c2luZyB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9mb3JtcyNmb3JtLWhlbHBlclwiXG4gICAgICB9fT57YGZvcm0gaGVscGVyYH08L2E+e2AsIGl0J3Mgbm90IG5lY2Vzc2FyeSB0byB1c2UgZXJyb3IgYmFncywgc2luY2UgdmFsaWRhdGlvbiBlcnJvcnMgYXJlIGF1dG9tYXRpY2FsbHkgc2NvcGVkIHRvIHRoZSBmb3JtIG9iamVjdC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=