"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[1944],{

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

/***/ "../forms/src/components/Form/FormControl/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../forms/src/components/Form/FormContext/index.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../forms/src/components/Form/FormControl/helpers.ts");
const _excluded = ["children", "deps", "dataTrackTag", "dataTrackValue"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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





const FormControl = _ref => {
  var _props;
  let {
      children,
      deps,
      dataTrackTag = 'form_control',
      dataTrackValue
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const {
    FormHeader,
    FormElement,
    FormHelperText,
    FormCounter
  } = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getChildren */ .i0)(children);
  const {
    errors,
    name,
    value,
    isFormError,
    isSuccess,
    maxLength
  } = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .useReactHookForm */ .g4)(restProps);
  const {
    wrapper,
    footer
  } = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getStylingProps */ .z6)({
    isError: isFormError,
    isSuccess
  });
  const {
    ref,
    onChange,
    onBlur,
    control
  } = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getFormElementProps */ .L2)(_objectSpread(_objectSpread({}, FormElement === null || FormElement === void 0 ? void 0 : FormElement.props), {}, {
    name,
    deps
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormContext__WEBPACK_IMPORTED_MODULE_3__/* .FormContext */ .c.Provider, {
    value: {
      maxLength,
      isError: isFormError,
      isSuccess,
      onChange,
      ref,
      onBlur,
      name,
      error: errors || (FormHelperText === null || FormHelperText === void 0 || (_props = FormHelperText.props) === null || _props === void 0 ? void 0 : _props.error),
      value,
      control
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue || name
  }, wrapper), FormHeader, FormElement, (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .shouldRenderFormFooter */ .b4)({
    FormHelperText,
    FormCounter,
    errors
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, footer, FormHelperText, FormCounter)));
};
FormControl.displayName = 'FormControl';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormControl);
try {
    // @ts-ignore
    FormControl.displayName = "FormControl";
    // @ts-ignore
    FormControl.__docgenInfo = { "description": "", "displayName": "FormControl", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "deps": { "defaultValue": null, "description": "Validation will be triggered for the dependent inputs", "name": "deps", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "string[]" }] } }, "maxLength": { "defaultValue": null, "description": "Maximum string length allowed for the form element", "name": "maxLength", "required": false, "type": { "name": "number" } }, "isSuccess": { "defaultValue": null, "description": "Display success state", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isError": { "defaultValue": null, "description": "Display error state", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "form_control" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormControl/index.tsx#FormControl"] = { docgenInfo: FormControl.__docgenInfo, name: "FormControl", path: "../forms/src/components/Form/FormControl/index.tsx#FormControl" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Form/FormControl/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EmptyLines: () => (/* binding */ EmptyLines),
  Error: () => (/* binding */ Error),
  Optional: () => (/* binding */ Optional),
  Primary: () => (/* binding */ Primary),
  Success: () => (/* binding */ Success),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../forms/src/components/Form/FormControl/index.tsx
var FormControl = __webpack_require__("../forms/src/components/Form/FormControl/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@4.0.13/node_modules/zod/v4/classic/schemas.js + 10 modules
var schemas = __webpack_require__("../../node_modules/.pnpm/zod@4.0.13/node_modules/zod/v4/classic/schemas.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.61.1_react@17.0.2/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__("../../node_modules/.pnpm/react-hook-form@7.61.1_react@17.0.2/node_modules/react-hook-form/dist/index.esm.mjs");
// EXTERNAL MODULE: ../forms_resolvers/dist/esm/src/utils/zodResolver.js
var zodResolver = __webpack_require__("../forms_resolvers/dist/esm/src/utils/zodResolver.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/constants.js
var constants = __webpack_require__("../inputs/dist/esm/src/components/Input/constants.js");
;// ../inputs/dist/esm/src/components/NumberInput/utils.js
/**
 * In order to trigger an onChange event on an input, we need to call the native
 * value setter, since trying to set it directly would be intercepted by React.
 * Then we dispatch the DOM event as usual and it will bubble to React.
 *
 * @param target - The input element to trigger the event on.
 * @param newValue - The new value to set on the input.
 */const triggerOnChange = (target, newValue) => {
  var _Object$getOwnPropert;
  const nativeInputValueSetter = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set;
  nativeInputValueSetter === null || nativeInputValueSetter === void 0 || nativeInputValueSetter.call(target, newValue);
  const event = new Event('input', {
    bubbles: true
  });
  target.dispatchEvent(event);
};
;// ../inputs/dist/esm/src/components/NumberInput/index.js
const _excluded = ["min", "onChange", "onBlur", "onKeyDown", "onPaste", "minimumFractionDigits", "maximumFractionDigits", "disableArrowKeysOnChange", "stripTrailingZerosIfInteger", "dataTrackTag"];
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





const ALLOWED_CHARACTERS = (0,lodash.range)(10).map(String);
const NumberInput = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      min,
      onChange,
      onBlur,
      onKeyDown,
      onPaste,
      minimumFractionDigits = 0,
      maximumFractionDigits = Infinity,
      disableArrowKeysOnChange = false,
      stripTrailingZerosIfInteger = true,
      dataTrackTag = 'number_input'
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const localRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, () => localRef.current);
  const allowedCharacters = (0,react.useMemo)(() => {
    const keys = [...ALLOWED_CHARACTERS];
    if (maximumFractionDigits > 0) {
      keys.push('.');
    }
    if (min === undefined || Number(min) < 0) {
      keys.push('-');
    }
    return keys;
  }, [min, maximumFractionDigits]);
  const prohibitedRegex = (0,react.useMemo)(() => new RegExp("[^".concat(allowedCharacters.join(''), "]"), 'g'), [allowedCharacters]);
  const sanitizeValue = (0,react.useCallback)(stringValue => {
    let sanitizedValue = stringValue.replace(prohibitedRegex, '');
    const [wholePart, fractionalPart] = sanitizedValue.split('.');
    if ((fractionalPart === null || fractionalPart === void 0 ? void 0 : fractionalPart.length) > maximumFractionDigits) {
      sanitizedValue = "".concat(wholePart, ".").concat(fractionalPart.slice(0, maximumFractionDigits));
    }
    return sanitizedValue;
  }, [prohibitedRegex, maximumFractionDigits]);
  const formatValue = (0,react.useCallback)(numberValue => {
    if ((0,lodash.isNaN)(numberValue) || (0,lodash.isNull)(numberValue)) {
      return '';
    }
    if ((0,lodash.isUndefined)(numberValue)) {
      return undefined;
    }
    const roundedValue = (0,lodash.round)(numberValue, maximumFractionDigits);
    const [, fractionalPart] = roundedValue.toString().split('.');
    const originalFractionDigits = (fractionalPart === null || fractionalPart === void 0 ? void 0 : fractionalPart.length) || 0;
    const isInteger = originalFractionDigits === 0;
    const fractionDigits = isInteger && stripTrailingZerosIfInteger ? 0 : Math.max(minimumFractionDigits, originalFractionDigits);
    return roundedValue.toFixed(fractionDigits);
  }, [minimumFractionDigits, maximumFractionDigits, stripTrailingZerosIfInteger]);
  const handleKeyDown = e => {
    const isArrowKey = ['ArrowUp', 'ArrowDown'].includes(e.key);
    const isChar = e.key.length === 1;
    const isModifierKey = e.ctrlKey || e.metaKey || e.altKey;
    const shouldBlockArrowKey = disableArrowKeysOnChange && isArrowKey;
    const shouldBlockChar = isChar && !isModifierKey && !allowedCharacters.includes(e.key);
    if (shouldBlockArrowKey || shouldBlockChar) {
      e.preventDefault();
      return;
    }
    onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
  };
  const handleChange = e => {
    const sanitizedValue = sanitizeValue(e.currentTarget.value);
    if (sanitizedValue !== e.currentTarget.value) {
      e.preventDefault();
      triggerOnChange(e.currentTarget, sanitizedValue);
      return;
    }
    onChange === null || onChange === void 0 || onChange(e);
  };
  const handlePaste = e => {
    const {
      currentTarget
    } = e;
    onPaste === null || onPaste === void 0 || onPaste(e);
    setTimeout(() => {
      if (!currentTarget) {
        return;
      }
      const sanitizedValue = sanitizeValue(currentTarget.value);
      triggerOnChange(currentTarget, sanitizedValue);
    });
  };
  const handleWheel = e => {
    const element = e.currentTarget;
    const isFocused = document.activeElement === element;
    if (isFocused) {
      element.blur();
    }
  };
  const handleBlur = e => {
    const {
      currentTarget
    } = e;
    const {
      valueAsNumber
    } = currentTarget;
    const formattedValue = formatValue(valueAsNumber);
    triggerOnChange(currentTarget, formattedValue);
    onBlur === null || onBlur === void 0 || onBlur(e);
  };
  const formattedValue = (0,react.useMemo)(() => formatValue(props.value), [props.value, formatValue]);
  const formattedDefaultValue = (0,react.useMemo)(() => formatValue(props.defaultValue), [props.defaultValue, formatValue]);
  // To ensure we don't strip trailing zeros while the user is typing,
  // we'll defer formatting while the input is focused.
  const isFocused = typeof document !== 'undefined' && document.activeElement === localRef.current;
  const displayValue = isFocused && !(0,lodash.isNil)(props.value) && !(0,lodash.isNaN)(props.value) ? props.value : formattedValue;
  return /*#__PURE__*/react.createElement(Input/* default */.A, _objectSpread(_objectSpread({}, props), {}, {
    ref: localRef,
    type: "number",
    value: displayValue,
    defaultValue: formattedDefaultValue,
    min: min,
    onChange: handleChange,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    onPaste: handlePaste,
    onWheel: handleWheel,
    inputMode: maximumFractionDigits > 0 ? 'decimal' : 'numeric',
    dataTrackTag: dataTrackTag
  }));
});
NumberInput.displayName = 'NumberInput';
Object.assign(NumberInput, {
  id: constants/* INPUT_ID */.R0
});
/* harmony default export */ const components_NumberInput = (NumberInput);
;
NumberInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NumberInput"
};
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../forms/src/components/Form/index.tsx
var Form = __webpack_require__("../forms/src/components/Form/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/FormCounter/index.tsx + 1 modules
var FormCounter = __webpack_require__("../forms/src/components/Form/FormCounter/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/FormElement/index.tsx
var FormElement = __webpack_require__("../forms/src/components/Form/FormElement/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/FormHeader/index.tsx
var FormHeader = __webpack_require__("../forms/src/components/Form/FormHeader/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/FormHeader/FormLabel/index.tsx
var FormLabel = __webpack_require__("../forms/src/components/Form/FormHeader/FormLabel/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/FormHeader/FormSubtitle/index.tsx
var FormSubtitle = __webpack_require__("../forms/src/components/Form/FormHeader/FormSubtitle/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/FormHeader/FormTooltip/index.tsx
var FormTooltip = __webpack_require__("../forms/src/components/Form/FormHeader/FormTooltip/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/FormHeader/FormOptionalLabel/index.tsx
var FormOptionalLabel = __webpack_require__("../forms/src/components/Form/FormHeader/FormOptionalLabel/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/FormHelperText/index.tsx + 1 modules
var FormHelperText = __webpack_require__("../forms/src/components/Form/FormHelperText/index.tsx");
;// ../forms/src/components/Form/FormControl/stories/stories.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


















const PrimaryStory = args => {
  const schema = schemas/* object */.Ik({
    name: schemas/* string */.Yj().min(2, {
      message: 'name must contain at least 2 character(s)'
    })
  });
  const methods = (0,index_esm/* useForm */.mN)({
    resolver: (0,zodResolver/* zodResolver */.u)(schema)
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  return /*#__PURE__*/react.createElement(Form/* default */.A, {
    onSubmit: onSubmit,
    methods: methods
  }, /*#__PURE__*/react.createElement(FormControl/* default */.A, _extends({
    maxLength: 20
  }, args, {
    name: "name"
  }), /*#__PURE__*/react.createElement(FormHeader/* default */.A, null, /*#__PURE__*/react.createElement(FormLabel/* default */.A, null, "Label")), /*#__PURE__*/react.createElement(FormElement/* default */.A, null, /*#__PURE__*/react.createElement(components_NumberInput, {
    placeholder: "name"
  })), /*#__PURE__*/react.createElement(FormHelperText/* default */.A, null), /*#__PURE__*/react.createElement(FormCounter/* default */.A, null)), /*#__PURE__*/react.createElement(Button/* default */.A, {
    type: "submit"
  }, "Submit"));
};
const StateStory = args => {
  const schema = schemas/* object */.Ik({
    name: schemas/* string */.Yj().min(2, {
      message: 'name must contain at least 2 character(s)'
    })
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  const methods = (0,index_esm/* useForm */.mN)({
    resolver: (0,zodResolver/* zodResolver */.u)(schema)
  });
  return /*#__PURE__*/react.createElement(Form/* default */.A, {
    onSubmit: onSubmit,
    methods: methods
  }, /*#__PURE__*/react.createElement(FormControl/* default */.A, _extends({
    maxLength: 20
  }, args, {
    name: "name"
  }), /*#__PURE__*/react.createElement(FormHeader/* default */.A, null, /*#__PURE__*/react.createElement(FormLabel/* default */.A, null, "Label"), /*#__PURE__*/react.createElement(FormTooltip/* default */.A, {
    content: "Accusantium minima ad a dignissimos commodi facilis et tempore."
  }), /*#__PURE__*/react.createElement(FormSubtitle/* default */.A, null, "FormSubtitle")), /*#__PURE__*/react.createElement(FormElement/* default */.A, null, /*#__PURE__*/react.createElement(Input/* default */.A, {
    placeholder: "name"
  })), /*#__PURE__*/react.createElement(FormHelperText/* default */.A, {
    success: "This is a success message",
    error: "This is an error message"
  }), /*#__PURE__*/react.createElement(FormCounter/* default */.A, null)), /*#__PURE__*/react.createElement(Button/* default */.A, {
    type: "submit"
  }, "Submit"));
};
const OptionalStory = args => {
  const schema = schemas/* object */.Ik({
    name: schemas/* string */.Yj().min(2, {
      message: 'name must contain at least 2 character(s)'
    }).or(schemas/* literal */.eu(''))
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  const methods = (0,index_esm/* useForm */.mN)({
    resolver: (0,zodResolver/* zodResolver */.u)(schema)
  });
  return /*#__PURE__*/react.createElement(Form/* default */.A, {
    onSubmit: onSubmit,
    methods: methods
  }, /*#__PURE__*/react.createElement(FormControl/* default */.A, _extends({
    maxLength: 20
  }, args, {
    name: "name"
  }), /*#__PURE__*/react.createElement(FormHeader/* default */.A, null, /*#__PURE__*/react.createElement(FormLabel/* default */.A, null, "Label"), /*#__PURE__*/react.createElement(FormOptionalLabel/* default */.A, null), /*#__PURE__*/react.createElement(FormTooltip/* default */.A, {
    content: "Accusantium minima ad a dignissimos commodi facilis et tempore."
  }), /*#__PURE__*/react.createElement(FormSubtitle/* default */.A, null, "FormSubtitle")), /*#__PURE__*/react.createElement(FormElement/* default */.A, null, /*#__PURE__*/react.createElement(Input/* default */.A, {
    placeholder: "name"
  })), /*#__PURE__*/react.createElement(FormHelperText/* default */.A, null), /*#__PURE__*/react.createElement(FormCounter/* default */.A, null)), /*#__PURE__*/react.createElement(Button/* default */.A, {
    type: "submit"
  }, "Submit"));
};
const EmptyLinesDemo = () => {
  // Define validation schema that will trigger on form submission
  const schema = schemas/* object */.Ik({
    username1: schemas/* string */.Yj().min(3, {
      message: 'Username must be at least 3 characters'
    }),
    username2: schemas/* string */.Yj().min(3, {
      message: 'Username must be at least 3 characters'
    })
  });
  const methods1 = (0,index_esm/* useForm */.mN)({
    resolver: (0,zodResolver/* zodResolver */.u)(schema),
    mode: 'onSubmit' // Only validate on submit to show clear before/after
  });
  const methods2 = (0,index_esm/* useForm */.mN)({
    resolver: (0,zodResolver/* zodResolver */.u)(schema),
    mode: 'onSubmit' // Only validate on submit to show clear before/after
  });
  const onSubmit1 = data => {
    // eslint-disable-next-line no-console
    console.log('Form 1 submitted:', data);
  };
  const onSubmit2 = data => {
    // eslint-disable-next-line no-console
    console.log('Form 2 submitted:', data);
    void data;
  };
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "6"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "2"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "h_md",
    fontWeight: "bold"
  }, "FormHelperText emptyLines prop"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "b_md",
    color: "bodySecondary"
  }, "Type 1-2 characters and click \"Submit\" to trigger validation errors. Notice how the left form jumps when errors appear, while the right form maintains consistent spacing.")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "8"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4",
    flex: "1"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "h_xs",
    fontWeight: "bold"
  }, "\u274C Without emptyLines (layout jumps)"), /*#__PURE__*/react.createElement(Form/* default */.A, {
    methods: methods1,
    onSubmit: onSubmit1
  }, /*#__PURE__*/react.createElement(FormControl/* default */.A, {
    name: "username1"
  }, /*#__PURE__*/react.createElement(FormHeader/* default */.A, null, /*#__PURE__*/react.createElement(FormLabel/* default */.A, null, "Username")), /*#__PURE__*/react.createElement(FormElement/* default */.A, null, /*#__PURE__*/react.createElement(Input/* default */.A, {
    placeholder: "Enter username (try 1-2 chars)"
  })), /*#__PURE__*/react.createElement(FormHelperText/* default */.A, null)), /*#__PURE__*/react.createElement(Button/* default */.A, {
    type: "submit"
  }, "Submit"))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4",
    flex: "1"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "h_xs",
    fontWeight: "bold"
  }, "\u2705 With emptyLines=1 (no layout jumps)"), /*#__PURE__*/react.createElement(Form/* default */.A, {
    methods: methods2,
    onSubmit: onSubmit2
  }, /*#__PURE__*/react.createElement(FormControl/* default */.A, {
    name: "username2"
  }, /*#__PURE__*/react.createElement(FormHeader/* default */.A, null, /*#__PURE__*/react.createElement(FormLabel/* default */.A, null, "Username")), /*#__PURE__*/react.createElement(FormElement/* default */.A, null, /*#__PURE__*/react.createElement(Input/* default */.A, {
    placeholder: "Enter username (try 1-2 chars)"
  })), /*#__PURE__*/react.createElement(FormHelperText/* default */.A, {
    emptyLines: 1
  })), /*#__PURE__*/react.createElement(Button/* default */.A, {
    type: "submit"
  }, "Submit")))));
};
try {
    // @ts-ignore
    PrimaryStory.displayName = "PrimaryStory";
    // @ts-ignore
    PrimaryStory.__docgenInfo = { "description": "", "displayName": "PrimaryStory", "props": { "maxLength": { "defaultValue": null, "description": "Maximum string length allowed for the form element", "name": "maxLength", "required": false, "type": { "name": "number" } }, "isSuccess": { "defaultValue": null, "description": "Display success state", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isError": { "defaultValue": null, "description": "Display error state", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormControl/stories/stories.tsx#PrimaryStory"] = { docgenInfo: PrimaryStory.__docgenInfo, name: "PrimaryStory", path: "../forms/src/components/Form/FormControl/stories/stories.tsx#PrimaryStory" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    StateStory.displayName = "StateStory";
    // @ts-ignore
    StateStory.__docgenInfo = { "description": "", "displayName": "StateStory", "props": { "maxLength": { "defaultValue": null, "description": "Maximum string length allowed for the form element", "name": "maxLength", "required": false, "type": { "name": "number" } }, "isSuccess": { "defaultValue": null, "description": "Display success state", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isError": { "defaultValue": null, "description": "Display error state", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormControl/stories/stories.tsx#StateStory"] = { docgenInfo: StateStory.__docgenInfo, name: "StateStory", path: "../forms/src/components/Form/FormControl/stories/stories.tsx#StateStory" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    OptionalStory.displayName = "OptionalStory";
    // @ts-ignore
    OptionalStory.__docgenInfo = { "description": "", "displayName": "OptionalStory", "props": { "maxLength": { "defaultValue": null, "description": "Maximum string length allowed for the form element", "name": "maxLength", "required": false, "type": { "name": "number" } }, "isSuccess": { "defaultValue": null, "description": "Display success state", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isError": { "defaultValue": null, "description": "Display error state", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormControl/stories/stories.tsx#OptionalStory"] = { docgenInfo: OptionalStory.__docgenInfo, name: "OptionalStory", path: "../forms/src/components/Form/FormControl/stories/stories.tsx#OptionalStory" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../forms/src/components/Form/FormControl/stories/index.stories.tsx



const Primary = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: "\nconst schema = z.object({\n  name: z.string().min(2, { message: 'name must contain at least 2 character(s)' }),\n});\nconst onSubmit: SubmitHandler<FieldValues> = (data) => {\n    alert(JSON.stringify(data));\n};\nconst methods = useForm({\n  resolver: zodResolver(schema),\n});\n\nreturn (\n  <Form onSubmit={onSubmit} methods={methods} >\n    <FormControl maxLength={20}  {...args} name=\"name\">\n      <FormHeader>\n        <FormLabel>Label</FormLabel>\n      </FormHeader>\n      <FormElement>\n        <Input placeholder=\"name\" />\n      </FormElement>\n      <FormHelperText />\n      <FormCounter/>\n    </FormControl>\n    <Button type='submit'>Submit</Button>\n  </Form>\n);"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(PrimaryStory, args)
};
const Error = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: "\nconst schema = z.object({\n  name: z.string().min(2, { message: 'name must contain at least 2 character(s)' }),\n});\nconst onSubmit: SubmitHandler<FieldValues> = (data) => {\n    alert(JSON.stringify(data));\n};\nconst methods = useForm({\n  resolver: zodResolver(schema),\n});\n\nreturn (\n  <Form onSubmit={onSubmit} methods={methods}>\n    <FormControl maxLength={20} name=\"name\" isError>\n      <FormHeader>\n        <FormLabel>Label</FormLabel>\n        <FormTooltip content=\"Accusantium minima ad a dignissimos commodi facilis et tempore.\" />\n        <FormSubtitle>FormSubtitle</FormSubtitle>\n      </FormHeader>\n      <FormElement>\n        <Input placeholder=\"name\" />\n      </FormElement>\n      <FormHelperText error=\"This is an error message\"/>\n      <FormCounter />\n    </FormControl>\n    <Button type=\"submit\">Submit</Button>\n  </Form>\n);"
      }
    }
  },
  args: {
    isError: true
  },
  render: args => /*#__PURE__*/react.createElement(StateStory, args)
};
const Success = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: "\nconst schema = z.object({\n  name: z.string().min(2, { message: 'name must contain at least 2 character(s)' }),\n});\nconst onSubmit: SubmitHandler<FieldValues> = (data) => {\n    alert(JSON.stringify(data));\n};\nconst methods = useForm({\n  resolver: zodResolver(schema),\n});\n\nreturn (\n  <Form onSubmit={onSubmit} methods={methods}>\n    <FormControl maxLength={20} name=\"name\" isSuccess>\n      <FormHeader>\n        <FormLabel>Label</FormLabel>\n        <FormTooltip content=\"Accusantium minima ad a dignissimos commodi facilis et tempore.\" />\n        <FormSubtitle>FormSubtitle</FormSubtitle>\n      </FormHeader>\n      <FormElement>\n        <Input placeholder=\"name\" />\n      </FormElement>\n      <FormHelperText success=\"This is a success message\"/>\n      <FormCounter />\n    </FormControl>\n    <Button type=\"submit\">Submit</Button>\n  </Form>\n);"
      }
    }
  },
  args: {
    isSuccess: true
  },
  render: args => /*#__PURE__*/react.createElement(StateStory, args)
};
const Optional = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: "\nconst schema = z.object({\n  name: z.string().min(2, { message: 'name must contain at least 2 character(s)' }).or(z.literal('')),\n});\nconst onSubmit: SubmitHandler<FieldValues> = (data) => {\n  alert(JSON.stringify(data));\n};\nconst methods = useForm({\n  resolver: zodResolver(schema),\n});\n\nreturn (\n  <Form onSubmit={onSubmit} methods={methods}>\n    <FormControl maxLength={20} {...args} name=\"name\">\n      <FormHeader>\n        <FormLabel>Label</FormLabel>\n        <FormOptionalLabel />\n        <FormTooltip content=\"Accusantium minima ad a dignissimos commodi facilis et tempore.\" />\n        <FormSubtitle>FormSubtitle</FormSubtitle>\n      </FormHeader>\n      <FormElement>\n        <Input placeholder=\"name\" />\n      </FormElement>\n      <FormHelperText />\n      <FormCounter />\n    </FormControl>\n    <Button type=\"submit\">Submit</Button>\n  </Form>\n);"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(OptionalStory, args)
};
const EmptyLines = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the `FormHelperText.emptyLines` prop which prevents layout jumps when validation errors appear/disappear.'
      },
      source: {
        code: "\n        <FormHelperText emptyLines={1} />\n        "
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(EmptyLinesDemo, null)
};
const meta = {
  title: 'Forms/FormControl',
  component: FormControl/* default */.A
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst schema = z.object({\n  name: z.string().min(2, { message: 'name must contain at least 2 character(s)' }),\n});\nconst onSubmit: SubmitHandler<FieldValues> = (data) => {\n    alert(JSON.stringify(data));\n};\nconst methods = useForm({\n  resolver: zodResolver(schema),\n});\n\nreturn (\n  <Form onSubmit={onSubmit} methods={methods} >\n    <FormControl maxLength={20}  {...args} name=\"name\">\n      <FormHeader>\n        <FormLabel>Label</FormLabel>\n      </FormHeader>\n      <FormElement>\n        <Input placeholder=\"name\" />\n      </FormElement>\n      <FormHelperText />\n      <FormCounter/>\n    </FormControl>\n    <Button type='submit'>Submit</Button>\n  </Form>\n);`\n      }\n    }\n  },\n  render: args => <PrimaryStory {...args} />\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst schema = z.object({\n  name: z.string().min(2, { message: 'name must contain at least 2 character(s)' }),\n});\nconst onSubmit: SubmitHandler<FieldValues> = (data) => {\n    alert(JSON.stringify(data));\n};\nconst methods = useForm({\n  resolver: zodResolver(schema),\n});\n\nreturn (\n  <Form onSubmit={onSubmit} methods={methods}>\n    <FormControl maxLength={20} name=\"name\" isError>\n      <FormHeader>\n        <FormLabel>Label</FormLabel>\n        <FormTooltip content=\"Accusantium minima ad a dignissimos commodi facilis et tempore.\" />\n        <FormSubtitle>FormSubtitle</FormSubtitle>\n      </FormHeader>\n      <FormElement>\n        <Input placeholder=\"name\" />\n      </FormElement>\n      <FormHelperText error=\"This is an error message\"/>\n      <FormCounter />\n    </FormControl>\n    <Button type=\"submit\">Submit</Button>\n  </Form>\n);`\n      }\n    }\n  },\n  args: {\n    isError: true\n  },\n  render: args => <StateStory {...args} />\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
Success.parameters = {
  ...Success.parameters,
  docs: {
    ...Success.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst schema = z.object({\n  name: z.string().min(2, { message: 'name must contain at least 2 character(s)' }),\n});\nconst onSubmit: SubmitHandler<FieldValues> = (data) => {\n    alert(JSON.stringify(data));\n};\nconst methods = useForm({\n  resolver: zodResolver(schema),\n});\n\nreturn (\n  <Form onSubmit={onSubmit} methods={methods}>\n    <FormControl maxLength={20} name=\"name\" isSuccess>\n      <FormHeader>\n        <FormLabel>Label</FormLabel>\n        <FormTooltip content=\"Accusantium minima ad a dignissimos commodi facilis et tempore.\" />\n        <FormSubtitle>FormSubtitle</FormSubtitle>\n      </FormHeader>\n      <FormElement>\n        <Input placeholder=\"name\" />\n      </FormElement>\n      <FormHelperText success=\"This is a success message\"/>\n      <FormCounter />\n    </FormControl>\n    <Button type=\"submit\">Submit</Button>\n  </Form>\n);`\n      }\n    }\n  },\n  args: {\n    isSuccess: true\n  },\n  render: args => <StateStory {...args} />\n}",
      ...Success.parameters?.docs?.source
    }
  }
};
Optional.parameters = {
  ...Optional.parameters,
  docs: {
    ...Optional.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst schema = z.object({\n  name: z.string().min(2, { message: 'name must contain at least 2 character(s)' }).or(z.literal('')),\n});\nconst onSubmit: SubmitHandler<FieldValues> = (data) => {\n  alert(JSON.stringify(data));\n};\nconst methods = useForm({\n  resolver: zodResolver(schema),\n});\n\nreturn (\n  <Form onSubmit={onSubmit} methods={methods}>\n    <FormControl maxLength={20} {...args} name=\"name\">\n      <FormHeader>\n        <FormLabel>Label</FormLabel>\n        <FormOptionalLabel />\n        <FormTooltip content=\"Accusantium minima ad a dignissimos commodi facilis et tempore.\" />\n        <FormSubtitle>FormSubtitle</FormSubtitle>\n      </FormHeader>\n      <FormElement>\n        <Input placeholder=\"name\" />\n      </FormElement>\n      <FormHelperText />\n      <FormCounter />\n    </FormControl>\n    <Button type=\"submit\">Submit</Button>\n  </Form>\n);`\n      }\n    }\n  },\n  render: args => <OptionalStory {...args} />\n}",
      ...Optional.parameters?.docs?.source
    }
  }
};
EmptyLines.parameters = {
  ...EmptyLines.parameters,
  docs: {
    ...EmptyLines.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Demonstrates the `FormHelperText.emptyLines` prop which prevents layout jumps when validation errors appear/disappear.'\n      },\n      source: {\n        code: `\n        <FormHelperText emptyLines={1} />\n        `\n      }\n    }\n  },\n  render: () => <EmptyLinesDemo />\n}",
      ...EmptyLines.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Error","Success","Optional","EmptyLines"];

/***/ }),

/***/ "../forms/src/components/Form/FormHeader/FormOptionalLabel/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../forms/src/components/Form/constants.ts");




const FormOptionalLabel = _ref => {
  let {
    dataTrackTag = 'optional_Label',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    as: "span",
    color: "bodySecondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_2__/* .I18n */ .F, {
    k: "forms.formHeader.formOptionalLabel.optional"
  }));
};
FormOptionalLabel.id = _constants__WEBPACK_IMPORTED_MODULE_3__/* .FORM_OPTIONAL_LABEL_ID */ .Vn;
FormOptionalLabel.displayName = _constants__WEBPACK_IMPORTED_MODULE_3__/* .FORM_OPTIONAL_LABEL_ID */ .Vn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormOptionalLabel);
try {
    // @ts-ignore
    FormOptionalLabel.displayName = "FormOptionalLabel";
    // @ts-ignore
    FormOptionalLabel.__docgenInfo = { "description": "", "displayName": "FormOptionalLabel", "props": { "dataTrackTag": { "defaultValue": { value: "optional_Label" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormHeader/FormOptionalLabel/index.tsx#FormOptionalLabel"] = { docgenInfo: FormOptionalLabel.__docgenInfo, name: "FormOptionalLabel", path: "../forms/src/components/Form/FormHeader/FormOptionalLabel/index.tsx#FormOptionalLabel" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Form/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react-hook-form@7.61.1_react@17.0.2/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
const _excluded = ["children", "methods", "onSubmit", "width", "gap", "dataTrackTag"];
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



const Form = _ref => {
  let {
      children,
      methods,
      onSubmit,
      width = '100%',
      gap = '6',
      dataTrackTag = 'form'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_1__/* .FormProvider */ .Op, methods, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({
    as: "form",
    display: "flex",
    direction: "column",
    gap: gap,
    width: width
  }, onSubmit ? {
    onSubmit: methods === null || methods === void 0 ? void 0 : methods.handleSubmit(onSubmit)
  } : {}, restProps, {
    dataTrackTag: dataTrackTag
  }), children));
};
Form.displayName = 'Form';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);
try {
    // @ts-ignore
    Form.displayName = "Form";
    // @ts-ignore
    Form.__docgenInfo = { "description": "", "displayName": "Form", "props": { "children": { "defaultValue": null, "description": "FormControl or a Button type on submit.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "methods": { "defaultValue": null, "description": "The returned value from the RHF useForm hook.", "name": "methods", "required": true, "type": { "name": "UseFormReturn<TFormValues>" } }, "onSubmit": { "defaultValue": null, "description": "A callback submit handler that receives the form data as an argument", "name": "onSubmit", "required": false, "type": { "name": "SubmitHandler<TFormValues>" } }, "gap": { "defaultValue": { value: "6" }, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": { value: "100%" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "dataTrackTag": { "defaultValue": { value: "form" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/index.tsx#Form"] = { docgenInfo: Form.__docgenInfo, name: "Form", path: "../forms/src/components/Form/index.tsx#Form" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms_resolvers/dist/esm/src/utils/toNestErrors.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ toNestErrors)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react-hook-form@7.61.1_react@17.0.2/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _validateFieldsNatively__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../forms_resolvers/dist/esm/src/utils/validateFieldsNatively.js");


const toNestErrors = (errors, options) => {
  if (options.shouldUseNativeValidation) {
    (0,_validateFieldsNatively__WEBPACK_IMPORTED_MODULE_1__/* .validateFieldsNatively */ .w)(errors, options);
  }
  const fieldErrors = {};
  for (const path in errors) {
    const field = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .get */ .Jt)(options.fields, path);
    const error = Object.assign(errors[path] || {}, {
      ref: field && field.ref
    });
    if (isNameInFieldArray(options.names || Object.keys(errors), path)) {
      const fieldArrayErrors = Object.assign({}, (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .get */ .Jt)(fieldErrors, path));
      (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(fieldArrayErrors, 'root', error);
      (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(fieldErrors, path, fieldArrayErrors);
    } else {
      (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(fieldErrors, path, error);
    }
  }
  return fieldErrors;
};
const isNameInFieldArray = (names, name) => {
  const path = escapeBrackets(name);
  return names.some(n => escapeBrackets(n).match("^".concat(path, "\\.\\d+")));
};
/**
 * Escapes special characters in a string to be used in a regex pattern.
 * it removes the brackets from the string to match the `set` method.
 *
 * @param input - The input string to escape.
 * @returns The escaped string.
 */
function escapeBrackets(input) {
  return input.replace(/\]|\[/g, '');
}

/***/ }),

/***/ "../forms_resolvers/dist/esm/src/utils/validateFieldsNatively.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ validateFieldsNatively)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react-hook-form@7.61.1_react@17.0.2/node_modules/react-hook-form/dist/index.esm.mjs");

const setCustomValidity = (ref, fieldPath, errors) => {
  if (ref && 'reportValidity' in ref) {
    const error = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .get */ .Jt)(errors, fieldPath);
    ref.setCustomValidity(error && error.message || '');
    ref.reportValidity();
  }
};
// Native validation (web only)
const validateFieldsNatively = (errors, options) => {
  for (const fieldPath in options.fields) {
    const field = options.fields[fieldPath];
    if (field && field.ref && 'reportValidity' in field.ref) {
      setCustomValidity(field.ref, fieldPath, errors);
    } else if (field && field.refs) {
      field.refs.forEach(ref => setCustomValidity(ref, fieldPath, errors));
    }
  }
};

/***/ }),

/***/ "../forms_resolvers/dist/esm/src/utils/zodResolver.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ zodResolver)
/* harmony export */ });
/* harmony import */ var zod_v4_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/zod@4.0.13/node_modules/zod/v4/core/parse.js");
/* harmony import */ var zod_v4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/zod@4.0.13/node_modules/zod/v4/core/errors.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react-hook-form@7.61.1_react@17.0.2/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _toNestErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../forms_resolvers/dist/esm/src/utils/toNestErrors.js");
/* harmony import */ var _validateFieldsNatively__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../forms_resolvers/dist/esm/src/utils/validateFieldsNatively.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}




const isZod3Error = error => Array.isArray(error === null || error === void 0 ? void 0 : error.issues);
const isZod3Schema = schema => '_def' in schema && typeof schema._def === 'object' && 'typeName' in schema._def;
// instanceof is safe in Zod 4 (uses Symbol.hasInstance)
const isZod4Error = error => error instanceof zod_v4_core__WEBPACK_IMPORTED_MODULE_1__/* .$ZodError */ .a$;
const isZod4Schema = schema => '_zod' in schema && typeof schema._zod === 'object';
function parseZod3Issues(zodErrors, validateAllFieldCriteria) {
  const errors = {};
  for (; zodErrors.length;) {
    const error = zodErrors[0];
    const {
      code,
      message,
      path
    } = error;
    const _path = path.join('.');
    if (!errors[_path]) {
      if ('unionErrors' in error) {
        const unionError = error.unionErrors[0].errors[0];
        errors[_path] = {
          message: unionError.message,
          type: unionError.code
        };
      } else {
        errors[_path] = {
          message,
          type: code
        };
      }
    }
    if ('unionErrors' in error) {
      error.unionErrors.forEach(unionError => unionError.errors.forEach(e => zodErrors.push(e)));
    }
    if (validateAllFieldCriteria) {
      const types = errors[_path].types;
      const messages = types && types[error.code];
      errors[_path] = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__/* .appendErrors */ .Gb)(_path, validateAllFieldCriteria, errors, code, messages ? [].concat(messages, error.message) : error.message);
    }
    zodErrors.shift();
  }
  return errors;
}
function parseZod4Issues(zodErrors, validateAllFieldCriteria) {
  const errors = {};
  // const _zodErrors = zodErrors as z4.$ZodISsue; //
  for (; zodErrors.length;) {
    const error = zodErrors[0];
    const {
      code,
      message,
      path
    } = error;
    const _path = path.join('.');
    if (!errors[_path]) {
      if (error.code === 'invalid_union' && error.errors.length > 0) {
        const unionError = error.errors[0][0];
        errors[_path] = {
          message: unionError.message,
          type: unionError.code
        };
      } else {
        errors[_path] = {
          message,
          type: code
        };
      }
    }
    if (error.code === 'invalid_union') {
      error.errors.forEach(unionError => unionError.forEach(e => zodErrors.push(e)));
    }
    if (validateAllFieldCriteria) {
      const types = errors[_path].types;
      const messages = types && types[error.code];
      errors[_path] = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__/* .appendErrors */ .Gb)(_path, validateAllFieldCriteria, errors, code, messages ? [].concat(messages, error.message) : error.message);
    }
    zodErrors.shift();
  }
  return errors;
}
/**
 * Creates a resolver function for react-hook-form that validates form data using a Zod schema
 * @param {z3.ZodSchema<Input>} schema - The Zod schema used to validate the form data
 * @param {Partial<z3.ParseParams>} [schemaOptions] - Optional configuration options for Zod parsing
 * @param {Object} [resolverOptions] - Optional resolver-specific configuration
 * @param {('async'|'sync')} [resolverOptions.mode] - Validation mode. Use 'sync' for synchronous validation
 * @param {boolean} [resolverOptions.raw] - If true, returns the raw form values instead of the parsed data
 * @returns {Resolver<z3.output<typeof schema>>} A resolver function compatible with react-hook-form
 * @throws {Error} Throws if validation fails with a non-Zod error
 * @example
 * const schema = z3.object({
 *   name: z3.string().min(2),
 *   age: z3.number().min(18)
 * });
 *
 * useForm({
 *   resolver: zodResolver(schema)
 * });
 */
function zodResolver(schema, schemaOptions) {
  let resolverOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isZod3Schema(schema)) {
    return /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (values, _, options) {
        try {
          const data = yield schema[resolverOptions.mode === 'sync' ? 'parse' : 'parseAsync'](values, schemaOptions);
          if (options.shouldUseNativeValidation) {
            (0,_validateFieldsNatively__WEBPACK_IMPORTED_MODULE_4__/* .validateFieldsNatively */ .w)({}, options);
          }
          return {
            errors: {},
            values: resolverOptions.raw ? Object.assign({}, values) : data
          };
        } catch (error) {
          if (isZod3Error(error)) {
            return {
              values: {},
              errors: (0,_toNestErrors__WEBPACK_IMPORTED_MODULE_3__/* .toNestErrors */ .H)(parseZod3Issues(error.errors, !options.shouldUseNativeValidation && options.criteriaMode === 'all'), options)
            };
          }
          throw error;
        }
      });
      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  if (isZod4Schema(schema)) {
    return /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (values, _, options) {
        try {
          const parseFn = resolverOptions.mode === 'sync' ? zod_v4_core__WEBPACK_IMPORTED_MODULE_0__/* .parse */ .qg : zod_v4_core__WEBPACK_IMPORTED_MODULE_0__/* .parseAsync */ .EJ;
          const data = yield parseFn(schema, values, schemaOptions);
          if (options.shouldUseNativeValidation) {
            (0,_validateFieldsNatively__WEBPACK_IMPORTED_MODULE_4__/* .validateFieldsNatively */ .w)({}, options);
          }
          return {
            errors: {},
            values: resolverOptions.raw ? Object.assign({}, values) : data
          };
        } catch (error) {
          if (isZod4Error(error)) {
            return {
              values: {},
              errors: (0,_toNestErrors__WEBPACK_IMPORTED_MODULE_3__/* .toNestErrors */ .H)(parseZod4Issues(error.issues, !options.shouldUseNativeValidation && options.criteriaMode === 'all'), options)
            };
          }
          throw error;
        }
      });
      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }();
  }
  throw new Error('Invalid input: not a Zod schema');
}

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useClickOutside/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export events */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../hooks/dist/esm/src/hooks/useLatest/index.js");


