(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[7243],{

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

/***/ "../feedback/dist/esm/src/components/Loader/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Loader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Spinner.js
var Spinner = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Spinner.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/l1/Spinner.js
var l1_Spinner = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/l1/Spinner.js");
;// ../feedback/dist/esm/src/components/Loader/constants.js
const SYSTEM_SIZE_MAP = {
  sm: 'sm',
  md: 'md'
};
const L1_SIZE_MAP = {
  lg: 'sm',
  xl: 'md'
};
;// ../feedback/dist/esm/src/components/Loader/index.js
const _excluded = ["size", "color", "dataTestId", "dataTrackTag"];
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




const Loader = _ref => {
  let {
      size = 'md',
      color = 'grey_1000',
      dataTestId,
      dataTrackTag = 'loader'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const {
    SpinnerComponent,
    iconSize
  } = Object.keys(SYSTEM_SIZE_MAP).includes(size) ? {
    SpinnerComponent: Spinner/* default */.A,
    iconSize: SYSTEM_SIZE_MAP[size]
  } : {
    SpinnerComponent: l1_Spinner/* default */.A,
    iconSize: L1_SIZE_MAP[size]
  };
  return /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({
    "data-testid": dataTestId,
    display: "flex"
  }, restProps), {}, {
    dataTrackTag: dataTrackTag
  }), /*#__PURE__*/react.createElement(SpinnerComponent, {
    size: iconSize,
    color: color
  }));
};
Loader.displayName = 'Loader';
/* harmony default export */ const components_Loader = (Loader);
;
Loader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Loader"
};

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

/***/ "../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../media/dist/esm/src/components/Image/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ "../overlay/src/components/Modal/ModalBody/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_ModalBody)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalContext/index.ts
var ModalContext = __webpack_require__("../overlay/src/components/Modal/ModalContext/index.ts");
;// ../overlay/src/components/Modal/overlay/src/components/Modal/ModalBody/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../overlay/src/components/Modal/ModalBody/styles.ve.css.ts.vanilla.css","source":"LmloaXNyMjA6bGFzdC1jaGlsZCB7CiAgcGFkZGluZy1ib3R0b206IDI0cHg7Cn0KQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHsKICAuaWhpc3IyMDpsYXN0LWNoaWxkIHsKICAgIHBhZGRpbmctYm90dG9tOiAzMnB4OwogIH0KfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../overlay/src/components/Modal/ModalBody/styles.ve.css.ts

var containerStyle = 'ihisr20';
;// ../overlay/src/components/Modal/ModalBody/index.tsx




