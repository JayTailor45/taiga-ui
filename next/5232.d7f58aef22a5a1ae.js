(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5232],{5232:n=>{n.exports='<form [formGroup]="testForm">\n    <p>\n        <tui-input\n            formControlName="testValue1"\n            [maskito]="maskOptions1"\n        >\n            Document number\n            <input\n                inputmode="numeric"\n                tuiTextfield\n            />\n        </tui-input>\n    </p>\n    <p>\n        <tui-input\n            formControlName="testValue2"\n            [maskito]="maskOptions2"\n            [tuiUnmaskHandler]="unmask"\n        >\n            Secret number\n            <input\n                inputmode="numeric"\n                tuiTextfield\n            />\n        </tui-input>\n    </p>\n</form>\n<p>Value stored in control:</p>\n<pre>{{ testForm.value | json }}</pre>\n'}}]);