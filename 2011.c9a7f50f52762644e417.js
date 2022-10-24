"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[2011],{2011:(h,O,e)=>{e.r(O),e.d(O,{ExampleTuiCopyProcessorModule:()=>I});var r=e(12057),i=e(23738),u=e(33982),p=e(29851),T=e(36692),d=e(56757),o=e(74788),P=e(88331),R=e(37159),_=e(57068),S=e(72002),m=e(16753),g=e(13735),M=e(93157);let f=(()=>{class t{constructor(n,s){this.format=n,this.alertService=s,this.value=12345.67,this.numberProcessor=l=>l.replace(this.format.decimalSeparator,".").replace(new RegExp(this.format.thousandSeparator,"g"),""),this.textProcessor=l=>l.toUpperCase()}onCopy(n){var s,l;this.alertService.open(null!==(l=null===(s=n.clipboardData)||void 0===s?void 0:s.getData("text/plain"))&&void 0!==l?l:"").subscribe()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(S.TUI_NUMBER_FORMAT),o.Y36(S.TuiAlertService))},t.\u0275cmp=o.Xpm({type:t,selectors:[["tui-copy-processor-example-1"]],hostBindings:function(n,s){1&n&&o.NdJ("copy",function(E){return s.onCopy(E)})},decls:4,vars:3,consts:[[1,"tui-space_bottom-2",3,"tuiCopyProcessor","ngModel","ngModelChange"],[3,"tuiCopyProcessor"]],template:function(n,s){1&n&&(o.TgZ(0,"tui-input-number",0),o.NdJ("ngModelChange",function(E){return s.value=E}),o._uU(1," Copy this\n"),o.qZA(),o.TgZ(2,"div",1),o._uU(3,"Try copy this text"),o.qZA()),2&n&&(o.Q6J("tuiCopyProcessor",s.numberProcessor)("ngModel",s.value),o.xp6(2),o.Q6J("tuiCopyProcessor",s.textProcessor))},directives:[m.q,g.g,M.Z,i.JJ,i.On],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),t})();var y=e(76349);function D(t,C){if(1&t&&(o.TgZ(0,"p"),o.SDv(1,3),o.qZA(),o.TgZ(2,"tui-doc-example",4),o._UZ(3,"tui-copy-processor-example-1"),o.qZA()),2&t){const n=o.oxw();o.xp6(2),o.Q6J("content",n.example1)}}function N(t,C){if(1&t&&(o.TgZ(0,"ol",5),o.TgZ(1,"li"),o.TgZ(2,"p"),o.tHW(3,6),o._UZ(4,"code"),o.N_p(),o.qZA(),o._UZ(5,"tui-doc-code",7),o.qZA(),o.TgZ(6,"li"),o.TgZ(7,"p"),o.SDv(8,8),o.qZA(),o._UZ(9,"tui-doc-code",9),o.qZA(),o.qZA()),2&t){const n=o.oxw();o.xp6(5),o.Q6J("code",n.exampleModule),o.xp6(4),o.Q6J("code",n.exampleHtml)}}let x=(()=>{class t{constructor(){this.example1={TypeScript:e.e(91197).then(e.t.bind(e,91197,17)),HTML:e.e(24975).then(e.t.bind(e,24975,17))},this.exampleModule=e.e(8074).then(e.t.bind(e,8074,17)),this.exampleHtml=e.e(44146).then(e.t.bind(e,14817,17))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["example-tui-copy-processor"]],decls:3,vars:0,consts:function(){let C,n,s,l,E,a;return C=$localize`:␟37561c7adb608b3f1dd2646ff27670a6a18c7ab0␟4194549152426589533:CopyProcessor`,n=$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`,s=$localize`:␟a0aef0f19512c3fb91ea516052bce537ce0f7ece␟8034929292308673999:Directive is used to processed text when coping`,l=$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`,E=$localize`:␟415953669748407dbf44a8cbc7e8ef893a56fec9␟6368157042718938776: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCopyProcessorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,a=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",C,"package","CDK","type","directives"],["pageTab",""],["pageTab",n],s,["id","usage","heading",l,3,"content"],[1,"b-demo-steps"],E,["filename","myComponent.module.ts",3,"code"],a,["filename","myComponent.template.html",3,"code"]]},template:function(n,s){1&n&&(o.TgZ(0,"tui-doc-page",0),o.YNc(1,D,4,1,"ng-template",1),o.YNc(2,N,10,2,"ng-template",2),o.qZA())},directives:[P.q,R.n,_.f,f,y.c],encapsulation:2,changeDetection:0}),t})(),I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.ez,i.u5,d.TuiInputNumberModule,T.TuiCopyProcessorModule,p.fV,u.Bz.forChild((0,p.Ve)(x))]]}),t})()}}]);