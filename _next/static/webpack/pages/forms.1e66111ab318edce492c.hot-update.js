webpackHotUpdate_N_E("pages/forms",{

/***/ "./pages/forms.mdx":
/*!*************************!*\
  !*** ./pages/forms.mdx ***!
  \*************************/
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
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\forms.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        # todo\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        # todo\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <template>\n          <form @submit.prevent=\"form.post('/login')\">\n            <!-- email -->\n            <input type=\"text\" v-model=\"form.email\">\n            <div v-if=\"form.errors.email\">{{ form.errors.email }}</div>\n            <!-- password -->\n            <input type=\"password\" v-model=\"form.password\">\n            <div v-if=\"form.errors.password\">{{ form.errors.password }}</div>\n            <!-- \u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u0435 \u043C\u0435\u043D\u044F -->\n            <input type=\"checkbox\" v-model=\"form.remember\"> \u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u0435 \u043C\u0435\u043D\u044F\n            <!-- submit -->\n            <button type=\"submit\" :disabled=\"form.processing\">\u0412\u043E\u0439\u0442\u0438</button>\n          </form>\n        </template>\n\n        <script>\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\n\n        import { useForm } from '@inertiajs/inertia-vue3'\n\n        export default {\n          setup () {\n            const form = useForm({\n              email: null,\n              password: null,\n              remember: false,\n            })\n\n            return { form }\n          },\n        }\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\n\n        export default {\n          data() {\n            return {\n              form: this.$inertia.form({\n                email: null,\n                password: null,\n                remember: false,\n              }),\n            }\n          },\n        }\n        </script>\n      "], ["\n        <template>\n          <form @submit.prevent=\"form.post('/login')\">\n            <!-- email -->\n            <input type=\"text\" v-model=\"form.email\">\n            <div v-if=\"form.errors.email\">{{ form.errors.email }}</div>\n            <!-- password -->\n            <input type=\"password\" v-model=\"form.password\">\n            <div v-if=\"form.errors.password\">{{ form.errors.password }}</div>\n            <!-- \u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u0435 \u043C\u0435\u043D\u044F -->\n            <input type=\"checkbox\" v-model=\"form.remember\"> \u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u0435 \u043C\u0435\u043D\u044F\n            <!-- submit -->\n            <button type=\"submit\" :disabled=\"form.processing\">\u0412\u043E\u0439\u0442\u0438</button>\n          </form>\n        </template>\\n\n        <script>\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\\n\n        import { useForm } from '@inertiajs/inertia-vue3'\\n\n        export default {\n          setup () {\n            const form = useForm({\n              email: null,\n              password: null,\n              remember: false,\n            })\\n\n            return { form }\n          },\n        }\\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\\n\n        export default {\n          data() {\n            return {\n              form: this.$inertia.form({\n                email: null,\n                password: null,\n                remember: false,\n              }),\n            }\n          },\n        }\n        </script>\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        class UsersController < ApplicationController\n          def index\n            render inertia: 'Users/Index', props: { users: User.all }\n          end\n\n          def create\n            User.create params.require(:user).permit(:first_name, :last_name, :email)\n\n            redirect_to users_path\n          end\n        end\n      "], ["\n        class UsersController < ApplicationController\n          def index\n            render inertia: 'Users/Index', props: { users: User.all }\n          end\\n\n          def create\n            User.create params.require(:user).permit(:first_name, :last_name, :email)\\n\n            redirect_to users_path\n          end\n        end\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        class UsersController extends Controller\n        {\n            public function index()\n            {\n                return Inertia::render('Users/Index', [\n                  'users' => User::all(),\n                ]);\n            }\n\n            public function store()\n            {\n                User::create(\n                    Request::validate([\n                        'first_name' => ['required', 'max:50'],\n                        'last_name' => ['required', 'max:50'],\n                        'email' => ['required', 'max:50', 'email'],\n                    ])\n                );\n\n                return Redirect::route('users');\n            }\n        }\n      "], ["\n        class UsersController extends Controller\n        {\n            public function index()\n            {\n                return Inertia::render('Users/Index', [\n                  'users' => User::all(),\n                ]);\n            }\\n\n            public function store()\n            {\n                User::create(\n                    Request::validate([\n                        'first_name' => ['required', 'max:50'],\n                        'last_name' => ['required', 'max:50'],\n                        'email' => ['required', 'max:50', 'email'],\n                    ])\n                );\\n\n                return Redirect::route('users');\n            }\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <script>\n          import { Inertia } from '@inertiajs/inertia'\n\n          let values = {\n            first_name: null,\n            last_name: null,\n            email: null,\n          }\n\n          function handleSubmit() {\n            Inertia.post('/users', values)\n          }\n        </script>\n\n        <form on:submit|preventDefault={handleSubmit}>\n          <label for=\"first_name\">\u0418\u043C\u044F:</label>\n          <input id=\"first_name\" bind:value={values.first_name}>\n\n          <label for=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n          <input id=\"last_name\" bind:value={values.last_name}>\n\n          <label for=\"email\">\u042D\u043B. \u043F\u043E\u0447\u0442\u0430:</label>\n          <input id=\"email\" bind:value={values.email}>\n\n          <button type=\"submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n        </form>\n      "], ["\n        <script>\n          import { Inertia } from '@inertiajs/inertia'\\n\n          let values = {\n            first_name: null,\n            last_name: null,\n            email: null,\n          }\\n\n          function handleSubmit() {\n            Inertia.post('/users', values)\n          }\n        </script>\\n\n        <form on:submit|preventDefault={handleSubmit}>\n          <label for=\"first_name\">\u0418\u043C\u044F:</label>\n          <input id=\"first_name\" bind:value={values.first_name}>\\n\n          <label for=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n          <input id=\"last_name\" bind:value={values.last_name}>\\n\n          <label for=\"email\">\u042D\u043B. \u043F\u043E\u0447\u0442\u0430:</label>\n          <input id=\"email\" bind:value={values.email}>\\n\n          <button type=\"submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n        </form>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n        import React, { useState } from 'react'\n\n        export default function Edit() {\n          const [values, setValues] = useState({\n            first_name: \"\",\n            last_name: \"\",\n            email: \"\",\n          })\n\n          function handleChange(e) {\n            const key = e.target.id;\n            const value = e.target.value\n            setValues(values => ({\n                ...values,\n                [key]: value,\n            }))\n          }\n\n          function handleSubmit(e) {\n            e.preventDefault()\n            Inertia.post('/users', values)\n          }\n\n          return (\n            <form onSubmit={handleSubmit}>\n              <label htmlFor=\"first_name\">\u0418\u043C\u044F:</label>\n              <input id=\"first_name\" value={values.first_name} onChange={handleChange} />\n              <label htmlFor=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n              <input id=\"last_name\" value={values.last_name} onChange={handleChange} />\n              <label htmlFor=\"email\">\u042D\u043B. \u043F\u043E\u0447\u0442\u0430:</label>\n              <input id=\"email\" value={values.email} onChange={handleChange} />\n              <button type=\"submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n            </form>\n          )\n        }\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\n        import React, { useState } from 'react'\\n\n        export default function Edit() {\n          const [values, setValues] = useState({\n            first_name: \"\",\n            last_name: \"\",\n            email: \"\",\n          })\\n\n          function handleChange(e) {\n            const key = e.target.id;\n            const value = e.target.value\n            setValues(values => ({\n                ...values,\n                [key]: value,\n            }))\n          }\\n\n          function handleSubmit(e) {\n            e.preventDefault()\n            Inertia.post('/users', values)\n          }\\n\n          return (\n            <form onSubmit={handleSubmit}>\n              <label htmlFor=\"first_name\">\u0418\u043C\u044F:</label>\n              <input id=\"first_name\" value={values.first_name} onChange={handleChange} />\n              <label htmlFor=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n              <input id=\"last_name\" value={values.last_name} onChange={handleChange} />\n              <label htmlFor=\"email\">\u042D\u043B. \u043F\u043E\u0447\u0442\u0430:</label>\n              <input id=\"email\" value={values.email} onChange={handleChange} />\n              <button type=\"submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n            </form>\n          )\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <template>\n          <form @submit.prevent=\"submit\">\n            <label for=\"first_name\">\u0418\u043C\u044F:</label>\n            <input id=\"first_name\" v-model=\"form.first_name\" />\n            <label for=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n            <input id=\"last_name\" v-model=\"form.last_name\" />\n            <label for=\"email\">\u042D\u043B. \u043F\u043E\u0447\u0442\u0430:</label>\n            <input id=\"email\" v-model=\"form.email\" />\n            <button type=\"submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n          </form>\n        </template>\n\n        <script>\n        export default {\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                email: null,\n              },\n            }\n          },\n          methods: {\n            submit() {\n              this.$inertia.post('/users', this.form)\n            },\n          },\n        }\n        </script>\n      "], ["\n        <template>\n          <form @submit.prevent=\"submit\">\n            <label for=\"first_name\">\u0418\u043C\u044F:</label>\n            <input id=\"first_name\" v-model=\"form.first_name\" />\n            <label for=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n            <input id=\"last_name\" v-model=\"form.last_name\" />\n            <label for=\"email\">\u042D\u043B. \u043F\u043E\u0447\u0442\u0430:</label>\n            <input id=\"email\" v-model=\"form.email\" />\n            <button type=\"submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n          </form>\n        </template>\\n\n        <script>\n        export default {\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                email: null,\n              },\n            }\n          },\n          methods: {\n            submit() {\n              this.$inertia.post('/users', this.form)\n            },\n          },\n        }\n        </script>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Формы',
  links: [{
    url: '#отправка-форм',
    name: 'Отправка форм'
  }, {
    url: '#загрузка-файлов',
    name: 'Загрузка файлов'
  }, {
    url: '#помощник-формы',
    name: 'Помощник формы'
  }, {
    url: '#проверка-на-стороне-сервера',
    name: 'Проверка на стороне сервера'
  }, {
    url: '#классическая-отправка-xhr',
    name: 'Классическая отправка XHR'
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
      lineNumber: 38,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "\u0424\u043E\u0440\u043C\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0444\u043E\u0440\u043C"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "\u0425\u043E\u0442\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0444\u043E\u0440\u043C\u044B, \u044D\u0442\u043E \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F, \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0442 \u043F\u043E\u043B\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043B\u0443\u0447\u0448\u0435 \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0438\u0442\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B, \u0430 \u0437\u0430\u0442\u0435\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/requests"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 212
    }
  }), "\u0437\u0430\u043F\u0440\u043E\u0441"), " \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, "\u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 ajax, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia \u0412\u044B \u043D\u0435 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u0421\u043A\u043E\u0440\u0435\u0435, \u0412\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0435 \u044D\u0442\u043E \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/redirects"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 199
    }
  }), "\u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"), ". \u0418, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u043D\u0438\u0447\u0442\u043E \u043D\u0435 \u043C\u0435\u0448\u0430\u0435\u0442 \u0412\u0430\u043C \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0412\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u0430\u0439\u043B\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, "\u0423\u043B\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u0430\u0439\u043B\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 93
    }
  }, "FormData"), ", \u0442\u0430\u043A \u043A\u0430\u043A \u044D\u0442\u043E \u0442\u043E, \u0447\u0442\u043E \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 202
    }
  }, "multipart/form-data"), " \u0447\u0435\u0440\u0435\u0437 XHR. \u0412\u043E\u0442 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 314
    }
  }, "FormData"), " c Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
      lineNumber: 189,
      columnNumber: 10
    }
  }), "var data = new FormData()\ndata.append('name', name || '')\ndata.append('email', email || '')\ndata.append('password', password || '')\ndata.append('is_admin', is_admin ? '1' : '0')\ndata.append('photo', photo || '')\n\nInertia.post('/users', data)\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430\u043A\u043E, \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 \u0432\u0435\u0440\u0441\u0438\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 37
    }
  }, "0.8.0"), ", Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442, \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043B\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u043A\u0430\u043A\u0438\u0435-\u043B\u0438\u0431\u043E \u0444\u0430\u0439\u043B\u044B (\u0434\u0430\u0436\u0435 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B), \u0430 \u0437\u0430\u0442\u0435\u043C \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u043E\u0431\u044A\u0435\u043A\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 243
    }
  }, "FormData"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0431 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 50
    }
  }, "FormData"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/FormData"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 107
    }
  }), "\u0437\u0434\u0435\u0441\u044C"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, "\u041F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u0444\u043E\u0440\u043C\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0444\u043E\u0440\u043C\u0430\u043C\u0438 \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0430, Inertia \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A\u043E\u043C \u0444\u043E\u0440\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0434\u043B\u044F \u0442\u0438\u043F\u0438\u0447\u043D\u044B\u0445 \u0444\u043E\u0440\u043C. \u0412\u043E\u0442 \u043A\u0430\u043A \u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B \u043F\u0435\u0440\u0435\u0434 \u0438\u0445 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u043E\u0439 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u0435\u0442\u043E\u0434\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 118
    }
  }, "transform()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
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
      lineNumber: 273,
      columnNumber: 10
    }
  }), "this.form\n  .transform((data) => ({\n    ...data,\n    remember: data.remember ? 'on' : '',\n  }))\n  .post('/login')\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 44
    }
  }, "form.processing"), ", \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C, \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438 \u0444\u043E\u0440\u043C\u0430 \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B, \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0432 \u043A\u043D\u043E\u043F\u043A\u0443 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 10
    }
  }), "<button type=\"submit\" :disabled=\"form.processing\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 5
    }
  }, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0412\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0435 \u0444\u0430\u0439\u043B\u044B, \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 99
    }
  }, "form.progress"), ". \u042D\u0442\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 10
    }
  }), "<progress v-if=\"form.progress\" :value=\"form.progress.percentage\" max=\"100\">\n  {{ form.progress.percentage }}%\n</progress>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 5
    }
  }, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0448\u0438\u0431\u043E\u043A \u0444\u043E\u0440\u043C\u044B \u043E\u043D\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 62
    }
  }, "form.errors"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 10
    }
  }), "<div v-if=\"form.errors.email\">{{ form.errors.email }}</div>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C, \u043D\u0435\u0442 \u043B\u0438 \u0432 \u0444\u043E\u0440\u043C\u0435 \u043E\u0448\u0438\u0431\u043E\u043A, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 73
    }
  }, "form.hasErrors"), ". \u0427\u0442\u043E\u0431\u044B \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438 \u0444\u043E\u0440\u043C\u044B, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043C\u0435\u0442\u043E\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 183
    }
  }, "form.clearErrors()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
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
      lineNumber: 300,
      columnNumber: 10
    }
  }), "// \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u043E\u0448\u0438\u0431\u043A\u0438\nform.clearErrors()\n\n// \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438 \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u0435\u0439\nform.clearErrors('field', 'anotherfield')\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 5
    }
  }, "\u041A\u043E\u0433\u0434\u0430 \u0444\u043E\u0440\u043C\u0430 \u0431\u044B\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430, \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 58
    }
  }, "form.wasSuccessful"), " \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 146
    }
  }, "true"), ". \u0412 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A \u044D\u0442\u043E\u043C\u0443, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043A\u0436\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 248
    }
  }, "form.recentlySuccessful"), ", \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 355
    }
  }, "true"), " \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u0432\u0443\u0445 \u0441\u0435\u043A\u0443\u043D\u0434 \u043F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B. \u042D\u0442\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u043E\u0431 \u0443\u0441\u043F\u0435\u0445\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0444\u043E\u0440\u043C\u044B, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043C\u0435\u0442\u043E\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 74
    }
  }, "form.reset()"), ". \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u044D\u0442\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043A \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u044B\u043B\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B, \u043A\u043E\u0433\u0434\u0430 \u0412\u044B \u0432\u044B\u0437\u044B\u0432\u0430\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 253
    }
  }, "Inertia.form()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
      lineNumber: 310,
      columnNumber: 10
    }
  }), "// \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443\nform.reset()\n\n// \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044F\nform.reset('field', 'anotherfield')\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 5
    }
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0438\u043D\u0430\u0447\u0435, \u0447\u0435\u043C \u0432 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0435, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 ajax, \u0433\u0434\u0435 \u0412\u044B \u043E\u0442\u043B\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438\u0437 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 182
    }
  }, "422"), " \u0438 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u0444\u043E\u0440\u043C\u044B. \u042D\u0442\u043E \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E Inertia \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 331
    }
  }, "422"), ". \u0421\u043A\u043E\u0440\u0435\u0435, Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u043A\u0430\u043A \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B. \u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/validation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 473
    }
  }), "\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"), " \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 5
    }
  }, "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 XHR"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 5
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 Inertia \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C \u0445\u043E\u0440\u043E\u0448\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043F\u043E\u0434\u0430\u0432\u043B\u044F\u044E\u0449\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439. \u041E\u0434\u043D\u0430\u043A\u043E, \u0435\u0441\u043B\u0438 \u0412\u0430\u043C \u043D\u0443\u0436\u0435\u043D \u0431\u043E\u043B\u0435\u0435 \u0442\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u044B, \u043D\u0438\u0447\u0442\u043E \u043D\u0435 \u043C\u0435\u0448\u0430\u0435\u0442 \u0412\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 XHR. \u041E\u0442\u043B\u0438\u0447\u043D\u0430\u044F \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0434\u0435\u0441\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/axios/axios"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 267
    }
  }), "axios"), ", \u043A\u043E\u0442\u043E\u0440\u0443\u044E Inertia \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043F\u043E\u0434 \u043A\u0430\u043F\u043E\u0442\u043E\u043C."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybXMubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsT0FEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLGdCQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLDhCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEksRUFZSjtBQUNERCxPQUFHLEVBQUUsNEJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FaSTtBQUZXLENBQWI7QUFvQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7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QUFBQTtBQUFBO0FBQUE7QUFBQSx1MEJBQWlMO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBakwsMGRBQXNVO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdFUsK2JBQW9kO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDdGUsWUFBUTtBQUQ4ZCxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBHQUFwZCxrT0F6UkssRUE0Ukw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxSUE1UkssRUE2Ukw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxteENBQXNRO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDeFIsWUFBUTtBQURnUixHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXRRLHFMQTdSSyxDQUFQO0FBaVNEO0tBclN1QkwsVTtBQXVTeEI7QUFDQUEsVUFBVSxDQUFDTSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLjFlNjYxMTFhYjMxOGVkY2U0OTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KTQvtGA0LzRiycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPQvtGC0L/RgNCw0LLQutCwLdGE0L7RgNC8JyxcbiAgICBuYW1lOiAn0J7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvCdcbiAgfSwge1xuICAgIHVybDogJyPQt9Cw0LPRgNGD0LfQutCwLdGE0LDQudC70L7QsicsXG4gICAgbmFtZTogJ9CX0LDQs9GA0YPQt9C60LAg0YTQsNC50LvQvtCyJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C/0L7QvNC+0YnQvdC40Lot0YTQvtGA0LzRiycsXG4gICAgbmFtZTogJ9Cf0L7QvNC+0YnQvdC40Log0YTQvtGA0LzRiydcbiAgfSwge1xuICAgIHVybDogJyPQv9GA0L7QstC10YDQutCwLdC90LAt0YHRgtC+0YDQvtC90LUt0YHQtdGA0LLQtdGA0LAnLFxuICAgIG5hbWU6ICfQn9GA0L7QstC10YDQutCwINC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LrQu9Cw0YHRgdC40YfQtdGB0LrQsNGPLdC+0YLQv9GA0LDQstC60LAteGhyJyxcbiAgICBuYW1lOiAn0JrQu9Cw0YHRgdC40YfQtdGB0LrQsNGPINC+0YLQv9GA0LDQstC60LAgWEhSJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KTQvtGA0LzRi2B9PC9oMT5cbiAgICA8aDI+e2DQntGC0L/RgNCw0LLQutCwINGE0L7RgNC8YH08L2gyPlxuICAgIDxwPntg0KXQvtGC0Y8g0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYSDQvNC+0LbQvdC+INC+0YLQv9GA0LDQstC70Y/RgtGMINC60LvQsNGB0YHQuNGH0LXRgdC60LjQtSDRhNC+0YDQvNGLLCDRjdGC0L4g0L3QtSDRgNC10LrQvtC80LXQvdC00YPQtdGC0YHRjywg0YLQsNC6INC60LDQuiDQvtC90Lgg0LLRi9C30YvQstCw0Y7RgiDQv9C+0LvQvdGD0Y4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutGDINGB0YLRgNCw0L3QuNGG0YsuINCS0LzQtdGB0YLQviDRjdGC0L7Qs9C+INC70YPRh9GI0LUg0L/QtdGA0LXRhdCy0LDRgtC40YLRjCDQvtGC0L/RgNCw0LLQu9C10L3QvdGL0LUg0YTQvtGA0LzRiywg0LAg0LfQsNGC0LXQvCDRgdC00LXQu9Cw0YLRjCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3JlcXVlc3RzXCJcbiAgICAgIH19Pntg0LfQsNC/0YDQvtGBYH08L2E+e2Ag0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYS5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3RfbmFtZVwiPtCY0LzRjzo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIHYtbW9kZWw9XCJmb3JtLmZpcnN0X25hbWVcIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiPtCk0LDQvNC40LvQuNGPOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+0K3Quy4g0L/QvtGH0YLQsDo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvdGVtcGxhdGU+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICB0aGlzLiRpbmVydGlhLnBvc3QoJy91c2VycycsIHRoaXMuZm9ybSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuICAgICAgICBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdCgpIHtcbiAgICAgICAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogXCJcIixcbiAgICAgICAgICAgIGxhc3RfbmFtZTogXCJcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgIH0pXFxuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGUudGFyZ2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgc2V0VmFsdWVzKHZhbHVlcyA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICBba2V5XTogdmFsdWUsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XFxuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB2YWx1ZXMpXG4gICAgICAgICAgfVxcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdF9uYW1lXCI+0JjQvNGPOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpcnN0X25hbWVcIiB2YWx1ZT17dmFsdWVzLmZpcnN0X25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdF9uYW1lXCI+0KTQsNC80LjQu9C40Y86PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwibGFzdF9uYW1lXCIgdmFsdWU9e3ZhbHVlcy5sYXN0X25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj7QrdC7LiDQv9C+0YfRgtCwOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdmFsdWU9e3ZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgICAgbGV0IHZhbHVlcyA9IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICB9XFxuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICAgICAgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB2YWx1ZXMpXG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+0JjQvNGPOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5maXJzdF9uYW1lfT5cXG5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCI+0KTQsNC80LjQu9C40Y86PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiBiaW5kOnZhbHVlPXt2YWx1ZXMubGFzdF9uYW1lfT5cXG5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj7QrdC7LiDQv9C+0YfRgtCwOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBiaW5kOnZhbHVlPXt2YWx1ZXMuZW1haWx9PlxcblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0JIg0L7RgtC70LjRh9C40LUg0L7RgiDQutC70LDRgdGB0LjRh9C10YHQutC+0Lkg0YTQvtGA0LzRiyDQvtGC0L/RgNCw0LLQutC4IGFqYXgsINGBINC/0L7QvNC+0YnRjNGOIEluZXJ0aWEg0JLRiyDQvdC1INC+0LHRgNCw0LHQsNGC0YvQstCw0LXRgtC1INC/0L7QstC10LTQtdC90LjQtSDQvtGC0L/RgNCw0LLQutC4INGB0L7QvtCx0YnQtdC90LjRjyDQvdCwINGB0YLQvtGA0L7QvdC1INC60LvQuNC10L3RgtCwLiDQodC60L7RgNC10LUsINCS0Ysg0LTQtdC70LDQtdGC0LUg0Y3RgtC+INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAsINC40YHQv9C+0LvRjNC30YPRjyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3JlZGlyZWN0c1wiXG4gICAgICB9fT57YNC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjQtWB9PC9hPntgLiDQmCwg0LrQvtC90LXRh9C90L4g0LbQtSwg0L3QuNGH0YLQviDQvdC1INC80LXRiNCw0LXRgiDQktCw0Lwg0L/QtdGA0LXQvdCw0L/RgNCw0LLQuNGC0Ywg0L7QsdGA0LDRgtC90L4g0L3QsCDRgdGC0YDQsNC90LjRhtGDLCDQvdCwINC60L7RgtC+0YDQvtC5INCS0Ysg0L3QsNGF0L7QtNC40YLQtdGB0YwuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgVXNlcnNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gaW5kZXgoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ1VzZXJzL0luZGV4JywgW1xuICAgICAgICAgICAgICAgICAgJ3VzZXJzJyA9PiBVc2VyOjphbGwoKSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cXG5cbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzdG9yZSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVXNlcjo6Y3JlYXRlKFxuICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0Ojp2YWxpZGF0ZShbXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmlyc3RfbmFtZScgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYXN0X25hbWUnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZW1haWwnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJywgJ2VtYWlsJ10sXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgKTtcXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVkaXJlY3Q6OnJvdXRlKCd1c2VycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIFVzZXJzQ29udHJvbGxlciA8IEFwcGxpY2F0aW9uQ29udHJvbGxlclxuICAgICAgICAgIGRlZiBpbmRleFxuICAgICAgICAgICAgcmVuZGVyIGluZXJ0aWE6ICdVc2Vycy9JbmRleCcsIHByb3BzOiB7IHVzZXJzOiBVc2VyLmFsbCB9XG4gICAgICAgICAgZW5kXFxuXG4gICAgICAgICAgZGVmIGNyZWF0ZVxuICAgICAgICAgICAgVXNlci5jcmVhdGUgcGFyYW1zLnJlcXVpcmUoOnVzZXIpLnBlcm1pdCg6Zmlyc3RfbmFtZSwgOmxhc3RfbmFtZSwgOmVtYWlsKVxcblxuICAgICAgICAgICAgcmVkaXJlY3RfdG8gdXNlcnNfcGF0aFxuICAgICAgICAgIGVuZFxuICAgICAgICBlbmRcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JfQsNCz0YDRg9C30LrQsCDRhNCw0LnQu9C+0LJgfTwvaDI+XG4gICAgPHA+e2DQo9C70L7QstC60LAg0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0YTQsNC50LvQvtCyINGBINC/0L7QvNC+0YnRjNGOIEluZXJ0aWEg0LfQsNC60LvRjtGH0LDQtdGC0YHRjyDQsiDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQuCDQvtCx0YrQtdC60YLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BGb3JtRGF0YWB9PC9pbmxpbmVDb2RlPntgLCDRgtCw0Log0LrQsNC6INGN0YLQviDRgtC+LCDRh9GC0L4g0YLRgNC10LHRg9C10YLRgdGPINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC30LDQv9GA0L7RgdCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG11bHRpcGFydC9mb3JtLWRhdGFgfTwvaW5saW5lQ29kZT57YCDRh9C10YDQtdC3IFhIUi4g0JLQvtGCINC/0YDQvtGB0YLQvtC5INC/0YDQuNC80LXRgCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BGb3JtRGF0YWB9PC9pbmxpbmVDb2RlPntgIGMgSW5lcnRpYS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuZGF0YS5hcHBlbmQoJ25hbWUnLCBuYW1lIHx8ICcnKVxuZGF0YS5hcHBlbmQoJ2VtYWlsJywgZW1haWwgfHwgJycpXG5kYXRhLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZCB8fCAnJylcbmRhdGEuYXBwZW5kKCdpc19hZG1pbicsIGlzX2FkbWluID8gJzEnIDogJzAnKVxuZGF0YS5hcHBlbmQoJ3Bob3RvJywgcGhvdG8gfHwgJycpXG5cbkluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0J7QtNC90LDQutC+LCDQvdCw0YfQuNC90LDRjyDRgSDQstC10YDRgdC40LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgMC44LjBgfTwvaW5saW5lQ29kZT57YCwgSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQvtC/0YDQtdC00LXQu9GP0LXRgiwg0LLQutC70Y7Rh9Cw0LXRgiDQu9C4INC/0L7RgdC10YnQtdC90LjQtSDQutCw0LrQuNC1LdC70LjQsdC+INGE0LDQudC70YsgKNC00LDQttC1INCy0LvQvtC20LXQvdC90YvQtSDRhNCw0LnQu9GLKSwg0LAg0LfQsNGC0LXQvCDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L/RgNC10L7QsdGA0LDQt9GD0LXRgiDQtNCw0L3QvdGL0LUg0LIg0L7QsdGK0LXQutGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEZvcm1EYXRhYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHA+e2DQktGLINC80L7QttC10YLQtSDRg9C30L3QsNGC0Ywg0LHQvtC70YzRiNC1INC+0LEg0LjQvdGC0LXRgNGE0LXQudGB0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRm9ybURhdGFgfTwvaW5saW5lQ29kZT57YCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Zvcm1EYXRhXCJcbiAgICAgIH19Pntg0LfQtNC10YHRjGB9PC9hPntgLmB9PC9wPlxuICAgIDxoMj57YNCf0L7QvNC+0YnQvdC40Log0YTQvtGA0LzRi2B9PC9oMj5cbiAgICA8cD57YNCf0L7RgdC60L7Qu9GM0LrRgyDRgNCw0LHQvtGC0LAg0YEg0YTQvtGA0LzQsNC80Lgg0L3QsNGB0YLQvtC70YzQutC+INGA0LDRgdC/0YDQvtGB0YLRgNCw0L3QtdC90LAsIEluZXJ0aWEg0L/QvtGB0YLQsNCy0LvRj9C10YLRgdGPINGBINC/0L7QvNC+0YnQvdC40LrQvtC8INGE0L7RgNC80YssINC60L7RgtC+0YDRi9C5INC/0L7QvNC+0LPQsNC10YIg0YHQvtC60YDQsNGC0LjRgtGMINC60L7Qu9C40YfQtdGB0YLQstC+INGI0LDQsdC70L7QvdC+0LIsINC90LXQvtCx0YXQvtC00LjQvNGL0YUg0LTQu9GPINGC0LjQv9C40YfQvdGL0YUg0YTQvtGA0LwuINCS0L7RgiDQutCw0Log0LjQvCDQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y86YH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cImZvcm0ucG9zdCgnL2xvZ2luJylcIj5cbiAgICAgICAgICAgIDwhLS0gZW1haWwgLS0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZm9ybS5lcnJvcnMuZW1haWxcIj57eyBmb3JtLmVycm9ycy5lbWFpbCB9fTwvZGl2PlxuICAgICAgICAgICAgPCEtLSBwYXNzd29yZCAtLT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZm9ybS5lcnJvcnMucGFzc3dvcmRcIj57eyBmb3JtLmVycm9ycy5wYXNzd29yZCB9fTwvZGl2PlxuICAgICAgICAgICAgPCEtLSDQl9Cw0L/QvtC80L3QuNGC0LUg0LzQtdC90Y8gLS0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvcm0ucmVtZW1iZXJcIj4g0JfQsNC/0L7QvNC90LjRgtC1INC80LXQvdGPXG4gICAgICAgICAgICA8IS0tIHN1Ym1pdCAtLT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIDpkaXNhYmxlZD1cImZvcm0ucHJvY2Vzc2luZ1wiPtCS0L7QudGC0Lg8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvdGVtcGxhdGU+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDNcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS12dWUzJ1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgc2V0dXAgKCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IHVzZUZvcm0oe1xuICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICAgIHJlbWVtYmVyOiBmYWxzZSxcbiAgICAgICAgICAgIH0pXFxuXG4gICAgICAgICAgICByZXR1cm4geyBmb3JtIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XFxuXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDJcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBmb3JtOiB0aGlzLiRpbmVydGlhLmZvcm0oe1xuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlbWVtYmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAjIHRvZG9cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgICMgdG9kb1xuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YNCV0YHQu9C4INCS0LDQvCDQvdGD0LbQvdC+INC40LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1INGE0L7RgNC80Ysg0L/QtdGA0LXQtCDQuNGFINC+0YLQv9GA0LDQstC60L7QuSDQvdCwINGB0LXRgNCy0LXRgCwg0JLRiyDQvNC+0LbQtdGC0LUg0YHQtNC10LvQsNGC0Ywg0Y3RgtC+INGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cmFuc2Zvcm0oKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2B0aGlzLmZvcm1cbiAgLnRyYW5zZm9ybSgoZGF0YSkgPT4gKHtcbiAgICAuLi5kYXRhLFxuICAgIHJlbWVtYmVyOiBkYXRhLnJlbWVtYmVyID8gJ29uJyA6ICcnLFxuICB9KSlcbiAgLnBvc3QoJy9sb2dpbicpXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCS0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgdCy0L7QudGB0YLQstC+IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZvcm0ucHJvY2Vzc2luZ2B9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINC+0YLRgdC70LXQttC40LLQsNGC0YwsINC+0YLQv9GA0LDQstC70Y/QtdGC0YHRjyDQu9C4INGE0L7RgNC80LAg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3Rgi4g0K3RgtC+INC80L7QttC10YIg0LHRi9GC0Ywg0L/QvtC70LXQt9C90L4g0LTQu9GPINC/0YDQtdC00L7RgtCy0YDQsNGJ0LXQvdC40Y8g0LTQstC+0LnQvdC+0Lkg0L7RgtC/0YDQsNCy0LrQuCDRhNC+0YDQvNGLLCDQvtGC0LrQu9GO0YfQuNCyINC60L3QvtC/0LrRgyDQvtGC0L/RgNCw0LLQutC4LmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanN4XCJcbiAgICAgIH19PntgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgOmRpc2FibGVkPVwiZm9ybS5wcm9jZXNzaW5nXCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCSINGB0LvRg9GH0LDQtSwg0LXRgdC70Lgg0JLRiyDQt9Cw0LPRgNGD0LbQsNC10YLQtSDRhNCw0LnQu9GLLCDRgtC10LrRg9GJ0LXQtSDRgdC+0LHRi9GC0LjQtSDQstGL0L/QvtC70L3QtdC90LjRjyDQtNC+0YHRgtGD0L/QvdC+INGH0LXRgNC10Lcg0YHQstC+0LnRgdGC0LLQviBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bmb3JtLnByb2dyZXNzYH08L2lubGluZUNvZGU+e2AuINCt0YLQviDQv9C+0LvQtdC30L3QviDQtNC70Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQv9GA0L7Qs9GA0LXRgdGB0LAg0LfQsNCz0YDRg9C30LrQuC4g0J3QsNC/0YDQuNC80LXRgDpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzeFwiXG4gICAgICB9fT57YDxwcm9ncmVzcyB2LWlmPVwiZm9ybS5wcm9ncmVzc1wiIDp2YWx1ZT1cImZvcm0ucHJvZ3Jlc3MucGVyY2VudGFnZVwiIG1heD1cIjEwMFwiPlxuICB7eyBmb3JtLnByb2dyZXNzLnBlcmNlbnRhZ2UgfX0lXG48L3Byb2dyZXNzPlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQkiDRgdC70YPRh9Cw0LUg0L7RiNC40LHQvtC6INGE0L7RgNC80Ysg0L7QvdC4INC00L7RgdGC0YPQv9C90Ysg0YfQtdGA0LXQtyDRgdCy0L7QudGB0YLQstC+IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZvcm0uZXJyb3JzYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc3hcIlxuICAgICAgfX0+e2A8ZGl2IHYtaWY9XCJmb3JtLmVycm9ycy5lbWFpbFwiPnt7IGZvcm0uZXJyb3JzLmVtYWlsIH19PC9kaXY+XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCn0YLQvtCx0Ysg0L/RgNC+0LLQtdGA0LjRgtGMLCDQvdC10YIg0LvQuCDQsiDRhNC+0YDQvNC1INC+0YjQuNCx0L7Quiwg0LjRgdC/0L7Qu9GM0LfRg9C50YLQtSDRgdCy0L7QudGB0YLQstC+IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZvcm0uaGFzRXJyb3JzYH08L2lubGluZUNvZGU+e2AuINCn0YLQvtCx0Ysg0YPQtNCw0LvQuNGC0Ywg0L7RiNC40LHQutC4INGE0L7RgNC80YssINC40YHQv9C+0LvRjNC30YPQudGC0LUg0LzQtdGC0L7QtCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bmb3JtLmNsZWFyRXJyb3JzKClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgLy8g0J7Rh9C40YHRgtC40YLRjCDQstGB0LUg0L7RiNC40LHQutC4XG5mb3JtLmNsZWFyRXJyb3JzKClcblxuLy8g0J7Rh9C40YHRgtC40YLRjCDQvtGI0LjQsdC60Lgg0LTQu9GPINC+0L/RgNC10LTQtdC70LXQvdC90YvRhSDQv9C+0LvQtdC5XG5mb3JtLmNsZWFyRXJyb3JzKCdmaWVsZCcsICdhbm90aGVyZmllbGQnKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQmtC+0LPQtNCwINGE0L7RgNC80LAg0LHRi9C70LAg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90LAsINGB0LLQvtC50YHRgtCy0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZm9ybS53YXNTdWNjZXNzZnVsYH08L2lubGluZUNvZGU+e2Ag0LHRg9C00LXRgiDQuNC80LXRgtGMINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgLiDQkiDQtNC+0L/QvtC70L3QtdC90LjQtSDQuiDRjdGC0L7QvNGDLCDRgdGD0YnQtdGB0YLQstGD0LXRgiDRgtCw0LrQttC1INGB0LLQvtC50YHRgtCy0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZm9ybS5yZWNlbnRseVN1Y2Nlc3NmdWxgfTwvaW5saW5lQ29kZT57YCwg0LrQvtGC0L7RgNC+0LzRgyDQsdGD0LTQtdGCINC/0YDQuNGB0LLQvtC10L3QviDQt9C90LDRh9C10L3QuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRydWVgfTwvaW5saW5lQ29kZT57YCDQsiDRgtC10YfQtdC90LjQtSDQtNCy0YPRhSDRgdC10LrRg9C90LQg0L/QvtGB0LvQtSDRg9GB0L/QtdGI0L3QvtC5INC+0YLQv9GA0LDQstC60Lgg0YTQvtGA0LzRiy4g0K3RgtC+INC/0L7Qu9C10LfQvdC+INC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPINCy0YDQtdC80LXQvdC90YvRhSDRgdC+0L7QsdGJ0LXQvdC40Lkg0L7QsSDRg9GB0L/QtdGF0LUuYH08L3A+XG4gICAgPHA+e2DQp9GC0L7QsdGLINCy0L7RgdGB0YLQsNC90L7QstC40YLRjCDQuNGB0YXQvtC00L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0YTQvtGA0LzRiywg0LjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQvNC10YLQvtC0IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZvcm0ucmVzZXQoKWB9PC9pbmxpbmVDb2RlPntgLiDQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINGN0YLQviDRgdCx0YDQvtGB0LjRgiDQt9C90LDRh9C10L3QuNGPINC+0LHRgNCw0YLQvdC+INC6INC90LDRh9Cw0LvRjNC90YvQvCDQt9C90LDRh9C10L3QuNGP0LwsINC60L7RgtC+0YDRi9C1INCx0YvQu9C4INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdGLLCDQutC+0LPQtNCwINCS0Ysg0LLRi9C30YvQstCw0LvQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLmZvcm0oKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2AvLyDQodCx0YDQvtGB0LjRgtGMINGE0L7RgNC80YNcbmZvcm0ucmVzZXQoKVxuXG4vLyDQodCx0YDQvtGB0LjRgtGMINC+0L/RgNC10LTQtdC70LXQvdC90YvQtSDQv9C+0LvRj1xuZm9ybS5yZXNldCgnZmllbGQnLCAnYW5vdGhlcmZpZWxkJylcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsGB9PC9oMj5cbiAgICA8cD57YNCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Log0L/RgNC+0LLQtdGA0LrQuCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwINCyIEluZXJ0aWEg0YDQsNCx0L7RgtCw0LXRgiDQvdC10LzQvdC+0LPQviDQuNC90LDRh9C1LCDRh9C10Lwg0LIg0LrQu9Cw0YHRgdC40YfQtdGB0LrQvtC5INGE0L7RgNC80LUsINGD0L/RgNCw0LLQu9GP0LXQvNC+0LkgYWpheCwg0LPQtNC1INCS0Ysg0L7RgtC70LDQstC70LjQstCw0LXRgtC1INC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4INC40Lcg0L7RgtCy0LXRgtC+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2Ag0Lgg0LLRgNGD0YfQvdGD0Y4g0L7QsdC90L7QstC70Y/QtdGC0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC+0YjQuNCx0LrQuCDRhNC+0YDQvNGLLiDQrdGC0L4g0L/QvtGC0L7QvNGDLCDRh9GC0L4gSW5lcnRpYSDQvdC40LrQvtCz0LTQsCDQvdC1INC/0L7Qu9GD0YfQsNC10YIg0L7RgtCy0LXRgtC+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2AuINCh0LrQvtGA0LXQtSwgSW5lcnRpYSDRgNCw0LHQvtGC0LDQtdGCINCx0L7Qu9GM0YjQtSDQutCw0Log0YHRgtCw0L3QtNCw0YDRgtC90LDRjyDQvtGC0L/RgNCw0LLQutCwINC/0L7Qu9C90L7RgdGC0YDQsNC90LjRh9C90L7QuSDRhNC+0YDQvNGLLiDQodC80L7RgtGA0LjRgtC1IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvdmFsaWRhdGlvblwiXG4gICAgICB9fT57YNGB0YLRgNCw0L3QuNGG0YMg0L/RgNC+0LLQtdGA0LrQuGB9PC9hPntgINC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuC5gfTwvcD5cbiAgICA8aDI+e2DQmtC70LDRgdGB0LjRh9C10YHQutCw0Y8g0L7RgtC/0YDQsNCy0LrQsCBYSFJgfTwvaDI+XG4gICAgPHA+e2DQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSBJbmVydGlhINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INGE0L7RgNC8INGF0L7RgNC+0YjQviDRgNCw0LHQvtGC0LDQtdGCINCyINC/0L7QtNCw0LLQu9GP0Y7RidC10Lwg0LHQvtC70YzRiNC40L3RgdGC0LLQtSDRgdC40YLRg9Cw0YbQuNC5LiDQntC00L3QsNC60L4sINC10YHQu9C4INCS0LDQvCDQvdGD0LbQtdC9INCx0L7Qu9C10LUg0YLQvtGH0L3Ri9C5INC60L7QvdGC0YDQvtC70Ywg0L3QsNC0INC+0YLQv9GA0LDQstC60L7QuSDRhNC+0YDQvNGLLCDQvdC40YfRgtC+INC90LUg0LzQtdGI0LDQtdGCINCS0LDQvCDRgdC00LXQu9Cw0YLRjCDQutC70LDRgdGB0LjRh9C10YHQutC40Lkg0LfQsNC/0YDQvtGBIFhIUi4g0J7RgtC70LjRh9C90LDRjyDQsdC40LHQu9C40L7RgtC10LrQsCDQtNC70Y8g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LfQtNC10YHRjCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zXCJcbiAgICAgIH19PntgYXhpb3NgfTwvYT57YCwg0LrQvtGC0L7RgNGD0Y4gSW5lcnRpYSDQuNGB0L/QvtC70YzQt9GD0LXRgiDQv9C+0LQg0LrQsNC/0L7RgtC+0LwuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9