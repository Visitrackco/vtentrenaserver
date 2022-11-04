"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_Entrena_logs_logs_module_ts"],{

/***/ 86789:
/*!***********************************************************!*\
  !*** ./src/app/Pages/Entrena/logs/logs-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsPageRoutingModule": () => (/* binding */ LogsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _logs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs.page */ 17386);




const routes = [
    {
        path: '',
        component: _logs_page__WEBPACK_IMPORTED_MODULE_0__.LogsPage
    }
];
let LogsPageRoutingModule = class LogsPageRoutingModule {
};
LogsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LogsPageRoutingModule);



/***/ }),

/***/ 80040:
/*!***************************************************!*\
  !*** ./src/app/Pages/Entrena/logs/logs.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsPageModule": () => (/* binding */ LogsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _logs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs-routing.module */ 86789);
/* harmony import */ var _logs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs.page */ 17386);







let LogsPageModule = class LogsPageModule {
};
LogsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _logs_routing_module__WEBPACK_IMPORTED_MODULE_0__.LogsPageRoutingModule
        ],
        declarations: [_logs_page__WEBPACK_IMPORTED_MODULE_1__.LogsPage]
    })
], LogsPageModule);



/***/ }),

/***/ 17386:
/*!*************************************************!*\
  !*** ./src/app/Pages/Entrena/logs/logs.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsPage": () => (/* binding */ LogsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _logs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs.page.html?ngResource */ 31940);
/* harmony import */ var _logs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs.page.scss?ngResource */ 94970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);








let LogsPage = class LogsPage {
    constructor(activeRouter, apiEntrena, storage, toastCtrl, router) {
        this.activeRouter = activeRouter;
        this.apiEntrena = apiEntrena;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.logs = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loadLogs();
    }
    loadLogs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.apiEntrena.readLogs(login[0].token, this.activeRouter.snapshot.paramMap.get('id')).subscribe((data) => {
                    if (data.status === 'ok') {
                        this.logs = data.response;
                    }
                    else {
                        this.toastCtrl.newCreatedToast('Could not get logs', false);
                        this.router.navigate(['/admin-users']);
                    }
                }, (err) => {
                    this.toastCtrl.newCreatedToast('Could not get logs', false);
                    this.router.navigate(['/admin-users']);
                });
            }
        });
    }
    export() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.apiEntrena.exportLogs(login[0].token, this.activeRouter.snapshot.paramMap.get('id')).subscribe((data) => {
                    if (data.status === 'ok') {
                        this.toastCtrl.newCreatedToast('successfully generated excel file', false);
                        // tslint:disable-next-line:max-line-length
                        window.open('http://localhost:3000/vtentrena/user/logs/download?path=' + data.path + '&name=' + 'Logs-' + login[0].data.name + '.xlsx', '_self');
                    }
                    else {
                        this.toastCtrl.newCreatedToast(`Could not export logs ${data.error}`, false);
                    }
                }, (err) => {
                    this.toastCtrl.newCreatedToast(`Could not export logs ${err}`, false);
                });
            }
        });
    }
};
LogsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__.StorageWebService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
LogsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-logs',
        template: _logs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_logs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogsPage);



/***/ }),

/***/ 94970:
/*!**************************************************************!*\
  !*** ./src/app/Pages/Entrena/logs/logs.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".yellow {\n  --background: #FFF1C9 !important;\n}\n\n.blue {\n  --background: #D5E3FB !important;\n}\n\n.green {\n  --background: #B5E0CC !important;\n}\n\n.orange {\n  --background: #FFD9BC !important;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZ0NBQUE7QUFDTDs7QUFFQTtFQUNLLGdDQUFBO0FBQ0w7O0FBRUE7RUFDSyxnQ0FBQTtBQUNMOztBQUVBO0VBQ0ssZ0NBQUE7QUFDTDs7QUFFQTtFQUNLLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDTCIsImZpbGUiOiJsb2dzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi55ZWxsb3cge1xyXG4gICAgIC0tYmFja2dyb3VuZDogI0ZGRjFDOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiAjRDVFM0ZCICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiAjQjVFMENDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcmFuZ2Uge1xyXG4gICAgIC0tYmFja2dyb3VuZDogI0ZGRDlCQyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3B0aW9uc3tcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 31940:
/*!**************************************************************!*\
  !*** ./src/app/Pages/Entrena/logs/logs.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Logs Users</ion-title>\n      <ion-button slot=\"end\" mode=\"ios\" color=\"success\" (click)=\"export()\">Export Excel</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"options\">\n    <div class=\"logs\">\n      <ion-chip class=\"yellow\">SESSION ON</ion-chip> <ion-chip class=\"blue\">SESSION OFF</ion-chip> <ion-chip class=\"green\">CREATED ANSWER</ion-chip> <ion-chip class=\"orange\">UPDATE ANSWER</ion-chip>\n    </div>\n    <div class=\"btn\">\n     \n    </div>\n  </div>\n  <ion-list>\n    <ion-item *ngFor=\"let log of logs\" [class.yellow]=\"log.action === 'SESSION ON'\" [class.blue]=\"log.action === 'SESSION OFF'\" [class.green]=\"log.action === 'CREATED ANSWER'\" [class.orange]=\"log.action === 'UPDATE ANSWER'\">\n      <ion-label>\n        <strong>Event: {{log.action}}</strong> <br>\n        <div><strong>Navigator: </strong> {{log.userInfo.navigator}}</div>\n        <div><strong>IP: </strong> {{log.userInfo.ip}}</div> <br>\n        <div><strong>Date Created: </strong>{{log.dateCreated}}</div>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Entrena_logs_logs_module_ts.js.map