"use strict";(self.webpackChunkpocket_fic=self.webpackChunkpocket_fic||[]).push([[972],{6972:(N,m,n)=>{n.r(m),n.d(m,{LoginModule:()=>x});var d=n(7752),g=n(8662),c=n(5152),p=n(8852),Z=n(4996),l=n(6213),v=n(2783),r=n(8346),T=n(9195),h=n(6567),f=n(1731),A=n(6421),o=n(4001),u=n(6752),y=n(8482);const L=[{path:"",component:(()=>{class t{constructor(e,i,a){this._router=e,this._snackBar=i,this._userService=a,this.hidePasswordText=!0,this.loginFormGroup=new r.cw({userName:new r.NI("",r.kI.required),password:new r.NI("",r.kI.required)}),this._componentDestroyed$=new T.t(1)}ngOnDestroy(){this._componentDestroyed$.next(!0),this._componentDestroyed$.complete()}login(){var i,e=this;this._userService.login$(this.loginFormGroup.value.userName,this.loginFormGroup.value.password).pipe((0,h.R)(this._componentDestroyed$)).subscribe({next:(i=(0,v.Z)(function*(a){e._snackBar.open("Login Successful","OK",f.l),yield e._router.navigate([""])}),function(R){return i.apply(this,arguments)}),error:i=>{this._snackBar.open("Failed to Login. Please Try Again.","OK",{...f.l,politeness:"assertive"})}})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l.F0),o.Y36(Z.ux),o.Y36(A.K))},t.\u0275cmp=o.Xpm({type:t,selectors:[["pf-login"]],decls:33,vars:4,consts:[[1,"align-items-center","justify-content-center","text-center","d-flex","flex-row","w-100"],[1,"position-absolute","pf-t-30","pf-w-40"],[1,"fs-4"],[3,"formGroup"],[1,"mb-3","mt-3","row"],[1,"col","w-50"],["appearance","outline",1,"w-100"],["matInput","","formControlName","userName","type","text"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary",1,"w-100",3,"disabled","click"]],template:function(e,i){1&e&&(o.TgZ(0,"main"),o.TgZ(1,"div",0),o.TgZ(2,"div",1),o.TgZ(3,"mat-card"),o.TgZ(4,"h1",2),o.TgZ(5,"strong"),o._uU(6,"Login"),o.qZA(),o.qZA(),o._UZ(7,"mat-divider"),o.TgZ(8,"form",3),o.TgZ(9,"div",4),o.TgZ(10,"div",5),o.TgZ(11,"mat-form-field",6),o.TgZ(12,"mat-label"),o._uU(13,"USERNAME"),o.qZA(),o._UZ(14,"input",7),o.TgZ(15,"mat-error"),o.TgZ(16,"strong"),o._uU(17,"USERNAME"),o.qZA(),o._uU(18," is required."),o.qZA(),o.qZA(),o.qZA(),o.TgZ(19,"div",5),o.TgZ(20,"mat-form-field",6),o.TgZ(21,"mat-label"),o._uU(22,"PASSWORD"),o.qZA(),o._UZ(23,"input",8),o.TgZ(24,"button",9),o.NdJ("click",function(){return i.hidePasswordText=!i.hidePasswordText}),o.TgZ(25,"mat-icon"),o._uU(26),o.qZA(),o.qZA(),o.TgZ(27,"mat-error"),o.TgZ(28,"strong"),o._uU(29,"PASSWORD"),o.qZA(),o._uU(30," is required."),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(31,"button",10),o.NdJ("click",function(){return i.login()}),o._uU(32,"LOGIN"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(8),o.Q6J("formGroup",i.loginFormGroup),o.xp6(15),o.Q6J("type",i.hidePasswordText?"password":"text"),o.xp6(3),o.Oqu(i.hidePasswordText?"visibility_off":"visibility"),o.xp6(5),o.Q6J("disabled",i.loginFormGroup.invalid))},directives:[g.a8,c.d,r._Y,r.JL,r.sg,u.KE,u.hX,y.Nt,r.Fj,r.JJ,r.u,u.TO,d.lW,u.R9,p.Hw],styles:[""],changeDetection:0}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[l.Bz.forChild(L)],l.Bz]}),t})();var S=n(1382);let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[d.ot,g.QW,c.t,p.Ps,Z.ZX,U,S.m]]}),t})()}}]);
//# sourceMappingURL=972.js.map