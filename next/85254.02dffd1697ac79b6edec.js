"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[85254],{85254:(je,M,o)=>{o.r(M),o.d(M,{ExampleTuiInputTagModule:()=>we});var g=o(12057),T=o(24751),O=o(33982),E=o(29851),s=o(76040),C=o(418),Y=o(75695),e=o(74788),_=o(68339),W=o(82880),B=o(98204),w=o(88331),j=o(37159),K=o(57068),d=o(72146),r=o(68874);let q=(()=>{class n{constructor(){this.control=new T.NI([])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-tag-example-1"]],decls:4,vars:2,consts:[[1,"b-form",3,"tuiTextfieldLabelOutside","formControl"]],template:function(t,i){1&t&&(e.TgZ(0,"tui-input-tag",0),e._uU(1," I'm a "),e.TgZ(2,"i"),e._uU(3,"placeholder"),e.qZA(),e.qZA()),2&t&&e.Q6J("tuiTextfieldLabelOutside",!0)("formControl",i.control)},directives:[d.P,r.x,T.JJ,T.oH],encapsulation:2,changeDetection:0}),n})();var k=o(79765),ee=o(25917),te=o(43190),f=o(39761),ne=o(71289),P=o(52219),oe=o(50020);function ae(n,a){if(1&n&&(e._UZ(0,"tui-data-list-wrapper",2),e.ALo(1,"async")),2&n){const t=e.oxw();e.Q6J("items",e.lcZ(1,1,t.items$))}}const S=["John Cleese","Eric Idle","Michael Palin","Terry Gilliam","Terry Jones","Graham Chapman"];let ie=(()=>{class n{constructor(){this.search$=new k.xQ,this.value=[],this.items$=this.search$.pipe((0,te.w)(t=>this.serverRequest(t).pipe((0,f.O)(null))),(0,f.O)(S))}onSearchChange(t){this.search$.next(t)}serverRequest(t){const i=S.filter(u=>u.toLowerCase().includes(t.toLowerCase()));return(0,ee.of)(i).pipe((0,ne.g)(1e3*Math.random()+500))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-tag-example-2"]],decls:3,vars:2,consts:[[1,"b-form",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange","searchChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(t,i){1&t&&(e.TgZ(0,"tui-input-tag",0),e.NdJ("ngModelChange",function(l){return i.value=l})("searchChange",function(l){return i.onSearchChange(l)}),e._uU(1," Choose your Pythons' "),e.YNc(2,ae,2,3,"tui-data-list-wrapper",1),e.qZA()),2&t&&e.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",i.value)},directives:[d.P,r.x,T.JJ,T.On,P.g,oe.e],pipes:[g.Ov],encapsulation:2,changeDetection:0}),n})();var x=o(10200),m=o(64374);let le=(()=>{class n{constructor(){this.testForm=new T.cw({testValue:new T.NI(["I","love","Angular"])})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-tag-example-3"]],decls:13,vars:6,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["formControlName","testValue",1,"tui-space_top-2",3,"tuiTextfieldCleaner"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-tag",1),e._uU(2," I'm a "),e.TgZ(3,"i"),e._uU(4,"placeholder"),e.qZA(),e.qZA(),e.TgZ(5,"tui-input-tag",2),e._uU(6," I'm a "),e.TgZ(7,"i"),e._uU(8,"placeholder"),e.qZA(),e.qZA(),e.TgZ(9,"tui-input-tag",3),e._uU(10," I'm a "),e.TgZ(11,"i"),e._uU(12,"placeholder"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",i.testForm),e.xp6(1),e.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),e.xp6(4),e.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),e.xp6(4),e.Q6J("tuiTextfieldCleaner",!0))},directives:[T._Y,T.JL,T.sg,d.P,T.JJ,T.u,x.s,r.x,m.b],encapsulation:2,changeDetection:0}),n})();var ue=o(64762),Te=o(36951),pe=o(20933),de=o(35065),re=o(7114);function se(n,a){if(1&n&&(e.TgZ(0,"button",5),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function _e(n,a){if(1&n&&(e.TgZ(0,"tui-data-list"),e.YNc(1,se,2,2,"button",4),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.filtered)}}function ce(n,a){1&n&&(e.ynx(0),e.YNc(1,_e,2,1,"tui-data-list",3),e.BQk())}const ge=function(){return[]},Ee=["The Midnight","FM-84","Timecop1983","GUNSHIP"];function h(n){return!/\d/.test(n)}class c{constructor(){var n;this.search="",this.tagValidator=h,this.control=new T.NI([],(n=h,({value:a})=>(a?a.filter(n):_.EMPTY_ARRAY).length>0?{tags:new _.TuiValidationError("Some tags are invalid")}:null))}get filtered(){var a;return this.filterBy(this.search,null!==(a=this.control.value)&&void 0!==a?a:[])}filterBy(a,t){return Ee.filter(i=>(0,_.TUI_DEFAULT_MATCHER)(i,a)&&!t.includes(i))}}c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["tui-input-tag-example-4"]],decls:8,vars:12,consts:[[1,"b-form",3,"formControl","tuiTextfieldLabelOutside","tagValidator","search","searchChange"],[4,"ngIf"],[3,"formControl","error"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(a,t){1&a&&(e.TgZ(0,"p"),e._uU(1,"In this sample, tags with digits are invalid"),e.qZA(),e.TgZ(2,"tui-input-tag",0),e.NdJ("searchChange",function(u){return t.search=u}),e._uU(3," Try it "),e.YNc(4,ce,2,0,"ng-container",1),e.qZA(),e._UZ(5,"tui-error",2),e.ALo(6,"async"),e.ALo(7,"tuiFieldError")),2&a&&(e.xp6(2),e.Q6J("formControl",t.control)("tuiTextfieldLabelOutside",!0)("tagValidator",t.tagValidator)("search",t.search),e.xp6(2),e.Q6J("ngIf",t.filtered.length),e.xp6(1),e.Q6J("formControl",t.control)("error",e.lcZ(6,7,e.lcZ(7,9,e.DdM(11,ge)))))},directives:[d.P,T.JJ,T.oH,r.x,g.O5,Te.v,P.g,pe.q,g.sg,de.v],pipes:[g.Ov,re.A],encapsulation:2,changeDetection:0}),(0,ue.gn)([_.tuiPure],c.prototype,"filterBy",null);var N=o(3729),I=o(84848);let Ce=(()=>{class n{constructor(){this.value=["\u06af\u0631\u0627\u0647\u0627\u0645 \u0686\u067e\u0645\u0646","\u062c\u0627\u0646 \u06a9\u0644\u06cc\u0632"]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-tag-example-5"]],decls:1,vars:3,consts:[["tuiTextfieldIconLeft","tuiIconSearchLarge","tuiHintContent","\u0645\u0648\u0646\u062a\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646",1,"input",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"tui-input-tag",0),e.NdJ("ngModelChange",function(l){return i.value=l}),e.qZA()),2&t&&e.Q6J("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0)("ngModel",i.value)},directives:[d.P,N.aR,I.bZ,m.b,r.x,T.JJ,T.On],styles:[".input[_ngcontent-%COMP%]{max-width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),n})(),Ne=(()=>{class n{constructor(){this.value=["not","unique","tags, with","custom","separator","separator"],this.customSeparator=";"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-tag-example-6"]],decls:1,vars:5,consts:[["tuiTextfieldIconLeft","tuiIconSearchLarge",1,"input",3,"uniqueTags","separator","tuiTextfieldCleaner","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"tui-input-tag",0),e.NdJ("ngModelChange",function(l){return i.value=l}),e.qZA()),2&t&&e.Q6J("uniqueTags",!1)("separator",i.customSeparator)("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0)("ngModel",i.value)},directives:[d.P,N.aR,m.b,r.x,T.JJ,T.On],styles:[".input[_ngcontent-%COMP%]{max-width:20rem}"],changeDetection:0}),n})(),Me=(()=>{class n{constructor(){this.value=["Use","space","button"],this.customSeparator=/[\s,]/}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-tag-example-7"]],decls:1,vars:3,consts:[[1,"b-form",3,"separator","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"tui-input-tag",0),e.NdJ("ngModelChange",function(l){return i.value=l}),e.qZA()),2&t&&e.Q6J("separator",i.customSeparator)("tuiTextfieldLabelOutside",!0)("ngModel",i.value)},directives:[d.P,r.x,T.JJ,T.On],encapsulation:2,changeDetection:0}),n})(),Oe=(()=>{class n{constructor(){this.control=new T.NI(["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen"])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-tag-example-8"]],decls:8,vars:5,consts:[[1,"input",3,"tuiTextfieldLabelOutside","formControl","rows"],[1,"input","tui-space_top-5",3,"formControl","rows"]],template:function(t,i){1&t&&(e.TgZ(0,"tui-input-tag",0),e._uU(1," I'm a "),e.TgZ(2,"i"),e._uU(3,"placeholder"),e.qZA(),e.qZA(),e.TgZ(4,"tui-input-tag",1),e._uU(5," I'm a "),e.TgZ(6,"i"),e._uU(7,"placeholder"),e.qZA(),e.qZA()),2&t&&(e.Q6J("tuiTextfieldLabelOutside",!0)("formControl",i.control)("rows",3),e.xp6(4),e.Q6J("formControl",i.control)("rows",3))},directives:[d.P,r.x,T.JJ,T.oH],styles:[".input[_ngcontent-%COMP%]{max-width:20rem}"],changeDetection:0}),n})();var fe=o(31823),Pe=o(54476),Se=o(17023),xe=o(54218),he=o(33250),Ie=o(88494),Ae=o(66596),ye=o(76349);function De(n,a){1&n&&(e._uU(0," Use power of RegExp to forbid spaces inside tags via property "),e.TgZ(1,"code"),e._uU(2,"[separator]"),e.qZA(),e._uU(3," . "))}function Fe(n,a){if(1&n&&(e.TgZ(0,"div",2),e.tHW(1,3),e._UZ(2,"code"),e.N_p(),e.qZA(),e.TgZ(3,"tui-doc-example",4),e._UZ(4,"tui-input-tag-example-1"),e.qZA(),e.TgZ(5,"tui-doc-example",5),e._UZ(6,"tui-input-tag-example-2"),e.qZA(),e.TgZ(7,"tui-doc-example",6),e._UZ(8,"tui-input-tag-example-3"),e.qZA(),e.TgZ(9,"tui-doc-example",7),e._UZ(10,"tui-input-tag-example-4"),e.qZA(),e.TgZ(11,"tui-doc-example",8),e._UZ(12,"tui-input-tag-example-5"),e.qZA(),e.TgZ(13,"tui-doc-example",9),e._UZ(14,"tui-input-tag-example-6"),e.qZA(),e.TgZ(15,"tui-doc-example",10),e.YNc(16,De,4,0,"ng-template",null,11,e.W1O),e._UZ(18,"tui-input-tag-example-7"),e.qZA(),e.TgZ(19,"tui-doc-example",12),e.TgZ(20,"div",2),e._uU(21," You can limit the number of visible rows in expandable mode with "),e.TgZ(22,"code"),e._uU(23,"rows"),e.qZA(),e._uU(24," input "),e.qZA(),e._UZ(25,"tui-input-tag-example-8"),e.qZA()),2&n){const t=e.MAs(17),i=e.oxw();e.xp6(3),e.Q6J("content",i.example1),e.xp6(2),e.Q6J("content",i.example2),e.xp6(2),e.Q6J("content",i.example3),e.xp6(2),e.Q6J("content",i.example4),e.xp6(2),e.Q6J("content",i.example5),e.xp6(2),e.Q6J("content",i.example6),e.xp6(2),e.Q6J("content",i.example7)("description",t),e.xp6(4),e.Q6J("content",i.example8)}}function Ue(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tui-input-tag",29),e.NdJ("searchChange",function(u){return e.CHM(t),e.oxw(2).search=u}),e._uU(1," Please enter Pythons' names "),e.qZA()}if(2&n){const t=e.oxw(2);e.Udp("text-align",t.textAlign),e.Q6J("formControl",t.control)("tuiDropdownAlign",t.dropdownAlign)("tuiDropdownDirection",t.dropdownDirection)("tuiDropdownLimitWidth",t.dropdownLimitWidth)("tuiDropdownMinHeight",t.dropdownMinHeight)("tuiDropdownMaxHeight",t.dropdownMaxHeight)("tuiDropdownOffset",t.dropdownOffset)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiHintAppearance",t.hintAppearance)("tuiTextfieldIcon",t.icon)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)("maxLength",t.maxLength)("rows",t.rows)("focusable",t.focusable)("disabledItemHandler",t.disabledItemHandler)("editable",t.editable)("expandable",t.expandable)("uniqueTags",t.uniqueTags)("separator",t.separator)("readOnly",t.readOnly)("tagValidator",t.tagValidator)("inputHidden",t.inputHidden)("pseudoHover",t.pseudoHovered)("pseudoActive",t.pseudoPressed)("pseudoFocus",t.pseudoFocused)("pseudoInvalid",t.pseudoInvalid)("search",t.search)}}function Le(n,a){1&n&&(e.tHW(0,30),e._UZ(1,"code"),e.N_p())}function Re(n,a){1&n&&(e.tHW(0,31),e._UZ(1,"code"),e.N_p())}function Ge(n,a){1&n&&e.SDv(0,32)}function $e(n,a){1&n&&e.SDv(0,33)}function ve(n,a){1&n&&e._uU(0," Ability to enter unique or non-unique tags ")}function Je(n,a){1&n&&e.SDv(0,34)}function Ve(n,a){1&n&&e.SDv(0,35)}function Ze(n,a){1&n&&e.SDv(0,36)}function be(n,a){1&n&&(e.tHW(0,37),e._UZ(1,"code"),e.N_p())}function He(n,a){1&n&&e.SDv(0,38)}function Xe(n,a){1&n&&e.SDv(0,39)}function Qe(n,a){1&n&&(e.tHW(0,40),e.TgZ(1,"a",41),e._UZ(2,"code"),e.qZA(),e.N_p())}function ze(n,a){1&n&&e.SDv(0,42)}function Ye(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo",13),e.YNc(1,Ue,2,33,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,Le,2,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().disabled=u}),e.YNc(4,Re,2,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().search=u}),e.YNc(5,Ge,1,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().maxLength=u}),e.YNc(6,$e,1,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().disabledItemHandler=u}),e.YNc(7,ve,1,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().uniqueTags=u}),e.YNc(8,Je,1,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().editable=u}),e.YNc(9,Ve,1,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().expandable=u}),e.YNc(10,Ze,1,0,"ng-template",21),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().separator=u}),e.YNc(11,be,2,0,"ng-template",22),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().rows=u}),e.YNc(12,He,1,0,"ng-template",23),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().inputHidden=u}),e.YNc(13,Xe,1,0,"ng-template",24),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().tagValidator=u}),e.YNc(14,Qe,3,0,"ng-template",25),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().icon=u}),e.qZA(),e._UZ(15,"inherited-documentation",26),e.TgZ(16,"tui-doc-documentation",27),e.YNc(17,ze,1,0,"ng-template",28),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().textAlign=u}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValue",t.search),e.xp6(1),e.Q6J("documentationPropertyValue",t.maxLength),e.xp6(1),e.Q6J("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.xp6(1),e.Q6J("documentationPropertyValue",t.uniqueTags),e.xp6(1),e.Q6J("documentationPropertyValue",t.editable),e.xp6(1),e.Q6J("documentationPropertyValue",t.expandable),e.xp6(1),e.Q6J("documentationPropertyValues",t.separatorVariants)("documentationPropertyValue",t.separator),e.xp6(1),e.Q6J("documentationPropertyValue",t.rows),e.xp6(1),e.Q6J("documentationPropertyValue",t.inputHidden),e.xp6(1),e.Q6J("documentationPropertyValues",t.tagValidatorVariants)("documentationPropertyValue",t.tagValidator),e.xp6(1),e.Q6J("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon),e.xp6(1),e.Q6J("dropdown",!0),e.xp6(2),e.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function We(n,a){if(1&n&&(e.TgZ(0,"ol",43),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,44),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",45),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,46),e.qZA(),e._UZ(9,"tui-doc-code",47),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(4),e.Q6J("code",t.exampleHtml)}}let Be=(()=>{class n extends W.b{constructor(){super(...arguments),this.exampleModule=o.e(9600).then(o.t.bind(o,9600,17)),this.exampleHtml=o.e(22524).then(o.t.bind(o,22524,17)),this.example1={TypeScript:o.e(58335).then(o.t.bind(o,58335,17)),HTML:o.e(32119).then(o.t.bind(o,32119,17))},this.example2={TypeScript:o.e(48276).then(o.t.bind(o,48276,17)),HTML:o.e(7633).then(o.t.bind(o,7633,17))},this.example3={TypeScript:o.e(18290).then(o.t.bind(o,18290,17)),HTML:o.e(88939).then(o.t.bind(o,88939,17))},this.example4={TypeScript:o.e(37105).then(o.t.bind(o,37105,17)),HTML:o.e(1702).then(o.t.bind(o,1702,17))},this.example5={TypeScript:o.e(69211).then(o.t.bind(o,69211,17)),HTML:o.e(20139).then(o.t.bind(o,20139,17)),LESS:o.e(44686).then(o.t.bind(o,44686,17))},this.example6={TypeScript:o.e(83429).then(o.t.bind(o,83429,17)),HTML:o.e(32927).then(o.t.bind(o,53072,17)),LESS:o.e(13449).then(o.t.bind(o,13449,17))},this.example7={TypeScript:o.e(80627).then(o.t.bind(o,80627,17)),HTML:o.e(72114).then(o.t.bind(o,72114,17))},this.example8={TypeScript:o.e(63330).then(o.t.bind(o,63330,17)),HTML:o.e(48805).then(o.t.bind(o,48805,17)),LESS:o.e(22314).then(o.t.bind(o,22314,17))},this.control=new T.NI(["John Cleese","Eric Idle","Michael Palin"],T.kI.required),this.editable=!0,this.expandable=!0,this.uniqueTags=!0,this.separatorVariants=[",",";",/[\d]/,/[\s,]/],this.separator=this.separatorVariants[0],this.iconVariants=["tuiIconSearchLarge"],this.icon="",this.iconAlignVariants=["left","right"],this.iconAlign=this.iconAlignVariants[1],this.maxLengthVariants=[10,20],this.maxLength=null,this.search="",this.rows=100,this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[this.sizeVariants.length-1],this.tagValidatorVariants=[_.ALWAYS_TRUE_HANDLER,t=>"test"===t,t=>"mail"!==t],this.tagValidator=this.tagValidatorVariants[0],this.inputHidden=!1,this.disabledItemHandlerVariants=[_.ALWAYS_FALSE_HANDLER,t=>"T"===String(t)[0]],this.disabledItemHandler=this.disabledItemHandlerVariants[0]}}return n.\u0275fac=function(){let a;return function(i){return(a||(a=e.n5z(n)))(i||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["example-input-tag"]],features:[e._Bn([{provide:B.x,useExisting:(0,e.Gpc)(()=>n)},(0,E.PR)(["tuiTextfieldPrefix","tuiTextfieldPostfix","tuiTextfieldFiller"])]),e.qOj],decls:4,vars:0,consts:function(){let a,t,i,u,l,A,y,D,F,U,L,R,G,$,v,J,V,Z,b,H,X,Q,z;return a=$localize`:␟afcbf8b99d1a559f2d4d82b878687bf91c4dc49b␟682295232355881622:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputTag${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to input several tags with autocomplete and list in dropdown. `,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟1abaa1c3acfb9987cf9a1c84422e8baef7af845e␟989459206984870037:Async items loading`,u=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,l=$localize`:␟9f773bc90c4bb84c592f2ed4763f1dbc3320e7e3␟3176539569174538377:Custom validation`,A=$localize`:␟e79e58f2fd2e2018afeb160923b2810951e9dbfc␟2885218428372331823:Direction: RTL`,y=$localize`:␟0d231f5447e6c607e870e25fa79277b55c41c3dd␟4936688169379716572:Custom separator`,D=$localize`:␟732faab5edc3c0659d1ad673424d45f843542394␟2465031901930244222:No spaces inside tags`,F=$localize`:␟3920ff09a93d8b00437c30d555b56a20319a581a␟2465618403499432905:expandable`,U=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,L=$localize`:␟b45da9f2bafc300277a162143be5640a2c5aaf67␟1886174402380484199: Textfield value to subscribe on input or setting it from the outside (emits ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: when item from list selected) `,R=$localize`:␟72440801cb65c3a7c9b0d315129ebd3b738c31be␟2408126884590879453: Max length of tag `,G=$localize`:␟602d2ca3dd3d6bd61166eb562cbc5a7d3ba64eb6␟7890132259542012587: Handler for deactivation some tags `,$=$localize`:␟6287011b40da302e14ccffef5a614afb7cc7e283␟6978135358566748527: Tags are editable `,v=$localize`:␟a4cdbbb3982f88a63813e7e82e991b6a6eddc494␟4902838123072095655: Control height can be expanded to show all tags `,J=$localize`:␟30f5c50c55cc36d40d8bfec07bf28cee6bb9f1b5␟5475543650697092168: String or RegExp to separate tags `,V=$localize`:␟a96e8afcd84a7e13d809bf3cf105ae4fceb93ee3␟3033193110728465870: A number of visible rows in ${"\ufffd#1\ufffd"}:START_TAG_CODE:expandable${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: mode `,Z=$localize`:␟6ce45bd4a1fda17e0ac98d65053d1109077c6d83␟1436849720143811983: Hide input field. For example, to prevent adding new tags `,b=$localize`:␟24fc826e9f6d1737ab827b2db51272e81e476b65␟3924647870684137368: A function that cheks that tag is valid `,H=$localize`:␟86a120364edaa105c400be3e6a0b84d9e6789a6a␟7918098038633269309: Icon content. If content is a string, it is used as stringified svg or a name of icon registered in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:SvgService${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:`,X=$localize`:␟f53a375d54d7a00804c315043a43ae281c9efcb8␟226068063890007003: Custom align content by text-align `,Q=$localize`:␟a48b1b6fe4f1a0418758cda1de24c138cf8d5ad5␟8882593062505514869: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputTagModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,z=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputTag","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],a,["id","base","heading",t,3,"content"],["id","async","heading",i,3,"content"],["id","sizes","heading",u,3,"content"],["id","validation","heading",l,3,"content"],["id","rtl","heading",A,3,"content"],["id","separator","heading",y,3,"content"],["id","no-spaces-inside-tags","heading",D,3,"content","description"],["forbidSpacesDescription",""],["id","expandable","heading",F,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","uniqueTags","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","expandable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string | RegExp",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rows","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","inputHidden","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tagValidator","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldIcon","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.text-align",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownOffset","tuiHintContent","tuiHintDirection","tuiHintAppearance","tuiTextfieldIcon","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","maxLength","rows","focusable","disabledItemHandler","editable","expandable","uniqueTags","separator","readOnly","tagValidator","inputHidden","pseudoHover","pseudoActive","pseudoFocus","pseudoInvalid","search","searchChange"],U,L,R,G,$,v,J,V,Z,b,H,["tuiLink","","routerLink","/services/svg-service"],X,[1,"b-demo-steps"],Q,["filename","myComponent.module.ts",3,"code"],z,["filename","myComponent.template.html",3,"code"]]},template:function(t,i){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,Fe,26,9,"ng-template",1),e.YNc(2,Ye,18,20,"ng-template",1),e.YNc(3,We,10,2,"ng-template",1),e.qZA())},directives:[w.q,j.n,K.f,q,ie,le,c,Ce,Ne,Me,Oe,fe.F,Pe.z,Se.B,xe.w,d.P,T.JJ,T.oH,he.Ek,I.bZ,Ie.AW,N.aR,m.b,r.x,x.s,Ae.V,O.yS,ye.c],encapsulation:2,changeDetection:0}),n})(),we=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.ez,T.u5,T.UX,Y.f,s.TuiDataListModule,C.TuiDataListWrapperModule,s.TuiLinkModule,C.TuiInputTagModule,s.TuiErrorModule,C.TuiFieldErrorPipeModule,s.TuiDropdownModule,s.TuiTextfieldControllerModule,s.TuiHintModule,E.fV,O.Bz.forChild((0,E.Ve)(Be))]]}),n})()}}]);