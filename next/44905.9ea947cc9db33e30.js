(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44905],{44905:(t,e,n)=>{n.r(e),n.d(e,{default:()=>J});var i,s=n(84911),a=n(4594),o=n(66094),u=n(85483),c=n(37399),l=n(20764),r=n(82127),h=n(2004),p=n(13448),g=n(19403),f=n(275),d=n(51160),m=n(64870),x=n(905),C=n(29963),v=n(97318),T=n(89407),w=n(35548),A=n(38252),$=n(63142),Z=n(53958);function M(t,e){if(1&t){const t=w.EpF();w.TgZ(0,"button",6),w.NdJ("click",(function(){const e=w.CHM(t).$implicit,n=w.oxw(4);return w.KtG(n.onClick(e))})),w.TgZ(1,"tui-avatar",7),w._uU(2),w.qZA(),w.TgZ(3,"span",8)(4,"span"),w._uU(5),w.qZA(),w.TgZ(6,"span",9),w._uU(7),w.qZA()()()}if(2&t){const t=e.$implicit;w.Q6J("disabled",t.disabled)("value",t.phone),w.xp6(1),w.Q6J("src",t.avatarUrl),w.xp6(1),w.hij(" ",t.firstName," "),w.xp6(3),w.AsE("",t.firstName," ",t.lastName,""),w.xp6(2),w.Oqu(t.phone)}}function N(t,e){if(1&t&&(w.TgZ(0,"tui-data-list"),w.YNc(1,M,8,7,"button",5),w.qZA()),2&t){const t=w.oxw(2).tuiLet;w.xp6(1),w.Q6J("ngForOf",t)}}function U(t,e){1&t&&(w.ynx(0),w.YNc(1,N,2,1,"tui-data-list",4),w.BQk())}function b(t,e){if(1&t){const t=w.EpF();w.TgZ(0,"tui-input-phone",2),w.NdJ("ngModelChange",(function(e){w.CHM(t);const n=w.oxw();return w.KtG(n.value=e)}))("searchChange",(function(e){w.CHM(t);const n=w.oxw();return w.KtG(n.onSearch(e))})),w._uU(1),w.ALo(2,"async"),w.YNc(3,U,2,0,"ng-container",3),w.qZA()}if(2&t){const t=e.tuiLet,n=w.oxw(),i=w.MAs(3);w.Q6J("allowText",!0)("tuiTextfieldCustomContent",i)("ngModel",n.value),w.xp6(1),w.hij(" ",w.lcZ(2,5,n.placeholder$)," "),w.xp6(2),w.Q6J("ngIf",null==t?null:t.length)}}function L(t,e){if(1&t&&(w.TgZ(0,"tui-avatar",11),w._uU(1),w.qZA()),2&t){const t=e.ngIf;w.Q6J("src",t.avatarUrl),w.xp6(1),w.hij(" ",t.firstName," ")}}function O(t,e){if(1&t&&(w.YNc(0,L,2,2,"tui-avatar",10),w.ALo(1,"async")),2&t){const t=w.oxw();w.Q6J("ngIf",w.lcZ(1,1,t.user$))}}class _{constructor(t,e,n,i=null,s=!1){this.firstName=t,this.lastName=e,this.phone=n,this.avatarUrl=i,this.disabled=s}toString(){return`${this.firstName} ${this.lastName}`}}const k=[new _("Roman","Sedov","+75678901234","https://avatars.githubusercontent.com/u/10106368"),new _("Alex","Inkin","+75678901234",u.Ll`/images/avatar.jpg`)];class q{constructor(){this.search$=new p.x,this.selected$=new p.x,this.value="",this.user$=(0,g.T)(this.selected$,this.search$.pipe((0,f.w)((t=>this.request(t).pipe((0,d.U)((e=>this.isFullMatch(e,t)?e[0]:null))))))).pipe((0,m.b)((t=>{t&&(this.value=t.phone)}))),this.items$=this.search$.pipe((0,x.O)(""),(0,f.w)((t=>this.request(t).pipe((0,d.U)((e=>this.isFullMatch(e,t)?[]:e)))))),this.placeholder$=(0,C.a)([this.user$,this.search$]).pipe((0,d.U)((([t,e])=>t||this.getPlaceholder(e))),(0,x.O)("Phone number or name"))}onSearch(t){this.search$.next(t)}onClick(t){this.selected$.next(t)}request(t){return(0,v.of)(k.filter((e=>(0,c.TUI_DEFAULT_MATCHER)(e,t)||(0,c.TUI_DEFAULT_MATCHER)(e.phone,t)))).pipe((0,T.B)())}getPlaceholder(t){return t?t.startsWith("+")?"Phone number":"Name":"Phone number or name"}isFullMatch(t,e){return 1===t.length&&(String(t[0])===e||t[0].phone===e)}}(i=q).ɵfac=function(t){return new(t||i)},i.ɵcmp=w.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent3",features:[w.jDz],decls:6,vars:4,consts:[[3,"allowText","tuiTextfieldCustomContent","ngModel","ngModelChange","searchChange",4,"tuiLet"],["avatar",""],[3,"allowText","tuiTextfieldCustomContent","ngModel","ngModelChange","searchChange"],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","",3,"disabled","value","click",4,"ngFor","ngForOf"],["tuiOption","",3,"disabled","value","click"],["size","s",1,"tui-space_right-3",3,"src"],[1,"user"],[1,"phone"],["size","s",3,"src",4,"ngIf"],["size","s",3,"src"]],template:function(t,e){1&t&&(w.YNc(0,b,4,7,"tui-input-phone",0),w.ALo(1,"async"),w.YNc(2,O,2,3,"ng-template",null,1,w.W1O),w.TgZ(4,"p"),w._uU(5),w.qZA()),2&t&&(w.Q6J("tuiLet",w.lcZ(1,2,e.items$)),w.xp6(5),w.hij("Value: ",e.value,""))},dependencies:[h.Kjg,A.y,$.X,c.TuiLetDirective,a.Ov,h.cnw,Z.B,o.u5,o.JJ,o.On,a.O5,l.TuiDataListComponent,l.TuiDataListDirective,a.sg,l.TuiOptionComponent,r.TuiAvatarComponent],styles:[".user[_ngcontent-%COMP%]{margin-right:auto}.phone[_ngcontent-%COMP%]{font:var(--tui-font-text-s);display:block;color:var(--tui-text-03)}"],changeDetection:0}),(0,s.gn)([c.tuiPure],q.prototype,"request",null);const J=q}}]);