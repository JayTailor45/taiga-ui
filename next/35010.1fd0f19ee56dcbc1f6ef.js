"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[35010],{

/***/ 35010:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {TuiAlertOptions} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-notifications-service-example`,\n    templateUrl: `./alert-example.template.html`,\n    changeDetection,\n})\nexport class AlertExampleComponent {\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        private readonly context: TuiDialog<TuiAlertOptions<void>, boolean>,\n    ) {}\n\n    ok(): void {\n        this.context.completeWith(true);\n    }\n\n    cancel(): void {\n        this.context.completeWith(false);\n    }\n}\n";

/***/ })

}]);