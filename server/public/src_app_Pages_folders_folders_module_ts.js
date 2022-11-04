"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_folders_folders_module_ts"],{

/***/ 3382:
/*!*********************************************************!*\
  !*** ./src/app/Pages/folders/folders-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoldersPageRoutingModule": () => (/* binding */ FoldersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _folders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folders.page */ 46244);




const routes = [
    {
        path: '',
        component: _folders_page__WEBPACK_IMPORTED_MODULE_0__.FoldersPage
    }
];
let FoldersPageRoutingModule = class FoldersPageRoutingModule {
};
FoldersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FoldersPageRoutingModule);



/***/ }),

/***/ 40472:
/*!*************************************************!*\
  !*** ./src/app/Pages/folders/folders.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoldersPageModule": () => (/* binding */ FoldersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _folders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folders-routing.module */ 3382);
/* harmony import */ var _folders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folders.page */ 46244);
/* harmony import */ var _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/category/category.page */ 63351);
/* harmony import */ var _Modals_category_category_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modals/category/category.module */ 20804);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);










let FoldersPageModule = class FoldersPageModule {
};
FoldersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        entryComponents: [
            _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__.CategoryPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _folders_routing_module__WEBPACK_IMPORTED_MODULE_0__.FoldersPageRoutingModule,
            _Modals_category_category_module__WEBPACK_IMPORTED_MODULE_3__.CategoryPageModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule
        ],
        declarations: [_folders_page__WEBPACK_IMPORTED_MODULE_1__.FoldersPage]
    })
], FoldersPageModule);



/***/ }),

/***/ 46244:
/*!***********************************************!*\
  !*** ./src/app/Pages/folders/folders.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoldersPage": () => (/* binding */ FoldersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _folders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folders.page.html?ngResource */ 76459);
/* harmony import */ var _folders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folders.page.scss?ngResource */ 11706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/category/category.page */ 63351);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);









let FoldersPage = class FoldersPage {
    constructor(modalCtrl, activeRoute, myToast, apiService, router, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.activeRoute = activeRoute;
        this.myToast = myToast;
        this.apiService = apiService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.parentId = '';
        this.children = [];
        this.textFilter = '';
        this.listPath = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.parentId = this.activeRoute.snapshot.paramMap.get('parent');
        if (this.parentId === 'trash') {
            this.listChildren('trash');
        }
        else {
            this.apiService.getPathFolder(this.parentId).subscribe((path) => {
                if (path.status === 'ok') {
                    this.listPath = path.response;
                }
            });
            this.listChildren('');
        }
    }
    addChild(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let title = '';
            if (type === 'file') {
                title = 'Subir Archivos';
            }
            else if (type === 'folder') {
                title = 'Crear Carpeta';
            }
            else if (type === 'keys') {
                title = '¿Quién tiene permisos para esta carpeta?';
            }
            const modal = yield this.modalCtrl.create({
                component: _Modals_category_category_page__WEBPACK_IMPORTED_MODULE_2__.CategoryPage,
                componentProps: {
                    type,
                    title,
                    parentId: this.parentId
                }
            });
            yield modal.present();
            const response = yield modal.onWillDismiss();
            if (response) {
                if (response.data.status) {
                    this.listChildren('');
                    this.myToast.newCreatedToast(response.data.message, true);
                }
                else {
                    this.myToast.newCreatedToast('No se pudo realizar la acción', false);
                }
            }
        });
    }
    listChildren(type) {
        this.apiService.getFolders(this.parentId, type).subscribe((childs) => {
            console.log(childs);
            if (childs.status === 'ok') {
                const files = childs.response.filter((item) => item.typeAction === 'file');
                const folders = childs.response.filter((item) => item.typeAction === 'folder');
                // console.log(files, folders);
                this.children = files;
                folders.forEach((item) => this.children.push(item));
            }
            else {
            }
        }, () => {
            this.myToast.newCreatedToast('No se pudo realizar la acción', false);
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
    download(path, name) {
        console.log(name);
        window.open('http://localhost:3000/download?path=' + path + '&name=' + name, '_self');
    }
    filter(event) {
        this.textFilter = event.detail.value;
    }
    alertDelete(id, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.listData(id);
            if (data) {
                const alert = yield this.alertCtrl.create({
                    header: 'Esta seguro de eliminar esta Carpeta?',
                    message: `Dentro de ella se encuentran ${data.files} archivos y  ${data.folder} carpetas.`,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel'
                        },
                        {
                            text: 'Aceptar',
                            handler: () => {
                                this.deleteChildren(id, type);
                            }
                        }
                    ]
                });
                return yield alert.present();
            }
        });
    }
    deleteChildren(id, type) {
        const msg = type === 'file' ? 'Archivo eliminado del repositorio' : 'Carpeta eliminada del repositorio';
        this.apiService.deletedFolder(id).subscribe((childs) => {
            if (childs.status === 'ok') {
                this.listChildren('');
                this.myToast.newCreatedToast(msg, false);
            }
            else {
                this.myToast.newCreatedToast('No se pudo realizar la acción', false);
            }
        }, () => {
            this.myToast.newCreatedToast('No se pudo realizar la acción', false);
        });
    }
    recoverChildren(id, type) {
        const msg = type === 'file' ? 'Archivo recuperado' : 'Carpeta recuperada';
        console.log(id);
        this.apiService.recoverFolder(id).subscribe((childs) => {
            if (childs.status === 'ok') {
                this.listChildren('trash');
                this.myToast.newCreatedToast(msg, false);
            }
            else {
                this.myToast.newCreatedToast('No se pudo realizar la acción', false);
            }
        }, () => {
            this.myToast.newCreatedToast('No se pudo realizar la acción', false);
        });
    }
    trash() {
        this.router.navigate(['repository/folders/trash']);
    }
    return() {
    }
};
FoldersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
FoldersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-folders',
        template: _folders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_folders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FoldersPage);



