(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70060],{70060:n=>{n.exports='<button\n    tuiButton\n    type="button"\n    (click)="toggle(true)"\n    (tuiActiveZoneChange)="toggle($event)"\n>\n    Show sidebar\n    \x3c!-- Nest the directive so it is considered the same active zone --\x3e\n    <div *tuiSidebar="open; direction: \'right\'">\n        <tui-accordion [rounded]="false">\n            <tui-accordion-item borders="top-bottom">\n                Web APIs for Angular\n                <ng-template tuiAccordionItemContent>\n                    <a\n                        *ngFor="let link of webApis"\n                        href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/{{ link }}/README.md"\n                        rel="noreferrer"\n                        target="_blank"\n                        tuiLink\n                        class="link"\n                    >\n                        {{ link }}\n                    </a>\n                </ng-template>\n            </tui-accordion-item>\n            <tui-accordion-item borders="top-bottom">\n                Other libraries\n                <ng-template tuiAccordionItemContent>\n                    <a\n                        *ngFor="let link of tinkoff"\n                        href="https://github.com/taiga-family/{{ link }}"\n                        rel="noreferrer"\n                        target="_blank"\n                        tuiLink\n                        class="link"\n                    >\n                        {{ link }}\n                    </a>\n                </ng-template>\n            </tui-accordion-item>\n        </tui-accordion>\n    </div>\n</button>\n'}}]);