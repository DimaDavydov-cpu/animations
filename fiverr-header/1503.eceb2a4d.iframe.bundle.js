(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[1503],{

/***/ "../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/stats/emitter/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@storybook+instrumenter@7.6.20/node_modules/@storybook/instrumenter/dist sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/.pnpm/@storybook+instrumenter@7.6.20/node_modules/@storybook/instrumenter/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../badges/src/components/Badge/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
;// ../badges/src/components/helpers/LazyTooltip/index.tsx



const LazyTooltip = props => {
  const lazyImport = () => __webpack_require__.e(/* import() | BadgeTooltipV1 */ 4046).then(__webpack_require__.bind(__webpack_require__, "../badges/src/components/helpers/BadgeTooltip/index.ts"));
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
try {
    // @ts-ignore
    LazyTooltip.displayName = "LazyTooltip";
    // @ts-ignore
    LazyTooltip.__docgenInfo = { "description": "", "displayName": "LazyTooltip", "props": { "children": { "defaultValue": null, "description": "Tooltip anchor, any node to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "content": { "defaultValue": null, "description": "Tooltip content, any node to render..", "name": "content", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "size": { "defaultValue": null, "description": "Tooltip content size.", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "anchorProps": { "defaultValue": null, "description": "Tooltip anchor props", "name": "anchorProps", "required": false, "type": { "name": "Pick<PopoverAnchorProps, \"display\" | \"flex\">" } }, "isOpen": { "defaultValue": null, "description": "Used in controlled mode, whether the Popover is shown.", "name": "isOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "position": { "defaultValue": null, "description": "From which position to open the Popover.", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "onOpenChanged": { "defaultValue": null, "description": "Callback for Popover opened / closed, first param is boolean that represents the new state of isOpen.", "name": "onOpenChanged", "required": false, "type": { "name": "(value: boolean) => void" } }, "disableFlip": { "defaultValue": null, "description": "Disable flipping behavior on overflow.", "name": "disableFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "offset": { "defaultValue": null, "description": "Offset between popover anchor and popover content.", "name": "offset", "required": false, "type": { "name": "number" } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "appendToBody": { "defaultValue": null, "description": "Whether the popover should be appended to the body.", "name": "appendToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "withDelay": { "defaultValue": null, "description": "Whether to add delay when trigger is hover", "name": "withDelay", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "as": { "defaultValue": null, "description": "The wrapper html element", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"span\"" }, { "value": "\"div\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/helpers/LazyTooltip/index.tsx#LazyTooltip"] = { docgenInfo: LazyTooltip.__docgenInfo, name: "LazyTooltip", path: "../badges/src/components/helpers/LazyTooltip/index.tsx#LazyTooltip" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/Badge/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
    }, /*#__PURE__*/react.createElement(Box/* default */.A, _extends({
      "data-testid": dataTestId
    }, props)));
  }
  return /*#__PURE__*/react.createElement(Box/* default */.A, _extends({
    "data-testid": dataTestId
  }, props));
};
Badge.displayName = 'Badge';
/* harmony default export */ const components_Badge = (Badge);
try {
    // @ts-ignore
    Badge.displayName = "Badge";
    // @ts-ignore
    Badge.__docgenInfo = { "description": "", "displayName": "Badge", "props": { "backgroundColor": { "defaultValue": null, "description": "", "name": "backgroundColor", "required": true, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "color": { "defaultValue": { value: "white" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "tooltipContent": { "defaultValue": null, "description": "", "name": "tooltipContent", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "showTooltip": { "defaultValue": { value: "true" }, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": { value: "top" }, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": { value: "false" }, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/Badge/index.tsx#Badge"] = { docgenInfo: Badge.__docgenInfo, name: "Badge", path: "../badges/src/components/Badge/index.tsx#Badge" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../badges/src/components/FiverrChoiceBadge/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../badges/src/components/Badge/index.tsx");





const FiverrChoiceBadge = _ref => {
  let {
    showTooltip = true,
    tooltipPosition = 'top',
    dataTestId,
    appendTooltipToBody,
    disableTooltipFlip,
    dataTrackTag = 'fiverr_choice_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    showTooltip: showTooltip,
    backgroundColor: "blue_1200",
    tooltipContent: (0,_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .T)('badges.fiverr_choice_badge.tooltip'),
    tooltipPosition: tooltipPosition,
    dataTestId: dataTestId,
    appendTooltipToBody: appendTooltipToBody,
    disableTooltipFlip: disableTooltipFlip,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    display: "inlineFlex",
    gap: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, "Fiverr\u2019s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    color: "green_700"
  }, "Choice")));
};
FiverrChoiceBadge.displayName = 'FiverrChoiceBadge';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiverrChoiceBadge);
try {
    // @ts-ignore
    FiverrChoiceBadge.displayName = "FiverrChoiceBadge";
    // @ts-ignore
    FiverrChoiceBadge.__docgenInfo = { "description": "", "displayName": "FiverrChoiceBadge", "props": { "dataTrackTag": { "defaultValue": { value: "fiverr_choice_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": { value: "true" }, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": { value: "top" }, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/FiverrChoiceBadge/index.tsx#FiverrChoiceBadge"] = { docgenInfo: FiverrChoiceBadge.__docgenInfo, name: "FiverrChoiceBadge", path: "../badges/src/components/FiverrChoiceBadge/index.tsx#FiverrChoiceBadge" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../badges/src/components/RecommendedBadge/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../badges/src/components/Badge/index.tsx");



const RecommendedBadge = _ref => {
  let {
    dataTestId,
    dataTrackTag = 'recommended_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    backgroundColor: "blue_900",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_1__/* .I18n */ .F, {
    k: "badges.recommended_badge.text"
  }));
};
RecommendedBadge.displayName = 'RecommendedBadge';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecommendedBadge);
try {
    // @ts-ignore
    RecommendedBadge.displayName = "RecommendedBadge";
    // @ts-ignore
    RecommendedBadge.__docgenInfo = { "description": "", "displayName": "RecommendedBadge", "props": { "dataTrackTag": { "defaultValue": { value: "recommended_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/RecommendedBadge/index.tsx#RecommendedBadge"] = { docgenInfo: RecommendedBadge.__docgenInfo, name: "RecommendedBadge", path: "../badges/src/components/RecommendedBadge/index.tsx#RecommendedBadge" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../badges/src/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AllBadges: () => (/* binding */ AllBadges),
  BadgesWithCustomProps: () => (/* binding */ BadgesWithCustomProps),
  BadgesWithTooltip: () => (/* binding */ BadgesWithTooltip),
  BadgesWithoutPadding: () => (/* binding */ BadgesWithoutPadding),
  BadgesWithoutTooltip: () => (/* binding */ BadgesWithoutTooltip),
  Primary: () => (/* binding */ Primary),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryGrid/index.js
var StoryGrid = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryGrid/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryText/index.js
var StoryText = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../badges/src/components/Badge/index.tsx + 1 modules
var Badge = __webpack_require__("../badges/src/components/Badge/index.tsx");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../badges/src/components/helpers/SellerLevelDiamondIcon/index.tsx


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
try {
    // @ts-ignore
    SellerLevelDiamondIcon.displayName = "SellerLevelDiamondIcon";
    // @ts-ignore
    SellerLevelDiamondIcon.__docgenInfo = { "description": "", "displayName": "SellerLevelDiamondIcon", "props": { "color": { "defaultValue": { value: "currentColor" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"currentColor\"" }, { "value": "\"empty\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/helpers/SellerLevelDiamondIcon/index.tsx#SellerLevelDiamondIcon"] = { docgenInfo: SellerLevelDiamondIcon.__docgenInfo, name: "SellerLevelDiamondIcon", path: "../badges/src/components/helpers/SellerLevelDiamondIcon/index.tsx#SellerLevelDiamondIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/SellerLevelOneBadge/index.tsx






const SellerLevelOneBadge = _ref => {
  let {
    showTooltip = true,
    tooltipPosition = 'top',
    dataTestId,
    appendTooltipToBody,
    disableTooltipFlip,
    dataTrackTag = 'seller_level_one_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    showTooltip: showTooltip,
    color: "grey_1200",
    backgroundColor: "transparent",
    tooltipContent: (0,translate/* translate */.T)('badges.seller_level_one_badge.tooltip'),
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
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Level 1"), /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "inlineFlex",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(helpers_SellerLevelDiamondIcon, null), /*#__PURE__*/react.createElement(helpers_SellerLevelDiamondIcon, {
    color: "empty"
  }), /*#__PURE__*/react.createElement(helpers_SellerLevelDiamondIcon, {
    color: "empty"
  }))));
};
SellerLevelOneBadge.displayName = 'SellerLevelOneBadge';
/* harmony default export */ const components_SellerLevelOneBadge = (SellerLevelOneBadge);
try {
    // @ts-ignore
    SellerLevelOneBadge.displayName = "SellerLevelOneBadge";
    // @ts-ignore
    SellerLevelOneBadge.__docgenInfo = { "description": "", "displayName": "SellerLevelOneBadge", "props": { "dataTrackTag": { "defaultValue": { value: "seller_level_one_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": { value: "true" }, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": { value: "top" }, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/SellerLevelOneBadge/index.tsx#SellerLevelOneBadge"] = { docgenInfo: SellerLevelOneBadge.__docgenInfo, name: "SellerLevelOneBadge", path: "../badges/src/components/SellerLevelOneBadge/index.tsx#SellerLevelOneBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/SellerLevelTwoBadge/index.tsx






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
try {
    // @ts-ignore
    SellerLevelTwoBadge.displayName = "SellerLevelTwoBadge";
    // @ts-ignore
    SellerLevelTwoBadge.__docgenInfo = { "description": "", "displayName": "SellerLevelTwoBadge", "props": { "dataTrackTag": { "defaultValue": { value: "seller_level_two_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": { value: "true" }, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": { value: "top" }, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/SellerLevelTwoBadge/index.tsx#SellerLevelTwoBadge"] = { docgenInfo: SellerLevelTwoBadge.__docgenInfo, name: "SellerLevelTwoBadge", path: "../badges/src/components/SellerLevelTwoBadge/index.tsx#SellerLevelTwoBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/brand/NewSeller.js
var NewSeller = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/brand/NewSeller.js");
;// ../badges/src/components/NewSellerBadge/index.tsx



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
try {
    // @ts-ignore
    NewSellerBadge.displayName = "NewSellerBadge";
    // @ts-ignore
    NewSellerBadge.__docgenInfo = { "description": "", "displayName": "NewSellerBadge", "props": { "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": null, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": null, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/NewSellerBadge/index.tsx#NewSellerBadge"] = { docgenInfo: NewSellerBadge.__docgenInfo, name: "NewSellerBadge", path: "../badges/src/components/NewSellerBadge/index.tsx#NewSellerBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelZero.js
var SellerLevelZero = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelZero.js");
;// ../badges/src/components/SellerFacingLevelZeroBadge/index.tsx



const SellerFacingLevelZeroBadge = _ref => {
  let {
    dataTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    color: "grey_1200",
    backgroundColor: "transparent",
    dataTestId: dataTestId,
    disablePadding: true
  }, /*#__PURE__*/react.createElement(SellerLevelZero/* default */.A, {
    size: "md"
  }), "Level 0");
};
SellerFacingLevelZeroBadge.displayName = 'SellerFacingLevelZeroBadge';
/* harmony default export */ const components_SellerFacingLevelZeroBadge = (SellerFacingLevelZeroBadge);
try {
    // @ts-ignore
    SellerFacingLevelZeroBadge.displayName = "SellerFacingLevelZeroBadge";
    // @ts-ignore
    SellerFacingLevelZeroBadge.__docgenInfo = { "description": "", "displayName": "SellerFacingLevelZeroBadge", "props": { "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": null, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": null, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/SellerFacingLevelZeroBadge/index.tsx#SellerFacingLevelZeroBadge"] = { docgenInfo: SellerFacingLevelZeroBadge.__docgenInfo, name: "SellerFacingLevelZeroBadge", path: "../badges/src/components/SellerFacingLevelZeroBadge/index.tsx#SellerFacingLevelZeroBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelOne.js
var SellerLevelOne = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelOne.js");
;// ../badges/src/components/SellerFacingLevelOneBadge/index.tsx



const SellerFacingLevelOneBadge = _ref => {
  let {
    dataTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    color: "grey_1200",
    backgroundColor: "transparent",
    dataTestId: dataTestId,
    disablePadding: true
  }, /*#__PURE__*/react.createElement(SellerLevelOne/* default */.A, {
    size: "md"
  }), "Level 1");
};
SellerFacingLevelOneBadge.displayName = 'SellerFacingLevelOneBadge';
/* harmony default export */ const components_SellerFacingLevelOneBadge = (SellerFacingLevelOneBadge);
try {
    // @ts-ignore
    SellerFacingLevelOneBadge.displayName = "SellerFacingLevelOneBadge";
    // @ts-ignore
    SellerFacingLevelOneBadge.__docgenInfo = { "description": "", "displayName": "SellerFacingLevelOneBadge", "props": { "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": null, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": null, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/SellerFacingLevelOneBadge/index.tsx#SellerFacingLevelOneBadge"] = { docgenInfo: SellerFacingLevelOneBadge.__docgenInfo, name: "SellerFacingLevelOneBadge", path: "../badges/src/components/SellerFacingLevelOneBadge/index.tsx#SellerFacingLevelOneBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelTwo.js
var SellerLevelTwo = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelTwo.js");
;// ../badges/src/components/SellerFacingLevelTwoBadge/index.tsx



const SellerFacingLevelTwoBadge = _ref => {
  let {
    dataTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    color: "grey_1200",
    backgroundColor: "transparent",
    dataTestId: dataTestId,
    disablePadding: true
  }, /*#__PURE__*/react.createElement(SellerLevelTwo/* default */.A, {
    size: "md"
  }), "Level 2");
};
SellerFacingLevelTwoBadge.displayName = 'SellerFacingLevelTwoBadge';
/* harmony default export */ const components_SellerFacingLevelTwoBadge = (SellerFacingLevelTwoBadge);
try {
    // @ts-ignore
    SellerFacingLevelTwoBadge.displayName = "SellerFacingLevelTwoBadge";
    // @ts-ignore
    SellerFacingLevelTwoBadge.__docgenInfo = { "description": "", "displayName": "SellerFacingLevelTwoBadge", "props": { "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": null, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": null, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/SellerFacingLevelTwoBadge/index.tsx#SellerFacingLevelTwoBadge"] = { docgenInfo: SellerFacingLevelTwoBadge.__docgenInfo, name: "SellerFacingLevelTwoBadge", path: "../badges/src/components/SellerFacingLevelTwoBadge/index.tsx#SellerFacingLevelTwoBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelTopRated.js
var SellerLevelTopRated = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelTopRated.js");
;// ../badges/src/components/SellerFacingTopRatedBadge/index.tsx



const SellerFacingTopRatedBadge = _ref => {
  let {
    dataTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    color: "grey_1200",
    backgroundColor: "transparent",
    dataTestId: dataTestId,
    disablePadding: true
  }, /*#__PURE__*/react.createElement(SellerLevelTopRated/* default */.A, {
    size: "md"
  }), "Top Rated");
};
SellerFacingTopRatedBadge.displayName = 'SellerFacingTopRatedBadge';
/* harmony default export */ const components_SellerFacingTopRatedBadge = (SellerFacingTopRatedBadge);
try {
    // @ts-ignore
    SellerFacingTopRatedBadge.displayName = "SellerFacingTopRatedBadge";
    // @ts-ignore
    SellerFacingTopRatedBadge.__docgenInfo = { "description": "", "displayName": "SellerFacingTopRatedBadge", "props": { "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": null, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": null, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/SellerFacingTopRatedBadge/index.tsx#SellerFacingTopRatedBadge"] = { docgenInfo: SellerFacingTopRatedBadge.__docgenInfo, name: "SellerFacingTopRatedBadge", path: "../badges/src/components/SellerFacingTopRatedBadge/index.tsx#SellerFacingTopRatedBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/AccountFlaggedBadge/index.tsx


const AccountFlaggedBadge = _ref => {
  let {
    dataTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    color: "grey_1200",
    backgroundColor: "transparent",
    dataTestId: dataTestId,
    disablePadding: true
  }, "Account flagged");
};
AccountFlaggedBadge.displayName = 'AccountFlaggedBadge';
/* harmony default export */ const components_AccountFlaggedBadge = (AccountFlaggedBadge);
try {
    // @ts-ignore
    AccountFlaggedBadge.displayName = "AccountFlaggedBadge";
    // @ts-ignore
    AccountFlaggedBadge.__docgenInfo = { "description": "", "displayName": "AccountFlaggedBadge", "props": { "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": null, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": null, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/AccountFlaggedBadge/index.tsx#AccountFlaggedBadge"] = { docgenInfo: AccountFlaggedBadge.__docgenInfo, name: "AccountFlaggedBadge", path: "../badges/src/components/AccountFlaggedBadge/index.tsx#AccountFlaggedBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/TopRatedBadge/index.tsx






const TopRatedBadge = _ref => {
  let {
    showTooltip = true,
    tooltipPosition = 'top',
    dataTestId,
    appendTooltipToBody,
    disableTooltipFlip,
    dataTrackTag = 'top_rated_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    showTooltip: showTooltip,
    color: "orange_1200",
    backgroundColor: "yellow_300",
    tooltipContent: (0,translate/* translate */.T)('badges.top_rated_seller_badge.tooltip'),
    tooltipPosition: tooltipPosition,
    dataTestId: dataTestId,
    appendTooltipToBody: appendTooltipToBody,
    disableTooltipFlip: disableTooltipFlip,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "inlineFlex",
    gap: "1",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Top Rated"), /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "inlineFlex",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(helpers_SellerLevelDiamondIcon, null), /*#__PURE__*/react.createElement(helpers_SellerLevelDiamondIcon, null), /*#__PURE__*/react.createElement(helpers_SellerLevelDiamondIcon, null))));
};
TopRatedBadge.displayName = 'TopRatedBadge';
/* harmony default export */ const components_TopRatedBadge = (TopRatedBadge);
try {
    // @ts-ignore
    TopRatedBadge.displayName = "TopRatedBadge";
    // @ts-ignore
    TopRatedBadge.__docgenInfo = { "description": "", "displayName": "TopRatedBadge", "props": { "dataTrackTag": { "defaultValue": { value: "top_rated_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": { value: "true" }, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": { value: "top" }, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/TopRatedBadge/index.tsx#TopRatedBadge"] = { docgenInfo: TopRatedBadge.__docgenInfo, name: "TopRatedBadge", path: "../badges/src/components/TopRatedBadge/index.tsx#TopRatedBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../badges/src/components/FiverrChoiceBadge/index.tsx
var FiverrChoiceBadge = __webpack_require__("../badges/src/components/FiverrChoiceBadge/index.tsx");
;// ../badges/src/components/VettedProBadge/VettedIcon.tsx


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
;// ../badges/src/components/VettedProBadge/index.tsx





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
try {
    // @ts-ignore
    VettedProBadge.displayName = "VettedProBadge";
    // @ts-ignore
    VettedProBadge.__docgenInfo = { "description": "", "displayName": "VettedProBadge", "props": { "variant": { "defaultValue": { value: "default" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"short\"" }, { "value": "\"compact\"" }] } }, "dataTrackTag": { "defaultValue": { value: "vetted_pro_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": { value: "true" }, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": { value: "top" }, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/VettedProBadge/index.tsx#VettedProBadge"] = { docgenInfo: VettedProBadge.__docgenInfo, name: "VettedProBadge", path: "../badges/src/components/VettedProBadge/index.tsx#VettedProBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../badges/src/components/RecommendedBadge/index.tsx
var RecommendedBadge = __webpack_require__("../badges/src/components/RecommendedBadge/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
;// ../badges/src/components/BuyItAgainBadge/index.tsx



const BuyItAgainBadge = _ref => {
  let {
    dataTestId,
    dataTrackTag = 'buy_it_again_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    backgroundColor: "green_900",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "badges.buy_it_again_badge.text"
  }));
};
BuyItAgainBadge.displayName = 'BuyItAgainBadge';
/* harmony default export */ const components_BuyItAgainBadge = (BuyItAgainBadge);
try {
    // @ts-ignore
    BuyItAgainBadge.displayName = "BuyItAgainBadge";
    // @ts-ignore
    BuyItAgainBadge.__docgenInfo = { "description": "", "displayName": "BuyItAgainBadge", "props": { "dataTrackTag": { "defaultValue": { value: "buy_it_again_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/BuyItAgainBadge/index.tsx#BuyItAgainBadge"] = { docgenInfo: BuyItAgainBadge.__docgenInfo, name: "BuyItAgainBadge", path: "../badges/src/components/BuyItAgainBadge/index.tsx#BuyItAgainBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/NewBadge/index.tsx



const NewBadge = _ref => {
  let {
    dataTestId,
    dataTrackTag = 'new_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    backgroundColor: "pink_900",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "badges.new_badge.text"
  }));
};
NewBadge.displayName = 'NewBadge';
/* harmony default export */ const components_NewBadge = (NewBadge);
try {
    // @ts-ignore
    NewBadge.displayName = "NewBadge";
    // @ts-ignore
    NewBadge.__docgenInfo = { "description": "", "displayName": "NewBadge", "props": { "dataTrackTag": { "defaultValue": { value: "new_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/NewBadge/index.tsx#NewBadge"] = { docgenInfo: NewBadge.__docgenInfo, name: "NewBadge", path: "../badges/src/components/NewBadge/index.tsx#NewBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/ComingSoonBadge/index.tsx



const ComingSoonBadge = _ref => {
  let {
    dataTestId,
    dataTrackTag = 'coming_soon_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    backgroundColor: "pink_900",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "badges.coming_soon_badge.text"
  }));
};
ComingSoonBadge.displayName = 'ComingSoonBadge';
/* harmony default export */ const components_ComingSoonBadge = (ComingSoonBadge);
try {
    // @ts-ignore
    ComingSoonBadge.displayName = "ComingSoonBadge";
    // @ts-ignore
    ComingSoonBadge.__docgenInfo = { "description": "", "displayName": "ComingSoonBadge", "props": { "dataTrackTag": { "defaultValue": { value: "coming_soon_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/ComingSoonBadge/index.tsx#ComingSoonBadge"] = { docgenInfo: ComingSoonBadge.__docgenInfo, name: "ComingSoonBadge", path: "../badges/src/components/ComingSoonBadge/index.tsx#ComingSoonBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/LockedSolid.js
var LockedSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/LockedSolid.js");
;// ../badges/src/components/KickstartBadge/index.tsx



const KickstartBadge = _ref => {
  let {
    dataTestId,
    isLocked = false,
    dataTrackTag = 'kickstart_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    backgroundColor: "pink_900",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, isLocked && /*#__PURE__*/react.createElement(LockedSolid/* default */.A, {
    size: "xs"
  }), "Kickstart");
};
KickstartBadge.displayName = 'KickstartBadge';
/* harmony default export */ const components_KickstartBadge = (KickstartBadge);
try {
    // @ts-ignore
    KickstartBadge.displayName = "KickstartBadge";
    // @ts-ignore
    KickstartBadge.__docgenInfo = { "description": "", "displayName": "KickstartBadge", "props": { "isLocked": { "defaultValue": { value: "false" }, "description": "", "name": "isLocked", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "kickstart_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/KickstartBadge/index.tsx#KickstartBadge"] = { docgenInfo: KickstartBadge.__docgenInfo, name: "KickstartBadge", path: "../badges/src/components/KickstartBadge/index.tsx#KickstartBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/BetaBadge/index.tsx



const BetaBadge = _ref => {
  let {
    dataTestId,
    dataTrackTag = 'beta_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    backgroundColor: "blue_900",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "badges.beta_badge.text"
  }));
};
BetaBadge.displayName = 'BetaBadge';
/* harmony default export */ const components_BetaBadge = (BetaBadge);
try {
    // @ts-ignore
    BetaBadge.displayName = "BetaBadge";
    // @ts-ignore
    BetaBadge.__docgenInfo = { "description": "", "displayName": "BetaBadge", "props": { "dataTrackTag": { "defaultValue": { value: "beta_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/BetaBadge/index.tsx#BetaBadge"] = { docgenInfo: BetaBadge.__docgenInfo, name: "BetaBadge", path: "../badges/src/components/BetaBadge/index.tsx#BetaBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ComplianceInProgress.js
var ComplianceInProgress = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ComplianceInProgress.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ComplianceSuccess.js
var ComplianceSuccess = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ComplianceSuccess.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ComplianceAttention.js
var ComplianceAttention = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ComplianceAttention.js");
;// ../badges/src/components/ComplianceBadge/index.tsx





const Data = {
  info: {
    color: 'blue_1100',
    bgColor: 'blue_200',
    icon: props => /*#__PURE__*/react.createElement(ComplianceInProgress/* default */.A, {
      color: props.color
    })
  },
  success: {
    color: 'green_1100',
    bgColor: 'green_200',
    icon: props => /*#__PURE__*/react.createElement(ComplianceSuccess/* default */.A, {
      color: props.color
    })
  },
  warning: {
    color: 'yellow_1200',
    bgColor: 'yellow_200',
    icon: props => /*#__PURE__*/react.createElement(ComplianceAttention/* default */.A, {
      color: props.color
    })
  }
};
const ComplianceBadge = _ref => {
  let {
    isCompact = false,
    type = 'info',
    dataTrackTag = 'compliance_badge',
    dataTrackValue
  } = _ref;
  const data = Data[type];
  if (!data) {
    return null;
  }
  const Icon = data.icon;
  if (isCompact) {
    return /*#__PURE__*/react.createElement(Badge/* default */.A, {
      disablePadding: true,
      backgroundColor: data.bgColor,
      color: data.color,
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue
    }, /*#__PURE__*/react.createElement(Center/* default */.A, {
      height: 20,
      width: 20
    }, /*#__PURE__*/react.createElement(Icon, {
      color: data.color
    })));
  }
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    backgroundColor: data.bgColor,
    color: data.color
  }, /*#__PURE__*/react.createElement(Icon, {
    color: data.color
  }), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "badges.compliance_badge.text"
  }));
};
ComplianceBadge.displayName = 'ComplianceBadge';
/* harmony default export */ const components_ComplianceBadge = (ComplianceBadge);
try {
    // @ts-ignore
    ComplianceBadge.displayName = "ComplianceBadge";
    // @ts-ignore
    ComplianceBadge.__docgenInfo = { "description": "", "displayName": "ComplianceBadge", "props": { "type": { "defaultValue": { value: "info" }, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"info\"" }, { "value": "\"success\"" }, { "value": "\"warning\"" }] } }, "isCompact": { "defaultValue": { value: "false" }, "description": "", "name": "isCompact", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "compliance_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/ComplianceBadge/index.tsx#ComplianceBadge"] = { docgenInfo: ComplianceBadge.__docgenInfo, name: "ComplianceBadge", path: "../badges/src/components/ComplianceBadge/index.tsx#ComplianceBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Locked.js
var Locked = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Locked.js");
;// ../badges/src/components/SellerPlusBadge/index.tsx




const SELLER_PLUS_TAG = 'Plus';
const SellerPlusBadge = _ref => {
  let {
    dataTestId,
    dataTrackTag = 'seller_plus_badge',
    dataTrackValue,
    isLocked = false
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    backgroundColor: "pink_900",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "inlineFlex",
    gap: "1"
  }, isLocked && /*#__PURE__*/react.createElement(Locked/* default */.A, null), SELLER_PLUS_TAG));
};
SellerPlusBadge.displayName = 'SellerPlusBadge';
/* harmony default export */ const components_SellerPlusBadge = (SellerPlusBadge);
try {
    // @ts-ignore
    SellerPlusBadge.displayName = "SellerPlusBadge";
    // @ts-ignore
    SellerPlusBadge.__docgenInfo = { "description": "", "displayName": "SellerPlusBadge", "props": { "dataTrackTag": { "defaultValue": { value: "seller_plus_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "isLocked": { "defaultValue": { value: "false" }, "description": "", "name": "isLocked", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/SellerPlusBadge/index.tsx#SellerPlusBadge"] = { docgenInfo: SellerPlusBadge.__docgenInfo, name: "SellerPlusBadge", path: "../badges/src/components/SellerPlusBadge/index.tsx#SellerPlusBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/CurrentPlanBadge/index.tsx



const CurrentPlanBadge = _ref => {
  let {
    dataTestId,
    dataTrackTag = 'current_plan_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    backgroundColor: "grey_400",
    color: "grey_1200",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "badges.current_plan_badge.text"
  }));
};
CurrentPlanBadge.displayName = 'CurrentPlanBadge';
/* harmony default export */ const components_CurrentPlanBadge = (CurrentPlanBadge);
try {
    // @ts-ignore
    CurrentPlanBadge.displayName = "CurrentPlanBadge";
    // @ts-ignore
    CurrentPlanBadge.__docgenInfo = { "description": "", "displayName": "CurrentPlanBadge", "props": { "dataTrackTag": { "defaultValue": { value: "current_plan_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/CurrentPlanBadge/index.tsx#CurrentPlanBadge"] = { docgenInfo: CurrentPlanBadge.__docgenInfo, name: "CurrentPlanBadge", path: "../badges/src/components/CurrentPlanBadge/index.tsx#CurrentPlanBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/ProTierBadge/ProTierIcon/GoldIcon.tsx

const GoldIcon = () => /*#__PURE__*/react.createElement("svg", {
  width: 14,
  height: 16,
  viewBox: "0 0 14 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react.createElement("path", {
  d: "M6.18182 0.472378C6.68811 0.180069 7.31189 0.180069 7.81818 0.472377L13.11 3.52762C13.6163 3.81993 13.9282 4.36014 13.9282 4.94476V11.0552C13.9282 11.6399 13.6163 12.1801 13.11 12.4724L7.81818 15.5276C7.31189 15.8199 6.68811 15.8199 6.18182 15.5276L0.889979 12.4724C0.383686 12.1801 0.0717969 11.6399 0.0717969 11.0552V4.94476C0.0717969 4.36014 0.383686 3.81993 0.889979 3.52762L6.18182 0.472378Z",
  fill: "url(#paint0_linear_971_2269)"
}), /*#__PURE__*/react.createElement("path", {
  d: "M6.18182 0.472378C6.68811 0.180069 7.31189 0.180069 7.81818 0.472377L13.11 3.52762C13.6163 3.81993 13.9282 4.36014 13.9282 4.94476V11.0552C13.9282 11.6399 13.6163 12.1801 13.11 12.4724L7.81818 15.5276C7.31189 15.8199 6.68811 15.8199 6.18182 15.5276L0.889979 12.4724C0.383686 12.1801 0.0717969 11.6399 0.0717969 11.0552V4.94476C0.0717969 4.36014 0.383686 3.81993 0.889979 3.52762L6.18182 0.472378Z",
  fill: "url(#paint1_linear_971_2269)"
}), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
  id: "paint0_linear_971_2269",
  x1: "7",
  y1: "0",
  x2: "7",
  y2: "16",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react.createElement("stop", {
  stopColor: "#C39E4D"
}), /*#__PURE__*/react.createElement("stop", {
  offset: "1",
  stopColor: "#5D4B25"
})), /*#__PURE__*/react.createElement("linearGradient", {
  id: "paint1_linear_971_2269",
  x1: "7",
  y1: "0",
  x2: "7",
  y2: "16",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react.createElement("stop", {
  stopColor: "#F4DC95"
}), /*#__PURE__*/react.createElement("stop", {
  offset: "1",
  stopColor: "#AD822B"
}))));
GoldIcon.displayName = 'GoldIcon';
/* harmony default export */ const ProTierIcon_GoldIcon = (GoldIcon);
;// ../badges/src/components/ProTierBadge/ProTierIcon/SilverIcon.tsx

const SilverIcon = () => /*#__PURE__*/react.createElement("svg", {
  width: "14",
  height: "16",
  viewBox: "0 0 14 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react.createElement("path", {
  d: "M6.18182 0.472378C6.68811 0.180069 7.31189 0.180069 7.81818 0.472377L13.11 3.52762C13.6163 3.81993 13.9282 4.36014 13.9282 4.94476V11.0552C13.9282 11.6399 13.6163 12.1801 13.11 12.4724L7.81818 15.5276C7.31189 15.8199 6.68811 15.8199 6.18182 15.5276L0.889979 12.4724C0.383686 12.1801 0.0717969 11.6399 0.0717969 11.0552V4.94476C0.0717969 4.36014 0.383686 3.81993 0.889979 3.52762L6.18182 0.472378Z",
  fill: "#909EA9"
}), /*#__PURE__*/react.createElement("path", {
  d: "M6.18182 0.472378C6.68811 0.180069 7.31189 0.180069 7.81818 0.472377L13.11 3.52762C13.6163 3.81993 13.9282 4.36014 13.9282 4.94476V11.0552C13.9282 11.6399 13.6163 12.1801 13.11 12.4724L7.81818 15.5276C7.31189 15.8199 6.68811 15.8199 6.18182 15.5276L0.889979 12.4724C0.383686 12.1801 0.0717969 11.6399 0.0717969 11.0552V4.94476C0.0717969 4.36014 0.383686 3.81993 0.889979 3.52762L6.18182 0.472378Z",
  fill: "url(#paint0_linear_971_5382)"
}), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
  id: "paint0_linear_971_5382",
  x1: "7",
  y1: "0",
  x2: "7",
  y2: "16",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react.createElement("stop", {
  stopColor: "#D6E1EA"
}), /*#__PURE__*/react.createElement("stop", {
  offset: "1",
  stopColor: "#8795A0"
}))));
SilverIcon.displayName = 'SilverIcon';
/* harmony default export */ const ProTierIcon_SilverIcon = (SilverIcon);
;// ../badges/src/components/ProTierBadge/ProTierIcon/PlatinumIcon.tsx

const PlatinumIcon = () => /*#__PURE__*/react.createElement("svg", {
  width: "14",
  height: "16",
  viewBox: "0 0 14 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react.createElement("path", {
  d: "M6.18182 0.472378C6.68811 0.180069 7.31189 0.180069 7.81818 0.472377L13.11 3.52762C13.6163 3.81993 13.9282 4.36014 13.9282 4.94476V11.0552C13.9282 11.6399 13.6163 12.1801 13.11 12.4724L7.81818 15.5276C7.31189 15.8199 6.68811 15.8199 6.18182 15.5276L0.889979 12.4724C0.383686 12.1801 0.0717969 11.6399 0.0717969 11.0552V4.94476C0.0717969 4.36014 0.383686 3.81993 0.889979 3.52762L6.18182 0.472378Z",
  fill: "url(#paint0_linear_971_4530)"
}), /*#__PURE__*/react.createElement("path", {
  d: "M6.18182 0.472378C6.68811 0.180069 7.31189 0.180069 7.81818 0.472377L13.11 3.52762C13.6163 3.81993 13.9282 4.36014 13.9282 4.94476V11.0552C13.9282 11.6399 13.6163 12.1801 13.11 12.4724L7.81818 15.5276C7.31189 15.8199 6.68811 15.8199 6.18182 15.5276L0.889979 12.4724C0.383686 12.1801 0.0717969 11.6399 0.0717969 11.0552V4.94476C0.0717969 4.36014 0.383686 3.81993 0.889979 3.52762L6.18182 0.472378Z",
  fill: "url(#paint1_linear_971_4530)"
}), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
  id: "paint0_linear_971_4530",
  x1: "7",
  y1: "0",
  x2: "7",
  y2: "16",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react.createElement("stop", {
  stopColor: "#4E76AF"
}), /*#__PURE__*/react.createElement("stop", {
  offset: "1",
  stopColor: "#213149"
})), /*#__PURE__*/react.createElement("linearGradient", {
  id: "paint1_linear_971_4530",
  x1: "7",
  y1: "0",
  x2: "7",
  y2: "16",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react.createElement("stop", {
  stopColor: "#6A94D1"
}), /*#__PURE__*/react.createElement("stop", {
  offset: "1",
  stopColor: "#345A92"
}))));
PlatinumIcon.displayName = 'PlatinumIcon';
/* harmony default export */ const ProTierIcon_PlatinumIcon = (PlatinumIcon);
;// ../badges/src/components/ProTierBadge/ProTierIcon/DiamondIcon.tsx

const DiamondIcon = () => /*#__PURE__*/react.createElement("svg", {
  width: 14,
  height: 16,
  viewBox: "0 0 14 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react.createElement("path", {
  d: "M6.18182 0.472378C6.68811 0.180069 7.31189 0.180069 7.81818 0.472377L13.11 3.52762C13.6163 3.81993 13.9282 4.36014 13.9282 4.94476V11.0552C13.9282 11.6399 13.6163 12.1801 13.11 12.4724L7.81818 15.5276C7.31189 15.8199 6.68811 15.8199 6.18182 15.5276L0.889979 12.4724C0.383686 12.1801 0.0717969 11.6399 0.0717969 11.0552V4.94476C0.0717969 4.36014 0.383686 3.81993 0.889979 3.52762L6.18182 0.472378Z",
  fill: "#314977"
}));
DiamondIcon.displayName = 'DiamondIcon';
/* harmony default export */ const ProTierIcon_DiamondIcon = (DiamondIcon);
;// ../badges/src/components/ProTierBadge/ProTierIcon/index.tsx






const ProTierIcon = _ref => {
  let {
    tier
  } = _ref;
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    paddingBottom: "0.5"
  }, {
    gold: /*#__PURE__*/react.createElement(ProTierIcon_GoldIcon, null),
    silver: /*#__PURE__*/react.createElement(ProTierIcon_SilverIcon, null),
    platinum: /*#__PURE__*/react.createElement(ProTierIcon_PlatinumIcon, null),
    diamond: /*#__PURE__*/react.createElement(ProTierIcon_DiamondIcon, null)
  }[tier]);
};
ProTierIcon.displayName = 'ProTierIcon';
/* harmony default export */ const ProTierBadge_ProTierIcon = (ProTierIcon);
try {
    // @ts-ignore
    ProTierIcon.displayName = "ProTierIcon";
    // @ts-ignore
    ProTierIcon.__docgenInfo = { "description": "", "displayName": "ProTierIcon", "props": { "tier": { "defaultValue": null, "description": "", "name": "tier", "required": true, "type": { "name": "enum", "value": [{ "value": "\"gold\"" }, { "value": "\"silver\"" }, { "value": "\"platinum\"" }, { "value": "\"diamond\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/ProTierBadge/ProTierIcon/index.tsx#ProTierIcon"] = { docgenInfo: ProTierIcon.__docgenInfo, name: "ProTierIcon", path: "../badges/src/components/ProTierBadge/ProTierIcon/index.tsx#ProTierIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/components/ProTierBadge/index.tsx




const ProTierBadge = _ref => {
  let {
    dataTestId,
    tier,
    dataTrackTag = 'pro_tier_badge',
    dataTrackValue = tier
  } = _ref;
  return /*#__PURE__*/react.createElement(Badge/* default */.A, {
    color: "grey_1200",
    backgroundColor: "transparent",
    dataTestId: dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(ProTierBadge_ProTierIcon, {
    tier: tier
  }), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "badges.pro_tier_badge.".concat(tier)
  }));
};
ProTierBadge.displayName = 'ProTierBadge';
/* harmony default export */ const components_ProTierBadge = (ProTierBadge);
try {
    // @ts-ignore
    ProTierBadge.displayName = "ProTierBadge";
    // @ts-ignore
    ProTierBadge.__docgenInfo = { "description": "", "displayName": "ProTierBadge", "props": { "tier": { "defaultValue": null, "description": "", "name": "tier", "required": true, "type": { "name": "enum", "value": [{ "value": "\"gold\"" }, { "value": "\"silver\"" }, { "value": "\"platinum\"" }, { "value": "\"diamond\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pro_tier_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/ProTierBadge/index.tsx#ProTierBadge"] = { docgenInfo: ProTierBadge.__docgenInfo, name: "ProTierBadge", path: "../badges/src/components/ProTierBadge/index.tsx#ProTierBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../badges/src/stories/index.stories.tsx




const badgesWithoutPadding = [components_SellerLevelOneBadge, components_SellerLevelTwoBadge, components_NewSellerBadge, components_SellerFacingLevelZeroBadge, components_SellerFacingLevelOneBadge, components_SellerFacingLevelTwoBadge, components_SellerFacingTopRatedBadge, components_AccountFlaggedBadge];
const badgesWithTooltip = [...badgesWithoutPadding, components_TopRatedBadge, FiverrChoiceBadge/* default */.A, components_VettedProBadge];
const badgesWithoutTooltip = [RecommendedBadge/* default */.A, components_BuyItAgainBadge, components_NewBadge, components_ComingSoonBadge, components_KickstartBadge, components_BetaBadge, components_ComplianceBadge, components_SellerPlusBadge, components_CurrentPlanBadge];
const allBadges = [...badgesWithTooltip, ...badgesWithoutTooltip];
const Primary = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Badge base component for creating badges in Penta (not exported)'
      }
    }
  }
};
const AllBadges = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    paddingY: "20"
  }, allBadges.map(Badge => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center",
    key: Badge.displayName
  }, /*#__PURE__*/react.createElement(Badge, args), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, Badge.displayName))))
};
const BadgesWithTooltip = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    paddingY: "20"
  }, badgesWithTooltip.map(Badge => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center",
    key: Badge.displayName
  }, /*#__PURE__*/react.createElement(Badge, args), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, Badge.displayName))))
};
const BadgesWithCustomProps = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    paddingY: "20"
  }, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_KickstartBadge, {
    isLocked: true
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "Kickstart Badge Locked")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_SellerPlusBadge, {
    isLocked: true
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "SellerPlus Badge Locked")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ComplianceBadge, {
    type: "info"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "Compliance info")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ComplianceBadge, {
    type: "success"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "Compliance success")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ComplianceBadge, {
    type: "warning"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "Compliance warning")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ComplianceBadge, {
    type: "warning",
    isCompact: true
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "Compliance warning compact")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ComplianceBadge, {
    type: "info",
    isCompact: true
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "Compliance info compact")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ComplianceBadge, {
    type: "success",
    isCompact: true
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "Compliance success compact")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_VettedProBadge, null), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "VettedProBadge")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_VettedProBadge, {
    variant: "short"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "VettedProBadge short")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_VettedProBadge, {
    variant: "compact"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "VettedProBadge compact")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_VettedProBadge, {
    theme: "dark"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "VettedProBadge dark")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_VettedProBadge, {
    variant: "short",
    theme: "dark"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "VettedProBadge dark short")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_VettedProBadge, {
    variant: "compact",
    theme: "dark"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "VettedProBadge dark compact")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ProTierBadge, {
    tier: "gold"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "ProTierBadge gold")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ProTierBadge, {
    tier: "silver"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "ProTierBadge silver")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ProTierBadge, {
    tier: "platinum"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "ProTierBadge platinum")), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_ProTierBadge, {
    tier: "diamond"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, "ProTierBadge diamond")))
};
const BadgesWithoutTooltip = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    paddingY: "20"
  }, badgesWithoutTooltip.map(Badge => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center",
    key: Badge.displayName
  }, /*#__PURE__*/react.createElement(Badge, args), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, Badge.displayName))))
};
const BadgesWithoutPadding = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    paddingY: "20"
  }, badgesWithoutPadding.map(Badge => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    alignItems: "center",
    key: Badge.displayName
  }, /*#__PURE__*/react.createElement(Badge, args), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "1"
  }, Badge.displayName))))
};
const meta = {
  args: {
    children: 'Badge',
    backgroundColor: 'green_900'
  },
  title: 'Data Display/Badges',
  component: Badge/* default */.A
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Badge base component for creating badges in Penta (not exported)'\n      }\n    }\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
AllBadges.parameters = {
  ...AllBadges.parameters,
  docs: {
    ...AllBadges.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryGrid paddingY=\"20\">\n      {allBadges.map(Badge => <StoryStack direction=\"column\" alignItems=\"center\" key={Badge.displayName}>\n          <Badge {...args} />\n          <StoryText marginTop=\"1\">{Badge.displayName}</StoryText>\n        </StoryStack>)}\n    </StoryGrid>\n}",
      ...AllBadges.parameters?.docs?.source
    }
  }
};
BadgesWithTooltip.parameters = {
  ...BadgesWithTooltip.parameters,
  docs: {
    ...BadgesWithTooltip.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryGrid paddingY=\"20\">\n      {badgesWithTooltip.map(Badge => <StoryStack direction=\"column\" alignItems=\"center\" key={Badge.displayName}>\n          <Badge {...args} />\n          <StoryText marginTop=\"1\">{Badge.displayName}</StoryText>\n        </StoryStack>)}\n    </StoryGrid>\n}",
      ...BadgesWithTooltip.parameters?.docs?.source
    }
  }
};
BadgesWithCustomProps.parameters = {
  ...BadgesWithCustomProps.parameters,
  docs: {
    ...BadgesWithCustomProps.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid paddingY=\"20\">\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <KickstartBadge isLocked />\n        <StoryText marginTop=\"1\">Kickstart Badge Locked</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <SellerPlusBadge isLocked />\n        <StoryText marginTop=\"1\">SellerPlus Badge Locked</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ComplianceBadge type=\"info\" />\n        <StoryText marginTop=\"1\">Compliance info</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ComplianceBadge type=\"success\" />\n        <StoryText marginTop=\"1\">Compliance success</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ComplianceBadge type=\"warning\" />\n        <StoryText marginTop=\"1\">Compliance warning</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ComplianceBadge type=\"warning\" isCompact />\n        <StoryText marginTop=\"1\">Compliance warning compact</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ComplianceBadge type=\"info\" isCompact />\n        <StoryText marginTop=\"1\">Compliance info compact</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ComplianceBadge type=\"success\" isCompact />\n        <StoryText marginTop=\"1\">Compliance success compact</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <VettedProBadge />\n        <StoryText marginTop=\"1\">VettedProBadge</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <VettedProBadge variant=\"short\" />\n        <StoryText marginTop=\"1\">VettedProBadge short</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <VettedProBadge variant=\"compact\" />\n        <StoryText marginTop=\"1\">VettedProBadge compact</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <VettedProBadge theme=\"dark\" />\n        <StoryText marginTop=\"1\">VettedProBadge dark</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <VettedProBadge variant=\"short\" theme=\"dark\" />\n        <StoryText marginTop=\"1\">VettedProBadge dark short</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <VettedProBadge variant=\"compact\" theme=\"dark\" />\n        <StoryText marginTop=\"1\">VettedProBadge dark compact</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ProTierBadge tier=\"gold\" />\n        <StoryText marginTop=\"1\">ProTierBadge gold</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ProTierBadge tier=\"silver\" />\n        <StoryText marginTop=\"1\">ProTierBadge silver</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ProTierBadge tier=\"platinum\" />\n        <StoryText marginTop=\"1\">ProTierBadge platinum</StoryText>\n      </StoryStack>\n      <StoryStack direction=\"column\" alignItems=\"center\">\n        <ProTierBadge tier=\"diamond\" />\n        <StoryText marginTop=\"1\">ProTierBadge diamond</StoryText>\n      </StoryStack>\n    </StoryGrid>\n}",
      ...BadgesWithCustomProps.parameters?.docs?.source
    }
  }
};
BadgesWithoutTooltip.parameters = {
  ...BadgesWithoutTooltip.parameters,
  docs: {
    ...BadgesWithoutTooltip.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryGrid paddingY=\"20\">\n      {badgesWithoutTooltip.map(Badge => <StoryStack direction=\"column\" alignItems=\"center\" key={Badge.displayName}>\n          <Badge {...args} />\n          <StoryText marginTop=\"1\">{Badge.displayName}</StoryText>\n        </StoryStack>)}\n    </StoryGrid>\n}",
      ...BadgesWithoutTooltip.parameters?.docs?.source
    }
  }
};
BadgesWithoutPadding.parameters = {
  ...BadgesWithoutPadding.parameters,
  docs: {
    ...BadgesWithoutPadding.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryGrid paddingY=\"20\">\n      {badgesWithoutPadding.map(Badge => <StoryStack direction=\"column\" alignItems=\"center\" key={Badge.displayName}>\n          <Badge {...args} />\n          <StoryText marginTop=\"1\">{Badge.displayName}</StoryText>\n        </StoryStack>)}\n    </StoryGrid>\n}",
      ...BadgesWithoutPadding.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","AllBadges","BadgesWithTooltip","BadgesWithCustomProps","BadgesWithoutTooltip","BadgesWithoutPadding"];

/***/ }),

/***/ "../button/dist/esm/src/components/BaseButton/hooks/useGetButtonElement/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "../button/dist/esm/src/components/Button/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Button)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/BaseButton/index.js
var BaseButton = __webpack_require__("../button/dist/esm/src/components/BaseButton/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
;// ../button/dist/esm/src/components/Button/utils.js

const STYLES_BY_SIZE = {
  sm: {
    paddingY: '1.5',
    paddingX: '3',
    lineHeight: 'b_sm',
    fontSize: 'b_sm'
  },
  md: {
    paddingY: '2',
    paddingX: '4',
    lineHeight: 'b_md',
    fontSize: 'b_md'
  },
  lg: {
    paddingY: '2.5',
    paddingX: '5',
    lineHeight: 'b_lg',
    fontSize: 'b_md'
  }
};
const getConditionalSize = size => {
  if (typeof size === 'object') {
    return {
      paddingX: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].paddingX),
      paddingY: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].paddingY),
      fontSize: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].fontSize),
      lineHeight: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].lineHeight)
    };
  }
  return STYLES_BY_SIZE[size || 'md'];
};
const getConditionalFullWidth = fullWidth => {
  if (typeof fullWidth === 'object') {
    return (0,styles_ve_css/* mapResponsiveStyles */.d0)(fullWidth, value => value ? '100%' : 'initial');
  }
  return fullWidth ? '100%' : undefined;
};
;// ../button/dist/esm/src/components/Button/index.js
const _excluded = ["children", "disabled", "intent", "size", "variant", "loading", "className", "fullWidth", "dataTrackTag"];
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



const Button = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      disabled = false,
      intent = 'primary',
      size = 'md',
      variant = 'filled',
      loading = false,
      className,
      fullWidth,
      dataTrackTag = 'button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(BaseButton/* default */.A, _objectSpread(_objectSpread(_objectSpread({}, rest), getConditionalSize(size)), {}, {
    width: getConditionalFullWidth(fullWidth),
    variant: variant,
    intent: intent,
    loading: loading,
    disabled: disabled,
    ref: ref,
    className: className,
    dataTrackTag: dataTrackTag
  }), children);
});
Button.displayName = 'Button';
/* harmony default export */ const components_Button = (Button);
;
Button.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Button"
};

/***/ }),

/***/ "../button/dist/esm/src/components/IconButton/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "../dropdown/src/components/Dropdown/useDropdownContext/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   r: () => (/* binding */ DropdownContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const DropdownContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useDropdownContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DropdownContext);
  if (!context) {
    throw new Error('useDropdownContext must be used within a DropdownProvider');
  }
  return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDropdownContext);

/***/ }),

/***/ "../dropdown/src/components/Dropdown/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getIsMultiSelect),
/* harmony export */   Y: () => (/* binding */ focusContent)
/* harmony export */ });
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js");

const getIsMultiSelect = children => {
  const menuGroups = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_0__/* .filterChildrenByType */ .X)(children, 'MenuGroup') || [];
  if (menuGroups.length > 1 || menuGroups.some(group => group.props.isMulti === true)) {
    return true;
  }
  return false;
};
const focusContent = _ref => {
  let {
    items,
    setFocusedItem,
    values
  } = _ref;
  const currentHoveredItem = items.find(item => {
    var _item$ref$current, _item$ref$current$mat;
    return !item.disabled && ((_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 || (_item$ref$current$mat = _item$ref$current.matches) === null || _item$ref$current$mat === void 0 ? void 0 : _item$ref$current$mat.call(_item$ref$current, ':hover'));
  });
  if (currentHoveredItem) {
    setFocusedItem(currentHoveredItem.ref);
    return;
  }
  const hasSelectedItems = Boolean(Object.keys(values).length);
  if (hasSelectedItems) {
    var _items$firstSelectedI;
    const firstSelectedItemIdx = items.findIndex(item => Array.isArray(values[item.name]) ? values[item.name].includes(item.value) : values[item.name] === item.value);
    setFocusedItem((_items$firstSelectedI = items[firstSelectedItemIdx]) === null || _items$firstSelectedI === void 0 ? void 0 : _items$firstSelectedI.ref);
  } else {
    const firstItem = items.find(item => !item.disabled);
    if (firstItem !== null && firstItem !== void 0 && firstItem.ref) {
      setFocusedItem(firstItem === null || firstItem === void 0 ? void 0 : firstItem.ref);
    }
  }
};

/***/ }),

/***/ "../dropdown/src/components/DropdownAnchor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../dropdown/src/components/Dropdown/useDropdownContext/index.ts");
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




const DropdownAnchor = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
    disabled,
    children,
    fullWidth,
    onFocus,
    onBlur,
    embed,
    onClick,
    dataTrackTag = 'dropdown_anchor',
    dataTrackValue
  } = _ref;
  const {
    open,
    setOpen
  } = (0,_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_1__/* .usePopoverContext */ .C)();
  const {
    items,
    values,
    searchWhenClosed,
    anchorRef,
    onChange,
    isMultiSelect,
    searchOnKeyPress,
    shouldStopPropagation
  } = (0,_Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
  const hasOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(open);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => anchorRef.current);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (open) {
      hasOpened.current = true;
    }
  }, [open, hasOpened]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (open) {
      const focusedElement = anchorRef.current;
      onFocus === null || onFocus === void 0 || onFocus({
        target: focusedElement
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const {
      key
    } = event;
    const isValidKey = /^[a-zA-Z0-9]$/.test(key);
    if (!isValidKey) {
      return;
    }
    event.preventDefault();
    if (isMultiSelect.current || !searchWhenClosed || open) {
      return;
    }
    const selectedValue = Object.values(values)[0];
    const selectedValueIndex = items.findIndex(item => item.value === selectedValue);
    const listStartIndex = selectedValueIndex === -1 ? 0 : selectedValueIndex;
    const list = [...items.slice(listStartIndex), ...items.slice(0, listStartIndex)];
    for (const item of list) {
      var _itemElement$textCont;
      const itemElement = item.ref.current;
      const isSelected = (item === null || item === void 0 ? void 0 : item.value) === selectedValue;
      const firstLetter = itemElement === null || itemElement === void 0 || (_itemElement$textCont = itemElement.textContent) === null || _itemElement$textCont === void 0 ? void 0 : _itemElement$textCont[0].toLocaleLowerCase();
      if (firstLetter === key.toLowerCase() && !isSelected && !item.disabled) {
        onChange(item);
        break;
      }
    }
  }, [isMultiSelect, items, onChange, open, searchWhenClosed, values]);
  const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const {
      code
    } = event;
    if (code === 'ArrowUp' || code === 'ArrowDown' || code === 'Space') {
      event.preventDefault();
      setOpen(true);
    } else if (searchOnKeyPress) {
      handleSearchKeys(event);
    }
  }, [handleSearchKeys, setOpen, searchOnKeyPress]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const anchorElement = anchorRef.current;
    if (!anchorElement) {
      return;
    }
    if (!open) {
      anchorElement === null || anchorElement === void 0 || anchorElement.addEventListener('keydown', handleKeyDown);
    } else {
      anchorElement.removeEventListener('keydown', handleKeyDown);
    }
    return () => anchorElement.removeEventListener('keydown', handleKeyDown);
  }, [anchorRef, handleKeyDown, open]);
  const handleBlur = event => {
    if (open) {
      return;
    }
    onBlur === null || onBlur === void 0 || onBlur(event);
  };
  const handleFocus = event => {
    if (hasOpened.current) {
      hasOpened.current = false;
      return;
    }
    onFocus === null || onFocus === void 0 || onFocus(event);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    fullWidth: fullWidth,
    disabled: disabled,
    ariaHasPopup: "listbox",
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: e => {
      if (shouldStopPropagation) {
        e.stopPropagation();
      }
      onClick === null || onClick === void 0 || onClick(e);
    },
    embed: embed,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, embed ? anchorProps => (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .renderChildren */ .s)(children, _objectSpread({
    ref: anchorRef
  }, anchorProps)) : (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .renderChildren */ .s)(children, {
    ref: anchorRef
  }));
});
DropdownAnchor.displayName = 'DropdownAnchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownAnchor);
try {
    // @ts-ignore
    DropdownAnchor.displayName = "DropdownAnchor";
    // @ts-ignore
    DropdownAnchor.__docgenInfo = { "description": "", "displayName": "DropdownAnchor", "props": { "children": { "defaultValue": null, "description": "Any node to render that supports getting ref using forwardRef", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "dataTrackTag": { "defaultValue": { value: "dropdown_anchor" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "Whether the anchor is disabled and should not open content", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onBlur": { "defaultValue": null, "description": "Blur event handler", "name": "onBlur", "required": false, "type": { "name": "FocusEventHandler<HTMLDivElement>" } }, "embed": { "defaultValue": null, "description": "Whether to pass all props into child element and avoid rendering wrapper.\nEnsure the child component supports 'aria-expanded' and 'aria-haspopup' as props.", "name": "embed", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "fullWidth": { "defaultValue": null, "description": "", "name": "fullWidth", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onFocus": { "defaultValue": null, "description": "Focus event handler, in some cases will only attach target as parameter", "name": "onFocus", "required": false, "type": { "name": "enum", "value": [{ "value": "FocusEventHandler<HTMLDivElement>" }, { "value": "(event: { target: EventTarget; }) => void" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownAnchor/index.tsx#DropdownAnchor"] = { docgenInfo: DropdownAnchor.__docgenInfo, name: "DropdownAnchor", path: "../dropdown/src/components/DropdownAnchor/index.tsx#DropdownAnchor" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../dropdown/src/components/DropdownContent/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_DropdownContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverContent/index.js
var PopoverContent = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContent/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js
var excludeChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/useMenuContext/index.ts
var useMenuContext = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuContext/index.ts");
// EXTERNAL MODULE: ../dropdown/src/components/Dropdown/useDropdownContext/index.ts
var useDropdownContext = __webpack_require__("../dropdown/src/components/Dropdown/useDropdownContext/index.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverContext/index.js
var PopoverContext = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/useMenuNavigation/constants.ts
var constants = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuNavigation/constants.ts");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/useMenuNavigation/utils.ts
var utils = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuNavigation/utils.ts");
;// ../dropdown/src/components/DropdownMenu/useMenuNavigation/index.ts






const useMenuNavigation = _ref => {
  let {
    items,
    onEnter,
    onTab
  } = _ref;
  const {
    open
  } = (0,PopoverContext/* usePopoverContext */.C)();
  const {
    setFocusedItem,
    focusedItem,
    anchorRef,
    keyboardNavigationLoop,
    searchOnKeyPress,
    headerActionsRef,
    footerActionsRef
  } = (0,useDropdownContext/* default */.A)();
  const getMenuItemIndex = (0,react.useCallback)(toFind => items.findIndex(_ref2 => {
    let {
      ref
    } = _ref2;
    return ref === toFind;
  }), [items]);
  const moveUpFocus = (0,react.useCallback)(() => {
    const index = getMenuItemIndex(focusedItem);
    const startIndex = index === 0 && keyboardNavigationLoop ? items.length - 1 : index;
    for (let i = startIndex; i >= 0; i--) {
      const item = items[i];
      if (!item.disabled && i !== index) {
        setFocusedItem(item.ref);
        break;
      }
    }
  }, [keyboardNavigationLoop, focusedItem, getMenuItemIndex, items, setFocusedItem]);
  const moveDownFocus = (0,react.useCallback)(() => {
    const index = getMenuItemIndex(focusedItem);
    const startIndex = index === items.length - 1 && keyboardNavigationLoop ? 0 : index + 1;
    for (let i = startIndex; i <= items.length - 1; i++) {
      const item = items[i];
      if (!item.disabled) {
        setFocusedItem((0,utils/* getItemToFocus */.f)({
          startIndex,
          items
        }));
        break;
      }
    }
  }, [keyboardNavigationLoop, focusedItem, getMenuItemIndex, items, setFocusedItem]);
  const moveUpFocusThrottled = (0,react.useMemo)(() => (0,lodash.throttle)(moveUpFocus, constants/* NAVIGATION_THROTTLE_DELAY */._), [moveUpFocus]);
  const moveDownFocusThrottled = (0,react.useMemo)(() => (0,lodash.throttle)(moveDownFocus, constants/* NAVIGATION_THROTTLE_DELAY */._), [moveDownFocus]);
  const selectItem = (0,react.useCallback)(event => {
    event.preventDefault();
    const index = getMenuItemIndex(focusedItem);
    if (index > -1) {
      var _item$ref$current, _item$ref$current$cli;
      const item = items[index];
      (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 || (_item$ref$current$cli = _item$ref$current.click) === null || _item$ref$current$cli === void 0 || _item$ref$current$cli.call(_item$ref$current);
    }
  }, [getMenuItemIndex, focusedItem, items]);
  const searchItem = (0,react.useCallback)(event => {
    const {
      key
    } = event;
    const focusedItemIndex = getMenuItemIndex(focusedItem);
    const listStartIndex = focusedItemIndex === -1 ? 0 : focusedItemIndex;
    const list = [...items.slice(listStartIndex), ...items.slice(0, listStartIndex)];
    for (const item of list) {
      var _itemElement$textCont;
      const itemElement = item.ref.current;
      const isFocused = itemElement === (focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.current);
      const firstLetter = itemElement === null || itemElement === void 0 || (_itemElement$textCont = itemElement.textContent) === null || _itemElement$textCont === void 0 ? void 0 : _itemElement$textCont[0].toLocaleLowerCase();
      if (firstLetter === key.toLowerCase() && !isFocused && !item.disabled) {
        setFocusedItem(item.ref);
        break;
      }
    }
  }, [focusedItem, getMenuItemIndex, items, setFocusedItem]);
  const handleKeyDown = (0,react.useCallback)(event => {
    const {
      code,
      shiftKey
    } = event;
    switch (code) {
      case 'Tab':
        {
          event.preventDefault();
          if (shiftKey) {
            if (!headerActionsRef.current) {
              onTab === null || onTab === void 0 || onTab();
              break;
            }
            const firstHeaderAction = headerActionsRef.current.children.item(0);
            firstHeaderAction === null || firstHeaderAction === void 0 || firstHeaderAction.focus();
            setFocusedItem({
              current: null
            });
          } else {
            var _footerActionsRef$cur;
            if (!footerActionsRef.current) {
              onTab === null || onTab === void 0 || onTab();
              break;
            }
            const firstFooterAction = footerActionsRef === null || footerActionsRef === void 0 || (_footerActionsRef$cur = footerActionsRef.current) === null || _footerActionsRef$cur === void 0 ? void 0 : _footerActionsRef$cur.children.item(0);
            firstFooterAction === null || firstFooterAction === void 0 || firstFooterAction.focus();
            setFocusedItem({
              current: null
            });
            break;
          }
          break;
        }
      case 'ArrowUp':
        {
          event.preventDefault();
          moveUpFocusThrottled();
          break;
        }
      case 'ArrowDown':
        {
          event.preventDefault();
          moveDownFocusThrottled();
          break;
        }
      case 'Enter':
        {
          selectItem(event);
          onEnter === null || onEnter === void 0 || onEnter();
          break;
        }
      default:
        {
          if (searchOnKeyPress) {
            searchItem(event);
          }
          break;
        }
    }
  }, [onTab, moveUpFocusThrottled, moveDownFocusThrottled, selectItem, onEnter, searchOnKeyPress, searchItem, headerActionsRef, footerActionsRef, setFocusedItem]);
  (0,react.useEffect)(() => {
    const currentRef = anchorRef.current;
    if (open && currentRef) {
      currentRef.addEventListener('keydown', handleKeyDown);
    } else {
      currentRef === null || currentRef === void 0 || currentRef.removeEventListener('keydown', handleKeyDown);
    }
    return () => currentRef === null || currentRef === void 0 ? void 0 : currentRef.removeEventListener('keydown', handleKeyDown);
  }, [anchorRef, handleKeyDown, open]);
};
/* harmony default export */ const DropdownMenu_useMenuNavigation = (useMenuNavigation);
// EXTERNAL MODULE: ../dropdown/src/components/Dropdown/utils.ts
var Dropdown_utils = __webpack_require__("../dropdown/src/components/Dropdown/utils.ts");
;// ../dropdown/src/components/DropdownContent/useContent/index.tsx






const useContent = () => {
  const {
    setOpen,
    open
  } = (0,PopoverContext/* usePopoverContext */.C)();
  const {
    values,
    anchorRef,
    items,
    searchWhenClosed,
    setFocusedItem,
    isMultiSelect
  } = (0,useDropdownContext/* default */.A)();
  const hasOpened = (0,react.useRef)(open);
  const contentRef = (0,react.useRef)(null);
  const onAnimationStart = () => {
    if (open) {
      if (searchWhenClosed) {
        setTimeout(() => (0,Dropdown_utils/* focusContent */.Y)({
          items,
          setFocusedItem,
          values
        }), 50);
      } else {
        (0,Dropdown_utils/* focusContent */.Y)({
          items,
          setFocusedItem,
          values
        });
      }
    }
  };
  (0,react.useEffect)(() => {
    if (open) {
      hasOpened.current = true;
    } else if (hasOpened.current) {
      var _anchorRef$current;
      hasOpened.current = false;
      (_anchorRef$current = anchorRef.current) === null || _anchorRef$current === void 0 || _anchorRef$current.focus();
    }
  }, [open, hasOpened, anchorRef, setFocusedItem]);
  const addMenuItem = (0,react.useCallback)(menuItem => {
    const menuItemsElements = contentRef.current && Array.from(contentRef.current.querySelectorAll('[role="listitem"]'));
    const updatedMenuItems = [];
    items.push(menuItem);
    items.forEach(item => {
      const itemIndex = menuItemsElements === null || menuItemsElements === void 0 ? void 0 : menuItemsElements.findIndex(child => child === item.ref.current);
      if (itemIndex !== undefined && itemIndex !== -1 && !(0,lodash.isNil)(item)) {
        updatedMenuItems[itemIndex] = item;
      }
    });
    items.splice(0, items.length, ...(0,lodash.compact)(updatedMenuItems));
  }, [items, contentRef]);
  const removeMenuItem = (0,react.useCallback)(item => {
    const index = items.findIndex(_ref => {
      let {
        ref
      } = _ref;
      return ref.current === item.current;
    });
    if (index > -1) {
      items.splice(index, 1);
    }
  }, [items]);
  const closeMenu = (0,react.useCallback)(() => {
    if (!open) {
      return;
    }
    if (!isMultiSelect.current) {
      setOpen === null || setOpen === void 0 || setOpen(false);
    }
  }, [open, isMultiSelect, setOpen]);
  const onTab = (0,react.useCallback)(() => {
    if (!open) {
      return;
    }
    setOpen === null || setOpen === void 0 || setOpen(false);
  }, [open, setOpen]);
  DropdownMenu_useMenuNavigation({
    items,
    onEnter: closeMenu,
    onSpace: closeMenu,
    onTab
  });
  return {
    closeMenu,
    addMenuItem,
    removeMenuItem,
    onAnimationStart,
    contentRef
  };
};
/* harmony default export */ const DropdownContent_useContent = (useContent);
;// ../dropdown/src/components/dropdown/src/components/DropdownContent/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../dropdown/src/components/DropdownContent/styles.ve.css.ts.vanilla.css","source":"Ll8xcWZpamx0MCB7CiAgc2Nyb2xsYmFyLWNvbG9yOiAjOTU5NzlEIHRyYW5zcGFyZW50Owp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../dropdown/src/components/DropdownContent/styles.ve.css.ts

var scrollbarColor = '_1qfijlt0';
;// ../dropdown/src/components/DropdownContent/styles.ts
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

const getStylingProps = _ref => {
  let {
    isDark
  } = _ref;
  return _objectSpread(_objectSpread({
    boxShadow: 'aa',
    paddingY: '2',
    borderRadius: isDark ? '2xl' : 'lg',
    backgroundColor: isDark ? 'black' : 'white'
  }, isDark && {
    borderColor: 'white_20',
    borderWidth: 'sm',
    borderStyle: 'solid'
  }), {}, {
    className: scrollbarColor
  });
};
;// ../dropdown/src/components/DropdownContent/index.tsx
function DropdownContent_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function DropdownContent_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? DropdownContent_ownKeys(Object(t), !0).forEach(function (r) {
      DropdownContent_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DropdownContent_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function DropdownContent_defineProperty(e, r, t) {
  return (r = DropdownContent_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function DropdownContent_toPropertyKey(t) {
  var i = DropdownContent_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function DropdownContent_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}










const DropdownContent = _ref => {
  let {
    children,
    appendToBody,
    disableExitAnimation = false,
    fullWidth,
    closeOnClickOutside,
    zIndex,
    goExperimental = false,
    templateColumns,
    width,
    variant = 'default',
    maxHeight,
    dataTrackTag = 'dropdown',
    dataTrackValue
  } = _ref;
  const {
    searchWhenClosed,
    anchorRef,
    isDark: dropdownIsDark,
    isMobileView
  } = (0,useDropdownContext/* default */.A)();
  const content = DropdownContent_useContent();
  const {
    width: anchorWidth
  } = (0,useElementSize/* default */.A)(anchorRef.current);
  const isDark = goExperimental || dropdownIsDark;
  const isSectionsVariant = variant === 'sections';
  const footer = (0,findChildByType/* findChildByType */.B)(children, 'DropdownFooter');
  const restChildren = (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'DropdownFooter');
  const childrenArray = react.Children.toArray(restChildren);
  const contentDisplay = isSectionsVariant && !isMobileView ? 'grid' : undefined;
  return /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
    fullWidth: isSectionsVariant || fullWidth,
    disablePadding: true,
    renderWhenClosed: searchWhenClosed,
    disableBoxShadow: true,
    appendToBody: appendToBody,
    animationType: "slideFade",
    onAnimationStart: content.onAnimationStart,
    disableAutoFocus: true,
    minWidth: anchorWidth,
    disableExitAnimation: disableExitAnimation,
    closeOnClickOutside: closeOnClickOutside,
    zIndex: zIndex,
    backgroundColor: isDark ? 'transparent' : undefined,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(useMenuContext/* DropdownMenuContext */.c.Provider, {
    value: DropdownContent_objectSpread(DropdownContent_objectSpread({}, content), {}, {
      fullWidth,
      isDark,
      variant
    })
  }, /*#__PURE__*/react.createElement(Container/* default */.A, getStylingProps({
    isDark
  }), /*#__PURE__*/react.createElement(Container/* default */.A, {
    overflowX: "auto"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    gap: isSectionsVariant ? '4' : undefined,
    overflowY: isSectionsVariant ? 'auto' : undefined,
    ref: content.contentRef,
    boxSizing: "borderBox",
    width: isMobileView && isSectionsVariant ? 'fit-content' : width,
    display: contentDisplay,
    maxHeight: maxHeight,
    templateColumns: templateColumns
  }, isSectionsVariant ? react.Children.map(childrenArray, (child, index) => (0,render_children/* renderChildren */.s)(child, {
    withDivider: index < Number(restChildren.length) - 1
  })) : restChildren)), footer)));
};
DropdownContent.id = 'DropdownContent';
DropdownContent.displayName = 'DropdownContent';
/* harmony default export */ const components_DropdownContent = (DropdownContent);
try {
    // @ts-ignore
    DropdownContent.displayName = "DropdownContent";
    // @ts-ignore
    DropdownContent.__docgenInfo = { "description": "", "displayName": "DropdownContent", "props": { "children": { "defaultValue": null, "description": "Any node(s) to render", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "fullWidth": { "defaultValue": null, "description": "", "name": "fullWidth", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "goExperimental": { "defaultValue": { value: "false" }, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' on Dropdown block instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "variant": { "defaultValue": { value: "default" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"sections\"" }] } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "templateColumns": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "templateColumns", "required": false, "type": { "name": "enum", "value": [{ "value": "\"7_cols\"" }, { "value": "\"12_cols\"" }, { "value": "\"15_cols\"" }, { "value": "\"100%\"" }, { "value": "\"25%_75%\"" }, { "value": "\"75%_25%\"" }, { "value": "\"70%_30%\"" }, { "value": "\"30%_70%\"" }, { "value": "\"33%_33%_33%\"" }, { "value": "\"50%_50%\"" }, { "value": "\"25%_25%_25%_25%\"" }, { "value": "\"25%_25%_50%\"" }, { "value": "\"25%_50%_25%\"" }, { "value": "\"50%_25%_25%\"" }, { "value": "\"20%_20%_20%_20%_20%\"" }] } }, "dataTrackTag": { "defaultValue": { value: "dropdown" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "zIndex": { "defaultValue": null, "description": "Set custom zIndex.", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "appendToBody": { "defaultValue": null, "description": "Whether the popover should be appended to the body.", "name": "appendToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableExitAnimation": { "defaultValue": { value: "false" }, "description": "Whether to disable exit animation", "name": "disableExitAnimation", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "closeOnClickOutside": { "defaultValue": null, "description": "Whether to dismiss the Popover on clicking outside of it.", "name": "closeOnClickOutside", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownContent/index.tsx#DropdownContent"] = { docgenInfo: DropdownContent.__docgenInfo, name: "DropdownContent", path: "../dropdown/src/components/DropdownContent/index.tsx#DropdownContent" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../dropdown/src/components/DropdownHeader/DropdownHeaderActions/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
/* harmony import */ var _DropdownMenu_useMenuNavigation_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuNavigation/utils.ts");
/* harmony import */ var _Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../dropdown/src/components/Dropdown/useDropdownContext/index.ts");
const _excluded = ["children", "height", "display"];
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






const DropdownHeaderActions = _ref => {
  let {
      children,
      height = '24px',
      display = 'flex'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    headerActionsRef,
    setFocusedItem,
    items,
    anchorRef
  } = (0,_Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();
  const {
    setOpen
  } = (0,_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_3__/* .usePopoverContext */ .C)();
  const handleKeyDown = (e, child, isFirstAction, isLastAction) => {
    var _child$props, _child$props$onKeyDow;
    if (e.code === 'Tab') {
      if (e.shiftKey && isFirstAction) {
        var _anchorRef$current;
        setOpen(false);
        anchorRef === null || anchorRef === void 0 || (_anchorRef$current = anchorRef.current) === null || _anchorRef$current === void 0 || _anchorRef$current.focus();
        e.preventDefault();
      }
      if (!e.shiftKey && isLastAction) {
        var _anchorRef$current2;
        setFocusedItem((0,_DropdownMenu_useMenuNavigation_utils__WEBPACK_IMPORTED_MODULE_4__/* .getItemToFocus */ .f)({
          startIndex: 0,
          items
        }));
        anchorRef === null || anchorRef === void 0 || (_anchorRef$current2 = anchorRef.current) === null || _anchorRef$current2 === void 0 || _anchorRef$current2.focus();
        e.preventDefault();
      }
    }
    child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 || (_child$props$onKeyDow = _child$props.onKeyDown) === null || _child$props$onKeyDow === void 0 || _child$props$onKeyDow.call(_child$props, e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({
    ref: headerActionsRef,
    display: display,
    height: height
  }, rest), react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, (child, index) => {
    const isFirstAction = index === 0;
    const isLastAction = index === react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) - 1;
    return (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .renderChildren */ .s)(child, {
      onKeyDown: isFirstAction || isLastAction ? e => handleKeyDown(e, child, isFirstAction, isLastAction) : undefined
    });
  }));
};
DropdownHeaderActions.displayName = 'DropdownHeaderActions';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownHeaderActions);
try {
    // @ts-ignore
    DropdownHeaderActions.displayName = "DropdownHeaderActions";
    // @ts-ignore
    DropdownHeaderActions.__docgenInfo = { "description": "", "displayName": "DropdownHeaderActions", "props": { "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"label\"" }, { "value": "\"span\"" }, { "value": "\"a\"" }, { "value": "\"address\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"details\"" }, { "value": "\"div\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"header\"" }, { "value": "\"li\"" }, { "value": "\"main\"" }, { "value": "\"nav\"" }, { "value": "\"section\"" }, { "value": "\"ul\"" }] } }, "centered": { "defaultValue": null, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"heading\"" }, { "value": "\"bodyPrimary\"" }, { "value": "\"bodySecondary\"" }, { "value": "\"linkPrimary\"" }, { "value": "\"linkSecondary\"" }] } }, "fill": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "fill", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "columnGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "rowGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "gap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "boxShadow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "boxShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "borderStyle": { "defaultValue": null, "description": "", "name": "borderStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"dashed\"" }, { "value": "\"solid\"" }] } }, "borderColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "borderColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "borderWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderTopWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderTopWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderRightWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderRightWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderBottomWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderBottomWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderLeftWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderLeftWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "dropShadow": { "defaultValue": null, "description": "", "name": "dropShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "userSelect": { "defaultValue": null, "description": "", "name": "userSelect", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"text\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": { value: "24px" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "outlineWidth": { "defaultValue": null, "description": "Supported values: sm = 1px, md = 2px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "outlineOffset": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, lg = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineOffset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }, { "value": "\"0\"" }] } }, "outlineColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "outlineStyle": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"solid\"" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "pointerEvents": { "defaultValue": null, "description": "", "name": "pointerEvents", "required": false, "type": { "name": "\"none\"" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "opacity": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "opacity", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"0.1\"" }, { "value": "\"0.2\"" }, { "value": "\"0.6\"" }, { "value": "\"0.8\"" }, { "value": "\"0.9\"" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"light\"" }, { "value": "\"inherit\"" }, { "value": "\"normal\"" }, { "value": "\"semibold\"" }] } }, "lineHeight": { "defaultValue": null, "description": "Supported values: b_xxs = 14px, b_xs = 18px, b_sm = 22px, b_md = 24px, b_lg = 26px, b_xl = 28px, b_xxl = 32px,\nh_xxs = 22px, h_xs = 25px, h_sm = 28px, h_md = 32px, h_lg = 36px h_xl = 38px, h_xxl = 48px, h_3xl = 56px, h_4xl = 66px, h_5xl = 74px, h_6xl = 92px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "lineHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "fontSize": { "defaultValue": null, "description": "Supported values: b_xxs = 10px, b_xs = 12px, b_sm = 14px, b_md = 16px, b_lg = 18px, b_xl = 20px, b_xxl = 24px,\nh_xxs = 16px, h_xs = 18px, h_sm = 20px, h_md = 24px, h_lg = 28px h_xl = 32px, h_xxl = 40px, h_3xl = 48px, h_4xl = 56px, h_5xl = 64px, h_6xl = 80px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fontSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"nowrap\"" }, { "value": "\"preWrap\"" }] } }, "wrap": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "wrap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }, { "value": "\"wrapReverse\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignItems": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignItems", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "direction": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"column\"" }, { "value": "\"row\"" }, { "value": "\"rowReverse\"" }, { "value": "\"columnReverse\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "display": { "defaultValue": { value: "flex" }, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownHeader/DropdownHeaderActions/index.tsx#DropdownHeaderActions"] = { docgenInfo: DropdownHeaderActions.__docgenInfo, name: "DropdownHeaderActions", path: "../dropdown/src/components/DropdownHeader/DropdownHeaderActions/index.tsx#DropdownHeaderActions" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../dropdown/src/components/DropdownHeader/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Divider/index.js");
const _excluded = ["children"];
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


const DropdownHeader = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({
    paddingX: "5",
    paddingBottom: "3",
    paddingTop: "1"
  }, rest), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    marginBottom: "2"
  }));
};
DropdownHeader.displayName = 'DropdownHeader';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownHeader);
try {
    // @ts-ignore
    DropdownHeader.displayName = "DropdownHeader";
    // @ts-ignore
    DropdownHeader.__docgenInfo = { "description": "", "displayName": "DropdownHeader", "props": { "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"label\"" }, { "value": "\"span\"" }, { "value": "\"a\"" }, { "value": "\"address\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"details\"" }, { "value": "\"div\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"header\"" }, { "value": "\"li\"" }, { "value": "\"main\"" }, { "value": "\"nav\"" }, { "value": "\"section\"" }, { "value": "\"ul\"" }] } }, "centered": { "defaultValue": null, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"heading\"" }, { "value": "\"bodyPrimary\"" }, { "value": "\"bodySecondary\"" }, { "value": "\"linkPrimary\"" }, { "value": "\"linkSecondary\"" }] } }, "fill": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "fill", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "columnGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "rowGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "gap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "boxShadow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "boxShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "borderStyle": { "defaultValue": null, "description": "", "name": "borderStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"dashed\"" }, { "value": "\"solid\"" }] } }, "borderColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "borderColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "borderWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderTopWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderTopWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderRightWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderRightWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderBottomWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderBottomWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderLeftWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderLeftWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "dropShadow": { "defaultValue": null, "description": "", "name": "dropShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "userSelect": { "defaultValue": null, "description": "", "name": "userSelect", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"text\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "outlineWidth": { "defaultValue": null, "description": "Supported values: sm = 1px, md = 2px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "outlineOffset": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, lg = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineOffset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }, { "value": "\"0\"" }] } }, "outlineColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "outlineStyle": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"solid\"" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "pointerEvents": { "defaultValue": null, "description": "", "name": "pointerEvents", "required": false, "type": { "name": "\"none\"" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "opacity": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "opacity", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"0.1\"" }, { "value": "\"0.2\"" }, { "value": "\"0.6\"" }, { "value": "\"0.8\"" }, { "value": "\"0.9\"" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"light\"" }, { "value": "\"inherit\"" }, { "value": "\"normal\"" }, { "value": "\"semibold\"" }] } }, "lineHeight": { "defaultValue": null, "description": "Supported values: b_xxs = 14px, b_xs = 18px, b_sm = 22px, b_md = 24px, b_lg = 26px, b_xl = 28px, b_xxl = 32px,\nh_xxs = 22px, h_xs = 25px, h_sm = 28px, h_md = 32px, h_lg = 36px h_xl = 38px, h_xxl = 48px, h_3xl = 56px, h_4xl = 66px, h_5xl = 74px, h_6xl = 92px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "lineHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "fontSize": { "defaultValue": null, "description": "Supported values: b_xxs = 10px, b_xs = 12px, b_sm = 14px, b_md = 16px, b_lg = 18px, b_xl = 20px, b_xxl = 24px,\nh_xxs = 16px, h_xs = 18px, h_sm = 20px, h_md = 24px, h_lg = 28px h_xl = 32px, h_xxl = 40px, h_3xl = 48px, h_4xl = 56px, h_5xl = 64px, h_6xl = 80px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fontSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"nowrap\"" }, { "value": "\"preWrap\"" }] } }, "wrap": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "wrap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }, { "value": "\"wrapReverse\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignItems": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignItems", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "direction": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"column\"" }, { "value": "\"row\"" }, { "value": "\"rowReverse\"" }, { "value": "\"columnReverse\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownHeader/index.tsx#DropdownHeader"] = { docgenInfo: DropdownHeader.__docgenInfo, name: "DropdownHeader", path: "../dropdown/src/components/DropdownHeader/index.tsx#DropdownHeader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../dropdown/src/components/DropdownMenu/MenuGroup/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _useMenuGroupContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuGroupContext/index.ts");




