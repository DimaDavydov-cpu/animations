(self["webpackChunk_fiverr_private_penta_playground"] = self["webpackChunk_fiverr_private_penta_playground"] || []).push([[396],{

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const {
  DEFAULT_LOCALE
} = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/lib/constants/index.js");
/**
 * The default context to use when context does not exists over the current runtime
 * @type {FiverrContext}
 */
exports.A = {
  locale: DEFAULT_LOCALE,
  computedLocale: DEFAULT_LOCALE,
  userId: 0,
  country: '',
  countryCode: '',
  pageCtxId: '',
  isPro: false,
  abTests: {},
  userAgent: '',
  knownCrawler: false,
  csrfToken: '',
  browserLanguage: '',
  currency: '',
  pathParameters: {},
  queryParameters: {},
  userGuid: '',
  url: '',
  ip: '',
  referrer: '',
  organizationId: '',
  experience: {
    isBuyer: false,
    isSeller: false,
    isBusiness: false,
    value: ''
  },
  isMobile: false,
  isTouch: false,
  isIos: false
};

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ withBrowserContext_getContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js
var emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js
var constants = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js");
;// ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/constants.js
/**
 * The error message to be logged when trying to access `getContext` api while browser context does not exist.
 * @type {String}
 */
const CONTEXT_DOES_NOT_EXIST = 'Browser context does not exist, please ensure the run time owner sets one on the window scope before using this API';
;// ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js




/**
 * Returns the current available context for browser run time environment.
 * @returns {FiverrContext}
 */
const getContext = () => {
  const context = lodash_default().get(window, 'initialData.FiverrContext');
  if (!context) {
    emitter/* default */.A.error({
      message: CONTEXT_DOES_NOT_EXIST
    });
    return constants/* DEFAULT_CONTEXT */.A;
  }
  return context;
};
/* harmony default export */ const withBrowserContext_getContext = (getContext);

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/lib/constants/index.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * @type {String} Default locale for translations
 */
exports.DEFAULT_LOCALE = 'en-US';

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const {
  DEFAULT_LOCALE
} = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/lib/constants/index.js");
/**
 * The default context to use when context does not exists over the current runtime
 * @type {FiverrContext}
 */
exports.A = {
  locale: DEFAULT_LOCALE,
  computedLocale: DEFAULT_LOCALE,
  userId: 0,
  country: '',
  countryCode: '',
  pageCtxId: '',
  isPro: false,
  abTests: {},
  userAgent: '',
  knownCrawler: false,
  csrfToken: '',
  browserLanguage: '',
  currency: '',
  pathParameters: {},
  queryParameters: {},
  userGuid: '',
  url: '',
  ip: '',
  referrer: '',
  organizationId: '',
  experience: {
    isBuyer: false,
    isSeller: false,
    isBusiness: false,
    value: ''
  },
  isMobile: false,
  isTouch: false,
  isIos: false
};

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ withBrowserContext_getContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js
var emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js
var constants = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js");
;// ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/constants.js
/**
 * The error message to be logged when trying to access `getContext` api while browser context does not exist.
 * @type {String}
 */
const CONTEXT_DOES_NOT_EXIST = 'Browser context does not exist, please ensure the run time owner sets one on the window scope before using this API';
;// ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js




/**
 * Returns the current available context for browser run time environment.
 * @returns {FiverrContext}
 */
const getContext = () => {
  const context = lodash_default().get(window, 'initialData.FiverrContext');
  if (!context) {
    emitter/* default */.A.error({
      message: CONTEXT_DOES_NOT_EXIST
    });
    return constants/* DEFAULT_CONTEXT */.A;
  }
  return context;
};
/* harmony default export */ const withBrowserContext_getContext = (getContext);

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/lib/constants/index.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * @type {String} Default locale for translations
 */
exports.DEFAULT_LOCALE = 'en-US';

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ I18n)
/* harmony export */ });
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _injectTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/injectTemplates/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


const I18n = _ref => {
  let {
    k,
    templates = {},
    params = {},
    locale: localeFromProps
  } = _ref;
  if (!k) {
    return null;
  }
  const {
    locale: localeFromContext
  } = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
  const locale = localeFromProps || localeFromContext;
  let output;
  try {
    output = i18n.t(k, _objectSpread(_objectSpread({}, params), {}, {
      $scope: locale
    }));
  } catch (e) {
    output = k;
  }
  return (0,_injectTemplates__WEBPACK_IMPORTED_MODULE_1__/* .injectTemplates */ .t)(output, templates);
};

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/injectTemplates/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ injectTemplates),
  C: () => (/* binding */ shouldInjectTemplates)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js
var emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js");
;// ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/injectTemplates/constants.js
/**
 * The regex used to match the name of the template
 * @type {RegExp}
 */const TEMPLATE_ELEMENT_NAMES_REGEX = /<t name=['"]?([\w-]*?)['"]? ?\/? ?>/g;
/**
 * The regex used to match the translated content for the templates - open and close template element
 * @type {RegExp}
 */
const TEMPLATE_OPEN_CLOSE_ELEMENT_CONTENT_REGEX = /<t name=['"]?[\w-]+['"]?\s?>(.+?)<\/t>/g;
/**
 * The regex used to match the translated content for the templates - self closing template element
 * @type {RegExp}
 */
const TEMPLATE_SELF_CLOSING_ELEMENT_CONTENT_REGEX = /<t name=['"]?[\w-]+['"]? ?\/? ?>/g;
/**
 * The regex used to match br templates that are not self closed
 * @type {RegExp}
 */
const TEMPLATE_BR_OPEN_ONLY_REGEX = /<t name=['"]?br+['"]? ?>/g;
const TEMPLATE_BR_SELF_CLOSING_STRING = "<t name='br' />";
/**
 * The error message logged when passed an invalid template.
 * @type {String}
 */
const INVALID_TEMPLATE_TYPE = 'Templates must be functions, instead got:';
/**
 * The error message logged when passed an unknown template name.
 * @type {String}
 */
const UNKNOWN_TEMPLATE_NAME = 'Templates must be configured, but the following template name is not:';
;// ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/injectTemplates/index.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



const PREDEFINED_TEMPLATES = {
  b: text => /*#__PURE__*/react.createElement("b", null, text),
  u: text => /*#__PURE__*/react.createElement("u", null, text),
  i: text => /*#__PURE__*/react.createElement("i", null, text),
  span: text => /*#__PURE__*/react.createElement("span", null, text),
  br: () => /*#__PURE__*/react.createElement("br", null)
};
/**
 * Logs an error message when an invalid template type was used.
 * @param {*} template The template used.
 */
const logInvalidTemplateError = template => {
  emitter/* default */.A.error([INVALID_TEMPLATE_TYPE, typeof template, "(".concat(JSON.stringify(template), ")")].join(' '));
};
/**
 * Logs an error message when an unknown template name was used.
 * @param {*} templateName The template used.
 */
const logUnknownTemplateError = templateName => {
  emitter/* default */.A.error("".concat(UNKNOWN_TEMPLATE_NAME, " ").concat(templateName));
};
/**
 * Checks whether a given function is actually a function.
 * @param {Function} fn The function to check.
 * @return {Boolean}
 */
const isFunction = fn => typeof fn === 'function';
/**
 * Validates that the passed templates:
 * 1. Exists (either as predefined templates or in the custom templates).
 * 2. Are functions.
 * @param {String[]} templateNamesArray The template names matches.
 * @param {Record.<String, Function>} templates The templates passed merged with the predefined templates
 */
const validateTemplates = (templateNamesArray, templates) => {
  // Every second item should be a template.
  // Ex: When we split "<t name='link'>Click</t><t name='bold'>Here</t>" by its regex TEMPLATE_ELEMENT_NAMES_REGEX
  // The output is: ["", "link", "Click</t>", "bold", "Here</t>"]
  // You can see that indexes 1 and 3 contains the names of the templates
  templateNamesArray.filter((templateName, i) => i % 2 === 1 && !templates[templateName]).forEach(logUnknownTemplateError);
  Object.values(templates).filter(template => !isFunction(template)).forEach(logInvalidTemplateError);
};
/**
 * Split the translation by both:
 * 1) open & close elements - <t name='tName'>Text</t>
 * 2) self-closing elements - <t name='br' />
 * Example: translations is set to be: "Hi<t name='br' /><t name='link'>Click</t> Here"
 * First split, by TEMPLATE_OPEN_CLOSE_ELEMENT_CONTENT_REGEX will make it:
 * ["Hi<t name='br'/>", "Click", " Here"]
 * Then we iterate over each item and split it again by TEMPLATE_SELF_CLOSING_ELEMENT_CONTENT_REGEX
 * First item is split to ["Hi", ""] The first item is being added to templateContentArray.
 * Then we add an empty string to represent the <t> element itself, and then we add the second item in the split array
 * To represent that it's an empty element.
 * The second and third part of the origin array do not split and being added as is
 * We end up with:
 * ["Hi", "", "", "Click", " Here"]
 * Every second item in this array represent content of specific template:
 * index 1 - br template
 * index 3 - link template
 * @param {String} translation - The translation we got from i18n.
 * @returns {String[]}
 */
const getContentArray = translation => {
  const templateContentArray = [];
  translation.split(TEMPLATE_OPEN_CLOSE_ELEMENT_CONTENT_REGEX).forEach(translationPart1 => {
    translationPart1.split(TEMPLATE_SELF_CLOSING_ELEMENT_CONTENT_REGEX).forEach((translationPart2, i) => {
      if (i % 2 === 1) {
        templateContentArray.push(''); // every second item should be an empty text because it's self-closing element
      }
      templateContentArray.push(translationPart2);
    });
  });
  return templateContentArray;
};
/**
 * Finds all template patterns and wraps them with the template (component) that matches its index,
 * while cleaning up the templates' declaration symbols.
 * @param {String} originTranslation The translation into which the templates will be injected.
 * @param {Record.<String, Function>} customTemplates The templates that will be injected.
 * @return {React.Component}
 */
const injectTemplates = function (originTranslation) {
  let customTemplates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const translation = originTranslation.replace(TEMPLATE_BR_OPEN_ONLY_REGEX, TEMPLATE_BR_SELF_CLOSING_STRING);
  const templateNamesArray = translation.split(TEMPLATE_ELEMENT_NAMES_REGEX);
  const contentArray = getContentArray(translation);
  const templates = _objectSpread(_objectSpread({}, PREDEFINED_TEMPLATES), customTemplates);
  validateTemplates(templateNamesArray, templates);
  const wrappers = contentArray.map((translationPart, index) => {
    const templateName = templateNamesArray[index];
    const templateFunc = templates[templateName];
    const isTemplate = index % 2 === 1; // Every second item is a match (a template)
    if (!isTemplate || !templateFunc || !isFunction(templateFunc)) {
      return translationPart;
    }
    return templateFunc(translationPart);
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, wrappers.map((wrapper, index) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: index
  }, wrapper)));
};
/**
 * Determines whether templates should be injected to the given translation
 * @param {String} originTranslation The translation into which the templates will be injected.
 * @return {Boolean}
 */
const shouldInjectTemplates = originTranslation => Boolean(originTranslation.match(TEMPLATE_ELEMENT_NAMES_REGEX));


/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _injectTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/injectTemplates/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


function translate(key) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!key) {
    throw new Error('key must be provided to `translate`.');
  }
  let locale;
  if (options.locale) {
    locale = options.locale;
  } else {
    locale = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().locale;
  }
  const data = _objectSpread(_objectSpread({}, options.params), {}, {
    $scope: locale
  });
  let output;
  try {
    output = i18n.t(key, data);
  } catch (e) {
    output = key;
  }
  if ((0,_injectTemplates__WEBPACK_IMPORTED_MODULE_1__/* .shouldInjectTemplates */ .C)(output)) {
    return (0,_injectTemplates__WEBPACK_IMPORTED_MODULE_1__/* .injectTemplates */ .t)(output, options.templates);
  }
  return output;
}

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jq: () => (/* binding */ browser_numberFormat)
});

