"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_Entrena_preferences_preferences_module_ts"],{

/***/ 56830:
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Entrena/preferences/preferences-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesPageRoutingModule": () => (/* binding */ PreferencesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _preferences_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferences.page */ 31321);




const routes = [
    {
        path: '',
        component: _preferences_page__WEBPACK_IMPORTED_MODULE_0__.PreferencesPage
    }
];
let PreferencesPageRoutingModule = class PreferencesPageRoutingModule {
};
PreferencesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreferencesPageRoutingModule);



/***/ }),

/***/ 31714:
/*!*****************************************************************!*\
  !*** ./src/app/Pages/Entrena/preferences/preferences.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesPageModule": () => (/* binding */ PreferencesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _preferences_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferences-routing.module */ 56830);
/* harmony import */ var _preferences_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferences.page */ 31321);







let PreferencesPageModule = class PreferencesPageModule {
};
PreferencesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _preferences_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreferencesPageRoutingModule
        ],
        declarations: [_preferences_page__WEBPACK_IMPORTED_MODULE_1__.PreferencesPage]
    })
], PreferencesPageModule);



/***/ }),

/***/ 31321:
/*!***************************************************************!*\
  !*** ./src/app/Pages/Entrena/preferences/preferences.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesPage": () => (/* binding */ PreferencesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _preferences_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferences.page.html?ngResource */ 64077);
/* harmony import */ var _preferences_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferences.page.scss?ngResource */ 58096);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 59106);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment.prod */ 89019);













let PreferencesPage = class PreferencesPage {
    constructor(modalCtrl, storage, apiEntrena, toasCtrl, dtacompany) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.apiEntrena = apiEntrena;
        this.toasCtrl = toasCtrl;
        this.dtacompany = dtacompany;
        this.files = [];
        this.filesRendering = [];
        this.values = {
            src: '',
            mime: '',
            name: ''
        };
        this.logo = '';
        this.name = '';
        this.theme = '';
        this.dtacompany.$color.subscribe((color) => {
            this.theme = color;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loadDataMenu();
    }
    loadDataMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.apiEntrena.preferencesLoad({ user: login[0].data._id }, login[0].token).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'ok') {
                        this.logo = data.response.logo ? 'https://www.vtentrena.com/' + data.response.logo : '';
                        this.name = data.response.nameCompany ? data.response.nameCompany : 'VTEntrena Application';
                        this.theme = data.response.theme ? data.response.theme : 'light';
                    }
                    else {
                        this.logo = '';
                        this.name = 'VTEntrena Application';
                        this.theme = 'light';
                    }
                }, (err) => {
                    this.logo = '';
                    this.name = 'VTEntrena Application';
                    this.theme = 'light';
                });
            }
        });
    }
    uploadFile(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const Login = yield this.storage.getLogin();
            if (Login) {
                const formData = new FormData();
                formData.append('file', file.data);
                file.inProgress = true;
                console.log(Login);
                this.apiEntrena.uploadPreference(formData, Login[0].token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((event) => {
                    console.log('Holaa');
                    switch (event.type) {
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpEventType.UploadProgress:
                            file.progress = Math.round(event.loaded * 1 / event.total);
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpEventType.Response:
                            return event;
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)((error) => {
                    file.inProgress = false;
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(`${file.data.name} upload failed.`);
                })).subscribe((event) => {
                    if (typeof (event) === 'object') {
                        console.log(event.body, ' Respuesta');
                        if (event.body.status === 'ok') {
                            this.logo = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environments.URL_NODE + '/' + event.body.response.logo;
                            this.dtacompany.getDataCompany({
                                logo: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environments.URL_NODE + '/uploads/Perfiles/' + event.body.response.logo,
                                name: event.body.response.nameCompany ? event.body.response.nameCompany : 'VTEntrena Application'
                            });
                            this.files = [];
                        }
                        else {
                            this.toasCtrl.newCreatedToast('Upload failed', false);
                        }
                    }
                });
            }
        });
    }
    uploadFiles() {
        this.fileUpload.nativeElement.value = '';
        this.files.forEach(file => {
            this.uploadFile(file);
        });
    }
    onClick() {
        const fileUpload = this.fileUpload.nativeElement;
        fileUpload.onchange = () => {
            // tslint:disable-next-line:prefer-for-of
            for (let index = 0; index < fileUpload.files.length; index++) {
                const file = fileUpload.files[index];
                console.log(file, file.name);
                this.files.push({ data: file, inProgress: false, progress: 0 });
            }
        };
        fileUpload.click();
    }
    deletedFile() {
        this.files = [];
    }
    changeTheme(event) {
        this.theme = event.detail.value;
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.apiEntrena.preferences({ name: this.name, theme: this.theme }, login[0].token).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'ok') {
                        this.toasCtrl.newCreatedToast('Datos Actualizados', true);
                        this.name = data.response.nameCompany ? data.response.nameCompany : 'VTEntrena Application';
                        this.theme = data.response.theme ? data.response.theme : 'light';
                        this.dtacompany.getDataCompany({
                            //logo: 'https://www.vtentrena.com/' + data.response.logo,
                            name: data.response.nameCompany ? data.response.nameCompany : 'VTEntrena Application'
                        });
                        this.dtacompany.setColor(this.theme);
                    }
                    else {
                        this.toasCtrl.newCreatedToast('No se pudo actualizar la información', false);
                        this.theme = 'light';
                        this.name = 'VTEntrena Application';
                    }
                }, (err) => {
                    this.toasCtrl.newCreatedToast('No se pudo actualizar la información', false);
                    this.theme = 'light';
                    this.name = 'VTEntrena Application';
                });
            }
        });
    }
};
PreferencesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__.StorageWebService },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__.DataComparnyService }
];
PreferencesPage.propDecorators = {
    fileUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['fileUpload', { static: false },] }]
};
PreferencesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-preferences',
        template: _preferences_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_preferences_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreferencesPage);