const MenuGroup = _ref => {
  let {
    children,
    label = '',
    isMulti = false,
    name,
    hideSelectedIndicator = false,
    dataTrackTag = 'menu_group',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_useMenuGroupContext__WEBPACK_IMPORTED_MODULE_3__/* .MenuGroupContext */ .c.Provider, {
    value: {
      isMulti,
      name,
      hideSelectedIndicator
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    color: "grey_800",
    fontSize: "b_xs",
    marginTop: "2",
    marginBottom: "1.5",
    marginX: "3",
    lineHeight: "b_xs",
    fontWeight: "semibold"
  }, label), children));
};
MenuGroup.id = 'MenuGroup';
MenuGroup.displayName = 'MenuGroup';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuGroup);
try {
    // @ts-ignore
    MenuGroup.displayName = "MenuGroup";
    // @ts-ignore
    MenuGroup.__docgenInfo = { "description": "", "displayName": "MenuGroup", "props": { "children": { "defaultValue": null, "description": "The group nodes", "name": "children", "required": true, "type": { "name": "React.ReactNode" } }, "label": { "defaultValue": { value: "" }, "description": "Title of the group.", "name": "label", "required": false, "type": { "name": "string" } }, "isMulti": { "defaultValue": { value: "false" }, "description": "Whether or not the group is multi or single select", "name": "isMulti", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "name": { "defaultValue": null, "description": "A name as an identifier for the input", "name": "name", "required": false, "type": { "name": "string" } }, "hideSelectedIndicator": { "defaultValue": { value: "false" }, "description": "Whether or not to hide the indicator", "name": "hideSelectedIndicator", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "menu_group" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownMenu/MenuGroup/index.tsx#MenuGroup"] = { docgenInfo: MenuGroup.__docgenInfo, name: "MenuGroup", path: "../dropdown/src/components/DropdownMenu/MenuGroup/index.tsx#MenuGroup" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../dropdown/src/components/DropdownMenu/MenuItem/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DropdownMenu_MenuItem)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Check.js
var Check = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Check.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Checkbox/index.js + 2 modules
var Checkbox = __webpack_require__("../inputs/dist/esm/src/components/Checkbox/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utils.js
var utils = __webpack_require__("../theme/dist/esm/src/atoms/utils.js");
// EXTERNAL MODULE: ../dropdown/src/components/Dropdown/useDropdownContext/index.ts
var useDropdownContext = __webpack_require__("../dropdown/src/components/Dropdown/useDropdownContext/index.ts");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/useMenuContext/index.ts
var useMenuContext = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuContext/index.ts");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/useMenuGroupContext/index.ts
var useMenuGroupContext = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuGroupContext/index.ts");
;// ../dropdown/src/components/DropdownMenu/MenuItem/constants.ts
const DEFAULT_ITEM_NAME = 'item';
;// ../dropdown/src/components/DropdownMenu/MenuItem/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}









const MenuItem = _ref => {
  let {
    children,
    value,
    selectable,
    disabled = false,
    href,
    target,
    rel,
    onClick,
    dataTrackTag = 'menu_item',
    dataTrackValue
  } = _ref;
  const itemRef = (0,react.useRef)(null);
  const inputRef = (0,react.useRef)(null);
  const [isFocused, setIsFocused] = (0,react.useState)(false);
  const {
    onChange,
    values,
    focusedItem,
    setFocusedItem,
    items,
    anchorRef,
    selectedIndicatorPosition,
    shouldStopPropagation
  } = (0,useDropdownContext/* default */.A)();
  const {
    addMenuItem,
    removeMenuItem,
    closeMenu,
    isDark
  } = (0,useMenuContext/* default */.A)();
  const {
    isMulti,
    name = DEFAULT_ITEM_NAME,
    hideSelectedIndicator
  } = (0,useMenuGroupContext/* default */.A)();
  const isChecked = (0,react.useMemo)(() => {
    var _values$name;
    return Boolean(isMulti ? (_values$name = values[name]) === null || _values$name === void 0 ? void 0 : _values$name.includes(value === null || value === void 0 ? void 0 : value.toString()) : values[name] === (value === null || value === void 0 ? void 0 : value.toString()));
  }, [isMulti, values, name, value]);
  const shouldUseAnchorElement = href && !disabled;
  const MenuItemWrapper = shouldUseAnchorElement ? Box/* default */.A : react.Fragment;
  const primaryColor = 'grey_1200';
  const darkPrimaryColor = 'white';
  const disabledColor = 'grey_800';
  const defaultColor = isDark ? darkPrimaryColor : primaryColor;
  const color = disabled ? disabledColor : defaultColor;
  const menuItemWrapperProps = shouldUseAnchorElement ? {
    as: 'a',
    href,
    target,
    rel,
    decoration: {
      default: 'none',
      hover: 'none'
    },
    color: {
      default: color,
      hover: color
    }
  } : {};
  const handleOnMouseEnter = (0,react.useCallback)(() => setFocusedItem(itemRef), [setFocusedItem]);
  const handleOnChange = (0,react.useCallback)(_ref2 => {
    let {
      currentTarget
    } = _ref2;
    return onChange(currentTarget);
  }, [onChange]);
  const inputProps = {
    name,
    value,
    checked: isChecked,
    ref: inputRef,
    onChange: handleOnChange,
    disabled
  };
  const toggleValue = (0,react.useCallback)(() => {
    if (selectable && !disabled) {
      const {
        name,
        value,
        type,
        checked
      } = inputRef.current;
      onChange({
        name,
        value,
        type,
        checked: !checked
      });
    }
  }, [onChange, selectable, disabled]);
  const handleOnClick = (0,react.useCallback)(event => {
    if (disabled) {
      return;
    }
    if (shouldStopPropagation) {
      event.stopPropagation();
    }
    if (MenuItemWrapper === react.Fragment) {
      event.preventDefault();
    }
    closeMenu();
    onClick === null || onClick === void 0 || onClick(event);
    toggleValue();
  }, [MenuItemWrapper, closeMenu, disabled, onClick, shouldStopPropagation, toggleValue]);
  (0,react.useEffect)(() => {
    if (selectable) {
      addMenuItem({
        ref: itemRef,
        type: isMulti ? 'checkbox' : 'radio',
        value: value === null || value === void 0 ? void 0 : value.toString(),
        name,
        disabled,
        toggleValue
      });
    } else {
      addMenuItem({
        ref: itemRef,
        name,
        disabled
      });
    }
    return () => {
      removeMenuItem(itemRef);
    };
  }, [isMulti, selectable, disabled, value, name, addMenuItem, removeMenuItem, toggleValue]);
  (0,react.useEffect)(() => {
    if (itemRef === focusedItem) {
      var _itemRef$current, _itemRef$current2;
      setIsFocused(true);
      const previousElementSibling = itemRef === null || itemRef === void 0 || (_itemRef$current = itemRef.current) === null || _itemRef$current === void 0 ? void 0 : _itemRef$current.previousElementSibling;
      if (focusedItem === items[0].ref && previousElementSibling) {
        previousElementSibling === null || previousElementSibling === void 0 || previousElementSibling.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
        return;
      }
      (_itemRef$current2 = itemRef.current) === null || _itemRef$current2 === void 0 || _itemRef$current2.scrollIntoView({
        block: 'nearest',
        inline: 'nearest'
      });
    } else {
      setIsFocused(false);
    }
  }, [focusedItem, items]);
  const getOptionStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingY: '2',
    paddingX: '3',
    cursor: 'pointer',
    pointerEvents: disabled ? 'none' : undefined
  });
  const focusedBackgroundColor = isDark ? 'white_20' : 'grey_200';
  const borderRadius = isDark ? 'xl' : 'lg';
  return /*#__PURE__*/react.createElement(MenuItemWrapper, menuItemWrapperProps, /*#__PURE__*/react.createElement(Container/* default */.A, {
    fontSize: "b_md",
    as: "li",
    minWidth: "200px",
    borderRadius: borderRadius,
    color: color,
    userSelect: "none",
    backgroundColor: isFocused && !disabled ? focusedBackgroundColor : undefined,
    onMouseEnter: handleOnMouseEnter,
    tabIndex: -1,
    ref: itemRef,
    onClick: handleOnClick,
    onFocus: () => {
      var _anchorRef$current;
      (_anchorRef$current = anchorRef.current) === null || _anchorRef$current === void 0 || _anchorRef$current.focus();
    },
    role: "listitem",
    "aria-disabled": disabled,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, selectable && !isMulti && /*#__PURE__*/react.createElement(Container/* default */.A, _extends({}, getOptionStyles(), {
    as: "label",
    direction: selectedIndicatorPosition === 'right' ? 'rowReverse' : undefined,
    width: "100%"
  }), /*#__PURE__*/react.createElement(Input/* default */.A, _extends({
    visibility: "hidden",
    position: "absolute",
    type: "radio",
    role: "radio"
  }, inputProps)), /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    alignItems: "center",
    height: "16px",
    width: "16px",
    marginRight: "3",
    hidden: hideSelectedIndicator,
    role: "img"
  }, isChecked && /*#__PURE__*/react.createElement(Check/* default */.A, {
    color: primaryColor
  })), /*#__PURE__*/react.createElement(Container/* default */.A, {
    flexGrow: 1
  }, children)), selectable && isMulti && /*#__PURE__*/react.createElement(Checkbox/* default */.A, _extends({
    htmlHidden: hideSelectedIndicator,
    className: (0,utils/* atoms */.Fo)(getOptionStyles()),
    direction: selectedIndicatorPosition === 'right' ? 'rowReverse' : undefined,
    width: "100%"
  }, inputProps), /*#__PURE__*/react.createElement(Container/* default */.A, {
    flexGrow: 1
  }, children)), !selectable && /*#__PURE__*/react.createElement(Container/* default */.A, _extends({}, getOptionStyles(), {
    as: "label"
  }), children)));
};
MenuItem.displayName = 'MenuItem';
/* harmony default export */ const DropdownMenu_MenuItem = (MenuItem);
try {
    // @ts-ignore
    MenuItem.displayName = "MenuItem";
    // @ts-ignore
    MenuItem.__docgenInfo = { "description": "", "displayName": "MenuItem", "props": { "children": { "defaultValue": null, "description": "Any React node or string that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "selectable": { "defaultValue": null, "description": "Whether or not the whole group is selectable.\nit overrides menu and menu group selectable props.", "name": "selectable", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "value": { "defaultValue": null, "description": "An item/option selectable value.", "name": "value", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "onClick": { "defaultValue": null, "description": "On menu item click event handler", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "disabled": { "defaultValue": { value: "false" }, "description": "Whether this menu item is disabled or not.", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "href": { "defaultValue": null, "description": "Turn menu item into a navigation link.", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "Target for navigation link.", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "rel": { "defaultValue": null, "description": "Rel for navigation link.", "name": "rel", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "menu_item" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownMenu/MenuItem/index.tsx#MenuItem"] = { docgenInfo: MenuItem.__docgenInfo, name: "MenuItem", path: "../dropdown/src/components/DropdownMenu/MenuItem/index.tsx#MenuItem" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../dropdown/src/components/DropdownMenu/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _Dropdown_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../dropdown/src/components/Dropdown/utils.ts");
/* harmony import */ var _Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../dropdown/src/components/Dropdown/useDropdownContext/index.ts");
/* harmony import */ var _useMenuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuContext/index.ts");





const DropdownMenu = _ref => {
  let {
    children,
    maxWidth,
    maxHeight,
    height,
    width,
    dataTrackTag = 'dropdown_menu',
    dataTrackValue
  } = _ref;
  const {
    isMultiSelect
  } = (0,_Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const {
    fullWidth,
    variant
  } = (0,_useMenuContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
  isMultiSelect.current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_Dropdown_utils__WEBPACK_IMPORTED_MODULE_2__/* .getIsMultiSelect */ .G)(children), [children]);
  const menuMaxHeight = variant === 'default' ? maxHeight || '248px' : maxHeight;
  const menuMaxWidth = variant === 'default' ? maxWidth || '400px' : maxWidth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    width: fullWidth ? '100%' : width,
    height: height,
    maxWidth: fullWidth ? '100%' : menuMaxWidth,
    maxHeight: menuMaxHeight,
    overflowX: "hidden",
    paddingX: variant === 'default' ? '2' : undefined,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "ul",
    display: "flex",
    direction: "column",
    role: "list",
    gap: isMultiSelect !== null && isMultiSelect !== void 0 && isMultiSelect.current ? '2' : undefined
  }, children));
};
DropdownMenu.id = 'DropdownMenu';
DropdownMenu.displayName = 'DropdownMenu';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownMenu);
try {
    // @ts-ignore
    DropdownMenu.displayName = "DropdownMenu";
    // @ts-ignore
    DropdownMenu.__docgenInfo = { "description": "", "displayName": "DropdownMenu", "props": { "children": { "defaultValue": null, "description": "The menu nodes", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "dataTrackTag": { "defaultValue": { value: "dropdown_menu" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownMenu/index.tsx#DropdownMenu"] = { docgenInfo: DropdownMenu.__docgenInfo, name: "DropdownMenu", path: "../dropdown/src/components/DropdownMenu/index.tsx#DropdownMenu" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../dropdown/src/components/DropdownMenu/useMenuContext/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   c: () => (/* binding */ DropdownMenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const DropdownMenuContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useMenuContext = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('Menu compound components cannot be rendered outside the DropdownMenu component');
  }
  return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMenuContext);

/***/ }),

/***/ "../dropdown/src/components/DropdownMenu/useMenuGroupContext/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   c: () => (/* binding */ MenuGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const MenuGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isMulti: false
});
const useMenuGroupContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuGroupContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMenuGroupContext);

/***/ }),

