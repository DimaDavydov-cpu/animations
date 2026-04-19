"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[2940],{

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

/***/ "../layout_components/src/components/AspectRatio/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EmbedImage: () => (/* binding */ EmbedImage),
  EmbedVideo: () => (/* binding */ EmbedVideo),
  Primary: () => (/* binding */ Primary),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../media/dist/esm/src/components/Video/index.js + 6 modules
var Video = __webpack_require__("../media/dist/esm/src/components/Video/index.js");
// EXTERNAL MODULE: ../media/dist/esm/src/components/Image/index.js + 1 modules
var Image = __webpack_require__("../media/dist/esm/src/components/Image/index.js");
// EXTERNAL MODULE: ../layout_components/src/components/Layout/index.tsx + 1 modules
var Layout = __webpack_require__("../layout_components/src/components/Layout/index.tsx");
;// ../layout_components/src/components/AspectRatio/index.tsx
const _excluded = ["children", "ratio", "overflow", "dataTrackTag"];
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


const AspectRatio = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      ratio = '1',
      overflow = {
        default: 'hidden'
      },
      dataTrackTag = 'aspect_ratio'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Layout/* default */.A, _extends({
    ref: ref,
    ratio: ratio,
    overflow: overflow,
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
AspectRatio.displayName = 'AspectRatio';
/* harmony default export */ const components_AspectRatio = (AspectRatio);
try {
    // @ts-ignore
    AspectRatio.displayName = "AspectRatio";
    // @ts-ignore
    AspectRatio.__docgenInfo = { "description": "", "displayName": "AspectRatio", "props": { "ratio": { "defaultValue": { value: "1" }, "description": "", "name": "ratio", "required": false, "type": { "name": "enum", "value": [{ "value": "\"16/9\"" }, { "value": "\"1\"" }, { "value": "\"1.66/1\"" }, { "value": "\"1.33/1\"" }] } }, "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"label\"" }, { "value": "\"span\"" }, { "value": "\"summary\"" }, { "value": "\"a\"" }, { "value": "\"address\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"details\"" }, { "value": "\"div\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"header\"" }, { "value": "\"li\"" }, { "value": "\"main\"" }, { "value": "\"nav\"" }, { "value": "\"section\"" }, { "value": "\"ul\"" }] } }, "centered": { "defaultValue": null, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "color": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"heading\"" }, { "value": "\"bodyPrimary\"" }, { "value": "\"bodySecondary\"" }, { "value": "\"linkPrimary\"" }, { "value": "\"linkSecondary\"" }] } }, "fill": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "fill", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "columnGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "rowGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "gap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "boxShadow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "boxShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "borderStyle": { "defaultValue": null, "description": "", "name": "borderStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"dashed\"" }, { "value": "\"solid\"" }] } }, "borderColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "borderColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "borderWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderTopWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderTopWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderRightWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderRightWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderBottomWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderBottomWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderLeftWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderLeftWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "dropShadow": { "defaultValue": null, "description": "", "name": "dropShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": { value: "{ default: 'hidden' }" }, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "userSelect": { "defaultValue": null, "description": "", "name": "userSelect", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"text\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "outlineWidth": { "defaultValue": null, "description": "Supported values: sm = 1px, md = 2px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "outlineOffset": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, lg = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineOffset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }, { "value": "\"0\"" }] } }, "outlineColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "outlineStyle": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"solid\"" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "pointerEvents": { "defaultValue": null, "description": "", "name": "pointerEvents", "required": false, "type": { "name": "\"none\"" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "opacity": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "opacity", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"0.1\"" }, { "value": "\"0.2\"" }, { "value": "\"0.6\"" }, { "value": "\"0.8\"" }, { "value": "\"0.9\"" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"light\"" }, { "value": "\"inherit\"" }, { "value": "\"normal\"" }, { "value": "\"semibold\"" }] } }, "lineHeight": { "defaultValue": null, "description": "Supported values: b_xxs = 14px, b_xs = 18px, b_sm = 22px, b_md = 24px, b_lg = 26px, b_xl = 28px, b_xxl = 32px,\nh_xxs = 22px, h_xs = 25px, h_sm = 28px, h_md = 32px, h_lg = 36px h_xl = 38px, h_xxl = 48px, h_3xl = 56px, h_4xl = 66px, h_5xl = 74px, h_6xl = 92px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "lineHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "fontSize": { "defaultValue": null, "description": "Supported values: b_xxs = 10px, b_xs = 12px, b_sm = 14px, b_md = 16px, b_lg = 18px, b_xl = 20px, b_xxl = 24px,\nh_xxs = 16px, h_xs = 18px, h_sm = 20px, h_md = 24px, h_lg = 28px h_xl = 32px, h_xxl = 40px, h_3xl = 48px, h_4xl = 56px, h_5xl = 64px, h_6xl = 80px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fontSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"nowrap\"" }, { "value": "\"preWrap\"" }] } }, "dataTrackTag": { "defaultValue": { value: "aspect_ratio" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../layout_components/src/components/AspectRatio/index.tsx#AspectRatio"] = { docgenInfo: AspectRatio.__docgenInfo, name: "AspectRatio", path: "../layout_components/src/components/AspectRatio/index.tsx#AspectRatio" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../layout_components/src/components/AspectRatio/stories/index.stories.tsx



const defaultArgs = {
  width: 300,
  backgroundColor: 'blue_300'
};
const Primary = {
  tags: ['sidebar-ignore']
};
const EmbedVideo = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    ratio: '1.66/1',
    width: '100%',
    children: /*#__PURE__*/react.createElement(Video/* default */.A, {
      width: "100%",
      height: "100%",
      sources: [{
        src: 'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov',
        type: 'video/mp4'
      }]
    })
  }
};
const EmbedImage = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    ratio: '1.66/1',
    width: '100%',
    children: /*#__PURE__*/react.createElement(Image/* default */.A, {
      width: "100%",
      height: "100%",
      src: "https://fiverr-res.cloudinary.com/image/upload/w_800/q_auto,f_auto/v1/attachments/generic_asset/asset/a0883a462044f3fa59ce50c1e1fba0f9-1596964143452/audiobook-min.jpg",
      alt: "image"
    })
  }
};
const meta = {
  args: defaultArgs,
  title: 'layout-components/AspectRatio',
  component: components_AspectRatio
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore']\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
EmbedVideo.parameters = {
  ...EmbedVideo.parameters,
  docs: {
    ...EmbedVideo.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    ratio: '1.66/1',\n    width: '100%',\n    children: <Video width=\"100%\" height=\"100%\" sources={[{\n      src: 'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov',\n      type: 'video/mp4'\n    }]} />\n  }\n}",
      ...EmbedVideo.parameters?.docs?.source
    }
  }
};
EmbedImage.parameters = {
  ...EmbedImage.parameters,
  docs: {
    ...EmbedImage.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    ratio: '1.66/1',\n    width: '100%',\n    children: <Image width=\"100%\" height=\"100%\" src=\"https://fiverr-res.cloudinary.com/image/upload/w_800/q_auto,f_auto/v1/attachments/generic_asset/asset/a0883a462044f3fa59ce50c1e1fba0f9-1596964143452/audiobook-min.jpg\" alt=\"image\" />\n  }\n}",
      ...EmbedImage.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","EmbedVideo","EmbedImage"];

/***/ }),

