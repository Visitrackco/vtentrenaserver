"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_login_login_module_ts"],{

/***/ 26875:
/*!*****************************************************!*\
  !*** ./src/app/Pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66318);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 45342:
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 26875);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66318);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66318:
/*!*******************************************!*\
  !*** ./src/app/Pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 65089);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 14948);
/* harmony import */ var _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/Api/Api.service */ 93954);
/* harmony import */ var _Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/Utilities/Toast.service */ 46050);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 59106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 95950);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);














let LoginPage = class LoginPage {
    constructor(apiService, toastService, navCtrl, dataCompanyService, storageService, menuCtrl, router, socket, storage, VTEntrenaApi) {
        this.apiService = apiService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.dataCompanyService = dataCompanyService;
        this.storageService = storageService;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.socket = socket;
        this.storage = storage;
        this.VTEntrenaApi = VTEntrenaApi;
        this.login = {
            user: '',
            password: ''
        };
        this.loginEntrena = {
            login: '',
            password: ''
        };
        this.typeApp = '2';
        this.statusResponse = false;
        this.plt = '';
        this.ext = false;
        this.IPAddres = '';
        /* this.myPlatform.$myplatform.subscribe((plt: any) => {
           this.plt = plt;
         }); */
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false, 'menu');
        this.createdCollections();
        this.VTEntrenaApi.readIP().subscribe((rp) => {
            if (rp.ip) {
                this.IPAddres = rp.ip;
            }
        });
    }
    createdCollections() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Holaaa');
            const login = yield this.storage.get('login');
            const forms = yield this.storage.get('forms');
            const formsActive = yield this.storage.get('formActive');
            const chats = yield this.storage.get('chats');
            if (!login) {
                yield this.storage.set('login', []);
            }
            if (!forms) {
                yield this.storage.set('forms', []);
            }
            if (!formsActive) {
                yield this.storage.set('formActive', []);
            }
            if (!chats) {
                yield this.storage.set('chats', []);
            }
        });
    }
    changeApp(type) {
        if (type === '1' || type === '2') {
            this.typeApp = type;
        }
    }
    changeLogin(event) {
        this.ext = event.detail.checked;
        console.log(event);
    }
    sessionInit() {
        if (this.typeApp === '1') {
            if (this.ext) {
                this.statusResponse = true;
                this.apiService.postLoginExte(this.login).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'error') {
                        this.statusResponse = false;
                        this.toastService.newCreatedToast('No se pudo iniciar sesion, intentelo mas tarde', false);
                    }
                    else if (data.status === 'ok' && data.response === '') {
                        this.statusResponse = false;
                        this.toastService.newCreatedToast('Credenciales Incorrectas, compruebe su informacion', false);
                    }
                    else if (data.status === 'ok' && data.response.length > 0) {
                        this.dataCompanyService.getDataCompany({
                            pathLogoCompany: 'https://s3.amazonaws.com/logocompanies/D0DE636B-6CED-41BB-BA27-6ED7A1AE771D.jpg',
                            nameCompany: 'Visitrack',
                            ext: true
                        });
                        this.socket.emit('login', { ID: data.response[0].login });
                        this.socket.emit('welcomeExt', {
                            CompanyID: data.response[0].idCompany,
                            name: data.response[0].name,
                            login: data.response[0].login,
                            type: 'exter'
                        });
                        if (this.plt === 'web') {
                            this.storageService.insertUser({
                                CompanyID: data.response[0].idCompany,
                                name: data.response[0].name,
                                login: data.response[0].login,
                                type: 'exter',
                                logo: 'https://s3.amazonaws.com/logocompanies/D0DE636B-6CED-41BB-BA27-6ED7A1AE771D.jpg',
                                companyName: 'Visitrack Application'
                            });
                            this.menuCtrl.enable(true, 'menu');
                            this.toastService.newCreatedToast('Iniciando', true).then(() => {
                                this.router.navigate(['/home']);
                            });
                        }
                        console.log(data.response);
                        this.statusResponse = false;
                    }
                }, (err) => {
                    this.statusResponse = false;
                    this.toastService.newCreatedToast(err, true);
                });
            }
            else {
                this.statusResponse = true;
                this.apiService.postLogin(this.login).subscribe((data) => {
                    data = JSON.parse(data);
                    console.log(data);
                    delete data.Password;
                    data.password = this.login.password;
                    data.login = this.login.user;
                    data.name = data.FirstName + ' ' + data.LastName;
                    console.log(data, 'datica');
                    if (typeof data.AccessToken === 'undefined') {
                        console.log('Error ', data.errorMsg);
                        this.statusResponse = false;
                        this.toastService.newCreatedToast(data.errorMsg, false);
                    }
                    else {
                        this.apiService.getUsersCompany({ AccessToken: data.AccessToken }).subscribe((dat) => {
                            dat = JSON.parse(dat);
                            const user = dat[0].filter((item) => {
                                return item.ID === data.UserID;
                            });
                            data.ROLE = user[0].RoleCode;
                            data.type = 'inter';
                            this.socket.emit('login', { ID: data.UserID });
                            this.socket.emit('welcome', data);
                            this.statusResponse = false;
                            this.dataCompanyService.getDataCompany({
                                pathLogoCompany: data.logo,
                                nameCompany: data.companyName,
                                ext: false
                            });
                            if (this.plt === 'web') {
                                this.storageService.insertUser(data);
                                this.menuCtrl.enable(true, 'menu');
                                this.toastService.newCreatedToast('Iniciando', true).then(() => {
                                    this.router.navigate(['/forms']);
                                });
                            }
                        });
                    }
                }, (err) => {
                    this.statusResponse = false;
                    this.toastService.newCreatedToast(err, true);
                });
            }
        }
        else if (this.typeApp === '2') {
            const navegadores = ['Edg', 'Chrome', 'Safari', 'Firefox', 'Opera', 'MSIE', 'Trident'];
            const agente = navigator.userAgent;
            let ready = false;
            let naveName = '';
            navegadores.forEach(nave => {
                if (agente.indexOf(nave) !== -1 && !ready) {
                    naveName = nave;
                    ready = true;
                }
            });
            // tslint:disable-next-line:max-line-length
            this.VTEntrenaApi.loginUser(this.loginEntrena, this.IPAddres, { name: naveName, agent: navigator.userAgent }).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                if (res.status === 'ok') {
                    res.response.typeApp = '2';
                    this.dataCompanyService.getDataCompany({
                        logo: res.response.data.logo,
                        name: res.response.data.name,
                    });
                    this.storageService.insertUser(res.response).then(() => {
                        this.menuCtrl.enable(true, 'menu');
                        this.router.navigate(['/list-my-designs']);
                        this.socket.emit('connectVT', res.response.data);
                        this.dataCompanyService.getVista('3');
                    });
                }
                else {
                    this.toastService.newCreatedToast(`${res.response}`, false);
                }
            }), (error) => {
                this.toastService.newCreatedToast(`Error session ${error}`, false);
            });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_5__.DataComparnyService },
    { type: _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__.StorageWebService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__.Socket },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_6__.ApiEntrenaService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('openClosed', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('500ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
                        opacity: 1,
                        transform: 'scale(1)'
                    }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
                        opacity: 1,
                        transform: 'scale(1)'
                    }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('0ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
                        opacity: 0,
                        transform: 'scale(0)'
                    }))
                ])
            ])
        ],
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 14948:
/*!********************************************************!*\
  !*** ./src/app/Pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".contenedor {\n  width: 100%;\n  max-width: 600px;\n}\n\n.margin {\n  margin: 50px auto;\n}\n\n.contenedor h3 {\n  text-align: center;\n  width: 100%;\n  opacity: 0.5;\n}\n\n.campos {\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  padding: 5px 10px !important;\n  margin-bottom: 10px;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNLLFdBQUE7RUFDQSxnQkFBQTtBQUFMOztBQUlBO0VBQ0ssaUJBQUE7QUFETDs7QUFJQTtFQUNLLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFETDs7QUFLQTtFQUNLLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGTCIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIG1heC13aWR0aDogNjAwcHg7XHJcblxyXG59XHJcblxyXG4ubWFyZ2luIHtcclxuICAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuLmNvbnRlbmVkb3IgaDMge1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBvcGFjaXR5OiAuNTtcclxuXHJcbn1cclxuXHJcbi5jYW1wb3Mge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgIG9wYWNpdHk6IC43O1xyXG59Il19 */";