// UNUSED EXPORTS: BLOCKED_COUNTRIES, BLOCKED_COUNTRIES_SET, CURRENCY_CODES, CURRENCY_STYLES, DATETIME_ELEMENT_STYLES, DEFAULT_FIVERR_LANGUAGE, DEFAULT_FIVERR_LOCALE, LOCALE_TO_SUBDOMAIN_MAP, MINIMUM_VALIDATED_LANGUAGE_LEVEL, NUMBER_STYLES, SUPPORTED_FIVERR_LANGUAGES, SUPPORTED_FIVERR_LOCALES, SUPPORTED_FIVERR_LOCALES_KEYS, SUPPORTED_FORMATTING_LOCALES, SUPPORTED_FORMATTING_LOCALES_KEYS, SUPPORTED_SELLER_LANGUAGES, calculateFormattingLocale, currencyFormat, dateTimeFormat, fileSizeFormat, getBuyerAssumedLanguage, getCurrencySymbol, getFiverrLocaleByFormattingLocale, getFiverrLocaleByLanguageCode, getFiverrLocaleNativeName, getFormattingLocaleNativeName, getLocaleSubdomain, getLocalizationContext, getSellerLanguageNativeName, getSellerValidatedLanguages, getShortLanguageCode, isExistCurrencyCode, isSupportedFiverrLocale, isSupportedFormattingLocale, isSupportedSellerLanguage, replaceLocaleSubdomain, setWindowLocalizationContext, withLocalizationContext, withoutPseudoLocalization

// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js
var emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js");
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/validateOptions/index.js
/**
 * Validate the formatter options.
 * This function removes all unsupported properties from the 'options' object, while validating
 * the supported options.
 * @param {Object} CONFIG_MAP Mapping of all possible formatter configurations.
 * @param {Object} options Formatter options object to be validated.
 * @returns {Object} Validated formatter options.
 */const validateOptions = (CONFIG_MAP, options) => {
  const validated = {};
  // Assign all default values
  for (const [prop, value] of Object.entries(CONFIG_MAP)) {
    if (value.defaultValue) {
      validated[value.mapTo || prop] = value.defaultValue;
    }
  }
  for (const [inputProp, value] of Object.entries(options)) {
    // Check option key is whitelisted in CONFIG_MAP
    if (CONFIG_MAP[inputProp]) {
      const outputProp = CONFIG_MAP[inputProp].mapTo || inputProp;
      validated[outputProp] = value;
      // Assign validatorFallbackValue if validation function exists and fails
      const validator = CONFIG_MAP[inputProp].validator;
      if (validator && !validator(value)) {
        validated[outputProp] = CONFIG_MAP[inputProp].validatorFallbackValue;
      }
    }
  }
  return validated;
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/currency/constants.js
const CURRENCY_STYLES = {
  CODE: 'code',
  SYMBOL: 'symbol'
};
const CURRENCY_FORMATTING_OPTIONS = {
  style: {
    mapTo: 'currencyDisplay',
    validator: value => Object.values(CURRENCY_STYLES).includes(value),
    validatorFallbackValue: CURRENCY_STYLES.SYMBOL,
    defaultValue: CURRENCY_STYLES.SYMBOL
  },
  minimumFractionDigits: {},
  maximumFractionDigits: {}
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/currencySymbol/constants.js
const DOLLAR_SYMBOL = '$';
const CURRENCY_STYLE_TO_OVERRIDE = 'symbol';
const DOLLAR_SYMBOL_OVERRIDE = {
  MXN: 'MX',
  AUD: 'A',
  CAD: 'CA'
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/currencySymbol/index.js

/**
 * Returns the currency symbol of a specific currency in a specific formattingLocale.
 * Formatting locale is optional. If it's not passed, it is taken from the localizationContext
 * @param {Object} localizationContext - The localization context in the runtime.
 * injected dynamically by the relevant wrapper (withBrowserContext / withMainContext / withModuleContext)
 * @param {string} currencyCode - The currency code you would like to get its symbol, for ex: 'USD'
 * @param {string} formattingLocale - The formatting locale you want to get the symbol in. for ex: 'fr-FR'
 * @returns {string} - The currency symbol. examples: '$' / 'US $' / '€' / 'MX$'
 */
const getCurrencySymbol = _ref => {
  let {
    localizationContext,
    currencyCode,
    formattingLocale = ''
  } = _ref;
  const amount = 1;
  const resolvedFormattingLocale = formattingLocale || localizationContext.formattingLocale;
  const formattedString = amount.toLocaleString(resolvedFormattingLocale, {
    style: 'currency',
    currency: currencyCode
  });
  const parsedOptions = {
    currencyDisplay: CURRENCY_STYLE_TO_OVERRIDE
  };
  const overriddenCurrencySymbolString = overrideCurrencySymbol({
    formattedString,
    currencyCode,
    parsedOptions
  });
  return overriddenCurrencySymbolString.replace(/[0-9]|\.|,/g, '').trim();
};
/**
 * In a few cases (currencies) that the symbol might be '$' we need to make sure to override it,
 * so we won't display '$' as a currency that is not USD.
 * List of currencies we override: CAD AUD MXN
 * Note: We are overriding the symbol only the user requests display of a symbol (and not code)
 * @param {string} formattedString - The formatting string of the entire currency string (ex: '123 $'),
 * @param {string} currencyCode - The currency code that ie being used to format the currency (ex: 'AUD')
 * @param {Object} parsedOptions - The options object the formatter used (passed to Intl) in order to format
 * @returns {string} - The formatted string manipulated with the override currency symbol in it
 */
const overrideCurrencySymbol = _ref2 => {
  let {
    formattedString,
    currencyCode,
    parsedOptions
  } = _ref2;
  if (DOLLAR_SYMBOL_OVERRIDE[currencyCode] && (parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.currencyDisplay) === CURRENCY_STYLE_TO_OVERRIDE && formattedString.indexOf(DOLLAR_SYMBOL_OVERRIDE[currencyCode]) === -1) {
    return formattedString.replace(DOLLAR_SYMBOL, "".concat(DOLLAR_SYMBOL_OVERRIDE[currencyCode]).concat(DOLLAR_SYMBOL));
  }
  return formattedString;
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/toParts/constants.js
const FORMATTING_PARTS = {
  INTEGER: 'integer',
  DECIMAL: 'decimal',
  FRACTION: 'fraction',
  MINUS_SIGN: 'minusSign',
  LITERAL: 'literal',
  PERCENTAGE: 'percentage',
  CURRENCY: 'currency'
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/toParts/index.js



const isNumeric = c => /\d/.test(c);
const isSpace = c => /\s/.test(c);
const isPercentage = c => c === '%';
const isMinusSign = c => /—|−|-|–|\(|\)/.test(c);
const buildIntegerPart = num => ({
  type: FORMATTING_PARTS.INTEGER,
  value: num
});
const buildLiteralPart = char => ({
  type: FORMATTING_PARTS.LITERAL,
  value: char
});
const buildPercentagePart = char => ({
  type: FORMATTING_PARTS.PERCENTAGE,
  value: char
});
const buildMinusSignPart = char => ({
  type: FORMATTING_PARTS.MINUS_SIGN,
  value: char
});
const buildDecimalPart = char => ({
  type: FORMATTING_PARTS.DECIMAL,
  value: char
});
const buildCurrencyPart = currency => ({
  type: FORMATTING_PARTS.CURRENCY,
  value: currency
});
const buildFractionPart = fraction => ({
  type: FORMATTING_PARTS.FRACTION,
  value: fraction
});
/**
 * Take a formatted string of number or currency and returns it split into an array,
 * almost the same as the non-stable Intl method - formatToParts.
 * We are making 2 iterations (one for the left/integer side and one for the right/fractions side)
 * and then we are concatenating those 2 arrays.
 * Example:
 * 'US$1,234.5' -> [
 *      { type: 'currency', value: 'US$'},
 *      { type: 'integer', value: '1,234'},
 *      { type: 'decimal', value: '.'},
 *      { type: 'fraction', value: '5'},
 * ]
 * @param {Object} options - should include whatever is needed by those 2 iterations
 * @returns {Array}
 */
const toParts = options => [...toPartsInteger(options), ...toPartsFraction(options)];
/**
 * Iterates over the formattedString and splits it into an array of different types.
 * This iteration ends when we get the integer type
 * @param {Object} options
 * @returns {Array} - Array of parts, starting from the left side (beginning) of the string until the integer.
 */
const toPartsInteger = options => {
  const {
    localizationContext,
    parsedOptions,
    formattingLocale,
    currencyCode,
    formattedString,
    formattedNumber
  } = options;
  const parts = [];
  let i = 0;
  while (i < formattedString.length) {
    const char = formattedString.charAt(i);
    if (isNumeric(char)) {
      /*
      If the char is numeric it means that this is the last char i need to iterate over.
      This is because the last part of the 'integer' side of the formatted string is the integer
      When we get to the first numeric character we are building the integer using
      the formattedNumber and Intl.
       */
      const integer = Math.abs(parseInt(formattedNumber, 10));
      const integerOptions = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      };
      parts.push(buildIntegerPart(new Intl.NumberFormat(formattingLocale, integerOptions).format(integer)));
      break;
    } else if (isSpace(char)) {
      parts.push(buildLiteralPart(char));
    } else if (isPercentage(char)) {
      parts.push(buildPercentagePart(char));
    } else if (isMinusSign(char)) {
      parts.push(buildMinusSignPart(char));
    } else {
      /*
      We get here if the character is not numeric, not a white space, not a percentage and not a minus.
      This means that it must be the currency symbol / code.
      In this case we are using a util to understand what is the code / symbol we should add
      (instead of using the formattedString itself, because it's impossible due to spaces etc)
      Then we moving our iterator according to the length of the currency symbol we added so we
      keep iterating over the formattedString
       */
      const currencySymbol = parsedOptions.currencyDisplay === CURRENCY_STYLES.CODE ? currencyCode : getCurrencySymbol({
        localizationContext,
        currencyCode,
        formattingLocale
      });
      parts.push(buildCurrencyPart(currencySymbol));
      i = i + currencySymbol.length;
      continue;
    }
    i++;
  }
  return parts;
};
/**
 * Iterates over the formattedString and splits it into an array of different types.
 * This iteration ends when we get to the fraction type (starts from the end)
 * @param {Object} options
 * @returns {Array} - Array of parts, starting from the right side (end) of the string until the fraction digits.
 */
const toPartsFraction = options => {
  const {
    localizationContext,
    formattingLocale,
    currencyCode,
    formattedString,
    parsedOptions
  } = options;
  const parts = [];
  const decimalValue = 1.1.toLocaleString(formattingLocale).substring(1, 2);
  const hasFractionDigits = formattedString.indexOf(decimalValue) !== -1;
  let i = formattedString.length - 1;
  while (i >= 0) {
    const char = formattedString.charAt(i);
    if (isNumeric(char)) {
      /*
      If the char is numeric it means that this is the last char i need to iterate over.
      If the origin number has no fraction digits it means we get to the integer so we should break,
      because it is handled by the other method (toPartsInteger).
      If the origin number has fraction digits we should add those fraction digits to the parts array.
      We should break because this is the last part of the 'fraction' side of the formatted string
      When we get to the first numeric character we are building the fraction number using an internal loop
      until we getting a char that is not numeric.
      Then we are adding manually the decimal sign (we cannot continue iterating because we will end up
      with a non-numeric char and in the ELSE (treated as currency)
       */
      if (hasFractionDigits) {
        let fraction = char;
        let nextIndex = i - 1;
        let nextChar = formattedString.charAt(nextIndex);
        while (isNumeric(nextChar)) {
          fraction = "".concat(nextChar).concat(fraction);
          nextIndex--;
          nextChar = formattedString.charAt(nextIndex);
        }
        parts.unshift(buildFractionPart(fraction));
        parts.unshift(buildDecimalPart(decimalValue));
      }
      break;
    } else if (isSpace(char)) {
      parts.unshift(buildLiteralPart(char));
    } else if (isPercentage(char)) {
      parts.unshift(buildPercentagePart(char));
    } else if (isMinusSign(char)) {
      parts.unshift(buildMinusSignPart(char));
    } else {
      /*
      We get here if the character is not numeric, not a white space, not a percentage and not a minus.
      This means that it must be the currency symbol / code.
      In this case we are using a util to understand what is the code / symbol we should add
      (instead of using the formattedString itself, because it's impossible due to spaces etc)
      Then we moving our iterator according to the length of the currency symbol we added so we
      keep iterating over the formattedString
       */
      const currencySymbol = parsedOptions.currencyDisplay === CURRENCY_STYLES.CODE ? currencyCode : getCurrencySymbol({
        localizationContext,
        currencyCode,
        formattingLocale
      });
      parts.unshift(buildCurrencyPart(currencySymbol));
      i = i - currencySymbol.length;
      continue;
    }
    i--;
  }
  return parts;
};

;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/constants.js
const ERROR_MESSAGES = {
  INTL_IS_NOT_DEFINED: 'Intl is not defined'
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/number/constants.js
const NUMBER_STYLES = {
  DECIMAL: 'decimal',
  PERCENT: 'percent'
};
const NUMBER_FORMATTING_OPTIONS = {
  style: {
    validator: value => Object.values(NUMBER_STYLES).includes(value),
    validatorFallbackValue: NUMBER_STYLES.DECIMAL,
    defaultValue: NUMBER_STYLES.DECIMAL
  },
  minimumFractionDigits: {},
  maximumFractionDigits: {}
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/number/index.js





const NUMBER_PARTS = {
  INTEGER: 'integer',
  DECIMAL: 'decimal',
  FRACTION: 'fraction',
  MINUS_SIGN: 'minusSign',
  LITERAL: 'literal',
  PERCENTAGE: 'percentage'
};
/**
 * Format a number.
 * Use this to format numbers, either decimal (i.e '3', '5.3') or percentages (i.e '40%', '98.5%').
 * Return the number as a string, formatted to user formatting locale.
 * @param {Object} localizationContext - the localization context that is being injected
 * dynamically according to the run time env by one of the wrappers - withBrowserContext / withMainContext / withModuleContext
 * @param {number} value Number to be formatted.
 * @param {Object} [options={}] Optional formatting configurations.
 * @returns {string|number} Formatted value string.
 */
const numberFormat = _ref => {
  let {
    localizationContext,
    value,
    options = {}
  } = _ref;
  const fallbackValue = (options.fallbackValue || value).toString();
  try {
    if (Intl === undefined) {
      emitter/* default */.A.warn(ERROR_MESSAGES.INTL_IS_NOT_DEFINED);
      return fallbackValue;
    }
    if (!localizationContext || Object.keys(localizationContext).length === 0) {
      return fallbackValue;
    }
    const {
      asNumber,
      asParts
    } = options;
    const formattingLocale = options.formattingLocale || localizationContext.formattingLocale;
    const parsedOptions = parseOptions(options);
    const formattedString = new Intl.NumberFormat(formattingLocale, parsedOptions).format(value);
    if (asNumber || asParts) {
      const formattedNumber = parseFloat(formattedString.replace(/,/g, '.'));
      return asNumber ? formattedNumber : toParts({
        localizationContext,
        formattingLocale,
        formattedString,
        formattedNumber
      });
    }
    return formattedString;
  } catch (e) {
    emitter/* default */.A.error(e, {
      value,
      options,
      formatter: 'numberFormat'
    });
    return fallbackValue;
  }
};
/**
 * Parse formatter options.
 * This method validates the properties in the options object and overrides properties for Fiverr custom formatting rules.
 * @param {Object} options Optional formatting configurations.
 * @returns {Object} Validated formatting configurations.
 */
const parseOptions = options => {
  const validatedOptions = validateOptions(NUMBER_FORMATTING_OPTIONS, options);
  if (options.noFractionDigits) {
    validatedOptions.minimumFractionDigits = 0;
    validatedOptions.maximumFractionDigits = 0;
  }
  if (options.asNumber || options.asParts) {
    validatedOptions.useGrouping = false;
  }
  return validatedOptions;
};

;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/currency/index.js






const CURRENCY_PARTS = {
  INTEGER: 'integer',
  DECIMAL: 'decimal',
  FRACTION: 'fraction',
  MINUS_SIGN: 'minusSign',
  LITERAL: 'literal',
  CURRENCY: 'currency'
};
/**
 * Format a currency.
 * Use this to format currencies.
 * Return the number as a string, formatted to user formatting locale.
 * @param {Object} localizationContext - the localization context that is being injected
 * dynamically according to the run time env by one of the wrappers - withBrowserContext / withMainContext / withModuleContext
 * @param {number} value Amount to be formatted.
 * @param {string} currencyCode Currency code.
 * @param {Object} [options={}] Optional formatting configurations.
 * @returns {string|number} Formatted value string.
 */
const currencyFormat = _ref => {
  let {
    localizationContext,
    value,
    currencyCode,
    options = {}
  } = _ref;
  const fallbackValue = options.fallbackValue || "".concat(value, " ").concat(currencyCode);
  try {
    if (Intl === undefined) {
      emitter/* default */.A.warn(ERROR_MESSAGES.INTL_IS_NOT_DEFINED);
      return fallbackValue;
    }
    if (!localizationContext || Object.keys(localizationContext).length === 0) {
      return fallbackValue;
    }
    const {
      asNumber,
      asParts
    } = options;
    const formattingLocale = options.formattingLocale || localizationContext.formattingLocale;
    const parsedOptions = currency_parseOptions(value, currencyCode, options);
    const formattedString = new Intl.NumberFormat(formattingLocale, parsedOptions).format(value);
    const formattedStringOverriddenCurrency = overrideCurrencySymbol({
      formattedString,
      parsedOptions,
      currencyCode
    });
    if (asNumber || asParts) {
      const formattedNumber = parseFloat(formattedStringOverriddenCurrency.replace(/[^0-9,.-]/gi, '').replace(/,/g, '.'));
      return asNumber ? formattedNumber : toParts({
        localizationContext,
        parsedOptions,
        formattingLocale,
        currencyCode,
        formattedString: formattedStringOverriddenCurrency,
        formattedNumber
      });
    }
    return formattedStringOverriddenCurrency;
  } catch (error) {
    emitter/* default */.A.error(error, {
      value,
      options,
      formatter: 'currencyFormat'
    });
    return fallbackValue;
  }
};
/**
 * Parse formatter options.
 * This method validates the properties in the options object and overrides properties for Fiverr custom formatting rules.
 * @param {Object} options Optional formatting configurations.
 * @returns {Object} Validated formatting configurations.
 */
const currency_parseOptions = (value, currencyCode, options) => {
  const validatedOptions = validateOptions(CURRENCY_FORMATTING_OPTIONS, options);
  if (value % 1 === 0 && !Object.prototype.hasOwnProperty.call(validatedOptions, 'maximumFractionDigits') && !Object.prototype.hasOwnProperty.call(validatedOptions, 'minimumFractionDigits')) {
    validatedOptions.maximumFractionDigits = 0;
    validatedOptions.minimumFractionDigits = 0;
  }
  if (options.noFractionDigits) {
    validatedOptions.minimumFractionDigits = 0;
    validatedOptions.maximumFractionDigits = 0;
  }
  validatedOptions.style = 'currency';
  validatedOptions.currency = currencyCode;
  if (options.asNumber || options.asParts) {
    validatedOptions.useGrouping = false;
  }
  return validatedOptions;
};

;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/shared/constants.js
/**
 * The default localization context to use when context does not exists over the current runtime
 * @type {Object}
 */const DEFAULT_LOCALIZATION_CONTEXT = {
  browserLanguage: '',
  countryCode: '',
  currency: '',
  experienceLocale: 'en-US',
  formattingLocale: 'en-GB',
  shouldFormat: true
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/dateTime/constants.js
const DATETIME_ELEMENT_STYLES = {
  NUMERIC: 'numeric',
  TWO_DIGIT: '2-digit',
  LONG: 'long',
  SHORT: 'short'
};
const DATETIME_FORMATTING_OPTIONS = {
  year: {},
  month: {},
  day: {},
  hour: {},
  minute: {},
  second: {},
  dateStyle: {},
  hour12: {},
  weekday: {}
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/dateTime/index.js





/**
 * Format a date / time.
 * Use this to format dates and times.
 * Return the date / time as a string, formatted to user formatting locale.
 * @param {Object} localizationContext - the localization context that is being injected
 * dynamically according to the run time env by one of the wrappers - withBrowserContext / withMainContext / withModuleContext
 * @param {Date | string} value date to be formatted.
 * @param {Object} [options={}] Optional formatting configurations.
 * @returns {string} Formatted value string.
 */
const dateTimeFormat = _ref => {
  let {
    localizationContext = {},
    value,
    options = {}
  } = _ref;
  const fallbackLocale = (localizationContext === null || localizationContext === void 0 ? void 0 : localizationContext.formattingLocale) || DEFAULT_LOCALIZATION_CONTEXT.formattingLocale;
  const fallbackValue = options.fallbackValue || new Intl.DateTimeFormat(fallbackLocale, {
    year: DATETIME_ELEMENT_STYLES.NUMERIC,
    month: DATETIME_ELEMENT_STYLES.SHORT,
    day: DATETIME_ELEMENT_STYLES.TWO_DIGIT,
    hour: DATETIME_ELEMENT_STYLES.TWO_DIGIT,
    minute: DATETIME_ELEMENT_STYLES.TWO_DIGIT
  }).format(value);
  try {
    if (Intl === undefined) {
      emitter/* default */.A.warn(ERROR_MESSAGES.INTL_IS_NOT_DEFINED);
      return fallbackValue;
    }
    if (!localizationContext || Object.keys(localizationContext).length === 0) {
      return fallbackValue;
    }
    const formattingLocale = options.formattingLocale || localizationContext.formattingLocale;
    const parsedOptions = dateTime_parseOptions(options);
    return new Intl.DateTimeFormat(formattingLocale, parsedOptions).format(value);
  } catch (e) {
    emitter/* default */.A.error(e, {
      value,
      options,
      formatter: 'dateTimeFormat'
    });
    return fallbackValue;
  }
};
/**
 * Parse formatter options.
 * This method validates the properties in the options object and overrides properties for Fiverr custom formatting rules.
 * @param {Object} options Optional formatting configurations.
 * @returns {Object} Validated formatting configurations.
 */
const dateTime_parseOptions = options => validateOptions(DATETIME_FORMATTING_OPTIONS, options);

;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/shortLanguageCode/index.js
const shortLanguageCode_getShortLanguageCode = language => language.substr(0, 2);
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/supportedFiverrLocales/constants.js
const constants_SUPPORTED_FIVERR_LOCALES_MAP = {
  'de-DE': 'Deutsch',
  'en-US': 'English',
  es: 'Español',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
  'nl-NL': 'Nederlands',
  'pt-BR': 'Português'
};
const SUPPORTED_FIVERR_LANGUAGES = {
  EN: 'en',
  PT: 'pt',
  IT: 'it',
  ES: 'es',
  DE: 'de',
  NL: 'nl',
  FR: 'fr'
};
const constants_LOCALE_TO_SUBDOMAIN_MAP = {
  'en-US': 'www',
  'de-DE': 'de',
  es: 'es',
  'fr-FR': 'fr',
  'pt-BR': 'br',
  'it-IT': 'it',
  'nl-NL': 'nl'
};
const DEFAULT_FIVERR_LOCALE = 'en-US';
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/supportedFiverrLocales/index.js


const supportedFiverrLocales_DEFAULT_FIVERR_LOCALE = DEFAULT_FIVERR_LOCALE;
const supportedFiverrLocales_SUPPORTED_FIVERR_LOCALES = Object.keys(constants_SUPPORTED_FIVERR_LOCALES_MAP);
const DEFAULT_FIVERR_LANGUAGE = shortLanguageCode_getShortLanguageCode(supportedFiverrLocales_DEFAULT_FIVERR_LOCALE);
const supportedFiverrLocales_SUPPORTED_FIVERR_LANGUAGES = (/* unused pure expression or super */ null && (SUPPORTED_FIVERR_LANGUAGES_CONST));

/**
 * Build a map of the supported Fiverr locales in the form of:
 * {
 *     EN_US: 'en-US',
 *     DE_DE: 'de-DE',
 *     ES: 'es,
 *     ...
 * }
 * So consumers can check for specific locale in their code.
 * @returns {{localeKey: String}} - the native name of the locale
 */
const localesKeys = {};
Object.keys(constants_SUPPORTED_FIVERR_LOCALES_MAP).forEach(locale => {
  const localeKey = locale.toUpperCase().replace(/-/g, '_');
  localesKeys[localeKey] = locale;
});
const SUPPORTED_FIVERR_LOCALES_KEYS = (/* unused pure expression or super */ null && (localesKeys));
/**
 * Check if Fiverr supports this locale.
 * Meaning: we have a Fiverr experience in this locale (UI language).
 * @param locale {string} - check for existence as-is, no trimming, etc.
 * @returns {boolean} - the locale is supported or not
 */
const isSupportedFiverrLocale = locale => !!SUPPORTED_FIVERR_LOCALES_MAP[locale];
/**
 * Returns the native name of the locale.
 * @param locale {string} - check for existence as-is, no trimming, etc.
 * @returns {string} - the native name of the locale
 */
const getFiverrLocaleNativeName = locale => SUPPORTED_FIVERR_LOCALES_MAP[locale] || locale;
const MAIN_SUBDOMAIN = constants_LOCALE_TO_SUBDOMAIN_MAP[supportedFiverrLocales_DEFAULT_FIVERR_LOCALE];
const AQUARIUM_PREFIX = 'aq-';
const subdomainMatchGroup = Object.values(constants_LOCALE_TO_SUBDOMAIN_MAP).join('|');
const IS_FIVERR_COM_REGEX = new RegExp("^((".concat(subdomainMatchGroup, ")\\.){1,2}(dev\\.){0,1}fiverr.com$"));
/**
 * Add target subdomain to hostname
 *
 * @param {string} hostname
 * @param {string} targetSubdomain
 * @returns {string} local site hostname
 */
const replaceLocaleSubdomain = (hostname, targetSubdomain) => {
  const subdomains = hostname.split('.');
  const currentSubdomain = Object.values(LOCALE_TO_SUBDOMAIN_MAP).find(subdomain => subdomains.includes(subdomain));
  const currentSubdomainIndex = subdomains.indexOf(currentSubdomain);
  if (isSameSubdomain(currentSubdomain, targetSubdomain)) {
    return hostname;
  }
  // target locale is English and we're on a subsystem of Fiverr (e.g Fiverr Business, Aquarium etc)
  if (targetSubdomain === MAIN_SUBDOMAIN && !IS_FIVERR_COM_REGEX.test(hostname)) {
    // only remove the current subdomain
    subdomains.splice(currentSubdomainIndex, 1);
  } else if (subdomains[0].startsWith(AQUARIUM_PREFIX) && currentSubdomainIndex === -1) {
    // Aquarium (default locale)
    // inserting target subdomain after Aquarium id
    subdomains.splice(1, 0, targetSubdomain);
  } else if (currentSubdomainIndex !== -1) {
    // replacing existing subdomain
    subdomains.splice(currentSubdomainIndex, 1, targetSubdomain);
  } else {
    // might happen on Fiverr Business (default locale)
    // appending target subdomain at the beginning of the hostname
    subdomains.splice(0, 0, targetSubdomain);
  }
  return subdomains.join('.');
};
/**
 * Checks if `current` and `target` subdomains point to the same local site.
 * Usually, we want both of them to be equal by value, but on Aquarium or Fiverr Business
 * or other Fiverr subsystems, there's on `www` when browsing the English site, so in that
 * case, `taret` will be `www` but `current` will be empty.
 *
 * @param {string} current current subdomain
 * @param {string} target target subdomain
 * @returns {boolean} whether both subdomains point to the same local site.
 */
const isSameSubdomain = (current, target) => current === target || target === MAIN_SUBDOMAIN && !current;
/**
 * Convert locale to its matching subdomain (e.g "en-US" -> "www", "pt-BR" -> "br").
 * Fallback is the main subdomain which is "www".
 * @param {string} locale
 * @returns the matching subdomain
 */
const getLocaleSubdomain = locale => LOCALE_TO_SUBDOMAIN_MAP[locale] || MAIN_SUBDOMAIN;
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/supportedFormattingLocales/constants.js
const constants_SUPPORTED_FORMATTING_LOCALES_MAP = {
  'en-US': 'English (United States)',
  'en-GB': 'English (United Kingdom)',
  'en-AU': 'English (Australia)',
  'en-CA': 'English (Canada)',
  'de-DE': 'Deutsch (Deutschland)',
  'de-AT': 'Deutsch (Österreich)',
  'es-ES': 'Español (España)',
  'es-MX': 'Español (México)',
  'fr-FR': 'Français (France)',
  'fr-CA': 'Français (Canada)',
  'it-IT': 'Italiano (Italia)',
  'nl-NL': 'Nederlands (Nederland)',
  'pt-BR': 'Português (Brasil)',
  'pt-PT': 'Português (Portugal)'
};
const constants_FORMATTING_LOCALE_FALLBACK_MAP = {
  'es-US': 'es-MX',
  'es-AR': 'es-MX',
  'es-BO': 'es-MX',
  'es-CL': 'es-MX',
  'es-CO': 'es-MX',
  'es-CR': 'es-MX',
  'es-DO': 'es-MX',
  'es-EC': 'es-MX',
  'es-GT': 'es-MX',
  'es-HN': 'es-MX',
  'es-NI': 'es-MX',
  'es-PA': 'es-MX',
  'es-PE': 'es-MX',
  'es-PR': 'es-MX',
  'es-PY': 'es-MX',
  'es-SV': 'es-MX',
  'es-UY': 'es-MX',
  'es-VE': 'es-MX',
  es: 'es-ES'
};
const DEFAULT_FORMATTING_LOCALE = 'en-GB';
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/supportedFormattingLocales/index.js



const supportedFormattingLocales_DEFAULT_FORMATTING_LOCALE = DEFAULT_FORMATTING_LOCALE;
const SUPPORTED_FORMATTING_LOCALES = Object.keys(constants_SUPPORTED_FORMATTING_LOCALES_MAP);
const DEFAULT_FORMATTING_LANGUAGE = shortLanguageCode_getShortLanguageCode(supportedFormattingLocales_DEFAULT_FORMATTING_LOCALE);
/**
 * Build a map of the supported Formatting locales in the form of:
 * {
 *     EN_US: 'en-US',
 *     DE_DE: 'de-DE',
 *     ES: 'es,
 *     ...
 * }
 * So consumers can check for specific formatting locale in their code.
 * @returns {{localeKey: String}} - the native name of the formatting locale
 */
const supportedFormattingLocales_localesKeys = {};
Object.keys(constants_SUPPORTED_FORMATTING_LOCALES_MAP).forEach(locale => {
  const localeKey = locale.toUpperCase().replace(/-/g, '_');
  supportedFormattingLocales_localesKeys[localeKey] = locale;
});
const SUPPORTED_FORMATTING_LOCALES_KEYS = (/* unused pure expression or super */ null && (supportedFormattingLocales_localesKeys));
/**
 * Calculate the formatting locale
 *
 * Current logic (prioritized):
 * - If browserLanguage = fiverrLanguage (fiverrLocale prefix) AND browserLocale is supported formatting locale -
 *      return browserLocale as formattingLocale.
 * - If fiverrLanguage + countryCode is supported formatting locale -
 *      return fiverrLanguage + countryCode as formatting locale.
 * - If fiverrLanguage = 'en' -
 *      return DEFAULT_FORMATTING_LOCALE as formatting locale.
 * - If fiverrLanguage + countryCode exists in FORMATTING_LOCALE_FALLBACK_MAP -
 *      return formatting locale from mapping.
 * - If fiverrLocale exists in FORMATTING_LOCALE_FALLBACK_MAP -
 *      return formatting locale from mapping.
 * - If none of the above -
 *      return fiverrLocale as formattingLocale, if not supplied - return the default formatting locale
 *
 * @param {FormattingLocaleParams} {{ locale: String, browserLanguage: String, countryCode: String }} -
 *      The locale, country code and the browser language
 * @returns {string} - the calculated formatting locale (e.g 'en-GB' / 'es-MX')
 */
const calculateFormattingLocale = _ref => {
  let {
    locale,
    browserLanguage,
    countryCode
  } = _ref;
  // Fix Safari browser issue
  // @see https://bugs.webkit.org/show_bug.cgi?id=163096
  browserLanguage = normalizeBrowserLanguage(browserLanguage);
  const browserLanguageShort = browserLanguage && getShortLanguageCode(browserLanguage);
  const fiverrLanguageShort = locale && getShortLanguageCode(locale);
  if (browserLanguageShort === fiverrLanguageShort && isSupportedFormattingLocale(browserLanguage)) {
    return browserLanguage;
  }
  const fiverrLangWithCountryCode = "".concat(fiverrLanguageShort, "-").concat(countryCode);
  if (isSupportedFormattingLocale(fiverrLangWithCountryCode)) {
    return fiverrLangWithCountryCode;
  }
  if (fiverrLanguageShort === DEFAULT_FORMATTING_LANGUAGE) {
    return supportedFormattingLocales_DEFAULT_FORMATTING_LOCALE;
  }
  return FORMATTING_LOCALE_FALLBACK_MAP[fiverrLangWithCountryCode] || FORMATTING_LOCALE_FALLBACK_MAP[locale] || locale || supportedFormattingLocales_DEFAULT_FORMATTING_LOCALE;
};
/**
 * Normalize the browser language string (i.e uppercase the country code)
 * @param browserLanguage {string} - the browser language of the user
 * @returns {string} - the normalized form of the browser language
 */
const normalizeBrowserLanguage = browserLanguage => browserLanguage && browserLanguage.replace(/-(.{2})/, country => country.toUpperCase());
/**
 * Check if a locale is a valid formatting locale.
 * @param locale {string} - check for existence as-is, no trimming, etc.
 * @returns {boolean} - the locale is supported or not
 */
const isSupportedFormattingLocale = locale => !!locale && !!SUPPORTED_FORMATTING_LOCALES_MAP[locale];
/**
 * Returns the native name of the formatting locale.
 * @param locale {string} - check for existence as-is, no trimming, etc.
 * @returns {string} - the native name of the formatting locale
 */
const getFormattingLocaleNativeName = locale => SUPPORTED_FORMATTING_LOCALES_MAP[locale] || locale;
/**
 * Get a formatting locales corresponding Fiverr locale.
 * @param formattingLocale {string} - check for existence as-is, no trimming, etc.
 * @returns {string} - the corresponding Fiverr locale.
 */
const getFiverrLocaleByFormattingLocale = formattingLocale => supportedFiverrLocales_SUPPORTED_FIVERR_LOCALES.find(fiverrLocale => shortLanguageCode_getShortLanguageCode(fiverrLocale) === shortLanguageCode_getShortLanguageCode(formattingLocale));
/**
 * Get a Fiverr locale with corresponding language code.
 * @param languageCode {string} - language code. Examples: de, fr, it
 * @returns {string|undefined} - the corresponding Fiverr locale.
 */
const getFiverrLocaleByLanguageCode = languageCode => SUPPORTED_FIVERR_LOCALES.find(fiverrLocale => getShortLanguageCode(fiverrLocale) === languageCode);
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/fileSize/constants.js
const FILE_SIZE_FORMATTING_OPTIONS = {
  maximumFractionDigits: {
    defaultValue: 2
  }
};
const K = 1024;
const FILE_SIZE_TEMPLATES = [fileSize => "".concat(fileSize, " byte"), fileSize => "".concat(fileSize, " kB"), fileSize => "".concat(fileSize, " MB"), fileSize => "".concat(fileSize, " GB"), fileSize => "".concat(fileSize, " TB"), fileSize => "".concat(fileSize, " PB"), fileSize => "".concat(fileSize, " EB"), fileSize => "".concat(fileSize, " ZB"), fileSize => "".concat(fileSize, " YB")];
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/fileSize/index.js





/**
 * Format a file size.
 * Returns the file size as a string, formatted and localized.
 * Based on the implementation from https://stackoverflow.com/question s/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript.
 * @param {Object} localizationContext - the localization context that is being injected
 * dynamically according to the run time env by one of the wrappers - withBrowserContext / withMainContext / withModuleContext
 * @param {number} bytes The file's size in bytes.
 * @param {Object} [options={}] Optional formatting configurations.
 * @returns {string} Formatted value string.
 */
const fileSizeFormat = _ref => {
  let {
    localizationContext,
    bytes,
    options = {}
  } = _ref;
  const fallbackValue = options.fallbackValue || FILE_SIZE_TEMPLATES[0](bytes);
  try {
    if (!localizationContext || Object.keys(localizationContext).length === 0) {
      return fallbackValue;
    }
    const formattingLocale = options.formattingLocale || localizationContext.formattingLocale;
    const parsedOptions = fileSize_parseOptions(options);
    const i = Math.max(0, Math.floor(Math.log(bytes) / Math.log(K)));
    const fileSize = numberFormat({
      localizationContext,
      value: bytes / Math.pow(K, i),
      options: {
        formattingLocale,
        maximumFractionDigits: parsedOptions.maximumFractionDigits,
        noFractionDigits: parsedOptions.noFractionDigits
      }
    });
    const fileSizeKey = "fileSizes.abbrv[".concat(i, "]");
    const locale = getFiverrLocaleByFormattingLocale(formattingLocale);
    const isLocalizedKeyExists = i18n.has(fileSizeKey, {
      $scope: locale
    });
    if (typeof i18n === 'undefined' || !isNaN(i) && !isLocalizedKeyExists) {
      return FILE_SIZE_TEMPLATES[i](fileSize);
    }
    return i18n.t(fileSizeKey, {
      fileSize: fileSize,
      $scope: locale
    });
  } catch (e) {
    emitter/* default */.A.error(e, {
      bytes,
      options,
      formatter: 'fileSizeFormat'
    });
    return fallbackValue;
  }
};
/**
 * Parse formatter options.
 * This method validates the properties in the options object and overrides properties for Fiverr custom formatting rules.
 * @param {Object} options Optional formatting configurations.
 * @returns {Object} Validated formatting configurations.
 */
const fileSize_parseOptions = options => validateOptions(FILE_SIZE_FORMATTING_OPTIONS, options);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/withBrowserContext/constants.js
/**
 * The error message to be logged when trying to access `getLocalizationContext` api while browser context does not exist.
 * @type {String}
 */const LOCALIZATION_CONTEXT_DOES_NOT_EXIST = 'Browser localization context does not exist, please ensure the run time owner sets one on the window scope before using this API';
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/withBrowserContext/index.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





const errorLoggedKey = Symbol();
/**
 * Returns the current available localization context for browser run time environment.
 * @returns {Object} - localization context object
 */
const getLocalizationContext = () => {
  const {
    computedLocale
  } = (0,getContext/* default */.A)();
  let localizationContext;
  if (computedLocale) {
    localizationContext = {
      formattingLocale: computedLocale
    };
  } else {
    localizationContext = (0,lodash.get)(window, 'initialData.LocalizationContext');
  }
  if (!localizationContext) {
    // We would like to log error in the browser only once per page view
    if (window && !window[errorLoggedKey]) {
      window[errorLoggedKey] = true;
      emitter/* default */.A.error({
        message: LOCALIZATION_CONTEXT_DOES_NOT_EXIST
      });
    }
    return DEFAULT_LOCALIZATION_CONTEXT;
  }
  return localizationContext;
};
/**
 * Wraps a function and injects dynamically the localization context (browser run time)
 * as the first parameter. Based on FiverrContext or LocalizationContext
 * @param baseFunc {Function} - the function to wrap
 * @returns {Function} - localizationContext wrapped function
 */
const withBrowserContext = baseFunc => args => {
  const localizationContext = getLocalizationContext();
  return baseFunc(_objectSpread({
    localizationContext
  }, args));
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js






const browser_numberFormat = withBrowserContext(numberFormat);
const browser_currencyFormat = withBrowserContext(currencyFormat);
const browser_dateTimeFormat = withBrowserContext(dateTimeFormat);
const browser_fileSizeFormat = withBrowserContext(fileSizeFormat);
const browser_getCurrencySymbol = withBrowserContext(getCurrencySymbol);











/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/stats/emitter/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fiverr_private_futile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+futile@2.28.5/node_modules/@fiverr-private/futile/lib/event/globalEventBus/index.js");
/* harmony import */ var _helpers_eventName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/stats/helpers/eventName/index.js");
/* harmony import */ var _helpers_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/stats/helpers/types/index.js");



const stats = _helpers_types__WEBPACK_IMPORTED_MODULE_2__/* .TYPES */ .QE.reduce((accumulator, type) => Object.assign(accumulator, {
  /**
   * send a specific type stat (count, time, gauge...)
   * @param  {String}  prefix
   * @param  {String}  metric
   * @param  {Number}  [value=1]
   * @param  {Number}  [options.rate]
   * @param  {Object}  [options.tags] Tags in key/value pair
   * @param  {Boolean} [options.enforceRate]
   * @return {Promise}
   */
  [type]: function (prefix, metric, value) {
    let {
      rate,
      tags,
      enforceRate
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    Object.entries({
      prefix,
      metric
    }).forEach((_ref, index) => {
      let [name, value] = _ref;
      if (typeof value !== 'string' || !value) {
        throw new TypeError("Expected argument ".concat(index, " (").concat(name, ") to be a string. Instead got ").concat(typeof value, " (").concat(value, ")"));
      }
    });
    const key = [prefix, metric].join('.');
    return _fiverr_private_futile__WEBPACK_IMPORTED_MODULE_0__/* .globalEventBus */ .g.deferred(_helpers_eventName__WEBPACK_IMPORTED_MODULE_1__/* .STATS */ .c, {
      type,
      key,
      value,
      rate,
      tags,
      enforceRate
    });
  }
}), {});
Object.defineProperty(stats, 'prefix', {
  value: prefix => _helpers_types__WEBPACK_IMPORTED_MODULE_2__/* .TYPES */ .QE.reduce((accumulator, type) => Object.assign(accumulator, {
    [type]: stats[type].bind(stats, prefix)
  }), {})
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stats);

/***/ }),

/***/ "../../node_modules/.pnpm/@floating-ui+dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UE: () => (/* binding */ floating_ui_dom_arrow),
  RK: () => (/* binding */ floating_ui_dom_autoPlacement),
  ll: () => (/* binding */ autoUpdate),
  rD: () => (/* binding */ floating_ui_dom_computePosition),
  UU: () => (/* binding */ floating_ui_dom_flip),
  cY: () => (/* binding */ floating_ui_dom_offset),
  BN: () => (/* binding */ floating_ui_dom_shift)
});

// UNUSED EXPORTS: detectOverflow, getOverflowAncestors, hide, inline, limitShift, platform, size

;// ../../node_modules/.pnpm/@floating-ui+utils@0.2.9/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const floating_ui_utils_sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/floating_ui_utils_sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const floating_ui_utils_min = Math.min;
const floating_ui_utils_max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return floating_ui_utils_max(start, floating_ui_utils_min(value, end));
}
function floating_ui_utils_evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function floating_ui_utils_getSide(placement) {
  return placement.split('-')[0];
}
function floating_ui_utils_getAlignment(placement) {
  return placement.split('-')[1];
}
function floating_ui_utils_getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function floating_ui_utils_getSideAxis(placement) {
  return ['top', 'bottom'].includes(floating_ui_utils_getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return floating_ui_utils_getOppositeAxis(floating_ui_utils_getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = floating_ui_utils_getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = floating_ui_utils_getAlignment(placement);
  let list = getSideList(floating_ui_utils_getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function floating_ui_utils_getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function floating_ui_utils_rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}



;// ../../node_modules/.pnpm/@floating-ui+core@1.6.9/node_modules/@floating-ui/core/dist/floating-ui.core.mjs



function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = floating_ui_utils_getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = floating_ui_utils_getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (floating_ui_utils_getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = floating_ui_utils_evaluate(options, state);
  const paddingObject = floating_ui_utils_getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = floating_ui_utils_rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = floating_ui_utils_rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = floating_ui_utils_evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = floating_ui_utils_getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = floating_ui_utils_min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = floating_ui_utils_min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && floating_ui_utils_getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => floating_ui_utils_getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => floating_ui_utils_getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => floating_ui_utils_getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return floating_ui_utils_getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = floating_ui_utils_evaluate(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[floating_ui_utils_getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = floating_ui_utils_getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      floating_ui_utils_getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = floating_ui_utils_evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = floating_ui_utils_getSide(placement);
      const initialSideAxis = floating_ui_utils_getSideAxis(initialPlacement);
      const isBasePlacement = floating_ui_utils_getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = floating_ui_utils_getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = min(...rects.map(rect => rect.left));
  const minY = min(...rects.map(rect => rect.top));
  const maxX = max(...rects.map(rect => rect.right));
  const maxY = max(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = floating_ui_utils_getSide(placement);
  const alignment = floating_ui_utils_getAlignment(placement);
  const isVertical = floating_ui_utils_getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = floating_ui_utils_evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = floating_ui_utils_evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = floating_ui_utils_getSideAxis(floating_ui_utils_getSide(placement));
      const mainAxis = floating_ui_utils_getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};



;// ../../node_modules/.pnpm/@floating-ui+utils@0.2.9/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [':popover-open', ':modal'].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}



;// ../../node_modules/.pnpm/@floating-ui+dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs





function getCssDimensions(element) {
  const css = getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return floating_ui_utils_rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 :
  // RTL <body> scrollbar.
  getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = floating_ui_utils_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = floating_ui_utils_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === 'rtl') {
    x += floating_ui_utils_max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return floating_ui_utils_rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_utils_max(rect.top, accRect.top);
    accRect.right = floating_ui_utils_min(rect.right, accRect.right);
    accRect.bottom = floating_ui_utils_min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_utils_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
      // Firefox with layout.scrollbar.side = 3 in about:config to test this.
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: floating_ui_utils_max(0, floating_ui_utils_min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
const floating_ui_dom_detectOverflow = (/* unused pure expression or super */ null && (detectOverflow$1));

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const floating_ui_dom_offset = offset;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const floating_ui_dom_autoPlacement = autoPlacement;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const floating_ui_dom_shift = shift;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const floating_ui_dom_flip = flip;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const floating_ui_dom_size = (/* unused pure expression or super */ null && (size$1));

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const floating_ui_dom_hide = (/* unused pure expression or super */ null && (hide$1));

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const floating_ui_dom_arrow = arrow;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const floating_ui_dom_inline = (/* unused pure expression or super */ null && (inline$1));

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const floating_ui_dom_limitShift = (/* unused pure expression or super */ null && (limitShift$1));

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const floating_ui_dom_computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};




/***/ }),

/***/ "../../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UE: () => (/* binding */ arrow),
/* harmony export */   we: () => (/* binding */ useFloating)
/* harmony export */ });
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/**
 * A data provider that provides data to position an inner element of the
 * floating element (usually a triangle or caret) so that it is centered to the
 * reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__/* .arrow */ .UE)({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__/* .arrow */ .UE)({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
};
var index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function useLatestRef(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/react
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_1__.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const referenceRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const floatingRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const dataRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const [reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const [floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const setReference = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(node => {
    if (referenceRef.current !== node) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(node => {
    if (floatingRef.current !== node) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const update = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__/* .computePosition */ .rD)(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = _objectSpread(_objectSpread({}, data), {}, {
        isPositioned: true
      });
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => _objectSpread(_objectSpread({}, data), {}, {
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (reference && floating) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(reference, floating, update);
      } else {
        update();
      }
    }
  }, [reference, floating, update, whileElementsMountedRef]);
  const refs = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    reference,
    floating
  }), [reference, floating]);
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => _objectSpread(_objectSpread({}, data), {}, {
    update,
    refs,
    elements,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, elements, setReference, setFloating]);
}


/***/ }),

/***/ "../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ assignInlineVars)
});

// UNUSED EXPORTS: setElementVars

;// ../../node_modules/.pnpm/@vanilla-extract+private@1.0.6/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js
function vanilla_extract_private_esm_getVarName(variable) {
  var matches = variable.match(/^var\((.*)\)$/);
  if (matches) {
    return matches[1];
  }
  return variable;
}

function vanilla_extract_private_esm_get(obj, path) {
  var result = obj;
  for (var key of path) {
    if (!(key in result)) {
      throw new Error("Path ".concat(path.join(' -> '), " does not exist in object"));
    }
    result = result[key];
  }
  return result;
}

function vanilla_extract_private_esm_walkObject(obj, fn) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var clone = {};
  for (var key in obj) {
    var _value = obj[key];
    var currentPath = [...path, key];
    if (typeof _value === 'string' || typeof _value === 'number' || _value == null) {
      clone[key] = fn(_value, currentPath);
    } else if (typeof _value === 'object' && !Array.isArray(_value)) {
      clone[key] = vanilla_extract_private_esm_walkObject(_value, fn, currentPath);
    } else {
      console.warn("Skipping invalid key \"".concat(currentPath.join('.'), "\". Should be a string, number, null or object. Received: \"").concat(Array.isArray(_value) ? 'Array' : typeof _value, "\""));
    }
  }
  return clone;
}



;// ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js


function assignInlineVars(varsOrContract, tokens) {
  var styles = {};
  if (typeof tokens === 'object') {
    var _contract = varsOrContract;
    vanilla_extract_private_esm_walkObject(tokens, (value, path) => {
      if (value == null) {
        return;
      }
      var varName = vanilla_extract_private_esm_get(_contract, path);
      styles[vanilla_extract_private_esm_getVarName(varName)] = String(value);
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      var value = _vars[varName];
      if (value == null) {
        continue;
      }
      styles[vanilla_extract_private_esm_getVarName(varName)] = value;
    }
  }
  Object.defineProperty(styles, 'toString', {
    value: function value() {
      return Object.keys(this).map(key => "".concat(key, ":").concat(this[key])).join(';');
    },
    writable: false
  });
  return styles;
}

function setVar(element, variable, value) {
  element.style.setProperty(getVarName(variable), value);
}
function setElementVars(element, varsOrContract, tokens) {
  if (typeof tokens === 'object') {
    var _contract = varsOrContract;
    walkObject(tokens, (value, path) => {
      if (value == null) {
        return;
      }
      setVar(element, get(_contract, path), String(value));
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      var value = _vars[varName];
      if (value == null) {
        continue;
      }
      setVar(element, varName, _vars[varName]);
    }
  }
}




/***/ }),

/***/ "../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ createSprinkles)
});

// UNUSED EXPORTS: createAtomsFn

;// ../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-74286718.esm.js
function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

var createSprinkles_74286718_esm_createSprinkles = composeStyles => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var sprinklesStyles = Object.assign({}, ...args.map(a => a.styles));
  var sprinklesKeys = Object.keys(sprinklesStyles);
  var shorthandNames = sprinklesKeys.filter(property => 'mappings' in sprinklesStyles[property]);
  var sprinklesFn = props => {
    var classNames = [];
    var shorthands = {};
    var nonShorthands = _objectSpread2({}, props);
    var hasShorthands = false;
    for (var shorthand of shorthandNames) {
      var value = props[shorthand];
      if (value != null) {
        var sprinkle = sprinklesStyles[shorthand];
        hasShorthands = true;
        for (var propMapping of sprinkle.mappings) {
          shorthands[propMapping] = value;
          if (nonShorthands[propMapping] == null) {
            delete nonShorthands[propMapping];
          }
        }
      }
    }
    var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
    var _loop = function _loop() {
      var propValue = finalProps[prop];
      var sprinkle = sprinklesStyles[prop];
      try {
        if (sprinkle.mappings) {
          // Skip shorthands
          return 1; // continue
        }
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          if (false) // removed by dead control flow
{}
          classNames.push(sprinkle.values[propValue].defaultClass);
        } else if (Array.isArray(propValue)) {
          for (var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++) {
            var responsiveValue = propValue[responsiveIndex];
            if (responsiveValue != null) {
              var conditionName = sprinkle.responsiveArray[responsiveIndex];
              if (false) // removed by dead control flow
{}
              classNames.push(sprinkle.values[responsiveValue].conditions[conditionName]);
            }
          }
        } else {
          for (var _conditionName in propValue) {
            // Conditional style
            var _value = propValue[_conditionName];
            if (_value != null) {
              if (false) // removed by dead control flow
{}
              classNames.push(sprinkle.values[_value].conditions[_conditionName]);
            }
          }
        }
      } catch (e) {
        if (false) // removed by dead control flow
{ var _value2, _conditionName2, _responsiveValue, breakpointCount, invalidPropValue, format; }
        throw e;
      }
    };
    for (var prop in finalProps) {
      if (_loop()) continue;
    }
    return composeStyles(classNames.join(' '));
  };
  return Object.assign(sprinklesFn, {
    properties: new Set(sprinklesKeys)
  });
};



;// ../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js


var composeStyles = classList => classList;
var createSprinkles = function createSprinkles() {
  return createSprinkles_74286718_esm_createSprinkles(composeStyles)(...arguments);
};

/** @deprecated - Use `createSprinkles` */
var createAtomsFn = (/* unused pure expression or super */ null && (createSprinkles));




/***/ }),

