webpackHotUpdate_N_E("pages/links",{

/***/ "./pages/links.mdx":
/*!*************************!*\
  !*** ./pages/links.mdx ***!
  \*************************/
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
/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notice */ "./components/Notice.js");
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\links.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject27() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/users?active=true\" use:inertia=\"{{ only: ['users'] }}\">Show active</a>\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>Show active</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/users?active=true\" use:inertia=\"{{ only: ['users'] }}\">Show active</a>\\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>Show active</InertiaLink>\n      "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>Show active</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>Show active</InertiaLink>\n      "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/users?active=true\" :only=\"['users']\">Show active</inertia-link>\n      "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/\" use:inertia=\"{{ preserveScroll: true }}\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\n\n        <InertiaLink href=\"/\" preserveScroll>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/\" use:inertia=\"{{ preserveScroll: true }}\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\\n\n        <InertiaLink href=\"/\" preserveScroll>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink preserveScroll href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink preserveScroll href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/\" preserve-scroll>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</inertia-link>\n      "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <input on:change={handleChange} value={query} />\n\n        <button use:inertia=\"{{ href: '/search', data: query, preserveState: true }}\">Search</button>\n\n        <InertiaLink href=\"/search\" data={query} preserveState>Search</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <input on:change={handleChange} value={query} />\\n\n        <button use:inertia=\"{{ href: '/search', data: query, preserveState: true }}\">Search</button>\\n\n        <InertiaLink href=\"/search\" data={query} preserveState>Search</InertiaLink>\n      "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <input onChange={this.handleChange} value={query} />\n\n        <InertiaLink href=\"/search\" data={query} preserveState>Search</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <input onChange={this.handleChange} value={query} />\\n\n        <InertiaLink href=\"/search\" data={query} preserveState>Search</InertiaLink>\n      "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <input v-model=\"query\" type=\"text\" />\n\n        <inertia-link href=\"/search\" :data=\"{ query }\" preserve-state>Search</inertia-link>\n      "], ["\n        <input v-model=\"query\" type=\"text\" />\\n\n        <inertia-link href=\"/search\" :data=\"{ query }\" preserve-state>Search</inertia-link>\n      "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/\" use:inertia=\"{{ replace: true }}\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\n\n        <InertiaLink href=\"/\" replace>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/\" use:inertia=\"{{ replace: true }}\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\\n\n        <InertiaLink href=\"/\" replace>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink replace href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink replace href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/\" replace>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</inertia-link>\n      "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <button use:inertia=\"{{ href: '/endpoint', headers: { foo: bar } }}\">Save</button>\n\n        <InertiaLink href=\"/endpoint\" headers={{ foo: bar}}>Save</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <button use:inertia=\"{{ href: '/endpoint', headers: { foo: bar } }}\">Save</button>\\n\n        <InertiaLink href=\"/endpoint\" headers={{ foo: bar}}>Save</InertiaLink>\n      "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/endpoint\" headers={{ foo: bar }}>Save</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/endpoint\" headers={{ foo: bar }}>Save</InertiaLink>\n      "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/endpoint\" :headers=\"{ foo: bar }\">Save</inertia-link>\n      "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <InertiaLink href=\"/endpoint\" method=\"post\" data={{ foo: bar }}>Save</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <InertiaLink href=\"/endpoint\" method=\"post\" data={{ foo: bar }}>Save</InertiaLink>\n      "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/endpoint\" method=\"post\" data={{ foo: bar }}>Save</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/endpoint\" method=\"post\" data={{ foo: bar }}>Save</InertiaLink>\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/endpoint\" method=\"post\" :data=\"{ foo: bar }\">Save</inertia-link>\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/logout\" use:inertia=\"{{ method: 'post' }}\">Logout</a>\n\n        <InertiaLink href=\"/logout\" method=\"post\">Logout</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/logout\" use:inertia=\"{{ method: 'post' }}\">Logout</a>\\n\n        <InertiaLink href=\"/logout\" method=\"post\">Logout</InertiaLink>\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/logout\" method=\"post\">Logout</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/logout\" method=\"post\">Logout</InertiaLink>\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/logout\" method=\"post\">Logout</inertia-link>\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia } from '@inertiajs/inertia-svelte'\n\n        <button href=\"/logout\" use:inertia=\"{{ method: 'post' }}\" type=\"button\">Logout</button>\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "], ["\n        import { inertia } from '@inertiajs/inertia-svelte'\\n\n        <button href=\"/logout\" use:inertia=\"{{ method: 'post' }}\" type=\"button\">Logout</button>\\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/logout\" method=\"post\" as=\"button\" type=\"button\">Logout</InertiaLink>\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/logout\" method=\"post\" as=\"button\" type=\"button\">Logout</InertiaLink>\\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/logout\" method=\"post\" as=\"button\" type=\"button\">Logout</inertia-link>\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "], ["\n        <inertia-link href=\"/logout\" method=\"post\" as=\"button\" type=\"button\">Logout</inertia-link>\\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/\" use:inertia>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\n\n        <InertiaLink href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/\" use:inertia>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\\n\n        <InertiaLink href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</inertia-link>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Ссылки',
  links: [{
    url: '#top',
    name: 'Вступление'
  }, {
    url: '#создание-ссылок',
    name: 'Создание ссылок'
  }, {
    url: '#метод',
    name: 'Метод'
  }, {
    url: '#данные',
    name: 'Данные'
  }, {
    url: '#заголовки',
    name: 'Заголовки'
  }, {
    url: '#замена',
    name: 'Замена'
  }, {
    url: '#сохранение-состояния',
    name: 'Сохранение состояния'
  }, {
    url: '#сохранение-прокрутки',
    name: 'Сохранение прокрутки'
  }, {
    url: '#частичные-перезагрузки',
    name: 'Частичные перезагрузки'
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
      lineNumber: 51,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, "\u0421\u0441\u044B\u043B\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043E\u043A \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 Inertia \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 Inertia link. \u042D\u0442\u043E \u043B\u0435\u0433\u043A\u0430\u044F \u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 151
    }
  }, "<a>"), ", \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u043A\u043B\u0438\u043A\u0430 \u0438 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0412\u043E\u0442 \u043A\u0430\u043A Inertia \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u043E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 Inertia, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 Inertia link. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435: \u043B\u044E\u0431\u044B\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0412\u0430\u043C\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0432 \u0431\u0430\u0437\u043E\u0432\u044B\u0439 \u0442\u0435\u0433."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3()),
      description: 'Директива use:inertia может применяться к любому элементу HTML.'
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Inertia \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u043A\u0430\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 73
    }
  }, "<a>"), ". \u041E\u0434\u043D\u0430\u043A\u043E \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u0433 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 175
    }
  }, "as"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6()),
      description: 'Svelte пока не поддерживает динамические элементы, но Вы можете использовать директиву inertia для достижения тех же результатов.'
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, "POST"), "/", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 49
    }
  }, "PUT"), "/", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 78
    }
  }, "PATCH"), "/", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 3
    }
  }, "DELETE"), " \u044F\u043A\u043E\u0440\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 41
    }
  }, "<a>"), " \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u043D\u043E \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C\u044E \xAB\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435/\u043E\u043A\u043D\u0435\xBB. \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043A\u0438 ", ' ', " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 281
    }
  }, "<button>"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, "\u041C\u0435\u0442\u043E\u0434"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 \u0434\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0438\u043D\u0435\u0440\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 94
    }
  }, "GET"), ", \u043D\u043E \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 179
    }
  }, "POST"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 233
    }
  }, "PUT"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 286
    }
  }, "PATCH"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 342
    }
  }, "DELETE"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject9())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, "\u0414\u0430\u043D\u043D\u044B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 57
    }
  }, "data"), ". \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 126
    }
  }, "object"), " \u0438\u043B\u0438 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 195
    }
  }, "FormData"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject10()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject11())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject12())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }, "\u041E\u043F\u0446\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 18
    }
  }, "headers"), " \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0412\u0430\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u0432 \u0441\u0441\u044B\u043B\u043A\u0443 Inertia. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 Inertia \u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0438 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject13()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject14())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject15())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }
  }, "\u0417\u0430\u043C\u0435\u043D\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044F (\u043D\u043E\u0432\u043E\u0435) \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 117
    }
  }, "window.history.pushState"), ") \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u044E, \u043E\u0434\u043D\u0430\u043A\u043E \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 241
    }
  }, "window.history.replaceState"), "), \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0432 \u0434\u043B\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 342
    }
  }, "replace"), " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 true. \u042D\u0442\u043E \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0432\u0438\u0437\u0438\u0442 \u0437\u0430\u043C\u0435\u043D\u0438\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0432 \u0441\u0442\u0435\u043A."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject16()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject17())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject18())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 91
    }
  }, "preserve-state"), ". \u042D\u0442\u043E \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u042D\u0442\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u0444\u043E\u0440\u043C, \u0442\u0430\u043A \u043A\u0430\u043A \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u0435\u0439 \u0432\u0432\u043E\u0434\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432\u0432\u043E\u0434."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject19()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject20())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject21())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 43
    }
  }, "preserve-scroll"), ", \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0431\u0440\u043E\u0441 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 Inertia \u043F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject22()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject23())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject24())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/scroll-management"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 70
    }
  }), "\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u043E\u0439"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 5
    }
  }, "\u041E\u043F\u0446\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 18
    }
  }, "only"), " \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0412\u0430\u043C \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C \u043F\u043E\u0434\u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432 (\u0434\u0430\u043D\u043D\u044B\u0445) \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u0440\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0445 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject25()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject26())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject27())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/partial-reloads"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 70
    }
  }), "\u0447\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), "."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsUUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLE1BREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxrQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FOSSxFQVNKO0FBQ0RELE9BQUcsRUFBRSxTQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEksRUFZSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxH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LEVBQUUsS0FGbUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUYscUJBSHlCO0FBTTdCQyxpQkFBVyxFQUFFO0FBTmdCLEtBQUQsRUFPM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRE8sY0FBUSxFQUFFLEtBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBUDJCLEVBYzNCO0FBQ0RULFVBQUksRUFBRSxRQURMO0FBRURPLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQWQyQixDQUE5QjtBQXNCSSxXQUFPLEVBQUMsb0JBdEJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5TkssRUFxUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1VUFBaUU7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNuRixZQUFRO0FBRDJFLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0lBQWpFLE1BclBLLENBQVA7QUF5UEQ7S0E3UHVCTCxVO0FBK1B4QjtBQUNBQSxVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlua3MuMmRmNDUxMGZlN2I2MWQyMmJiMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KHRgdGL0LvQutC4JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI3RvcCcsXG4gICAgbmFtZTogJ9CS0YHRgtGD0L/Qu9C10L3QuNC1J1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0YHRgdGL0LvQvtC6JyxcbiAgICBuYW1lOiAn0KHQvtC30LTQsNC90LjQtSDRgdGB0YvQu9C+0LonXG4gIH0sIHtcbiAgICB1cmw6ICcj0LzQtdGC0L7QtCcsXG4gICAgbmFtZTogJ9Cc0LXRgtC+0LQnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LTQsNC90L3Ri9C1JyxcbiAgICBuYW1lOiAn0JTQsNC90L3Ri9C1J1xuICB9LCB7XG4gICAgdXJsOiAnI9C30LDQs9C+0LvQvtCy0LrQuCcsXG4gICAgbmFtZTogJ9CX0LDQs9C+0LvQvtCy0LrQuCdcbiAgfSwge1xuICAgIHVybDogJyPQt9Cw0LzQtdC90LAnLFxuICAgIG5hbWU6ICfQl9Cw0LzQtdC90LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtGF0YDQsNC90LXQvdC40LUt0YHQvtGB0YLQvtGP0L3QuNGPJyxcbiAgICBuYW1lOiAn0KHQvtGF0YDQsNC90LXQvdC40LUg0YHQvtGB0YLQvtGP0L3QuNGPJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7RhdGA0LDQvdC10L3QuNC1LdC/0YDQvtC60YDRg9GC0LrQuCcsXG4gICAgbmFtZTogJ9Ch0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuCdcbiAgfSwge1xuICAgIHVybDogJyPRh9Cw0YHRgtC40YfQvdGL0LUt0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4JyxcbiAgICBuYW1lOiAn0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCh0YHRi9C70LrQuGB9PC9oMT5cbiAgICA8cD57YNCU0LvRjyDRgdC+0LfQtNCw0L3QuNGPINGB0YHRi9C70L7QuiDQsiDQv9GA0LjQu9C+0LbQtdC90LjQuCBJbmVydGlhINCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LrQvtC80L/QvtC90LXQvdGCIEluZXJ0aWEgbGluay4g0K3RgtC+INC70LXQs9C60LDRjyDQvtCx0L7Qu9C+0YfQutCwINCy0L7QutGA0YPQsyDRgdGC0LDQvdC00LDRgNGC0L3QvtC5INGB0YHRi9C70LrQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8YT5gfTwvaW5saW5lQ29kZT57YCwg0LrQvtGC0L7RgNCw0Y8g0L/QtdGA0LXRhdCy0LDRgtGL0LLQsNC10YIg0YHQvtCx0YvRgtC40Y8g0LrQu9C40LrQsCDQuCDQv9GA0LXQtNC+0YLQstGA0LDRidCw0LXRgiDQv9C+0LvQvdGD0Y4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutGDINGB0YLRgNCw0L3QuNGG0YsuINCS0L7RgiDQutCw0LogSW5lcnRpYSDQvtCx0LXRgdC/0LXRh9C40LLQsNC10YIg0YDQsNCx0L7RgtGDINGBINC+0LTQvdC+0YHRgtGA0LDQvdC40YfQvdGL0Lwg0L/RgNC40LvQvtC20LXQvdC40LXQvC5gfTwvcD5cbiAgICA8aDI+e2DQodC+0LfQtNCw0L3QuNC1INGB0YHRi9C70L7QumB9PC9oMj5cbiAgICA8cD57YNCn0YLQvtCx0Ysg0YHQvtC30LTQsNGC0Ywg0YHRgdGL0LvQutGDIEluZXJ0aWEsINC40YHQv9C+0LvRjNC30YPQudGC0LUg0LrQvtC80L/QvtC90LXQvdGCIEluZXJ0aWEgbGluay4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1OiDQu9GO0LHRi9C1INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC90YvQtSDQktCw0LzQuCDQsNGC0YDQuNCx0YPRgtGLINCx0YPQtNGD0YIg0L/RgNC+0LrRgdC40YDQvtCy0LDQvdGLINCyINCx0LDQt9C+0LLRi9C5INGC0LXQsy5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9cIj7Qk9C70LDQstC90LDRjzwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JrQvtC80L/QvtC90LXQvdGCIDxpbmVydGlhLWxpbms+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGA0LXQs9C40YHRgtGA0LjRgNGD0LXRgtGB0Y8g0L/Qu9Cw0LPQuNC90L7QvCBJbmVydGlhLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvXCI+0JPQu9Cw0LLQvdCw0Y88L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBpbmVydGlhLCBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxhIGhyZWY9XCIvXCIgdXNlOmluZXJ0aWE+0JPQu9Cw0LLQvdCw0Y88L2E+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiPtCT0LvQsNCy0L3QsNGPPC9JbmVydGlhTGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9CU0LjRgNC10LrRgtC40LLQsCB1c2U6aW5lcnRpYSDQvNC+0LbQtdGCINC/0YDQuNC80LXQvdGP0YLRjNGB0Y8g0Log0LvRjtCx0L7QvNGDINGN0LvQtdC80LXQvdGC0YMgSFRNTC4nXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4gSW5lcnRpYSDQvtGC0L7QsdGA0LDQttCw0LXRgiDRgdGB0YvQu9C60Lgg0LrQsNC6INGN0LvQtdC80LXQvdGC0Ysg0L/RgNC40LLRj9C30LrQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8YT5gfTwvaW5saW5lQ29kZT57YC4g0J7QtNC90LDQutC+INCS0Ysg0LzQvtC20LXRgtC1INC40LfQvNC10L3QuNGC0Ywg0YLQtdCzINGBINC/0L7QvNC+0YnRjNGOINCw0YLRgNC40LHRg9GC0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgYXNgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCIgYXM9XCJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9pbmVydGlhLWxpbms+XFxuXG4gICAgICAgIC8vIFJlbmRlcnMgYXM6XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCIgYXM9XCJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9JbmVydGlhTGluaz5cXG5cbiAgICAgICAgLy8gUmVuZGVycyBhczpcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9idXR0b24+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YnV0dG9uIGhyZWY9XCIvbG9nb3V0XCIgdXNlOmluZXJ0aWE9XCJ7eyBtZXRob2Q6ICdwb3N0JyB9fVwiIHR5cGU9XCJidXR0b25cIj5Mb2dvdXQ8L2J1dHRvbj5cXG5cbiAgICAgICAgLy8gUmVuZGVycyBhczpcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9idXR0b24+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICdTdmVsdGUg0L/QvtC60LAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YIg0LTQuNC90LDQvNC40YfQtdGB0LrQuNC1INGN0LvQtdC80LXQvdGC0YssINC90L4g0JLRiyDQvNC+0LbQtdGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC00LjRgNC10LrRgtC40LLRgyBpbmVydGlhINC00LvRjyDQtNC+0YHRgtC40LbQtdC90LjRjyDRgtC10YUg0LbQtSDRgNC10LfRg9C70YzRgtCw0YLQvtCyLidcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+XG4gINCh0L7Qt9C00LDQvdC40LUg0YHRgdGL0LvQvtC6IDxpbmxpbmVDb2RlPlBPU1Q8L2lubGluZUNvZGU+LzxpbmxpbmVDb2RlPlBVVDwvaW5saW5lQ29kZT4vPGlubGluZUNvZGU+UEFUQ0g8L2lubGluZUNvZGU+L1xuICA8aW5saW5lQ29kZT5ERUxFVEU8L2lubGluZUNvZGU+INGP0LrQvtGA0Y8gPGlubGluZUNvZGU+Jmx0O2EmZ3Q7PC9pbmxpbmVDb2RlPiDQvdC1INGA0LXQutC+0LzQtdC90LTRg9C10YLRgdGPLCDQv9C+0YHQutC+0LvRjNC60YMg0L7QvdC+INCy0YvQt9GL0LLQsNC10YIg0L/RgNC+0LHQu9C10LzRiyDRgSDQtNC+0YHRgtGD0L/QvdC+0YHRgtGM0Y4gwqvQntGC0LrRgNGL0YLRjCDRgdGB0YvQu9C60YMg0LIg0L3QvtCy0L7QuSDQstC60LvQsNC00LrQtS/QvtC60L3QtcK7LiDQktC80LXRgdGC0L4g0Y3RgtC+0LPQviDRgNCw0YHRgdC80L7RgtGA0LjRgtC1INCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LHQvtC70LXQtSDQv9C+0LTRhdC+0LTRj9GJ0LXQs9C+INGN0LvQtdC80LXQvdGC0LAsINC90LDQv9GA0LjQvNC10YAg0LrQvdC+0L/QutC4IHsnICd9IDxpbmxpbmVDb2RlPiZsdDtidXR0b24mZ3Q7PC9pbmxpbmVDb2RlPi5cbiAgICA8L05vdGljZT5cbiAgICA8aDI+e2DQnNC10YLQvtC0YH08L2gyPlxuICAgIDxwPntg0JLRiyDQvNC+0LbQtdGC0LUg0YPQutCw0LfQsNGC0Ywg0LzQtdGC0L7QtCDQtNC70Y8g0LfQsNC/0YDQvtGB0LAg0LjQvdC10YDRhtC40L7QvdC90L7QuSDRgdGB0YvQu9C60LguINCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCwg0L3QviDQktGLINGC0LDQutC20LUg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQT1NUYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFBVVGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQQVRDSGB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YERFTEVURWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5Mb2dvdXQ8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ca0L7QvNC/0L7QvdC10L3RgiA8aW5lcnRpYS1saW5rPiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgNC10LPQuNGB0YLRgNC40YDRg9C10YLRgdGPINC/0LvQsNCz0LjQvdC+0LwgSW5lcnRpYS4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5Mb2dvdXQ8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBpbmVydGlhLCBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCIgdXNlOmluZXJ0aWE9XCJ7eyBtZXRob2Q6ICdwb3N0JyB9fVwiPkxvZ291dDwvYT5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPkxvZ291dDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCU0LDQvdC90YvQtWB9PC9oMj5cbiAgICA8cD57YNCS0Ysg0LzQvtC20LXRgtC1INC00L7QsdCw0LLQuNGC0Ywg0LTQsNC90L3Ri9C1INGBINC/0L7QvNC+0YnRjNGOINCw0YLRgNC40LHRg9GC0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YWB9PC9pbmxpbmVDb2RlPntgLiDQrdGC0L4g0LzQvtC20LXRgiDQsdGL0YLRjCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvYmplY3RgfTwvaW5saW5lQ29kZT57YCDQuNC70Lgg0Y3QutC30LXQvNC/0LvRj9GAIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEZvcm1EYXRhYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvZW5kcG9pbnRcIiBtZXRob2Q9XCJwb3N0XCIgOmRhdGE9XCJ7IGZvbzogYmFyIH1cIj5TYXZlPC9pbmVydGlhLWxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICfQmtC+0LzQv9C+0L3QtdC90YIgPGluZXJ0aWEtbGluaz4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YDQtdCz0LjRgdGC0YDQuNGA0YPQtdGC0YHRjyDQv9C70LDQs9C40L3QvtC8IEluZXJ0aWEuJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9lbmRwb2ludFwiIG1ldGhvZD1cInBvc3RcIiBkYXRhPXt7IGZvbzogYmFyIH19PlNhdmU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2VuZHBvaW50XCIgbWV0aG9kPVwicG9zdFwiIGRhdGE9e3sgZm9vOiBiYXIgfX0+U2F2ZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCX0LDQs9C+0LvQvtCy0LrQuGB9PC9oMj5cbiAgICA8cD57YNCe0L/RhtC40Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaGVhZGVyc2B9PC9pbmxpbmVDb2RlPntgINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQktCw0Lwg0LTQvtCx0LDQstC70Y/RgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC1INC30LDQs9C+0LvQvtCy0LrQuCDQsiDRgdGB0YvQu9C60YMgSW5lcnRpYS4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0LfQsNCz0L7Qu9C+0LLQutC4IEluZXJ0aWEg0LjQvNC10Y7RgiDQv9GA0LjQvtGA0LjRgtC10YIg0Lgg0L/QvtGN0YLQvtC80YMg0L3QtSDQvNC+0LPRg9GCINCx0YvRgtGMINC/0LXRgNC10LfQsNC/0LjRgdCw0L3Riy5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9lbmRwb2ludFwiIDpoZWFkZXJzPVwieyBmb286IGJhciB9XCI+U2F2ZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JrQvtC80L/QvtC90LXQvdGCIDxpbmVydGlhLWxpbms+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGA0LXQs9C40YHRgtGA0LjRgNGD0LXRgtGB0Y8g0L/Qu9Cw0LPQuNC90L7QvCBJbmVydGlhLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvZW5kcG9pbnRcIiBoZWFkZXJzPXt7IGZvbzogYmFyIH19PlNhdmU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBpbmVydGlhLCBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxidXR0b24gdXNlOmluZXJ0aWE9XCJ7eyBocmVmOiAnL2VuZHBvaW50JywgaGVhZGVyczogeyBmb286IGJhciB9IH19XCI+U2F2ZTwvYnV0dG9uPlxcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9lbmRwb2ludFwiIGhlYWRlcnM9e3sgZm9vOiBiYXJ9fT5TYXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JfQsNC80LXQvdCwYH08L2gyPlxuICAgIDxwPntg0JLRiyDQvNC+0LbQtdGC0LUg0YPQutCw0LfQsNGC0Ywg0L/QvtCy0LXQtNC10L3QuNC1INC40YHRgtC+0YDQuNC4INCx0YDQsNGD0LfQtdGA0LAuINCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINGB0YLRgNCw0L3QuNGG0LAg0L/QvtGB0LXRidCw0LXRgiDQtNC+0LHQsNCy0LvRj9GPICjQvdC+0LLQvtC1KSDRgdC+0YHRgtC+0Y/QvdC40LUgKGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZWB9PC9pbmxpbmVDb2RlPntgKSDQsiDQuNGB0YLQvtGA0LjRjiwg0L7QtNC90LDQutC+INGC0LDQutC20LUg0LzQvtC20L3QviDQt9Cw0LzQtdC90LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtSAoYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlYH08L2lubGluZUNvZGU+e2ApLCDRg9GB0YLQsNC90L7QstC40LIg0LTQu9GPINCw0YLRgNC40LHRg9GC0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVwbGFjZWB9PC9pbmxpbmVDb2RlPntgINC30L3QsNGH0LXQvdC40LUgdHJ1ZS4g0K3RgtC+INC/0YDQuNCy0LXQtNC10YIg0Log0YLQvtC80YMsINGH0YLQviDQstC40LfQuNGCINC30LDQvNC10L3QuNGCINGC0LXQutGD0YnQtdC1INGB0L7RgdGC0L7Rj9C90LjQtSDQuNGB0YLQvtGA0LjQuCDQstC80LXRgdGC0L4g0LTQvtCx0LDQstC70LXQvdC40Y8g0L3QvtCy0L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRjyDQuNGB0YLQvtGA0LjQuCDQsiDRgdGC0LXQui5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9cIiByZXBsYWNlPtCT0LvQsNCy0L3QsNGPPC9pbmVydGlhLWxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICfQmtC+0LzQv9C+0L3QtdC90YIgPGluZXJ0aWEtbGluaz4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YDQtdCz0LjRgdGC0YDQuNGA0YPQtdGC0YHRjyDQv9C70LDQs9C40L3QvtC8IEluZXJ0aWEuJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8SW5lcnRpYUxpbmsgcmVwbGFjZSBocmVmPVwiL1wiPtCT0LvQsNCy0L3QsNGPPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL1wiIHVzZTppbmVydGlhPVwie3sgcmVwbGFjZTogdHJ1ZSB9fVwiPtCT0LvQsNCy0L3QsNGPPC9hPlxcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9cIiByZXBsYWNlPtCT0LvQsNCy0L3QsNGPPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0KHQvtGF0YDQsNC90LXQvdC40LUg0YHQvtGB0YLQvtGP0L3QuNGPYH08L2gyPlxuICAgIDxwPntg0JLRiyDQvNC+0LbQtdGC0LUg0YHQvtGF0YDQsNC90LjRgtGMINC70L7QutCw0LvRjNC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiyDRgSDQv9C+0LzQvtGJ0YzRjiDQsNGC0YDQuNCx0YPRgtCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHByZXNlcnZlLXN0YXRlYH08L2lubGluZUNvZGU+e2AuINCt0YLQviDQv9GA0LXQtNC+0YLQstGA0LDRgtC40YIg0L/QvtC70L3Ri9C5INC/0L7QstGC0L7RgNC90YvQuSDRgNC10L3QtNC10YDQuNC90LMg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiy4g0K3RgtC+INC+0YHQvtCx0LXQvdC90L4g0L/QvtC70LXQt9C90L4g0LTQu9GPINGE0L7RgNC8LCDRgtCw0Log0LrQsNC6INCS0Ysg0LzQvtC20LXRgtC1INC40LfQsdC10LbQsNGC0Ywg0YDRg9GH0L3QvtCz0L4g0L/QvtCy0YLQvtGA0L3QvtCz0L4g0LfQsNC/0L7Qu9C90LXQvdC40Y8g0L/QvtC70LXQuSDQstCy0L7QtNCwLCDQsCDRgtCw0LrQttC1INC80L7QttC10YLQtSDRgdC+0YXRgNCw0L3QuNGC0Ywg0YHRhNC+0LrRg9GB0LjRgNC+0LLQsNC90L3Ri9C5INCy0LLQvtC0LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJxdWVyeVwiIHR5cGU9XCJ0ZXh0XCIgLz5cXG5cbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL3NlYXJjaFwiIDpkYXRhPVwieyBxdWVyeSB9XCIgcHJlc2VydmUtc3RhdGU+U2VhcmNoPC9pbmVydGlhLWxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICfQmtC+0LzQv9C+0L3QtdC90YIgPGluZXJ0aWEtbGluaz4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YDQtdCz0LjRgdGC0YDQuNGA0YPQtdGC0YHRjyDQv9C70LDQs9C40L3QvtC8IEluZXJ0aWEuJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17cXVlcnl9IC8+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3NlYXJjaFwiIGRhdGE9e3F1ZXJ5fSBwcmVzZXJ2ZVN0YXRlPlNlYXJjaDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEsIEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPGlucHV0IG9uOmNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17cXVlcnl9IC8+XFxuXG4gICAgICAgIDxidXR0b24gdXNlOmluZXJ0aWE9XCJ7eyBocmVmOiAnL3NlYXJjaCcsIGRhdGE6IHF1ZXJ5LCBwcmVzZXJ2ZVN0YXRlOiB0cnVlIH19XCI+U2VhcmNoPC9idXR0b24+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3NlYXJjaFwiIGRhdGE9e3F1ZXJ5fSBwcmVzZXJ2ZVN0YXRlPlNlYXJjaDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCh0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuGB9PC9oMj5cbiAgICA8cD57YNCS0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsNGC0YDQuNCx0YPRgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZS1zY3JvbGxgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDQv9GA0LXQtNC+0YLQstGA0LDRgtC40YLRjCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuNC5INGB0LHRgNC+0YEg0L/QvtC30LjRhtC40Lgg0L/RgNC+0LrRgNGD0YLQutC4IEluZXJ0aWEg0L/RgNC4INC/0L7RgdC10YnQtdC90LjQuC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9cIiBwcmVzZXJ2ZS1zY3JvbGw+0JPQu9Cw0LLQvdCw0Y88L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ca0L7QvNC/0L7QvdC10L3RgiA8aW5lcnRpYS1saW5rPiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgNC10LPQuNGB0YLRgNC40YDRg9C10YLRgdGPINC/0LvQsNCz0LjQvdC+0LwgSW5lcnRpYS4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBwcmVzZXJ2ZVNjcm9sbCBocmVmPVwiL1wiPtCT0LvQsNCy0L3QsNGPPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL1wiIHVzZTppbmVydGlhPVwie3sgcHJlc2VydmVTY3JvbGw6IHRydWUgfX1cIj7Qk9C70LDQstC90LDRjzwvYT5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvXCIgcHJlc2VydmVTY3JvbGw+0JPQu9Cw0LLQvdCw0Y88L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YNCU0LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuCDRgdC80L7RgtGA0LjRgtC1INGB0YLRgNCw0L3QuNGG0YMgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9zY3JvbGwtbWFuYWdlbWVudFwiXG4gICAgICB9fT57YNGD0L/RgNCw0LLQu9C10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQvtC5YH08L2E+e2AuYH08L3A+XG4gICAgPGgyPntg0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuGB9PC9oMj5cbiAgICA8cD57YNCe0L/RhtC40Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb25seWB9PC9pbmxpbmVDb2RlPntgINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQktCw0Lwg0LfQsNC/0YDQsNGI0LjQstCw0YLRjCDQv9C+0LTQvNC90L7QttC10YHRgtCy0L4g0YHQstC+0LnRgdGC0LIgKNC00LDQvdC90YvRhSkg0YEg0YHQtdGA0LLQtdGA0LAg0L/RgNC4INC/0L7RgdC70LXQtNGD0Y7RidC40YUg0L/QvtGB0LXRidC10L3QuNGP0YUg0YLQvtC5INC20LUg0YHRgtGA0LDQvdC40YbRiy5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi91c2Vycz9hY3RpdmU9dHJ1ZVwiIDpvbmx5PVwiWyd1c2VycyddXCI+U2hvdyBhY3RpdmU8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ca0L7QvNC/0L7QvdC10L3RgiA8aW5lcnRpYS1saW5rPiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgNC10LPQuNGB0YLRgNC40YDRg9C10YLRgdGPINC/0LvQsNCz0LjQvdC+0LwgSW5lcnRpYS4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgb25seT17Wyd1c2VycyddfT5TaG93IGFjdGl2ZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEsIEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPGEgaHJlZj1cIi91c2Vycz9hY3RpdmU9dHJ1ZVwiIHVzZTppbmVydGlhPVwie3sgb25seTogWyd1c2VycyddIH19XCI+U2hvdyBhY3RpdmU8L2E+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgb25seT17Wyd1c2VycyddfT5TaG93IGFjdGl2ZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4INGB0LzQvtGC0YDQuNGC0LUg0YHRgtGA0LDQvdC40YbRgyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3BhcnRpYWwtcmVsb2Fkc1wiXG4gICAgICB9fT57YNGH0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LhgfTwvYT57YC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=