/***/ }),

/***/ 11706:
/*!************************************************************!*\
  !*** ./src/app/Pages/folders/folders.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".menssage, .calc {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.menssage h3 {\n  text-align: center;\n  opacity: 0.3;\n}\n\n.calc h4 {\n  opacity: 0.7;\n  margin-left: 15px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nion-list {\n  margin-bottom: 30px;\n}\n\n.navigator {\n  width: 100%;\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ssV0FBQTtFQUNBLG1CQUFBO0FBQUw7O0FBS0E7RUFDSyxrQkFBQTtFQUNBLFlBQUE7QUFGTDs7QUFLQTtFQUNLLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkNBQUE7QUFGTDs7QUFLQTtFQUNLLG1CQUFBO0FBRkw7O0FBS0E7RUFDSyxXQUFBO0VBQ0EsaUJBQUE7QUFGTCIsImZpbGUiOiJmb2xkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWVuc3NhZ2UsIC5jYWxjIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgIFxyXG59XHJcblxyXG5cclxuLm1lbnNzYWdlIGgze1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBvcGFjaXR5OiAuMztcclxufVxyXG5cclxuLmNhbGMgaDR7XHJcbiAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm5hdmlnYXRvciB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 76459:
/*!************************************************************!*\
  !*** ./src/app/Pages/folders/folders.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"repository\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title >Sistema de archivos  <strong *ngIf=\"parentId === 'trash'\">- Papelera</strong></ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"trash()\">\n        <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"navigator\">\n    <ion-chip color=\"medium\" *ngFor=\"let path of listPath; let i = index\" [routerLink]=\"['/repository/folders', path.id]\">{{ path.name }} / </ion-chip>\n  </div>\n  <ion-searchbar mode=\"ios\" (ionChange)=\"filter( $event )\" placeholder=\"Buscar archivos o carpetas\">\n\n  </ion-searchbar>\n\n  <ion-list>\n\n    <div class=\"menssage\" *ngIf=\"children.length === 0\">\n      <h3 *ngIf=\"parentId !== 'trash'\">Aún no tienes archivos en esta carpeta</h3>\n      <h3 *ngIf=\"parentId === 'trash'\">Aún no tienes archivos ni carpetas en la papelera</h3>\n    </div>\n    \n    <div class=\"calc\" *ngIf=\"children.length > 0\">\n      <ion-item-divider class=\"divider\" color=\"light\">\n        <ion-label *ngIf=\"parentId !== 'trash'\">\n          Tienes {{children.length}} archivos en esta carpeta\n        </ion-label>\n\n        <ion-label *ngIf=\"parentId === 'trash'\">\n          Tienes {{children.length}} en la papelera\n        </ion-label>\n        <ion-chip color=\"warning\" slot=\"end\" (click)=\"addChild('keys')\"><ion-icon name=\"key-outline\" slot=\"start\"></ion-icon> Permisos</ion-chip>\n      </ion-item-divider>\n    </div>\n\n    <ion-item-sliding *ngFor=\"let child of children | filterRepository : textFilter\">\n      <ion-item *ngIf=\"child.typeAction === 'file'\">\n        <ion-icon name=\"documents-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <strong *ngIf=\"child.typeAction === 'file'\">{{ child.infoAction.name }}</strong> <br>\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"child.typeAction === 'folder'\" [routerLink]=\"['/repository/folders', child._id]\">\n        <ion-icon name=\"folder\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <strong >{{ child.infoAction.name }}</strong> <br>\n          <p>{{ child.infoAction.description }}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option *ngIf=\"child.typeAction === 'file' && parentId !== 'trash'\" color=\"light\" (click)=\"download(child.infoAction.path, child.infoAction.name)\"><ion-icon name=\"download-outline\" slot=\"icon-only\"></ion-icon></ion-item-option>\n\n        <ion-item-option *ngIf=\"parentId !== 'trash'\" color=\"danger\" (click)=\"alertDelete(child._id, child.typeAction)\"><ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n\n        <ion-item-option *ngIf=\"parentId === 'trash'\" color=\"secondary\" (click)=\"recoverChildren(child._id, child.typeAction)\"><ion-icon name=\"arrow-up-outline\" slot=\"icon-only\"></ion-icon></ion-item-option>\n        \n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab *ngIf=\"parentId !== 'trash'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"danger\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button  color=\"light\" (click)=\"addChild('file')\">\n        <ion-icon name=\"document-attach-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button  color=\"light\" (click)=\"addChild('folder')\">\n        <ion-icon name=\"folder-outline\"></ion-icon>\n      </ion-fab-button> \n    </ion-fab-list>\n   \n  </ion-fab>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_folders_folders_module_ts.js.map