/***/ "../layout_components/src/components/Layout/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utilityClasses.ve.css.js + 1 modules
var utilityClasses_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/utilityClasses.ve.css.js");
;// ../layout_components/src/components/Layout/constants.ts

const CENTERED = {
  paddingX: {
    default: '6',
    md: '8'
  },
  paddingTop: {
    default: '6',
    md: '8'
  },
  paddingBottom: {
    default: '12',
    md: '16'
  },
  maxWidth: {
    default: '1400px'
  },
  width: {
    default: '100%'
  },
  margin: {
    default: 'autoX'
  },
  className: utilityClasses_ve_css/* paddingX_0_xxl */.O
};
;// ../layout_components/src/components/Layout/index.tsx
const _excluded = ["children", "centered", "borderStyle", "borderColor", "className"],
  _excluded2 = ["className"];
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




const Layout = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      centered,
      borderStyle,
      borderColor,
      className: customClassName
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const centeredStyles = centered ? CENTERED : {};
  const {
    borderLeftWidth,
    borderTopWidth,
    borderBottomWidth,
    borderRightWidth,
    borderWidth
  } = restProps;
  const {
      className
    } = centeredStyles,
    stylingProps = _objectWithoutProperties(centeredStyles, _excluded2);
  const borderStylingReset = borderLeftWidth || borderTopWidth || borderBottomWidth || borderRightWidth || borderWidth ? {
    borderStyle: borderStyle || 'solid',
    borderColor: borderColor || 'border'
  } : undefined;
  return /*#__PURE__*/react.createElement(Box/* default */.A, _extends({
    ref: ref
  }, stylingProps, borderStylingReset, {
    boxSizing: "borderBox",
    className: classnames_default()(className, customClassName)
  }, restProps), children);
});
Layout.displayName = 'Layout';
/* harmony default export */ const components_Layout = (Layout);
try {
    // @ts-ignore
    Layout.displayName = "Layout";
    // @ts-ignore
    Layout.__docgenInfo = { "description": "", "displayName": "Layout", "props": { "centered": { "defaultValue": null, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"label\"" }, { "value": "\"span\"" }, { "value": "\"summary\"" }, { "value": "\"a\"" }, { "value": "\"address\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"details\"" }, { "value": "\"div\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"header\"" }, { "value": "\"li\"" }, { "value": "\"main\"" }, { "value": "\"nav\"" }, { "value": "\"section\"" }, { "value": "\"ul\"" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"heading\"" }, { "value": "\"bodyPrimary\"" }, { "value": "\"bodySecondary\"" }, { "value": "\"linkPrimary\"" }, { "value": "\"linkSecondary\"" }] } }, "fill": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "fill", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "columnGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "rowGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "gap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "boxShadow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "boxShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "borderStyle": { "defaultValue": null, "description": "", "name": "borderStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"dashed\"" }, { "value": "\"solid\"" }] } }, "borderColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "borderColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "borderWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderTopWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderTopWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderRightWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderRightWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderBottomWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderBottomWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderLeftWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderLeftWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "dropShadow": { "defaultValue": null, "description": "", "name": "dropShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "userSelect": { "defaultValue": null, "description": "", "name": "userSelect", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"text\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "outlineWidth": { "defaultValue": null, "description": "Supported values: sm = 1px, md = 2px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "outlineOffset": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, lg = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineOffset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }, { "value": "\"0\"" }] } }, "outlineColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "outlineStyle": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"solid\"" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "pointerEvents": { "defaultValue": null, "description": "", "name": "pointerEvents", "required": false, "type": { "name": "\"none\"" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "opacity": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "opacity", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"0.1\"" }, { "value": "\"0.2\"" }, { "value": "\"0.6\"" }, { "value": "\"0.8\"" }, { "value": "\"0.9\"" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"light\"" }, { "value": "\"inherit\"" }, { "value": "\"normal\"" }, { "value": "\"semibold\"" }] } }, "lineHeight": { "defaultValue": null, "description": "Supported values: b_xxs = 14px, b_xs = 18px, b_sm = 22px, b_md = 24px, b_lg = 26px, b_xl = 28px, b_xxl = 32px,\nh_xxs = 22px, h_xs = 25px, h_sm = 28px, h_md = 32px, h_lg = 36px h_xl = 38px, h_xxl = 48px, h_3xl = 56px, h_4xl = 66px, h_5xl = 74px, h_6xl = 92px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "lineHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "fontSize": { "defaultValue": null, "description": "Supported values: b_xxs = 10px, b_xs = 12px, b_sm = 14px, b_md = 16px, b_lg = 18px, b_xl = 20px, b_xxl = 24px,\nh_xxs = 16px, h_xs = 18px, h_sm = 20px, h_md = 24px, h_lg = 28px h_xl = 32px, h_xxl = 40px, h_3xl = 48px, h_4xl = 56px, h_5xl = 64px, h_6xl = 80px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fontSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"nowrap\"" }, { "value": "\"preWrap\"" }] } }, "wrap": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "wrap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }, { "value": "\"wrapReverse\"" }] } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "decoration": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "decoration", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"inherit\"" }, { "value": "\"underline\"" }, { "value": "\"overline\"" }, { "value": "\"lineThrough\"" }] } }, "fontStyle": { "defaultValue": null, "description": "", "name": "fontStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"normal\"" }, { "value": "\"italic\"" }, { "value": "\"oblique\"" }] } }, "fontFamily": { "defaultValue": null, "description": "", "name": "fontFamily", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"domaine\"" }, { "value": "\"accent\"" }, { "value": "\"serif\"" }] } }, "letterSpacing": { "defaultValue": null, "description": "", "name": "letterSpacing", "required": false, "type": { "name": "string" } }, "wordBreak": { "defaultValue": null, "description": "", "name": "wordBreak", "required": false, "type": { "name": "enum", "value": [{ "value": "\"breakAll\"" }, { "value": "\"keepAll\"" }] } }, "overflowWrap": { "defaultValue": null, "description": "", "name": "overflowWrap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"anywhere\"" }, { "value": "\"breakWord\"" }] } }, "webkitBoxOrient": { "defaultValue": null, "description": "", "name": "webkitBoxOrient", "required": false, "type": { "name": "\"vertical\"" } }, "webkitLineClamp": { "defaultValue": null, "description": "", "name": "webkitLineClamp", "required": false, "type": { "name": "number" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "htmlWidth": { "defaultValue": null, "description": "", "name": "htmlWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "htmlHeight": { "defaultValue": null, "description": "", "name": "htmlHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "ratio": { "defaultValue": null, "description": "", "name": "ratio", "required": false, "type": { "name": "enum", "value": [{ "value": "\"16/9\"" }, { "value": "\"1\"" }, { "value": "\"1.66/1\"" }, { "value": "\"1.33/1\"" }] } }, "boxSizing": { "defaultValue": null, "description": "", "name": "boxSizing", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"borderBox\"" }] } }, "listStyleType": { "defaultValue": null, "description": "", "name": "listStyleType", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"initial\"" }, { "value": "\"decimal\"" }] } }, "appearance": { "defaultValue": null, "description": "", "name": "appearance", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"textfield\"" }] } }, "objectFit": { "defaultValue": null, "description": "", "name": "objectFit", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"fill\"" }, { "value": "\"unset\"" }, { "value": "\"contain\"" }, { "value": "\"cover\"" }] } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignItems": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignItems", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "direction": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"column\"" }, { "value": "\"row\"" }, { "value": "\"rowReverse\"" }, { "value": "\"columnReverse\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "templateRows": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "templateRows", "required": false, "type": { "name": "enum", "value": [{ "value": "\"7_cols\"" }, { "value": "\"12_cols\"" }, { "value": "\"15_cols\"" }, { "value": "\"100%\"" }, { "value": "\"25%_75%\"" }, { "value": "\"75%_25%\"" }, { "value": "\"70%_30%\"" }, { "value": "\"30%_70%\"" }, { "value": "\"33%_33%_33%\"" }, { "value": "\"50%_50%\"" }, { "value": "\"25%_25%_25%_25%\"" }, { "value": "\"25%_25%_50%\"" }, { "value": "\"25%_50%_25%\"" }, { "value": "\"50%_25%_25%\"" }, { "value": "\"20%_20%_20%_20%_20%\"" }] } }, "templateColumns": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "templateColumns", "required": false, "type": { "name": "enum", "value": [{ "value": "\"7_cols\"" }, { "value": "\"12_cols\"" }, { "value": "\"15_cols\"" }, { "value": "\"100%\"" }, { "value": "\"25%_75%\"" }, { "value": "\"75%_25%\"" }, { "value": "\"70%_30%\"" }, { "value": "\"30%_70%\"" }, { "value": "\"33%_33%_33%\"" }, { "value": "\"50%_50%\"" }, { "value": "\"25%_25%_25%_25%\"" }, { "value": "\"25%_25%_50%\"" }, { "value": "\"25%_50%_25%\"" }, { "value": "\"50%_25%_25%\"" }, { "value": "\"20%_20%_20%_20%_20%\"" }] } }, "autoColumns": { "defaultValue": null, "description": "", "name": "autoColumns", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"minContent\"" }, { "value": "\"maxContent\"" }] } }, "autoRows": { "defaultValue": null, "description": "", "name": "autoRows", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"minContent\"" }, { "value": "\"maxContent\"" }] } }, "templateAreas": { "defaultValue": null, "description": "", "name": "templateAreas", "required": false, "type": { "name": "string" } }, "gridTemplateAreas": { "defaultValue": null, "description": "", "name": "gridTemplateAreas", "required": false, "type": { "name": "string" } }, "rowStart": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowStart", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"2\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"-1\"" }, { "value": "\"13\"" }, { "value": "\"15\"" }] } }, "columnStart": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnStart", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"2\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"-1\"" }, { "value": "\"13\"" }, { "value": "\"15\"" }] } }, "rowEnd": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowEnd", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"2\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"-1\"" }, { "value": "\"13\"" }, { "value": "\"15\"" }] } }, "columnEnd": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnEnd", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"2\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"-1\"" }, { "value": "\"13\"" }, { "value": "\"15\"" }] } }, "gridArea": { "defaultValue": null, "description": "", "name": "gridArea", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../layout_components/src/components/Layout/index.tsx#Layout"] = { docgenInfo: Layout.__docgenInfo, name: "Layout", path: "../layout_components/src/components/Layout/index.tsx#Layout" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../media/dist/esm/src/components/Image/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Image)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../media/dist/esm/src/components/Image/utils.js
const _excluded = ["default"];
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
const getKey = () => Math.random() * 1000;
const generateSrcSet = srcSet => {
  if (typeof srcSet === 'object') {
    return "".concat(srcSet.regular, " 1x, ").concat(srcSet.retina ? "".concat(srcSet.retina, " 2x") : '', " ");
  }
  return srcSet;
};
const getSource = imageSrc => {
  if (typeof imageSrc === 'object') {
    const {
        default: src
      } = imageSrc,
      sources = _objectWithoutProperties(imageSrc, _excluded);
    return _objectSpread({
      src
    }, sources);
  }
  return {
    src: imageSrc
  };
};
;// ../media/dist/esm/src/components/Image/index.js
const Image_excluded = ["src", "width", "alt", "objectFit", "dataTrackTag"],
  _excluded2 = ["src"];
function Image_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Image_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Image_ownKeys(Object(t), !0).forEach(function (r) {
      Image_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Image_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Image_defineProperty(e, r, t) {
  return (r = Image_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Image_toPropertyKey(t) {
  var i = Image_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Image_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Image_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = Image_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function Image_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}



const Image = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  var _Object$keys;
  let {
      src: imageSrc = '',
      width = '100%',
      alt,
      objectFit,
      dataTrackTag = 'image'
    } = _ref,
    rest = Image_objectWithoutProperties(_ref, Image_excluded);
  const _getSource = getSource(imageSrc),
    {
      src
    } = _getSource,
    sources = Image_objectWithoutProperties(_getSource, _excluded2);
  const isPictureTag = sources && Object.keys(sources).length > 0;
  return isPictureTag ? /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "picture"
  }, (_Object$keys = Object.keys(sources)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(key => /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "source",
    key: getKey(),
    srcSet: generateSrcSet(sources[key].srcSet),
    media: themeVars/* breakpoints */.fi[key]
  })), /*#__PURE__*/react.createElement(Box/* default */.A, Image_objectSpread(Image_objectSpread({
    as: "img",
    alt: alt,
    ref: ref,
    objectFit: objectFit,
    src: src,
    width: width
  }, rest), {}, {
    dataTrackTag: dataTrackTag
  }))) : /*#__PURE__*/react.createElement(Box/* default */.A, Image_objectSpread(Image_objectSpread({
    as: "img",
    alt: alt,
    ref: ref,
    objectFit: objectFit,
    src: src,
    width: width
  }, rest), {}, {
    dataTrackTag: dataTrackTag
  }));
});
Image.displayName = 'Image';
/* harmony default export */ const components_Image = (Image);
;
Image.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Image"
};

