"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[70685],{

/***/ 70685:
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n    <tui-filter\n        formControlName=\"filters\"\n        [identityMatcher]=\"identityMatcher\"\n        [content]=\"content\"\n        [badgeHandler]=\"badgeHandler\"\n        [items]=\"items\"\n    ></tui-filter>\n</form>\n<ng-template\n    #content\n    let-item\n>\n    {{ item.title }}\n</ng-template>\n<div>\n    <pre>Form value: {{ form.value | json }}</pre>\n</div>\n";

/***/ })

}]);