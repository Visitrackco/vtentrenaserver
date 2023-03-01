"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_cdo_seguimiento-sst_seguimiento-sst_module_ts"],{

/***/ 91604:
/*!****************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguimientoSSTPageRoutingModule": () => (/* binding */ SeguimientoSSTPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _seguimiento_sst_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguimiento-sst.page */ 55218);




const routes = [
    {
        path: '',
        component: _seguimiento_sst_page__WEBPACK_IMPORTED_MODULE_0__.SeguimientoSSTPage
    }
];
let SeguimientoSSTPageRoutingModule = class SeguimientoSSTPageRoutingModule {
};
SeguimientoSSTPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeguimientoSSTPageRoutingModule);



/***/ }),

/***/ 13312:
/*!********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguimientoSSTPageModule": () => (/* binding */ SeguimientoSSTPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _seguimiento_sst_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguimiento-sst-routing.module */ 91604);
/* harmony import */ var _seguimiento_sst_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seguimiento-sst.page */ 55218);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let SeguimientoSSTPageModule = class SeguimientoSSTPageModule {
};
SeguimientoSSTPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _seguimiento_sst_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeguimientoSSTPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_seguimiento_sst_page__WEBPACK_IMPORTED_MODULE_1__.SeguimientoSSTPage]
    })
], SeguimientoSSTPageModule);



/***/ }),

/***/ 55218:
/*!******************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguimientoSSTPage": () => (/* binding */ SeguimientoSSTPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _seguimiento_sst_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguimiento-sst.page.html?ngResource */ 34611);
/* harmony import */ var _seguimiento_sst_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seguimiento-sst.page.scss?ngResource */ 48567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_components_sst_activities_sst_activities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/sst-activities/sst-activities.component */ 44085);
/* harmony import */ var src_app_components_sst_activitiesdelete_sst_activitiesdelete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/sst-activitiesdelete/sst-activitiesdelete.component */ 26916);














