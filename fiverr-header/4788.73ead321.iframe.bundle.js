(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[4788],{

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

/***/ "../toast/src/components/raise/ToastContainer/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ buildContainerClass),
/* harmony export */   dX: () => (/* binding */ CENTER_CONTAINERS_STYLE),
/* harmony export */   dh: () => (/* binding */ BASE_CLASS),
/* harmony export */   o2: () => (/* binding */ BASE_STYLE)
/* harmony export */ });
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");


/**
 * The base class for the toast tray container.
 */
const BASE_CLASS = 'toaster-container';

/**
 * Builds the container className by location
 */
const buildContainerClass = location => "".concat(BASE_CLASS, "-").concat(location);

/**
 * The base styles for the toasts' container.
 */
const BASE_STYLE = {
  position: 'fixed',
  zIndex: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__/* .zIndex */ .fE.toast
};

/**
 * The base styles for all centered toasts' containers.
 */
const CENTER_CONTAINERS_STYLE = {
  left: '50%',
  transform: 'translateX(-50%)'
};

/***/ }),

/***/ "../toast/src/components/raise/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fp: () => (/* binding */ TOAST_MARGIN),
/* harmony export */   US: () => (/* binding */ VERTICAL_VALUES),
/* harmony export */   __: () => (/* binding */ HORIZONTAL_VALUES),
/* harmony export */   c8: () => (/* binding */ BASE_TOAST_STYLE),
/* harmony export */   cS: () => (/* binding */ DEFAULT_TIMEOUT),
/* harmony export */   ce: () => (/* binding */ INVALID_CONTENT_TYPE_ERROR),
/* harmony export */   hN: () => (/* binding */ VERTICAL_DATA_ATTRIBUTE),
/* harmony export */   rB: () => (/* binding */ NO_CONTENT_ERROR),
/* harmony export */   rb: () => (/* binding */ HORIZONTAL_DATA_ATTRIBUTE)
/* harmony export */ });
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");


/**
 * The default amount of time in miliseconds to wait before removing a toast.
 */
const DEFAULT_TIMEOUT = 5000;

/**
 * The default margin between toasts.
 */
const TOAST_MARGIN = 12;

/**
 * The data attribute attached to the tray element to indicate its vertical position.
 */
const VERTICAL_DATA_ATTRIBUTE = 'data-vertical-position';

/**
 * A map of all available vertical tray values.
 */
const VERTICAL_VALUES = {
  TOP: 'top',
  BOTTOM: 'bottom'
};

/**
 * The data attribute attached to the tray element to indicate its horizontal position.
 */
const HORIZONTAL_DATA_ATTRIBUTE = 'data-horizontal-position';

/**
 * A map of all available horizontal tray values.
 */
const HORIZONTAL_VALUES = {
  CENTER: 'center',
  EDGE: 'edge'
};

/**
 * The error thrown when the toast's content wasn't passed.
 */
const NO_CONTENT_ERROR = 'No content was provided for toaster';

/**
 * The error thrown when the content passed is not a valid React element.
 */
const INVALID_CONTENT_TYPE_ERROR = 'Toasts must be valid React elements.';

/**
 * The base styles for an individual toast.
 */
const BASE_TOAST_STYLE = {
  position: 'absolute',
  transition: '.5s',
  opacity: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__/* .opacity */ .ke['0']
};

/***/ }),

/***/ "../toast/src/components/raise/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_raise)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
// EXTERNAL MODULE: ../toast/src/components/raise/constants.ts
var constants = __webpack_require__("../toast/src/components/raise/constants.ts");
;// ../toast/src/components/raise/toast/constants.ts
/**
 * The toast element's class.
 */
const BASE_CLASS = 'base-toast';

/**
 * The individual toast's margin from the edges of the screen, in pixels.
 */
const GUTTER = 12;
;// ../toast/src/components/raise/toast/index.ts





/**
 * A map of all toasts timeouts, where the key is the toast element, and the value is the corresponding timeout for its dismissal.
 */
const timeouts = new Map();

