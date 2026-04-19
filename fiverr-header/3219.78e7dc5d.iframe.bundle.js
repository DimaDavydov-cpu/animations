"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[3219],{

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const {
  DEFAULT_LOCALE
} = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/lib/constants/index.js");
/**
 * The default context to use when context does not exists over the current runtime
 * @type {FiverrContext}
 */
exports.A = {
  locale: DEFAULT_LOCALE,
  computedLocale: DEFAULT_LOCALE,
  userId: 0,
  country: '',
  countryCode: '',
  pageCtxId: '',
  isPro: false,
  abTests: {},
  userAgent: '',
  knownCrawler: false,
  csrfToken: '',
  browserLanguage: '',
  currency: '',
  pathParameters: {},
  queryParameters: {},
  userGuid: '',
  url: '',
  ip: '',
  referrer: '',
  organizationId: '',
  experience: {
    isBuyer: false,
    isSeller: false,
    isBusiness: false,
    value: ''
  },
  isMobile: false,
  isTouch: false,
  isIos: false
};

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ withBrowserContext_getContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js
var emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js
var constants = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js");
;// ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/constants.js
/**
 * The error message to be logged when trying to access `getContext` api while browser context does not exist.
 * @type {String}
 */
const CONTEXT_DOES_NOT_EXIST = 'Browser context does not exist, please ensure the run time owner sets one on the window scope before using this API';
;// ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js




/**
 * Returns the current available context for browser run time environment.
 * @returns {FiverrContext}
 */
const getContext = () => {
  const context = lodash_default().get(window, 'initialData.FiverrContext');
  if (!context) {
    emitter/* default */.A.error({
      message: CONTEXT_DOES_NOT_EXIST
    });
    return constants/* DEFAULT_CONTEXT */.A;
  }
  return context;
};
/* harmony default export */ const withBrowserContext_getContext = (getContext);

/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/lib/constants/index.js":
/***/ ((__unused_webpack_module, exports) => {



/**
 * @type {String} Default locale for translations
 */
exports.DEFAULT_LOCALE = 'en-US';

/***/ }),

/***/ "../inputs/src/components/CurrencyInput/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CurrencyCode: () => (/* binding */ CurrencyCode),
  FormattingLocale: () => (/* binding */ FormattingLocale),
  FormattingWithCents: () => (/* binding */ FormattingWithCents),
  FormattingWithoutCents: () => (/* binding */ FormattingWithoutCents),
  Primary: () => (/* binding */ Primary),
  ShowCentsForIntegers: () => (/* binding */ ShowCentsForIntegers),
  Suffix: () => (/* binding */ Suffix),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryText/index.js
var StoryText = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js
var WarningCircle = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js + 21 modules
var browser = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js");
// EXTERNAL MODULE: ../inputs/src/components/NumberInput/index.tsx + 1 modules
var NumberInput = __webpack_require__("../inputs/src/components/NumberInput/index.tsx");
// EXTERNAL MODULE: ../inputs/src/components/Input/InputGroup/index.tsx + 2 modules
var InputGroup = __webpack_require__("../inputs/src/components/Input/InputGroup/index.tsx");
// EXTERNAL MODULE: ../inputs/src/components/Input/InputPrefix/index.tsx
var InputPrefix = __webpack_require__("../inputs/src/components/Input/InputPrefix/index.tsx");
;// ../inputs/src/components/CurrencyInput/index.tsx
const _excluded = ["currencyCode", "formattingLocale", "onChange", "children", "minimumFractionDigits", "maximumFractionDigits", "stripTrailingZerosIfInteger", "id", "dataTrackTag", "dataTrackValue"];
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





