"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[4134],{

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

/***/ "../chat/src/components/Chat/ChatScrollArea/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AIConversationExample: () => (/* binding */ index_stories_AIConversationExample),
  Primary: () => (/* binding */ index_stories_Primary),
  WithPaginatedMessages: () => (/* binding */ index_stories_WithPaginatedMessages),
  WithScrollToBottom: () => (/* binding */ index_stories_WithScrollToBottom),
  WithSmallLoadingThreshold: () => (/* binding */ index_stories_WithSmallLoadingThreshold),
  WithVirtualizedList: () => (/* binding */ index_stories_WithVirtualizedList),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../chat/src/components/Chat/constants.ts
var constants = __webpack_require__("../chat/src/components/Chat/constants.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js
var throttle = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js");
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/clamp.js
var clamp = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/clamp.js");
var clamp_default = /*#__PURE__*/__webpack_require__.n(clamp);
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useLatest/index.js
var useLatest = __webpack_require__("../hooks/dist/esm/src/hooks/useLatest/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js
var useIsomorphicLayoutEffect = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");
;// ../chat/src/components/Chat/ChatScrollArea/hooks/useChatScrolling.ts
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




const getIsCloseToBottom = _ref => {
  let {
    scrollTop,
    scrollHeight,
    clientHeight
  } = _ref;
  return scrollTop + clientHeight * 2 >= scrollHeight;
};
const useChatScrolling = (ref, _ref2) => {
  let {
    hasMore,
    loadingThreshold,
    onLoadMore
  } = _ref2;
  const isLoadingMessagesRef = (0,react.useRef)(false);
  const scrollHeightRef = (0,react.useRef)(0);
  const isAtBottomRef = (0,react.useRef)(true);
  const [isCloseToBottom, setIsCloseToBottom] = (0,react.useState)(true);
  const contextRef = (0,useLatest/* default */.A)({
    onLoadMore,
    loadingThreshold,
    hasMore,
    isCloseToBottom
  });
  const prevHasMoreRef = (0,react.useRef)(hasMore);
  const scrollToBottom = () => {
    var _ref$current, _ref$current2;
    (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.scrollTo({
      top: (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.scrollHeight
    });
    isAtBottomRef.current = true;
  };
  (0,useIsomorphicLayoutEffect/* default */.A)(() => {
    const scrollableElement = ref.current;
    const mutationObserver = new MutationObserver(() => {
      if (ref.current) {
        const {
          scrollTop,
          scrollHeight: newScrollHeight,
          clientHeight
        } = ref.current;
        if (isAtBottomRef.current) {
          var _ref$current3;
          ref.current.scrollTo({
            top: (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.scrollHeight
          });
        }
        if ((contextRef.current.hasMore || prevHasMoreRef.current) && scrollTop === 0) {
          ref.current.scrollTo({
            top: newScrollHeight - scrollHeightRef.current
          });
        }
        const isCloseToBottom = getIsCloseToBottom({
          scrollTop,
          scrollHeight: newScrollHeight,
          clientHeight
        });
        if (isCloseToBottom !== contextRef.current.isCloseToBottom) {
          setIsCloseToBottom(isCloseToBottom);
        }
        scrollHeightRef.current = newScrollHeight;
        prevHasMoreRef.current = contextRef.current.hasMore;
      }
    });
    const scrollListener = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* () {
        if (!ref.current) {
          return;
        }
        const context = contextRef.current;
        const {
          scrollTop,
          scrollHeight,
          clientHeight
        } = ref.current;
        scrollHeightRef.current = scrollHeight;
        const isCloseToBottom = getIsCloseToBottom({
          scrollTop,
          scrollHeight,
          clientHeight
        });
        if (isCloseToBottom !== context.isCloseToBottom) {
          setIsCloseToBottom(isCloseToBottom);
        }
        isAtBottomRef.current = scrollHeight - clientHeight - scrollTop <= 1;
        const relativeScrollTop = clamp_default()(scrollTop / clientHeight, 0, Infinity);
        if (!isLoadingMessagesRef.current && context.onLoadMore && context.hasMore && (relativeScrollTop <= context.loadingThreshold || scrollHeight <= clientHeight)) {
          isLoadingMessagesRef.current = true;
          try {
            yield context.onLoadMore();
          } finally {
            isLoadingMessagesRef.current = false;
          }
        }
      });
      return function scrollListener() {
        return _ref3.apply(this, arguments);
      };
    }();
    const throttledScrollListener = throttle_default()(scrollListener, 1000 / 60);
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', throttledScrollListener);
      scrollableElement.scrollTo({
        top: scrollableElement.scrollHeight
      });
      mutationObserver.observe(scrollableElement, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }
    return () => {
      mutationObserver.disconnect();
      scrollableElement === null || scrollableElement === void 0 || scrollableElement.removeEventListener('scroll', throttledScrollListener);
      throttledScrollListener.cancel();
    };
  }, []);
  return {
    isCloseToBottom,
    scrollToBottom
  };
};
;// ../chat/src/components/Chat/ChatScrollArea/index.tsx





function ChatScrollAreaBase(_ref, ref) {
  let {
    onLoadMore,
    hasMore = false,
    loadingThreshold = 3,
    children,
    height = '300px',
    minHeight = '0px',
    maxHeight,
    flexGrow,
    padding,
    paddingY,
    paddingX,
    paddingBottom,
    paddingTop,
    paddingLeft,
    paddingRight
  } = _ref;
  const containerRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, () => containerRef.current);
  const {
    isCloseToBottom,
    scrollToBottom
  } = useChatScrolling(containerRef, {
    hasMore,
    loadingThreshold,
    onLoadMore
  });
  const scrollToBottomSlot = (0,findChildByType/* findChildByType */.B)(children, constants/* IDS */.B.CHAT_SCROLL_TO_BOTTOM_SLOT);
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "relative",
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    flexGrow: flexGrow
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    ref: containerRef,
    direction: "column",
    overflowY: "scroll",
    height: "100%",
    gap: "0",
    padding: padding,
    paddingY: paddingY,
    paddingX: paddingX,
    paddingBottom: paddingBottom,
    paddingTop: paddingTop,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    flexGrow: "1"
  }), children), (0,render_children/* renderChildren */.s)(scrollToBottomSlot, {
    visible: !isCloseToBottom,
    onClick: scrollToBottom
  }));
}
const ChatScrollArea = /*#__PURE__*/(0,react.forwardRef)(ChatScrollAreaBase);
ChatScrollArea.displayName = 'ChatScrollArea';
/* harmony default export */ const Chat_ChatScrollArea = (ChatScrollArea);
try {
    // @ts-ignore
    ChatScrollArea.displayName = "ChatScrollArea";
    // @ts-ignore
    ChatScrollArea.__docgenInfo = { "description": "", "displayName": "ChatScrollArea", "props": { "onLoadMore": { "defaultValue": null, "description": "Callback to load more messages when the user scrolls near the top of the container.", "name": "onLoadMore", "required": false, "type": { "name": "() => Promise<any>" } }, "hasMore": { "defaultValue": { value: "false" }, "description": "Whether there are more messages to load.", "name": "hasMore", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "loadingThreshold": { "defaultValue": { value: "3" }, "description": "The threshold for the user to be considered near the top of the scroll area. 1 unit equals 1 `offsetHeight` of the scroll area.", "name": "loadingThreshold", "required": false, "type": { "name": "number" } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../chat/src/components/Chat/ChatScrollArea/index.tsx#ChatScrollArea"] = { docgenInfo: ChatScrollArea.__docgenInfo, name: "ChatScrollArea", path: "../chat/src/components/Chat/ChatScrollArea/index.tsx#ChatScrollArea" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/random.js
var random = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/random.js");
var random_default = /*#__PURE__*/__webpack_require__.n(random);
;// ../chat/src/components/Chat/ChatScrollArea/stories/components/hooks/useNewMessages.ts



function useNewMessages(chat, setMessages) {
  (0,react.useEffect)(() => {
    const interval = setInterval(() => {
      setMessages(messages => [...messages, {
        id: esm/* faker */.az.datatype.uuid(),
        body: esm/* faker */.az.lorem.sentence(Math.floor(Math.random() * 20) + 3),
        author: chat.authors[random_default()(chat.authors.length - 1)]
      }]);
    }, 1000);
    return () => clearInterval(interval);
  }, [chat, setMessages]);
}
;// ../chat/src/components/Chat/ChatScrollArea/stories/utils.ts
function utils_asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function utils_asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        utils_asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        utils_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
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

const waitFor = timeout => new Promise(resolve => setTimeout(resolve, timeout));
const generateMockUserAuthors = numberOfAuthors => Array.from({
  length: numberOfAuthors
}, (_, i) => ({
  userId: i + 1,
  username: esm/* faker */.az.internet.userName(),
  displayName: esm/* faker */.az.name.findName(),
  profileImage: esm/* faker */.az.image.avatar()
}));
const generateMockAgentAuthor = () => ({
  userId: 666,
  username: 'agent',
  displayName: 'Agent'
});
const generateMockMessages = (numberOfMessages, authors) => Array.from({
  length: numberOfMessages
}, () => {
  const author = authors[Math.floor(Math.random() * authors.length)];
  return {
    id: esm/* faker */.az.datatype.uuid(),
    body: esm/* faker */.az.lorem.sentence(Math.floor(Math.random() * 20) + 3),
    author
  };
}).reverse();
class MockChatProvider {
  constructor(_ref) {
    let {
      numberOfAuthors,
      numberOfMessages,
      withAgent
    } = _ref;
    _defineProperty(this, "messages", void 0);
    _defineProperty(this, "authors", void 0);
    _defineProperty(this, "eventListeners", {
      'new-message': new Set(),
      'someone-typing': new Set()
    });
    if (withAgent) {
      this.authors = [...generateMockUserAuthors(1), generateMockAgentAuthor()];
    } else if (numberOfAuthors) {
      this.authors = generateMockUserAuthors(numberOfAuthors);
    }
    this.messages = generateMockMessages(numberOfMessages, this.authors);
  }
  getInitialMessages(pageSize) {
    const messagesPage = this.messages.slice(-pageSize);
    const hasMore = messagesPage[0] !== this.messages[0];
    return {
      data: messagesPage,
      cursor: hasMore ? messagesPage[0].id : null
    };
  }
  fetchMessages(_ref2) {
    var _this = this;
    let {
      pageSize,
      cursor,
      timeout = 500
    } = _ref2;
    return utils_asyncToGenerator(function* () {
      yield waitFor(timeout);
      const lastIndex = _this.messages.findIndex(message => message.id === cursor);
      const messagesPage = _this.messages.slice(lastIndex - pageSize, lastIndex);
      const hasMore = messagesPage[0] !== _this.messages[0];
      const newCursor = hasMore ? messagesPage[0].id : null;
      return {
        data: messagesPage,
        cursor: newCursor
      };
    })();
  }
  sendNewMessage(message) {
    var _this2 = this;
    return utils_asyncToGenerator(function* () {
      yield waitFor(300);
      _this2.messages.push(message);
      _this2.eventListeners['new-message'].forEach(callback => callback({
        message
      }));
    })();
  }
  notifyTypingUser(userId) {
    this.eventListeners['someone-typing'].forEach(callback => callback({
      userId
    }));
  }
  on(eventName, callback) {
    this.eventListeners[eventName].add(callback);
  }
  off(eventName, callback) {
    this.eventListeners[eventName].delete(callback);
  }
}
const groupMessages = (messages, isFollowupMessage) => messages.reduce((groups, message, i, messages) => {
  if (isFollowupMessage(message, messages[i - 1])) {
    groups[groups.length - 1].push(message);
  } else {
    groups.push([message]);
  }
  return groups;
}, []);
;// ../chat/src/components/Chat/ChatScrollArea/stories/components/hooks/useMockChat.ts


function useMockChat(_ref) {
  let {
    withAgent,
    numberOfAuthors,
    numberOfMessages
  } = _ref;
  return (0,react.useMemo)(() => new MockChatProvider({
    numberOfAuthors,
    numberOfMessages,
    withAgent
  }), [numberOfAuthors, numberOfMessages, withAgent]);
}
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
;// ../chat/src/components/Chat/ChatScrollArea/stories/components/SimpleMessage.tsx



function SimpleMessageBase(_ref, ref) {
  let {
    message,
    currentAuthor,
    position,
    top,
    left,
    width,
    height,
    transform,
    'data-index': dataIndex
  } = _ref;
  const isOwnMessage = message.author.userId === currentAuthor.userId;
  const displayName = message.author.username === 'agent' ? undefined : message.author.displayName;
  const messageLines = message.body.split('\n');
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    justifyContent: isOwnMessage ? 'flexEnd' : 'flexStart',
    position: position,
    top: top,
    left: left,
    width: width,
    height: height,
    transform: transform,
    "data-index": dataIndex,
    ref: ref
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary",
    key: message.id,
    paddingY: "0.5",
    maxWidth: "80%",
    textAlign: isOwnMessage ? 'end' : 'start'
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    as: "b",
    fontWeight: "bold",
    color: "bodyPrimary",
    whiteSpace: "nowrap",
    size: "b_sm"
  }, isOwnMessage ? 'Me' : displayName), ': ', messageLines.map((line, index) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: index
  }, line, index < messageLines.length - 1 && /*#__PURE__*/react.createElement("br", null)))));
}
/* harmony default export */ const SimpleMessage = (/*#__PURE__*/(0,react.forwardRef)(SimpleMessageBase));
;// ../chat/src/components/Chat/ChatScrollArea/stories/components/Primary.tsx





