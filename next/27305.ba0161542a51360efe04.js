"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[27305],{

/***/ 27305:
/***/ ((module) => {

module.exports = "<tui-input-slider\n    tuiTextfieldSize=\"m\"\n    class=\"slider\"\n    [tuiTextfieldCustomContent]=\"inputCustomContent\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [max]=\"6\"\n    [quantum]=\"1\"\n    [(ngModel)]=\"activePadding\"\n></tui-input-slider>\n\n<ng-template #inputCustomContent>activePadding</ng-template>\n\n<tui-pagination\n    [activePadding]=\"activePadding\"\n    [length]=\"64\"\n    [index]=\"10\"\n></tui-pagination>\n";

/***/ })

}]);