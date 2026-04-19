"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[3412],{

/***/ "../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/stats/emitter/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../badges/dist/esm/src/components/Badge/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Badge)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/stats/emitter/index.js
var emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/stats/emitter/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js
var logger_emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/components/LazyComponent/index.js
var LazyComponent = __webpack_require__("../ui_utils/dist/esm/src/components/LazyComponent/index.js");
;// ../badges/dist/esm/src/components/helpers/LazyTooltip/index.js



const LazyTooltip = props => {
  const lazyImport = () => __webpack_require__.e(/* import() | BadgeTooltipV1 */ 4046).then(__webpack_require__.bind(__webpack_require__, "../badges/dist/esm/src/components/helpers/BadgeTooltip/index.js"));
  const onLoadError = error => {
    emitter/* default */.A.count("libs.penta.lazy_load.failure", "badge_tooltip");
    logger_emitter/* default */.A.warn(error, {
      description: 'Failed to lazy-load Tooltip component'
    });
  };
  return /*#__PURE__*/react.createElement(LazyComponent/* default */.A, {
    lazyImport: lazyImport,
    shouldImport: true,
    componentProps: props,
    onError: onLoadError,
    placeholder: props.children,
    fallback: props.children
  });
};
LazyTooltip.displayName = 'LazyTooltip';
/* harmony default export */ const helpers_LazyTooltip = (LazyTooltip);
;
LazyTooltip.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LazyTooltip"
};
;// ../badges/dist/esm/src/components/Badge/index.js
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



const Badge = _ref => {
  let {
    children,
    color = 'white',
    backgroundColor,
    tooltipContent,
    showTooltip = true,
    tooltipPosition = 'top',
    dataTestId,
    appendTooltipToBody,
    disableTooltipFlip,
    disablePadding = false,
    dataTrackTag = 'badge',
    dataTrackValue
  } = _ref;
  const props = {
    color,
    backgroundColor,
    gap: '1',
    height: '20px',
    borderRadius: 'sm',
    display: 'flex',
    alignItems: 'center',
    paddingY: '0',
    paddingX: disablePadding ? '0' : '1.5',
    width: 'fit-content',
    fontSize: 'b_sm',
    lineHeight: 'b_xs',
    fontWeight: 'semibold',
    userSelect: 'none',
    children,
    dataTrackTag,
    dataTrackValue
  };
  if (tooltipContent && showTooltip) {
    return /*#__PURE__*/react.createElement(helpers_LazyTooltip, {
      disableFlip: disableTooltipFlip,
      appendToBody: appendTooltipToBody,
      content: tooltipContent,
      position: tooltipPosition,
      dataTrackTag: "".concat(dataTrackTag, "_tooltip"),
      as: "div"
    }, /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread({
      "data-testid": dataTestId
    }, props)));
  }
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread({
    "data-testid": dataTestId
  }, props));
};
Badge.displayName = 'Badge';
/* harmony default export */ const components_Badge = (Badge);
;
Badge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Badge"
};

/***/ }),

/***/ "../badges/dist/esm/src/components/NewBadge/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../badges/dist/esm/src/components/Badge/index.js");



const NewBadge = _ref => {
  let {
    dataTestId,
    dataTrackTag = 'new_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    backgroundColor: "pink_900",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_1__/* .I18n */ .F, {
    k: "badges.new_badge.text"
  }));
};
NewBadge.displayName = 'NewBadge';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewBadge);
;
NewBadge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NewBadge"
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

/***/ "../data_display/dist/esm/src/components/Rating/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Rating)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js + 21 modules
var browser = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Star.js
var Star = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Star.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/StarHalf.js
var StarHalf = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/StarHalf.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/StarSolid.js
var StarSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/StarSolid.js");
;// ../data_display/dist/esm/src/components/Rating/RatingStar/constants.js

const variantToStar = {
  empty: Star/* default */.A,
  half: StarHalf/* default */.A,
  full: StarSolid/* default */.A
};
;// ../data_display/dist/esm/src/components/Rating/RatingStar/index.js


const RatingStar = _ref => {
  let {
    starVariant = 'empty'
  } = _ref;
  const Star = variantToStar[starVariant];
  return /*#__PURE__*/react.createElement(Star, {
    color: "grey_1200"
  });
};
RatingStar.displayName = 'RatingStar';
/* harmony default export */ const Rating_RatingStar = (RatingStar);
;
RatingStar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RatingStar"
};
;// ../data_display/dist/esm/src/components/Rating/utils/index.js

const formatStars = (variant, score) => {
  const starCount = variant === 'full' ? 5 : 1;
  return (0,lodash.times)(starCount).map(index => calculateStarStarVariant(score, index));
};
const calculateStarStarVariant = (score, starIndex) => {
  const normalizedScore = Math.round(score * 2) / 2;
  const filledStarCount = Math.floor(normalizedScore);
  const remainderStar = normalizedScore - filledStarCount;
  if (starIndex < filledStarCount) {
    return 'full';
  }
  if (starIndex === filledStarCount && remainderStar === 0.5) {
    return 'half';
  }
  return 'empty';
};
;// ../data_display/dist/esm/src/components/Rating/constants.js
const MIN_RATING = 0.1;
const MAX_RATING = 5.1;
;// ../data_display/dist/esm/src/components/Rating/index.js
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









const Rating = _ref => {
  let {
    score,
    minimumFractionDigits,
    maximumFractionDigits,
    showScore = true,
    reviews,
    variant = 'full',
    onReviewsClick,
    dataTrackTag = 'rating',
    dataTrackValue = String(score)
  } = _ref;
  if (!(0,lodash.inRange)(score, MIN_RATING, MAX_RATING)) {
    return null;
  }
  const isReviewsClickable = typeof onReviewsClick === 'function';
  const stars = formatStars(variant, score);
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    display: "flex",
    alignItems: "center",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "inlineFlex",
    paddingBottom: "1"
  }, stars.map((starVariant, index) => /*#__PURE__*/react.createElement(Container/* default */.A, {
    key: index,
    as: "span",
    paddingLeft: index !== 0 ? '1' : undefined,
    display: "inlineFlex"
  }, /*#__PURE__*/react.createElement(Rating_RatingStar, {
    starVariant: starVariant
  })))), showScore && /*#__PURE__*/react.createElement(Text/* default */.A, {
    as: "strong",
    fontWeight: "bold",
    paddingLeft: "1"
  }, (0,browser/* numberFormat */.jq)({
    value: score,
    options: {
      fallbackValue: score.toString(),
      minimumFractionDigits,
      maximumFractionDigits
    }
  })), !(0,lodash.isEmpty)(reviews) && /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: isReviewsClickable ? 'button' : 'span',
    marginLeft: "1",
    onClick: onReviewsClick,
    color: "bodySecondary",
    borderRadius: "sm",
    outlineOffset: {
      focusVisible: 'sm'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineColor: {
      focusVisible: 'grey_1200'
    }
  }, "(", /*#__PURE__*/react.createElement(Text/* default */.A, _objectSpread({
    as: "span",
    color: "inherit"
  }, isReviewsClickable ? {
    decoration: 'underline',
    cursor: 'pointer'
  } : {}), reviews), ")"));
};
Rating.displayName = 'Rating';
/* harmony default export */ const components_Rating = (Rating);
;
Rating.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Rating"
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

/***/ "../feedback/dist/esm/src/components/Alert/AlertActionButton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../button/dist/esm/src/components/TextButton/index.js");


const AlertActionButton = _ref => {
  let {
    children,
    intent = 'primary',
    onClick,
    href,
    dataTrackTag = 'alert_action_button',
    dataTrackValue
  } = _ref;
  const ButtonComponent = intent === 'primary' ? _fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A : _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonComponent, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    onClick: onClick,
    href: href,
    target: href ? '_blank' : undefined,
    size: "sm"
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertActionButton);
;
AlertActionButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertActionButton"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/AlertActions/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/dist/esm/src/components/Alert/constants.js");
/* harmony import */ var _AlertContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertContext/index.js");




const AlertActions = _ref => {
  let {
    children
  } = _ref;
  const {
    forceMobileDesign
  } = (0,_AlertContext__WEBPACK_IMPORTED_MODULE_3__/* .useAlertContext */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    display: "flex",
    marginTop: forceMobileDesign ? '4' : {
      default: '4',
      md: '0'
    },
    marginLeft: forceMobileDesign ? '0' : {
      default: '0',
      md: '8'
    },
    alignSelf: forceMobileDesign ? 'flexEnd' : {
      default: 'flexEnd',
      md: 'center'
    },
    alignItems: "center",
    whiteSpace: "nowrap",
    flexShrink: 0,
    gap: "4"
  }, children);
};
AlertActions.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .ALERT_ACTIONS_ID */ .nq;
AlertActions.displayName = 'AlertActions';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertActions);
;
AlertActions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertActions"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/AlertContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AlertContext),
/* harmony export */   Z: () => (/* binding */ useAlertContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const AlertContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useAlertContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AlertContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within a AlertContextProvider');
  }
  return context;
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/AlertText/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/dist/esm/src/components/Alert/constants.js");



const AlertText = _ref => {
  let {
    children,
    dataTrackTag = 'alert_text',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    color: "inherit",
    size: "b_sm"
  }, children);
};
AlertText.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .ALERT_TEXT_ID */ .f0;
AlertText.displayName = 'AlertText';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertText);
;
AlertText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertText"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/AlertTitle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/dist/esm/src/components/Alert/constants.js");



const AlertTitle = _ref => {
  let {
    children,
    dataTrackTag = 'alert_title',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    fontWeight: "semibold",
    color: "inherit",
    size: "b_sm"
  }, children);
};
AlertTitle.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .ALERT_TITLE_ID */ .Si;
AlertTitle.displayName = 'AlertTitle';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertTitle);
;
AlertTitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertTitle"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Si: () => (/* binding */ ALERT_TITLE_ID),
/* harmony export */   W3: () => (/* binding */ VARIANTS_CONFIG),
/* harmony export */   f0: () => (/* binding */ ALERT_TEXT_ID),
/* harmony export */   nq: () => (/* binding */ ALERT_ACTIONS_ID),
/* harmony export */   vZ: () => (/* binding */ ALERT_ICON_ID)
/* harmony export */ });
/* unused harmony export VARIANT */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/AlertHexagon.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckCircle.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/InfoCircle.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Coupon.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Lightbulb.js");


const VARIANT = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  NEUTRAL: 'neutral',
  SPECIAL: 'special'
};
const VARIANTS_CONFIG = {
  neutral: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
    backgroundColor: 'grey_100',
    borderColor: 'grey_400'
  },
  info: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    backgroundColor: 'blue_100',
    borderColor: 'blue_400'
  },
  warning: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
    backgroundColor: 'yellow_100',
    borderColor: 'yellow_400'
  },
  success: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    backgroundColor: 'green_100',
    borderColor: 'green_400'
  },
  error: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    backgroundColor: 'red_100',
    borderColor: 'red_400'
  },
  special: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
    backgroundColor: 'purple_100',
    borderColor: 'purple_400'
  }
};
const ALERT_TITLE_ID = 'AlertTitle';
const ALERT_TEXT_ID = 'AlertText';
const ALERT_ACTIONS_ID = 'AlertActions';
const ALERT_ICON_ID = 'AlertIcon';

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Alert)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/constants.js
var constants = __webpack_require__("../feedback/dist/esm/src/components/Alert/constants.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertContext/index.js
var AlertContext = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertContext/index.js");
;// ../feedback/dist/esm/src/components/Alert/AlertIcon/index.js




const AlertIcon = _ref => {
  let {
    children,
    dataTrackTag = 'alert_icon',
    dataTrackValue
  } = _ref;
  const {
    shouldCenterIcon
  } = (0,AlertContext/* useAlertContext */.Z)();
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    as: "span",
    display: "flex",
    flexShrink: 0,
    paddingTop: shouldCenterIcon ? undefined : '0.5',
    marginTop: shouldCenterIcon ? undefined : 'px',
    marginRight: "2",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, children);
};
AlertIcon.id = constants/* ALERT_ICON_ID */.vZ;
AlertIcon.displayName = 'AlertIcon';
/* harmony default export */ const Alert_AlertIcon = (AlertIcon);
;
AlertIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertIcon"
};
;// ../feedback/dist/esm/src/components/Alert/index.js
const _excluded = ["variant", "showIcon", "children", "forceMobileDesign", "dataTrackTag"];
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






const Alert = _ref => {
  let {
      variant,
      showIcon = true,
      children,
      forceMobileDesign = false,
      dataTrackTag = 'alert'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const [dismissed, setDismissed] = (0,react.useState)(false);
  const alertTitle = (0,findChildByType/* findChildByType */.B)(children, constants/* ALERT_TITLE_ID */.Si);
  const alertText = (0,findChildByType/* findChildByType */.B)(children, constants/* ALERT_TEXT_ID */.f0);
  const alertActions = (0,findChildByType/* findChildByType */.B)(children, constants/* ALERT_ACTIONS_ID */.nq);
  const alertIcon = (0,findChildByType/* findChildByType */.B)(children, constants/* ALERT_ICON_ID */.vZ);
  const shouldCenterIcon = !alertTitle && Boolean(alertActions);
  const {
    Icon,
    backgroundColor,
    borderColor
  } = constants/* VARIANTS_CONFIG */.W3[variant];
  if (dismissed) {
    return null;
  }
  return /*#__PURE__*/react.createElement(AlertContext/* AlertContext */.C.Provider, {
    value: {
      variant,
      setDismissed,
      forceMobileDesign,
      shouldCenterIcon
    }
  }, /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({
    display: "flex",
    alignItems: shouldCenterIcon && !forceMobileDesign ? {
      md: 'center'
    } : undefined,
    padding: "4",
    borderRadius: "lg",
    color: "grey_1200",
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: "sm",
    role: "alert"
  }, restProps), {}, {
    dataTrackTag: dataTrackTag
  }), showIcon && (alertIcon || /*#__PURE__*/react.createElement(Alert_AlertIcon, null, /*#__PURE__*/react.createElement(Icon, {
    size: "sm"
  }))), /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    flex: 1,
    direction: forceMobileDesign ? 'column' : {
      default: 'column',
      md: 'row'
    },
    justifyContent: forceMobileDesign ? undefined : {
      md: 'spaceBetween'
    },
    color: "inherit",
    alignItems: shouldCenterIcon && !forceMobileDesign ? {
      md: 'center'
    } : undefined
  }, /*#__PURE__*/react.createElement(Container/* default */.A, null, alertTitle, alertText), alertActions)));
};
Alert.displayName = 'Alert';
/* harmony default export */ const components_Alert = (Alert);
;
Alert.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Alert"
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

/***/ "../inputs/dist/esm/src/components/Input/InputGroup/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Input_InputGroup)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/constants.js
var constants = __webpack_require__("../inputs/dist/esm/src/components/Input/constants.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../inputs/dist/esm/src/components/Input/styles.ve.css.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/utils.js
var utils = __webpack_require__("../inputs/dist/esm/src/components/shared/utils.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js + 1 modules
var getTextInputsStyle = __webpack_require__("../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js");
;// ../inputs/dist/esm/src/components/Input/inputs/dist/esm/src/components/Input/InputGroup/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../inputs/dist/esm/src/components/Input/InputGroup/styles.ve.css.js.vanilla.css","source":"Lmo4c3MzYzE6Zm9jdXMtd2l0aGluIHsKICBib3JkZXItY29sb3I6IHZhcigtLWo4c3MzYzApOwp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../inputs/dist/esm/src/components/Input/InputGroup/styles.ve.css.js

var borderFocusWithinVar = 'var(--j8ss3c0)';
var container = 'j8ss3c1';
;// ../inputs/dist/esm/src/components/Input/InputGroup/index.js
const _excluded = ["children", "disabled", "isSuccess", "isError", "dataTestId", "onBlur", "inputSize", "dataTrackTag", "dataTrackValue"];
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









const InputGroup = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      disabled,
      isSuccess,
      isError,
      dataTestId,
      onBlur,
      inputSize = constants/* INPUT_SIZES */.OL.default,
      dataTrackTag = 'input_group',
      dataTrackValue
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const input = (0,findChildByType/* findChildByType */.B)(children, constants/* INPUT_ID */.R0);
  const {
    stylingProps,
    restProps
  } = (0,utils/* filterProps */.J)(rest);
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
  if (! /*#__PURE__*/(0,react.isValidElement)(input)) {
    return null;
  }
  const prefix = (0,findChildByType/* findChildByType */.B)(children, constants/* PREFIX_ID */.fS);
  const suffix = (0,findChildByType/* findChildByType */.B)(children, constants/* SUFFIX_ID */.Uj);
  const className = classnames_default()(container, styles_ve_css/* inputSearchSelector */.KJ, {
    [styles_ve_css/* errorClass */.PC]: isError,
    [styles_ve_css/* successClass */.We]: isSuccess
  });
  return /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread({
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    onBlur: onBlur,
    display: "flex",
    direction: "row",
    paddingY: inputSize === constants/* INPUT_SIZES */.OL.lg ? '3' : '2',
    paddingX: inputSize === constants/* INPUT_SIZES */.OL.lg ? '4' : '3',
    lineHeight: inputSize === constants/* INPUT_SIZES */.OL.lg ? 'b_lg' : 'b_md',
    borderRadius: "lg",
    alignItems: "center",
    backgroundColor: disabled ? 'grey_200' : 'background',
    width: "100%",
    borderColor: borderColor,
    outlineWidth: {
      focusWithin: 'sm'
    },
    outlineColor: {
      focusWithin: focusBorderColor
    },
    outlineStyle: {
      focusWithin: 'solid'
    },
    borderWidth: "sm",
    className: className,
    "data-testid": dataTestId,
    style: inlineVars
  }, stylingProps), (0,render_children/* renderChildren */.s)(prefix, {
    disabled
  }), (0,render_children/* renderChildren */.s)(input, _objectSpread(_objectSpread({
    className: input.props.className,
    disabled,
    isSuccess,
    isError,
    ref,
    inputSize
  }, restProps), {}, {
    resetInputStyle: true
  })), (0,render_children/* renderChildren */.s)(suffix, {
    disabled
  }));
});
InputGroup.displayName = constants/* GROUP_ID */.SS;
/* harmony default export */ const Input_InputGroup = (InputGroup);
;
InputGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InputGroup"
};

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

/***/ "../layout_components/dist/esm/src/components/Card/Card/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Card/shared.js");
const _excluded = ["children", "borderRadius", "variant", "dataTrackTag"];
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



const Card = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      borderRadius = 'sm',
      variant = 'default',
      dataTrackTag = 'card'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread(_objectSpread({
    ref: ref
  }, variant === 'shadow' ? _shared__WEBPACK_IMPORTED_MODULE_2__/* .shadow */ .r : _shared__WEBPACK_IMPORTED_MODULE_2__/* .border */ .P), {}, {
    dataTrackTag: dataTrackTag,
    borderRadius: borderRadius
  }, restProps), children);
});
Card.displayName = 'Card';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);
;
Card.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Card"
};

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Card/shared.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ border),
/* harmony export */   r: () => (/* binding */ shadow)
/* harmony export */ });
const border = {
  borderColor: 'border',
  borderStyle: 'solid',
  borderWidth: 'sm'
};
const shadow = {
  boxShadow: 'aa'
};

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

/***/ "../penta_playground/src/assets/alex.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/alex.acb72a74.png";

/***/ }),

/***/ "../penta_playground/src/assets/avatar.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/avatar.2c6bb5ff.png";

/***/ }),

/***/ "../penta_playground/src/assets/avatar1.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/avatar1.6c0a48aa.png";

/***/ }),

/***/ "../penta_playground/src/assets/avatar2.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/avatar2.f5598cb7.png";

/***/ }),

/***/ "../penta_playground/src/assets/avatar3.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/avatar3.01c1f875.png";

/***/ }),

/***/ "../penta_playground/src/components/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  StoryClaudeTest: () => (/* binding */ StoryClaudeTest),
  StoryDimaTest1: () => (/* binding */ StoryDimaTest1),
  StoryExample: () => (/* binding */ StoryExample),
  StoryFiverrGigPage: () => (/* binding */ StoryFiverrGigPage),
  StoryFiverrHeaderPage: () => (/* binding */ StoryFiverrHeaderPage),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// NAMESPACE OBJECT: ../navigation/dist/esm/src/components/Tabs/Tab/style.ve.css.js
var Tab_style_ve_css_namespaceObject = {};
__webpack_require__.r(Tab_style_ve_css_namespaceObject);
__webpack_require__.d(Tab_style_ve_css_namespaceObject, {
  LinkPadding: () => (LinkPadding),
  defaultClass: () => (defaultClass),
  defaultSsrIndicatorBottom: () => (defaultSsrIndicatorBottom),
  defaultSsrIndicatorLeft: () => (defaultSsrIndicatorLeft),
  defaultSsrIndicatorRight: () => (defaultSsrIndicatorRight),
  defaultSsrIndicatorTop: () => (defaultSsrIndicatorTop),
  isLink: () => (style_ve_css_isLink),
  segmentedControlSsrIndicator: () => (segmentedControlSsrIndicator)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Heading/index.js + 1 modules
var Heading = __webpack_require__("../typography/dist/esm/src/components/Heading/index.js");
;// ../penta_playground/src/components/Example.tsx




function Example() {
  return /*#__PURE__*/react.createElement(Container/* default */.A, null, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h1"
  }, "Example"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "sm"
  }, "Button"));
}
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Card/Card/index.js
var Card = __webpack_require__("../layout_components/dist/esm/src/components/Card/Card/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Divider/index.js + 2 modules
var Divider = __webpack_require__("../layout_components/dist/esm/src/components/Divider/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Card/shared.js
var shared = __webpack_require__("../layout_components/dist/esm/src/components/Card/shared.js");
;// ../layout_components/dist/esm/src/components/Card/LinkCard/index.js
const _excluded = ["children", "href", "borderRadius", "color", "dataTrackTag", "outlineColor", "outlineOffset", "outlineWidth", "outlineStyle"];
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



const LinkCard = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      href,
      borderRadius = 'sm',
      color = {
        default: 'linkPrimary'
      },
      dataTrackTag = 'link_card',
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
      }
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread(_objectSpread({
    as: "a",
    ref: ref,
    href: href,
    boxShadow: {
      hover: 'z2'
    },
    borderRadius: borderRadius,
    decoration: "none",
    color: color,
    dataTrackTag: dataTrackTag,
    outlineColor: outlineColor,
    outlineOffset: outlineOffset,
    outlineWidth: outlineWidth,
    outlineStyle: outlineStyle
  }, shared/* border */.P), restProps), children);
});
LinkCard.displayName = 'LinkCard';
/* harmony default export */ const Card_LinkCard = (LinkCard);
;
LinkCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LinkCard"
};
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Link/index.js
var Link = __webpack_require__("../typography/dist/esm/src/components/Link/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/TextButton/index.js + 1 modules
var TextButton = __webpack_require__("../button/dist/esm/src/components/TextButton/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/CalendarAvailable.js
var CalendarAvailable = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CalendarAvailable.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Envelope.js
var Envelope = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Envelope.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/OrderBox.js
var OrderBox = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/OrderBox.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Brief.js
var Brief = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Brief.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ProClientTier.js
var ProClientTier = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ProClientTier.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Clock.js
var Clock = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Clock.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Fiverr.js
var Fiverr = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Fiverr.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js
var Ellipsis = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/TrendUp.js
var TrendUp = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/TrendUp.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/TrendDown.js
var TrendDown = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/TrendDown.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Categories.js
var Categories = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Categories.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/UnorderedList.js
var UnorderedList = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/UnorderedList.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../badges/dist/esm/src/components/Badge/index.js + 1 modules
var Badge = __webpack_require__("../badges/dist/esm/src/components/Badge/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../badges/dist/esm/src/components/VettedProBadge/VettedIcon.js


const VettedIcon = function () {
  let {
    theme: iconTheme
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/react.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8.22202 0.790131C9.17325 -0.263377 10.8267 -0.263377 11.778 0.790131L12.4113 1.49155C12.8941 2.02624 13.5919 2.31527 14.3113 2.27857L15.2551 2.23042C16.6727 2.1581 17.8419 3.3273 17.7696 4.74486L17.7214 5.68866C17.6847 6.40813 17.9738 7.10591 18.5085 7.5887L19.2099 8.22202C20.2634 9.17325 20.2634 10.8267 19.2099 11.778L18.5085 12.4113C17.9738 12.8941 17.6847 13.5919 17.7214 14.3113L17.7696 15.2551C17.8419 16.6727 16.6727 17.8419 15.2551 17.7696L14.3113 17.7214C13.5919 17.6847 12.8941 17.9738 12.4113 18.5085L11.778 19.2099C10.8267 20.2634 9.17325 20.2634 8.22202 19.2099L7.5887 18.5085C7.10591 17.9738 6.40813 17.6847 5.68866 17.7214L4.74486 17.7696C3.3273 17.8419 2.1581 16.6727 2.23042 15.2551L2.27857 14.3113C2.31527 13.5919 2.02624 12.8941 1.49155 12.4113L0.790131 11.778C-0.263377 10.8267 -0.263377 9.17325 0.790131 8.22202L1.49155 7.5887C2.02624 7.10591 2.31527 6.40813 2.27857 5.68866L2.23042 4.74486C2.1581 3.3273 3.3273 2.1581 4.74486 2.23042L5.68866 2.27857C6.40813 2.31527 7.10591 2.02624 7.5887 1.49155L8.22202 0.790131Z",
    fill: iconTheme === 'dark' ? themeVars/* colors */.Tj.business_900 : themeVars/* colors */.Tj.business_400
  }), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.113 8.61544C14.4639 8.22861 14.4639 7.60143 14.113 7.2146C13.7622 6.82777 13.1935 6.82777 12.8426 7.2146L9.34103 11.0757L7.50526 9.17415C7.14366 8.79959 6.57516 8.81918 6.23548 9.21791C5.89579 9.61663 5.91356 10.2435 6.27516 10.6181L8.74552 13.177C9.09916 13.5433 9.65269 13.5338 9.99578 13.1554L14.113 8.61544Z",
    fill: iconTheme === 'dark' ? themeVars/* colors */.Tj.white : themeVars/* colors */.Tj.business_1100
  }));
};
VettedIcon.displayName = 'VettedIcon';
;
VettedIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "VettedIcon"
};
;// ../badges/dist/esm/src/components/VettedProBadge/index.js





const LABEL = 'Vetted Pro';
const LABEL_SHORT = 'Pro';
const VettedProBadge = _ref => {
  let {
    showTooltip = true,
    tooltipPosition = 'top',
    dataTestId,
    appendTooltipToBody,
    disableTooltipFlip,
    variant = 'default',
    theme = 'light',
    dataTrackTag = 'vetted_pro_badge',
    dataTrackValue
  } = _ref;
  if (variant === 'compact') {
    return /*#__PURE__*/react.createElement(Badge/* default */.A, {
      dataTestId: dataTestId,
      backgroundColor: "transparent",
      disablePadding: true,
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue
    }, /*#__PURE__*/react.createElement(VettedIcon, {
      theme: theme
    }));
  }
  const isDark = theme === 'dark';
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    color: isDark ? 'white' : 'business_1100',
    backgroundColor: isDark ? 'business_900' : 'business_400',
    tooltipContent: (0,translate/* translate */.T)('badges.vetted_pro.tooltip'),
    showTooltip: showTooltip,
    tooltipPosition: tooltipPosition,
    dataTestId: dataTestId,
    appendTooltipToBody: appendTooltipToBody,
    disableTooltipFlip: disableTooltipFlip,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    width: "max-content"
  }, variant === 'short' ? LABEL_SHORT : LABEL));
};
VettedProBadge.displayName = 'VettedProBadge';
/* harmony default export */ const components_VettedProBadge = (VettedProBadge);
;
VettedProBadge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "VettedProBadge"
};
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/brand/NewSeller.js
var NewSeller = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/brand/NewSeller.js");
;// ../badges/dist/esm/src/components/NewSellerBadge/index.js