function Primary() {
  const chat = useMockChat({
    numberOfAuthors: 2,
    numberOfMessages: 1
  });
  const [messages, setMessages] = (0,react.useState)(chat.messages);
  useNewMessages(chat, setMessages);
  return /*#__PURE__*/react.createElement(Chat_ChatScrollArea, null, messages.map(message => /*#__PURE__*/react.createElement(SimpleMessage, {
    key: message.id,
    message: message,
    currentAuthor: chat.authors[0]
  })));
}
const sourceCode = "\nfunction Primary() {\n  const chat = useMockChat({ numberOfAuthors: 2, numberOfMessages: 1 });\n  const [messages, setMessages] = useState(chat.messages);\n  useNewMessages(chat, setMessages);\n\n  return (\n    <ChatScrollArea>\n      {messages.map((message) => (\n        <SimpleMessage key={message.id} message={message} currentAuthor={chat.authors[0]} />\n      ))}\n    </ChatScrollArea>\n  );\n}\n";
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ArrowDown.js
var ArrowDown = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ArrowDown.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../chat/src/components/Chat/ChatScrollToBottomSlot/index.tsx
var ChatScrollToBottomSlot = __webpack_require__("../chat/src/components/Chat/ChatScrollToBottomSlot/index.tsx");
;// ../chat/src/components/Chat/ChatScrollArea/stories/components/WithScrollToBottom.tsx







