(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{aEqK:function(e,t,o){"use strict";o.r(t);var n=o("ofXK"),i=o("3Pt+"),a=o("TEn/"),s=o("tyNb"),l=o("mrSG"),c=o("tk/3"),r=o("LRne"),b=o("lJxs"),p=o("JIr8"),m=o("NIW7"),h=o("lNB8"),d=o("VOof"),g=o("w9U0"),u=o("cxbk"),f=o("fXoL");const M=["fileUpload"];function y(e,t){if(1&e&&f.Kb(0,"img",17),2&e){const e=f.Wb();f.cc("src",e.logo,f.ic)}}function L(e,t){if(1&e){const e=f.Nb();f.Mb(0,"ion-list"),f.Kb(1,"ion-item-divider",18),f.Mb(2,"ion-item",9),f.Mb(3,"ion-label"),f.Mb(4,"strong"),f.lc(5,"Actualizar imagen por:"),f.Lb(),f.Kb(6,"br"),f.lc(7),f.Lb(),f.Mb(8,"ion-buttons",19),f.Mb(9,"ion-button",20),f.Ub("click",(function(){return f.hc(e),f.Wb().deletedFile()})),f.Kb(10,"ion-icon",21),f.Lb(),f.Lb(),f.Lb(),f.Lb()}if(2&e){const e=t.$implicit;f.zb(7),f.oc(" ",e.data.name," - ",e.data.type," ")}}function v(e,t){if(1&e){const e=f.Nb();f.Mb(0,"ion-button",22),f.Ub("click",(function(){return f.hc(e),f.Wb().onClick()})),f.Mb(1,"div"),f.lc(2,"Cargar Imagen"),f.Lb(),f.Lb()}}function C(e,t){if(1&e){const e=f.Nb();f.Mb(0,"ion-button",23),f.Ub("click",(function(){return f.hc(e),f.Wb().uploadFiles()})),f.Mb(1,"div"),f.lc(2,"Actualizar Foto Empresa"),f.Lb(),f.Lb()}}const k=[{path:"",component:(()=>{class e{constructor(e,t,o,n,i){this.modalCtrl=e,this.storage=t,this.apiEntrena=o,this.toasCtrl=n,this.dtacompany=i,this.files=[],this.filesRendering=[],this.values={src:"",mime:"",name:""},this.logo="",this.name="",this.theme="",this.dtacompany.$color.subscribe(e=>{this.theme=e})}ngOnInit(){}ionViewWillEnter(){this.loadDataMenu()}loadDataMenu(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.storage.getLogin();e&&this.apiEntrena.preferencesLoad({user:e[0].data._id},e[0].token).subscribe(e=>{console.log(e),"ok"===e.status?(this.logo=e.response.logo?"https://www.vtentrena.com/"+e.response.logo:"",this.name=e.response.nameCompany?e.response.nameCompany:"VTEntrena Application",this.theme=e.response.theme?e.response.theme:"light"):(this.logo="",this.name="VTEntrena Application",this.theme="light")},e=>{this.logo="",this.name="VTEntrena Application",this.theme="light"})}))}uploadFile(e){return Object(l.a)(this,void 0,void 0,(function*(){const t=yield this.storage.getLogin();if(t){const o=new FormData;o.append("file",e.data),e.inProgress=!0,console.log(t),this.apiEntrena.uploadPreference(o,t[0].token).pipe(Object(b.a)(t=>{switch(console.log("Holaa"),t.type){case c.c.UploadProgress:e.progress=Math.round(1*t.loaded/t.total);break;case c.c.Response:return t}}),Object(p.a)(t=>(e.inProgress=!1,Object(r.a)(`${e.data.name} upload failed.`)))).subscribe(e=>{"object"==typeof e&&(console.log(e.body," Respuesta"),"ok"===e.body.status?(this.logo=u.a.URL_NODE+"/"+e.body.response.logo,this.dtacompany.getDataCompany({logo:u.a.URL_NODE+"/uploads/Perfiles/"+e.body.response.logo,name:e.body.response.nameCompany?e.body.response.nameCompany:"VTEntrena Application"}),this.files=[]):this.toasCtrl.newCreatedToast("Upload failed",!1))})}}))}uploadFiles(){this.fileUpload.nativeElement.value="",this.files.forEach(e=>{this.uploadFile(e)})}onClick(){const e=this.fileUpload.nativeElement;e.onchange=()=>{for(let t=0;t<e.files.length;t++){const o=e.files[t];console.log(o,o.name),this.files.push({data:o,inProgress:!1,progress:0})}},e.click()}deletedFile(){this.files=[]}changeTheme(e){this.theme=e.detail.value}save(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.storage.getLogin();e&&this.apiEntrena.preferences({name:this.name,theme:this.theme},e[0].token).subscribe(e=>{console.log(e),"ok"===e.status?(this.toasCtrl.newCreatedToast("Datos Actualizados",!0),this.name=e.response.nameCompany?e.response.nameCompany:"VTEntrena Application",this.theme=e.response.theme?e.response.theme:"light",this.dtacompany.getDataCompany({changelogo:!0,logo:"https://www.vtentrena.com/"+e.response.logo,name:e.response.nameCompany?e.response.nameCompany:"VTEntrena Application"}),this.dtacompany.setColor(this.theme)):(this.toasCtrl.newCreatedToast("No se pudo actualizar la informaci\xf3n",!1),this.theme="light",this.name="VTEntrena Application")},e=>{this.toasCtrl.newCreatedToast("No se pudo actualizar la informaci\xf3n",!1),this.theme="light",this.name="VTEntrena Application"})}))}}return e.\u0275fac=function(t){return new(t||e)(f.Jb(a.Y),f.Jb(d.a),f.Jb(m.a),f.Jb(g.a),f.Jb(h.a))},e.\u0275cmp=f.Db({type:e,selectors:[["app-preferences"]],viewQuery:function(e,t){var o;1&e&&f.pc(M,!0),2&e&&f.gc(o=f.Vb())&&(t.fileUpload=o.first)},decls:44,vars:6,consts:[[3,"color"],["color","light"],[2,"margin-top","10px"],["class","img","alt","",3,"src",4,"ngIf"],[4,"ngFor","ngForOf"],["class","myButton","mode","ios","color","tertiary",3,"click",4,"ngIf"],["class","myButton","mode","ios","color","success",3,"click",4,"ngIf"],["type","file","id","fileUpload","name","file","accept","image/*","multiple","false",2,"display","none"],["fileUpload",""],[1,"marginBottom"],["type","text",3,"ngModel","ngModelChange"],["value","Rojo","okText","Aceptar","cancelText","Cancelar",3,"ionChange"],["value","danger"],["value","success"],["value","warning"],["value","primary"],["expand","block","mode","ios","color","light",1,"myButton",3,"click"],["alt","",1,"img",3,"src"],["color","warning"],["slot","end"],[3,"click"],["name","trash","color","danger","slot","icon-only"],["mode","ios","color","tertiary",1,"myButton",3,"click"],["mode","ios","color","success",1,"myButton",3,"click"]],template:function(e,t){1&e&&(f.Mb(0,"ion-header"),f.Mb(1,"ion-toolbar",0),f.Mb(2,"ion-title"),f.lc(3,"Preferencias"),f.Lb(),f.Lb(),f.Lb(),f.Mb(4,"ion-content"),f.Mb(5,"ion-item-divider",1),f.Mb(6,"ion-label"),f.Mb(7,"strong"),f.lc(8,"Foto de Empresa"),f.Lb(),f.Lb(),f.Lb(),f.Mb(9,"div"),f.Mb(10,"div",2),f.kc(11,y,1,1,"img",3),f.kc(12,L,11,2,"ion-list",4),f.Mb(13,"div"),f.kc(14,v,3,0,"ion-button",5),f.kc(15,C,3,0,"ion-button",6),f.Lb(),f.Lb(),f.Kb(16,"input",7,8),f.Lb(),f.Mb(18,"ion-list"),f.Mb(19,"ion-item-divider",1),f.Mb(20,"ion-label"),f.Mb(21,"strong"),f.lc(22,"Informaci\xf3n"),f.Lb(),f.Lb(),f.Lb(),f.Mb(23,"ion-item-divider",9),f.Mb(24,"ion-label"),f.Mb(25,"strong"),f.lc(26,"Nombre de Empresa"),f.Lb(),f.Lb(),f.Mb(27,"ion-input",10),f.Ub("ngModelChange",(function(e){return t.name=e})),f.Lb(),f.Lb(),f.Mb(28,"ion-item",9),f.Mb(29,"ion-label"),f.Mb(30,"strong"),f.lc(31,"Tema Color"),f.Lb(),f.Lb(),f.Mb(32,"ion-select",11),f.Ub("ionChange",(function(e){return t.changeTheme(e)})),f.Mb(33,"ion-select-option",12),f.lc(34,"Rojo"),f.Lb(),f.Mb(35,"ion-select-option",13),f.lc(36,"Verde"),f.Lb(),f.Mb(37,"ion-select-option",14),f.lc(38,"Amarillo"),f.Lb(),f.Mb(39,"ion-select-option",15),f.lc(40,"Azul"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Mb(41,"ion-button",16),f.Ub("click",(function(){return t.save()})),f.Mb(42,"div"),f.lc(43,"Guardar Cambios"),f.Lb(),f.Lb(),f.Lb()),2&e&&(f.zb(1),f.cc("color",t.theme),f.zb(10),f.cc("ngIf",""!==t.logo),f.zb(1),f.cc("ngForOf",t.files),f.zb(2),f.cc("ngIf",0===t.files.length),f.zb(1),f.cc("ngIf",t.files.length>0),f.zb(12),f.cc("ngModel",t.name))},directives:[a.s,a.T,a.S,a.l,a.w,a.A,n.i,n.h,a.B,a.u,a.fb,i.c,i.d,a.v,a.L,a.eb,a.M,a.g,a.h,a.t],styles:[".img[_ngcontent-%COMP%]{width:100%;max-width:500px;text-align:center;padding:10px}"]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=f.Hb({type:e}),e.\u0275inj=f.Gb({factory:function(t){return new(t||e)},imports:[[s.h.forChild(k)],s.h]}),e})();o.d(t,"PreferencesPageModule",(function(){return E}));let E=(()=>{class e{}return e.\u0275mod=f.Hb({type:e}),e.\u0275inj=f.Gb({factory:function(t){return new(t||e)},imports:[[n.b,i.a,a.U,w]]}),e})()}}]);