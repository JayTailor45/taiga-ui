"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[56782],{

/***/ 56782:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-pdf-viewer-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPdfViewerExample1 {\n    constructor(\n        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,\n        @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,\n    ) {}\n\n    show(actions: PolymorpheusContent<TuiPdfViewerOptions>): void {\n        this.pdfService\n            .open(\n                this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/media/taiga.pdf`),\n                {\n                    label: `Taiga UI`,\n                    actions,\n                },\n            )\n            .subscribe();\n    }\n}\n";

/***/ })

}]);