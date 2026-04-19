"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[985],{

/***/ "../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../carousel/dist/esm/src/components/Arrows/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Arrows)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/constants.js
var constants = __webpack_require__("../button/dist/esm/src/components/IconButton/constants.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Carousel/constants.js
var Carousel_constants = __webpack_require__("../carousel/dist/esm/src/components/Carousel/constants.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ChevronLeft.js
var ChevronLeft = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ChevronLeft.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ChevronRight.js
var ChevronRight = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ChevronRight.js");
;// ../carousel/dist/esm/src/components/Arrows/Arrow/constants.js
const getIconSize = buttonSize => {
  if (buttonSize === 'lg') {
    return 'md';
  }
  return 'sm';
};
;// ../carousel/dist/esm/src/components/Arrows/Arrow/index.js
const _excluded = ["arrowDirection", "size", "onArrowClick", "hideWhenDisabled"];
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






const Arrow = _ref => {
  let {
      arrowDirection,
      size,
      onArrowClick,
      hideWhenDisabled
    } = _ref,
    restContainerProps = _objectWithoutProperties(_ref, _excluded);
  const {
    scrollLeft,
    scrollRight,
    canScrollLeft,
    canScrollRight,
    canScrollOnInfinite,
    swipeMode
  } = (0,Carousel_constants/* useCarouselContext */.RG)();
  const isLeft = arrowDirection === 'left';
  const canScroll = canScrollOnInfinite || isLeft && canScrollLeft || !isLeft && canScrollRight;
  const ChevronIcon = isLeft ? ChevronLeft/* default */.A : ChevronRight/* default */.A;
  const isArrowDisabled = swipeMode || !canScroll;
  const handleClick = e => {
    if (isLeft) {
      scrollLeft === null || scrollLeft === void 0 || scrollLeft();
      onArrowClick === null || onArrowClick === void 0 || onArrowClick('left', e);
    } else {
      scrollRight === null || scrollRight === void 0 || scrollRight();
      onArrowClick === null || onArrowClick === void 0 || onArrowClick('right', e);
    }
  };
  return /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({
    width: "fit-content",
    height: "fit-content",
    borderRadius: "circle",
    onClick: handleClick,
    hidden: hideWhenDisabled && isArrowDisabled,
    pointerEvents: isArrowDisabled ? 'none' : undefined,
    backgroundColor: "white",
    boxShadow: {
      default: 'z1',
      hover: 'z2'
    },
    zIndex: "2",
    opacity: isArrowDisabled ? '0.5' : undefined
  }, restContainerProps), {}, {
    dataTrackTag: "carousel_".concat(arrowDirection, "_arrow")
  }), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    size: size,
    shape: "circle",
    colorScheme: "white",
    "aria-label": arrowDirection
  }, /*#__PURE__*/react.createElement(ChevronIcon, {
    color: "grey_900",
    size: getIconSize(size)
  })));
};
Arrow.displayName = 'Arrow';
/* harmony default export */ const Arrows_Arrow = (Arrow);
;
Arrow.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Arrow"
};
;// ../carousel/dist/esm/src/components/Arrows/index.js
function Arrows_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Arrows_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Arrows_ownKeys(Object(t), !0).forEach(function (r) {
      Arrows_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Arrows_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Arrows_defineProperty(e, r, t) {
  return (r = Arrows_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Arrows_toPropertyKey(t) {
  var i = Arrows_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Arrows_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}






const calculatePosition = (size, position, hovered) => {
  if (position === 'default-hover' && size && hovered) {
    return constants/* ICON_BUTTON_SIZES */.eg[size].width;
  }
  return 0;
};
const getDefaultPositionStyles = (isLeft, position, size, hovered) => ({
  position: 'absolute',
  margin: 'auto',
  top: 0,
  bottom: 0,
  left: isLeft ? calculatePosition(size, position, hovered) : 'initial',
  right: !isLeft ? calculatePosition(size, position, hovered) : 'initial',
  transform: isLeft ? 'translateX(-50%)' : 'translateX(50%)',
  transition: position === 'default-hover' ? "".concat(isLeft ? 'left' : 'right', " ").concat(theme_ve_css/* tokens */.L.animationDuration.moderate1) : undefined,
  visibility: position === 'default-hover' && !hovered ? 'hidden' : 'visible',
  marginRight: isLeft ? '0.5' : '0',
  marginLeft: !isLeft ? '0.5' : '0'
});
const getTopRightPositionStyles = isLeft => ({
  marginY: '1',
  marginRight: !isLeft ? '1' : 0,
  marginLeft: isLeft ? '1' : 0
});
const Arrows = _ref => {
  let {
    onArrowClick,
    size = 'md',
    position = 'default'
  } = _ref;
  const {
    hovered
  } = (0,Carousel_constants/* useCarouselContext */.RG)();
  const isDefaultArrows = position === 'default' || position === 'default-hover';
  const getStyles = isDefaultArrows ? getDefaultPositionStyles : getTopRightPositionStyles;
  const arrowSize = isDefaultArrows ? size : 'xs';
  const ArrowsContainer = !isDefaultArrows ? _ref2 => {
    let {
      children
    } = _ref2;
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      gap: "3",
      justifyContent: "flexEnd"
    }, children);
  } : react.Fragment;
  return /*#__PURE__*/react.createElement(ArrowsContainer, null, /*#__PURE__*/react.createElement(Arrows_Arrow, Arrows_objectSpread({
    arrowDirection: "left",
    onArrowClick: onArrowClick,
    size: arrowSize,
    hideWhenDisabled: isDefaultArrows
  }, getStyles(true, position, arrowSize, hovered))), /*#__PURE__*/react.createElement(Arrows_Arrow, Arrows_objectSpread({
    arrowDirection: "right",
    onArrowClick: onArrowClick,
    size: arrowSize,
    hideWhenDisabled: isDefaultArrows
  }, getStyles(false, position, arrowSize, hovered))));
};
/* harmony default export */ const components_Arrows = (Arrows);
;
Arrows.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Arrows"
};

/***/ }),

