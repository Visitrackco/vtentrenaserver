(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"OG/g":function(t,o,e){"use strict";e.r(o);var n=e("ofXK"),s=e("3Pt+"),i=e("TEn/"),r=e("tyNb"),a=e("mrSG"),c=e("NIW7"),b=e("VOof"),l=e("w9U0"),g=e("fXoL");function d(t,o){if(1&t&&(g.Mb(0,"ion-item"),g.Mb(1,"ion-label"),g.Mb(2,"strong"),g.lc(3),g.Lb(),g.Kb(4,"br"),g.Mb(5,"div"),g.Mb(6,"strong"),g.lc(7,"Navigator: "),g.Lb(),g.lc(8),g.Lb(),g.Mb(9,"div"),g.Mb(10,"strong"),g.lc(11,"IP: "),g.Lb(),g.lc(12),g.Lb(),g.Kb(13,"br"),g.Mb(14,"div"),g.Mb(15,"strong"),g.lc(16,"Date Created: "),g.Lb(),g.lc(17),g.Lb(),g.Lb(),g.Lb()),2&t){const t=o.$implicit;g.Bb("yellow","SESSION ON"===t.action)("blue","SESSION OFF"===t.action)("green","CREATED ANSWER"===t.action)("orange","UPDATE ANSWER"===t.action),g.zb(3),g.nc("Event: ",t.action,""),g.zb(5),g.nc(" ",t.userInfo.navigator,""),g.zb(4),g.nc(" ",t.userInfo.ip,""),g.zb(5),g.mc(t.dateCreated)}}const u=[{path:"",component:(()=>{class t{constructor(t,o,e,n,s){this.activeRouter=t,this.apiEntrena=o,this.storage=e,this.toastCtrl=n,this.router=s,this.logs=[]}ngOnInit(){}ionViewWillEnter(){this.loadLogs()}loadLogs(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.storage.getLogin();t&&this.apiEntrena.readLogs(t[0].token,this.activeRouter.snapshot.paramMap.get("id")).subscribe(t=>{"ok"===t.status?this.logs=t.response:(this.toastCtrl.newCreatedToast("Could not get logs",!1),this.router.navigate(["/admin-users"]))},t=>{this.toastCtrl.newCreatedToast("Could not get logs",!1),this.router.navigate(["/admin-users"])})}))}export(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.storage.getLogin();t&&this.apiEntrena.exportLogs(t[0].token,this.activeRouter.snapshot.paramMap.get("id")).subscribe(o=>{"ok"===o.status?(this.toastCtrl.newCreatedToast("successfully generated excel file",!1),window.open("http://localhost:3000/vtentrena/user/logs/download?path="+o.path+"&name=Logs-"+t[0].data.name+".xlsx","_self")):this.toastCtrl.newCreatedToast(`Could not export logs ${o.error}`,!1)},t=>{this.toastCtrl.newCreatedToast(`Could not export logs ${t}`,!1)})}))}}return t.\u0275fac=function(o){return new(o||t)(g.Jb(r.a),g.Jb(c.a),g.Jb(b.a),g.Jb(l.a),g.Jb(r.f))},t.\u0275cmp=g.Db({type:t,selectors:[["app-logs"]],decls:20,vars:1,consts:[["color","light"],["slot","end","mode","ios","color","success",3,"click"],[1,"options"],[1,"logs"],[1,"yellow"],[1,"blue"],[1,"green"],[1,"orange"],[1,"btn"],[3,"yellow","blue","green","orange",4,"ngFor","ngForOf"]],template:function(t,o){1&t&&(g.Mb(0,"ion-header"),g.Mb(1,"ion-toolbar",0),g.Mb(2,"ion-title"),g.lc(3,"Logs Users"),g.Lb(),g.Mb(4,"ion-button",1),g.Ub("click",(function(){return o.export()})),g.lc(5,"Export Excel"),g.Lb(),g.Lb(),g.Lb(),g.Mb(6,"ion-content"),g.Mb(7,"div",2),g.Mb(8,"div",3),g.Mb(9,"ion-chip",4),g.lc(10,"SESSION ON"),g.Lb(),g.Mb(11,"ion-chip",5),g.lc(12,"SESSION OFF"),g.Lb(),g.Mb(13,"ion-chip",6),g.lc(14,"CREATED ANSWER"),g.Lb(),g.Mb(15,"ion-chip",7),g.lc(16,"UPDATE ANSWER"),g.Lb(),g.Lb(),g.Kb(17,"div",8),g.Lb(),g.Mb(18,"ion-list"),g.kc(19,d,18,12,"ion-item",9),g.Lb(),g.Lb()),2&t&&(g.zb(19),g.cc("ngForOf",o.logs))},directives:[i.s,i.T,i.S,i.g,i.l,i.j,i.B,n.h,i.v,i.A],styles:[".yellow[_ngcontent-%COMP%]{--background:#fff1c9!important}.blue[_ngcontent-%COMP%]{--background:#d5e3fb!important}.green[_ngcontent-%COMP%]{--background:#b5e0cc!important}.orange[_ngcontent-%COMP%]{--background:#ffd9bc!important}.options[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;padding:5px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=g.Hb({type:t}),t.\u0275inj=g.Gb({factory:function(o){return new(o||t)},imports:[[r.h.forChild(u)],r.h]}),t})();e.d(o,"LogsPageModule",(function(){return h}));let h=(()=>{class t{}return t.\u0275mod=g.Hb({type:t}),t.\u0275inj=g.Gb({factory:function(o){return new(o||t)},imports:[[n.b,s.a,i.U,p]]}),t})()}}]);