"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[411],{

/***/ "../ui_utils/src/components/ErrorBoundary/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
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

class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }
  constructor(props) {
    super(props);
    _defineProperty(this, "onError", void 0);
    this.state = {
      hasError: false
    };
    this.onError = props.onError;
  }
  componentDidCatch(err) {
    this.onError(err);
  }
  render() {
    const {
      hasError
    } = this.state;
    if (hasError) {
      return null;
    }
    return this.props.children;
  }
}
ErrorBoundary.displayName = "ErrorBoundary";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);
try {
    // @ts-ignore
    ErrorBoundary.displayName = "ErrorBoundary";
    // @ts-ignore
    ErrorBoundary.__docgenInfo = { "description": "", "displayName": "ErrorBoundary", "props": { "onError": { "defaultValue": null, "description": "Function to be executed if an error is cought.", "name": "onError", "required": true, "type": { "name": "OnError" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../ui_utils/src/components/ErrorBoundary/index.tsx#ErrorBoundary"] = { docgenInfo: ErrorBoundary.__docgenInfo, name: "ErrorBoundary", path: "../ui_utils/src/components/ErrorBoundary/index.tsx#ErrorBoundary" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../ui_utils/src/components/ErrorBoundary/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../ui_utils/src/components/ErrorBoundary/index.tsx");

const Primary = {
  tags: ['sidebar-ignore']
};
const meta = {
  title: 'UI-Utils/ErrorBoundary',
  component: ___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore']\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary"];

/***/ })

}]);
//# sourceMappingURL=components-ErrorBoundary-stories-index-stories.619d3246.iframe.bundle.js.map