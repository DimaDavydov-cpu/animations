(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[8985],{

/***/ "../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/constants.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

"use strict";

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

"use strict";


/**
 * @type {String} Default locale for translations
 */
exports.DEFAULT_LOCALE = 'en-US';

/***/ }),

/***/ "../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ assignInlineVars)
});

// UNUSED EXPORTS: setElementVars

;// ../../node_modules/.pnpm/@vanilla-extract+private@1.0.6/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js
function vanilla_extract_private_esm_getVarName(variable) {
  var matches = variable.match(/^var\((.*)\)$/);
  if (matches) {
    return matches[1];
  }
  return variable;
}

function vanilla_extract_private_esm_get(obj, path) {
  var result = obj;
  for (var key of path) {
    if (!(key in result)) {
      throw new Error("Path ".concat(path.join(' -> '), " does not exist in object"));
    }
    result = result[key];
  }
  return result;
}

function vanilla_extract_private_esm_walkObject(obj, fn) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var clone = {};
  for (var key in obj) {
    var _value = obj[key];
    var currentPath = [...path, key];
    if (typeof _value === 'string' || typeof _value === 'number' || _value == null) {
      clone[key] = fn(_value, currentPath);
    } else if (typeof _value === 'object' && !Array.isArray(_value)) {
      clone[key] = vanilla_extract_private_esm_walkObject(_value, fn, currentPath);
    } else {
      console.warn("Skipping invalid key \"".concat(currentPath.join('.'), "\". Should be a string, number, null or object. Received: \"").concat(Array.isArray(_value) ? 'Array' : typeof _value, "\""));
    }
  }
  return clone;
}



;// ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js


function assignInlineVars(varsOrContract, tokens) {
  var styles = {};
  if (typeof tokens === 'object') {
    var _contract = varsOrContract;
    vanilla_extract_private_esm_walkObject(tokens, (value, path) => {
      if (value == null) {
        return;
      }
      var varName = vanilla_extract_private_esm_get(_contract, path);
      styles[vanilla_extract_private_esm_getVarName(varName)] = String(value);
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      var value = _vars[varName];
      if (value == null) {
        continue;
      }
      styles[vanilla_extract_private_esm_getVarName(varName)] = value;
    }
  }
  Object.defineProperty(styles, 'toString', {
    value: function value() {
      return Object.keys(this).map(key => "".concat(key, ":").concat(this[key])).join(';');
    },
    writable: false
  });
  return styles;
}

function setVar(element, variable, value) {
  element.style.setProperty(getVarName(variable), value);
}
function setElementVars(element, varsOrContract, tokens) {
  if (typeof tokens === 'object') {
    var _contract = varsOrContract;
    walkObject(tokens, (value, path) => {
      if (value == null) {
        return;
      }
      setVar(element, get(_contract, path), String(value));
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      var value = _vars[varName];
      if (value == null) {
        continue;
      }
      setVar(element, varName, _vars[varName]);
    }
  }
}




/***/ }),

/***/ "../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ createSprinkles)
});

// UNUSED EXPORTS: createAtomsFn

