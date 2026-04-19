"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,378,1077,1923,1972,2278,2937,3572,3594,3601,3666,4367,4686,4836,5502,5587,6151,6385,6647,7394,7770,8124,8135,8640,8815,9102,9610,9630,9655],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "../disclosure/src/components/Collapsible/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComplexHeader: () => (/* binding */ ComplexHeader),
/* harmony export */   Controlled: () => (/* binding */ Controlled),
/* harmony export */   CustomColor: () => (/* binding */ CustomColor),
/* harmony export */   DefaultExpanded: () => (/* binding */ DefaultExpanded),
/* harmony export */   Disabled: () => (/* binding */ Disabled),
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   WithHeaderEllipsis: () => (/* binding */ WithHeaderEllipsis),
/* harmony export */   WithMenuHeader: () => (/* binding */ WithMenuHeader),
/* harmony export */   WithMenuHeaderLeanChevron: () => (/* binding */ WithMenuHeaderLeanChevron),
/* harmony export */   WithToggleCallback: () => (/* binding */ WithToggleCallback),
/* harmony export */   WithoutChevron: () => (/* binding */ WithoutChevron),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Heart.js");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownAnchor/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownContent/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../disclosure/src/components/Collapsible/index.tsx");
/* harmony import */ var _CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeader/index.tsx");
/* harmony import */ var _CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleContent/index.tsx");
/* harmony import */ var _CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeaderChevron/index.tsx");
/* harmony import */ var _CollapsibleHeaderMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeaderMenu/index.tsx");
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
const longText = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.paragraph(10);
const title = 'This is a Collapsible';
const longTitle = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.sentences(5);
const Primary = {
  tags: ['sidebar-ignore']
};
const WithToggleCallback = {
  tags: ['sidebar-ignore'],
  args: {
    onToggle: toggled => alert(toggled)
  }
};
const Controlled = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [expanded, setExpanded] = useState(true);\n\n  return (\n    <Collapsible onToggle={setExpanded} expanded={expanded}>\n      <CollapsibleHeader>{title}</CollapsibleHeader>\n      <CollapsibleContent>{longText}</CollapsibleContent>\n    </Collapsible>\n  );"
      }
    }
  },
  args: {
    onToggle: toggled => alert(toggled)
  },
  render: args => {
    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, _extends({}, args, {
      onToggle: setExpanded,
      expanded: expanded
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, title, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText));
  }
};
const DefaultExpanded = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: "The collapsible content height calculation is supported only on client side since it has to calculate the height of the inner element.\n Due to it, when using defaultExpanded=true above the fold, might be layout shift between client and server rendering."
      }
    }
  },
  args: {
    defaultExpanded: true
  }
};
const ComplexHeader = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    alignItems: "center"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText))
};
const Disabled = {
  tags: ['sidebar-ignore'],
  args: {
    disabled: true
  }
};
const WithoutChevron = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText))
};
const CustomColor = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    color: "green_700"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    color: "green_700"
  }, longText)))
};
const WithMenuHeader = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    height: "150px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderMenu__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    shape: "circle",
    variant: "ghost",
    size: "xs",
    "aria-label": ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 3")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText)))
};
const WithMenuHeaderLeanChevron = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    height: "150px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    gap: "2",
    as: "span"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    variant: "lean"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderMenu__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    shape: "circle",
    variant: "ghost",
    size: "xs",
    "aria-label": ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 3")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText)))
};
const WithHeaderEllipsis = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, _extends({}, args, {
    overflow: "hidden"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    textProps: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, longTitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText)))
};
const meta = {
  title: 'Disclosure/Collapsible',
  component: ___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText))
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
WithToggleCallback.parameters = {
  ...WithToggleCallback.parameters,
  docs: {
    ...WithToggleCallback.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    onToggle: toggled => alert(toggled)\n  }\n}",
      ...WithToggleCallback.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [expanded, setExpanded] = useState(true);\n\n  return (\n    <Collapsible onToggle={setExpanded} expanded={expanded}>\n      <CollapsibleHeader>{title}</CollapsibleHeader>\n      <CollapsibleContent>{longText}</CollapsibleContent>\n    </Collapsible>\n  );`\n      }\n    }\n  },\n  args: {\n    onToggle: toggled => alert(toggled)\n  },\n  render: args => {\n    const [expanded, setExpanded] = useState(true);\n    return <Collapsible {...args} onToggle={setExpanded} expanded={expanded}>\n        <CollapsibleHeader>\n          {title} <CollapsibleHeaderChevron />\n        </CollapsibleHeader>\n        <CollapsibleContent>{longText}</CollapsibleContent>\n      </Collapsible>;\n  }\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
DefaultExpanded.parameters = {
  ...DefaultExpanded.parameters,
  docs: {
    ...DefaultExpanded.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: `The collapsible content height calculation is supported only on client side since it has to calculate the height of the inner element.\n Due to it, when using defaultExpanded=true above the fold, might be layout shift between client and server rendering.`\n      }\n    }\n  },\n  args: {\n    defaultExpanded: true\n  }\n}",
      ...DefaultExpanded.parameters?.docs?.source
    }
  }
};
ComplexHeader.parameters = {
  ...ComplexHeader.parameters,
  docs: {
    ...ComplexHeader.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Collapsible {...args}>\n      <CollapsibleHeader>\n        <StoryStack alignItems=\"center\">\n          {title}\n          <HeartIcon />\n        </StoryStack>\n        <CollapsibleHeaderChevron />\n      </CollapsibleHeader>\n      <CollapsibleContent>{longText}</CollapsibleContent>\n    </Collapsible>\n}",
      ...ComplexHeader.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    disabled: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
WithoutChevron.parameters = {
  ...WithoutChevron.parameters,
  docs: {
    ...WithoutChevron.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Collapsible {...args}>\n      <CollapsibleHeader>{title}</CollapsibleHeader>\n      <CollapsibleContent>{longText}</CollapsibleContent>\n    </Collapsible>\n}",
      ...WithoutChevron.parameters?.docs?.source
    }
  }
};
CustomColor.parameters = {
  ...CustomColor.parameters,
  docs: {
    ...CustomColor.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Collapsible {...args}>\n      <CollapsibleHeader color=\"green_700\">\n        {title}\n        <CollapsibleHeaderChevron />\n      </CollapsibleHeader>\n      <CollapsibleContent>\n        <StoryStack color=\"green_700\">{longText}</StoryStack>\n      </CollapsibleContent>\n    </Collapsible>\n}",
      ...CustomColor.parameters?.docs?.source
    }
  }
};
WithMenuHeader.parameters = {
  ...WithMenuHeader.parameters,
  docs: {
    ...WithMenuHeader.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryStack height=\"150px\">\n      <Collapsible {...args}>\n        <CollapsibleHeader>\n          {title}\n          <CollapsibleHeaderChevron />\n          <CollapsibleHeaderMenu>\n            <Dropdown>\n              <DropdownAnchor>\n                <IconButton shape=\"circle\" variant=\"ghost\" size=\"xs\" aria-label=\"\">\n                  <EllipsisIcon />\n                </IconButton>\n              </DropdownAnchor>\n              <DropdownContent>\n                <DropdownMenu>\n                  <MenuItem>Item 1</MenuItem>\n                  <MenuItem>Item 2</MenuItem>\n                  <MenuItem>Item 3</MenuItem>\n                </DropdownMenu>\n              </DropdownContent>\n            </Dropdown>\n          </CollapsibleHeaderMenu>\n        </CollapsibleHeader>\n        <CollapsibleContent>{longText}</CollapsibleContent>\n      </Collapsible>\n    </StoryStack>\n}",
      ...WithMenuHeader.parameters?.docs?.source
    }
  }
};
WithMenuHeaderLeanChevron.parameters = {
  ...WithMenuHeaderLeanChevron.parameters,
  docs: {
    ...WithMenuHeaderLeanChevron.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryStack height=\"150px\">\n      <Collapsible {...args}>\n        <CollapsibleHeader>\n          <Stack gap=\"2\" as=\"span\">\n            {title}\n            <CollapsibleHeaderChevron variant=\"lean\" />\n          </Stack>\n          <CollapsibleHeaderMenu>\n            <Dropdown>\n              <DropdownAnchor>\n                <IconButton shape=\"circle\" variant=\"ghost\" size=\"xs\" aria-label=\"\">\n                  <EllipsisIcon />\n                </IconButton>\n              </DropdownAnchor>\n              <DropdownContent>\n                <DropdownMenu>\n                  <MenuItem>Item 1</MenuItem>\n                  <MenuItem>Item 2</MenuItem>\n                  <MenuItem>Item 3</MenuItem>\n                </DropdownMenu>\n              </DropdownContent>\n            </Dropdown>\n          </CollapsibleHeaderMenu>\n        </CollapsibleHeader>\n        <CollapsibleContent>{longText}</CollapsibleContent>\n      </Collapsible>\n    </StoryStack>\n}",
      ...WithMenuHeaderLeanChevron.parameters?.docs?.source
    }
  }
};
WithHeaderEllipsis.parameters = {
  ...WithHeaderEllipsis.parameters,
  docs: {
    ...WithHeaderEllipsis.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryStack>\n      <Collapsible {...args} overflow=\"hidden\">\n        <CollapsibleHeader textProps={{\n        textOverflow: 'ellipsis',\n        whiteSpace: 'nowrap',\n        overflow: 'hidden'\n      }}>\n          {longTitle}\n          <CollapsibleHeaderChevron />\n        </CollapsibleHeader>\n        <CollapsibleContent>{longText}</CollapsibleContent>\n      </Collapsible>\n    </StoryStack>\n}",
      ...WithHeaderEllipsis.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","WithToggleCallback","Controlled","DefaultExpanded","ComplexHeader","Disabled","WithoutChevron","CustomColor","WithMenuHeader","WithMenuHeaderLeanChevron","WithHeaderEllipsis"];

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

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Heart.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const HeartIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('HeartIcon')
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
    d: "m13.628 8.433-5.622 5.568-5.622-5.568a3.748 3.748 0 1 1 5.622-4.922 3.748 3.748 0 1 1 5.622 4.927",
    vectorEffect: "non-scaling-stroke"
  }));
};
HeartIcon.id = 'HeartIcon';
HeartIcon.displayName = 'HeartIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartIcon);
;
HeartIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeartIcon"
};

/***/ })

}]);
//# sourceMappingURL=components-Collapsible-stories-index-stories.ac0965e7.iframe.bundle.js.map