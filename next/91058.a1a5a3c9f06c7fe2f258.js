"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91058],{

/***/ 91058:
/***/ ((module) => {

module.exports = "<ng-template #icon>\n    <tui-avatar\n        size=\"xs\"\n        [rounded]=\"true\"\n        [avatarUrl]=\"avatarUrl\"\n    ></tui-avatar>\n</ng-template>\n<h3>button[tuiButton]</h3>\n<p>\n    <button\n        tuiButton\n        type=\"button\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [icon]=\"icon\"\n        (click)=\"onClick($event)\"\n    >\n        Button\n    </button>\n\n    <button\n        tuiButton\n        type=\"button\"\n        iconRight=\"tuiIconSearch\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [disabled]=\"true\"\n        (click)=\"onClick($event)\"\n    >\n        Disabled button\n    </button>\n\n    <button\n        tuiButton\n        type=\"button\"\n        [showLoader]=\"true\"\n        (click)=\"onClick($event)\"\n    >\n        Loading button\n    </button>\n</p>\n<h3>button[tuiIconButton]</h3>\n<p>\n    <button\n        tuiIconButton\n        type=\"button\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [icon]=\"icon\"\n        (click)=\"onClick($event)\"\n    ></button>\n\n    <button\n        tuiIconButton\n        type=\"button\"\n        icon=\"tuiIconSearch\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [disabled]=\"true\"\n        (click)=\"onClick($event)\"\n    ></button>\n\n    <button\n        tuiIconButton\n        type=\"button\"\n        [showLoader]=\"true\"\n        (click)=\"onClick($event)\"\n    ></button>\n</p>\n<h3>a[tuiButton]</h3>\n<p>\n    <a\n        tuiButton\n        type=\"button\"\n        href=\"http://google.com\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [icon]=\"icon\"\n    >\n        Link\n    </a>\n\n    <a\n        tuiButton\n        [showLoader]=\"true\"\n    >\n        Loading button\n    </a>\n</p>\n<h3>a[tuiIconButton]</h3>\n<p>\n    <a\n        tuiIconButton\n        type=\"button\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [icon]=\"icon\"\n        [routerLink]=\"['/tui-dropdown']\"\n    ></a>\n\n    <a\n        tuiIconButton\n        type=\"button\"\n        icon=\"tuiIconSearch\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [disabled]=\"true\"\n        [routerLink]=\"\"\n        [tuiFocusable]=\"false\"\n    ></a>\n\n    <a\n        tuiIconButton\n        type=\"button\"\n        [showLoader]=\"true\"\n        [routerLink]=\"\"\n        [tuiFocusable]=\"false\"\n    ></a>\n</p>\n";

/***/ })

}]);