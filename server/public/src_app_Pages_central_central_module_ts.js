"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_central_central_module_ts"],{

/***/ 13597:
/*!*********************************************************!*\
  !*** ./src/app/Pages/central/central-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralPageRoutingModule": () => (/* binding */ CentralPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _central_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./central.page */ 14465);




const routes = [
    {
        path: '',
        component: _central_page__WEBPACK_IMPORTED_MODULE_0__.CentralPage
    }
];
let CentralPageRoutingModule = class CentralPageRoutingModule {
};
CentralPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CentralPageRoutingModule);



/***/ }),

/***/ 65923:
/*!*************************************************!*\
  !*** ./src/app/Pages/central/central.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralPageModule": () => (/* binding */ CentralPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _central_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./central-routing.module */ 13597);
/* harmony import */ var _central_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./central.page */ 14465);







let CentralPageModule = class CentralPageModule {
};
CentralPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _central_routing_module__WEBPACK_IMPORTED_MODULE_0__.CentralPageRoutingModule
        ],
        declarations: [_central_page__WEBPACK_IMPORTED_MODULE_1__.CentralPage]
    })
], CentralPageModule);



/***/ }),

/***/ 14465:
/*!***********************************************!*\
  !*** ./src/app/Pages/central/central.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralPage": () => (/* binding */ CentralPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _central_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./central.page.html?ngResource */ 85275);
/* harmony import */ var _central_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./central.page.scss?ngResource */ 19861);
/* harmony import */ var _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var src_app_Services_PLatforms_Platform_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/PLatforms/Platform.service */ 56950);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ 84935);











let CentralPage = class CentralPage {
    constructor(apiService, myPlatform, storageService, router, menuCtrl, socket) {
        this.apiService = apiService;
        this.myPlatform = myPlatform;
        this.storageService = storageService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.socket = socket;
        this.dataUser = {
            AccesToken: '90BA1FD909F45177050A18D22AF00BA0'
        };
        this.listForms = [];
        this.draw = false;
        this.loadForms = false;
        this.plt = '';
        this.myPlatform.$myplatform.subscribe((plt) => {
            this.plt = plt;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.listForms = [];
            if (this.listForms.length === 0) {
                this.loadForms = true;
            }
            yield this.menuCtrl.enable(true, 'menu');
            // this.sqliteService.getToken().then((token) => {
            // console.log(token, 'Token');
            this.dataUser.AccessToken = yield this.storageService.getToken();
            //  console.log(this.dataUser);
            this.apiService.getForm(this.dataUser, {}).subscribe((data) => {
                // console.log(JSON.parse(data));
                data = JSON.parse(data);
                this.loadForms = false;
                data.forEach(element => {
                    if (element.isDeleted !== 'True') {
                        this.listForms.push(element);
                    }
                });
                if (this.plt === 'web') {
                    this.storageService.insertForms(data);
                }
                console.log(this.listForms);
            });
            /* }).catch((err) => {
               console.log(err);
             })*/
        });
    }
    clickForm(form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                console.log(form);
                form.JSONQuestions = JSON.parse(form.JSONQuestions);
                const d = yield this.storageService.insertFormActive(form);
                if (d) {
                    this.router.navigate(['/form']);
                }
            }
            catch (error) {
            }
        });
    }
};
CentralPage.ctorParameters = () => [
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_Services_PLatforms_Platform_service__WEBPACK_IMPORTED_MODULE_4__.PlatformsService },
    { type: _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__.StorageWebService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__.Socket }
];
CentralPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-central',
        template: _central_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('welcome', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('* => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.query)(':enter', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
                            opacity: 0,
                            transform: 'translateX(-100px)'
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.stagger)(100, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
                                opacity: 1,
                                transform: 'none'
                            }))
                        ])
                    ], { optional: true })
                ])
            ])
        ],
        styles: [_central_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CentralPage);



/***/ }),

/***/ 19861:
/*!************************************************************!*\
  !*** ./src/app/Pages/central/central.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".avatar {\n  width: 50px;\n  height: 50px;\n  background: #4D662E;\n  color: #fff;\n  font-weight: bold;\n  font-size: 22px;\n  border-radius: 100%;\n  margin-right: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRyYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDTCIsImZpbGUiOiJjZW50cmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xyXG4gICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgIGhlaWdodDogNTBweDtcclxuICAgICBiYWNrZ3JvdW5kOiAjNEQ2NjJFO1xyXG4gICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 85275:
/*!************************************************************!*\
  !*** ./src/app/Pages/central/central.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"danger\">\n    <ion-title>Formularios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"center column\" *ngIf=\"loadForms\">\n    <br><br><br>\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p>Cargando Formularios...</p>\n  </div>\n\n  <ion-list [@welcome]=\"listForms.length\">\n      <ion-item  class=\"ion-margin-bottom\" *ngFor=\"let form of listForms\" (click)=\"clickForm(form);\">\n        <div class=\"avatar\">F</div>\n        <ion-label class=\"ion-text-wrap\"> {{ form.Name }}</ion-label>\n      </ion-item>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_central_central_module_ts.js.map