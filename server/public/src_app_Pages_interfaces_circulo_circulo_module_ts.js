"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_circulo_circulo_module_ts"],{

/***/ 68299:
/*!********************************************************************!*\
  !*** ./src/app/Pages/interfaces/circulo/circulo-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CirculoPageRoutingModule": () => (/* binding */ CirculoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _circulo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circulo.page */ 53063);




const routes = [
    {
        path: '',
        component: _circulo_page__WEBPACK_IMPORTED_MODULE_0__.CirculoPage
    }
];
let CirculoPageRoutingModule = class CirculoPageRoutingModule {
};
CirculoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CirculoPageRoutingModule);



/***/ }),

/***/ 5203:
/*!************************************************************!*\
  !*** ./src/app/Pages/interfaces/circulo/circulo.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CirculoPageModule": () => (/* binding */ CirculoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _circulo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circulo-routing.module */ 68299);
/* harmony import */ var _circulo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circulo.page */ 53063);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let CirculoPageModule = class CirculoPageModule {
};
CirculoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _circulo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CirculoPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_circulo_page__WEBPACK_IMPORTED_MODULE_1__.CirculoPage]
    })
], CirculoPageModule);



/***/ }),

/***/ 53063:
/*!**********************************************************!*\
  !*** ./src/app/Pages/interfaces/circulo/circulo.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CirculoPage": () => (/* binding */ CirculoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _circulo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circulo.page.html?ngResource */ 74954);
/* harmony import */ var _circulo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circulo.page.scss?ngResource */ 3281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_circulocerrado_circulocerrado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/circulocerrado/circulocerrado.component */ 49445);











let CirculoPage = class CirculoPage {
    constructor(storage, toast, route, api, popover) {
        this.storage = storage;
        this.toast = toast;
        this.route = route;
        this.api = api;
        this.popover = popover;
        this.login = '';
        this.password = '';
        this.load = true;
        this.activitiesList = [];
        this.tkn = '';
        this.clientes = [];
        this.desde = '';
        this.hasta = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe((param) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.load = false;
            console.log(param);
            this.tkn = param.accesstoken;
            this.getLogin();
        }));
    }
    locs() {
        return new Promise((resolve, reject) => {
            this.api.getLocs({
                AccessToken: this.tkn,
                LocationTypeID: "A8C8259D-35A8-4E8F-8B48-C399BFBDBF68"
            }).subscribe((data) => {
                resolve(data);
            }, () => resolve(false), () => this.load = true);
        });
    }
    getLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const rs = yield this.locs();
            console.log(rs);
            if (rs) {
                this.clientes = rs;
                const login = yield this.storage.getLoginInterface();
                if (login.length > 0) {
                    this.user = login[0].loc.Name;
                    this.interface = true;
                }
                else {
                    this.form = true;
                }
                console.log(login, 'LOGIN');
            }
            else {
                this.toast.newCreatedToast('No se pudo completar la craga de la inetrfaz, inténtelo nuevamente(recargue la página)', false);
            }
        });
    }
    eliminar(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popover.create({
                component: src_app_components_circulocerrado_circulocerrado_component__WEBPACK_IMPORTED_MODULE_6__.CirculocerradoComponent,
                event: event,
                showBackdrop: false
            });
            yield popover.present();
            const rs = yield popover.onWillDismiss();
            if (rs.data) {
                if (rs.data == 1) {
                    this.storage.deletelogininterfaces();
                    this.form = true;
                    this.interface = false;
                    this.desde = '';
                    this.hasta = '';
                }
            }
        });
    }
    ingresar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.login || !this.password) {
                this.toast.newCreatedToast('Debes ingresar el usuario y contraseña', false);
                return;
            }
            const valid = this.clientes.filter((it) => it.USER == this.login && it.PASSWORD == this.password);
            if (valid.length > 0) {
                const insert = yield this.storage.setLoginInterface({
                    login: this.login,
                    password: this.password, loc: valid[0]
                });
                this.user = valid[0].Name;
                this.interface = true;
                this.form = false;
            }
            else {
                this.toast.newCreatedToast('Las credenciales son incorrectas', false);
            }
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
    aplicar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            moment_timezone__WEBPACK_IMPORTED_MODULE_5__.locale('es');
            if (!this.desde || !this.hasta) {
                this.toast.newCreatedToast('Debes ingresar la fecha desde y hasta', false);
                return;
            }
            console.log(this.desde, this.hasta);
            this.load = false;
            const lg = yield this.storage.getLoginInterface();
            this.activitiesList = [];
            this.api.getActivities2(this.tkn, this.desde + ' 00:00', this.hasta + ' 23:59', 'Ld61l38tFu').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                console.log(data, 'data');
                const rs = data.filter((it) => it.LocationName == lg[0].loc.Name);
                for (const item of rs) {
                    let rsData = yield this.getInfo(item.GUID);
                    rsData.creado = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(rsData.CreatedOn).format('LL');
                    this.activitiesList.push(rsData);
                }
                this.load = true;
                console.log(this.activitiesList);
            }), () => { this.load = true; });
        });
    }
    download(guid) {
        window.location.href = 'https://pdf.visitrack.com/api/PDF?AccessToken=' + this.tkn + '&GUID=' + guid;
    }
};
CirculoPage.ctorParameters = () => [
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__.StorageWebService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController }
];
CirculoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-circulo',
        template: _circulo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_circulo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CirculoPage);



