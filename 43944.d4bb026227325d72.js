(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[43944],{43944:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiInputSliderModule:()=>st});var i=n(46556),o=n(95829),s=n(65046),r=n(20682),a=n(57760),l=n(96112),u=n(51032),c=n(39508),m=n(6094),p=n(78026),d=n(40686),g=n(4901),h=n(41376),f=n(73803),C=n(80199),P=n(21848),y=n(35379),x=n(66399),b=n(93815),k=n(34481),M=n(7641),F=n(64951),O=n(59721),_=n(52798),V=n(31943),v=n(14064),E=n(26086),j=n(19601),T=n(69286);let S=(()=>{var t;class e{constructor(){this.min=5,this.max=20,this.sliderStep=1,this.steps=(this.max-this.min)/this.sliderStep,this.quantum=.01,this.hint=`Dragging slider change input by ${this.sliderStep}.\nBut you can type decimal number which is multiple of ${this.quantum}.`,this.control=new o.MJ(6.5)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.VBU({type:t,selectors:[["tui-input-slider-example-1"]],decls:2,vars:6,consts:[[3,"formControl","max","min","quantum","steps","tuiHintContent"]],template:function(t,e){1&t&&(c.j41(0,"tui-input-slider",0),c.EFF(1," Select interest rate\n"),c.k0s()),2&t&&c.Y8G("formControl",e.control)("max",e.max)("min",e.min)("quantum",e.quantum)("steps",e.steps)("tuiHintContent",e.hint)},dependencies:[d.H,o.BC,o.l_,h.bk],encapsulation:2,changeDetection:0}),e})();var N=n(39373);let G=(()=>{var t;class e{constructor(){this.control=new o.MJ(40),this.segments=5,this.max=100,this.min=0}increase(){var t,e;this.control.patchValue(Math.min((null!==(t=null===(e=this.control)||void 0===e?void 0:e.value)&&void 0!==t?t:0)+20,this.max))}decrease(){var t,e;this.control.patchValue(Math.max((null!==(t=null===(e=this.control)||void 0===e?void 0:e.value)&&void 0!==t?t:0)-20,this.min))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.VBU({type:t,selectors:[["tui-input-slider-example-2"]],decls:15,vars:4,consts:[[3,"formControl","max","min","segments"],[1,"slider-ticks-labels"],["appearance","icon","icon","tuiIconThumbsDownLarge","size","xs","tuiIconButton","","type","button",3,"click"],["appearance","icon","icon","tuiIconThumbsUpLarge","size","xs","tuiIconButton","","type","button",3,"click"]],template:function(t,e){1&t&&(c.j41(0,"tui-input-slider",0),c.EFF(1," Rate your mind\n"),c.k0s(),c.j41(2,"div",1)(3,"span")(4,"button",2),c.bIt("click",(function(){return e.decrease()})),c.k0s()(),c.j41(5,"span"),c.EFF(6,"20%"),c.k0s(),c.j41(7,"span"),c.EFF(8,"40%"),c.k0s(),c.j41(9,"span"),c.EFF(10,"60%"),c.k0s(),c.j41(11,"span"),c.EFF(12,"80%"),c.k0s(),c.j41(13,"span")(14,"button",3),c.bIt("click",(function(){return e.increase()})),c.k0s()()()),2&t&&c.Y8G("formControl",e.control)("max",e.max)("min",e.min)("segments",5)},dependencies:[d.H,o.BC,o.l_,N.S],styles:[".slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.5rem .375rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),e})();function D(t,e){if(1&t&&(c.j41(0,"span"),c.EFF(1),c.k0s()),2&t){const t=e.$implicit;c.R7$(1),c.JRh(t)}}let I=(()=>{var t;class e{constructor(){this.control=new o.MJ(1e4),this.max=1e6,this.min=0,this.totalSteps=100,this.ticksLabels=["0","10K","100K","500k","1000K"],this.keySteps=[[0,this.min],[25,1e4],[50,1e5],[75,5e5],[100,this.max]]}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.VBU({type:t,selectors:[["tui-input-slider-example-3"]],decls:8,vars:8,consts:[[3,"formControl","keySteps","max","min","segments","steps"],[1,"slider-ticks-labels"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(c.j41(0,"tui-input-slider",0),c.EFF(1," Not linear growing slider\n"),c.k0s(),c.j41(2,"div",1),c.DNE(3,D,2,1,"span",2),c.k0s(),c.j41(4,"p"),c.EFF(5," Control value: "),c.j41(6,"code"),c.EFF(7),c.k0s()()),2&t&&(c.Y8G("formControl",e.control)("keySteps",e.keySteps)("max",e.max)("min",e.min)("segments",e.ticksLabels.length-1)("steps",e.totalSteps),c.R7$(3),c.Y8G("ngForOf",e.ticksLabels),c.R7$(4),c.JRh(e.control.value))},dependencies:[d.H,o.BC,o.l_,i.Sq],styles:[".slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.5rem .375rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),e})();var w=n(29591);function R(t,e){1&t&&c.nrm(0,"tui-svg",3)}function L(t,e){1&t&&c.nrm(0,"tui-svg",4)}let $=(()=>{var t;class e{constructor(){this.userAnswer=2}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.VBU({type:t,selectors:[["tui-input-slider-example-4"]],decls:6,vars:4,consts:[["tuiHintContent","Select the answer to see how the right custom content changes",3,"max","min","tuiTextfieldCustomContent","ngModel","ngModelChange"],["right",""],["wrong",""],["src","tuiIconCheckCircle",1,"success"],["src","tuiIconXCircle",1,"error"]],template:function(t,e){if(1&t&&(c.j41(0,"tui-input-slider",0),c.bIt("ngModelChange",(function(t){return e.userAnswer=t})),c.EFF(1," 2+2=?\n"),c.k0s(),c.DNE(2,R,1,0,"ng-template",null,1,c.C5r),c.DNE(4,L,1,0,"ng-template",null,2,c.C5r)),2&t){const t=c.sdS(3),n=c.sdS(5);c.Y8G("max",10)("min",0)("tuiTextfieldCustomContent",4===e.userAnswer?t:n)("ngModel",e.userAnswer)}},dependencies:[d.H,o.BC,o.vS,h.bk,w._,_.R],styles:[".success[_ngcontent-%COMP%]{color:var(--tui-success-fill)}.error[_ngcontent-%COMP%]{color:var(--tui-error-fill)}"],changeDetection:0}),e})(),B=(()=>{var t;class e{constructor(){this.max=100,this.min=0,this.smallControl=new o.MJ(this.min),this.bigControl=new o.MJ(this.max),this.customLabel=({$implicit:t})=>{switch(t){case this.max:return"Digits can't describe my love!";case this.min:return"Just a label for min value";case(this.max-this.min)/2:return"Middle";default:return t}}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.VBU({type:t,selectors:[["tui-input-slider-example-5"]],decls:9,vars:10,consts:[[1,"control"],["tuiTextfieldSize","m",3,"formControl","max","min","segments","tuiTextfieldLabelOutside","valueContent"],[1,"slider-ticks-labels"],[1,"control",3,"formControl","max","min","valueContent"]],template:function(t,e){1&t&&(c.j41(0,"section",0),c.nrm(1,"tui-input-slider",1),c.j41(2,"div",2),c.nrm(3,"span"),c.j41(4,"span"),c.EFF(5,"Custom label"),c.k0s(),c.nrm(6,"span"),c.k0s()(),c.j41(7,"tui-input-slider",3),c.EFF(8," How much do you love Taiga UI?\n"),c.k0s()),2&t&&(c.R7$(1),c.Y8G("formControl",e.smallControl)("max",e.max)("min",e.min)("segments",2)("tuiTextfieldLabelOutside",!0)("valueContent",e.customLabel),c.R7$(6),c.Y8G("formControl",e.bigControl)("max",e.max)("min",e.min)("valueContent",e.customLabel))},dependencies:[d.H,o.BC,o.l_,V.k,v.G],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;column-gap:3rem;row-gap:1rem}.control[_ngcontent-%COMP%]{flex:1;min-width:17rem}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .375rem 0;font:var(--tui-font-text-s)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),e})();function H(t,e){1&t&&(c.j41(0,"p"),c.EFF(1," Look into this example to understand difference between input-props "),c.j41(2,"code"),c.EFF(3,"[steps]"),c.k0s(),c.EFF(4," and "),c.j41(5,"code"),c.EFF(6,"[quantum]"),c.k0s(),c.EFF(7," . "),c.k0s())}function Y(t,e){1&t&&(c.j41(0,"p"),c.EFF(1," Pass "),c.j41(2,"a",12),c.EFF(3," PolymorpheusContent "),c.k0s(),c.EFF(4," into property "),c.j41(5,"code"),c.EFF(6,"[valueContent]"),c.k0s(),c.EFF(7," to create custom label for selected value. "),c.k0s())}function q(t,e){if(1&t&&(c.j41(0,"p"),c.EFF(1,"Component to input a limited range"),c.k0s(),c.j41(2,"p"),c.EFF(3," Number formatting can be customized by using "),c.j41(4,"a",2),c.EFF(5," TUI_NUMBER_FORMAT "),c.k0s()(),c.j41(6,"tui-doc-example",3),c.DNE(7,H,8,0,"ng-template",null,4,c.C5r),c.nrm(9,"tui-input-slider-example-1"),c.k0s(),c.j41(10,"tui-doc-example",5)(11,"tui-notification",6),c.EFF(12," Use mixin "),c.j41(13,"code"),c.EFF(14,"tui-slider-ticks-labels"),c.k0s(),c.EFF(15," to arrange ticks' labels (it places them strictly below ticks). "),c.k0s(),c.nrm(16,"tui-input-slider-example-2"),c.k0s(),c.j41(17,"tui-doc-example",7)(18,"dl",8)(19,"dt")(20,"strong"),c.EFF(21,"Key steps"),c.k0s()(),c.j41(22,"dd"),c.EFF(23,"anchor points of non-uniform format between value and position"),c.k0s()(),c.nrm(24,"tui-input-slider-example-3"),c.k0s(),c.j41(25,"tui-doc-example",9),c.nrm(26,"tui-input-slider-example-4"),c.k0s(),c.j41(27,"tui-doc-example",10),c.DNE(28,Y,8,0,"ng-template",null,11,c.C5r),c.nrm(30,"tui-input-slider-example-5"),c.k0s()),2&t){const t=c.sdS(8),e=c.sdS(29),n=c.XpG();c.R7$(6),c.Y8G("content",n.example1)("description",t),c.R7$(4),c.Y8G("content",n.example2),c.R7$(7),c.Y8G("content",n.example3),c.R7$(8),c.Y8G("content",n.example4),c.R7$(2),c.Y8G("content",n.example5)("description",e)}}function X(t,e){if(1&t&&(c.j41(0,"tui-input-slider",24),c.EFF(1," Range "),c.k0s()),2&t){const t=c.XpG(2);c.Y8G("focusable",t.focusable)("formControl",t.control)("keySteps",t.keySteps)("max",t.max)("min",t.min)("postfix",t.postfix)("prefix",t.prefix)("pseudoActive",t.pseudoPressed)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoInvalid",t.pseudoInvalid)("quantum",t.quantum)("readOnly",t.readOnly)("segments",t.segments)("steps",t.steps)("tuiHintAppearance",t.hintAppearance)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldCustomContent",t.customContentSelected)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldPostfix",t.postfix)("tuiTextfieldPrefix",t.prefix)("tuiTextfieldSize",t.size)("valueContent",t.valueContent)}}function A(t,e){1&t&&(c.EFF(0," Disabled state (use "),c.j41(1,"code"),c.EFF(2,"formControl.disable()"),c.k0s(),c.EFF(3," ) "))}function U(t,e){1&t&&c.EFF(0," Min value ")}function z(t,e){1&t&&c.EFF(0," Max value ")}function J(t,e){1&t&&c.EFF(0," Minimum indivisible value ")}function K(t,e){1&t&&(c.EFF(0," Number of actual discrete slider steps "),c.j41(1,"p"),c.EFF(2," If property is not set (i.e. equals to default value "),c.j41(3,"strong"),c.EFF(4,"0"),c.k0s(),c.EFF(5," ), number of steps equals "),c.j41(6,"code"),c.EFF(7,"(max - min) / quantum"),c.k0s()())}function W(t,e){1&t&&(c.EFF(0," A number of visual segments (use "),c.j41(1,"code"),c.EFF(2,"1"),c.k0s(),c.EFF(3," for no ticks) "))}function Q(t,e){1&t&&c.EFF(0," Key steps to bind slider position and value ")}function Z(t,e){1&t&&c.EFF(0," A template for custom view of selected value. ")}function tt(t,e){1&t&&(c.EFF(0," A prefix symbol, like currency. Use "),c.j41(1,"code"),c.EFF(2,"tuiTextfieldPrefix"),c.k0s(),c.EFF(3," instead "))}function et(t,e){1&t&&(c.EFF(0," A postfix symbol, like currency. Use "),c.j41(1,"code"),c.EFF(2,"tuiTextfieldPostfix"),c.k0s(),c.EFF(3," instead "))}function nt(t,e){if(1&t){const t=c.RV6();c.j41(0,"tui-doc-demo",13),c.DNE(1,X,2,26,"ng-template"),c.k0s(),c.j41(2,"tui-doc-documentation"),c.DNE(3,A,4,0,"ng-template",14),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.disabled=e)})),c.DNE(4,U,1,0,"ng-template",15),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.min=e)})),c.DNE(5,z,1,0,"ng-template",16),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.max=e)})),c.DNE(6,J,1,0,"ng-template",17),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.quantum=e)})),c.DNE(7,K,8,0,"ng-template",18),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.steps=e)})),c.DNE(8,W,4,0,"ng-template",19),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.segments=e)})),c.DNE(9,Q,1,0,"ng-template",20),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.keySteps=e)})),c.DNE(10,Z,1,0,"ng-template",21),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.valueContent=e)})),c.DNE(11,tt,4,0,"ng-template",22),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.prefix=e)})),c.DNE(12,et,4,0,"ng-template",23),c.bIt("documentationPropertyValueChange",(function(e){c.eBV(t);const n=c.XpG();return c.Njj(n.postfix=e)})),c.k0s(),c.nrm(13,"inherited-documentation")}if(2&t){const t=c.XpG();c.Y8G("control",t.control),c.R7$(3),c.Y8G("documentationPropertyValue",t.disabled),c.R7$(1),c.Y8G("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),c.R7$(1),c.Y8G("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),c.R7$(1),c.Y8G("documentationPropertyValues",t.quantumVariants)("documentationPropertyValue",t.quantum),c.R7$(1),c.Y8G("documentationPropertyValue",t.steps),c.R7$(1),c.Y8G("documentationPropertyValue",t.segments),c.R7$(1),c.Y8G("documentationPropertyValues",t.keyStepsVariants)("documentationPropertyValue",t.keySteps),c.R7$(1),c.Y8G("documentationPropertyValues",t.valueContentVariants)("documentationPropertyValue",t.valueContent),c.R7$(1),c.Y8G("documentationPropertyDeprecated",!0)("documentationPropertyValue",t.prefix),c.R7$(1),c.Y8G("documentationPropertyDeprecated",!0)("documentationPropertyValue",t.postfix)}}function it(t,e){if(1&t&&(c.j41(0,"ol",25)(1,"li")(2,"p"),c.EFF(3," Import "),c.j41(4,"code"),c.EFF(5,"TuiInputSliderModule"),c.k0s(),c.EFF(6," into a module where you want to use our component "),c.k0s(),c.nrm(7,"tui-doc-code",26),c.k0s(),c.j41(8,"li")(9,"p"),c.EFF(10,"Add to the template:"),c.k0s(),c.nrm(11,"tui-doc-code",27),c.k0s()()),2&t){const t=c.XpG();c.R7$(7),c.Y8G("code",t.exampleModule),c.R7$(4),c.Y8G("code",t.exampleHtml)}}let ot=(()=>{var t;class e extends m.E{constructor(){super(...arguments),this.exampleModule=n.e(54704).then(n.t.bind(n,54704,17)),this.exampleHtml=n.e(25514).then(n.t.bind(n,25514,17)),this.example1={HTML:n.e(96134).then(n.t.bind(n,96134,17)),TypeScript:n.e(26002).then(n.t.bind(n,26002,17))},this.example2={HTML:n.e(28879).then(n.t.bind(n,28879,17)),LESS:n.e(25295).then(n.t.bind(n,25295,17)),TypeScript:n.e(97807).then(n.t.bind(n,97807,17))},this.example3={HTML:n.e(4316).then(n.t.bind(n,4316,17)),TypeScript:n.e(6308).then(n.t.bind(n,6308,17)),LESS:n.e(46147).then(n.t.bind(n,68528,17))},this.example4={HTML:n.e(62989).then(n.t.bind(n,62989,17)),TypeScript:n.e(53097).then(n.t.bind(n,53097,17)),LESS:n.e(30237).then(n.t.bind(n,30237,17))},this.example5={HTML:n.e(74554).then(n.t.bind(n,74554,17)),TypeScript:n.e(13158).then(n.t.bind(n,13158,17)),LESS:n.e(34862).then(n.t.bind(n,34862,17))},this.control=new o.MJ(0),this.minVariants=[0,1,5,7.77,-10],this.min=this.minVariants[0],this.maxVariants=[10,100,1e4],this.max=this.maxVariants[0],this.segments=1,this.steps=0,this.quantumVariants=[1,.01,.001,1e-4,10,20,100],this.quantum=this.quantumVariants[0],this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.valueContentVariants=["","TOP SECRET",({$implicit:t})=>t===this.max?"MAX":t,({$implicit:t})=>t===this.min?"MIN":t,({$implicit:t})=>5===t?"FIVE":t],this.valueContent=this.valueContentVariants[0],this.keyStepsVariants=[[[0,0],[50,1e3],[100,1e4]]],this.keySteps=null,this.customContentVariants=["","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=this.customContentVariants[0]}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=c.xGo(t)))(n||t)}}(),t.ɵcmp=c.VBU({type:t,selectors:[["example-tui-input-slider"]],features:[c.Jv_([{provide:p.k,useExisting:(0,c.Rfq)((()=>t))}]),c.Vt3],decls:4,vars:0,consts:[["header","InputSlider","package","KIT","type","components"],["pageTab",""],["fragment","number-format","routerLink","/utils/tokens","tuiLink",""],["id","base","heading","Basic",3,"content","description"],["stepQuantumDescription",""],["id","slider-segments","heading","With slider segments + ticks labels",3,"content"],[1,"tui-space_bottom-8"],["id","key-steps","heading","KeySteps",3,"content"],[1,"tui-space_bottom-8","tui-space_top-0"],["id","right-label","heading","With right label",3,"content"],["id","min-max-labels","heading","With min and max labels",3,"content","description"],["valueContentDescription",""],["href","https://github.com/taiga-family/ng-polymorpheus","tuiLink",""],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","quantum","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","steps","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","segments","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","keySteps","documentationPropertyType","TuiKeySteps",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","valueContent","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","prefix","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","postfix","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],[3,"focusable","formControl","keySteps","max","min","postfix","prefix","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","quantum","readOnly","segments","steps","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize","valueContent"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(c.j41(0,"tui-doc-page",0),c.DNE(1,q,31,7,"ng-template",1),c.DNE(2,nt,14,18,"ng-template",1),c.DNE(3,it,12,2,"ng-template",1),c.k0s())},dependencies:[d.H,g.Q,o.BC,o.l_,h.bk,f.t,C.p,P.c,y.W,x.P,b.T,k.o,M.E,F.v,O.n,_.R,V.k,v.G,E.d,j.r,T.O,s.Wk,S,G,I,$,B],encapsulation:2,changeDetection:0}),e})(),st=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.$C({type:t}),t.ɵinj=c.G2t({imports:[l.TuiInputRangeModule,l.TuiInputSliderModule,u.b,o.X1,o.YN,i.MD,l.TuiRadioListModule,a.TuiButtonModule,a.TuiHintModule,r.lK,a.TuiLinkModule,a.TuiSvgModule,a.TuiNotificationModule,a.TuiTextfieldControllerModule,s.iI.forChild((0,r.CC)(ot))]}),e})()}}]);