"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[90817],{

/***/ 90817:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {WINDOW} from '@ng-web-apis/common';\n\n@Component({\n    selector: `tui-line-clamp-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineClampExample3 {\n    constructor(@Inject(WINDOW) private readonly windowRef: Window) {}\n\n    getDynamicLineHeight(element: HTMLDivElement): number {\n        return parseInt(this.windowRef.getComputedStyle(element).lineHeight);\n    }\n\n    getDynamicLineLimit(element: HTMLDivElement): number {\n        return Math.floor(element.offsetHeight / 24);\n    }\n}\n";

/***/ })

}]);