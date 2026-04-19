"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[9377],{

/***/ "../hooks/src/hooks/useElementSize/stories/index.stories.tsx":
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
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../hooks/src/hooks/useEventListener/index.ts
var useEventListener = __webpack_require__("../hooks/src/hooks/useEventListener/index.ts");
// EXTERNAL MODULE: ../hooks/src/hooks/useIsomorphicLayoutEffect/index.ts
var useIsomorphicLayoutEffect = __webpack_require__("../hooks/src/hooks/useIsomorphicLayoutEffect/index.ts");
;// ../hooks/src/hooks/useElementSize/index.ts



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
  (0,useEventListener/* default */.A)('resize', handleSize, typeof window !== 'undefined' ? window : null);
  (0,useIsomorphicLayoutEffect/* default */.A)(() => {
    handleSize();
  }, [element]);
  return elementSize;
};
/* harmony default export */ const hooks_useElementSize = (useElementSize);
;// ../hooks/src/hooks/useElementSize/stories/index.stories.tsx



const Demo = () => {
  const elementRef = (0,react.useRef)(null);
  const {
    width: windowWidth,
    height: windowHeight
  } = hooks_useElementSize(window);
  const {
    width: elementWidth,
    height: elementHeight
  } = hooks_useElementSize(elementRef.current);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StoryText/* default */.A, null, "Window size: ", windowWidth, "x", windowHeight), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    ref: elementRef
  }, "Element size: ", elementWidth, "x", elementHeight));
};
const Primary = {
  tags: ['sidebar-ignore']
};
const meta = {
  title: 'Hooks/useElementSize',
  component: Demo,
  parameters: {
    docs: {
      source: {
        code: "() => {\n  useIsClient();\n  const elementRef = useRef<HTMLElement>(null);\n  const { width: windowWidth, height: windowHeight } = useElementSize(window);\n  const { width: elementWidth, height: elementHeight } = useElementSize(elementRef.current);\n\n  return (\n    <>\n      <StoryText>\n        Window size: {windowWidth}x{windowHeight}\n      </StoryText>\n      <StoryStack ref={elementRef}>\n        Element size: {elementWidth}x{elementHeight}\n      </StoryStack>\n    </>\n  );\n}"
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
//# sourceMappingURL=hooks-useElementSize-stories-index-stories.91da046e.iframe.bundle.js.map