(window.webpackJsonp=window.webpackJsonp||[]).push([[638],{qC4v:function(n,t,e){"use strict";e.r(t),t.default='<button\n    tuiButton\n    size="m"\n    class="tui-space_right-2 tui-space_bottom-2"\n    (click)="onClick(content, header, \'m\')"\n>\n    Show\n</button>\n<button\n    tuiButton\n    size="m"\n    (click)="onClick(content, header, \'fullscreen\')"\n>\n    Show fullscreen\n</button>\n\n<ng-template\n    #content\n    let-observer\n>\n    Take a look\n    <div class="buttons">\n        <button\n            tuiButton\n            size="m"\n            (click)="observer.complete()"\n        >\n            Very cool!\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #header>\n    <div class="header">\n        <img\n            src="https://ng-web-apis.github.io/dist/assets/images/web-api.svg"\n            alt="Cool"\n        />\n    </div>\n</ng-template>\n'}}]);