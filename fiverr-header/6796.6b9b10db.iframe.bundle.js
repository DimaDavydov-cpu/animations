(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[6796],{

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const {
  DEFAULT_LOCALE
} = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/lib/constants/index.js");
/**
 * The default context to use when context does not exists over the current runtime
 * @type {FiverrContext}
 */
exports.A = {
  locale: DEFAULT_LOCALE,
  computedLocale: DEFAULT_LOCALE,
  userId: 0,
  country: '',
  countryCode: '',
  pageCtxId: '',
  isPro: false,
  abTests: {},
  userAgent: '',
  knownCrawler: false,
  csrfToken: '',
  browserLanguage: '',
  currency: '',
  pathParameters: {},
  queryParameters: {},
  userGuid: '',
  url: '',
  ip: '',
  referrer: '',
  organizationId: '',
  experience: {
    isBuyer: false,
    isSeller: false,
    isBusiness: false,
    value: ''
  },
  isMobile: false,
  isTouch: false,
  isIos: false
};

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ withBrowserContext_getContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js
var emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js
var constants = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js");
;// ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/constants.js
/**
 * The error message to be logged when trying to access `getContext` api while browser context does not exist.
 * @type {String}
 */
const CONTEXT_DOES_NOT_EXIST = 'Browser context does not exist, please ensure the run time owner sets one on the window scope before using this API';
;// ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js




/**
 * Returns the current available context for browser run time environment.
 * @returns {FiverrContext}
 */
const getContext = () => {
  const context = lodash_default().get(window, 'initialData.FiverrContext');
  if (!context) {
    emitter/* default */.A.error({
      message: CONTEXT_DOES_NOT_EXIST
    });
    return constants/* DEFAULT_CONTEXT */.A;
  }
  return context;
};
/* harmony default export */ const withBrowserContext_getContext = (getContext);

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/lib/constants/index.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * @type {String} Default locale for translations
 */
exports.DEFAULT_LOCALE = 'en-US';

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

/***/ "../../node_modules/.pnpm/mockdate@3.0.5/node_modules/mockdate/lib/mockdate.js":
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var RealDate = Date;
    var now = null;
    var MockDate = /** @class */ (function (_super) {
        __extends(Date, _super);
        function Date(y, m, d, h, M, s, ms) {
            _super.call(this) || this;
            var date;
            switch (arguments.length) {
                case 0:
                    if (now !== null) {
                        date = new RealDate(now.valueOf());
                    }
                    else {
                        date = new RealDate();
                    }
                    break;
                case 1:
                    date = new RealDate(y);
                    break;
                default:
                    d = typeof d === 'undefined' ? 1 : d;
                    h = h || 0;
                    M = M || 0;
                    s = s || 0;
                    ms = ms || 0;
                    date = new RealDate(y, m, d, h, M, s, ms);
                    break;
            }
            return date;
        }
        return Date;
    }(RealDate));
    MockDate.prototype = RealDate.prototype;
    MockDate.UTC = RealDate.UTC;
    MockDate.now = function () {
        return new MockDate().valueOf();
    };
    MockDate.parse = function (dateString) {
        return RealDate.parse(dateString);
    };
    MockDate.toString = function () {
        return RealDate.toString();
    };
    function set(date) {
        var dateObj = new Date(date.valueOf());
        if (isNaN(dateObj.getTime())) {
            throw new TypeError('mockdate: The time set is an invalid date: ' + date);
        }
        // @ts-ignore
        Date = MockDate;
        now = dateObj.valueOf();
    }
    function reset() {
        Date = RealDate;
    }
    var mockdate = {
        set: set,
        reset: reset,
    };

    exports.default = mockdate;
    exports.reset = reset;
    exports.set = set;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


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

/***/ "../button/dist/esm/src/components/ChevronButton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_ChevronButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js
var ChevronDown = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/shared/constants.js
var constants = __webpack_require__("../button/dist/esm/src/components/shared/constants.js");
;// ../button/dist/esm/src/components/ChevronButton/constants.js
const DIRECTIONS = {
  left: 'rotate(90deg)',
  right: 'rotate(-90deg)',
  up: 'rotate(-180deg)'
};
;// ../button/dist/esm/src/components/ChevronButton/index.js
const _excluded = ["size", "theme", "onClick", "dataTestId", "className", "type", "ariaLabel", "disabled", "shape", "chevronDirection", "dataTrackTag"];
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







const ChevronButton = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      size = 'md',
      theme = 'dark',
      onClick,
      dataTestId,
      className,
      type = 'button',
      ariaLabel,
      disabled,
      shape = 'square',
      chevronDirection = 'down',
      dataTrackTag = 'chevron_button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(IconButton/* default */.A, _objectSpread({
    ref: ref,
    "aria-label": ariaLabel || (0,translate/* translate */.T)('button.chevronButton.toggle'),
    variant: "ghost",
    size: size,
    onClick: onClick,
    "data-testid": dataTestId,
    className: className,
    type: type,
    colorScheme: theme === 'light' ? 'white' : undefined,
    disabled: disabled,
    shape: shape,
    dataTrackTag: dataTrackTag
  }, rest), /*#__PURE__*/react.createElement(Box/* default */.A, {
    transition: "0.15s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: DIRECTIONS[chevronDirection]
  }, /*#__PURE__*/react.createElement(ChevronDown/* default */.A, {
    color: disabled ? undefined : constants/* ICON_COLORS */.b[theme]
  })));
});
ChevronButton.displayName = 'ChevronButton';
/* harmony default export */ const components_ChevronButton = (ChevronButton);
;
ChevronButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChevronButton"
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

/***/ "../button/dist/esm/src/components/shared/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ICON_COLORS),
/* harmony export */   h: () => (/* binding */ ICON_SIZES)
/* harmony export */ });
const ICON_SIZES = {
  '3xs': 'sm',
  '2xs': 'sm',
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'md'
};
const ICON_COLORS = {
  light: 'grey_300',
  dark: 'grey_1200'
};

/***/ }),

/***/ "../calendar/src/components/Calendar/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ControlledCalendar: () => (/* binding */ ControlledCalendar),
  Primary: () => (/* binding */ Primary),
  UncontrolledRangeModeWithoutInitialDate: () => (/* binding */ UncontrolledRangeModeWithoutInitialDate),
  UncontrolledSingleMode: () => (/* binding */ UncontrolledSingleMode),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/mockdate@3.0.5/node_modules/mockdate/lib/mockdate.js
var mockdate = __webpack_require__("../../node_modules/.pnpm/mockdate@3.0.5/node_modules/mockdate/lib/mockdate.js");
var mockdate_default = /*#__PURE__*/__webpack_require__.n(mockdate);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ../calendar/src/components/Calendar/Views/calendar/src/components/Calendar/Views/utils/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../calendar/src/components/Calendar/Views/utils/styles.ve.css.ts.vanilla.css","source":"Lnk5cndsMTA6Zm9jdXMtdmlzaWJsZSB7CiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../calendar/src/components/Calendar/Views/utils/styles.ve.css.ts

var selectedFocusable = 'y9rwl10';
;// ../calendar/src/components/Calendar/Views/utils/focusable.ts


