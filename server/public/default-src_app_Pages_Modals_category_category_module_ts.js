"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_Pages_Modals_category_category_module_ts"],{

/***/ 20804:
/*!**********************************************************!*\
  !*** ./src/app/Pages/Modals/category/category.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageModule": () => (/* binding */ CategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page */ 63351);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);







let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_0__.CategoryPage]
    })
], CategoryPageModule);



/***/ }),

/***/ 63351:
/*!********************************************************!*\
  !*** ./src/app/Pages/Modals/category/category.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPage": () => (/* binding */ CategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page.html?ngResource */ 21496);
/* harmony import */ var _category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page.scss?ngResource */ 463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);
/* harmony import */ var src_app_Services_Repository_uploadFile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Repository/uploadFile.service */ 30581);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 64139);












let CategoryPage = class CategoryPage {
    constructor(storage, modalCtrl, apiService, myToast, uploadService) {
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
        this.myToast = myToast;
        this.uploadService = uploadService;
        this.category = {
            name: '',
            description: '',
            company: ''
        };
        this.folders = {
            name: '',
            description: '',
            parent: ''
        };
        this.users = [];
        this.customers = [];
        this.usersSelect = [];
        this.customer = {
            name: '',
            login: '',
            clave: '',
            company: '',
            userID: ''
        };
        this.textFilter = '';
        this.files = [];
        this.count = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.initModal();
        });
    }
    initModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.type === 'permiss') {
                this.usersSelect = this.listPermiss;
                const login = yield this.storage.getLogin();
                if (login) {
                    console.log(login[0]);
                    this.apiService.getCustomersCompany(login[0].CompanyID).subscribe((data) => {
                        if (data.status === 'ok') {
                            if (data.response.length > 0) {
                                data.response.forEach((item) => {
                                    item.ID = item.login;
                                    this.customers.push(item);
                                });
                            }
                            this.customers = data.response;
                        }
                    });
                    this.apiService.getUsersCompany({ AccessToken: login[0].AccessToken }).subscribe((data) => {
                        data = JSON.parse(data);
                        console.log(data);
                        this.users = data[0];
                        this.users = this.users.filter((item) => {
                            return item.ID !== login[0].UserID;
                        });
                    });
                }
            }
            else if (this.type === 'alter') {
                console.log(this.categoryDatAlter, 'iloves');
                this.category.name = this.categoryDatAlter.name;
                this.category.description = this.categoryDatAlter.description;
            }
        });
    }
    selection(event) {
        if (event.detail.checked) {
            this.usersSelect.push(event.detail.value);
        }
        else {
            this.usersSelect = this.usersSelect.filter((item) => item !== event.detail.value);
        }
        console.log(this.usersSelect);
    }
    savePermiss() {
        this.apiService.alterPermiss({ idCategory: this.idCategory, listPermiss: this.usersSelect }).subscribe((data) => {
            console.log(data);
            if (data.status === 'ok') {
                this.myToast.newCreatedToast('Permisos actualizados para esta categoria', true);
            }
            else {
                this.myToast.newCreatedToast('No se pudo actualizar los permisos, intentelo mas tarde', false);
            }
            this.cancelModal();
        });
    }
    filterText(event) {
        this.textFilter = event.detail.value;
    }
    uploadFile(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const Login = yield this.storage.getLogin();
            if (Login) {
                const formData = new FormData();
                formData.append('archivo', file.data);
                file.inProgress = true;
                this.uploadService.upload(formData, Login[0].CompanyID, 'file', this.parentId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((event) => {
                    switch (event.type) {
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpEventType.UploadProgress:
                            file.progress = Math.round(event.loaded * 1 / event.total);
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpEventType.Response:
                            return event;
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)((error) => {
                    file.inProgress = false;
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(`${file.data.name} upload failed.`);
                })).subscribe((event) => {
                    if (typeof (event) === 'object') {
                        console.log(event.body, ' Respuesta');
                        if (event.body.status === 'ok') {
                            this.count--;
                            if (this.count === 0) {
                                this.modalCtrl.dismiss({
                                    status: true,
                                    message: 'Archivo subido con éxito'
                                });
                            }
                        }
                        else {
                            this.modalCtrl.dismiss({
                                status: false
                            });
                        }
                    }
                });
            }
        });
    }
    uploadFiles() {
        this.count = this.files.length;
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
                this.files.push({ data: file, inProgress: false, progress: 0 });
            }
            this.uploadFiles();
        };
        fileUpload.click();
    }
    saveCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const Login = yield this.storage.getLogin();
            if (Login) {
                if (this.type === 'category') {
                    this.category.company = Login[0].CompanyID;
                    this.category.userID = Login[0].type === 'inter' ? Login[0].UserID : Login[0].login;
                    this.category.listPermiss = Login[0].type === 'inter' ? [Login[0].UserID] : [Login[0].login];
                    console.log(this.category);
                    this.apiService.createdCategory(this.category).subscribe((data) => {
                        console.log(data);
                        if (data.status) {
                            this.modalCtrl.dismiss({
                                st: true
                            });
                            this.myToast.newCreatedToast('Categoria creada correctamente ', true);
                        }
                        else {
                            this.myToast.newCreatedToast('Error al crear la categoria ', false);
                        }
                    }, (err) => {
                        this.myToast.newCreatedToast('Error al crear la categoria ', false);
                    });
                }
                else if (this.type === 'alter') {
                    // tslint:disable-next-line:max-line-length
                    this.apiService.alterCategory({ idCategory: this.categoryDatAlter._id, name: this.category.name, description: this.category.description }).subscribe((data) => {
                        console.log(data);
                        if (data.status === 'ok') {
                            this.modalCtrl.dismiss({
                                st: true
                            });
                            this.myToast.newCreatedToast('Categoria editada correctamente ', true);
                        }
                        else {
                            this.myToast.newCreatedToast('No se pudo editar la categoria, intentelo más tarde ', false);
                        }
                    }, (err) => {
                        this.myToast.newCreatedToast('No se pudo editar la categoria, intentelo más tarde ', false);
                    });
                }
            }
        });
    }
    saveFolder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.folders);
            this.folders.parent = this.parentId;
            this.apiService.createdFolder(this.folders).subscribe((data) => {
                console.log(data);
                if (data.status) {
                    this.modalCtrl.dismiss({
                        status: true,
                        message: 'Carpeta creada con éxito'
                    });
                    this.myToast.newCreatedToast('Carpeta creada correctamente ', true);
                }
                else {
                    this.modalCtrl.dismiss({
                        status: false
                    });
                    this.myToast.newCreatedToast('Error al crear la carpeta ', false);
                }
            }, (err) => {
                this.myToast.newCreatedToast('Error al crear la carpeta ', false);
            });
        });
    }
    cancelModal() {
        this.modalCtrl.dismiss({
            status: false
        });
    }
};
CategoryPage.ctorParameters = () => [
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__.StorageWebService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_Services_Repository_uploadFile_service__WEBPACK_IMPORTED_MODULE_5__.UploadFileService }
];
CategoryPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    listPermiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    idCategory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    parentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    categoryDatAlter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    fileUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['fileUpload', { static: false },] }]
};
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-category',
        template: _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryPage);



