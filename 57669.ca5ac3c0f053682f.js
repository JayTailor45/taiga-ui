(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[57669,8109,61386,99503,50517,11820,61505,99781,50023,11944],{8109:(t,e,n)=>{n.d(e,{O:()=>b});var i=n(20755),s=n(62022),r=n(43232),o=n(87882),a=n(45047),c=n(92425),u=n(35484),l=n(84787),h=n(73843),p=n(31570),g=n(1925),f=n(69781);const m=["arc"];function v(t,e){if(1&t&&(i.O4$(),i.TgZ(0,"svg",4),i._UZ(1,"path",5)(2,"path",6,7),i.qZA()),2&t){const t=e.$implicit,n=i.oxw();i.Udp("height",n.getDiameter(t),"em")("left",n.getInset(t),"em")("top",n.getInset(t),"em")("width",n.getDiameter(t),"em"),i.xp6(2),i.Udp("stroke",n.getColor(t))("stroke-dasharray",n.getLength(t),"em")("stroke-dashoffset",n.initialized?n.getOffset(t):n.getLength(t),"em"),i.ekj("t-value_inactive",n.isInactive(t))}}const d=["*"],x={m:9,l:11,xl:16},w={m:.25,l:.375,xl:.5625},M={m:.125,l:.1875,xl:.25};let b=(()=>{var t;class e{constructor(){this.sanitizer=(0,i.f3M)(r.H7),this.arcs$=new u.t(1),this.value=[],this.size="m",this.max=100,this.minLabel="0%",this.maxLabel="100%",this.activeItemIndex=NaN,this.activeItemIndexChange=this.arcs$.pipe((0,l.w)((t=>t.changes.pipe((0,h.O)(null),(0,l.w)((()=>(0,a.T)(...function(t){return t.map((({nativeElement:t},e)=>(0,a.T)((0,o.tuiTypedFromEvent)(t,"mouseenter").pipe((0,c.U)((()=>e))),(0,o.tuiTypedFromEvent)(t,"mouseleave").pipe((0,c.U)((()=>NaN))))))}(t))))))),(0,p.b)((t=>{this.activeItemIndex=t}))),this.initialized=!1,(0,g.H)(0).pipe((0,o.tuiWatch)((0,i.f3M)(i.sBO)),(0,s.sL)()).subscribe((()=>{this.initialized=!0}))}set arcs(t){this.arcs$.next(t)}get width(){return x[this.size]}get strokeWidth(){return w[this.size]}isInactive(t){return!Number.isNaN(this.activeItemIndex)&&t!==this.activeItemIndex}getInset(t){return this.strokeWidth/2+t*(this.strokeWidth+M[this.size])}getDiameter(t){return x[this.size]-2*this.getInset(t)}getLength(t){return Math.PI*this.getDiameter(t)*.76}getOffset(t){return this.getLength(t)*(1-Math.min(this.value[t]/this.max,1))}getColor(t){return this.sanitizer.bypassSecurityTrustStyle(`var(--tui-chart-${t}, var(--tui-support-0${t+1}))`)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-arc-chart"]],viewQuery:function(t,e){if(1&t&&i.Gf(m,5),2&t){let t;i.iGM(t=i.CRH())&&(e.arcs=t)}},hostVars:7,hostBindings:function(t,e){2&t&&(i.uIk("data-size",e.size),i.Udp("width",e.width,"rem")("height",e.width,"rem")("stroke-width",e.strokeWidth,"rem"))},inputs:{value:"value",size:"size",max:"max",minLabel:"minLabel",maxLabel:"maxLabel",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},ngContentSelectors:d,decls:9,vars:3,consts:[["focusable","false","viewBox","-100 -100 200 200","xmlns","http://www.w3.org/2000/svg","class","t-svg",3,"height","left","top","width",4,"tuiRepeatTimes","tuiRepeatTimesOf"],[1,"t-content"],[1,"t-wrapper"],[1,"t-percent"],["focusable","false","viewBox","-100 -100 200 200","xmlns","http://www.w3.org/2000/svg",1,"t-svg"],["d","M -70 70 A 100 100 0 1 1 70 70","vector-effect","non-scaling-stroke"],["d","M -70 70 A 100 100 0 1 1 70 70","vector-effect","non-scaling-stroke",1,"t-value"],["arc",""]],template:function(t,e){1&t&&(i.F$t(),i.YNc(0,v,4,16,"svg",0),i.TgZ(1,"div",1)(2,"div",2),i.Hsn(3),i.qZA()(),i.TgZ(4,"div",3)(5,"span"),i._uU(6),i.qZA(),i.TgZ(7,"span"),i._uU(8),i.qZA()()),2&t&&(i.Q6J("tuiRepeatTimesOf",e.value.length),i.xp6(6),i.Oqu(e.minLabel),i.xp6(2),i.Oqu(e.maxLabel))},dependencies:[f.X],styles:["[_nghost-%COMP%]{position:relative;display:block;flex-shrink:0}.t-svg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;overflow:visible;fill:none;stroke:currentColor;stroke-linecap:round;color:var(--tui-secondary);font-size:1rem;pointer-events:none}.t-value[_ngcontent-%COMP%]{pointer-events:auto;transition:stroke-dashoffset var(--tui-duration) ease-in-out,opacity var(--tui-duration) ease-in-out .1s}.t-value_inactive[_ngcontent-%COMP%]{transition-property:stroke-dashoffset,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:.16}.t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center;color:var(--tui-text-02);font:var(--tui-font-text-xs);pointer-events:none}[data-size=xl][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}.t-wrapper[_ngcontent-%COMP%]{pointer-events:auto}.t-wrapper[_ngcontent-%COMP%]:first-line{color:var(--tui-text-01)}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-s);font-weight:700}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-m);font-weight:700}[data-size=xl][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-heading-5)}.t-percent[_ngcontent-%COMP%]{position:absolute;left:25%;bottom:11%;display:flex;width:50%;justify-content:space-between;font:var(--tui-font-text-xs);color:var(--tui-text-02)}[data-size=xl][_nghost-%COMP%]   .t-percent[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}"],changeDetection:0}),e})()},10882:(t,e,n)=>{n.d(e,{Fb:()=>o,UR:()=>s,bM:()=>r});var i=n(87882);const s={currency:null,currencyAlign:"right",sign:"negative-only"},r=(0,i.tuiCreateToken)(s);function o(t){return(0,i.tuiProvideOptions)(r,t,s)}},61386:(t,e,n)=>{n.d(e,{E:()=>u});var i=n(20755),s=n(93517),r=n(87882),o=n(17628),a=n(92425),c=n(10882);let u=(()=>{var t;class e{constructor(){this.options=(0,i.f3M)(c.bM),this.format=(0,i.f3M)(o.TUI_NUMBER_FORMAT)}transform(t,e=this.options.currency,n=this.options.currencyAlign){return this.format.pipe((0,a.U)((i=>{const a=(0,s.$v)(t,this.options.sign),c=(0,s.BP)(e),u=(0,o.tuiFormatNumber)(Math.abs(t),{...i,precision:Number.isNaN(i.precision)?2:i.precision}),l=c?.length>1||"right"===n?r.CHAR_NO_BREAK_SPACE:"";return"right"===n?`${a}${u}${l}${c}`:`${a}${c}${l}${u}`})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=i.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),e})()}}]);