const FALLBACK_SYMBOL = '$';
const CurrencyInput = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      currencyCode = 'USD',
      formattingLocale,
      onChange,
      children,
      minimumFractionDigits = 2,
      maximumFractionDigits = 2,
      stripTrailingZerosIfInteger = true,
      id,
      dataTrackTag = 'currency_input',
      dataTrackValue
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const getCurrencySymbolInner = () => {
    try {
      return (0,browser/* getCurrencySymbol */.Qn)({
        currencyCode,
        formattingLocale
      });
    } catch (e) {
      // This is mostly for storybook, so the component doesn't crash while typing in the currencyCode prop
      return FALLBACK_SYMBOL;
    }
  };
  const currencySymbol = getCurrencySymbolInner();
  return /*#__PURE__*/react.createElement(InputGroup/* default */.A, _extends({
    ref: ref,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, restProps), /*#__PURE__*/react.createElement(NumberInput/* default */.A, {
    id: id,
    onChange: onChange,
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
    stripTrailingZerosIfInteger: stripTrailingZerosIfInteger
  }), /*#__PURE__*/react.createElement(InputPrefix/* default */.A, null, currencySymbol), children);
});
CurrencyInput.displayName = 'CurrencyInput';
/* harmony default export */ const components_CurrencyInput = (CurrencyInput);
try {
    // @ts-ignore
    CurrencyInput.displayName = "CurrencyInput";
    // @ts-ignore
    CurrencyInput.__docgenInfo = { "description": "", "displayName": "CurrencyInput", "props": { "currencyCode": { "defaultValue": { value: "USD" }, "description": "", "name": "currencyCode", "required": false, "type": { "name": "string" } }, "formattingLocale": { "defaultValue": null, "description": "Optional - by default uses locale from context", "name": "formattingLocale", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": false, "type": { "name": "number" } }, "hideNumberSpinButton": { "defaultValue": null, "description": "", "name": "hideNumberSpinButton", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableArrowKeysOnChange": { "defaultValue": null, "description": "Whether to disable the arrow keys from changing the value", "name": "disableArrowKeysOnChange", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "minimumFractionDigits": { "defaultValue": { value: "2" }, "description": "", "name": "minimumFractionDigits", "required": false, "type": { "name": "number" } }, "maximumFractionDigits": { "defaultValue": { value: "2" }, "description": "", "name": "maximumFractionDigits", "required": false, "type": { "name": "number" } }, "stripTrailingZerosIfInteger": { "defaultValue": { value: "true" }, "description": "By default, `minimumFractionDigits` is ignored for integers.\nSet this to `false` to show trailing zeros for integers, e.g. 10.00.", "name": "stripTrailingZerosIfInteger", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "min": { "defaultValue": null, "description": "", "name": "min", "required": false, "type": { "name": "number" } }, "max": { "defaultValue": null, "description": "", "name": "max", "required": false, "type": { "name": "number" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "currency_input" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../inputs/src/components/CurrencyInput/index.tsx#CurrencyInput"] = { docgenInfo: CurrencyInput.__docgenInfo, name: "CurrencyInput", path: "../inputs/src/components/CurrencyInput/index.tsx#CurrencyInput" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../inputs/src/components/Input/InputSuffix/index.tsx
var InputSuffix = __webpack_require__("../inputs/src/components/Input/InputSuffix/index.tsx");
;// ../inputs/src/components/CurrencyInput/stories/index.stories.tsx





const Primary = {
  tags: ['sidebar-ignore']
};
const CurrencyCode = {
  tags: ['sidebar-ignore'],
  args: {
    currencyCode: 'EUR'
  }
};
const Suffix = {
  tags: ['sidebar-ignore'],
  args: {
    hideNumberSpinButton: true,
    children: /*#__PURE__*/react.createElement(InputSuffix/* default */.A, null, "/hr")
  }
};
const FormattingLocale = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: "<CurrencyInput formattingLocale=\"es\" currencyCode=\"USD\" />"
      },
      description: {
        story: '`formattingLocale` is optional and is taken from context by default.'
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column"
  }, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(WarningCircle/* default */.A, {
    size: "lg"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, null, /*#__PURE__*/react.createElement("b", null, "Note"), " that some currency symbols are longer than one character and even USD may render as \"US$\" in foreign locales, so plan input widths accordingly.")), /*#__PURE__*/react.createElement(components_CurrencyInput, {
    formattingLocale: "es",
    currencyCode: "USD"
  }))
};
const FormattingWithCents = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: "By default, `minimumFractionDigits` and `maximumFractionDigits` are set to 2 to format cents to 2 decimal places."
      }
    }
  },
  args: {
    defaultValue: 10.5
  }
};
const FormattingWithoutCents = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: "To disallow cents, set `minimumFractionDigits` and `maximumFractionDigits` to 0."
      }
    }
  },
  args: {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    defaultValue: 9.99
  }
};
const ShowCentsForIntegers = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: "To always show cents even if they're zero, set `stripTrailingZerosIfInteger` to `false`."
      },
      // Explicitly adding the code because the docs addon excludes props with false value
      source: {
        code: "<CurrencyInput\n  defaultValue={10}\n  stripTrailingZerosIfInteger={false}\n/>"
      }
    }
  },
  args: {
    defaultValue: 10,
    stripTrailingZerosIfInteger: false
  }
};
const meta = {
  title: 'Forms/CurrencyInput',
  component: components_CurrencyInput
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
CurrencyCode.parameters = {
  ...CurrencyCode.parameters,
  docs: {
    ...CurrencyCode.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    currencyCode: 'EUR'\n  }\n}",
      ...CurrencyCode.parameters?.docs?.source
    }
  }
};
Suffix.parameters = {
  ...Suffix.parameters,
  docs: {
    ...Suffix.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    hideNumberSpinButton: true,\n    children: <InputSuffix>/hr</InputSuffix>\n  }\n}",
      ...Suffix.parameters?.docs?.source
    }
  }
};
FormattingLocale.parameters = {
  ...FormattingLocale.parameters,
  docs: {
    ...FormattingLocale.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `<CurrencyInput formattingLocale=\"es\" currencyCode=\"USD\" />`\n      },\n      description: {\n        story: '`formattingLocale` is optional and is taken from context by default.'\n      }\n    }\n  },\n  render: () => <StoryStack direction=\"column\">\n      <StoryStack alignItems=\"center\">\n        <WarningCircleIcon size=\"lg\" />\n        <StoryText>\n          <b>Note</b> that some currency symbols are longer than one character and even USD may render as\n          &quot;US$&quot; in foreign locales, so plan input widths accordingly.\n        </StoryText>\n      </StoryStack>\n      <CurrencyInput formattingLocale=\"es\" currencyCode=\"USD\" />\n    </StoryStack>\n}",
      ...FormattingLocale.parameters?.docs?.source
    }
  }
};
FormattingWithCents.parameters = {
  ...FormattingWithCents.parameters,
  docs: {
    ...FormattingWithCents.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: `By default, \\`minimumFractionDigits\\` and \\`maximumFractionDigits\\` are set to 2 to format cents to 2 decimal places.`\n      }\n    }\n  },\n  args: {\n    defaultValue: 10.5\n  }\n}",
      ...FormattingWithCents.parameters?.docs?.source
    }
  }
};
FormattingWithoutCents.parameters = {
  ...FormattingWithoutCents.parameters,
  docs: {
    ...FormattingWithoutCents.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: `To disallow cents, set \\`minimumFractionDigits\\` and \\`maximumFractionDigits\\` to 0.`\n      }\n    }\n  },\n  args: {\n    minimumFractionDigits: 0,\n    maximumFractionDigits: 0,\n    defaultValue: 9.99\n  }\n}",
      ...FormattingWithoutCents.parameters?.docs?.source
    }
  }
};
ShowCentsForIntegers.parameters = {
  ...ShowCentsForIntegers.parameters,
  docs: {
    ...ShowCentsForIntegers.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: `To always show cents even if they're zero, set \\`stripTrailingZerosIfInteger\\` to \\`false\\`.`\n      },\n      // Explicitly adding the code because the docs addon excludes props with false value\n      source: {\n        code: `<CurrencyInput\n  defaultValue={10}\n  stripTrailingZerosIfInteger={false}\n/>`\n      }\n    }\n  },\n  args: {\n    defaultValue: 10,\n    stripTrailingZerosIfInteger: false\n  }\n}",
      ...ShowCentsForIntegers.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","CurrencyCode","Suffix","FormattingLocale","FormattingWithCents","FormattingWithoutCents","ShowCentsForIntegers"];

/***/ }),

