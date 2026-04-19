"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[7712],{

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

/***/ "../button/dist/esm/src/components/TextButton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_TextButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/BaseButton/style.js
var style = __webpack_require__("../button/dist/esm/src/components/BaseButton/style.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/BaseButton/hooks/useGetButtonElement/index.js
var useGetButtonElement = __webpack_require__("../button/dist/esm/src/components/BaseButton/hooks/useGetButtonElement/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
;// ../button/dist/esm/src/components/TextButton/style.js

const getColorByIntent = (disabled, intent) => {
  if (disabled) {
    return 'grey_800';
  }
  return intent === 'primary' ? 'grey_1200' : 'red_900';
};
const getStylingProps = (size, intent, variant, disabled) => ({
  fontSize: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => "b_".concat(value)),
  lineHeight: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => "b_".concat(value)),
  decoration: variant === 'default' ? {
    hover: 'underline'
  } : {
    default: 'underline'
  },
  color: getColorByIntent(disabled, intent)
});
;// ../button/dist/esm/src/components/TextButton/index.js
const _excluded = ["intent", "size", "variant", "disabled", "href", "children", "dataTrackTag"];
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





const TextButton = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      intent = 'primary',
      size = 'md',
      variant = 'default',
      disabled,
      href,
      children,
      dataTrackTag = 'text_button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    element,
    role
  } = (0,useGetButtonElement/* default */.A)(href);
  const baseStylingProps = (0,style/* getBaseStylingProps */.S)(disabled, false);
  const stylingProps = getStylingProps(size, intent, variant, disabled);
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseStylingProps), stylingProps), rest), {}, {
    as: element,
    role: role,
    href: href,
    ref: ref,
    disabled: disabled,
    dataTrackTag: dataTrackTag
  }), children);
});
TextButton.displayName = 'TextButton';
/* harmony default export */ const components_TextButton = (TextButton);
;
TextButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TextButton"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/ProgressLine/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_ProgressLine)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../tooltip/dist/esm/src/components/Tooltip/index.js
var Tooltip = __webpack_require__("../tooltip/dist/esm/src/components/Tooltip/index.js");
;// ../feedback/dist/esm/src/components/ProgressLine/constants.js
/**
 * The bottom limit of percentage.
 */const MIN_PERCENT = 0;
/**
 * The upper limit of percentage.
 */
const MAX_PERCENT = 100;
const LINE_HEIGHT = 8;
;// ../feedback/dist/esm/src/components/ProgressLine/helpers.js

/**
 * Gets a "safe" percent for progressbars.
 */
const getProgressPercent = percent => {
  if (isNaN(percent) || percent <= MIN_PERCENT) {
    return MIN_PERCENT;
  }
  if (percent >= MAX_PERCENT) {
    return MAX_PERCENT;
  }
  return percent;
};
const getProgressColors = _ref => {
  let {
    progressColor,
    trackColor
  } = _ref;
  const progressBackgroundColor = progressColor === 'paused' ? 'grey_800' : 'grey_1200';
  const trackBackgroundColor = trackColor === 'white' ? 'white' : 'grey_300';
  return {
    progressBackgroundColor,
    trackBackgroundColor
  };
};
;// ../feedback/dist/esm/src/components/ProgressLine/index.js
const _excluded = ["percent", "threshold", "startLabel", "endLabel", "progressTooltip", "appendTooltipToBody", "progressColor", "trackColor", "borderRadius", "dataTrackTag"];
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







const ProgressLine = _ref => {
  let {
      percent = 0,
      threshold,
      startLabel,
      endLabel,
      progressTooltip,
      appendTooltipToBody = false,
      progressColor = 'default',
      trackColor = 'default',
      borderRadius = 'circle',
      dataTrackTag = 'progress_line'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const progressWidth = getProgressPercent(percent);
  const {
    progressBackgroundColor,
    trackBackgroundColor
  } = getProgressColors({
    progressColor,
    trackColor
  });
  return /*#__PURE__*/react.createElement(Stack/* default */.A, _objectSpread(_objectSpread({
    alignItems: "center",
    role: "progressbar",
    "aria-valuenow": percent,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, restProps), {}, {
    dataTrackTag: dataTrackTag
  }), startLabel && /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold",
    color: "bodySecondary"
  }, startLabel), /*#__PURE__*/react.createElement(Box/* default */.A, {
    height: LINE_HEIGHT,
    flex: "1",
    position: "relative",
    backgroundColor: trackBackgroundColor,
    borderRadius: borderRadius
  }, threshold && /*#__PURE__*/react.createElement(Box/* default */.A, {
    height: LINE_HEIGHT,
    position: "absolute",
    left: "".concat(threshold, "%"),
    width: 2,
    backgroundColor: "grey_1000"
  }), /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread({
    height: LINE_HEIGHT,
    width: "".concat(progressWidth, "%"),
    backgroundColor: progressBackgroundColor,
    transition: "".concat(theme_ve_css/* tokens */.L.animationDuration.moderate1, " ").concat(theme_ve_css/* tokens */.L.animationTiming.linear, " width")
  }, progressWidth === MAX_PERCENT ? {
    borderRadius
  } : {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius
  })), progressTooltip && /*#__PURE__*/react.createElement(Box/* default */.A, {
    position: "absolute",
    left: "".concat(progressWidth, "%"),
    top: 0
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    isOpen: true,
    content: progressTooltip,
    appendToBody: appendTooltipToBody
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "span",
    height: LINE_HEIGHT,
    width: 0.1
  })))), endLabel && /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold",
    color: "bodySecondary"
  }, endLabel));
};
ProgressLine.displayName = 'ProgressLine';
/* harmony default export */ const components_ProgressLine = (ProgressLine);
;
ProgressLine.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ProgressLine"
};

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

/***/ "../hooks/dist/esm/src/hooks/useElementSize/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ hooks_useElementSize)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useLatest/index.js
var useLatest = __webpack_require__("../hooks/dist/esm/src/hooks/useLatest/index.js");
;// ../hooks/dist/esm/src/hooks/useEventListener/index.js


const useEventListener = (eventName, handler, element, options) => {
  const savedHandler = (0,useLatest/* default */.A)(handler);
  (0,react.useEffect)(() => {
    if (!(element && element.addEventListener)) {
      return;
    }
    const listener = event => savedHandler.current(event);
    element.addEventListener(eventName, listener, options);
    return () => {
      element.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options, savedHandler]);
};
/* harmony default export */ const hooks_useEventListener = (useEventListener);
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js
var useIsomorphicLayoutEffect = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");
;// ../hooks/dist/esm/src/hooks/useElementSize/index.js



const isWindow = element => element === window;
const useElementSize = element => {
  const [elementSize, setElementSize] = (0,react.useState)({
    width: 0,
    height: 0
  });
  const handleSize = (0,react.useCallback)(() => {
    if (!element) {
      return;
    }
    setElementSize({
      width: isWindow(element) ? element.innerWidth : element.scrollWidth,
      height: isWindow(element) ? element.innerHeight : element.scrollHeight
    });
  }, [element]);
  hooks_useEventListener('resize', handleSize, typeof window !== 'undefined' ? window : null);
  (0,useIsomorphicLayoutEffect/* default */.A)(() => {
    handleSize();
  }, [element]);
  return elementSize;
};
/* harmony default export */ const hooks_useElementSize = (useElementSize);

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");

const HIDDEN = 'hidden';
/**
 * Allows to lock document body overflow
 * @returns `void`
 */
const useLockBodyScroll = function () {
  let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(() => {
    // Get original body overflow
    const originalOverflowStyle = window.getComputedStyle(document.body).overflow;
    if (enabled && originalOverflowStyle !== HIDDEN) {
      // Prevent scrolling on mount
      document.body.style.overflow = HIDDEN;
      // Re-enable scrolling when component unmounts
      return () => {
        document.body.style.overflow = originalOverflowStyle;
      };
    }
    return () => undefined;
  }, [enabled]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLockBodyScroll);

/***/ }),

/***/ "../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ChoiceGroupContext),
/* harmony export */   x: () => (/* binding */ useChoiceGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const ChoiceGroupContext = Context.Provider;
function useChoiceGroupContext() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (context === undefined) {
    throw new Error("".concat(useChoiceGroupContext.name, " should be used only with ChoiceGroupContext"));
  }
  return context;
}

/***/ }),