/***/ "../carousel/dist/esm/src/components/Carousel/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jy: () => (/* binding */ DEFAULT_BREAKPOINTS),
/* harmony export */   RG: () => (/* binding */ useCarouselContext),
/* harmony export */   dZ: () => (/* binding */ CarouselContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const DEFAULT_BREAKPOINTS = {
  default: 1
};
const CarouselContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  breakpoints: DEFAULT_BREAKPOINTS
});
const CarouselContextProvider = CarouselContext.Provider;
const useCarouselContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CarouselContext);

/***/ }),

/***/ "../carousel/dist/esm/src/components/Carousel/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Carousel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useHover/index.js
var useHover = __webpack_require__("../hooks/dist/esm/src/hooks/useHover/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../carousel/dist/esm/src/utils/index.js
/**
 * Find the first slide that overflows the left side of the slides container.
 */const findFirstOverflowedSlideFromLeft = (slidesListPosition, slides) => {
  for (let i = slides.length - 1; i >= 0; i--) {
    const slideRect = slides[i].getBoundingClientRect();
    if (slidesListPosition.left > slideRect.left) {
      return slideRect;
    }
  }
};
/**
 * Find the first slide that overflows the right side of the slides container.
 */
const findFirstOverflowedSlideFromRight = (slidesListPosition, slides) => {
  const result = Array.from(slides).find(slide => slidesListPosition.right < slide.getBoundingClientRect().right);
  return result === null || result === void 0 ? void 0 : result.getBoundingClientRect();
};
/**
 * Find the second slide inside the slides container.
 */
const findSecondVisibleSlideFromTheLeft = (slidesListPosition, slides) => {
  const result = Array.from(slides).find(slide => slide.getBoundingClientRect().left > slidesListPosition.left);
  return result === null || result === void 0 ? void 0 : result.getBoundingClientRect();
};
/**
 * Find the first visible slide from left
 */
const findFirstVisibleSlideFromLeft = (slidesListPosition, slides) => {
  const secondVisibleSlideFromLeft = Array.from(slides).find(slide => slide.getBoundingClientRect().left > slidesListPosition.left);
  return secondVisibleSlideFromLeft === null || secondVisibleSlideFromLeft === void 0 ? void 0 : secondVisibleSlideFromLeft.previousElementSibling;
};
/**
 * Find the first visible slide from right
 */
const findFirstVisibleSlideFromRight = (slidesListPosition, slides) => {
  const firstOverflowedSlideFromRight = Array.from(slides).find(slide => slide.getBoundingClientRect().left > slidesListPosition.right);
  if (!firstOverflowedSlideFromRight) {
    return slides[slides.length - 1];
  }
  return firstOverflowedSlideFromRight === null || firstOverflowedSlideFromRight === void 0 ? void 0 : firstOverflowedSlideFromRight.previousElementSibling;
};
/**
 * Sets canScroll state according to carousel track position.
 */
const setCanScrollByPosition = (isTrackOnPosition, setCanScroll) => {
  if (isTrackOnPosition) {
    setCanScroll(false);
  } else {
    setCanScroll(true);
  }
};
;// ../carousel/dist/esm/src/hooks/useScrollCounter/index.js

const isSupporting = _ref => {
  let {
    withSlidesIndicator,
    swipeMode,
    slidesToShow,
    scrollType,
    showSwipeIndicator
  } = _ref;
  const basicSupport = withSlidesIndicator && (!swipeMode || showSwipeIndicator);
  const supportSingle = slidesToShow === 1 && scrollType === 'single';
  return basicSupport && supportSingle;
};
const useScrollCounter = _ref2 => {
  let {
    slidesToShow,
    scrollType,
    withSlidesIndicator,
    swipeMode,
    showSwipeIndicator
  } = _ref2;
  const [currentPosition, setCurrentPosition] = (0,react.useState)(0);
  const supportSlidesIndicator = isSupporting({
    withSlidesIndicator,
    swipeMode,
    slidesToShow,
    scrollType,
    showSwipeIndicator
  });
  const changeCounterPosition = (0,react.useCallback)(newPosition => setCurrentPosition(Math.max(newPosition, 0)), []);
  const resetCounterPosition = (0,react.useCallback)(() => setCurrentPosition(0), []);
  return {
    currentPosition,
    supportSlidesIndicator,
    changeCounterPosition,
    resetCounterPosition
  };
};
/* harmony default export */ const hooks_useScrollCounter = (useScrollCounter);
;// ../carousel/dist/esm/src/hooks/useScroll/index.js






const useScroll = _ref => {
  let {
    scrollType,
    isInfinite,
    slides,
    breakpoints,
    withSlidesIndicator = false,
    swipeModeDevice,
    showSwipeIndicator = false
  } = _ref;
  const slidesTrackRef = (0,react.useRef)(null);
  const carouselTransformValue = (0,react.useRef)(0);
  const slidesListRef = (0,react.useRef)(null);
  const scrolledSlidesStack = (0,react.useRef)([]);
  const [numOfMountedSlides, setNumOfMountedSlides] = (0,react.useState)(0);
  const [canScrollRight, setCanScrollRight] = (0,react.useState)(slides.length > breakpoints.default);
  const [canScrollLeft, setCanScrollLeft] = (0,react.useState)(false);
  const [isAnimating, setIsAnimating] = (0,react.useState)(false);
  const [leftSlideFullyVisible, setLeftSlideFullyVisible] = (0,react.useState)(true);
  const [rightSlideFullyVisible, setRightSlideFullyVisible] = (0,react.useState)(true);
  const isSwipeMode = () => {
    const {
      isMobile = false,
      isTouch = false
    } = (0,getContext/* default */.A)();
    switch (swipeModeDevice) {
      case 'tablet':
        {
          return isTouch;
        }
      case 'mobile':
        {
          return isMobile;
        }
      case 'none':
      default:
        {
          return false;
        }
    }
  };
  const swipeMode = isSwipeMode();
  const {
    currentPosition,
    supportSlidesIndicator,
    resetCounterPosition,
    changeCounterPosition
  } = hooks_useScrollCounter({
    scrollType,
    slidesToShow: breakpoints.default,
    withSlidesIndicator,
    swipeMode,
    showSwipeIndicator
  });
  const scrollToPosition = position => {
    var _slidesTrackRef$curre, _slidesListRef$curren, _slidesTrackRef$curre2;
    const slides = ((_slidesTrackRef$curre = slidesTrackRef.current) === null || _slidesTrackRef$curre === void 0 ? void 0 : _slidesTrackRef$curre.children) || [];
    if (!slides[position] || !shouldScroll()) {
      return;
    }
    const slideRect = slides[position].getBoundingClientRect();
    const slidesListPosition = (_slidesListRef$curren = slidesListRef.current) === null || _slidesListRef$curren === void 0 ? void 0 : _slidesListRef$curren.getBoundingClientRect();
    const slidesTrackPosition = (_slidesTrackRef$curre2 = slidesTrackRef.current) === null || _slidesTrackRef$curre2 === void 0 ? void 0 : _slidesTrackRef$curre2.getBoundingClientRect();
    if (!slidesListPosition || !slidesTrackPosition) {
      return;
    }
    const scrolledAmount = scrollToFirstVisibleSlide({
      slideRect,
      slidesListPosition,
      slidesTrackPosition
    });
    if (scrolledAmount) {
      beforeScroll();
      checkTrackPosition();
      if (!swipeMode) {
        setTransformValue();
      } else {
        var _slidesTrackRef$curre3, _slidesTrackRef$curre4;
        (_slidesTrackRef$curre3 = slidesTrackRef.current) === null || _slidesTrackRef$curre3 === void 0 || (_slidesTrackRef$curre4 = _slidesTrackRef$curre3.scrollTo) === null || _slidesTrackRef$curre4 === void 0 || _slidesTrackRef$curre4.call(_slidesTrackRef$curre3, {
          left: slidesTrackRef.current.scrollLeft + scrolledAmount,
          behavior: 'smooth'
        });
      }
      changeCounterPosition(position);
    }
  };
  /**
   * Called when clicking on the right arrow.
   * First checks if the prev move was left - if so takes the value from the stack.
   * If not calculates how much to move by calling dragSlideByType.
   */
  const scrollRight = () => {
    if (!shouldScroll()) {
      return;
    }
    beforeScroll();
    const {
      left
    } = (0,lodash.last)(scrolledSlidesStack.current) || {};
    const rightEdgeBack = isInfinite && !canScrollRight;
    if (rightEdgeBack) {
      changeCounterPosition(0);
    } else {
      changeCounterPosition(currentPosition + 1);
    }
    if (left) {
      carouselTransformValue.current = carouselTransformValue.current + left;
      scrolledSlidesStack.current.pop();
    } else {
      var _slidesListRef$curren2, _slidesTrackRef$curre5, _slidesTrackRef$curre6;
      const slidesListPosition = (_slidesListRef$curren2 = slidesListRef.current) === null || _slidesListRef$curren2 === void 0 ? void 0 : _slidesListRef$curren2.getBoundingClientRect();
      const slidesTrackPosition = (_slidesTrackRef$curre5 = slidesTrackRef.current) === null || _slidesTrackRef$curre5 === void 0 ? void 0 : _slidesTrackRef$curre5.getBoundingClientRect();
      const slides = ((_slidesTrackRef$curre6 = slidesTrackRef.current) === null || _slidesTrackRef$curre6 === void 0 ? void 0 : _slidesTrackRef$curre6.children) || [];
      if (slidesListPosition && slidesTrackPosition) {
        if (rightEdgeBack) {
          const firstSlide = slides[0].getBoundingClientRect();
          scrollToLastVisibleSlide({
            slideRect: firstSlide,
            slidesListPosition,
            slidesTrackPosition,
            direction: 'right'
          });
        } else {
          dragSlideByType[scrollType]({
            slidesListPosition,
            slidesTrackPosition,
            slides,
            direction: 'right'
          });
        }
      }
    }
    checkTrackPosition();
    setTransformValue();
  };
  /**
   * Called when clicking on the left arrow.
   * First checks if the prev move was right - if so takes the value from the stack.
   * If not calculates how much to move by calling dragSlideByType.
   */
  const scrollLeft = () => {
    if (!shouldScroll()) {
      return;
    }
    beforeScroll();
    const {
      right
    } = (0,lodash.last)(scrolledSlidesStack.current) || {};
    const leftEdgeBack = isInfinite && !canScrollLeft;
    if (leftEdgeBack) {
      changeCounterPosition(slides.length - 1);
    } else {
      changeCounterPosition(currentPosition - 1);
    }
    if (right) {
      carouselTransformValue.current = carouselTransformValue.current + right;
      scrolledSlidesStack.current.pop();
    } else {
      var _slidesListRef$curren3, _slidesTrackRef$curre7, _slidesTrackRef$curre8;
      const slidesListPosition = (_slidesListRef$curren3 = slidesListRef.current) === null || _slidesListRef$curren3 === void 0 ? void 0 : _slidesListRef$curren3.getBoundingClientRect();
      const slidesTrackPosition = (_slidesTrackRef$curre7 = slidesTrackRef.current) === null || _slidesTrackRef$curre7 === void 0 ? void 0 : _slidesTrackRef$curre7.getBoundingClientRect();
      const slides = ((_slidesTrackRef$curre8 = slidesTrackRef.current) === null || _slidesTrackRef$curre8 === void 0 ? void 0 : _slidesTrackRef$curre8.children) || [];
      if (slidesListPosition && slidesTrackPosition) {
        if (leftEdgeBack) {
          const lastSlide = slides[slides.length - 1].getBoundingClientRect();
          scrollToLastVisibleSlide({
            slideRect: lastSlide,
            slidesListPosition,
            slidesTrackPosition,
            direction: 'left'
          });
        } else {
          dragSlideByType[scrollType]({
            slidesListPosition,
            slidesTrackPosition,
            slides,
            direction: 'left'
          });
        }
      }
    }
    checkTrackPosition();
    setTransformValue();
  };
  /**
   * Scroll type mapper
   * handleSingleScroll is called when the scrollType is single.
   * handleRowScroll is called when the scrollType is row.
   */
  const dragSlideByType = {
    single: _ref2 => {
      let {
        slidesListPosition,
        slidesTrackPosition,
        slides,
        direction
      } = _ref2;
      handleSingleScroll({
        slidesListPosition,
        slidesTrackPosition,
        slides
      })[direction]();
    },
    row: _ref3 => {
      let {
        slidesListPosition,
        slidesTrackPosition,
        slides,
        direction
      } = _ref3;
      handleRowScroll({
        slidesListPosition,
        slidesTrackPosition,
        slides
      })[direction]();
    }
  };
  /**
   * Set new carouselTransformValue and update the scrolledSlidesStack.
   */
  const moveSlide = _ref4 => {
    let {
      amountToMove,
      direction
    } = _ref4;
    carouselTransformValue.current = carouselTransformValue.current - amountToMove;
    if (direction) {
      scrolledSlidesStack.current.push({
        [direction]: amountToMove
      });
    }
  };
  /**
   * Change the carousel transform value by dragging a slide to the most left point of the carousel container.
   */
  const scrollToFirstVisibleSlide = _ref5 => {
    let {
      slideRect,
      slidesListPosition,
      slidesTrackPosition,
      direction
    } = _ref5;
    if (!slidesTrackRef.current) {
      return;
    }
    let amountToMove = slideRect.left - slidesListPosition.left;
    const isLastScroll = slidesTrackRef.current.scrollWidth + carouselTransformValue.current - amountToMove - slidesTrackPosition.width < 1;
    if (isLastScroll) {
      amountToMove = carouselTransformValue.current + (slidesTrackRef.current.scrollWidth - slidesTrackPosition.width);
    }
    moveSlide({
      amountToMove,
      direction
    });
    return amountToMove;
  };
  /**
   * Change the carousel transform value by dragging a slide to the most right point of the carousel container.
   */
  const scrollToLastVisibleSlide = _ref6 => {
    let {
      slideRect,
      slidesListPosition,
      slidesTrackPosition,
      direction
    } = _ref6;
    let amountToMove = slideRect.right - slidesListPosition.right;
    const isLastScroll = slidesTrackPosition.left - amountToMove >= 0;
    if (isLastScroll) {
      amountToMove = carouselTransformValue.current;
    }
    moveSlide({
      amountToMove,
      direction
    });
  };
  /**
   * Move one slide.
   */
  const handleSingleScroll = _ref7 => {
    let {
      slidesListPosition,
      slidesTrackPosition,
      slides
    } = _ref7;
    return {
      left: () => {
        const overflowedFromLeft = findFirstOverflowedSlideFromLeft(slidesListPosition, slides);
        if (overflowedFromLeft) {
          scrollToFirstVisibleSlide({
            slideRect: overflowedFromLeft,
            slidesListPosition,
            slidesTrackPosition,
            direction: 'left'
          });
        }
      },
      right: () => {
        const secondVisibleSlide = findSecondVisibleSlideFromTheLeft(slidesListPosition, slides);
        if (secondVisibleSlide) {
          scrollToFirstVisibleSlide({
            slideRect: secondVisibleSlide,
            slidesListPosition,
            slidesTrackPosition,
            direction: 'right'
          });
        }
      }
    };
  };
  /**
   * Move full row - the amount of visible slides.
   */
  const handleRowScroll = _ref8 => {
    let {
      slidesListPosition,
      slidesTrackPosition,
      slides
    } = _ref8;
    return {
      left: () => {
        const overflowedFromLeft = findFirstOverflowedSlideFromLeft(slidesListPosition, slides);
        if (overflowedFromLeft) {
          scrollToLastVisibleSlide({
            slideRect: overflowedFromLeft,
            slidesListPosition,
            slidesTrackPosition,
            direction: 'left'
          });
        }
      },
      right: () => {
        const overflowedFromRight = findFirstOverflowedSlideFromRight(slidesListPosition, slides);
        if (overflowedFromRight) {
          scrollToFirstVisibleSlide({
            slideRect: overflowedFromRight,
            slidesListPosition,
            slidesTrackPosition,
            direction: 'right'
          });
        }
      }
    };
  };
  /**
   * Check if able to scroll
   * If isAnimating is true abort scroll.
   */
  const shouldScroll = () => !isAnimating;
  /**
   * Called before scrolling
   * Set isAnimating to true and add transition attribute.
   */
  const beforeScroll = () => {
    setIsAnimating(true);
    addTransition();
  };
  /**
   * Adding the transition before scrolling.
   */
  const addTransition = () => {
    if (!slidesTrackRef.current) {
      return;
    }
    slidesTrackRef.current.style.transition = "transform ".concat(themeVars/* numericAnimationDurations */.zK.slow3, "ms ease");
  };
  /**
   * Remove the transition after scrolling.
   */
  const onTransitionEnd = _ref9 => {
    let {
      target
    } = _ref9;
    if (target === slidesTrackRef.current && slidesTrackRef.current) {
      slidesTrackRef.current.style.removeProperty('transition');
      setIsAnimating(false);
      checkEdgesFullyVisible();
    }
  };
  /**
   * Setting transform value to the carousel so it will move.
   */
  const setTransformValue = () => {
    if (!slidesTrackRef.current) {
      return;
    }
    slidesTrackRef.current.style.transform = "translate3d(".concat(carouselTransformValue.current, "px, 0, 0)");
  };
  /**
   * Check the track position to know if there are more slides on either left or right point.
   */
  const checkTrackPosition = () => {
    if (!slidesTrackRef.current) {
      return;
    }
    const trackRightPosition = slidesTrackRef.current.offsetWidth - slidesTrackRef.current.scrollWidth;
    const isTrackOnRightPosition = Math.floor(carouselTransformValue.current) <= trackRightPosition;
    const isTrackOnLeftPosition = carouselTransformValue.current === 0;
    setCanScrollByPosition(isTrackOnLeftPosition, setCanScrollLeft);
    setCanScrollByPosition(isTrackOnRightPosition, setCanScrollRight);
  };
  /**
   * Check if the most left and right visible slides are fully visible
   */
  const checkEdgesFullyVisible = () => {
    var _slidesListRef$curren4, _slidesTrackRef$curre9;
    const slidesListPosition = ((_slidesListRef$curren4 = slidesListRef.current) === null || _slidesListRef$curren4 === void 0 ? void 0 : _slidesListRef$curren4.getBoundingClientRect()) || {};
    const slides = ((_slidesTrackRef$curre9 = slidesTrackRef.current) === null || _slidesTrackRef$curre9 === void 0 ? void 0 : _slidesTrackRef$curre9.children) || [];
    const leftVisibleSlide = findFirstVisibleSlideFromLeft(slidesListPosition, slides);
    const rightVisibleSlide = findFirstVisibleSlideFromRight(slidesListPosition, slides);
    if (leftVisibleSlide) {
      setLeftSlideFullyVisible(Math.floor(leftVisibleSlide.getBoundingClientRect().left) >= Math.floor(slidesListPosition.left));
    }
    if (rightVisibleSlide) {
      setRightSlideFullyVisible(Math.floor(rightVisibleSlide.getBoundingClientRect().right) <= Math.floor(slidesListPosition.right));
    }
  };
  /**
   * Reset carousel props to default.
   */
  const resetCarousel = () => {
    var _slidesTrackRef$curre10, _slidesTrackRef$curre11;
    scrolledSlidesStack.current = [];
    carouselTransformValue.current = 0;
    setTransformValue();
    (_slidesTrackRef$curre10 = slidesTrackRef.current) === null || _slidesTrackRef$curre10 === void 0 || (_slidesTrackRef$curre11 = _slidesTrackRef$curre10.scrollTo) === null || _slidesTrackRef$curre11 === void 0 || _slidesTrackRef$curre11.call(_slidesTrackRef$curre10, {
      left: 0
    });
    setCanScrollRight(slides.length > breakpoints.default);
    setCanScrollLeft(false);
    checkTrackPosition();
    resetCounterPosition();
    checkEdgesFullyVisible();
  };
  /**
   * Update the Counter Position when user scroll the carousel by swipe instead of by clicking on the arrows
   * (it's important to keep the Counter Position up to date in order to update the dots' indicator)
   * */
  const updateCounterPositionOnScrollBySwipe = _ref10 => {
    let {
      target: listContainer
    } = _ref10;
    const newPosition = searchItemInContainer(listContainer, currentPosition);
    if (newPosition !== currentPosition) {
      changeCounterPosition(newPosition);
    }
  };
  const searchItemInContainer = (listContainer, index) => {
    const boundary = listContainer.getBoundingClientRect();
    const {
      left,
      right
    } = listContainer.children[index].getBoundingClientRect();
    const swipeToLeft = left > boundary.right;
    const swipeToRight = right < boundary.left;
    if (swipeToLeft) {
      const nextIndex = index - 1;
      if (nextIndex >= 0) {
        return searchItemInContainer(listContainer, nextIndex);
      }
    }
    if (swipeToRight) {
      const nextIndex = index + 1;
      if (nextIndex < listContainer.childElementCount) {
        return searchItemInContainer(listContainer, nextIndex);
      }
    }
    return index;
  };
  const canScrollOnInfinite = !!(isInfinite && (canScrollLeft || canScrollRight));
  return {
    scrollRight,
    scrollLeft,
    canScrollOnInfinite,
    scrollToPosition,
    onTransitionEnd,
    resetCarousel,
    scrollToFirstVisibleSlide,
    scrollToLastVisibleSlide,
    setTransformValue,
    checkTrackPosition,
    updateCounterPositionOnScrollBySwipe,
    carouselTransformValue,
    scrolledSlidesStack,
    slidesTrackRef,
    canScrollLeft,
    slidesListRef,
    canScrollRight,
    currentPosition,
    supportSlidesIndicator,
    breakpoints,
    swipeMode,
    slides,
    leftSlideFullyVisible,
    rightSlideFullyVisible,
    numOfMountedSlides,
    setNumOfMountedSlides
  };
};
/* harmony default export */ const hooks_useScroll = (useScroll);
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Carousel/constants.js
var constants = __webpack_require__("../carousel/dist/esm/src/components/Carousel/constants.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/getComponentProps/index.js
var getComponentProps = __webpack_require__("../ui_utils/dist/esm/src/utils/getComponentProps/index.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Track/constants.js
var Track_constants = __webpack_require__("../carousel/dist/esm/src/components/Track/constants.js");
;// ../carousel/dist/esm/src/components/SlidesIndicator/constants.js
const SLIDES_INDICATOR_ID = 'SlidesIndicator';
const INDICATOR_DOTS_NUMBER = 4;
;// ../carousel/dist/esm/src/components/Carousel/utils.js



const getChildren = children => {
  const Track = (0,findChildByType/* findChildByType */.B)(children, Track_constants/* TRACK_ID */.Y7);
  const Slides = (0,getComponentProps/* default */.A)(Track).children || [];
  const SlidesIndicator = (0,findChildByType/* findChildByType */.B)(children, SLIDES_INDICATOR_ID);
  return {
    Track,
    Slides,
    SlidesIndicator
  };
};
;// ../carousel/dist/esm/src/components/Carousel/index.js
const _excluded = ["breakpoints", "scrollType", "swipeModeDevice", "isInfinite", "scrollToSlideIndex", "showSwipeIndicator", "onScroll", "children", "dataTrackTag"];
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







const Carousel = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      breakpoints = constants/* DEFAULT_BREAKPOINTS */.Jy,
      scrollType = 'single',
      swipeModeDevice = 'tablet',
      isInfinite,
      scrollToSlideIndex,
      showSwipeIndicator,
      onScroll,
      children,
      dataTrackTag = 'carousel'
    } = _ref,
    restContainerProps = _objectWithoutProperties(_ref, _excluded);
  const {
    Slides,
    SlidesIndicator
  } = (0,react.useMemo)(() => getChildren(children), [children]);
  const {
    hovered,
    onMouseEnter,
    onMouseLeave
  } = (0,useHover/* default */.A)();
  const carouselContext = hooks_useScroll({
    scrollType,
    isInfinite,
    slides: Slides,
    breakpoints,
    withSlidesIndicator: !!SlidesIndicator,
    swipeModeDevice,
    showSwipeIndicator
  });
  const {
    resetCarousel,
    canScrollLeft,
    canScrollRight,
    canScrollOnInfinite,
    currentPosition,
    checkTrackPosition,
    scrollToPosition,
    numOfMountedSlides
  } = carouselContext;
  const {
    width: windowWidth,
    height: windowHeight
  } = (0,useElementSize/* default */.A)(typeof window !== 'undefined' ? window : null);
  const carouselDidMount = Slides.length === numOfMountedSlides;
  (0,react.useEffect)(() => {
    if (carouselDidMount) {
      resetCarousel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth, windowHeight, carouselDidMount]);
  (0,react.useEffect)(() => {
    if (carouselDidMount) {
      onScroll === null || onScroll === void 0 || onScroll({
        canScrollLeft,
        canScrollRight,
        canScrollOnInfinite,
        currentPosition
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselDidMount, canScrollLeft, canScrollRight, canScrollOnInfinite, currentPosition]);
  (0,react.useEffect)(() => {
    checkTrackPosition();
  }, [Slides, checkTrackPosition]);
  (0,react.useEffect)(() => {
    if (carouselDidMount && (0,lodash.isNumber)(scrollToSlideIndex)) {
      scrollToPosition(scrollToSlideIndex);
    }
  }, [carouselDidMount, scrollToSlideIndex, scrollToPosition]);
  return /*#__PURE__*/react.createElement(constants/* CarouselContextProvider */.dZ, {
    value: _objectSpread(_objectSpread({}, carouselContext), {}, {
      hovered
    })
  }, /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({
    position: "relative",
    width: "100%"
  }, restContainerProps), {}, {
    ref: ref,
    dataTrackTag: dataTrackTag
  }), /*#__PURE__*/react.createElement(Container/* default */.A, {
    overflowX: "hidden",
    ref: carouselContext.slidesListRef,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, children)));
});
Carousel.displayName = 'Carousel';
/* harmony default export */ const components_Carousel = (Carousel);
;
Carousel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Carousel"
};

/***/ }),