const NewSellerBadge = _ref => {
  let {
    dataTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    color: "grey_1200",
    backgroundColor: "transparent",
    dataTestId: dataTestId,
    disablePadding: true
  }, /*#__PURE__*/react.createElement(NewSeller/* default */.A, {
    size: "md"
  }), "New seller");
};
NewSellerBadge.displayName = 'NewSellerBadge';
/* harmony default export */ const components_NewSellerBadge = (NewSellerBadge);
;
NewSellerBadge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NewSellerBadge"
};
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupWithRef/index.js + 2 modules
var ChoiceGroupWithRef = __webpack_require__("../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupWithRef/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/index.js + 4 modules
var ChoiceGroupItem = __webpack_require__("../inputs/dist/esm/src/components/ChoiceGroup/ChoiceGroupItem/index.js");
// EXTERNAL MODULE: ../avatar/dist/esm/src/components/Avatar/index.js + 7 modules
var Avatar = __webpack_require__("../avatar/dist/esm/src/components/Avatar/index.js");
// EXTERNAL MODULE: ../media/dist/esm/src/components/Image/index.js + 1 modules
var Image = __webpack_require__("../media/dist/esm/src/components/Image/index.js");
// EXTERNAL MODULE: ../avatar/dist/esm/src/components/Avatar/AvatarContext/index.js
var AvatarContext = __webpack_require__("../avatar/dist/esm/src/components/Avatar/AvatarContext/index.js");
;// ../avatar/dist/esm/src/components/Avatar/hooks/useMedia.js

const useMedia = function (src) {
  let lazyLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const [isMediaBroken, setIsMediaBroken] = (0,react.useState)(false);
  const [isMediaLoaded, setIsMediaLoaded] = (0,react.useState)(!lazyLoad);
  const onMediaError = (0,react.useCallback)(() => {
    setIsMediaBroken(true);
  }, []);
  const onMediaLoad = (0,react.useCallback)(() => {
    setIsMediaLoaded(true);
  }, []);
  const showMedia = Boolean(src) && !isMediaBroken;
  return {
    isMediaLoaded,
    onMediaError,
    onMediaLoad,
    showMedia
  };
};
/* harmony default export */ const hooks_useMedia = (useMedia);
;// ../avatar/dist/esm/src/components/Avatar/AvatarImage/index.js
const AvatarImage_excluded = ["src", "lazyLoad", "alt"];
function AvatarImage_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function AvatarImage_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? AvatarImage_ownKeys(Object(t), !0).forEach(function (r) {
      AvatarImage_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : AvatarImage_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function AvatarImage_defineProperty(e, r, t) {
  return (r = AvatarImage_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function AvatarImage_toPropertyKey(t) {
  var i = AvatarImage_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function AvatarImage_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function AvatarImage_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = AvatarImage_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function AvatarImage_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}




const AvatarImage = _ref => {
  let {
      src,
      lazyLoad = true,
      alt
    } = _ref,
    restProps = AvatarImage_objectWithoutProperties(_ref, AvatarImage_excluded);
  const {
    nameValue
  } = (0,AvatarContext/* useAvatarContext */.u)();
  const {
    showMedia,
    isMediaLoaded,
    onMediaError,
    onMediaLoad
  } = hooks_useMedia(src, lazyLoad);
  return showMedia ? /*#__PURE__*/react.createElement(Image/* default */.A, AvatarImage_objectSpread({
    objectFit: "cover",
    width: "100%",
    height: "100%",
    role: 'img',
    position: "absolute",
    backgroundColor: isMediaLoaded ? undefined : 'grey_700',
    src: src,
    alt: alt || nameValue,
    loading: lazyLoad ? 'lazy' : 'eager',
    onError: onMediaError,
    onLoad: onMediaLoad
  }, restProps)) : null;
};
AvatarImage.id = 'AvatarImage';
AvatarImage.displayName = 'AvatarImage';
/* harmony default export */ const Avatar_AvatarImage = (AvatarImage);
;
AvatarImage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AvatarImage"
};
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/ProgressLine/index.js + 2 modules
var ProgressLine = __webpack_require__("../feedback/dist/esm/src/components/ProgressLine/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/index.js + 1 modules
var Alert = __webpack_require__("../feedback/dist/esm/src/components/Alert/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertTitle/index.js
var AlertTitle = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertTitle/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertText/index.js
var AlertText = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertText/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertActions/index.js
var AlertActions = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertActions/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertActionButton/index.js
var AlertActionButton = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertActionButton/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Status/index.js + 1 modules
var Status = __webpack_require__("../data_display/dist/esm/src/components/Status/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Tag/index.js + 4 modules
var Tag = __webpack_require__("../data_display/dist/esm/src/components/Tag/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqueId.js");
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);
;// ../navigation/dist/esm/src/components/Tabs/TabContext/helpers.js
const BORDER_WIDTH = 2;
const scrollTabIntoView = (index, placement, tabGroupNode, variant) => {
  if (placement === 'left' || placement === 'right' || index === -1) {
    return;
  }
  const tabList = tabGroupNode === null || tabGroupNode === void 0 ? void 0 : tabGroupNode.querySelector("[role=\"tablist\"]");
  const isSegmentedControlVariant = variant === 'segmentedControl' || variant === 'segmentedControlRounded';
  const tabListWidthOffset = isSegmentedControlVariant && tabList !== null && tabList !== void 0 && tabList.offsetWidth ? (tabList === null || tabList === void 0 ? void 0 : tabList.offsetWidth) - BORDER_WIDTH : tabList === null || tabList === void 0 ? void 0 : tabList.offsetWidth;
  if (tabListWidthOffset === (tabList === null || tabList === void 0 ? void 0 : tabList.scrollWidth)) {
    return;
  }
  const selectedTab = tabGroupNode === null || tabGroupNode === void 0 ? void 0 : tabGroupNode.querySelectorAll("[role=\"tab\"]")[index];
  selectedTab === null || selectedTab === void 0 || selectedTab.scrollIntoView({
    block: 'nearest',
    inline: 'center',
    behavior: 'smooth'
  });
};
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js + 2 modules
var useKeyboardShortcuts = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
;// ../navigation/dist/esm/src/components/Tabs/helpers.js
const tabId = (prefix, index) => "".concat(prefix, ":tab-").concat(index);
const tabPanelId = (prefix, index) => "".concat(prefix, ":tabpanel-").concat(index);
const getIndexFromTabId = function () {
  let tabId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return parseInt(tabId.split(':tab-').pop() || '0', 10);
};
const isSegmentedControlVariant = variant => variant === 'segmentedControl' || variant === 'segmentedControlRounded';
;// ../navigation/dist/esm/src/components/Tabs/TabContext/hooks/useKeyboardNavigation.js


const shiftIndex = (tabsRef, index, shift) => {
  const {
    length
  } = tabsRef.current;
  let nextIndex = (index + length + shift) % length;
  if (tabsRef.current[nextIndex].isDisabled) {
    nextIndex = shiftIndex(tabsRef, nextIndex, shift);
  }
  return nextIndex;
};
const useKeyboardNavigation = _ref => {
  let {
    placement,
    setSelectedIndex,
    autoSelect,
    tabsRef,
    tabGroupRef,
    isFocusedRef
  } = _ref;
  const shiftSelectedTab = (e, shift) => {
    var _document$activeEleme, _tabGroupRef$current;
    e.preventDefault();
    const focusedIndex = getIndexFromTabId((_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.id);
    const nextIndex = shiftIndex(tabsRef, focusedIndex, shift);
    const nextTab = (_tabGroupRef$current = tabGroupRef.current) === null || _tabGroupRef$current === void 0 ? void 0 : _tabGroupRef$current.querySelector("[role=\"tab\"]:nth-child(".concat(nextIndex + 1, ")"));
    nextTab === null || nextTab === void 0 || nextTab.focus();
    if (autoSelect) {
      selectFocusedTab(e, nextTab);
    }
  };
  const selectFocusedTab = (e, tab) => {
    e.preventDefault();
    const focusedIndex = getIndexFromTabId(tab === null || tab === void 0 ? void 0 : tab.id);
    setSelectedIndex(focusedIndex);
    if ((tab === null || tab === void 0 ? void 0 : tab.dataset.link) === 'true') {
      const link = tab === null || tab === void 0 ? void 0 : tab.querySelector('a');
      link === null || link === void 0 || link.click();
    }
    tab === null || tab === void 0 || tab.focus();
  };
  const handler = e => {
    if (!isFocusedRef.current) {
      return;
    }
    if (placement === 'top' || placement === 'bottom') {
      if (e.code === 'ArrowLeft') {
        shiftSelectedTab(e, -1);
      } else if (e.code === 'ArrowRight') {
        shiftSelectedTab(e, 1);
      }
    } else if (placement === 'left' || placement === 'right') {
      if (e.code === 'ArrowUp') {
        shiftSelectedTab(e, -1);
      } else if (e.code === 'ArrowDown') {
        shiftSelectedTab(e, 1);
      }
    }
    if (!autoSelect && (e.code === 'Space' || e.code === 'Enter')) {
      selectFocusedTab(e, document.activeElement);
    }
  };
  (0,useKeyboardShortcuts/* default */.A)([{
    trigger: '*',
    handler
  }]);
};
;// ../navigation/dist/esm/src/components/Tabs/TabContext/constants.js

const ANIMATION_DURATION = themeVars/* numericAnimationDurations */.zK.moderate3;
;// ../navigation/dist/esm/src/components/Tabs/TabContext/index.js





const TabContext = /*#__PURE__*/(0,react.createContext)({});
const useTabContext = () => {
  const context = (0,react.useContext)(TabContext);
  return context;
};
const TabContextProvider = _ref => {
  let {
    defaultIndex,
    selectedIndex: outerSelectedIndex,
    onChange,
    variant,
    placement,
    isStretched,
    isLazy,
    autoSelect,
    tabGroupRef,
    children,
    onAnimationEnd,
    size
  } = _ref;
  const idPrefixRef = (0,react.useRef)();
  if (!idPrefixRef.current) {
    idPrefixRef.current = uniqueId_default()('tabs-');
  }
  const isFocusedRef = (0,react.useRef)(false);
  const tabsRef = (0,react.useRef)([]);
  const [focusedTab, setFocusedTab] = (0,react.useState)({
    current: null
  });
  const [innerSelectedIndex, setInnerSelectedIndex] = (0,react.useState)(outerSelectedIndex !== null && outerSelectedIndex !== void 0 ? outerSelectedIndex : defaultIndex);
  const [isIndicatorRendered, setIsIndicatorRendered] = (0,react.useState)(false);
  const selectedIndex = outerSelectedIndex !== null && outerSelectedIndex !== void 0 ? outerSelectedIndex : innerSelectedIndex;
  const setSelectedIndex = (0,react.useCallback)(index => {
    if (selectedIndex === index) {
      return;
    }
    if (index > -1 && tabsRef.current[index]) {
      if (tabsRef.current[index].isDisabled) {
        return;
      }
      tabsRef.current[index].wasSelected = true;
    }
    tabsRef.current.forEach(tab => {
      tab.isSelected = tab.index === index;
    });
    if (typeof onAnimationEnd === 'function') {
      setTimeout(() => {
        onAnimationEnd === null || onAnimationEnd === void 0 || onAnimationEnd();
      }, ANIMATION_DURATION);
    }
    onChange === null || onChange === void 0 || onChange(index);
    if (typeof outerSelectedIndex !== 'number') {
      setInnerSelectedIndex(index);
    }
    scrollTabIntoView(index, placement, tabGroupRef.current, variant);
  }, [selectedIndex, outerSelectedIndex, onChange, tabGroupRef, placement, variant, onAnimationEnd]);
  useKeyboardNavigation({
    placement,
    setSelectedIndex,
    autoSelect,
    tabsRef,
    tabGroupRef,
    isFocusedRef
  });
  return /*#__PURE__*/react.createElement(TabContext.Provider, {
    value: {
      idPrefix: idPrefixRef.current,
      selectedIndex,
      setSelectedIndex,
      variant,
      placement,
      isStretched,
      isLazy,
      autoSelect,
      isFocusedRef,
      tabsRef,
      focusedTab,
      setFocusedTab,
      tabGroupRef,
      isIndicatorRendered,
      setIsIndicatorRendered,
      size
    }
  }, children);
};
;
TabContextProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TabContextProvider"
};
;// ../navigation/dist/esm/src/components/Tabs/TabGroup/index.js
const TabGroup_excluded = ["defaultIndex", "selectedIndex", "onChange", "variant", "placement", "isStretched", "isLazy", "autoSelect", "size", "children", "onAnimationEnd", "dataTrackTag"];
function TabGroup_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TabGroup_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TabGroup_ownKeys(Object(t), !0).forEach(function (r) {
      TabGroup_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TabGroup_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TabGroup_defineProperty(e, r, t) {
  return (r = TabGroup_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TabGroup_toPropertyKey(t) {
  var i = TabGroup_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TabGroup_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function TabGroup_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = TabGroup_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function TabGroup_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}



const TabGroup = _ref => {
  let {
      defaultIndex = 0,
      selectedIndex,
      onChange,
      variant = 'default',
      placement = 'top',
      isStretched = false,
      isLazy = false,
      autoSelect = true,
      size = 'md',
      children,
      onAnimationEnd,
      dataTrackTag = 'tab_group'
    } = _ref,
    props = TabGroup_objectWithoutProperties(_ref, TabGroup_excluded);
  const tabGroupRef = (0,react.useRef)(null);
  return /*#__PURE__*/react.createElement(Stack/* default */.A, TabGroup_objectSpread(TabGroup_objectSpread({
    ref: tabGroupRef,
    direction: placement === 'top' || placement === 'bottom' ? 'column' : 'row',
    gap: "0",
    position: "relative"
  }, props), {}, {
    dataTrackTag: dataTrackTag
  }), /*#__PURE__*/react.createElement(TabContextProvider, {
    defaultIndex: defaultIndex,
    selectedIndex: selectedIndex,
    onChange: onChange,
    onAnimationEnd: onAnimationEnd,
    variant: variant,
    placement: placement,
    isStretched: isStretched,
    isLazy: isLazy,
    autoSelect: autoSelect,
    tabGroupRef: tabGroupRef,
    size: size
  }, children));
};
TabGroup.displayName = 'TabGroup';
/* harmony default export */ const Tabs_TabGroup = (TabGroup);
;
TabGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TabGroup"
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/getComponentProps/index.js
var getComponentProps = __webpack_require__("../ui_utils/dist/esm/src/utils/getComponentProps/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
;// ../navigation/dist/esm/src/components/Tabs/TabList/helpers.js



const renderTabChild = _ref => {
  let {
    isStretched,
    variant,
    placement,
    idPrefix,
    selectedIndex,
    setSelectedIndex,
    tabsRef
  } = _ref;
  return (child, index, indicatorColor) => {
    var _tabsRef$current$inde, _tabsRef$current$inde2;
    if (! /*#__PURE__*/(0,react.isValidElement)(child)) {
      return null;
    }
    const isDisabled = !!(0,getComponentProps/* default */.A)(child).isDisabled;
    const isSelected = index === selectedIndex && !isDisabled;
    tabsRef.current[index] = {
      index,
      isSelected,
      isDisabled,
      wasSelected: (_tabsRef$current$inde = (_tabsRef$current$inde2 = tabsRef.current[index]) === null || _tabsRef$current$inde2 === void 0 ? void 0 : _tabsRef$current$inde2.wasSelected) !== null && _tabsRef$current$inde !== void 0 ? _tabsRef$current$inde : isSelected
    };
    return (0,render_children/* renderChildren */.s)(child, {
      isSelected,
      isDisabled,
      isStretched,
      variant,
      placement,
      id: tabId(idPrefix, index),
      panelId: tabPanelId(idPrefix, index),
      onClick: () => setSelectedIndex(index),
      indicatorColor
    });
  };
};
;// ../navigation/dist/esm/src/components/Tabs/TabList/style.js
function style_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function style_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? style_ownKeys(Object(t), !0).forEach(function (r) {
      style_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : style_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function style_defineProperty(e, r, t) {
  return (r = style_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function style_toPropertyKey(t) {
  var i = style_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function style_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

const getStylingProps = (variant, placement) => style_objectSpread(style_objectSpread(style_objectSpread({
  display: 'flex',
  boxSizing: 'borderBox'
}, variant !== 'unstyled' && {
  position: 'relative',
  overflowY: 'auto'
}), isSegmentedControlVariant(variant) && {
  backgroundColor: 'grey_200',
  borderColor: 'border',
  borderWidth: 'sm',
  borderStyle: 'solid',
  outlineOffset: 'sm',
  padding: '2',
  borderRadius: variant === 'segmentedControlRounded' ? 'circle' : 'lg',
  gap: '2'
}), placement === 'left' || placement === 'right' ? {
  flexDirection: 'column'
} : undefined);
;// ../navigation/dist/esm/src/components/Tabs/navigation/dist/esm/src/components/Tabs/TabList/style.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../navigation/dist/esm/src/components/Tabs/TabList/style.ve.css.js.vanilla.css","source":"Ll81dGowbGgwOjpiZWZvcmUgewogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKfQouXzV0ajBsaDE6YmVmb3JlIHsKICBjb250ZW50OiAiIjsKICB3aWR0aDogMXB4OwogIGhlaWdodDogMTAwJTsKICByaWdodDogMDsKfQouXzV0ajBsaDI6YmVmb3JlIHsKICBjb250ZW50OiAiIjsKICB3aWR0aDogMXB4OwogIGhlaWdodDogMTAwJTsKICBsZWZ0OiAwOwp9Ci5fNXRqMGxoMzpiZWZvcmUgewogIGNvbnRlbnQ6ICIiOwogIHdpZHRoOiAxMDAlOwogIGhlaWdodDogMXB4OwogIHRvcDogMDsKfQouXzV0ajBsaDQ6YmVmb3JlIHsKICBjb250ZW50OiAiIjsKICB3aWR0aDogMTAwJTsKICBoZWlnaHQ6IDFweDsKICBib3R0b206IDA7Cn0KLl81dGowbGg1OjpiZWZvcmUgewogIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50Owp9Ci5fNXRqMGxoNjo6YmVmb3JlIHsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNUU3Owp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../navigation/dist/esm/src/components/Tabs/TabList/style.ve.css.js

var bottom = '_5tj0lh4 _5tj0lh0';
var indicatorColorGrey = '_5tj0lh6';
var indicatorColorTransparent = '_5tj0lh5';
var left = '_5tj0lh1 _5tj0lh0';
var right = '_5tj0lh2 _5tj0lh0';
var style_ve_css_top = '_5tj0lh3 _5tj0lh0';
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
;// ../navigation/dist/esm/src/components/Tabs/TabList/Indicator/hooks/useGetStyles.js
function useGetStyles_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function useGetStyles_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? useGetStyles_ownKeys(Object(t), !0).forEach(function (r) {
      useGetStyles_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : useGetStyles_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function useGetStyles_defineProperty(e, r, t) {
  return (r = useGetStyles_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function useGetStyles_toPropertyKey(t) {
  var i = useGetStyles_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function useGetStyles_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}




const BORDER_LEFT_WIDTH = 1;
const getTabBoundingClientRect = (focusedTab, tabListRef, isHorizontal) => {
  if (!focusedTab || !focusedTab.current || !tabListRef.current) {
    return {};
  }
  const side = isHorizontal ? 'left' : 'top';
  const tabRect = focusedTab === null || focusedTab === void 0 ? void 0 : focusedTab.current.getBoundingClientRect();
  const containerRect = tabListRef.current.getBoundingClientRect();
  const position = (side === 'left' ? tabRect.left - containerRect.left + tabListRef.current.scrollLeft : tabRect.top - containerRect.top) + tabListRef.current.scrollTop;
  return {
    position,
    width: tabRect.width,
    height: tabRect.height
  };
};
const getAnimationStyles = (focusedTab, orientation, variant, tabListRef) => {
  if (!focusedTab || !focusedTab.current) {
    return {};
  }
  const isHorizontal = orientation === 'horizontal';
  const {
    width,
    height,
    position
  } = getTabBoundingClientRect(focusedTab, tabListRef, isHorizontal);
  if (variant === 'default') {
    return useGetStyles_objectSpread(useGetStyles_objectSpread({}, isHorizontal ? {
      width
    } : {
      height
    }), {}, {
      transform: "translate".concat(isHorizontal ? 'X' : 'Y', "(").concat(position, "px)")
    });
  }
  if (isSegmentedControlVariant(variant)) {
    return {
      width,
      height,
      transform: "translate".concat(isHorizontal ? 'X' : 'Y', "(").concat((position !== null && position !== void 0 ? position : 0) - BORDER_LEFT_WIDTH, "px)")
    };
  }
};
const useIndicatorStyles = (orientation, tabListRef) => {
  const {
    focusedTab,
    variant
  } = useTabContext();
  const [styles, setStyles] = (0,react.useState)({});
  const size = (0,useElementSize/* default */.A)(tabListRef === null || tabListRef === void 0 ? void 0 : tabListRef.current);
  (0,react.useEffect)(() => {
    setStyles(getAnimationStyles(focusedTab, orientation, variant, tabListRef) || {});
  }, [focusedTab, orientation, variant, tabListRef, size]);
  return styles;
};
/* harmony default export */ const useGetStyles = (useIndicatorStyles);
;// ../navigation/dist/esm/src/components/Tabs/TabList/Indicator/styles.js
function styles_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function styles_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? styles_ownKeys(Object(t), !0).forEach(function (r) {
      styles_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : styles_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function styles_defineProperty(e, r, t) {
  return (r = styles_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function styles_toPropertyKey(t) {
  var i = styles_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function styles_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

const MARGIN_ZERO = {
  left: 0,
  top: 0,
  right: 0,
  bottom: 0
};
const styles_getStylingProps = function (variant, placement, orientation) {
  let indicatorColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
  return styles_objectSpread(styles_objectSpread({}, variant === 'default' && styles_objectSpread(styles_objectSpread({
    backgroundColor: indicatorColor === 'default' ? 'grey_1200' : 'white'
  }, MARGIN_ZERO), {}, {
    [placement]: undefined,
    [orientation === 'horizontal' ? 'height' : 'width']: '2px'
  })), isSegmentedControlVariant(variant) && styles_objectSpread(styles_objectSpread({
    backgroundColor: 'white'
  }, MARGIN_ZERO), {}, {
    [orientation === 'horizontal' ? 'top' : 'left']: '8px',
    borderRadius: variant === 'segmentedControlRounded' ? 'circle' : 'sm',
    boxShadow: 'z2'
  }));
};
;// ../navigation/dist/esm/src/components/Tabs/TabList/Indicator/index.js
function Indicator_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Indicator_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Indicator_ownKeys(Object(t), !0).forEach(function (r) {
      Indicator_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Indicator_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Indicator_defineProperty(e, r, t) {
  return (r = Indicator_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Indicator_toPropertyKey(t) {
  var i = Indicator_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Indicator_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}







const Indicator = _ref => {
  let {
    variant,
    placement,
    orientation,
    isFocusedRef,
    tabListRef,
    indicatorColor = 'default'
  } = _ref;
  const styles = useGetStyles(orientation, tabListRef);
  const stylingProps = styles_getStylingProps(variant, placement, orientation, indicatorColor);
  const {
    setIsIndicatorRendered
  } = useTabContext();
  (0,react.useEffect)(() => {
    setIsIndicatorRendered(true);
  }, [setIsIndicatorRendered]);
  return /*#__PURE__*/react.createElement(Container/* default */.A, Indicator_objectSpread(Indicator_objectSpread({
    position: "absolute",
    zIndex: variant === 'default' ? '1' : undefined,
    transition: isFocusedRef !== null && isFocusedRef !== void 0 && isFocusedRef.current ? "all ".concat(themeVars/* animationDuration */.H9.moderate3) : undefined,
    visibility: (0,lodash.isEmpty)(styles) ? 'hidden' : undefined
  }, styles), stylingProps));
};
Indicator.displayName = 'Indicator';
/* harmony default export */ const TabList_Indicator = (Indicator);
;
Indicator.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Indicator"
};
;// ../navigation/dist/esm/src/components/Tabs/TabList/index.js
const TabList_excluded = ["children", "renderChildren", "indicatorColor", "dataTrackTag"];
function TabList_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TabList_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TabList_ownKeys(Object(t), !0).forEach(function (r) {
      TabList_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TabList_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TabList_defineProperty(e, r, t) {
  return (r = TabList_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TabList_toPropertyKey(t) {
  var i = TabList_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TabList_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function TabList_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = TabList_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function TabList_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}








const TabList = _ref => {
  var _tabListRef$current2;
  let {
      children,
      renderChildren = renderTabChild,
      indicatorColor = 'default',
      dataTrackTag = 'tab_list'
    } = _ref,
    props = TabList_objectWithoutProperties(_ref, TabList_excluded);
  const context = useTabContext();
  const {
    isFocusedRef,
    variant,
    placement,
    tabsRef
  } = context;
  const tabListRef = (0,react.useRef)(null);
  const orientation = placement === 'top' || placement === 'bottom' ? 'horizontal' : 'vertical';
  tabsRef.current.length = react.Children.count(children);
  const focusHandler = (0,react.useCallback)(() => {
    isFocusedRef.current = true;
  }, [isFocusedRef]);
  const blurHandler = (0,react.useCallback)(() => {
    isFocusedRef.current = false;
  }, [isFocusedRef]);
  /* eslint-disable react-hooks/exhaustive-deps */
  const filteredTabs = (0,react.useMemo)(() => {
    var _tabListRef$current;
    return Array.from(((_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.children) || []).filter(child => {
      var _child$children$;
      return child.tagName.toLowerCase() === 'button' ? child.getAttribute('role') === 'tab' : ((_child$children$ = child.children[0]) === null || _child$children$ === void 0 ? void 0 : _child$children$.role) === 'tab';
    });
  }, [(_tabListRef$current2 = tabListRef.current) === null || _tabListRef$current2 === void 0 || (_tabListRef$current2 = _tabListRef$current2.children) === null || _tabListRef$current2 === void 0 ? void 0 : _tabListRef$current2.length]);
  return /*#__PURE__*/react.createElement(Box/* default */.A, TabList_objectSpread(TabList_objectSpread({
    role: "tablist",
    "aria-orientation": orientation,
    className: classnames_default()({
      [left]: placement === 'left' && variant === 'default',
      [right]: placement === 'right' && variant === 'default',
      [style_ve_css_top]: placement === 'bottom' && variant === 'default',
      [bottom]: placement === 'top' && variant === 'default'
    }, indicatorColor === 'default' ? indicatorColorGrey : indicatorColorTransparent),
    onFocus: focusHandler,
    onBlur: blurHandler,
    ref: tabListRef
  }, getStylingProps(variant, placement)), {}, {
    dataTrackTag: dataTrackTag
  }, props), react.Children.map(react.Children.toArray(children), (child, index) => renderChildren(context)(child, index, indicatorColor)), react.Children.count(children) === filteredTabs.length && /*#__PURE__*/react.createElement(TabList_Indicator, {
    variant: variant,
    placement: placement,
    orientation: orientation,
    isFocusedRef: isFocusedRef,
    tabListRef: tabListRef,
    indicatorColor: indicatorColor
  }));
};
TabList.displayName = 'TabList';
/* harmony default export */ const Tabs_TabList = (TabList);
;
TabList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TabList"
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js + 1 modules
var vanilla_extract_dynamic_esm = __webpack_require__("../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../tooltip/dist/esm/src/components/Tooltip/index.js
var Tooltip = __webpack_require__("../tooltip/dist/esm/src/components/Tooltip/index.js");
;// ../navigation/dist/esm/src/components/Tabs/stories/constants.js
const SSR_INDICATOR = "SsrIndicator";
const SEGMENTED_CONTROL = 'segmentedControl';
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
;// ../navigation/dist/esm/src/components/Tabs/Tab/style.js
function Tab_style_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Tab_style_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Tab_style_ownKeys(Object(t), !0).forEach(function (r) {
      Tab_style_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Tab_style_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Tab_style_defineProperty(e, r, t) {
  return (r = Tab_style_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Tab_style_toPropertyKey(t) {
  var i = Tab_style_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Tab_style_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


const STYLES_BY_SIZE = {
  sm: {
    fontSize: 'b_sm',
    lineHeight: 'b_sm',
    paddingXDefault: '4',
    paddingXSegmented: '4'
  },
  md: {
    fontSize: 'b_md',
    lineHeight: 'b_md',
    paddingXDefault: '8',
    paddingXSegmented: '6'
  }
};
const getConditionalStyle = (size, field) => typeof size === 'object' ? (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value][field]) : STYLES_BY_SIZE[size][field];
const style_getStylingProps = (variant, placement, isLink, isDisabled, isStretched, isSelected, size, indicatorColor) => Tab_style_objectSpread(Tab_style_objectSpread(Tab_style_objectSpread({
  boxSizing: 'borderBox'
}, isSegmentedControlVariant(variant) && {
  backgroundColor: !isSelected && !isDisabled ? {
    hover: 'grey_400'
  } : 'transparent',
  borderRadius: variant === 'segmentedControlRounded' ? 'circle' : 'sm'
}), {}, {
  fontSize: getConditionalStyle(size, 'fontSize'),
  lineHeight: getConditionalStyle(size, 'lineHeight')
}, variant === 'default' && Tab_style_objectSpread(Tab_style_objectSpread(Tab_style_objectSpread(Tab_style_objectSpread({
  borderColor: indicatorColor === 'default' ? 'border' : 'transparent',
  borderStyle: 'solid'
}, placement === 'top' && {
  borderBottomWidth: 'sm'
}), placement === 'bottom' && {
  borderTopWidth: 'sm'
}), placement === 'right' && {
  borderLeftWidth: 'sm'
}), placement === 'left' && {
  borderRightWidth: 'sm'
})), variant !== 'unstyled' && Tab_style_objectSpread(Tab_style_objectSpread(Tab_style_objectSpread(Tab_style_objectSpread({
  position: 'relative',
  fontWeight: 'semibold',
  color: isSelected ? 'grey_1200' : {
    default: 'grey_800',
    hover: isDisabled ? undefined : 'grey_1200'
  },
  whiteSpace: 'nowrap',
  userSelect: isDisabled ? 'none' : undefined,
  flex: isStretched ? '1' : undefined
}, !isLink && {
  paddingY: '2'
}), (placement === 'top' || placement === 'bottom') && Tab_style_objectSpread(Tab_style_objectSpread(Tab_style_objectSpread(Tab_style_objectSpread({}, isSegmentedControlVariant(variant) && {
  paddingX: getConditionalStyle(size, 'paddingXSegmented')
}), variant === 'default' && {
  paddingX: getConditionalStyle(size, 'paddingXDefault')
}), isLink && {
  paddingX: '0'
}), {}, {
  textAlign: 'center'
})), placement === 'left' && {
  paddingX: isLink ? '0' : '4',
  textAlign: 'end'
}), placement === 'right' && {
  paddingX: isLink ? '0' : '4',
  textAlign: 'start'
}));
;// ../navigation/dist/esm/src/components/Tabs/navigation/dist/esm/src/components/Tabs/Tab/style.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../navigation/dist/esm/src/components/Tabs/Tab/style.ve.css.js.vanilla.css","source":"#H4sIAAAAAAAAE62UwW7jIBRF9/mKp8ymkYplY9dJiGY3f1F1gc1zjMoAApy4M+q/j2ycNE4TVSNV8sLA5bwH99rJPtRGVClrTN15cpBeVgrh7wLAdEFJjQyo7cEbJQVUitevu481YprGY2BAqO13i/dFMuGehfS8UiheRlTdOW8cA20C4UqZI4qRYnktwxuDNHkaxtZIHdARPKAOfpBrvKBmjFXYGBfbq40OqAOD5XLYW/H6de9MpwWpjRqK/WiaZlgJxjJIR40JwfyeBk7u2zC9K2zCWeMEOuK4kJ1nIHWLToa40hPfcmGODFJIssL2QBO6pWVpe3D7ij+kjxCfJM1pnmXF6nGQ5mvbQ5EUtKS3pMW63GzKUZrbHtY3JNvV0MFRitDOemoxnuJiyhovgzSaAa+8UV3AYfYPkVpgz4BkFzdK//NGKaU5Ha0S0lvF3xhUysRI3Kp7LpTPCp18INmQmrtW3D/uPG3FDD7a/U3kpxk5Ak7oO7Ga0DSKPvlzRpcz9NTnN7HXwEfqtUkf3+eV0HIhpN6TUcdgM3WBfSACa+N4NDZ+j0NQYhy2T9v19tdtLmvNAV105CvOKVafOc/cSU48KqwDip/L4Dpcvkxdf7396nhSxx/agbsHQqJms9ot3v8B86nZwgYFAAA="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const webpack_plugin_extracted = ({});
;// ../navigation/dist/esm/src/components/Tabs/Tab/style.ve.css.js

var LinkPadding = 'var(--gtcodb8)';
var defaultClass = 'gtcodb0';
var defaultSsrIndicatorBottom = 'gtcodb4 gtcodb2';
var defaultSsrIndicatorLeft = 'gtcodb6 gtcodb2';
var defaultSsrIndicatorRight = 'gtcodb5 gtcodb2';
var defaultSsrIndicatorTop = 'gtcodb3 gtcodb2';
var style_ve_css_isLink = 'gtcodb7';
var segmentedControlSsrIndicator = 'gtcodb1';
;// ../navigation/dist/esm/src/components/Tabs/Tab/helpers.js


const helpers_renderTabChild = _ref => {
  let {
    isLink
  } = _ref;
  return child => {
    if (isLink && /*#__PURE__*/(0,react.isValidElement)(child)) {
      return (0,render_children/* renderChildren */.s)(child, {
        tabIndex: -1
      });
    }
    return child;
  };
};
;// ../navigation/dist/esm/src/components/Tabs/Tab/index.js
const Tab_excluded = ["isLink", "isDisabled", "onClick", "children", "className", "tooltipContent", "tooltipProps", "dataTrackTag", "dataTrackValue"],
  _excluded2 = ["panelId", "placement", "variant", "isStretched", "isSelected", "id", "indicatorColor"];
function Tab_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Tab_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Tab_ownKeys(Object(t), !0).forEach(function (r) {
      Tab_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Tab_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Tab_defineProperty(e, r, t) {
  return (r = Tab_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Tab_toPropertyKey(t) {
  var i = Tab_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Tab_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tab_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = Tab_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function Tab_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}











const Tab = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      isLink = false,
      isDisabled = false,
      onClick,
      children,
      className,
      tooltipContent,
      tooltipProps,
      dataTrackTag = 'tab',
      dataTrackValue
    } = _ref,
    props = Tab_objectWithoutProperties(_ref, Tab_excluded);
  const {
      panelId,
      placement = 'top',
      variant = 'default',
      isStretched = false,
      isSelected,
      id,
      indicatorColor = 'default'
    } = props,
    restProps = Tab_objectWithoutProperties(props, _excluded2);
  const tabRef = (0,react.useRef)(null);
  const {
    setFocusedTab,
    isIndicatorRendered,
    size
  } = useTabContext();
  const ssrIndicatorClassName = "".concat(isSegmentedControlVariant(variant) ? SEGMENTED_CONTROL : variant).concat(SSR_INDICATOR).concat(variant === 'default' ? (0,lodash.startCase)(placement) : '');
  (0,react.useEffect)(() => {
    if (isSelected) {
      setFocusedTab(tabRef);
    }
  }, [isSelected, setFocusedTab]);
  (0,react.useImperativeHandle)(ref, () => tabRef.current);
  const tabContent = /*#__PURE__*/react.createElement(Box/* default */.A, Tab_objectSpread(Tab_objectSpread(Tab_objectSpread({
    ref: tabRef,
    as: "button",
    role: "tab",
    id: id,
    "aria-selected": isSelected ? 'true' : 'false',
    "aria-controls": panelId,
    "aria-disabled": isDisabled ? undefined : 'false',
    disabled: isDisabled,
    tabIndex: isSelected ? 0 : -1,
    "data-link": isLink ? 'true' : undefined,
    onClick: onClick,
    zIndex: "1",
    className: classnames_default()(defaultClass, {
      [Tab_style_ve_css_namespaceObject[ssrIndicatorClassName]]: isSelected && !isIndicatorRendered,
      [style_ve_css_isLink]: isLink
    }, className),
    style: (0,vanilla_extract_dynamic_esm/* assignInlineVars */.D)({
      [LinkPadding]: isLink && (placement === 'top' || placement === 'bottom') && size !== 'sm' ? theme_ve_css/* tokens */.L.spacing[8] : theme_ve_css/* tokens */.L.spacing[4]
    })
  }, style_getStylingProps(variant, placement, isLink, isDisabled, isStretched, isSelected, size, indicatorColor)), restProps), {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), react.Children.map(react.Children.toArray(children), helpers_renderTabChild({
    isLink
  })));
  return tooltipContent ? /*#__PURE__*/react.createElement(Tooltip/* default */.A, Tab_objectSpread({
    appendToBody: true,
    content: tooltipContent,
    anchorProps: isStretched ? {
      display: 'flex',
      flex: 1
    } : undefined,
    dataTrackTag: "tab_tooltip"
  }, tooltipProps), tabContent) : tabContent;
});
Tab.displayName = 'Tab';
Object.assign(Tab, {
  id: 'Tab'
});
/* harmony default export */ const Tabs_Tab = (Tab);
;
Tab.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tab"
};
;// ../navigation/dist/esm/src/components/Tabs/TabPanels/helpers.js



const renderTabPanelChild = _ref => {
  let {
    idPrefix,
    selectedIndex,
    isLazy,
    variant,
    tabsRef
  } = _ref;
  return (child, index) => {
    var _tabsRef$current$inde;
    if (! /*#__PURE__*/(0,react.isValidElement)(child)) {
      return null;
    }
    const {
      isDisabled,
      wasSelected
    } = (_tabsRef$current$inde = tabsRef.current[index]) !== null && _tabsRef$current$inde !== void 0 ? _tabsRef$current$inde : {};
    const isSelected = index === selectedIndex && !isDisabled;
    const isRendered = !(isDisabled && !wasSelected) && (!isLazy || isSelected || wasSelected);
    return (0,render_children/* renderChildren */.s)(child, {
      isSelected,
      isRendered,
      variant,
      id: tabPanelId(idPrefix, index),
      tabId: tabId(idPrefix, index)
    });
  };
};
;// ../navigation/dist/esm/src/components/Tabs/TabPanels/index.js
const TabPanels_excluded = ["children", "renderChildren", "dataTrackTag"];
function TabPanels_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TabPanels_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TabPanels_ownKeys(Object(t), !0).forEach(function (r) {
      TabPanels_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TabPanels_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TabPanels_defineProperty(e, r, t) {
  return (r = TabPanels_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TabPanels_toPropertyKey(t) {
  var i = TabPanels_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TabPanels_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function TabPanels_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = TabPanels_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function TabPanels_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}




const TabPanels = _ref => {
  let {
      children,
      renderChildren = renderTabPanelChild,
      dataTrackTag = 'tab_panels'
    } = _ref,
    props = TabPanels_objectWithoutProperties(_ref, TabPanels_excluded);
  const context = useTabContext();
  return /*#__PURE__*/react.createElement(Container/* default */.A, TabPanels_objectSpread({
    dataTrackTag: dataTrackTag
  }, props), react.Children.map(react.Children.toArray(children), renderChildren(context)));
};
TabPanels.displayName = 'TabPanels';
/* harmony default export */ const Tabs_TabPanels = (TabPanels);
;
TabPanels.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TabPanels"
};
;// ../navigation/dist/esm/src/components/Tabs/TabPanel/style.js
function TabPanel_style_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TabPanel_style_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TabPanel_style_ownKeys(Object(t), !0).forEach(function (r) {
      TabPanel_style_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TabPanel_style_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TabPanel_style_defineProperty(e, r, t) {
  return (r = TabPanel_style_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TabPanel_style_toPropertyKey(t) {
  var i = TabPanel_style_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TabPanel_style_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
const TabPanel_style_getStylingProps = variant => TabPanel_style_objectSpread({}, variant !== 'unstyled' && {
  padding: '2'
});
;// ../navigation/dist/esm/src/components/Tabs/TabPanel/index.js
const TabPanel_excluded = ["id", "children", "dataTrackTag", "dataTrackValue"],
  TabPanel_excluded2 = ["tabId", "isSelected", "isRendered", "variant"];
function TabPanel_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TabPanel_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TabPanel_ownKeys(Object(t), !0).forEach(function (r) {
      TabPanel_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TabPanel_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TabPanel_defineProperty(e, r, t) {
  return (r = TabPanel_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TabPanel_toPropertyKey(t) {
  var i = TabPanel_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TabPanel_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function TabPanel_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = TabPanel_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function TabPanel_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}



const TabPanel = _ref => {
  let {
      id,
      children,
      dataTrackTag = 'tab_panel',
      dataTrackValue
    } = _ref,
    props = TabPanel_objectWithoutProperties(_ref, TabPanel_excluded);
  const {
      tabId,
      isSelected,
      isRendered,
      variant
    } = props,
    restProps = TabPanel_objectWithoutProperties(props, TabPanel_excluded2);
  return isRendered ? /*#__PURE__*/react.createElement(Container/* default */.A, TabPanel_objectSpread(TabPanel_objectSpread(TabPanel_objectSpread({
    role: "tabpanel",
    id: id,
    "aria-labelledby": tabId,
    "aria-hidden": !isSelected ? 'true' : undefined,
    hidden: !isSelected
  }, TabPanel_style_getStylingProps(variant)), restProps), {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), children) : null;
};
TabPanel.displayName = 'TabPanel';
TabPanel.id = 'TabPanel';
/* harmony default export */ const Tabs_TabPanel = (TabPanel);
;
TabPanel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TabPanel"
};
;// ../disclosure/dist/esm/src/components/Collapsible/CollapsibleGroup/index.js



const NO_OPENED_PANEL = -1;
const CollapsibleGroup = _ref => {
  let {
    defaultExpandedIndex,
    children,
    renderChildren = render_children/* renderChildren */.s,
    dataTrackTag = 'collapsible_group',
    dataTrackValue
  } = _ref;
  const [expandedPanel, setExpandedPanel] = (0,react.useState)(defaultExpandedIndex);
  const childrenArray = react.Children.toArray(children);
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, react.Children.map(childrenArray, (child, index) => renderChildren(child, {
    expanded: expandedPanel === index,
    paddingBottom: expandedPanel === index && index !== childrenArray.length - 1 ? '6' : undefined,
    key: index,
    onToggle: expanded => {
      var _child$props;
      if (expanded) {
        setExpandedPanel(index);
      } else if (index === expandedPanel) {
        setExpandedPanel(NO_OPENED_PANEL);
      }
      if (typeof (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.onToggle) === 'function') {
        child.props.onToggle(expanded);
      }
    }
  })));
};
CollapsibleGroup.displayName = 'CollapsibleGroup';
/* harmony default export */ const Collapsible_CollapsibleGroup = (CollapsibleGroup);
;
CollapsibleGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollapsibleGroup"
};
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/index.js
var Collapsible = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/index.js");
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeader/index.js
var CollapsibleHeader = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeader/index.js");
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeaderChevron/index.js
var CollapsibleHeaderChevron = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeaderChevron/index.js");
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/CollapsibleContent/index.js
var CollapsibleContent = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleContent/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../forms/dist/esm/src/components/Select/index.js + 3 modules
var Select = __webpack_require__("../forms/dist/esm/src/components/Select/index.js");
// EXTERNAL MODULE: ../forms/dist/esm/src/components/Select/Option/index.js
var Option = __webpack_require__("../forms/dist/esm/src/components/Select/Option/index.js");
;// ../overlay/dist/esm/src/components/Drawer/DrawerContext/index.js

const DrawerContext = /*#__PURE__*/(0,react.createContext)({
  isOpen: false,
  close: () => undefined,
  open: () => undefined
});
const useDrawerContext = () => (0,react.useContext)(DrawerContext);
;// ../overlay/dist/esm/src/components/Drawer/hooks/useFocusTrap/index.js


/**
 * This hook focuses on `element` in order to make sure the focus will be moved to the drawer when it's opened.
 * This is for accessibility, e.g. pressing on tab will not jump between elements in the background
 *
 * @param {UseFocusTrapProps} props
 * @param {boolean} props.isOpen Flag that indicates if the drawer is open
 * @param {HTMLElement | null} props.element The drawer's element to focus on
 * @param {(() => void) | undefined} props.onClose Function to invoke on close of the drawer
 * @return {() => void} Return method `close` to close the drawer
 */
const useFocusTrap = _ref => {
  let {
    isOpen,
    element,
    onClose = lodash.noop
  } = _ref;
  const hasOpened = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    if (element && isOpen && !hasOpened.current) {
      hasOpened.current = true;
      element.focus();
    }
  }, [element, isOpen]);
  const close = () => {
    hasOpened.current = false;
    onClose();
  };
  return {
    close
  };
};
;// ../overlay/dist/esm/src/components/Drawer/hooks/useScrollingHandler/index.js


/**
 * This hook encapsulates the logic of scrolling in regards to drawer component - mouse scroll wheel
 * should scroll the drawer itself, and preserving the scrolling location of the drawer between reopening the drawer
 *
 * @param {UseScrollingHandlerProps} props
 * @param {boolean} props.isOpen is the drawer open
 * @param {React.MutableRefObject<HTMLDivElement | undefined>} props.contentRef reference to the drawer's content element
 * @param {boolean} props.preserveDrawerScrollLocation should preserve the drawer's scrolling location when reopening it
 * @return {UseScrollingHandlerReturnedValue} Returns `isContentScrollable` flag to indicate if the content is scrollable
 */
const useScrollingHandler = _ref => {
  let {
    isOpen,
    contentRef,
    preserveDrawerScrollLocation
  } = _ref;
  const idRef = (0,react.useRef)((0,lodash.uniqueId)());
  const id = idRef.current;
  const [isContentScrollable, setIsContentScrollable] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    document.body.classList.toggle("fvrr-drawer-opened-".concat(id), isOpen);
    return () => {
      document.body.classList.toggle("fvrr-drawer-opened-".concat(id), false);
    };
  }, [isOpen, id]);
  (0,react.useEffect)(() => {
    if (!preserveDrawerScrollLocation && !isOpen && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [preserveDrawerScrollLocation, contentRef, isOpen]);
  (0,react.useEffect)(() => {
    setTimeout(() => {
      if (!isOpen) {
        return;
      }
      if (contentRef.current && contentRef.current.scrollHeight > contentRef.current.clientHeight) {
        setIsContentScrollable(true);
      }
    });
  }, [contentRef, isOpen]);
  return {
    isContentScrollable
  };
};
;// ../overlay/dist/esm/src/components/Drawer/index.js




const Drawer = _ref => {
  let {
    autoOpen = false,
    isOpen: isOpenControllable,
    preserveDrawerScrollLocation = false,
    onClose: onControllableClose = () => undefined,
    onOpen: onControllableOpen = () => undefined,
    children
  } = _ref;
  const [innerIsOpen, setInnerIsOpen] = react.useState(autoOpen);
  const isOpen = isOpenControllable !== null && isOpenControllable !== void 0 ? isOpenControllable : innerIsOpen;
  const contentRef = (0,react.useRef)();
  const drawerRef = (0,react.useRef)(null);
  const hasOpened = (0,react.useRef)(false);
  const onClose = react.useCallback(() => {
    setInnerIsOpen(false);
    onControllableClose();
  }, [onControllableClose]);
  const onOpen = react.useCallback(() => {
    setInnerIsOpen(true);
    onControllableOpen();
  }, [onControllableOpen]);
  if (autoOpen && isOpenControllable) {
    throw new Error("Drawer: Don't use both autoOpen and isOpen together, autoOpen is only meant to be used with the trigger component");
  }
  (0,react.useEffect)(() => {
    if (drawerRef.current && isOpen && !hasOpened.current) {
      hasOpened.current = true;
      drawerRef.current.focus();
    }
  }, [isOpen]);
  const {
    close
  } = useFocusTrap({
    isOpen,
    element: drawerRef.current,
    onClose
  });
  const {
    isContentScrollable
  } = useScrollingHandler({
    isOpen,
    contentRef,
    preserveDrawerScrollLocation
  });
  return /*#__PURE__*/react.createElement(DrawerContext.Provider, {
    value: {
      isOpen,
      open: onOpen,
      close,
      contentRef,
      isContentScrollable
    }
  }, children);
};
Drawer.displayName = 'Drawer';
/* harmony default export */ const components_Drawer = (Drawer);
;
Drawer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Drawer"
};
;// ../overlay/dist/esm/src/components/Drawer/DrawerTrigger/index.js


const DrawerTrigger = _ref => {
  let {
    children,
    as: Element = 'span',
    dataTestId,
    dataTrackTag = 'drawer_trigger',
    dataTrackValue
  } = _ref;
  const {
    open
  } = useDrawerContext();
  return /*#__PURE__*/react.createElement(Element, {
    onClick: open,
    "data-testid": dataTestId,
    "data-track-tag": dataTrackTag,
    "data-track-value": dataTrackValue
  }, children);
};
DrawerTrigger.displayName = 'DrawerTrigger';
/* harmony default export */ const Drawer_DrawerTrigger = (DrawerTrigger);
;
DrawerTrigger.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DrawerTrigger"
};
// EXTERNAL MODULE: ../transition/dist/esm/src/components/Fade/index.js + 1 modules
var Fade = __webpack_require__("../transition/dist/esm/src/components/Fade/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/components/Slide/index.js + 1 modules
var Slide = __webpack_require__("../transition/dist/esm/src/components/Slide/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/components/Portal/index.js + 1 modules
var Portal = __webpack_require__("../ui_utils/dist/esm/src/components/Portal/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js
var useIsomorphicLayoutEffect = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/hooks/useExitOnEscape/index.js
var useExitOnEscape = __webpack_require__("../overlay/dist/esm/src/hooks/useExitOnEscape/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Overlay/index.js + 1 modules
var Overlay = __webpack_require__("../overlay/dist/esm/src/components/Overlay/index.js");
;// ../overlay/dist/esm/src/components/Drawer/DrawerContent/constants.js
const HEADER_APPROX_HEIGHT = '76px';
const SIDE_PADDING = "60px";
const DIALOG_MAX_WIDTH = {
  sm: '375px',
  md: '480px',
  lg: '600px',
  xl: '900px'
};
;// ../overlay/dist/esm/src/components/Drawer/overlay/dist/esm/src/components/Drawer/DrawerContent/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../overlay/dist/esm/src/components/Drawer/DrawerContent/styles.ve.css.js.vanilla.css","source":"QHN1cHBvcnRzIChoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUpIHsKICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4OTlweCkgewogICAgLmVyZW9xbjAgewogICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7CiAgICB9CiAgfQp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const _vanilla_extract_webpack_plugin_extracted = ({});
;// ../overlay/dist/esm/src/components/Drawer/DrawerContent/styles.ve.css.js

var fullScreenSupportsStyles = 'ereoqn0';
;// ../overlay/dist/esm/src/components/Drawer/DrawerContent/index.js











const DrawerContent = _ref => {
  let {
    position = 'right',
    initialFocusRef,
    size = 'md',
    closeOnOverlayClick = true,
    renderWhenClosed = false,
    appendToBody = true,
    isFullScreen = false,
    closeOnEscapeKey = true,
    children,
    overlayTestId,
    onAnimationStart,
    onAnimationEnd,
    height = '100%',
    dataTrackTag = 'drawer',
    dataTrackValue
  } = _ref;
  const {
    isOpen,
    close
  } = useDrawerContext();
  const drawerRef = react.useRef(null);
  const hasOpened = react.useRef(false);
  react.useEffect(() => {
    if (drawerRef.current && isOpen && !hasOpened.current) {
      hasOpened.current = true;
      drawerRef.current.focus();
    }
  }, [isOpen]);
  (0,useIsomorphicLayoutEffect/* default */.A)(() => {
    if (drawerRef.current && isOpen) {
      if (initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current) {
        initialFocusRef.current.focus();
        return;
      }
      drawerRef.current.focus();
    }
  }, [initialFocusRef, isOpen, drawerRef]);
  (0,useExitOnEscape/* useExitOnEscape */.k)({
    enabled: closeOnEscapeKey,
    close,
    isOpen
  });
  let dialogHeight = height;
  let dialogWidth = '100vw';
  if (isFullScreen) {
    if (['left', 'right'].includes(position)) {
      dialogWidth = {
        default: "100vw",
        md: "calc(100vw - ".concat(SIDE_PADDING, ")"),
        lg: '1100px'
      };
    } else {
      dialogHeight = {
        default: '100vh',
        md: "calc(100vh - ".concat(HEADER_APPROX_HEIGHT, ")")
      };
    }
  }
  const PortalOrFragment = appendToBody ? Portal/* default */.A : react.Fragment;
  return /*#__PURE__*/react.createElement(PortalOrFragment, null, /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "relative",
    zIndex: "overlay"
  }, /*#__PURE__*/react.createElement(Fade/* default */.A, {
    in: isOpen,
    delay: {
      exit: 'fast2'
    },
    unmountOnExit: !renderWhenClosed
  }, /*#__PURE__*/react.createElement(Overlay/* default */.A, {
    zIndex: "-1",
    dataTestId: overlayTestId,
    lockBodyScroll: isOpen,
    dataTrackTag: "drawer_overlay",
    onClick: closeOnOverlayClick ? close : () => undefined
  })), /*#__PURE__*/react.createElement(Slide/* default */.A, {
    in: isOpen,
    direction: position,
    duration: {
      enter: 'moderate2',
      exit: 'moderate1'
    },
    unmountOnExit: !renderWhenClosed,
    onAnimationStart: onAnimationStart,
    onAnimationEnd: onAnimationEnd
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    as: "article",
    gap: "0",
    direction: "column",
    backgroundColor: "white",
    "aria-modal": true,
    role: "dialog",
    className: classnames_default()({
      [fullScreenSupportsStyles]: isFullScreen
    }),
    ref: drawerRef,
    tabIndex: -1,
    height: dialogHeight,
    maxWidth: isFullScreen ? dialogWidth : DIALOG_MAX_WIDTH[size],
    borderBottomLeftRadius: position === 'top' ? 'xl' : undefined,
    borderBottomRightRadius: position === 'top' ? 'xl' : undefined,
    borderTopLeftRadius: position === 'bottom' ? 'xl' : undefined,
    borderTopRightRadius: position === 'bottom' ? 'xl' : undefined,
    borderRadius: isFullScreen ? 'none' : undefined,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, children))));
};
DrawerContent.displayName = 'DrawerContent';
/* harmony default export */ const Drawer_DrawerContent = (DrawerContent);
;
DrawerContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DrawerContent"
};
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js
var excludeChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
;// ../overlay/dist/esm/src/components/Drawer/constants.js
/**
 * Possible drawer positions.
 */const DRAWER_POSITIONS = {
  RIGHT: 'right',
  LEFT: 'left',
  TOP: 'top',
  BOTTOM: 'bottom'
};
/**
 * Possible drawer size.
 */
const DRAWER_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
};
/**
 * Data test id to query the overlay in RTL tests
 */
const OVERLAY_DATA_TEST_ID = 'overlay-data-test-id';
/**
 * Drawer close button id to query the element in header
 */
const DRAWER_CLOSE_BTN_ID = 'DrawerCloseBtnId';
;// ../overlay/dist/esm/src/components/Drawer/DrawerHeader/constants.js
const DEFAULT_PADDING_X = {
  default: '6',
  sm: '8'
};
const DEFAULT_PADDING_TOP = {
  default: '4',
  sm: '6'
};
const DEFAULT_PADDING_BOTTOM = '4';
;// ../overlay/dist/esm/src/components/Drawer/DrawerHeader/index.js
const DrawerHeader_excluded = ["children", "paddingX", "paddingTop", "paddingBottom", "dataTrackTag"];
function DrawerHeader_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function DrawerHeader_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? DrawerHeader_ownKeys(Object(t), !0).forEach(function (r) {
      DrawerHeader_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DrawerHeader_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function DrawerHeader_defineProperty(e, r, t) {
  return (r = DrawerHeader_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function DrawerHeader_toPropertyKey(t) {
  var i = DrawerHeader_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function DrawerHeader_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function DrawerHeader_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = DrawerHeader_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function DrawerHeader_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}






const DrawerHeader = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      paddingX = DEFAULT_PADDING_X,
      paddingTop = DEFAULT_PADDING_TOP,
      paddingBottom = DEFAULT_PADDING_BOTTOM,
      dataTrackTag = 'drawer_header'
    } = _ref,
    restProps = DrawerHeader_objectWithoutProperties(_ref, DrawerHeader_excluded);
  const closeButton = (0,findChildByType/* findChildByType */.B)(children, DRAWER_CLOSE_BTN_ID);
  const restOfChildren = (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, DRAWER_CLOSE_BTN_ID);
  return /*#__PURE__*/react.createElement(Stack/* default */.A, DrawerHeader_objectSpread({
    as: "header",
    alignItems: "center",
    justifyContent: "spaceBetween",
    borderBottomWidth: "sm",
    borderStyle: "solid",
    borderColor: "border",
    paddingX: paddingX,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    ref: ref,
    dataTrackTag: dataTrackTag
  }, restProps), /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h4",
    flex: "1"
  }, restOfChildren), closeButton);
});
DrawerHeader.displayName = 'DrawerHeader';
/* harmony default export */ const Drawer_DrawerHeader = (DrawerHeader);
;
DrawerHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DrawerHeader"
};
// EXTERNAL MODULE: ../button/dist/esm/src/components/TimesButton/index.js
var TimesButton = __webpack_require__("../button/dist/esm/src/components/TimesButton/index.js");
;// ../overlay/dist/esm/src/components/Drawer/DrawerCloseButton/index.js





const DrawerCloseButton = _ref => {
  let {
    onClick,
    dataTrackTag = 'drawer_close_button',
    dataTrackValue
  } = _ref;
  const {
    close
  } = useDrawerContext();
  const ref = (0,react.useRef)(null);
  const getTarget = (0,react.useCallback)(() => ref.current, [ref]);
  const onTrigger = () => {
    onClick === null || onClick === void 0 || onClick();
    close();
  };
  (0,useKeyboardShortcuts/* default */.A)([{
    trigger: 'enter',
    handler: onTrigger
  }, {
    trigger: 'space',
    handler: onTrigger
  }], getTarget);
  return /*#__PURE__*/react.createElement(TimesButton/* default */.A, {
    ref: ref,
    size: "md",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    onClick: onTrigger
  });
};
DrawerCloseButton.displayName = 'DrawerCloseButton';
Object.assign(DrawerCloseButton, {
  id: DRAWER_CLOSE_BTN_ID
});
/* harmony default export */ const Drawer_DrawerCloseButton = (DrawerCloseButton);
;
DrawerCloseButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DrawerCloseButton"
};
;// ../overlay/dist/esm/src/components/Drawer/DrawerBody/constants.js
const constants_DEFAULT_PADDING_X = {
  default: '6',
  sm: '8'
};
const DEFAULT_PADDING_Y = {
  default: '6',
  sm: '8'
};
;// ../overlay/dist/esm/src/components/Drawer/DrawerBody/index.js
const DrawerBody_excluded = ["noPadding", "paddingX", "paddingY", "children", "dataTrackTag"];
function DrawerBody_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function DrawerBody_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? DrawerBody_ownKeys(Object(t), !0).forEach(function (r) {
      DrawerBody_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DrawerBody_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function DrawerBody_defineProperty(e, r, t) {
  return (r = DrawerBody_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function DrawerBody_toPropertyKey(t) {
  var i = DrawerBody_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function DrawerBody_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function DrawerBody_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = DrawerBody_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function DrawerBody_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}




const DrawerBody = _ref => {
  let {
      noPadding = false,
      paddingX = constants_DEFAULT_PADDING_X,
      paddingY = DEFAULT_PADDING_Y,
      children,
      dataTrackTag = 'drawer_body'
    } = _ref,
    restProps = DrawerBody_objectWithoutProperties(_ref, DrawerBody_excluded);
  const {
    contentRef
  } = useDrawerContext();
  return /*#__PURE__*/react.createElement(Container/* default */.A, DrawerBody_objectSpread({
    overflowY: "auto",
    flexGrow: 1,
    paddingX: noPadding ? undefined : paddingX,
    paddingY: noPadding ? undefined : paddingY,
    ref: contentRef,
    dataTrackTag: dataTrackTag
  }, restProps), children);
};
DrawerBody.displayName = 'DrawerBody';
/* harmony default export */ const Drawer_DrawerBody = (DrawerBody);
;
DrawerBody.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DrawerBody"
};
;// ../overlay/dist/esm/src/components/Drawer/DrawerFooter/constants.js
const DrawerFooter_constants_DEFAULT_PADDING_X = {
  default: '6',
  sm: '8'
};
const constants_DEFAULT_PADDING_Y = {
  default: '4',
  sm: '6'
};
;// ../overlay/dist/esm/src/components/Drawer/DrawerFooter/index.js
const DrawerFooter_excluded = ["children", "paddingX", "paddingY", "dataTrackTag"];
function DrawerFooter_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function DrawerFooter_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? DrawerFooter_ownKeys(Object(t), !0).forEach(function (r) {
      DrawerFooter_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DrawerFooter_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function DrawerFooter_defineProperty(e, r, t) {
  return (r = DrawerFooter_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function DrawerFooter_toPropertyKey(t) {
  var i = DrawerFooter_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function DrawerFooter_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function DrawerFooter_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = DrawerFooter_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function DrawerFooter_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}



const DrawerFooter = _ref => {
  let {
      children,
      paddingX = DrawerFooter_constants_DEFAULT_PADDING_X,
      paddingY = constants_DEFAULT_PADDING_Y,
      dataTrackTag = 'drawer_footer'
    } = _ref,
    restProps = DrawerFooter_objectWithoutProperties(_ref, DrawerFooter_excluded);
  return /*#__PURE__*/react.createElement(Container/* default */.A, DrawerFooter_objectSpread({
    as: "footer",
    position: "sticky",
    borderTopWidth: "sm",
    borderStyle: "solid",
    borderColor: "border",
    paddingX: paddingX,
    paddingY: paddingY,
    dataTrackTag: dataTrackTag
  }, restProps), children);
};
DrawerFooter.displayName = 'DrawerFooter';
/* harmony default export */ const Drawer_DrawerFooter = (DrawerFooter);
;
DrawerFooter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DrawerFooter"
};
;// ../penta_playground/src/components/DimaTest1.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function useMediaQuery(query) {
  const [matches, setMatches] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = e => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
}













function UpgradeDrawer() {
  const [selectedPlan, setSelectedPlan] = (0,react.useState)(null);
  return /*#__PURE__*/react.createElement(components_Drawer, null, /*#__PURE__*/react.createElement(Drawer_DrawerTrigger, null, /*#__PURE__*/react.createElement(TextButton/* default */.A, {
    variant: "underline"
  }, "Upgrade to Seller Plus")), /*#__PURE__*/react.createElement(Drawer_DrawerContent, {
    position: "right",
    size: "lg"
  }, /*#__PURE__*/react.createElement(Drawer_DrawerHeader, null, "Upgrade to Seller Plus", /*#__PURE__*/react.createElement(Drawer_DrawerCloseButton, null)), /*#__PURE__*/react.createElement(Drawer_DrawerBody, null, /*#__PURE__*/react.createElement(ChoiceGroupWithRef/* default */.A, {
    direction: "column",
    value: selectedPlan,
    onChange: setSelectedPlan
  }, /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "standard"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, "Seller Plus Standard"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Get advanced analytics, priority support, and more tools to grow your business."))), /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "premium"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, "Seller Plus Premium"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Everything in Standard plus a dedicated Success Manager and exclusive features."))))), /*#__PURE__*/react.createElement(Drawer_DrawerFooter, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    disabled: !selectedPlan,
    size: "md"
  }, "Continue"))));
}
function ProfileHeader() {
  const isMedium = useMediaQuery('(max-width: 1159px)');
  const isSmall = useMediaQuery('(max-width: 599px)');
  if (isSmall) {
    return /*#__PURE__*/react.createElement(Card/* default */.A, {
      variant: "default",
      borderColor: "border",
      padding: "6",
      borderRadius: "xl"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "column",
      gap: "4"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      gap: "4",
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
      username: "andywolf",
      size: "lg"
    }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
      src: "https://picsum.photos/48/48"
    })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "column",
      gap: "0"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      gap: "2",
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
      as: "h2",
      size: "h_sm"
    }, "Andy Wolf"), /*#__PURE__*/react.createElement(components_VettedProBadge, {
      variant: "default"
    })), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      color: "bodySecondary"
    }, "@andush12"))), /*#__PURE__*/react.createElement(components_NewSellerBadge, null), /*#__PURE__*/react.createElement(UpgradeDrawer, null), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      fontWeight: "bold"
    }, "Personal Assistant: Active"), /*#__PURE__*/react.createElement(Button/* default */.A, {
      size: "sm",
      variant: "outline"
    }, /*#__PURE__*/react.createElement(CalendarAvailable/* default */.A, null), "Available")));
  }
  if (isMedium) {
    return /*#__PURE__*/react.createElement(Card/* default */.A, {
      variant: "default",
      borderColor: "border",
      padding: "0",
      borderRadius: "xl"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "column",
      gap: "0"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      justifyContent: "spaceBetween",
      alignItems: "center",
      paddingLeft: "8",
      paddingRight: "6",
      paddingY: "5"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      gap: "4",
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
      username: "andywolf",
      size: "lg"
    }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
      src: "https://picsum.photos/48/48"
    })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "column",
      gap: "0"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      gap: "2",
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
      as: "h2",
      size: "h_sm"
    }, "Andy Wolf"), /*#__PURE__*/react.createElement(components_VettedProBadge, {
      variant: "default"
    })), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      color: "bodySecondary"
    }, "@andush12"))), /*#__PURE__*/react.createElement(Button/* default */.A, {
      size: "sm",
      intent: "primary",
      variant: "ghost"
    }, /*#__PURE__*/react.createElement(CalendarAvailable/* default */.A, null), "Available")), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      gap: "5",
      alignItems: "center",
      paddingLeft: "8",
      paddingRight: "6",
      paddingY: "4"
    }, /*#__PURE__*/react.createElement(components_NewSellerBadge, null), /*#__PURE__*/react.createElement(Divider/* default */.A, {
      direction: "vertical",
      borderWidth: "sm",
      height: "32px"
    }), /*#__PURE__*/react.createElement(UpgradeDrawer, null), /*#__PURE__*/react.createElement(Divider/* default */.A, {
      direction: "vertical",
      borderWidth: "sm",
      height: "32px"
    }), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      fontWeight: "bold"
    }, "Personal Assistant: Active"))));
  }
  return /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "default",
    borderColor: "border",
    padding: "0",
    borderRadius: "xl"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "spaceBetween",
    alignItems: "center",
    paddingLeft: "8",
    paddingRight: "6",
    paddingY: "5"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "5",
    alignItems: "center",
    overflow: "hidden",
    paddingRight: "5"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "andywolf",
    size: "lg"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: "https://picsum.photos/48/48"
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2",
    size: "h_sm"
  }, "Andy Wolf"), /*#__PURE__*/react.createElement(components_VettedProBadge, {
    variant: "default"
  })), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "@andush12"))), /*#__PURE__*/react.createElement(Divider/* default */.A, {
    direction: "vertical",
    borderWidth: "sm",
    height: "32px"
  }), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_NewSellerBadge, null)), /*#__PURE__*/react.createElement(Divider/* default */.A, {
    direction: "vertical",
    borderWidth: "sm",
    height: "32px"
  }), /*#__PURE__*/react.createElement(UpgradeDrawer, null), /*#__PURE__*/react.createElement(Divider/* default */.A, {
    direction: "vertical",
    borderWidth: "sm",
    height: "32px"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "Personal Assistant: Active")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "4",
    alignItems: "center",
    height: "48px"
  }, /*#__PURE__*/react.createElement(Divider/* default */.A, {
    direction: "vertical",
    borderWidth: "sm",
    height: "32px"
  }), /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "sm",
    intent: "primary",
    variant: "ghost"
  }, /*#__PURE__*/react.createElement(CalendarAvailable/* default */.A, null), "Available"))));
}
const TYPE_ICONS = {
  MESSAGE: /*#__PURE__*/react.createElement(Envelope/* default */.A, {
    size: "sm"
  }),
  ORDER: /*#__PURE__*/react.createElement(OrderBox/* default */.A, {
    size: "sm"
  }),
  BRIEF: /*#__PURE__*/react.createElement(Brief/* default */.A, {
    size: "sm"
  })
};
function MessageCard() {
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "{Mike22}",
    size: "smd"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: "https://picsum.photos/36/36"
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, '{Mike22}', " sent you a first message"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "10 minutes ago")), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, "\"Loved working with you last time and I have a new project for you. Please let me know if you'll be available so...\""), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(ProClientTier/* default */.A, {
    size: "sm"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Pro Gold")), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "\xB7"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "New lead"))));
}
function OrderCard() {
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "{Josh80}",
    size: "smd"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: "https://picsum.photos/37/37"
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, "Your delivery for ", '{Josh80}', " is now very late"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Clock/* default */.A, {
    size: "sm",
    color: "red_1000"
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "b_sm",
    color: "red_1000"
  }, "3 hours late")), /*#__PURE__*/react.createElement(Status/* default */.A, {
    type: "error"
  }, "LATE")), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, "Design vintage, colorful, playful, fun logo and branding | $25-$50/hour"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Repeat client"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "\xB7"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Hourly"))));
}
function BriefCard() {
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "JasonF45",
    size: "smd"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: "https://picsum.photos/38/38"
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, "JasonF45's brief is waiting for your custom offer"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Posted now")), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, "\"Film festival website design\" | $25-$50/hour"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(ProClientTier/* default */.A, {
    size: "sm"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Pro Platinum")), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "\xB7"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "You were invited by the client"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "\xB7"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Be the first to respond"))));
}
function FromFiverrCard() {
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundColor: '#222325',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/react.createElement(Fiverr/* default */.A, {
    size: "sm",
    color: "white"
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, "Resend your Pro application"), /*#__PURE__*/react.createElement(Status/* default */.A, {
    type: "error"
  }, "AT RISK")), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, "Some details might be missing")));
}
const ACTIVITY_TYPES = ['MESSAGE', 'ORDER', 'BRIEF', 'FROM FIVERR'];
const ACTIVITY_CONTENT = {
  MESSAGE: /*#__PURE__*/react.createElement(MessageCard, null),
  ORDER: /*#__PURE__*/react.createElement(OrderCard, null),
  BRIEF: /*#__PURE__*/react.createElement(BriefCard, null),
  'FROM FIVERR': /*#__PURE__*/react.createElement(FromFiverrCard, null)
};
function ActivityCard(_ref) {
  let {
    type
  } = _ref;
  const [hovered, setHovered] = (0,react.useState)(false);
  return /*#__PURE__*/react.createElement("div", {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      backgroundColor: hovered ? '#f5f5f5' : 'transparent',
      transition: 'background-color 320ms ease',
      borderRadius: '12px'
    }
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "default",
    borderColor: "transparent",
    padding: "6",
    borderRadius: "xl"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, TYPE_ICONS[type], /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "b_xs",
    fontWeight: "bold",
    color: "grey_900"
  }, type)), ACTIVITY_CONTENT[type])));
}
function FormFields() {
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "5",
    width: "100%"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1.5",
    flex: "1",
    minWidth: "0px"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "Label"), /*#__PURE__*/react.createElement(Input/* default */.A, {
    placeholder: "Lorem ipsum"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, "This is a hint")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1",
    flex: "1",
    minWidth: "0px"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "Label"), /*#__PURE__*/react.createElement(Select/* default */.A, {
    placeholder: "Some placeholder",
    fullWidth: true
  }, /*#__PURE__*/react.createElement(Option/* default */.A, {
    value: "opt1"
  }, "Option 1"), /*#__PURE__*/react.createElement(Option/* default */.A, {
    value: "opt2"
  }, "Option 2"), /*#__PURE__*/react.createElement(Option/* default */.A, {
    value: "opt3"
  }, "Option 3"))));
}
function CollapsibleSections() {
  return /*#__PURE__*/react.createElement(Collapsible_CollapsibleGroup, {
    defaultExpandedIndex: 1
  }, /*#__PURE__*/react.createElement(Collapsible/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react.createElement(CollapsibleHeader/* default */.A, {
    paddingY: "4"
  }, "Section title 1", /*#__PURE__*/react.createElement(CollapsibleHeaderChevron/* default */.A, null)), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "More options",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, null, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, "Section 1 content"))), /*#__PURE__*/react.createElement(Collapsible/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react.createElement(CollapsibleHeader/* default */.A, {
    paddingY: "4"
  }, "Section title 2", /*#__PURE__*/react.createElement(CollapsibleHeaderChevron/* default */.A, null)), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "More options",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, {
    paddingBottom: "6"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, "Lorem ipsum dolor sit amet, ex ius eruditi docendi principes, ut nihil gloriatur sea. Has in prima altera, facer inermis atomorum nam id. Vel ex fugit sadipscing, ne illud dolore temporibus mei. Nec unum equidem percipitur ex, no sint eligendi persecuti pro."))), /*#__PURE__*/react.createElement(Collapsible/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react.createElement(CollapsibleHeader/* default */.A, {
    paddingY: "4"
  }, "Section title 3", /*#__PURE__*/react.createElement(CollapsibleHeaderChevron/* default */.A, null)), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "More options",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, null, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, "Section 3 content"))));
}
function ActionCard() {
  return /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "default",
    borderColor: "border",
    padding: "6",
    borderRadius: "xl"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "6"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "spaceBetween",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h3",
    size: "h_sm"
  }, "Title"), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "More options",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    color: "bodyPrimary"
  }, "Content Slot Tip: Don't detach Build your own local component and then swap with your component via the instance menu"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "md"
  }, "Action")));
}
function ProfileStrengthCard() {
  const [score, setScore] = (0,react.useState)(7);
  const [fading, setFading] = (0,react.useState)(false);
  const isSmall = useMediaQuery('(max-width: 599px)');
  const maxScore = 13;
  const percent = Math.round(score / maxScore * 100);
  const handleComplete = () => {
    if (score >= 9) return;
    setFading(true);
    setTimeout(() => {
      setScore(prev => Math.min(prev + 1, 9));
      setFading(false);
    }, 300);
  };
  return /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "default",
    borderColor: "border",
    padding: "6",
    borderRadius: "xl"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "spaceBetween",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h3",
    size: "h_md"
  }, "Profile strength"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "baseline"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.3s ease-in-out'
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "h_lg",
    fontWeight: "bold",
    color: "grey_1200"
  }, score)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "b_lg",
    color: "grey_1200"
  }, "/13"))), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    color: "bodyPrimary"
  }, "A strong profile helps you stand out and attract better opportunities."), /*#__PURE__*/react.createElement(ProgressLine/* default */.A, {
    percent: percent
  }), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline",
    size: "md",
    onClick: handleComplete,
    fullWidth: isSmall
  }, "Complete profile")));
}
function MetricTile(_ref2) {
  let {
    label,
    value,
    change,
    positive
  } = _ref2;
  return /*#__PURE__*/react.createElement(Card_LinkCard, {
    href: "#",
    padding: "4",
    color: "grey_1200",
    borderRadius: "xl",
    flex: "1",
    minWidth: "0px"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, label), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "h_md",
    fontWeight: "bold",
    color: "grey_1200"
  }, value), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "0.5",
    alignItems: "center"
  }, positive ? /*#__PURE__*/react.createElement(TrendUp/* default */.A, {
    size: "sm",
    color: "green_1000"
  }) : /*#__PURE__*/react.createElement(TrendDown/* default */.A, {
    size: "sm",
    color: "red_1000"
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "b_sm",
    fontWeight: "bold",
    color: positive ? 'green_1000' : 'red_1000'
  }, change)))));
}
const METRICS = [{
  label: 'Impressions',
  value: '12.6K',
  change: '2%',
  positive: true
}, {
  label: 'Clicks',
  value: '920',
  change: '2%',
  positive: true
}, {
  label: 'Total orders',
  value: '8',
  change: '2%',
  positive: false
}, {
  label: 'Repeat clients',
  value: '4',
  change: '5%',
  positive: true
}, {
  label: 'Fiverr Ads orders',
  value: '4',
  change: '2%',
  positive: true
}, {
  label: 'Earnings',
  value: '$1,300',
  change: '3%',
  positive: true
}];
function PerformanceCard() {
  return /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "default",
    borderColor: "border",
    padding: "6",
    borderRadius: "xl"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h3",
    size: "h_md"
  }, "Track your performance"), /*#__PURE__*/react.createElement(Select/* default */.A, {
    placeholder: "Select period",
    defaultValue: {
      select: '30d'
    }
  }, /*#__PURE__*/react.createElement(Option/* default */.A, {
    value: "7d"
  }, "Last 7 days"), /*#__PURE__*/react.createElement(Option/* default */.A, {
    value: "30d"
  }, "Last 30 days"), /*#__PURE__*/react.createElement(Option/* default */.A, {
    value: "90d"
  }, "Last 90 days")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "3"
  }, [0, 2, 4].map(startIdx => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    key: startIdx,
    direction: "row",
    gap: "3"
  }, /*#__PURE__*/react.createElement(MetricTile, METRICS[startIdx]), /*#__PURE__*/react.createElement(MetricTile, METRICS[startIdx + 1])))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "flexStart"
  }, /*#__PURE__*/react.createElement(TextButton/* default */.A, null, "View more analytics"))));
}
const SMALL_CHOICE_ITEMS = [{
  value: 'all',
  icon: /*#__PURE__*/react.createElement(Categories/* default */.A, {
    size: "md"
  }),
  label: 'All',
  count: '(1)'
}, {
  value: 'orders',
  icon: /*#__PURE__*/react.createElement(OrderBox/* default */.A, {
    size: "md"
  }),
  label: 'Orders',
  count: '(2)'
}, {
  value: 'messages',
  icon: /*#__PURE__*/react.createElement(Envelope/* default */.A, {
    size: "md"
  }),
  label: 'Messages',
  count: '(1)'
}, {
  value: 'briefs',
  icon: /*#__PURE__*/react.createElement(Brief/* default */.A, {
    size: "md"
  }),
  label: 'Briefs',
  count: '(0)'
}];
function SmallChoiceGroup(_ref3) {
  let {
    value,
    onChange
  } = _ref3;
  const containerRef = (0,react.useRef)(null);
  const [itemWidth, setItemWidth] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-choice-item]');
    items.forEach(item => {
      item.style.width = 'auto';
    });
    let max = 0;
    items.forEach(item => {
      max = Math.max(max, item.offsetWidth);
    });
    setItemWidth(max);
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    ref: containerRef,
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none'
    }
  }, SMALL_CHOICE_ITEMS.map(item => {
    const selected = value === item.value;
    return /*#__PURE__*/react.createElement("div", {
      key: item.value,
      "data-choice-item": "",
      onClick: () => onChange(item.value),
      style: {
        width: itemWidth > 0 ? itemWidth : undefined,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '4px',
        padding: '12px 16px',
        borderRadius: '8px',
        border: selected ? '2px solid #222325' : '1px solid #dadbdd',
        cursor: 'pointer',
        flexShrink: 0
      }
    }, item.icon, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      size: "b_sm",
      fontWeight: "bold",
      color: "grey_1200"
    }, item.label), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      size: "b_sm",
      color: "grey_900"
    }, item.count));
  }));
}
const SUB_FILTERS = ['Active (2)', 'Late (3)', 'Rejected (0)', 'Dispute (0)', 'In progress (1)', 'Incomplete (0)', 'Delivered (0)'];
function DimaTest1() {
  const [selectedTab, setSelectedTab] = (0,react.useState)('all');
  const [selectedFilter, setSelectedFilter] = (0,react.useState)('Active (2)');
  const isMedium = useMediaQuery('(max-width: 1159px)');
  const isSmall = useMediaQuery('(max-width: 599px)');
  const [tagMinWidth, setTagMinWidth] = (0,react.useState)(0);
  const tagContainerRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const el = tagContainerRef.current;
    if (!el) return;
    const tags = el.querySelectorAll('[data-tag-item]');
    let max = 0;
    tags.forEach(tag => {
      tag.style.minWidth = 'auto';
    });
    tags.forEach(tag => {
      max = Math.max(max, tag.offsetWidth);
    });
    setTagMinWidth(max);
  }, [selectedFilter]);
  const mainContent = /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "6"
  }, !isSmall && /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2",
    size: "h_sm"
  }, "Section title"), !isSmall && /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    color: "bodyPrimary"
  }, "Content Slot Tip: Don't detach Build your own local component and then swap with your component via the instance menu"), !isSmall && /*#__PURE__*/react.createElement(Tabs_TabGroup, {
    size: "md"
  }, /*#__PURE__*/react.createElement(Tabs_TabList, null, /*#__PURE__*/react.createElement(Tabs_Tab, null, "Tab 1"), /*#__PURE__*/react.createElement(Tabs_Tab, null, "Tab 2"), /*#__PURE__*/react.createElement(Tabs_Tab, null, "Tab 3"), /*#__PURE__*/react.createElement(Tabs_Tab, null, "Tab 4"), /*#__PURE__*/react.createElement(Tabs_Tab, null, "Tab 5"), /*#__PURE__*/react.createElement(Tabs_Tab, null, "Tab 6")), /*#__PURE__*/react.createElement(Tabs_TabPanels, null, /*#__PURE__*/react.createElement(Tabs_TabPanel, null, null), /*#__PURE__*/react.createElement(Tabs_TabPanel, null, null), /*#__PURE__*/react.createElement(Tabs_TabPanel, null, null), /*#__PURE__*/react.createElement(Tabs_TabPanel, null, null), /*#__PURE__*/react.createElement(Tabs_TabPanel, null, null), /*#__PURE__*/react.createElement(Tabs_TabPanel, null, null))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "3"
  }, isSmall ? /*#__PURE__*/react.createElement(SmallChoiceGroup, {
    value: selectedTab,
    onChange: setSelectedTab
  }) : /*#__PURE__*/react.createElement(ChoiceGroupWithRef/* default */.A, {
    direction: "row",
    value: selectedTab,
    onChange: setSelectedTab
  }, /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "all"
  }, "All (4)"), /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "messages"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Envelope/* default */.A, {
    size: "sm"
  }), "Messages (1)")), /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "briefs"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Brief/* default */.A, {
    size: "sm"
  }), "Briefs (1)")), /*#__PURE__*/react.createElement(ChoiceGroupItem/* default */.A, {
    value: "orders"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(OrderBox/* default */.A, {
    size: "sm"
  }), "Orders (2)"))), /*#__PURE__*/react.createElement("div", {
    ref: tagContainerRef,
    style: isSmall ? {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '8px'
    } : {
      display: 'flex',
      flexDirection: 'row',
      gap: '12px',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none'
    }
  }, SUB_FILTERS.map(filter => /*#__PURE__*/react.createElement("div", {
    key: filter,
    "data-tag-item": "",
    style: isSmall ? {
      display: 'flex'
    } : {
      minWidth: tagMinWidth > 0 ? tagMinWidth : undefined,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react.createElement(Tag/* default */.A, {
    variant: selectedFilter === filter ? 'filled' : 'outline',
    size: "xs",
    onClick: () => setSelectedFilter(filter),
    ariaLabel: filter
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, filter)))))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0"
  }, ACTIVITY_TYPES.map((type, index) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: type
  }, index > 0 && /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(ActivityCard, {
    type: type
  })))), !isSmall && /*#__PURE__*/react.createElement(FormFields, null), isSmall && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "5",
    width: "100%"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1.5"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "Label"), /*#__PURE__*/react.createElement(Input/* default */.A, {
    placeholder: "Lorem ipsum"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, "This is a hint")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "Label"), /*#__PURE__*/react.createElement(Select/* default */.A, {
    placeholder: "Some placeholder",
    fullWidth: true
  }, /*#__PURE__*/react.createElement(Option/* default */.A, {
    value: "opt1"
  }, "Option 1"), /*#__PURE__*/react.createElement(Option/* default */.A, {
    value: "opt2"
  }, "Option 2"), /*#__PURE__*/react.createElement(Option/* default */.A, {
    value: "opt3"
  }, "Option 3")))), /*#__PURE__*/react.createElement(Alert/* default */.A, {
    variant: "info"
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.A, null, "Once you reject a brief, it's gone forever."), /*#__PURE__*/react.createElement(AlertText/* default */.A, null, "Repellat ratione ut nulla quam ipsam.", ' ', /*#__PURE__*/react.createElement(Link/* default */.A, {
    href: "#"
  }, "Learn more")), /*#__PURE__*/react.createElement(AlertActions/* default */.A, null, /*#__PURE__*/react.createElement(AlertActionButton/* default */.A, {
    intent: "secondary"
  }, "Secondary action"), /*#__PURE__*/react.createElement(AlertActionButton/* default */.A, null, "Button"))), !isSmall && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(Tabs_TabGroup, {
    variant: "segmentedControlRounded",
    size: "md"
  }, /*#__PURE__*/react.createElement(Tabs_TabList, null, /*#__PURE__*/react.createElement(Tabs_Tab, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Categories/* default */.A, null), "Grid")), /*#__PURE__*/react.createElement(Tabs_Tab, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(UnorderedList/* default */.A, null), "List"))))), /*#__PURE__*/react.createElement(CollapsibleSections, null)));
  const sidebarContent = /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    direction: "column",
    gap: "6"
  }, isMedium ? {} : {
    width: '380px',
    minWidth: '380px'
  }), /*#__PURE__*/react.createElement(ActionCard, null), /*#__PURE__*/react.createElement(ProfileStrengthCard, null), /*#__PURE__*/react.createElement(PerformanceCard, null));
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    padding: isSmall ? '4' : '6',
    maxWidth: "1440px",
    marginX: "auto",
    width: "100%"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "6"
  }, /*#__PURE__*/react.createElement(ProfileHeader, null), isMedium ? /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: isSmall ? '6' : '10'
  }, mainContent, sidebarContent) : /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "10",
    alignItems: "flexStart"
  }, mainContent, sidebarContent)));
}
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/InputGroup/index.js + 2 modules
var InputGroup = __webpack_require__("../inputs/dist/esm/src/components/Input/InputGroup/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/constants.js
var constants = __webpack_require__("../inputs/dist/esm/src/components/Input/constants.js");
;// ../inputs/dist/esm/src/components/Input/InputSuffix/index.js




const InputSuffix = _ref => {
  let {
    children,
    disabled,
    dataTrackTag = 'input_suffix',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    paddingLeft: "1",
    height: "100%"
  }, (0,render_children/* renderChildren */.s)(children, {
    disabled
  }));
};
InputSuffix.displayName = constants/* SUFFIX_ID */.Uj;
Object.assign(InputSuffix, {
  id: constants/* SUFFIX_ID */.Uj
});
/* harmony default export */ const Input_InputSuffix = (InputSuffix);
;
InputSuffix.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InputSuffix"
};
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Bell.js
var Bell = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Bell.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Pencil.js
var Pencil = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Pencil.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/EnvelopeOpen.js
var EnvelopeOpen = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/EnvelopeOpen.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/logos/Fiverr.js
var logos_Fiverr = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/logos/Fiverr.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Search.js
var Search = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Search.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Cog.js
var Cog = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Cog.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/SoundMuted.js
var SoundMuted = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/SoundMuted.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/SoundMax.js
var SoundMax = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/SoundMax.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Heart.js
var Heart = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Heart.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Wand.js
var Wand = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Wand.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ExternalLink.js
var ExternalLink = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ExternalLink.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Carousel/index.js + 5 modules
var Carousel = __webpack_require__("../carousel/dist/esm/src/components/Carousel/index.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Track/index.js
var Track = __webpack_require__("../carousel/dist/esm/src/components/Track/index.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Slide/index.js + 2 modules
var components_Slide = __webpack_require__("../carousel/dist/esm/src/components/Slide/index.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Arrows/index.js + 2 modules
var Arrows = __webpack_require__("../carousel/dist/esm/src/components/Arrows/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/DotIndicator/index.js
var DotIndicator = __webpack_require__("../data_display/dist/esm/src/components/DotIndicator/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Tag/TagPrefix/index.js
var TagPrefix = __webpack_require__("../data_display/dist/esm/src/components/Tag/TagPrefix/index.js");
// EXTERNAL MODULE: ../badges/dist/esm/src/components/NewBadge/index.js
var NewBadge = __webpack_require__("../badges/dist/esm/src/components/NewBadge/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/index.js
var Popover = __webpack_require__("../popover/dist/esm/src/components/Popover/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js
var PopoverAnchor = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverContent/index.js
var PopoverContent = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContent/index.js");
;// ../penta_playground/src/components/FiverrHeaderPage.tsx
function FiverrHeaderPage_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function FiverrHeaderPage_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? FiverrHeaderPage_ownKeys(Object(t), !0).forEach(function (r) {
      FiverrHeaderPage_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : FiverrHeaderPage_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function FiverrHeaderPage_defineProperty(e, r, t) {
  return (r = FiverrHeaderPage_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function FiverrHeaderPage_toPropertyKey(t) {
  var i = FiverrHeaderPage_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function FiverrHeaderPage_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const avatarImage = __webpack_require__("../penta_playground/src/assets/avatar.png");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imgAvatarColor = __webpack_require__("../penta_playground/src/assets/avatar1.png");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imgAvatarColor1 = __webpack_require__("../penta_playground/src/assets/avatar2.png");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imgAvatarColor2 = __webpack_require__("../penta_playground/src/assets/avatar3.png");












// ── Menu data per category ────────────────────────────────────────────────

const GRAPHIC_DESIGN_MENU = {
  columns: [[{
    title: 'Logo & Brand Identity',
    items: [{
      label: 'Logo Design'
    }, {
      label: 'Logo Maker Tool',
      icon: 'wand'
    }, {
      label: 'Brand Style Guides'
    }, {
      label: 'Business Cards & Stationery'
    }, {
      label: 'Fonts & Typography'
    }, {
      label: 'Art Direction',
      badge: true
    }]
  }, {
    title: 'Art & Illustration',
    items: [{
      label: 'Illustration'
    }, {
      label: 'AI Artists'
    }, {
      label: 'AI Avatar Design',
      badge: true
    }, {
      label: 'Portraits & Caricatures'
    }, {
      label: 'Cartoon Illustration'
    }, {
      label: 'Storyboards'
    }]
  }], [{
    title: 'Web & App Design',
    items: [{
      label: 'Website Design'
    }, {
      label: 'App Design'
    }, {
      label: 'UX Design'
    }, {
      label: 'Landing Page Design'
    }, {
      label: 'Icon Design'
    }]
  }, {
    title: 'Print & Visual Design',
    items: [{
      label: 'Brochure Design'
    }, {
      label: 'Flyer Design'
    }, {
      label: 'Packaging & Label Design'
    }, {
      label: 'Poster Design'
    }, {
      label: 'Presentation Design'
    }, {
      label: 'Infographic Design'
    }]
  }], [{
    title: 'Visual Design',
    items: [{
      label: 'Image Editing'
    }, {
      label: 'AI Image Editing',
      badge: true
    }, {
      label: 'Presentation Design'
    }, {
      label: 'Background Removal'
    }, {
      label: 'Pattern Design'
    }]
  }, {
    title: 'Marketing Design',
    items: [{
      label: 'Social Media Design'
    }, {
      label: 'Social Posts & Banners'
    }, {
      label: 'Email Design'
    }, {
      label: 'Web Banners'
    }, {
      label: 'Signage Design'
    }]
  }], [{
    title: 'Fashion & Merchandise',
    items: [{
      label: 'T-Shirts & Merchandise'
    }, {
      label: 'Fashion Design'
    }, {
      label: 'Jewelry Design'
    }]
  }, {
    title: '3D Design',
    items: [{
      label: '3D Architecture'
    }, {
      label: '3D Industrial'
    }, {
      label: '3D Fashion & Garment'
    }, {
      label: '3D Game Art'
    }, {
      label: '3D Printing Characters'
    }, {
      label: '3D Jewelry Design'
    }]
  }]]
  // No footer per user request
};
const PROGRAMMING_MENU = {
  columns: [[{
    title: 'Website Development',
    items: [{
      label: 'Custom Websites'
    }, {
      label: 'WordPress'
    }, {
      label: 'Shopify'
    }, {
      label: 'Website Maintenance'
    }, {
      label: 'Webflow'
    }, {
      label: 'Wix'
    }]
  }, {
    title: 'Vibe Coding',
    items: [{
      label: 'Development & MVP'
    }, {
      label: 'Troubleshooting & Improvements',
      badge: true
    }, {
      label: 'Deployments & DevOps'
    }, {
      label: 'Consultation & Training'
    }]
  }], [{
    title: 'Application Development',
    items: [{
      label: 'Web Applications'
    }, {
      label: 'Chatbot Development'
    }, {
      label: 'Game Development'
    }, {
      label: 'Desktop Applications'
    }, {
      label: 'Browser Extensions'
    }]
  }, {
    title: 'Mobile Apps',
    items: [{
      label: 'iOS App Development'
    }, {
      label: 'Android App Development'
    }, {
      label: 'Cross-platform Apps'
    }, {
      label: 'Mobile App Maintenance'
    }]
  }], [{
    title: 'Software Development',
    items: [{
      label: 'AI Development'
    }, {
      label: 'APIs & Integrations'
    }, {
      label: 'Automations & Workflows'
    }, {
      label: 'Plugins Development'
    }, {
      label: 'Scripting'
    }]
  }, {
    title: 'Blockchain & Crypto',
    items: [{
      label: 'Blockchain Development & Solutions',
      badge: true
    }, {
      label: 'Decentralized Apps (dApps)'
    }, {
      label: 'Coin Design & Tokenization'
    }, {
      label: 'Blockchain Security & Auditing'
    }]
  }], [{
    title: 'Support & Cybersecurity',
    items: [{
      label: 'Cybersecurity'
    }, {
      label: 'DevOps Engineering'
    }, {
      label: 'Cloud Computing'
    }, {
      label: 'Support & IT'
    }, {
      label: 'QA & Review'
    }]
  }, {
    title: 'Miscellaneous',
    items: [{
      label: 'Electronics Engineering'
    }, {
      label: 'User Testing'
    }, {
      label: 'Online Coding Lessons'
    }, {
      label: 'Other'
    }]
  }]],
  footer: {
    title: 'Working on a bigger project?',
    description: 'Get matched with a certified project manager for end-to-end execution.',
    cta: 'Book a free consultation'
  }
};
const DIGITAL_MARKETING_MENU = {
  columns: [[{
    title: 'Search',
    items: [{
      label: 'Search Engine Optimization (SEO)'
    }, {
      label: 'Generative Engine Optimization (GEO)',
      badge: true
    }, {
      label: 'Search Engine Marketing (SEM)'
    }, {
      label: 'Local SEO'
    }, {
      label: 'E-Commerce SEO'
    }, {
      label: 'Video SEO'
    }]
  }, {
    title: 'Social',
    items: [{
      label: 'Social Media Marketing'
    }, {
      label: 'Paid Social Media'
    }, {
      label: 'Social Commerce'
    }, {
      label: 'Influencer Marketing'
    }, {
      label: 'Online Communities'
    }]
  }], [{
    title: 'Methods & Techniques',
    items: [{
      label: 'Video Marketing'
    }, {
      label: 'E-Commerce Marketing'
    }, {
      label: 'Email Marketing'
    }, {
      label: 'Email Automations'
    }, {
      label: 'Marketing Automation'
    }, {
      label: 'Affiliate Marketing'
    }, {
      label: 'Public Relations'
    }]
  }], [{
    title: 'Analytics & Strategy',
    items: [{
      label: 'Marketing Strategy'
    }, {
      label: 'Brand Strategy',
      badge: true
    }, {
      label: 'Digital Marketing Strategy',
      badge: true
    }, {
      label: 'UGC Strategy',
      badge: true
    }, {
      label: 'Conversion Rate Optimization'
    }, {
      label: 'Web Analytics'
    }, {
      label: 'Marketing Consultation'
    }]
  }], [{
    title: 'Industry & Purpose-Specific',
    items: [{
      label: 'Music Promotion'
    }, {
      label: 'Podcast Marketing'
    }, {
      label: 'Mobile App Marketing'
    }, {
      label: 'Book & eBook Marketing'
    }]
  }, {
    title: 'Miscellaneous',
    items: [{
      label: 'Crowdfunding'
    }, {
      label: 'Guest Posting'
    }, {
      label: 'Display Advertising'
    }, {
      label: 'Text Message Marketing'
    }]
  }]],
  footer: {
    title: 'Ready to grow your brand?',
    description: 'Find digital marketing experts for SEO, social, email, and beyond.',
    cta: 'Browse freelancers'
  }
};
const VIDEO_ANIMATION_MENU = {
  columns: [[{
    title: 'Editing & Post-Production',
    items: [{
      label: 'Video Editing'
    }, {
      label: 'Visual Effects'
    }, {
      label: 'Video Art',
      badge: true
    }, {
      label: 'Intro & Outro Videos'
    }, {
      label: 'Subtitles & Captions'
    }]
  }, {
    title: 'Social & Marketing Videos',
    items: [{
      label: 'Video Ads & Commercials'
    }, {
      label: 'Social Media Videos'
    }, {
      label: 'Music Videos'
    }, {
      label: 'Slideshow Videos'
    }, {
      label: 'UGC Ads'
    }]
  }], [{
    title: 'Presenter Videos',
    items: [{
      label: 'UGC Videos'
    }, {
      label: 'Spokesperson Videos'
    }]
  }, {
    title: 'Explainer Videos',
    items: [{
      label: 'Animated Explainers'
    }, {
      label: 'Live Action Explainers'
    }, {
      label: 'Screencasting Videos'
    }, {
      label: 'eLearning Video Production'
    }, {
      label: 'Crowdfunding Videos'
    }]
  }], [{
    title: 'Animation',
    items: [{
      label: 'Character Animation'
    }, {
      label: 'Animated GIFs'
    }, {
      label: 'Animation for Kids'
    }, {
      label: 'Animation for Streamers'
    }, {
      label: 'NFT Animation'
    }]
  }, {
    title: 'Motion Graphics',
    items: [{
      label: 'Logo Animation'
    }, {
      label: 'Lottie & Web Animation'
    }, {
      label: 'Text Animation'
    }]
  }], [{
    title: 'Product Videos',
    items: [{
      label: '3D Product Animation'
    }, {
      label: 'E-Commerce Product Videos'
    }, {
      label: 'Corporate Videos'
    }, {
      label: 'App & Website Previews'
    }]
  }, {
    title: 'Filmed Video Production',
    items: [{
      label: 'Filmed Video Production'
    }, {
      label: 'Videographers'
    }, {
      label: 'Game Trailers'
    }, {
      label: 'Real Estate Promos'
    }]
  }]],
  footer: {
    title: "Big video project? We'll handle it.",
    description: 'Work with a certified project manager for sourcing and full execution.',
    cta: 'Book a free consultation'
  }
};
const WRITING_TRANSLATION_MENU = {
  columns: [[{
    title: 'Content Writing',
    items: [{
      label: 'Articles & Blog Posts'
    }, {
      label: 'Content Strategy',
      badge: true
    }, {
      label: 'Website Content'
    }, {
      label: 'Scriptwriting'
    }, {
      label: 'Creative Writing'
    }, {
      label: 'Speechwriting'
    }, {
      label: 'Research & Summaries'
    }]
  }], [{
    title: 'Editing & Critique',
    items: [{
      label: 'Proofreading & Editing'
    }, {
      label: 'Academic Support',
      badge: true
    }, {
      label: 'AI Content Editing'
    }, {
      label: 'Writing Advice'
    }]
  }, {
    title: 'Book & eBook Publishing',
    items: [{
      label: 'Book & eBook Writing'
    }, {
      label: 'Book Editing'
    }, {
      label: 'Beta Reading'
    }]
  }], [{
    title: 'Translation & Transcription',
    items: [{
      label: 'Translation'
    }, {
      label: 'Localization',
      badge: true
    }, {
      label: 'Transcription'
    }, {
      label: 'Interpretation',
      badge: true
    }]
  }, {
    title: 'Business & Marketing Copy',
    items: [{
      label: 'Brand Voice & Tone'
    }, {
      label: 'Product Descriptions'
    }, {
      label: 'Ad Copy'
    }, {
      label: 'Sales Copy'
    }, {
      label: 'Email Copy'
    }, {
      label: 'Press Releases'
    }, {
      label: 'UX Writing'
    }]
  }], [{
    title: 'Career Writing',
    items: [{
      label: 'Resume Writing'
    }, {
      label: 'Cover Letters'
    }, {
      label: 'LinkedIn Profiles'
    }, {
      label: 'Job Descriptions'
    }]
  }, {
    title: 'Miscellaneous',
    items: [{
      label: 'Technical Writing'
    }, {
      label: 'eLearning Content Development'
    }, {
      label: 'Handwriting',
      badge: true
    }, {
      label: 'Podcast Writing'
    }]
  }]]
};
const MUSIC_AUDIO_MENU = {
  columns: [[{
    title: 'Music Production & Writing',
    items: [{
      label: 'Music Producers'
    }, {
      label: 'Composers'
    }, {
      label: 'Songwriters'
    }, {
      label: 'Beat Making'
    }, {
      label: 'Singers & Vocalists'
    }, {
      label: 'Session Musicians'
    }, {
      label: 'Jingles & Intros'
    }, {
      label: 'Custom Songs',
      badge: true
    }]
  }], [{
    title: 'Audio Engineering & Post',
    items: [{
      label: 'Mixing & Mastering'
    }, {
      label: 'Audio Editing'
    }, {
      label: 'Vocal Tuning'
    }, {
      label: 'Audio Logo & Sonic Branding'
    }]
  }, {
    title: 'DJing',
    items: [{
      label: 'Remixing'
    }, {
      label: 'DJ Drops & Tags'
    }, {
      label: 'DJ Mixing'
    }]
  }], [{
    title: 'Voice Over & Streaming',
    items: [{
      label: 'Voice Over'
    }, {
      label: 'Podcast Production'
    }, {
      label: 'Audiobook Production'
    }, {
      label: 'Audio Ads Production'
    }, {
      label: 'Voice Synthesis & AI'
    }]
  }, {
    title: 'Sound Design',
    items: [{
      label: 'Sound Design'
    }, {
      label: 'Custom Patches & Samples'
    }, {
      label: 'Meditation Music'
    }, {
      label: 'Audio Plugin Development'
    }]
  }], [{
    title: 'Lessons & Transcription',
    items: [{
      label: 'Online Music Lessons'
    }, {
      label: 'Music Transcription'
    }, {
      label: 'Music & Audio Consultation'
    }]
  }]]
};
const BUSINESS_MENU = {
  columns: [[{
    title: 'Formation & Consulting',
    items: [{
      label: 'Business Formation & Registration',
      badge: true
    }, {
      label: 'Market Research'
    }, {
      label: 'Business Plans'
    }, {
      label: 'Business Consulting'
    }, {
      label: 'HR Consulting'
    }, {
      label: 'AI Consulting'
    }]
  }], [{
    title: 'Operations & Management',
    items: [{
      label: 'Virtual Assistant'
    }, {
      label: 'Project Management'
    }, {
      label: 'E-Commerce Management'
    }, {
      label: 'Product Management'
    }, {
      label: 'Event Management'
    }, {
      label: 'Supply Chain Management'
    }]
  }], [{
    title: 'Legal Services',
    items: [{
      label: 'Intellectual Property Management',
      badge: true
    }, {
      label: 'Legal Documents & Contracts'
    }, {
      label: 'Legal Research'
    }, {
      label: 'General Legal Advice'
    }]
  }, {
    title: 'Sales & Customer Care',
    items: [{
      label: 'Sales'
    }, {
      label: 'Lead Generation'
    }, {
      label: 'Customer Care'
    }, {
      label: 'Customer Experience Management',
      badge: true
    }, {
      label: 'GTM Engineering',
      badge: true
    }]
  }], [{
    title: 'Miscellaneous',
    items: [{
      label: 'Presentations'
    }, {
      label: 'Online Investigations'
    }, {
      label: 'Sustainability Consulting'
    }, {
      label: 'Game Concept Design'
    }, {
      label: 'Other'
    }]
  }]],
  footer: {
    title: 'Big business project? We\'ll handle it.',
    description: 'Work with a Fiverr-certified project manager across sourcing, execution, and delivery.',
    cta: 'Book a free consultation'
  }
};
const AI_SERVICES_MENU = {
  columns: [[{
    title: 'AI Mobile Development',
    items: [{
      label: 'AI Mobile Apps',
      badge: true
    }, {
      label: 'AI Websites & Software',
      badge: true
    }, {
      label: 'AI Chatbot'
    }, {
      label: 'AI Integrations'
    }, {
      label: 'AI Agents'
    }, {
      label: 'AI Fine-Tuning'
    }, {
      label: 'AI Technology Consulting',
      badge: true
    }, {
      label: 'Let us manage your project',
      cta: true
    }]
  }, {
    title: 'Data',
    items: [{
      label: 'Data Science & ML'
    }, {
      label: 'Data Analytics'
    }, {
      label: 'Data Visualization'
    }]
  }], [{
    title: 'AI Artists',
    items: [{
      label: 'AI Avatar Design',
      badge: true
    }, {
      label: 'ComfyUI Workflow Creation'
    }, {
      label: 'AI Image Editing',
      badge: true
    }, {
      label: 'Midjourney Artists'
    }, {
      label: 'Stable Diffusion Artists'
    }, {
      label: 'All AI Art Services'
    }]
  }, {
    title: 'AI for Businesses',
    items: [{
      label: 'AI Consulting'
    }, {
      label: 'AI Strategy'
    }, {
      label: 'AI Lessons'
    }]
  }], [{
    title: 'AI Video',
    items: [{
      label: 'AI Music Videos'
    }, {
      label: 'AI Video Avatars'
    }, {
      label: 'AI UGC',
      badge: true
    }]
  }, {
    title: 'AI Audio',
    items: [{
      label: 'Voice Synthesis & AI'
    }, {
      label: 'Text to Speech'
    }]
  }, {
    title: 'AI Content',
    items: [{
      label: 'AI Content Editing'
    }, {
      label: 'Custom Writing Prompts',
      badge: true
    }]
  }]]
};
const TRENDING_MENU = {
  columns: [[{
    title: 'Publish Your Book',
    items: [{
      label: 'Book Design'
    }, {
      label: 'Book Editing'
    }, {
      label: 'Book & eBook Marketing'
    }, {
      label: "Children's Book Illustration"
    }, {
      label: 'Beta Reading'
    }, {
      label: 'Book & eBook Writing'
    }]
  }, {
    title: 'Create Your Website',
    items: [{
      label: 'E-commerce & Dropshipping'
    }, {
      label: 'Shopify'
    }, {
      label: 'WordPress'
    }, {
      label: 'Website Design'
    }, {
      label: 'E-Commerce Marketing'
    }]
  }], [{
    title: 'Build Your Brand',
    items: [{
      label: 'Brand Strategy',
      badge: true
    }, {
      label: 'Brand Style Guides'
    }, {
      label: 'Social Media Management'
    }, {
      label: 'Social Media Design'
    }, {
      label: 'UGC Videos'
    }, {
      label: 'Video Ads & Commercials'
    }, {
      label: 'Paid Social Media'
    }]
  }], [{
    title: 'Grow Your Audience',
    items: [{
      label: 'Social Media Strategy'
    }, {
      label: 'Social Media Videos'
    }, {
      label: 'Live Action Explainers'
    }, {
      label: 'Slideshow Videos'
    }, {
      label: 'Organic Social Promotions'
    }, {
      label: 'Social Media Automation'
    }]
  }, {
    title: 'Find a Job',
    items: [{
      label: 'Resume Writing'
    }, {
      label: 'Resume Design'
    }, {
      label: 'Search & Apply'
    }, {
      label: 'Interview Prep'
    }, {
      label: 'Career Consulting'
    }, {
      label: 'LinkedIn Profiles'
    }]
  }], [{
    title: 'AI Services',
    items: [{
      label: 'AI Video'
    }, {
      label: 'AI Websites & Software',
      badge: true
    }, {
      label: 'AI Mobile Apps',
      badge: true
    }, {
      label: 'AI Agents'
    }, {
      label: 'Data Model Training'
    }, {
      label: 'AI Technology Consulting',
      badge: true
    }, {
      label: 'Generative Engine Optimization (GEO)',
      badge: true
    }]
  }]]
};
const FINANCE_MENU = {
  columns: [[{
    title: 'Accounting Services',
    items: [{
      label: 'Fractional CFO Services'
    }, {
      label: 'Financial Reporting'
    }, {
      label: 'Bookkeeping'
    }, {
      label: 'Payroll Management'
    }, {
      label: 'Find a Financial Expert',
      cta: true
    }]
  }, {
    title: 'Corporate Finance',
    items: [{
      label: 'Due Diligence'
    }, {
      label: 'Valuation'
    }, {
      label: 'Mergers & Acquisitions Advisory'
    }, {
      label: 'Corporate Finance Strategy'
    }]
  }], [{
    title: 'Tax Consulting',
    items: [{
      label: 'Tax Returns'
    }, {
      label: 'Tax Identification Services'
    }, {
      label: 'Tax Planning'
    }, {
      label: 'Tax Compliance'
    }, {
      label: 'Tax Exemptions'
    }]
  }, {
    title: 'Financial Planning & Analysis',
    items: [{
      label: 'Budgeting and Forecasting'
    }, {
      label: 'Financial Modeling'
    }, {
      label: 'Cost Analysis'
    }, {
      label: 'Stock Analysis'
    }]
  }], [{
    title: 'Personal Finance & Wealth Management',
    items: [{
      label: 'Personal Budget Management'
    }, {
      label: 'Investments Advisory'
    }, {
      label: 'Online Trading Lessons'
    }, {
      label: 'Retirement Advisory'
    }, {
      label: 'Financial Coaching'
    }, {
      label: 'Insurance Advisory'
    }]
  }, {
    title: 'Fundraising',
    items: [{
      label: 'Investors Sourcing'
    }, {
      label: 'Funding Pitch Presentations'
    }, {
      label: 'Fundraising Consultation'
    }]
  }], [{
    title: 'Banking',
    items: [{
      label: 'Mortgage Advisory'
    }, {
      label: 'Loan Advisory'
    }, {
      label: 'Credit Score Advisory'
    }, {
      label: 'Bank Account Opening'
    }]
  }]]
};
const PERSONAL_GROWTH_MENU = {
  columns: [[{
    title: 'Self Improvement',
    items: [{
      label: 'Career Counseling'
    }, {
      label: 'Life Coaching'
    }, {
      label: 'Online Tutoring'
    }, {
      label: 'Language Lessons'
    }, {
      label: 'Generative AI Lessons'
    }]
  }, {
    title: 'Leisure & Hobbies',
    items: [{
      label: 'Astrology & Psychics'
    }, {
      label: 'Arts & Crafts'
    }, {
      label: 'Tabletop Games',
      badge: true
    }, {
      label: 'Puzzle & Game Creation'
    }, {
      label: 'Cosplay Creation',
      badge: true
    }, {
      label: 'Traveling'
    }, {
      label: 'Collectibles'
    }]
  }], [{
    title: 'Fashion & Style',
    items: [{
      label: 'Modeling & Acting'
    }, {
      label: 'Styling & Beauty'
    }, {
      label: 'Trend Forecasting',
      badge: true
    }]
  }, {
    title: 'Wellness & Fitness',
    items: [{
      label: 'Fitness'
    }, {
      label: 'Nutrition'
    }, {
      label: 'Wellness'
    }]
  }], [{
    title: 'Gaming',
    items: [{
      label: 'Game Coaching'
    }, {
      label: 'Marvel Rivals Coaching',
      badge: true
    }, {
      label: 'eSports Management & Strategy'
    }, {
      label: 'Game Matchmaking',
      badge: true
    }, {
      label: 'Ingame Creation'
    }, {
      label: 'Gameplay Experience & Feedback',
      badge: true
    }, {
      label: 'Game Recordings & Guides'
    }]
  }, {
    title: 'Miscellaneous',
    items: [{
      label: 'Family & Genealogy'
    }, {
      label: 'Cosmetics Formulation'
    }, {
      label: 'Greeting Cards & Videos'
    }, {
      label: 'Embroidery Digitizing',
      badge: true
    }, {
      label: 'Other'
    }]
  }]]
};
const CONSULTING_MENU = {
  columns: [[{
    title: 'Business Consultants',
    items: [{
      label: 'Legal Consulting'
    }, {
      label: 'Business Consulting'
    }, {
      label: 'HR Consulting'
    }, {
      label: 'AI Consulting'
    }, {
      label: 'Business Plans'
    }, {
      label: 'E-commerce Consulting'
    }]
  }, {
    title: 'Marketing Strategy',
    items: [{
      label: 'Marketing Strategy'
    }, {
      label: 'Content Strategy'
    }, {
      label: 'Social Media Strategy'
    }, {
      label: 'Influencers Strategy'
    }, {
      label: 'Video Marketing Consulting'
    }, {
      label: 'SEM Strategy'
    }, {
      label: 'PR Strategy'
    }]
  }], [{
    title: 'Data Consulting',
    items: [{
      label: 'Data Analytics Consulting'
    }, {
      label: 'Databases Consulting'
    }, {
      label: 'Data Visualization Consulting'
    }]
  }, {
    title: 'Coaching & Advice',
    items: [{
      label: 'Career Counseling'
    }, {
      label: 'Life Coaching'
    }, {
      label: 'Game Coaching'
    }, {
      label: 'Styling & Beauty Advice'
    }, {
      label: 'Travel Advice'
    }, {
      label: 'Nutrition Coaching',
      badge: true
    }, {
      label: 'Mindfulness Coaching',
      badge: true
    }, {
      label: 'Traveling'
    }]
  }], [{
    title: 'Tech Consulting',
    items: [{
      label: 'AI Technology Consulting',
      badge: true
    }, {
      label: 'Website Consulting'
    }, {
      label: 'Mobile App Consulting'
    }, {
      label: 'Game Development Consulting'
    }, {
      label: 'Software Development Consulting'
    }, {
      label: 'Cybersecurity Consulting'
    }]
  }, {
    title: 'Mentorship',
    items: [{
      label: 'Marketing Mentorship'
    }, {
      label: 'Design Mentorship'
    }, {
      label: 'Writing Mentorship'
    }, {
      label: 'Video Mentorship'
    }, {
      label: 'Music Mentorship'
    }]
  }]]
};
const PHOTOGRAPHY_MENU = {
  columns: [[{
    title: 'Products & Lifestyle',
    items: [{
      label: 'Product Photographers'
    }, {
      label: 'Food Photographers'
    }, {
      label: 'Lifestyle & Fashion Photographers'
    }]
  }, {
    title: 'People & Scenes',
    items: [{
      label: 'Portrait Photographers'
    }, {
      label: 'Event Photographers'
    }, {
      label: 'Real Estate Photographers'
    }, {
      label: 'Scenic Photographers'
    }, {
      label: 'Drone Photographers',
      badge: true
    }]
  }], [{
    title: 'Local Photography',
    items: [{
      label: 'Photographers in New York'
    }, {
      label: 'Photographers in Los Angeles'
    }, {
      label: 'Photographers in London'
    }, {
      label: 'Photographers in Paris'
    }, {
      label: 'All Cities'
    }]
  }, {
    title: 'Miscellaneous',
    items: [{
      label: 'Photography Classes',
      icon: 'wand'
    }, {
      label: 'Photo Preset Creation',
      badge: true
    }, {
      label: 'Other'
    }]
  }]]
};
const CATEGORY_MENUS = {
  'Trending 🔥': TRENDING_MENU,
  'Graphic & Design': GRAPHIC_DESIGN_MENU,
  'Programming & Tech': PROGRAMMING_MENU,
  'Digital Marketing': DIGITAL_MARKETING_MENU,
  'Video & Animation': VIDEO_ANIMATION_MENU,
  'Writing & Translation': WRITING_TRANSLATION_MENU,
  'Music & Audio': MUSIC_AUDIO_MENU,
  'Business': BUSINESS_MENU,
  'Finance': FINANCE_MENU,
  'AI Services': AI_SERVICES_MENU,
  'Personal Growth': PERSONAL_GROWTH_MENU,
  'Consulting': CONSULTING_MENU,
  'Photography': PHOTOGRAPHY_MENU
};

// ── Static data ────────────────────────────────────────────────────────────

const CATEGORIES = ['Trending 🔥', 'Graphic & Design', 'Programming & Tech', 'Digital Marketing', 'Video & Animation', 'Writing & Translation', 'Music & Audio', 'Business', 'Finance', 'AI Services', 'Personal Growth', 'Consulting', 'Photography'];
const RECENT_SEARCHES = ['PHP is dead', 'ASP.NET in 2023 Kappa', 'ChatGPT', 'Logo design', 'ChatGPT do my homework'];
const POPULAR_SEARCHES = ['logo design', 'data entry', 'video editing', 'website development', 'social media manager', 'youtube thumbnail', 'wordpress website', 'shopify store design', 'google ads', 'seo'];
const Z_OVERLAY = 11300;
const Z_HEADER = 11600;
const Z_POPOVER = 11500;

// ── Components ─────────────────────────────────────────────────────────────

// ── Header-specific types & data ────────────────────────────────────────────

const MESSAGES = [{
  id: '1',
  name: 'Bernice Mosciski',
  preview: 'Sent you 5 messages in inbox',
  time: '5m',
  count: 5,
  avatarSrc: imgAvatarColor
}, {
  id: '2',
  name: 'Bernice Mosciski',
  preview: 'Yes',
  time: '12m',
  count: 1,
  avatarSrc: imgAvatarColor1
}, {
  id: '3',
  name: 'Bernice Mosciski',
  preview: 'Check this out.',
  time: '21h',
  avatarSrc: imgAvatarColor2
}];
const ORDERS = [{
  id: '1',
  title: 'I will design a cool new logo',
  seller: 'Omer B.',
  username: '@omer49567',
  status: 'incomplete',
  imageUrl: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/2625783/original/74b805306d145c306662ce5e2581284755b22781.png'
}, {
  id: '2',
  title: 'I will write SEO blogs and articles for your website',
  seller: 'Mus Pshaloshdj',
  username: '@mus_seller_pro3',
  status: 'in-progress',
  imageUrl: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180455106/original/9a2fb2ab033a37623796dc2e43ff3452c76dd1c5.png'
}, {
  id: '3',
  title: 'I will be your expert business consultant',
  seller: 'notarealagncy',
  username: '@mus_seller_pro2',
  status: 'in-progress',
  imageUrl: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/334249993/original/e1449d9d5c3467c8a1aadf06c504249cf40d5df8.jpg'
}, {
  id: '4',
  title: 'I will create a logo for your dog',
  seller: 'notarealagncy',
  username: '@mus_seller_pro2',
  status: 'completed',
  imageUrl: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192945874/original/45074ea0dfcd30781722c0cc82cdd54355d2102d.jpg'
}];
const NOTIFICATIONS = [{
  id: '1',
  title: 'Bernice Mosciski',
  preview: 'Left a five star review',
  time: '21h',
  avatarSrc: imgAvatarColor,
  isUnread: true
}, {
  id: '2',
  title: 'Matched to a new brief',
  preview: 'We matched you with a new brief and we think its a great fit. Check this out',
  time: '21h',
  icon: /*#__PURE__*/react.createElement(Bell/* default */.A, {
    size: "md"
  }),
  isUnread: true
}, {
  id: '3',
  title: 'How was your delivery?',
  preview: 'Tell us in private how you felt about your recent delivery',
  time: '21h',
  icon: /*#__PURE__*/react.createElement(Pencil/* default */.A, {
    size: "md"
  }),
  isUnread: true
}];
function UnreadBadge(_ref) {
  let {
    count
  } = _ref;
  const isCircle = count < 10;
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    borderRadius: "circle",
    backgroundColor: "pink_900",
    borderWidth: "sm",
    borderStyle: "solid",
    borderColor: "white",
    flexShrink: "0",
    style: {
      width: isCircle ? 20 : 'auto',
      height: 20,
      padding: isCircle ? 0 : '0 5px',
      minWidth: 20,
      minHeight: 20
    }
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "white",
    fontWeight: "bold",
    style: {
      fontSize: 11,
      lineHeight: '20px',
      letterSpacing: '0.5px'
    }
  }, count));
}
function MessageRow(_ref2) {
  let {
    item
  } = _ref2;
  const [isHovered, setIsHovered] = (0,react.useState)(false);
  const [isRead, setIsRead] = (0,react.useState)(item.count === undefined);
  return /*#__PURE__*/react.createElement("div", {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    style: {
      borderRadius: 8,
      backgroundColor: isHovered ? '#f5f5f5' : 'transparent',
      transition: 'background-color 200ms ease',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "flexStart",
    paddingX: "3",
    paddingY: "3"
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: item.name,
    size: "md"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: item.avatarSrc
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0",
    flex: "1",
    minWidth: "0px"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold",
    color: "bodyPrimary",
    style: {
      flex: 1,
      minWidth: 0
    }
  }, item.name), item.count !== undefined && !isRead && /*#__PURE__*/react.createElement(UnreadBadge, {
    count: item.count
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary",
    style: {
      whiteSpace: 'nowrap'
    }
  }, item.time)), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary",
    style: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.preview), /*#__PURE__*/react.createElement("div", {
    style: {
      opacity: isHovered ? 1 : 0,
      transition: 'opacity 200ms ease',
      flexShrink: 0
    },
    onClick: e => {
      e.stopPropagation();
      setIsRead(r => !r);
    }
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    content: isRead ? 'Mark as unread' : 'Mark as read',
    position: "top",
    appendToBody: true
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": isRead ? 'Mark as unread' : 'Mark as read',
    variant: "ghost",
    size: "sm"
  }, isRead ? /*#__PURE__*/react.createElement(Envelope/* default */.A, {
    size: "sm"
  }) : /*#__PURE__*/react.createElement(EnvelopeOpen/* default */.A, {
    size: "sm"
  }))))))));
}
function OrderRow(_ref3) {
  let {
    item
  } = _ref3;
  const statusMap = {
    'incomplete': {
      variant: 'error',
      label: 'INCOMPLETE'
    },
    'in-progress': {
      variant: 'info',
      label: 'IN PROGRESS'
    },
    'completed': {
      variant: 'success',
      label: 'COMPLETED'
    }
  };
  const statusInfo = statusMap[item.status];
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "flexStart",
    paddingX: "3",
    paddingY: "3",
    borderRadius: "lg",
    cursor: "pointer",
    backgroundColor: {
      default: 'transparent',
      hover: 'grey_200'
    }
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    backgroundColor: "grey_200",
    borderRadius: "md",
    flexShrink: "0",
    style: {
      width: 80,
      height: 60,
      backgroundImage: "url(".concat(item.imageUrl, ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0",
    flex: "1",
    minWidth: "0px"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold",
    color: "bodyPrimary",
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      flex: 1
    }
  }, item.title), /*#__PURE__*/react.createElement(Container/* default */.A, {
    flexShrink: "0"
  }, /*#__PURE__*/react.createElement(Status/* default */.A, {
    type: statusInfo.variant
  }, statusInfo.label))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "by ", item.seller), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "(", item.username, ")"))));
}
function NotificationRow(_ref4) {
  let {
    item
  } = _ref4;
  const [isHovered, setIsHovered] = (0,react.useState)(false);
  const [isRead, setIsRead] = (0,react.useState)(!item.isUnread);
  return /*#__PURE__*/react.createElement("div", {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    style: {
      borderRadius: 8,
      backgroundColor: isHovered ? '#f5f5f5' : 'transparent',
      transition: 'background-color 200ms ease',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "flexStart",
    paddingX: "3",
    paddingY: "3"
  }, item.avatarSrc ? /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: item.title,
    size: "md"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: item.avatarSrc
  })) : /*#__PURE__*/react.createElement(Center/* default */.A, {
    backgroundColor: "grey_200",
    borderRadius: "circle",
    flexShrink: "0",
    style: {
      width: 48,
      height: 48
    }
  }, item.icon), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0",
    flex: "1",
    minWidth: "0px"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold",
    color: "bodyPrimary",
    style: {
      flex: 1,
      minWidth: 0
    }
  }, item.title), !isRead && /*#__PURE__*/react.createElement(DotIndicator/* default */.A, {
    type: "special",
    size: "lg",
    isOverlay: false
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary",
    style: {
      whiteSpace: 'nowrap'
    }
  }, item.time)), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary",
    style: {
      flex: 1,
      overflowWrap: 'break-word',
      wordBreak: 'break-word'
    }
  }, item.preview), /*#__PURE__*/react.createElement("div", {
    style: {
      opacity: isHovered ? 1 : 0,
      transition: 'opacity 200ms ease',
      flexShrink: 0
    },
    onClick: e => {
      e.stopPropagation();
      setIsRead(r => !r);
    }
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    content: isRead ? 'Mark as unread' : 'Mark as read',
    position: "top",
    appendToBody: true
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": isRead ? 'Mark as unread' : 'Mark as read',
    variant: "ghost",
    size: "sm"
  }, isRead ? /*#__PURE__*/react.createElement(Envelope/* default */.A, {
    size: "sm"
  }) : /*#__PURE__*/react.createElement(EnvelopeOpen/* default */.A, {
    size: "sm"
  }))))))));
}

