"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[5580],{

/***/ "../avatar/dist/esm/src/components/Avatar/AvatarContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ AvatarContext),
/* harmony export */   u: () => (/* binding */ useAvatarContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const AvatarContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useAvatarContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AvatarContext);
  return context;
};

/***/ }),

/***/ "../avatar/dist/esm/src/components/Avatar/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Avatar)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/getComponentProps/index.js
var getComponentProps = __webpack_require__("../ui_utils/dist/esm/src/utils/getComponentProps/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js
var excludeChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
;// ../avatar/dist/esm/src/components/Avatar/constants.js
const RING_BORDER_WIDTH = 8;
const RING_STROKE_WIDTH = 2;
const AVATAR_COLORS = ['blue_light', 'blue_dark', 'pink_light', 'pink_dark', 'green_light', 'green_dark', 'yellow_light', 'yellow_dark', 'orange_light', 'orange_dark', 'lime_light', 'lime_dark', 'red_light', 'red_dark'];
const FONT_SIZES = {
  xs: 'b_xs',
  sm: 'b_md',
  smd: 'b_lg',
  md: 'b_xl',
  lg: 'h_lg',
  xl: 'h_xxl',
  '2xl': 'h_xxl',
  '3xl': 'h_3xl',
  '4xl': 'h_3xl'
};
const AVATAR_COLOR_SCHEME = {
  blue_light: {
    backgroundColor: 'blue_200',
    fontColor: 'blue_1100'
  },
  blue_dark: {
    backgroundColor: 'blue_1100',
    fontColor: 'blue_200'
  },
  pink_light: {
    backgroundColor: 'pink_200',
    fontColor: 'pink_1100'
  },
  pink_dark: {
    backgroundColor: 'pink_1100',
    fontColor: 'pink_200'
  },
  green_light: {
    backgroundColor: 'green_200',
    fontColor: 'green_1100'
  },
  green_dark: {
    backgroundColor: 'green_1000',
    fontColor: 'green_200'
  },
  yellow_light: {
    backgroundColor: 'yellow_200',
    fontColor: 'yellow_1100'
  },
  yellow_dark: {
    backgroundColor: 'yellow_1200',
    fontColor: 'yellow_200'
  },
  orange_light: {
    backgroundColor: 'orange_200',
    fontColor: 'orange_1100'
  },
  orange_dark: {
    backgroundColor: 'orange_1100',
    fontColor: 'orange_200'
  },
  lime_light: {
    backgroundColor: 'lightOrange_200',
    fontColor: 'lightOrange_1100'
  },
  lime_dark: {
    backgroundColor: 'lightOrange_1100',
    fontColor: 'lightOrange_200'
  },
  red_light: {
    backgroundColor: 'red_200',
    fontColor: 'red_1100'
  },
  red_dark: {
    backgroundColor: 'red_1100',
    fontColor: 'red_200'
  }
};
const DEFAULT_COLOR = {
  backgroundColor: 'grey_400',
  fontColor: 'grey_1000'
};
const AVATAR_SIZES = {
  xs: 24,
  sm: 32,
  smd: 40,
  md: 48,
  lg: 64,
  xl: 80,
  '2xl': 96,
  '3xl': 120,
  '4xl': 160
};
const AVATAR_SQUARE_RADIUS_BY_SIZE = {
  24: 'sm',
  32: 'sm',
  40: 'sm',
  48: 'md',
  64: 'lg',
  80: 'lg',
  96: 'xl',
  120: '2xl',
  160: '2xl'
};
const AVATAR_SQUARE_OFFSET_BY_SIZE = {
  24: 22,
  32: 30,
  40: 38,
  48: 46,
  64: 62,
  80: 76,
  96: 92,
  120: 116,
  160: 156
};
const HALF = 0.5;
;// ../avatar/dist/esm/src/components/Avatar/utils.js


const getAvatarBackgroundColor = _ref => {
  let {
    color,
    username
  } = _ref;
  if (username && color === 'auto') {
    const usernameInAscii = (0,lodash.sum)(username.split('').map(char => char.charCodeAt(0)));
    const colorIndex = usernameInAscii % AVATAR_COLORS.length;
    return AVATAR_COLOR_SCHEME[AVATAR_COLORS[colorIndex]];
  }
  if (color && color !== 'auto') {
    return AVATAR_COLOR_SCHEME[color];
  }
  return DEFAULT_COLOR;
};
const getSquareBorderRadius = size => AVATAR_SQUARE_RADIUS_BY_SIZE[AVATAR_SIZES[size]];
const getBorderRadius = (shape, size) => shape === 'square' ? getSquareBorderRadius(size) : 'circle';
// EXTERNAL MODULE: ../avatar/dist/esm/src/components/Avatar/AvatarContext/index.js
var AvatarContext = __webpack_require__("../avatar/dist/esm/src/components/Avatar/AvatarContext/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../avatar/dist/esm/src/components/Avatar/styles.js
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

const RING_PADDING = '0.5';
const getRingStyles = _ref => {
  let {
    shape,
    borderRadius
  } = _ref;
  return _objectSpread(_objectSpread({
    borderStyle: 'solid',
    borderColor: 'business_1100',
    borderWidth: 'md',
    padding: RING_PADDING
  }, shape === 'square' && {
    style: {
      borderRadius: "calc(".concat(themeVars/* borderRadiuses */.vj[borderRadius], " + ").concat(themeVars/* spacing */.YK[RING_PADDING], ")")
    }
  }), shape === 'circle' && {
    borderRadius
  });
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js + 1 modules
var vanilla_extract_dynamic_esm = __webpack_require__("../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js");
;// ../avatar/dist/esm/src/components/Avatar/avatar/dist/esm/src/components/Avatar/AvatarAnimation/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../avatar/dist/esm/src/components/Avatar/AvatarAnimation/styles.ve.css.js.vanilla.css","source":"QGtleWZyYW1lcyB6eWMwYXQzIHsKICAwJSB7CiAgICBzdHJva2UtZGFzaG9mZnNldDogdmFyKC0tenljMGF0MCk7CiAgfQogIDEwMCUgewogICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7CiAgfQp9Ci56eWMwYXQ0IHsKICBhbmltYXRpb246IHp5YzBhdDMgNTAwMG1zIGxpbmVhciBmb3J3YXJkczsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../avatar/dist/esm/src/components/Avatar/AvatarAnimation/styles.ve.css.js

var pathDrawAnimation = 'zyc0at4';
var perimeterVar = 'var(--zyc0at0)';
var strokeDashOffsetAnimation = 'zyc0at3';
var strokeDashoffsetBaseVar = 'var(--zyc0at1)';
var strokeDashoffsetMiddleVar = 'var(--zyc0at2)';
;// ../avatar/dist/esm/src/components/Avatar/AvatarAnimation/utils.js



const generatedSquarePath = (baseAvatarSize, borderRadius) => {
  const halfSize = baseAvatarSize / 2;
  const halfStrokeWidth = RING_STROKE_WIDTH / 2;
  const squareBorderRadius = parseInt(themeVars/* borderRadiuses */.vj[borderRadius], 10) + parseInt(themeVars/* spacing */.YK[RING_PADDING], 10) + halfStrokeWidth;
  return "\n    M".concat(halfSize, ",").concat(halfStrokeWidth, "\n    H").concat(baseAvatarSize - halfStrokeWidth - squareBorderRadius, "\n    Q").concat(baseAvatarSize - halfStrokeWidth, ",").concat(halfStrokeWidth, " ").concat(baseAvatarSize - halfStrokeWidth, ",").concat(halfStrokeWidth + squareBorderRadius, "\n    V").concat(baseAvatarSize - halfStrokeWidth - squareBorderRadius, "\n    Q").concat(baseAvatarSize - halfStrokeWidth, ",").concat(baseAvatarSize - halfStrokeWidth, " ").concat(baseAvatarSize - halfStrokeWidth - squareBorderRadius, ",").concat(baseAvatarSize - halfStrokeWidth, "\n    H").concat(halfStrokeWidth + squareBorderRadius, "\n    Q").concat(halfStrokeWidth, ",").concat(baseAvatarSize - halfStrokeWidth, " ").concat(halfStrokeWidth, ",").concat(baseAvatarSize - halfStrokeWidth - squareBorderRadius, "\n    V").concat(halfStrokeWidth + squareBorderRadius, "\n    Q").concat(halfStrokeWidth, ",").concat(halfStrokeWidth, " ").concat(halfStrokeWidth + squareBorderRadius, ",").concat(halfStrokeWidth, "\n    H").concat(halfSize, "\n    Z\n  ");
};
const getPerimeter = (baseAvatarSize, shape) => {
  if (shape === 'circle') {
    const radius = baseAvatarSize / 2;
    const circlePerimeter = 2 * Math.PI * radius;
    return circlePerimeter;
  }
  const squareSides = 4;
  const strokeOffset = 8;
  const squarePerimeter = squareSides * baseAvatarSize - strokeOffset;
  return squarePerimeter;
};
const getCircleAttributes = (baseAvatarSize, borderRadius, perimeter) => {
  const radius = themeVars/* borderRadiuses */.vj[borderRadius];
  const offsetX = 1;
  const offsetY = 1;
  const adjustedSize = baseAvatarSize - offsetX - offsetY;
  return {
    strokeDasharray: perimeter,
    strokeWidth: RING_STROKE_WIDTH,
    width: adjustedSize,
    height: adjustedSize,
    x: offsetX,
    y: offsetY,
    rx: radius,
    ry: radius
  };
};
;// ../avatar/dist/esm/src/components/Avatar/AvatarAnimation/index.js
function AvatarAnimation_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function AvatarAnimation_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? AvatarAnimation_ownKeys(Object(t), !0).forEach(function (r) {
      AvatarAnimation_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : AvatarAnimation_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function AvatarAnimation_defineProperty(e, r, t) {
  return (r = AvatarAnimation_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function AvatarAnimation_toPropertyKey(t) {
  var i = AvatarAnimation_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function AvatarAnimation_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}






const AvatarAnimation = _ref => {
  let {
    baseAvatarSize,
    shape,
    borderRadius,
    autoPlay
  } = _ref;
  const perimeter = getPerimeter(baseAvatarSize, shape);
  const circleAttributes = getCircleAttributes(baseAvatarSize, borderRadius, perimeter);
  const squarePath = generatedSquarePath(baseAvatarSize, borderRadius);
  const animation = autoPlay ? classnames_default()(pathDrawAnimation) : undefined;
  const trackColor = themeVars/* colors */.Tj.green_200;
  const progressColor = themeVars/* colors */.Tj.green_700;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    width: baseAvatarSize,
    height: baseAvatarSize,
    position: "absolute"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(baseAvatarSize, " ").concat(baseAvatarSize),
    fill: "none",
    style: (0,vanilla_extract_dynamic_esm/* assignInlineVars */.D)({
      [perimeterVar]: perimeter.toString(),
      [strokeDashoffsetBaseVar]: "".concat(perimeter + perimeter * 0.3),
      [strokeDashoffsetMiddleVar]: "".concat(perimeter + perimeter * 0.6)
    })
  }, shape === 'circle' ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", AvatarAnimation_objectSpread(AvatarAnimation_objectSpread({}, circleAttributes), {}, {
    stroke: trackColor
  })), /*#__PURE__*/react.createElement("rect", AvatarAnimation_objectSpread(AvatarAnimation_objectSpread({}, circleAttributes), {}, {
    stroke: progressColor,
    className: animation
  }))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("path", {
    stroke: trackColor,
    d: squarePath,
    strokeWidth: RING_STROKE_WIDTH
  }), /*#__PURE__*/react.createElement("path", {
    stroke: progressColor,
    className: animation,
    d: squarePath,
    strokeWidth: RING_STROKE_WIDTH,
    strokeDasharray: perimeter,
    strokeDashoffset: 0
  }))));
};
AvatarAnimation.displayName = 'AvatarAnimation';
/* harmony default export */ const Avatar_AvatarAnimation = (AvatarAnimation);
;
AvatarAnimation.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AvatarAnimation"
};
;// ../avatar/dist/esm/src/components/Avatar/index.js
function Avatar_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Avatar_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Avatar_ownKeys(Object(t), !0).forEach(function (r) {
      Avatar_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Avatar_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Avatar_defineProperty(e, r, t) {
  return (r = Avatar_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Avatar_toPropertyKey(t) {
  var i = Avatar_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Avatar_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}










const Avatar = _ref => {
  let {
    username,
    displayName,
    size = 'xs',
    shape = 'circle',
    color = 'auto',
    showTitle = true,
    onClick,
    children,
    hidden,
    showRing,
    showBorder = true,
    dataTestId,
    dataTrackTag = 'avatar',
    dataTrackValue = username
  } = _ref;
  const nameValue = displayName || username;
  const firstLetter = (0,lodash.get)(nameValue, '[0]', '');
  const isOnClickValid = typeof onClick === 'function';
  const baseAvatarSize = AVATAR_SIZES[size];
  const avatarImage = (0,findChildByType/* findChildByType */.B)(children, 'AvatarImage');
  const avatarVideo = (0,findChildByType/* findChildByType */.B)(children, 'AvatarVideo');
  const {
    autoPlay
  } = (0,getComponentProps/* default */.A)(avatarVideo);
  const [videoAutoPlay, setVideoAutoPlay] = (0,react.useState)(autoPlay);
  const borderRadius = getBorderRadius(shape, size);
  const hasVideo = Boolean(avatarVideo);
  const hasAvatarAnimation = Boolean(avatarVideo);
  const {
    fontColor,
    backgroundColor
  } = getAvatarBackgroundColor({
    color,
    username
  });
  const avatarSize = showRing || hasVideo ? baseAvatarSize - RING_BORDER_WIDTH : baseAvatarSize;
  const borderProperties = showBorder ? {
    borderColor: 'border',
    borderWidth: 'sm',
    borderStyle: 'solid'
  } : {};
  return /*#__PURE__*/react.createElement(AvatarContext/* AvatarContext */.$.Provider, {
    value: {
      size,
      actualAvatarSize: avatarSize,
      nameValue,
      shape,
      setVideoAutoPlay,
      videoAutoPlay
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, Avatar_objectSpread(Avatar_objectSpread({
    onClick: onClick,
    role: isOnClickValid ? 'button' : undefined,
    "aria-label": isOnClickValid ? (0,translate/* translate */.T)('avatar.avatar.figure') : undefined,
    hidden: hidden,
    "data-testid": dataTestId,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    display: "inlineFlex",
    boxSizing: "borderBox",
    width: baseAvatarSize,
    height: baseAvatarSize
  }, showRing && !hasAvatarAnimation ? getRingStyles({
    shape,
    borderRadius
  }) : {}), {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), hasAvatarAnimation && /*#__PURE__*/react.createElement(Avatar_AvatarAnimation, {
    autoPlay: videoAutoPlay,
    borderRadius: borderRadius,
    shape: shape,
    baseAvatarSize: baseAvatarSize
  }), /*#__PURE__*/react.createElement(Box/* default */.A, Avatar_objectSpread({
    as: "figure",
    margin: "0",
    display: "inlineFlex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: avatarSize,
    height: avatarSize,
    boxSizing: "borderBox",
    overflow: "hidden",
    backgroundColor: avatarImage === null && avatarVideo === null ? 'transparent' : backgroundColor,
    borderRadius: borderRadius,
    fontSize: FONT_SIZES[size],
    lineHeight: FONT_SIZES[size],
    title: showTitle ? nameValue : ''
  }, borderProperties), /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "figcaption",
    fontWeight: "semibold",
    fontSize: FONT_SIZES[size],
    lineHeight: FONT_SIZES[size],
    color: fontColor
  }, firstLetter.toLocaleUpperCase()), avatarImage, avatarVideo), (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, ['AvatarImage', 'AvatarVideo'])));
};
Avatar.id = 'Avatar';
Avatar.displayName = 'Avatar';
/* harmony default export */ const components_Avatar = (Avatar);
;
Avatar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Avatar"
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

/***/ })

}]);
//# sourceMappingURL=5580.e18c533a.iframe.bundle.js.map