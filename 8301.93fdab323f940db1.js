(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8301],{8301:e=>{e.exports='<form\n    class="b-form"\n    [formGroup]="testForm"\n    [tuiTextfieldCleaner]="true"\n>\n    <p>\n        If a field is optional, but unfinished field should be marked as invalid, use\n        <code>tuiUnfinishedValidator</code>\n        directive\n    </p>\n    <tui-input-date\n        formControlName="testValue"\n        tuiUnfinishedValidator="Finish filling the field"\n    >\n        Choose a date\n    </tui-input-date>\n    <tui-error\n        formControlName="testValue"\n        [error]="[] | tuiFieldError | async"\n    ></tui-error>\n</form>\n'}}]);