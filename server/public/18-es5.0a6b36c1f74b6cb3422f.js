function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{euV6:function(e,n,i){"use strict";i.r(n);var t=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),c=i("tyNb"),r=i("mrSG"),l=i("NIW7"),b=i("w9U0"),s=i("VOof"),u=i("tk/3"),d=i("lJxs"),p=i("JIr8"),g=i("LRne"),f=i("fXoL"),v=["fileUpload"];function h(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-item",7),f.Mb(1,"ion-input",10),f.Ub("ngModelChange",(function(e){return f.hc(i),f.Wb(2).values.value=e})),f.Lb(),f.Lb()}if(2&e){var t=f.Wb(2);f.zb(1),f.cc("ngModel",t.values.value)}}function m(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-item",7),f.Mb(1,"ion-textarea",10),f.Ub("ngModelChange",(function(e){return f.hc(i),f.Wb(2).values.value=e})),f.Lb(),f.Lb()}if(2&e){var t=f.Wb(2);f.zb(1),f.cc("ngModel",t.values.value)}}function M(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-list"),f.Mb(1,"strong"),f.lc(2,"Titulo del campo"),f.Lb(),f.Kb(3,"br"),f.Mb(4,"ion-item",7),f.Mb(5,"ion-input",8),f.Ub("ngModelChange",(function(e){return f.hc(i),f.Wb().values.title=e})),f.Lb(),f.Lb(),f.Mb(6,"strong"),f.lc(7,"Contenido del campo"),f.Lb(),f.Kb(8,"br"),f.kc(9,h,2,1,"ion-item",9),f.kc(10,m,2,1,"ion-item",9),f.Lb()}if(2&e){var t=f.Wb();f.zb(5),f.cc("ngModel",t.values.title),f.zb(4),f.cc("ngIf","textline"===t.data.type),f.zb(1),f.cc("ngIf","textarea"===t.data.type)}}function L(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-list"),f.Mb(1,"ion-item",15),f.Mb(2,"ion-buttons",16),f.Mb(3,"ion-button",17),f.Ub("click",(function(){f.hc(i);var e=n.index;return f.Wb(2).deleteOpt(e)})),f.Kb(4,"ion-icon",18),f.Lb(),f.Lb(),f.Lb(),f.Mb(5,"ion-item",7),f.Mb(6,"ion-input",19),f.Ub("ngModelChange",(function(e){return f.hc(i),n.$implicit.text=e})),f.Lb(),f.Lb(),f.Mb(7,"ion-item",7),f.Mb(8,"ion-input",20),f.Ub("ngModelChange",(function(e){return f.hc(i),n.$implicit.value=e})),f.Lb(),f.Lb(),f.Kb(9,"div",21),f.Lb()}if(2&e){var t=n.$implicit;f.zb(6),f.cc("ngModel",t.text),f.zb(2),f.cc("ngModel",t.value)}}function k(e,n){if(1&e){var i=f.Nb();f.Mb(0,"div",11),f.Mb(1,"ion-list"),f.Mb(2,"strong"),f.lc(3,"Titulo del campo"),f.Lb(),f.Kb(4,"br"),f.Mb(5,"ion-item",7),f.Mb(6,"ion-input",8),f.Ub("ngModelChange",(function(e){return f.hc(i),f.Wb().values.title=e})),f.Lb(),f.Lb(),f.Lb(),f.Mb(7,"strong"),f.lc(8,"Opciones"),f.Lb(),f.kc(9,L,10,2,"ion-list",12),f.Kb(10,"div",13),f.Mb(11,"ion-button",14),f.Ub("click",(function(){return f.hc(i),f.Wb().addOpt()})),f.lc(12,"Agregar Opci\xf3n"),f.Lb(),f.Lb()}if(2&e){var t=f.Wb();f.zb(6),f.cc("ngModel",t.values.title),f.zb(3),f.cc("ngForOf",t.values.opts)}}function y(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-list"),f.Mb(1,"ion-item",15),f.Mb(2,"ion-buttons",16),f.Mb(3,"ion-button",17),f.Ub("click",(function(){f.hc(i);var e=n.index;return f.Wb(2).deleteOpt(e)})),f.Kb(4,"ion-icon",18),f.Lb(),f.Lb(),f.Lb(),f.Mb(5,"ion-item",7),f.Mb(6,"ion-input",19),f.Ub("ngModelChange",(function(e){return f.hc(i),n.$implicit.text=e})),f.Lb(),f.Lb(),f.Mb(7,"ion-item",7),f.Mb(8,"ion-input",20),f.Ub("ngModelChange",(function(e){return f.hc(i),n.$implicit.value=e})),f.Lb(),f.Lb(),f.Kb(9,"div",21),f.Lb()}if(2&e){var t=n.$implicit;f.zb(6),f.cc("ngModel",t.text),f.zb(2),f.cc("ngModel",t.value)}}function C(e,n){if(1&e){var i=f.Nb();f.Mb(0,"div",11),f.Mb(1,"ion-list"),f.Mb(2,"strong"),f.lc(3,"Titulo del campo"),f.Lb(),f.Kb(4,"br"),f.Mb(5,"ion-item",7),f.Mb(6,"ion-input",8),f.Ub("ngModelChange",(function(e){return f.hc(i),f.Wb().values.title=e})),f.Lb(),f.Lb(),f.Lb(),f.Mb(7,"strong"),f.lc(8,"Opciones"),f.Lb(),f.kc(9,y,10,2,"ion-list",12),f.Kb(10,"div",13),f.Mb(11,"ion-button",14),f.Ub("click",(function(){return f.hc(i),f.Wb().addOpt()})),f.lc(12,"Agregar Opci\xf3n"),f.Lb(),f.Lb()}if(2&e){var t=f.Wb();f.zb(6),f.cc("ngModel",t.values.title),f.zb(3),f.cc("ngForOf",t.values.opts)}}function x(e,n){1&e&&(f.Mb(0,"strong"),f.lc(1,"Imagen Actual"),f.Lb())}function O(e,n){if(1&e&&(f.Mb(0,"ion-list"),f.Mb(1,"ion-item",13),f.Mb(2,"ion-label"),f.lc(3),f.Kb(4,"br"),f.Kb(5,"img",26),f.Lb(),f.Lb(),f.Lb()),2&e){var i=f.Wb(2);f.zb(3),f.nc("",i.values.name," "),f.zb(2),f.ec("src","http://localhost:3000/uploads/Entrenamientos/",i.values.src,"",f.ic)}}function z(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-list"),f.Kb(1,"ion-item-divider",27),f.Mb(2,"ion-item",13),f.Mb(3,"ion-label"),f.Mb(4,"strong"),f.lc(5,"Actualizar imagen por:"),f.Lb(),f.Kb(6,"br"),f.lc(7),f.Lb(),f.Mb(8,"ion-buttons",16),f.Mb(9,"ion-button",17),f.Ub("click",(function(){return f.hc(i),f.Wb(2).deletedFile()})),f.Kb(10,"ion-icon",18),f.Lb(),f.Lb(),f.Lb(),f.Lb()}if(2&e){var t=n.$implicit;f.zb(7),f.oc(" ",t.data.name," - ",t.data.type," ")}}function w(e,n){if(1&e){var i=f.Nb();f.Mb(0,"div"),f.Mb(1,"div",22),f.Mb(2,"ion-list"),f.Mb(3,"strong"),f.lc(4,"Titulo de la imagen"),f.Lb(),f.Kb(5,"br"),f.Mb(6,"ion-item",7),f.Mb(7,"ion-input",8),f.Ub("ngModelChange",(function(e){return f.hc(i),f.Wb().values.title=e})),f.Lb(),f.Lb(),f.Lb(),f.kc(8,x,2,0,"strong",2),f.kc(9,O,6,2,"ion-list",2),f.kc(10,z,11,2,"ion-list",12),f.Mb(11,"div"),f.Mb(12,"ion-button",23),f.Ub("click",(function(){return f.hc(i),f.Wb().onClick()})),f.Mb(13,"div"),f.lc(14,"Subir Imagen"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Kb(15,"input",24,25),f.Lb()}if(2&e){var t=f.Wb();f.zb(7),f.cc("ngModel",t.values.title),f.zb(1),f.cc("ngIf",""!==t.values.src),f.zb(1),f.cc("ngIf",""!==t.values.src),f.zb(1),f.cc("ngForOf",t.files)}}function N(e,n){1&e&&(f.Mb(0,"strong"),f.lc(1,"Video Actual"),f.Lb())}function S(e,n){if(1&e&&(f.Mb(0,"ion-list"),f.Mb(1,"ion-item",13),f.Mb(2,"ion-label"),f.lc(3),f.Kb(4,"br"),f.Kb(5,"video",29),f.Lb(),f.Lb(),f.Lb()),2&e){var i=f.Wb(2);f.zb(3),f.nc("",i.values.name," "),f.zb(2),f.ec("src","http://localhost:3000/uploads/Entrenamientos/",i.values.src,"",f.ic)}}function W(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-list"),f.Kb(1,"ion-item-divider",27),f.Mb(2,"ion-item",13),f.Mb(3,"ion-label"),f.Mb(4,"strong"),f.lc(5,"Actualizar Video por:"),f.Lb(),f.Kb(6,"br"),f.lc(7),f.Lb(),f.Mb(8,"ion-buttons",16),f.Mb(9,"ion-button",17),f.Ub("click",(function(){return f.hc(i),f.Wb(2).deletedFile()})),f.Kb(10,"ion-icon",18),f.Lb(),f.Lb(),f.Lb(),f.Lb()}if(2&e){var t=n.$implicit;f.zb(7),f.oc(" ",t.data.name," - ",t.data.type," ")}}function J(e,n){if(1&e){var i=f.Nb();f.Mb(0,"div"),f.Mb(1,"div",22),f.Mb(2,"ion-list"),f.Mb(3,"strong"),f.lc(4,"Titulo del Video"),f.Lb(),f.Kb(5,"br"),f.Mb(6,"ion-item",7),f.Mb(7,"ion-input",8),f.Ub("ngModelChange",(function(e){return f.hc(i),f.Wb().values.title=e})),f.Lb(),f.Lb(),f.Lb(),f.kc(8,N,2,0,"strong",2),f.kc(9,S,6,2,"ion-list",2),f.kc(10,W,11,2,"ion-list",12),f.Mb(11,"div"),f.Mb(12,"ion-button",23),f.Ub("click",(function(){return f.hc(i),f.Wb().onClick()})),f.Mb(13,"div"),f.lc(14,"Subir Video"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Kb(15,"input",28,25),f.Lb()}if(2&e){var t=f.Wb();f.zb(7),f.cc("ngModel",t.values.title),f.zb(1),f.cc("ngIf",""!==t.values.src),f.zb(1),f.cc("ngIf",""!==t.values.src),f.zb(1),f.cc("ngForOf",t.files)}}function I(e,n){1&e&&(f.Mb(0,"strong"),f.lc(1,"Video Actual"),f.Lb())}function D(e,n){if(1&e&&(f.Mb(0,"ion-list"),f.Mb(1,"ion-item",13),f.Mb(2,"ion-label"),f.lc(3),f.Kb(4,"br"),f.Mb(5,"ion-chip"),f.lc(6),f.Lb(),f.Lb(),f.Lb(),f.Lb()),2&e){var i=f.Wb(2);f.zb(3),f.nc("",i.values.name," "),f.zb(3),f.mc(i.values.src)}}function U(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-list"),f.Kb(1,"ion-item-divider",27),f.Mb(2,"ion-item",13),f.Mb(3,"ion-label"),f.Mb(4,"strong"),f.lc(5,"Actualizar Archivo por:"),f.Lb(),f.Kb(6,"br"),f.lc(7),f.Lb(),f.Mb(8,"ion-buttons",16),f.Mb(9,"ion-button",17),f.Ub("click",(function(){return f.hc(i),f.Wb(2).deletedFile()})),f.Kb(10,"ion-icon",18),f.Lb(),f.Lb(),f.Lb(),f.Lb()}if(2&e){var t=n.$implicit;f.zb(7),f.oc(" ",t.data.name," - ",t.data.type," ")}}function K(e,n){if(1&e){var i=f.Nb();f.Mb(0,"div"),f.Mb(1,"div",22),f.Mb(2,"ion-list"),f.Mb(3,"strong"),f.lc(4,"Titulo del Video"),f.Lb(),f.Kb(5,"br"),f.Mb(6,"ion-item",7),f.Mb(7,"ion-input",8),f.Ub("ngModelChange",(function(e){return f.hc(i),f.Wb().values.title=e})),f.Lb(),f.Lb(),f.Lb(),f.kc(8,I,2,0,"strong",2),f.kc(9,D,7,2,"ion-list",2),f.kc(10,U,11,2,"ion-list",12),f.Mb(11,"div"),f.Mb(12,"ion-button",23),f.Ub("click",(function(){return f.hc(i),f.Wb().onClick()})),f.Mb(13,"div"),f.lc(14,"Subir Archivo"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Kb(15,"input",30,25),f.Lb()}if(2&e){var t=f.Wb();f.zb(7),f.cc("ngModel",t.values.title),f.zb(1),f.cc("ngIf",""!==t.values.src),f.zb(1),f.cc("ngIf",""!==t.values.src),f.zb(1),f.cc("ngForOf",t.files)}}var P,E=((P=function(){function e(n,i,t,o){_classCallCheck(this,e),this.modalCtrl=n,this.storage=i,this.apiEntrena=t,this.toasCtrl=o,this.titleInput="",this.values={},this.files=[],this.filesRendering=[]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.titleInput=this.data.type,this.values=this.data.values,console.log(this.values)}},{key:"addOpt",value:function(){this.values.opts.push({text:"",value:"",checked:!1})}},{key:"deleteOpt",value:function(e){this.values.opts.splice(e,1)}},{key:"uploadFile",value:function(e){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,t,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.storage.getLogin();case 2:(i=n.sent)&&((t=new FormData).append("file",e.data),e.inProgress=!0,console.log(i),this.apiEntrena.upload(t,i[0].token).pipe(Object(d.a)((function(n){switch(console.log("Holaa"),n.type){case u.c.UploadProgress:e.progress=Math.round(1*n.loaded/n.total);break;case u.c.Response:return n}})),Object(p.a)((function(n){return e.inProgress=!1,Object(g.a)("".concat(e.data.name," upload failed."))}))).subscribe((function(n){"object"==typeof n&&(console.log(n.body," Respuesta"),"ok"===n.body.status?(o.values.src=n.body.response,o.values.mime=e.data.type,o.values.name=e.data.name,o.saveJson()):o.toasCtrl.newCreatedToast("Upload failed",!1))})));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"uploadFiles",value:function(){var e=this;this.fileUpload.nativeElement.value="",this.files.forEach((function(n){e.uploadFile(n)}))}},{key:"onClick",value:function(){var e=this,n=this.fileUpload.nativeElement;n.onchange=function(){for(var i=0;i<n.files.length;i++){var t=n.files[i];console.log(t,t.name),e.files.push({data:t,inProgress:!1,progress:0})}},n.click()}},{key:"deletedFile",value:function(){this.files=[]}},{key:"save",value:function(){"image"===this.data.type||"video"===this.data.type||"file"===this.data.type?this.uploadFiles():this.saveJson()}},{key:"saveJson",value:function(){this.modalCtrl.dismiss({reload:!0,info:{values:this.values,page:this.idpage}})}},{key:"close",value:function(){this.modalCtrl.dismiss({})}}]),e}()).\u0275fac=function(e){return new(e||P)(f.Jb(a.Y),f.Jb(s.a),f.Jb(l.a),f.Jb(b.a))},P.\u0275cmp=f.Db({type:P,selectors:[["app-designer"]],viewQuery:function(e,n){var i;1&e&&f.pc(v,!0),2&e&&f.gc(i=f.Vb())&&(n.fileUpload=i.first)},inputs:{data:"data",idpage:"idpage"},decls:21,vars:7,consts:[["color","users"],[1,"ion-padding"],[4,"ngIf"],["class","input",4,"ngIf"],["size","6"],["mode","ios","expand","block","color","light",3,"click"],["mode","ios","expand","block","color","primary",3,"click"],["lines","none",1,"marginBottom","border"],["type","text","placeholder","Titulo del campo",3,"ngModel","ngModelChange"],["lines","none","class","marginBottom border",4,"ngIf"],["type","text","placeholder","Contenido del campo",3,"ngModel","ngModelChange"],[1,"input"],[4,"ngFor","ngForOf"],[1,"marginBottom"],["color","secondary","mode","ios",3,"click"],["lines","none",1,""],["slot","end"],[3,"click"],["name","trash","color","danger","slot","icon-only"],["type","text","placeholder","Text",3,"ngModel","ngModelChange"],["type","text","placeholder","Value",3,"ngModel","ngModelChange"],[1,"border"],[2,"margin-top","10px"],["expand","block","mode","ios","color","tertiary",1,"myButton",3,"click"],["type","file","id","fileUpload","name","file","accept","image/*",2,"display","none"],["fileUpload",""],["alt","",3,"src"],["color","warning"],["type","file","id","fileUpload","name","file","accept","video/*",2,"display","none"],["controls","",3,"src"],["type","file","id","fileUpload","name","file",2,"display","none"]],template:function(e,n){1&e&&(f.Mb(0,"ion-header"),f.Mb(1,"ion-toolbar",0),f.Mb(2,"ion-title"),f.lc(3),f.Lb(),f.Lb(),f.Lb(),f.Mb(4,"ion-content",1),f.kc(5,M,11,3,"ion-list",2),f.kc(6,k,13,2,"div",3),f.kc(7,C,13,2,"div",3),f.kc(8,w,17,4,"div",2),f.kc(9,J,17,4,"div",2),f.kc(10,K,17,4,"div",2),f.Lb(),f.Mb(11,"ion-footer"),f.Mb(12,"ion-toolbar"),f.Mb(13,"ion-grid"),f.Mb(14,"ion-row"),f.Mb(15,"ion-col",4),f.Mb(16,"ion-button",5),f.Ub("click",(function(){return n.close()})),f.lc(17,"cancelar"),f.Lb(),f.Lb(),f.Mb(18,"ion-col",4),f.Mb(19,"ion-button",6),f.Ub("click",(function(){return n.save()})),f.lc(20,"Guardar"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb()),2&e&&(f.zb(3),f.mc(n.titleInput),f.zb(2),f.cc("ngIf","textline"===n.data.type||"textarea"===n.data.type),f.zb(1),f.cc("ngIf","radio"===n.data.type),f.zb(1),f.cc("ngIf","checkbox"===n.data.type),f.zb(1),f.cc("ngIf","image"===n.data.type),f.zb(1),f.cc("ngIf","video"===n.data.type),f.zb(1),f.cc("ngIf","file"===n.data.type))},directives:[a.s,a.T,a.S,a.l,t.i,a.q,a.r,a.J,a.k,a.g,a.B,a.v,a.u,a.fb,o.c,o.d,a.R,t.h,a.h,a.t,a.A,a.w,a.j],styles:[".marginBottom[_ngcontent-%COMP%]{margin-bottom:10px}.border[_ngcontent-%COMP%]{border:1px solid rgba(3,3,3,.1)}video[_ngcontent-%COMP%]{max-width:100%;width:auto}"]}),P),A=i("lNB8"),_=["slide"];function R(e,n){if(1&e&&(f.Mb(0,"ion-label"),f.lc(1),f.Lb()),2&e){var i=f.Wb().$implicit;f.zb(1),f.mc(i.type)}}function T(e,n){if(1&e&&(f.Mb(0,"div",40),f.Mb(1,"strong",41),f.lc(2),f.Lb(),f.Kb(3,"br"),f.Kb(4,"ion-input",42),f.Lb()),2&e){var i=f.Wb().$implicit;f.zb(2),f.mc(i.values.title),f.zb(2),f.cc("value",i.values.value)}}function $(e,n){if(1&e&&(f.Mb(0,"div",40),f.Mb(1,"strong",41),f.lc(2),f.Lb(),f.Kb(3,"br"),f.Kb(4,"ion-textarea",42),f.Lb()),2&e){var i=f.Wb().$implicit;f.zb(2),f.mc(i.values.title),f.zb(2),f.cc("value",i.values.value)}}function F(e,n){if(1&e&&(f.Mb(0,"div"),f.Mb(1,"strong"),f.lc(2),f.Lb(),f.lc(3),f.Lb()),2&e){var i=n.$implicit,t=n.index;f.zb(2),f.nc(" ",t+1,""),f.zb(1),f.nc(" ",i.text," ")}}function j(e,n){if(1&e&&(f.Mb(0,"div",40),f.Mb(1,"strong",41),f.lc(2),f.Lb(),f.Kb(3,"br"),f.kc(4,F,4,2,"div",14),f.Lb()),2&e){var i=f.Wb().$implicit;f.zb(2),f.mc(i.values.title),f.zb(2),f.cc("ngForOf",i.values.opts)}}function B(e,n){if(1&e&&(f.Mb(0,"div",40),f.Mb(1,"strong",41),f.lc(2),f.Lb(),f.Kb(3,"br"),f.Kb(4,"img",43),f.Lb()),2&e){var i=f.Wb().$implicit;f.zb(2),f.mc(i.values.title),f.zb(2),f.ec("src","https://www.vtentrena.com/app/uploads/Entrenamientos/",i.values.src,"",f.ic)}}function V(e,n){if(1&e&&(f.Mb(0,"div",40),f.Mb(1,"strong",41),f.lc(2),f.Lb(),f.Kb(3,"br"),f.Mb(4,"ion-chip",44),f.lc(5),f.Lb(),f.Lb()),2&e){var i=f.Wb().$implicit;f.zb(2),f.mc(i.values.title),f.zb(3),f.nc(" ",i.values.src,"")}}function q(e,n){if(1&e&&(f.Mb(0,"div",40),f.Mb(1,"strong",41),f.lc(2),f.Lb(),f.Kb(3,"br"),f.Kb(4,"video",43),f.Lb()),2&e){var i=f.Wb().$implicit;f.zb(2),f.mc(i.values.title),f.zb(2),f.ec("src","https://www.vtentrena.com/app/uploads/Entrenamientos/",i.values.src,"",f.ic)}}function G(e,n){if(1&e){var i=f.Nb();f.Mb(0,"div"),f.Mb(1,"div",36),f.Kb(2,"ion-reorder"),f.Mb(3,"ion-buttons"),f.Mb(4,"ion-button",37),f.Ub("click",(function(){f.hc(i);var e=n.index,t=f.Wb().index;return f.Wb(2).deleteChild(t,e)})),f.Kb(5,"ion-icon",38),f.Lb(),f.Lb(),f.Lb(),f.Mb(6,"ion-item",37),f.Ub("click",(function(){f.hc(i);var e=n.$implicit,t=f.Wb().$implicit;return f.Wb(2).modalChangeInput(e,t.id)})),f.kc(7,R,2,1,"ion-label",7),f.kc(8,T,5,2,"div",39),f.kc(9,$,5,2,"div",39),f.kc(10,j,5,2,"div",39),f.kc(11,B,5,2,"div",39),f.kc(12,V,6,2,"div",39),f.kc(13,q,5,2,"div",39),f.Lb(),f.Lb()}if(2&e){var t=n.$implicit,o=f.Wb(3);f.zb(5),f.cc("color",o.color),f.zb(2),f.cc("ngIf",""===t.values.title),f.zb(1),f.cc("ngIf",""!==t.values.title&&"textline"===t.type),f.zb(1),f.cc("ngIf",""!==t.values.title&&"textarea"===t.type),f.zb(1),f.cc("ngIf",""!==t.values.title&&("radio"===t.type||"checkbox"===t.type)),f.zb(1),f.cc("ngIf",""!==t.values.title&&"image"===t.type),f.zb(1),f.cc("ngIf",""!==t.values.title&&"file"===t.type),f.zb(1),f.cc("ngIf",""!==t.values.title&&"video"===t.type)}}function H(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-slide"),f.Mb(1,"div",15),f.Mb(2,"ion-grid"),f.Mb(3,"ion-row"),f.Mb(4,"ion-col",16),f.Mb(5,"ion-item",17),f.Mb(6,"ion-button",18),f.Ub("click",(function(){f.hc(i);var e=n.index;return f.Wb(2).deletePage(e)})),f.lc(7,"Eliminar P\xe1gina"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Mb(8,"ion-row"),f.Mb(9,"ion-col",19),f.Mb(10,"ion-input",20),f.Ub("ionChange",(function(e){f.hc(i);var t=n.$implicit;return f.Wb(2).titlePage(e,t.id)}))("ionBlur",(function(){return f.hc(i),f.Wb(2).titlesave()})),f.Lb(),f.Lb(),f.Mb(11,"ion-col",19),f.Mb(12,"ion-select",21),f.Ub("ionChange",(function(e){f.hc(i);var t=n.$implicit;return f.Wb(2).changeTypePage(e,t.id)})),f.Mb(13,"ion-select-option",22),f.lc(14,"Entrenamiento"),f.Lb(),f.Mb(15,"ion-select-option",23),f.lc(16,"Quiz"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Mb(17,"div",24),f.Mb(18,"ion-list"),f.Mb(19,"ion-item-divider",25),f.Mb(20,"ion-select",26),f.Ub("ionChange",(function(e){f.hc(i);var t=n.$implicit;return f.Wb(2).createInputPage(e,t.id)})),f.Mb(21,"ion-select-option",27),f.lc(22,"Campo de Texto"),f.Lb(),f.Mb(23,"ion-select-option",28),f.lc(24,"Campo de texto largo"),f.Lb(),f.Mb(25,"ion-select-option",29),f.lc(26,"Seleccion Unica"),f.Lb(),f.Mb(27,"ion-select-option",30),f.lc(28,"Seleccion multiple"),f.Lb(),f.Mb(29,"ion-select-option",31),f.lc(30,"Imagen"),f.Lb(),f.Mb(31,"ion-select-option",32),f.lc(32,"Video"),f.Lb(),f.Mb(33,"ion-select-option",33),f.lc(34,"Archivo"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Mb(35,"div",34),f.Mb(36,"ion-list"),f.Mb(37,"ion-reorder-group",35),f.Ub("ionItemReorder",(function(e){f.hc(i);var t=n.$implicit;return f.Wb(2).changeOrder(e,t.id)})),f.kc(38,G,14,8,"div",14),f.Lb(),f.Lb(),f.Lb(),f.Lb()}if(2&e){var t=n.$implicit;f.zb(10),f.cc("value",t.name),f.zb(2),f.cc("value",t.type),f.zb(26),f.cc("ngForOf",t.Chilndren)}}function Q(e,n){if(1&e&&(f.Mb(0,"ion-slides",null,13),f.kc(2,H,39,3,"ion-slide",14),f.Lb()),2&e){var i=f.Wb();f.zb(2),f.cc("ngForOf",i.JSONDesigner.pages)}}function X(e,n){1&e&&(f.Mb(0,"ion-item",45),f.Kb(1,"ion-spinner",46),f.Mb(2,"ion-label"),f.lc(3,"Guardando Cambios..."),f.Lb(),f.Lb())}function Y(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-button",47),f.Ub("click",(function(){return f.hc(i),f.Wb().exit()})),f.lc(1,"Salir"),f.Lb()}if(2&e){var t=f.Wb();f.cc("color",t.color)}}function Z(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-button",47),f.Ub("click",(function(){return f.hc(i),f.Wb().prev()})),f.Kb(1,"ion-icon",48),f.Lb()}if(2&e){var t=f.Wb();f.cc("color",t.color)}}function ee(e,n){if(1&e){var i=f.Nb();f.Mb(0,"ion-button",47),f.Ub("click",(function(){return f.hc(i),f.Wb().next()})),f.Kb(1,"ion-icon",49),f.Lb()}if(2&e){var t=f.Wb();f.cc("color",t.color)}}var ne,ie,te,oe=[{path:"",component:(ne=function(){function e(n,i,t,o,a,c,r,l){var b=this;_classCallCheck(this,e),this.apiEntrena=n,this.toasCtrl=i,this.storage=t,this.ActiveRoute=o,this.modalCtrl=a,this.router=c,this.dataCompany=r,this.alert=l,this.JSONDesigner={save:!1,pages:[],count:0,prom:0,tot:0,apro:0},this.load=!1,this.nameDesing="",this.viewInit="1",this.save=!1,this.pagesCount=0,this.pageActive=1,this.color="",this.dataCompany.$color.subscribe((function(e){b.color=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.loadDesign()}},{key:"loadDesign",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.getLogin();case 2:(n=e.sent)&&this.apiEntrena.readDesigner(n[0].token,this.ActiveRoute.snapshot.paramMap.get("id")).subscribe((function(e){console.log(e,"MI DATICA"),"ok"===e.status?(i.JSONDesigner=e.response.JSONEntrena,i.nameDesing=e.response.name,i.pagesCount=i.JSONDesigner.pages.length,i.JSONDesigner.pages.filter((function(e){return"quiz"===e.type})).forEach((function(e){e.Chilndren.forEach((function(e){"radio"!==e.type&&"checkbox"!==e.type||(i.JSONDesigner.count=i.JSONDesigner.count+1)}))})),i.load=!0):i.toasCtrl.newCreatedToast("Could not read design, please try again later",!1)}),(function(e){i.toasCtrl.newCreatedToast("Could not read design, please try again later",!1)}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"deletePage",value:function(e){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alert.create({header:"\xbfQuieres eliminar esta p\xe1gina?",message:"Se borrar\xe1n todos los campos de la p\xe1gina de forma pernamente",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:function(){t.JSONDesigner.pages.splice(e,1),t.JSONDesigner.pages.filter((function(e){return"quiz"===e.type})).forEach((function(e){e.Chilndren.forEach((function(e){"radio"!==e.type&&"checkbox"!==e.type||(t.JSONDesigner.count=t.JSONDesigner.count+1)}))})),t.autoSave(),t.pagesCount=t.JSONDesigner.pages.length}}]});case 2:return i=n.sent,n.next=5,i.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"deleteChild",value:function(e,n){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var t,o=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alert.create({header:"\xbfQuieres eliminar este campo?",message:"Se borrar\xe1 de forma pernamente",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:function(){o.JSONDesigner.pages[e].Chilndren.splice(n,1),o.JSONDesigner.pages.filter((function(e){return"quiz"===e.type})).forEach((function(e){e.Chilndren.forEach((function(e){"radio"!==e.type&&"checkbox"!==e.type||(o.JSONDesigner.count=o.JSONDesigner.count+1)}))})),o.autoSave(),o.pagesCount=o.JSONDesigner.pages.length}}]});case 2:return t=i.sent,i.next=5,t.present();case 5:case"end":return i.stop()}}),i,this)})))}},{key:"prev",value:function(){var e=this;this.slide.slidePrev(300).then((function(){e.pageActive=e.pageActive-1}))}},{key:"next",value:function(){var e=this;this.slide.slideNext(300).then((function(){e.pageActive=e.pageActive+1}))}},{key:"autoSave",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.JSONDesigner),this.save=!0,e.next=3,this.storage.getLogin();case 3:(n=e.sent)&&this.apiEntrena.updateDesigner(n[0].token,{_id:this.ActiveRoute.snapshot.paramMap.get("id"),name:this.nameDesing,JSONEntrena:this.JSONDesigner}).subscribe((function(e){console.log(e),"ok"===e.status?(i.save=!1,i.JSONDesigner=e.response.JSONEntrena,i.nameDesing=e.response.name):(i.save=!1,i.toasCtrl.newCreatedToast("Could not update design, please try again later",!1))}),(function(e){i.save=!1,i.toasCtrl.newCreatedToast("Could not update design, please try again later",!1)}));case 5:case"end":return e.stop()}}),e,this)})))}},{key:"changeTitleDesign",value:function(e){this.nameDesing=e.detail.value}},{key:"changePromDesign",value:function(e){this.JSONDesigner.apro=parseFloat(e.detail.value)}},{key:"newPages",value:function(){this.JSONDesigner.pages.push({id:this.JSONDesigner.pages.length+1,name:"",type:"",Chilndren:[]}),this.autoSave(),this.pagesCount=this.JSONDesigner.pages.length}},{key:"titlePage",value:function(e,n){this.JSONDesigner.pages=this.JSONDesigner.pages.map((function(i){return i.id===n&&(i.name=e.detail.value),i}))}},{key:"titlesave",value:function(){this.autoSave()}},{key:"changeTypePage",value:function(e,n){this.JSONDesigner.pages=this.JSONDesigner.pages.map((function(i){return i.id===n&&(i.type=e.detail.value),i})),this.autoSave()}},{key:"createInputPage",value:function(e,n){this.JSONDesigner.pages=this.JSONDesigner.pages.map((function(i){if(i.id===n){var t={};"textline"===e.detail.value?t={title:"",value:"",answer:"",requerid:!1}:"textarea"===e.detail.value?t={title:"",value:"",answer:"",requerid:!1}:"radio"===e.detail.value||"checkbox"===e.detail.value?t={title:"",opts:[],answer:{sum:0,value:0,text:"",op:[]},requerid:!1}:"image"!==e.detail.value&&"file"!==e.detail.value&&"video"!==e.detail.value||(t={title:"",src:"",mime:"",name:""}),i.Chilndren.push({id:i.Chilndren.length+1,type:e.detail.value,values:t})}return i})),this.autoSave()}},{key:"modalChangeInput",value:function(e,n){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var t,o;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("Bien"),i.next=3,this.modalCtrl.create({component:E,componentProps:{data:e,idpage:n},keyboardClose:!0});case 3:return t=i.sent,i.next=6,t.present();case 6:return i.next=8,t.onWillDismiss();case 8:(o=i.sent)&&o.data&&o.data.reload&&(this.JSONDesigner.pages=this.JSONDesigner.pages.map((function(e){return e.id===o.data.info.page&&e.Chilndren.map((function(e){return e.id===o.data.info.values.id&&(e=o.data.info.values),e})),e})),this.autoSave());case 10:case"end":return i.stop()}}),i,this)})))}},{key:"changeOrder",value:function(e,n){console.log(e,n),this.JSONDesigner.pages=this.JSONDesigner.pages.map((function(i){if(i.id===n){var t=i.Chilndren.splice(e.detail.from,1)[0];console.log(t),i.Chilndren.splice(e.detail.to,0,t)}return i})),e.detail.complete(),this.autoSave()}},{key:"exit",value:function(){this.router.navigate(["/designer-list"])}}]),e}(),ne.\u0275fac=function(e){return new(e||ne)(f.Jb(l.a),f.Jb(b.a),f.Jb(s.a),f.Jb(c.a),f.Jb(a.Y),f.Jb(c.f),f.Jb(A.a),f.Jb(a.a))},ne.\u0275cmp=f.Db({type:ne,selectors:[["app-designer"]],viewQuery:function(e,n){var i;1&e&&f.pc(_,!0),2&e&&f.gc(i=f.Vb())&&(n.slide=i.first)},decls:22,vars:11,consts:[[3,"color"],["defaultHref","/designer-list","icon","chevron-back-outline","slot","start"],["type","text","placeholder","ESCRIBA AQUI EL NOMBRE DEL ENTRENAMIENTO",3,"value","ionChange","ionBlur"],["slot","end","type","number","placeholder","PUNTAJE MINIMO DE APROBACION",3,"value","ionChange","ionBlur"],["fullscreen","true"],[1,"btnPages"],["color","medium","mode","ios",3,"click"],[4,"ngIf"],[1,"ion-no-border"],["lines","none","slot","end",4,"ngIf"],["size","4"],["mode","ios","expand","block",3,"color","click",4,"ngIf"],["size","4",1,"ion-text-center","centrado"],["slide",""],[4,"ngFor","ngForOf"],[1,"page"],["size","12"],["lines","none",1,"sinfondo"],["slot","end","color","medium","mode","ios",3,"click"],["size","6"],["type","text","placeholder","Titulo de la p\xe1gina",3,"value","ionChange","ionBlur"],["placeholder","Seleccione el tipo de p\xe1gina",1,"green",3,"value","ionChange"],["value","entrena"],["value","quiz"],[1,"barra"],["lines","none","color","light"],["placeholder","Seleccione el campo a crear",3,"ionChange"],["value","textline"],["value","textarea"],["value","radio"],["value","checkbox"],["value","image"],["value","video"],["value","file"],[1,"childrens"],["disabled","false",3,"ionItemReorder"],[1,"flex"],[3,"click"],["name","trash","slot","icon-only",3,"color"],["class","ion-text-wrap fullWidth",4,"ngIf"],[1,"ion-text-wrap","fullWidth"],[1,"marginBottom"],[1,"border",3,"value"],[1,"widthFile","ion-padding",3,"src"],["color","warning",1,"widthFile","ion-padding"],["lines","none","slot","end"],["name","crescent","slot","start"],["mode","ios","expand","block",3,"color","click"],["name","chevron-back"],["name","chevron-forward"]],template:function(e,n){1&e&&(f.Mb(0,"ion-header"),f.Mb(1,"ion-toolbar",0),f.Kb(2,"ion-back-button",1),f.Mb(3,"ion-input",2),f.Ub("ionChange",(function(e){return n.changeTitleDesign(e)}))("ionBlur",(function(){return n.autoSave()})),f.Lb(),f.Mb(4,"ion-input",3),f.Ub("ionChange",(function(e){return n.changePromDesign(e)}))("ionBlur",(function(){return n.autoSave()})),f.Lb(),f.Lb(),f.Lb(),f.Mb(5,"ion-content",4),f.Mb(6,"div",5),f.Mb(7,"ion-button",6),f.Ub("click",(function(){return n.newPages()})),f.lc(8,"Nueva P\xe1gina"),f.Lb(),f.Lb(),f.kc(9,Q,3,1,"ion-slides",7),f.Lb(),f.Mb(10,"ion-footer",8),f.Mb(11,"ion-toolbar",0),f.kc(12,X,4,0,"ion-item",9),f.Mb(13,"ion-grid"),f.Mb(14,"ion-row"),f.Mb(15,"ion-col",10),f.kc(16,Y,2,1,"ion-button",11),f.kc(17,Z,2,1,"ion-button",11),f.Lb(),f.Mb(18,"ion-col",12),f.lc(19),f.Lb(),f.Mb(20,"ion-col",10),f.kc(21,ee,2,1,"ion-button",11),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb()),2&e&&(f.zb(1),f.cc("color",n.color),f.zb(2),f.cc("value",n.nameDesing),f.zb(1),f.cc("value",n.JSONDesigner.apro),f.zb(5),f.cc("ngIf",n.load),f.zb(2),f.cc("color",n.color),f.zb(1),f.cc("ngIf",n.save),f.zb(4),f.cc("ngIf",1===n.pageActive),f.zb(1),f.cc("ngIf",n.pageActive>1),f.zb(2),f.oc(" ",n.pageActive," / ",n.pagesCount,""),f.zb(2),f.cc("ngIf",n.pageActive<n.pagesCount))},directives:[a.s,a.T,a.d,a.e,a.u,a.fb,a.ab,a.l,a.g,t.i,a.q,a.r,a.J,a.k,a.O,t.h,a.N,a.v,a.L,a.eb,a.M,a.B,a.w,a.H,a.G,a.h,a.t,a.A,a.R,a.j,a.P],styles:["ion-slide[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:15px}ion-item[_ngcontent-%COMP%]:hover{--background:var(--ion-color-light);cursor:pointer}ion-slide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}.green[_ngcontent-%COMP%]{background:#fff1c9!important}.fullWidth[_ngcontent-%COMP%]{width:100%}.widthFile[_ngcontent-%COMP%]{width:auto;max-width:80%}.centrado[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center}.centrado[_ngcontent-%COMP%], .flex[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.flex[_ngcontent-%COMP%]{-webkit-box-pack:justify;justify-content:space-between}"]}),ne)}],ae=((ie=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:ie}),ie.\u0275inj=f.Gb({factory:function(e){return new(e||ie)},imports:[[c.h.forChild(oe)],c.h]}),ie),ce=[{path:"",component:E}],re=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=f.Hb({type:e}),e.\u0275inj=f.Gb({factory:function(n){return new(n||e)},imports:[[c.h.forChild(ce)],c.h]}),e}(),le=((te=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:te}),te.\u0275inj=f.Gb({factory:function(e){return new(e||te)},imports:[[t.b,o.a,a.U,re]]}),te);i.d(n,"DesignerPageModule",(function(){return se}));var be,se=((be=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:be}),be.\u0275inj=f.Gb({factory:function(e){return new(e||be)},imports:[[t.b,o.a,a.U,ae,le]]}),be)}}]);