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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <template>\n          <form @submit.prevent=\"form.post('/login')\">\n            <!-- email -->\n            <input type=\"text\" v-model=\"form.email\">\n            <div v-if=\"form.errors.email\">{{ form.errors.email }}</div>\n            <!-- password -->\n            <input type=\"password\" v-model=\"form.password\">\n            <div v-if=\"form.errors.password\">{{ form.errors.password }}</div>\n            <!-- remember me -->\n            <input type=\"checkbox\" v-model=\"form.remember\"> Remember Me\n            <!-- submit -->\n            <button type=\"submit\" :disabled=\"form.processing\">Login</button>\n          </form>\n        </template>\n\n        <script>\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\n\n        import { useForm } from '@inertiajs/inertia-vue3'\n\n        export default {\n          setup () {\n            const form = useForm({\n              email: null,\n              password: null,\n              remember: false,\n            })\n\n            return { form }\n          },\n        }\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\n\n        export default {\n          data() {\n            return {\n              form: this.$inertia.form({\n                email: null,\n                password: null,\n                remember: false,\n              }),\n            }\n          },\n        }\n        </script>\n      "], ["\n        <template>\n          <form @submit.prevent=\"form.post('/login')\">\n            <!-- email -->\n            <input type=\"text\" v-model=\"form.email\">\n            <div v-if=\"form.errors.email\">{{ form.errors.email }}</div>\n            <!-- password -->\n            <input type=\"password\" v-model=\"form.password\">\n            <div v-if=\"form.errors.password\">{{ form.errors.password }}</div>\n            <!-- remember me -->\n            <input type=\"checkbox\" v-model=\"form.remember\"> Remember Me\n            <!-- submit -->\n            <button type=\"submit\" :disabled=\"form.processing\">Login</button>\n          </form>\n        </template>\\n\n        <script>\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\\n\n        import { useForm } from '@inertiajs/inertia-vue3'\\n\n        export default {\n          setup () {\n            const form = useForm({\n              email: null,\n              password: null,\n              remember: false,\n            })\\n\n            return { form }\n          },\n        }\\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\\n\n        export default {\n          data() {\n            return {\n              form: this.$inertia.form({\n                email: null,\n                password: null,\n                remember: false,\n              }),\n            }\n          },\n        }\n        </script>\n      "]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <script>\n          import { Inertia } from '@inertiajs/inertia'\n\n          let values = {\n            first_name: null,\n            last_name: null,\n            email: null,\n          }\n\n          function handleSubmit() {\n            Inertia.post('/users', values)\n          }\n        </script>\n\n        <form on:submit|preventDefault={handleSubmit}>\n          <label for=\"first_name\">\u0418\u043C\u044F:</label>\n          <input id=\"first_name\" bind:value={values.first_name}>\n\n          <label for=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n          <input id=\"last_name\" bind:value={values.last_name}>\n\n          <label for=\"email\">Email:</label>\n          <input id=\"email\" bind:value={values.email}>\n\n          <button type=\"submit\">Submit</button>\n        </form>\n      "], ["\n        <script>\n          import { Inertia } from '@inertiajs/inertia'\\n\n          let values = {\n            first_name: null,\n            last_name: null,\n            email: null,\n          }\\n\n          function handleSubmit() {\n            Inertia.post('/users', values)\n          }\n        </script>\\n\n        <form on:submit|preventDefault={handleSubmit}>\n          <label for=\"first_name\">\u0418\u043C\u044F:</label>\n          <input id=\"first_name\" bind:value={values.first_name}>\\n\n          <label for=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n          <input id=\"last_name\" bind:value={values.last_name}>\\n\n          <label for=\"email\">Email:</label>\n          <input id=\"email\" bind:value={values.email}>\\n\n          <button type=\"submit\">Submit</button>\n        </form>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n        import React, { useState } from 'react'\n\n        export default function Edit() {\n          const [values, setValues] = useState({\n            first_name: \"\",\n            last_name: \"\",\n            email: \"\",\n          })\n\n          function handleChange(e) {\n            const key = e.target.id;\n            const value = e.target.value\n            setValues(values => ({\n                ...values,\n                [key]: value,\n            }))\n          }\n\n          function handleSubmit(e) {\n            e.preventDefault()\n            Inertia.post('/users', values)\n          }\n\n          return (\n            <form onSubmit={handleSubmit}>\n              <label htmlFor=\"first_name\">\u0418\u043C\u044F:</label>\n              <input id=\"first_name\" value={values.first_name} onChange={handleChange} />\n              <label htmlFor=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n              <input id=\"last_name\" value={values.last_name} onChange={handleChange} />\n              <label htmlFor=\"email\">Email:</label>\n              <input id=\"email\" value={values.email} onChange={handleChange} />\n              <button type=\"submit\">Submit</button>\n            </form>\n          )\n        }\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\n        import React, { useState } from 'react'\\n\n        export default function Edit() {\n          const [values, setValues] = useState({\n            first_name: \"\",\n            last_name: \"\",\n            email: \"\",\n          })\\n\n          function handleChange(e) {\n            const key = e.target.id;\n            const value = e.target.value\n            setValues(values => ({\n                ...values,\n                [key]: value,\n            }))\n          }\\n\n          function handleSubmit(e) {\n            e.preventDefault()\n            Inertia.post('/users', values)\n          }\\n\n          return (\n            <form onSubmit={handleSubmit}>\n              <label htmlFor=\"first_name\">\u0418\u043C\u044F:</label>\n              <input id=\"first_name\" value={values.first_name} onChange={handleChange} />\n              <label htmlFor=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n              <input id=\"last_name\" value={values.last_name} onChange={handleChange} />\n              <label htmlFor=\"email\">Email:</label>\n              <input id=\"email\" value={values.email} onChange={handleChange} />\n              <button type=\"submit\">Submit</button>\n            </form>\n          )\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <template>\n          <form @submit.prevent=\"submit\">\n            <label for=\"first_name\">\u0418\u043C\u044F:</label>\n            <input id=\"first_name\" v-model=\"form.first_name\" />\n            <label for=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n            <input id=\"last_name\" v-model=\"form.last_name\" />\n            <label for=\"email\">Email:</label>\n            <input id=\"email\" v-model=\"form.email\" />\n            <button type=\"submit\">Submit</button>\n          </form>\n        </template>\n\n        <script>\n        export default {\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                email: null,\n              },\n            }\n          },\n          methods: {\n            submit() {\n              this.$inertia.post('/users', this.form)\n            },\n          },\n        }\n        </script>\n      "], ["\n        <template>\n          <form @submit.prevent=\"submit\">\n            <label for=\"first_name\">\u0418\u043C\u044F:</label>\n            <input id=\"first_name\" v-model=\"form.first_name\" />\n            <label for=\"last_name\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</label>\n            <input id=\"last_name\" v-model=\"form.last_name\" />\n            <label for=\"email\">Email:</label>\n            <input id=\"email\" v-model=\"form.email\" />\n            <button type=\"submit\">Submit</button>\n          </form>\n        </template>\\n\n        <script>\n        export default {\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                email: null,\n              },\n            }\n          },\n          methods: {\n            submit() {\n              this.$inertia.post('/users', this.form)\n            },\n          },\n        }\n        </script>\n      "]);

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
  }), "<button type=\"submit\" :disabled=\"form.processing\">Submit</button>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybXMubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsT0FEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLGdCQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLDhCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEksRUFZSjtBQUNERCxPQUFHLEVBQUUsNEJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FaSTtBQUZXLENBQWI7QUFvQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7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QUFBQTtBQUFBO0FBQUE7QUFBQSx1MEJBQWlMO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBakwsMGRBQXNVO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdFUsK2JBQW9kO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDdGUsWUFBUTtBQUQ4ZCxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBHQUFwZCxrT0F6UkssRUE0Ukw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxSUE1UkssRUE2Ukw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxteENBQXNRO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDeFIsWUFBUTtBQURnUixHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXRRLHFMQTdSSyxDQUFQO0FBaVNEO0tBclN1QkwsVTtBQXVTeEI7QUFDQUEsVUFBVSxDQUFDTSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLjBhZmQ2MTY2OTMwMTVkNTU5ZWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KTQvtGA0LzRiycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPQvtGC0L/RgNCw0LLQutCwLdGE0L7RgNC8JyxcbiAgICBuYW1lOiAn0J7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvCdcbiAgfSwge1xuICAgIHVybDogJyPQt9Cw0LPRgNGD0LfQutCwLdGE0LDQudC70L7QsicsXG4gICAgbmFtZTogJ9CX0LDQs9GA0YPQt9C60LAg0YTQsNC50LvQvtCyJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C/0L7QvNC+0YnQvdC40Lot0YTQvtGA0LzRiycsXG4gICAgbmFtZTogJ9Cf0L7QvNC+0YnQvdC40Log0YTQvtGA0LzRiydcbiAgfSwge1xuICAgIHVybDogJyPQv9GA0L7QstC10YDQutCwLdC90LAt0YHRgtC+0YDQvtC90LUt0YHQtdGA0LLQtdGA0LAnLFxuICAgIG5hbWU6ICfQn9GA0L7QstC10YDQutCwINC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LrQu9Cw0YHRgdC40YfQtdGB0LrQsNGPLdC+0YLQv9GA0LDQstC60LAteGhyJyxcbiAgICBuYW1lOiAn0JrQu9Cw0YHRgdC40YfQtdGB0LrQsNGPINC+0YLQv9GA0LDQstC60LAgWEhSJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KTQvtGA0LzRi2B9PC9oMT5cbiAgICA8aDI+e2DQntGC0L/RgNCw0LLQutCwINGE0L7RgNC8YH08L2gyPlxuICAgIDxwPntg0KXQvtGC0Y8g0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYSDQvNC+0LbQvdC+INC+0YLQv9GA0LDQstC70Y/RgtGMINC60LvQsNGB0YHQuNGH0LXRgdC60LjQtSDRhNC+0YDQvNGLLCDRjdGC0L4g0L3QtSDRgNC10LrQvtC80LXQvdC00YPQtdGC0YHRjywg0YLQsNC6INC60LDQuiDQvtC90Lgg0LLRi9C30YvQstCw0Y7RgiDQv9C+0LvQvdGD0Y4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutGDINGB0YLRgNCw0L3QuNGG0YsuINCS0LzQtdGB0YLQviDRjdGC0L7Qs9C+INC70YPRh9GI0LUg0L/QtdGA0LXRhdCy0LDRgtC40YLRjCDQvtGC0L/RgNCw0LLQu9C10L3QvdGL0LUg0YTQvtGA0LzRiywg0LAg0LfQsNGC0LXQvCDRgdC00LXQu9Cw0YLRjCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3JlcXVlc3RzXCJcbiAgICAgIH19Pntg0LfQsNC/0YDQvtGBYH08L2E+e2Ag0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYS5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3RfbmFtZVwiPtCY0LzRjzo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIHYtbW9kZWw9XCJmb3JtLmZpcnN0X25hbWVcIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiPtCk0LDQvNC40LvQuNGPOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdi1tb2RlbD1cImZvcm0uZW1haWxcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgdGhpcy4kaW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB0aGlzLmZvcm0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcbiAgICAgICAgaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoKSB7XG4gICAgICAgICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IFwiXCIsXG4gICAgICAgICAgICBsYXN0X25hbWU6IFwiXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICB9KVxcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIHNldFZhbHVlcyh2YWx1ZXMgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgICAgW2tleV06IHZhbHVlLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIEluZXJ0aWEucG9zdCgnL3VzZXJzJywgdmFsdWVzKVxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RfbmFtZVwiPtCY0LzRjzo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCIgdmFsdWU9e3ZhbHVlcy5maXJzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RfbmFtZVwiPtCk0LDQvNC40LvQuNGPOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIHZhbHVlPXt2YWx1ZXMubGFzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB2YWx1ZT17dmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgICBsZXQgdmFsdWVzID0ge1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgICAgICBJbmVydGlhLnBvc3QoJy91c2VycycsIHZhbHVlcylcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIj7QmNC80Y86PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCIgYmluZDp2YWx1ZT17dmFsdWVzLmZpcnN0X25hbWV9PlxcblxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0X25hbWVcIj7QpNCw0LzQuNC70LjRjzo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5sYXN0X25hbWV9PlxcblxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBiaW5kOnZhbHVlPXt2YWx1ZXMuZW1haWx9PlxcblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0JIg0L7RgtC70LjRh9C40LUg0L7RgiDQutC70LDRgdGB0LjRh9C10YHQutC+0Lkg0YTQvtGA0LzRiyDQvtGC0L/RgNCw0LLQutC4IGFqYXgsINGBINC/0L7QvNC+0YnRjNGOIEluZXJ0aWEg0JLRiyDQvdC1INC+0LHRgNCw0LHQsNGC0YvQstCw0LXRgtC1INC/0L7QstC10LTQtdC90LjQtSDQvtGC0L/RgNCw0LLQutC4INGB0L7QvtCx0YnQtdC90LjRjyDQvdCwINGB0YLQvtGA0L7QvdC1INC60LvQuNC10L3RgtCwLiDQodC60L7RgNC10LUsINCS0Ysg0LTQtdC70LDQtdGC0LUg0Y3RgtC+INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAsINC40YHQv9C+0LvRjNC30YPRjyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3JlZGlyZWN0c1wiXG4gICAgICB9fT57YNC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjQtWB9PC9hPntgLiDQmCwg0LrQvtC90LXRh9C90L4g0LbQtSwg0L3QuNGH0YLQviDQvdC1INC80LXRiNCw0LXRgiDQktCw0Lwg0L/QtdGA0LXQvdCw0L/RgNCw0LLQuNGC0Ywg0L7QsdGA0LDRgtC90L4g0L3QsCDRgdGC0YDQsNC90LjRhtGDLCDQvdCwINC60L7RgtC+0YDQvtC5INCS0Ysg0L3QsNGF0L7QtNC40YLQtdGB0YwuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgVXNlcnNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gaW5kZXgoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ1VzZXJzL0luZGV4JywgW1xuICAgICAgICAgICAgICAgICAgJ3VzZXJzJyA9PiBVc2VyOjphbGwoKSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cXG5cbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzdG9yZSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVXNlcjo6Y3JlYXRlKFxuICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0Ojp2YWxpZGF0ZShbXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmlyc3RfbmFtZScgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYXN0X25hbWUnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZW1haWwnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJywgJ2VtYWlsJ10sXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgKTtcXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVkaXJlY3Q6OnJvdXRlKCd1c2VycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIFVzZXJzQ29udHJvbGxlciA8IEFwcGxpY2F0aW9uQ29udHJvbGxlclxuICAgICAgICAgIGRlZiBpbmRleFxuICAgICAgICAgICAgcmVuZGVyIGluZXJ0aWE6ICdVc2Vycy9JbmRleCcsIHByb3BzOiB7IHVzZXJzOiBVc2VyLmFsbCB9XG4gICAgICAgICAgZW5kXFxuXG4gICAgICAgICAgZGVmIGNyZWF0ZVxuICAgICAgICAgICAgVXNlci5jcmVhdGUgcGFyYW1zLnJlcXVpcmUoOnVzZXIpLnBlcm1pdCg6Zmlyc3RfbmFtZSwgOmxhc3RfbmFtZSwgOmVtYWlsKVxcblxuICAgICAgICAgICAgcmVkaXJlY3RfdG8gdXNlcnNfcGF0aFxuICAgICAgICAgIGVuZFxuICAgICAgICBlbmRcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JfQsNCz0YDRg9C30LrQsCDRhNCw0LnQu9C+0LJgfTwvaDI+XG4gICAgPHA+e2DQo9C70L7QstC60LAg0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0YTQsNC50LvQvtCyINGBINC/0L7QvNC+0YnRjNGOIEluZXJ0aWEg0LfQsNC60LvRjtGH0LDQtdGC0YHRjyDQsiDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQuCDQvtCx0YrQtdC60YLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BGb3JtRGF0YWB9PC9pbmxpbmVDb2RlPntgLCDRgtCw0Log0LrQsNC6INGN0YLQviDRgtC+LCDRh9GC0L4g0YLRgNC10LHRg9C10YLRgdGPINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC30LDQv9GA0L7RgdCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG11bHRpcGFydC9mb3JtLWRhdGFgfTwvaW5saW5lQ29kZT57YCDRh9C10YDQtdC3IFhIUi4g0JLQvtGCINC/0YDQvtGB0YLQvtC5INC/0YDQuNC80LXRgCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BGb3JtRGF0YWB9PC9pbmxpbmVDb2RlPntgIGMgSW5lcnRpYS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuZGF0YS5hcHBlbmQoJ25hbWUnLCBuYW1lIHx8ICcnKVxuZGF0YS5hcHBlbmQoJ2VtYWlsJywgZW1haWwgfHwgJycpXG5kYXRhLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZCB8fCAnJylcbmRhdGEuYXBwZW5kKCdpc19hZG1pbicsIGlzX2FkbWluID8gJzEnIDogJzAnKVxuZGF0YS5hcHBlbmQoJ3Bob3RvJywgcGhvdG8gfHwgJycpXG5cbkluZXJ0aWEucG9zdCgnL3VzZXJzJywgZGF0YSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0J7QtNC90LDQutC+LCDQvdCw0YfQuNC90LDRjyDRgSDQstC10YDRgdC40LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgMC44LjBgfTwvaW5saW5lQ29kZT57YCwgSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQvtC/0YDQtdC00LXQu9GP0LXRgiwg0LLQutC70Y7Rh9Cw0LXRgiDQu9C4INC/0L7RgdC10YnQtdC90LjQtSDQutCw0LrQuNC1LdC70LjQsdC+INGE0LDQudC70YsgKNC00LDQttC1INCy0LvQvtC20LXQvdC90YvQtSDRhNCw0LnQu9GLKSwg0LAg0LfQsNGC0LXQvCDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L/RgNC10L7QsdGA0LDQt9GD0LXRgiDQtNCw0L3QvdGL0LUg0LIg0L7QsdGK0LXQutGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEZvcm1EYXRhYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHA+e2DQktGLINC80L7QttC10YLQtSDRg9C30L3QsNGC0Ywg0LHQvtC70YzRiNC1INC+0LEg0LjQvdGC0LXRgNGE0LXQudGB0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRm9ybURhdGFgfTwvaW5saW5lQ29kZT57YCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Zvcm1EYXRhXCJcbiAgICAgIH19Pntg0LfQtNC10YHRjGB9PC9hPntgLmB9PC9wPlxuICAgIDxoMj57YNCf0L7QvNC+0YnQvdC40Log0YTQvtGA0LzRi2B9PC9oMj5cbiAgICA8cD57YNCf0L7RgdC60L7Qu9GM0LrRgyDRgNCw0LHQvtGC0LAg0YEg0YTQvtGA0LzQsNC80Lgg0L3QsNGB0YLQvtC70YzQutC+INGA0LDRgdC/0YDQvtGB0YLRgNCw0L3QtdC90LAsIEluZXJ0aWEg0L/QvtGB0YLQsNCy0LvRj9C10YLRgdGPINGBINC/0L7QvNC+0YnQvdC40LrQvtC8INGE0L7RgNC80YssINC60L7RgtC+0YDRi9C5INC/0L7QvNC+0LPQsNC10YIg0YHQvtC60YDQsNGC0LjRgtGMINC60L7Qu9C40YfQtdGB0YLQstC+INGI0LDQsdC70L7QvdC+0LIsINC90LXQvtCx0YXQvtC00LjQvNGL0YUg0LTQu9GPINGC0LjQv9C40YfQvdGL0YUg0YTQvtGA0LwuINCS0L7RgiDQutCw0Log0LjQvCDQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y86YH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cImZvcm0ucG9zdCgnL2xvZ2luJylcIj5cbiAgICAgICAgICAgIDwhLS0gZW1haWwgLS0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZm9ybS5lcnJvcnMuZW1haWxcIj57eyBmb3JtLmVycm9ycy5lbWFpbCB9fTwvZGl2PlxuICAgICAgICAgICAgPCEtLSBwYXNzd29yZCAtLT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZm9ybS5lcnJvcnMucGFzc3dvcmRcIj57eyBmb3JtLmVycm9ycy5wYXNzd29yZCB9fTwvZGl2PlxuICAgICAgICAgICAgPCEtLSByZW1lbWJlciBtZSAtLT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9ybS5yZW1lbWJlclwiPiBSZW1lbWJlciBNZVxuICAgICAgICAgICAgPCEtLSBzdWJtaXQgLS0+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiA6ZGlzYWJsZWQ9XCJmb3JtLnByb2Nlc3NpbmdcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBWdWUgM1xuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBpbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZTMnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgICBzZXR1cCAoKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgICAgICAgcmVtZW1iZXI6IGZhbHNlLFxuICAgICAgICAgICAgfSlcXG5cbiAgICAgICAgICAgIHJldHVybiB7IGZvcm0gfVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cXG5cbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBWdWUgMlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGZvcm06IHRoaXMuJGluZXJ0aWEuZm9ybSh7XG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVtZW1iZXI6IGZhbHNlLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgICMgdG9kb1xuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgIyB0b2RvXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0JXRgdC70Lgg0JLQsNC8INC90YPQttC90L4g0LjQt9C80LXQvdC40YLRjCDQtNCw0L3QvdGL0LUg0YTQvtGA0LzRiyDQv9C10YDQtdC0INC40YUg0L7RgtC/0YDQsNCy0LrQvtC5INC90LAg0YHQtdGA0LLQtdGALCDQktGLINC80L7QttC10YLQtSDRgdC00LXQu9Cw0YLRjCDRjdGC0L4g0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRyYW5zZm9ybSgpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YHRoaXMuZm9ybVxuICAudHJhbnNmb3JtKChkYXRhKSA9PiAoe1xuICAgIC4uLmRhdGEsXG4gICAgcmVtZW1iZXI6IGRhdGEucmVtZW1iZXIgPyAnb24nIDogJycsXG4gIH0pKVxuICAucG9zdCgnL2xvZ2luJylcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JLRiyDQvNC+0LbQtdGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGB0LLQvtC50YHRgtCy0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZm9ybS5wcm9jZXNzaW5nYH08L2lubGluZUNvZGU+e2AsINGH0YLQvtCx0Ysg0L7RgtGB0LvQtdC20LjQstCw0YLRjCwg0L7RgtC/0YDQsNCy0LvRj9C10YLRgdGPINC70Lgg0YTQvtGA0LzQsCDQsiDQtNCw0L3QvdGL0Lkg0LzQvtC80LXQvdGCLiDQrdGC0L4g0LzQvtC20LXRgiDQsdGL0YLRjCDQv9C+0LvQtdC30L3QviDQtNC70Y8g0L/RgNC10LTQvtGC0LLRgNCw0YnQtdC90LjRjyDQtNCy0L7QudC90L7QuSDQvtGC0L/RgNCw0LLQutC4INGE0L7RgNC80YssINC+0YLQutC70Y7Rh9C40LIg0LrQvdC+0L/QutGDINC+0YLQv9GA0LDQstC60LguYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc3hcIlxuICAgICAgfX0+e2A8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiA6ZGlzYWJsZWQ9XCJmb3JtLnByb2Nlc3NpbmdcIj5TdWJtaXQ8L2J1dHRvbj5cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0JIg0YHQu9GD0YfQsNC1LCDQtdGB0LvQuCDQktGLINC30LDQs9GA0YPQttCw0LXRgtC1INGE0LDQudC70YssINGC0LXQutGD0YnQtdC1INGB0L7QsdGL0YLQuNC1INCy0YvQv9C+0LvQvdC10L3QuNGPINC00L7RgdGC0YPQv9C90L4g0YfQtdGA0LXQtyDRgdCy0L7QudGB0YLQstC+IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZvcm0ucHJvZ3Jlc3NgfTwvaW5saW5lQ29kZT57YC4g0K3RgtC+INC/0L7Qu9C10LfQvdC+INC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC/0YDQvtCz0YDQtdGB0YHQsCDQt9Cw0LPRgNGD0LfQutC4LiDQndCw0L/RgNC40LzQtdGAOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanN4XCJcbiAgICAgIH19PntgPHByb2dyZXNzIHYtaWY9XCJmb3JtLnByb2dyZXNzXCIgOnZhbHVlPVwiZm9ybS5wcm9ncmVzcy5wZXJjZW50YWdlXCIgbWF4PVwiMTAwXCI+XG4gIHt7IGZvcm0ucHJvZ3Jlc3MucGVyY2VudGFnZSB9fSVcbjwvcHJvZ3Jlc3M+XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCSINGB0LvRg9GH0LDQtSDQvtGI0LjQsdC+0Log0YTQvtGA0LzRiyDQvtC90Lgg0LTQvtGB0YLRg9C/0L3RiyDRh9C10YDQtdC3INGB0LLQvtC50YHRgtCy0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZm9ybS5lcnJvcnNgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzeFwiXG4gICAgICB9fT57YDxkaXYgdi1pZj1cImZvcm0uZXJyb3JzLmVtYWlsXCI+e3sgZm9ybS5lcnJvcnMuZW1haWwgfX08L2Rpdj5cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0KfRgtC+0LHRiyDQv9GA0L7QstC10YDQuNGC0YwsINC90LXRgiDQu9C4INCyINGE0L7RgNC80LUg0L7RiNC40LHQvtC6LCDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INGB0LLQvtC50YHRgtCy0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZm9ybS5oYXNFcnJvcnNgfTwvaW5saW5lQ29kZT57YC4g0KfRgtC+0LHRiyDRg9C00LDQu9C40YLRjCDQvtGI0LjQsdC60Lgg0YTQvtGA0LzRiywg0LjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQvNC10YLQvtC0IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZvcm0uY2xlYXJFcnJvcnMoKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2AvLyDQntGH0LjRgdGC0LjRgtGMINCy0YHQtSDQvtGI0LjQsdC60LhcbmZvcm0uY2xlYXJFcnJvcnMoKVxuXG4vLyDQntGH0LjRgdGC0LjRgtGMINC+0YjQuNCx0LrQuCDQtNC70Y8g0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9GFINC/0L7Qu9C10LlcbmZvcm0uY2xlYXJFcnJvcnMoJ2ZpZWxkJywgJ2Fub3RoZXJmaWVsZCcpXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCa0L7Qs9C00LAg0YTQvtGA0LzQsCDQsdGL0LvQsCDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QsCwg0YHQstC+0LnRgdGC0LLQviBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bmb3JtLndhc1N1Y2Nlc3NmdWxgfTwvaW5saW5lQ29kZT57YCDQsdGD0LTQtdGCINC40LzQtdGC0Ywg0LfQvdCw0YfQtdC90LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuINCSINC00L7Qv9C+0LvQvdC10L3QuNC1INC6INGN0YLQvtC80YMsINGB0YPRidC10YHRgtCy0YPQtdGCINGC0LDQutC20LUg0YHQstC+0LnRgdGC0LLQviBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bmb3JtLnJlY2VudGx5U3VjY2Vzc2Z1bGB9PC9pbmxpbmVDb2RlPntgLCDQutC+0YLQvtGA0L7QvNGDINCx0YPQtNC10YIg0L/RgNC40YHQstC+0LXQvdC+INC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgINCyINGC0LXRh9C10L3QuNC1INC00LLRg9GFINGB0LXQutGD0L3QtCDQv9C+0YHQu9C1INGD0YHQv9C10YjQvdC+0Lkg0L7RgtC/0YDQsNCy0LrQuCDRhNC+0YDQvNGLLiDQrdGC0L4g0L/QvtC70LXQt9C90L4g0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LLRgNC10LzQtdC90L3Ri9GFINGB0L7QvtCx0YnQtdC90LjQuSDQvtCxINGD0YHQv9C10YXQtS5gfTwvcD5cbiAgICA8cD57YNCn0YLQvtCx0Ysg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINC40YHRhdC+0LTQvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDRhNC+0YDQvNGLLCDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INC80LXRgtC+0LQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZm9ybS5yZXNldCgpYH08L2lubGluZUNvZGU+e2AuINCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0Y3RgtC+INGB0LHRgNC+0YHQuNGCINC30L3QsNGH0LXQvdC40Y8g0L7QsdGA0LDRgtC90L4g0Log0L3QsNGH0LDQu9GM0L3Ri9C8INC30L3QsNGH0LXQvdC40Y/QvCwg0LrQvtGC0L7RgNGL0LUg0LHRi9C70Lgg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90YssINC60L7Qs9C00LAg0JLRiyDQstGL0LfRi9Cy0LDQu9C4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEluZXJ0aWEuZm9ybSgpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YC8vINCh0LHRgNC+0YHQuNGC0Ywg0YTQvtGA0LzRg1xuZm9ybS5yZXNldCgpXG5cbi8vINCh0LHRgNC+0YHQuNGC0Ywg0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C1INC/0L7Qu9GPXG5mb3JtLnJlc2V0KCdmaWVsZCcsICdhbm90aGVyZmllbGQnKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwYH08L2gyPlxuICAgIDxwPntg0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QuiDQv9GA0L7QstC10YDQutC4INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAg0LIgSW5lcnRpYSDRgNCw0LHQvtGC0LDQtdGCINC90LXQvNC90L7Qs9C+INC40L3QsNGH0LUsINGH0LXQvCDQsiDQutC70LDRgdGB0LjRh9C10YHQutC+0Lkg0YTQvtGA0LzQtSwg0YPQv9GA0LDQstC70Y/QtdC80L7QuSBhamF4LCDQs9C00LUg0JLRiyDQvtGC0LvQsNCy0LvQuNCy0LDQtdGC0LUg0L7RiNC40LHQutC4INC/0YDQvtCy0LXRgNC60Lgg0LjQtyDQvtGC0LLQtdGC0L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MjJgfTwvaW5saW5lQ29kZT57YCDQuCDQstGA0YPRh9C90YPRjiDQvtCx0L3QvtCy0LvRj9C10YLQtSDRgdC+0YHRgtC+0Y/QvdC40LUg0L7RiNC40LHQutC4INGE0L7RgNC80YsuINCt0YLQviDQv9C+0YLQvtC80YMsINGH0YLQviBJbmVydGlhINC90LjQutC+0LPQtNCwINC90LUg0L/QvtC70YPRh9Cw0LXRgiDQvtGC0LLQtdGC0L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MjJgfTwvaW5saW5lQ29kZT57YC4g0KHQutC+0YDQtdC1LCBJbmVydGlhINGA0LDQsdC+0YLQsNC10YIg0LHQvtC70YzRiNC1INC60LDQuiDRgdGC0LDQvdC00LDRgNGC0L3QsNGPINC+0YLQv9GA0LDQstC60LAg0L/QvtC70L3QvtGB0YLRgNCw0L3QuNGH0L3QvtC5INGE0L7RgNC80YsuINCh0LzQvtGC0YDQuNGC0LUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi92YWxpZGF0aW9uXCJcbiAgICAgIH19Pntg0YHRgtGA0LDQvdC40YbRgyDQv9GA0L7QstC10YDQutC4YH08L2E+e2Ag0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4LmB9PC9wPlxuICAgIDxoMj57YNCa0LvQsNGB0YHQuNGH0LXRgdC60LDRjyDQvtGC0L/RgNCw0LLQutCwIFhIUmB9PC9oMj5cbiAgICA8cD57YNCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1IEluZXJ0aWEg0LTQu9GPINC+0YLQv9GA0LDQstC60Lgg0YTQvtGA0Lwg0YXQvtGA0L7RiNC+INGA0LDQsdC+0YLQsNC10YIg0LIg0L/QvtC00LDQstC70Y/RjtGJ0LXQvCDQsdC+0LvRjNGI0LjQvdGB0YLQstC1INGB0LjRgtGD0LDRhtC40LkuINCe0LTQvdCw0LrQviwg0LXRgdC70Lgg0JLQsNC8INC90YPQttC10L0g0LHQvtC70LXQtSDRgtC+0YfQvdGL0Lkg0LrQvtC90YLRgNC+0LvRjCDQvdCw0LQg0L7RgtC/0YDQsNCy0LrQvtC5INGE0L7RgNC80YssINC90LjRh9GC0L4g0L3QtSDQvNC10YjQsNC10YIg0JLQsNC8INGB0LTQtdC70LDRgtGMINC60LvQsNGB0YHQuNGH0LXRgdC60LjQuSDQt9Cw0L/RgNC+0YEgWEhSLiDQntGC0LvQuNGH0L3QsNGPINCx0LjQsdC70LjQvtGC0LXQutCwINC00LvRjyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDQt9C00LXRgdGMIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3NcIlxuICAgICAgfX0+e2BheGlvc2B9PC9hPntgLCDQutC+0YLQvtGA0YPRjiBJbmVydGlhINC40YHQv9C+0LvRjNC30YPQtdGCINC/0L7QtCDQutCw0L/QvtGC0L7QvC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=