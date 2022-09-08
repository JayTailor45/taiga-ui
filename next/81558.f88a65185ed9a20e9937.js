"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[81558],{

/***/ 81558:
/***/ ((module) => {

module.exports = "@import 'taiga-ui-local';\n\n.wrapper {\n    display: grid;\n    width: 100%;\n    gap: 1px;\n    grid-template-columns: repeat(3, 1fr);\n    margin: auto;\n    font: var(--tui-font-text-xs);\n\n    @media @tui-desktop-min {\n        font: var(--tui-font-text-s);\n        width: 500px;\n    }\n}\n\n.item {\n    height: 100px;\n    background: var(--tui-neutral-bg);\n    color: var(--tui-text-01);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n@breakpoints: tui-mobile, tui-mobile-min, tui-mobile-interval, tui-tablet, tui-tablet-min, tui-tablet-interval,\n    tui-desktop, tui-desktop-min, tui-desktop-interval, tui-desktop-lg-min;\n\neach(@breakpoints, {\n    .@{value} {\n        @media @@value {\n            background: var(--tui-primary);\n            color: var(--tui-primary-text);\n        }\n    }\n});\n\n.tui-desktop-lg-min {\n    grid-column: span 3;\n}\n";

/***/ })

}]);