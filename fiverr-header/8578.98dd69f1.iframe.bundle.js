"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[8578],{

/***/ "../avatar/src/components/Avatar/AvatarContext/index.ts":
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

/***/ "../avatar/src/components/Avatar/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $N: () => (/* binding */ FONT_SIZES),
/* harmony export */   HU: () => (/* binding */ RING_STROKE_WIDTH),
/* harmony export */   OT: () => (/* binding */ DEFAULT_COLOR),
/* harmony export */   QR: () => (/* binding */ HALF),
/* harmony export */   RG: () => (/* binding */ AVATAR_SIZES),
/* harmony export */   Rq: () => (/* binding */ RING_BORDER_WIDTH),
/* harmony export */   T7: () => (/* binding */ AVATAR_COLORS),
/* harmony export */   bV: () => (/* binding */ AVATAR_SQUARE_RADIUS_BY_SIZE),
/* harmony export */   k8: () => (/* binding */ AVATAR_COLOR_SCHEME),
/* harmony export */   sR: () => (/* binding */ AVATAR_SQUARE_OFFSET_BY_SIZE)
/* harmony export */ });
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

/***/ }),

/***/ "../avatar/src/components/Avatar/index.tsx":
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
// EXTERNAL MODULE: ../avatar/src/components/Avatar/utils.ts
var utils = __webpack_require__("../avatar/src/components/Avatar/utils.ts");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/AvatarContext/index.ts
var AvatarContext = __webpack_require__("../avatar/src/components/Avatar/AvatarContext/index.ts");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/constants.ts
var constants = __webpack_require__("../avatar/src/components/Avatar/constants.ts");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../avatar/src/components/Avatar/styles.ts
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
;// ../avatar/src/components/Avatar/avatar/src/components/Avatar/AvatarAnimation/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../avatar/src/components/Avatar/AvatarAnimation/styles.ve.css.ts.vanilla.css","source":"QGtleWZyYW1lcyBfMWdob3lwOTMgewogIDAlIHsKICAgIHN0cm9rZS1kYXNob2Zmc2V0OiB2YXIoLS1fMWdob3lwOTApOwogIH0KICAxMDAlIHsKICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwOwogIH0KfQouXzFnaG95cDk0IHsKICBhbmltYXRpb246IF8xZ2hveXA5MyA1MDAwbXMgbGluZWFyIGZvcndhcmRzOwp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../avatar/src/components/Avatar/AvatarAnimation/styles.ve.css.ts

var pathDrawAnimation = '_1ghoyp94';
var perimeterVar = 'var(--_1ghoyp90)';
var strokeDashOffsetAnimation = '_1ghoyp93';
var strokeDashoffsetBaseVar = 'var(--_1ghoyp91)';
var strokeDashoffsetMiddleVar = 'var(--_1ghoyp92)';
;// ../avatar/src/components/Avatar/AvatarAnimation/utils.ts



