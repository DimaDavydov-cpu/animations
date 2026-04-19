"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[5659],{

/***/ "../data_display/src/components/Counter/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Formatted: () => (/* binding */ Formatted),
  Primary: () => (/* binding */ Primary),
  WithMaxValue: () => (/* binding */ WithMaxValue),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// ../data_display/src/components/Counter/index.tsx


const Counter = _ref => {
  let {
    current,
    max,
    format = lodash.identity
  } = _ref;
  const formattedCurrent = format(current, {
    fallbackValue: current,
    noFractionDigits: true
  });
  const formattedMax = max && format(max, {
    fallbackValue: max,
    noFractionDigits: true
  });
  const content = max ? "".concat(formattedCurrent, "/").concat(formattedMax) : formattedCurrent;
  return /*#__PURE__*/react.createElement(react.Fragment, null, content);
};
Counter.displayName = 'Counter';
/* harmony default export */ const components_Counter = (Counter);
try {
    // @ts-ignore
    Counter.displayName = "Counter";
    // @ts-ignore
    Counter.__docgenInfo = { "description": "", "displayName": "Counter", "props": { "current": { "defaultValue": null, "description": "", "name": "current", "required": true, "type": { "name": "number" } }, "format": { "defaultValue": null, "description": "", "name": "format", "required": false, "type": { "name": "NumberFormatType" } }, "max": { "defaultValue": null, "description": "", "name": "max", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Counter/index.tsx#Counter"] = { docgenInfo: Counter.__docgenInfo, name: "Counter", path: "../data_display/src/components/Counter/index.tsx#Counter" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../data_display/src/components/Counter/stories/index.stories.tsx

const defaultArgs = {
  current: 100
};
const Primary = {
  tags: ['sidebar-ignore']
};
const WithMaxValue = {
  tags: ['sidebar-ignore'],
  args: {
    max: 110
  }
};
const Formatted = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: "<Counter\n    current={100}\n    max={110}\n    format={(num) => num * 2 }\n/>"
      }
    }
  },
  args: {
    max: 110,
    format: function (num) {
      return num * 2;
    }
  }
};
const meta = {
  args: defaultArgs,
  argTypes: {
    format: {
      table: {
        disable: true
      }
    }
  },
  title: 'Data Display/Counter',
  component: components_Counter
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
};
WithMaxValue.parameters = {
  ...WithMaxValue.parameters,
  docs: {
    ...WithMaxValue.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    max: 110\n  }\n}",
      ...WithMaxValue.parameters?.docs?.source
    }
  }
};
Formatted.parameters = {
  ...Formatted.parameters,
  docs: {
    ...Formatted.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `<Counter\n    current={100}\n    max={110}\n    format={(num) => num * 2 }\n/>`\n      }\n    }\n  },\n  args: {\n    max: 110,\n    format: function (num) {\n      return num * 2;\n    }\n  }\n}",
      ...Formatted.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","WithMaxValue","Formatted"];

/***/ })

}]);
//# sourceMappingURL=components-Counter-stories-index-stories.69e4758d.iframe.bundle.js.map