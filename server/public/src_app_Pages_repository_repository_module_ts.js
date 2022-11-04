"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_repository_repository_module_ts"],{

/***/ 45330:
/*!***************************************************************!*\
  !*** ./src/app/Pages/repository/repository-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepositoryPageRoutingModule": () => (/* binding */ RepositoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _repository_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repository.page */ 8485);




const routes = [
    {
        path: '',
        component: _repository_page__WEBPACK_IMPORTED_MODULE_0__.RepositoryPage,
    }
];
let RepositoryPageRoutingModule = class RepositoryPageRoutingModule {
};
RepositoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RepositoryPageRoutingModule);



/***/ }),

/***/ 36890:
/*!*******************************************************!*\
  !*** ./src/app/Pages/repository/repository.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepositoryPageModule": () => (/* binding */ RepositoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _repository_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repository-routing.module */ 45330);
/* harmony import */ var _repository_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository.page */ 8485);
/* harmony import */ var _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/category/category.page */ 63351);
/* harmony import */ var _Modals_category_category_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modals/category/category.module */ 20804);









let RepositoryPageModule = class RepositoryPageModule {
};
RepositoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        entryComponents: [
            _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__.CategoryPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _Modals_category_category_module__WEBPACK_IMPORTED_MODULE_3__.CategoryPageModule,
            _repository_routing_module__WEBPACK_IMPORTED_MODULE_0__.RepositoryPageRoutingModule
        ],
        declarations: [_repository_page__WEBPACK_IMPORTED_MODULE_1__.RepositoryPage]
    })
], RepositoryPageModule);



/***/ }),

/***/ 8485:
/*!*****************************************************!*\
  !*** ./src/app/Pages/repository/repository.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepositoryPage": () => (/* binding */ RepositoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _repository_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repository.page.html?ngResource */ 1314);
/* harmony import */ var _repository_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository.page.scss?ngResource */ 27853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/category/category.page */ 63351);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);








let RepositoryPage = class RepositoryPage {
    constructor(modalCtrl, apiService, storage, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.listMyCategories = [];
        this.userID = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.listCategories();
    }
    listCategories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const Login = yield this.storage.getLogin();
            console.log(Login);
            if (Login) {
                const userID = Login[0].type === 'exter' ? Login[0].login : Login[0].UserID;
                this.userID = userID;
                this.apiService.getCategory(Login[0].CompanyID, userID).subscribe((resp) => {
                    console.log(resp);
                    if (resp.status) {
                        this.listMyCategories = resp.response;
                    }
                });
            }
        });
    }
    alterCategory(category) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__.CategoryPage,
                componentProps: {
                    type: 'alter',
                    categoryDatAlter: category,
                    title: 'Editar Categoria'
                }
            });
            yield modal.present();
            const i = yield modal.onWillDismiss();
            if (i) {
                this.listCategories();
            }
        });
    }
    deletedCategorie(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.listData(id);
            if (data) {
                const alert = yield this.alertCtrl.create({
                    header: 'Esta seguro de eliminar esta categoria?',
                    message: `Dentro de ella se encuentran ${data.files} archivos y  ${data.folder} carpetas.`,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel'
                        },
                        {
                            text: 'Aceptar',
                            handler: () => {
                                this.apiService.deletedCategory(id).subscribe((resp) => {
                                    if (resp.status) {
                                        this.listMyCategories = this.listMyCategories.filter((item) => {
                                            return item._id !== id;
                                        });
                                    }
                                });
                            }
                        }
                    ]
                });
                return yield alert.present();
            }
        });
    }
    permiss(categoryID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('click');
            const category = this.listMyCategories.filter((item) => item._id === categoryID);
            const modal = yield this.modalCtrl.create({
                component: _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__.CategoryPage,
                componentProps: {
                    type: 'permiss',
                    listPermiss: category[0].permiss,
                    idCategory: categoryID,
                    title: 'Administrar Permisos'
                }
            });
            yield modal.present();
            const i = yield modal.onWillDismiss();
            if (i) {
                this.listCategories();
            }
        });
    }
    listData(id) {
        return new Promise((resolve, reject) => {
            this.apiService.getFolders(id, '').subscribe((res) => {
                if (res.status === 'ok') {
                    resolve({
                        files: res.response.filter((item) => item.typeAction === 'file').length,
                        folder: res.response.filter((item) => item.typeAction === 'folder').length
                    });
                }
                else {
                    reject({
                        error: res.err
                    });
                }
            });
        });
    }
    addCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__.CategoryPage,
                componentProps: {
                    type: 'category',
                    title: 'Crear Categoria'
                }
            });
            yield modal.present();
            const retu = yield modal.onWillDismiss();
            if (retu) {
                console.log(retu, 'OK');
                if (retu.data.st) {
                    this.listCategories();
                }
            }
            else {
                console.log('ERROR');
            }
        });
    }
};
RepositoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__.StorageWebService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
RepositoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-repository',
        template: _repository_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_repository_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RepositoryPage);



/***/ }),

/***/ 27853:
/*!******************************************************************!*\
  !*** ./src/app/Pages/repository/repository.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-item-sliding {\n  touch-action: manipulation;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssMEJBQUE7QUFDTCIsImZpbGUiOiJyZXBvc2l0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLXNsaWRpbmd7XHJcbiAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1314:
/*!******************************************************************!*\
  !*** ./src/app/Pages/repository/repository.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Mi Repositorio</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"listCategories()\">\n        <ion-icon name=\"reload\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    <div class=\"calc\" *ngIf=\"listMyCategories.length > 0\">\n      <ion-item-divider color=\"light\">\n        <ion-label>\n          Tienes {{listMyCategories.length}} categorias en tú repositorio\n        </ion-label>\n      </ion-item-divider>\n    </div>\n\n    <ion-item-sliding *ngFor=\"let category of listMyCategories\">\n      <ion-item [routerLink]=\"['folders', category._id]\">\n        <ion-icon name=\"folder\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <strong>{{ category.name }}</strong> <br>\n          <p>{{ category.description }}</p>\n          <strong>Creada el día {{ category.dateCreated }}</strong> <br>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option *ngIf=\"category.userID === userID\" color=\"medium\" (click)=\"alterCategory(category)\"><ion-icon name=\"pencil\" slot=\"icon-only\"></ion-icon></ion-item-option>\n        <ion-item-option *ngIf=\"category.userID === userID\" color=\"warning\" (click)=\"permiss(category._id)\"><ion-icon name=\"key\" slot=\"icon-only\"></ion-icon></ion-item-option>\n        <ion-item-option *ngIf=\"category.userID === userID\" color=\"danger\" (click)=\"deletedCategorie(category._id)\"><ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" (click)=\"addCategory()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_repository_repository_module_ts.js.map