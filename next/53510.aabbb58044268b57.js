(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53510],{53510:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiInputNumberModule:()=>ce});var o=n(88692),i=n(69900),u=n(91795),r=n(24007),a=n(64500),c=n(75526),p=n(498),l=n(75695),s=n(64537),d=n(82880),m=n(98204),f=n(16753),g=n(13735),x=n(66596),T=n(64374),h=n(6707),y=n(68874),Z=n(10200),b=n(3729),_=n(44998),U=n(89437),P=n(87205),A=n(79121),C=n(83074),M=n(10977),q=n(62840),v=n(60404),J=n(43560),V=n(93525),N=n(38868),w=n(54218),L=n(84848),H=n(99886);let S=(()=>{var e;class t{constructor(){this.control=new i.NI(100)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-number-example-1"]],decls:9,vars:12,consts:[["tuiHintContent","Dollar sign is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","tuiTextfieldPrefix"],["tuiHintContent","Euro sign (numeric code 978) is commonly placed AFTER the amount. Use [postfix].",3,"formControl","tuiTextfieldPostfix"],["tuiHintContent","Pound sign (numeric code 826) is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","tuiTextfieldPrefix"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-number",0),s.ALo(1,"tuiCurrency"),s._uU(2," Type a sum\n"),s.qZA(),s.TgZ(3,"tui-input-number",1),s.ALo(4,"tuiCurrency"),s._uU(5," Type a sum\n"),s.qZA(),s.TgZ(6,"tui-input-number",2),s.ALo(7,"tuiCurrency"),s._uU(8," Type a sum\n"),s.qZA()),2&e&&(s.Q6J("formControl",t.control)("tuiTextfieldPrefix",s.lcZ(1,6,"USD")),s.xp6(3),s.Q6J("formControl",t.control)("tuiTextfieldPostfix",s.lcZ(4,8,"978")),s.xp6(3),s.Q6J("formControl",t.control)("tuiTextfieldPrefix",s.lcZ(7,10,826)))},dependencies:[i.JJ,i.oH,f.q,g.g,_.A,U.T,L.bZ,H.i],styles:["tui-input-number[_ngcontent-%COMP%]{max-width:20rem}tui-input-number[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),t})();var Q=n(91030);let k=(()=>{var e;class t{constructor(){this.testForm=new i.cw({testValue:new i.NI(null)})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-number-example-2"]],decls:10,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldPostfix","kg","tuiTextfieldSize","s"],["name","potato","tuiTextfield",""],["formControlName","testValue","tuiTextfieldPostfix","L","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside"],["id","milk","tuiTextfield",""],["formControlName","testValue","tuiTextfieldPostfix","cm",1,"tui-space_top-2"],["placeholder","Make bunnies happy","tuiTextfield",""]],template:function(e,t){1&e&&(s.TgZ(0,"form",0)(1,"tui-input-number",1),s._uU(2," Potatoes "),s._UZ(3,"input",2),s.qZA(),s.TgZ(4,"tui-input-number",3),s._uU(5," Milk "),s._UZ(6,"input",4),s.qZA(),s.TgZ(7,"tui-input-number",5),s._uU(8," Carrot "),s._UZ(9,"input",6),s.qZA()()),2&e&&(s.Q6J("formGroup",t.testForm),s.xp6(4),s.Q6J("tuiTextfieldLabelOutside",!0))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,f.q,g.g,Q.M,y.x,Z.s,U.T],styles:[".input[_ngcontent-%COMP%]{color:orange}"],changeDetection:0}),t})(),I=(()=>{var e;class t{constructor(){this.testForm=new i.cw({testValue:new i.NI(Math.PI)})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-number-example-3"]],decls:5,vars:2,consts:[[1,"b-form",3,"formGroup"],["decimal","not-zero","formControlName","testValue",3,"precision"]],template:function(e,t){1&e&&(s.TgZ(0,"form",0)(1,"tui-input-number",1)(2,"strong"),s._uU(3,"π"),s.qZA(),s._uU(4," -value "),s.qZA()()),2&e&&(s.Q6J("formGroup",t.testForm),s.xp6(1),s.Q6J("precision",8))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,f.q,g.g],encapsulation:2,changeDetection:0}),t})(),O=(()=>{var e;class t{constructor(){this.value=1234.56}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-number-example-4"]],features:[s._Bn([(0,c.tuiNumberFormatProvider)({decimalSeparator:".",thousandSeparator:","})])],decls:2,vars:1,consts:[["tuiHintContent","Using cleaner is not recommended ;)","tuiTextfieldPrefix","$",1,"input",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-number",0),s.NdJ("ngModelChange",(function(e){return t.value=e})),s._uU(1," Type a sum\n"),s.qZA()),2&e&&s.Q6J("ngModel",t.value)},dependencies:[i.JJ,i.On,f.q,g.g,_.A,L.bZ],styles:[".input[_ngcontent-%COMP%]{text-align:right;width:320px}"],changeDetection:0}),t})(),F=(()=>{var e;class t{constructor(){this.value=123.56}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-number-example-5"]],features:[s._Bn([(0,c.tuiNumberFormatProvider)({decimalSeparator:",",thousandSeparator:"."})])],decls:2,vars:1,consts:[["decimal","never","tuiTextfieldPostfix",",00","tuiTextfieldPrefix","¥ ",1,"b-form",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-number",0),s.NdJ("ngModelChange",(function(e){return t.value=e})),s._uU(1," Type a sum\n"),s.qZA()),2&e&&s.Q6J("ngModel",t.value)},dependencies:[i.JJ,i.On,f.q,g.g,_.A,U.T],encapsulation:2,changeDetection:0}),t})(),D=(()=>{var e;class t{constructor(){this.value=237}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-number-example-6"]],features:[s._Bn([(0,p.tuiInputNumberOptionsProvider)({decimal:"never",step:1})])],decls:2,vars:1,consts:[[1,"b-form",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-number",0),s.NdJ("ngModelChange",(function(e){return t.value=e})),s._uU(1," Only integers\n"),s.qZA()),2&e&&s.Q6J("ngModel",t.value)},dependencies:[i.JJ,i.On,f.q,g.g],encapsulation:2,changeDetection:0}),t})();var z=n(8514),E=n(61528),Y=n(27969);let B=(()=>{var e;class t{constructor(){this.value=1234.56}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-number-example-7"]],features:[s._Bn([{provide:c.TUI_NUMBER_FORMAT,deps:[z.Co],useFactory:e=>e.pipe((0,E.w)((e=>e)),(0,Y.U)((({name:e})=>({...c.TUI_DEFAULT_NUMBER_FORMAT,thousandSeparator:"english"===e?",":" ",decimalSeparator:"english"===e?".":","}))))}])],decls:2,vars:1,consts:[["tuiTextfieldPrefix","$",1,"input",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-number",0),s.NdJ("ngModelChange",(function(e){return t.value=e})),s._uU(1," Type a sum\n"),s.qZA()),2&e&&s.Q6J("ngModel",t.value)},dependencies:[i.JJ,i.On,f.q,g.g,_.A],encapsulation:2,changeDetection:0}),t})();function G(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1," To input money use properties "),s.TgZ(2,"code"),s._uU(3,"[postfix]"),s.qZA(),s._uU(4," or "),s.TgZ(5,"code"),s._uU(6,"[prefix]"),s.qZA(),s._uU(7," . To get currency symbol use pipe "),s.TgZ(8,"a",20),s._uU(9," tuiCurrency "),s.qZA(),s._uU(10," . "),s.qZA())}function R(e,t){1&e&&(s._uU(0," Customize input via "),s.TgZ(1,"a",21),s._uU(2," TextfieldControllers "),s.qZA(),s._uU(3," . "))}function X(e,t){1&e&&(s._uU(0," Use property "),s.TgZ(1,"code"),s._uU(2,"[precision]"),s.qZA(),s._uU(3," to configure a number of digits after comma. "))}function K(e,t){if(1&e&&(s.TgZ(0,"div",2),s._uU(1,"A component to input numbers. Control value is also of number type."),s.qZA(),s.TgZ(2,"section")(3,"h3"),s._uU(4,"There are also other components to input numbers:"),s.qZA(),s.TgZ(5,"ul",3)(6,"li",4)(7,"a",5)(8,"strong"),s._uU(9,"Slider"),s.qZA()()(),s.TgZ(10,"li",4)(11,"a",6)(12,"strong"),s._uU(13,"InputSlider"),s.qZA()(),s._uU(14," (it uses "),s.TgZ(15,"code"),s._uU(16,"InputNumber"),s.qZA(),s._uU(17," inside) "),s.qZA(),s.TgZ(18,"li",4)(19,"a",7)(20,"strong"),s._uU(21,"InputRange"),s.qZA()(),s._uU(22," (it uses "),s.TgZ(23,"code"),s._uU(24,"InputNumber"),s.qZA(),s._uU(25," inside) "),s.qZA()()(),s.TgZ(26,"p"),s._uU(27," Number formatting can be customized with "),s.TgZ(28,"a",8),s._uU(29," TUI_NUMBER_FORMAT "),s.qZA(),s._uU(30," token. "),s.qZA(),s.TgZ(31,"tui-doc-example",9),s.YNc(32,G,11,0,"ng-template",null,10,s.W1O),s._UZ(34,"tui-input-number-example-1"),s.qZA(),s.TgZ(35,"tui-doc-example",11),s.YNc(36,R,4,0,"ng-template",null,12,s.W1O),s.TgZ(38,"tui-notification",13),s._uU(39," If you need to set some attributes or listen to events on native "),s.TgZ(40,"code"),s._uU(41,"input"),s.qZA(),s._uU(42," , you can put it inside with "),s.TgZ(43,"code"),s._uU(44,"Textfield"),s.qZA(),s._uU(45," directive as shown below "),s.qZA(),s._UZ(46,"tui-input-number-example-2"),s.qZA(),s.TgZ(47,"tui-doc-example",14),s.YNc(48,X,4,0,"ng-template",null,15,s.W1O),s._UZ(50,"tui-input-number-example-3"),s.qZA(),s.TgZ(51,"tui-doc-example",16),s._UZ(52,"tui-input-number-example-4"),s.qZA(),s.TgZ(53,"tui-doc-example",17),s._UZ(54,"tui-input-number-example-5"),s.qZA(),s.TgZ(55,"tui-doc-example",18),s._UZ(56,"tui-input-number-example-6"),s.qZA(),s.TgZ(57,"tui-doc-example",19),s._UZ(58,"tui-input-number-example-7"),s.qZA()),2&e){const e=s.MAs(33),t=s.MAs(37),n=s.MAs(49),o=s.oxw();s.xp6(31),s.Q6J("content",o.example1)("description",e),s.xp6(4),s.Q6J("content",o.example2)("description",t),s.xp6(12),s.Q6J("content",o.example3)("description",n),s.xp6(4),s.Q6J("content",o.example4),s.xp6(2),s.Q6J("content",o.example5),s.xp6(2),s.Q6J("content",o.example6),s.xp6(2),s.Q6J("content",o.example7)}}function W(e,t){if(1&e&&(s.TgZ(0,"tui-input-number",31),s._uU(1," Type a sum "),s.qZA()),2&e){const e=s.oxw(2);s.Udp("text-align",e.textAlign),s.Q6J("decimal",e.decimal)("focusable",e.focusable)("formControl",e.control)("max",e.max)("min",e.min)("precision",e.precision)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("step",e.step)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldFiller",e.filler)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldPostfix",e.postfix)("tuiTextfieldPrefix",e.prefix)("tuiTextfieldSize",e.size)}}function j(e,t){1&e&&(s._uU(0," Disabled state (use "),s.TgZ(1,"code"),s._uU(2,"formControl.disable()"),s.qZA(),s._uU(3," ) "))}function $(e,t){1&e&&s._uU(0," Min value ")}function ee(e,t){1&e&&s._uU(0," Max value ")}function te(e,t){1&e&&(s._uU(0," A number of digits after comma ( "),s.TgZ(1,"code"),s._uU(2,"Infinity"),s.qZA(),s._uU(3," for an untouched decimal part) "))}function ne(e,t){1&e&&s._uU(0," Show/hide decimal ")}function oe(e,t){1&e&&s._uU(0," Step to increase/decrease value with keyboard and buttons on the side ")}function ie(e,t){1&e&&s._uU(0," Custom align content by text-align ")}function ue(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-demo",22),s.YNc(1,W,2,25,"ng-template"),s.qZA(),s.TgZ(2,"tui-doc-documentation"),s.YNc(3,j,4,0,"ng-template",23),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.disabled=t)})),s.YNc(4,$,1,0,"ng-template",24),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.min=t)})),s.YNc(5,ee,1,0,"ng-template",25),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.max=t)})),s.YNc(6,te,4,0,"ng-template",26),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.precision=t)})),s.YNc(7,ne,1,0,"ng-template",27),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.decimal=t)})),s.YNc(8,oe,1,0,"ng-template",28),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.step=t)})),s.qZA(),s._UZ(9,"inherited-documentation"),s.TgZ(10,"tui-doc-documentation",29),s.YNc(11,ie,1,0,"ng-template",30),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.textAlign=t)})),s.qZA()}if(2&e){const e=s.oxw();s.Q6J("control",e.control),s.xp6(3),s.Q6J("documentationPropertyValue",e.disabled),s.xp6(1),s.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),s.xp6(1),s.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),s.xp6(1),s.Q6J("documentationPropertyValues",e.precisionVariants)("documentationPropertyValue",e.precision),s.xp6(1),s.Q6J("documentationPropertyValues",e.decimalVariants)("documentationPropertyValue",e.decimal),s.xp6(1),s.Q6J("documentationPropertyValue",e.step),s.xp6(3),s.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function re(e,t){if(1&e&&(s.TgZ(0,"ol",32)(1,"li")(2,"p"),s._uU(3," Import an Angular module for forms and "),s.TgZ(4,"code"),s._uU(5,"TuiInputNumberModule"),s.qZA(),s._uU(6," in the same module where you want to use our component: "),s.qZA(),s._UZ(7,"tui-doc-code",33),s.qZA(),s.TgZ(8,"li")(9,"p"),s._uU(10," Declare a form ( "),s.TgZ(11,"code"),s._uU(12,"FormGroup"),s.qZA(),s._uU(13," ) or a control ( "),s.TgZ(14,"code"),s._uU(15,"FormControl"),s.qZA(),s._uU(16," ) in your component: "),s.qZA(),s._UZ(17,"tui-doc-code",34),s.qZA(),s.TgZ(18,"li")(19,"p"),s._uU(20,"Add to the template:"),s.qZA(),s._UZ(21,"tui-doc-code",35),s.qZA()()),2&e){const e=s.oxw();s.xp6(7),s.Q6J("code",e.exampleModule),s.xp6(10),s.Q6J("code",e.exampleForm),s.xp6(4),s.Q6J("code",e.exampleHtml)}}let ae=(()=>{var e;class t extends d.b{constructor(){super(...arguments),this.exampleForm=n.e(25924).then(n.t.bind(n,25924,17)),this.exampleModule=n.e(19856).then(n.t.bind(n,19856,17)),this.exampleHtml=n.e(19624).then(n.t.bind(n,19624,17)),this.example1={HTML:n.e(61406).then(n.t.bind(n,61406,17)),TypeScript:n.e(6456).then(n.t.bind(n,6456,17)),LESS:n.e(35512).then(n.t.bind(n,35512,17))},this.example2={HTML:n.e(64780).then(n.t.bind(n,64780,17)),TypeScript:n.e(86101).then(n.t.bind(n,86101,17)),LESS:n.e(16174).then(n.t.bind(n,16174,17))},this.example3={HTML:n.e(37519).then(n.t.bind(n,37519,17)),TypeScript:n.e(10311).then(n.t.bind(n,10311,17))},this.example4={TypeScript:n.e(34933).then(n.t.bind(n,34933,17)),HTML:n.e(34468).then(n.t.bind(n,34468,17)),LESS:n.e(70707).then(n.t.bind(n,70707,17))},this.example5={TypeScript:n.e(89302).then(n.t.bind(n,89302,17)),HTML:n.e(82435).then(n.t.bind(n,82435,17))},this.example6={TypeScript:n.e(38511).then(n.t.bind(n,38511,17)),HTML:n.e(69003).then(n.t.bind(n,69003,17))},this.example7={TypeScript:n.e(47773).then(n.t.bind(n,47773,17)),HTML:n.e(5680).then(n.t.bind(n,5680,17))},this.minVariants=[-1/0,-500,5,25],this.min=this.minVariants[0],this.maxVariants=[1/0,10,500],this.max=this.maxVariants[0],this.decimalVariants=["not-zero","always","never"],this.decimal=this.decimalVariants[0],this.cleaner=!1,this.precisionVariants=[2,3,4,1/0],this.precision=this.precisionVariants[0],this.control=new i.NI(6432,i.kI.required),this.step=0}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["example-tui-input-number"]],features:[s._Bn([{provide:m.x,useExisting:(0,s.Gpc)((()=>e))}]),s.qOj],decls:4,vars:0,consts:[["header","InputNumber","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["routerLink","/components/slider","tuiLink",""],["routerLink","/components/input-slider","tuiLink",""],["routerLink","/components/input-range","tuiLink",""],["fragment","number-format","routerLink","/utils/tokens","tuiLink",""],["id","currency","heading","Currency",3,"content","description"],["currencyPipeDescription",""],["id","sizes","heading","sizes",3,"content","description"],["textFieldControllerDescription",""],[1,"tui-space_bottom-4","b-form"],["id","precision","heading","8 digits after comma",3,"content","description"],["precisionDescription",""],["id","align","description","With currency symbol as prefix and custom format","heading","Align to the right",3,"content"],["id","prefix-postfix","heading","Prefix and postfix",3,"content"],["id","options","heading","Default options override",3,"content"],["id","dynamic","heading","Dynamic formatting change",3,"content"],["routerLink","/pipes/currency","tuiLink",""],["routerLink","/directives/textfield-controller","tuiLink",""],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","precision","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","decimal","documentationPropertyType","TuiDecimal",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","step","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"decimal","focusable","formControl","max","min","precision","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","step","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldFiller","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,K,59,10,"ng-template",1),s.YNc(2,ue,12,13,"ng-template",1),s.YNc(3,re,22,3,"ng-template",1),s.qZA())},dependencies:[i.JJ,i.oH,f.q,g.g,x.V,T.b,h.B,y.x,Z.s,b.a,_.A,U.T,P.k,A.L,C.c,M.F,q.z,v.B,J.q,V.n,N.f,w.w,L.bZ,u.rH,S,k,I,O,F,D,B],encapsulation:2,changeDetection:0}),t})(),ce=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[o.ez,i.u5,i.UX,p.TuiInputNumberModule,r.TuiCurrencyPipeModule,c.TuiSvgModule,p.TuiRadioListModule,c.TuiButtonModule,c.TuiLinkModule,c.TuiTextfieldControllerModule,c.TuiNotificationModule,a.fV,l.f,c.TuiHintModule,u.Bz.forChild((0,a.Ve)(ae))]}),t})()}}]);