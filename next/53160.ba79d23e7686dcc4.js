(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53160],{53160:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-context-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDropdownContextExample3 {\n    protected testForm = new FormGroup({\n        reportText: new FormControl('Misspell HERE!'),\n    });\n\n    protected report(): void {\n        console.info(this.testForm.value);\n    }\n}\n"}}]);