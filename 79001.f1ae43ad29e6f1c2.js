(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79001],{79001:n=>{n.exports="```ts\nimport {NgModule} from '@angular/core';\nimport {tuiSvgOptionsProvider, TUI_SANITIZER} from '@taiga-ui/core';\nimport {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';\n\nimport {ALL_TAIGA_UI_MODULES} from './@stackblitz/all-taiga-modules';\nimport {AppComponent} from './app.component';\n\n@NgModule({\n  /**\n   * Don't use this approach,\n   * it's a workaround for stackblitz\n   */\n  imports: ALL_TAIGA_UI_MODULES,\n  declarations: [AppComponent],\n  bootstrap: [AppComponent],\n  providers: [\n    // A workaround because StackBlitz does not support assets\n    tuiSvgOptionsProvider({\n      path: 'https://taiga-ui.dev/assets/taiga-ui/icons',\n    }),\n    /**\n     * If you use unsafe icons or TuiEditor in your app\n     *\n     * Take a look at: https://github.com/taiga-family/ng-dompurify\n     *\n     * This library implements DOMPurify as Angular Sanitizer or Pipe.\n     * It delegates sanitizing to DOMPurify and supports the same configuration.\n     */\n    {\n      provide: TUI_SANITIZER,\n      useClass: NgDompurifySanitizer,\n    },\n  ],\n})\nexport class AppModule {}\n```\n"}}]);