"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[5046],{

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

/***/ "../button/dist/esm/src/components/ChevronButton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_ChevronButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js
var ChevronDown = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/shared/constants.js
var constants = __webpack_require__("../button/dist/esm/src/components/shared/constants.js");
;// ../button/dist/esm/src/components/ChevronButton/constants.js
const DIRECTIONS = {
  left: 'rotate(90deg)',
  right: 'rotate(-90deg)',
  up: 'rotate(-180deg)'
};
;// ../button/dist/esm/src/components/ChevronButton/index.js
const _excluded = ["size", "theme", "onClick", "dataTestId", "className", "type", "ariaLabel", "disabled", "shape", "chevronDirection", "dataTrackTag"];
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







const ChevronButton = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      size = 'md',
      theme = 'dark',
      onClick,
      dataTestId,
      className,
      type = 'button',
      ariaLabel,
      disabled,
      shape = 'square',
      chevronDirection = 'down',
      dataTrackTag = 'chevron_button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(IconButton/* default */.A, _objectSpread({
    ref: ref,
    "aria-label": ariaLabel || (0,translate/* translate */.T)('button.chevronButton.toggle'),
    variant: "ghost",
    size: size,
    onClick: onClick,
    "data-testid": dataTestId,
    className: className,
    type: type,
    colorScheme: theme === 'light' ? 'white' : undefined,
    disabled: disabled,
    shape: shape,
    dataTrackTag: dataTrackTag
  }, rest), /*#__PURE__*/react.createElement(Box/* default */.A, {
    transition: "0.15s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: DIRECTIONS[chevronDirection]
  }, /*#__PURE__*/react.createElement(ChevronDown/* default */.A, {
    color: disabled ? undefined : constants/* ICON_COLORS */.b[theme]
  })));
});
ChevronButton.displayName = 'ChevronButton';
/* harmony default export */ const components_ChevronButton = (ChevronButton);
;
ChevronButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChevronButton"
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

/***/ "../hooks/dist/esm/src/hooks/useIsClient/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

/**
 * This React Hook can be useful in a SSR environment to wait until be on a client to execution some functions.
 * This value is stateful, meaning it will be true only on a client and
 * only after additional render to avoid client-server hydration mismatch
 * @returns `true` if on a client
 */
const useIsClient = () => {
  const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsClient(true);
  }, []);
  return isClient;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsClient);

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffect);

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useLatest/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");


const useLatest = value => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(() => {
    ref.current = value;
  });
  return ref;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatest);

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

/***/ "../layout_components/dist/esm/src/components/Container/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Layout/index.js");
const _excluded = ["children"];
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


const Container = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref
  }, restProps), children);
});
Container.displayName = 'Container';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);
;
Container.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Container"
};

/***/ }),

/***/ "../navigation/src/hooks/useStepper/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Controlled: () => (/* binding */ Controlled),
  EnterSelect: () => (/* binding */ EnterSelect),
  FormProgress: () => (/* binding */ FormProgress),
  Primary: () => (/* binding */ Primary),
  Uncontrolled: () => (/* binding */ Uncontrolled),
  Vertical: () => (/* binding */ Vertical),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Heading/index.js + 1 modules
var Heading = __webpack_require__("../typography/dist/esm/src/components/Heading/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/index.js
var Collapsible = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/index.js");
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeader/index.js
var CollapsibleHeader = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeader/index.js");
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeaderChevron/index.js
var CollapsibleHeaderChevron = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeaderChevron/index.js");
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/CollapsibleContent/index.js
var CollapsibleContent = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleContent/index.js");
// EXTERNAL MODULE: ../navigation/src/hooks/useStepper/index.tsx + 5 modules
var useStepper = __webpack_require__("../navigation/src/hooks/useStepper/index.tsx");
;// ../navigation/src/hooks/useStepper/stories/helpers.tsx
const _excluded = ["key"],
  _excluded2 = ["key"],
  _excluded3 = ["key"],
  _excluded4 = ["key"];
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
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}







