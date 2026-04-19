"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[9300],{

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

/***/ "../button/dist/esm/src/components/shared/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ICON_COLORS),
/* harmony export */   h: () => (/* binding */ ICON_SIZES)
/* harmony export */ });
const ICON_SIZES = {
  '3xs': 'sm',
  '2xs': 'sm',
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'md'
};
const ICON_COLORS = {
  light: 'grey_300',
  dark: 'grey_1200'
};

/***/ }),

/***/ "../data_display/dist/esm/src/components/DotIndicator/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LR: () => (/* binding */ PROPS_BY_SIZE),
/* harmony export */   Nw: () => (/* binding */ COLOR_BY_TYPE),
/* harmony export */   Zy: () => (/* binding */ getPropsByPosition),
/* harmony export */   yH: () => (/* binding */ INDICATOR_SIZES_MAP)
/* harmony export */ });
/* unused harmony export TYPES */
const TYPES = {
  NEUTRAL: 'neutral',
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  SPECIAL: 'special',
  WARNING: 'warning'
};
const INDICATOR_SIZES_MAP = {
  sm: 6,
  md: 8,
  lg: 10
};
const PROPS_BY_SIZE = {
  sm: {
    width: "".concat(INDICATOR_SIZES_MAP.sm, "px"),
    height: "".concat(INDICATOR_SIZES_MAP.sm, "px")
  },
  md: {
    width: "".concat(INDICATOR_SIZES_MAP.md, "px"),
    height: "".concat(INDICATOR_SIZES_MAP.md, "px")
  },
  lg: {
    width: "".concat(INDICATOR_SIZES_MAP.lg, "px"),
    height: "".concat(INDICATOR_SIZES_MAP.lg, "px")
  }
};
const getPropsByPosition = (offset, position, borderWidth) => {
  const borderWidthOffset = borderWidth === 'sm' ? 1 : 2;
  const positionsMap = {
    'top-right': {
      top: offset - borderWidthOffset,
      right: offset - borderWidthOffset
    },
    'top-left': {
      top: offset - borderWidthOffset,
      left: offset - borderWidthOffset
    },
    'bottom-right': {
      bottom: offset - borderWidthOffset,
      right: offset - borderWidthOffset
    },
    'bottom-left': {
      bottom: offset - borderWidthOffset,
      left: offset - borderWidthOffset
    }
  };
  return positionsMap[position];
};
const COLOR_BY_TYPE = {
  [TYPES.NEUTRAL]: 'grey_900',
  [TYPES.INFO]: 'blue_900',
  [TYPES.SUCCESS]: 'green_900',
  [TYPES.ERROR]: 'red_900',
  [TYPES.SPECIAL]: 'pink_900',
  [TYPES.WARNING]: 'yellow_900'
};

/***/ }),

/***/ "../data_display/dist/esm/src/components/DotIndicator/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../data_display/dist/esm/src/components/DotIndicator/constants.js");
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



const DotIndicator = _ref => {
  let {
    size = 'lg',
    type = 'neutral',
    position = 'bottom-right',
    isOverlay = false,
    content = '',
    offset = 0,
    borderWidth = 'sm',
    dataTrackTag = 'dot_indicator',
    dataTrackValue
  } = _ref;
  const currentValue = size === 'lg' ? content : null;
  const hasValue = Boolean(currentValue);
  const positionProps = isOverlay ? (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .getPropsByPosition */ .Zy)(offset, position, borderWidth) : {};
  const overlayProps = isOverlay ? {
    position: 'absolute',
    zIndex: '1'
  } : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread(_objectSpread(_objectSpread({
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: borderWidth,
    borderColor: "white",
    borderStyle: "solid",
    backgroundColor: _constants__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BY_TYPE */ .Nw[type],
    borderRadius: "circle"
  }, positionProps), overlayProps), hasValue ? {
    fontSize: 'b_xs',
    lineHeight: 'b_xxs',
    fontWeight: 'bold',
    color: 'white',
    paddingX: '1',
    paddingY: 'px',
    width: 'fit-content',
    minWidth: '8px'
  } : _constants__WEBPACK_IMPORTED_MODULE_2__/* .PROPS_BY_SIZE */ .LR[size]), currentValue);
};
DotIndicator.displayName = 'DotIndicator';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DotIndicator);
;
DotIndicator.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DotIndicator"
};

