(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29749],{67919:n=>{n.exports="```ts\nimport {Component} from '@angular/core';\nimport {TUI_VIEWPORT} from '@taiga-ui/core';\n\n@Component({\n  // ...\n  providers: [\n    {\n      provide: TUI_VIEWPORT,\n      useFactory: () => {\n        const win = inject(WINDOW);\n\n        return {\n          type: `viewport`,\n          getClientRect() {\n            return {\n              top: 0,\n              left: 0,\n              right: win.innerWidth,\n              bottom: win.innerHeight,\n              width: win.innerWidth,\n              height: win.innerHeight,\n            };\n          },\n        };\n      },\n    },\n  ],\n})\nexport class MyComponent {}\n```\n"}}]);