function WithScrollToBottom() {
  const chat = useMockChat({
    numberOfAuthors: 10,
    numberOfMessages: 1000
  });
  return /*#__PURE__*/react.createElement(Chat_ChatScrollArea, {
    paddingRight: "4"
  }, chat.messages.map(message => /*#__PURE__*/react.createElement(SimpleMessage, {
    key: message.id,
    message: message,
    currentAuthor: chat.authors[0]
  })), /*#__PURE__*/react.createElement(ChatScrollToBottomSlot/* default */.A, {
    bottom: "4px",
    right: "16px"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Scroll to bottom",
    size: "sm",
    background: "white",
    variant: "outline"
  }, /*#__PURE__*/react.createElement(ArrowDown/* default */.A, null))));
}
const WithScrollToBottom_sourceCode = "\nfunction WithScrollToBottom() {\n  const chat = useMockChat({ numberOfAuthors: 10, numberOfMessages: 1000 });\n  return (\n    <ChatScrollArea paddingRight=\"4\">\n      {chat.messages.map((message) => (\n        <SimpleMessage key={message.id} message={message} currentAuthor={chat.authors[0]} />\n      ))}\n      <ChatScrollToBottomSlot bottom=\"4px\" right=\"16px\">\n        <IconButton aria-label=\"Scroll to bottom\" size=\"sm\" background=\"white\" variant=\"outline\">\n          <ArrowDownIcon />\n        </IconButton>\n      </ChatScrollToBottomSlot>\n    </ChatScrollArea>\n  );\n}\n";
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tanstack+react-query@4.41.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__("../../node_modules/.pnpm/@tanstack+react-query@4.41.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tanstack+react-query@4.41.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs + 9 modules
var useInfiniteQuery = __webpack_require__("../../node_modules/.pnpm/@tanstack+react-query@4.41.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tanstack+query-core@4.41.0/node_modules/@tanstack/query-core/build/lib/queryClient.mjs + 6 modules
var queryClient = __webpack_require__("../../node_modules/.pnpm/@tanstack+query-core@4.41.0/node_modules/@tanstack/query-core/build/lib/queryClient.mjs");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
;// ../chat/src/components/Chat/ChatScrollArea/stories/components/WithPaginatedMessages.tsx
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
      WithPaginatedMessages_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function WithPaginatedMessages_defineProperty(e, r, t) {
  return (r = WithPaginatedMessages_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function WithPaginatedMessages_toPropertyKey(t) {
  var i = WithPaginatedMessages_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function WithPaginatedMessages_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}









function WithPaginatedMessages() {
  var _data$pages$flatMap;
  const chat = useMockChat({
    numberOfAuthors: 2,
    numberOfMessages: 500
  });
  const queryClient = (0,QueryClientProvider/* useQueryClient */.jE)();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = (0,useInfiniteQuery/* useInfiniteQuery */.q)({
    queryKey: ['messages'],
    queryFn: _ref => {
      let {
        pageParam
      } = _ref;
      return chat.fetchMessages({
        pageSize: 100,
        cursor: pageParam,
        timeout: 100
      });
    },
    getNextPageParam: lastPage => lastPage.cursor,
    select: data => ({
      pages: [...data.pages].reverse(),
      pageParams: [...data.pageParams].reverse()
    }),
    initialData: () => {
      const initialMessages = chat.getInitialMessages(200);
      return {
        pages: [initialMessages],
        pageParams: [initialMessages.cursor]
      };
    },
    enabled: false
  });
  (0,react.useEffect)(() => {
    const interval = setInterval(() => {
      queryClient.setQueryData(['messages'], data => {
        if (!data) {
          return;
        }
        const firstPage = data.pages[0];
        const updatedFirstPage = _objectSpread(_objectSpread({}, firstPage), {}, {
          data: [...firstPage.data, {
            id: esm/* faker */.az.datatype.uuid(),
            body: esm/* faker */.az.lorem.sentence(Math.floor(Math.random() * 20) + 3),
            author: chat.authors[random_default()(0, chat.authors.length - 1)]
          }]
        });
        return {
          pages: [updatedFirstPage, ...data.pages.slice(1)],
          pageParams: data.pageParams
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [queryClient, chat]);
  const messages = (_data$pages$flatMap = data === null || data === void 0 ? void 0 : data.pages.flatMap(page => page.data)) !== null && _data$pages$flatMap !== void 0 ? _data$pages$flatMap : [];
  return /*#__PURE__*/react.createElement(Chat_ChatScrollArea, {
    onLoadMore: fetchNextPage,
    hasMore: hasNextPage,
    paddingRight: "4"
  }, /*#__PURE__*/react.createElement(Center/* default */.A, {
    flexShrink: 0,
    height: "48px"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    as: "span",
    color: "grey_700",
    size: "b_sm",
    fontWeight: "bold",
    fontStyle: "italic"
  }, isFetchingNextPage && 'Loading messages...', !hasNextPage && messages.length > 0 && 'No more messages')), messages.map(message => /*#__PURE__*/react.createElement(SimpleMessage, {
    key: message.id,
    message: message,
    currentAuthor: chat.authors[0]
  })));
}
const WithPaginatedMessages_queryClient = new queryClient/* QueryClient */.E();
function WithPaginatedMessagesWithQueryClient() {
  return /*#__PURE__*/react.createElement(QueryClientProvider/* QueryClientProvider */.Ht, {
    client: WithPaginatedMessages_queryClient
  }, /*#__PURE__*/react.createElement(WithPaginatedMessages, null));
}
const WithPaginatedMessages_sourceCode = "\nimport {\n  QueryClient,\n  QueryClientProvider,\n  useInfiniteQuery,\n} from '@tanstack/react-query';\n\nfunction WithPaginatedMessages() {\n  const chat = useMockChat({ numberOfAuthors: 2, numberOfMessages: 500 });\n  const queryClient = useQueryClient();\n  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({\n    queryKey: ['messages'],\n    queryFn: ({ pageParam }) =>\n      chat.fetchMessages({\n        pageSize: 100,\n        cursor: pageParam as string,\n        timeout: 100,\n      }),\n    getNextPageParam: (lastPage) => lastPage.cursor,\n    select: (data) => ({\n      pages: [...data.pages].reverse(),\n      pageParams: [...data.pageParams].reverse(),\n    }),\n    initialData: () => {\n      const initialMessages = chat.getInitialMessages(200);\n      return {\n        pages: [initialMessages],\n        pageParams: [initialMessages.cursor],\n      };\n    },\n    enabled: false,\n  });\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      queryClient.setQueryData(['messages'], (data: any) => {\n        if (!data) return;\n        const firstPage = data.pages[0];\n        const updatedFirstPage = {\n          ...firstPage,\n          data: [\n            ...firstPage.data,\n            {\n              id: faker.datatype.uuid(),\n              body: faker.lorem.sentence(Math.floor(Math.random() * 20) + 3),\n              author: chat.authors[random(0, chat.authors.length - 1)],\n            },\n          ],\n        };\n        return {\n          pages: [updatedFirstPage, ...data.pages.slice(1)],\n          pageParams: data.pageParams,\n        };\n      });\n    }, 1000);\n\n    return () => clearInterval(interval);\n  }, [queryClient, chat]);\n\n  const messages = data?.pages.flatMap((page) => page.data) ?? [];\n\n  return (\n    <ChatScrollArea onLoadMore={fetchNextPage} hasMore={hasNextPage} paddingRight=\"4\">\n      <Center flexShrink={0} height=\"48px\">\n        <Typography as=\"span\" color=\"grey_700\" size=\"b_sm\" fontWeight=\"bold\" fontStyle=\"italic\">\n          {isFetchingNextPage && 'Loading messages...'}\n          {!hasNextPage && messages.length > 0 && 'No more messages'}\n        </Typography>\n      </Center>\n      {messages.map((message) => (\n        <SimpleMessage key={message.id} message={message} currentAuthor={chat.authors[0]} />\n      ))}\n    </ChatScrollArea>\n  );\n}\n";
;// ../chat/src/components/Chat/ChatScrollArea/stories/components/WithSmallLoadingThreshold.tsx







function WithSmallLoadingThreshold() {
  var _data$pages$flatMap;
  const chat = useMockChat({
    numberOfAuthors: 2,
    numberOfMessages: 90
  });
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = (0,useInfiniteQuery/* useInfiniteQuery */.q)({
    queryKey: ['messages'],
    queryFn: _ref => {
      let {
        pageParam
      } = _ref;
      return chat.fetchMessages({
        pageSize: 30,
        cursor: pageParam,
        timeout: 1000
      });
    },
    getNextPageParam: lastPage => lastPage.cursor,
    select: data => ({
      pages: [...data.pages].reverse(),
      pageParams: [...data.pageParams].reverse()
    }),
    initialData: () => {
      const initialMessages = chat.getInitialMessages(30);
      return {
        pages: [initialMessages],
        pageParams: [initialMessages.cursor]
      };
    },
    enabled: false
  });
  const messages = (_data$pages$flatMap = data === null || data === void 0 ? void 0 : data.pages.flatMap(page => page.data)) !== null && _data$pages$flatMap !== void 0 ? _data$pages$flatMap : [];
  return /*#__PURE__*/react.createElement(Chat_ChatScrollArea, {
    onLoadMore: fetchNextPage,
    hasMore: hasNextPage,
    paddingRight: "4",
    loadingThreshold: 0.1
  }, /*#__PURE__*/react.createElement(Center/* default */.A, {
    flexShrink: 0,
    height: "48px"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    as: "span",
    color: "grey_700",
    size: "b_sm",
    fontWeight: "bold",
    fontStyle: "italic"
  }, isFetchingNextPage && 'Loading messages...', !hasNextPage && messages.length > 0 && 'No more messages')), messages.map(message => /*#__PURE__*/react.createElement(SimpleMessage, {
    key: message.id,
    message: message,
    currentAuthor: chat.authors[0]
  })));
}
const WithSmallLoadingThreshold_queryClient = new queryClient/* QueryClient */.E();
function WithSmallLoadingThresholdWithQueryClient() {
  return /*#__PURE__*/react.createElement(QueryClientProvider/* QueryClientProvider */.Ht, {
    client: WithSmallLoadingThreshold_queryClient
  }, /*#__PURE__*/react.createElement(WithSmallLoadingThreshold, null));
}
const WithSmallLoadingThreshold_sourceCode = "\nimport {\n  QueryClient,\n  QueryClientProvider,\n  useInfiniteQuery,\n} from '@tanstack/react-query';\n\nfunction WithSmallLoadingThreshold() {\n  const chat = useMockChat({ numberOfAuthors: 2, numberOfMessages: 90 });\n  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({\n    queryKey: ['messages'],\n    queryFn: ({ pageParam }) =>\n      chat.fetchMessages({\n        pageSize: 30,\n        cursor: pageParam as string,\n        timeout: 1000,\n      }),\n    getNextPageParam: (lastPage) => lastPage.cursor,\n    select: (data) => ({\n      pages: [...data.pages].reverse(),\n      pageParams: [...data.pageParams].reverse(),\n    }),\n    initialData: () => {\n      const initialMessages = chat.getInitialMessages(30);\n      return {\n        pages: [initialMessages],\n        pageParams: [initialMessages.cursor],\n      };\n    },\n    enabled: false,\n  });\n\n  const messages = data?.pages.flatMap((page) => page.data) ?? [];\n\n  return (\n    <ChatScrollArea onLoadMore={fetchNextPage} hasMore={hasNextPage} paddingRight=\"4\" loadingThreshold={0.1}>\n      <Center flexShrink={0} height=\"48px\">\n        <Typography as=\"span\" color=\"grey_700\" size=\"b_sm\" fontWeight=\"bold\" fontStyle=\"italic\">\n          {isFetchingNextPage && 'Loading messages...'}\n          {!hasNextPage && messages.length > 0 && 'No more messages'}\n        </Typography>\n      </Center>\n      {messages.map((message) => (\n        <SimpleMessage key={message.id} message={message} currentAuthor={chat.authors[0]} />\n      ))}\n    </ChatScrollArea>\n  );\n}\n";
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tanstack+react-virtual@3.13.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-virtual/dist/esm/index.js + 2 modules
var dist_esm = __webpack_require__("../../node_modules/.pnpm/@tanstack+react-virtual@3.13.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-virtual/dist/esm/index.js");
;// ../chat/src/components/Chat/ChatScrollArea/stories/components/WithVirtualizedList.tsx










function WithVirtualizedList() {
  var _virtualItems$0$start, _virtualItems$;
  const chat = useMockChat({
    numberOfAuthors: 3,
    numberOfMessages: 10000
  });
  const [messages, setMessages] = (0,react.useState)(chat.messages);
  const parentRef = (0,react.useRef)(null);
  useNewMessages(chat, setMessages);
  const virtualizer = (0,dist_esm/* useVirtualizer */.Te)({
    count: messages.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 30
  });
  const virtualItems = virtualizer.getVirtualItems();
  return /*#__PURE__*/react.createElement(Chat_ChatScrollArea, {
    paddingRight: "4",
    ref: parentRef
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    flexShrink: 0,
    height: virtualizer.getTotalSize(),
    width: "100%",
    position: "relative"
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: "translateY(".concat((_virtualItems$0$start = (_virtualItems$ = virtualItems[0]) === null || _virtualItems$ === void 0 ? void 0 : _virtualItems$.start) !== null && _virtualItems$0$start !== void 0 ? _virtualItems$0$start : 0, "px)")
  }, virtualItems.map(item => /*#__PURE__*/react.createElement(SimpleMessage, {
    key: item.index,
    "data-index": item.index,
    ref: virtualizer.measureElement,
    message: messages[item.index],
    currentAuthor: chat.authors[0]
  })))), /*#__PURE__*/react.createElement(ChatScrollToBottomSlot/* default */.A, {
    bottom: "4px",
    right: "16px"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Scroll to bottom",
    size: "sm",
    background: "white",
    variant: "outline"
  }, /*#__PURE__*/react.createElement(ArrowDown/* default */.A, null))));
}
const WithVirtualizedList_sourceCode = "\nfunction WithVirtualizedList() {\n  const chat = useMockChat({ numberOfAuthors: 3, numberOfMessages: 10000 });\n  const [messages, setMessages] = useState(chat.messages);\n  const parentRef = useRef<HTMLDivElement>(null);\n\n  useNewMessages(chat, setMessages);\n\n  const virtualizer = useVirtualizer({\n    count: messages.length,\n    getScrollElement: () => parentRef.current,\n    estimateSize: () => 30,\n  });\n\n  const virtualItems = virtualizer.getVirtualItems();\n\n  return (\n    <ChatScrollArea paddingRight=\"4\" ref={parentRef}>\n      <Container flexShrink={0} height={virtualizer.getTotalSize()} width=\"100%\" position=\"relative\">\n        <Container\n          position=\"absolute\"\n          top={0}\n          left={0}\n          width=\"100%\"\n          transform={`translateY(${virtualItems[0]?.start ?? 0}px)`}\n        >\n          {virtualItems.map((item) => (\n            <SimpleMessage\n              key={item.index}\n              data-index={item.index}\n              ref={virtualizer.measureElement}\n              message={messages[item.index]}\n              currentAuthor={chat.authors[0]}\n            />\n          ))}\n        </Container>\n      </Container>\n\n      <ChatScrollToBottomSlot bottom=\"4px\" right=\"16px\">\n        <IconButton aria-label=\"Scroll to bottom\" size=\"sm\" background=\"white\" variant=\"outline\">\n          <ArrowDownIcon />\n        </IconButton>\n      </ChatScrollToBottomSlot>\n    </ChatScrollArea>\n  );\n}\n";
// EXTERNAL MODULE: ../avatar/dist/esm/src/components/Avatar/index.js + 7 modules
var Avatar = __webpack_require__("../avatar/dist/esm/src/components/Avatar/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/SparkSolid.js
var SparkSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/SparkSolid.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/EmojiSmiley.js
var EmojiSmiley = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/EmojiSmiley.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Attachment.js
var Attachment = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Attachment.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ArrowUp.js
var ArrowUp = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ArrowUp.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Link/index.js
var Link = __webpack_require__("../typography/dist/esm/src/components/Link/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js + 1 modules
var getTextInputsStyle = __webpack_require__("../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/utils.js
var utils = __webpack_require__("../inputs/dist/esm/src/components/shared/utils.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Textarea/style.js
var style = __webpack_require__("../inputs/dist/esm/src/components/Textarea/style.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Textarea/constants.js
var Textarea_constants = __webpack_require__("../inputs/dist/esm/src/components/Textarea/constants.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Textarea/styles.ve.css.js + 1 modules
var Textarea_styles_ve_css = __webpack_require__("../inputs/dist/esm/src/components/Textarea/styles.ve.css.js");
;// ../inputs/dist/esm/src/components/Textarea/inputs/dist/esm/src/components/Textarea/TextareaGroup/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../inputs/dist/esm/src/components/Textarea/TextareaGroup/styles.ve.css.js.vanilla.css","source":"Ll8xY3Y0M3E0MTpmb2N1cy13aXRoaW4gewogIGJvcmRlci1jb2xvcjogdmFyKC0tXzFjdjQzcTQwKTsKfQouXzFjdjQzcTQyIHsKICBib3JkZXI6IG5vbmU7Cn0KLl8xY3Y0M3E0Mjpmb2N1cyB7CiAgYm9yZGVyOiBub25lOwogIG91dGxpbmU6IG5vbmU7Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../inputs/dist/esm/src/components/Textarea/TextareaGroup/styles.ve.css.js

var borderFocusWithinVar = 'var(--_1cv43q40)';
var container = '_1cv43q41';
var resetStyling = '_1cv43q42';
;// ../inputs/dist/esm/src/components/Textarea/TextareaGroup/constants.js
const POSITION_MAPPER = {
  right: 'row',
  bottom: 'column'
};
;// ../inputs/dist/esm/src/components/Textarea/TextareaGroup/index.js
const _excluded = ["children", "disabled", "isSuccess", "isError", "dataTestId", "width", "resize", "onBlur", "className", "dataTrackTag", "dataTrackValue"];
function TextareaGroup_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TextareaGroup_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TextareaGroup_ownKeys(Object(t), !0).forEach(function (r) {
      TextareaGroup_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TextareaGroup_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TextareaGroup_defineProperty(e, r, t) {
  return (r = TextareaGroup_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TextareaGroup_toPropertyKey(t) {
  var i = TextareaGroup_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TextareaGroup_toPrimitive(t, r) {
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













const TextareaGroup = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  var _textareaPanel$props, _textarea$props;
  let {
      children,
      disabled,
      isSuccess,
      isError,
      dataTestId,
      width = '100%',
      resize,
      onBlur,
      className,
      dataTrackTag = 'textarea_group',
      dataTrackValue
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    focusBorderColor,
    borderColor,
    inlineVars
  } = (0,getTextInputsStyle/* getBorderStyling */.B)({
    disabled,
    isError,
    isSuccess,
    borderFocusWithinVar: borderFocusWithinVar
  });
  const {
    stylingProps,
    restProps
  } = (0,utils/* filterProps */.J)(rest);
  const textareaPanel = (0,findChildByType/* findChildByType */.B)(children, Textarea_constants/* TEXTAREA_SLOT_ID */.i);
  const textarea = (0,findChildByType/* findChildByType */.B)(children, Textarea_constants/* TEXTAREA_ID */.b);
  const direction = !(0,lodash.isNil)(textareaPanel === null || textareaPanel === void 0 ? void 0 : textareaPanel.props.position) && (0,styles_ve_css/* mapResponsiveStyles */.d0)(textareaPanel === null || textareaPanel === void 0 || (_textareaPanel$props = textareaPanel.props) === null || _textareaPanel$props === void 0 ? void 0 : _textareaPanel$props.position, value => POSITION_MAPPER[value]);
  const childClassName = classnames_default()(resetStyling, textarea === null || textarea === void 0 || (_textarea$props = textarea.props) === null || _textarea$props === void 0 ? void 0 : _textarea$props.className);
  return /*#__PURE__*/react.createElement(Container/* default */.A, TextareaGroup_objectSpread(TextareaGroup_objectSpread({
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    overflow: "hidden",
    "data-testid": dataTestId,
    alignItems: "flexEnd",
    direction: direction,
    padding: "2",
    gap: "2",
    width: width,
    onBlur: onBlur,
    style: inlineVars,
    className: classnames_default()(container, className, {
      [Textarea_styles_ve_css/* resizeClass */.vI]: resize
    })
  }, (0,style/* getTextareaStylingProps */.z)({
    borderColor,
    disabled,
    focusBorderColor,
    focusType: 'focusWithin'
  })), stylingProps), (0,render_children/* renderChildren */.s)(textarea, TextareaGroup_objectSpread({
    ref,
    disabled,
    className: childClassName,
    height: resize && !(textarea !== null && textarea !== void 0 && textarea.props.height) ? '100%' : textarea === null || textarea === void 0 ? void 0 : textarea.props.height,
    paddingX: '2',
    paddingY: '0',
    borderRadius: 'none'
  }, restProps)), textareaPanel);
});
TextareaGroup.displayName = 'TextareaGroup';
/* harmony default export */ const Textarea_TextareaGroup = (TextareaGroup);
;
TextareaGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TextareaGroup"
};
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Textarea/index.js
var Textarea = __webpack_require__("../inputs/dist/esm/src/components/Textarea/index.js");
;// ../inputs/dist/esm/src/components/Textarea/TextareaGroup/TextareaSlot/index.js
const TextareaSlot_excluded = ["children", "position", "dataTrackTag"];
function TextareaSlot_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TextareaSlot_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TextareaSlot_ownKeys(Object(t), !0).forEach(function (r) {
      TextareaSlot_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TextareaSlot_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TextareaSlot_defineProperty(e, r, t) {
  return (r = TextareaSlot_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TextareaSlot_toPropertyKey(t) {
  var i = TextareaSlot_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TextareaSlot_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function TextareaSlot_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = TextareaSlot_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function TextareaSlot_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}



const TextareaSlot = _ref => {
  let {
      children,
      position: _position,
      dataTrackTag = 'textarea_slot'
    } = _ref,
    restProps = TextareaSlot_objectWithoutProperties(_ref, TextareaSlot_excluded);
  return /*#__PURE__*/react.createElement(Container/* default */.A, TextareaSlot_objectSpread({
    dataTrackTag: dataTrackTag
  }, restProps), children);
};
TextareaSlot.id = Textarea_constants/* TEXTAREA_SLOT_ID */.i;
/* harmony default export */ const TextareaGroup_TextareaSlot = (TextareaSlot);
;
TextareaSlot.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TextareaSlot"
};
;// ../chat/src/components/Chat/ChatScrollArea/stories/components/AIConversationExample.tsx












function AiAvatar() {
  return /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "Neo",
    size: "xs",
    showBorder: false
  }, /*#__PURE__*/react.createElement(SparkSolid/* default */.A, {
    size: "sm",
    color: "purple_700"
  }));
}
function AIMessageGroup(_ref) {
  let {
    messages
  } = _ref;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "2",
    paddingY: "2"
  }, /*#__PURE__*/react.createElement(AiAvatar, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, messages.map(message => /*#__PURE__*/react.createElement(Text/* default */.A, {
    key: message.id,
    size: "b_sm",
    color: "bodyPrimary"
  }, message.body))));
}
function UserMessageGroup(_ref2) {
  let {
    messages
  } = _ref2;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1",
    paddingY: "2",
    alignItems: "flexEnd",
    paddingLeft: "12"
  }, messages.map(message => /*#__PURE__*/react.createElement(Container/* default */.A, {
    key: message.id,
    paddingY: "2",
    paddingX: "4",
    backgroundColor: "grey_300",
    borderRadius: "lg"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary",
    wordBreak: "breakAll"
  }, message.body))));
}
function ChatTextarea(_ref3) {
  let {
    onSend
  } = _ref3;
  const textareaRef = (0,react.useRef)(null);
  const handleSend = (0,react.useCallback)(() => {
    var _textareaRef$current;
    if ((_textareaRef$current = textareaRef.current) !== null && _textareaRef$current !== void 0 && _textareaRef$current.value) {
      const value = textareaRef.current.value;
      onSend(value);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.value = '';
        }
      }, 0);
    }
  }, [onSend]);
  return /*#__PURE__*/react.createElement(Textarea_TextareaGroup, {
    ref: textareaRef
  }, /*#__PURE__*/react.createElement(Textarea/* default */.A, {
    placeholder: "Ask anything"
  }), /*#__PURE__*/react.createElement(TextareaGroup_TextareaSlot, {
    position: "bottom"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "2"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    variant: "ghost",
    "aria-label": "Emoji picker",
    size: "sm",
    shape: "circle"
  }, /*#__PURE__*/react.createElement(EmojiSmiley/* default */.A, null)), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    variant: "ghost",
    "aria-label": "Attachment",
    size: "sm",
    shape: "circle"
  }, /*#__PURE__*/react.createElement(Attachment/* default */.A, null)), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    variant: "filled",
    intent: "primary",
    "aria-label": "Send",
    size: "sm",
    shape: "circle",
    onClick: handleSend
  }, /*#__PURE__*/react.createElement(ArrowUp/* default */.A, null)))));
}
function AIConversationExample() {
  const chat = useMockChat({
    withAgent: true,
    numberOfMessages: 100
  });
  const [messages, setMessages] = (0,react.useState)(chat.messages);
  const groupedMessages = (0,react.useMemo)(() => groupMessages(messages, (message, prevMessage) => message.author.username === (prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.author.username)), [messages]);
  const sendMessage = (0,react.useCallback)(message => {
    if (message) {
      setMessages(messages => [...messages, {
        id: esm/* faker */.az.datatype.uuid(),
        body: message,
        author: chat.authors[0]
      }]);
    }
  }, [setMessages, chat]);
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    height: "80vh",
    maxWidth: "400px",
    margin: "auto",
    gap: "0",
    backgroundColor: "grey_100"
  }, /*#__PURE__*/react.createElement(Chat_ChatScrollArea, {
    paddingX: "6",
    paddingTop: "4",
    paddingBottom: "2",
    flexGrow: "1"
  }, groupedMessages.map(messages => {
    const GroupComponent = messages[0].author.username === 'agent' ? AIMessageGroup : UserMessageGroup;
    return /*#__PURE__*/react.createElement(GroupComponent, {
      key: messages[0].id,
      messages: messages
    });
  }), /*#__PURE__*/react.createElement(ChatScrollToBottomSlot/* default */.A, {
    bottom: "8px",
    right: "24px"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Scroll to bottom",
    size: "sm",
    background: "white",
    variant: "outline"
  }, /*#__PURE__*/react.createElement(ArrowDown/* default */.A, null)))), /*#__PURE__*/react.createElement(Container/* default */.A, {
    marginX: "6",
    marginBottom: "6",
    marginTop: "px"
  }, /*#__PURE__*/react.createElement(ChatTextarea, {
    onSend: sendMessage
  }), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    width: "max-content",
    marginX: "auto",
    marginTop: "3"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, "Powered by AI"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, "\u2022"), /*#__PURE__*/react.createElement(Link/* default */.A, {
    href: "#",
    size: "b_xs",
    color: "grey_900"
  }, "Share feedback"))));
}
const AIConversationExample_sourceCode = "\nfunction AIConversationExample() {\n  const chat = useMockChat({ withAgent: true, numberOfMessages: 100 });\n  const [messages, setMessages] = useState(chat.messages);\n  const groupedMessages = useMemo(\n    () => groupMessages(messages, (message, prevMessage) => message.author.username === prevMessage?.author.username),\n    [messages]\n  );\n\n  const sendMessage = useCallback(\n    (message: string) => {\n      if (message) {\n        setMessages((messages) => [...messages, { id: faker.datatype.uuid(), body: message, author: chat.authors[0] }]);\n      }\n    },\n    [setMessages, chat]\n  );\n\n  return (\n    <Stack direction=\"column\" height=\"80vh\" maxWidth=\"400px\" margin=\"auto\" gap=\"0\" backgroundColor=\"grey_100\">\n      <ChatScrollArea paddingX=\"6\" paddingTop=\"4\" paddingBottom=\"2\" flexGrow=\"1\">\n        {groupedMessages.map((messages) => {\n          const GroupComponent = messages[0].author.username === 'agent' ? AIMessageGroup : UserMessageGroup;\n          return <GroupComponent key={messages[0].id} messages={messages} />;\n        })}\n        <ChatScrollToBottomSlot bottom=\"8px\" right=\"24px\">\n          <IconButton aria-label=\"Scroll to bottom\" size=\"sm\" background=\"white\" variant=\"outline\">\n            <ArrowDownIcon />\n          </IconButton>\n        </ChatScrollToBottomSlot>\n      </ChatScrollArea>\n      <Container marginX=\"6\" marginBottom=\"6\" marginTop=\"px\">\n        <ChatTextarea onSend={sendMessage} />\n        <Stack width=\"max-content\" marginX=\"auto\" marginTop=\"3\">\n          <Text size=\"b_xs\" color=\"bodySecondary\">\n            Powered by AI\n          </Text>\n          <Text size=\"b_xs\" color=\"bodySecondary\">\n            &bull;\n          </Text>\n          <Link href=\"#\" size=\"b_xs\" color=\"grey_900\">\n            Share feedback\n          </Link>\n        </Stack>\n      </Container>\n    </Stack>\n  );\n}\n";
;// ../chat/src/components/Chat/ChatScrollArea/stories/index.stories.tsx








