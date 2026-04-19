"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[3370],{

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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



/**
 * @type {String} Default locale for translations
 */
exports.DEFAULT_LOCALE = 'en-US';

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../button/dist/esm/src/components/BaseButton/hooks/useGetButtonElement/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useGetButtonElement = href => {
  if (href) {
    return {
      element: 'a',
      role: 'link'
    };
  } else {
    return {
      element: 'button',
      role: 'button'
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetButtonElement);

/***/ }),

/***/ "../button/dist/esm/src/components/BaseButton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Spinner.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _hooks_useGetButtonElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../button/dist/esm/src/components/BaseButton/hooks/useGetButtonElement/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../button/dist/esm/src/components/BaseButton/style.js");
const _excluded = ["children", "href", "loading", "disabled", "className", "intent", "shape", "variant", "colorScheme", "borderRadius", "backgroundColor", "color", "outlineColor", "dataTrackTag"];
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
function _objectSpread(e) {
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
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}





const BaseButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      href,
      loading = false,
      disabled = false,
      className,
      intent = 'primary',
      shape = 'square',
      variant = 'filled',
      colorScheme,
      borderRadius,
      backgroundColor,
      color,
      outlineColor,
      dataTrackTag = 'base_button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    element,
    role
  } = (0,_hooks_useGetButtonElement__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(href);
  const stylingProps = (0,_style__WEBPACK_IMPORTED_MODULE_4__/* .getStylingProps */ .z)(variant, loading, disabled, colorScheme || (intent === 'destructive' ? 'red' : undefined), shape, (intent === 'primary' || intent === 'secondary') && !colorScheme ? intent : undefined, outlineColor);
  const currentColor = color || stylingProps.color;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _objectSpread(_objectSpread(_objectSpread({}, stylingProps), rest), {}, {
    backgroundColor: backgroundColor || stylingProps.backgroundColor,
    borderRadius: borderRadius || stylingProps.borderRadius,
    color: loading ? 'transparent' : currentColor,
    as: element,
    role: role,
    ref: ref,
    href: href,
    disabled: disabled,
    tabIndex: href && disabled ? -1 : undefined,
    className: className,
    dataTrackTag: dataTrackTag
  }), children, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    as: "span",
    visibility: loading ? 'visible' : 'hidden',
    position: "absolute",
    display: "inlineFlex",
    color: stylingProps.color
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null)));
});
BaseButton.displayName = 'BaseButton';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseButton);
;
BaseButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BaseButton"
};

/***/ }),

/***/ "../button/dist/esm/src/components/BaseButton/style.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ getBaseStylingProps),
/* harmony export */   z: () => (/* binding */ getStylingProps)
/* harmony export */ });
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
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
function _objectSpread(e) {
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
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

const getBaseStylingProps = (disabled, loading) => ({
  cursor: disabled ? undefined : 'pointer',
  display: 'inlineFlex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2',
  boxSizing: 'borderBox',
  position: 'relative',
  fontWeight: 'semibold',
  userSelect: 'none',
  outlineOffset: {
    focusVisible: 'sm'
  },
  outlineStyle: {
    focusVisible: 'solid'
  },
  outlineWidth: {
    focusVisible: 'md'
  },
  outlineColor: {
    focusVisible: 'grey_1200'
  },
  pointerEvents: disabled || loading ? 'none' : undefined,
  transition: "".concat(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .L.animationDuration.fast1, " ").concat(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .L.animationTiming.easeInOut),
  flexShrink: 0,
  whiteSpace: 'nowrap'
});
const getStylingProps = (variant, loading, disabled, colorScheme, shape, intent, outlineColor) => _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, getBaseStylingProps(disabled, loading)), {}, {
  borderWidth: 'sm',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: shape === 'circle' ? 'circle' : 'lg',
  decoration: {
    default: 'none',
    hover: 'none'
  }
}, colorScheme === 'white' && _objectSpread(_objectSpread(_objectSpread({
  outlineColor: {
    focusVisible: outlineColor || 'white'
  }
}, variant === 'outline' && {
  borderColor: disabled ? 'white_50' : 'white'
}), variant === 'filled' && {
  backgroundColor: disabled ? 'white' : {
    default: 'white',
    hover: 'white_90',
    active: "white_80"
  },
  color: disabled ? 'grey_600' : {
    default: 'grey_1200',
    hover: 'grey_1200'
  }
}), (variant === 'outline' || variant === 'ghost') && {
  backgroundColor: disabled ? undefined : {
    default: 'transparent',
    hover: 'white_10',
    active: 'white_20'
  },
  color: disabled ? 'white_50' : 'white'
})), colorScheme && colorScheme !== 'white' && _objectSpread(_objectSpread(_objectSpread({
  outlineColor: {
    focusVisible: outlineColor || "".concat(colorScheme, "_900")
  }
}, variant === 'outline' && {
  borderColor: disabled ? "".concat(colorScheme, "_300") : "".concat(colorScheme, "_900")
}), variant === 'filled' && {
  backgroundColor: disabled ? "".concat(colorScheme, "_300") : {
    default: "".concat(colorScheme, "_900"),
    hover: "".concat(colorScheme, "_1000"),
    active: "".concat(colorScheme, "_1100")
  },
  color: {
    default: 'white',
    hover: 'white'
  }
}), (variant === 'outline' || variant === 'ghost') && {
  backgroundColor: disabled ? undefined : {
    default: "transparent",
    hover: "".concat(colorScheme, "_100"),
    active: "".concat(colorScheme, "_200")
  },
  color: disabled ? "".concat(colorScheme, "_300") : "".concat(colorScheme, "_900")
})), (intent === 'primary' || intent === 'secondary') && _objectSpread({
  outlineColor: {
    focusVisible: outlineColor || "grey_1200"
  }
}, (variant === 'outline' || variant === 'ghost') && {
  backgroundColor: {
    default: 'transparent',
    hover: 'grey_200',
    active: 'grey_300'
  },
  color: disabled ? 'grey_800' : 'grey_1200'
})), intent === 'primary' && _objectSpread(_objectSpread({}, variant === 'outline' && {
  borderColor: disabled ? "grey_300" : "grey_1200"
}), variant === 'filled' && {
  backgroundColor: disabled ? "grey_300" : {
    default: 'grey_1200',
    hover: 'grey_1100',
    active: 'grey_1000'
  },
  color: disabled ? 'grey_800' : {
    default: 'white',
    hover: 'white'
  }
})), intent === 'secondary' && _objectSpread(_objectSpread({}, variant === 'outline' && {
  borderColor: disabled ? "grey_300" : "grey_500"
}), variant === 'filled' && {
  backgroundColor: disabled ? "grey_300" : {
    default: 'grey_300',
    hover: 'grey_400',
    active: 'grey_500'
  },
  color: disabled ? 'grey_800' : 'grey_1200'
}));

/***/ }),