const events = ['mousedown', 'touchstart'];
const useOnClickOutside = (ref, handler) => {
  const handlerRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(handler);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!handler || typeof document === 'undefined') {
      return;
    }
    const listener = event => {
      if (!ref.current || !handlerRef.current || ref.current.contains(event.target)) {
        return;
      }
      handlerRef.current(event);
    };
    events.forEach(event => {
      document.addEventListener(event, listener);
    });
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, listener);
      });
    };
  }, [handler, handlerRef, ref]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOnClickOutside);

/***/ }),

/***/ "../inputs/dist/esm/src/components/Input/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OL: () => (/* binding */ INPUT_SIZES),
/* harmony export */   R0: () => (/* binding */ INPUT_ID),
/* harmony export */   SS: () => (/* binding */ GROUP_ID),
/* harmony export */   Uj: () => (/* binding */ SUFFIX_ID),
/* harmony export */   fS: () => (/* binding */ PREFIX_ID)
/* harmony export */ });
/* unused harmony export DEFAULT_INPUT_ROLE */
const INPUT_ID = 'Input';
const GROUP_ID = 'InputGroup';
const PREFIX_ID = 'InputPrefix';
const SUFFIX_ID = 'InputSuffix';
const DEFAULT_INPUT_ROLE = 'textbox';
const INPUT_SIZES = {
  default: 'default',
  lg: 'lg'
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/Input/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../theme/dist/esm/src/atoms/utilityClasses.ve.css.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../inputs/dist/esm/src/components/Input/constants.js");
/* harmony import */ var _styles_ve_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../inputs/dist/esm/src/components/Input/styles.ve.css.js");
const _excluded = ["className", "type", "disabled", "isSuccess", "isError", "hideNumberSpinButton", "width", "inputSize", "resetInputStyle", "dataTrackTag", "dataTrackValue"];
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





const Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      className,
      type = 'text',
      disabled = false,
      isSuccess = false,
      isError = false,
      hideNumberSpinButton = false,
      width = '100%',
      inputSize = _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_SIZES */ .OL.default,
      resetInputStyle = false,
      dataTrackTag = 'input',
      dataTrackValue = '<value>'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const inputClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .hideNumberSpinButtonClass */ .m8]: type === 'number' && hideNumberSpinButton,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .successClass */ .We]: isSuccess,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .errorClass */ .PC]: isError,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .resetInputStyleClass */ .fE]: resetInputStyle,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .inputSizeLg */ .pL]: inputSize === _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_SIZES */ .OL.lg,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .inputSizeDefault */ .Zt]: inputSize === _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_SIZES */ .OL.default
  }, _styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .input */ .hF, _styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .inputSearchSelector */ .KJ, _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_3__/* .placeholder */ .q, className);
  const inputProps = _objectSpread({
    disabled,
    type,
    ref,
    dataTrackTag,
    dataTrackValue
  }, rest);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _objectSpread({
    as: "input",
    display: "inlineBlock",
    position: "relative",
    width: width,
    boxSizing: "borderBox",
    className: inputClassName
  }, inputProps));
});
Input.displayName = _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_ID */ .R0;
Object.assign(Input, {
  id: _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_ID */ .R0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);
;
Input.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Input"
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/Input/styles.ve.css.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PC: () => (/* binding */ errorClass),
  m8: () => (/* binding */ hideNumberSpinButtonClass),
  hF: () => (/* binding */ input),
  KJ: () => (/* binding */ inputSearchSelector),
  Zt: () => (/* binding */ inputSizeDefault),
  pL: () => (/* binding */ inputSizeLg),
  fE: () => (/* binding */ resetInputStyleClass),
  We: () => (/* binding */ successClass)
});

