"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[3467],{

/***/ 3467:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiTablePaginationOptions,\n    tuiTablePaginationOptionsProvider,\n} from '@taiga-ui/addon-table';\n\nconst customOptionContent: TuiTablePaginationOptions['sizeOptionContent'] = ({\n    $implicit,\n    total,\n}) => {\n    switch ($implicit) {\n        case 10:\n            return `Ten`;\n        case total:\n            return `Show all rows`;\n        default:\n            return $implicit;\n    }\n};\n\n@Component({\n    selector: `tui-table-pagination-example-2`,\n    templateUrl: `./index.html`,\n    providers: [\n        tuiTablePaginationOptionsProvider({sizeOptionContent: customOptionContent}),\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTablePaginationExample2 {\n    total = 350;\n    sizeOptions = [10, 50, 100, this.total];\n}\n";

/***/ })

}]);