"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_agilissa_agilissa_module_ts"],{

/***/ 57794:
/*!**********************************************************************!*\
  !*** ./src/app/Pages/interfaces/agilissa/agilissa-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgilissaPageRoutingModule": () => (/* binding */ AgilissaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _agilissa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agilissa.page */ 96754);




const routes = [
    {
        path: '',
        component: _agilissa_page__WEBPACK_IMPORTED_MODULE_0__.AgilissaPage
    }
];
let AgilissaPageRoutingModule = class AgilissaPageRoutingModule {
};
AgilissaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgilissaPageRoutingModule);



/***/ }),

/***/ 63785:
/*!**************************************************************!*\
  !*** ./src/app/Pages/interfaces/agilissa/agilissa.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgilissaPageModule": () => (/* binding */ AgilissaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _agilissa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agilissa-routing.module */ 57794);
/* harmony import */ var _agilissa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agilissa.page */ 96754);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let AgilissaPageModule = class AgilissaPageModule {
};
AgilissaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _agilissa_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgilissaPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_agilissa_page__WEBPACK_IMPORTED_MODULE_1__.AgilissaPage]
    })
], AgilissaPageModule);



/***/ }),

/***/ 96754:
/*!************************************************************!*\
  !*** ./src/app/Pages/interfaces/agilissa/agilissa.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgilissaPage": () => (/* binding */ AgilissaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _agilissa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agilissa.page.html?ngResource */ 67015);
/* harmony import */ var _agilissa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agilissa.page.scss?ngResource */ 46289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/web-component */ 4902);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ 85194);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ 69901);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);
/* harmony import */ var src_app_components_carga_task_carga_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/carga-task/carga-task.component */ 65633);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);















