(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[6530],{

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

/***/ "../rich_text/src/components/RichTextViewer/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ClearBlockFormatters: () => (/* binding */ ClearBlockFormatters),
  ClearTextFormatters: () => (/* binding */ ClearTextFormatters),
  EllipsisLines: () => (/* binding */ EllipsisLines),
  Primary: () => (/* binding */ Primary),
  TextSize: () => (/* binding */ TextSize),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/slate-react@0.104.0_react-dom@17.0.2_react@17.0.2__react@17.0.2_slate@0.103.0/node_modules/slate-react/dist/index.es.js + 26 modules
var index_es = __webpack_require__("../../node_modules/.pnpm/slate-react@0.104.0_react-dom@17.0.2_react@17.0.2__react@17.0.2_slate@0.103.0/node_modules/slate-react/dist/index.es.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/slate@0.103.0/node_modules/slate/dist/index.es.js + 1 modules
var dist_index_es = __webpack_require__("../../node_modules/.pnpm/slate@0.103.0/node_modules/slate/dist/index.es.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../rich_text/src/components/utils/MarkdownSlateJsonConverter.ts
var MarkdownSlateJsonConverter = __webpack_require__("../rich_text/src/components/utils/MarkdownSlateJsonConverter.ts");
// EXTERNAL MODULE: ../rich_text/src/components/RichTextElement/index.tsx + 1 modules
var RichTextElement = __webpack_require__("../rich_text/src/components/RichTextElement/index.tsx");
// EXTERNAL MODULE: ../rich_text/src/components/RichTextLeaf/index.tsx
var RichTextLeaf = __webpack_require__("../rich_text/src/components/RichTextLeaf/index.tsx");
;// ../rich_text/src/components/RichTextViewer/index.tsx
const _excluded = ["children"],
  _excluded2 = ["children"];
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







const RichTextViewer = _ref => {
  let {
    value,
    textSize,
    ellipsisLines,
    leafClassName,
    clearBlockFormatters,
    clearTextFormatters,
    dataTrackTag = 'rich_text_viewer',
    dataTrackValue
  } = _ref;
  const editor = (0,react.useMemo)(() => (0,index_es/* withReact */.o$)((0,dist_index_es/* createEditor */.ie)()), []);
  const renderElement = (0,react.useCallback)(_ref2 => {
    let {
        children
      } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded);
    return /*#__PURE__*/react.createElement(RichTextElement/* default */.A, _extends({}, props, {
      clearBlockFormatters: clearBlockFormatters
    }), children);
  }, [clearBlockFormatters]);
  const renderLeaf = (0,react.useCallback)(_ref3 => {
    let {
        children
      } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded2);
    return /*#__PURE__*/react.createElement(RichTextLeaf/* default */.A, _extends({}, props, {
      clearTextFormatters: clearTextFormatters,
      size: textSize,
      className: leafClassName
    }), children);
  }, [textSize, leafClassName, clearTextFormatters]);
  const initialValue = MarkdownSlateJsonConverter/* default */.A.convert(value);
  return /*#__PURE__*/react.createElement(Box/* default */.A, _extends({
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, ellipsisLines ? {
    webkitLineClamp: ellipsisLines,
    display: 'webkitBox',
    webkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'breakAll'
  } : {}), /*#__PURE__*/react.createElement(index_es/* Slate */.A, {
    editor: editor,
    initialValue: initialValue
  }, /*#__PURE__*/react.createElement(index_es/* Editable */.Fo, {
    renderElement: renderElement,
    renderLeaf: renderLeaf,
    readOnly: true
  })));
};
RichTextViewer.displayName = 'RichTextViewer';
/* harmony default export */ const components_RichTextViewer = (RichTextViewer);
try {
    // @ts-ignore
    RichTextViewer.displayName = "RichTextViewer";
    // @ts-ignore
    RichTextViewer.__docgenInfo = { "description": "", "displayName": "RichTextViewer", "props": { "textSize": { "defaultValue": null, "description": "Value of the rich text viewer", "name": "textSize", "required": true, "type": { "name": "any" } }, "value": { "defaultValue": null, "description": "Value of the rich text viewer", "name": "value", "required": true, "type": { "name": "string" } }, "ellipsisLines": { "defaultValue": null, "description": "Amount of lines for ellipsis", "name": "ellipsisLines", "required": false, "type": { "name": "number" } }, "clearBlockFormatters": { "defaultValue": null, "description": "Whether to clear all block formatters (numbered list, unordered list)", "name": "clearBlockFormatters", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "clearTextFormatters": { "defaultValue": null, "description": "Whether to clear text formatters", "name": "clearTextFormatters", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "leafClassName": { "defaultValue": null, "description": "Classname for leaf elements (text elements / links)", "name": "leafClassName", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "rich_text_viewer" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextViewer/index.tsx#RichTextViewer"] = { docgenInfo: RichTextViewer.__docgenInfo, name: "RichTextViewer", path: "../rich_text/src/components/RichTextViewer/index.tsx#RichTextViewer" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../rich_text/src/components/stories/helpers.ts
var helpers = __webpack_require__("../rich_text/src/components/stories/helpers.ts");
;// ../rich_text/src/components/RichTextViewer/stories/index.stories.tsx


const Primary = {
  tags: ['sidebar-ignore']
};
const EllipsisLines = {
  tags: ['sidebar-ignore'],
  args: {
    ellipsisLines: 8
  }
};
const ClearBlockFormatters = {
  tags: ['sidebar-ignore'],
  args: {
    clearBlockFormatters: true
  }
};
const ClearTextFormatters = {
  tags: ['sidebar-ignore'],
  args: {
    clearTextFormatters: true
  }
};
const TextSize = {
  tags: ['sidebar-ignore'],
  args: {
    textSize: 'b_sm'
  }
};
const meta = {
  title: 'Rich Text/RichTextViewer',
  args: {
    value: helpers/* markdownInitialValue */.L
  },
  component: components_RichTextViewer
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
EllipsisLines.parameters = {
  ...EllipsisLines.parameters,
  docs: {
    ...EllipsisLines.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    ellipsisLines: 8\n  }\n}",
      ...EllipsisLines.parameters?.docs?.source
    }
  }
};
ClearBlockFormatters.parameters = {
  ...ClearBlockFormatters.parameters,
  docs: {
    ...ClearBlockFormatters.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    clearBlockFormatters: true\n  }\n}",
      ...ClearBlockFormatters.parameters?.docs?.source
    }
  }
};
ClearTextFormatters.parameters = {
  ...ClearTextFormatters.parameters,
  docs: {
    ...ClearTextFormatters.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    clearTextFormatters: true\n  }\n}",
      ...ClearTextFormatters.parameters?.docs?.source
    }
  }
};
TextSize.parameters = {
  ...TextSize.parameters,
  docs: {
    ...TextSize.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    textSize: 'b_sm'\n  }\n}",
      ...TextSize.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","EllipsisLines","ClearBlockFormatters","ClearTextFormatters","TextSize"];

/***/ })

}]);
//# sourceMappingURL=6530.a01df77e.iframe.bundle.js.map