/***/ "../inputs/src/components/NumberInput/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_NumberInput)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../inputs/src/components/Input/index.tsx
var Input = __webpack_require__("../inputs/src/components/Input/index.tsx");
// EXTERNAL MODULE: ../inputs/src/components/Input/constants.ts
var constants = __webpack_require__("../inputs/src/components/Input/constants.ts");
;// ../inputs/src/components/NumberInput/utils.ts
/**
 * In order to trigger an onChange event on an input, we need to call the native
 * value setter, since trying to set it directly would be intercepted by React.
 * Then we dispatch the DOM event as usual and it will bubble to React.
 *
 * @param target - The input element to trigger the event on.
 * @param newValue - The new value to set on the input.
 */
const triggerOnChange = (target, newValue) => {
  var _Object$getOwnPropert;
  const nativeInputValueSetter = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set;
  nativeInputValueSetter === null || nativeInputValueSetter === void 0 || nativeInputValueSetter.call(target, newValue);
  const event = new Event('input', {
    bubbles: true
  });
  target.dispatchEvent(event);
};
;// ../inputs/src/components/NumberInput/index.tsx
const _excluded = ["min", "onChange", "onBlur", "onKeyDown", "onPaste", "minimumFractionDigits", "maximumFractionDigits", "disableArrowKeysOnChange", "stripTrailingZerosIfInteger", "dataTrackTag"];
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





