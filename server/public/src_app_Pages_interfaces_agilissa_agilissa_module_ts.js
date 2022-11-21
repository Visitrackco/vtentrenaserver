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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _agilissa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agilissa.page.html?ngResource */ 67015);
/* harmony import */ var _agilissa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agilissa.page.scss?ngResource */ 46289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/web-component */ 4902);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ 85194);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ 69901);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);
/* harmony import */ var src_app_components_carga_task_carga_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/carga-task/carga-task.component */ 65633);














(0,_fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__.defineFullCalendarElement)();
let AgilissaPage = class AgilissaPage {
    constructor(mimodal, api, loading) {
        this.mimodal = mimodal;
        this.api = api;
        this.loading = loading;
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
        this.mes = moment__WEBPACK_IMPORTED_MODULE_6__().locale('es').format('MMMM YYYY');
    }
    ngAfterViewInit() {
        console.log("PEOPLE LIST ngAfterViewInit() START !!!");
        new _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__.Draggable(this.events.nativeElement, {
            itemSelector: '.myEvent',
            eventData: function (eventEl) {
                console.log("DRAG !!!");
                //var returnedEvent = self.createEventObject(self.selectedShift.value, eventEl.innerText);
                //return returnedEvent;
                console.log();
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
                console.log(eventEl);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getLocs();
            console.log(this.locations, this.assets);
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
                    eventDrop: this.receive.bind(this)
                };
                this.getEvents();
                //  this.getActivities();
                //   this.getEvents();
            }, 2000);
        });
    }
    getDataTask() {
        console.log(this.from, this.to);
        this.loading.createLoading('Cargando Tareas...');
        return new Promise((resolve, reject) => {
            this.api.getActivities2('4A21BA9F17A8EB2C582004A213127A88', this.from, this.to, '2004307A-B1CF-4109-97D1-8603A63BA6E9').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                const array = [];
                for (const item of data) {
                    const dat = yield this.getActivityInfo(item.GUID);
                    if (dat) {
                        const tarea = dat.Values.filter((it) => it.apiId == 'TAREA');
                        const area = dat.Values.filter((it) => it.apiId == 'AREA');
                        console.log(tarea, area);
                        if (tarea.length > 0 && area.length > 0) {
                            dat.tarea = tarea[0].Value;
                            dat.area = area[0].Value;
                            dat.end = moment__WEBPACK_IMPORTED_MODULE_6__(dat.DispatchDateTime).add(parseFloat(dat.DurationMins), 'minutes').format('YYYY-MM-DD HH:mm');
                            const time = moment__WEBPACK_IMPORTED_MODULE_6__(dat.DispatchDateTime).format('YYYY-MM-DD HH:mm');
                            const from = moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD HH:mm');
                            const to = moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD HH:mm');
                            console.log(time, from, to);
                            if (time >= from && time <= to) {
                                console.log(this.areaSelect);
                                if (dat.area == this.areaSelect) {
                                    array.push(dat);
                                }
                            }
                        }
                    }
                }
                console.log(array, 'array');
                this.loading.cancelLoading();
                resolve(array);
            }), () => this.loading.cancelLoading());
        });
    }
    saveTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const idx = this.taskListProgramming.findIndex((item) => {
                return item.from == moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD') && item.to == moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD');
            });
            const modal = yield this.mimodal.create({
                component: src_app_components_carga_task_carga_task_component__WEBPACK_IMPORTED_MODULE_10__.CargaTaskComponent,
                componentProps: {
                    tkn: '4A21BA9F17A8EB2C582004A213127A88',
                    data: {
                        task: this.taskListProgramming[idx].task
                    }
                }
            });
            yield modal.present();
            const resp = yield modal.onWillDismiss();
            if (resp.data) {
                underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.taskListProgramming[idx].task, (it, i) => {
                    const evento = this.calendarRef.nativeElement.getApi().getEventById(it.idx);
                    evento.remove();
                    this.taskListProgramming[idx].task = this.taskListProgramming[idx].task.filter((item) => item.idx != it.idx);
                });
                underscore__WEBPACK_IMPORTED_MODULE_8__.each(resp.data, (it, i) => {
                    this.calendarRef.nativeElement.getApi().addEvent({
                        title: it.tipo,
                        start: moment__WEBPACK_IMPORTED_MODULE_6__(it.start).format('YYYY-MM-DD HH:mm'),
                        end: moment__WEBPACK_IMPORTED_MODULE_6__(it.end).format('YYYY-MM-DD HH:mm'),
                        id: it.GUID,
                        editable: false,
                        allDay: false,
                        // display: 'background',
                        backgroundColor: this.getColor(it.tipo),
                    });
                });
            }
        });
    }
    getLocs() {
        return new Promise((resolve, reject) => {
            this.api.getLocs({
                AccessToken: '4A21BA9F17A8EB2C582004A213127A88',
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
                AccessToken: '4A21BA9F17A8EB2C582004A213127A88',
                LocationID: this.locInfo[0].GUID //'QjnQlNylaD'
            }).subscribe((data) => {
                console.log(this.locInfo, 'todo');
                resolve(data);
            });
        });
    }
    receive(info) {
        console.log(this.cls, this.sedes, this.userSelect);
        const idx = this.taskListProgramming.findIndex((item) => {
            return item.from == moment__WEBPACK_IMPORTED_MODULE_6__(this.from).format('YYYY-MM-DD') && item.to == moment__WEBPACK_IMPORTED_MODULE_6__(this.to).format('YYYY-MM-DD');
        });
        const actiIdx = this.taskListProgramming[idx].task.findIndex((item) => {
            return item.idx == info.event.id;
        });
        console.log(this.taskListProgramming, 'ACTI', info.event.id);
        console.log(actiIdx, 'INDICE');
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
    }
    rezise(info) {
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
        console.log(this.taskListProgramming);
        /*  if (!confirm("is this okay?")) {
            info.revert();
          } */
    }
    drop(arg) {
        console.log(arg, arg);
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
        console.log(this.taskListProgramming);
        //   }
    }
    getDate(arg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.taskExecutes.length > 0 || this.taskListProgramming.length > 0) {
                this.calendarRef.nativeElement.getApi().removeAllEvents();
            }
            const from = moment__WEBPACK_IMPORTED_MODULE_6__(arg.startStr).format('YYYY-MM-DD HH:mm');
            const to = moment__WEBPACK_IMPORTED_MODULE_6__(arg.endStr).format('YYYY-MM-DD HH:mm');
            const diff = moment__WEBPACK_IMPORTED_MODULE_6__(to).diff(moment__WEBPACK_IMPORTED_MODULE_6__(from), 'days');
            console.log(diff, this.load, this.from, this.to);
            this.from = from;
            this.to = to;
            if (this.asingTask) {
                console.log('entramos');
                const rp = yield this.getDataTask();
                console.log('salimos', rp);
                if (rp) {
                    console.log(rp, 'todo');
                    this.taskExecutes = rp;
                    if (this.taskExecutes.length > 0) {
                        underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.taskExecutes, (it, i) => {
                            if (it.AssignedToGUID == this.userSelect.ID) {
                                this.calendarRef.nativeElement.getApi().addEvent({
                                    title: it.tarea,
                                    start: moment__WEBPACK_IMPORTED_MODULE_6__(it.DispatchDateTime).format('YYYY-MM-DD HH:mm'),
                                    end: moment__WEBPACK_IMPORTED_MODULE_6__(it.end).format('YYYY-MM-DD HH:mm'),
                                    id: it.GUID,
                                    allDay: false,
                                    editable: false,
                                    //  display: this.viewTask ? '' :  'background',
                                    backgroundColor: this.getColor(it.tarea),
                                });
                            }
                        });
                    }
                }
            }
            console.log(this.taskExecutes);
            console.log(arg, 'Hola');
            if (diff == 1) {
                this.mode = 'day';
            }
            else if (diff == 7) {
                this.mode = 'week';
            }
            else if (diff >= 30) {
                this.mode = 'month';
            }
            if (this.infoTask.length > 0) {
                // if (diff <= 7) {
                this.eventsFormat();
                // }
            }
            /*  this.getActivities({
                from,
                to
              }) */
        });
    }
    getActivityInfo(guid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api.getActivitieInfo('4A21BA9F17A8EB2C582004A213127A88', guid).subscribe((data) => {
                    if (data) {
                        resolve(data);
                    }
                    else {
                        resolve(false);
                    }
                });
            });
        });
    }
    getActivities(data) {
        this.loading.createLoading('Cargando información');
        if (this.activities.length > 0) {
            this.calendarRef.nativeElement.getApi().removeAllEvents();
        }
        this.activities = [];
        this.api.getActivities2('4A21BA9F17A8EB2C582004A213127A88', data.from, data.to, '0C664C5A-3605-486F-94FE-BC3A027BCF65').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
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
                    //  console.log(unicos)
                }
                console.log(gestiones, 'gestiones');
                if (gestiones.length > 0) {
                    // var unicos = _.uniq(_.map(clientes, (l) => { return l.name}))
                    underscore__WEBPACK_IMPORTED_MODULE_8__.each(gestiones[0].Value, (l, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                        const gestion = l.Value.filter((it) => it.apiId == 'GESTION_AREA');
                        if (gestion.length > 0) {
                            console.log(gestion[0].Value);
                            try {
                                const valores = JSON.parse(gestion[0].Value);
                                //  console.log(valores, ' Valores')
                                if (valores.gui) {
                                    const resp = yield this.getActivityInfo(valores.gui);
                                    if (resp) {
                                        item.gestiones.push(resp);
                                    }
                                }
                            }
                            catch (e) {
                                console.log('error', e);
                            }
                        }
                    }));
                    //  console.log(unicos)
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
            console.log(this.activities);
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
        console.log(this.cls);
        this.sedeSelect = false;
        this.areaSelect = '';
        this.sectorSelect = '';
        const data = this.cls.filter((it) => it.cliente == item);
        this.sedes = underscore__WEBPACK_IMPORTED_MODULE_8__.uniq(underscore__WEBPACK_IMPORTED_MODULE_8__.map(data, (l) => { return l.sede; }));
        this.gestionSelect = false;
        this.gestiones = [];
        console.log(this.sedes);
        // this.transformData()
    }
    selectSede(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.sedeSelect = item;
            this.areaSelect = '';
            this.sectorSelect = '';
            this.sectores = [];
            this.descArea = '';
            const resp = yield this.getAssets();
            console.log(resp);
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
        console.log(this.data);
    }
    selectSector(event) {
        this.sectorSelect = event.detail.value;
        this.areaSelect = '';
        this.descArea = '';
        this.dataSector = this.data.filter((item) => item.LocationName == event.detail.value);
        this.dataSector = underscore__WEBPACK_IMPORTED_MODULE_8__.sortBy(this.dataSector, 'ID');
        this.dataSectorFiltrada = this.dataSector[this.dataSector.length - 1];
        this.gestionSelect = false;
        console.log(this.dataSector);
        this.gestiones = underscore__WEBPACK_IMPORTED_MODULE_8__.uniq(underscore__WEBPACK_IMPORTED_MODULE_8__.map(this.dataSectorFiltrada.gestiones, (it) => it.AssetName));
    }
    selectArea(item) {
        this.gestionSelect = item;
        this.areaSelect = item;
        this.transformDataGestion();
    }
    transformDataGestion() {
        const dataTareas = this.dataSectorFiltrada.gestiones.filter((item) => {
            return item.AssetName == this.gestionSelect;
        });
        this.descArea = '';
        this.infoTask = dataTareas[0].Values;
        console.log(dataTareas[0].Values);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.asingTask = true;
            this.loadDataTask = false;
            const users = yield this.loadUsers();
            console.log(users, 'usuarios');
            if (users) {
                this.users = users.filter((item) => item.WorkzoneName == this.clSelect);
            }
            this.loadDataTask = true;
        });
    }
    selectUser(item) {
        this.userSelect = item;
        this.descUser = '';
        this.eventsFormat();
    }
    eventsFormat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const rp = yield this.getDataTask();
            if (rp) {
                this.taskExecutes = rp;
            }
            this.task = [];
            this.metas = [];
            this.calendarRef.nativeElement.getApi().removeAllEvents();
            if (this.infoTask.length > 0) {
                const terminales = this.infoTask.filter((it) => it.apiId == 'TERMINALES_PROMEDIO');
                const rutinarios = this.infoTask.filter((it) => it.apiId == 'RUTINARIAS_PROMEDIO');
                const mantenimientos = this.infoTask.filter((it) => it.apiId == 'MANTENIMIENTO_PROMEDIO');
                const tiempot = this.infoTask.filter((it) => it.apiId == 'TIEMPO_TERMINALES');
                const tiempor = this.infoTask.filter((it) => it.apiId == 'TIEMPO_RUTINARIAS');
                const tiempom = this.infoTask.filter((it) => it.apiId == 'TIEMPO_MANTENIMIENTOS');
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
                console.log(this.taskExecutes);
                underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.taskExecutes, (it, i) => {
                    if (it.AssignedToGUID == this.userSelect.ID) {
                        this.calendarRef.nativeElement.getApi().addEvent({
                            title: it.tarea,
                            start: moment__WEBPACK_IMPORTED_MODULE_6__(it.DispatchDateTime).format('YYYY-MM-DD HH:mm'),
                            end: moment__WEBPACK_IMPORTED_MODULE_6__(it.end).format('YYYY-MM-DD HH:mm'),
                            id: it.GUID,
                            editable: false,
                            allDay: false,
                            //  display: 'background',
                            backgroundColor: this.getColor(it.tarea),
                        });
                    }
                });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.asingTask = true;
            this.viewTask = true;
            this.loadDataTask = false;
            const users = yield this.loadUsers();
            console.log(users, 'usuarios');
            if (users) {
                this.users = users.filter((item) => item.WorkzoneName == this.clSelect);
            }
            this.loadDataTask = true;
        });
    }
    loadUsers() {
        return new Promise((resolve, reject) => {
            this.api.users({
                AccessToken: '4A21BA9F17A8EB2C582004A213127A88'
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
        console.log(arg);
    }
};
AgilissaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_9__.LoadingService }
];
AgilissaPage.propDecorators = {
    calendarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['calendar',] }],
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['external',] }]
};
AgilissaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
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

