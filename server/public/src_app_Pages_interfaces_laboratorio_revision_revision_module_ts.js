"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_laboratorio_revision_revision_module_ts"],{

/***/ 42345:
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/laboratorio/revision/revision-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RevisionPageRoutingModule": () => (/* binding */ RevisionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _revision_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revision.page */ 5187);




const routes = [
    {
        path: '',
        component: _revision_page__WEBPACK_IMPORTED_MODULE_0__.RevisionPage
    }
];
let RevisionPageRoutingModule = class RevisionPageRoutingModule {
};
RevisionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RevisionPageRoutingModule);



/***/ }),

/***/ 66821:
/*!**************************************************************************!*\
  !*** ./src/app/Pages/interfaces/laboratorio/revision/revision.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RevisionPageModule": () => (/* binding */ RevisionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _revision_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revision-routing.module */ 42345);
/* harmony import */ var _revision_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revision.page */ 5187);







let RevisionPageModule = class RevisionPageModule {
};
RevisionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _revision_routing_module__WEBPACK_IMPORTED_MODULE_0__.RevisionPageRoutingModule
        ],
        declarations: [_revision_page__WEBPACK_IMPORTED_MODULE_1__.RevisionPage]
    })
], RevisionPageModule);



/***/ }),

/***/ 5187:
/*!************************************************************************!*\
  !*** ./src/app/Pages/interfaces/laboratorio/revision/revision.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RevisionPage": () => (/* binding */ RevisionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _revision_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revision.page.html?ngResource */ 4865);
/* harmony import */ var _revision_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revision.page.scss?ngResource */ 47526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);








let RevisionPage = class RevisionPage {
    constructor(menuCtrl, api, modalCtrl, route) {
        this.menuCtrl = menuCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.activitiesList = [];
        this.load = false;
        this.txt = '';
        this.temp = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false, 'menu');
        this.route.queryParams.subscribe((param) => {
            console.log(param);
            this.tkn = param.accesstoken;
            this.getActivities();
        });
    }
    getData(guid) {
        return new Promise((resolve, reject) => {
            this.api.getActivitieInfo(this.tkn, guid).subscribe((data) => {
                console.log(data, 'DATA');
                resolve(data);
            });
        });
    }
    getActivities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.api.getActivities2(this.tkn, moment__WEBPACK_IMPORTED_MODULE_2__().subtract(3, 'months').format('YYYY-MM-DD HH:mm'), moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD HH:mm'), 'HWWbijhSJH').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(data);
                //data = data.filter((it) => it.CompanyStatusName == 'CREADO')
                if (!data) {
                    this.load = true;
                    return;
                }
                if (data.length == 0) {
                    this.load = true;
                    return;
                }
                for (const item of data) {
                    const response = yield this.getData(item.GUID);
                    if (response) {
                        this.activitiesList.push(response);
                    }
                    this.load = true;
                }
                this.temp = this.activitiesList;
                console.log(this.activitiesList);
            }), (err) => this.load = true);
        });
    }
};
RevisionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
RevisionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-revision',
        template: _revision_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_revision_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RevisionPage);



/***/ }),