const ModalBody = _ref => {
  let {
    children,
    topPadding = false
  } = _ref;
  const {
    centered,
    isFullscreen
  } = (0,ModalContext/* useModalContext */.k)();
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    overflowY: "auto",
    direction: "column",
    gap: "0",
    height: isFullscreen ? '100%' : {
      default: '100%',
      md: 'auto'
    },
    paddingX: {
      default: '6',
      md: '8'
    },
    paddingTop: topPadding ? {
      default: '6',
      md: '8'
    } : '0',
    paddingBottom: "0",
    alignItems: centered ? 'center' : undefined,
    className: containerStyle
  }, children);
};
ModalBody.displayName = 'ModalBody';
/* harmony default export */ const Modal_ModalBody = (ModalBody);
try {
    // @ts-ignore
    ModalBody.displayName = "ModalBody";
    // @ts-ignore
    ModalBody.__docgenInfo = { "description": "", "displayName": "ModalBody", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "topPadding": { "defaultValue": { value: "false" }, "description": "Whether to render the body with a top padding.", "name": "topPadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Modal/ModalBody/index.tsx#ModalBody"] = { docgenInfo: ModalBody.__docgenInfo, name: "ModalBody", path: "../overlay/src/components/Modal/ModalBody/index.tsx#ModalBody" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../overlay/src/components/Modal/ModalCancelBtn/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../overlay/src/components/Modal/ModalContext/index.ts");





const ModalCancelBtn = _ref => {
  let {
    onClick,
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_2__/* .I18n */ .F, {
      k: "overlay.modal.cancelButton.cta"
    }),
    size = 'md',
    dataTrackTag = 'modal_cancel_button',
    dataTrackValue
  } = _ref;
  const {
    close
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_4__/* .useModalContext */ .k)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const getTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ref.current, [ref]);
  const onTrigger = e => {
    onClick === null || onClick === void 0 || onClick(e);
    close === null || close === void 0 || close();
  };
  (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)([{
    trigger: 'enter',
    handler: onTrigger
  }, {
    trigger: 'space',
    handler: onTrigger
  }], getTarget);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    ref: ref,
    size: size,
    variant: "ghost",
    onClick: onTrigger
  }, children);
};
ModalCancelBtn.displayName = 'ModalCancelBtn';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalCancelBtn);
try {
    // @ts-ignore
    ModalCancelBtn.displayName = "ModalCancelBtn";
    // @ts-ignore
    ModalCancelBtn.__docgenInfo = { "description": "", "displayName": "ModalCancelBtn", "props": { "children": { "defaultValue": { value: "<I18n k=\"overlay.modal.cancelButton.cta\" />" }, "description": "The inner content of the button. If not provided, will be set to \"Cancel\".", "name": "children", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "dataTrackTag": { "defaultValue": { value: "modal_cancel_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "size": { "defaultValue": { value: "md" }, "description": "The size of the Button.\nSupported sizes: sm = 36px, md = 42px, lg = 48px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Modal/ModalCancelBtn/index.tsx#ModalCancelBtn"] = { docgenInfo: ModalCancelBtn.__docgenInfo, name: "ModalCancelBtn", path: "../overlay/src/components/Modal/ModalCancelBtn/index.tsx#ModalCancelBtn" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../overlay/src/components/Modal/ModalCloseBtn/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../button/dist/esm/src/components/TimesButton/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../overlay/src/components/Modal/ModalContext/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../overlay/src/components/Modal/constants.ts");





const ModalCloseBtn = _ref => {
  let {
    onClick,
    color,
    type,
    theme,
    dataTrackTag = 'modal_close_button',
    dataTrackValue
  } = _ref;
  const {
    close,
    isDark
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_3__/* .useModalContext */ .k)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const getTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ref.current, [ref]);
  const currentTheme = color || theme || (isDark ? 'light' : 'dark');
  const onTrigger = () => {
    onClick === null || onClick === void 0 || onClick();
    close === null || close === void 0 || close();
  };
  (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)([{
    trigger: 'enter',
    handler: onTrigger
  }, {
    trigger: 'space',
    handler: onTrigger
  }], getTarget);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    ref: ref,
    size: "md",
    theme: currentTheme,
    type: type,
    onClick: onTrigger
  });
};
ModalCloseBtn.displayName = 'ModalCloseBtn';
Object.assign(ModalCloseBtn, {
  id: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MODAL_CLOSE_BTN_ID */ .g
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalCloseBtn);
try {
    // @ts-ignore
    ModalCloseBtn.displayName = "ModalCloseBtn";
    // @ts-ignore
    ModalCloseBtn.__docgenInfo = { "description": "", "displayName": "ModalCloseBtn", "props": { "onClick": { "defaultValue": null, "description": "The function to call when the button is clicked.", "name": "onClick", "required": false, "type": { "name": "() => void" } }, "color": { "defaultValue": null, "description": "@deprecated Please use `theme` prop instead", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "type": { "defaultValue": null, "description": "The type of the button.", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"submit\"" }, { "value": "\"reset\"" }] } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "dataTrackTag": { "defaultValue": { value: "modal_close_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Modal/ModalCloseBtn/index.tsx#ModalCloseBtn"] = { docgenInfo: ModalCloseBtn.__docgenInfo, name: "ModalCloseBtn", path: "../overlay/src/components/Modal/ModalCloseBtn/index.tsx#ModalCloseBtn" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../overlay/src/components/Modal/ModalContent/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_ModalContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/components/Fade/index.js + 1 modules
var Fade = __webpack_require__("../transition/dist/esm/src/components/Fade/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/components/SlideFade/index.js + 1 modules
var SlideFade = __webpack_require__("../transition/dist/esm/src/components/SlideFade/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/components/Portal/index.js + 1 modules
var Portal = __webpack_require__("../ui_utils/dist/esm/src/components/Portal/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js
var useIsomorphicLayoutEffect = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");
// EXTERNAL MODULE: ../overlay/src/hooks/useExitOnEscape/index.ts
var useExitOnEscape = __webpack_require__("../overlay/src/hooks/useExitOnEscape/index.ts");
// EXTERNAL MODULE: ../overlay/src/components/Overlay/index.tsx + 1 modules
var Overlay = __webpack_require__("../overlay/src/components/Overlay/index.tsx");
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalContext/index.ts
var ModalContext = __webpack_require__("../overlay/src/components/Modal/ModalContext/index.ts");
;// ../overlay/src/components/Modal/ModalContent/constants.ts
const DIALOG_WIDTH = {
  sm: 520,
  md: 600,
  lg: 720,
  xl: 900,
  xxl: 1060
};
const MODAL_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl'
};
const fullWidthProps = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  borderRadius: 'none',
  maxHeight: 'unset',
  maxWidth: '100%',
  width: '100%'
};
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
;// ../overlay/src/components/Modal/ModalContent/utils.ts


const getConditionalSize = size => {
  if (typeof size === 'object') {
    return (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => DIALOG_WIDTH[value]);
  }
  return DIALOG_WIDTH[size || 'md'];
};
;// ../overlay/src/components/Modal/ModalContent/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}










const ModalContent = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    children,
    closeOnOverlayClick = true,
    initialFocusRef,
    renderWhenClosed = false,
    size = 'md',
    zIndex = 'overlay',
    closeOnEscapeKey = true,
    overlayTestId,
    disablePortal,
    onAnimationStart,
    onAnimationEnd,
    dataTrackTag = 'modal',
    dataTrackValue
  } = _ref;
  const contentRef = react.useRef(null);
  const {
    close,
    isOpen,
    isDark,
    isFullscreen
  } = (0,ModalContext/* useModalContext */.k)();
  (0,useIsomorphicLayoutEffect/* default */.A)(() => {
    if (contentRef.current && isOpen) {
      if (initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current) {
        initialFocusRef.current.focus();
        return;
      }
      contentRef.current.focus();
    }
  }, [initialFocusRef, isOpen, contentRef]);
  (0,useExitOnEscape/* useExitOnEscape */.k)({
    enabled: closeOnEscapeKey,
    close,
    isOpen
  });
  const Wrapper = disablePortal ? react.Fragment : Portal/* default */.A;
  const wrapperProps = disablePortal ? undefined : {
    height: 0
  };
  return /*#__PURE__*/react.createElement(Wrapper, wrapperProps, /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    zIndex: zIndex,
    position: "relative",
    ref: ref
  }, /*#__PURE__*/react.createElement(Fade/* default */.A, {
    delay: {
      enter: 'fast1',
      exit: 'moderate1'
    },
    in: isOpen,
    unmountOnExit: !renderWhenClosed
  }, /*#__PURE__*/react.createElement(Overlay/* default */.A, {
    zIndex: "-1",
    lockBodyScroll: isOpen,
    onClick: closeOnOverlayClick ? close : undefined,
    dataTestId: overlayTestId
  })), /*#__PURE__*/react.createElement(SlideFade/* default */.A, {
    delay: "fast3",
    in: isOpen,
    unmountOnExit: !renderWhenClosed,
    onAnimationStart: onAnimationStart,
    onAnimationEnd: onAnimationEnd
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    gap: "0"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    as: "article",
    direction: "column",
    gap: "0",
    backgroundColor: isDark ? 'black' : 'white',
    overflow: "hidden",
    maxHeight: "90vh",
    maxWidth: {
      default: '90vw',
      lg: '1060px'
    },
    borderRadius: isDark ? '2xl' : 'xl',
    width: getConditionalSize(size),
    "aria-modal": true,
    role: "dialog",
    style: {
      pointerEvents: 'auto'
    }
  }, isFullscreen && fullWidthProps), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    ref: contentRef,
    tabIndex: -1,
    height: "100%",
    minHeight: 0,
    position: "relative",
    direction: "column",
    flex: "1",
    gap: "0"
  }, children))))));
});
ModalContent.displayName = 'ModalContent';
/* harmony default export */ const Modal_ModalContent = (ModalContent);
try {
    // @ts-ignore
    ModalContent.displayName = "ModalContent";
    // @ts-ignore
    ModalContent.__docgenInfo = { "description": "", "displayName": "ModalContent", "props": { "children": { "defaultValue": null, "description": "Any node that can be inside the modal.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "closeOnOverlayClick": { "defaultValue": { value: "true" }, "description": "Should close the modal when clicking the overlay", "name": "closeOnOverlayClick", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "renderWhenClosed": { "defaultValue": { value: "false" }, "description": "Set to true if you want that ModalContent to be rendered with display=none when it's closed.", "name": "renderWhenClosed", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "initialFocusRef": { "defaultValue": null, "description": "Element's ref inside children to focus on modal initialization.", "name": "initialFocusRef", "required": false, "type": { "name": "RefObject<HTMLElement>" } }, "size": { "defaultValue": { value: "md" }, "description": "Horizontal size of the modal\nSupported sizes: sm=520px | md=600px | lg=720px | xl=900px | xxl=1060px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"xxl\"" }] } }, "zIndex": { "defaultValue": { value: "overlay" }, "description": "Set custom zIndex override. Should be used only in edge cases when other floating elements are overlaying above them modal.", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"overlay\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "closeOnEscapeKey": { "defaultValue": { value: "true" }, "description": "Should close the modal when clicking on the escape key", "name": "closeOnEscapeKey", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "overlayTestId": { "defaultValue": null, "description": "Test Id for targeting overlay html element", "name": "overlayTestId", "required": false, "type": { "name": "string" } }, "disablePortal": { "defaultValue": null, "description": "Whether to disable the portal. The children will be under the DOM hierarchy of the parent component.", "name": "disablePortal", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onAnimationStart": { "defaultValue": null, "description": "Event on animation start", "name": "onAnimationStart", "required": false, "type": { "name": "() => void" } }, "onAnimationEnd": { "defaultValue": null, "description": "Event on animation end", "name": "onAnimationEnd", "required": false, "type": { "name": "() => void" } }, "dataTrackTag": { "defaultValue": { value: "modal" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Modal/ModalContent/index.tsx#ModalContent"] = { docgenInfo: ModalContent.__docgenInfo, name: "ModalContent", path: "../overlay/src/components/Modal/ModalContent/index.tsx#ModalContent" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../overlay/src/components/Modal/ModalContext/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ ModalContext),
/* harmony export */   k: () => (/* binding */ useModalContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const ModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useModalContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }
  return context;
};

/***/ }),

/***/ "../overlay/src/components/Modal/ModalFooter/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../overlay/src/components/Modal/ModalContext/index.ts");