/***/ "../button/dist/esm/src/components/Button/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Button)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/BaseButton/index.js
var BaseButton = __webpack_require__("../button/dist/esm/src/components/BaseButton/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
;// ../button/dist/esm/src/components/Button/utils.js

const STYLES_BY_SIZE = {
  sm: {
    paddingY: '1.5',
    paddingX: '3',
    lineHeight: 'b_sm',
    fontSize: 'b_sm'
  },
  md: {
    paddingY: '2',
    paddingX: '4',
    lineHeight: 'b_md',
    fontSize: 'b_md'
  },
  lg: {
    paddingY: '2.5',
    paddingX: '5',
    lineHeight: 'b_lg',
    fontSize: 'b_md'
  }
};
const getConditionalSize = size => {
  if (typeof size === 'object') {
    return {
      paddingX: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].paddingX),
      paddingY: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].paddingY),
      fontSize: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].fontSize),
      lineHeight: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].lineHeight)
    };
  }
  return STYLES_BY_SIZE[size || 'md'];
};
const getConditionalFullWidth = fullWidth => {
  if (typeof fullWidth === 'object') {
    return (0,styles_ve_css/* mapResponsiveStyles */.d0)(fullWidth, value => value ? '100%' : 'initial');
  }
  return fullWidth ? '100%' : undefined;
};
;// ../button/dist/esm/src/components/Button/index.js
const _excluded = ["children", "disabled", "intent", "size", "variant", "loading", "className", "fullWidth", "dataTrackTag"];
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
function _objectSpread(e) {
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
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}



const Button = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      disabled = false,
      intent = 'primary',
      size = 'md',
      variant = 'filled',
      loading = false,
      className,
      fullWidth,
      dataTrackTag = 'button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(BaseButton/* default */.A, _objectSpread(_objectSpread(_objectSpread({}, rest), getConditionalSize(size)), {}, {
    width: getConditionalFullWidth(fullWidth),
    variant: variant,
    intent: intent,
    loading: loading,
    disabled: disabled,
    ref: ref,
    className: className,
    dataTrackTag: dataTrackTag
  }), children);
});
Button.displayName = 'Button';
/* harmony default export */ const components_Button = (Button);
;
Button.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Button"
};

/***/ }),

/***/ "../button/dist/esm/src/components/IconButton/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XK: () => (/* binding */ BORDER_RADIUS_SIZES),
/* harmony export */   eg: () => (/* binding */ ICON_BUTTON_SIZES)
/* harmony export */ });
/* unused harmony export SHAPES */
const SHAPES = {
  circle: 'circle',
  square: 'square'
};
const ICON_BUTTON_SIZES = {
  '3xs': {
    height: 24,
    width: 24
  },
  '2xs': {
    height: 28,
    width: 28
  },
  xs: {
    height: 32,
    width: 32
  },
  sm: {
    height: 36,
    width: 36
  },
  md: {
    height: 42,
    width: 42
  },
  lg: {
    height: 48,
    width: 48
  }
};
const BORDER_RADIUS_SIZES = {
  '3xs': 'sm',
  '2xs': 'sm',
  xs: 'md',
  sm: 'lg',
  md: 'lg',
  lg: 'lg'
};

/***/ }),

/***/ "../button/dist/esm/src/components/IconButton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../button/dist/esm/src/components/BaseButton/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../button/dist/esm/src/components/IconButton/constants.js");
const _excluded = ["intent", "variant", "size", "loading", "shape", "children", "dataTrackTag"];
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
function _objectSpread(e) {
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
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}



const IconButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      intent = 'secondary',
      variant = 'filled',
      size = 'md',
      loading = false,
      shape = 'square',
      children,
      dataTrackTag = 'icon_button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread(_objectSpread(_objectSpread({
    ref: ref,
    shape: shape,
    loading: loading,
    intent: intent,
    variant: variant,
    borderRadius: shape === 'square' ? _constants__WEBPACK_IMPORTED_MODULE_2__/* .BORDER_RADIUS_SIZES */ .XK[size] : undefined
  }, _constants__WEBPACK_IMPORTED_MODULE_2__/* .ICON_BUTTON_SIZES */ .eg[size]), rest), {}, {
    dataTrackTag: dataTrackTag
  }), children);
});
IconButton.displayName = 'IconButton';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconButton);
;
IconButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "IconButton"
};

/***/ }),

/***/ "../media/src/components/Video/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BIEvents: () => (/* binding */ BIEvents),
  CustomControls: () => (/* binding */ index_stories_CustomControls),
  Hooks: () => (/* binding */ Hooks),
  PlayOnHover: () => (/* binding */ PlayOnHover),
  Poster: () => (/* binding */ Poster),
  Primary: () => (/* binding */ Primary),
  Ratio: () => (/* binding */ Ratio),
  Subtitles: () => (/* binding */ index_stories_Subtitles),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js
var emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/PauseSolid.js
var PauseSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/PauseSolid.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/PlaySolid.js
var PlaySolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/PlaySolid.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/SoundMuted.js
var SoundMuted = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/SoundMuted.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/SoundMax.js
var SoundMax = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/SoundMax.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../media/src/components/Video/components/CustomControls/CircularProgress.tsx