/***/ 47526:
/*!*************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/laboratorio/revision/revision.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".main {\n  width: 100%;\n}\n.main .buscar {\n  width: 40%;\n  margin: 0;\n}\n.main .campo {\n  width: 100%;\n  background-color: #f1f1f1;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 0;\n  height: 50px;\n  border-radius: 20px;\n}\n.main .tarjetas {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.main .tarjetas ion-card {\n  padding: 10px;\n  background-color: #F3F0F8;\n  width: calc(25% - 20px);\n  margin: 10px;\n}\n.main .tarjetas ion-card ion-card-title {\n  font-size: 22px;\n}\n.main .tarjetas ion-card ion-card-content {\n  font-size: 16px;\n}\n.titulo {\n  background-color: #f1f1f1;\n  padding: 10px;\n}\n.item {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n.flex img {\n  height: 100px;\n}\n.separador {\n  margin: 10px 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n@media screen and (max-width: 1200px) {\n  .main .tarjetas {\n    width: 100%;\n  }\n  .main .tarjetas ion-card {\n    width: calc(33.33% - 20px);\n    margin: 10px;\n  }\n  .main .tarjetas ion-card ion-card-title {\n    font-size: 22px;\n  }\n  .main .tarjetas ion-card ion-card-content {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 900px) {\n  .main ion-grid {\n    width: 100%;\n  }\n  .main .tarjetas {\n    width: 100%;\n  }\n  .main .tarjetas ion-card {\n    width: calc(50% - 20px);\n    margin: 10px;\n  }\n  .main .tarjetas ion-card ion-card-title {\n    font-size: 22px;\n  }\n  .main .tarjetas ion-card ion-card-content {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .main .tarjetas {\n    width: 100%;\n  }\n  .main .tarjetas ion-card {\n    width: calc(100% - 20px);\n    margin: 10px;\n  }\n  .main .tarjetas ion-card ion-card-title {\n    font-size: 18px;\n  }\n  .main .tarjetas ion-card ion-card-content {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFFUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQVE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFFWjtBQURZO0VBQ0ksZUFBQTtBQUdoQjtBQURZO0VBQ0ksZUFBQTtBQUdoQjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FBQUo7QUFHQTtFQUNJLDJDQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUFKO0FBQ0k7RUFDSSxhQUFBO0FBQ1I7QUFHQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtBQUFKO0FBR0E7RUFFUTtJQUNJLFdBQUE7RUFEVjtFQUVVO0lBQ0ksMEJBQUE7SUFDQSxZQUFBO0VBQWQ7RUFDYztJQUNJLGVBQUE7RUFDbEI7RUFDYztJQUNJLGVBQUE7RUFDbEI7QUFDRjtBQUtBO0VBRVE7SUFDSSxXQUFBO0VBSlY7RUFNTTtJQUNJLFdBQUE7RUFKVjtFQUtVO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0VBSGQ7RUFJYztJQUNJLGVBQUE7RUFGbEI7RUFJYztJQUNJLGVBQUE7RUFGbEI7QUFDRjtBQVFBO0VBRVE7SUFDSSxXQUFBO0VBUFY7RUFRVTtJQUNJLHdCQUFBO0lBQ0EsWUFBQTtFQU5kO0VBT2M7SUFDSSxlQUFBO0VBTGxCO0VBT2M7SUFDSSxlQUFBO0VBTGxCO0FBQ0YiLCJmaWxlIjoicmV2aXNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5idXNjYXIge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC50aXR1bG8ge31cbiAgICAuY2FtcG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gICAgLnRhcmpldGFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YwRjg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50aXR1bG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLml0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbn1cblxuLnNlcGFyYWRvciB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIC50YXJqZXRhcyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygzMy4zMyUgLSAyMHB4KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC5tYWluIHtcbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRhcmpldGFzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLm1haW4ge1xuICAgICAgICAudGFyamV0YXMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 4865:
/*!*************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/laboratorio/revision/revision.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n\n        <div class=\"flex\">\n            <img src=\"https://cloud.visitrack.com/images/vt_logo_400.png\" alt=\"\">\n\n            <img src=\"\" alt=\"\">\n\n\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n    <div class=\"main\">\n\n        <h2>Revisión de pedidos</h2>\n\n        <ion-grid class=\"buscar\">\n            <ion-row>\n\n                <ion-col size=\"8\">\n                    <ion-input class=\"campo\" type=\"text\" placeholder=\"Buscar Pedido\" (ionChange)=\"search($event)\"></ion-input>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid> <br>\n\n\n        <div class=\"loading\" *ngIf=\"!load\">\n            <ion-spinner name=\"crescent\"></ion-spinner>\n            <h3>Creando actividades</h3>\n        </div>\n\n\n        <ion-grid>\n            <ion-row class=\"titulo\">\n                <ion-col size=\"2\">FECHA</ion-col>\n                <ion-col size=\"2\">HORA</ion-col>\n                <ion-col size=\"1\">TIPO</ion-col>\n                <ion-col size=\"2\">NÚMERO</ion-col>\n                <ion-col size=\"3\">VENDEDOR</ion-col>\n                <ion-col size=\"2\">ADJUNTAR NP</ion-col>\n\n            </ion-row>\n\n            <ion-row class=\"item\" *ngFor=\"let item of activitiesList\">\n                <ion-col size=\"2\">FECHA</ion-col>\n                <ion-col size=\"2\">HORA</ion-col>\n                <ion-col size=\"1\">TIPO</ion-col>\n                <ion-col size=\"2\">NÚMERO</ion-col>\n                <ion-col size=\"3\">VENDEDOR</ion-col>\n                <ion-col size=\"2\">ADJUNTAR NP</ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n    </div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_laboratorio_revision_revision_module_ts.js.map