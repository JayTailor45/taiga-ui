"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[24361],{

/***/ 24361:
/***/ ((module) => {

module.exports = "```html\n<table\n  tuiTableFilters\n  tuiTable\n  [columns]=\"columns\"\n>\n  <thead tuiThead>\n    <tr tuiThGroup>\n      <th\n        *tuiHead=\"'name'\"\n        tuiTh\n      >\n        Name\n      </th>\n      <th\n        *tuiHead=\"'balance'\"\n        tuiTh\n      >\n        <tui-input-number\n          tuiTableFilter\n          [tuiGenericFilter]=\"filter\"\n          [formControl]=\"balance\"\n        >\n          Minimal balance\n        </tui-input-number>\n      </th>\n    </tr>\n  </thead>\n  <tbody tuiTbody>\n    <tr\n      *ngFor=\"let item of users | tuiTableFilters\"\n      tuiTr\n    >\n      <td\n        *tuiCell=\"'name'\"\n        tuiTd\n      >\n        {{item.name}}\n      </td>\n      <td\n        *tuiCell=\"'balance'\"\n        tuiTd\n      >\n        {{ item.balance}}\n      </td>\n    </tr>\n  </tbody>\n</table>\n```\n";

/***/ })

}]);