"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[4465],{

/***/ "../hooks/src/hooks/useBreakpoint/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Primary: () => (/* binding */ Primary),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryText/index.js
var StoryText = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
// EXTERNAL MODULE: ../hooks/src/hooks/useBreakpoints/index.ts + 1 modules
var useBreakpoints = __webpack_require__("../hooks/src/hooks/useBreakpoints/index.ts");
;// ../hooks/src/hooks/useBreakpoint/index.ts

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
  } = (0,useBreakpoints/* default */.A)();
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
;// ../hooks/src/hooks/useBreakpoint/stories/index.stories.tsx



const Demo = () => {
  const breakpoint = hooks_useBreakpoint();
  return /*#__PURE__*/react.createElement(StoryText/* default */.A, null, "Current screen breakpoint:\xA0", /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    as: "span",
    fontWeight: "bold"
  }, breakpoint));
};
const Primary = {
  tags: ['sidebar-ignore']
};
const meta = {
  title: 'Hooks/useBreakpoint',
  component: Demo,
  parameters: {
    docs: {
      source: {
        code: "const breakpoint = useBreakpoint();\n\nreturn (\n  <StoryText>\n    Current screen breakpoint:&nbsp;\n    <StoryText as=\"span\" fontWeight=\"bold\">\n      {breakpoint}\n    </StoryText>\n  </StoryText>\n);"
      }
    }
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
};;const __namedExportsOrder = ["Primary"];

/***/ })

}]);
//# sourceMappingURL=hooks-useBreakpoint-stories-index-stories.b9774308.iframe.bundle.js.map