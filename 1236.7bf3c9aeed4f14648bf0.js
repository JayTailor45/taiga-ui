(window.webpackJsonp=window.webpackJsonp||[]).push([[1236],{rYdz:function(n,e,a){"use strict";a.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: readonly User[] = [\n    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),\n    new User('Alex', 'Inkin', avatar),\n    new User('Dmitriy', 'Demenskiy'),\n    new User('Evgeniy', 'Mamaev'),\n    new User('Ivan', 'Ishmametiev'),\n    new User('Igor', 'Katsuba'),\n    new User('Yulia', 'Tsareva'),\n];\n\n@Component({\n    selector: 'tui-select-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample6 {\n    value = null;\n\n    readonly items$ = of(databaseMockData).pipe(delay(5000));\n\n    readonly disabledItemHandler: TuiBooleanHandler<User> = ({avatarUrl}) => !!avatarUrl;\n}\n"}}]);