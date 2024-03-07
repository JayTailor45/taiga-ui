(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72178],{72178:n=>{n.exports='<form [formGroup]="testForm">\n    <label\n        tuiLabel="Type the ultimate answer"\n        class="tui-space_bottom-4"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            to the Question of Life, the Universe, and Everything\n        </tui-input>\n\n        <tui-error\n            formControlName="testValue2"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </label>\n\n    <label tuiLabel="Set a password">\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Latin letters only\n        </tui-input>\n\n        <tui-error\n            formControlName="testValue1"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </label>\n\n    <p>\n        If you want to show a validation message as soon as a user starts typing, subscribe on form value changes and\n        call markAsTouched on control on first value change. You can also use\n        <a\n            fragment="mark-control-as-touched-and-validate"\n            href="/utils/miscellaneous#mark-control-as-touched-and-validate"\n            routerLink="/utils/miscellaneous"\n            tuiLink\n        >\n            <code>tuiMarkControlAsTouchedAndValidate</code>\n        </a>\n    </p>\n\n    <p>\n        <code>tuiFieldError</code>\n        pipe can be used inside your controls to show error messages for parent\n        <a\n            href="https://angular.io/api/forms/NgControl"\n            rel="noreferrer"\n            target="_blank"\n            tuiLink\n        >\n            NgControl\n        </a>\n        or\n        <a\n            href="https://angular.io/api/forms/ControlContainer"\n            rel="noreferrer"\n            target="_blank"\n            tuiLink\n        >\n            ControlContainer\n        </a>\n        through DI without explicit directive on\n        <code>tui-error</code>\n        .\n    </p>\n\n    <p>Below is an error for the entire form:</p>\n\n    <tui-error [error]="[] | tuiFieldError | async"></tui-error>\n</form>\n'}}]);