/***/ "../carousel/dist/esm/src/components/Slide/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Slide)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Carousel/constants.js
var constants = __webpack_require__("../carousel/dist/esm/src/components/Carousel/constants.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Track/constants.js
var Track_constants = __webpack_require__("../carousel/dist/esm/src/components/Track/constants.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../carousel/dist/esm/src/components/styles.ve.css.js");
;// ../carousel/dist/esm/src/components/Slide/constants.js
const SLIDE_ID = 'Slide';
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utils.js
var utils = __webpack_require__("../theme/dist/esm/src/atoms/utils.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../carousel/dist/esm/src/components/Slide/utils.js


const getBreakpointCalc = (breakpointValue, slidesGap) =>
// 100% / the amount of visible slides - the total gap between the visible slides
"calc(100% / ".concat(breakpointValue, " - (").concat(slidesGap, " * (").concat(breakpointValue, " - 1) / ").concat(breakpointValue, "))");
const getSpacingValues = (source, target) => Object.keys(source).reduce((acc, key) => {
  acc[key] = target[source[key]];
  return acc;
}, {});
const getMinWidth = (breakpoints, slidesGap) => {
  const defaultSlidesGap = typeof slidesGap === 'object' ? slidesGap : {
    default: slidesGap
  };
  const filledSlidesGapObject = (0,utils/* fillObjectValues */.ZQ)(breakpoints, 4, defaultSlidesGap);
  const spacingValues = getSpacingValues(filledSlidesGapObject, themeVars/* numericSpacing */.DL);
  return Object.keys(breakpoints).reduce((acc, key) => {
    if (!(0,lodash.isNil)(breakpoints[key])) {
      acc[key] = getBreakpointCalc(breakpoints[key], "".concat(spacingValues[key], "px"));
    }
    return acc;
  }, {});
};
;// ../carousel/dist/esm/src/components/Slide/index.js








const Slide = _ref => {
  let {
    className,
    children,
    dataTrackTag = 'slide',
    dataTrackValue
  } = _ref;
  const {
    breakpoints,
    setNumOfMountedSlides
  } = (0,constants/* useCarouselContext */.RG)();
  const {
    slidesGap,
    autoSlidesWidth,
    showSwipeHalfCard
  } = (0,Track_constants/* useTrackContext */.kA)();
  (0,react.useEffect)(() => {
    setNumOfMountedSlides === null || setNumOfMountedSlides === void 0 || setNumOfMountedSlides(prevState => ++prevState);
  }, [setNumOfMountedSlides]);
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    minWidth: autoSlidesWidth ? 'fit-content' : getMinWidth(breakpoints, slidesGap),
    style: {
      scrollSnapAlign: 'start'
    },
    className: classnames_default()({
      [styles_ve_css/* showHalfCardStyles */.$r]: showSwipeHalfCard
    }, className)
  }, children);
};
Slide.id = SLIDE_ID;
Slide.displayName = SLIDE_ID;
/* harmony default export */ const components_Slide = (Slide);
;
Slide.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Slide"
};