const Step1Content = /*#__PURE__*/(0,react.forwardRef)((props, ref) => /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
  padding: "8",
  ref: ref,
  direction: "column"
}, props), /*#__PURE__*/react.createElement(Heading/* default */.A, null, "Step 1"), /*#__PURE__*/react.createElement(Text/* default */.A, null, "Step 1 content")));
Step1Content.displayName = 'Step1Content';
const Step2Content = /*#__PURE__*/(0,react.forwardRef)((props, ref) => /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
  padding: "8",
  ref: ref,
  direction: "column"
}, props), /*#__PURE__*/react.createElement(Heading/* default */.A, null, "Step 2"), /*#__PURE__*/react.createElement(Text/* default */.A, null, "Step 2 content")));
Step2Content.displayName = 'Step2Content';
const Step3Content = /*#__PURE__*/(0,react.forwardRef)((props, ref) => /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
  padding: "8",
  ref: ref,
  direction: "column"
}, props), /*#__PURE__*/react.createElement(Heading/* default */.A, null, "Step 3"), /*#__PURE__*/react.createElement(Text/* default */.A, null, "Step 3 content")));
Step3Content.displayName = 'Step3Content';
const stepsData = [{
  stepId: 1,
  Component: Step1Content,
  label: 'Step 1'
}, {
  stepId: 2,
  Component: Step2Content,
  label: 'Step 2'
}, {
  stepId: 3,
  Component: Step3Content,
  label: 'Step 3'
}];
const UncontrolledStepper = () => {
  const {
    currentStep,
    hasPreviousStep,
    hasNextStep,
    nextStep,
    prevStep,
    stepsProps,
    stepperProps
  } = (0,useStepper/* default */.A)({
    steps: stepsData
  });
  const CurrentStepComponent = stepsData[currentStep].Component;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    as: "nav"
  }, stepperProps), stepsProps === null || stepsProps === void 0 ? void 0 : stepsProps.map((_ref, index) => {
    let {
        key
      } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/react.createElement(Button/* default */.A, _extends({
      key: key,
      variant: currentStep === index ? 'outline' : 'ghost'
    }, rest), stepsData[index].label);
  })), /*#__PURE__*/react.createElement(Container/* default */.A, null, /*#__PURE__*/react.createElement(CurrentStepComponent, stepsProps[currentStep])), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    padding: "10"
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: prevStep,
    disabled: !hasPreviousStep
  }, "Prev"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: nextStep,
    disabled: !hasNextStep
  }, "Next")));
};
const ControlledStepper = () => {
  const [currentStep, setCurrentStep] = react.useState(1); // Control the current step from outside
  const {
    hasPreviousStep,
    hasNextStep,
    nextStep,
    prevStep,
    stepsProps,
    stepperProps
  } = (0,useStepper/* default */.A)({
    steps: stepsData,
    currentStep,
    onCurrentStepChanged: setCurrentStep
  });
  const CurrentStepComponent = stepsData[currentStep].Component;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    as: "nav"
  }, stepperProps), stepsProps === null || stepsProps === void 0 ? void 0 : stepsProps.map((_ref2, index) => {
    let {
        key
      } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);
    return /*#__PURE__*/react.createElement(Button/* default */.A, _extends({
      key: key,
      variant: currentStep === index ? 'outline' : 'ghost'
    }, rest), stepsData[index].label);
  })), /*#__PURE__*/react.createElement(Container/* default */.A, null, /*#__PURE__*/react.createElement(CurrentStepComponent, stepsProps[currentStep])), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    padding: "10"
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: prevStep,
    disabled: !hasPreviousStep
  }, "Prev"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: nextStep,
    disabled: !hasNextStep
  }, "Next")));
};
const VerticalStepper = () => {
  const {
    currentStep,
    stepsProps,
    stepperProps
  } = (0,useStepper/* default */.A)({
    steps: stepsData,
    orientation: 'vertical'
  });
  const CurrentStepComponent = stepsData[currentStep].Component;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    as: "nav",
    direction: "column"
  }, stepperProps), stepsProps === null || stepsProps === void 0 ? void 0 : stepsProps.map((_ref3, index) => {
    let {
        key
      } = _ref3,
      rest = _objectWithoutProperties(_ref3, _excluded3);
    return /*#__PURE__*/react.createElement(Button/* default */.A, _extends({
      key: key,
      variant: currentStep === index ? 'outline' : 'ghost'
    }, rest), stepsData[index].label);
  })), /*#__PURE__*/react.createElement(Container/* default */.A, null, /*#__PURE__*/react.createElement(CurrentStepComponent, stepsProps[currentStep])));
};
const EnterToSelectStepper = () => {
  const {
    currentStep,
    stepsProps,
    stepperProps
  } = (0,useStepper/* default */.A)({
    steps: stepsData,
    autoSelect: false
  });
  const CurrentStepComponent = stepsData[currentStep].Component;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    as: "nav"
  }, stepperProps), stepsProps === null || stepsProps === void 0 ? void 0 : stepsProps.map((_ref4, index) => {
    let {
        key
      } = _ref4,
      rest = _objectWithoutProperties(_ref4, _excluded4);
    return /*#__PURE__*/react.createElement(Button/* default */.A, _extends({
      key: key,
      variant: currentStep === index ? 'outline' : 'ghost'
    }, rest), stepsData[index].label);
  })), /*#__PURE__*/react.createElement(Container/* default */.A, null, /*#__PURE__*/react.createElement(CurrentStepComponent, stepsProps[currentStep])));
};
const Section = _ref5 => {
  let {
    index,
    onSave
  } = _ref5;
  const displayedIndex = index + 1;
  const [value, setValue] = (0,react.useState)('');
  const handleSave = () => {
    if (value.trim() === '') {
      alert('This section cannot be empty.');
      return;
    }
    onSave(index);
  };
  return /*#__PURE__*/react.createElement(Stack/* default */.A, null, /*#__PURE__*/react.createElement(Input/* default */.A, {
    type: "text",
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: "Enter value for section ".concat(displayedIndex)
  }), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: handleSave
  }, "Save section ".concat(displayedIndex)));
};
const FormStepper = () => {
  const [expanded, setExpanded] = (0,react.useState)(true);
  const steps = [{
    id: 1,
    label: 'Section 1'
  }, {
    id: 2,
    label: 'Section 2'
  }, {
    id: 3,
    label: 'Section 3'
  }, {
    id: 4,
    label: 'Section 4'
  }, {
    id: 5,
    label: 'Section 5'
  }];
  const {
    stepsProps,
    progressProps,
    setStepCompleteState,
    nextStep,
    currentStep,
    hasNextStep
  } = (0,useStepper/* default */.A)({
    steps,
    initialStep: 0
  });
  const handleSave = () => {
    setStepCompleteState(true);
    nextStep();
    if (!hasNextStep) {
      setExpanded(false);
    }
  };
  return /*#__PURE__*/react.createElement(Stack/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    size: "h_xs"
  }, "Progress: ", progressProps.progressPercent, "%"), stepsProps.map((section, index) => /*#__PURE__*/react.createElement(Collapsible/* default */.A, {
    key: section.id,
    expanded: expanded && index === currentStep
  }, /*#__PURE__*/react.createElement(CollapsibleHeader/* default */.A, null, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    size: "h_xs"
  }, "Section ", index + 1), /*#__PURE__*/react.createElement(CollapsibleHeaderChevron/* default */.A, null)), /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, null, /*#__PURE__*/react.createElement(Section, _extends({
    onSave: handleSave
  }, stepsProps[index])))))));
};
;// ../navigation/src/hooks/useStepper/stories/index.stories.tsx
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




