webpackHotUpdate_N_E("pages/error-handling",{

/***/ "./pages/error-handling.mdx":
/*!**********************************!*\
  !*** ./pages/error-handling.mdx ***!
  \**********************************/
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



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\error-handling.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <script>\n          export let status\n\n          $: title = {\n            503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n            500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n            404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n            403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n          }[status]\n\n          $: description = {\n            503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n            500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n            404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n            403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n          }[status]\n        </script>\n\n        <div>\n          <h1>{title}</h1>\n          <div>{description}</div>\n        </div>\n      "], ["\n        <script>\n          export let status\\n\n          $: title = {\n            503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n            500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n            404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n            403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n          }[status]\\n\n          $: description = {\n            503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n            500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n            404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n            403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n          }[status]\n        </script>\\n\n        <div>\n          <h1>{title}</h1>\n          <div>{description}</div>\n        </div>\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import React from 'react'\n\n        export default function ErrorPage({ status }) {\n          const title = {\n            503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n            500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n            404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n            403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n          }[status]\n\n          const description = {\n            503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n            500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n            404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n            403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n          }[status]\n\n          return (\n            <div>\n              <h1>{title}</h1>\n              <div>{description}</div>\n            </div>\n          )\n        }\n      "], ["\n        import React from 'react'\\n\n        export default function ErrorPage({ status }) {\n          const title = {\n            503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n            500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n            404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n            403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n          }[status]\\n\n          const description = {\n            503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n            500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n            404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n            403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n          }[status]\\n\n          return (\n            <div>\n              <h1>{title}</h1>\n              <div>{description}</div>\n            </div>\n          )\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <template>\n          <div>\n            <h1>{{ title }}</h1>\n            <div>{{ description }}</div>\n          </div>\n        </template>\n\n        <script>\n        export default {\n          props: {\n            status: Number,\n          },\n          computed: {\n            title() {\n              return {\n                503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n                500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n                404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n                403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n              }[this.status]\n            },\n            description() {\n              return {\n                503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n                500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n                404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n                403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n              }[this.status]\n            },\n          },\n        }\n        </script>\n      "], ["\n        <template>\n          <div>\n            <h1>{{ title }}</h1>\n            <div>{{ description }}</div>\n          </div>\n        </template>\\n\n        <script>\n        export default {\n          props: {\n            status: Number,\n          },\n          computed: {\n            title() {\n              return {\n                503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n                500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n                404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n                403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n              }[this.status]\n            },\n            description() {\n              return {\n                503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n                500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n                404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n                403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n              }[this.status]\n            },\n          },\n        }\n        </script>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        # todo\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        use Throwable;\n        use Inertia\\Inertia;\n\n        /**\n         * \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0430.\n         *\n         * @param  \\Throwable  $e\n         * @return \\Throwable\n         */\n        public function render($request, Throwable $e)\n        {\n            $response = parent::render($request, $e);\n\n            if (!app()->environment('local') && in_array($response->status(), [500, 503, 404, 403])) {\n                return Inertia::render('Error', ['status' => $response->status()])\n                    ->toResponse($request)\n                    ->setStatusCode($response->status());\n            } else if ($response->status() === 419) {\n                return back()->with([\n                    'message' => 'The page expired, please try again.',\n                ]);\n            }\n\n            return $response;\n        }\n      "], ["\n        use Throwable;\n        use Inertia\\\\Inertia;\\n\n        /**\n         * \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0430.\n         *\n         * @param  \\\\Throwable  $e\n         * @return \\\\Throwable\n         */\n        public function render($request, Throwable $e)\n        {\n            $response = parent::render($request, $e);\\n\n            if (!app()->environment('local') && in_array($response->status(), [500, 503, 404, 403])) {\n                return Inertia::render('Error', ['status' => $response->status()])\n                    ->toResponse($request)\n                    ->setStatusCode($response->status());\n            } else if ($response->status() === 419) {\n                return back()->with([\n                    'message' => 'The page expired, please try again.',\n                ]);\n            }\\n\n            return $response;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Обработка ошибок',
  links: [{
    url: '#разработка',
    name: 'Разработка'
  }, {
    url: '#продакшен',
    name: 'Продакшен'
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
      lineNumber: 30,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430 \u0438\u0437 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u0441\u0442\u043E\u0440\u043E\u043D \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u043E\u0439 - \u044D\u0442\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, Laravel \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/facade/ignition"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 166
    }
  }), "Ignition"), ", \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0445\u043E\u0440\u043E\u0448\u043E \u043E\u0442\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043E\u0432\u043A\u0443 \u0441\u0442\u0435\u043A\u0430 \u043F\u0440\u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0412\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441 XHR (\u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Inertia) \u0438 \u0441\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0412\u0430\u043C \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043F\u0430\u0442\u044C\u0441\u044F \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0441\u0435\u0442\u0438 \u0432 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "Inertia \u0440\u0435\u0448\u0430\u0435\u0442 \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u0432\u0441\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0435 Inertia \u0432 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0412\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u044D\u0442\u043E\u0442 \u0437\u0430\u043F\u0440\u043E\u0441 \u0447\u0435\u0440\u0435\u0437 XHR!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "my-6 relative rounded overflow-hidden bg-gray-500",
    style: {
      paddingTop: '80.5%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "absolute inset-0 w-full h-full flex items-center justify-center text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("iframe", {
    className: "absolute inset-0 w-full h-full",
    src: "https://player.vimeo.com/video/363562630?autoplay=1&loop=1&muted=1&background=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "Production"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "\u0412 production \u0412\u044B \u0437\u0430\u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435 \u0438\u043D\u0435\u0440\u0446\u0438\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0412\u0430\u0448\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u043B \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043E\u0448\u0438\u0431\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      description: 'Расширить метод render() в Вашем приложении App\\Exceptions\\Handler.php.',
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
      lineNumber: 50,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043A\u0430\u043A \u0432 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u043C \u0432\u044B\u0448\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 95
    }
  }, "Error"), ". \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u044D\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C. \u0412\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJyb3ItaGFuZGxpbmcubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInBhZGRpbmdUb3AiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsa0JBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxhQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJO0FBRlcsQ0FBYjtBQVdQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRUFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscXdCQUFpSztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ25MLFlBQVE7QUFEMkssR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBakssOHNCQU5LLEVBU0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2OUJBVEssRUFVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHczQkFWSyxFQVdMO0FBQUssYUFBUyxFQUFDLG1EQUFmO0FBQW1FLFNBQUssRUFBRTtBQUN4RUUsZ0JBQVUsRUFBRTtBQUQ0RCxLQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0Y7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFIRSxFQUlGO0FBQVEsYUFBUyxFQUFDLGdDQUFsQjtBQUFtRCxPQUFHLEVBQUMsaUZBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRSxDQVhLLEVBaUJMLDBEQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNGJBakJLLEVBa0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJLLEVBbUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbXlDQW5CSyxFQW9CTCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlAsVUFBSSxFQUFFLFNBRHVCO0FBRTdCUSxjQUFRLEVBQUUsS0FGbUI7QUFHN0JDLGlCQUFXLEVBQUUsMkVBSGdCO0FBSTdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSnlCLEtBQUQsRUE0QjNCO0FBQ0RYLFVBQUksRUFBRSxPQURMO0FBRURRLGNBQVEsRUFBRSxNQUZUO0FBR0RFLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQTVCMkIsQ0FBOUI7QUFrQ0ksV0FBTyxFQUFDLG9CQWxDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJLLEVBdURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK2JBQTBGO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMUYsdXBCQXZESyxFQXdETCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlgsVUFBSSxFQUFFLFFBRHVCO0FBRTdCUSxjQUFRLEVBQUUsTUFGbUI7QUFHN0JFLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQW9DM0I7QUFDRFgsVUFBSSxFQUFFLE9BREw7QUFFRFEsY0FBUSxFQUFFLEtBRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBcEMyQixFQThEM0I7QUFDRFgsVUFBSSxFQUFFLFFBREw7QUFFRFEsY0FBUSxFQUFFLE1BRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBOUQyQixDQUE5QjtBQXNGSSxXQUFPLEVBQUMsb0JBdEZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4REssQ0FBUDtBQWdKRDtLQXBKdUJQLFU7QUFzSnhCO0FBQ0FBLFVBQVUsQ0FBQ1EsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcnJvci1oYW5kbGluZy5mMDc4MzQ3NjBlOGE5M2QxN2E4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQntCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GA0LDQt9GA0LDQsdC+0YLQutCwJyxcbiAgICBuYW1lOiAn0KDQsNC30YDQsNCx0L7RgtC60LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/RgNC+0LTQsNC60YjQtdC9JyxcbiAgICBuYW1lOiAn0J/RgNC+0LTQsNC60YjQtdC9J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QumB9PC9oMT5cbiAgICA8aDI+e2DQoNCw0LfRgNCw0LHQvtGC0LrQsGB9PC9oMj5cbiAgICA8cD57YNCe0LTQvdCwINC40Lcg0L/RgNC40Y/RgtC90YvRhSDRgdGC0L7RgNC+0L0g0YDQsNCx0L7RgtGLINGBINGB0LXRgNCy0LXRgNC90L7QuSDRgdGA0LXQtNC+0LkgLSDRjdGC0L4g0LLRgdGC0YDQvtC10L3QvdCw0Y8g0L7QsdGA0LDQsdC+0YLQutCwINC40YHQutC70Y7Rh9C10L3QuNC5LCDQutC+0YLQvtGA0YPRjiDQktGLINC/0L7Qu9GD0YfQsNC10YLQtSDQsdC10YHQv9C70LDRgtC90L4uINCd0LDQv9GA0LjQvNC10YAsIExhcmF2ZWwg0L/QvtGB0YLQsNCy0LvRj9C10YLRgdGPINGBIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZmFjYWRlL2lnbml0aW9uXCJcbiAgICAgIH19PntgSWduaXRpb25gfTwvYT57YCwg0LrRgNCw0YHQuNCy0YvQvCDQuNC90YHRgtGA0YPQvNC10L3RgtC+0Lwg0YHQvtC+0LHRidC10L3QuNGPINC+0LEg0L7RiNC40LHQutCw0YUsINC60L7RgtC+0YDRi9C5INC+0YLQvtCx0YDQsNC20LDQtdGCINGF0L7RgNC+0YjQviDQvtGC0YTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90L3Rg9GOINGC0YDQsNGB0YHQuNGA0L7QstC60YMg0YHRgtC10LrQsCDQv9GA0Lgg0LvQvtC60LDQu9GM0L3QvtC5INGA0LDQt9GA0LDQsdC+0YLQutC1LmB9PC9wPlxuICAgIDxwPntg0J/RgNC+0LHQu9C10LzQsCDQsiDRgtC+0LwsINGH0YLQviDQtdGB0LvQuCDQktGLINC00LXQu9Cw0LXRgtC1INC30LDQv9GA0L7RgSBYSFIgKNGH0YLQviDQtNC10LvQsNC10YIgSW5lcnRpYSkg0Lgg0YHRgtCw0LvQutC40LLQsNC10YLQtdGB0Ywg0YEg0L7RiNC40LHQutC+0Lkg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCwg0JLQsNC8INC+0LHRi9GH0L3QviDQvtGB0YLQsNC10YLRgdGPINC60L7Qv9Cw0YLRjNGB0Y8g0LLQviDQstC60LvQsNC00LrQtSDRgdC10YLQuCDQsiDQuNC90YHRgtGA0YPQvNC10L3RgtCw0YUg0YDQsNC30YDQsNCx0L7RgtC60Lgg0JLQsNGI0LXQs9C+INCx0YDQsNGD0LfQtdGA0LAuYH08L3A+XG4gICAgPHA+e2BJbmVydGlhINGA0LXRiNCw0LXRgiDRjdGC0YMg0L/RgNC+0LHQu9C10LzRgywg0L/QvtC60LDQt9GL0LLQsNGPINCy0YHQtSDQvtGC0LLQtdGC0Ysg0L3QtSBJbmVydGlhINCyINC80L7QtNCw0LvRjNC90L7QvCDRgNC10LbQuNC80LUuINCt0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0JLRiyDQv9C+0LvRg9GH0LjRgtC1INGC0LDQutC+0Lkg0LbQtSDQutGA0LDRgdC40LLRi9C5INC+0YLRh9C10YIg0L7QsSDQvtGI0LjQsdC60LDRhSwg0LTQsNC20LUg0LXRgdC70Lgg0JLRiyDRgdC00LXQu9Cw0LvQuCDRjdGC0L7RgiDQt9Cw0L/RgNC+0YEg0YfQtdGA0LXQtyBYSFIhYH08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJteS02IHJlbGF0aXZlIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktNTAwXCIgc3R5bGU9e3tcbiAgICAgIHBhZGRpbmdUb3A6ICc4MC41JSdcbiAgICB9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbVwiPtCX0LDQs9GA0YPQt9C60LAmaGVsbGlwOzwvZGl2PlxuICA8aWZyYW1lIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbFwiIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8zNjM1NjI2MzA/YXV0b3BsYXk9MSZsb29wPTEmbXV0ZWQ9MSZiYWNrZ3JvdW5kPTFcIj48L2lmcmFtZT5cbiAgICA8L2Rpdj5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj7QntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINC80L7QtNCw0LvRjNC90L7QtSDQv9C+0LLQtdC00LXQvdC40LUg0L/RgNC10LTQvdCw0LfQvdCw0YfQtdC90L4g0YLQvtC70YzQutC+INC00LvRjyDRhtC10LvQtdC5INGA0LDQt9GA0LDQsdC+0YLQutC4LjwvTm90aWNlPlxuICAgIDxoMj57YFByb2R1Y3Rpb25gfTwvaDI+XG4gICAgPHA+e2DQkiBwcm9kdWN0aW9uINCS0Ysg0LfQsNGF0L7RgtC40YLQtSDQstC10YDQvdGD0YLRjCDQv9GA0LDQstC40LvRjNC90YvQuSDQvtGC0LLQtdGCINC+0LEg0L7RiNC40LHQutC1INC40L3QtdGA0YbQuNC4INCy0LzQtdGB0YLQviDRgtC+0LPQviwg0YfRgtC+0LHRiyDQv9C+0LvQsNCz0LDRgtGM0YHRjyDQvdCwINC80L7QtNCw0LvRjNC90L7QtSDQv9C+0LLQtdC00LXQvdC40LUuINCU0LvRjyDRjdGC0L7Qs9C+INCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQvtCx0L3QvtCy0LjRgtGMINC+0LHRgNCw0LHQvtGC0YfQuNC6INC40YHQutC70Y7Rh9C10L3QuNC5INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINCS0LDRiNC10Lkg0L/Qu9Cw0YLRhNC+0YDQvNGLLCDRh9GC0L7QsdGLINC+0L0g0LLQvtC30LLRgNCw0YnQsNC7INC90LDRgdGC0YDQsNC40LLQsNC10LzRg9GOINGB0YLRgNCw0L3QuNGG0YMg0L7RiNC40LHQutC4LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Cg0LDRgdGI0LjRgNC40YLRjCDQvNC10YLQvtC0IHJlbmRlcigpINCyINCS0LDRiNC10Lwg0L/RgNC40LvQvtC20LXQvdC40LggQXBwXFxcXEV4Y2VwdGlvbnNcXFxcSGFuZGxlci5waHAuJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgdXNlIFRocm93YWJsZTtcbiAgICAgICAgdXNlIEluZXJ0aWFcXFxcSW5lcnRpYTtcXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqINCf0L7QtNCz0L7RgtC+0LLQuNGC0Ywg0LjRgdC60LvRjtGH0LXQvdC40LUg0LTQu9GPINGA0LXQvdC00LXRgNC40L3Qs9CwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gIFxcXFxUaHJvd2FibGUgICRlXG4gICAgICAgICAqIEByZXR1cm4gXFxcXFRocm93YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGZ1bmN0aW9uIHJlbmRlcigkcmVxdWVzdCwgVGhyb3dhYmxlICRlKVxuICAgICAgICB7XG4gICAgICAgICAgICAkcmVzcG9uc2UgPSBwYXJlbnQ6OnJlbmRlcigkcmVxdWVzdCwgJGUpO1xcblxuICAgICAgICAgICAgaWYgKCFhcHAoKS0+ZW52aXJvbm1lbnQoJ2xvY2FsJykgJiYgaW5fYXJyYXkoJHJlc3BvbnNlLT5zdGF0dXMoKSwgWzUwMCwgNTAzLCA0MDQsIDQwM10pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZXJ0aWE6OnJlbmRlcignRXJyb3InLCBbJ3N0YXR1cycgPT4gJHJlc3BvbnNlLT5zdGF0dXMoKV0pXG4gICAgICAgICAgICAgICAgICAgIC0+dG9SZXNwb25zZSgkcmVxdWVzdClcbiAgICAgICAgICAgICAgICAgICAgLT5zZXRTdGF0dXNDb2RlKCRyZXNwb25zZS0+c3RhdHVzKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkcmVzcG9uc2UtPnN0YXR1cygpID09PSA0MTkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFjaygpLT53aXRoKFtcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnID0+ICdUaGUgcGFnZSBleHBpcmVkLCBwbGVhc2UgdHJ5IGFnYWluLicsXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XFxuXG4gICAgICAgICAgICByZXR1cm4gJHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgICMgdG9kb1xuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YNCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0LrQsNC6INCyINC/0YDQuNCy0LXQtNC10L3QvdC+0Lwg0LLRi9GI0LUg0L/RgNC40LzQtdGA0LUg0LzRiyDQstC+0LfQstGA0LDRidCw0LXQvCDQutC+0LzQv9C+0L3QtdC90YIg0YHRgtGA0LDQvdC40YbRiyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BFcnJvcmB9PC9pbmxpbmVDb2RlPntgLiDQktCw0Lwg0L3Rg9C20L3QviDQsdGD0LTQtdGCINGN0YLQviDRgdC+0LfQtNCw0YLRjC4g0JLQvtGCINC/0YDQuNC80LXRgCDQutC+0LzQv9C+0L3QtdC90YLQsCDRgdGC0YDQsNC90LjRhtGLINC+0YjQuNCx0LrQuCwg0LrQvtGC0L7RgNGL0Lkg0JLRiyDQvNC+0LbQtdGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyINC60LDRh9C10YHRgtCy0LUg0L7RgtC/0YDQsNCy0L3QvtC5INGC0L7Rh9C60LguYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxuICAgICAgICAgICAgPGRpdj57eyBkZXNjcmlwdGlvbiB9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHN0YXR1czogTnVtYmVyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIDUwMzogJzUwMzog0KHQtdGA0LLQuNGBINC90LXQtNC+0YHRgtGD0L/QtdC9JyxcbiAgICAgICAgICAgICAgICA1MDA6ICc1MDA6INCe0YjQuNCx0LrQsCDRgdC10YDQstC10YDQsCcsXG4gICAgICAgICAgICAgICAgNDA0OiAnNDA0OiDQodGC0YDQsNC90LjRhtCwINC90LUg0L3QsNC50LTQtdC90LAnLFxuICAgICAgICAgICAgICAgIDQwMzogJzQwMzog0JfQsNC/0YDQtdGJ0LXQvdC+JyxcbiAgICAgICAgICAgICAgfVt0aGlzLnN0YXR1c11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICA1MDM6ICfQmNC30LLQuNC90LjRgtC1LCDQvNGLINC/0YDQvtCy0L7QtNC40Lwg0YLQtdGF0L3QuNGH0LXRgdC60L7QtSDQvtCx0YHQu9GD0LbQuNCy0LDQvdC40LUuINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0L/RgNC+0LHRg9C50YLQtSDQv9C+0LfQttC1LicsXG4gICAgICAgICAgICAgICAgNTAwOiAn0KPQv9GBLCDRh9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6INC90LAg0L3QsNGI0LjRhSDRgdC10YDQstC10YDQsNGFLicsXG4gICAgICAgICAgICAgICAgNDA0OiAn0Jog0YHQvtC20LDQu9C10L3QuNGOLCDQvdC1INGD0LTQsNC70L7RgdGMINC90LDQudGC0Lgg0YHRgtGA0LDQvdC40YbRgywg0LrQvtGC0L7RgNGD0Y4g0JLRiyDQuNGJ0LXRgtC1LicsXG4gICAgICAgICAgICAgICAgNDAzOiAn0Jog0YHQvtC20LDQu9C10L3QuNGOLCDQtNC+0YHRgtGD0L8g0Log0Y3RgtC+0Lkg0YHRgtGA0LDQvdC40YbQtSDQt9Cw0L/RgNC10YnQtdC9LicsXG4gICAgICAgICAgICAgIH1bdGhpcy5zdGF0dXNdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvclBhZ2UoeyBzdGF0dXMgfSkge1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0ge1xuICAgICAgICAgICAgNTAzOiAnNTAzOiDQodC10YDQstC40YEg0L3QtdC00L7RgdGC0YPQv9C10L0nLFxuICAgICAgICAgICAgNTAwOiAnNTAwOiDQntGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAnLFxuICAgICAgICAgICAgNDA0OiAnNDA0OiDQodGC0YDQsNC90LjRhtCwINC90LUg0L3QsNC50LTQtdC90LAnLFxuICAgICAgICAgICAgNDAzOiAnNDAzOiDQl9Cw0L/RgNC10YnQtdC90L4nLFxuICAgICAgICAgIH1bc3RhdHVzXVxcblxuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgNTAzOiAn0JjQt9Cy0LjQvdC40YLQtSwg0LzRiyDQv9GA0L7QstC+0LTQuNC8INGC0LXRhdC90LjRh9C10YHQutC+0LUg0L7QsdGB0LvRg9C20LjQstCw0L3QuNC1LiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LbQtS4nLFxuICAgICAgICAgICAgNTAwOiAn0KPQv9GBLCDRh9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6INC90LAg0L3QsNGI0LjRhSDRgdC10YDQstC10YDQsNGFLicsXG4gICAgICAgICAgICA0MDQ6ICfQmiDRgdC+0LbQsNC70LXQvdC40Y4sINC90LUg0YPQtNCw0LvQvtGB0Ywg0L3QsNC50YLQuCDRgdGC0YDQsNC90LjRhtGDLCDQutC+0YLQvtGA0YPRjiDQktGLINC40YnQtdGC0LUuJyxcbiAgICAgICAgICAgIDQwMzogJ9CaINGB0L7QttCw0LvQtdC90LjRjiwg0LTQvtGB0YLRg9C/INC6INGN0YLQvtC5INGB0YLRgNCw0L3QuNGG0LUg0LfQsNC/0YDQtdGJ0LXQvS4nLFxuICAgICAgICAgIH1bc3RhdHVzXVxcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGV4cG9ydCBsZXQgc3RhdHVzXFxuXG4gICAgICAgICAgJDogdGl0bGUgPSB7XG4gICAgICAgICAgICA1MDM6ICc1MDM6INCh0LXRgNCy0LjRgSDQvdC10LTQvtGB0YLRg9C/0LXQvScsXG4gICAgICAgICAgICA1MDA6ICc1MDA6INCe0YjQuNCx0LrQsCDRgdC10YDQstC10YDQsCcsXG4gICAgICAgICAgICA0MDQ6ICc0MDQ6INCh0YLRgNCw0L3QuNGG0LAg0L3QtSDQvdCw0LnQtNC10L3QsCcsXG4gICAgICAgICAgICA0MDM6ICc0MDM6INCX0LDQv9GA0LXRidC10L3QvicsXG4gICAgICAgICAgfVtzdGF0dXNdXFxuXG4gICAgICAgICAgJDogZGVzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICA1MDM6ICfQmNC30LLQuNC90LjRgtC1LCDQvNGLINC/0YDQvtCy0L7QtNC40Lwg0YLQtdGF0L3QuNGH0LXRgdC60L7QtSDQvtCx0YHQu9GD0LbQuNCy0LDQvdC40LUuINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0L/RgNC+0LHRg9C50YLQtSDQv9C+0LfQttC1LicsXG4gICAgICAgICAgICA1MDA6ICfQo9C/0YEsINGH0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0Log0L3QsCDQvdCw0YjQuNGFINGB0LXRgNCy0LXRgNCw0YUuJyxcbiAgICAgICAgICAgIDQwNDogJ9CaINGB0L7QttCw0LvQtdC90LjRjiwg0L3QtSDRg9C00LDQu9C+0YHRjCDQvdCw0LnRgtC4INGB0YLRgNCw0L3QuNGG0YMsINC60L7RgtC+0YDRg9GOINCS0Ysg0LjRidC10YLQtS4nLFxuICAgICAgICAgICAgNDAzOiAn0Jog0YHQvtC20LDQu9C10L3QuNGOLCDQtNC+0YHRgtGD0L8g0Log0Y3RgtC+0Lkg0YHRgtGA0LDQvdC40YbQtSDQt9Cw0L/RgNC10YnQtdC9LicsXG4gICAgICAgICAgfVtzdGF0dXNdXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==