const onEnterClicked = callback => _ref => {
  let {
    key
  } = _ref;
  if (key === 'Enter') {
    callback();
  }
};
const focusAbleProps = _ref2 => {
  let {
    isDisabled,
    isSelected
  } = _ref2;
  return {
    tabIndex: isDisabled ? -1 : 0,
    outlineWidth: {
      focusVisible: 'md'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineColor: {
      focusVisible: 'grey_1200',
      default: 'transparent'
    },
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 'sm',
    className: classnames_default()({
      [selectedFocusable]: isSelected
    })
  };
};
;// ../calendar/src/components/Calendar/utils/date.ts
const getStartDay = date => {
  const startDay = new Date(date.toDateString());
  fix2DigitYear(date.getFullYear(), startDay);
  return startDay;
};
const createDateWithFix2DigitYear = (year, month, date) => {
  const updateDate = new Date(year, month, date);
  fix2DigitYear(year, updateDate);
  return updateDate;
};
const fix2DigitYear = (fullYear, date) => {
  if (fullYear < 100 && date.getFullYear() !== fullYear) {
    date.setFullYear(fullYear);
  }
};
const isDateEqual = (date1, date2) => !!date1 && !!date2 && date1.toDateString() === date2.toDateString();
const FIRST_DATE_IN_MONTH = 1;
const FIRST_MONTH_IN_YEAR = 0;

// In the Date object days start from 1 and set day to 0 means to the last day in the prev month
const LAST_DATE_IN_PREV_MONTH = 0;

// In the Date object months start from 0 and set month to 12 means to the first month in the next year
const FIRST_MONTH_IN_NEXT_YEAR = 12;
;// ../calendar/src/components/Calendar/CalendarContext/useStartRangeDate.ts


const getStartMonth = startDate => {
  const date = getStartDay(startDate || new Date());
  date.setDate(FIRST_DATE_IN_MONTH);
  return date;
};

// When selectedDate (startDate/endDate) change then we need to update the RangeDate that we show to the user
const useRefreshRangeDate = (selectedDate, setStartRangeDate) => (0,react.useEffect)(() => {
  if (selectedDate) {
    setStartRangeDate(getStartMonth(selectedDate));
  }
}, [selectedDate, setStartRangeDate]);
const useStartRangeDate = _ref => {
  let {
    calendarMode,
    date,
    initialDate
  } = _ref;
  let startDate;
  let endDate;
  if (calendarMode === 'single') {
    startDate = date || initialDate;
    endDate = null;
  } else if (calendarMode === 'range') {
    var _ref2, _ref3;
    startDate = (_ref2 = date || initialDate) === null || _ref2 === void 0 ? void 0 : _ref2.start;
    endDate = (_ref3 = date || initialDate) === null || _ref3 === void 0 ? void 0 : _ref3.end;
  }
  const [startRangeDate, setStartRangeDate] = (0,react.useState)(() => getStartMonth(startDate));
  useRefreshRangeDate(startDate, setStartRangeDate);
  useRefreshRangeDate(endDate, setStartRangeDate);
  return {
    startRangeDate,
    setStartRangeDate
  };
};
/* harmony default export */ const CalendarContext_useStartRangeDate = (useStartRangeDate);
;// ../calendar/src/components/Calendar/CalendarContext/useInnerDate.ts

const useInnerDate = initialDate => {
  const [innerDate, setInnerDate] = (0,react.useState)(initialDate);
  (0,react.useEffect)(() => {
    setInnerDate(initialDate);
  }, [initialDate]);
  const isInnerDateTypeCompatibleWithInitialDateType = innerDate === initialDate || initialDate instanceof Date === innerDate instanceof Date;
  return {
    innerDate: isInnerDateTypeCompatibleWithInitialDateType ? innerDate : initialDate,
    setInnerDate
  };
};
/* harmony default export */ const CalendarContext_useInnerDate = (useInnerDate);
;// ../calendar/src/components/Calendar/CalendarContext/index.tsx



const CalendarContext = /*#__PURE__*/(0,react.createContext)({});
const useCalendarContext = () => {
  const context = react.useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendarContext must be used within a CalendarProvider');
  }
  return context;
};
const CalendarProvider = _ref => {
  let {
    calendarMode,
    onDateChanged,
    date,
    initialDate,
    allowedDatesRange,
    children
  } = _ref;
  const [viewMode, setViewMode] = (0,react.useState)('days');
  const {
    innerDate,
    setInnerDate
  } = CalendarContext_useInnerDate(initialDate);
  const {
    startRangeDate,
    setStartRangeDate
  } = CalendarContext_useStartRangeDate({
    date,
    initialDate: innerDate,
    calendarMode
  });
  return /*#__PURE__*/react.createElement(CalendarContext.Provider, {
    value: {
      calendarMode,
      viewMode,
      setViewMode,
      onDateChanged: date => {
        setInnerDate(date);
        onDateChanged === null || onDateChanged === void 0 || onDateChanged(date);
      },
      date: date || innerDate,
      startRangeDate,
      setStartRangeDate,
      allowedDatesRange
    }
  }, children);
};
try {
    // @ts-ignore
    CalendarProvider.displayName = "CalendarProvider";
    // @ts-ignore
    CalendarProvider.__docgenInfo = { "description": "", "displayName": "CalendarProvider", "props": { "date": { "defaultValue": null, "description": "", "name": "date", "required": false, "type": { "name": "enum", "value": [{ "value": "Date" }, { "value": "RangeDate" }] } }, "calendarMode": { "defaultValue": null, "description": "", "name": "calendarMode", "required": true, "type": { "name": "enum", "value": [{ "value": "\"single\"" }, { "value": "\"range\"" }] } }, "onDateChanged": { "defaultValue": null, "description": "", "name": "onDateChanged", "required": false, "type": { "name": "enum", "value": [{ "value": "(date: Date) => void" }, { "value": "(date: RangeDate) => void" }, { "value": "(date: Date) => void" }, { "value": "(date: RangeDate) => void" }] } }, "allowedDatesRange": { "defaultValue": null, "description": "", "name": "allowedDatesRange", "required": false, "type": { "name": "AllowedDatesRange" } }, "initialDate": { "defaultValue": null, "description": "", "name": "initialDate", "required": false, "type": { "name": "enum", "value": [{ "value": "Date" }, { "value": "RangeDate" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/CalendarContext/index.tsx#CalendarProvider"] = { docgenInfo: CalendarProvider.__docgenInfo, name: "CalendarProvider", path: "../calendar/src/components/Calendar/CalendarContext/index.tsx#CalendarProvider" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
;// ../calendar/src/components/Calendar/Views/utils/disabledDates.ts

const isMonthDisabled = (year, month, checkIsInAllowedRange) => {
  const startMonth = createDateWithFix2DigitYear(year, month, FIRST_DATE_IN_MONTH);
  const endMonth = createDateWithFix2DigitYear(year, month + 1, LAST_DATE_IN_PREV_MONTH);
  const isStartMonthInRange = checkIsInAllowedRange(startMonth);
  const isEndMonthInRange = checkIsInAllowedRange(endMonth);
  return !isStartMonthInRange && !isEndMonthInRange;
};
const isYearDisabled = (year, checkIsInAllowedRange) => {
  const startYear = createDateWithFix2DigitYear(year, FIRST_MONTH_IN_YEAR, FIRST_DATE_IN_MONTH);

  // Month = 12 means the first month of next year, and day=0 means the last day of prev month
  // so new Date(year, 12, 0) give us the last day of current year.
  const endYear = createDateWithFix2DigitYear(year, FIRST_MONTH_IN_NEXT_YEAR, LAST_DATE_IN_PREV_MONTH);
  const isStartYearInRange = checkIsInAllowedRange(startYear);
  const isEndYearInRange = checkIsInAllowedRange(endYear);
  return !isStartYearInRange && !isEndYearInRange;
};
;// ../calendar/src/components/Calendar/hooks/useIsDateAllowed.ts



const useIsDateAllowed = () => {
  const {
    allowedDatesRange: {
      min,
      max
    }
  } = useCalendarContext();
  return (0,react.useCallback)(date => {
    const startDay = getStartDay(date);
    const isAfterMinDate = !min || startDay >= getStartDay(min);
    const isBeforeMaxDate = !max || startDay <= getStartDay(max);
    return isAfterMinDate && isBeforeMaxDate;
  }, [min, max]);
};
/* harmony default export */ const hooks_useIsDateAllowed = (useIsDateAllowed);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js + 21 modules
var browser = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/dateTime/constants.js
var constants = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/dateTime/constants.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
;// ../calendar/src/components/Calendar/CalendarHeader/viewsUtil/formatTitle.ts


const formatDaysTitle = startRangeDate => {
  const {
    locale
  } = (0,getContext/* default */.A)();
  return (0,browser/* dateTimeFormat */.LE)({
    value: startRangeDate,
    options: {
      month: constants/* DATETIME_ELEMENT_STYLES */.Y.LONG,
      year: constants/* DATETIME_ELEMENT_STYLES */.Y.NUMERIC,
      fallbackValue: startRangeDate.toLocaleString(locale, {
        month: 'long',
        year: 'numeric'
      })
    }
  });
};
const formatMonthsTitle = startRangeDate => startRangeDate.getFullYear().toString();
const formatYearsTitle = startRangeDate => {
  const startYear = startRangeDate.getFullYear() - startRangeDate.getFullYear() % 10 + 1;
  const endYear = startYear + 9;
  return "".concat(startYear, " - ").concat(endYear);
};
;// ../calendar/src/components/Calendar/CalendarHeader/viewsUtil/isNavigateDisabled.ts
const isNavigateDisabled = _ref => {
  let {
    buttonType,
    prevDisabled,
    nextDisabled,
    allowedDatesRange,
    startRangeDate
  } = _ref;
  let prev = prevDisabled;
  let next = nextDisabled;
  if (prevDisabled && nextDisabled) {
    const {
      min,
      max
    } = allowedDatesRange;
    if (min > startRangeDate) {
      next = false;
    } else if (max < startRangeDate) {
      prev = false;
    }
  }
  return buttonType === 'prev' ? prev : next;
};
;// ../calendar/src/components/Calendar/CalendarHeader/viewsUtil/monthsViewHeaderUtil.ts







const useMonthsViewHeaderUtil = () => {
  const {
    startRangeDate,
    setViewMode,
    setStartRangeDate,
    allowedDatesRange
  } = useCalendarContext();
  const checkIsInAllowedRange = hooks_useIsDateAllowed();
  const prevLabel = (0,translate/* translate */.T)('calendar.header.months.previous');
  const nextLabel = (0,translate/* translate */.T)('calendar.header.months.next');
  const update = buttonType => {
    if (disableNavigate(buttonType)) {
      return false;
    }
    const newYear = startRangeDate.getFullYear() + (buttonType === 'next' ? 1 : -1);
    const updatedDate = createDateWithFix2DigitYear(newYear, FIRST_MONTH_IN_YEAR, FIRST_DATE_IN_MONTH);
    setStartRangeDate(updatedDate);
    return true;
  };
  const changeViewMode = () => setViewMode('years');
  const isPrevButtonDisabled = () => isYearDisabled(startRangeDate.getFullYear() - 1, checkIsInAllowedRange);
  const isNextButtonDisabled = () => isYearDisabled(startRangeDate.getFullYear() + 1, checkIsInAllowedRange);
  const disableNavigate = buttonType => isNavigateDisabled({
    nextDisabled: isNextButtonDisabled(),
    prevDisabled: isPrevButtonDisabled(),
    buttonType,
    allowedDatesRange,
    startRangeDate
  });
  return {
    formatTitle: () => formatMonthsTitle(startRangeDate),
    update,
    changeViewMode,
    prevLabel,
    nextLabel,
    disableNavigate
  };
};
/* harmony default export */ const monthsViewHeaderUtil = (useMonthsViewHeaderUtil);
;// ../calendar/src/components/Calendar/CalendarHeader/viewsUtil/daysViewHeaderUtil.ts






const useDaysViewHeaderUtil = () => {
  const {
    startRangeDate,
    setViewMode,
    setStartRangeDate,
    allowedDatesRange
  } = useCalendarContext();
  const checkIsInAllowedRange = hooks_useIsDateAllowed();
  const prevLabel = (0,translate/* translate */.T)('calendar.header.days.previous');
  const nextLabel = (0,translate/* translate */.T)('calendar.header.days.next');
  const update = buttonType => {
    if (disableNavigate(buttonType)) {
      return false;
    }
    const updatedDate = new Date(startRangeDate);
    updatedDate.setMonth(startRangeDate.getMonth() + (buttonType === 'next' ? 1 : -1));
    setStartRangeDate(updatedDate);
    return true;
  };
  const changeViewMode = () => setViewMode('months');
  const isPrevButtonDisabled = () => isMonthDisabled(startRangeDate.getFullYear(), startRangeDate.getMonth() - 1, checkIsInAllowedRange);
  const isNextButtonDisabled = () => isMonthDisabled(startRangeDate.getFullYear(), startRangeDate.getMonth() + 1, checkIsInAllowedRange);
  const disableNavigate = buttonType => isNavigateDisabled({
    nextDisabled: isNextButtonDisabled(),
    prevDisabled: isPrevButtonDisabled(),
    buttonType,
    allowedDatesRange,
    startRangeDate
  });
  return {
    formatTitle: () => formatDaysTitle(startRangeDate),
    update,
    changeViewMode,
    prevLabel,
    nextLabel,
    disableNavigate
  };
};
/* harmony default export */ const daysViewHeaderUtil = (useDaysViewHeaderUtil);
;// ../calendar/src/components/Calendar/CalendarHeader/viewsUtil/yearsViewHeaderUtil.ts







const useYearsViewHeaderUtil = () => {
  const {
    startRangeDate,
    setViewMode,
    setStartRangeDate,
    allowedDatesRange
  } = useCalendarContext();
  const checkIsInAllowedRange = hooks_useIsDateAllowed();
  const prevLabel = (0,translate/* translate */.T)('calendar.header.years.previous');
  const nextLabel = (0,translate/* translate */.T)('calendar.header.years.next');
  const startYear = startRangeDate.getFullYear() - startRangeDate.getFullYear() % 10 + 1;
  const getNextYears = buttonType => startYear + (buttonType === 'next' ? 1 : -1) * 10;
  const update = buttonType => {
    if (disableNavigate(buttonType)) {
      return false;
    }
    const newYear = getNextYears(buttonType);
    const updatedDate = createDateWithFix2DigitYear(newYear, FIRST_MONTH_IN_YEAR, FIRST_DATE_IN_MONTH);
    setStartRangeDate(updatedDate);
    return true;
  };
  const changeViewMode = () => setViewMode('days');
  const isPrevButtonDisabled = () => isYearDisabled(startYear - 1, checkIsInAllowedRange) && isYearDisabled(startYear - 10, checkIsInAllowedRange);
  const isNextButtonDisabled = () => isYearDisabled(startYear + 10, checkIsInAllowedRange) && isYearDisabled(startYear + 19, checkIsInAllowedRange);
  const disableNavigate = buttonType => isNavigateDisabled({
    nextDisabled: isNextButtonDisabled(),
    prevDisabled: isPrevButtonDisabled(),
    buttonType,
    allowedDatesRange,
    startRangeDate
  });
  return {
    formatTitle: () => formatYearsTitle(startRangeDate),
    update,
    changeViewMode,
    prevLabel,
    nextLabel,
    disableNavigate
  };
};
/* harmony default export */ const yearsViewHeaderUtil = (useYearsViewHeaderUtil);
;// ../calendar/src/components/Calendar/CalendarHeader/viewsUtil/index.ts




const useViewHeader = () => {
  const {
    viewMode
  } = useCalendarContext();
  const viewsUtils = {
    days: daysViewHeaderUtil(),
    months: monthsViewHeaderUtil(),
    years: yearsViewHeaderUtil()
  };
  return viewsUtils[viewMode];
};
/* harmony default export */ const viewsUtil = (useViewHeader);
// EXTERNAL MODULE: ../button/dist/esm/src/components/ChevronButton/index.js + 1 modules
var ChevronButton = __webpack_require__("../button/dist/esm/src/components/ChevronButton/index.js");
;// ../calendar/src/components/Calendar/CalendarHeader/HeaderButton/index.tsx




const HeaderButton = _ref => {
  let {
    buttonType
  } = _ref;
  const {
    update,
    prevLabel,
    nextLabel,
    disableNavigate
  } = viewsUtil();
  const isPrev = buttonType === 'prev';
  const direction = isPrev ? 'left' : 'right';
  return /*#__PURE__*/react.createElement(ChevronButton/* default */.A, {
    dataTrackTag: "calander_header_button",
    dataTrackValue: direction,
    ariaLabel: isPrev ? prevLabel : nextLabel,
    disabled: disableNavigate(buttonType),
    onKeyDown: onEnterClicked(() => update(buttonType)),
    onClick: () => update(buttonType),
    size: "sm",
    shape: "circle",
    chevronDirection: direction
  });
};
HeaderButton.displayName = 'HeaderButton';
/* harmony default export */ const CalendarHeader_HeaderButton = (HeaderButton);
try {
    // @ts-ignore
    HeaderButton.displayName = "HeaderButton";
    // @ts-ignore
    HeaderButton.__docgenInfo = { "description": "", "displayName": "HeaderButton", "props": { "buttonType": { "defaultValue": null, "description": "", "name": "buttonType", "required": true, "type": { "name": "enum", "value": [{ "value": "\"next\"" }, { "value": "\"prev\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/CalendarHeader/HeaderButton/index.tsx#HeaderButton"] = { docgenInfo: HeaderButton.__docgenInfo, name: "HeaderButton", path: "../calendar/src/components/Calendar/CalendarHeader/HeaderButton/index.tsx#HeaderButton" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../calendar/src/components/Calendar/CalendarHeader/index.tsx






const CalendarHeader = () => {
  const {
    formatTitle,
    changeViewMode
  } = viewsUtil();
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    dataTrackTag: 'calendar_header',
    width: "100%",
    gap: "0",
    flex: "0 0 auto",
    direction: "row",
    justifyContent: "spaceBetween",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(CalendarHeader_HeaderButton, {
    buttonType: "prev"
  }), /*#__PURE__*/react.createElement(Container/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    onKeyDown: onEnterClicked(changeViewMode),
    onClick: changeViewMode,
    intent: "primary",
    size: "sm",
    variant: "ghost",
    dataTrackTag: "change_view_button"
  }, formatTitle())), /*#__PURE__*/react.createElement(CalendarHeader_HeaderButton, {
    buttonType: "next"
  }));
};
CalendarHeader.displayName = 'CalendarHeader';
/* harmony default export */ const Calendar_CalendarHeader = (CalendarHeader);
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Grid/index.js
var Grid = __webpack_require__("../layout_components/dist/esm/src/components/Grid/index.js");
;// ../calendar/src/components/Calendar/Views/MonthsAndYearContainer/index.tsx


const MonthsAndYearContainer = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(Grid/* default */.A, {
    templateColumns: "33%_33%_33%",
    gap: "1",
    flexGrow: "1"
  }, children);
};
MonthsAndYearContainer.displayName = 'MonthsAndYearContainer';
/* harmony default export */ const Views_MonthsAndYearContainer = (MonthsAndYearContainer);
try {
    // @ts-ignore
    MonthsAndYearContainer.displayName = "MonthsAndYearContainer";
    // @ts-ignore
    MonthsAndYearContainer.__docgenInfo = { "description": "", "displayName": "MonthsAndYearContainer", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/Views/MonthsAndYearContainer/index.tsx#MonthsAndYearContainer"] = { docgenInfo: MonthsAndYearContainer.__docgenInfo, name: "MonthsAndYearContainer", path: "../calendar/src/components/Calendar/Views/MonthsAndYearContainer/index.tsx#MonthsAndYearContainer" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
;// ../calendar/src/components/Calendar/Views/DaysView/utils/index.ts

const checkIsToDay = currentDay => isDateEqual(currentDay, new Date());
const daysInSelectedRangeBackground = 'grey_300';
;// ../calendar/src/components/Calendar/Views/MonthsAndYearItem/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}





const MonthsAndYearItem = _ref => {
  let {
    isDisabled,
    isSelected,
    onClick,
    date
  } = _ref;
  const getBackgroundColor = () => {
    if (isDisabled) {
      return 'transparent';
    }
    if (isSelected) {
      return 'grey_1200';
    }
    return {
      hover: daysInSelectedRangeBackground
    };
  };
  const getTextColor = () => {
    if (isSelected) {
      return 'white';
    }
    if (isDisabled) {
      return 'bodySecondary';
    }
    return 'bodyPrimary';
  };
  return /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({}, focusAbleProps({
    isDisabled,
    isSelected
  }), {
    onKeyDown: onEnterClicked(onClick),
    cursor: isDisabled ? 'default' : 'pointer',
    borderRadius: "lg",
    backgroundColor: getBackgroundColor(),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "3",
    onClick: isDisabled ? undefined : onClick
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: getTextColor(),
    decoration: isDisabled ? 'lineThrough' : 'none'
  }, date));
};
MonthsAndYearItem.displayName = 'MonthsAndYearItem';
/* harmony default export */ const Views_MonthsAndYearItem = (MonthsAndYearItem);
try {
    // @ts-ignore
    MonthsAndYearItem.displayName = "MonthsAndYearItem";
    // @ts-ignore
    MonthsAndYearItem.__docgenInfo = { "description": "", "displayName": "MonthsAndYearItem", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": true, "type": { "name": "() => void" } }, "isDisabled": { "defaultValue": null, "description": "", "name": "isDisabled", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isSelected": { "defaultValue": null, "description": "", "name": "isSelected", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "date": { "defaultValue": null, "description": "", "name": "date", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/Views/MonthsAndYearItem/index.tsx#MonthsAndYearItem"] = { docgenInfo: MonthsAndYearItem.__docgenInfo, name: "MonthsAndYearItem", path: "../calendar/src/components/Calendar/Views/MonthsAndYearItem/index.tsx#MonthsAndYearItem" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../calendar/src/components/Calendar/Views/MonthsView/getMonthsNames.ts

const NUM_MONTHS_IN_YEAR = 12;
const RANDOM_YEAR = 2000;
const getMonthsNames = locale => Array.from(Array(NUM_MONTHS_IN_YEAR), (_, monthIndex) => {
  const date = new Date(RANDOM_YEAR, monthIndex, 1);
  return (0,browser/* dateTimeFormat */.LE)({
    value: date,
    options: {
      month: constants/* DATETIME_ELEMENT_STYLES */.Y.LONG,
      fallbackValue: date.toLocaleString(locale, {
        month: 'long'
      })
    }
  });
});
;// ../calendar/src/components/Calendar/Views/MonthsView/index.tsx








const MonthsView = () => {
  const {
    startRangeDate,
    setStartRangeDate,
    setViewMode,
    date,
    calendarMode
  } = useCalendarContext();
  const {
    locale
  } = (0,getContext/* default */.A)();
  const monthsNames = getMonthsNames(locale);
  const isMonthSelected = monthIndex => {
    if (calendarMode === 'single') {
      return startRangeDate.getFullYear() === (date === null || date === void 0 ? void 0 : date.getFullYear()) && (date === null || date === void 0 ? void 0 : date.getMonth()) === monthIndex;
    }
    const {
      start,
      end
    } = date;
    const isStart = startRangeDate.getFullYear() === (start === null || start === void 0 ? void 0 : start.getFullYear()) && (start === null || start === void 0 ? void 0 : start.getMonth()) === monthIndex;
    const isEnd = startRangeDate.getFullYear() === (end === null || end === void 0 ? void 0 : end.getFullYear()) && (end === null || end === void 0 ? void 0 : end.getMonth()) === monthIndex;
    return isStart || isEnd;
  };
  const checkIsInAllowedRange = hooks_useIsDateAllowed();
  const onMonthClick = monthIndex => {
    const updatedDate = new Date(startRangeDate);
    updatedDate.setMonth(monthIndex);
    setStartRangeDate(updatedDate);
    setViewMode('days');
  };
  return /*#__PURE__*/react.createElement(Views_MonthsAndYearContainer, null, monthsNames.map((month, monthIndex) => /*#__PURE__*/react.createElement(Views_MonthsAndYearItem, {
    key: month,
    isDisabled: isMonthDisabled(startRangeDate.getFullYear(), monthIndex, checkIsInAllowedRange),
    date: month,
    onClick: () => onMonthClick(monthIndex),
    isSelected: isMonthSelected(monthIndex)
  })));
};
MonthsView.displayName = 'MonthsView';
/* harmony default export */ const Views_MonthsView = (MonthsView);
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Layout/index.js + 1 modules
var Layout = __webpack_require__("../layout_components/dist/esm/src/components/Layout/index.js");
;// ../layout_components/dist/esm/src/components/Grid/GridItem/index.js
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


const GridItem = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Layout/* default */.A, _objectSpread({
    ref: ref
  }, restProps), children);
});
GridItem.displayName = 'GridItem';
/* harmony default export */ const Grid_GridItem = (GridItem);
;
GridItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "GridItem"
};
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../calendar/src/components/Calendar/Views/DaysView/hooks/useIsDaySelected.ts


const useIsDaySelected = currentDay => {
  const {
    date,
    calendarMode
  } = useCalendarContext();
  if (calendarMode === 'single') {
    return isDateEqual(date, currentDay);
  }
  return isDateEqual(date === null || date === void 0 ? void 0 : date.start, currentDay) || isDateEqual(date === null || date === void 0 ? void 0 : date.end, currentDay);
};
/* harmony default export */ const hooks_useIsDaySelected = (useIsDaySelected);
;// ../calendar/src/components/Calendar/Views/DaysView/CircleWrapperDay/index.tsx
function CircleWrapperDay_extends() {
  return CircleWrapperDay_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, CircleWrapperDay_extends.apply(null, arguments);
}




const CircleWrapperDay = _ref => {
  let {
    currentDay,
    isDayBetweenSelectedDates,
    isEndHoveredDay,
    isDisabled,
    children
  } = _ref;
  const isDaySelected = hooks_useIsDaySelected(currentDay);
  const getBackgroundColor = () => {
    if (isDaySelected) {
      return 'grey_1200';
    }
    if (isEndHoveredDay) {
      return 'grey_500';
    }
    if (isDayBetweenSelectedDates) {
      return {
        hover: 'grey_500'
      };
    }
    if (isDisabled) {
      return 'transparent';
    }
    return {
      hover: 'grey_200'
    };
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, CircleWrapperDay_extends({
    display: "flex",
    ratio: "1"
  }, focusAbleProps({
    isDisabled,
    isSelected: isDaySelected
  }), {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: getBackgroundColor(),
    borderRadius: "circle",
    width: "auto",
    height: "100%",
    zIndex: "1"
  }), children);
};
CircleWrapperDay.displayName = 'CircleWrapperDay';
/* harmony default export */ const DaysView_CircleWrapperDay = (CircleWrapperDay);
try {
    // @ts-ignore
    CircleWrapperDay.displayName = "CircleWrapperDay";
    // @ts-ignore
    CircleWrapperDay.__docgenInfo = { "description": "", "displayName": "CircleWrapperDay", "props": { "isDisabled": { "defaultValue": null, "description": "", "name": "isDisabled", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "currentDay": { "defaultValue": null, "description": "", "name": "currentDay", "required": true, "type": { "name": "Date" } }, "isDayBetweenSelectedDates": { "defaultValue": null, "description": "", "name": "isDayBetweenSelectedDates", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isEndHoveredDay": { "defaultValue": null, "description": "", "name": "isEndHoveredDay", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/Views/DaysView/CircleWrapperDay/index.tsx#CircleWrapperDay"] = { docgenInfo: CircleWrapperDay.__docgenInfo, name: "CircleWrapperDay", path: "../calendar/src/components/Calendar/Views/DaysView/CircleWrapperDay/index.tsx#CircleWrapperDay" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../calendar/src/components/Calendar/Views/DaysView/TodayIndicator/index.tsx




const TodayIndicator = _ref => {
  let {
    currentDay
  } = _ref;
  const isDaySelected = hooks_useIsDaySelected(currentDay);
  if (!checkIsToDay(currentDay) || isDaySelected) {
    return null;
  }
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "absolute",
    bottom: "0px",
    backgroundColor: "grey_1200",
    borderRadius: "circle",
    width: "4px",
    height: "4px"
  });
};
TodayIndicator.displayName = 'TodayIndicator';
/* harmony default export */ const DaysView_TodayIndicator = (TodayIndicator);
try {
    // @ts-ignore
    TodayIndicator.displayName = "TodayIndicator";
    // @ts-ignore
    TodayIndicator.__docgenInfo = { "description": "", "displayName": "TodayIndicator", "props": { "currentDay": { "defaultValue": null, "description": "", "name": "currentDay", "required": true, "type": { "name": "Date" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/Views/DaysView/TodayIndicator/index.tsx#TodayIndicator"] = { docgenInfo: TodayIndicator.__docgenInfo, name: "TodayIndicator", path: "../calendar/src/components/Calendar/Views/DaysView/TodayIndicator/index.tsx#TodayIndicator" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../calendar/src/components/Calendar/Views/DaysView/hooks/useIsEndHoveredDay.ts


const useIsEndHoveredDay = (currentDay, hovered) => {
  const {
    date,
    calendarMode
  } = useCalendarContext();
  if (calendarMode === 'single') {
    return false;
  }
  const {
    start,
    end
  } = date;
  return !!start && !end && getStartDay(start) < currentDay && isDateEqual(hovered, currentDay);
};
/* harmony default export */ const hooks_useIsEndHoveredDay = (useIsEndHoveredDay);
;// ../calendar/src/components/Calendar/Views/DaysView/DayContent/index.tsx









const DayContent = _ref => {
  let {
    isDisabled,
    currentDay,
    hovered
  } = _ref;
  const {
    startRangeDate,
    date,
    calendarMode
  } = useCalendarContext();
  const isEndHoveredDay = hooks_useIsEndHoveredDay(currentDay, hovered);
  const isDaySelected = hooks_useIsDaySelected(currentDay);

  // Check if currentDay is inside the range between startDateDay to endDateDay
  // or endDateDay still not selected and the currentDay is inside the range between startDateDay to the hovered date
  const getIsDayBetweenSelectedDates = () => {
    if (calendarMode === 'single') {
      return false;
    }
    const {
      start,
      end
    } = date;
    const startDayOfStartDate = start && getStartDay(start);
    const startDayOfEndDate = end && getStartDay(end);
    if (startDayOfStartDate && (startDayOfEndDate || hovered) && startDayOfStartDate < currentDay) {
      if (startDayOfEndDate) {
        return startDayOfEndDate > currentDay;
      }
      if (hovered) {
        return hovered >= currentDay;
      }
    }
    return false;
  };
  const isDayBetweenSelectedDates = getIsDayBetweenSelectedDates();
  const getTextColor = () => {
    if (isDaySelected) {
      return 'white';
    }
    const isBelongToOtherMonth = currentDay.getMonth() !== startRangeDate.getMonth();
    if (isDisabled || isBelongToOtherMonth) {
      return 'bodySecondary';
    }
    return 'bodyPrimary';
  };
  const backgroundColor = isDayBetweenSelectedDates && !isEndHoveredDay ? daysInSelectedRangeBackground : undefined;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    backgroundColor: backgroundColor,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5"
  }, /*#__PURE__*/react.createElement(DaysView_CircleWrapperDay, {
    currentDay: currentDay,
    isDisabled: isDisabled,
    isEndHoveredDay: isEndHoveredDay,
    isDayBetweenSelectedDates: isDayBetweenSelectedDates
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    "aria-label": currentDay.toLocaleDateString(),
    decoration: !isDisabled || isDaySelected || isDayBetweenSelectedDates ? 'none' : 'lineThrough',
    size: "b_sm",
    fontWeight: checkIsToDay(currentDay) ? 'bold' : undefined,
    color: getTextColor()
  }, currentDay.getDate()), /*#__PURE__*/react.createElement(DaysView_TodayIndicator, {
    currentDay: currentDay
  })));
};
DayContent.displayName = 'DayContent';
/* harmony default export */ const DaysView_DayContent = (DayContent);
try {
    // @ts-ignore
    DayContent.displayName = "DayContent";
    // @ts-ignore
    DayContent.__docgenInfo = { "description": "", "displayName": "DayContent", "props": { "isDisabled": { "defaultValue": null, "description": "", "name": "isDisabled", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "currentDay": { "defaultValue": null, "description": "", "name": "currentDay", "required": true, "type": { "name": "Date" } }, "hovered": { "defaultValue": null, "description": "", "name": "hovered", "required": true, "type": { "name": "Date" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/Views/DaysView/DayContent/index.tsx#DayContent"] = { docgenInfo: DayContent.__docgenInfo, name: "DayContent", path: "../calendar/src/components/Calendar/Views/DaysView/DayContent/index.tsx#DayContent" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../calendar/src/components/Calendar/Views/DaysView/FillingSelectedDayEdges/index.tsx
function FillingSelectedDayEdges_extends() {
  return FillingSelectedDayEdges_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, FillingSelectedDayEdges_extends.apply(null, arguments);
}






// The selected date has a circle background and the date between the selected dates also has square background
// so the edges of a square of the area between the circle of the selected date to the square background looks bad
// without this component that fill the edges of a square with daysInSelectedRangeBackground
const FillingSelectedDayEdges = _ref => {
  let {
    currentDay,
    hovered
  } = _ref;
  const {
    date,
    calendarMode
  } = useCalendarContext();
  const isEndHoveredDay = hooks_useIsEndHoveredDay(currentDay, hovered);
  if (calendarMode === 'single') {
    return null;
  }
  const {
    start,
    end
  } = date;
  if (isDateEqual(start, end)) {
    return null;
  }
  let positions;
  if (isDateEqual(end, currentDay) || isEndHoveredDay) {
    positions = {
      right: '50%',
      left: '0px'
    };
  }
  const isNextDayWithGreyBG = end || start && hovered && getStartDay(start) < hovered;
  if (isDateEqual(start, currentDay) && isNextDayWithGreyBG) {
    positions = {
      right: '0px',
      left: '50%'
    };
  }
  if (!positions) {
    return null;
  }
  return /*#__PURE__*/react.createElement(Container/* default */.A, FillingSelectedDayEdges_extends({}, positions, {
    bottom: "0px",
    top: "0px",
    position: "absolute",
    backgroundColor: daysInSelectedRangeBackground
  }));
};
FillingSelectedDayEdges.displayName = 'FillingSelectedDayEdges';
/* harmony default export */ const DaysView_FillingSelectedDayEdges = (FillingSelectedDayEdges);
try {
    // @ts-ignore
    FillingSelectedDayEdges.displayName = "FillingSelectedDayEdges";
    // @ts-ignore
    FillingSelectedDayEdges.__docgenInfo = { "description": "", "displayName": "FillingSelectedDayEdges", "props": { "currentDay": { "defaultValue": null, "description": "", "name": "currentDay", "required": true, "type": { "name": "Date" } }, "hovered": { "defaultValue": null, "description": "", "name": "hovered", "required": true, "type": { "name": "Date" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/Views/DaysView/FillingSelectedDayEdges/index.tsx#FillingSelectedDayEdges"] = { docgenInfo: FillingSelectedDayEdges.__docgenInfo, name: "FillingSelectedDayEdges", path: "../calendar/src/components/Calendar/Views/DaysView/FillingSelectedDayEdges/index.tsx#FillingSelectedDayEdges" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../calendar/src/components/Calendar/Views/DaysView/DayItem/index.tsx




const DayItem = _ref => {
  let {
    currentDay,
    hovered,
    isDisabled
  } = _ref;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    cursor: isDisabled ? 'default' : 'pointer',
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    gap: "0",
    position: "relative"
  }, /*#__PURE__*/react.createElement(DaysView_FillingSelectedDayEdges, {
    currentDay: currentDay,
    hovered: hovered
  }), /*#__PURE__*/react.createElement(DaysView_DayContent, {
    isDisabled: isDisabled,
    hovered: hovered,
    currentDay: currentDay
  }));
};
DayItem.displayName = 'DayItem';
/* harmony default export */ const DaysView_DayItem = (DayItem);
try {
    // @ts-ignore
    DayItem.displayName = "DayItem";
    // @ts-ignore
    DayItem.__docgenInfo = { "description": "", "displayName": "DayItem", "props": { "currentDay": { "defaultValue": null, "description": "", "name": "currentDay", "required": true, "type": { "name": "Date" } }, "isDisabled": { "defaultValue": null, "description": "", "name": "isDisabled", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "hovered": { "defaultValue": null, "description": "", "name": "hovered", "required": true, "type": { "name": "Date" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/Views/DaysView/DayItem/index.tsx#DayItem"] = { docgenInfo: DayItem.__docgenInfo, name: "DayItem", path: "../calendar/src/components/Calendar/Views/DaysView/DayItem/index.tsx#DayItem" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../calendar/src/components/Calendar/Views/DaysView/hooks/useGetAdjacentDays.ts



const getStartRangeDay = startRangeDate => {
  const startRangeDay = createDateWithFix2DigitYear(startRangeDate.getFullYear(), startRangeDate.getMonth(), FIRST_DATE_IN_MONTH);
  startRangeDay.setDate(startRangeDay.getDate() - (startRangeDay.getDay() + 6) % 7);
  return startRangeDay;
};
const getEndRangeDay = startRangeDate => {
  const endRangeDay = new Date(startRangeDate);
  endRangeDay.setMonth(endRangeDay.getMonth() + 1);
  endRangeDay.setDate(LAST_DATE_IN_PREV_MONTH);
  endRangeDay.setDate(endRangeDay.getDate() + (7 - endRangeDay.getDay()) % 7);
  return endRangeDay;
};
const getAllDatesBetweenRange = (from, to) => {
  const days = [];
  const currentDay = getStartDay(from);
  while (currentDay <= to) {
    days.push(getStartDay(currentDay));
    currentDay.setDate(currentDay.getDate() + 1);
  }
  return days;
};
const useGetAdjacentDays = () => {
  const {
    startRangeDate: viewRangeDate
  } = useCalendarContext();
  return (0,react.useMemo)(() => {
    const startRangeDay = getStartRangeDay(viewRangeDate);
    const endRangeDay = getEndRangeDay(viewRangeDate);
    const days = getAllDatesBetweenRange(startRangeDay, endRangeDay);
    return days;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewRangeDate.getMonth(), viewRangeDate.getFullYear()]);
};
/* harmony default export */ const hooks_useGetAdjacentDays = (useGetAdjacentDays);
;// ../calendar/src/components/Calendar/Views/DaysView/hooks/useGetShortWeekDaysNames.ts



const useGetShortWeekDaysNames = () => (0,react.useMemo)(() => {
  const dayInWeek = 7;
  const {
    locale
  } = (0,getContext/* default */.A)();
  const mapDayToName = {};
  const RANDOM_YEAR = 0;
  for (let day = 0; day < dayInWeek; day++) {
    const dayName = new Date(RANDOM_YEAR, FIRST_MONTH_IN_YEAR, day).toLocaleDateString(locale, {
      weekday: 'short'
    }).substring(0, 2);
    mapDayToName[day] = dayName;
  }
  const startDay = 1;
  return Array.from(Array(dayInWeek), (_, i) => {
    const day = (i + startDay) % 7;
    return mapDayToName[day];
  });
}, []);
/* harmony default export */ const hooks_useGetShortWeekDaysNames = (useGetShortWeekDaysNames);
;// ../calendar/src/components/Calendar/Views/DaysView/index.tsx









const DaysView = () => {
  const {
    date,
    onDateChanged,
    calendarMode
  } = useCalendarContext();
  const [hovered, setHovered] = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    if (calendarMode === 'single' && hovered) {
      setHovered(null);
    }
  }, [calendarMode, hovered]);
  const allDays = hooks_useGetAdjacentDays();
  const shortWeekDaysNames = hooks_useGetShortWeekDaysNames();
  const isDateAllowed = hooks_useIsDateAllowed();
  const onDayClick = selectedDate => {
    if (!isDateAllowed(selectedDate)) {
      return;
    }
    if (calendarMode === 'single') {
      onDateChanged(selectedDate);
    } else if (calendarMode === 'range') {
      if (!date.start || selectedDate < getStartDay(date.start) || date.start && date.end) {
        onDateChanged({
          start: selectedDate,
          end: null
        });
      } else if (date.start && selectedDate >= getStartDay(date.start) && !date.end) {
        onDateChanged({
          start: date.start,
          end: selectedDate
        });
      }
    }
    setHovered(null);
  };
  const updateHovered = day => {
    const hoveredState = calendarMode === 'range' && isDateAllowed(day) ? day : null;
    setHovered(hoveredState);
  };
  return /*#__PURE__*/react.createElement(Grid/* default */.A, {
    height: "100%",
    width: "100%",
    onMouseOut: () => setHovered(null),
    templateRows: "7_cols",
    templateColumns: "7_cols",
    flexGrow: 1,
    gap: "0",
    paddingX: "3",
    style: {
      justifyItems: 'center'
    }
  }, shortWeekDaysNames.map(day => /*#__PURE__*/react.createElement(Grid_GridItem, {
    key: day,
    onMouseOver: () => setHovered(null)
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "semibold"
  }, day))), allDays.map(day => /*#__PURE__*/react.createElement(Grid_GridItem, {
    onKeyDown: onEnterClicked(() => onDayClick(day)),
    key: day.toLocaleDateString(),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    onClick: () => onDayClick(day),
    onMouseOver: () => updateHovered(day),
    onMouseOut: e => e.stopPropagation()
  }, /*#__PURE__*/react.createElement(DaysView_DayItem, {
    isDisabled: !isDateAllowed(day),
    hovered: hovered,
    currentDay: day
  }))));
};
DaysView.displayName = 'DaysView';
/* harmony default export */ const Views_DaysView = (DaysView);
;// ../calendar/src/components/Calendar/Views/YearsView/index.tsx







const YearsView = () => {
  const {
    startRangeDate,
    setStartRangeDate,
    setViewMode,
    date,
    calendarMode
  } = useCalendarContext();
  const checkIsInAllowedRange = hooks_useIsDateAllowed();
  const onYearClick = year => {
    const updatedDate = createDateWithFix2DigitYear(year, FIRST_MONTH_IN_YEAR, FIRST_DATE_IN_MONTH);
    setStartRangeDate(updatedDate);
    setViewMode('months');
  };
  const isYearSelected = year => {
    var _date$start, _date$end;
    if (calendarMode === 'single') {
      return (date === null || date === void 0 ? void 0 : date.getFullYear()) === year;
    }
    return ((_date$start = date.start) === null || _date$start === void 0 ? void 0 : _date$start.getFullYear()) === year || ((_date$end = date.end) === null || _date$end === void 0 ? void 0 : _date$end.getFullYear()) === year;
  };
  const startYear = startRangeDate.getFullYear() - startRangeDate.getFullYear() % 10 + 1;
  const NUM_YEARS_TO_SHOW_IN_VIEW = 10;
  return /*#__PURE__*/react.createElement(Views_MonthsAndYearContainer, null, Array.from(Array(NUM_YEARS_TO_SHOW_IN_VIEW), (_, year) => year + startYear).map(year => /*#__PURE__*/react.createElement(Views_MonthsAndYearItem, {
    key: year,
    isDisabled: isYearDisabled(startRangeDate.getFullYear(), checkIsInAllowedRange),
    date: year.toString(),
    onClick: () => onYearClick(year),
    isSelected: isYearSelected(year)
  })));
};
YearsView.displayName = 'YearsView';
/* harmony default export */ const Views_YearsView = (YearsView);
;// ../calendar/src/components/Calendar/Views/index.tsx





const Views = () => {
  const {
    viewMode
  } = useCalendarContext();
  switch (viewMode) {
    case 'days':
      return /*#__PURE__*/react.createElement(Views_DaysView, null);
    case 'months':
      return /*#__PURE__*/react.createElement(Views_MonthsView, null);
    case 'years':
      return /*#__PURE__*/react.createElement(Views_YearsView, null);
    default:
      return null;
  }
};
Views.displayName = 'Views';
/* harmony default export */ const Calendar_Views = (Views);
;// ../calendar/src/components/Calendar/index.tsx






const Calendar = _ref => {
  let {
    calendarMode,
    onDateChanged = lodash.noop,
    date,
    width,
    height,
    allowedDatesRange = {},
    initialDate: initialDateProp,
    dataTrackTag = 'calendar',
    dataTrackValue
  } = _ref;
  let initialDate;
  if (initialDateProp) {
    initialDate = initialDateProp;
  } else if (calendarMode === 'single') {
    initialDate = new Date();
  } else {
    initialDate = {
      start: new Date(),
      end: null
    };
  }
  return /*#__PURE__*/react.createElement(CalendarProvider, {
    calendarMode: calendarMode,
    initialDate: initialDate,
    date: date,
    onDateChanged: onDateChanged,
    allowedDatesRange: allowedDatesRange
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    flexGrow: 0,
    direction: "column",
    gap: "3",
    height: height,
    width: width,
    minHeight: 286,
    minWidth: 232,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Calendar_CalendarHeader, null), /*#__PURE__*/react.createElement(Calendar_Views, null)));
};
Calendar.displayName = 'Calendar';
/* harmony default export */ const components_Calendar = (Calendar);
try {
    // @ts-ignore
    Calendar.displayName = "Calendar";
    // @ts-ignore
    Calendar.__docgenInfo = { "description": "", "displayName": "Calendar", "props": { "allowedDatesRange": { "defaultValue": { value: "{}" }, "description": "", "name": "allowedDatesRange", "required": false, "type": { "name": "AllowedDatesRange" } }, "dataTrackTag": { "defaultValue": { value: "calendar" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "date": { "defaultValue": null, "description": "", "name": "date", "required": false, "type": { "name": "enum", "value": [{ "value": "Date" }, { "value": "RangeDate" }] } }, "onDateChanged": { "defaultValue": null, "description": "", "name": "onDateChanged", "required": false, "type": { "name": "enum", "value": [{ "value": "(date: Date) => void" }, { "value": "(date: RangeDate) => void" }, { "value": "(date: Date) => void" }, { "value": "(date: RangeDate) => void" }] } }, "initialDate": { "defaultValue": null, "description": "", "name": "initialDate", "required": false, "type": { "name": "enum", "value": [{ "value": "Date" }, { "value": "RangeDate" }] } }, "calendarMode": { "defaultValue": null, "description": "", "name": "calendarMode", "required": true, "type": { "name": "enum", "value": [{ "value": "\"single\"" }, { "value": "\"range\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../calendar/src/components/Calendar/index.tsx#Calendar"] = { docgenInfo: Calendar.__docgenInfo, name: "Calendar", path: "../calendar/src/components/Calendar/index.tsx#Calendar" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../calendar/src/components/Calendar/stories/utils.ts
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




const DELAY = 50;
const clickAndTakeScreenshot = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (element) {
    yield dist/* userEvent */.Q4.click(element, {
      delay: DELAY
    });
    yield (0,src/* takeScreenshot */.w)();
  });
  return function clickAndTakeScreenshot(_x) {
    return _ref.apply(this, arguments);
  };
}();
const selectRange = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (start, end) {
    yield dist/* userEvent */.Q4.click(start);
    yield dist/* userEvent */.Q4.click(end);
    yield (0,src/* takeScreenshot */.w)();
  });
  return function selectRange(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
const getElementByDate = (date, canvas) => canvas.getByLabelText(date.toLocaleDateString());
const selectRangeByDate = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (startDate, endDate, canvas) {
    const start = getElementByDate(startDate, canvas);
    const end = getElementByDate(endDate, canvas);
    yield selectRange(start, end);
  });
  return function selectRangeByDate(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
const selectRangeByText = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (canvas) {
    let start = null;
    let end = null;
    try {
      start = canvas.getByText(10);
      end = canvas.getByText(20);
    } catch (e) {
      return;
    }
    if (start && end) {
      yield selectRange(start, end);
    }
  });
  return function selectRangeByText(_x7) {
    return _ref4.apply(this, arguments);
  };
}();
const selectRangeInMonthView = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (canvas, locale) {
    const monthsNames = getMonthsNames(locale);
    const monthEl = canvas.getByText(monthsNames[7]);
    yield clickAndTakeScreenshot(monthEl);
    yield selectRangeByText(canvas);
  });
  return function selectRangeInMonthView(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
const openMonthsView = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (canvas) {
    const currentDate = new Date(canvas.getByText(10).ariaLabel);
    const headerButton = canvas.getByText(formatDaysTitle(currentDate));
    yield clickAndTakeScreenshot(headerButton);
  });
  return function openMonthsView(_x10) {
    return _ref6.apply(this, arguments);
  };
}();
const openYearsView = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (canvas) {
    const currentDate = new Date(canvas.getByText(10).ariaLabel);
    let headerButton = canvas.getByText(formatDaysTitle(currentDate));
    yield dist/* userEvent */.Q4.click(headerButton);
    headerButton = canvas.getByText(formatMonthsTitle(currentDate));
    yield clickAndTakeScreenshot(headerButton);
    return currentDate;
  });
  return function openYearsView(_x11) {
    return _ref7.apply(this, arguments);
  };
}();
const selectRangeInYearsView = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (year, canvas) {
    const yearEl = canvas.getByText(year);
    yield clickAndTakeScreenshot(yearEl);
    yield selectRangeInMonthView(canvas, 'en-US');
  });
  return function selectRangeInYearsView(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();
;// ../calendar/src/components/Calendar/stories/index.stories.tsx
function index_stories_asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function index_stories_asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        index_stories_asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        index_stories_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
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







mockdate_default().set('2024-06-30');
esm/* faker */.az.seed(1);
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    calendarMode: 'range',
    width: '456px',
    height: '300px',
    allowedDatesRange: {
      min: new Date(2000, 0, 1),
      max: new Date(2050, 0, 1)
    },
    initialDate: {
      start: new Date(2024, 2, 2),
      end: new Date(2024, 2, 14)
    }
  },
  render: calendarProps => /*#__PURE__*/react.createElement(components_Calendar, index_stories_extends({}, calendarProps, {
    initialDate: calendarProps.calendarMode === 'range' ? calendarProps.initialDate : new Date()
  })),
  play: function () {
    var _ref = index_stories_asyncToGenerator(function (_ref2) {
      let {
        canvasElement
      } = _ref2;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const startDate = new Date(canvas.getByText(10).ariaLabel);
        const endDate = new Date(canvas.getByText(20).ariaLabel);
        yield (0,src.it)('should select and then select end end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          const start = getElementByDate(startDate, canvas);
          const end = getElementByDate(endDate, canvas);
          yield clickAndTakeScreenshot(start);
          yield clickAndTakeScreenshot(end);
        }));
        yield (0,src.it)('should select start-date that earlier to current selected start-date and then select end end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          startDate.setDate(startDate.getDate() - 1);
          endDate.setDate(startDate.getDate() + 2);
          yield selectRangeByDate(startDate, endDate, canvas);
        }));
        yield (0,src.it)('should select start-date that between the current selected start-date to the current selected end-ate and then select end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          startDate.setDate(endDate.getDate() - 1);
          endDate.setDate(endDate.getDate() + 1);
          yield selectRangeByDate(startDate, endDate, canvas);
        }));
        yield (0,src.it)('should select start-date from the days of the previous month', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          startDate.setMonth(startDate.getMonth() - 1);
          startDate.setDate(27);
          endDate.setDate(2);
          yield selectRangeByDate(startDate, endDate, canvas);
        }));
        yield (0,src.it)('should move to next month and then select start-date and end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          const nextMonthButton1 = canvas.getByLabelText('Next month');
          yield dist/* userEvent */.Q4.click(nextMonthButton1, {
            delay: DELAY
          });
          const nextMonthButton2 = canvas.getByLabelText('Next month');
          yield dist/* userEvent */.Q4.click(nextMonthButton2, {
            delay: DELAY
          });
          const prevMonthButton = canvas.getByLabelText('Previous month');
          yield dist/* userEvent */.Q4.click(prevMonthButton, {
            delay: DELAY
          });
          yield selectRangeByText(canvas);
        }));
        yield (0,src.it)('should open the months view and then move to next month and then select start-date and end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          yield openMonthsView(canvas);
          const nextMonthButton1 = canvas.getByLabelText('Next year');
          yield dist/* userEvent */.Q4.click(nextMonthButton1, {
            delay: DELAY
          });
          const nextMonthButton2 = canvas.getByLabelText('Next year');
          yield dist/* userEvent */.Q4.click(nextMonthButton2, {
            delay: DELAY
          });
          const prevMonthButton = canvas.getByLabelText('Previous year');
          yield dist/* userEvent */.Q4.click(prevMonthButton, {
            delay: DELAY
          });
          yield selectRangeInMonthView(canvas, 'en-US');
        }));
        yield (0,src.it)('should open the years view and then move to next years and then select start-date and end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          const currentDate = yield openYearsView(canvas);
          const nextYearsButton1 = canvas.getByLabelText('Next years');
          yield dist/* userEvent */.Q4.click(nextYearsButton1, {
            delay: DELAY
          });
          const nextYearsButton2 = canvas.getByLabelText('Next years');
          yield dist/* userEvent */.Q4.click(nextYearsButton2, {
            delay: DELAY
          });
          const prevYearsButton = canvas.getByLabelText('Previous years');
          yield dist/* userEvent */.Q4.click(prevYearsButton, {
            delay: DELAY
          });
          yield selectRangeInYearsView(currentDate.getFullYear() + 10, canvas);
        }));
        yield (0,src.it)('should not select invalid date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          yield openYearsView(canvas);
          const nextYearsButton = canvas.getByLabelText('Next years');
          yield dist/* userEvent */.Q4.click(nextYearsButton, {
            delay: DELAY
          });
          yield selectRangeInYearsView(2050, canvas);
        }));
      }();
    });
    return function play(_x) {
      return _ref.apply(this, arguments);
    };
  }()
};
const UncontrolledRangeModeWithoutInitialDate = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    calendarMode: 'range',
    width: '456px',
    height: '300px'
  },
  render: calendarProps => /*#__PURE__*/react.createElement(components_Calendar, calendarProps),
  play: function () {
    var _ref11 = index_stories_asyncToGenerator(function (_ref12) {
      let {
        canvasElement
      } = _ref12;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const startDate = new Date(canvas.getByText(10).ariaLabel);
        const endDate = new Date(canvas.getByText(20).ariaLabel);
        yield (0,src.it)('should select and then select end end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          yield selectRangeByDate(startDate, endDate, canvas);
        }));
        yield (0,src.it)('should select start-date that earlier to current selected start-date and then select end end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          startDate.setDate(startDate.getDate() - 1);
          endDate.setDate(startDate.getDate() + 2);
          yield selectRangeByDate(startDate, endDate, canvas);
        }));
      }();
    });
    return function play(_x2) {
      return _ref11.apply(this, arguments);
    };
  }()
};
const UncontrolledSingleMode = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    calendarMode: 'single',
    width: '456px',
    height: '300px',
    allowedDatesRange: {
      min: new Date(2024, 0, 1),
      max: new Date(2025, 0, 1)
    },
    initialDate: new Date(2024, 2, 2)
  },
  render: calendarProps => /*#__PURE__*/react.createElement(components_Calendar, calendarProps),
  play: function () {
    var _ref15 = index_stories_asyncToGenerator(function (_ref16) {
      let {
        canvasElement
      } = _ref16;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const selectedDate1 = canvas.getByText('10');
        yield clickAndTakeScreenshot(selectedDate1);
        const selectedDate2 = canvas.getByText('20');
        yield clickAndTakeScreenshot(selectedDate2);
      }();
    });
    return function play(_x3) {
      return _ref15.apply(this, arguments);
    };
  }()
};
const ControlledCalendar = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    calendarMode: 'range',
    width: '456px',
    height: '300px',
    date: {
      start: new Date(2024, 2, 2),
      end: new Date(2024, 2, 14)
    },
    allowedDatesRange: {
      min: new Date(2000, 0, 1),
      max: new Date(2050, 0, 1)
    }
  },
  render: function Render(calendarProps) {
    const [date, setDate] = (0,react.useState)(calendarProps.date);
    calendarProps.initialDate = undefined;
    return /*#__PURE__*/react.createElement(components_Calendar, index_stories_extends({}, calendarProps, {
      calendarMode: "range",
      date: date,
      initialDate: undefined,
      onDateChanged: setDate
    }));
  },
  play: function () {
    var _ref17 = index_stories_asyncToGenerator(function (_ref18) {
      let {
        canvasElement
      } = _ref18;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const startDate = new Date(canvas.getByText(10).ariaLabel);
        const endDate = new Date(canvas.getByText(20).ariaLabel);
        yield (0,src.it)('should select and then select end end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          yield selectRangeByDate(startDate, endDate, canvas);
        }));
        yield (0,src.it)('should select start-date that earlier to current selected start-date and then select end end-date', /*#__PURE__*/index_stories_asyncToGenerator(function* () {
          startDate.setDate(startDate.getDate() - 1);
          endDate.setDate(startDate.getDate() + 2);
          yield selectRangeByDate(startDate, endDate, canvas);
        }));
      }();
    });
    return function play(_x4) {
      return _ref17.apply(this, arguments);
    };
  }()
};
const meta = {
  title: 'Calendar/Calendar',
  component: components_Calendar
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    calendarMode: 'range',\n    width: '456px',\n    height: '300px',\n    allowedDatesRange: {\n      min: new Date(2000, 0, 1),\n      max: new Date(2050, 0, 1)\n    },\n    initialDate: {\n      start: new Date(2024, 2, 2),\n      end: new Date(2024, 2, 14)\n    }\n  },\n  render: calendarProps => <Calendar {...calendarProps} initialDate={(calendarProps.calendarMode === 'range' ? calendarProps.initialDate : new Date()) as ControlledCalendarProps['initialDate']} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const startDate = new Date(canvas.getByText(10).ariaLabel as string);\n    const endDate = new Date(canvas.getByText(20).ariaLabel as string);\n    await it('should select and then select end end-date', async () => {\n      const start = getElementByDate(startDate, canvas);\n      const end = getElementByDate(endDate, canvas);\n      await clickAndTakeScreenshot(start);\n      await clickAndTakeScreenshot(end);\n    });\n    await it('should select start-date that earlier to current selected start-date and then select end end-date', async () => {\n      startDate.setDate(startDate.getDate() - 1);\n      endDate.setDate(startDate.getDate() + 2);\n      await selectRangeByDate(startDate, endDate, canvas);\n    });\n    await it('should select start-date that between the current selected start-date to the current selected end-ate and then select end-date', async () => {\n      startDate.setDate(endDate.getDate() - 1);\n      endDate.setDate(endDate.getDate() + 1);\n      await selectRangeByDate(startDate, endDate, canvas);\n    });\n    await it('should select start-date from the days of the previous month', async () => {\n      startDate.setMonth(startDate.getMonth() - 1);\n      startDate.setDate(27);\n      endDate.setDate(2);\n      await selectRangeByDate(startDate, endDate, canvas);\n    });\n    await it('should move to next month and then select start-date and end-date', async () => {\n      const nextMonthButton1 = canvas.getByLabelText('Next month');\n      await userEvent.click(nextMonthButton1, {\n        delay: DELAY\n      });\n      const nextMonthButton2 = canvas.getByLabelText('Next month');\n      await userEvent.click(nextMonthButton2, {\n        delay: DELAY\n      });\n      const prevMonthButton = canvas.getByLabelText('Previous month');\n      await userEvent.click(prevMonthButton, {\n        delay: DELAY\n      });\n      await selectRangeByText(canvas);\n    });\n    await it('should open the months view and then move to next month and then select start-date and end-date', async () => {\n      await openMonthsView(canvas);\n      const nextMonthButton1 = canvas.getByLabelText('Next year');\n      await userEvent.click(nextMonthButton1, {\n        delay: DELAY\n      });\n      const nextMonthButton2 = canvas.getByLabelText('Next year');\n      await userEvent.click(nextMonthButton2, {\n        delay: DELAY\n      });\n      const prevMonthButton = canvas.getByLabelText('Previous year');\n      await userEvent.click(prevMonthButton, {\n        delay: DELAY\n      });\n      await selectRangeInMonthView(canvas, 'en-US');\n    });\n    await it('should open the years view and then move to next years and then select start-date and end-date', async () => {\n      const currentDate = await openYearsView(canvas);\n      const nextYearsButton1 = canvas.getByLabelText('Next years');\n      await userEvent.click(nextYearsButton1, {\n        delay: DELAY\n      });\n      const nextYearsButton2 = canvas.getByLabelText('Next years');\n      await userEvent.click(nextYearsButton2, {\n        delay: DELAY\n      });\n      const prevYearsButton = canvas.getByLabelText('Previous years');\n      await userEvent.click(prevYearsButton, {\n        delay: DELAY\n      });\n      await selectRangeInYearsView(currentDate.getFullYear() + 10, canvas);\n    });\n    await it('should not select invalid date', async () => {\n      await openYearsView(canvas);\n      const nextYearsButton = canvas.getByLabelText('Next years');\n      await userEvent.click(nextYearsButton, {\n        delay: DELAY\n      });\n      await selectRangeInYearsView(2050, canvas);\n    });\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
UncontrolledRangeModeWithoutInitialDate.parameters = {
  ...UncontrolledRangeModeWithoutInitialDate.parameters,
  docs: {
    ...UncontrolledRangeModeWithoutInitialDate.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    calendarMode: 'range',\n    width: '456px',\n    height: '300px'\n  },\n  render: calendarProps => <Calendar {...calendarProps} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const startDate = new Date(canvas.getByText(10).ariaLabel as string);\n    const endDate = new Date(canvas.getByText(20).ariaLabel as string);\n    await it('should select and then select end end-date', async () => {\n      await selectRangeByDate(startDate, endDate, canvas);\n    });\n    await it('should select start-date that earlier to current selected start-date and then select end end-date', async () => {\n      startDate.setDate(startDate.getDate() - 1);\n      endDate.setDate(startDate.getDate() + 2);\n      await selectRangeByDate(startDate, endDate, canvas);\n    });\n  }\n}",
      ...UncontrolledRangeModeWithoutInitialDate.parameters?.docs?.source
    }
  }
};
UncontrolledSingleMode.parameters = {
  ...UncontrolledSingleMode.parameters,
  docs: {
    ...UncontrolledSingleMode.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    calendarMode: 'single',\n    width: '456px',\n    height: '300px',\n    allowedDatesRange: {\n      min: new Date(2024, 0, 1),\n      max: new Date(2025, 0, 1)\n    },\n    initialDate: new Date(2024, 2, 2)\n  },\n  render: calendarProps => <Calendar {...calendarProps} />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const selectedDate1 = canvas.getByText('10');\n    await clickAndTakeScreenshot(selectedDate1);\n    const selectedDate2 = canvas.getByText('20');\n    await clickAndTakeScreenshot(selectedDate2);\n  }\n}",
      ...UncontrolledSingleMode.parameters?.docs?.source
    }
  }
};
ControlledCalendar.parameters = {
  ...ControlledCalendar.parameters,
  docs: {
    ...ControlledCalendar.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    calendarMode: 'range',\n    width: '456px',\n    height: '300px',\n    date: {\n      start: new Date(2024, 2, 2),\n      end: new Date(2024, 2, 14)\n    },\n    allowedDatesRange: {\n      min: new Date(2000, 0, 1),\n      max: new Date(2050, 0, 1)\n    }\n  },\n  render: function Render(calendarProps) {\n    const [date, setDate] = useState(calendarProps.date as ControlledCalendarRangeMode['date']);\n    calendarProps.initialDate = undefined;\n    return <Calendar {...calendarProps} calendarMode=\"range\" date={date} initialDate={undefined} onDateChanged={setDate} />;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const startDate = new Date(canvas.getByText(10).ariaLabel as string);\n    const endDate = new Date(canvas.getByText(20).ariaLabel as string);\n    await it('should select and then select end end-date', async () => {\n      await selectRangeByDate(startDate, endDate, canvas);\n    });\n    await it('should select start-date that earlier to current selected start-date and then select end end-date', async () => {\n      startDate.setDate(startDate.getDate() - 1);\n      endDate.setDate(startDate.getDate() + 2);\n      await selectRangeByDate(startDate, endDate, canvas);\n    });\n  }\n}",
      ...ControlledCalendar.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","UncontrolledRangeModeWithoutInitialDate","UncontrolledSingleMode","ControlledCalendar"];

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Container/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../layout_components/dist/esm/src/components/Grid/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


const Grid = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    display: {
      default: 'grid'
    }
  }, restProps), children);
});
Grid.displayName = 'Grid';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);
;
Grid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Grid"
};

/***/ }),

/***/ "../typography/dist/esm/src/components/Text/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "../visuals/dist/esm/src/components/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ChevronDownIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ChevronDownIcon')
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
    d: "m4 6.818 4 4 4-4",
    vectorEffect: "non-scaling-stroke"
  }));
};
ChevronDownIcon.id = 'ChevronDownIcon';
ChevronDownIcon.displayName = 'ChevronDownIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronDownIcon);
;
ChevronDownIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChevronDownIcon"
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

/***/ "../visuals/dist/esm/src/components/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ pascalToSnake)
/* harmony export */ });
const pascalToSnake = str => str.replace(/[A-Z]/g, (letter, index) => index === 0 ? letter.toLowerCase() : "_".concat(letter.toLowerCase()));

/***/ })

}]);
//# sourceMappingURL=6796.6b9b10db.iframe.bundle.js.map