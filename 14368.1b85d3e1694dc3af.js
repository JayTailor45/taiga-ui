(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14368],{14368:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTime} from '@taiga-ui/cdk';\nimport {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-time-example-3',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            icon: 'tuiIconCheckCircleLarge',\n            mode: 'HH:MM:SS',\n            itemSize: 's',\n        }),\n    ],\n})\nexport class TuiInputTimeExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl<TuiTime | null>(null),\n    });\n\n    items1 = tuiCreateTimePeriods();\n}\n"}}]);