const index_stories_Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {},
  parameters: {
    docs: {
      source: {
        code: sourceCode
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(Primary, null)
};
const index_stories_WithScrollToBottom = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {},
  parameters: {
    docs: {
      source: {
        code: WithScrollToBottom_sourceCode
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(WithScrollToBottom, null)
};
const index_stories_WithPaginatedMessages = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {},
  parameters: {
    docs: {
      source: {
        code: WithPaginatedMessages_sourceCode
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(WithPaginatedMessagesWithQueryClient, null)
};
const index_stories_WithSmallLoadingThreshold = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {},
  parameters: {
    docs: {
      source: {
        code: WithSmallLoadingThreshold_sourceCode
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(WithSmallLoadingThresholdWithQueryClient, null)
};
const index_stories_WithVirtualizedList = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {},
  parameters: {
    docs: {
      source: {
        code: WithVirtualizedList_sourceCode
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(WithVirtualizedList, null)
};
const index_stories_AIConversationExample = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {},
  parameters: {
    docs: {
      source: {
        code: AIConversationExample_sourceCode
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(AIConversationExample, null)
};
const meta = {
  title: 'Chat/ChatScrollArea',
  component: Chat_ChatScrollArea
};
/* harmony default export */ const index_stories = (meta);
index_stories_Primary.parameters = {
  ...index_stories_Primary.parameters,
  docs: {
    ...index_stories_Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {},\n  parameters: {\n    docs: {\n      source: {\n        code: primarySourceCode\n      }\n    }\n  },\n  render: () => <PrimaryStory />\n}",
      ...index_stories_Primary.parameters?.docs?.source
    }
  }
};
index_stories_WithScrollToBottom.parameters = {
  ...index_stories_WithScrollToBottom.parameters,
  docs: {
    ...index_stories_WithScrollToBottom.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {},\n  parameters: {\n    docs: {\n      source: {\n        code: withScrollToBottomSourceCode\n      }\n    }\n  },\n  render: () => <WithScrollToBottomStory />\n}",
      ...index_stories_WithScrollToBottom.parameters?.docs?.source
    }
  }
};
index_stories_WithPaginatedMessages.parameters = {
  ...index_stories_WithPaginatedMessages.parameters,
  docs: {
    ...index_stories_WithPaginatedMessages.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {},\n  parameters: {\n    docs: {\n      source: {\n        code: withPaginatedMessagesSourceCode\n      }\n    }\n  },\n  render: () => <WithPaginatedMessagesStory />\n}",
      ...index_stories_WithPaginatedMessages.parameters?.docs?.source
    }
  }
};
index_stories_WithSmallLoadingThreshold.parameters = {
  ...index_stories_WithSmallLoadingThreshold.parameters,
  docs: {
    ...index_stories_WithSmallLoadingThreshold.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {},\n  parameters: {\n    docs: {\n      source: {\n        code: withSmallLoadingThresholdSourceCode\n      }\n    }\n  },\n  render: () => <WithSmallLoadingThresholdStory />\n}",
      ...index_stories_WithSmallLoadingThreshold.parameters?.docs?.source
    }
  }
};
index_stories_WithVirtualizedList.parameters = {
  ...index_stories_WithVirtualizedList.parameters,
  docs: {
    ...index_stories_WithVirtualizedList.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {},\n  parameters: {\n    docs: {\n      source: {\n        code: withVirtualizedListSourceCode\n      }\n    }\n  },\n  render: () => <WithVirtualizedListStory />\n}",
      ...index_stories_WithVirtualizedList.parameters?.docs?.source
    }
  }
};
index_stories_AIConversationExample.parameters = {
  ...index_stories_AIConversationExample.parameters,
  docs: {
    ...index_stories_AIConversationExample.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {},\n  parameters: {\n    docs: {\n      source: {\n        code: aiConversationExampleSourceCode\n      }\n    }\n  },\n  render: () => <AIConversationExampleStory />\n}",
      ...index_stories_AIConversationExample.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","WithScrollToBottom","WithPaginatedMessages","WithSmallLoadingThreshold","WithVirtualizedList","AIConversationExample"];

/***/ }),

/***/ "../chat/src/components/Chat/ChatScrollToBottomSlot/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../transition/dist/esm/src/components/Fade/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../chat/src/components/Chat/constants.ts");