// ── Shared top-navigation bar ────────────────────────────────────────────────

function FiverrHeader() {
  const [isSearchOpen, setIsSearchOpen] = (0,react.useState)(false);
  const searchRef = (0,react.useRef)(null);
  const [isNotificationsMuted, setIsNotificationsMuted] = (0,react.useState)(false);
  const [isMessagesMuted, setIsMessagesMuted] = (0,react.useState)(false);
  const openSearch = (0,react.useCallback)(() => {
    setIsSearchOpen(true);
    requestAnimationFrame(() => {
      var _searchRef$current;
      (_searchRef$current = searchRef.current) === null || _searchRef$current === void 0 || (_searchRef$current = _searchRef$current.querySelector('input')) === null || _searchRef$current === void 0 || _searchRef$current.focus();
    });
  }, []);
  const closeSearch = (0,react.useCallback)(() => setIsSearchOpen(false), []);
  (0,react.useEffect)(() => {
    if (!isSearchOpen) return;
    const handleKey = e => {
      if (e.key === 'Escape') closeSearch();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isSearchOpen, closeSearch]);
  return /*#__PURE__*/react.createElement("div", {
    style: {
      backgroundColor: '#fff'
    }
  }, isSearchOpen && /*#__PURE__*/react.createElement("div", {
    onClick: closeSearch,
    style: {
      position: 'fixed',
      top: 78,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(34, 35, 37, 0.25)',
      zIndex: Z_OVERLAY
    }
  }), /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      zIndex: Z_HEADER
    }
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    maxWidth: "1400px",
    marginX: "auto",
    paddingX: "6"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "4",
    alignItems: "center",
    paddingY: "4"
  }, /*#__PURE__*/react.createElement(Link/* default */.A, {
    href: "#",
    style: {
      flexShrink: 0,
      lineHeight: 0,
      transform: 'translateY(-4px)'
    }
  }, /*#__PURE__*/react.createElement(logos_Fiverr/* default */.A, {
    size: "sm"
  })), /*#__PURE__*/react.createElement("div", {
    ref: searchRef,
    className: "header-search",
    style: {
      flex: 1,
      minWidth: 0
    },
    onClick: openSearch
  }, /*#__PURE__*/react.createElement(InputGroup/* default */.A, null, /*#__PURE__*/react.createElement(Input/* default */.A, {
    placeholder: "What service are you looking for today?"
  }), /*#__PURE__*/react.createElement(Input_InputSuffix, null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Search",
    size: "sm",
    intent: "primary",
    variant: "filled"
  }, /*#__PURE__*/react.createElement(Search/* default */.A, null)))), /*#__PURE__*/react.createElement("style", null, ".header-search [data-track-tag=\"input_group\"] { padding-top: 4px !important; padding-bottom: 4px !important; padding-right: 4px !important; padding-left: 12px !important; }")), isSearchOpen && searchRef.current && (() => {
    const rect = searchRef.current.getBoundingClientRect();
    return /*#__PURE__*/react.createElement("div", {
      style: {
        position: 'fixed',
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
        zIndex: Z_POPOVER,
        backgroundColor: '#fff',
        borderRadius: 8,
        boxShadow: '0 4px 24px rgba(0,0,0,0.16)',
        padding: 20,
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "column",
      gap: "4"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      justifyContent: "spaceBetween",
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_md",
      fontWeight: "bold"
    }, "Recently searched"), /*#__PURE__*/react.createElement(TextButton/* default */.A, {
      size: "sm",
      onClick: closeSearch
    }, "Clear history")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      gap: "2",
      style: {
        flexWrap: 'wrap'
      }
    }, RECENT_SEARCHES.map(term => /*#__PURE__*/react.createElement(Tag/* default */.A, {
      key: term,
      variant: "outline",
      size: "sm",
      ariaLabel: term,
      onClick: () => {}
    }, /*#__PURE__*/react.createElement(TagPrefix/* default */.A, null, /*#__PURE__*/react.createElement(Search/* default */.A, {
      size: "xs"
    })), term))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_md",
      fontWeight: "bold"
    }, "Popular right now"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      gap: "2",
      style: {
        flexWrap: 'wrap'
      }
    }, POPULAR_SEARCHES.map(term => /*#__PURE__*/react.createElement(Tag/* default */.A, {
      key: term,
      variant: "outline",
      size: "sm",
      ariaLabel: term,
      onClick: () => {}
    }, /*#__PURE__*/react.createElement(TagPrefix/* default */.A, null, /*#__PURE__*/react.createElement(Search/* default */.A, {
      size: "xs"
    })), term)))));
  })(), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1.5",
    alignItems: "center",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "md",
    variant: "ghost"
  }, "Upgrade to pro"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Popover/* default */.A, {
    position: "bottom-end",
    offset: 8
  }, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Notifications",
    variant: "ghost",
    size: "md"
  }, /*#__PURE__*/react.createElement(Bell/* default */.A, {
    size: "md"
  })), /*#__PURE__*/react.createElement(DotIndicator/* default */.A, {
    type: "special",
    size: "md",
    isOverlay: true,
    position: "top-right"
  }))), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
    disablePadding: true,
    minWidth: "380px"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      width: 380,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    paddingX: "5",
    paddingTop: "3",
    paddingBottom: "3"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold",
    color: "bodyPrimary"
  }, "Notifications ", /*#__PURE__*/react.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "(12)")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    content: "Notification settings",
    position: "top",
    appendToBody: true
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Settings",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/react.createElement(Cog/* default */.A, null))), /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    content: isNotificationsMuted ? 'Unmute notifications' : 'Mute notifications',
    position: "top",
    appendToBody: true
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": isNotificationsMuted ? 'Unmute notifications' : 'Mute notifications',
    variant: "ghost",
    size: "sm",
    onClick: () => setIsNotificationsMuted(v => !v)
  }, isNotificationsMuted ? /*#__PURE__*/react.createElement(SoundMuted/* default */.A, null) : /*#__PURE__*/react.createElement(SoundMax/* default */.A, null))))), /*#__PURE__*/react.createElement(Divider/* default */.A, {
    marginBottom: "2"
  }), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0",
    paddingX: "2",
    paddingTop: "0",
    paddingBottom: "2"
  }, NOTIFICATIONS.map(item => /*#__PURE__*/react.createElement(NotificationRow, {
    key: item.id,
    item: item
  })))))), /*#__PURE__*/react.createElement(Popover/* default */.A, {
    position: "bottom-end",
    offset: 8
  }, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Messages",
    variant: "ghost",
    size: "md"
  }, /*#__PURE__*/react.createElement(Envelope/* default */.A, {
    size: "md"
  })), /*#__PURE__*/react.createElement(DotIndicator/* default */.A, {
    type: "special",
    size: "md",
    isOverlay: true,
    position: "top-right"
  }))), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
    disablePadding: true,
    minWidth: "380px"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    paddingX: "5",
    paddingTop: "3",
    paddingBottom: "3"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold",
    color: "bodyPrimary"
  }, "Inbox messages ", /*#__PURE__*/react.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "(6)")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    content: "Notification settings",
    position: "top",
    appendToBody: true
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Settings",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/react.createElement(Cog/* default */.A, null))), /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    content: isMessagesMuted ? 'Unmute messages' : 'Mute messages',
    position: "top",
    appendToBody: true
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": isMessagesMuted ? 'Unmute messages' : 'Mute messages',
    variant: "ghost",
    size: "sm",
    onClick: () => setIsMessagesMuted(v => !v)
  }, isMessagesMuted ? /*#__PURE__*/react.createElement(SoundMuted/* default */.A, null) : /*#__PURE__*/react.createElement(SoundMax/* default */.A, null))))), /*#__PURE__*/react.createElement(Divider/* default */.A, {
    marginBottom: "2"
  }), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0",
    paddingX: "2",
    paddingY: "0"
  }, MESSAGES.map(item => /*#__PURE__*/react.createElement(MessageRow, {
    key: item.id,
    item: item
  }))), /*#__PURE__*/react.createElement(Divider/* default */.A, {
    marginTop: "2"
  }), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    paddingX: "5",
    paddingY: "3",
    justifyContent: "flexEnd"
  }, /*#__PURE__*/react.createElement(TextButton/* default */.A, {
    size: "sm"
  }, "Open inbox \u2192")))), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Saved",
    variant: "ghost",
    size: "md"
  }, /*#__PURE__*/react.createElement(Heart/* default */.A, {
    size: "md"
  }))), /*#__PURE__*/react.createElement(Popover/* default */.A, {
    position: "bottom-end",
    offset: 8
  }, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "md",
    variant: "ghost"
  }, "Orders")), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
    disablePadding: true,
    minWidth: "500px"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    paddingX: "5",
    paddingTop: "3",
    paddingBottom: "3"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold",
    color: "bodyPrimary"
  }, "My orders")), /*#__PURE__*/react.createElement(Divider/* default */.A, {
    marginBottom: "2"
  }), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0",
    paddingX: "2",
    paddingY: "0"
  }, ORDERS.map(item => /*#__PURE__*/react.createElement(OrderRow, {
    key: item.id,
    item: item
  }))), /*#__PURE__*/react.createElement(Divider/* default */.A, {
    marginTop: "2"
  }), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    paddingX: "5",
    paddingY: "3",
    justifyContent: "flexEnd"
  }, /*#__PURE__*/react.createElement(TextButton/* default */.A, {
    size: "sm"
  }, "View all orders \u2192")))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "david",
    size: "smd",
    showBorder: true
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: avatarImage
  }))))))));
}
function FiverrHeaderPage() {
  const [hoveredCategory, setHoveredCategory] = (0,react.useState)(null);
  // displayedCategory keeps content alive during the close animation
  const [displayedCategory, setDisplayedCategory] = (0,react.useState)(null);
  const [isMenuOpen, setIsMenuOpen] = (0,react.useState)(false);
  const menuCloseTimer = (0,react.useRef)(null);
  const menuDomTimer = (0,react.useRef)(null);
  const wasOpenRef = (0,react.useRef)(false);
  const catNavRef = (0,react.useRef)(null);
  const triggerRectRef = (0,react.useRef)(null);
  const openMenu = (0,react.useCallback)((cat, triggerEl) => {
    if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current);
    if (triggerEl) triggerRectRef.current = triggerEl.getBoundingClientRect();
    setHoveredCategory(cat);
  }, []);
  const scheduleMenuClose = (0,react.useCallback)(() => {
    menuCloseTimer.current = setTimeout(() => setHoveredCategory(null), 500);
  }, []);

  // Drives the open/close transition and content lifecycle
  (0,react.useEffect)(() => {
    if (hoveredCategory) {
      if (menuDomTimer.current) clearTimeout(menuDomTimer.current);
      if (!wasOpenRef.current) {
        // Opening from closed: render with opacity:0 first, then flip open on next frame
        setDisplayedCategory(hoveredCategory);
        setIsMenuOpen(false);
        requestAnimationFrame(() => {
          setIsMenuOpen(true);
          wasOpenRef.current = true;
        });
      } else {
        // Switching categories: instant content swap, keep transition state untouched
        setDisplayedCategory(hoveredCategory);
      }
    } else {
      // Closing: trigger transition out, remove from DOM after it finishes
      setIsMenuOpen(false);
      wasOpenRef.current = false;
      menuDomTimer.current = setTimeout(() => setDisplayedCategory(null), 400);
    }
  }, [hoveredCategory]);
  const megaMenuStyle = columnCount => {
    if (!catNavRef.current) return {};
    const navRect = catNavRef.current.getBoundingClientRect();
    const isNarrow = columnCount <= 3;
    const base = {
      position: 'fixed',
      top: navRect.bottom,
      zIndex: Z_POPOVER,
      backgroundColor: '#fff',
      borderRadius: 8,
      boxShadow: themeVars/* boxShadows */.FR.z3,
      overflow: 'hidden'
    };
    if (isNarrow) {
      const fullWidth = Math.min(navRect.width, 1440);
      const narrowWidth = Math.round(fullWidth * 0.6);
      const triggerRect = triggerRectRef.current;
      // Align left edge to the trigger, but clamp so menu never overflows the screen
      const idealLeft = triggerRect ? triggerRect.left : navRect.left;
      const clampedLeft = Math.min(idealLeft, window.innerWidth - narrowWidth - 16);
      return FiverrHeaderPage_objectSpread(FiverrHeaderPage_objectSpread({}, base), {}, {
        width: narrowWidth,
        left: Math.max(clampedLeft, 0)
      });
    }
    const maxWidth = 1440;
    const width = Math.min(navRect.width, maxWidth);
    const left = navRect.left + (navRect.width - width) / 2;
    return FiverrHeaderPage_objectSpread(FiverrHeaderPage_objectSpread({}, base), {}, {
      left,
      width
    });
  };
  const activeMenu = displayedCategory ? CATEGORY_MENUS[displayedCategory] : null;
  const panelStyle = isMenuOpen ? {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    pointerEvents: 'auto',
    transition: 'opacity 400ms cubic-bezier(.24,.48,0,.98), transform 400ms cubic-bezier(.24,.48,0,.98)'
  } : {
    opacity: 0,
    transform: 'translateY(-8px) scale(0.98)',
    pointerEvents: 'none',
    transition: 'opacity 300ms cubic-bezier(.24,.48,0,.98), transform 300ms cubic-bezier(.24,.48,0,.98)'
  };
  return /*#__PURE__*/react.createElement("div", {
    style: {
      backgroundColor: '#fff'
    }
  }, /*#__PURE__*/react.createElement(FiverrHeader, null), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement("div", {
    ref: catNavRef
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    maxWidth: "1400px",
    marginX: "auto",
    paddingX: "6",
    paddingTop: "2",
    paddingBottom: "2"
  }, /*#__PURE__*/react.createElement(Carousel/* default */.A, {
    scrollType: "row",
    breakpoints: {
      default: 1
    }
  }, /*#__PURE__*/react.createElement(Track/* default */.A, {
    autoSlidesWidth: true,
    showCardsFade: true,
    slidesGap: "2"
  }, CATEGORIES.map(cat => /*#__PURE__*/react.createElement(components_Slide/* default */.A, {
    key: cat
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "sm",
    variant: "ghost",
    onMouseEnter: CATEGORY_MENUS[cat] ? e => openMenu(cat, e.currentTarget) : undefined,
    onMouseLeave: CATEGORY_MENUS[cat] ? scheduleMenuClose : undefined
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, cat))))), /*#__PURE__*/react.createElement(Arrows/* default */.A, {
    position: "default",
    size: "xs"
  })))), activeMenu && catNavRef.current && /*#__PURE__*/react.createElement("div", {
    style: FiverrHeaderPage_objectSpread(FiverrHeaderPage_objectSpread({}, megaMenuStyle(activeMenu.columns.length)), panelStyle),
    onMouseEnter: () => hoveredCategory && openMenu(hoveredCategory, undefined),
    onMouseLeave: scheduleMenuClose
  }, /*#__PURE__*/react.createElement("style", null, "\n            .mega-menu-item {\n              display: flex; align-items: center; gap: 6px;\n              padding: 8px 8px; border-radius: 8px; cursor: pointer;\n              text-decoration: none !important; color: #62646a;\n              font-size: 14px; line-height: 22px; white-space: nowrap;\n            }\n            .mega-menu-item:hover { background-color: #F5F5F5; color: #222325; }\n            .mega-menu-item--cta { color: #222325; font-weight: 600; }\n            .mega-menu-item--cta:hover { background-color: #F5F5F5; }\n          "), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: "repeat(".concat(activeMenu.columns.length, ", auto)"),
      padding: '20px 24px 0',
      borderBottom: activeMenu.footer ? '1px solid #e4e5e7' : 'none'
    }
  }, activeMenu.columns.map((groups, colIdx) => /*#__PURE__*/react.createElement("div", {
    key: colIdx,
    style: {
      paddingRight: colIdx < activeMenu.columns.length - 1 ? 24 : 0,
      paddingBottom: 16
    }
  }, groups.map((group, gIdx) => /*#__PURE__*/react.createElement("div", {
    key: group.title,
    style: {
      marginBottom: gIdx < groups.length - 1 ? 20 : 0
    }
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "semibold",
    style: {
      display: 'block',
      padding: '8px 8px',
      marginBottom: 0
    }
  }, group.title), /*#__PURE__*/react.createElement("div", null, group.items.map(item => /*#__PURE__*/react.createElement("a", {
    key: item.label,
    href: "#",
    className: "mega-menu-item".concat(item.cta ? ' mega-menu-item--cta' : '')
  }, item.label, item.badge && /*#__PURE__*/react.createElement(NewBadge/* default */.A, null), item.icon === 'wand' && /*#__PURE__*/react.createElement(Wand/* default */.A, {
    size: "sm"
  }), item.cta && /*#__PURE__*/react.createElement(ExternalLink/* default */.A, {
    size: "sm"
  }))))))))), activeMenu.footer && /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '20px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "semibold"
  }, activeMenu.footer.title), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, activeMenu.footer.description)), /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "md",
    variant: "outline"
  }, activeMenu.footer.cta))), /*#__PURE__*/react.createElement(Divider/* default */.A, null));
}
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Check.js
var Check = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Check.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Revert.js
var Revert = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Revert.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ShieldStar.js
var ShieldStar = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ShieldStar.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ThumbsUp.js
var ThumbsUp = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ThumbsUp.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Rocket.js
var Rocket = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Rocket.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Trophy.js
var Trophy = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Trophy.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ArrowRight.js
var ArrowRight = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ArrowRight.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Globe.js
var Globe = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Globe.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js
var ChevronDown = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Medal.js
var Medal = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Medal.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Box.js
var system_Box = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Box.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/StarSolid.js
var StarSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/StarSolid.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Share.js
var Share = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Share.js");
;// ../badges/dist/esm/src/components/helpers/SellerLevelDiamondIcon/index.js


