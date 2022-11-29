"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_interfaces_oszford-calendario_oszford-calendario_module_ts"],{

/***/ 39480:
/*!******************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/oszford-calendario/oszford-calendario-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OszfordCalendarioPageRoutingModule": () => (/* binding */ OszfordCalendarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _oszford_calendario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oszford-calendario.page */ 66677);




const routes = [
    {
        path: '',
        component: _oszford_calendario_page__WEBPACK_IMPORTED_MODULE_0__.OszfordCalendarioPage
    }
];
let OszfordCalendarioPageRoutingModule = class OszfordCalendarioPageRoutingModule {
};
OszfordCalendarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OszfordCalendarioPageRoutingModule);



/***/ }),

/***/ 11688:
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/oszford-calendario/oszford-calendario.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OszfordCalendarioPageModule": () => (/* binding */ OszfordCalendarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _oszford_calendario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oszford-calendario-routing.module */ 39480);
/* harmony import */ var _oszford_calendario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oszford-calendario.page */ 66677);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 7844);








let OszfordCalendarioPageModule = class OszfordCalendarioPageModule {
};
OszfordCalendarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _oszford_calendario_routing_module__WEBPACK_IMPORTED_MODULE_0__.OszfordCalendarioPageRoutingModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_oszford_calendario_page__WEBPACK_IMPORTED_MODULE_1__.OszfordCalendarioPage]
    })
], OszfordCalendarioPageModule);



/***/ }),

/***/ 66677:
/*!********************************************************************************!*\
  !*** ./src/app/Pages/interfaces/oszford-calendario/oszford-calendario.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OszfordCalendarioPage": () => (/* binding */ OszfordCalendarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _oszford_calendario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oszford-calendario.page.html?ngResource */ 90268);
/* harmony import */ var _oszford_calendario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oszford-calendario.page.scss?ngResource */ 84798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/web-component */ 4902);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ 85194);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ 69901);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var src_app_components_oszford_proximos_proximos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/oszford/proximos/proximos.component */ 80118);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);