(0,_fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__.defineFullCalendarElement)();
let AgilissaPage = class AgilissaPage {
    constructor(mimodal, api, loading, toas, alert) {
        this.mimodal = mimodal;
        this.api = api;
        this.loading = loading;
        this.toas = toas;
        this.alert = alert;
        this.activities = [];
        this.cls = [];
        this.clsUnicos = [];
        this.desc = '';
        this.sedes = [];
        this.descSede = '';
        this.sectores = [];
        this.data = [];
        this.dataSector = [];
        this.sectorSelect = '';
        this.gestiones = [];
        this.descArea = '';
        this.areaSelect = '';
        this.asingTask = false;
        this.infoTask = [];
        this.mode = 'month';
        this.task = [];
        this.users = [];
        this.loadDataTask = true;
        this.from = '';
        this.to = '';
        this.descUser = '';
        // programaciones
        this.taskListProgramming = [];
        this.locations = [];
        this.locInfo = [];
        this.assets = [];
        // creaciones 
        this.taskExecutes = [];
        this.load = false;
        this.viewTask = false;
        this.metas = [];
        this.reloadTask = true;
        this.turno = [];
        this.ejecutadas = [];
        this.mes = moment__WEBPACK_IMPORTED_MODULE_6__().locale('es').format('MMMM YYYY');
    }
    ngAfterViewInit() {
        // console.log("PEOPLE LIST ngAfterViewInit() START !!!")
        new _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__.Draggable(this.events.nativeElement, {
            itemSelector: '.myEvent',
            eventData: function (eventEl) {
                // console.log("DRAG !!!");
                //var returnedEvent = self.createEventObject(self.selectedShift.value, eventEl.innerText);
                //return returnedEvent;
                // console.log()
                let color = '';
                if (eventEl.children[0].innerHTML == 'terminal') {
                    color = '#E85B6A';
                }
                else if (eventEl.children[0].innerHTML == 'rutinario') {
                    color = '#4CA1EC';
                }
                else if (eventEl.children[0].innerHTML == 'mantenimiento') {
                    color = '#7CE675';
                }
                // console.log(eventEl)
                var returnedEvent = {
                    title: eventEl.innerText,
                    startTime: "18:00",
                    backgroundColor: color,
                    id: eventEl.children[3].innerHTML,
                    duration: {
                        minutes: parseFloat(eventEl.children[1].innerHTML)
                    }
                };
                return returnedEvent;
            }
        });
    }
    handleDateClick(arg) {
        this.abrir(arg.dateStr);
    }
    ngOnInit() {
        /*
    
        console.log(JSON.stringify([{apiId: 'ENTRADAGPS', Value: [{
          lat: '3.3597183333333334',
          lng: '-76.53186333333333',
          pro: 'gps',
          tim: 1671209618000,
          tph: 1671209721191,
          alt: '984.2',
          acc: '3.5'
        }]}]))
    
        this.api.updateSurvey( {
          AccessToken: '9DE1EB65B55B9015006EBD40BB3A878C',
          UserGUID: '0D5570FF-E22E-4806-B394-BBE50D55F8A9',
          Duration: '60',
          SearchBy: 'ActivityID',
          SearchValue: '58641782',
          Values: JSON.stringify([
            {apiId:'ENTRADAGPS',
            Value:{
              lat:'3.3597183333333334',
              lng:'-76.53186333333333',
              pro:'gps',
              tim: 1671209618000,
              tph: 1671209721191,
              alt:'984.2',
              acc:'3.5'}
            }, {
              apiId: 'ENTRADAQR',
              Value: {
                txt: 'PRUEBA',
                val: 'PRUEBA',
                lat:'3.3597183333333334',
                lng:'-76.53186333333333',
                pro:'gps',
                tim: 1671209618000,
                tph: 1671209721191,
              }
            }])
      }).subscribe((data: any) => {
    
      })
    
      return;
    
        this.api.aceptActivity({
          
          AccessToken: "9DE1EB65B55B9015006EBD40BB3A878C",
          FormGUID: "zgy1mYBHNm",
          LocationGUID: "",
          AssetGUID:  "",
          UserGUID: "0D5570FF-E22E-4806-B394-BBE50D55F8A9",
          Values: JSON.stringify([
            {apiId:'ENTRADAGPS',
            Value:{
              lat:'3.3597183333333334',
              lng:'-76.53186333333333',
              pro:'gps',
              tim: 1671209618000,
              tph: 1671209721191,
              alt:'984.2',
              acc:'3.5'}
            }, {
              apiId: 'ENTRADAQR',
              Value: {
                txt: 'PRUEBA',
                val: 'PRUEBA',
                lat:'3.3597183333333334',
                lng:'-76.53186333333333',
                pro:'gps',
                tim: 1671209618000,
                tph: 1671209721191,
              }
            }]) ,
          Duration: 60,
          ActivityGUID: "",
          CompanyStatusGUID: "069AC0DD-3EDC-410C-822E-2160946FCCC7"
          
        }).subscribe((data: any) => {
    
        })
    
        */
    }
    getColor(item) {
        let color = '';
        if (item.includes('erminal')) {
            color = '#E85B6A';
        }
        else if (item.includes('uti')) {
            color = '#4CA1EC';
        }
        else if (item.includes('ante')) {
            color = '#7CE675';
        }
        return color;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getLocs();
            // console.log(this.locations, this.assets)
            this.getActivities({
                from: moment__WEBPACK_IMPORTED_MODULE_6__('2022-01-01 00:00').format('YYYY-MM-DD HH:mm'),
                to: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm')
            });
            setTimeout(() => {
                this.load = true;
                const mimodal = this.mimodal;
                this.calendarOptions = {
                    plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__["default"]],
                    dateClick: this.handleDateClick.bind(this),
                    stickyHeaderDates: true,
                    showNonCurrentDates: false,
                    weekends: true,
                    timeZone: 'local',
                    locale: 'es',
                    editable: true,
                    buttonText: {
                        'today': 'Hoy',
                        week: 'Semana',
                        month: 'Mes',
                        day: 'Dia'
                    },
                    // initialView: 'timeGridWeek',
                    /*businessHours:
                    {daysOfWeek: [1], // Monday - Thursday
            
                    startTime: '10:00', // a start time (10am in this example)
                    endTime: '18:00', }
                  , */
                    droppable: true,
                    drop: this.drop.bind(this),
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    },
                    datesSet: this.getDate.bind(this),
                    eventResize: this.rezise.bind(this),
                    eventReceive: this.receive.bind(this),
                    eventDrop: this.receive.bind(this),
                    eventClick: this.eventoClick.bind(this)
                };
                this.getEvents();
                //  this.getActivities();
                //   this.getEvents();
            }, 2000);
        });
    }
    eventoClick(arg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log(arg);
            const id = arg.event.id;
            if (id != 'BREAK') {
                const ejecutada = this.taskExecutes.filter((it) => it.GUID == id);
                let msg = '';
                if (ejecutada.length > 0) {
                    msg = '¿Está seguro de eliminar esta tarea? la acción será de forma permanente';
                }
                else {
                    msg = '¿Está seguro de cancelar la tarea?';
                }
                const alert = yield this.alert.create({
                    header: 'Atención!',
                    message: msg,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel'
                        }, {
                            text: 'Aceptar',
                            handler: () => {
                                if (ejecutada.length > 0) {
                                    this.loading.createLoading('Eliminando actividad');
                                    this.api.deleteActivity({
                                        AccessToken: '6A36C9484E36E45D1A286BC894E9FCE4',
                                        ActivityGUID: id
                                    }).subscribe((data) => {
                                        const evento = this.calendarRef.nativeElement.getApi().getEventById(id);
                                        evento.remove();
                                        this.loading.cancelLoading();
                                    }, (err) => {
                                        this.loading.cancelLoading();
                                    });
                                }
                                else {
                                    const idx = this.taskListProgramming.findIndex((item) => {
                                        return item.from == moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD') && item.to == moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD');
                                    });
                                    console.log(this.taskListProgramming[idx].task, id);
                                    this.taskListProgramming[idx].task = this.taskListProgramming[idx].task.filter((it) => it.idx != id);
                                    console.log(this.taskListProgramming[idx].task, id);
                                    const evento = this.calendarRef.nativeElement.getApi().getEventById(id);
                                    evento.remove();
                                    this.loading.cancelLoading();
                                }
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    getDataTask() {
        // console.log(this.from, this.to)
        return new Promise((resolve, reject) => {
            this.loading.createLoading('Cargando Tareas...');
            this.api.getActivities2('6A36C9484E36E45D1A286BC894E9FCE4', this.from, this.to, '2004307A-B1CF-4109-97D1-8603A63BA6E9').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                const array = [];
                console.log('Hola 4', data);
                for (const item of data) {
                    const dat = yield this.getActivityInfo(item.GUID);
                    if (dat) {
                        const tarea = dat.Values.filter((it) => it.apiId == 'TAREA');
                        const area = dat.Values.filter((it) => it.apiId == 'AREA');
                        // console.log(tarea, area)
                        if (tarea.length > 0 && area.length > 0) {
                            dat.tarea = tarea[0].Value;
                            dat.area = area[0].Value;
                            dat.end = moment__WEBPACK_IMPORTED_MODULE_6__(dat.DispatchDateTime).add(parseFloat(dat.DurationMins), 'minutes').format('YYYY-MM-DD HH:mm');
                            const time = moment__WEBPACK_IMPORTED_MODULE_6__(dat.DispatchDateTime).format('YYYY-MM-DD HH:mm');
                            const from = moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD HH:mm');
                            const to = moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD HH:mm');
                            if (time >= from && time <= to) {
                                if (dat.area == this.areaSelect) {
                                    if (this.infoArea) {
                                        const tipoarea = dat.Values.filter((it) => it.apiId == 'TIPODEAREA');
                                        const tipoZona = dat.Values.filter((it) => it.apiId == 'TIPO_ZONA');
                                        const subArea = dat.Values.filter((it) => it.apiId == 'SUB_AREA');
                                        const estructura = dat.Values.filter((it) => it.apiId == 'TIPO_ESTRUCTURA');
                                        const ubicacion = dat.Values.filter((it) => it.apiId == 'UBICACION');
                                        const piso = dat.Values.filter((it) => it.apiId == 'PISO');
                                        const nmc = dat.Values.filter((it) => it.apiId == 'NMC');
                                        dat.tipoarea = tipoarea.length > 0 ? tipoarea[0].Value : '';
                                        dat.tipozona = tipoZona.length > 0 ? tipoZona[0].Value : '';
                                        dat.subarea = subArea.length > 0 ? subArea[0].Value : '';
                                        dat.estructura = estructura.length > 0 ? estructura[0].Value : '';
                                        dat.ubicacion = ubicacion.length > 0 ? ubicacion[0].Value : '';
                                        dat.piso = piso.length > 0 ? piso[0].Value : '';
                                        dat.nmc = nmc.length > 0 ? nmc[0].Value : '';
                                        if (dat.tipoarea == this.infoArea.tipoarea && dat.tipozona == this.infoArea.tipozona && dat.subarea == this.infoArea.subarea && dat.estructura == this.infoArea.estructura && dat.ubicacion == this.infoArea.ubicacion && dat.piso == this.infoArea.piso && dat.nmc == this.infoArea.nmc) {
                                            array.push(dat);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.reloadTask = true;
                console.log('Terminadmos');
                // console.log(array, 'array')
                this.loading.cancelLoading();
                resolve(array);
            }), () => this.loading.cancelLoading());
        });
    }
    saveTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const idx = this.taskListProgramming.findIndex((item) => {
                return item.from == moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD') && item.to == moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD');
            });
            console.log('TASK', this.taskListProgramming);
            const modal = yield this.mimodal.create({
                component: src_app_components_carga_task_carga_task_component__WEBPACK_IMPORTED_MODULE_10__.CargaTaskComponent,
                componentProps: {
                    tkn: '6A36C9484E36E45D1A286BC894E9FCE4',
                    ejecutadas: this.ejecutadas,
                    data: {
                        task: this.taskListProgramming.length > 0 ? this.taskListProgramming[idx].task : []
                    }
                }
            });
            yield modal.present();
            const resp = yield modal.onWillDismiss();
            if (resp.data) {
                if (this.taskListProgramming.length > 0) {
                    underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.taskListProgramming[idx].task, (it, i) => {
                        const evento = this.calendarRef.nativeElement.getApi().getEventById(it.idx);
                        evento.remove();
                        this.taskListProgramming[idx].task = this.taskListProgramming[idx].task.filter((item) => item.idx != it.idx);
                    });
                    underscore__WEBPACK_IMPORTED_MODULE_8__.each(resp.data, (it, i) => {
                        this.calendarRef.nativeElement.getApi().addEvent({
                            title: it.tipo + ' ' + this.userSelect.FirstName,
                            start: moment__WEBPACK_IMPORTED_MODULE_6__(it.start).format('YYYY-MM-DD HH:mm'),
                            end: moment__WEBPACK_IMPORTED_MODULE_6__(it.end).format('YYYY-MM-DD HH:mm'),
                            id: it.GUID,
                            editable: true,
                            allDay: false,
                            // display: 'background',
                            backgroundColor: this.getColor(it.tipo),
                        });
                    });
                }
            }
        });
    }
    dupliTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.taskExecutes, this.mode);
            const modal = yield this.mimodal.create({
                component: src_app_components_carga_task_carga_task_component__WEBPACK_IMPORTED_MODULE_10__.CargaTaskComponent,
                componentProps: {
                    tkn: '6A36C9484E36E45D1A286BC894E9FCE4',
                    type: 'dupli',
                    from: this.from,
                    mode: this.mode,
                    executes: this.taskExecutes
                }
            });
            yield modal.present();
            const resp = yield modal.onWillDismiss();
        });
    }
    reassignedTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.taskExecutes);
            const modal = yield this.mimodal.create({
                component: src_app_components_carga_task_carga_task_component__WEBPACK_IMPORTED_MODULE_10__.CargaTaskComponent,
                componentProps: {
                    tkn: '6A36C9484E36E45D1A286BC894E9FCE4',
                    type: 'reassigned',
                    users: this.users,
                    userGUID: this.userSelect.ID,
                    executes: this.taskExecutes
                }
            });
            yield modal.present();
            const resp = yield modal.onWillDismiss();
            if (resp.data) {
                this.eventsFormat();
            }
        });
    }
    getLocs() {
        return new Promise((resolve, reject) => {
            this.api.getLocs({
                AccessToken: '6A36C9484E36E45D1A286BC894E9FCE4',
                LocationTypeID: '08202596-0EBE-423C-97AC-B250F78873E7'
            }).subscribe((data) => {
                if (data) {
                    this.locations = data;
                }
                else {
                }
                resolve(true);
            });
        });
    }
    getAssets() {
        return new Promise((resolve, reject) => {
            this.api.getAsset({
                AccessToken: '6A36C9484E36E45D1A286BC894E9FCE4',
                LocationID: this.locInfo[0].GUID //'QjnQlNylaD'
            }).subscribe((data) => {
                // console.log(this.locInfo, 'todo')
                resolve(data);
            });
        });
    }
    receive(info) {
        // console.log(this.cls, this.sedes, this.userSelect)
        if (info.event.id.includes('-')) {
            const exist = this.ejecutadas.findIndex((it) => it.guid == info.event.id);
            if (exist >= 0) {
                this.ejecutadas[exist].date = moment__WEBPACK_IMPORTED_MODULE_6__(info.event.startStr).format('YYYY-MM-DD HH:mm');
            }
            else {
                this.ejecutadas.push({
                    date: moment__WEBPACK_IMPORTED_MODULE_6__(info.event.startStr).format('YYYY-MM-DD HH:mm'),
                    dur: 0,
                    guid: info.event.id
                });
            }
            console.log(info, this.ejecutadas);
        }
        else {
            if (!this.userSelect) {
                this.toas.newCreatedToast('Debe seleccionar un usuario para asignar', false);
                return;
            }
            console.log('recibido');
            const idx = this.taskListProgramming.findIndex((item) => {
                return item.from == moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD') && item.to == moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD');
            });
            const actiIdx = this.taskListProgramming[idx].task.findIndex((item) => {
                return item.idx == info.event.id;
            });
            // console.log(this.taskListProgramming, 'ACTI', info.event.id)
            // console.log(actiIdx, 'INDICE')
            const end = moment__WEBPACK_IMPORTED_MODULE_6__(info.event.endStr).format('YYYY-MM-DD HH:mm');
            const start = moment__WEBPACK_IMPORTED_MODULE_6__(info.event.startStr).format('YYYY-MM-DD HH:mm');
            const dur = moment__WEBPACK_IMPORTED_MODULE_6__(end).diff(moment__WEBPACK_IMPORTED_MODULE_6__(start), 'minutes');
            this.taskListProgramming[idx].task[actiIdx].start = info.event.startStr;
            this.taskListProgramming[idx].task[actiIdx].end = info.event.endStr;
            this.taskListProgramming[idx].task[actiIdx].dur = dur;
            this.taskListProgramming[idx].task[actiIdx].loc = this.locInfo[0].GUID;
            this.taskListProgramming[idx].task[actiIdx].ass = this.assInfo[0].GUID;
            this.taskListProgramming[idx].task[actiIdx].user = this.userSelect.ID;
            this.taskListProgramming[idx].task[actiIdx].sector = this.sectorSelect;
            this.taskListProgramming[idx].task[actiIdx].area = this.gestionSelect;
            this.taskListProgramming[idx].task[actiIdx].subarea = this.infoArea.subarea;
            this.taskListProgramming[idx].task[actiIdx].tipoarea = this.infoArea.tipoarea;
            this.taskListProgramming[idx].task[actiIdx].tipozona = this.infoArea.tipozona;
            this.taskListProgramming[idx].task[actiIdx].estructura = this.infoArea.estructura;
            this.taskListProgramming[idx].task[actiIdx].ubicacion = this.infoArea.ubicacion;
            this.taskListProgramming[idx].task[actiIdx].piso = this.infoArea.piso;
            this.taskListProgramming[idx].task[actiIdx].nmc = this.infoArea.nmc;
            console.log(this.taskListProgramming, this.infoArea);
        }
    }
    rezise(info) {
        if (info.event.id.includes('-')) {
            const exist = this.ejecutadas.findIndex((it) => it.guid == info.event.id);
            if (exist >= 0) {
                this.ejecutadas[exist].date = moment__WEBPACK_IMPORTED_MODULE_6__(info.event.startStr).format('YYYY-MM-DD HH:mm');
            }
            else {
                this.ejecutadas.push({
                    date: moment__WEBPACK_IMPORTED_MODULE_6__(info.event.startStr).format('YYYY-MM-DD HH:mm'),
                    dur: 0,
                    guid: info.event.id
                });
            }
            console.log(info);
        }
        else {
            if (!this.userSelect) {
                this.toas.newCreatedToast('Debe seleccionar un usuario para asignar', false);
                return;
            }
            const idx = this.taskListProgramming.findIndex((item) => {
                return item.from == moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD') && item.to == moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD');
            });
            const actiIdx = this.taskListProgramming[idx].task.findIndex((item) => {
                return item.idx == info.event.id;
            });
            const end = moment__WEBPACK_IMPORTED_MODULE_6__(info.event.endStr).format('YYYY-MM-DD HH:mm');
            const start = moment__WEBPACK_IMPORTED_MODULE_6__(info.event.startStr).format('YYYY-MM-DD HH:mm');
            const dur = moment__WEBPACK_IMPORTED_MODULE_6__(end).diff(moment__WEBPACK_IMPORTED_MODULE_6__(start), 'minutes');
            this.taskListProgramming[idx].task[actiIdx].start = info.event.startStr;
            this.taskListProgramming[idx].task[actiIdx].end = info.event.endStr;
            this.taskListProgramming[idx].task[actiIdx].dur = dur;
        }
        // console.log(this.taskListProgramming)
        /*  if (!confirm("is this okay?")) {
            info.revert();
          } */
    }
    drop(arg) {
        // console.log(arg,  arg  )
        // is the "remove after drop" checkbox checked?
        //  if (document.getElementById("drop-remove").checked) {
        // if so, remove the element from the "Draggable Events" list
        arg.draggedEl.parentNode.removeChild(arg.draggedEl);
        const exist = this.taskListProgramming.filter((item) => {
            return item.from == moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD') && item.to == moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD');
        });
        if (exist.length > 0) {
            const idx = this.taskListProgramming.findIndex((item) => {
                return item.from == moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD') && item.to == moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD');
            });
            this.taskListProgramming[idx].task.push(arg.draggedEl.data);
        }
        else {
            this.taskListProgramming.push({
                from: moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD'),
                to: moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD'),
                task: [arg.draggedEl.data]
            });
        }
        console.log('Drop');
        // console.log(this.taskListProgramming)
        //   }
    }
    getDate(arg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log('GET DATE');
            if (this.taskExecutes.length > 0 || this.taskListProgramming.length > 0) {
                this.calendarRef.nativeElement.getApi().removeAllEvents();
            }
            const from = moment__WEBPACK_IMPORTED_MODULE_6__(arg.startStr).format('YYYY-MM-DD HH:mm');
            const to = moment__WEBPACK_IMPORTED_MODULE_6__(arg.endStr).format('YYYY-MM-DD HH:mm');
            const diff = moment__WEBPACK_IMPORTED_MODULE_6__(to).diff(moment__WEBPACK_IMPORTED_MODULE_6__(from), 'days');
            // console.log(diff, this.load, this.from, this.to)
            this.from = from;
            this.to = to;
            if (this.asingTask && this.reloadTask) {
                // console.log('entramos')
                const rp = yield this.getDataTask();
                // console.log('salimos', rp)
                if (rp) {
                    // console.log(rp, 'todo')
                    this.taskExecutes = rp;
                    console.log(this.taskExecutes, 'ejecutados');
                    if (this.taskExecutes.length > 0) {
                        underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.taskExecutes, (it, i) => {
                            if (it.AssignedToGUID == this.userSelect.ID) {
                                this.calendarRef.nativeElement.getApi().addEvent({
                                    title: it.tarea + ' ' + this.userSelect.FirstName,
                                    start: moment__WEBPACK_IMPORTED_MODULE_6__(it.DispatchDateTime).format('YYYY-MM-DD HH:mm'),
                                    end: moment__WEBPACK_IMPORTED_MODULE_6__(it.end).format('YYYY-MM-DD HH:mm'),
                                    id: it.GUID,
                                    allDay: false,
                                    editable: true,
                                    //  display: this.viewTask ? '' :  'background',
                                    backgroundColor: this.getColor(it.tarea),
                                });
                            }
                        });
                    }
                }
            }
            // console.log(this.taskExecutes);
            // console.log(arg, 'Hola')
            if (diff == 1) {
                this.mode = 'day';
            }
            else if (diff == 6 || diff == 7) {
                this.mode = 'week';
            }
            else if (diff >= 30) {
                this.mode = 'month';
            }
            if (this.infoTask.length > 0 && this.reloadTask) {
                // if (diff <= 7) {
                this.eventsFormat(this.userSelect ? false : true);
                // }
            }
            /*  this.getActivities({
                from,
                to
              }) */
        });
    }
    getActivityInfo(guid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api.getActivitieInfo('6A36C9484E36E45D1A286BC894E9FCE4', guid).subscribe((data) => {
                    if (data) {
                        resolve(data);
                    }
                    else {
                        resolve(false);
                    }
                }, (err) => resolve(false));
            });
        });
    }
    getActivities(data) {
        this.loading.createLoading('Cargando información');
        if (this.activities.length > 0) {
            this.calendarRef.nativeElement.getApi().removeAllEvents();
        }
        this.activities = [];
        this.api.getActivities2('6A36C9484E36E45D1A286BC894E9FCE4', data.from, data.to, '0C664C5A-3605-486F-94FE-BC3A027BCF65').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(data)
            for (const item of data) {
                const resp = yield this.getActivityInfo(item.GUID);
                if (resp) {
                    this.activities.push(resp);
                }
            }
            let listCls = [];
            underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.activities, (item, i) => {
                const clientes = item.Values.filter((val) => val.apiId == 'Cliente');
                const gestiones = item.Values.filter((val) => val.apiId == 'INFORMACION_ESTRUCTURAL');
                item.cls = [];
                item.gestiones = [];
                if (clientes.length > 0) {
                    // var unicos = _.uniq(_.map(clientes, (l) => { return l.name}))
                    underscore__WEBPACK_IMPORTED_MODULE_8__.each(clientes[0].Value, (l, i) => {
                        const name = l.Value.filter((it) => it.apiId == 'name');
                        const sede = l.Value.filter((it) => it.apiId == 'sede');
                        if (name.length > 0) {
                            item.cls.push({
                                cliente: name[0].Value,
                                sede: sede[0].Value
                            });
                            listCls.push({
                                cliente: name[0].Value,
                                sede: sede[0].Value
                            });
                        }
                    });
                    //  // console.log(unicos)
                }
                // console.log(gestiones, 'gestiones')
                if (gestiones.length > 0) {
                    // var unicos = _.uniq(_.map(clientes, (l) => { return l.name}))
                    underscore__WEBPACK_IMPORTED_MODULE_8__.each(gestiones[0].Value, (l, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        const gestion = l.Value.filter((it) => it.apiId == 'GESTION_AREA');
                        if (gestion.length > 0) {
                            // console.log(gestion[0].Value)
                            try {
                                const valores = JSON.parse(gestion[0].Value);
                                //  // console.log(valores, ' Valores')
                                if (valores.gui) {
                                    const resp = yield this.getActivityInfo(valores.gui);
                                    if (resp) {
                                        item.gestiones.push(resp);
                                    }
                                }
                            }
                            catch (e) {
                                // console.log('error', e)
                            }
                        }
                    }));
                    //  // console.log(unicos)
                }
                /* this.calendarRef.nativeElement.getApi().addEvent({
                     title: item.LocationName,
                     start: moment(item.DispatchDateTime).format('YYYY-MM-DD HH:mm'),
                     end:  moment(item.DispatchDateTime).add(1,'hours').format('YYYY-MM-DD HH:mm'),
                     id: JSON.stringify([]),
                     allDay: false,
                     backgroundColor: this.getColor(valor),
                     textColor: '#000000',
              
       
                     
                   })  */
            });
            this.clsUnicos = underscore__WEBPACK_IMPORTED_MODULE_8__.uniq(underscore__WEBPACK_IMPORTED_MODULE_8__.map(listCls, (l) => { return l.cliente; }));
            this.cls = listCls;
            // console.log(this.activities)
            this.loading.cancelLoading();
            /*
            
                  */
        }));
    }
    select(item) {
        this.clSelect = item;
        this.locInfo = this.locations.filter((it) => it.Name == item);
        this.desc = '';
        this.descSede = '';
        this.sectores = [];
        this.descArea = '';
        // console.log(this.cls)
        this.sedeSelect = false;
        this.areaSelect = '';
        this.sectorSelect = '';
        const data = this.cls.filter((it) => it.cliente == item);
        this.sedes = underscore__WEBPACK_IMPORTED_MODULE_8__.uniq(underscore__WEBPACK_IMPORTED_MODULE_8__.map(data, (l) => { return l.sede; }));
        this.gestionSelect = false;
        this.gestiones = [];
        // console.log(this.sedes)
        // this.transformData()
    }
    selectSede(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.sedeSelect = item;
            this.areaSelect = '';
            this.sectorSelect = '';
            this.sectores = [];
            this.descArea = '';
            const resp = yield this.getAssets();
            // console.log(resp);
            this.assInfo = resp.filter((it) => it.Name == item);
            this.gestionSelect = false;
            this.gestiones = [];
            this.descSede = '';
            this.transformData();
        });
    }
    transformData() {
        this.data = this.activities.filter((item) => {
            const dataCLiente = item.cls.filter((it) => it.cliente == this.clSelect && it.sede == this.sedeSelect);
            if (dataCLiente.length > 0) {
                return item;
            }
        });
        this.sectores = underscore__WEBPACK_IMPORTED_MODULE_8__.uniq(underscore__WEBPACK_IMPORTED_MODULE_8__.map(this.data, (l) => { return l.LocationName; }));
        this.desc = '';
        // console.log(this.data);
    }
    selectSector(event) {
        this.sectorSelect = event.detail.value;
        this.areaSelect = '';
        this.descArea = '';
        this.dataSector = this.data.filter((item) => item.LocationName == event.detail.value);
        console.log(this.dataSector, 'sector', this.sectorSelect);
        this.dataSector = underscore__WEBPACK_IMPORTED_MODULE_8__.sortBy(this.dataSector, 'ID');
        this.dataSectorFiltrada = this.dataSector[this.dataSector.length - 1];
        this.gestionSelect = false;
        this.dataSectorFiltrada.gestiones = underscore__WEBPACK_IMPORTED_MODULE_8__.uniq(this.dataSectorFiltrada.gestiones, (i) => i.ID);
        this.dataSectorFiltrada.gestiones = this.dataSectorFiltrada.gestiones.filter((it) => it.LocationName == this.sectorSelect);
        console.log(this.dataSectorFiltrada.gestiones, 'Hola gestión');
        underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.dataSectorFiltrada.gestiones, (dat, i) => {
            const tipoarea = dat.Values.filter((it) => it.apiId == 'TIPO_AREA');
            const tipoZona = dat.Values.filter((it) => it.apiId == 'TIPO_ZONA');
            const subArea = dat.Values.filter((it) => it.apiId == 'SUB_AREA');
            const estructura = dat.Values.filter((it) => it.apiId == 'TIPO_ESTRUCTURA');
            const ubicacion = dat.Values.filter((it) => it.apiId == 'UBICACION');
            const piso = dat.Values.filter((it) => it.apiId == 'PISO');
            const nmc = dat.Values.filter((it) => it.apiId == 'NOMENCLATURA_ESPECIFICA_CLIENTE');
            dat.tipoarea = tipoarea.length > 0 ? tipoarea[0].Value : '';
            dat.tipozona = tipoZona.length > 0 ? tipoZona[0].Value : '';
            dat.subarea = subArea.length > 0 ? subArea[0].Value : '';
            dat.estructura = estructura.length > 0 ? estructura[0].Value : '';
            dat.ubicacion = ubicacion.length > 0 ? ubicacion[0].Value : '';
            dat.piso = piso.length > 0 ? piso[0].Value : '';
            dat.nmc = nmc.length > 0 ? nmc[0].Value : '';
        });
        // console.log(this.dataSector)
        this.gestiones = this.dataSectorFiltrada.gestiones;
        console.log(this.gestiones);
    }
    selectArea(item, info) {
        console.log(item, 'area', info);
        this.gestionSelect = item;
        this.areaSelect = item;
        this.infoArea = info;
        this.userSelect = false;
        this.calendarRef.nativeElement.getApi().removeAllEvents();
        this.taskListProgramming = [];
        this.task = [];
        this.metas = [];
        this.turno = [];
        this.transformDataGestion();
    }
    borrarUsuario() {
        this.userSelect = false;
        this.calendarRef.nativeElement.getApi().removeAllEvents();
        this.taskListProgramming = [];
        this.task = [];
        this.metas = [];
        this.turno = [];
        this.transformDataGestion();
    }
    transformDataGestion() {
        /*  const dataTareas = this.dataSectorFiltrada.gestiones.filter((item) => {
            return item.AssetName == this.gestionSelect
          }) */
        this.descArea = '';
        this.infoTask = this.infoArea.Values;
        console.log(this.infoArea.Values);
        console.log('Hola', this.infoTask);
        this.eventsFormat(true);
    }
    getEvents() {
        setTimeout(() => {
        }, 1000);
    }
    search(event) {
        this.desc = event.detail.value;
    }
    search2(event) {
        this.descArea = event.detail.value;
    }
    search3(event) {
        this.descSede = event.detail.value;
    }
    search4(event) {
        this.descUser = event.detail.value;
    }
    asingTaskOpen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.asingTask = true;
            this.loadDataTask = false;
            const users = yield this.loadUsers();
            // console.log(users, 'usuarios')
            if (users) {
                this.users = users.filter((item) => item.WorkzoneName == this.clSelect);
            }
            this.loadDataTask = true;
        });
    }
    formatDate(item) {
        let separar = item.split(':');
        let first = separar[0];
        let hora = '';
        if (first.length == 1) {
            hora = '0' + first + ':' + separar[1];
        }
        else if (first.length > 1) {
            hora = first + ':' + separar[1];
        }
        return hora;
    }
    addBreak(title, arr, variable, variable2, dia) {
        moment__WEBPACK_IMPORTED_MODULE_6__.locale('es');
        let desde = arr[0].Values.filter((it) => it[variable]).length > 0 ? arr[0].Values.filter((it) => it[variable])[0][variable] : '';
        let hasta = arr[0].Values.filter((it) => it[variable2]).length > 0 ? arr[0].Values.filter((it) => it[variable2])[0][variable2] : '';
        if (desde && hasta) {
            let diff = moment__WEBPACK_IMPORTED_MODULE_6__(this.to).diff(moment__WEBPACK_IMPORTED_MODULE_6__(this.from), 'days');
            let horaDesde = this.formatDate(desde);
            let horaHasta = this.formatDate(hasta);
            for (let i = 0; i < diff; i++) {
                let fecha = moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD');
                console.log(i);
                if (i >= 1) {
                    fecha = moment__WEBPACK_IMPORTED_MODULE_6__(this.from).add(i, 'days').format('YYYY-MM-DD');
                }
                var diaName = moment__WEBPACK_IMPORTED_MODULE_6__(fecha).format('dddd');
                if (diaName == dia) {
                    console.log(diaName);
                    let generalDesde = moment__WEBPACK_IMPORTED_MODULE_6__(fecha + ' ' + horaDesde).format('YYYY-MM-DD HH:mm');
                    let generalHasta = moment__WEBPACK_IMPORTED_MODULE_6__(fecha + ' ' + horaHasta).format('YYYY-MM-DD HH:mm');
                    console.log(generalDesde);
                    this.calendarRef.nativeElement.getApi().addEvent({
                        title: title,
                        start: generalDesde,
                        end: generalHasta,
                        id: 'BREAK',
                        editable: false,
                        allDay: false,
                        //  display: 'background',
                        backgroundColor: '#e1e1e1',
                        color: '#000000',
                        textColor: '#000000'
                    });
                }
            }
        }
    }
    selectUser(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.userSelect = item;
            this.descUser = '';
            console.log(item);
            const data = yield this.getTurnos();
            if (data) {
                if (data.length > 0) {
                }
                const turnos = data.filter((it) => it.Name == item.apiRef1);
                if (turnos.length > 0) {
                    if (turnos[0].Values.length > 0) {
                        this.turno = turnos;
                        console.log(turnos);
                        let lunesDesde = turnos[0].Values.filter((it) => it.DESDE1).length > 0 ? turnos[0].Values.filter((it) => it.DESDE1)[0].DESDE1 : '';
                        let lunesHasta = turnos[0].Values.filter((it) => it.HASTA1).length > 0 ? turnos[0].Values.filter((it) => it.HASTA1)[0].HASTA1 : '';
                        let martesDesde = turnos[0].Values.filter((it) => it.DESDE2).length > 0 ? turnos[0].Values.filter((it) => it.DESDE2)[0].DESDE2 : '';
                        let martesHasta = turnos[0].Values.filter((it) => it.HASTA2).length > 0 ? turnos[0].Values.filter((it) => it.HASTA2)[0].HASTA2 : '';
                        let miercolesDesde = turnos[0].Values.filter((it) => it.DESDE3).length > 0 ? turnos[0].Values.filter((it) => it.DESDE3)[0].DESDE3 : '';
                        let miercolesHasta = turnos[0].Values.filter((it) => it.HASTA3).length > 0 ? turnos[0].Values.filter((it) => it.HASTA3)[0].HASTA3 : '';
                        let juevesDesde = turnos[0].Values.filter((it) => it.DESDE4).length > 0 ? turnos[0].Values.filter((it) => it.DESDE4)[0].DESDE4 : '';
                        let juevesHasta = turnos[0].Values.filter((it) => it.HASTA4).length > 0 ? turnos[0].Values.filter((it) => it.HASTA4)[0].HASTA4 : '';
                        let viernesDesde = turnos[0].Values.filter((it) => it.DESDE5).length > 0 ? turnos[0].Values.filter((it) => it.DESDE5)[0].DESDE5 : '';
                        let viernesHasta = turnos[0].Values.filter((it) => it.HASTA5).length > 0 ? turnos[0].Values.filter((it) => it.HASTA5)[0].HASTA5 : '';
                        let sabadoDesde = turnos[0].Values.filter((it) => it.DESDE6).length > 0 ? turnos[0].Values.filter((it) => it.DESDE6)[0].DESDE6 : '';
                        let sabadoHasta = turnos[0].Values.filter((it) => it.HASTA6).length > 0 ? turnos[0].Values.filter((it) => it.HASTA6)[0].HASTA6 : '';
                        let arrHoras = [lunesDesde, lunesHasta, martesDesde, martesHasta, miercolesDesde, miercolesHasta, juevesDesde, juevesHasta, viernesDesde, viernesHasta, sabadoDesde, sabadoHasta];
                        let arrFechas = [];
                        let horas = [];
                        arrHoras = arrHoras.filter((it) => it);
                        underscore__WEBPACK_IMPORTED_MODULE_8__.each(arrHoras, (item, i) => {
                            console.log(item);
                            let separar = item.split(':');
                            let first = separar[0];
                            let hora = '';
                            if (first.length == 1) {
                                hora = '0' + first + ':' + separar[1];
                            }
                            else if (first.length > 1) {
                                hora = first + ':' + separar[1];
                            }
                            arrFechas.push(moment__WEBPACK_IMPORTED_MODULE_6__('2022-12-31 ' + hora).format('YYYY-MM-DD HH:mm'));
                        });
                        arrFechas = underscore__WEBPACK_IMPORTED_MODULE_8__.sortBy(arrFechas);
                        underscore__WEBPACK_IMPORTED_MODULE_8__.each(arrFechas, (dat, i) => {
                            horas.push(moment__WEBPACK_IMPORTED_MODULE_6__(dat).format('HH:mm:ss'));
                        });
                        if ((lunesDesde && lunesHasta) || (martesDesde && martesHasta) || (miercolesDesde && miercolesHasta) || (juevesDesde && juevesHasta) || (viernesDesde && viernesHasta) || (sabadoDesde && sabadoHasta)) {
                            this.reloadTask = false;
                            this.calendarRef.nativeElement.getApi().setOption("hiddenDays", [0]);
                            this.calendarRef.nativeElement.getApi().setOption("slotMinTime", horas[0]);
                            this.calendarRef.nativeElement.getApi().setOption("slotMaxTime", horas[horas.length - 1]);
                            this.calendarRef.nativeElement.getApi().setOption('slotDuration', '00:01:00');
                            console.log('Hola2');
                            this.eventsFormat();
                        }
                        else {
                            this.toas.newCreatedToast('No tiene ningún día configurado', false);
                        }
                    }
                    else {
                        this.task = [];
                        this.calendarRef.nativeElement.getApi().removeAllEvents();
                        this.toas.newCreatedToast('El turno no esta completado, por favor mirar la configuración', false);
                    }
                }
                else {
                    this.task = [];
                    this.calendarRef.nativeElement.getApi().removeAllEvents();
                    this.toas.newCreatedToast('El turno no se encuentra disponible, por favor mirar la configuración', false);
                }
            }
        });
    }
    getTurnos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api.getLists({
                    AccessToken: '6A36C9484E36E45D1A286BC894E9FCE4',
                    ListTypeGUID: '14b7zm1vsA'
                }).subscribe((data) => {
                    console.log(data, 'LISTAS');
                    resolve(data);
                }, (err) => {
                    resolve(false);
                });
            });
        });
    }
    eventsFormat(area) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Hola');
            const rp = yield this.getDataTask();
            console.log('Hola 3 ', rp);
            if (rp) {
                this.taskExecutes = rp;
            }
            console.log(this.turno);
            this.task = [];
            this.metas = [];
            this.calendarRef.nativeElement.getApi().removeAllEvents();
            if (this.turno.length > 0) {
                this.addBreak('ALISTAMIENTO', this.turno, 'DESDEL1', 'HASTAL1', 'lunes');
                this.addBreak('FINALIZACION DE LABORES', this.turno, 'DESDEL2', 'HASTAL2', 'lunes');
                this.addBreak('PAUSA ACTIVA', this.turno, 'DESDEL3', 'HASTAL3', 'lunes');
                this.addBreak('BREAK', this.turno, 'DESDEL4', 'HASTAL4', 'lunes');
                this.addBreak('ALMUERZO', this.turno, 'DESDEL5', 'HASTAL5', 'lunes');
                this.addBreak('ALISTAMIENTO', this.turno, 'DESDEM1', 'HASTAM1', 'martes');
                this.addBreak('FINALIZACION DE LABORES', this.turno, 'DESDEM2', 'HASTAM2', 'martes');
                this.addBreak('PAUSA ACTIVA', this.turno, 'DESDEM3', 'HASTAM3', 'martes');
                this.addBreak('BREAK', this.turno, 'DESDEM4', 'HASTAM4', 'martes');
                this.addBreak('ALMUERZO', this.turno, 'DESDEM5', 'HASTAM5', 'martes');
                this.addBreak('ALISTAMIENTO', this.turno, 'DESDEMI1', 'HASTAMI1', 'miércoles');
                this.addBreak('FINALIZACION DE LABORES', this.turno, 'DESDEMI2', 'HASTAMI2', 'miércoles');
                this.addBreak('PAUSA ACTIVA', this.turno, 'DESDEMI3', 'HASTAMI3', 'miércoles');
                this.addBreak('BREAK', this.turno, 'DESDEMI4', 'HASTAMI4', 'miércoles');
                this.addBreak('ALMUERZO', this.turno, 'DESDEMI5', 'HASTAMI5', 'miércoles');
                this.addBreak('ALISTAMIENTO', this.turno, 'DESDEJ1', 'HASTAJ1', 'jueves');
                this.addBreak('FINALIZACION DE LABORES', this.turno, 'DESDEJ2', 'HASTAJ2', 'jueves');
                this.addBreak('PAUSA ACTIVA', this.turno, 'DESDEJ3', 'HASTAJ3', 'jueves');
                this.addBreak('BREAK', this.turno, 'DESDEJ4', 'HASTAJ4', 'jueves');
                this.addBreak('ALMUERZO', this.turno, 'DESDEJ5', 'HASTAJ5', 'jueves');
                this.addBreak('ALISTAMIENTO', this.turno, 'DESDEV1', 'HASTAV1', 'viernes');
                this.addBreak('FINALIZACION DE LABORES', this.turno, 'DESDEV2', 'HASTAV2', 'viernes');
                this.addBreak('PAUSA ACTIVA', this.turno, 'DESDEV3', 'HASTAV3', 'viernes');
                this.addBreak('BREAK', this.turno, 'DESDEV4', 'HASTAV4', 'viernes');
                this.addBreak('ALMUERZO', this.turno, 'DESDEV5', 'HASTAV5', 'viernes');
                this.addBreak('ALISTAMIENTO', this.turno, 'DESDES1', 'HASTAS1', 'sábado');
                this.addBreak('FINALIZACION DE LABORES', this.turno, 'DESDES2', 'HASTAS2', 'sábado');
                this.addBreak('PAUSA ACTIVA', this.turno, 'DESDES3', 'HASTAS3', 'sábado');
                this.addBreak('BREAK', this.turno, 'DESDES4', 'HASTAS4', 'sábado');
                this.addBreak('ALMUERZO', this.turno, 'DESDES5', 'HASTAS5', 'sábado');
            }
            if (this.infoTask.length > 0) {
                const terminales = this.infoTask.filter((it) => it.apiId == 'TERMINALES_PROMEDIO');
                const rutinarios = this.infoTask.filter((it) => it.apiId == 'RUTINARIAS_PROMEDIO');
                const mantenimientos = this.infoTask.filter((it) => it.apiId == 'MANTENIMIENTO_PROMEDIO');
                const tiempot = this.infoTask.filter((it) => it.apiId == 'TIEMPO_TERMINALES');
                const tiempor = this.infoTask.filter((it) => it.apiId == 'TIEMPO_RUTINARIAS');
                const tiempom = this.infoTask.filter((it) => it.apiId == 'TIEMPO_MANTENIMIENTOS');
                console.log(terminales, rutinarios, mantenimientos);
                let multiplicar = 0;
                if (this.mode == 'month') {
                    multiplicar = 24;
                }
                else if (this.mode == 'week') {
                    multiplicar = 6;
                }
                else {
                    multiplicar = 1;
                }
                // console.log(this.taskExecutes)
                console.log(this.taskExecutes, 'ejecutados');
                const arrExecutesFilters = [];
                underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.taskExecutes, (it, i) => {
                    if (it.tipoarea == this.infoArea.tipoarea && it.tipozona == this.infoArea.tipozona && it.subarea == this.infoArea.subarea && it.estructura == this.infoArea.estructura && it.ubicacion == this.infoArea.ubicacion && it.piso == this.infoArea.piso && it.nmc == this.infoArea.nmc) {
                        if (area) {
                            this.calendarRef.nativeElement.getApi().addEvent({
                                title: it.tarea + ' ' + it.AssignedToName,
                                start: moment__WEBPACK_IMPORTED_MODULE_6__(it.DispatchDateTime).format('YYYY-MM-DD HH:mm'),
                                end: moment__WEBPACK_IMPORTED_MODULE_6__(it.end).format('YYYY-MM-DD HH:mm'),
                                id: it.GUID,
                                editable: this.asingTask ? true : false,
                                allDay: false,
                                //  display: 'background',
                                backgroundColor: this.getColor(it.tarea),
                            });
                        }
                        else {
                            if (it.AssignedToGUID == this.userSelect.ID) {
                                this.calendarRef.nativeElement.getApi().addEvent({
                                    title: it.tarea + ' ' + it.AssignedToName,
                                    start: moment__WEBPACK_IMPORTED_MODULE_6__(it.DispatchDateTime).format('YYYY-MM-DD HH:mm'),
                                    end: moment__WEBPACK_IMPORTED_MODULE_6__(it.end).format('YYYY-MM-DD HH:mm'),
                                    id: it.GUID,
                                    editable: true,
                                    allDay: false,
                                    //  display: 'background',
                                    backgroundColor: this.getColor(it.tarea),
                                });
                            }
                        }
                    }
                });
                this.task = [{}];
                if (terminales.length > 0) {
                    if (multiplicar > 1) {
                        let cantidad = parseFloat(terminales[0].Value) * (multiplicar == 6 ? 1 : 4);
                        const ct = cantidad;
                        const terminal = this.taskExecutes.filter((it) => it.tarea.includes('Terminal'));
                        if (terminal.length > 0) {
                            cantidad -= terminal.length;
                        }
                        this.metas.push({
                            item: 'Terminal',
                            meta: ct,
                            programado: terminal.length
                        });
                        console.log(cantidad, 'cantidad terminal', terminal);
                        if (cantidad > 0) {
                            for (let i = 1; i <= cantidad; i++) {
                                this.task.push({
                                    tipo: 'terminal',
                                    tiempo: tiempot.length > 0 ? tiempot[0].Value : 60,
                                    color: 'rosa',
                                    idx: this.task.length == 0 ? 0 : (this.task.length - 1)
                                });
                            }
                        }
                    }
                }
                if (rutinarios.length > 0) {
                    let cantidad = parseFloat(rutinarios[0].Value) * multiplicar;
                    let ct = cantidad;
                    const ruti = this.taskExecutes.filter((it) => it.tarea.includes('Ruti'));
                    if (ruti.length > 0) {
                        cantidad -= ruti.length;
                    }
                    this.metas.push({
                        item: 'Rutinario',
                        meta: ct,
                        programado: ruti.length
                    });
                    if (cantidad > 0) {
                        for (let i = 1; i <= cantidad; i++) {
                            this.task.push({
                                tipo: 'rutinario',
                                tiempo: tiempor.length > 0 ? tiempor[0].Value : 60,
                                color: 'azul',
                                idx: this.task.length == 0 ? 0 : (this.task.length - 1)
                            });
                        }
                    }
                }
                if (mantenimientos.length > 0) {
                    let cantidad = parseFloat(mantenimientos[0].Value) * multiplicar;
                    let ct = cantidad;
                    const mant = this.taskExecutes.filter((it) => it.tarea.includes('Mant'));
                    if (mant.length > 0) {
                        cantidad -= mant.length;
                    }
                    this.metas.push({
                        item: 'Mant.',
                        meta: ct,
                        programado: mant.length
                    });
                    if (cantidad > 0) {
                        for (let i = 1; i <= cantidad; i++) {
                            this.task.push({
                                tipo: 'mantenimiento',
                                tiempo: tiempom.length > 0 ? tiempom[0].Value : 60,
                                color: 'verde',
                                idx: this.task.length == 0 ? 0 : (this.task.length - 1)
                            });
                        }
                    }
                }
            }
        });
    }
    asingTaskClose() {
        this.asingTask = false;
        this.userSelect = false;
        this.loadDataTask = true;
        this.metas = [];
        this.taskExecutes = [];
        this.task = [];
        this.taskListProgramming = [];
        this.calendarRef.nativeElement.getApi().removeAllEvents();
    }
    viewTaskOpen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.asingTask = true;
            this.viewTask = true;
            this.loadDataTask = false;
            const users = yield this.loadUsers();
            // console.log(users, 'usuarios')
            if (users) {
                this.users = users.filter((item) => item.WorkzoneName == this.clSelect);
            }
            this.loadDataTask = true;
        });
    }
    loadUsers() {
        return new Promise((resolve, reject) => {
            this.api.users({
                AccessToken: '6A36C9484E36E45D1A286BC894E9FCE4'
            }).subscribe((data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            });
        });
    }
    abrir(arg) {
        // console.log(arg)
    }
};
AgilissaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_9__.LoadingService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_11__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController }
];
AgilissaPage.propDecorators = {
    calendarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['calendar',] }],
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['external',] }]
};
AgilissaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-agilissa',
        template: _agilissa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_agilissa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgilissaPage);



