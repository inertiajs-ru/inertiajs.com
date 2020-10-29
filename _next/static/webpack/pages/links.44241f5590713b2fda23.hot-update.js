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



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\links.mdx";
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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/\" use:inertia=\"{{ preserveScroll: true }}\">Home</a>\n\n        <InertiaLink href=\"/\" preserveScroll>Home</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/\" use:inertia=\"{{ preserveScroll: true }}\">Home</a>\\n\n        <InertiaLink href=\"/\" preserveScroll>Home</InertiaLink>\n      "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink preserveScroll href=\"/\">Home</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink preserveScroll href=\"/\">Home</InertiaLink>\n      "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/\" preserve-scroll>Home</inertia-link>\n      "]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/\" use:inertia=\"{{ replace: true }}\">Home</a>\n\n        <InertiaLink href=\"/\" replace>Home</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/\" use:inertia=\"{{ replace: true }}\">Home</a>\\n\n        <InertiaLink href=\"/\" replace>Home</InertiaLink>\n      "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink replace href=\"/\">Home</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink replace href=\"/\">Home</InertiaLink>\n      "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/\" replace>Home</inertia-link>\n      "]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/\" use:inertia>Home</a>\n\n        <InertiaLink href=\"/\">Home</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/\" use:inertia>Home</a>\\n\n        <InertiaLink href=\"/\">Home</InertiaLink>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/\">Home</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/\">Home</InertiaLink>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/\">Home</inertia-link>\n      "]);

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
  }, "\u0414\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043E\u043A \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 Inertia \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 Inertia link. \u042D\u0442\u043E \u043B\u0435\u0433\u043A\u0430\u044F \u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u0441\u0441\u044B\u043B\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 158
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
  }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Inertia \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u043A\u0430\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u044F\u043A\u043E\u0440\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 70
    }
  }, "<a>"), ". \u041E\u0434\u043D\u0430\u043A\u043E \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u0433 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 172
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
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 12
    }
  }, "POST"), "/", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 42
    }
  }, "PUT"), "/", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 71
    }
  }, "PATCH"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 102
    }
  }, "DELETE"), " \u0441\u0441\u044B\u043B\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 141
    }
  }, "<a>"), " \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u043D\u043E \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C\u044E \"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435/\u043E\u043A\u043D\u0435\". \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043A\u0438 ", ' ', " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 381
    }
  }, "<button>"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, "\u041C\u0435\u0442\u043E\u0434"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 \u0434\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0441\u0441\u044B\u043B\u043A\u0438 Inertia. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 90
    }
  }, "GET"), ", \u043D\u043E \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 175
    }
  }, "POST"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 229
    }
  }, "PUT"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 282
    }
  }, "PATCH"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 338
    }
  }, "DELETE"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
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
      lineNumber: 117,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }, "\u0414\u0430\u043D\u043D\u044B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 57
    }
  }, "data"), ". \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 126
    }
  }, "object"), " \u0438\u043B\u0438 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 195
    }
  }, "FormData"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject10()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
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
      lineNumber: 142,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, "\u041E\u043F\u0446\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 18
    }
  }, "headers"), " option allows you to add custom headers to an Inertia link. Do note that Inertia's headers take priority and therefore cannot be overwritten."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject13()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
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
      lineNumber: 166,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 5
    }
  }, "\u0417\u0430\u043C\u0435\u043D\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }
  }, "You can specify the browser history behaviour. By default page visits push (new) state (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 100
    }
  }, "window.history.pushState"), ") into the history, however it's also possible to replace state (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 237
    }
  }, "window.history.replaceState"), ") by setting the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 329
    }
  }, "replace"), " attribute to true. This will cause the visit to replace the current history state, instead of adding a new history state to the stack."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject16()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
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
      lineNumber: 191,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, "You can preserve a page component's local state using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 70
    }
  }, "preserve-state"), " attribute. This will prevent a page component from fully re-rendering. This is especially helpful with forms, since you can avoid manually repopulating input fields, and can also maintain a focused input."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject19()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
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
      lineNumber: 216,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    }
  }, "You can use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 28
    }
  }, "preserve-scroll"), " attribute to prevent Inertia from automatically resetting the scroll position when making the visit."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject22()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
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
      lineNumber: 244,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 5
    }
  }, "For more information, see the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/scroll-management"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 42
    }
  }), "scroll management"), " page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 16
    }
  }, "only"), " option allows you to request a subset of the props (data) from the server on subsequent visits to the same page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject25()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
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
      lineNumber: 272,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 5
    }
  }, "For more information, see the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/partial-reloads"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 42
    }
  }), "partial reloads"), " page."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsUUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLE1BREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxrQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FOSSxFQVNKO0FBQ0RELE9BQUcsRUFBRSxTQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEksRUFZSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxH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RSxLQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRixxQkFIeUI7QUFNN0JDLGlCQUFXLEVBQUU7QUFOZ0IsS0FBRCxFQU8zQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FQMkIsRUFjM0I7QUFDRFQsVUFBSSxFQUFFLFFBREw7QUFFRE8sY0FBUSxFQUFFLEtBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBZDJCLENBQTlCO0FBc0JJLFdBQU8sRUFBQyxvQkF0Qlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdOSyxFQW9QTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFxQztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3ZELFlBQVE7QUFEK0MsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBckMsV0FwUEssQ0FBUDtBQXdQRDtLQTVQdUJMLFU7QUE4UHhCO0FBQ0FBLFVBQVUsQ0FBQ08sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saW5rcy40NDI0MWY1NTkwNzEzYjJmZGEyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQodGB0YvQu9C60LgnLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcjdG9wJyxcbiAgICBuYW1lOiAn0JLRgdGC0YPQv9C70LXQvdC40LUnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtC30LTQsNC90LjQtS3RgdGB0YvQu9C+0LonLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0L3QuNC1INGB0YHRi9C70L7QuidcbiAgfSwge1xuICAgIHVybDogJyPQvNC10YLQvtC0JyxcbiAgICBuYW1lOiAn0JzQtdGC0L7QtCdcbiAgfSwge1xuICAgIHVybDogJyPQtNCw0L3QvdGL0LUnLFxuICAgIG5hbWU6ICfQlNCw0L3QvdGL0LUnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LfQsNCz0L7Qu9C+0LLQutC4JyxcbiAgICBuYW1lOiAn0JfQsNCz0L7Qu9C+0LLQutC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9C30LDQvNC10L3QsCcsXG4gICAgbmFtZTogJ9CX0LDQvNC10L3QsCdcbiAgfSwge1xuICAgIHVybDogJyPRgdC+0YXRgNCw0L3QtdC90LjQtS3RgdC+0YHRgtC+0Y/QvdC40Y8nLFxuICAgIG5hbWU6ICfQodC+0YXRgNCw0L3QtdC90LjQtSDRgdC+0YHRgtC+0Y/QvdC40Y8nXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtGF0YDQsNC90LXQvdC40LUt0L/RgNC+0LrRgNGD0YLQutC4JyxcbiAgICBuYW1lOiAn0KHQvtGF0YDQsNC90LXQvdC40LUg0L/RgNC+0LrRgNGD0YLQutC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9GH0LDRgdGC0LjRh9C90YvQtS3Qv9C10YDQtdC30LDQs9GA0YPQt9C60LgnLFxuICAgIG5hbWU6ICfQp9Cw0YHRgtC40YfQvdGL0LUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KHRgdGL0LvQutC4YH08L2gxPlxuICAgIDxwPntg0JTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0YHRgdGL0LvQvtC6INCyINC/0YDQuNC70L7QttC10L3QuNC4IEluZXJ0aWEg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQutC+0LzQv9C+0L3QtdC90YIgSW5lcnRpYSBsaW5rLiDQrdGC0L4g0LvQtdCz0LrQsNGPINC+0LHQvtC70L7Rh9C60LAg0LLQvtC60YDRg9CzINGB0YLQsNC90LTQsNGA0YLQvdC+0Lkg0YHRgdGL0LvQutC4INGB0YHRi9C70LrQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8YT5gfTwvaW5saW5lQ29kZT57YCwg0LrQvtGC0L7RgNCw0Y8g0L/QtdGA0LXRhdCy0LDRgtGL0LLQsNC10YIg0YHQvtCx0YvRgtC40Y8g0LrQu9C40LrQsCDQuCDQv9GA0LXQtNC+0YLQstGA0LDRidCw0LXRgiDQv9C+0LvQvdGD0Y4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutGDINGB0YLRgNCw0L3QuNGG0YsuINCS0L7RgiDQutCw0LogSW5lcnRpYSDQvtCx0LXRgdC/0LXRh9C40LLQsNC10YIg0YDQsNCx0L7RgtGDINGBINC+0LTQvdC+0YHRgtGA0LDQvdC40YfQvdGL0Lwg0L/RgNC40LvQvtC20LXQvdC40LXQvC5gfTwvcD5cbiAgICA8aDI+e2DQodC+0LfQtNCw0L3QuNC1INGB0YHRi9C70L7QumB9PC9oMj5cbiAgICA8cD57YNCn0YLQvtCx0Ysg0YHQvtC30LTQsNGC0Ywg0YHRgdGL0LvQutGDIEluZXJ0aWEsINC40YHQv9C+0LvRjNC30YPQudGC0LUg0LrQvtC80L/QvtC90LXQvdGCIEluZXJ0aWEgbGluay4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1OiDQu9GO0LHRi9C1INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC90YvQtSDQktCw0LzQuCDQsNGC0YDQuNCx0YPRgtGLINCx0YPQtNGD0YIg0L/RgNC+0LrRgdC40YDQvtCy0LDQvdGLINCyINCx0LDQt9C+0LLRi9C5INGC0LXQsy5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9cIj5Ib21lPC9pbmVydGlhLWxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICfQmtC+0LzQv9C+0L3QtdC90YIgPGluZXJ0aWEtbGluaz4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YDQtdCz0LjRgdGC0YDQuNGA0YPQtdGC0YHRjyDQv9C70LDQs9C40L3QvtC8IEluZXJ0aWEuJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9cIj5Ib21lPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL1wiIHVzZTppbmVydGlhPkhvbWU8L2E+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiPkhvbWU8L0luZXJ0aWFMaW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JTQuNGA0LXQutGC0LjQstCwIHVzZTppbmVydGlhINC80L7QttC10YIg0L/RgNC40LzQtdC90Y/RgtGM0YHRjyDQuiDQu9GO0LHQvtC80YMg0Y3Qu9C10LzQtdC90YLRgyBIVE1MLidcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQn9C+INGD0LzQvtC70YfQsNC90LjRjiBJbmVydGlhINC+0YLQvtCx0YDQsNC20LDQtdGCINGB0YHRi9C70LrQuCDQutCw0Log0Y3Qu9C10LzQtdC90YLRiyDRj9C60L7RgNGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxhPmB9PC9pbmxpbmVDb2RlPntgLiDQntC00L3QsNC60L4g0JLRiyDQvNC+0LbQtdGC0LUg0LjQt9C80LXQvdC40YLRjCDRgtC10LMg0YEg0L/QvtC80L7RidGM0Y4g0LDRgtGA0LjQsdGD0YLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bhc2B9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIiBhcz1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5Mb2dvdXQ8L2luZXJ0aWEtbGluaz5cXG5cbiAgICAgICAgLy8gUmVuZGVycyBhczpcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9idXR0b24+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIiBhcz1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5Mb2dvdXQ8L0luZXJ0aWFMaW5rPlxcblxuICAgICAgICAvLyBSZW5kZXJzIGFzOlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxidXR0b24gaHJlZj1cIi9sb2dvdXRcIiB1c2U6aW5lcnRpYT1cInt7IG1ldGhvZDogJ3Bvc3QnIH19XCIgdHlwZT1cImJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPlxcblxuICAgICAgICAvLyBSZW5kZXJzIGFzOlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1N2ZWx0ZSDQv9C+0LrQsCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgiDQtNC40L3QsNC80LjRh9C10YHQutC40LUg0Y3Qu9C10LzQtdC90YLRiywg0L3QviDQktGLINC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQuNGA0LXQutGC0LjQstGDIGluZXJ0aWEg0LTQu9GPINC00L7RgdGC0LjQttC10L3QuNGPINGC0LXRhSDQttC1INGA0LXQt9GD0LvRjNGC0LDRgtC+0LIuJ1xuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj5cbiAg0KHQvtC30LTQsNC90LjQtSA8aW5saW5lQ29kZT5QT1NUPC9pbmxpbmVDb2RlPi88aW5saW5lQ29kZT5QVVQ8L2lubGluZUNvZGU+LzxpbmxpbmVDb2RlPlBBVENIPC9pbmxpbmVDb2RlPiA8aW5saW5lQ29kZT5ERUxFVEU8L2lubGluZUNvZGU+INGB0YHRi9C70L7QuiA8aW5saW5lQ29kZT4mbHQ7YSZndDs8L2lubGluZUNvZGU+INC90LUg0YDQtdC60L7QvNC10L3QtNGD0LXRgtGB0Y8sINC/0L7RgdC60L7Qu9GM0LrRgyDQvtC90L4g0LLRi9C30YvQstCw0LXRgiDQv9GA0L7QsdC70LXQvNGLINGBINC00L7RgdGC0YPQv9C90L7RgdGC0YzRjiBcItCe0YLQutGA0YvRgtGMINGB0YHRi9C70LrRgyDQsiDQvdC+0LLQvtC5INCy0LrQu9Cw0LTQutC1L9C+0LrQvdC1XCIuINCS0LzQtdGB0YLQviDRjdGC0L7Qs9C+INGA0LDRgdGB0LzQvtGC0YDQuNGC0LUg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDQsdC+0LvQtdC1INC/0L7QtNGF0L7QtNGP0YnQtdCz0L4g0Y3Qu9C10LzQtdC90YLQsCwg0L3QsNC/0YDQuNC80LXRgCDQutC90L7Qv9C60LggeycgJ30gPGlubGluZUNvZGU+Jmx0O2J1dHRvbiZndDs8L2lubGluZUNvZGU+LlxuICAgIDwvTm90aWNlPlxuICAgIDxoMj57YNCc0LXRgtC+0LRgfTwvaDI+XG4gICAgPHA+e2DQktGLINC80L7QttC10YLQtSDRg9C60LDQt9Cw0YLRjCDQvNC10YLQvtC0INC00LvRjyDQt9Cw0L/RgNC+0YHQsCDRgdGB0YvQu9C60LggSW5lcnRpYS4g0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEdFVGB9PC9pbmxpbmVDb2RlPntgLCDQvdC+INCS0Ysg0YLQsNC60LbQtSDQvNC+0LbQtdGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFBPU1RgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUFVUYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFBBVENIYH08L2lubGluZUNvZGU+e2Ag0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgREVMRVRFYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPkxvZ291dDwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDxpbmVydGlhLWxpbms+IGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyZWQgYnkgdGhlIEluZXJ0aWEgcGx1Z2luLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPkxvZ291dDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEsIEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPGEgaHJlZj1cIi9sb2dvdXRcIiB1c2U6aW5lcnRpYT1cInt7IG1ldGhvZDogJ3Bvc3QnIH19XCI+TG9nb3V0PC9hPlxcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCI+TG9nb3V0PC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JTQsNC90L3Ri9C1YH08L2gyPlxuICAgIDxwPntg0JLRiyDQvNC+0LbQtdGC0LUg0LTQvtCx0LDQstC40YLRjCDQtNCw0L3QvdGL0LUg0YEg0L/QvtC80L7RidGM0Y4g0LDRgtGA0LjQsdGD0YLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkYXRhYH08L2lubGluZUNvZGU+e2AuINCt0YLQviDQvNC+0LbQtdGCINCx0YvRgtGMIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9iamVjdGB9PC9pbmxpbmVDb2RlPntgINC40LvQuCDRjdC60LfQtdC80L/Qu9GP0YAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRm9ybURhdGFgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9lbmRwb2ludFwiIG1ldGhvZD1cInBvc3RcIiA6ZGF0YT1cInsgZm9vOiBiYXIgfVwiPlNhdmU8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSA8aW5lcnRpYS1saW5rPiBjb21wb25lbnQgaXMgYXV0b21hdGljYWxseSByZWdpc3RlcmVkIGJ5IHRoZSBJbmVydGlhIHBsdWdpbi4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2VuZHBvaW50XCIgbWV0aG9kPVwicG9zdFwiIGRhdGE9e3sgZm9vOiBiYXIgfX0+U2F2ZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvZW5kcG9pbnRcIiBtZXRob2Q9XCJwb3N0XCIgZGF0YT17eyBmb286IGJhciB9fT5TYXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JfQsNCz0L7Qu9C+0LLQutC4YH08L2gyPlxuICAgIDxwPntg0J7Qv9GG0LjRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BoZWFkZXJzYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIGFsbG93cyB5b3UgdG8gYWRkIGN1c3RvbSBoZWFkZXJzIHRvIGFuIEluZXJ0aWEgbGluay4gRG8gbm90ZSB0aGF0IEluZXJ0aWEncyBoZWFkZXJzIHRha2UgcHJpb3JpdHkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgb3ZlcndyaXR0ZW4uYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvZW5kcG9pbnRcIiA6aGVhZGVycz1cInsgZm9vOiBiYXIgfVwiPlNhdmU8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSA8aW5lcnRpYS1saW5rPiBjb21wb25lbnQgaXMgYXV0b21hdGljYWxseSByZWdpc3RlcmVkIGJ5IHRoZSBJbmVydGlhIHBsdWdpbi4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2VuZHBvaW50XCIgaGVhZGVycz17eyBmb286IGJhciB9fT5TYXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YnV0dG9uIHVzZTppbmVydGlhPVwie3sgaHJlZjogJy9lbmRwb2ludCcsIGhlYWRlcnM6IHsgZm9vOiBiYXIgfSB9fVwiPlNhdmU8L2J1dHRvbj5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvZW5kcG9pbnRcIiBoZWFkZXJzPXt7IGZvbzogYmFyfX0+U2F2ZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCX0LDQvNC10L3QsGB9PC9oMj5cbiAgICA8cD57YFlvdSBjYW4gc3BlY2lmeSB0aGUgYnJvd3NlciBoaXN0b3J5IGJlaGF2aW91ci4gQnkgZGVmYXVsdCBwYWdlIHZpc2l0cyBwdXNoIChuZXcpIHN0YXRlIChgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGVgfTwvaW5saW5lQ29kZT57YCkgaW50byB0aGUgaGlzdG9yeSwgaG93ZXZlciBpdCdzIGFsc28gcG9zc2libGUgdG8gcmVwbGFjZSBzdGF0ZSAoYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlYH08L2lubGluZUNvZGU+e2ApIGJ5IHNldHRpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlcGxhY2VgfTwvaW5saW5lQ29kZT57YCBhdHRyaWJ1dGUgdG8gdHJ1ZS4gVGhpcyB3aWxsIGNhdXNlIHRoZSB2aXNpdCB0byByZXBsYWNlIHRoZSBjdXJyZW50IGhpc3Rvcnkgc3RhdGUsIGluc3RlYWQgb2YgYWRkaW5nIGEgbmV3IGhpc3Rvcnkgc3RhdGUgdG8gdGhlIHN0YWNrLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL1wiIHJlcGxhY2U+SG9tZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDxpbmVydGlhLWxpbms+IGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyZWQgYnkgdGhlIEluZXJ0aWEgcGx1Z2luLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIHJlcGxhY2UgaHJlZj1cIi9cIj5Ib21lPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL1wiIHVzZTppbmVydGlhPVwie3sgcmVwbGFjZTogdHJ1ZSB9fVwiPkhvbWU8L2E+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiIHJlcGxhY2U+SG9tZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCh0L7RhdGA0LDQvdC10L3QuNC1INGB0L7RgdGC0L7Rj9C90LjRj2B9PC9oMj5cbiAgICA8cD57YFlvdSBjYW4gcHJlc2VydmUgYSBwYWdlIGNvbXBvbmVudCdzIGxvY2FsIHN0YXRlIHVzaW5nIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZS1zdGF0ZWB9PC9pbmxpbmVDb2RlPntgIGF0dHJpYnV0ZS4gVGhpcyB3aWxsIHByZXZlbnQgYSBwYWdlIGNvbXBvbmVudCBmcm9tIGZ1bGx5IHJlLXJlbmRlcmluZy4gVGhpcyBpcyBlc3BlY2lhbGx5IGhlbHBmdWwgd2l0aCBmb3Jtcywgc2luY2UgeW91IGNhbiBhdm9pZCBtYW51YWxseSByZXBvcHVsYXRpbmcgaW5wdXQgZmllbGRzLCBhbmQgY2FuIGFsc28gbWFpbnRhaW4gYSBmb2N1c2VkIGlucHV0LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJxdWVyeVwiIHR5cGU9XCJ0ZXh0XCIgLz5cXG5cbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL3NlYXJjaFwiIDpkYXRhPVwieyBxdWVyeSB9XCIgcHJlc2VydmUtc3RhdGU+U2VhcmNoPC9pbmVydGlhLWxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgPGluZXJ0aWEtbGluaz4gY29tcG9uZW50IGlzIGF1dG9tYXRpY2FsbHkgcmVnaXN0ZXJlZCBieSB0aGUgSW5lcnRpYSBwbHVnaW4uJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17cXVlcnl9IC8+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3NlYXJjaFwiIGRhdGE9e3F1ZXJ5fSBwcmVzZXJ2ZVN0YXRlPlNlYXJjaDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEsIEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPGlucHV0IG9uOmNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17cXVlcnl9IC8+XFxuXG4gICAgICAgIDxidXR0b24gdXNlOmluZXJ0aWE9XCJ7eyBocmVmOiAnL3NlYXJjaCcsIGRhdGE6IHF1ZXJ5LCBwcmVzZXJ2ZVN0YXRlOiB0cnVlIH19XCI+U2VhcmNoPC9idXR0b24+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3NlYXJjaFwiIGRhdGE9e3F1ZXJ5fSBwcmVzZXJ2ZVN0YXRlPlNlYXJjaDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCh0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuGB9PC9oMj5cbiAgICA8cD57YFlvdSBjYW4gdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZS1zY3JvbGxgfTwvaW5saW5lQ29kZT57YCBhdHRyaWJ1dGUgdG8gcHJldmVudCBJbmVydGlhIGZyb20gYXV0b21hdGljYWxseSByZXNldHRpbmcgdGhlIHNjcm9sbCBwb3NpdGlvbiB3aGVuIG1ha2luZyB0aGUgdmlzaXQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvXCIgcHJlc2VydmUtc2Nyb2xsPkhvbWU8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSA8aW5lcnRpYS1saW5rPiBjb21wb25lbnQgaXMgYXV0b21hdGljYWxseSByZWdpc3RlcmVkIGJ5IHRoZSBJbmVydGlhIHBsdWdpbi4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBwcmVzZXJ2ZVNjcm9sbCBocmVmPVwiL1wiPkhvbWU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBpbmVydGlhLCBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxhIGhyZWY9XCIvXCIgdXNlOmluZXJ0aWE9XCJ7eyBwcmVzZXJ2ZVNjcm9sbDogdHJ1ZSB9fVwiPkhvbWU8L2E+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiIHByZXNlcnZlU2Nyb2xsPkhvbWU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2Nyb2xsLW1hbmFnZW1lbnRcIlxuICAgICAgfX0+e2BzY3JvbGwgbWFuYWdlbWVudGB9PC9hPntgIHBhZ2UuYH08L3A+XG4gICAgPGgyPntg0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bvbmx5YH08L2lubGluZUNvZGU+e2Agb3B0aW9uIGFsbG93cyB5b3UgdG8gcmVxdWVzdCBhIHN1YnNldCBvZiB0aGUgcHJvcHMgKGRhdGEpIGZyb20gdGhlIHNlcnZlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byB0aGUgc2FtZSBwYWdlLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgOm9ubHk9XCJbJ3VzZXJzJ11cIj5TaG93IGFjdGl2ZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDxpbmVydGlhLWxpbms+IGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyZWQgYnkgdGhlIEluZXJ0aWEgcGx1Z2luLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvdXNlcnM/YWN0aXZlPXRydWVcIiBvbmx5PXtbJ3VzZXJzJ119PlNob3cgYWN0aXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgdXNlOmluZXJ0aWE9XCJ7eyBvbmx5OiBbJ3VzZXJzJ10gfX1cIj5TaG93IGFjdGl2ZTwvYT5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvdXNlcnM/YWN0aXZlPXRydWVcIiBvbmx5PXtbJ3VzZXJzJ119PlNob3cgYWN0aXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3BhcnRpYWwtcmVsb2Fkc1wiXG4gICAgICB9fT57YHBhcnRpYWwgcmVsb2Fkc2B9PC9hPntgIHBhZ2UuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9