/***/ "../dropdown/src/components/DropdownMenu/useMenuNavigation/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ NAVIGATION_THROTTLE_DELAY)
/* harmony export */ });
const NAVIGATION_THROTTLE_DELAY = 100;

/***/ }),

/***/ "../dropdown/src/components/DropdownMenu/useMenuNavigation/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ getItemToFocus)
/* harmony export */ });
const getItemToFocus = _ref => {
  let {
    startIndex,
    items
  } = _ref;
  for (let i = startIndex; i <= items.length - 1; i++) {
    const item = items[i];
    if (!item.disabled) {
      return item.ref;
    }
  }
};

/***/ }),

/***/ "../dropdown/src/components/DropdownTrigger/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");




const DropdownTrigger = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    ariaLabel = (0,_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)('dropdown.dropdownTrigger.ariaLabel'),
    'aria-haspopup': ariaHasPopup,
    'aria-expanded': ariaExpanded,
    dataTrackTag = 'dropdown_trigger',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    type: "button",
    "aria-label": ariaLabel,
    shape: "circle",
    ref: ref,
    "aria-haspopup": ariaHasPopup,
    "aria-expanded": ariaExpanded,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    color: "grey_900"
  }));
});
DropdownTrigger.displayName = 'DropdownTrigger';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownTrigger);