const USER_EVENT_OPTIONS = {
  delay: 400
};
const Primary = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(UncontrolledStepper, null),
  play: function () {
    var _ref = _asyncToGenerator(function (_ref2) {
      let {
        canvasElement
      } = _ref2;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const step3Button = canvas.getByText('Step 3');
        yield dist/* userEvent */.Q4.click(step3Button, USER_EVENT_OPTIONS);
        yield (0,src/* takeScreenshot */.w)();
        const prevButton = canvas.getByText('Prev');
        yield dist/* userEvent */.Q4.click(prevButton, USER_EVENT_OPTIONS);
        yield (0,src/* takeScreenshot */.w)();
        const nextButton = canvas.getByText('Next');
        yield dist/* userEvent */.Q4.click(nextButton, USER_EVENT_OPTIONS);
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x) {
      return _ref.apply(this, arguments);
    };
  }()
};
const Uncontrolled = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(UncontrolledStepper, null),
  parameters: {
    docs: {
      description: {
        story: 'An uncontrolled stepper demonstrating the default usage of the useStepper hook.'
      },
      source: {
        code: "\n<Stack direction=\"column\" justifyContent=\"center\" alignItems=\"center\">\n  <Stack as=\"nav\" {...stepperProps}>\n    {stepsProps?.map((step, index) => (\n      <Button key={step.id} variant={currentStep === index ? 'outline' : 'ghost'} {...step}>\n        {stepsData[index].label}\n      </Button>\n    ))}\n  </Stack>\n  <Container>\n    <CurrentStepComponent {...stepsProps[currentStep]} />\n  </Container>\n  <Stack direction=\"row\" padding=\"10\">\n    <Button onClick={prevStep} disabled={!hasPreviousStep}>\n      Prev\n    </Button>\n    <Button onClick={nextStep} disabled={!hasNextStep}>\n      Next\n    </Button>\n  </Stack>\n</Stack>\n"
      }
    }
  }
};
const Controlled = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => /*#__PURE__*/react.createElement(ControlledStepper, null),
  play: function () {
    var _ref3 = _asyncToGenerator(function* () {
      yield (0,src/* takeScreenshot */.w)();
    });
    return function play() {
      return _ref3.apply(this, arguments);
    };
  }(),
  parameters: {
    docs: {
      description: {
        story: 'A controlled stepper demonstrating how to control the current step from outside the hook.'
      },
      source: {
        code: "\n<Stack direction=\"column\" justifyContent=\"center\" alignItems=\"center\">\n  <Stack as=\"nav\" {...stepperProps}>\n    {stepsProps?.map((step, index) => (\n      <Button key={step.id} variant={currentStep === index ? 'outline' : 'ghost'} {...step}>\n        {stepsData[index].label}\n      </Button>\n    ))}\n  </Stack>\n  <Container>\n    <CurrentStepComponent {...stepsProps[currentStep]} />\n  </Container>\n  <Stack direction=\"row\" padding=\"10\">\n    <Button onClick={prevStep} disabled={!hasPreviousStep}>\n      Prev\n    </Button>\n    <Button onClick={nextStep} disabled={!hasNextStep}>\n      Next\n    </Button>\n  </Stack>\n</Stack>\n"
      }
    }
  }
};
const Vertical = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(VerticalStepper, null),
  play: function () {
    var _ref4 = _asyncToGenerator(function (_ref5) {
      let {
        canvasElement
      } = _ref5;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const step3Button = canvas.getByText('Step 3');
        step3Button.focus();
        yield dist/* userEvent */.Q4.keyboard('[ArrowUp]', USER_EVENT_OPTIONS);
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x2) {
      return _ref4.apply(this, arguments);
    };
  }(),
  parameters: {
    docs: {
      description: {
        story: 'A stepper demonstrating the vertical orientation of the useStepper hook.'
      },
      source: {
        code: "\n <Stack>\n      <Stack as=\"nav\" direction=\"column\" {...stepperProps}>\n        {stepsProps?.map((step, index) => (\n          <Button variant={currentStep === index ? 'outline' : 'ghost'} {...step}>\n            {stepsData[index].label}\n          </Button>\n        ))}\n      </Stack>\n      <Container>\n        <CurrentStepComponent {...stepsProps[currentStep]} />\n      </Container>\n    </Stack>\n"
      }
    }
  }
};
const EnterSelect = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(EnterToSelectStepper, null),
  play: function () {
    var _ref6 = _asyncToGenerator(function (_ref7) {
      let {
        canvasElement
      } = _ref7;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const step3Button = canvas.getByText('Step 3');
        step3Button.focus();
        yield dist/* userEvent */.Q4.keyboard('[ArrowLeft]', USER_EVENT_OPTIONS);
        yield dist/* userEvent */.Q4.keyboard('[ArrowLeft]', USER_EVENT_OPTIONS);
        yield dist/* userEvent */.Q4.keyboard('[Enter]', USER_EVENT_OPTIONS);
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x3) {
      return _ref6.apply(this, arguments);
    };
  }(),
  parameters: {
    docs: {
      description: {
        story: 'A stepper demonstrating the use of the Enter key to select a step.'
      },
      source: {
        code: "\n    <Stack direction=\"column\" justifyContent=\"center\" alignItems=\"center\">\n      <Stack as=\"nav\" {...stepperProps}>\n        {stepsProps?.map((step, index) => (\n          <Button variant={currentStep === index ? 'outline' : 'ghost'} {...step}>\n            {stepsData[index].label}\n          </Button>\n        ))}\n      </Stack>\n      <Container>\n        <CurrentStepComponent {...stepsProps[currentStep]} />\n      </Container>\n    </Stack>\n"
      }
    }
  }
};
const FormProgress = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(FormStepper, null),
  play: function () {
    var _ref8 = _asyncToGenerator(function (_ref9) {
      let {
        canvasElement
      } = _ref9;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const section1Input = canvas.getByPlaceholderText('Enter value for section 1');
        yield dist/* userEvent */.Q4.type(section1Input, 'Section 1 value');
        yield dist/* userEvent */.Q4.click(canvas.getByText('Save section 1'), USER_EVENT_OPTIONS);
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x4) {
      return _ref8.apply(this, arguments);
    };
  }(),
  parameters: {
    docs: {
      source: {
        code: "const [expanded, setExpanded] = useState(true);\n  const steps = [\n    { id: 1, label: 'Section 1' },\n    { id: 2, label: 'Section 2' },\n    { id: 3, label: 'Section 3' },\n    { id: 4, label: 'Section 4' },\n    { id: 5, label: 'Section 5' },\n  ];\n  const { stepsProps, progressProps, setStepCompleteState, nextStep, currentStep, hasNextStep } = useStepper({\n    steps,\n    initialStep: 0,\n  });\n\n  const handleSave = () => {\n    setStepCompleteState(true);\n    nextStep();\n\n    if (!hasNextStep) {\n      setExpanded(false);\n    }\n  };\n\n  return (\n    <Stack>\n      <Stack direction=\"column\">\n        <Heading size=\"h_xs\">Progress: {progressProps.progressPercent}%</Heading>\n        {stepsProps.map((section, index) => (\n          <Collapsible key={section.id} expanded={expanded && index === currentStep}>\n            <CollapsibleHeader>\n              <Heading size=\"h_xs\">Section {index + 1}</Heading>\n              <CollapsibleHeaderChevron />\n            </CollapsibleHeader>\n            <CollapsibleContent>\n              <Section onSave={handleSave} {...stepsProps[index]} />\n            </CollapsibleContent>\n          </Collapsible>\n        ))}\n      </Stack>\n    </Stack>\n  );\n"
      }
    }
  }
};
const meta = {
  title: 'Navigation/hooks/useStepper',
  component: UncontrolledStepper,
  parameters: {
    docs: {
      source: {
        code: "const { currentStep, hasPreviousStep, hasNextStep, nextStep, prevStep, stepsProps, stepperProps } = useStepper({\n    steps: stepsData,\n  });\n\n  const CurrentStepComponent = stepsData[currentStep].Component;\n\n  return (\n    <Stack direction=\"column\" justifyContent=\"center\" alignItems=\"center\">\n      <Stack as=\"nav\" {...stepperProps}>\n        {stepsProps?.map(({ key, ...rest }, index) => (\n          <Button key={key} variant={currentStep === index ? 'outline' : 'ghost'} {...rest}>\n            {stepsData[index].label}\n          </Button>\n        ))}\n      </Stack>\n      <Container>\n        <CurrentStepComponent {...stepsProps[currentStep]} />\n      </Container>\n      <Stack direction=\"row\" padding=\"10\">\n        <Button onClick={prevStep} disabled={!hasPreviousStep}>\n          Prev\n        </Button>\n        <Button onClick={nextStep} disabled={!hasNextStep}>\n          Next\n        </Button>\n      </Stack>\n    </Stack>\n  );"
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
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <UncontrolledStepper />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const step3Button = canvas.getByText('Step 3');\n    await userEvent.click(step3Button, USER_EVENT_OPTIONS);\n    await takeScreenshot();\n    const prevButton = canvas.getByText('Prev');\n    await userEvent.click(prevButton, USER_EVENT_OPTIONS);\n    await takeScreenshot();\n    const nextButton = canvas.getByText('Next');\n    await userEvent.click(nextButton, USER_EVENT_OPTIONS);\n    await takeScreenshot();\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Uncontrolled.parameters = {
  ...Uncontrolled.parameters,
  docs: {
    ...Uncontrolled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <UncontrolledStepper />,\n  parameters: {\n    docs: {\n      description: {\n        story: 'An uncontrolled stepper demonstrating the default usage of the useStepper hook.'\n      },\n      source: {\n        code: `\n<Stack direction=\"column\" justifyContent=\"center\" alignItems=\"center\">\n  <Stack as=\"nav\" {...stepperProps}>\n    {stepsProps?.map((step, index) => (\n      <Button key={step.id} variant={currentStep === index ? 'outline' : 'ghost'} {...step}>\n        {stepsData[index].label}\n      </Button>\n    ))}\n  </Stack>\n  <Container>\n    <CurrentStepComponent {...stepsProps[currentStep]} />\n  </Container>\n  <Stack direction=\"row\" padding=\"10\">\n    <Button onClick={prevStep} disabled={!hasPreviousStep}>\n      Prev\n    </Button>\n    <Button onClick={nextStep} disabled={!hasNextStep}>\n      Next\n    </Button>\n  </Stack>\n</Stack>\n`\n      }\n    }\n  }\n}",
      ...Uncontrolled.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => <ControlledStepper />,\n  play: async () => {\n    await takeScreenshot();\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'A controlled stepper demonstrating how to control the current step from outside the hook.'\n      },\n      source: {\n        code: `\n<Stack direction=\"column\" justifyContent=\"center\" alignItems=\"center\">\n  <Stack as=\"nav\" {...stepperProps}>\n    {stepsProps?.map((step, index) => (\n      <Button key={step.id} variant={currentStep === index ? 'outline' : 'ghost'} {...step}>\n        {stepsData[index].label}\n      </Button>\n    ))}\n  </Stack>\n  <Container>\n    <CurrentStepComponent {...stepsProps[currentStep]} />\n  </Container>\n  <Stack direction=\"row\" padding=\"10\">\n    <Button onClick={prevStep} disabled={!hasPreviousStep}>\n      Prev\n    </Button>\n    <Button onClick={nextStep} disabled={!hasNextStep}>\n      Next\n    </Button>\n  </Stack>\n</Stack>\n`\n      }\n    }\n  }\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
Vertical.parameters = {
  ...Vertical.parameters,
  docs: {
    ...Vertical.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <VerticalStepper />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const step3Button = canvas.getByText('Step 3');\n    step3Button.focus();\n    await userEvent.keyboard('[ArrowUp]', USER_EVENT_OPTIONS);\n    await takeScreenshot();\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'A stepper demonstrating the vertical orientation of the useStepper hook.'\n      },\n      source: {\n        code: `\n <Stack>\n      <Stack as=\"nav\" direction=\"column\" {...stepperProps}>\n        {stepsProps?.map((step, index) => (\n          <Button variant={currentStep === index ? 'outline' : 'ghost'} {...step}>\n            {stepsData[index].label}\n          </Button>\n        ))}\n      </Stack>\n      <Container>\n        <CurrentStepComponent {...stepsProps[currentStep]} />\n      </Container>\n    </Stack>\n`\n      }\n    }\n  }\n}",
      ...Vertical.parameters?.docs?.source
    }
  }
};
EnterSelect.parameters = {
  ...EnterSelect.parameters,
  docs: {
    ...EnterSelect.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <EnterToSelectStepper />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const step3Button = canvas.getByText('Step 3');\n    step3Button.focus();\n    await userEvent.keyboard('[ArrowLeft]', USER_EVENT_OPTIONS);\n    await userEvent.keyboard('[ArrowLeft]', USER_EVENT_OPTIONS);\n    await userEvent.keyboard('[Enter]', USER_EVENT_OPTIONS);\n    await takeScreenshot();\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'A stepper demonstrating the use of the Enter key to select a step.'\n      },\n      source: {\n        code: `\n    <Stack direction=\"column\" justifyContent=\"center\" alignItems=\"center\">\n      <Stack as=\"nav\" {...stepperProps}>\n        {stepsProps?.map((step, index) => (\n          <Button variant={currentStep === index ? 'outline' : 'ghost'} {...step}>\n            {stepsData[index].label}\n          </Button>\n        ))}\n      </Stack>\n      <Container>\n        <CurrentStepComponent {...stepsProps[currentStep]} />\n      </Container>\n    </Stack>\n`\n      }\n    }\n  }\n}",
      ...EnterSelect.parameters?.docs?.source
    }
  }
};
FormProgress.parameters = {
  ...FormProgress.parameters,
  docs: {
    ...FormProgress.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <FormStepper />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const section1Input = canvas.getByPlaceholderText('Enter value for section 1');\n    await userEvent.type(section1Input, 'Section 1 value');\n    await userEvent.click(canvas.getByText('Save section 1'), USER_EVENT_OPTIONS);\n    await takeScreenshot();\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const [expanded, setExpanded] = useState(true);\n  const steps = [\n    { id: 1, label: 'Section 1' },\n    { id: 2, label: 'Section 2' },\n    { id: 3, label: 'Section 3' },\n    { id: 4, label: 'Section 4' },\n    { id: 5, label: 'Section 5' },\n  ];\n  const { stepsProps, progressProps, setStepCompleteState, nextStep, currentStep, hasNextStep } = useStepper({\n    steps,\n    initialStep: 0,\n  });\n\n  const handleSave = () => {\n    setStepCompleteState(true);\n    nextStep();\n\n    if (!hasNextStep) {\n      setExpanded(false);\n    }\n  };\n\n  return (\n    <Stack>\n      <Stack direction=\"column\">\n        <Heading size=\"h_xs\">Progress: {progressProps.progressPercent}%</Heading>\n        {stepsProps.map((section, index) => (\n          <Collapsible key={section.id} expanded={expanded && index === currentStep}>\n            <CollapsibleHeader>\n              <Heading size=\"h_xs\">Section {index + 1}</Heading>\n              <CollapsibleHeaderChevron />\n            </CollapsibleHeader>\n            <CollapsibleContent>\n              <Section onSave={handleSave} {...stepsProps[index]} />\n            </CollapsibleContent>\n          </Collapsible>\n        ))}\n      </Stack>\n    </Stack>\n  );\n`\n      }\n    }\n  }\n}",
      ...FormProgress.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Uncontrolled","Controlled","Vertical","EnterSelect","FormProgress"];

/***/ }),

/***/ "../transition/dist/esm/src/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fm: () => (/* binding */ ENTER),
/* harmony export */   Ux: () => (/* binding */ EASING),
/* harmony export */   dc: () => (/* binding */ EXIT),
/* harmony export */   ft: () => (/* binding */ DURATION),
/* harmony export */   ur: () => (/* binding */ SLIDE_FADE_OFFSETS)
/* harmony export */ });
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/bezier-easing@2.1.0/node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");


