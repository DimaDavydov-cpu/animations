"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[5411],{

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

/***/ "../avatar/src/components/AvatarGroup/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Clickable: () => (/* binding */ Clickable),
  DisableAnimation: () => (/* binding */ DisableAnimation),
  ManyAvatars: () => (/* binding */ ManyAvatars),
  Primary: () => (/* binding */ Primary),
  Sizes: () => (/* binding */ Sizes),
  TooltipPosition: () => (/* binding */ TooltipPosition),
  WithFullName: () => (/* binding */ WithFullName),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/index.tsx + 5 modules
var Avatar = __webpack_require__("../avatar/src/components/Avatar/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../tooltip/dist/esm/src/components/Tooltip/index.js
var Tooltip = __webpack_require__("../tooltip/dist/esm/src/components/Tooltip/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/constants.ts
var constants = __webpack_require__("../avatar/src/components/Avatar/constants.ts");
;// ../avatar/src/components/avatar/src/components/AvatarGroup/style.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../avatar/src/components/AvatarGroup/style.ve.css.ts.vanilla.css","source":"QGtleWZyYW1lcyBfMXgwazl0YjAgewogIDM1JSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7CiAgfQogIDEwMCUgewogICAgdHJhbnNmb3JtOiBub25lOwogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgei1pbmRleDogMTsKICB9Cn0KLl8xeDBrOXRiMTpob3ZlciB7CiAgYW5pbWF0aW9uOiAwLjVzIF8xeDBrOXRiMCBmb3J3YXJkcyBlYXNlLW91dDsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../avatar/src/components/AvatarGroup/style.ve.css.ts

var avatarAnimation = '_1x0k9tb1';
;// ../avatar/src/components/AvatarGroup/constants.ts
const AVATARS_MAX_LENGTH = 99;
const MAX_TOOLTIP_ITEMS = 5;
const OVERLAY_DISTANCE = 3;
const LEFT_AVATARS_PADDING = {
  xs: '1.5',
  sm: '2',
  smd: '3',
  md: '4',
  lg: '5',
  xl: '5',
  '2xl': '8',
  '3xl': '10',
  '4xl': '16'
};
;// ../avatar/src/components/AvatarGroup/styles.ts
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



const getAvatarGroupAvatarStyles = _ref => {
  let {
    borderColor = 'white',
    hasAnimatedChildren,
    type,
    index,
    size,
    isMultiDigit
  } = _ref;
  const leftAvatarSize = size ? constants/* AVATAR_SIZES */.RG[size] : undefined;
  const marginLeft = -(OVERLAY_DISTANCE * 2);
  return _objectSpread(_objectSpread({
    borderColor,
    borderStyle: 'solid',
    borderWidth: 'md',
    borderRadius: 'circle',
    userSelect: 'none',
    display: 'flex',
    position: 'relative',
    className: hasAnimatedChildren ? avatarAnimation : undefined,
    lineHeight: size ? constants/* FONT_SIZES */.$N[size] : undefined,
    fontSize: size ? constants/* FONT_SIZES */.$N[size] : undefined
  }, type === 'mainAvatars' && {
    style: {
      marginLeft: index === 0 ? '0px' : marginLeft
    },
    backgroundColor: 'grey_400'
  }), type === 'leftAvatars' && _objectSpread({
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey_1000',
    fontWeight: 'semibold',
    backgroundColor: 'grey_400',
    width: leftAvatarSize,
    height: leftAvatarSize,
    style: {
      marginLeft
    }
  }, isMultiDigit && {
    paddingX: size ? LEFT_AVATARS_PADDING[size] : undefined,
    width: undefined
  }));
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
;// ../avatar/src/components/AvatarGroup/LeftAvatars/index.tsx









const LeftAvatars = _ref => {
  let {
    tooltipPosition,
    copies,
    hasAnimatedChildren,
    leftAvatars,
    size
  } = _ref;
  const leftAvatarsToShow = (0,lodash.take)(leftAvatars, MAX_TOOLTIP_ITEMS);
  const {
    locale
  } = (0,getContext/* default */.A)();
  const isMultiDigit = leftAvatars.length - leftAvatarsToShow.length > 10;
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    style: {
      marginLeft: -OVERLAY_DISTANCE
    }
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    size: "sm",
    as: "div",
    position: tooltipPosition,
    content: /*#__PURE__*/react.createElement(Box/* default */.A, {
      as: "ul",
      listStyleType: "none",
      padding: "0"
    }, react.Children.map(leftAvatarsToShow, child => {
      const {
        displayName,
        username
      } = child.props;
      return /*#__PURE__*/react.createElement("li", null, displayName || username);
    }), leftAvatarsToShow.length < leftAvatars.length && /*#__PURE__*/react.createElement(Container/* default */.A, {
      as: "li"
    }, copies === null || copies === void 0 ? void 0 : copies.moreItemsText(Intl.NumberFormat([locale, 'en-US'], {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(leftAvatars.length - leftAvatarsToShow.length))))
  }, /*#__PURE__*/react.createElement(Box/* default */.A, getAvatarGroupAvatarStyles({
    hasAnimatedChildren,
    type: 'leftAvatars',
    leftAvatars,
    size,
    isMultiDigit
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    as: "span"
  }, "+"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    as: "span"
  }, leftAvatars.length > AVATARS_MAX_LENGTH ? AVATARS_MAX_LENGTH : leftAvatars.length))));
};
LeftAvatars.displayName = 'LeftAvatars';
/* harmony default export */ const AvatarGroup_LeftAvatars = (LeftAvatars);
try {
    // @ts-ignore
    LeftAvatars.displayName = "LeftAvatars";
    // @ts-ignore
    LeftAvatars.__docgenInfo = { "description": "", "displayName": "LeftAvatars", "props": { "borderColor": { "defaultValue": null, "description": "", "name": "borderColor", "required": true, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "hasAnimatedChildren": { "defaultValue": null, "description": "", "name": "hasAnimatedChildren", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "leftAvatars": { "defaultValue": null, "description": "", "name": "leftAvatars", "required": true, "type": { "name": "(ReactChild | ReactFragment | ReactPortal)[]" } }, "size": { "defaultValue": null, "description": "The size of the avatar.\nSupported sizes: xs = 24px, sm = 32px, smd = 40px, md = 48px, lg = 64px, xl = 80px, 2xl = 96px, 3xl = 120px, 4xl = 160px", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }, { "value": "\"xs\"" }, { "value": "\"smd\"" }, { "value": "\"4xl\"" }] } }, "tooltipPosition": { "defaultValue": null, "description": "Tooltip position", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "copies": { "defaultValue": null, "description": "Copies for various situations:\n```\n1. moreItemsText - text when more than 5 items in more avatars tooltip (function that receive count)\n```", "name": "copies", "required": true, "type": { "name": "{ moreItemsText: (args: any) => ReactNode; }" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/AvatarGroup/LeftAvatars/index.tsx#LeftAvatars"] = { docgenInfo: LeftAvatars.__docgenInfo, name: "LeftAvatars", path: "../avatar/src/components/AvatarGroup/LeftAvatars/index.tsx#LeftAvatars" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../avatar/src/components/AvatarGroup/index.tsx
function AvatarGroup_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function AvatarGroup_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? AvatarGroup_ownKeys(Object(t), !0).forEach(function (r) {
      AvatarGroup_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : AvatarGroup_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function AvatarGroup_defineProperty(e, r, t) {
  return (r = AvatarGroup_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function AvatarGroup_toPropertyKey(t) {
  var i = AvatarGroup_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function AvatarGroup_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}









const AvatarGroup = _ref => {
  let {
    size = 'xs',
    maxAmount = 4,
    isAnimated = true,
    onClick,
    tooltipPosition,
    copies,
    children,
    disableTooltip = false,
    dataTestId,
    backgroundColor,
    dataTrackTag = 'avatar_group',
    dataTrackValue
  } = _ref;
  const childrenArray = react.Children.toArray(children);
  const isFits = maxAmount === childrenArray.length;
  const isClickable = typeof onClick === 'function';
  const mainAvatars = isFits ? childrenArray : (0,lodash.take)(childrenArray, maxAmount - 1);
  const leftAvatars = isFits ? [] : (0,lodash.drop)(childrenArray, maxAmount - 1);
  const hasAnimatedChildren = isAnimated && childrenArray.length > 1;
  const clickableInlineStyles = AvatarGroup_objectSpread({}, isClickable && {
    margin: '-4px'
  });
  const backgroundColorInternal = isClickable ? {
    hover: 'grey_200',
    active: 'grey_300'
  } : undefined;
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "inlineFlex",
    cursor: isClickable ? 'pointer' : undefined,
    padding: isClickable ? '2' : undefined,
    borderRadius: isClickable ? 'circle' : undefined,
    backgroundColor: backgroundColor || backgroundColorInternal,
    onClick: onClick,
    "data-testid": dataTestId,
    style: clickableInlineStyles,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, react.Children.map(mainAvatars, (child, index) => {
    const {
      displayName,
      username
    } = child.props;
    const avatar = (0,render_children/* renderChildren */.s)(child, {
      size
    });
    const avatarStyles = getAvatarGroupAvatarStyles({
      hasAnimatedChildren,
      type: 'mainAvatars',
      index
    });
    return /*#__PURE__*/react.createElement(Container/* default */.A, {
      style: index === 0 ? undefined : {
        marginLeft: -OVERLAY_DISTANCE
      }
    }, disableTooltip ? /*#__PURE__*/react.createElement(Box/* default */.A, avatarStyles, avatar) : /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
      as: "div",
      size: "sm",
      content: displayName || username,
      position: tooltipPosition
    }, /*#__PURE__*/react.createElement(Box/* default */.A, avatarStyles, avatar)));
  }), leftAvatars.length > 0 && /*#__PURE__*/react.createElement(AvatarGroup_LeftAvatars, {
    tooltipPosition: tooltipPosition,
    copies: copies,
    borderColor: "white",
    hasAnimatedChildren: hasAnimatedChildren,
    leftAvatars: leftAvatars,
    size: size
  }));
};
AvatarGroup.displayName = 'AvatarGroup';
/* harmony default export */ const components_AvatarGroup = (AvatarGroup);
try {
    // @ts-ignore
    AvatarGroup.displayName = "AvatarGroup";
    // @ts-ignore
    AvatarGroup.__docgenInfo = { "description": "", "displayName": "AvatarGroup", "props": { "copies": { "defaultValue": null, "description": "Copies for various situations:\n```\n1. moreItemsText - text when more than 5 items in more avatars tooltip (function that receive count)\n```", "name": "copies", "required": true, "type": { "name": "{ moreItemsText: (args: any) => ReactNode; }" } }, "maxAmount": { "defaultValue": { value: "4" }, "description": "Maximum amount of avatars in row", "name": "maxAmount", "required": false, "type": { "name": "number" } }, "isAnimated": { "defaultValue": { value: "true" }, "description": "Is avatars animated on hover?", "name": "isAnimated", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onClick": { "defaultValue": null, "description": "Click handler", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLDivElement>" } }, "disableTooltip": { "defaultValue": { value: "false" }, "description": "Whether to display tooltip", "name": "disableTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": null, "description": "Tooltip position", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "size": { "defaultValue": { value: "xs" }, "description": "The size of the avatar.\nSupported sizes: xs = 24px, sm = 32px, smd = 40px, md = 48px, lg = 64px, xl = 80px, 2xl = 96px, 3xl = 120px, 4xl = 160px", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }, { "value": "\"xs\"" }, { "value": "\"smd\"" }, { "value": "\"4xl\"" }] } }, "dataTrackTag": { "defaultValue": { value: "avatar_group" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/AvatarGroup/index.tsx#AvatarGroup"] = { docgenInfo: AvatarGroup.__docgenInfo, name: "AvatarGroup", path: "../avatar/src/components/AvatarGroup/index.tsx#AvatarGroup" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../avatar/src/components/AvatarGroup/stories/index.stories.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}






const SIZES = Object.keys(constants/* AVATAR_SIZES */.RG);
esm/* faker */.az.seed(1);
const users = [{
  username: esm/* faker */.az.internet.userName(),
  displayName: esm/* faker */.az.name.findName()
}, {
  username: esm/* faker */.az.internet.userName(),
  displayName: esm/* faker */.az.name.findName()
}, {
  username: esm/* faker */.az.internet.userName(),
  displayName: esm/* faker */.az.name.findName()
}, {
  username: esm/* faker */.az.internet.userName(),
  displayName: esm/* faker */.az.name.findName()
}, {
  username: esm/* faker */.az.internet.userName(),
  displayName: esm/* faker */.az.name.findName()
}];
const defaultAvatarGroupArgs = {
  copies: {
    moreItemsText: count => "and ".concat(count, " more...")
  },
  children: users.map(user => /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    key: user.username,
    username: user.username
  }))
};
const Primary = {
  tags: ['sidebar-ignore']
};
const WithFullName = {
  tags: ['sidebar-ignore'],
  args: {
    children: users.map(user => /*#__PURE__*/react.createElement(Avatar/* default */.A, {
      key: user.username,
      username: user.username,
      displayName: user.displayName
    }))
  }
};
const ManyAvatars = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    padding: "32"
  }, /*#__PURE__*/react.createElement(components_AvatarGroup, args, [...new Array(110)].map((_, idx) => /*#__PURE__*/react.createElement(Avatar/* default */.A, {
    key: idx,
    username: esm/* faker */.az.internet.userName()
  }))))
};
const Clickable = {
  tags: ['sidebar-ignore'],
  args: {
    onClick: () => alert('clicked')
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    padding: "12",
    width: "fit-content"
  }, /*#__PURE__*/react.createElement(components_AvatarGroup, args))
};
const DisableAnimation = {
  tags: ['sidebar-ignore'],
  args: {
    isAnimated: false
  }
};
const Sizes = {
  tags: ['sidebar-ignore'],
  args: {
    children: [...new Array(110)].map((_, idx) => /*#__PURE__*/react.createElement(Avatar/* default */.A, {
      key: idx,
      username: esm/* faker */.az.internet.userName()
    }))
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    padding: "12"
  }, SIZES.map(size => /*#__PURE__*/react.createElement(components_AvatarGroup, _extends({
    key: size
  }, args, {
    size: size
  }))))
};
const TooltipPosition = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    padding: "12"
  }, /*#__PURE__*/react.createElement(components_AvatarGroup, _extends({}, args, {
    tooltipPosition: "top"
  })), /*#__PURE__*/react.createElement(components_AvatarGroup, _extends({}, args, {
    tooltipPosition: "right"
  })), /*#__PURE__*/react.createElement(components_AvatarGroup, _extends({}, args, {
    tooltipPosition: "bottom"
  })), /*#__PURE__*/react.createElement(components_AvatarGroup, _extends({}, args, {
    tooltipPosition: "left"
  })))
};
const meta = {
  args: defaultAvatarGroupArgs,
  title: 'Avatar/AvatarGroup',
  component: components_AvatarGroup,
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    padding: "12"
  }, /*#__PURE__*/react.createElement(components_AvatarGroup, args))
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
WithFullName.parameters = {
  ...WithFullName.parameters,
  docs: {
    ...WithFullName.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: users.map(user => <Avatar key={user.username} username={user.username} displayName={user.displayName} />)\n  }\n}",
      ...WithFullName.parameters?.docs?.source
    }
  }
};
ManyAvatars.parameters = {
  ...ManyAvatars.parameters,
  docs: {
    ...ManyAvatars.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryStack direction=\"column\" padding=\"32\">\n      <AvatarGroup {...args}>\n        {[...new Array(110)].map((_, idx) => <Avatar key={idx} username={faker.internet.userName()} />)}\n      </AvatarGroup>\n    </StoryStack>\n}",
      ...ManyAvatars.parameters?.docs?.source
    }
  }
};
Clickable.parameters = {
  ...Clickable.parameters,
  docs: {
    ...Clickable.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    onClick: () => alert('clicked')\n  },\n  render: args => <StoryStack direction=\"column\" padding=\"12\" width=\"fit-content\">\n      <AvatarGroup {...args} />\n    </StoryStack>\n}",
      ...Clickable.parameters?.docs?.source
    }
  }
};
DisableAnimation.parameters = {
  ...DisableAnimation.parameters,
  docs: {
    ...DisableAnimation.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    isAnimated: false\n  }\n}",
      ...DisableAnimation.parameters?.docs?.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...Sizes.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: [...new Array(110)].map((_, idx) => <Avatar key={idx} username={faker.internet.userName()} />)\n  },\n  render: args => <StoryStack direction=\"column\" padding=\"12\">\n      {SIZES.map(size => <AvatarGroup key={size} {...args} size={size} />)}\n    </StoryStack>\n}",
      ...Sizes.parameters?.docs?.source
    }
  }
};
TooltipPosition.parameters = {
  ...TooltipPosition.parameters,
  docs: {
    ...TooltipPosition.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryStack direction=\"column\" padding=\"12\">\n      <AvatarGroup {...args} tooltipPosition=\"top\" />\n      <AvatarGroup {...args} tooltipPosition=\"right\" />\n      <AvatarGroup {...args} tooltipPosition=\"bottom\" />\n      <AvatarGroup {...args} tooltipPosition=\"left\" />\n    </StoryStack>\n}",
      ...TooltipPosition.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","WithFullName","ManyAvatars","Clickable","DisableAnimation","Sizes","TooltipPosition"];

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

/***/ "../layout_components/dist/esm/src/components/Layout/index.js":
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
;// ../layout_components/dist/esm/src/components/Layout/constants.js

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
;// ../layout_components/dist/esm/src/components/Layout/index.js
const _excluded = ["children", "centered", "borderStyle", "borderColor", "className"],
  _excluded2 = ["className"];
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
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread(_objectSpread(_objectSpread({
    ref: ref
  }, stylingProps), borderStylingReset), {}, {
    boxSizing: "borderBox",
    className: classnames_default()(className, customClassName)
  }, restProps), children);
});
Layout.displayName = 'Layout';
/* harmony default export */ const components_Layout = (Layout);
;
Layout.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Layout"
};

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

/***/ })

}]);
//# sourceMappingURL=5411.a57fc108.iframe.bundle.js.map