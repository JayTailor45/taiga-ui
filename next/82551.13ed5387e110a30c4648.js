"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[82551],{

/***/ 82551:
/***/ ((module) => {

module.exports = "<div class=\"wrapper\">\n    <button\n        tuiIconButton\n        type=\"button\"\n        title=\"Choose a date\"\n        appearance=\"secondary\"\n        shape=\"rounded\"\n        icon=\"tuiIconCalendarLarge\"\n        (click)=\"onClick()\"\n    ></button>\n    <span\n        class=\"date\"\n        [class.date_empty]=\"empty\"\n    >\n        {{ date$ | async }}\n    </span>\n</div>\n";

/***/ })

}]);