function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"OG/g":function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),r=n("3Pt+"),a=n("TEn/"),i=n("tyNb"),s=n("mrSG"),c=n("NIW7"),l=n("VOof"),b=n("w9U0"),u=n("fXoL");function g(t,e){if(1&t&&(u.Mb(0,"ion-item"),u.Mb(1,"ion-label"),u.Mb(2,"strong"),u.lc(3),u.Lb(),u.Kb(4,"br"),u.Mb(5,"div"),u.Mb(6,"strong"),u.lc(7,"Navigator: "),u.Lb(),u.lc(8),u.Lb(),u.Mb(9,"div"),u.Mb(10,"strong"),u.lc(11,"IP: "),u.Lb(),u.lc(12),u.Lb(),u.Kb(13,"br"),u.Mb(14,"div"),u.Mb(15,"strong"),u.lc(16,"Date Created: "),u.Lb(),u.lc(17),u.Lb(),u.Lb(),u.Lb()),2&t){var n=e.$implicit;u.Bb("yellow","SESSION ON"===n.action)("blue","SESSION OFF"===n.action)("green","CREATED ANSWER"===n.action)("orange","UPDATE ANSWER"===n.action),u.zb(3),u.nc("Event: ",n.action,""),u.zb(5),u.nc(" ",n.userInfo.navigator,""),u.zb(4),u.nc(" ",n.userInfo.ip,""),u.zb(5),u.mc(n.dateCreated)}}var p,f,d=[{path:"",component:(p=function(){function t(e,n,o,r,a){_classCallCheck(this,t),this.activeRouter=e,this.apiEntrena=n,this.storage=o,this.toastCtrl=r,this.router=a,this.logs=[]}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.loadLogs()}},{key:"loadLogs",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getLogin();case 2:(e=t.sent)&&this.apiEntrena.readLogs(e[0].token,this.activeRouter.snapshot.paramMap.get("id")).subscribe((function(t){"ok"===t.status?n.logs=t.response:(n.toastCtrl.newCreatedToast("Could not get logs",!1),n.router.navigate(["/admin-users"]))}),(function(t){n.toastCtrl.newCreatedToast("Could not get logs",!1),n.router.navigate(["/admin-users"])}));case 4:case"end":return t.stop()}}),t,this)})))}},{key:"export",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getLogin();case 2:(e=t.sent)&&this.apiEntrena.exportLogs(e[0].token,this.activeRouter.snapshot.paramMap.get("id")).subscribe((function(t){"ok"===t.status?(n.toastCtrl.newCreatedToast("successfully generated excel file",!1),window.open("http://localhost:3000/vtentrena/user/logs/download?path="+t.path+"&name=Logs-"+e[0].data.name+".xlsx","_self")):n.toastCtrl.newCreatedToast("Could not export logs ".concat(t.error),!1)}),(function(t){n.toastCtrl.newCreatedToast("Could not export logs ".concat(t),!1)}));case 4:case"end":return t.stop()}}),t,this)})))}}]),t}(),p.\u0275fac=function(t){return new(t||p)(u.Jb(i.a),u.Jb(c.a),u.Jb(l.a),u.Jb(b.a),u.Jb(i.f))},p.\u0275cmp=u.Db({type:p,selectors:[["app-logs"]],decls:20,vars:1,consts:[["color","light"],["slot","end","mode","ios","color","success",3,"click"],[1,"options"],[1,"logs"],[1,"yellow"],[1,"blue"],[1,"green"],[1,"orange"],[1,"btn"],[3,"yellow","blue","green","orange",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(u.Mb(0,"ion-header"),u.Mb(1,"ion-toolbar",0),u.Mb(2,"ion-title"),u.lc(3,"Logs Users"),u.Lb(),u.Mb(4,"ion-button",1),u.Ub("click",(function(){return e.export()})),u.lc(5,"Export Excel"),u.Lb(),u.Lb(),u.Lb(),u.Mb(6,"ion-content"),u.Mb(7,"div",2),u.Mb(8,"div",3),u.Mb(9,"ion-chip",4),u.lc(10,"SESSION ON"),u.Lb(),u.Mb(11,"ion-chip",5),u.lc(12,"SESSION OFF"),u.Lb(),u.Mb(13,"ion-chip",6),u.lc(14,"CREATED ANSWER"),u.Lb(),u.Mb(15,"ion-chip",7),u.lc(16,"UPDATE ANSWER"),u.Lb(),u.Lb(),u.Kb(17,"div",8),u.Lb(),u.Mb(18,"ion-list"),u.kc(19,g,18,12,"ion-item",9),u.Lb(),u.Lb()),2&t&&(u.zb(19),u.cc("ngForOf",e.logs))},directives:[a.s,a.T,a.S,a.g,a.l,a.j,a.B,o.h,a.v,a.A],styles:[".yellow[_ngcontent-%COMP%]{--background:#fff1c9!important}.blue[_ngcontent-%COMP%]{--background:#d5e3fb!important}.green[_ngcontent-%COMP%]{--background:#b5e0cc!important}.orange[_ngcontent-%COMP%]{--background:#ffd9bc!important}.options[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;padding:5px}"]}),p)}],h=((f=function t(){_classCallCheck(this,t)}).\u0275mod=u.Hb({type:f}),f.\u0275inj=u.Gb({factory:function(t){return new(t||f)},imports:[[i.h.forChild(d)],i.h]}),f);n.d(e,"LogsPageModule",(function(){return C}));var v,C=((v=function t(){_classCallCheck(this,t)}).\u0275mod=u.Hb({type:v}),v.\u0275inj=u.Gb({factory:function(t){return new(t||v)},imports:[[o.b,r.a,a.U,h]]}),v)}}]);