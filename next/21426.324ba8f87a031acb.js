(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[21426],{21426:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-line-clamp-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiLineClampExample2 {\n    protected linesLimit = 2;\n\n    protected toggle(): void {\n        this.linesLimit = this.collapsed ? 12 : 2;\n    }\n\n    private get collapsed(): boolean {\n        return this.linesLimit === 2;\n    }\n}\n"}}]);