(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{DCxn:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {sum} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-arc-chart-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiArcChartExample2 {\n    private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'other'];\n    readonly value = [13769, 12367, 10172, 3018, 2592];\n    readonly sum = sum(...this.value);\n\n    getValue(index: number): number {\n        return Number.isNaN(index) ? this.sum : this.value[index];\n    }\n\n    getLabel(index: number): string {\n        return Number.isNaN(index) ? 'Total' : this.labels[index];\n    }\n}\n"}}]);