const ModalFooter = _ref => {
  let {
    children,
    justifyContent: justifyContentProp
  } = _ref;
  const {
    centered,
    isFullscreen
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_2__/* .useModalContext */ .k)();
  const defaultJustifyContent = centered ? 'center' : 'flexEnd';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    alignItems: "center",
    justifyContent: justifyContentProp !== null && justifyContentProp !== void 0 ? justifyContentProp : defaultJustifyContent,
    gap: "3",
    padding: {
      default: '6',
      md: '8'
    },
    borderTopWidth: isFullscreen ? 'sm' : undefined
  }, children);
};
ModalFooter.displayName = 'ModalFooter';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalFooter);
try {
    // @ts-ignore
    ModalFooter.displayName = "ModalFooter";
    // @ts-ignore
    ModalFooter.__docgenInfo = { "description": "", "displayName": "ModalFooter", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Modal/ModalFooter/index.tsx#ModalFooter"] = { docgenInfo: ModalFooter.__docgenInfo, name: "ModalFooter", path: "../overlay/src/components/Modal/ModalFooter/index.tsx#ModalFooter" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../overlay/src/components/Modal/ModalHeader/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../typography/dist/esm/src/components/Heading/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../overlay/src/components/Modal/ModalContext/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../overlay/src/components/Modal/constants.ts");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}






const ModalHeader = _ref => {
  let {
    children,
    floating = false
  } = _ref;
  const {
    centered,
    isDark
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_7__/* .useModalContext */ .k)();
  const closeButton = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_8__/* .MODAL_CLOSE_BTN_ID */ .g);
  const restOfChildren = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .excludeChildrenByType */ .h)(children, _constants__WEBPACK_IMPORTED_MODULE_8__/* .MODAL_CLOSE_BTN_ID */ .g);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, _extends({
    position: floating ? 'absolute' : 'relative'
  }, floating && {
    top: 0,
    left: 0,
    right: 0
  }, {
    paddingY: "4",
    paddingRight: "6",
    paddingLeft: {
      default: '6',
      md: '8'
    },
    gap: "0",
    color: isDark ? 'grey_300' : undefined
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    textAlign: centered ? 'center' : undefined,
    margin: "auto",
    flex: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    as: "h4",
    marginTop: "2",
    color: isDark ? 'inherit' : undefined
  }, (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .renderChildren */ .s)(restOfChildren))), (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .renderChildren */ .s)(closeButton));
};
ModalHeader.displayName = 'ModalHeader';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHeader);
try {
    // @ts-ignore
    ModalHeader.displayName = "ModalHeader";
    // @ts-ignore
    ModalHeader.__docgenInfo = { "description": "", "displayName": "ModalHeader", "props": { "children": { "defaultValue": null, "description": "Any node or string that can be rendered.", "name": "children", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "floating": { "defaultValue": { value: "false" }, "description": "Whether to render the header floating.", "name": "floating", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Modal/ModalHeader/index.tsx#ModalHeader"] = { docgenInfo: ModalHeader.__docgenInfo, name: "ModalHeader", path: "../overlay/src/components/Modal/ModalHeader/index.tsx#ModalHeader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../overlay/src/components/Modal/ModalLoader/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_ModalLoader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Loader/index.js + 1 modules
var Loader = __webpack_require__("../feedback/dist/esm/src/components/Loader/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../overlay/src/components/Modal/overlay/src/components/Modal/ModalLoader/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../overlay/src/components/Modal/ModalLoader/styles.ve.css.ts.vanilla.css","source":"LmJqZjFjZTAgewogIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../overlay/src/components/Modal/ModalLoader/styles.ve.css.ts

var containerStyles = 'bjf1ce0';
;// ../overlay/src/components/Modal/ModalLoader/index.tsx





const ModalLoader = _ref => {
  let {
    children,
    isLoading = false,
    loaderTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    overflowY: "auto",
    height: "inherit",
    className: containerStyles
  }, isLoading && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "0",
    "data-testid": loaderTestId
  }, /*#__PURE__*/react.createElement(Loader/* default */.A, null)), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    height: "inherit",
    direction: "column",
    gap: "0",
    visibility: isLoading ? 'hidden' : undefined,
    opacity: isLoading ? '0' : undefined,
    transition: "".concat(themeVars/* animationDuration */.H9.fast2, " ").concat(themeVars/* animationTiming */.fC.easeIn)
  }, children));
};
ModalLoader.displayName = 'ModalLoader';
/* harmony default export */ const Modal_ModalLoader = (ModalLoader);
try {
    // @ts-ignore
    ModalLoader.displayName = "ModalLoader";
    // @ts-ignore
    ModalLoader.__docgenInfo = { "description": "", "displayName": "ModalLoader", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered after loading.\nHidden when not loading and visually replaced by loader icon.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "isLoading": { "defaultValue": { value: "false" }, "description": "Whether the loader icon is visible.", "name": "isLoading", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "loaderTestId": { "defaultValue": null, "description": "Test Id for targeting loader html element", "name": "loaderTestId", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Modal/ModalLoader/index.tsx#ModalLoader"] = { docgenInfo: ModalLoader.__docgenInfo, name: "ModalLoader", path: "../overlay/src/components/Modal/ModalLoader/index.tsx#ModalLoader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../overlay/src/components/Modal/ModalTrigger/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../overlay/src/components/Modal/ModalContext/index.ts");



const ModalTrigger = _ref => {
  let {
    children,
    as = 'span',
    dataTestId,
    isDisabled = false,
    fullWidth = false,
    dataTrackTag = 'modal_trigger',
    dataTrackValue
  } = _ref;
  const {
    open
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_2__/* .useModalContext */ .k)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: as,
    onClick: isDisabled ? undefined : open,
    "data-testid": dataTestId,
    width: fullWidth ? '100%' : undefined,
    "data-track-tag": dataTrackTag,
    "data-track-value": dataTrackValue
  }, children);
};
ModalTrigger.displayName = 'ModalTrigger';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalTrigger);
try {
    // @ts-ignore
    ModalTrigger.displayName = "ModalTrigger";
    // @ts-ignore
    ModalTrigger.__docgenInfo = { "description": "", "displayName": "ModalTrigger", "props": { "children": { "defaultValue": null, "description": "Any node to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "as": { "defaultValue": { value: "span" }, "description": "The wrapper html element", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"span\"" }, { "value": "\"div\"" }] } }, "dataTestId": { "defaultValue": null, "description": "Test Id for targeting wrapper html element", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "isDisabled": { "defaultValue": { value: "false" }, "description": "Wheather to disable the trigger.", "name": "isDisabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "fullWidth": { "defaultValue": { value: "false" }, "description": "Whether to render the trigger with full width.", "name": "fullWidth", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "modal_trigger" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Modal/ModalTrigger/index.tsx#ModalTrigger"] = { docgenInfo: ModalTrigger.__docgenInfo, name: "ModalTrigger", path: "../overlay/src/components/Modal/ModalTrigger/index.tsx#ModalTrigger" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../overlay/src/components/Modal/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ MODAL_CLOSE_BTN_ID)
/* harmony export */ });
const MODAL_CLOSE_BTN_ID = 'ModalCloseBtnId';

/***/ }),

/***/ "../overlay/src/components/Modal/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AvoidCloseOnClickOutside: () => (/* binding */ AvoidCloseOnClickOutside),
  Controlled: () => (/* binding */ Controlled),
  CustomDesign: () => (/* binding */ CustomDesign),
  Dark: () => (/* binding */ Dark),
  DisableMobileFullscreen: () => (/* binding */ DisableMobileFullscreen),
  FloatingHeader: () => (/* binding */ FloatingHeader),
  Fullscreen: () => (/* binding */ Fullscreen),
  NestedModals: () => (/* binding */ NestedModals),
  Primary: () => (/* binding */ Primary),
  RenderWhenClosed: () => (/* binding */ RenderWhenClosed),
  ScrollableModal: () => (/* binding */ ScrollableModal),
  Sizes: () => (/* binding */ Sizes),
  SmFullscreen: () => (/* binding */ SmFullscreen),
  WithCancelButton: () => (/* binding */ WithCancelButton),
  WithLoader: () => (/* binding */ WithLoader),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryText/index.js
