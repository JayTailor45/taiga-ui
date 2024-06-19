(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39522],{39522:e=>{e.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton, TuiError, TuiLink} from '@taiga-ui/core';\nimport {TuiAvatar, TuiFieldErrorPipe} from '@taiga-ui/kit';\nimport {TuiCardLarge} from '@taiga-ui/layout';\nimport {\n    TuiInputPhoneModule,\n    TuiIslandDirective,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        TuiIslandDirective,\n        ReactiveFormsModule,\n        TuiInputPhoneModule,\n        TuiError,\n        TuiTextfieldControllerModule,\n        TuiFieldErrorPipe,\n        AsyncPipe,\n        TuiCardLarge,\n        TuiAvatar,\n        TuiButton,\n        TuiLink,\n        NgIf,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected bannerImage =\n        'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';\n\n    protected expanded = false;\n    protected index = 1;\n    protected testForm = new FormGroup({\n        testValue: new FormControl('', Validators.required),\n    });\n\n    protected collapsingText =\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +\n        'sed do eiusmod tempor incididunt ut labore et dolore ' +\n        'magna aliqua.';\n\n    protected get linesLimit(): number {\n        return this.expanded ? 10 : 3;\n    }\n\n    protected expandText(): void {\n        this.expanded = !this.expanded;\n    }\n\n    protected onIndexChange(index: number): void {\n        this.index = index;\n    }\n}\n"}}]);