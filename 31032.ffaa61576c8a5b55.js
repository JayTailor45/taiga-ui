(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[31032],{31032:(t,e,n)=>{n.r(e),n.d(e,{default:()=>z});var i=n(4594),o=n(66094),a=n(49237),u=n(7233),r=n(12569),s=n(29722),l=n(2004),c=n(60902),h=n(29963),d=n(75123),g=n(275),p=n(905),T=n(89407),m=n(51160),f=n(13591),b=n(84439),x=n(35548),C=n(46953),Z=n(85454),J=n(70705),A=n(7911),w=n(37385),y=n(85144),$=n(59756),M=n(74922);function q(t,e){if(1&t){const t=x.EpF();x.TgZ(0,"tui-reorder",7),x.NdJ("itemsChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.initial=e)}))("enabledChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.onEnabled(e))})),x.qZA()}if(2&t){const t=x.oxw();x.Q6J("enabled",t.enabled)("items",t.initial)}}function Q(t,e){1&t&&(x.TgZ(0,"th",14),x._uU(1," Name "),x.qZA())}function _(t,e){1&t&&(x.TgZ(0,"th",14),x._uU(1," Date of Birth "),x.qZA())}function N(t,e){1&t&&(x.TgZ(0,"th",14),x._uU(1," Age "),x.qZA())}function S(t,e){if(1&t&&(x.TgZ(0,"td",19),x._uU(1),x.qZA()),2&t){const t=x.oxw().$implicit,e=x.oxw(3);x.ekj("match",e.isMatch(t.name)),x.xp6(1),x.hij(" ",t.name," ")}}function D(t,e){if(1&t&&(x.TgZ(0,"td",19),x._uU(1),x.qZA()),2&t){const t=x.oxw().$implicit,e=x.oxw(3);x.ekj("match",e.isMatch(t.dob)),x.xp6(1),x.hij(" ",t.dob," ")}}function L(t,e){if(1&t&&(x.TgZ(0,"td",19),x._uU(1),x.qZA()),2&t){const t=x.oxw().$implicit,e=x.oxw(3);x.ekj("match",e.isMatch(e.getAge(t))),x.xp6(1),x.hij(" ",e.getAge(t)," ")}}function U(t,e){1&t&&(x.TgZ(0,"tr",17),x.YNc(1,S,2,3,"td",18),x.YNc(2,D,2,3,"td",18),x.YNc(3,L,2,3,"td",18),x.qZA()),2&t&&(x.xp6(1),x.Q6J("tuiCell","name"),x.xp6(1),x.Q6J("tuiCell","dob"),x.xp6(1),x.Q6J("tuiCell","age"))}function B(t,e){if(1&t&&(x.TgZ(0,"tbody",15),x.YNc(1,U,4,3,"tr",16),x.qZA()),2&t){const t=e.tuiLet;x.Q6J("data",t),x.xp6(1),x.Q6J("ngForOf",t)}}function O(t,e){if(1&t){const t=x.EpF();x.TgZ(0,"table",8),x.NdJ("directionChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.direction$.next(e))}))("tuiSortByChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.sorter$.next(e))})),x.ALo(1,"async"),x.ALo(2,"async"),x.TgZ(3,"thead")(4,"tr",9),x.YNc(5,Q,2,0,"th",10),x.YNc(6,_,2,0,"th",10),x.YNc(7,N,2,0,"th",10),x.qZA()(),x.YNc(8,B,2,2,"tbody",11),x.ALo(9,"tuiTableSort"),x.TgZ(10,"tfoot")(11,"tr")(12,"td",12)(13,"tui-table-pagination",13),x.NdJ("paginationChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.onPagination(e))})),x.ALo(14,"async"),x.qZA()()()()()}if(2&t){const t=e.ngIf,n=x.oxw();x.Q6J("columns",n.columns)("direction",x.lcZ(1,9,n.direction$)||1)("tuiSortBy",x.lcZ(2,11,n.sorter$)),x.xp6(5),x.Q6J("tuiHead","name"),x.xp6(1),x.Q6J("tuiHead","dob"),x.xp6(1),x.Q6J("tuiHead","age"),x.xp6(1),x.Q6J("tuiLet",x.lcZ(9,13,t)),x.xp6(4),x.Q6J("colSpan",n.columns.length),x.xp6(1),x.Q6J("total",x.lcZ(14,15,n.total$)||0)}}const H=u.TuiDay.currentLocal(),v=["John","Jane","Jack","Jill","James","Joan","Jim","Julia","Joe","Julia"],P=["Smith","West","Brown","Jones","Davis","Miller","Johnson","Jackson","Williams","Wilson"],k=Array.from({length:300},(()=>({name:`${P[Math.floor(10*Math.random())]}, ${v[Math.floor(10*Math.random())]}`,dob:H.append({day:-Math.floor(4e3*Math.random())-7500})}))),I={Name:"name",Age:"age","Date of Birth":"dob"};function Y({dob:t}){const e=H.year-t.year,n=H.month-t.month,i=H.day-t.day;return e+(0,u.tuiToInt)(n>0||!n&&i>9)}const z=(()=>{var t;class e{constructor(){this.size$=new c.X(10),this.page$=new c.X(0),this.direction$=new c.X(-1),this.sorter$=new c.X("name"),this.minAge=new o.NI(21),this.request$=(0,h.a)([this.sorter$,this.direction$,this.page$,this.size$,(0,u.tuiControlValue)(this.minAge)]).pipe((0,d.b)(0),(0,g.w)((t=>this.getData(...t).pipe((0,p.O)(null)))),(0,T.B)()),this.initial=["Name","Date of Birth","Age"],this.enabled=this.initial,this.columns=["name","dob","age"],this.search="",this.loading$=this.request$.pipe((0,m.U)(u.tuiIsFalsy)),this.total$=this.request$.pipe((0,f.h)(u.tuiIsPresent),(0,m.U)((({length:t})=>t)),(0,p.O)(1)),this.data$=this.request$.pipe((0,f.h)(u.tuiIsPresent),(0,m.U)((t=>t.filter(u.tuiIsPresent))),(0,p.O)([])),this.getAge=Y}onEnabled(t){this.enabled=t,this.columns=this.initial.filter((e=>t.includes(e))).map((t=>I[t]))}onDirection(t){this.direction$.next(t)}onPagination({page:t,size:e}){this.page$.next(t),this.size$.next(e)}isMatch(t){return!!this.search&&(0,u.TUI_DEFAULT_MATCHER)(t,this.search)}getData(t,e,n,i,o){console.info("Making a request");const a=n*i,r=a+i,s=[...k].sort(function(t,e){return(n,i)=>"age"===t?e*(0,u.tuiDefaultSort)(Y(n),Y(i)):e*(0,u.tuiDefaultSort)(n[t],i[t])}(t,e)).filter((t=>Y(t)>=o)).map(((t,e)=>e>=a&&e<r?t:null));return(0,b.H)(3e3).pipe((0,m.U)((()=>s)))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=x.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent4",features:[x.jDz],decls:13,vars:11,consts:[["tuiTextfieldSize","m",1,"filters"],[1,"input",3,"tuiTextfieldCleaner","ngModel","ngModelChange"],["decimal","never",1,"tui-space_horizontal-3",3,"formControl"],["size","m","tuiButton","","tuiChevron","","tuiDropdownOpen","","type","button",3,"tuiDropdown"],["dropdown",""],[3,"overlay","showLoader"],["tuiTable","","class","table",3,"columns","direction","tuiSortBy","directionChange","tuiSortByChange",4,"ngIf"],[1,"columns",3,"enabled","items","itemsChange","enabledChange"],["tuiTable","",1,"table",3,"columns","direction","tuiSortBy","directionChange","tuiSortByChange"],["tuiThGroup",""],["tuiSortable","","tuiTh","",4,"tuiHead"],["tuiTbody","",3,"data",4,"tuiLet"],[3,"colSpan"],[1,"tui-space_top-2",3,"total","paginationChange"],["tuiSortable","","tuiTh",""],["tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",3,"match",4,"tuiCell"],["tuiTd",""]],template:function(t,e){if(1&t&&(x.TgZ(0,"p",0)(1,"tui-input",1),x.NdJ("ngModelChange",(function(t){return e.search=t})),x._uU(2," Find on page "),x.qZA(),x.TgZ(3,"tui-input-number",2),x._uU(4," Minimum age "),x.qZA(),x.TgZ(5,"button",3),x._uU(6," Columns "),x.qZA(),x.YNc(7,q,1,2,"ng-template",null,4,x.W1O),x.qZA(),x.TgZ(9,"tui-loader",5),x.ALo(10,"async"),x.YNc(11,O,15,17,"table",6),x.ALo(12,"async"),x.qZA()),2&t){const t=x.MAs(8);x.xp6(1),x.Q6J("tuiTextfieldCleaner",!0)("ngModel",e.search),x.xp6(2),x.Q6J("formControl",e.minAge),x.xp6(2),x.Q6J("tuiDropdown",t),x.xp6(4),x.Q6J("overlay",!0)("showLoader",!!x.lcZ(10,7,e.loading$)),x.xp6(2),x.Q6J("ngIf",x.lcZ(12,9,e.data$))}},dependencies:[a.TuiTableDirective,a.TuiTableTbody,a.TuiTableThGroup,a.TuiTableTh,a.TuiTableTd,a.TuiTableTr,a.TuiTableCell,a.TuiTableHead,a.TuiTableSortBy,a.TuiTableSortable,a.TuiTableSortPipe,l.cnw,C.b,Z.s,l.QfL,J.K,A.w,w.t,y.B,l._Hh,$.q,M.g,a.TuiReorderComponent,r.TuiLoader,i.Ov,i.O5,a.TuiTablePaginationComponent,o.UX,o.JJ,o.oH,r.TuiButton,s.TuiChevron,o.u5,o.On,i.sg,u.TuiLet],styles:[".table[_ngcontent-%COMP%]{width:100%}.filters[_ngcontent-%COMP%]{display:flex}.input[_ngcontent-%COMP%]{flex:1}.columns[_ngcontent-%COMP%]{width:10.625rem}.match[_ngcontent-%COMP%]{background:var(--tui-selection)}"],changeDetection:0}),e})()}}]);