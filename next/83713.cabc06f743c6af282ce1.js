"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[83713],{

/***/ 83713:
/***/ ((module) => {

module.exports = "<tui-breadcrumbs>\n    <ng-container *ngFor=\"let item of items\">\n        <a\n            *tuiItem\n            tuiLink\n            [routerLink]=\"item.routerLink\"\n        >\n            {{ item.caption }}\n        </a>\n    </ng-container>\n</tui-breadcrumbs>\n\n<tui-breadcrumbs\n    size=\"l\"\n    class=\"tui-space_top-2\"\n>\n    <ng-container *ngFor=\"let item of items\">\n        <a\n            *tuiItem\n            tuiLink\n            [routerLink]=\"item.routerLink\"\n        >\n            {{ item.caption }}\n        </a>\n    </ng-container>\n</tui-breadcrumbs>\n";

/***/ })

}]);