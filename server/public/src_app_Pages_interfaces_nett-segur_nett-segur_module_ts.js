"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_nett-segur_nett-segur_module_ts"],{

/***/ 55179:
/*!**************************************************************************!*\
  !*** ./src/app/Pages/interfaces/nett-segur/nett-segur-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NettSegurPageRoutingModule": () => (/* binding */ NettSegurPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _nett_segur_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nett-segur.page */ 85358);




const routes = [
    {
        path: '',
        component: _nett_segur_page__WEBPACK_IMPORTED_MODULE_0__.NettSegurPage
    }
];
let NettSegurPageRoutingModule = class NettSegurPageRoutingModule {
};
NettSegurPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NettSegurPageRoutingModule);



/***/ }),

/***/ 52966:
/*!******************************************************************!*\
  !*** ./src/app/Pages/interfaces/nett-segur/nett-segur.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NettSegurPageModule": () => (/* binding */ NettSegurPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _nett_segur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nett-segur-routing.module */ 55179);
/* harmony import */ var _nett_segur_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nett-segur.page */ 85358);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let NettSegurPageModule = class NettSegurPageModule {
};
NettSegurPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _nett_segur_routing_module__WEBPACK_IMPORTED_MODULE_0__.NettSegurPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_nett_segur_page__WEBPACK_IMPORTED_MODULE_1__.NettSegurPage]
    })
], NettSegurPageModule);



/***/ }),

/***/ 85358:
/*!****************************************************************!*\
  !*** ./src/app/Pages/interfaces/nett-segur/nett-segur.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NettSegurPage": () => (/* binding */ NettSegurPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _nett_segur_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nett-segur.page.html?ngResource */ 60522);
/* harmony import */ var _nett_segur_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nett-segur.page.scss?ngResource */ 79879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_asignacionnettsegur_asignacionnettsegur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/asignacionnettsegur/asignacionnettsegur.component */ 8638);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);








let NettSegurPage = class NettSegurPage {
    constructor(menuCtrl, api, modalCtrl, route) {
        this.menuCtrl = menuCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.activitiesList = [];
        this.load = false;
        this.txt = '';
        this.temp = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false, 'menu');
        this.route.queryParams.subscribe((param) => {
            console.log(param);
            this.tkn = param.accesstoken;
            this.getActivities();
        });
    }
    search(event) {
        this.txt = event.detail.value;
    }
    getData(guid) {
        return new Promise((resolve, reject) => {
            this.api.getActivitieInfo(this.tkn, guid).subscribe((data) => {
                console.log(data, 'DATA');
                resolve(data);
            });
        });
    }
    getActivities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.api.getMyActivities(this.tkn).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(data);
                if (!data) {
                    this.load = true;
                    return;
                }
                if (data.length == 0) {
                    this.load = true;
                    return;
                }
                for (const item of data) {
                    const response = yield this.getData(item.GUID);
                    if (response) {
                        this.activitiesList.push(response);
                    }
                    this.load = true;
                }
                this.temp = this.activitiesList;
                console.log(this.activitiesList);
            }), (err) => this.load = true);
        });
    }
    asignar(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_asignacionnettsegur_asignacionnettsegur_component__WEBPACK_IMPORTED_MODULE_2__.AsignacionnettsegurComponent,
                componentProps: {
                    tkn: '538670140830D5E9B8D5C473F050E9E3',
                    data
                }
            });
            yield modal.present();
            const close = yield modal.onWillDismiss();
            if (close.data) {
                this.load = false;
                this.activitiesList = [];
                this.getActivities();
            }
        });
    }
};
NettSegurPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
NettSegurPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-nett-segur',
        template: _nett_segur_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nett_segur_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NettSegurPage);



/***/ }),

