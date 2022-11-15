"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_biomedicos_biomedicos_module_ts"],{

/***/ 30673:
/*!**************************************************************************!*\
  !*** ./src/app/Pages/interfaces/biomedicos/biomedicos-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiomedicosPageRoutingModule": () => (/* binding */ BiomedicosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _biomedicos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biomedicos.page */ 11365);




const routes = [
    {
        path: '',
        component: _biomedicos_page__WEBPACK_IMPORTED_MODULE_0__.BiomedicosPage
    }
];
let BiomedicosPageRoutingModule = class BiomedicosPageRoutingModule {
};
BiomedicosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BiomedicosPageRoutingModule);



/***/ }),

/***/ 68894:
/*!******************************************************************!*\
  !*** ./src/app/Pages/interfaces/biomedicos/biomedicos.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiomedicosPageModule": () => (/* binding */ BiomedicosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _biomedicos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biomedicos-routing.module */ 30673);
/* harmony import */ var _biomedicos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biomedicos.page */ 11365);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let BiomedicosPageModule = class BiomedicosPageModule {
};
BiomedicosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _biomedicos_routing_module__WEBPACK_IMPORTED_MODULE_0__.BiomedicosPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_biomedicos_page__WEBPACK_IMPORTED_MODULE_1__.BiomedicosPage]
    })
], BiomedicosPageModule);



/***/ }),

/***/ 11365:
/*!****************************************************************!*\
  !*** ./src/app/Pages/interfaces/biomedicos/biomedicos.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiomedicosPage": () => (/* binding */ BiomedicosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _biomedicos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biomedicos.page.html?ngResource */ 29150);
/* harmony import */ var _biomedicos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biomedicos.page.scss?ngResource */ 16541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_opciones_cdo_opciones_cdo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/opciones-cdo/opciones-cdo.component */ 67786);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_components_controlcdoasistencial_controlcdoasistencial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/controlcdoasistencial/controlcdoasistencial.component */ 60970);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);












