(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[68629],{68629:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAxesComponent, TuiBarChartComponent} from '@taiga-ui/addon-charts';\nimport {tuiCeil} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiAxesComponent, TuiBarChartComponent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly value = [\n        [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],\n        [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],\n    ];\n\n    protected readonly labelsX = ['Jan 2019', 'Feb', 'Mar'];\n    protected readonly labelsY = ['0', '10 000'];\n\n    protected getHeight(max: number): number {\n        return (max / tuiCeil(max, -3)) * 100;\n    }\n}\n"}}]);