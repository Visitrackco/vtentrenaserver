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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _oszford_calendario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oszford-calendario-routing.module */ 39480);
/* harmony import */ var _oszford_calendario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oszford-calendario.page */ 66677);







let OszfordCalendarioPageModule = class OszfordCalendarioPageModule {
};
OszfordCalendarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _oszford_calendario_routing_module__WEBPACK_IMPORTED_MODULE_0__.OszfordCalendarioPageRoutingModule,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _oszford_calendario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oszford-calendario.page.html?ngResource */ 90268);
/* harmony import */ var _oszford_calendario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oszford-calendario.page.scss?ngResource */ 84798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/web-component */ 4902);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ 85194);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ 69901);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ 63936);












(0,_fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__.defineFullCalendarElement)();
let OszfordCalendarioPage = class OszfordCalendarioPage {
    constructor(mimodal, api) {
        this.mimodal = mimodal;
        this.api = api;
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
                text: 'LLAMADA COMERCIAL',
                check: true,
                class: 'amarillo'
            },
            {
                text: 'ENVIO DE CORREO',
                check: true,
                class: 'verde'
            },
            {
                text: 'REUNION COMERCIAL PRESENCIAL O VIRTUAL',
                check: true,
                class: 'azul'
            },
            {
                text: 'FIDELIZACION',
                check: true,
                class: 'naranja'
            },
            {
                text: 'CAPACITACION PRESENCIAL O VIRTUAL',
                check: true,
                class: 'morado'
            }
        ];
        this.load = false;
        this.mes = moment__WEBPACK_IMPORTED_MODULE_4__().locale('es').format('MMMM YYYY');
    }
    /*
      ngAfterViewInit() {
        console.log("PEOPLE LIST ngAfterViewInit() START !!!")
      
        new Draggable(this.events.nativeElement, {
          itemSelector: '.fc-event',
          eventData: function(eventEl) {
            console.log("DRAG !!!");
         
            //var returnedEvent = self.createEventObject(self.selectedShift.value, eventEl.innerText);
      
            //return returnedEvent;
      
            var returnedEvent = {
              title: eventEl.innerText,
              startTime: "18:00",
              duration: {
                hours: 8
              }
            };
      
            return returnedEvent;
          }
        });
      
      }
      */
    handleDateClick(arg) {
        this.abrir(arg.dateStr);
    }
    ngOnInit() {
    }
    getColor(item) {
        if (item == 'EXPLORACION O VISITA EN FRIO') {
            return '#E85B6A';
        }
        else if (item == 'LLAMADA COMERCIAL') {
            return '#F5BC41';
        }
        else if (item == 'ENVIO DE CORREO') {
            return '#7CE675';
        }
        else if (item == 'REUNION COMERCIAL PRESENCIAL O VIRTUAL') {
            return '#4CA1EC';
        }
        else if (item == 'FIDELIZACION') {
            return '#E85242';
        }
        else if (item == 'CAPACITACION PRESENCIAL O VIRTUAL') {
            return '#8039BB';
        }
        else {
            return '#E85B6A';
        }
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.load = true;
            const mimodal = this.mimodal;
            this.calendarOptions = {
                plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"]],
                dateClick: this.handleDateClick.bind(this),
                stickyHeaderDates: true,
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
                datesSet: this.getDate.bind(this),
            };
            this.getEvents();
            //  this.getActivities();
            //   this.getEvents();
        }, 1000);
    }
    getDate(arg) {
        console.log(arg);
        const from = moment__WEBPACK_IMPORTED_MODULE_4__(arg.startStr).format('YYYY-MM-DD HH:mm');
        const to = moment__WEBPACK_IMPORTED_MODULE_4__(arg.endStr).format('YYYY-MM-DD HH:mm');
        this.getActivities({
            from,
            to
        });
    }
    getActivityInfo(guid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    getActivities(data) {
        if (this.activities.length > 0) {
            this.calendarRef.nativeElement.getApi().removeAllEvents();
        }
        this.activities = [];
        this.api.getActivities2('31CA0D6B-1A7F-4778-9F5D-07145AFF14FE', data.from, data.to, 'F3B9183F-FA9A-4AF1-BB9E-889C8472D3D4').subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            for (const item of data) {
                const resp = yield this.getActivityInfo(item.GUID);
                if (resp) {
                    this.activities.push(resp);
                }
            }
            console.log(this.activities);
            underscore__WEBPACK_IMPORTED_MODULE_8__.each(this.activities, (item, i) => {
                const gestion = item.Values.filter((val) => val.apiId == 'GESTION');
                let valor = '';
                if (gestion.length > 0) {
                    valor = gestion[0].Value;
                }
                this.calendarRef.nativeElement.getApi().addEvent({
                    title: item.LocationName,
                    start: moment__WEBPACK_IMPORTED_MODULE_4__(item.DispatchDateTime).format('YYYY-MM-DD HH:mm'),
                    end: moment__WEBPACK_IMPORTED_MODULE_4__(item.DispatchDateTime).add(1, 'hours').format('YYYY-MM-DD HH:mm'),
                    id: JSON.stringify([]),
                    allDay: false,
                    backgroundColor: this.getColor(valor),
                    textColor: '#000000',
                });
            });
            /*
            
                  */
        }));
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService }
];
OszfordCalendarioPage.propDecorators = {
    calendarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['calendar',] }],
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['external',] }]
};
OszfordCalendarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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