(0,_fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__.defineFullCalendarElement)();
let OszfordCalendarioPage = class OszfordCalendarioPage {
    constructor(mimodal, api, loading) {
        this.mimodal = mimodal;
        this.api = api;
        this.loading = loading;
        this.calendarOptions = {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"]],
            dateClick: this.handleDateClick.bind(this),
        };
        this.activities = [];
        this.options = [
            {
                text: 'EXPLORACION O VISITA EN FRIO',
                check: true,
                class: 'rosa'
            },
            {
                text: 'LLAMADA COMERCIAL (TELEMERCADEO)',
                check: true,
                class: 'amarillo'
            },
            {
                text: 'MAIL MARKETING',
                check: true,
                class: 'verde'
            },
            {
                text: 'REUNION COMERCIAL',
                check: true,
                class: 'azul'
            },
            {
                text: 'ENVIO DE OFERTA COMERCIAL',
                check: true,
                class: 'naranja'
            },
            {
                text: 'SEGUIMIENTO',
                check: true,
                class: 'morado'
            },
            {
                text: 'SUSTENTACIÓN',
                check: true,
                class: 'it1'
            },
            {
                text: 'NEGOCIACIÓN O AJUSTES',
                check: true,
                class: 'it2'
            },
            {
                text: 'CLIENTE APROBADO',
                check: true,
                class: 'it3'
            },
            {
                text: 'CLIENTE PERDIDO',
                check: true,
                class: 'it4'
            },
            {
                text: 'GESTIÓN DE CONTRATO',
                check: true,
                class: 'it5'
            },
            {
                text: 'RENOVACIÓN DE CONTRATO',
                check: true,
                class: 'it6'
            },
            {
                text: 'FIDELIZACIÓN',
                check: true,
                class: 'it7'
            },
            {
                text: 'FINALIZACIÓN CONTRACTUAL',
                check: true,
                class: 'it8'
            },
            {
                text: 'OTRA',
                check: true,
                class: 'it9'
            }
        ];
        this.load = false;
        this.users = [];
        this.clientes = [];
        this.descCliente = '';
        this.descComercial = '';
        this.comerciales = [];
        this.filtrado = [];
        this.locations = [];
        this.cumples = [];
        this.vencis = [];
        this.mes = moment__WEBPACK_IMPORTED_MODULE_4__().locale('es').format('MMMM YYYY');
    }
    handleDateClick(arg) {
        this.abrir(arg.dateStr);
    }
    ngOnInit() {
    }
    eventClick(arg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(arg.event.id, this.activities);
            const status = arg.event.title.includes('Cumpleaños') || arg.event.title.includes('Vencimiento') ? false : true;
            console.log(status);
            let tipo = 2;
            if (status) {
                tipo = 2;
            }
            else {
                tipo = 3;
            }
            if (tipo == 3) {
                if (arg.event.title.includes('Cumpleaños')) {
                    tipo = 3;
                }
                else if (arg.event.title.includes('Vencimiento')) {
                    tipo = 4;
                }
            }
            const modal = yield this.mimodal.create({
                component: src_app_components_oszford_proximos_proximos_component__WEBPACK_IMPORTED_MODULE_9__.ProximosComponent,
                componentProps: {
                    tkn: '31CA0D6B-1A7F-4778-9F5D-07145AFF14FE',
                    list: this.activities,
                    event: arg.event,
                    type: tipo
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado.data) {
                if (cerrado.data.close) {
                    const idx = this.activities.findIndex((item) => item.GUID == arg.event.id);
                    if (idx >= 0) {
                        this.activities[idx].realizado = 'SI';
                    }
                    console.log('cerrado', this.activities);
                }
            }
        });
    }
    getColor(item) {
        if (item == 'EXPLORACION O VISITA EN FRIO') {
            return '#E85B6A';
        }
        else if (item == 'LLAMADA COMERCIAL (TELEMERCADEO)') {
            return '#F5BC41';
        }
        else if (item == 'MAIL MARKETING') {
            return '#7CE675';
        }
        else if (item == 'REUNION COMERCIAL') {
            return '#4CA1EC';
        }
        else if (item == 'ENVIO DE OFERTA COMERCIAL') {
            return '#E85242';
        }
        else if (item == 'SEGUIMIENTO') {
            return '#8039BB';
        }
        else if (item == 'SUSTENTACIÓN') {
            return '#325863';
        }
        else if (item == 'NEGOCIACIÓN O AJUSTES') {
            return '#325863';
        }
        else if (item == 'CLIENTE APROBADO') {
            return '#EA447B';
        }
        else if (item == 'CLIENTE PERDIDO') {
            return '#9A2F53';
        }
        else if (item == 'GESTIÓN DE CONTRATO') {
            return '#4F1F7E';
        }
        else if (item == 'RENOVACIÓN DE CONTRATO') {
            return '#1F7132';
        }
        else if (item == 'FIDELIZACIÓN') {
            return '#CE4733';
        }
        else if (item == 'FINALIZACIÓN CONTRACTUAL') {
            return '#23699E';
        }
        else if (item == 'OTRA') {
            return '#FA9E27';
        }
        else {
            return '#E85B6A';
        }
    }
    ionViewWillEnter() {
        underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.options, (it, i) => {
            this.filtrado.push(it.text);
        });
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.load = true;
            const mimodal = this.mimodal;
            this.calendarOptions = {
                plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"]],
                dateClick: this.handleDateClick.bind(this),
                stickyHeaderDates: true,
                showNonCurrentDates: false,
                weekends: true,
                timeZone: 'local',
                locale: 'es',
                buttonText: {
                    'today': 'Hoy',
                    week: 'Semana',
                    month: 'Mes',
                    day: 'Dia'
                },
                // initialView: 'timeGridWeek',
                /*businessHours:
                {daysOfWeek: [ 1], // Monday - Thursday
        
                startTime: '10:00', // a start time (10am in this example)
                endTime: '18:00', }
              , */
                droppable: true,
                /*   drop: function(arg) {
                     console.log(arg,  arg.draggedEl.getAttribute('horario'))
                    
                     // is the "remove after drop" checkbox checked?
                    // if (document.getElementById("drop-remove").checked) {
                         // if so, remove the element from the "Draggable Events" list
                       //  arg.draggedEl.parentNode.removeChild(arg.draggedEl);
                   //  }
                 }, */
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                eventClick: this.eventClick.bind(this),
                datesSet: this.getDate.bind(this),
            };
            this.getEvents();
            //  this.getActivities();
            //   this.getEvents();
        }), 1000);
    }
    selectCliente(item) {
        this.cliente = item;
        this.descCliente = '';
        this.filtrar();
    }
    cambio(event) {
        this.descCliente = event.detail.value;
    }
    selectComercial(item) {
        this.comercial = item;
        this.descComercial = '';
        this.filtrar();
    }
    cambio2(event) {
        this.descComercial = event.detail.value;
    }
    loadUsers() {
        return new Promise((resolve, reject) => {
            this.api.users({
                AccessToken: '31CA0D6B-1A7F-4778-9F5D-07145AFF14FE'
            }).subscribe((data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve([]);
                }
            });
        });
    }
    loadLocations() {
        return new Promise((resolve, reject) => {
            this.api.getLocs({
                AccessToken: '31CA0D6B-1A7F-4778-9F5D-07145AFF14FE',
                LocationTypeID: '68C1C59F-B620-442E-90F1-F10CD94F526C'
            }).subscribe((data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve([]);
                }
            });
        });
    }
    getDate(arg) {
        console.log(arg);
        const from = moment__WEBPACK_IMPORTED_MODULE_4__(arg.startStr).format('YYYY-MM-DD HH:mm');
        const to = moment__WEBPACK_IMPORTED_MODULE_4__(arg.endStr).format('YYYY-MM-DD HH:mm');
        this.from = from;
        this.to = to;
        this.getActivities({
            from,
            to
        });
    }
    getActivityInfo(guid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api.getActivitieInfo('31CA0D6B-1A7F-4778-9F5D-07145AFF14FE', guid).subscribe((data) => {
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
    calcular(hora) {
        if (hora.includes('a')) {
            let parte = hora.split(' ');
            let horaMinutes = parte[0].split(':');
            let horaSeparada = horaMinutes[0];
            let minutosSeparados = horaMinutes[1];
            let nuevaHora = horaSeparada == '12' ? '00' : horaSeparada;
            return nuevaHora + ':' + minutosSeparados;
            console.log(parte);
        }
        else if (hora.includes('p')) {
            let parte = hora.split(' ');
            let horaMinutes = parte[0].split(':');
            let horaSeparada = horaMinutes[0];
            let minutosSeparados = horaMinutes[1];
            let nuevaHora = '';
            switch (horaSeparada) {
                case '12':
                    nuevaHora = '12';
                    break;
                case '01':
                    nuevaHora = '13';
                    break;
                case '02':
                    nuevaHora = '14';
                    break;
                case '03':
                    nuevaHora = '15';
                    break;
                case '04':
                    nuevaHora = '16';
                    break;
                case '05':
                    nuevaHora = '17';
                    break;
                case '06':
                    nuevaHora = '18';
                    break;
                case '07':
                    nuevaHora = '19';
                    break;
                case '08':
                    nuevaHora = '20';
                    break;
                case '09':
                    nuevaHora = '21';
                    break;
                case '10':
                    nuevaHora = '22';
                    break;
                case '11':
                    nuevaHora = '23';
                    break;
                default:
                    break;
            }
            return nuevaHora + ':' + minutosSeparados;
        }
    }
    getActivities(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.createLoading('Cargando informaciòn, por favor espere');
            this.users = yield this.loadUsers();
            this.locations = yield this.loadLocations();
            console.log(this.locations);
            this.activities = [];
            this.cumples = [];
            this.vencis = [];
            this.api.getActivities2('31CA0D6B-1A7F-4778-9F5D-07145AFF14FE', data.from, data.to, 'F3B9183F-FA9A-4AF1-BB9E-889C8472D3D4').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                console.log(data);
                this.calendarRef.nativeElement.getApi().removeAllEvents();
                for (const item of data) {
                    const resp = yield this.getActivityInfo(item.GUID);
                    if (resp) {
                        const gestion = resp.Values.filter((val) => val.apiId == 'GESTION');
                        const desc = resp.Values.filter((val) => val.apiId == 'DESCRIPCION_NOTIFICACION');
                        const tiempo = resp.Values.filter((val) => val.apiId == 'TIEMPO');
                        const realizado = resp.Values.filter((val) => val.apiId == 'REALIZADO');
                        const fechaNotificacion = resp.Values.filter((val) => val.apiId == 'FECHA_NOTIFICACION');
                        const horaNotificacion = resp.Values.filter((val) => val.apiId == 'HORA_NOTIFICACION');
                        console.log(fechaNotificacion, horaNotificacion, resp.ID);
                        if (fechaNotificacion.length > 0 && horaNotificacion.length > 0) {
                            const hora = this.calcular(horaNotificacion[0].Value);
                            if (gestion.length > 0) {
                                if (gestion[0].Value != '') {
                                    resp.gestion = gestion[0].Value;
                                    resp.realizado = realizado.length > 0 ? realizado[0].Value : 'NO';
                                    resp.clase = this.options.filter((rs) => rs.text == gestion[0].Value).length > 0 ? this.options.filter((rs) => rs.text == gestion[0].Value)[0].class : '';
                                    resp.desc = desc.length > 0 ? desc[0].Value : '';
                                    resp.tiempo = tiempo.length > 0 ? parseFloat(tiempo[0].Value) : 1;
                                    resp.fecha = moment__WEBPACK_IMPORTED_MODULE_4__(fechaNotificacion[0].Value + ' ' + hora).format('YYYY-MM-DD');
                                    resp.programado = moment__WEBPACK_IMPORTED_MODULE_4__(fechaNotificacion[0].Value + ' ' + hora).format('YYYY-MM-DD HH:mm');
                                    resp.alerta = moment__WEBPACK_IMPORTED_MODULE_4__(fechaNotificacion[0].Value + ' ' + hora).subtract(resp.tiempo, 'days').format('YYYY-MM-DD');
                                    resp.dur = moment__WEBPACK_IMPORTED_MODULE_4__(resp.fecha).diff(moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD'), 'days');
                                    const miFecha = moment__WEBPACK_IMPORTED_MODULE_4__(fechaNotificacion[0].Value + ' ' + hora).format('YYYY-MM-DD HH:mm');
                                    console.log(miFecha);
                                    if (miFecha >= this.from && miFecha <= this.to) {
                                        this.activities.push(resp);
                                    }
                                }
                            }
                        }
                    }
                }
                console.log(this.activities);
                this.clientes = underscore__WEBPACK_IMPORTED_MODULE_8__.uniq(underscore__WEBPACK_IMPORTED_MODULE_8__.map(this.activities, (l) => { return l.LocationName; }));
                this.comerciales = underscore__WEBPACK_IMPORTED_MODULE_8__.uniq(underscore__WEBPACK_IMPORTED_MODULE_8__.map(this.activities, (l) => { return l.AssignedToName; }));
                const clientes = this.locations.filter((cl) => cl.FECHA_CUMPLE);
                const contratos = this.locations.filter((cl) => cl.VENCIMIENTO);
                console.log(clientes, ' mis clientes');
                underscore__WEBPACK_IMPORTED_MODULE_8__.each(clientes, (item, i) => {
                    const cumple = moment__WEBPACK_IMPORTED_MODULE_4__(item.FECHA_CUMPLE).format('YYYY-MM-DD');
                    if (cumple >= this.from && cumple <= this.to) {
                        this.cumples.push({
                            name: item.Name,
                            fecha: cumple
                        });
                        item.motivo = 'CUMPLE';
                        this.calendarRef.nativeElement.getApi().addEvent({
                            title: 'Cumpleaños ' + item.Name,
                            start: moment__WEBPACK_IMPORTED_MODULE_4__(cumple).format('YYYY-MM-DD HH:mm'),
                            end: moment__WEBPACK_IMPORTED_MODULE_4__(cumple).add(1, 'hours').format('YYYY-MM-DD HH:mm'),
                            id: item.Name,
                            allDay: true,
                            backgroundColor: '#AFFD45',
                            textColor: '#000000',
                        });
                    }
                });
                underscore__WEBPACK_IMPORTED_MODULE_8__.each(contratos, (item, i) => {
                    const venc = moment__WEBPACK_IMPORTED_MODULE_4__(item.VENCIMIENTO).format('YYYY-MM-DD');
                    if (venc >= this.from && venc <= this.to) {
                        this.vencis.push({
                            name: item.Name,
                            fecha: venc
                        });
                        item.motivo = 'VENC';
                        this.calendarRef.nativeElement.getApi().addEvent({
                            title: 'Vencimiento ' + item.Name,
                            start: moment__WEBPACK_IMPORTED_MODULE_4__(venc).format('YYYY-MM-DD HH:mm'),
                            end: moment__WEBPACK_IMPORTED_MODULE_4__(venc).add(1, 'hours').format('YYYY-MM-DD HH:mm'),
                            id: item.Name,
                            allDay: true,
                            backgroundColor: '#EC1545',
                            textColor: '#ffffff',
                        });
                    }
                });
                underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.activities, (item, i) => {
                    const gestion = item.Values.filter((val) => val.apiId == 'DESCRIPCION_NOTIFICACION');
                    let valor = '';
                    if (gestion.length > 0) {
                        valor = gestion[0].Value;
                    }
                    this.calendarRef.nativeElement.getApi().addEvent({
                        title: valor ? valor : item.LocationName,
                        start: moment__WEBPACK_IMPORTED_MODULE_4__(item.programado).format('YYYY-MM-DD HH:mm'),
                        end: moment__WEBPACK_IMPORTED_MODULE_4__(item.programado).add(1, 'hours').format('YYYY-MM-DD HH:mm'),
                        id: item.GUID,
                        allDay: false,
                        borderColor: item.realizado == 'SI' ? '#AFFD45' : '',
                        backgroundColor: this.getColor(item.gestion),
                        textColor: '#ffffff',
                    });
                });
                this.loading.cancelLoading();
                /*
                
                      */
            }), (err) => {
                this.loading.cancelLoading();
            });
        });
    }
    abrirVentana() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mimodal.create({
                component: src_app_components_oszford_proximos_proximos_component__WEBPACK_IMPORTED_MODULE_9__.ProximosComponent,
                componentProps: {
                    tkn: '',
                    list: this.activities,
                    type: 1
                }
            });
            yield modal.present();
        });
    }
    abrirVentanaCumple() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mimodal.create({
                component: src_app_components_oszford_proximos_proximos_component__WEBPACK_IMPORTED_MODULE_9__.ProximosComponent,
                componentProps: {
                    tkn: '',
                    list: this.cumples,
                    type: 5
                }
            });
            yield modal.present();
        });
    }
    abrirVentanaVenci() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mimodal.create({
                component: src_app_components_oszford_proximos_proximos_component__WEBPACK_IMPORTED_MODULE_9__.ProximosComponent,
                componentProps: {
                    tkn: '',
                    list: this.vencis,
                    type: 6
                }
            });
            yield modal.present();
        });
    }
    filtrar() {
        this.calendarRef.nativeElement.getApi().removeAllEvents();
        let tempActis = [];
        if (this.cliente) {
            tempActis = this.activities.filter((it) => it.LocationName == this.cliente);
        }
        else {
            tempActis = this.activities;
        }
        if (this.comercial) {
            tempActis = tempActis.filter((it) => it.AssignedToName == this.comercial);
        }
        console.log('enteamos', tempActis);
        underscore__WEBPACK_IMPORTED_MODULE_8__.each(tempActis, (item, i) => {
            const exist = this.filtrado.filter((it) => it == item.gestion);
            console.log(exist, 'EXISTO');
            if (exist.length > 0) {
                this.calendarRef.nativeElement.getApi().addEvent({
                    title: item.gestion,
                    start: moment__WEBPACK_IMPORTED_MODULE_4__(item.programado).format('YYYY-MM-DD HH:mm'),
                    end: moment__WEBPACK_IMPORTED_MODULE_4__(item.programado).add(1, 'hours').format('YYYY-MM-DD HH:mm'),
                    id: item.GUID,
                    allDay: false,
                    borderColor: item.realizado == 'SI' ? '#AFFD45' : '',
                    backgroundColor: this.getColor(item.gestion),
                    textColor: '#ffffff',
                });
            }
        });
    }
    borrarCliente() {
        this.cliente = false;
        this.filtrar();
    }
    borrarComercial() {
        this.comercial = false;
        this.filtrar();
    }
    escoger(event) {
        console.log(event.detail, this.filtrado);
        if (event.detail.checked) {
            this.filtrado.push(event.detail.value);
        }
        else {
            this.filtrado = this.filtrado.filter((item) => item != event.detail.value);
        }
        this.filtrar();
    }
    getEvents() {
        setTimeout(() => {
        }, 1000);
    }
    abrir(arg) {
        console.log(arg);
    }
};
OszfordCalendarioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_10__.LoadingService }
];
OszfordCalendarioPage.propDecorators = {
    calendarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['calendar',] }],
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['external',] }]
};
OszfordCalendarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-oszford-calendario',
        template: _oszford_calendario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_oszford_calendario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OszfordCalendarioPage);