var StoryText = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../media/dist/esm/src/components/Image/index.js + 1 modules
var Image = __webpack_require__("../media/dist/esm/src/components/Image/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../overlay/src/components/Modal/hooks/useIsFullscreen/index.ts



const DEFAULT_FULL_SCREEN_BREAKPOINT = 'md';
const getFullscreenBreakpoint = _ref => {
  let {
    fullScreenBreakpoint,
    mobileFullScreen
  } = _ref;
  if (fullScreenBreakpoint !== undefined) {
    return fullScreenBreakpoint;
  }
  if (mobileFullScreen !== undefined) {
    return mobileFullScreen ? DEFAULT_FULL_SCREEN_BREAKPOINT : 'none';
  }
  return DEFAULT_FULL_SCREEN_BREAKPOINT;
};
const isFullscreenActive = _ref2 => {
  let {
    breakpoint,
    windowWidth
  } = _ref2;
  const breakpoints = themeVars/* numericBreakpoints */.Uf;
  if (breakpoint === 'none') {
    return false;
  }
  if (breakpoint === 'all') {
    return true;
  }
  if (breakpoint === 'sm' && windowWidth < breakpoints.sm) {
    return true;
  }
  if (breakpoint === 'md' && windowWidth < breakpoints.md) {
    return true;
  }
  return false;
};
const useIsFullscreen = (fullScreenBreakpoint, mobileFullScreen) => {
  (0,react.useEffect)(() => {
    if (mobileFullScreen !== undefined) {
      // eslint-disable-next-line no-console
      console.warn('Modal: The mobileFullScreen prop is deprecated, please use the fullScreenBreakpoint prop instead');
    }
  }, [mobileFullScreen]);
  const breakpoint = getFullscreenBreakpoint({
    fullScreenBreakpoint,
    mobileFullScreen
  });
  const {
    width: windowWidth
  } = (0,useElementSize/* default */.A)(typeof window !== 'undefined' ? window : null);
  return isFullscreenActive({
    breakpoint,
    windowWidth
  });
};
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalContext/index.ts
var ModalContext = __webpack_require__("../overlay/src/components/Modal/ModalContext/index.ts");
;// ../overlay/src/components/Modal/index.tsx



const Modal = _ref => {
  let {
    autoOpen = false,
    children,
    centered = false,
    isOpen,
    onClose = () => undefined,
    onOpen = () => undefined,
    fullScreenBreakpoint,
    mobileFullScreen,
    goExperimental = false,
    theme = 'light'
  } = _ref;
  const isDark = goExperimental || theme === 'dark';
  const [innerIsOpen, setInnerIsOpen] = react.useState(autoOpen);
  const isFullscreen = useIsFullscreen(fullScreenBreakpoint, mobileFullScreen);
  const close = react.useCallback(() => {
    setInnerIsOpen(false);
    onClose();
  }, [onClose]);
  const open = react.useCallback(() => {
    setInnerIsOpen(true);
    onOpen();
  }, [onOpen]);
  if (autoOpen && isOpen) {
    throw new Error("Modal: Don't use both autoOpen and isOpen together, autoOpen is only meant to be used with the trigger component");
  }
  return /*#__PURE__*/react.createElement(ModalContext/* ModalContext */.V.Provider, {
    value: {
      isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : innerIsOpen,
      close,
      centered,
      open,
      isDark,
      isFullscreen
    }
  }, children);
};
Modal.displayName = 'Modal';
/* harmony default export */ const components_Modal = (Modal);
try {
    // @ts-ignore
    Modal.displayName = "Modal";
    // @ts-ignore
    Modal.__docgenInfo = { "description": "", "displayName": "Modal", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered inside the modal.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "autoOpen": { "defaultValue": { value: "false" }, "description": "Whether to automatically open the modal.", "name": "autoOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onOpen": { "defaultValue": { value: "() => undefined" }, "description": "Callback function to be called when the modal is opened.", "name": "onOpen", "required": false, "type": { "name": "() => void" } }, "onClose": { "defaultValue": { value: "() => undefined" }, "description": "Callback function to be called when the modal is closed.", "name": "onClose", "required": false, "type": { "name": "() => void" } }, "isOpen": { "defaultValue": null, "description": "State value to control the modal (default behavior is uncontrolled)", "name": "isOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "centered": { "defaultValue": { value: "false" }, "description": "Whether to center modal children's content", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "fullScreenBreakpoint": { "defaultValue": null, "description": "Reverse breakpoint when modal should be full screen. sm = <600px | md = <900px. If `none` is passed, modal will never render fullscreen.", "name": "fullScreenBreakpoint", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }] } }, "mobileFullScreen": { "defaultValue": null, "description": "@deprecated Whether to render the modal in full screen on mobile. (This prop is deprecated, use `fullScreenBreakpoint` instead)", "name": "mobileFullScreen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "goExperimental": { "defaultValue": { value: "false" }, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Modal/index.tsx#Modal"] = { docgenInfo: Modal.__docgenInfo, name: "Modal", path: "../overlay/src/components/Modal/index.tsx#Modal" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalBody/index.tsx + 2 modules
var ModalBody = __webpack_require__("../overlay/src/components/Modal/ModalBody/index.tsx");
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalContent/index.tsx + 2 modules
var ModalContent = __webpack_require__("../overlay/src/components/Modal/ModalContent/index.tsx");
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalCloseBtn/index.tsx
var ModalCloseBtn = __webpack_require__("../overlay/src/components/Modal/ModalCloseBtn/index.tsx");
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalFooter/index.tsx
var ModalFooter = __webpack_require__("../overlay/src/components/Modal/ModalFooter/index.tsx");
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalHeader/index.tsx
var ModalHeader = __webpack_require__("../overlay/src/components/Modal/ModalHeader/index.tsx");
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalLoader/index.tsx + 2 modules
var ModalLoader = __webpack_require__("../overlay/src/components/Modal/ModalLoader/index.tsx");
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalTrigger/index.tsx
var ModalTrigger = __webpack_require__("../overlay/src/components/Modal/ModalTrigger/index.tsx");
// EXTERNAL MODULE: ../overlay/src/components/Modal/ModalCancelBtn/index.tsx
var ModalCancelBtn = __webpack_require__("../overlay/src/components/Modal/ModalCancelBtn/index.tsx");
;// ../overlay/src/components/Modal/stories/modal-background.png
const modal_background_namespaceObject = __webpack_require__.p + "static/media/modal-background.4e1d3d71.png";
;// ../overlay/src/components/Modal/stories/index.stories.tsx
const _excluded = ["size"];
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
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
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

















esm/* faker */.az.seed(1);
const headerText = esm/* faker */.az.lorem.words(2);
const bodyText = esm/* faker */.az.lorem.paragraph();
const longBodyText = esm/* faker */.az.lorem.paragraph(100);
const buttonText = 'Click here';
const DELAY = 400;
const openModal = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function (_ref2) {
    let {
      canvasElement
    } = _ref2;
    return function* () {
      const button = (0,dist/* within */.ux)(canvasElement).getByRole('button');
      yield dist/* userEvent */.Q4.click(button, {
        delay: DELAY
      });
    }();
  });
  return function openModal(_x) {
    return _ref.apply(this, arguments);
  };
}();
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  play: function () {
    var _ref3 = _asyncToGenerator(function (_ref4) {
      let {
        canvasElement
      } = _ref4;
      return function* () {
        yield openModal({
          canvasElement
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x2) {
      return _ref3.apply(this, arguments);
    };
  }()
};
const Controlled = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Modal can be controlled by passing the state value `isOpen` and callback `onClose`.'
      },
      source: {
        code: "const [isOpen, setIsOpen] = useState(false);\nconst close = () => setIsOpen(false);\nconst open = () => setIsOpen(true);\n\nreturn (\n  <>\n    <Button onClick={open}>Open</Button>\n    <Modal isOpen={isOpen} onClose={close}>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>\n          <StoryText>{bodyText}</StoryText>\n        </ModalBody>\n        <ModalFooter>\n          <ModalCancelBtn />\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n  </>\n);"
      }
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: open
    }, "Open"), /*#__PURE__*/react.createElement(components_Modal, _extends({}, args, {
      isOpen: isOpen,
      onClose: close
    }), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, bodyText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(ModalCancelBtn/* default */.A, null), /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText)))));
  }
};
const WithCancelButton = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'You can add to the footer a cancel button.'
      },
      source: {
        code: "\n    <Modal>\n      <ModalTrigger>\n        <Button>Open with cancel button</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>\n          <StoryText>{bodyText}</StoryText>\n        </ModalBody>\n        <ModalFooter>\n          <ModalCancelBtn>\n          Custom Cancel Text\n          </ModalCancelBtn>\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>"
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(components_Modal, null, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open with cancel button")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, bodyText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(ModalCancelBtn/* default */.A, null, "Custom Cancel Text"), /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))))
};
const ContentSizes = _ref5 => {
  let {
      size
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded);
  const sizeText = typeof size === 'object' ? 'responsive sizes' : size;
  return /*#__PURE__*/react.createElement(components_Modal, props, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open with size ".concat(sizeText))), /*#__PURE__*/react.createElement(ModalContent/* default */.A, {
    size: size
  }, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, "Content of modal with size ".concat(sizeText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))));
};
const Sizes = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: "Modal's content can be specified to use 5 different widths, determined by `sm (520px)`, `md (600px)`, `lg (720px)`, `xl (900px)`, and `xxl (1060px)` sizes.<br>" + ' You can also provide responsive sizes by passing an object with breakpoints as keys and sizes as values. <br>' + 'The default size is set to `md` and the `max-width` is set to 1060px.'
      },
      source: {
        code: "<Modal>\n  <ModalTrigger>\n    <Button>{\"Open with size \" + size}</Button>\n  </ModalTrigger>\n  <ModalContent size={size}>\n    <ModalHeader>\n      {headerText}\n      <ModalCloseBtn />\n    </ModalHeader>\n    <ModalBody>{\"Content of modal with size \" + size}</ModalBody>\n    <ModalFooter>\n      <Button>{buttonText}</Button>\n    </ModalFooter>\n  </ModalContent>\n</Modal>"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(ContentSizes, _extends({}, args, {
    size: "sm"
  })), /*#__PURE__*/react.createElement(ContentSizes, _extends({}, args, {
    size: "md"
  })), /*#__PURE__*/react.createElement(ContentSizes, _extends({}, args, {
    size: "lg"
  })), /*#__PURE__*/react.createElement(ContentSizes, _extends({}, args, {
    size: "xl"
  })), /*#__PURE__*/react.createElement(ContentSizes, _extends({}, args, {
    size: "xxl"
  })), /*#__PURE__*/react.createElement(ContentSizes, _extends({}, args, {
    size: {
      default: 'sm',
      lg: 'md',
      xl: 'xxl'
    },
    fullScreenBreakpoint: "none"
  }))),
  play: function () {
    var _ref6 = _asyncToGenerator(function (_ref7) {
      let {
        canvasElement
      } = _ref7;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const buttons = canvas.getAllByRole('button');
        for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          if (i > 0) {
            const dialog = dist/* screen */.nj.getByRole('dialog');
            const closeButton = (0,dist/* within */.ux)(dialog).getByRole('button', {
              name: 'Close'
            });
            yield dist/* userEvent */.Q4.click(closeButton, {
              delay: DELAY
            });
          }
          yield dist/* userEvent */.Q4.click(button, {
            delay: DELAY
          });
          yield (0,src/* takeScreenshot */.w)();
        }
      }();
    });
    return function play(_x3) {
      return _ref6.apply(this, arguments);
    };
  }()
};
const ScrollableModal = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(components_Modal, args, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, longBodyText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))))
};
const AvoidCloseOnClickOutside = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Without a close icon and the ability to close by clicking outside, the `esc ⎋` key is the only way to close this modal. Additionally, you could try pressing the `tab ⇥` key to focus to the footer button (first and only focusable element).'
      },
      source: {
        code: "<Modal>\n  <ModalTrigger>\n    <Button>Open</Button>\n  </ModalTrigger>\n  <ModalContent closeOnOverlayClick={false}>\n    <ModalHeader>\n      {headerText}\n      <ModalCloseBtn />\n    </ModalHeader>\n    <ModalBody>\n      <StoryText>{bodyText}</StoryText>\n    </ModalBody>\n    <ModalFooter>\n      <Button>{buttonText}</Button>\n    </ModalFooter>\n  </ModalContent>\n</Modal>"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(components_Modal, args, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, {
    closeOnOverlayClick: false
  }, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, bodyText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))))
};
const RenderWhenClosed = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Watch the dom to see the content exists also when Modal is closed'
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(components_Modal, args, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, {
    renderWhenClosed: true
  }, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, bodyText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))))
};
const DisableMobileFullscreen = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    fullScreenBreakpoint: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: "Modal won't turn fullscreen for smaller screens but resize responsively to those changes."
      }
    }
  }
};
const Fullscreen = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    fullScreenBreakpoint: 'all'
  },
  play: function () {
    var _ref8 = _asyncToGenerator(function (_ref9) {
      let {
        canvasElement
      } = _ref9;
      return function* () {
        yield openModal({
          canvasElement
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x4) {
      return _ref8.apply(this, arguments);
    };
  }()
};
const SmFullscreen = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    fullScreenBreakpoint: 'sm'
  }
};
const WithLoader = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [isLoading, setIsLoading] = useState(true);\nconst onOpen = () => {\n  setIsLoading(true);\n  setTimeout(() => {\n    setIsLoading(false);\n  }, 250);\n};\n\nreturn (\n  <StoryStack>\n    <Modal onOpen={onOpen}>\n      <ModalTrigger>\n        <Button>Loading Everything</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalLoader isLoading={isLoading}>\n          <ModalHeader>\n            {headerText}\n            <ModalCloseBtn />\n          </ModalHeader>\n          <ModalBody>\n            <StoryText>{bodyText}</StoryText>\n          </ModalBody>\n          <ModalFooter>\n            <Button>{buttonText}</Button>\n          </ModalFooter>\n        </ModalLoader>\n      </ModalContent>\n    </Modal>\n    <Modal onOpen={onOpen}>\n      <ModalTrigger>\n        <Button>Loading Body & Footer</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalLoader isLoading={isLoading}>\n          <ModalBody>\n            <StoryText>{bodyText}</StoryText>\n          </ModalBody>\n          <ModalFooter>\n            <Button>{buttonText}</Button>\n          </ModalFooter>\n        </ModalLoader>\n      </ModalContent>\n    </Modal>\n    <Modal onOpen={onOpen}>\n      <ModalTrigger>\n        <Button>Loading just Body</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalLoader isLoading={isLoading}>\n          <ModalBody>\n            <StoryText>{bodyText}</StoryText>\n          </ModalBody>\n        </ModalLoader>\n        <ModalFooter>\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n  </StoryStack>\n);"
      }
    }
  },
  render: args => {
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const onOpen = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 250);
    };
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(components_Modal, _extends({}, args, {
      onOpen: onOpen
    }), /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Loading Everything")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalLoader/* default */.A, {
      isLoading: isLoading
    }, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, bodyText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))))), /*#__PURE__*/react.createElement(components_Modal, _extends({}, args, {
      onOpen: onOpen
    }), /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Loading Body & Footer")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalLoader/* default */.A, {
      isLoading: isLoading
    }, /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, bodyText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))))), /*#__PURE__*/react.createElement(components_Modal, _extends({}, args, {
      onOpen: onOpen
    }), /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Loading just Body")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalLoader/* default */.A, {
      isLoading: isLoading
    }, /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, bodyText))), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText)))));
  },
  play: function () {
    var _ref10 = _asyncToGenerator(function (_ref11) {
      let {
        canvasElement
      } = _ref11;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const buttons = canvas.getAllByRole('button');
        for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          if (i > 0) {
            const dialog = dist/* screen */.nj.getByRole('dialog');
            const closeButton = (0,dist/* within */.ux)(dialog).getByRole('button', {
              name: 'Close'
            });
            yield dist/* userEvent */.Q4.click(closeButton, {
              delay: DELAY
            });
          }
          yield dist/* userEvent */.Q4.click(button, {
            delay: DELAY
          });
          yield (0,src/* takeScreenshot */.w)();
        }
      }();
    });
    return function play(_x5) {
      return _ref10.apply(this, arguments);
    };
  }()
};
const FloatingHeader = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Please note that we add a `max-width` of `600px` to the image, same as the `Modal`, to avoid styling inconsistencies.'
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(components_Modal, args, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, {
    floating: true
  }, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, {
    color: "light"
  })), /*#__PURE__*/react.createElement(Image/* default */.A, {
    alt: "image",
    src: modal_background_namespaceObject,
    maxWidth: 600
  }), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    marginTop: "6",
    color: "business_1200"
  }, "Get more for your business"), /*#__PURE__*/react.createElement(StoryText/* default */.A, null, "Manage all your business orders and freelancers in one place\u2014with exclusive tools for businesses like yours.")), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))))
};
const NestedModals = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [innerModalIsOpen, setInnerModalIsOpen] = useState(false);\nconst closeInnerModal = () => setInnerModalIsOpen(false);\nconst openInnerModal = () => setInnerModalIsOpen(true);\n\nreturn (\n  <>\n    <Modal centered onClose={close}>\n      <ModalTrigger>\n        <Button>Open first modal</Button>\n      </ModalTrigger>\n      <ModalContent size=\"xl\" closeOnClickOutside={!innerModalIsOpen}>\n        <ModalHeader>\n          First modal\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>{\"Click footer's button \uD83D\uDC40\"}</ModalBody>\n        <ModalFooter>\n          <Button intent=\"secondary\" onClick={openInnerModal}>\n            Open another modal\n          </Button>\n        </ModalFooter>\n        <Modal isOpen={innerModalIsOpen} onClose={closeInnerModal}>\n          <ModalContent>\n            <ModalHeader>\n              Nested modal\n              <ModalCloseBtn />\n            </ModalHeader>\n            <ModalBody>\n              <StoryText>{bodyText}</StoryText>\n            </ModalBody>\n            <ModalFooter>\n              <Button>{buttonText}</Button>\n            </ModalFooter>\n          </ModalContent>\n        </Modal>\n      </ModalContent>\n    </Modal>\n  </>\n);"
      }
    }
  },
  render: args => {
    const [innerModalIsOpen, setInnerModalIsOpen] = (0,react.useState)(false);
    const closeInnerModal = () => setInnerModalIsOpen(false);
    const openInnerModal = () => setInnerModalIsOpen(true);
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_Modal, _extends({}, args, {
      centered: true,
      onClose: close
    }), /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open first modal")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, {
      size: "xl",
      closeOnEscapeKey: !innerModalIsOpen
    }, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, "First modal", /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, "Click footer's button 👀"), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
      intent: "secondary",
      onClick: openInnerModal
    }, "Open another modal")), /*#__PURE__*/react.createElement(components_Modal, {
      isOpen: innerModalIsOpen,
      onClose: closeInnerModal
    }, /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, "Nested modal", /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, bodyText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText)))))));
  },
  play: function () {
    var _ref12 = _asyncToGenerator(function (_ref13) {
      let {
        canvasElement
      } = _ref13;
      return function* () {
        yield openModal({
          canvasElement
        });
        yield (0,src/* takeScreenshot */.w)();
        const innerModalButton = dist/* screen */.nj.getByText('Open another modal');
        yield dist/* userEvent */.Q4.click(innerModalButton, {
          delay: DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x6) {
      return _ref12.apply(this, arguments);
    };
  }()
};
const CustomDesign = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'You can manipulate the `Modal` sub components into your custom design.'
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(components_Modal, _extends({}, args, {
    centered: true
  }), /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open Modal With Custom Design")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, {
    size: "xl"
  }, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    flex: "1",
    width: "100%",
    minHeight: "50vh"
  }, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    as: "section",
    id: "left-side",
    flex: "1",
    flexBasis: "50%",
    maxWidth: "100%",
    direction: "column"
  }, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    display: "block",
    flex: "1",
    padding: "8"
  }, bodyText), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    display: "block"
  }, /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Actions")))), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    id: "right-side",
    flex: "1",
    flexBasis: "50%",
    maxWidth: "100%",
    direction: "column"
  }, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    position: "absolute",
    display: "block",
    right: 0,
    padding: "3"
  }, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(Image/* default */.A, {
    alt: "image",
    flex: 1,
    maxWidth: "100%",
    src: "https://images.unsplash.com/photo-1583665606514-e0f81cc5cded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
  })))))
};
const Dark = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    theme: 'dark'
  },
  play: function () {
    var _ref14 = _asyncToGenerator(function (_ref15) {
      let {
        canvasElement
      } = _ref15;
      return function* () {
        yield openModal({
          canvasElement
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x7) {
      return _ref14.apply(this, arguments);
    };
  }()
};
const meta = {
  title: 'Overlay/Modal',
  component: components_Modal,
  render: args => /*#__PURE__*/react.createElement(components_Modal, args, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(ModalCloseBtn/* default */.A, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, bodyText)), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))))
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  play: async ({\n    canvasElement\n  }) => {\n    await openModal({\n      canvasElement\n    });\n    await takeScreenshot();\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Modal can be controlled by passing the state value `isOpen` and callback `onClose`.'\n      },\n      source: {\n        code: `const [isOpen, setIsOpen] = useState(false);\nconst close = () => setIsOpen(false);\nconst open = () => setIsOpen(true);\n\nreturn (\n  <>\n    <Button onClick={open}>Open</Button>\n    <Modal isOpen={isOpen} onClose={close}>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>\n          <StoryText>{bodyText}</StoryText>\n        </ModalBody>\n        <ModalFooter>\n          <ModalCancelBtn />\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n  </>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [isOpen, setIsOpen] = useState(false);\n    const close = () => setIsOpen(false);\n    const open = () => setIsOpen(true);\n    return <>\n        <Button onClick={open}>Open</Button>\n        <Modal {...args} isOpen={isOpen} onClose={close}>\n          <ModalContent>\n            <ModalHeader>\n              {headerText}\n              <ModalCloseBtn />\n            </ModalHeader>\n            <ModalBody>\n              <StoryText>{bodyText}</StoryText>\n            </ModalBody>\n            <ModalFooter>\n              <ModalCancelBtn />\n              <Button>{buttonText}</Button>\n            </ModalFooter>\n          </ModalContent>\n        </Modal>\n      </>;\n  }\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
WithCancelButton.parameters = {
  ...WithCancelButton.parameters,
  docs: {
    ...WithCancelButton.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'You can add to the footer a cancel button.'\n      },\n      source: {\n        code: `\n    <Modal>\n      <ModalTrigger>\n        <Button>Open with cancel button</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>\n          <StoryText>{bodyText}</StoryText>\n        </ModalBody>\n        <ModalFooter>\n          <ModalCancelBtn>\n          Custom Cancel Text\n          </ModalCancelBtn>\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>`\n      }\n    }\n  },\n  render: () => <Modal>\n      <ModalTrigger>\n        <Button>Open with cancel button</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>\n          <StoryText>{bodyText}</StoryText>\n        </ModalBody>\n        <ModalFooter>\n          <ModalCancelBtn>Custom Cancel Text</ModalCancelBtn>\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n}",
      ...WithCancelButton.parameters?.docs?.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...Sizes.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: \"Modal's content can be specified to use 5 different widths, determined by `sm (520px)`, `md (600px)`, `lg (720px)`, `xl (900px)`, and `xxl (1060px)` sizes.<br>\" + ' You can also provide responsive sizes by passing an object with breakpoints as keys and sizes as values. <br>' + 'The default size is set to `md` and the `max-width` is set to 1060px.'\n      },\n      source: {\n        code: `<Modal>\n  <ModalTrigger>\n    <Button>{\"Open with size \" + size}</Button>\n  </ModalTrigger>\n  <ModalContent size={size}>\n    <ModalHeader>\n      {headerText}\n      <ModalCloseBtn />\n    </ModalHeader>\n    <ModalBody>{\"Content of modal with size \" + size}</ModalBody>\n    <ModalFooter>\n      <Button>{buttonText}</Button>\n    </ModalFooter>\n  </ModalContent>\n</Modal>`\n      }\n    }\n  },\n  render: args => <StoryStack>\n      <ContentSizes {...args} size=\"sm\" />\n      <ContentSizes {...args} size=\"md\" />\n      <ContentSizes {...args} size=\"lg\" />\n      <ContentSizes {...args} size=\"xl\" />\n      <ContentSizes {...args} size=\"xxl\" />\n      <ContentSizes {...args} size={{\n      default: 'sm',\n      lg: 'md',\n      xl: 'xxl'\n    }} fullScreenBreakpoint=\"none\" />\n    </StoryStack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const buttons = canvas.getAllByRole('button');\n    for (let i = 0; i < buttons.length; i++) {\n      const button = buttons[i];\n      if (i > 0) {\n        const dialog = screen.getByRole('dialog');\n        const closeButton = within(dialog).getByRole('button', {\n          name: 'Close'\n        });\n        await userEvent.click(closeButton, {\n          delay: DELAY\n        });\n      }\n      await userEvent.click(button, {\n        delay: DELAY\n      });\n      await takeScreenshot();\n    }\n  }\n}",
      ...Sizes.parameters?.docs?.source
    }
  }
};
ScrollableModal.parameters = {
  ...ScrollableModal.parameters,
  docs: {
    ...ScrollableModal.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Modal {...args}>\n      <ModalTrigger>\n        <Button>Open</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>\n          <StoryText>{longBodyText}</StoryText>\n        </ModalBody>\n        <ModalFooter>\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n}",
      ...ScrollableModal.parameters?.docs?.source
    }
  }
};
AvoidCloseOnClickOutside.parameters = {
  ...AvoidCloseOnClickOutside.parameters,
  docs: {
    ...AvoidCloseOnClickOutside.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Without a close icon and the ability to close by clicking outside, the `esc \u238B` key is the only way to close this modal. Additionally, you could try pressing the `tab \u21E5` key to focus to the footer button (first and only focusable element).'\n      },\n      source: {\n        code: `<Modal>\n  <ModalTrigger>\n    <Button>Open</Button>\n  </ModalTrigger>\n  <ModalContent closeOnOverlayClick={false}>\n    <ModalHeader>\n      {headerText}\n      <ModalCloseBtn />\n    </ModalHeader>\n    <ModalBody>\n      <StoryText>{bodyText}</StoryText>\n    </ModalBody>\n    <ModalFooter>\n      <Button>{buttonText}</Button>\n    </ModalFooter>\n  </ModalContent>\n</Modal>`\n      }\n    }\n  },\n  render: args => <Modal {...args}>\n      <ModalTrigger>\n        <Button>Open</Button>\n      </ModalTrigger>\n      <ModalContent closeOnOverlayClick={false}>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>\n          <StoryText>{bodyText}</StoryText>\n        </ModalBody>\n        <ModalFooter>\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n}",
      ...AvoidCloseOnClickOutside.parameters?.docs?.source
    }
  }
};
RenderWhenClosed.parameters = {
  ...RenderWhenClosed.parameters,
  docs: {
    ...RenderWhenClosed.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Watch the dom to see the content exists also when Modal is closed'\n      }\n    }\n  },\n  render: args => <Modal {...args}>\n      <ModalTrigger>\n        <Button>Open</Button>\n      </ModalTrigger>\n      <ModalContent renderWhenClosed>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>\n          <StoryText>{bodyText}</StoryText>\n        </ModalBody>\n        <ModalFooter>\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n}",
      ...RenderWhenClosed.parameters?.docs?.source
    }
  }
};
DisableMobileFullscreen.parameters = {
  ...DisableMobileFullscreen.parameters,
  docs: {
    ...DisableMobileFullscreen.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    fullScreenBreakpoint: 'none'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: \"Modal won't turn fullscreen for smaller screens but resize responsively to those changes.\"\n      }\n    }\n  }\n}",
      ...DisableMobileFullscreen.parameters?.docs?.source
    }
  }
};
Fullscreen.parameters = {
  ...Fullscreen.parameters,
  docs: {
    ...Fullscreen.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    fullScreenBreakpoint: 'all'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await openModal({\n      canvasElement\n    });\n    await takeScreenshot();\n  }\n}",
      ...Fullscreen.parameters?.docs?.source
    }
  }
};
SmFullscreen.parameters = {
  ...SmFullscreen.parameters,
  docs: {
    ...SmFullscreen.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    fullScreenBreakpoint: 'sm'\n  }\n}",
      ...SmFullscreen.parameters?.docs?.source
    }
  }
};
WithLoader.parameters = {
  ...WithLoader.parameters,
  docs: {
    ...WithLoader.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [isLoading, setIsLoading] = useState(true);\nconst onOpen = () => {\n  setIsLoading(true);\n  setTimeout(() => {\n    setIsLoading(false);\n  }, 250);\n};\n\nreturn (\n  <StoryStack>\n    <Modal onOpen={onOpen}>\n      <ModalTrigger>\n        <Button>Loading Everything</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalLoader isLoading={isLoading}>\n          <ModalHeader>\n            {headerText}\n            <ModalCloseBtn />\n          </ModalHeader>\n          <ModalBody>\n            <StoryText>{bodyText}</StoryText>\n          </ModalBody>\n          <ModalFooter>\n            <Button>{buttonText}</Button>\n          </ModalFooter>\n        </ModalLoader>\n      </ModalContent>\n    </Modal>\n    <Modal onOpen={onOpen}>\n      <ModalTrigger>\n        <Button>Loading Body & Footer</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalLoader isLoading={isLoading}>\n          <ModalBody>\n            <StoryText>{bodyText}</StoryText>\n          </ModalBody>\n          <ModalFooter>\n            <Button>{buttonText}</Button>\n          </ModalFooter>\n        </ModalLoader>\n      </ModalContent>\n    </Modal>\n    <Modal onOpen={onOpen}>\n      <ModalTrigger>\n        <Button>Loading just Body</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>\n          {headerText}\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalLoader isLoading={isLoading}>\n          <ModalBody>\n            <StoryText>{bodyText}</StoryText>\n          </ModalBody>\n        </ModalLoader>\n        <ModalFooter>\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n  </StoryStack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [isLoading, setIsLoading] = useState(true);\n    const onOpen = () => {\n      setIsLoading(true);\n      setTimeout(() => {\n        setIsLoading(false);\n      }, 250);\n    };\n    return <StoryStack>\n        <Modal {...args} onOpen={onOpen}>\n          <ModalTrigger>\n            <Button>Loading Everything</Button>\n          </ModalTrigger>\n          <ModalContent>\n            <ModalLoader isLoading={isLoading}>\n              <ModalHeader>\n                {headerText}\n                <ModalCloseBtn />\n              </ModalHeader>\n              <ModalBody>\n                <StoryText>{bodyText}</StoryText>\n              </ModalBody>\n              <ModalFooter>\n                <Button>{buttonText}</Button>\n              </ModalFooter>\n            </ModalLoader>\n          </ModalContent>\n        </Modal>\n        <Modal {...args} onOpen={onOpen}>\n          <ModalTrigger>\n            <Button>Loading Body & Footer</Button>\n          </ModalTrigger>\n          <ModalContent>\n            <ModalHeader>\n              {headerText}\n              <ModalCloseBtn />\n            </ModalHeader>\n            <ModalLoader isLoading={isLoading}>\n              <ModalBody>\n                <StoryText>{bodyText}</StoryText>\n              </ModalBody>\n              <ModalFooter>\n                <Button>{buttonText}</Button>\n              </ModalFooter>\n            </ModalLoader>\n          </ModalContent>\n        </Modal>\n        <Modal {...args} onOpen={onOpen}>\n          <ModalTrigger>\n            <Button>Loading just Body</Button>\n          </ModalTrigger>\n          <ModalContent>\n            <ModalHeader>\n              {headerText}\n              <ModalCloseBtn />\n            </ModalHeader>\n            <ModalLoader isLoading={isLoading}>\n              <ModalBody>\n                <StoryText>{bodyText}</StoryText>\n              </ModalBody>\n            </ModalLoader>\n            <ModalFooter>\n              <Button>{buttonText}</Button>\n            </ModalFooter>\n          </ModalContent>\n        </Modal>\n      </StoryStack>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const buttons = canvas.getAllByRole('button');\n    for (let i = 0; i < buttons.length; i++) {\n      const button = buttons[i];\n      if (i > 0) {\n        const dialog = screen.getByRole('dialog');\n        const closeButton = within(dialog).getByRole('button', {\n          name: 'Close'\n        });\n        await userEvent.click(closeButton, {\n          delay: DELAY\n        });\n      }\n      await userEvent.click(button, {\n        delay: DELAY\n      });\n      await takeScreenshot();\n    }\n  }\n}",
      ...WithLoader.parameters?.docs?.source
    }
  }
};
FloatingHeader.parameters = {
  ...FloatingHeader.parameters,
  docs: {
    ...FloatingHeader.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Please note that we add a `max-width` of `600px` to the image, same as the `Modal`, to avoid styling inconsistencies.'\n      }\n    }\n  },\n  render: args => <Modal {...args}>\n      <ModalTrigger>\n        <Button>Open</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader floating>\n          <ModalCloseBtn color=\"light\" />\n        </ModalHeader>\n        <Image alt=\"image\" src={modalBackground} maxWidth={600} />\n        <ModalBody>\n          <StoryText marginTop=\"6\" color=\"business_1200\">\n            Get more for your business\n          </StoryText>\n          <StoryText>\n            Manage all your business orders and freelancers in one place\u2014with exclusive tools for businesses like yours.\n          </StoryText>\n        </ModalBody>\n        <ModalFooter>\n          <Button>{buttonText}</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n}",
      ...FloatingHeader.parameters?.docs?.source
    }
  }
};
NestedModals.parameters = {
  ...NestedModals.parameters,
  docs: {
    ...NestedModals.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [innerModalIsOpen, setInnerModalIsOpen] = useState(false);\nconst closeInnerModal = () => setInnerModalIsOpen(false);\nconst openInnerModal = () => setInnerModalIsOpen(true);\n\nreturn (\n  <>\n    <Modal centered onClose={close}>\n      <ModalTrigger>\n        <Button>Open first modal</Button>\n      </ModalTrigger>\n      <ModalContent size=\"xl\" closeOnClickOutside={!innerModalIsOpen}>\n        <ModalHeader>\n          First modal\n          <ModalCloseBtn />\n        </ModalHeader>\n        <ModalBody>{\"Click footer's button \uD83D\uDC40\"}</ModalBody>\n        <ModalFooter>\n          <Button intent=\"secondary\" onClick={openInnerModal}>\n            Open another modal\n          </Button>\n        </ModalFooter>\n        <Modal isOpen={innerModalIsOpen} onClose={closeInnerModal}>\n          <ModalContent>\n            <ModalHeader>\n              Nested modal\n              <ModalCloseBtn />\n            </ModalHeader>\n            <ModalBody>\n              <StoryText>{bodyText}</StoryText>\n            </ModalBody>\n            <ModalFooter>\n              <Button>{buttonText}</Button>\n            </ModalFooter>\n          </ModalContent>\n        </Modal>\n      </ModalContent>\n    </Modal>\n  </>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [innerModalIsOpen, setInnerModalIsOpen] = useState(false);\n    const closeInnerModal = () => setInnerModalIsOpen(false);\n    const openInnerModal = () => setInnerModalIsOpen(true);\n    return <>\n        <Modal {...args} centered onClose={close}>\n          <ModalTrigger>\n            <Button>Open first modal</Button>\n          </ModalTrigger>\n          <ModalContent size=\"xl\" closeOnEscapeKey={!innerModalIsOpen}>\n            <ModalHeader>\n              First modal\n              <ModalCloseBtn />\n            </ModalHeader>\n            <ModalBody>{\"Click footer's button \uD83D\uDC40\"}</ModalBody>\n            <ModalFooter>\n              <Button intent=\"secondary\" onClick={openInnerModal}>\n                Open another modal\n              </Button>\n            </ModalFooter>\n            <Modal isOpen={innerModalIsOpen} onClose={closeInnerModal}>\n              <ModalContent>\n                <ModalHeader>\n                  Nested modal\n                  <ModalCloseBtn />\n                </ModalHeader>\n                <ModalBody>\n                  <StoryText>{bodyText}</StoryText>\n                </ModalBody>\n                <ModalFooter>\n                  <Button>{buttonText}</Button>\n                </ModalFooter>\n              </ModalContent>\n            </Modal>\n          </ModalContent>\n        </Modal>\n      </>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await openModal({\n      canvasElement\n    });\n    await takeScreenshot();\n    const innerModalButton = screen.getByText('Open another modal');\n    await userEvent.click(innerModalButton, {\n      delay: DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...NestedModals.parameters?.docs?.source
    }
  }
};
CustomDesign.parameters = {
  ...CustomDesign.parameters,
  docs: {
    ...CustomDesign.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'You can manipulate the `Modal` sub components into your custom design.'\n      }\n    }\n  },\n  render: args => <Modal {...args} centered>\n      <ModalTrigger>\n        <Button>Open Modal With Custom Design</Button>\n      </ModalTrigger>\n      <ModalContent size=\"xl\">\n        <StoryStack flex=\"1\" width=\"100%\" minHeight=\"50vh\">\n          <StoryStack as=\"section\" id=\"left-side\" flex=\"1\" flexBasis=\"50%\" maxWidth=\"100%\" direction=\"column\">\n            <StoryStack display=\"block\" flex=\"1\" padding=\"8\">\n              {bodyText}\n            </StoryStack>\n            <StoryStack display=\"block\">\n              <ModalFooter>\n                <Button>Actions</Button>\n              </ModalFooter>\n            </StoryStack>\n          </StoryStack>\n          <StoryStack id=\"right-side\" flex=\"1\" flexBasis=\"50%\" maxWidth=\"100%\" direction=\"column\">\n            <StoryStack position=\"absolute\" display=\"block\" right={0} padding=\"3\">\n              <ModalCloseBtn />\n            </StoryStack>\n            <Image alt=\"image\" flex={1} maxWidth=\"100%\" src=\"https://images.unsplash.com/photo-1583665606514-e0f81cc5cded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80\" />\n          </StoryStack>\n        </StoryStack>\n      </ModalContent>\n    </Modal>\n}",
      ...CustomDesign.parameters?.docs?.source
    }
  }
};
Dark.parameters = {
  ...Dark.parameters,
  docs: {
    ...Dark.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    theme: 'dark'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await openModal({\n      canvasElement\n    });\n    await takeScreenshot();\n  }\n}",
      ...Dark.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Controlled","WithCancelButton","Sizes","ScrollableModal","AvoidCloseOnClickOutside","RenderWhenClosed","DisableMobileFullscreen","Fullscreen","SmFullscreen","WithLoader","FloatingHeader","NestedModals","CustomDesign","Dark"];

