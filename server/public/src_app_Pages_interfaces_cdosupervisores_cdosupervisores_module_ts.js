"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_cdosupervisores_cdosupervisores_module_ts"],{

/***/ 9656:
/*!************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdosupervisores/cdosupervisores-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdosupervisoresPageRoutingModule": () => (/* binding */ CdosupervisoresPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cdosupervisores_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cdosupervisores.page */ 67144);




const routes = [
    {
        path: '',
        component: _cdosupervisores_page__WEBPACK_IMPORTED_MODULE_0__.CdosupervisoresPage
    }
];
let CdosupervisoresPageRoutingModule = class CdosupervisoresPageRoutingModule {
};
CdosupervisoresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CdosupervisoresPageRoutingModule);



/***/ }),

/***/ 67341:
/*!****************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdosupervisores/cdosupervisores.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdosupervisoresPageModule": () => (/* binding */ CdosupervisoresPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cdosupervisores_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cdosupervisores-routing.module */ 9656);
/* harmony import */ var _cdosupervisores_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cdosupervisores.page */ 67144);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);
/* harmony import */ var angular_cd_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-cd-timer */ 36832);









let CdosupervisoresPageModule = class CdosupervisoresPageModule {
};
CdosupervisoresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cdosupervisores_routing_module__WEBPACK_IMPORTED_MODULE_0__.CdosupervisoresPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            angular_cd_timer__WEBPACK_IMPORTED_MODULE_8__.CdTimerModule
        ],
        declarations: [_cdosupervisores_page__WEBPACK_IMPORTED_MODULE_1__.CdosupervisoresPage]
    })
], CdosupervisoresPageModule);



/***/ }),

/***/ 67144:
/*!**************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdosupervisores/cdosupervisores.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdosupervisoresPage": () => (/* binding */ CdosupervisoresPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cdosupervisores_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cdosupervisores.page.html?ngResource */ 62761);
/* harmony import */ var _cdosupervisores_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cdosupervisores.page.scss?ngResource */ 37529);
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












