(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13751],{13751:e=>{e.exports="import {Component, DestroyRef, inject} from '@angular/core';\nimport {takeUntilDestroyed} from '@angular/core/rxjs-interop';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLetDirective} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiBadgeDirective} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiLetDirective, TuiBadgeDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly destroyRef = inject(DestroyRef);\n    private readonly alerts = inject(TuiAlertService);\n\n    protected get getter(): string {\n        this.alerts\n            .open('Getter called')\n            .pipe(takeUntilDestroyed(this.destroyRef))\n            .subscribe();\n\n        return '🐳';\n    }\n}\n"}}]);