(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[20210],{20210:(t,n,e)=>{e.r(n),e.d(n,{default:()=>b});var i=e(4594),a=e(66094),s=e(85483),o=e(37399),r=e(20764),l=e(82127),c=e(2004),u=e(905),m=e(275),p=e(51160),f=e(97318),h=e(35548),g=e(70705),d=e(7911),v=e(99931),N=e(88635),x=e(23199);function w(t,n){if(1&t){const t=h.EpF();h.TgZ(0,"button",5),h.NdJ("click",(function(){const n=h.CHM(t).$implicit,e=h.oxw(4);return h.KtG(e.onClick(n))})),h.TgZ(1,"tui-avatar",6),h._uU(2),h.ALo(3,"tuiInitials"),h.qZA(),h.TgZ(4,"span",7),h._uU(5),h.qZA()()}if(2&t){const t=n.$implicit;h.Q6J("disabled",t.disabled)("value",t),h.xp6(1),h.Q6J("src",t.avatarUrl),h.xp6(1),h.hij(" ",h.lcZ(3,5,t.toString())," "),h.xp6(3),h.Oqu(t)}}function C(t,n){if(1&t&&(h.TgZ(0,"tui-data-list"),h.YNc(1,w,6,7,"button",4),h.qZA()),2&t){const t=h.oxw(2).tuiLet;h.xp6(1),h.Q6J("ngForOf",t)}}function k(t,n){1&t&&(h.ynx(0),h.YNc(1,C,2,1,"tui-data-list",3),h.BQk())}function A(t,n){if(1&t&&(h.TgZ(0,"tui-input",1),h._uU(1," Enter your name "),h.YNc(2,k,2,0,"ng-container",2),h.qZA()),2&t){const t=n.tuiLet,e=h.oxw();h.Q6J("formControl",e.control),h.xp6(2),h.Q6J("ngIf",null==t?null:t.length)}}class T{constructor(t,n,e=null,i=!1){this.firstName=t,this.lastName=n,this.avatarUrl=e,this.disabled=i}toString(){return`${this.firstName} ${this.lastName}`}}const Z=[new T("Roman","Sedov","https://avatars.githubusercontent.com/u/10106368"),new T("Alex","Inkin",s.Ll`/images/avatar.jpg`),new T("Gabriel José","de la Concordia «Gabo» García Márquez")],b=(()=>{var t;class n{constructor(){this.control=new a.NI(""),this.firstName="",this.lastName="",this.items$=this.control.valueChanges.pipe((0,u.O)(""),(0,m.w)((t=>this.request(t??"").pipe((0,p.U)((n=>1===n.length&&String(n[0])===t?(this.onClick(n[0]),[]):n))))),(0,u.O)(Z))}onClick({lastName:t,firstName:n}){this.lastName=t,this.firstName=n}request(t){return(0,f.of)(Z.filter((n=>(0,o.TUI_DEFAULT_MATCHER)(n,t))))}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=h.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent8",features:[h.jDz],decls:5,vars:5,consts:[[3,"formControl",4,"tuiLet"],[3,"formControl"],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","",3,"disabled","value","click",4,"ngFor","ngForOf"],["tuiOption","",3,"disabled","value","click"],["size","xs",1,"avatar",3,"src"],[1,"name"]],template:function(t,n){1&t&&(h.YNc(0,A,3,2,"tui-input",0),h.ALo(1,"async"),h.TgZ(2,"p"),h._uU(3,"Parsed on complete match:"),h.qZA(),h._uU(4)),2&t&&(h.Q6J("tuiLet",h.lcZ(1,3,n.items$)),h.xp6(4),h.AsE("\n",n.firstName," ",n.lastName,"\n"))},dependencies:[c.QfL,g.K,d.w,o.TuiLetDirective,a.UX,a.JJ,a.oH,i.Ov,r.TuiDataList,v.q,N.v,x.g,i.O5,i.sg,l.TuiAvatarComponent,r.TuiInitialsPipe],styles:[".avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1;margin-right:auto}"],changeDetection:0}),n})()}}]);