(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25978],{25978:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiItemsWithMoreModule:()=>Z});var n=i(46556),o=i(95829),r=i(65046),s=i(20682),u=i(57760),a=i(96112),c=i(39508),m=i(3064),l=i(64951),d=i(99540),p=i(96362),h=i(43058),f=i(92840),g=i(73803),F=i(80199),G=i(21848),b=i(35379),E=i(66399),k=i(93815),M=i(34481);function y(e,t){if(1&e&&c.nrm(0,"tui-tag",4),2&e){const e=c.XpG().$implicit;c.Y8G("value",e)}}function v(e,t){1&e&&(c.qex(0),c.DNE(1,y,1,1,"tui-tag",3),c.bVm())}function x(e,t){if(1&e&&c.EFF(0),2&e){const e=t.$implicit,i=c.XpG();c.SpI(" and ",i.getRemaining(e)," more ")}}let V=(()=>{var e;class t{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.required=3}getRemaining(e){const t=e<this.required?e+2:e+1;return this.items.length-t}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.VBU({type:e,selectors:[["tui-items-with-more-example-1"]],decls:3,vars:2,consts:[[3,"required"],[4,"ngFor","ngForOf"],["tuiMore",""],["size","m","class","tui-space_right-1",3,"value",4,"tuiItem"],["size","m",1,"tui-space_right-1",3,"value"]],template:function(e,t){1&e&&(c.j41(0,"tui-items-with-more",0),c.DNE(1,v,2,0,"ng-container",1),c.DNE(2,x,1,1,"ng-template",2),c.k0s()),2&e&&(c.Y8G("required",t.required),c.R7$(1),c.Y8G("ngForOf",t.items))},dependencies:[n.Sq,m.u,d.J,p.v,h.R,f.$],encapsulation:2,changeDetection:0}),t})();var C=i(79243),j=i(37673),T=i(92852),w=i(37290),D=i(7311),R=i(62744),$=i(39373),N=i(83879),I=i(86647),P=i(29591);function q(e,t){if(1&e){const e=c.RV6();c.j41(0,"tui-checkbox-block",4),c.bIt("ngModelChange",(function(){c.eBV(e);const t=c.XpG().index,i=c.XpG();return c.Njj(i.onModelChange(t))})),c.EFF(1),c.k0s()}if(2&e){const e=c.XpG(),t=e.index,i=e.$implicit,n=c.XpG();c.Y8G("hideCheckbox",!0)("ngModel",n.value[t]),c.R7$(1),c.SpI(" ",i," ")}}function Y(e,t){1&e&&(c.qex(0),c.DNE(1,q,2,3,"tui-checkbox-block",3),c.bVm())}function X(e,t){if(1&e){const e=c.RV6();c.j41(0,"button",11),c.bIt("click",(function(){c.eBV(e);const t=c.XpG().index,i=c.XpG(3);return c.Njj(i.onModelChange(t))})),c.EFF(1),c.nrm(2,"tui-svg",12),c.k0s()}if(2&e){const e=c.XpG(),t=e.$implicit,i=e.index,n=c.XpG(3);c.R7$(1),c.SpI(" ",t," "),c.R7$(1),c.AVh("_hidden",!n.value[i])}}function S(e,t){if(1&e&&(c.qex(0),c.DNE(1,X,3,3,"button",10),c.bVm()),2&e){const e=t.index,i=c.XpG(2).$implicit;c.R7$(1),c.Y8G("ngIf",e>i)}}function L(e,t){if(1&e&&(c.j41(0,"tui-data-list",9),c.DNE(1,S,2,1,"ng-container",1),c.k0s()),2&e){const e=c.XpG(2);c.R7$(1),c.Y8G("ngForOf",e.items)}}function _(e,t){if(1&e&&(c.j41(0,"tui-hosted-dropdown",5)(1,"button",6),c.EFF(2," More "),c.j41(3,"tui-badge",7),c.EFF(4),c.k0s()(),c.DNE(5,L,2,1,"ng-template",null,8,c.C5r),c.k0s()),2&e){const e=t.$implicit,i=c.sdS(6),n=c.XpG();c.Y8G("content",i),c.R7$(4),c.JRh(n.items.length-e-1)}}let B=(()=>{var e;class t{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.value=this.items.map(C.ALWAYS_FALSE_HANDLER)}onModelChange(e){this.value[e]=!this.value[e]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.VBU({type:e,selectors:[["tui-items-with-more-example-2"]],decls:3,vars:2,consts:[["tuiGroup","",3,"collapsed"],[4,"ngFor","ngForOf"],["tuiMore",""],["size","m","class","item",3,"hideCheckbox","ngModel","ngModelChange",4,"tuiItem"],["size","m",1,"item",3,"hideCheckbox","ngModel","ngModelChange"],["tuiDropdownAlign","right",1,"item",3,"content"],["appearance","whiteblock","size","m","tuiButton","","type","button",1,"item"],[1,"tui-space_left-2"],["dropdown",""],["size","l"],["tuiOption","",3,"click",4,"ngIf"],["tuiOption","",3,"click"],["src","tuiIconCheck",1,"tui-space_left-2"]],template:function(e,t){1&e&&(c.j41(0,"tui-items-with-more",0),c.DNE(1,Y,2,0,"ng-container",1),c.DNE(2,_,7,2,"ng-template",2),c.k0s()),2&e&&(c.Y8G("collapsed",!0),c.R7$(1),c.Y8G("ngForOf",t.items))},dependencies:[n.Sq,n.bT,o.BC,o.vS,j.J,d.J,p.v,h.R,f.$,T.S,w.p,D.o,R.HY,$.S,N.u,I.b,P._],styles:[".item[_ngcontent-%COMP%]{border-radius:inherit;font-weight:400}._hidden[_ngcontent-%COMP%]{visibility:hidden}"],changeDetection:0}),t})();function z(e,t){if(1&e&&(c.j41(0,"div",2),c.EFF(1,"Component to hide overflown items behind custom content."),c.k0s(),c.j41(2,"tui-doc-example",3)(3,"tui-notification",2),c.EFF(4," Resize the screen to see extra items disappear "),c.k0s(),c.nrm(5,"tui-items-with-more-example-1"),c.k0s(),c.j41(6,"tui-doc-example",4),c.nrm(7,"tui-items-with-more-example-2"),c.k0s()),2&e){const e=c.XpG();c.R7$(2),c.Y8G("content",e.example1)("fullsize",!0),c.R7$(4),c.Y8G("content",e.example2)("fullsize",!0)}}function J(e,t){if(1&e&&c.nrm(0,"tui-tag",11),2&e){const e=c.XpG().$implicit;c.Y8G("value",e)}}function O(e,t){1&e&&(c.qex(0),c.DNE(1,J,1,1,"tui-tag",10),c.bVm())}function A(e,t){1&e&&(c.j41(0,"span"),c.EFF(1,"and now for something completely different!"),c.k0s())}function H(e,t){1&e&&c.EFF(0," Artificial limit on visible items ")}function W(e,t){1&e&&c.EFF(0," Index of an item that must remain visible ")}function U(e,t){if(1&e){const e=c.RV6();c.j41(0,"tui-doc-demo")(1,"tui-items-with-more",5),c.DNE(2,O,2,0,"ng-container",6),c.DNE(3,A,2,0,"span",7),c.k0s()(),c.j41(4,"p"),c.EFF(5," Use "),c.j41(6,"code"),c.EFF(7,"tuiItem"),c.k0s(),c.EFF(8," directive for each item "),c.k0s(),c.j41(9,"p"),c.EFF(10," Use "),c.j41(11,"code"),c.EFF(12,"tuiMore"),c.k0s(),c.EFF(13,' directive for "See more" content '),c.k0s(),c.j41(14,"tui-doc-documentation"),c.DNE(15,H,1,0,"ng-template",8),c.bIt("documentationPropertyValueChange",(function(t){c.eBV(e);const i=c.XpG();return c.Njj(i.itemsLimit=t)})),c.DNE(16,W,1,0,"ng-template",9),c.bIt("documentationPropertyValueChange",(function(t){c.eBV(e);const i=c.XpG();return c.Njj(i.required=t)})),c.k0s()}if(2&e){const e=c.XpG();c.R7$(1),c.Y8G("itemsLimit",e.itemsLimit)("required",e.required),c.R7$(1),c.Y8G("ngForOf",e.items),c.R7$(13),c.Y8G("documentationPropertyValues",e.itemsLimitVariants)("documentationPropertyValue",e.itemsLimit),c.R7$(1),c.Y8G("documentationPropertyValues",e.requiredVariants)("documentationPropertyValue",e.required)}}function K(e,t){if(1&e&&(c.j41(0,"ol",12)(1,"li")(2,"p"),c.EFF(3," Import "),c.j41(4,"code"),c.EFF(5,"TuiItemsWithMoreModule"),c.k0s(),c.EFF(6," into a module where you want to use our component "),c.k0s(),c.nrm(7,"tui-doc-code",13),c.k0s(),c.j41(8,"li")(9,"p"),c.EFF(10,"Add to the template:"),c.k0s(),c.nrm(11,"tui-doc-code",14),c.k0s()()),2&e){const e=c.XpG();c.R7$(7),c.Y8G("code",e.exampleModule),c.R7$(4),c.Y8G("code",e.exampleHtml)}}let Q=(()=>{var e;class t{constructor(){this.exampleModule=i.e(57467).then(i.t.bind(i,57467,17)),this.exampleHtml=i.e(65761).then(i.t.bind(i,65761,17)),this.example1={TypeScript:i.e(83503).then(i.t.bind(i,83503,17)),HTML:i.e(19439).then(i.t.bind(i,41820,17))},this.example2={TypeScript:i.e(11698).then(i.t.bind(i,11698,17)),HTML:i.e(3046).then(i.t.bind(i,3046,17)),LESS:i.e(87634).then(i.t.bind(i,87634,17))},this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.requiredVariants=[-1,2,4],this.itemsLimitVariants=[1/0,4,2],this.required=this.requiredVariants[0],this.itemsLimit=this.itemsLimitVariants[0]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.VBU({type:e,selectors:[["example-items-with-more"]],decls:4,vars:0,consts:[["header","ItemsWithMore","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["id","base","heading","Basic",3,"content","fullsize"],["id","dropdown","heading","Dropdown",3,"content","fullsize"],[3,"itemsLimit","required"],[4,"ngFor","ngForOf"],[4,"tuiMore"],["documentationPropertyMode","input","documentationPropertyName","itemsLimit","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","required","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["class","tui-space_right-2",3,"value",4,"tuiItem"],[1,"tui-space_right-2",3,"value"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(c.j41(0,"tui-doc-page",0),c.DNE(1,z,8,4,"ng-template",1),c.DNE(2,U,17,7,"ng-template",1),c.DNE(3,K,12,2,"ng-template",1),c.k0s())},dependencies:[n.Sq,m.u,l.v,d.J,p.v,h.R,f.$,g.t,F.p,G.c,b.W,E.P,k.T,M.o,V,B],encapsulation:2,changeDetection:0}),t})(),Z=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=c.$C({type:e}),e.ɵinj=c.G2t({imports:[n.MD,o.YN,a.TuiTagModule,u.TuiNotificationModule,a.TuiItemsWithMoreModule,a.TuiCheckboxBlockModule,u.TuiHostedDropdownModule,u.TuiDropdownModule,u.TuiButtonModule,u.TuiDataListModule,u.TuiSvgModule,s.lK,r.iI.forChild((0,s.CC)(Q))]}),t})()}}]);