/***/ }),

/***/ "../dropdown/src/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BasicSections: () => (/* binding */ BasicSections),
  ButtonAnchor: () => (/* binding */ ButtonAnchor),
  ControlledGroups: () => (/* binding */ ControlledGroups),
  ControlledMultiSelect: () => (/* binding */ ControlledMultiSelect),
  ControlledSingleSelect: () => (/* binding */ ControlledSingleSelect),
  GroupSections: () => (/* binding */ GroupSections),
  Groups: () => (/* binding */ Groups),
  GroupsDark: () => (/* binding */ GroupsDark),
  HideSelectedIndicator: () => (/* binding */ HideSelectedIndicator),
  Link: () => (/* binding */ Link),
  MultiAndSingleSelect: () => (/* binding */ MultiAndSingleSelect),
  MultiAndSingleSelectDark: () => (/* binding */ MultiAndSingleSelectDark),
  MultiSelect: () => (/* binding */ MultiSelect),
  OnClick: () => (/* binding */ OnClick),
  Primary: () => (/* binding */ Primary),
  SearchWhenClosed: () => (/* binding */ SearchWhenClosed),
  SingleSelect: () => (/* binding */ SingleSelect),
  WithDivider: () => (/* binding */ WithDivider),
  WithFooter: () => (/* binding */ WithFooter),
  WithFooterAndHeader: () => (/* binding */ WithFooterAndHeader),
  WithHeader: () => (/* binding */ WithHeader),
  WithIcon: () => (/* binding */ WithIcon),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Facebook.js
