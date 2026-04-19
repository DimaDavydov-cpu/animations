"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[2342],{

/***/ "../avatar/src/components/Avatar/AvatarIcon/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _Corner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../avatar/src/components/Avatar/Corner/index.tsx");
/* harmony import */ var _AvatarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../avatar/src/components/Avatar/AvatarContext/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../avatar/src/components/Avatar/constants.ts");





const AvatarIcon = _ref => {
  let {
    children,
    position = 'bottom-right',
    showRing = true,
    backgroundColor,
    padding,
    dataTestId
  } = _ref;
  const {
    shape,
    size
  } = (0,_AvatarContext__WEBPACK_IMPORTED_MODULE_3__/* .useAvatarContext */ .u)();
  const avatarSize = _constants__WEBPACK_IMPORTED_MODULE_4__/* .AVATAR_SIZES */ .RG[size];
  if (!children) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Corner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    zIndex: "1",
    display: "flex",
    padding: padding,
    shape: shape,
    position: position,
    borderSize: showRing ? 2 : 0,
    cornerSize: 16,
    avatarSize: avatarSize,
    dataTestId: dataTestId,
    backgroundColor: !showRing ? backgroundColor : undefined,
    borderRadius: !showRing ? 'circle' : undefined
  }, showRing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    display: "flex",
    position: "relative",
    borderWidth: "md",
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: "circle",
    padding: padding,
    backgroundColor: backgroundColor ? backgroundColor : 'white'
  }, children) : children);
};
AvatarIcon.displayName = 'AvatarIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvatarIcon);
try {
    // @ts-ignore
    AvatarIcon.displayName = "AvatarIcon";
    // @ts-ignore
    AvatarIcon.__docgenInfo = { "description": "", "displayName": "AvatarIcon", "props": { "position": { "defaultValue": { value: "bottom-right" }, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top-right\"" }, { "value": "\"top-left\"" }, { "value": "\"bottom-right\"" }, { "value": "\"bottom-left\"" }] } }, "showRing": { "defaultValue": { value: "true" }, "description": "", "name": "showRing", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "backgroundColor": { "defaultValue": null, "description": "", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "padding": { "defaultValue": null, "description": "", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/Avatar/AvatarIcon/index.tsx#AvatarIcon"] = { docgenInfo: AvatarIcon.__docgenInfo, name: "AvatarIcon", path: "../avatar/src/components/Avatar/AvatarIcon/index.tsx#AvatarIcon" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../avatar/src/components/Avatar/AvatarImage/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../media/dist/esm/src/components/Image/index.js");
/* harmony import */ var _AvatarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../avatar/src/components/Avatar/AvatarContext/index.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../avatar/src/components/Avatar/hooks/useMedia.ts");
const _excluded = ["src", "lazyLoad", "alt"];
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




const AvatarImage = _ref => {
  let {
      src,
      lazyLoad = true,
      alt
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const {
    nameValue
  } = (0,_AvatarContext__WEBPACK_IMPORTED_MODULE_2__/* .useAvatarContext */ .u)();
  const {
    showMedia,
    isMediaLoaded,
    onMediaError,
    onMediaLoad
  } = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(src, lazyLoad);
  return showMedia ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_media__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvatarImage);
try {
    // @ts-ignore
    AvatarImage.displayName = "AvatarImage";
    // @ts-ignore
    AvatarImage.__docgenInfo = { "description": "", "displayName": "AvatarImage", "props": { "lazyLoad": { "defaultValue": { value: "true" }, "description": "", "name": "lazyLoad", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "alt": { "defaultValue": null, "description": "", "name": "alt", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "src": { "defaultValue": null, "description": "Object array that contains sources and media queries.", "name": "src", "required": true, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "ResponsiveSource" }] } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "htmlWidth": { "defaultValue": null, "description": "", "name": "htmlWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "htmlHeight": { "defaultValue": null, "description": "", "name": "htmlHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "ratio": { "defaultValue": null, "description": "", "name": "ratio", "required": false, "type": { "name": "enum", "value": [{ "value": "\"16/9\"" }, { "value": "\"1\"" }, { "value": "\"1.66/1\"" }, { "value": "\"1.33/1\"" }] } }, "objectFit": { "defaultValue": null, "description": "", "name": "objectFit", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"fill\"" }, { "value": "\"unset\"" }, { "value": "\"contain\"" }, { "value": "\"cover\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/Avatar/AvatarImage/index.tsx#AvatarImage"] = { docgenInfo: AvatarImage.__docgenInfo, name: "AvatarImage", path: "../avatar/src/components/Avatar/AvatarImage/index.tsx#AvatarImage" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../avatar/src/components/Avatar/AvatarOnlineIndicator/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Avatar_AvatarOnlineIndicator)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/DotIndicator/constants.js
var constants = __webpack_require__("../data_display/dist/esm/src/components/DotIndicator/constants.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/DotIndicator/index.js
var DotIndicator = __webpack_require__("../data_display/dist/esm/src/components/DotIndicator/index.js");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/Corner/index.tsx + 1 modules
var Corner = __webpack_require__("../avatar/src/components/Avatar/Corner/index.tsx");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/AvatarContext/index.ts
var AvatarContext = __webpack_require__("../avatar/src/components/Avatar/AvatarContext/index.ts");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/constants.ts
var Avatar_constants = __webpack_require__("../avatar/src/components/Avatar/constants.ts");
;// ../avatar/src/components/Avatar/AvatarOnlineIndicator/constants.ts
const INDICATOR_SIZES = {
  xs: 'sm',
  sm: 'sm',
  smd: 'sm',
  md: 'sm',
  lg: 'md',
  xl: 'lg',
  '2xl': 'lg',
  '3xl': 'lg',
  '4xl': 'lg'
};
;// ../avatar/src/components/Avatar/AvatarOnlineIndicator/index.tsx






const AvatarOnlineIndicator = _ref => {
  let {
    isOnline,
    position = 'bottom-right',
    dataTestId,
    dataTrackTag = 'avatar_online_indicator'
  } = _ref;
  const {
    size: avatarSize,
    shape
  } = (0,AvatarContext/* useAvatarContext */.u)();
  const indicatorSize = INDICATOR_SIZES[avatarSize];
  const indicatorSizeNumber = constants/* INDICATOR_SIZES_MAP */.yH[indicatorSize];
  const borderWidth = indicatorSizeNumber < 10 ? 'sm' : 'md';
  return /*#__PURE__*/react.createElement(Corner/* default */.A, {
    shape: shape,
    position: position,
    avatarSize: Avatar_constants/* AVATAR_SIZES */.RG[avatarSize],
    cornerSize: indicatorSizeNumber,
    borderSize: borderWidth === 'sm' ? 1 : 2,
    dataTestId: dataTestId,
    zIndex: "2"
  }, /*#__PURE__*/react.createElement(DotIndicator/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: isOnline ? 'online' : 'offline',
    type: isOnline ? 'success' : 'neutral',
    borderWidth: borderWidth,
    size: indicatorSize
  }));
};
AvatarOnlineIndicator.displayName = 'AvatarOnlineIndicator';
/* harmony default export */ const Avatar_AvatarOnlineIndicator = (AvatarOnlineIndicator);
try {
    // @ts-ignore
    AvatarOnlineIndicator.displayName = "AvatarOnlineIndicator";
    // @ts-ignore
    AvatarOnlineIndicator.__docgenInfo = { "description": "", "displayName": "AvatarOnlineIndicator", "props": { "isOnline": { "defaultValue": null, "description": "", "name": "isOnline", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "position": { "defaultValue": { value: "bottom-right" }, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top-right\"" }, { "value": "\"top-left\"" }, { "value": "\"bottom-right\"" }, { "value": "\"bottom-left\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "avatar_online_indicator" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/Avatar/AvatarOnlineIndicator/index.tsx#AvatarOnlineIndicator"] = { docgenInfo: AvatarOnlineIndicator.__docgenInfo, name: "AvatarOnlineIndicator", path: "../avatar/src/components/Avatar/AvatarOnlineIndicator/index.tsx#AvatarOnlineIndicator" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../avatar/src/components/Avatar/AvatarSkeleton/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Avatar_AvatarSkeleton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
;// ../feedback/dist/esm/src/components/Skeleton/SkeletonRound/index.js


const SkeletonRound = _ref => {
  let {
    size = 48,
    maxSize,
    dataTestId,
    dataTrackTag = 'skeleton_round',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    height: size,
    width: size,
    maxHeight: maxSize,
    maxWidth: maxSize,
    backgroundColor: "grey_300",
    borderRadius: "circle",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    "data-testid": dataTestId
  });
};
SkeletonRound.displayName = 'SkeletonRound';
/* harmony default export */ const Skeleton_SkeletonRound = (SkeletonRound);
;
SkeletonRound.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SkeletonRound"
};
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Skeleton/SkeletonSquare/index.js
var SkeletonSquare = __webpack_require__("../feedback/dist/esm/src/components/Skeleton/SkeletonSquare/index.js");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/constants.ts
var constants = __webpack_require__("../avatar/src/components/Avatar/constants.ts");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/utils.ts
var utils = __webpack_require__("../avatar/src/components/Avatar/utils.ts");
;// ../avatar/src/components/Avatar/AvatarSkeleton/index.tsx




const AvatarSkeleton = _ref => {
  let {
    size = 'xs',
    shape = 'circle',
    dataTrackTag = 'avatar_skeleton',
    dataTrackValue
  } = _ref;
  return shape === 'circle' ? /*#__PURE__*/react.createElement(Skeleton_SkeletonRound, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    size: constants/* AVATAR_SIZES */.RG[size]
  }) : /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    height: constants/* AVATAR_SIZES */.RG[size],
    width: constants/* AVATAR_SIZES */.RG[size],
    borderRadius: (0,utils/* getSquareBorderRadius */.wD)(size)
  });
};
AvatarSkeleton.displayName = 'AvatarSkeleton';
/* harmony default export */ const Avatar_AvatarSkeleton = (AvatarSkeleton);
try {
    // @ts-ignore
    AvatarSkeleton.displayName = "AvatarSkeleton";
    // @ts-ignore
    AvatarSkeleton.__docgenInfo = { "description": "", "displayName": "AvatarSkeleton", "props": { "dataTrackTag": { "defaultValue": { value: "avatar_skeleton" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "shape": { "defaultValue": { value: "circle" }, "description": "The shape of the avatar.", "name": "shape", "required": false, "type": { "name": "enum", "value": [{ "value": "\"circle\"" }, { "value": "\"square\"" }] } }, "size": { "defaultValue": { value: "xs" }, "description": "The size of the avatar.\nSupported sizes: xs = 24px, sm = 32px, smd = 40px, md = 48px, lg = 64px, xl = 80px, 2xl = 96px, 3xl = 120px, 4xl = 160px", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }, { "value": "\"xs\"" }, { "value": "\"smd\"" }, { "value": "\"4xl\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/Avatar/AvatarSkeleton/index.tsx#AvatarSkeleton"] = { docgenInfo: AvatarSkeleton.__docgenInfo, name: "AvatarSkeleton", path: "../avatar/src/components/Avatar/AvatarSkeleton/index.tsx#AvatarSkeleton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../avatar/src/components/Avatar/AvatarVideo/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Avatar_AvatarVideo)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../media/dist/esm/src/components/Video/index.js + 6 modules
var Video = __webpack_require__("../media/dist/esm/src/components/Video/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Overlay/index.js + 1 modules
var Overlay = __webpack_require__("../overlay/dist/esm/src/components/Overlay/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/components/Portal/index.js + 1 modules
var Portal = __webpack_require__("../ui_utils/dist/esm/src/components/Portal/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// ../overlay/dist/esm/src/components/Lightbox/constants.js
const DEFAULT_ITEMS_COUNT_TO_PRELOAD = 2;
;// ../overlay/dist/esm/src/components/Lightbox/hooks/useLightbox/utils.js
const preloadSourcesDependingOnIndex = (sources, index, count) => {
  const isFirstSource = index === 0;
  const isLastSource = index === sources.length - 1;
  const isMiddleSource = !isFirstSource && !isLastSource;
  if (isFirstSource) {
    preloadNextSources(sources, index, count);
  }
  if (isLastSource) {
    preloadPrevSources(sources, index, count);
  }
  if (isMiddleSource) {
    preloadNextSources(sources, index, count);
    preloadPrevSources(sources, index, count);
  }
};
const preloadElement = source => {
  if (document.head.querySelector("link[rel=\"preload\"][href=\"".concat(source.src, "\"]"))) {
    return;
  }
  const link = document.createElement('link');
  link.href = source.src;
  link.rel = 'preload';
  if (source.type === 'image') {
    link.as = 'image';
  }
  if (source.type === 'video') {
    link.as = 'video';
  }
  if (source.type === 'audio') {
    link.as = 'audio';
  }
  if (source.type === 'pdf') {
    link.as = 'fetch';
  }
  document.head.appendChild(link);
};
const preloadNextSources = (sources, index, count) => {
  const nextSourceIndex = index + 1;
  const nextSourceIndexPlusCount = index + 1 + count; // next source index, plus the amount of items to preload
  const nextSources = sources.slice(nextSourceIndex, nextSourceIndexPlusCount);
  nextSources.forEach(source => {
    preloadElement(source);
  });
};
const preloadPrevSources = (sources, index, count) => {
  const startIndex = index - 1 - count; // the item index before the current source, minus the amount of items to preload
  const prevSources = sources.slice(startIndex, index);
  prevSources.forEach(source => {
    preloadElement(source);
  });
};
;// ../overlay/dist/esm/src/components/Lightbox/hooks/useLightbox/index.js




const useLightbox = _ref => {
  let {
    initialSilentMode = true,
    sourceInitialIndex = 0,
    sources,
    onClickNext = lodash.noop,
    onClickPrev = lodash.noop,
    itemsToPreload = DEFAULT_ITEMS_COUNT_TO_PRELOAD
  } = _ref;
  const [selectedSourceIndex, setSelectedSourceIndex] = (0,react.useState)(sourceInitialIndex);
  const [silentMode, setSilentMode] = (0,react.useState)(initialSilentMode);
  const maxSourceIndex = sources.length - 1;
  const handlePrev = (0,react.useCallback)(() => {
    if (selectedSourceIndex === 0) {
      return;
    }
    onClickPrev();
    preloadPrevSources(sources, selectedSourceIndex, itemsToPreload);
    setSelectedSourceIndex(prev => prev - 1);
  }, [selectedSourceIndex, onClickPrev, sources, itemsToPreload]);
  const handleNext = (0,react.useCallback)(() => {
    if (selectedSourceIndex === maxSourceIndex) {
      return;
    }
    preloadNextSources(sources, selectedSourceIndex, itemsToPreload);
    onClickNext();
    setSelectedSourceIndex(prev => prev + 1);
  }, [selectedSourceIndex, maxSourceIndex, sources, itemsToPreload, onClickNext]);
  // Set local selectedIndex when sourceInitialIndex updates
  (0,react.useEffect)(() => {
    setSelectedSourceIndex(sourceInitialIndex);
  }, [sourceInitialIndex]);
  (0,react.useEffect)(() => {
    setSilentMode(initialSilentMode);
  }, [initialSilentMode]);
  // Preload next/prev sources on initial lightbox render
  (0,react.useEffect)(() => {
    if (itemsToPreload > 0) {
      preloadSourcesDependingOnIndex(sources, sourceInitialIndex, itemsToPreload);
    }
  }, [sources, sourceInitialIndex, itemsToPreload]);
  return {
    silentMode,
    setSilentMode,
    selectedSourceIndex,
    maxSourceIndex,
    sources,
    nextSource: handleNext,
    prevSource: handlePrev
  };
};
/* harmony default export */ const hooks_useLightbox = (useLightbox);
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js + 2 modules
var useKeyboardShortcuts = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
;// ../overlay/dist/esm/src/components/Lightbox/hooks/useLightboxKeyboard/index.js

const useLightboxKeyboard = _ref => {
  let {
    nextSource,
    prevSource,
    onClose
  } = _ref;
  (0,useKeyboardShortcuts/* default */.A)([{
    trigger: 'escape',
    handler: onClose
  }, {
    trigger: 'arrowleft',
    handler: prevSource
  }, {
    trigger: 'arrowright',
    handler: nextSource
  }]);
};
/* harmony default export */ const hooks_useLightboxKeyboard = (useLightboxKeyboard);
;// ../overlay/dist/esm/src/components/Lightbox/LightboxContext/index.js




const LightboxContext = /*#__PURE__*/(0,react.createContext)({});
const LightboxContextProvider = _ref => {
  let {
    initialSilentMode,
    sourceInitialIndex,
    sources,
    onClose,
    onClickNext = lodash.noop,
    onClickPrev = lodash.noop,
    itemsToPreload,
    children
  } = _ref;
  const {
    selectedSourceIndex,
    maxSourceIndex,
    nextSource,
    prevSource,
    silentMode,
    setSilentMode
  } = hooks_useLightbox({
    initialSilentMode,
    sourceInitialIndex,
    sources,
    onClickNext,
    onClickPrev,
    itemsToPreload
  });
  hooks_useLightboxKeyboard({
    nextSource,
    prevSource,
    onClose
  });
  return /*#__PURE__*/react.createElement(LightboxContext.Provider, {
    value: {
      silentMode,
      setSilentMode,
      selectedSourceIndex,
      maxSourceIndex,
      nextSource,
      prevSource,
      sources,
      close: onClose,
      itemsToPreload
    }
  }, children);
};
const useLightboxContext = () => (0,react.useContext)(LightboxContext);
;
LightboxContextProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LightboxContextProvider"
};
;// ../overlay/dist/esm/src/components/Lightbox/LightboxBackdrop/index.js




const LightboxBackdrop = _ref => {
  let {
    children,
    overlayTestId
  } = _ref;
  const {
    close
  } = useLightboxContext();
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "relative",
    zIndex: "overlay"
  }, /*#__PURE__*/react.createElement(Overlay/* default */.A, {
    zIndex: "-1",
    dataTestId: overlayTestId,
    dataTrackTag: 'lightBox_overlay',
    onClick: close,
    opacity: "high"
  }), /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
    width: "fit-content",
    height: "fit-content"
  }, children));
};
LightboxBackdrop.displayName = 'LightboxBackdrop';
/* harmony default export */ const Lightbox_LightboxBackdrop = (LightboxBackdrop);
;
LightboxBackdrop.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LightboxBackdrop"
};
;// ../overlay/dist/esm/src/components/Lightbox/index.js





const Lightbox = _ref => {
  let {
    children,
    initialSilentMode = true,
    sources = [],
    sourceInitialIndex = 0,
    onClickNext,
    onClickPrev,
    onClose,
    itemsToPreload = DEFAULT_ITEMS_COUNT_TO_PRELOAD,
    overlayTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Portal/* default */.A, null, /*#__PURE__*/react.createElement(LightboxContextProvider, {
    initialSilentMode: initialSilentMode,
    sourceInitialIndex: sourceInitialIndex,
    sources: sources,
    onClickNext: onClickNext,
    onClickPrev: onClickPrev,
    onClose: onClose,
    itemsToPreload: itemsToPreload
  }, /*#__PURE__*/react.createElement(Lightbox_LightboxBackdrop, {
    overlayTestId: overlayTestId
  }, children)));
};
Lightbox.displayName = 'Lightbox';
/* harmony default export */ const components_Lightbox = (Lightbox);
;
Lightbox.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Lightbox"
};
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/TimesButton/index.js
var TimesButton = __webpack_require__("../button/dist/esm/src/components/TimesButton/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utils.js
var utils = __webpack_require__("../theme/dist/esm/src/atoms/utils.js");
;// ../overlay/dist/esm/src/components/Lightbox/LightboxHeader/LightboxHeaderCloseIcon/index.js



const LightboxHeaderCloseIcon = _ref => {
  let {
    onClick,
    dataTestId
  } = _ref;
  const handleClick = e => {
    e.stopPropagation();
    onClick(e);
  };
  return /*#__PURE__*/react.createElement(TimesButton/* default */.A, {
    dataTestId: dataTestId,
    theme: "light",
    shape: "circle",
    onClick: handleClick,
    className: (0,utils/* atoms */.Fo)({
      marginLeft: 'auto'
    })
  });
};
/* harmony default export */ const LightboxHeader_LightboxHeaderCloseIcon = (LightboxHeaderCloseIcon);
;
LightboxHeaderCloseIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LightboxHeaderCloseIcon"
};
;// ../overlay/dist/esm/src/components/Lightbox/LightboxHeader/constants.js
const HEADER_HEIGHT = '64px';
;// ../overlay/dist/esm/src/components/Lightbox/LightboxHeader/index.js





const LightboxHeader = _ref => {
  let {
    children,
    dataTestId,
    closeButtonTestId
  } = _ref;
  const {
    close
  } = useLightboxContext();
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: HEADER_HEIGHT,
    alignItems: "center",
    paddingY: "0",
    paddingX: {
      default: '2',
      sm: '4'
    },
    gap: "0",
    cursor: "pointer",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    "data-testid": dataTestId,
    onClick: close
  }, children, /*#__PURE__*/react.createElement(LightboxHeader_LightboxHeaderCloseIcon, {
    dataTestId: closeButtonTestId,
    onClick: close
  }));
};
LightboxHeader.displayName = 'LightboxHeader';
/* harmony default export */ const Lightbox_LightboxHeader = (LightboxHeader);
;
LightboxHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LightboxHeader"
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-swipeable@7.0.2_react@17.0.2/node_modules/react-swipeable/es/index.js
var es = __webpack_require__("../../node_modules/.pnpm/react-swipeable@7.0.2_react@17.0.2/node_modules/react-swipeable/es/index.js");
// EXTERNAL MODULE: ../media/dist/esm/src/components/Image/index.js + 1 modules
var Image = __webpack_require__("../media/dist/esm/src/components/Image/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Loader/index.js + 1 modules
var Loader = __webpack_require__("../feedback/dist/esm/src/components/Loader/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../overlay/dist/esm/src/components/Lightbox/LightboxArrows/LightboxArrow/constants.js
const ARROW_SIZE = '48px';
;// ../overlay/dist/esm/src/components/Lightbox/LightboxContent/utils.js
const getClearSrc = src => src.split('?')[0];
const isImage = src => /\.(jpg|jpeg|png|webp|avif|gif)$/.test(getClearSrc(src));
const isVideo = src => /\.(mp4|mov|avi|mkv|webm)$/.test(getClearSrc(src));
const isAudio = src => /\.(wav|mp3)$/.test(getClearSrc(src));
const isPdf = src => /\.(pdf)$/.test(getClearSrc(src));
const getSourceType = source => {
  const {
    src,
    type
  } = source;
  if (type) {
    return type;
  }
  if (isImage(src)) {
    return 'image';
  }
  if (isVideo(src)) {
    return 'video';
  }
  if (isAudio(src)) {
    return 'audio';
  }
  if (isPdf(src)) {
    return 'pdf';
  }
  return 'unknown';
};
const getImageDefaultAlt = selectedSourceIndex => "Lightbox image ".concat(selectedSourceIndex + 1);
const isSourceLoadable = source => {
  const sourceType = getSourceType(source);
  if (sourceType === 'unknown') {
    return false;
  }
  return true;
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Download.js
var Download = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Download.js");
;// ../overlay/dist/esm/src/components/Lightbox/LightboxContent/NoPreviewAvailable/index.js






const NoPreviewAvailable = _ref => {
  let {
    downloadUrl,
    setError
  } = _ref;
  (0,react.useEffect)(() => {
    setError === null || setError === void 0 || setError(true);
  }, [setError]);
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    display: "flex",
    justifyContent: "center",
    direction: "column",
    alignItems: "center",
    boxSizing: "borderBox",
    backgroundColor: "white",
    padding: "8",
    gap: "5",
    width: {
      default: "calc(100vw - (".concat(themeVars/* spacing */.YK['3'], ") * 2)"),
      sm: '480px'
    },
    maxWidth: "100%",
    borderRadius: "xl",
    textAlign: "center",
    wordBreak: "breakAll"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    justifyContent: "center",
    direction: "column",
    alignItems: "center",
    gap: "1"
  }, /*#__PURE__*/react.createElement("h5", null, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "overlay.lightbox.noPreviewAvailable.title"
  }))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    justifyContent: "center",
    direction: "column",
    alignItems: "center",
    gap: "0"
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "sm",
    href: downloadUrl,
    variant: "outline",
    target: "_blank",
    download: true
  }, /*#__PURE__*/react.createElement(Download/* default */.A, null), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "overlay.lightbox.noPreviewAvailable.download"
  }))));
};
/* harmony default export */ const LightboxContent_NoPreviewAvailable = (NoPreviewAvailable);
;
NoPreviewAvailable.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NoPreviewAvailable"
};
;// ../overlay/dist/esm/src/components/Lightbox/LightboxContent/constants.js



const imgVideoStylingProps = {
  width: 'auto',
  height: 'auto',
  maxWidth: {
    default: '100%',
    sm: "calc(100vw - (".concat(ARROW_SIZE, " + ").concat(themeVars/* spacing */.YK['8'], " + ").concat(themeVars/* spacing */.YK['3'], ") * 2)")
  },
  maxHeight: "calc(100vh - ".concat(HEADER_HEIGHT, " * 3)")
};
;// ../overlay/dist/esm/src/components/Lightbox/LightboxContent/index.js
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












const LightboxContent = _ref => {
  let {
    dataTestId,
    audioTestId,
    dataTrackTag = 'lightbox',
    dataTrackValue
  } = _ref;
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const {
    selectedSourceIndex,
    nextSource,
    prevSource,
    sources,
    silentMode,
    setSilentMode
  } = useLightboxContext();
  // TODO: Avoid using 3d party "react-swipeable" pckg and create custom hook for it
  // https://github.com/fiverr/blocks/issues/1042
  const handlers = (0,es/* useSwipeable */.uh)({
    onSwipedLeft: nextSource,
    onSwipedRight: prevSource
  });
  const [isError, setIsError] = (0,react.useState)(false);
  const onError = (0,react.useCallback)(() => {
    setIsError(true);
    setIsLoading(false);
  }, []);
  const {
    selectedSource,
    selectedSourceType,
    isLoadable
  } = (0,react.useMemo)(() => {
    const selectedSource = sources[selectedSourceIndex];
    const selectedSourceType = getSourceType(selectedSource);
    const isLoadable = isSourceLoadable(selectedSource);
    setIsError(false);
    return {
      selectedSource,
      selectedSourceType,
      isLoadable
    };
  }, [sources, selectedSourceIndex]);
  const onLoaded = (0,react.useCallback)(() => setIsLoading(false), []);
  const handleSilentMode = (0,react.useCallback)(_ref2 => {
    let {
      target
    } = _ref2;
    return setSilentMode(target.muted);
  }, [setSilentMode]);
  const content = (0,react.useMemo)(() => {
    if (!selectedSource) {
      return null;
    }
    const key = "".concat(selectedSourceType, "_").concat(selectedSourceIndex);
    switch (selectedSourceType) {
      case 'image':
        const alt = selectedSource.alt || getImageDefaultAlt(selectedSourceIndex);
        return isError ? /*#__PURE__*/react.createElement(LightboxContent_NoPreviewAvailable, {
          downloadUrl: selectedSource.src
        }) : /*#__PURE__*/react.createElement(Image/* default */.A, _objectSpread(_objectSpread({
          key: key
        }, imgVideoStylingProps), {}, {
          src: selectedSource.src,
          alt: alt,
          onLoad: onLoaded,
          dataTrackTag: "lightbox_content_image",
          onError: onError
        }));
      case 'video':
        return /*#__PURE__*/react.createElement(Video/* default */.A, _objectSpread(_objectSpread({
          key: key
        }, imgVideoStylingProps), {}, {
          src: selectedSource.src,
          controls: true,
          autoPlay: true,
          muted: silentMode,
          role: "video",
          dataTrackTag: "lightbox_content_video",
          onLoadedData: onLoaded,
          onError: onError,
          onVolumeChange: handleSilentMode
        }));
      case 'audio':
        return /*#__PURE__*/react.createElement(Box/* default */.A, {
          as: "audio",
          maxWidth: "480px",
          width: {
            default: "calc(100vw - ".concat(themeVars/* spacing */.YK['6'], " * 2)"),
            sm: "calc(100vw - (".concat(ARROW_SIZE, " + ").concat(themeVars/* spacing */.YK['8'], " + ").concat(themeVars/* spacing */.YK['6'], ") * 2)")
          },
          key: key,
          src: selectedSource.src,
          "data-testid": audioTestId,
          controls: true,
          dataTrackTag: "lightbox_content_audio",
          autoPlay: !silentMode,
          onLoadedData: onLoaded,
          onError: onError,
          onVolumeChange: handleSilentMode,
          onPause: handleSilentMode,
          onPlay: handleSilentMode
        });
      case 'pdf':
        return /*#__PURE__*/react.createElement(Box/* default */.A, {
          as: "object",
          key: key,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - ".concat(HEADER_HEIGHT, " * 3)"),
          width: {
            default: "calc(100vw - ".concat(themeVars/* spacing */.YK['6'], " * 2)"),
            sm: "calc(100vw - (".concat(ARROW_SIZE, " + ").concat(themeVars/* spacing */.YK['8'], " + ").concat(themeVars/* spacing */.YK['3'], ") * 2)")
          },
          dataTrackTag: "lightbox_content_pdf",
          onLoad: onLoaded,
          onClick: e => e.stopPropagation(),
          data: selectedSource.src,
          type: "application/pdf"
        }, /*#__PURE__*/react.createElement(LightboxContent_NoPreviewAvailable, {
          setError: setIsError,
          downloadUrl: selectedSource.src
        }));
      default:
        return /*#__PURE__*/react.createElement(LightboxContent_NoPreviewAvailable, {
          downloadUrl: selectedSource.src
        });
    }
  }, [selectedSource, audioTestId, selectedSourceType, selectedSourceIndex, onLoaded, onError, isError, silentMode, handleSilentMode]);
  (0,react.useEffect)(() => {
    setIsLoading(isError ? false : isLoadable);
  }, [isLoadable, content, isError]);
  return /*#__PURE__*/react.createElement(Stack/* default */.A, _objectSpread({
    width: "100%",
    height: "100%",
    gap: "0",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    "data-testid": dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, handlers), content, isLoading && /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "absolute"
  }, /*#__PURE__*/react.createElement(Loader/* default */.A, {
    color: "grey_600"
  })));
};
LightboxContent.displayName = 'LightboxContent';
/* harmony default export */ const Lightbox_LightboxContent = (LightboxContent);
;
LightboxContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LightboxContent"
};
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
;// ../overlay/dist/esm/src/components/Lightbox/overlay/dist/esm/src/components/Lightbox/LightboxLabel/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../overlay/dist/esm/src/components/Lightbox/LightboxLabel/styles.ve.css.js.vanilla.css","source":"LnU3ZnJ1NjAgewogIGxlZnQ6IDUwJTsKICB0b3A6IDIwcHg7CiAgYm90dG9tOiAwOwogIGZvbnQtd2VpZ2h0OiA2MDA7Cn0KQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHsKICAudTdmcnU2MCB7CiAgICB0b3A6IHVuc2V0OwogICAgYm90dG9tOiAyMHB4OwogICAgZm9udC13ZWlnaHQ6IDQwMDsKICB9Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../overlay/dist/esm/src/components/Lightbox/LightboxLabel/styles.ve.css.js

