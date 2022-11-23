"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_inverpack_mantenimientos_mantenimientos_module_ts"],{

/***/ 17346:
/*!********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/inverpack/mantenimientos/mantenimientos-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MantenimientosPageRoutingModule": () => (/* binding */ MantenimientosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mantenimientos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mantenimientos.page */ 97248);




const routes = [
    {
        path: '',
        component: _mantenimientos_page__WEBPACK_IMPORTED_MODULE_0__.MantenimientosPage
    }
];
let MantenimientosPageRoutingModule = class MantenimientosPageRoutingModule {
};
MantenimientosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MantenimientosPageRoutingModule);



/***/ }),

/***/ 49683:
/*!************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/inverpack/mantenimientos/mantenimientos.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MantenimientosPageModule": () => (/* binding */ MantenimientosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mantenimientos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mantenimientos-routing.module */ 17346);
/* harmony import */ var _mantenimientos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mantenimientos.page */ 97248);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let MantenimientosPageModule = class MantenimientosPageModule {
};
MantenimientosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _mantenimientos_routing_module__WEBPACK_IMPORTED_MODULE_0__.MantenimientosPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_mantenimientos_page__WEBPACK_IMPORTED_MODULE_1__.MantenimientosPage]
    })
], MantenimientosPageModule);



/***/ }),

/***/ 97248:
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/inverpack/mantenimientos/mantenimientos.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MantenimientosPage": () => (/* binding */ MantenimientosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mantenimientos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mantenimientos.page.html?ngResource */ 29440);
/* harmony import */ var _mantenimientos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mantenimientos.page.scss?ngResource */ 2397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_opciones_cdo_opciones_cdo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/opciones-cdo/opciones-cdo.component */ 67786);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);
/* harmony import */ var src_app_components_Inverpack_usarios_inver_usarios_inver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/Inverpack/usarios-inver/usarios-inver.component */ 78280);












let MantenimientosPage = class MantenimientosPage {
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
            this.btn = param.btn;
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
    assign(acti) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_Inverpack_usarios_inver_usarios_inver_component__WEBPACK_IMPORTED_MODULE_7__.UsariosInverComponent,
                componentProps: {
                    tkn: this.tkn,
                    acti
                }
            });
            yield modal.present();
            const close = yield modal.onWillDismiss();
            if (close) {
                if (close.data) {
                    yield this.cargarData();
                }
            }
        });
    }
    tomar(acti, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(acti);
            const alert = yield this.alert.create({
                message: 'Seleccione nombre del tècnico',
                header: 'Atención',
                inputs: [
                    {
                        type: 'radio',
                        value: 'B0C8BA3F-757C-44BC-A363-02F4D7B26BA0',
                        label: 'DIEGO CHAMORRO'
                    },
                    {
                        type: 'radio',
                        value: 'D1016D99-0FAA-4C96-B811-77175E9A1B34',
                        label: 'ROLANDO SALAZAR ERAZO'
                    },
                    {
                        type: 'radio',
                        value: '2219E883-62EE-4129-9B2D-53778716339C',
                        label: 'SERGIO DAVID ELVIRA ELVIRA'
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
    getChild(guid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api.childs({
                    AccessToken: this.tkn,
                    ParentGUID: guid
                }).subscribe((dat) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    if (dat.length > 0) {
                        const miData = yield this.getInfo(dat[0].GUID);
                        resolve(miData);
                    }
                    else {
                        resolve([]);
                    }
                }), (err) => {
                    resolve([]);
                });
            });
        });
    }
    reenviar(item) {
        this.loading.createLoading('Reenviando Orden');
        this.api.changeDispath({
            tkn: this.tkn,
            user: item.childs.AssignedTo_GUID,
            status: item.childs.CompanyStatusGUID,
            date: moment_timezone__WEBPACK_IMPORTED_MODULE_5__().add(2, 'minutes').format('YYYY-MM-DD HH:mm'),
            guid: item.childs.GUID
        }).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (data) {
                const toas = yield this.toast.create({
                    message: 'Orden reenviada',
                    duration: 2000
                });
                yield toas.present();
            }
            this.loading.cancelLoading();
        }), (err) => {
            this.loading.cancelLoading();
        });
    }
    cargarData() {
        this.cargaActividades = false;
        this.actividades = [];
        this.api.getActivities2(this.tkn, moment_timezone__WEBPACK_IMPORTED_MODULE_5__().subtract(2, 'days').format('YYYY-MM-DD HH:mm'), moment_timezone__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm'), 'BAB8F522-721F-4E63-BF9F-C99F2CB78AC6').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data, 'MI DATA');
            //  data = data.filter((item) => item.CompanyStatusName == 'Completado')
            for (const item of data) {
                const miData = yield this.getInfo(item.GUID);
                if (miData) {
                    miData.color = this.color(miData.CompanyStatusName);
                    miData.icolor = this.color(miData.CompanyStatusName, true);
                    if (miData.CompanyStatusName == 'AREA DE MANTENIMIENTO') {
                        miData.prioridad = 1;
                    }
                    else if (miData.CompanyStatusName == 'SOLICITUD ENVIADA AL TECNICO') {
                        miData.childs = yield this.getChild(miData.GUID);
                        miData.prioridad = 2;
                    }
                    else {
                        miData.prioridad = 3;
                    }
                    this.actividades.push(miData);
                }
            }
            this.actividades = underscore__WEBPACK_IMPORTED_MODULE_4__.sortBy(this.actividades, 'prioridad');
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
        if (name == 'MANTENIMIENTO FINALIZADO') {
            return ic ? 'iverde' : 'verde';
        }
        if (name == 'SOLICITUD ENVIADA AL TECNICO') {
            return ic ? 'iamarillo' : 'amarillo';
        }
        if (name == 'AREA DE MANTENIMIENTO') {
            return ic ? 'irojo' : 'rojo';
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
};
MantenimientosPage.ctorParameters = () => [
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService }
];
MantenimientosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-mantenimientos',
        template: _mantenimientos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mantenimientos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MantenimientosPage);