let BiomedicosPage = class BiomedicosPage {
    constructor(api, popover, route, modalCtrl, alert, toast, loading) {
        this.api = api;
        this.popover = popover;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.toast = toast;
        this.loading = loading;
        this.actividades = [];
        this.unicos = [];
        this.filtro = 'Todos';
        this.txt = '';
        this.padres = [];
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
            this.cargarData();
        });
    }
    // HreSCg1x3x BIOMEDICOS 2
    createOnlyActivity(guid, data) {
        return new Promise((resolve, reject) => {
            this.api.aceptActivity({
                AccessToken: this.tkn,
                FormGUID: 'HreSCg1x3x',
                LocationGUID: '',
                AssetGUID: '',
                UserGUID: guid,
                Duration: "60",
                DispachDateTime: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().add(1, 'minutes').format('YYYY-MM-DD HH:mm'),
                Values: JSON.stringify([]),
                ParentGUID: data.GUID,
                ActivityGUID: '',
                CompanyStatusGUID: 'B2A827E7-9D30-4C59-B505-F527C787322A'
            }).subscribe((dat) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                console.log(dat);
                if (dat.Status === 'OK') {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }));
        });
    }
    tomar(acti, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(acti);
            const alert = yield this.alert.create({
                message: 'Seleccione su nombre',
                header: 'Atención',
                inputs: [
                    {
                        type: 'radio',
                        value: '98516C1B-6290-417E-BA09-0D8F6AAE9D80',
                        label: 'Ingryd Rocio'
                    },
                    {
                        type: 'radio',
                        value: '905BA1D1-CF3D-4B37-8ACD-FC2880C4AB41',
                        label: 'Paola Andrea'
                    },
                    {
                        type: 'radio',
                        value: '615E96FF-B84D-4BAF-9558-F7DE012BAE8E',
                        label: 'Natalia Stefania'
                    },
                    {
                        type: 'radio',
                        value: '3E1B99CF-4320-41BF-B69E-31B49D431FAB',
                        label: 'Marinella Galindez'
                    },
                    {
                        type: 'radio',
                        value: '819DD948-FE4C-4EB0-8A6F-FCD4D2DF04E7',
                        label: 'Yenny Magaly'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Aceptar',
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            console.log(data);
                            if (data) {
                                this.loading.createLoading('Tomando actividad');
                                this.api.childs({
                                    AccessToken: this.tkn,
                                    ParentGUID: acti.GUID
                                }).subscribe((dat) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                    const form = dat.filter((dt) => dt.SurveyGUID == 'HreSCg1x3x');
                                    if (form.length == 0) {
                                        const resp = yield this.createOnlyActivity(data, acti);
                                        if (!resp) {
                                            const toast = yield this.toast.create({
                                                message: 'No se pudo tomar la actividad',
                                                header: 'Error',
                                                duration: 3000
                                            });
                                            yield toast.present();
                                        }
                                        else {
                                            this.cargarData();
                                        }
                                        this.loading.cancelLoading();
                                    }
                                    else {
                                        this.loading.cancelLoading();
                                        const toast = yield this.toast.create({
                                            message: 'La actividad ya ha sido tomada por otro usuario',
                                            header: 'Atención!',
                                            duration: 3000
                                        });
                                        yield toast.present();
                                        this.actividades.splice(i, 1);
                                    }
                                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                    const toast = yield this.toast.create({
                                        message: 'No se pudo tomar la actividad',
                                        header: 'Error',
                                        duration: 3000
                                    });
                                    yield toast.present();
                                    this.loading.cancelLoading();
                                }));
                            }
                            else {
                                const toast = yield this.toast.create({
                                    message: 'Debe seleccionar un usuario',
                                    header: 'Mensaje',
                                    duration: 3000
                                });
                                yield toast.present();
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    cargarData() {
        this.cargaActividades = false;
        this.actividades = [];
        this.api.getActivities2(this.tkn, moment_timezone__WEBPACK_IMPORTED_MODULE_5__().subtract(1, 'days').format('YYYY-MM-DD HH:mm'), moment_timezone__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm'), 'FCA171F7-227E-41FA-9129-CC5D3D7F20B3').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            data = data.filter((item) => item.CompanyStatusName == 'Completado');
            for (const item of data) {
                const miData = yield this.getInfo(item.GUID);
                if (miData) {
                    miData.color = this.color(miData.CompanyStatusName);
                    miData.icolor = this.color(miData.CompanyStatusName, true);
                    const bio = miData.Values.filter((it) => it.apiId == 'EXISTEN_EQUIPOS_BIOMEDICOS');
                    if (bio.length > 0) {
                        if (bio[0].Value == 'SI') {
                            this.api.childs({
                                AccessToken: this.tkn,
                                ParentGUID: item.GUID
                            }).subscribe((dat) => {
                                console.log(dat);
                                const form = dat.filter((dt) => dt.SurveyGUID == 'HreSCg1x3x');
                                if (form.length == 0) {
                                    this.actividades.push(miData);
                                }
                            });
                        }
                    }
                }
            }
            this.cargaActividades = true;
            console.log(this.actividades);
        }));
    }
    cambio(event) {
        this.txt = event.detail.value;
    }
    handleRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.cargarData();
            this.filtro = 'Todos';
            event.target.complete();
        });
    }
    color(name, ic) {
        if (name == 'CANCELADO POR DEMORA') {
            return ic ? 'igris' : 'gris';
        }
        if (name == 'Completado') {
            return ic ? 'iverde' : 'verde';
        }
        if (name == 'EN PROCESO DE ASEO') {
            return ic ? 'iamarillo' : 'amarillo';
        }
        if (name == 'PENDIENTE ASEO') {
            return ic ? 'irojo' : 'rojo';
        }
        if (name == 'ELIMINADA POR LIMPIEZA PREVIA A SOLICITUD') {
            return ic ? 'iazul' : 'azul';
        }
    }
    filtros(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const miPopover = yield this.popover.create({
                component: src_app_components_opciones_cdo_opciones_cdo_component__WEBPACK_IMPORTED_MODULE_2__.OpcionesCDOComponent,
                componentProps: {
                    opciones: this.unicos
                },
                event: event
            });
            yield miPopover.present();
            const dataResume = yield miPopover.onWillDismiss();
            if (dataResume.data) {
                this.filtro = dataResume.data.by;
            }
        });
    }
    control(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_controlcdoasistencial_controlcdoasistencial_component__WEBPACK_IMPORTED_MODULE_6__.ControlcdoasistencialComponent,
                componentProps: {
                    padres: this.padres,
                    data: this.actividades,
                    tkn: this.tkn
                }
            });
            yield modal.present();
            const resp = yield modal.onWillDismiss();
            if (resp.data) {
                if (resp.data.revisados.length > 0) {
                    underscore__WEBPACK_IMPORTED_MODULE_4__.each(resp.data.revisados, (ele, i) => {
                        underscore__WEBPACK_IMPORTED_MODULE_4__.each(this.actividades, (item, j) => {
                            if (item.ParentGUID == ele) {
                                item.CompanyStatusName = 'ELIMINADA POR LIMPIEZA PREVIA A SOLICITUD';
                                item.color = this.color(item.CompanyStatusName);
                                item.icolor = this.color(item.CompanyStatusName, true);
                            }
                        });
                    });
                }
            }
        });
    }
};
BiomedicosPage.ctorParameters = () => [
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService }
];
BiomedicosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-biomedicos',
        template: _biomedicos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_biomedicos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BiomedicosPage);