const containerSize = 32;
const radius = containerSize / 2;
const strokeWidth = 2;
const CircularProgress = _ref => {
  let {
    percentage
  } = _ref;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - percentage * circumference;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    display: "flex",
    position: "absolute",
    width: containerSize,
    height: containerSize
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "svg",
    transform: "rotate(-180deg)",
    top: 0,
    left: 0,
    position: "absolute",
    height: radius * 2,
    width: radius * 2
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "circle",
    transition: "stroke-dashoffset 0.35s",
    transform: "rotate(90deg)",
    style: {
      transformOrigin: 'center'
    },
    stroke: themeVars/* colors */.Tj.grey_900,
    fill: themeVars/* colors */.Tj.transparent,
    strokeWidth: strokeWidth,
    r: normalizedRadius,
    cx: radius,
    cy: radius
  }), /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "circle",
    transition: "stroke-dashoffset 0.35s",
    transform: "rotate(90deg)",
    stroke: themeVars/* colors */.Tj.white,
    fill: themeVars/* colors */.Tj.transparent,
    strokeWidth: strokeWidth,
    strokeDasharray: "".concat(circumference, " ").concat(circumference),
    style: {
      strokeDashoffset,
      transformOrigin: 'center'
    },
    r: normalizedRadius,
    cx: radius,
    cy: radius
  })));
};
CircularProgress.displayName = 'CircularProgress';
/* harmony default export */ const CustomControls_CircularProgress = (CircularProgress);
try {
    // @ts-ignore
    CircularProgress.displayName = "CircularProgress";
    // @ts-ignore
    CircularProgress.__docgenInfo = { "description": "", "displayName": "CircularProgress", "props": { "percentage": { "defaultValue": null, "description": "", "name": "percentage", "required": true, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/Video/components/CustomControls/CircularProgress.tsx#CircularProgress"] = { docgenInfo: CircularProgress.__docgenInfo, name: "CircularProgress", path: "../media/src/components/Video/components/CustomControls/CircularProgress.tsx#CircularProgress" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../media/src/components/Video/components/CustomControls/ControlsIconButton.tsx





const ControlsIconButton = _ref => {
  let {
    children,
    onClick,
    percentagePlayed,
    ariaLabel
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    borderRadius: "circle",
    height: 32,
    width: 32,
    backgroundColor: "grey_1200",
    opacity: '0.8',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "opacity ".concat(theme_ve_css/* tokens */.L.animationDuration.slow1)
  }, !(0,lodash.isNil)(percentagePlayed) && /*#__PURE__*/react.createElement(CustomControls_CircularProgress, {
    percentage: percentagePlayed
  }), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    variant: "ghost",
    shape: "circle",
    onClick: onClick,
    size: "xs",
    "aria-label": ariaLabel,
    background: {
      default: 'transparent',
      hover: 'transparent',
      active: 'transparent'
    }
  }, children));
};
ControlsIconButton.displayName = 'ControlsIconButton';
/* harmony default export */ const CustomControls_ControlsIconButton = (ControlsIconButton);
try {
    // @ts-ignore
    ControlsIconButton.displayName = "ControlsIconButton";
    // @ts-ignore
    ControlsIconButton.__docgenInfo = { "description": "", "displayName": "ControlsIconButton", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": true, "type": { "name": "(e: React.MouseEvent<HTMLElement>) => void" } }, "percentagePlayed": { "defaultValue": null, "description": "", "name": "percentagePlayed", "required": false, "type": { "name": "number" } }, "ariaLabel": { "defaultValue": null, "description": "", "name": "ariaLabel", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/Video/components/CustomControls/ControlsIconButton.tsx#ControlsIconButton"] = { docgenInfo: ControlsIconButton.__docgenInfo, name: "ControlsIconButton", path: "../media/src/components/Video/components/CustomControls/ControlsIconButton.tsx#ControlsIconButton" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../media/src/components/Video/components/CustomControls/index.tsx





const CustomControls = _ref => {
  let {
    videoRef,
    setIsMuted,
    isMuted,
    isPlaying,
    setIsPlaying
  } = _ref;
  const [percentagePlayed, setPercentagePlayed] = (0,react.useState)(0);
  const mediaElement = videoRef.current;
  (0,react.useEffect)(() => {
    if (mediaElement) {
      const handleTimeUpdate = () => {
        setPercentagePlayed(mediaElement.currentTime / mediaElement.duration);
      };
      const handleEnded = () => {
        setIsPlaying(false);
      };
      mediaElement.addEventListener('timeupdate', handleTimeUpdate);
      mediaElement.addEventListener('ended', handleEnded);
      return () => {
        mediaElement.removeEventListener('timeupdate', handleTimeUpdate);
        mediaElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [mediaElement, setIsPlaying]);
  const handleMuteClick = e => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const handlePlayClick = e => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    height: "100%",
    position: "absolute",
    width: "100%",
    boxSizing: "borderBox",
    zIndex: "1",
    display: "flex",
    alignItems: "flexEnd"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    boxSizing: "borderBox",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingX: "3",
    paddingBottom: "3",
    gap: "2"
  }, /*#__PURE__*/react.createElement(CustomControls_ControlsIconButton, {
    onClick: handlePlayClick,
    percentagePlayed: percentagePlayed,
    ariaLabel: (0,translate/* translate */.T)('media.video.togglePlay')
  }, isPlaying ? /*#__PURE__*/react.createElement(PauseSolid/* default */.A, {
    size: "sm",
    color: "white"
  }) : /*#__PURE__*/react.createElement(PlaySolid/* default */.A, {
    size: "sm",
    color: "white"
  })), /*#__PURE__*/react.createElement(CustomControls_ControlsIconButton, {
    onClick: handleMuteClick,
    ariaLabel: (0,translate/* translate */.T)('media.video.toggleMute')
  }, isMuted ? /*#__PURE__*/react.createElement(SoundMuted/* default */.A, {
    size: "sm",
    color: "white"
  }) : /*#__PURE__*/react.createElement(SoundMax/* default */.A, {
    size: "sm",
    color: "white"
  }))));
};
CustomControls.displayName = 'CustomControls';
/* harmony default export */ const components_CustomControls = (CustomControls);
try {
    // @ts-ignore
    CustomControls.displayName = "CustomControls";
    // @ts-ignore
    CustomControls.__docgenInfo = { "description": "", "displayName": "CustomControls", "props": { "videoRef": { "defaultValue": null, "description": "", "name": "videoRef", "required": true, "type": { "name": "RefObject<HTMLVideoElement>" } }, "setIsPlaying": { "defaultValue": null, "description": "", "name": "setIsPlaying", "required": true, "type": { "name": "React.Dispatch<React.SetStateAction<boolean>>" } }, "setIsMuted": { "defaultValue": null, "description": "", "name": "setIsMuted", "required": true, "type": { "name": "React.Dispatch<React.SetStateAction<boolean>>" } }, "isPlaying": { "defaultValue": null, "description": "", "name": "isPlaying", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isMuted": { "defaultValue": null, "description": "", "name": "isMuted", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/Video/components/CustomControls/index.tsx#CustomControls"] = { docgenInfo: CustomControls.__docgenInfo, name: "CustomControls", path: "../media/src/components/Video/components/CustomControls/index.tsx#CustomControls" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../media/src/components/Video/components/Sources/index.tsx

const Sources = _ref => {
  let {
    sources
  } = _ref;
  return /*#__PURE__*/react.createElement(react.Fragment, null, sources.map(_ref2 => {
    let {
      src,
      type
    } = _ref2;
    return /*#__PURE__*/react.createElement("source", {
      role: "source",
      key: Math.floor(Math.random() * 100),
      src: src,
      type: type
    });
  }));
};
/* harmony default export */ const components_Sources = (Sources);
try {
    // @ts-ignore
    Sources.displayName = "Sources";
    // @ts-ignore
    Sources.__docgenInfo = { "description": "", "displayName": "Sources", "props": { "sources": { "defaultValue": null, "description": "", "name": "sources", "required": true, "type": { "name": "Source[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/Video/components/Sources/index.tsx#Sources"] = { docgenInfo: Sources.__docgenInfo, name: "Sources", path: "../media/src/components/Video/components/Sources/index.tsx#Sources" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../media/src/components/Video/components/Subtitle/index.tsx

const Subtitle = _ref => {
  let {
    src,
    label,
    srcLang,
    active = false
  } = _ref;
  return /*#__PURE__*/react.createElement("track", {
    role: "track",
    label: label,
    srcLang: srcLang,
    src: src,
    default: active,
    kind: "subtitles"
  });
};
/* harmony default export */ const components_Subtitle = (Subtitle);
try {
    // @ts-ignore
    Subtitle.displayName = "Subtitle";
    // @ts-ignore
    Subtitle.__docgenInfo = { "description": "", "displayName": "Subtitle", "props": { "active": { "defaultValue": { value: "false" }, "description": "", "name": "active", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "src": { "defaultValue": null, "description": "", "name": "src", "required": true, "type": { "name": "string" } }, "srcLang": { "defaultValue": null, "description": "", "name": "srcLang", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/Video/components/Subtitle/index.tsx#Subtitle"] = { docgenInfo: Subtitle.__docgenInfo, name: "Subtitle", path: "../media/src/components/Video/components/Subtitle/index.tsx#Subtitle" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../media/src/components/Video/components/Subtitles/index.tsx
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
function _objectSpread(e) {
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
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}



const Subtitles = _ref => {
  let {
    subtitles
  } = _ref;
  const {
    locale
  } = (0,getContext/* default */.A)();
  const filteredSubtitles = (0,react.useMemo)(() => {
    const withActiveLocale = subtitle => {
      const {
        srcLang
      } = subtitle;
      return _objectSpread(_objectSpread({}, subtitle), {}, {
        active: locale === srcLang
      });
    };
    return subtitles.map(withActiveLocale);
  }, [subtitles, locale]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, filteredSubtitles.map(_ref2 => {
    let {
      src,
      label,
      srcLang,
      active
    } = _ref2;
    return /*#__PURE__*/react.createElement(components_Subtitle, {
      key: src,
      src: src,
      label: label,
      srcLang: srcLang,
      active: active
    });
  }));
};
/* harmony default export */ const components_Subtitles = (Subtitles);
try {
    // @ts-ignore
    Subtitles.displayName = "Subtitles";
    // @ts-ignore
    Subtitles.__docgenInfo = { "description": "", "displayName": "Subtitles", "props": { "subtitles": { "defaultValue": null, "description": "", "name": "subtitles", "required": true, "type": { "name": "Subtitle[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/Video/components/Subtitles/index.tsx#Subtitles"] = { docgenInfo: Subtitles.__docgenInfo, name: "Subtitles", path: "../media/src/components/Video/components/Subtitles/index.tsx#Subtitles" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../media/src/components/Video/index.tsx
const _excluded = ["controls", "sources", "poster", "preload", "autoPlay", "width", "objectFit", "subtitles", "playOnHover", "withHoverActions", "muted", "onMouseEnter", "onMouseLeave", "onMouseOut", "preventHoverPause", "dataTrackTag"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}





const Video = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      controls = true,
      sources = [],
      poster = '',
      preload = '',
      autoPlay = false,
      width = '100%',
      objectFit = 'cover',
      subtitles = [],
      playOnHover,
      withHoverActions = true,
      muted,
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      preventHoverPause,
      dataTrackTag = 'video'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const videoRef = (0,react.useRef)(null);
  const [isMuted, setIsMuted] = (0,react.useState)(playOnHover ? true : muted);
  const [isPlaying, setIsPlaying] = (0,react.useState)(false);
  const [isAssetsLoaded, setIsAssetsLoaded] = (0,react.useState)(false);
  const includeHoverActions = playOnHover && withHoverActions;
  (0,react.useImperativeHandle)(ref, () => videoRef.current);
  const handleMouseEnter = e => {
    if (playOnHover) {
      var _videoRef$current;
      (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 || _videoRef$current.play();
      setIsPlaying(true);
      setIsAssetsLoaded(true);
    }
    onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(e);
  };
  const handleMouseOut = e => {
    if (playOnHover && isPlaying && !(preventHoverPause !== null && preventHoverPause !== void 0 && preventHoverPause(e))) {
      var _videoRef$current2;
      (_videoRef$current2 = videoRef.current) === null || _videoRef$current2 === void 0 || _videoRef$current2.pause();
      setIsPlaying(false);
    }
    onMouseOut === null || onMouseOut === void 0 || onMouseOut(e);
  };
  const handleMouseLeave = e => {
    if (playOnHover && isPlaying && !(preventHoverPause !== null && preventHoverPause !== void 0 && preventHoverPause(e))) {
      var _videoRef$current3;
      (_videoRef$current3 = videoRef.current) === null || _videoRef$current3 === void 0 || _videoRef$current3.pause();
      setIsPlaying(false);
    }
    onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(e);
  };
  const Wrapper = includeHoverActions ? Box/* default */.A : react.Fragment;
  const wrapperProps = includeHoverActions ? {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  } : {};
  return /*#__PURE__*/react.createElement(Wrapper, wrapperProps, includeHoverActions && /*#__PURE__*/react.createElement(components_CustomControls, {
    videoRef: videoRef,
    isMuted: isMuted,
    setIsMuted: setIsMuted,
    isPlaying: isPlaying,
    setIsPlaying: setIsPlaying
  }), /*#__PURE__*/react.createElement(Box/* default */.A, _extends({
    as: "video",
    objectFit: objectFit,
    ref: videoRef,
    autoPlay: autoPlay,
    controls: playOnHover ? false : controls,
    muted: isMuted,
    poster: poster,
    preload: preload,
    crossOrigin: "anonymous",
    role: "video",
    width: width,
    onMouseEnter: includeHoverActions ? undefined : handleMouseEnter,
    onMouseLeave: includeHoverActions ? undefined : handleMouseLeave,
    onMouseOut: handleMouseOut,
    dataTrackTag: dataTrackTag
  }, restProps), (!playOnHover || isAssetsLoaded) && /*#__PURE__*/react.createElement(components_Sources, {
    sources: sources
  }), /*#__PURE__*/react.createElement(components_Subtitles, {
    subtitles: subtitles
  })));
});
Video.displayName = 'Video';
/* harmony default export */ const components_Video = (Video);
try {
    // @ts-ignore
    Video.displayName = "Video";
    // @ts-ignore
    Video.__docgenInfo = { "description": "", "displayName": "Video", "props": { "sources": { "defaultValue": { value: "[]" }, "description": "Video sources. Shape: {\nsrc: video link |\ntype: video type\n}", "name": "sources", "required": false, "type": { "name": "Source[]" } }, "subtitles": { "defaultValue": { value: "[]" }, "description": "Video subtitles - user locale active by default.<br/>\nShape: {<br/>\n- label: string - Subtitle selection name |<br/>\n- src: string - Subtitle src |<br/>\n- srcLang: string - Subtitle locale (BCP 47 format)<br/>\n}<br/>\n{\n@link https://en.wikipedia.org/wiki/IETF_language_tag }", "name": "subtitles", "required": false, "type": { "name": "Subtitle[]" } }, "preload": { "defaultValue": { value: "" }, "description": "Video preload phase", "name": "preload", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"metadata\"" }] } }, "autoPlay": { "defaultValue": { value: "false" }, "description": "Video auto play on render", "name": "autoPlay", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "loop": { "defaultValue": null, "description": "Auto replay", "name": "loop", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "muted": { "defaultValue": null, "description": "Whether or not the Video audio is muted", "name": "muted", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "playsInline": { "defaultValue": null, "description": "Whether or not play the video within the element's playback area", "name": "playsInline", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "controls": { "defaultValue": { value: "true" }, "description": "Whether or not the Video has controls.", "name": "controls", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "poster": { "defaultValue": { value: "" }, "description": "A URL for an image to be shown while the video is downloading", "name": "poster", "required": false, "type": { "name": "string" } }, "objectFit": { "defaultValue": { value: "cover" }, "description": "", "name": "objectFit", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"fill\"" }, { "value": "\"unset\"" }, { "value": "\"contain\"" }, { "value": "\"cover\"" }] } }, "onPlay": { "defaultValue": null, "description": "onPlay https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event", "name": "onPlay", "required": false, "type": { "name": "ReactEventHandler<HTMLVideoElement>" } }, "onPause": { "defaultValue": null, "description": "onPause https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause_event", "name": "onPause", "required": false, "type": { "name": "ClipboardEventHandler<HTMLVideoElement>" } }, "playOnHover": { "defaultValue": null, "description": "Video trigger is on mouseEnter / mouseLeave", "name": "playOnHover", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "withHoverActions": { "defaultValue": { value: "true" }, "description": "Adding play/pause and mute/unmute buttons, available when using \"playOnHover=true\"", "name": "withHoverActions", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "preventHoverPause": { "defaultValue": null, "description": "Prevent video from pausing on mouseLeave, expect a stateful value", "name": "preventHoverPause", "required": false, "type": { "name": "(e: MouseEvent<HTMLVideoElement, MouseEvent>) => void" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": { value: "100%" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "dataTrackTag": { "defaultValue": { value: "video" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "htmlWidth": { "defaultValue": null, "description": "", "name": "htmlWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "htmlHeight": { "defaultValue": null, "description": "", "name": "htmlHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "ratio": { "defaultValue": null, "description": "", "name": "ratio", "required": false, "type": { "name": "enum", "value": [{ "value": "\"16/9\"" }, { "value": "\"1\"" }, { "value": "\"1.66/1\"" }, { "value": "\"1.33/1\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/Video/index.tsx#Video"] = { docgenInfo: Video.__docgenInfo, name: "Video", path: "../media/src/components/Video/index.tsx#Video" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+futile@2.28.5/node_modules/@fiverr-private/futile/lib/event/globalEventBus/index.js + 1 modules
var globalEventBus = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+futile@2.28.5/node_modules/@fiverr-private/futile/lib/event/globalEventBus/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/mixpanel/helpers/constants/index.js
var constants = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/mixpanel/helpers/constants/index.js");
;// ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/mixpanel/emitter/index.js



/**
 * Sends an event to the mixpanel key on the global event bus.
 * @param {String} eventName  The event's name.
 * @param {Object} properties The event's properties.
 *
 * @example
 *
 * mixpanel.track('Eventful Event', {
 *   'Property': value
 * });
 */
const track = (eventName, properties) => {
  if (!eventName || typeof eventName !== 'string') {
    throw new Error('The "eventName" argument must be provided to mixpanel.track');
  }
  globalEventBus/* globalEventBus */.g.deferred(constants/* EVENT_NAME */.b8, eventName, properties);
};

/**
 * Sends a page view event to the mixpanel key on the global event bus.
 * @param {Object} properties The event's properties.
 *
 * @example
 *
 * mixpanel.trackPageView({
 *   'Property': value
 * });
 */
const trackPageView = properties => {
  track(PAGE_VIEW, properties);
};
;// ../media/src/components/Video/utils/index.ts

const MOBILE_WEB = 'mobile_web';
const WEB = 'web';
const getPlatform = () => (0,getContext/* default */.A)().isTouch ? MOBILE_WEB : WEB;
const once = callback => {
  let called = false;
  return function () {
    if (!called) {
      callback(...arguments);
      called = true;
    }
  };
};
;// ../media/src/components/Video/hooks/trackChange/index.ts


/**
 * Text track change event fired twice
 * looks like select/deselect
 * its not related to track items count.
 * In case any->off/off->any there will be one event.
 * Another note - events are async
 * it means, they might have delay of execution between.
 */
const useTrackChange = (videoRef, onChange) => {
  (0,react.useEffect)(() => {
    var _video$textTracks;
    const video = videoRef.current;

    /**
     * Only test case
     * Jest jsdom does not fully implemented textTracks
     * textTracks is a regular JS Array - no `addEventListener` method
     */
    if (!(video !== null && video !== void 0 && (_video$textTracks = video.textTracks) !== null && _video$textTracks !== void 0 && _video$textTracks.addEventListener)) {
      return;
    }
    let track;
    const getActive = () => {
      var _ref;
      return (_ref = [...video.textTracks]) === null || _ref === void 0 ? void 0 : _ref.find(track => track.mode === 'showing');
    };
    const onTracksChange = () => {
      const activeTrack = getActive();
      if (activeTrack !== track) {
        track = activeTrack;
        onChange(activeTrack ? activeTrack.language : null);
      }
    };

    /**
     * API is not stable
     * In case dynamically adding video component
     * textTracks updated a bit later.
     * Component is mounted to dom, track has default attribute
     * but textTracks value is 'disabled'.
     * It might be the reason of firing change event on initial render - fired once.
     * But we cannot use initial event, because once user select subtitle
     * change event fired twice.
     * Using request animation frame to guarantee text tracks updated.
     */
    requestAnimationFrame(() => {
      track = getActive();
      video.textTracks.addEventListener('change', onTracksChange);
    });
    return () => {
      video.textTracks.removeEventListener('change', onTracksChange);
    };
  }, [videoRef, onChange]);
};
;// ../media/src/components/Video/hooks/mute/index.ts

const useMute = (videoRef, onMute, onUnmute) => {
  const [isMuted, setIsMuted] = (0,react.useState)(false);
  const handleVolumeChange = (0,react.useCallback)(() => {
    const video = videoRef.current;
    const newMutedState = video.muted || video.volume === 0;
    if (newMutedState !== isMuted) {
      setIsMuted(newMutedState);
      if (newMutedState) {
        onMute === null || onMute === void 0 || onMute();
      } else {
        onUnmute === null || onUnmute === void 0 || onUnmute();
      }
    }
  }, [videoRef, isMuted, onMute, onUnmute]);
  (0,react.useEffect)(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    setIsMuted(video.muted || video.volume === 0);
    video.addEventListener('volumechange', handleVolumeChange);
    return () => {
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [videoRef, handleVolumeChange]);
  return isMuted;
};
;// ../media/src/components/Video/hooks/analyticAdapter/index.ts





/**
 * Analytic video events adapter
 * it simplifies video events for analytic use.
 */
const useAnalyticAdapter = (videoRef, callbacks) => {
  const [played, setPlayed] = (0,react.useState)(false);
  const onPlay = (0,react.useMemo)(() => once(() => {
    callbacks.onPlay();
    setPlayed(true);
  }), [callbacks]);
  const onPause = (0,react.useMemo)(() => once(() => {
    callbacks.onPause();
    setPlayed(false);
  }), [callbacks]);
  const onEnded = (0,react.useMemo)(() => once(() => {
    if (played) {
      callbacks.onWatched();
    }
  }), [callbacks, played]);
  useTrackChange(videoRef, (0,react.useCallback)(locale => {
    callbacks.onSubtitleChange(locale);
  }, [callbacks]));
  useMute(videoRef, (0,react.useCallback)(() => {
    callbacks.onMute();
  }, [callbacks]), (0,react.useCallback)(() => {
    callbacks.onUnmute();
  }, [callbacks]));
  (0,react.useEffect)(() => {
    const video = videoRef.current;
    video === null || video === void 0 || video.addEventListener('play', onPlay);
    return () => video === null || video === void 0 ? void 0 : video.removeEventListener('play', onPlay);
  }, [videoRef, onPlay]);
  (0,react.useEffect)(() => {
    const video = videoRef.current;
    video === null || video === void 0 || video.addEventListener('pause', onPause);
    return () => video === null || video === void 0 ? void 0 : video.removeEventListener('pause', onPause);
  }, [videoRef, onPause]);
  (0,react.useEffect)(() => {
    const video = videoRef.current;
    video === null || video === void 0 || video.addEventListener('ended', onEnded);
    return () => video === null || video === void 0 ? void 0 : video.removeEventListener('ended', onEnded);
  }, [videoRef, onEnded]);
  (0,react.useEffect)(() => onEnded, [onEnded]);
  (0,react.useEffect)(() => {
    const onVisibilyChange = () => {
      /**
       * We consider few options to track user stop of interaction with a video
       * - on page close
       * - on visibility change
       *
       * We took visibility change way because
       * - recomended by mdn
       * - mobile friendly - close page might not be fired once mobile close task on background.
       *
       * Considering hidden state as user stopped to watch a video
       */
      if (document.visibilityState === 'hidden') {
        onEnded();
      }
    };
    document.addEventListener('visibilitychange', onVisibilyChange);
    return () => document.removeEventListener('visibilitychange', onVisibilyChange);
  }, [onEnded]);
};
;// ../media/src/components/Video/hooks/mixpanel/index.ts
function mixpanel_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function mixpanel_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? mixpanel_ownKeys(Object(t), !0).forEach(function (r) {
      mixpanel_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : mixpanel_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function mixpanel_defineProperty(e, r, t) {
  return (r = mixpanel_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function mixpanel_toPropertyKey(t) {
  var i = mixpanel_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function mixpanel_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}



const useVideoMixpanelEvents = (videoRef, meta) => {
  const BIMeta = (0,react.useRef)(meta);
  const callbacks = (0,react.useMemo)(() => {
    const sendEvent = (eventName, props) => {
      const {
        videoName,
        pageName
      } = BIMeta.current;
      const base = {
        'Page name': pageName,
        'Video name': videoName
      };
      return track(eventName, mixpanel_objectSpread(mixpanel_objectSpread({}, base), props));
    };
    const onPlay = () => {
      const {
        autoPlay,
        subtitleExist,
        subtitleLocale
      } = BIMeta.current;
      sendEvent('Video - Play', {
        'Auto play': autoPlay,
        'Subtitles exist': subtitleExist,
        'Subtitles language': subtitleLocale
      });
    };
    const onPause = () => {
      const {
        autoPlay,
        subtitleExist,
        subtitleLocale
      } = BIMeta.current;
      sendEvent('Video - Pause', {
        'Auto play': autoPlay,
        'Subtitles exist': subtitleExist,
        'Subtitles language': subtitleLocale
      });
    };
    const onWatched = () => {
      const {
        subtitleExist,
        subtitleLocale
      } = BIMeta.current;
      const {
        duration,
        currentTime
      } = videoRef.current || {};
      sendEvent('Video - Finished Watching', {
        'Watch duration': currentTime,
        'Video completed': duration === currentTime,
        'Subtitles exist': subtitleExist,
        'Subtitles language': subtitleLocale
      });
    };
    const onMute = () => {
      const {
        subtitleLocale
      } = BIMeta.current;
      const {
        currentTime
      } = videoRef.current || {};
      sendEvent('Video - Mute', {
        'Watch duration': currentTime,
        'Subtitles language': subtitleLocale
      });
    };
    const onUnmute = () => {
      const {
        subtitleLocale
      } = BIMeta.current;
      const {
        currentTime
      } = videoRef.current || {};
      sendEvent('Video - Unmute', {
        'Watch duration': currentTime,
        'Subtitles language': subtitleLocale
      });
    };
    const onSubtitleChange = locale => {
      const {
        subtitleLocale
      } = BIMeta.current;
      sendEvent('Video - changed subtitles language', {
        'Subtitles language': locale,
        'Subtitles previous language': subtitleLocale
      });
    };
    return {
      onPlay,
      onPause,
      onWatched,
      onMute,
      onUnmute,
      onSubtitleChange
    };
  }, [videoRef, BIMeta]);
  useAnalyticAdapter(videoRef, callbacks);
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/bigQuery/eventName/index.js
var eventName = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/bigQuery/eventName/index.js");
;// ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/tools/bigQuery/emitter/index.js


/**
 * Build an emitter function to sends events to BigQuery.
 *
 * @example
 *
 * listener = buildBigQueryEmitter("OBS::BIG_QUERY")
 */
const buildBigQueryEmitter = event_key => function () {
  for (var _len = arguments.length, events = new Array(_len), _key = 0; _key < _len; _key++) {
    events[_key] = arguments[_key];
  }
  return globalEventBus/* globalEventBus */.g.deferred(event_key, {
    events
  });
};
/* harmony default export */ const bigQuery_emitter = (buildBigQueryEmitter);
;// ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/bigQuery/emitter/index.js



/**
 * Sends events to BigQuery.
 * Each event should respect our raw events bigQuery schema:
 * https://bigquery.cloud.google.com/table/fiverr-bigquery:raw.events
 *
 * @example
 *
 * bigQuery.send({
 *   type: 'event1'
 * }, {
 *   type: 'event2'
 * });
 */
const send = bigQuery_emitter(eventName/* BIG_QUERY */.G);
/* harmony default export */ const src_bigQuery_emitter = ({
  send
});
;// ../media/src/components/Video/hooks/bigQuery/index.ts
function bigQuery_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function bigQuery_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? bigQuery_ownKeys(Object(t), !0).forEach(function (r) {
      bigQuery_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bigQuery_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function bigQuery_defineProperty(e, r, t) {
  return (r = bigQuery_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function bigQuery_toPropertyKey(t) {
  var i = bigQuery_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function bigQuery_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}





const useVideoBigQueryEvents = (videoRef, meta) => {
  const BIMeta = (0,react.useRef)(meta);
  const callbacks = (0,react.useMemo)(() => {
    const {
      locale,
      userId
    } = (0,getContext/* default */.A)();
    const sendEvent = props => {
      const {
        videoName,
        pageName
      } = BIMeta.current;
      const base = {
        group: 'user_action',
        platform: getPlatform(),
        page: {
          name: pageName,
          element: {
            name: videoName
          }
        },
        user: {
          id: userId,
          locale
        }
      };
      return src_bigQuery_emitter.send(bigQuery_objectSpread(bigQuery_objectSpread({}, base), props));
    };
    const onPlay = () => {
      const {
        autoPlay,
        subtitleLocale
      } = BIMeta.current;
      sendEvent({
        type: 'video_play',
        video: {
          is_auto_play: autoPlay,
          subtitles_language: subtitleLocale
        }
      });
    };
    const onPause = () => {
      const {
        autoPlay,
        subtitleLocale
      } = BIMeta.current;
      sendEvent({
        type: 'video_pause',
        video: {
          is_auto_play: autoPlay,
          subtitles_language: subtitleLocale
        }
      });
    };
    const onWatched = () => {
      const {
        subtitleLocale
      } = BIMeta.current;
      const {
        duration,
        currentTime
      } = videoRef.current || {};
      sendEvent({
        type: 'video_finished_watching',
        video: {
          is_completed: currentTime === duration,
          watch_duration: currentTime,
          subtitles_language: subtitleLocale
        }
      });
    };
    const onMute = () => {
      const {
        subtitleLocale
      } = BIMeta.current;
      const {
        currentTime
      } = videoRef.current || {};
      sendEvent({
        type: 'video_mute',
        video: {
          subtitles_language: subtitleLocale,
          watch_duration: currentTime
        }
      });
    };
    const onUnmute = () => {
      const {
        subtitleLocale
      } = BIMeta.current;
      const {
        currentTime
      } = videoRef.current || {};
      sendEvent({
        type: 'video_unmute',
        video: {
          subtitles_language: subtitleLocale,
          watch_duration: currentTime
        }
      });
    };
    const onSubtitleChange = incomeLocale => {
      const {
        subtitleLocale
      } = BIMeta.current;
      sendEvent({
        type: 'video_changed_subtitles_language',
        video: {
          subtitles_language: incomeLocale,
          subtitles_previous_language: subtitleLocale
        }
      });
    };
    return {
      onPlay,
      onPause,
      onWatched,
      onMute,
      onUnmute,
      onSubtitleChange
    };
  }, [videoRef, BIMeta]);
  useAnalyticAdapter(videoRef, callbacks);
};
;// ../media/src/components/Video/stories/assets/poster.png
const poster_namespaceObject = __webpack_require__.p + "static/media/poster.a49eede0.png";
;// ../media/src/components/Video/stories/assets/en.vtt
/* harmony default export */ const en = (__webpack_require__.p + "en.c4e5209.vtt");
;// ../media/src/components/Video/stories/assets/de.vtt
/* harmony default export */ const de = (__webpack_require__.p + "de.b539d58.vtt");
;// ../media/src/components/Video/stories/assets/es.vtt
/* harmony default export */ const es = (__webpack_require__.p + "es.a644de8.vtt");
;// ../media/src/components/Video/stories/helpers.ts



const sources = [{
  src: 'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov',
  type: 'video/mp4'
}];
const subtitles = [{
  src: en,
  label: 'English',
  srcLang: 'en-US'
}, {
  src: de,
  label: 'DE',
  srcLang: 'de-DE'
}, {
  src: es,
  label: 'ES',
  srcLang: 'es'
}];
;// ../media/src/components/Video/stories/index.stories.tsx
function index_stories_extends() {
  return index_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, index_stories_extends.apply(null, arguments);
}










const defaultArgs = {
  sources: sources
};
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore']
};
const Ratio = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    ratio: '1.66/1'
  }
};
const PlayOnHover = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    playOnHover: true
  }
};
const Poster = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    poster: poster_namespaceObject
  },
  parameters: {
    docs: {
      description: {
        story: 'Video uses `object-fit: cover;`<br/>It means that the poster image will have cover behavior.'
      }
    }
  }
};
const index_stories_Subtitles = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    subtitles: subtitles
  }
};
const BIEvents = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    subtitles: subtitles,
    autoPlay: false
  },
  parameters: {
    docs: {
      source: {
        code: "({ subtitles, autoPlay = false, sources }) => {\n  const videoRef = useRef<HTMLVideoElement>(null);\n  const { locale } = getContext();\n\n  const BIMeta = {\n    autoPlay,\n    subtitleLocale: subtitles.length > 0 ? locale : null,\n    subtitleExist: subtitles.length > 0,\n    pageName: 'Page name',\n    videoName: 'Video name'\n  };\n\n  useVideoMixpanelEvents(videoRef, BIMeta);\n  useVideoBigQueryEvents(videoRef, BIMeta);\n\n  return <Video sources={sources} autoPlay={autoPlay} subtitles={subtitles} ref={videoRef} />;\n}"
      }
    }
  },
  render: args => {
    const videoRef = (0,react.useRef)(null);
    const {
      locale
    } = (0,getContext/* default */.A)();
    const BIMeta = {
      autoPlay: args.autoPlay,
      subtitleLocale: subtitles.length > 0 ? locale : null,
      subtitleExist: subtitles.length > 0,
      pageName: 'Page name',
      videoName: 'Video name'
    };
    useVideoMixpanelEvents(videoRef, BIMeta);
    useVideoBigQueryEvents(videoRef, BIMeta);
    return /*#__PURE__*/react.createElement(components_Video, index_stories_extends({}, args, {
      ref: videoRef
    }));
  }
};
const Hooks = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    subtitles: subtitles,
    autoPlay: false
  },
  parameters: {
    docs: {
      source: {
        code: "(args) => {\n    const videoRef = useRef<HTMLVideoElement>(null);\n    const onMute = () => logger.info('mute');\n    const onUnmute = () => logger.info('unmute');\n    useMute(videoRef, onMute, onUnmute);\n\n    return <Video {...args} ref={videoRef} />;\n}"
      }
    }
  },
  render: args => {
    const videoRef = (0,react.useRef)(null);
    const onMute = () => emitter/* default */.A.info('mute');
    const onUnmute = () => emitter/* default */.A.info('unmute');
    useMute(videoRef, onMute, onUnmute);
    return /*#__PURE__*/react.createElement(components_Video, index_stories_extends({}, args, {
      ref: videoRef
    }));
  }
};
const index_stories_CustomControls = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    controls: false
  },
  parameters: {
    docs: {
      source: {
        code: "({ controls = false, sources }) => {\n  const videoRef = useRef<HTMLVideoElement>(null);\n\n  const isPlaying = ({ currentTime, paused, ended }) => currentTime > 0 && !paused && !ended;\n\n  const toggle = () => {\n    if (videoRef.current) {\n      if (isPlaying(videoRef.current)) {\n        videoRef.current.pause();\n      } else {\n        videoRef.current.play();\n      }\n    }\n  };\n\n  return (\n      <>\n        <Button onClick={toggle}>Play / Pause</Button>\n        <br />\n        <br />\n        <Video ref={videoRef} controls={controls} sources={sources} />\n      </>\n  );\n}"
      }
    }
  },
  render: args => {
    const videoRef = (0,react.useRef)(null);
    const isPlaying = _ref => {
      let {
        currentTime,
        paused,
        ended
      } = _ref;
      return currentTime > 0 && !paused && !ended;
    };
    const toggle = () => {
      if (videoRef.current) {
        if (isPlaying(videoRef.current)) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    };
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: toggle
    }, "Play / Pause"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(components_Video, index_stories_extends({}, args, {
      ref: videoRef
    })));
  }
};
const meta = {
  args: defaultArgs,
  title: 'Media/Video',
  component: components_Video
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore']\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Ratio.parameters = {
  ...Ratio.parameters,
  docs: {
    ...Ratio.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    ratio: '1.66/1'\n  }\n}",
      ...Ratio.parameters?.docs?.source
    }
  }
};
PlayOnHover.parameters = {
  ...PlayOnHover.parameters,
  docs: {
    ...PlayOnHover.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    playOnHover: true\n  }\n}",
      ...PlayOnHover.parameters?.docs?.source
    }
  }
};
Poster.parameters = {
  ...Poster.parameters,
  docs: {
    ...Poster.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    poster\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Video uses `object-fit: cover;`<br/>It means that the poster image will have cover behavior.'\n      }\n    }\n  }\n}",
      ...Poster.parameters?.docs?.source
    }
  }
};
index_stories_Subtitles.parameters = {
  ...index_stories_Subtitles.parameters,
  docs: {
    ...index_stories_Subtitles.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    subtitles\n  }\n}",
      ...index_stories_Subtitles.parameters?.docs?.source
    }
  }
};
BIEvents.parameters = {
  ...BIEvents.parameters,
  docs: {
    ...BIEvents.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    subtitles,\n    autoPlay: false\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `({ subtitles, autoPlay = false, sources }) => {\n  const videoRef = useRef<HTMLVideoElement>(null);\n  const { locale } = getContext();\n\n  const BIMeta = {\n    autoPlay,\n    subtitleLocale: subtitles.length > 0 ? locale : null,\n    subtitleExist: subtitles.length > 0,\n    pageName: 'Page name',\n    videoName: 'Video name'\n  };\n\n  useVideoMixpanelEvents(videoRef, BIMeta);\n  useVideoBigQueryEvents(videoRef, BIMeta);\n\n  return <Video sources={sources} autoPlay={autoPlay} subtitles={subtitles} ref={videoRef} />;\n}`\n      }\n    }\n  },\n  render: args => {\n    const videoRef = useRef<HTMLVideoElement>(null);\n    const {\n      locale\n    } = getContext();\n    const BIMeta = {\n      autoPlay: args.autoPlay,\n      subtitleLocale: subtitles.length > 0 ? locale : null,\n      subtitleExist: subtitles.length > 0,\n      pageName: 'Page name',\n      videoName: 'Video name'\n    };\n    useVideoMixpanelEvents(videoRef, BIMeta);\n    useVideoBigQueryEvents(videoRef, BIMeta);\n    return <Video {...args} ref={videoRef} />;\n  }\n}",
      ...BIEvents.parameters?.docs?.source
    }
  }
};
Hooks.parameters = {
  ...Hooks.parameters,
  docs: {
    ...Hooks.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    subtitles,\n    autoPlay: false\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `(args) => {\n    const videoRef = useRef<HTMLVideoElement>(null);\n    const onMute = () => logger.info('mute');\n    const onUnmute = () => logger.info('unmute');\n    useMute(videoRef, onMute, onUnmute);\n\n    return <Video {...args} ref={videoRef} />;\n}`\n      }\n    }\n  },\n  render: args => {\n    const videoRef = useRef<HTMLVideoElement>(null);\n    const onMute = () => logger.info('mute');\n    const onUnmute = () => logger.info('unmute');\n    useMute(videoRef, onMute, onUnmute);\n    return <Video {...args} ref={videoRef} />;\n  }\n}",
      ...Hooks.parameters?.docs?.source
    }
  }
};
index_stories_CustomControls.parameters = {
  ...index_stories_CustomControls.parameters,
  docs: {
    ...index_stories_CustomControls.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    controls: false\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `({ controls = false, sources }) => {\n  const videoRef = useRef<HTMLVideoElement>(null);\n\n  const isPlaying = ({ currentTime, paused, ended }) => currentTime > 0 && !paused && !ended;\n\n  const toggle = () => {\n    if (videoRef.current) {\n      if (isPlaying(videoRef.current)) {\n        videoRef.current.pause();\n      } else {\n        videoRef.current.play();\n      }\n    }\n  };\n\n  return (\n      <>\n        <Button onClick={toggle}>Play / Pause</Button>\n        <br />\n        <br />\n        <Video ref={videoRef} controls={controls} sources={sources} />\n      </>\n  );\n}`\n      }\n    }\n  },\n  render: args => {\n    const videoRef = useRef<HTMLVideoElement>(null);\n    const isPlaying = ({\n      currentTime,\n      paused,\n      ended\n    }) => currentTime > 0 && !paused && !ended;\n    const toggle = () => {\n      if (videoRef.current) {\n        if (isPlaying(videoRef.current)) {\n          videoRef.current.pause();\n        } else {\n          videoRef.current.play();\n        }\n      }\n    };\n    return <>\n        <Button onClick={toggle}>Play / Pause</Button>\n        <br />\n        <br />\n        <Video {...args} ref={videoRef} />\n      </>;\n  }\n}",
      ...index_stories_CustomControls.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Ratio","PlayOnHover","Poster","Subtitles","BIEvents","Hooks","CustomControls"];