/***/ }),

/***/ 84798:
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/oszford-calendario/oszford-calendario.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".rosa {\n  background-color: #E85B6A;\n}\n\n.amarillo {\n  background-color: #F5BC41;\n}\n\n.verde {\n  background-color: #7CE675;\n}\n\n.azul {\n  background-color: #4CA1EC;\n}\n\n.naranja {\n  background-color: #E85242;\n}\n\n.morado {\n  background-color: #8039BB;\n}\n\n.it1 {\n  background-color: #325863;\n}\n\n.it2 {\n  background-color: #325863;\n}\n\n.it3 {\n  background-color: #EA447B;\n}\n\n.it4 {\n  background-color: #9A2F53;\n}\n\n.it5 {\n  background-color: #4F1F7E;\n}\n\n.it6 {\n  background-color: #1F7132;\n}\n\n.it7 {\n  background-color: #CE4733;\n}\n\n.it8 {\n  background-color: #23699E;\n}\n\n.it9 {\n  background-color: #FA9E27;\n}\n\nion-avatar {\n  width: 20px;\n  height: 20px;\n}\n\n.separador {\n  margin: 20px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n\n.boton {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  width: 70px;\n  height: 70px;\n  z-index: 100;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n  box-shadow: 0px 1px 20px 5px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  animation: cambio 1s 2s infinite;\n  animation-name: cambio;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-delay: 0.5s;\n  color: #fff;\n  cursor: pointer;\n}\n\n@keyframes cambio {\n  from {\n    background-color: #134871;\n  }\n  to {\n    background-color: #27A4C3;\n  }\n}\n\n.cumples {\n  position: fixed;\n  bottom: 10px;\n  right: 110px;\n  width: 70px;\n  height: 70px;\n  z-index: 100;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n  box-shadow: 0px 1px 20px 5px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  color: #fff;\n  background: rgb(41, 175, 21);\n  background: linear-gradient(90deg, rgb(41, 175, 21) 0%, rgb(235, 230, 11) 100%);\n  cursor: pointer;\n  animation: rotar 1s 2s infinite;\n  animation-name: rotar;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-delay: 0.5s;\n}\n\n.venci {\n  position: fixed;\n  bottom: 10px;\n  right: 200px;\n  width: 70px;\n  height: 70px;\n  z-index: 100;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n  box-shadow: 0px 1px 20px 5px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  color: #fff;\n  background: rgb(207, 33, 9);\n  background: linear-gradient(90deg, rgb(207, 33, 9) 0%, rgb(242, 148, 11) 100%);\n  cursor: pointer;\n  animation: traslado 1s 2s infinite;\n  animation-name: traslado;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-delay: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9zemZvcmQtY2FsZW5kYXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBYUE7RUFDSSx5QkFBQTtBQVZKOztBQWFBO0VBQ0kseUJBQUE7QUFWSjs7QUFhQTtFQUNJLHlCQUFBO0FBVko7O0FBYUE7RUFDSSx5QkFBQTtBQVZKOztBQWFBO0VBQ0kseUJBQUE7QUFWSjs7QUFhQTtFQUNJLHlCQUFBO0FBVko7O0FBYUE7RUFDSSx5QkFBQTtBQVZKOztBQWFBO0VBQ0kseUJBQUE7QUFWSjs7QUFhQTtFQUNJLHlCQUFBO0FBVko7O0FBZUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVpKOztBQWVBO0VBQ0ksY0FBQTtFQUNBLDJDQUFBO0FBWko7O0FBZUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQVpKOztBQWdCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0ZBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFiSjs7QUFrQkU7RUFDRTtJQUNJLHlCQUFBO0VBZk47RUFrQkU7SUFDSSx5QkFBQTtFQWhCTjtBQUNGOztBQXNCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0ZBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7RUFDSiwrRUFBQTtFQUNJLGVBQUE7RUFFQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0FBdEJKOztBQStCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0ZBQUE7RUFFQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFFQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0FBOUJKIiwiZmlsZSI6Im9zemZvcmQtY2FsZW5kYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9zYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4NUI2QTtcbn1cblxuLmFtYXJpbGxvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVCQzQxO1xufVxuXG4udmVyZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Q0U2NzU7XG59XG5cbi5henVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBMUVDO1xufVxuXG4ubmFyYW5qYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4NTI0Mjtcbn1cblxuLm1vcmFkbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMzlCQjtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi5pdDEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjU4NjM7XG59XG5cbi5pdDIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjU4NjM7XG59XG5cbi5pdDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTQ0N0I7XG59XG5cbi5pdDQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QTJGNTM7XG59XG5cbi5pdDUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjFGN0U7XG59XG5cbi5pdDYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjcxMzI7XG59XG5cbi5pdDcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRTQ3MzM7XG59XG5cbi5pdDgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzY5OUU7XG59XG5cbi5pdDkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTlFMjc7XG59XG5cblxuXG5pb24tYXZhdGFyIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5zZXBhcmFkb3Ige1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cblxuLmJvdG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMjBweCA1cHggcmdiYSgwLDAsMCwuMyksIDBweCAxcHggM3B4IDFweCByZ2JhKDAsMCwwLC4xNSk7XG4gICAgYW5pbWF0aW9uOiBjYW1iaW8gMXMgMnMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNhbWJpbztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIFxuICB9XG4gICAgICBcbiAgQGtleWZyYW1lcyBjYW1iaW8ge1xuICAgIGZyb20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM0ODcxO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QTRDMztcbiAgICB9XG4gIH1cblxuXG5cblxuLmN1bXBsZXMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMjBweCA1cHggcmdiYSgwLDAsMCwuMyksIDBweCAxcHggM3B4IDFweCByZ2JhKDAsMCwwLC4xNSk7XG5cbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDEsMTc1LDIxKTtcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0MSwxNzUsMjEsMSkgMCUsIHJnYmEoMjM1LDIzMCwxMSwxKSAxMDAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBhbmltYXRpb246IHJvdGFyIDFzIDJzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhcjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xuXG4gICAgXG4gIH1cblxuICAgICAgICBcblxuXG5cbi52ZW5jaSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAyMHB4IDVweCByZ2JhKDAsMCwwLC4zKSwgMHB4IDFweCAzcHggMXB4IHJnYmEoMCwwLDAsLjE1KTtcblxuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHJnYigyMDcsMzMsOSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNywzMyw5LDEpIDAlLCByZ2JhKDI0MiwxNDgsMTEsMSkgMTAwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgYW5pbWF0aW9uOiB0cmFzbGFkbyAxcyAycyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogdHJhc2xhZG87XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tZGVsYXk6IC41cztcblxuICAgIFxuICB9Il19 */";