module.exports = ".separador {\n  margin: 20px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n\n.fijo {\n  width: 25%;\n  position: fixed;\n  height: calc(100vh - 70px);\n  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  background-color: #fff;\n  top: 70px;\n  left: 0;\n  z-index: 100;\n  overflow-y: scroll;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 22px;\n}\n\n.flex ion-icon {\n  font-size: 28px;\n}\n\n.myEvent {\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #000 !important;\n  border: 5px dotted #e1e1e1;\n}\n\n.bola {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  margin-right: 10px;\n}\n\n.rosa {\n  background-color: #E85B6A;\n}\n\n.verde {\n  background-color: #7CE675;\n}\n\n.azul {\n  background-color: #4CA1EC;\n}\n\n.titulo {\n  background-color: #e1e1e1;\n  text-align: center;\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnaWxpc3NhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFBSTtFQUNJLGVBQUE7QUFFUjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREoiLCJmaWxlIjoiYWdpbGlzc2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcGFyYWRvciB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmxvYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpam8ge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdG9wOiA3MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbn1cblxuLm15RXZlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiA1cHggZG90dGVkICNlMWUxZTE7XG59XG5cbi5ib2xhIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgXG59XG5cbi5yb3NhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg1QjZBO1xufVxuXG4udmVyZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Q0U2NzU7XG59XG5cbi5henVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBMUVDO1xufVxuXG4udGl0dWxvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 67015:
/*!*************************************************************************!*\
  !*** ./src/app/Pages/interfaces/agilissa/agilissa.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"agilissa\">\n        <img src=\"https://s3.amazonaws.com/logocompanies/08F3045E-1A14-403F-8ABA-9DC56D1AF5BC.png\n      \" width=\"200\" />\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <div #external>\n\n        <div *ngIf=\"asingTask\" class=\"fijo\">\n\n            <div class=\"flex\">\n                <h4>Tareas</h4>\n                <ion-icon name=\"close\" color=\"danger\" (click)=\"asingTaskClose()\"></ion-icon>\n            </div>\n\n\n            <div class=\"loading\" *ngIf=\"!loadDataTask\">\n                <ion-spinner name=\"crescent\"></ion-spinner>\n                <h3>Cargando Información</h3>\n            </div>\n\n\n\n            <div class=\"infoTask\" *ngIf=\"loadDataTask\">\n\n\n                <ion-searchbar [value]=\"descUser\" mode=\"ios\" placeholder=\"Buscar Usuario\" (ionChange)=\"search4($event)\"></ion-searchbar> <br>\n\n                <ion-chip *ngIf=\"userSelect\" color=\"agilissa\">{{ userSelect.FirstName }} {{ userSelect.LastName }}</ion-chip>\n\n                <ion-item *ngFor=\"let item of users | agilissacliente : descUser : 'FirstName' \" (click)=\"selectUser(item)\">\n                    <ion-icon name=\"person\" color=\"agilissa\" slot=\"start\"></ion-icon>\n                    <ion-label class=\"ion-text-wrap\">\n\n                        <div>{{ item.FirstName }} {{ item.LastName }}</div>\n\n\n                    </ion-label>\n                </ion-item>\n\n\n\n                <div class=\"separador\"></div>\n\n                <ion-grid>\n                    <ion-row class=\"titulo\">\n                        <ion-col size=\"4\">Item</ion-col>\n                        <ion-col size=\"4\">Meta</ion-col>\n                        <ion-col size=\"4\">Prog.</ion-col>\n                    </ion-row>\n\n                    <ion-row *ngFor=\"let item of metas\">\n                        <ion-col size=\"4\" class=\"center\">{{ item.item }}</ion-col>\n                        <ion-col size=\"4\" class=\"center\">{{ item.meta }}</ion-col>\n                        <ion-col size=\"4\" class=\"center\">{{ item.programado }}</ion-col>\n                    </ion-row>\n                </ion-grid> <br>\n\n                <div class=\"d-flex flex-wrap\" *ngIf=\"mode != 'month' && !viewTask\">\n                    <div class=\"myEvent\" *ngFor=\"let item of task; let i = index;\" [data]=\"item\" >\n                        <div class=\"fc-event-main\" style=\"font-weight: bold;\">{{ item.tipo }}</div>\n                        <div style=\"display: none;\">{{ item.tiempo }}</div>\n                        <div style=\"display: flex; margin-bottom: 10px;\"><div class=\"bola {{ item.color }}\" ></div> <span>Tiempo: </span> {{ item.tiempo }}</div>\n                        <div style=\"display: none;\">{{ item.idx }}</div>\n                    </div>\n\n                </div> <br>\n\n                <ion-button [disabled]=\"(taskListProgramming.length == 0)\" expand=\"block\" color=\"agilissabtn\" mode=\"ios\" (click)=\"saveTask()\">Guardar Cambios</ion-button>\n            </div>\n\n\n        </div>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"3\">\n                    <!--  <div #external class=\"d-flex flex-wrap\">\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\" horario=\"Hola munod\">\n                      <div class=\"fc-event-main\">Event 1</div>\n                  </div>\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                      <div class=\"fc-event-main\">Event 2</div>\n                  </div>\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                      <div class=\"fc-event-main\">Event 3</div>\n                  </div>\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                      <div class=\"fc-event-main\">Event 4</div>\n                  </div>\n                  <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                      <div class=\"fc-event-main\">Event 5</div>\n                  </div>\n              </div> -->\n\n                    <div class=\"filtros\">\n                        <h4>Clientes</h4>\n                        <ion-searchbar [value]=\"desc\" mode=\"ios\" placeholder=\"Buscar Clientes\" (ionChange)=\"search($event)\"></ion-searchbar> <br>\n\n                        <ion-chip *ngIf=\"clSelect\" color=\"agilissa\">{{ clSelect }}</ion-chip>\n\n                        <ion-item *ngFor=\"let item of clsUnicos | agilissacliente : desc \" (click)=\"select(item)\">\n                            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n                            <ion-label class=\"ion-text-wrap\">\n\n                                <div>{{ item }}</div>\n\n\n                            </ion-label>\n                        </ion-item>\n\n                        <div class=\"separador\" *ngIf=\"clSelect\"></div>\n                        <h4 *ngIf=\"clSelect\">Sedes</h4>\n                        <ion-searchbar [value]=\"descSede\" *ngIf=\"clSelect\" mode=\"ios\" placeholder=\"Buscar Sede de {{ clSelect }}\" (ionChange)=\"search3($event)\"></ion-searchbar> <br>\n\n                        <ion-chip *ngIf=\"sedeSelect\" color=\"agilissa\">{{ sedeSelect }}</ion-chip>\n\n                        <ion-item *ngFor=\"let item of sedes | agilissacliente : descSede \" (click)=\"selectSede(item)\">\n                            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n                            <ion-label class=\"ion-text-wrap\">\n\n                                <div>{{ item }}</div>\n\n\n                            </ion-label>\n                        </ion-item>\n\n                        <div class=\"separador\" *ngIf=\"clSelect\"></div>\n\n                        <div class=\"sectores\" *ngIf=\"clSelect\">\n                            <h4>Sectores</h4>\n                            <ion-radio-group (ionChange)=\"selectSector($event)\">\n\n\n                                <ion-item *ngFor=\"let item of sectores\">\n\n                                    <ion-radio color=\"agilissabtn\" mode=\"md\" value=\"{{ item }}\" slot=\"start\"></ion-radio>\n                                    <ion-label class=\"ion-text-wrap\">\n\n                                        <div>{{ item }}</div>\n\n\n                                    </ion-label>\n                                </ion-item>\n\n                            </ion-radio-group>\n                        </div>\n\n                        <div class=\"separador\" *ngIf=\"dataSector.length > 0\"></div>\n\n                        <div class=\"areas\" *ngIf=\"dataSector.length > 0\">\n                            <h4>Áreas</h4>\n                            <ion-searchbar [value]=\"descArea\" mode=\"ios\" placeholder=\"Buscar área\" (ionChange)=\"search2($event)\"></ion-searchbar> <br>\n                            <ion-chip *ngIf=\"gestionSelect\" color=\"agilissa\">{{ gestionSelect }}</ion-chip>\n                            <ion-item *ngFor=\"let item of gestiones | agilissacliente : descArea\" (click)=\"selectArea(item)\">\n                                <ion-icon name=\"ellipse-outline\" slot=\"start\"></ion-icon>\n                                <ion-chip class=\"ion-text-wrap\" color=\"agilissa\">\n\n                                    <div>{{ item }}</div>\n\n\n                                </ion-chip>\n                            </ion-item> <br>\n\n                            <ion-button *ngIf=\"gestionSelect\" color=\"agilissabtn\" mode=\"ios\" expand=\"block\" (click)=\"asingTaskOpen()\">Programar Tareas</ion-button>\n                         \n                         <!--    <ion-button *ngIf=\"gestionSelect\" color=\"agilissabtn\" mode=\"ios\" expand=\"block\" (click)=\"viewTaskOpen()\">Visualizar Tareas</ion-button>-->\n                        </div>\n                    </div>\n\n                </ion-col>\n                <ion-col size=\"9\">\n                    <div class=\"calendario\">\n                        <full-calendar class=\"agilissa\" *ngIf=\"load\" #calendar [options]=\"calendarOptions\"></full-calendar>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_agilissa_agilissa_module_ts.js.map