const SellerLevelDiamondIcon = _ref => {
  let {
    color = 'currentColor'
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10 10",
    width: 10,
    height: 10,
    fill: color === 'empty' ? themeVars/* colors */.Tj.grey_400 : themeVars/* colors */.Tj.currentColor
  }, /*#__PURE__*/react.createElement("path", {
    d: "M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"
  }));
};
SellerLevelDiamondIcon.displayName = 'SellerLevelDiamondIcon';
/* harmony default export */ const helpers_SellerLevelDiamondIcon = (SellerLevelDiamondIcon);
;
SellerLevelDiamondIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SellerLevelDiamondIcon"
};
;// ../badges/dist/esm/src/components/SellerLevelTwoBadge/index.js






const SellerLevelTwoBadge = _ref => {
  let {
    showTooltip = true,
    tooltipPosition = 'top',
    dataTestId,
    appendTooltipToBody,
    disableTooltipFlip,
    dataTrackTag = 'seller_level_two_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    showTooltip: showTooltip,
    color: "grey_1200",
    backgroundColor: "transparent",
    tooltipContent: (0,translate/* translate */.T)('badges.seller_level_two_badge.tooltip'),
    tooltipPosition: tooltipPosition,
    dataTestId: dataTestId,
    appendTooltipToBody: appendTooltipToBody,
    disableTooltipFlip: disableTooltipFlip,
    disablePadding: true,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "inlineFlex",
    gap: "1",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Level 2"), /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "inlineFlex",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(helpers_SellerLevelDiamondIcon, null), /*#__PURE__*/react.createElement(helpers_SellerLevelDiamondIcon, null), /*#__PURE__*/react.createElement(helpers_SellerLevelDiamondIcon, {
    color: "empty"
  }))));
};
SellerLevelTwoBadge.displayName = 'SellerLevelTwoBadge';
/* harmony default export */ const components_SellerLevelTwoBadge = (SellerLevelTwoBadge);
;
SellerLevelTwoBadge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SellerLevelTwoBadge"
};
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js
var filterChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js");
;// ../navigation/dist/esm/src/components/navigation/dist/esm/src/components/Breadcrumb/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../navigation/dist/esm/src/components/Breadcrumb/styles.ve.css.js.vanilla.css","source":"Ll8xcDJ3MmVrMDo6LXdlYmtpdC1zY3JvbGxiYXIgewogIGRpc3BsYXk6IG5vbmU7Cn0KLl8xcDJ3MmVrMTpsYXN0LWNoaWxkIHsKICBwYWRkaW5nLXJpZ2h0OiA2cHg7Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const node_modules_vanilla_extract_webpack_plugin_extracted = ({});
;// ../navigation/dist/esm/src/components/Breadcrumb/styles.ve.css.js

