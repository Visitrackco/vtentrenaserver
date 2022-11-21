"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_diamante-mtto_diamante-mtto_module_ts"],{

/***/ 32840:
/*!********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/diamante-mtto/diamante-mtto-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiamanteMttoPageRoutingModule": () => (/* binding */ DiamanteMttoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _diamante_mtto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diamante-mtto.page */ 89196);




const routes = [
    {
        path: '',
        component: _diamante_mtto_page__WEBPACK_IMPORTED_MODULE_0__.DiamanteMttoPage
    }
];
let DiamanteMttoPageRoutingModule = class DiamanteMttoPageRoutingModule {
};
DiamanteMttoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiamanteMttoPageRoutingModule);



/***/ }),

/***/ 85430:
/*!************************************************************************!*\
  !*** ./src/app/Pages/interfaces/diamante-mtto/diamante-mtto.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiamanteMttoPageModule": () => (/* binding */ DiamanteMttoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _diamante_mtto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diamante-mtto-routing.module */ 32840);
/* harmony import */ var _diamante_mtto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diamante-mtto.page */ 89196);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let DiamanteMttoPageModule = class DiamanteMttoPageModule {
};
DiamanteMttoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _diamante_mtto_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiamanteMttoPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_diamante_mtto_page__WEBPACK_IMPORTED_MODULE_1__.DiamanteMttoPage]
    })
], DiamanteMttoPageModule);



/***/ }),

/***/ 89196:
/*!**********************************************************************!*\
  !*** ./src/app/Pages/interfaces/diamante-mtto/diamante-mtto.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiamanteMttoPage": () => (/* binding */ DiamanteMttoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _diamante_mtto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diamante-mtto.page.html?ngResource */ 10244);
/* harmony import */ var _diamante_mtto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diamante-mtto.page.scss?ngResource */ 55186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);








let DiamanteMttoPage = class DiamanteMttoPage {
    constructor(api, toas, route, menuCtrl) {
        this.api = api;
        this.toas = toas;
        this.route = route;
        this.menuCtrl = menuCtrl;
        this.list = [];
        this.locs = [];
        this.desc = '';
        this.centro = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false, 'menu');
        this.route.queryParams.subscribe((param) => {
            console.log(param);
            this.tkn = param.accesstoken;
            this.gestared();
        });
    }
    gestared() {
        this.api.getLists({
            AccessToken: this.tkn,
            ListTypeGUID: "AV0lV3ARVx"
        }).subscribe((data) => {
            this.list = data;
            console.log(data);
        });
        this.api.getLocs({
            AccessToken: this.tkn,
            LocationTypeID: "73E2C37A-5570-4134-BDCA-5C394167F877"
        }).subscribe((data) => {
            this.locs = data;
            console.log(data);
        });
    }
    asignar(event) {
        this.tipo = event.detail.value;
    }
    cambio(event, type) {
        if (type == 1) {
            this.desc = event.detail.value;
        }
        if (type == 2) {
            this.centro = event.detail.value;
        }
    }
    select(item, type) {
        if (type == 1) {
            this.selectDesc = item;
            this.desc = '';
        }
        if (type == 2) {
            this.selectCentro = item;
            this.centro = '';
        }
    }
    msg(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toas.create({
                message: txt,
                duration: 2000
            });
            yield toast.present();
        });
    }
    createAsset() {
        if (!this.iniciacion) {
            this.msg('Debe dìgitar el No. de iniciaciòn');
            return;
        }
        if (!this.tipo) {
            this.msg('Debe seleccionar un tipo de asignaciòn');
            return;
        }
        if (!this.selectDesc) {
            this.msg('Debe seleccionar un equipo');
            return;
        }
        if (!this.selectCentro) {
            this.msg('Debe seleccionar un centro de costos');
            return;
        }
        this.load = true;
        this.api.createAsset({
            tkn: this.tkn,
            Name: this.selectDesc.Name + ' - ' + moment_timezone__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD HH mm'),
            AssetTypeGUID: '1JJkNDXMay',
            LocationGUID: this.selectCentro.GUID,
            Values: JSON.stringify([
                {
                    apiId: 'REFERENCIA',
                    Value: this.selectDesc.Values[0].REFERENCIA
                },
                {
                    apiId: 'INICIACION',
                    Value: this.iniciacion
                },
                {
                    apiId: 'ASIGNACION',
                    Value: this.tipo
                },
                {
                    apiId: 'VIDAUTIL',
                    Value: this.selectDesc.Values[2].VIDAUTIL
                }
            ])
        }).subscribe((data) => {
            console.log(data, 'resp');
            if (data.Status == 'OK') {
                this.msg('Activo creado correctamente');
                this.iniciacion = '';
                this.selectCentro = false;
                this.selectCentro = false;
            }
            else {
                this.msg('Error, No se pudo crear el activo');
            }
            this.load = false;
        });
    }
};
DiamanteMttoPage.ctorParameters = () => [
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController }
];
DiamanteMttoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-diamante-mtto',
        template: _diamante_mtto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_diamante_mtto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DiamanteMttoPage);