/***/ }),

/***/ "../visuals/dist/esm/src/components/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AL: () => (/* binding */ FLAG_ICON_SIZES),
/* harmony export */   FO: () => (/* binding */ ILLUSTRATIONS_SIZES),
/* harmony export */   IJ: () => (/* binding */ L2_ICON_SIZES),
/* harmony export */   XI: () => (/* binding */ BRAND_ICON_SIZES),
/* harmony export */   bh: () => (/* binding */ SYSTEM_ICON_SIZES),
/* harmony export */   vy: () => (/* binding */ L1_ICON_SIZES),
/* harmony export */   xx: () => (/* binding */ FIVERR_LOGOS_SIZES)
/* harmony export */ });
const SYSTEM_ICON_SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
const BRAND_ICON_SIZES = SYSTEM_ICON_SIZES;
const L1_ICON_SIZES = {
  sm: 24,
  md: 32
};
const L2_ICON_SIZES = {
  sm: 48,
  md: 56,
  lg: 64,
  xl: 72,
  '2xl': 80
};
const FLAG_ICON_SIZES = {
  sm: 16,
  md: 20,
  lg: 24
};
const FIVERR_LOGOS_SIZES = {
  sm: {
    width: 90,
    height: 28
  },
  md: {
    width: 120,
    height: 36
  }
};
const ILLUSTRATIONS_SIZES = {
  sm: {
    width: 125,
    height: 100
  },
  md: {
    width: 280,
    height: 224
  },
  lg: {
    width: 340,
    height: 272
  }
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/PauseSolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const PauseSolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('PauseSolidIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 4a.667.667 0 0 1 .667-.667H6A.667.667 0 0 1 6.667 4v8a.667.667 0 0 1-.667.666H4.667A.667.667 0 0 1 4 12zM9.334 4A.667.667 0 0 1 10 3.333h1.334A.667.667 0 0 1 12 4v8a.667.667 0 0 1-.666.666H10A.667.667 0 0 1 9.334 12z"
  }));
};
PauseSolidIcon.id = 'PauseSolidIcon';
PauseSolidIcon.displayName = 'PauseSolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseSolidIcon);
;
PauseSolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PauseSolidIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/PlaySolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const PlaySolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('PlaySolidIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 3.86c0-.913 1-1.472 1.778-.994l6.728 4.14c.74.456.74 1.532 0 1.988l-6.728 4.14A1.167 1.167 0 0 1 3.5 12.14z",
    clipRule: "evenodd"
  }));
};
PlaySolidIcon.id = 'PlaySolidIcon';
PlaySolidIcon.displayName = 'PlaySolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaySolidIcon);
;
PlaySolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PlaySolidIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/SoundMax.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const SoundMaxIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('SoundMaxIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: "none",
    viewBox: "0 0 16 17",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.375 6.475A3.33 3.33 0 0 1 12.05 8.5a3.33 3.33 0 0 1-.675 2.025m2.025-5.4c.844.922 1.35 2.096 1.35 3.375s-.506 2.453-1.35 3.375M4.625 6.137H2.6a1.35 1.35 0 0 0-1.35 1.35v2.025c0 .746.604 1.35 1.35 1.35h2.025L9.35 13.9V3.1z",
    vectorEffect: "non-scaling-stroke"
  }));
};
SoundMaxIcon.id = 'SoundMaxIcon';
SoundMaxIcon.displayName = 'SoundMaxIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SoundMaxIcon);
;
SoundMaxIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SoundMaxIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/SoundMuted.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const SoundMutedIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('SoundMutedIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: "none",
    viewBox: "0 0 16 17",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m12.05 7.15 2.7 2.7m-2.7 0 2.7-2.7M4.625 6.137H2.6a1.35 1.35 0 0 0-1.35 1.35v2.025c0 .746.604 1.35 1.35 1.35h2.025L9.35 13.9V3.1z",
    vectorEffect: "non-scaling-stroke"
  }));
};
SoundMutedIcon.id = 'SoundMutedIcon';
SoundMutedIcon.displayName = 'SoundMutedIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SoundMutedIcon);
;
SoundMutedIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SoundMutedIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Spinner.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const SpinnerIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('SpinnerIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    viewBox: "0 0 32 32",
    "data-track-tag": dataTrackTag,
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24",
    opacity: 0.18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("animateTransform", {
    attributeName: "transform",
    dur: "0.8s",
    from: "0 16 16",
    repeatCount: "indefinite",
    to: "360 16 16",
    type: "rotate"
  })));
};
SpinnerIcon.id = 'SpinnerIcon';
SpinnerIcon.displayName = 'SpinnerIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerIcon);
;
SpinnerIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SpinnerIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ getStrokeColor)
/* harmony export */ });
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");

const getStrokeColor = color => {
  if (color === 'inherit') {
    return 'currentColor';
  }
  return _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .Tj[color];
};

/***/ }),

/***/ "../visuals/dist/esm/src/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ pascalToSnake)
/* harmony export */ });
const pascalToSnake = str => str.replace(/[A-Z]/g, (letter, index) => index === 0 ? letter.toLowerCase() : "_".concat(letter.toLowerCase()));

/***/ })

}]);
//# sourceMappingURL=components-Video-stories-index-stories.972e80c5.iframe.bundle.js.map