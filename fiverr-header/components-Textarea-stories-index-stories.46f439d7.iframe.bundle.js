"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,1077,1923,2278,2777,2937,3594,3601,3666,4367,5502,6151,7394,7770,8124,8135,8815,9610,9630],{

/***/ "../inputs/src/components/Textarea/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controlled: () => (/* binding */ Controlled),
/* harmony export */   Disabled: () => (/* binding */ Disabled),
/* harmony export */   Error: () => (/* binding */ Error),
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   Resize: () => (/* binding */ Resize),
/* harmony export */   Rows: () => (/* binding */ Rows),
/* harmony export */   Success: () => (/* binding */ Success),
/* harmony export */   WithRef: () => (/* binding */ WithRef),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../inputs/src/components/Textarea/index.tsx");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}





_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.seed(1);
const Primary = {
  tags: ['sidebar-ignore']
};
const Controlled = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [value, setValue] = useState<string>(faker.lorem.sentence());\n\nuseEffect(() => {\n  setInterval(() => {\n    const isEmpty = faker.datatype.boolean();\n    setValue(isEmpty ? '' : faker.lorem.sentence());\n  }, 1000);\n}, []);\n\nreturn <Textarea showCounter value={value} />;"
      }
    }
  },
  render: args => {
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.sentence());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      setInterval(() => {
        const isEmpty = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.datatype.boolean();
        setValue(isEmpty ? '' : _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.sentence());
      }, 1000);
    }, []);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, _extends({}, args, {
      value: value
    }));
  }
};
const WithRef = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const ref = createRef<HTMLTextAreaElement>();\n\nreturn (\n  <StoryStack direction=\"column\">\n    <Textarea ref={ref} />\n    <Button onClick={() => ref?.current?.focus()}>Focus Me!</Button>\n  </StoryStack>\n);"
      }
    }
  },
  render: args => {
    const ref = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      direction: "column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, _extends({}, args, {
      ref: ref
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      onClick: () => {
        var _ref$current;
        return ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
      }
    }, "Focus Me!"));
  }
};
const Disabled = {
  tags: ['sidebar-ignore'],
  args: {
    disabled: true,
    children: 'Oh No'
  }
};
const Rows = {
  tags: ['sidebar-ignore'],
  args: {
    rows: 5,
    children: 'I have 5 rows'
  }
};
const Resize = {
  tags: ['sidebar-ignore'],
  args: {
    resize: true,
    children: "I'm supporting resize"
  }
};
const Success = {
  tags: ['sidebar-ignore'],
  args: {
    isSuccess: true
  }
};
const Error = {
  tags: ['sidebar-ignore'],
  args: {
    isError: true
  }
};
const meta = {
  args: {
    children: 'In my eyes, indisposed; In disguises no one knows'
  },
  title: 'Forms/Textarea',
  component: ___WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A
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
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [value, setValue] = useState<string>(faker.lorem.sentence());\n\nuseEffect(() => {\n  setInterval(() => {\n    const isEmpty = faker.datatype.boolean();\n    setValue(isEmpty ? '' : faker.lorem.sentence());\n  }, 1000);\n}, []);\n\nreturn <Textarea showCounter value={value} />;`\n      }\n    }\n  },\n  render: args => {\n    const [value, setValue] = useState<string>(faker.lorem.sentence());\n    useEffect(() => {\n      setInterval(() => {\n        const isEmpty = faker.datatype.boolean();\n        setValue(isEmpty ? '' : faker.lorem.sentence());\n      }, 1000);\n    }, []);\n    return <Textarea {...args} value={value} />;\n  }\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
WithRef.parameters = {
  ...WithRef.parameters,
  docs: {
    ...WithRef.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const ref = createRef<HTMLTextAreaElement>();\n\nreturn (\n  <StoryStack direction=\"column\">\n    <Textarea ref={ref} />\n    <Button onClick={() => ref?.current?.focus()}>Focus Me!</Button>\n  </StoryStack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const ref = createRef<HTMLTextAreaElement>();\n    return <StoryStack direction=\"column\">\n        <Textarea {...args} ref={ref} />\n        <Button onClick={() => ref?.current?.focus()}>Focus Me!</Button>\n      </StoryStack>;\n  }\n}",
      ...WithRef.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    disabled: true,\n    children: 'Oh No'\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
Rows.parameters = {
  ...Rows.parameters,
  docs: {
    ...Rows.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    rows: 5,\n    children: 'I have 5 rows'\n  }\n}",
      ...Rows.parameters?.docs?.source
    }
  }
};
Resize.parameters = {
  ...Resize.parameters,
  docs: {
    ...Resize.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    resize: true,\n    children: \"I'm supporting resize\"\n  }\n}",
      ...Resize.parameters?.docs?.source
    }
  }
};
Success.parameters = {
  ...Success.parameters,
  docs: {
    ...Success.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    isSuccess: true\n  }\n}",
      ...Success.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    isError: true\n  }\n}",
      ...Error.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Controlled","WithRef","Disabled","Rows","Resize","Success","Error"];

/***/ }),

/***/ "../storybook_helpers/dist/esm/src/components/StoryStack/index.js":
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

/***/ })

}]);
//# sourceMappingURL=components-Textarea-stories-index-stories.46f439d7.iframe.bundle.js.map