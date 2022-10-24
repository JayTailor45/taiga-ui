"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[91196],{82880:(E,m,e)=>{e.d(m,{b:()=>p});var c=e(72002),a=e(57750);const r="Bell";class p extends a.O{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["","Some content"],this.hintDirectionVariants=c.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["","off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=[r,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected="",this.inputMode=this.inputModeVariants[0],this.autocomplete="",this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPiechartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownAlignVariants=["left","right"],this.dropdownAlign=c.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=c.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownMinHeight=c.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=c.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight}get customContent(){return this.customContentSelected===r?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(_){_?this.control.disable():this.control.enable()}}},57750:(E,m,e)=>{e.d(m,{O:()=>c});class c{constructor(){this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},91196:(E,m,e)=>{e.r(m),e.d(m,{ExampleTuiInputInlineModule:()=>Y});var c=e(12057),a=e(23738),T=e(33982),r=e(29851),p=e(36692),I=e(72002),_=e(56757),O=e(82880),t=e(74788),f=e(88331),x=e(37159),S=e(57068),g=e(87623),N=e(76189);let P=(()=>{class i{constructor(){this.testForm=new a.cw({testValue1:new a.NI("Hello 1"),testValue2:new a.NI("Hello 2"),testValue3:new a.NI("Hello 3"),testValue4:new a.NI("")})}get toggleContent(){return this.testForm.disabled?"enable (allow editing)":"disable"}get input4Empty(){return""===this.testForm.get("testValue4").value}onToggleClick(){this.testForm.disabled?this.testForm.enable():this.testForm.disable()}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-input-inline-example-1"]],decls:8,vars:4,consts:[[3,"formGroup"],["formControlName","testValue1",1,"input1"],["formControlName","testValue2",1,"input2"],["formControlName","testValue3",1,"input3"],["formControlName","testValue4",1,"input4"],["tuiButton","","type","button","size","m",3,"click"]],template:function(n,l){1&n&&(t.TgZ(0,"form",0),t._UZ(1,"tui-input-inline",1),t._UZ(2,"tui-input-inline",2),t._UZ(3,"tui-input-inline",3),t.TgZ(4,"tui-input-inline",4),t._uU(5," (Show placeholder if control is empty) "),t.qZA(),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){return l.onToggleClick()}),t._uU(7),t.qZA()),2&n&&(t.Q6J("formGroup",l.testForm),t.xp6(4),t.ekj("input4_empty",l.input4Empty),t.xp6(3),t.hij(" ",l.toggleContent,"\n"))},directives:[a._Y,a.JL,a.sg,g.l,a.JJ,a.u,N.v],styles:[".input1[_ngcontent-%COMP%], .input2[_ngcontent-%COMP%], .input3[_ngcontent-%COMP%]{margin-right:.625rem}.input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill)}.input2[_ngcontent-%COMP%]{background:var(--tui-base-09);padding:.625rem;color:var(--tui-base-01);letter-spacing:.625rem;font-size:1.25rem}.input3[_ngcontent-%COMP%]{font-family:monospace;font-weight:bold;background:var(--tui-base-04)}.input4_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),i})();var L=e(20986);function y(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"tui-input-inline",3),t.NdJ("ngModelChange",function(s){return t.CHM(n),t.oxw().heading=s})("focusedChange",function(s){return t.CHM(n),t.oxw().onFocusedChange(s)})("keydown.esc.prevent",function(){return t.CHM(n),t.oxw().toggle()})("keydown.enter.prevent",function(){return t.CHM(n),t.oxw().toggle()}),t._uU(1," Type a heading "),t.qZA()}if(2&i){const n=t.oxw();t.Q6J("ngModel",n.heading)}}function D(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"span"),t._uU(1),t.qZA(),t.TgZ(2,"button",4),t.NdJ("click",function(){return t.CHM(n),t.oxw().toggle()}),t.qZA()}if(2&i){const n=t.oxw();t.xp6(1),t.Oqu(n.heading)}}let U=(()=>{class i{constructor(n){this.alertService=n,this.heading="Page heading",this.editing=!1}toggle(){this.editing=!this.editing}onFocusedChange(n){n||(this.editing=!1,this.saveHeading(this.heading))}saveHeading(n){this.alertService.open(n,{label:"New heading"}).subscribe()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(I.TuiAlertService))},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-input-inline-example-2"]],decls:8,vars:4,consts:[[1,"header"],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.esc.prevent","keydown.enter.prevent",4,"ngIf","ngIfElse"],["text",""],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.esc.prevent","keydown.enter.prevent"],["tuiIconButton","","type","button","title","Edit heading","size","xs","appearance","icon","icon","tuiIconEditLarge",1,"tui-space_left-1",3,"click"]],template:function(n,l){if(1&n&&(t.TgZ(0,"h2",0),t.YNc(1,y,2,1,"tui-input-inline",1),t.YNc(2,D,3,1,"ng-template",null,2,t.W1O),t.qZA(),t.TgZ(4,"p"),t._uU(5," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates!\n"),t.qZA(),t.TgZ(6,"p"),t._uU(7," Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n"),t.qZA()),2&n){const s=t.MAs(3);t.ekj("header_empty",!l.heading),t.xp6(1),t.Q6J("ngIf",l.editing)("ngIfElse",s)}},directives:[c.O5,g.l,L.k,a.JJ,a.On,N.v],styles:[".header[_ngcontent-%COMP%]{height:1.5rem;display:flex;align-items:center;line-height:1.5rem}.header_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),i})();var v=e(46797),F=e(46782);let A=(()=>{class i{constructor(n,l,s,u){this.cd=n,this.destroy$=l,this.zone=s,this.isCypress=u,this.count="0"}ngOnInit(){this.isCypress||(0,v.H)(0,3e3).pipe((0,p.tuiZoneOptimized)(this.zone),(0,p.tuiWatch)(this.cd),(0,F.R)(this.destroy$)).subscribe(n=>{this.count=String(n)})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(t.sBO),t.Y36(p.TuiDestroyService),t.Y36(t.R0b),t.Y36(p.TUI_IS_CYPRESS))},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-input-inline-example-3"]],features:[t._Bn([p.TuiDestroyService])],decls:1,vars:1,consts:[[1,"input1",3,"ngModel","ngModelChange"]],template:function(n,l){1&n&&(t.TgZ(0,"tui-input-inline",0),t.NdJ("ngModelChange",function(u){return l.count=u}),t.qZA()),2&n&&t.Q6J("ngModel",l.count)},directives:[g.l,a.JJ,a.On],styles:[".input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill);padding:.625rem;font-size:1.25rem;text-align:center}"],changeDetection:0}),i})();var R=e(31823),Z=e(20546),V=e(17023),$=e(76349);function b(i,o){if(1&i&&(t.TgZ(0,"p"),t.SDv(1,2),t.qZA(),t.TgZ(2,"tui-doc-example",3),t._UZ(3,"tui-input-inline-example-1"),t.qZA(),t.TgZ(4,"tui-doc-example",4),t._UZ(5,"tui-input-inline-example-2"),t.qZA(),t.TgZ(6,"tui-doc-example",5),t._UZ(7,"tui-input-inline-example-3"),t.qZA()),2&i){const n=t.oxw();t.xp6(2),t.Q6J("content",n.example1),t.xp6(2),t.Q6J("content",n.example2),t.xp6(2),t.Q6J("content",n.example3)}}function J(i,o){if(1&i&&(t.TgZ(0,"tui-input-inline",9),t._uU(1," Placeholder "),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("formControl",n.control)("maxLength",n.maxLength)}}function H(i,o){1&i&&(t.tHW(0,10),t._UZ(1,"code"),t.N_p())}function z(i,o){1&i&&t.SDv(0,11)}function G(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"tui-doc-demo",6),t.YNc(1,J,2,2,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,H,2,0,"ng-template",7),t.NdJ("documentationPropertyValueChange",function(s){return t.CHM(n),t.oxw().disabled=s}),t.YNc(4,z,1,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(s){return t.CHM(n),t.oxw().maxLength=s}),t.qZA()}if(2&i){const n=t.oxw();t.Q6J("control",n.control),t.xp6(3),t.Q6J("documentationPropertyValue",n.disabled),t.xp6(1),t.Q6J("documentationPropertyValues",n.maxLengthVariants)("documentationPropertyValue",n.maxLength)}}function X(i,o){if(1&i&&(t.TgZ(0,"ol",12),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,13),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",14),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.SDv(8,15),t.qZA(),t._UZ(9,"tui-doc-code",16),t.qZA(),t.qZA()),2&i){const n=t.oxw();t.xp6(5),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let B=(()=>{class i extends O.b{constructor(){super(...arguments),this.exampleModule=e.e(35625).then(e.t.bind(e,35625,17)),this.exampleHtml=e.e(25662).then(e.t.bind(e,25662,17)),this.example1={TypeScript:e.e(42899).then(e.t.bind(e,42899,17)),HTML:e.e(79511).then(e.t.bind(e,79511,17)),LESS:e.e(60995).then(e.t.bind(e,60995,17))},this.example2={TypeScript:e.e(1161).then(e.t.bind(e,1161,17)),HTML:e.e(24460).then(e.t.bind(e,24460,17)),LESS:e.e(47922).then(e.t.bind(e,47922,17))},this.example3={TypeScript:e.e(71416).then(e.t.bind(e,71416,17)),HTML:e.e(95560).then(e.t.bind(e,95560,17)),LESS:e.e(30955).then(e.t.bind(e,30955,17))},this.control=new a.NI("111",a.kI.required),this.maxLengthVariants=[10],this.maxLength=null}}return i.\u0275fac=function(){let o;return function(l){return(o||(o=t.n5z(i)))(l||i)}}(),i.\u0275cmp=t.Xpm({type:i,selectors:[["example-tui-input-inline"]],features:[t.qOj],decls:4,vars:0,consts:function(){let o,n,l,s,u,h,C,M;return o=$localize`:␟5da06d4e254872871f93db1252ddb86487e6b931␟7522149816559254132:Inline field`,n=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,l=$localize`:␟5f23eeae13ddbd4994e42211e4e333c68c629b0c␟565621886775524341:In heading`,s=$localize`:␟4e5b66db067166d3b22aac82478bb814d41fbeed␟2598963736286288115:Dynamic counter increment (3 sec)`,u=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,h=$localize`:␟ceced99e65b9b5e60ca5a4e3c8f63b267c4b225d␟4970794608247875259: Maximum number of symbols `,C=$localize`:␟31d5e0d4a586ee251415e9a80ed121cc226bef9c␟356958347911905655: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputInlineModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,M=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputInline","package","KIT","type","components"],["pageTab",""],o,["id","base","heading",n,3,"content"],["id","in-heading","heading",l,3,"content"],["id","dynamic-increment","heading",s,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"input",3,"formControl","maxLength"],u,h,[1,"b-demo-steps"],C,["filename","myComponent.module.ts",3,"code"],M,["filename","myComponent.template.html",3,"code"]]},template:function(n,l){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,b,8,3,"ng-template",1),t.YNc(2,G,5,4,"ng-template",1),t.YNc(3,X,10,2,"ng-template",1),t.qZA())},directives:[f.q,x.n,S.f,P,U,A,R.F,Z.z,V.B,g.l,a.JJ,a.oH,$.c],styles:[".input[_ngcontent-%COMP%]{max-width:20rem;border-bottom:1px solid var(--tui-base-09)}"]}),i})(),Y=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,a.u5,a.UX,I.TuiButtonModule,_.TuiInputInlineModule,p.TuiAutoFocusModule,r.fV,T.Bz.forChild((0,r.Ve)(B))]]}),i})()}}]);