let CdosupervisoresPage = class CdosupervisoresPage {
    constructor(api, popover, route, modalCtrl, loading) {
        this.api = api;
        this.popover = popover;
        this.route = route;
        this.modalCtrl = modalCtrl;
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
    cargarData() {
        this.cargaActividades = false;
        this.actividades = [];
        this.api.getActivities(this.tkn).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            // data = data.filter((item) => item.CompanyStatusName != 'Borrado' && item.ParentGUID)
            data = data.filter((item) => item.ParentGUID);
            this.unicos = underscore__WEBPACK_IMPORTED_MODULE_4__.uniq(underscore__WEBPACK_IMPORTED_MODULE_4__.map(data, (item) => item.CompanyStatusName)); // .filter((item) => item != 'Borrado')
            this.unicos.unshift('Todos');
            this.padres = underscore__WEBPACK_IMPORTED_MODULE_4__.uniq(underscore__WEBPACK_IMPORTED_MODULE_4__.map(data, (item) => item.ParentGUID));
            const arr = [];
            for (const padre of this.padres) {
                const dt = yield this.getInfo(padre);
                let createdon = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(dt.CreatedOn).format('YYYY-MM-DD');
                let actual = moment_timezone__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
                if (createdon == actual) {
                    var inicio = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(dt.CreatedOn).format('YYYY-MM-DD HH:mm:ss');
                    var fin = moment_timezone__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm:ss');
                    var dur = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(fin).diff(moment_timezone__WEBPACK_IMPORTED_MODULE_5__(inicio), 'seconds');
                    var loadDuration = false;
                    var finDuration = '';
                    var aseoInfo = dt.Values.filter((item) => {
                        return item.apiId == 'TIPO_ASISTENCIAL';
                    });
                    var aseo = '';
                    if (aseoInfo.length > 0) {
                        aseo = aseoInfo[0].Value;
                    }
                    let fec = '';
                    const dataParent = data.filter((it) => it.ParentGUID == padre);
                    const estados = underscore__WEBPACK_IMPORTED_MODULE_4__.uniq(underscore__WEBPACK_IMPORTED_MODULE_4__.map(dataParent, (item) => item.CompanyStatusName));
                    const arrTemp = [];
                    for (const status of estados) {
                        const dataStatus = dataParent.filter((it) => it.CompanyStatusName == status);
                        const childs = [];
                        for (const item of dataStatus) {
                            const miData = yield this.getInfo(item.GUID);
                            if (status == 'Completado') {
                                var gpsfin = miData.Values.filter((item) => {
                                    return item.apiId == 'FECHAHORAFINACTIVIDAD';
                                });
                                if (gpsfin.length > 0) {
                                    var dataGPSFin = JSON.parse(gpsfin[0].Value);
                                    var time = dataGPSFin.filter((item) => item.apiId == 'time');
                                    if (time.length > 0) {
                                        console.log(time[0].Value, 'TIME', dataGPSFin);
                                        finDuration = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(parseFloat(time[0].Value)).format('YYYY-MM-DD HH:mm');
                                        loadDuration = true;
                                    }
                                }
                            }
                            moment_timezone__WEBPACK_IMPORTED_MODULE_5__.locale('es');
                            if (miData) {
                                miData.color = this.color(miData.CompanyStatusName);
                                miData.icolor = this.color(miData.CompanyStatusName, true);
                                if (miData.Values.length) {
                                    const fecha = miData.Values.filter((dat) => dat.apiId == 'FECHA_SOLICITUD');
                                    if (fecha.length > 0) {
                                        fec = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(fecha[0].Value).format('dddd, DD MMMM YYYY hh:mm:a');
                                        const mifecha = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(fecha[0].Value).format('YYYY-MM-DD HH:mm');
                                        const duracion = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(moment_timezone__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm')).diff(moment_timezone__WEBPACK_IMPORTED_MODULE_5__(mifecha), 'minutes');
                                        miData.tiempo = duracion + ' min';
                                    }
                                    else {
                                        miData.tiempo = '---';
                                    }
                                }
                                else {
                                    miData.tiempo = '---';
                                }
                                //  this.actividades.push(miData);
                                childs.push(miData);
                            }
                        }
                        arrTemp.push({
                            color: this.color(status),
                            iconColor: this.color(status, true),
                            status: status,
                            childs: childs
                        });
                    }
                    // guardamos hijos
                    var durCompleted = 0;
                    if (loadDuration) {
                        durCompleted = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(finDuration).diff(moment_timezone__WEBPACK_IMPORTED_MODULE_5__(inicio), 'minutes');
                    }
                    this.actividades.push({
                        loc: dataParent[0].LocationName,
                        ass: dataParent[0].AssetName,
                        fec: fec,
                        status: dt.CompanyStatusName,
                        guid: dt.GUID,
                        user: dt.AssignedToGUID,
                        data: arrTemp,
                        DispatchDateTime: dt.DispatchDateTime,
                        tiempo: dur,
                        loadDuration,
                        fin: finDuration,
                        aseo: aseo,
                        dur: durCompleted
                    });
                    if (loadDuration) {
                    }
                    // this.cargaActividades = true;
                    //  return;
                }
            }
            console.log(arr);
            this.cargaActividades = true;
            console.log(this.actividades);
        }));
    }
    cambioStatus(data) {
        return new Promise((resolve, reject) => {
            this.api.changeDispath({
                tkn: this.tkn,
                guid: data.GUID,
                date: moment_timezone__WEBPACK_IMPORTED_MODULE_5__(data.DispatchDateTime).add(1, 'minutes').format('YYYY-MM-DD HH:mm'),
                user: data.AssignedToGUID,
                status: 'FA3A75FC-596D-4A8E-923B-17D7E6BBA5F5'
            }).subscribe((data) => {
                resolve(true);
            });
        });
    }
    eliminar(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loading.createLoading('Eliminando solicitud...');
            for (const it of item.data) {
                for (const dat of it.childs) {
                    console.log(dat.GUID);
                    yield this.cambioStatus(dat);
                }
            }
            yield this.cambioStatus({
                GUID: item.guid,
                AssignedToGUID: item.user,
                DispatchDateTime: item.DispatchDateTime
            });
            yield this.loading.cancelLoading();
            this.cargarData();
            console.log(item.guid, item.user);
        });
    }
    cambio(event) {
        this.txt = event.detail.value;
    }
    handleRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.txt = '';
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
        if (name == 'Borrado') {
            return ic ? 'igris' : 'gris';
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
CdosupervisoresPage.ctorParameters = () => [
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService }
];
CdosupervisoresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-cdosupervisores',
        template: _cdosupervisores_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cdosupervisores_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CdosupervisoresPage);



/***/ }),

