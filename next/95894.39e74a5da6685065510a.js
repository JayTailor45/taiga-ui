"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[95894],{

/***/ 95894:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-phone-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample1 {\n    testForm = new FormGroup({\n        testValue: new FormControl(`+77777777777`, Validators.required),\n    });\n\n    setValue(): void {\n        this.testForm.get(`testValue`)!.setValue(`+79926775676`);\n    }\n}\n";

/***/ })

}]);