function ChatScrollToBottomSlot(_ref) {
  let {
    children,
    visible = false,
    onClick,
    top,
    right,
    bottom,
    left
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_transition__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    unmountOnExit: true,
    in: visible
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    position: "absolute",
    bottom: bottom,
    right: right,
    top: top,
    left: left
  }, (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .renderChildren */ .s)(children, {
    onClick
  })));
}
ChatScrollToBottomSlot.id = _constants__WEBPACK_IMPORTED_MODULE_4__/* .IDS */ .B.CHAT_SCROLL_TO_BOTTOM_SLOT;
ChatScrollToBottomSlot.displayName = 'ChatScrollToBottomSlot';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatScrollToBottomSlot);
try {
    // @ts-ignore
    ChatScrollToBottomSlot.displayName = "ChatScrollToBottomSlot";
    // @ts-ignore
    ChatScrollToBottomSlot.__docgenInfo = { "description": "", "displayName": "ChatScrollToBottomSlot", "props": { "visible": { "defaultValue": { value: "false" }, "description": "Whether the slot content is visible. Controlled by `ChatScrollArea` component if placed inside it.", "name": "visible", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onClick": { "defaultValue": null, "description": "Callback to be called when the slot content is clicked. Controlled by `ChatScrollArea` component if placed inside it.", "name": "onClick", "required": false, "type": { "name": "(event: React.MouseEvent<HTMLDivElement>) => void" } }, "top": { "defaultValue": null, "description": "Distance to slot content from the top edge of the `ChatScrollArea` component.", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "Distance to slot content from the right edge of the `ChatScrollArea` component.", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "Distance to slot content from the bottom edge of the `ChatScrollArea` component.", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "Distance to slot content from the left edge of the `ChatScrollArea` component.", "name": "left", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../chat/src/components/Chat/ChatScrollToBottomSlot/index.tsx#ChatScrollToBottomSlot"] = { docgenInfo: ChatScrollToBottomSlot.__docgenInfo, name: "ChatScrollToBottomSlot", path: "../chat/src/components/Chat/ChatScrollToBottomSlot/index.tsx#ChatScrollToBottomSlot" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../chat/src/components/Chat/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ IDS)
/* harmony export */ });
const IDS = {
  CHAT_SCROLL_TO_BOTTOM_SLOT: 'ChatScrollToBottomSlot'
};

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

/***/ "../inputs/dist/esm/src/components/Textarea/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ TEXTAREA_ID),
/* harmony export */   i: () => (/* binding */ TEXTAREA_SLOT_ID)
/* harmony export */ });
const TEXTAREA_ID = 'Textarea';
const TEXTAREA_SLOT_ID = 'TextareaSlot';