/***/ }),

/***/ 65089:
/*!********************************************************!*\
  !*** ./src/app/Pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title class=\"center\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div class=\"contenedor margin\">\n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\"> <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"changeApp('1')\">VT WEB</ion-button ></ion-col>\n        <ion-col size=\"6\"> <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"changeApp('2')\">VT ENTRENA</ion-button></ion-col>\n      </ion-row>\n    </ion-grid> -->\n      <div class=\"web\" *ngIf=\"typeApp === '1'\" @openClosed>\n        <h3>Credenciales de Usuario</h3>\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-checkbox slot=\"start\" value=\"\" color=\"primary\" (ionChange)=\"changeLogin( $event )\"></ion-checkbox>\n          <ion-label>Entrar como usuario Externo</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"campos\">\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-input [(ngModel)]=\"login.user\" type=\"text\" placeholder=\"Uusario\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"campos\">\n          <ion-icon slot=\"start\" name=\"lock-closed-outline\"></ion-icon>\n          <ion-input [(ngModel)]=\"login.password\" clearOnEdit=\"false\" type=\"password\" placeholder=\"Contraseñas\"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-grid fixed>\n        <ion-row class=\"ion-margin-bottom\">\n          <ion-col size=\"10\" offset=\"1\">\n            <ion-button (click)=\"sessionInit()\" mode=\"ios\" shape=\"round\" expand=\"block\" color=\"primary\">Login</ion-button>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"statusResponse\">\n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\" class=\"center row\">\n              <ion-spinner name=\"crescent\" color=\"danger\"></ion-spinner>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\" class=\"center row\">\n              <p>Accediendo a la cuenta</p>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n      </div>\n\n\n\n      <div class=\"entrena\" *ngIf=\"typeApp === '2'\" @openClosed>\n        <h3>Credenciales de Usuario</h3>\n      <ion-list>\n        <!-- <ion-item lines=\"none\">\n          <ion-checkbox slot=\"start\" value=\"\" color=\"primary\" (ionChange)=\"changeLogin( $event )\"></ion-checkbox>\n          <ion-label>Traducir al inglés</ion-label>\n        </ion-item> -->\n        <ion-item lines=\"none\" class=\"campos\">\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-input [(ngModel)]=\"loginEntrena.login\" type=\"text\" placeholder=\"Usuario\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"campos\">\n          <ion-icon slot=\"start\" name=\"lock-closed-outline\"></ion-icon>\n          <ion-input [(ngModel)]=\"loginEntrena.password\" clearOnEdit=\"false\" type=\"password\" placeholder=\"Contraseña\"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-grid fixed>\n        <ion-row class=\"ion-margin-bottom\">\n          <ion-col size=\"10\" offset=\"1\">\n            <ion-button (click)=\"sessionInit()\" mode=\"ios\" shape=\"round\" expand=\"block\" color=\"light\">Acceso</ion-button>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"statusResponse\">\n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\" class=\"center row\">\n              <ion-spinner name=\"crescent\" color=\"danger\"></ion-spinner>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col size=\"10\" offset=\"1\" class=\"center row\">\n              <p>Accediendo a la cuenta de entrenamiento</p>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n      </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_login_login_module_ts.js.map