"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_asignacion-diamante_asignacion-diamante_module_ts"],{

/***/ 24434:
/*!********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/asignacion-diamante/asignacion-diamante-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignacionDiamantePageRoutingModule": () => (/* binding */ AsignacionDiamantePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _asignacion_diamante_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignacion-diamante.page */ 68728);




const routes = [
    {
        path: '',
        component: _asignacion_diamante_page__WEBPACK_IMPORTED_MODULE_0__.AsignacionDiamantePage
    }
];
let AsignacionDiamantePageRoutingModule = class AsignacionDiamantePageRoutingModule {
};
AsignacionDiamantePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsignacionDiamantePageRoutingModule);



/***/ }),

/***/ 38328:
/*!************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/asignacion-diamante/asignacion-diamante.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignacionDiamantePageModule": () => (/* binding */ AsignacionDiamantePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _asignacion_diamante_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignacion-diamante-routing.module */ 24434);
/* harmony import */ var _asignacion_diamante_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignacion-diamante.page */ 68728);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let AsignacionDiamantePageModule = class AsignacionDiamantePageModule {
};
AsignacionDiamantePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _asignacion_diamante_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsignacionDiamantePageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_asignacion_diamante_page__WEBPACK_IMPORTED_MODULE_1__.AsignacionDiamantePage]
    })
], AsignacionDiamantePageModule);



/***/ }),

/***/ 68728:
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/asignacion-diamante/asignacion-diamante.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignacionDiamantePage": () => (/* binding */ AsignacionDiamantePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _asignacion_diamante_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignacion-diamante.page.html?ngResource */ 30032);
/* harmony import */ var _asignacion_diamante_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignacion-diamante.page.scss?ngResource */ 3113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_users_diamante_users_diamante_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/users-diamante/users-diamante.component */ 87798);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);








let AsignacionDiamantePage = class AsignacionDiamantePage {
    constructor(api, toas, route, menuCtrl, modal) {
        this.api = api;
        this.toas = toas;
        this.route = route;
        this.menuCtrl = menuCtrl;
        this.modal = modal;
        this.list = [];
        this.text = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false, 'menu');
        this.route.queryParams.subscribe((param) => {
            console.log(param);
            this.tkn = param.accesstoken;
            this.gestared();
        });
    }
    gestared() {
        this.api.getAssetsGET({
            tkn: this.tkn,
            guid: "1JJkNDXMay"
        }).subscribe((data) => {
            this.list = data;
            console.log(data, 'Hola');
        });
    }
    preventivo(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_components_users_diamante_users_diamante_component__WEBPACK_IMPORTED_MODULE_2__.UsersDiamanteComponent,
                componentProps: {
                    tkn: this.tkn,
                    type: 'prev',
                    view: 1,
                    data: {
                        LocationGUID: item.LocationGUID,
                        AssetGUID: item.GUID
                    }
                }
            });
            yield modal.present();
        });
    }
    correctivo(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_components_users_diamante_users_diamante_component__WEBPACK_IMPORTED_MODULE_2__.UsersDiamanteComponent,
                componentProps: {
                    tkn: this.tkn,
                    type: 'corr',
                    view: 1,
                    data: {
                        LocationGUID: item.LocationGUID,
                        AssetGUID: item.GUID
                    }
                }
            });
            yield modal.present();
        });
    }
    locs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_components_users_diamante_users_diamante_component__WEBPACK_IMPORTED_MODULE_2__.UsersDiamanteComponent,
                componentProps: {
                    tkn: this.tkn,
                    view: 2
                }
            });
            yield modal.present();
        });
    }
    filter(event) {
        this.text = event.detail.value;
    }
};
AsignacionDiamantePage.ctorParameters = () => [
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
AsignacionDiamantePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-asignacion-diamante',
        template: _asignacion_diamante_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asignacion_diamante_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignacionDiamantePage);



/***/ }),

/***/ 3113:
/*!***********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/asignacion-diamante/asignacion-diamante.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ".flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 22px;\n}\n.flex ion-icon {\n  font-size: 28px;\n}\nion-grid {\n  padding: 20px;\n  width: 100%;\n}\n.titulo {\n  background-color: #387EBD;\n  color: #fff;\n  padding: 10px;\n}\n.fila:nth-child(even) {\n  background-color: #f3f3f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWduYWNpb24tZGlhbWFudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFDSjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6ImFzaWduYWNpb24tZGlhbWFudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbn1cblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXR1bG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODdFQkQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpbGE6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufSJdfQ== */";

/***/ }),

/***/ 30032:
/*!***********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/asignacion-diamante/asignacion-diamante.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n\n\n\n        <div class=\"flex\">\n\n            <img src=\"https://s3.amazonaws.com/logocompanies/CC55B13F-5CA2-4420-A313-539CD18BD5B4.png\n          \" width=\"80\" />\n\n            <img src=\"/assets/logo-vt.png\n          \" width=\"250\" />\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"8\">\n                <ion-searchbar mode=\"ios\" placeholder=\"Buscar Activo\" (ionChange)=\"filter($event)\"></ion-searchbar>\n            </ion-col>\n            <ion-col style=\"text-align: right;\">\n                <!-- <ion-button mode=\"ios\" color=\"primary\" (click)=\"locs()\">RUTA CENTRO COSTO</ion-button>  -->\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <br>\n\n    <ion-grid>\n        <ion-row class=\"titulo\">\n            <ion-col size=\"5\" class=\"center\">ACTIVO</ion-col>\n            <ion-col size=\"3\" class=\"center\">CENTRO DE COSTO</ion-col>\n            <ion-col size=\"4\" class=\"center\">ACCIONES</ion-col>\n        </ion-row>\n\n        <ion-row class=\"fila\" *ngFor=\"let item of list | filtroActivo : text\">\n            <ion-col size=\"5\" class=\"center\">{{item.Name }}</ion-col>\n            <ion-col size=\"3\" class=\"center\">{{ item.LocationName }}</ion-col>\n            <ion-col size=\"4\" class=\"center\">\n                <ion-button mode=\"ios\" color=\"secondary\" (click)=\"preventivo(item)\">PREVENTIVO</ion-button>\n\n                <ion-button mode=\"ios\" color=\"primary\" (click)=\"correctivo(item)\">CORRECTIVO</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_asignacion-diamante_asignacion-diamante_module_ts.js.map