/***/ }),

/***/ "../theme/dist/esm/src/atoms/utilityClasses.ve.css.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ paddingX_0_xxl),
  q: () => (/* binding */ placeholder)
});

// EXTERNAL MODULE: ../theme/dist/esm/theme/dist/esm/src/theme.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../theme/dist/esm/src/theme.ve.css.js.vanilla.css","source":"#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"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
var extracted = __webpack_require__("../theme/dist/esm/theme/dist/esm/src/theme.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"../theme/dist/esm/src/theme.ve.css.js.vanilla.css\",\"source\":\"#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\"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js");
;// ../theme/dist/esm/src/theme/dist/esm/src/atoms/utilityClasses.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../theme/dist/esm/src/atoms/utilityClasses.ve.css.js.vanilla.css","source":"Ll8xb2dnNWRwMTo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1ocGthemYxdik7CiAgdGV4dC1vdmVyZmxvdzogdmFyKC0taHBrYXpmN2QpOwogIGZvbnQtc2l6ZTogdmFyKC0taHBrYXpmOGUpOwogIGxpbmUtaGVpZ2h0OiB2YXIoLS1ocGthemY4dyk7CiAgZm9udC1mYW1pbHk6IHZhcigtLWhwa2F6ZjRoKTsKfQpAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzYwcHgpIHsKICBib2R5IC5fMW9nZzVkcDAgewogICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1ocGthemY0dCk7CiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1ocGthemY0dCk7CiAgfQp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const webpack_plugin_extracted = ({});
;// ../theme/dist/esm/src/atoms/utilityClasses.ve.css.js


var paddingX_0_xxl = '_1ogg5dp0';
var placeholder = '_1ogg5dp1';

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

/***/ })

}]);
//# sourceMappingURL=2940.2cfcdadb.iframe.bundle.js.map