(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[54065],{54065:o=>{o.exports="import {Component, DestroyRef, inject} from '@angular/core';\nimport {takeUntilDestroyed} from '@angular/core/rxjs-interop';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\nimport {PayModalComponent} from './pay-modal/pay-modal.component';\n\n@Component({\n    selector: 'tui-dialog-example-9',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDialogExampleComponent9 {\n    private readonly dialogs = inject(TuiDialogService);\n    private readonly destroyRef = inject(DestroyRef);\n\n    protected readonly amountControl = new FormControl(100);\n\n    protected payByCard(): void {\n        this.dialogs\n            .open(new PolymorpheusComponent(PayModalComponent), {\n                size: 'auto',\n                closeable: true,\n                data: {\n                    amount: this.amountControl.value,\n                },\n            })\n            .pipe(takeUntilDestroyed(this.destroyRef))\n            .subscribe();\n    }\n}\n"}}]);