(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26554],{26554:n=>{n.exports="import {JsonPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiReorderComponent} from '@taiga-ui/addon-table';\n\n@Component({\n    standalone: true,\n    imports: [TuiReorderComponent, JsonPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected items: readonly string[] = [\n        'John Cleese',\n        'Eric Idle',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n        'Graham Chapman',\n    ];\n\n    protected enabled = this.items;\n}\n"}}]);