"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[3476],{

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

/***/ "../data_display/src/components/Tag/TagContext/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ TagContext),
/* harmony export */   v: () => (/* binding */ useTagContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const TagContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useTagContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TagContext);
  return context;
};

/***/ }),

/***/ "../data_display/src/components/Tag/TagImage/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../media/dist/esm/src/components/Image/index.js");
/* harmony import */ var _TagContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../data_display/src/components/Tag/TagContext/index.tsx");
const _excluded = ["borderRadius", "src", "dataTrackTag"];
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



const TagImage = _ref => {
  let {
      borderRadius = 'circle',
      src,
      dataTrackTag = 'tag_image'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    size
  } = (0,_TagContext__WEBPACK_IMPORTED_MODULE_2__/* .useTagContext */ .v)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_media__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({
    borderRadius: borderRadius,
    src: src
  }, rest, {
    dataTrackTag: dataTrackTag,
    width: size === 'xs' ? 16 : 24,
    height: size === 'xs' ? 16 : 24
  }));
};
TagImage.id = 'TagImage';
TagImage.displayName = 'TagImage';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagImage);
try {
    // @ts-ignore
    TagImage.displayName = "TagImage";
    // @ts-ignore
    TagImage.__docgenInfo = { "description": "", "displayName": "TagImage", "props": { "alt": { "defaultValue": null, "description": "", "name": "alt", "required": true, "type": { "name": "string" } }, "objectFit": { "defaultValue": null, "description": "", "name": "objectFit", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"fill\"" }, { "value": "\"unset\"" }, { "value": "\"contain\"" }, { "value": "\"cover\"" }] } }, "src": { "defaultValue": null, "description": "Object array that contains sources and media queries.", "name": "src", "required": true, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "ResponsiveSource" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "borderRadius": { "defaultValue": { value: "circle" }, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "dataTrackTag": { "defaultValue": { value: "tag_image" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "htmlWidth": { "defaultValue": null, "description": "", "name": "htmlWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "htmlHeight": { "defaultValue": null, "description": "", "name": "htmlHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "ratio": { "defaultValue": null, "description": "", "name": "ratio", "required": false, "type": { "name": "enum", "value": [{ "value": "\"16/9\"" }, { "value": "\"1\"" }, { "value": "\"1.66/1\"" }, { "value": "\"1.33/1\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Tag/TagImage/index.tsx#TagImage"] = { docgenInfo: TagImage.__docgenInfo, name: "TagImage", path: "../data_display/src/components/Tag/TagImage/index.tsx#TagImage" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../data_display/src/components/Tag/TagPrefix/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _TagContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../data_display/src/components/Tag/TagContext/index.tsx");




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
try {
    // @ts-ignore
    TagPrefix.displayName = "TagPrefix";
    // @ts-ignore
    TagPrefix.__docgenInfo = { "description": "", "displayName": "TagPrefix", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "dataTrackTag": { "defaultValue": { value: "tag_prefix" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Tag/TagPrefix/index.tsx#TagPrefix"] = { docgenInfo: TagPrefix.__docgenInfo, name: "TagPrefix", path: "../data_display/src/components/Tag/TagPrefix/index.tsx#TagPrefix" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../data_display/src/components/Tag/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Tag)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
;// ../data_display/src/components/Tag/utils.ts
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
const getElement = (href, hasClickEvent, clickableArea) => {
  if (href) {
    return {
      element: 'a',
      role: 'link'
    };
  }
  if (hasClickEvent && clickableArea === 'tag') {
    return {
      element: 'button',
      role: 'button'
    };
  }
  return _objectSpread({
    element: 'div'
  }, hasClickEvent && clickableArea === 'multi' ? {
    role: 'button',
    tabIndex: 0
  } : {});
};
;// ../data_display/src/components/data_display/src/components/Tag/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../data_display/src/components/Tag/styles.ve.css.ts.vanilla.css","source":"Ll8xZ25tOXYyMCB7CiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7CiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7CiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../data_display/src/components/Tag/styles.ve.css.ts

var conversational = '_1gnm9v20';
;// ../data_display/src/components/Tag/styles.ts
const _excluded = ["paddingRightWithCloseIcon"];
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

const PROPS_BY_SIZE = {
  xs: {
    height: 24,
    fontSize: 'b_xs',
    lineHeight: 'b_xs',
    paddingX: '3',
    paddingY: '1',
    gap: '1',
    paddingRightWithCloseIcon: '0'
  },
  sm: {
    height: 32,
    fontSize: 'b_sm',
    lineHeight: 'b_sm',
    paddingX: '3',
    paddingY: '1',
    gap: '1',
    paddingRightWithCloseIcon: '1'
  },
  md: {
    height: 36,
    fontSize: 'b_md',
    lineHeight: 'b_md',
    paddingX: '4',
    paddingY: '1.5',
    gap: '1.5',
    paddingRightWithCloseIcon: '1.5'
  }
};
const getTagStyles = _ref => {
  let {
    size,
    isInteractive,
    variant,
    hasCloseIcon,
    shape,
    isDark
  } = _ref;
  const _PROPS_BY_SIZE$size = PROPS_BY_SIZE[size],
    {
      paddingRightWithCloseIcon
    } = _PROPS_BY_SIZE$size,
    rest = _objectWithoutProperties(_PROPS_BY_SIZE$size, _excluded);
  const defaultOutlineBackground = isDark ? 'white_10' : 'white';
  const defaultFilledBackground = isDark ? 'white_10' : 'grey_300';
  return styles_objectSpread(styles_objectSpread(styles_objectSpread(styles_objectSpread(styles_objectSpread(styles_objectSpread({}, rest), {}, {
    color: isDark ? 'grey_400' : 'grey_1200',
    outlineColor: {
      focusVisible: isDark ? 'grey_400' : 'grey_1200'
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
    decoration: isInteractive ? {
      hover: 'none'
    } : undefined,
    boxSizing: 'borderBox'
  }, shape === 'default' ? {
    borderRadius: 'circle'
  } : {
    className: conversational
  }), {}, {
    display: 'flex',
    alignItems: 'center'
  }, hasCloseIcon && {
    paddingRight: paddingRightWithCloseIcon
  }), {}, {
    width: 'fit-content',
    fontWeight: 'normal',
    userSelect: 'none'
  }, variant === 'filled' && {
    backgroundColor: isInteractive ? {
      default: defaultFilledBackground,
      hover: isDark ? 'white_20' : 'grey_400',
      active: isDark ? 'white_20' : 'grey_500'
    } : defaultFilledBackground
  }), variant === 'outline' && {
    borderWidth: 'sm',
    borderColor: 'border',
    borderStyle: 'solid',
    backgroundColor: isInteractive ? {
      default: defaultOutlineBackground,
      hover: isDark ? 'white_20' : 'grey_200',
      active: isDark ? 'white_20' : 'grey_500'
    } : defaultOutlineBackground
  }), {}, {
    flexShrink: 0,
    maxWidth: '100%'
  });
};
// EXTERNAL MODULE: ../data_display/src/components/Tag/TagContext/index.tsx
var TagContext = __webpack_require__("../data_display/src/components/Tag/TagContext/index.tsx");
;// ../data_display/src/components/Tag/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}







const Tag = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    size = 'md',
    variant = 'filled',
    onClick,
    href,
    children,
    target,
    ariaLabel,
    hideOnClick,
    onKeyDown,
    tabIndex,
    maxWidth,
    clickableArea = 'tag',
    shape = 'default',
    goExperimental = false,
    theme = 'light',
    dataTrackTag = 'tag',
    dataTrackValue
  } = _ref;
  const [isOpen, setIsOpen] = (0,react.useState)(true);
  const hasClickEvent = Boolean(onClick || hideOnClick);
  const hasCloseIcon = !!(0,findChildByType/* findChildByType */.B)(children, 'TagCloseIcon');
  const isDark = goExperimental || theme === 'dark';
  const onTagClick = e => {
    if (hideOnClick && clickableArea === 'tag') {
      setIsOpen(false);
    }
    onClick === null || onClick === void 0 || onClick(e);
  };
  const {
    element,
    role,
    tabIndex: elementTabIndex
  } = getElement(href, hasClickEvent, clickableArea);
  const isInteractive = Boolean(role);
  const props = {
    onClick: hasClickEvent ? onTagClick : undefined,
    href,
    role,
    target,
    'aria-label': ariaLabel,
    onKeyDown,
    tabIndex: !(0,lodash.isNil)(elementTabIndex) ? elementTabIndex : tabIndex
  };
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/react.createElement(TagContext/* TagContext */.Q.Provider, {
    value: {
      setIsOpen,
      clickableArea,
      variant,
      hideOnClick,
      size,
      isDark
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, _extends({}, getTagStyles({
    size,
    isInteractive,
    variant,
    hasCloseIcon,
    shape,
    isDark
  }), {
    as: element,
    ref: ref,
    maxWidth: maxWidth
  }, props, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), children));
});
Tag.displayName = 'Tag';
/* harmony default export */ const components_Tag = (Tag);
try {
    // @ts-ignore
    Tag.displayName = "Tag";
    // @ts-ignore
    Tag.__docgenInfo = { "description": "", "displayName": "Tag", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "variant": { "defaultValue": { value: "filled" }, "description": "The Tag variant.", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"outline\"" }, { "value": "\"filled\"" }] } }, "size": { "defaultValue": { value: "md" }, "description": "The Tag size.", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"xs\"" }] } }, "hideOnClick": { "defaultValue": null, "description": "Hide the tag when clicked.", "name": "hideOnClick", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "clickableArea": { "defaultValue": { value: "tag" }, "description": "", "name": "clickableArea", "required": false, "type": { "name": "enum", "value": [{ "value": "\"tag\"" }, { "value": "\"closeButton\"" }, { "value": "\"multi\"" }] } }, "onKeyDown": { "defaultValue": null, "description": "", "name": "onKeyDown", "required": false, "type": { "name": "KeyboardEventHandler<HTMLElement>" } }, "tabIndex": { "defaultValue": null, "description": "", "name": "tabIndex", "required": false, "type": { "name": "number" } }, "shape": { "defaultValue": { value: "default" }, "description": "@ignore", "name": "shape", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"conversational\"" }] } }, "goExperimental": { "defaultValue": { value: "false" }, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "dataTrackTag": { "defaultValue": { value: "tag" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "ariaLabel": { "defaultValue": null, "description": "ariaLabel is required when the tag using \"href\" or \"onClick\" props.", "name": "ariaLabel", "required": false, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "On tag click handler.\nWhen using, ariaLabel prop is required.", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "href": { "defaultValue": null, "description": "Adding href to tag.\nWhen using, ariaLabel prop is required.", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "Tag href target.", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Tag/index.tsx#Tag"] = { docgenInfo: Tag.__docgenInfo, name: "Tag", path: "../data_display/src/components/Tag/index.tsx#Tag" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../data_display/src/components/Tag/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ClickableCloseIcon: () => (/* binding */ ClickableCloseIcon),
  ClickableTag: () => (/* binding */ ClickableTag),
  CloseIconWithoutDismiss: () => (/* binding */ CloseIconWithoutDismiss),
  Dark: () => (/* binding */ Dark),
  MultipleClickableAreas: () => (/* binding */ MultipleClickableAreas),
  Primary: () => (/* binding */ Primary),
  Sizes: () => (/* binding */ Sizes),
  Variants: () => (/* binding */ Variants),
  WithClick: () => (/* binding */ WithClick),
  WithHref: () => (/* binding */ WithHref),
  WithIcon: () => (/* binding */ WithIcon),
  WithImage: () => (/* binding */ WithImage),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Heart.js
var Heart = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Heart.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../data_display/src/components/Tag/index.tsx + 4 modules
var Tag = __webpack_require__("../data_display/src/components/Tag/index.tsx");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Times.js
var Times = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Times.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../data_display/src/components/Tag/TagContext/index.tsx
var TagContext = __webpack_require__("../data_display/src/components/Tag/TagContext/index.tsx");
;// ../data_display/src/components/Tag/TagCloseIcon/styles.ts
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
const getCloseIconStyles = _ref => {
  let {
    isClickable,
    variant,
    isDark
  } = _ref;
  return _objectSpread(_objectSpread({
    boxSizing: 'borderBox',
    display: 'inlineFlex',
    padding: '1',
    borderRadius: 'circle',
    outlineColor: {
      focusVisible: isDark ? 'white_10' : 'grey_1200'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    height: '24px',
    width: '24px'
  }, isClickable && variant === 'filled' && {
    backgroundColor: {
      default: 'transparent',
      hover: isDark ? 'white_20' : 'grey_200',
      active: isDark ? 'white_20' : 'grey_300'
    }
  }), isClickable && variant === 'outline' && {
    backgroundColor: {
      default: 'transparent',
      hover: isDark ? 'white_20' : 'grey_400',
      active: isDark ? 'white_20' : 'grey_500'
    }
  });
};
;// ../data_display/src/components/Tag/TagCloseIcon/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}






const TagCloseIcon = _ref => {
  let {
    onClick,
    dataTrackTag = 'tag_close_icon',
    dataTrackValue
  } = _ref;
  const {
    clickableArea,
    setIsOpen,
    variant,
    hideOnClick,
    isDark
  } = (0,TagContext/* useTagContext */.v)();
  const isClickable = clickableArea === 'closeButton' || clickableArea === 'multi';
  const onCloseIconClick = e => {
    if (isClickable) {
      e.stopPropagation();
      onClick === null || onClick === void 0 || onClick(e);
      if (hideOnClick) {
        setIsOpen(false);
      }
    }
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, _extends({}, getCloseIconStyles({
    isClickable,
    variant,
    isDark
  }), {
    as: isClickable ? 'button' : 'div',
    role: isClickable ? 'button' : undefined,
    "aria-label": isClickable ? (0,translate/* translate */.T)('data_display.tag.close') : undefined,
    onClick: onCloseIconClick,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), /*#__PURE__*/react.createElement(Times/* default */.A, {
    size: "sm",
    color: isDark ? 'grey_400' : 'grey_1200'
  }));
};
TagCloseIcon.displayName = 'TagCloseIcon';
TagCloseIcon.id = 'TagCloseIcon';
/* harmony default export */ const Tag_TagCloseIcon = (TagCloseIcon);
try {
    // @ts-ignore
    TagCloseIcon.displayName = "TagCloseIcon";
    // @ts-ignore
    TagCloseIcon.__docgenInfo = { "description": "", "displayName": "TagCloseIcon", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLDivElement>" } }, "dataTrackTag": { "defaultValue": { value: "tag_close_icon" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Tag/TagCloseIcon/index.tsx#TagCloseIcon"] = { docgenInfo: TagCloseIcon.__docgenInfo, name: "TagCloseIcon", path: "../data_display/src/components/Tag/TagCloseIcon/index.tsx#TagCloseIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../data_display/src/components/Tag/TagPrefix/index.tsx
var TagPrefix = __webpack_require__("../data_display/src/components/Tag/TagPrefix/index.tsx");
// EXTERNAL MODULE: ../data_display/src/components/Tag/TagImage/index.tsx
var TagImage = __webpack_require__("../data_display/src/components/Tag/TagImage/index.tsx");
;// ../data_display/src/components/Tag/stories/assets/images.ts
const python = 'data:image/webp;base64,UklGRkoDAABXRUJQVlA4TD0DAAAvX8AXEFehuG3byMizv+4/5H23dtZgGEmSkr4QyD8vQnB3B0aRJCma9bDm194x328Y0ESSmq2pQDS6sAIO4iAB4F76323u5SALIKENwEJbqAN4uqFDIvHsTkxePG5cvt2Lh/lJkOICJQnkos7SYS/uLqkPojRo1KZUaO0iZWg1hZwLElwix18ZZNu2rbaN1WsWS2EQ+Jr//wdrX/LV6RPuHdF/R24bOZI8Qtem3lOHCS+YmZlvVkslKOlqu5g5s6ASmDUcbFPFH0xEhVRMtxabW5UIDBU3Zm0o9LiXi/Su1CNdzLC+K/dYzRaKieCQ863kFqDarKSzShVEh0slHf4+J+2GUXNPHvRu7L/E0Y17I4d7jgD0kEoi3e29ngDdCUI7PVqeyU4M3Z4cVDq6NDkqKQx7jgmgtKcmL50gBgCwsWUvCK2Ab3d7+aksqPtBH9yfSuNAwOOF0vAri34Ednbu71heoxE5Rms6PfzuQ3KmXfNG1QCoi2waemM6Cv/FFbhRt0/tE56bfAI4hkylcEpa4Jlkm8enf1jAwPSFTRabLsSzRwtLvpaxGX3C/wsbW7SRSR+t6cAWyOPSPaYjX0ntEGVcxiAvBleCFjrJXL5VcdmF1f62SwqXaOKig3TV9udoHEbHZ1DL8TNB6RSIjM/j0H15kiZA5vM9Lr4d0KASIMs9Kcr22RKGkfEM5z5BXjYfJNkaeQLwTF8dG+2c63SC4oM+n0l6bSLj7K0Ll25ZRx7XTlRS29Lhi8cJ6BwLwWWX5A/VLoq4fJkztUlpSru3sJrMIq8L2p4tbFrYBvRmvY5Mb01GNq3dPofKPDbUxlxk4v+FG5hU8df9Lzct6Pw07L0p9kXf+kKL1m6fQ0U5zb4r7Xea5Ghj1mVIimzifamF9anI8+7SKWtnCkmE9PZOlmIImOzEEVA/V2UjioCFJk+QvQrD1L0FqgRR+FeC5+xGLYjsw9f7O+qMt5ZiOkLh/UMrz4KuOxWef4VJk0m6rpVVrXchaApx1/3ysm6ezR0QqjKXf1309zlL6aTy76tupLOdy/6AXMxEv6Ray3+uQPxzEeKf6/hVnksBFmslMCvfkztbppJYrjbzmREAAA==';
const unityDevelopers = 'data:image/webp;base64,UklGRnwCAABXRUJQVlA4THACAAAvX8AXEK+gqG0jKQwmzzmXP9AFoahtGzgVBstzt6K2beBUGCzP3YraRnKDhrANwH0bnksAEEAAH9jAAh4w3e39y0wqlUoVEVQfJNm2G7eROgukGjYisf+9OiQIBT+jqkFE/x1Ksto2PF4aARXbIJcvmFrM62cnIOyfdZlELB8CxCZ9WHeCxL72JFisPbF12ZFl/zpsBI3PtBA45hVd1g+6fHZ02ek/F7gjFI9r8+HhL25M8XfmDhnQduXKIhzWxrhS5SEOHDljZRUCDlmLAuNVZEE03CzKE64qyAXyLtoORxSYwYJGwdYNU5Jq+9XFBqmz9UiN3O2+4BH2pno4zT5cujABgV7XnZN8u7UQqNuHI5GrtkG9mk463nI7gVasWlJkoSBc7QwCUOXjpCmspiyKjVrkbWEX9BCp80nUSmCj4nmynm6QTLug2ZRvfIj6oAWI56BDfdDTkC99+qDZqsLkqEBSJCL3+3nj5l+AG81kQONwHKHgvd8jqY7QdDSQhwNZ6ZMVaD3T8C/eSp/xhAuFxo8OokxAevEwTySbwnO9ObLL0KW2hQEo8fnWZZxXkTQNSmXolo6m+tLl6VdeSJXtFnOfM126e0GVLpc0u5HM9YVL6tZFaJqF9Nqv6+y09Kp0sV+XErlevcolC+tqU80/SIlLOv14uFcfFQGZmRvTwMVw1UjKdCSaMgtIhIEgnwrHs92lLaPqKo4ankBwvTmvh9FUdRLRrtlorqtAXnNSXBfCMwXpuhbwNT/xuhywKT6e/u1hhyf+fVX8+8IzuiwT+NcN/7kC+Oci4J/r+CvPpXwdNsgjbvTkDt5zQXMbbwI=';
;// ../data_display/src/components/Tag/stories/index.stories.tsx
const _excluded = ["children"],
  _excluded2 = ["children"],
  _excluded3 = ["children"],
  _excluded4 = ["children"],
  _excluded5 = ["children"],
  _excluded6 = ["children"],
  _excluded7 = ["children"],
  _excluded8 = ["children"],
  _excluded9 = ["children"],
  _excluded10 = ["children"];
function index_stories_extends() {
  return index_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, index_stories_extends.apply(null, arguments);
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









esm/* faker */.az.seed(1);
const defaultArgs = {
  children: 'Logo design'
};
const Primary = {
  tags: ['sidebar-ignore']
};
const Variants = {
  tags: ['sidebar-ignore'],
  render: _ref => {
    let {
        children
      } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Tag/* default */.A, args, children), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      variant: "outline"
    }), children));
  }
};
const Dark = {
  tags: ['sidebar-ignore'],
  args: {
    theme: 'dark'
  },
  render: _ref2 => {
    let {
        children
      } = _ref2,
      args = _objectWithoutProperties(_ref2, _excluded2);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      backgroundColor: "black",
      padding: "2"
    }, /*#__PURE__*/react.createElement(Tag/* default */.A, args, children), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      variant: "outline"
    }), children));
  }
};
const Sizes = {
  tags: ['sidebar-ignore'],
  render: _ref3 => {
    let {
        children
      } = _ref3,
      args = _objectWithoutProperties(_ref3, _excluded3);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Tag/* default */.A, args, children), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      size: "sm"
    }), children), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      size: "xs"
    }), children));
  }
};
const ClickableCloseIcon = {
  tags: ['sidebar-ignore'],
  args: {
    clickableArea: 'closeButton',
    hideOnClick: true
  },
  render: _ref4 => {
    let {
        children
      } = _ref4,
      args = _objectWithoutProperties(_ref4, _excluded4);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      size: "sm"
    }), children, /*#__PURE__*/react.createElement(Tag_TagCloseIcon, null)), /*#__PURE__*/react.createElement(Tag/* default */.A, args, children, /*#__PURE__*/react.createElement(Tag_TagCloseIcon, null)));
  }
};
const ClickableTag = {
  tags: ['sidebar-ignore'],
  args: {
    hideOnClick: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The default clickable area'
      }
    }
  },
  render: _ref5 => {
    let {
        children
      } = _ref5,
      args = _objectWithoutProperties(_ref5, _excluded5);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      size: "xs"
    }), children, /*#__PURE__*/react.createElement(Tag_TagCloseIcon, null)), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      size: "sm"
    }), children, /*#__PURE__*/react.createElement(Tag_TagCloseIcon, null)), /*#__PURE__*/react.createElement(Tag/* default */.A, args, children, /*#__PURE__*/react.createElement(Tag_TagCloseIcon, null)));
  }
};
const MultipleClickableAreas = {
  tags: ['sidebar-ignore'],
  args: {
    ariaLabel: 'Logo design',
    clickableArea: 'multi',
    onClick: () => alert('Tag clicked')
  },
  render: _ref6 => {
    let {
        children
      } = _ref6,
      args = _objectWithoutProperties(_ref6, _excluded6);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Tag/* default */.A, args, children, /*#__PURE__*/react.createElement(Tag_TagCloseIcon, {
      onClick: () => alert('Close button clicked')
    })), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      variant: "outline"
    }), children, /*#__PURE__*/react.createElement(Tag_TagCloseIcon, {
      onClick: () => alert('Close button clicked')
    })));
  }
};
const CloseIconWithoutDismiss = {
  tags: ['sidebar-ignore'],
  args: {
    ariaLabel: 'Logo design',
    onClick: () => alert('Tag clicked')
  },
  render: _ref7 => {
    let {
        children
      } = _ref7,
      args = _objectWithoutProperties(_ref7, _excluded7);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Tag/* default */.A, args, children, /*#__PURE__*/react.createElement(Tag_TagCloseIcon, null)));
  }
};
const WithHref = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'When using, ariaLabel prop is required'
      }
    }
  },
  args: {
    ariaLabel: 'Logo design',
    href: 'https://fiverr.com'
  }
};
const WithClick = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'When using, ariaLabel prop is required'
      }
    }
  },
  args: {
    ariaLabel: 'Logo design',
    onClick: () => alert('Tag clicked')
  }
};
const WithImage = {
  tags: ['sidebar-ignore'],
  render: _ref8 => {
    let {
        children
      } = _ref8,
      args = _objectWithoutProperties(_ref8, _excluded8);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      alignItems: "center"
    }, /*#__PURE__*/react.createElement(Tag/* default */.A, args, /*#__PURE__*/react.createElement(TagPrefix/* default */.A, null, /*#__PURE__*/react.createElement(TagImage/* default */.A, {
      borderRadius: "circle",
      alt: "alt",
      src: python
    })), children), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      size: "sm"
    }), /*#__PURE__*/react.createElement(TagPrefix/* default */.A, null, /*#__PURE__*/react.createElement(TagImage/* default */.A, {
      borderRadius: "circle",
      alt: "alt",
      src: python
    })), children), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      size: "xs"
    }), /*#__PURE__*/react.createElement(TagPrefix/* default */.A, null, /*#__PURE__*/react.createElement(TagImage/* default */.A, {
      borderRadius: "circle",
      alt: "alt",
      src: python
    })), children), /*#__PURE__*/react.createElement(Tag/* default */.A, args, /*#__PURE__*/react.createElement(TagPrefix/* default */.A, null, /*#__PURE__*/react.createElement(TagImage/* default */.A, {
      borderRadius: "sm",
      alt: "alt",
      src: unityDevelopers
    })), children));
  }
};
const WithIcon = {
  tags: ['sidebar-ignore'],
  render: _ref9 => {
    let {
        children
      } = _ref9,
      args = _objectWithoutProperties(_ref9, _excluded9);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(Tag/* default */.A, args, /*#__PURE__*/react.createElement(TagPrefix/* default */.A, null, /*#__PURE__*/react.createElement(Heart/* default */.A, null)), children), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      size: "sm"
    }), /*#__PURE__*/react.createElement(TagPrefix/* default */.A, null, /*#__PURE__*/react.createElement(Heart/* default */.A, null)), children), /*#__PURE__*/react.createElement(Tag/* default */.A, index_stories_extends({}, args, {
      size: "xs"
    }), /*#__PURE__*/react.createElement(TagPrefix/* default */.A, null, /*#__PURE__*/react.createElement(Heart/* default */.A, null)), children));
  }
};
const meta = {
  args: defaultArgs,
  title: 'Data Display/Tag',
  component: Tag/* default */.A,
  render: _ref10 => {
    let {
        children
      } = _ref10,
      args = _objectWithoutProperties(_ref10, _excluded10);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      backgroundColor: args.theme === 'dark' ? 'black' : undefined,
      padding: args.theme === 'dark' ? '2' : undefined
    }, /*#__PURE__*/react.createElement(Tag/* default */.A, args, children));
  }
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
Variants.parameters = {
  ...Variants.parameters,
  docs: {
    ...Variants.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack>\n      <Tag {...args}>{children}</Tag>\n      <Tag {...args} variant=\"outline\">\n        {children}\n      </Tag>\n    </StoryStack>\n}",
      ...Variants.parameters?.docs?.source
    }
  }
};
Dark.parameters = {
  ...Dark.parameters,
  docs: {
    ...Dark.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    theme: 'dark'\n  },\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack backgroundColor=\"black\" padding=\"2\">\n      <Tag {...args}>{children}</Tag>\n      <Tag {...args} variant=\"outline\">\n        {children}\n      </Tag>\n    </StoryStack>\n}",
      ...Dark.parameters?.docs?.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...Sizes.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack alignItems=\"center\">\n      <Tag {...args}>{children}</Tag>\n      <Tag {...args} size=\"sm\">\n        {children}\n      </Tag>\n      <Tag {...args} size=\"xs\">\n        {children}\n      </Tag>\n    </StoryStack>\n}",
      ...Sizes.parameters?.docs?.source
    }
  }
};
ClickableCloseIcon.parameters = {
  ...ClickableCloseIcon.parameters,
  docs: {
    ...ClickableCloseIcon.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    clickableArea: 'closeButton',\n    hideOnClick: true\n  },\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack>\n      <Tag {...args} size=\"sm\">\n        {children}\n        <TagCloseIcon />\n      </Tag>\n      <Tag {...args}>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n    </StoryStack>\n}",
      ...ClickableCloseIcon.parameters?.docs?.source
    }
  }
};
ClickableTag.parameters = {
  ...ClickableTag.parameters,
  docs: {
    ...ClickableTag.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    hideOnClick: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'The default clickable area'\n      }\n    }\n  },\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack alignItems=\"center\">\n      <Tag {...args} size=\"xs\">\n        {children}\n        <TagCloseIcon />\n      </Tag>\n      <Tag {...args} size=\"sm\">\n        {children}\n        <TagCloseIcon />\n      </Tag>\n      <Tag {...args}>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n    </StoryStack>\n}",
      ...ClickableTag.parameters?.docs?.source
    }
  }
};
MultipleClickableAreas.parameters = {
  ...MultipleClickableAreas.parameters,
  docs: {
    ...MultipleClickableAreas.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    ariaLabel: 'Logo design',\n    clickableArea: 'multi',\n    onClick: () => alert('Tag clicked')\n  },\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack>\n      <Tag {...args}>\n        {children}\n        <TagCloseIcon onClick={() => alert('Close button clicked')} />\n      </Tag>\n      <Tag {...args} variant=\"outline\">\n        {children}\n        <TagCloseIcon onClick={() => alert('Close button clicked')} />\n      </Tag>\n    </StoryStack>\n}",
      ...MultipleClickableAreas.parameters?.docs?.source
    }
  }
};
CloseIconWithoutDismiss.parameters = {
  ...CloseIconWithoutDismiss.parameters,
  docs: {
    ...CloseIconWithoutDismiss.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    ariaLabel: 'Logo design',\n    onClick: () => alert('Tag clicked')\n  },\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack>\n      <Tag {...args}>\n        {children}\n        <TagCloseIcon />\n      </Tag>\n    </StoryStack>\n}",
      ...CloseIconWithoutDismiss.parameters?.docs?.source
    }
  }
};
WithHref.parameters = {
  ...WithHref.parameters,
  docs: {
    ...WithHref.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'When using, ariaLabel prop is required'\n      }\n    }\n  },\n  args: {\n    ariaLabel: 'Logo design',\n    href: 'https://fiverr.com'\n  }\n}",
      ...WithHref.parameters?.docs?.source
    }
  }
};
WithClick.parameters = {
  ...WithClick.parameters,
  docs: {
    ...WithClick.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'When using, ariaLabel prop is required'\n      }\n    }\n  },\n  args: {\n    ariaLabel: 'Logo design',\n    onClick: () => alert('Tag clicked')\n  }\n}",
      ...WithClick.parameters?.docs?.source
    }
  }
};
WithImage.parameters = {
  ...WithImage.parameters,
  docs: {
    ...WithImage.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack alignItems=\"center\">\n      <Tag {...args}>\n        <TagPrefix>\n          <TagImage borderRadius=\"circle\" alt=\"alt\" src={python}></TagImage>\n        </TagPrefix>\n        {children}\n      </Tag>\n      <Tag {...args} size=\"sm\">\n        <TagPrefix>\n          <TagImage borderRadius=\"circle\" alt=\"alt\" src={python}></TagImage>\n        </TagPrefix>\n        {children}\n      </Tag>\n      <Tag {...args} size=\"xs\">\n        <TagPrefix>\n          <TagImage borderRadius=\"circle\" alt=\"alt\" src={python}></TagImage>\n        </TagPrefix>\n        {children}\n      </Tag>\n      <Tag {...args}>\n        <TagPrefix>\n          <TagImage borderRadius=\"sm\" alt=\"alt\" src={unityDevelopers}></TagImage>\n        </TagPrefix>\n        {children}\n      </Tag>\n    </StoryStack>\n}",
      ...WithImage.parameters?.docs?.source
    }
  }
};
WithIcon.parameters = {
  ...WithIcon.parameters,
  docs: {
    ...WithIcon.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack>\n      <Tag {...args}>\n        <TagPrefix>\n          <HeartIcon />\n        </TagPrefix>\n        {children}\n      </Tag>\n      <Tag {...args} size=\"sm\">\n        <TagPrefix>\n          <HeartIcon />\n        </TagPrefix>\n        {children}\n      </Tag>\n      <Tag {...args} size=\"xs\">\n        <TagPrefix>\n          <HeartIcon />\n        </TagPrefix>\n        {children}\n      </Tag>\n    </StoryStack>\n}",
      ...WithIcon.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Variants","Dark","Sizes","ClickableCloseIcon","ClickableTag","MultipleClickableAreas","CloseIconWithoutDismiss","WithHref","WithClick","WithImage","WithIcon"];

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

/***/ "../ui_utils/dist/esm/src/utils/findChildByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ findChildByType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");


const findChildByType = (children, id) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).find(child => (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .childrenIdMatch */ .i)(child, id));

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Heart.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const HeartIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('HeartIcon')
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
    d: "m13.628 8.433-5.622 5.568-5.622-5.568a3.748 3.748 0 1 1 5.622-4.922 3.748 3.748 0 1 1 5.622 4.927",
    vectorEffect: "non-scaling-stroke"
  }));
};
HeartIcon.id = 'HeartIcon';
HeartIcon.displayName = 'HeartIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartIcon);
;
HeartIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeartIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Times.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const TimesIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('TimesIcon')
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
    d: "M13 3 8 8m0 0-5 5m5-5 5 5M8 8 3 3",
    vectorEffect: "non-scaling-stroke"
  }));
};
TimesIcon.id = 'TimesIcon';
TimesIcon.displayName = 'TimesIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimesIcon);
;
TimesIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TimesIcon"
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
//# sourceMappingURL=3476.2317ba30.iframe.bundle.js.map