(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76110],{76110:e=>{e.exports='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <p>Default:</p>\n\n    <tui-input-date-time\n        formControlName="testValue"\n        timeMode="HH:MM"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p>With seconds:</p>\n\n    <tui-input-date-time\n        formControlName="testValue"\n        timeMode="HH:MM:SS"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p>With SS and MS:</p>\n\n    <tui-input-date-time\n        formControlName="testValue"\n        timeMode="HH:MM:SS.MSS"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p>Form value:</p>\n\n    <pre><code>{{testForm.value | json}}</code></pre>\n</form>\n'}}]);