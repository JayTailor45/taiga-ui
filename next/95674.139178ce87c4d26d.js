(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95674],{95674:o=>{o.exports="```ts\nimport {PolymorpheusComponent} from '@taiga-ui/polymorpheus';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {CustomNotificationComponent} from './custom-notification.component';\nimport {inject} from '@angular/core';\n\n//...\n\nexport class MyComponent {\n  private readonly alerts = inject(TuiAlertService);\n\n  constructor() {\n    //...\n\n    this.alerts.open(new PolymorpheusComponent(CustomNotificationComponent)).subscribe({\n      complete: () => {\n        console.log('Notification is closed');\n      },\n    });\n  }\n}\n```\n"}}]);