/***/ }),

/***/ "../carousel/dist/esm/src/components/Track/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y7: () => (/* binding */ TRACK_ID),
/* harmony export */   _5: () => (/* binding */ TrackContextProvider),
/* harmony export */   kA: () => (/* binding */ useTrackContext),
/* harmony export */   nI: () => (/* binding */ fadeColors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const TRACK_ID = 'Track';
const TrackContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const TrackContextProvider = TrackContext.Provider;
const useTrackContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TrackContext);
const fadeColors = {
  light: 'hsla(0, 0%, 100%, 0), #fff',
  dark: 'rgba(12, 12, 13, 0) 0%, #0C0C0D 100%'
};

/***/ }),

/***/ "../carousel/dist/esm/src/components/Track/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _Carousel_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../carousel/dist/esm/src/components/Carousel/constants.js");
/* harmony import */ var _styles_ve_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../carousel/dist/esm/src/components/styles.ve.css.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../carousel/dist/esm/src/components/Track/constants.js");








const Track = _ref => {
  let {
    slidesGap = '4',
    borderRadius = 'none',
    autoSlidesWidth = false,
    showCardsFade = false,
    cardsFadeColor = 'light',
    children
  } = _ref;
  const {
    slidesTrackRef,
    onTransitionEnd,
    swipeMode,
    supportSlidesIndicator,
    updateCounterPositionOnScrollBySwipe = lodash__WEBPACK_IMPORTED_MODULE_2__.noop,
    leftSlideFullyVisible,
    rightSlideFullyVisible
  } = (0,_Carousel_constants__WEBPACK_IMPORTED_MODULE_6__/* .useCarouselContext */ .RG)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      current
    } = slidesTrackRef;
    if (!current) {
      return;
    }
    current.addEventListener('scrollend', onTransitionEnd);
    return () => current.removeEventListener('scrollend', onTransitionEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesTrackRef]);
  const onSwipe = event => {
    if (swipeMode && supportSlidesIndicator) {
      updateCounterPositionOnScrollBySwipe(event);
    }
  };
  const supportsCardsFade = showCardsFade && !swipeMode;
  const showSwipeHalfCard = swipeMode && !supportSlidesIndicator;
  const fadeColor = _constants__WEBPACK_IMPORTED_MODULE_8__/* .fadeColors */ .nI[cardsFadeColor];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_constants__WEBPACK_IMPORTED_MODULE_8__/* .TrackContextProvider */ ._5, {
    value: {
      slidesGap,
      autoSlidesWidth,
      showSwipeHalfCard
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    position: "relative",
    overflow: "hidden",
    borderRadius: borderRadius,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [_styles_ve_css__WEBPACK_IMPORTED_MODULE_7__/* .cardsFadeStyles */ .Ok]: supportsCardsFade,
      [_styles_ve_css__WEBPACK_IMPORTED_MODULE_7__/* .rightFadeStyles */ .vF]: supportsCardsFade && !rightSlideFullyVisible,
      [_styles_ve_css__WEBPACK_IMPORTED_MODULE_7__/* .leftFadeStyles */ .CY]: supportsCardsFade && !leftSlideFullyVisible
    }),
    style: (0,_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_3__/* .assignInlineVars */ .D)({
      [_styles_ve_css__WEBPACK_IMPORTED_MODULE_7__/* .fadeBackgroundColor */ .MM]: fadeColor
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    ref: slidesTrackRef,
    columnGap: slidesGap,
    paddingX: showSwipeHalfCard ? '6' : '0',
    overflowX: swipeMode ? 'auto' : undefined,
    onTransitionEnd: onTransitionEnd,
    onScroll: onSwipe,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [_styles_ve_css__WEBPACK_IMPORTED_MODULE_7__/* .swipeModeStyles */ .cr]: swipeMode
    })
  }, react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(item => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(item)))));
};
Track.id = _constants__WEBPACK_IMPORTED_MODULE_8__/* .TRACK_ID */ .Y7;
Track.displayName = _constants__WEBPACK_IMPORTED_MODULE_8__/* .TRACK_ID */ .Y7;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Track);
;
Track.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Track"
};

