webpackHotUpdate_N_E("pages/partial-reloads",{

/***/ "./pages/partial-reloads.mdx":
/*!***********************************!*\
  !*** ./pages/partial-reloads.mdx ***!
  \***********************************/
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



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\partial-reloads.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        class UsersController < ApplicationController\n          def index\n            render inertia: 'Users/Index', props: {\n\n              # \u0412\u0421\u0415\u0413\u0414\u0410 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438\n              # \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n              # ALWAYS evaluated\n              users: User.as_json()\n\n              # \u0412\u0421\u0415\u0413\u0414\u0410 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438\n              # \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n              # ONLY evaluated when needed\n              users: -> { User.as_json() },\n\n              # NEVER included on first visit\n              # \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n              # ONLY evaluated when needed\n              users: InertiaRails.lazy(-> { User.as_json }),\n            }\n          end\n        end\n      "], ["\n        class UsersController < ApplicationController\n          def index\n            render inertia: 'Users/Index', props: {\\n\n              # \u0412\u0421\u0415\u0413\u0414\u0410 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438\n              # \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n              # ALWAYS evaluated\n              users: User.as_json()\\n\n              # \u0412\u0421\u0415\u0413\u0414\u0410 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438\n              # \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n              # ONLY evaluated when needed\n              users: -> { User.as_json() },\\n\n              # NEVER included on first visit\n              # \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n              # ONLY evaluated when needed\n              users: InertiaRails.lazy(-> { User.as_json }),\n            }\n          end\n        end\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        return Inertia::render('Users/Index', [\n\n            // \u0412\u0421\u0415\u0413\u0414\u0410 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438\n            // \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n            // ALWAYS evaluated\n            'users' => User::get(),\n\n            // \u0412\u0421\u0415\u0413\u0414\u0410 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438\n            // \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n            // ONLY evaluated when needed\n            'users' => fn () => User::get(),\n\n            // NEVER included on first visit\n            // \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n            // ONLY evaluated when needed\n            'users' => Inertia::lazy(fn () => User::get()),\n        ]);\n      "], ["\n        return Inertia::render('Users/Index', [\\n\n            // \u0412\u0421\u0415\u0413\u0414\u0410 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438\n            // \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n            // ALWAYS evaluated\n            'users' => User::get(),\\n\n            // \u0412\u0421\u0415\u0413\u0414\u0410 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438\n            // \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n            // ONLY evaluated when needed\n            'users' => fn () => User::get(),\\n\n            // NEVER included on first visit\n            // \u041D\u0415\u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u041D\u041E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435\n            // ONLY evaluated when needed\n            'users' => Inertia::lazy(fn () => User::get()),\n        ]);\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/users?active=true\" use:inertia=\"{{ only: ['users'] }}\">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435</a>\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/users?active=true\" use:inertia=\"{{ only: ['users'] }}\">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435</a>\\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435</InertiaLink>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435</InertiaLink>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <inertia-link href=\"/users?active=true\" :only=\"['users']\">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435</inertia-link>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Частичные перезагрузки',
  links: [{
    url: '#top',
    name: 'Вступление'
  }, {
    url: '#частичные-посещения',
    name: 'Частичные посещения'
  }, {
    url: '#отложенная-оценка-данных',
    name: 'Отложенная оценка данных'
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
      lineNumber: 33,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u043E\u0434\u043D\u043E\u0439 \u0438 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0432\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0424\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0432\u044B\u0431\u043E\u0440 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0439 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0435\u0441\u043B\u0438 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E, \u0447\u0442\u043E\u0431\u044B \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u0442\u0430\u043B\u0438 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u043C\u0438. \u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 Inertia \u0441 \u0444\u0443\u043D\u043A\u0446\u0438\u0435\u0439 \xAB\u0447\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A\xBB."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u043E \u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u041F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0434\u0430\u043D\u043D\u044B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 216
    }
  }, "users"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 272
    }
  }, "companies"), " \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041E\u0434\u043D\u0430\u043A\u043E \u043F\u0440\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0445 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0434\u043B\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439) \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u0430\u043D\u043D\u044B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 499
    }
  }, "users"), ", \u0430 \u043D\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 566
    }
  }, "companies"), ". \u0417\u0430\u0442\u0435\u043C Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u044B\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0432 \u043F\u0430\u043C\u044F\u0442\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0439 \u0442\u043E\u0433\u043E \u0436\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 73
    }
  }, "only"), ", \u0447\u0442\u043E\u0431\u044B \u0443\u043A\u0430\u0437\u0430\u0442\u044C, \u043A\u0430\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u042D\u0442\u043E \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0438\u0432 \u043A\u043B\u044E\u0447\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u043B\u044E\u0447\u0430\u043C \u0441\u0432\u043E\u0439\u0441\u0442\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 43,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.visit(url, {\n  only: ['users'],\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0438 \u0442\u043E\u0433\u043E \u0436\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043F\u043E\u0447\u0442\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u043C\u0435\u0435\u0442 \u0441\u043C\u044B\u0441\u043B \u043F\u0440\u043E\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 163
    }
  }, "Inertia.reload()"), ", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 URL."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 52,
      columnNumber: 10
    }
  }), "import { Inertia } from '@inertiajs/inertia'\n\nInertia.reload({ only: ['users'] })\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "\u0422\u0430\u043A\u0436\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u0441\u044B\u043B\u043E\u043A Inertia, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 105
    }
  }, "only"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0431\u044B\u043B\u0430 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0439 \u043E\u0446\u0435\u043D\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u042D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u043F\u0443\u0442\u0435\u043C \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u0437\u0430\u043C\u044B\u043A\u0430\u043D\u0438\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, "\u041A\u043E\u0433\u0434\u0430 Inertia \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0432\u0438\u0437\u0438\u0442, \u043E\u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442, \u043A\u0430\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F, \u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u043C\u044B\u043A\u0430\u043D\u0438\u0435. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGlhbC1yZWxvYWRzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJsYW5ndWFnZSIsImNvZGUiLCJkZWRlbnQiLCJkZXNjcmlwdGlvbiIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsd0JBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsc0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSwyQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JO0FBRlcsQ0FBYjtBQWNQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVJQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4ekRBTEssRUFNTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFrQ0FBbU47QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFuTixjQUEyUTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUEzUSxnNEJBQThlO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBOWUsaUVBQWlqQjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFqakIscXFCQU5LLEVBT0wsMERBQUMsMERBQUQ7QUFBUSxXQUFPLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0YkFQSyxFQVFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUhBUkssRUFTTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9WQUFvRTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXBFLHFvQkFUSyxFQVVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUdBQUwsQ0FWSyxFQWtCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDB5QkFBOEo7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBOUosNk9BbEJLLEVBbUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEZBQUwsQ0FuQkssRUF5Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3ZEFBb0c7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFwRyxNQXpCSyxFQTBCTCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QkwsVUFBSSxFQUFFLFFBRHVCO0FBRTdCTyxjQUFRLEVBQUUsTUFGbUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUYsbUJBSHlCO0FBTTdCQyxpQkFBVyxFQUFFO0FBTmdCLEtBQUQsRUFPM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRE8sY0FBUSxFQUFFLEtBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBUDJCLEVBYzNCO0FBQ0RULFVBQUksRUFBRSxRQURMO0FBRURPLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQWQyQixDQUE5QjtBQXNCSSxXQUFPLEVBQUMsb0JBdEJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkssRUFpREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4SUFqREssRUFrREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyakNBbERLLEVBbURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseWxDQW5ESyxFQW9ETCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlQsVUFBSSxFQUFFLFNBRHVCO0FBRTdCTyxjQUFRLEVBQUUsS0FGbUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQW1CM0I7QUFDRFQsVUFBSSxFQUFFLE9BREw7QUFFRE8sY0FBUSxFQUFFLE1BRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBbkIyQixDQUE5QjtBQTBDSSxXQUFPLEVBQUMsb0JBMUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwREssQ0FBUDtBQWdHRDtLQXBHdUJMLFU7QUFzR3hCO0FBQ0FBLFVBQVUsQ0FBQ08sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXJ0aWFsLXJlbG9hZHMuZTQ1YTJlN2M2Mzc2MTgxMDJlYTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCcsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyN0b3AnLFxuICAgIG5hbWU6ICfQktGB0YLRg9C/0LvQtdC90LjQtSdcbiAgfSwge1xuICAgIHVybDogJyPRh9Cw0YHRgtC40YfQvdGL0LUt0L/QvtGB0LXRidC10L3QuNGPJyxcbiAgICBuYW1lOiAn0KfQsNGB0YLQuNGH0L3Ri9C1INC/0L7RgdC10YnQtdC90LjRjydcbiAgfSwge1xuICAgIHVybDogJyPQvtGC0LvQvtC20LXQvdC90LDRjy3QvtGG0LXQvdC60LAt0LTQsNC90L3Ri9GFJyxcbiAgICBuYW1lOiAn0J7RgtC70L7QttC10L3QvdCw0Y8g0L7RhtC10L3QutCwINC00LDQvdC90YvRhSdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LhgfTwvaDE+XG4gICAgPHA+e2DQn9GA0Lgg0L/QvtGB0LXRidC10L3QuNC4INC+0LTQvdC+0Lkg0Lgg0YLQvtC5INC20LUg0YHRgtGA0LDQvdC40YbRiyDQvdC1INCy0YHQtdCz0LTQsCDQvdC10L7QsdGF0L7QtNC40LzQviDQv9C+0LLRgtC+0YDQvdC+INC/0L7Qu9GD0YfQsNGC0Ywg0LLRgdC1INC00LDQvdC90YvQtSwg0L3QtdC+0LHRhdC+0LTQuNC80YvQtSDQtNC70Y8g0Y3RgtC+0Lkg0YHRgtGA0LDQvdC40YbRiywg0YEg0YHQtdGA0LLQtdGA0LAuINCk0LDQutGC0LjRh9C10YHQutC4LCDQstGL0LHQvtGAINGC0L7Qu9GM0LrQviDRh9Cw0YHRgtC4INC00LDQvdC90YvRhSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0L7Qu9C10LfQvdC+0Lkg0L7Qv9GC0LjQvNC40LfQsNGG0LjQtdC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GM0L3QvtGB0YLQuCwg0LXRgdC70Lgg0LTQvtC/0YPRgdGC0LjQvNC+LCDRh9GC0L7QsdGLINC90LXQutC+0YLQvtGA0YvQtSDQtNCw0L3QvdGL0LUg0YHRgtGA0LDQvdC40YbRiyDRgdGC0LDQu9C4INGD0YHRgtCw0YDQtdCy0YjQuNC80LguINCt0YLQviDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMINCyINGA0LXQttC40LzQtSBJbmVydGlhINGBINGE0YPQvdC60YbQuNC10LkgwqvRh9Cw0YHRgtC40YfQvdGL0YUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQvtC6wrsuYH08L3A+XG4gICAgPHA+e2DQkiDQutCw0YfQtdGB0YLQstC1INC/0YDQuNC80LXRgNCwINGA0LDRgdGB0LzQvtGC0YDQuNC8INGB0YLRgNCw0L3QuNGG0YMg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LksINC60L7RgtC+0YDQsNGPINCy0LrQu9GO0YfQsNC10YIg0YHQv9C40YHQvtC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5LCDQsCDRgtCw0LrQttC1INCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0YTQuNC70YzRgtGA0LDRhtC40Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0L/QviDQuNGFINC60L7QvNC/0LDQvdC40LguINCf0YDQuCDQv9C10YDQstC+0Lwg0LfQsNC/0YDQvtGB0LUg0Log0YHRgtGA0LDQvdC40YbQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LTQsNC90L3Ri9C1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHVzZXJzYH08L2lubGluZUNvZGU+e2Ag0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY29tcGFuaWVzYH08L2lubGluZUNvZGU+e2Ag0L/QtdGA0LXQtNCw0Y7RgtGB0Y8g0LrQvtC80L/QvtC90LXQvdGC0YMg0YHRgtGA0LDQvdC40YbRiy4g0J7QtNC90LDQutC+INC/0YDQuCDQv9C+0YHQu9C10LTRg9GO0YnQuNGFINC/0L7RgdC10YnQtdC90LjRj9GFINGC0L7QuSDQttC1INGB0YLRgNCw0L3QuNGG0YsgKNCy0L7Qt9C80L7QttC90L4sINC00LvRjyDRhNC40LvRjNGC0YDQsNGG0LjQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSkg0JLRiyDQvNC+0LbQtdGC0LUg0LfQsNC/0YDQsNGI0LjQstCw0YLRjCDRgSDRgdC10YDQstC10YDQsCDRgtC+0LvRjNC60L4g0LTQsNC90L3Ri9C1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHVzZXJzYH08L2lubGluZUNvZGU+e2AsINCwINC90LUg0LTQsNC90L3Ri9C1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNvbXBhbmllc2B9PC9pbmxpbmVDb2RlPntgLiDQl9Cw0YLQtdC8IEluZXJ0aWEg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L7QsdGK0LXQtNC40L3QuNGCINGH0LDRgdGC0LjRh9C90YvQtSDQtNCw0L3QvdGL0LUsINCy0L7Qt9Cy0YDQsNGJ0LDQtdC80YvQtSDRgdC10YDQstC10YDQvtC8LCDRgSDQtNCw0L3QvdGL0LzQuCwg0LrQvtGC0L7RgNGL0LUg0YPQttC1INC10YHRgtGMINCyINC/0LDQvNGP0YLQuCDQvdCwINGB0YLQvtGA0L7QvdC1INC60LvQuNC10L3RgtCwLmB9PC9wPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPtCn0LDRgdGC0LjRh9C90LDRjyDQv9C10YDQtdC30LDQs9GA0YPQt9C60LAg0YDQsNCx0L7RgtCw0LXRgiDRgtC+0LvRjNC60L4g0LTQu9GPINC/0L7RgdC10YnQtdC90LjQuSDRgtC+0LPQviDQttC1INC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsuPC9Ob3RpY2U+XG4gICAgPGgyPntg0KfQsNGB0YLQuNGH0L3Ri9C1INC/0L7RgdC10YnQtdC90LjRj2B9PC9oMj5cbiAgICA8cD57YNCn0YLQvtCx0Ysg0LLRi9C/0L7Qu9C90LjRgtGMINGH0LDRgdGC0LjRh9C90YPRjiDQv9C10YDQtdC30LDQs9GA0YPQt9C60YMsINC40YHQv9C+0LvRjNC30YPQudGC0LUg0YHQstC+0LnRgdGC0LLQviBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bvbmx5YH08L2lubGluZUNvZGU+e2AsINGH0YLQvtCx0Ysg0YPQutCw0LfQsNGC0YwsINC60LDQutC40LUg0LTQsNC90L3Ri9C1INCS0Ysg0YXQvtGC0LjRgtC1INCy0LXRgNC90YPRgtGMINGBINGB0LXRgNCy0LXRgNCwLiDQrdGC0L4g0L/RgNC40L3QuNC80LDQtdGCINC80LDRgdGB0LjQsiDQutC70Y7Rh9C10LksINC60L7RgtC+0YDRi9C5INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINC60LvRjtGH0LDQvCDRgdCy0L7QudGB0YLQsi5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS52aXNpdCh1cmwsIHtcbiAgb25seTogWyd1c2VycyddLFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0J/QvtGB0LrQvtC70YzQutGDINGH0LDRgdGC0LjRh9C90LDRjyDQv9C10YDQtdC30LDQs9GA0YPQt9C60LAg0LzQvtC20LXRgiDQstGL0L/QvtC70L3Rj9GC0YzRgdGPINGC0L7Qu9GM0LrQviDQtNC70Y8g0L7QtNC90L7Qs9C+INC4INGC0L7Qs9C+INC20LUg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiywg0L/QvtGH0YLQuCDQstGB0LXQs9C00LAg0LjQvNC10LXRgiDRgdC80YvRgdC7INC/0YDQvtGB0YLQviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LzQtdGC0L7QtCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbmVydGlhLnJlbG9hZCgpYH08L2lubGluZUNvZGU+e2AsINC60L7RgtC+0YDRi9C5INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC40YHQv9C+0LvRjNC30YPQtdGCINGC0LXQutGD0YnQuNC5IFVSTC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcblxuSW5lcnRpYS5yZWxvYWQoeyBvbmx5OiBbJ3VzZXJzJ10gfSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0KLQsNC60LbQtSDQstC+0LfQvNC+0LbQvdC+INCy0YvQv9C+0LvQvdC40YLRjCDRh9Cw0YHRgtC40YfQvdGD0Y4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutGDINGBINC/0L7QvNC+0YnRjNGOINGB0YHRi9C70L7QuiBJbmVydGlhLCDQuNGB0L/QvtC70YzQt9GD0Y8g0YHQstC+0LnRgdGC0LLQviBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bvbmx5YH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgOm9ubHk9XCJbJ3VzZXJzJ11cIj7Qn9C+0LrQsNC30LDRgtGMINCw0LrRgtC40LLQvdGL0LU8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ca0L7QvNC/0L7QvdC10L3RgiA8aW5lcnRpYS1saW5rPiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgNC10LPQuNGB0YLRgNC40YDRg9C10YLRgdGPINC/0LvQsNCz0LjQvdC+0LwgSW5lcnRpYS4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgb25seT17Wyd1c2VycyddfT7Qn9C+0LrQsNC30LDRgtGMINCw0LrRgtC40LLQvdGL0LU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBpbmVydGlhLCBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxhIGhyZWY9XCIvdXNlcnM/YWN0aXZlPXRydWVcIiB1c2U6aW5lcnRpYT1cInt7IG9ubHk6IFsndXNlcnMnXSB9fVwiPtCf0L7QutCw0LfQsNGC0Ywg0LDQutGC0LjQstC90YvQtTwvYT5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvdXNlcnM/YWN0aXZlPXRydWVcIiBvbmx5PXtbJ3VzZXJzJ119PtCf0L7QutCw0LfQsNGC0Ywg0LDQutGC0LjQstC90YvQtTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCe0YLQu9C+0LbQtdC90L3QsNGPINC+0YbQtdC90LrQsCDQtNCw0L3QvdGL0YVgfTwvaDI+XG4gICAgPHA+e2DQp9GC0L7QsdGLINGH0LDRgdGC0LjRh9C90LDRjyDQv9C10YDQtdC30LDQs9GA0YPQt9C60LAg0LHRi9C70LAg0L3QsNC40LHQvtC70LXQtSDRjdGE0YTQtdC60YLQuNCy0L3QvtC5LCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC40YHQv9C+0LvRjNC30YPQudGC0LUg0YHQtdGA0LLQtdGA0L3Rg9GOINGH0LDRgdGC0Ywg0L7RgtC70L7QttC10L3QvdC+0Lkg0L7RhtC10L3QutC4INC00LDQvdC90YvRhS4g0K3RgtC+INC00LXQu9Cw0LXRgtGB0Y8g0L/Rg9GC0LXQvCDQt9Cw0LrQu9GO0YfQtdC90LjRjyDQstGB0LXRhSDQvdC10L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9GFINC00LDQvdC90YvRhSDRgdGC0YDQsNC90LjRhtGLINCyINC30LDQvNGL0LrQsNC90LjQtS5gfTwvcD5cbiAgICA8cD57YNCa0L7Qs9C00LAgSW5lcnRpYSDQstGL0L/QvtC70L3Rj9C10YIg0LLQuNC30LjRgiwg0L7QvdCwINC+0L/RgNC10LTQtdC70Y/QtdGCLCDQutCw0LrQuNC1INC00LDQvdC90YvQtSDRgtGA0LXQsdGD0Y7RgtGB0Y8sINC4INGC0L7Qu9GM0LrQviDQv9C+0YHQu9C1INGN0YLQvtCz0L4g0L7RhtC10L3QuNCy0LDQtdGCINC30LDQvNGL0LrQsNC90LjQtS4g0K3RgtC+INC80L7QttC10YIg0LfQvdCw0YfQuNGC0LXQu9GM0L3QviDQv9C+0LLRi9GB0LjRgtGMINC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GM0L3QvtGB0YLRjCDRgdGC0YDQsNC90LjRhiDRgSDQsdC+0LvRjNGI0LjQvCDQutC+0LvQuNGH0LXRgdGC0LLQvtC8INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0YUg0LTQsNC90L3Ri9GFLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ1VzZXJzL0luZGV4JywgW1xcblxuICAgICAgICAgICAgLy8g0JLQodCV0JPQlNCQINCy0LrQu9GO0YfQsNC10YLRgdGPINC/0YDQuCDQv9C10YDQstC+0Lwg0L/QvtGB0LXRidC10L3QuNC4XG4gICAgICAgICAgICAvLyDQndCV0J7QkdCv0JfQkNCi0JXQm9Cs0J3QniDQstC60LvRjtGH0LDQtdGC0YHRjyDQv9GA0Lgg0YfQsNGB0YLQuNGH0L3QvtC5INC/0LXRgNC10LfQsNCz0YDRg9C30LrQtVxuICAgICAgICAgICAgLy8gQUxXQVlTIGV2YWx1YXRlZFxuICAgICAgICAgICAgJ3VzZXJzJyA9PiBVc2VyOjpnZXQoKSxcXG5cbiAgICAgICAgICAgIC8vINCS0KHQldCT0JTQkCDQstC60LvRjtGH0LDQtdGC0YHRjyDQv9GA0Lgg0L/QtdGA0LLQvtC8INC/0L7RgdC10YnQtdC90LjQuFxuICAgICAgICAgICAgLy8g0J3QldCe0JHQr9CX0JDQotCV0JvQrNCd0J4g0LLQutC70Y7Rh9Cw0LXRgtGB0Y8g0L/RgNC4INGH0LDRgdGC0LjRh9C90L7QuSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LVcbiAgICAgICAgICAgIC8vIE9OTFkgZXZhbHVhdGVkIHdoZW4gbmVlZGVkXG4gICAgICAgICAgICAndXNlcnMnID0+IGZuICgpID0+IFVzZXI6OmdldCgpLFxcblxuICAgICAgICAgICAgLy8gTkVWRVIgaW5jbHVkZWQgb24gZmlyc3QgdmlzaXRcbiAgICAgICAgICAgIC8vINCd0JXQntCR0K/Ql9CQ0KLQldCb0KzQndCeINCy0LrQu9GO0YfQsNC10YLRgdGPINC/0YDQuCDRh9Cw0YHRgtC40YfQvdC+0Lkg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC1XG4gICAgICAgICAgICAvLyBPTkxZIGV2YWx1YXRlZCB3aGVuIG5lZWRlZFxuICAgICAgICAgICAgJ3VzZXJzJyA9PiBJbmVydGlhOjpsYXp5KGZuICgpID0+IFVzZXI6OmdldCgpKSxcbiAgICAgICAgXSk7XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIFVzZXJzQ29udHJvbGxlciA8IEFwcGxpY2F0aW9uQ29udHJvbGxlclxuICAgICAgICAgIGRlZiBpbmRleFxuICAgICAgICAgICAgcmVuZGVyIGluZXJ0aWE6ICdVc2Vycy9JbmRleCcsIHByb3BzOiB7XFxuXG4gICAgICAgICAgICAgICMg0JLQodCV0JPQlNCQINCy0LrQu9GO0YfQsNC10YLRgdGPINC/0YDQuCDQv9C10YDQstC+0Lwg0L/QvtGB0LXRidC10L3QuNC4XG4gICAgICAgICAgICAgICMg0J3QldCe0JHQr9CX0JDQotCV0JvQrNCd0J4g0LLQutC70Y7Rh9Cw0LXRgtGB0Y8g0L/RgNC4INGH0LDRgdGC0LjRh9C90L7QuSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LVcbiAgICAgICAgICAgICAgIyBBTFdBWVMgZXZhbHVhdGVkXG4gICAgICAgICAgICAgIHVzZXJzOiBVc2VyLmFzX2pzb24oKVxcblxuICAgICAgICAgICAgICAjINCS0KHQldCT0JTQkCDQstC60LvRjtGH0LDQtdGC0YHRjyDQv9GA0Lgg0L/QtdGA0LLQvtC8INC/0L7RgdC10YnQtdC90LjQuFxuICAgICAgICAgICAgICAjINCd0JXQntCR0K/Ql9CQ0KLQldCb0KzQndCeINCy0LrQu9GO0YfQsNC10YLRgdGPINC/0YDQuCDRh9Cw0YHRgtC40YfQvdC+0Lkg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC1XG4gICAgICAgICAgICAgICMgT05MWSBldmFsdWF0ZWQgd2hlbiBuZWVkZWRcbiAgICAgICAgICAgICAgdXNlcnM6IC0+IHsgVXNlci5hc19qc29uKCkgfSxcXG5cbiAgICAgICAgICAgICAgIyBORVZFUiBpbmNsdWRlZCBvbiBmaXJzdCB2aXNpdFxuICAgICAgICAgICAgICAjINCd0JXQntCR0K/Ql9CQ0KLQldCb0KzQndCeINCy0LrQu9GO0YfQsNC10YLRgdGPINC/0YDQuCDRh9Cw0YHRgtC40YfQvdC+0Lkg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC1XG4gICAgICAgICAgICAgICMgT05MWSBldmFsdWF0ZWQgd2hlbiBuZWVkZWRcbiAgICAgICAgICAgICAgdXNlcnM6IEluZXJ0aWFSYWlscy5sYXp5KC0+IHsgVXNlci5hc19qc29uIH0pLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGVuZFxuICAgICAgICBlbmRcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9