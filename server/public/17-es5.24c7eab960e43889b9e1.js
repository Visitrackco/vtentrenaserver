function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{uwBG:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),a=n("tyNb"),s=n("mrSG"),c=n("NIW7"),l=n("VOof"),u=n("w9U0"),b=n("lNB8"),d=n("fXoL"),f=n("qP/N"),g=function(e){return["/designer",e]};function h(e,t){if(1&e){var n=d.Nb();d.Mb(0,"ion-item-sliding"),d.Mb(1,"ion-item",6),d.Mb(2,"ion-label"),d.Mb(3,"strong"),d.lc(4),d.Lb(),d.Kb(5,"br"),d.Mb(6,"strong"),d.lc(7,"Creado: "),d.Lb(),d.lc(8),d.Lb(),d.Lb(),d.Mb(9,"ion-item-options",7),d.Mb(10,"ion-item-option",4),d.Ub("click",(function(){d.hc(n);var e=t.$implicit;return d.Wb().deleteDesign(e)})),d.Kb(11,"ion-icon",8),d.Lb(),d.Lb(),d.Lb()}if(2&e){var r=t.$implicit,i=d.Wb();d.zb(1),d.cc("routerLink",d.fc(4,g,r._id)),d.zb(3),d.mc(r.name),d.zb(4),d.nc(" ",r.dateCreated," "),d.zb(2),d.cc("color",i.color)}}var p,m,C=[{path:"",component:(p=function(){function e(t,n,r,i,o,a){var s=this;_classCallCheck(this,e),this.router=t,this.apiEntrena=n,this.storage=r,this.toasCtrl=i,this.alertCtrl=o,this.dataCompany=a,this.listDesigner=[],this.text="",this.color="",this.dataCompany.$color.subscribe((function(e){s.color=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.ListDesigners()}},{key:"ListDesigners",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.getLogin();case 2:(t=e.sent)&&this.apiEntrena.readDesignersAll(t[0].token,"USER_ENTRENA"===t[0].data.role?t[0].data.parentAdmin:"").subscribe((function(e){"ok"===e.status?n.listDesigner=e.response:n.toasCtrl.newCreatedToast("Could not create design, please try again later",!1)}),(function(e){n.toasCtrl.newCreatedToast("Could not create design, please try again later",!1)}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"newDesigner",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.getLogin();case 2:(t=e.sent)&&this.apiEntrena.createDesigner(t[0].token).subscribe((function(e){"ok"===e.status?n.router.navigate(["/designer",e.response._id]):n.toasCtrl.newCreatedToast("Could not create design, please try again later",!1)}),(function(e){n.toasCtrl.newCreatedToast("Could not create design, please try again later",!1)}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"deleteDesign",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertCtrl.create({header:"Esta seguro de eliminar este dise\xf1o ?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:function(){return Object(s.a)(r,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getLogin();case 2:(n=t.sent)&&this.apiEntrena.deleteDesigner(n[0].token,e._id).subscribe((function(e){console.log(e,"eliminando"),"ok"===e.status?(r.toasCtrl.newCreatedToast("Modulo eliminado de la lista",!0),r.ListDesigners()):r.toasCtrl.newCreatedToast("No se pudo eliminar el modulo, intentelo mas tarde",!1)}),(function(e){r.toasCtrl.newCreatedToast("No se pudo eliminar el modulo, intentelo mas tarde",!1)}));case 4:case"end":return t.stop()}}),t,this)})))}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"changeText",value:function(e){this.text=e.detail.value}}]),e}(),p.\u0275fac=function(e){return new(e||p)(d.Jb(a.f),d.Jb(c.a),d.Jb(l.a),d.Jb(u.a),d.Jb(o.a),d.Jb(b.a))},p.\u0275cmp=d.Db({type:p,selectors:[["app-designer-list"]],decls:12,vars:7,consts:[[3,"color"],["mode","ios","placeholder","Buscar Modulo",3,"ionChange"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"color","click"],["name","add"],[3,"routerLink"],["side","end"],["name","trash","slot","icon-only"]],template:function(e,t){1&e&&(d.Mb(0,"ion-header"),d.Mb(1,"ion-toolbar",0),d.Mb(2,"ion-title"),d.lc(3,"Designer List"),d.Lb(),d.Lb(),d.Lb(),d.Mb(4,"ion-content"),d.Mb(5,"ion-searchbar",1),d.Ub("ionChange",(function(e){return t.changeText(e)})),d.Lb(),d.Mb(6,"ion-list"),d.kc(7,h,12,6,"ion-item-sliding",2),d.Xb(8,"search"),d.Lb(),d.Mb(9,"ion-fab",3),d.Mb(10,"ion-fab-button",4),d.Ub("click",(function(){return t.newDesigner()})),d.Kb(11,"ion-icon",5),d.Lb(),d.Lb(),d.Lb()),2&e&&(d.zb(1),d.cc("color",t.color),d.zb(6),d.cc("ngForOf",d.Zb(8,3,t.listDesigner,t.text,"name")),d.zb(3),d.cc("color",t.color))},directives:[o.s,o.T,o.S,o.l,o.K,o.fb,o.B,r.h,o.n,o.o,o.t,o.z,o.v,o.db,a.g,o.A,o.y,o.x],pipes:[f.a],styles:[""]}),p)}],v=((m=function e(){_classCallCheck(this,e)}).\u0275mod=d.Hb({type:m}),m.\u0275inj=d.Gb({factory:function(e){return new(e||m)},imports:[[a.h.forChild(C)],a.h]}),m),w=n("BQi/");n.d(t,"DesignerListPageModule",(function(){return L}));var k,L=((k=function e(){_classCallCheck(this,e)}).\u0275mod=d.Hb({type:k}),k.\u0275inj=d.Gb({factory:function(e){return new(e||k)},imports:[[r.b,i.a,o.U,v,w.a]]}),k)}}]);