/***/ }),

/***/ 30581:
/*!***********************************************************!*\
  !*** ./src/app/Services/Repository/uploadFile.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadFileService": () => (/* binding */ UploadFileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let UploadFileService = class UploadFileService {
    constructor(http) {
        this.http = http;
    }
    upload(formData, company, type, parent) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'x-company': company,
                'x-type': type,
                'x-parent': parent
            }),
            reportProgress: true,
            observe: 'events'
        };
        return this.http.post(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/folders`, formData, options);
    }
};
UploadFileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UploadFileService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UploadFileService);



/***/ }),

/***/ 463:
/*!*********************************************************************!*\
  !*** ./src/app/Pages/Modals/category/category.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".campo {\n  width: 100%;\n  padding: 5px 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin-bottom: 10px;\n  border-radius: 10px;\n  background: #f3f3f3;\n}\n\n.myButton {\n  width: 80%;\n  padding: 10px;\n  background: #f1f1f1;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.slides {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n\n.slides ion-slide {\n  display: flex;\n  flex-direction: column;\n}\n\n.slides ion-slide ion-item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0w7O0FBRUE7RUFDSyxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFDTDs7QUFHQTtFQUNLLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBTDs7QUFHQTtFQUNLLGFBQUE7RUFDQSxzQkFBQTtBQUFMOztBQUdBO0VBQ0ssV0FBQTtBQUFMIiwiZmlsZSI6ImNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1wb3tcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbn1cclxuXHJcbi5teUJ1dHRvbntcclxuICAgICB3aWR0aDogODAlO1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uc2xpZGVze1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2xpZGVzIGlvbi1zbGlkZXtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zbGlkZXMgaW9uLXNsaWRlIGlvbi1pdGVte1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */";

/***/ }),

/***/ 21496:
/*!*********************************************************************!*\
  !*** ./src/app/Pages/Modals/category/category.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"danger\">\n    <ion-title>{{ title }}</ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"type === 'file' || type === 'folder'\">\n  <div *ngIf=\"type === 'file'\" style=\"text-align:center; margin-top: 100px; \"><div style=\"margin-top:10px;\">  \n    <div>  \n        <ul>  \n            <li *ngFor=\"let file of files\">  \n                <span id=\"file-label\">  \n                      \n                </span>  \n\n                <ion-progress-bar color=\"primary\" [value]=\"file.progress\"></ion-progress-bar>\n            </li>  \n        </ul>  \n    </div>  \n    <div>  \n        <button class=\"myButton\" (click)=\"onClick()\">  \n            <div>Subir Archivos</div>  \n              \n        </button>  \n    </div>  \n  </div>\n  <input type=\"file\" #fileUpload id=\"fileUpload\" name=\"archivo\" multiple=\"multiple\"  style=\"display:none;\" /></div>\n\n\n  <ion-grid *ngIf=\"type === 'folder'\">\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-input type=\"text\" [(ngModel)]=\"folders.name\" placeholder=\"Nombre de la carpeta\" class=\"campo\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-textarea rows=\"5\" [(ngModel)]=\"folders.description\" placeholder=\"Descripción de la carpeta\" class=\"campo\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" offset=\"1\">\n         <ion-button expand=\"block\" color=\"light\" mode=\"ios\" shapw=\"round\" (click)=\"cancelModal()\">CANCELAR</ion-button>\n      </ion-col>\n      <ion-col size=\"4\" offset=\"1\">\n         <ion-button expand=\"block\" color=\"danger\" mode=\"ios\" shapw=\"round\" (click)=\"saveFolder()\">CREAR</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n\n<ion-content *ngIf=\"type === 'category' || type === 'alter'\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-input type=\"text\" [(ngModel)]=\"category.name\" placeholder=\"Nombre de la categoria\" class=\"campo\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-textarea rows=\"5\" [(ngModel)]=\"category.description\" placeholder=\"Descripción de la categoria\" class=\"campo\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" offset=\"1\">\n         <ion-button expand=\"block\" color=\"light\" mode=\"ios\" shapw=\"round\" (click)=\"cancelModal()\">CANCELAR</ion-button>\n      </ion-col>\n      <ion-col size=\"4\" offset=\"1\">\n         <ion-button expand=\"block\" color=\"danger\" mode=\"ios\" shapw=\"round\" (click)=\"saveCategory()\">CREAR</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<ion-content *ngIf=\"type === 'permiss'\">\n\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-searchbar placeholder=\"Buscar Usuario\" mode=\"ios\" (ionChange)=\"filterText( $event )\"></ion-searchbar>\n    </ion-item>\n    <ion-slides class=\"slides\">\n      <ion-slide>\n        <ion-item-divider color=\"light\"><h4>Usuario de mi empresa</h4></ion-item-divider>\n        <ion-item *ngFor=\"let entry of users | filterUserRepository : textFilter : listPermiss\">\n          <ion-checkbox [checked]=\"entry.checked\" slot=\"start\" value=\"{{entry.ID}}\" (ionChange)=\"selection( $event )\" color=\"danger\"></ion-checkbox>\n          <ion-label>\n            <strong>{{entry.Name}}</strong><br>\n            <p>Brindarle permisos para esta carpeta</p>\n    \n          </ion-label>\n          \n        </ion-item>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-item-divider color=\"light\"><h4>Clientes de mi Empresa</h4></ion-item-divider>\n        <ion-item *ngFor=\"let entry of customers | filterUserRepository : textFilter : listPermiss\">\n          <ion-checkbox [checked]=\"entry.checked\" slot=\"start\" value=\"{{entry.ID}}\" (ionChange)=\"selection( $event )\" color=\"danger\"></ion-checkbox>\n          <ion-label>\n            <strong>{{entry.name}}</strong><br>\n            <p>Brindarle permisos para esta carpeta</p>\n    \n          </ion-label>\n          \n        </ion-item>\n      </ion-slide>\n    </ion-slides>\n  </ion-list>\n</ion-content>\n\n<ion-footer *ngIf=\"type === 'permiss'\">\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"savePermiss()\" >\n        <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  </ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_Pages_Modals_category_category_module_ts.js.map