/***/ }),

/***/ "../overlay/src/components/Overlay/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
;// ../overlay/src/components/Overlay/constants.ts

const OPACITY_VALUES = {
  high: '0.8',
  low: '0.55'
};
const COLORS = {
  white: themeVars/* colors */.Tj.white,
  grey: themeVars/* colors */.Tj.grey_1200
};
;// ../overlay/src/components/Overlay/index.tsx
const _excluded = ["children", "opacity", "lockBodyScroll", "background", "position", "zIndex", "className", "onClick", "dataTestId", "style", "dataTrackTag"];
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
  return /*#__PURE__*/react.createElement(Container/* default */.A, _extends({
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
  }, rest, {
    dataTrackTag: dataTrackTag
  }), children);
};
Overlay.displayName = 'Overlay';
/* harmony default export */ const components_Overlay = (Overlay);
try {
    // @ts-ignore
    Overlay.displayName = "Overlay";
    // @ts-ignore
    Overlay.__docgenInfo = { "description": "", "displayName": "Overlay", "props": { "background": { "defaultValue": { value: "grey" }, "description": "", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "\"white\"" }, { "value": "\"grey\"" }] } }, "opacity": { "defaultValue": { value: "low" }, "description": "", "name": "opacity", "required": false, "type": { "name": "enum", "value": [{ "value": "\"high\"" }, { "value": "\"low\"" }] } }, "position": { "defaultValue": { value: "fixed" }, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"absolute\"" }] } }, "lockBodyScroll": { "defaultValue": { value: "true" }, "description": "Allows to lock document body overflow.", "name": "lockBodyScroll", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLDivElement>" } }, "className": { "defaultValue": null, "description": "@deprecated please use styling props instead", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "@deprecated please use styling props instead", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "centered": { "defaultValue": null, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "overlay" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"heading\"" }, { "value": "\"bodyPrimary\"" }, { "value": "\"bodySecondary\"" }, { "value": "\"linkPrimary\"" }, { "value": "\"linkSecondary\"" }] } }, "fill": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "fill", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "columnGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "rowGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "gap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "boxShadow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "boxShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "borderStyle": { "defaultValue": null, "description": "", "name": "borderStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"dashed\"" }, { "value": "\"solid\"" }] } }, "borderColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "borderColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "borderWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderTopWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderTopWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderRightWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderRightWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderBottomWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderBottomWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderLeftWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderLeftWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "dropShadow": { "defaultValue": null, "description": "", "name": "dropShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"label\"" }, { "value": "\"span\"" }, { "value": "\"a\"" }, { "value": "\"address\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"details\"" }, { "value": "\"div\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"header\"" }, { "value": "\"li\"" }, { "value": "\"main\"" }, { "value": "\"nav\"" }, { "value": "\"section\"" }, { "value": "\"ul\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "userSelect": { "defaultValue": null, "description": "", "name": "userSelect", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"text\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "outlineWidth": { "defaultValue": null, "description": "Supported values: sm = 1px, md = 2px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "outlineOffset": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, lg = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineOffset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }, { "value": "\"0\"" }] } }, "outlineColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "outlineStyle": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"solid\"" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "pointerEvents": { "defaultValue": null, "description": "", "name": "pointerEvents", "required": false, "type": { "name": "\"none\"" } }, "zIndex": { "defaultValue": { value: "overlay" }, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"light\"" }, { "value": "\"inherit\"" }, { "value": "\"normal\"" }, { "value": "\"semibold\"" }] } }, "lineHeight": { "defaultValue": null, "description": "Supported values: b_xxs = 14px, b_xs = 18px, b_sm = 22px, b_md = 24px, b_lg = 26px, b_xl = 28px, b_xxl = 32px,\nh_xxs = 22px, h_xs = 25px, h_sm = 28px, h_md = 32px, h_lg = 36px h_xl = 38px, h_xxl = 48px, h_3xl = 56px, h_4xl = 66px, h_5xl = 74px, h_6xl = 92px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "lineHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "fontSize": { "defaultValue": null, "description": "Supported values: b_xxs = 10px, b_xs = 12px, b_sm = 14px, b_md = 16px, b_lg = 18px, b_xl = 20px, b_xxl = 24px,\nh_xxs = 16px, h_xs = 18px, h_sm = 20px, h_md = 24px, h_lg = 28px h_xl = 32px, h_xxl = 40px, h_3xl = 48px, h_4xl = 56px, h_5xl = 64px, h_6xl = 80px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fontSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"nowrap\"" }, { "value": "\"preWrap\"" }] } }, "wrap": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "wrap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }, { "value": "\"wrapReverse\"" }] } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignItems": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignItems", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "direction": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"column\"" }, { "value": "\"row\"" }, { "value": "\"rowReverse\"" }, { "value": "\"columnReverse\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../overlay/src/components/Overlay/index.tsx#Overlay"] = { docgenInfo: Overlay.__docgenInfo, name: "Overlay", path: "../overlay/src/components/Overlay/index.tsx#Overlay" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../overlay/src/hooks/useExitOnEscape/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../theme/dist/esm/src/utils/hex2rgb/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../typography/dist/esm/src/components/Heading/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/l1/Spinner.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const SpinnerL1Icon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('SpinnerL1Icon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .L1_ICON_SIZES */ .vy[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .L1_ICON_SIZES */ .vy[size],
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
SpinnerL1Icon.displayName = 'SpinnerL1Icon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerL1Icon);
;
SpinnerL1Icon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SpinnerL1Icon"
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
//# sourceMappingURL=7243.4b73a5b8.iframe.bundle.js.map