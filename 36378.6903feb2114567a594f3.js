"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[36378],{36378:(K,_,n)=>{n.r(_),n.d(_,{ExampleTuiArcChartModule:()=>W});var E=n(12057),u=n(23738),C=n(33982),M=n(50179),S=n(23121),d=n(29851),h=n(56757),e=n(74788),x=n(88331),O=n(37159),v=n(57068),f=n(65009),N=n(10383),m=n(48001),P=n(16996);let I=(()=>{class a{constructor(){this.value=[40,30,20,10],this.activeItemIndex=NaN}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["tui-arc-chart-example-1"]],decls:13,vars:8,consts:[[1,"b-form",3,"ngModel","ngModelChange"],[1,"wrapper"],["size","m",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","l",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","xl",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"tui-input-count",0),e.NdJ("ngModelChange",function(o){return i.activeItemIndex=o}),e._uU(1," activeItemIndex\n"),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"tui-arc-chart",2),e.NdJ("activeItemIndexChange",function(o){return i.activeItemIndex=o}),e._uU(4," Total value "),e.qZA(),e.TgZ(5,"tui-arc-chart",3),e.NdJ("activeItemIndexChange",function(o){return i.activeItemIndex=o}),e._uU(6," Total value "),e.TgZ(7,"div"),e._uU(8,"Label"),e.qZA(),e.qZA(),e.TgZ(9,"tui-arc-chart",4),e.NdJ("activeItemIndexChange",function(o){return i.activeItemIndex=o}),e._UZ(10,"tui-money",5),e.TgZ(11,"div"),e._uU(12,"Not bad!"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("ngModel",i.activeItemIndex),e.xp6(3),e.Q6J("value",i.value)("activeItemIndex",i.activeItemIndex),e.xp6(2),e.Q6J("value",i.value)("activeItemIndex",i.activeItemIndex),e.xp6(4),e.Q6J("value",i.value)("activeItemIndex",i.activeItemIndex),e.xp6(1),e.Q6J("value",123456))},directives:[f.E,N.a,u.JJ,u.On,m.O,P.o],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem;--tui-chart-0: var(--tui-support-12);--tui-chart-1: var(--tui-support-01);--tui-chart-2: var(--tui-support-03);--tui-chart-3: var(--tui-support-09)}"],changeDetection:0}),a})();var y=n(36692);const H=function(){return[40]},L=function(){return[20]};let D=(()=>{class a{constructor(){this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.sum=(0,y.tuiSum)(...this.value)}getValue(t){return Number.isNaN(t)?this.sum:this.value[t]}getLabel(t){return Number.isNaN(t)?"Total":this.labels[t]}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["tui-arc-chart-example-2"]],decls:6,vars:4,consts:[[1,"wrapper"],["size","l",3,"value"],["size","l","minLabel","","maxLabel","",1,"stacked",3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"tui-arc-chart",1),e.TgZ(2,"tui-arc-chart",2),e._uU(3," +20% "),e.TgZ(4,"div"),e._uU(5,"For filling in last name"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("value",e.DdM(2,H)),e.xp6(1),e.Q6J("value",e.DdM(3,L)))},directives:[m.O],styles:[".wrapper[_ngcontent-%COMP%]{position:relative;--tui-chart-0: var(--tui-support-03)}.stacked[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;--tui-secondary: transparent;--tui-chart-0: var(--tui-support-04)}"],changeDetection:0}),a})();var $=n(31823),J=n(20546),V=n(17023),Z=n(76349);function z(a,l){if(1&a&&(e.TgZ(0,"tui-doc-example",2),e._UZ(1,"tui-arc-chart-example-1"),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-arc-chart-example-2"),e.qZA()),2&a){const t=e.oxw();e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2)}}function U(a,l){1&a&&e.SDv(0,11)}function F(a,l){1&a&&e.SDv(0,12)}function b(a,l){1&a&&e.SDv(0,13)}function X(a,l){1&a&&e.SDv(0,14)}function G(a,l){1&a&&e.SDv(0,15)}function Q(a,l){1&a&&e.SDv(0,16)}function Y(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"tui-arc-chart",4),e.NdJ("activeItemIndexChange",function(c){return e.CHM(t),e.oxw().activeItemIndex=c}),e.qZA(),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,U,1,0,"ng-template",5),e.NdJ("documentationPropertyValueChange",function(c){return e.CHM(t),e.oxw().max=c}),e.YNc(4,F,1,0,"ng-template",6),e.NdJ("documentationPropertyValueChange",function(c){return e.CHM(t),e.oxw().maxLabel=c}),e.YNc(5,b,1,0,"ng-template",7),e.NdJ("documentationPropertyValueChange",function(c){return e.CHM(t),e.oxw().minLabel=c}),e.YNc(6,X,1,0,"ng-template",8),e.NdJ("documentationPropertyValueChange",function(c){return e.CHM(t),e.oxw().size=c}),e.YNc(7,G,1,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(c){return e.CHM(t),e.oxw().value=c}),e.YNc(8,Q,1,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(c){return e.CHM(t),e.oxw().activeItemIndex=c}),e.qZA()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("max",t.max)("maxLabel",t.maxLabel)("minLabel",t.minLabel)("size",t.size)("value",t.value)("activeItemIndex",t.activeItemIndex),e.xp6(2),e.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("documentationPropertyValue",t.maxLabel),e.xp6(1),e.Q6J("documentationPropertyValue",t.minLabel),e.xp6(1),e.Q6J("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size),e.xp6(1),e.Q6J("documentationPropertyValues",t.valueVariants)("documentationPropertyValue",t.value),e.xp6(1),e.Q6J("documentationPropertyValue",t.activeItemIndex)}}function B(a,l){if(1&a&&(e.TgZ(0,"ol",17),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,18),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",19),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,20),e.qZA(),e._UZ(9,"tui-doc-code",21),e.qZA(),e.qZA()),2&a){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(4),e.Q6J("code",t.exampleHtml)}}let j=(()=>{class a{constructor(){this.exampleModule=n.e(85776).then(n.t.bind(n,85776,17)),this.exampleHtml=n.e(1557).then(n.t.bind(n,1557,17)),this.example1={TypeScript:n.e(96278).then(n.t.bind(n,96278,17)),HTML:n.e(57749).then(n.t.bind(n,57749,17)),LESS:n.e(63570).then(n.t.bind(n,63570,17))},this.example2={TypeScript:n.e(6726).then(n.t.bind(n,66156,17)),HTML:n.e(35868).then(n.t.bind(n,35868,17)),LESS:n.e(36077).then(n.t.bind(n,36077,17))},this.valueVariants=[[42],[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.maxVariants=[100,1e4,5e4],this.max=this.maxVariants[0],this.sizeVariants=["m","l","xl"],this.size=this.sizeVariants[0],this.minLabel="0%",this.maxLabel="100%",this.activeItemIndex=NaN}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["example-tui-arc-chart"]],decls:4,vars:0,consts:function(){let l,t,i,c,o,p,T,s,A,g,R;return l=$localize`:␟37b713ce5aea22bdc50004ec0f09e17107b9787c␟433977682549774777:ArcChart`,t=$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`,i=$localize`:␟acad9ee00b2dbfb003d340797809ce9fe3e1ec3d␟1991766769963454924:Stacked`,c=$localize`:␟5f25cd8a9234b487725d1fa48d60e56ef72a2373␟5999590176850087451: Maximum value `,o=$localize`:␟17d58754566edc76573ee313c71d6ecc8dca894b␟366902072652186200: Label for maximum value `,p=$localize`:␟e606409e619e6757d5e8cc2834019a4604d04a87␟4901338580057825614: Label for minimum value `,T=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,s=$localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `,A=$localize`:␟c479266fb0898c58ca78245acf0a5e0907b25eb2␟4355316937676670930: Index of selected arc `,g=$localize`:␟2779bd2d7dd07772646294f6006a05d0ab57543c␟5154896617161139394: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiArcChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,R=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",l,"package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading",t,3,"content"],["id","stacked","heading",i,3,"content"],[1,"chart",3,"max","maxLabel","minLabel","size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],c,o,p,T,s,A,[1,"b-demo-steps"],g,["filename","myComponent.module.ts",3,"code"],R,["filename","myComponent.template.html",3,"code"]]},template:function(t,i){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,z,4,2,"ng-template",1),e.YNc(2,Y,9,15,"ng-template",1),e.YNc(3,B,10,2,"ng-template",1),e.qZA())},directives:[x.q,O.n,v.f,I,D,$.F,m.O,J.z,V.B,Z.c],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),a})(),W=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[E.ez,C.Bz,u.u5,h.TuiInputCountModule,M.TuiArcChartModule,S.TuiMoneyModule,d.fV,C.Bz.forChild((0,d.Ve)(j))]]}),a})()}}]);