(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26638,87334],{38057:(t,e,n)=>{n.d(e,{c:()=>r});var i,o=n(84911),s=n(20755),a=n(2697);class r extends a.AbstractTuiNullableControl{constructor(t){super(),this.options=t,this.autocompleteEnabled=this.options.autocompleteEnabled,this.binChange=new s.vpe}get autocompleteCard(){return this.autocomplete}get bin(){return this.card.length<6?null:this.card.slice(0,6)}get defaultIcon(){const t=this.getPaymentSystem(this.card);return t&&this.options.icons[t]}get paymentSystem(){return this.getPaymentSystem(this.card)}get icon(){return this.cardSrc||this.defaultIcon}get autocomplete(){return this.autocompleteEnabled?"cc-number":"off"}getPaymentSystem(t){return this.options.paymentSystemHandler(t)}}(i=r).ɵfac=function(t){s.$Z()},i.ɵdir=s.lG2({type:i,inputs:{cardSrc:"cardSrc",autocompleteEnabled:"autocompleteEnabled"},outputs:{binChange:"binChange"},features:[s.qOj]}),(0,o.gn)([a.tuiPure],r.prototype,"getPaymentSystem",null)},20969:(t,e,n)=>{n.d(e,{c9:()=>i.c,Nd:()=>l.Nd,cL:()=>l.cL,zW:()=>o.z,aJ:()=>s.a,S9:()=>u,Xt:()=>l.Xt});var i=n(38057),o=n(85397),s=n(88197),a=n(93803),r=n(80506),c=n(20755);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({imports:[a.TuiPrimitiveTextfieldModule,a.TuiTextfieldControllerModule,r.TuiValueAccessorModule,a.TuiSvgModule]}),e})();var l=n(96816)},85397:(t,e,n)=>{n.d(e,{z:()=>v});var i=n(20755),o=n(11074),s=n(2697),a=n(93803),r=n(38057),c=n(96816),u=n(28858),l=n(39047),d=n(53339),g=n(7871),m=n(89713),p=n(62998);function h(t,e){if(1&t&&i._UZ(0,"tui-svg",2),2&t){const t=i.oxw();i.Q6J("src",t.defaultIcon)}}const f=["*",[["input"]]],_=["*","input"];let v=(()=>{var t;class e extends r.c{constructor(){super((0,i.f3M)(c.cL)),this.textfieldSize=(0,i.f3M)(a.TUI_TEXTFIELD_SIZE),this.maskOptions={mask:o.Aj}}get card(){return this.value??""}get nativeFocusableElement(){return this.input?.nativeFocusableElement??null}get focused(){return!!this.input&&this.input.focused}onValueChange(t){const e=t.split(" ").join(""),n=this.bin;this.value=e;const i=this.bin;n!==i&&this.binChange.emit(i)}onFocused(t){this.updateFocused(t)}writeValue(t){const e=this.bin;super.writeValue(t);const n=this.bin;e!==n&&this.binChange.emit(n)}get size(){return this.textfieldSize.size}getFallbackValue(){return""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-input-card"]],viewQuery:function(t,e){if(1&t&&i.Gf(a.TuiPrimitiveTextfieldComponent,5),2&t){let t;i.iGM(t=i.CRH())&&(e.input=t.first)}},hostVars:1,hostBindings:function(t,e){2&t&&i.uIk("data-size",e.size)},features:[i._Bn([(0,s.tuiAsFocusableItemAccessor)(t),(0,s.tuiAsControl)(t)]),i.qOj],ngContentSelectors:_,decls:6,vars:14,consts:[["tuiValueAccessor","",1,"t-input",3,"disabled","focusable","invalid","maskito","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldCustomContent","value","focusedChange","valueChange"],["logo",""],[1,"t-payment-system",3,"src"]],template:function(t,e){if(1&t&&(i.F$t(f),i.TgZ(0,"tui-primitive-textfield",0),i.NdJ("focusedChange",(function(t){return e.onFocused(t)}))("valueChange",(function(t){return e.onValueChange(t)})),i.ALo(1,"maskito"),i.Hsn(2),i.Hsn(3,1,["ngProjectAs","input",5,["input"]]),i.qZA(),i.YNc(4,h,1,1,"ng-template",null,1,i.W1O)),2&t){const t=i.MAs(5);i.Q6J("disabled",e.disabled)("focusable",e.focusable)("invalid",e.computedInvalid)("maskito",e.maskOptions)("nativeId",e.nativeId)("pseudoActive",e.pseudoActive)("pseudoFocus",e.pseudoFocus)("pseudoHover",e.pseudoHover)("readOnly",e.readOnly)("tuiTextfieldCustomContent",e.cardSrc||e.defaultIcon&&t)("value",i.xi3(1,11,e.card,e.maskOptions))}},dependencies:[u.ro,l.y,d.B,g.B,m.n,p.P,u.cl],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-payment-system[_ngcontent-%COMP%]{width:2rem;height:2rem;color:#1434cb}"],changeDetection:0}),e})()},88197:(t,e,n)=>{n.d(e,{a:()=>s});var i=n(93803),o=n(20755);let s=(()=>{var t;class e extends i.AbstractTuiTextfieldHost{onValueChange(t){this.host.onValueChange(t)}ngAfterViewInit(){const{nativeFocusableElement:t}=this.host;t&&(t.inputMode="numeric",t.placeholder=t.placeholder||"0000 0000 0000 0000")}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=o.n5z(t)))(n||t)}}(),t.ɵdir=o.lG2({type:t,selectors:[["tui-input-card"]],features:[o._Bn([(0,i.tuiAsTextfieldHost)(t)]),o.qOj]}),e})()},96816:(t,e,n)=>{n.d(e,{Nd:()=>s,Xt:()=>r,cL:()=>a});var i=n(93517),o=n(2697);const s={icons:i.gb,cardSrc:"",paymentSystemHandler:i.Vn,autocompleteEnabled:!1},a=(0,o.tuiCreateToken)(s);function r(t){return(0,o.tuiProvideOptions)(a,t,s)}},87334:(t,e,n)=>{n.d(e,{_:()=>m});var i=n(76733),o=n(20755),s=n(20969),a=n(93803);function r(t,e){if(1&t&&(o.TgZ(0,"div",5),o._UZ(1,"tui-icon",6),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("icon",t.iconLeft)}}function c(t,e){if(1&t&&(o.TgZ(0,"div",7),o._UZ(1,"tui-icon",6),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("icon",t.iconRight)}}function u(t,e){if(1&t&&o._UZ(0,"tui-icon",10),2&t){const t=o.oxw(2);o.Q6J("icon",t.options.icons[t.paymentSystem])}}function l(t,e){if(1&t&&o._UZ(0,"img",11),2&t){const t=o.oxw(2);o.Q6J("alt",t.paymentSystem)("src",t.resolver(t.options.icons[t.paymentSystem]).replace("Outline",""),o.LSH)}}function d(t,e){if(1&t&&(o.ynx(0),o.YNc(1,u,1,1,"tui-icon",8),o.YNc(2,l,1,2,"ng-template",null,9,o.W1O),o.BQk()),2&t){const t=o.MAs(3),e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.isMono)("ngIfElse",t)}}const g=["*"];let m=(()=>{var t;class e{constructor(){this.size="m",this.paymentSystem=null,this.iconLeft="",this.iconRight="",this.options=(0,o.f3M)(s.cL),this.resolver=(0,o.f3M)(a.TUI_ICON_RESOLVER)}get isMono(){switch(this.paymentSystem){case"mir":case"visa":case"electron":return!0;default:return!1}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tui-thumbnail-card"]],hostVars:1,hostBindings:function(t,e){2&t&&o.uIk("data-size",e.size)},inputs:{size:"size",paymentSystem:"paymentSystem",iconLeft:"iconLeft",iconRight:"iconRight"},standalone:!0,features:[o.jDz],ngContentSelectors:g,decls:6,vars:3,consts:[[1,"t-front"],["class","t-left",4,"ngIf"],["class","t-right",4,"ngIf"],[4,"ngIf"],[1,"t-back"],[1,"t-left"],[1,"t-icon",3,"icon"],[1,"t-right"],["class","t-logo",3,"icon",4,"ngIf","ngIfElse"],["colored",""],[1,"t-logo",3,"icon"],[1,"t-logo",3,"alt","src"]],template:function(t,e){1&t&&(o.F$t(),o.TgZ(0,"div",0),o.YNc(1,r,2,1,"div",1),o.YNc(2,c,2,1,"div",2),o.Hsn(3),o.YNc(4,d,4,2,"ng-container",3),o.qZA(),o._UZ(5,"div",4)),2&t&&(o.xp6(1),o.Q6J("ngIf",e.iconLeft),o.xp6(1),o.Q6J("ngIf",e.iconRight),o.xp6(2),o.Q6J("ngIf",e.paymentSystem))},dependencies:[a.TuiIconComponent,i.O5],styles:['[_nghost-%COMP%]{position:relative;display:inline-flex;flex-shrink:0;background:#000;color:#fff;transform-style:preserve-3d;overflow:hidden}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:""}[data-size=s][_nghost-%COMP%]{width:2.5rem;height:1.625rem;border-radius:.25rem;font-size:0}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.125rem,.125rem) scale(.625)}[data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{display:none}[data-size=s][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.375rem;transform:scale(.55)}[data-size=m][_nghost-%COMP%]{width:3rem;height:2rem;border-radius:.3125rem;text-indent:.1875rem;font:normal .5625rem/.875rem var(--tui-font-text)}[data-size=m][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.25rem) scale(.75)}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{transform:translate(-.1875rem,.1875rem) scale(.875)}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(.714)}[data-size=m][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.3125rem;transform:scale(.55)}[data-size=l][_nghost-%COMP%]{width:3.375rem;height:2.25rem;border-radius:.375rem;text-indent:.3125rem;font:normal .625rem/1.125rem var(--tui-font-text)}[data-size=l][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.1875rem)}[data-size=l][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{transform:translate(-.1875rem,.1875rem)}[data-size=l][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.1875rem;transform:scale(.75)}.t-left[_ngcontent-%COMP%], .t-right[_ngcontent-%COMP%]{position:absolute;top:0;display:flex}.t-left[_ngcontent-%COMP%]{left:0;transform-origin:top left}.t-right[_ngcontent-%COMP%]{right:0;transform-origin:top right}.t-right[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background:currentColor;opacity:.35}.t-right[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:#fff;transform:scale(.625)}.t-logo[_ngcontent-%COMP%]{position:absolute;right:.1875rem;width:1.5rem;height:1.5rem;transform-origin:right}.t-icon[_ngcontent-%COMP%]{width:1rem;height:1rem}.t-front[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:flex-end;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:inset 0 0 0 1px var(--tui-clear);border-radius:inherit}.t-back[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg) translateZ(1px);background:#b0b0b0;border-radius:inherit}.t-back[_ngcontent-%COMP%]:after{position:absolute;left:0;right:0;content:"";top:20%;bottom:60%;background:#959595}'],changeDetection:0}),e})()},11074:(t,e,n)=>{n.d(e,{xz:()=>s,Aj:()=>r,sV:()=>u});const i={А:"F",В:"D",Г:"U",Д:"L",Е:"T",З:"P",И:"B",Й:"Q",К:"R",Л:"K",М:"V",Н:"Y",О:"J",П:"G",Р:"H",С:"C",Т:"N",У:"E",Ф:"A",Ц:"W",Ч:"X",Ш:"I",Щ:"O",Ы:"S",Ь:"M",Я:"Z"};function o(t){return t.toUpperCase().split("").map((t=>i[t]||t)).join("")}const s={mask:/^[a-z\s]+$/i,preprocessors:[({elementState:t,data:e})=>{const{value:n,selection:i}=t;return{elementState:{selection:i,value:o(n)},data:o(e)}}]};var a=n(93803);const r=[a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP];var c=n(93517);const u=t=>t.length>11&&(0,c.ul)(t)&&(0,c.Tb)(t)},26638:(t,e,n)=>{n.r(e),n.d(e,{TuiCellExample3:()=>f});var i=n(20755),o=n(72133),s=n(56234),a=n(13148),r=n(51763),c=n(58245),u=n(27146),l=n(73677),d=n(7934),g=n(87334),m=n(27791),p=n(19917),h=n(45312);let f=(()=>{var t;class e{constructor(){this.value=!1}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-cell-example-3"]],decls:46,vars:8,consts:[["tuiCell",""],["tuiProgressLabel",""],["icon","tuiIconSmileLarge"],[3,"value"],["tuiTitle",""],["tuiSubtitle",""],["appearance","success","size","s"],["src","/assets/images/avatar.jpg"],["src","/assets/images/poorly.png"],["appearance","neutral","size","s"],["icon","tuiIconLock"],["appearance","success","icon","tuiIconBell","size","s","tuiBadge",""],["href","https://waterplea.bandcamp.com","tuiLink",""],["tuiCheckbox","","type","checkbox",3,"ngModel","ngModelChange"],["paymentSystem","mastercard","size","s"],["alt","Poster","src","https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0)(1,"label",1),i._UZ(2,"tui-icon",2)(3,"tui-progress-circle",3),i.qZA(),i.TgZ(4,"div",4)(5,"strong"),i._uU(6,"$30 our of $100"),i.qZA(),i.TgZ(7,"div",5),i._uU(8,"Saving for a Benjamin Franklin portrait"),i.qZA()(),i.TgZ(9,"div",4)(10,"tui-badge",6),i._uU(11," +$30 "),i.qZA(),i.TgZ(12,"div",5),i._uU(13," "),i.qZA()()(),i.TgZ(14,"div",0)(15,"tui-avatar-stack"),i._UZ(16,"tui-avatar",7)(17,"tui-avatar",8),i.TgZ(18,"tui-avatar"),i._uU(19,"+2"),i.qZA()(),i.TgZ(20,"div",4),i._uU(21," Waterplea "),i.TgZ(22,"div",5)(23,"tui-badge",9),i._UZ(24,"tui-icon",10),i._uU(25," 100 ₽ "),i.qZA(),i._uU(26," Music "),i._UZ(27,"tui-icon",11),i.qZA()(),i.TgZ(28,"a",12),i._uU(29," Buy "),i.qZA()(),i.TgZ(30,"div",0)(31,"input",13),i.NdJ("ngModelChange",(function(t){return e.value=t})),i.qZA(),i.TgZ(32,"tui-thumbnail-card",14),i._uU(33," 1234 "),i.qZA(),i.TgZ(34,"div",4),i._uU(35," Primary Card "),i.TgZ(36,"div",5),i._uU(37,"**** **** **** 1234"),i.qZA()()(),i.TgZ(38,"div",0),i._UZ(39,"img",15),i.TgZ(40,"div",4)(41,"div",5),i._uU(42,"Ridley Scott, 1982"),i.qZA(),i._uU(43," Blade Runner "),i.TgZ(44,"div",5),i._uU(45," A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator. "),i.qZA()()()),2&t&&(i.xp6(2),i.Udp("color","var(--tui-primary)"),i.xp6(1),i.Q6J("value",.3),i.xp6(28),i.Q6J("ngModel",e.value),i.xp6(8),i.Udp("border-radius",.5,"rem")("width",3,"rem"))},dependencies:[o.Wl,o.JJ,o.On,s.J,a.D,r.z,c.B,u.V,l.B,d.v,g._,m.b,p.y,h.f],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}"],changeDetection:0}),e})()}}]);