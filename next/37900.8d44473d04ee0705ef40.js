"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[37900],{

/***/ 37900:
/***/ ((module) => {

module.exports = "import {Injectable} from '@angular/core';\nimport {TuiFormatDateService} from '@taiga-ui/core';\nimport formatDistance from 'date-fns/formatDistance';\nimport {Observable, timer} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n@Injectable()\nexport class FormatService extends TuiFormatDateService {\n    override format(timestamp: number): Observable<string> {\n        return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));\n    }\n}\n";

/***/ })

}]);