"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[60252],{

/***/ 60252:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPaymentSystem} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-card-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCardExample3 {\n    readonly paymentSystem: TuiPaymentSystem = `mir`;\n    readonly brandLogo = `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`;\n}\n";

/***/ })

}]);