var hideScrollbar = '_1p2w2ek0';
var paddingLastChild = '_1p2w2ek1';
;// ../navigation/dist/esm/src/components/Breadcrumb/constants.js
const linkPrimary = 'linkPrimary';
const light = 'grey_300';
const colorMap = {
  linkPrimary,
  light
};
;// ../navigation/dist/esm/src/components/Breadcrumb/index.js
const Breadcrumb_excluded = ["color", "children", "dataTrackTag", "dataTrackValue"];
function Breadcrumb_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Breadcrumb_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Breadcrumb_ownKeys(Object(t), !0).forEach(function (r) {
      Breadcrumb_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Breadcrumb_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Breadcrumb_defineProperty(e, r, t) {
  return (r = Breadcrumb_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Breadcrumb_toPropertyKey(t) {
  var i = Breadcrumb_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Breadcrumb_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Breadcrumb_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = Breadcrumb_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function Breadcrumb_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}







const Breadcrumbs = _ref => {
  let {
      color = linkPrimary,
      children,
      dataTrackTag = 'breadcrumbs',
      dataTrackValue
    } = _ref,
    restProps = Breadcrumb_objectWithoutProperties(_ref, Breadcrumb_excluded);
  const breadcrumbsRef = (0,react.useRef)(null);
  const items = (0,filterChildrenByType/* filterChildrenByType */.X)(children, 'BreadcrumbsLink');
  const textColor = colorMap[color];
  (0,react.useEffect)(() => {
    if (breadcrumbsRef.current) {
      const {
        scrollWidth,
        clientWidth
      } = breadcrumbsRef.current;
      breadcrumbsRef.current.scrollLeft = scrollWidth - clientWidth;
    }
  }, []);
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    as: "nav",
    overflowX: "auto",
    maxWidth: "100%",
    display: "inlineBlock",
    style: {
      scrollBehavior: 'smooth',
      scrollbarWidth: 'none'
    },
    "aria-label": (0,translate/* translate */.T)('navigation.breadcrumb.ariaLabel'),
    ref: breadcrumbsRef,
    paddingY: "1",
    paddingLeft: "1.5",
    color: textColor,
    className: hideScrollbar,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Box/* default */.A, Breadcrumb_objectSpread({
    as: "ol",
    boxSizing: "borderBox",
    display: "flex",
    alignItems: "center",
    gap: "2"
  }, restProps), items.map((item, index) => /*#__PURE__*/react.createElement(react.Fragment, null, index !== 0 && /*#__PURE__*/react.createElement(Container/* default */.A, {
    key: "Sep".concat(index),
    role: "presentation",
    as: "li",
    color: "grey_600"
  }, "/"), item))));
};
Breadcrumbs.displayName = 'Breadcrumbs';
/* harmony default export */ const Breadcrumb = (Breadcrumbs);
;
Breadcrumbs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Breadcrumbs"
};
;// ../navigation/dist/esm/src/components/Breadcrumb/BreadcrumbsLink/index.js
const BreadcrumbsLink_excluded = ["children", "disabled", "tooltipContent", "dataTrackTag"];
function BreadcrumbsLink_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function BreadcrumbsLink_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? BreadcrumbsLink_ownKeys(Object(t), !0).forEach(function (r) {
      BreadcrumbsLink_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : BreadcrumbsLink_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function BreadcrumbsLink_defineProperty(e, r, t) {
  return (r = BreadcrumbsLink_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function BreadcrumbsLink_toPropertyKey(t) {
  var i = BreadcrumbsLink_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function BreadcrumbsLink_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function BreadcrumbsLink_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = BreadcrumbsLink_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function BreadcrumbsLink_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}






const BreadcrumbsLink = _ref => {
  let {
      children,
      disabled,
      tooltipContent,
      dataTrackTag = 'breadcrumbs_link'
    } = _ref,
    restProps = BreadcrumbsLink_objectWithoutProperties(_ref, BreadcrumbsLink_excluded);
  const breadcrumbsHomeIcon = (0,findChildByType/* findChildByType */.B)(children, 'BreadcrumbsHomeIcon');
  const content = breadcrumbsHomeIcon ? (0,render_children/* renderChildren */.s)(breadcrumbsHomeIcon, BreadcrumbsLink_objectSpread({
    disabled
  }, restProps)) : /*#__PURE__*/react.createElement(Link/* default */.A, BreadcrumbsLink_objectSpread({
    fontSize: "b_sm",
    decoration: {
      hover: 'underline'
    },
    outlineOffset: {
      focusVisible: 'lg'
    },
    disabled: disabled,
    color: "inherit",
    dataTrackTag: dataTrackTag
  }, restProps), children);
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "li",
    whiteSpace: "nowrap",
    boxSizing: "borderBox",
    className: paddingLastChild
  }, tooltipContent ? /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    offset: breadcrumbsHomeIcon ? 12 : 6,
    content: tooltipContent
  }, content) : content);
};
/* harmony default export */ const Breadcrumb_BreadcrumbsLink = (BreadcrumbsLink);
BreadcrumbsLink.id = 'BreadcrumbsLink';
BreadcrumbsLink.displayName = 'BreadcrumbsLink';
;
BreadcrumbsLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BreadcrumbsLink"
};
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Home.js
var Home = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Home.js");
;// ../navigation/dist/esm/src/components/Breadcrumb/BreadcrumbsHomeIcon/index.js




