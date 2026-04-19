"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[2029],{

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelOne.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");



const SellerLevelOneBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .pascalToSnake */ .e)('SellerLevelOneBrandIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#seller_level_one_svg__a)",
    d: "M7.066.325a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.055V4.944c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "m8 4.8 1.143 2.023L11.111 8 9.143 9.176 8 11.2 6.855 9.176 4.888 8l1.967-1.177z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "seller_level_one_svg__a",
    x1: 2.362,
    x2: 18.451,
    y1: 2.252,
    y2: 19.983,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    stopColor: "#FF80AE"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 1,
    stopColor: "#B14D6F"
  }))));
};
SellerLevelOneBrandIcon.id = 'SellerLevelOneBrandIcon';
SellerLevelOneBrandIcon.displayName = 'SellerLevelOneBrandIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellerLevelOneBrandIcon);
;
SellerLevelOneBrandIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SellerLevelOneBrandIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelTopRated.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");



const SellerLevelTopRatedBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .pascalToSnake */ .e)('SellerLevelTopRatedBrandIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#seller_level_top_rated_svg__a)",
    d: "M7.065.326a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.056V4.945c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "m3.722 6 .825 1.151L5.667 8l-1.12.849L3.722 10l-.825-1.151L1.777 8l1.12-.849zM8 6l.825 1.151L9.945 8l-1.12.849L8 10l-.825-1.151L6.055 8l1.12-.849zM12.278 6l.825 1.151 1.12.849-1.12.849L12.278 10l-.825-1.151L10.333 8l1.12-.849z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "seller_level_top_rated_svg__a",
    x1: 4.111,
    x2: 40.054,
    y1: 2.257,
    y2: 41.412,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 0.13,
    stopColor: "#FF7640"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 0.677,
    stopColor: "#8F2900"
  }))));
};
SellerLevelTopRatedBrandIcon.id = 'SellerLevelTopRatedBrandIcon';
SellerLevelTopRatedBrandIcon.displayName = 'SellerLevelTopRatedBrandIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellerLevelTopRatedBrandIcon);
;
SellerLevelTopRatedBrandIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SellerLevelTopRatedBrandIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelTwo.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");



const SellerLevelTwoBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .pascalToSnake */ .e)('SellerLevelTwoBrandIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#seller_level_two_svg__a)",
    d: "M7.065.324a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.054V4.943c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "m5.86 5.999.825 1.152 1.12.848-1.12.849-.825 1.151-.825-1.151-1.12-.849 1.12-.848zM10.138 5.999l.825 1.152 1.12.848-1.12.849-.825 1.151-.825-1.151-1.12-.849 1.12-.848z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "seller_level_two_svg__a",
    x1: 4.5,
    x2: 18.087,
    y1: 1.064,
    y2: 22.037,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 0.239,
    stopColor: "#BBCE00"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 1,
    stopColor: "#7D8900"
  }))));
};
SellerLevelTwoBrandIcon.id = 'SellerLevelTwoBrandIcon';
SellerLevelTwoBrandIcon.displayName = 'SellerLevelTwoBrandIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellerLevelTwoBrandIcon);
;
SellerLevelTwoBrandIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SellerLevelTwoBrandIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/brand/SellerLevelZero.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");



const SellerLevelZeroBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .pascalToSnake */ .e)('SellerLevelZeroBrandIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#C5C6C9",
    d: "M7.065.326a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.056V4.945c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: 8,
    cy: 8,
    fill: "#fff",
    rx: 1.556,
    ry: 1.6
  }));
};
SellerLevelZeroBrandIcon.id = 'SellerLevelZeroBrandIcon';
SellerLevelZeroBrandIcon.displayName = 'SellerLevelZeroBrandIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellerLevelZeroBrandIcon);
;
SellerLevelZeroBrandIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SellerLevelZeroBrandIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Calendar.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CalendarIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CalendarIcon')
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
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M4.932 1.588v1.84m6.137-1.84v1.84M1.25 6.896h13.5M13.23 3.613H2.77c-.839 0-1.519.68-1.519 1.518v7.763c0 .838.68 1.518 1.519 1.518h10.462c.839 0 1.519-.68 1.519-1.518V5.13c0-.838-.68-1.518-1.519-1.518",
    vectorEffect: "non-scaling-stroke"
  }));
};
CalendarIcon.id = 'CalendarIcon';
CalendarIcon.displayName = 'CalendarIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarIcon);
;
CalendarIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CalendarIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ComplianceAttention.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ComplianceAttentionIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ComplianceAttentionIcon')
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
    strokeWidth: 1.5,
    d: "M7.997 5.807v2.7m0 2.686h.006m6.072-3.334V4.533c0-.523-.395-.957-.908-1.046-2.066-.36-3.78-1.158-4.617-1.601a1.18 1.18 0 0 0-1.1 0c-.837.443-2.552 1.242-4.617 1.6-.513.09-.908.524-.908 1.047V7.86c0 4.34 4.413 6.707 5.716 7.311.23.107.487.107.717 0 1.304-.604 5.717-2.971 5.717-7.31Z",
    vectorEffect: "non-scaling-stroke"
  }));
};
ComplianceAttentionIcon.id = 'ComplianceAttentionIcon';
ComplianceAttentionIcon.displayName = 'ComplianceAttentionIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComplianceAttentionIcon);
;
ComplianceAttentionIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ComplianceAttentionIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ComplianceInProgress.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ComplianceInProgressIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ComplianceInProgressIcon')
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
    d: "M8 6.04v2.7l1.35 1.35m4.725-2.23V4.532c0-.523-.395-.957-.908-1.046-2.066-.36-3.78-1.158-4.617-1.601a1.18 1.18 0 0 0-1.1 0c-.837.443-2.552 1.242-4.617 1.6-.513.09-.908.524-.908 1.047V7.86c0 4.34 4.413 6.707 5.716 7.311.23.107.487.107.717 0 1.304-.604 5.717-2.971 5.717-7.31",
    vectorEffect: "non-scaling-stroke"
  }));
};
ComplianceInProgressIcon.id = 'ComplianceInProgressIcon';
ComplianceInProgressIcon.displayName = 'ComplianceInProgressIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComplianceInProgressIcon);
;
ComplianceInProgressIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ComplianceInProgressIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ComplianceSuccess.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ComplianceSuccessIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ComplianceSuccessIcon')
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
    d: "m5.387 8.274 2.063 2.062 3.437-4.125m3.188 1.648V4.533c0-.523-.395-.957-.908-1.046-2.066-.36-3.78-1.158-4.617-1.601a1.18 1.18 0 0 0-1.1 0c-.837.443-2.552 1.242-4.617 1.6-.513.09-.908.524-.908 1.047V7.86c0 4.34 4.413 6.707 5.716 7.311.23.107.487.107.717 0 1.304-.604 5.717-2.971 5.717-7.31",
    vectorEffect: "non-scaling-stroke"
  }));
};
ComplianceSuccessIcon.id = 'ComplianceSuccessIcon';
ComplianceSuccessIcon.displayName = 'ComplianceSuccessIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComplianceSuccessIcon);
;
ComplianceSuccessIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ComplianceSuccessIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Facebook.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const FacebookIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('FacebookIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 1.333A6.667 6.667 0 0 0 6.96 14.586V9.927H5.266V8H6.96V6.531c0-1.67.995-2.594 2.518-2.594.73 0 1.492.13 1.492.13v1.641h-.84c-.828 0-1.087.514-1.087 1.041V8h1.85l-.296 1.927H9.042v4.659A6.668 6.668 0 0 0 8.001 1.333"
  }));
};
FacebookIcon.id = 'FacebookIcon';
FacebookIcon.displayName = 'FacebookIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacebookIcon);
;
FacebookIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FacebookIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Instagram.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const InstagramIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('InstagramIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 5.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m0-1.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m4.875-.188a.938.938 0 1 1-1.876-.001.938.938 0 0 1 1.876 0M8 2c-1.856 0-2.158.005-3.022.043-.588.028-.982.107-1.348.25-.326.125-.56.276-.81.526a2.2 2.2 0 0 0-.528.811c-.142.367-.222.761-.249 1.348C2.005 5.806 2 6.096 2 8c0 1.856.005 2.158.043 3.021.028.588.107.983.249 1.348.127.326.278.562.527.81.252.253.487.403.81.528.37.143.764.223 1.35.25C5.805 13.995 6.095 14 8 14c1.856 0 2.158-.005 3.021-.043.587-.028.982-.107 1.348-.25.326-.125.562-.277.81-.526a2.2 2.2 0 0 0 .528-.81c.143-.37.223-.764.25-1.35C13.995 10.195 14 9.905 14 8c0-1.856-.005-2.158-.043-3.021-.028-.587-.107-.983-.25-1.35a2.2 2.2 0 0 0-.526-.81 2.2 2.2 0 0 0-.811-.527c-.367-.142-.761-.222-1.348-.249C10.194 2.005 9.904 2 8 2M8 .5c2.037 0 2.292.007 3.092.045.798.037 1.342.163 1.82.349.495.19.912.448 1.33.865.415.417.673.835.864 1.329.185.477.312 1.022.349 1.82.036.8.045 1.055.045 3.092s-.008 2.292-.045 3.092c-.037.798-.164 1.342-.349 1.82-.19.495-.448.912-.865 1.33a3.7 3.7 0 0 1-1.328.864c-.479.185-1.023.312-1.821.349-.8.036-1.055.045-3.092.045s-2.292-.008-3.092-.045c-.798-.037-1.342-.164-1.82-.349a3.7 3.7 0 0 1-1.33-.865 3.7 3.7 0 0 1-.864-1.328c-.186-.479-.311-1.023-.349-1.821C.509 10.292.5 10.037.5 8s.007-2.292.045-3.092c.037-.799.163-1.342.349-1.82a3.7 3.7 0 0 1 .865-1.33A3.7 3.7 0 0 1 3.088.895C3.566.708 4.108.583 4.908.545 5.708.509 5.963.5 8 .5"
  }));
};
InstagramIcon.id = 'InstagramIcon';
InstagramIcon.displayName = 'InstagramIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstagramIcon);
;
InstagramIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InstagramIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Lightning.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const LightningIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('LightningIcon')
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
    d: "M12.5 1.75 9.5 7h3.75L5 15.25l1.5-6H2.75l3.375-7.5z",
    vectorEffect: "non-scaling-stroke"
  }));
};
LightningIcon.id = 'LightningIcon';
LightningIcon.displayName = 'LightningIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightningIcon);
;
LightningIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LightningIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Linkedin.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const LinkedinIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('LinkedinIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13.28 13.283h-2.222V9.802c0-.83-.017-1.898-1.157-1.898-1.158 0-1.335.903-1.335 1.837v3.542H6.344V6.125h2.134v.976h.029c.298-.563 1.023-1.157 2.106-1.157 2.25 0 2.667 1.482 2.667 3.41zM3.835 5.146c-.715 0-1.29-.58-1.29-1.291a1.288 1.288 0 1 1 2.58 0c0 .712-.578 1.29-1.29 1.29m1.113 8.137H2.722V6.125h2.227zM14.391.5H1.607C.995.5.5.984.5 1.58v12.84c0 .597.495 1.08 1.107 1.08h12.782c.611 0 1.111-.483 1.111-1.08V1.58C15.5.985 15 .5 14.389.5z"
  }));
};
LinkedinIcon.id = 'LinkedinIcon';
LinkedinIcon.displayName = 'LinkedinIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedinIcon);
;
LinkedinIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LinkedinIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Locked.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const LockedIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('LockedIcon')
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
    d: "M8 11.038v-1.35m3.037-3.713V4.288a3.038 3.038 0 0 0-6.075 0v1.687m7.088 0h-8.1a1.35 1.35 0 0 0-1.35 1.35V13.4c0 .746.605 1.35 1.35 1.35h8.1a1.35 1.35 0 0 0 1.35-1.35V7.325a1.35 1.35 0 0 0-1.35-1.35",
    vectorEffect: "non-scaling-stroke"
  }));
};
LockedIcon.id = 'LockedIcon';
LockedIcon.displayName = 'LockedIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockedIcon);
;
LockedIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LockedIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/LockedSolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const LockedSolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('LockedSolidIcon')
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
    d: "M8 .5a3.793 3.793 0 0 0-3.793 3.793V5.5h-.345c-1.047 0-1.896.85-1.896 1.897v6.207c0 1.047.85 1.896 1.897 1.896h8.275c1.047 0 1.896-.85 1.896-1.896V7.397c0-1.048-.849-1.897-1.896-1.897h-.345V4.293A3.793 3.793 0 0 0 8 .5m2.414 5V4.293a2.414 2.414 0 0 0-4.827 0V5.5zM8 9.12c.381 0 .69.31.69.69v1.38a.69.69 0 1 1-1.38 0V9.81c0-.38.31-.69.69-.69",
    clipRule: "evenodd"
  }));
};
LockedSolidIcon.id = 'LockedSolidIcon';
LockedSolidIcon.displayName = 'LockedSolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockedSolidIcon);
;
LockedSolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LockedSolidIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Plus.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const PlusIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('PlusIcon')
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
    d: "M8 1.25v13.5M14.75 8H1.25",
    vectorEffect: "non-scaling-stroke"
  }));
};
PlusIcon.id = 'PlusIcon';
PlusIcon.displayName = 'PlusIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusIcon);
;
PlusIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PlusIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Remove.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const RemoveIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('RemoveIcon')
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
    d: "M10.363 10.363 5.638 5.638m0 4.725 4.725-4.725M14.75 8a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
RemoveIcon.id = 'RemoveIcon';
RemoveIcon.displayName = 'RemoveIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveIcon);
;
RemoveIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RemoveIcon"
};

/***/ })

}]);