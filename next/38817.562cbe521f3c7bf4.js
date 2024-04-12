(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38817],{38817:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiInputDateTimeModule:()=>R});var o=n(76733),i=n(72133),a=n(42932),u=n(87253),d=n(11746),r=n(42513),p=n(79184),l=n(81576),c=n(42336),m=n(87695),s=n(20755),T=n(36877),h=n(73097),y=n(38404),f=n(65004),x=n(43894),g=n(17894),Z=n(97967),A=n(89453),_=n(62825),M=n(97644),P=n(49686),V=n(90189),U=n(4732),b=n(91734),w=n(59915),H=n(78634),D=n(2313),C=n(7637),q=n(84669),I=n(26796),v=n(86235),N=n(62762),J=n(76337);function S(e,t){if(1&e&&(s.TgZ(0,"div",2)(1,"code"),s._uU(2,"InputDateTime"),s.qZA(),s._uU(3," allows to input date and time "),s.qZA(),s.TgZ(4,"p"),s._uU(5," Date formatting can be customized with "),s.TgZ(6,"a",3),s._uU(7," TUI_DATE_FORMAT "),s.qZA(),s._uU(8," token. "),s.qZA(),s.TgZ(9,"p",2)(10,"a",4),s._uU(11," See example "),s.qZA(),s._uU(12," with the usage of these tokens. "),s.qZA(),s.TgZ(13,"h3"),s._uU(14,"DI-tokens for input-configurations:"),s.qZA(),s.TgZ(15,"dl")(16,"dt")(17,"code"),s._uU(18,"TUI_DATE_TIME_VALUE_TRANSFORMER"),s.qZA()(),s.TgZ(19,"dd"),s._uU(20," custom format of control output ( "),s.TgZ(21,"code"),s._uU(22,"[TuiDay | null, TuiTime | null]"),s.qZA(),s._uU(23," is default). "),s.TgZ(24,"p")(25,"a",5),s._uU(26," See example "),s.qZA(),s._uU(27," with string as control's output. "),s.qZA()()(),s.TgZ(28,"tui-doc-example",6)(29,"tui-notification",7),s._uU(30," If you need to set some attributes or listen to events on native "),s.TgZ(31,"code"),s._uU(32,"input"),s.qZA(),s._uU(33," , you can put it inside with "),s.TgZ(34,"code"),s._uU(35,"Textfield"),s.qZA(),s._uU(36," directive as shown below "),s.qZA(),s._UZ(37,"tui-input-date-time-example-1"),s.qZA(),s.TgZ(38,"tui-doc-example",8),s._UZ(39,"tui-input-date-time-example-2"),s.qZA(),s.TgZ(40,"tui-doc-example",9),s._UZ(41,"tui-input-date-time-example-3"),s.qZA(),s.TgZ(42,"tui-doc-example",10),s._UZ(43,"tui-input-date-time-example-4"),s.qZA(),s.TgZ(44,"tui-doc-example",11)(45,"tui-notification",12),s._uU(46," Please note that native input datetime only supports HH:MM time mode "),s.qZA(),s._UZ(47,"tui-input-date-time-example-5"),s.qZA()),2&e){const e=s.oxw();s.xp6(28),s.Q6J("content",e.example1),s.xp6(10),s.Q6J("content",e.example2),s.xp6(2),s.Q6J("content",e.example3),s.xp6(2),s.Q6J("content",e.example4),s.xp6(2),s.Q6J("content",e.example5)}}function L(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-input-date-time",23),s.NdJ("tuiDropdownOpenChange",(function(t){s.CHM(e);const n=s.oxw(2);return s.KtG(n.dropdownOpen.next(t))})),s.ALo(1,"async"),s._uU(2," Choose date and time "),s.qZA()}if(2&e){const e=s.oxw(2);s.Udp("text-align",e.textAlign),s.Q6J("defaultActiveYearMonth",e.defaultActiveYearMonth)("disabledItemHandler",e.disabledItemHandler)("focusable",e.focusable)("formControl",e.control)("max",e.max)("min",e.min)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("timeMode",e.mode)("tuiDropdownOpen",!!s.lcZ(1,21,e.dropdownOpen))("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)}}function Y(e,t){1&e&&(s._uU(0," Disabled state (use "),s.TgZ(1,"code"),s._uU(2,"formControl.disable()"),s.qZA(),s._uU(3," ) "))}function Q(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"A handler that gets a date and returns true if it is disabled."),s.qZA(),s.TgZ(2,"strong"),s._uU(3,"Must be a pure function"),s.qZA())}function k(e,t){1&e&&s._uU(0," Min date ")}function O(e,t){1&e&&s._uU(0," Max date ")}function E(e,t){1&e&&s._uU(0," The default active month that is shown when you opens calendar for the first time ")}function F(e,t){1&e&&s._uU(0," Time modes for SS and MS support ")}function z(e,t){1&e&&s._uU(0," Custom align content by text-align ")}function G(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-demo",13),s.YNc(1,L,3,23,"ng-template"),s.qZA(),s.TgZ(2,"tui-doc-documentation"),s.YNc(3,Y,4,0,"ng-template",14),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.disabled=t)})),s.YNc(4,Q,4,0,"ng-template",15),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.disabledItemHandler=t)})),s.YNc(5,k,1,0,"ng-template",16),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.min=t)})),s.YNc(6,O,1,0,"ng-template",17),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.max=t)})),s.YNc(7,E,1,0,"ng-template",18),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.defaultActiveYearMonth=t)})),s.YNc(8,F,1,0,"ng-template",19),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.mode=t)})),s.qZA(),s._UZ(9,"inherited-documentation",20),s.TgZ(10,"tui-doc-documentation",21),s.YNc(11,z,1,0,"ng-template",22),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.textAlign=t)})),s.qZA()}if(2&e){const e=s.oxw();s.Q6J("control",e.control),s.xp6(3),s.Q6J("documentationPropertyValue",e.disabled),s.xp6(1),s.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),s.xp6(1),s.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),s.xp6(1),s.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),s.xp6(1),s.Q6J("documentationPropertyValues",e.defaultActiveYearMonthVariants)("documentationPropertyValue",e.defaultActiveYearMonth),s.xp6(1),s.Q6J("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode),s.xp6(1),s.Q6J("dropdown",!0),s.xp6(2),s.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function K(e,t){if(1&e&&(s.TgZ(0,"ol",24)(1,"li")(2,"p"),s._uU(3," Import an Angular module for forms and "),s.TgZ(4,"code"),s._uU(5,"TuiInputDateTimeModule"),s.qZA(),s._uU(6," in the same module where you want to use our component: "),s.qZA(),s._UZ(7,"tui-doc-code",25),s.qZA(),s.TgZ(8,"li")(9,"p"),s._uU(10," Declare a form ( "),s.TgZ(11,"code"),s._uU(12,"FormGroup"),s.qZA(),s._uU(13," ) or a control ( "),s.TgZ(14,"code"),s._uU(15,"FormControl"),s.qZA(),s._uU(16," ) in your component: "),s.qZA(),s._UZ(17,"tui-doc-code",26),s.qZA(),s.TgZ(18,"li"),s._uU(19," Use in template: "),s._UZ(20,"tui-doc-code",27),s.qZA()()),2&e){const e=s.oxw();s.xp6(7),s.Q6J("code",e.exampleModule),s.xp6(10),s.Q6J("code",e.exampleForm),s.xp6(3),s.Q6J("code",e.exampleHtml)}}let B=(()=>{var e;class t extends c.b{constructor(){super(...arguments),this.today=l.TuiDay.currentLocal(),this.cleaner=!1,this.control=new i.NI(null,i.kI.required),this.exampleForm=n.e(93995).then(n.t.bind(n,93995,17)),this.exampleModule=n.e(13284).then(n.t.bind(n,13284,17)),this.exampleHtml=n.e(90794).then(n.t.bind(n,90794,17)),this.example1={TypeScript:n.e(12039).then(n.t.bind(n,12039,17)),HTML:n.e(41018).then(n.t.bind(n,41018,17))},this.example2={TypeScript:n.e(42673).then(n.t.bind(n,42673,17)),HTML:n.e(85654).then(n.t.bind(n,85654,17))},this.example3={TypeScript:n.e(34516).then(n.t.bind(n,34516,17)),HTML:n.e(17152).then(n.t.bind(n,17152,17))},this.example4={TypeScript:n.e(44010).then(n.t.bind(n,74832,17)),HTML:n.e(30855).then(n.t.bind(n,30855,17)),"value-transformer.ts":n.e(6014).then(n.t.bind(n,6014,17))},this.example5={TypeScript:n.e(62093).then(n.t.bind(n,62093,17)),HTML:n.e(32353).then(n.t.bind(n,32353,17))},this.minVariants=[l.TUI_FIRST_DAY,new l.TuiDay(2017,2,5),new l.TuiDay(1900,0,1),new l.TuiDay((new Date).getFullYear()+3,1,1),[this.today.append({day:-1}),new l.TuiTime(12,20)]],this.min=this.minVariants[0],this.maxVariants=[l.TUI_LAST_DAY,new l.TuiDay(2017,11,11),new l.TuiDay(2020,2,5),new l.TuiDay(2300,0,1),[this.today.append({day:1}),new l.TuiTime(16,20)]],this.max=this.maxVariants[0],this.defaultActiveYearMonthVariants=[l.TuiMonth.currentLocal(),new l.TuiMonth(2020,2),new l.TuiMonth(2017,2)],this.defaultActiveYearMonth=this.defaultActiveYearMonthVariants[0],this.disabledItemHandlerVariants=[l.TUI_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemsVariants=[[],[new r.TuiNamedDay(l.TUI_LAST_DAY.append({year:-1}),"Until today")]],this.items=this.itemsVariants[0],this.modeVariants=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],this.mode=this.modeVariants[0]}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["example-tui-input-date-time"]],features:[s._Bn([(0,l.tuiProvide)(m.x,e)]),s.qOj],decls:4,vars:0,consts:[["header","InputDateTime","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],["fragment","date-format","routerLink","/utils/tokens","tuiLink",""],["fragment","date-localization","routerLink",".","tuiLink",""],["fragment","string-control-output","routerLink",".","tuiLink",""],["id","base","heading","Basic",3,"content"],[1,"tui-space_bottom-4"],["id","modes","heading","Modes",3,"content"],["id","date-localization","heading","Date localization",3,"content"],["id","string-control-output","heading","With control's output as string",3,"content"],["id","native","heading","Native input datetime",3,"content"],[1,"tui-space_bottom-5"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiDay | [TuiDay, TuiTime] | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiDay | [TuiDay, TuiTime] | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","defaultActiveYearMonth","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeMode","documentationPropertyType","TuiTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"defaultActiveYearMonth","disabledItemHandler","focusable","formControl","max","min","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","timeMode","tuiDropdownOpen","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiDropdownOpenChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,S,48,5,"ng-template",1),s.YNc(2,G,12,15,"ng-template",1),s.YNc(3,K,21,3,"ng-template",1),s.qZA())},dependencies:[T.c,h.F,y.z,f.B,x.q,g.n,Z.f,A.w,i.JJ,i.oH,_.D,M.u,P.c,V.bZ,U.b,b.x,w.s,H.a,D.L,a.rH,C.o,q.TuiInputDateTimeExample1,I.TuiInputDateTimeExample2,v.TuiInputDateTimeExample3,N.TuiInputDateTimeExample4,J.TuiInputDateTimeExample5,o.Ov],encapsulation:2,changeDetection:0}),t})(),R=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[u.fV,p.f,i.UX,i.u5,o.ez,r.TuiInputDateTimeModule,d.TuiHintModule,d.TuiTextfieldControllerModule,d.TuiNotificationModule,a.Bz.forChild((0,u.Ve)(B)),d.TuiDropdownModule]}),t})()}}]);