/***/ "../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ createMapValueFn)
});

// UNUSED EXPORTS: createNormalizeValueFn

;// ../../node_modules/.pnpm/@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0/node_modules/@vanilla-extract/css/functionSerializer/dist/vanilla-extract-css-functionSerializer.browser.esm.js
function addFunctionSerializer(target, recipe) {
  // TODO: Update to "__function_serializer__" in future.
  // __recipe__ is the backwards compatible name
  Object.defineProperty(target, '__recipe__', {
    value: recipe,
    writable: false
  });
  return target;
}



;// ../../node_modules/.pnpm/@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0/node_modules/@vanilla-extract/css/recipe/dist/vanilla-extract-css-recipe.browser.esm.js


/**
 * @deprecated Use 'addFunctionSerializer' from '@vanilla-extract/css/functionSerializer'
 */
var addRecipe = addFunctionSerializer;



;// ../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js


function createNormalizeValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error('Styles have no conditions');
  }
  function normalizeValue(value) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      if (!conditions.defaultCondition) {
        throw new Error('No default condition');
      }
      return {
        [conditions.defaultCondition]: value
      };
    }
    if (Array.isArray(value)) {
      if (!('responsiveArray' in conditions)) {
        throw new Error('Responsive arrays are not supported');
      }
      var returnValue = {};
      for (var index in conditions.responsiveArray) {
        if (value[index] != null) {
          returnValue[conditions.responsiveArray[index]] = value[index];
        }
      }
      return returnValue;
    }
    return value;
  }
  return addRecipe(normalizeValue, {
    importPath: '@vanilla-extract/sprinkles/createUtils',
    importName: 'createNormalizeValueFn',
    args: [{
      conditions: properties.conditions
    }]
  });
}
function createMapValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error('Styles have no conditions');
  }
  var normalizeValue = createNormalizeValueFn(properties);
  function mapValue(value, mapFn) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      if (!conditions.defaultCondition) {
        throw new Error('No default condition');
      }
      return mapFn(value, conditions.defaultCondition);
    }
    var normalizedObject = Array.isArray(value) ? normalizeValue(value) : value;
    var mappedObject = {};
    for (var _key in normalizedObject) {
      if (normalizedObject[_key] != null) {
        mappedObject[_key] = mapFn(normalizedObject[_key], _key);
      }
    }
    return mappedObject;
  }
  return addRecipe(mapValue, {
    importPath: '@vanilla-extract/sprinkles/createUtils',
    importName: 'createMapValueFn',
    args: [{
      conditions: properties.conditions
    }]
  });
}