var labelStyles = 'u7fru60';
;// ../overlay/dist/esm/src/components/Lightbox/LightboxLabel/index.js




const LightboxLabel = _ref => {
  let {
    dataTestId
  } = _ref;
  const {
    selectedSourceIndex,
    maxSourceIndex,
    sources
  } = useLightboxContext();
  if (sources.length <= 1) {
    return null;
  }
  return /*#__PURE__*/react.createElement(Typography/* default */.A, {
    "data-testid": dataTestId,
    position: "fixed",
    color: "white",
    userSelect: "none",
    transform: "translate(-50%, 0)",
    height: "fit-content",
    className: labelStyles
  }, "".concat(selectedSourceIndex + 1, " / ").concat(maxSourceIndex + 1));
};
LightboxLabel.displayName = 'LightboxLabel';
/* harmony default export */ const Lightbox_LightboxLabel = (LightboxLabel);
;
LightboxLabel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LightboxLabel"
};
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/PlaySolid.js
var PlaySolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/PlaySolid.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/components/Fade/index.js + 1 modules
var Fade = __webpack_require__("../transition/dist/esm/src/components/Fade/index.js");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/AvatarContext/index.ts
var AvatarContext = __webpack_require__("../avatar/src/components/Avatar/AvatarContext/index.ts");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/hooks/useMedia.ts
var useMedia = __webpack_require__("../avatar/src/components/Avatar/hooks/useMedia.ts");
;// ../avatar/src/components/Avatar/AvatarVideo/index.tsx
const _excluded = ["src", "autoPlay", "dataTrackTag"];
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