/***/ }),

/***/ 3281:
/*!***********************************************************************!*\
  !*** ./src/app/Pages/interfaces/circulo/circulo.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".contenedor {\n  width: 100%;\n  max-width: 600px;\n}\n\n.margin {\n  margin: 50px auto;\n}\n\n.contenedor h3 {\n  text-align: center;\n  width: 100%;\n  opacity: 0.5;\n}\n\n.campos {\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  padding: 5px 10px !important;\n  margin-bottom: 10px;\n  opacity: 0.7;\n}\n\n.right {\n  text-align: right;\n}\n\n.main {\n  width: 100%;\n}\n\n.main .campo {\n  width: 100%;\n  background-color: #f1f1f1;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 0;\n  height: 50px;\n  font-size: 22px;\n}\n\n.main .tarjetas {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.main .tarjetas ion-card {\n  padding: 10px;\n  background-color: #F3F0F8;\n  width: calc(25% - 20px);\n  margin: 10px;\n}\n\n.main .tarjetas ion-card ion-card-title {\n  font-size: 22px;\n}\n\n.main .tarjetas ion-card ion-card-content {\n  font-size: 16px;\n}\n\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.flex img {\n  height: 100px;\n}\n\n.tabla {\n  width: 80%;\n  margin: 20px auto;\n}\n\n.titulo {\n  background-color: #f1f1f1;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 10px;\n}\n\n.fila {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.fila ion-col {\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1bG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFBSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRVI7O0FBQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFFUjs7QUFEUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUdaOztBQUZZO0VBQ0ksZUFBQTtBQUloQjs7QUFGWTtFQUNJLGVBQUE7QUFJaEI7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQUk7RUFDSSxhQUFBO0FBRVI7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFBSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFUiIsImZpbGUiOiJjaXJjdWxvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4ubWFyZ2luIHtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLmNvbnRlbmVkb3IgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAuNTtcbn1cblxuLmNhbXBvcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgb3BhY2l0eTogLjc7XG59XG5cbi5yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuY2FtcG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICAudGFyamV0YXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjBGODtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG4udGFibGEge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi50aXR1bG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmlsYSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGlvbi1jb2wge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 74954:
/*!***********************************************************************!*\
  !*** ./src/app/Pages/interfaces/circulo/circulo.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"circulo\">\n\n\n        <div class=\"flex\">\n            <ion-title *ngIf=\"!interface\">Actividades</ion-title>\n            <ion-title *ngIf=\"interface\">Hola, {{ user }}</ion-title>\n\n            <ion-buttons *ngIf=\"interface\">\n                <ion-button (click)=\"eliminar($event)\">\n                    <ion-icon name=\"person-circle\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <div *ngIf=\"form\" class=\"contenedor margin\">\n\n\n        <div style=\"text-align: center;\">\n\n\n            <img src=\" https://s3.amazonaws.com/logocompanies/17F330C5-BD80-42D2-B8E4-D69F45B9775E.png\" alt=\"\">\n\n\n            <h3>Credenciales de Usuario</h3>\n            <ion-list>\n\n                <ion-item lines=\"none\" class=\"campos\">\n                    <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n                    <ion-input [(ngModel)]=\"login\" type=\"text\" placeholder=\"Usuario\"></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"campos\">\n                    <ion-icon slot=\"start\" name=\"lock-closed-outline\"></ion-icon>\n                    <ion-input [(ngModel)]=\"password\" clearOnEdit=\"false\" type=\"password\" placeholder=\"Contraseña\"></ion-input>\n                </ion-item>\n            </ion-list>\n\n            <ion-grid fixed>\n                <ion-row class=\"ion-margin-bottom\">\n                    <ion-col size=\"10\" offset=\"1\">\n                        <ion-button (click)=\"ingresar()\" mode=\"ios\" shape=\"round\" expand=\"block\" color=\"light\">Acceso</ion-button>\n                    </ion-col>\n                </ion-row>\n\n                <div *ngIf=\"statusResponse\">\n                    <ion-row>\n                        <ion-col size=\"10\" offset=\"1\" class=\"center row\">\n                            <ion-spinner name=\"crescent\" color=\"danger\"></ion-spinner>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col size=\"10\" offset=\"1\" class=\"center row\">\n                            <p>Accediendo a la cuenta de entrenamiento</p>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </ion-grid>\n        </div>\n    </div>\n\n    <div *ngIf=\"interface\" class=\"main\">\n\n\n        <h2>Tablero de actividades</h2>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"3\">\n                    <strong>Desde</strong>\n                </ion-col>\n                <ion-col size=\"3\">\n                    <strong>Hasta</strong>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"3\">\n                    <ion-input class=\"campo\" type=\"date\" [(ngModel)]=\"desde\"></ion-input>\n                </ion-col>\n                <ion-col size=\"3\">\n                    <ion-input class=\"campo\" type=\"date\" [(ngModel)]=\"hasta\"></ion-input>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"right\">\n                    <ion-button mode=\"ios\" color=\"circulo\" (click)=\"aplicar()\">Aplicar Fechas</ion-button>\n                </ion-col>\n\n\n            </ion-row>\n        </ion-grid> <br>\n\n\n        <div class=\"loading\" *ngIf=\"!load\">\n            <ion-spinner name=\"crescent\"></ion-spinner>\n            <h3>Cargando</h3>\n        </div>\n\n        <div class=\"loading\" *ngIf=\"load && activitiesList.length == 0\">\n            <ion-icon style=\"font-size: 72px;\" name=\"newspaper\" color=\"circulo\"></ion-icon>\n            <h3>No tiene actividades en este momento</h3>\n        </div>\n\n        <ion-grid class=\"tabla\" *ngIf=\"activitiesList.length > 0\">\n            <ion-row class=\"titulo\">\n                <ion-col size=\"4\">CLIENTE</ion-col>\n                <ion-col size=\"4\">FECHA CREACIÓN</ion-col>\n                <ion-col size=\"4\">ACCIONES</ion-col>\n\n            </ion-row>\n            <ion-row class=\"fila\" *ngFor=\"let item of activitiesList\">\n                <ion-col size=\"4\">{{ item.LocationName }}</ion-col>\n                <ion-col size=\"4\">{{ item.creado }}</ion-col>\n                <ion-col size=\"4\" class=\"center\">\n                    <ion-button mode=\"ios\" color=\"danger\" (click)=\"download(item.GUID)\">Descargar PDF</ion-button>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <div style=\"display: flex; align-items: center; opacity: .3;\">\n            <img style=\" padding: 0 20px;\" width=\"150px\" src=\"https://cloud.visitrack.com/images/vt_logo_400.png\" alt=\"\">\n            <strong>Visitrack &copy; 2023</strong>\n        </div>\n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_circulo_circulo_module_ts.js.map