/***/ }),

/***/ "../../node_modules/.pnpm/bezier-easing@2.1.0/node_modules/bezier-easing/src/index.js":
/***/ ((module) => {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),

/***/ "../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js":
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqueId.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js");

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ "../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* reexport */ es_Animate)
});

// UNUSED EXPORTS: NodeGroup

;// ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

;// ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
;// ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,setPrototypeOf/* default */.A)(t, e);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
;// ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,assertThisInitialized/* default */.A)(t);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
;// ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// ../../node_modules/.pnpm/d3-timer@1.0.10/node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

;// ../../node_modules/.pnpm/d3-timer@1.0.10/node_modules/d3-timer/src/timeout.js


/* harmony default export */ function src_timeout(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

;// ../../node_modules/.pnpm/kapellmeister@3.0.1/node_modules/kapellmeister/es/utils.js
function utils_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { utils_typeof = function _typeof(obj) { return typeof obj; }; } else { utils_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return utils_typeof(obj); }

var transitionId = 0;
function getTransitionId() {
  return ++transitionId;
}
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }
}
function once(func) {
  var called = false;
  return function transitionEvent() {
    if (!called) {
      called = true;
      func.call(this);
    }
  };
}
function isNamespace(prop) {
  return utils_typeof(prop) === 'object' && Array.isArray(prop) === false;
}

