"use strict";(self.webpackChunkpocket_fic=self.webpackChunkpocket_fic||[]).push([["ContributorsModule"],{1530:(L,h,i)=>{i.r(h),i.d(h,{ContributorsModule:()=>l});var f=i(4522),a=i(2156),s=i(3012),_=i(5074),v=i(7822),C=i(6896),d=i(7340),O=i(6067),x=i(8951),U=i(1764),b=i(8855),T=i(1501),y=i(6317),w=i(8977),t=i(2560);class u{constructor(){Object.defineProperty(this,"_allContributors$",{enumerable:!0,configurable:!0,writable:!0,value:new y.X([])}),Object.defineProperty(this,"_contributorsFetchError$",{enumerable:!0,configurable:!0,writable:!0,value:new y.X(void 0)}),this.fetchAllContributors()}fetchAllContributors(){if(b.E.firestore){const r=[];(0,T.PL)((0,T.hJ)(b.E.firestore,"contributors")).then(e=>{e.forEach(n=>{r.push(n.data()),this._allContributors$.next(r)})}).catch(e=>{this._contributorsFetchError$.next(e.message),console.error(e.message)})}else this._contributorsFetchError$.next("Firebase Firestore seems to be unavailable."),console.error("Firebase Firestore seems to be unavailable.")}getAllContributors$(){return this._allContributors$.asObservable().pipe((0,w.x)())}getContributorsFetchError$(){return this._contributorsFetchError$.asObservable().pipe((0,w.x)())}}Object.defineProperty(u,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||u)}}),Object.defineProperty(u,"\u0275prov",{enumerable:!0,configurable:!0,writable:!0,value:t.Yz7({token:u,factory:u.\u0275fac,providedIn:"any"})});var g=i(4666);function S(o,r){if(1&o&&(t.TgZ(0,"mat-card-subtitle")(1,"a",18)(2,"span"),t._uU(3,"PROFILE"),t.qZA()()()),2&o){const e=t.oxw(2).$implicit,n=t.oxw(2);t.xp6(1),t.hYB("href","/",n.AppRoute.Users,"/",e.pocketFicUserId,"",t.LSH)("routerLink","/",n.AppRoute.Users,"/",e.pocketFicUserId,""),t.MGl("matTooltip","Username: ",n.getUserNameFromUserId(e.pocketFicUserId),""),t.Q6J("matTooltipShowDelay",n.matTooltipShowDelay)}}function j(o,r){if(1&o&&(t.TgZ(0,"a",19)(1,"mat-icon",16),t._uU(2,"contact_page"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"RESUM\xc9"),t.qZA()()),2&o){const e=t.oxw(2).$implicit;t.Q6J("href",e.resume,t.LSH)}}function F(o,r){if(1&o&&(t.TgZ(0,"a",19),t._UZ(1,"img",20),t.TgZ(2,"span"),t._uU(3,"GITHUB"),t.qZA()()),2&o){const e=t.oxw(2).$implicit;t.Q6J("href",e.gitHub,t.LSH)}}function P(o,r){if(1&o&&(t.TgZ(0,"a",19),t._UZ(1,"img",21),t.TgZ(2,"span"),t._uU(3,"LINKEDIN"),t.qZA()()),2&o){const e=t.oxw(2).$implicit;t.Q6J("href",e.linkedIn,t.LSH)}}function I(o,r){if(1&o&&(t.TgZ(0,"div",11)(1,"mat-card",12)(2,"mat-card-header"),t._UZ(3,"img",13),t.YNc(4,S,4,6,"mat-card-subtitle",14),t.qZA(),t.TgZ(5,"mat-card-content")(6,"p"),t._uU(7),t.qZA()(),t.TgZ(8,"mat-card-actions")(9,"a",15)(10,"mat-icon",16),t._uU(11,"email"),t.qZA(),t.TgZ(12,"span"),t._uU(13,"E-MAIL"),t.qZA()(),t.YNc(14,j,5,1,"a",17),t.YNc(15,F,4,1,"a",17),t.YNc(16,P,4,1,"a",17),t.qZA()()()),2&o){const e=t.oxw(),n=e.$implicit,p=e.index,A=t.oxw(2);t.xp6(3),t.hYB("alt","",n.firstName," ",n.lastName,"'s Avatar"),t.MGl("src","assets/avatars/",A.contributorNamesKebab[p],".jpg",t.LSH),t.xp6(1),t.Q6J("ngIf",n.pocketFicUserId),t.xp6(3),t.Oqu(n.personalSummary),t.xp6(2),t.hYB("href","mailto:",n.email,"?subject=Subject&body=Hi%20",n.firstName,"",t.LSH),t.Q6J("matTooltip",n.email)("matTooltipShowDelay",A.matTooltipShowDelay),t.xp6(5),t.Q6J("ngIf",n.resume),t.xp6(1),t.Q6J("ngIf",n.gitHub),t.xp6(1),t.Q6J("ngIf",n.linkedIn)}}function E(o,r){if(1&o&&(t.TgZ(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",9),t._uU(4,"account_circle"),t.qZA(),t.TgZ(5,"strong"),t._uU(6),t.qZA()(),t.TgZ(7,"mat-panel-description"),t._uU(8),t.qZA()(),t.YNc(9,I,17,12,"ng-template",10),t.qZA()),2&o){const e=r.$implicit;t.Q6J("expanded",0===r.index),t.xp6(6),t.AsE("",e.firstName," ",e.lastName,""),t.xp6(2),t.Oqu(e.jobTitle)}}function N(o,r){if(1&o&&(t.TgZ(0,"mat-accordion",6),t.YNc(1,E,10,4,"mat-expansion-panel",7),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.allContributors)}}function $(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",22)(1,"div",23)(2,"h1",24)(3,"strong"),t._uU(4,"An error occurred fetching the list of project contributors. Sorry about that!"),t.qZA(),t.TgZ(5,"mat-hint",25),t._uU(6),t.qZA()(),t.TgZ(7,"div")(8,"button",26),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.fetchAllContributors())}),t.TgZ(9,"mat-icon",16),t._uU(10,"refresh"),t.qZA(),t.TgZ(11,"span"),t._uU(12,"RETRY"),t.qZA()()()()()}if(2&o){const e=t.oxw();t.xp6(6),t.Oqu(e.contributorsFetchError)}}const Z=function(o,r){return{"pf-w-70":o,"w-100":r}};class m{constructor(r,e){Object.defineProperty(this,"_changeDetectorRef",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"_contributorService",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"allContributors",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"contributorsFetchError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"mobileView",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"AppRoute",{enumerable:!0,configurable:!0,writable:!0,value:U.FR}),Object.defineProperty(this,"contributorNamesKebab",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"matTooltipShowDelay",{enumerable:!0,configurable:!0,writable:!0,value:b.E.appConfiguration.constants.tooltipShowDelayMS}),Object.defineProperty(this,"_componentDestroyed$",{enumerable:!0,configurable:!0,writable:!0,value:new O.t(1)})}_onResize(r,e=!1){this.mobileView=e?window.innerWidth<b.E.appConfiguration.constants.mobileViewThresholdWidthPX:r.innerWidth<b.E.appConfiguration.constants.mobileViewThresholdWidthPX}ngOnInit(){this._onResize(window,!0),this._contributorService.getAllContributors$().pipe((0,x.R)(this._componentDestroyed$)).subscribe({next:r=>{this.allContributors=r,this.contributorsFetchError=void 0;for(const e of r)this.contributorNamesKebab.push(`${e.firstName} ${e.lastName}`.toLowerCase().replace(" ","-"));0===this.allContributors.length&&(this.contributorsFetchError="The list of contributors seems to be empty. Please try again later."),this._changeDetectorRef.detectChanges()}}),this._contributorService.getContributorsFetchError$().pipe((0,x.R)(this._componentDestroyed$)).subscribe({next:r=>{r&&(this.contributorsFetchError=r,this._changeDetectorRef.detectChanges())}})}ngOnDestroy(){this._componentDestroyed$.next(!0),this._componentDestroyed$.complete()}fetchAllContributors(){this._contributorService.fetchAllContributors()}getUserNameFromUserId(r){return String(r)}}Object.defineProperty(m,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||m)(t.Y36(t.sBO),t.Y36(u))}}),Object.defineProperty(m,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:t.Xpm({type:m,selectors:[["pf-contributors"]],hostBindings:function(r,e){1&r&&t.NdJ("resize",function(p){return e._onResize(p.target)},!1,t.Jf7)},decls:12,vars:10,consts:[[1,"m-3","row"],[1,"mx-auto",3,"ngClass"],[1,"fs-4","mt-2"],[1,"m-3"],["class","pf-headers-align",4,"ngIf"],["class","row",4,"ngIf"],[1,"pf-headers-align"],[3,"expanded",4,"ngFor","ngForOf"],[3,"expanded"],[1,"me-3"],["matExpansionPanelContent",""],[1,"d-flex","justify-content-center"],[1,"mat-elevation-z0"],["mat-card-avatar","",3,"alt","src"],[4,"ngIf"],["mat-button","",3,"href","matTooltip","matTooltipShowDelay"],[1,"me-2"],["mat-button","","target","_blank",3,"href",4,"ngIf"],["mat-stroked-button","","matTooltipPosition","right",3,"href","routerLink","matTooltip","matTooltipShowDelay"],["mat-button","","target","_blank",3,"href"],["alt","GitHub Logo","src","assets/images/other-logos/github.svg",1,"me-2","pf-svg-icon"],["alt","LinkedIn Logo","src","assets/images/other-logos/linkedin.svg",1,"me-2","pf-svg-icon"],[1,"row"],[1,"col"],[1,"fs-4","row"],[1,"fs-5"],["mat-raised-button","",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"header")(1,"div",0)(2,"div",1)(3,"h1",2)(4,"strong"),t._uU(5,"Contributors"),t.qZA()(),t.TgZ(6,"p"),t._uU(7,"This page displays current contributors to the project."),t.qZA()()()(),t.TgZ(8,"div",3)(9,"div",1),t.YNc(10,N,2,1,"mat-accordion",4),t.YNc(11,$,13,1,"div",5),t.qZA()()),2&r&&(t.xp6(2),t.Q6J("ngClass",t.WLB(4,Z,!e.mobileView,e.mobileView)),t.xp6(7),t.Q6J("ngClass",t.WLB(7,Z,!e.mobileView,e.mobileView)),t.xp6(1),t.Q6J("ngIf",!e.contributorsFetchError),t.xp6(1),t.Q6J("ngIf",e.contributorsFetchError))},dependencies:[f.lW,f.zs,a.a8,a.dk,a.dn,a.$j,a.hq,a.kc,s.pp,s.ib,s.yz,s.yK,s.u4,s.HS,_.bx,v.Hw,C.gM,d.yS,g.mk,g.sg,g.O5],changeDetection:0})});const R=[{path:"",component:m}];class c{}Object.defineProperty(c,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||c)}}),Object.defineProperty(c,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:t.oAB({type:c})}),Object.defineProperty(c,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:t.cJS({imports:[d.Bz.forChild(R),d.Bz]})});var J=i(4343);class l{}Object.defineProperty(l,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||l)}}),Object.defineProperty(l,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:t.oAB({type:l})}),Object.defineProperty(l,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:t.cJS({providers:[u],imports:[f.ot,a.QW,s.To,_.lN,v.Ps,C.AV,c,J.m]})})}}]);
//# sourceMappingURL=ContributorsModule.js.map