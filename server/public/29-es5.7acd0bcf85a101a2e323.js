function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{xCeV:function(e,n,t){"use strict";t.r(n);var o=t("ofXK"),s=t("3Pt+"),i=t("TEn/"),a=t("tyNb"),r=t("mrSG"),c=t("96DK"),l=t("VOof"),p=t("J07l"),b=t("w9U0"),u=t("lNB8"),g=t("Adf6"),d=t("R0Ic"),m=t("NIW7"),h=t("fXoL"),f=t("7JkF"),v=t("e8h1");function C(e,n){1&e&&(h.Mb(0,"div"),h.Mb(1,"ion-row"),h.Mb(2,"ion-col",19),h.Kb(3,"ion-spinner",20),h.Lb(),h.Lb(),h.Mb(4,"ion-row"),h.Mb(5,"ion-col",19),h.Mb(6,"p"),h.lc(7,"Accediendo a la cuenta"),h.Lb(),h.Lb(),h.Lb(),h.Lb())}function y(e,n){if(1&e){var t=h.Nb();h.Mb(0,"div",6),h.Mb(1,"h3"),h.lc(2,"Credenciales de Usuario"),h.Lb(),h.Mb(3,"ion-list"),h.Mb(4,"ion-item",7),h.Mb(5,"ion-checkbox",8),h.Ub("ionChange",(function(e){return h.hc(t),h.Wb().changeLogin(e)})),h.Lb(),h.Mb(6,"ion-label"),h.lc(7,"Entrar como usuario Externo"),h.Lb(),h.Lb(),h.Mb(8,"ion-item",9),h.Kb(9,"ion-icon",10),h.Mb(10,"ion-input",11),h.Ub("ngModelChange",(function(e){return h.hc(t),h.Wb().login.user=e})),h.Lb(),h.Lb(),h.Mb(11,"ion-item",9),h.Kb(12,"ion-icon",12),h.Mb(13,"ion-input",13),h.Ub("ngModelChange",(function(e){return h.hc(t),h.Wb().login.password=e})),h.Lb(),h.Lb(),h.Lb(),h.Mb(14,"ion-grid",14),h.Mb(15,"ion-row",15),h.Mb(16,"ion-col",16),h.Mb(17,"ion-button",17),h.Ub("click",(function(){return h.hc(t),h.Wb().sessionInit()})),h.lc(18,"Login"),h.Lb(),h.Lb(),h.Lb(),h.kc(19,C,8,0,"div",18),h.Lb(),h.Lb()}if(2&e){var o=h.Wb();h.cc("@openClosed",void 0),h.zb(10),h.cc("ngModel",o.login.user),h.zb(3),h.cc("ngModel",o.login.password),h.zb(6),h.cc("ngIf",o.statusResponse)}}function M(e,n){1&e&&(h.Mb(0,"div"),h.Mb(1,"ion-row"),h.Mb(2,"ion-col",19),h.Kb(3,"ion-spinner",20),h.Lb(),h.Lb(),h.Mb(4,"ion-row"),h.Mb(5,"ion-col",19),h.Mb(6,"p"),h.lc(7,"Accediendo a la cuenta de entrenamiento"),h.Lb(),h.Lb(),h.Lb(),h.Lb())}function w(e,n){if(1&e){var t=h.Nb();h.Mb(0,"div",21),h.Mb(1,"h3"),h.lc(2,"Credenciales de Usuario"),h.Lb(),h.Mb(3,"ion-list"),h.Mb(4,"ion-item",9),h.Kb(5,"ion-icon",10),h.Mb(6,"ion-input",11),h.Ub("ngModelChange",(function(e){return h.hc(t),h.Wb().loginEntrena.login=e})),h.Lb(),h.Lb(),h.Mb(7,"ion-item",9),h.Kb(8,"ion-icon",12),h.Mb(9,"ion-input",13),h.Ub("ngModelChange",(function(e){return h.hc(t),h.Wb().loginEntrena.password=e})),h.Lb(),h.Lb(),h.Lb(),h.Mb(10,"ion-grid",14),h.Mb(11,"ion-row",15),h.Mb(12,"ion-col",16),h.Mb(13,"ion-button",22),h.Ub("click",(function(){return h.hc(t),h.Wb().sessionInit()})),h.lc(14,"Login"),h.Lb(),h.Lb(),h.Lb(),h.kc(15,M,8,0,"div",18),h.Lb(),h.Lb()}if(2&e){var o=h.Wb();h.cc("@openClosed",void 0),h.zb(6),h.cc("ngModel",o.loginEntrena.login),h.zb(3),h.cc("ngModel",o.loginEntrena.password),h.zb(6),h.cc("ngIf",o.statusResponse)}}var L,k,x=[{path:"",component:(L=function(){function e(n,t,o,s,i,a,r,c,l,p,b,u){var g=this;_classCallCheck(this,e),this.apiService=n,this.toastService=t,this.navCtrl=o,this.dataCompanyService=s,this.SQLService=i,this.storageService=a,this.myPlatform=r,this.menuCtrl=c,this.router=l,this.socket=p,this.storage=b,this.VTEntrenaApi=u,this.login={user:"",password:""},this.loginEntrena={login:"",password:""},this.typeApp="2",this.statusResponse=!1,this.plt="",this.ext=!1,this.IPAddres="",this.myPlatform.$myplatform.subscribe((function(e){g.plt=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){var e=this;this.menuCtrl.enable(!1,"menu"),this.createdCollections(),this.VTEntrenaApi.readIP().subscribe((function(n){n.ip&&(e.IPAddres=n.ip)}))}},{key:"createdCollections",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t,o,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Holaaa"),e.next=3,this.storage.get("login");case 3:return n=e.sent,e.next=6,this.storage.get("forms");case 6:return t=e.sent,e.next=9,this.storage.get("formActive");case 9:return o=e.sent,e.next=12,this.storage.get("chats");case 12:if(s=e.sent,e.t0=n,e.t0){e.next=17;break}return e.next=17,this.storage.set("login",[]);case 17:if(e.t1=t,e.t1){e.next=21;break}return e.next=21,this.storage.set("forms",[]);case 21:if(e.t2=o,e.t2){e.next=25;break}return e.next=25,this.storage.set("formActive",[]);case 25:if(e.t3=s,e.t3){e.next=29;break}return e.next=29,this.storage.set("chats",[]);case 29:case"end":return e.stop()}}),e,this)})))}},{key:"changeApp",value:function(e){"1"!==e&&"2"!==e||(this.typeApp=e)}},{key:"changeLogin",value:function(e){this.ext=e.detail.checked,console.log(e)}},{key:"sessionInit",value:function(){var e=this;if("1"===this.typeApp)this.ext?(this.statusResponse=!0,this.apiService.postLoginExte(this.login).subscribe((function(n){console.log(n),"error"===n.status?(e.statusResponse=!1,e.toastService.newCreatedToast("No se pudo iniciar sesion, intentelo mas tarde",!1)):"ok"===n.status&&""===n.response?(e.statusResponse=!1,e.toastService.newCreatedToast("Credenciales Incorrectas, compruebe su informacion",!1)):"ok"===n.status&&n.response.length>0&&(e.dataCompanyService.getDataCompany({pathLogoCompany:"https://s3.amazonaws.com/logocompanies/D0DE636B-6CED-41BB-BA27-6ED7A1AE771D.jpg",nameCompany:"Visitrack",ext:!0}),e.socket.emit("login",{ID:n.response[0].login}),e.socket.emit("welcomeExt",{CompanyID:n.response[0].idCompany,name:n.response[0].name,login:n.response[0].login,type:"exter"}),"web"===e.plt&&(e.storageService.insertUser({CompanyID:n.response[0].idCompany,name:n.response[0].name,login:n.response[0].login,type:"exter",logo:"https://s3.amazonaws.com/logocompanies/D0DE636B-6CED-41BB-BA27-6ED7A1AE771D.jpg",companyName:"Visitrack Application"}),e.menuCtrl.enable(!0,"menu"),e.toastService.newCreatedToast("Iniciando",!0).then((function(){e.router.navigate(["/home"])}))),console.log(n.response),e.statusResponse=!1)}),(function(n){e.statusResponse=!1,e.toastService.newCreatedToast(n,!0)}))):(this.statusResponse=!0,this.apiService.postLogin(this.login).subscribe((function(n){n=JSON.parse(n),console.log(n),delete n.Password,n.password=e.login.password,n.login=e.login.user,n.name=n.FirstName+" "+n.LastName,console.log(n,"datica"),void 0===n.AccessToken?(console.log("Error ",n.errorMsg),e.statusResponse=!1,e.toastService.newCreatedToast(n.errorMsg,!1)):e.apiService.getUsersCompany({AccessToken:n.AccessToken}).subscribe((function(t){var o=(t=JSON.parse(t))[0].filter((function(e){return e.ID===n.UserID}));n.ROLE=o[0].RoleCode,n.type="inter",e.socket.emit("login",{ID:n.UserID}),e.socket.emit("welcome",n),e.statusResponse=!1,e.dataCompanyService.getDataCompany({pathLogoCompany:n.logo,nameCompany:n.companyName,ext:!1}),"web"===e.plt&&(e.storageService.insertUser(n),e.menuCtrl.enable(!0,"menu"),e.toastService.newCreatedToast("Iniciando",!0).then((function(){e.router.navigate(["/forms"])})))}))}),(function(n){e.statusResponse=!1,e.toastService.newCreatedToast(n,!0)})));else if("2"===this.typeApp){var n=navigator.userAgent,t=!1,o="";["Edg","Chrome","Safari","Firefox","Opera","MSIE","Trident"].forEach((function(e){-1===n.indexOf(e)||t||(o=e,t=!0)})),this.VTEntrenaApi.loginUser(this.loginEntrena,this.IPAddres,{name:o,agent:navigator.userAgent}).subscribe((function(n){return Object(r.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),"ok"===n.status?(n.response.typeApp="2",n.response.logo="https://s3.amazonaws.com/logocompanies/D0DE636B-6CED-41BB-BA27-6ED7A1AE771D.jpg",n.response.companyName="Visitrack Application",this.dataCompanyService.getDataCompany({pathLogoCompany:n.response.logo,nameCompany:n.response.companyName}),this.storageService.insertUser(n.response).then((function(){t.menuCtrl.enable(!0,"menu"),t.router.navigate(["/list-my-designs"]),t.socket.emit("connectVT",n.response.data),t.dataCompanyService.getVista("3")}))):this.toastService.newCreatedToast("".concat(n.response),!1);case 1:case"end":return e.stop()}}),e,this)})))}),(function(n){e.toastService.newCreatedToast("Error session ".concat(n),!1)}))}}}]),e}(),L.\u0275fac=function(e){return new(e||L)(h.Jb(p.a),h.Jb(b.a),h.Jb(i.Z),h.Jb(u.a),h.Jb(g.a),h.Jb(l.a),h.Jb(c.a),h.Jb(i.X),h.Jb(a.f),h.Jb(f.a),h.Jb(v.b),h.Jb(m.a))},L.\u0275cmp=h.Db({type:L,selectors:[["app-login"]],decls:8,vars:2,consts:[["color","dark"],[1,"center"],[1,"ion-padding"],[1,"contenedor","margin"],["class","web",4,"ngIf"],["class","entrena",4,"ngIf"],[1,"web"],["lines","none"],["slot","start","value","","color","primary",3,"ionChange"],["lines","none",1,"campos"],["slot","start","name","person-outline"],["type","text","placeholder","User",3,"ngModel","ngModelChange"],["slot","start","name","lock-closed-outline"],["clearOnEdit","false","type","password","placeholder","Password",3,"ngModel","ngModelChange"],["fixed",""],[1,"ion-margin-bottom"],["size","10","offset","1"],["mode","ios","shape","round","expand","block","color","primary",3,"click"],[4,"ngIf"],["size","10","offset","1",1,"center","row"],["name","crescent","color","danger"],[1,"entrena"],["mode","ios","shape","round","expand","block","color","danger",3,"click"]],template:function(e,n){1&e&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar",0),h.Mb(2,"ion-title",1),h.lc(3,"App"),h.Lb(),h.Lb(),h.Lb(),h.Mb(4,"ion-content",2),h.Mb(5,"div",3),h.kc(6,y,20,4,"div",4),h.kc(7,w,16,4,"div",5),h.Lb(),h.Lb()),2&e&&(h.zb(6),h.cc("ngIf","1"===n.typeApp),h.zb(1),h.cc("ngIf","2"===n.typeApp))},directives:[i.s,i.T,i.S,i.l,o.i,i.B,i.v,i.i,i.b,i.A,i.t,i.u,i.fb,s.c,s.d,i.r,i.J,i.k,i.g,i.P],styles:[".contenedor[_ngcontent-%COMP%]{width:100%;max-width:600px}.margin[_ngcontent-%COMP%]{margin:50px auto}.contenedor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;width:100%;opacity:.5}.campos[_ngcontent-%COMP%]{width:100%;border:1px solid rgba(0,0,0,.3);border-radius:5px;padding:5px 10px!important;margin-bottom:10px;opacity:.7}"],data:{animation:[Object(d.k)("openClosed",[Object(d.j)(":enter",[Object(d.i)({opacity:0,transform:"scale(0)"}),Object(d.e)("500ms",Object(d.i)({opacity:1,transform:"scale(1)"}))]),Object(d.j)(":leave",[Object(d.i)({opacity:1,transform:"scale(1)"}),Object(d.e)("0ms",Object(d.i)({opacity:0,transform:"scale(0)"}))])])]}}),L)}],A=((k=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:k}),k.\u0275inj=h.Gb({factory:function(e){return new(e||k)},imports:[[a.h.forChild(x)],a.h]}),k);t.d(n,"LoginPageModule",(function(){return S}));var E,S=((E=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:E}),E.\u0275inj=h.Gb({factory:function(e){return new(e||E)},imports:[[o.b,s.a,i.U,A]]}),E)}}]);