;// ../inputs/dist/esm/src/components/inputs/dist/esm/src/components/Input/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../inputs/dist/esm/src/components/Input/styles.ve.css.js.vanilla.css","source":"#H4sIAAAAAAAAE6WUTW6DMBCF9znFVFkTBeevuKtEtNeoDHbCNMS2jEmoqty9AjUkgC1aVWwsj7/3/GaQZ+8h+YiYPYWz22oOXxMAzThHeaAQEl1BuNbVywQgRymCTOAhsxRIs3mdtCTxaTzXEsQlsexJLBowUVVQZIyrCwWppOge6bkMDwPslbQUUGbCoK03rGGyQItK3g8lynBhAsM4lkVzyfsuhVBXUKgcOUzjbbyL47qYqlwZClNCyIKsfNeimToL83O5xuOX3F6lZdFwfcAd06MOoEpb97mTYsSbpRbP4v/mHnmOBUtywTsG0SraRE1jE5YeD0aVkreCb6v6czjdxvHgtBz8E4MhzuebBXn1Uf6RjXD3kXk49zAcqqvxDNsdiUnso/wZRjhvhhvnzuBQXfcyMK0FM0ymgoIVld2jyHmXoDS4iOSINkAphQkKjTJISmuVbCQ4Fjpnn46H4AFVpf0Tuul0uC7DE560MpZJ63gb5r1y+7J1C48Og646fdq+DmrXb4F9QwmbBQAA"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../inputs/dist/esm/src/components/Input/styles.ve.css.js

