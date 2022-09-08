"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[61363],{

/***/ 61363:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCountryIsoCode} from '@taiga-ui/i18n';\n\n@Component({\n    selector: `tui-input-phone-international-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(`+77777777777`, Validators.required),\n    });\n\n    readonly countries: readonly TuiCountryIsoCode[] = [\n        TuiCountryIsoCode.RU,\n        TuiCountryIsoCode.KZ,\n        TuiCountryIsoCode.UA,\n        TuiCountryIsoCode.BY,\n    ];\n\n    countryIsoCode = TuiCountryIsoCode.RU;\n\n    contact = {\n        phone: `+375123456789`,\n        phoneCountryCode: TuiCountryIsoCode.BY,\n    };\n\n    patchValue(): void {\n        this.countryIsoCode = this.contact.phoneCountryCode;\n        this.testForm.get(`testValue`)?.patchValue(this.contact.phone);\n    }\n}\n";

/***/ })

}]);