/***/ }),

/***/ 16541:
/*!*****************************************************************************!*\
  !*** ./src/app/Pages/interfaces/biomedicos/biomedicos.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".main {\n  width: 100%;\n}\n.main ion-grid {\n  width: 40%;\n  margin: 0;\n}\n.main .campo {\n  width: 100%;\n  background-color: #f1f1f1;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 0;\n  height: 50px;\n  border-radius: 20px;\n}\n.main .tarjetas {\n  width: 100%;\n  display: flex;\n}\n.main .tarjetas ion-card {\n  padding: 10px;\n  background-color: #F3F0F8;\n  width: calc(25% - 20px);\n  margin: 10px;\n}\n.main .tarjetas ion-card ion-card-title {\n  font-size: 22px;\n}\n.main .tarjetas ion-card ion-card-content {\n  font-size: 16px;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n.flex img {\n  height: 100px;\n}\n.separador {\n  margin: 10px 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.rojo {\n  background-color: #E9463C;\n  color: #E9463C;\n}\n.amarillo {\n  background-color: #F2E850;\n  color: #F2E850;\n}\n.verde {\n  background-color: #2C6520;\n  color: #2C6520;\n}\n.gris {\n  background-color: #93938B;\n  color: #93938B;\n}\n.irojo {\n  color: #E9463C;\n}\n.iamarillo {\n  color: #F2E850;\n}\n.iverde {\n  color: #2C6520;\n}\n.igris {\n  color: #93938B;\n}\n.azul {\n  background-color: #53B6A4;\n  color: #53B6A4;\n}\n.iazul {\n  color: #53B6A4;\n}\n.solicitudes {\n  font-size: 12px;\n  border-bottom: 5px dotted #2E68AD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpb21lZGljb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFFUjtBQURRO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBR1o7QUFGWTtFQUNJLGVBQUE7QUFJaEI7QUFGWTtFQUNJLGVBQUE7QUFJaEI7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0FBRVI7QUFFQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtBQUNKO0FBSUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtBQURKO0FBSUE7RUFDSSxjQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtBQURKO0FBSUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBRUksY0FBQTtBQUZKO0FBTUE7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUFISiIsImZpbGUiOiJiaW9tZWRpY29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmNhbXBvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICAgIC50YXJqZXRhcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjBGODtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG4uc2VwYXJhZG9yIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmlvbi1hdmF0YXIge31cblxuLnJvam8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOTQ2M0M7XG4gICAgY29sb3I6ICNFOTQ2M0M7XG59XG5cbi5hbWFyaWxsbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRTg1MDtcbiAgICBjb2xvcjogI0YyRTg1MDtcbn1cblxuLnZlcmRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkM2NTIwO1xuICAgIGNvbG9yOiAjMkM2NTIwO1xufVxuXG4uZ3JpcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzOTM4QjtcbiAgICBjb2xvcjogIzkzOTM4Qjtcbn1cblxuLmlyb2pvIHtcbiAgICBjb2xvcjogI0U5NDYzQztcbn1cblxuLmlhbWFyaWxsbyB7XG4gICAgY29sb3I6ICNGMkU4NTA7XG59XG5cbi5pdmVyZGUge1xuICAgIGNvbG9yOiAjMkM2NTIwO1xufVxuXG4uaWdyaXMge1xuICAgIGNvbG9yOiAjOTM5MzhCO1xufVxuXG4uYXp1bCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzQjZBNDtcbiAgICBjb2xvcjogIzUzQjZBNDtcbn1cblxuLmlhenVsIHtcblxuICAgIGNvbG9yOiAjNTNCNkE0O1xufVxuXG5cbi5zb2xpY2l0dWRlcyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBkb3R0ZWQgIzJFNjhBRDtcbn0iXX0= */";