/***/ }),

/***/ 46289:
/*!*************************************************************************!*\
  !*** ./src/app/Pages/interfaces/agilissa/agilissa.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".separador {\n  margin: 20px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n\n.none {\n  display: none;\n}\n\n.infor {\n  padding: 10px;\n  margin-bottom: 10px;\n  background: #FBF6EC;\n}\n\n.fijo {\n  width: 25%;\n  position: fixed;\n  height: calc(100vh - 70px);\n  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  background-color: #fff;\n  top: 70px;\n  left: 0;\n  z-index: 100;\n  overflow-y: scroll;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 22px;\n}\n\n.flex ion-icon {\n  font-size: 28px;\n}\n\n.between {\n  display: flex;\n  justify-content: space-between;\n}\n\n.myEvent {\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #000 !important;\n  border: 5px dotted #e1e1e1;\n}\n\n.bola {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  margin-right: 10px;\n}\n\n.rosa {\n  background-color: #E85B6A;\n}\n\n.verde {\n  background-color: #7CE675;\n}\n\n.azul {\n  background-color: #4CA1EC;\n}\n\n.titulo {\n  background-color: #e1e1e1;\n  text-align: center;\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnaWxpc3NhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQUk7RUFDSSxlQUFBO0FBRVI7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoiYWdpbGlzc2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcGFyYWRvciB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmxvYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLm5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbmZvciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGQkY2RUM7XG59XG5cbi5maWpvIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogNzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG59XG5cbi5iZXR3ZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm15RXZlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgI2UxZTFlMTtcbn1cblxuLmJvbGEge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJvc2Ege1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODVCNkE7XG59XG5cbi52ZXJkZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDRTY3NTtcbn1cblxuLmF6dWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0ExRUM7XG59XG5cbi50aXR1bG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 67015:
/*!*************************************************************************!*\
  !*** ./src/app/Pages/interfaces/agilissa/agilissa.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"agilissa\">\n\n        <ion-title></ion-title>\n\n        <div class=\"flex\">\n\n            <img src=\"https://s3.amazonaws.com/logocompanies/08F3045E-1A14-403F-8ABA-9DC56D1AF5BC.png\n            \" width=\"200\" />\n\n            <img src=\"/assets/logo-vt.png\n            \" width=\"250\" />\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <div #external>\n\n        <div *ngIf=\"asingTask\" class=\"fijo\">\n\n            <div class=\"flex\">\n                <h4>Tareas</h4>\n                <ion-icon name=\"close\" color=\"danger\" (click)=\"asingTaskClose()\"></ion-icon>\n            </div>\n\n            <div class=\"infor\" *ngIf=\"infoArea\">\n\n                <div>\n                    <strong>Tipo Área: </strong> <span>{{ infoArea.tipoarea }}</span> <br>\n                    <strong>Tipo Zona: </strong> <span>{{ infoArea.tipozona }}</span> <br>\n                    <strong>Subarea:</strong> <span> {{ infoArea.subarea }}</span> <br>\n                    <strong>Estructura: </strong> <span>{{ infoArea.estructura }}</span> <br>\n                    <strong>Ubicación: </strong> <span>{{ infoArea.ubicacion }}</span> <br>\n                    <strong>Piso:</strong> <span>{{ infoArea.piso }}</span> <br>\n                    <strong>Nomenclatura: </strong> <span>{{ infoArea.nmc }}</span> <br>\n\n                </div>\n            </div>\n\n\n\n            <div class=\"loading\" *ngIf=\"!loadDataTask\">\n                <ion-spinner name=\"crescent\"></ion-spinner>\n                <h3>Cargando Información</h3>\n            </div>\n\n\n\n            <div class=\"infoTask\" *ngIf=\"loadDataTask\">\n\n\n                <div class=\"areas\" *ngIf=\"dataSector.length > 0\">\n                    <h4>Áreas</h4>\n                    <ion-searchbar [value]=\"descArea\" mode=\"ios\" placeholder=\"Buscar área\" (ionChange)=\"search2($event)\"></ion-searchbar> <br>\n                    <ion-chip *ngIf=\"gestionSelect\" color=\"agilissa\">{{ gestionSelect }}</ion-chip>\n                    <ion-item *ngFor=\"let item of gestiones | agilissacliente : descArea : 'AssetName'\">\n                        <ion-icon name=\"ellipse-outline\" slot=\"start\"></ion-icon>\n\n\n                        <ion-label>\n\n                            <div>\n                                <h4 style=\"color: #262369; margin: 5px 0;  font-size: 18px; font-weight: bold;\">{{ item.AssetName }}</h4> <br>\n\n                                <strong>Tipo Área: </strong> <span>{{ item.tipoarea }}</span> <br>\n                                <strong>Tipo Zona: </strong> <span>{{ item.tipozona }}</span> <br>\n                                <strong>Subarea:</strong> <span> {{ item.subarea }}</span> <br>\n                                <strong>Estructura: </strong> <span>{{ item.estructura }}</span> <br>\n                                <strong>Ubicación: </strong> <span>{{ item.ubicacion }}</span> <br>\n                                <strong>Piso:</strong> <span>{{ item.piso }}</span> <br>\n                                <strong>Nomenclatura: </strong> <span>{{ item.nmc }}</span> <br>\n                                <strong>ID: </strong> <span>{{ item.ID }}</span>\n                            </div>\n\n                            <div>\n                                <ion-button (click)=\"selectArea(item.AssetName, item) \" color=\"agilissa\" mode=\"ios\">Seleccionar</ion-button>\n\n                            </div>\n\n\n                            <br><br>\n                        </ion-label>\n                    </ion-item>\n                </div>\n\n\n                <div class=\"separador\"></div>\n\n                <h4>Usuarios</h4>\n\n                <ion-searchbar [value]=\"descUser\" mode=\"ios\" placeholder=\"Buscar Usuario\" (ionChange)=\"search4($event)\"></ion-searchbar> <br>\n\n                <ion-chip *ngIf=\"userSelect\" color=\"agilissa\" class=\"between\">\n                    <ion-label>{{ userSelect.FirstName }} {{ userSelect.LastName }}</ion-label>\n                    <ion-icon (click)=\"borrarUsuario()\" name=\"trash\"></ion-icon>\n                </ion-chip>\n\n                <ion-item *ngFor=\"let item of users | agilissacliente : descUser : 'FirstName' \" (click)=\"selectUser(item)\">\n                    <ion-icon name=\"person\" color=\"agilissa\" slot=\"start\"></ion-icon>\n                    <ion-label class=\"ion-text-wrap\">\n\n                        <div>{{ item.FirstName }} {{ item.LastName }}</div>\n\n\n                    </ion-label>\n                </ion-item>\n\n\n\n                <div class=\"separador\"></div>\n\n                <ion-grid>\n                    <ion-row class=\"titulo\">\n                        <ion-col size=\"4\">Item</ion-col>\n                        <ion-col size=\"4\">Meta</ion-col>\n                        <ion-col size=\"4\">Prog.</ion-col>\n                    </ion-row>\n\n                    <ion-row *ngFor=\"let item of metas\">\n                        <ion-col size=\"4\" class=\"center\">{{ item.item }}</ion-col>\n                        <ion-col size=\"4\" class=\"center\">{{ item.meta }}</ion-col>\n                        <ion-col size=\"4\" class=\"center\">{{ item.programado }}</ion-col>\n                    </ion-row>\n                </ion-grid> <br>\n\n                <div class=\"d-flex flex-wrap\" *ngIf=\"mode != 'month' && !viewTask\">\n                    <div  *ngFor=\"let item of task; let i = index;\" [data]=\"item\" [class.myEvent]=\"i > 0\" [class.none]=\"i == 0\">\n\n                        <div class=\"fc-event-main\" style=\"font-weight: bold;\">{{ item.tipo }}</div>\n                        <div style=\"display: none;\">{{ item.tiempo }}</div>\n                        <div style=\"display: flex; margin-bottom: 10px;\">\n                            <div class=\"bola {{ item.color }}\"></div> <span>Tiempo: </span> {{ item.tiempo }}</div>\n                        <div style=\"display: none;\">{{ item.idx }}</div>\n                    </div>\n\n                </div> <br>\n\n                <ion-button [disabled]=\"(taskListProgramming.length == 0) && ejecutadas.length == 0\" expand=\"block\" color=\"agilissabtn\" mode=\"ios\" (click)=\"saveTask()\">Guardar Cambios</ion-button>\n                <br>\n                <ion-button [disabled]=\"taskExecutes.length == 0 || mode == 'day' || userSelect\" expand=\"block\" color=\"agilissa\" mode=\"ios\" (click)=\"dupliTask()\">Duplicar Tareas</ion-button>\n                <br>\n                <ion-button *ngIf=\"taskExecutes.length > 0 && mode != 'day' && userSelect\" expand=\"block\" color=\"warning\" mode=\"ios\" (click)=\"reassignedTask()\">Reasignar</ion-button>\n            </div>\n\n\n        </div>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"3\">\n                    <!--  <div #external class=\"d-flex flex-wrap\">\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\" horario=\"Hola munod\">\n                      <div class=\"fc-event-main\">Event 1</div>\n                  </div>\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                      <div class=\"fc-event-main\">Event 2</div>\n                  </div>\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                      <div class=\"fc-event-main\">Event 3</div>\n                  </div>\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                      <div class=\"fc-event-main\">Event 4</div>\n                  </div>\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                      <div class=\"fc-event-main\">Event 5</div>\n                  </div>\n              </div> -->\n\n              <div class=\"center\">  <strong>V1.0.0</strong></div>\n\n\n                    <div class=\"filtros\">\n                        <h4>Clientes</h4>\n                        <ion-searchbar [value]=\"desc\" mode=\"ios\" placeholder=\"Buscar Clientes\" (ionChange)=\"search($event)\"></ion-searchbar> <br>\n\n                        <ion-chip *ngIf=\"clSelect\" color=\"agilissa\">{{ clSelect }}</ion-chip>\n\n                        <ion-item *ngFor=\"let item of clsUnicos | agilissacliente : desc \" (click)=\"select(item)\">\n                            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n                            <ion-label class=\"ion-text-wrap\">\n\n                                <div>{{ item }}</div>\n\n\n                            </ion-label>\n                        </ion-item>\n\n                        <div class=\"separador\" *ngIf=\"clSelect\"></div>\n                        <h4 *ngIf=\"clSelect\">Sedes</h4>\n                        <ion-searchbar [value]=\"descSede\" *ngIf=\"clSelect\" mode=\"ios\" placeholder=\"Buscar Sede de {{ clSelect }}\" (ionChange)=\"search3($event)\"></ion-searchbar> <br>\n\n                        <ion-chip *ngIf=\"sedeSelect\" color=\"agilissa\">{{ sedeSelect }}</ion-chip>\n\n                        <ion-item *ngFor=\"let item of sedes | agilissacliente : descSede \" (click)=\"selectSede(item)\">\n                            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n                            <ion-label class=\"ion-text-wrap\">\n\n                                <div>{{ item }}</div>\n\n\n                            </ion-label>\n                        </ion-item>\n\n                        <div class=\"separador\" *ngIf=\"clSelect\"></div>\n\n                        <div class=\"sectores\" *ngIf=\"clSelect\">\n                            <h4>Sectores</h4>\n                            <ion-radio-group (ionChange)=\"selectSector($event)\">\n\n\n                                <ion-item *ngFor=\"let item of sectores\">\n\n                                    <ion-radio color=\"agilissabtn\" mode=\"md\" value=\"{{ item }}\" slot=\"start\"></ion-radio>\n                                    <ion-label class=\"ion-text-wrap\">\n\n                                        <div>{{ item }}</div>\n\n\n                                    </ion-label>\n                                </ion-item>\n\n                            </ion-radio-group>\n                        </div>\n\n                        <div class=\"separador\" *ngIf=\"dataSector.length > 0\"></div>\n\n                        <!--    <div class=\"areas\" *ngIf=\"dataSector.length > 0\">\n                            <h4>Áreas</h4>\n                            <ion-searchbar [value]=\"descArea\" mode=\"ios\" placeholder=\"Buscar área\" (ionChange)=\"search2($event)\"></ion-searchbar> <br>\n                            <ion-chip *ngIf=\"gestionSelect\" color=\"agilissa\">{{ gestionSelect }}</ion-chip>\n                            <ion-item *ngFor=\"let item of gestiones | agilissacliente : descArea : 'AssetName'\">\n                                <ion-icon name=\"ellipse-outline \" slot=\"start \"></ion-icon>\n\n                                <ion-label>\n\n                                    <div>\n                                        <h4 style=\"color: #262369; margin: 5px 0;  font-size: 18px; font-weight: bold;\">{{ item.AssetName }}</h4> <br>\n                                        <strong>Tipo Área: </strong> <span>{{ item.tipoarea }}</span> <br>\n                                        <strong>Tipo Zona: </strong> <span>{{ item.tipozona }}</span> <br>\n                                        <strong>Subarea:</strong> <span> {{ item.subarea }}</span> <br>\n                                        <strong>Estructura: </strong> <span>{{ item.estructura }}</span> <br>\n                                        <strong>Ubicación: </strong> <span>{{ item.ubicacion }}</span> <br>\n                                        <strong>Piso:</strong> <span>{{ item.piso }}</span> <br>\n                                        <strong>Nomenclatura: </strong> <span>{{ item.nmc }}</span> <br>\n                                        <strong>ID: </strong> <span>{{ item.ID }}</span>\n                                    </div>\n\n                                    <div>\n                                        <ion-button (click)=\"selectArea(item.AssetName, item) \" color=\"agilissa\" mode=\"ios\">Seleccionar</ion-button>\n\n                                    </div>\n\n\n                                    <br><br>\n                                </ion-label>\n\n\n                            </ion-item> \n\n                     <ion-button *ngIf=\"gestionSelect \" color=\"agilissabtn \" mode=\"ios \" expand=\"block \" (click)=\"viewTaskOpen() \">Visualizar Tareas</ion-button>\n                    </div>\n                \n                -->\n\n\n                        <ion-button *ngIf=\"dataSector.length > 0 \" color=\"agilissabtn \" mode=\"ios \" expand=\"block \" (click)=\"asingTaskOpen() \">Programar Tareas</ion-button>\n\n\n                    </div>\n\n                \n                </ion-col>\n                <ion-col size=\"9 \">\n                    <div class=\"calendario \">\n                        <full-calendar class=\"agilissa \" *ngIf=\"load \" #calendar [options]=\"calendarOptions \"></full-calendar>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_agilissa_agilissa_module_ts.js.map