var Facebook = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Facebook.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Instagram.js
var Instagram = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Instagram.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Linkedin.js
var Linkedin = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Linkedin.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Heart.js
var Heart = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Heart.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Plus.js
var Plus = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Plus.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/useMenuNavigation/constants.ts
var constants = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuNavigation/constants.ts");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/index.js
var Popover = __webpack_require__("../popover/dist/esm/src/components/Popover/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverContext/index.js
var PopoverContext = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useBreakpoint/index.js + 2 modules
var useBreakpoint = __webpack_require__("../hooks/dist/esm/src/hooks/useBreakpoint/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../dropdown/src/components/Dropdown/useDropdownContext/index.ts
var useDropdownContext = __webpack_require__("../dropdown/src/components/Dropdown/useDropdownContext/index.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// ../dropdown/src/components/Dropdown/useDropdownState/utils.ts

const getValues = (values, defaultValues) => ((0,lodash.isEmpty)(values) ? defaultValues : values) || {};
;// ../dropdown/src/components/Dropdown/useDropdownState/index.ts
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



const useDropdownState = _ref => {
  let {
    defaultValues,
    values: _values,
    onChange: _onChange
  } = _ref;
  const controlled = !(0,lodash.isUndefined)(_values);
  const [values, setValues] = (0,react.useState)(getValues(_values, defaultValues));
  (0,react.useEffect)(() => {
    setValues(getValues(_values, defaultValues));
  }, [defaultValues, _values, setValues]);
  const onChange = (0,react.useCallback)(currentInput => {
    const {
      checked,
      name,
      value,
      type
    } = currentInput;
    let newValue;
    if (type === 'checkbox') {
      if (checked) {
        newValue = _objectSpread(_objectSpread({}, values), {}, {
          [name]: values[name] ? [...values[name], value] : [value]
        });
      } else {
        var _values$name;
        newValue = _objectSpread(_objectSpread({}, values), {}, {
          [name]: (_values$name = values[name]) === null || _values$name === void 0 ? void 0 : _values$name.filter(itemValue => itemValue !== value)
        });
      }
    } else {
      newValue = _objectSpread(_objectSpread({}, values), {}, {
        [name]: value
      });
    }
    if (!controlled) {
      setValues((0,lodash.omitBy)(newValue, lodash.isEmpty));
    }
    _onChange === null || _onChange === void 0 || _onChange(newValue);
  }, [controlled, _onChange, values]);
  return {
    onChange,
    defaultValues,
    values,
    setValues
  };
};
/* harmony default export */ const Dropdown_useDropdownState = (useDropdownState);
;// ../dropdown/src/components/Dropdown/DropdownContextProvider/index.tsx
function DropdownContextProvider_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function DropdownContextProvider_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? DropdownContextProvider_ownKeys(Object(t), !0).forEach(function (r) {
      DropdownContextProvider_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DropdownContextProvider_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function DropdownContextProvider_defineProperty(e, r, t) {
  return (r = DropdownContextProvider_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function DropdownContextProvider_toPropertyKey(t) {
  var i = DropdownContextProvider_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function DropdownContextProvider_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}






const DropdownContextProvider = _ref => {
  let {
    children,
    onChange,
    values,
    defaultValues,
    searchWhenClosed,
    keyboardNavigationLoop,
    searchOnKeyPress,
    selectedIndicatorPosition,
    theme,
    shouldStopPropagation
  } = _ref;
  const [focusedItem, setFocusedItem] = (0,react.useState)({});
  const state = Dropdown_useDropdownState({
    onChange,
    values,
    defaultValues
  });
  const anchorRef = (0,react.useRef)(null);
  const headerActionsRef = (0,react.useRef)(null);
  const footerActionsRef = (0,react.useRef)(null);
  const items = (0,react.useRef)([]).current;
  const isMultiSelect = (0,react.useRef)(null);
  const breakpoint = (0,useBreakpoint/* default */.A)();
  const {
    isMobile
  } = (0,getContext/* default */.A)();
  const isMobileView = breakpoint === 'default' || isMobile;
  const popoverContext = (0,PopoverContext/* usePopoverContext */.C)();
  return /*#__PURE__*/react.createElement(useDropdownContext/* DropdownContext */.r.Provider, {
    value: DropdownContextProvider_objectSpread(DropdownContextProvider_objectSpread({}, state), {}, {
      isMobileView,
      searchWhenClosed,
      anchorRef,
      items,
      focusedItem,
      setFocusedItem,
      keyboardNavigationLoop,
      isMultiSelect,
      searchOnKeyPress,
      selectedIndicatorPosition,
      popoverContext,
      headerActionsRef,
      footerActionsRef,
      isDark: theme === 'dark',
      shouldStopPropagation
    })
  }, children);
};
/* harmony default export */ const Dropdown_DropdownContextProvider = (DropdownContextProvider);
try {
    // @ts-ignore
    DropdownContextProvider.displayName = "DropdownContextProvider";
    // @ts-ignore
    DropdownContextProvider.__docgenInfo = { "description": "", "displayName": "DropdownContextProvider", "props": { "children": { "defaultValue": null, "description": "Any node(s) to render", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "defaultValues": { "defaultValue": null, "description": "Default selected values", "name": "defaultValues", "required": false, "type": { "name": "Values" } }, "values": { "defaultValue": null, "description": "Controlled values", "name": "values", "required": false, "type": { "name": "Values" } }, "onChange": { "defaultValue": null, "description": "On change event handler for accesing values\nfrom outside the menu component.", "name": "onChange", "required": false, "type": { "name": "(values: Values) => void" } }, "searchWhenClosed": { "defaultValue": null, "description": "Enables search when close.\nUse cases: Select", "name": "searchWhenClosed", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "keyboardNavigationLoop": { "defaultValue": null, "description": "whether or not to enable loop navigation", "name": "keyboardNavigationLoop", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "searchOnKeyPress": { "defaultValue": null, "description": "Enables search when a key is pressed,", "name": "searchOnKeyPress", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "selectedIndicatorPosition": { "defaultValue": null, "description": "Checked indicator position.", "name": "selectedIndicatorPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"right\"" }, { "value": "\"left\"" }] } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "shouldStopPropagation": { "defaultValue": null, "description": "", "name": "shouldStopPropagation", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/Dropdown/DropdownContextProvider/index.tsx#DropdownContextProvider"] = { docgenInfo: DropdownContextProvider.__docgenInfo, name: "DropdownContextProvider", path: "../dropdown/src/components/Dropdown/DropdownContextProvider/index.tsx#DropdownContextProvider" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../dropdown/src/components/Dropdown/index.tsx



const Dropdown = _ref => {
  let {
    children,
    onChange,
    defaultValues,
    values,
    searchWhenClosed = false,
    isOpen,
    onOpenChanged,
    initialOpen,
    disableFlip,
    position = 'bottom-start',
    keyboardNavigationLoop = false,
    searchOnKeyPress = true,
    selectedIndicatorPosition = 'left',
    theme = 'light',
    shouldStopPropagation
  } = _ref;
  return /*#__PURE__*/react.createElement(Popover/* default */.A, {
    position: position,
    isOpen: isOpen,
    onOpenChanged: onOpenChanged,
    initialOpen: initialOpen,
    disableFlip: disableFlip
  }, /*#__PURE__*/react.createElement(Dropdown_DropdownContextProvider, {
    onChange: onChange,
    defaultValues: defaultValues,
    values: values,
    searchWhenClosed: searchWhenClosed,
    keyboardNavigationLoop: keyboardNavigationLoop,
    searchOnKeyPress: searchOnKeyPress,
    selectedIndicatorPosition: selectedIndicatorPosition,
    theme: theme,
    shouldStopPropagation: shouldStopPropagation
  }, children));
};
/* harmony default export */ const components_Dropdown = (Dropdown);
try {
    // @ts-ignore
    Dropdown.displayName = "Dropdown";
    // @ts-ignore
    Dropdown.__docgenInfo = { "description": "", "displayName": "Dropdown", "props": { "children": { "defaultValue": null, "description": "Any node(s) to render", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "defaultValues": { "defaultValue": null, "description": "Default selected values", "name": "defaultValues", "required": false, "type": { "name": "Values" } }, "values": { "defaultValue": null, "description": "Controlled values", "name": "values", "required": false, "type": { "name": "Values" } }, "onChange": { "defaultValue": null, "description": "On change event handler for accesing values\nfrom outside the menu component.", "name": "onChange", "required": false, "type": { "name": "(values: Values) => void" } }, "searchWhenClosed": { "defaultValue": { value: "false" }, "description": "Enables search when close.\nUse cases: Select", "name": "searchWhenClosed", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "keyboardNavigationLoop": { "defaultValue": { value: "false" }, "description": "whether or not to enable loop navigation", "name": "keyboardNavigationLoop", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "searchOnKeyPress": { "defaultValue": { value: "true" }, "description": "Enables search when a key is pressed,", "name": "searchOnKeyPress", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "selectedIndicatorPosition": { "defaultValue": { value: "left" }, "description": "Checked indicator position.", "name": "selectedIndicatorPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"right\"" }, { "value": "\"left\"" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "shouldStopPropagation": { "defaultValue": null, "description": "", "name": "shouldStopPropagation", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isOpen": { "defaultValue": null, "description": "Used in controlled mode, whether the Popover is shown.", "name": "isOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "position": { "defaultValue": { value: "bottom-start" }, "description": "From which position to open the Popover.", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "onOpenChanged": { "defaultValue": null, "description": "Callback for Popover opened / closed, first param is boolean that represents the new state of isOpen.", "name": "onOpenChanged", "required": false, "type": { "name": "(value: boolean) => void" } }, "disableFlip": { "defaultValue": null, "description": "Disable flipping behavior on overflow.", "name": "disableFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "initialOpen": { "defaultValue": null, "description": "Used in non-controlled mode.", "name": "initialOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/Dropdown/index.tsx#Dropdown"] = { docgenInfo: Dropdown.__docgenInfo, name: "Dropdown", path: "../dropdown/src/components/Dropdown/index.tsx#Dropdown" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../dropdown/src/components/DropdownAnchor/index.tsx
var DropdownAnchor = __webpack_require__("../dropdown/src/components/DropdownAnchor/index.tsx");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownContent/index.tsx + 5 modules
var DropdownContent = __webpack_require__("../dropdown/src/components/DropdownContent/index.tsx");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/index.tsx
var DropdownMenu = __webpack_require__("../dropdown/src/components/DropdownMenu/index.tsx");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/MenuItem/index.tsx + 1 modules
var MenuItem = __webpack_require__("../dropdown/src/components/DropdownMenu/MenuItem/index.tsx");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Divider/index.js + 2 modules
var Divider = __webpack_require__("../layout_components/dist/esm/src/components/Divider/index.js");
;// ../dropdown/src/components/DropdownMenu/MenuDivider/index.tsx


const MenuDivider = () => /*#__PURE__*/react.createElement(Divider/* default */.A, {
  marginY: "2"
});
/* harmony default export */ const DropdownMenu_MenuDivider = (MenuDivider);
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/MenuGroup/index.tsx
var MenuGroup = __webpack_require__("../dropdown/src/components/DropdownMenu/MenuGroup/index.tsx");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownTrigger/index.tsx
var DropdownTrigger = __webpack_require__("../dropdown/src/components/DropdownTrigger/index.tsx");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownHeader/index.tsx
var DropdownHeader = __webpack_require__("../dropdown/src/components/DropdownHeader/index.tsx");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownHeader/DropdownHeaderActions/index.tsx
var DropdownHeaderActions = __webpack_require__("../dropdown/src/components/DropdownHeader/DropdownHeaderActions/index.tsx");
;// ../dropdown/src/components/dropdown/src/components/DropdownSectionColumn/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../dropdown/src/components/DropdownSectionColumn/styles.ve.css.ts.vanilla.css","source":"LnhjcGdrcTA6YWZ0ZXIgewogIGNvbnRlbnQ6ICIiOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICB0b3A6IDA7CiAgcmlnaHQ6IC05cHg7CiAgd2lkdGg6IDFweDsKICBoZWlnaHQ6IDEwMCU7CiAgYmFja2dyb3VuZC1jb2xvcjogI0RBREJERDsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../dropdown/src/components/DropdownSectionColumn/styles.ve.css.ts

var divider = 'xcpgkq0';
;// ../dropdown/src/components/DropdownSectionColumn/index.tsx





const DropdownSectionColumn = _ref => {
  let {
    children,
    withDivider
  } = _ref;
  const {
    isMobileView
  } = (0,useDropdownContext/* default */.A)();
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    width: "100%",
    direction: isMobileView ? 'column' : 'row',
    paddingX: "2",
    className: withDivider && !isMobileView ? divider : undefined,
    position: "relative"
  }, children, withDivider && isMobileView && /*#__PURE__*/react.createElement(DropdownMenu_MenuDivider, null));
};
DropdownSectionColumn.displayName = 'DropdownSectionColumn';
/* harmony default export */ const components_DropdownSectionColumn = (DropdownSectionColumn);
try {
    // @ts-ignore
    DropdownSectionColumn.displayName = "DropdownSectionColumn";
    // @ts-ignore
    DropdownSectionColumn.__docgenInfo = { "description": "", "displayName": "DropdownSectionColumn", "props": { "withDivider": { "defaultValue": null, "description": "", "name": "withDivider", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownSectionColumn/index.tsx#DropdownSectionColumn"] = { docgenInfo: DropdownSectionColumn.__docgenInfo, name: "DropdownSectionColumn", path: "../dropdown/src/components/DropdownSectionColumn/index.tsx#DropdownSectionColumn" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../dropdown/src/components/DropdownSection/index.tsx


const DropdownSection = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    width: "100%",
    gap: "0",
    direction: "column"
  }, children);
};
DropdownSection.displayName = 'DropdownSection';
/* harmony default export */ const components_DropdownSection = (DropdownSection);
try {
    // @ts-ignore
    DropdownSection.displayName = "DropdownSection";
    // @ts-ignore
    DropdownSection.__docgenInfo = { "description": "", "displayName": "DropdownSection", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownSection/index.tsx#DropdownSection"] = { docgenInfo: DropdownSection.__docgenInfo, name: "DropdownSection", path: "../dropdown/src/components/DropdownSection/index.tsx#DropdownSection" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
;// ../dropdown/src/components/DropdownSection/DropdownSectionHeader/index.tsx


const DropdownSectionHeader = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    color: "grey_1200",
    paddingY: "2",
    paddingX: "4",
    fontSize: "b_md",
    lineHeight: "b_md",
    fontWeight: "semibold"
  }, children);
};
DropdownSectionHeader.displayName = 'DropdownSectionHeader';
/* harmony default export */ const DropdownSection_DropdownSectionHeader = (DropdownSectionHeader);
try {
    // @ts-ignore
    DropdownSectionHeader.displayName = "DropdownSectionHeader";
    // @ts-ignore
    DropdownSectionHeader.__docgenInfo = { "description": "", "displayName": "DropdownSectionHeader", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownSection/DropdownSectionHeader/index.tsx#DropdownSectionHeader"] = { docgenInfo: DropdownSectionHeader.__docgenInfo, name: "DropdownSectionHeader", path: "../dropdown/src/components/DropdownSection/DropdownSectionHeader/index.tsx#DropdownSectionHeader" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../dropdown/src/components/DropdownFooter/index.tsx
const _excluded = ["withDivider", "children"];
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


const DropdownFooter = _ref => {
  let {
      withDivider = false,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(react.Fragment, null, withDivider && /*#__PURE__*/react.createElement(Divider/* default */.A, {
    marginTop: "2"
  }), /*#__PURE__*/react.createElement(Container/* default */.A, _extends({
    paddingTop: "3",
    paddingX: "2",
    paddingBottom: "1",
    width: "100%"
  }, rest), children));
};
DropdownFooter.displayName = 'DropdownFooter';
DropdownFooter.id = 'DropdownFooter';
/* harmony default export */ const components_DropdownFooter = (DropdownFooter);
try {
    // @ts-ignore
    DropdownFooter.displayName = "DropdownFooter";
    // @ts-ignore
    DropdownFooter.__docgenInfo = { "description": "", "displayName": "DropdownFooter", "props": { "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"label\"" }, { "value": "\"span\"" }, { "value": "\"a\"" }, { "value": "\"address\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"details\"" }, { "value": "\"div\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"header\"" }, { "value": "\"li\"" }, { "value": "\"main\"" }, { "value": "\"nav\"" }, { "value": "\"section\"" }, { "value": "\"ul\"" }] } }, "centered": { "defaultValue": null, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"heading\"" }, { "value": "\"bodyPrimary\"" }, { "value": "\"bodySecondary\"" }, { "value": "\"linkPrimary\"" }, { "value": "\"linkSecondary\"" }] } }, "fill": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "fill", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "columnGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "rowGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "gap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "boxShadow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "boxShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "borderStyle": { "defaultValue": null, "description": "", "name": "borderStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"dashed\"" }, { "value": "\"solid\"" }] } }, "borderColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "borderColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "borderWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderTopWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderTopWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderRightWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderRightWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderBottomWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderBottomWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderLeftWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderLeftWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "dropShadow": { "defaultValue": null, "description": "", "name": "dropShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "userSelect": { "defaultValue": null, "description": "", "name": "userSelect", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"text\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "outlineWidth": { "defaultValue": null, "description": "Supported values: sm = 1px, md = 2px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "outlineOffset": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, lg = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineOffset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }, { "value": "\"0\"" }] } }, "outlineColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "outlineStyle": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"solid\"" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "pointerEvents": { "defaultValue": null, "description": "", "name": "pointerEvents", "required": false, "type": { "name": "\"none\"" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "opacity": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "opacity", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"0.1\"" }, { "value": "\"0.2\"" }, { "value": "\"0.6\"" }, { "value": "\"0.8\"" }, { "value": "\"0.9\"" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"light\"" }, { "value": "\"inherit\"" }, { "value": "\"normal\"" }, { "value": "\"semibold\"" }] } }, "lineHeight": { "defaultValue": null, "description": "Supported values: b_xxs = 14px, b_xs = 18px, b_sm = 22px, b_md = 24px, b_lg = 26px, b_xl = 28px, b_xxl = 32px,\nh_xxs = 22px, h_xs = 25px, h_sm = 28px, h_md = 32px, h_lg = 36px h_xl = 38px, h_xxl = 48px, h_3xl = 56px, h_4xl = 66px, h_5xl = 74px, h_6xl = 92px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "lineHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "fontSize": { "defaultValue": null, "description": "Supported values: b_xxs = 10px, b_xs = 12px, b_sm = 14px, b_md = 16px, b_lg = 18px, b_xl = 20px, b_xxl = 24px,\nh_xxs = 16px, h_xs = 18px, h_sm = 20px, h_md = 24px, h_lg = 28px h_xl = 32px, h_xxl = 40px, h_3xl = 48px, h_4xl = 56px, h_5xl = 64px, h_6xl = 80px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fontSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"nowrap\"" }, { "value": "\"preWrap\"" }] } }, "wrap": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "wrap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }, { "value": "\"wrapReverse\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignItems": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignItems", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "direction": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"column\"" }, { "value": "\"row\"" }, { "value": "\"rowReverse\"" }, { "value": "\"columnReverse\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "withDivider": { "defaultValue": { value: "false" }, "description": "", "name": "withDivider", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownFooter/index.tsx#DropdownFooter"] = { docgenInfo: DropdownFooter.__docgenInfo, name: "DropdownFooter", path: "../dropdown/src/components/DropdownFooter/index.tsx#DropdownFooter" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../dropdown/src/components/DropdownMenu/useMenuNavigation/utils.ts
var utils = __webpack_require__("../dropdown/src/components/DropdownMenu/useMenuNavigation/utils.ts");
;// ../dropdown/src/components/DropdownFooter/DropdownFooterActions/index.tsx
const DropdownFooterActions_excluded = ["children", "display", "gap"];
function DropdownFooterActions_extends() {
  return DropdownFooterActions_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, DropdownFooterActions_extends.apply(null, arguments);
}
function DropdownFooterActions_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = DropdownFooterActions_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function DropdownFooterActions_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}






const DropdownFooterActions = _ref => {
  let {
      children,
      display = 'flex',
      gap = '3'
    } = _ref,
    rest = DropdownFooterActions_objectWithoutProperties(_ref, DropdownFooterActions_excluded);
  const {
    footerActionsRef,
    anchorRef,
    setFocusedItem,
    items
  } = (0,useDropdownContext/* default */.A)();
  const {
    setOpen
  } = (0,PopoverContext/* usePopoverContext */.C)();
  const handleKeyDown = (e, child, isFirstAction, isLastAction) => {
    var _child$props, _child$props$onKeyDow;
    if (e.code === 'Tab') {
      if (e.shiftKey && isFirstAction) {
        var _anchorRef$current;
        setFocusedItem((0,utils/* getItemToFocus */.f)({
          startIndex: 0,
          items
        }));
        anchorRef === null || anchorRef === void 0 || (_anchorRef$current = anchorRef.current) === null || _anchorRef$current === void 0 || _anchorRef$current.focus();
        e.preventDefault();
      }
      if (!e.shiftKey && isLastAction) {
        var _anchorRef$current2;
        setOpen(false);
        anchorRef === null || anchorRef === void 0 || (_anchorRef$current2 = anchorRef.current) === null || _anchorRef$current2 === void 0 || _anchorRef$current2.focus();
        e.preventDefault();
      }
    }
    child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 || (_child$props$onKeyDow = _child$props.onKeyDown) === null || _child$props$onKeyDow === void 0 || _child$props$onKeyDow.call(_child$props, e);
  };
  return /*#__PURE__*/react.createElement(Container/* default */.A, DropdownFooterActions_extends({
    ref: footerActionsRef,
    display: display,
    gap: gap,
    flex: 1
  }, rest), react.Children.map(children, (child, index) => {
    const isFirstAction = index === 0;
    const isLastAction = index === react.Children.count(children) - 1;
    return (0,render_children/* renderChildren */.s)(child, {
      onKeyDown: isFirstAction || isLastAction ? e => handleKeyDown(e, child, isFirstAction, isLastAction) : undefined
    });
  }));
};
DropdownFooterActions.displayName = 'DropdownFooterActions';
/* harmony default export */ const DropdownFooter_DropdownFooterActions = (DropdownFooterActions);
try {
    // @ts-ignore
    DropdownFooterActions.displayName = "DropdownFooterActions";
    // @ts-ignore
    DropdownFooterActions.__docgenInfo = { "description": "", "displayName": "DropdownFooterActions", "props": { "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"label\"" }, { "value": "\"span\"" }, { "value": "\"a\"" }, { "value": "\"address\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"details\"" }, { "value": "\"div\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"header\"" }, { "value": "\"li\"" }, { "value": "\"main\"" }, { "value": "\"nav\"" }, { "value": "\"section\"" }, { "value": "\"ul\"" }] } }, "centered": { "defaultValue": null, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"heading\"" }, { "value": "\"bodyPrimary\"" }, { "value": "\"bodySecondary\"" }, { "value": "\"linkPrimary\"" }, { "value": "\"linkSecondary\"" }] } }, "fill": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "fill", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "columnGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "rowGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "gap": { "defaultValue": { value: "3" }, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "boxShadow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "boxShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "borderStyle": { "defaultValue": null, "description": "", "name": "borderStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"dashed\"" }, { "value": "\"solid\"" }] } }, "borderColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "borderColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "borderWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderTopWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderTopWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderRightWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderRightWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderBottomWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderBottomWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderLeftWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderLeftWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "dropShadow": { "defaultValue": null, "description": "", "name": "dropShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "userSelect": { "defaultValue": null, "description": "", "name": "userSelect", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"text\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "outlineWidth": { "defaultValue": null, "description": "Supported values: sm = 1px, md = 2px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "outlineOffset": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, lg = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineOffset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }, { "value": "\"0\"" }] } }, "outlineColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "outlineStyle": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"solid\"" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "pointerEvents": { "defaultValue": null, "description": "", "name": "pointerEvents", "required": false, "type": { "name": "\"none\"" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "opacity": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "opacity", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"0.1\"" }, { "value": "\"0.2\"" }, { "value": "\"0.6\"" }, { "value": "\"0.8\"" }, { "value": "\"0.9\"" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"light\"" }, { "value": "\"inherit\"" }, { "value": "\"normal\"" }, { "value": "\"semibold\"" }] } }, "lineHeight": { "defaultValue": null, "description": "Supported values: b_xxs = 14px, b_xs = 18px, b_sm = 22px, b_md = 24px, b_lg = 26px, b_xl = 28px, b_xxl = 32px,\nh_xxs = 22px, h_xs = 25px, h_sm = 28px, h_md = 32px, h_lg = 36px h_xl = 38px, h_xxl = 48px, h_3xl = 56px, h_4xl = 66px, h_5xl = 74px, h_6xl = 92px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "lineHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "fontSize": { "defaultValue": null, "description": "Supported values: b_xxs = 10px, b_xs = 12px, b_sm = 14px, b_md = 16px, b_lg = 18px, b_xl = 20px, b_xxl = 24px,\nh_xxs = 16px, h_xs = 18px, h_sm = 20px, h_md = 24px, h_lg = 28px h_xl = 32px, h_xxl = 40px, h_3xl = 48px, h_4xl = 56px, h_5xl = 64px, h_6xl = 80px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fontSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"nowrap\"" }, { "value": "\"preWrap\"" }] } }, "wrap": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "wrap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }, { "value": "\"wrapReverse\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignItems": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignItems", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "direction": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"column\"" }, { "value": "\"row\"" }, { "value": "\"rowReverse\"" }, { "value": "\"columnReverse\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "display": { "defaultValue": { value: "flex" }, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropdown/src/components/DropdownFooter/DropdownFooterActions/index.tsx#DropdownFooterActions"] = { docgenInfo: DropdownFooterActions.__docgenInfo, name: "DropdownFooterActions", path: "../dropdown/src/components/DropdownFooter/DropdownFooterActions/index.tsx#DropdownFooterActions" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../dropdown/src/stories/index.stories.tsx
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
function index_stories_extends() {
  return index_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, index_stories_extends.apply(null, arguments);
}










const OPEN_DELAY = 450;
const NAVIGATION_DELAY = constants/* NAVIGATION_THROTTLE_DELAY */._ + 100;
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore']
};
const SearchWhenClosed = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    searchWhenClosed: true
  },
  parameters: {
    docs: {
      source: {
        code: "const [values, setValues] = useState({});\nconst selected = Object.values(values)[0];\n\nreturn (\n  <Stack height=\"350px\" alignItems=\"flexStart\">\n    <Stack marginLeft=\"4\" alignItems=\"center\">\n      <Dropdown onChange={setValues} searchWhenClosed>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuItem value=\"Music\" selectable>\n                Music\n              </MenuItem>\n              <MenuItem value=\"Reading\" selectable>\n                Reading\n              </MenuItem>\n              <MenuItem value=\"Cooking\" selectable>\n                Cooking\n              </MenuItem>\n              <MenuItem value=\"Camping\" selectable>\n                Camping\n              </MenuItem>\n              <MenuItem value=\"Running\" selectable>\n                Running\n              </MenuItem>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n      <Text>{\"Selected Item: \" + selected}</Text>\n    </Stack>\n  </Stack>\n);"
      }
    }
  },
  render: args => {
    const [values, setValues] = (0,react.useState)({});
    const selected = Object.values(values)[0];
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      height: "350px",
      alignItems: "flexStart"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      alignItems: "center",
      marginLeft: "4"
    }, /*#__PURE__*/react.createElement(components_Dropdown, index_stories_extends({
      values: values,
      onChange: setValues
    }, args), /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
      embed: true
    }, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "Music",
      selectable: true
    }, "Music"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "Reading",
      selectable: true
    }, "Reading"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "Cooking",
      selectable: true
    }, "Cooking"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "Camping",
      selectable: true
    }, "Camping"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "Running",
      selectable: true
    }, "Running")))), /*#__PURE__*/react.createElement(Text/* default */.A, null, "Selected Item: ".concat(selected))));
  },
  play: function () {
    var _ref = _asyncToGenerator(function (_ref2) {
      let {
        canvasElement
      } = _ref2;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('m');
        yield dist/* userEvent */.Q4.click(trigger, {
          delay: OPEN_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* userEvent */.Q4.tab();
        yield dist/* userEvent */.Q4.keyboard('c');
        yield dist/* userEvent */.Q4.keyboard('c');
        yield dist/* userEvent */.Q4.click(trigger, {
          delay: OPEN_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x) {
      return _ref.apply(this, arguments);
    };
  }()
};
const WithDivider = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "300px",
    marginLeft: "4"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "ghost"
  }, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Share"), /*#__PURE__*/react.createElement(DropdownMenu_MenuDivider, null), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Edit project details"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Leave project"), /*#__PURE__*/react.createElement(DropdownMenu_MenuDivider, null), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Delete project"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Archive project"))))),
  play: function () {
    var _ref3 = _asyncToGenerator(function (_ref4) {
      let {
        canvasElement
      } = _ref4;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Enter]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x2) {
      return _ref3.apply(this, arguments);
    };
  }()
};
const WithIcon = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "200px",
    marginLeft: "4"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    flexShrink: 0
  }, /*#__PURE__*/react.createElement(Facebook/* default */.A, null)), "Facebook")), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    flexShrink: 0
  }, /*#__PURE__*/react.createElement(Instagram/* default */.A, null)), "Instagram")), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    flexShrink: 0
  }, /*#__PURE__*/react.createElement(Linkedin/* default */.A, null)), "Linkedin")))))),
  play: function () {
    var _ref5 = _asyncToGenerator(function (_ref6) {
      let {
        canvasElement
      } = _ref6;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowUp]', {
          delay: NAVIGATION_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x3) {
      return _ref5.apply(this, arguments);
    };
  }()
};
const Groups = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "350px",
    marginLeft: "4"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group A",
    name: "groupA"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A3")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group B",
    name: "groupB"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B2")))))),
  play: function () {
    var _ref7 = _asyncToGenerator(function (_ref8) {
      let {
        canvasElement
      } = _ref8;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x4) {
      return _ref7.apply(this, arguments);
    };
  }()
};
const GroupsDark = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    theme: 'dark'
  },
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "350px",
    marginLeft: "4",
    backgroundColor: "black",
    padding: "2"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group A",
    name: "groupA"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A3")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group B",
    name: "groupB"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B2")))))),
  play: function () {
    var _ref9 = _asyncToGenerator(function (_ref10) {
      let {
        canvasElement
      } = _ref10;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x5) {
      return _ref9.apply(this, arguments);
    };
  }()
};
const ControlledGroups = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "\nconst [values, setValues] = useState<Values>({});\n\nreturn (\n  <Stack height=\"350px\" marginLeft=\"4\">\n    <Dropdown {...args} values={values} onChange={setValues}>\n      <DropdownAnchor embed>\n        <Button variant=\"ghost\">Click here</Button>\n      </DropdownAnchor>\n      <DropdownContent>\n        <DropdownMenu>\n          <MenuGroup label=\"Group A\" name=\"groupA\" isMulti>\n            <MenuItem value=\"options_a1\" selectable>\n              Option A1\n            </MenuItem>\n            <MenuItem value=\"options_a2\" selectable>\n              Option A2\n            </MenuItem>\n            <MenuItem value=\"options_a3\" selectable>Option A3</MenuItem>\n          </MenuGroup>\n          <MenuGroup label=\"Group B\" name=\"groupB\" isMulti>\n            <MenuItem value=\"options_b1\" selectable>\n              Option B1\n            </MenuItem>\n            <MenuItem value=\"options_b2\" selectable>\n              Option B2\n            </MenuItem>\n          </MenuGroup>\n        </DropdownMenu>\n      </DropdownContent>\n    </Dropdown>\n  </Stack>\n);"
      }
    }
  },
  render: args => {
    const [values, setValues] = (0,react.useState)({});
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      height: "350px",
      marginLeft: "4"
    }, /*#__PURE__*/react.createElement(components_Dropdown, index_stories_extends({}, args, {
      values: values,
      onChange: setValues
    }), /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
      embed: true
    }, /*#__PURE__*/react.createElement(Button/* default */.A, {
      variant: "ghost"
    }, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
      label: "Group A",
      name: "groupA",
      isMulti: true
    }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "options_a1",
      selectable: true
    }, "Option A1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "options_a2",
      selectable: true
    }, "Option A2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "options_a3",
      selectable: true
    }, "Option A3")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
      label: "Group B",
      name: "groupB",
      isMulti: true
    }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "options_b1",
      selectable: true
    }, "Option B1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "options_b2",
      selectable: true
    }, "Option B2"))))));
  },
  play: function () {
    var _ref11 = _asyncToGenerator(function (_ref12) {
      let {
        canvasElement
      } = _ref12;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        yield dist/* userEvent */.Q4.keyboard('[ArrowUp]', {
          delay: NAVIGATION_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        yield dist/* userEvent */.Q4.keyboard('[ArrowUp]', {
          delay: NAVIGATION_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x6) {
      return _ref11.apply(this, arguments);
    };
  }()
};
const SingleSelect = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "150px",
    marginLeft: "4"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline"
  }, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "owner",
    selectable: true
  }, "Owner"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "member",
    selectable: true
  }, "Member"))))),
  play: function () {
    var _ref13 = _asyncToGenerator(function (_ref14) {
      let {
        canvasElement
      } = _ref14;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: NAVIGATION_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x7) {
      return _ref13.apply(this, arguments);
    };
  }()
};
const MultiSelect = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "250px",
    marginLeft: "4"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Hobbies",
    name: "hobbies",
    isMulti: true
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "music",
    selectable: true
  }, "Music"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "reading",
    selectable: true
  }, "Reading"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "travelling",
    selectable: true
  }, "Travelling")))))),
  play: function () {
    var _ref15 = _asyncToGenerator(function (_ref16) {
      let {
        canvasElement
      } = _ref16;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x8) {
      return _ref15.apply(this, arguments);
    };
  }()
};
const MultiAndSingleSelect = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "400px",
    marginLeft: "4"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "ghost"
  }, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Gender",
    name: "gender"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "male",
    selectable: true
  }, "Male"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "female",
    selectable: true
  }, "Female"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "other",
    selectable: true
  }, "Other"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "disabled",
    selectable: true,
    disabled: true
  }, "Disabled Option")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Hobbies",
    name: "hobbies",
    isMulti: true
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "music",
    selectable: true
  }, "Music"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "reading",
    selectable: true,
    disabled: true
  }, "Reading"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "travelling",
    selectable: true
  }, "Travelling")))))),
  play: function () {
    var _ref17 = _asyncToGenerator(function (_ref18) {
      let {
        canvasElement
      } = _ref18;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        yield dist/* userEvent */.Q4.keyboard('[ArrowUp]', {
          delay: NAVIGATION_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x9) {
      return _ref17.apply(this, arguments);
    };
  }()
};
const MultiAndSingleSelectDark = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    theme: 'dark'
  },
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "400px",
    marginLeft: "4",
    backgroundColor: "black",
    padding: "2"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Gender",
    name: "gender"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "male",
    selectable: true
  }, "Male"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "female",
    selectable: true
  }, "Female"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "other",
    selectable: true
  }, "Other"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "disabled",
    selectable: true,
    disabled: true
  }, "Disabled Option")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Hobbies",
    name: "hobbies",
    isMulti: true
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "music",
    selectable: true
  }, "Music"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "reading",
    selectable: true,
    disabled: true
  }, "Reading"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "travelling",
    selectable: true
  }, "Travelling")))))),
  play: function () {
    var _ref19 = _asyncToGenerator(function (_ref20) {
      let {
        canvasElement
      } = _ref20;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        yield dist/* userEvent */.Q4.keyboard('[ArrowUp]', {
          delay: NAVIGATION_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x10) {
      return _ref19.apply(this, arguments);
    };
  }()
};
const ControlledSingleSelect = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [values, setValues] = useState<Values>({});\nreturn (\n<Stack height=\"150px\" marginLeft=\"4\">\n    <Dropdown {...args} values={values} defaultValues={{ item: 'member' }} onChange={setValues}>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n            <DropdownMenu>\n                <MenuItem value=\"owner\" selectable>\n                    Owner\n                </MenuItem>\n                <MenuItem value=\"member\" selectable>\n                    Member\n                </MenuItem>\n            </DropdownMenu>\n        </DropdownContent>\n    </Dropdown>\n</Stack>"
      }
    }
  },
  render: args => {
    const [values, setValues] = (0,react.useState)({});
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      height: "150px",
      marginLeft: "4"
    }, /*#__PURE__*/react.createElement(components_Dropdown, index_stories_extends({}, args, {
      values: values,
      defaultValues: {
        item: 'member'
      },
      onChange: setValues
    }), /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
      embed: true
    }, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "owner",
      selectable: true
    }, "Owner"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "member",
      selectable: true
    }, "Member")))));
  },
  play: function () {
    var _ref21 = _asyncToGenerator(function (_ref22) {
      let {
        canvasElement
      } = _ref22;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[ArrowDown]', {
          delay: NAVIGATION_DELAY
        });
        yield dist/* userEvent */.Q4.keyboard('[Enter]');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x11) {
      return _ref21.apply(this, arguments);
    };
  }()
};
const ControlledMultiSelect = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [values, setValues] = useState<Values>({});\nreturn (\n<Stack height=\"250px\" marginLeft=\"4\">\n    <Dropdown {...args} values={values} onChange={setValues}>\n      <DropdownAnchor embed>\n        <DropdownTrigger />\n      </DropdownAnchor>\n      <DropdownContent>\n        <DropdownMenu>\n          <MenuGroup label=\"Hobbies\" name=\"hobbies\" isMulti>\n            <MenuItem value=\"music\" selectable>\n              Music\n            </MenuItem>\n            <MenuItem value=\"reading\" selectable>\n              Reading\n            </MenuItem>\n            <MenuItem value=\"travelling\" selectable>\n              Travelling\n            </MenuItem>\n          </MenuGroup>\n        </DropdownMenu>\n      </DropdownContent>\n    </Dropdown>\n</Stack>"
      }
    }
  },
  render: args => {
    const [values, setValues] = (0,react.useState)({});
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      height: "250px",
      marginLeft: "4"
    }, /*#__PURE__*/react.createElement(components_Dropdown, index_stories_extends({}, args, {
      values: values,
      onChange: setValues
    }), /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
      embed: true
    }, /*#__PURE__*/react.createElement(DropdownTrigger/* default */.A, null)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
      label: "Hobbies",
      name: "hobbies",
      isMulti: true
    }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "music",
      selectable: true
    }, "Music"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "reading",
      selectable: true
    }, "Reading"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "travelling",
      selectable: true
    }, "Travelling"))))));
  }
};
const Link = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "250px",
    marginLeft: "4"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(DropdownTrigger/* default */.A, null)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Links"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    href: "https://www.fiverr.com/"
  }, "Fiverr"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    href: "https:google.com"
  }, "Google"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    href: "https://fakerjs.dev/",
    disabled: true
  }, "Faker.JS"))))))
};
const OnClick = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "250px",
    marginLeft: "4"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "ghost"
  }, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Alerts"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    onClick: () => alert('First')
  }, "First"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    onClick: () => alert('Second'),
    disabled: true
  }, "Second"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    onClick: () => alert('Third')
  }, "Third"))))))
};
const ButtonAnchor = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    marginLeft: "4",
    height: "200px",
    alignItems: "flexStart"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3")))), /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "like"
  }, /*#__PURE__*/react.createElement(Heart/* default */.A, null))), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3")))))
};
const WithHeader = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    marginLeft: "4",
    height: "250px"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(DropdownTrigger/* default */.A, null)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownHeader/* default */.A, {
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, null, "Your list"), /*#__PURE__*/react.createElement(DropdownHeaderActions/* default */.A, null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    shape: "circle",
    variant: "ghost",
    size: "3xs",
    "aria-label": ""
  }, /*#__PURE__*/react.createElement(Plus/* default */.A, null)))), /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3"))))),
  play: function () {
    var _ref23 = _asyncToGenerator(function (_ref24) {
      let {
        canvasElement
      } = _ref24;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x12) {
      return _ref23.apply(this, arguments);
    };
  }()
};
const BasicSections = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    marginLeft: "4",
    height: "500px"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(DropdownTrigger/* default */.A, null)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, {
    variant: "sections",
    width: "600px",
    templateColumns: {
      default: '100%',
      sm: '50%_50%'
    }
  }, /*#__PURE__*/react.createElement(components_DropdownSectionColumn, null, /*#__PURE__*/react.createElement(components_DropdownSection, null, /*#__PURE__*/react.createElement(DropdownSection_DropdownSectionHeader, null, "Section 1"), /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3")))), /*#__PURE__*/react.createElement(components_DropdownSectionColumn, null, /*#__PURE__*/react.createElement(components_DropdownSection, null, /*#__PURE__*/react.createElement(DropdownSection_DropdownSectionHeader, null, "Section 2"), /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3"))))))),
  play: function () {
    var _ref25 = _asyncToGenerator(function (_ref26) {
      let {
        canvasElement
      } = _ref26;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield src/* takeScreenshot */.w === null || src/* takeScreenshot */.w === void 0 ? void 0 : (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x13) {
      return _ref25.apply(this, arguments);
    };
  }()
};
const GroupSections = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    marginLeft: "4",
    height: "700px"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(DropdownTrigger/* default */.A, null)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, {
    maxHeight: "500px",
    width: "900px",
    variant: "sections",
    templateColumns: {
      default: '100%',
      sm: '33%_33%_33%'
    }
  }, /*#__PURE__*/react.createElement(components_DropdownSectionColumn, null, /*#__PURE__*/react.createElement(components_DropdownSection, null, /*#__PURE__*/react.createElement(DropdownSection_DropdownSectionHeader, null, "Section 1"), /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group A",
    name: "groupA"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A3")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group B",
    name: "groupB"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B3"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B4")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group C",
    name: "groupC"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C3"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C4"))))), /*#__PURE__*/react.createElement(components_DropdownSectionColumn, null, /*#__PURE__*/react.createElement(components_DropdownSection, null, /*#__PURE__*/react.createElement(DropdownSection_DropdownSectionHeader, null, "Section 1"), /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group A",
    name: "groupA"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A3")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group B",
    name: "groupB"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B3"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B4")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group C",
    name: "groupC"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C3"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C4"))))), /*#__PURE__*/react.createElement(components_DropdownSectionColumn, null, /*#__PURE__*/react.createElement(components_DropdownSection, null, /*#__PURE__*/react.createElement(DropdownSection_DropdownSectionHeader, null, "Section 1"), /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group A",
    name: "groupA"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A3")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group B",
    name: "groupB"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B3"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B4")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    label: "Group C",
    name: "groupC"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C3"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option C4"))))), /*#__PURE__*/react.createElement(components_DropdownFooter, {
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react.createElement(DropdownFooter_DropdownFooterActions, {
    direction: {
      default: 'column',
      sm: 'row'
    }
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline",
    flex: 1
  }, "Button 1"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    flex: 1
  }, "Button 2")))))),
  play: function () {
    var _ref27 = _asyncToGenerator(function (_ref28) {
      let {
        canvasElement
      } = _ref28;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield src/* takeScreenshot */.w === null || src/* takeScreenshot */.w === void 0 ? void 0 : (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x14) {
      return _ref27.apply(this, arguments);
    };
  }()
};
const WithFooter = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    marginLeft: "4",
    height: "400px"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(DropdownTrigger/* default */.A, null)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 4"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 5"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 6"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 7"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 8"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 9"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 10")), /*#__PURE__*/react.createElement(components_DropdownFooter, {
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react.createElement(DropdownFooter_DropdownFooterActions, {
    wrap: 'wrap'
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline",
    fullWidth: true
  }, "Button 1"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    fullWidth: true
  }, "Button 2")))))),
  play: function () {
    var _ref29 = _asyncToGenerator(function (_ref30) {
      let {
        canvasElement
      } = _ref30;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        const getFirstFooterButton = () => canvas.getByRole('button', {
          name: 'Button 1'
        });
        const getSecondFooterButton = () => canvas.getByRole('button', {
          name: 'Button 2'
        });
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
        yield (0,src.it)('should tab to first footer button', /*#__PURE__*/_asyncToGenerator(function* () {
          yield dist/* userEvent */.Q4.keyboard('[Tab]', {
            delay: NAVIGATION_DELAY
          });
          yield (0,dist/* expect */.E3)(getFirstFooterButton()).toHaveFocus();
        }));
        yield (0,src.it)('should tab to second footer button', /*#__PURE__*/_asyncToGenerator(function* () {
          yield dist/* userEvent */.Q4.keyboard('[Tab]', {
            delay: NAVIGATION_DELAY
          });
          yield (0,dist/* expect */.E3)(getSecondFooterButton()).toHaveFocus();
        }));
        yield (0,src.it)('should close dropdown and refocus trigger', /*#__PURE__*/_asyncToGenerator(function* () {
          yield dist/* userEvent */.Q4.keyboard('[Tab]', {
            delay: NAVIGATION_DELAY
          });
          yield (0,dist/* expect */.E3)(trigger).toHaveFocus();
        }));
        yield (0,src.it)('should reopen dropdown', /*#__PURE__*/_asyncToGenerator(function* () {
          yield dist/* userEvent */.Q4.keyboard('[Space]', {
            delay: OPEN_DELAY
          });
          yield dist/* userEvent */.Q4.keyboard('[Tab]', {
            delay: NAVIGATION_DELAY
          });
          yield (0,dist/* expect */.E3)(getFirstFooterButton()).toHaveFocus();
        }));
        yield (0,src.it)('should shift+tab from first button should focus last menu item', /*#__PURE__*/_asyncToGenerator(function* () {
          yield dist/* userEvent */.Q4.keyboard('{Shift>}[Tab]{/Shift}', {
            delay: NAVIGATION_DELAY
          });
          yield (0,dist/* expect */.E3)(trigger).toHaveFocus();
        }));
      }();
    });
    return function play(_x15) {
      return _ref29.apply(this, arguments);
    };
  }()
};
const WithFooterAndHeader = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    marginLeft: "4",
    height: "500px"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(DropdownTrigger/* default */.A, null)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownHeader/* default */.A, {
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, null, "Your list"), /*#__PURE__*/react.createElement(DropdownHeaderActions/* default */.A, null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    shape: "circle",
    variant: "ghost",
    size: "3xs",
    "aria-label": ""
  }, /*#__PURE__*/react.createElement(Plus/* default */.A, null)))), /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 4"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 5"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 6"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 7"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 8"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 9"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 10")), /*#__PURE__*/react.createElement(components_DropdownFooter, {
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react.createElement(DropdownFooter_DropdownFooterActions, {
    wrap: 'wrap'
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline",
    fullWidth: true
  }, "Button 1"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    fullWidth: true
  }, "Button 2")))))),
  play: function () {
    var _ref36 = _asyncToGenerator(function (_ref37) {
      let {
        canvasElement
      } = _ref37;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x16) {
      return _ref36.apply(this, arguments);
    };
  }()
};
const HideSelectedIndicator = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "350px",
    marginLeft: "4"
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Click here")), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    hideSelectedIndicator: true,
    label: "Group A",
    name: "groupA",
    isMulti: true
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option A3")), /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    hideSelectedIndicator: true,
    label: "Group B",
    name: "groupB"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option B2")))))),
  play: function () {
    var _ref38 = _asyncToGenerator(function (_ref39) {
      let {
        canvasElement
      } = _ref39;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button');
        trigger.focus();
        yield dist/* userEvent */.Q4.keyboard('[Space]', {
          delay: OPEN_DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x17) {
      return _ref38.apply(this, arguments);
    };
  }()
};
const meta = {
  title: 'Dropdown/Dropdown',
  component: components_Dropdown,
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    marginLeft: "4",
    height: "250px",
    backgroundColor: args.theme === 'dark' ? 'black' : undefined,
    padding: args.theme === 'dark' ? '2' : undefined
  }, /*#__PURE__*/react.createElement(components_Dropdown, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(DropdownTrigger/* default */.A, null)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3")))))
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore']\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
SearchWhenClosed.parameters = {
  ...SearchWhenClosed.parameters,
  docs: {
    ...SearchWhenClosed.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    searchWhenClosed: true\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const [values, setValues] = useState({});\nconst selected = Object.values(values)[0];\n\nreturn (\n  <Stack height=\"350px\" alignItems=\"flexStart\">\n    <Stack marginLeft=\"4\" alignItems=\"center\">\n      <Dropdown onChange={setValues} searchWhenClosed>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuItem value=\"Music\" selectable>\n                Music\n              </MenuItem>\n              <MenuItem value=\"Reading\" selectable>\n                Reading\n              </MenuItem>\n              <MenuItem value=\"Cooking\" selectable>\n                Cooking\n              </MenuItem>\n              <MenuItem value=\"Camping\" selectable>\n                Camping\n              </MenuItem>\n              <MenuItem value=\"Running\" selectable>\n                Running\n              </MenuItem>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n      <Text>{\"Selected Item: \" + selected}</Text>\n    </Stack>\n  </Stack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [values, setValues] = useState({});\n    const selected = Object.values(values)[0];\n    return <Stack height=\"350px\" alignItems=\"flexStart\">\n        <Stack alignItems=\"center\" marginLeft=\"4\">\n          <Dropdown values={values} onChange={setValues} {...args}>\n            <DropdownAnchor embed>\n              <Button>Click here</Button>\n            </DropdownAnchor>\n            <DropdownContent>\n              <DropdownMenu>\n                <MenuItem value=\"Music\" selectable>\n                  Music\n                </MenuItem>\n                <MenuItem value=\"Reading\" selectable>\n                  Reading\n                </MenuItem>\n                <MenuItem value=\"Cooking\" selectable>\n                  Cooking\n                </MenuItem>\n                <MenuItem value=\"Camping\" selectable>\n                  Camping\n                </MenuItem>\n                <MenuItem value=\"Running\" selectable>\n                  Running\n                </MenuItem>\n              </DropdownMenu>\n            </DropdownContent>\n          </Dropdown>\n          <Text>{`Selected Item: ${selected}`}</Text>\n        </Stack>\n      </Stack>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('m');\n    await userEvent.click(trigger, {\n      delay: OPEN_DELAY\n    });\n    await takeScreenshot();\n    await userEvent.tab();\n    await userEvent.keyboard('c');\n    await userEvent.keyboard('c');\n    await userEvent.click(trigger, {\n      delay: OPEN_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...SearchWhenClosed.parameters?.docs?.source
    }
  }
};
WithDivider.parameters = {
  ...WithDivider.parameters,
  docs: {
    ...WithDivider.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack height=\"300px\" marginLeft=\"4\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button variant=\"ghost\">Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuItem>Share</MenuItem>\n            <MenuDivider />\n            <MenuItem>Edit project details</MenuItem>\n            <MenuItem>Leave project</MenuItem>\n            <MenuDivider />\n            <MenuItem>Delete project</MenuItem>\n            <MenuItem>Archive project</MenuItem>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Enter]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...WithDivider.parameters?.docs?.source
    }
  }
};
WithIcon.parameters = {
  ...WithIcon.parameters,
  docs: {
    ...WithIcon.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack height=\"200px\" marginLeft=\"4\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuItem>\n              <Stack alignItems=\"center\">\n                <Stack flexShrink={0}>\n                  <FacebookIcon />\n                </Stack>\n                Facebook\n              </Stack>\n            </MenuItem>\n            <MenuItem>\n              <Stack alignItems=\"center\">\n                <Stack flexShrink={0}>\n                  <InstagramIcon />\n                </Stack>\n                Instagram\n              </Stack>\n            </MenuItem>\n            <MenuItem>\n              <Stack alignItems=\"center\">\n                <Stack flexShrink={0}>\n                  <LinkedinIcon />\n                </Stack>\n                Linkedin\n              </Stack>\n            </MenuItem>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowUp]', {\n      delay: NAVIGATION_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...WithIcon.parameters?.docs?.source
    }
  }
};
Groups.parameters = {
  ...Groups.parameters,
  docs: {
    ...Groups.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack height=\"350px\" marginLeft=\"4\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuGroup label=\"Group A\" name=\"groupA\">\n              <MenuItem>Option A1</MenuItem>\n              <MenuItem>Option A2</MenuItem>\n              <MenuItem>Option A3</MenuItem>\n            </MenuGroup>\n            <MenuGroup label=\"Group B\" name=\"groupB\">\n              <MenuItem>Option B1</MenuItem>\n              <MenuItem>Option B2</MenuItem>\n            </MenuGroup>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...Groups.parameters?.docs?.source
    }
  }
};
GroupsDark.parameters = {
  ...GroupsDark.parameters,
  docs: {
    ...GroupsDark.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    theme: 'dark'\n  },\n  render: args => <Stack height=\"350px\" marginLeft=\"4\" backgroundColor=\"black\" padding=\"2\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuGroup label=\"Group A\" name=\"groupA\">\n              <MenuItem>Option A1</MenuItem>\n              <MenuItem>Option A2</MenuItem>\n              <MenuItem>Option A3</MenuItem>\n            </MenuGroup>\n            <MenuGroup label=\"Group B\" name=\"groupB\">\n              <MenuItem>Option B1</MenuItem>\n              <MenuItem>Option B2</MenuItem>\n            </MenuGroup>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...GroupsDark.parameters?.docs?.source
    }
  }
};
ControlledGroups.parameters = {
  ...ControlledGroups.parameters,
  docs: {
    ...ControlledGroups.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst [values, setValues] = useState<Values>({});\n\nreturn (\n  <Stack height=\"350px\" marginLeft=\"4\">\n    <Dropdown {...args} values={values} onChange={setValues}>\n      <DropdownAnchor embed>\n        <Button variant=\"ghost\">Click here</Button>\n      </DropdownAnchor>\n      <DropdownContent>\n        <DropdownMenu>\n          <MenuGroup label=\"Group A\" name=\"groupA\" isMulti>\n            <MenuItem value=\"options_a1\" selectable>\n              Option A1\n            </MenuItem>\n            <MenuItem value=\"options_a2\" selectable>\n              Option A2\n            </MenuItem>\n            <MenuItem value=\"options_a3\" selectable>Option A3</MenuItem>\n          </MenuGroup>\n          <MenuGroup label=\"Group B\" name=\"groupB\" isMulti>\n            <MenuItem value=\"options_b1\" selectable>\n              Option B1\n            </MenuItem>\n            <MenuItem value=\"options_b2\" selectable>\n              Option B2\n            </MenuItem>\n          </MenuGroup>\n        </DropdownMenu>\n      </DropdownContent>\n    </Dropdown>\n  </Stack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [values, setValues] = useState<Values>({});\n    return <Stack height=\"350px\" marginLeft=\"4\">\n        <Dropdown {...args} values={values} onChange={setValues}>\n          <DropdownAnchor embed>\n            <Button variant=\"ghost\">Click here</Button>\n          </DropdownAnchor>\n          <DropdownContent>\n            <DropdownMenu>\n              <MenuGroup label=\"Group A\" name=\"groupA\" isMulti>\n                <MenuItem value=\"options_a1\" selectable>\n                  Option A1\n                </MenuItem>\n                <MenuItem value=\"options_a2\" selectable>\n                  Option A2\n                </MenuItem>\n                <MenuItem value=\"options_a3\" selectable>\n                  Option A3\n                </MenuItem>\n              </MenuGroup>\n              <MenuGroup label=\"Group B\" name=\"groupB\" isMulti>\n                <MenuItem value=\"options_b1\" selectable>\n                  Option B1\n                </MenuItem>\n                <MenuItem value=\"options_b2\" selectable>\n                  Option B2\n                </MenuItem>\n              </MenuGroup>\n            </DropdownMenu>\n          </DropdownContent>\n        </Dropdown>\n      </Stack>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    await userEvent.keyboard('[ArrowUp]', {\n      delay: NAVIGATION_DELAY\n    });\n    await takeScreenshot();\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    await userEvent.keyboard('[ArrowUp]', {\n      delay: NAVIGATION_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...ControlledGroups.parameters?.docs?.source
    }
  }
};
SingleSelect.parameters = {
  ...SingleSelect.parameters,
  docs: {
    ...SingleSelect.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack height=\"150px\" marginLeft=\"4\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button variant=\"outline\">Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuItem value=\"owner\" selectable>\n              Owner\n            </MenuItem>\n            <MenuItem value=\"member\" selectable>\n              Member\n            </MenuItem>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: NAVIGATION_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...SingleSelect.parameters?.docs?.source
    }
  }
};
MultiSelect.parameters = {
  ...MultiSelect.parameters,
  docs: {
    ...MultiSelect.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack height=\"250px\" marginLeft=\"4\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuGroup label=\"Hobbies\" name=\"hobbies\" isMulti>\n              <MenuItem value=\"music\" selectable>\n                Music\n              </MenuItem>\n              <MenuItem value=\"reading\" selectable>\n                Reading\n              </MenuItem>\n              <MenuItem value=\"travelling\" selectable>\n                Travelling\n              </MenuItem>\n            </MenuGroup>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    await takeScreenshot();\n  }\n}",
      ...MultiSelect.parameters?.docs?.source
    }
  }
};
MultiAndSingleSelect.parameters = {
  ...MultiAndSingleSelect.parameters,
  docs: {
    ...MultiAndSingleSelect.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack height=\"400px\" marginLeft=\"4\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button variant=\"ghost\">Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuGroup label=\"Gender\" name=\"gender\">\n              <MenuItem value=\"male\" selectable>\n                Male\n              </MenuItem>\n              <MenuItem value=\"female\" selectable>\n                Female\n              </MenuItem>\n              <MenuItem value=\"other\" selectable>\n                Other\n              </MenuItem>\n              <MenuItem value=\"disabled\" selectable disabled>\n                Disabled Option\n              </MenuItem>\n            </MenuGroup>\n            <MenuGroup label=\"Hobbies\" name=\"hobbies\" isMulti>\n              <MenuItem value=\"music\" selectable>\n                Music\n              </MenuItem>\n              <MenuItem value=\"reading\" selectable disabled>\n                Reading\n              </MenuItem>\n              <MenuItem value=\"travelling\" selectable>\n                Travelling\n              </MenuItem>\n            </MenuGroup>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    await userEvent.keyboard('[ArrowUp]', {\n      delay: NAVIGATION_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...MultiAndSingleSelect.parameters?.docs?.source
    }
  }
};
MultiAndSingleSelectDark.parameters = {
  ...MultiAndSingleSelectDark.parameters,
  docs: {
    ...MultiAndSingleSelectDark.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    theme: 'dark'\n  },\n  render: args => <Stack height=\"400px\" marginLeft=\"4\" backgroundColor=\"black\" padding=\"2\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuGroup label=\"Gender\" name=\"gender\">\n              <MenuItem value=\"male\" selectable>\n                Male\n              </MenuItem>\n              <MenuItem value=\"female\" selectable>\n                Female\n              </MenuItem>\n              <MenuItem value=\"other\" selectable>\n                Other\n              </MenuItem>\n              <MenuItem value=\"disabled\" selectable disabled>\n                Disabled Option\n              </MenuItem>\n            </MenuGroup>\n            <MenuGroup label=\"Hobbies\" name=\"hobbies\" isMulti>\n              <MenuItem value=\"music\" selectable>\n                Music\n              </MenuItem>\n              <MenuItem value=\"reading\" selectable disabled>\n                Reading\n              </MenuItem>\n              <MenuItem value=\"travelling\" selectable>\n                Travelling\n              </MenuItem>\n            </MenuGroup>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    await userEvent.keyboard('[ArrowUp]', {\n      delay: NAVIGATION_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...MultiAndSingleSelectDark.parameters?.docs?.source
    }
  }
};
ControlledSingleSelect.parameters = {
  ...ControlledSingleSelect.parameters,
  docs: {
    ...ControlledSingleSelect.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [values, setValues] = useState<Values>({});\nreturn (\n<Stack height=\"150px\" marginLeft=\"4\">\n    <Dropdown {...args} values={values} defaultValues={{ item: 'member' }} onChange={setValues}>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n            <DropdownMenu>\n                <MenuItem value=\"owner\" selectable>\n                    Owner\n                </MenuItem>\n                <MenuItem value=\"member\" selectable>\n                    Member\n                </MenuItem>\n            </DropdownMenu>\n        </DropdownContent>\n    </Dropdown>\n</Stack>`\n      }\n    }\n  },\n  render: args => {\n    const [values, setValues] = useState<Values>({});\n    return <Stack height=\"150px\" marginLeft=\"4\">\n        <Dropdown {...args} values={values} defaultValues={{\n        item: 'member'\n      }} onChange={setValues}>\n          <DropdownAnchor embed>\n            <Button>Click here</Button>\n          </DropdownAnchor>\n          <DropdownContent>\n            <DropdownMenu>\n              <MenuItem value=\"owner\" selectable>\n                Owner\n              </MenuItem>\n              <MenuItem value=\"member\" selectable>\n                Member\n              </MenuItem>\n            </DropdownMenu>\n          </DropdownContent>\n        </Dropdown>\n      </Stack>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await userEvent.keyboard('[ArrowDown]', {\n      delay: NAVIGATION_DELAY\n    });\n    await userEvent.keyboard('[Enter]');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...ControlledSingleSelect.parameters?.docs?.source
    }
  }
};
ControlledMultiSelect.parameters = {
  ...ControlledMultiSelect.parameters,
  docs: {
    ...ControlledMultiSelect.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [values, setValues] = useState<Values>({});\nreturn (\n<Stack height=\"250px\" marginLeft=\"4\">\n    <Dropdown {...args} values={values} onChange={setValues}>\n      <DropdownAnchor embed>\n        <DropdownTrigger />\n      </DropdownAnchor>\n      <DropdownContent>\n        <DropdownMenu>\n          <MenuGroup label=\"Hobbies\" name=\"hobbies\" isMulti>\n            <MenuItem value=\"music\" selectable>\n              Music\n            </MenuItem>\n            <MenuItem value=\"reading\" selectable>\n              Reading\n            </MenuItem>\n            <MenuItem value=\"travelling\" selectable>\n              Travelling\n            </MenuItem>\n          </MenuGroup>\n        </DropdownMenu>\n      </DropdownContent>\n    </Dropdown>\n</Stack>`\n      }\n    }\n  },\n  render: args => {\n    const [values, setValues] = useState<Values>({});\n    return <Stack height=\"250px\" marginLeft=\"4\">\n        <Dropdown {...args} values={values} onChange={setValues}>\n          <DropdownAnchor embed>\n            <DropdownTrigger />\n          </DropdownAnchor>\n          <DropdownContent>\n            <DropdownMenu>\n              <MenuGroup label=\"Hobbies\" name=\"hobbies\" isMulti>\n                <MenuItem value=\"music\" selectable>\n                  Music\n                </MenuItem>\n                <MenuItem value=\"reading\" selectable>\n                  Reading\n                </MenuItem>\n                <MenuItem value=\"travelling\" selectable>\n                  Travelling\n                </MenuItem>\n              </MenuGroup>\n            </DropdownMenu>\n          </DropdownContent>\n        </Dropdown>\n      </Stack>;\n  }\n}",
      ...ControlledMultiSelect.parameters?.docs?.source
    }
  }
};
Link.parameters = {
  ...Link.parameters,
  docs: {
    ...Link.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack height=\"250px\" marginLeft=\"4\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <DropdownTrigger />\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuGroup label=\"Links\">\n              <MenuItem href=\"https://www.fiverr.com/\">Fiverr</MenuItem>\n              <MenuItem href=\"https:google.com\">Google</MenuItem>\n              <MenuItem href=\"https://fakerjs.dev/\" disabled>\n                Faker.JS\n              </MenuItem>\n            </MenuGroup>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>\n}",
      ...Link.parameters?.docs?.source
    }
  }
};
OnClick.parameters = {
  ...OnClick.parameters,
  docs: {
    ...OnClick.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack height=\"250px\" marginLeft=\"4\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button variant=\"ghost\">Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuGroup label=\"Alerts\">\n              <MenuItem onClick={() => alert('First')}>First</MenuItem>\n              <MenuItem onClick={() => alert('Second')} disabled>\n                Second\n              </MenuItem>\n              <MenuItem onClick={() => alert('Third')}>Third</MenuItem>\n            </MenuGroup>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>\n}",
      ...OnClick.parameters?.docs?.source
    }
  }
};
ButtonAnchor.parameters = {
  ...ButtonAnchor.parameters,
  docs: {
    ...ButtonAnchor.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack marginLeft=\"4\" height=\"200px\" alignItems=\"flexStart\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuItem>Option 1</MenuItem>\n            <MenuItem>Option 2</MenuItem>\n            <MenuItem>Option 3</MenuItem>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n      <Dropdown {...args}>\n        <DropdownAnchor>\n          <IconButton aria-label=\"like\">\n            <HeartIcon />\n          </IconButton>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuItem>Option 1</MenuItem>\n            <MenuItem>Option 2</MenuItem>\n            <MenuItem>Option 3</MenuItem>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>\n}",
      ...ButtonAnchor.parameters?.docs?.source
    }
  }
};
WithHeader.parameters = {
  ...WithHeader.parameters,
  docs: {
    ...WithHeader.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack marginLeft=\"4\" height=\"250px\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <DropdownTrigger />\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownHeader display=\"flex\" alignItems=\"center\" justifyContent=\"spaceBetween\">\n            <Text>Your list</Text>\n            <DropdownHeaderActions>\n              <IconButton shape=\"circle\" variant=\"ghost\" size=\"3xs\" aria-label=\"\">\n                <PlusIcon />\n              </IconButton>\n            </DropdownHeaderActions>\n          </DropdownHeader>\n          <DropdownMenu>\n            <MenuItem>Option 1</MenuItem>\n            <MenuItem>Option 2</MenuItem>\n            <MenuItem>Option 3</MenuItem>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...WithHeader.parameters?.docs?.source
    }
  }
};
BasicSections.parameters = {
  ...BasicSections.parameters,
  docs: {
    ...BasicSections.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack marginLeft=\"4\" height=\"500px\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <DropdownTrigger />\n        </DropdownAnchor>\n        <DropdownContent variant=\"sections\" width=\"600px\" templateColumns={{\n        default: '100%',\n        sm: '50%_50%'\n      }}>\n          <DropdownSectionColumn>\n            <DropdownSection>\n              <DropdownSectionHeader>Section 1</DropdownSectionHeader>\n              <DropdownMenu>\n                <MenuItem>Option 1</MenuItem>\n                <MenuItem>Option 2</MenuItem>\n                <MenuItem>Option 3</MenuItem>\n              </DropdownMenu>\n            </DropdownSection>\n          </DropdownSectionColumn>\n          <DropdownSectionColumn>\n            <DropdownSection>\n              <DropdownSectionHeader>Section 2</DropdownSectionHeader>\n              <DropdownMenu>\n                <MenuItem>Option 1</MenuItem>\n                <MenuItem>Option 2</MenuItem>\n                <MenuItem>Option 3</MenuItem>\n              </DropdownMenu>\n            </DropdownSection>\n          </DropdownSectionColumn>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await takeScreenshot?.();\n  }\n}",
      ...BasicSections.parameters?.docs?.source
    }
  }
};
GroupSections.parameters = {
  ...GroupSections.parameters,
  docs: {
    ...GroupSections.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack marginLeft=\"4\" height=\"700px\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <DropdownTrigger />\n        </DropdownAnchor>\n        <DropdownContent maxHeight=\"500px\" width=\"900px\" variant=\"sections\" templateColumns={{\n        default: '100%',\n        sm: '33%_33%_33%'\n      }}>\n          <DropdownSectionColumn>\n            <DropdownSection>\n              <DropdownSectionHeader>Section 1</DropdownSectionHeader>\n              <DropdownMenu>\n                <MenuGroup label=\"Group A\" name=\"groupA\">\n                  <MenuItem>Option A1</MenuItem>\n                  <MenuItem>Option A2</MenuItem>\n                  <MenuItem>Option A3</MenuItem>\n                </MenuGroup>\n                <MenuGroup label=\"Group B\" name=\"groupB\">\n                  <MenuItem>Option B1</MenuItem>\n                  <MenuItem>Option B2</MenuItem>\n                  <MenuItem>Option B3</MenuItem>\n                  <MenuItem>Option B4</MenuItem>\n                </MenuGroup>\n                <MenuGroup label=\"Group C\" name=\"groupC\">\n                  <MenuItem>Option C1</MenuItem>\n                  <MenuItem>Option C2</MenuItem>\n                  <MenuItem>Option C3</MenuItem>\n                  <MenuItem>Option C4</MenuItem>\n                </MenuGroup>\n              </DropdownMenu>\n            </DropdownSection>\n          </DropdownSectionColumn>\n          <DropdownSectionColumn>\n            <DropdownSection>\n              <DropdownSectionHeader>Section 1</DropdownSectionHeader>\n              <DropdownMenu>\n                <MenuGroup label=\"Group A\" name=\"groupA\">\n                  <MenuItem>Option A1</MenuItem>\n                  <MenuItem>Option A2</MenuItem>\n                  <MenuItem>Option A3</MenuItem>\n                </MenuGroup>\n                <MenuGroup label=\"Group B\" name=\"groupB\">\n                  <MenuItem>Option B1</MenuItem>\n                  <MenuItem>Option B2</MenuItem>\n                  <MenuItem>Option B3</MenuItem>\n                  <MenuItem>Option B4</MenuItem>\n                </MenuGroup>\n                <MenuGroup label=\"Group C\" name=\"groupC\">\n                  <MenuItem>Option C1</MenuItem>\n                  <MenuItem>Option C2</MenuItem>\n                  <MenuItem>Option C3</MenuItem>\n                  <MenuItem>Option C4</MenuItem>\n                </MenuGroup>\n              </DropdownMenu>\n            </DropdownSection>\n          </DropdownSectionColumn>\n          <DropdownSectionColumn>\n            <DropdownSection>\n              <DropdownSectionHeader>Section 1</DropdownSectionHeader>\n              <DropdownMenu>\n                <MenuGroup label=\"Group A\" name=\"groupA\">\n                  <MenuItem>Option A1</MenuItem>\n                  <MenuItem>Option A2</MenuItem>\n                  <MenuItem>Option A3</MenuItem>\n                </MenuGroup>\n                <MenuGroup label=\"Group B\" name=\"groupB\">\n                  <MenuItem>Option B1</MenuItem>\n                  <MenuItem>Option B2</MenuItem>\n                  <MenuItem>Option B3</MenuItem>\n                  <MenuItem>Option B4</MenuItem>\n                </MenuGroup>\n                <MenuGroup label=\"Group C\" name=\"groupC\">\n                  <MenuItem>Option C1</MenuItem>\n                  <MenuItem>Option C2</MenuItem>\n                  <MenuItem>Option C3</MenuItem>\n                  <MenuItem>Option C4</MenuItem>\n                </MenuGroup>\n              </DropdownMenu>\n            </DropdownSection>\n          </DropdownSectionColumn>\n          <DropdownFooter display=\"flex\" alignItems=\"center\" justifyContent=\"spaceBetween\">\n            <DropdownFooterActions direction={{\n            default: 'column',\n            sm: 'row'\n          }}>\n              <Button variant=\"outline\" flex={1}>\n                Button 1\n              </Button>\n              <Button flex={1}>Button 2</Button>\n            </DropdownFooterActions>\n          </DropdownFooter>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await takeScreenshot?.();\n  }\n}",
      ...GroupSections.parameters?.docs?.source
    }
  }
};
WithFooter.parameters = {
  ...WithFooter.parameters,
  docs: {
    ...WithFooter.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <StoryStack marginLeft=\"4\" height=\"400px\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <DropdownTrigger />\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuItem>Option 1</MenuItem>\n            <MenuItem>Option 2</MenuItem>\n            <MenuItem>Option 3</MenuItem>\n            <MenuItem>Option 4</MenuItem>\n            <MenuItem>Option 5</MenuItem>\n            <MenuItem>Option 6</MenuItem>\n            <MenuItem>Option 7</MenuItem>\n            <MenuItem>Option 8</MenuItem>\n            <MenuItem>Option 9</MenuItem>\n            <MenuItem>Option 10</MenuItem>\n          </DropdownMenu>\n          <DropdownFooter display=\"flex\" alignItems=\"center\" justifyContent=\"spaceBetween\">\n            <DropdownFooterActions wrap={'wrap'}>\n              <Button variant=\"outline\" fullWidth>\n                Button 1\n              </Button>\n              <Button fullWidth>Button 2</Button>\n            </DropdownFooterActions>\n          </DropdownFooter>\n        </DropdownContent>\n      </Dropdown>\n    </StoryStack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    const getFirstFooterButton = () => canvas.getByRole('button', {\n      name: 'Button 1'\n    });\n    const getSecondFooterButton = () => canvas.getByRole('button', {\n      name: 'Button 2'\n    });\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await takeScreenshot();\n    await it('should tab to first footer button', async () => {\n      await userEvent.keyboard('[Tab]', {\n        delay: NAVIGATION_DELAY\n      });\n      await expect(getFirstFooterButton()).toHaveFocus();\n    });\n    await it('should tab to second footer button', async () => {\n      await userEvent.keyboard('[Tab]', {\n        delay: NAVIGATION_DELAY\n      });\n      await expect(getSecondFooterButton()).toHaveFocus();\n    });\n    await it('should close dropdown and refocus trigger', async () => {\n      await userEvent.keyboard('[Tab]', {\n        delay: NAVIGATION_DELAY\n      });\n      await expect(trigger).toHaveFocus();\n    });\n    await it('should reopen dropdown', async () => {\n      await userEvent.keyboard('[Space]', {\n        delay: OPEN_DELAY\n      });\n      await userEvent.keyboard('[Tab]', {\n        delay: NAVIGATION_DELAY\n      });\n      await expect(getFirstFooterButton()).toHaveFocus();\n    });\n    await it('should shift+tab from first button should focus last menu item', async () => {\n      await userEvent.keyboard('{Shift>}[Tab]{/Shift}', {\n        delay: NAVIGATION_DELAY\n      });\n      await expect(trigger).toHaveFocus();\n    });\n  }\n}",
      ...WithFooter.parameters?.docs?.source
    }
  }
};
WithFooterAndHeader.parameters = {
  ...WithFooterAndHeader.parameters,
  docs: {
    ...WithFooterAndHeader.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <StoryStack marginLeft=\"4\" height=\"500px\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <DropdownTrigger />\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownHeader display=\"flex\" alignItems=\"center\" justifyContent=\"spaceBetween\">\n            <Text>Your list</Text>\n            <DropdownHeaderActions>\n              <IconButton shape=\"circle\" variant=\"ghost\" size=\"3xs\" aria-label=\"\">\n                <PlusIcon />\n              </IconButton>\n            </DropdownHeaderActions>\n          </DropdownHeader>\n          <DropdownMenu>\n            <MenuItem>Option 1</MenuItem>\n            <MenuItem>Option 2</MenuItem>\n            <MenuItem>Option 3</MenuItem>\n            <MenuItem>Option 4</MenuItem>\n            <MenuItem>Option 5</MenuItem>\n            <MenuItem>Option 6</MenuItem>\n            <MenuItem>Option 7</MenuItem>\n            <MenuItem>Option 8</MenuItem>\n            <MenuItem>Option 9</MenuItem>\n            <MenuItem>Option 10</MenuItem>\n          </DropdownMenu>\n          <DropdownFooter display=\"flex\" alignItems=\"center\" justifyContent=\"spaceBetween\">\n            <DropdownFooterActions wrap={'wrap'}>\n              <Button variant=\"outline\" fullWidth>\n                Button 1\n              </Button>\n              <Button fullWidth>Button 2</Button>\n            </DropdownFooterActions>\n          </DropdownFooter>\n        </DropdownContent>\n      </Dropdown>\n    </StoryStack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...WithFooterAndHeader.parameters?.docs?.source
    }
  }
};
HideSelectedIndicator.parameters = {
  ...HideSelectedIndicator.parameters,
  docs: {
    ...HideSelectedIndicator.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Stack height=\"350px\" marginLeft=\"4\">\n      <Dropdown {...args}>\n        <DropdownAnchor embed>\n          <Button>Click here</Button>\n        </DropdownAnchor>\n        <DropdownContent>\n          <DropdownMenu>\n            <MenuGroup hideSelectedIndicator label=\"Group A\" name=\"groupA\" isMulti>\n              <MenuItem>Option A1</MenuItem>\n              <MenuItem>Option A2</MenuItem>\n              <MenuItem>Option A3</MenuItem>\n            </MenuGroup>\n            <MenuGroup hideSelectedIndicator label=\"Group B\" name=\"groupB\">\n              <MenuItem>Option B1</MenuItem>\n              <MenuItem>Option B2</MenuItem>\n            </MenuGroup>\n          </DropdownMenu>\n        </DropdownContent>\n      </Dropdown>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button');\n    trigger.focus();\n    await userEvent.keyboard('[Space]', {\n      delay: OPEN_DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...HideSelectedIndicator.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","SearchWhenClosed","WithDivider","WithIcon","Groups","GroupsDark","ControlledGroups","SingleSelect","MultiSelect","MultiAndSingleSelect","MultiAndSingleSelectDark","ControlledSingleSelect","ControlledMultiSelect","Link","OnClick","ButtonAnchor","WithHeader","BasicSections","GroupSections","WithFooter","WithFooterAndHeader","HideSelectedIndicator"];

/***/ }),

