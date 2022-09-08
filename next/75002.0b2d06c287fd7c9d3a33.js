"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[75002],{

/***/ 75002:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_LOADED} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {Subject} from 'rxjs';\n\nconst loaded$ = new Subject<void>();\n\n@Component({\n    selector: `tui-pull-to-refresh-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: false,\n        },\n        {\n            provide: TUI_IS_ANDROID,\n            useValue: true,\n        },\n        {\n            provide: TUI_LOADED,\n            useValue: loaded$.asObservable(),\n        },\n    ],\n})\nexport class TuiPullToRefreshExample1 {\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    onPull(): void {\n        this.alertService.open(`Loading...`).subscribe();\n    }\n\n    finishLoading(): void {\n        loaded$.next();\n    }\n}\n";

/***/ })

}]);