const CSS_EASING_PREFIX_LENGTH = 13;
const parseCssEasingToJS = easing => {
  const parsePart = part => parseFloat(part.trim());
  const parts = easing.substring(CSS_EASING_PREFIX_LENGTH, easing.length - 1).split(',');
  return bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(parsePart(parts[0]), parsePart(parts[1]), parsePart(parts[2]), parsePart(parts[3]));
};
const ENTER = 'enter';
const EXIT = 'exit';
const EASING = {
  easeIn: parseCssEasingToJS(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .animationTiming */ .fC.easeIn),
  easeOut: parseCssEasingToJS(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .animationTiming */ .fC.easeOut),
  easeInOut: parseCssEasingToJS(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .animationTiming */ .fC.easeInOut),
  linear: parseCssEasingToJS(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .animationTiming */ .fC.linear)
};
const DURATION = _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .numericAnimationDurations */ .zK;
const SLIDE_FADE_OFFSETS = {
  none: 0,
  sm: 8,
  md: 16,
  lg: 32
};

/***/ }),

/***/ "../transition/dist/esm/src/hooks/useTransitionEvents.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
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

const useTransitionEvents = _ref => {
  let {
    isOpen,
    onAnimationStart,
    onAnimationEnd,
    unmountOnExit = false
  } = _ref;
  const hasOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isOpen);
  const startState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  const endState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  const start = type => {
    if (startState.current === isOpen) {
      return;
    }
    switch (type) {
      case 'enter':
        if (isOpen) {
          onAnimationStart === null || onAnimationStart === void 0 || onAnimationStart();
        }
        break;
      case 'update':
        if (isOpen || !unmountOnExit && hasOpened.current) {
          onAnimationStart === null || onAnimationStart === void 0 || onAnimationStart();
        }
        break;
      case 'leave':
        onAnimationStart === null || onAnimationStart === void 0 || onAnimationStart();
        break;
      default:
        break;
    }
    startState.current = isOpen;
  };
  const end = type => {
    if (endState.current === isOpen) {
      return;
    }
    switch (type) {
      case 'enter':
        if (isOpen) {
          onAnimationEnd === null || onAnimationEnd === void 0 || onAnimationEnd();
          hasOpened.current = true;
        }
        break;
      case 'update':
        if (isOpen) {
          hasOpened.current = true;
        }
        if (isOpen || !unmountOnExit && hasOpened.current) {
          onAnimationEnd === null || onAnimationEnd === void 0 || onAnimationEnd();
        }
        break;
      case 'leave':
        onAnimationEnd === null || onAnimationEnd === void 0 || onAnimationEnd();
        break;
      default:
        break;
    }
    endState.current = isOpen;
  };
  const getEventsHandler = type => onAnimationStart || onAnimationEnd ? {
    events: _objectSpread(_objectSpread({}, onAnimationStart ? {
      start: () => start(type)
    } : {}), onAnimationEnd ? {
      end: () => end(type)
    } : {})
  } : {};
  return {
    getEventsHandler
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTransitionEvents);