/***/ "../highlights/src/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ErrorHighlights: () => (/* binding */ ErrorHighlights),
  NeutralHighlights: () => (/* binding */ NeutralHighlights),
  Primary: () => (/* binding */ Primary),
  SuccessHighlights: () => (/* binding */ SuccessHighlights),
  WarningHighlights: () => (/* binding */ WarningHighlights),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryGrid/index.js
var StoryGrid = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryGrid/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Business.js
var Business = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Business.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../highlights/src/components/Highlight/constants.ts
const TYPES = {
  NEUTRAL: 'neutral',
  INFO: 'info',
  WARNING: 'warning',
  SUCCESS: 'success',
  ERROR: 'error',
  ai: 'ai'
};
const COLORS_BY_TYPE = {
  neutral: {
    color: 'grey_1200',
    backgroundColor: 'grey_200'
  },
  info: {
    color: 'blue_1100',
    backgroundColor: 'blue_100'
  },
  warning: {
    color: 'yellow_1200',
    backgroundColor: 'yellow_100'
  },
  success: {
    color: 'green_1100',
    backgroundColor: 'green_100'
  },
  error: {
    color: 'red_1100',
    backgroundColor: 'red_100'
  },
  ai: {
    color: 'purple_1100',
    backgroundColor: 'purple_100'
  }
};
;// ../highlights/src/components/Highlight/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}



