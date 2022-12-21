"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_brillantex_brillantex_module_ts"],{

/***/ 29909:
/*!**************************************************************************!*\
  !*** ./src/app/Pages/interfaces/brillantex/brillantex-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrillantexPageRoutingModule": () => (/* binding */ BrillantexPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _brillantex_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brillantex.page */ 33934);




const routes = [
    {
        path: '',
        component: _brillantex_page__WEBPACK_IMPORTED_MODULE_0__.BrillantexPage
    }
];
let BrillantexPageRoutingModule = class BrillantexPageRoutingModule {
};
BrillantexPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BrillantexPageRoutingModule);



/***/ }),

/***/ 15059:
/*!******************************************************************!*\
  !*** ./src/app/Pages/interfaces/brillantex/brillantex.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrillantexPageModule": () => (/* binding */ BrillantexPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _brillantex_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brillantex-routing.module */ 29909);
/* harmony import */ var _brillantex_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brillantex.page */ 33934);







let BrillantexPageModule = class BrillantexPageModule {
};
BrillantexPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _brillantex_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrillantexPageRoutingModule
        ],
        declarations: [_brillantex_page__WEBPACK_IMPORTED_MODULE_1__.BrillantexPage]
    })
], BrillantexPageModule);



/***/ }),

/***/ 33934:
/*!****************************************************************!*\
  !*** ./src/app/Pages/interfaces/brillantex/brillantex.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrillantexPage": () => (/* binding */ BrillantexPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _brillantex_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brillantex.page.html?ngResource */ 43442);
/* harmony import */ var _brillantex_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brillantex.page.scss?ngResource */ 6822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);










let BrillantexPage = class BrillantexPage {
    constructor(api, popover, route, modalCtrl, alert, toast, loading, ts, menuCtrl) {
        this.api = api;
        this.popover = popover;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.toast = toast;
        this.loading = loading;
        this.ts = ts;
        this.menuCtrl = menuCtrl;
        this.planeaciones = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false, 'menu');
        this.route.queryParams.subscribe((param) => {
            console.log(param);
            this.tkn = param.accesstoken;
            this.cargarData();
        });
    }
    getInfo(guid) {
        return new Promise((resolve, reject) => {
            this.api.getActivitieInfo(this.tkn, guid).subscribe((data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            });
        });
    }
    cargarData() {
        this.carga = false;
        this.planeaciones = [];
        this.api.getActivities3(this.tkn, moment_timezone__WEBPACK_IMPORTED_MODULE_3__().subtract(3, 'days').format('YYYY-MM-DD HH:mm'), moment_timezone__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD HH:mm'), 'B5205A62-D7E0-4D02-9C29-9B386B88099D').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            for (const item of data) {
                const miData = yield this.getInfo(item.GUID);
                if (miData) {
                    const fecha = miData.Values.filter((it) => it.apiId == 'FECHAHORA');
                    miData.fecha = fecha.length > 0 ? fecha[0].Value : 'No tiene fecha';
                    if (miData.CompanyStatusName == 'VISITA PROGRAMADA') {
                        this.planeaciones.push(miData);
                    }
                }
            }
            this.carga = true;
            console.log(this.planeaciones);
        }));
    }
    reenviar(item) {
        this.loading.createLoading('Reenviando Planeación');
        this.api.changeDispath({
            tkn: this.tkn,
            user: item.AssignedTo_GUID,
            status: item.CompanyStatusGUID,
            date: moment_timezone__WEBPACK_IMPORTED_MODULE_3__().add(2, 'minutes').format('YYYY-MM-DD HH:mm'),
            guid: item.GUID
        }).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (data) {
                const toas = yield this.toast.create({
                    message: 'Planeación reenviada',
                    duration: 2000
                });
                yield toas.present();
            }
            this.loading.cancelLoading();
        }), (err) => {
            this.loading.cancelLoading();
        });
    }
};
BrillantexPage.ctorParameters = () => [
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController }
];
BrillantexPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-brillantex',
        template: _brillantex_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_brillantex_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BrillantexPage);



/***/ }),

/***/ 6822:
/*!*****************************************************************************!*\
  !*** ./src/app/Pages/interfaces/brillantex/brillantex.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmlsbGFudGV4LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 43442:
/*!*****************************************************************************!*\
  !*** ./src/app/Pages/interfaces/brillantex/brillantex.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n        <ion-title>Planeaciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item *ngFor=\"let item of planeaciones\">\n        <ion-label class=\"ion-text-wrap\">\n            <div>\n                <strong>ESTADO</strong> {{ item.CompanyStatusName}}\n            </div>\n            <div>\n                <strong>CLIENTE</strong>\n            </div>\n            <div>{{ item.LocationName}}</div> <br>\n\n\n            <div><strong>Fecha de visita: </strong>{{ item.fecha }}</div> <br>\n\n            <ion-button mode=\"ios\" color=\"primary\" expand=\"block\" (click)=\"reenviar(item)\">Reenviar Planeación</ion-button>\n\n        </ion-label>\n    </ion-item>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_brillantex_brillantex_module_ts.js.map