/***/ 37529:
/*!***************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdosupervisores/cdosupervisores.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".main {\n  width: 100%;\n}\n.main ion-grid {\n  width: 40%;\n  margin: 0;\n}\n.main .campo {\n  width: 100%;\n  background-color: #f1f1f1;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 0;\n  height: 50px;\n  border-radius: 20px;\n}\n.main .tarjetas {\n  width: 100%;\n  display: flex;\n}\n.main .tarjetas ion-card {\n  padding: 10px;\n  background-color: #F3F0F8;\n  width: calc(25% - 20px);\n  margin: 10px;\n}\n.main .tarjetas ion-card ion-card-title {\n  font-size: 22px;\n}\n.main .tarjetas ion-card ion-card-content {\n  font-size: 16px;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n.flex img {\n  height: 100px;\n}\n.separador {\n  margin: 10px 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\nion-avatar {\n  width: 30px;\n  height: 30px;\n}\n.rojo {\n  background-color: #E9463C;\n  color: #E9463C;\n}\n.amarillo {\n  background-color: #F2E850;\n  color: #F2E850;\n}\n.verde {\n  background-color: #2C6520;\n  color: #2C6520;\n}\n.gris {\n  background-color: #93938B;\n  color: #93938B;\n}\n.irojo {\n  color: #E9463C;\n}\n.iamarillo {\n  color: #F2E850;\n}\n.iverde {\n  color: #2C6520;\n}\n.igris {\n  color: #93938B;\n}\n.azul {\n  background-color: #53B6A4;\n  color: #53B6A4;\n}\n.iazul {\n  color: #53B6A4;\n}\n.solicitudes {\n  font-size: 12px;\n  border-bottom: 5px dotted #2E68AD;\n}\n.timer {\n  width: 100%;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNkb3N1cGVydmlzb3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFHWjtBQUZZO0VBQ0ksZUFBQTtBQUloQjtBQUZZO0VBQ0ksZUFBQTtBQUloQjtBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQUVBO0VBQ0ksY0FBQTtFQUNBLG9DQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFFSSxjQUFBO0FBQUo7QUFJQTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJjZG9zdXBlcnZpc29yZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuY2FtcG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gICAgLnRhcmpldGFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGMEY4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9hZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5cbi5zZXBhcmFkb3Ige1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucm9qbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5NDYzQztcbiAgICBjb2xvcjogI0U5NDYzQztcbn1cblxuLmFtYXJpbGxvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFODUwO1xuICAgIGNvbG9yOiAjRjJFODUwO1xufVxuXG4udmVyZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzY1MjA7XG4gICAgY29sb3I6ICMyQzY1MjA7XG59XG5cbi5ncmlzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5MzhCO1xuICAgIGNvbG9yOiAjOTM5MzhCO1xufVxuXG4uaXJvam8ge1xuICAgIGNvbG9yOiAjRTk0NjNDO1xufVxuXG4uaWFtYXJpbGxvIHtcbiAgICBjb2xvcjogI0YyRTg1MDtcbn1cblxuLml2ZXJkZSB7XG4gICAgY29sb3I6ICMyQzY1MjA7XG59XG5cbi5pZ3JpcyB7XG4gICAgY29sb3I6ICM5MzkzOEI7XG59XG5cbi5henVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNCNkE0O1xuICAgIGNvbG9yOiAjNTNCNkE0O1xufVxuXG4uaWF6dWwge1xuXG4gICAgY29sb3I6ICM1M0I2QTQ7XG59XG5cblxuLnNvbGljaXR1ZGVzIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGRvdHRlZCAjMkU2OEFEO1xufVxuXG4udGltZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 62761:
/*!***************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/cdosupervisores/cdosupervisores.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\n    <ion-toolbar color=\"dark\">\n\n        <ion-title>AUDITORIA </ion-title>\n        <!-- \n        <ion-buttons slot=\"end\">\n\n           <ion-button (click)=\"control($event)\">\n                <ion-icon name=\"bar-chart\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n\n            <ion-button (click)=\"filtros($event)\">\n                <ion-icon name=\"filter-circle\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>-->\n    </ion-toolbar>\n\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Solcicitud\" (ionChange)=\"cambio($event)\"></ion-searchbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list>\n\n        <div class=\"flex ion-padding\" style=\"background: #f1f1f1; margin-bottom: 10px;\">\n            <h3 style=\"margin: 0;\">Solicitudes</h3>\n            <h3 style=\"margin: 0;\">{{ (actividades | filtrocdo : filtro | filtrogeneralcdo : txt).length }}</h3>\n        </div>\n\n        <div *ngIf=\"!cargaActividades\">\n            <div *ngFor=\"let item of [1,1,1,1]\">\n                <ion-list-header>\n                    <ion-skeleton-text [animated]=\"true\" style=\"width: 80px\"></ion-skeleton-text>\n                </ion-list-header>\n                <ion-item>\n                    <ion-thumbnail slot=\"start\">\n                        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n                    </ion-thumbnail>\n                    <ion-label>\n                        <h3>\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\n                        </h3>\n                        <p>\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\n                        </p>\n                        <p>\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\n                        </p>\n                    </ion-label>\n                </ion-item>\n            </div>\n        </div>\n\n\n\n\n        <!--     <div *ngIf=\"cargaActividades\">\n            <ion-item class=\"solicitudes\" lines=\"none\" *ngFor=\"let item of actividades | filtrocdo : filtro | filtrogeneralcdo : txt\">\n                <ion-avatar slot=\"start\" [class]=\"item.color\">\n\n                </ion-avatar>\n                <ion-label>\n                    <div><strong>HABITACIÓN:</strong> <br> <span>{{item.LocationName}}</span></div>\n\n                    <div class=\"separador\"></div>\n                    <div><strong>CAMA:</strong> <br> <span>{{item.AssetName}}</span></div>\n\n                    <div class=\"separador\"></div>\n                    <div>\n                        <ion-icon name=\"person\" style=\"font-size: 22px;\" class=\"{{ item.icolor }}\"></ion-icon> <br> <span>{{item.AssignedToName}}</span></div> <br>\n                    <div><strong>Fecha Solicitud: </strong> <span> {{item.Values | values : 'FECHA_SOLICITUD'}}</span></div>\n                    <div *ngIf=\"item.color == 'rojo'\"><strong>Asignada: </strong> <span>{{item.DispatchDateTime}}</span></div>\n                    <div *ngIf=\"item.color == 'rojo'\"><strong>Tiempo: </strong> <span>{{item.tiempo}}</span></div>\n\n\n                </ion-label>\n            </ion-item>\n        </div> -->\n\n        <div *ngIf=\"cargaActividades\">\n            <ion-item class=\"solicitudes\" lines=\"none\" *ngFor=\"let item of actividades | filtrocdo : filtro | filtrogeneralcdo : txt\">\n\n                <ion-label>\n                    <div class=\"timer\" *ngIf=\"!item.loadDuration\"> La solicitud lleva\n                        <cd-timer [startTime]=\"item.tiempo\"></cd-timer>\n                    </div> <br>\n                    <div class=\"timer\" *ngIf=\"item.loadDuration\">{{item.dur}} minutos para completar la solicitud</div> <br>\n\n                    <div><strong>HABITACIÓN:</strong> <br> <span>{{item.loc}}</span></div>\n\n                    <div class=\"separador\"></div>\n                    <div><strong>CAMA:</strong> <br> <span>{{item.ass}}</span></div>\n\n\n                    <div class=\"separador\"></div>\n                    <div><strong>FECHA SOLICITUD:</strong> <br> <span>{{item.fec}}</span></div>\n                    <div class=\"separador\"></div>\n                    <div *ngIf=\"item.loadDuration\"><strong>FECHA COMPLETADO:</strong> <br> <span>{{item.fin}}</span></div>\n                    <div *ngIf=\"item.loadDuration\" class=\"separador\"></div>\n                    <div><strong>TIPO DE ASEO:</strong> <br> <span>{{item.aseo}}</span></div>\n\n                    <div class=\"separador\"></div>\n\n\n                    <div *ngIf=\"!item.loadDuration && item.status != 'ELIMINADA POR LIMPIEZA PREVIA A SOLICITUD'\">\n                        <ion-button color=\"danger\" mode=\"ios\" expand=\"block\" (click)=\"eliminar(item)\">Eliminar</ion-button>\n                    </div>\n\n\n\n                    <ion-accordion-group>\n                        <ion-accordion *ngFor=\"let dat of item.data\" value=\"{{dat.status}}\">\n                            <ion-item slot=\"header\" color=\"light\">\n                                <ion-avatar slot=\"start\" [class]=\"dat.color\">\n\n                                </ion-avatar>\n                                <ion-label class=\"ion-text-wrap\">{{ dat.status }} ({{ dat.childs.length }})</ion-label>\n                            </ion-item>\n                            <div class=\"ion-padding\" slot=\"content\">\n                                <ion-item lines=\"none\" *ngFor=\"let user of dat.childs\">\n                                    <ion-icon slot=\"start\" name=\"person\" [class]=\"dat.iconColor\">\n\n                                    </ion-icon>\n                                    <ion-label class=\"ion-text-wrap\">{{ user.AssignedToName }}</ion-label>\n                                </ion-item>\n                            </div>\n                        </ion-accordion>\n\n                    </ion-accordion-group>\n\n                </ion-label>\n            </ion-item>\n        </div>\n    </ion-list>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_cdosupervisores_cdosupervisores_module_ts.js.map