var errorClass = '_12j9atm5';
var hideNumberSpinButtonClass = '_12j9atm6';
var input = '_12j9atm3';
var inputSearchSelector = '_12j9atm0';
var inputSizeDefault = '_12j9atm2';
var inputSizeLg = '_12j9atm1';
var resetInputStyleClass = '_12j9atm7';
var successClass = '_12j9atm4';

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
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




const PopoverAnchor = _ref => {
  let {
    children,
    as = 'div',
    disabled,
    dataTestId,
    ariaHasPopup,
    fullWidth,
    onFocus,
    onBlur,
    flex,
    display,
    embed,
    onClick,
    dataTrackTag = 'popover_anchor',
    dataTrackValue
  } = _ref;
  const {
    open,
    setOpen,
    triggerEvent,
    floatingData: {
      refs
    }
  } = (0,_PopoverContext__WEBPACK_IMPORTED_MODULE_3__/* .usePopoverContext */ .C)();
  const triggerEventListeners = {
    click: {
      onClick: e => {
        setOpen(!open);
        onClick === null || onClick === void 0 || onClick(e);
      }
    },
    hover: {
      onMouseEnter: () => {
        setOpen(true);
      },
      onMouseLeave: () => {
        setOpen(false);
      }
    }
  };
  const getEventListeners = () => {
    if (disabled) {
      return {};
    }
    return _objectSpread({
      onFocus,
      onBlur
    }, triggerEventListeners[triggerEvent]);
  };
  const accessibleAttributes = triggerEvent === 'click' ? _objectSpread({
    'aria-expanded': open,
    'aria-haspopup': ariaHasPopup || 'true'
  }, embed ? {} : {
    role: 'button',
    tabIndex: -1
  }) : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread(_objectSpread(_objectSpread({
    as: as,
    height: "fit-content",
    maxWidth: "100%",
    width: fullWidth ? '100%' : 'fit-content',
    flex: flex,
    display: display,
    ref: refs.setReference,
    "data-testid": dataTestId,
    cursor: disabled ? 'default' : undefined
  }, getEventListeners()), embed ? {} : accessibleAttributes), {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), embed ? (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .renderChildren */ .s)(children, _objectSpread({}, accessibleAttributes)) : children);
};
PopoverAnchor.displayName = 'PopoverAnchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverAnchor);
;
PopoverAnchor.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PopoverAnchor"
};

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/PopoverContent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../transition/dist/esm/src/components/Fade/index.js");
/* harmony import */ var _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../transition/dist/esm/src/components/SlideFade/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../ui_utils/dist/esm/src/components/Portal/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../hooks/dist/esm/src/hooks/useClickOutside/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
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







