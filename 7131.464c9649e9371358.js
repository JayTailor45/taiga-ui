(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7131],{7131:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-range-example-6',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputRangeExample6 {\n    readonly control = new FormControl([-30, 0]);\n\n    // See https://angular.io/api/common/I18nPluralPipe\n    readonly pluralize = {\n        '=-1': 'day ago',\n        other: 'days ago',\n    };\n}\n"}}]);