var linear = function linear(t) {
  return +t;
};

var timingDefaults = {
  delay: 0,
  duration: 250,
  ease: linear
};
;// ../../node_modules/.pnpm/kapellmeister@3.0.1/node_modules/kapellmeister/es/Events.js
function Events_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Events = function Events(config) {
  var _this = this;

  Events_classCallCheck(this, Events);

  this.start = null;
  this.interrupt = null;
  this.end = null;

  if (config.events) {
    Object.keys(config.events).forEach(function (d) {
      if (typeof config.events[d] !== 'function') {
        throw new Error('Event handlers must be a function');
      } else {
        _this[d] = once(config.events[d]);
      }
    });
  }
};
/* harmony default export */ const es_Events = (Events);
;// ../../node_modules/.pnpm/kapellmeister@3.0.1/node_modules/kapellmeister/es/BaseNode.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { BaseNode_defineProperty(target, key, source[key]); }); } return target; }

function BaseNode_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BaseNode_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaseNode_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BaseNode_createClass(Constructor, protoProps, staticProps) { if (protoProps) BaseNode_defineProperties(Constructor.prototype, protoProps); if (staticProps) BaseNode_defineProperties(Constructor, staticProps); return Constructor; }





var BaseNode = function () {
  function BaseNode(state) {
    BaseNode_classCallCheck(this, BaseNode);

    this.state = state || {};
  }

  BaseNode_createClass(BaseNode, [{
    key: "transition",
    value: function transition(config) {
      if (Array.isArray(config)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = config[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            this.parse(item);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        this.parse(config);
      }
    }
  }, {
    key: "isTransitioning",
    value: function isTransitioning() {
      return !!this.transitionData;
    }
  }, {
    key: "stopTransitions",
    value: function stopTransitions() {
      var transitions = this.transitionData;

      if (transitions) {
        Object.keys(transitions).forEach(function (t) {
          transitions[t].timer.stop();
        });
      }
    }
  }, {
    key: "setState",
    value: function setState(update) {
      if (typeof update === 'function') {
        extend(this.state, update(this.state));
      } else {
        extend(this.state, update);
      }
    }
  }, {
    key: "parse",
    value: function parse(config) {
      var _this = this;

      var clone = _objectSpread({}, config);

      var events = new es_Events(clone);

      if (clone.events) {
        delete clone.events;
      }

      var timing = _objectSpread({}, timingDefaults, clone.timing || {}, {
        time: now()
      });

      if (clone.timing) {
        delete clone.timing;
      }

      Object.keys(clone).forEach(function (stateKey) {
        var tweens = [];
        var next = clone[stateKey];

        if (isNamespace(next)) {
          Object.keys(next).forEach(function (attr) {
            var val = next[attr];

            if (Array.isArray(val)) {
              if (val.length === 1) {
                tweens.push(_this.getTween(attr, val[0], stateKey));
              } else {
                _this.setState(function (state) {
                  var _objectSpread2, _ref;

                  return _ref = {}, _ref[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread2 = {}, _objectSpread2[attr] = val[0], _objectSpread2)), _ref;
                });

                tweens.push(_this.getTween(attr, val[1], stateKey));
              }
            } else if (typeof val === 'function') {
              var getNameSpacedCustomTween = function getNameSpacedCustomTween() {
                var kapellmeisterNamespacedTween = function kapellmeisterNamespacedTween(t) {
                  _this.setState(function (state) {
                    var _objectSpread3, _ref2;

                    return _ref2 = {}, _ref2[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread3 = {}, _objectSpread3[attr] = val(t), _objectSpread3)), _ref2;
                  });
                };

                return kapellmeisterNamespacedTween;
              };

              tweens.push(getNameSpacedCustomTween);
            } else {
              _this.setState(function (state) {
                var _objectSpread4, _ref3;

                return _ref3 = {}, _ref3[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread4 = {}, _objectSpread4[attr] = val, _objectSpread4)), _ref3;
              });

              tweens.push(_this.getTween(attr, val, stateKey));
            }
          });
        } else {
          if (Array.isArray(next)) {
            if (next.length === 1) {
              tweens.push(_this.getTween(stateKey, next[0], null));
            } else {
              var _this$setState;

              _this.setState((_this$setState = {}, _this$setState[stateKey] = next[0], _this$setState));

              tweens.push(_this.getTween(stateKey, next[1], null));
            }
          } else if (typeof next === 'function') {
            var getCustomTween = function getCustomTween() {
              var kapellmeisterTween = function kapellmeisterTween(t) {
                var _this$setState2;

                _this.setState((_this$setState2 = {}, _this$setState2[stateKey] = next(t), _this$setState2));
              };

              return kapellmeisterTween;
            };

            tweens.push(getCustomTween);
          } else {
            var _this$setState3;

            _this.setState((_this$setState3 = {}, _this$setState3[stateKey] = next, _this$setState3));

            tweens.push(_this.getTween(stateKey, next, null));
          }
        }

        _this.update({
          stateKey: stateKey,
          timing: timing,
          tweens: tweens,
          events: events,
          status: 0
        });
      });
    }
  }, {
    key: "getTween",
    value: function getTween(attr, endValue, nameSpace) {
      var _this2 = this;

      return function () {
        var begValue = nameSpace ? _this2.state[nameSpace][attr] : _this2.state[attr];

        if (begValue === endValue) {
          return null;
        }

        var i = _this2.getInterpolator(begValue, endValue, attr, nameSpace);

        var stateTween;

        if (nameSpace === null) {
          stateTween = function stateTween(t) {
            var _this2$setState;

            _this2.setState((_this2$setState = {}, _this2$setState[attr] = i(t), _this2$setState));
          };
        } else {
          stateTween = function stateTween(t) {
            _this2.setState(function (state) {
              var _objectSpread5, _ref4;

              return _ref4 = {}, _ref4[nameSpace] = _objectSpread({}, state[nameSpace], (_objectSpread5 = {}, _objectSpread5[attr] = i(t), _objectSpread5)), _ref4;
            });
          };
        }

        return stateTween;
      };
    }
  }, {
    key: "update",
    value: function update(transition) {
      if (!this.transitionData) {
        this.transitionData = {};
      }

      this.init(getTransitionId(), transition);
    }
  }, {
    key: "init",
    value: function init(id, transition) {
      var _this3 = this;

      var n = transition.tweens.length;
      var tweens = new Array(n);

      var queue = function queue(elapsed) {
        transition.status = 1;
        transition.timer.restart(start, transition.timing.delay, transition.timing.time);

        if (transition.timing.delay <= elapsed) {
          start(elapsed - transition.timing.delay);
        }
      };

      this.transitionData[id] = transition;
      transition.timer = timer(queue, 0, transition.timing.time);

      var start = function start(elapsed) {
        if (transition.status !== 1) return stop();

        for (var tid in _this3.transitionData) {
          var t = _this3.transitionData[tid];

          if (t.stateKey !== transition.stateKey) {
            continue;
          }

          if (t.status === 3) {
            return src_timeout(start);
          }

          if (t.status === 4) {
            t.status = 6;
            t.timer.stop();

            if (t.events.interrupt) {
              t.events.interrupt.call(_this3);
            }

            delete _this3.transitionData[tid];
          } else if (+tid < id) {
            t.status = 6;
            t.timer.stop();
            delete _this3.transitionData[tid];
          }
        }

        src_timeout(function () {
          if (transition.status === 3) {
            transition.status = 4;
            transition.timer.restart(tick, transition.timing.delay, transition.timing.time);
            tick(elapsed);
          }
        });
        transition.status = 2;

        if (transition.events.start) {
          transition.events.start.call(_this3);
        }

        if (transition.status !== 2) {
          return;
        }

        transition.status = 3;
        var j = -1;

        for (var i = 0; i < n; ++i) {
          var res = transition.tweens[i]();

          if (res) {
            tweens[++j] = res;
          }
        }

        tweens.length = j + 1;
      };

      var tick = function tick(elapsed) {
        var t = 1;

        if (elapsed < transition.timing.duration) {
          t = transition.timing.ease(elapsed / transition.timing.duration);
        } else {
          transition.timer.restart(stop);
          transition.status = 5;
        }

        var i = -1;

        while (++i < tweens.length) {
          tweens[i](t);
        }

        if (transition.status === 5) {
          if (transition.events.end) {
            transition.events.end.call(_this3);
          }

          stop();
        }
      };

      var stop = function stop() {
        transition.status = 6;
        transition.timer.stop();
        delete _this3.transitionData[id];

        for (var _ in _this3.transitionData) {
          return;
        }

        delete _this3.transitionData;
      };
    }
  }]);

  return BaseNode;
}();