const Highlight = _ref => {
  let {
    type = 'neutral',
    children,
    className
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, _extends({
    borderRadius: "md",
    display: "flex",
    gap: "1.5",
    paddingY: "1.5",
    paddingX: "2.5",
    width: "fit-content",
    fontSize: "b_sm",
    lineHeight: "b_xs",
    fontWeight: "semibold",
    userSelect: "none",
    className: className
  }, COLORS_BY_TYPE[type]), children);
};
Highlight.displayName = 'Highlight';
/* harmony default export */ const components_Highlight = (Highlight);
try {
    // @ts-ignore
    Highlight.displayName = "Highlight";
    // @ts-ignore
    Highlight.__docgenInfo = { "description": "", "displayName": "Highlight", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "type": { "defaultValue": { value: "neutral" }, "description": "The Highlight type.", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"neutral\"" }, { "value": "\"info\"" }, { "value": "\"success\"" }, { "value": "\"error\"" }, { "value": "\"warning\"" }, { "value": "\"ai\"" }] } }, "className": { "defaultValue": null, "description": "@ignore", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../highlights/src/components/Highlight/index.tsx#Highlight"] = { docgenInfo: Highlight.__docgenInfo, name: "Highlight", path: "../highlights/src/components/Highlight/index.tsx#Highlight" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
;// ../highlights/src/components/helpers/IconWrapper/index.tsx


const IconWrapper = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    flexShrink: 0,
    height: 18
  }, children);
};
IconWrapper.displayName = 'HighlightIconWrapper';
/* harmony default export */ const helpers_IconWrapper = (IconWrapper);
try {
    // @ts-ignore
    HighlightIconWrapper.displayName = "HighlightIconWrapper";
    // @ts-ignore
    HighlightIconWrapper.__docgenInfo = { "description": "", "displayName": "HighlightIconWrapper", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../highlights/src/components/helpers/IconWrapper/index.tsx#HighlightIconWrapper"] = { docgenInfo: HighlightIconWrapper.__docgenInfo, name: "HighlightIconWrapper", path: "../highlights/src/components/helpers/IconWrapper/index.tsx#HighlightIconWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../highlights/src/components/WorkedWithHighlight/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const WorkedWithHighlight = _ref => {
  let {
    numberOfClients
  } = _ref;
  return /*#__PURE__*/react.createElement(components_Highlight, {
    type: "neutral"
  }, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(Business/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "highlights.workedWith",
    params: {
      num_clients: numberOfClients
    }
  }));
};
WorkedWithHighlight.displayName = 'WorkedWithHighlight';
/* harmony default export */ const components_WorkedWithHighlight = (WorkedWithHighlight);
try {
    // @ts-ignore
    WorkedWithHighlight.displayName = "WorkedWithHighlight";
    // @ts-ignore
    WorkedWithHighlight.__docgenInfo = { "description": "", "displayName": "WorkedWithHighlight", "props": { "numberOfClients": { "defaultValue": null, "description": "", "name": "numberOfClients", "required": true, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../highlights/src/components/WorkedWithHighlight/index.tsx#WorkedWithHighlight"] = { docgenInfo: WorkedWithHighlight.__docgenInfo, name: "WorkedWithHighlight", path: "../highlights/src/components/WorkedWithHighlight/index.tsx#WorkedWithHighlight" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Users.js
var Users = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Users.js");
;// ../highlights/src/components/CollaboratedHighlight/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const CollaboratedHighlight = _ref => {
  let {
    username,
    moreUsers
  } = _ref;
  return /*#__PURE__*/react.createElement(components_Highlight, {
    type: "neutral"
  }, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(Users/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "highlights.collaborated",
    params: {
      first_username: username,
      more_users: moreUsers
    }
  }));
};
CollaboratedHighlight.displayName = 'CollaboratedHighlight';
/* harmony default export */ const components_CollaboratedHighlight = (CollaboratedHighlight);
try {
    // @ts-ignore
    CollaboratedHighlight.displayName = "CollaboratedHighlight";
    // @ts-ignore
    CollaboratedHighlight.__docgenInfo = { "description": "", "displayName": "CollaboratedHighlight", "props": { "username": { "defaultValue": null, "description": "", "name": "username", "required": true, "type": { "name": "string" } }, "moreUsers": { "defaultValue": null, "description": "", "name": "moreUsers", "required": true, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../highlights/src/components/CollaboratedHighlight/index.tsx#CollaboratedHighlight"] = { docgenInfo: CollaboratedHighlight.__docgenInfo, name: "CollaboratedHighlight", path: "../highlights/src/components/CollaboratedHighlight/index.tsx#CollaboratedHighlight" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Lightning.js
var Lightning = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Lightning.js");
;// ../highlights/src/components/HighlyResponsiveHighlight/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const HighlyResponsiveHighlight = () => /*#__PURE__*/react.createElement(components_Highlight, {
  type: "neutral"
}, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(Lightning/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "highlights.highlyResponsive"
}));
HighlyResponsiveHighlight.displayName = 'HighlyResponsiveHighlight';
/* harmony default export */ const components_HighlyResponsiveHighlight = (HighlyResponsiveHighlight);
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Heart.js
var Heart = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Heart.js");
;// ../highlights/src/components/FreelancerSavedHighlight/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const FreelancerSavedHighlight = _ref => {
  let {
    teammate
  } = _ref;
  return /*#__PURE__*/react.createElement(components_Highlight, {
    type: "neutral"
  }, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(Heart/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "highlights.freelancerSaved",
    params: {
      teammate
    }
  }));
};
FreelancerSavedHighlight.displayName = 'FreelancerSavedHighlight';
/* harmony default export */ const components_FreelancerSavedHighlight = (FreelancerSavedHighlight);
try {
    // @ts-ignore
    FreelancerSavedHighlight.displayName = "FreelancerSavedHighlight";
    // @ts-ignore
    FreelancerSavedHighlight.__docgenInfo = { "description": "", "displayName": "FreelancerSavedHighlight", "props": { "teammate": { "defaultValue": null, "description": "", "name": "teammate", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../highlights/src/components/FreelancerSavedHighlight/index.tsx#FreelancerSavedHighlight"] = { docgenInfo: FreelancerSavedHighlight.__docgenInfo, name: "FreelancerSavedHighlight", path: "../highlights/src/components/FreelancerSavedHighlight/index.tsx#FreelancerSavedHighlight" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Returning.js
var Returning = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Returning.js");
;// ../highlights/src/components/ClientsBackHighlight/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const ClientsBackHighlight = () => /*#__PURE__*/react.createElement(components_Highlight, {
  type: "neutral"
}, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(Returning/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "highlights.clientsBack"
}));
ClientsBackHighlight.displayName = 'ClientsBackHighlight';
/* harmony default export */ const components_ClientsBackHighlight = (ClientsBackHighlight);
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Globe.js
var Globe = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Globe.js");
;// ../highlights/src/components/SpeaksHighlight/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const SpeaksHighlight = _ref => {
  let {
    language
  } = _ref;
  return /*#__PURE__*/react.createElement(components_Highlight, {
    type: "neutral"
  }, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(Globe/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "highlights.speaks",
    params: {
      language
    }
  }));
};
SpeaksHighlight.displayName = 'SpeaksHighlight';
/* harmony default export */ const components_SpeaksHighlight = (SpeaksHighlight);
try {
    // @ts-ignore
    SpeaksHighlight.displayName = "SpeaksHighlight";
    // @ts-ignore
    SpeaksHighlight.__docgenInfo = { "description": "", "displayName": "SpeaksHighlight", "props": { "language": { "defaultValue": null, "description": "", "name": "language", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../highlights/src/components/SpeaksHighlight/index.tsx#SpeaksHighlight"] = { docgenInfo: SpeaksHighlight.__docgenInfo, name: "SpeaksHighlight", path: "../highlights/src/components/SpeaksHighlight/index.tsx#SpeaksHighlight" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../highlights/src/components/RankedTopHighlight/index.tsx




/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const RankedTopHighlight = _ref => {
  let {
    percent
  } = _ref;
  return /*#__PURE__*/react.createElement(components_Highlight, {
    type: "neutral"
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "highlights.rankedTop",
    params: {
      percent
    }
  }));
};
RankedTopHighlight.displayName = 'RankedTopHighlight';
/* harmony default export */ const components_RankedTopHighlight = (RankedTopHighlight);
try {
    // @ts-ignore
    RankedTopHighlight.displayName = "RankedTopHighlight";
    // @ts-ignore
    RankedTopHighlight.__docgenInfo = { "description": "", "displayName": "RankedTopHighlight", "props": { "percent": { "defaultValue": null, "description": "", "name": "percent", "required": true, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../highlights/src/components/RankedTopHighlight/index.tsx#RankedTopHighlight"] = { docgenInfo: RankedTopHighlight.__docgenInfo, name: "RankedTopHighlight", path: "../highlights/src/components/RankedTopHighlight/index.tsx#RankedTopHighlight" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Block.js
var Block = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Block.js");
;// ../highlights/src/components/OutsidePreferredHours/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const OutsidePreferredHours = () => /*#__PURE__*/react.createElement(components_Highlight, null, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(Block/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "highlights.outsidePreferredHours"
}));
OutsidePreferredHours.displayName = 'OutsidePreferredHours';
/* harmony default export */ const components_OutsidePreferredHours = (OutsidePreferredHours);
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/CheckCircle.js
var CheckCircle = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckCircle.js");
;// ../highlights/src/components/WithinPreferredHours/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const WithinPreferredHours = () => /*#__PURE__*/react.createElement(components_Highlight, {
  type: "success"
}, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(CheckCircle/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "highlights.withinPreferredHours"
}));
WithinPreferredHours.displayName = 'WithinPreferredHours';
/* harmony default export */ const components_WithinPreferredHours = (WithinPreferredHours);
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Remove.js
var Remove = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Remove.js");
;// ../highlights/src/components/NotActiveHighlight/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const NotActiveHighlight = () => /*#__PURE__*/react.createElement(components_Highlight, {
  type: "error"
}, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(Remove/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "highlights.notActive"
}));
NotActiveHighlight.displayName = 'NotActiveHighlight';
/* harmony default export */ const components_NotActiveHighlight = (NotActiveHighlight);
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Calendar.js
var Calendar = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Calendar.js");
;// ../highlights/src/components/UnavailableHighlight/index.tsx






/**
 * @deprecated Please use Highlight from @fiverr-private/data_display package.
 */
const UnavailableHighlight = _ref => {
  let {
    date
  } = _ref;
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
  return /*#__PURE__*/react.createElement(components_Highlight, {
    type: "warning"
  }, /*#__PURE__*/react.createElement(helpers_IconWrapper, null, /*#__PURE__*/react.createElement(Calendar/* default */.A, null)), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "highlights.unavailable",
    params: {
      date: formattedDate
    }
  }));
};
UnavailableHighlight.displayName = 'UnavailableHighlight';
/* harmony default export */ const components_UnavailableHighlight = (UnavailableHighlight);
try {
    // @ts-ignore
    UnavailableHighlight.displayName = "UnavailableHighlight";
    // @ts-ignore
    UnavailableHighlight.__docgenInfo = { "description": "", "displayName": "UnavailableHighlight", "props": { "date": { "defaultValue": null, "description": "", "name": "date", "required": true, "type": { "name": "Date" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../highlights/src/components/UnavailableHighlight/index.tsx#UnavailableHighlight"] = { docgenInfo: UnavailableHighlight.__docgenInfo, name: "UnavailableHighlight", path: "../highlights/src/components/UnavailableHighlight/index.tsx#UnavailableHighlight" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../highlights/src/stories/index.stories.tsx




const defaultArgs = {
  children: 'Highlight'
};
const Primary = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Highlight base component for creating highlights in Penta (not exported)'
      }
    }
  }
};
const NeutralHighlights = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "33%_33%_33%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_WorkedWithHighlight, {
    numberOfClients: 10
  }), /*#__PURE__*/react.createElement(components_CollaboratedHighlight, {
    username: "Billie Eilish",
    moreUsers: 4
  }), /*#__PURE__*/react.createElement(components_HighlyResponsiveHighlight, null), /*#__PURE__*/react.createElement(components_FreelancerSavedHighlight, {
    teammate: "Billie Eilish"
  }), /*#__PURE__*/react.createElement(components_ClientsBackHighlight, null), /*#__PURE__*/react.createElement(components_SpeaksHighlight, {
    language: "Spanish"
  }), /*#__PURE__*/react.createElement(components_RankedTopHighlight, {
    percent: 2
  }), /*#__PURE__*/react.createElement(components_OutsidePreferredHours, null))
};
const SuccessHighlights = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "33%_33%_33%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_WithinPreferredHours, null))
};
const ErrorHighlights = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "33%_33%_33%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_NotActiveHighlight, null))
};
const WarningHighlights = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "33%_33%_33%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_UnavailableHighlight, {
    date: new Date(2023, 10, 9)
  }))
};
const meta = {
  args: defaultArgs,
  title: 'Highlights / ❌ Highlights [DEPRECATED]',
  component: components_Highlight
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Highlight base component for creating highlights in Penta (not exported)'\n      }\n    }\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
NeutralHighlights.parameters = {
  ...NeutralHighlights.parameters,
  docs: {
    ...NeutralHighlights.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"33%_33%_33%\" gap=\"4\" alignItems=\"center\">\n      <WorkedWithHighlight numberOfClients={10} />\n      <CollaboratedHighlight username=\"Billie Eilish\" moreUsers={4} />\n      <HighlyResponsiveHighlight />\n      <FreelancerSavedHighlight teammate=\"Billie Eilish\" />\n      <ClientsBackHighlight />\n      <SpeaksHighlight language=\"Spanish\" />\n      <RankedTopHighlight percent={2} />\n      <OutsidePreferredHours />\n    </StoryGrid>\n}",
      ...NeutralHighlights.parameters?.docs?.source
    }
  }
};
SuccessHighlights.parameters = {
  ...SuccessHighlights.parameters,
  docs: {
    ...SuccessHighlights.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"33%_33%_33%\" gap=\"4\" alignItems=\"center\">\n      <WithinPreferredHours />\n    </StoryGrid>\n}",
      ...SuccessHighlights.parameters?.docs?.source
    }
  }
};
ErrorHighlights.parameters = {
  ...ErrorHighlights.parameters,
  docs: {
    ...ErrorHighlights.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"33%_33%_33%\" gap=\"4\" alignItems=\"center\">\n      <NotActiveHighlight />\n    </StoryGrid>\n}",
      ...ErrorHighlights.parameters?.docs?.source
    }
  }
};
WarningHighlights.parameters = {
  ...WarningHighlights.parameters,
  docs: {
    ...WarningHighlights.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"33%_33%_33%\" gap=\"4\" alignItems=\"center\">\n      <UnavailableHighlight date={new Date(2023, 10, 9)} />\n    </StoryGrid>\n}",
      ...WarningHighlights.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","NeutralHighlights","SuccessHighlights","ErrorHighlights","WarningHighlights"];

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useBreakpoint/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ hooks_useBreakpoint)
});

// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
;// ../hooks/dist/esm/src/hooks/useMediaQueries/index.js
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

const useMediaQueries = queries => {
  const [matches, setMatches] = (0,react.useState)(() => _objectSpread(_objectSpread({}, Object.fromEntries(Object.keys(queries).map(name => [name, false]))), {}, {
    default: false
  }));
  const queriesString = JSON.stringify(queries);
  (0,react.useEffect)(() => {
    const controller = new AbortController();
    const parsedQueries = JSON.parse(queriesString);
    const {
      defaultMatches,
      currentMatches,
      mediaQueries
    } = Object.entries(parsedQueries).reduce((acc, _ref) => {
      let [name, query] = _ref;
      const mediaQuery = window.matchMedia(query);
      acc.defaultMatches[name] = false;
      acc.currentMatches[name] = mediaQuery.matches;
      acc.mediaQueries.push([name, mediaQuery]);
      return acc;
    }, {
      defaultMatches: {},
      currentMatches: {},
      mediaQueries: []
    });
    setMatches(_objectSpread(_objectSpread({}, currentMatches), {}, {
      default: true
    }));
    mediaQueries.forEach(_ref2 => {
      let [name, mediaQuery] = _ref2;
      mediaQuery.addEventListener('change', _ref3 => {
        let {
          matches
        } = _ref3;
        setMatches(prev => _objectSpread(_objectSpread(_objectSpread({}, defaultMatches), prev), {}, {
          [name]: matches
        }));
      }, {
        signal: controller.signal
      });
    });
    return () => {
      controller.abort();
    };
  }, [
  // since "queries" is an object,
  // but useEffect uses `Object.is` for its comparison algorithm: https://react.dev/reference/react/useEffect#parameters,
  // we need to convert it to be a primitive value
  // to skip unnecessary MediaQueryList instance re-creations
  queriesString]);
  return matches;
};
/* harmony default export */ const hooks_useMediaQueries = (useMediaQueries);
;// ../hooks/dist/esm/src/hooks/useBreakpoints/index.js


