(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{sb3Y:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFilterByInputModule",(function(){return J}));var r=n("An66"),o=n("3kIJ"),a=n("1VvW"),i=n("SVIu"),m=n("Qq0t"),l=n("dvRg"),p=n("kZht"),s=n("OZlg"),u=n("e0eB"),c=n("iyc4"),d=n("GdrL"),f=n("71sB"),y=n("fP8s"),_=n("OWJi"),T=n("FlJ/");function h(e,t){if(1&e&&(p["\u0275\u0275element"](0,"tui-data-list-wrapper",3),p["\u0275\u0275pipe"](1,"tuiFilterByInput")),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",p["\u0275\u0275pipeBind1"](1,1,e.items))}}let C=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new o.FormGroup({user:new o.FormControl})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-by-input-example-1"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-input",1),p["\u0275\u0275text"](2," User "),p["\u0275\u0275template"](3,h,2,3,"tui-data-list-wrapper",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formGroup",t.form)},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,f.a,o.NgControlStatus,o.FormControlName,y.a,_.a],pipes:[T.a],encapsulation:2,changeDetection:0}),e})();var g=n("BBBb"),E=n("As/O");function b(e,t){if(1&e&&(p["\u0275\u0275element"](0,"tui-data-list-wrapper",3),p["\u0275\u0275pipe"](1,"tuiFilterByInput")),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",p["\u0275\u0275pipeBind2"](1,1,e.items,e.matcher))}}let x=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new o.FormGroup({user:new o.FormControl}),this.matcher=(e,t)=>e.split(" ").pop().toLowerCase().startsWith(t.toLowerCase())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-by-input-example-2"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-combo-box",1),p["\u0275\u0275text"](2," Search by last name "),p["\u0275\u0275template"](3,b,2,4,"tui-data-list-wrapper",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formGroup",t.form)},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,g.a,E.a,o.NgControlStatus,o.FormControlName,y.a,_.a],pipes:[T.a],encapsulation:2,changeDetection:0}),e})();var I=n("cVyY"),F=n("xcN3"),G=n("9B3E");function S(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"button",4),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function L(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-data-list"),p["\u0275\u0275template"](1,S,2,2,"button",3),p["\u0275\u0275pipe"](2,"tuiFilterByInputWith"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",p["\u0275\u0275pipeBind2"](2,1,e.items,e.stringify))}}let w=(()=>{class e{constructor(){this.items=[{name:"John Cleese"},{name:"Eric Idle"},{name:"Graham Chapman"},{name:"Michael Palin"},{name:"Terry Gilliam"},{name:"Terry Jones"}],this.form=new o.FormGroup({user:new o.FormControl}),this.stringify=({name:e})=>e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-by-input-example-3"]],decls:4,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","user",3,"stringify"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-combo-box",1),p["\u0275\u0275text"](2," User "),p["\u0275\u0275template"](3,L,3,4,"tui-data-list",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.form),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("stringify",t.stringify))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,g.a,E.a,o.NgControlStatus,o.FormControlName,y.a,I.a,r.s,F.a],pipes:[G.a],encapsulation:2,changeDetection:0}),e})();var A=n("u8jZ");const v=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],B=["heading",$localize`:␟e44cbeb2204ab3f18f2fc48550ff5f3154790975␟4997832321224755259:Custom matcher`],P=["heading",$localize`:␟8ea1c797573c9676df67b83748a331433703a6da␟4166966430858792974:Custom stringify`];var M,D,U;function N(e,t){if(1&e&&(p["\u0275\u0275i18nStart"](0,M),p["\u0275\u0275elementStart"](1,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](2,v),p["\u0275\u0275element"](3,"tui-filter-by-input-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](5,B),p["\u0275\u0275element"](6,"tui-filter-by-input-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-doc-example",5),p["\u0275\u0275i18nAttributes"](8,P),p["\u0275\u0275element"](9,"tui-filter-by-input-example-3"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275i18nEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example2),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example3)}}function O(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",6),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,D),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,U),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}M=$localize`:␟bc963fb63de70d2e76559d18d31fe0c914d05a74␟7316437354589455408: Pipe for filtering an array by value entered in a textfield ${"\ufffd#1\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#3\ufffd"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:${"\ufffd/#3\ufffd"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#4\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#6\ufffd"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:${"\ufffd/#6\ufffd"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#7\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\ufffd#9\ufffd"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:${"\ufffd/#9\ufffd"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,M=p["\u0275\u0275i18nPostprocess"](M),D=$localize`:␟a2a28ebef82d20cde2d7eaa173ac3450dc1f83f3␟2012985248889759702: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFilterByInputPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,U=$localize`:␟8dbd1dc3f7db0c83ba44d241601f87aaaccb1e13␟4082988165397565907:Use pipe in template under Taiga UI control:`;let $=(()=>{class e{constructor(){this.exampleModule="import {TuiFilterByInputPipeModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiFilterByInputPipeModule,\n    ],\n...\n",this.exampleHtml='<tui-input [formControl]="user">\n    User\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="items | tuiFilterByInput"\n    ></tui-data-list-wrapper>\n</tui-input>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-filter-by-input-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample1 {\n    readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n    });\n}\n",HTML:'<form\n    class="b-form"\n    [formGroup]="form"\n>\n    <tui-input formControlName="user">\n        User\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items | tuiFilterByInput"\n        ></tui-data-list-wrapper>\n    </tui-input>\n</form>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-filter-by-input-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample2 {\n    readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n    });\n\n    readonly matcher = (name: string, search: string): boolean =>\n        name.split(' ').pop()!.toLowerCase().startsWith(search.toLowerCase());\n}\n",HTML:'<form\n    class="b-form"\n    [formGroup]="form"\n>\n    <tui-combo-box formControlName="user">\n        Search by last name\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items | tuiFilterByInput : matcher"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n</form>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-filter-by-input-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample3 {\n    readonly items = [\n        {name: 'John Cleese'},\n        {name: 'Eric Idle'},\n        {name: 'Graham Chapman'},\n        {name: 'Michael Palin'},\n        {name: 'Terry Gilliam'},\n        {name: 'Terry Jones'},\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n    });\n\n    readonly stringify = ({name}: {name: string}): string => name;\n}\n",HTML:'<form\n    class="b-form"\n    [formGroup]="form"\n>\n    <tui-combo-box\n        formControlName="user"\n        [stringify]="stringify"\n    >\n        User\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor="let item of items | tuiFilterByInputWith : stringify"\n                tuiOption\n                [value]="item"\n            >\n                {{item.name}}\n            </button>\n        </tui-data-list>\n    </tui-combo-box>\n</form>\n'}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-filter-by-input"]],decls:3,vars:0,consts:[["header","FilterByInput","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],["id","matcher",3,"content",6,"heading"],["id","stringify",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,N,10,3,"ng-template",1),p["\u0275\u0275template"](2,O,10,2,"ng-template",2),p["\u0275\u0275elementEnd"]())},directives:[s.a,u.a,c.a,C,x,w,A.a],encapsulation:2,changeDetection:0}),e})(),J=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,o.ReactiveFormsModule,l.P,i.j,l.ab,m.fb,l.J,l.I,a.f.forChild(Object(i.q)($))]]}),e})()}}]);