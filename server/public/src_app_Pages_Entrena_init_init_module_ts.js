"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_Entrena_init_init_module_ts"],{

/***/ 1425:
/*!***********************************************************!*\
  !*** ./src/app/Pages/Entrena/init/init-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitPageRoutingModule": () => (/* binding */ InitPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _init_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.page */ 3673);




const routes = [
    {
        path: '',
        component: _init_page__WEBPACK_IMPORTED_MODULE_0__.InitPage
    }
];
let InitPageRoutingModule = class InitPageRoutingModule {
};
InitPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InitPageRoutingModule);



/***/ }),

/***/ 5620:
/*!***************************************************!*\
  !*** ./src/app/Pages/Entrena/init/init.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitPageModule": () => (/* binding */ InitPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _init_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-routing.module */ 1425);
/* harmony import */ var _init_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.page */ 3673);







let InitPageModule = class InitPageModule {
};
InitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _init_routing_module__WEBPACK_IMPORTED_MODULE_0__.InitPageRoutingModule
        ],
        declarations: [_init_page__WEBPACK_IMPORTED_MODULE_1__.InitPage]
    })
], InitPageModule);



/***/ }),

/***/ 3673:
/*!*************************************************!*\
  !*** ./src/app/Pages/Entrena/init/init.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitPage": () => (/* binding */ InitPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _init_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.page.html?ngResource */ 3244);
/* harmony import */ var _init_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.page.scss?ngResource */ 7036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let InitPage = class InitPage {
    constructor() { }
    ngOnInit() {
    }
};
InitPage.ctorParameters = () => [];
InitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-init',
        template: _init_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_init_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InitPage);



/***/ }),

/***/ 7036:
/*!**************************************************************!*\
  !*** ./src/app/Pages/Entrena/init/init.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbml0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3244:
/*!**************************************************************!*\
  !*** ./src/app/Pages/Entrena/init/init.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>INICIO DE ENTRENA </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid></ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Entrena_init_init_module_ts.js.map