/* harmony default export */ const es_BaseNode = (BaseNode);
;// ../../node_modules/.pnpm/d3-timer@1.0.10/node_modules/d3-timer/src/interval.js


/* harmony default export */ function src_interval(callback, delay, time) {
  var t = new Timer, total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? now() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
}

;// ../../node_modules/.pnpm/kapellmeister@3.0.1/node_modules/kapellmeister/es/index.js


;// ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/core/mergeKeys.js
function mergeKeys(currNodeKeys, currKeyIndex, nextNodeKeys, nextKeyIndex) {
  var allKeys = [];

  for (var i = 0; i < nextNodeKeys.length; i++) {
    allKeys[i] = nextNodeKeys[i];
  }

  for (var _i = 0; _i < currNodeKeys.length; _i++) {
    if (nextKeyIndex[currNodeKeys[_i]] === undefined) {
      allKeys.push(currNodeKeys[_i]);
    }
  }

  return allKeys.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a];
    var nextOrderB = nextKeyIndex[b];
    var currOrderA = currKeyIndex[a];
    var currOrderB = currKeyIndex[b];

    if (nextOrderA != null && nextOrderB != null) {
      return nextKeyIndex[a] - nextKeyIndex[b];
    } else if (currOrderA != null && currOrderB != null) {
      return currKeyIndex[a] - currKeyIndex[b];
    } else if (nextOrderA != null) {
      for (var _i2 = 0; _i2 < nextNodeKeys.length; _i2++) {
        var pivot = nextNodeKeys[_i2];

        if (!currKeyIndex[pivot]) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && currOrderB > currKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && currOrderB < currKeyIndex[pivot]) {
          return 1;
        }
      }

      return 1;
    }

    for (var _i3 = 0; _i3 < nextNodeKeys.length; _i3++) {
      var _pivot = nextNodeKeys[_i3];

      if (!currKeyIndex[_pivot]) {
        continue;
      }

      if (nextOrderB < nextKeyIndex[_pivot] && currOrderA > currKeyIndex[_pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[_pivot] && currOrderA < currKeyIndex[_pivot]) {
        return -1;
      }
    }

    return -1;
  });
}