/***/ }),

/***/ "../carousel/dist/esm/src/components/styles.ve.css.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ok: () => (/* binding */ cardsFadeStyles),
  MM: () => (/* binding */ fadeBackgroundColor),
  CY: () => (/* binding */ leftFadeStyles),
  vF: () => (/* binding */ rightFadeStyles),
  $r: () => (/* binding */ showHalfCardStyles),
  cr: () => (/* binding */ swipeModeStyles)
});

;// ../carousel/dist/esm/src/carousel/dist/esm/src/components/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../carousel/dist/esm/src/components/styles.ve.css.js.vanilla.css","source":"Ll8xdXZtcjBzMCB7CiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7CiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOwp9Ci5fMXV2bXIwczA6Oi13ZWJraXQtc2Nyb2xsYmFyIHsKICB3aWR0aDogMDsKICBoZWlnaHQ6IDA7CiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Cn0KLl8xdXZtcjBzMTo6YWZ0ZXIsIC5fMXV2bXIwczE6OmJlZm9yZSB7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogMDsKICB3aWR0aDogMzBweDsKICBoZWlnaHQ6IDEwMCU7CiAgei1pbmRleDogMTsKfQouXzF1dm1yMHMzOjphZnRlciB7CiAgY29udGVudDogIiI7CiAgcmlnaHQ6IDA7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1fMXV2bXIwczIpKTsKfQouXzF1dm1yMHM0OjpiZWZvcmUgewogIGNvbnRlbnQ6ICIiOwogIGxlZnQ6IDA7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgdmFyKC0tXzF1dm1yMHMyKSk7Cn0KLl8xdXZtcjBzNTpmaXJzdC1jaGlsZCB7CiAgbWFyZ2luLWxlZnQ6IC0yNHB4Owp9Ci5fMXV2bXIwczU6bGFzdC1jaGlsZCB7CiAgbWFyZ2luLXJpZ2h0OiAtMjRweDsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../carousel/dist/esm/src/components/styles.ve.css.js

