(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4757,80617],{8127:(t,e,n)=>{n.d(e,{B:()=>o});var i=n(20755);let o=(()=>{var t;class e{constructor(){this.tuiCell="",this.template=(0,i.f3M)(i.Rgc)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["ng-template","tuiCell",""]],inputs:{tuiCell:"tuiCell"}}),e})()},36433:(t,e,n)=>{n.d(e,{D:()=>o});var i=n(20755);let o=(()=>{var t;class e{constructor(){this.tuiHead="",this.template=(0,i.f3M)(i.Rgc)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["","tuiHead",""]],inputs:{tuiHead:"tuiHead"}}),e})()},6819:(t,e,n)=>{n.d(e,{Y:()=>d});var i=n(76733),o=n(20755),s=n(2054),r=n(17628),a=n(84787),c=n(18004),u=n(92425),h=n(81749);let d=(()=>{var t;class e{constructor(){this.doc=(0,o.f3M)(i.K0),this.el=(0,s.tuiInjectElement)(),this.parentRef=(0,o.f3M)(r.TUI_ELEMENT_REF).nativeElement,this.tuiResized=(0,s.tuiTypedFromEvent)(this.el,"mousedown").pipe((0,s.tuiPreventDefault)(),(0,a.w)((()=>{const{width:t,right:e}=this.parentRef.getBoundingClientRect();return(0,s.tuiTypedFromEvent)(this.doc,"mousemove").pipe((0,c.x)(),(0,u.U)((({clientX:n})=>t+n-e)),(0,h.R)((0,s.tuiTypedFromEvent)(this.doc,"mouseup")))})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["","tuiResized",""]],outputs:{tuiResized:"tuiResized"}}),e})()},53554:(t,e,n)=>{n.d(e,{L:()=>o});var i=n(20755);let o=(()=>{var t;class e{constructor(){this.tuiRowOf=[],this.template=(0,i.f3M)(i.Rgc)}static ngTemplateContextGuard(t,e){return!0}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["ng-template","tuiRow",""]],inputs:{tuiRowOf:"tuiRowOf"}}),e})()},5330:(t,e,n)=>{n.d(e,{c:()=>u});var i=n(20755),o=n(79984),s=n(2054),r=n(73474),a=n(14832),c=n(70650);let u=(()=>{var t;class e extends s.AbstractTuiController{constructor(){super(...arguments),this.options=(0,i.f3M)(c.Cc),this.cdr=(0,i.f3M)(i.sBO),this.columns=[],this.size=this.options.size,this.direction=this.options.direction,this.directionChange=new i.vpe,this.sorterChange=new i.vpe,this.stuck$=(0,i.f3M)(r.I),this.entries$=(0,i.f3M)(o.te),this.sorter=()=>0}updateSorterAndDirection(t){this.sorter===t?this.updateDirection(1===this.direction?-1:1):(this.updateSorter(t),this.updateDirection(1))}ngAfterViewInit(){this.cdr.detectChanges()}updateSorter(t){this.sorter=t||(()=>0),this.sorterChange.emit(this.sorter),this.change$.next()}updateDirection(t){this.direction=t,this.directionChange.emit(this.direction),this.change$.next()}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=i.n5z(t)))(n||t)}}(),t.ɵdir=i.lG2({type:t,selectors:[["table","tuiTable",""]],hostAttrs:[2,"border-collapse","separate"],hostVars:1,hostBindings:function(t,e){1&t&&i.NdJ("$.class._stuck",(function(){return e.stuck$})),2&t&&i.uIk("data-size",e.size)},inputs:{columns:"columns",size:"size",direction:"direction",sorter:"sorter"},outputs:{directionChange:"directionChange",sorterChange:"sorterChange"},features:[i._Bn(a.y),i.qOj]}),e})()},70151:(t,e,n)=>{n.d(e,{y:()=>c});var i,o=n(84911),s=n(20755),r=n(2054),a=n(5330);class c{constructor(){this.table=(0,s.f3M)(a.c)}transform(t){return this.sort(t,this.table.sorter,this.table.direction)}sort(t,e,n){return[...t].sort(((t,i)=>n*e(t,i)))}}(i=c).ɵfac=function(t){return new(t||i)},i.ɵpipe=s.Yjl({name:"tuiTableSort",type:i,pure:!1}),(0,o.gn)([r.tuiPure],c.prototype,"sort",null)},73474:(t,e,n)=>{n.d(e,{I:()=>r,y:()=>a});var i=n(20755),o=n(79984),s=n(92425);const r=new i.OlP("[TUI_STUCK]"),a={provide:r,deps:[i.SBq,o.te],useFactory:({nativeElement:t},e)=>{const n=e.pipe((0,s.U)((([{intersectionRatio:t}])=>t<1)));return t["$.class._stuck"]=n,n}}},37473:(t,e,n)=>{n.d(e,{W:()=>a});var i=n(20755),o=n(62022),s=n(2054),r=n(5330);const a=[n(70151).y,{provide:r.c,deps:[[new i.tp0,r.c],i.sBO],useFactory:(t,e)=>(t.change$.pipe((0,s.tuiWatch)(e),(0,o.sL)()).subscribe(),t)}]},14832:(t,e,n)=>{n.d(e,{y:()=>u});var i=n(20755),o=n(79984),s=n(2054),r=n(17628),a=n(5330),c=n(73474);const u=[{provide:o.RL,useValue:"10000px 10000px 10000px 0px"},{provide:o.op,useValue:[0,1]},{provide:r.TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,useFactory:()=>{const t=new r.TuiTextfieldAppearanceDirective;return t.appearance=r.TuiAppearance.Table,t}},{provide:r.TUI_TEXTFIELD_LABEL_OUTSIDE,useValue:{labelOutside:!0}},(0,s.tuiProvide)(r.TUI_TEXTFIELD_SIZE,(0,i.Gpc)((()=>a.c))),o.te,c.y]},70650:(t,e,n)=>{n.d(e,{Cc:()=>s,Jz:()=>r,dn:()=>o});var i=n(2054);const o={sticky:!1,resizable:!1,open:!0,size:"m",direction:1,sortIcons:{asc:"tuiIconSortAscending",desc:"tuiIconSortDescending",off:"tuiIconSortOff"}},s=(0,i.tuiCreateToken)(o);function r(t){return(0,i.tuiProvideOptions)(s,t,o)}},22250:(t,e,n)=>{n.d(e,{j:()=>v});var i=n(20755),o=n(2054),s=n(97733),r=n(53554),a=n(5330),c=n(70151),u=n(37473),h=n(70650),d=n(62601),l=n(76733),p=n(6254),g=n(62998),f=n(52397);const b=["tuiTbody",""];function _(t,e){if(1&t&&(i.ynx(0),i._uU(1),i.BQk()),2&t){const t=e.polymorpheusOutlet;i.xp6(1),i.hij(" ",t," ")}}function C(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"tr")(1,"th",1)(2,"button",2),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.onClick())})),i.TgZ(3,"span",3),i.YNc(4,_,2,1,"ng-container",4),i.qZA(),i._UZ(5,"tui-svg",5),i.qZA()()()}if(2&t){const t=i.oxw();i.xp6(1),i.Q6J("colSpan",t.table.columns.length),i.xp6(3),i.Q6J("polymorpheusOutlet",t.heading),i.xp6(1),i.ekj("t-chevron_rotated",t.open),i.Q6J("src",t.arrowOptions.iconLarge)}}function m(t,e){1&t&&(i.ynx(0),i.Hsn(1),i.BQk())}function O(t,e){if(1&t&&(i.GkF(0,7),i.ALo(1,"tuiMapper")),2&t){const t=e.$implicit,n=e.index,o=i.oxw(2);i.Q6J("ngTemplateOutlet",o.row.template)("ngTemplateOutletContext",i.Dn7(1,2,t,o.toContext,n))}}function M(t,e){if(1&t&&(i.ynx(0),i.YNc(1,O,2,6,"ng-container",6),i.BQk()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.sorted)}}const y=["*"];let v=(()=>{var t;class e{constructor(){this.pipe=(0,i.f3M)(c.y),this.options=(0,i.f3M)(h.Cc),this.rows=o.EMPTY_QUERY,this.data=[],this.open=this.options.open,this.openChange=new i.vpe,this.arrowOptions=(0,i.f3M)(s.TUI_ARROW_OPTIONS),this.table=(0,i.f3M)((0,i.Gpc)((()=>a.c))),this.toContext=(t,e)=>({$implicit:t,index:e})}get sorted(){return this.pipe.transform(this.data)}onClick(){this.open=!this.open,this.openChange.emit(this.open)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tbody","tuiTbody",""]],contentQueries:function(t,e,n){if(1&t&&(i.Suo(n,r.L,5),i.Suo(n,d.f,4)),2&t){let t;i.iGM(t=i.CRH())&&(e.row=t.first),i.iGM(t=i.CRH())&&(e.rows=t)}},inputs:{data:"data",heading:"heading",open:"open"},outputs:{openChange:"openChange"},features:[i._Bn(u.W)],attrs:b,ngContentSelectors:y,decls:3,vars:3,consts:[[4,"ngIf"],[1,"t-heading",3,"colSpan"],["type","button",1,"t-expand",3,"click"],[1,"t-name"],[4,"polymorpheusOutlet"],[1,"t-chevron",3,"src"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(i.F$t(),i.YNc(0,C,6,5,"tr",0),i.YNc(1,m,2,0,"ng-container",0),i.YNc(2,M,2,1,"ng-container",0)),2&t&&(i.Q6J("ngIf",e.heading),i.xp6(1),i.Q6J("ngIf",e.open),i.xp6(1),i.Q6J("ngIf",e.open&&e.row))},dependencies:[l.sg,l.O5,l.tP,p.Li,g.P,f.c],styles:['[_nghost-%COMP%]{border-color:var(--tui-base-04)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-selection)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-base-02);border-bottom:1px solid var(--tui-base-04);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-base-03)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;right:.75rem;margin:0 .6875rem 0 auto}.t-chevron_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}'],changeDetection:0}),e})()},87294:(t,e,n)=>{n.d(e,{K:()=>a});var i=n(72133),o=n(20755);const s=["tuiTd",""],r=["*"];let a=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["th","tuiTd",""],["td","tuiTd",""]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,i.a5,5),2&t){let t;o.iGM(t=o.CRH())&&(e.control=t.first)}},hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("_editable",e.control)},attrs:s,ngContentSelectors:r,decls:1,vars:0,template:function(t,e){1&t&&(o.F$t(),o.Hsn(0))},styles:['[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}[tuiTheme="dark"][_nghost-%COMP%]:after, [tuiTheme="dark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size="l"]._editable[_nghost-%COMP%], table[data-size="l"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],changeDetection:0}),e})()},92437:(t,e,n)=>{n.d(e,{E:()=>C});var i=n(20755),o=n(2054),s=n(73843),r=n(92425),a=n(36433),c=n(5330),u=n(37473),h=n(45991),d=n(76733);const l=["tuiThGroup",""];function p(t,e){if(1&t&&(i.TgZ(0,"th",5),i._uU(1),i.qZA()),2&t){const t=i.oxw(2).$implicit;i.xp6(1),i.hij(" ",t.toString()," ")}}function g(t,e){if(1&t&&i.YNc(0,p,2,1,"th",4),2&t){const t=i.oxw(3);i.Q6J("ngIf",!t.th&&!t.heads.length)}}function f(t,e){if(1&t&&(i.ynx(0,2),i.YNc(1,g,1,1,"ng-template",null,3,i.W1O),i.BQk()),2&t){const t=e.$implicit,n=i.MAs(2),o=i.oxw().ngIf;i.Q6J("ngTemplateOutlet",o[t]&&o[t].template||n)}}function b(t,e){if(1&t&&(i.ynx(0),i.YNc(1,f,3,1,"ng-container",1),i.BQk()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.table.columns)}}const _=["*"];let C=(()=>{var t;class e{constructor(){this.heads=o.EMPTY_QUERY,this.heads$=null,this.table=(0,i.f3M)((0,i.Gpc)((()=>c.c)))}ngAfterContentInit(){this.heads$=this.heads.changes.pipe((0,s.O)(null),(0,r.U)((()=>this.heads.reduce(((t,e)=>({...t,[e.tuiHead]:e})),{}))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tr","tuiThGroup",""]],contentQueries:function(t,e,n){if(1&t&&(i.Suo(n,h.W,5),i.Suo(n,a.D,4)),2&t){let t;i.iGM(t=i.CRH())&&(e.th=t.first),i.iGM(t=i.CRH())&&(e.heads=t)}},features:[i._Bn([u.W])],attrs:l,ngContentSelectors:_,decls:3,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTh","",4,"ngIf"],["tuiTh",""]],template:function(t,e){1&t&&(i.F$t(),i.Hsn(0),i.YNc(1,b,2,1,"ng-container",0),i.ALo(2,"async")),2&t&&(i.xp6(1),i.Q6J("ngIf",i.lcZ(2,1,e.heads$)))},dependencies:[d.sg,d.O5,d.tP,h.W,d.Ov],encapsulation:2,changeDetection:0}),e})()},45991:(t,e,n)=>{n.d(e,{W:()=>_});var i=n(20755),o=n(2054),s=n(17628),r=n(36433),a=n(5330),c=n(70650),u=n(76733),h=n(62998),d=n(6819);const l=["tuiTh",""];function p(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",3),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.updateSorterAndDirection())})),i.GkF(1,4),i._uU(2),i.ALo(3,"async"),i._UZ(4,"tui-svg",5),i.qZA()}if(2&t){const t=i.oxw(),e=i.MAs(2);i.ekj("t-sort_sorted",t.isCurrent),i.xp6(1),i.Q6J("ngTemplateOutlet",e),i.xp6(1),i.hij(" ",i.lcZ(3,5,t.table.change$)," "),i.xp6(2),i.Q6J("src",t.icon)}}function g(t,e){1&t&&i.Hsn(0)}function f(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",6),i.NdJ("tuiResized",(function(e){i.CHM(t);const n=i.oxw();return i.KtG(n.onResized(e))})),i.qZA()}}const b=["*"];let _=(()=>{var t;class e{constructor(){this.options=(0,i.f3M)(c.Cc),this.head=(0,i.f3M)(r.D,{optional:!0}),this.sorter=this.head?(t,e)=>(0,o.tuiDefaultSort)(t[this.key],e[this.key]):null,this.resizable=this.options.resizable,this.sticky=this.options.sticky,this.width=null,this.table=(0,i.f3M)((0,i.Gpc)((()=>a.c)),{optional:!0})}get key(){if(!this.head)throw new o.TuiTableSortKeyException;return this.head.tuiHead}get isCurrent(){return!!this.sorter&&!!this.table&&this.sorter===this.table.sorter}get icon(){return this.isCurrent?1===this.table?.direction?this.options.sortIcons.desc:this.options.sortIcons.asc:this.options.sortIcons.off}updateSorterAndDirection(){this.table?.updateSorterAndDirection(this.isCurrentAndAscDirection?null:this.sorter)}onResized(t){this.width=t}get isCurrentAndAscDirection(){return this.sorter===this.table?.sorter&&-1===this.table?.direction}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["th","tuiTh",""]],hostVars:4,hostBindings:function(t,e){2&t&&(i.Udp("width",e.width,"px"),i.ekj("_sticky",e.sticky))},inputs:{sorter:"sorter",resizable:"resizable",sticky:"sticky"},features:[i._Bn([(0,o.tuiProvide)(s.TUI_ELEMENT_REF,i.SBq)])],attrs:l,ngContentSelectors:b,decls:4,vars:3,consts:[["type","button","class","t-sort",3,"t-sort_sorted","click",4,"ngIf","ngIfElse"],["content",""],["class","t-bar",3,"tuiResized",4,"ngIf"],["type","button",1,"t-sort",3,"click"],[3,"ngTemplateOutlet"],[1,"t-sort-icon",3,"src"],[1,"t-bar",3,"tuiResized"]],template:function(t,e){if(1&t&&(i.F$t(),i.YNc(0,p,5,7,"button",0),i.YNc(1,g,1,0,"ng-template",null,1,i.W1O),i.YNc(3,f,1,0,"div",2)),2&t){const t=i.MAs(2);i.Q6J("ngIf",e.sorter&&e.table)("ngIfElse",t),i.xp6(3),i.Q6J("ngIf",e.resizable)}},dependencies:[u.O5,u.tP,h.P,d.Y,u.Ov],styles:['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:700;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-base-04);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}[tuiTheme="dark"]._sticky[_nghost-%COMP%]:after, [tuiTheme="dark"]   ._sticky[_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%], [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:700;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}'],changeDetection:0}),e})()},62601:(t,e,n)=>{n.d(e,{f:()=>O});var i=n(8239),o=n(20755),s=n(2054),r=n(35484),a=n(84787),c=n(92425),u=n(8127),h=n(5330),d=n(37473),l=n(22250),p=n(76733),g=n(87294);const f=["tuiTr",""];function b(t,e){if(1&t&&(o.TgZ(0,"td",5),o._uU(1),o.qZA()),2&t){const t=e.ngIf,n=o.oxw(2).$implicit;o.xp6(1),o.hij(" ",t[n]," ")}}function _(t,e){if(1&t&&(o.YNc(0,b,2,1,"td",4),o.ALo(1,"async")),2&t){const t=o.oxw(3);o.Q6J("ngIf",o.lcZ(1,1,t.item$))}}function C(t,e){if(1&t&&(o.ynx(0,2),o.YNc(1,_,2,3,"ng-template",null,3,o.W1O),o.BQk()),2&t){const t=e.$implicit,n=o.MAs(2),i=o.oxw().ngIf;o.Q6J("ngTemplateOutlet",i[t]&&i[t].template||n)}}function m(t,e){if(1&t&&(o.ynx(0),o.YNc(1,C,3,1,"ng-container",1),o.BQk()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("ngForOf",t.table.columns)}}let O=(()=>{var t;class e{constructor(){this.cells=s.EMPTY_QUERY,this.body=(0,o.f3M)((0,o.Gpc)((()=>l.j))),this.contentReady$=new r.t(1),this.table=(0,o.f3M)((0,o.Gpc)((()=>h.c))),this.cells$=this.contentReady$.pipe((0,a.w)((()=>(0,s.tuiQueryListChanges)(this.cells))),(0,c.U)((t=>t.reduce(((t,e)=>({...t,[e.tuiCell]:e})),{})))),this.item$=this.contentReady$.pipe((0,a.w)((()=>(0,s.tuiQueryListChanges)(this.body.rows))),(0,c.U)((t=>this.body.sorted[t.findIndex((t=>t===this))])))}ngAfterContentInit(){var t=this;return(0,i.Z)((function*(){yield Promise.resolve(),t.contentReady$.next(!0)}))()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tr","tuiTr",""]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,u.B,4),2&t){let t;o.iGM(t=o.CRH())&&(e.cells=t)}},features:[o._Bn([d.W])],attrs:f,decls:2,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTd","",4,"ngIf"],["tuiTd",""]],template:function(t,e){1&t&&(o.YNc(0,m,2,1,"ng-container",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.cells$))},dependencies:[p.sg,p.O5,p.tP,g.K,p.Ov],encapsulation:2,changeDetection:0}),e})()}}]);