/***/ 79879:
/*!*****************************************************************************!*\
  !*** ./src/app/Pages/interfaces/nett-segur/nett-segur.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".main {\n  width: 100%;\n}\n.main ion-grid {\n  width: 40%;\n  margin: 0;\n}\n.main .campo {\n  width: 100%;\n  background-color: #f1f1f1;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 0;\n  height: 50px;\n  border-radius: 20px;\n}\n.main .tarjetas {\n  width: 100%;\n  display: flex;\n}\n.main .tarjetas ion-card {\n  padding: 10px;\n  background-color: #F3F0F8;\n  width: calc(25% - 20px);\n  margin: 10px;\n}\n.main .tarjetas ion-card ion-card-title {\n  font-size: 22px;\n}\n.main .tarjetas ion-card ion-card-content {\n  font-size: 16px;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n.flex img {\n  height: 100px;\n}\n.separador {\n  margin: 10px 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldHQtc2VndXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFFUjtBQURRO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBR1o7QUFGWTtFQUNJLGVBQUE7QUFJaEI7QUFGWTtFQUNJLGVBQUE7QUFJaEI7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0FBRVI7QUFFQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtBQUNKIiwiZmlsZSI6Im5ldHQtc2VndXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuY2FtcG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gICAgLnRhcmpldGFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGMEY4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9hZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5cbi5zZXBhcmFkb3Ige1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn0iXX0= */";

/***/ }),

/***/ 60522:
/*!*****************************************************************************!*\
  !*** ./src/app/Pages/interfaces/nett-segur/nett-segur.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n\n        <div class=\"flex\">\n            <img src=\"https://cloud.visitrack.com/images/vt_logo_400.png\" alt=\"\">\n\n            <img src=\"https://s3.amazonaws.com/logocompanies/33BB30A9-1E4C-42D4-9E61-B6491EBF291C.png\" alt=\"\">\n\n\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <div class=\"main\">\n\n\n        <h2>Tablero de asignación</h2>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"8\">\n                    <ion-input class=\"campo\" type=\"text\" placeholder=\"Buscar Novedad\" (ionChange)=\"search($event)\"></ion-input>\n                </ion-col>\n\n\n            </ion-row>\n        </ion-grid> <br>\n\n\n        <div class=\"loading\" *ngIf=\"!load\">\n            <ion-spinner name=\"crescent\"></ion-spinner>\n            <h3>Creando actividades</h3>\n        </div>\n\n        <div class=\"loading\" *ngIf=\"load && activitiesList.length == 0\">\n            <ion-icon style=\"font-size: 72px;\" name=\"newspaper\" color=\"tertiary\"></ion-icon>\n            <h3>No tiene actividades en este momento</h3>\n        </div>\n\n        <div class=\"loading\" *ngIf=\" (activitiesList | filtroact : txt).length == 0 && txt != ''\">\n            <ion-icon style=\"font-size: 72px;\" name=\"search\" color=\"tertiary\"></ion-icon>\n            <h3>No hay actividades que coincidan con <strong style=\"color: purple;\">{{txt}}</strong></h3>\n        </div>\n\n        <div class=\"tarjetas\" *ngIf=\"load\">\n            <ion-card mode=\"md\" *ngFor=\"let acti of activitiesList | filtroact : txt\">\n                <ion-card-title>{{ acti.LocationName }}</ion-card-title>\n                <ion-card-content>\n                    <div class=\"flex\">\n                        <strong>Novedad</strong>\n                        <span style=\"color: green;\">{{ acti.Values | values : 'NOVEDAD'}}</span>\n                    </div>\n                    <div class=\"flex\">\n                        <strong>Ubicación</strong>\n                        <span>{{ acti.Values | values : 'UBICACION'}}</span>\n                    </div>\n                    <div class=\"flex\">\n                        <strong>Observaciones</strong>\n\n                    </div>\n\n                    <div>\n                        {{ acti.Values | values : 'OBSERVACIONES'}}\n                    </div>\n\n                    <div class=\"separador\"></div>\n\n                    <div class=\"flex\">\n                        <strong>Fecha</strong>\n                        <span>{{ acti.Values | values : 'FECHA'}}</span>\n                    </div> <br>\n\n                    <ion-button color=\"tertiary\" mode=\"ios\" expand=\"block\" (click)=\"asignar(acti)\">Asignar Novedad</ion-button>\n                </ion-card-content>\n            </ion-card>\n        </div>\n\n    </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_nett-segur_nett-segur_module_ts.js.map