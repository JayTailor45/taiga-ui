(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[69431],{69431:(t,e,o)=>{o.r(e),o.d(e,{default:()=>O});var n=o(35548),i=o(77113),a=o(85483),u=o(48266),c=o(40970),r=o(275),s=o(80323),l=o(4594),p=o(70288),m=o(33701),d=o(55836),h=o(31136),g=o(72187),y=o(34962),f=o(61091),Z=o(43548),U=o(76970),_=o(62753),P=o(50714);function T(t,e){if(1&t&&(n._UZ(0,"tui-doc-example",4),n.ALo(1,"tuiComponent"),n.ALo(2,"tuiExample"),n.ALo(3,"tuiKebab")),2&t){const t=e.$implicit,o=e.index;n.oxw();const i=n.MAs(12);n.Q6J("component",n.lcZ(1,5,o+1))("content",n.xi3(2,7,o+1,"html,ts"))("description",6===o?i:"")("heading",t)("id",n.lcZ(3,10,t))}}function C(t,e){1&t&&(n._uU(0," This example demonstrates how to limit maximum number of alert being shown to concurrently (it uses "),n.TgZ(1,"a",5)(2,"code"),n._uU(3,"mergeAll"),n.qZA()(),n._uU(4," RxJS-operator to achieve it). Just frequently click on the button to see it in action. "))}function x(t,e){if(1&t&&(n.TgZ(0,"p"),n._uU(1,"Built-in implementation of notifications"),n.qZA(),n.TgZ(2,"p"),n._uU(3," Position on screen can be configured by providing margins with "),n.TgZ(4,"code"),n._uU(5,"TUI_ALERT_POSITION"),n.qZA(),n._uU(6," token. Default value is "),n.TgZ(7,"code"),n._uU(8,"2rem 3rem 0 auto"),n.qZA(),n._uU(9," . "),n.qZA(),n.YNc(10,T,4,12,"tui-doc-example",2),n.YNc(11,C,5,0,"ng-template",null,3,n.W1O)),2&t){const t=n.oxw();n.xp6(10),n.Q6J("ngForOf",t.examples)}}function V(t,e){1&t&&n._uU(0," Content ")}function A(t,e){1&t&&n._uU(0," Status ")}function b(t,e){1&t&&n._uU(0," Heading ")}function N(t,e){1&t&&(n._uU(0," Input data of notification, type: "),n._UZ(1,"code",14))}function w(t,e){1&t&&n._uU(0," Auto close timeout, 0 for no auto close ")}function q(t,e){1&t&&n._uU(0," Has close button ")}function I(t,e){1&t&&n._uU(0," Icon ")}function J(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"tui-doc-demo")(1,"button",6),n.NdJ("click",(function(){n.CHM(t);const e=n.oxw();return n.KtG(e.showNotification())})),n._uU(2," Show "),n.qZA()(),n.TgZ(3,"tui-doc-documentation"),n.YNc(4,V,1,0,"ng-template",7),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.content=e)})),n.YNc(5,A,1,0,"ng-template",8),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.status=e)})),n.YNc(6,b,1,0,"ng-template",9),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.label=e)})),n.YNc(7,N,2,0,"ng-template",10),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.data=e)})),n.YNc(8,w,1,0,"ng-template",11),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.autoClose=e)})),n.YNc(9,q,1,0,"ng-template",12),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.closeable=e)})),n.YNc(10,I,1,0,"ng-template",13),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.icon=e)})),n.qZA()}if(2&t){const t=n.oxw();n.xp6(4),n.Q6J("documentationPropertyValues",t.contentVariants)("documentationPropertyValue",t.content),n.xp6(1),n.Q6J("documentationPropertyValues",t.statusVariants)("documentationPropertyValue",t.status),n.xp6(1),n.Q6J("documentationPropertyValue",t.label),n.xp6(1),n.Q6J("documentationPropertyValue",t.data),n.xp6(1),n.Q6J("documentationPropertyValues",t.autoCloseVariants)("documentationPropertyValue",t.autoClose),n.xp6(1),n.Q6J("documentationPropertyValue",t.closeable),n.xp6(1),n.Q6J("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon)}}function v(t,e){if(1&t&&(n.TgZ(0,"ol",15)(1,"li",16)(2,"p"),n._uU(3," Use service "),n.TgZ(4,"code"),n._uU(5,"open"),n.qZA(),n._uU(6," method and subscribe to "),n.TgZ(7,"code"),n._uU(8,"Observable"),n.qZA()(),n._UZ(9,"tui-doc-code",17),n.qZA(),n.TgZ(10,"li",16),n._uU(11," To pass notification with custom content, you can use "),n.TgZ(12,"a",18)(13,"code"),n._uU(14,"your template"),n.qZA()(),n._uU(15," . "),n.qZA(),n.TgZ(16,"li",16)(17,"p"),n._uU(18," You can also customize notification logic with a component. Inject "),n.TgZ(19,"code"),n._uU(20,"POLYMORPHEUS_CONTEXT"),n.qZA(),n._uU(21," into the component to get context input data and to output results. It has the following interface: "),n._UZ(22,"code",19),n._uU(23," , where "),n.TgZ(24,"code"),n._uU(25,"O"),n.qZA(),n._uU(26," is output data type and "),n.TgZ(27,"code"),n._uU(28,"I"),n.qZA(),n._uU(29," is input data type. "),n.qZA()(),n.TgZ(30,"li",16)(31,"p"),n._uU(32," Use "),n.TgZ(33,"code"),n._uU(34,"new PolymorpheusComponent(CustomNotificationComponent)"),n.qZA(),n._uU(35," to show notification component with a service: "),n.qZA(),n._UZ(36,"tui-doc-code",17),n.qZA(),n.TgZ(37,"li",16)(38,"p"),n._uU(39," Use "),n.TgZ(40,"code"),n._uU(41,"completeWith"),n.qZA(),n._uU(42," method to control notification from itself: "),n.qZA(),n._UZ(43,"tui-doc-code",20),n.qZA(),n.TgZ(44,"li",16)(45,"p"),n._uU(46," If you use it from lazy loading modules, and want to reach for some local providers, you can pass "),n.TgZ(47,"code"),n._uU(48,"Injector"),n.qZA(),n._uU(49," into "),n.TgZ(50,"code"),n._uU(51,"new PolymorpheusComponent"),n.qZA(),n._uU(52," of your alert component. "),n.qZA(),n._UZ(53,"tui-doc-code",20),n.qZA(),n.TgZ(54,"li",16)(55,"p"),n._uU(56," You can customize default alert options by providing "),n.TgZ(57,"code"),n._uU(58,"TUI_ALERT_OPTIONS"),n.qZA(),n._uU(59," injection token globally across your app. "),n.qZA(),n._UZ(60,"tui-doc-code",21),n.qZA()()),2&t){const t=n.oxw();n.xp6(9),n.Q6J("code",t.exampleServiceUsage),n.xp6(27),n.Q6J("code",t.exampleServiceUsageComponent),n.xp6(7),n.Q6J("code",t.exampleCustomAlert),n.xp6(10),n.Q6J("code",t.exampleLazyModule),n.xp6(7),n.Q6J("code",t.exampleOptions)}}const O=(()=>{var t;class e{constructor(){this.alerts=(0,n.f3M)(u.TuiAlertService),this.defaultIcon=(0,n.f3M)(u.TUI_NOTIFICATION_OPTIONS).icon,this.examples=["Text","Template","Component","Component with data","Component with custom label","Directive","Concurrency limit"],this.method=o.e(71441).then(o.t.bind(o,71441,17)),this.exampleServiceUsage=o.e(4107).then(o.t.bind(o,4107,17)),this.exampleServiceUsageComponent=o.e(95674).then(o.t.bind(o,95674,17)),this.exampleCustomAlert=o.e(67743).then(o.t.bind(o,67743,17)),this.exampleLazyModule=o.e(17363).then(o.t.bind(o,17363,17)),this.exampleOptions=o.e(6489).then(o.t.bind(o,6489,17)),this.data=100,this.label="Heading",this.statusVariants=["info","success","error","warning"],this.status=this.statusVariants[0],this.iconVariants=["Default","tuiIconHeart"],this.icon=this.iconVariants[0],this.contentVariants=["String","Component"],this.content=this.contentVariants[0],this.autoCloseVariants=[0,3e3,5e3,1e3,500],this.autoClose=this.autoCloseVariants[1],this.closeable=!0,this.component=new c.Al(s.AlertExampleWithDataComponent,(0,n.f3M)(n.gxx))}get selectedContent(){return"String"===this.content?this.content:this.component}showNotification(){this.alerts.open(this.selectedContent,{label:this.label,data:this.data,status:this.status,autoClose:this.autoClose,closeable:this.closeable,icon:this.icon===this.iconVariants[0]?this.defaultIcon:this.icon}).pipe((0,r.w)((t=>this.alerts.open(t,{label:"Notification responded with:"})))).subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[n.jDz],decls:4,vars:0,consts:[["header","Alert","package","CORE","path","core/components/alert/alert.service.ts","type","components"],["pageTab",""],[3,"component","content","description","heading","id",4,"ngFor","ngForOf"],["concurrency",""],[3,"component","content","description","heading","id"],["href","https://rxjs.dev/api/index/function/mergeAll","target","_blank","tuiLink",""],["size","m","tuiButton","","type","button",3,"click"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","status","documentationPropertyType","TuiNotification",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autoClose","documentationPropertyType","TuiHandler | number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","closeable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","icon","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiText","<I>"],[1,"tui-list","tui-list_ordered"],[1,"tui-list__item"],["filename","my.component.ts",3,"code"],["fragment","example-template","routerLink","/components/alert","tuiLink",""],["tuiText","TuiPopover<TuiAlertOptions<I>, O>"],["filename","customNotification.component.ts",3,"code"],["filename","app.module.ts",3,"code"]],template:function(t,e){1&t&&(n.TgZ(0,"tui-doc-page",0),n.YNc(1,x,13,1,"ng-template",1),n.YNc(2,J,11,11,"ng-template",1),n.YNc(3,v,61,5,"ng-template",1),n.qZA())},dependencies:[a.kG,l.sg,p.c,m.F,d.z,h.B,g.f,y.q,f.n,Z.v,U.R,_.I,P.I,u.TuiLinkDirective,u.TuiButtonDirective,i.rH],encapsulation:2,changeDetection:0}),e})()}}]);