/***/ }),

/***/ 2397:
/*!***********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/inverpack/mantenimientos/mantenimientos.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ".main {\n  width: 100%;\n}\n.main ion-grid {\n  width: 40%;\n  margin: 0;\n}\n.main .campo {\n  width: 100%;\n  background-color: #f1f1f1;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 0;\n  height: 50px;\n  border-radius: 20px;\n}\n.main .tarjetas {\n  width: 100%;\n  display: flex;\n}\n.main .tarjetas ion-card {\n  padding: 10px;\n  background-color: #F3F0F8;\n  width: calc(25% - 20px);\n  margin: 10px;\n}\n.main .tarjetas ion-card ion-card-title {\n  font-size: 22px;\n}\n.main .tarjetas ion-card ion-card-content {\n  font-size: 16px;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n.flex img {\n  height: 100px;\n}\n.separador {\n  margin: 10px 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.rojo {\n  background-color: #E9463C;\n  color: #E9463C;\n}\n.amarillo {\n  background-color: #F2E850;\n  color: #F2E850;\n}\n.verde {\n  background-color: #2C6520;\n  color: #2C6520;\n}\n.gris {\n  background-color: #93938B;\n  color: #93938B;\n}\n.irojo {\n  color: #E9463C;\n}\n.iamarillo {\n  color: #F2E850;\n}\n.iverde {\n  color: #2C6520;\n}\n.igris {\n  color: #93938B;\n}\n.azul {\n  background-color: #53B6A4;\n  color: #53B6A4;\n}\n.iazul {\n  color: #53B6A4;\n}\n.solicitudes {\n  font-size: 12px;\n  border-bottom: 5px dotted #2E68AD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnRlbmltaWVudG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRVI7QUFEUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0FBSWhCO0FBRlk7RUFDSSxlQUFBO0FBSWhCO0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtBQUVSO0FBRUE7RUFDSSxjQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUlBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtBQURKO0FBSUE7RUFDSSxjQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7QUFESjtBQUlBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7QUFESjtBQUlBO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FBREoiLCJmaWxlIjoibWFudGVuaW1pZW50b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuY2FtcG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gICAgLnRhcmpldGFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGMEY4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9hZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5cbi5zZXBhcmFkb3Ige1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaW9uLWF2YXRhciB7fVxuXG4ucm9qbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5NDYzQztcbiAgICBjb2xvcjogI0U5NDYzQztcbn1cblxuLmFtYXJpbGxvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFODUwO1xuICAgIGNvbG9yOiAjRjJFODUwO1xufVxuXG4udmVyZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzY1MjA7XG4gICAgY29sb3I6ICMyQzY1MjA7XG59XG5cbi5ncmlzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5MzhCO1xuICAgIGNvbG9yOiAjOTM5MzhCO1xufVxuXG4uaXJvam8ge1xuICAgIGNvbG9yOiAjRTk0NjNDO1xufVxuXG4uaWFtYXJpbGxvIHtcbiAgICBjb2xvcjogI0YyRTg1MDtcbn1cblxuLml2ZXJkZSB7XG4gICAgY29sb3I6ICMyQzY1MjA7XG59XG5cbi5pZ3JpcyB7XG4gICAgY29sb3I6ICM5MzkzOEI7XG59XG5cbi5henVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNCNkE0O1xuICAgIGNvbG9yOiAjNTNCNkE0O1xufVxuXG4uaWF6dWwge1xuICAgIGNvbG9yOiAjNTNCNkE0O1xufVxuXG4uc29saWNpdHVkZXMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggZG90dGVkICMyRTY4QUQ7XG59Il19 */";

