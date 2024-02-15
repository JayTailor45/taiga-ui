(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35839],{35839:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-range-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiRangeExample3 {\n    readonly min = 0;\n    readonly max = 1000;\n    readonly step = 250;\n    readonly segments = 4;\n    readonly labels = [...new Array(this.segments + 1).keys()].map(\n        i => this.min + this.step * i,\n    );\n\n    value = [0, 250];\n\n    // https://angular.io/api/common/I18nPluralPipe\n    pluralMap = {'=0': '0', '=1': '# item', '=1000': 'MAX', other: '# items'};\n}\n"}}]);