/***/ }),

/***/ 90268:
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/oszford-calendario/oszford-calendario.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"oszford\">\n        <img src=\"assets/osz.jpeg\" width=\"200\" />\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n <div class=\"boton\" (click)=\"abrirVentana()\">\n    <ion-icon name=\"notifications\"></ion-icon>\n </div>\n\n <div *ngIf=\"cumples.length > 0\" class=\"cumples\" (click)=\"abrirVentanaCumple()\">\n    <ion-icon name=\"ice-cream\"></ion-icon>\n </div>\n\n <div *ngIf=\"vencis.length > 0\"  class=\"venci\" (click)=\"abrirVentanaVenci()\">\n    <ion-icon name=\"information\"></ion-icon>\n </div>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"3\">\n                <!--  <div #external class=\"d-flex flex-wrap\">\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\" horario=\"Hola munod\">\n                        <div class=\"fc-event-main\">Event 1</div>\n                    </div>\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                        <div class=\"fc-event-main\">Event 2</div>\n                    </div>\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                        <div class=\"fc-event-main\">Event 3</div>\n                    </div>\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                        <div class=\"fc-event-main\">Event 4</div>\n                    </div>\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                        <div class=\"fc-event-main\">Event 5</div>\n                    </div>\n                </div> -->\n\n                <h3> Cliente</h3>\n\n                <ion-searchbar mode=\"ios\" placeholder=\"Buscar Clientes\" [value]=\"descCliente\" (ionChange)=\"cambio($event)\"></ion-searchbar> <br>\n\n                <ion-chip *ngIf=\"cliente\" color=\"agilissa\">\n                    <ion-label>{{ cliente }} </ion-label>\n                    <ion-icon name=\"close\" (click)=\"borrarCliente()\"></ion-icon>\n                </ion-chip>\n\n                <ion-item *ngFor=\"let item of clientes | agilissacliente : descCliente  \" (click)=\"selectCliente(item)\">\n                    <ion-icon name=\"home\" color=\"agilissa\" slot=\"start\"></ion-icon>\n                    <ion-label class=\"ion-text-wrap\">\n\n                        <div>{{ item }} </div>\n\n\n                    </ion-label>\n                </ion-item>\n\n\n\n                <div class=\"separador\"></div>\n\n\n\n\n                <h3> Gestiones</h3>\n\n                <ion-list>\n\n                    <ion-accordion-group>\n                        <ion-accordion value=\"first\">\n                          <ion-item slot=\"header\" color=\"light\">\n                            <ion-label>Gestiones</ion-label>\n                          </ion-item>\n                          <div class=\"ion-padding\" slot=\"content\">\n                            <ion-item *ngFor=\"let item of options\" mode=\"ios\">\n                                <ion-checkbox color=\"oszford\" slot=\"start\" [checked]=\"item.check\" (ionChange)=\"escoger($event)\" [value]=\"item.text\"></ion-checkbox>\n                                <ion-label class=\"ion-text-wrap\">{{ item.text }}</ion-label>\n                                <ion-avatar class=\"{{ item.class }}\"></ion-avatar>\n                            </ion-item>\n                          </div>\n                        </ion-accordion>\n                        </ion-accordion-group>\n\n               \n                </ion-list>\n\n\n                <div class=\"separador\"></div>\n\n                <h3> Usuarios</h3>\n\n                <ion-searchbar mode=\"ios\" placeholder=\"Buscar Comercial\" [value]=\"descComercial\" (ionChange)=\"cambio2($event)\"></ion-searchbar> <br>\n\n                <ion-chip *ngIf=\"comercial\" color=\"agilissa\">\n                    <ion-label>{{ comercial }} </ion-label>\n                    <ion-icon name=\"close\" (click)=\"borrarComercial()\"></ion-icon>\n                </ion-chip>\n\n                <ion-item *ngFor=\"let item of comerciales | agilissacliente : descComercial  \" (click)=\"selectComercial(item)\">\n                    <ion-icon name=\"home\" color=\"agilissa\" slot=\"start\"></ion-icon>\n                    <ion-label class=\"ion-text-wrap\">\n\n                        <div>{{ item }} </div>\n\n\n                    </ion-label>\n                </ion-item>\n\n\n\n                <div class=\"separador\"></div>\n            </ion-col>\n            <ion-col size=\"9\">\n                <div class=\"calendario\">\n                    <full-calendar class=\"oszford\" *ngIf=\"load\" #calendar [options]=\"calendarOptions\"></full-calendar>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_oszford-calendario_oszford-calendario_module_ts.js.map