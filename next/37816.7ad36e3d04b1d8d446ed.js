"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[37816],{

/***/ 37816:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiCeil} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-bar-chart-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBarChartExample1 {\n    readonly value = [\n        [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],\n        [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],\n    ];\n\n    readonly labelsX = [`Jan 2019`, `Feb`, `Mar`];\n    readonly labelsY = [`0`, `10 000`];\n\n    getHeight(max: number): number {\n        return (max / tuiCeil(max, -3)) * 100;\n    }\n}\n";

/***/ })

}]);