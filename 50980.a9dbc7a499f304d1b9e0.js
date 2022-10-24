"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[50980],{50980:(sn,m,i)=>{i.r(m),i.d(m,{IconsModule:()=>en});var p=i(12057),C=i(33982),O=i(29851),l=i(72002),n=i(74788),I=i(67350);const f=["tuiIconElectron","tuiIconMaestro","tuiIconMastercard","tuiIconMir","tuiIconVisa"],{LARGE:E,NORMAL:h}=function(){const o=[],e=[],t=new Set(f);for(const s in I)t.has(s)||"tuiCoreIcons"===s||"tuiKitIcons"===s||(s.includes("Large")?o.push(s):e.push(s));return{LARGE:o,NORMAL:e}}(),N={"Description and examples":{"Normal interface icons / 16px":h,"Large interface icons / 24px":E,"Payment systems":f}},v=new n.OlP("[TUI_DEMO_ICONS]: Icons",{factory:()=>N});var F=i(88331),P=i(37159),y=i(66596),S=i(64762),x=i(50506),r=i(36692);class a{constructor(e){this.template=e}}a.\u0275fac=function(e){return new(e||a)(n.Y36(n.Rgc))},a.\u0275dir=n.lG2({type:a,selectors:[["","iconGroup",""]],inputs:{iconGroup:"iconGroup"}}),(0,S.gn)([(0,r.tuiDefaultProp)()],a.prototype,"iconGroup",void 0);var A=i(77027),U=i(41360),D=i(84848),G=i(10200),L=i(68874),_=i(23738),$=i(9358),Z=i(4123),b=i(68165),J=i(47305);function z(o,e){1&o&&(n.TgZ(0,"p"),n._uU(1,"Nothing found"),n.qZA())}const K=function(o,e,t){return{icon:o,group:e,copyPath:t}};function X(o,e){if(1&o&&n.GkF(0,11),2&o){const t=e.$implicit,s=n.oxw(2).$implicit,c=n.oxw();n.Q6J("ngTemplateOutlet",(null==c.iconGroup?null:c.iconGroup.template)||null)("ngTemplateOutletContext",n.kEZ(2,K,t,s,c.copyPath))}}function Q(o,e){if(1&o&&(n.ynx(0),n.TgZ(1,"div",6),n.TgZ(2,"h2",0),n.SDv(3,7),n.qZA(),n._UZ(4,"tui-badge",8),n.qZA(),n.YNc(5,z,2,0,"p",5),n.TgZ(6,"div",9),n.YNc(7,X,1,6,"ng-container",10),n.qZA(),n.BQk()),2&o){const t=e.ngIf,s=n.oxw().$implicit;n.xp6(3),n.pQV(s),n.QtT(3),n.xp6(1),n.Q6J("hoverable",!0)("value",t.length.toString())("status",t.length?"success":"error"),n.xp6(1),n.Q6J("ngIf",!t.length),n.xp6(2),n.Q6J("tuiForAsyncOf",t)}}function Y(o,e){if(1&o&&(n.ynx(0),n.YNc(1,Q,8,6,"ng-container",5),n.ALo(2,"tuiFilter"),n.BQk()),2&o){const t=e.$implicit,s=n.oxw();n.xp6(1),n.Q6J("ngIf",n.Dn7(2,1,s.icons[t],s.matcher,s.search))}}class u{constructor(e,t){this.clipboard=e,this.alertService=t,this.icons={},this.matcher=r.TUI_DEFAULT_MATCHER,this.search="",this.copyPath=s=>{this.clipboard.copy(s),this.alertService.open(`The name ${s} copied`,{status:"success"}).subscribe()}}}u.\u0275fac=function(e){return new(e||u)(n.Y36(x.TU),n.Y36(l.TuiAlertService))},u.\u0275cmp=n.Xpm({type:u,selectors:[["icons-group"]],contentQueries:function(e,t,s){if(1&e&&n.Suo(s,a,5),2&e){let c;n.iGM(c=n.CRH())&&(t.iconGroup=c.first)}},inputs:{icons:"icons"},decls:6,vars:5,consts:function(){let o,e,t;return o=$localize`:␟fd963df1746a55d8fa0fc7610df4df991f847660␟1715668600566441269: Search by name
`,e=$localize`:␟c8c9758c8595df7a1f438b97d0bdb29ee9eaf6b2␟696084215486677597: Input icon name to highlight
`,t=$localize`:␟98637bc43fcb683b0da90675491131c614734d49␟7253553507236379915: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[1,"title"],o,["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],e,[4,"tuiForAsync","tuiForAsyncOf"],[4,"ngIf"],[1,"header-group"],t,["size","m",1,"badge",3,"hoverable","value","status"],[1,"icons"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"tuiForAsync","tuiForAsyncOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]]},template:function(e,t){1&e&&(n.TgZ(0,"h2",0),n.SDv(1,1),n.qZA(),n.TgZ(2,"tui-input",2),n.NdJ("ngModelChange",function(c){return t.search=c}),n.SDv(3,3),n.qZA(),n.YNc(4,Y,3,5,"ng-container",4),n.ALo(5,"tuiKeys")),2&e&&(n.xp6(2),n.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",t.search),n.xp6(2),n.Q6J("tuiForAsyncOf",n.lcZ(5,3,t.icons)))},directives:[A.K,U.w,D.bZ,G.s,L.x,_.JJ,_.On,$.X,p.O5,Z.g,p.tP],pipes:[b.R,J.S],styles:[".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem}"],changeDetection:0}),(0,S.gn)([(0,r.tuiDefaultProp)()],u.prototype,"icons",void 0);var B=i(76189),V=i(57068),M=i(34880);let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["customization-icons-example"]],features:[n._Bn([{provide:l.TUI_SVG_SRC_PROCESSOR,useFactory:()=>e=>{const t="icons8::";return e.startsWith(t)?`assets/icons8/${e.replace(t,"")}.svg`:e}}])],decls:10,vars:0,consts:[[1,"icons8"],[1,"icons8-label","icons8-label-violet"],["src","icons8::android",1,"icons8-icon","icons8-violet"],["src","icons8::ios",1,"icons8-icon","icons8-violet"],[1,"icons8-label","icons8-label-blue"],["src","icons8::android",1,"icons8-icon","icons8-blue"],["src","icons8::ios",1,"icons8-icon","icons8-blue"]],template:function(t,s){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"p",1),n._uU(2,"Violet color"),n.qZA(),n._UZ(3,"tui-svg",2),n._UZ(4,"tui-svg",3),n.qZA(),n.TgZ(5,"div",0),n.TgZ(6,"p",4),n._uU(7,"Blue color"),n.qZA(),n._UZ(8,"tui-svg",5),n._UZ(9,"tui-svg",6),n.qZA())},directives:[M.P],styles:[".icons8[_ngcontent-%COMP%]{margin-bottom:1.5rem}.icons8-icon[_ngcontent-%COMP%]{width:4rem;height:4rem}.icons8-label[_ngcontent-%COMP%]{font-weight:bold;display:inline-block;padding:.25rem .625rem;color:#fff;border-radius:.25rem}.icons8-label-violet[_ngcontent-%COMP%]{background:#a340f1}.icons8-label-blue[_ngcontent-%COMP%]{background:#316df6}.icons8-violet[_ngcontent-%COMP%]{color:#a340f1}.icons8-blue[_ngcontent-%COMP%]{color:#316df6}"]}),o})();var H=i(51904);let j=(()=>{class o{constructor(){this.svg='\n        <svg xmlns="http://www.w3.org/2000/svg"\n     viewBox="0 0 200 200"\n     preserveAspectRatio="xMidYMid slice"\n     id="svg">\n\n    <linearGradient id="grad">\n        <stop class="stop stop--1"\n              stop-color="crimson"\n              offset="0"></stop>\n        <stop class="stop stop--2"\n              stop-color="gold"\n              offset="49%"></stop>\n        <stop class="stop stop--2"\n              stop-color="gold"\n              offset="51%"></stop>\n        <stop class="stop stop--3"\n              stop-color="teal"\n              offset="100%"></stop>\n    </linearGradient>\n\n    <pattern id="pattern"\n              viewBox="0 0 50 50"\n              width="2" height="2"\n             patternUnits="userSpaceOnUse">\n        <path stroke="black"\n              stroke-width="6"\n              d="M0,50 50,0\n                 "></path>\n    </pattern>\n\n    <mask id="mask">\n        <rect width="100%" height="100%"\n          fill="white">\n        </rect>\n        <rect width="100%" height="100%"\n          fill="url(#pattern)">\n        </rect>\n    </mask>\n\n    <g mask="url(#mask)">\n        <text x="50.7%" y="50.7%" dy=".25em"\n          text-anchor="middle"\n          fill="none"\n          stroke="url(#grad)"\n          stroke-width=".25"\n          >Text</text>\n       <text x="50%" y="50%" dy=".25em"\n          text-anchor="middle"\n          fill="url(#grad)"\n          >Text</text>\n    </g>\n</svg>'}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["inline-svg-example"]],features:[n._Bn([{provide:l.TUI_SANITIZER,useClass:H.RB}])],decls:1,vars:1,consts:[[1,"example",3,"src"]],template:function(t,s){1&t&&n._UZ(0,"tui-svg",0),2&t&&n.Q6J("src",s.svg)},directives:[M.P],styles:[".example[_ngcontent-%COMP%]{font-family:Georgia,sans-serif;font-size:5rem;font-weight:bold;width:6.25rem;height:6.25rem;position:relative}.example[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}"]}),o})();function W(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"button",9),n.NdJ("click",function(){const c=n.CHM(t);return c.copyPath(c.icon)}),n.qZA()}if(2&o){const t=e.icon;n.Q6J("icon",t),n.uIk("aria-label",t)}}function w(o,e){if(1&o&&(n.TgZ(0,"p"),n.tHW(1,4),n._UZ(2,"a",5),n._UZ(3,"a",6),n.N_p(),n.qZA(),n.TgZ(4,"icons-group",7),n.YNc(5,W,1,2,"ng-template",8),n.qZA()),2&o){const t=n.oxw().$implicit,s=n.oxw();n.xp6(4),n.Q6J("icons",s.icons[t])}}function q(o,e){1&o&&n.YNc(0,w,6,1,"ng-template",3),2&o&&n.Q6J("pageTab",e.$implicit)}function nn(o,e){if(1&o&&(n.TgZ(0,"tui-doc-example",10),n._UZ(1,"customization-icons-example"),n.qZA(),n.TgZ(2,"tui-doc-example",11),n._UZ(3,"inline-svg-example"),n.qZA()),2&o){const t=n.oxw();n.Q6J("content",t.example1),n.xp6(2),n.Q6J("content",t.example2)}}let on=(()=>{class o{constructor(t){this.icons=t,this.keys=Object.keys(this.icons),this.example1={TypeScript:i.e(98667).then(i.t.bind(i,98667,17)),HTML:i.e(82580).then(i.t.bind(i,82580,17)),LESS:i.e(39993).then(i.t.bind(i,39993,17))},this.example2={TypeScript:i.e(4262).then(i.t.bind(i,4262,17)),LESS:i.e(23567).then(i.t.bind(i,23567,17))}}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(v))},o.\u0275cmp=n.Xpm({type:o,selectors:[["icons"]],decls:3,vars:1,consts:function(){let e,t,s,c,d;return e=$localize`:␟c51604c3bfceeac96ceabb51c1a0caee70f85aa6␟990341683702498937:Icons`,t=$localize`:␟e859e9d6d9e6d5c5673c7e933333b5e38659df82␟2907890725891199102: These icons can be used by name in ${"\ufffd#2\ufffd"}:START_LINK: Svg ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: component and all Taiga UI component accepting icons as input. If you use unsafe icons or inline SVG with linear gradient you need to provide ${"\ufffd#3\ufffd"}:START_LINK_1: TUI_SANITIZER ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: token, which is responsible for removing malicious code from the svg. `,t=n.Zx4(t),s=$localize`:␟1979da7460819153e11d2078244645d94291b69c␟4323470180912194028:Copy`,c=$localize`:␟788b57cb07c04232d638748cd49226ff9e13f8ca␟5793544987096948211:Customization`,d=$localize`:␟eb5831b84b2c39de67e05da802440d5df78dc350␟7271569691352980953:Inline SVG`,[["header",e],[4,"ngFor","ngForOf"],["pageTab","SVG Tips"],[3,"pageTab"],t,["tuiLink","","routerLink","/components/svg"],["tuiLink","","routerLink","/icon-set#sanitizer"],[3,"icons"],["iconGroup",""],["tuiIconButton","","type","button","size","m","title",s,"appearance","icon",1,"icon",3,"icon","click"],["id","base","heading",c,"description","You can customize the path to your icons and inherit color",3,"content"],["id","inline","heading",d,"description","If you use unsafe icons or inline SVG with linear gradient you need to provide TUI_SANITIZER",3,"content"]]},template:function(t,s){1&t&&(n.TgZ(0,"tui-doc-page",0),n.YNc(1,q,1,1,void 0,1),n.YNc(2,nn,4,2,"ng-template",2),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngForOf",s.keys))},directives:[F.q,p.sg,P.n,y.V,C.yS,u,a,B.v,V.f,k,j],styles:[".icon[_ngcontent-%COMP%]{margin:.75rem;border-radius:0}"],changeDetection:0}),o})();var T=i(56757);let tn=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[_.u5,p.ez,T.TuiInputModule,T.TuiBadgeModule,r.TuiForAsyncModule,r.TuiKeysPipeModule,r.TuiFilterPipeModule,l.TuiHintModule,l.TuiTextfieldControllerModule]]}),o})(),en=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[p.ez,l.TuiLinkModule,l.TuiSvgModule,l.TuiButtonModule,O.fV,tn,C.Bz.forChild((0,O.Ve)(on))]]}),o})()}}]);