const BreadcrumbsHomeIcon = _ref => {
  let {
    disabled,
    href,
    dataTrackTag = 'breadcrumbs_home_icon',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    disabled: disabled,
    intent: "secondary",
    shape: "circle",
    variant: "ghost",
    size: "3xs",
    "aria-label": (0,translate/* translate */.T)('navigation.breadcrumb.breadcrumbsHomeIcon.home'),
    href: href,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Home/* default */.A, null));
};
/* harmony default export */ const Breadcrumb_BreadcrumbsHomeIcon = (BreadcrumbsHomeIcon);
BreadcrumbsHomeIcon.id = 'BreadcrumbsHomeIcon';
BreadcrumbsHomeIcon.displayName = 'BreadcrumbsHomeIcon';
;
BreadcrumbsHomeIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BreadcrumbsHomeIcon"
};
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Rating/index.js + 4 modules
var Rating = __webpack_require__("../data_display/dist/esm/src/components/Rating/index.js");
;// ../data_display/dist/esm/src/components/Timeline/TimelineContext/index.js

const TimelineContext = /*#__PURE__*/(0,react.createContext)({
  orientation: 'horizontal',
  currentIndex: 0,
  totalCount: 0,
  centered: false,
  stretched: false,
  disabledItems: new Set(),
  mode: 'full'
});
const useTimelineContext = () => (0,react.useContext)(TimelineContext);
;// ../data_display/dist/esm/src/components/Timeline/index.js
const Timeline_excluded = ["children", "orientation", "centered", "stretched", "currentIndex", "mode"];
function Timeline_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Timeline_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Timeline_ownKeys(Object(t), !0).forEach(function (r) {
      Timeline_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Timeline_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Timeline_defineProperty(e, r, t) {
  return (r = Timeline_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Timeline_toPropertyKey(t) {
  var i = Timeline_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Timeline_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Timeline_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = Timeline_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function Timeline_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}




const Timeline = _ref => {
  let {
      children,
      orientation = 'horizontal',
      centered = false,
      stretched = false,
      currentIndex,
      mode = 'full'
    } = _ref,
    rest = Timeline_objectWithoutProperties(_ref, Timeline_excluded);
  const totalCount = react.Children.count(children);
  const stackDirection = orientation === 'horizontal' ? 'row' : 'column';
  const disabledItems = react.useMemo(() => {
    const set = new Set();
    react.Children.forEach(children, (child, index) => {
      if (/*#__PURE__*/ /*#__PURE__*/ /*#__PURE__*/(0,react.isValidElement)(child) && child.props.disabled) {
        set.add(index);
      }
    });
    return set;
  }, [children]);
  return /*#__PURE__*/react.createElement(TimelineContext.Provider, {
    value: {
      orientation,
      currentIndex,
      totalCount,
      centered,
      stretched,
      disabledItems,
      mode
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, Timeline_objectSpread({
    gap: "0",
    width: "100%",
    alignItems: "flexStart",
    direction: stackDirection,
    justifyContent: stretched ? 'spaceBetween' : undefined
  }, rest), react.Children.map(children, (child, index) => (0,render_children/* renderChildren */.s)(child, {
    key: index,
    index
  }))));
};
Timeline.displayName = 'Timeline';
/* harmony default export */ const components_Timeline = (Timeline);
;
Timeline.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Timeline"
};
;// ../data_display/dist/esm/src/components/Timeline/utils/index.js
const getDividerColor = function (isCompleted) {
  let disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (disabled) {
    return 'grey_500';
  }
  if (isCompleted) {
    return 'grey_1200';
  }
  return 'grey_800';
};
;// ../data_display/dist/esm/src/components/Timeline/hooks/useFindElements.js


const useFindElements = children => {
  const icon = (0,findChildByType/* findChildByType */.B)(children, 'TimelineIcon');
  const title = (0,findChildByType/* findChildByType */.B)(children, 'TimelineTitle');
  const description = (0,findChildByType/* findChildByType */.B)(children, 'TimelineDescription');
  return {
    icon,
    title,
    description
  };
};
;// ../data_display/dist/esm/src/components/Timeline/TimelineItem/TimelineHorizontalItem.js






const TimelineHorizontalItem = _ref => {
  let {
    isFirst,
    isLast,
    isCompleted,
    isActive,
    disabled,
    isNextItemDisabled,
    isPrevItemDisabled,
    state,
    children
  } = _ref;
  const {
    centered,
    totalCount,
    stretched
  } = useTimelineContext();
  const {
    icon,
    title,
    description
  } = useFindElements(children);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    width: !centered && isLast || stretched ? 'auto' : "calc(100% / ".concat(totalCount, ")"),
    flexShrink: 0,
    direction: "column",
    alignItems: "center",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: centered ? 'center' : 'flexStart',
    justifyContent: centered ? 'center' : 'flexStart',
    gap: "1",
    width: "100%",
    position: "relative"
  }, !isFirst && /*#__PURE__*/react.createElement(Container/* default */.A, {
    right: centered ? 'calc(50% + 16px)' : undefined,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    height: "2px",
    backgroundColor: getDividerColor(isCompleted || isActive, disabled || isPrevItemDisabled)
  }), /*#__PURE__*/react.createElement(Center/* default */.A, {
    backgroundColor: "white",
    zIndex: "2",
    height: 32,
    paddingX: "1"
  }, (0,render_children/* renderChildren */.s)(icon, {
    state,
    disabled
  })), !isLast && /*#__PURE__*/react.createElement(Container/* default */.A, {
    left: centered ? 'calc(50% + 16px)' : 0,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: 0,
    height: "2px",
    backgroundColor: getDividerColor(isCompleted, disabled || isNextItemDisabled)
  })), (title || description) && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    paddingX: "1",
    direction: "column",
    gap: "0",
    width: "100%"
  }, title && (0,render_children/* renderChildren */.s)(title, {
    disabled,
    isActive
  }), description && (0,render_children/* renderChildren */.s)(description, {
    disabled
  }))), !isLast && stretched && /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "relative",
    marginTop: "4",
    top: "-1px",
    width: "100%",
    height: "2px",
    backgroundColor: getDividerColor(isCompleted, disabled || isNextItemDisabled)
  }));
};
TimelineHorizontalItem.displayName = 'TimelineHorizontalItem';
/* harmony default export */ const TimelineItem_TimelineHorizontalItem = (TimelineHorizontalItem);
;
TimelineHorizontalItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TimelineHorizontalItem"
};
;// ../data_display/dist/esm/src/components/Timeline/TimelineItem/TimelineVerticalItem.js