/***/ "../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ChoiceGroup_ChoiceGroupItem)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js + 1 modules
var vanilla_extract_dynamic_esm = __webpack_require__("../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Checkbox/index.js + 2 modules
var Checkbox = __webpack_require__("../inputs/dist/esm/src/components/Checkbox/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/formsTokenColors.js
var formsTokenColors = __webpack_require__("../inputs/dist/esm/src/components/shared/formsTokenColors.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js
var useInputTrackValue = __webpack_require__("../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupContext/index.js
var ChoiceGroupContext = __webpack_require__("../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupContext/index.js");
;// ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/hooks/useChoiceGroupItem/index.js

function useChoiceGroupItem(_ref) {
  let {
    value,
    disabled,
    onClickProp
  } = _ref;
  const {
    value: groupValue,
    multiple,
    onItemClick,
    size = 'md',
    fill
  } = (0,ChoiceGroupContext/* useChoiceGroupContext */.x)();
  const isSelected = Array.isArray(groupValue) && multiple ? groupValue.includes(value) : groupValue === value;
  const onClick = newValue => {
    if (disabled) {
      return;
    }
    onItemClick(newValue);
    onClickProp(newValue);
  };
  return {
    isSelected,
    onClick,
    multiple,
    size,
    fill
  };
}
/* harmony default export */ const hooks_useChoiceGroupItem = (useChoiceGroupItem);
;// ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/style.js
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
const getPositionStylingProps = position => {
  switch (position) {
    case 'static':
      return {
        position: 'static',
        marginBottom: 'auto'
      };
    case 'absolute':
      return {
        position: 'absolute'
      };
    case 'center':
      return {
        display: 'flex',
        alignItems: 'center'
      };
    default:
      return {};
  }
};
const generateStylingProps = _ref => {
  let {
    checkboxPositioning,
    size
  } = _ref;
  const positionStylingProps = getPositionStylingProps(checkboxPositioning);
  const isAbsolute = checkboxPositioning === 'absolute';
  const sizeMap = {
    sm: {
      containerStylingProps: {
        paddingY: '1.5',
        paddingX: '3',
        lineHeight: 'b_sm',
        fontSize: 'b_sm'
      },
      checkboxStylingProps: _objectSpread(_objectSpread({}, positionStylingProps), isAbsolute && {
        top: '6px',
        right: '12px'
      })
    },
    md: {
      containerStylingProps: {
        paddingY: '2',
        paddingX: '3'
      },
      checkboxStylingProps: _objectSpread(_objectSpread({}, positionStylingProps), isAbsolute && {
        top: '8px',
        right: '12px'
      })
    },
    xl: {
      containerStylingProps: {
        paddingY: '5',
        paddingX: '6'
      },
      checkboxStylingProps: _objectSpread(_objectSpread({}, positionStylingProps), isAbsolute && {
        top: '20px',
        right: '24px'
      })
    }
  };
  return sizeMap[size] || {};
};
;// ../inputs/dist/esm/src/components/ChoiceGroup/inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/styles.ve.css.js.vanilla.css","source":"Lnk5bnN4ajEgewogIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS15OW5zeGowKTsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/styles.ve.css.js

var boxShadowClass = 'y9nsxj1';
var boxShadowColor = 'var(--y9nsxj0)';
;// ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/index.js
const _excluded = ["children", "onClick", "value", "disabled", "checkboxPositioning", "dataTrackTag", "dataTrackValue"];
function ChoiceGroupItem_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ChoiceGroupItem_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ChoiceGroupItem_ownKeys(Object(t), !0).forEach(function (r) {
      ChoiceGroupItem_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ChoiceGroupItem_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ChoiceGroupItem_defineProperty(e, r, t) {
  return (r = ChoiceGroupItem_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ChoiceGroupItem_toPropertyKey(t) {
  var i = ChoiceGroupItem_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function ChoiceGroupItem_toPrimitive(t, r) {
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










function ChoiceGroupItem(_ref) {
  let {
      children,
      onClick: onClickProp = lodash.noop,
      value,
      disabled = false,
      checkboxPositioning = 'static',
      dataTrackTag = 'choice_group_item',
      dataTrackValue
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const trackValue = (0,useInputTrackValue/* useInputTrackValue */.y)({
    dataTrackValue,
    value
  });
  const {
    isSelected,
    onClick,
    multiple,
    size,
    fill
  } = hooks_useChoiceGroupItem({
    value,
    onClickProp,
    disabled
  });
  const {
    containerStylingProps,
    checkboxStylingProps
  } = generateStylingProps({
    checkboxPositioning,
    size
  });
  const borderColor = disabled ? formsTokenColors/* formsTokenColors */.V.disabledToggleBackgroundColor : formsTokenColors/* formsTokenColors */.V.interactiveColor;
  const handleKeyDown = event => {
    const {
      code
    } = event;
    if (code === 'Space' || code === 'Enter') {
      event.preventDefault();
      onClick(value);
    }
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, ChoiceGroupItem_objectSpread(ChoiceGroupItem_objectSpread(ChoiceGroupItem_objectSpread({
    display: "flex",
    color: disabled ? formsTokenColors/* formsTokenColors */.V.disabledColor : 'grey_1200',
    flex: fill ? 1 : undefined,
    position: "relative",
    boxSizing: "borderBox",
    borderWidth: "sm",
    borderColor: {
      default: isSelected && !disabled ? formsTokenColors/* formsTokenColors */.V.interactiveColor : formsTokenColors/* formsTokenColors */.V.borderColor,
      hover: borderColor
    },
    outlineColor: {
      focusVisible: formsTokenColors/* formsTokenColors */.V.interactiveColor
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    outlineOffset: {
      focusVisible: 'sm'
    },
    borderStyle: "solid",
    borderRadius: "lg",
    cursor: disabled ? 'default' : 'pointer',
    backgroundColor: disabled ? formsTokenColors/* formsTokenColors */.V.disabledFieldBackgroundColor : 'background',
    fontSize: "b_md",
    lineHeight: "b_md",
    tabIndex: disabled ? -1 : 0,
    className: isSelected ? boxShadowClass : undefined,
    onKeyDown: handleKeyDown,
    onClick: () => {
      onClick(value);
    },
    role: "button",
    "aria-selected": isSelected,
    style: (0,vanilla_extract_dynamic_esm/* assignInlineVars */.D)({
      [boxShadowColor]: theme_ve_css/* tokens */.L.colors[borderColor]
    })
  }, containerStylingProps), restProps), {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: trackValue
  }), /*#__PURE__*/react.createElement(Container/* default */.A, {
    opacity: disabled ? '0.6' : undefined,
    flex: fill ? 1 : undefined
  }, typeof children === 'function' ? children({
    isSelected
  }) : children), multiple && /*#__PURE__*/react.createElement(Container/* default */.A, ChoiceGroupItem_objectSpread({
    display: "flex",
    marginLeft: "auto",
    paddingLeft: "3"
  }, checkboxStylingProps), /*#__PURE__*/react.createElement(Checkbox/* default */.A, {
    onClick: event => {
      event.stopPropagation();
    },
    onChange: event => {
      event.stopPropagation();
    },
    disabled: disabled,
    checked: isSelected,
    tabIndex: -1,
    disableCheckmarkMargin: true
  })));
}
ChoiceGroupItem.displayName = 'ChoiceGroupItem';
/* harmony default export */ const ChoiceGroup_ChoiceGroupItem = (ChoiceGroupItem);
;
ChoiceGroupItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChoiceGroupItem"
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupWithRef/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ChoiceGroup_ChoiceGroupWithRef)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js
var useInputTrackValue = __webpack_require__("../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js");
;// ../inputs/dist/esm/src/components/ChoiceGroup/hooks/useChoiceGroup/index.js

const useChoiceGroup = _ref => {
  let {
    value: groupValue,
    onChange,
    multiple,
    size,
    fill
  } = _ref;
  const onItemClick = (0,react.useCallback)(itemValue => {
    if (multiple && Array.isArray(groupValue)) {
      const isCurrentlySelected = groupValue.includes(itemValue);
      const newGroupValue = isCurrentlySelected ? groupValue.filter(value => value !== itemValue) : groupValue.concat(itemValue);
      onChange(newGroupValue);
      return;
    }
    const isCurrentlySelected = itemValue === groupValue;
    const newValue = isCurrentlySelected ? null : itemValue;
    onChange(newValue);
  }, [groupValue, multiple, onChange]);
  return (0,react.useMemo)(() => ({
    value: groupValue,
    onItemClick,
    multiple,
    size,
    fill
  }), [groupValue, onItemClick, multiple, size, fill]);
};
/* harmony default export */ const hooks_useChoiceGroup = (useChoiceGroup);
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupContext/index.js
var ChoiceGroupContext = __webpack_require__("../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupContext/index.js");
;// ../inputs/dist/esm/src/components/ChoiceGroup/index.js
const _excluded = ["onChange", "onBlur", "value", "multiple", "fill", "direction", "size", "children", "innerRef", "overflowStrategy", "dataTrackTag", "dataTrackValue"];
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






const ChoiceGroup = _ref => {
  let {
      onChange,
      onBlur,
      value,
      multiple = false,
      fill = false,
      direction = {
        default: 'row'
      },
      size,
      children,
      innerRef,
      overflowStrategy = 'wrap',
      dataTrackTag = 'choice_group',
      dataTrackValue
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const trackValue = (0,useInputTrackValue/* useInputTrackValue */.y)({
    dataTrackValue,
    value
  });
  const contextValue = hooks_useChoiceGroup({
    onChange,
    value,
    multiple,
    size,
    fill
  });
  return /*#__PURE__*/react.createElement(ChoiceGroupContext/* ChoiceGroupContext */.U, {
    value: contextValue
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, _objectSpread({
    tabIndex: -1,
    direction: direction,
    onBlur: onBlur,
    role: "group",
    ref: innerRef,
    wrap: (0,styles_ve_css/* mapResponsiveStyles */.d0)(overflowStrategy, value => value === 'wrap' ? 'wrap' : 'nowrap'),
    overflowX: (0,styles_ve_css/* mapResponsiveStyles */.d0)(overflowStrategy, value => value === 'scroll' ? 'scroll' : 'visible'),
    padding: (0,styles_ve_css/* mapResponsiveStyles */.d0)(overflowStrategy, value => value === 'scroll' ? '1' : '0'),
    paddingBottom: (0,styles_ve_css/* mapResponsiveStyles */.d0)(overflowStrategy, value => value === 'scroll' ? '3' : '0'),
    dataTrackTag: dataTrackTag,
    dataTrackValue: trackValue
  }, rest), children));
};
ChoiceGroup.displayName = 'ChoiceGroup';
/* harmony default export */ const components_ChoiceGroup = (ChoiceGroup);
;
ChoiceGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChoiceGroup"
};
;// ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupWithRef/index.js
function ChoiceGroupWithRef_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ChoiceGroupWithRef_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ChoiceGroupWithRef_ownKeys(Object(t), !0).forEach(function (r) {
      ChoiceGroupWithRef_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ChoiceGroupWithRef_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ChoiceGroupWithRef_defineProperty(e, r, t) {
  return (r = ChoiceGroupWithRef_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ChoiceGroupWithRef_toPropertyKey(t) {
  var i = ChoiceGroupWithRef_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function ChoiceGroupWithRef_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


// eslint-disable-next-line react/display-name
const ChoiceGroupWithRef = /*#__PURE__*/(0,react.forwardRef)((props, ref) => /*#__PURE__*/react.createElement(components_ChoiceGroup, ChoiceGroupWithRef_objectSpread(ChoiceGroupWithRef_objectSpread({}, props), {}, {
  innerRef: ref
})));
/* harmony default export */ const ChoiceGroup_ChoiceGroupWithRef = (ChoiceGroupWithRef);
;
ChoiceGroupWithRef.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChoiceGroupWithRef"
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ useInputTrackValue)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const useInputTrackValue = _ref => {
  let {
    dataTrackValue,
    value
  } = _ref;
  if (dataTrackValue !== undefined) {
    return dataTrackValue;
  }
  let valueStringValue;
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(value)) {
    if (Array.isArray(value)) {
      valueStringValue = value.filter(item => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(item)).toString();
    } else if (typeof value === 'object') {
      valueStringValue = Object.entries(value).map(_ref2 => {
        let [key, item] = _ref2;
        return "".concat(key, ":").concat(Array.isArray(item) ? item.filter(value => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(value)) : item);
      }).toString();
    } else {
      valueStringValue = String(value);
    }
    return valueStringValue;
  }
  return undefined;
};

/***/ }),

/***/ "../navigation/src/components/Stepper/Step/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Stepper_Step)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js
var excludeChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
;// ../hooks/dist/esm/src/hooks/useDidMount/index.js

const useDidMount = () => {
  const isMountRef = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    isMountRef.current = true;
  }, []);
  return isMountRef.current;
};
/* harmony default export */ const hooks_useDidMount = (useDidMount);
// EXTERNAL MODULE: ../navigation/src/components/Stepper/StepperContext/index.tsx
var StepperContext = __webpack_require__("../navigation/src/components/Stepper/StepperContext/index.tsx");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Divider/index.js + 2 modules
var Divider = __webpack_require__("../layout_components/dist/esm/src/components/Divider/index.js");
;// ../navigation/src/components/Stepper/Step/StepsDivider/utils.ts
const getBorderColor = _ref => {
  let {
    completed,
    currentStep,
    index,
    stepStrategy,
    completedSteps
  } = _ref;
  const isActive = index === currentStep;
  const isNextStepCompleted = completedSteps === null || completedSteps === void 0 ? void 0 : completedSteps[index + 1];
  const isLinearCompleted = !isActive && stepStrategy === 'linear';
  const isLinearBackCompleted = stepStrategy === 'linear-back' && (isNextStepCompleted || !isActive);
  const isCyclicCompleted = stepStrategy === 'cyclic' && (isNextStepCompleted || index + 1 === currentStep);
  if (completed && (isLinearCompleted || isLinearBackCompleted || isCyclicCompleted)) {
    return 'grey_1200';
  }
  return 'grey_800';
};
;// ../navigation/src/components/Stepper/Step/StepsDivider/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}




const StepsDivider = _ref => {
  let {
    completed,
    index = 0,
    hidden
  } = _ref;
  const {
    orientation,
    currentStep,
    stepStrategy,
    completedSteps
  } = (0,StepperContext/* useStepperContext */.s)();
  const isHorizontal = orientation === 'horizontal';
  return /*#__PURE__*/react.createElement(Divider/* default */.A, _extends({
    flex: isHorizontal ? 1 : undefined,
    hidden: hidden,
    direction: orientation,
    marginLeft: isHorizontal ? '1' : undefined,
    marginY: "0.5",
    borderWidth: "md",
    borderColor: getBorderColor({
      completed,
      currentStep,
      index,
      stepStrategy,
      completedSteps
    })
  }, isHorizontal ? {
    width: '24px',
    minWidth: '24px'
  } : {
    height: '100%',
    minHeight: '24px'
  }));
};
StepsDivider.displayName = 'StepsDivider';
/* harmony default export */ const Step_StepsDivider = (StepsDivider);
try {
    // @ts-ignore
    StepsDivider.displayName = "StepsDivider";
    // @ts-ignore
    StepsDivider.__docgenInfo = { "description": "", "displayName": "StepsDivider", "props": { "index": { "defaultValue": { value: "0" }, "description": "", "name": "index", "required": false, "type": { "name": "number" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "completed": { "defaultValue": null, "description": "", "name": "completed", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "optional": { "defaultValue": null, "description": "", "name": "optional", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "currentStep": { "defaultValue": null, "description": "", "name": "currentStep", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Stepper/Step/StepsDivider/index.tsx#StepsDivider"] = { docgenInfo: StepsDivider.__docgenInfo, name: "StepsDivider", path: "../navigation/src/components/Stepper/Step/StepsDivider/index.tsx#StepsDivider" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/CheckCircleSolid.js
var CheckCircleSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckCircleSolid.js");
;// ../navigation/src/components/Stepper/navigation/src/components/Stepper/Step/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../navigation/src/components/Stepper/Step/styles.ve.css.ts.vanilla.css","source":"Ll8xdWdkbmYyMDpob3ZlciAuXzF1Z2RuZjIxIHsKICBib3JkZXItY29sb3I6ICMyMjIzMjU7Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../navigation/src/components/Stepper/Step/styles.ve.css.ts

var indicatorClass = '_1ugdnf21';
var stepClass = '_1ugdnf20';
;// ../navigation/src/components/Stepper/Step/StepIndicator/styles.ts
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
const getIndicator = _ref => {
  let {
    completed,
    isActive,
    disabled
  } = _ref;
  return _objectSpread(_objectSpread({
    width: '16px',
    height: '16px',
    borderRadius: 'circle'
  }, !completed && !isActive && {
    borderWidth: 'md',
    borderColor: disabled ? 'grey_700' : 'grey_900'
  }), isActive && {
    backgroundColor: 'grey_1200'
  });
};
;// ../navigation/src/components/Stepper/Step/StepIndicator/index.tsx
function StepIndicator_extends() {
  return StepIndicator_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, StepIndicator_extends.apply(null, arguments);
}






const StepIndicator = _ref => {
  let {
    completed,
    index,
    disabled,
    isClickable
  } = _ref;
  const {
    currentStep
  } = (0,StepperContext/* useStepperContext */.s)();
  const isActive = currentStep === index;
  return /*#__PURE__*/react.createElement(Center/* default */.A, StepIndicator_extends({
    className: isClickable ? indicatorClass : undefined,
    flexShrink: 0,
    gap: "0"
  }, getIndicator({
    completed,
    isActive,
    disabled
  })), isActive && /*#__PURE__*/react.createElement(Container/* default */.A, {
    backgroundColor: "white",
    width: "4px",
    height: "4px",
    borderRadius: "circle"
  }), completed && !isActive && /*#__PURE__*/react.createElement(CheckCircleSolid/* default */.A, {
    color: disabled ? 'grey_700' : 'grey_1200'
  }));
};
StepIndicator.displayName = 'StepIndicator';
/* harmony default export */ const Step_StepIndicator = (StepIndicator);
try {
    // @ts-ignore
    StepIndicator.displayName = "StepIndicator";
    // @ts-ignore
    StepIndicator.__docgenInfo = { "description": "", "displayName": "StepIndicator", "props": { "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": true, "type": { "name": "any" } }, "index": { "defaultValue": null, "description": "", "name": "index", "required": true, "type": { "name": "any" } }, "completed": { "defaultValue": null, "description": "", "name": "completed", "required": true, "type": { "name": "any" } }, "isClickable": { "defaultValue": null, "description": "", "name": "isClickable", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Stepper/Step/StepIndicator/index.tsx#StepIndicator"] = { docgenInfo: StepIndicator.__docgenInfo, name: "StepIndicator", path: "../navigation/src/components/Stepper/Step/StepIndicator/index.tsx#StepIndicator" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../navigation/src/components/Stepper/Step/index.tsx
const _excluded = ["onClick", "index", "completed", "disabled", "isLast"];
function Step_extends() {
  return Step_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Step_extends.apply(null, arguments);
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









const Step = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    children,
    overflow,
    textOverflow,
    width,
    stepProps,
    maxWidth,
    dataTrackTag = 'stepper_step',
    dataTrackValue
  } = _ref;
  const {
      onClick,
      index,
      completed,
      disabled,
      isLast
    } = stepProps,
    restStepProps = _objectWithoutProperties(stepProps, _excluded);
  const {
    orientation,
    variant,
    currentStep
  } = (0,StepperContext/* useStepperContext */.s)();
  const hidden = (0,styles_ve_css/* mapResponsiveStyles */.d0)(variant, value => value !== 'default');
  const stepContent = (0,findChildByType/* findChildByType */.B)(children, 'StepContent');
  const isClickable = Boolean(onClick);
  const innerRef = (0,react.useRef)(null);
  const didMount = hooks_useDidMount();
  const dividerProps = {
    hidden,
    completed,
    disabled,
    index
  };
  (0,react.useImperativeHandle)(ref, () => innerRef.current);
  (0,react.useEffect)(() => {
    if (index === currentStep && didMount) {
      var _innerRef$current, _innerRef$current$scr;
      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || (_innerRef$current$scr = _innerRef$current.scrollIntoView) === null || _innerRef$current$scr === void 0 || _innerRef$current$scr.call(_innerRef$current, {
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [index, currentStep, didMount]);
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    ref: innerRef,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "0",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, Step_extends({
    className: stepClass,
    onClick: onClick,
    boxSizing: "borderBox",
    cursor: isClickable ? 'pointer' : undefined,
    outlineColor: {
      focusVisible: 'grey_1200'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineOffset: {
      focusVisible: 'sm'
    },
    borderRadius: "sm",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    gap: "1"
  }, restStepProps), /*#__PURE__*/react.createElement(Step_StepIndicator, {
    isClickable: isClickable,
    completed: completed,
    index: index,
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Box/* default */.A, {
    hidden: hidden,
    textOverflow: textOverflow,
    width: width,
    overflow: overflow,
    maxWidth: maxWidth,
    color: disabled ? 'grey_700' : 'bodyPrimary',
    fontWeight: "normal"
  }, (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'StepContent'))), orientation === 'horizontal' && !isLast && /*#__PURE__*/react.createElement(Step_StepsDivider, dividerProps)), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    display: "flex",
    gap: "1",
    hidden: hidden
  }, /*#__PURE__*/react.createElement(Center/* default */.A, {
    gap: "0",
    width: 16
  }, orientation === 'vertical' && !isLast && /*#__PURE__*/react.createElement(Step_StepsDivider, dividerProps)), stepContent));
});
Step.displayName = 'Step';
/* harmony default export */ const Stepper_Step = (Step);
try {
    // @ts-ignore
    Step.displayName = "Step";
    // @ts-ignore
    Step.__docgenInfo = { "description": "", "displayName": "Step", "props": { "stepProps": { "defaultValue": null, "description": "", "name": "stepProps", "required": true, "type": { "name": "Partial<any>" } }, "dataTrackTag": { "defaultValue": { value: "stepper_step" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Stepper/Step/index.tsx#Step"] = { docgenInfo: Step.__docgenInfo, name: "Step", path: "../navigation/src/components/Stepper/Step/index.tsx#Step" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../navigation/src/components/Stepper/StepperContext/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ StepperContext),
/* harmony export */   s: () => (/* binding */ useStepperContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const StepperContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useStepperContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StepperContext);

/***/ }),

/***/ "../navigation/src/components/Stepper/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
/* harmony import */ var _StepperContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../navigation/src/components/Stepper/StepperContext/index.tsx");
const _excluded = ["children", "stepperProps", "variant", "maxWidth", "dataTrackTag"],
  _excluded2 = ["currentStep", "stepStrategy", "orientation", "completedSteps"];
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




const Stepper = _ref => {
  let {
      children,
      stepperProps,
      variant = 'default',
      maxWidth = '100%',
      dataTrackTag = 'stepper'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const {
      currentStep,
      stepStrategy,
      orientation,
      completedSteps
    } = stepperProps,
    rest = _objectWithoutProperties(stepperProps, _excluded2);
  const isHorizontal = orientation === 'horizontal';
  const gap = (0,_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__/* .mapResponsiveStyles */ .d0)(variant, value => {
    if (value === 'compact') {
      return '2';
    }
    return isHorizontal ? '1' : '0';
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StepperContext__WEBPACK_IMPORTED_MODULE_3__/* .StepperContext */ .N.Provider, {
    value: {
      currentStep,
      completedSteps,
      stepStrategy,
      orientation,
      variant
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({
    as: "nav",
    gap: gap,
    padding: "1",
    direction: isHorizontal ? 'row' : 'column',
    overflow: "auto",
    maxWidth: maxWidth
  }, rest, restProps, {
    dataTrackTag: dataTrackTag
  }), children));
};
Stepper.displayName = 'Stepper';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stepper);
try {
    // @ts-ignore
    Stepper.displayName = "Stepper";
    // @ts-ignore
    Stepper.__docgenInfo = { "description": "", "displayName": "Stepper", "props": { "variant": { "defaultValue": { value: "default" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"compact\"" }, { "value": "ResponsiveVariant" }] } }, "stepperProps": { "defaultValue": null, "description": "", "name": "stepperProps", "required": true, "type": { "name": "IUseStepperStepperProps" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": { value: "100%" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "dataTrackTag": { "defaultValue": { value: "stepper" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Stepper/index.tsx#Stepper"] = { docgenInfo: Stepper.__docgenInfo, name: "Stepper", path: "../navigation/src/components/Stepper/index.tsx#Stepper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../navigation/src/components/Wizard/WizardBackButton/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../button/dist/esm/src/components/TextButton/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ArrowLeft.js");
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
/* harmony import */ var _WizardContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../navigation/src/components/Wizard/WizardContext/index.tsx");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}







const WizardBackButton = () => {
  const {
    prevStep,
    stepStrategy,
    currentStep,
    onBackButtonClick
  } = (0,_WizardContext__WEBPACK_IMPORTED_MODULE_8__/* .useWizardContext */ .C)();
  const {
    isMobile
  } = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)();
  const props = {
    'aria-label': (0,_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_4__/* .translate */ .T)('navigation.wizard.wizard_back_button.back'),
    onClick: () => {
      prevStep();
      onBackButtonClick === null || onBackButtonClick === void 0 || onBackButtonClick();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    visibility: stepStrategy === 'linear' || currentStep === 0 ? 'hidden' : 'visible'
  }, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({
    size: "sm",
    variant: "ghost"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_3__/* .I18n */ .F, {
    k: "navigation.wizard.wizard_back_button.back"
  })));
};
WizardBackButton.displayName = 'WizardBackButton';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WizardBackButton);

/***/ }),

/***/ "../navigation/src/components/Wizard/WizardContext/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useWizardContext),
/* harmony export */   L: () => (/* binding */ WizardContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const WizardContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useWizardContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WizardContext);

/***/ }),

/***/ "../navigation/src/components/Wizard/WizardFooter/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Wizard_WizardFooter)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Divider/index.js + 2 modules
var Divider = __webpack_require__("../layout_components/dist/esm/src/components/Divider/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../navigation/src/components/Wizard/WizardBackButton/index.tsx
var WizardBackButton = __webpack_require__("../navigation/src/components/Wizard/WizardBackButton/index.tsx");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/ProgressLine/index.js + 2 modules
var ProgressLine = __webpack_require__("../feedback/dist/esm/src/components/ProgressLine/index.js");
// EXTERNAL MODULE: ../navigation/src/components/Wizard/WizardContext/index.tsx
var WizardContext = __webpack_require__("../navigation/src/components/Wizard/WizardContext/index.tsx");
;// ../navigation/src/components/Wizard/WizardProgressLine/index.tsx



const WizardProgressLine = () => {
  const {
    progressProps: {
      progressPercent
    }
  } = (0,WizardContext/* useWizardContext */.C)();
  return /*#__PURE__*/react.createElement(ProgressLine/* default */.A, {
    borderRadius: "none",
    percent: progressPercent
  });
};
WizardProgressLine.displayName = 'WizardProgressLine';
/* harmony default export */ const Wizard_WizardProgressLine = (WizardProgressLine);
;// ../navigation/src/components/Wizard/WizardFooter/index.tsx





const WizardFooter = _ref => {
  let {
    children,
    showProgressLine = 'mobile',
    dataTrackTag = 'wizard_footer',
    dataTrackValue
  } = _ref;
  const {
    isMobile
  } = (0,getContext/* default */.A)();
  const showProgress = showProgressLine === 'all-devices' || showProgressLine === 'mobile' && isMobile;
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    width: "100%"
  }, showProgress ? /*#__PURE__*/react.createElement(Wizard_WizardProgressLine, null) : /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    paddingX: {
      default: '6',
      sm: '10'
    },
    paddingY: {
      default: '4',
      sm: '6'
    }
  }, !isMobile && /*#__PURE__*/react.createElement(WizardBackButton/* default */.A, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    marginLeft: "auto",
    direction: {
      default: 'columnReverse',
      sm: 'row'
    },
    width: {
      default: '100%',
      sm: 'initial'
    }
  }, children)));
};
WizardFooter.displayName = 'WizardFooter';
/* harmony default export */ const Wizard_WizardFooter = (WizardFooter);
try {
    // @ts-ignore
    WizardFooter.displayName = "WizardFooter";
    // @ts-ignore
    WizardFooter.__docgenInfo = { "description": "", "displayName": "WizardFooter", "props": { "showProgressLine": { "defaultValue": { value: "mobile" }, "description": "", "name": "showProgressLine", "required": false, "type": { "name": "enum", "value": [{ "value": "\"mobile\"" }, { "value": "\"all-devices\"" }] } }, "dataTrackTag": { "defaultValue": { value: "wizard_footer" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardFooter/index.tsx#WizardFooter"] = { docgenInfo: WizardFooter.__docgenInfo, name: "WizardFooter", path: "../navigation/src/components/Wizard/WizardFooter/index.tsx#WizardFooter" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../navigation/src/components/Wizard/WizardStepper/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _WizardContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../navigation/src/components/Wizard/WizardContext/index.tsx");
/* harmony import */ var _Stepper_Step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../navigation/src/components/Stepper/Step/index.tsx");
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../navigation/src/components/Stepper/index.tsx");
const _excluded = ["key"];
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





const WizardStepper = _ref => {
  let {
    variant = {
      default: 'compact',
      md: 'default'
    },
    dataTrackTag = 'wizard_stepper',
    dataTrackValue
  } = _ref;
  const {
    stepsProps,
    stepperProps
  } = (0,_WizardContext__WEBPACK_IMPORTED_MODULE_2__/* .useWizardContext */ .C)();
  const {
    isMobile
  } = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  return !isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Stepper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    variant: variant,
    stepperProps: stepperProps
  }, stepsProps === null || stepsProps === void 0 ? void 0 : stepsProps.map((_ref2, index) => {
    let {
        key
      } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Stepper_Step__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      dataTrackTag: 'wizard_stepper_step',
      key: key,
      stepProps: rest
    }, stepsProps[index].label);
  })) : null;
};
WizardStepper.displayName = 'WizardStepper';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WizardStepper);
try {
    // @ts-ignore
    WizardStepper.displayName = "WizardStepper";
    // @ts-ignore
    WizardStepper.__docgenInfo = { "description": "", "displayName": "WizardStepper", "props": { "variant": { "defaultValue": { value: "{ default: 'compact', md: 'default' }" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"compact\"" }, { "value": "ResponsiveVariant" }] } }, "dataTrackTag": { "defaultValue": { value: "wizard_stepper" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardStepper/index.tsx#WizardStepper"] = { docgenInfo: WizardStepper.__docgenInfo, name: "WizardStepper", path: "../navigation/src/components/Wizard/WizardStepper/index.tsx#WizardStepper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../navigation/src/components/Wizard/WizardTrigger/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _WizardContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../navigation/src/components/Wizard/WizardContext/index.tsx");


const WizardTrigger = _ref => {
  let {
    children,
    as: Element = 'span',
    disabled,
    dataTrackTag = 'wizard_trigger',
    dataTrackValue
  } = _ref;
  const {
    open
  } = (0,_WizardContext__WEBPACK_IMPORTED_MODULE_1__/* .useWizardContext */ .C)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Element, {
    "data-track-tag": dataTrackTag,
    "data-track-value": dataTrackValue,
    onClick: disabled ? undefined : open
  }, children);
};
WizardTrigger.displayName = 'WizardTrigger';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WizardTrigger);
try {
    // @ts-ignore
    WizardTrigger.displayName = "WizardTrigger";
    // @ts-ignore
    WizardTrigger.__docgenInfo = { "description": "", "displayName": "WizardTrigger", "props": { "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"span\"" }, { "value": "\"div\"" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "wizard_trigger" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardTrigger/index.tsx#WizardTrigger"] = { docgenInfo: WizardTrigger.__docgenInfo, name: "WizardTrigger", path: "../navigation/src/components/Wizard/WizardTrigger/index.tsx#WizardTrigger" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../navigation/src/components/Wizard/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Controlled: () => (/* binding */ Controlled),
  DynamicSteps: () => (/* binding */ index_stories_DynamicSteps),
  Primary: () => (/* binding */ Primary),
  Validation: () => (/* binding */ Validation),
  WithoutStepper: () => (/* binding */ WithoutStepper),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  compactStepper: () => (/* binding */ compactStepper),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/logos/FiverrDark.js
var FiverrDark = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/logos/FiverrDark.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../navigation/src/components/Wizard/WizardContext/index.tsx
var WizardContext = __webpack_require__("../navigation/src/components/Wizard/WizardContext/index.tsx");
;// ../navigation/src/components/Wizard/index.tsx
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



const Wizard = _ref => {
  let {
    children,
    useStepperResult,
    autoOpen = false,
    isOpen,
    onClose,
    onOpen,
    onBackButtonClick,
    dataTrackTag = 'wizard',
    dataTrackValue
  } = _ref;
  const [innerIsOpen, setInnerIsOpen] = (0,react.useState)(autoOpen);
  const close = (0,react.useCallback)(() => {
    setInnerIsOpen(false);
    onClose === null || onClose === void 0 || onClose();
  }, [onClose]);
  const open = (0,react.useCallback)(() => {
    setInnerIsOpen(true);
    onOpen === null || onOpen === void 0 || onOpen();
  }, [onOpen]);
  return /*#__PURE__*/react.createElement(WizardContext/* WizardContext */.L.Provider, {
    value: _objectSpread(_objectSpread({}, useStepperResult), {}, {
      isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : innerIsOpen,
      close,
      open,
      onBackButtonClick
    })
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    overflowY: "scroll",
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    height: "100%"
  }, children));
};
Wizard.displayName = 'Wizard';
/* harmony default export */ const components_Wizard = (Wizard);
try {
    // @ts-ignore
    Wizard.displayName = "Wizard";
    // @ts-ignore
    Wizard.__docgenInfo = { "description": "", "displayName": "Wizard", "props": { "autoOpen": { "defaultValue": { value: "false" }, "description": "Determines whether the wizard should open automatically when rendered.", "name": "autoOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onOpen": { "defaultValue": null, "description": "A callback function that is triggered when the modal is opened.", "name": "onOpen", "required": false, "type": { "name": "() => void" } }, "onClose": { "defaultValue": null, "description": "A callback function that is triggered when the modal is closed.", "name": "onClose", "required": false, "type": { "name": "() => void" } }, "isOpen": { "defaultValue": null, "description": "Controls the visibility of the modal. If not provided, the modal behaves in an uncontrolled manner.", "name": "isOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "children": { "defaultValue": null, "description": "The content to be displayed inside the wizard. This can be a single child or an array of children.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "useStepperResult": { "defaultValue": null, "description": "The result of the `useStepper` hook, containing the current state and functions for managing the stepper progress.", "name": "useStepperResult", "required": true, "type": { "name": "{ currentStep: number; hasPreviousStep: boolean; hasNextStep: boolean; nextStep: () => void; prevStep: () => void; setStep: (step: number) => void; stepsProps: any; stepperProps: IUseStepperStepperProps; ... 4 more ...; reset: () => void; }" } }, "onBackButtonClick": { "defaultValue": null, "description": "Event triggered when the back button is clicked.", "name": "onBackButtonClick", "required": false, "type": { "name": "() => void" } }, "dataTrackTag": { "defaultValue": { value: "wizard" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/index.tsx#Wizard"] = { docgenInfo: Wizard.__docgenInfo, name: "Wizard", path: "../navigation/src/components/Wizard/index.tsx#Wizard" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Divider/index.js + 2 modules
var Divider = __webpack_require__("../layout_components/dist/esm/src/components/Divider/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../navigation/src/components/Wizard/WizardBackButton/index.tsx
var WizardBackButton = __webpack_require__("../navigation/src/components/Wizard/WizardBackButton/index.tsx");
;// ../navigation/src/components/Wizard/WizardHeader/index.tsx




const WizardHeader = _ref => {
  let {
    children
  } = _ref;
  const {
    isMobile
  } = (0,getContext/* default */.A)();
  const ref = (0,react.useRef)(null);
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    ref: ref,
    tabIndex: -1,
    paddingX: {
      default: '6',
      sm: '10'
    },
    paddingY: {
      default: '4',
      sm: '5'
    },
    maxHeight: "80px",
    justifyContent: "spaceBetween",
    alignItems: "center"
  }, isMobile && /*#__PURE__*/react.createElement(WizardBackButton/* default */.A, null), children), /*#__PURE__*/react.createElement(Divider/* default */.A, null));
};
WizardHeader.displayName = 'WizardHeader';
/* harmony default export */ const Wizard_WizardHeader = (WizardHeader);
try {
    // @ts-ignore
    WizardHeader.displayName = "WizardHeader";
    // @ts-ignore
    WizardHeader.__docgenInfo = { "description": "", "displayName": "WizardHeader", "props": { "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardHeader/index.tsx#WizardHeader"] = { docgenInfo: WizardHeader.__docgenInfo, name: "WizardHeader", path: "../navigation/src/components/Wizard/WizardHeader/index.tsx#WizardHeader" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../navigation/src/components/Wizard/WizardHeaderLogo/index.tsx


const WizardHeaderLogo = _ref => {
  let {
    children,
    onClick,
    href,
    dataTrackTag = 'wizard_header_logo',
    dataTrackValue
  } = _ref;
  const getElement = () => {
    if (href) {
      return 'a';
    }
    if (onClick) {
      return 'button';
    }
    return 'div';
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    as: getElement(),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outlineColor: {
      focusVisible: 'grey_1200'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    borderRadius: "lg",
    padding: {
      sm: '2'
    },
    flexShrink: 0
  }, children);
};
WizardHeaderLogo.displayName = 'WizardHeaderLogo';
/* harmony default export */ const Wizard_WizardHeaderLogo = (WizardHeaderLogo);
try {
    // @ts-ignore
    WizardHeaderLogo.displayName = "WizardHeaderLogo";
    // @ts-ignore
    WizardHeaderLogo.__docgenInfo = { "description": "", "displayName": "WizardHeaderLogo", "props": { "dataTrackTag": { "defaultValue": { value: "wizard_header_logo" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardHeaderLogo/index.tsx#WizardHeaderLogo"] = { docgenInfo: WizardHeaderLogo.__docgenInfo, name: "WizardHeaderLogo", path: "../navigation/src/components/Wizard/WizardHeaderLogo/index.tsx#WizardHeaderLogo" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../navigation/src/hooks/useStepper/index.tsx + 5 modules
var useStepper = __webpack_require__("../navigation/src/hooks/useStepper/index.tsx");
// EXTERNAL MODULE: ../button/dist/esm/src/components/TextButton/index.js + 1 modules
var TextButton = __webpack_require__("../button/dist/esm/src/components/TextButton/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
;// ../navigation/src/components/Wizard/WizardHeaderExitButton/index.tsx
const _excluded = ["children", "onClick", "dataTrackTag"];
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





const WizardHeaderExitButton = _ref => {
  let {
      children,
      onClick,
      dataTrackTag = 'wizard_header_exit_button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    close
  } = (0,WizardContext/* useWizardContext */.C)();
  return /*#__PURE__*/react.createElement(Center/* default */.A, null, /*#__PURE__*/react.createElement(TextButton/* default */.A, _extends({
    "aria-label": (0,translate/* translate */.T)('navigation.wizard.wizard_header_exit_button.exit'),
    onClick: e => {
      close();
      onClick === null || onClick === void 0 || onClick(e);
    },
    size: {
      default: 'sm',
      sm: 'md'
    },
    dataTrackTag: dataTrackTag
  }, rest), children || /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "navigation.wizard.wizard_header_exit_button.exit"
  })));
};
WizardHeaderExitButton.displayName = 'WizardHeaderExitButton';
/* harmony default export */ const Wizard_WizardHeaderExitButton = (WizardHeaderExitButton);
try {
    // @ts-ignore
    WizardHeaderExitButton.displayName = "WizardHeaderExitButton";
    // @ts-ignore
    WizardHeaderExitButton.__docgenInfo = { "description": "", "displayName": "WizardHeaderExitButton", "props": { "size": { "defaultValue": null, "description": "The size of the TextButton.\nSupported sizes: sm = 22px, md = 24px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "intent": { "defaultValue": null, "description": "", "name": "intent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"destructive\"" }] } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"underline\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "dataTrackTag": { "defaultValue": { value: "wizard_header_exit_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "download": { "defaultValue": null, "description": "", "name": "download", "required": false, "type": { "name": "any" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardHeaderExitButton/index.tsx#WizardHeaderExitButton"] = { docgenInfo: WizardHeaderExitButton.__docgenInfo, name: "WizardHeaderExitButton", path: "../navigation/src/components/Wizard/WizardHeaderExitButton/index.tsx#WizardHeaderExitButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../navigation/src/components/Wizard/WizardStepper/index.tsx
var WizardStepper = __webpack_require__("../navigation/src/components/Wizard/WizardStepper/index.tsx");
;// ../navigation/src/components/Wizard/WizardBody/index.tsx
const WizardBody_excluded = ["children", "dataTrackTag"];
function WizardBody_extends() {
  return WizardBody_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, WizardBody_extends.apply(null, arguments);
}
function WizardBody_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = WizardBody_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function WizardBody_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


const WizardBody = _ref => {
  let {
      children,
      dataTrackTag = 'wizard_body'
    } = _ref,
    rest = WizardBody_objectWithoutProperties(_ref, WizardBody_excluded);
  return /*#__PURE__*/react.createElement(Container/* default */.A, WizardBody_extends({
    dataTrackTag: dataTrackTag,
    overflowY: "scroll",
    flex: 1
  }, rest), children);
};
WizardBody.displayName = 'WizardBody';
/* harmony default export */ const Wizard_WizardBody = (WizardBody);
try {
    // @ts-ignore
    WizardBody.displayName = "WizardBody";
    // @ts-ignore
    WizardBody.__docgenInfo = { "description": "", "displayName": "WizardBody", "props": { "dataTrackTag": { "defaultValue": { value: "wizard_body" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"label\"" }, { "value": "\"span\"" }, { "value": "\"a\"" }, { "value": "\"address\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"details\"" }, { "value": "\"div\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"header\"" }, { "value": "\"li\"" }, { "value": "\"main\"" }, { "value": "\"nav\"" }, { "value": "\"section\"" }, { "value": "\"ul\"" }] } }, "centered": { "defaultValue": null, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "color": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"heading\"" }, { "value": "\"bodyPrimary\"" }, { "value": "\"bodySecondary\"" }, { "value": "\"linkPrimary\"" }, { "value": "\"linkSecondary\"" }] } }, "fill": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "fill", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "columnGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "rowGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "gap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "boxShadow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "boxShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "borderStyle": { "defaultValue": null, "description": "", "name": "borderStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"dashed\"" }, { "value": "\"solid\"" }] } }, "borderColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "borderColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "borderWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderTopWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderTopWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderRightWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderRightWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderBottomWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderBottomWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderLeftWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderLeftWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "dropShadow": { "defaultValue": null, "description": "", "name": "dropShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "userSelect": { "defaultValue": null, "description": "", "name": "userSelect", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"text\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "outlineWidth": { "defaultValue": null, "description": "Supported values: sm = 1px, md = 2px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "outlineOffset": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, lg = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineOffset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }, { "value": "\"0\"" }] } }, "outlineColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "outlineStyle": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"solid\"" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "pointerEvents": { "defaultValue": null, "description": "", "name": "pointerEvents", "required": false, "type": { "name": "\"none\"" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "opacity": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "opacity", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"0.1\"" }, { "value": "\"0.2\"" }, { "value": "\"0.6\"" }, { "value": "\"0.8\"" }, { "value": "\"0.9\"" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"light\"" }, { "value": "\"inherit\"" }, { "value": "\"normal\"" }, { "value": "\"semibold\"" }] } }, "lineHeight": { "defaultValue": null, "description": "Supported values: b_xxs = 14px, b_xs = 18px, b_sm = 22px, b_md = 24px, b_lg = 26px, b_xl = 28px, b_xxl = 32px,\nh_xxs = 22px, h_xs = 25px, h_sm = 28px, h_md = 32px, h_lg = 36px h_xl = 38px, h_xxl = 48px, h_3xl = 56px, h_4xl = 66px, h_5xl = 74px, h_6xl = 92px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "lineHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "fontSize": { "defaultValue": null, "description": "Supported values: b_xxs = 10px, b_xs = 12px, b_sm = 14px, b_md = 16px, b_lg = 18px, b_xl = 20px, b_xxl = 24px,\nh_xxs = 16px, h_xs = 18px, h_sm = 20px, h_md = 24px, h_lg = 28px h_xl = 32px, h_xxl = 40px, h_3xl = 48px, h_4xl = 56px, h_5xl = 64px, h_6xl = 80px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fontSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"nowrap\"" }, { "value": "\"preWrap\"" }] } }, "wrap": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "wrap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }, { "value": "\"wrapReverse\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignItems": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignItems", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "direction": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"column\"" }, { "value": "\"row\"" }, { "value": "\"rowReverse\"" }, { "value": "\"columnReverse\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardBody/index.tsx#WizardBody"] = { docgenInfo: WizardBody.__docgenInfo, name: "WizardBody", path: "../navigation/src/components/Wizard/WizardBody/index.tsx#WizardBody" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../navigation/src/components/Wizard/WizardFooter/index.tsx + 1 modules
var WizardFooter = __webpack_require__("../navigation/src/components/Wizard/WizardFooter/index.tsx");
;// ../navigation/src/components/Wizard/WizardFooterSkipButton/index.tsx
const WizardFooterSkipButton_excluded = ["children", "onClick", "dataTrackTag"];
function WizardFooterSkipButton_extends() {
  return WizardFooterSkipButton_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, WizardFooterSkipButton_extends.apply(null, arguments);
}
function WizardFooterSkipButton_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = WizardFooterSkipButton_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function WizardFooterSkipButton_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}




const WizardFooterSkipButton = _ref => {
  var _stepsProps$currentSt;
  let {
      children,
      onClick,
      dataTrackTag = 'wizard_footer_skip_button'
    } = _ref,
    rest = WizardFooterSkipButton_objectWithoutProperties(_ref, WizardFooterSkipButton_excluded);
  const {
    nextStep,
    stepStrategy,
    stepsProps,
    currentStep
  } = (0,WizardContext/* useWizardContext */.C)();
  const handleClick = e => {
    nextStep();
    onClick === null || onClick === void 0 || onClick(e);
  };
  return stepStrategy === 'cyclic' || (_stepsProps$currentSt = stepsProps[currentStep]) !== null && _stepsProps$currentSt !== void 0 && _stepsProps$currentSt.optional ? /*#__PURE__*/react.createElement(Button/* default */.A, WizardFooterSkipButton_extends({
    "aria-label": (0,translate/* translate */.T)('navigation.wizard.wizard_footer_skip_button.skip_step'),
    onClick: handleClick,
    variant: "ghost",
    dataTrackTag: dataTrackTag
  }, rest), children || /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "navigation.wizard.wizard_footer_skip_button.skip_step"
  })) : null;
};
WizardFooterSkipButton.displayName = 'WizardFooterSkipButton';
/* harmony default export */ const Wizard_WizardFooterSkipButton = (WizardFooterSkipButton);
try {
    // @ts-ignore
    WizardFooterSkipButton.displayName = "WizardFooterSkipButton";
    // @ts-ignore
    WizardFooterSkipButton.__docgenInfo = { "description": "", "displayName": "WizardFooterSkipButton", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "dataTrackTag": { "defaultValue": { value: "wizard_footer_skip_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "download": { "defaultValue": null, "description": "", "name": "download", "required": false, "type": { "name": "any" } }, "size": { "defaultValue": null, "description": "The size of the Button.\nSupported sizes: sm = 36px, md = 42px, lg = 48px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "colorScheme": { "defaultValue": null, "description": "When using, overrides the button intent", "name": "colorScheme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"white\"" }, { "value": "\"blue\"" }, { "value": "\"business\"" }, { "value": "\"green\"" }, { "value": "\"grey\"" }, { "value": "\"orange\"" }, { "value": "\"pink\"" }, { "value": "\"purple\"" }, { "value": "\"red\"" }, { "value": "\"teal\"" }, { "value": "\"yellow\"" }] } }, "loading": { "defaultValue": null, "description": "Displays a loading state.", "name": "loading", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "intent": { "defaultValue": null, "description": "", "name": "intent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"destructive\"" }] } }, "fullWidth": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fullWidth", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardFooterSkipButton/index.tsx#WizardFooterSkipButton"] = { docgenInfo: WizardFooterSkipButton.__docgenInfo, name: "WizardFooterSkipButton", path: "../navigation/src/components/Wizard/WizardFooterSkipButton/index.tsx#WizardFooterSkipButton" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../navigation/src/components/Wizard/WizardFooterContinueButton/index.tsx
const WizardFooterContinueButton_excluded = ["children", "onClick", "disabled", "dataTrackTag"];
function WizardFooterContinueButton_extends() {
  return WizardFooterContinueButton_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, WizardFooterContinueButton_extends.apply(null, arguments);
}
function WizardFooterContinueButton_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = WizardFooterContinueButton_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function WizardFooterContinueButton_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}



const WizardFooterContinueButton = _ref => {
  let {
      children,
      onClick,
      disabled,
      dataTrackTag = 'wizard_footer_continue_button'
    } = _ref,
    rest = WizardFooterContinueButton_objectWithoutProperties(_ref, WizardFooterContinueButton_excluded);
  return /*#__PURE__*/react.createElement(Button/* default */.A, WizardFooterContinueButton_extends({
    "aria-label": (0,translate/* translate */.T)('navigation.wizard.wizard_footer_continue_button.continue'),
    onClick: onClick,
    disabled: disabled,
    dataTrackTag: dataTrackTag
  }, rest), children || /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "navigation.wizard.wizard_footer_continue_button.continue"
  }));
};
WizardFooterContinueButton.displayName = 'WizardFooterContinueButton';
/* harmony default export */ const Wizard_WizardFooterContinueButton = (WizardFooterContinueButton);
try {
    // @ts-ignore
    WizardFooterContinueButton.displayName = "WizardFooterContinueButton";
    // @ts-ignore
    WizardFooterContinueButton.__docgenInfo = { "description": "", "displayName": "WizardFooterContinueButton", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "dataTrackTag": { "defaultValue": { value: "wizard_footer_continue_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "download": { "defaultValue": null, "description": "", "name": "download", "required": false, "type": { "name": "any" } }, "size": { "defaultValue": null, "description": "The size of the Button.\nSupported sizes: sm = 36px, md = 42px, lg = 48px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "colorScheme": { "defaultValue": null, "description": "When using, overrides the button intent", "name": "colorScheme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"white\"" }, { "value": "\"blue\"" }, { "value": "\"business\"" }, { "value": "\"green\"" }, { "value": "\"grey\"" }, { "value": "\"orange\"" }, { "value": "\"pink\"" }, { "value": "\"purple\"" }, { "value": "\"red\"" }, { "value": "\"teal\"" }, { "value": "\"yellow\"" }] } }, "loading": { "defaultValue": null, "description": "Displays a loading state.", "name": "loading", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "intent": { "defaultValue": null, "description": "", "name": "intent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"destructive\"" }] } }, "fullWidth": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fullWidth", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardFooterContinueButton/index.tsx#WizardFooterContinueButton"] = { docgenInfo: WizardFooterContinueButton.__docgenInfo, name: "WizardFooterContinueButton", path: "../navigation/src/components/Wizard/WizardFooterContinueButton/index.tsx#WizardFooterContinueButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
;// ../navigation/src/components/Wizard/WizardStepsProgress/index.tsx




const WizardStepsProgress = () => {
  const {
    currentStep,
    stepsProps
  } = (0,WizardContext/* useWizardContext */.C)();
  return /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "navigation.wizard.wizard_steps_progress.progress_text",
    params: {
      currentStep: currentStep + 1,
      totalSteps: stepsProps.length
    }
  }));
};
WizardStepsProgress.displayName = 'WizardStepsProgress';
/* harmony default export */ const Wizard_WizardStepsProgress = (WizardStepsProgress);
// EXTERNAL MODULE: ../navigation/src/components/Wizard/WizardTrigger/index.tsx
var WizardTrigger = __webpack_require__("../navigation/src/components/Wizard/WizardTrigger/index.tsx");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/components/Portal/index.js + 1 modules
var Portal = __webpack_require__("../ui_utils/dist/esm/src/components/Portal/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js
var useLockBodyScroll = __webpack_require__("../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js + 2 modules
var useKeyboardShortcuts = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
;// ../navigation/src/components/Wizard/WizardContent/index.tsx





const WizardContent = _ref => {
  let {
    children,
    dataTrackTag = 'wizard_content',
    dataTrackValue
  } = _ref;
  const {
    isOpen,
    close
  } = (0,WizardContext/* useWizardContext */.C)();
  (0,useLockBodyScroll/* default */.A)(isOpen);
  (0,useKeyboardShortcuts/* default */.A)([{
    trigger: ['Escape'],
    handler: () => close()
  }]);
  return isOpen ? /*#__PURE__*/react.createElement(Portal/* default */.A, null, /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    display: "flex",
    direction: "column",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    position: "fixed",
    zIndex: "overlay"
  }, children)) : null;
};
WizardContent.displayName = 'WizardContent';
/* harmony default export */ const Wizard_WizardContent = (WizardContent);
try {
    // @ts-ignore
    WizardContent.displayName = "WizardContent";
    // @ts-ignore
    WizardContent.__docgenInfo = { "description": "", "displayName": "WizardContent", "props": { "dataTrackTag": { "defaultValue": { value: "wizard_content" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/WizardContent/index.tsx#WizardContent"] = { docgenInfo: WizardContent.__docgenInfo, name: "WizardContent", path: "../navigation/src/components/Wizard/WizardContent/index.tsx#WizardContent" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.61.1_react@17.0.2/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__("../../node_modules/.pnpm/react-hook-form@7.61.1_react@17.0.2/node_modules/react-hook-form/dist/index.esm.mjs");
;// ../forms/dist/esm/src/components/Form/index.js
const Form_excluded = ["children", "methods", "onSubmit", "width", "gap", "dataTrackTag"];
function Form_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Form_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Form_ownKeys(Object(t), !0).forEach(function (r) {
      Form_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Form_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Form_defineProperty(e, r, t) {
  return (r = Form_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Form_toPropertyKey(t) {
  var i = Form_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Form_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Form_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = Form_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function Form_objectWithoutPropertiesLoose(r, e) {
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
    restProps = Form_objectWithoutProperties(_ref, Form_excluded);
  return /*#__PURE__*/react.createElement(index_esm/* FormProvider */.Op, methods, /*#__PURE__*/react.createElement(Box/* default */.A, Form_objectSpread(Form_objectSpread(Form_objectSpread({
    as: "form",
    display: "flex",
    direction: "column",
    gap: gap,
    width: width
  }, onSubmit ? {
    onSubmit: methods === null || methods === void 0 ? void 0 : methods.handleSubmit(onSubmit)
  } : {}), restProps), {}, {
    dataTrackTag: dataTrackTag
  }), children));
};
Form.displayName = 'Form';
/* harmony default export */ const components_Form = (Form);
;
Form.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Form"
};
;// ../forms/dist/esm/src/components/Form/FormContext/index.js

const FormContext = /*#__PURE__*/(0,react.createContext)({});
const useFormContext = () => {
  const context = (0,react.useContext)(FormContext);
  return context;
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/getComponentProps/index.js
var getComponentProps = __webpack_require__("../ui_utils/dist/esm/src/utils/getComponentProps/index.js");
;// ../forms/dist/esm/src/components/Form/constants.js
const FORM_SUBTITLE_ID = 'FormSubtitle';
const FORM_ELEMENT_ID = 'FormElement';
const FORM_HELPER_TEXT_ID = 'FormHelperText';
const FORM_COUNTER_ID = 'FormCounter';
const FORM_HEADER_ID = 'FormHeader';
const FORM_LABEL_ID = 'FormLabel';
const FORM_OPTIONAL_LABEL_ID = 'FormOptionalLabel';
const FORM_TOOLTIP_ID = 'FormTooltip';
const FORM_FOOTER_LINE_HEIGHT = 'b_sm';
;// ../forms/dist/esm/src/components/Form/FormControl/helpers.js
/* eslint-disable react-hooks/rules-of-hooks */



const getValidationColor = _ref => {
  let {
    isError,
    isSuccess
  } = _ref;
  if (isError) {
    return 'validationError';
  } else if (isSuccess) {
    return 'validationSuccess';
  } else {
    return 'bodySecondary';
  }
};
const getStylingProps = _ref2 => {
  let {
    isError,
    isSuccess
  } = _ref2;
  const color = getValidationColor({
    isError,
    isSuccess
  });
  return {
    wrapper: {
      gap: '1.5',
      direction: 'column'
    },
    footer: {
      lineHeight: FORM_FOOTER_LINE_HEIGHT,
      fontSize: 'b_sm',
      color,
      display: 'flex',
      justifyContent: 'spaceBetween',
      gap: '3'
    }
  };
};
const getFormElementProps = _ref3 => {
  let {
    children,
    name,
    deps
  } = _ref3;
  const {
    register,
    setValue,
    control
  } = (0,index_esm/* useFormContext */.xW)();
  const {
    onBlur,
    onChange,
    ref
  } = register(name, {
    deps
  });
  const {
    isSubmitted
  } = (0,index_esm/* useFormState */.lN)(name);
  return {
    ref,
    onChange: value => {
      var _children$props, _children$props$onCha;
      if (value !== null && value !== void 0 && value.target) {
        onChange === null || onChange === void 0 || onChange(value);
      } else {
        setValue(name, value, {
          shouldValidate: isSubmitted
        });
      }
      children === null || children === void 0 || (_children$props = children.props) === null || _children$props === void 0 || (_children$props$onCha = _children$props.onChange) === null || _children$props$onCha === void 0 || _children$props$onCha.call(_children$props, value);
    },
    onBlur: event => {
      var _children$props2, _children$props2$onBl;
      children === null || children === void 0 || (_children$props2 = children.props) === null || _children$props2 === void 0 || (_children$props2$onBl = _children$props2.onBlur) === null || _children$props2$onBl === void 0 || _children$props2$onBl.call(_children$props2, event);
      onBlur === null || onBlur === void 0 || onBlur(event);
    },
    control
  };
};
const getChildren = children => {
  const FormHeader = (0,findChildByType/* findChildByType */.B)(children, FORM_HEADER_ID);
  const FormElement = (0,findChildByType/* findChildByType */.B)(children, FORM_ELEMENT_ID);
  const FormHelperText = (0,findChildByType/* findChildByType */.B)(children, FORM_HELPER_TEXT_ID);
  const FormCounter = (0,findChildByType/* findChildByType */.B)(children, FORM_COUNTER_ID);
  return {
    FormHeader,
    FormElement,
    FormHelperText,
    FormCounter
  };
};
const useReactHookForm = _ref4 => {
  let {
    name,
    maxLength,
    isSuccess,
    isError
  } = _ref4;
  try {
    const {
      errors: formErrors
    } = (0,index_esm/* useFormState */.lN)({
      name
    });
    const errors = (0,lodash.get)(formErrors, name);
    const value = (0,index_esm/* useWatch */.FH)({
      name
    });
    const isFormError = Object.keys(errors || {}).length > 0 || isError;
    return {
      errors,
      name,
      value,
      isFormError,
      isSuccess,
      maxLength
    };
  } catch (e) {
    throw new Error("FormControl must be rendered within a Form. Make sure to provide the 'methods' prop to the Form component");
  }
};
const shouldRenderFormFooter = _ref5 => {
  let {
    FormHelperText,
    FormCounter,
    errors
  } = _ref5;
  return FormCounter || !(0,lodash.isEmpty)((0,lodash.omitBy)((0,getComponentProps/* default */.A)(FormHelperText), lodash.isNil)) || !(0,lodash.isEmpty)(errors);
};
;// ../forms/dist/esm/src/components/Form/FormControl/index.js
const FormControl_excluded = ["children", "deps", "dataTrackTag", "dataTrackValue"];
function FormControl_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function FormControl_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? FormControl_ownKeys(Object(t), !0).forEach(function (r) {
      FormControl_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : FormControl_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function FormControl_defineProperty(e, r, t) {
  return (r = FormControl_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function FormControl_toPropertyKey(t) {
  var i = FormControl_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function FormControl_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function FormControl_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = FormControl_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function FormControl_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}





const FormControl = _ref => {
  var _FormHelperText$props;
  let {
      children,
      deps,
      dataTrackTag = 'form_control',
      dataTrackValue
    } = _ref,
    restProps = FormControl_objectWithoutProperties(_ref, FormControl_excluded);
  const {
    FormHeader,
    FormElement,
    FormHelperText,
    FormCounter
  } = getChildren(children);
  const {
    errors,
    name,
    value,
    isFormError,
    isSuccess,
    maxLength
  } = useReactHookForm(restProps);
  const {
    wrapper,
    footer
  } = getStylingProps({
    isError: isFormError,
    isSuccess
  });
  const {
    ref,
    onChange,
    onBlur,
    control
  } = getFormElementProps(FormControl_objectSpread(FormControl_objectSpread({}, FormElement === null || FormElement === void 0 ? void 0 : FormElement.props), {}, {
    name,
    deps
  }));
  return /*#__PURE__*/react.createElement(FormContext.Provider, {
    value: {
      maxLength,
      isError: isFormError,
      isSuccess,
      onChange,
      ref,
      onBlur,
      name,
      error: errors || (FormHelperText === null || FormHelperText === void 0 || (_FormHelperText$props = FormHelperText.props) === null || _FormHelperText$props === void 0 ? void 0 : _FormHelperText$props.error),
      value,
      control
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, FormControl_objectSpread({
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue || name
  }, wrapper), FormHeader, FormElement, shouldRenderFormFooter({
    FormHelperText,
    FormCounter,
    errors
  }) && /*#__PURE__*/react.createElement(Box/* default */.A, footer, FormHelperText, FormCounter)));
};
FormControl.displayName = 'FormControl';
/* harmony default export */ const Form_FormControl = (FormControl);
;
FormControl.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FormControl"
};
;// ../forms/dist/esm/src/components/Form/FormHeader/index.js





const FormHeader = _ref => {
  let {
    children,
    dataTrackTag = 'form_header',
    dataTrackValue
  } = _ref;
  const FormLabel = (0,findChildByType/* findChildByType */.B)(children, FORM_LABEL_ID);
  const FormOptionalLabel = (0,findChildByType/* findChildByType */.B)(children, FORM_OPTIONAL_LABEL_ID);
  const FormTooltip = (0,findChildByType/* findChildByType */.B)(children, FORM_TOOLTIP_ID);
  const FormSubtitle = (0,findChildByType/* findChildByType */.B)(children, FORM_SUBTITLE_ID);
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    as: "div",
    display: "flex",
    direction: "column"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "2",
    alignItems: "center"
  }, FormLabel, FormOptionalLabel, FormTooltip), FormSubtitle);
};
FormHeader.id = FORM_HEADER_ID;
FormHeader.displayName = FORM_HEADER_ID;
/* harmony default export */ const Form_FormHeader = (FormHeader);
;
FormHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FormHeader"
};
;// ../forms/dist/esm/src/components/Form/FormHeader/FormLabel/index.js



const FormLabel = _ref => {
  let {
    children,
    htmlFor,
    dataTrackTag = 'form_label',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    as: "label",
    color: "grey_1200",
    lineHeight: "b_md",
    fontSize: "b_md",
    htmlFor: htmlFor
  }, children);
};
FormLabel.id = FORM_LABEL_ID;
FormLabel.displayName = FORM_LABEL_ID;
/* harmony default export */ const FormHeader_FormLabel = (FormLabel);
;
FormLabel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FormLabel"
};
;// ../forms/dist/esm/src/components/Form/FormHeader/FormSubtitle/index.js



const FormSubtitle = _ref => {
  let {
    children,
    dataTrackTag = 'form_subtitle',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Text/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    size: "b_sm",
    color: "bodySecondary"
  }, children);
};
FormSubtitle.id = FORM_SUBTITLE_ID;
FormSubtitle.displayName = FORM_SUBTITLE_ID;
/* harmony default export */ const FormHeader_FormSubtitle = (FormSubtitle);
;
FormSubtitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FormSubtitle"
};
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
;// ../forms/dist/esm/src/components/Form/FormElement/index.js
const FormElement_excluded = ["children", "dataTrackTag", "dataTrackValue"];
function FormElement_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function FormElement_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? FormElement_ownKeys(Object(t), !0).forEach(function (r) {
      FormElement_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : FormElement_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function FormElement_defineProperty(e, r, t) {
  return (r = FormElement_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function FormElement_toPropertyKey(t) {
  var i = FormElement_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function FormElement_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function FormElement_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = FormElement_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function FormElement_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}






const FormElement = /*#__PURE__*/(0,react.forwardRef)((_ref, forwardedRef) => {
  let {
      children,
      dataTrackTag = 'form_element',
      dataTrackValue
    } = _ref,
    restProps = FormElement_objectWithoutProperties(_ref, FormElement_excluded);
  const {
    maxLength,
    isError,
    isSuccess,
    name,
    ref,
    onChange,
    onBlur
  } = useFormContext();
  const hasRef = typeof ref === 'function' || typeof forwardedRef === 'function' || forwardedRef && 'current' in forwardedRef;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    direction: "column",
    gap: "2"
  }, (0,render_children/* renderChildren */.s)(children, FormElement_objectSpread(FormElement_objectSpread({}, (0,lodash.omitBy)({
    maxLength,
    isError,
    isSuccess,
    name,
    ref: hasRef ? e => {
      ref === null || ref === void 0 || ref(e);
      if (typeof forwardedRef === 'function') {
        forwardedRef(e);
      } else if (forwardedRef && 'current' in forwardedRef) {
        forwardedRef.current = e;
      }
    } : undefined,
    onChange,
    onBlur
  }, lodash.isNil)), restProps)));
});
FormElement.displayName = FORM_ELEMENT_ID;
Object.assign(FormElement, {
  id: FORM_ELEMENT_ID
});
/* harmony default export */ const Form_FormElement = (FormElement);
;
FormElement.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FormElement"
};
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../forms/dist/esm/src/components/Form/FormHelperText/helpers.js





const getErrorMessage = error => {
  if ((0,lodash.isObject)(error) && 'message' in error && (typeof error.message === 'string' || /*#__PURE__*/react.isValidElement(error.message))) {
    return error.message;
  }
};
const getError = error => {
  const errorMessage = getErrorMessage(error);
  if (errorMessage) {
    return errorMessage;
  }
  if ((0,lodash.isObject)(error) && 'item' in error) {
    return getErrorMessage(error.item);
  }
  if (/*#__PURE__*/ /*#__PURE__*/ /*#__PURE__*/react.isValidElement(error) || typeof error === 'string') {
    return error;
  }
};
const getMessage = _ref => {
  let {
    isError,
    error,
    isSuccess,
    success,
    hint
  } = _ref;
  if (isError) {
    return getError(error);
  }
  if (isSuccess) {
    return success;
  }
  return hint;
};
const getEmptyLines = emptyLines => {
  if (!emptyLines) {
    return null;
  }
  const lineHeightPx = Number.parseInt(themeVars/* bodyLineHeights */.nH[FORM_FOOTER_LINE_HEIGHT], 10);
  if (Number.isNaN(lineHeightPx)) {
    return null;
  }
  const totalHeight = lineHeightPx * emptyLines;
  if (Number.isNaN(totalHeight)) {
    return null;
  }
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    height: totalHeight
  });
};
;
getEmptyLines.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "getEmptyLines"
};
;// ../forms/dist/esm/src/components/Form/FormHelperText/index.js
const FormHelperText_excluded = ["error", "isError", "isSuccess", "emptyLines", "dataTrackTag", "dataTrackValue"];
function FormHelperText_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function FormHelperText_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? FormHelperText_ownKeys(Object(t), !0).forEach(function (r) {
      FormHelperText_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : FormHelperText_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function FormHelperText_defineProperty(e, r, t) {
  return (r = FormHelperText_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function FormHelperText_toPropertyKey(t) {
  var i = FormHelperText_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function FormHelperText_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function FormHelperText_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = FormHelperText_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function FormHelperText_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}






const FormHelperText = _ref => {
  let {
      error,
      isError: isErrorProp,
      isSuccess: isSuccessProp,
      emptyLines,
      dataTrackTag = 'form_helper_text',
      dataTrackValue
    } = _ref,
    restProps = FormHelperText_objectWithoutProperties(_ref, FormHelperText_excluded);
  const {
    isError,
    isSuccess,
    error: formError
  } = useFormContext();
  const isErrorInternal = isErrorProp || isError;
  const isSuccessInternal = isSuccessProp || isSuccess;
  const message = getMessage(FormHelperText_objectSpread({
    isError: isErrorInternal,
    isSuccess: isSuccessInternal,
    error: error || formError
  }, restProps));
  const color = getValidationColor({
    isError: isErrorInternal,
    isSuccess: isSuccessInternal
  });
  if (message) {
    return /*#__PURE__*/react.createElement(Typography/* default */.A, {
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue,
      color: color
    }, message);
  }
  return getEmptyLines(emptyLines);
};
FormHelperText.id = FORM_HELPER_TEXT_ID;
FormHelperText.displayName = FORM_HELPER_TEXT_ID;
/* harmony default export */ const Form_FormHelperText = (FormHelperText);
;
FormHelperText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FormHelperText"
};
// EXTERNAL MODULE: ../forms_resolvers/dist/esm/src/utils/zodResolver.js
var zodResolver = __webpack_require__("../forms_resolvers/dist/esm/src/utils/zodResolver.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@4.0.13/node_modules/zod/v3/types.js + 6 modules
var types = __webpack_require__("../../node_modules/.pnpm/zod@4.0.13/node_modules/zod/v3/types.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useConst/index.js
var useConst = __webpack_require__("../hooks/dist/esm/src/hooks/useConst/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/utils/index.js
var utils = __webpack_require__("../storybook_helpers/dist/esm/src/utils/index.js");
;// ../navigation/src/components/Wizard/stories/helpers.tsx
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




const mobileContext = {
  userAgent: 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; SCH-I535 Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
  isTouch: true,
  isMobile: true
};
const useSetMobileContext = function () {
  let customContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mobileContext;
  const {
    width
  } = (0,useElementSize/* default */.A)(window);
  const fiverrContext = (0,useConst/* default */.A)(() => (0,getContext/* default */.A)());
  if (width < 600) {
    (0,utils/* setFiverrContext */.G)(customContext);
  } else {
    (0,utils/* setFiverrContext */.G)(fiverrContext);
  }
};
const stepsData = [{
  stepId: 1,
  label: 'Step text 1'
}, {
  stepId: 2,
  label: 'Step text 2',
  optional: true
}, {
  stepId: 3,
  label: 'Step text 3'
}, {
  stepId: 4,
  label: 'Step text 4'
}];
const fetchServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'username') {
          reject(new Error('This username is already registered. Please try a different one.'));
        } else {
          resolve('The username is available.');
        }
      }, 1000);
    });
  });
  return function fetchServer(_x) {
    return _ref.apply(this, arguments);
  };
}();
const schema = types/* object */.Ik({
  username: types/* string */.Yj().min(2, {
    message: 'username must contain at least 2 character(s)'
  })
});
try {
    // @ts-ignore
    useSetMobileContext.displayName = "useSetMobileContext";
    // @ts-ignore
    useSetMobileContext.__docgenInfo = { "description": "", "displayName": "useSetMobileContext", "props": { "userAgent": { "defaultValue": null, "description": "", "name": "userAgent", "required": true, "type": { "name": "string" } }, "isTouch": { "defaultValue": null, "description": "", "name": "isTouch", "required": true, "type": { "name": "enum", "value": [{ "value": "false" }, { "value": "true" }] } }, "isMobile": { "defaultValue": null, "description": "", "name": "isMobile", "required": true, "type": { "name": "enum", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/stories/helpers.tsx#useSetMobileContext"] = { docgenInfo: useSetMobileContext.__docgenInfo, name: "useSetMobileContext", path: "../navigation/src/components/Wizard/stories/helpers.tsx#useSetMobileContext" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    fetchServer.displayName = "fetchServer";
    // @ts-ignore
    fetchServer.__docgenInfo = { "description": "", "displayName": "fetchServer", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/stories/helpers.tsx#fetchServer"] = { docgenInfo: fetchServer.__docgenInfo, name: "fetchServer", path: "../navigation/src/components/Wizard/stories/helpers.tsx#fetchServer" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupWithRef/index.js + 2 modules
var ChoiceGroupWithRef = __webpack_require__("../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupWithRef/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/index.js + 4 modules
var ChoiceGroupItem = __webpack_require__("../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Heading/index.js + 1 modules
var Heading = __webpack_require__("../typography/dist/esm/src/components/Heading/index.js");
;// ../navigation/src/components/Wizard/stories/components/ContentComponent/index.tsx



const ContentComponent = _ref => {
  let {
    index,
    flow,
    content
  } = _ref;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2"
  }, "Wizard title - ", index + 1), /*#__PURE__*/react.createElement(Text/* default */.A, {
    color: "bodySecondary"
  }, "Wizard subtitle"), flow && /*#__PURE__*/react.createElement(Text/* default */.A, null, flow.toLocaleLowerCase()), content && /*#__PURE__*/react.createElement(Text/* default */.A, {
    color: "bodySecondary"
  }, content));
};
/* harmony default export */ const components_ContentComponent = (ContentComponent);
try {
    // @ts-ignore
    ContentComponent.displayName = "ContentComponent";
    // @ts-ignore
    ContentComponent.__docgenInfo = { "description": "", "displayName": "ContentComponent", "props": { "index": { "defaultValue": null, "description": "", "name": "index", "required": true, "type": { "name": "number" } }, "flow": { "defaultValue": null, "description": "", "name": "flow", "required": false, "type": { "name": "string" } }, "content": { "defaultValue": null, "description": "", "name": "content", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/stories/components/ContentComponent/index.tsx#ContentComponent"] = { docgenInfo: ContentComponent.__docgenInfo, name: "ContentComponent", path: "../navigation/src/components/Wizard/stories/components/ContentComponent/index.tsx#ContentComponent" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../navigation/src/components/Wizard/stories/components/DynamicSteps/index.tsx
function DynamicSteps_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function DynamicSteps_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? DynamicSteps_ownKeys(Object(t), !0).forEach(function (r) {
      DynamicSteps_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DynamicSteps_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function DynamicSteps_defineProperty(e, r, t) {
  return (r = DynamicSteps_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function DynamicSteps_toPropertyKey(t) {
  var i = DynamicSteps_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function DynamicSteps_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}




const moreDynamicSteps = {
  option_c: [{
    stepId: 4,
    Component: components_ContentComponent,
    label: 'Step option C 10'
  }],
  option_d: [{
    stepId: 2,
    Component: components_ContentComponent,
    label: 'Step option D 10'
  }, {
    stepId: 3,
    Component: components_ContentComponent,
    label: 'Step Option D 11'
  }]
};
const MoreDynamicSteps = _ref => {
  let {
    setUserChoices,
    userChoices,
    currentStep,
    setStepsDataState,
    stepsDataState,
    setDisabled
  } = _ref;
  (0,react.useEffect)(() => {
    if (!(userChoices !== null && userChoices !== void 0 && userChoices.second)) {
      setDisabled === null || setDisabled === void 0 || setDisabled(true);
    }
    return () => {
      setDisabled === null || setDisabled === void 0 || setDisabled(false);
    };
  }, [setDisabled, userChoices === null || userChoices === void 0 ? void 0 : userChoices.second]);
  return /*#__PURE__*/react.createElement(Container/* default */.A, null, /*#__PURE__*/react.createElement("p", null, "Click to add more dynamic steps"), /*#__PURE__*/react.createElement(ChoiceGroupWithRef/* default */.A, {
    value: userChoices === null || userChoices === void 0 ? void 0 : userChoices.second,
    onChange: newValue => {
      const updatedSteps = [...stepsDataState];
      setDisabled(false);
      if (userChoices.second) {
        const stepsToRemoveCount = moreDynamicSteps[userChoices.second] || [];
        updatedSteps.splice(currentStep + 1, stepsToRemoveCount.length);
      }
      setUserChoices(DynamicSteps_objectSpread(DynamicSteps_objectSpread({}, userChoices), {}, {
        second: newValue
      }));
      const stepsToAdd = newValue ? moreDynamicSteps[newValue] : [];
      updatedSteps.splice(currentStep + 1, 0, ...stepsToAdd);
      setStepsDataState(updatedSteps);
    }
  }, /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "option_c"
  }, "Option C"), /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "option_d"
  }, "Option D")));
};
const dynamicSteps = {
  option_a: [{
    stepId: 3,
    Component: components_ContentComponent,
    label: 'Step option A 3'
  }, {
    stepId: 4,
    Component: components_ContentComponent,
    label: 'Step option A 4'
  }, {
    stepId: 5,
    Component: MoreDynamicSteps,
    label: 'Step option A 5'
  }, {
    stepId: 6,
    Component: components_ContentComponent,
    label: 'Step option A 6'
  }],
  option_b: [{
    stepId: 2,
    Component: components_ContentComponent,
    label: 'Step option B 3'
  }, {
    stepId: 5,
    Component: MoreDynamicSteps,
    label: 'Step option A 5'
  }, {
    stepId: 3,
    Component: components_ContentComponent,
    label: 'Step option B 4'
  }]
};
const DynamicSteps = _ref2 => {
  let {
    initialSteps,
    setUserChoices,
    userChoices,
    currentStep,
    setStepsDataState,
    setDisabled
  } = _ref2;
  (0,react.useEffect)(() => {
    if (!(userChoices !== null && userChoices !== void 0 && userChoices.first)) {
      setDisabled === null || setDisabled === void 0 || setDisabled(true);
    }
    return () => {
      setDisabled === null || setDisabled === void 0 || setDisabled(false);
    };
  }, [setDisabled, userChoices === null || userChoices === void 0 ? void 0 : userChoices.first]);
  return /*#__PURE__*/react.createElement(Container/* default */.A, null, /*#__PURE__*/react.createElement("p", null, "Click to add dynamic steps"), /*#__PURE__*/react.createElement(ChoiceGroupWithRef/* default */.A, {
    value: userChoices === null || userChoices === void 0 ? void 0 : userChoices.first,
    onChange: newValue => {
      setDisabled(false);
      setUserChoices({
        first: newValue
      });
      const stepsToAdd = newValue ? dynamicSteps[newValue] : [];
      const updatedSteps = [...initialSteps];
      updatedSteps.splice(currentStep + 1, 0, ...stepsToAdd);
      setStepsDataState(updatedSteps);
    }
  }, /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "option_a"
  }, "Option A"), /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "option_b"
  }, "Option B")));
};
/* harmony default export */ const components_DynamicSteps = (DynamicSteps);
try {
    // @ts-ignore
    DynamicSteps.displayName = "DynamicSteps";
    // @ts-ignore
    DynamicSteps.__docgenInfo = { "description": "", "displayName": "DynamicSteps", "props": { "initialSteps": { "defaultValue": null, "description": "", "name": "initialSteps", "required": true, "type": { "name": "[]" } }, "setUserChoices": { "defaultValue": null, "description": "", "name": "setUserChoices", "required": true, "type": { "name": "React.Dispatch<React.SetStateAction<object>>" } }, "userChoices": { "defaultValue": null, "description": "", "name": "userChoices", "required": true, "type": { "name": "{ first: string; second: string; }" } }, "currentStep": { "defaultValue": null, "description": "", "name": "currentStep", "required": true, "type": { "name": "number" } }, "setStepsDataState": { "defaultValue": null, "description": "", "name": "setStepsDataState", "required": true, "type": { "name": "React.Dispatch<React.SetStateAction<StepperStep[]>>" } }, "setDisabled": { "defaultValue": null, "description": "", "name": "setDisabled", "required": true, "type": { "name": "React.Dispatch<React.SetStateAction<boolean>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/stories/components/DynamicSteps/index.tsx#DynamicSteps"] = { docgenInfo: DynamicSteps.__docgenInfo, name: "DynamicSteps", path: "../navigation/src/components/Wizard/stories/components/DynamicSteps/index.tsx#DynamicSteps" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../navigation/src/components/Wizard/stories/components/index.tsx
function components_extends() {
  return components_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, components_extends.apply(null, arguments);
}
function components_asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function components_asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        components_asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        components_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}



















const FormValidation = _ref => {
  let {
    methods
  } = _ref;
  return /*#__PURE__*/react.createElement(components_Form, {
    id: "registrationForm",
    methods: methods
  }, /*#__PURE__*/react.createElement(Form_FormControl, {
    name: "username"
  }, /*#__PURE__*/react.createElement(Form_FormHeader, null, /*#__PURE__*/react.createElement(FormHeader_FormLabel, null, "User Name"), /*#__PURE__*/react.createElement(FormHeader_FormSubtitle, null, "Set the user name to username to simulate a server validation error. ")), /*#__PURE__*/react.createElement(Form_FormElement, null, /*#__PURE__*/react.createElement(Input/* default */.A, {
    defaultValue: "username",
    placeholder: "username"
  })), /*#__PURE__*/react.createElement(Form_FormHelperText, null)));
};
const ValidationForm = () => {
  const result = (0,useStepper/* default */.A)({
    steps: stepsData,
    stepStrategy: 'linear-back',
    includeOptional: false
  });
  const [loading, setLoading] = (0,react.useState)(false);
  const methods = (0,index_esm/* useForm */.mN)({
    resolver: (0,zodResolver/* zodResolver */.u)(schema)
  });
  const formOnClick = methods.handleSubmit(/*#__PURE__*/function () {
    var _ref2 = components_asyncToGenerator(function (_ref3) {
      let {
        username
      } = _ref3;
      return function* () {
        try {
          setLoading(true);
          yield fetchServer(username);
          result.setStepCompleteState(true);
          result.nextStep();
        } catch (error) {
          methods.setError('username', {
            message: error.message
          });
        } finally {
          setLoading(false);
        }
      }();
    });
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  const continueButtonProps = result.currentStep === 0 ? {
    onClick: formOnClick,
    form: 'registrationForm'
  } : {
    onClick: () => {
      result.setStepCompleteState(true);
      result.nextStep();
    }
  };
  return /*#__PURE__*/react.createElement(components_Wizard, {
    useStepperResult: result
  }, /*#__PURE__*/react.createElement(WizardTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open Wizard")), /*#__PURE__*/react.createElement(Wizard_WizardContent, null, /*#__PURE__*/react.createElement(Wizard_WizardHeader, null, /*#__PURE__*/react.createElement(Wizard_WizardHeaderLogo, null, /*#__PURE__*/react.createElement(FiverrDark/* default */.A, {
    size: "sm"
  })), /*#__PURE__*/react.createElement(WizardStepper/* default */.A, null), /*#__PURE__*/react.createElement(Wizard_WizardHeaderExitButton, null)), /*#__PURE__*/react.createElement(Wizard_WizardBody, {
    display: "flex",
    gap: "6",
    padding: "14",
    direction: "column"
  }, result.currentStep === 0 ? /*#__PURE__*/react.createElement(FormValidation, {
    methods: methods
  }) : /*#__PURE__*/react.createElement(components_ContentComponent, result.stepsProps[result.currentStep])), /*#__PURE__*/react.createElement(WizardFooter/* default */.A, null, /*#__PURE__*/react.createElement(Wizard_WizardFooterSkipButton, null), /*#__PURE__*/react.createElement(Wizard_WizardFooterContinueButton, components_extends({
    loading: loading
  }, continueButtonProps)))));
};
const Dynamic = () => {
  useSetMobileContext();
  const stepsData = [{
    stepId: 1,
    Component: components_ContentComponent,
    label: 'Step 1',
    optional: true
  }, {
    stepId: 2,
    Component: components_DynamicSteps,
    label: 'Step 2'
  }];
  const [stepsDataState, setStepsDataState] = (0,react.useState)(stepsData);
  const [disabled, setDisabled] = (0,react.useState)(false);
  const result = (0,useStepper/* default */.A)({
    steps: stepsDataState,
    stepStrategy: 'linear-back'
  });
  const [userChoices, setUserChoices] = (0,react.useState)({
    first: null,
    second: null
  });
  const CurrentStepComponent = stepsDataState[result.currentStep].Component;
  return /*#__PURE__*/react.createElement(components_Wizard, {
    useStepperResult: result
  }, /*#__PURE__*/react.createElement(WizardTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open Wizard")), /*#__PURE__*/react.createElement(Wizard_WizardContent, null, /*#__PURE__*/react.createElement(Wizard_WizardHeader, null, /*#__PURE__*/react.createElement(Wizard_WizardHeaderLogo, null, /*#__PURE__*/react.createElement(FiverrDark/* default */.A, {
    size: "sm"
  })), /*#__PURE__*/react.createElement(Wizard_WizardHeaderExitButton, null)), /*#__PURE__*/react.createElement(Wizard_WizardBody, {
    display: "flex",
    gap: "6",
    padding: "14",
    direction: "column"
  }, /*#__PURE__*/react.createElement(CurrentStepComponent, components_extends({}, result.stepsProps[result.currentStep], {
    initialSteps: stepsData,
    setStepsDataState: setStepsDataState,
    currentStep: result.currentStep,
    stepsDataState: stepsDataState,
    setUserChoices: setUserChoices,
    userChoices: userChoices,
    setStepCompleteState: result.setStepCompleteState,
    setDisabled: setDisabled
  }))), /*#__PURE__*/react.createElement(WizardFooter/* default */.A, {
    showProgressLine: "all-devices"
  }, /*#__PURE__*/react.createElement(Wizard_WizardFooterSkipButton, null), /*#__PURE__*/react.createElement(Wizard_WizardFooterContinueButton, {
    disabled: disabled,
    onClick: () => {
      result.setStepCompleteState(true);
      result.nextStep();
    }
  }))));
};
try {
    // @ts-ignore
    FormValidation.displayName = "FormValidation";
    // @ts-ignore
    FormValidation.__docgenInfo = { "description": "", "displayName": "FormValidation", "props": { "methods": { "defaultValue": null, "description": "", "name": "methods", "required": true, "type": { "name": "UseFormReturn<any>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../navigation/src/components/Wizard/stories/components/index.tsx#FormValidation"] = { docgenInfo: FormValidation.__docgenInfo, name: "FormValidation", path: "../navigation/src/components/Wizard/stories/components/index.tsx#FormValidation" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../navigation/src/components/Wizard/stories/index.stories.tsx
function index_stories_extends() {
  return index_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, index_stories_extends.apply(null, arguments);
}
function index_stories_asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function index_stories_asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        index_stories_asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        index_stories_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}






















esm/* default */.Ay.seed(1);
const content = esm/* default */.Ay.lorem.paragraphs(5);
const DELAY = 200;
const openWizard = /*#__PURE__*/function () {
  var _ref = index_stories_asyncToGenerator(function* (canvasElement) {
    const button = (0,dist/* within */.ux)(canvasElement).getByRole('button');
    yield dist/* userEvent */.Q4.click(button, {
      delay: DELAY
    });
  });
  return function openWizard(_x) {
    return _ref.apply(this, arguments);
  };
}();
const clickContinue = /*#__PURE__*/function () {
  var _ref2 = index_stories_asyncToGenerator(function* () {
    const button = dist/* screen */.nj.getByLabelText('Continue');
    yield dist/* userEvent */.Q4.click(button, {
      delay: DELAY
    });
  });
  return function clickContinue() {
    return _ref2.apply(this, arguments);
  };
}();
const clickSkip = /*#__PURE__*/function () {
  var _ref3 = index_stories_asyncToGenerator(function* () {
    const button = dist/* screen */.nj.getByLabelText('Skip step');
    yield dist/* userEvent */.Q4.click(button, {
      delay: DELAY
    });
  });
  return function clickSkip() {
    return _ref3.apply(this, arguments);
  };
}();
const clickBack = /*#__PURE__*/function () {
  var _ref4 = index_stories_asyncToGenerator(function* () {
    const button = dist/* screen */.nj.getByLabelText('Back');
    yield dist/* userEvent */.Q4.click(button, {
      delay: DELAY
    });
  });
  return function clickBack() {
    return _ref4.apply(this, arguments);
  };
}();
const clickExit = /*#__PURE__*/function () {
  var _ref5 = index_stories_asyncToGenerator(function* () {
    const button = dist/* screen */.nj.getByLabelText('Exit');
    yield dist/* userEvent */.Q4.click(button, {
      delay: DELAY
    });
  });
  return function clickExit() {
    return _ref5.apply(this, arguments);
  };
}();
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  play: function () {
    var _ref6 = index_stories_asyncToGenerator(function (_ref7) {
      let {
        canvasElement
      } = _ref7;
      return function* () {
        yield openWizard(canvasElement);
        yield (0,src/* takeScreenshot */.w)();
        yield clickContinue();
        yield (0,src/* takeScreenshot */.w)();
        yield clickSkip();
        yield (0,src/* takeScreenshot */.w)();
        yield clickBack();
        yield (0,src/* takeScreenshot */.w)();
        yield clickExit();
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x2) {
      return _ref6.apply(this, arguments);
    };
  }(),
  parameters: {
    docs: {
      source: {
        code: "\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\nconst { currentStep, stepsProps, setStepCompleteState, nextStep } = result;\n\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardStepper />\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        <ContentComponent {...stepsProps[currentStep]} content={content} />\n      </WizardBody>\n      <WizardFooter>\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          onClick={() => {\n            setStepCompleteState(true);\n            nextStep();\n          }}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);\n"
      }
    }
  }
};
const compactStepper = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => {
    useSetMobileContext();
    const result = (0,useStepper/* default */.A)({
      steps: stepsData,
      stepStrategy: 'linear-back',
      includeOptional: false
    });
    const {
      currentStep,
      stepsProps,
      setStepCompleteState,
      nextStep
    } = result;
    return /*#__PURE__*/react.createElement(components_Wizard, {
      useStepperResult: result
    }, /*#__PURE__*/react.createElement(WizardTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open Wizard")), /*#__PURE__*/react.createElement(Wizard_WizardContent, null, /*#__PURE__*/react.createElement(Wizard_WizardHeader, null, /*#__PURE__*/react.createElement(Wizard_WizardHeaderLogo, null, /*#__PURE__*/react.createElement(FiverrDark/* default */.A, {
      size: "sm"
    })), /*#__PURE__*/react.createElement(WizardStepper/* default */.A, {
      variant: "compact"
    }), /*#__PURE__*/react.createElement(Wizard_WizardHeaderExitButton, null)), /*#__PURE__*/react.createElement(Wizard_WizardBody, {
      display: "flex",
      gap: "6",
      padding: "14",
      direction: "column"
    }, /*#__PURE__*/react.createElement(components_ContentComponent, stepsProps[currentStep])), /*#__PURE__*/react.createElement(WizardFooter/* default */.A, null, /*#__PURE__*/react.createElement(Wizard_WizardFooterSkipButton, null), /*#__PURE__*/react.createElement(Wizard_WizardFooterContinueButton, {
      onClick: () => {
        setStepCompleteState(true);
        nextStep();
      }
    }))));
  },
  play: function () {
    var _ref8 = index_stories_asyncToGenerator(function (_ref9) {
      let {
        canvasElement
      } = _ref9;
      return function* () {
        yield openWizard(canvasElement);
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x3) {
      return _ref8.apply(this, arguments);
    };
  }(),
  parameters: {
    docs: {
      source: {
        code: "\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\nconst { currentStep, stepsProps, setStepCompleteState, nextStep } = result;\n\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardStepper variant=\"compact\" />\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        <ContentComponent {...stepsProps[currentStep]} />\n      </WizardBody>\n      <WizardFooter>\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          onClick={() => {\n            setStepCompleteState(true);\n            nextStep();\n          }}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);\n"
      }
    }
  }
};
const WithoutStepper = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => {
    useSetMobileContext();
    const result = (0,useStepper/* default */.A)({
      steps: stepsData,
      stepStrategy: 'linear-back',
      includeOptional: false
    });
    const {
      currentStep,
      stepsProps,
      setStepCompleteState,
      nextStep
    } = result;
    return /*#__PURE__*/react.createElement(components_Wizard, {
      useStepperResult: result
    }, /*#__PURE__*/react.createElement(WizardTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open Wizard")), /*#__PURE__*/react.createElement(Wizard_WizardContent, null, /*#__PURE__*/react.createElement(Wizard_WizardHeader, null, /*#__PURE__*/react.createElement(Wizard_WizardHeaderLogo, null, /*#__PURE__*/react.createElement(FiverrDark/* default */.A, {
      size: "sm"
    })), /*#__PURE__*/react.createElement(Wizard_WizardHeaderExitButton, null)), /*#__PURE__*/react.createElement(Wizard_WizardBody, {
      display: "flex",
      gap: "6",
      padding: "14",
      direction: "column"
    }, /*#__PURE__*/react.createElement(Wizard_WizardStepsProgress, null), /*#__PURE__*/react.createElement(components_ContentComponent, stepsProps[currentStep])), /*#__PURE__*/react.createElement(WizardFooter/* default */.A, {
      showProgressLine: "all-devices"
    }, /*#__PURE__*/react.createElement(Wizard_WizardFooterSkipButton, null), /*#__PURE__*/react.createElement(Wizard_WizardFooterContinueButton, {
      onClick: () => {
        setStepCompleteState(true);
        nextStep();
      }
    }))));
  },
  play: function () {
    var _ref10 = index_stories_asyncToGenerator(function (_ref11) {
      let {
        canvasElement
      } = _ref11;
      return function* () {
        yield openWizard(canvasElement);
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x4) {
      return _ref10.apply(this, arguments);
    };
  }(),
  parameters: {
    docs: {
      source: {
        code: "\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\nconst { currentStep, stepsProps, setStepCompleteState, nextStep } = result;\n\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        <WizardStepsProgress />\n        <ContentComponent {...stepsProps[currentStep]} />\n      </WizardBody>\n      <WizardFooter showProgressLine=\"all-devices\">\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          onClick={() => {\n            setStepCompleteState(true);\n            nextStep();\n          }}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);\n"
      }
    }
  }
};
const Controlled = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => {
    useSetMobileContext();
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);
    const result = (0,useStepper/* default */.A)({
      steps: stepsData,
      stepStrategy: 'linear-back',
      includeOptional: false
    });
    const {
      currentStep,
      stepsProps,
      setStepCompleteState,
      nextStep
    } = result;
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: open
    }, "Open"), /*#__PURE__*/react.createElement(components_Wizard, {
      isOpen: isOpen,
      onClose: close,
      useStepperResult: result
    }, /*#__PURE__*/react.createElement(Wizard_WizardContent, null, /*#__PURE__*/react.createElement(Wizard_WizardHeader, null, /*#__PURE__*/react.createElement(Wizard_WizardHeaderLogo, null, /*#__PURE__*/react.createElement(FiverrDark/* default */.A, {
      size: "sm"
    })), /*#__PURE__*/react.createElement(Wizard_WizardHeaderExitButton, null)), /*#__PURE__*/react.createElement(Wizard_WizardBody, {
      display: "flex",
      gap: "6",
      padding: "14",
      direction: "column"
    }, /*#__PURE__*/react.createElement(Wizard_WizardStepsProgress, null), /*#__PURE__*/react.createElement(components_ContentComponent, stepsProps[currentStep])), /*#__PURE__*/react.createElement(WizardFooter/* default */.A, {
      showProgressLine: "all-devices"
    }, /*#__PURE__*/react.createElement(Wizard_WizardFooterSkipButton, null), /*#__PURE__*/react.createElement(Wizard_WizardFooterContinueButton, {
      onClick: () => {
        setStepCompleteState(true);
        nextStep();
      }
    })))));
  },
  play: function () {
    var _ref12 = index_stories_asyncToGenerator(function (_ref13) {
      let {
        canvasElement
      } = _ref13;
      return function* () {
        yield openWizard(canvasElement);
        yield (0,src/* takeScreenshot */.w)();
        yield clickExit();
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x5) {
      return _ref12.apply(this, arguments);
    };
  }(),
  parameters: {
    docs: {
      source: {
        code: "\nconst [isOpen, setIsOpen] = useState(false);\nconst close = () => setIsOpen(false);\nconst open = () => setIsOpen(true);\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\nconst { currentStep, stepsProps, setStepCompleteState, nextStep } = result;\n\nreturn (\n  <>\n    <Button onClick={open}>Open</Button>\n    <Wizard isOpen={isOpen} onClose={close} useStepperResult={result}>\n      <WizardContent>\n        <WizardHeader>\n          <WizardHeaderLogo>\n            <FiverrDarkLogo size=\"sm\" />\n          </WizardHeaderLogo>\n          <WizardHeaderExitButton />\n        </WizardHeader>\n        <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n          <WizardStepsProgress />\n          <ContentComponent {...stepsProps[currentStep]} />\n        </WizardBody>\n        <WizardFooter showProgressLine=\"all-devices\">\n          <WizardFooterSkipButton />\n          <WizardFooterContinueButton\n            onClick={() => {\n              setStepCompleteState(true);\n              nextStep();\n            }}\n          />\n        </WizardFooter>\n      </WizardContent>\n    </Wizard>\n  </>\n);"
      }
    }
  }
};
const index_stories_DynamicSteps = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => /*#__PURE__*/react.createElement(Dynamic, null),
  play: function () {
    var _ref14 = index_stories_asyncToGenerator(function (_ref15) {
      let {
        canvasElement
      } = _ref15;
      return function* () {
        yield openWizard(canvasElement);
        yield clickContinue();
        yield (0,src/* takeScreenshot */.w)();
        const optionBButton = dist/* screen */.nj.getByText('Option B');
        yield dist/* userEvent */.Q4.click(optionBButton, {
          delay: DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
        yield clickContinue();
        yield clickContinue();
        const optionCButton = dist/* screen */.nj.getByText('Option C');
        yield dist/* userEvent */.Q4.click(optionCButton, {
          delay: DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
        yield clickContinue();
        yield clickContinue();
        yield clickContinue();
        yield (0,src/* takeScreenshot */.w)();
        yield clickBack();
        yield clickBack();
        const optionDButton = dist/* screen */.nj.getByText('Option D');
        yield dist/* userEvent */.Q4.click(optionDButton, {
          delay: DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
        yield clickContinue();
        yield clickContinue();
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x6) {
      return _ref14.apply(this, arguments);
    };
  }(),
  parameters: {
    docs: {
      description: {
        story: 'Adds steps dynamically based on user choices'
      },
      source: {
        code: "\nconst Dynamic = () => {\nconst stepsData: StepperStep[] = [\n  { stepId: 1, Component: ContentComponent, label: 'Step 1', optional: true },\n  { stepId: 2, Component: DynamicSteps, label: 'Step 2' },\n];\nconst [stepsDataState, setStepsDataState] = useState(stepsData);\nconst [disabled, setDisabled] = useState(false);\n\nconst result = useStepper({\n  steps: stepsDataState,\n  stepStrategy: 'linear-back',\n});\nconst [userChoices, setUserChoices] = useState({\n  first: null,\n  second: null,\n});\n\nconst CurrentStepComponent = stepsDataState[result.currentStep].Component;\n\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardStepper />\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        <CurrentStepComponent\n          {...result.stepsProps[result.currentStep]}\n          initialSteps={stepsData}\n          setStepsDataState={setStepsDataState}\n          currentStep={result.currentStep}\n          stepsDataState={stepsDataState}\n          setUserChoices={setUserChoices}\n          userChoices={userChoices}\n          setStepCompleteState={result.setStepCompleteState}\n          setDisabled={setDisabled}\n        />\n      </WizardBody>\n      <WizardFooter showProgressLine=\"all-devices\">\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          disabled={disabled}\n          onClick={() => {\n            result.setStepCompleteState(true);\n            result.nextStep();\n          }}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);\n}\n\n// DynamicSteps\n\nconst dynamicSteps: { [k: string]: StepperStep[] } = {\n  option_a: [\n    { stepId: 3, Component: ContentComponent, label: 'Step option A 3' },\n    { stepId: 4, Component: ContentComponent, label: 'Step option A 4' },\n    { stepId: 5, Component: MoreDynamicSteps, label: 'Step option A 5' },\n    { stepId: 6, Component: ContentComponent, label: 'Step option A 6' },\n  ],\n  option_b: [\n    { stepId: 2, Component: ContentComponent, label: 'Step option B 3' },\n    { stepId: 5, Component: MoreDynamicSteps, label: 'Step option A 5' },\n    { stepId: 3, Component: ContentComponent, label: 'Step option B 4' },\n  ],\n};\n\nconst DynamicSteps = ({\n  initialSteps,\n  setUserChoices,\n  userChoices,\n  currentStep,\n  setStepsDataState,\n  setDisabled,\n}: {\n  initialSteps: [];\n  setUserChoices: React.Dispatch<React.SetStateAction<object>>;\n  userChoices: {\n    first: undefined | string;\n    second: undefined | string;\n  };\n  currentStep: number;\n  setStepsDataState: React.Dispatch<React.SetStateAction<StepperStep[]>>;\n  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;\n}) => {\n\n  useEffect(() => {\n    if (!userChoices?.first) {\n      setDisabled?.(true);\n    }\n\n    return () => {\n      setDisabled?.(false);\n    };\n\n  }, [setDisabled, userChoices?.first]);\n\n  return (\n    <Container>\n      <p>Click to add dynamic steps</p>\n      <ChoiceGroup\n        value={userChoices?.first}\n        onChange={(newValue) => {\n          setDisabled(false);\n          setUserChoices({\n            first: newValue,\n          });\n          const stepsToAdd: StepperStep[] = newValue ? dynamicSteps[newValue] : [];\n          const updatedSteps: StepperStep[] = [...initialSteps];\n          updatedSteps.splice(currentStep + 1, 0, ...stepsToAdd);\n          setStepsDataState(updatedSteps);\n        }}\n      >\n        <ChoiceGroupItem value=\"option_a\">Option A</ChoiceGroupItem>\n        <ChoiceGroupItem value=\"option_b\">Option B</ChoiceGroupItem>\n      </ChoiceGroup>\n    </Container>\n  );\n}\n\n// MoreDynamicSteps\n\nconst moreDynamicSteps: { [k: string]: StepperStep[] } = {\n  option_c: [{ stepId: 4, Component: ContentComponent, label: 'Step option C 10' }],\n  option_d: [\n    { stepId: 2, Component: ContentComponent, label: 'Step option D 10' },\n    { stepId: 3, Component: ContentComponent, label: 'Step Option D 11' },\n  ],\n};\n\nconst MoreDynamicSteps = ({\n  setUserChoices,\n  userChoices,\n  currentStep,\n  setStepsDataState,\n  stepsDataState,\n  setDisabled,\n}: {\n  setUserChoices: React.Dispatch<React.SetStateAction<object>>;\n  userChoices: {\n    first: undefined | string;\n    second: undefined | string;\n  };\n  currentStep: number;\n  setStepsDataState: React.Dispatch<React.SetStateAction<StepperStep[]>>;\n  stepsDataState?: any;\n  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;\n}) => {\n  useEffect(() => {\n    if (!userChoices?.second) {\n      setDisabled?.(true);\n    }\n\n    return () => {\n      setDisabled?.(false);\n    };\n\n  }, [setDisabled, userChoices?.second]);\n\n  return (\n    <Container>\n      <p>Click to add more dynamic steps</p>\n      <ChoiceGroup\n        value={userChoices?.second}\n        onChange={(newValue) => {\n          const updatedSteps: StepperStep[] = [...stepsDataState];\n          setDisabled(false);\n          if (userChoices.second) {\n            const stepsToRemoveCount: StepperStep[] = moreDynamicSteps[userChoices.second] || [];\n            updatedSteps.splice(currentStep + 1, stepsToRemoveCount.length);\n          }\n          setUserChoices({\n            ...userChoices,\n            second: newValue,\n          });\n          const stepsToAdd: StepperStep[] = newValue ? moreDynamicSteps[newValue] : [];\n\n          updatedSteps.splice(currentStep + 1, 0, ...stepsToAdd);\n          setStepsDataState(updatedSteps);\n        }}\n      >\n        <ChoiceGroupItem value=\"option_c\">Option C</ChoiceGroupItem>\n        <ChoiceGroupItem value=\"option_d\">Option D</ChoiceGroupItem>\n      </ChoiceGroup>\n    </Container>\n  );\n};"
      }
    }
  }
};
const Validation = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => /*#__PURE__*/react.createElement(ValidationForm, null),
  parameters: {
    docs: {
      description: {
        story: 'Simulates a server call to validate form fields'
      },
      source: {
        code: "\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\n\nconst [loading, setLoading] = useState(false);\nconst methods = useForm<SchemaType>({\n  resolver: zodResolver(schema),\n});\n\nconst formOnClick = methods.handleSubmit(async ({ username }) => {\n  try {\n    setLoading(true);\n    await fetchServer(username);\n    result.setStepCompleteState(true);\n    result.nextStep();\n  } catch (error) {\n    methods.setError('username', { message: error.message });\n  } finally {\n    setLoading(false);\n  }\n});\n\nconst continueButtonProps = result.currentStep === 0\n? {\n    onClick: formOnClick,\n    form: 'registrationForm',\n  }\n: {\n    onClick: () => {\n      result.setStepCompleteState(true);\n      result.nextStep();\n    },\n  };\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardStepper />\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        {result.currentStep === 0 ? (\n          <FormValidation methods={methods} />\n        ) : (\n          <ContentComponent {...result.stepsProps[result.currentStep]} />\n        )}\n      </WizardBody>\n      <WizardFooter>\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          loading={loading}\n          {...continueButtonProps}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);"
      }
    }
  }
};
const meta = {
  title: 'Navigation/Wizard',
  component: components_Wizard,
  render: () => {
    useSetMobileContext();
    const result = (0,useStepper/* default */.A)({
      steps: stepsData,
      stepStrategy: 'linear-back',
      includeOptional: false
    });
    const {
      currentStep,
      stepsProps,
      setStepCompleteState,
      nextStep
    } = result;
    return /*#__PURE__*/react.createElement(components_Wizard, {
      useStepperResult: result
    }, /*#__PURE__*/react.createElement(WizardTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open Wizard")), /*#__PURE__*/react.createElement(Wizard_WizardContent, null, /*#__PURE__*/react.createElement(Wizard_WizardHeader, null, /*#__PURE__*/react.createElement(Wizard_WizardHeaderLogo, null, /*#__PURE__*/react.createElement(FiverrDark/* default */.A, {
      size: "sm"
    })), /*#__PURE__*/react.createElement(WizardStepper/* default */.A, null), /*#__PURE__*/react.createElement(Wizard_WizardHeaderExitButton, null)), /*#__PURE__*/react.createElement(Wizard_WizardBody, {
      display: "flex",
      gap: "6",
      padding: "14",
      direction: "column"
    }, /*#__PURE__*/react.createElement(components_ContentComponent, index_stories_extends({}, stepsProps[currentStep], {
      content: content
    }))), /*#__PURE__*/react.createElement(WizardFooter/* default */.A, null, /*#__PURE__*/react.createElement(Wizard_WizardFooterSkipButton, null), /*#__PURE__*/react.createElement(Wizard_WizardFooterContinueButton, {
      onClick: () => {
        setStepCompleteState(true);
        nextStep();
      }
    }))));
  },
  parameters: {
    docs: {
      source: {
        code: "\nconst [isOpen, setIsOpen] = useState(false);\nconst close = () => setIsOpen(false);\nconst open = () => setIsOpen(true);\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\nconst { currentStep, stepsProps, setStepCompleteState, nextStep } = result;\n\nreturn (\n  <>\n    <Button onClick={open}>Open</Button>\n    <Wizard isOpen={isOpen} onClose={close} useStepperResult={result}>\n      <WizardContent>\n        <WizardHeader>\n          <WizardHeaderLogo>\n            <FiverrDarkLogo size=\"sm\" />\n          </WizardHeaderLogo>\n          <WizardHeaderExitButton />\n        </WizardHeader>\n        <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n          <WizardStepsProgress />\n          <ContentComponent {...stepsProps[currentStep]} />\n        </WizardBody>\n        <WizardFooter showProgressLine=\"all-devices\">\n          <WizardFooterSkipButton />\n          <WizardFooterContinueButton\n            onClick={() => {\n              setStepCompleteState(true);\n              nextStep();\n            }}\n          />\n        </WizardFooter>\n      </WizardContent>\n    </Wizard>\n  </>\n);"
      }
    }
  }
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  play: async ({\n    canvasElement\n  }) => {\n    await openWizard(canvasElement);\n    await takeScreenshot();\n    await clickContinue();\n    await takeScreenshot();\n    await clickSkip();\n    await takeScreenshot();\n    await clickBack();\n    await takeScreenshot();\n    await clickExit();\n    await takeScreenshot();\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\nconst { currentStep, stepsProps, setStepCompleteState, nextStep } = result;\n\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardStepper />\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        <ContentComponent {...stepsProps[currentStep]} content={content} />\n      </WizardBody>\n      <WizardFooter>\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          onClick={() => {\n            setStepCompleteState(true);\n            nextStep();\n          }}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);\n`\n      }\n    }\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
compactStepper.parameters = {
  ...compactStepper.parameters,
  docs: {
    ...compactStepper.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => {\n    useSetMobileContext();\n    const result = useStepper({\n      steps: stepsData,\n      stepStrategy: 'linear-back',\n      includeOptional: false\n    });\n    const {\n      currentStep,\n      stepsProps,\n      setStepCompleteState,\n      nextStep\n    } = result;\n    return <Wizard useStepperResult={result}>\n        <WizardTrigger>\n          <Button>Open Wizard</Button>\n        </WizardTrigger>\n        <WizardContent>\n          <WizardHeader>\n            <WizardHeaderLogo>\n              <FiverrDarkLogo size=\"sm\" />\n            </WizardHeaderLogo>\n            <WizardStepper variant=\"compact\" />\n            <WizardHeaderExitButton />\n          </WizardHeader>\n          <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n            <ContentComponent {...stepsProps[currentStep]} />\n          </WizardBody>\n          <WizardFooter>\n            <WizardFooterSkipButton />\n            <WizardFooterContinueButton onClick={() => {\n            setStepCompleteState(true);\n            nextStep();\n          }} />\n          </WizardFooter>\n        </WizardContent>\n      </Wizard>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await openWizard(canvasElement);\n    await takeScreenshot();\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\nconst { currentStep, stepsProps, setStepCompleteState, nextStep } = result;\n\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardStepper variant=\"compact\" />\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        <ContentComponent {...stepsProps[currentStep]} />\n      </WizardBody>\n      <WizardFooter>\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          onClick={() => {\n            setStepCompleteState(true);\n            nextStep();\n          }}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);\n`\n      }\n    }\n  }\n}",
      ...compactStepper.parameters?.docs?.source
    }
  }
};
WithoutStepper.parameters = {
  ...WithoutStepper.parameters,
  docs: {
    ...WithoutStepper.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => {\n    useSetMobileContext();\n    const result = useStepper({\n      steps: stepsData,\n      stepStrategy: 'linear-back',\n      includeOptional: false\n    });\n    const {\n      currentStep,\n      stepsProps,\n      setStepCompleteState,\n      nextStep\n    } = result;\n    return <Wizard useStepperResult={result}>\n        <WizardTrigger>\n          <Button>Open Wizard</Button>\n        </WizardTrigger>\n        <WizardContent>\n          <WizardHeader>\n            <WizardHeaderLogo>\n              <FiverrDarkLogo size=\"sm\" />\n            </WizardHeaderLogo>\n            <WizardHeaderExitButton />\n          </WizardHeader>\n          <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n            <WizardStepsProgress />\n            <ContentComponent {...stepsProps[currentStep]} />\n          </WizardBody>\n          <WizardFooter showProgressLine=\"all-devices\">\n            <WizardFooterSkipButton />\n            <WizardFooterContinueButton onClick={() => {\n            setStepCompleteState(true);\n            nextStep();\n          }} />\n          </WizardFooter>\n        </WizardContent>\n      </Wizard>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await openWizard(canvasElement);\n    await takeScreenshot();\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\nconst { currentStep, stepsProps, setStepCompleteState, nextStep } = result;\n\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        <WizardStepsProgress />\n        <ContentComponent {...stepsProps[currentStep]} />\n      </WizardBody>\n      <WizardFooter showProgressLine=\"all-devices\">\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          onClick={() => {\n            setStepCompleteState(true);\n            nextStep();\n          }}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);\n`\n      }\n    }\n  }\n}",
      ...WithoutStepper.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => {\n    useSetMobileContext();\n    const [isOpen, setIsOpen] = useState(false);\n    const close = () => setIsOpen(false);\n    const open = () => setIsOpen(true);\n    const result = useStepper({\n      steps: stepsData,\n      stepStrategy: 'linear-back',\n      includeOptional: false\n    });\n    const {\n      currentStep,\n      stepsProps,\n      setStepCompleteState,\n      nextStep\n    } = result;\n    return <>\n        <Button onClick={open}>Open</Button>\n        <Wizard isOpen={isOpen} onClose={close} useStepperResult={result}>\n          <WizardContent>\n            <WizardHeader>\n              <WizardHeaderLogo>\n                <FiverrDarkLogo size=\"sm\" />\n              </WizardHeaderLogo>\n              <WizardHeaderExitButton />\n            </WizardHeader>\n            <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n              <WizardStepsProgress />\n              <ContentComponent {...stepsProps[currentStep]} />\n            </WizardBody>\n            <WizardFooter showProgressLine=\"all-devices\">\n              <WizardFooterSkipButton />\n              <WizardFooterContinueButton onClick={() => {\n              setStepCompleteState(true);\n              nextStep();\n            }} />\n            </WizardFooter>\n          </WizardContent>\n        </Wizard>\n      </>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await openWizard(canvasElement);\n    await takeScreenshot();\n    await clickExit();\n    await takeScreenshot();\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst [isOpen, setIsOpen] = useState(false);\nconst close = () => setIsOpen(false);\nconst open = () => setIsOpen(true);\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\nconst { currentStep, stepsProps, setStepCompleteState, nextStep } = result;\n\nreturn (\n  <>\n    <Button onClick={open}>Open</Button>\n    <Wizard isOpen={isOpen} onClose={close} useStepperResult={result}>\n      <WizardContent>\n        <WizardHeader>\n          <WizardHeaderLogo>\n            <FiverrDarkLogo size=\"sm\" />\n          </WizardHeaderLogo>\n          <WizardHeaderExitButton />\n        </WizardHeader>\n        <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n          <WizardStepsProgress />\n          <ContentComponent {...stepsProps[currentStep]} />\n        </WizardBody>\n        <WizardFooter showProgressLine=\"all-devices\">\n          <WizardFooterSkipButton />\n          <WizardFooterContinueButton\n            onClick={() => {\n              setStepCompleteState(true);\n              nextStep();\n            }}\n          />\n        </WizardFooter>\n      </WizardContent>\n    </Wizard>\n  </>\n);`\n      }\n    }\n  }\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
index_stories_DynamicSteps.parameters = {
  ...index_stories_DynamicSteps.parameters,
  docs: {
    ...index_stories_DynamicSteps.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => <Dynamic />,\n  play: async ({\n    canvasElement\n  }) => {\n    await openWizard(canvasElement);\n    await clickContinue();\n    await takeScreenshot();\n    const optionBButton = screen.getByText('Option B');\n    await userEvent.click(optionBButton, {\n      delay: DELAY\n    });\n    await takeScreenshot();\n    await clickContinue();\n    await clickContinue();\n    const optionCButton = screen.getByText('Option C');\n    await userEvent.click(optionCButton, {\n      delay: DELAY\n    });\n    await takeScreenshot();\n    await clickContinue();\n    await clickContinue();\n    await clickContinue();\n    await takeScreenshot();\n    await clickBack();\n    await clickBack();\n    const optionDButton = screen.getByText('Option D');\n    await userEvent.click(optionDButton, {\n      delay: DELAY\n    });\n    await takeScreenshot();\n    await clickContinue();\n    await clickContinue();\n    await takeScreenshot();\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Adds steps dynamically based on user choices'\n      },\n      source: {\n        code: `\nconst Dynamic = () => {\nconst stepsData: StepperStep[] = [\n  { stepId: 1, Component: ContentComponent, label: 'Step 1', optional: true },\n  { stepId: 2, Component: DynamicSteps, label: 'Step 2' },\n];\nconst [stepsDataState, setStepsDataState] = useState(stepsData);\nconst [disabled, setDisabled] = useState(false);\n\nconst result = useStepper({\n  steps: stepsDataState,\n  stepStrategy: 'linear-back',\n});\nconst [userChoices, setUserChoices] = useState({\n  first: null,\n  second: null,\n});\n\nconst CurrentStepComponent = stepsDataState[result.currentStep].Component;\n\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardStepper />\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        <CurrentStepComponent\n          {...result.stepsProps[result.currentStep]}\n          initialSteps={stepsData}\n          setStepsDataState={setStepsDataState}\n          currentStep={result.currentStep}\n          stepsDataState={stepsDataState}\n          setUserChoices={setUserChoices}\n          userChoices={userChoices}\n          setStepCompleteState={result.setStepCompleteState}\n          setDisabled={setDisabled}\n        />\n      </WizardBody>\n      <WizardFooter showProgressLine=\"all-devices\">\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          disabled={disabled}\n          onClick={() => {\n            result.setStepCompleteState(true);\n            result.nextStep();\n          }}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);\n}\n\n// DynamicSteps\n\nconst dynamicSteps: { [k: string]: StepperStep[] } = {\n  option_a: [\n    { stepId: 3, Component: ContentComponent, label: 'Step option A 3' },\n    { stepId: 4, Component: ContentComponent, label: 'Step option A 4' },\n    { stepId: 5, Component: MoreDynamicSteps, label: 'Step option A 5' },\n    { stepId: 6, Component: ContentComponent, label: 'Step option A 6' },\n  ],\n  option_b: [\n    { stepId: 2, Component: ContentComponent, label: 'Step option B 3' },\n    { stepId: 5, Component: MoreDynamicSteps, label: 'Step option A 5' },\n    { stepId: 3, Component: ContentComponent, label: 'Step option B 4' },\n  ],\n};\n\nconst DynamicSteps = ({\n  initialSteps,\n  setUserChoices,\n  userChoices,\n  currentStep,\n  setStepsDataState,\n  setDisabled,\n}: {\n  initialSteps: [];\n  setUserChoices: React.Dispatch<React.SetStateAction<object>>;\n  userChoices: {\n    first: undefined | string;\n    second: undefined | string;\n  };\n  currentStep: number;\n  setStepsDataState: React.Dispatch<React.SetStateAction<StepperStep[]>>;\n  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;\n}) => {\n\n  useEffect(() => {\n    if (!userChoices?.first) {\n      setDisabled?.(true);\n    }\n\n    return () => {\n      setDisabled?.(false);\n    };\n\n  }, [setDisabled, userChoices?.first]);\n\n  return (\n    <Container>\n      <p>Click to add dynamic steps</p>\n      <ChoiceGroup\n        value={userChoices?.first}\n        onChange={(newValue) => {\n          setDisabled(false);\n          setUserChoices({\n            first: newValue,\n          });\n          const stepsToAdd: StepperStep[] = newValue ? dynamicSteps[newValue] : [];\n          const updatedSteps: StepperStep[] = [...initialSteps];\n          updatedSteps.splice(currentStep + 1, 0, ...stepsToAdd);\n          setStepsDataState(updatedSteps);\n        }}\n      >\n        <ChoiceGroupItem value=\"option_a\">Option A</ChoiceGroupItem>\n        <ChoiceGroupItem value=\"option_b\">Option B</ChoiceGroupItem>\n      </ChoiceGroup>\n    </Container>\n  );\n}\n\n// MoreDynamicSteps\n\nconst moreDynamicSteps: { [k: string]: StepperStep[] } = {\n  option_c: [{ stepId: 4, Component: ContentComponent, label: 'Step option C 10' }],\n  option_d: [\n    { stepId: 2, Component: ContentComponent, label: 'Step option D 10' },\n    { stepId: 3, Component: ContentComponent, label: 'Step Option D 11' },\n  ],\n};\n\nconst MoreDynamicSteps = ({\n  setUserChoices,\n  userChoices,\n  currentStep,\n  setStepsDataState,\n  stepsDataState,\n  setDisabled,\n}: {\n  setUserChoices: React.Dispatch<React.SetStateAction<object>>;\n  userChoices: {\n    first: undefined | string;\n    second: undefined | string;\n  };\n  currentStep: number;\n  setStepsDataState: React.Dispatch<React.SetStateAction<StepperStep[]>>;\n  stepsDataState?: any;\n  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;\n}) => {\n  useEffect(() => {\n    if (!userChoices?.second) {\n      setDisabled?.(true);\n    }\n\n    return () => {\n      setDisabled?.(false);\n    };\n\n  }, [setDisabled, userChoices?.second]);\n\n  return (\n    <Container>\n      <p>Click to add more dynamic steps</p>\n      <ChoiceGroup\n        value={userChoices?.second}\n        onChange={(newValue) => {\n          const updatedSteps: StepperStep[] = [...stepsDataState];\n          setDisabled(false);\n          if (userChoices.second) {\n            const stepsToRemoveCount: StepperStep[] = moreDynamicSteps[userChoices.second] || [];\n            updatedSteps.splice(currentStep + 1, stepsToRemoveCount.length);\n          }\n          setUserChoices({\n            ...userChoices,\n            second: newValue,\n          });\n          const stepsToAdd: StepperStep[] = newValue ? moreDynamicSteps[newValue] : [];\n\n          updatedSteps.splice(currentStep + 1, 0, ...stepsToAdd);\n          setStepsDataState(updatedSteps);\n        }}\n      >\n        <ChoiceGroupItem value=\"option_c\">Option C</ChoiceGroupItem>\n        <ChoiceGroupItem value=\"option_d\">Option D</ChoiceGroupItem>\n      </ChoiceGroup>\n    </Container>\n  );\n};`\n      }\n    }\n  }\n}",
      ...index_stories_DynamicSteps.parameters?.docs?.source
    }
  }
};
Validation.parameters = {
  ...Validation.parameters,
  docs: {
    ...Validation.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => <ValidationForm />,\n  parameters: {\n    docs: {\n      description: {\n        story: 'Simulates a server call to validate form fields'\n      },\n      source: {\n        code: `\nconst result = useStepper({\n  steps: stepsData,\n  stepStrategy: 'linear-back',\n  includeOptional: false,\n});\n\nconst [loading, setLoading] = useState(false);\nconst methods = useForm<SchemaType>({\n  resolver: zodResolver(schema),\n});\n\nconst formOnClick = methods.handleSubmit(async ({ username }) => {\n  try {\n    setLoading(true);\n    await fetchServer(username);\n    result.setStepCompleteState(true);\n    result.nextStep();\n  } catch (error) {\n    methods.setError('username', { message: error.message });\n  } finally {\n    setLoading(false);\n  }\n});\n\nconst continueButtonProps = result.currentStep === 0\n? {\n    onClick: formOnClick,\n    form: 'registrationForm',\n  }\n: {\n    onClick: () => {\n      result.setStepCompleteState(true);\n      result.nextStep();\n    },\n  };\nreturn (\n  <Wizard useStepperResult={result}>\n    <WizardTrigger>\n      <Button>Open Wizard</Button>\n    </WizardTrigger>\n    <WizardContent>\n      <WizardHeader>\n        <WizardHeaderLogo>\n          <FiverrDarkLogo size=\"sm\" />\n        </WizardHeaderLogo>\n        <WizardStepper />\n        <WizardHeaderExitButton />\n      </WizardHeader>\n      <WizardBody display=\"flex\" gap=\"6\" padding=\"14\" direction=\"column\">\n        {result.currentStep === 0 ? (\n          <FormValidation methods={methods} />\n        ) : (\n          <ContentComponent {...result.stepsProps[result.currentStep]} />\n        )}\n      </WizardBody>\n      <WizardFooter>\n        <WizardFooterSkipButton />\n        <WizardFooterContinueButton\n          loading={loading}\n          {...continueButtonProps}\n        />\n      </WizardFooter>\n    </WizardContent>\n  </Wizard>\n);`\n      }\n    }\n  }\n}",
      ...Validation.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","compactStepper","WithoutStepper","Controlled","DynamicSteps","Validation"];

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/PopoverChevron/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");




const PopoverChevron = _ref => {
  var _arrowRef$current;
  let {
    size = 'md',
    dataTestId
  } = _ref;
  const {
    arrowRef,
    floatingData: {
      middlewareData: {
        arrow
      },
      placement
    }
  } = (0,_PopoverContext__WEBPACK_IMPORTED_MODULE_3__/* .usePopoverContext */ .C)();
  const arrowOffset = (arrowRef === null || arrowRef === void 0 || (_arrowRef$current = arrowRef.current) === null || _arrowRef$current === void 0 ? void 0 : _arrowRef$current.offsetWidth) || 0;
  const side = placement.split('-')[0];
  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
  }[side];
  const {
    x,
    y
  } = arrow || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    "data-testid": dataTestId,
    ref: arrowRef,
    zIndex: "-1",
    style: {
      backgroundColor: 'inherit'
    },
    position: "absolute",
    width: size === 'sm' ? 12 : 16,
    height: size === 'sm' ? 12 : 16,
    transform: "rotate(45deg)",
    pointerEvents: "none",
    left: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(x) ? undefined : "".concat(x, "px"),
    top: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(y) ? undefined : "".concat(y, "px"),
    [staticSide]: "".concat(-arrowOffset / 2, "px")
  });
};
PopoverChevron.displayName = 'PopoverChevron';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverChevron);
;
PopoverChevron.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PopoverChevron"
};

/***/ }),

/***/ "../storybook_helpers/dist/esm/src/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ setFiverrContext),
/* harmony export */   f: () => (/* binding */ ExcludedProps)
/* harmony export */ });
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
const ExcludedProps = ['hidden', 'className', 'style', 'display', 'position', 'as', 'margin', 'marginX', 'marginY', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'padding', 'paddingX', 'paddingY', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'visibility', 'cursor', 'overflow', 'overflowX', 'overflowY', 'userSelect', 'maxWidth', 'maxHeight', 'minWidth', 'minHeight', 'width', 'height', 'textAlign', 'outlineWidth', 'outlineOffset', 'outlineColor', 'outlineStyle', 'top', 'bottom', 'right', 'left', 'transform', 'centered', 'background', 'backgroundColor', 'gap', 'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius', 'boxShadow', 'borderStyle', 'borderColor', 'borderWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'href', 'target', 'wrap', 'justifyContent', 'justifySelf', 'alignSelf', 'alignItems', 'direction', 'flex', 'flexShrink', 'flexGrow', 'flexBasis', 'size', 'color', 'decoration', 'textOverflow', 'whiteSpace', 'fontStyle', 'fontWeight', 'fontFamily', 'fontSize', 'lineHeight', 'letterSpacing', 'gridTemplateAreas', 'ratio', 'boxSizing', 'listStyleType', 'templateRows', 'templateColumns', 'autoColumns', 'autoRows', 'columnGap', 'rowGap', 'templateAreas', 'rowStart', 'columnStart', 'rowEnd', 'columnEnd', 'gridArea', 'fill', 'order', 'htmlHidden', 'pointerEvents', 'zIndex', 'transition', 'opacity', 'overflowWrap', 'wordBreak'];
const setFiverrContext = function () {
  let context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  window.initialData = window.initialData || {};
  window.initialData.FiverrContext = _objectSpread(_objectSpread({}, window.initialData.FiverrContext), context);
};

/***/ }),

/***/ "../tooltip/dist/esm/src/components/Tooltip/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../popover/dist/esm/src/components/Popover/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverChevron/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContent/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
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



const Tooltip = _ref => {
  let {
    position = 'top',
    size = 'md',
    appendToBody = false,
    isOpen,
    onOpenChanged,
    content,
    disableFlip = false,
    children,
    as = 'span',
    offset,
    withDelay = true,
    anchorProps,
    dataTrackTag = 'tooltip',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    triggerEvent: "hover",
    isOpen: isOpen,
    position: position,
    onOpenChanged: onOpenChanged,
    disableFlip: disableFlip,
    offset: offset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, _objectSpread({
    as: as,
    dataTrackTag: "tooltip_anchor"
  }, anchorProps), children), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    backgroundColor: "grey_1100",
    appendToBody: appendToBody,
    zIndex: "tooltip",
    disablePadding: true,
    disableBoxShadow: true,
    borderRadius: "lg",
    disableAutoFocus: true,
    withDelay: withDelay,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    color: "white",
    maxWidth: 256,
    boxSizing: "borderBox",
    paddingY: size === 'sm' ? '1.5' : '2.5',
    paddingX: size === 'sm' ? '2' : '3',
    fontSize: size === 'sm' ? 'b_xs' : 'b_sm',
    lineHeight: size === 'sm' ? 'b_xs' : 'b_sm'
  }, content)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);
;
Tooltip.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tooltip"
};

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/getComponentProps/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");
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