/***/ }),

/***/ "../data_display/dist/esm/src/components/Tag/TagCloseIcon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag_TagCloseIcon)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Times.js
var Times = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Times.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Tag/TagContext/index.js
var TagContext = __webpack_require__("../data_display/dist/esm/src/components/Tag/TagContext/index.js");
;// ../data_display/dist/esm/src/components/Tag/TagCloseIcon/styles.js
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
const getCloseIconStyles = _ref => {
  let {
    isClickable,
    variant,
    isDark
  } = _ref;
  return _objectSpread(_objectSpread({
    boxSizing: 'borderBox',
    display: 'inlineFlex',
    padding: '1',
    borderRadius: 'circle',
    outlineColor: {
      focusVisible: isDark ? 'white_10' : 'grey_1200'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    height: '24px',
    width: '24px'
  }, isClickable && variant === 'filled' && {
    backgroundColor: {
      default: 'transparent',
      hover: isDark ? 'white_20' : 'grey_200',
      active: isDark ? 'white_20' : 'grey_300'
    }
  }), isClickable && variant === 'outline' && {
    backgroundColor: {
      default: 'transparent',
      hover: isDark ? 'white_20' : 'grey_400',
      active: isDark ? 'white_20' : 'grey_500'
    }
  });
};
;// ../data_display/dist/esm/src/components/Tag/TagCloseIcon/index.js
function TagCloseIcon_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TagCloseIcon_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TagCloseIcon_ownKeys(Object(t), !0).forEach(function (r) {
      TagCloseIcon_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TagCloseIcon_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TagCloseIcon_defineProperty(e, r, t) {
  return (r = TagCloseIcon_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TagCloseIcon_toPropertyKey(t) {
  var i = TagCloseIcon_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TagCloseIcon_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}






const TagCloseIcon = _ref => {
  let {
    onClick,
    dataTrackTag = 'tag_close_icon',
    dataTrackValue
  } = _ref;
  const {
    clickableArea,
    setIsOpen,
    variant,
    hideOnClick,
    isDark
  } = (0,TagContext/* useTagContext */.v)();
  const isClickable = clickableArea === 'closeButton' || clickableArea === 'multi';
  const onCloseIconClick = e => {
    if (isClickable) {
      e.stopPropagation();
      onClick === null || onClick === void 0 || onClick(e);
      if (hideOnClick) {
        setIsOpen(false);
      }
    }
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, TagCloseIcon_objectSpread(TagCloseIcon_objectSpread({}, getCloseIconStyles({
    isClickable,
    variant,
    isDark
  })), {}, {
    as: isClickable ? 'button' : 'div',
    role: isClickable ? 'button' : undefined,
    "aria-label": isClickable ? (0,translate/* translate */.T)('data_display.tag.close') : undefined,
    onClick: onCloseIconClick,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), /*#__PURE__*/react.createElement(Times/* default */.A, {
    size: "sm",
    color: isDark ? 'grey_400' : 'grey_1200'
  }));
};
TagCloseIcon.displayName = 'TagCloseIcon';
TagCloseIcon.id = 'TagCloseIcon';
/* harmony default export */ const Tag_TagCloseIcon = (TagCloseIcon);
;
TagCloseIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TagCloseIcon"
};

/***/ }),

/***/ "../data_display/dist/esm/src/components/Tag/TagPrefix/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _TagContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../data_display/dist/esm/src/components/Tag/TagContext/index.js");




const TagPrefix = _ref => {
  let {
    children,
    dataTrackTag = 'tag_prefix',
    dataTrackValue
  } = _ref;
  const {
    size
  } = (0,_TagContext__WEBPACK_IMPORTED_MODULE_3__/* .useTagContext */ .v)();
  const hasAvatar = !!(0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .findChildByType */ .B)(children, 'Avatar');
  const hasTagImage = !!(0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .findChildByType */ .B)(children, 'TagImage');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    style: hasAvatar || hasTagImage ? {
      marginLeft: size === 'md' ? '-10px' : '-8px'
    } : undefined,
    display: "inlineFlex",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, children);
};
TagPrefix.displayName = 'TagPrefix';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagPrefix);
;
TagPrefix.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TagPrefix"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Heart.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const HeartIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('HeartIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m13.628 8.433-5.622 5.568-5.622-5.568a3.748 3.748 0 1 1 5.622-4.922 3.748 3.748 0 1 1 5.622 4.927",
    vectorEffect: "non-scaling-stroke"
  }));
};
HeartIcon.id = 'HeartIcon';
HeartIcon.displayName = 'HeartIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartIcon);
;
HeartIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeartIcon"
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Times.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const TimesIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('TimesIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M13 3 8 8m0 0-5 5m5-5 5 5M8 8 3 3",
    vectorEffect: "non-scaling-stroke"
  }));
};
TimesIcon.id = 'TimesIcon';
TimesIcon.displayName = 'TimesIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimesIcon);
;
TimesIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TimesIcon"
};