var cardsFadeStyles = '_1uvmr0s1';
var fadeBackgroundColor = 'var(--_1uvmr0s2)';
var leftFadeStyles = '_1uvmr0s4';
var rightFadeStyles = '_1uvmr0s3';
var showHalfCardStyles = '_1uvmr0s5';
var swipeModeStyles = '_1uvmr0s0';

/***/ }),

/***/ "../data_display/dist/esm/src/components/Status/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Status)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../data_display/dist/esm/src/components/Status/constants.js
const TYPES = {
  NEUTRAL: 'neutral',
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  SPECIAL: 'special',
  WARNING: 'warning'
};
const COLORS_BY_TYPE = {
  neutral: {
    color: 'grey_1200',
    backgroundColor: 'grey_400'
  },
  info: {
    color: 'blue_1100',
    backgroundColor: 'blue_200'
  },
  warning: {
    color: 'yellow_1200',
    backgroundColor: 'yellow_200'
  },
  success: {
    color: 'green_1100',
    backgroundColor: 'green_200'
  },
  error: {
    color: 'red_1100',
    backgroundColor: 'red_200'
  },
  special: {
    color: 'purple_1100',
    backgroundColor: 'purple_200'
  }
};
;// ../data_display/dist/esm/src/components/Status/index.js
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