const ALLOWED_CHARACTERS = (0,lodash.range)(10).map(String);
const NumberInput = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      min,
      onChange,
      onBlur,
      onKeyDown,
      onPaste,
      minimumFractionDigits = 0,
      maximumFractionDigits = Infinity,
      disableArrowKeysOnChange = false,
      stripTrailingZerosIfInteger = true,
      dataTrackTag = 'number_input'
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const localRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, () => localRef.current);
  const allowedCharacters = (0,react.useMemo)(() => {
    const keys = [...ALLOWED_CHARACTERS];
    if (maximumFractionDigits > 0) {
      keys.push('.');
    }
    if (min === undefined || Number(min) < 0) {
      keys.push('-');
    }
    return keys;
  }, [min, maximumFractionDigits]);
  const prohibitedRegex = (0,react.useMemo)(() => new RegExp("[^".concat(allowedCharacters.join(''), "]"), 'g'), [allowedCharacters]);
  const sanitizeValue = (0,react.useCallback)(stringValue => {
    let sanitizedValue = stringValue.replace(prohibitedRegex, '');
    const [wholePart, fractionalPart] = sanitizedValue.split('.');
    if ((fractionalPart === null || fractionalPart === void 0 ? void 0 : fractionalPart.length) > maximumFractionDigits) {
      sanitizedValue = "".concat(wholePart, ".").concat(fractionalPart.slice(0, maximumFractionDigits));
    }
    return sanitizedValue;
  }, [prohibitedRegex, maximumFractionDigits]);
  const formatValue = (0,react.useCallback)(numberValue => {
    if ((0,lodash.isNaN)(numberValue) || (0,lodash.isNull)(numberValue)) {
      return '';
    }
    if ((0,lodash.isUndefined)(numberValue)) {
      return undefined;
    }
    const roundedValue = (0,lodash.round)(numberValue, maximumFractionDigits);
    const [, fractionalPart] = roundedValue.toString().split('.');
    const originalFractionDigits = (fractionalPart === null || fractionalPart === void 0 ? void 0 : fractionalPart.length) || 0;
    const isInteger = originalFractionDigits === 0;
    const fractionDigits = isInteger && stripTrailingZerosIfInteger ? 0 : Math.max(minimumFractionDigits, originalFractionDigits);
    return roundedValue.toFixed(fractionDigits);
  }, [minimumFractionDigits, maximumFractionDigits, stripTrailingZerosIfInteger]);
  const handleKeyDown = e => {
    const isArrowKey = ['ArrowUp', 'ArrowDown'].includes(e.key);
    const isChar = e.key.length === 1;
    const isModifierKey = e.ctrlKey || e.metaKey || e.altKey;
    const shouldBlockArrowKey = disableArrowKeysOnChange && isArrowKey;
    const shouldBlockChar = isChar && !isModifierKey && !allowedCharacters.includes(e.key);
    if (shouldBlockArrowKey || shouldBlockChar) {
      e.preventDefault();
      return;
    }
    onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
  };
  const handleChange = e => {
    const sanitizedValue = sanitizeValue(e.currentTarget.value);
    if (sanitizedValue !== e.currentTarget.value) {
      e.preventDefault();
      triggerOnChange(e.currentTarget, sanitizedValue);
      return;
    }
    onChange === null || onChange === void 0 || onChange(e);
  };
  const handlePaste = e => {
    const {
      currentTarget
    } = e;
    onPaste === null || onPaste === void 0 || onPaste(e);
    setTimeout(() => {
      if (!currentTarget) {
        return;
      }
      const sanitizedValue = sanitizeValue(currentTarget.value);
      triggerOnChange(currentTarget, sanitizedValue);
    });
  };
  const handleWheel = e => {
    const element = e.currentTarget;
    const isFocused = document.activeElement === element;
    if (isFocused) {
      element.blur();
    }
  };
  const handleBlur = e => {
    const {
      currentTarget
    } = e;
    const {
      valueAsNumber
    } = currentTarget;
    const formattedValue = formatValue(valueAsNumber);
    triggerOnChange(currentTarget, formattedValue);
    onBlur === null || onBlur === void 0 || onBlur(e);
  };
  const formattedValue = (0,react.useMemo)(() => formatValue(props.value), [props.value, formatValue]);
  const formattedDefaultValue = (0,react.useMemo)(() => formatValue(props.defaultValue), [props.defaultValue, formatValue]);

  // To ensure we don't strip trailing zeros while the user is typing,
  // we'll defer formatting while the input is focused.
  const isFocused = typeof document !== 'undefined' && document.activeElement === localRef.current;
  const displayValue = isFocused && !(0,lodash.isNil)(props.value) && !(0,lodash.isNaN)(props.value) ? props.value : formattedValue;
  return /*#__PURE__*/react.createElement(Input/* default */.A, _extends({}, props, {
    ref: localRef,
    type: "number",
    value: displayValue,
    defaultValue: formattedDefaultValue,
    min: min,
    onChange: handleChange,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    onPaste: handlePaste,
    onWheel: handleWheel,
    inputMode: maximumFractionDigits > 0 ? 'decimal' : 'numeric',
    dataTrackTag: dataTrackTag
  }));
});
NumberInput.displayName = 'NumberInput';
Object.assign(NumberInput, {
  id: constants/* INPUT_ID */.R0
});
/* harmony default export */ const components_NumberInput = (NumberInput);
try {
    // @ts-ignore
    NumberInput.displayName = "NumberInput";
    // @ts-ignore
    NumberInput.__docgenInfo = { "description": "", "displayName": "NumberInput", "props": { "value": { "defaultValue": null, "description": "", "name": "value", "required": false, "type": { "name": "number" } }, "defaultValue": { "defaultValue": null, "description": "", "name": "defaultValue", "required": false, "type": { "name": "number" } }, "hideNumberSpinButton": { "defaultValue": null, "description": "", "name": "hideNumberSpinButton", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableArrowKeysOnChange": { "defaultValue": { value: "false" }, "description": "Whether to disable the arrow keys from changing the value", "name": "disableArrowKeysOnChange", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "minimumFractionDigits": { "defaultValue": { value: "0" }, "description": "", "name": "minimumFractionDigits", "required": false, "type": { "name": "number" } }, "maximumFractionDigits": { "defaultValue": null, "description": "", "name": "maximumFractionDigits", "required": false, "type": { "name": "number" } }, "stripTrailingZerosIfInteger": { "defaultValue": { value: "true" }, "description": "By default, `minimumFractionDigits` is ignored for integers.\nSet this to `false` to show trailing zeros for integers, e.g. 10.00.", "name": "stripTrailingZerosIfInteger", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "min": { "defaultValue": null, "description": "", "name": "min", "required": false, "type": { "name": "number" } }, "max": { "defaultValue": null, "description": "", "name": "max", "required": false, "type": { "name": "number" } }, "dataTrackTag": { "defaultValue": { value: "number_input" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../inputs/src/components/NumberInput/index.tsx#NumberInput"] = { docgenInfo: NumberInput.__docgenInfo, name: "NumberInput", path: "../inputs/src/components/NumberInput/index.tsx#NumberInput" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../storybook_helpers/dist/esm/src/components/StoryText/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=3219.78e7dc5d.iframe.bundle.js.map