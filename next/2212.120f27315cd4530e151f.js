"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[2212],{

/***/ 2212:
/***/ ((module) => {

module.exports = "import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiDurationOptions, tuiFadeIn} from '@taiga-ui/core';\nimport {from, of} from 'rxjs';\nimport {concatMap, delay, repeat, startWith} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-fade-in-example`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    animations: [tuiFadeIn],\n})\nexport class TuiFadeInExample {\n    @Input()\n    speed = 0;\n\n    isShown$ = from([false, true]).pipe(\n        concatMap(val => of(val).pipe(delay(1.5 * this.speed))),\n        repeat(),\n        startWith(true),\n    );\n\n    @tuiPure\n    getAnimation(duration: number): TuiDurationOptions {\n        return {value: ``, params: {duration}};\n    }\n}\n";

/***/ })

}]);