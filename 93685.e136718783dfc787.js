(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[93685],{93685:n=>{n.exports='<input\n    size="m"\n    tuiSlider\n    type="range"\n    [formControl]="formControl"\n    [max]="1000"\n    [segments]="4"\n    [step]="250"\n/>\n\n<div class="ticks-labels">\n    <button\n        *ngFor="let label of labels"\n        type="button"\n        class="tick-label"\n        (click)="patchValue(label)"\n    >\n        ${{ label }}\n    </button>\n</div>\n\n<p>\n    Control value:\n    <code>{{ formControl.value }}</code>\n</p>\n'}}]);