const BACKWARD_COMPATIBILITY_COLORS = {
  [_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .Tj.white]: 'white',
  [_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .Tj.grey_1100]: 'grey_1100',
  [_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .Tj.blue_700]: 'blue_700'
};
const PopoverContent = _ref => {
  let {
    children,
    appendToBody = false,
    closeOnClickOutside = true,
    initialFocusRef,
    disablePadding = false,
    renderWhenClosed = false,
    disableBoxShadow = false,
    backgroundColor = 'white',
    zIndex = 'popover',
    animationType = 'fade',
    dataTestId,
    onAnimationStart,
    onAnimationEnd,
    borderRadius = 'lg',
    disableAutoFocus,
    minWidth,
    disableExitAnimation,
    withDelay = false,
    fullWidth,
    dataTrackTag = 'popover',
    dataTrackValue
  } = _ref;
  const {
    open,
    setOpen,
    triggerEvent,
    floatingData: {
      strategy,
      y,
      x,
      refs,
      isPositioned
    }
  } = (0,_PopoverContext__WEBPACK_IMPORTED_MODULE_10__/* .usePopoverContext */ .C)();
  const {
    isMobile
  } = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const actualBackgroundColor = Object.keys(BACKWARD_COMPATIBILITY_COLORS).includes(backgroundColor) ? BACKWARD_COMPATIBILITY_COLORS[backgroundColor] : backgroundColor;
  const clickOutsideHandler = e => {
    var _refs$reference$curre;
    const clickedOnAnchor = e.target === refs.reference.current;
    const clickedOnAnchorChild = (_refs$reference$curre = refs.reference.current) === null || _refs$reference$curre === void 0 ? void 0 : _refs$reference$curre.contains(e.target);
    if (clickedOnAnchor || clickedOnAnchorChild) {
      return;
    }
    setOpen(false);
  };
  (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(refs.floating, open && closeOnClickOutside ? clickOutsideHandler : undefined);
  (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)([{
    trigger: 'escape',
    handler: () => setOpen(false)
  }]);
  (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(() => {
    if (isPositioned && refs.floating.current && !disableAutoFocus) {
      refs.floating.current.focus();
      if (initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current) {
        initialFocusRef.current.focus();
      }
    }
  }, [isPositioned, refs.floating, initialFocusRef, disableAutoFocus]);
  const contentProps = {
    tabIndex: open ? -1 : undefined,
    padding: disablePadding ? '0' : '5',
    width: 'max-content',
    boxSizing: 'borderBox',
    overflowWrap: 'breakWord',
    borderRadius,
    position: strategy,
    top: y || 0,
    left: x || 0,
    minWidth: minWidth ? minWidth : undefined,
    maxWidth: isMobile || fullWidth ? '100%' : 500,
    backgroundColor: actualBackgroundColor,
    zIndex,
    dropShadow: disableBoxShadow ? undefined : 'z2',
    role: triggerEvent === 'click' ? 'dialog' : 'tooltip',
    'aria-hidden': !open,
    onMouseEnter: triggerEvent === 'hover' ? () => {
      setOpen(true);
    } : undefined,
    onMouseLeave: triggerEvent === 'hover' ? () => {
      setOpen(false);
    } : undefined
  };
  const Animation = animationType === 'slideFade' ? _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A : _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
  const duration = animationType === 'slideFade' ? 'moderate2' : undefined;
  const delay = triggerEvent === 'hover' ? {
    enter: withDelay ? 'slow3' : 'fast3',
    exit: 'fast3'
  } : undefined;
  const animationProps = {
    delay,
    duration,
    in: open,
    unmountOnExit: !renderWhenClosed,
    onAnimationStart,
    onAnimationEnd,
    reverse: animationType === 'slideFade' ? !disableExitAnimation : undefined
  };
  if (appendToBody) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Animation, animationProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, _objectSpread(_objectSpread({
      ref: refs.setFloating,
      "data-testid": dataTestId
    }, contentProps), {}, {
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue
    }), children)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Animation, animationProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, _objectSpread(_objectSpread({
    ref: refs.setFloating,
    "data-testid": dataTestId
  }, contentProps), {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), children));
};
PopoverContent.displayName = 'PopoverContent';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverContent);
;
PopoverContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PopoverContent"
};

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/PopoverContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ usePopoverContext),
/* harmony export */   n: () => (/* binding */ PopoverContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const PopoverContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const usePopoverContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PopoverContext);
  if (context === undefined) {
    throw new Error('usePopoverContext must be used within a PopoverContextProvider');
  }
  return context;
};

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");




