(window.webpackJsonp=window.webpackJsonp||[]).push([[835],{"3kdT":function(n,t,a){"use strict";a.r(t),t.default='<tui-input-phone\n    *tuiLet="items$ | async as items"\n    class="b-form"\n    [tuiTextfieldCustomContent]="avatar"\n    [allowText]="true"\n    [(ngModel)]="value"\n    (searchChange)="onSearch($event)"\n>\n    {{ placeholder$ | async }}\n    <ng-container *ngIf="items.length">\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor="let item of items"\n                tuiOption\n                [value]="item.phone"\n                [disabled]="item.disabled"\n                (click)="onClick(item)"\n            >\n                <tui-avatar\n                    size="s"\n                    class="tui-space_right-3"\n                    [avatarUrl]="item.avatarUrl || null"\n                    [text]="item.firstName"\n                ></tui-avatar>\n                <span class="user">\n                    <span>{{item.firstName}} {{item.lastName}}</span>\n                    <span class="phone">{{item.phone}}</span>\n                </span>\n            </button>\n        </tui-data-list>\n    </ng-container>\n</tui-input-phone>\n<ng-template #avatar>\n    <tui-avatar\n        *ngIf="user$ | async as user"\n        size="s"\n        [rounded]="true"\n        [avatarUrl]="user.avatarUrl || null"\n        [text]="user.firstName"\n    ></tui-avatar>\n</ng-template>\n<p>Value: {{value}}</p>\n'}}]);