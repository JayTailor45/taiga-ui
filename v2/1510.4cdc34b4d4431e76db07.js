(window.webpackJsonp=window.webpackJsonp||[]).push([[1510],{c09S:function(n,e,t){"use strict";t.r(e),e.default="@import 'taiga-ui-local';\n\n:host {\n    .transition(background);\n    height: var(--tui-height-s);\n    display: flex;\n    align-items: center;\n    padding: 0 0.5rem;\n    border-radius: var(--tui-radius-xs);\n    background: var(--tui-base-01);\n\n    &:before,\n    &:after {\n        content: '';\n        position: absolute;\n        left: -0.75rem;\n        z-index: -1;\n    }\n\n    &:before {\n        width: 1rem;\n        border-bottom: 1px solid var(--tui-base-04);\n    }\n\n    &:after {\n        top: -1rem;\n        bottom: 1rem;\n        border-left: 1px solid var(--tui-base-04);\n    }\n\n    &._expandable {\n        &:hover {\n            cursor: pointer;\n            background: var(--tui-base-02);\n        }\n    }\n}\n\n:host-context(tui-tree:last-child > tui-tree-item > [polymorpheus-outlet]) {\n    position: relative;\n}\n\ntui-svg {\n    position: relative;\n    background: inherit;\n    z-index: 1;\n}\n"}}]);