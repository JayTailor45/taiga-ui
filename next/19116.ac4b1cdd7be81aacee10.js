"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[19116],{

/***/ 19116:
/***/ ((module) => {

module.exports = "<button\n    tuiButton\n    (click)=\"toggle()\"\n>\n    Show/Hide\n</button>\n<ng-template\n    [tuiSheetOptions]=\"options\"\n    [(tuiSheet)]=\"open\"\n>\n    <ng-container waIntersectionObserver>\n        <h2 tuiSheetHeading>\n            <label tuiLabel=\"Monty Python\">And the Holy Grail</label>\n        </h2>\n        <img\n            *ngFor=\"let image of images\"\n            #img\n            alt=\"\"\n            class=\"image\"\n            [src]=\"image\"\n            (waIntersectionObservee)=\"onIntersection($event, img)\"\n        />\n    </ng-container>\n</ng-template>\n";

/***/ })

}]);