let SeguimientoSSTPage = class SeguimientoSSTPage {
    constructor(storage, toast, route, api, popover, loading, modalCtrl) {
        this.storage = storage;
        this.toast = toast;
        this.route = route;
        this.api = api;
        this.popover = popover;
        this.loading = loading;
        this.modalCtrl = modalCtrl;
        this.login = '';
        this.password = '';
        this.load = true;
        this.activitiesList = [];
        this.allForms = [];
        this.tkn = '';
        this.clientes = [];
        this.desde = '';
        this.hasta = '';
        this.txt = '';
    }
    ngOnInit() {
    }
    getInfo(guid) {
        return new Promise((resolve, reject) => {
            this.api.getActivitieInfo(this.tkn, guid).subscribe((data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            });
        });
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe((param) => {
            console.log(param);
            this.tkn = param.tkn;
        });
    }
    // A64B1EB5-C279-4F96-9F90-3EC5325BF53D
    returnValue(arr, api) {
        const value = arr.filter((item) => item.apiId == api);
        return value.length > 0 ? value[0].Value : '';
    }
    aplicar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            moment_timezone__WEBPACK_IMPORTED_MODULE_4__.locale('es');
            if (!this.desde || !this.hasta) {
                this.toast.newCreatedToast('Debes ingresar la fecha desde y hasta', false);
                return;
            }
            console.log(this.desde, this.hasta);
            this.load = false;
            this.activitiesList = [];
            this.api.getActivities2(this.tkn, this.desde + ' 00:00', this.hasta + ' 23:59', 'A64B1EB5-C279-4F96-9F90-3EC5325BF53D').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                console.log(data, 'data');
                // const rs = data.filter((it) => it.LocationName == lg[0].loc.Name)
                for (const item of data) {
                    let rsData = yield this.getInfo(item.GUID);
                    rsData.creado = moment_timezone__WEBPACK_IMPORTED_MODULE_4__(rsData.CreatedOn).format('LL');
                    rsData.creadoName = rsData.CreatedByName ? rsData.CreatedByName : rsData.AssignedToName;
                    rsData.programado = rsData.DispatchDateTime && rsData.AssignedToName ? moment_timezone__WEBPACK_IMPORTED_MODULE_4__(rsData.DispatchDateTime).format('LL') : 'Creada por el usuario';
                    this.allForms.push(rsData);
                    rsData.items = [];
                    rsData.seguimientos = [];
                    if (rsData.CreatedOn >= this.desde && rsData.CreatedOn <= this.hasta) {
                        let show = false;
                        let seguimientos = rsData.Values.filter((it) => it.apiId == 'SEGUIMIENTOS');
                        if (seguimientos.length > 0) {
                            seguimientos[0].Value.forEach((ele) => {
                                if (ele.Value.length > 0) {
                                    let obj = {
                                        name: this.returnValue(ele.Value, 'name'),
                                        fecha: this.returnValue(ele.Value, 'FECHA'),
                                        estado: this.returnValue(ele.Value, 'ESTADO'),
                                        obs: this.returnValue(ele.Value, 'OBSERVACION'),
                                        foto: this.returnValue(ele.Value, 'FOTO'),
                                        seguimiento: this.returnValue(ele.Value, 'SEGUIMIENTO'),
                                    };
                                    rsData.seguimientos.push(obj);
                                }
                            });
                        }
                        for (let i = 1; i <= 61; i++) {
                            let existValues = rsData.Values.filter((it) => it.apiId == i.toString());
                            //  console.log(existValues);
                            if (existValues.length > 0) {
                                if (existValues[0].Value == 'NC') {
                                    const comp = rsData.seguimientos.filter((item) => item.name == i.toString() && item.estado == 'CERRADO');
                                    if (rsData.seguimientos.length == 0) {
                                        show = true;
                                    }
                                    if (comp.length == 0) {
                                        show = true;
                                        let obj = {
                                            item: i,
                                            hallazgo: this.returnValue(rsData.Values, i + 'HALLAZGOS'),
                                            reco: this.returnValue(rsData.Values, i + 'RECOMENDACION'),
                                            foto: this.returnValue(rsData.Values, i + 'FOTO'),
                                            seguimiento: this.returnValue(rsData.Values, i + 'SEGUIMIENTO')
                                        };
                                        rsData.items.push(obj);
                                    }
                                }
                            }
                        }
                        if (show) {
                            this.activitiesList.push(rsData);
                        }
                    }
                }
                this.activitiesList = underscore__WEBPACK_IMPORTED_MODULE_3__.sortBy(this.activitiesList, 'CreatedOn');
                this.load = true;
                console.log(this.activitiesList);
            }), () => { this.load = true; });
        });
    }
    cambio(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.txt = event.detail.value;
        });
    }
    reenviar(item) {
        console.log(item);
        this.loading.createLoading('Reenviando Planeación');
        this.api.changeDispath({
            tkn: this.tkn,
            user: item.Updated_GUID,
            status: item.CompanyStatusGUID,
            date: moment_timezone__WEBPACK_IMPORTED_MODULE_4__().add(2, 'minutes').format('YYYY-MM-DD HH:mm'),
            guid: item.GUID
        }).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (data) {
                this.toast.newCreatedToast('Inspecciòn reenviada', true);
            }
            this.loading.cancelLoading();
        }), (err) => {
            this.loading.cancelLoading();
        });
    }
    showActivites() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_sst_activities_sst_activities_component__WEBPACK_IMPORTED_MODULE_8__.SstActivitiesComponent,
                componentProps: { activities: this.allForms }
            });
            yield modal.present();
        });
    }
    showActivitesDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_sst_activitiesdelete_sst_activitiesdelete_component__WEBPACK_IMPORTED_MODULE_9__.SstActivitiesdeleteComponent,
                componentProps: { activities: this.allForms }
            });
            yield modal.present();
        });
    }
};
SeguimientoSSTPage.ctorParameters = () => [
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_7__.StorageWebService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController }
];
SeguimientoSSTPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-seguimiento-sst',
        template: _seguimiento_sst_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_seguimiento_sst_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeguimientoSSTPage);



/***/ }),

