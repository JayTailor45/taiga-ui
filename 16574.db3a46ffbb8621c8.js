(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16574],{16574:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {switchMap, takeUntil} from 'rxjs';\n\nimport {AlertExampleComponent} from './alert-example/alert-example.component';\n\n@Component({\n    selector: 'tui-alerts-example-3',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAlertExampleComponent3 {\n    private readonly alerts = inject(TuiAlertService);\n    private readonly notification = this.alerts\n        .open<boolean>(new PolymorpheusComponent(AlertExampleComponent), {\n            label: 'Question',\n            status: 'error',\n            autoClose: 0,\n        })\n        .pipe(\n            switchMap(response =>\n                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),\n            ),\n            takeUntil(inject(Router).events),\n        );\n\n    showNotification(): void {\n        this.notification.subscribe();\n    }\n}\n"}}]);