(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36906],{14525:n=>{n.exports='<button\n    appearance="outline"\n    size="xs"\n    tuiButton\n    type="button"\n    class="switch"\n    (click)="isOpen = !isOpen"\n>\n    {{ isOpen ? \'ON\' : \'OFF\' }}\n</button>\n\n<div\n    *ngIf="isOpen"\n    class="plasma"\n    [@tuiWidthCollapse]="getAnimation(speed)"\n></div>\n'}}]);