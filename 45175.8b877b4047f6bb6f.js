(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[45175],{45175:(t,e,n)=>{n.r(e),n.d(e,{IconsModule:()=>pt});var o=n(46556),i=n(95829),c=n(65046),r=n(67939),s=n(20682),u=n(79243),a=n(57760),l=n(96112),p=n(14309),d=n(33809),m=n(86779),g=n(39508),h=n(87230);const f=["tuiIconRedo","tuiIconRefresh","tuiIconRefreshLarge","tuiIconSortUp","tuiIconSortDown","tuiIconUndo"],I=["tuiIconElectron","tuiIconElectronMono","tuiIconCirrus","tuiIconMaestro","tuiIconMaestroMono","tuiIconMastercard","tuiIconMastercardMono","tuiIconMir","tuiIconMirMono","tuiIconVisa","tuiIconVisaMono","tuiIconUnionPay","tuiIconJCB","tuiIconPayPal","tuiIconAmex","tuiIconDinersClub","tuiIconDiscover","tuiIconHumo","tuiIconRuPay","tuiIconUzcard","tuiIconVerve"],y=["tuiIconApplePay","tuiIconGooglePay","tuiIconSamsungPay","tuiIconWorldPay","tuiIconAliPay","tuiIconAmazonPay","tuiIconAndroidPay"],v=(0,u.tuiCreateTokenFromFactory)((()=>(t=>{const{LARGE:e,NORMAL:n}=function(){const t=[],e=[],n=new Set([...I,...y]);for(const[o]of Object.entries(h))n.has(o)||"tuiCoreIcons"===o||"tuiKitIcons"===o||(o.includes("Large")?t.push(o):o.includes("Outline")||e.push(o));return{LARGE:t,NORMAL:e}}();return{"Description and examples":{"Normal / 16px":n.filter((e=>!t(e)&&!f.includes(e))),"Large / 24px":e.filter((e=>!t(e)&&!f.includes(e))),"Payment systems":I,"Payment services":y}}})((0,g.WQX)(a.TUI_SVG_OPTIONS).deprecated)));var b=n(64951),T=n(7641),F=n(29591),M=n(39373),C=n(73803),k=n(21848),P=n(35379),G=n(66399),E=n(93815),w=n(85408),x=n(14661),O=n(31491),j=n(9147),V=n(25760);let $=(()=>{var t;class e{constructor(t){this.template=t}}return(t=e).ɵfac=function(e){return new(e||t)(g.rXU(g.C4Q))},t.ɵdir=g.FsC({type:t,selectors:[["","iconGroup",""]],inputs:{iconGroup:"iconGroup"}}),e})();var R=n(89676),S=n(97138),N=n(37290),L=n(41376),D=n(59721),X=n(31943),_=n(14064),U=n(84045),A=n(1058),Y=n(69506);function B(t,e){1&t&&(g.j41(0,"p",9),g.EFF(1," Nothing found "),g.k0s())}const z=function(){return{isIntersecting:!1}},H=function(t,e,n,o){return{icon:t,group:e,copyPath:n,entry:o}};function q(t,e){if(1&t&&g.eu8(0,10),2&t){const t=e.$implicit,n=g.XpG(2).$implicit,o=g.XpG();g.Y8G("ngTemplateOutlet",(null==o.iconGroup?null:o.iconGroup.template)||null)("ngTemplateOutletContext",g.ziG(3,H,t,n,o.copyPath,g.lJ4(2,z)))}}function W(t,e){if(1&t&&(g.qex(0),g.j41(1,"div",4)(2,"h2",0),g.EFF(3),g.k0s(),g.j41(4,"tui-badge",5),g.EFF(5),g.k0s()(),g.DNE(6,B,2,0,"p",6),g.j41(7,"div",7),g.DNE(8,q,1,8,"ng-container",8),g.k0s(),g.bVm()),2&t){const t=e.ngIf,n=g.XpG().$implicit,o=g.XpG();g.R7$(3),g.SpI(" ",n," "),g.R7$(1),g.Y8G("appearance",t.length?"success":"error"),g.R7$(1),g.SpI(" ",t.length.toString()," "),g.R7$(1),g.Y8G("ngIf",!t.length),g.R7$(1),g.xc7("--tui-text-01-night",o.color)("--tui-text-01",o.color),g.R7$(1),g.Y8G("ngForOf",t)}}function J(t,e){if(1&t&&(g.qex(0),g.DNE(1,W,9,9,"ng-container",3),g.nI1(2,"tuiFilter"),g.nI1(3,"async"),g.bVm()),2&t){const t=e.$implicit,n=g.XpG();let o;g.R7$(1),g.Y8G("ngIf",g.brH(2,1,n.icons[t],n.matcher,null!==(o=g.bMT(3,5,n.search$))&&void 0!==o?o:""))}}const K=["*"];let Q,Z,tt=(()=>{var t;class e{constructor(t,e,n,o,c){this.clipboard=t,this.alerts=e,this.route=n,this.router=o,this.destroy$=c,this.icons={},this.color=null,this.matcher=u.TUI_DEFAULT_MATCHER,this.control=new i.MJ(""),this.search$=this.route.queryParams.pipe((0,m.T)((t=>{var e;return null!==(e=t.search)&&void 0!==e?e:""})),(0,x.F)()),this.copyPath=t=>{this.clipboard.copy(t),this.alerts.open(`The name ${t} copied`,{status:"success"}).subscribe()}}ngOnInit(){var t;this.control.patchValue(null!==(t=this.route.snapshot.queryParams.search)&&void 0!==t?t:""),this.control.valueChanges.pipe((0,O.B)(500),(0,m.T)((t=>t||"")),(0,j.p)((t=>t.length>2||0===t.length)),(0,V.Q)(this.destroy$)).subscribe((t=>{this.router.navigate([],{queryParams:{search:t}})}))}}return(t=e).ɵfac=function(e){return new(e||t)(g.rXU(w.B0),g.rXU(a.TuiAlertService),g.rXU(c.nX),g.rXU(c.Ix),g.rXU(u.TuiDestroyService,2))},t.ɵcmp=g.VBU({type:t,selectors:[["icons-group"]],contentQueries:function(t,e,n){if(1&t&&g.wni(n,$,5),2&t){let t;g.mGM(t=g.lsd())&&(e.iconGroup=t.first)}},inputs:{icons:"icons",color:"color"},features:[g.Jv_([u.TuiDestroyService])],ngContentSelectors:K,decls:7,vars:6,consts:[[1,"title"],["tuiAutoFocus","","tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"formControl","tuiTextfieldCleaner","tuiTextfieldLabelOutside"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"header-group"],["size","m",1,"badge",3,"appearance"],["class","nothing",4,"ngIf"],[1,"icons"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[1,"nothing"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(g.NAR(),g.j41(0,"h2",0),g.EFF(1,"Search by name"),g.k0s(),g.j41(2,"tui-input",1),g.EFF(3," Input icon name to highlight\n"),g.k0s(),g.SdG(4),g.DNE(5,J,4,7,"ng-container",2),g.nI1(6,"tuiKeys")),2&t&&(g.R7$(2),g.Y8G("formControl",e.control)("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),g.R7$(3),g.Y8G("ngForOf",g.bMT(6,4,e.icons)))},dependencies:[o.Sq,o.bT,o.T3,R.m,S.W,N.p,L.bk,D.n,X.k,_.G,i.BC,i.l_,U.B,o.Jj,A.n,Y.L],styles:[".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem;justify-content:center}.nothing[_ngcontent-%COMP%]{text-align:center}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem;justify-content:center}"],changeDetection:0}),e})(),et=t=>t;function nt(t,e){if(1&t){const t=g.RV6();g.j41(0,"button",11),g.bIt("click",(function(){g.eBV(t);const e=g.XpG(),n=e.icon,o=e.copyPath;return g.Njj(o(n))})),g.k0s()}if(2&t){const t=g.XpG().icon;g.Y8G("icon",t),g.BMQ("aria-label",t)}}function ot(t,e){if(1&t){const t=g.RV6();g.j41(0,"div",9),g.bIt("waIntersectionObservee",(function(e){const n=g.eBV(t).entry,o=g.XpG(3);return g.Njj(n.isIntersecting=n.isIntersecting||o.onIntersection(e))})),g.DNE(1,nt,1,2,"button",10),g.k0s()}if(2&t){const t=e.entry;g.R7$(1),g.Y8G("ngIf",t.isIntersecting)}}function it(t,e){if(1&t&&(g.j41(0,"tui-notification"),g.EFF(1," Open source theme for Taiga UI uses processed "),g.j41(2,"a",4),g.EFF(3," Feather Icons "),g.k0s(),g.EFF(4," as its icon pack with some custom made icons. "),g.k0s(),g.j41(5,"p"),g.EFF(6," These icons can be used by name in "),g.j41(7,"a",5),g.EFF(8," Svg "),g.k0s(),g.EFF(9," component and all Taiga UI component accepting icons as input. If you use unsafe icons or inline SVG with linear gradient you need to provide "),g.j41(10,"a",6),g.EFF(11," TUI_SANITIZER "),g.k0s(),g.EFF(12," token, which is responsible for removing malicious code from the svg. "),g.k0s(),g.j41(13,"icons-group",7),g.DNE(14,ot,2,1,"ng-template",8),g.k0s()),2&t){const t=g.XpG().$implicit,e=g.XpG();g.R7$(13),g.Y8G("icons",e.icons[t])}}function ct(t,e){if(1&t&&g.DNE(0,it,15,1,"ng-template",3),2&t){const t=e.$implicit;g.Y8G("pageTab",t)}}function rt(t,e){1&t&&g.EFF(0," SVG image code, link to a file, link to a segment or icon name. If you use name or segment, set icon size with CSS ")}function st(t,e){1&t&&g.EFF(0," CustomEvent of loading error ")}function ut(t,e){if(1&t){const t=g.RV6();g.j41(0,"div",12)(1,"tui-svg",13),g.bIt("tui-icon-error",(function(e){g.eBV(t);const n=g.sdS(5);return g.Njj(n.emitEvent(e))})),g.k0s()(),g.j41(2,"tui-doc-documentation"),g.DNE(3,rt,1,0,"ng-template",14),g.bIt("documentationPropertyValueChange",(function(e){g.eBV(t);const n=g.XpG();return g.Njj(n.icon=e)})),g.DNE(4,st,1,0,"ng-template",15,16,g.C5r),g.k0s(),g.j41(6,"ol",17)(7,"li")(8,"p"),g.EFF(9," Import "),g.j41(10,"code"),g.EFF(11,"TuiSvgModule"),g.k0s(),g.EFF(12," into a module where you want to use our component "),g.k0s(),g.nrm(13,"tui-doc-code",18),g.k0s(),g.j41(14,"li")(15,"p"),g.EFF(16,"Add to the template:"),g.k0s(),g.nrm(17,"tui-doc-code",19),g.k0s()()}if(2&t){const t=g.XpG();g.R7$(1),g.Y8G("src",t.icon),g.R7$(2),g.Y8G("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon),g.R7$(10),g.Y8G("code",t.exampleModule),g.R7$(4),g.Y8G("code",t.exampleHtml)}}let at=(()=>{var t;class e{constructor(t,e){this.icons=t,this.mode=e,this.keys=Object.keys(this.icons),this.exampleModule=n.e(97039).then(n.t.bind(n,97039,17)),this.exampleHtml=n.e(5493).then(n.t.bind(n,5493,17)),this.iconVariants=["https://ng-web-apis.github.io/dist/assets/images/web-api.svg","tuiIconHelpCircle",'<svg xmlns="http://www.w3.org/2000/svg"\n             width="24px"\n             height="24px"\n             viewBox="0 0 24 24">\n            <path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n                c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n                s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n        </svg>',(0,p.m)(Q||(Q=et`/images/ts.svg#ts`)),(0,p.m)(Z||(Z=et`/images/undefined.svg`))],this.icon=this.iconVariants[0],this.mode$=this.mode.change$.pipe((0,d.Z)(null),(0,m.T)((()=>this.mode.mode||"onLight")))}onIntersection(t){var e,n;return null!==(e=null===(n=t[t.length-1])||void 0===n?void 0:n.isIntersecting)&&void 0!==e&&e}}return(t=e).ɵfac=function(e){return new(e||t)(g.rXU(v),g.rXU(a.TuiModeDirective))},t.ɵcmp=g.VBU({type:t,selectors:[["icons"]],decls:3,vars:1,consts:[["header","Icons"],[4,"ngFor","ngForOf"],["pageTab","Component"],[3,"pageTab"],["href","https://feathericons.com/","rel","noreferrer","target","_blank","tuiLink",""],["routerLink","/icons/overview","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["waIntersectionObserver","","waIntersectionThreshold","0.5",3,"icons"],["iconGroup",""],[1,"icon-place",3,"waIntersectionObservee"],["appearance","icon","size","m","title","Copy","tuiIconButton","","type","button","class","icon",3,"icon","click",4,"ngIf"],["appearance","icon","size","m","title","Copy","tuiIconButton","","type","button",1,"icon",3,"icon","click"],[1,"b-full-width"],[3,"src","tui-icon-error"],["documentationPropertyMode","input","documentationPropertyName","src","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","tui-icon-error","documentationPropertyType","CustomEvent<TuiIconError>"],["documentationPropertyIconErrorChange","documentationProperty"],[1,"b-demo-steps","tui-space_top-12"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(g.j41(0,"tui-doc-page",0),g.DNE(1,ct,1,1,null,1),g.DNE(2,ut,18,5,"ng-template",2),g.k0s()),2&t&&(g.R7$(1),g.Y8G("ngForOf",e.keys))},dependencies:[o.Sq,o.bT,b.v,T.E,F._,M.S,C.t,k.c,P.W,G.P,E.T,tt,$,c.Wk,r.TK,r.Cw],styles:[".icon-place[_ngcontent-%COMP%]{min-width:4.25rem;min-height:4.25rem;display:flex;align-items:center;justify-content:center;padding:.125rem}.icon[_ngcontent-%COMP%]{transition:all .5s ease-in;border:1px solid var(--tui-base-03);box-shadow:0 .05rem .5rem #3333;will-change:transform,box-shadow;border-radius:.625rem}.icon[_ngcontent-%COMP%]:hover{transform:scale(1.5);background:var(--tui-base-01);z-index:1}.icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]:hover{transition:.5s}.icon[_ngcontent-%COMP%]:not(.t-appearance)     [tuiWrapper][data-appearance=icon]{opacity:1!important}"],changeDetection:0}),e})(),lt=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=g.$C({type:t}),t.ɵinj=g.G2t({imports:[o.MD,l.TuiInputModule,u.TuiKeysPipeModule,u.TuiFilterPipeModule,a.TuiHintModule,a.TuiTextfieldControllerModule,i.X1,u.TuiLetModule,u.TuiAutoFocusModule]}),e})(),pt=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=g.$C({type:t}),t.ɵinj=g.G2t({imports:[o.MD,i.YN,a.TuiNotificationModule,a.TuiLinkModule,a.TuiSvgModule,a.TuiButtonModule,s.lK,lt,c.iI.forChild((0,s.CC)(at)),l.TuiCheckboxLabeledModule,u.TuiActiveZoneModule,r.SL]}),e})()}}]);