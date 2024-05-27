(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[12038],{12038:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiActiveZoneDirective, TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {\n    TuiButtonDirective,\n    TuiCalendarComponent,\n    TuiDataListComponent,\n    TuiDropdownDirective,\n    TuiDropdownManualDirective,\n    TuiDropdownOpenDirective,\n    TuiDropdownOptionsDirective,\n    TuiDropdownPositionSidedDirective,\n    TuiGroupDirective,\n    TuiOptionComponent,\n} from '@taiga-ui/core';\nimport {TuiDataListDropdownManagerModule} from '@taiga-ui/kit';\nimport {TuiInputDateRangeModule, TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent5\",\n    imports: [\n        TuiButtonDirective,\n        TuiDropdownOptionsDirective,\n        TuiDropdownDirective,\n        TuiDropdownOpenDirective,\n        TuiDataListComponent,\n        TuiDataListDropdownManagerModule,\n        TuiActiveZoneDirective,\n        TuiDropdownPositionSidedDirective,\n        TuiOptionComponent,\n        TuiDropdownManualDirective,\n        ReactiveFormsModule,\n        TuiInputModule,\n        TuiCalendarComponent,\n        TuiGroupDirective,\n        FormsModule,\n        TuiAmountPipe,\n        AsyncPipe,\n        TuiInputDateRangeModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected dropdownOpen = false;\n    protected dateValue: TuiDay = new TuiDay(2020, 0, 1);\n    protected euro = 87; // 1 euro = 87 rub\n    protected dollar = 75; // 1 dollar = 75 rub\n\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl('mail@mail.ru'),\n    });\n\n    protected readonly moneyForm = new FormGroup({\n        moneyValue: new FormControl(1000),\n    });\n\n    protected rangeValue = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({year: 1}),\n    );\n\n    protected get testValue(): string | null | undefined {\n        return this.testForm.get('testValue')?.value;\n    }\n\n    protected get moneyValue(): number {\n        return Number(this.moneyForm.get('moneyValue')?.value) || 0;\n    }\n\n    protected onDayClick(day: TuiDay): void {\n        this.dateValue = day;\n    }\n}\n"}}]);