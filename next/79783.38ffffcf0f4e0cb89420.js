"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[79783],{

/***/ 79783:
/***/ ((module) => {

module.exports = "<tui-carousel\n    [draggable]=\"true\"\n    [itemsCount]=\"3\"\n    [(index)]=\"index\"\n>\n    <ng-container *ngFor=\"let item of items; let i = index\">\n        <img\n            *tuiItem\n            alt=\"\"\n            draggable=\"false\"\n            src=\"assets/images/{{ item }}\"\n            class=\"item\"\n            [class.item_active]=\"i === index + 1\"\n        />\n    </ng-container>\n</tui-carousel>\n";

/***/ })

}]);