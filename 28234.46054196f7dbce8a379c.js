(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[28234],{28234:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiInputTagModule:()=>He});var o=n(12057),i=n(23738),a=n(33982),r=n(81125),u=n(52404),l=n(64862),d=n(26485),c=n(75695),p=n(74788),s=n(4797),m=n(82880),g=n(98204),h=n(43560),x=n(93525),f=n(33772),T=n(72146),y=n(68874);let P=(()=>{class e{constructor(){this.control=new i.NI([])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-tag-example-1"]],decls:4,vars:2,consts:[[1,"b-form",3,"formControl","tuiTextfieldLabelOutside"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-input-tag",0),p._uU(1," I'm a "),p.TgZ(2,"i"),p._uU(3,"placeholder"),p.qZA(),p.qZA()),2&e&&p.Q6J("formControl",t.control)("tuiTextfieldLabelOutside",!0)},directives:[T.P,i.JJ,i.oH,y.x],encapsulation:2,changeDetection:0}),e})();var Z=n(79765),b=n(25917),C=n(43190),w=n(39761),V=n(71289),J=n(52219),v=n(50020);function M(e,t){if(1&e&&(p._UZ(0,"tui-data-list-wrapper",2),p.ALo(1,"async")),2&e){const e=p.oxw();p.Q6J("items",p.lcZ(1,1,e.items$))}}const A=["John Cleese","Eric Idle","Michael Palin","Terry Gilliam","Terry Jones","Graham Chapman"];let _=(()=>{class e{constructor(){this.search$=new Z.xQ,this.value=[],this.items$=this.search$.pipe((0,C.w)((e=>this.serverRequest(e).pipe((0,w.O)(null)))),(0,w.O)(A))}onSearchChange(e){this.search$.next(e)}serverRequest(e){const t=A.filter((t=>t.toLowerCase().includes(e.toLowerCase())));return(0,b.of)(t).pipe((0,V.g)(1e3*Math.random()+500))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-tag-example-2"]],decls:3,vars:2,consts:[[1,"b-form",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange","searchChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-input-tag",0),p.NdJ("ngModelChange",(function(e){return t.value=e}))("searchChange",(function(e){return t.onSearchChange(e)})),p._uU(1," Choose your Pythons' "),p.YNc(2,M,2,3,"tui-data-list-wrapper",1),p.qZA()),2&e&&p.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[T.P,y.x,i.JJ,i.On,J.g,v.e],pipes:[o.Ov],encapsulation:2,changeDetection:0}),e})();var L=n(10200),H=n(64374);let U=(()=>{class e{constructor(){this.testForm=new i.cw({testValue:new i.NI(["I","love","Angular"])})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-tag-example-3"]],decls:13,vars:6,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside"],["formControlName","testValue",1,"tui-space_top-2",3,"tuiTextfieldCleaner"]],template:function(e,t){1&e&&(p.TgZ(0,"form",0),p.TgZ(1,"tui-input-tag",1),p._uU(2," I'm a "),p.TgZ(3,"i"),p._uU(4,"placeholder"),p.qZA(),p.qZA(),p.TgZ(5,"tui-input-tag",2),p._uU(6," I'm a "),p.TgZ(7,"i"),p._uU(8,"placeholder"),p.qZA(),p.qZA(),p.TgZ(9,"tui-input-tag",3),p._uU(10," I'm a "),p.TgZ(11,"i"),p._uU(12,"placeholder"),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.Q6J("formGroup",t.testForm),p.xp6(1),p.Q6J("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),p.xp6(4),p.Q6J("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),p.xp6(4),p.Q6J("tuiTextfieldCleaner",!0))},directives:[i._Y,i.JL,i.sg,T.P,i.JJ,i.u,L.s,H.b,y.x],encapsulation:2,changeDetection:0}),e})();var N=n(64762),q=n(36951),O=n(20933),I=n(35065),D=n(7114);function Q(e,t){if(1&e&&(p.TgZ(0,"button",5),p._uU(1),p.qZA()),2&e){const e=t.$implicit;p.Q6J("value",e),p.xp6(1),p.hij(" ",e," ")}}function S(e,t){if(1&e&&(p.TgZ(0,"tui-data-list"),p.YNc(1,Q,2,2,"button",4),p.qZA()),2&e){const e=p.oxw(2);p.xp6(1),p.Q6J("ngForOf",e.filtered)}}function Y(e,t){1&e&&(p.ynx(0),p.YNc(1,S,2,1,"tui-data-list",3),p.BQk())}const E=function(){return[]},F=["The Midnight","FM-84","Timecop1983","GUNSHIP"];function z(e){return!/\d/.test(e)}class k{constructor(){var e;this.search="",this.tagValidator=z,this.control=new i.NI([],(e=z,({value:t})=>(t?t.filter(e):s.EMPTY_ARRAY).length>0?{tags:new s.TuiValidationError("Some tags are invalid")}:null))}get filtered(){var e;return this.filterBy(this.search,null!==(e=this.control.value)&&void 0!==e?e:[])}filterBy(e,t){return F.filter((n=>(0,s.TUI_DEFAULT_MATCHER)(n,e)&&!t.includes(n)))}}k.ɵfac=function(e){return new(e||k)},k.ɵcmp=p.Xpm({type:k,selectors:[["tui-input-tag-example-4"]],decls:8,vars:12,consts:[[1,"b-form",3,"formControl","tagValidator","tuiTextfieldLabelOutside","search","searchChange"],[4,"ngIf"],[3,"error","formControl"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(e,t){1&e&&(p.TgZ(0,"p"),p._uU(1,"In this sample, tags with digits are invalid"),p.qZA(),p.TgZ(2,"tui-input-tag",0),p.NdJ("searchChange",(function(e){return t.search=e})),p._uU(3," Try it "),p.YNc(4,Y,2,0,"ng-container",1),p.qZA(),p._UZ(5,"tui-error",2),p.ALo(6,"async"),p.ALo(7,"tuiFieldError")),2&e&&(p.xp6(2),p.Q6J("formControl",t.control)("tagValidator",t.tagValidator)("tuiTextfieldLabelOutside",!0)("search",t.search),p.xp6(2),p.Q6J("ngIf",t.filtered.length),p.xp6(1),p.Q6J("error",p.lcZ(6,7,p.lcZ(7,9,p.DdM(11,E))))("formControl",t.control))},directives:[T.P,i.JJ,i.oH,y.x,o.O5,q.v,J.g,O.q,o.sg,I.v],pipes:[o.Ov,D.A],encapsulation:2,changeDetection:0}),(0,N.gn)([s.tuiPure],k.prototype,"filterBy",null);var R=n(84848),B=n(3729);let X=(()=>{class e{constructor(){this.value=["گراهام چپمن","جان کلیز"]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-tag-example-5"]],decls:1,vars:3,consts:[["tuiHintContent","مونتی پایتون","tuiTextfieldIconLeft","tuiIconSearchLarge",1,"input",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-input-tag",0),p.NdJ("ngModelChange",(function(e){return t.value=e})),p.qZA()),2&e&&p.Q6J("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[T.P,R.bZ,B.a,H.b,y.x,i.JJ,i.On],styles:[".input[_ngcontent-%COMP%]{max-width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),e})();var G=n(39607),W=n(77027),$=n(41360);let j=(()=>{class e{constructor(){this.value=["not","unique","tags, with","custom","separator","separator"],this.customSeparator=";"}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-tag-example-6"]],decls:4,vars:7,consts:[["orientation","vertical","tuiGroup","","tuiHintContent","Just here to test icons alignment","tuiTextfieldIconLeft","tuiIconSearchLarge",1,"input",3,"collapsed","tuiTextfieldCleaner"],[3,"ngModel","ngModelChange"],[3,"separator","tuiTextfieldLabelOutside","uniqueTags","ngModel","ngModelChange"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"tui-input",1),p.NdJ("ngModelChange",(function(e){return t.customSeparator=e})),p._uU(2,"Custom separator"),p.qZA(),p.TgZ(3,"tui-input-tag",2),p.NdJ("ngModelChange",(function(e){return t.value=e})),p.qZA(),p.qZA()),2&e&&(p.Q6J("collapsed",!0)("tuiTextfieldCleaner",!0),p.xp6(1),p.Q6J("ngModel",t.customSeparator),p.xp6(2),p.Q6J("separator",t.customSeparator)("tuiTextfieldLabelOutside",!0)("uniqueTags",!1)("ngModel",t.value))},directives:[G.g,R.bZ,B.a,H.b,W.K,$.w,i.JJ,i.On,T.P,y.x],styles:[".input[_ngcontent-%COMP%]{max-width:20rem}"],changeDetection:0}),e})(),K=(()=>{class e{constructor(){this.value=["Use","space","button"],this.customSeparator=/[\s,]/}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-tag-example-7"]],decls:1,vars:3,consts:[[1,"b-form",3,"separator","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-input-tag",0),p.NdJ("ngModelChange",(function(e){return t.value=e})),p.qZA()),2&e&&p.Q6J("separator",t.customSeparator)("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[T.P,y.x,i.JJ,i.On],encapsulation:2,changeDetection:0}),e})(),ee=(()=>{class e{constructor(){this.control=new i.NI(["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen"])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-tag-example-8"]],decls:8,vars:5,consts:[[1,"input",3,"formControl","rows","tuiTextfieldLabelOutside"],[1,"input","tui-space_top-5",3,"formControl","rows"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-input-tag",0),p._uU(1," I'm a "),p.TgZ(2,"i"),p._uU(3,"placeholder"),p.qZA(),p.qZA(),p.TgZ(4,"tui-input-tag",1),p._uU(5," I'm a "),p.TgZ(6,"i"),p._uU(7,"placeholder"),p.qZA(),p.qZA()),2&e&&(p.Q6J("formControl",t.control)("rows",3)("tuiTextfieldLabelOutside",!0),p.xp6(4),p.Q6J("formControl",t.control)("rows",3))},directives:[T.P,i.JJ,i.oH,y.x],styles:[".input[_ngcontent-%COMP%]{max-width:20rem}"],changeDetection:0}),e})();var te=n(72878),ne=n(88494);let oe=(()=>{class e{constructor(){this.control=new i.NI([]),this.min=new Date(2e3,0,1),this.max=new Date(2025,4,10),this.options=(0,te.tr)({mode:"dd/mm/yyyy",separator:".",min:this.min,max:this.max}),this.tagValidator=e=>{const{year:t,month:n,day:o}=s.TuiDay.parseRawDateString(e);return s.TuiDay.isValidDay(t,n,o)&&s.TuiDay.normalizeOf(t,n,o).toLocalNativeDate()>=this.min&&s.TuiDay.normalizeOf(t,n,o).toLocalNativeDate()<=this.max}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-tag-example-9"]],decls:2,vars:4,consts:[["tuiTextfieldIcon","tuiIconCalendarLarge",3,"formControl","maskito","tagValidator","tuiTextfieldLabelOutside"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-input-tag",0),p._uU(1," dd.mm.yyyy\n"),p.qZA()),2&e&&p.Q6J("formControl",t.control)("maskito",t.options)("tagValidator",t.tagValidator)("tuiTextfieldLabelOutside",!0)},directives:[T.P,ne.A,i.JJ,i.oH,r.ro,y.x],encapsulation:2,changeDetection:0}),e})();var ie=n(10977),ae=n(51192),re=n(60404),ue=n(54218),le=n(33250),de=n(69956),ce=n(66596),pe=n(83074);function se(e,t){1&e&&(p._uU(0," Use power of RegExp to forbid spaces inside tags via property "),p.TgZ(1,"code"),p._uU(2,"[separator]"),p.qZA(),p._uU(3," . "))}function me(e,t){if(1&e&&(p.TgZ(0,"div",2),p.TgZ(1,"code"),p._uU(2,"InputTag"),p.qZA(),p._uU(3," allows to input several tags with autocomplete and list in dropdown. "),p.qZA(),p.TgZ(4,"tui-doc-example",3),p._UZ(5,"tui-input-tag-example-1"),p.qZA(),p.TgZ(6,"tui-doc-example",4),p._UZ(7,"tui-input-tag-example-2"),p.qZA(),p.TgZ(8,"tui-doc-example",5),p._UZ(9,"tui-input-tag-example-3"),p.qZA(),p.TgZ(10,"tui-doc-example",6),p._UZ(11,"tui-input-tag-example-4"),p.qZA(),p.TgZ(12,"tui-doc-example",7),p._UZ(13,"tui-input-tag-example-5"),p.qZA(),p.TgZ(14,"tui-doc-example",8),p._UZ(15,"tui-input-tag-example-6"),p.qZA(),p.TgZ(16,"tui-doc-example",9),p.YNc(17,se,4,0,"ng-template",null,10,p.W1O),p._UZ(19,"tui-input-tag-example-7"),p.qZA(),p.TgZ(20,"tui-doc-example",11),p.TgZ(21,"div",2),p._uU(22," You can limit the number of visible rows in expandable mode with "),p.TgZ(23,"code"),p._uU(24,"rows"),p.qZA(),p._uU(25," input "),p.qZA(),p._UZ(26,"tui-input-tag-example-8"),p.qZA(),p.TgZ(27,"tui-doc-example",12),p._UZ(28,"tui-input-tag-example-9"),p.qZA()),2&e){const e=p.MAs(18),t=p.oxw();p.xp6(4),p.Q6J("content",t.example1),p.xp6(2),p.Q6J("content",t.example2),p.xp6(2),p.Q6J("content",t.example3),p.xp6(2),p.Q6J("content",t.example4),p.xp6(2),p.Q6J("content",t.example5),p.xp6(2),p.Q6J("content",t.example6),p.xp6(2),p.Q6J("content",t.example7)("description",e),p.xp6(4),p.Q6J("content",t.example8),p.xp6(7),p.Q6J("content",t.example9)}}function ge(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-input-tag",30),p.NdJ("searchChange",(function(t){return p.CHM(e),p.oxw(2).search=t}))("tuiDropdownOpenChange",(function(t){return p.CHM(e),p.oxw(2).dropdownOpen.next(t)})),p.ALo(1,"async"),p._uU(2," Please enter Pythons' names "),p.qZA()}if(2&e){const e=p.oxw(2);p.Udp("text-align",e.textAlign),p.Q6J("disabledItemHandler",e.disabledItemHandler)("editable",e.editable)("expandable",e.expandable)("focusable",e.focusable)("formControl",e.control)("inputHidden",e.inputHidden)("maxLength",e.maxLength)("placeholder",e.exampleText)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("rows",e.rows)("separator",e.separator)("tagValidator",e.tagValidator)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownOffset",e.dropdownOffset)("tuiDropdownOpen",!!p.lcZ(1,35,e.dropdownOpen))("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldIcon",e.icon)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("uniqueTags",e.uniqueTags)("search",e.search)}}function he(e,t){1&e&&(p._uU(0," Disabled state (use "),p.TgZ(1,"code"),p._uU(2,"formControl.disable()"),p.qZA(),p._uU(3," ) "))}function xe(e,t){1&e&&(p._uU(0," Textfield value to subscribe on input or setting it from the outside (emits "),p.TgZ(1,"code"),p._uU(2,"null"),p.qZA(),p._uU(3," when item from list selected) "))}function fe(e,t){1&e&&p._uU(0," Max length of tag ")}function Te(e,t){1&e&&p._uU(0," Handler for deactivation some tags ")}function ye(e,t){1&e&&p._uU(0," Placeholder ")}function Pe(e,t){1&e&&p._uU(0," Ability to enter unique or non-unique tags ")}function Ze(e,t){1&e&&p._uU(0," Tags are editable ")}function be(e,t){1&e&&p._uU(0," Control height can be expanded to show all tags ")}function Ce(e,t){1&e&&p._uU(0," String or RegExp to separate tags ")}function we(e,t){1&e&&(p._uU(0," A number of visible rows in "),p.TgZ(1,"code"),p._uU(2,"expandable"),p.qZA(),p._uU(3," mode "))}function Ve(e,t){1&e&&p._uU(0," Hide input field. For example, to prevent adding new tags ")}function Je(e,t){1&e&&p._uU(0," A function that checks that tag is valid ")}function ve(e,t){1&e&&(p._uU(0," Icon content. If content is a string, it is used as stringified svg or a name of icon registered in "),p.TgZ(1,"a",31),p.TgZ(2,"code"),p._uU(3,"SvgService"),p.qZA(),p.qZA())}function Me(e,t){1&e&&p._uU(0," Custom align content by text-align ")}function Ae(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-doc-demo",13),p.YNc(1,ge,3,37,"ng-template"),p.qZA(),p.TgZ(2,"tui-doc-documentation"),p.YNc(3,he,4,0,"ng-template",14),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().disabled=t})),p.YNc(4,xe,4,0,"ng-template",15),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().search=t})),p.YNc(5,fe,1,0,"ng-template",16),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().maxLength=t})),p.YNc(6,Te,1,0,"ng-template",17),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().disabledItemHandler=t})),p.YNc(7,ye,1,0,"ng-template",18),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().exampleText=t})),p.YNc(8,Pe,1,0,"ng-template",19),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().uniqueTags=t})),p.YNc(9,Ze,1,0,"ng-template",20),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().editable=t})),p.YNc(10,be,1,0,"ng-template",21),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().expandable=t})),p.YNc(11,Ce,1,0,"ng-template",22),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().separator=t})),p.YNc(12,we,4,0,"ng-template",23),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().rows=t})),p.YNc(13,Ve,1,0,"ng-template",24),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().inputHidden=t})),p.YNc(14,Je,1,0,"ng-template",25),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().tagValidator=t})),p.YNc(15,ve,4,0,"ng-template",26),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().icon=t})),p.qZA(),p._UZ(16,"inherited-documentation",27),p.TgZ(17,"tui-doc-documentation",28),p.YNc(18,Me,1,0,"ng-template",29),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().textAlign=t})),p.qZA()}if(2&e){const e=p.oxw();p.Q6J("control",e.control),p.xp6(3),p.Q6J("documentationPropertyValue",e.disabled),p.xp6(1),p.Q6J("documentationPropertyValue",e.search),p.xp6(1),p.Q6J("documentationPropertyValue",e.maxLength),p.xp6(1),p.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),p.xp6(1),p.Q6J("documentationPropertyValue",e.exampleText),p.xp6(1),p.Q6J("documentationPropertyValue",e.uniqueTags),p.xp6(1),p.Q6J("documentationPropertyValue",e.editable),p.xp6(1),p.Q6J("documentationPropertyValue",e.expandable),p.xp6(1),p.Q6J("documentationPropertyValues",e.separatorVariants)("documentationPropertyValue",e.separator),p.xp6(1),p.Q6J("documentationPropertyValue",e.rows),p.xp6(1),p.Q6J("documentationPropertyValue",e.inputHidden),p.xp6(1),p.Q6J("documentationPropertyValues",e.tagValidatorVariants)("documentationPropertyValue",e.tagValidator),p.xp6(1),p.Q6J("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.icon),p.xp6(1),p.Q6J("dropdown",!0),p.xp6(2),p.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function _e(e,t){if(1&e&&(p.TgZ(0,"ol",32),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiInputTagModule"),p.qZA(),p._uU(6," into a module where you want to use our component "),p.qZA(),p._UZ(7,"tui-doc-code",33),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",34),p.qZA(),p.qZA()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(4),p.Q6J("code",e.exampleHtml)}}let Le=(()=>{class e extends m.b{constructor(){super(...arguments),this.exampleModule=n.e(9600).then(n.t.bind(n,9600,17)),this.exampleHtml=n.e(22524).then(n.t.bind(n,22524,17)),this.example1={TypeScript:n.e(58335).then(n.t.bind(n,58335,17)),HTML:n.e(32119).then(n.t.bind(n,32119,17))},this.example2={TypeScript:n.e(48276).then(n.t.bind(n,48276,17)),HTML:n.e(7633).then(n.t.bind(n,7633,17))},this.example3={TypeScript:n.e(18290).then(n.t.bind(n,18290,17)),HTML:n.e(88939).then(n.t.bind(n,88939,17))},this.example4={TypeScript:n.e(37105).then(n.t.bind(n,37105,17)),HTML:n.e(1702).then(n.t.bind(n,1702,17))},this.example5={TypeScript:n.e(69211).then(n.t.bind(n,69211,17)),HTML:n.e(20139).then(n.t.bind(n,20139,17)),LESS:n.e(44686).then(n.t.bind(n,44686,17))},this.example6={TypeScript:n.e(83429).then(n.t.bind(n,83429,17)),HTML:n.e(32927).then(n.t.bind(n,53072,17)),LESS:n.e(13449).then(n.t.bind(n,13449,17))},this.example7={TypeScript:n.e(80627).then(n.t.bind(n,80627,17)),HTML:n.e(72114).then(n.t.bind(n,72114,17))},this.example8={TypeScript:n.e(63330).then(n.t.bind(n,63330,17)),HTML:n.e(48805).then(n.t.bind(n,48805,17)),LESS:n.e(22314).then(n.t.bind(n,22314,17))},this.example9={TypeScript:n.e(47480).then(n.t.bind(n,47480,17)),HTML:n.e(27115).then(n.t.bind(n,27115,17))},this.control=new i.NI(["John Cleese","Eric Idle","Michael Palin"],i.kI.required),this.editable=!0,this.expandable=!0,this.uniqueTags=!0,this.separatorVariants=[",",";",/[\d]/,/[\s,]/],this.separator=this.separatorVariants[0],this.iconVariants=["tuiIconSearchLarge"],this.icon="",this.maxLengthVariants=[10,20],this.maxLength=null,this.search="",this.rows=100,this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[this.sizeVariants.length-1],this.tagValidatorVariants=[s.ALWAYS_TRUE_HANDLER,e=>"test"===e,e=>"mail"!==e],this.tagValidator=this.tagValidatorVariants[0],this.inputHidden=!1,this.disabledItemHandlerVariants=[s.ALWAYS_FALSE_HANDLER,e=>String(e).startsWith("T")],this.disabledItemHandler=this.disabledItemHandlerVariants[0]}}return e.ɵfac=function(){let t;return function(n){return(t||(t=p.n5z(e)))(n||e)}}(),e.ɵcmp=p.Xpm({type:e,selectors:[["example-input-tag"]],features:[p._Bn([{provide:g.x,useExisting:(0,p.Gpc)((()=>e))},(0,u.PR)(["tuiTextfieldPrefix","tuiTextfieldPostfix","tuiTextfieldFiller"])]),p.qOj],decls:4,vars:0,consts:[["header","InputTag","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["id","base","heading","Basic",3,"content"],["id","async","heading","Async items loading",3,"content"],["id","sizes","heading","sizes",3,"content"],["id","validation","heading","Custom validation",3,"content"],["id","rtl","heading","Direction: RTL",3,"content"],["id","separator","heading","Custom separator",3,"content"],["id","no-spaces-inside-tags","heading","No spaces inside tags",3,"content","description"],["forbidSpacesDescription",""],["id","expandable","heading","expandable",3,"content"],["id","mask","heading","Mask",3,"content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","search","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLength","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","placeholder","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","uniqueTags","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","editable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","expandable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","separator","documentationPropertyType","string | RegExp",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","rows","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","inputHidden","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tagValidator","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldIcon","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"disabledItemHandler","editable","expandable","focusable","formControl","inputHidden","maxLength","placeholder","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","rows","separator","tagValidator","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","tuiDropdownOpen","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldIcon","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize","uniqueTags","search","searchChange","tuiDropdownOpenChange"],["routerLink","/services/svg-service","tuiLink",""],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,me,29,10,"ng-template",1),p.YNc(2,Ae,19,21,"ng-template",1),p.YNc(3,_e,12,2,"ng-template",1),p.qZA())},directives:[h.q,x.n,f.f,P,_,U,k,X,j,K,ee,oe,ie.F,ae.z,re.B,ue.w,T.P,i.JJ,i.oH,le.Ek,de.o,R.bZ,H.b,ne.A,B.a,y.x,L.s,a.yS,ce.V,pe.c],pipes:[o.Ov],encapsulation:2,changeDetection:0}),e})(),He=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[o.ez,i.u5,i.UX,c.f,l.TuiDataListModule,d.TuiDataListWrapperModule,l.TuiLinkModule,d.TuiInputModule,l.TuiGroupModule,d.TuiInputTagModule,l.TuiErrorModule,d.TuiFieldErrorPipeModule,l.TuiDropdownModule,l.TuiTextfieldControllerModule,l.TuiHintModule,u.fV,a.Bz.forChild((0,u.Ve)(Le)),r.U5]]}),e})()}}]);