const TimelineVerticalItem = _ref => {
  let {
    isLast,
    isCompleted,
    isActive,
    disabled,
    isNextItemDisabled,
    state,
    isFirst,
    children
  } = _ref;
  const {
    icon,
    title,
    description
  } = useFindElements(children);
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "stretch",
    height: !isLast ? '100%' : 'auto',
    gap: "2"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center",
    direction: "column",
    gap: "0",
    minHeight: !isLast ? '86px' : 'auto',
    position: "relative"
  }, (0,render_children/* renderChildren */.s)(icon, {
    state,
    disabled,
    isFirst,
    isLast
  }), !isLast && /*#__PURE__*/react.createElement(Container/* default */.A, {
    height: "100%",
    width: "2px",
    backgroundColor: getDividerColor(isCompleted, disabled || isNextItemDisabled)
  })), (title || description) && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0"
  }, title && (0,render_children/* renderChildren */.s)(title, {
    disabled,
    isActive,
    withoutDescription: !description
  }), description && (0,render_children/* renderChildren */.s)(description, {
    disabled
  })));
};
TimelineVerticalItem.displayName = 'TimelineVerticalItem';
/* harmony default export */ const TimelineItem_TimelineVerticalItem = (TimelineVerticalItem);
;
TimelineVerticalItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TimelineVerticalItem"
};
;// ../data_display/dist/esm/src/components/Timeline/TimelineItem/index.js




const TimelineItem = _ref => {
  let {
    index = 0,
    children,
    disabled
  } = _ref;
  const {
    orientation,
    currentIndex,
    totalCount,
    disabledItems
  } = useTimelineContext();
  const isActive = currentIndex === index;
  const isCompleted = index < currentIndex;
  const isFirst = index === 0;
  const isLast = index === totalCount - 1;
  const isNextItemDisabled = disabledItems.has(index + 1);
  const isPrevItemDisabled = disabledItems.has(index - 1);
  let state = 'notStarted';
  if (isActive) {
    state = 'current';
  } else if (isCompleted) {
    state = 'completed';
  }
  if (orientation === 'vertical') {
    return /*#__PURE__*/react.createElement(TimelineItem_TimelineVerticalItem, {
      isLast: isLast,
      isActive: isActive,
      isCompleted: isCompleted,
      disabled: disabled,
      isNextItemDisabled: isNextItemDisabled,
      state: state,
      isFirst: isFirst
    }, children);
  }
  return /*#__PURE__*/react.createElement(TimelineItem_TimelineHorizontalItem, {
    isFirst: isFirst,
    isLast: isLast,
    isCompleted: isCompleted,
    isActive: isActive,
    disabled: disabled,
    isNextItemDisabled: isNextItemDisabled,
    isPrevItemDisabled: isPrevItemDisabled,
    state: state
  }, children);
};
TimelineItem.displayName = 'TimelineItem';
/* harmony default export */ const Timeline_TimelineItem = (TimelineItem);
;
TimelineItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TimelineItem"
};
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/CheckCircleSolid.js
var CheckCircleSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckCircleSolid.js");
;// ../data_display/dist/esm/src/components/Timeline/TimelineIcon/index.js



const defaultIcons = {
  current: () => /*#__PURE__*/react.createElement(Center/* default */.A, {
    width: 16,
    height: 16,
    borderRadius: "circle",
    backgroundColor: "grey_1200"
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    backgroundColor: "white",
    width: "4px",
    height: "4px",
    borderRadius: "circle"
  })),
  completed: () => /*#__PURE__*/react.createElement(CheckCircleSolid/* default */.A, {
    size: "sm",
    color: "grey_1200"
  }),
  notStarted: () => /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: 16,
    height: 16,
    borderRadius: "circle",
    borderWidth: "md",
    borderColor: "grey_800"
  }),
  disabled: () => /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: 16,
    height: 16,
    borderRadius: "circle",
    borderWidth: "md",
    borderColor: "grey_500"
  })
};
const TimelineIcon = _ref => {
  let {
    children,
    state,
    disabled,
    isFirst,
    isLast
  } = _ref;
  if (children) {
    const backgroundColor = state === 'notStarted' ? 'white' : 'grey_1200';
    return /*#__PURE__*/react.createElement(Center/* default */.A, {
      paddingTop: isFirst ? undefined : '1',
      paddingBottom: isLast ? undefined : '1',
      backgroundColor: "white",
      zIndex: "2"
    }, /*#__PURE__*/react.createElement(Center/* default */.A, {
      width: 32,
      height: 32,
      borderRadius: "circle",
      backgroundColor: disabled ? 'grey_300' : backgroundColor
    }, children));
  }
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    flexShrink: "0",
    height: 24,
    borderRadius: "circle",
    backgroundColor: "white",
    zIndex: "2"
  }, defaultIcons[disabled ? 'disabled' : state || 'notStarted']());
};
TimelineIcon.displayName = 'TimelineIcon';
TimelineIcon.id = 'TimelineIcon';
/* harmony default export */ const Timeline_TimelineIcon = (TimelineIcon);
;
TimelineIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TimelineIcon"
};
;// ../data_display/dist/esm/src/components/Timeline/TimelineTitle/index.js
function TimelineTitle_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TimelineTitle_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TimelineTitle_ownKeys(Object(t), !0).forEach(function (r) {
      TimelineTitle_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TimelineTitle_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TimelineTitle_defineProperty(e, r, t) {
  return (r = TimelineTitle_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TimelineTitle_toPropertyKey(t) {
  var i = TimelineTitle_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TimelineTitle_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}



const TimelineTitle = _ref => {
  let {
    children,
    disabled,
    isActive,
    withoutDescription = false
  } = _ref;
  const {
    mode,
    orientation,
    centered
  } = useTimelineContext();
  const isCompactMode = mode === 'compact';
  if (isCompactMode && !isActive) {
    return null;
  }
  const withoutDescriptionStyle = withoutDescription ? {
    height: 24,
    display: 'flex',
    alignItems: 'center'
  } : {};
  return /*#__PURE__*/react.createElement(Box/* default */.A, TimelineTitle_objectSpread({
    fontSize: "b_sm",
    width: "100%",
    lineHeight: "b_sm",
    color: disabled ? 'grey_800' : 'bodyPrimary',
    textAlign: centered && orientation === 'horizontal' ? 'center' : 'start'
  }, withoutDescriptionStyle), children);
};
TimelineTitle.displayName = 'TimelineTitle';
TimelineTitle.id = 'TimelineTitle';
/* harmony default export */ const Timeline_TimelineTitle = (TimelineTitle);
;
TimelineTitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TimelineTitle"
};
;// ../data_display/dist/esm/src/components/Timeline/TimelineDescription/index.js



const TimelineDescription = _ref => {
  let {
    children,
    disabled
  } = _ref;
  const {
    centered,
    mode,
    orientation
  } = useTimelineContext();
  if (mode === 'compact') {
    return null;
  }
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    color: disabled ? 'grey_800' : 'bodySecondary',
    fontSize: "b_sm",
    lineHeight: "b_sm",
    textAlign: centered ? 'center' : 'start',
    width: orientation === 'horizontal' ? '100%' : undefined
  }, children);
};
TimelineDescription.displayName = 'TimelineDescription';
TimelineDescription.id = 'TimelineDescription';
/* harmony default export */ const Timeline_TimelineDescription = (TimelineDescription);
;
TimelineDescription.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TimelineDescription"
};
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Checkbox/index.js + 2 modules
var Checkbox = __webpack_require__("../inputs/dist/esm/src/components/Checkbox/index.js");
;// ../penta_playground/src/components/FiverrGigPage.tsx
function FiverrGigPage_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function FiverrGigPage_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? FiverrGigPage_ownKeys(Object(t), !0).forEach(function (r) {
      FiverrGigPage_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : FiverrGigPage_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function FiverrGigPage_defineProperty(e, r, t) {
  return (r = FiverrGigPage_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function FiverrGigPage_toPropertyKey(t) {
  var i = FiverrGigPage_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function FiverrGigPage_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function FiverrGigPage_extends() {
  return FiverrGigPage_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, FiverrGigPage_extends.apply(null, arguments);
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const alexAvatar = __webpack_require__("../penta_playground/src/assets/alex.png");













// ─── Data ────────────────────────────────────────────────────────────────────

const PACKAGES = [{
  name: 'Basic',
  price: 149,
  deliveryDays: 5,
  revisions: '3',
  description: 'A polished landing page to establish your online presence fast.',
  features: [{
    text: 'Up to 3 pages',
    included: true
  }, {
    text: 'Responsive design',
    included: true
  }, {
    text: 'Contact form',
    included: true
  }, {
    text: 'SEO optimisation',
    included: false
  }, {
    text: 'User authentication',
    included: false
  }, {
    text: 'Database integration',
    included: false
  }]
}, {
  name: 'Standard',
  price: 349,
  deliveryDays: 10,
  revisions: 'Unlimited',
  description: 'A complete business website with everything you need to grow.',
  features: [{
    text: 'Up to 8 pages',
    included: true
  }, {
    text: 'Responsive design',
    included: true
  }, {
    text: 'Contact form',
    included: true
  }, {
    text: 'SEO optimisation',
    included: true
  }, {
    text: 'User authentication',
    included: false
  }, {
    text: 'Database integration',
    included: false
  }]
}, {
  name: 'Premium',
  price: 749,
  deliveryDays: 21,
  revisions: 'Unlimited',
  description: 'A full web app with auth, database, and an admin dashboard.',
  features: [{
    text: 'Unlimited pages',
    included: true
  }, {
    text: 'Responsive design',
    included: true
  }, {
    text: 'Contact form',
    included: true
  }, {
    text: 'SEO optimisation',
    included: true
  }, {
    text: 'User authentication',
    included: true
  }, {
    text: 'Database integration',
    included: true
  }]
}];
const REVIEWS = [{
  username: 'sarah_m',
  avatarSrc: 'https://picsum.photos/seed/sarah/40/40',
  name: 'Sarah M.',
  country: 'United States',
  tier: 'Pro Gold',
  rating: 5,
  date: '2 weeks ago',
  text: "Alex delivered exceptional work! The web app is clean, fast, and exactly what I envisioned. Communication was top-notch throughout. Will definitely hire again.",
  priceRange: '$150–$300',
  duration: '2 weeks'
}, {
  username: 'techstartup',
  avatarSrc: 'https://picsum.photos/seed/tech/40/40',
  name: 'TechStartup Inc.',
  country: 'Canada',
  tier: 'Pro Platinum',
  rating: 5,
  date: '1 month ago',
  text: "We hired Alex for our SaaS dashboard rebuild. The result exceeded our expectations — delivered on time, responsive to feedback, and outstanding code quality.",
  priceRange: '$700–$1,000',
  duration: '3 weeks'
}, {
  username: 'james_b',
  avatarSrc: 'https://picsum.photos/seed/jamesb/40/40',
  name: 'James B.',
  country: 'United Kingdom',
  tier: null,
  rating: 4,
  date: '1 month ago',
  text: 'Great developer with solid skills in React and Node.js. The project took slightly longer than expected but the quality was worth the wait.',
  priceRange: '$300–$500',
  duration: '10 days'
}, {
  username: 'marina_k',
  avatarSrc: 'https://picsum.photos/seed/marina/40/40',
  name: 'Marina K.',
  country: 'Germany',
  tier: 'Pro Silver',
  rating: 5,
  date: '2 months ago',
  text: 'Outstanding experience from start to finish. Alex took time to understand our product vision and translated it into a polished, performant app. Highly recommended!',
  priceRange: '$500–$750',
  duration: '2 weeks'
}, {
  username: 'raj_p',
  avatarSrc: 'https://picsum.photos/seed/rajp/40/40',
  name: 'Raj P.',
  country: 'India',
  tier: null,
  rating: 5,
  date: '2 months ago',
  text: "Third time working with Alex and it keeps getting better. Brought our complex dashboard to life with clean architecture and zero bugs on delivery. 10/10.",
  priceRange: '$300–$500',
  duration: '3 weeks'
}, {
  username: 'olivia_f',
  avatarSrc: 'https://picsum.photos/seed/olivia/40/40',
  name: 'Olivia F.',
  country: 'Australia',
  tier: 'Pro Gold',
  rating: 4,
  date: '3 months ago',
  text: 'Very professional and knowledgeable. The e-commerce integration was handled seamlessly. Minor delay on one feature but Alex kept me informed throughout.',
  priceRange: '$150–$300',
  duration: '1 week'
}];
const GIG_HIGHLIGHTS = ['Clean, well-documented, production-ready code', 'Pixel-perfect implementation from your designs or Figma files', 'Full responsiveness across all devices and browsers', 'Performance optimisation and SEO best practices', 'Regular updates and transparent communication', 'Post-delivery support for 30 days'];
const RELATED_TAGS = ['react developer', 'nextjs website', 'fullstack app', 'nodejs backend', 'saas development', 'typescript developer', 'rest api', 'dashboard ui'];
const RATING_BREAKDOWN = [{
  label: 'Seller communication level',
  score: 4.9
}, {
  label: 'Quality of delivery',
  score: 4.9
}, {
  label: 'Value of delivery',
  score: 4.9
}];
const STAR_DISTRIBUTION = [{
  stars: 5,
  label: '5 Stars',
  count: 285
}, {
  stars: 4,
  label: '4 Stars',
  count: 21
}, {
  stars: 3,
  label: '3 Stars',
  count: 5
}, {
  stars: 2,
  label: '2 Stars',
  count: 0
}, {
  stars: 1,
  label: '1 Star',
  count: 0
}];
const TOTAL_REVIEWS = 311;
const PROCESS_STEPS = [{
  step: 1,
  title: 'Discovery call',
  desc: 'We kick off with a 30-min session to align on requirements, goals, and timeline. No surprises later.'
}, {
  step: 2,
  title: 'Architecture & design',
  desc: 'I map out the component structure, database schema, and API contracts before writing a single line.'
}, {
  step: 3,
  title: 'Development with weekly previews',
  desc: 'You get a live staging link after each sprint so you can review progress and give feedback early.'
}, {
  step: 4,
  title: 'Delivery & handoff',
  desc: /*#__PURE__*/react.createElement(react.Fragment, null, "Clean repo, full documentation,", /*#__PURE__*/react.createElement("br", null), "deployment to your infra,", /*#__PURE__*/react.createElement("br", null), "and 30 days of post-launch support.")
}];
const PORTFOLIO_PROJECTS = [{
  title: 'SaaS Analytics Dashboard',
  description: 'Real-time data visualisation platform for a fintech startup. Replaced a legacy monolith with a React/Node microservice architecture.',
  tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  imageSrc: 'https://picsum.photos/seed/port1/600/340',
  result: '40% faster load time'
}, {
  title: 'E-Commerce Platform',
  description: 'Full custom checkout and subscription management system, replacing Shopify for a DTC brand at scale.',
  tags: ['Next.js', 'Stripe', 'TypeScript', 'Redis'],
  imageSrc: 'https://picsum.photos/seed/port2/600/340',
  result: '50K+ active users'
}, {
  title: 'Enterprise HR Portal',
  description: 'Internal employee portal with SSO, role-based access, Slack & Jira integrations, deployed across 6 global offices.',
  tags: ['TypeScript', 'GraphQL', 'Docker', 'Kubernetes'],
  imageSrc: 'https://picsum.photos/seed/port3/600/340',
  result: '3× team productivity'
}];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CheckItem(_ref) {
  let {
    text,
    included
  } = _ref;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, included ? /*#__PURE__*/react.createElement(Check/* default */.A, {
    size: "sm",
    color: "grey_1200"
  }) : /*#__PURE__*/react.createElement("span", {
    style: {
      width: 16,
      textAlign: 'center',
      color: '#c5c6c9',
      fontSize: 14,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "\u2013"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: included ? 'bodyPrimary' : 'bodySecondary'
  }, text));
}
function PricingPanel(_ref2) {
  let {
    pkg
  } = _ref2;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4",
    paddingLeft: "6",
    paddingRight: "6",
    paddingY: "6"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "flexEnd",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    size: "h_lg",
    fontWeight: "bold",
    color: "grey_1200"
  }, "$", pkg.price)), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, pkg.description), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "4"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1.5",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Clock/* default */.A, {
    size: "sm"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, pkg.deliveryDays, "-day delivery")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1.5",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Revert/* default */.A, {
    size: "sm"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, pkg.revisions, " revisions"))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "2.5"
  }, pkg.features.map(f => /*#__PURE__*/react.createElement(CheckItem, FiverrGigPage_extends({
    key: f.text
  }, f)))), /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "md",
    fullWidth: true
  }, "Continue ($", pkg.price, ")"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1.5",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react.createElement(ShieldStar/* default */.A, {
    size: "sm"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, "Satisfaction guaranteed or your money back")));
}
function ContactDrawer() {
  return /*#__PURE__*/react.createElement(components_Drawer, null, /*#__PURE__*/react.createElement(Drawer_DrawerTrigger, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "md",
    variant: "outline",
    fullWidth: true
  }, /*#__PURE__*/react.createElement(Envelope/* default */.A, null), "Contact me")), /*#__PURE__*/react.createElement(Drawer_DrawerContent, {
    position: "right",
    size: "lg"
  }, /*#__PURE__*/react.createElement(Drawer_DrawerHeader, null, "Contact Alex Rivera", /*#__PURE__*/react.createElement(Drawer_DrawerCloseButton, null)), /*#__PURE__*/react.createElement(Drawer_DrawerBody, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "5"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "alexrivera",
    size: "lg"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: alexAvatar
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, "Alex Rivera"), /*#__PURE__*/react.createElement(components_VettedProBadge, {
    variant: "default"
  })), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Typically responds within 1 hour"))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "2"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "Your message"), /*#__PURE__*/react.createElement("textarea", {
    placeholder: "Describe your project, timeline, and any specific requirements...",
    style: {
      width: '100%',
      minHeight: 140,
      padding: '12px',
      borderRadius: 8,
      border: '1px solid #dadbdd',
      fontSize: 14,
      fontFamily: 'inherit',
      resize: 'vertical',
      boxSizing: 'border-box',
      outline: 'none',
      color: '#222325'
    }
  })))), /*#__PURE__*/react.createElement(Drawer_DrawerFooter, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "md"
  }, "Send Message"))));
}
function SellerBioCard() {
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "5"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2",
    size: "h_sm"
  }, "Get to know Alex Rivera"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "alexrivera",
    size: "xl"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: alexAvatar
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 4,
      right: 4,
      width: 14,
      height: 14,
      borderRadius: '50%',
      backgroundColor: '#19a463',
      border: '2px solid #fff'
    }
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, /*#__PURE__*/react.createElement(Link/* default */.A, {
    href: "#"
  }, "Alex Rivera")), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Full-Stack Developer"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Rating/* default */.A, {
    score: 4.9,
    reviews: "847"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "|"), /*#__PURE__*/react.createElement(components_SellerLevelTwoBadge, null)))), /*#__PURE__*/react.createElement(ContactDrawer, null), /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "default",
    borderColor: "border",
    padding: "5",
    borderRadius: "lg"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px 32px'
    }
  }, [{
    label: 'From',
    value: 'Spain'
  }, {
    label: 'Member since',
    value: 'Jan 2018'
  }, {
    label: 'Avg. response time',
    value: '< 1 hour'
  }, {
    label: 'Last delivery',
    value: '1 day'
  }].map(_ref3 => {
    let {
      label,
      value
    } = _ref3;
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      key: label,
      direction: "column",
      gap: "0.5"
    }, /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      color: "bodySecondary"
    }, label), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      fontWeight: "bold"
    }, value));
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Languages"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "English, Spanish")), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, "I'm a professional full-stack engineer with 7+ years of experience shipping production apps for startups and enterprises across the US, Europe, and APAC. I specialise in React, Node.js, and cloud infrastructure \u2014 building everything from marketing sites to complex SaaS platforms."))));
}
function RatingBreakdown() {
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "2"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "Rating Breakdown"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "2"
  }, RATING_BREAKDOWN.map(_ref4 => {
    let {
      label,
      score
    } = _ref4;
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      key: label,
      direction: "row",
      justifyContent: "spaceBetween",
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      color: "bodySecondary"
    }, label), /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      gap: "1",
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(ThumbsUp/* default */.A, {
      size: "sm"
    }), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      fontWeight: "bold"
    }, score)));
  })));
}
function ReviewCard(_ref5) {
  let {
    username,
    avatarSrc,
    name,
    country,
    tier,
    rating,
    date,
    text,
    priceRange,
    duration
  } = _ref5;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "3"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: username,
    size: "smd"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: avatarSrc
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, name), tier && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(ProClientTier/* default */.A, {
    size: "sm"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, tier))), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, country), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Rating/* default */.A, {
    score: rating,
    showScore: false
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, date)))), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodyPrimary"
  }, text), (priceRange || duration) && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "center"
  }, priceRange && /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, priceRange), priceRange && duration && /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, "\xB7"), duration && /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, duration)));
}

// ─── Process & Portfolio Sections (Contra patterns) ──────────────────────────

const PROCESS_ICONS = [/*#__PURE__*/react.createElement(CalendarAvailable/* default */.A, {
  size: "sm",
  color: "white"
}), /*#__PURE__*/react.createElement(Pencil/* default */.A, {
  size: "sm",
  color: "white"
}), /*#__PURE__*/react.createElement(Rocket/* default */.A, {
  size: "sm",
  color: "white"
}), /*#__PURE__*/react.createElement(Trophy/* default */.A, {
  size: "sm",
  color: "white"
})];
function MyProcessSection() {
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "5"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2",
    size: "h_sm"
  }, "How I work"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "A structured process means no surprises \u2014 just consistent, predictable delivery.")), /*#__PURE__*/react.createElement("div", {
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, /*#__PURE__*/react.createElement(components_Timeline, {
    orientation: "horizontal",
    currentIndex: PROCESS_STEPS.length
  }, PROCESS_STEPS.map((_ref6, idx) => {
    let {
      step,
      title,
      desc
    } = _ref6;
    return /*#__PURE__*/react.createElement(Timeline_TimelineItem, {
      key: step
    }, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null, PROCESS_ICONS[idx]), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      fontWeight: "bold",
      marginTop: "2",
      marginBottom: "1"
    }, title)), /*#__PURE__*/react.createElement(Timeline_TimelineDescription, null, desc));
  }))));
}

