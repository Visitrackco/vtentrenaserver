function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function asyncGeneratorStep(e,t,r,o,i,a,n){try{var s=e[a](n),d=s.value}catch(c){return void r(c)}s.done?t(d):Promise.resolve(d).then(o,i)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function n(e){asyncGeneratorStep(a,o,i,n,s,"next",e)}function s(e){asyncGeneratorStep(a,o,i,n,s,"throw",e)}n(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{mgaC:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_modal",(function(){return y}));var o=r("imtE"),i=r("AfW+"),a=r("aiEM"),n=r("1ym9"),s=r("0AIG"),d=r("AzGJ"),c=(r("kBU6"),r("EV1M"),r("7TZ+")),l=r("Dl6n"),m=r("m9yc"),p=r("7MJf"),u=function(e,t){var r=Object(n.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),o=Object(n.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),i=Object(n.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).beforeAddClass("show-modal").addAnimation([r,o]);if(t){var a=document.body,s="translateY(".concat("ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))",") scale(0.93)"),d=Object(n.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}).afterStyles({transform:s}).beforeAddWrite((function(){return a.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:s,borderRadius:"10px 10px 0 0"}]);i.addAnimation(d)}return i},h=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,o=Object(n.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i=Object(n.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY(100%)"),a=Object(n.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation([o,i]);if(t){var s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))",d=document.body,c=.93,l=Object(n.a)().addElement(t).beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){1===e&&(t.style.setProperty("overflow",""),Array.from(d.querySelectorAll("ion-modal")).filter((function(e){return void 0!==e.presentingElement})).length<=1&&d.style.setProperty("background-color",""))})).keyframes([{offset:0,filter:"contrast(0.85)",transform:"translateY(".concat(s,") scale(").concat(c,")"),borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);a.addAnimation(l)}return a},f=function(e){var t=Object(n.a)(),r=Object(n.a)(),o=Object(n.a)();return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([r,o])},b=function(e){var t=Object(n.a)(),r=Object(n.a)(),o=Object(n.a)(),i=e.querySelector(".modal-wrapper");return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(i).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,o])},y=function(){function e(t){var r=this;_classCallCheck(this,e),Object(o.k)(this,t),this.gestureAnimationDismissing=!1,this.presented=!1,this.mode=Object(o.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){r.dismiss(void 0,c.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),r.dismiss()},this.onLifecycle=function(e){var t=r.usersElement,o=v[e.type];if(t&&o){var i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}},Object(c.e)(this.el),this.didPresent=Object(o.e)(this,"ionModalDidPresent",7),this.willPresent=Object(o.e)(this,"ionModalWillPresent",7),this.willDismiss=Object(o.e)(this,"ionModalWillDismiss",7),this.didDismiss=Object(o.e)(this,"ionModalDidDismiss",7)}var t,r;return _createClass(e,[{key:"present",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,n,l,b,y=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".modal-wrapper")){e.next=5;break}throw new Error("container is undefined");case 5:return r=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),e.next=8,Object(m.a)(this.delegate,t,this.component,["ion-page"],r);case 8:return this.usersElement=e.sent,e.next=11,Object(p.a)(this.usersElement);case 11:return e.next=13,Object(c.f)(this,"modalEnter",u,f,this.presentingElement);case 13:n=Object(o.d)(this),this.swipeToClose&&"ios"===n&&(l=this.leaveAnimation||i.b.get("modalLeave",h),b=this.animation=l(this.el,this.presentingElement),this.gesture=function(e,t,r){var o=e.offsetHeight,i=!1,n=Object(d.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:function(){t.progressStart(!0,i?1:0)},onMove:function(e){var r=e.deltaY/o;r<0||t.progressStep(r)},onEnd:function(e){var r=e.velocityY,d=e.deltaY/o;if(!(d<0)){var c=(e.deltaY+1e3*r)/o>=.5,l=c?-.001:.001;c?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),l+=Object(s.a)([0,0],[.32,.72],[0,1],[1,1],d)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),l+=Object(s.a)([0,0],[1,0],[.68,.28],[1,1],d)[0]);var m=function(e,t){return Object(a.c)(400,e/Math.abs(1.1*t),500)}(c?d*o:(1-d)*o,r);i=c,n.enable(!1),t.onFinish((function(){c||n.enable(!0)})).progressEnd(c?1:0,l,m),c&&(y.gestureAnimationDismissing=!0,y.animation.onFinish(_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.dismiss(void 0,"gesture");case 2:y.gestureAnimationDismissing=!1;case 3:case"end":return e.stop()}}),e)})))))}}});return n}(this.el,b),this.gesture.enable(!0));case 15:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"dismiss",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){var o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.gestureAnimationDismissing||"gesture"===r){e.next=2;break}return e.abrupt("return",!1);case 2:return o=c.i.get(this)||[],e.next=5,Object(c.g)(this,t,r,"modalLeave",h,b,this.presentingElement);case 5:if(i=e.sent,e.t0=i,!e.t0){e.next=12;break}return e.next=10,Object(m.b)(this.delegate,this.usersElement);case 10:this.animation&&this.animation.destroy(),o.forEach((function(e){return e.destroy()}));case 12:return this.animation=void 0,e.abrupt("return",i);case 14:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(c.h)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(c.h)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var e,t=Object(o.d)(this);return Object(o.i)(o.a,{"no-router":!0,"aria-modal":"true",class:Object.assign((e={},_defineProperty(e,t,!0),_defineProperty(e,"modal-card",void 0!==this.presentingElement&&"ios"===t),e),Object(l.b)(this.cssClass)),style:{zIndex:"".concat(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{role:"dialog",class:"modal-wrapper"}))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"style",get:function(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.4)}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}"}}]),e}(),v={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);