(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[77970],{77970:o=>{o.exports="import {Injectable} from '@angular/core';\nimport {TuiPopoverService} from '@taiga-ui/cdk';\nimport {TUI_DIALOGS} from '@taiga-ui/core';\n\nimport {PromptComponent} from './prompt.component';\nimport {PromptOptions} from './prompt-options';\n\n@Injectable({\n    providedIn: 'root',\n    useFactory: () =>\n        new PromptService(TUI_DIALOGS, PromptComponent, {\n            heading: 'Are you sure?',\n            buttons: ['Yes', 'No'],\n        }),\n})\nexport class PromptService extends TuiPopoverService<PromptOptions, boolean> {}\n"}}]);