(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[83198],{83198:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-combo-box-example-7',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiComboBoxExample7 {\n    value = null;\n\n    readonly items = [\n        {name: 'John', surname: 'Cleese', disabled: false},\n        {name: 'Eric', surname: 'Idle', disabled: false},\n        {name: 'Graham', surname: 'Chapman', disabled: true},\n        {name: 'Michael', surname: 'Palin', disabled: true},\n        {name: 'Terry', surname: 'Gilliam', disabled: false},\n        {name: 'Terry', surname: 'Jones', disabled: false},\n    ];\n\n    readonly stringify = (item: {name: string; surname: string}): string =>\n        `${item.name} ${item.surname}`;\n}\n"}}]);