"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[87660],{

/***/ 87660:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-input-date-range-example-3`,\n    templateUrl: `./index.html`,\n    providers: [\n        {provide: TUI_DATE_FORMAT, useValue: `YMD`},\n        {provide: TUI_DATE_SEPARATOR, useValue: `/`},\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateRangeExample3 {\n    readonly control = new FormControl(\n        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),\n    );\n}\n";

/***/ })

}]);