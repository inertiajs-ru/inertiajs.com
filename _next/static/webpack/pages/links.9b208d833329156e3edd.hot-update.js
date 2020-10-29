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
  }, "<a>"), " \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u043D\u043E \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C\u044E \"Open Link in New Tab/Window\" accessibility issues. Instead, consider using a more appropriate element, such as a", ' ', Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 3
    }
  }, "<button>"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, "\u041C\u0435\u0442\u043E\u0434"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, "You can specify the method for an Inertia link request. The default is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 83
    }
  }, "GET"), ", but you can also use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 157
    }
  }, "POST"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 211
    }
  }, "PUT"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 264
    }
  }, "PATCH"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 323
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
      lineNumber: 119,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, "\u0414\u0430\u043D\u043D\u044B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, "You can add data using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 39
    }
  }, "data"), " attribute. This can be an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 118
    }
  }, "object"), ", or a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 179
    }
  }, "FormData"), " instance."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 144,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 16
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
      lineNumber: 168,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 5
    }
  }, "\u0417\u0430\u043C\u0435\u043D\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }, "You can specify the browser history behaviour. By default page visits push (new) state (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 100
    }
  }, "window.history.pushState"), ") into the history, however it's also possible to replace state (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 237
    }
  }, "window.history.replaceState"), ") by setting the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
      lineNumber: 193,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, "You can preserve a page component's local state using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
      lineNumber: 218,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 5
    }
  }, "You can use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
      lineNumber: 246,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
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
      lineNumber: 269,
      columnNumber: 42
    }
  }), "scroll management"), " page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
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
      lineNumber: 274,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
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
      lineNumber: 297,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsUUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLE1BREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxrQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FOSSxFQVNKO0FBQ0RELE9BQUcsRUFBRSxTQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEksRUFZSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxH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bUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUYscUJBSHlCO0FBTTdCQyxpQkFBVyxFQUFFO0FBTmdCLEtBQUQsRUFPM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRE8sY0FBUSxFQUFFLEtBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBUDJCLEVBYzNCO0FBQ0RULFVBQUksRUFBRSxRQURMO0FBRURPLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQWQyQixDQUE5QjtBQXNCSSxXQUFPLEVBQUMsb0JBdEJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvTkssRUFzUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBcUM7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUN2RCxZQUFRO0FBRCtDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQXJDLFdBdFBLLENBQVA7QUEwUEQ7S0E5UHVCTCxVO0FBZ1F4QjtBQUNBQSxVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlua3MuOWIyMDhkODMzMzI5MTU2ZTNlZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KHRgdGL0LvQutC4JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI3RvcCcsXG4gICAgbmFtZTogJ9CS0YHRgtGD0L/Qu9C10L3QuNC1J1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0YHRgdGL0LvQvtC6JyxcbiAgICBuYW1lOiAn0KHQvtC30LTQsNC90LjQtSDRgdGB0YvQu9C+0LonXG4gIH0sIHtcbiAgICB1cmw6ICcj0LzQtdGC0L7QtCcsXG4gICAgbmFtZTogJ9Cc0LXRgtC+0LQnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LTQsNC90L3Ri9C1JyxcbiAgICBuYW1lOiAn0JTQsNC90L3Ri9C1J1xuICB9LCB7XG4gICAgdXJsOiAnI9C30LDQs9C+0LvQvtCy0LrQuCcsXG4gICAgbmFtZTogJ9CX0LDQs9C+0LvQvtCy0LrQuCdcbiAgfSwge1xuICAgIHVybDogJyPQt9Cw0LzQtdC90LAnLFxuICAgIG5hbWU6ICfQl9Cw0LzQtdC90LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtGF0YDQsNC90LXQvdC40LUt0YHQvtGB0YLQvtGP0L3QuNGPJyxcbiAgICBuYW1lOiAn0KHQvtGF0YDQsNC90LXQvdC40LUg0YHQvtGB0YLQvtGP0L3QuNGPJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7RhdGA0LDQvdC10L3QuNC1LdC/0YDQvtC60YDRg9GC0LrQuCcsXG4gICAgbmFtZTogJ9Ch0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuCdcbiAgfSwge1xuICAgIHVybDogJyPRh9Cw0YHRgtC40YfQvdGL0LUt0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4JyxcbiAgICBuYW1lOiAn0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCh0YHRi9C70LrQuGB9PC9oMT5cbiAgICA8cD57YNCU0LvRjyDRgdC+0LfQtNCw0L3QuNGPINGB0YHRi9C70L7QuiDQsiDQv9GA0LjQu9C+0LbQtdC90LjQuCBJbmVydGlhINCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LrQvtC80L/QvtC90LXQvdGCIEluZXJ0aWEgbGluay4g0K3RgtC+INC70LXQs9C60LDRjyDQvtCx0L7Qu9C+0YfQutCwINCy0L7QutGA0YPQsyDRgdGC0LDQvdC00LDRgNGC0L3QvtC5INGB0YHRi9C70LrQuCDRgdGB0YvQu9C60LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGE+YH08L2lubGluZUNvZGU+e2AsINC60L7RgtC+0YDQsNGPINC/0LXRgNC10YXQstCw0YLRi9Cy0LDQtdGCINGB0L7QsdGL0YLQuNGPINC60LvQuNC60LAg0Lgg0L/RgNC10LTQvtGC0LLRgNCw0YnQsNC10YIg0L/QvtC70L3Rg9GOINC/0LXRgNC10LfQsNCz0YDRg9C30LrRgyDRgdGC0YDQsNC90LjRhtGLLiDQktC+0YIg0LrQsNC6IEluZXJ0aWEg0L7QsdC10YHQv9C10YfQuNCy0LDQtdGCINGA0LDQsdC+0YLRgyDRgSDQvtC00L3QvtGB0YLRgNCw0L3QuNGH0L3Ri9C8INC/0YDQuNC70L7QttC10L3QuNC10LwuYH08L3A+XG4gICAgPGgyPntg0KHQvtC30LTQsNC90LjQtSDRgdGB0YvQu9C+0LpgfTwvaDI+XG4gICAgPHA+e2DQp9GC0L7QsdGLINGB0L7Qt9C00LDRgtGMINGB0YHRi9C70LrRgyBJbmVydGlhLCDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INC60L7QvNC/0L7QvdC10L3RgiBJbmVydGlhIGxpbmsuINCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtTog0LvRjtCx0YvQtSDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QvdGL0LUg0JLQsNC80Lgg0LDRgtGA0LjQsdGD0YLRiyDQsdGD0LTRg9GCINC/0YDQvtC60YHQuNGA0L7QstCw0L3RiyDQsiDQsdCw0LfQvtCy0YvQuSDRgtC10LMuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvXCI+SG9tZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JrQvtC80L/QvtC90LXQvdGCIDxpbmVydGlhLWxpbms+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGA0LXQs9C40YHRgtGA0LjRgNGD0LXRgtGB0Y8g0L/Qu9Cw0LPQuNC90L7QvCBJbmVydGlhLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvXCI+SG9tZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEsIEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPGEgaHJlZj1cIi9cIiB1c2U6aW5lcnRpYT5Ib21lPC9hPlxcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9cIj5Ib21lPC9JbmVydGlhTGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9CU0LjRgNC10LrRgtC40LLQsCB1c2U6aW5lcnRpYSDQvNC+0LbQtdGCINC/0YDQuNC80LXQvdGP0YLRjNGB0Y8g0Log0LvRjtCx0L7QvNGDINGN0LvQtdC80LXQvdGC0YMgSFRNTC4nXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4gSW5lcnRpYSDQvtGC0L7QsdGA0LDQttCw0LXRgiDRgdGB0YvQu9C60Lgg0LrQsNC6INGN0LvQtdC80LXQvdGC0Ysg0Y/QutC+0YDRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8YT5gfTwvaW5saW5lQ29kZT57YC4g0J7QtNC90LDQutC+INCS0Ysg0LzQvtC20LXRgtC1INC40LfQvNC10L3QuNGC0Ywg0YLQtdCzINGBINC/0L7QvNC+0YnRjNGOINCw0YLRgNC40LHRg9GC0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgYXNgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCIgYXM9XCJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9pbmVydGlhLWxpbms+XFxuXG4gICAgICAgIC8vIFJlbmRlcnMgYXM6XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCIgYXM9XCJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9JbmVydGlhTGluaz5cXG5cbiAgICAgICAgLy8gUmVuZGVycyBhczpcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9idXR0b24+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YnV0dG9uIGhyZWY9XCIvbG9nb3V0XCIgdXNlOmluZXJ0aWE9XCJ7eyBtZXRob2Q6ICdwb3N0JyB9fVwiIHR5cGU9XCJidXR0b25cIj5Mb2dvdXQ8L2J1dHRvbj5cXG5cbiAgICAgICAgLy8gUmVuZGVycyBhczpcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9idXR0b24+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICdTdmVsdGUg0L/QvtC60LAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YIg0LTQuNC90LDQvNC40YfQtdGB0LrQuNC1INGN0LvQtdC80LXQvdGC0YssINC90L4g0JLRiyDQvNC+0LbQtdGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC00LjRgNC10LrRgtC40LLRgyBpbmVydGlhINC00LvRjyDQtNC+0YHRgtC40LbQtdC90LjRjyDRgtC10YUg0LbQtSDRgNC10LfRg9C70YzRgtCw0YLQvtCyLidcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+XG4gINCh0L7Qt9C00LDQvdC40LUgPGlubGluZUNvZGU+UE9TVDwvaW5saW5lQ29kZT4vPGlubGluZUNvZGU+UFVUPC9pbmxpbmVDb2RlPi88aW5saW5lQ29kZT5QQVRDSDwvaW5saW5lQ29kZT4gPGlubGluZUNvZGU+REVMRVRFPC9pbmxpbmVDb2RlPiDRgdGB0YvQu9C+0LogPGlubGluZUNvZGU+Jmx0O2EmZ3Q7PC9pbmxpbmVDb2RlPiDQvdC1INGA0LXQutC+0LzQtdC90LTRg9C10YLRgdGPLCDQv9C+0YHQutC+0LvRjNC60YMg0L7QvdC+INCy0YvQt9GL0LLQsNC10YIg0L/RgNC+0LHQu9C10LzRiyDRgSDQtNC+0YHRgtGD0L/QvdC+0YHRgtGM0Y4gXCJPcGVuIExpbmtcbiAgaW4gTmV3IFRhYi9XaW5kb3dcIiBhY2Nlc3NpYmlsaXR5IGlzc3Vlcy4gSW5zdGVhZCwgY29uc2lkZXIgdXNpbmcgYSBtb3JlIGFwcHJvcHJpYXRlIGVsZW1lbnQsIHN1Y2ggYXMgYXsnICd9XG4gIDxpbmxpbmVDb2RlPiZsdDtidXR0b24mZ3Q7PC9pbmxpbmVDb2RlPi5cbiAgICA8L05vdGljZT5cbiAgICA8aDI+e2DQnNC10YLQvtC0YH08L2gyPlxuICAgIDxwPntgWW91IGNhbiBzcGVjaWZ5IHRoZSBtZXRob2QgZm9yIGFuIEluZXJ0aWEgbGluayByZXF1ZXN0LiBUaGUgZGVmYXVsdCBpcyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCwgYnV0IHlvdSBjYW4gYWxzbyB1c2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUE9TVGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQVVRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUEFUQ0hgfTwvaW5saW5lQ29kZT57YCwgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YERFTEVURWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5Mb2dvdXQ8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSA8aW5lcnRpYS1saW5rPiBjb21wb25lbnQgaXMgYXV0b21hdGljYWxseSByZWdpc3RlcmVkIGJ5IHRoZSBJbmVydGlhIHBsdWdpbi4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5Mb2dvdXQ8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBpbmVydGlhLCBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCIgdXNlOmluZXJ0aWE9XCJ7eyBtZXRob2Q6ICdwb3N0JyB9fVwiPkxvZ291dDwvYT5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPkxvZ291dDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCU0LDQvdC90YvQtWB9PC9oMj5cbiAgICA8cD57YFlvdSBjYW4gYWRkIGRhdGEgdXNpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRhdGFgfTwvaW5saW5lQ29kZT57YCBhdHRyaWJ1dGUuIFRoaXMgY2FuIGJlIGFuIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9iamVjdGB9PC9pbmxpbmVDb2RlPntgLCBvciBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEZvcm1EYXRhYH08L2lubGluZUNvZGU+e2AgaW5zdGFuY2UuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvZW5kcG9pbnRcIiBtZXRob2Q9XCJwb3N0XCIgOmRhdGE9XCJ7IGZvbzogYmFyIH1cIj5TYXZlPC9pbmVydGlhLWxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgPGluZXJ0aWEtbGluaz4gY29tcG9uZW50IGlzIGF1dG9tYXRpY2FsbHkgcmVnaXN0ZXJlZCBieSB0aGUgSW5lcnRpYSBwbHVnaW4uJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9lbmRwb2ludFwiIG1ldGhvZD1cInBvc3RcIiBkYXRhPXt7IGZvbzogYmFyIH19PlNhdmU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2VuZHBvaW50XCIgbWV0aG9kPVwicG9zdFwiIGRhdGE9e3sgZm9vOiBiYXIgfX0+U2F2ZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCX0LDQs9C+0LvQvtCy0LrQuGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BoZWFkZXJzYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIGFsbG93cyB5b3UgdG8gYWRkIGN1c3RvbSBoZWFkZXJzIHRvIGFuIEluZXJ0aWEgbGluay4gRG8gbm90ZSB0aGF0IEluZXJ0aWEncyBoZWFkZXJzIHRha2UgcHJpb3JpdHkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgb3ZlcndyaXR0ZW4uYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvZW5kcG9pbnRcIiA6aGVhZGVycz1cInsgZm9vOiBiYXIgfVwiPlNhdmU8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSA8aW5lcnRpYS1saW5rPiBjb21wb25lbnQgaXMgYXV0b21hdGljYWxseSByZWdpc3RlcmVkIGJ5IHRoZSBJbmVydGlhIHBsdWdpbi4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2VuZHBvaW50XCIgaGVhZGVycz17eyBmb286IGJhciB9fT5TYXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YnV0dG9uIHVzZTppbmVydGlhPVwie3sgaHJlZjogJy9lbmRwb2ludCcsIGhlYWRlcnM6IHsgZm9vOiBiYXIgfSB9fVwiPlNhdmU8L2J1dHRvbj5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvZW5kcG9pbnRcIiBoZWFkZXJzPXt7IGZvbzogYmFyfX0+U2F2ZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCX0LDQvNC10L3QsGB9PC9oMj5cbiAgICA8cD57YFlvdSBjYW4gc3BlY2lmeSB0aGUgYnJvd3NlciBoaXN0b3J5IGJlaGF2aW91ci4gQnkgZGVmYXVsdCBwYWdlIHZpc2l0cyBwdXNoIChuZXcpIHN0YXRlIChgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGVgfTwvaW5saW5lQ29kZT57YCkgaW50byB0aGUgaGlzdG9yeSwgaG93ZXZlciBpdCdzIGFsc28gcG9zc2libGUgdG8gcmVwbGFjZSBzdGF0ZSAoYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlYH08L2lubGluZUNvZGU+e2ApIGJ5IHNldHRpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlcGxhY2VgfTwvaW5saW5lQ29kZT57YCBhdHRyaWJ1dGUgdG8gdHJ1ZS4gVGhpcyB3aWxsIGNhdXNlIHRoZSB2aXNpdCB0byByZXBsYWNlIHRoZSBjdXJyZW50IGhpc3Rvcnkgc3RhdGUsIGluc3RlYWQgb2YgYWRkaW5nIGEgbmV3IGhpc3Rvcnkgc3RhdGUgdG8gdGhlIHN0YWNrLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL1wiIHJlcGxhY2U+SG9tZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDxpbmVydGlhLWxpbms+IGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyZWQgYnkgdGhlIEluZXJ0aWEgcGx1Z2luLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIHJlcGxhY2UgaHJlZj1cIi9cIj5Ib21lPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL1wiIHVzZTppbmVydGlhPVwie3sgcmVwbGFjZTogdHJ1ZSB9fVwiPkhvbWU8L2E+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiIHJlcGxhY2U+SG9tZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCh0L7RhdGA0LDQvdC10L3QuNC1INGB0L7RgdGC0L7Rj9C90LjRj2B9PC9oMj5cbiAgICA8cD57YFlvdSBjYW4gcHJlc2VydmUgYSBwYWdlIGNvbXBvbmVudCdzIGxvY2FsIHN0YXRlIHVzaW5nIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZS1zdGF0ZWB9PC9pbmxpbmVDb2RlPntgIGF0dHJpYnV0ZS4gVGhpcyB3aWxsIHByZXZlbnQgYSBwYWdlIGNvbXBvbmVudCBmcm9tIGZ1bGx5IHJlLXJlbmRlcmluZy4gVGhpcyBpcyBlc3BlY2lhbGx5IGhlbHBmdWwgd2l0aCBmb3Jtcywgc2luY2UgeW91IGNhbiBhdm9pZCBtYW51YWxseSByZXBvcHVsYXRpbmcgaW5wdXQgZmllbGRzLCBhbmQgY2FuIGFsc28gbWFpbnRhaW4gYSBmb2N1c2VkIGlucHV0LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJxdWVyeVwiIHR5cGU9XCJ0ZXh0XCIgLz5cXG5cbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL3NlYXJjaFwiIDpkYXRhPVwieyBxdWVyeSB9XCIgcHJlc2VydmUtc3RhdGU+U2VhcmNoPC9pbmVydGlhLWxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgPGluZXJ0aWEtbGluaz4gY29tcG9uZW50IGlzIGF1dG9tYXRpY2FsbHkgcmVnaXN0ZXJlZCBieSB0aGUgSW5lcnRpYSBwbHVnaW4uJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17cXVlcnl9IC8+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3NlYXJjaFwiIGRhdGE9e3F1ZXJ5fSBwcmVzZXJ2ZVN0YXRlPlNlYXJjaDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEsIEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPGlucHV0IG9uOmNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17cXVlcnl9IC8+XFxuXG4gICAgICAgIDxidXR0b24gdXNlOmluZXJ0aWE9XCJ7eyBocmVmOiAnL3NlYXJjaCcsIGRhdGE6IHF1ZXJ5LCBwcmVzZXJ2ZVN0YXRlOiB0cnVlIH19XCI+U2VhcmNoPC9idXR0b24+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3NlYXJjaFwiIGRhdGE9e3F1ZXJ5fSBwcmVzZXJ2ZVN0YXRlPlNlYXJjaDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCh0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuGB9PC9oMj5cbiAgICA8cD57YFlvdSBjYW4gdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZS1zY3JvbGxgfTwvaW5saW5lQ29kZT57YCBhdHRyaWJ1dGUgdG8gcHJldmVudCBJbmVydGlhIGZyb20gYXV0b21hdGljYWxseSByZXNldHRpbmcgdGhlIHNjcm9sbCBwb3NpdGlvbiB3aGVuIG1ha2luZyB0aGUgdmlzaXQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvXCIgcHJlc2VydmUtc2Nyb2xsPkhvbWU8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSA8aW5lcnRpYS1saW5rPiBjb21wb25lbnQgaXMgYXV0b21hdGljYWxseSByZWdpc3RlcmVkIGJ5IHRoZSBJbmVydGlhIHBsdWdpbi4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBwcmVzZXJ2ZVNjcm9sbCBocmVmPVwiL1wiPkhvbWU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBpbmVydGlhLCBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxhIGhyZWY9XCIvXCIgdXNlOmluZXJ0aWE9XCJ7eyBwcmVzZXJ2ZVNjcm9sbDogdHJ1ZSB9fVwiPkhvbWU8L2E+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiIHByZXNlcnZlU2Nyb2xsPkhvbWU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2Nyb2xsLW1hbmFnZW1lbnRcIlxuICAgICAgfX0+e2BzY3JvbGwgbWFuYWdlbWVudGB9PC9hPntgIHBhZ2UuYH08L3A+XG4gICAgPGgyPntg0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuGB9PC9oMj5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bvbmx5YH08L2lubGluZUNvZGU+e2Agb3B0aW9uIGFsbG93cyB5b3UgdG8gcmVxdWVzdCBhIHN1YnNldCBvZiB0aGUgcHJvcHMgKGRhdGEpIGZyb20gdGhlIHNlcnZlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byB0aGUgc2FtZSBwYWdlLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgOm9ubHk9XCJbJ3VzZXJzJ11cIj5TaG93IGFjdGl2ZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDxpbmVydGlhLWxpbms+IGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyZWQgYnkgdGhlIEluZXJ0aWEgcGx1Z2luLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvdXNlcnM/YWN0aXZlPXRydWVcIiBvbmx5PXtbJ3VzZXJzJ119PlNob3cgYWN0aXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgdXNlOmluZXJ0aWE9XCJ7eyBvbmx5OiBbJ3VzZXJzJ10gfX1cIj5TaG93IGFjdGl2ZTwvYT5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvdXNlcnM/YWN0aXZlPXRydWVcIiBvbmx5PXtbJ3VzZXJzJ119PlNob3cgYWN0aXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3BhcnRpYWwtcmVsb2Fkc1wiXG4gICAgICB9fT57YHBhcnRpYWwgcmVsb2Fkc2B9PC9hPntgIHBhZ2UuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9