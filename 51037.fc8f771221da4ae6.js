(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[51037],{51037:t=>{t.exports='<p>Component with a static text...</p>\n<tui-tooltip\n    content="Supports basic <strong>HTML</strong>"\n    direction="right"\n></tui-tooltip>\n<p>\n    ...or any custom HTML or logic with\n    <code>PolymorpheusContent</code>\n    :\n</p>\n<tui-tooltip\n    direction="bottom-right"\n    [content]="tooltip"\n></tui-tooltip>\n<p class="wrapping-tooltip">\n    Example of wrapping tooltip\n    <tui-tooltip\n        direction="bottom-right"\n        [content]="tooltip"\n    ></tui-tooltip>\n</p>\n\n<ng-template #tooltip>\n    <tui-loader\n        size="s"\n        class="tooltip"\n        [inheritColor]="true"\n        [showLoader]="loader"\n    >\n        {{ text }}\n    </tui-loader>\n</ng-template>\n'}}]);