module.exports = ".rosa {\n  background-color: #E85B6A;\n}\n\n.amarillo {\n  background-color: #F5BC41;\n}\n\n.verde {\n  background-color: #7CE675;\n}\n\n.azul {\n  background-color: #4CA1EC;\n}\n\n.naranja {\n  background-color: #E85242;\n}\n\n.morado {\n  background-color: #8039BB;\n}\n\n.calendario {\n  height: calc(100vh - 200px);\n  overflow-y: scroll;\n}\n\nion-avatar {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9zemZvcmQtY2FsZW5kYXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6Im9zemZvcmQtY2FsZW5kYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9zYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4NUI2QTtcbn1cblxuLmFtYXJpbGxvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVCQzQxO1xufVxuXG4udmVyZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Q0U2NzU7XG59XG5cbi5henVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBMUVDO1xufVxuXG4ubmFyYW5qYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4NTI0Mjtcbn1cblxuLm1vcmFkbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMzlCQjtcbn1cblxuLmNhbGVuZGFyaW8ge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbmlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn0iXX0= */";

/***/ }),

/***/ 90268:
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/oszford-calendario/oszford-calendario.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"oszford\">\n        <img src=\"assets/osz.jpeg\" width=\"200\" />\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"3\">\n                <!--  <div #external class=\"d-flex flex-wrap\">\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\" horario=\"Hola munod\">\n                        <div class=\"fc-event-main\">Event 1</div>\n                    </div>\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                        <div class=\"fc-event-main\">Event 2</div>\n                    </div>\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                        <div class=\"fc-event-main\">Event 3</div>\n                    </div>\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                        <div class=\"fc-event-main\">Event 4</div>\n                    </div>\n                    <div class=\"fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event badge me-3 my-1\">\n                        <div class=\"fc-event-main\">Event 5</div>\n                    </div>\n                </div> -->\n\n                <ion-searchbar mode=\"ios\" placeholder=\"Buscar Clientes\"></ion-searchbar> <br>\n                <ion-list>\n                    <ion-item *ngFor=\"let item of options\" mode=\"ios\">\n                        <ion-checkbox color=\"oszford\" slot=\"start\" [checked]=\"item.check\"></ion-checkbox>\n                        <ion-label class=\"ion-text-wrap\">{{ item.text }}</ion-label>\n                        <ion-avatar class=\"{{ item.class }}\"></ion-avatar>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n            <ion-col size=\"9\">\n                <div class=\"calendario\">\n                    <full-calendar *ngIf=\"load\" #calendar [options]=\"calendarOptions\"></full-calendar>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_oszford-calendario_oszford-calendario_module_ts.js.map