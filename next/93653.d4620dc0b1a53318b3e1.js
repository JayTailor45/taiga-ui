"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[93653],{

/***/ 93653:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-select-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample3 {\n    readonly items = [`https://twitter.com/marsibarsi`, `https://twitter.com/waterplea`];\n\n    readonly testForm = new FormGroup({\n        email: new FormControl(null),\n        signature: new FormControl(``),\n    });\n\n    signatureVisible = false;\n\n    toggle(): void {\n        this.signatureVisible = !this.signatureVisible;\n    }\n}\n";

/***/ })

}]);