(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[86035],{86035:n=>{n.exports='<button\n    size="m"\n    tuiButton\n    (click)="onClick(content)"\n>\n    Open\n</button>\n\n<ng-template\n    #content\n    let-context\n>\n    <tui-input\n        class="tui-space_bottom-3"\n        [ngModel]="value"\n        (ngModelChange)="onModelChange($event)"\n    >\n        Your name\n    </tui-input>\n    <button\n        tuiButton\n        (click)="context.complete()"\n    >\n        Submit\n    </button>\n</ng-template>\n'}}]);