/***/ }),

/***/ "../transition/dist/esm/src/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ getValueOrField),
/* harmony export */   J: () => (/* binding */ slideTransition)
/* harmony export */ });
const getValueOrField = (value, field) => typeof value === 'object' && field ? value[field] : value;
const slideTransition = function () {
  let direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'right';
  return SlideTransitionVariants[direction];
};
const SlideTransitionVariants = {
  left: {
    position: {
      left: 0,
      top: 0,
      bottom: 0,
      width: '100%'
    },
    enter: {
      x: [0],
      y: [0]
    },
    exit: {
      x: [-100],
      y: [0]
    }
  },
  right: {
    position: {
      right: 0,
      top: 0,
      bottom: 0,
      width: '100%'
    },
    enter: {
      x: [0],
      y: [0]
    },
    exit: {
      x: [100],
      y: [0]
    }
  },
  top: {
    position: {
      top: 0,
      left: 0,
      right: 0,
      maxWidth: '100vw'
    },
    enter: {
      x: [0],
      y: [0]
    },
    exit: {
      x: [0],
      y: [-100]
    }
  },
  bottom: {
    position: {
      bottom: 0,
      left: 0,
      right: 0,
      maxWidth: '100vw'
    },
    enter: {
      x: [0],
      y: [0]
    },
    exit: {
      x: [0],
      y: [100]
    }
  }
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

/***/ "../ui_utils/dist/esm/src/utils/render_children/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ renderChildren)
});

