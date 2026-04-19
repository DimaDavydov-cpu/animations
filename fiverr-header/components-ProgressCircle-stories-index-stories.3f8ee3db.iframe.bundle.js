"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[4002],{

/***/ "../feedback/src/components/ProgressCircle/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Primary: () => (/* binding */ Primary),
  ProgressColor: () => (/* binding */ ProgressColor),
  Score: () => (/* binding */ Score),
  TrackColor: () => (/* binding */ TrackColor),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utils.js
var utils = __webpack_require__("../theme/dist/esm/src/atoms/utils.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../feedback/src/components/ProgressLine/helpers.ts
var helpers = __webpack_require__("../feedback/src/components/ProgressLine/helpers.ts");
;// ../feedback/src/components/ProgressCircle/constants.ts
const PATH = 'm35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z';
const CIRCLE_MAX = 204;
;// ../feedback/src/components/ProgressCircle/helpers.ts


const getProgressBackgroundStyle = (percent, color) => {
  const progress = CIRCLE_MAX * percent / 100;
  return {
    strokeDasharray: CIRCLE_MAX,
    strokeDashoffset: CIRCLE_MAX - progress,
    stroke: themeVars/* colors */.Tj[color],
    strokeWidth: 4,
    strokeLinecap: 'round'
  };
};
;// ../feedback/src/components/ProgressCircle/index.tsx






const ProgressCircle = _ref => {
  let {
    percent = 0,
    progressColor = 'default',
    trackColor = 'default',
    showScore,
    dataTrackTag = 'progress_circle',
    dataTrackValue
  } = _ref;
  const {
    progressBackgroundColor,
    trackBackgroundColor
  } = (0,helpers/* getProgressColors */.i)({
    progressColor,
    trackColor
  });
  const progress = (0,helpers/* getProgressPercent */.R)(percent);
  const trackStyle = {
    strokeDasharray: 205,
    strokeDashoffset: 0,
    stroke: themeVars/* colors */.Tj[trackBackgroundColor],
    strokeWidth: 4
  };
  const svgStyle = {
    zIndex: 2,
    top: 0,
    left: 0,
    fill: 'none'
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "div",
    role: "progressbar",
    "aria-valuenow": percent,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    display: "inlineFlex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "64px",
    height: "64px",
    color: progressBackgroundColor,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement("svg", {
    style: svgStyle,
    className: (0,utils/* atoms */.Fo)({
      position: 'absolute'
    }),
    viewBox: "-1 -1 71 71"
  }, /*#__PURE__*/react.createElement("path", {
    d: PATH,
    style: trackStyle
  }), /*#__PURE__*/react.createElement("path", {
    d: PATH,
    style: getProgressBackgroundStyle(progress, progressBackgroundColor)
  })), showScore && /*#__PURE__*/react.createElement(Typography/* default */.A, {
    position: "absolute",
    size: "b_md",
    fontWeight: "semibold",
    transform: "translateX(.1em)"
  }, "".concat(percent, "%")));
};
ProgressCircle.display = 'ProgressCircle';
/* harmony default export */ const components_ProgressCircle = (ProgressCircle);
try {
    // @ts-ignore
    ProgressCircle.displayName = "ProgressCircle";
    // @ts-ignore
    ProgressCircle.__docgenInfo = { "description": "", "displayName": "ProgressCircle", "props": { "showScore": { "defaultValue": null, "description": "Whether to show the percentage inside the circle. Supported for sizes 'lg' and 'xl' only.", "name": "showScore", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "percent": { "defaultValue": { value: "0" }, "description": "The current progress percentage.", "name": "percent", "required": false, "type": { "name": "number" } }, "progressColor": { "defaultValue": { value: "default" }, "description": "The color of the progress.", "name": "progressColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"paused\"" }] } }, "trackColor": { "defaultValue": { value: "default" }, "description": "The color of the progress track. Useful if contrast is needed against a light background.", "name": "trackColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"white\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "dataTrackTag": { "defaultValue": { value: "progress_circle" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/ProgressCircle/index.tsx#ProgressCircle"] = { docgenInfo: ProgressCircle.__docgenInfo, name: "ProgressCircle", path: "../feedback/src/components/ProgressCircle/index.tsx#ProgressCircle" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../feedback/src/components/ProgressCircle/stories/index.stories.tsx



const meta = {
  title: 'Feedback/ProgressCircle',
  component: components_ProgressCircle,
  args: {
    percent: 20
  },
  render: args => /*#__PURE__*/react.createElement(components_ProgressCircle, args)
};
const Primary = {
  tags: ['sidebar-ignore']
};
const Score = {
  tags: ['sidebar-ignore'],
  args: {
    percent: 50,
    showScore: true
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "row",
    gap: "10",
    marginBottom: "8"
  }, /*#__PURE__*/react.createElement(components_ProgressCircle, args))
};
const TrackColor = {
  tags: ['sidebar-ignore'],
  args: {
    percent: 33,
    showScore: true,
    trackColor: 'white'
  },
  decorators: [Story => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    padding: "4",
    backgroundColor: "grey_300"
  }, /*#__PURE__*/react.createElement(Story, null))]
};
const ProgressColor = {
  tags: ['sidebar-ignore'],
  args: {
    percent: 66,
    showScore: true,
    progressColor: 'paused'
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
};
Score.parameters = {
  ...Score.parameters,
  docs: {
    ...Score.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    percent: 50,\n    showScore: true\n  },\n  render: args => <StoryStack direction=\"row\" gap=\"10\" marginBottom=\"8\">\n      <ProgressCircle {...args} />\n    </StoryStack>\n}",
      ...Score.parameters?.docs?.source
    }
  }
};
TrackColor.parameters = {
  ...TrackColor.parameters,
  docs: {
    ...TrackColor.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    percent: 33,\n    showScore: true,\n    trackColor: 'white'\n  },\n  decorators: [Story => <StoryStack padding=\"4\" backgroundColor=\"grey_300\">\n        <Story />\n      </StoryStack>]\n}",
      ...TrackColor.parameters?.docs?.source
    }
  }
};
ProgressColor.parameters = {
  ...ProgressColor.parameters,
  docs: {
    ...ProgressColor.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    percent: 66,\n    showScore: true,\n    progressColor: 'paused'\n  }\n}",
      ...ProgressColor.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Score","TrackColor","ProgressColor"];

/***/ })

}]);
//# sourceMappingURL=components-ProgressCircle-stories-index-stories.3f8ee3db.iframe.bundle.js.map