const Status = _ref => {
  let {
    type = 'neutral',
    children,
    dataTrackTag = 'status',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread({
    borderRadius: "sm",
    minHeight: "20px",
    display: "flex",
    alignItems: "center",
    paddingX: "2",
    width: "fit-content",
    letterSpacing: "0.5px",
    fontSize: "b_xxs",
    lineHeight: "b_xs",
    fontWeight: "bold",
    userSelect: "none",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, COLORS_BY_TYPE[type]), children);
};
Status.displayName = 'Status';
/* harmony default export */ const components_Status = (Status);
;
Status.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Status"
};

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useHover/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const useHover = () => {
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);
  return {
    onMouseEnter,
    onMouseLeave,
    hovered
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHover);

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

/***/ "../overlay/dist/esm/src/components/Overlay/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Overlay)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js
var useLockBodyScroll = __webpack_require__("../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/utils/hex2rgb/index.js
var hex2rgb = __webpack_require__("../theme/dist/esm/src/utils/hex2rgb/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../overlay/dist/esm/src/components/Overlay/constants.js

const OPACITY_VALUES = {
  high: '0.8',
  low: '0.55'
};
const COLORS = {
  white: themeVars/* colors */.Tj.white,
  grey: themeVars/* colors */.Tj.grey_1200
};
;// ../overlay/dist/esm/src/components/Overlay/index.js
const _excluded = ["children", "opacity", "lockBodyScroll", "background", "position", "zIndex", "className", "onClick", "dataTestId", "style", "dataTrackTag"];
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





const Overlay = _ref => {
  let {
      children,
      opacity = 'low',
      lockBodyScroll = true,
      background = 'grey',
      position = 'fixed',
      zIndex = 'overlay',
      className,
      onClick,
      dataTestId,
      style,
      dataTrackTag = 'overlay'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  (0,useLockBodyScroll/* default */.A)(lockBodyScroll);
  const backgroundColor = "rgba(".concat((0,hex2rgb/* hex2rgb */.x)(COLORS[background]), ", ").concat(OPACITY_VALUES[opacity], ")");
  return /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({
    width: "100%",
    height: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    className: className,
    style: style,
    zIndex: zIndex,
    background: backgroundColor,
    position: position,
    onClick: onClick,
    "data-testid": dataTestId
  }, rest), {}, {
    dataTrackTag: dataTrackTag
  }), children);
};
Overlay.displayName = 'Overlay';
/* harmony default export */ const components_Overlay = (Overlay);
;
Overlay.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Overlay"
};

