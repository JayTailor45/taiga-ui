"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[45490],{

/***/ 45490:
/***/ ((module) => {

module.exports = "<div class=\"wrapper\">\n    <tui-hosted-dropdown\n        tuiDropdownAlign=\"right\"\n        [content]=\"dropdown\"\n        [(open)]=\"open\"\n    >\n        <a\n            tuiLink\n            tabindex=\"0\"\n            class=\"link\"\n        >\n            <tui-svg\n                src=\"tuiIconSortDown\"\n                class=\"sort\"\n                [class.sort_ascending]=\"ascending\"\n            ></tui-svg>\n            {{ primary }}\n            <tui-svg\n                src=\"tuiIconChevronDown\"\n                class=\"arrow\"\n                [class.arrow_open]=\"open\"\n            ></tui-svg>\n        </a>\n    </tui-hosted-dropdown>\n</div>\n\n<ng-template #dropdown>\n    <tui-data-list>\n        <tui-opt-group *ngFor=\"let group of items\">\n            <button\n                *ngFor=\"let item of group\"\n                tuiOption\n                class=\"item\"\n                (click)=\"onClick(item)\"\n            >\n                {{ item }}\n                <tui-svg\n                    *ngIf=\"itemIsActive(item)\"\n                    src=\"tuiIconCheck\"\n                ></tui-svg>\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n";

/***/ })

}]);