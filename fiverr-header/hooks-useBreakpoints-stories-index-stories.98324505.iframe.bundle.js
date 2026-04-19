"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[5546],{

/***/ "../hooks/src/hooks/useBreakpoints/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../hooks/src/hooks/useBreakpoints/index.ts");



const Demo = () => {
  const breakpoints = (0,___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, "Current screen breakpoints:\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "span",
    fontWeight: "bold"
  }, JSON.stringify(breakpoints)));
};
const Primary = {
  tags: ['sidebar-ignore']
};
const meta = {
  title: 'Hooks/useBreakpoints',
  component: Demo,
  parameters: {
    docs: {
      source: {
        code: "const breakpoints = useBreakpoints();\n\nreturn (\n  <StoryText>\n    Current screen breakpoints:&nbsp;\n    <StoryText as=\"span\" fontWeight=\"bold\">\n      {JSON.stringify(breakpoints)}\n    </StoryText>\n  </StoryText>\n);"
      }
    }
  }
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
//# sourceMappingURL=hooks-useBreakpoints-stories-index-stories.98324505.iframe.bundle.js.map