// All feature labels across all packages (union, preserving order)
const COMPARE_ROWS = ['Up to 3 pages', 'Responsive design', 'Contact form', 'SEO optimisation', 'User authentication', 'Database integration'];
function ComparePackagesSection() {
  const colWidth = "".concat(100 / (PACKAGES.length + 1), "%");
  const cellStyle = {
    padding: '12px 16px',
    borderBottom: '1px solid #e4e5e7',
    verticalAlign: 'middle'
  };
  const headerCellStyle = FiverrGigPage_objectSpread(FiverrGigPage_objectSpread({}, cellStyle), {}, {
    backgroundColor: '#fafafa',
    fontWeight: 600
  });
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2",
    size: "h_sm"
  }, "Compare packages"), /*#__PURE__*/react.createElement("div", {
    style: {
      border: '1px solid #e4e5e7',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/react.createElement("colgroup", null, /*#__PURE__*/react.createElement("col", {
    style: {
      width: colWidth
    }
  }), PACKAGES.map(p => /*#__PURE__*/react.createElement("col", {
    key: p.name,
    style: {
      width: colWidth
    }
  }))), /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: FiverrGigPage_objectSpread(FiverrGigPage_objectSpread({}, headerCellStyle), {}, {
      textAlign: 'left'
    })
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Package")), PACKAGES.map(pkg => /*#__PURE__*/react.createElement("th", {
    key: pkg.name,
    style: FiverrGigPage_objectSpread(FiverrGigPage_objectSpread({}, headerCellStyle), {}, {
      textAlign: 'left'
    })
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_lg",
    fontWeight: "bold"
  }, "$", pkg.price), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, pkg.name), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, pkg.description)))))), /*#__PURE__*/react.createElement("tbody", null, COMPARE_ROWS.map((feature, i) => /*#__PURE__*/react.createElement("tr", {
    key: feature,
    style: {
      backgroundColor: i % 2 === 0 ? '#fff' : '#fafafa'
    }
  }, /*#__PURE__*/react.createElement("td", {
    style: cellStyle
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, feature)), PACKAGES.map(pkg => {
    const f = pkg.features.find(f => f.text === feature);
    return /*#__PURE__*/react.createElement("td", {
      key: pkg.name,
      style: FiverrGigPage_objectSpread(FiverrGigPage_objectSpread({}, cellStyle), {}, {
        textAlign: 'center'
      })
    }, f !== null && f !== void 0 && f.included ? /*#__PURE__*/react.createElement(Check/* default */.A, {
      size: "sm",
      color: "grey_1200"
    }) : /*#__PURE__*/react.createElement("span", {
      style: {
        color: '#c5c6c9',
        fontSize: 18,
        lineHeight: 1
      }
    }, "\u2014"));
  }))), /*#__PURE__*/react.createElement("tr", {
    style: {
      backgroundColor: COMPARE_ROWS.length % 2 === 0 ? '#fff' : '#fafafa'
    }
  }, /*#__PURE__*/react.createElement("td", {
    style: cellStyle
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Revisions")), PACKAGES.map(pkg => /*#__PURE__*/react.createElement("td", {
    key: pkg.name,
    style: FiverrGigPage_objectSpread(FiverrGigPage_objectSpread({}, cellStyle), {}, {
      textAlign: 'center'
    })
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, pkg.revisions)))), /*#__PURE__*/react.createElement("tr", {
    style: {
      backgroundColor: (COMPARE_ROWS.length + 1) % 2 === 0 ? '#fff' : '#fafafa'
    }
  }, /*#__PURE__*/react.createElement("td", {
    style: cellStyle
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Delivery Time")), PACKAGES.map(pkg => /*#__PURE__*/react.createElement("td", {
    key: pkg.name,
    style: FiverrGigPage_objectSpread(FiverrGigPage_objectSpread({}, cellStyle), {}, {
      textAlign: 'center'
    })
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, pkg.deliveryDays, " days")))), /*#__PURE__*/react.createElement("tr", null, PACKAGES.map((pkg, i) => /*#__PURE__*/react.createElement("td", {
    key: pkg.name,
    style: FiverrGigPage_objectSpread(FiverrGigPage_objectSpread({}, cellStyle), {}, {
      textAlign: 'center'
    }),
    colSpan: i === 0 ? 2 : 1
  }, i === 0 && /*#__PURE__*/react.createElement("td", {
    style: FiverrGigPage_objectSpread(FiverrGigPage_objectSpread({}, cellStyle), {}, {
      borderBottom: 'none'
    })
  })))), /*#__PURE__*/react.createElement("tr", {
    style: {
      borderTop: '1px solid #e4e5e7'
    }
  }, /*#__PURE__*/react.createElement("td", {
    style: {
      padding: '16px',
      borderBottom: 'none'
    }
  }), PACKAGES.map(pkg => /*#__PURE__*/react.createElement("td", {
    key: pkg.name,
    style: {
      padding: '16px',
      textAlign: 'center',
      borderBottom: 'none'
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "$", pkg.price), /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "md",
    fullWidth: true
  }, "Select")))))))));
}
const PJM_FREELANCERS = [{
  src: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/72ed828685e078ee2fa57ed6df4589bf-1764151292603/pjm_image_1.png',
  name: 'Eugene Cherniak',
  left: 0,
  zIndex: 1,
  rotate: -8
}, {
  src: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/f9b4ef797bca4938ad83d9962f7ce8ff-1764151319283/pjm_image_2.png',
  name: 'Alina Cruz',
  left: 76,
  zIndex: 2,
  rotate: -2
}, {
  src: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/eefa21399c282a0767d8b427108f6fbd-1764151342305/pjm_image_3.png',
  name: 'r Musiilenko',
  left: 152,
  zIndex: 3,
  rotate: 6
}];
function SourceForMeBanner() {
  const cards = [{
    src: PJM_FREELANCERS[2].src,
    name: 'Viktor Musiienko',
    left: 156,
    top: 20,
    zIndex: 1,
    rotate: 6
  }, {
    src: PJM_FREELANCERS[1].src,
    name: 'Carolina Cruz',
    left: 78,
    top: 10,
    zIndex: 2,
    rotate: 1
  }, {
    src: PJM_FREELANCERS[0].src,
    name: 'Eugene Cherniak',
    left: 0,
    top: 0,
    zIndex: 3,
    rotate: -4
  }];
  return /*#__PURE__*/react.createElement("div", {
    style: {
      borderRadius: 12,
      background: 'linear-gradient(168.29deg, #ffffff 29.7%, #f3f6d4 69.6%, #d0e500 99.9%)',
      border: '1px solid #f1f4cb',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      flex: 1,
      padding: '32px 24px'
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: '36px',
      color: '#222325'
    }
  }, "Get the right freelancer,", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    style: {
      color: '#00732e'
    }
  }, "without the search")), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    color: "bodyPrimary"
  }, "We'll handle the sourcing, interviewing, and vetting so you don't have to."), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "sm",
    intent: "primary",
    variant: "filled"
  }, "Source for me", /*#__PURE__*/react.createElement(ArrowRight/* default */.A, null))))), /*#__PURE__*/react.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 40px'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      width: 260,
      height: 200
    }
  }, cards.map(_ref7 => {
    let {
      src,
      name,
      left,
      top,
      zIndex,
      rotate
    } = _ref7;
    return /*#__PURE__*/react.createElement("div", {
      key: name,
      style: {
        position: 'absolute',
        left,
        top,
        zIndex,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: '16px 14px 14px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
        transform: "rotate(".concat(rotate, "deg)"),
        width: 104,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/react.createElement("img", {
      src: src,
      alt: name,
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block'
      }
    }), /*#__PURE__*/react.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 5
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: '#222325',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center'
      }
    }, name), /*#__PURE__*/react.createElement("div", {
      style: {
        height: 4,
        background: '#e4e5e7',
        borderRadius: 4,
        width: '100%'
      }
    }), /*#__PURE__*/react.createElement("div", {
      style: {
        height: 4,
        background: '#e4e5e7',
        borderRadius: 4,
        width: '60%',
        margin: '0 auto'
      }
    })));
  }))));
}
function PortfolioSection() {
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "5"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "spaceBetween",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2",
    size: "h_sm"
  }, "Portfolio"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Recent projects with measurable outcomes")), /*#__PURE__*/react.createElement(TextButton/* default */.A, {
    href: "#"
  }, "View all work")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "5"
  }, PORTFOLIO_PROJECTS.map(project => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    key: project.title,
    direction: "row",
    gap: "5",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      borderRadius: 10,
      overflow: 'hidden',
      flexShrink: 0,
      lineHeight: 0
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: project.imageSrc,
    alt: project.title,
    style: {
      width: 180,
      height: 108,
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "2",
    flex: "1",
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "spaceBetween",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, project.title), /*#__PURE__*/react.createElement("div", {
    style: {
      backgroundColor: '#e6f9f0',
      color: '#19a463',
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 20,
      flexShrink: 0,
      marginLeft: 8,
      whiteSpace: 'nowrap'
    }
  }, project.result)), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, project.description), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, project.tags.map(tag => /*#__PURE__*/react.createElement(Tag/* default */.A, {
    key: tag,
    variant: "outline",
    size: "xs"
  }, tag))))))));
}

// ─── Footer ─────────────────────────────────────────────────────────────────

const FOOTER_COLUMNS = [{
  heading: 'Categories',
  links: ['Graphics & Design', 'Digital Marketing', 'Writing & Translation', 'Video & Animation', 'Music & Audio', 'Programming & Tech', 'Data', 'Business', 'Consulting']
}, {
  heading: 'For Clients',
  links: ['How Fiverr Works', 'Customer Stories', 'Trust & Safety', 'Quality Guide', 'Fiverr Guides', 'Fiverr Answers']
}, {
  heading: 'For Freelancers',
  links: ['Become a Seller', 'Become an Agency', 'Community Hub', 'Forum', 'Events', 'Blog']
}, {
  heading: 'Business Solutions',
  links: ['Fiverr Pro', 'Project Management', 'Expert Sourcing', 'Fiverr Logo Maker', 'Contact Sales']
}, {
  heading: 'Company',
  links: ['About Fiverr', 'Help Center', 'Careers', 'Press & News', 'Partnerships', 'Social Impact', 'Investor Relations']
}];

// ─── Footer ───────────────────────────────────────────────────────────────────

function FiverrFooter() {
  return /*#__PURE__*/react.createElement("div", {
    style: {
      borderTop: '1px solid #dadbdd',
      backgroundColor: '#fff',
      marginTop: 48
    }
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    maxWidth: "1440px",
    marginX: "auto",
    paddingX: "6",
    paddingY: "10"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "10",
    alignItems: "flexStart",
    paddingBottom: "10"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4",
    style: {
      minWidth: 160,
      flexShrink: 0
    }
  }, /*#__PURE__*/react.createElement(logos_Fiverr/* default */.A, {
    size: "sm"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Connecting businesses with freelancers worldwide."), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Globe/* default */.A, {
    size: "sm"
  }), /*#__PURE__*/react.createElement(TextButton/* default */.A, null, "English"), /*#__PURE__*/react.createElement(ChevronDown/* default */.A, {
    size: "sm"
  }))), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '0 24px',
      flex: 1
    }
  }, FOOTER_COLUMNS.map(col => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    key: col.heading,
    direction: "column",
    gap: "3"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, col.heading), col.links.map(link => /*#__PURE__*/react.createElement(Link/* default */.A, {
    key: link,
    href: "#",
    style: {
      fontSize: 13,
      color: '#62646a'
    }
  }, link)))))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "spaceBetween",
    alignItems: "center",
    paddingTop: "5"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "\xA9 Fiverr International Ltd. 2026"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Link/* default */.A, {
    href: "#"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Privacy Policy")), /*#__PURE__*/react.createElement(Link/* default */.A, {
    href: "#"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Terms of Service")), /*#__PURE__*/react.createElement(Link/* default */.A, {
    href: "#"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Accessibility")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2"
  }, ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map(s => /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    key: s,
    "aria-label": s,
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/react.createElement(Heart/* default */.A, {
    size: "sm"
  }))))))));
}

// ─── Main Page ────────────────────────────────────────────────────────────────

function FiverrGigPage() {
  const [selectedImage, setSelectedImage] = (0,react.useState)(0);
  const [visibleCount, setVisibleCount] = (0,react.useState)(3);
  const galleryImages = ['https://picsum.photos/seed/gig1/900/520', 'https://picsum.photos/seed/gig2/900/520', 'https://picsum.photos/seed/gig3/900/520', 'https://picsum.photos/seed/gig4/900/520'];
  const mainContent = /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    flex: "1",
    minWidth: "0px",
    style: {
      gap: 80
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "5"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/react.createElement(Breadcrumb, null, /*#__PURE__*/react.createElement(Breadcrumb_BreadcrumbsLink, {
    href: "#"
  }, /*#__PURE__*/react.createElement(Breadcrumb_BreadcrumbsHomeIcon, null)), /*#__PURE__*/react.createElement(Breadcrumb_BreadcrumbsLink, {
    href: "#"
  }, "Programming & Tech"), /*#__PURE__*/react.createElement(Breadcrumb_BreadcrumbsLink, {
    href: "#"
  }, "Web Development"))), /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h1",
    size: "h_xl"
  }, "I will build a custom full-stack web application with React and Node.js"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "alexrivera",
    size: "lg"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: alexAvatar
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 2,
      right: 2,
      width: 12,
      height: 12,
      borderRadius: '50%',
      backgroundColor: '#19a463',
      border: '2px solid #fff'
    }
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, /*#__PURE__*/react.createElement(Link/* default */.A, {
    href: "#"
  }, "Alex Rivera")), /*#__PURE__*/react.createElement(components_SellerLevelTwoBadge, null), /*#__PURE__*/react.createElement(components_VettedProBadge, {
    variant: "default"
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Full-Stack Developer"), /*#__PURE__*/react.createElement(Rating/* default */.A, {
    score: 4.9,
    reviews: "847"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "\xB7"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "1",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(ThumbsUp/* default */.A, {
    size: "sm"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "98%"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Job Success"))))), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: 40,
      marginBottom: 40
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      borderRadius: 12,
      backgroundColor: '#f5f5f5',
      overflow: 'hidden'
    }
  }, [{
    value: '7+',
    label: 'Years experience',
    icon: /*#__PURE__*/react.createElement(Medal/* default */.A, {
      size: "sm",
      color: "grey_1200"
    })
  }, {
    value: '120+',
    label: 'Projects delivered',
    icon: /*#__PURE__*/react.createElement(system_Box/* default */.A, {
      size: "sm",
      color: "grey_1200"
    })
  }, {
    value: '4.9',
    label: 'Average rating',
    icon: /*#__PURE__*/react.createElement(StarSolid/* default */.A, {
      size: "sm",
      color: "grey_1200"
    })
  }, {
    value: '98%',
    label: 'Job success',
    icon: /*#__PURE__*/react.createElement(ThumbsUp/* default */.A, {
      size: "sm",
      color: "grey_1200"
    })
  }].map((_ref8, i, arr) => {
    let {
      value,
      label,
      icon
    } = _ref8;
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: label
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        flex: 1,
        padding: '16px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "row",
      gap: "1.5",
      alignItems: "center"
    }, icon, /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_lg",
      fontWeight: "bold"
    }, value)), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      color: "bodySecondary"
    }, label)), i < arr.length - 1 && /*#__PURE__*/react.createElement("div", {
      style: {
        width: 1,
        backgroundColor: '#e4e5e7',
        margin: '12px 0'
      }
    }));
  }))), "  ", /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "3"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    color: "bodyPrimary"
  }, "Are you looking for a professional, high-performance web application built with modern technologies? You've come to the right place."), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    color: "bodyPrimary"
  }, "With 7+ years of full-stack experience, I specialise in scalable, maintainable, and visually polished applications using", ' ', /*#__PURE__*/react.createElement("strong", null, "React"), ", ", /*#__PURE__*/react.createElement("strong", null, "Node.js"), ", ", /*#__PURE__*/react.createElement("strong", null, "PostgreSQL"), ", and cloud platforms like AWS and Vercel.")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "3"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, "What you can expect:"), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px 24px'
    }
  }, GIG_HIGHLIGHTS.map(item => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    key: item,
    direction: "row",
    gap: "2",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/react.createElement(Check/* default */.A, {
    size: "sm",
    color: "grey_1200"
  })), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    color: "bodyPrimary"
  }, item)))))), "  ", /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 10,
      overflow: 'hidden',
      background: '#f5f5f5',
      lineHeight: 0
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: galleryImages[selectedImage],
    alt: "Gig preview",
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "2",
    style: {
      flexShrink: 0
    }
  }, galleryImages.map((src, i) => /*#__PURE__*/react.createElement("div", {
    key: i,
    onClick: () => setSelectedImage(i),
    style: {
      width: 72,
      height: 54,
      borderRadius: 6,
      overflow: 'hidden',
      cursor: 'pointer',
      border: selectedImage === i ? '2px solid #222325' : '2px solid transparent',
      lineHeight: 0,
      opacity: selectedImage === i ? 1 : 0.6,
      transition: 'opacity 0.15s'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: src,
    alt: "Preview ".concat(i + 1),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))))), /*#__PURE__*/react.createElement(PortfolioSection, null), /*#__PURE__*/react.createElement(MyProcessSection, null), /*#__PURE__*/react.createElement(ComparePackagesSection, null), /*#__PURE__*/react.createElement(SourceForMeBanner, null), /*#__PURE__*/react.createElement(SellerBioCard, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "5"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2",
    size: "h_sm"
  }, "Reviews"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "8",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "3",
    style: {
      flex: '0 0 50%'
    }
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    fontWeight: "bold"
  }, TOTAL_REVIEWS, " reviews for this Gig"), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1.5"
  }, STAR_DISTRIBUTION.map(_ref9 => {
    let {
      stars,
      label,
      count
    } = _ref9;
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      key: stars,
      direction: "row",
      gap: "2",
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      color: count === 0 ? 'bodySecondary' : 'bodyPrimary',
      style: {
        minWidth: 52
      }
    }, label), /*#__PURE__*/react.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/react.createElement(ProgressLine/* default */.A, {
      percent: count / TOTAL_REVIEWS * 100
    })), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm",
      color: "bodySecondary"
    }, "(", count, ")"));
  }))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4",
    style: {
      flex: '0 0 calc(50% - 32px)'
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "flexEnd",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Rating/* default */.A, {
    score: 4.9
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_lg",
    fontWeight: "bold"
  }, "4.9")), /*#__PURE__*/react.createElement(RatingBreakdown, null))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "3"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/react.createElement(Input/* default */.A, {
    placeholder: "Search reviews"
  })), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Search",
    size: "md",
    variant: "ghost"
  }, /*#__PURE__*/react.createElement(Search/* default */.A, null))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "bodySecondary"
  }, "Sort By"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "ghost",
    size: "sm"
  }, "Most relevant", /*#__PURE__*/react.createElement(ChevronDown/* default */.A, {
    size: "sm"
  }))), /*#__PURE__*/react.createElement(Checkbox/* default */.A, null, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm"
  }, "Only show reviews with files (4)"))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "5"
  }, REVIEWS.slice(0, visibleCount).map((review, i) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: review.username
  }, i > 0 && /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(ReviewCard, review)))), visibleCount < REVIEWS.length && /*#__PURE__*/react.createElement(TextButton/* default */.A, {
    onClick: () => setVisibleCount(c => Math.min(c + 3, REVIEWS.length))
  }, "Show more reviews")), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2",
    size: "h_sm"
  }, "Related tags"), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, RELATED_TAGS.map(tag => /*#__PURE__*/react.createElement(Tag/* default */.A, {
    key: tag,
    variant: "outline",
    size: "xs",
    href: "#",
    ariaLabel: tag
  }, tag)))));
  const sidebar = /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4",
    width: "380px",
    minWidth: "380px"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "flexEnd",
    gap: "1",
    alignItems: "center",
    paddingBottom: "4"
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    "aria-label": "Save",
    variant: "ghost",
    size: "md"
  }, /*#__PURE__*/react.createElement(Heart/* default */.A, null), "661"), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "Share",
    variant: "ghost",
    size: "md"
  }, /*#__PURE__*/react.createElement(Share/* default */.A, null)), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "More options",
    variant: "ghost",
    size: "md"
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "default",
    borderColor: "border",
    padding: "0",
    borderRadius: "xl"
  }, /*#__PURE__*/react.createElement(Tabs_TabGroup, {
    size: "md"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      paddingTop: 4,
      paddingBottom: 10
    }
  }, /*#__PURE__*/react.createElement(Tabs_TabList, null, PACKAGES.map(pkg => /*#__PURE__*/react.createElement(Tabs_Tab, {
    key: pkg.name
  }, pkg.name)))), /*#__PURE__*/react.createElement(Tabs_TabPanels, null, PACKAGES.map(pkg => /*#__PURE__*/react.createElement(Tabs_TabPanel, {
    key: pkg.name
  }, /*#__PURE__*/react.createElement(PricingPanel, {
    pkg: pkg
  })))))), /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "default",
    borderColor: "border",
    padding: "5",
    borderRadius: "xl"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "3"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "alexrivera",
    size: "smd"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: alexAvatar
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: '#19a463',
      border: '2px solid #fff'
    }
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "Alex Rivera"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, "Available now \xB7 Responds in ~1 hr"))), /*#__PURE__*/react.createElement(ContactDrawer, null), /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "md",
    variant: "outline",
    fullWidth: true
  }, "Request Custom Offer"))), /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "default",
    borderColor: "border",
    padding: "5",
    borderRadius: "xl"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "3"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    gap: "3",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    username: "alexrivera",
    size: "sm"
  }, /*#__PURE__*/react.createElement(Avatar_AvatarImage, {
    src: alexAvatar
  })), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "Need flexibility when hiring?"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xs",
    color: "bodySecondary"
  }, "Hire by the hour, ideal for long-term projects with flexible hours and weekly payments."))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    justifyContent: "spaceBetween",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold"
  }, "$45/hour"), /*#__PURE__*/react.createElement(TextButton/* default */.A, {
    href: "#"
  }, "Request hourly offer")))));
  return /*#__PURE__*/react.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff'
    }
  }, /*#__PURE__*/react.createElement(FiverrHeaderPage, null), /*#__PURE__*/react.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    padding: "6",
    paddingX: "11",
    maxWidth: "1440px",
    marginX: "auto",
    width: "100%"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "flexStart",
    style: {
      gap: '5%'
    }
  }, mainContent, sidebar))), /*#__PURE__*/react.createElement(FiverrFooter, null));
}
;// ../penta_playground/src/components/ClaudeTest.tsx




function ClaudeTest() {
  return /*#__PURE__*/react.createElement("div", {
    style: {
      backgroundColor: '#fff'
    }
  }, /*#__PURE__*/react.createElement(FiverrHeader, null), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(Container/* default */.A, {
    maxWidth: "1400px",
    marginX: "auto",
    paddingX: "6",
    paddingY: "8"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "6"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    as: "h2",
    size: "h_lg"
  }, "Welcome to Penta Playground"), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_md",
    color: "bodySecondary"
  }, "This component showcases the Fiverr header design pattern with the inbox dropdown integrated into the top navigation bar."))));
}
;// ../penta_playground/src/components/index.stories.tsx






const StoryExample = {
  name: 'Example',
  render: () => /*#__PURE__*/react.createElement(Example, null)
};
const StoryDimaTest1 = {
  name: 'Dima Test 1',
  render: () => /*#__PURE__*/react.createElement(DimaTest1, null)
};
const StoryFiverrGigPage = {
  name: 'Fiverr Gig Page',
  render: () => /*#__PURE__*/react.createElement(FiverrGigPage, null)
};
const StoryFiverrHeaderPage = {
  name: 'Fiverr Header Page',
  render: () => /*#__PURE__*/react.createElement(FiverrHeaderPage, null)
};
const StoryClaudeTest = {
  name: 'Claude Test',
  render: () => /*#__PURE__*/react.createElement(ClaudeTest, null)
};
const meta = {
  title: 'Penta Playground/Penta Playground',
  parameters: {
    layout: 'fullscreen'
  }
};
/* harmony default export */ const index_stories = (meta);
StoryExample.parameters = {
  ...StoryExample.parameters,
  docs: {
    ...StoryExample.parameters?.docs,
    source: {
      originalSource: "{\n  name: 'Example',\n  render: () => <Example />\n}",
      ...StoryExample.parameters?.docs?.source
    }
  }
};
StoryDimaTest1.parameters = {
  ...StoryDimaTest1.parameters,
  docs: {
    ...StoryDimaTest1.parameters?.docs,
    source: {
      originalSource: "{\n  name: 'Dima Test 1',\n  render: () => <DimaTest1 />\n}",
      ...StoryDimaTest1.parameters?.docs?.source
    }
  }
};
StoryFiverrGigPage.parameters = {
  ...StoryFiverrGigPage.parameters,
  docs: {
    ...StoryFiverrGigPage.parameters?.docs,
    source: {
      originalSource: "{\n  name: 'Fiverr Gig Page',\n  render: () => <FiverrGigPage />\n}",
      ...StoryFiverrGigPage.parameters?.docs?.source
    }
  }
};
StoryFiverrHeaderPage.parameters = {
  ...StoryFiverrHeaderPage.parameters,
  docs: {
    ...StoryFiverrHeaderPage.parameters?.docs,
    source: {
      originalSource: "{\n  name: 'Fiverr Header Page',\n  render: () => <FiverrHeaderPage />\n}",
      ...StoryFiverrHeaderPage.parameters?.docs?.source
    }
  }
};
StoryClaudeTest.parameters = {
  ...StoryClaudeTest.parameters,
  docs: {
    ...StoryClaudeTest.parameters?.docs,
    source: {
      originalSource: "{\n  name: 'Claude Test',\n  render: () => <ClaudeTest />\n}",
      ...StoryClaudeTest.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["StoryExample","StoryDimaTest1","StoryFiverrGigPage","StoryFiverrHeaderPage","StoryClaudeTest"];

/***/ }),

/***/ "../transition/dist/esm/src/components/Slide/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Slide)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js + 20 modules
var es = __webpack_require__("../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/utils/index.js
var utils = __webpack_require__("../transition/dist/esm/src/utils/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/hooks/useTransitionEvents.js
var useTransitionEvents = __webpack_require__("../transition/dist/esm/src/hooks/useTransitionEvents.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/constants.js
var constants = __webpack_require__("../transition/dist/esm/src/constants.js");
;// ../transition/dist/esm/src/components/Slide/variants.js
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


const getEnterTiming = function () {
  let duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'moderate3';
  let easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'easeIn';
  let delay = arguments.length > 2 ? arguments[2] : undefined;
  return {
    duration: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(duration, constants/* ENTER */.Fm)],
    ease: constants/* EASING */.Ux[(0,utils/* getValueOrField */.F)(easing, constants/* ENTER */.Fm)],
    delay: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(delay, constants/* ENTER */.Fm)]
  };
};
const getExitTiming = function () {
  let duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'moderate2';
  let easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'easeOut';
  let delay = arguments.length > 2 ? arguments[2] : undefined;
  return {
    duration: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(duration, constants/* EXIT */.dc)],
    ease: constants/* EASING */.Ux[(0,utils/* getValueOrField */.F)(easing, constants/* EXIT */.dc)],
    delay: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(delay, constants/* EXIT */.dc)]
  };
};
const variants = {
  enter: _ref => {
    let {
      direction,
      delay,
      duration,
      easing
    } = _ref;
    const {
      enter: enterStyles
    } = (0,utils/* slideTransition */.J)(direction);
    return _objectSpread(_objectSpread({}, enterStyles), {}, {
      timing: getEnterTiming(duration, easing, delay)
    });
  },
  exit: _ref2 => {
    let {
      direction,
      delay,
      duration,
      easing
    } = _ref2;
    const {
      exit: exitStyles
    } = (0,utils/* slideTransition */.J)(direction);
    return _objectSpread(_objectSpread({}, exitStyles), {}, {
      timing: getExitTiming(duration, easing, delay)
    });
  }
};
/* harmony default export */ const Slide_variants = (variants);
;// ../transition/dist/esm/src/components/Slide/index.js
const _excluded = ["x", "y"];
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
function Slide_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Slide_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Slide_ownKeys(Object(t), !0).forEach(function (r) {
      Slide_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Slide_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Slide_defineProperty(e, r, t) {
  return (r = Slide_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Slide_toPropertyKey(t) {
  var i = Slide_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Slide_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}






const Slide = _ref => {
  let {
    direction = 'right',
    delay,
    duration = {
      enter: 'moderate3',
      exit: 'moderate2'
    },
    easing = {
      enter: 'easeIn',
      exit: 'easeOut'
    },
    unmountOnExit,
    in: isOpen,
    onAnimationStart,
    onAnimationEnd,
    children
  } = _ref;
  const transitionStyles = (0,utils/* slideTransition */.J)(direction);
  const computedStyle = Object.assign({
    position: 'fixed'
  }, transitionStyles.position);
  const custom = {
    direction,
    delay,
    duration,
    easing
  };
  const transitionConfig = isOpen ? Slide_variants.enter(custom) : Slide_variants.exit(custom);
  const {
    getEventsHandler
  } = (0,useTransitionEvents/* default */.A)({
    onAnimationStart,
    onAnimationEnd,
    isOpen: !!isOpen,
    unmountOnExit
  });
  return /*#__PURE__*/react.createElement(es/* Animate */.i, {
    show: unmountOnExit ? isOpen : true,
    start: Slide_variants.exit(custom),
    enter: Slide_objectSpread(Slide_objectSpread({}, transitionConfig), getEventsHandler('enter')),
    update: Slide_objectSpread(Slide_objectSpread({}, transitionConfig), getEventsHandler('update')),
    leave: Slide_objectSpread(Slide_objectSpread({}, Slide_variants.exit(custom)), getEventsHandler('leave'))
  }, _ref2 => {
    let {
        x,
        y
      } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded);
    return (0,render_children/* renderChildren */.s)(children, {
      style: Slide_objectSpread(Slide_objectSpread(Slide_objectSpread(Slide_objectSpread({}, children.props.style || {}), computedStyle), rest), {}, {
        transform: "translate(".concat(x, "%,").concat(y, "%)")
      })
    });
  });
};
Slide.displayName = 'Slide';
/* harmony default export */ const components_Slide = (Slide);
;
Slide.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Slide"
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

/***/ "../ui_utils/dist/esm/src/components/LazyComponent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../hooks/dist/esm/src/hooks/useLatest/index.js");
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



const EmptyComponent = () => null;
const emptyFunction = () => undefined;
const LazyComponent = _ref => {
  var _componentRef$current;
  let {
    lazyImport,
    shouldImport = true,
    fallback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EmptyComponent, null),
    placeholder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EmptyComponent, null),
    beforeLoad = emptyFunction,
    afterLoad = emptyFunction,
    onError = emptyFunction,
    componentProps
  } = _ref;
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isImported = !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(componentRef.current);
  const Component = isImported ? (_componentRef$current = componentRef.current) === null || _componentRef$current === void 0 ? void 0 : _componentRef$current.default : null;
  const latestImport = (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(lazyImport);
  const latestCallbacks = (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
    beforeLoad,
    afterLoad,
    onError
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const lazyLoadComponent = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        try {
          latestCallbacks.current.beforeLoad();
          componentRef.current = yield latestImport.current();
          latestCallbacks.current.afterLoad();
        } catch (error) {
          latestCallbacks.current.onError(error);
        }
        setIsLoading(false);
      });
      return function lazyLoadComponent() {
        return _ref2.apply(this, arguments);
      };
    }();
    if (shouldImport && !isImported) {
      lazyLoadComponent();
    }
  }, [shouldImport, isImported, latestCallbacks, latestImport]);
  if (isLoading) {
    return placeholder;
  }
  return Component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, componentProps) : fallback;
};
LazyComponent.displayName = 'LazyComponent';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LazyComponent);
;
LazyComponent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LazyComponent"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const EllipsisIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('EllipsisIcon')
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
    strokeWidth: 3.5,
    d: "M3 8h.005m4.992 0h.006m4.992 0H13",
    vectorEffect: "non-scaling-stroke"
  }));
};
EllipsisIcon.id = 'EllipsisIcon';
EllipsisIcon.displayName = 'EllipsisIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EllipsisIcon);
;
EllipsisIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EllipsisIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Search.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const SearchIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('SearchIcon')
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
    d: "m11.75 11.75 3 3m-1.5-7.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
SearchIcon.id = 'SearchIcon';
SearchIcon.displayName = 'SearchIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchIcon);
;
SearchIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SearchIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Share.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ShareIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ShareIcon')
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
    d: "M8.054 9.187v-3.31c0-1.167.947-2.114 2.114-2.114h4.582m0 0-2.311-2.31m2.311 2.31-2.311 2.312M5.044 3.013H2.752c-.83 0-1.502.646-1.502 1.442v8.651c0 .797.672 1.442 1.502 1.442h9.011c.83 0 1.502-.646 1.502-1.442v-2.442",
    vectorEffect: "non-scaling-stroke"
  }));
};
ShareIcon.id = 'ShareIcon';
ShareIcon.displayName = 'ShareIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareIcon);
;
ShareIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ShareIcon"
};

/***/ })

}]);
//# sourceMappingURL=3412.9d574016.iframe.bundle.js.map