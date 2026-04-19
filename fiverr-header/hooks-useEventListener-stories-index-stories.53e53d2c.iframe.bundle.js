"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[1922],{

/***/ "../hooks/src/hooks/useEventListener/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../hooks/src/hooks/useEventListener/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../hooks/src/hooks/useIsClient/index.ts");




const elements = new Array(20).fill(null).map(_ => '→');
const Demo = () => {
  (0,___WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
  const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [canScrollLeft, setCanScrollLeft] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const element = elementRef.current;
  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!element) {
      return;
    }
    setCanScrollLeft(element.scrollLeft > 0);
  }, [element]);
  (0,___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('scroll', handleScroll, element);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, "Can scroll left: ", canScrollLeft.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    ref: elementRef,
    overflow: "scroll"
  }, elements.map((text, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    paddingRight: "6",
    key: index
  }, text))));
};
const Primary = {
  tags: ['sidebar-ignore']
};
const meta = {
  title: 'Hooks/useEventListener',
  component: Demo,
  parameters: {
    docs: {
      source: {
        code: "() => {\n  useIsClient();\n  const elementRef = useRef<HTMLElement>(null);\n  const [canScrollLeft, setCanScrollLeft] = useState(false);\n  const element = elementRef.current;\n\n  const handleScroll = useCallback(() => {\n    if (!element) {\n      return;\n    }\n    setCanScrollLeft(element.scrollLeft > 0);\n  }, [element]);\n\n  useEventListener('scroll', handleScroll, element);\n\n  return (\n    <>\n      <StoryText>Can scroll left: {canScrollLeft.toString()}</StoryText>\n      <StoryStack ref={elementRef} overflow=\"scroll\">\n        {elements.map((text, index) => (\n          <StoryText paddingRight=\"6\" key={index}>\n            {text}\n          </StoryText>\n        ))}\n      </StoryStack>\n    </>\n  );\n}"
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

/***/ }),

/***/ "../hooks/src/hooks/useIsClient/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");


/**
 * This React Hook can be useful in a SSR environment to wait until be on a client to execution some functions.
 * This value is stateful, meaning it will be true only on a client and
 * only after additional render to avoid client-server hydration mismatch
 * @returns `true` if on a client
 */
const useIsClient = () => {
  const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsClient(true);
  }, []);
  return isClient;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsClient);

/***/ })

}]);
//# sourceMappingURL=hooks-useEventListener-stories-index-stories.53e53d2c.iframe.bundle.js.map