/***/ }),

/***/ 29440:
/*!***********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/inverpack/mantenimientos/mantenimientos.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>Mantenimientos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list>\n\n        <div class=\"flex ion-padding\" style=\"background: #f1f1f1; margin-bottom: 10px;\">\n            <h3 style=\"margin: 0;\">Solicitudes</h3>\n            <h3 style=\"margin: 0;\">{{ (actividades | filtrocdo : filtro | filtrogeneralcdo : txt).length }}</h3>\n        </div>\n\n        <div *ngIf=\"!cargaActividades\">\n            <div *ngFor=\"let item of [1,1,1,1]\">\n                <ion-list-header>\n                    <ion-skeleton-text [animated]=\"true\" style=\"width: 80px\"></ion-skeleton-text>\n                </ion-list-header>\n                <ion-item>\n                    <ion-thumbnail slot=\"start\">\n                        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n                    </ion-thumbnail>\n                    <ion-label>\n                        <h3>\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\n                        </h3>\n                        <p>\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\n                        </p>\n                        <p>\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\n                        </p>\n                    </ion-label>\n                </ion-item>\n            </div>\n        </div>\n\n\n\n\n        <div *ngIf=\"cargaActividades\">\n            <ion-item class=\"solicitudes\" lines=\"none\" *ngFor=\"let item of actividades | filtrocdo : filtro | filtrogeneralcdo : txt; let i = index;\">\n                <ion-avatar slot=\"start\" [class]=\"item.color\">\n\n                </ion-avatar>\n                <ion-label>\n                    <div><strong>CATEGORIA:</strong> <br> <span>{{item.LocationName}}</span></div>\n\n                    <div class=\"separador\"></div>\n                    <div><strong>MÁQUINA:</strong> <br> <span>{{item.AssetName}}</span></div>\n\n                    <div class=\"separador\"></div>\n                    <div><strong>CONSECUTIVO:</strong> <br> <span>{{item.Consecutive}}</span></div>\n\n                    <div class=\"separador\"></div>\n                    <div><strong>Fecha Solicitud: </strong> <span> {{item.Values | values : 'FECHAENTRADA'}}</span></div>\n\n                    <br>\n\n                    <div class=\"info\" *ngIf=\" item.CompanyStatusName == 'SOLICITUD ENVIADA AL TECNICO'\">\n                        <div class=\"separador\" *ngIf=\"item.childs.AssignedToName\"></div>\n\n                        <div *ngIf=\"item.childs.AssignedToName\">Despacho:\n                            <div class=\"flex\">\n                                <strong>Para: </strong>\n                                <span>{{ item.childs.AssignedToName }}</span>\n                            </div>\n                            <div class=\"flex\">\n                                <strong>Enviado: </strong>\n                                <span>{{ item.childs.DispatchDateTime }}</span>\n                            </div>\n\n                            <div class=\"flex\">\n                                <strong>Prioridad: </strong>\n                                <span>{{ item.childs.Values | values : 'PRIORIDAD' }}</span>\n                            </div>\n\n                        </div>\n\n                        <div *ngIf=\"!item.childs.AssignedToName\">\n                            <ion-chip color=\"danger\">No se ha enviado al técnico</ion-chip>\n\n                        </div>\n                    </div>\n\n                      <ion-button *ngIf=\"item.prioridad == 1 && btn == 'si'\" mode=\"ios\" expand=\"block\" color=\"light\" (click)=\"assign(item)\">Asignar</ion-button>\n\n                      <ion-button *ngIf=\"item.prioridad == 2 && item.childs.AssignedToName && btn == 'si'\" mode=\"ios\" expand=\"block\" color=\"light\" (click)=\"reenviar(item)\">Reenviar</ion-button>\n\n\n                </ion-label>\n            </ion-item>\n        </div>\n    </ion-list>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_inverpack_mantenimientos_mantenimientos_module_ts.js.map