/***/ }),

/***/ "../inputs/dist/esm/src/components/Textarea/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../theme/dist/esm/src/atoms/utilityClasses.ve.css.js");
/* harmony import */ var _shared_getTextInputsStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js");
/* harmony import */ var _styles_ve_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../inputs/dist/esm/src/components/Textarea/styles.ve.css.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../inputs/dist/esm/src/components/Textarea/style.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../inputs/dist/esm/src/components/Textarea/constants.js");
const _excluded = ["children", "disabled", "isSuccess", "isError", "maxLength", "value", "defaultValue", "onChange", "resize", "className", "width", "dataTrackTag", "dataTrackValue"];
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








const Textarea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      disabled,
      isSuccess = false,
      isError = false,
      maxLength,
      value,
      defaultValue,
      onChange = Function.prototype,
      resize = false,
      className,
      width = '100%',
      dataTrackTag = 'textarea',
      dataTrackValue = '<value>'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const [innerValue, setInnerValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue || children);
  const currentValue = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(value) ? innerValue : value;
  const props = _objectSpread({
    disabled,
    maxLength,
    value: currentValue
  }, rest);
  const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_ve_css__WEBPACK_IMPORTED_MODULE_6__/* .textarea */ .PC, _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_4__/* .placeholder */ .q, className, {
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_6__/* .resizeClass */ .vI]: resize
  });
  const handleChange = e => {
    setInnerValue(e.target.value);
    onChange(e);
  };
  const borderColor = (0,_shared_getTextInputsStyle__WEBPACK_IMPORTED_MODULE_5__/* .getBorderColor */ .A)({
    disabled,
    isSuccess,
    isError
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, _objectSpread(_objectSpread(_objectSpread({
    as: "textarea",
    boxSizing: "borderBox",
    paddingY: "2",
    paddingX: "4"
  }, (0,_style__WEBPACK_IMPORTED_MODULE_7__/* .getTextareaStylingProps */ .z)({
    borderColor,
    disabled,
    focusBorderColor: borderColor.focus,
    focusType: 'focus'
  })), props), {}, {
    width: width,
    role: "textbox",
    className: classNames,
    ref: ref,
    onChange: handleChange,
    pointerEvents: disabled ? 'none' : undefined,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }));
});
Textarea.displayName = _constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXTAREA_ID */ .b;
Object.assign(Textarea, {
  id: _constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXTAREA_ID */ .b
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);
;
Textarea.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Textarea"
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/Textarea/style.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ getTextareaStylingProps)
/* harmony export */ });
/* harmony import */ var _shared_formsTokenColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../inputs/dist/esm/src/components/shared/formsTokenColors.js");

