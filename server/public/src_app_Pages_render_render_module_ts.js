"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_render_render_module_ts"],{

/***/ 47344:
/*!*******************************************************!*\
  !*** ./src/app/Pages/render/render-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPageRoutingModule": () => (/* binding */ RenderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _render_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.page */ 30370);




const routes = [
    {
        path: '',
        component: _render_page__WEBPACK_IMPORTED_MODULE_0__.RenderPage
    }
];
let RenderPageRoutingModule = class RenderPageRoutingModule {
};
RenderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RenderPageRoutingModule);



/***/ }),

/***/ 90673:
/*!***********************************************!*\
  !*** ./src/app/Pages/render/render.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPageModule": () => (/* binding */ RenderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _render_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-routing.module */ 47344);
/* harmony import */ var _render_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.page */ 30370);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let RenderPageModule = class RenderPageModule {
};
RenderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _render_routing_module__WEBPACK_IMPORTED_MODULE_0__.RenderPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_render_page__WEBPACK_IMPORTED_MODULE_1__.RenderPage]
    })
], RenderPageModule);



/***/ }),

/***/ 30370:
/*!*********************************************!*\
  !*** ./src/app/Pages/render/render.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPage": () => (/* binding */ RenderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _render_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.page.html?ngResource */ 42965);
/* harmony import */ var _render_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.page.scss?ngResource */ 90993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let RenderPage = class RenderPage {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
        this.Value = '';
        this.Entity = '4';
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            // console.log(params);
            this.EntityID = params.entityid;
            this.Value = params.value;
            this.Entity = params.entity;
        });
    }
};
RenderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
RenderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-render',
        template: _render_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_render_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RenderPage);



/***/ }),

/***/ 90993:
/*!**********************************************************!*\
  !*** ./src/app/Pages/render/render.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW5kZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 42965:
/*!**********************************************************!*\
  !*** ./src/app/Pages/render/render.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<app-forms [Entity]=\"Entity\" [Value]=\"Value\" [EntityID]=\"EntityID\"></app-forms>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_render_render_module_ts.js.map