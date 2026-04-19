(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[4975],{

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

/***/ "../feedback/src/components/Skeleton/SkeletonRound/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");


const SkeletonRound = _ref => {
  let {
    size = 48,
    maxSize,
    dataTestId,
    dataTrackTag = 'skeleton_round',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    height: size,
    width: size,
    maxHeight: maxSize,
    maxWidth: maxSize,
    backgroundColor: "grey_300",
    borderRadius: "circle",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    "data-testid": dataTestId
  });
};
SkeletonRound.displayName = 'SkeletonRound';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonRound);
try {
    // @ts-ignore
    SkeletonRound.displayName = "SkeletonRound";
    // @ts-ignore
    SkeletonRound.__docgenInfo = { "description": "", "displayName": "SkeletonRound", "props": { "maxSize": { "defaultValue": null, "description": "Sets both height and width.<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxSize", "required": false, "type": { "name": "enum", "value": [{ "value": "number" }, { "value": "\"inherit\"" }, { "value": "\"auto\"" }, { "value": "\"initial\"" }, { "value": "\"unset\"" }, { "value": "\"-moz-initial\"" }, { "value": "\"revert\"" }, { "value": "\"revert-layer\"" }, { "value": "`var(--${string})`" }, { "value": "`var(--${string}, ${string})`" }, { "value": "`var(--${string}, ${number})`" }, { "value": "\"-moz-max-content\"" }, { "value": "\"-moz-min-content\"" }, { "value": "\"-webkit-fit-content\"" }, { "value": "\"fit-content\"" }, { "value": "\"max-content\"" }, { "value": "\"min-content\"" }, { "value": "`${number}px`" }, { "value": "`${number}%`" }, { "value": "`${number}em`" }, { "value": "`${number}rem`" }, { "value": "`calc(${string})`" }, { "value": "`var(--${string})` & `var(--${string}, ${string})`" }, { "value": "`var(--${string})` & `var(--${string}, ${number})`" }, { "value": "`var(--${string})` & `${number}px`" }, { "value": "`var(--${string})` & `${number}%`" }, { "value": "`var(--${string})` & `${number}em`" }, { "value": "`var(--${string})` & `${number}rem`" }, { "value": "`var(--${string})` & `calc(${string})`" }, { "value": "`var(--${string})` & `${number}vh`" }, { "value": "`var(--${string}, ${string})` & `var(--${string})`" }, { "value": "`var(--${string}, ${string})` & `var(--${string}, ${number})`" }, { "value": "`var(--${string}, ${string})` & `${number}px`" }, { "value": "`var(--${string}, ${string})` & `${number}%`" }, { "value": "`var(--${string}, ${string})` & `${number}em`" }, { "value": "`var(--${string}, ${string})` & `${number}rem`" }, { "value": "`var(--${string}, ${string})` & `calc(${string})`" }, { "value": "`var(--${string}, ${string})` & `${number}vh`" }, { "value": "`var(--${string}, ${number})` & `var(--${string})`" }, { "value": "`var(--${string}, ${number})` & `var(--${string}, ${string})`" }, { "value": "`var(--${string}, ${number})` & `${number}px`" }, { "value": "`var(--${string}, ${number})` & `${number}%`" }, { "value": "`var(--${string}, ${number})` & `${number}em`" }, { "value": "`var(--${string}, ${number})` & `${number}rem`" }, { "value": "`var(--${string}, ${number})` & `calc(${string})`" }, { "value": "`var(--${string}, ${number})` & `${number}vh`" }, { "value": "`${number}px` & `var(--${string})`" }, { "value": "`${number}px` & `var(--${string}, ${string})`" }, { "value": "`${number}px` & `var(--${string}, ${number})`" }, { "value": "`${number}px` & `${number}%`" }, { "value": "`${number}px` & `${number}em`" }, { "value": "`${number}px` & `${number}rem`" }, { "value": "`${number}px` & `calc(${string})`" }, { "value": "`${number}px` & `${number}vh`" }, { "value": "`${number}%` & `var(--${string})`" }, { "value": "`${number}%` & `var(--${string}, ${string})`" }, { "value": "`${number}%` & `var(--${string}, ${number})`" }, { "value": "`${number}%` & `${number}px`" }, { "value": "`${number}%` & `${number}em`" }, { "value": "`${number}%` & `${number}rem`" }, { "value": "`${number}%` & `calc(${string})`" }, { "value": "`${number}%` & `${number}vh`" }, { "value": "`${number}em` & `var(--${string})`" }, { "value": "`${number}em` & `var(--${string}, ${string})`" }, { "value": "`${number}em` & `var(--${string}, ${number})`" }, { "value": "`${number}em` & `${number}px`" }, { "value": "`${number}em` & `${number}%`" }, { "value": "`${number}em` & `${number}rem`" }, { "value": "`${number}em` & `calc(${string})`" }, { "value": "`${number}em` & `${number}vh`" }, { "value": "`${number}rem` & `var(--${string})`" }, { "value": "`${number}rem` & `var(--${string}, ${string})`" }, { "value": "`${number}rem` & `var(--${string}, ${number})`" }, { "value": "`${number}rem` & `${number}px`" }, { "value": "`${number}rem` & `${number}%`" }, { "value": "`${number}rem` & `${number}em`" }, { "value": "`${number}rem` & `calc(${string})`" }, { "value": "`${number}rem` & `${number}vh`" }, { "value": "`${number}vw` & `var(--${string})`" }, { "value": "`${number}vw` & `var(--${string}, ${string})`" }, { "value": "`${number}vw` & `var(--${string}, ${number})`" }, { "value": "`${number}vw` & `${number}px`" }, { "value": "`${number}vw` & `${number}%`" }, { "value": "`${number}vw` & `${number}em`" }, { "value": "`${number}vw` & `${number}rem`" }, { "value": "`${number}vw` & `calc(${string})`" }, { "value": "`${number}vw` & `${number}vh`" }, { "value": "`calc(${string})` & `var(--${string})`" }, { "value": "`calc(${string})` & `var(--${string}, ${string})`" }, { "value": "`calc(${string})` & `var(--${string}, ${number})`" }, { "value": "`calc(${string})` & `${number}px`" }, { "value": "`calc(${string})` & `${number}%`" }, { "value": "`calc(${string})` & `${number}em`" }, { "value": "`calc(${string})` & `${number}rem`" }, { "value": "`calc(${string})` & `${number}vh`" }] } }, "size": { "defaultValue": { value: "48" }, "description": "Sets both height and width.<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "number" }, { "value": "\"inherit\"" }, { "value": "\"auto\"" }, { "value": "\"initial\"" }, { "value": "\"unset\"" }, { "value": "\"-moz-initial\"" }, { "value": "\"revert\"" }, { "value": "\"revert-layer\"" }, { "value": "`var(--${string})`" }, { "value": "`var(--${string}, ${string})`" }, { "value": "`var(--${string}, ${number})`" }, { "value": "\"-moz-max-content\"" }, { "value": "\"-moz-min-content\"" }, { "value": "\"-webkit-fit-content\"" }, { "value": "\"fit-content\"" }, { "value": "\"max-content\"" }, { "value": "\"min-content\"" }, { "value": "`${number}px`" }, { "value": "`${number}%`" }, { "value": "`${number}em`" }, { "value": "`${number}rem`" }, { "value": "`calc(${string})`" }, { "value": "`var(--${string})` & `var(--${string}, ${string})`" }, { "value": "`var(--${string})` & `var(--${string}, ${number})`" }, { "value": "`var(--${string})` & `${number}px`" }, { "value": "`var(--${string})` & `${number}%`" }, { "value": "`var(--${string})` & `${number}em`" }, { "value": "`var(--${string})` & `${number}rem`" }, { "value": "`var(--${string})` & `calc(${string})`" }, { "value": "`var(--${string})` & `${number}vh`" }, { "value": "`var(--${string}, ${string})` & `var(--${string})`" }, { "value": "`var(--${string}, ${string})` & `var(--${string}, ${number})`" }, { "value": "`var(--${string}, ${string})` & `${number}px`" }, { "value": "`var(--${string}, ${string})` & `${number}%`" }, { "value": "`var(--${string}, ${string})` & `${number}em`" }, { "value": "`var(--${string}, ${string})` & `${number}rem`" }, { "value": "`var(--${string}, ${string})` & `calc(${string})`" }, { "value": "`var(--${string}, ${string})` & `${number}vh`" }, { "value": "`var(--${string}, ${number})` & `var(--${string})`" }, { "value": "`var(--${string}, ${number})` & `var(--${string}, ${string})`" }, { "value": "`var(--${string}, ${number})` & `${number}px`" }, { "value": "`var(--${string}, ${number})` & `${number}%`" }, { "value": "`var(--${string}, ${number})` & `${number}em`" }, { "value": "`var(--${string}, ${number})` & `${number}rem`" }, { "value": "`var(--${string}, ${number})` & `calc(${string})`" }, { "value": "`var(--${string}, ${number})` & `${number}vh`" }, { "value": "`${number}px` & `var(--${string})`" }, { "value": "`${number}px` & `var(--${string}, ${string})`" }, { "value": "`${number}px` & `var(--${string}, ${number})`" }, { "value": "`${number}px` & `${number}%`" }, { "value": "`${number}px` & `${number}em`" }, { "value": "`${number}px` & `${number}rem`" }, { "value": "`${number}px` & `calc(${string})`" }, { "value": "`${number}px` & `${number}vh`" }, { "value": "`${number}%` & `var(--${string})`" }, { "value": "`${number}%` & `var(--${string}, ${string})`" }, { "value": "`${number}%` & `var(--${string}, ${number})`" }, { "value": "`${number}%` & `${number}px`" }, { "value": "`${number}%` & `${number}em`" }, { "value": "`${number}%` & `${number}rem`" }, { "value": "`${number}%` & `calc(${string})`" }, { "value": "`${number}%` & `${number}vh`" }, { "value": "`${number}em` & `var(--${string})`" }, { "value": "`${number}em` & `var(--${string}, ${string})`" }, { "value": "`${number}em` & `var(--${string}, ${number})`" }, { "value": "`${number}em` & `${number}px`" }, { "value": "`${number}em` & `${number}%`" }, { "value": "`${number}em` & `${number}rem`" }, { "value": "`${number}em` & `calc(${string})`" }, { "value": "`${number}em` & `${number}vh`" }, { "value": "`${number}rem` & `var(--${string})`" }, { "value": "`${number}rem` & `var(--${string}, ${string})`" }, { "value": "`${number}rem` & `var(--${string}, ${number})`" }, { "value": "`${number}rem` & `${number}px`" }, { "value": "`${number}rem` & `${number}%`" }, { "value": "`${number}rem` & `${number}em`" }, { "value": "`${number}rem` & `calc(${string})`" }, { "value": "`${number}rem` & `${number}vh`" }, { "value": "`${number}vw` & `var(--${string})`" }, { "value": "`${number}vw` & `var(--${string}, ${string})`" }, { "value": "`${number}vw` & `var(--${string}, ${number})`" }, { "value": "`${number}vw` & `${number}px`" }, { "value": "`${number}vw` & `${number}%`" }, { "value": "`${number}vw` & `${number}em`" }, { "value": "`${number}vw` & `${number}rem`" }, { "value": "`${number}vw` & `calc(${string})`" }, { "value": "`${number}vw` & `${number}vh`" }, { "value": "`calc(${string})` & `var(--${string})`" }, { "value": "`calc(${string})` & `var(--${string}, ${string})`" }, { "value": "`calc(${string})` & `var(--${string}, ${number})`" }, { "value": "`calc(${string})` & `${number}px`" }, { "value": "`calc(${string})` & `${number}%`" }, { "value": "`calc(${string})` & `${number}em`" }, { "value": "`calc(${string})` & `${number}rem`" }, { "value": "`calc(${string})` & `${number}vh`" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "skeleton_round" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/Skeleton/SkeletonRound/index.tsx#SkeletonRound"] = { docgenInfo: SkeletonRound.__docgenInfo, name: "SkeletonRound", path: "../feedback/src/components/Skeleton/SkeletonRound/index.tsx#SkeletonRound" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../feedback/src/components/Skeleton/SkeletonSquare/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");


const SkeletonSquare = _ref => {
  let {
    width = '100%',
    height = '16px',
    maxHeight,
    maxWidth = '100%',
    dataTestId,
    borderRadius = 'sm',
    dataTrackTag = 'skeleton_square',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    backgroundColor: "grey_300",
    borderRadius: borderRadius,
    width: width,
    height: height,
    maxHeight: maxHeight,
    maxWidth: maxWidth,
    "data-testid": dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  });
};
SkeletonSquare.displayName = 'SkeletonSquare';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonSquare);
try {
    // @ts-ignore
    SkeletonSquare.displayName = "SkeletonSquare";
    // @ts-ignore
    SkeletonSquare.__docgenInfo = { "description": "", "displayName": "SkeletonSquare", "props": { "width": { "defaultValue": { value: "100%" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": { value: "16px" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "maxWidth": { "defaultValue": { value: "100%" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "borderRadius": { "defaultValue": { value: "sm" }, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "skeleton_square" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/Skeleton/SkeletonSquare/index.tsx#SkeletonSquare"] = { docgenInfo: SkeletonSquare.__docgenInfo, name: "SkeletonSquare", path: "../feedback/src/components/Skeleton/SkeletonSquare/index.tsx#SkeletonSquare" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../feedback/src/components/Skeleton/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Card: () => (/* binding */ Card),
  CardWithImageAndText: () => (/* binding */ CardWithImageAndText),
  Primary: () => (/* binding */ Primary),
  Sizes: () => (/* binding */ Sizes),
  WithAvatarAndHeadlineAndParagraph: () => (/* binding */ WithAvatarAndHeadlineAndParagraph),
  WithAvatarAndParagraphAndActions: () => (/* binding */ WithAvatarAndParagraphAndActions),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/components/Wipe/index.js + 3 modules
var Wipe = __webpack_require__("../transition/dist/esm/src/components/Wipe/index.js");
;// ../feedback/src/components/Skeleton/index.tsx



const Skeleton = _ref => {
  let {
    children,
    animationDuration = 'moderate',
    animationDelay = 'moderate',
    width = 'fit-content',
    preferMotion = true,
    dataTestId,
    dataTrackTag = 'skeleton',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: width,
    overflow: "hidden",
    position: "relative",
    "data-testid": dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, preferMotion && /*#__PURE__*/react.createElement(Wipe/* default */.A, {
    animationDuration: animationDuration,
    animationDelay: animationDelay
  }), children);
};
Skeleton.displayName = 'Skeleton';
/* harmony default export */ const components_Skeleton = (Skeleton);
try {
    // @ts-ignore
    Skeleton.displayName = "Skeleton";
    // @ts-ignore
    Skeleton.__docgenInfo = { "description": "", "displayName": "Skeleton", "props": { "width": { "defaultValue": { value: "fit-content" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "preferMotion": { "defaultValue": { value: "true" }, "description": "", "name": "preferMotion", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "animationDuration": { "defaultValue": { value: "moderate" }, "description": "", "name": "animationDuration", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fast\"" }, { "value": "\"moderate\"" }, { "value": "\"slow\"" }] } }, "animationDelay": { "defaultValue": { value: "moderate" }, "description": "", "name": "animationDelay", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fast\"" }, { "value": "\"moderate\"" }, { "value": "\"slow\"" }] } }, "dataTrackTag": { "defaultValue": { value: "skeleton" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/Skeleton/index.tsx#Skeleton"] = { docgenInfo: Skeleton.__docgenInfo, name: "Skeleton", path: "../feedback/src/components/Skeleton/index.tsx#Skeleton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../feedback/src/components/Skeleton/SkeletonRound/index.tsx
var SkeletonRound = __webpack_require__("../feedback/src/components/Skeleton/SkeletonRound/index.tsx");
// EXTERNAL MODULE: ../feedback/src/components/Skeleton/SkeletonSquare/index.tsx
var SkeletonSquare = __webpack_require__("../feedback/src/components/Skeleton/SkeletonSquare/index.tsx");
;// ../feedback/src/components/Skeleton/stories/index.stories.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}






const Primary = {
  tags: ['sidebar-ignore']
};
const Sizes = {
  args: {
    width: 'auto'
  },
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(components_Skeleton, args, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column"
  }, /*#__PURE__*/react.createElement(SkeletonRound/* default */.A, {
    size: 80
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "500px",
    height: "100px"
  })))
};
const Card = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    wrap: "wrap",
    gap: "2"
  }, esm/* faker */.az.datatype.array(5).map(key => /*#__PURE__*/react.createElement(components_Skeleton, _extends({}, args, {
    key: key
  }), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    gap: "1",
    borderWidth: "sm",
    borderRadius: "sm"
  }, /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "350px",
    height: "270px"
  }), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    gap: "2",
    padding: "3"
  }, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    alignItems: "center",
    gap: "2"
  }, /*#__PURE__*/react.createElement(SkeletonRound/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    gap: "2"
  }, /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "160px"
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "170px"
  }))), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "320px"
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "200px"
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "100px"
  }), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    justifyContent: "spaceBetween",
    paddingY: "2",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    height: "24px",
    width: "50px"
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    height: "24px",
    width: "120px"
  })))))))
};
const WithAvatarAndHeadlineAndParagraph = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(components_Skeleton, args, /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement(SkeletonRound/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    gap: "2"
  }, /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 210
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 440
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 440
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 440
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 440
  }))))
};
const WithAvatarAndParagraphAndActions = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(components_Skeleton, args, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    gap: "2",
    direction: "column"
  }, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    gap: "2",
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(SkeletonRound/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    gap: "2",
    direction: "column"
  }, /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "88px"
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "144px"
  }))), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 550
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 550
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 500
  }), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    gap: "2",
    paddingTop: "2"
  }, /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 60
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 60
  }))))
};
const CardWithImageAndText = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(components_Skeleton, args, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column",
    gap: "2"
  }, /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 350,
    height: 200
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 172
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 350
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: 350
  })))
};
const meta = {
  args: {
    preferMotion: false
  },
  title: 'Feedback/Skeleton',
  component: components_Skeleton,
  render: args => /*#__PURE__*/react.createElement(components_Skeleton, args, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "column"
  }, /*#__PURE__*/react.createElement(SkeletonRound/* default */.A, {
    size: 80
  }), /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    width: "500px",
    height: "100px"
  })))
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
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...Sizes.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    width: 'auto'\n  },\n  tags: ['sidebar-ignore'],\n  render: args => <Skeleton {...args}>\n      <StoryStack direction=\"column\">\n        <SkeletonRound size={80} />\n        <SkeletonSquare width=\"500px\" height=\"100px\" />\n      </StoryStack>\n    </Skeleton>\n}",
      ...Sizes.parameters?.docs?.source
    }
  }
};
Card.parameters = {
  ...Card.parameters,
  docs: {
    ...Card.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryStack wrap=\"wrap\" gap=\"2\">\n      {faker.datatype.array(5).map(key => <Skeleton {...args} key={key}>\n          <StoryStack direction=\"column\" gap=\"1\" borderWidth=\"sm\" borderRadius=\"sm\">\n            <SkeletonSquare width=\"350px\" height=\"270px\" />\n            <StoryStack direction=\"column\" gap=\"2\" padding=\"3\">\n              <StoryStack alignItems=\"center\" gap=\"2\">\n                <SkeletonRound />\n                <StoryStack direction=\"column\" gap=\"2\">\n                  <SkeletonSquare width=\"160px\" />\n                  <SkeletonSquare width=\"170px\" />\n                </StoryStack>\n              </StoryStack>\n              <SkeletonSquare width=\"320px\" />\n              <SkeletonSquare width=\"200px\" />\n              <SkeletonSquare width=\"100px\" />\n              <StoryStack justifyContent=\"spaceBetween\" paddingY=\"2\" gap=\"0.5\">\n                <SkeletonSquare height=\"24px\" width=\"50px\" />\n                <SkeletonSquare height=\"24px\" width=\"120px\" />\n              </StoryStack>\n            </StoryStack>\n          </StoryStack>\n        </Skeleton>)}\n    </StoryStack>\n}",
      ...Card.parameters?.docs?.source
    }
  }
};
WithAvatarAndHeadlineAndParagraph.parameters = {
  ...WithAvatarAndHeadlineAndParagraph.parameters,
  docs: {
    ...WithAvatarAndHeadlineAndParagraph.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Skeleton {...args}>\n      <StoryStack>\n        <SkeletonRound />\n        <StoryStack direction=\"column\" gap=\"2\">\n          <SkeletonSquare width={210} />\n          <SkeletonSquare width={440} />\n          <SkeletonSquare width={440} />\n          <SkeletonSquare width={440} />\n          <SkeletonSquare width={440} />\n        </StoryStack>\n      </StoryStack>\n    </Skeleton>\n}",
      ...WithAvatarAndHeadlineAndParagraph.parameters?.docs?.source
    }
  }
};
WithAvatarAndParagraphAndActions.parameters = {
  ...WithAvatarAndParagraphAndActions.parameters,
  docs: {
    ...WithAvatarAndParagraphAndActions.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Skeleton {...args}>\n      <StoryStack gap=\"2\" direction=\"column\">\n        <StoryStack gap=\"2\" alignItems=\"center\">\n          <SkeletonRound />\n          <StoryStack gap=\"2\" direction=\"column\">\n            <SkeletonSquare width=\"88px\" />\n            <SkeletonSquare width=\"144px\" />\n          </StoryStack>\n        </StoryStack>\n        <SkeletonSquare width={550} />\n        <SkeletonSquare width={550} />\n        <SkeletonSquare width={500} />\n        <StoryStack gap=\"2\" paddingTop=\"2\">\n          <SkeletonSquare width={60} />\n          <SkeletonSquare width={60} />\n        </StoryStack>\n      </StoryStack>\n    </Skeleton>\n}",
      ...WithAvatarAndParagraphAndActions.parameters?.docs?.source
    }
  }
};
CardWithImageAndText.parameters = {
  ...CardWithImageAndText.parameters,
  docs: {
    ...CardWithImageAndText.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Skeleton {...args}>\n      <StoryStack direction=\"column\" gap=\"2\">\n        <SkeletonSquare width={350} height={200} />\n        <SkeletonSquare width={172} />\n        <SkeletonSquare width={350} />\n        <SkeletonSquare width={350} />\n      </StoryStack>\n    </Skeleton>\n}",
      ...CardWithImageAndText.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Sizes","Card","WithAvatarAndHeadlineAndParagraph","WithAvatarAndParagraphAndActions","CardWithImageAndText"];

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

/***/ "../layout_components/dist/esm/src/components/Layout/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utilityClasses.ve.css.js + 1 modules
var utilityClasses_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/utilityClasses.ve.css.js");
;// ../layout_components/dist/esm/src/components/Layout/constants.js

const CENTERED = {
  paddingX: {
    default: '6',
    md: '8'
  },
  paddingTop: {
    default: '6',
    md: '8'
  },
  paddingBottom: {
    default: '12',
    md: '16'
  },
  maxWidth: {
    default: '1400px'
  },
  width: {
    default: '100%'
  },
  margin: {
    default: 'autoX'
  },
  className: utilityClasses_ve_css/* paddingX_0_xxl */.O
};
;// ../layout_components/dist/esm/src/components/Layout/index.js
const _excluded = ["children", "centered", "borderStyle", "borderColor", "className"],
  _excluded2 = ["className"];
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




const Layout = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      centered,
      borderStyle,
      borderColor,
      className: customClassName
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const centeredStyles = centered ? CENTERED : {};
  const {
    borderLeftWidth,
    borderTopWidth,
    borderBottomWidth,
    borderRightWidth,
    borderWidth
  } = restProps;
  const {
      className
    } = centeredStyles,
    stylingProps = _objectWithoutProperties(centeredStyles, _excluded2);
  const borderStylingReset = borderLeftWidth || borderTopWidth || borderBottomWidth || borderRightWidth || borderWidth ? {
    borderStyle: borderStyle || 'solid',
    borderColor: borderColor || 'border'
  } : undefined;
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread(_objectSpread(_objectSpread({
    ref: ref
  }, stylingProps), borderStylingReset), {}, {
    boxSizing: "borderBox",
    className: classnames_default()(className, customClassName)
  }, restProps), children);
});
Layout.displayName = 'Layout';
/* harmony default export */ const components_Layout = (Layout);
;
Layout.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Layout"
};