const AvatarVideo = _ref => {
  let {
      src,
      autoPlay = false,
      dataTrackTag = 'avatar_video'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const videoRef = (0,react.useRef)(null);
  const {
    size,
    videoAutoPlay,
    setVideoAutoPlay
  } = (0,AvatarContext/* useAvatarContext */.u)();
  const [isAvatarHovered, setIsAvatarHovered] = (0,react.useState)(false);
  const [openLightbox, setOpenListbox] = (0,react.useState)(false);
  const {
    showMedia,
    isMediaLoaded,
    onMediaError,
    onMediaLoad
  } = (0,useMedia/* default */.A)(src);
  (0,react.useEffect)(() => {
    setVideoAutoPlay(autoPlay);
    if (autoPlay) {
      var _videoRef$current;
      (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 || _videoRef$current.play();
      setVideoAutoPlay(true);
      const timer = setTimeout(() => {
        var _videoRef$current2;
        (_videoRef$current2 = videoRef.current) === null || _videoRef$current2 === void 0 || _videoRef$current2.pause();
        setVideoAutoPlay(false);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [autoPlay, setVideoAutoPlay]);
  return showMedia ? /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: "100%",
    height: "100%",
    position: "absolute",
    tabIndex: 0,
    onFocus: () => {
      setIsAvatarHovered(true);
    },
    onMouseEnter: () => {
      setIsAvatarHovered(true);
    },
    onMouseLeave: () => {
      setIsAvatarHovered(false);
    }
  }, /*#__PURE__*/react.createElement(Fade/* default */.A, {
    easing: {
      enter: 'easeIn',
      exit: 'easeOut'
    },
    duration: {
      enter: 'fast1',
      exit: 'moderate2'
    },
    delay: "fast1",
    in: videoAutoPlay
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: "100%",
    height: "100%",
    backgroundColor: "grey_400"
  }, /*#__PURE__*/react.createElement(Video/* default */.A, _extends({
    ref: videoRef,
    muted: true,
    controls: false,
    objectFit: "cover",
    width: "100%",
    height: "100%",
    backgroundColor: isMediaLoaded ? undefined : 'grey_700',
    src: src,
    onError: onMediaError,
    onLoad: onMediaLoad,
    dataTrackTag: dataTrackTag
  }, restProps)))), isAvatarHovered && /*#__PURE__*/react.createElement(Fade/* default */.A, {
    delay: "fast1",
    in: isAvatarHovered
  }, /*#__PURE__*/react.createElement(Overlay/* default */.A, {
    position: "absolute",
    lockBodyScroll: false
  }, /*#__PURE__*/react.createElement(Center/* default */.A, {
    height: "100%"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onBlur: () => {
      setIsAvatarHovered(false);
    },
    onClick: () => {
      setOpenListbox(true);
      setVideoAutoPlay(false);
    },
    "aria-label": (0,translate/* translate */.T)('avatar.avatarVideo.play'),
    variant: "ghost",
    colorScheme: "white",
    shape: "circle",
    size: size === 'xl' || size === '2xl' ? 'sm' : 'md'
  }, /*#__PURE__*/react.createElement(PlaySolid/* default */.A, {
    color: "white"
  }))))), openLightbox && src && /*#__PURE__*/react.createElement(components_Lightbox, {
    onClose: () => {
      setOpenListbox(false);
      setIsAvatarHovered(false);
    },
    sourceInitialIndex: 0,
    sources: [{
      src,
      type: 'video'
    }]
  }, /*#__PURE__*/react.createElement(Lightbox_LightboxHeader, null), /*#__PURE__*/react.createElement(Lightbox_LightboxContent, null), /*#__PURE__*/react.createElement(Lightbox_LightboxLabel, null))) : null;
};
AvatarVideo.id = 'AvatarVideo';
AvatarVideo.displayName = 'AvatarVideo';
/* harmony default export */ const Avatar_AvatarVideo = (AvatarVideo);
try {
    // @ts-ignore
    AvatarVideo.displayName = "AvatarVideo";
    // @ts-ignore
    AvatarVideo.__docgenInfo = { "description": "", "displayName": "AvatarVideo", "props": { "dataTrackTag": { "defaultValue": { value: "avatar_video" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "autoPlay": { "defaultValue": { value: "false" }, "description": "Video auto play on render", "name": "autoPlay", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "loop": { "defaultValue": null, "description": "Auto replay", "name": "loop", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "playsInline": { "defaultValue": null, "description": "Whether or not play the video within the element's playback area", "name": "playsInline", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "poster": { "defaultValue": null, "description": "A URL for an image to be shown while the video is downloading", "name": "poster", "required": false, "type": { "name": "string" } }, "preload": { "defaultValue": null, "description": "Video preload phase", "name": "preload", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"metadata\"" }] } }, "onPause": { "defaultValue": null, "description": "onPause https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause_event", "name": "onPause", "required": false, "type": { "name": "ClipboardEventHandler<HTMLVideoElement>" } }, "onPlay": { "defaultValue": null, "description": "onPlay https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event", "name": "onPlay", "required": false, "type": { "name": "ReactEventHandler<HTMLVideoElement>" } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "htmlWidth": { "defaultValue": null, "description": "", "name": "htmlWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "htmlHeight": { "defaultValue": null, "description": "", "name": "htmlHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "ratio": { "defaultValue": null, "description": "", "name": "ratio", "required": false, "type": { "name": "enum", "value": [{ "value": "\"16/9\"" }, { "value": "\"1\"" }, { "value": "\"1.66/1\"" }, { "value": "\"1.33/1\"" }] } }, "objectFit": { "defaultValue": null, "description": "", "name": "objectFit", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"fill\"" }, { "value": "\"unset\"" }, { "value": "\"contain\"" }, { "value": "\"cover\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "subtitles": { "defaultValue": null, "description": "Video subtitles - user locale active by default.<br/>\nShape: {<br/>\n- label: string - Subtitle selection name |<br/>\n- src: string - Subtitle src |<br/>\n- srcLang: string - Subtitle locale (BCP 47 format)<br/>\n}<br/>\n{\n@link https://en.wikipedia.org/wiki/IETF_language_tag }", "name": "subtitles", "required": false, "type": { "name": "Subtitle[]" } }, "playOnHover": { "defaultValue": null, "description": "Video trigger is on mouseEnter / mouseLeave", "name": "playOnHover", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "withHoverActions": { "defaultValue": null, "description": "Adding play/pause and mute/unmute buttons, available when using \"playOnHover=true\"", "name": "withHoverActions", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "preventHoverPause": { "defaultValue": null, "description": "Prevent video from pausing on mouseLeave, expect a stateful value", "name": "preventHoverPause", "required": false, "type": { "name": "(e: MouseEvent<HTMLVideoElement, MouseEvent>) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/Avatar/AvatarVideo/index.tsx#AvatarVideo"] = { docgenInfo: AvatarVideo.__docgenInfo, name: "AvatarVideo", path: "../avatar/src/components/Avatar/AvatarVideo/index.tsx#AvatarVideo" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../avatar/src/components/Avatar/Corner/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Avatar_Corner)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/AvatarContext/index.ts
var AvatarContext = __webpack_require__("../avatar/src/components/Avatar/AvatarContext/index.ts");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/constants.ts
var constants = __webpack_require__("../avatar/src/components/Avatar/constants.ts");
;// ../avatar/src/components/Avatar/Corner/utils.ts

const getCornerOffsetStyles = _ref => {
  let {
    avatarSize,
    cornerSize,
    borderSize = 0,
    shape = 'circle',
    actualAvatarSize = 0
  } = _ref;
  const sizeDiff = avatarSize - actualAvatarSize;
  switch (shape) {
    case 'square':
      const squareOffset = constants/* AVATAR_SQUARE_OFFSET_BY_SIZE */.sR[avatarSize] - sizeDiff * constants/* HALF */.QR;
      return {
        'bottom-right': {
          transform: 'translate(-50%,-50%)',
          top: squareOffset,
          left: squareOffset
        },
        'bottom-left': {
          transform: 'translate(50%,-50%)',
          top: squareOffset,
          right: squareOffset
        },
        'top-left': {
          transform: 'translate(50%, 50%)',
          bottom: squareOffset,
          right: squareOffset
        },
        'top-right': {
          transform: 'translate(-50%, 50%)',
          bottom: squareOffset,
          left: squareOffset
        }
      };
    case 'circle':
    default:
      const circleOffset = getCornerOffset({
        avatarSize,
        cornerSize,
        borderSize,
        avatarSizeDiff: sizeDiff
      });
      return {
        'bottom-right': {
          bottom: circleOffset,
          right: circleOffset
        },
        'bottom-left': {
          bottom: circleOffset,
          left: circleOffset
        },
        'top-left': {
          top: circleOffset,
          left: circleOffset
        },
        'top-right': {
          top: circleOffset,
          right: circleOffset
        }
      };
  }
};
const DEFAULT_OFFSET = 0;

/**
 * @desc Calculates the offset for the Icon based on the Avatar size
 */
const getCornerOffset = _ref2 => {
  let {
    avatarSize,
    cornerSize = 0,
    borderSize = 0,
    avatarSizeDiff = 0
  } = _ref2;
  if (!cornerSize || !avatarSize) {
    return DEFAULT_OFFSET;
  }
  const radius = (avatarSize - avatarSizeDiff) * constants/* HALF */.QR;
  const indicatorCenter = radius * Math.cos(45 * Math.PI / 180) + radius;
  const offset = avatarSize - avatarSizeDiff - indicatorCenter - cornerSize * constants/* HALF */.QR - borderSize * constants/* HALF */.QR;
  return Math.floor(offset);
};
;// ../avatar/src/components/Avatar/Corner/index.tsx
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




const Corner = _ref => {
  let {
    className,
    style,
    position = 'bottom-right',
    shape = 'circle',
    avatarSize,
    cornerSize,
    borderSize,
    dataTestId,
    children,
    backgroundColor,
    borderRadius,
    display,
    padding,
    zIndex
  } = _ref;
  const {
    actualAvatarSize
  } = (0,AvatarContext/* useAvatarContext */.u)();
  const cornerPositionMapping = getCornerOffsetStyles({
    actualAvatarSize,
    avatarSize,
    cornerSize,
    borderSize,
    shape
  });
  const cornerPositionStyles = cornerPositionMapping[position];
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    padding: padding,
    display: display,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    position: "absolute",
    "data-testid": dataTestId,
    className: className,
    zIndex: zIndex,
    style: _objectSpread(_objectSpread({}, cornerPositionStyles), style)
  }, children);
};
Corner.displayName = 'Corner';
/* harmony default export */ const Avatar_Corner = (Corner);
try {
    // @ts-ignore
    Corner.displayName = "Corner";
    // @ts-ignore
    Corner.__docgenInfo = { "description": "", "displayName": "Corner", "props": { "shape": { "defaultValue": { value: "circle" }, "description": "", "name": "shape", "required": false, "type": { "name": "enum", "value": [{ "value": "\"circle\"" }, { "value": "\"square\"" }] } }, "avatarSize": { "defaultValue": null, "description": "", "name": "avatarSize", "required": true, "type": { "name": "number" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "position": { "defaultValue": { value: "bottom-right" }, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top-right\"" }, { "value": "\"top-left\"" }, { "value": "\"bottom-right\"" }, { "value": "\"bottom-left\"" }] } }, "cornerSize": { "defaultValue": null, "description": "", "name": "cornerSize", "required": false, "type": { "name": "number" } }, "borderSize": { "defaultValue": null, "description": "", "name": "borderSize", "required": false, "type": { "name": "number" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "backgroundColor": { "defaultValue": null, "description": "", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "display": { "defaultValue": null, "description": "", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "padding": { "defaultValue": null, "description": "", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../avatar/src/components/Avatar/Corner/index.tsx#Corner"] = { docgenInfo: Corner.__docgenInfo, name: "Corner", path: "../avatar/src/components/Avatar/Corner/index.tsx#Corner" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../avatar/src/components/Avatar/hooks/useMedia.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const useMedia = function (src) {
  let lazyLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const [isMediaBroken, setIsMediaBroken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isMediaLoaded, setIsMediaLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!lazyLoad);
  const onMediaError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsMediaBroken(true);
  }, []);
  const onMediaLoad = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMedia);

/***/ }),

/***/ "../avatar/src/components/Avatar/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AvatarLoading: () => (/* binding */ AvatarLoading),
  BrokenImage: () => (/* binding */ BrokenImage),
  Inline: () => (/* binding */ Inline),
  OnlineIndicator: () => (/* binding */ OnlineIndicator),
  PickColor: () => (/* binding */ PickColor),
  Primary: () => (/* binding */ Primary),
  Shapes: () => (/* binding */ Shapes),
  Sizes: () => (/* binding */ Sizes),
  SquareWithIcon: () => (/* binding */ SquareWithIcon),
  VideoAutoPlay: () => (/* binding */ VideoAutoPlay),
  WithCustomIcon: () => (/* binding */ WithCustomIcon),
  WithFullName: () => (/* binding */ WithFullName),
  WithFullNameSquare: () => (/* binding */ WithFullNameSquare),
  WithImage: () => (/* binding */ WithImage),
  WithImageSquare: () => (/* binding */ WithImageSquare),
  WithRing: () => (/* binding */ WithRing),
  WithVideo: () => (/* binding */ WithVideo),
  WithVideoSquare: () => (/* binding */ WithVideoSquare),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories),
  withoutBorder: () => (/* binding */ withoutBorder)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Fiverr.js
var Fiverr = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Fiverr.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/CheckStarSolid.js
var CheckStarSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckStarSolid.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryText/index.js
var StoryText = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Skeleton/index.js
var Skeleton = __webpack_require__("../feedback/dist/esm/src/components/Skeleton/index.js");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/constants.ts
var constants = __webpack_require__("../avatar/src/components/Avatar/constants.ts");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/index.tsx + 5 modules
var Avatar = __webpack_require__("../avatar/src/components/Avatar/index.tsx");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/AvatarImage/index.tsx
var AvatarImage = __webpack_require__("../avatar/src/components/Avatar/AvatarImage/index.tsx");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/AvatarOnlineIndicator/index.tsx + 1 modules
var AvatarOnlineIndicator = __webpack_require__("../avatar/src/components/Avatar/AvatarOnlineIndicator/index.tsx");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/AvatarIcon/index.tsx
var AvatarIcon = __webpack_require__("../avatar/src/components/Avatar/AvatarIcon/index.tsx");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/AvatarVideo/index.tsx + 18 modules
var AvatarVideo = __webpack_require__("../avatar/src/components/Avatar/AvatarVideo/index.tsx");
// EXTERNAL MODULE: ../avatar/src/components/Avatar/AvatarSkeleton/index.tsx + 1 modules
var AvatarSkeleton = __webpack_require__("../avatar/src/components/Avatar/AvatarSkeleton/index.tsx");
;// ../avatar/src/components/Avatar/stories/assets/avatar.ts
const avatarBase64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACAAIADASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQYDBAcCAQgA/8QAPxAAAgEDAgMGAwUGBQMFAAAAAQIDAAQRBSEGEjEHEyJBUXEUMmFSgZGhsRUjM0JywTQ1YoLRJERTorLh8PH/xAAbAQACAwEBAQAAAAAAAAAAAAABBAIDBQAGB//EACYRAAMAAgICAQQDAQEAAAAAAAABAgMREiEEMVEFEzJBIkJhgbH/2gAMAwEAAhEDEQA/AB8msXBHhYj3qF52uPE+C3qaF/CsSA1zMd/tVdSMRQhQzH1JOTXlXKXpn1THLX9dFuNY42zISFzsAM03dnoA192K55oSRjr1FKPLzgE70xcJ3zWmt23PMVh8QOTgDIrsT1aYp9Sh141pfA5asqNxXp6sNzIxJ6bYq3x+ve8AasBuRDn8xWacYcaoNYims7nmMOSJE3IPTr/8UCuOJ7zUIJDLqE/dyqQ8Lylgp9vStTDNLb+TxPk1LmJ36QtGJ8/Ka8KsvUMPcUY0pXuZf3kQkj8nO4Ye+2/nivZ5LNmeFURmQ+JQSMfXzpjk0LaQFr8abND4Ri4juTBa3y282MiOZevsfOmiPsVvCBz6rEPaM1JWmBrXsyknevDmteTsS+3rB+6KrEfYlZj+Jqs5/pQUeQOjFj1rg1uidimjr89/dt+AqwnY3w4vzy3jn6yYocgdGANXDV9Er2RcKp80Fw3vManXss4SQf5bzf1SMa7mEx7mJ86nBzFknbH96gQbjPSrBXlt/LfOBnesBn1L9EgkKHGfKges62Fge3icKx2J+nnUfEt61rZxpG2HlbGPPFKtzlSgZmaQ7nBrQ8Px019yjyn136jSp+PH/Qhblrq5hgSNzgczGQ4AHqfpRq01LTrG4Q5gOAV52HMZM7kn9KXWvVj0TliyZmYiaT19B7UGSTLx8/y5xmtPjs8tyHRJZLKG6vI3xbzEOY0bdCScbVUkKXpEwfEyjaROrD6ivI7eaODnt254mXDx5+YULEZgkYxEmMZwejL9CKrlqvROoqPYx6drM2kzRTLM5MZDqyHxKR5gHqPavpPg3iOLifhy2v1kiaUjlmWM/Kw67eXrXyA907yFHbz2OfP1raOwfVbaOfU7OYqs7hXQnbONiP0rnPHsjvfRu5ryqs+pWVsMz3UMf9TgVQk4q0SPrfxn+nJoO0R0wzXJFLsvHOjR9JZH/pSqcnaDpxYJFbzSMTgDYZqLpBUtjZtXhrL+LO0+eztbiy0u17rUOQYlchhEevTG+360L1HjjiKbSrdUvRavcRRyPJHCpdMjJAz/APtBVtcl6JuHL0/YLjfSzkC1ycebE5qnfXNrInJDb90wBGV6H3oOt1dIQUijB9SSa9iknkaRpxGM5+X2rG46/Z9GlJVvTFriabOqDOCsSgKPTbrQF5gR4SS7CjOqzR6nLdTRL/CRd89QDjNAVACknqfIelb2CdY0vg8B598/Iu09ptnUTScypGcltsetMy8IXkkMLqsbRS+Z8IVveoeF9Fa6mNzIpKruopk1nVljgWElwijHdR7Z96ry5ny4wDFgTnlZBacMTWRVfiWPL/KDtU91o0VwhWS3IPqvnQm1viyRzpJd24cHlLtlWA6036ddd5pxuXOY0G7kbGlcjuXtsdxKKnWujNtW0C805+8MTtbno+OnvVrhe7nsuILS4ikkQFgG5D1/5p2OtjUYpLc2cTw8pyyyBsD1xSPw7Cz3nfkjkiOcnyprHkqpapCGbHM2nJp9xcSXMzPI5LMck1ykDudiaGW16jsOdwqk9fWmiwMUkIxiu0VFJdPL43NVpbyPSdStkC87sfEB1AO340flIt4ndiAFHU0sPcxS6li1Qz3Enh7wdf8AbnoPrQaTTTJTTlql+iTX7mxh1CO4lj7ycIE3GY1IO2fU/TpQ83Ut87HPP5s5OAo9SfKiOpcM63FbyPcaHqUkfL8kMPOXz646D1pKt5LoWosLkse6OGhYcu/+odSR03o48XGVPwHJmd27f7C2Ntq4dWe3lVDhmUgfgamjQMyrvuQNutWoOHNY1a57nSivNGeZySOXG+MkbisrFHKv8PoPl+RGHG9+9et6ESCFLKZEkLKs693K56KCev3EVzqujS2V98NFILlE5cyKuAxJ8qMcXaXLoWozWTBpFCjvXI25yMtgfZz0PWjHA0VpLpt5M+H5uReVt+QjOceg3rXunE8z5/CVtww7wbFDbRKZEHyjY0V1zT9O1JS6QASDoQKH2qC1R2zt0FdftAgYB96zKbdckacJegA+iBpxH8q9Aopsk0RDwVc6b3PiPKxB2OxoQmotZXJv/hluBEpwrHYN6mj2kcQTaoSJLNQWjIZEPl1zRqq1smlOwLYcMRWmgXV1siWNtK0agYJJU5yfOhelcL20nDlusbzRMyZYhsEmnTXbtZOHZIlHL3+Imx6Hr+QoVaXEccCR8wwowKYwVVJtiHkpKkkJ1zw7qFp/h7nvVU5CyjB/EUX0fWZrR4oLyBoydubqM+9MEpidC7soUDJJPSlbWtf0qxiZYZEurgjwRReLf6+gplNvoU1oP63xVpekajaW+taZFqOjXS/vyjsJImB67HBAGDjY/WnPXuD+CrTR7XUIbKOKC6ePxhnYzIQWVQrHcnYgeuKTeyngiHii31G+4i/6q1LKqW4ZlAfrknboNsfWmbtIg1bVOKeFdL0tI0ht5xcKGYcrOpAGR1wFB6etTrqePyQT29mkW8sHOFWUySgDwA7j3qlfaPpGoah8TeaZZS3KLy95JErNy/U0m8S8W3vD/FS6dp0cUdqkXNP+5LvPIw2wc9B+Zp30V7K406KaOQksoeTvThuY7nmHkaoXL8EyTS/JmFS2dpbf9yzHoDjBB+gono+maS2nteXuv/s64L8kJTIcj1PKcjeltpizNIWy2DhiP0HlUMtqkyg88rEYGS/KPypzHgmI4Is8nzMvk5PuZGT8T3FpeEOuu2+qtGChZkZZcehyN/xoBZX8elMIrXnKyp41P2gdsfdVi80YzRMMQeobcMPZjQ2SKSK3jhuwQY/4dyozg+XNjqKn9tOeD9CzyVL5DJa64lzBhHBYHBGanWcMD1+6s5FxdWGouxAyd2UHYj1FNOlapDdqPHg+Y9Kzs3j8PRpYPIVdMvG91uB3gRIHtnJ2RuViPcijXDl3qlq7GPTGjgYYkkZ1JB8sYqG3gjkXKPn+1M1lZPBo89xG4YImWx5b43per3/FLsd/jM8mD+IbtW7qBT8g5mx9o0sz3UkfytV+7cksSc5PWg1y2c0zEcZ0ZzrnTbOri8S+tjbXJYo2xwas6TaaZaIFEKH/AFY3oM/WvxldRhSc1Z3+jnKZ9E8PNDoHZ5HdRoB3wM2B6scD8sUr8Itc692g3WvzFTbafbtHGOp5n22/OrfaRdTaJ2WWdrBlHYQW4YbY8O5/KlTQ9THD3ZJf3MUhS71S6+DiYHdRy7kew5j+FB91v4KP66+RJ411DUNW431XULRpDC03JGQcgqo5R+lVtMvuI7ebMXeP9A5FHbae2SJIgRgACm2zi0/S7eOa4kiDyrzAcwO1S2ta0Fpz+zP4LoyOQWztVnvZG2UYHqdqXri6a2VI4yA7nGOpNVZ0muD+9upSPsqcCnhYZHaEnEs9rnzEktV3s4Jgfhbu2jl9BNlW+hBpeXTYCfFzH3NWl0i35ebumIH2WINAJW1S2lwIpbcwzxnw4+Vh6ChMUrW7ErzK/kQcEUy90YYQEmaWAHBhn/l9m8qH6xYxpCt1bFip2dG6qaD79nLr0dWfE+pWxAVo2A+0n/FP3DXE1xqUN9aRxgc1uXmbnJBVceXkcnrWVDKICjZVx/8AQa1HsvhiOh8SSOn7/wCFwuR8q539sn9KquIlNpFqyU+mz9ctlWP1oPcN1opO3gNCJj1FLlsldz517bL3t3An25FX8SKjY7VY0z/NrHPT4iP/ANwrmXGvdtsoXhfT4gOt2D1+yp/5pK4wtZNL4B4VtmHKWY3Lgjo0isfyHLTd23uo0zS0TJHxEhYf7RS72nanFq9jouoQf4OW3UIuMFWx/bcfdVcP0UNdbM976QNzKTtUNxdTecuBjcHcV1g461SvuQQtyAgAbknJJpqSvI9vZzal5me8l3JPKv0qxz42qFSsVjAuceHmPvXPNtv1O5pgpLCy8pG5q7b3ITqrH76Fc2OlTQ3PI/K4yp2rjghMvLmZEDRMMSKfMVQmHKBbsxeNvHBIerDzU/UUUhTkXvE8cTdfpVW9thCoIBEDNkH/AMbetcEEWFvZG4aK7745YBAm2R5/eK+idC0vSLDs7uP2TCyLNA7Ss7FnZwMHJPp5V8+Ny2WrRNOSLeRg+VG433A+/wDWt+4Lc3PZzJgghu/xjz61Tm/EsjRm0x8JoXMdzRCdwBjNDJW6+lUFskDedWNLYLq9kx6C4jP/AKhVZt817E5ilSRfmVgw9wc12i3Z9A9qWivq/DDx28fNNC3eRgDc4Izj7iay7tBUW2maPpsQHdRsRnHXlUAf3rRB2h6Vq9pHcxXy2rpE/wARbTrhskDdT0OMHp61kGt6vc65fieWDlijyIlCnwjPn9aXlPn/AIiKT4aArJyqfpQi8YmJvej0ynkbwkfdQG7/AITe9O43soyLR5cE93bqPNQTX7nztnbr71KixmRRKCcDauJ4+7JcDr+VMFByZc10CTtkVAHAP1roNnG+KAS/bXN5asDE2R6dQaLw3sd3A8U9o6BhgmPoD64NBLeQdCaJW7kOGRuWQevQ/SiEsxaONUtbnTkIluYx39vy9WK7MvuVP4qKbuCNdYaVPpMFzLAqxNhABuQN9yPel7RmK8RRzgGLmAyB5Mcj8Dkb1xrF4dL4pvJIfCRIJMHoCwBx+dV1O25ZNPS2QMzH+YmoSOY4p67OrbS9WuNQF9ZQTJFCvKrjOCx61pWn6VoNoAbfTbSNh0YRgn8TSGbMsVcWM4sTtckYdp3DeratIEs7GaQH+cryqPvNPGldlSwGKXWrteVusURxv6E1pEuoRRJhOUD6UrcSahcTafL8PKFmTxoD5keVLPyKrpdDE4tdst6e3C+l3IsILaAAbjnUEZ++mWGTS5VwIYcf0isU4f06/wCKdVYR5URsrSyH5VB/v9K0luGbm3jAhvJSQOpPWo2+L7KPFlVLddbb/wDQ3fWumxx958JEy5wcINqR+K+B9F4t0+T9mdza6lGCY3UAK/8ApYD9aJj9rabIZJM3EfRk9RXGlaN3l8buwuHhXcmIn5STmhjulW0OPFPBp9n/2Q==';
;// ../avatar/src/components/Avatar/stories/index.stories.tsx
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
const avatarImage = avatarBase64;
const Primary = {
  tags: ['sidebar-ignore']
};
const WithFullName = {
  tags: ['sidebar-ignore'],
  args: {
    displayName: esm/* faker */.az.name.findName()
  }
};
const WithFullNameSquare = {
  tags: ['sidebar-ignore'],
  args: {
    displayName: esm/* faker */.az.name.findName(),
    shape: 'square'
  }
};
const WithImage = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(Avatar/* default */.A, args, /*#__PURE__*/react.createElement(AvatarImage/* default */.A, {
    alt: "image-docs",
    src: avatarImage
  }))
};
const WithImageSquare = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    children: undefined,
    displayName: esm/* faker */.az.name.findName()
  },
  render: args => /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    shape: "square"
  }), /*#__PURE__*/react.createElement(AvatarImage/* default */.A, {
    alt: "image-docs",
    src: avatarImage
  }))
};
const BrokenImage = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(Avatar/* default */.A, args, /*#__PURE__*/react.createElement(AvatarImage/* default */.A, {
    alt: "image-docs",
    src: "https://picsum.ph"
  }))
};
const WithVideo = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    children: undefined,
    displayName: esm/* faker */.az.name.findName()
  },
  render: args => /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    size: "xl"
  }), /*#__PURE__*/react.createElement(AvatarImage/* default */.A, {
    alt: "image-docs",
    src: avatarImage
  }), /*#__PURE__*/react.createElement(AvatarVideo/* default */.A, {
    src: 'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'
  }))
};
const WithVideoSquare = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    children: undefined,
    displayName: esm/* faker */.az.name.findName()
  },
  render: args => /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    size: "2xl",
    shape: "square"
  }), /*#__PURE__*/react.createElement(AvatarImage/* default */.A, {
    alt: "image-docs",
    src: avatarImage
  }), /*#__PURE__*/react.createElement(AvatarVideo/* default */.A, {
    src: 'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'
  }))
};
const VideoAutoPlay = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    children: undefined,
    displayName: esm/* faker */.az.name.findName()
  },
  parameters: {
    docs: {
      source: {
        code: "\nconst [autoPlay, setAutoPlay] = useState(false);\n\nreturn (\n  <Stack direction='column'  width=\"fit-content\">\n    <Button onClick={() => setAutoPlay(!autoPlay)}>\n      Click to set autoPlay {autoPlay ? \"false\" : \"true\"}\n    </Button>\n    <Stack>\n    <Avatar {...args} size=\"4xl\">\n        <AvatarImage alt=\"image-docs\" src={avatarImage} />\n        <AvatarVideo\n          autoPlay={autoPlay}\n          src={\n            'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'\n          }\n        />\n      </Avatar>\n      <Avatar {...args} size=\"4xl\" shape=\"square\">\n        <AvatarImage alt=\"image-docs\" src={avatarImage} />\n        <AvatarVideo\n          autoPlay={autoPlay}\n          src={\n            'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'\n          }\n        />\n      </Avatar>\n\n    </Stack>\n  </Stack>\n);"
      }
    }
  },
  render: args => {
    const [autoPlay, setAutoPlay] = (0,react.useState)(false);
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "column",
      width: "fit-content"
    }, /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: () => setAutoPlay(!autoPlay)
    }, "Click to set autoPlay to ", autoPlay ? 'false' : 'true'), /*#__PURE__*/react.createElement(Stack/* default */.A, null, /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
      size: "4xl"
    }), /*#__PURE__*/react.createElement(AvatarImage/* default */.A, {
      alt: "image-docs",
      src: avatarImage
    }), /*#__PURE__*/react.createElement(AvatarVideo/* default */.A, {
      autoPlay: autoPlay,
      src: 'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'
    })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
      size: "4xl",
      shape: "square"
    }), /*#__PURE__*/react.createElement(AvatarImage/* default */.A, {
      alt: "image-docs",
      src: avatarImage
    }), /*#__PURE__*/react.createElement(AvatarVideo/* default */.A, {
      autoPlay: autoPlay,
      src: 'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'
    }))));
  }
};
const Sizes = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "4",
    withDivider: true
  }, SIZES.map(size => {
    const sizePx = constants/* AVATAR_SIZES */.RG[size];
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      key: size,
      minHeight: "48px"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "column",
      gap: "1",
      minWidth: "100px"
    }, /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_sm"
    }, "".concat(sizePx, " (").concat(size, ")"))), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
      size: size
    })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
      size: size,
      color: "lime_dark"
    }), /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
      isOnline: true
    })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
      size: size,
      shape: "square",
      color: "blue_light"
    }), /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
      isOnline: false
    })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
      size: size,
      showRing: true,
      showBorder: false,
      color: "lime_light"
    })));
  }))
};
const Shapes = {
  tags: ['sidebar-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, SIZES.map(size => /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({
    key: size
  }, args, {
    size: size
  })))), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, SIZES.map(size => /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({
    key: size
  }, args, {
    size: size,
    shape: "square"
  })))))
};
const PickColor = {
  tags: ['sidebar-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, constants/* AVATAR_COLORS */.T7.map(color => /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({
    key: color
  }, args, {
    color: color
  }))))
};
const Inline = {
  tags: ['sidebar-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(StoryText/* default */.A, null, "Voluptate duis excepteur ullamco ", /*#__PURE__*/react.createElement(Avatar/* default */.A, args), " aliquip sit laboris sint ", /*#__PURE__*/react.createElement(Avatar/* default */.A, args), " consequat nulla.")
};
const OnlineIndicator = {
  tags: ['sidebar-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Avatar/* default */.A, args, /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
    isOnline: true
  })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    username: esm/* faker */.az.internet.userName()
  }), /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
    position: "top-left",
    isOnline: true
  })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    username: esm/* faker */.az.internet.userName(),
    shape: "square"
  }), /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
    position: "bottom-left",
    isOnline: true
  })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    username: esm/* faker */.az.internet.userName(),
    shape: "square"
  }), /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
    position: "bottom-right",
    isOnline: true
  })))
};
const SquareWithIcon = {
  tags: ['sidebar-ignore'],
  args: {
    children: undefined,
    shape: 'square'
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Avatar/* default */.A, args, /*#__PURE__*/react.createElement(AvatarIcon/* default */.A, null, /*#__PURE__*/react.createElement(Fiverr/* default */.A, {
    color: "green_700",
    size: "xs"
  }))), /*#__PURE__*/react.createElement(Avatar/* default */.A, args, /*#__PURE__*/react.createElement(AvatarIcon/* default */.A, {
    position: "bottom-left"
  }, /*#__PURE__*/react.createElement(Fiverr/* default */.A, {
    color: "green_700",
    size: "xs"
  }))), /*#__PURE__*/react.createElement(Avatar/* default */.A, args, /*#__PURE__*/react.createElement(AvatarIcon/* default */.A, {
    position: "top-left"
  }, /*#__PURE__*/react.createElement(Fiverr/* default */.A, {
    color: "green_700",
    size: "xs"
  }))), /*#__PURE__*/react.createElement(Avatar/* default */.A, args, /*#__PURE__*/react.createElement(AvatarIcon/* default */.A, {
    position: "top-right"
  }, /*#__PURE__*/react.createElement(Fiverr/* default */.A, {
    color: "green_700",
    size: "xs"
  }))))
};
const WithCustomIcon = {
  tags: ['sidebar-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Avatar/* default */.A, args, /*#__PURE__*/react.createElement(AvatarIcon/* default */.A, {
    padding: 'px',
    backgroundColor: "business_800",
    position: "top-right",
    showRing: false
  }, /*#__PURE__*/react.createElement(CheckStarSolid/* default */.A, {
    color: "white",
    size: "xs"
  }))), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    shape: "square"
  }), /*#__PURE__*/react.createElement(AvatarIcon/* default */.A, {
    padding: 'px',
    backgroundColor: 'business_800',
    position: "bottom-right"
  }, /*#__PURE__*/react.createElement(CheckStarSolid/* default */.A, {
    color: "white",
    size: "xs"
  }))))
};
const WithRing = {
  tags: ['sidebar-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    showRing: true
  })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    showRing: true
  }), /*#__PURE__*/react.createElement(AvatarIcon/* default */.A, null, /*#__PURE__*/react.createElement(Fiverr/* default */.A, {
    color: "green_700",
    size: "xs"
  }))), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    showRing: true
  }), /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
    isOnline: true
  })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    shape: "square",
    showRing: true
  }), /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
    isOnline: true
  })))
};
const withoutBorder = {
  tags: ['sidebar-ignore'],
  args: {
    children: undefined
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    showBorder: false
  })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    showBorder: false
  }), /*#__PURE__*/react.createElement(AvatarIcon/* default */.A, null, /*#__PURE__*/react.createElement(Fiverr/* default */.A, {
    color: "green_700",
    size: "xs"
  }))), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    showBorder: false
  }), /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
    isOnline: true
  })), /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
    shape: "square",
    showBorder: false
  }), /*#__PURE__*/react.createElement(AvatarOnlineIndicator/* default */.A, {
    isOnline: true
  }))),
  parameters: {
    docs: {
      source: {
        code: "\n<StoryStack>\n  <Avatar {...args} showBorder={false} />\n  <Avatar {...args} showBorder={false}>\n    <AvatarIcon>\n      <FiverrIcon color=\"green_700\" size=\"xs\" />\n    </AvatarIcon>\n  </Avatar>\n  <Avatar {...args} showBorder={false}>\n    <AvatarOnlineIndicator isOnline={true} />\n  </Avatar>\n  <Avatar {...args} shape=\"square\" showBorder={false}>\n    <AvatarOnlineIndicator isOnline={true} />\n  </Avatar>\n<StoryStack>\n"
      }
    }
  }
};
const AvatarLoading = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    children: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'AvatarSkeleton should be used as a child of Skeleton component from `@fiverr-private/feedback` package'
      },
      source: {
        code: "\nconst [loading, setLoading] = useState(false);\n\nreturn (\n  <Stack direction=\"column\" width=\"fit-content\">\n    <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>\n    <Stack>\n      {loading ? (\n        <Skeleton>\n          <AvatarSkeleton size=\"lg\" />\n        </Skeleton>\n      ) : (\n        <Avatar {...args} size=\"lg\" />\n      )}\n    </Stack>\n  </Stack>\n);"
      }
    }
  },
  render: args => {
    const [loading, setLoading] = (0,react.useState)(false);
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "column",
      width: "fit-content"
    }, /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: () => setLoading(!loading)
    }, "Toggle Loading"), /*#__PURE__*/react.createElement(Stack/* default */.A, null, loading ? /*#__PURE__*/react.createElement(Skeleton/* default */.A, null, /*#__PURE__*/react.createElement(AvatarSkeleton/* default */.A, {
      size: "lg"
    })) : /*#__PURE__*/react.createElement(Avatar/* default */.A, _extends({}, args, {
      size: "lg"
    }))));
  }
};
const meta = {
  args: {
    username: 'Gideon.Heathcote93',
    size: 'md'
  },
  title: 'Avatar/Avatar',
  component: Avatar/* default */.A
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
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    displayName: faker.name.findName()\n  }\n}",
      ...WithFullName.parameters?.docs?.source
    }
  }
};
WithFullNameSquare.parameters = {
  ...WithFullNameSquare.parameters,
  docs: {
    ...WithFullNameSquare.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    displayName: faker.name.findName(),\n    shape: 'square'\n  }\n}",
      ...WithFullNameSquare.parameters?.docs?.source
    }
  }
};
WithImage.parameters = {
  ...WithImage.parameters,
  docs: {
    ...WithImage.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <Avatar {...args}>\n      <AvatarImage alt=\"image-docs\" src={avatarImage} />\n    </Avatar>\n}",
      ...WithImage.parameters?.docs?.source
    }
  }
};
WithImageSquare.parameters = {
  ...WithImageSquare.parameters,
  docs: {
    ...WithImageSquare.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    children: undefined,\n    displayName: faker.name.findName()\n  },\n  render: args => <Avatar {...args} shape=\"square\">\n      <AvatarImage alt=\"image-docs\" src={avatarImage} />\n    </Avatar>\n}",
      ...WithImageSquare.parameters?.docs?.source
    }
  }
};
BrokenImage.parameters = {
  ...BrokenImage.parameters,
  docs: {
    ...BrokenImage.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <Avatar {...args}>\n      <AvatarImage alt=\"image-docs\" src=\"https://picsum.ph\" />\n    </Avatar>\n}",
      ...BrokenImage.parameters?.docs?.source
    }
  }
};
WithVideo.parameters = {
  ...WithVideo.parameters,
  docs: {
    ...WithVideo.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    children: undefined,\n    displayName: faker.name.findName()\n  },\n  render: args => <Avatar {...args} size=\"xl\">\n      <AvatarImage alt=\"image-docs\" src={avatarImage} />\n      <AvatarVideo src={'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'} />\n    </Avatar>\n}",
      ...WithVideo.parameters?.docs?.source
    }
  }
};
WithVideoSquare.parameters = {
  ...WithVideoSquare.parameters,
  docs: {
    ...WithVideoSquare.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    children: undefined,\n    displayName: faker.name.findName()\n  },\n  render: args => <Avatar {...args} size=\"2xl\" shape=\"square\">\n      <AvatarImage alt=\"image-docs\" src={avatarImage} />\n      <AvatarVideo src={'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'} />\n    </Avatar>\n}",
      ...WithVideoSquare.parameters?.docs?.source
    }
  }
};
VideoAutoPlay.parameters = {
  ...VideoAutoPlay.parameters,
  docs: {
    ...VideoAutoPlay.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    children: undefined,\n    displayName: faker.name.findName()\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst [autoPlay, setAutoPlay] = useState(false);\n\nreturn (\n  <Stack direction='column'  width=\"fit-content\">\n    <Button onClick={() => setAutoPlay(!autoPlay)}>\n      Click to set autoPlay {autoPlay ? \"false\" : \"true\"}\n    </Button>\n    <Stack>\n    <Avatar {...args} size=\"4xl\">\n        <AvatarImage alt=\"image-docs\" src={avatarImage} />\n        <AvatarVideo\n          autoPlay={autoPlay}\n          src={\n            'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'\n          }\n        />\n      </Avatar>\n      <Avatar {...args} size=\"4xl\" shape=\"square\">\n        <AvatarImage alt=\"image-docs\" src={avatarImage} />\n        <AvatarVideo\n          autoPlay={autoPlay}\n          src={\n            'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'\n          }\n        />\n      </Avatar>\n\n    </Stack>\n  </Stack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [autoPlay, setAutoPlay] = useState(false);\n    return <Stack direction=\"column\" width=\"fit-content\">\n        <Button onClick={() => setAutoPlay(!autoPlay)}>Click to set autoPlay to {autoPlay ? 'false' : 'true'}</Button>\n        <Stack>\n          <Avatar {...args} size=\"4xl\">\n            <AvatarImage alt=\"image-docs\" src={avatarImage} />\n            <AvatarVideo autoPlay={autoPlay} src={'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'} />\n          </Avatar>\n          <Avatar {...args} size=\"4xl\" shape=\"square\">\n            <AvatarImage alt=\"image-docs\" src={avatarImage} />\n            <AvatarVideo autoPlay={autoPlay} src={'https://fiverr-res.cloudinary.com/video/upload/t_direct_hd/v1566729480/static_videos/Fiverr_PRO_2019_promo.mp4.mov'} />\n          </Avatar>\n        </Stack>\n      </Stack>;\n  }\n}",
      ...VideoAutoPlay.parameters?.docs?.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...Sizes.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <Stack direction=\"column\" gap=\"4\" withDivider>\n      {SIZES.map(size => {\n      const sizePx = AVATAR_SIZES[size];\n      return <Stack key={size} minHeight=\"48px\">\n            <Stack direction=\"column\" gap=\"1\" minWidth=\"100px\">\n              <Text size=\"b_sm\">{`${sizePx} (${size})`}</Text>\n            </Stack>\n            <Avatar {...args} size={size} />\n            <Avatar {...args} size={size} color=\"lime_dark\">\n              <AvatarOnlineIndicator isOnline />\n            </Avatar>\n            <Avatar {...args} size={size} shape=\"square\" color=\"blue_light\">\n              <AvatarOnlineIndicator isOnline={false} />\n            </Avatar>\n            <Avatar {...args} size={size} showRing showBorder={false} color=\"lime_light\" />\n          </Stack>;\n    })}\n    </Stack>\n}",
      ...Sizes.parameters?.docs?.source
    }
  }
};
Shapes.parameters = {
  ...Shapes.parameters,
  docs: {
    ...Shapes.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <>\n      <StoryStack>\n        {SIZES.map(size => <Avatar key={size} {...args} size={size} />)}\n      </StoryStack>\n      <StoryStack>\n        {SIZES.map(size => <Avatar key={size} {...args} size={size} shape=\"square\" />)}\n      </StoryStack>\n    </>\n}",
      ...Shapes.parameters?.docs?.source
    }
  }
};
PickColor.parameters = {
  ...PickColor.parameters,
  docs: {
    ...PickColor.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <StoryStack>\n      {AVATAR_COLORS.map(color => <Avatar key={color} {...args} color={color} />)}\n    </StoryStack>\n}",
      ...PickColor.parameters?.docs?.source
    }
  }
};
Inline.parameters = {
  ...Inline.parameters,
  docs: {
    ...Inline.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <StoryText>\n      Voluptate duis excepteur ullamco <Avatar {...args} /> aliquip sit laboris sint <Avatar {...args} /> consequat\n      nulla.\n    </StoryText>\n}",
      ...Inline.parameters?.docs?.source
    }
  }
};
OnlineIndicator.parameters = {
  ...OnlineIndicator.parameters,
  docs: {
    ...OnlineIndicator.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <StoryStack>\n      <Avatar {...args}>\n        <AvatarOnlineIndicator isOnline />\n      </Avatar>\n      <Avatar {...args} username={faker.internet.userName()}>\n        <AvatarOnlineIndicator position=\"top-left\" isOnline />\n      </Avatar>\n      <Avatar {...args} username={faker.internet.userName()} shape=\"square\">\n        <AvatarOnlineIndicator position=\"bottom-left\" isOnline />\n      </Avatar>\n      <Avatar {...args} username={faker.internet.userName()} shape=\"square\">\n        <AvatarOnlineIndicator position=\"bottom-right\" isOnline />\n      </Avatar>\n    </StoryStack>\n}",
      ...OnlineIndicator.parameters?.docs?.source
    }
  }
};
SquareWithIcon.parameters = {
  ...SquareWithIcon.parameters,
  docs: {
    ...SquareWithIcon.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: undefined,\n    shape: 'square'\n  },\n  render: args => <StoryStack>\n      <Avatar {...args}>\n        <AvatarIcon>\n          <FiverrIcon color=\"green_700\" size=\"xs\" />\n        </AvatarIcon>\n      </Avatar>\n      <Avatar {...args}>\n        <AvatarIcon position=\"bottom-left\">\n          <FiverrIcon color=\"green_700\" size=\"xs\" />\n        </AvatarIcon>\n      </Avatar>\n      <Avatar {...args}>\n        <AvatarIcon position=\"top-left\">\n          <FiverrIcon color=\"green_700\" size=\"xs\" />\n        </AvatarIcon>\n      </Avatar>\n      <Avatar {...args}>\n        <AvatarIcon position=\"top-right\">\n          <FiverrIcon color=\"green_700\" size=\"xs\" />\n        </AvatarIcon>\n      </Avatar>\n    </StoryStack>\n}",
      ...SquareWithIcon.parameters?.docs?.source
    }
  }
};
WithCustomIcon.parameters = {
  ...WithCustomIcon.parameters,
  docs: {
    ...WithCustomIcon.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <StoryStack>\n      <Avatar {...args}>\n        <AvatarIcon padding={'px'} backgroundColor=\"business_800\" position=\"top-right\" showRing={false}>\n          <CheckStarSolidIcon color=\"white\" size=\"xs\" />\n        </AvatarIcon>\n      </Avatar>\n      <Avatar {...args} shape=\"square\">\n        <AvatarIcon padding={'px'} backgroundColor={'business_800'} position=\"bottom-right\">\n          <CheckStarSolidIcon color=\"white\" size=\"xs\" />\n        </AvatarIcon>\n      </Avatar>\n    </StoryStack>\n}",
      ...WithCustomIcon.parameters?.docs?.source
    }
  }
};
WithRing.parameters = {
  ...WithRing.parameters,
  docs: {
    ...WithRing.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <StoryStack>\n      <Avatar {...args} showRing />\n      <Avatar {...args} showRing>\n        <AvatarIcon>\n          <FiverrIcon color=\"green_700\" size=\"xs\" />\n        </AvatarIcon>\n      </Avatar>\n      <Avatar {...args} showRing>\n        <AvatarOnlineIndicator isOnline={true} />\n      </Avatar>\n      <Avatar {...args} shape=\"square\" showRing>\n        <AvatarOnlineIndicator isOnline={true} />\n      </Avatar>\n    </StoryStack>\n}",
      ...WithRing.parameters?.docs?.source
    }
  }
};
withoutBorder.parameters = {
  ...withoutBorder.parameters,
  docs: {
    ...withoutBorder.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: undefined\n  },\n  render: args => <StoryStack>\n      <Avatar {...args} showBorder={false} />\n      <Avatar {...args} showBorder={false}>\n        <AvatarIcon>\n          <FiverrIcon color=\"green_700\" size=\"xs\" />\n        </AvatarIcon>\n      </Avatar>\n      <Avatar {...args} showBorder={false}>\n        <AvatarOnlineIndicator isOnline={true} />\n      </Avatar>\n      <Avatar {...args} shape=\"square\" showBorder={false}>\n        <AvatarOnlineIndicator isOnline={true} />\n      </Avatar>\n    </StoryStack>,\n  parameters: {\n    docs: {\n      source: {\n        code: `\n<StoryStack>\n  <Avatar {...args} showBorder={false} />\n  <Avatar {...args} showBorder={false}>\n    <AvatarIcon>\n      <FiverrIcon color=\"green_700\" size=\"xs\" />\n    </AvatarIcon>\n  </Avatar>\n  <Avatar {...args} showBorder={false}>\n    <AvatarOnlineIndicator isOnline={true} />\n  </Avatar>\n  <Avatar {...args} shape=\"square\" showBorder={false}>\n    <AvatarOnlineIndicator isOnline={true} />\n  </Avatar>\n<StoryStack>\n`\n      }\n    }\n  }\n}",
      ...withoutBorder.parameters?.docs?.source
    }
  }
};
AvatarLoading.parameters = {
  ...AvatarLoading.parameters,
  docs: {
    ...AvatarLoading.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    children: undefined\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'AvatarSkeleton should be used as a child of Skeleton component from `@fiverr-private/feedback` package'\n      },\n      source: {\n        code: `\nconst [loading, setLoading] = useState(false);\n\nreturn (\n  <Stack direction=\"column\" width=\"fit-content\">\n    <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>\n    <Stack>\n      {loading ? (\n        <Skeleton>\n          <AvatarSkeleton size=\"lg\" />\n        </Skeleton>\n      ) : (\n        <Avatar {...args} size=\"lg\" />\n      )}\n    </Stack>\n  </Stack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [loading, setLoading] = useState(false);\n    return <Stack direction=\"column\" width=\"fit-content\">\n        <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>\n        <Stack>\n          {loading ? <Skeleton>\n              <AvatarSkeleton size=\"lg\" />\n            </Skeleton> : <Avatar {...args} size=\"lg\" />}\n        </Stack>\n      </Stack>;\n  }\n}",
      ...AvatarLoading.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","WithFullName","WithFullNameSquare","WithImage","WithImageSquare","BrokenImage","WithVideo","WithVideoSquare","VideoAutoPlay","Sizes","Shapes","PickColor","Inline","OnlineIndicator","SquareWithIcon","WithCustomIcon","WithRing","withoutBorder","AvatarLoading"];

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

/***/ "../feedback/dist/esm/src/components/Skeleton/SkeletonSquare/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");


const SkeletonSquare = _ref => {
  let {
    width = '100%',
    height = '16px',
    maxHeight,
    maxWidth = '100%',
    dataTestId,
    borderRadius = 'sm',
    dataTrackTag = 'skeleton_square',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    backgroundColor: "grey_300",
    borderRadius: borderRadius,
    width: width,
    height: height,
    maxHeight: maxHeight,
    maxWidth: maxWidth,
    "data-testid": dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  });
};
SkeletonSquare.displayName = 'SkeletonSquare';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonSquare);
;
SkeletonSquare.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SkeletonSquare"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Skeleton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../transition/dist/esm/src/components/Wipe/index.js");



const Skeleton = _ref => {
  let {
    children,
    animationDuration = 'moderate',
    animationDelay = 'moderate',
    width = 'fit-content',
    preferMotion = true,
    dataTestId,
    dataTrackTag = 'skeleton',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    width: width,
    overflow: "hidden",
    position: "relative",
    "data-testid": dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, preferMotion && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_transition__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    animationDuration: animationDuration,
    animationDelay: animationDelay
  }), children);
};
Skeleton.displayName = 'Skeleton';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);
;
Skeleton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Skeleton"
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

/***/ "../transition/dist/esm/src/components/Wipe/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Wipe)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../transition/dist/esm/src/components/Wipe/constants.js
const DURATION = {
  fast: '1s',
  moderate: '1.5s',
  slow: '2s'
};
const DELAY = {
  fast: '250ms',
  moderate: '500ms',
  slow: '750ms'
};
;// ../transition/dist/esm/src/components/transition/dist/esm/src/components/Wipe/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../transition/dist/esm/src/components/Wipe/styles.ve.css.js.vanilla.css","source":"QGtleWZyYW1lcyBpeXNhdm4wIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNrZXcoMTU1ZGVnKTsKICB9CiAgMTAwJSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgc2tldygxNTVkZWcpOwogIH0KfQouaXlzYXZuMSB7CiAgYW5pbWF0aW9uOiBpeXNhdm4wIGVhc2UtaW4tb3V0IGluZmluaXRlOzsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../transition/dist/esm/src/components/Wipe/styles.ve.css.js

var wipeAnimation = 'iysavn1';
;// ../transition/dist/esm/src/components/Wipe/index.js




const WIPE_COLOR = 'rgba(255, 255, 255, 0.3)';
const Wipe = _ref => {
  let {
    animationDuration = 'moderate',
    animationDelay = 'moderate',
    dataTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    className: wipeAnimation,
    style: {
      animationDelay: DELAY[animationDelay],
      animationDuration: DURATION[animationDuration]
    },
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    margin: "autoY",
    background: "linear-gradient(85deg, transparent 25%, ".concat(WIPE_COLOR, " 50%, ").concat(WIPE_COLOR, " 55%, transparent 75%)"),
    "data-testid": dataTestId
  });
};
Wipe.displayName = 'Wipe';
/* harmony default export */ const components_Wipe = (Wipe);
;
Wipe.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Wipe"
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/CheckStarSolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CheckStarSolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CheckStarSolidIcon')
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
    d: "M8.804.791a1.256 1.256 0 0 0-1.608 0L5.652 2.078H3.334c-.694 0-1.256.562-1.256 1.256v2.318L.791 7.196a1.256 1.256 0 0 0 0 1.608l1.287 1.544v2.318c0 .694.562 1.256 1.256 1.256h2.318l1.544 1.287a1.256 1.256 0 0 0 1.608 0l1.544-1.287h2.318c.694 0 1.256-.562 1.256-1.256v-2.318l1.287-1.544a1.256 1.256 0 0 0 0-1.608l-1.287-1.544V3.334c0-.694-.562-1.256-1.256-1.256h-2.318zm2.264 5.869a.718.718 0 0 0-1.111-.91L7.229 9.086l-.875-.875a.718.718 0 1 0-1.015 1.015l1.436 1.436a.72.72 0 0 0 1.063-.053z",
    clipRule: "evenodd"
  }));
};
CheckStarSolidIcon.id = 'CheckStarSolidIcon';
CheckStarSolidIcon.displayName = 'CheckStarSolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckStarSolidIcon);
;
CheckStarSolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CheckStarSolidIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Fiverr.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const FiverrIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('FiverrIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15.5 8a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m-4.187 3.975h-1.97V7.616H7.458v4.359H5.477V7.616H4.354V6.004h1.123v-.49c0-1.278.967-2.15 2.404-2.15h1.462v1.613H8.208c-.46 0-.75.25-.75.657v.37h3.855z"
  }));
};
FiverrIcon.id = 'FiverrIcon';
FiverrIcon.displayName = 'FiverrIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiverrIcon);
;
FiverrIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FiverrIcon"
};

/***/ })

}]);
//# sourceMappingURL=2342.62c595cd.iframe.bundle.js.map