function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{aEqK:function(e,n,t){"use strict";t.r(n);var o=t("ofXK"),i=t("3Pt+"),a=t("TEn/"),r=t("tyNb"),s=t("mrSG"),c=t("tk/3"),l=t("LRne"),b=t("lJxs"),u=t("JIr8"),p=t("NIW7"),m=t("lNB8"),f=t("VOof"),d=t("w9U0"),h=t("fXoL"),g=["fileUpload"];function v(e,n){if(1&e&&h.Kb(0,"img",17),2&e){var t=h.Wb();h.cc("src",t.logo,h.ic)}}function y(e,n){if(1&e){var t=h.Nb();h.Mb(0,"ion-list"),h.Kb(1,"ion-item-divider",18),h.Mb(2,"ion-item",9),h.Mb(3,"ion-label"),h.Mb(4,"strong"),h.lc(5,"Actualizar imagen por:"),h.Lb(),h.Kb(6,"br"),h.lc(7),h.Lb(),h.Mb(8,"ion-buttons",19),h.Mb(9,"ion-button",20),h.Ub("click",(function(){return h.hc(t),h.Wb().deletedFile()})),h.Kb(10,"ion-icon",21),h.Lb(),h.Lb(),h.Lb(),h.Lb()}if(2&e){var o=n.$implicit;h.zb(7),h.oc(" ",o.data.name," - ",o.data.type," ")}}function M(e,n){if(1&e){var t=h.Nb();h.Mb(0,"ion-button",22),h.Ub("click",(function(){return h.hc(t),h.Wb().onClick()})),h.Mb(1,"div"),h.lc(2,"Cargar Imagen"),h.Lb(),h.Lb()}}function k(e,n){if(1&e){var t=h.Nb();h.Mb(0,"ion-button",23),h.Ub("click",(function(){return h.hc(t),h.Wb().uploadFiles()})),h.Mb(1,"div"),h.lc(2,"Actualizar Foto Empresa"),h.Lb(),h.Lb()}}var L,w,C=[{path:"",component:(L=function(){function e(n,t,o,i,a){var r=this;_classCallCheck(this,e),this.modalCtrl=n,this.storage=t,this.apiEntrena=o,this.toasCtrl=i,this.dtacompany=a,this.files=[],this.filesRendering=[],this.values={src:"",mime:"",name:""},this.logo="",this.name="",this.theme="",this.dtacompany.$color.subscribe((function(e){r.theme=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.loadDataMenu()}},{key:"loadDataMenu",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.getLogin();case 2:(n=e.sent)&&this.apiEntrena.preferencesLoad({user:n[0].data._id},n[0].token).subscribe((function(e){console.log(e),"ok"===e.status?(t.logo=e.response.logo?"https://www.vtentrena.com/"+e.response.logo:"",t.name=e.response.nameCompany?e.response.nameCompany:"VTEntrena Application",t.theme=e.response.theme?e.response.theme:"light"):(t.logo="",t.name="VTEntrena Application",t.theme="light")}),(function(e){t.logo="",t.name="VTEntrena Application",t.theme="light"}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"uploadFile",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,o,i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.storage.getLogin();case 2:(t=n.sent)&&((o=new FormData).append("file",e.data),e.inProgress=!0,console.log(t),this.apiEntrena.uploadPreference(o,t[0].token).pipe(Object(b.a)((function(n){switch(console.log("Holaa"),n.type){case c.c.UploadProgress:e.progress=Math.round(1*n.loaded/n.total);break;case c.c.Response:return n}})),Object(u.a)((function(n){return e.inProgress=!1,Object(l.a)("".concat(e.data.name," upload failed."))}))).subscribe((function(e){"object"==typeof e&&(console.log(e.body," Respuesta"),"ok"===e.body.status?(i.logo="https://www.vtentrena.com/"+e.body.response.logo,i.dtacompany.getDataCompany({logo:"https://www.vtentrena.com/uploads/Perfiles/"+e.body.response.logo,name:e.body.response.nameCompany?e.body.response.nameCompany:"VTEntrena Application"}),i.files=[]):i.toasCtrl.newCreatedToast("Upload failed",!1))})));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"uploadFiles",value:function(){var e=this;this.fileUpload.nativeElement.value="",this.files.forEach((function(n){e.uploadFile(n)}))}},{key:"onClick",value:function(){var e=this,n=this.fileUpload.nativeElement;n.onchange=function(){for(var t=0;t<n.files.length;t++){var o=n.files[t];console.log(o,o.name),e.files.push({data:o,inProgress:!1,progress:0})}},n.click()}},{key:"deletedFile",value:function(){this.files=[]}},{key:"changeTheme",value:function(e){this.theme=e.detail.value}},{key:"save",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.getLogin();case 2:(n=e.sent)&&this.apiEntrena.preferences({name:this.name,theme:this.theme},n[0].token).subscribe((function(e){console.log(e),"ok"===e.status?(t.toasCtrl.newCreatedToast("Datos Actualizados",!0),t.name=e.response.nameCompany?e.response.nameCompany:"VTEntrena Application",t.theme=e.response.theme?e.response.theme:"light",t.dtacompany.getDataCompany({logo:"https://www.vtentrena.com/"+e.response.logo,name:e.response.nameCompany?e.response.nameCompany:"VTEntrena Application"}),t.dtacompany.setColor(t.theme)):(t.toasCtrl.newCreatedToast("No se pudo actualizar la informaci\xf3n",!1),t.theme="light",t.name="VTEntrena Application")}),(function(e){t.toasCtrl.newCreatedToast("No se pudo actualizar la informaci\xf3n",!1),t.theme="light",t.name="VTEntrena Application"}));case 4:case"end":return e.stop()}}),e,this)})))}}]),e}(),L.\u0275fac=function(e){return new(e||L)(h.Jb(a.Y),h.Jb(f.a),h.Jb(p.a),h.Jb(d.a),h.Jb(m.a))},L.\u0275cmp=h.Db({type:L,selectors:[["app-preferences"]],viewQuery:function(e,n){var t;1&e&&h.pc(g,!0),2&e&&h.gc(t=h.Vb())&&(n.fileUpload=t.first)},decls:44,vars:6,consts:[[3,"color"],["color","light"],[2,"margin-top","10px"],["class","img","alt","",3,"src",4,"ngIf"],[4,"ngFor","ngForOf"],["class","myButton","mode","ios","color","tertiary",3,"click",4,"ngIf"],["class","myButton","mode","ios","color","success",3,"click",4,"ngIf"],["type","file","id","fileUpload","name","file","accept","image/*","multiple","false",2,"display","none"],["fileUpload",""],[1,"marginBottom"],["type","text",3,"ngModel","ngModelChange"],["value","Rojo","okText","Aceptar","cancelText","Cancelar",3,"ionChange"],["value","danger"],["value","success"],["value","warning"],["value","primary"],["expand","block","mode","ios","color","light",1,"myButton",3,"click"],["alt","",1,"img",3,"src"],["color","warning"],["slot","end"],[3,"click"],["name","trash","color","danger","slot","icon-only"],["mode","ios","color","tertiary",1,"myButton",3,"click"],["mode","ios","color","success",1,"myButton",3,"click"]],template:function(e,n){1&e&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar",0),h.Mb(2,"ion-title"),h.lc(3,"Preferencias"),h.Lb(),h.Lb(),h.Lb(),h.Mb(4,"ion-content"),h.Mb(5,"ion-item-divider",1),h.Mb(6,"ion-label"),h.Mb(7,"strong"),h.lc(8,"Foto de Empresa"),h.Lb(),h.Lb(),h.Lb(),h.Mb(9,"div"),h.Mb(10,"div",2),h.kc(11,v,1,1,"img",3),h.kc(12,y,11,2,"ion-list",4),h.Mb(13,"div"),h.kc(14,M,3,0,"ion-button",5),h.kc(15,k,3,0,"ion-button",6),h.Lb(),h.Lb(),h.Kb(16,"input",7,8),h.Lb(),h.Mb(18,"ion-list"),h.Mb(19,"ion-item-divider",1),h.Mb(20,"ion-label"),h.Mb(21,"strong"),h.lc(22,"Informaci\xf3n"),h.Lb(),h.Lb(),h.Lb(),h.Mb(23,"ion-item-divider",9),h.Mb(24,"ion-label"),h.Mb(25,"strong"),h.lc(26,"Nombre de Empresa"),h.Lb(),h.Lb(),h.Mb(27,"ion-input",10),h.Ub("ngModelChange",(function(e){return n.name=e})),h.Lb(),h.Lb(),h.Mb(28,"ion-item",9),h.Mb(29,"ion-label"),h.Mb(30,"strong"),h.lc(31,"Tema Color"),h.Lb(),h.Lb(),h.Mb(32,"ion-select",11),h.Ub("ionChange",(function(e){return n.changeTheme(e)})),h.Mb(33,"ion-select-option",12),h.lc(34,"Rojo"),h.Lb(),h.Mb(35,"ion-select-option",13),h.lc(36,"Verde"),h.Lb(),h.Mb(37,"ion-select-option",14),h.lc(38,"Amarillo"),h.Lb(),h.Mb(39,"ion-select-option",15),h.lc(40,"Azul"),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(41,"ion-button",16),h.Ub("click",(function(){return n.save()})),h.Mb(42,"div"),h.lc(43,"Guardar Cambios"),h.Lb(),h.Lb(),h.Lb()),2&e&&(h.zb(1),h.cc("color",n.theme),h.zb(10),h.cc("ngIf",""!==n.logo),h.zb(1),h.cc("ngForOf",n.files),h.zb(2),h.cc("ngIf",0===n.files.length),h.zb(1),h.cc("ngIf",n.files.length>0),h.zb(12),h.cc("ngModel",n.name))},directives:[a.s,a.T,a.S,a.l,a.w,a.A,o.i,o.h,a.B,a.u,a.fb,i.c,i.d,a.v,a.L,a.eb,a.M,a.g,a.h,a.t],styles:[".img[_ngcontent-%COMP%]{width:100%;max-width:500px;text-align:center;padding:10px}"]}),L)}],E=((w=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:w}),w.\u0275inj=h.Gb({factory:function(e){return new(e||w)},imports:[[r.h.forChild(C)],r.h]}),w);t.d(n,"PreferencesPageModule",(function(){return x}));var T,x=((T=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:T}),T.\u0275inj=h.Gb({factory:function(e){return new(e||T)},imports:[[o.b,i.a,a.U,E]]}),T)}}]);