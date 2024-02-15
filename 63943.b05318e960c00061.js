(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[63943],{63943:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiPromptModule:()=>S});var n=o(46556),i=o(65046),a=o(20682),c=o(57760),r=o(96112),s=o(98595),u=o(39508),p=o(39373),l=o(7641),d=o(73803),m=o(80199),h=o(21848),F=o(35379),k=o(66399),y=o(93815),g=o(34481),f=o(64951);let E=(()=>{var e;class t{constructor(e,t){this.dialogs=e,this.alerts=t}onClick(){this.dialogs.open(r.TUI_PROMPT,{label:"Do you like Taiga UI?",size:"s",data:{content:"This is <code>PolymorpheusContent</code> so it can be template too!",yes:"That is great!",no:"Who cares?"}}).pipe((0,s.n)((e=>this.alerts.open(String(e))))).subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)(u.rXU(c.TuiDialogService),u.rXU(c.TuiAlertService))},e.ɵcmp=u.VBU({type:e,selectors:[["tui-prompt-example-1"]],decls:2,vars:0,consts:[["tuiButton","",3,"click"]],template:function(e,t){1&e&&(u.j41(0,"button",0),u.bIt("click",(function(){return t.onClick()})),u.EFF(1," Show\n"),u.k0s())},dependencies:[p.S],encapsulation:2,changeDetection:0}),t})();function P(e,t){if(1&e&&(u.j41(0,"p"),u.EFF(1," Prompt is a ready to use "),u.j41(2,"a",2),u.EFF(3," Dialog "),u.k0s(),u.EFF(4," to ask user to confirm an action "),u.k0s(),u.j41(5,"tui-notification"),u.EFF(6," See "),u.j41(7,"a",3),u.EFF(8," this example "),u.k0s(),u.EFF(9," to learn how to use prompt to prevent data loss on forms inside other modals "),u.k0s(),u.j41(10,"tui-doc-example",4),u.nrm(11,"tui-prompt-example-1"),u.k0s()),2&e){const e=u.XpG();u.R7$(10),u.Y8G("content",e.example1)}}function T(e,t){1&e&&u.EFF(0," Content of the prompt ")}function b(e,t){1&e&&(u.EFF(0," Text on "),u.j41(1,"code"),u.EFF(2,"false"),u.k0s(),u.EFF(3," button "))}function j(e,t){1&e&&(u.EFF(0," Text on "),u.j41(1,"code"),u.EFF(2,"true"),u.k0s(),u.EFF(3," button "))}function C(e,t){if(1&e){const e=u.RV6();u.j41(0,"tui-doc-demo")(1,"button",5),u.bIt("click",(function(){u.eBV(e);const t=u.XpG();return u.Njj(t.onClick())})),u.EFF(2," Show "),u.k0s()(),u.j41(3,"p"),u.EFF(4," You can pass "),u.j41(5,"code"),u.EFF(6,"data: TuiPromptData"),u.k0s(),u.EFF(7," when opening a dialog to customize it "),u.k0s(),u.j41(8,"tui-doc-documentation"),u.DNE(9,T,1,0,"ng-template",6),u.DNE(10,b,4,0,"ng-template",7),u.bIt("documentationPropertyValueChange",(function(t){u.eBV(e);const o=u.XpG();return u.Njj(o.no=t)})),u.DNE(11,j,4,0,"ng-template",8),u.bIt("documentationPropertyValueChange",(function(t){u.eBV(e);const o=u.XpG();return u.Njj(o.yes=t)})),u.k0s()}if(2&e){const e=u.XpG();u.R7$(10),u.Y8G("documentationPropertyValue",e.no),u.R7$(1),u.Y8G("documentationPropertyValue",e.yes)}}function v(e,t){if(1&e&&(u.j41(0,"ol",9)(1,"li")(2,"p"),u.EFF(3," Import "),u.j41(4,"code"),u.EFF(5,"TuiPromptModule"),u.k0s(),u.EFF(6," into a module where you want to use our component "),u.k0s(),u.nrm(7,"tui-doc-code",10),u.k0s(),u.j41(8,"li")(9,"p"),u.EFF(10," Open with "),u.j41(11,"code"),u.EFF(12,"DialogService"),u.k0s()(),u.nrm(13,"tui-doc-code",11),u.k0s()()),2&e){const e=u.XpG();u.R7$(7),u.Y8G("code",e.exampleModule),u.R7$(6),u.Y8G("code",e.exampleService)}}let D=(()=>{var e;class t{constructor(e,t){this.dialogs=e,this.alerts=t,this.exampleModule=o.e(53268).then(o.t.bind(o,53268,17)),this.exampleService=o.e(5123).then(o.t.bind(o,5123,17)),this.example1={TypeScript:o.e(74950).then(o.t.bind(o,74950,17)),HTML:o.e(48314).then(o.t.bind(o,48314,17))},this.content="This is <code>PolymorpheusContent</code>, so it can be anything you like!",this.no="No",this.yes="Yes"}onClick(){this.dialogs.open(r.TUI_PROMPT,{label:"Are you sure?",size:"s",data:this}).pipe((0,s.n)((e=>this.alerts.open(String(e))))).subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)(u.rXU(c.TuiDialogService),u.rXU(c.TuiAlertService))},e.ɵcmp=u.VBU({type:e,selectors:[["example-tui-prompt"]],decls:4,vars:0,consts:[["header","Prompt","package","KIT","type","components"],["pageTab",""],["routerLink","/components/dialog","tuiLink",""],["fragment","prompt","routerLink","/components/dialog","tuiLink",""],["id","base","heading","Basic",3,"content"],["tuiButton","",3,"click"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent"],["documentationPropertyMode","input","documentationPropertyName","no","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","yes","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"]],template:function(e,t){1&e&&(u.j41(0,"tui-doc-page",0),u.DNE(1,P,12,1,"ng-template",1),u.DNE(2,C,12,2,"ng-template",1),u.DNE(3,v,14,2,"ng-template",1),u.k0s())},dependencies:[p.S,l.E,i.Wk,d.t,m.p,h.c,F.W,k.P,y.T,g.o,f.v,E],encapsulation:2,changeDetection:0}),t})(),S=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=u.$C({type:e}),e.ɵinj=u.G2t({imports:[n.MD,c.TuiButtonModule,c.TuiLinkModule,r.TuiPromptModule,i.iI,a.lK,i.iI.forChild((0,a.CC)(D)),c.TuiNotificationModule]}),t})()}}]);