const getTextareaStylingProps = _ref => {
  let {
    borderColor,
    disabled,
    focusBorderColor,
    focusType
  } = _ref;
  return {
    display: 'flex',
    cursor: 'auto',
    borderWidth: 'sm',
    borderStyle: 'solid',
    borderRadius: 'lg',
    borderColor,
    backgroundColor: disabled ? 'grey_200' : 'background',
    outlineColor: {
      [focusType]: focusBorderColor
    },
    outlineWidth: {
      [focusType]: 'sm'
    },
    outlineStyle: {
      [focusType]: 'solid'
    },
    pointerEvents: disabled ? 'none' : undefined,
    color: disabled ? _shared_formsTokenColors__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.disabledColor : _shared_formsTokenColors__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.color
  };
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/Textarea/styles.ve.css.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  vI: () => (/* binding */ resizeClass),
  PC: () => (/* binding */ styles_ve_css_textarea)
});

// UNUSED EXPORTS: container

;// ../inputs/dist/esm/src/components/inputs/dist/esm/src/components/Textarea/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../inputs/dist/esm/src/components/Textarea/styles.ve.css.js.vanilla.css","source":"Ll8xeGlqYW12MSB7CiAgcmVzaXplOiBub25lOwogIHRyYW5zaXRpb246IG5vbmU7CiAgc2Nyb2xsYmFyLWNvbG9yOiAjOTU5NzlEIHRyYW5zcGFyZW50OwogIGZvbnQ6IGluaGVyaXQ7Cn0KLl8xeGlqYW12MTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgewogIG1hcmdpbjogMXB4IDA7Cn0KLl8xeGlqYW12MiB7CiAgcmVzaXplOiB2ZXJ0aWNhbDsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../inputs/dist/esm/src/components/Textarea/styles.ve.css.js

var container = '_1xijamv0';
var resizeClass = '_1xijamv2';
var styles_ve_css_textarea = '_1xijamv1';

/***/ }),

/***/ "../inputs/dist/esm/src/components/shared/formsTokenColors.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ formsTokenColors)
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
const tokens = {
  color: 'grey_1200',
  disabledColor: 'grey_800',
  disabledFieldBackgroundColor: 'grey_200',
  disabledToggleBackgroundColor: 'grey_400',
  borderColor: 'grey_500',
  interactiveColor: 'grey_1200'
};
const formsTokenColors = _objectSpread({}, tokens);

/***/ }),

/***/ "../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ getBorderColor),
  B: () => (/* binding */ getBorderStyling)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js + 1 modules
var vanilla_extract_dynamic_esm = __webpack_require__("../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/semanticTokens.js
var semanticTokens = __webpack_require__("../theme/dist/esm/src/shared/themeVars/semanticTokens.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/formsTokenColors.js
var formsTokenColors = __webpack_require__("../inputs/dist/esm/src/components/shared/formsTokenColors.js");
;// ../inputs/dist/esm/src/components/Input/InputGroup/style.js


const generateBorderFocusWithin = _ref => {
  let {
    isError,
    isSuccess
  } = _ref;
  const {
    validationError,
    validationSuccess
  } = semanticTokens/* semanticBorderColors */.zK;
  if (isError) {
    return validationError;
  } else if (isSuccess) {
    return validationSuccess;
  } else {
    return formsTokenColors/* formsTokenColors */.V.interactiveColor;
  }
};
;// ../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js



const getBorderColor = _ref => {
  let {
    disabled,
    isSuccess,
    isError
  } = _ref;
  if (disabled) {
    return {
      default: formsTokenColors/* formsTokenColors */.V.borderColor,
      hover: formsTokenColors/* formsTokenColors */.V.borderColor,
      focus: formsTokenColors/* formsTokenColors */.V.borderColor
    };
  } else if (isSuccess) {
    return {
      default: 'validationSuccess',
      hover: 'validationSuccess',
      focus: 'validationSuccess'
    };
  } else if (isError) {
    return {
      default: 'validationError',
      hover: 'validationError',
      focus: 'validationError'
    };
  } else {
    return {
      default: formsTokenColors/* formsTokenColors */.V.borderColor,
      hover: formsTokenColors/* formsTokenColors */.V.interactiveColor,
      focus: formsTokenColors/* formsTokenColors */.V.interactiveColor
    };
  }
};
const getBorderStyling = _ref2 => {
  let {
    disabled,
    isError,
    isSuccess,
    borderFocusWithinVar
  } = _ref2;
  const borderColor = getBorderColor({
    disabled,
    isSuccess,
    isError
  });
  const focusBorderColor = generateBorderFocusWithin({
    isError,
    isSuccess
  });
  return {
    focusBorderColor,
    borderColor,
    inlineVars: (0,vanilla_extract_dynamic_esm/* assignInlineVars */.D)({
      [borderFocusWithinVar]: theme_ve_css/* tokens */.L.colors[focusBorderColor]
    })
  };
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/shared/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ filterProps)
/* harmony export */ });
const _excluded = ["position", "margin", "marginX", "marginY", "marginBottom", "marginLeft", "marginRight", "marginTop", "width", "height", "maxWidth", "maxHeight", "top", "right", "bottom", "left", "order", "overflow", "overflowX", "overflowY", "minHeight", "minWidth", "visibility", "hidden", "flex", "flexGrow", "flexShrink", "flexBasis", "alignSelf", "justifySelf"];
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
const filterProps = props => {
  const {
      position,
      margin,
      marginX,
      marginY,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      width,
      height,
      maxWidth,
      maxHeight,
      top,
      right,
      bottom,
      left,
      order,
      overflow,
      overflowX,
      overflowY,
      minHeight,
      minWidth,
      visibility,
      hidden,
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      alignSelf,
      justifySelf
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return {
    restProps,
    stylingProps: {
      position,
      margin,
      marginX,
      marginY,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      width,
      height,
      maxWidth,
      maxHeight,
      top,
      right,
      bottom,
      left,
      order,
      overflow,
      overflowX,
      overflowY,
      minHeight,
      minWidth,
      visibility,
      hidden,
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      alignSelf,
      justifySelf
    }
  };
};

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Center/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Flex/index.js");
const _excluded = ["children", "direction"];
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


const Center = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      direction = {
        default: 'column'
      }
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    alignItems: {
      default: 'center'
    },
    justifyContent: {
      default: 'center'
    },
    direction: direction
  }, restProps), children);
});
Center.displayName = 'Center';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Center);
;
Center.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Center"
};

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