/***/ }),

/***/ "../overlay/dist/esm/src/hooks/useExitOnEscape/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ useExitOnEscape)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

/**
 * This hook will invoke `close` when pressing escape when enabled and drawer is open
 *
 * @param {boolean} enabled Flag that indicates if should exit on escape
 * @param {() => void} close Close callback to invoke
 * @param {boolean} isOpen Flag that indicates if the drawer is open
 */
const useExitOnEscape = _ref => {
  let {
    enabled,
    close,
    isOpen
  } = _ref;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onKeyPress = _ref2 => {
      let {
        key
      } = _ref2;
      if (key !== 'Escape') {
        return;
      }
      if (isOpen) {
        close === null || close === void 0 || close();
      }
    };
    if (enabled) {
      document.body.addEventListener('keydown', onKeyPress);
      return () => {
        document.body.removeEventListener('keydown', onKeyPress);
      };
    }
  }, [enabled, close, isOpen]);
};

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

/***/ "../theme/dist/esm/src/utils/hex2rgb/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ hex2rgb)
/* harmony export */ });
const hex2rgb = hex => {
  let hexValue = hex;
  // In case hex is shortened - #fff or #000
  if (hexValue.length === 4) {
    const repeatedValue = hexValue.slice(1, 4);
    hexValue = "#".concat(repeatedValue).concat(repeatedValue);
  }
  const r = parseInt(hexValue.slice(1, 3), 16);
  const g = parseInt(hexValue.slice(3, 5), 16);
  const b = parseInt(hexValue.slice(5, 7), 16);
  return "".concat(r, ", ").concat(g, ", ").concat(b);
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

/***/ "../typography/dist/esm/src/components/Heading/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Heading)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
;// ../typography/dist/esm/src/components/Heading/helpers.js
const SIZES = {
  1: 'h_xxl',
  2: 'h_xl',
  3: 'h_lg',
  4: 'h_md',
  5: 'h_sm',
  6: 'h_xs',
  7: 'h_xxs'
};
const getResponsiveObject = as => {
  const size = Number(as.replace('h', ''));
  return {
    default: SIZES[size + 1],
    sm: SIZES[size]
  };
};
;// ../typography/dist/esm/src/components/Heading/index.js
const _excluded = ["as", "color", "fontWeight", "children", "size", "dataTrackTag"];
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



const Heading = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      as = 'h1',
      color = 'heading',
      fontWeight = 'bold',
      children,
      size,
      dataTrackTag = 'heading'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const defaultResponsive = getResponsiveObject(as);
  return /*#__PURE__*/react.createElement(Typography/* default */.A, _objectSpread({
    ref: ref,
    as: as,
    fontWeight: fontWeight,
    size: size || defaultResponsive,
    color: color,
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
Heading.displayName = 'Heading';
/* harmony default export */ const components_Heading = (Heading);
;
Heading.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Heading"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ChevronLeft.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ChevronLeftIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ChevronLeftIcon')
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
    d: "m10 4.818-4 4 4 4",
    vectorEffect: "non-scaling-stroke"
  }));
};
ChevronLeftIcon.id = 'ChevronLeftIcon';
ChevronLeftIcon.displayName = 'ChevronLeftIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronLeftIcon);
;
ChevronLeftIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChevronLeftIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ChevronRight.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ChevronRightIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ChevronRightIcon')
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
    d: "m6 4.818 4 4-4 4",
    vectorEffect: "non-scaling-stroke"
  }));
};
ChevronRightIcon.id = 'ChevronRightIcon';
ChevronRightIcon.displayName = 'ChevronRightIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronRightIcon);
;
ChevronRightIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChevronRightIcon"
};

/***/ })

}]);
//# sourceMappingURL=985.a6f79b84.iframe.bundle.js.map