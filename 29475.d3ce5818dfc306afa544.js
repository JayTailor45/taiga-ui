(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[29475],{29475:n=>{n.exports='<div class="tui-space_bottom-4">Choose a department:</div>\n\n<div class="filters-with-all">\n    <button\n        size="m"\n        tuiButton\n        type="button"\n        class="item tui-space_right-1"\n        [appearance]="buttonAppearance$ | async"\n        (click)="toggleAll()"\n    >\n        All\n    </button>\n\n    <tui-filter\n        class="item"\n        [items]="items"\n        [ngModel]="model$ | async"\n        (ngModelChange)="onModelChange($event)"\n    ></tui-filter>\n</div>\n'}}]);