/***/ "../transition/dist/esm/src/components/Fade/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Fade)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js + 20 modules
var es = __webpack_require__("../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsClient/index.js
var useIsClient = __webpack_require__("../hooks/dist/esm/src/hooks/useIsClient/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/hooks/useTransitionEvents.js
var useTransitionEvents = __webpack_require__("../transition/dist/esm/src/hooks/useTransitionEvents.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/utils/index.js
var utils = __webpack_require__("../transition/dist/esm/src/utils/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/constants.js
var constants = __webpack_require__("../transition/dist/esm/src/constants.js");
;// ../transition/dist/esm/src/components/Fade/variants.js


const getTiming = function (variant) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fast2';
  let easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  let delay = arguments.length > 3 ? arguments[3] : undefined;
  return {
    duration: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(duration, variant)],
    ease: constants/* EASING */.Ux[(0,utils/* getValueOrField */.F)(easing, variant)],
    delay: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(delay, variant)]
  };
};
const variants = {
  enter: function () {
    let {
      delay,
      duration,
      easing,
      endingOpacity = 1
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      opacity: [endingOpacity],
      timing: getTiming('enter', duration, easing, delay)
    };
  },
  exit: function () {
    let {
      delay,
      duration,
      easing
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      opacity: [0],
      timing: getTiming('exit', duration, easing, delay)
    };
  }
};
/* harmony default export */ const Fade_variants = (variants);
;// ../transition/dist/esm/src/components/Fade/index.js
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






const Fade = _ref => {
  let {
    delay,
    duration = 'fast2',
    easing = 'linear',
    unmountOnExit,
    in: isOpen = true,
    endingOpacity,
    onAnimationStart,
    onAnimationEnd,
    children
  } = _ref;
  const custom = {
    delay,
    duration,
    easing,
    endingOpacity
  };
  const transitionConfig = isOpen ? Fade_variants.enter(custom) : Fade_variants.exit(custom);
  const {
    getEventsHandler
  } = (0,useTransitionEvents/* default */.A)({
    onAnimationStart,
    onAnimationEnd,
    isOpen,
    unmountOnExit
  });
  const isClient = (0,useIsClient/* default */.A)();
  return /*#__PURE__*/react.createElement(es/* Animate */.i, {
    show: unmountOnExit ? isOpen : true,
    start: Fade_variants.exit(custom),
    enter: _objectSpread(_objectSpread({}, transitionConfig), getEventsHandler('enter')),
    update: _objectSpread(_objectSpread({}, transitionConfig), getEventsHandler('update')),
    leave: _objectSpread(_objectSpread({}, Fade_variants.exit(custom)), getEventsHandler('leave'))
  }, animationState => (0,render_children/* renderChildren */.s)(children, {
    style: _objectSpread(_objectSpread({}, children.props.style || {}), {}, {
      display: animationState.opacity === 0 || !isClient ? 'none' : undefined,
      visibility: animationState.opacity === 0 || !isClient ? 'hidden' : 'visible'
    }, animationState)
  }));
};
Fade.displayName = 'Fade';
/* harmony default export */ const components_Fade = (Fade);
;
Fade.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Fade"
};

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

/***/ "../typography/dist/esm/src/components/Link/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
const _excluded = ["color", "decoration", "outlineColor", "outlineOffset", "outlineWidth", "outlineStyle", "fontWeight", "children", "href", "target", "disabled", "tabIndex", "pointerEvents", "dataTrackTag"];
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


const Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      color = {
        default: 'linkPrimary'
      },
      decoration = {
        default: 'underline'
      },
      outlineColor = {
        focusVisible: 'grey_1200'
      },
      outlineOffset = {
        focusVisible: 'sm'
      },
      outlineWidth = {
        focusVisible: 'md'
      },
      outlineStyle = {
        focusVisible: 'solid'
      },
      fontWeight,
      children,
      href,
      target = '_self',
      disabled,
      tabIndex,
      pointerEvents,
      dataTrackTag = 'link'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread(_objectSpread({}, restProps), {}, {
    as: "a",
    decoration: disabled ? 'none' : decoration,
    color: disabled ? 'grey_800' : color,
    pointerEvents: disabled ? 'none' : pointerEvents,
    tabIndex: disabled ? -1 : tabIndex,
    outlineOffset: outlineOffset,
    outlineWidth: outlineWidth,
    outlineColor: outlineColor,
    target: target,
    href: href,
    ref: ref,
    fontWeight: fontWeight,
    outlineStyle: outlineStyle,
    dataTrackTag: dataTrackTag
  }), children);
});
Link.displayName = 'Link';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);
;
Link.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Link"
};

/***/ }),

/***/ "../typography/dist/esm/src/components/Text/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
const _excluded = ["as", "color", "fontWeight", "size", "fontFamily", "children", "textOverflow", "dataTrackTag"];
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


const Text = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      as = 'p',
      color = 'bodyPrimary',
      fontWeight = 'normal',
      size = {
        default: 'b_md'
      },
      fontFamily,
      children,
      textOverflow,
      dataTrackTag = 'text'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    as: as,
    size: size,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    textOverflow: textOverflow,
    color: color,
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
Text.displayName = 'Text';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
;
Text.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Text"
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

/***/ "../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ excludeChildrenByType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");



const excludeChildrenByType = (children, id) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(child => {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isArray)(id)) {
    return !id.some(singleId => (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .childrenIdMatch */ .i)(child, singleId));
  }
  return !(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .childrenIdMatch */ .i)(child, id);
});

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ArrowDown.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ArrowDownIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ArrowDownIcon')
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
    d: "M8 15.568v-13.5m0 13.5 4.219-4.218M8 15.568 3.781 11.35",
    vectorEffect: "non-scaling-stroke"
  }));
};
ArrowDownIcon.id = 'ArrowDownIcon';
ArrowDownIcon.displayName = 'ArrowDownIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowDownIcon);
;
ArrowDownIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ArrowDownIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ArrowUp.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ArrowUpIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ArrowUpIcon')
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
    d: "M8 2.068v13.5m0-13.5 4.219 4.219M8 2.068l-4.219 4.22",
    vectorEffect: "non-scaling-stroke"
  }));
};
ArrowUpIcon.id = 'ArrowUpIcon';
ArrowUpIcon.displayName = 'ArrowUpIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowUpIcon);
;
ArrowUpIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ArrowUpIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Attachment.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const AttachmentIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('AttachmentIcon')
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
    d: "M5.3 6V4.65a2.7 2.7 0 0 1 5.4 0v8.1a2.7 2.7 0 0 1-5.4 0V9.711a1.688 1.688 0 0 1 3.375 0v1.687",
    vectorEffect: "non-scaling-stroke"
  }));
};
AttachmentIcon.id = 'AttachmentIcon';
AttachmentIcon.displayName = 'AttachmentIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachmentIcon);
;
AttachmentIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AttachmentIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/EmojiSmiley.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const EmojiSmileyIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('EmojiSmileyIcon')
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
    d: "M5.3 10.525a3.37 3.37 0 0 0 2.7 1.35 3.37 3.37 0 0 0 2.7-1.35m-5.394-4.05H5.3m5.4 0h-.006M14.75 8.5a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
EmojiSmileyIcon.id = 'EmojiSmileyIcon';
EmojiSmileyIcon.displayName = 'EmojiSmileyIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiSmileyIcon);
;
EmojiSmileyIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EmojiSmileyIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/SparkSolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const SparkSolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('SparkSolidIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#spark_solid_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.523 1.023a.523.523 0 1 0-1.046 0 6.45 6.45 0 0 1-6.454 6.454.523.523 0 1 0 0 1.046 6.45 6.45 0 0 1 6.454 6.454.523.523 0 1 0 1.046 0 6.45 6.45 0 0 1 6.454-6.454.523.523 0 1 0 0-1.046 6.45 6.45 0 0 1-6.454-6.454"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "spark_solid_svg__a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};
SparkSolidIcon.id = 'SparkSolidIcon';
SparkSolidIcon.displayName = 'SparkSolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SparkSolidIcon);
;
SparkSolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SparkSolidIcon"
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
//# sourceMappingURL=4134.378d1270.iframe.bundle.js.map