/***/ }),

/***/ "./src/docs/patterns/data_display/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DotIndicatorOnSelect: () => (/* binding */ DotIndicatorOnSelect),
/* harmony export */   TagCompositions: () => (/* binding */ TagCompositions),
/* harmony export */   TagCompositionsDark: () => (/* binding */ TagCompositionsDark),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
/* harmony import */ var _fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../data_display/dist/esm/src/components/Tag/index.js");
/* harmony import */ var _fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../data_display/dist/esm/src/components/Tag/TagPrefix/index.js");
/* harmony import */ var _fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../data_display/dist/esm/src/components/Tag/TagCloseIcon/index.js");
/* harmony import */ var _fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../data_display/dist/esm/src/components/DotIndicator/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _fiverr_private_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../forms/dist/esm/src/components/Select/index.js");
/* harmony import */ var _fiverr_private_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../forms/dist/esm/src/components/Select/Option/index.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Heart.js");
/* harmony import */ var _fiverr_private_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../avatar/dist/esm/src/components/Avatar/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
const _excluded = ["children"];
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








const TagCompositions = {
  tags: ['sidebar-ignore'],
  args: {
    children: 'Logo design'
  },
  render: _ref => {
    let {
      children
    } = _ref;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      hideOnClick: true,
      onClick: () => alert('Tag dismissed'),
      ariaLabel: "Dismiss the tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null)), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      hideOnClick: true,
      variant: "outline",
      onClick: () => alert('Tag dismissed'),
      ariaLabel: "Dismiss the tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      username: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.word()
    })), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      href: "https://fiverr.com",
      ariaLabel: "Logo design",
      size: "sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      username: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.word()
    })), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      variant: "outline",
      onClick: () => alert('Click handler triggered'),
      ariaLabel: "Logo design with heart"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null)), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)));
  }
};
const TagCompositionsDark = {
  tags: ['sidebar-ignore'],
  args: {
    theme: 'dark',
    children: 'Logo design'
  },
  render: _ref2 => {
    let {
        children
      } = _ref2,
      args = _objectWithoutProperties(_ref2, _excluded);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      backgroundColor: "black",
      padding: "2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({}, args, {
      hideOnClick: true,
      onClick: () => alert('Tag dismissed'),
      ariaLabel: "Dismiss the tag"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null)), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({
      clickableArea: "closeButton",
      hideOnClick: true,
      variant: "outline",
      onClick: () => alert('Tag dismissed'),
      ariaLabel: "Dismiss the tag"
    }, args), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      username: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.word()
    })), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({
      clickableArea: "tag",
      href: "https://fiverr.com",
      ariaLabel: "Logo design",
      size: "sm"
    }, args), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      username: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.word()
    })), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({
      clickableArea: "multi",
      variant: "outline",
      onClick: () => alert('Click handler triggered'),
      ariaLabel: "Logo design with heart"
    }, args), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null)), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)));
  }
};
const DotIndicatorOnSelect = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    height: "250px",
    marginLeft: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_forms__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    selectedItemRenderer: selectedOption => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      direction: "row",
      alignItems: "center",
      gap: "2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_data_display__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      type: selectedOption.props.value === 'online' ? 'success' : 'error'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, selectedOption.props.children)),
    placeholder: "Select online indication"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_forms__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    value: "online"
  }, "Online"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_forms__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    value: "offline"
  }, "Offline")))
};
const meta = {
  title: 'Data Display/Patterns'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
TagCompositions.parameters = {
  ...TagCompositions.parameters,
  docs: {
    ...TagCompositions.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: 'Logo design'\n  },\n  render: ({\n    children\n  }) => <Stack>\n      <Tag hideOnClick onClick={() => alert('Tag dismissed')} ariaLabel=\"Dismiss the tag\">\n        <TagPrefix>\n          <HeartIcon />\n        </TagPrefix>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n      <Tag hideOnClick variant=\"outline\" onClick={() => alert('Tag dismissed')} ariaLabel=\"Dismiss the tag\">\n        <TagPrefix>\n          <Avatar username={faker.lorem.word()} />\n        </TagPrefix>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n      <Tag href=\"https://fiverr.com\" ariaLabel=\"Logo design\" size=\"sm\">\n        <TagPrefix>\n          <Avatar username={faker.lorem.word()} />\n        </TagPrefix>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n      <Tag variant=\"outline\" onClick={() => alert('Click handler triggered')} ariaLabel=\"Logo design with heart\">\n        <TagPrefix>\n          <HeartIcon />\n        </TagPrefix>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n    </Stack>\n}",
      ...TagCompositions.parameters?.docs?.source
    }
  }
};
TagCompositionsDark.parameters = {
  ...TagCompositionsDark.parameters,
  docs: {
    ...TagCompositionsDark.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    theme: 'dark',\n    children: 'Logo design'\n  },\n  render: ({\n    children,\n    ...args\n  }) => <Stack backgroundColor=\"black\" padding=\"2\">\n      <Tag {...args} hideOnClick onClick={() => alert('Tag dismissed')} ariaLabel=\"Dismiss the tag\">\n        <TagPrefix>\n          <HeartIcon />\n        </TagPrefix>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n      <Tag clickableArea=\"closeButton\" hideOnClick variant=\"outline\" onClick={() => alert('Tag dismissed')} ariaLabel=\"Dismiss the tag\" {...args}>\n        <TagPrefix>\n          <Avatar username={faker.lorem.word()} />\n        </TagPrefix>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n      <Tag clickableArea=\"tag\" href=\"https://fiverr.com\" ariaLabel=\"Logo design\" size=\"sm\" {...args}>\n        <TagPrefix>\n          <Avatar username={faker.lorem.word()} />\n        </TagPrefix>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n      <Tag clickableArea=\"multi\" variant=\"outline\" onClick={() => alert('Click handler triggered')} ariaLabel=\"Logo design with heart\" {...args}>\n        <TagPrefix>\n          <HeartIcon />\n        </TagPrefix>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n    </Stack>\n}",
      ...TagCompositionsDark.parameters?.docs?.source
    }
  }
};
DotIndicatorOnSelect.parameters = {
  ...DotIndicatorOnSelect.parameters,
  docs: {
    ...DotIndicatorOnSelect.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <Stack height=\"250px\" marginLeft=\"4\">\n      <Select selectedItemRenderer={selectedOption => <Stack direction=\"row\" alignItems=\"center\" gap=\"2\">\n            <DotIndicator type={selectedOption.props.value === 'online' ? 'success' : 'error'} />\n            <Text>{selectedOption.props.children}</Text>\n          </Stack>} placeholder=\"Select online indication\">\n        <Option value=\"online\">Online</Option>\n        <Option value=\"offline\">Offline</Option>\n      </Select>\n    </Stack>\n}",
      ...DotIndicatorOnSelect.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["TagCompositions","TagCompositionsDark","DotIndicatorOnSelect"];

/***/ })

}]);
//# sourceMappingURL=9300.61a6c0c1.iframe.bundle.js.map