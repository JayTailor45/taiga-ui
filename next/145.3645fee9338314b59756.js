(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{"4qw5":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMediaModule",(function(){return q}));var a=n("An66"),i=n("3kIJ"),r=n("1VvW"),o=n("SVIu"),u=n("l4xa"),d=n("Qq0t"),c=n("dvRg"),l=n("kZht"),m=n("OZlg"),s=n("e0eB"),p=n("iyc4"),g=n("EqIU"),v=n("iYz/");function y(e,t){1&e&&l["\u0275\u0275element"](0,"source",3)}let h=(()=>{class e{constructor(){this.currentTime=0,this.volume=1,this.paused=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-media-example-1"]],decls:9,vars:6,consts:[["tuiMedia","","controls","","width","320",1,"video",3,"currentTime","paused","volume","currentTimeChange","pausedChange","volumeChange"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg",4,"tuiHighDpi"],["src","/assets/media/bbb.mp4","type","video/mp4"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"video",0),l["\u0275\u0275listener"]("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e}))("volumeChange",(function(e){return t.volume=e})),l["\u0275\u0275template"](1,y,1,0,"source",1),l["\u0275\u0275element"](2,"source",2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"p"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"p"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"p"),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275property"]("currentTime",t.currentTime)("paused",t.paused)("volume",t.volume),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate1"]("currentTime: ",t.currentTime,""),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("volume: ",t.volume,""),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("paused: ",t.paused,""))},directives:[g.a,v.a],styles:["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{float:left;margin-right:1.5rem}"],changeDetection:0}),e})();var f=n("TxeG"),b=n("zV1d"),x=n("RZGc");let T=(()=>{class e{constructor(){this.currentTime=0,this.paused=!0}get icon(){return this.paused?"tuiIconPlayLarge":"tuiIconPauseLarge"}getTime(e){const t=Math.round(e||0),n=t%u.y,a=(t-n)/u.y,i=String(n),r=String(a);return`${1===r.length?"0"+r:r}:${1===i.length?"0"+i:i}`}toggleState(){this.paused=!this.paused}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-media-example-2"]],decls:13,vars:9,consts:[[1,"player"],["tuiMedia","","width","320",1,"video",3,"currentTime","paused","currentTimeChange","pausedChange","click"],["video",""],["src","/assets/media/bbb.mp4","type","video/mp4"],["tuiMode","onDark",1,"controls"],["tuiIconButton","","type","button","title","Play/Pause","size","s","shape","rounded","appearance","flat",3,"icon","click"],[1,"slider",3,"max","ngModel","ngModelChange"],[1,"time"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"video",1,2),l["\u0275\u0275listener"]("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e}))("click",(function(){return t.toggleState()})),l["\u0275\u0275element"](3,"source",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",4),l["\u0275\u0275elementStart"](5,"button",5),l["\u0275\u0275listener"]("click",(function(){return t.toggleState()})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"tui-slider",6),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.currentTime=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"div",7),l["\u0275\u0275elementStart"](8,"time"),l["\u0275\u0275text"](9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](10," / "),l["\u0275\u0275elementStart"](11,"time"),l["\u0275\u0275text"](12),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275reference"](2);l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("currentTime",t.currentTime)("paused",t.paused),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("icon",t.icon),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("max",e.duration)("ngModel",t.currentTime),l["\u0275\u0275advance"](2),l["\u0275\u0275attribute"]("datetime",t.getTime(t.currentTime)),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",t.getTime(t.currentTime)," "),l["\u0275\u0275advance"](2),l["\u0275\u0275attribute"]("datetime",t.getTime(e.duration)),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",t.getTime(e.duration)," ")}},directives:[g.a,f.a,b.a,x.a,i.NgControlStatus,i.NgModel],styles:[".video[_ngcontent-%COMP%], [_nghost-%COMP%]{display:block}.player[_ngcontent-%COMP%]{position:relative;width:20rem}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;width:100%;align-items:center;padding:.75rem .75rem .5rem;box-sizing:border-box;color:var(--tui-base-01);background:linear-gradient(180deg,transparent,rgba(0,0,0,.56))}.slider[_ngcontent-%COMP%]{flex:1}.slider[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{margin-left:.75rem}.time[_ngcontent-%COMP%]{flex-shrink:0;font-size:.8125rem}"],changeDetection:0}),e})();var C=n("yZWP");let S=(()=>{class e{constructor(){this.currentTime=0,this.paused=!0}get icon(){return this.paused?"tuiIconPlayLarge":"tuiIconPauseLarge"}toggleState(){this.paused=!this.paused}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-media-example-3"]],decls:9,vars:5,consts:[[1,"tui-player"],["tuiMedia","","src","assets/media/strays.mp3",3,"currentTime","paused","currentTimeChange","pausedChange"],["audio",""],["tuiIconButton","","type","button","shape","rounded","appearance","secondary","title","Play/Pause",3,"icon","click"],["tuiLink","","href","https://waterplea.bandcamp.com/"],[1,"slider",3,"max","ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"audio",1,2),l["\u0275\u0275listener"]("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"button",3),l["\u0275\u0275listener"]("click",(function(){return t.toggleState()})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div"),l["\u0275\u0275elementStart"](5,"a",4),l["\u0275\u0275text"](6," Waterplea "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](7," \u2014 Strays "),l["\u0275\u0275elementStart"](8,"tui-slider",5),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.currentTime=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275reference"](2);l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("currentTime",t.currentTime)("paused",t.paused),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("icon",t.icon),l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("max",e.duration)("ngModel",t.currentTime)}},directives:[g.a,b.a,C.a,x.a,i.NgControlStatus,i.NgModel],styles:[".tui-player{display:flex;width:20rem;border-radius:6.25rem;background:var(--tui-secondary);--tui-primary:var(--tui-link);--tui-primary-hover:var(--tui-link-hover);--tui-primary-active:var(--tui-link-hover)}.tui-player>div{flex:1;margin:.375rem 1.75rem 0 .375rem}"],encapsulation:2,changeDetection:0}),e})();var M=n("yHor"),P=n("zGJC"),E=n("u8jZ");const k=["header",$localize`:␟8a27a855a00b08d2ca981207638ea9097032412b␟3250391385569692601:Media`];var w;w=$localize`:␟5c7e436081ab7b7e75134ad0f3f5732344199ff2␟72364305241305412:Directive for declarative work with HTML5 video and audio`;const V=["heading",$localize`:␟d0326b072d54c553e428c3b40cecb689f4e7adce␟8073419804355870473:Native controls`],I=["heading",$localize`:␟2d1ea268a6a9f483dbc2cbfe19bf4256a57a6af4␟6549265851868599441:Video`],D=["heading",$localize`:␟f0baeb8b69d120073b6d60d34785889b0c3232c8␟347407180135731058:Audio`];function _(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,w),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-example",2),l["\u0275\u0275i18nAttributes"](3,V),l["\u0275\u0275element"](4,"tui-media-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-doc-example",3),l["\u0275\u0275i18nAttributes"](6,I),l["\u0275\u0275element"](7,"tui-media-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"tui-doc-example",4),l["\u0275\u0275i18nAttributes"](9,D),l["\u0275\u0275element"](10,"tui-media-example-3"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example1),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example2),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example3)}}var N,z,$,O,L,A;function H(e,t){1&e&&l["\u0275\u0275i18n"](0,N)}function R(e,t){1&e&&l["\u0275\u0275i18n"](0,z)}function U(e,t){1&e&&l["\u0275\u0275i18n"](0,$)}function j(e,t){1&e&&l["\u0275\u0275i18n"](0,O)}function B(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"audio",5),l["\u0275\u0275listener"]("pausedChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().paused=t}))("currentTimeChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().currentTime=t}))("volumeChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().volume=t})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](1,"tui-doc-documentation"),l["\u0275\u0275template"](2,H,1,0,"ng-template",6),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().currentTime=t})),l["\u0275\u0275template"](3,R,1,0,"ng-template",7),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().paused=t})),l["\u0275\u0275template"](4,U,1,0,"ng-template",8),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().playbackRate=t})),l["\u0275\u0275template"](5,j,1,0,"ng-template",9),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().volume=t})),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("playbackRate",e.playbackRate)("paused",e.paused)("currentTime",e.currentTime)("volume",e.volume),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("documentationPropertyValue",e.currentTime),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValue",e.paused),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValue",e.playbackRate),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.volumeVariants)("documentationPropertyValue",e.volume)}}function G(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",10),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18nStart"](3,L),l["\u0275\u0275element"](4,"code"),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](5,"tui-doc-code",11),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"li"),l["\u0275\u0275elementStart"](7,"p"),l["\u0275\u0275i18n"](8,A),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](9,"tui-doc-code",12),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("code",e.exampleModule),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("code",e.exampleHtml)}}N=$localize`:␟69f9d26d1f4b33afc3d5b0833e9d3c849c2c1707␟3780515939858026328: Current time `,z=$localize`:␟9dcd2128593c62256dd3464320ec1885f5b4e168␟256940080640657353: Paused state `,$=$localize`:␟2537ae0f1e8aab6c5fecda1acda4958a53a7ca40␟2465791192649345432: Playback speed `,O=$localize`:␟140fa9b9d19e3ff4049b0fe947f1f599a498d2ca␟4429171508194850919: Volume `,L=$localize`:␟d7cf4a0ab0cf4835b61647afeed7ad7d789a0e94␟4130706201499310656: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiMediaModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your component module: `,A=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Z=(()=>{class e{constructor(){this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-media-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMediaExample1 {\n    currentTime = 0;\n    volume = 1;\n    paused = true;\n}\n",HTML:'<video\n    tuiMedia\n    controls\n    width="320"\n    class="video"\n    [(currentTime)]="currentTime"\n    [(paused)]="paused"\n    [(volume)]="volume"\n>\n    <source\n        *tuiHighDpi\n        src="/assets/media/bbb_dpi.ogv"\n        type="video/ogg"\n    />\n    <source\n        src="/assets/media/bbb.mp4"\n        type="video/mp4"\n    />\n</video>\n<p>currentTime: {{currentTime}}</p>\n<p>volume: {{volume}}</p>\n<p>paused: {{paused}}</p>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {SECONDS_IN_MINUTE} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-media-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMediaExample2 {\n    currentTime = 0;\n    paused = true;\n\n    get icon(): string {\n        return this.paused ? 'tuiIconPlayLarge' : 'tuiIconPauseLarge';\n    }\n\n    getTime(time: number): string {\n        const integer = Math.round(time || 0);\n        const seconds = integer % SECONDS_IN_MINUTE;\n        const minutes = (integer - seconds) / SECONDS_IN_MINUTE;\n        const secondsString = String(seconds);\n        const minutesString = String(minutes);\n        const paddedSeconds =\n            secondsString.length === 1 ? `0${secondsString}` : secondsString;\n        const paddedMinutes =\n            minutesString.length === 1 ? `0${minutesString}` : minutesString;\n\n        return `${paddedMinutes}:${paddedSeconds}`;\n    }\n\n    toggleState(): void {\n        this.paused = !this.paused;\n    }\n}\n",HTML:'<div class="player">\n    <video\n        #video\n        tuiMedia\n        width="320"\n        class="video"\n        [(currentTime)]="currentTime"\n        [(paused)]="paused"\n        (click)="toggleState()"\n    >\n        <source\n            src="/assets/media/bbb.mp4"\n            type="video/mp4"\n        />\n    </video>\n    <div\n        tuiMode="onDark"\n        class="controls"\n    >\n        <button\n            tuiIconButton\n            type="button"\n            title="Play/Pause"\n            size="s"\n            shape="rounded"\n            appearance="flat"\n            [icon]="icon"\n            (click)="toggleState()"\n        ></button>\n        <tui-slider\n            class="slider"\n            [max]="video.duration"\n            [(ngModel)]="currentTime"\n        ></tui-slider>\n        <div class="time">\n            <time [attr.datetime]="getTime(currentTime)">\n                {{getTime(currentTime)}}\n            </time>\n            /\n            <time [attr.datetime]="getTime(video.duration)">\n                {{getTime(video.duration)}}\n            </time>\n        </div>\n    </div>\n</div>\n',LESS:":host {\n    display: block;\n}\n\n.video {\n    display: block;\n}\n\n.player {\n    position: relative;\n    width: 20rem;\n}\n\n.controls {\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    padding: 0.75rem 0.75rem 0.5rem;\n    box-sizing: border-box;\n    color: var(--tui-base-01);\n    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.56));\n}\n\n.slider {\n    flex: 1;\n    margin-left: 0.75rem;\n}\n\n.time {\n    flex-shrink: 0;\n    margin-left: 0.75rem;\n    font-size: 0.8125rem;\n}\n"},this.example3={TypeScript:"import {Component, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: 'tui-media-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiMediaExample3 {\n    currentTime = 0;\n    paused = true;\n\n    get icon(): string {\n        return this.paused ? 'tuiIconPlayLarge' : 'tuiIconPauseLarge';\n    }\n\n    toggleState(): void {\n        this.paused = !this.paused;\n    }\n}\n",HTML:'<div class="tui-player">\n    <audio\n        #audio\n        tuiMedia\n        src="assets/media/strays.mp3"\n        [(currentTime)]="currentTime"\n        [(paused)]="paused"\n    ></audio>\n    <button\n        tuiIconButton\n        type="button"\n        shape="rounded"\n        appearance="secondary"\n        title="Play/Pause"\n        [icon]="icon"\n        (click)="toggleState()"\n    ></button>\n    <div>\n        <a\n            tuiLink\n            href="https://waterplea.bandcamp.com/"\n        >\n            Waterplea\n        </a>\n        \u2014 Strays\n        <tui-slider\n            class="slider"\n            [max]="audio.duration"\n            [(ngModel)]="currentTime"\n        ></tui-slider>\n    </div>\n</div>\n',LESS:".tui-player {\n    display: flex;\n    width: 20rem;\n    border-radius: 6.25rem;\n    background: var(--tui-secondary);\n\n    --tui-primary: var(--tui-link);\n    --tui-primary-hover: var(--tui-link-hover);\n    --tui-primary-active: var(--tui-link-hover);\n\n    & > div {\n        flex: 1;\n        margin: 0.375rem 1.75rem 0 0.375rem;\n    }\n}\n"},this.exampleModule="import {TuiMediaModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiMediaModule,\n    ],\n...\n",this.exampleHtml='<video tuiMedia controls>\n  <source *tuiHdpi src="4k.mp4" type="video/mp4">\n  <source src="1080p.mp4" type="video/mp4">\n</video>\n',this.volumeVariants=[1,.5,.25,0],this.playbackRate=1,this.currentTime=0,this.volume=this.volumeVariants[0],this.paused=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-media"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["id","native",3,"content",6,"heading"],["id","video",3,"content",6,"heading"],["id","audio",3,"content",6,"heading"],["tuiMedia","","controls","","src","assets/media/strays.mp3",3,"playbackRate","paused","currentTime","volume","pausedChange","currentTimeChange","volumeChange"],["documentationPropertyName","currentTime","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","paused","documentationPropertyType","boolean","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","playbackRate","documentationPropertyType","number","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","volume","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,k),l["\u0275\u0275template"](2,_,11,3,"ng-template",1),l["\u0275\u0275template"](3,B,6,9,"ng-template",1),l["\u0275\u0275template"](4,G,10,2,"ng-template",1),l["\u0275\u0275elementEnd"]())},directives:[m.a,s.a,p.a,h,T,S,g.a,M.a,P.a,E.a],encapsulation:2,changeDetection:0}),e})(),q=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.FormsModule,u.Cb,u.tb,d.yb,d.ab,c.Db,d.Db,o.j,r.f.forChild(Object(o.q)(Z))]]}),e})()}}]);