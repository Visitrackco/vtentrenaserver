"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_cdo_seguimiento-sst_seguimiento-sst_module_ts"],{

/***/ 91604:
/*!****************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguimientoSSTPageRoutingModule": () => (/* binding */ SeguimientoSSTPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _seguimiento_sst_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguimiento-sst.page */ 55218);




const routes = [
    {
        path: '',
        component: _seguimiento_sst_page__WEBPACK_IMPORTED_MODULE_0__.SeguimientoSSTPage
    }
];
let SeguimientoSSTPageRoutingModule = class SeguimientoSSTPageRoutingModule {
};
SeguimientoSSTPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeguimientoSSTPageRoutingModule);



/***/ }),

/***/ 13312:
/*!********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguimientoSSTPageModule": () => (/* binding */ SeguimientoSSTPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _seguimiento_sst_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguimiento-sst-routing.module */ 91604);
/* harmony import */ var _seguimiento_sst_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seguimiento-sst.page */ 55218);







let SeguimientoSSTPageModule = class SeguimientoSSTPageModule {
};
SeguimientoSSTPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _seguimiento_sst_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeguimientoSSTPageRoutingModule
        ],
        declarations: [_seguimiento_sst_page__WEBPACK_IMPORTED_MODULE_1__.SeguimientoSSTPage]
    })
], SeguimientoSSTPageModule);



/***/ }),

/***/ 55218:
/*!******************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguimientoSSTPage": () => (/* binding */ SeguimientoSSTPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _seguimiento_sst_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguimiento-sst.page.html?ngResource */ 34611);
/* harmony import */ var _seguimiento_sst_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seguimiento-sst.page.scss?ngResource */ 48567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);








let SeguimientoSSTPage = class SeguimientoSSTPage {
    constructor(api, popover, route, modalCtrl, alert, toast, loading) {
        this.api = api;
        this.popover = popover;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.toast = toast;
        this.loading = loading;
        this.actividades = [];
        this.unicos = [];
        this.filtro = 'Todos';
        this.txt = '';
        this.padres = [];
    }
    ngOnInit() {
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
    ionViewWillEnter() {
        this.route.queryParams.subscribe((param) => {
            console.log(param);
            this.tkn = param.tkn;
            this.cargarData();
        });
    }
    cargarData() {
    }
    cambio(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
SeguimientoSSTPage.ctorParameters = () => [
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService }
];
SeguimientoSSTPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-seguimiento-sst',
        template: _seguimiento_sst_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_seguimiento_sst_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeguimientoSSTPage);



/***/ }),

/***/ 48567:
/*!*******************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWd1aW1pZW50by1zc3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 34611:
/*!*******************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\n    <ion-toolbar color=\"dark\">\n\n        <ion-title>SEGUIMIENTO INF. INSPECCIÓN </ion-title>\n        <ion-buttons slot=\"end\">\n\n\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Solcicitud\" (ionChange)=\"cambio($event)\"></ion-searchbar>\n\n</ion-header>\n\n<ion-content>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_cdo_seguimiento-sst_seguimiento-sst_module_ts.js.map