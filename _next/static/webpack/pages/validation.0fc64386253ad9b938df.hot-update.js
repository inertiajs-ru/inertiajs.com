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
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0438\u043D\u0430\u0447\u0435, \u0447\u0435\u043C \u0432 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0435, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 ajax, \u0433\u0434\u0435 \u0432\u044B \u043E\u0442\u043B\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438\u0437 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
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
  }, "First, you submit your form using Inertia. In the event that there are server-side validation errors, you don't immediately return those errors as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 161
    }
  }, "422"), " JSON response. Instead, you redirect (server-side) back to the form page you are on, flashing the validation errors in the session. Frameworks like Laravel do this automatically."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "Next, any time these validation errors are present in the session, they automatically get shared with Inertia, making them available client-side as page props, which you can display in your form. Since props are reactive, they are automatically shown when the form submission completes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "In order for your server-side validation errors to be available client-side, your server-side framework must share them via the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 140
    }
  }, "errors"), " prop. Some adapters, such as the Laravel adapter, do this automatically. For others, you may need to do this manually. Please refer to your specific server-side adapter documentation for more information."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "Since validation errors are made available client-side as page component props, you can conditionally display them based on their existence. Here's an example how."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "Note, in the Vue adapters, you can also access the errors via the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 78
    }
  }, "$page.props.errors"), " object."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "While handling errors in Inertia is similar to full page form submissions, this approach is actually much nicer, since you don't need to manually repopulate old form input data."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, "When validation errors occur, the user is automatically redirected back to the form page they are already on. And, by default, Inertia automatically preserves the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/manual-visits#component-state"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 175
    }
  }), "component state"), " for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 42
    }
  }, "post"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 96
    }
  }, "put"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 149
    }
  }, "patch"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 208
    }
  }, "delete"), " requests. Meaning, all the old form input data remains exactly as it is."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, "The only thing that changes is the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 47
    }
  }, "errors"), " prop, which now contains the validation errors."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "Since Inertia apps never generate ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 46
    }
  }, "422"), " responses, Inertia needs another way to determine if a response includes validation errors. To do this, Inertia checks the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 221
    }
  }, "page.props.errors"), " object for the existence of any errors. In the event that errors are present, the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 369
    }
  }, "onError()"), " callback will be called instead of the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 466
    }
  }, "onSuccess()"), " callback."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, "If you're applications shares errors using a different prop than ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 77
    }
  }, "errors"), ", you must tell Inertia how to resolve these errors. This can be done using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 211
    }
  }, "resolveErrors()"), " callback, applied at the adapter level."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmFsaWRhdGlvbi5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxXQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsbUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsNkJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSxvQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLGdCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkk7QUFGVyxDQUFiO0FBdUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4RkFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdTBCQUFpTDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWpMLDBkQUFzVTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXRVLG1iQU5LLEVBT0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4SkFBNEo7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE1Six3TEFQSyxFQVFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc1NBUkssRUFTTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVGQVRLLEVBVUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5SUFBdUk7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF2SSxrTkFWSyxFQVdMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsU0FEdUI7QUFFN0JPLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBd0IzQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0F4QjJCLENBQTlCO0FBOEJJLFdBQU8sRUFBQyxvQkE5Qlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhLLEVBMENMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0dBMUNLLEVBMkNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMktBM0NLLEVBNENMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCVCxVQUFJLEVBQUUsUUFEdUI7QUFFN0JPLGNBQVEsRUFBRSxNQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBd0MzQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0F4QzJCLEVBZ0YzQjtBQUNEVCxVQUFJLEVBQUUsUUFETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FoRjJCLENBQTlCO0FBNkdJLFdBQU8sRUFBQyxvQkE3R1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVDSyxFQTBKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJFQUF5RTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUF6RSxhQTFKSyxFQTJKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBKQTNKSyxFQTRKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlMQTVKSyxFQTZKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRLQUEwSztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQzVMLFlBQVE7QUFEb0wsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBMUssV0FFcUM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZyQyxRQUUyRjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRjNGLFFBRWdKO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGaEosWUFFMk07QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUYzTSw4RUE3SkssRUFnS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FBMEM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUExQyxxREFoS0ssRUFpS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5R0FqS0ssRUFrS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FBeUM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF6QyxrSUFBd047QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBeE4seUZBQTRXO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTVXLDhDQUE2YztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE3YyxlQWxLSyxFQW1LTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQUF3RTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXhFLHNGQUE4TTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE5TSw2Q0FuS0ssRUFvS0wsMERBQUMsc0VBQUQ7QUFBb0IsWUFBUSxFQUFFLENBQUM7QUFDN0JULFVBQUksRUFBRSxRQUR1QjtBQUU3Qk8sY0FBUSxFQUFFLElBRm1CO0FBRzdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSHlCLEtBQUQsRUFzQzNCO0FBQ0RULFVBQUksRUFBRSxPQURMO0FBRURPLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQXRDMkIsRUF1RDNCO0FBQ0RULFVBQUksRUFBRSxRQURMO0FBRURPLGNBQVEsRUFBRSxJQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQXZEMkIsQ0FBOUI7QUFzRUksV0FBTyxFQUFDLG9CQXRFWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEtLLEVBMk9MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWlCO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWpCLHlFQTNPSyxFQTRPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlGQTVPSyxFQTZPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJQQUFxUDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXJQLHNEQUF5VjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUF6ViwrREFBd2Q7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF4ZCx3RUE3T0ssRUE4T0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvTkFBa047QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbE4sMkNBQW9UO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXBULG9DQTlPSyxFQStPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdKQUFMLENBL09LLEVBeVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUZBQW1GO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQW5GLFdBQXVLO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQXZLLE1BelBLLEVBMFBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQWlDO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDbkQsWUFBUTtBQUQyQyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFqQyxpSEExUEssQ0FBUDtBQThQRDtLQWxRdUJMLFU7QUFvUXhCO0FBQ0FBLFVBQVUsQ0FBQ00sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92YWxpZGF0aW9uLjBmYzY0Mzg2MjUzYWQ5YjkzOGRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0JLQsNC70LjQtNCw0YbQuNGPJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9C60LDQui3RjdGC0L4t0YPRgdGC0YDQvtC10L3QvicsXG4gICAgbmFtZTogJ9Ca0LDQuiDRjdGC0L4g0YPRgdGC0YDQvtC10L3QvidcbiAgfSwge1xuICAgIHVybDogJyPQvtCx0LzQtdC9LdC+0YjQuNCx0LrQsNC80LgnLFxuICAgIG5hbWU6ICfQntCx0LzQtdC9INC+0YjQuNCx0LrQsNC80LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7RgtC+0LHRgNCw0LbQtdC90LjQtS3QvtGI0LjQsdC+0LonLFxuICAgIG5hbWU6ICfQntGC0L7QsdGA0LDQttC10L3QuNC1INC+0YjQuNCx0L7QuidcbiAgfSwge1xuICAgIHVybDogJyPQv9C+0LLRgtC+0YDQvdC+0LUt0LfQsNC/0L7Qu9C90LXQvdC40LUt0LLQstC+0LTQsCcsXG4gICAgbmFtZTogJ9Cf0L7QstGC0L7RgNC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDQstCy0L7QtNCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GD0YHRgtGA0LDQvdC10L3QuNC1LdC+0YjQuNCx0L7QuicsXG4gICAgbmFtZTogJ9Cj0YHRgtGA0LDQvdC10L3QuNC1INC+0YjQuNCx0L7QuidcbiAgfSwge1xuICAgIHVybDogJyPQv9Cw0LrQtdGC0Yst0L7RiNC40LHQvtC6JyxcbiAgICBuYW1lOiAn0J/QsNC60LXRgtGLINC+0YjQuNCx0L7QuidcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCS0LDQu9C40LTQsNGG0LjRj2B9PC9oMT5cbiAgICA8aDI+e2DQmtCw0Log0Y3RgtC+INGD0YHRgtGA0L7QtdC90L5gfTwvaDI+XG4gICAgPHA+e2DQntCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6INC/0YDQvtCy0LXRgNC60Lgg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCDQsiBJbmVydGlhINGA0LDQsdC+0YLQsNC10YIg0L3QtdC80L3QvtCz0L4g0LjQvdCw0YfQtSwg0YfQtdC8INCyINC60LvQsNGB0YHQuNGH0LXRgdC60L7QuSDRhNC+0YDQvNC1LCDRg9C/0YDQsNCy0LvRj9C10LzQvtC5IGFqYXgsINCz0LTQtSDQstGLINC+0YLQu9Cw0LLQu9C40LLQsNC10YLQtSDQvtGI0LjQsdC60Lgg0L/RgNC+0LLQtdGA0LrQuCDQuNC3INC+0YLQstC10YLQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQyMmB9PC9pbmxpbmVDb2RlPntgINC4INCy0YDRg9GH0L3Rg9GOINC+0LHQvdC+0LLQu9GP0LXRgtC1INGB0L7RgdGC0L7Rj9C90LjQtSDQvtGI0LjQsdC60Lgg0YTQvtGA0LzRiy4g0K3RgtC+INC/0L7RgtC+0LzRgywg0YfRgtC+IEluZXJ0aWEg0L3QuNC60L7Qs9C00LAg0L3QtSDQv9C+0LvRg9GH0LDQtdGCINC+0YLQstC10YLQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQyMmB9PC9pbmxpbmVDb2RlPntgLiDQodC60L7RgNC10LUsIEluZXJ0aWEg0YDQsNCx0L7RgtCw0LXRgiDQsdC+0LvRjNGI0LUg0LrQsNC6INGB0YLQsNC90LTQsNGA0YLQvdCw0Y8g0L7RgtC/0YDQsNCy0LrQsCDQv9C+0LvQvdC+0YHRgtGA0LDQvdC40YfQvdC+0Lkg0YTQvtGA0LzRiy4g0JLQvtGCINC60LDQujpgfTwvcD5cbiAgICA8cD57YEZpcnN0LCB5b3Ugc3VibWl0IHlvdXIgZm9ybSB1c2luZyBJbmVydGlhLiBJbiB0aGUgZXZlbnQgdGhhdCB0aGVyZSBhcmUgc2VydmVyLXNpZGUgdmFsaWRhdGlvbiBlcnJvcnMsIHlvdSBkb24ndCBpbW1lZGlhdGVseSByZXR1cm4gdGhvc2UgZXJyb3JzIGFzIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2AgSlNPTiByZXNwb25zZS4gSW5zdGVhZCwgeW91IHJlZGlyZWN0IChzZXJ2ZXItc2lkZSkgYmFjayB0byB0aGUgZm9ybSBwYWdlIHlvdSBhcmUgb24sIGZsYXNoaW5nIHRoZSB2YWxpZGF0aW9uIGVycm9ycyBpbiB0aGUgc2Vzc2lvbi4gRnJhbWV3b3JrcyBsaWtlIExhcmF2ZWwgZG8gdGhpcyBhdXRvbWF0aWNhbGx5LmB9PC9wPlxuICAgIDxwPntgTmV4dCwgYW55IHRpbWUgdGhlc2UgdmFsaWRhdGlvbiBlcnJvcnMgYXJlIHByZXNlbnQgaW4gdGhlIHNlc3Npb24sIHRoZXkgYXV0b21hdGljYWxseSBnZXQgc2hhcmVkIHdpdGggSW5lcnRpYSwgbWFraW5nIHRoZW0gYXZhaWxhYmxlIGNsaWVudC1zaWRlIGFzIHBhZ2UgcHJvcHMsIHdoaWNoIHlvdSBjYW4gZGlzcGxheSBpbiB5b3VyIGZvcm0uIFNpbmNlIHByb3BzIGFyZSByZWFjdGl2ZSwgdGhleSBhcmUgYXV0b21hdGljYWxseSBzaG93biB3aGVuIHRoZSBmb3JtIHN1Ym1pc3Npb24gY29tcGxldGVzLmB9PC9wPlxuICAgIDxoMj57YNCe0LHQvNC10L0g0L7RiNC40LHQutCw0LzQuGB9PC9oMj5cbiAgICA8cD57YEluIG9yZGVyIGZvciB5b3VyIHNlcnZlci1zaWRlIHZhbGlkYXRpb24gZXJyb3JzIHRvIGJlIGF2YWlsYWJsZSBjbGllbnQtc2lkZSwgeW91ciBzZXJ2ZXItc2lkZSBmcmFtZXdvcmsgbXVzdCBzaGFyZSB0aGVtIHZpYSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JzYH08L2lubGluZUNvZGU+e2AgcHJvcC4gU29tZSBhZGFwdGVycywgc3VjaCBhcyB0aGUgTGFyYXZlbCBhZGFwdGVyLCBkbyB0aGlzIGF1dG9tYXRpY2FsbHkuIEZvciBvdGhlcnMsIHlvdSBtYXkgbmVlZCB0byBkbyB0aGlzIG1hbnVhbGx5LiBQbGVhc2UgcmVmZXIgdG8geW91ciBzcGVjaWZpYyBzZXJ2ZXItc2lkZSBhZGFwdGVyIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24uYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgVXNlcnNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gY3JlYXRlKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdVc2Vycy9DcmVhdGUnKTtcbiAgICAgICAgICAgIH1cXG5cbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzdG9yZSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFJlcXVlc3Q6OnZhbGlkYXRlKFtcbiAgICAgICAgICAgICAgICAgICdmaXJzdF9uYW1lJyA9PiBbJ3JlcXVpcmVkJywgJ21heDo1MCddLFxuICAgICAgICAgICAgICAgICAgJ2xhc3RfbmFtZScgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnXSxcbiAgICAgICAgICAgICAgICAgICdlbWFpbCcgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnLCAnZW1haWwnXSxcbiAgICAgICAgICAgICAgXSk7XFxuXG4gICAgICAgICAgICAgICR1c2VyID0gVXNlcjo6Y3JlYXRlKFxuICAgICAgICAgICAgICAgIFJlcXVlc3Q6Om9ubHkoJ2ZpcnN0X25hbWUnLCAnbGFzdF9uYW1lJywgJ2VtYWlsJylcbiAgICAgICAgICAgICAgKTtcXG5cbiAgICAgICAgICAgICAgcmV0dXJuIFJlZGlyZWN0Ojpyb3V0ZSgndXNlcnMuc2hvdycsICR1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAjIHRvZG9cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvtGI0LjQsdC+0LpgfTwvaDI+XG4gICAgPHA+e2BTaW5jZSB2YWxpZGF0aW9uIGVycm9ycyBhcmUgbWFkZSBhdmFpbGFibGUgY2xpZW50LXNpZGUgYXMgcGFnZSBjb21wb25lbnQgcHJvcHMsIHlvdSBjYW4gY29uZGl0aW9uYWxseSBkaXNwbGF5IHRoZW0gYmFzZWQgb24gdGhlaXIgZXhpc3RlbmNlLiBIZXJlJ3MgYW4gZXhhbXBsZSBob3cuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIj5GaXJzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCIgdi1tb2RlbD1cImZvcm0uZmlyc3RfbmFtZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMuZmlyc3RfbmFtZVwiPnt7IGVycm9ycy5maXJzdF9uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCI+TGFzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzLmxhc3RfbmFtZVwiPnt7IGVycm9ycy5sYXN0X25hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycy5lbWFpbFwiPnt7IGVycm9ycy5lbWFpbCB9fTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGVycm9yczogT2JqZWN0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgdGhpcy4kaW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB0aGlzLmZvcm0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcbiAgICAgICAgaW1wb3J0IHsgdXNlUGFnZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoKSB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IHVzZVBhZ2UoKS5wcm9wc1xcblxuICAgICAgICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgfSlcXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgc2V0VmFsdWVzKHZhbHVlcyA9PiAoe1xuICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIEluZXJ0aWEucG9zdCgnL3VzZXJzJywgdmFsdWVzKVxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCIgdmFsdWU9e3ZhbHVlcy5maXJzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmZpcnN0X25hbWUgJiYgPGRpdj57ZXJyb3JzLmZpcnN0X25hbWV9PC9kaXY+fVxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCI+TGFzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIHZhbHVlPXt2YWx1ZXMubGFzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmxhc3RfbmFtZSAmJiA8ZGl2PntlcnJvcnMubGFzdF9uYW1lfTwvZGl2Pn1cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB2YWx1ZT17dmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxkaXY+e2Vycm9ycy5lbWFpbH08L2Rpdj59XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICAgIGV4cG9ydCBsZXQgZXJyb3JzID0ge31cXG5cbiAgICAgICAgICBsZXQgdmFsdWVzID0ge1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgICAgICBJbmVydGlhLnBvc3QoJy91c2VycycsIHZhbHVlcylcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIj5GaXJzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5maXJzdF9uYW1lfT5cbiAgICAgICAgICB7I2lmIGVycm9ycy5maXJzdF9uYW1lfTxkaXY+e2Vycm9ycy5maXJzdF9uYW1lfTwvZGl2PnsvaWZ9XFxuXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiPkxhc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5sYXN0X25hbWV9PlxuICAgICAgICAgIHsjaWYgZXJyb3JzLmxhc3RfbmFtZX08ZGl2PntlcnJvcnMubGFzdF9uYW1lfTwvZGl2PnsvaWZ9XFxuXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5lbWFpbH0+XG4gICAgICAgICAgeyNpZiBlcnJvcnMuZW1haWx9PGRpdj57ZXJyb3JzLmVtYWlsfTwvZGl2PnsvaWZ9XFxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BOb3RlLCBpbiB0aGUgVnVlIGFkYXB0ZXJzLCB5b3UgY2FuIGFsc28gYWNjZXNzIHRoZSBlcnJvcnMgdmlhIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AkcGFnZS5wcm9wcy5lcnJvcnNgfTwvaW5saW5lQ29kZT57YCBvYmplY3QuYH08L3A+XG4gICAgPGgyPntg0J/QvtCy0YLQvtGA0L3QvtC1INC30LDQv9C+0LvQvdC10L3QuNC1INCy0LLQvtC00LBgfTwvaDI+XG4gICAgPHA+e2BXaGlsZSBoYW5kbGluZyBlcnJvcnMgaW4gSW5lcnRpYSBpcyBzaW1pbGFyIHRvIGZ1bGwgcGFnZSBmb3JtIHN1Ym1pc3Npb25zLCB0aGlzIGFwcHJvYWNoIGlzIGFjdHVhbGx5IG11Y2ggbmljZXIsIHNpbmNlIHlvdSBkb24ndCBuZWVkIHRvIG1hbnVhbGx5IHJlcG9wdWxhdGUgb2xkIGZvcm0gaW5wdXQgZGF0YS5gfTwvcD5cbiAgICA8cD57YFdoZW4gdmFsaWRhdGlvbiBlcnJvcnMgb2NjdXIsIHRoZSB1c2VyIGlzIGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RlZCBiYWNrIHRvIHRoZSBmb3JtIHBhZ2UgdGhleSBhcmUgYWxyZWFkeSBvbi4gQW5kLCBieSBkZWZhdWx0LCBJbmVydGlhIGF1dG9tYXRpY2FsbHkgcHJlc2VydmVzIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL21hbnVhbC12aXNpdHMjY29tcG9uZW50LXN0YXRlXCJcbiAgICAgIH19PntgY29tcG9uZW50IHN0YXRlYH08L2E+e2AgZm9yIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3RgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHV0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoYH08L2lubGluZUNvZGU+e2AsIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkZWxldGVgfTwvaW5saW5lQ29kZT57YCByZXF1ZXN0cy4gTWVhbmluZywgYWxsIHRoZSBvbGQgZm9ybSBpbnB1dCBkYXRhIHJlbWFpbnMgZXhhY3RseSBhcyBpdCBpcy5gfTwvcD5cbiAgICA8cD57YFRoZSBvbmx5IHRoaW5nIHRoYXQgY2hhbmdlcyBpcyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JzYH08L2lubGluZUNvZGU+e2AgcHJvcCwgd2hpY2ggbm93IGNvbnRhaW5zIHRoZSB2YWxpZGF0aW9uIGVycm9ycy5gfTwvcD5cbiAgICA8aDI+e2DQo9GB0YLRgNCw0L3QtdC90LjQtSDQvtGI0LjQsdC+0LpgfTwvaDI+XG4gICAgPHA+e2BTaW5jZSBJbmVydGlhIGFwcHMgbmV2ZXIgZ2VuZXJhdGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2AgcmVzcG9uc2VzLCBJbmVydGlhIG5lZWRzIGFub3RoZXIgd2F5IHRvIGRldGVybWluZSBpZiBhIHJlc3BvbnNlIGluY2x1ZGVzIHZhbGlkYXRpb24gZXJyb3JzLiBUbyBkbyB0aGlzLCBJbmVydGlhIGNoZWNrcyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGFnZS5wcm9wcy5lcnJvcnNgfTwvaW5saW5lQ29kZT57YCBvYmplY3QgZm9yIHRoZSBleGlzdGVuY2Ugb2YgYW55IGVycm9ycy4gSW4gdGhlIGV2ZW50IHRoYXQgZXJyb3JzIGFyZSBwcmVzZW50LCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25FcnJvcigpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25TdWNjZXNzKClgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjay5gfTwvcD5cbiAgICA8cD57YElmIHlvdSdyZSBhcHBsaWNhdGlvbnMgc2hhcmVzIGVycm9ycyB1c2luZyBhIGRpZmZlcmVudCBwcm9wIHRoYW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JzYH08L2lubGluZUNvZGU+e2AsIHlvdSBtdXN0IHRlbGwgSW5lcnRpYSBob3cgdG8gcmVzb2x2ZSB0aGVzZSBlcnJvcnMuIFRoaXMgY2FuIGJlIGRvbmUgdXNpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVFcnJvcnMoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLCBhcHBsaWVkIGF0IHRoZSBhZGFwdGVyIGxldmVsLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAzXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IGNyZWF0ZUFwcCwgaCB9IGZyb20gJ3Z1ZSdcbiAgICAgICAgaW1wb3J0IHsgQXBwLCBwbHVnaW4gfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlMydcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgY3JlYXRlQXBwKHtcbiAgICAgICAgICByZW5kZXI6ICgpID0+IGgoQXBwLCB7XG4gICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0LFxuICAgICAgICAgICAgcmVzb2x2ZUVycm9yczogcGFnZSA9PiAocGFnZS5wcm9wcy5lcnJvcnMgfHwge30pLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLnVzZShwbHVnaW4pLm1vdW50KGVsKVxcblxcblxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAyXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IEFwcCwgcGx1Z2luIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZSdcbiAgICAgICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXFxuXG4gICAgICAgIFZ1ZS51c2UocGx1Z2luKVxcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICByZW5kZXI6IGggPT4gaChBcHAsIHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdCxcbiAgICAgICAgICAgICAgcmVzb2x2ZUVycm9yczogcGFnZSA9PiAocGFnZS5wcm9wcy5lcnJvcnMgfHwge30pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSkuJG1vdW50KGVsKVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEFwcCB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIHJlbmRlcihcbiAgICAgICAgICA8QXBwXG4gICAgICAgICAgICBpbml0aWFsUGFnZT17SlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpfVxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudD17bmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0fVxuICAgICAgICAgICAgcmVzb2x2ZUVycm9ycz17cGFnZSA9PiAocGFnZS5wcm9wcy5lcnJvcnMgfHwge30pfSxcbiAgICAgICAgICAvPixcbiAgICAgICAgICBlbFxuICAgICAgICApXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgbmV3IEFwcCh7XG4gICAgICAgICAgdGFyZ2V0OiBlbCxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfS5zdmVsdGVcXGApLFxuICAgICAgICAgICAgcmVzb2x2ZUVycm9yczogcGFnZSA9PiAocGFnZS5wcm9wcy5lcnJvcnMgfHwge30pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgTm90ZSwgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVFcnJvcnMoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrIG11c3QgYWx3YXlzIHJldHVybiBhbiBvYmplY3QsIGV2ZW4gaWYgdGhlcmUgYXJlIG5vIGVycm9ycy5gfTwvcD5cbiAgICA8aDI+e2DQn9Cw0LrQtdGC0Ysg0L7RiNC40LHQvtC6YH08L2gyPlxuICAgIDxwPntgRm9yIHBhZ2VzIHRoYXQgaGF2ZSBtb3JlIHRoYW4gb25lIGZvcm0sIGl0J3MgcG9zc2libGUgdG8gcnVuIGludG8gY29uZmxpY3RzIHdoZW4gZGlzcGxheWluZyB2YWxpZGF0aW9uIGVycm9ycyBpZiB0d28gZm9ybXMgc2hhcmUgdGhlIHNhbWUgZmllbGQgbmFtZXMuIEZvciBleGFtcGxlLCBpbWFnaW5lIGEgXCJjcmVhdGUgY29tcGFueVwiIGZvcm0gYW5kIGEgXCJjcmVhdGUgdXNlclwiIGZvcm0gdGhhdCBib3RoIGhhdmUgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYW1lYH08L2lubGluZUNvZGU+e2AgZmllbGQuIFNpbmNlIGJvdGggZm9ybXMgd2lsbCBiZSBkaXNwbGF5aW5nIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWdlLnByb3BzLmVycm9ycy5uYW1lYH08L2lubGluZUNvZGU+e2AgdmFsaWRhdGlvbiBlcnJvciwgZ2VuZXJhdGluZyBhIHZhbGlkYXRpb24gZXJyb3IgZm9yIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYW1lYH08L2lubGluZUNvZGU+e2AgZmllbGQgaW4gZWl0aGVyIGZvcm0gd2lsbCBjYXVzZSB0aGUgZXJyb3IgdG8gYXBwZWFyIGluIGJvdGggZm9ybXMuYH08L3A+XG4gICAgPHA+e2BUbyBnZXQgYXJvdW5kIHRoaXMsIHlvdSBjYW4gdXNlIGVycm9yIGJhZ3MuIEVycm9yIGJhZ3Mgc2NvcGUgdGhlIHZhbGlkYXRpb24gZXJyb3JzIHJldHVybmVkIGZyb20gdGhlIHNlcnZlciB3aXRoaW4gYSB1bmlxdWUga2V5IHNwZWNpZmljIHRvIHRoYXQgZm9ybS4gQ29udGludWluZyB3aXRoIG91ciBleGFtcGxlIGFib3ZlLCB5b3UgbWlnaHQgaGF2ZSBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNyZWF0ZUNvbXBhbnlgfTwvaW5saW5lQ29kZT57YCBlcnJvciBiYWcgZm9yIHRoZSBmaXJzdCBmb3JtLCBhbmQgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BjcmVhdGVVc2VyYH08L2lubGluZUNvZGU+e2AgZXJyb3IgYmFnIGZvciB0aGUgc2Vjb25kIGZvcm0uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWEucG9zdCgnL2NvbXBhbmllcycsIGRhdGEsIHtcbiAgZXJyb3JCYWc6ICdjcmVhdGVDb21wYW55Jyxcbn0pXG5cbkluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSwge1xuICBlcnJvckJhZzogJ2NyZWF0ZVVzZXInLFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgRG9pbmcgdGhpcyB3aWxsIGNhdXNlIHRoZSB2YWxpZGF0aW9uIGVycm9ycyB0byBjb21lIGJhY2sgZnJvbSB0aGUgc2VydmVyIGFzIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhZ2UucHJvcHMuZXJyb3JzLmNyZWF0ZUNvbXBhbnlgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGFnZS5wcm9wcy5lcnJvcnMuY3JlYXRlVXNlcmB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwPntgTm90ZSwgaWYgeW91J3JlIHVzaW5nIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2Zvcm1zI2Zvcm0taGVscGVyXCJcbiAgICAgIH19PntgZm9ybSBoZWxwZXJgfTwvYT57YCwgaXQncyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBlcnJvciBiYWdzLCBzaW5jZSB2YWxpZGF0aW9uIGVycm9ycyBhcmUgYXV0b21hdGljYWxseSBzY29wZWQgdG8gdGhlIGZvcm0gb2JqZWN0LmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==