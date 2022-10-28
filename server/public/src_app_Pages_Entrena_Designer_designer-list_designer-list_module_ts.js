"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_Entrena_Designer_designer-list_designer-list_module_ts"],{

/***/ 8117:
/*!**************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer-list/designer-list-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerListPageRoutingModule": () => (/* binding */ DesignerListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _designer_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer-list.page */ 5510);




const routes = [
    {
        path: '',
        component: _designer_list_page__WEBPACK_IMPORTED_MODULE_0__.DesignerListPage
    }
];
let DesignerListPageRoutingModule = class DesignerListPageRoutingModule {
};
DesignerListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DesignerListPageRoutingModule);



/***/ }),

/***/ 7653:
/*!******************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer-list/designer-list.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerListPageModule": () => (/* binding */ DesignerListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _designer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer-list-routing.module */ 8117);
/* harmony import */ var _designer_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer-list.page */ 5510);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 1000);








let DesignerListPageModule = class DesignerListPageModule {
};
DesignerListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _designer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.DesignerListPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_designer_list_page__WEBPACK_IMPORTED_MODULE_1__.DesignerListPage]
    })
], DesignerListPageModule);



/***/ }),

/***/ 5510:
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer-list/designer-list.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerListPage": () => (/* binding */ DesignerListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _designer_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer-list.page.html?ngResource */ 4469);
/* harmony import */ var _designer_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer-list.page.scss?ngResource */ 1154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 6061);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 5829);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 6050);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 9106);










let DesignerListPage = class DesignerListPage {
    constructor(router, apiEntrena, storage, toasCtrl, alertCtrl, dataCompany) {
        this.router = router;
        this.apiEntrena = apiEntrena;
        this.storage = storage;
        this.toasCtrl = toasCtrl;
        this.alertCtrl = alertCtrl;
        this.dataCompany = dataCompany;
        this.listDesigner = [];
        this.text = '';
        this.color = '';
        this.dataCompany.$color.subscribe((color) => {
            this.color = color;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.ListDesigners();
    }
    ListDesigners() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                const id = login[0].data.role === 'USER_ENTRENA' ? login[0].data.parentAdmin : '';
                this.apiEntrena.readDesignersAll(login[0].token, id).subscribe((data) => {
                    if (data.status === 'ok') {
                        this.listDesigner = data.response;
                    }
                    else {
                        this.toasCtrl.newCreatedToast('Could not create design, please try again later', false);
                    }
                }, (error) => {
                    this.toasCtrl.newCreatedToast('Could not create design, please try again later', false);
                });
            }
        });
    }
    newDesigner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.apiEntrena.createDesigner(login[0].token).subscribe((data) => {
                    if (data.status === 'ok') {
                        this.router.navigate(['/designer', data.response._id]);
                    }
                    else {
                        this.toasCtrl.newCreatedToast('Could not create design, please try again later', false);
                    }
                }, (error) => {
                    this.toasCtrl.newCreatedToast('Could not create design, please try again later', false);
                });
            }
        });
    }
    deleteDesign(design) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Esta seguro de eliminar este diseño ?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                    {
                        text: 'Aceptar',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            const login = yield this.storage.getLogin();
                            if (login) {
                                this.apiEntrena.deleteDesigner(login[0].token, design._id).subscribe((data) => {
                                    console.log(data, 'eliminando');
                                    if (data.status === 'ok') {
                                        this.toasCtrl.newCreatedToast('Modulo eliminado de la lista', true);
                                        this.ListDesigners();
                                    }
                                    else {
                                        this.toasCtrl.newCreatedToast('No se pudo eliminar el modulo, intentelo mas tarde', false);
                                    }
                                }, (error) => {
                                    this.toasCtrl.newCreatedToast('No se pudo eliminar el modulo, intentelo mas tarde', false);
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    changeText(event) {
        this.text = event.detail.value;
    }
};
DesignerListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__.StorageWebService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_5__.DataComparnyService }
];
DesignerListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-designer-list',
        template: _designer_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_designer_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DesignerListPage);



/***/ }),

/***/ 1154:
/*!*****************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer-list/designer-list.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNpZ25lci1saXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4469:
/*!*****************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer-list/designer-list.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar [color]=\"color\">\n    <ion-title>Designer List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar mode=\"ios\" placeholder=\"Buscar Modulo\" (ionChange)=\"changeText( $event )\"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let mydesign of listDesigner | search : text : 'name'\">\n     <ion-item [routerLink]=\"['/designer', mydesign._id]\" >\n       <ion-label>\n         <strong>{{ mydesign.name }}</strong><br>\n         <strong>Creado: </strong> {{ mydesign.dateCreated }}\n       </ion-label>\n     </ion-item>\n     <ion-item-options side=\"end\">\n \n       <ion-item-option [color]=\"color\" (click)=\"deleteDesign(mydesign)\">\n         <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n       </ion-item-option>\n \n     </ion-item-options>\n    </ion-item-sliding>\n   </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [color]=\"color\" (click)=\"newDesigner()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Entrena_Designer_designer-list_designer-list_module_ts.js.map