"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_Entrena_Designer_list-my-designs_list-my-designs_module_ts"],{

/***/ 16353:
/*!******************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/list-my-designs/list-my-designs-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListMyDesignsPageRoutingModule": () => (/* binding */ ListMyDesignsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _list_my_designs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-my-designs.page */ 45877);




const routes = [
    {
        path: '',
        component: _list_my_designs_page__WEBPACK_IMPORTED_MODULE_0__.ListMyDesignsPage
    }
];
let ListMyDesignsPageRoutingModule = class ListMyDesignsPageRoutingModule {
};
ListMyDesignsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListMyDesignsPageRoutingModule);



/***/ }),

/***/ 994:
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/list-my-designs/list-my-designs.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListMyDesignsPageModule": () => (/* binding */ ListMyDesignsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _list_my_designs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-my-designs-routing.module */ 16353);
/* harmony import */ var _list_my_designs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-my-designs.page */ 45877);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let ListMyDesignsPageModule = class ListMyDesignsPageModule {
};
ListMyDesignsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _list_my_designs_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListMyDesignsPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_list_my_designs_page__WEBPACK_IMPORTED_MODULE_1__.ListMyDesignsPage]
    })
], ListMyDesignsPageModule);



/***/ }),

/***/ 45877:
/*!********************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/list-my-designs/list-my-designs.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListMyDesignsPage": () => (/* binding */ ListMyDesignsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _list_my_designs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-my-designs.page.html?ngResource */ 51431);
/* harmony import */ var _list_my_designs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-my-designs.page.scss?ngResource */ 83097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 59106);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);









let ListMyDesignsPage = class ListMyDesignsPage {
    constructor(router, apiEntrena, storage, toasCtrl, dataCompany) {
        this.router = router;
        this.apiEntrena = apiEntrena;
        this.storage = storage;
        this.toasCtrl = toasCtrl;
        this.dataCompany = dataCompany;
        this.listDesigner = [];
        this.role = '';
        this.text = '';
        this.color = '';
        this.dataCompany.$color.subscribe((color) => {
            this.color = color;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.ListDesigners();
            const login = yield this.storage.getLogin();
            ;
            if (login) {
                this.loadDataMenu(login[0]);
            }
        });
    }
    loadDataMenu(login) {
        let user = '';
        if (login.data.role === 'USER_ENTRENA') {
            user = login.data.parentAdmin;
        }
        else {
            user = login.data._id;
        }
        this.apiEntrena.preferencesLoad({ user }, login.token).subscribe((data) => {
            console.log(data, 'hola diseños');
            if (data.status === 'ok') {
                if (data.response) {
                    const theme = data.response.theme ? data.response.theme : 'light';
                    this.dataCompany.setColor(theme);
                    this.dataCompany.getDataCompany({
                        logo: data.response.logo ? data.response.logo : 'https://s3.amazonaws.com/logocompanies/D0DE636B-6CED-41BB-BA27-6ED7A1AE771D.jpg',
                        name: data.response.nameCompany ? data.response.nameCompany : 'VTEntrena Application'
                    });
                }
            }
        }, (err) => {
            this.dataCompany.getDataCompany({
                logo: '',
                name: 'VTEntrena Application'
            });
        });
    }
    reload() {
        this.ListDesigners();
    }
    ListDesigners() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                const id = login[0].data.role === 'USER_ENTRENA' ? login[0].data.parentAdmin : '';
                console.log(id, 'id');
                this.role = login[0].data.role;
                this.apiEntrena.readDesignersAll(login[0].token, id).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'ok') {
                        this.listDesigner = data.response;
                    }
                    else {
                        this.toasCtrl.newCreatedToast('Could not list design, please try again later', false);
                    }
                }, (error) => {
                    this.toasCtrl.newCreatedToast('Could not list design, please try again later', false);
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
    changeText(event) {
        this.text = event.detail.value;
    }
};
ListMyDesignsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__.StorageWebService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__.DataComparnyService }
];
ListMyDesignsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-list-my-designs',
        template: _list_my_designs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_my_designs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListMyDesignsPage);



/***/ }),

/***/ 83097:
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/list-my-designs/list-my-designs.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW15LWRlc2lnbnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 51431:
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/list-my-designs/list-my-designs.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar [color]=\"color\">\n    <ion-title>Listado de Módulos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"reload()\">\n        <ion-icon name=\"reload-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar mode=\"ios\" placeholder=\"Buscar Módulo\" (ionChange)=\"changeText( $event )\"></ion-searchbar>\n  <ion-list>\n     <ion-item-sliding *ngFor=\"let mydesign of listDesigner | search : text : 'name'\">\n      <ion-item  [routerLink]=\"['/view-design', mydesign._id]\">\n        <ion-icon name=\"library-outline\" slot=\"start\"></ion-icon>\n         <ion-label>\n           <strong>{{ mydesign.name }}</strong><br>\n           <strong>Creado: </strong> {{ mydesign.dateCreated }}\n         </ion-label>\n       </ion-item>\n\n       <ion-item-options side=\"end\">\n         <ion-item-option [color]=\"color\" [routerLink]=\"['/list-my-designs/comments', mydesign._id]\">\n           <ion-icon name=\"calendar\" slot=\"icon-only\"></ion-icon>\n         </ion-item-option>\n       </ion-item-options>\n     </ion-item-sliding>\n    \n   </ion-list>\n\n  <!-- <ion-fab *ngIf=\"role === 'ADMIN_ENTRENA'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" (click)=\"newDesigner()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Entrena_Designer_list-my-designs_list-my-designs_module_ts.js.map