(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[28634],{28634:n=>{n.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDropdownModule} from '@taiga-ui/core';\nimport {TuiInputModule, TuiSwitchComponent} from '@taiga-ui/kit';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\nimport {interval, map} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        TuiDropdownModule,\n        TuiInputModule,\n        FormsModule,\n        TuiSwitchComponent,\n        PolymorpheusModule,\n        NgIf,\n        AsyncPipe,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected open = false;\n\n    protected value = 'some data';\n\n    protected showBigText$ = interval(3000).pipe(map(i => !(i % 2)));\n}\n"}}]);