;// ../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-74286718.esm.js
function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

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
function _objectSpread2(e) {
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

var createSprinkles_74286718_esm_createSprinkles = composeStyles => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var sprinklesStyles = Object.assign({}, ...args.map(a => a.styles));
  var sprinklesKeys = Object.keys(sprinklesStyles);
  var shorthandNames = sprinklesKeys.filter(property => 'mappings' in sprinklesStyles[property]);
  var sprinklesFn = props => {
    var classNames = [];
    var shorthands = {};
    var nonShorthands = _objectSpread2({}, props);
    var hasShorthands = false;
    for (var shorthand of shorthandNames) {
      var value = props[shorthand];
      if (value != null) {
        var sprinkle = sprinklesStyles[shorthand];
        hasShorthands = true;
        for (var propMapping of sprinkle.mappings) {
          shorthands[propMapping] = value;
          if (nonShorthands[propMapping] == null) {
            delete nonShorthands[propMapping];
          }
        }
      }
    }
    var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
    var _loop = function _loop() {
      var propValue = finalProps[prop];
      var sprinkle = sprinklesStyles[prop];
      try {
        if (sprinkle.mappings) {
          // Skip shorthands
          return 1; // continue
        }
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          if (false) // removed by dead control flow
{}
          classNames.push(sprinkle.values[propValue].defaultClass);
        } else if (Array.isArray(propValue)) {
          for (var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++) {
            var responsiveValue = propValue[responsiveIndex];
            if (responsiveValue != null) {
              var conditionName = sprinkle.responsiveArray[responsiveIndex];
              if (false) // removed by dead control flow
{}
              classNames.push(sprinkle.values[responsiveValue].conditions[conditionName]);
            }
          }
        } else {
          for (var _conditionName in propValue) {
            // Conditional style
            var _value = propValue[_conditionName];
            if (_value != null) {
              if (false) // removed by dead control flow
{}
              classNames.push(sprinkle.values[_value].conditions[_conditionName]);
            }
          }
        }
      } catch (e) {
        if (false) // removed by dead control flow
{ var _value2, _conditionName2, _responsiveValue, breakpointCount, invalidPropValue, format; }
        throw e;
      }
    };
    for (var prop in finalProps) {
      if (_loop()) continue;
    }
    return composeStyles(classNames.join(' '));
  };
  return Object.assign(sprinklesFn, {
    properties: new Set(sprinklesKeys)
  });
};



;// ../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js


var composeStyles = classList => classList;
var createSprinkles = function createSprinkles() {
  return createSprinkles_74286718_esm_createSprinkles(composeStyles)(...arguments);
};

/** @deprecated - Use `createSprinkles` */
var createAtomsFn = (/* unused pure expression or super */ null && (createSprinkles));




/***/ }),

/***/ "../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ createMapValueFn)
});

// UNUSED EXPORTS: createNormalizeValueFn

;// ../../node_modules/.pnpm/@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0/node_modules/@vanilla-extract/css/functionSerializer/dist/vanilla-extract-css-functionSerializer.browser.esm.js
function addFunctionSerializer(target, recipe) {
  // TODO: Update to "__function_serializer__" in future.
  // __recipe__ is the backwards compatible name
  Object.defineProperty(target, '__recipe__', {
    value: recipe,
    writable: false
  });
  return target;
}



;// ../../node_modules/.pnpm/@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0/node_modules/@vanilla-extract/css/recipe/dist/vanilla-extract-css-recipe.browser.esm.js


/**
 * @deprecated Use 'addFunctionSerializer' from '@vanilla-extract/css/functionSerializer'
 */
var addRecipe = addFunctionSerializer;



;// ../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js


function createNormalizeValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error('Styles have no conditions');
  }
  function normalizeValue(value) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      if (!conditions.defaultCondition) {
        throw new Error('No default condition');
      }
      return {
        [conditions.defaultCondition]: value
      };
    }
    if (Array.isArray(value)) {
      if (!('responsiveArray' in conditions)) {
        throw new Error('Responsive arrays are not supported');
      }
      var returnValue = {};
      for (var index in conditions.responsiveArray) {
        if (value[index] != null) {
          returnValue[conditions.responsiveArray[index]] = value[index];
        }
      }
      return returnValue;
    }
    return value;
  }
  return addRecipe(normalizeValue, {
    importPath: '@vanilla-extract/sprinkles/createUtils',
    importName: 'createNormalizeValueFn',
    args: [{
      conditions: properties.conditions
    }]
  });
}
function createMapValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error('Styles have no conditions');
  }
  var normalizeValue = createNormalizeValueFn(properties);
  function mapValue(value, mapFn) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      if (!conditions.defaultCondition) {
        throw new Error('No default condition');
      }
      return mapFn(value, conditions.defaultCondition);
    }
    var normalizedObject = Array.isArray(value) ? normalizeValue(value) : value;
    var mappedObject = {};
    for (var _key in normalizedObject) {
      if (normalizedObject[_key] != null) {
        mappedObject[_key] = mapFn(normalizedObject[_key], _key);
      }
    }
    return mappedObject;
  }
  return addRecipe(mapValue, {
    importPath: '@vanilla-extract/sprinkles/createUtils',
    importName: 'createMapValueFn',
    args: [{
      conditions: properties.conditions
    }]
  });
}