/***/ }),

/***/ 55186:
/*!***********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/diamante-mtto/diamante-mtto.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".titulo {\n  background-color: #f1f1f1;\n}\n.titulo ion-col {\n  padding: 15px 10px;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYW1hbnRlLW10dG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFESiIsImZpbGUiOiJkaWFtYW50ZS1tdHRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG5cbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIH1cbn1cblxuXG4ubG9hZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 10244:
/*!***********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/diamante-mtto/diamante-mtto.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n      <img src=\"https://s3.amazonaws.com/logocompanies/CC55B13F-5CA2-4420-A313-539CD18BD5B4.png\n      \" width=\"80\" />\n      <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  \n\n  <div class=\"loading\" *ngIf=\"list.length == 0 && locs.length == 0\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <h3>Creando actividades</h3>\n</div>\n\n  <ion-grid *ngIf=\"list.length > 0 && locs.length > 0\">\n    <ion-row class=\"titulo\">\n      <ion-col size=\"6\">DESCRIPCIÒN DEL EQUIPO</ion-col>\n      <ion-col size=\"6\">CENTRO DE COSTO</ion-col>\n\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item *ngIf=\"selectDesc\" >\n          <ion-label><div style=\"background-color: aliceblue;\">{{ selectDesc.Name }}</div></ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item *ngIf=\"selectCentro\" >\n          <ion-label><div style=\"background-color: aliceblue;\">{{ selectCentro.Name }}</div></ion-label>\n        </ion-item>\n      </ion-col>\n\n      \n    </ion-row>\n\n\n    <ion-row >\n      <ion-col size=\"6\">\n        \n      <ion-searchbar placeholder=\"Buscar Descripciòn\" class=\"ip\" (ionChange)=\"cambio($event, 1)\"></ion-searchbar>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-searchbar placeholder=\"Buscar Centro\" class=\"ip\" (ionChange)=\"cambio($event, 2)\"></ion-searchbar>\n      </ion-col>\n \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item *ngFor=\"let item of list | diamantemtto : desc\" (click)=\"select(item, 1)\">\n          <ion-label>\n            <div>{{ item.Name }}</div>\n\n            <div><strong>Referencia: </strong> {{ item.Values[0].REFERENCIA}}</div>\n            <div><strong>Sector: </strong> {{ item.Values[1].SECTOR}}</div>\n            <div><strong>Vida Utìl: </strong> {{ item.Values[2].VIDAUTIL}}</div>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item *ngFor=\"let item of locs | diamantemtto : centro\" (click)=\"select(item, 2)\">\n          <ion-label>{{ item.Name }}</ion-label>\n        </ion-item>\n      </ion-col>\n\n      \n    </ion-row>\n\n    <ion-row class=\"titulo\">\n      <ion-col size=\"6\">No. INICIACION</ion-col>\n      <ion-col size=\"6\">TIPO DE ASIGNACIÒN</ion-col>\n\n\n    </ion-row>\n\n    <ion-row >\n      <ion-col size=\"6\">\n        <ion-input [(ngModel)]=\"iniciacion\" placeholder=\"Escriba el No. INICIACIÒN\"></ion-input>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-radio-group (ionChange)=\"asignar($event)\" >\n          <ion-item>\n            <ion-label>MIGRACION</ion-label>\n            <ion-radio slot=\"end\" value=\"MIGRACION\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>REGISTRO ACTIVO CLIENTE</ion-label>\n            <ion-radio slot=\"end\" value=\"REGISTRO ACTIVO CLIENTE\"></ion-radio>\n          </ion-item>\n      \n          \n        </ion-radio-group>\n\n \n      </ion-col>\n\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid *ngIf=\"list.length > 0 && locs.length > 0\">\n    <ion-row>\n      <ion-col size=\"9\"></ion-col>\n      <ion-col size=\"3\">\n        <ion-button color=\"primary\" expand=\"block\" mode=\"ios\" (click)=\"createAsset()\">Crear</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div class=\"loading\" *ngIf=\"load\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <h3>Creando Activo, por favor espere</h3>\n</div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_diamante-mtto_diamante-mtto_module_ts.js.map