/***/ }),

/***/ "../storybook_helpers/dist/esm/src/components/StoryStack/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


const StoryStack = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    display: "flex",
    gap: "4"
  }, props), children);
});
StoryStack.displayName = 'StoryStack';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryStack);
;
StoryStack.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StoryStack"
};

/***/ }),

/***/ "../theme/dist/esm/src/atoms/utilityClasses.ve.css.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ paddingX_0_xxl),
  q: () => (/* binding */ placeholder)
});

// EXTERNAL MODULE: ../theme/dist/esm/theme/dist/esm/src/theme.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../theme/dist/esm/src/theme.ve.css.js.vanilla.css","source":"#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"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
var extracted = __webpack_require__("../theme/dist/esm/theme/dist/esm/src/theme.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"../theme/dist/esm/src/theme.ve.css.js.vanilla.css\",\"source\":\"#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\"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js");
;// ../theme/dist/esm/src/theme/dist/esm/src/atoms/utilityClasses.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../theme/dist/esm/src/atoms/utilityClasses.ve.css.js.vanilla.css","source":"Ll8xb2dnNWRwMTo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1ocGthemYxdik7CiAgdGV4dC1vdmVyZmxvdzogdmFyKC0taHBrYXpmN2QpOwogIGZvbnQtc2l6ZTogdmFyKC0taHBrYXpmOGUpOwogIGxpbmUtaGVpZ2h0OiB2YXIoLS1ocGthemY4dyk7CiAgZm9udC1mYW1pbHk6IHZhcigtLWhwa2F6ZjRoKTsKfQpAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzYwcHgpIHsKICBib2R5IC5fMW9nZzVkcDAgewogICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1ocGthemY0dCk7CiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1ocGthemY0dCk7CiAgfQp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const webpack_plugin_extracted = ({});
;// ../theme/dist/esm/src/atoms/utilityClasses.ve.css.js