/***/ }),

/***/ "../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js":
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ }),

/***/ "../data_display/src/components/Rating/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Compact: () => (/* binding */ Compact),
  Full: () => (/* binding */ Full),
  Primary: () => (/* binding */ Primary),
  Reviews: () => (/* binding */ Reviews),
  ScoreFormatting: () => (/* binding */ ScoreFormatting),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js + 21 modules
var browser = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Star.js
var Star = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Star.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/StarHalf.js
var StarHalf = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/StarHalf.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/StarSolid.js
var StarSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/StarSolid.js");
;// ../data_display/src/components/Rating/RatingStar/constants.ts

const variantToStar = {
  empty: Star/* default */.A,
  half: StarHalf/* default */.A,
  full: StarSolid/* default */.A
};
;// ../data_display/src/components/Rating/RatingStar/index.tsx


const RatingStar = _ref => {
  let {
    starVariant = 'empty'
  } = _ref;
  const Star = variantToStar[starVariant];
  return /*#__PURE__*/react.createElement(Star, {
    color: "grey_1200"
  });
};
RatingStar.displayName = 'RatingStar';
/* harmony default export */ const Rating_RatingStar = (RatingStar);
try {
    // @ts-ignore
    RatingStar.displayName = "RatingStar";
    // @ts-ignore
    RatingStar.__docgenInfo = { "description": "", "displayName": "RatingStar", "props": { "starVariant": { "defaultValue": { value: "empty" }, "description": "", "name": "starVariant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"full\"" }, { "value": "\"empty\"" }, { "value": "\"half\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Rating/RatingStar/index.tsx#RatingStar"] = { docgenInfo: RatingStar.__docgenInfo, name: "RatingStar", path: "../data_display/src/components/Rating/RatingStar/index.tsx#RatingStar" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../data_display/src/components/Rating/utils/index.ts

const formatStars = (variant, score) => {
  const starCount = variant === 'full' ? 5 : 1;
  return (0,lodash.times)(starCount).map(index => calculateStarStarVariant(score, index));
};
const calculateStarStarVariant = (score, starIndex) => {
  const normalizedScore = Math.round(score * 2) / 2;
  const filledStarCount = Math.floor(normalizedScore);
  const remainderStar = normalizedScore - filledStarCount;
  if (starIndex < filledStarCount) {
    return 'full';
  }
  if (starIndex === filledStarCount && remainderStar === 0.5) {
    return 'half';
  }
  return 'empty';
};
;// ../data_display/src/components/Rating/constants.ts
const MIN_RATING = 0.1;
const MAX_RATING = 5.1;
;// ../data_display/src/components/Rating/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}









const Rating = _ref => {
  let {
    score,
    minimumFractionDigits,
    maximumFractionDigits,
    showScore = true,
    reviews,
    variant = 'full',
    onReviewsClick,
    dataTrackTag = 'rating',
    dataTrackValue = String(score)
  } = _ref;
  if (!(0,lodash.inRange)(score, MIN_RATING, MAX_RATING)) {
    return null;
  }
  const isReviewsClickable = typeof onReviewsClick === 'function';
  const stars = formatStars(variant, score);
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    display: "flex",
    alignItems: "center",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "inlineFlex",
    paddingBottom: "1"
  }, stars.map((starVariant, index) => /*#__PURE__*/react.createElement(Container/* default */.A, {
    key: index,
    as: "span",
    paddingLeft: index !== 0 ? '1' : undefined,
    display: "inlineFlex"
  }, /*#__PURE__*/react.createElement(Rating_RatingStar, {
    starVariant: starVariant
  })))), showScore && /*#__PURE__*/react.createElement(Text/* default */.A, {
    as: "strong",
    fontWeight: "bold",
    paddingLeft: "1"
  }, (0,browser/* numberFormat */.jq)({
    value: score,
    options: {
      fallbackValue: score.toString(),
      minimumFractionDigits,
      maximumFractionDigits
    }
  })), !(0,lodash.isEmpty)(reviews) && /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: isReviewsClickable ? 'button' : 'span',
    marginLeft: "1",
    onClick: onReviewsClick,
    color: "bodySecondary",
    borderRadius: "sm",
    outlineOffset: {
      focusVisible: 'sm'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineColor: {
      focusVisible: 'grey_1200'
    }
  }, "(", /*#__PURE__*/react.createElement(Text/* default */.A, _extends({
    as: "span",
    color: "inherit"
  }, isReviewsClickable ? {
    decoration: 'underline',
    cursor: 'pointer'
  } : {}), reviews), ")"));
};
Rating.displayName = 'Rating';
/* harmony default export */ const components_Rating = (Rating);
try {
    // @ts-ignore
    Rating.displayName = "Rating";
    // @ts-ignore
    Rating.__docgenInfo = { "description": "", "displayName": "Rating", "props": { "score": { "defaultValue": null, "description": "", "name": "score", "required": true, "type": { "name": "number" } }, "minimumFractionDigits": { "defaultValue": null, "description": "", "name": "minimumFractionDigits", "required": false, "type": { "name": "number" } }, "maximumFractionDigits": { "defaultValue": null, "description": "", "name": "maximumFractionDigits", "required": false, "type": { "name": "number" } }, "showScore": { "defaultValue": { value: "true" }, "description": "", "name": "showScore", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "reviews": { "defaultValue": null, "description": "", "name": "reviews", "required": false, "type": { "name": "string" } }, "variant": { "defaultValue": { value: "full" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"compact\"" }, { "value": "\"full\"" }] } }, "onReviewsClick": { "defaultValue": null, "description": "", "name": "onReviewsClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "dataTrackTag": { "defaultValue": { value: "rating" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": { value: "String(score)" }, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Rating/index.tsx#Rating"] = { docgenInfo: Rating.__docgenInfo, name: "Rating", path: "../data_display/src/components/Rating/index.tsx#Rating" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../data_display/src/components/Rating/stories/index.stories.tsx




const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore']
};
const Full = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "8"
  }, (0,lodash.times)(6).map((row, index) => /*#__PURE__*/react.createElement(Container/* default */.A, {
    key: index
  }, (0,lodash.times)(10).map((col, index) => /*#__PURE__*/react.createElement(components_Rating, {
    key: index,
    score: row + col / 10
  })))))),
  parameters: {
    docs: {
      source: {
        code: " \n{times(6).map((row, index) => (\n  <Container key={index}>\n    {times(10).map((col, index) => (\n      <Rating key={index} score={row + col / 10} />\n    ))}\n  </Container>\n))}"
      }
    }
  }
};
const Compact = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "8"
  }, (0,lodash.times)(6).map((row, index) => /*#__PURE__*/react.createElement(Container/* default */.A, {
    key: index
  }, (0,lodash.times)(10).map((col, index) => /*#__PURE__*/react.createElement(components_Rating, {
    key: index,
    variant: "compact",
    score: row + col / 10
  })))))),
  parameters: {
    docs: {
      source: {
        code: " \n{times(6).map((row, index) => (\n  <Container key={index}>\n    {times(10).map((col, index) => (\n      <Rating variant=\"compact\" key={index} score={row + col / 10} />\n    ))}\n  </Container>\n))}"
      }
    }
  }
};
const Reviews = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_Rating, {
    variant: "compact",
    score: 3.423454,
    reviews: "20"
  }), /*#__PURE__*/react.createElement(components_Rating, {
    variant: "compact",
    score: 2.4,
    reviews: '200 reviews'
  }), /*#__PURE__*/react.createElement(components_Rating, {
    score: 3.4,
    reviews: "20"
  }), /*#__PURE__*/react.createElement(components_Rating, {
    score: 2.4,
    onReviewsClick: () => alert('clicked'),
    reviews: '200 reviews'
  })),
  parameters: {
    docs: {
      source: {
        code: " \n<Rating variant=\"compact\" score={3.423454} reviews=\"20\" />\n<Rating variant=\"compact\" score={2.4} reviews={'200 reviews'} />\n<Rating score={3.4} reviews=\"20\" />\n<Rating score={2.4} onReviewsClick={() => alert('clicked')} reviews={'200 reviews'} />"
      }
    }
  }
};
const ScoreFormatting = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_Rating, {
    variant: "compact",
    score: 3.423454,
    reviews: "20"
  }), /*#__PURE__*/react.createElement(components_Rating, {
    variant: "compact",
    minimumFractionDigits: 5,
    score: 3.423454,
    reviews: "20"
  }), /*#__PURE__*/react.createElement(components_Rating, {
    variant: "compact",
    maximumFractionDigits: 1,
    score: 3.423454,
    reviews: "20"
  })),
  parameters: {
    docs: {
      source: {
        code: " \n<Rating variant=\"compact\" score={3.423454} reviews=\"20\" />\n<Rating variant=\"compact\" minimumFractionDigits={5} score={3.423454} reviews=\"20\" />\n<Rating variant=\"compact\" maximumFractionDigits={1} score={3.423454} reviews=\"20\" />"
      }
    }
  }
};
const meta = {
  args: {
    score: 5
  },
  title: 'Data Display/Rating',
  component: components_Rating
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
Full.parameters = {
  ...Full.parameters,
  docs: {
    ...Full.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <>\n      <Stack gap=\"8\">\n        {times(6).map((row, index) => <Container key={index}>\n            {times(10).map((col, index) => <Rating key={index} score={row + col / 10} />)}\n          </Container>)}\n      </Stack>\n    </>,\n  parameters: {\n    docs: {\n      source: {\n        code: ` \n{times(6).map((row, index) => (\n  <Container key={index}>\n    {times(10).map((col, index) => (\n      <Rating key={index} score={row + col / 10} />\n    ))}\n  </Container>\n))}`\n      }\n    }\n  }\n}",
      ...Full.parameters?.docs?.source
    }
  }
};
Compact.parameters = {
  ...Compact.parameters,
  docs: {
    ...Compact.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <>\n      <Stack gap=\"8\">\n        {times(6).map((row, index) => <Container key={index}>\n            {times(10).map((col, index) => <Rating key={index} variant=\"compact\" score={row + col / 10} />)}\n          </Container>)}\n      </Stack>\n    </>,\n  parameters: {\n    docs: {\n      source: {\n        code: ` \n{times(6).map((row, index) => (\n  <Container key={index}>\n    {times(10).map((col, index) => (\n      <Rating variant=\"compact\" key={index} score={row + col / 10} />\n    ))}\n  </Container>\n))}`\n      }\n    }\n  }\n}",
      ...Compact.parameters?.docs?.source
    }
  }
};
Reviews.parameters = {
  ...Reviews.parameters,
  docs: {
    ...Reviews.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <>\n      <Rating variant=\"compact\" score={3.423454} reviews=\"20\" />\n      <Rating variant=\"compact\" score={2.4} reviews={'200 reviews'} />\n      <Rating score={3.4} reviews=\"20\" />\n      <Rating score={2.4} onReviewsClick={() => alert('clicked')} reviews={'200 reviews'} />\n    </>,\n  parameters: {\n    docs: {\n      source: {\n        code: ` \n<Rating variant=\"compact\" score={3.423454} reviews=\"20\" />\n<Rating variant=\"compact\" score={2.4} reviews={'200 reviews'} />\n<Rating score={3.4} reviews=\"20\" />\n<Rating score={2.4} onReviewsClick={() => alert('clicked')} reviews={'200 reviews'} />`\n      }\n    }\n  }\n}",
      ...Reviews.parameters?.docs?.source
    }
  }
};
ScoreFormatting.parameters = {
  ...ScoreFormatting.parameters,
  docs: {
    ...ScoreFormatting.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <>\n      <Rating variant=\"compact\" score={3.423454} reviews=\"20\" />\n      <Rating variant=\"compact\" minimumFractionDigits={5} score={3.423454} reviews=\"20\" />\n      <Rating variant=\"compact\" maximumFractionDigits={1} score={3.423454} reviews=\"20\" />\n    </>,\n  parameters: {\n    docs: {\n      source: {\n        code: ` \n<Rating variant=\"compact\" score={3.423454} reviews=\"20\" />\n<Rating variant=\"compact\" minimumFractionDigits={5} score={3.423454} reviews=\"20\" />\n<Rating variant=\"compact\" maximumFractionDigits={1} score={3.423454} reviews=\"20\" />`\n      }\n    }\n  }\n}",
      ...ScoreFormatting.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Full","Compact","Reviews","ScoreFormatting"];

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Star.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const StarIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('StarIcon')
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
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.36 1.93a.717.717 0 0 1 1.28 0l1.568 3.078c.104.205.3.347.526.383l3.41.543c.579.092.81.8.396 1.215l-2.442 2.448a.72.72 0 0 0-.2.618l.538 3.417a.717.717 0 0 1-1.034.75l-3.076-1.567a.72.72 0 0 0-.652 0l-3.076 1.567a.717.717 0 0 1-1.034-.75l.538-3.417a.72.72 0 0 0-.2-.618L1.46 7.149a.717.717 0 0 1 .395-1.215l3.41-.543a.72.72 0 0 0 .527-.383z",
    vectorEffect: "non-scaling-stroke"
  }));
};
StarIcon.id = 'StarIcon';
StarIcon.displayName = 'StarIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarIcon);
;
StarIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StarIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/StarHalf.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const StarHalfIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('StarHalfIcon')
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
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.36 1.93a.717.717 0 0 1 1.28 0l1.568 3.078c.104.205.3.347.526.383l3.41.543c.579.092.81.8.396 1.215l-2.442 2.448a.72.72 0 0 0-.2.618l.538 3.417a.717.717 0 0 1-1.034.75l-3.076-1.567a.72.72 0 0 0-.652 0l-.313.16m0-11.046v11.046m0-11.046-.785 1.54M4.598 14.382V5.497m0 8.885.597-.304m-.597.304a.7.7 0 0 1-.496.059m0-4.226-.538 3.417c-.062.395.2.725.538.809m0-4.226a.72.72 0 0 0-.2-.618m.2.618v4.226m-.2-4.844V5.608m0 3.989-.512-.513m-1.535-3.15a.717.717 0 0 0-.395 1.215l.395.41m0-1.625V7.56m0-1.626.512-.081m2.899-.462a.72.72 0 0 0 .526-.383m-.526.383-.668.106m.668-.106-.07 8.687m.596-9.07.784-1.54m-.784 1.54v8.766m1.569-.799-.708.36M6.576 3.47l.077 9.867m0 0-.861.438m0 0-.597.304m-.597-8.58-.696.11m0 0-.512.082m-.512.081v2.8m0-2.8.512-.081m-.512.081-.511.082m.511 2.718.512.513m-.512-.513-.511-.506m-.512-.505.512.505M3.39 5.69v3.394M2.367 5.853v2.212",
    vectorEffect: "non-scaling-stroke"
  }));
};
StarHalfIcon.id = 'StarHalfIcon';
StarHalfIcon.displayName = 'StarHalfIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarHalfIcon);
;
StarHalfIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StarHalfIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/StarSolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const StarSolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('StarSolidIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.693 1.589c.544-1.068 2.07-1.068 2.615 0l1.561 3.064 3.394.54c1.183.189 1.654 1.638.808 2.486l-2.43 2.436.536 3.4c.186 1.184-1.048 2.08-2.115 1.536L8 13.49l-3.061 1.56c-1.068.543-2.302-.352-2.115-1.536l.535-3.4L.93 7.678c-.845-.847-.374-2.296.809-2.485l3.394-.54z"
  }));
};
StarSolidIcon.id = 'StarSolidIcon';
StarSolidIcon.displayName = 'StarSolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarSolidIcon);
;
StarSolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StarSolidIcon"
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
//# sourceMappingURL=8985.af979adf.iframe.bundle.js.map