"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[57888],{

/***/ 57888:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit} from '@taiga-ui/cdk';\nimport {tuiFormatNumber} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-bar-chart-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBarChartExample2 {\n    readonly value = [\n        [1000, 8000, 4000, 3000, 4000],\n        [6000, 2000, 4500, 7000, 5000],\n    ];\n\n    readonly labelsX = [`Jan 2021`, `Feb`, `Mar`];\n    readonly labelsY = [`0`, `10 000`];\n\n    readonly hint = ({$implicit}: TuiContextWithImplicit<number>): string =>\n        this.value\n            .reduce((result, set) => `${result}$${tuiFormatNumber(set[$implicit])}\\n`, ``)\n            .trim();\n}\n";

/***/ })

}]);