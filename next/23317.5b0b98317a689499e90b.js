"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[23317],{

/***/ 23317:
/***/ ((module) => {

module.exports = "import {Component, ViewEncapsulation} from '@angular/core';\nimport {TUI_TEXTFIELD_APPEARANCE, tuiCheckboxOptionsProvider} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-wrapper-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    encapsulation: ViewEncapsulation.None,\n    providers: [\n        {\n            provide: TUI_TEXTFIELD_APPEARANCE,\n            useValue: `material-textfield`,\n        },\n        tuiCheckboxOptionsProvider({\n            appearances: {\n                unchecked: `material-checkbox-off`,\n                checked: `material-checkbox-on`,\n                indeterminate: `material-checkbox-on`,\n            },\n        }),\n    ],\n})\nexport class TuiWrapperExample1 {\n    value = ``;\n    checkbox = false;\n}\n";

/***/ })

}]);