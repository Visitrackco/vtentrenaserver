(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{mgaC:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_modal",(function(){return g}));var i=o("imtE"),a=o("AfW+"),s=o("aiEM"),r=o("1ym9"),n=o("0AIG"),d=o("AzGJ"),l=(o("kBU6"),o("EV1M"),o("7TZ+")),c=o("Dl6n"),m=o("m9yc"),h=o("7MJf");const p=(e,t)=>{const o=Object(r.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),i=Object(r.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),a=Object(r.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).beforeAddClass("show-modal").addAnimation([o,i]);if(t){const e=document.body,o=`translateY(${"ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))"}) scale(0.93)`,i=Object(r.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}).afterStyles({transform:o}).beforeAddWrite(()=>e.style.setProperty("background-color","black")).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:o,borderRadius:"10px 10px 0 0"}]);a.addAnimation(i)}return a},b=(e,t,o=500)=>{const i=Object(r.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a=Object(r.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY(100%)"),s=Object(r.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation([i,a]);if(t){const e="ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))",o=document.body,i=.93,a=Object(r.a)().addElement(t).beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(e=>{1===e&&(t.style.setProperty("overflow",""),Array.from(o.querySelectorAll("ion-modal")).filter(e=>void 0!==e.presentingElement).length<=1&&o.style.setProperty("background-color",""))}).keyframes([{offset:0,filter:"contrast(0.85)",transform:`translateY(${e}) scale(${i})`,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);s.addAnimation(a)}return s},f=e=>{const t=Object(r.a)(),o=Object(r.a)(),i=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),i.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([o,i])},u=e=>{const t=Object(r.a)(),o=Object(r.a)(),i=Object(r.a)(),a=e.querySelector(".modal-wrapper");return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(a).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,i])},g=class{constructor(e){Object(i.k)(this,e),this.gestureAnimationDismissing=!1,this.presented=!1,this.mode=Object(i.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,l.a)},this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onLifecycle=e=>{const t=this.usersElement,o=y[e.type];if(t&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}},Object(l.e)(this.el),this.didPresent=Object(i.e)(this,"ionModalDidPresent",7),this.willPresent=Object(i.e)(this,"ionModalWillPresent",7),this.willDismiss=Object(i.e)(this,"ionModalWillDismiss",7),this.didDismiss=Object(i.e)(this,"ionModalDidDismiss",7)}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await Object(m.a)(this.delegate,e,this.component,["ion-page"],t),await Object(h.a)(this.usersElement),await Object(l.f)(this,"modalEnter",p,f,this.presentingElement);const o=Object(i.d)(this);if(this.swipeToClose&&"ios"===o){const e=this.leaveAnimation||a.b.get("modalLeave",b),t=this.animation=e(this.el,this.presentingElement);this.gesture=((e,t,o)=>{const i=e.offsetHeight;let a=!1;const r=Object(d.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:e=>{const t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:()=>{t.progressStart(!0,a?1:0)},onMove:e=>{const o=e.deltaY/i;o<0||t.progressStep(o)},onEnd:e=>{const d=e.velocityY,l=e.deltaY/i;if(l<0)return;const c=(e.deltaY+1e3*d)/i>=.5;let m=c?-.001:.001;c?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),m+=Object(n.a)([0,0],[.32,.72],[0,1],[1,1],l)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),m+=Object(n.a)([0,0],[1,0],[.68,.28],[1,1],l)[0]);const h=((e,t)=>Object(s.c)(400,e/Math.abs(1.1*t),500))(c?l*i:(1-l)*i,d);a=c,r.enable(!1),t.onFinish(()=>{c||r.enable(!0)}).progressEnd(c?1:0,m,h),c&&o()}});return r})(this.el,t,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}}async dismiss(e,t){if(this.gestureAnimationDismissing&&"gesture"!==t)return!1;const o=l.i.get(this)||[],i=await Object(l.g)(this,e,t,"modalLeave",b,u,this.presentingElement);return i&&(await Object(m.b)(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),o.forEach(e=>e.destroy())),this.animation=void 0,i}onDidDismiss(){return Object(l.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return Object(l.h)(this.el,"ionModalWillDismiss")}render(){const e=Object(i.d)(this);return Object(i.i)(i.a,{"no-router":!0,"aria-modal":"true",class:Object.assign({[e]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===e},Object(c.b)(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(i.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(i.i)("div",{role:"dialog",class:"modal-wrapper"}))}get el(){return Object(i.f)(this)}static get style(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.4)}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}"}},y={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);