"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[42565],{

/***/ 42565:
/***/ ((module) => {

module.exports = "@import 'taiga-ui-local';\n\n@border-radius: 1rem;\n\n.zoom-controller {\n    border-radius: @border-radius;\n    background: var(--tui-base-05);\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 18rem;\n    column-gap: 0.5rem;\n\n    @media @tui-mobile {\n        max-width: 100%;\n    }\n}\n\n.slider-wrapper {\n    flex: 1;\n}\n\n.minus {\n    border-radius: @border-radius 0 0 @border-radius;\n}\n\n.plus {\n    border-radius: 0 @border-radius @border-radius 0;\n}\n";

/***/ })

}]);