// UNUSED EXPORTS: useParentPropsOverrideContext

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/utils/index.js
var utils = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");
;// ../ui_utils/dist/esm/src/utils/render_children/parentPropsOverrideContext.js

const parentPropsOverrideContext_ParentPropsOverrideContext = /*#__PURE__*/(0,react.createContext)({});
;// ../ui_utils/dist/esm/src/utils/render_children/renderBuilderChildren.js
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


const renderBuilderChildren = function (child) {
  var _child$props;
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const mergedProps = _objectSpread(_objectSpread({}, (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 || (_child$props = _child$props.block) === null || _child$props === void 0 || (_child$props = _child$props.component) === null || _child$props === void 0 ? void 0 : _child$props.options) || {}), props);
  return /*#__PURE__*/react.createElement(parentPropsOverrideContext_ParentPropsOverrideContext.Provider, {
    value: mergedProps
  }, child);
};
;
renderBuilderChildren.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "renderBuilderChildren"
};
;// ../ui_utils/dist/esm/src/utils/render_children/index.js
function render_children_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function render_children_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? render_children_ownKeys(Object(t), !0).forEach(function (r) {
      render_children_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : render_children_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function render_children_defineProperty(e, r, t) {
  return (r = render_children_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function render_children_toPropertyKey(t) {
  var i = render_children_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function render_children_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}




/**
 * Safely gets a renderable output of most given values.
 */
const FALLBACK_VALUE = null;
const useParentPropsOverrideContext = () => useContext(ParentPropsOverrideContext);
const renderChildren = function (child) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let rendered = child;
  if ((0,utils/* isBuilderChildren */.z)(rendered)) {
    return renderBuilderChildren(rendered, props);
  }
  const mergedProps = render_children_objectSpread(render_children_objectSpread({}, rendered ? rendered.props : {}), props);
  if (/*#__PURE__*/react.isValidElement(rendered)) {
    return /*#__PURE__*/react.cloneElement(rendered, mergedProps);
  }
  if (typeof child === 'function') {
    rendered = child(mergedProps);
  }
  if (['undefined', 'boolean'].includes(typeof rendered)) {
    return FALLBACK_VALUE;
  }
  return rendered;
};
;
renderChildren.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "renderChildren"
};

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ childrenIdMatch),
/* harmony export */   z: () => (/* binding */ isBuilderChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const isObject = child => typeof child === 'object';
const isBuilderChildren = child => {
  var _child$props;
  return isObject(child) && (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.block) && child.props.block['@type'] === '@builder.io/sdk:Element';
};
const childrenIdMatch = (child, id) => {
  if (isBuilderChildren(child)) {
    var _child$props$block;
    return (_child$props$block = child.props.block) === null || _child$props$block === void 0 || (_child$props$block = _child$props$block.component) === null || _child$props$block === void 0 || (_child$props$block = _child$props$block.name) === null || _child$props$block === void 0 ? void 0 : _child$props$block.endsWith(":".concat(id));
  }
  return isObject(child) && child.type.id === id;
};

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ChevronDownIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ChevronDownIcon')
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
    strokeMiterlimit: 16,
    strokeWidth: 1.5,
    d: "m4 6.818 4 4 4-4",
    vectorEffect: "non-scaling-stroke"
  }));
};
ChevronDownIcon.id = 'ChevronDownIcon';
ChevronDownIcon.displayName = 'ChevronDownIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronDownIcon);
;
ChevronDownIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChevronDownIcon"
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
//# sourceMappingURL=5046.d688274b.iframe.bundle.js.map