/* harmony default export */ const core_mergeKeys = (mergeKeys);
;// ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/core/types.js
var ENTER = 'ENTER';
var UPDATE = 'UPDATE';
var LEAVE = 'LEAVE';
;// ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/utils.js
function numeric(beg, end) {
  var a = +beg;
  var b = +end - a;
  return function (t) {
    return a + b * t;
  };
}
;// ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/NodeGroup/index.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.A)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.A)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var NodeGroup = function (_Component) {
  _inherits(NodeGroup, _Component);

  var _super = _createSuper(NodeGroup);

  function NodeGroup(props) {
    var _this;

    _classCallCheck(this, NodeGroup);

    _this = _super.call(this, props);

    _defineProperty((0,assertThisInitialized/* default */.A)(_this), "animate", function () {
      var _this$state = _this.state,
          nodeKeys = _this$state.nodeKeys,
          nodeHash = _this$state.nodeHash;

      if (_this.unmounting) {
        return;
      }

      var pending = false;
      var nextNodeKeys = [];
      var length = nodeKeys.length;

      for (var i = 0; i < length; i++) {
        var k = nodeKeys[i];
        var n = nodeHash[k];
        var isTransitioning = n.isTransitioning();

        if (isTransitioning) {
          pending = true;
        }

        if (n.type === LEAVE && !isTransitioning) {
          delete nodeHash[k];
        } else {
          nextNodeKeys.push(k);
        }
      }

      if (!pending) {
        _this.interval.stop();
      }

      _this.setState(function () {
        return {
          nodeKeys: nextNodeKeys,
          nodes: nextNodeKeys.map(function (key) {
            return nodeHash[key];
          })
        };
      });
    });

    _defineProperty((0,assertThisInitialized/* default */.A)(_this), "interval", null);

    _defineProperty((0,assertThisInitialized/* default */.A)(_this), "unmounting", false);

    var interpolation = props.interpolation;

    var Node = function (_BaseNode) {
      _inherits(Node, _BaseNode);

      var _super2 = _createSuper(Node);

      function Node(key, data) {
        var _this2;

        _classCallCheck(this, Node);

        _this2 = _super2.call(this);

        _defineProperty((0,assertThisInitialized/* default */.A)(_this2), "getInterpolator", interpolation);

        _this2.key = key;
        _this2.data = data;
        _this2.type = ENTER;
        return _this2;
      }

      return Node;
    }(es_BaseNode);

    _this.state = {
      Node: Node,
      nodeKeys: [],
      nodeHash: {},
      nodes: [],
      data: null
    };
    return _this;
  }

  _createClass(NodeGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data && !this.unmounting) {
        this.startInterval();
      }
    }
  }, {
    key: "startInterval",
    value: function startInterval() {
      if (!this.interval) {
        this.interval = src_interval(this.animate);
      } else {
        this.interval.restart(this.animate);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state2 = this.state,
          nodeKeys = _this$state2.nodeKeys,
          nodeHash = _this$state2.nodeHash;
      this.unmounting = true;

      if (this.interval) {
        this.interval.stop();
      }

      nodeKeys.forEach(function (key) {
        nodeHash[key].stopTransitions();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderedChildren = this.props.children(this.state.nodes);
      return renderedChildren && react.Children.only(renderedChildren);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.data !== prevState.data) {
        var data = nextProps.data,
            keyAccessor = nextProps.keyAccessor,
            start = nextProps.start,
            enter = nextProps.enter,
            update = nextProps.update,
            leave = nextProps.leave;
        var Node = prevState.Node,
            nodeKeys = prevState.nodeKeys,
            nodeHash = prevState.nodeHash;
        var keyIndex = {};

        for (var i = 0; i < nodeKeys.length; i++) {
          keyIndex[nodeKeys[i]] = i;
        }

        var nextKeyIndex = {};
        var nextNodeKeys = [];

        for (var _i = 0; _i < data.length; _i++) {
          var d = data[_i];
          var k = keyAccessor(d, _i);
          nextKeyIndex[k] = _i;
          nextNodeKeys.push(k);

          if (keyIndex[k] === undefined) {
            var node = new Node();
            node.key = k;
            node.data = d;
            node.type = ENTER;
            nodeHash[k] = node;
          }
        }

        for (var _i2 = 0; _i2 < nodeKeys.length; _i2++) {
          var _k = nodeKeys[_i2];
          var n = nodeHash[_k];

          if (nextKeyIndex[_k] !== undefined) {
            n.data = data[nextKeyIndex[_k]];
            n.type = UPDATE;
          } else {
            n.type = LEAVE;
          }
        }

        var mergedNodeKeys = core_mergeKeys(nodeKeys, keyIndex, nextNodeKeys, nextKeyIndex);

        for (var _i3 = 0; _i3 < mergedNodeKeys.length; _i3++) {
          var _k2 = mergedNodeKeys[_i3];
          var _n = nodeHash[_k2];
          var _d = _n.data;

          if (_n.type === ENTER) {
            _n.setState(start(_d, nextKeyIndex[_k2]));

            _n.transition(enter(_d, nextKeyIndex[_k2]));
          } else if (_n.type === LEAVE) {
            _n.transition(leave(_d, keyIndex[_k2]));
          } else {
            _n.transition(update(_d, nextKeyIndex[_k2]));
          }
        }

        return {
          data: data,
          nodes: mergedNodeKeys.map(function (key) {
            return nodeHash[key];
          }),
          nodeHash: nodeHash,
          nodeKeys: mergedNodeKeys
        };
      }

      return null;
    }
  }]);

  return NodeGroup;
}(react.Component);

NodeGroup.propTypes =  false ? 0 : {};
NodeGroup.defaultProps = {
  enter: function enter() {},
  update: function update() {},
  leave: function leave() {},
  interpolation: numeric
};
/* harmony default export */ const es_NodeGroup = (NodeGroup);
;// ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/Animate/index.js






function Animate_createSuper(Derived) { var hasNativeReflectConstruct = Animate_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.A)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.A)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function Animate_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var keyAccessor = function keyAccessor() {
  return '$$key$$';
};

var Animate = function (_Component) {
  _inherits(Animate, _Component);

  var _super = Animate_createSuper(Animate);

  function Animate() {
    _classCallCheck(this, Animate);

    return _super.apply(this, arguments);
  }

  _createClass(Animate, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          start = _this$props.start,
          enter = _this$props.enter,
          update = _this$props.update,
          leave = _this$props.leave,
          interpolation = _this$props.interpolation,
          children = _this$props.children;
      var data = typeof start === 'function' ? start() : start;
      return react.createElement(es_NodeGroup, {
        data: show ? [data] : [],
        start: function start() {
          return data;
        },
        keyAccessor: keyAccessor,
        interpolation: interpolation,
        enter: typeof enter === 'function' ? enter : function () {
          return enter;
        },
        update: typeof update === 'function' ? update : function () {
          return update;
        },
        leave: typeof leave === 'function' ? leave : function () {
          return leave;
        }
      }, function (nodes) {
        if (!nodes[0]) {
          return null;
        }

        var renderedChildren = children(nodes[0].state);
        return renderedChildren && react.Children.only(renderedChildren);
      });
    }
  }]);

  return Animate;
}(react.Component);

Animate.propTypes =  false ? 0 : {};
Animate.defaultProps = {
  show: true,
  interpolation: numeric
};
/* harmony default export */ const es_Animate = (Animate);
;// ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js



/***/ })

}]);
//# sourceMappingURL=396.1f2b57e9.iframe.bundle.js.map