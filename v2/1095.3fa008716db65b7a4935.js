(window.webpackJsonp=window.webpackJsonp||[]).push([[1095],{zEMb:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_NUMBER_FORMAT} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-money-example-5',\n    templateUrl: './index.html',\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            useValue: {\n                decimalSeparator: '.',\n                thousandSeparator: ',',\n                zeroPadding: true,\n            },\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMoneyExample5 {}\n"}}]);