/***/ }),

/***/ 58096:
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Entrena/preferences/preferences.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".img {\n  width: 100%;\n  max-width: 500px;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZlcmVuY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUFMIiwiZmlsZSI6InByZWZlcmVuY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 64077:
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Entrena/preferences/preferences.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar [color]=\"theme\">\n        <ion-title>Preferencias</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!--\n    <ion-item-divider color=\"light\">\n        <ion-label><strong>Foto de Empresa</strong>\n        </ion-label>\n    </ion-item-divider>\n  \n    <div>\n        <div style=\"margin-top:10px;\">\n\n            <img *ngIf=\"logo !== ''\" [src]=\"logo\" class=\"img\" alt=\"\">\n\n\n\n\n            <ion-list *ngFor=\"let file of files\">\n                <ion-item-divider color=\"warning\"></ion-item-divider>\n                <ion-item class=\"marginBottom\">\n                    <ion-label><strong>Actualizar imagen por:</strong> <br> {{file.data.name}} - {{file.data.type}}\n                    </ion-label>\n                    <ion-buttons slot=\"end\">\n                        <ion-button (click)=\"deletedFile()\">\n                            <ion-icon name=\"trash\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                </ion-item>\n            </ion-list>\n            <div style=\"display: none;\">\n                <ion-button *ngIf=\"files.length === 0\" class=\"myButton\" mode=\"ios\" color=\"tertiary\" (click)=\"onClick()\">\n                    <div>Cargar Imagen</div>\n\n                </ion-button>\n\n                <ion-button *ngIf=\"files.length > 0\" class=\"myButton\" mode=\"ios\" color=\"success\" (click)=\"uploadFiles()\">\n                    <div>Actualizar Foto Empresa</div>\n\n                </ion-button>\n            </div>\n\n\n        </div>\n        <input type=\"file\" #fileUpload id=\"fileUpload\" name=\"file\" accept=\"image/*\" multiple=\"false\" style=\"display:none;\" /></div>\n      -->\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label><strong>Información</strong>\n            </ion-label>\n        </ion-item-divider>\n\n        <ion-item-divider class=\"marginBottom\">\n            <ion-label><strong>Nombre de Empresa</strong>\n            </ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"name\">\n            </ion-input>\n        </ion-item-divider>\n\n        <ion-item class=\"marginBottom\">\n            <ion-label><strong>Tema Color</strong>\n            </ion-label>\n            <ion-select value=\"Rojo\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"changeTheme($event)\">\n                <ion-select-option value=\"danger\">Rojo</ion-select-option>\n                <ion-select-option value=\"success\">Verde</ion-select-option>\n                <ion-select-option value=\"warning\">Amarillo</ion-select-option>\n                <ion-select-option value=\"primary\">Azul</ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n    <ion-button class=\"myButton\" expand=\"block\" mode=\"ios\" color=\"light\" (click)=\"save()\">\n        <div>Guardar Cambios</div>\n\n    </ion-button>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Entrena_preferences_preferences_module_ts.js.map