var paddingX_0_xxl = '_1ogg5dp0';
var placeholder = '_1ogg5dp1';

/***/ }),

/***/ "../transition/dist/esm/src/components/Wipe/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Wipe)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../transition/dist/esm/src/components/Wipe/constants.js
const DURATION = {
  fast: '1s',
  moderate: '1.5s',
  slow: '2s'
};
const DELAY = {
  fast: '250ms',
  moderate: '500ms',
  slow: '750ms'
};
;// ../transition/dist/esm/src/components/transition/dist/esm/src/components/Wipe/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../transition/dist/esm/src/components/Wipe/styles.ve.css.js.vanilla.css","source":"QGtleWZyYW1lcyBpeXNhdm4wIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNrZXcoMTU1ZGVnKTsKICB9CiAgMTAwJSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgc2tldygxNTVkZWcpOwogIH0KfQouaXlzYXZuMSB7CiAgYW5pbWF0aW9uOiBpeXNhdm4wIGVhc2UtaW4tb3V0IGluZmluaXRlOzsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../transition/dist/esm/src/components/Wipe/styles.ve.css.js

var wipeAnimation = 'iysavn1';
;// ../transition/dist/esm/src/components/Wipe/index.js




const WIPE_COLOR = 'rgba(255, 255, 255, 0.3)';
const Wipe = _ref => {
  let {
    animationDuration = 'moderate',
    animationDelay = 'moderate',
    dataTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    className: wipeAnimation,
    style: {
      animationDelay: DELAY[animationDelay],
      animationDuration: DURATION[animationDuration]
    },
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    margin: "autoY",
    background: "linear-gradient(85deg, transparent 25%, ".concat(WIPE_COLOR, " 50%, ").concat(WIPE_COLOR, " 55%, transparent 75%)"),
    "data-testid": dataTestId
  });
};
Wipe.displayName = 'Wipe';
/* harmony default export */ const components_Wipe = (Wipe);
;
Wipe.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Wipe"
};

/***/ })

}]);
//# sourceMappingURL=4975.80705559.iframe.bundle.js.map