const getComponentProps = child => {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .isBuilderChildren */ .z)(child)) {
    var _child$props, _child$props2;
    return _objectSpread({
      children: (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 || (_child$props = _child$props.block) === null || _child$props === void 0 ? void 0 : _child$props.children) || []
    }, (child === null || child === void 0 || (_child$props2 = child.props) === null || _child$props2 === void 0 || (_child$props2 = _child$props2.block) === null || _child$props2 === void 0 || (_child$props2 = _child$props2.component) === null || _child$props2 === void 0 ? void 0 : _child$props2.options) || {});
  }
  return (child === null || child === void 0 ? void 0 : child.props) || {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComponentProps);

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/logos/FiverrDark.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");



const FiverrDarkLogo = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .pascalToSnake */ .e)('FiverrDarkLogo')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .FIVERR_LOGOS_SIZES */ .xx[size].width,
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .FIVERR_LOGOS_SIZES */ .xx[size].height,
    fill: "none",
    viewBox: "0 0 120 36",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#404145",
    d: "M110.04 17.413h-4.247c-2.735 0-4.198 2.055-4.198 5.478v12.376h-8.056V17.413h-3.417c-2.734 0-4.198 2.055-4.198 5.478v12.376h-8.056V10.81h8.056v3.717c1.319-2.886 3.125-3.717 5.81-3.717h9.862v3.717c1.319-2.886 3.125-3.717 5.81-3.717h2.636v6.603zm-33.93 7.533H59.316c.44 2.74 2.147 4.304 5.028 4.304 2.147 0 3.66-.88 4.15-2.446l7.127 2.006c-1.757 4.255-6.102 6.848-11.277 6.848-8.739 0-12.743-6.8-12.743-12.62 0-5.722 3.515-12.57 12.254-12.57 9.276 0 12.352 6.945 12.352 12.081a25 25 0 0 1-.097 2.397M68.298 20.2c-.195-2.104-1.709-4.06-4.442-4.06-2.54 0-4.052 1.125-4.54 4.06zM37.542 35.267h7.079l8.837-24.456h-8.104l-4.296 14.233-4.395-14.234h-8.056zm-33.001 0h8.006V17.413h7.616v17.854h7.958V10.81H12.547V9.294c0-1.663 1.172-2.69 3.027-2.69h4.59V0h-5.908c-5.81 0-9.715 3.571-9.715 8.804v2.006H0v6.603h4.54z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#1DBF73",
    d: "M115.02 36c2.75 0 4.98-2.234 4.98-4.99 0-2.755-2.23-4.99-4.98-4.99a4.984 4.984 0 0 0-4.98 4.99 4.984 4.984 0 0 0 4.98 4.99"
  }));
};
FiverrDarkLogo.displayName = 'FiverrDarkLogo';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiverrDarkLogo);
;
FiverrDarkLogo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FiverrDarkLogo"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ArrowLeft.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ArrowLeftIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ArrowLeftIcon')
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
    d: "M5.469 13.037 1.25 8.818m0 0L5.469 4.6M1.25 8.818h13.5",
    vectorEffect: "non-scaling-stroke"
  }));
};
ArrowLeftIcon.id = 'ArrowLeftIcon';
ArrowLeftIcon.displayName = 'ArrowLeftIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowLeftIcon);
;
ArrowLeftIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ArrowLeftIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/CheckCircleSolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CheckCircleSolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CheckCircleSolidIcon')
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
    d: "M8 15.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m3.327-9.146a.698.698 0 0 0-1.072-.894l-3 3.6-1.552-1.553a.698.698 0 0 0-.987.986l2.093 2.093a.697.697 0 0 0 1.03-.046z",
    clipRule: "evenodd"
  }));
};
CheckCircleSolidIcon.id = 'CheckCircleSolidIcon';
CheckCircleSolidIcon.displayName = 'CheckCircleSolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckCircleSolidIcon);
;
CheckCircleSolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CheckCircleSolidIcon"
};

/***/ })

}]);
//# sourceMappingURL=7712.115bbe37.iframe.bundle.js.map