/**
 * Removes a toast from its containing tray.
 */
const remove = function (toast) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Function.prototype;
  toast.addEventListener('transitionend', function cb(e) {
    if (e.target !== toast) {
      return;
    }
    toast.removeEventListener('transitionend', cb);
    callback(e);
    if (!toast.parentElement) {
      return;
    }
    react_dom.unmountComponentAtNode(toast);
    toast.parentElement.removeChild(toast);
  });
  toast.style.opacity = themeVars/* opacity */.ke['0'];
  toast.style.transform += ' scale(.8)';
};

/**
 * Schedules a toast's removal from its containing tray.
 */
const scheduleRemoval = function (toast) {
  let {
    duration = constants/* DEFAULT_TIMEOUT */.cS,
    callback = Function.prototype,
    removeFn = remove
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  timeouts.set(toast, setTimeout(() => {
    removeFn(toast, callback);
  }, duration));
};

/**
 * Creates a toast element.
 */
const create = function () {
  let duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : constants/* DEFAULT_TIMEOUT */.cS;
  const toast = document.createElement('li');
  toast.classList.add(BASE_CLASS);
  toast.onmouseenter = () => {
    clearTimeout(timeouts.get(toast));
  };
  toast.onmouseleave = () => {
    if (duration !== Infinity) {
      scheduleRemoval(toast, {
        duration
      });
    }
  };
  return toast;
};

/**
 * Fetches the correct toast styles, based on location.
 */
const getStyle = location => {
  switch (location) {
    case 'top-start':
      return {
        top: 0,
        left: "".concat(GUTTER, "px")
      };
    case 'top':
      return {
        top: 0,
        left: '50%'
      };
    case 'top-end':
      return {
        top: 0,
        right: "".concat(GUTTER, "px")
      };
    case 'bottom-start':
      return {
        bottom: 0,
        left: "".concat(GUTTER, "px")
      };
    case 'bottom':
      return {
        bottom: 0,
        left: '50%'
      };
    case 'bottom-end':
      return {
        bottom: 0,
        right: "".concat(GUTTER, "px")
      };
    default:
      return {};
  }
};
;// ../toast/src/components/raise/Tray/constants.ts
/**
 * A list of all available top locations.
 */
const TOP_LOCATIONS = ['top-start', 'top', 'top-end'];

/**
 * A list of all available top locations.
 */
const CENTER_LOCATIONS = ['top', 'bottom'];

/**
 * The base styles for the toasts' tray.
 */
const BASE_STYLE = {
  listStyle: 'none'
};
;// ../toast/src/components/raise/Tray/index.ts
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



/**
 * A toaster tray element.
 */
class Tray {
  constructor(location) {
    _defineProperty(this, "location", void 0);
    _defineProperty(this, "element", void 0);
    this.location = location;
    this.element = this.create();
  }
  get verticalDataValue() {
    return TOP_LOCATIONS.includes(this.location) ? constants/* VERTICAL_VALUES */.US.TOP : constants/* VERTICAL_VALUES */.US.BOTTOM;
  }
  get horizontalDataValue() {
    return CENTER_LOCATIONS.includes(this.location) ? constants/* HORIZONTAL_VALUES */.__.CENTER : constants/* HORIZONTAL_VALUES */.__.EDGE;
  }

  /**
   * Generates a tray element.
   */
  create() {
    const tray = document.createElement('ul');
    tray.setAttribute(constants/* VERTICAL_DATA_ATTRIBUTE */.hN, this.verticalDataValue);
    tray.setAttribute(constants/* HORIZONTAL_DATA_ATTRIBUTE */.rb, this.horizontalDataValue);
    Object.assign(tray.style, BASE_STYLE);
    return tray;
  }
}
// EXTERNAL MODULE: ../toast/src/components/raise/ToastContainer/constants.ts
var ToastContainer_constants = __webpack_require__("../toast/src/components/raise/ToastContainer/constants.ts");
;// ../toast/src/components/raise/ToastContainer/index.ts
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
      ToastContainer_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ToastContainer_defineProperty(e, r, t) {
  return (r = ToastContainer_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ToastContainer_toPropertyKey(t) {
  var i = ToastContainer_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function ToastContainer_toPrimitive(t, r) {
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
 * A toaster container element.
 */
class ToastContainer {
  constructor(location) {
    ToastContainer_defineProperty(this, "location", void 0);
    ToastContainer_defineProperty(this, "tray", void 0);
    ToastContainer_defineProperty(this, "element", void 0);
    this.location = location;
    this.element = this.create();
  }
  get style() {
    switch (this.location) {
      case 'top-start':
        return _objectSpread(_objectSpread({}, ToastContainer_constants/* BASE_STYLE */.o2), {}, {
          top: 0,
          left: 0
        });
      case 'top':
        return _objectSpread(_objectSpread(_objectSpread({}, ToastContainer_constants/* BASE_STYLE */.o2), ToastContainer_constants/* CENTER_CONTAINERS_STYLE */.dX), {}, {
          top: 0
        });
      case 'top-end':
        return _objectSpread(_objectSpread({}, ToastContainer_constants/* BASE_STYLE */.o2), {}, {
          top: 0,
          right: 0
        });
      case 'bottom-start':
        return _objectSpread(_objectSpread({}, ToastContainer_constants/* BASE_STYLE */.o2), {}, {
          bottom: 0,
          left: 0
        });
      case 'bottom':
        return _objectSpread(_objectSpread(_objectSpread({}, ToastContainer_constants/* BASE_STYLE */.o2), ToastContainer_constants/* CENTER_CONTAINERS_STYLE */.dX), {}, {
          bottom: 0
        });
      case 'bottom-end':
        return _objectSpread(_objectSpread({}, ToastContainer_constants/* BASE_STYLE */.o2), {}, {
          bottom: 0,
          right: 0
        });
      default:
        return _objectSpread({}, ToastContainer_constants/* BASE_STYLE */.o2);
    }
  }
  addClassNames(element) {
    if (this.location) {
      element.classList.add((0,ToastContainer_constants/* buildContainerClass */.UI)(this.location));
    }
  }

  /**
   * Generates a container element.
   */
  create() {
    const container = document.createElement('article');
    this.addClassNames(container);
    Object.assign(container.style, _objectSpread(_objectSpread({}, ToastContainer_constants/* BASE_STYLE */.o2), this.style));
    this.tray = new Tray(this.location).element;
    container.appendChild(this.tray);
    return container;
  }
}
;// ../toast/src/components/raise/index.ts
function raise_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function raise_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? raise_ownKeys(Object(t), !0).forEach(function (r) {
      raise_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : raise_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function raise_defineProperty(e, r, t) {
  return (r = raise_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function raise_toPropertyKey(t) {
  var i = raise_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function raise_toPrimitive(t, r) {
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
 * A memoized collection of all trays.
 */
const trays = {};

/**
 * Uses the latest container class on the container
 */
const adjustContainerClass = location => {
  const containerClassName = (0,ToastContainer_constants/* buildContainerClass */.UI)(location);
  const container = document.querySelector(".".concat(containerClassName));
  if (container) {
    container.className = containerClassName;
  }
};

/**
 * Ensures a toast tray exists, and creates it if not.
 */
const ensureContainer = location => {
  // Save some DOM querying
  if (trays[location]) {
    adjustContainerClass(location);
    return;
  }
  const existingTray = document.querySelector(".".concat((0,ToastContainer_constants/* buildContainerClass */.UI)(location), " ul"));
  if (existingTray) {
    adjustContainerClass(location);
    trays[location] = existingTray; // Make sure this bundle's trays object is populated
    return;
  }
  const container = new ToastContainer(location);
  document.body.appendChild(container.element);
  trays[location] = container.tray;
};

/**
 * Reorders the toasts inside a given tray element, animating them in the process.
 */
const reorderToasts = tray => {
  const isBottomTray = tray.getAttribute(constants/* VERTICAL_DATA_ATTRIBUTE */.hN) === constants/* VERTICAL_VALUES */.US.BOTTOM;
  const isCenterTray = tray.getAttribute(constants/* HORIZONTAL_DATA_ATTRIBUTE */.rb) === constants/* HORIZONTAL_VALUES */.__.CENTER;
  const direction = isBottomTray ? -1 : 1;
  let totalMargin = constants/* TOAST_MARGIN */.Fp * direction;
  const toasts = Array.from(tray.querySelectorAll(".".concat(BASE_CLASS)));
  toasts.reverse().forEach((toastElement, index) => {
    const toastHeight = toastElement.scrollHeight;
    Object.assign(toastElement.style, {
      transitionDelay: "".concat(0.02 * index, "s"),
      transform: ["translateY(".concat(totalMargin, "px)"), isCenterTray && 'translateX(-50%)'].filter(Boolean).join(' '),
      opacity: themeVars/* opacity */.ke['1']
    });
    totalMargin += (toastHeight + constants/* TOAST_MARGIN */.Fp) * direction;
  });
};

/**
 * Adds a toast to a tray and "pushes" it - rendering it in the tray whilst pushing previous toasts.
 */
const pushToast = (location, content, duration) => {
  const toastElement = create(duration);
  const tray = trays[location];
  const isBottomTray = tray.getAttribute(constants/* VERTICAL_DATA_ATTRIBUTE */.hN) === constants/* VERTICAL_VALUES */.US.BOTTOM;
  const isCenterTray = tray.getAttribute(constants/* HORIZONTAL_DATA_ATTRIBUTE */.rb) === constants/* HORIZONTAL_VALUES */.__.CENTER;
  const direction = isBottomTray ? 1 : -1;
  Object.assign(toastElement.style, raise_objectSpread(raise_objectSpread({}, constants/* BASE_TOAST_STYLE */.c8), {}, {
    transform: ["translateY(".concat(100 * direction, "%)"), isCenterTray && 'translateX(-50%)'].filter(Boolean).join(' ')
  }, getStyle(location)));
  react_dom.render((0,render_children/* renderChildren */.s)(content), toastElement);
  trays[location].appendChild(toastElement);
  reorderToasts(trays[location]);
  if (duration !== Infinity) {
    scheduleRemoval(toastElement, {
      duration
    });
  }
};

/**
 * "Raises" a toast, i.e. adds it to a tray and renders it.
 */
const raise = function (content) {
  let {
    location = 'bottom-end',
    duration = constants/* DEFAULT_TIMEOUT */.cS
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof document === 'undefined') {
    return;
  }
  if (!content) {
    throw new Error(constants/* NO_CONTENT_ERROR */.rB);
  }
  if (! /*#__PURE__*/react.isValidElement(content)) {
    throw new Error(constants/* INVALID_CONTENT_TYPE_ERROR */.ce);
  }
  ensureContainer(location);
  pushToast(location, content, duration);
};
/* harmony default export */ const components_raise = (raise);

/***/ }),

/***/ "../toast/src/components/raise/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CustomContent: () => (/* binding */ CustomContent),
  Durations: () => (/* binding */ Durations),
  Locations: () => (/* binding */ Locations),
  Primary: () => (/* binding */ Primary),
  Types: () => (/* binding */ Types),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../toast/src/components/raise/index.ts + 5 modules
var raise = __webpack_require__("../toast/src/components/raise/index.ts");
// EXTERNAL MODULE: ../toast/src/components/raise/constants.ts
var constants = __webpack_require__("../toast/src/components/raise/constants.ts");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/CheckCircle.js
var CheckCircle = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckCircle.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js
var WarningCircle = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/InfoCircle.js
var InfoCircle = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/InfoCircle.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/TimesButton/index.js
var TimesButton = __webpack_require__("../button/dist/esm/src/components/TimesButton/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
;// ../toast/src/components/raiseToast/Toast/index.tsx





const ICON_BY_TYPE = {
  success: {
    icon: CheckCircle/* default */.A,
    color: 'green_1000',
    borderColor: 'green_900'
  },
  error: {
    icon: WarningCircle/* default */.A,
    color: 'red_1000',
    borderColor: 'red_900'
  },
  info: {
    icon: InfoCircle/* default */.A,
    color: 'blue_1000',
    borderColor: 'blue_900'
  }
};
const Toast = _ref => {
  let {
    message,
    type = 'info',
    dataTrackTag,
    dataTrackValue
  } = _ref;
  const [shouldRender, setShouldRender] = (0,react.useState)(true);
  if (!shouldRender) {
    return null;
  }
  const {
    icon: Icon,
    color,
    borderColor
  } = ICON_BY_TYPE[type];
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    as: "span",
    display: "flex",
    alignItems: "center",
    height: "auto",
    borderLeftWidth: "xl",
    maxWidth: {
      default: '85vw',
      sm: '392px'
    },
    boxShadow: "z4",
    borderColor: borderColor,
    backgroundColor: "white",
    paddingY: "2",
    paddingRight: "2",
    borderRadius: "sm",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    alignItems: "center",
    flex: 1,
    width: "max-content",
    marginRight: "3"
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    as: "span",
    display: "inlineFlex",
    paddingRight: "3",
    paddingLeft: "4"
  }, /*#__PURE__*/react.createElement(Icon, {
    color: color
  })), /*#__PURE__*/react.createElement(Text/* default */.A, {
    fontWeight: "semibold"
  }, message)), /*#__PURE__*/react.createElement(TimesButton/* default */.A, {
    size: "3xs",
    onClick: () => setShouldRender(false)
  }));
};
Toast.displayName = 'Toast';
/* harmony default export */ const raiseToast_Toast = (Toast);
try {
    // @ts-ignore
    Toast.displayName = "Toast";
    // @ts-ignore
    Toast.__docgenInfo = { "description": "", "displayName": "Toast", "props": { "message": { "defaultValue": null, "description": "A message to be rendered inside the error toast", "name": "message", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "type": { "defaultValue": { value: "info" }, "description": "The toast's type.", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"info\"" }, { "value": "\"success\"" }, { "value": "\"error\"" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../toast/src/components/raiseToast/Toast/index.tsx#Toast"] = { docgenInfo: Toast.__docgenInfo, name: "Toast", path: "../toast/src/components/raiseToast/Toast/index.tsx#Toast" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../toast/src/components/raiseToast/index.tsx




const raiseToast = _ref => {
  let {
    message,
    type = 'info',
    duration = constants/* DEFAULT_TIMEOUT */.cS,
    location = 'bottom-end',
    dataTrackTag = 'toast',
    dataTrackValue
  } = _ref;
  (0,raise/* default */.A)(/*#__PURE__*/react.createElement(raiseToast_Toast, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    message: message,
    type: type
  }), {
    location,
    duration
  });
};
/* harmony default export */ const components_raiseToast = (raiseToast);
try {
    // @ts-ignore
    raiseToast.displayName = "raiseToast";
    // @ts-ignore
    raiseToast.__docgenInfo = { "description": "", "displayName": "raiseToast", "props": { "type": { "defaultValue": { value: "info" }, "description": "The toast's type.", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"info\"" }, { "value": "\"success\"" }, { "value": "\"error\"" }] } }, "dataTrackTag": { "defaultValue": { value: "toast" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "message": { "defaultValue": null, "description": "A message to be rendered inside the error toast", "name": "message", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "location": { "defaultValue": { value: "bottom-end" }, "description": "", "name": "location", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }] } }, "duration": { "defaultValue": { value: "5000" }, "description": "", "name": "duration", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../toast/src/components/raiseToast/index.tsx#raiseToast"] = { docgenInfo: raiseToast.__docgenInfo, name: "raiseToast", path: "../toast/src/components/raiseToast/index.tsx#raiseToast" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../toast/src/components/raise/ToastContainer/constants.ts
var ToastContainer_constants = __webpack_require__("../toast/src/components/raise/ToastContainer/constants.ts");
;// ../toast/src/components/raise/stories/RaiseToastDemo.tsx



const RaiseToastDemo = props => {
  const getText = () => {
    if (props.location) {
      return "Raise ".concat(props.location, " toast");
    } else if (props.type) {
      return "Raise ".concat(props.type, " toast");
    }
    return 'Raise toast';
  };
  return /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(props)
  }, getText());
};
/* harmony default export */ const stories_RaiseToastDemo = (RaiseToastDemo);
try {
    // @ts-ignore
    RaiseToastDemo.displayName = "RaiseToastDemo";
    // @ts-ignore
    RaiseToastDemo.__docgenInfo = { "description": "", "displayName": "RaiseToastDemo", "props": { "type": { "defaultValue": { value: "info" }, "description": "The toast's type.", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"info\"" }, { "value": "\"success\"" }, { "value": "\"error\"" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "message": { "defaultValue": null, "description": "A message to be rendered inside the error toast", "name": "message", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "location": { "defaultValue": null, "description": "", "name": "location", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }] } }, "duration": { "defaultValue": null, "description": "", "name": "duration", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../toast/src/components/raise/stories/RaiseToastDemo.tsx#RaiseToastDemo"] = { docgenInfo: RaiseToastDemo.__docgenInfo, name: "RaiseToastDemo", path: "../toast/src/components/raise/stories/RaiseToastDemo.tsx#RaiseToastDemo" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../toast/src/components/raise/stories/index.stories.tsx
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
const defaultMessage = esm/* faker */.az.lorem.sentence();
const clearToasts = () => document.querySelectorAll("[class^=".concat(ToastContainer_constants/* BASE_CLASS */.dh, "]")).forEach(tray => {
  const trayContent = tray === null || tray === void 0 ? void 0 : tray.children[0];
  if (trayContent !== null && trayContent !== void 0 && trayContent.hasChildNodes()) {
    while (trayContent.firstChild) {
      trayContent.removeChild(trayContent.firstChild);
    }
  }
});
const screenshotAllToasts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function (_ref2) {
    let {
      canvasElement
    } = _ref2;
    return function* () {
      clearToasts();
      const canvas = (0,dist/* within */.ux)(canvasElement);
      const buttons = canvas.getAllByRole('button');
      for (const button of buttons) {
        yield dist/* userEvent */.Q4.click(button);
      }
      yield (0,src/* takeScreenshot */.w)(700);
    }();
  });
  return function screenshotAllToasts(_x) {
    return _ref.apply(this, arguments);
  };
}();
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore']
};
const Locations = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "<Stack wrap=\"wrap\">\n  <Button onClick={() => raiseToast({ location: 'top' })}>Raise top toast</Button>\n  <Button onClick={() => raiseToast({ location: 'top-start' })}>Raise top-start toast</Button>\n  <Button onClick={() => raiseToast({ location: 'top-end' })}>Raise top-end toast</Button>\n  <Button onClick={() => raiseToast({ location: 'bottom' })}>Raise bottom toast</Button>\n  <Button onClick={() => raiseToast({ location: 'bottom-start' })}>Raise bottom-start toast</Button>\n  <Button onClick={() => raiseToast({ location: 'bottom-end' })}>Raise bottom-end toast</Button>\n</Stack>"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    wrap: "wrap"
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      location: 'top'
    }))
  }, "Raise top toast"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      location: 'top-start'
    }))
  }, "Raise top-start toast"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      location: 'top-end'
    }))
  }, "Raise top-end toast"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      location: 'bottom'
    }))
  }, "Raise bottom toast"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      location: 'bottom-start'
    }))
  }, "Raise bottom-start toast"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      location: 'bottom-end'
    }))
  }, "Raise bottom-end toast")),
  play: screenshotAllToasts
};
const Types = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "<Stack>\n  <Button onClick={() => raiseToast({ type: 'info' })}>Raise info toast</Button>\n  <Button onClick={() => raiseToast({ type: 'success' })}>Raise success toast</Button>\n  <Button onClick={() => raiseToast({ type: 'error' })}>Raise error toast</Button>\n</Stack>"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      type: 'info'
    }))
  }, "Raise info toast"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      type: 'success'
    }))
  }, "Raise success toast"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      type: 'error'
    }))
  }, "Raise error toast")),
  play: screenshotAllToasts
};
const Durations = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "<Stack>\n  <Button onClick={() => raiseToast({ message, duration: Infinity })}>\u231B</Button>\n  <Button onClick={() => raiseToast({ message, duration: 10000 })}>\uD83D\uDC22</Button>\n  <Button onClick={() => raiseToast({ message, duration: 200 })}>\u26A1</Button>\n</Stack>"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    marginBottom: "4"
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      duration: Infinity
    }))
  }, "\u231B"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      duration: 10000
    }))
  }, "\uD83D\uDC22"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => components_raiseToast(_objectSpread(_objectSpread({}, args), {}, {
      duration: 200
    }))
  }, "\u26A1"))
};
const CustomContent = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'You can use `raise` utility for rendering any popping content that you need.'
      },
      source: {
        code: "<Stack>\n  <Button onClick={() => raise(<div className=\"box-shadow-z4\">{message}</div>)}>Raise custom toast</Button>\n  <Button\n    onClick={() => raise(<div className=\"box-shadow-z4\">{message}</div>, { location: 'top', duration: 500 })}\n  >\n    Custom location and duration\n  </Button>\n</Stack>"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(Stack/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => (0,raise/* default */.A)(/*#__PURE__*/react.createElement("div", {
      className: "box-shadow-z4"
    }, args.message))
  }, "Raise custom toast"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => (0,raise/* default */.A)(/*#__PURE__*/react.createElement("div", {
      className: "box-shadow-z4"
    }, args.message), {
      location: 'top',
      duration: 500
    })
  }, "Custom location and duration"))
};
const meta = {
  args: {
    message: defaultMessage
  },
  title: 'Toast/Toaster',
  component: stories_RaiseToastDemo
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
Locations.parameters = {
  ...Locations.parameters,
  docs: {
    ...Locations.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `<Stack wrap=\"wrap\">\n  <Button onClick={() => raiseToast({ location: 'top' })}>Raise top toast</Button>\n  <Button onClick={() => raiseToast({ location: 'top-start' })}>Raise top-start toast</Button>\n  <Button onClick={() => raiseToast({ location: 'top-end' })}>Raise top-end toast</Button>\n  <Button onClick={() => raiseToast({ location: 'bottom' })}>Raise bottom toast</Button>\n  <Button onClick={() => raiseToast({ location: 'bottom-start' })}>Raise bottom-start toast</Button>\n  <Button onClick={() => raiseToast({ location: 'bottom-end' })}>Raise bottom-end toast</Button>\n</Stack>`\n      }\n    }\n  },\n  render: args => <Stack wrap=\"wrap\">\n      <Button onClick={() => raiseToast({\n      ...args,\n      location: 'top'\n    })}>Raise top toast</Button>\n      <Button onClick={() => raiseToast({\n      ...args,\n      location: 'top-start'\n    })}>Raise top-start toast</Button>\n      <Button onClick={() => raiseToast({\n      ...args,\n      location: 'top-end'\n    })}>Raise top-end toast</Button>\n      <Button onClick={() => raiseToast({\n      ...args,\n      location: 'bottom'\n    })}>Raise bottom toast</Button>\n      <Button onClick={() => raiseToast({\n      ...args,\n      location: 'bottom-start'\n    })}>Raise bottom-start toast</Button>\n      <Button onClick={() => raiseToast({\n      ...args,\n      location: 'bottom-end'\n    })}>Raise bottom-end toast</Button>\n    </Stack>,\n  play: screenshotAllToasts\n}",
      ...Locations.parameters?.docs?.source
    }
  }
};
Types.parameters = {
  ...Types.parameters,
  docs: {
    ...Types.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `<Stack>\n  <Button onClick={() => raiseToast({ type: 'info' })}>Raise info toast</Button>\n  <Button onClick={() => raiseToast({ type: 'success' })}>Raise success toast</Button>\n  <Button onClick={() => raiseToast({ type: 'error' })}>Raise error toast</Button>\n</Stack>`\n      }\n    }\n  },\n  render: args => <Stack>\n      <Button onClick={() => raiseToast({\n      ...args,\n      type: 'info'\n    })}>Raise info toast</Button>\n      <Button onClick={() => raiseToast({\n      ...args,\n      type: 'success'\n    })}>Raise success toast</Button>\n      <Button onClick={() => raiseToast({\n      ...args,\n      type: 'error'\n    })}>Raise error toast</Button>\n    </Stack>,\n  play: screenshotAllToasts\n}",
      ...Types.parameters?.docs?.source
    }
  }
};
Durations.parameters = {
  ...Durations.parameters,
  docs: {
    ...Durations.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `<Stack>\n  <Button onClick={() => raiseToast({ message, duration: Infinity })}>\u231B</Button>\n  <Button onClick={() => raiseToast({ message, duration: 10000 })}>\uD83D\uDC22</Button>\n  <Button onClick={() => raiseToast({ message, duration: 200 })}>\u26A1</Button>\n</Stack>`\n      }\n    }\n  },\n  render: args => <Stack marginBottom=\"4\">\n      <Button onClick={() => raiseToast({\n      ...args,\n      duration: Infinity\n    })}>\u231B</Button>\n      <Button onClick={() => raiseToast({\n      ...args,\n      duration: 10000\n    })}>\uD83D\uDC22</Button>\n      <Button onClick={() => raiseToast({\n      ...args,\n      duration: 200\n    })}>\u26A1</Button>\n    </Stack>\n}",
      ...Durations.parameters?.docs?.source
    }
  }
};
CustomContent.parameters = {
  ...CustomContent.parameters,
  docs: {
    ...CustomContent.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'You can use `raise` utility for rendering any popping content that you need.'\n      },\n      source: {\n        code: `<Stack>\n  <Button onClick={() => raise(<div className=\"box-shadow-z4\">{message}</div>)}>Raise custom toast</Button>\n  <Button\n    onClick={() => raise(<div className=\"box-shadow-z4\">{message}</div>, { location: 'top', duration: 500 })}\n  >\n    Custom location and duration\n  </Button>\n</Stack>`\n      }\n    }\n  },\n  render: args => <Stack>\n      <Button onClick={() => raise(<div className=\"box-shadow-z4\">{args.message}</div>)}>Raise custom toast</Button>\n      <Button onClick={() => raise(<div className=\"box-shadow-z4\">{args.message}</div>, {\n      location: 'top',\n      duration: 500\n    })}>\n        Custom location and duration\n      </Button>\n    </Stack>\n}",
      ...CustomContent.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Locations","Types","Durations","CustomContent"];

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

/***/ "../ui_utils/dist/esm/src/utils/render_children/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/InfoCircle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const InfoCircleIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('InfoCircleIcon')
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
    d: "M8 8v3.375m0-5.877v-.03M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
InfoCircleIcon.id = 'InfoCircleIcon';
InfoCircleIcon.displayName = 'InfoCircleIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoCircleIcon);
;
InfoCircleIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InfoCircleIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const WarningCircleIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('WarningCircleIcon')
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
    d: "M7.997 6.127v2.7m0 2.686h.006m6.767.264L9.42 2.525c-.637-1.1-2.201-1.1-2.838 0L1.23 11.778c-.646 1.115.145 2.522 1.418 2.522h10.704c1.273 0 2.064-1.407 1.418-2.523",
    vectorEffect: "non-scaling-stroke"
  }));
};
WarningCircleIcon.id = 'WarningCircleIcon';
WarningCircleIcon.displayName = 'WarningCircleIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WarningCircleIcon);
;
WarningCircleIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WarningCircleIcon"
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
//# sourceMappingURL=4788.73ead321.iframe.bundle.js.map