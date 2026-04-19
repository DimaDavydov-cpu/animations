"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,1077,1923,2278,2777,2937,3594,3601,3666,4367,5502,6151,7394,7770,8124,8135,8815,9416,9610,9630],{

/***/ "../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* unused harmony exports MDXContext, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return React.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__("../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js");var f=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else // removed by dead control flow
{}


/***/ }),

/***/ "../inputs/src/components/Textarea/stories/Docs.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/Links/index.js");
/* harmony import */ var _index_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../inputs/src/components/Textarea/stories/index.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/






function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    a: "a",
    code: "code",
    pre: "pre",
    h2: "h2",
    h3: "h3"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_5__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
          children: "Textarea is a form component used for allowing users to write multi line text."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
          children: ["This component extends the \"vanilla\" ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",
            target: "_blank",
            rel: "nofollow noopener noreferrer",
            children: "textarea\nbehaviour"
          }), ". - This component extends the \"React\"\nbehaviour of textarea (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "value"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "defaultValue"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "onChange"
          }), ", etc.)."]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        github: "https://github.com/fiverr/penta_sphinx/edit/master/packages/inputs/src/components/Textarea",
        figma: "https://www.figma.com/design/UQeVBGciowhLzUbsbhZ9rlpd/%E2%9C%B3%EF%B8%8F-Penta-UI---Core?node-id=33689-101464"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Textarea } from '@fiverr-private/forms';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Primary */ .Tn, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Controls */ .H2, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Stories */ .om, {
      includePrimary: false
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "changes-compared-to-fit-textarea",
      children: "Changes compared to Fit Textarea"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Container above the textarea has been removed, should be wrapped with container to control the dimensions"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Default height is two rows (default of native textarea)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Handling content exceeding max length state"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Counter moved to be outside the textarea"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ }),

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

/***/ "../storybook_helpers/dist/esm/src/components/Links/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");


const GithubIcon = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: "25",
  height: "24",
  viewBox: "0 0 25 24",
  fill: "#74767E",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0.300049C5.4 0.300049 0 5.70005 0 12.3C0 17.55 3.45 22.05 8.25 23.7C8.85 23.85 9 23.4 9 23.1C9 22.8 9 22.05 9 21C5.7 21.75 4.95 19.5 4.95 19.5C4.35 18.15 3.6 17.7 3.6 17.7C2.55 16.95 3.75 16.95 3.75 16.95C4.95 17.1 5.55 18.15 5.55 18.15C6.6 20.1 8.4 19.5 9 19.2C9.15 18.45 9.45 17.85 9.75 17.55C7.05 17.25 4.35 16.2 4.35 11.55C4.35 10.2 4.8 9.15005 5.55 8.40005C5.4 8.10005 4.95 6.90005 5.7 5.25005C5.7 5.25005 6.75 4.95005 9 6.45005C9.9 6.15005 10.95 6.00005 12 6.00005C13.05 6.00005 14.1 6.15005 15 6.45005C17.25 4.95005 18.3 5.25005 18.3 5.25005C18.9 6.90005 18.6 8.10005 18.45 8.40005C19.2 9.30005 19.65 10.35 19.65 11.55C19.65 16.2 16.8 17.1 14.1 17.4C14.55 18 15 18.75 15 19.8C15 21.45 15 22.65 15 23.1C15 23.4 15.15 23.85 15.9 23.7C20.7 22.05 24.15 17.55 24.15 12.3C24 5.70005 18.6 0.300049 12 0.300049Z"
}));
const Links = _ref => {
  let {
    github = '',
    figma = ''
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    display: "flex",
    gap: "4",
    paddingY: "4"
  }, github && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "a",
    color: "bodyPrimary",
    decoration: "underline",
    href: github,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GithubIcon, null)), figma && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "a",
    href: figma,
    decoration: "underline",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "img",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzy7QINyg0zdqqdYuo_oKdUGCahRppOizZalu1rGyIg&s",
    height: 24,
    width: 24
  })));
};
Links.displayName = 'Links';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Links);
;
Links.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Links"
};

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
//# sourceMappingURL=components-Textarea-stories-Docs-mdx.8092658a.iframe.bundle.js.map