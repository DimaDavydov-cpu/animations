"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[2593],{

/***/ "../ui_utils/src/components/LazyComponent/stories/LoadedSquareWithProps.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../button/dist/esm/src/components/Button/index.js");



const LoadedSquare = _ref => {
  let {
    isOpen,
    onClick
  } = _ref;
  return isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    alignItems: "center",
    justifyContent: "center",
    padding: "10",
    backgroundColor: "green_700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    onClick: onClick
  }, "Close")) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadedSquare);
try {
    // @ts-ignore
    LoadedSquareWithProps.displayName = "LoadedSquareWithProps";
    // @ts-ignore
    LoadedSquareWithProps.__docgenInfo = { "description": "", "displayName": "LoadedSquareWithProps", "props": { "isOpen": { "defaultValue": null, "description": "", "name": "isOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLButtonElement>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../ui_utils/src/components/LazyComponent/stories/LoadedSquareWithProps.tsx#LoadedSquareWithProps"] = { docgenInfo: LoadedSquareWithProps.__docgenInfo, name: "LoadedSquareWithProps", path: "../ui_utils/src/components/LazyComponent/stories/LoadedSquareWithProps.tsx#LoadedSquareWithProps" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);
//# sourceMappingURL=LoadedSquareWithProps.1ba514d3.iframe.bundle.js.map