(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79708],{79708:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var r=o(4594),n=o(66094),i=o(53102),a=o(35521),l=o(98808),s=o(39908),u=o(35548),c=o(38252),h=o(63142),p=o(139),d=o(10188),m=o(85454);const f=["phoneErrorContent"];function g(e,t){1&e&&u._uU(0,"Invalid phone number length")}const b=function(){return[]};function C(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"label",4),u._uU(1),u.TgZ(2,"span",5)(3,"tui-input-phone",6),u._UZ(4,"input",7),u.qZA(),u.TgZ(5,"button",8),u.NdJ("click",(function(){const t=u.CHM(e).index,o=u.oxw();return u.KtG(o.removePhone(t))})),u._uU(6," Delete phone number "),u.qZA()(),u.YNc(7,g,1,0,"ng-template",null,9,u.W1O),u._UZ(9,"tui-error",10),u.ALo(10,"async"),u.ALo(11,"tuiFieldError"),u.qZA()}if(2&e){const e=t.index;u.xp6(1),u.hij(" Phone number ",e+1," "),u.xp6(2),u.s9C("formControlName",e),u.Q6J("tuiTextfieldLabelOutside",!0),u.xp6(6),u.s9C("formControlName",e),u.Q6J("error",u.lcZ(10,5,u.lcZ(11,7,u.DdM(9,b))))}}const w=(()=>{var e;class t{constructor(){this.testForm=new n.cw({phones:new n.Oe([new n.NI("",[n.kI.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new n.NI("",this.addValidators()))}removePhone(e){this.formData.removeAt(e);let t=0;for(;t<=1&&this.formData.controls[t];)this.formData.controls[t].setValidators([n.kI.required,this.getPhoneLengthValidator()]),t++}addValidators(){return this.formData.controls.length<2?[n.kI.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return e=>12!==e.value.length?{length:new i.TuiValidationError(this.phoneErrorContent)}:null}getPhoneArrayValidator(){return e=>e.controls.length<2||e.controls.filter((e=>e.errors)).length&&e.controls.length?{length:new i.TuiValidationError("You should add at least 2 phone number")}:null}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&u.Gf(f,5),2&e){let e;u.iGM(e=u.CRH())&&(t.phoneErrorContent=e.first)}},standalone:!0,exportAs:"ExampleComponent4",features:[u.jDz],decls:7,vars:8,consts:[[3,"formGroup"],["formArrayName","phones","tuiLabel","","class","tui-space_bottom-4",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error",3,"error"],["size","s","tuiButton","","type","button",1,"tui-space_top-4",3,"click"],["formArrayName","phones","tuiLabel","",1,"tui-space_bottom-4"],[1,"row"],["tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["autocomplete","new-password","tuiTextfieldLegacy",""],["appearance","icon","iconLeft","tuiIconTrash","size","m","tuiIconButton","","type","button",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName","error"]],template:function(e,t){1&e&&(u.TgZ(0,"form",0),u.YNc(1,C,12,10,"label",1),u._UZ(2,"tui-error",2),u.ALo(3,"async"),u.ALo(4,"tuiFieldError"),u.TgZ(5,"button",3),u.NdJ("click",(function(){return t.addPhone()})),u._uU(6," Add a phone number "),u.qZA()()),2&e&&(u.Q6J("formGroup",t.testForm),u.xp6(1),u.Q6J("ngForOf",t.formData.controls),u.xp6(1),u.Q6J("error",u.lcZ(3,3,u.lcZ(4,5,u.DdM(7,b)))))},dependencies:[n.UX,n._Y,n.JJ,n.JL,n.sg,n.u,n.CE,r.sg,a.TuiLabelDirective,s.Kjg,c.y,h.X,p.M,a.TuiTextfieldOptionsDirective,s.cnw,d.x,m.s,a.TuiButtonDirective,a.TuiErrorComponent,l.TuiFieldErrorPipe,r.Ov],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),t})()}}]);