const generatedSquarePath = (baseAvatarSize, borderRadius) => {
  const halfSize = baseAvatarSize / 2;
  const halfStrokeWidth = constants/* RING_STROKE_WIDTH */.HU / 2;
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
    strokeWidth: constants/* RING_STROKE_WIDTH */.HU,
    width: adjustedSize,
    height: adjustedSize,
    x: offsetX,
    y: offsetY,
    rx: radius,
    ry: radius
  };
};
;// ../avatar/src/components/Avatar/AvatarAnimation/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
  }, shape === 'circle' ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", _extends({}, circleAttributes, {
    stroke: trackColor
  })), /*#__PURE__*/react.createElement("rect", _extends({}, circleAttributes, {
    stroke: progressColor,
    className: animation
  }))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("path", {
    stroke: trackColor,
    d: squarePath,
    strokeWidth: constants/* RING_STROKE_WIDTH */.HU
  }), /*#__PURE__*/react.createElement("path", {
    stroke: progressColor,
    className: animation,
    d: squarePath,
    strokeWidth: constants/* RING_STROKE_WIDTH */.HU,
    strokeDasharray: perimeter,
    strokeDashoffset: 0
  }))));
};
AvatarAnimation.displayName = 'AvatarAnimation';
/* harmony default export */ const Avatar_AvatarAnimation = (AvatarAnimation);
try {
    // @ts-ignore
    AvatarAnimation.displayName = "AvatarAnimation";
    // @ts-ignore
    AvatarAnimation.__docgenInfo = { "description": "", "displayName": "AvatarAnimation", "props": { "baseAvatarSize": { "defaultValue": null, "description": "", "name": "baseAvatarSize", "required": true, "type": { "name": "enum", "value": [{ "value": "24" }, { "value": "32" }, { "value": "40" }, { "value": "48" }, { "value": "64" }, { "value": "80" }, { "value": "96" }, { "value": "120" }, { "value": "160" }] } }, "shape": { "defaultValue": null, "description": "", "name": "shape", "required": true, "type": { "name": "enum", "value": [{ "value": "\"circle\"" }, { "value": "\"square\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": true, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "autoPlay": { "defaultValue": null, "description": "", "name": "autoPlay", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/Avatar/AvatarAnimation/index.tsx#AvatarAnimation"] = { docgenInfo: AvatarAnimation.__docgenInfo, name: "AvatarAnimation", path: "../avatar/src/components/Avatar/AvatarAnimation/index.tsx#AvatarAnimation" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../avatar/src/components/Avatar/index.tsx
function Avatar_extends() {
  return Avatar_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Avatar_extends.apply(null, arguments);
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
  const baseAvatarSize = constants/* AVATAR_SIZES */.RG[size];
  const avatarImage = (0,findChildByType/* findChildByType */.B)(children, 'AvatarImage');
  const avatarVideo = (0,findChildByType/* findChildByType */.B)(children, 'AvatarVideo');
  const {
    autoPlay
  } = (0,getComponentProps/* default */.A)(avatarVideo);
  const [videoAutoPlay, setVideoAutoPlay] = (0,react.useState)(autoPlay);
  const borderRadius = (0,utils/* getBorderRadius */.Nb)(shape, size);
  const hasVideo = Boolean(avatarVideo);
  const hasAvatarAnimation = Boolean(avatarVideo);
  const {
    fontColor,
    backgroundColor
  } = (0,utils/* getAvatarBackgroundColor */.Hp)({
    color,
    username
  });
  const avatarSize = showRing || hasVideo ? baseAvatarSize - constants/* RING_BORDER_WIDTH */.Rq : baseAvatarSize;
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
  }, /*#__PURE__*/react.createElement(Box/* default */.A, Avatar_extends({
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
  }) : {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), hasAvatarAnimation && /*#__PURE__*/react.createElement(Avatar_AvatarAnimation, {
    autoPlay: videoAutoPlay,
    borderRadius: borderRadius,
    shape: shape,
    baseAvatarSize: baseAvatarSize
  }), /*#__PURE__*/react.createElement(Box/* default */.A, Avatar_extends({
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
    fontSize: constants/* FONT_SIZES */.$N[size],
    lineHeight: constants/* FONT_SIZES */.$N[size],
    title: showTitle ? nameValue : ''
  }, borderProperties), /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "figcaption",
    fontWeight: "semibold",
    fontSize: constants/* FONT_SIZES */.$N[size],
    lineHeight: constants/* FONT_SIZES */.$N[size],
    color: fontColor
  }, firstLetter.toLocaleUpperCase()), avatarImage, avatarVideo), (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, ['AvatarImage', 'AvatarVideo'])));
};
Avatar.id = 'Avatar';
Avatar.displayName = 'Avatar';
/* harmony default export */ const components_Avatar = (Avatar);
try {
    // @ts-ignore
    Avatar.displayName = "Avatar";
    // @ts-ignore
    Avatar.__docgenInfo = { "description": "", "displayName": "Avatar", "props": { "displayName": { "defaultValue": null, "description": "The displayName.", "name": "displayName", "required": false, "type": { "name": "string" } }, "username": { "defaultValue": null, "description": "The user's username.", "name": "username", "required": true, "type": { "name": "string" } }, "shape": { "defaultValue": { value: "circle" }, "description": "The shape of the avatar.", "name": "shape", "required": false, "type": { "name": "enum", "value": [{ "value": "\"circle\"" }, { "value": "\"square\"" }] } }, "size": { "defaultValue": { value: "xs" }, "description": "The size of the avatar.\nSupported sizes: xs = 24px, sm = 32px, smd = 40px, md = 48px, lg = 64px, xl = 80px, 2xl = 96px, 3xl = 120px, 4xl = 160px", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }, { "value": "\"xs\"" }, { "value": "\"smd\"" }, { "value": "\"4xl\"" }] } }, "showTitle": { "defaultValue": { value: "true" }, "description": "Whether to show the username as a title when hovering the image.", "name": "showTitle", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "showRing": { "defaultValue": null, "description": "Whether to show a ring around the avatar.", "name": "showRing", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "showBorder": { "defaultValue": { value: "true" }, "description": "Whether to show a border around the avatar.", "name": "showBorder", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "color": { "defaultValue": { value: "auto" }, "description": "The avatar's background color. The letter's color will be white if passed.", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"blue_light\"" }, { "value": "\"blue_dark\"" }, { "value": "\"pink_light\"" }, { "value": "\"pink_dark\"" }, { "value": "\"green_light\"" }, { "value": "\"green_dark\"" }, { "value": "\"yellow_light\"" }, { "value": "\"yellow_dark\"" }, { "value": "\"orange_light\"" }, { "value": "\"orange_dark\"" }, { "value": "\"lime_light\"" }, { "value": "\"lime_dark\"" }, { "value": "\"red_light\"" }, { "value": "\"red_dark\"" }] } }, "onClick": { "defaultValue": null, "description": "A click callback function.", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "children": { "defaultValue": null, "description": "Any node(s) to render.", "name": "children", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "avatar" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/Avatar/index.tsx#Avatar"] = { docgenInfo: Avatar.__docgenInfo, name: "Avatar", path: "../avatar/src/components/Avatar/index.tsx#Avatar" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../avatar/src/components/Avatar/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hp: () => (/* binding */ getAvatarBackgroundColor),
/* harmony export */   Nb: () => (/* binding */ getBorderRadius),
/* harmony export */   wD: () => (/* binding */ getSquareBorderRadius)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../avatar/src/components/Avatar/constants.ts");


const getAvatarBackgroundColor = _ref => {
  let {
    color,
    username
  } = _ref;
  if (username && color === 'auto') {
    const usernameInAscii = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sum)(username.split('').map(char => char.charCodeAt(0)));
    const colorIndex = usernameInAscii % _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_COLORS */ .T7.length;
    return _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_COLOR_SCHEME */ .k8[_constants__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_COLORS */ .T7[colorIndex]];
  }
  if (color && color !== 'auto') {
    return _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_COLOR_SCHEME */ .k8[color];
  }
  return _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_COLOR */ .OT;
};
const getSquareBorderRadius = size => _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_SQUARE_RADIUS_BY_SIZE */ .bV[_constants__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_SIZES */ .RG[size]];
const getBorderRadius = (shape, size) => shape === 'square' ? getSquareBorderRadius(size) : 'circle';

/***/ }),

/***/ "../storybook_helpers/dist/esm/src/components/StoryStack/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
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


const StoryStack = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    display: "flex",
    gap: "4"
  }, props), children);
});
StoryStack.displayName = 'StoryStack';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryStack);
;
StoryStack.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StoryStack"
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
//# sourceMappingURL=8578.98dd69f1.iframe.bundle.js.map