/***/ }),

/***/ 29150:
/*!*****************************************************************************!*\
  !*** ./src/app/Pages/interfaces/biomedicos/biomedicos.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\n    <ion-toolbar color=\"dark\">\n\n        <ion-title>AUDITORIA </ion-title>\n        <ion-buttons slot=\"end\">\n\n\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Solcicitud\" (ionChange)=\"cambio($event)\"></ion-searchbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list>\n\n        <div class=\"flex ion-padding\" style=\"background: #f1f1f1; margin-bottom: 10px;\">\n            <h3 style=\"margin: 0;\">Solicitudes</h3>\n            <h3 style=\"margin: 0;\">{{ (actividades | filtrocdo : filtro | filtrogeneralcdo : txt).length }}</h3>\n        </div>\n\n        <div *ngIf=\"!cargaActividades\">\n            <div *ngFor=\"let item of [1,1,1,1]\">\n                <ion-list-header>\n                    <ion-skeleton-text [animated]=\"true\" style=\"width: 80px\"></ion-skeleton-text>\n                </ion-list-header>\n                <ion-item>\n                    <ion-thumbnail slot=\"start\">\n                        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n                    </ion-thumbnail>\n                    <ion-label>\n                        <h3>\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\n                        </h3>\n                        <p>\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\n                        </p>\n                        <p>\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\n                        </p>\n                    </ion-label>\n                </ion-item>\n            </div>\n        </div>\n\n\n\n\n        <div *ngIf=\"cargaActividades\">\n            <ion-item class=\"solicitudes\" lines=\"none\" *ngFor=\"let item of actividades | filtrocdo : filtro | filtrogeneralcdo : txt; let i = index;\">\n                <ion-avatar slot=\"start\" [class]=\"item.color\">\n\n                </ion-avatar>\n                <ion-label>\n                    <div><strong>HABITACIÓN:</strong> <br> <span>{{item.LocationName}}</span></div>\n\n                    <div class=\"separador\"></div>\n                    <div><strong>CAMA:</strong> <br> <span>{{item.AssetName}}</span></div>\n\n                    <div class=\"separador\"></div>\n                    <div><strong>Fecha Solicitud: </strong> <span> {{item.Values | values : 'FECHA_SOLICITUD'}}</span></div>\n\n                    <br>\n\n                    <ion-button mode=\"ios\" expand=\"block\" color=\"primary\" (click)=\"tomar(item, i)\">Tomar Solicitud</ion-button>\n\n\n                </ion-label>\n            </ion-item>\n        </div>\n    </ion-list>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_biomedicos_biomedicos_module_ts.js.map