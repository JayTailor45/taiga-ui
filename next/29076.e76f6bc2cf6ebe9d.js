(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29076],{29076:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiHint,\n    TuiTextfieldControllerModule,\n    TuiTextfieldOptionsDirective,\n} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputModule,\n        TuiTextfieldOptionsDirective,\n        TuiTextfieldControllerModule,\n        TuiHint,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl('mail@mail.ru'),\n    });\n}\n"}}]);