"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[89081],{

/***/ 89081:
/***/ ((module) => {

module.exports = "```ts\nimport {TuiAlertOptions} from '@taiga-ui/core';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n//...\n\nexport class NotificationExampleComponent {\n  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialog<TuiAlertOptions<boolean>, boolean>) {}\n\n  ok() {\n    this.context.completeWith(true);\n  }\n\n  cancel() {\n    this.context.completeWith(false);\n  }\n}\n```\n";

/***/ })

}]);