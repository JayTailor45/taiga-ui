(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[54879],{54879:n=>{n.exports='<form [formGroup]="testForm">\n    <tui-notification>\n        Custom mode is set with\n        <a\n            routerLink="/directives/mode"\n            tuiLink\n        >\n            <code>tuiMode</code>\n        </a>\n        directive\n    </tui-notification>\n\n    <p>\n        <tui-input\n            formControlName="testValue"\n            [tuiTextfieldCleaner]="true"\n        >\n            Type an email\n            <input\n                placeholder="mail@mail.ru"\n                tuiTextfield\n                type="email"\n            />\n        </tui-input>\n    </p>\n    <div>\n        <p class="wrapper wrapper_dark">\n            <tui-input\n                formControlName="testValue"\n                tuiMode="onDark"\n                [tuiTextfieldCleaner]="true"\n            >\n                Type an email\n                <input\n                    placeholder="mail@mail.ru"\n                    tuiTextfield\n                    type="email"\n                />\n            </tui-input>\n        </p>\n    </div>\n    <div>\n        <p class="wrapper wrapper_light">\n            <tui-input\n                formControlName="testValue"\n                tuiMode="onLight"\n                [tuiTextfieldCleaner]="true"\n            >\n                Type an email\n                <input\n                    placeholder="mail@mail.ru"\n                    tuiTextfield\n                    type="email"\n                />\n            </tui-input>\n        </p>\n    </div>\n</form>\n'}}]);