const Popover = _ref => {
  let {
    children,
    isOpen,
    initialOpen = false,
    position = 'top',
    offset = 4,
    onOpenChanged = () => undefined,
    triggerEvent = 'click',
    disableFlip = false
  } = _ref;
  const [innerOpen, setInnerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialOpen);
  const arrowRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    isTouch
  } = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const open = isOpen === undefined ? innerOpen : isOpen;
  const isAutoPosition = position === 'auto';
  const positionSide = position.split('-')[0];
  const isHorizontalPosition = positionSide === 'right' || positionSide === 'left';
  const arrowExists = arrowRef === null || arrowRef === void 0 ? void 0 : arrowRef.current;
  const arrowMiddleware = arrowExists ? (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_1__/* .arrow */ .UE)({
    element: arrowRef,
    padding: 8
  }) : undefined;
  const arrowOffset = arrowExists ? Math.sqrt(2 * arrowRef.current.offsetWidth ** 2) / 2 : 0;
  const flipMiddleware = disableFlip || isAutoPosition ? undefined : (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .flip */ .UU)();
  const autoPlacementMiddleware = isAutoPosition ? (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .autoPlacement */ .RK)() : undefined;
  const setOpen = value => {
    setInnerOpen(value);
    onOpenChanged(value);
  };
  const floatingData = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_1__/* .useFloating */ .we)({
    placement: isAutoPosition ? undefined : position,
    open,
    whileElementsMounted: _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .autoUpdate */ .ll,
    middleware: [(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .offset */ .cY)(offset + arrowOffset), (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .shift */ .BN)({
      mainAxis: !isHorizontalPosition
    }), flipMiddleware, autoPlacementMiddleware, arrowMiddleware]
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PopoverContext__WEBPACK_IMPORTED_MODULE_4__/* .PopoverContext */ .n.Provider, {
    value: {
      floatingData,
      setOpen,
      open,
      arrowRef,
      triggerEvent: isTouch || triggerEvent === 'click' ? 'click' : 'hover'
    }
  }, children);
};
Popover.displayName = 'Popover';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popover);
;
Popover.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Popover"
};

/***/ }),

/***/ "../typography/dist/esm/src/components/Typography/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
const _excluded = ["as", "children", "fontFamily", "textAlign", "fontWeight", "decoration", "color", "lineHeight", "fontSize", "size", "dataTrackTag"];
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


const Typography = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      as = 'p',
      children,
      fontFamily = 'primary',
      textAlign,
      fontWeight,
      decoration,
      color,
      lineHeight,
      fontSize,
      size,
      dataTrackTag = 'typography'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    color: color,
    textAlign: textAlign,
    fontSize: fontSize || size,
    lineHeight: lineHeight || size,
    fontWeight: fontWeight,
    decoration: decoration,
    fontFamily: fontFamily,
    as: as,
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
Typography.displayName = 'Typography';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);
;
Typography.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Typography"
};

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/findChildByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ findChildByType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");


const findChildByType = (children, id) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).find(child => (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .childrenIdMatch */ .i)(child, id));

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
//# sourceMappingURL=1944.35b6b696.iframe.bundle.js.map