/***/ 48567:
/*!*******************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".contenedor {\n  width: 100%;\n  max-width: 600px;\n}\n\n.margin {\n  margin: 50px auto;\n}\n\n.contenedor h3 {\n  text-align: center;\n  width: 100%;\n  opacity: 0.5;\n}\n\n.campos {\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  padding: 5px 10px !important;\n  margin-bottom: 10px;\n  opacity: 0.7;\n}\n\n.right {\n  text-align: right;\n}\n\n.main {\n  width: 100%;\n}\n\n.main .campo {\n  width: 100%;\n  background-color: #f1f1f1;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 0;\n  height: 50px;\n  font-size: 22px;\n}\n\n.main .tarjetas {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.main .tarjetas ion-card {\n  padding: 10px;\n  background-color: #F3F0F8;\n  width: calc(25% - 20px);\n  margin: 10px;\n}\n\n.main .tarjetas ion-card ion-card-title {\n  font-size: 22px;\n}\n\n.main .tarjetas ion-card ion-card-content {\n  font-size: 16px;\n}\n\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.flex img {\n  height: 100px;\n}\n\n.tabla {\n  width: 100%;\n  margin: 20px auto;\n}\n\n.titulo {\n  background-color: #f1f1f1;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 10px;\n}\n\n.fila {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.fila ion-col {\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n}\n\n.flc {\n  display: flex;\n  justify-content: space-between;\n}\n\n.flc .filtros {\n  width: 70%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.flc .filtros ion-input {\n  margin: 0 10px;\n}\n\n.flc .boton {\n  width: 30%;\n  text-align: right;\n}\n\n@media screen and (max-width: 800px) {\n  .flc {\n    flex-direction: column;\n  }\n  .flc .boton {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZ3VpbWllbnRvLXNzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUFJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFUjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUVSOztBQURRO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBR1o7O0FBRlk7RUFDSSxlQUFBO0FBSWhCOztBQUZZO0VBQ0ksZUFBQTtBQUloQjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFBSTtFQUNJLGFBQUE7QUFFUjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUFJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVSOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRVI7O0FBRFE7RUFDSSxjQUFBO0FBR1o7O0FBQUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFFQTtFQUNJO0lBQ0ksc0JBQUE7RUFDTjtFQUNNO0lBQ0ksV0FBQTtFQUNWO0FBQ0YiLCJmaWxlIjoic2VndWltaWVudG8tc3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4ubWFyZ2luIHtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLmNvbnRlbmVkb3IgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAuNTtcbn1cblxuLmNhbXBvcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgb3BhY2l0eTogLjc7XG59XG5cbi5yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuY2FtcG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICAudGFyamV0YXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjBGODtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG4udGFibGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4udGl0dWxvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpbGEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBpb24tY29sIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLmZsYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmZpbHRyb3Mge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYm90b24ge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmZsYyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5maWx0cm9zIHt9XG4gICAgICAgIC5ib3RvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 34611:
/*!*******************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdo/seguimiento-sst/seguimiento-sst.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\n    <ion-toolbar color=\"dark\">\n\n        <ion-title>SEGUIMIENTO INF. INSPECCIÓN </ion-title>\n        <ion-buttons slot=\"end\">\n\n\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Solcicitud\" (ionChange)=\"cambio($event)\"></ion-searchbar>\n\n    <div style=\"padding: 10px 20px;\" *ngIf=\"load\"><strong>Total ({{ activitiesList.length }})</strong></div>\n\n\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main\">\n\n\n\n        <div class=\"flc\">\n            <div class=\"filtros\">\n\n                <ion-input class=\"campo\" type=\"date\" [(ngModel)]=\"desde\"></ion-input>\n                <ion-input class=\"campo\" type=\"date\" [(ngModel)]=\"hasta\"></ion-input>\n\n            </div>\n            <div class=\"boton\">\n                <ion-button expand=\"block\" mode=\"ios\" color=\"primary\" (click)=\"aplicar()\">Aplicar Fechas</ion-button>\n            </div>\n        </div>\n\n\n        <div class=\"loading\" *ngIf=\"!load\">\n            <ion-spinner name=\"crescent\"></ion-spinner>\n            <h3>Cargando</h3>\n        </div>\n\n        <div class=\"loading\" *ngIf=\"load && activitiesList.length == 0\">\n            <ion-icon style=\"font-size: 72px;\" name=\"newspaper\" color=\"primary\"></ion-icon>\n            <h3>No tiene actividades en este momento</h3>\n        </div>\n\n\n\n        <div class=\"tabla\" *ngIf=\"load && activitiesList.length > 0\">\n            <ion-item *ngFor=\"let item of activitiesList | agilissacliente : txt : 'LocationName'\">\n                <ion-label class=\"ion-text-wrap\">\n                    <div>\n                        <strong>AREA: {{ item.LocationName }}</strong>\n                    </div> <br>\n                    <div>\n                        <strong>Creada en: </strong> {{ item.creado }}\n                    </div>\n                    <div>\n                        <strong>Para: </strong> {{ item.creadoName }}\n                    </div>\n\n                    <br>\n\n\n                    <ion-accordion-group>\n                        <ion-accordion value=\"first\">\n                            <ion-item slot=\"header\" color=\"light\">\n                                <ion-label>Seguimiento</ion-label>\n                            </ion-item>\n                            <div class=\"ion-padding\" slot=\"content\">\n                                <div class=\"info\" *ngFor=\"let seg of item.items\">\n                                    <div> <strong># de pregunta: </strong> <span>{{ seg.item }}</span></div>\n                                    <div> <strong>Hallazgo: </strong> <br><span>{{ seg.hallazgo }}</span></div>\n                                    <div> <strong>Recomendaciòn: </strong> <br><span>{{ seg.reco }}</span></div>\n                                    <div> <img src=\"{{ seg.foto }}\" width=\"80px\" alt=\"\"></div>\n\n                                </div>\n\n                                <ion-button mode=\"ios\" color=\"primary\" expand=\"block\" (click)=\"reenviar(item)\">Reenviar Inspección</ion-button>\n\n                            </div>\n                        </ion-accordion>\n\n                    </ion-accordion-group>\n\n\n\n                </ion-label>\n            </ion-item>\n        </div>\n\n    </div>\n\n    <ion-fab slot=\"fixed\" horizontal=\"end\" vertical=\"bottom\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"top\">\n            <ion-fab-button (click)=\"showActivites()\">\n                <ion-icon name=\"list\"></ion-icon>\n            </ion-fab-button>\n\n            <ion-fab-button (click)=\"showActivitesDelete()\">\n                <ion-icon name=\"trash\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab-list>\n\n    </ion-fab>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_cdo_seguimiento-sst_seguimiento-sst_module_ts.js.map