const useBreakpoints = () => hooks_useMediaQueries(themeVars/* breakpoints */.fi);
/* harmony default export */ const hooks_useBreakpoints = (useBreakpoints);
;// ../hooks/dist/esm/src/hooks/useBreakpoint/index.js

/**
 * Returns the current breakpoint on CSR according to `@fiverr-private/theme` breakpoints definition.
 * Returns 'default' during SSR and for screens smaller than the sm breakpoint.
 */
const useBreakpoint = () => {
  const {
    sm,
    md,
    lg,
    xl,
    xxl,
    default: isDefault
  } = hooks_useBreakpoints();
  if (!isDefault) {
    return undefined;
  }
  if (xxl) {
    return 'xxl';
  }
  if (xl) {
    return 'xl';
  }
  if (lg) {
    return 'lg';
  }
  if (md) {
    return 'md';
  }
  if (sm) {
    return 'sm';
  }
  return 'default';
};
/* harmony default export */ const hooks_useBreakpoint = (useBreakpoint);

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useElementSize/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ "../layout_components/dist/esm/src/components/Center/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../statuses/src/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ErrorStatuses: () => (/* binding */ ErrorStatuses),
  InfoStatuses: () => (/* binding */ InfoStatuses),
  NeutralStatuses: () => (/* binding */ NeutralStatuses),
  Primary: () => (/* binding */ Primary),
  SpecialStatuses: () => (/* binding */ SpecialStatuses),
  SuccessStatuses: () => (/* binding */ SuccessStatuses),
  WarningStatuses: () => (/* binding */ WarningStatuses),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryGrid/index.js
var StoryGrid = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryGrid/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../statuses/src/components/Status/constants.ts
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
    color: 'pink_1100',
    backgroundColor: 'pink_200'
  }
};
;// ../statuses/src/components/Status/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}



const Status = _ref => {
  let {
    type = 'neutral',
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, _extends({
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
    userSelect: "none"
  }, COLORS_BY_TYPE[type]), children);
};
Status.displayName = 'Status';
/* harmony default export */ const components_Status = (Status);
try {
    // @ts-ignore
    Status.displayName = "Status";
    // @ts-ignore
    Status.__docgenInfo = { "description": "", "displayName": "Status", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "type": { "defaultValue": { value: "neutral" }, "description": "The Status type.", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"neutral\"" }, { "value": "\"info\"" }, { "value": "\"success\"" }, { "value": "\"error\"" }, { "value": "\"special\"" }, { "value": "\"warning\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../statuses/src/components/Status/index.tsx#Status"] = { docgenInfo: Status.__docgenInfo, name: "Status", path: "../statuses/src/components/Status/index.tsx#Status" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../statuses/src/components/CanceledStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const CanceledStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "neutral"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.canceled"
}));
CanceledStatus.displayName = 'CanceledStatus';
/* harmony default export */ const components_CanceledStatus = (CanceledStatus);
;// ../statuses/src/components/PausedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const PausedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "neutral"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.paused"
}));
PausedStatus.displayName = 'PausedStatus';
/* harmony default export */ const components_PausedStatus = (PausedStatus);
;// ../statuses/src/components/ArchivedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const ArchivedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "neutral"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.archived"
}));
ArchivedStatus.displayName = 'ArchivedStatus';
/* harmony default export */ const components_ArchivedStatus = (ArchivedStatus);
;// ../statuses/src/components/NotPromotedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const NotPromotedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "neutral"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.notPromoted"
}));
NotPromotedStatus.displayName = 'NotPromotedStatus';
/* harmony default export */ const components_NotPromotedStatus = (NotPromotedStatus);
;// ../statuses/src/components/DraftStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const DraftStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "neutral"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.draft"
}));
DraftStatus.displayName = 'DraftStatus';
/* harmony default export */ const components_DraftStatus = (DraftStatus);
;// ../statuses/src/components/InactiveStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const InactiveStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "neutral"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.inactive"
}));
InactiveStatus.displayName = 'InactiveStatus';
/* harmony default export */ const components_InactiveStatus = (InactiveStatus);
;// ../statuses/src/components/DisabledStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const DisabledStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "neutral"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.disabled"
}));
DisabledStatus.displayName = 'DisabledStatus';
/* harmony default export */ const components_DisabledStatus = (DisabledStatus);
;// ../statuses/src/components/InProgressStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const InProgressStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.inProgress"
}));
InProgressStatus.displayName = 'InProgressStatus';
/* harmony default export */ const components_InProgressStatus = (InProgressStatus);
;// ../statuses/src/components/InRevisionStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const InRevisionStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.inRevision"
}));
InRevisionStatus.displayName = 'InRevisionStatus';
/* harmony default export */ const components_InRevisionStatus = (InRevisionStatus);
;// ../statuses/src/components/LiveStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const LiveStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.live"
}));
LiveStatus.displayName = 'LiveStatus';
/* harmony default export */ const components_LiveStatus = (LiveStatus);
;// ../statuses/src/components/InConversationStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const InConversationStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.inConversation"
}));
InConversationStatus.displayName = 'InConversationStatus';
/* harmony default export */ const components_InConversationStatus = (InConversationStatus);
;// ../statuses/src/components/ResponseSentStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const ResponseSentStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.responseSent"
}));
ResponseSentStatus.displayName = 'ResponseSentStatus';
/* harmony default export */ const components_ResponseSentStatus = (ResponseSentStatus);
;// ../statuses/src/components/AcceptedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const AcceptedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.accepted"
}));
AcceptedStatus.displayName = 'AcceptedStatus';
/* harmony default export */ const components_AcceptedStatus = (AcceptedStatus);
;// ../statuses/src/components/RequestedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const RequestedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.requested"
}));
RequestedStatus.displayName = 'RequestedStatus';
/* harmony default export */ const components_RequestedStatus = (RequestedStatus);
;// ../statuses/src/components/SentStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const SentStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.sent"
}));
SentStatus.displayName = 'SentStatus';
/* harmony default export */ const components_SentStatus = (SentStatus);
;// ../statuses/src/components/ProcessingStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const ProcessingStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.processing"
}));
ProcessingStatus.displayName = 'ProcessingStatus';
/* harmony default export */ const components_ProcessingStatus = (ProcessingStatus);
;// ../statuses/src/components/InReviewStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const InReviewStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.inReview"
}));
InReviewStatus.displayName = 'InReviewStatus';
/* harmony default export */ const components_InReviewStatus = (InReviewStatus);
;// ../statuses/src/components/EditInProgressStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const EditInProgressStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.editInProgress"
}));
EditInProgressStatus.displayName = 'EditInProgressStatus';
/* harmony default export */ const components_EditInProgressStatus = (EditInProgressStatus);
;// ../statuses/src/components/RetrievingStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const RetrievingStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "info"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.retrieving"
}));
RetrievingStatus.displayName = 'RetrievingStatus';
/* harmony default export */ const components_RetrievingStatus = (RetrievingStatus);
;// ../statuses/src/components/CompletedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const CompletedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "success"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.completed"
}));
CompletedStatus.displayName = 'CompletedStatus';
/* harmony default export */ const components_CompletedStatus = (CompletedStatus);
;// ../statuses/src/components/ActiveStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const ActiveStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "success"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.active"
}));
ActiveStatus.displayName = 'ActiveStatus';
/* harmony default export */ const components_ActiveStatus = (ActiveStatus);
;// ../statuses/src/components/PromotedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const PromotedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "success"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.promoted"
}));
PromotedStatus.displayName = 'PromotedStatus';
/* harmony default export */ const components_PromotedStatus = (PromotedStatus);
;// ../statuses/src/components/HiredStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const HiredStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "success"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.hired"
}));
HiredStatus.displayName = 'HiredStatus';
/* harmony default export */ const components_HiredStatus = (HiredStatus);
;// ../statuses/src/components/DoneStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const DoneStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "success"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.done"
}));
DoneStatus.displayName = 'DoneStatus';
/* harmony default export */ const components_DoneStatus = (DoneStatus);
;// ../statuses/src/components/ClearStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const ClearStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "success"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.clear"
}));
ClearStatus.displayName = 'ClearStatus';
/* harmony default export */ const components_ClearStatus = (ClearStatus);
;// ../statuses/src/components/SignedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const SignedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "success"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.signed"
}));
SignedStatus.displayName = 'SignedStatus';
/* harmony default export */ const components_SignedStatus = (SignedStatus);
;// ../statuses/src/components/LowRiskStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const LowRiskStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "success"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.lowRisk"
}));
LowRiskStatus.displayName = 'LowRiskStatus';
/* harmony default export */ const components_LowRiskStatus = (LowRiskStatus);
;// ../statuses/src/components/LateStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const LateStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.late"
}));
LateStatus.displayName = 'LateStatus';
/* harmony default export */ const components_LateStatus = (LateStatus);
;// ../statuses/src/components/VeryLateStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const VeryLateStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.veryLate"
}));
VeryLateStatus.displayName = 'VeryLateStatus';
/* harmony default export */ const components_VeryLateStatus = (VeryLateStatus);
;// ../statuses/src/components/RejectedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const RejectedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.rejected"
}));
RejectedStatus.displayName = 'RejectedStatus';
/* harmony default export */ const components_RejectedStatus = (RejectedStatus);
;// ../statuses/src/components/DisputeStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const DisputeStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.dispute"
}));
DisputeStatus.displayName = 'DisputeStatus';
/* harmony default export */ const components_DisputeStatus = (DisputeStatus);
;// ../statuses/src/components/DeniedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const DeniedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.denied"
}));
DeniedStatus.displayName = 'DeniedStatus';
/* harmony default export */ const components_DeniedStatus = (DeniedStatus);
;// ../statuses/src/components/PaymentFailedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const PaymentFailedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.paymentFailed"
}));
PaymentFailedStatus.displayName = 'PaymentFailedStatus';
/* harmony default export */ const components_PaymentFailedStatus = (PaymentFailedStatus);
;// ../statuses/src/components/InDebtStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const InDebtStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.inDebt"
}));
InDebtStatus.displayName = 'InDebtStatus';
/* harmony default export */ const components_InDebtStatus = (InDebtStatus);
;// ../statuses/src/components/SuspendedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const SuspendedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.suspended"
}));
SuspendedStatus.displayName = 'SuspendedStatus';
/* harmony default export */ const components_SuspendedStatus = (SuspendedStatus);
;// ../statuses/src/components/FailedProcessingStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const FailedProcessingStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.failedProcessing"
}));
FailedProcessingStatus.displayName = 'FailedProcessingStatus';
/* harmony default export */ const components_FailedProcessingStatus = (FailedProcessingStatus);
;// ../statuses/src/components/PendingActivationStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const PendingActivationStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.pendingActivation"
}));
PendingActivationStatus.displayName = 'PendingActivationStatus';
/* harmony default export */ const components_PendingActivationStatus = (PendingActivationStatus);
;// ../statuses/src/components/ActionRequiredStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const ActionRequiredStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.actionRequired"
}));
ActionRequiredStatus.displayName = 'ActionRequiredStatus';
/* harmony default export */ const components_ActionRequiredStatus = (ActionRequiredStatus);
;// ../statuses/src/components/DeletedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const DeletedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "error"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.deleted"
}));
DeletedStatus.displayName = 'DeletedStatus';
/* harmony default export */ const components_DeletedStatus = (DeletedStatus);
;// ../statuses/src/components/DeliveredStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const DeliveredStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "special"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.delivered"
}));
DeliveredStatus.displayName = 'DeliveredStatus';
/* harmony default export */ const components_DeliveredStatus = (DeliveredStatus);
;// ../statuses/src/components/SubmittedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const SubmittedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "special"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.submitted"
}));
SubmittedStatus.displayName = 'SubmittedStatus';
/* harmony default export */ const components_SubmittedStatus = (SubmittedStatus);
;// ../statuses/src/components/IncompleteStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const IncompleteStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.incomplete"
}));
IncompleteStatus.displayName = 'IncompleteStatus';
/* harmony default export */ const components_IncompleteStatus = (IncompleteStatus);
;// ../statuses/src/components/PendingApprovalStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const PendingApprovalStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.pendingApproval"
}));
PendingApprovalStatus.displayName = 'PendingApprovalStatus';
/* harmony default export */ const components_PendingApprovalStatus = (PendingApprovalStatus);
;// ../statuses/src/components/RequiresModificationStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const RequiresModificationStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.requiresModification"
}));
RequiresModificationStatus.displayName = 'RequiresModificationStatus';
/* harmony default export */ const components_RequiresModificationStatus = (RequiresModificationStatus);
;// ../statuses/src/components/RequestOpenedStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const RequestOpenedStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.requestOpened"
}));
RequestOpenedStatus.displayName = 'RequestOpenedStatus';
/* harmony default export */ const components_RequestOpenedStatus = (RequestOpenedStatus);
;// ../statuses/src/components/NoInvitesSentStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const NoInvitesSentStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.noInvitesSent"
}));
NoInvitesSentStatus.displayName = 'NoInvitesSentStatus';
/* harmony default export */ const components_NoInvitesSentStatus = (NoInvitesSentStatus);
;// ../statuses/src/components/RequestExpiredStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const RequestExpiredStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.requestExpired"
}));
RequestExpiredStatus.displayName = 'RequestExpiredStatus';
/* harmony default export */ const components_RequestExpiredStatus = (RequestExpiredStatus);
;// ../statuses/src/components/IssuesFoundStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const IssuesFoundStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.issuesFound"
}));
IssuesFoundStatus.displayName = 'IssuesFoundStatus';
/* harmony default export */ const components_IssuesFoundStatus = (IssuesFoundStatus);
;// ../statuses/src/components/ExpiredStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const ExpiredStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.expired"
}));
ExpiredStatus.displayName = 'ExpiredStatus';
/* harmony default export */ const components_ExpiredStatus = (ExpiredStatus);
;// ../statuses/src/components/HighRiskStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const HighRiskStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.highRisk"
}));
HighRiskStatus.displayName = 'HighRiskStatus';
/* harmony default export */ const components_HighRiskStatus = (HighRiskStatus);
;// ../statuses/src/components/ActionNeededStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const ActionNeededStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.actionNeeded"
}));
ActionNeededStatus.displayName = 'ActionNeededStatus';
/* harmony default export */ const components_ActionNeededStatus = (ActionNeededStatus);
;// ../statuses/src/components/PendingStatus/index.tsx




/**
 * @deprecated Please use Status from @fiverr-private/data_display package.
 */
const PendingStatus = () => /*#__PURE__*/react.createElement(components_Status, {
  type: "warning"
}, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
  k: "statuses.pending"
}));
PendingStatus.displayName = 'PendingStatus';
/* harmony default export */ const components_PendingStatus = (PendingStatus);
;// ../statuses/src/stories/index.stories.tsx




const defaultArgs = {
  children: 'STATUS'
};
const Primary = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Status base component for creating statuses in Penta (not exported)'
      }
    }
  }
};
const NeutralStatuses = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "20%_20%_20%_20%_20%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_CanceledStatus, null), /*#__PURE__*/react.createElement(components_PausedStatus, null), /*#__PURE__*/react.createElement(components_ArchivedStatus, null), /*#__PURE__*/react.createElement(components_NotPromotedStatus, null), /*#__PURE__*/react.createElement(components_DraftStatus, null), /*#__PURE__*/react.createElement(components_InactiveStatus, null), /*#__PURE__*/react.createElement(components_DisabledStatus, null))
};
const InfoStatuses = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "20%_20%_20%_20%_20%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_InProgressStatus, null), /*#__PURE__*/react.createElement(components_InRevisionStatus, null), /*#__PURE__*/react.createElement(components_LiveStatus, null), /*#__PURE__*/react.createElement(components_InConversationStatus, null), /*#__PURE__*/react.createElement(components_ResponseSentStatus, null), /*#__PURE__*/react.createElement(components_AcceptedStatus, null), /*#__PURE__*/react.createElement(components_RequestedStatus, null), /*#__PURE__*/react.createElement(components_SentStatus, null), /*#__PURE__*/react.createElement(components_ProcessingStatus, null), /*#__PURE__*/react.createElement(components_InReviewStatus, null), /*#__PURE__*/react.createElement(components_EditInProgressStatus, null), /*#__PURE__*/react.createElement(components_RetrievingStatus, null))
};
const SuccessStatuses = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "20%_20%_20%_20%_20%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_CompletedStatus, null), /*#__PURE__*/react.createElement(components_ActiveStatus, null), /*#__PURE__*/react.createElement(components_PromotedStatus, null), /*#__PURE__*/react.createElement(components_HiredStatus, null), /*#__PURE__*/react.createElement(components_DoneStatus, null), /*#__PURE__*/react.createElement(components_ClearStatus, null), /*#__PURE__*/react.createElement(components_SignedStatus, null), /*#__PURE__*/react.createElement(components_LowRiskStatus, null))
};
const ErrorStatuses = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "20%_20%_20%_20%_20%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_LateStatus, null), /*#__PURE__*/react.createElement(components_VeryLateStatus, null), /*#__PURE__*/react.createElement(components_RejectedStatus, null), /*#__PURE__*/react.createElement(components_DisputeStatus, null), /*#__PURE__*/react.createElement(components_DeniedStatus, null), /*#__PURE__*/react.createElement(components_PaymentFailedStatus, null), /*#__PURE__*/react.createElement(components_InDebtStatus, null), /*#__PURE__*/react.createElement(components_SuspendedStatus, null), /*#__PURE__*/react.createElement(components_FailedProcessingStatus, null), /*#__PURE__*/react.createElement(components_PendingActivationStatus, null), /*#__PURE__*/react.createElement(components_ActionRequiredStatus, null), /*#__PURE__*/react.createElement(components_DeletedStatus, null))
};
const SpecialStatuses = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "20%_20%_20%_20%_20%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_DeliveredStatus, null), /*#__PURE__*/react.createElement(components_SubmittedStatus, null))
};
const WarningStatuses = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "20%_20%_20%_20%_20%",
    gap: "4",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(components_IncompleteStatus, null), /*#__PURE__*/react.createElement(components_PendingApprovalStatus, null), /*#__PURE__*/react.createElement(components_RequiresModificationStatus, null), /*#__PURE__*/react.createElement(components_RequestOpenedStatus, null), /*#__PURE__*/react.createElement(components_NoInvitesSentStatus, null), /*#__PURE__*/react.createElement(components_RequestExpiredStatus, null), /*#__PURE__*/react.createElement(components_IssuesFoundStatus, null), /*#__PURE__*/react.createElement(components_ExpiredStatus, null), /*#__PURE__*/react.createElement(components_HighRiskStatus, null), /*#__PURE__*/react.createElement(components_ActionNeededStatus, null), /*#__PURE__*/react.createElement(components_PendingStatus, null))
};
const meta = {
  args: defaultArgs,
  title: 'Statuses / ❌ Statuses [DEPRECATED]',
  component: components_Status
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Status base component for creating statuses in Penta (not exported)'\n      }\n    }\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
NeutralStatuses.parameters = {
  ...NeutralStatuses.parameters,
  docs: {
    ...NeutralStatuses.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"20%_20%_20%_20%_20%\" gap=\"4\" alignItems=\"center\">\n      <CanceledStatus />\n      <PausedStatus />\n      <ArchivedStatus />\n      <NotPromotedStatus />\n      <DraftStatus />\n      <InactiveStatus />\n      <DisabledStatus />\n    </StoryGrid>\n}",
      ...NeutralStatuses.parameters?.docs?.source
    }
  }
};
InfoStatuses.parameters = {
  ...InfoStatuses.parameters,
  docs: {
    ...InfoStatuses.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"20%_20%_20%_20%_20%\" gap=\"4\" alignItems=\"center\">\n      <InProgressStatus />\n      <InRevisionStatus />\n      <LiveStatus />\n      <InConversationStatus />\n      <ResponseSentStatus />\n      <AcceptedStatus />\n      <RequestedStatus />\n      <SentStatus />\n      <ProcessingStatus />\n      <InReviewStatus />\n      <EditInProgressStatus />\n      <RetrievingStatus />\n    </StoryGrid>\n}",
      ...InfoStatuses.parameters?.docs?.source
    }
  }
};
SuccessStatuses.parameters = {
  ...SuccessStatuses.parameters,
  docs: {
    ...SuccessStatuses.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"20%_20%_20%_20%_20%\" gap=\"4\" alignItems=\"center\">\n      <CompletedStatus />\n      <ActiveStatus />\n      <PromotedStatus />\n      <HiredStatus />\n      <DoneStatus />\n      <ClearStatus />\n      <SignedStatus />\n      <LowRiskStatus />\n    </StoryGrid>\n}",
      ...SuccessStatuses.parameters?.docs?.source
    }
  }
};
ErrorStatuses.parameters = {
  ...ErrorStatuses.parameters,
  docs: {
    ...ErrorStatuses.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"20%_20%_20%_20%_20%\" gap=\"4\" alignItems=\"center\">\n      <LateStatus />\n      <VeryLateStatus />\n      <RejectedStatus />\n      <DisputeStatus />\n      <DeniedStatus />\n      <PaymentFailedStatus />\n      <InDebtStatus />\n      <SuspendedStatus />\n      <FailedProcessingStatus />\n      <PendingActivationStatus />\n      <ActionRequiredStatus />\n      <DeletedStatus />\n    </StoryGrid>\n}",
      ...ErrorStatuses.parameters?.docs?.source
    }
  }
};
SpecialStatuses.parameters = {
  ...SpecialStatuses.parameters,
  docs: {
    ...SpecialStatuses.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"20%_20%_20%_20%_20%\" gap=\"4\" alignItems=\"center\">\n      <DeliveredStatus />\n      <SubmittedStatus />\n    </StoryGrid>\n}",
      ...SpecialStatuses.parameters?.docs?.source
    }
  }
};
WarningStatuses.parameters = {
  ...WarningStatuses.parameters,
  docs: {
    ...WarningStatuses.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <StoryGrid templateColumns=\"20%_20%_20%_20%_20%\" gap=\"4\" alignItems=\"center\">\n      <IncompleteStatus />\n      <PendingApprovalStatus />\n      <RequiresModificationStatus />\n      <RequestOpenedStatus />\n      <NoInvitesSentStatus />\n      <RequestExpiredStatus />\n      <IssuesFoundStatus />\n      <ExpiredStatus />\n      <HighRiskStatus />\n      <ActionNeededStatus />\n      <PendingStatus />\n    </StoryGrid>\n}",
      ...WarningStatuses.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","NeutralStatuses","InfoStatuses","SuccessStatuses","ErrorStatuses","SpecialStatuses","WarningStatuses"];

/***/ }),

/***/ "../storybook_helpers/dist/esm/src/components/StoryGrid/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


const StoryGrid = _ref => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    display: "grid",
    templateColumns: "25%_25%_25%_25%",
    gap: "4"
  }, props), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryGrid);
;
StoryGrid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StoryGrid"
};

/***/ }),

/***/ "../storybook_helpers/dist/esm/src/components/StoryStack/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../storybook_helpers/dist/esm/src/components/StoryText/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


const StoryText = _ref => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    as: "p",
    fontWeight: "normal",
    color: "grey_900",
    fontFamily: "primary",
    fontSize: "b_md",
    lineHeight: "b_md"
  }, props), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryText);
;
StoryText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StoryText"
};

/***/ }),

/***/ "../ui_utils/dist/esm/src/components/LazyComponent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ filterChildrenByType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");


const filterChildrenByType = (children, id) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(child => (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .childrenIdMatch */ .i)(child, id));

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/findChildByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ findChildByType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");


const findChildByType = (children, id) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).find(child => (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .childrenIdMatch */ .i)(child, id));

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/brand/NewSeller.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");



const NewSellerBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .pascalToSnake */ .e)('NewSellerBrandIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#new_seller_svg__a)",
    d: "M7.065.326a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.056V4.945c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: 8,
    cy: 8,
    fill: "#fff",
    rx: 1.556,
    ry: 1.6
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "new_seller_svg__a",
    x1: 8,
    x2: 15.211,
    y1: 0.071,
    y2: 13.237,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    stopColor: "#FFC0DE"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 1,
    stopColor: "#FF99C9"
  }))));
};
NewSellerBrandIcon.id = 'NewSellerBrandIcon';
NewSellerBrandIcon.displayName = 'NewSellerBrandIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewSellerBrandIcon);
;
NewSellerBrandIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NewSellerBrandIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Block.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const BlockIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('BlockIcon')
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
    d: "m12.725 3.275-9.45 9.45M14.75 8a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
BlockIcon.id = 'BlockIcon';
BlockIcon.displayName = 'BlockIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockIcon);
;
BlockIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BlockIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Business.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const BusinessIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('BusinessIcon')
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
    d: "M2.263 14.75V5.975c0-.373.302-.675.675-.675h6.75c.372 0 .675.302.675.675v8.775M5.638 8.503h1.35m-1.35 2.5h1.35m7.762 3.739-13.5.008m5.086-9.47V1.25h7.402v13.5",
    vectorEffect: "non-scaling-stroke"
  }));
};
BusinessIcon.id = 'BusinessIcon';
BusinessIcon.displayName = 'BusinessIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessIcon);
;
BusinessIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BusinessIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/CheckCircle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CheckCircleIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CheckCircleIcon')
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
    d: "m5.25 7.94 2.063 2.062 3.437-4.125m4 2.123a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
CheckCircleIcon.id = 'CheckCircleIcon';
CheckCircleIcon.displayName = 'CheckCircleIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckCircleIcon);
;
CheckCircleIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CheckCircleIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Globe.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const GlobeIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('GlobeIcon')
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
    d: "M8 14.667A6.667 6.667 0 1 0 8 1.334a6.667 6.667 0 0 0 0 13.333",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8 14.667c1.473 0 2.667-2.985 2.667-6.667S9.473 1.334 8 1.334 5.334 4.318 5.334 8 6.527 14.667 8 14.667M1.334 8h13.333",
    vectorEffect: "non-scaling-stroke"
  }));
};
GlobeIcon.id = 'GlobeIcon';
GlobeIcon.displayName = 'GlobeIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobeIcon);
;
GlobeIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "GlobeIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Heart.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Returning.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ReturningIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ReturningIcon')
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
    d: "M4.066 13.578a2.36 2.36 0 0 1-2.36-2.36V6.495a2.36 2.36 0 0 1 2.36-2.36h2.557m4.131 0h1.18a2.36 2.36 0 0 1 2.36 2.36v4.721a2.36 2.36 0 0 1-2.36 2.361h-4.13m0 0 1.99-1.99m-1.99 1.99 1.99 1.99M5.343 6.203 7.41 4.136 5.343 2.068",
    vectorEffect: "non-scaling-stroke"
  }));
};
ReturningIcon.id = 'ReturningIcon';
ReturningIcon.displayName = 'ReturningIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReturningIcon);
;
ReturningIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ReturningIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Spinner.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Users.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const UsersIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('UsersIcon')
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
    d: "M12.725 13.738h2.025c0-2.272-1.627-4.163-3.713-4.388m-1.012-2.362a2.362 2.362 0 1 0 0-4.725M6.565 9.35h-1.18c-2.284 0-4.135 1.965-4.135 4.388h9.45c0-2.423-1.851-4.388-4.134-4.388m1.773-4.725a2.363 2.363 0 1 1-4.726 0 2.363 2.363 0 0 1 4.726 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
UsersIcon.id = 'UsersIcon';
UsersIcon.displayName = 'UsersIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersIcon);
;
UsersIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UsersIcon"
};

/***/ })

}]);
//# sourceMappingURL=1503.eceb2a4d.iframe.bundle.js.map