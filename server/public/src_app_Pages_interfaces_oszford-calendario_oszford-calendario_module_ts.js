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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _oszford_calendario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oszford-calendario.page.html?ngResource */ 90268);
/* harmony import */ var _oszford_calendario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oszford-calendario.page.scss?ngResource */ 84798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/web-component */ 4902);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ 85194);









(0,_fullcalendar_web_component__WEBPACK_IMPORTED_MODULE_2__.defineFullCalendarElement)();
let OszfordCalendarioPage = class OszfordCalendarioPage {
    constructor(mimodal) {
        this.mimodal = mimodal;
        this.calendarOptions = {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"]],
            dateClick: this.handleDateClick.bind(this),
        };
        this.load = false;
        this.mes = moment__WEBPACK_IMPORTED_MODULE_4__().locale('es').format('MMMM YYYY');
    }
    handleDateClick(arg) {
        this.abrir(arg.dateStr);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.load = true;
            const mimodal = this.mimodal;
            this.calendarOptions = {
                plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"]],
                dateClick: this.handleDateClick.bind(this),
                weekends: true,
                timeZone: 'local',
                locale: 'es',
                buttonText: {
                    'today': 'Hoy',
                    week: 'Semana',
                    month: 'Mes',
                    day: 'Dia'
                },
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                },
                datesSet: this.handleDateClick.bind(this)
            };
            //   this.getEvents();
        }, 1000);
    }
    getEvents() {
        setTimeout(() => {
            this.calendarRef.nativeElement.getApi().addEvent({
                title: 'nombre d elos eventos',
                start: moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD'),
                end: moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD'),
                id: JSON.stringify([])
            });
        }, 1000);
    }
    abrir(arg) {
        console.log(arg);
    }
};
OszfordCalendarioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
OszfordCalendarioPage.propDecorators = {
    calendarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['calendar',] }]
};
OszfordCalendarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-oszford-calendario',
        template: _oszford_calendario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_oszford_calendario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OszfordCalendarioPage);



/***/ }),

/***/ 7085:
/*!***************************************************!*\
  !*** ./node_modules/@fullcalendar/common/main.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_OPTION_DEFAULTS": () => (/* binding */ BASE_OPTION_DEFAULTS),
/* harmony export */   "BASE_OPTION_REFINERS": () => (/* binding */ BASE_OPTION_REFINERS),
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent),
/* harmony export */   "BgEvent": () => (/* binding */ BgEvent),
/* harmony export */   "CalendarApi": () => (/* binding */ CalendarApi),
/* harmony export */   "CalendarContent": () => (/* binding */ CalendarContent),
/* harmony export */   "CalendarDataManager": () => (/* binding */ CalendarDataManager),
/* harmony export */   "CalendarDataProvider": () => (/* binding */ CalendarDataProvider),
/* harmony export */   "CalendarRoot": () => (/* binding */ CalendarRoot),
/* harmony export */   "Component": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "ContentHook": () => (/* binding */ ContentHook),
/* harmony export */   "CustomContentRenderContext": () => (/* binding */ CustomContentRenderContext),
/* harmony export */   "DateComponent": () => (/* binding */ DateComponent),
/* harmony export */   "DateEnv": () => (/* binding */ DateEnv),
/* harmony export */   "DateProfileGenerator": () => (/* binding */ DateProfileGenerator),
/* harmony export */   "DayCellContent": () => (/* binding */ DayCellContent),
/* harmony export */   "DayCellRoot": () => (/* binding */ DayCellRoot),
/* harmony export */   "DayHeader": () => (/* binding */ DayHeader),
/* harmony export */   "DaySeriesModel": () => (/* binding */ DaySeriesModel),
/* harmony export */   "DayTableModel": () => (/* binding */ DayTableModel),
/* harmony export */   "DelayedRunner": () => (/* binding */ DelayedRunner),
/* harmony export */   "ElementDragging": () => (/* binding */ ElementDragging),
/* harmony export */   "ElementScrollController": () => (/* binding */ ElementScrollController),
/* harmony export */   "Emitter": () => (/* binding */ Emitter),
/* harmony export */   "EventApi": () => (/* binding */ EventApi),
/* harmony export */   "EventRoot": () => (/* binding */ EventRoot),
/* harmony export */   "EventSourceApi": () => (/* binding */ EventSourceApi),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "Interaction": () => (/* binding */ Interaction),
/* harmony export */   "MoreLinkRoot": () => (/* binding */ MoreLinkRoot),
/* harmony export */   "MountHook": () => (/* binding */ MountHook),
/* harmony export */   "NamedTimeZoneImpl": () => (/* binding */ NamedTimeZoneImpl),
/* harmony export */   "NowIndicatorRoot": () => (/* binding */ NowIndicatorRoot),
/* harmony export */   "NowTimer": () => (/* binding */ NowTimer),
/* harmony export */   "PositionCache": () => (/* binding */ PositionCache),
/* harmony export */   "RefMap": () => (/* binding */ RefMap),
/* harmony export */   "RenderHook": () => (/* binding */ RenderHook),
/* harmony export */   "ScrollController": () => (/* binding */ ScrollController),
/* harmony export */   "ScrollResponder": () => (/* binding */ ScrollResponder),
/* harmony export */   "Scroller": () => (/* binding */ Scroller),
/* harmony export */   "SegHierarchy": () => (/* binding */ SegHierarchy),
/* harmony export */   "SimpleScrollGrid": () => (/* binding */ SimpleScrollGrid),
/* harmony export */   "Slicer": () => (/* binding */ Slicer),
/* harmony export */   "Splitter": () => (/* binding */ Splitter),
/* harmony export */   "StandardEvent": () => (/* binding */ StandardEvent),
/* harmony export */   "TableDateCell": () => (/* binding */ TableDateCell),
/* harmony export */   "TableDowCell": () => (/* binding */ TableDowCell),
/* harmony export */   "Theme": () => (/* binding */ Theme),
/* harmony export */   "ViewApi": () => (/* binding */ ViewApi),
/* harmony export */   "ViewContextType": () => (/* binding */ ViewContextType),
/* harmony export */   "ViewRoot": () => (/* binding */ ViewRoot),
/* harmony export */   "WeekNumberRoot": () => (/* binding */ WeekNumberRoot),
/* harmony export */   "WindowScrollController": () => (/* binding */ WindowScrollController),
/* harmony export */   "addDays": () => (/* binding */ addDays),
/* harmony export */   "addDurations": () => (/* binding */ addDurations),
/* harmony export */   "addMs": () => (/* binding */ addMs),
/* harmony export */   "addWeeks": () => (/* binding */ addWeeks),
/* harmony export */   "allowContextMenu": () => (/* binding */ allowContextMenu),
/* harmony export */   "allowSelection": () => (/* binding */ allowSelection),
/* harmony export */   "applyMutationToEventStore": () => (/* binding */ applyMutationToEventStore),
/* harmony export */   "applyStyle": () => (/* binding */ applyStyle),
/* harmony export */   "applyStyleProp": () => (/* binding */ applyStyleProp),
/* harmony export */   "asCleanDays": () => (/* binding */ asCleanDays),
/* harmony export */   "asRoughMinutes": () => (/* binding */ asRoughMinutes),
/* harmony export */   "asRoughMs": () => (/* binding */ asRoughMs),
/* harmony export */   "asRoughSeconds": () => (/* binding */ asRoughSeconds),
/* harmony export */   "binarySearch": () => (/* binding */ binarySearch),
/* harmony export */   "buildClassNameNormalizer": () => (/* binding */ buildClassNameNormalizer),
/* harmony export */   "buildEntryKey": () => (/* binding */ buildEntryKey),
/* harmony export */   "buildEventApis": () => (/* binding */ buildEventApis),
/* harmony export */   "buildEventRangeKey": () => (/* binding */ buildEventRangeKey),
/* harmony export */   "buildHashFromArray": () => (/* binding */ buildHashFromArray),
/* harmony export */   "buildIsoString": () => (/* binding */ buildIsoString),
/* harmony export */   "buildNavLinkAttrs": () => (/* binding */ buildNavLinkAttrs),
/* harmony export */   "buildSegCompareObj": () => (/* binding */ buildSegCompareObj),
/* harmony export */   "buildSegTimeText": () => (/* binding */ buildSegTimeText),
/* harmony export */   "collectFromHash": () => (/* binding */ collectFromHash),
/* harmony export */   "combineEventUis": () => (/* binding */ combineEventUis),
/* harmony export */   "compareByFieldSpec": () => (/* binding */ compareByFieldSpec),
/* harmony export */   "compareByFieldSpecs": () => (/* binding */ compareByFieldSpecs),
/* harmony export */   "compareNumbers": () => (/* binding */ compareNumbers),
/* harmony export */   "compareObjs": () => (/* binding */ compareObjs),
/* harmony export */   "computeEarliestSegStart": () => (/* binding */ computeEarliestSegStart),
/* harmony export */   "computeEdges": () => (/* binding */ computeEdges),
/* harmony export */   "computeFallbackHeaderFormat": () => (/* binding */ computeFallbackHeaderFormat),
/* harmony export */   "computeHeightAndMargins": () => (/* binding */ computeHeightAndMargins),
/* harmony export */   "computeInnerRect": () => (/* binding */ computeInnerRect),
/* harmony export */   "computeRect": () => (/* binding */ computeRect),
/* harmony export */   "computeSegDraggable": () => (/* binding */ computeSegDraggable),
/* harmony export */   "computeSegEndResizable": () => (/* binding */ computeSegEndResizable),
/* harmony export */   "computeSegStartResizable": () => (/* binding */ computeSegStartResizable),
/* harmony export */   "computeShrinkWidth": () => (/* binding */ computeShrinkWidth),
/* harmony export */   "computeSmallestCellWidth": () => (/* binding */ computeSmallestCellWidth),
/* harmony export */   "computeVisibleDayRange": () => (/* binding */ computeVisibleDayRange),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "constrainPoint": () => (/* binding */ constrainPoint),
/* harmony export */   "createAriaClickAttrs": () => (/* binding */ createAriaClickAttrs),
/* harmony export */   "createContext": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   "createDuration": () => (/* binding */ createDuration),
/* harmony export */   "createElement": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   "createEmptyEventStore": () => (/* binding */ createEmptyEventStore),
/* harmony export */   "createEventInstance": () => (/* binding */ createEventInstance),
/* harmony export */   "createEventUi": () => (/* binding */ createEventUi),
/* harmony export */   "createFormatter": () => (/* binding */ createFormatter),
/* harmony export */   "createPlugin": () => (/* binding */ createPlugin),
/* harmony export */   "createPortal": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_0__.createPortal),
/* harmony export */   "createRef": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "diffDates": () => (/* binding */ diffDates),
/* harmony export */   "diffDayAndTime": () => (/* binding */ diffDayAndTime),
/* harmony export */   "diffDays": () => (/* binding */ diffDays),
/* harmony export */   "diffPoints": () => (/* binding */ diffPoints),
/* harmony export */   "diffWeeks": () => (/* binding */ diffWeeks),
/* harmony export */   "diffWholeDays": () => (/* binding */ diffWholeDays),
/* harmony export */   "diffWholeWeeks": () => (/* binding */ diffWholeWeeks),
/* harmony export */   "disableCursor": () => (/* binding */ disableCursor),
/* harmony export */   "elementClosest": () => (/* binding */ elementClosest),
/* harmony export */   "elementMatches": () => (/* binding */ elementMatches),
/* harmony export */   "enableCursor": () => (/* binding */ enableCursor),
/* harmony export */   "eventTupleToStore": () => (/* binding */ eventTupleToStore),
/* harmony export */   "filterEventStoreDefs": () => (/* binding */ filterEventStoreDefs),
/* harmony export */   "filterHash": () => (/* binding */ filterHash),
/* harmony export */   "findDirectChildren": () => (/* binding */ findDirectChildren),
/* harmony export */   "findElements": () => (/* binding */ findElements),
/* harmony export */   "flexibleCompare": () => (/* binding */ flexibleCompare),
/* harmony export */   "flushSync": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_0__.flushSync),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "formatDayString": () => (/* binding */ formatDayString),
/* harmony export */   "formatIsoTimeString": () => (/* binding */ formatIsoTimeString),
/* harmony export */   "formatRange": () => (/* binding */ formatRange),
/* harmony export */   "getAllowYScrolling": () => (/* binding */ getAllowYScrolling),
/* harmony export */   "getCanVGrowWithinCell": () => (/* binding */ getCanVGrowWithinCell),
/* harmony export */   "getClippingParents": () => (/* binding */ getClippingParents),
/* harmony export */   "getDateMeta": () => (/* binding */ getDateMeta),
/* harmony export */   "getDayClassNames": () => (/* binding */ getDayClassNames),
/* harmony export */   "getDefaultEventEnd": () => (/* binding */ getDefaultEventEnd),
/* harmony export */   "getElRoot": () => (/* binding */ getElRoot),
/* harmony export */   "getElSeg": () => (/* binding */ getElSeg),
/* harmony export */   "getEntrySpanEnd": () => (/* binding */ getEntrySpanEnd),
/* harmony export */   "getEventClassNames": () => (/* binding */ getEventClassNames),
/* harmony export */   "getEventTargetViaRoot": () => (/* binding */ getEventTargetViaRoot),
/* harmony export */   "getIsRtlScrollbarOnLeft": () => (/* binding */ getIsRtlScrollbarOnLeft),
/* harmony export */   "getRectCenter": () => (/* binding */ getRectCenter),
/* harmony export */   "getRelevantEvents": () => (/* binding */ getRelevantEvents),
/* harmony export */   "getScrollGridClassNames": () => (/* binding */ getScrollGridClassNames),
/* harmony export */   "getScrollbarWidths": () => (/* binding */ getScrollbarWidths),
/* harmony export */   "getSectionClassNames": () => (/* binding */ getSectionClassNames),
/* harmony export */   "getSectionHasLiquidHeight": () => (/* binding */ getSectionHasLiquidHeight),
/* harmony export */   "getSegAnchorAttrs": () => (/* binding */ getSegAnchorAttrs),
/* harmony export */   "getSegMeta": () => (/* binding */ getSegMeta),
/* harmony export */   "getSlotClassNames": () => (/* binding */ getSlotClassNames),
/* harmony export */   "getStickyFooterScrollbar": () => (/* binding */ getStickyFooterScrollbar),
/* harmony export */   "getStickyHeaderDates": () => (/* binding */ getStickyHeaderDates),
/* harmony export */   "getUnequalProps": () => (/* binding */ getUnequalProps),
/* harmony export */   "getUniqueDomId": () => (/* binding */ getUniqueDomId),
/* harmony export */   "globalLocales": () => (/* binding */ globalLocales),
/* harmony export */   "globalPlugins": () => (/* binding */ globalPlugins),
/* harmony export */   "greatestDurationDenominator": () => (/* binding */ greatestDurationDenominator),
/* harmony export */   "groupIntersectingEntries": () => (/* binding */ groupIntersectingEntries),
/* harmony export */   "guid": () => (/* binding */ guid),
/* harmony export */   "hasBgRendering": () => (/* binding */ hasBgRendering),
/* harmony export */   "hasShrinkWidth": () => (/* binding */ hasShrinkWidth),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "interactionSettingsStore": () => (/* binding */ interactionSettingsStore),
/* harmony export */   "interactionSettingsToStore": () => (/* binding */ interactionSettingsToStore),
/* harmony export */   "intersectRanges": () => (/* binding */ intersectRanges),
/* harmony export */   "intersectRects": () => (/* binding */ intersectRects),
/* harmony export */   "intersectSpans": () => (/* binding */ intersectSpans),
/* harmony export */   "isArraysEqual": () => (/* binding */ isArraysEqual),
/* harmony export */   "isColPropsEqual": () => (/* binding */ isColPropsEqual),
/* harmony export */   "isDateSelectionValid": () => (/* binding */ isDateSelectionValid),
/* harmony export */   "isDateSpansEqual": () => (/* binding */ isDateSpansEqual),
/* harmony export */   "isInt": () => (/* binding */ isInt),
/* harmony export */   "isInteractionValid": () => (/* binding */ isInteractionValid),
/* harmony export */   "isMultiDayRange": () => (/* binding */ isMultiDayRange),
/* harmony export */   "isPropsEqual": () => (/* binding */ isPropsEqual),
/* harmony export */   "isPropsValid": () => (/* binding */ isPropsValid),
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate),
/* harmony export */   "joinSpans": () => (/* binding */ joinSpans),
/* harmony export */   "listenBySelector": () => (/* binding */ listenBySelector),
/* harmony export */   "mapHash": () => (/* binding */ mapHash),
/* harmony export */   "memoize": () => (/* binding */ memoize),
/* harmony export */   "memoizeArraylike": () => (/* binding */ memoizeArraylike),
/* harmony export */   "memoizeHashlike": () => (/* binding */ memoizeHashlike),
/* harmony export */   "memoizeObjArg": () => (/* binding */ memoizeObjArg),
/* harmony export */   "mergeEventStores": () => (/* binding */ mergeEventStores),
/* harmony export */   "multiplyDuration": () => (/* binding */ multiplyDuration),
/* harmony export */   "padStart": () => (/* binding */ padStart),
/* harmony export */   "parseBusinessHours": () => (/* binding */ parseBusinessHours),
/* harmony export */   "parseClassNames": () => (/* binding */ parseClassNames),
/* harmony export */   "parseDragMeta": () => (/* binding */ parseDragMeta),
/* harmony export */   "parseEventDef": () => (/* binding */ parseEventDef),
/* harmony export */   "parseFieldSpecs": () => (/* binding */ parseFieldSpecs),
/* harmony export */   "parseMarker": () => (/* binding */ parse),
/* harmony export */   "pointInsideRect": () => (/* binding */ pointInsideRect),
/* harmony export */   "preventContextMenu": () => (/* binding */ preventContextMenu),
/* harmony export */   "preventDefault": () => (/* binding */ preventDefault),
/* harmony export */   "preventSelection": () => (/* binding */ preventSelection),
/* harmony export */   "rangeContainsMarker": () => (/* binding */ rangeContainsMarker),
/* harmony export */   "rangeContainsRange": () => (/* binding */ rangeContainsRange),
/* harmony export */   "rangesEqual": () => (/* binding */ rangesEqual),
/* harmony export */   "rangesIntersect": () => (/* binding */ rangesIntersect),
/* harmony export */   "refineEventDef": () => (/* binding */ refineEventDef),
/* harmony export */   "refineProps": () => (/* binding */ refineProps),
/* harmony export */   "removeElement": () => (/* binding */ removeElement),
/* harmony export */   "removeExact": () => (/* binding */ removeExact),
/* harmony export */   "render": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderChunkContent": () => (/* binding */ renderChunkContent),
/* harmony export */   "renderFill": () => (/* binding */ renderFill),
/* harmony export */   "renderMicroColGroup": () => (/* binding */ renderMicroColGroup),
/* harmony export */   "renderScrollShim": () => (/* binding */ renderScrollShim),
/* harmony export */   "requestJson": () => (/* binding */ requestJson),
/* harmony export */   "sanitizeShrinkWidth": () => (/* binding */ sanitizeShrinkWidth),
/* harmony export */   "setElSeg": () => (/* binding */ setElSeg),
/* harmony export */   "setRef": () => (/* binding */ setRef),
/* harmony export */   "sliceEventStore": () => (/* binding */ sliceEventStore),
/* harmony export */   "sliceEvents": () => (/* binding */ sliceEvents),
/* harmony export */   "sortEventSegs": () => (/* binding */ sortEventSegs),
/* harmony export */   "startOfDay": () => (/* binding */ startOfDay),
/* harmony export */   "translateRect": () => (/* binding */ translateRect),
/* harmony export */   "triggerDateSelect": () => (/* binding */ triggerDateSelect),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_0__.unmountComponentAtNode),
/* harmony export */   "unpromisify": () => (/* binding */ unpromisify),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "whenTransitionDone": () => (/* binding */ whenTransitionDone),
/* harmony export */   "wholeDivideDurations": () => (/* binding */ wholeDivideDurations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vdom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vdom.js */ 53139);
/*!
FullCalendar v6.0.0-beta.1
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/




function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n/* classes attached to <body> */\n/* TODO: make fc-event selector work when calender in shadow DOM */\n.fc-not-allowed,\n.fc-not-allowed .fc-event { /* override events' custom cursors */\n  cursor: not-allowed;\n}\n\n/* TODO: not attached to body. attached to specific els. move */\n.fc-unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.fc {\n  /* layout of immediate children */\n  display: flex;\n  flex-direction: column;\n\n  font-size: 1em\n}\n.fc,\n  .fc *,\n  .fc *:before,\n  .fc *:after {\n    box-sizing: border-box;\n  }\n.fc table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em; /* normalize cross-browser */\n  }\n.fc th {\n    text-align: center;\n  }\n.fc th,\n  .fc td {\n    vertical-align: top;\n    padding: 0;\n  }\n.fc a[data-navlink] {\n    cursor: pointer;\n  }\n.fc a[data-navlink]:hover {\n    text-decoration: underline;\n  }\n.fc-direction-ltr {\n  direction: ltr;\n  text-align: left;\n}\n.fc-direction-rtl {\n  direction: rtl;\n  text-align: right;\n}\n.fc-theme-standard td,\n  .fc-theme-standard th {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n/* for FF, which doesn't expand a 100% div within a table cell. use absolute positioning */\n/* inner-wrappers are responsible for being absolute */\n/* TODO: best place for this? */\n.fc-liquid-hack td,\n  .fc-liquid-hack th {\n    position: relative;\n  }\n\n@font-face {\n  font-family: 'fcicons';\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n.fc-icon {\n  /* added for fc */\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'fcicons' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fc-icon-chevron-left:before {\n  content: \"\\e900\";\n}\n\n.fc-icon-chevron-right:before {\n  content: \"\\e901\";\n}\n\n.fc-icon-chevrons-left:before {\n  content: \"\\e902\";\n}\n\n.fc-icon-chevrons-right:before {\n  content: \"\\e903\";\n}\n\n.fc-icon-minus-square:before {\n  content: \"\\e904\";\n}\n\n.fc-icon-plus-square:before {\n  content: \"\\e905\";\n}\n\n.fc-icon-x:before {\n  content: \"\\e906\";\n}\n/*\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n\nThese styles only apply when the standard-theme is activated.\nWhen it's NOT activated, the fc-button classes won't even be in the DOM.\n*/\n.fc {\n\n  /* reset */\n\n}\n.fc .fc-button {\n    border-radius: 0;\n    overflow: visible;\n    text-transform: none;\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n.fc .fc-button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n.fc .fc-button {\n    -webkit-appearance: button;\n  }\n.fc .fc-button:not(:disabled) {\n    cursor: pointer;\n  }\n.fc .fc-button::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n.fc {\n\n  /* theme */\n\n}\n.fc .fc-button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    padding: 0.4em 0.65em;\n    font-size: 1em;\n    line-height: 1.5;\n    border-radius: 0.25em;\n  }\n.fc .fc-button:hover {\n    text-decoration: none;\n  }\n.fc .fc-button:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  }\n.fc .fc-button:disabled {\n    opacity: 0.65;\n  }\n.fc {\n\n  /* \"primary\" coloring */\n\n}\n.fc .fc-button-primary {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50);\n  }\n.fc .fc-button-primary:hover {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1e2b37;\n    background-color: var(--fc-button-hover-bg-color, #1e2b37);\n    border-color: #1a252f;\n    border-color: var(--fc-button-hover-border-color, #1a252f);\n  }\n.fc .fc-button-primary:disabled { /* not DRY */\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50); /* overrides :hover */\n  }\n.fc .fc-button-primary:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc .fc-button-primary:not(:disabled):active,\n  .fc .fc-button-primary:not(:disabled).fc-button-active {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1a252f;\n    background-color: var(--fc-button-active-bg-color, #1a252f);\n    border-color: #151e27;\n    border-color: var(--fc-button-active-border-color, #151e27);\n  }\n.fc .fc-button-primary:not(:disabled):active:focus,\n  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc {\n\n  /* icons within buttons */\n\n}\n.fc .fc-button .fc-icon {\n    vertical-align: middle;\n    font-size: 1.5em; /* bump up the size (but don't make it bigger than line-height of button, which is 1.5em also) */\n  }\n.fc .fc-button-group {\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n  }\n.fc .fc-button-group > .fc-button {\n    position: relative;\n    flex: 1 1 auto;\n  }\n.fc .fc-button-group > .fc-button:hover {\n    z-index: 1;\n  }\n.fc .fc-button-group > .fc-button:focus,\n  .fc .fc-button-group > .fc-button:active,\n  .fc .fc-button-group > .fc-button.fc-button-active {\n    z-index: 1;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:first-child) {\n    margin-right: -1px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:last-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc .fc-toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n.fc .fc-toolbar.fc-header-toolbar {\n    margin-bottom: 1.5em;\n  }\n.fc .fc-toolbar.fc-footer-toolbar {\n    margin-top: 1.5em;\n  }\n.fc .fc-toolbar-title {\n    font-size: 1.75em;\n    margin: 0;\n  }\n.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {\n    margin-left: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar > * > :not(:first-child) {\n    margin-right: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar-ltr { /* when the toolbar-chunk positioning system is explicitly left-to-right */\n    flex-direction: row-reverse;\n  }\n.fc .fc-scroller {\n    -webkit-overflow-scrolling: touch;\n    position: relative; /* for abs-positioned elements within */\n  }\n.fc .fc-scroller-liquid {\n    height: 100%;\n  }\n.fc .fc-scroller-liquid-absolute {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n  }\n.fc .fc-scroller-harness {\n    position: relative;\n    overflow: hidden;\n    direction: ltr;\n      /* hack for chrome computing the scroller's right/left wrong for rtl. undone below... */\n      /* TODO: demonstrate in codepen */\n  }\n.fc .fc-scroller-harness-liquid {\n    height: 100%;\n  }\n.fc-direction-rtl .fc-scroller-harness > .fc-scroller { /* undo above hack */\n    direction: rtl;\n  }\n.fc-theme-standard .fc-scrollgrid {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd); /* bootstrap does this. match */\n  }\n.fc .fc-scrollgrid,\n    .fc .fc-scrollgrid table { /* all tables (self included) */\n      width: 100%; /* because tables don't normally do this */\n      table-layout: fixed;\n    }\n.fc .fc-scrollgrid table { /* inner tables */\n      border-top-style: hidden;\n      border-left-style: hidden;\n      border-right-style: hidden;\n    }\n.fc .fc-scrollgrid {\n\n    border-collapse: separate;\n    border-right-width: 0;\n    border-bottom-width: 0;\n\n  }\n.fc .fc-scrollgrid-liquid {\n    height: 100%;\n  }\n.fc .fc-scrollgrid-section { /* a <tr> */\n    height: 1px /* better than 0, for firefox */\n\n  }\n.fc .fc-scrollgrid-section > td {\n      height: 1px; /* needs a height so inner div within grow. better than 0, for firefox */\n    }\n.fc .fc-scrollgrid-section table {\n      height: 1px;\n        /* for most browsers, if a height isn't set on the table, can't do liquid-height within cells */\n        /* serves as a min-height. harmless */\n    }\n.fc .fc-scrollgrid-section-liquid > td {\n      height: 100%; /* better than `auto`, for firefox */\n    }\n.fc .fc-scrollgrid-section > * {\n    border-top-width: 0;\n    border-left-width: 0;\n  }\n.fc .fc-scrollgrid-section-header > *,\n  .fc .fc-scrollgrid-section-footer > * {\n    border-bottom-width: 0;\n  }\n.fc .fc-scrollgrid-section-body table,\n  .fc .fc-scrollgrid-section-footer table {\n    border-bottom-style: hidden; /* head keeps its bottom border tho */\n  }\n.fc {\n\n  /* stickiness */\n\n}\n.fc .fc-scrollgrid-section-sticky > * {\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n    position: sticky;\n    z-index: 3; /* TODO: var */\n    /* TODO: box-shadow when sticking */\n  }\n.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky > * {\n    top: 0; /* because border-sharing causes a gap at the top */\n      /* TODO: give safari -1. has bug */\n  }\n.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky > * {\n    bottom: 0; /* known bug: bottom-stickiness doesn't work in safari */\n  }\n.fc .fc-scrollgrid-sticky-shim { /* for horizontal scrollbar */\n    height: 1px; /* needs height to create scrollbars */\n    margin-bottom: -1px;\n  }\n.fc-sticky { /* no .fc wrap because used as child of body */\n  position: sticky;\n}\n.fc .fc-view-harness {\n    flex-grow: 1; /* because this harness is WITHIN the .fc's flexbox */\n    position: relative;\n  }\n.fc {\n\n  /* when the harness controls the height, make the view liquid */\n\n}\n.fc .fc-view-harness-active > .fc-view {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n.fc .fc-col-header-cell-cushion {\n    display: inline-block; /* x-browser for when sticky (when multi-tier header) */\n    padding: 2px 4px;\n  }\n.fc .fc-bg-event,\n  .fc .fc-non-business,\n  .fc .fc-highlight {\n    /* will always have a harness with position:relative/absolute, so absolutely expand */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc .fc-non-business {\n    background: rgba(215, 215, 215, 0.3);\n    background: var(--fc-non-business-color, rgba(215, 215, 215, 0.3));\n  }\n.fc .fc-bg-event {\n    background: rgb(143, 223, 130);\n    background: var(--fc-bg-event-color, rgb(143, 223, 130));\n    opacity: 0.3;\n    opacity: var(--fc-bg-event-opacity, 0.3)\n  }\n.fc .fc-bg-event .fc-event-title {\n      margin: .5em;\n      font-size: .85em;\n      font-size: var(--fc-small-font-size, .85em);\n      font-style: italic;\n    }\n.fc .fc-highlight {\n    background: rgba(188, 232, 241, 0.3);\n    background: var(--fc-highlight-color, rgba(188, 232, 241, 0.3));\n  }\n.fc .fc-cell-shaded,\n  .fc .fc-day-disabled {\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n/* link resets */\n/* ---------------------------------------------------------------------------------------------------- */\na.fc-event,\na.fc-event:hover {\n  text-decoration: none;\n}\n/* cursor */\n.fc-event[href],\n.fc-event.fc-event-draggable {\n  cursor: pointer;\n}\n/* event text content */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event .fc-event-main {\n    position: relative;\n    z-index: 2;\n  }\n/* dragging */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-dragging:not(.fc-event-selected) { /* MOUSE */\n    opacity: 0.75;\n  }\n.fc-event-dragging.fc-event-selected { /* TOUCH */\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n  }\n/* resizing */\n/* ---------------------------------------------------------------------------------------------------- */\n/* (subclasses should hone positioning for touch and non-touch) */\n.fc-event .fc-event-resizer {\n    display: none;\n    position: absolute;\n    z-index: 4;\n  }\n.fc-event:hover, /* MOUSE */\n.fc-event-selected { /* TOUCH */\n\n}\n.fc-event:hover .fc-event-resizer, .fc-event-selected .fc-event-resizer {\n    display: block;\n  }\n.fc-event-selected .fc-event-resizer {\n    border-radius: 4px;\n    border-radius: calc(var(--fc-event-resizer-dot-total-width, 8px) / 2);\n    border-width: 1px;\n    border-width: var(--fc-event-resizer-dot-border-width, 1px);\n    width: 8px;\n    width: var(--fc-event-resizer-dot-total-width, 8px);\n    height: 8px;\n    height: var(--fc-event-resizer-dot-total-width, 8px);\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff)\n\n    /* expand hit area */\n\n  }\n.fc-event-selected .fc-event-resizer:before {\n      content: '';\n      position: absolute;\n      top: -20px;\n      left: -20px;\n      right: -20px;\n      bottom: -20px;\n    }\n/* selecting (always TOUCH) */\n/* OR, focused by tab-index */\n/* (TODO: maybe not the best focus-styling for .fc-daygrid-dot-event) */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-selected,\n.fc-event:focus {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)\n\n  /* expand hit area (subclasses should expand) */\n\n}\n.fc-event-selected:before, .fc-event:focus:before {\n    content: \"\";\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc-event-selected,\n.fc-event:focus {\n\n  /* dimmer effect */\n\n}\n.fc-event-selected:after, .fc-event:focus:after {\n    content: \"\";\n    background: rgba(0, 0, 0, 0.25);\n    background: var(--fc-event-selected-overlay-color, rgba(0, 0, 0, 0.25));\n    position: absolute;\n    z-index: 1;\n\n    /* assume there's a border on all sides. overcome it. */\n    /* sometimes there's NOT a border, in which case the dimmer will go over */\n    /* an adjacent border, which looks fine. */\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n  }\n/*\nA HORIZONTAL event\n*/\n.fc-h-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n.fc-h-event .fc-event-main {\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n  }\n.fc-h-event .fc-event-main-frame {\n    display: flex; /* for make fc-event-title-container expand */\n  }\n.fc-h-event .fc-event-time {\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event .fc-event-title-container { /* serves as a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n  }\n.fc-h-event .fc-event-title {\n    display: inline-block; /* need this to be sticky cross-browser */\n    vertical-align: top; /* for not messing up line-height */\n    left: 0;  /* for sticky */\n    right: 0; /* for sticky */\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n/* adjust border and border-radius (if there is any) for non-start/end */\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n}\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right-width: 0;\n}\n/* resizers */\n.fc-h-event:not(.fc-event-selected) .fc-event-resizer {\n  top: 0;\n  bottom: 0;\n  width: 8px;\n  width: var(--fc-event-resizer-thickness, 8px);\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end {\n  cursor: w-resize;\n  left: -4px;\n  left: calc(-0.5 * var(--fc-event-resizer-thickness, 8px));\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start {\n  cursor: e-resize;\n  right: -4px;\n  right: calc(-0.5 * var(--fc-event-resizer-thickness, 8px));\n}\n/* resizers for TOUCH */\n.fc-h-event.fc-event-selected .fc-event-resizer {\n  top: 50%;\n  margin-top: -4px;\n  margin-top: calc(-0.5 * var(--fc-event-resizer-dot-total-width, 8px));\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end {\n  left: -4px;\n  left: calc(-0.5 * var(--fc-event-resizer-dot-total-width, 8px));\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start {\n  right: -4px;\n  right: calc(-0.5 * var(--fc-event-resizer-dot-total-width, 8px));\n}\n.fc .fc-popover {\n    position: absolute;\n    z-index: 9999;\n    box-shadow: 0 2px 6px rgba(0,0,0,.15);\n  }\n.fc .fc-popover-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3px 4px;\n  }\n.fc .fc-popover-title {\n    margin: 0 2px;\n  }\n.fc .fc-popover-close {\n    cursor: pointer;\n    opacity: 0.65;\n    font-size: 1.1em;\n  }\n.fc-theme-standard .fc-popover {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n  }\n.fc-theme-standard .fc-popover-header {\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n";
styleInject(css_248z); // no public types yet. when there are, export from:
// import {} from './api-type-deps'

class EventSourceApi {
  constructor(context, internalEventSource) {
    this.context = context;
    this.internalEventSource = internalEventSource;
  }

  remove() {
    this.context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: this.internalEventSource.sourceId
    });
  }

  refetch() {
    this.context.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: true
    });
  }

  get id() {
    return this.internalEventSource.publicId;
  }

  get url() {
    return this.internalEventSource.meta.url;
  }

  get format() {
    return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
  }

}

function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
} // Querying
// ----------------------------------------------------------------------------------------------------------------


function elementClosest(el, selector) {
  if (el.closest) {
    return el.closest(selector); // really bad fallback for IE
    // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  }

  if (!document.documentElement.contains(el)) {
    return null;
  }

  do {
    if (elementMatches(el, selector)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);

  return null;
}

function elementMatches(el, selector) {
  let method = el.matches || el.matchesSelector || el.msMatchesSelector;
  return method.call(el, selector);
} // accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document


function findElements(container, selector) {
  let containers = container instanceof HTMLElement ? [container] : container;
  let allMatches = [];

  for (let i = 0; i < containers.length; i += 1) {
    let matches = containers[i].querySelectorAll(selector);

    for (let j = 0; j < matches.length; j += 1) {
      allMatches.push(matches[j]);
    }
  }

  return allMatches;
} // accepts multiple subject els
// only queries direct child elements // TODO: rename to findDirectChildren!


function findDirectChildren(parent, selector) {
  let parents = parent instanceof HTMLElement ? [parent] : parent;
  let allMatches = [];

  for (let i = 0; i < parents.length; i += 1) {
    let childNodes = parents[i].children; // only ever elements

    for (let j = 0; j < childNodes.length; j += 1) {
      let childNode = childNodes[j];

      if (!selector || elementMatches(childNode, selector)) {
        allMatches.push(childNode);
      }
    }
  }

  return allMatches;
} // Style
// ----------------------------------------------------------------------------------------------------------------


const PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;

function applyStyle(el, props) {
  for (let propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}

function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = '';
  } else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
    el.style[name] = `${val}px`;
  } else {
    el.style[name] = val;
  }
} // Event Handling
// ----------------------------------------------------------------------------------------------------------------
// if intercepting bubbled events at the document/window/body level,
// and want to see originating element (the 'target'), use this util instead
// of `ev.target` because it goes within web-component boundaries.


function getEventTargetViaRoot(ev) {
  var _a, _b;

  return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
} // Shadow DOM consuderations
// ----------------------------------------------------------------------------------------------------------------


function getElRoot(el) {
  return el.getRootNode ? el.getRootNode() : document;
} // Unique ID for DOM attribute


let guid$1 = 0;

function getUniqueDomId() {
  guid$1 += 1;
  return 'fc-dom-' + guid$1;
} // Stops a mouse/touch event from doing it's native browser action


function preventDefault(ev) {
  ev.preventDefault();
} // Event Delegation
// ----------------------------------------------------------------------------------------------------------------


function buildDelegationHandler(selector, handler) {
  return ev => {
    let matchedChild = elementClosest(ev.target, selector);

    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}

function listenBySelector(container, eventType, selector, handler) {
  let attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return () => {
    container.removeEventListener(eventType, attachedHandler);
  };
}

function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  let currentMatchedChild;
  return listenBySelector(container, 'mouseover', selector, (mouseOverEv, matchedChild) => {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(mouseOverEv, matchedChild);

      let realOnMouseLeave = mouseLeaveEv => {
        currentMatchedChild = null;
        onMouseLeave(mouseLeaveEv, matchedChild);
        matchedChild.removeEventListener('mouseleave', realOnMouseLeave);
      }; // listen to the next mouseleave, and then unattach


      matchedChild.addEventListener('mouseleave', realOnMouseLeave);
    }
  });
} // Animation
// ----------------------------------------------------------------------------------------------------------------


const transitionEventNames = ['webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'transitionend']; // triggered only when the next single subsequent transition finishes

function whenTransitionDone(el, callback) {
  let realCallback = ev => {
    callback(ev);
    transitionEventNames.forEach(eventName => {
      el.removeEventListener(eventName, realCallback);
    });
  };

  transitionEventNames.forEach(eventName => {
    el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
  });
} // ARIA workarounds
// ----------------------------------------------------------------------------------------------------------------


function createAriaClickAttrs(handler) {
  return Object.assign({
    onClick: handler
  }, createAriaKeyboardAttrs(handler));
}

function createAriaKeyboardAttrs(handler) {
  return {
    tabIndex: 0,

    onKeyDown(ev) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        handler(ev);
        ev.preventDefault(); // if space, don't scroll down page
      }
    }

  };
}

let guidNumber = 0;

function guid() {
  guidNumber += 1;
  return String(guidNumber);
}
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Make the mouse cursor express that an event is not allowed in the current area


function disableCursor() {
  document.body.classList.add('fc-not-allowed');
} // Returns the mouse cursor to its original look


function enableCursor() {
  document.body.classList.remove('fc-not-allowed');
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/


function preventSelection(el) {
  el.classList.add('fc-unselectable');
  el.addEventListener('selectstart', preventDefault);
}

function allowSelection(el) {
  el.classList.remove('fc-unselectable');
  el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/


function preventContextMenu(el) {
  el.addEventListener('contextmenu', preventDefault);
}

function allowContextMenu(el) {
  el.removeEventListener('contextmenu', preventDefault);
}

function parseFieldSpecs(input) {
  let specs = [];
  let tokens = [];
  let i;
  let token;

  if (typeof input === 'string') {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === 'function') {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }

  for (i = 0; i < tokens.length; i += 1) {
    token = tokens[i];

    if (typeof token === 'string') {
      specs.push(token.charAt(0) === '-' ? {
        field: token.substring(1),
        order: -1
      } : {
        field: token,
        order: 1
      });
    } else if (typeof token === 'function') {
      specs.push({
        func: token
      });
    }
  }

  return specs;
}

function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  let i;
  let cmp;

  for (i = 0; i < fieldSpecs.length; i += 1) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);

    if (cmp) {
      return cmp;
    }
  }

  return 0;
}

function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }

  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}

function flexibleCompare(a, b) {
  if (!a && !b) {
    return 0;
  }

  if (b == null) {
    return -1;
  }

  if (a == null) {
    return 1;
  }

  if (typeof a === 'string' || typeof b === 'string') {
    return String(a).localeCompare(String(b));
  }

  return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/


function padStart(val, len) {
  let s = String(val);
  return '000'.substr(0, len - s.length) + s;
}

function formatWithOrdinals(formatter, args, fallbackText) {
  if (typeof formatter === 'function') {
    return formatter(...args);
  }

  if (typeof formatter === 'string') {
    // non-blank string
    return args.reduce((str, arg, index) => str.replace('$' + index, arg || ''), formatter);
  }

  return fallbackText;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/


function compareNumbers(a, b) {
  return a - b;
}

function isInt(n) {
  return n % 1 === 0;
}
/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/


function computeSmallestCellWidth(cellEl) {
  let allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
  let contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');

  if (!allWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
  }

  if (!contentWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-cushion className');
  }

  return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
  contentWidthEl.getBoundingClientRect().width;
}

const DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; // Adding

function addWeeks(m, n) {
  let a = dateToUtcArray(m);
  a[2] += n * 7;
  return arrayToUtcDate(a);
}

function addDays(m, n) {
  let a = dateToUtcArray(m);
  a[2] += n;
  return arrayToUtcDate(a);
}

function addMs(m, n) {
  let a = dateToUtcArray(m);
  a[6] += n;
  return arrayToUtcDate(a);
} // Diffing (all return floats)
// TODO: why not use ranges?


function diffWeeks(m0, m1) {
  return diffDays(m0, m1) / 7;
}

function diffDays(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}

function diffHours(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}

function diffMinutes(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}

function diffSeconds(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1000;
}

function diffDayAndTime(m0, m1) {
  let m0day = startOfDay(m0);
  let m1day = startOfDay(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
} // Diffing Whole Units


function diffWholeWeeks(m0, m1) {
  let d = diffWholeDays(m0, m1);

  if (d !== null && d % 7 === 0) {
    return d / 7;
  }

  return null;
}

function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays(m0, m1));
  }

  return null;
} // Start-Of


function startOfDay(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()]);
}

function startOfHour(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours()]);
}

function startOfMinute(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes()]);
}

function startOfSecond(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes(), m.getUTCSeconds()]);
} // Week Computation


function weekOfYear(marker, dow, doy) {
  let y = marker.getUTCFullYear();
  let w = weekOfGivenYear(marker, y, dow, doy);

  if (w < 1) {
    return weekOfGivenYear(marker, y - 1, dow, doy);
  }

  let nextW = weekOfGivenYear(marker, y + 1, dow, doy);

  if (nextW >= 1) {
    return Math.min(w, nextW);
  }

  return w;
}

function weekOfGivenYear(marker, year, dow, doy) {
  let firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  let dayStart = startOfDay(marker);
  let days = Math.round(diffDays(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1; // zero-indexed
} // start-of-first-week - start-of-year


function firstWeekOffset(year, dow, doy) {
  // first-week day -- which january is always in the first week (4 for iso, 1 for other)
  let fwd = 7 + dow - doy; // first-week day local weekday -- which local weekday is fwd

  let fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
} // Array Conversion


function dateToLocalArray(date) {
  return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
}

function arrayToLocalDate(a) {
  return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
  a[3] || 0, a[4] || 0, a[5] || 0);
}

function dateToUtcArray(date) {
  return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()];
}

function arrayToUtcDate(a) {
  // according to web standards (and Safari), a month index is required.
  // massage if only given a year.
  if (a.length === 1) {
    a = a.concat([0]);
  }

  return new Date(Date.UTC(...a));
} // Other Utils


function isValidDate(m) {
  return !isNaN(m.valueOf());
}

function timeAsMs(m) {
  return m.getUTCHours() * 1000 * 60 * 60 + m.getUTCMinutes() * 1000 * 60 + m.getUTCSeconds() * 1000 + m.getUTCMilliseconds();
}

function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
  return {
    instanceId: guid(),
    defId,
    range,
    forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
    forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
  };
}

const {
  hasOwnProperty
} = Object.prototype; // Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.

function mergeProps(propObjs, complexPropsMap) {
  let dest = {};

  if (complexPropsMap) {
    for (let name in complexPropsMap) {
      let complexObjs = []; // collect the trailing object values, stopping when a non-object is discovered

      for (let i = propObjs.length - 1; i >= 0; i -= 1) {
        let val = propObjs[i][name];

        if (typeof val === 'object' && val) {
          // non-null object
          complexObjs.unshift(val);
        } else if (val !== undefined) {
          dest[name] = val; // if there were no objects, this value will be used

          break;
        }
      } // if the trailing values were objects, use the merged value


      if (complexObjs.length) {
        dest[name] = mergeProps(complexObjs);
      }
    }
  } // copy values into the destination, going from last to first


  for (let i = propObjs.length - 1; i >= 0; i -= 1) {
    let props = propObjs[i];

    for (let name in props) {
      if (!(name in dest)) {
        // if already assigned by previous props or complex props, don't reassign
        dest[name] = props[name];
      }
    }
  }

  return dest;
}

function filterHash(hash, func) {
  let filtered = {};

  for (let key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }

  return filtered;
}

function mapHash(hash, func) {
  let newHash = {};

  for (let key in hash) {
    newHash[key] = func(hash[key], key);
  }

  return newHash;
}

function arrayToHash(a) {
  let hash = {};

  for (let item of a) {
    hash[item] = true;
  }

  return hash;
}

function buildHashFromArray(a, func) {
  let hash = {};

  for (let i = 0; i < a.length; i += 1) {
    let tuple = func(a[i], i);
    hash[tuple[0]] = tuple[1];
  }

  return hash;
}

function hashValuesToArray(obj) {
  let a = [];

  for (let key in obj) {
    a.push(obj[key]);
  }

  return a;
}

function isPropsEqual(obj0, obj1) {
  if (obj0 === obj1) {
    return true;
  }

  for (let key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        return false;
      }
    }
  }

  for (let key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        return false;
      }
    }
  }

  return true;
}

function getUnequalProps(obj0, obj1) {
  let keys = [];

  for (let key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        keys.push(key);
      }
    }
  }

  for (let key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        keys.push(key);
      }
    }
  }

  return keys;
}

function compareObjs(oldProps, newProps, equalityFuncs = {}) {
  if (oldProps === newProps) {
    return true;
  }

  for (let key in newProps) {
    if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;else {
      return false;
    }
  } // check for props that were omitted in the new


  for (let key in oldProps) {
    if (!(key in newProps)) {
      return false;
    }
  }

  return true;
}
/*
assumed "true" equality for handler names like "onReceiveSomething"
*/


function isObjValsEqual(val0, val1, comparator) {
  if (val0 === val1 || comparator === true) {
    return true;
  }

  if (comparator) {
    return comparator(val0, val1);
  }

  return false;
}

function collectFromHash(hash, startIndex = 0, endIndex, step = 1) {
  let res = [];

  if (endIndex == null) {
    endIndex = Object.keys(hash).length;
  }

  for (let i = startIndex; i < endIndex; i += step) {
    let val = hash[i];

    if (val !== undefined) {
      // will disregard undefined for sparse arrays
      res.push(val);
    }
  }

  return res;
}

function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (let i = 0; i < recurringTypes.length; i += 1) {
    let parsed = recurringTypes[i].parse(refined, dateEnv);

    if (parsed) {
      let {
        allDay
      } = refined;

      if (allDay == null) {
        allDay = defaultAllDay;

        if (allDay == null) {
          allDay = parsed.allDayGuess;

          if (allDay == null) {
            allDay = false;
          }
        }
      }

      return {
        allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i
      };
    }
  }

  return null;
}

function expandRecurring(eventStore, framingRange, context) {
  let {
    dateEnv,
    pluginHooks,
    options
  } = context;
  let {
    defs,
    instances
  } = eventStore; // remove existing recurring instances
  // TODO: bad. always expand events as a second step

  instances = filterHash(instances, instance => !defs[instance.defId].recurringDef);

  for (let defId in defs) {
    let def = defs[defId];

    if (def.recurringDef) {
      let {
        duration
      } = def.recurringDef;

      if (!duration) {
        duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }

      let starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);

      for (let start of starts) {
        let instance = createEventInstance(defId, {
          start,
          end: dateEnv.add(start, duration)
        });
        instances[instance.instanceId] = instance;
      }
    }
  }

  return {
    defs,
    instances
  };
}
/*
Event MUST have a recurringDef
*/


function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
  let typeDef = recurringTypes[eventDef.recurringDef.typeId];
  let markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration),
    end: framingRange.end
  }, dateEnv); // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to

  if (eventDef.allDay) {
    markers = markers.map(startOfDay);
  }

  return markers;
}

const INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
const PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/; // Parsing and Creation

function createDuration(input, unit) {
  if (typeof input === 'string') {
    return parseString(input);
  }

  if (typeof input === 'object' && input) {
    // non-null object
    return parseObject(input);
  }

  if (typeof input === 'number') {
    return parseObject({
      [unit || 'milliseconds']: input
    });
  }

  return null;
}

function parseString(s) {
  let m = PARSE_RE.exec(s);

  if (m) {
    let sign = m[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m[2] ? parseInt(m[2], 10) : 0),
      milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
      (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
      (m[5] ? parseInt(m[5], 10) : 0) * 1000 + ( // seconds
      m[6] ? parseInt(m[6], 10) : 0) // ms
      )
    };
  }

  return null;
}

function parseObject(obj) {
  let duration = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
    (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
    (obj.seconds || obj.second || 0) * 1000 + ( // seconds
    obj.milliseconds || obj.millisecond || obj.ms || 0) // ms

  };
  let weeks = obj.weeks || obj.week;

  if (weeks) {
    duration.days += weeks * 7;
    duration.specifiedWeeks = true;
  }

  return duration;
} // Equality


function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}

function asCleanDays(dur) {
  if (!dur.years && !dur.months && !dur.milliseconds) {
    return dur.days;
  }

  return 0;
} // Simple Math


function addDurations(d0, d1) {
  return {
    years: d0.years + d1.years,
    months: d0.months + d1.months,
    days: d0.days + d1.days,
    milliseconds: d0.milliseconds + d1.milliseconds
  };
}

function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}

function multiplyDuration(d, n) {
  return {
    years: d.years * n,
    months: d.months * n,
    days: d.days * n,
    milliseconds: d.milliseconds * n
  };
} // Conversions
// "Rough" because they are based on average-case Gregorian months/years


function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}

function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}

function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}

function asRoughMinutes(dur) {
  return asRoughMs(dur) / (1000 * 60);
}

function asRoughSeconds(dur) {
  return asRoughMs(dur) / 1000;
}

function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
} // Advanced Math


function wholeDivideDurations(numerator, denominator) {
  let res = null;

  for (let i = 0; i < INTERNAL_UNITS.length; i += 1) {
    let unit = INTERNAL_UNITS[i];

    if (denominator[unit]) {
      let localRes = numerator[unit] / denominator[unit];

      if (!isInt(localRes) || res !== null && res !== localRes) {
        return null;
      }

      res = localRes;
    } else if (numerator[unit]) {
      // needs to divide by something but can't!
      return null;
    }
  }

  return res;
}

function greatestDurationDenominator(dur) {
  let ms = dur.milliseconds;

  if (ms) {
    if (ms % 1000 !== 0) {
      return {
        unit: 'millisecond',
        value: ms
      };
    }

    if (ms % (1000 * 60) !== 0) {
      return {
        unit: 'second',
        value: ms / 1000
      };
    }

    if (ms % (1000 * 60 * 60) !== 0) {
      return {
        unit: 'minute',
        value: ms / (1000 * 60)
      };
    }

    if (ms) {
      return {
        unit: 'hour',
        value: ms / (1000 * 60 * 60)
      };
    }
  }

  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return {
        unit: 'week',
        value: dur.days / 7
      };
    }

    return {
      unit: 'day',
      value: dur.days
    };
  }

  if (dur.months) {
    return {
      unit: 'month',
      value: dur.months
    };
  }

  if (dur.years) {
    return {
      unit: 'year',
      value: dur.years
    };
  }

  return {
    unit: 'millisecond',
    value: 0
  };
} // timeZoneOffset is in minutes


function buildIsoString(marker, timeZoneOffset, stripZeroTime = false) {
  let s = marker.toISOString();
  s = s.replace('.000', '');

  if (stripZeroTime) {
    s = s.replace('T00:00:00Z', '');
  }

  if (s.length > 10) {
    // time part wasn't stripped, can add timezone info
    if (timeZoneOffset == null) {
      s = s.replace('Z', '');
    } else if (timeZoneOffset !== 0) {
      s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
    } // otherwise, its UTC-0 and we want to keep the Z

  }

  return s;
} // formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"


function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, '');
} // TODO: use Date::toISOString and use everything after the T?


function formatIsoTimeString(marker) {
  return padStart(marker.getUTCHours(), 2) + ':' + padStart(marker.getUTCMinutes(), 2) + ':' + padStart(marker.getUTCSeconds(), 2);
}

function formatTimeZoneOffset(minutes, doIso = false) {
  let sign = minutes < 0 ? '-' : '+';
  let abs = Math.abs(minutes);
  let hours = Math.floor(abs / 60);
  let mins = Math.round(abs % 60);

  if (doIso) {
    return `${sign + padStart(hours, 2)}:${padStart(mins, 2)}`;
  }

  return `GMT${sign}${hours}${mins ? `:${padStart(mins, 2)}` : ''}`;
} // TODO: new util arrayify?


function removeExact(array, exactVal) {
  let removeCnt = 0;
  let i = 0;

  while (i < array.length) {
    if (array[i] === exactVal) {
      array.splice(i, 1);
      removeCnt += 1;
    } else {
      i += 1;
    }
  }

  return removeCnt;
}

function isArraysEqual(a0, a1, equalityFunc) {
  if (a0 === a1) {
    return true;
  }

  let len = a0.length;
  let i;

  if (len !== a1.length) {
    // not array? or not same length?
    return false;
  }

  for (i = 0; i < len; i += 1) {
    if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
      return false;
    }
  }

  return true;
}

function memoize(workerFunc, resEquality, teardownFunc) {
  let currentArgs;
  let currentRes;
  return function (...newArgs) {
    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }

      let res = workerFunc.apply(this, newArgs);

      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }

    currentArgs = newArgs;
    return currentRes;
  };
}

function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  let currentArg;
  let currentRes;
  return newArg => {
    if (!currentArg) {
      currentRes = workerFunc.call(this, newArg);
    } else if (!isPropsEqual(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }

      let res = workerFunc.call(this, newArg);

      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }

    currentArg = newArg;
    return currentRes;
  };
}

function memoizeArraylike( // used at all?
workerFunc, resEquality, teardownFunc) {
  let currentArgSets = [];
  let currentResults = [];
  return newArgSets => {
    let currentLen = currentArgSets.length;
    let newLen = newArgSets.length;
    let i = 0;

    for (; i < currentLen; i += 1) {
      if (!newArgSets[i]) {
        // one of the old sets no longer exists
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }
      } else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }

        let res = workerFunc.apply(this, newArgSets[i]);

        if (!resEquality || !resEquality(res, currentResults[i])) {
          currentResults[i] = res;
        }
      }
    }

    for (; i < newLen; i += 1) {
      currentResults[i] = workerFunc.apply(this, newArgSets[i]);
    }

    currentArgSets = newArgSets;
    currentResults.splice(newLen); // remove excess

    return currentResults;
  };
}

function memoizeHashlike(workerFunc, resEquality, teardownFunc) {
  let currentArgHash = {};
  let currentResHash = {};
  return newArgHash => {
    let newResHash = {};

    for (let key in newArgHash) {
      if (!currentResHash[key]) {
        newResHash[key] = workerFunc.apply(this, newArgHash[key]);
      } else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
        if (teardownFunc) {
          teardownFunc(currentResHash[key]);
        }

        let res = workerFunc.apply(this, newArgHash[key]);
        newResHash[key] = resEquality && resEquality(res, currentResHash[key]) ? currentResHash[key] : res;
      } else {
        newResHash[key] = currentResHash[key];
      }
    }

    currentArgHash = newArgHash;
    currentResHash = newResHash;
    return newResHash;
  };
}

const EXTENDED_SETTINGS_AND_SEVERITIES = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
};
const STANDARD_DATE_PROP_SEVERITIES = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
};
const MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too

const COMMA_RE = /,/g; // we need re for globalness

const MULTI_SPACE_RE = /\s+/g;
const LTR_RE = /\u200e/g; // control character

const UTC_RE = /UTC|GMT/;

class NativeFormatter {
  constructor(formatSettings) {
    let standardDateProps = {};
    let extendedSettings = {};
    let severity = 0;

    for (let name in formatSettings) {
      if (name in EXTENDED_SETTINGS_AND_SEVERITIES) {
        extendedSettings[name] = formatSettings[name];
        severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name], severity);
      } else {
        standardDateProps[name] = formatSettings[name];

        if (name in STANDARD_DATE_PROP_SEVERITIES) {
          // TODO: what about hour12? no severity
          severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name], severity);
        }
      }
    }

    this.standardDateProps = standardDateProps;
    this.extendedSettings = extendedSettings;
    this.severity = severity;
    this.buildFormattingFunc = memoize(buildFormattingFunc);
  }

  format(date, context) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
  }

  formatRange(start, end, context, betterDefaultSeparator) {
    let {
      standardDateProps,
      extendedSettings
    } = this;
    let diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);

    if (!diffSeverity) {
      return this.format(start, context);
    }

    let biggestUnitForPartial = diffSeverity;

    if (biggestUnitForPartial > 1 && ( // the two dates are different in a way that's larger scale than time
    standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') && (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') && (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
      biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
    }

    let full0 = this.format(start, context);
    let full1 = this.format(end, context);

    if (full0 === full1) {
      return full0;
    }

    let partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
    let partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
    let partial0 = partialFormattingFunc(start);
    let partial1 = partialFormattingFunc(end);
    let insertion = findCommonInsertion(full0, partial0, full1, partial1);
    let separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';

    if (insertion) {
      return insertion.before + partial0 + separator + partial1 + insertion.after;
    }

    return full0 + separator + full1;
  }

  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return 'year';

      case 4:
        return 'month';

      case 3:
        return 'week';

      case 2:
        return 'day';

      default:
        return 'time';
      // really?
    }
  }

}

function buildFormattingFunc(standardDateProps, extendedSettings, context) {
  let standardDatePropCnt = Object.keys(standardDateProps).length;

  if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
    return date => formatTimeZoneOffset(date.timeZoneOffset);
  }

  if (standardDatePropCnt === 0 && extendedSettings.week) {
    return date => formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week);
  }

  return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}

function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
  standardDateProps = Object.assign({}, standardDateProps); // copy

  extendedSettings = Object.assign({}, extendedSettings); // copy

  sanitizeSettings(standardDateProps, extendedSettings);
  standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers

  let normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
  let zeroFormat; // needed?

  if (extendedSettings.omitZeroMinute) {
    let zeroProps = Object.assign({}, standardDateProps);
    delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings

    zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
  }

  return date => {
    let {
      marker
    } = date;
    let format;

    if (zeroFormat && !marker.getUTCMinutes()) {
      format = zeroFormat;
    } else {
      format = normalFormat;
    }

    let s = format.format(marker);
    return postProcess(s, date, standardDateProps, extendedSettings, context);
  };
}

function sanitizeSettings(standardDateProps, extendedSettings) {
  // deal with a browser inconsistency where formatting the timezone
  // requires that the hour/minute be present.
  if (standardDateProps.timeZoneName) {
    if (!standardDateProps.hour) {
      standardDateProps.hour = '2-digit';
    }

    if (!standardDateProps.minute) {
      standardDateProps.minute = '2-digit';
    }
  } // only support short timezone names


  if (standardDateProps.timeZoneName === 'long') {
    standardDateProps.timeZoneName = 'short';
  } // if requesting to display seconds, MUST display minutes


  if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
    delete extendedSettings.omitZeroMinute;
  }
}

function postProcess(s, date, standardDateProps, extendedSettings, context) {
  s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes

  if (standardDateProps.timeZoneName === 'short') {
    s = injectTzoStr(s, context.timeZone === 'UTC' || date.timeZoneOffset == null ? 'UTC' : // important to normalize for IE, which does "GMT"
    formatTimeZoneOffset(date.timeZoneOffset));
  }

  if (extendedSettings.omitCommas) {
    s = s.replace(COMMA_RE, '').trim();
  }

  if (extendedSettings.omitZeroMinute) {
    s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
  } // ^ do anything that might create adjacent spaces before this point,
  // because MERIDIEM_RE likes to eat up loading spaces


  if (extendedSettings.meridiem === false) {
    s = s.replace(MERIDIEM_RE, '').trim();
  } else if (extendedSettings.meridiem === 'narrow') {
    // a/p
    s = s.replace(MERIDIEM_RE, (m0, m1) => m1.toLocaleLowerCase());
  } else if (extendedSettings.meridiem === 'short') {
    // am/pm
    s = s.replace(MERIDIEM_RE, (m0, m1) => `${m1.toLocaleLowerCase()}m`);
  } else if (extendedSettings.meridiem === 'lowercase') {
    // other meridiem transformers already converted to lowercase
    s = s.replace(MERIDIEM_RE, m0 => m0.toLocaleLowerCase());
  }

  s = s.replace(MULTI_SPACE_RE, ' ');
  s = s.trim();
  return s;
}

function injectTzoStr(s, tzoStr) {
  let replaced = false;
  s = s.replace(UTC_RE, () => {
    replaced = true;
    return tzoStr;
  }); // IE11 doesn't include UTC/GMT in the original string, so append to end

  if (!replaced) {
    s += ` ${tzoStr}`;
  }

  return s;
}

function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
  let parts = [];

  if (display === 'long') {
    parts.push(weekTextLong);
  } else if (display === 'short' || display === 'narrow') {
    parts.push(weekText);
  }

  if (display === 'long' || display === 'short') {
    parts.push(' ');
  }

  parts.push(locale.simpleNumberFormat.format(num));

  if (locale.options.direction === 'rtl') {
    // TODO: use control characters instead?
    parts.reverse();
  }

  return parts.join('');
} // Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger


function computeMarkerDiffSeverity(d0, d1, ca) {
  if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
    return 5;
  }

  if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
    return 4;
  }

  if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
    return 2;
  }

  if (timeAsMs(d0) !== timeAsMs(d1)) {
    return 1;
  }

  return 0;
}

function computePartialFormattingOptions(options, biggestUnit) {
  let partialOptions = {};

  for (let name in options) {
    if (!(name in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
    STANDARD_DATE_PROP_SEVERITIES[name] <= biggestUnit) {
      partialOptions[name] = options[name];
    }
  }

  return partialOptions;
}

function findCommonInsertion(full0, partial0, full1, partial1) {
  let i0 = 0;

  while (i0 < full0.length) {
    let found0 = full0.indexOf(partial0, i0);

    if (found0 === -1) {
      break;
    }

    let before0 = full0.substr(0, found0);
    i0 = found0 + partial0.length;
    let after0 = full0.substr(i0);
    let i1 = 0;

    while (i1 < full1.length) {
      let found1 = full1.indexOf(partial1, i1);

      if (found1 === -1) {
        break;
      }

      let before1 = full1.substr(0, found1);
      i1 = found1 + partial1.length;
      let after1 = full1.substr(i1);

      if (before0 === before1 && after0 === after1) {
        return {
          before: before0,
          after: after0
        };
      }
    }
  }

  return null;
}

function expandZonedMarker(dateInfo, calendarSystem) {
  let a = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    timeZoneOffset: dateInfo.timeZoneOffset,
    array: a,
    year: a[0],
    month: a[1],
    day: a[2],
    hour: a[3],
    minute: a[4],
    second: a[5],
    millisecond: a[6]
  };
}

function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
  let startInfo = expandZonedMarker(start, context.calendarSystem);
  let endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes,
    defaultSeparator: betterDefaultSeparator || context.defaultSeparator
  };
}
/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/

/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/


class CmdFormatter {
  constructor(cmdStr) {
    this.cmdStr = cmdStr;
  }

  format(date, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  }

  formatRange(start, end, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  }

}

class FuncFormatter {
  constructor(func) {
    this.func = func;
  }

  format(date, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  }

  formatRange(start, end, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  }

}

function createFormatter(input) {
  if (typeof input === 'object' && input) {
    // non-null object
    return new NativeFormatter(input);
  }

  if (typeof input === 'string') {
    return new CmdFormatter(input);
  }

  if (typeof input === 'function') {
    return new FuncFormatter(input);
  }

  return null;
} // base options
// ------------


const BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  bootstrapFontAwesome: identity,
  buttonIcons: identity,
  customButtons: identity,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  scrollTimeReset: Boolean,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  dayPopoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  dayHeaderClassNames: identity,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayCellClassNames: identity,
  dayCellContent: identity,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberClassNames: identity,
  weekNumberContent: identity,
  weekNumberDidMount: identity,
  weekNumberWillUnmount: identity,
  editable: Boolean,
  viewClassNames: identity,
  viewDidMount: identity,
  viewWillUnmount: identity,
  nowIndicator: Boolean,
  nowIndicatorClassNames: identity,
  nowIndicatorContent: identity,
  nowIndicatorDidMount: identity,
  nowIndicatorWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  eventOrder: parseFieldSpecs,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  stickyHeaderDates: identity,
  stickyFooterScrollbar: identity,
  viewHeight: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: identity,
  eventContent: identity,
  eventDidMount: identity,
  eventWillUnmount: identity,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: identity,
  slotLaneClassNames: identity,
  slotLaneContent: identity,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotLabelClassNames: identity,
  slotLabelContent: identity,
  slotLabelDidMount: identity,
  slotLabelWillUnmount: identity,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotLabelInterval: createDuration,
  allDayText: String,
  allDayClassNames: identity,
  allDayContent: identity,
  allDayDidMount: identity,
  allDayWillUnmount: identity,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  moreLinkText: identity,
  moreLinkHint: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: identity,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: identity,
  visibleRange: identity,
  titleFormat: identity,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: identity,
  navLinkHint: identity,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: identity,
  moreLinkClassNames: identity,
  moreLinkContent: identity,
  moreLinkDidMount: identity,
  moreLinkWillUnmount: identity
}; // do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.

const BASE_OPTION_DEFAULTS = {
  eventDisplay: 'auto',
  defaultRangeSeparator: ' - ',
  titleRangeSeparator: ' \u2013 ',
  defaultTimedEventDuration: '01:00:00',
  defaultAllDayEventDuration: {
    day: 1
  },
  forceEventDuration: false,
  nextDayThreshold: '00:00:00',
  dayHeaders: true,
  initialView: '',
  aspectRatio: 1.35,
  headerToolbar: {
    start: 'title',
    center: '',
    end: 'today prev,next'
  },
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: 'local',
  editable: false,
  nowIndicator: false,
  scrollTime: '06:00:00',
  scrollTimeReset: true,
  slotMinTime: '00:00:00',
  slotMaxTime: '24:00:00',
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: 'start',
  endParam: 'end',
  timeZoneParam: 'timeZone',
  timeZone: 'local',
  locales: [],
  locale: '',
  themeSystem: 'standard',
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: '*',
  eventOrder: 'start,-duration,allDay,title',
  dayPopoverFormat: {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  },
  handleWindowResize: true,
  windowResizeDelay: 100,
  longPressDelay: 1000,
  eventDragMinDistance: 5,
  expandRows: false,
  navLinks: false,
  selectable: false,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
}; // calendar listeners
// ------------------

const CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  windowResize: identity,
  eventClick: identity,
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  unselect: identity,
  loading: identity,
  // internal
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _resize: identity,
  _scrollRequest: identity
}; // calendar-specific options
// -------------------------

const CALENDAR_OPTION_REFINERS = {
  buttonText: identity,
  buttonHints: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
const COMPLEX_OPTION_COMPARATORS = {
  headerToolbar: isMaybeObjectsEqual,
  footerToolbar: isMaybeObjectsEqual,
  buttonText: isMaybeObjectsEqual,
  buttonHints: isMaybeObjectsEqual,
  buttonIcons: isMaybeObjectsEqual,
  dateIncrement: isMaybeObjectsEqual
};

function isMaybeObjectsEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object' && a && b) {
    // both non-null objects
    return isPropsEqual(a, b);
  }

  return a === b;
} // view-specific options
// ---------------------


const VIEW_OPTION_REFINERS = {
  type: String,
  component: identity,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  classNames: identity,
  content: identity,
  didMount: identity,
  willUnmount: identity
}; // util funcs
// ----------------------------------------------------------------------------------------------------

function mergeRawOptions(optionSets) {
  return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}

function refineProps(input, refiners) {
  let refined = {};
  let extra = {};

  for (let propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName]);
    }
  }

  for (let propName in input) {
    if (!(propName in refiners)) {
      extra[propName] = input[propName];
    }
  }

  return {
    refined,
    extra
  };
}

function identity(raw) {
  return raw;
}

function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
  let eventStore = createEmptyEventStore();
  let eventRefiners = buildEventRefiners(context);

  for (let rawEvent of rawEvents) {
    let tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);

    if (tuple) {
      eventTupleToStore(tuple, eventStore);
    }
  }

  return eventStore;
}

function eventTupleToStore(tuple, eventStore = createEmptyEventStore()) {
  eventStore.defs[tuple.def.defId] = tuple.def;

  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }

  return eventStore;
} // retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?


function getRelevantEvents(eventStore, instanceId) {
  let instance = eventStore.instances[instanceId];

  if (instance) {
    let def = eventStore.defs[instance.defId]; // get events/instances with same group

    let newStore = filterEventStoreDefs(eventStore, lookDef => isEventDefsGrouped(def, lookDef)); // add the original
    // TODO: wish we could use eventTupleToStore or something like it

    newStore.defs[def.defId] = def;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }

  return createEmptyEventStore();
}

function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}

function createEmptyEventStore() {
  return {
    defs: {},
    instances: {}
  };
}

function mergeEventStores(store0, store1) {
  return {
    defs: Object.assign(Object.assign({}, store0.defs), store1.defs),
    instances: Object.assign(Object.assign({}, store0.instances), store1.instances)
  };
}

function filterEventStoreDefs(eventStore, filterFunc) {
  let defs = filterHash(eventStore.defs, filterFunc);
  let instances = filterHash(eventStore.instances, instance => defs[instance.defId] // still exists?
  );
  return {
    defs,
    instances
  };
}

function excludeSubEventStore(master, sub) {
  let {
    defs,
    instances
  } = master;
  let filteredDefs = {};
  let filteredInstances = {};

  for (let defId in defs) {
    if (!sub.defs[defId]) {
      // not explicitly excluded
      filteredDefs[defId] = defs[defId];
    }
  }

  for (let instanceId in instances) {
    if (!sub.instances[instanceId] && // not explicitly excluded
    filteredDefs[instances[instanceId].defId] // def wasn't filtered away
    ) {
      filteredInstances[instanceId] = instances[instanceId];
    }
  }

  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}

function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true); // allowOpenRange=true
  }

  if (typeof input === 'object' && input) {
    // non-null object
    return parseEvents([input], null, context, true); // allowOpenRange=true
  }

  if (input != null) {
    return String(input);
  }

  return null;
}

function parseClassNames(raw) {
  if (Array.isArray(raw)) {
    return raw;
  }

  if (typeof raw === 'string') {
    return raw.split(/\s+/);
  }

  return [];
} // TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props


const EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  overlap: identity,
  allow: identity,
  className: parseClassNames,
  classNames: parseClassNames,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
};
const EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: '',
  borderColor: '',
  textColor: '',
  classNames: []
};

function createEventUi(refined, context) {
  let constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    backgroundColor: refined.backgroundColor || refined.color || '',
    borderColor: refined.borderColor || refined.color || '',
    textColor: refined.textColor || '',
    classNames: (refined.className || []).concat(refined.classNames || []) // join singular and plural

  };
} // TODO: prevent against problems with <2 args!


function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}

function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    backgroundColor: item1.backgroundColor || item0.backgroundColor,
    borderColor: item1.borderColor || item0.borderColor,
    textColor: item1.textColor || item0.textColor,
    classNames: item0.classNames.concat(item1.classNames)
  };
}

const EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
};
const EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};
const EVENT_REFINERS = Object.assign(Object.assign(Object.assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), {
  extendedProps: identity
});

function parseEvent(raw, eventSource, context, allowOpenRange, refiners = buildEventRefiners(context)) {
  let {
    refined,
    extra
  } = refineEventDef(raw, context, refiners);
  let defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  let recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);

  if (recurringRes) {
    let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return {
      def,
      instance: null
    };
  }

  let singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);

  if (singleRes) {
    let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context);
    let instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
    return {
      def,
      instance
    };
  }

  return null;
}

function refineEventDef(raw, context, refiners = buildEventRefiners(context)) {
  return refineProps(raw, refiners);
}

function buildEventRefiners(context) {
  return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/


function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
  let def = {
    title: refined.title || '',
    groupId: refined.groupId || '',
    publicId: refined.id || '',
    url: refined.url || '',
    recurringDef: null,
    defId: guid(),
    sourceId,
    allDay,
    hasEnd,
    interactive: refined.interactive,
    ui: createEventUi(refined, context),
    extendedProps: Object.assign(Object.assign({}, refined.extendedProps || {}), extra)
  };

  for (let memberAdder of context.pluginHooks.eventDefMemberAdders) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(def, memberAdder(refined));
  } // help out EventApi from having user modify props


  Object.freeze(def.ui.classNames);
  Object.freeze(def.extendedProps);
  return def;
}

function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  let {
    allDay
  } = refined;
  let startMeta;
  let startMarker = null;
  let hasEnd = false;
  let endMeta;
  let endMarker = null;
  let startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);

  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }

  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }

  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      // fall back to the date props LAST
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }

  if (allDay && startMarker) {
    startMarker = startOfDay(startMarker);
  }

  if (endMeta) {
    endMarker = endMeta.marker;

    if (allDay) {
      endMarker = startOfDay(endMarker);
    }

    if (startMarker && endMarker <= startMarker) {
      endMarker = null;
    }
  }

  if (endMarker) {
    hasEnd = true;
  } else if (!allowOpenRange) {
    hasEnd = context.options.forceEventDuration || false;
    endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
  }

  return {
    allDay,
    hasEnd,
    range: {
      start: startMarker,
      end: endMarker
    },
    forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
    forcedEndTzo: endMeta ? endMeta.forcedTzo : null
  };
}

function computeIsDefaultAllDay(eventSource, context) {
  let res = null;

  if (eventSource) {
    res = eventSource.defaultAllDay;
  }

  if (res == null) {
    res = context.options.defaultAllDay;
  }

  return res;
}
/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.


function computeAlignedDayRange(timedRange) {
  let dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
  let start = startOfDay(timedRange.start);
  let end = addDays(start, dayCnt);
  return {
    start,
    end
  };
} // given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg


function computeVisibleDayRange(timedRange, nextDayThreshold = createDuration(0)) {
  let startDay = null;
  let endDay = null;

  if (timedRange.end) {
    endDay = startOfDay(timedRange.end);
    let endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
    // If the end time is actually inclusively part of the next day and is equal to or
    // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
    // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.

    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays(endDay, 1);
    }
  }

  if (timedRange.start) {
    startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
    // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.

    if (endDay && endDay <= startDay) {
      endDay = addDays(startDay, 1);
    }
  }

  return {
    start: startDay,
    end: endDay
  };
} // spans from one day into another?


function isMultiDayRange(range) {
  let visibleRange = computeVisibleDayRange(range);
  return diffDays(visibleRange.start, visibleRange.end) > 1;
}

function diffDates(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === 'year') {
    return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
  }

  if (largeUnit === 'month') {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
  }

  return diffDayAndTime(date0, date1); // returns a duration
}

function parseRange(input, dateEnv) {
  let start = null;
  let end = null;

  if (input.start) {
    start = dateEnv.createMarker(input.start);
  }

  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }

  if (!start && !end) {
    return null;
  }

  if (start && end && end < start) {
    return null;
  }

  return {
    start,
    end
  };
} // SIDE-EFFECT: will mutate ranges.
// Will return a new array result.


function invertRanges(ranges, constraintRange) {
  let invertedRanges = [];
  let {
    start
  } = constraintRange; // the end of the previous range. the start of the new range

  let i;
  let dateRange; // ranges need to be in order. required for our date-walking algorithm

  ranges.sort(compareRanges);

  for (i = 0; i < ranges.length; i += 1) {
    dateRange = ranges[i]; // add the span of time before the event (if there is any)

    if (dateRange.start > start) {
      // compare millisecond time (skip any ambig logic)
      invertedRanges.push({
        start,
        end: dateRange.start
      });
    }

    if (dateRange.end > start) {
      start = dateRange.end;
    }
  } // add the span of time after the last event (if there is any)


  if (start < constraintRange.end) {
    // compare millisecond time (skip any ambig logic)
    invertedRanges.push({
      start,
      end: constraintRange.end
    });
  }

  return invertedRanges;
}

function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}

function intersectRanges(range0, range1) {
  let {
    start,
    end
  } = range0;
  let newRange = null;

  if (range1.start !== null) {
    if (start === null) {
      start = range1.start;
    } else {
      start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
  }

  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }

  if (start === null || end === null || start < end) {
    newRange = {
      start,
      end
    };
  }

  return newRange;
}

function rangesEqual(range0, range1) {
  return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}

function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}

function rangeContainsRange(outerRange, innerRange) {
  return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
}

function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
} // If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).


function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }

  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }

  return date;
}
/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/


function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  let inverseBgByGroupId = {};
  let inverseBgByDefId = {};
  let defByGroupId = {};
  let bgRanges = [];
  let fgRanges = [];
  let eventUis = compileEventUis(eventStore.defs, eventUiBases);

  for (let defId in eventStore.defs) {
    let def = eventStore.defs[defId];
    let ui = eventUis[def.defId];

    if (ui.display === 'inverse-background') {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];

        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }

  for (let instanceId in eventStore.instances) {
    let instance = eventStore.instances[instanceId];
    let def = eventStore.defs[instance.defId];
    let ui = eventUis[def.defId];
    let origRange = instance.range;
    let normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    let slicedRange = intersectRanges(normalRange, framingRange);

    if (slicedRange) {
      if (ui.display === 'inverse-background') {
        if (def.groupId) {
          inverseBgByGroupId[def.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (ui.display !== 'none') {
        (ui.display === 'background' ? bgRanges : fgRanges).push({
          def,
          ui,
          instance,
          range: slicedRange,
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }

  for (let groupId in inverseBgByGroupId) {
    // BY GROUP
    let ranges = inverseBgByGroupId[groupId];
    let invertedRanges = invertRanges(ranges, framingRange);

    for (let invertedRange of invertedRanges) {
      let def = defByGroupId[groupId];
      let ui = eventUis[def.defId];
      bgRanges.push({
        def,
        ui,
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }

  for (let defId in inverseBgByDefId) {
    let ranges = inverseBgByDefId[defId];
    let invertedRanges = invertRanges(ranges, framingRange);

    for (let invertedRange of invertedRanges) {
      bgRanges.push({
        def: eventStore.defs[defId],
        ui: eventUis[defId],
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }

  return {
    bg: bgRanges,
    fg: fgRanges
  };
}

function hasBgRendering(def) {
  return def.ui.display === 'background' || def.ui.display === 'inverse-background';
}

function setElSeg(el, seg) {
  el.fcSeg = seg;
}

function getElSeg(el) {
  return el.fcSeg || el.parentNode.fcSeg || // for the harness
  null;
} // event ui computation


function compileEventUis(eventDefs, eventUiBases) {
  return mapHash(eventDefs, eventDef => compileEventUi(eventDef, eventUiBases));
}

function compileEventUi(eventDef, eventUiBases) {
  let uis = [];

  if (eventUiBases['']) {
    uis.push(eventUiBases['']);
  }

  if (eventUiBases[eventDef.defId]) {
    uis.push(eventUiBases[eventDef.defId]);
  }

  uis.push(eventDef.ui);
  return combineEventUis(uis);
}

function sortEventSegs(segs, eventOrderSpecs) {
  let objs = segs.map(buildSegCompareObj);
  objs.sort((obj0, obj1) => compareByFieldSpecs(obj0, obj1, eventOrderSpecs));
  return objs.map(c => c._seg);
} // returns a object with all primitive props that can be compared


function buildSegCompareObj(seg) {
  let {
    eventRange
  } = seg;
  let eventDef = eventRange.def;
  let range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  let start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events

  let end = range.end ? range.end.valueOf() : 0; // "

  return Object.assign(Object.assign(Object.assign({}, eventDef.extendedProps), eventDef), {
    id: eventDef.publicId,
    start,
    end,
    duration: end - start,
    allDay: Number(eventDef.allDay),
    _seg: seg
  });
}

function computeSegDraggable(seg, context) {
  let {
    pluginHooks
  } = context;
  let transformers = pluginHooks.isDraggableTransformers;
  let {
    def,
    ui
  } = seg.eventRange;
  let val = ui.startEditable;

  for (let transformer of transformers) {
    val = transformer(val, def, ui, context);
  }

  return val;
}

function computeSegStartResizable(seg, context) {
  return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}

function computeSegEndResizable(seg, context) {
  return seg.isEnd && seg.eventRange.ui.durationEditable;
}

function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, // defaults to true
defaultDisplayEventEnd, // defaults to true
startOverride, endOverride) {
  let {
    dateEnv,
    options
  } = context;
  let {
    displayEventTime,
    displayEventEnd
  } = options;
  let eventDef = seg.eventRange.def;
  let eventInstance = seg.eventRange.instance;

  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }

  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }

  let wholeEventStart = eventInstance.range.start;
  let wholeEventEnd = eventInstance.range.end;
  let segStart = startOverride || seg.start || seg.eventRange.range.start;
  let segEnd = endOverride || seg.end || seg.eventRange.range.end;
  let isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
  let isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();

  if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
    segStart = isStartDay ? wholeEventStart : segStart;
    segEnd = isEndDay ? wholeEventEnd : segEnd;

    if (displayEventEnd && eventDef.hasEnd) {
      return dateEnv.formatRange(segStart, segEnd, timeFormat, {
        forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
        forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
      });
    }

    return dateEnv.format(segStart, timeFormat, {
      forcedTzo: startOverride ? null : eventInstance.forcedStartTzo // nooooo, same

    });
  }

  return '';
}

function getSegMeta(seg, todayRange, nowDate) {
  let segRange = seg.eventRange.range;
  return {
    isPast: segRange.end < (nowDate || todayRange.start),
    isFuture: segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}

function getEventClassNames(props) {
  let classNames = ['fc-event'];

  if (props.isMirror) {
    classNames.push('fc-event-mirror');
  }

  if (props.isDraggable) {
    classNames.push('fc-event-draggable');
  }

  if (props.isStartResizable || props.isEndResizable) {
    classNames.push('fc-event-resizable');
  }

  if (props.isDragging) {
    classNames.push('fc-event-dragging');
  }

  if (props.isResizing) {
    classNames.push('fc-event-resizing');
  }

  if (props.isSelected) {
    classNames.push('fc-event-selected');
  }

  if (props.isStart) {
    classNames.push('fc-event-start');
  }

  if (props.isEnd) {
    classNames.push('fc-event-end');
  }

  if (props.isPast) {
    classNames.push('fc-event-past');
  }

  if (props.isToday) {
    classNames.push('fc-event-today');
  }

  if (props.isFuture) {
    classNames.push('fc-event-future');
  }

  return classNames;
}

function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : `${eventRange.def.defId}:${eventRange.range.start.toISOString()}`; // inverse-background events don't have specific instances. TODO: better solution
}

function getSegAnchorAttrs(seg, context) {
  let {
    def,
    instance
  } = seg.eventRange;
  let {
    url
  } = def;

  if (url) {
    return {
      href: url
    };
  }

  let {
    emitter,
    options
  } = context;
  let {
    eventInteractive
  } = options;

  if (eventInteractive == null) {
    eventInteractive = def.interactive;

    if (eventInteractive == null) {
      eventInteractive = Boolean(emitter.hasHandlers('eventClick'));
    }
  } // mock what happens in EventClicking


  if (eventInteractive) {
    // only attach keyboard-related handlers because click handler is already done in EventClicking
    return createAriaKeyboardAttrs(ev => {
      emitter.trigger('eventClick', {
        el: ev.target,
        event: new EventApi(context, def, instance),
        jsEvent: ev,
        view: context.viewApi
      });
    });
  }

  return {};
}

const STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};

function parseDateSpan(raw, dateEnv, defaultDuration) {
  let span = parseOpenDateSpan(raw, dateEnv);
  let {
    range
  } = span;

  if (!range.start) {
    return null;
  }

  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    }

    range.end = dateEnv.add(range.start, defaultDuration);
  }

  return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/


function parseOpenDateSpan(raw, dateEnv) {
  let {
    refined: standardProps,
    extra
  } = refineProps(raw, STANDARD_PROPS);
  let startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  let endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  let {
    allDay
  } = standardProps;

  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }

  return Object.assign({
    range: {
      start: startMeta ? startMeta.marker : null,
      end: endMeta ? endMeta.marker : null
    },
    allDay
  }, extra);
}

function isDateSpansEqual(span0, span1) {
  return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
} // the NON-DATE-RELATED props


function isSpanPropsEqual(span0, span1) {
  for (let propName in span1) {
    if (propName !== 'range' && propName !== 'allDay') {
      if (span0[propName] !== span1[propName]) {
        return false;
      }
    }
  } // are there any props that span0 has that span1 DOESN'T have?
  // both have range/allDay, so no need to special-case.


  for (let propName in span0) {
    if (!(propName in span1)) {
      return false;
    }
  }

  return true;
}

function buildDateSpanApi(span, dateEnv) {
  return Object.assign(Object.assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), {
    allDay: span.allDay
  });
}

function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return Object.assign(Object.assign({}, buildRangeApi(range, dateEnv, omitTime)), {
    timeZone: dateEnv.timeZone
  });
}

function buildRangeApi(range, dateEnv, omitTime) {
  return {
    start: dateEnv.toDate(range.start),
    end: dateEnv.toDate(range.end),
    startStr: dateEnv.formatIso(range.start, {
      omitTime
    }),
    endStr: dateEnv.formatIso(range.end, {
      omitTime
    })
  };
}

function fabricateEventRange(dateSpan, eventUiBases, context) {
  let res = refineEventDef({
    editable: false
  }, context);
  let def = parseEventDef(res.refined, res.extra, '', // sourceId
  dateSpan.allDay, true, // hasEnd
  context);
  return {
    def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}

function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger('select', Object.assign(Object.assign({}, buildDateSpanApiWithContext(selection, context)), {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  }));
}

function triggerDateUnselect(pev, context) {
  context.emitter.trigger('unselect', {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  });
}

function buildDateSpanApiWithContext(dateSpan, context) {
  let props = {};

  for (let transform of context.pluginHooks.dateSpanTransforms) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, transform(dateSpan, context));
  }

  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, buildDateSpanApi(dateSpan, context.dateEnv));

  return props;
} // Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd


function getDefaultEventEnd(allDay, marker, context) {
  let {
    dateEnv,
    options
  } = context;
  let end = marker;

  if (allDay) {
    end = startOfDay(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }

  return end;
} // applies the mutation to ALL defs/instances within the event store


function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  let eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  let dest = createEmptyEventStore();

  for (let defId in eventStore.defs) {
    let def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }

  for (let instanceId in eventStore.instances) {
    let instance = eventStore.instances[instanceId];
    let def = dest.defs[instance.defId]; // important to grab the newly modified def

    dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
  }

  return dest;
}

function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  let standardProps = mutation.standardProps || {}; // if hasEnd has not been specified, guess a good value based on deltas.
  // if duration will change, there's no way the default duration will persist,
  // and thus, we need to mark the event as having a real end

  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true; // TODO: is this mutation okay?
  }

  let copy = Object.assign(Object.assign(Object.assign({}, eventDef), standardProps), {
    ui: Object.assign(Object.assign({}, eventDef.ui), standardProps.ui)
  });

  if (mutation.extendedProps) {
    copy.extendedProps = Object.assign(Object.assign({}, copy.extendedProps), mutation.extendedProps);
  }

  for (let applier of context.pluginHooks.eventDefMutationAppliers) {
    applier(copy, mutation, context);
  }

  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }

  return copy;
}

function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
eventConfig, mutation, context) {
  let {
    dateEnv
  } = context;
  let forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  let clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
  let copy = Object.assign({}, eventInstance);

  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }

  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.datesDelta),
      end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
  }

  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.startDelta),
      end: copy.range.end
    };
  }

  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = {
      start: copy.range.start,
      end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
  }

  if (clearEnd) {
    copy.range = {
      start: copy.range.start,
      end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
  } // in case event was all-day but the supplied deltas were not
  // better util for this?


  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay(copy.range.start),
      end: startOfDay(copy.range.end)
    };
  } // handle invalid durations


  if (copy.range.end < copy.range.start) {
    copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
  }

  return copy;
} // no public types yet. when there are, export from:
// import {} from './api-type-deps'


class ViewApi {
  constructor(type, getCurrentData, dateEnv) {
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }

  get calendar() {
    return this.getCurrentData().calendarApi;
  }

  get title() {
    return this.getCurrentData().viewTitle;
  }

  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }

  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }

  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }

  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }

  getOption(name) {
    return this.getCurrentData().options[name]; // are the view-specific options
  }

}

const EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: identity,
  eventDataTransform: identity,
  // for any network-related sources
  success: identity,
  failure: identity
};

function parseEventSource(raw, context, refiners = buildEventSourceRefiners(context)) {
  let rawObj;

  if (typeof raw === 'string') {
    rawObj = {
      url: raw
    };
  } else if (typeof raw === 'function' || Array.isArray(raw)) {
    rawObj = {
      events: raw
    };
  } else if (typeof raw === 'object' && raw) {
    // not null
    rawObj = raw;
  }

  if (rawObj) {
    let {
      refined,
      extra
    } = refineProps(rawObj, refiners);
    let metaRes = buildEventSourceMeta(refined, context);

    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: '',
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || '',
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }

  return null;
}

function buildEventSourceRefiners(context) {
  return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}

function buildEventSourceMeta(raw, context) {
  let defs = context.pluginHooks.eventSourceDefs;

  for (let i = defs.length - 1; i >= 0; i -= 1) {
    // later-added plugins take precedence
    let def = defs[i];
    let meta = def.parseMeta(raw);

    if (meta) {
      return {
        sourceDefId: i,
        meta
      };
    }
  }

  return null;
}

function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return action.dateMarker;

    default:
      return currentDate;
  }
}

function getInitialDate(options, dateEnv) {
  let initialDateInput = options.initialDate; // compute the initial ambig-timezone date

  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  }

  return getNow(options.now, dateEnv); // getNow already returns unzoned
}

function getNow(nowInput, dateEnv) {
  if (typeof nowInput === 'function') {
    nowInput = nowInput();
  }

  if (nowInput == null) {
    return dateEnv.createNowMarker();
  }

  return dateEnv.createMarker(nowInput);
}

class CalendarApi {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }

  dispatch(action) {
    return this.currentDataManager.dispatch(action);
  }

  get view() {
    return this.getCurrentData().viewApi;
  } // for public API


  batchRendering(callback) {
    callback();
  }

  updateSize() {
    this.trigger('_resize', true);
  } // Options
  // -----------------------------------------------------------------------------------------------------------------


  setOption(name, val) {
    this.dispatch({
      type: 'SET_OPTION',
      optionName: name,
      rawOptionValue: val
    });
  }

  getOption(name) {
    return this.currentDataManager.currentCalendarOptionsInput[name];
  }

  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  } // Trigger
  // -----------------------------------------------------------------------------------------------------------------


  on(handlerName, handler) {
    let {
      currentDataManager
    } = this;

    if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
      currentDataManager.emitter.on(handlerName, handler);
    } else {
      console.warn(`Unknown listener name '${handlerName}'`);
    }
  }

  off(handlerName, handler) {
    this.currentDataManager.emitter.off(handlerName, handler);
  } // not meant for public use


  trigger(handlerName, ...args) {
    this.currentDataManager.emitter.trigger(handlerName, ...args);
  } // View
  // -----------------------------------------------------------------------------------------------------------------


  changeView(viewType, dateOrRange) {
    this.batchRendering(() => {
      this.unselect();

      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          // a range
          this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType
          });
          this.dispatch({
            type: 'SET_OPTION',
            optionName: 'visibleRange',
            rawOptionValue: dateOrRange
          });
        } else {
          let {
            dateEnv
          } = this.getCurrentData();
          this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType,
            dateMarker: dateEnv.createMarker(dateOrRange)
          });
        }
      } else {
        this.dispatch({
          type: 'CHANGE_VIEW_TYPE',
          viewType
        });
      }
    });
  } // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change


  zoomTo(dateMarker, viewType) {
    let state = this.getCurrentData();
    let spec;
    viewType = viewType || 'day'; // day is default zoom

    spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
    this.unselect();

    if (spec) {
      this.dispatch({
        type: 'CHANGE_VIEW_TYPE',
        viewType: spec.type,
        dateMarker
      });
    } else {
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker
      });
    }
  } // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.


  getUnitViewSpec(unit) {
    let {
      viewSpecs,
      toolbarConfig
    } = this.getCurrentData();
    let viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
    let i;
    let spec;

    for (let viewType in viewSpecs) {
      viewTypes.push(viewType);
    }

    for (i = 0; i < viewTypes.length; i += 1) {
      spec = viewSpecs[viewTypes[i]];

      if (spec) {
        if (spec.singleUnit === unit) {
          return spec;
        }
      }
    }

    return null;
  } // Current Date
  // -----------------------------------------------------------------------------------------------------------------


  prev() {
    this.unselect();
    this.dispatch({
      type: 'PREV'
    });
  }

  next() {
    this.unselect();
    this.dispatch({
      type: 'NEXT'
    });
  }

  prevYear() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, -1)
    });
  }

  nextYear() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, 1)
    });
  }

  today() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: getNow(state.calendarOptions.now, state.dateEnv)
    });
  }

  gotoDate(zonedDateInput) {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.createMarker(zonedDateInput)
    });
  }

  incrementDate(deltaInput) {
    let state = this.getCurrentData();
    let delta = createDuration(deltaInput);

    if (delta) {
      // else, warn about invalid input?
      this.unselect();
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: state.dateEnv.add(state.currentDate, delta)
      });
    }
  } // for external API


  getDate() {
    let state = this.getCurrentData();
    return state.dateEnv.toDate(state.currentDate);
  } // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------


  formatDate(d, formatter) {
    let {
      dateEnv
    } = this.getCurrentData();
    return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
  } // `settings` is for formatter AND isEndExclusive


  formatRange(d0, d1, settings) {
    let {
      dateEnv
    } = this.getCurrentData();
    return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
  }

  formatIso(d, omitTime) {
    let {
      dateEnv
    } = this.getCurrentData();
    return dateEnv.formatIso(dateEnv.createMarker(d), {
      omitTime
    });
  } // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  // this public method receives start/end dates in any format, with any timezone
  // NOTE: args were changed from v3


  select(dateOrObj, endDate) {
    let selectionInput;

    if (endDate == null) {
      if (dateOrObj.start != null) {
        selectionInput = dateOrObj;
      } else {
        selectionInput = {
          start: dateOrObj,
          end: null
        };
      }
    } else {
      selectionInput = {
        start: dateOrObj,
        end: endDate
      };
    }

    let state = this.getCurrentData();
    let selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({
      days: 1
    }));

    if (selection) {
      // throw parse error otherwise?
      this.dispatch({
        type: 'SELECT_DATES',
        selection
      });
      triggerDateSelect(selection, null, state);
    }
  } // public method


  unselect(pev) {
    let state = this.getCurrentData();

    if (state.dateSelection) {
      this.dispatch({
        type: 'UNSELECT_DATES'
      });
      triggerDateUnselect(pev, state);
    }
  } // Public Events API
  // -----------------------------------------------------------------------------------------------------------------


  addEvent(eventInput, sourceInput) {
    if (eventInput instanceof EventApi) {
      let def = eventInput._def;
      let instance = eventInput._instance;
      let currentData = this.getCurrentData(); // not already present? don't want to add an old snapshot

      if (!currentData.eventStore.defs[def.defId]) {
        this.dispatch({
          type: 'ADD_EVENTS',
          eventStore: eventTupleToStore({
            def,
            instance
          }) // TODO: better util for two args?

        });
        this.triggerEventAdd(eventInput);
      }

      return eventInput;
    }

    let state = this.getCurrentData();
    let eventSource;

    if (sourceInput instanceof EventSourceApi) {
      eventSource = sourceInput.internalEventSource;
    } else if (typeof sourceInput === 'boolean') {
      if (sourceInput) {
        // true. part of the first event source
        [eventSource] = hashValuesToArray(state.eventSources);
      }
    } else if (sourceInput != null) {
      // an ID. accepts a number too
      let sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function

      if (!sourceApi) {
        console.warn(`Could not find an event source with ID "${sourceInput}"`); // TODO: test

        return null;
      }

      eventSource = sourceApi.internalEventSource;
    }

    let tuple = parseEvent(eventInput, eventSource, state, false);

    if (tuple) {
      let newEventApi = new EventApi(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
      this.dispatch({
        type: 'ADD_EVENTS',
        eventStore: eventTupleToStore(tuple)
      });
      this.triggerEventAdd(newEventApi);
      return newEventApi;
    }

    return null;
  }

  triggerEventAdd(eventApi) {
    let {
      emitter
    } = this.getCurrentData();
    emitter.trigger('eventAdd', {
      event: eventApi,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: 'REMOVE_EVENTS',
          eventStore: eventApiToStore(eventApi)
        });
      }
    });
  } // TODO: optimize


  getEventById(id) {
    let state = this.getCurrentData();
    let {
      defs,
      instances
    } = state.eventStore;
    id = String(id);

    for (let defId in defs) {
      let def = defs[defId];

      if (def.publicId === id) {
        if (def.recurringDef) {
          return new EventApi(state, def, null);
        }

        for (let instanceId in instances) {
          let instance = instances[instanceId];

          if (instance.defId === def.defId) {
            return new EventApi(state, def, instance);
          }
        }
      }
    }

    return null;
  }

  getEvents() {
    let currentData = this.getCurrentData();
    return buildEventApis(currentData.eventStore, currentData);
  }

  removeAllEvents() {
    this.dispatch({
      type: 'REMOVE_ALL_EVENTS'
    });
  } // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------


  getEventSources() {
    let state = this.getCurrentData();
    let sourceHash = state.eventSources;
    let sourceApis = [];

    for (let internalId in sourceHash) {
      sourceApis.push(new EventSourceApi(state, sourceHash[internalId]));
    }

    return sourceApis;
  }

  getEventSourceById(id) {
    let state = this.getCurrentData();
    let sourceHash = state.eventSources;
    id = String(id);

    for (let sourceId in sourceHash) {
      if (sourceHash[sourceId].publicId === id) {
        return new EventSourceApi(state, sourceHash[sourceId]);
      }
    }

    return null;
  }

  addEventSource(sourceInput) {
    let state = this.getCurrentData();

    if (sourceInput instanceof EventSourceApi) {
      // not already present? don't want to add an old snapshot
      if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
        this.dispatch({
          type: 'ADD_EVENT_SOURCES',
          sources: [sourceInput.internalEventSource]
        });
      }

      return sourceInput;
    }

    let eventSource = parseEventSource(sourceInput, state);

    if (eventSource) {
      // TODO: error otherwise?
      this.dispatch({
        type: 'ADD_EVENT_SOURCES',
        sources: [eventSource]
      });
      return new EventSourceApi(state, eventSource);
    }

    return null;
  }

  removeAllEventSources() {
    this.dispatch({
      type: 'REMOVE_ALL_EVENT_SOURCES'
    });
  }

  refetchEvents() {
    this.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      isRefetch: true
    });
  } // Scroll
  // -----------------------------------------------------------------------------------------------------------------


  scrollToTime(timeInput) {
    let time = createDuration(timeInput);

    if (time) {
      this.trigger('_scrollRequest', {
        time
      });
    }
  }

}

class EventApi {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(context, def, instance) {
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  /*
  TODO: make event struct more responsible for this
  */


  setProp(name, val) {
    if (name in EVENT_DATE_REFINERS) {
      console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.'); // TODO: make proper aliasing system?
    } else if (name === 'id') {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: {
          publicId: val
        } // hardcoded internal name

      });
    } else if (name in EVENT_NON_DATE_REFINERS) {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: {
          [name]: val
        }
      });
    } else if (name in EVENT_UI_REFINERS) {
      let ui = EVENT_UI_REFINERS[name](val);

      if (name === 'color') {
        ui = {
          backgroundColor: val,
          borderColor: val
        };
      } else if (name === 'editable') {
        ui = {
          startEditable: val,
          durationEditable: val
        };
      } else {
        ui = {
          [name]: val
        };
      }

      this.mutate({
        standardProps: {
          ui
        }
      });
    } else {
      console.warn(`Could not set prop '${name}'. Use setExtendedProp instead.`);
    }
  }

  setExtendedProp(name, val) {
    this.mutate({
      extendedProps: {
        [name]: val
      }
    });
  }

  setStart(startInput, options = {}) {
    let {
      dateEnv
    } = this._context;
    let start = dateEnv.createMarker(startInput);

    if (start && this._instance) {
      // TODO: warning if parsed bad
      let instanceRange = this._instance.range;
      let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?

      if (options.maintainDuration) {
        this.mutate({
          datesDelta: startDelta
        });
      } else {
        this.mutate({
          startDelta
        });
      }
    }
  }

  setEnd(endInput, options = {}) {
    let {
      dateEnv
    } = this._context;
    let end;

    if (endInput != null) {
      end = dateEnv.createMarker(endInput);

      if (!end) {
        return; // TODO: warning if parsed bad
      }
    }

    if (this._instance) {
      if (end) {
        let endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
        this.mutate({
          endDelta
        });
      } else {
        this.mutate({
          standardProps: {
            hasEnd: false
          }
        });
      }
    }
  }

  setDates(startInput, endInput, options = {}) {
    let {
      dateEnv
    } = this._context;
    let standardProps = {
      allDay: options.allDay
    };
    let start = dateEnv.createMarker(startInput);
    let end;

    if (!start) {
      return; // TODO: warning if parsed bad
    }

    if (endInput != null) {
      end = dateEnv.createMarker(endInput);

      if (!end) {
        // TODO: warning if parsed bad
        return;
      }
    }

    if (this._instance) {
      let instanceRange = this._instance.range; // when computing the diff for an event being converted to all-day,
      // compute diff off of the all-day values the way event-mutation does.

      if (options.allDay === true) {
        instanceRange = computeAlignedDayRange(instanceRange);
      }

      let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);

      if (end) {
        let endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);

        if (durationsEqual(startDelta, endDelta)) {
          this.mutate({
            datesDelta: startDelta,
            standardProps
          });
        } else {
          this.mutate({
            startDelta,
            endDelta,
            standardProps
          });
        }
      } else {
        // means "clear the end"
        standardProps.hasEnd = false;
        this.mutate({
          datesDelta: startDelta,
          standardProps
        });
      }
    }
  }

  moveStart(deltaInput) {
    let delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        startDelta: delta
      });
    }
  }

  moveEnd(deltaInput) {
    let delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        endDelta: delta
      });
    }
  }

  moveDates(deltaInput) {
    let delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        datesDelta: delta
      });
    }
  }

  setAllDay(allDay, options = {}) {
    let standardProps = {
      allDay
    };
    let {
      maintainDuration
    } = options;

    if (maintainDuration == null) {
      maintainDuration = this._context.options.allDayMaintainDuration;
    }

    if (this._def.allDay !== allDay) {
      standardProps.hasEnd = maintainDuration;
    }

    this.mutate({
      standardProps
    });
  }

  formatRange(formatInput) {
    let {
      dateEnv
    } = this._context;
    let instance = this._instance;
    let formatter = createFormatter(formatInput);

    if (this._def.hasEnd) {
      return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
        forcedStartTzo: instance.forcedStartTzo,
        forcedEndTzo: instance.forcedEndTzo
      });
    }

    return dateEnv.format(instance.range.start, formatter, {
      forcedTzo: instance.forcedStartTzo
    });
  }

  mutate(mutation) {
    let instance = this._instance;

    if (instance) {
      let def = this._def;
      let context = this._context;
      let {
        eventStore
      } = context.getCurrentData();
      let relevantEvents = getRelevantEvents(eventStore, instance.instanceId);
      let eventConfigBase = {
        '': {
          display: '',
          startEditable: true,
          durationEditable: true,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: '',
          borderColor: '',
          textColor: '',
          classNames: []
        }
      };
      relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context);
      let oldEvent = new EventApi(context, def, instance); // snapshot

      this._def = relevantEvents.defs[def.defId];
      this._instance = relevantEvents.instances[instance.instanceId];
      context.dispatch({
        type: 'MERGE_EVENTS',
        eventStore: relevantEvents
      });
      context.emitter.trigger('eventChange', {
        oldEvent,
        event: this,
        relatedEvents: buildEventApis(relevantEvents, context, instance),

        revert() {
          context.dispatch({
            type: 'RESET_EVENTS',
            eventStore // the ORIGINAL store

          });
        }

      });
    }
  }

  remove() {
    let context = this._context;
    let asStore = eventApiToStore(this);
    context.dispatch({
      type: 'REMOVE_EVENTS',
      eventStore: asStore
    });
    context.emitter.trigger('eventRemove', {
      event: this,
      relatedEvents: [],

      revert() {
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: asStore
        });
      }

    });
  }

  get source() {
    let {
      sourceId
    } = this._def;

    if (sourceId) {
      return new EventSourceApi(this._context, this._context.getCurrentData().eventSources[sourceId]);
    }

    return null;
  }

  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }

  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }

  get startStr() {
    let instance = this._instance;

    if (instance) {
      return this._context.dateEnv.formatIso(instance.range.start, {
        omitTime: this._def.allDay,
        forcedTzo: instance.forcedStartTzo
      });
    }

    return '';
  }

  get endStr() {
    let instance = this._instance;

    if (instance && this._def.hasEnd) {
      return this._context.dateEnv.formatIso(instance.range.end, {
        omitTime: this._def.allDay,
        forcedTzo: instance.forcedEndTzo
      });
    }

    return '';
  } // computable props that all access the def
  // TODO: find a TypeScript-compatible way to do this at scale


  get id() {
    return this._def.publicId;
  }

  get groupId() {
    return this._def.groupId;
  }

  get allDay() {
    return this._def.allDay;
  }

  get title() {
    return this._def.title;
  }

  get url() {
    return this._def.url;
  }

  get display() {
    return this._def.ui.display || 'auto';
  } // bad. just normalize the type earlier


  get startEditable() {
    return this._def.ui.startEditable;
  }

  get durationEditable() {
    return this._def.ui.durationEditable;
  }

  get constraint() {
    return this._def.ui.constraints[0] || null;
  }

  get overlap() {
    return this._def.ui.overlap;
  }

  get allow() {
    return this._def.ui.allows[0] || null;
  }

  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }

  get borderColor() {
    return this._def.ui.borderColor;
  }

  get textColor() {
    return this._def.ui.textColor;
  } // NOTE: user can't modify these because Object.freeze was called in event-def parsing


  get classNames() {
    return this._def.ui.classNames;
  }

  get extendedProps() {
    return this._def.extendedProps;
  }

  toPlainObject(settings = {}) {
    let def = this._def;
    let {
      ui
    } = def;
    let {
      startStr,
      endStr
    } = this;
    let res = {};

    if (def.title) {
      res.title = def.title;
    }

    if (startStr) {
      res.start = startStr;
    }

    if (endStr) {
      res.end = endStr;
    }

    if (def.publicId) {
      res.id = def.publicId;
    }

    if (def.groupId) {
      res.groupId = def.groupId;
    }

    if (def.url) {
      res.url = def.url;
    }

    if (ui.display && ui.display !== 'auto') {
      res.display = ui.display;
    } // TODO: what about recurring-event properties???
    // TODO: include startEditable/durationEditable/constraint/overlap/allow


    if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
      res.color = ui.backgroundColor;
    } else {
      if (ui.backgroundColor) {
        res.backgroundColor = ui.backgroundColor;
      }

      if (ui.borderColor) {
        res.borderColor = ui.borderColor;
      }
    }

    if (ui.textColor) {
      res.textColor = ui.textColor;
    }

    if (ui.classNames.length) {
      res.classNames = ui.classNames;
    }

    if (Object.keys(def.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(res, def.extendedProps);
      } else {
        res.extendedProps = def.extendedProps;
      }
    }

    return res;
  }

  toJSON() {
    return this.toPlainObject();
  }

}

function eventApiToStore(eventApi) {
  let def = eventApi._def;
  let instance = eventApi._instance;
  return {
    defs: {
      [def.defId]: def
    },
    instances: instance ? {
      [instance.instanceId]: instance
    } : {}
  };
}

function buildEventApis(eventStore, context, excludeInstance) {
  let {
    defs,
    instances
  } = eventStore;
  let eventApis = [];
  let excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';

  for (let id in instances) {
    let instance = instances[id];
    let def = defs[instance.defId];

    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventApi(context, def, instance));
    }
  }

  return eventApis;
}

let calendarSystemClassMap = {};

function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}

function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}

class GregorianCalendarSystem {
  getMarkerYear(d) {
    return d.getUTCFullYear();
  }

  getMarkerMonth(d) {
    return d.getUTCMonth();
  }

  getMarkerDay(d) {
    return d.getUTCDate();
  }

  arrayToMarker(arr) {
    return arrayToUtcDate(arr);
  }

  markerToArray(marker) {
    return dateToUtcArray(marker);
  }

}

registerCalendarSystem('gregory', GregorianCalendarSystem);
const ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

function parse(str) {
  let m = ISO_RE.exec(str);

  if (m) {
    let marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number(`0.${m[12]}`) * 1000 : 0));

    if (isValidDate(marker)) {
      let timeZoneOffset = null;

      if (m[13]) {
        timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 + Number(m[18] || 0));
      }

      return {
        marker,
        isTimeUnspecified: !m[6],
        timeZoneOffset
      };
    }
  }

  return null;
}

class DateEnv {
  constructor(settings) {
    let timeZone = this.timeZone = settings.timeZone;
    let isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';

    if (settings.namedTimeZoneImpl && isNamedTimeZone) {
      this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
    }

    this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;

    if (settings.weekNumberCalculation === 'ISO') {
      this.weekDow = 1;
      this.weekDoy = 4;
    }

    if (typeof settings.firstDay === 'number') {
      this.weekDow = settings.firstDay;
    }

    if (typeof settings.weekNumberCalculation === 'function') {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }

    this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
    this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
    this.cmdFormatter = settings.cmdFormatter;
    this.defaultSeparator = settings.defaultSeparator;
  } // Creating / Parsing


  createMarker(input) {
    let meta = this.createMarkerMeta(input);

    if (meta === null) {
      return null;
    }

    return meta.marker;
  }

  createNowMarker() {
    if (this.canComputeOffset) {
      return this.timestampToMarker(new Date().valueOf());
    } // if we can't compute the current date val for a timezone,
    // better to give the current local date vals than UTC


    return arrayToUtcDate(dateToLocalArray(new Date()));
  }

  createMarkerMeta(input) {
    if (typeof input === 'string') {
      return this.parse(input);
    }

    let marker = null;

    if (typeof input === 'number') {
      marker = this.timestampToMarker(input);
    } else if (input instanceof Date) {
      input = input.valueOf();

      if (!isNaN(input)) {
        marker = this.timestampToMarker(input);
      }
    } else if (Array.isArray(input)) {
      marker = arrayToUtcDate(input);
    }

    if (marker === null || !isValidDate(marker)) {
      return null;
    }

    return {
      marker,
      isTimeUnspecified: false,
      forcedTzo: null
    };
  }

  parse(s) {
    let parts = parse(s);

    if (parts === null) {
      return null;
    }

    let {
      marker
    } = parts;
    let forcedTzo = null;

    if (parts.timeZoneOffset !== null) {
      if (this.canComputeOffset) {
        marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
      } else {
        forcedTzo = parts.timeZoneOffset;
      }
    }

    return {
      marker,
      isTimeUnspecified: parts.isTimeUnspecified,
      forcedTzo
    };
  } // Accessors


  getYear(marker) {
    return this.calendarSystem.getMarkerYear(marker);
  }

  getMonth(marker) {
    return this.calendarSystem.getMarkerMonth(marker);
  } // Adding / Subtracting


  add(marker, dur) {
    let a = this.calendarSystem.markerToArray(marker);
    a[0] += dur.years;
    a[1] += dur.months;
    a[2] += dur.days;
    a[6] += dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  }

  subtract(marker, dur) {
    let a = this.calendarSystem.markerToArray(marker);
    a[0] -= dur.years;
    a[1] -= dur.months;
    a[2] -= dur.days;
    a[6] -= dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  }

  addYears(marker, n) {
    let a = this.calendarSystem.markerToArray(marker);
    a[0] += n;
    return this.calendarSystem.arrayToMarker(a);
  }

  addMonths(marker, n) {
    let a = this.calendarSystem.markerToArray(marker);
    a[1] += n;
    return this.calendarSystem.arrayToMarker(a);
  } // Diffing Whole Units


  diffWholeYears(m0, m1) {
    let {
      calendarSystem
    } = this;

    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
      return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
    }

    return null;
  }

  diffWholeMonths(m0, m1) {
    let {
      calendarSystem
    } = this;

    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
      return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
    }

    return null;
  } // Range / Duration


  greatestWholeUnit(m0, m1) {
    let n = this.diffWholeYears(m0, m1);

    if (n !== null) {
      return {
        unit: 'year',
        value: n
      };
    }

    n = this.diffWholeMonths(m0, m1);

    if (n !== null) {
      return {
        unit: 'month',
        value: n
      };
    }

    n = diffWholeWeeks(m0, m1);

    if (n !== null) {
      return {
        unit: 'week',
        value: n
      };
    }

    n = diffWholeDays(m0, m1);

    if (n !== null) {
      return {
        unit: 'day',
        value: n
      };
    }

    n = diffHours(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'hour',
        value: n
      };
    }

    n = diffMinutes(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'minute',
        value: n
      };
    }

    n = diffSeconds(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'second',
        value: n
      };
    }

    return {
      unit: 'millisecond',
      value: m1.valueOf() - m0.valueOf()
    };
  }

  countDurationsBetween(m0, m1, d) {
    // TODO: can use greatestWholeUnit
    let diff;

    if (d.years) {
      diff = this.diffWholeYears(m0, m1);

      if (diff !== null) {
        return diff / asRoughYears(d);
      }
    }

    if (d.months) {
      diff = this.diffWholeMonths(m0, m1);

      if (diff !== null) {
        return diff / asRoughMonths(d);
      }
    }

    if (d.days) {
      diff = diffWholeDays(m0, m1);

      if (diff !== null) {
        return diff / asRoughDays(d);
      }
    }

    return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
  } // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates


  startOf(m, unit) {
    if (unit === 'year') {
      return this.startOfYear(m);
    }

    if (unit === 'month') {
      return this.startOfMonth(m);
    }

    if (unit === 'week') {
      return this.startOfWeek(m);
    }

    if (unit === 'day') {
      return startOfDay(m);
    }

    if (unit === 'hour') {
      return startOfHour(m);
    }

    if (unit === 'minute') {
      return startOfMinute(m);
    }

    if (unit === 'second') {
      return startOfSecond(m);
    }

    return null;
  }

  startOfYear(m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m)]);
  }

  startOfMonth(m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m)]);
  }

  startOfWeek(m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m), m.getUTCDate() - (m.getUTCDay() - this.weekDow + 7) % 7]);
  } // Week Number


  computeWeekNumber(marker) {
    if (this.weekNumberFunc) {
      return this.weekNumberFunc(this.toDate(marker));
    }

    return weekOfYear(marker, this.weekDow, this.weekDoy);
  } // TODO: choke on timeZoneName: long


  format(marker, formatter, dateOptions = {}) {
    return formatter.format({
      marker,
      timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
    }, this);
  }

  formatRange(start, end, formatter, dateOptions = {}) {
    if (dateOptions.isEndExclusive) {
      end = addMs(end, -1);
    }

    return formatter.formatRange({
      marker: start,
      timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start)
    }, {
      marker: end,
      timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
    }, this, dateOptions.defaultSeparator);
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */


  formatIso(marker, extraOptions = {}) {
    let timeZoneOffset = null;

    if (!extraOptions.omitTimeZoneOffset) {
      if (extraOptions.forcedTzo != null) {
        timeZoneOffset = extraOptions.forcedTzo;
      } else {
        timeZoneOffset = this.offsetForMarker(marker);
      }
    }

    return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
  } // TimeZone


  timestampToMarker(ms) {
    if (this.timeZone === 'local') {
      return arrayToUtcDate(dateToLocalArray(new Date(ms)));
    }

    if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
      return new Date(ms);
    }

    return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
  }

  offsetForMarker(m) {
    if (this.timeZone === 'local') {
      return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
    }

    if (this.timeZone === 'UTC') {
      return 0;
    }

    if (this.namedTimeZoneImpl) {
      return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
    }

    return null;
  } // Conversion


  toDate(m, forcedTzo) {
    if (this.timeZone === 'local') {
      return arrayToLocalDate(dateToUtcArray(m));
    }

    if (this.timeZone === 'UTC') {
      return new Date(m.valueOf()); // make sure it's a copy
    }

    if (!this.namedTimeZoneImpl) {
      return new Date(m.valueOf() - (forcedTzo || 0));
    }

    return new Date(m.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
  }

}

const globalLocales = [];
const MINIMAL_RAW_EN_LOCALE = {
  code: 'en',
  week: {
    dow: 0,
    doy: 4 // 4 days need to be within the year to be considered the first week

  },
  direction: 'ltr',
  buttonText: {
    prev: 'prev',
    next: 'next',
    prevYear: 'prev year',
    nextYear: 'next year',
    year: 'year',
    today: 'today',
    month: 'month',
    week: 'week',
    day: 'day',
    list: 'list'
  },
  weekText: 'W',
  weekTextLong: 'Week',
  closeHint: 'Close',
  timeHint: 'Time',
  eventHint: 'Event',
  allDayText: 'all-day',
  moreLinkText: 'more',
  noEventsText: 'No events to display'
};
const RAW_EN_LOCALE = Object.assign(Object.assign({}, MINIMAL_RAW_EN_LOCALE), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: 'Previous $0',
    next: 'Next $0',

    today(buttonText, unit) {
      return unit === 'day' ? 'Today' : `This ${buttonText}`;
    }

  },
  viewHint: '$0 view',
  navLinkHint: 'Go to $0',

  moreLinkHint(eventCnt) {
    return `Show ${eventCnt} more event${eventCnt === 1 ? '' : 's'}`;
  }

});

function organizeRawLocales(explicitRawLocales) {
  let defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
  let allRawLocales = globalLocales.concat(explicitRawLocales);
  let rawLocaleMap = {
    en: RAW_EN_LOCALE
  };

  for (let rawLocale of allRawLocales) {
    rawLocaleMap[rawLocale.code] = rawLocale;
  }

  return {
    map: rawLocaleMap,
    defaultCode
  };
}

function buildLocale(inputSingular, available) {
  if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  }

  return queryLocale(inputSingular, available);
}

function queryLocale(codeArg, available) {
  let codes = [].concat(codeArg || []); // will convert to array

  let raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}

function queryRawLocale(codes, available) {
  for (let i = 0; i < codes.length; i += 1) {
    let parts = codes[i].toLocaleLowerCase().split('-');

    for (let j = parts.length; j > 0; j -= 1) {
      let simpleId = parts.slice(0, j).join('-');

      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }

  return null;
}

function parseLocale(codeArg, codes, raw) {
  let merged = mergeProps([MINIMAL_RAW_EN_LOCALE, raw], ['buttonText']);
  delete merged.code; // don't want this part of the options

  let {
    week
  } = merged;
  delete merged.week;
  return {
    codeArg,
    codes,
    week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}

function formatDate(dateInput, options = {}) {
  let dateEnv = buildDateEnv$1(options);
  let formatter = createFormatter(options);
  let dateMeta = dateEnv.createMarkerMeta(dateInput);

  if (!dateMeta) {
    // TODO: warning?
    return '';
  }

  return dateEnv.format(dateMeta.marker, formatter, {
    forcedTzo: dateMeta.forcedTzo
  });
}

function formatRange(startInput, endInput, options) {
  let dateEnv = buildDateEnv$1(typeof options === 'object' && options ? options : {}); // pass in if non-null object

  let formatter = createFormatter(options);
  let startMeta = dateEnv.createMarkerMeta(startInput);
  let endMeta = dateEnv.createMarkerMeta(endInput);

  if (!startMeta || !endMeta) {
    // TODO: warning?
    return '';
  }

  return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
    forcedStartTzo: startMeta.forcedTzo,
    forcedEndTzo: endMeta.forcedTzo,
    isEndExclusive: options.isEndExclusive,
    defaultSeparator: BASE_OPTION_DEFAULTS.defaultRangeSeparator
  });
} // TODO: more DRY and optimized


function buildDateEnv$1(settings) {
  let locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere

  return new DateEnv(Object.assign(Object.assign({
    timeZone: BASE_OPTION_DEFAULTS.timeZone,
    calendarSystem: 'gregory'
  }, settings), {
    locale
  }));
}

const DEF_DEFAULTS = {
  startTime: '09:00',
  endTime: '17:00',
  daysOfWeek: [1, 2, 3, 4, 5],
  display: 'inverse-background',
  classNames: 'fc-non-business',
  groupId: '_businessHours' // so multiple defs get grouped

};
/*
TODO: pass around as EventDefHash!!!
*/

function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}

function refineInputs(input) {
  let rawDefs;

  if (input === true) {
    rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
  } else if (Array.isArray(input)) {
    // if specifying an array, every sub-definition NEEDS a day-of-week
    rawDefs = input.filter(rawDef => rawDef.daysOfWeek);
  } else if (typeof input === 'object' && input) {
    // non-null object
    rawDefs = [input];
  } else {
    // is probably false
    rawDefs = [];
  }

  rawDefs = rawDefs.map(rawDef => Object.assign(Object.assign({}, DEF_DEFAULTS), rawDef));
  return rawDefs;
}

function pointInsideRect(point, rect) {
  return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
} // Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false


function intersectRects(rect1, rect2) {
  let res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };

  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }

  return false;
}

function translateRect(rect, deltaX, deltaY) {
  return {
    left: rect.left + deltaX,
    right: rect.right + deltaX,
    top: rect.top + deltaY,
    bottom: rect.bottom + deltaY
  };
} // Returns a new point that will have been moved to reside within the given rectangle


function constrainPoint(point, rect) {
  return {
    left: Math.min(Math.max(point.left, rect.left), rect.right),
    top: Math.min(Math.max(point.top, rect.top), rect.bottom)
  };
} // Returns a point that is the center of the given rectangle


function getRectCenter(rect) {
  return {
    left: (rect.left + rect.right) / 2,
    top: (rect.top + rect.bottom) / 2
  };
} // Subtracts point2's coordinates from point1's coordinates, returning a delta


function diffPoints(point1, point2) {
  return {
    left: point1.left - point2.left,
    top: point1.top - point2.top
  };
}

let canVGrowWithinCell;

function getCanVGrowWithinCell() {
  if (canVGrowWithinCell == null) {
    canVGrowWithinCell = computeCanVGrowWithinCell();
  }

  return canVGrowWithinCell;
}

function computeCanVGrowWithinCell() {
  // for SSR, because this function is call immediately at top-level
  // TODO: just make this logic execute top-level, immediately, instead of doing lazily
  if (typeof document === 'undefined') {
    return true;
  }

  let el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.top = '0px';
  el.style.left = '0px';
  el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
  el.querySelector('table').style.height = '100px';
  el.querySelector('div').style.height = '100%';
  document.body.appendChild(el);
  let div = el.querySelector('div');
  let possible = div.offsetHeight > 0;
  document.body.removeChild(el);
  return possible;
}

const EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere

class Splitter {
  constructor() {
    this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
    this.splitDateSelection = memoize(this._splitDateSpan);
    this.splitEventStore = memoize(this._splitEventStore);
    this.splitIndividualUi = memoize(this._splitIndividualUi);
    this.splitEventDrag = memoize(this._splitInteraction);
    this.splitEventResize = memoize(this._splitInteraction);
    this.eventUiBuilders = {}; // TODO: typescript protection
  }

  splitProps(props) {
    let keyInfos = this.getKeyInfo(props);
    let defKeys = this.getKeysForEventDefs(props.eventStore);
    let dateSelections = this.splitDateSelection(props.dateSelection);
    let individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*

    let eventStores = this.splitEventStore(props.eventStore, defKeys);
    let eventDrags = this.splitEventDrag(props.eventDrag);
    let eventResizes = this.splitEventResize(props.eventResize);
    let splitProps = {};
    this.eventUiBuilders = mapHash(keyInfos, (info, key) => this.eventUiBuilders[key] || memoize(buildEventUiForKey));

    for (let key in keyInfos) {
      let keyInfo = keyInfos[key];
      let eventStore = eventStores[key] || EMPTY_EVENT_STORE;
      let buildEventUi = this.eventUiBuilders[key];
      splitProps[key] = {
        businessHours: keyInfo.businessHours || props.businessHours,
        dateSelection: dateSelections[key] || null,
        eventStore,
        eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
        eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
        eventDrag: eventDrags[key] || null,
        eventResize: eventResizes[key] || null
      };
    }

    return splitProps;
  }

  _splitDateSpan(dateSpan) {
    let dateSpans = {};

    if (dateSpan) {
      let keys = this.getKeysForDateSpan(dateSpan);

      for (let key of keys) {
        dateSpans[key] = dateSpan;
      }
    }

    return dateSpans;
  }

  _getKeysForEventDefs(eventStore) {
    return mapHash(eventStore.defs, eventDef => this.getKeysForEventDef(eventDef));
  }

  _splitEventStore(eventStore, defKeys) {
    let {
      defs,
      instances
    } = eventStore;
    let splitStores = {};

    for (let defId in defs) {
      for (let key of defKeys[defId]) {
        if (!splitStores[key]) {
          splitStores[key] = createEmptyEventStore();
        }

        splitStores[key].defs[defId] = defs[defId];
      }
    }

    for (let instanceId in instances) {
      let instance = instances[instanceId];

      for (let key of defKeys[instance.defId]) {
        if (splitStores[key]) {
          // must have already been created
          splitStores[key].instances[instanceId] = instance;
        }
      }
    }

    return splitStores;
  }

  _splitIndividualUi(eventUiBases, defKeys) {
    let splitHashes = {};

    for (let defId in eventUiBases) {
      if (defId) {
        // not the '' key
        for (let key of defKeys[defId]) {
          if (!splitHashes[key]) {
            splitHashes[key] = {};
          }

          splitHashes[key][defId] = eventUiBases[defId];
        }
      }
    }

    return splitHashes;
  }

  _splitInteraction(interaction) {
    let splitStates = {};

    if (interaction) {
      let affectedStores = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents)); // can't rely on defKeys because event data is mutated


      let mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);

      let mutatedStores = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);

      let populate = key => {
        if (!splitStates[key]) {
          splitStates[key] = {
            affectedEvents: affectedStores[key] || EMPTY_EVENT_STORE,
            mutatedEvents: mutatedStores[key] || EMPTY_EVENT_STORE,
            isEvent: interaction.isEvent
          };
        }
      };

      for (let key in affectedStores) {
        populate(key);
      }

      for (let key in mutatedStores) {
        populate(key);
      }
    }

    return splitStates;
  }

}

function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
  let baseParts = [];

  if (allUi) {
    baseParts.push(allUi);
  }

  if (eventUiForKey) {
    baseParts.push(eventUiForKey);
  }

  let stuff = {
    '': combineEventUis(baseParts)
  };

  if (individualUi) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(stuff, individualUi);
  }

  return stuff;
}

function getDateMeta(date, todayRange, nowDate, dateProfile) {
  return {
    dow: date.getUTCDay(),
    isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
    isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
    isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
    isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
    isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
  };
}

function getDayClassNames(meta, theme) {
  let classNames = ['fc-day', `fc-day-${DAY_IDS[meta.dow]}`];

  if (meta.isDisabled) {
    classNames.push('fc-day-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-day-today');
      classNames.push(theme.getClass('today'));
    }

    if (meta.isPast) {
      classNames.push('fc-day-past');
    }

    if (meta.isFuture) {
      classNames.push('fc-day-future');
    }

    if (meta.isOther) {
      classNames.push('fc-day-other');
    }
  }

  return classNames;
}

function getSlotClassNames(meta, theme) {
  let classNames = ['fc-slot', `fc-slot-${DAY_IDS[meta.dow]}`];

  if (meta.isDisabled) {
    classNames.push('fc-slot-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-slot-today');
      classNames.push(theme.getClass('today'));
    }

    if (meta.isPast) {
      classNames.push('fc-slot-past');
    }

    if (meta.isFuture) {
      classNames.push('fc-slot-future');
    }
  }

  return classNames;
}

const DAY_FORMAT = createFormatter({
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const WEEK_FORMAT = createFormatter({
  week: 'long'
});

function buildNavLinkAttrs(context, dateMarker, viewType = 'day', isTabbable = true) {
  const {
    dateEnv,
    options,
    calendarApi
  } = context;
  let dateStr = dateEnv.format(dateMarker, viewType === 'week' ? WEEK_FORMAT : DAY_FORMAT);

  if (options.navLinks) {
    let zonedDate = dateEnv.toDate(dateMarker);

    const handleInteraction = ev => {
      let customAction = viewType === 'day' ? options.navLinkDayClick : viewType === 'week' ? options.navLinkWeekClick : null;

      if (typeof customAction === 'function') {
        customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
      } else {
        if (typeof customAction === 'string') {
          viewType = customAction;
        }

        calendarApi.zoomTo(dateMarker, viewType);
      }
    };

    return Object.assign({
      title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr),
      'data-navlink': ''
    }, isTabbable ? createAriaClickAttrs(handleInteraction) : {
      onClick: handleInteraction
    });
  }

  return {
    'aria-label': dateStr
  };
}

let _isRtlScrollbarOnLeft = null;

function getIsRtlScrollbarOnLeft() {
  if (_isRtlScrollbarOnLeft === null) {
    _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
  }

  return _isRtlScrollbarOnLeft;
}

function computeIsRtlScrollbarOnLeft() {
  let outerEl = document.createElement('div');
  applyStyle(outerEl, {
    position: 'absolute',
    top: -1000,
    left: 0,
    border: 0,
    padding: 0,
    overflow: 'scroll',
    direction: 'rtl'
  });
  outerEl.innerHTML = '<div></div>';
  document.body.appendChild(outerEl);
  let innerEl = outerEl.firstChild;
  let res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
  removeElement(outerEl);
  return res;
}

let _scrollbarWidths;

function getScrollbarWidths() {
  if (!_scrollbarWidths) {
    _scrollbarWidths = computeScrollbarWidths();
  }

  return _scrollbarWidths;
}

function computeScrollbarWidths() {
  let el = document.createElement('div');
  el.style.overflow = 'scroll';
  el.style.position = 'absolute';
  el.style.top = '-9999px';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  let res = computeScrollbarWidthsForEl(el);
  document.body.removeChild(el);
  return res;
} // WARNING: will include border


function computeScrollbarWidthsForEl(el) {
  return {
    x: el.offsetHeight - el.clientHeight,
    y: el.offsetWidth - el.clientWidth
  };
}

function computeEdges(el, getPadding = false) {
  let computedStyle = window.getComputedStyle(el);
  let borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
  let borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
  let borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
  let borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
  let badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!

  let scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
  let scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
  let res = {
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    scrollbarBottom,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };

  if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') {
    // is the scrollbar on the left side?
    res.scrollbarLeft = scrollbarLeftRight;
  } else {
    res.scrollbarRight = scrollbarLeftRight;
  }

  if (getPadding) {
    res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
    res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
    res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
    res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
  }

  return res;
}

function computeInnerRect(el, goWithinPadding = false, doFromWindowViewport) {
  let outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
  let edges = computeEdges(el, goWithinPadding);
  let res = {
    left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
    right: outerRect.right - edges.borderRight - edges.scrollbarRight,
    top: outerRect.top + edges.borderTop,
    bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
  };

  if (goWithinPadding) {
    res.left += edges.paddingLeft;
    res.right -= edges.paddingRight;
    res.top += edges.paddingTop;
    res.bottom -= edges.paddingBottom;
  }

  return res;
}

function computeRect(el) {
  let rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    right: rect.right + window.pageXOffset,
    bottom: rect.bottom + window.pageYOffset
  };
}

function computeClippedClientRect(el) {
  let clippingParents = getClippingParents(el);
  let rect = el.getBoundingClientRect();

  for (let clippingParent of clippingParents) {
    let intersection = intersectRects(rect, clippingParent.getBoundingClientRect());

    if (intersection) {
      rect = intersection;
    } else {
      return null;
    }
  }

  return rect;
}

function computeHeightAndMargins(el) {
  return el.getBoundingClientRect().height + computeVMargins(el);
}

function computeVMargins(el) {
  let computed = window.getComputedStyle(el);
  return parseInt(computed.marginTop, 10) + parseInt(computed.marginBottom, 10);
} // does not return window


function getClippingParents(el) {
  let parents = [];

  while (el instanceof HTMLElement) {
    // will stop when gets to document or null
    let computedStyle = window.getComputedStyle(el);

    if (computedStyle.position === 'fixed') {
      break;
    }

    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }

    el = el.parentNode;
  }

  return parents;
} // given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.


function unpromisify(func, success, failure) {
  // guard against success/failure callbacks being called more than once
  // and guard against a promise AND callback being used together.
  let isResolved = false;

  let wrappedSuccess = function () {
    if (!isResolved) {
      isResolved = true;
      success.apply(this, arguments); // eslint-disable-line prefer-rest-params
    }
  };

  let wrappedFailure = function () {
    if (!isResolved) {
      isResolved = true;

      if (failure) {
        failure.apply(this, arguments); // eslint-disable-line prefer-rest-params
      }
    }
  };

  let res = func(wrappedSuccess, wrappedFailure);

  if (res && typeof res.then === 'function') {
    res.then(wrappedSuccess, wrappedFailure);
  }
}

class Emitter {
  constructor() {
    this.handlers = {};
    this.thisContext = null;
  }

  setThisContext(thisContext) {
    this.thisContext = thisContext;
  }

  setOptions(options) {
    this.options = options;
  }

  on(type, handler) {
    addToHash(this.handlers, type, handler);
  }

  off(type, handler) {
    removeFromHash(this.handlers, type, handler);
  }

  trigger(type, ...args) {
    let attachedHandlers = this.handlers[type] || [];
    let optionHandler = this.options && this.options[type];
    let handlers = [].concat(optionHandler || [], attachedHandlers);

    for (let handler of handlers) {
      handler.apply(this.thisContext, args);
    }
  }

  hasHandlers(type) {
    return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
  }

}

function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}

function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter(func => func !== handler);
    }
  } else {
    delete hash[type]; // remove all handler funcs for this type
  }
}
/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/


class PositionCache {
  constructor(originEl, els, isHorizontal, isVertical) {
    this.els = els;
    let originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left

    if (isHorizontal) {
      this.buildElHorizontals(originClientRect.left);
    }

    if (isVertical) {
      this.buildElVerticals(originClientRect.top);
    }
  } // Populates the left/right internal coordinate arrays


  buildElHorizontals(originClientLeft) {
    let lefts = [];
    let rights = [];

    for (let el of this.els) {
      let rect = el.getBoundingClientRect();
      lefts.push(rect.left - originClientLeft);
      rights.push(rect.right - originClientLeft);
    }

    this.lefts = lefts;
    this.rights = rights;
  } // Populates the top/bottom internal coordinate arrays


  buildElVerticals(originClientTop) {
    let tops = [];
    let bottoms = [];

    for (let el of this.els) {
      let rect = el.getBoundingClientRect();
      tops.push(rect.top - originClientTop);
      bottoms.push(rect.bottom - originClientTop);
    }

    this.tops = tops;
    this.bottoms = bottoms;
  } // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.


  leftToIndex(leftPosition) {
    let {
      lefts,
      rights
    } = this;
    let len = lefts.length;
    let i;

    for (i = 0; i < len; i += 1) {
      if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
        return i;
      }
    }

    return undefined; // TODO: better
  } // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.


  topToIndex(topPosition) {
    let {
      tops,
      bottoms
    } = this;
    let len = tops.length;
    let i;

    for (i = 0; i < len; i += 1) {
      if (topPosition >= tops[i] && topPosition < bottoms[i]) {
        return i;
      }
    }

    return undefined; // TODO: better
  } // Gets the width of the element at the given index


  getWidth(leftIndex) {
    return this.rights[leftIndex] - this.lefts[leftIndex];
  } // Gets the height of the element at the given index


  getHeight(topIndex) {
    return this.bottoms[topIndex] - this.tops[topIndex];
  }

}
/* eslint max-classes-per-file: "off" */

/*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/


class ScrollController {
  getMaxScrollTop() {
    return this.getScrollHeight() - this.getClientHeight();
  }

  getMaxScrollLeft() {
    return this.getScrollWidth() - this.getClientWidth();
  }

  canScrollVertically() {
    return this.getMaxScrollTop() > 0;
  }

  canScrollHorizontally() {
    return this.getMaxScrollLeft() > 0;
  }

  canScrollUp() {
    return this.getScrollTop() > 0;
  }

  canScrollDown() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }

  canScrollLeft() {
    return this.getScrollLeft() > 0;
  }

  canScrollRight() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }

}

class ElementScrollController extends ScrollController {
  constructor(el) {
    super();
    this.el = el;
  }

  getScrollTop() {
    return this.el.scrollTop;
  }

  getScrollLeft() {
    return this.el.scrollLeft;
  }

  setScrollTop(top) {
    this.el.scrollTop = top;
  }

  setScrollLeft(left) {
    this.el.scrollLeft = left;
  }

  getScrollWidth() {
    return this.el.scrollWidth;
  }

  getScrollHeight() {
    return this.el.scrollHeight;
  }

  getClientHeight() {
    return this.el.clientHeight;
  }

  getClientWidth() {
    return this.el.clientWidth;
  }

}

class WindowScrollController extends ScrollController {
  getScrollTop() {
    return window.pageYOffset;
  }

  getScrollLeft() {
    return window.pageXOffset;
  }

  setScrollTop(n) {
    window.scroll(window.pageXOffset, n);
  }

  setScrollLeft(n) {
    window.scroll(n, window.pageYOffset);
  }

  getScrollWidth() {
    return document.documentElement.scrollWidth;
  }

  getScrollHeight() {
    return document.documentElement.scrollHeight;
  }

  getClientHeight() {
    return document.documentElement.clientHeight;
  }

  getClientWidth() {
    return document.documentElement.clientWidth;
  }

}

class Theme {
  constructor(calendarOptions) {
    if (this.iconOverrideOption) {
      this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
  }

  setIconOverride(iconOverrideHash) {
    let iconClassesCopy;
    let buttonName;

    if (typeof iconOverrideHash === 'object' && iconOverrideHash) {
      // non-null object
      iconClassesCopy = Object.assign({}, this.iconClasses);

      for (buttonName in iconOverrideHash) {
        iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
      }

      this.iconClasses = iconClassesCopy;
    } else if (iconOverrideHash === false) {
      this.iconClasses = {};
    }
  }

  applyIconOverridePrefix(className) {
    let prefix = this.iconOverridePrefix;

    if (prefix && className.indexOf(prefix) !== 0) {
      // if not already present
      className = prefix + className;
    }

    return className;
  }

  getClass(key) {
    return this.classes[key] || '';
  }

  getIconClass(buttonName, isRtl) {
    let className;

    if (isRtl && this.rtlIconClasses) {
      className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
    } else {
      className = this.iconClasses[buttonName];
    }

    if (className) {
      return `${this.baseIconClass} ${className}`;
    }

    return '';
  }

  getCustomButtonIconClass(customButtonProps) {
    let className;

    if (this.iconOverrideCustomButtonOption) {
      className = customButtonProps[this.iconOverrideCustomButtonOption];

      if (className) {
        return `${this.baseIconClass} ${this.applyIconOverridePrefix(className)}`;
      }
    }

    return '';
  }

}

Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';

class ScrollResponder {
  constructor(execFunc, emitter, scrollTime, scrollTimeReset) {
    this.execFunc = execFunc;
    this.emitter = emitter;
    this.scrollTime = scrollTime;
    this.scrollTimeReset = scrollTimeReset;

    this.handleScrollRequest = request => {
      this.queuedRequest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.queuedRequest || {}, request);
      this.drain();
    };

    emitter.on('_scrollRequest', this.handleScrollRequest);
    this.fireInitialScroll();
  }

  detach() {
    this.emitter.off('_scrollRequest', this.handleScrollRequest);
  }

  update(isDatesNew) {
    if (isDatesNew && this.scrollTimeReset) {
      this.fireInitialScroll(); // will drain
    } else {
      this.drain();
    }
  }

  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }

  drain() {
    if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
      this.queuedRequest = null;
    }
  }

}

const ViewContextType = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createContext)({}); // for Components

function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv,
    options: viewOptions,
    pluginHooks,
    emitter,
    dispatch,
    getCurrentData,
    calendarApi,
    viewSpec,
    viewApi,
    dateProfileGenerator,
    theme,
    isRtl: viewOptions.direction === 'rtl',

    addResizeHandler(handler) {
      emitter.on('_resize', handler);
    },

    removeResizeHandler(handler) {
      emitter.off('_resize', handler);
    },

    createScrollResponder(execFunc) {
      return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
    },

    registerInteractiveComponent,
    unregisterInteractiveComponent
  };
}
/* eslint max-classes-per-file: off */


class PureComponent extends _vdom_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
    }

    return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
  } // HACK for freakin' React StrictMode


  safeSetState(newState) {
    if (!compareObjs(this.state, Object.assign(Object.assign({}, this.state), newState), this.stateEquality)) {
      this.setState(newState);
    }
  }

}

PureComponent.addPropsEquality = addPropsEquality;
PureComponent.addStateEquality = addStateEquality;
PureComponent.contextType = ViewContextType;
PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};

class BaseComponent extends PureComponent {}

BaseComponent.contextType = ViewContextType;

function addPropsEquality(propEquality) {
  let hash = Object.create(this.prototype.propEquality);

  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(hash, propEquality);

  this.prototype.propEquality = hash;
}

function addStateEquality(stateEquality) {
  let hash = Object.create(this.prototype.stateEquality);

  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(hash, stateEquality);

  this.prototype.stateEquality = hash;
} // use other one


function setRef(ref, current) {
  if (typeof ref === 'function') {
    ref(current);
  } else if (ref) {
    // see https://github.com/facebook/react/issues/13029
    ref.current = current;
  }
}
/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/


class DateComponent extends BaseComponent {
  constructor() {
    super(...arguments);
    this.uid = guid();
  } // Hit System
  // -----------------------------------------------------------------------------------------------------------------


  prepareHits() {}

  queryHit(positionLeft, positionTop, elWidth, elHeight) {
    return null; // this should be abstract
  } // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------


  isValidSegDownEl(el) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !elementClosest(el, '.fc-event-mirror');
  }

  isValidDateDownEl(el) {
    return !elementClosest(el, '.fc-event:not(.fc-bg-event)') && !elementClosest(el, '.fc-more-link') && // a "more.." link
    !elementClosest(el, 'a[data-navlink]') && // a clickable nav link
    !elementClosest(el, '.fc-popover'); // hack
  }

} // TODO: easier way to add new hooks? need to update a million things


function createPlugin(input) {
  return {
    id: guid(),
    deps: input.deps || [],
    reducers: input.reducers || [],
    isLoadingFuncs: input.isLoadingFuncs || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    themeClasses: input.themeClasses || {},
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    namedTimeZonedImpl: input.namedTimeZonedImpl,
    initialView: input.initialView || '',
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollGridImpl: input.scrollGridImpl || null,
    contentTypeHandlers: input.contentTypeHandlers || {},
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    propSetHandlers: input.propSetHandlers || {}
  };
}

function buildPluginHooks(pluginDefs, globalDefs) {
  let isAdded = {};
  let hooks = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: '',
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };

  function addDefs(defs) {
    for (let def of defs) {
      if (!isAdded[def.id]) {
        isAdded[def.id] = true;
        addDefs(def.deps);
        hooks = combineHooks(hooks, def);
      }
    }
  }

  if (pluginDefs) {
    addDefs(pluginDefs);
  }

  addDefs(globalDefs);
  return hooks;
}

function buildBuildPluginHooks() {
  let currentOverrideDefs = [];
  let currentGlobalDefs = [];
  let currentHooks;
  return (overrideDefs, globalDefs) => {
    if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }

    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}

function combineHooks(hooks0, hooks1) {
  return {
    reducers: hooks0.reducers.concat(hooks1.reducers),
    isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: Object.assign(Object.assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: Object.assign(Object.assign({}, hooks0.views), hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, hooks0.themeClasses), hooks1.themeClasses),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
    initialView: hooks0.initialView || hooks1.initialView,
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
    scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
    contentTypeHandlers: Object.assign(Object.assign({}, hooks0.contentTypeHandlers), hooks1.contentTypeHandlers),
    listenerRefiners: Object.assign(Object.assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers)
  };
}

class StandardTheme extends Theme {}

StandardTheme.prototype.classes = {
  root: 'fc-theme-standard',
  tableCellShaded: 'fc-cell-shaded',
  buttonGroup: 'fc-button-group',
  button: 'fc-button fc-button-primary',
  buttonActive: 'fc-button-active'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
  close: 'fc-icon-x',
  prev: 'fc-icon-chevron-left',
  next: 'fc-icon-chevron-right',
  prevYear: 'fc-icon-chevrons-left',
  nextYear: 'fc-icon-chevrons-right'
};
StandardTheme.prototype.rtlIconClasses = {
  prev: 'fc-icon-chevron-right',
  next: 'fc-icon-chevron-left',
  prevYear: 'fc-icon-chevrons-right',
  nextYear: 'fc-icon-chevrons-left'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly

StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

function compileViewDefs(defaultConfigs, overrideConfigs) {
  let hash = {};
  let viewType;

  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }

  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }

  return hash;
}

function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }

  let viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);

  if (viewDef) {
    hash[viewType] = viewDef;
  }

  return viewDef;
}

function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  let defaultConfig = defaultConfigs[viewType];
  let overrideConfig = overrideConfigs[viewType];

  let queryProp = name => defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;

  let theComponent = queryProp('component');
  let superType = queryProp('superType');
  let superDef = null;

  if (superType) {
    if (superType === viewType) {
      throw new Error('Can\'t have a custom view type that references itself');
    }

    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }

  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }

  if (!theComponent) {
    return null; // don't throw a warning, might be settings for a single-unit view
  }

  return {
    type: viewType,
    component: theComponent,
    defaults: Object.assign(Object.assign({}, superDef ? superDef.defaults : {}), defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, superDef ? superDef.overrides : {}), overrideConfig ? overrideConfig.rawOptions : {})
  };
}
/* eslint max-classes-per-file: off */
// NOTE: in JSX, you should always use this class with <HookProps> arg. otherwise, will default to any???


class RenderHook extends BaseComponent {
  constructor() {
    super(...arguments);
    this.rootElRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();

    this.handleRootEl = el => {
      setRef(this.rootElRef, el);

      if (this.props.elRef) {
        setRef(this.props.elRef, el);
      }
    };
  }

  render() {
    let {
      props
    } = this;
    let {
      hookProps
    } = props;
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(MountHook, {
      hookProps: hookProps,
      didMount: props.didMount,
      willUnmount: props.willUnmount,
      elRef: this.handleRootEl
    }, rootElRef => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentHook, {
      hookProps: hookProps,
      content: props.content,
      defaultContent: props.defaultContent,
      backupElRef: this.rootElRef
    }, (innerElRef, innerContent) => props.children(rootElRef, normalizeClassNames(props.classNames, hookProps), innerElRef, innerContent)));
  }

} // TODO: rename to be about function, not default. use in above type
// for forcing rerender of components that use the ContentHook


const CustomContentRenderContext = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createContext)(0);

function ContentHook(props) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomContentRenderContext.Consumer, null, renderId => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentHookInner, Object.assign({
    renderId: renderId
  }, props)));
}

class ContentHookInner extends BaseComponent {
  constructor() {
    super(...arguments);
    this.innerElRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  }

  render() {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  }

  componentDidMount() {
    this.updateCustomContent();
  }

  componentDidUpdate() {
    this.updateCustomContent();
  }

  componentWillUnmount() {
    if (this.customContentInfo && this.customContentInfo.destroy) {
      this.customContentInfo.destroy();
    }
  }

  renderInnerContent() {
    let {
      customContentInfo
    } = this; // only populated if using non-[p]react node(s)

    let innerContent = this.getInnerContent();
    let meta = this.getContentMeta(innerContent); // initial run, or content-type changing? (from vue -> react for example)

    if (!customContentInfo || customContentInfo.contentKey !== meta.contentKey) {
      // clearing old value
      if (customContentInfo) {
        if (customContentInfo.destroy) {
          customContentInfo.destroy();
        }

        customContentInfo = this.customContentInfo = null;
      } // assigning new value


      if (meta.contentKey) {
        customContentInfo = this.customContentInfo = Object.assign({
          contentKey: meta.contentKey,
          contentVal: innerContent[meta.contentKey]
        }, meta.buildLifecycleFuncs());
      } // updating

    } else if (customContentInfo) {
      customContentInfo.contentVal = innerContent[meta.contentKey];
    }

    return customContentInfo ? [] // signal that something was specified
    : innerContent; // assume a [p]react vdom node. use it
  }

  getInnerContent() {
    let {
      props
    } = this;
    let innerContent = normalizeContent(props.content, props.hookProps);

    if (innerContent === undefined) {
      // use the default
      innerContent = normalizeContent(props.defaultContent, props.hookProps);
    }

    return innerContent == null ? null : innerContent; // convert undefined to null (better for React)
  }

  getContentMeta(innerContent) {
    let {
      contentTypeHandlers
    } = this.context.pluginHooks;
    let contentKey = '';
    let buildLifecycleFuncs = null;

    if (innerContent) {
      // allowed to be null, for convenience to caller
      for (let searchKey in contentTypeHandlers) {
        if (innerContent[searchKey] !== undefined) {
          contentKey = searchKey;
          buildLifecycleFuncs = contentTypeHandlers[searchKey];
          break;
        }
      }
    }

    return {
      contentKey,
      buildLifecycleFuncs
    };
  }

  updateCustomContent() {
    if (this.customContentInfo) {
      // for non-[p]react
      this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, // the element to render into
      this.customContentInfo.contentVal);
    }
  }

}

class MountHook extends BaseComponent {
  constructor() {
    super(...arguments);

    this.handleRootEl = rootEl => {
      this.rootEl = rootEl;

      if (this.props.elRef) {
        setRef(this.props.elRef, rootEl);
      }
    };
  }

  render() {
    return this.props.children(this.handleRootEl);
  }

  componentDidMount() {
    let callback = this.props.didMount;

    if (callback) {
      callback(Object.assign(Object.assign({}, this.props.hookProps), {
        el: this.rootEl
      }));
    }
  }

  componentWillUnmount() {
    let callback = this.props.willUnmount;

    if (callback) {
      callback(Object.assign(Object.assign({}, this.props.hookProps), {
        el: this.rootEl
      }));
    }
  }

}

function buildClassNameNormalizer() {
  let currentGenerator;
  let currentHookProps;
  let currentClassNames = [];
  return (generator, hookProps) => {
    if (!currentHookProps || !isPropsEqual(currentHookProps, hookProps) || generator !== currentGenerator) {
      currentGenerator = generator;
      currentHookProps = hookProps;
      currentClassNames = normalizeClassNames(generator, hookProps);
    }

    return currentClassNames;
  };
}

function normalizeClassNames(classNames, hookProps) {
  if (typeof classNames === 'function') {
    classNames = classNames(hookProps);
  }

  return parseClassNames(classNames);
}

function normalizeContent(input, hookProps) {
  if (typeof input === 'function') {
    return input(hookProps, _vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement); // give the function the vdom-creation func
  }

  return input;
}

class ViewRoot extends BaseComponent {
  constructor() {
    super(...arguments);
    this.normalizeClassNames = buildClassNameNormalizer();
  }

  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let hookProps = {
      view: context.viewApi
    };
    let customClassNames = this.normalizeClassNames(options.viewClassNames, hookProps);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(MountHook, {
      hookProps: hookProps,
      didMount: options.viewDidMount,
      willUnmount: options.viewWillUnmount,
      elRef: props.elRef
    }, rootElRef => props.children(rootElRef, [`fc-${props.viewSpec.type}-view`, 'fc-view'].concat(customClassNames)));
  }

}

function parseViewConfigs(inputs) {
  return mapHash(inputs, parseViewConfig);
}

function parseViewConfig(input) {
  let rawOptions = typeof input === 'function' ? {
    component: input
  } : input;
  let {
    component
  } = rawOptions;

  if (rawOptions.content) {
    component = createViewHookComponent(rawOptions); // TODO: remove content/classNames/didMount/etc from options?
  }

  return {
    superType: rawOptions.type,
    component: component,
    rawOptions // includes type and component too :(

  };
}

function createViewHookComponent(options) {
  return viewProps => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, context => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewRoot, {
    viewSpec: context.viewSpec
  }, (viewElRef, viewClassNames) => {
    let hookProps = Object.assign(Object.assign({}, viewProps), {
      nextDayThreshold: context.options.nextDayThreshold
    });
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderHook, {
      hookProps: hookProps,
      classNames: options.classNames,
      content: options.content,
      didMount: options.didMount,
      willUnmount: options.willUnmount,
      elRef: viewElRef
    }, (rootElRef, customClassNames, innerElRef, innerContent) => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: viewClassNames.concat(customClassNames).join(' '),
      ref: rootElRef
    }, innerContent));
  }));
}

function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  let defaultConfigs = parseViewConfigs(defaultInputs);
  let overrideConfigs = parseViewConfigs(optionOverrides.views);
  let viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return mapHash(viewDefs, viewDef => buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults));
}

function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  let durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  let duration = null;
  let durationUnit = '';
  let singleUnit = '';
  let singleUnitOverrides = {};

  if (durationInput) {
    duration = createDurationCached(durationInput);

    if (duration) {
      // valid?
      let denom = greatestDurationDenominator(duration);
      durationUnit = denom.unit;

      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }

  let queryButtonText = optionsSubset => {
    let buttonTextMap = optionsSubset.buttonText || {};
    let buttonTextKey = viewDef.defaults.buttonTextKey;

    if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
      return buttonTextMap[buttonTextKey];
    }

    if (buttonTextMap[viewDef.type] != null) {
      return buttonTextMap[viewDef.type];
    }

    if (buttonTextMap[singleUnit] != null) {
      return buttonTextMap[singleUnit];
    }

    return null;
  };

  let queryButtonTitle = optionsSubset => {
    let buttonHints = optionsSubset.buttonHints || {};
    let buttonKey = viewDef.defaults.buttonTextKey; // use same key as text

    if (buttonKey != null && buttonHints[buttonKey] != null) {
      return buttonHints[buttonKey];
    }

    if (buttonHints[viewDef.type] != null) {
      return buttonHints[viewDef.type];
    }

    if (buttonHints[singleUnit] != null) {
      return buttonHints[singleUnit];
    }

    return null;
  };

  return {
    type: viewDef.type,
    component: viewDef.component,
    duration,
    durationUnit,
    singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: Object.assign(Object.assign({}, singleUnitOverrides), viewDef.overrides),
    buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
    viewDef.overrides.buttonText,
    buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(BASE_OPTION_DEFAULTS) || viewDef.type,
    // not DRY
    buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) || queryButtonTitle(optionOverrides) || viewDef.overrides.buttonHint,
    buttonTitleDefault: queryButtonTitle(localeDefaults) || viewDef.defaults.buttonHint || queryButtonTitle(BASE_OPTION_DEFAULTS) // will eventually fall back to buttonText

  };
} // hack to get memoization working


let durationInputMap = {};

function createDurationCached(durationInput) {
  let json = JSON.stringify(durationInput);
  let res = durationInputMap[json];

  if (res === undefined) {
    res = createDuration(durationInput);
    durationInputMap[json] = res;
  }

  return res;
}

class DateProfileGenerator {
  constructor(props) {
    this.props = props;
    this.nowDate = getNow(props.nowInput, props.dateEnv);
    this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.


  buildPrev(currentDateProfile, currentDate, forceToValid) {
    let {
      dateEnv
    } = this.props;
    let prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(prevDate, -1, forceToValid);
  } // Builds a structure with info about what the dates/ranges will be for the "next" view.


  buildNext(currentDateProfile, currentDate, forceToValid) {
    let {
      dateEnv
    } = this.props;
    let nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(nextDate, 1, forceToValid);
  } // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).


  build(currentDate, direction, forceToValid = true) {
    let {
      props
    } = this;
    let validRange;
    let currentInfo;
    let isRangeAllDay;
    let renderRange;
    let activeRange;
    let isValid;
    validRange = this.buildValidRange();
    validRange = this.trimHiddenDays(validRange);

    if (forceToValid) {
      currentDate = constrainMarkerToRange(currentDate, validRange);
    }

    currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
    isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
    renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
    renderRange = this.trimHiddenDays(renderRange);
    activeRange = renderRange;

    if (!props.showNonCurrentDates) {
      activeRange = intersectRanges(activeRange, currentInfo.range);
    }

    activeRange = this.adjustActiveRange(activeRange);
    activeRange = intersectRanges(activeRange, validRange); // might return null
    // it's invalid if the originally requested date is not contained,
    // or if the range is completely outside of the valid range.

    isValid = rangesIntersect(currentInfo.range, validRange);
    return {
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: currentInfo.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: currentInfo.unit,
      isRangeAllDay,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: props.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: props.slotMaxTime,
      isValid,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(currentInfo.duration) // pass a fallback (might be null) ^

    };
  } // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.


  buildValidRange() {
    let input = this.props.validRangeInput;
    let simpleInput = typeof input === 'function' ? input.call(this.props.calendarApi, this.nowDate) : input;
    return this.refineRange(simpleInput) || {
      start: null,
      end: null
    }; // completely open-ended
  } // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.


  buildCurrentRangeInfo(date, direction) {
    let {
      props
    } = this;
    let duration = null;
    let unit = null;
    let range = null;
    let dayCount;

    if (props.duration) {
      duration = props.duration;
      unit = props.durationUnit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    } else if (dayCount = this.props.dayCount) {
      unit = 'day';
      range = this.buildRangeFromDayCount(date, direction, dayCount);
    } else if (range = this.buildCustomVisibleRange(date)) {
      unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
    } else {
      duration = this.getFallbackDuration();
      unit = greatestDurationDenominator(duration).unit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    }

    return {
      duration,
      unit,
      range
    };
  }

  getFallbackDuration() {
    return createDuration({
      day: 1
    });
  } // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.


  adjustActiveRange(range) {
    let {
      dateEnv,
      usesMinMaxTime,
      slotMinTime,
      slotMaxTime
    } = this.props;
    let {
      start,
      end
    } = range;

    if (usesMinMaxTime) {
      // expand active range if slotMinTime is negative (why not when positive?)
      if (asRoughDays(slotMinTime) < 0) {
        start = startOfDay(start); // necessary?

        start = dateEnv.add(start, slotMinTime);
      } // expand active range if slotMaxTime is beyond one day (why not when negative?)


      if (asRoughDays(slotMaxTime) > 1) {
        end = startOfDay(end); // necessary?

        end = addDays(end, -1);
        end = dateEnv.add(end, slotMaxTime);
      }
    }

    return {
      start,
      end
    };
  } // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.


  buildRangeFromDuration(date, direction, duration, unit) {
    let {
      dateEnv,
      dateAlignment
    } = this.props;
    let start;
    let end;
    let res; // compute what the alignment should be

    if (!dateAlignment) {
      let {
        dateIncrement
      } = this.props;

      if (dateIncrement) {
        // use the smaller of the two units
        if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
          dateAlignment = greatestDurationDenominator(dateIncrement).unit;
        } else {
          dateAlignment = unit;
        }
      } else {
        dateAlignment = unit;
      }
    } // if the view displays a single day or smaller


    if (asRoughDays(duration) <= 1) {
      if (this.isHiddenDay(start)) {
        start = this.skipHiddenDays(start, direction);
        start = startOfDay(start);
      }
    }

    function computeRes() {
      start = dateEnv.startOf(date, dateAlignment);
      end = dateEnv.add(start, duration);
      res = {
        start,
        end
      };
    }

    computeRes(); // if range is completely enveloped by hidden days, go past the hidden days

    if (!this.trimHiddenDays(res)) {
      date = this.skipHiddenDays(date, direction);
      computeRes();
    }

    return res;
  } // Builds the "current" range when a dayCount is specified.


  buildRangeFromDayCount(date, direction, dayCount) {
    let {
      dateEnv,
      dateAlignment
    } = this.props;
    let runningCount = 0;
    let start = date;
    let end;

    if (dateAlignment) {
      start = dateEnv.startOf(start, dateAlignment);
    }

    start = startOfDay(start);
    start = this.skipHiddenDays(start, direction);
    end = start;

    do {
      end = addDays(end, 1);

      if (!this.isHiddenDay(end)) {
        runningCount += 1;
      }
    } while (runningCount < dayCount);

    return {
      start,
      end
    };
  } // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.


  buildCustomVisibleRange(date) {
    let {
      props
    } = this;
    let input = props.visibleRangeInput;
    let simpleInput = typeof input === 'function' ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
    let range = this.refineRange(simpleInput);

    if (range && (range.start == null || range.end == null)) {
      return null;
    }

    return range;
  } // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.


  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    return currentRange;
  } // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.


  buildDateIncrement(fallback) {
    let {
      dateIncrement
    } = this.props;
    let customAlignment;

    if (dateIncrement) {
      return dateIncrement;
    }

    if (customAlignment = this.props.dateAlignment) {
      return createDuration(1, customAlignment);
    }

    if (fallback) {
      return fallback;
    }

    return createDuration({
      days: 1
    });
  }

  refineRange(rangeInput) {
    if (rangeInput) {
      let range = parseRange(rangeInput, this.props.dateEnv);

      if (range) {
        range = computeVisibleDayRange(range);
      }

      return range;
    }

    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week


  initHiddenDays() {
    let hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden

    let isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)

    let dayCnt = 0;
    let i;

    if (this.props.weekends === false) {
      hiddenDays.push(0, 6); // 0=sunday, 6=saturday
    }

    for (i = 0; i < 7; i += 1) {
      if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
        dayCnt += 1;
      }
    }

    if (!dayCnt) {
      throw new Error('invalid hiddenDays'); // all days were hidden? bad.
    }

    this.isHiddenDayHash = isHiddenDayHash;
  } // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null


  trimHiddenDays(range) {
    let {
      start,
      end
    } = range;

    if (start) {
      start = this.skipHiddenDays(start);
    }

    if (end) {
      end = this.skipHiddenDays(end, -1, true);
    }

    if (start == null || end == null || start < end) {
      return {
        start,
        end
      };
    }

    return null;
  } // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)


  isHiddenDay(day) {
    if (day instanceof Date) {
      day = day.getUTCDay();
    }

    return this.isHiddenDayHash[day];
  } // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)


  skipHiddenDays(date, inc = 1, isExclusive = false) {
    while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
      date = addDays(date, inc);
    }

    return date;
  }

}

function reduceViewType(viewType, action) {
  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      viewType = action.viewType;
  }

  return viewType;
}

function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  switch (action.type) {
    case 'SET_OPTION':
      return Object.assign(Object.assign({}, dynamicOptionOverrides), {
        [action.optionName]: action.rawOptionValue
      });

    default:
      return dynamicOptionOverrides;
  }
}

function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
  let dp;

  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      return dateProfileGenerator.build(action.dateMarker || currentDate);

    case 'CHANGE_DATE':
      return dateProfileGenerator.build(action.dateMarker);

    case 'PREV':
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);

      if (dp.isValid) {
        return dp;
      }

      break;

    case 'NEXT':
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);

      if (dp.isValid) {
        return dp;
      }

      break;
  }

  return currentDateProfile;
}

function initEventSources(calendarOptions, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}

function reduceEventSources(eventSources, action, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?

  switch (action.type) {
    case 'ADD_EVENT_SOURCES':
      // already parsed
      return addSources(eventSources, action.sources, activeRange, context);

    case 'REMOVE_EVENT_SOURCE':
      return removeSource(eventSources, action.sourceId);

    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(

    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      }

      return eventSources;

    case 'FETCH_EVENT_SOURCES':
      return fetchSourcesByIds(eventSources, action.sourceIds ? // why no type?
      arrayToHash(action.sourceIds) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);

    case 'RECEIVE_EVENTS':
    case 'RECEIVE_EVENT_ERROR':
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);

    case 'REMOVE_ALL_EVENT_SOURCES':
      return {};

    default:
      return eventSources;
  }
}

function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?

  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}

function computeEventSourcesLoading(eventSources) {
  for (let sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      return true;
    }
  }

  return false;
}

function addSources(eventSourceHash, sources, fetchRange, context) {
  let hash = {};

  for (let source of sources) {
    hash[source.sourceId] = source;
  }

  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }

  return Object.assign(Object.assign({}, eventSourceHash), hash);
}

function removeSource(eventSourceHash, sourceId) {
  return filterHash(eventSourceHash, eventSource => eventSource.sourceId !== sourceId);
}

function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, filterHash(sourceHash, eventSource => isSourceDirty(eventSource, fetchRange, context)), fetchRange, false, context);
}

function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  }

  return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching || // always cancel outdated in-progress fetches
  fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}

function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
  let nextSources = {};

  for (let sourceId in prevSources) {
    let source = prevSources[sourceId];

    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
    } else {
      nextSources[sourceId] = source;
    }
  }

  return nextSources;
}

function fetchSource(eventSource, fetchRange, isRefetch, context) {
  let {
    options,
    calendarApi
  } = context;
  let sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  let fetchId = guid();
  sourceDef.fetch({
    eventSource,
    range: fetchRange,
    isRefetch,
    context
  }, res => {
    let {
      rawEvents
    } = res;

    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }

    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }

    context.dispatch({
      type: 'RECEIVE_EVENTS',
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      rawEvents
    });
  }, error => {
    console.warn(error.message, error);

    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
    }

    if (eventSource.failure) {
      eventSource.failure(error);
    }

    context.dispatch({
      type: 'RECEIVE_EVENT_ERROR',
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      error
    });
  });
  return Object.assign(Object.assign({}, eventSource), {
    isFetching: true,
    latestFetchId: fetchId
  });
}

function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  let eventSource = sourceHash[sourceId];

  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId) {
    return Object.assign(Object.assign({}, sourceHash), {
      [sourceId]: Object.assign(Object.assign({}, eventSource), {
        isFetching: false,
        fetchRange
      })
    });
  }

  return sourceHash;
}

function excludeStaticSources(eventSources, context) {
  return filterHash(eventSources, eventSource => doesSourceNeedRange(eventSource, context));
}

function parseInitialSources(rawOptions, context) {
  let refiners = buildEventSourceRefiners(context);
  let rawSources = [].concat(rawOptions.eventSources || []);
  let sources = []; // parsed

  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }

  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }

  for (let rawSource of rawSources) {
    let source = parseEventSource(rawSource, context, refiners);

    if (source) {
      sources.push(source);
    }
  }

  return sources;
}

function doesSourceNeedRange(eventSource, context) {
  let defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}

function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      // raw
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);

    case 'ADD_EVENTS':
      // already parsed, but not expanded
      return addEvent(eventStore, action.eventStore, // new ones
      dateProfile ? dateProfile.activeRange : null, context);

    case 'RESET_EVENTS':
      return action.eventStore;

    case 'MERGE_EVENTS':
      // already parsed and expanded
      return mergeEventStores(eventStore, action.eventStore);

    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(

    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      }

      return eventStore;

    case 'REMOVE_EVENTS':
      return excludeSubEventStore(eventStore, action.eventStore);

    case 'REMOVE_EVENT_SOURCE':
      return excludeEventsBySourceId(eventStore, action.sourceId);

    case 'REMOVE_ALL_EVENT_SOURCES':
      return filterEventStoreDefs(eventStore, eventDef => !eventDef.sourceId // only keep events with no source id
      );

    case 'REMOVE_ALL_EVENTS':
      return createEmptyEventStore();

    default:
      return eventStore;
  }
}

function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
  ) {
    let subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);

    if (fetchRange) {
      subset = expandRecurring(subset, fetchRange, context);
    }

    return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
  }

  return eventStore;
}

function transformRawEvents(rawEvents, eventSource, context) {
  let calEachTransform = context.options.eventDataTransform;
  let sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;

  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }

  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }

  return rawEvents;
}

function transformEachRawEvent(rawEvents, func) {
  let refinedEvents;

  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];

    for (let rawEvent of rawEvents) {
      let refinedEvent = func(rawEvent);

      if (refinedEvent) {
        refinedEvents.push(refinedEvent);
      } else if (refinedEvent == null) {
        refinedEvents.push(rawEvent);
      } // if a different falsy value, do nothing

    }
  }

  return refinedEvents;
}

function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }

  return mergeEventStores(eventStore, subset);
}

function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  let {
    defs
  } = eventStore;
  let instances = mapHash(eventStore.instances, instance => {
    let def = defs[instance.defId];

    if (def.allDay || def.recurringDef) {
      return instance; // isn't dependent on timezone
    }

    return Object.assign(Object.assign({}, instance), {
      range: {
        start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
        end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
      },
      forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo,
      forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo
    });
  });
  return {
    defs,
    instances
  };
}

function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, eventDef => eventDef.sourceId !== sourceId);
} // QUESTION: why not just return instances? do a general object-property-exclusion util


function excludeInstances(eventStore, removals) {
  return {
    defs: eventStore.defs,
    instances: filterHash(eventStore.instances, instance => !removals[instance.instanceId])
  };
}

function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case 'UNSELECT_DATES':
      return null;

    case 'SELECT_DATES':
      return action.selection;

    default:
      return currentSelection;
  }
}

function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case 'UNSELECT_EVENT':
      return '';

    case 'SELECT_EVENT':
      return action.eventInstanceId;

    default:
      return currentInstanceId;
  }
}

function reduceEventDrag(currentDrag, action) {
  let newDrag;

  switch (action.type) {
    case 'UNSET_EVENT_DRAG':
      return null;

    case 'SET_EVENT_DRAG':
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };

    default:
      return currentDrag;
  }
}

function reduceEventResize(currentResize, action) {
  let newResize;

  switch (action.type) {
    case 'UNSET_EVENT_RESIZE':
      return null;

    case 'SET_EVENT_RESIZE':
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };

    default:
      return currentResize;
  }
}

function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  let header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  let footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  return {
    header,
    footer
  };
}

function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  let sectionWidgets = {};
  let viewsWithButtons = [];
  let hasTitle = false;

  for (let sectionName in sectionStrHash) {
    let sectionStr = sectionStrHash[sectionName];
    let sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
    sectionWidgets[sectionName] = sectionRes.widgets;
    viewsWithButtons.push(...sectionRes.viewsWithButtons);
    hasTitle = hasTitle || sectionRes.hasTitle;
  }

  return {
    sectionWidgets,
    viewsWithButtons,
    hasTitle
  };
}
/*
BAD: querying icons and text here. should be done at render time
*/


function parseSection(sectionStr, calendarOptions, // defaults+overrides, then refined
calendarOptionOverrides, // overrides only!, unrefined :(
theme, viewSpecs, calendarApi) {
  let isRtl = calendarOptions.direction === 'rtl';
  let calendarCustomButtons = calendarOptions.customButtons || {};
  let calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
  let calendarButtonText = calendarOptions.buttonText || {};
  let calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
  let calendarButtonHints = calendarOptions.buttonHints || {};
  let sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
  let viewsWithButtons = [];
  let hasTitle = false;
  let widgets = sectionSubstrs.map(buttonGroupStr => buttonGroupStr.split(',').map(buttonName => {
    if (buttonName === 'title') {
      hasTitle = true;
      return {
        buttonName
      };
    }

    let customButtonProps;
    let viewSpec;
    let buttonClick;
    let buttonIcon; // only one of these will be set

    let buttonText; // "

    let buttonHint; // ^ for the title="" attribute, for accessibility

    if (customButtonProps = calendarCustomButtons[buttonName]) {
      buttonClick = ev => {
        if (customButtonProps.click) {
          customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
        }
      };

      (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customButtonProps.text);
      buttonHint = customButtonProps.hint || customButtonProps.text;
    } else if (viewSpec = viewSpecs[buttonName]) {
      viewsWithButtons.push(buttonName);

      buttonClick = () => {
        calendarApi.changeView(buttonName);
      };

      (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
      let textFallback = viewSpec.buttonTextOverride || viewSpec.buttonTextDefault;
      buttonHint = formatWithOrdinals(viewSpec.buttonTitleOverride || viewSpec.buttonTitleDefault || calendarOptions.viewHint, [textFallback, buttonName], // view-name = buttonName
      textFallback);
    } else if (calendarApi[buttonName]) {
      // a calendarApi method
      buttonClick = () => {
        calendarApi[buttonName]();
      };

      (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]); // everything else is considered default

      if (buttonName === 'prevYear' || buttonName === 'nextYear') {
        let prevOrNext = buttonName === 'prevYear' ? 'prev' : 'next';
        buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] || calendarButtonHints[prevOrNext], [calendarButtonText.year || 'year', 'year'], calendarButtonText[buttonName]);
      } else {
        buttonHint = navUnit => formatWithOrdinals(calendarButtonHintOverrides[buttonName] || calendarButtonHints[buttonName], [calendarButtonText[navUnit] || navUnit, navUnit], calendarButtonText[buttonName]);
      }
    }

    return {
      buttonName,
      buttonClick,
      buttonIcon,
      buttonText,
      buttonHint
    };
  }));
  return {
    widgets,
    viewsWithButtons,
    hasTitle
  };
}

let eventSourceDef$2 = {
  ignoreRange: true,

  parseMeta(refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }

    return null;
  },

  fetch(arg, success) {
    success({
      rawEvents: arg.eventSource.meta
    });
  }

};
const arrayEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$2]
});
let eventSourceDef$1 = {
  parseMeta(refined) {
    if (typeof refined.events === 'function') {
      return refined.events;
    }

    return null;
  },

  fetch(arg, success, failure) {
    let {
      dateEnv
    } = arg.context;
    let func = arg.eventSource.meta;
    unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), rawEvents => {
      success({
        rawEvents
      }); // needs an object response
    }, failure);
  }

};
const funcEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$1]
});

function requestJson(method, url, params, successCallback, failureCallback) {
  method = method.toUpperCase();
  let body = null;

  if (method === 'GET') {
    url = injectQueryStringParams(url, params);
  } else {
    body = encodeParams(params);
  }

  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  if (method !== 'GET') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      let parsed = false;
      let res;

      try {
        res = JSON.parse(xhr.responseText);
        parsed = true;
      } catch (err) {// will handle parsed=false
      }

      if (parsed) {
        successCallback(res, xhr);
      } else {
        failureCallback('Failure parsing JSON', xhr);
      }
    } else {
      failureCallback('Request failed', xhr);
    }
  };

  xhr.onerror = () => {
    failureCallback('Request failed', xhr);
  };

  xhr.send(body);
}

function injectQueryStringParams(url, params) {
  return url + (url.indexOf('?') === -1 ? '?' : '&') + encodeParams(params);
}

function encodeParams(params) {
  let parts = [];

  for (let key in params) {
    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
  }

  return parts.join('&');
}

const JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: identity,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let eventSourceDef = {
  parseMeta(refined) {
    if (refined.url && (refined.format === 'json' || !refined.format)) {
      return {
        url: refined.url,
        format: 'json',
        method: (refined.method || 'GET').toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }

    return null;
  },

  fetch(arg, success, failure) {
    let {
      meta
    } = arg.eventSource;
    let requestParams = buildRequestParams(meta, arg.range, arg.context);
    requestJson(meta.method, meta.url, requestParams, (rawEvents, xhr) => {
      success({
        rawEvents,
        xhr
      });
    }, (errorMessage, xhr) => {
      failure({
        message: errorMessage,
        xhr
      });
    });
  }

};
const jsonFeedEventSourcePlugin = createPlugin({
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef]
});

function buildRequestParams(meta, range, context) {
  let {
    dateEnv,
    options
  } = context;
  let startParam;
  let endParam;
  let timeZoneParam;
  let customRequestParams;
  let params = {};
  startParam = meta.startParam;

  if (startParam == null) {
    startParam = options.startParam;
  }

  endParam = meta.endParam;

  if (endParam == null) {
    endParam = options.endParam;
  }

  timeZoneParam = meta.timeZoneParam;

  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  } // retrieve any outbound GET/POST data from the options


  if (typeof meta.extraParams === 'function') {
    // supplied as a function that returns a key/value object
    customRequestParams = meta.extraParams();
  } else {
    // probably supplied as a straight key/value object
    customRequestParams = meta.extraParams || {};
  }

  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(params, customRequestParams);

  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);

  if (dateEnv.timeZone !== 'local') {
    params[timeZoneParam] = dateEnv.timeZone;
  }

  return params;
}

const SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: identity,
  startTime: createDuration,
  endTime: createDuration,
  duration: createDuration,
  startRecur: identity,
  endRecur: identity
};
let recurring = {
  parse(refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      let recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
      };
      let duration;

      if (refined.duration) {
        duration = refined.duration;
      }

      if (!duration && refined.startTime && refined.endTime) {
        duration = subtractDurations(refined.endTime, refined.startTime);
      }

      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration,
        typeData: recurringData // doesn't need endTime anymore but oh well

      };
    }

    return null;
  },

  expand(typeData, framingRange, dateEnv) {
    let clippedFramingRange = intersectRanges(framingRange, {
      start: typeData.startRecur,
      end: typeData.endRecur
    });

    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
    }

    return [];
  }

};
const simpleRecurringEventsPlugin = createPlugin({
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
});

function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
  let dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
  let dayMarker = startOfDay(framingRange.start);
  let endMarker = framingRange.end;
  let instanceStarts = [];

  while (dayMarker < endMarker) {
    let instanceStart; // if everyday, or this particular day-of-week

    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = dateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }

      instanceStarts.push(instanceStart);
    }

    dayMarker = addDays(dayMarker, 1);
  }

  return instanceStarts;
}

const changeHandlerPlugin = createPlugin({
  optionChangeHandlers: {
    events(events, context) {
      handleEventSources([events], context);
    },

    eventSources: handleEventSources
  }
});
/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/

function handleEventSources(inputs, context) {
  let unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
  let newInputs = [];

  for (let input of inputs) {
    let inputFound = false;

    for (let i = 0; i < unfoundSources.length; i += 1) {
      if (unfoundSources[i]._raw === input) {
        unfoundSources.splice(i, 1); // delete

        inputFound = true;
        break;
      }
    }

    if (!inputFound) {
      newInputs.push(input);
    }
  }

  for (let unfoundSource of unfoundSources) {
    context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: unfoundSource.sourceId
    });
  }

  for (let newInput of newInputs) {
    context.calendarApi.addEventSource(newInput);
  }
}

function handleDateProfile(dateProfile, context) {
  context.emitter.trigger('datesSet', Object.assign(Object.assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), {
    view: context.viewApi
  }));
}

function handleEventStore(eventStore, context) {
  let {
    emitter
  } = context;

  if (emitter.hasHandlers('eventsSet')) {
    emitter.trigger('eventsSet', buildEventApis(eventStore, context));
  }
}
/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/


const globalPlugins = [arrayEventSourcePlugin, funcEventSourcePlugin, jsonFeedEventSourcePlugin, simpleRecurringEventsPlugin, changeHandlerPlugin, createPlugin({
  isLoadingFuncs: [state => computeEventSourcesLoading(state.eventSources)],
  contentTypeHandlers: {
    html: buildHtmlRenderer,
    domNodes: buildDomNodeRenderer
  },
  propSetHandlers: {
    dateProfile: handleDateProfile,
    eventStore: handleEventStore
  }
})];

function buildHtmlRenderer() {
  let currentEl = null;
  let currentHtml = '';

  function render(el, html) {
    if (el !== currentEl || html !== currentHtml) {
      el.innerHTML = html;
    }

    currentEl = el;
    currentHtml = html;
  }

  function destroy() {
    currentEl.innerHTML = '';
    currentEl = null;
    currentHtml = '';
  }

  return {
    render,
    destroy
  };
}

function buildDomNodeRenderer() {
  let currentEl = null;
  let currentDomNodes = [];

  function render(el, domNodes) {
    let newDomNodes = Array.prototype.slice.call(domNodes);

    if (el !== currentEl || !isArraysEqual(currentDomNodes, newDomNodes)) {
      // append first, remove second (for scroll resetting)
      for (let newNode of newDomNodes) {
        el.appendChild(newNode);
      }

      destroy();
    }

    currentEl = el;
    currentDomNodes = newDomNodes;
  }

  function destroy() {
    currentDomNodes.forEach(removeElement);
    currentDomNodes = [];
    currentEl = null;
  }

  return {
    render,
    destroy
  };
}

class DelayedRunner {
  constructor(drainedOption) {
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }

  request(delay) {
    this.isDirty = true;

    if (!this.isPaused()) {
      this.clearTimeout();

      if (delay == null) {
        this.tryDrain();
      } else {
        this.timeoutId = setTimeout( // NOT OPTIMAL! TODO: look at debounce
        this.tryDrain.bind(this), delay);
      }
    }
  }

  pause(scope = '') {
    let {
      pauseDepths
    } = this;
    pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
    this.clearTimeout();
  }

  resume(scope = '', force) {
    let {
      pauseDepths
    } = this;

    if (scope in pauseDepths) {
      if (force) {
        delete pauseDepths[scope];
      } else {
        pauseDepths[scope] -= 1;
        let depth = pauseDepths[scope];

        if (depth <= 0) {
          delete pauseDepths[scope];
        }
      }

      this.tryDrain();
    }
  }

  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }

  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      this.isRunning = true;

      while (this.isDirty) {
        this.isDirty = false;
        this.drained(); // might set isDirty to true again
      }

      this.isRunning = false;
    }
  }

  clear() {
    this.clearTimeout();
    this.isDirty = false;
    this.pauseDepths = {};
  }

  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  }

  drained() {
    if (this.drainedOption) {
      this.drainedOption();
    }
  }

}

class TaskRunner {
  constructor(runTaskOption, drainedOption) {
    this.runTaskOption = runTaskOption;
    this.drainedOption = drainedOption;
    this.queue = [];
    this.delayedRunner = new DelayedRunner(this.drain.bind(this));
  }

  request(task, delay) {
    this.queue.push(task);
    this.delayedRunner.request(delay);
  }

  pause(scope) {
    this.delayedRunner.pause(scope);
  }

  resume(scope, force) {
    this.delayedRunner.resume(scope, force);
  }

  drain() {
    let {
      queue
    } = this;

    while (queue.length) {
      let completedTasks = [];
      let task;

      while (task = queue.shift()) {
        this.runTask(task);
        completedTasks.push(task);
      }

      this.drained(completedTasks);
    } // keep going, in case new tasks were added in the drained handler

  }

  runTask(task) {
    if (this.runTaskOption) {
      this.runTaskOption(task);
    }
  }

  drained(completedTasks) {
    if (this.drainedOption) {
      this.drainedOption(completedTasks);
    }
  }

} // Computes what the title at the top of the calendarApi should be for this view


function buildTitle(dateProfile, viewOptions, dateEnv) {
  let range; // for views that span a large unit of time, show the proper interval, ignoring stray days before and after

  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    // for day units or smaller, use the actual day range
    range = dateProfile.activeRange;
  }

  return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
    isEndExclusive: dateProfile.isRangeAllDay,
    defaultSeparator: viewOptions.titleRangeSeparator
  });
} // Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.


function buildTitleFormat(dateProfile) {
  let {
    currentRangeUnit
  } = dateProfile;

  if (currentRangeUnit === 'year') {
    return {
      year: 'numeric'
    };
  }

  if (currentRangeUnit === 'month') {
    return {
      year: 'numeric',
      month: 'long'
    }; // like "September 2014"
  }

  let days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);

  if (days !== null && days > 1) {
    // multi-day range. shorter, like "Sep 9 - 10 2014"
    return {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
  } // one day. longer, like "September 9 2014"


  return {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
} // in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too


class CalendarDataManager {
  constructor(props) {
    this.computeOptionsData = memoize(this._computeOptionsData);
    this.computeCurrentViewData = memoize(this._computeCurrentViewData);
    this.organizeRawLocales = memoize(organizeRawLocales);
    this.buildLocale = memoize(buildLocale);
    this.buildPluginHooks = buildBuildPluginHooks();
    this.buildDateEnv = memoize(buildDateEnv);
    this.buildTheme = memoize(buildTheme);
    this.parseToolbars = memoize(parseToolbars);
    this.buildViewSpecs = memoize(buildViewSpecs);
    this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
    this.buildViewApi = memoize(buildViewApi);
    this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
    this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
    this.buildEventUiBases = memoize(buildEventUiBases);
    this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
    this.buildTitle = memoize(buildTitle);
    this.emitter = new Emitter();
    this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.currentCalendarOptionsRefiners = {};

    this.getCurrentData = () => this.data;

    this.dispatch = action => {
      this.actionRunner.request(action); // protects against recursive calls to _handleAction
    };

    this.props = props;
    this.actionRunner.pause();
    let dynamicOptionOverrides = {};
    let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    let currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
    let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides); // wire things up
    // TODO: not DRY

    props.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(props.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    let currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
    let dateProfile = currentViewData.dateProfileGenerator.build(currentDate);

    if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }

    let calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }; // needs to be after setThisContext

    for (let callback of optionsData.pluginHooks.contextInit) {
      callback(calendarContext);
    } // NOT DRY


    let eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
    let initialState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      businessHours: this.parseContextBusinessHours(calendarContext),
      eventSources,
      eventUiBases: {},
      eventStore: createEmptyEventStore(),
      renderableEventStore: createEmptyEventStore(),
      dateSelection: null,
      eventSelection: '',
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
    };
    let contextAndState = Object.assign(Object.assign({}, calendarContext), initialState);

    for (let reducer of optionsData.pluginHooks.reducers) {
      (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(initialState, reducer(null, null, contextAndState));
    }

    if (computeIsLoading(initialState, calendarContext)) {
      this.emitter.trigger('loading', true); // NOT DRY
    }

    this.state = initialState;
    this.updateData();
    this.actionRunner.resume();
  }

  resetOptions(optionOverrides, append) {
    let {
      props
    } = this;
    props.optionOverrides = append ? Object.assign(Object.assign({}, props.optionOverrides), optionOverrides) : optionOverrides;
    this.actionRunner.request({
      type: 'NOTHING'
    });
  }

  _handleAction(action) {
    let {
      props,
      state,
      emitter
    } = this;
    let dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
    let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    let currentViewType = reduceViewType(state.currentViewType, action);
    let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides); // wire things up
    // TODO: not DRY

    props.calendarApi.currentDataManager = this;
    emitter.setThisContext(props.calendarApi);
    emitter.setOptions(currentViewData.options);
    let calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter,
      getCurrentData: this.getCurrentData
    };
    let {
      currentDate,
      dateProfile
    } = state;

    if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
      // hack
      dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    }

    currentDate = reduceCurrentDate(currentDate, action);
    dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);

    if (action.type === 'PREV' || // TODO: move this logic into DateProfileGenerator
    action.type === 'NEXT' || // "
    !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }

    let eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
    let eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
    let isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading

    let renderableEventStore = isEventsLoading && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore : // try from previous state
    eventStore;
    let {
      eventUiSingleBase,
      selectionConfig
    } = this.buildViewUiProps(calendarContext); // will memoize obj

    let eventUiBySource = this.buildEventUiBySource(eventSources);
    let eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
    let newState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      eventSources,
      eventStore,
      renderableEventStore,
      selectionConfig,
      eventUiBases,
      businessHours: this.parseContextBusinessHours(calendarContext),
      dateSelection: reduceDateSelection(state.dateSelection, action),
      eventSelection: reduceSelectedEvent(state.eventSelection, action),
      eventDrag: reduceEventDrag(state.eventDrag, action),
      eventResize: reduceEventResize(state.eventResize, action)
    };
    let contextAndState = Object.assign(Object.assign({}, calendarContext), newState);

    for (let reducer of optionsData.pluginHooks.reducers) {
      (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value

    }

    let wasLoading = computeIsLoading(state, calendarContext);
    let isLoading = computeIsLoading(newState, calendarContext); // TODO: use propSetHandlers in plugin system

    if (!wasLoading && isLoading) {
      emitter.trigger('loading', true);
    } else if (wasLoading && !isLoading) {
      emitter.trigger('loading', false);
    }

    this.state = newState;

    if (props.onAction) {
      props.onAction(action);
    }
  }

  updateData() {
    let {
      props,
      state
    } = this;
    let oldData = this.data;
    let optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
    let currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
    let data = this.data = Object.assign(Object.assign(Object.assign({
      viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv),
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, optionsData), currentViewData), state);
    let changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
    let oldCalendarOptions = oldData && oldData.calendarOptions;
    let newCalendarOptions = optionsData.calendarOptions;

    if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
      if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
        // hack
        state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
        state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
      }

      for (let optionName in changeHandlers) {
        if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
          changeHandlers[optionName](newCalendarOptions[optionName], data);
        }
      }
    }

    if (props.onData) {
      props.onData(data);
    }
  }

  _computeOptionsData(optionOverrides, dynamicOptionOverrides, calendarApi) {
    // TODO: blacklist options that are handled by optionChangeHandlers
    let {
      refinedOptions,
      pluginHooks,
      localeDefaults,
      availableLocaleData,
      extra
    } = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides);
    warnUnknownOptions(extra);
    let dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
    let viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
    let theme = this.buildTheme(refinedOptions, pluginHooks);
    let toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
    return {
      calendarOptions: refinedOptions,
      pluginHooks,
      dateEnv,
      viewSpecs,
      theme,
      toolbarConfig,
      localeDefaults,
      availableRawLocales: availableLocaleData.map
    };
  } // always called from behind a memoizer


  processRawCalendarOptions(optionOverrides, dynamicOptionOverrides) {
    let {
      locales,
      locale
    } = mergeRawOptions([BASE_OPTION_DEFAULTS, optionOverrides, dynamicOptionOverrides]);
    let availableLocaleData = this.organizeRawLocales(locales);
    let availableRawLocales = availableLocaleData.map;
    let localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
    let pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
    let refiners = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    let extra = {};
    let raw = mergeRawOptions([BASE_OPTION_DEFAULTS, localeDefaults, optionOverrides, dynamicOptionOverrides]);
    let refined = {};
    let currentRaw = this.currentCalendarOptionsInput;
    let currentRefined = this.currentCalendarOptionsRefined;
    let anyChanges = false;

    for (let optionName in raw) {
      if (optionName !== 'plugins') {
        // because plugins is special-cased
        if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && optionName in currentRaw && COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName])) {
          refined[optionName] = currentRefined[optionName];
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
          anyChanges = true;
        } else {
          extra[optionName] = currentRaw[optionName];
        }
      }
    }

    if (anyChanges) {
      this.currentCalendarOptionsInput = raw;
      this.currentCalendarOptionsRefined = refined;
    }

    return {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks,
      availableLocaleData,
      localeDefaults,
      extra
    };
  }

  _computeCurrentViewData(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
    let viewSpec = optionsData.viewSpecs[viewType];

    if (!viewSpec) {
      throw new Error(`viewType "${viewType}" is not available. Please make sure you've loaded all neccessary plugins`);
    }

    let {
      refinedOptions,
      extra
    } = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides);
    warnUnknownOptions(extra);
    let dateProfileGenerator = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
      duration: viewSpec.duration,
      durationUnit: viewSpec.durationUnit,
      usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
      dateEnv: optionsData.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: refinedOptions.slotMinTime,
      slotMaxTime: refinedOptions.slotMaxTime,
      showNonCurrentDates: refinedOptions.showNonCurrentDates,
      dayCount: refinedOptions.dayCount,
      dateAlignment: refinedOptions.dateAlignment,
      dateIncrement: refinedOptions.dateIncrement,
      hiddenDays: refinedOptions.hiddenDays,
      weekends: refinedOptions.weekends,
      nowInput: refinedOptions.now,
      validRangeInput: refinedOptions.validRange,
      visibleRangeInput: refinedOptions.visibleRange,
      monthMode: refinedOptions.monthMode,
      fixedWeekCount: refinedOptions.fixedWeekCount
    });
    let viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
    return {
      viewSpec,
      options: refinedOptions,
      dateProfileGenerator,
      viewApi
    };
  }

  processRawViewOptions(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
    let raw = mergeRawOptions([BASE_OPTION_DEFAULTS, viewSpec.optionDefaults, localeDefaults, optionOverrides, viewSpec.optionOverrides, dynamicOptionOverrides]);
    let refiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    let refined = {};
    let currentRaw = this.currentViewOptionsInput;
    let currentRefined = this.currentViewOptionsRefined;
    let anyChanges = false;
    let extra = {};

    for (let optionName in raw) {
      if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], currentRaw[optionName])) {
        refined[optionName] = currentRefined[optionName];
      } else {
        if (raw[optionName] === this.currentCalendarOptionsInput[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName])) {
          if (optionName in this.currentCalendarOptionsRefined) {
            // might be an "extra" prop
            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
          }
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
        } else {
          extra[optionName] = raw[optionName];
        }

        anyChanges = true;
      }
    }

    if (anyChanges) {
      this.currentViewOptionsInput = raw;
      this.currentViewOptionsRefined = refined;
    }

    return {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra
    };
  }

}

function buildDateEnv(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
  let locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new DateEnv({
    calendarSystem: 'gregory',
    timeZone,
    namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
    locale,
    weekNumberCalculation,
    firstDay,
    weekText,
    cmdFormatter: pluginHooks.cmdFormatter,
    defaultSeparator
  });
}

function buildTheme(options, pluginHooks) {
  let ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
  return new ThemeClass(options);
}

function buildDateProfileGenerator(props) {
  let DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
  return new DateProfileGeneratorClass(props);
}

function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewApi(type, getCurrentData, dateEnv);
}

function buildEventUiBySource(eventSources) {
  return mapHash(eventSources, eventSource => eventSource.ui);
}

function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  let eventUiBases = {
    '': eventUiSingleBase
  };

  for (let defId in eventDefs) {
    let def = eventDefs[defId];

    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }

  return eventUiBases;
}

function buildViewUiProps(calendarContext) {
  let {
    options
  } = calendarContext;
  return {
    eventUiSingleBase: createEventUi({
      display: options.eventDisplay,
      editable: options.editable,
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
      allow: options.eventAllow,
      backgroundColor: options.eventBackgroundColor,
      borderColor: options.eventBorderColor,
      textColor: options.eventTextColor,
      color: options.eventColor // classNames: options.eventClassNames // render hook will handle this

    }, calendarContext),
    selectionConfig: createEventUi({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
      allow: options.selectAllow
    }, calendarContext)
  };
}

function computeIsLoading(state, context) {
  for (let isLoadingFunc of context.pluginHooks.isLoadingFuncs) {
    if (isLoadingFunc(state)) {
      return true;
    }
  }

  return false;
}

function parseContextBusinessHours(calendarContext) {
  return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}

function warnUnknownOptions(options, viewName) {
  for (let optionName in options) {
    console.warn(`Unknown option '${optionName}'` + (viewName ? ` for view '${viewName}'` : ''));
  }
} // TODO: move this to react plugin?


class CalendarDataProvider extends _vdom_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    this.handleData = data => {
      if (!this.dataManager) {
        // still within initial run, before assignment in constructor
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state = data; // can't use setState yet
      } else {
        this.setState(data);
      }
    };

    this.dataManager = new CalendarDataManager({
      optionOverrides: props.optionOverrides,
      calendarApi: props.calendarApi,
      onData: this.handleData
    });
  }

  render() {
    return this.props.children(this.state);
  }

  componentDidUpdate(prevProps) {
    let newOptionOverrides = this.props.optionOverrides;

    if (newOptionOverrides !== prevProps.optionOverrides) {
      // prevent recursive handleData
      this.dataManager.resetOptions(newOptionOverrides);
    }
  }

} // HELPERS

/*
if nextDayThreshold is specified, slicing is done in an all-day fashion.
you can get nextDayThreshold from context.nextDayThreshold
*/


function sliceEvents(props, allDay) {
  return sliceEventStore(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
}

class NamedTimeZoneImpl {
  constructor(timeZoneName) {
    this.timeZoneName = timeZoneName;
  }

}

class SegHierarchy {
  constructor() {
    // settings
    this.strictOrder = false;
    this.allowReslicing = false;
    this.maxCoord = -1; // -1 means no max

    this.maxStackCnt = -1; // -1 means no max

    this.levelCoords = []; // ordered

    this.entriesByLevel = []; // parallel with levelCoords

    this.stackCnts = {}; // TODO: use better technique!?
  }

  addSegs(inputs) {
    let hiddenEntries = [];

    for (let input of inputs) {
      this.insertEntry(input, hiddenEntries);
    }

    return hiddenEntries;
  }

  insertEntry(entry, hiddenEntries) {
    let insertion = this.findInsertion(entry);

    if (this.isInsertionValid(insertion, entry)) {
      this.insertEntryAt(entry, insertion);
      return 1;
    }

    return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
  }

  isInsertionValid(insertion, entry) {
    return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
  } // returns number of new entries inserted


  handleInvalidInsertion(insertion, entry, hiddenEntries) {
    if (this.allowReslicing && insertion.touchingEntry) {
      return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
    }

    hiddenEntries.push(entry);
    return 0;
  }

  splitEntry(entry, barrier, hiddenEntries) {
    let partCnt = 0;
    let splitHiddenEntries = [];
    let entrySpan = entry.span;
    let barrierSpan = barrier.span;

    if (entrySpan.start < barrierSpan.start) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: {
          start: entrySpan.start,
          end: barrierSpan.start
        }
      }, splitHiddenEntries);
    }

    if (entrySpan.end > barrierSpan.end) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: {
          start: barrierSpan.end,
          end: entrySpan.end
        }
      }, splitHiddenEntries);
    }

    if (partCnt) {
      hiddenEntries.push({
        index: entry.index,
        thickness: entry.thickness,
        span: intersectSpans(barrierSpan, entrySpan) // guaranteed to intersect

      }, ...splitHiddenEntries);
      return partCnt;
    }

    hiddenEntries.push(entry);
    return 0;
  }

  insertEntryAt(entry, insertion) {
    let {
      entriesByLevel,
      levelCoords
    } = this;

    if (insertion.lateral === -1) {
      // create a new level
      insertAt(levelCoords, insertion.level, insertion.levelCoord);
      insertAt(entriesByLevel, insertion.level, [entry]);
    } else {
      // insert into existing level
      insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
    }

    this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
  }

  findInsertion(newEntry) {
    let {
      levelCoords,
      entriesByLevel,
      strictOrder,
      stackCnts
    } = this;
    let levelCnt = levelCoords.length;
    let candidateCoord = 0;
    let touchingLevel = -1;
    let touchingLateral = -1;
    let touchingEntry = null;
    let stackCnt = 0;

    for (let trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
      let trackingCoord = levelCoords[trackingLevel]; // if the current level is past the placed entry, we have found a good empty space and can stop.
      // if strictOrder, keep finding more lateral intersections.

      if (!strictOrder && trackingCoord >= candidateCoord + newEntry.thickness) {
        break;
      }

      let trackingEntries = entriesByLevel[trackingLevel];
      let trackingEntry;
      let searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end

      let lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one

      while ( // loop through entries that horizontally intersect
      (trackingEntry = trackingEntries[lateralIndex]) && // but not past the whole entry list
      trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
      ) {
        let trackingEntryBottom = trackingCoord + trackingEntry.thickness; // intersects into the top of the candidate?

        if (trackingEntryBottom > candidateCoord) {
          candidateCoord = trackingEntryBottom;
          touchingEntry = trackingEntry;
          touchingLevel = trackingLevel;
          touchingLateral = lateralIndex;
        } // butts up against top of candidate? (will happen if just intersected as well)


        if (trackingEntryBottom === candidateCoord) {
          // accumulate the highest possible stackCnt of the trackingEntries that butt up
          stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
        }

        lateralIndex += 1;
      }
    } // the destination level will be after touchingEntry's level. find it


    let destLevel = 0;

    if (touchingEntry) {
      destLevel = touchingLevel + 1;

      while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
        destLevel += 1;
      }
    } // if adding to an existing level, find where to insert


    let destLateral = -1;

    if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
      destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
    }

    return {
      touchingLevel,
      touchingLateral,
      touchingEntry,
      stackCnt,
      levelCoord: candidateCoord,
      level: destLevel,
      lateral: destLateral
    };
  } // sorted by levelCoord (lowest to highest)


  toRects() {
    let {
      entriesByLevel,
      levelCoords
    } = this;
    let levelCnt = entriesByLevel.length;
    let rects = [];

    for (let level = 0; level < levelCnt; level += 1) {
      let entries = entriesByLevel[level];
      let levelCoord = levelCoords[level];

      for (let entry of entries) {
        rects.push(Object.assign(Object.assign({}, entry), {
          levelCoord
        }));
      }
    }

    return rects;
  }

}

function getEntrySpanEnd(entry) {
  return entry.span.end;
}

function buildEntryKey(entry) {
  return entry.index + ':' + entry.span.start;
} // returns groups with entries sorted by input order


function groupIntersectingEntries(entries) {
  let merges = [];

  for (let entry of entries) {
    let filteredMerges = [];
    let hungryMerge = {
      span: entry.span,
      entries: [entry]
    };

    for (let merge of merges) {
      if (intersectSpans(merge.span, hungryMerge.span)) {
        hungryMerge = {
          entries: merge.entries.concat(hungryMerge.entries),
          span: joinSpans(merge.span, hungryMerge.span)
        };
      } else {
        filteredMerges.push(merge);
      }
    }

    filteredMerges.push(hungryMerge);
    merges = filteredMerges;
  }

  return merges;
}

function joinSpans(span0, span1) {
  return {
    start: Math.min(span0.start, span1.start),
    end: Math.max(span0.end, span1.end)
  };
}

function intersectSpans(span0, span1) {
  let start = Math.max(span0.start, span1.start);
  let end = Math.min(span0.end, span1.end);

  if (start < end) {
    return {
      start,
      end
    };
  }

  return null;
} // general util
// ---------------------------------------------------------------------------------------------------------------------


function insertAt(arr, index, item) {
  arr.splice(index, 0, item);
}

function binarySearch(a, searchVal, getItemVal) {
  let startIndex = 0;
  let endIndex = a.length; // exclusive

  if (!endIndex || searchVal < getItemVal(a[startIndex])) {
    // no items OR before first item
    return [0, 0];
  }

  if (searchVal > getItemVal(a[endIndex - 1])) {
    // after last item
    return [endIndex, 0];
  }

  while (startIndex < endIndex) {
    let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    let middleVal = getItemVal(a[middleIndex]);

    if (searchVal < middleVal) {
      endIndex = middleIndex;
    } else if (searchVal > middleVal) {
      startIndex = middleIndex + 1;
    } else {
      // equal!
      return [middleIndex, 1];
    }
  }

  return [startIndex, 0];
}

class Interaction {
  constructor(settings) {
    this.component = settings.component;
    this.isHitComboAllowed = settings.isHitComboAllowed || null;
  }

  destroy() {}

}

function parseInteractionSettings(component, input) {
  return {
    component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
    isHitComboAllowed: input.isHitComboAllowed || null
  };
}

function interactionSettingsToStore(settings) {
  return {
    [settings.component.uid]: settings
  };
} // global state


const interactionSettingsStore = {};
/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/

class ElementDragging {
  constructor(el, selector) {
    this.emitter = new Emitter();
  }

  destroy() {}

  setMirrorIsVisible(bool) {// optional if subclass doesn't want to support a mirror
  }

  setMirrorNeedsRevert(bool) {// optional if subclass doesn't want to support a mirror
  }

  setAutoScrollEnabled(bool) {// optional
  }

} // TODO: get rid of this in favor of options system,
// tho it's really easy to access this globally rather than pass thru options.


const config = {};
/*
Information about what will happen when an external element is dragged-and-dropped
onto a calendar. Contains information for creating an event.
*/

const DRAG_META_REFINERS = {
  startTime: createDuration,
  duration: createDuration,
  create: Boolean,
  sourceId: String
};

function parseDragMeta(raw) {
  let {
    refined,
    extra
  } = refineProps(raw, DRAG_META_REFINERS);
  return {
    startTime: refined.startTime || null,
    duration: refined.duration || null,
    create: refined.create != null ? refined.create : true,
    sourceId: refined.sourceId,
    leftoverProps: extra
  };
}

class ToolbarSection extends BaseComponent {
  render() {
    let children = this.props.widgetGroups.map(widgetGroup => this.renderWidgetGroup(widgetGroup));
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
      className: 'fc-toolbar-chunk'
    }, ...children);
  }

  renderWidgetGroup(widgetGroup) {
    let {
      props
    } = this;
    let {
      theme
    } = this.context;
    let children = [];
    let isOnlyButtons = true;

    for (let widget of widgetGroup) {
      let {
        buttonName,
        buttonClick,
        buttonText,
        buttonIcon,
        buttonHint
      } = widget;

      if (buttonName === 'title') {
        isOnlyButtons = false;
        children.push((0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
          className: "fc-toolbar-title",
          id: props.titleId
        }, props.title));
      } else {
        let isPressed = buttonName === props.activeButton;
        let isDisabled = !props.isTodayEnabled && buttonName === 'today' || !props.isPrevEnabled && buttonName === 'prev' || !props.isNextEnabled && buttonName === 'next';
        let buttonClasses = [`fc-${buttonName}-button`, theme.getClass('button')];

        if (isPressed) {
          buttonClasses.push(theme.getClass('buttonActive'));
        }

        children.push((0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          type: "button",
          title: typeof buttonHint === 'function' ? buttonHint(props.navUnit) : buttonHint,
          disabled: isDisabled,
          "aria-pressed": isPressed,
          className: buttonClasses.join(' '),
          onClick: buttonClick
        }, buttonText || (buttonIcon ? (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: buttonIcon
        }) : '')));
      }
    }

    if (children.length > 1) {
      let groupClassName = isOnlyButtons && theme.getClass('buttonGroup') || '';
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
        className: groupClassName
      }, ...children);
    }

    return children[0];
  }

}

class Toolbar extends BaseComponent {
  render() {
    let {
      model,
      extraClassName
    } = this.props;
    let forceLtr = false;
    let startContent;
    let endContent;
    let sectionWidgets = model.sectionWidgets;
    let centerContent = sectionWidgets.center;

    if (sectionWidgets.left) {
      forceLtr = true;
      startContent = sectionWidgets.left;
    } else {
      startContent = sectionWidgets.start;
    }

    if (sectionWidgets.right) {
      forceLtr = true;
      endContent = sectionWidgets.right;
    } else {
      endContent = sectionWidgets.end;
    }

    let classNames = [extraClassName || '', 'fc-toolbar', forceLtr ? 'fc-toolbar-ltr' : ''];
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames.join(' ')
    }, this.renderSection('start', startContent || []), this.renderSection('center', centerContent || []), this.renderSection('end', endContent || []));
  }

  renderSection(key, widgetGroups) {
    let {
      props
    } = this;
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarSection, {
      key: key,
      widgetGroups: widgetGroups,
      title: props.title,
      navUnit: props.navUnit,
      activeButton: props.activeButton,
      isTodayEnabled: props.isTodayEnabled,
      isPrevEnabled: props.isPrevEnabled,
      isNextEnabled: props.isNextEnabled,
      titleId: props.titleId
    });
  }

} // TODO: do function component?


class ViewContainer extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      availableWidth: null
    };

    this.handleEl = el => {
      this.el = el;
      setRef(this.props.elRef, el);
      this.updateAvailableWidth();
    };

    this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }

  render() {
    let {
      props,
      state
    } = this;
    let {
      aspectRatio
    } = props;
    let classNames = ['fc-view-harness', aspectRatio || props.liquid || props.height ? 'fc-view-harness-active' // harness controls the height
    : 'fc-view-harness-passive' // let the view do the height
    ];
    let height = '';
    let paddingBottom = '';

    if (aspectRatio) {
      if (state.availableWidth !== null) {
        height = state.availableWidth / aspectRatio;
      } else {
        // while waiting to know availableWidth, we can't set height to *zero*
        // because will cause lots of unnecessary scrollbars within scrollgrid.
        // BETTER: don't start rendering ANYTHING yet until we know container width
        // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
        paddingBottom = `${1 / aspectRatio * 100}%`;
      }
    } else {
      height = props.height || '';
    }

    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "aria-labelledby": props.labeledById,
      ref: this.handleEl,
      className: classNames.join(' '),
      style: {
        height,
        paddingBottom
      }
    }, props.children);
  }

  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }

  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }

  updateAvailableWidth() {
    if (this.el && // needed. but why?
    this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
    ) {
      this.setState({
        availableWidth: this.el.offsetWidth
      });
    }
  }

}
/*
Detects when the user clicks on an event within a DateComponent
*/


class EventClicking extends Interaction {
  constructor(settings) {
    super(settings);

    this.handleSegClick = (ev, segEl) => {
      let {
        component
      } = this;
      let {
        context
      } = component;
      let seg = getElSeg(segEl);

      if (seg && // might be the <div> surrounding the more link
      component.isValidSegDownEl(ev.target)) {
        // our way to simulate a link click for elements that can't be <a> tags
        // grab before trigger fired in case trigger trashes DOM thru rerendering
        let hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
        let url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
        context.emitter.trigger('eventClick', {
          el: segEl,
          event: new EventApi(component.context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });

        if (url && !ev.defaultPrevented) {
          window.location.href = url;
        }
      }
    };

    this.destroy = listenBySelector(settings.el, 'click', '.fc-event', // on both fg and bg events
    this.handleSegClick);
  }

}
/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/


class EventHovering extends Interaction {
  constructor(settings) {
    super(settings); // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it

    this.handleEventElRemove = el => {
      if (el === this.currentSegEl) {
        this.handleSegLeave(null, this.currentSegEl);
      }
    };

    this.handleSegEnter = (ev, segEl) => {
      if (getElSeg(segEl)) {
        // TODO: better way to make sure not hovering over more+ link or its wrapper
        this.currentSegEl = segEl;
        this.triggerEvent('eventMouseEnter', ev, segEl);
      }
    };

    this.handleSegLeave = (ev, segEl) => {
      if (this.currentSegEl) {
        this.currentSegEl = null;
        this.triggerEvent('eventMouseLeave', ev, segEl);
      }
    };

    this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', // on both fg and bg events
    this.handleSegEnter, this.handleSegLeave);
  }

  destroy() {
    this.removeHoverListeners();
  }

  triggerEvent(publicEvName, ev, segEl) {
    let {
      component
    } = this;
    let {
      context
    } = component;
    let seg = getElSeg(segEl);

    if (!ev || component.isValidSegDownEl(ev.target)) {
      context.emitter.trigger(publicEvName, {
        el: segEl,
        event: new EventApi(context, seg.eventRange.def, seg.eventRange.instance),
        jsEvent: ev,
        view: context.viewApi
      });
    }
  }

}

class CalendarContent extends PureComponent {
  constructor() {
    super(...arguments);
    this.buildViewContext = memoize(buildViewContext);
    this.buildViewPropTransformers = memoize(buildViewPropTransformers);
    this.buildToolbarProps = memoize(buildToolbarProps);
    this.headerRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.footerRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.interactionsStore = {}; // eslint-disable-next-line

    this.state = {
      viewLabelId: getUniqueDomId()
    }; // Component Registration
    // -----------------------------------------------------------------------------------------------------------------

    this.registerInteractiveComponent = (component, settingsInput) => {
      let settings = parseInteractionSettings(component, settingsInput);
      let DEFAULT_INTERACTIONS = [EventClicking, EventHovering];
      let interactionClasses = DEFAULT_INTERACTIONS.concat(this.props.pluginHooks.componentInteractions);
      let interactions = interactionClasses.map(TheInteractionClass => new TheInteractionClass(settings));
      this.interactionsStore[component.uid] = interactions;
      interactionSettingsStore[component.uid] = settings;
    };

    this.unregisterInteractiveComponent = component => {
      let listeners = this.interactionsStore[component.uid];

      if (listeners) {
        for (let listener of listeners) {
          listener.destroy();
        }

        delete this.interactionsStore[component.uid];
      }

      delete interactionSettingsStore[component.uid];
    }; // Resizing
    // -----------------------------------------------------------------------------------------------------------------


    this.resizeRunner = new DelayedRunner(() => {
      this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?

      this.props.emitter.trigger('windowResize', {
        view: this.props.viewApi
      });
    });

    this.handleWindowResize = ev => {
      let {
        options
      } = this.props;

      if (options.handleWindowResize && ev.target === window // avoid jqui events
      ) {
        this.resizeRunner.request(options.windowResizeDelay);
      }
    };
  }
  /*
  renders INSIDE of an outer div
  */


  render() {
    let {
      props
    } = this;
    let {
      toolbarConfig,
      options
    } = props;
    let toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), // TODO: use NowTimer????
    props.viewTitle);
    let viewVGrow = false;
    let viewHeight = '';
    let viewAspectRatio;

    if (props.isHeightAuto || props.forPrint) {
      viewHeight = '';
    } else if (options.height != null) {
      viewVGrow = true;
    } else if (options.contentHeight != null) {
      viewHeight = options.contentHeight;
    } else {
      viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
    }

    let viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
    let viewLabelId = toolbarConfig.header && toolbarConfig.header.hasTitle ? this.state.viewLabelId : '';
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Provider, {
      value: viewContext
    }, toolbarConfig.header && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, Object.assign({
      ref: this.headerRef,
      extraClassName: "fc-header-toolbar",
      model: toolbarConfig.header,
      titleId: viewLabelId
    }, toolbarProps)), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContainer, {
      liquid: viewVGrow,
      height: viewHeight,
      aspectRatio: viewAspectRatio,
      labeledById: viewLabelId
    }, this.renderView(props), this.buildAppendContent()), toolbarConfig.footer && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, Object.assign({
      ref: this.footerRef,
      extraClassName: "fc-footer-toolbar",
      model: toolbarConfig.footer,
      titleId: ""
    }, toolbarProps)));
  }

  componentDidMount() {
    let {
      props
    } = this;
    this.calendarInteractions = props.pluginHooks.calendarInteractions.map(CalendarInteractionClass => new CalendarInteractionClass(props));
    window.addEventListener('resize', this.handleWindowResize);
    let {
      propSetHandlers
    } = props.pluginHooks;

    for (let propName in propSetHandlers) {
      propSetHandlers[propName](props[propName], props);
    }
  }

  componentDidUpdate(prevProps) {
    let {
      props
    } = this;
    let {
      propSetHandlers
    } = props.pluginHooks;

    for (let propName in propSetHandlers) {
      if (props[propName] !== prevProps[propName]) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    this.resizeRunner.clear();

    for (let interaction of this.calendarInteractions) {
      interaction.destroy();
    }

    this.props.emitter.trigger('_unmount');
  }

  buildAppendContent() {
    let {
      props
    } = this;
    let children = props.pluginHooks.viewContainerAppends.map(buildAppendContent => buildAppendContent(props));
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, ...children);
  }

  renderView(props) {
    let {
      pluginHooks
    } = props;
    let {
      viewSpec
    } = props;
    let viewProps = {
      dateProfile: props.dateProfile,
      businessHours: props.businessHours,
      eventStore: props.renderableEventStore,
      eventUiBases: props.eventUiBases,
      dateSelection: props.dateSelection,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      isHeightAuto: props.isHeightAuto,
      forPrint: props.forPrint
    };
    let transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);

    for (let transformer of transformers) {
      (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(viewProps, transformer.transform(viewProps, props));
    }

    let ViewComponent = viewSpec.component;
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewComponent, Object.assign({}, viewProps));
  }

}

function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
  // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
  let todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason

  let prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
  let nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
  return {
    title,
    activeButton: viewSpec.type,
    navUnit: viewSpec.singleUnit,
    isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
} // Plugin
// -----------------------------------------------------------------------------------------------------------------


function buildViewPropTransformers(theClasses) {
  return theClasses.map(TheClass => new TheClass());
}

class CalendarRoot extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      forPrint: false
    };

    this.handleBeforePrint = () => {
      this.setState({
        forPrint: true
      });
    };

    this.handleAfterPrint = () => {
      this.setState({
        forPrint: false
      });
    };
  }

  render() {
    let {
      props
    } = this;
    let {
      options
    } = props;
    let {
      forPrint
    } = this.state;
    let isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
    let height = !isHeightAuto && options.height != null ? options.height : '';
    let classNames = ['fc', forPrint ? 'fc-media-print' : 'fc-media-screen', `fc-direction-${options.direction}`, props.theme.getClass('root')];

    if (!getCanVGrowWithinCell()) {
      classNames.push('fc-liquid-hack');
    }

    return props.children(classNames, height, isHeightAuto, forPrint);
  }

  componentDidMount() {
    let {
      emitter
    } = this.props;
    emitter.on('_beforeprint', this.handleBeforePrint);
    emitter.on('_afterprint', this.handleAfterPrint);
  }

  componentWillUnmount() {
    let {
      emitter
    } = this.props;
    emitter.off('_beforeprint', this.handleBeforePrint);
    emitter.off('_afterprint', this.handleAfterPrint);
  }

} // Computes a default column header formatting string if `colFormat` is not explicitly defined


function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  // if more than one week row, or if there are a lot of columns with not much space,
  // put just the day numbers will be in each cell
  if (!datesRepDistinctDays || dayCnt > 10) {
    return createFormatter({
      weekday: 'short'
    }); // "Sat"
  }

  if (dayCnt > 1) {
    return createFormatter({
      weekday: 'short',
      month: 'numeric',
      day: 'numeric',
      omitCommas: true
    }); // "Sat 11/12"
  }

  return createFormatter({
    weekday: 'long'
  }); // "Saturday"
}

const CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no

function renderInner$1(hookProps) {
  return hookProps.text;
}

class TableDateCell extends BaseComponent {
  render() {
    let {
      dateEnv,
      options,
      theme,
      viewApi
    } = this.context;
    let {
      props
    } = this;
    let {
      date,
      dateProfile
    } = props;
    let dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
    let classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
    let text = dateEnv.format(date, props.dayHeaderFormat); // if colCnt is 1, we are already in a day-view and don't need a navlink

    let navLinkAttrs = !dayMeta.isDisabled && props.colCnt > 1 ? buildNavLinkAttrs(this.context, date) : {};
    let hookProps = Object.assign(Object.assign(Object.assign({
      date: dateEnv.toDate(date),
      view: viewApi
    }, props.extraHookProps), {
      text
    }), dayMeta);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderHook, {
      hookProps: hookProps,
      classNames: options.dayHeaderClassNames,
      content: options.dayHeaderContent,
      defaultContent: renderInner$1,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, (rootElRef, customClassNames, innerElRef, innerContent) => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", Object.assign({
      ref: rootElRef,
      role: "columnheader",
      className: classNames.concat(customClassNames).join(' '),
      "data-date": !dayMeta.isDisabled ? formatDayString(date) : undefined,
      colSpan: props.colSpan
    }, props.extraDataAttrs), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-scrollgrid-sync-inner"
    }, !dayMeta.isDisabled && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", Object.assign({
      ref: innerElRef,
      className: ['fc-col-header-cell-cushion', props.isSticky ? 'fc-sticky' : ''].join(' ')
    }, navLinkAttrs), innerContent))));
  }

}

const WEEKDAY_FORMAT = createFormatter({
  weekday: 'long'
});

class TableDowCell extends BaseComponent {
  render() {
    let {
      props
    } = this;
    let {
      dateEnv,
      theme,
      viewApi,
      options
    } = this.context;
    let date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT

    let dateMeta = {
      dow: props.dow,
      isDisabled: false,
      isFuture: false,
      isPast: false,
      isToday: false,
      isOther: false
    };
    let classNames = [CLASS_NAME].concat(getDayClassNames(dateMeta, theme), props.extraClassNames || []);
    let text = dateEnv.format(date, props.dayHeaderFormat);
    let hookProps = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date
    }, dateMeta), {
      view: viewApi
    }), props.extraHookProps), {
      text
    });
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderHook, {
      hookProps: hookProps,
      classNames: options.dayHeaderClassNames,
      content: options.dayHeaderContent,
      defaultContent: renderInner$1,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, (rootElRef, customClassNames, innerElRef, innerContent) => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", Object.assign({
      ref: rootElRef,
      role: "columnheader",
      className: classNames.concat(customClassNames).join(' '),
      colSpan: props.colSpan
    }, props.extraDataAttrs), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-scrollgrid-sync-inner"
    }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      "aria-label": dateEnv.format(date, WEEKDAY_FORMAT),
      className: ['fc-col-header-cell-cushion', props.isSticky ? 'fc-sticky' : ''].join(' '),
      ref: innerElRef
    }, innerContent))));
  }

}

class NowTimer extends _vdom_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props, context) {
    super(props, context);
    this.initialNowDate = getNow(context.options.now, context.dateEnv);
    this.initialNowQueriedMs = new Date().valueOf();
    this.state = this.computeTiming().currentState;
  }

  render() {
    let {
      props,
      state
    } = this;
    return props.children(state.nowDate, state.todayRange);
  }

  componentDidMount() {
    this.setTimeout();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.unit !== this.props.unit) {
      this.clearTimeout();
      this.setTimeout();
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  computeTiming() {
    let {
      props,
      context
    } = this;
    let unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
    let currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
    let nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
    let waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf(); // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
    // ensure no longer than a day

    waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
    return {
      currentState: {
        nowDate: currentUnitStart,
        todayRange: buildDayRange(currentUnitStart)
      },
      nextState: {
        nowDate: nextUnitStart,
        todayRange: buildDayRange(nextUnitStart)
      },
      waitMs
    };
  }

  setTimeout() {
    let {
      nextState,
      waitMs
    } = this.computeTiming();
    this.timeoutId = setTimeout(() => {
      this.setState(nextState, () => {
        this.setTimeout();
      });
    }, waitMs);
  }

  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

}

NowTimer.contextType = ViewContextType;

function buildDayRange(date) {
  let start = startOfDay(date);
  let end = addDays(start, 1);
  return {
    start,
    end
  };
}

class DayHeader extends BaseComponent {
  constructor() {
    super(...arguments);
    this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
  }

  render() {
    let {
      context
    } = this;
    let {
      dates,
      dateProfile,
      datesRepDistinctDays,
      renderIntro
    } = this.props;
    let dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(NowTimer, {
      unit: "day"
    }, (nowDate, todayRange) => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      role: "row"
    }, renderIntro && renderIntro('day'), dates.map(date => datesRepDistinctDays ? (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableDateCell, {
      key: date.toISOString(),
      date: date,
      dateProfile: dateProfile,
      todayRange: todayRange,
      colCnt: dates.length,
      dayHeaderFormat: dayHeaderFormat
    }) : (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableDowCell, {
      key: date.getUTCDay(),
      dow: date.getUTCDay(),
      dayHeaderFormat: dayHeaderFormat
    }))));
  }

}

function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}

class DaySeriesModel {
  constructor(range, dateProfileGenerator) {
    let date = range.start;
    let {
      end
    } = range;
    let indices = [];
    let dates = [];
    let dayIndex = -1;

    while (date < end) {
      // loop each day from start to end
      if (dateProfileGenerator.isHiddenDay(date)) {
        indices.push(dayIndex + 0.5); // mark that it's between indices
      } else {
        dayIndex += 1;
        indices.push(dayIndex);
        dates.push(date);
      }

      date = addDays(date, 1);
    }

    this.dates = dates;
    this.indices = indices;
    this.cnt = dates.length;
  }

  sliceRange(range) {
    let firstIndex = this.getDateDayIndex(range.start); // inclusive first index

    let lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index

    let clippedFirstIndex = Math.max(0, firstIndex);
    let clippedLastIndex = Math.min(this.cnt - 1, lastIndex); // deal with in-between indices

    clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell

    clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell

    if (clippedFirstIndex <= clippedLastIndex) {
      return {
        firstIndex: clippedFirstIndex,
        lastIndex: clippedLastIndex,
        isStart: firstIndex === clippedFirstIndex,
        isEnd: lastIndex === clippedLastIndex
      };
    }

    return null;
  } // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.


  getDateDayIndex(date) {
    let {
      indices
    } = this;
    let dayOffset = Math.floor(diffDays(this.dates[0], date));

    if (dayOffset < 0) {
      return indices[0] - 1;
    }

    if (dayOffset >= indices.length) {
      return indices[indices.length - 1] + 1;
    }

    return indices[dayOffset];
  }

}

class DayTableModel {
  constructor(daySeries, breakOnWeeks) {
    let {
      dates
    } = daySeries;
    let daysPerRow;
    let firstDay;
    let rowCnt;

    if (breakOnWeeks) {
      // count columns until the day-of-week repeats
      firstDay = dates[0].getUTCDay();

      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }

      rowCnt = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCnt = 1;
      daysPerRow = dates.length;
    }

    this.rowCnt = rowCnt;
    this.colCnt = daysPerRow;
    this.daySeries = daySeries;
    this.cells = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }

  buildCells() {
    let rows = [];

    for (let row = 0; row < this.rowCnt; row += 1) {
      let cells = [];

      for (let col = 0; col < this.colCnt; col += 1) {
        cells.push(this.buildCell(row, col));
      }

      rows.push(cells);
    }

    return rows;
  }

  buildCell(row, col) {
    let date = this.daySeries.dates[row * this.colCnt + col];
    return {
      key: date.toISOString(),
      date
    };
  }

  buildHeaderDates() {
    let dates = [];

    for (let col = 0; col < this.colCnt; col += 1) {
      dates.push(this.cells[0][col].date);
    }

    return dates;
  }

  sliceRange(range) {
    let {
      colCnt
    } = this;
    let seriesSeg = this.daySeries.sliceRange(range);
    let segs = [];

    if (seriesSeg) {
      let {
        firstIndex,
        lastIndex
      } = seriesSeg;
      let index = firstIndex;

      while (index <= lastIndex) {
        let row = Math.floor(index / colCnt);
        let nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
        segs.push({
          row,
          firstCol: index % colCnt,
          lastCol: (nextIndex - 1) % colCnt,
          isStart: seriesSeg.isStart && index === firstIndex,
          isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
        });
        index = nextIndex;
      }
    }

    return segs;
  }

}

class Slicer {
  constructor() {
    this.sliceBusinessHours = memoize(this._sliceBusinessHours);
    this.sliceDateSelection = memoize(this._sliceDateSpan);
    this.sliceEventStore = memoize(this._sliceEventStore);
    this.sliceEventDrag = memoize(this._sliceInteraction);
    this.sliceEventResize = memoize(this._sliceInteraction);
    this.forceDayIfListItem = false; // hack
  }

  sliceProps(props, dateProfile, nextDayThreshold, context, ...extraArgs) {
    let {
      eventUiBases
    } = props;
    let eventSegs = this.sliceEventStore(props.eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs);
    return {
      dateSelectionSegs: this.sliceDateSelection(props.dateSelection, eventUiBases, context, ...extraArgs),
      businessHourSegs: this.sliceBusinessHours(props.businessHours, dateProfile, nextDayThreshold, context, ...extraArgs),
      fgEventSegs: eventSegs.fg,
      bgEventSegs: eventSegs.bg,
      eventDrag: this.sliceEventDrag(props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
      eventResize: this.sliceEventResize(props.eventResize, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
      eventSelection: props.eventSelection
    }; // TODO: give interactionSegs?
  }

  sliceNowDate( // does not memoize
  date, context, ...extraArgs) {
    return this._sliceDateSpan({
      range: {
        start: date,
        end: addMs(date, 1)
      },
      allDay: false
    }, // add 1 ms, protect against null range
    {}, context, ...extraArgs);
  }

  _sliceBusinessHours(businessHours, dateProfile, nextDayThreshold, context, ...extraArgs) {
    if (!businessHours) {
      return [];
    }

    return this._sliceEventStore(expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold, ...extraArgs).bg;
  }

  _sliceEventStore(eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
    if (eventStore) {
      let rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      return {
        bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
        fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
      };
    }

    return {
      bg: [],
      fg: []
    };
  }

  _sliceInteraction(interaction, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
    if (!interaction) {
      return null;
    }

    let rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
    return {
      segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
      affectedInstances: interaction.affectedEvents.instances,
      isEvent: interaction.isEvent
    };
  }

  _sliceDateSpan(dateSpan, eventUiBases, context, ...extraArgs) {
    if (!dateSpan) {
      return [];
    }

    let eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
    let segs = this.sliceRange(dateSpan.range, ...extraArgs);

    for (let seg of segs) {
      seg.eventRange = eventRange;
    }

    return segs;
  }
  /*
  "complete" seg means it has component and eventRange
  */


  sliceEventRanges(eventRanges, extraArgs) {
    let segs = [];

    for (let eventRange of eventRanges) {
      segs.push(...this.sliceEventRange(eventRange, extraArgs));
    }

    return segs;
  }
  /*
  "complete" seg means it has component and eventRange
  */


  sliceEventRange(eventRange, extraArgs) {
    let dateRange = eventRange.range; // hack to make multi-day events that are being force-displayed as list-items to take up only one day

    if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
      dateRange = {
        start: dateRange.start,
        end: addDays(dateRange.start, 1)
      };
    }

    let segs = this.sliceRange(dateRange, ...extraArgs);

    for (let seg of segs) {
      seg.eventRange = eventRange;
      seg.isStart = eventRange.isStart && seg.isStart;
      seg.isEnd = eventRange.isEnd && seg.isEnd;
    }

    return segs;
  }

}
/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/


function computeActiveRange(dateProfile, isComponentAllDay) {
  let range = dateProfile.activeRange;

  if (isComponentAllDay) {
    return range;
  }

  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5) // 864e5 = ms in a day

  };
} // high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------


function isInteractionValid(interaction, dateProfile, context) {
  let {
    instances
  } = interaction.mutatedEvents;

  for (let instanceId in instances) {
    if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
      return false;
    }
  }

  return isNewPropsValid({
    eventDrag: interaction
  }, context); // HACK: the eventDrag props is used for ALL interactions
}

function isDateSelectionValid(dateSelection, dateProfile, context) {
  if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
    return false;
  }

  return isNewPropsValid({
    dateSelection
  }, context);
}

function isNewPropsValid(newProps, context) {
  let calendarState = context.getCurrentData();
  let props = Object.assign({
    businessHours: calendarState.businessHours,
    dateSelection: '',
    eventStore: calendarState.eventStore,
    eventUiBases: calendarState.eventUiBases,
    eventSelection: '',
    eventDrag: null,
    eventResize: null
  }, newProps);
  return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}

function isPropsValid(state, context, dateSpanMeta = {}, filterConfig) {
  if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }

  if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }

  return true;
} // Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------


function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
  let currentState = context.getCurrentData();
  let interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions

  let subjectEventStore = interaction.mutatedEvents;
  let subjectDefs = subjectEventStore.defs;
  let subjectInstances = subjectEventStore.instances;
  let subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : {
    '': currentState.selectionConfig
  });

  if (filterConfig) {
    subjectConfigs = mapHash(subjectConfigs, filterConfig);
  } // exclude the subject events. TODO: exclude defs too?


  let otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
  let otherDefs = otherEventStore.defs;
  let otherInstances = otherEventStore.instances;
  let otherConfigs = compileEventUis(otherDefs, state.eventUiBases);

  for (let subjectInstanceId in subjectInstances) {
    let subjectInstance = subjectInstances[subjectInstanceId];
    let subjectRange = subjectInstance.range;
    let subjectConfig = subjectConfigs[subjectInstance.defId];
    let subjectDef = subjectDefs[subjectInstance.defId]; // constraint

    if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
      return false;
    } // overlap


    let {
      eventOverlap
    } = context.options;
    let eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;

    for (let otherInstanceId in otherInstances) {
      let otherInstance = otherInstances[otherInstanceId]; // intersect! evaluate

      if (rangesIntersect(subjectRange, otherInstance.range)) {
        let otherOverlap = otherConfigs[otherInstance.defId].overlap; // consider the other event's overlap. only do this if the subject event is a "real" event

        if (otherOverlap === false && interaction.isEvent) {
          return false;
        }

        if (subjectConfig.overlap === false) {
          return false;
        }

        if (eventOverlapFunc && !eventOverlapFunc(new EventApi(context, otherDefs[otherInstance.defId], otherInstance), // still event
        new EventApi(context, subjectDef, subjectInstance))) {
          return false;
        }
      }
    } // allow (a function)


    let calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state

    for (let subjectAllow of subjectConfig.allows) {
      let subjectDateSpan = Object.assign(Object.assign({}, dateSpanMeta), {
        range: subjectInstance.range,
        allDay: subjectDef.allDay
      });
      let origDef = calendarEventStore.defs[subjectDef.defId];
      let origInstance = calendarEventStore.instances[subjectInstanceId];
      let eventApi;

      if (origDef) {
        // was previously in the calendar
        eventApi = new EventApi(context, origDef, origInstance);
      } else {
        // was an external event
        eventApi = new EventApi(context, subjectDef); // no instance, because had no dates
      }

      if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
        return false;
      }
    }
  }

  return true;
} // Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------


function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
  let relevantEventStore = state.eventStore;
  let relevantDefs = relevantEventStore.defs;
  let relevantInstances = relevantEventStore.instances;
  let selection = state.dateSelection;
  let selectionRange = selection.range;
  let {
    selectionConfig
  } = context.getCurrentData();

  if (filterConfig) {
    selectionConfig = filterConfig(selectionConfig);
  } // constraint


  if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
    return false;
  } // overlap


  let {
    selectOverlap
  } = context.options;
  let selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;

  for (let relevantInstanceId in relevantInstances) {
    let relevantInstance = relevantInstances[relevantInstanceId]; // intersect! evaluate

    if (rangesIntersect(selectionRange, relevantInstance.range)) {
      if (selectionConfig.overlap === false) {
        return false;
      }

      if (selectOverlapFunc && !selectOverlapFunc(new EventApi(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
        return false;
      }
    }
  } // allow (a function)


  for (let selectionAllow of selectionConfig.allows) {
    let fullDateSpan = Object.assign(Object.assign({}, dateSpanMeta), selection);

    if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
      return false;
    }
  }

  return true;
} // Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------


function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  for (let constraint of constraints) {
    if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
      return false;
    }
  }

  return true;
}

function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
otherEventStore, // for if constraint is an even group ID
businessHoursUnexpanded, // for if constraint is 'businessHours'
context) {
  if (constraint === 'businessHours') {
    return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
  }

  if (typeof constraint === 'string') {
    // an group ID
    return eventStoreToRanges(filterEventStoreDefs(otherEventStore, eventDef => eventDef.groupId === constraint));
  }

  if (typeof constraint === 'object' && constraint) {
    // non-null object
    return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
  }

  return []; // if it's false
} // TODO: move to event-store file?


function eventStoreToRanges(eventStore) {
  let {
    instances
  } = eventStore;
  let ranges = [];

  for (let instanceId in instances) {
    ranges.push(instances[instanceId].range);
  }

  return ranges;
} // TODO: move to geom file?


function anyRangesContainRange(outerRanges, innerRange) {
  for (let outerRange of outerRanges) {
    if (rangeContainsRange(outerRange, innerRange)) {
      return true;
    }
  }

  return false;
}

const VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;

class Scroller extends BaseComponent {
  constructor() {
    super(...arguments);

    this.handleEl = el => {
      this.el = el;
      setRef(this.props.elRef, el);
    };
  }

  render() {
    let {
      props
    } = this;
    let {
      liquid,
      liquidIsAbsolute
    } = props;
    let isAbsolute = liquid && liquidIsAbsolute;
    let className = ['fc-scroller'];

    if (liquid) {
      if (liquidIsAbsolute) {
        className.push('fc-scroller-liquid-absolute');
      } else {
        className.push('fc-scroller-liquid');
      }
    }

    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: this.handleEl,
      className: className.join(' '),
      style: {
        overflowX: props.overflowX,
        overflowY: props.overflowY,
        left: isAbsolute && -(props.overcomeLeft || 0) || '',
        right: isAbsolute && -(props.overcomeRight || 0) || '',
        bottom: isAbsolute && -(props.overcomeBottom || 0) || '',
        marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || '',
        marginRight: !isAbsolute && -(props.overcomeRight || 0) || '',
        marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || '',
        maxHeight: props.maxHeight || ''
      }
    }, props.children);
  }

  needsXScrolling() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return false;
    } // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning


    let {
      el
    } = this;
    let realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
    let {
      children
    } = el;

    for (let i = 0; i < children.length; i += 1) {
      let childEl = children[i];

      if (childEl.getBoundingClientRect().width > realClientWidth) {
        return true;
      }
    }

    return false;
  }

  needsYScrolling() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return false;
    } // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning


    let {
      el
    } = this;
    let realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
    let {
      children
    } = el;

    for (let i = 0; i < children.length; i += 1) {
      let childEl = children[i];

      if (childEl.getBoundingClientRect().height > realClientHeight) {
        return true;
      }
    }

    return false;
  }

  getXScrollbarWidth() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return 0;
    }

    return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
  }

  getYScrollbarWidth() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return 0;
    }

    return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
  }

}
/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/


class RefMap {
  constructor(masterCallback) {
    this.masterCallback = masterCallback;
    this.currentMap = {};
    this.depths = {};
    this.callbackMap = {};

    this.handleValue = (val, key) => {
      let {
        depths,
        currentMap
      } = this;
      let removed = false;
      let added = false;

      if (val !== null) {
        // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
        removed = key in currentMap;
        currentMap[key] = val;
        depths[key] = (depths[key] || 0) + 1;
        added = true;
      } else {
        depths[key] -= 1;

        if (!depths[key]) {
          delete currentMap[key];
          delete this.callbackMap[key];
          removed = true;
        }
      }

      if (this.masterCallback) {
        if (removed) {
          this.masterCallback(null, String(key));
        }

        if (added) {
          this.masterCallback(val, String(key));
        }
      }
    };
  }

  createRef(key) {
    let refCallback = this.callbackMap[key];

    if (!refCallback) {
      refCallback = this.callbackMap[key] = val => {
        this.handleValue(val, String(key));
      };
    }

    return refCallback;
  } // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"


  collect(startIndex, endIndex, step) {
    return collectFromHash(this.currentMap, startIndex, endIndex, step);
  }

  getAll() {
    return hashValuesToArray(this.currentMap);
  }

}

function computeShrinkWidth(chunkEls) {
  let shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
  let largestWidth = 0;

  for (let shrinkCell of shrinkCells) {
    largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
  }

  return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
}

function getSectionHasLiquidHeight(props, sectionConfig) {
  return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}

function getAllowYScrolling(props, sectionConfig) {
  return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
} // TODO: ONLY use `arg`. force out internal function to use same API


function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
  let {
    expandRows
  } = arg;
  let content = typeof chunkConfig.content === 'function' ? chunkConfig.content(arg) : (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('table', {
    role: 'presentation',
    className: [chunkConfig.tableClassName, sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : ''].join(' '),
    style: {
      minWidth: arg.tableMinWidth,
      width: arg.clientWidth,
      height: expandRows ? arg.clientHeight : '' // css `height` on a <table> serves as a min-height

    }
  }, arg.tableColGroupNode, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(isHeader ? 'thead' : 'tbody', {
    role: 'presentation'
  }, typeof chunkConfig.rowContent === 'function' ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
  return content;
}

function isColPropsEqual(cols0, cols1) {
  return isArraysEqual(cols0, cols1, isPropsEqual);
}

function renderMicroColGroup(cols, shrinkWidth) {
  let colNodes = [];
  /*
  for ColProps with spans, it would have been great to make a single <col span="">
  HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
  SOLUTION: making individual <col> elements makes Chrome behave.
  */

  for (let colProps of cols) {
    let span = colProps.span || 1;

    for (let i = 0; i < span; i += 1) {
      colNodes.push((0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("col", {
        style: {
          width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || '',
          minWidth: colProps.minWidth || ''
        }
      }));
    }
  }

  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('colgroup', {}, ...colNodes);
}

function sanitizeShrinkWidth(shrinkWidth) {
  /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
  4 accounts for 2 2-pixel borders. TODO: better solution? */
  return shrinkWidth == null ? 4 : shrinkWidth;
}

function hasShrinkWidth(cols) {
  for (let col of cols) {
    if (col.width === 'shrink') {
      return true;
    }
  }

  return false;
}

function getScrollGridClassNames(liquid, context) {
  let classNames = ['fc-scrollgrid', context.theme.getClass('table')];

  if (liquid) {
    classNames.push('fc-scrollgrid-liquid');
  }

  return classNames;
}

function getSectionClassNames(sectionConfig, wholeTableVGrow) {
  let classNames = ['fc-scrollgrid-section', `fc-scrollgrid-section-${sectionConfig.type}`, sectionConfig.className // used?
  ];

  if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
    classNames.push('fc-scrollgrid-section-liquid');
  }

  if (sectionConfig.isSticky) {
    classNames.push('fc-scrollgrid-section-sticky');
  }

  return classNames;
}

function renderScrollShim(arg) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-scrollgrid-sticky-shim",
    style: {
      width: arg.clientWidth,
      minWidth: arg.tableMinWidth
    }
  });
}

function getStickyHeaderDates(options) {
  let {
    stickyHeaderDates
  } = options;

  if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
    stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
  }

  return stickyHeaderDates;
}

function getStickyFooterScrollbar(options) {
  let {
    stickyFooterScrollbar
  } = options;

  if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
    stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
  }

  return stickyFooterScrollbar;
}

class SimpleScrollGrid extends BaseComponent {
  constructor() {
    super(...arguments);
    this.processCols = memoize(a => a, isColPropsEqual); // so we get same `cols` props every time
    // yucky to memoize VNodes, but much more efficient for consumers

    this.renderMicroColGroup = memoize(renderMicroColGroup);
    this.scrollerRefs = new RefMap();
    this.scrollerElRefs = new RefMap(this._handleScrollerEl.bind(this));
    this.state = {
      shrinkWidth: null,
      forceYScrollbars: false,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }; // TODO: can do a really simple print-view. dont need to join rows

    this.handleSizing = () => {
      this.safeSetState(Object.assign({
        shrinkWidth: this.computeShrinkWidth()
      }, this.computeScrollerDims()));
    };
  }

  render() {
    let {
      props,
      state,
      context
    } = this;
    let sectionConfigs = props.sections || [];
    let cols = this.processCols(props.cols);
    let microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
    let classNames = getScrollGridClassNames(props.liquid, context);

    if (props.collapsibleWidth) {
      classNames.push('fc-scrollgrid-collapsible');
    } // TODO: make DRY


    let configCnt = sectionConfigs.length;
    let configI = 0;
    let currentConfig;
    let headSectionNodes = [];
    let bodySectionNodes = [];
    let footSectionNodes = [];

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
      headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    }

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
      bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
      configI += 1;
    }

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
      footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    } // firefox bug: when setting height on table and there is a thead or tfoot,
    // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
    // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
    // if so, use a simpler dom structure, jam everything into a lone tbody.


    let isBuggy = !getCanVGrowWithinCell();
    const roleAttrs = {
      role: 'rowgroup'
    };
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('table', {
      role: 'grid',
      className: classNames.join(' '),
      style: {
        height: props.height
      }
    }, Boolean(!isBuggy && headSectionNodes.length) && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('thead', roleAttrs, ...headSectionNodes), Boolean(!isBuggy && bodySectionNodes.length) && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('tbody', roleAttrs, ...bodySectionNodes), Boolean(!isBuggy && footSectionNodes.length) && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('tfoot', roleAttrs, ...footSectionNodes), isBuggy && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('tbody', roleAttrs, ...headSectionNodes, ...bodySectionNodes, ...footSectionNodes));
  }

  renderSection(sectionConfig, microColGroupNode, isHeader) {
    if ('outerContent' in sectionConfig) {
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: sectionConfig.key
      }, sectionConfig.outerContent);
    }

    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: sectionConfig.key,
      role: "presentation",
      className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ')
    }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader));
  }

  renderChunkTd(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
    if ('outerContent' in chunkConfig) {
      return chunkConfig.outerContent;
    }

    let {
      props
    } = this;
    let {
      forceYScrollbars,
      scrollerClientWidths,
      scrollerClientHeights
    } = this.state;
    let needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?

    let isLiquid = getSectionHasLiquidHeight(props, sectionConfig); // for `!props.liquid` - is WHOLE scrollgrid natural height?
    // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars

    let overflowY = !props.liquid ? 'visible' : forceYScrollbars ? 'scroll' : !needsYScrolling ? 'hidden' : 'auto';
    let sectionKey = sectionConfig.key;
    let content = renderChunkContent(sectionConfig, chunkConfig, {
      tableColGroupNode: microColGroupNode,
      tableMinWidth: '',
      clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined ? scrollerClientWidths[sectionKey] : null,
      clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
      expandRows: sectionConfig.expandRows,
      syncRowHeights: false,
      rowSyncHeights: [],
      reportRowHeightChange: () => {}
    }, isHeader);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(isHeader ? 'th' : 'td', {
      ref: chunkConfig.elRef,
      role: 'presentation'
    }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `fc-scroller-harness${isLiquid ? ' fc-scroller-harness-liquid' : ''}`
    }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(Scroller, {
      ref: this.scrollerRefs.createRef(sectionKey),
      elRef: this.scrollerElRefs.createRef(sectionKey),
      overflowY: overflowY,
      overflowX: !props.liquid ? 'visible' : 'hidden'
      /* natural height? */
      ,
      maxHeight: sectionConfig.maxHeight,
      liquid: isLiquid,
      liquidIsAbsolute // because its within a harness
      : true
    }, content)));
  }

  _handleScrollerEl(scrollerEl, key) {
    let section = getSectionByKey(this.props.sections, key);

    if (section) {
      setRef(section.chunk.scrollerElRef, scrollerEl);
    }
  }

  componentDidMount() {
    this.handleSizing();
    this.context.addResizeHandler(this.handleSizing);
  }

  componentDidUpdate() {
    // TODO: need better solution when state contains non-sizing things
    this.handleSizing();
  }

  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }

  computeShrinkWidth() {
    return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
  }

  computeScrollerDims() {
    let scrollbarWidth = getScrollbarWidths();
    let {
      scrollerRefs,
      scrollerElRefs
    } = this;
    let forceYScrollbars = false;
    let scrollerClientWidths = {};
    let scrollerClientHeights = {};

    for (let sectionKey in scrollerRefs.currentMap) {
      let scroller = scrollerRefs.currentMap[sectionKey];

      if (scroller && scroller.needsYScrolling()) {
        forceYScrollbars = true;
        break;
      }
    }

    for (let section of this.props.sections) {
      let sectionKey = section.key;
      let scrollerEl = scrollerElRefs.currentMap[sectionKey];

      if (scrollerEl) {
        let harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders

        scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
        : 0));
        scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
      }
    }

    return {
      forceYScrollbars,
      scrollerClientWidths,
      scrollerClientHeights
    };
  }

}

SimpleScrollGrid.addStateEquality({
  scrollerClientWidths: isPropsEqual,
  scrollerClientHeights: isPropsEqual
});

function getSectionByKey(sections, key) {
  for (let section of sections) {
    if (section.key === key) {
      return section;
    }
  }

  return null;
}

class EventRoot extends BaseComponent {
  constructor() {
    super(...arguments);
    this.elRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  }

  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg
    } = props;
    let {
      eventRange
    } = seg;
    let {
      ui
    } = eventRange;
    let hookProps = {
      event: new EventApi(context, eventRange.def, eventRange.instance),
      view: context.viewApi,
      timeText: props.timeText,
      textColor: ui.textColor,
      backgroundColor: ui.backgroundColor,
      borderColor: ui.borderColor,
      isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
      isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
      isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
      isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
      isStart: Boolean(seg.isStart),
      isEnd: Boolean(seg.isEnd),
      isPast: Boolean(props.isPast),
      isFuture: Boolean(props.isFuture),
      isToday: Boolean(props.isToday),
      isSelected: Boolean(props.isSelected),
      isDragging: Boolean(props.isDragging),
      isResizing: Boolean(props.isResizing)
    };
    let standardClassNames = getEventClassNames(hookProps).concat(ui.classNames);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderHook, {
      hookProps: hookProps,
      classNames: options.eventClassNames,
      content: options.eventContent,
      defaultContent: props.defaultContent,
      didMount: options.eventDidMount,
      willUnmount: options.eventWillUnmount,
      elRef: this.elRef
    }, (rootElRef, customClassNames, innerElRef, innerContent) => props.children(rootElRef, standardClassNames.concat(customClassNames), innerElRef, innerContent, hookProps));
  }

  componentDidMount() {
    setElSeg(this.elRef.current, this.props.seg);
  }
  /*
  need to re-assign seg to the element if seg changes, even if the element is the same
  */


  componentDidUpdate(prevProps) {
    let {
      seg
    } = this.props;

    if (seg !== prevProps.seg) {
      setElSeg(this.elRef.current, seg);
    }
  }

} // should not be a purecomponent


class StandardEvent extends BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      seg
    } = props;
    let timeFormat = context.options.eventTimeFormat || props.defaultTimeFormat;
    let timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventRoot, {
      seg: seg,
      timeText: timeText,
      disableDragging: props.disableDragging,
      disableResizing: props.disableResizing,
      defaultContent: props.defaultContent || renderInnerContent$1,
      isDragging: props.isDragging,
      isResizing: props.isResizing,
      isDateSelecting: props.isDateSelecting,
      isSelected: props.isSelected,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday
    }, (rootElRef, classNames, innerElRef, innerContent, hookProps) => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", Object.assign({
      className: props.extraClassNames.concat(classNames).join(' '),
      style: {
        borderColor: hookProps.borderColor,
        backgroundColor: hookProps.backgroundColor
      },
      ref: rootElRef
    }, getSegAnchorAttrs(seg, context)), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-event-main",
      ref: innerElRef,
      style: {
        color: hookProps.textColor
      }
    }, innerContent), hookProps.isStartResizable && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-event-resizer fc-event-resizer-start"
    }), hookProps.isEndResizable && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-event-resizer fc-event-resizer-end"
    })));
  }

}

function renderInnerContent$1(innerProps) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-main-frame"
  }, innerProps.timeText && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-time"
  }, innerProps.timeText), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title-container"
  }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title fc-sticky"
  }, innerProps.event.title || (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "\u00A0"))));
}

const NowIndicatorRoot = props => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, context => {
  let {
    options
  } = context;
  let hookProps = {
    isAxis: props.isAxis,
    date: context.dateEnv.toDate(props.date),
    view: context.viewApi
  };
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderHook, {
    hookProps: hookProps,
    classNames: options.nowIndicatorClassNames,
    content: options.nowIndicatorContent,
    didMount: options.nowIndicatorDidMount,
    willUnmount: options.nowIndicatorWillUnmount
  }, props.children);
});

const DAY_NUM_FORMAT = createFormatter({
  day: 'numeric'
});

class DayCellContent extends BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let hookProps = refineDayCellHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentHook, {
      hookProps: hookProps,
      content: options.dayCellContent,
      defaultContent: props.defaultContent
    }, props.children);
  }

}

function refineDayCellHookProps(raw) {
  let {
    date,
    dateEnv
  } = raw;
  let dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
  return Object.assign(Object.assign(Object.assign({
    date: dateEnv.toDate(date),
    view: raw.viewApi
  }, dayMeta), {
    dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : ''
  }), raw.extraProps);
}

class DayCellRoot extends BaseComponent {
  constructor() {
    super(...arguments);
    this.refineHookProps = memoizeObjArg(refineDayCellHookProps);
    this.normalizeClassNames = buildClassNameNormalizer();
  }

  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let hookProps = this.refineHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    let classNames = getDayClassNames(hookProps, context.theme).concat(hookProps.isDisabled ? [] // don't use custom classNames if disabled
    : this.normalizeClassNames(options.dayCellClassNames, hookProps));
    let dataAttrs = hookProps.isDisabled ? {} : {
      'data-date': formatDayString(props.date)
    };
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(MountHook, {
      hookProps: hookProps,
      didMount: options.dayCellDidMount,
      willUnmount: options.dayCellWillUnmount,
      elRef: props.elRef
    }, rootElRef => props.children(rootElRef, classNames, dataAttrs, hookProps.isDisabled));
  }

}

function renderFill(fillType) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `fc-${fillType}`
  });
}

const BgEvent = props => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventRoot, {
  defaultContent: renderInnerContent,
  seg: props.seg
  /* uselesss i think */
  ,
  timeText: "",
  disableDragging: true,
  disableResizing: true,
  isDragging: false,
  isResizing: false,
  isDateSelecting: false,
  isSelected: false,
  isPast: props.isPast,
  isFuture: props.isFuture,
  isToday: props.isToday
}, (rootElRef, classNames, innerElRef, innerContent, hookProps) => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  ref: rootElRef,
  className: ['fc-bg-event'].concat(classNames).join(' '),
  style: {
    backgroundColor: hookProps.backgroundColor
  }
}, innerContent));

function renderInnerContent(props) {
  let {
    title
  } = props.event;
  return title && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title"
  }, props.event.title);
}

const WeekNumberRoot = props => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, context => {
  let {
    dateEnv,
    options
  } = context;
  let {
    date
  } = props;
  let format = options.weekNumberFormat || props.defaultFormat;
  let num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?

  let text = dateEnv.format(date, format);
  let hookProps = {
    num,
    text,
    date
  };
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderHook, {
    hookProps: hookProps,
    classNames: options.weekNumberClassNames,
    content: options.weekNumberContent,
    defaultContent: renderInner,
    didMount: options.weekNumberDidMount,
    willUnmount: options.weekNumberWillUnmount
  }, props.children);
});

function renderInner(innerProps) {
  return innerProps.text;
}

const PADDING_FROM_VIEWPORT = 10;

class Popover extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      titleId: getUniqueDomId()
    };

    this.handleRootEl = el => {
      this.rootEl = el;

      if (this.props.elRef) {
        setRef(this.props.elRef, el);
      }
    }; // Triggered when the user clicks *anywhere* in the document, for the autoHide feature


    this.handleDocumentMouseDown = ev => {
      // only hide the popover if the click happened outside the popover
      const target = getEventTargetViaRoot(ev);

      if (!this.rootEl.contains(target)) {
        this.handleCloseClick();
      }
    };

    this.handleDocumentKeyDown = ev => {
      if (ev.key === 'Escape') {
        this.handleCloseClick();
      }
    };

    this.handleCloseClick = () => {
      let {
        onClose
      } = this.props;

      if (onClose) {
        onClose();
      }
    };
  }

  render() {
    let {
      theme,
      options
    } = this.context;
    let {
      props,
      state
    } = this;
    let classNames = ['fc-popover', theme.getClass('popover')].concat(props.extraClassNames || []);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createPortal)((0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({
      id: props.id,
      className: classNames.join(' '),
      "aria-labelledby": state.titleId
    }, props.extraAttrs, {
      ref: this.handleRootEl
    }), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'fc-popover-header ' + theme.getClass('popoverHeader')
    }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fc-popover-title",
      id: state.titleId
    }, props.title), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'fc-popover-close ' + theme.getIconClass('close'),
      title: options.closeHint,
      onClick: this.handleCloseClick
    })), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'fc-popover-body ' + theme.getClass('popoverContent')
    }, props.children)), props.parentEl);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    this.updateSize();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  updateSize() {
    let {
      isRtl
    } = this.context;
    let {
      alignmentEl,
      alignGridTop
    } = this.props;
    let {
      rootEl
    } = this;
    let alignmentRect = computeClippedClientRect(alignmentEl);

    if (alignmentRect) {
      let popoverDims = rootEl.getBoundingClientRect(); // position relative to viewport

      let popoverTop = alignGridTop ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top : alignmentRect.top;
      let popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left; // constrain

      popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
      popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
      popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
      let origin = rootEl.offsetParent.getBoundingClientRect();
      applyStyle(rootEl, {
        top: popoverTop - origin.top,
        left: popoverLeft - origin.left
      });
    }
  }

}

class MorePopover extends DateComponent {
  constructor() {
    super(...arguments);

    this.handleRootEl = rootEl => {
      this.rootEl = rootEl;

      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          useEventCenter: false
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }

  render() {
    let {
      options,
      dateEnv
    } = this.context;
    let {
      props
    } = this;
    let {
      startDate,
      todayRange,
      dateProfile
    } = props;
    let title = dateEnv.format(startDate, options.dayPopoverFormat);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(DayCellRoot, {
      date: startDate,
      dateProfile: dateProfile,
      todayRange: todayRange,
      elRef: this.handleRootEl
    }, (rootElRef, dayClassNames, dataAttrs) => (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
      elRef: rootElRef,
      id: props.id,
      title: title,
      extraClassNames: ['fc-more-popover'].concat(dayClassNames),
      extraAttrs: dataAttrs
      /* TODO: make these time-based when not whole-day? */
      ,
      parentEl: props.parentEl,
      alignmentEl: props.alignmentEl,
      alignGridTop: props.alignGridTop,
      onClose: props.onClose
    }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(DayCellContent, {
      date: startDate,
      dateProfile: dateProfile,
      todayRange: todayRange
    }, (innerElRef, innerContent) => innerContent && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-more-popover-misc",
      ref: innerElRef
    }, innerContent)), props.children));
  }

  queryHit(positionLeft, positionTop, elWidth, elHeight) {
    let {
      rootEl,
      props
    } = this;

    if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) {
      return {
        dateProfile: props.dateProfile,
        dateSpan: Object.assign({
          allDay: true,
          range: {
            start: props.startDate,
            end: props.endDate
          }
        }, props.extraDateSpan),
        dayEl: rootEl,
        rect: {
          left: 0,
          top: 0,
          right: elWidth,
          bottom: elHeight
        },
        layer: 1 // important when comparing with hits from other components

      };
    }

    return null;
  }

}

class MoreLinkRoot extends BaseComponent {
  constructor() {
    super(...arguments);
    this.linkElRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.state = {
      isPopoverOpen: false,
      popoverId: getUniqueDomId()
    };

    this.handleClick = ev => {
      let {
        props,
        context
      } = this;
      let {
        moreLinkClick
      } = context.options;
      let date = computeRange(props).start;

      function buildPublicSeg(seg) {
        let {
          def,
          instance,
          range
        } = seg.eventRange;
        return {
          event: new EventApi(context, def, instance),
          start: context.dateEnv.toDate(range.start),
          end: context.dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }

      if (typeof moreLinkClick === 'function') {
        moreLinkClick = moreLinkClick({
          date,
          allDay: Boolean(props.allDayDate),
          allSegs: props.allSegs.map(buildPublicSeg),
          hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
          jsEvent: ev,
          view: context.viewApi
        });
      }

      if (!moreLinkClick || moreLinkClick === 'popover') {
        this.setState({
          isPopoverOpen: true
        });
      } else if (typeof moreLinkClick === 'string') {
        // a view name
        context.calendarApi.zoomTo(date, moreLinkClick);
      }
    };

    this.handlePopoverClose = () => {
      this.setState({
        isPopoverOpen: false
      });
    };
  }

  render() {
    let {
      props,
      state
    } = this;
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, context => {
      let {
        viewApi,
        options,
        calendarApi
      } = context;
      let {
        moreLinkText
      } = options;
      let {
        moreCnt
      } = props;
      let range = computeRange(props);
      let text = typeof moreLinkText === 'function' // TODO: eventually use formatWithOrdinals
      ? moreLinkText.call(calendarApi, moreCnt) : `+${moreCnt} ${moreLinkText}`;
      let title = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
      let hookProps = {
        num: moreCnt,
        shortText: `+${moreCnt}`,
        text,
        view: viewApi
      };
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Boolean(props.moreCnt) && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderHook, {
        elRef: this.linkElRef,
        hookProps: hookProps,
        classNames: options.moreLinkClassNames,
        content: options.moreLinkContent,
        defaultContent: props.defaultContent || renderMoreLinkInner,
        didMount: options.moreLinkDidMount,
        willUnmount: options.moreLinkWillUnmount
      }, (rootElRef, customClassNames, innerElRef, innerContent) => props.children(rootElRef, ['fc-more-link'].concat(customClassNames), innerElRef, innerContent, this.handleClick, title, state.isPopoverOpen, state.isPopoverOpen ? state.popoverId : '')), state.isPopoverOpen && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(MorePopover, {
        id: state.popoverId,
        startDate: range.start,
        endDate: range.end,
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        extraDateSpan: props.extraDateSpan,
        parentEl: this.parentEl,
        alignmentEl: props.alignmentElRef.current,
        alignGridTop: props.alignGridTop,
        onClose: this.handlePopoverClose
      }, props.popoverContent()));
    });
  }

  componentDidMount() {
    this.updateParentEl();
  }

  componentDidUpdate() {
    this.updateParentEl();
  }

  updateParentEl() {
    if (this.linkElRef.current) {
      this.parentEl = elementClosest(this.linkElRef.current, '.fc-view-harness');
    }
  }

}

function renderMoreLinkInner(props) {
  return props.text;
}

function computeRange(props) {
  if (props.allDayDate) {
    return {
      start: props.allDayDate,
      end: addDays(props.allDayDate, 1)
    };
  }

  let {
    hiddenSegs
  } = props;
  return {
    start: computeEarliestSegStart(hiddenSegs),
    end: computeLatestSegEnd(hiddenSegs)
  };
}

function computeEarliestSegStart(segs) {
  return segs.reduce(pickEarliestStart).eventRange.range.start;
}

function pickEarliestStart(seg0, seg1) {
  return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}

function computeLatestSegEnd(segs) {
  return segs.reduce(pickLatestEnd).eventRange.range.end;
}

function pickLatestEnd(seg0, seg1) {
  return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
} // exports
// --------------------------------------------------------------------------------------------------


const version = '6.0.0-beta.1'; // important to type it, so .d.ts has generic string



/***/ }),

/***/ 53139:
/*!***************************************************!*\
  !*** ./node_modules/@fullcalendar/common/vdom.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "createContext": () => (/* binding */ createContext),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createPortal": () => (/* binding */ createPortal),
/* harmony export */   "createRef": () => (/* binding */ createRef),
/* harmony export */   "flushSync": () => (/* binding */ flushSync),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ unmountComponentAtNode)
/* harmony export */ });
/// <reference types="@fullcalendar/core-preact" />
if (typeof FullCalendarVDom === 'undefined') {
  throw new Error('Please import the top-level fullcalendar lib before attempting to import a plugin.');
}

var Component = FullCalendarVDom.Component;
var createElement = FullCalendarVDom.createElement;
var render = FullCalendarVDom.render;
var createRef = FullCalendarVDom.createRef;
var Fragment = FullCalendarVDom.Fragment;
var createContext = FullCalendarVDom.createContext;
var createPortal = FullCalendarVDom.createPortal;
var flushSync = FullCalendarVDom.flushSync;
var unmountComponentAtNode = FullCalendarVDom.unmountComponentAtNode;
/* eslint-enable */



/***/ }),

/***/ 22700:
/*!*************************************************!*\
  !*** ./node_modules/@fullcalendar/core/main.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_OPTION_DEFAULTS": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_DEFAULTS),
/* harmony export */   "BASE_OPTION_REFINERS": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_REFINERS),
/* harmony export */   "BaseComponent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent),
/* harmony export */   "BgEvent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent),
/* harmony export */   "Calendar": () => (/* binding */ Calendar),
/* harmony export */   "CalendarApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarApi),
/* harmony export */   "CalendarContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarContent),
/* harmony export */   "CalendarDataManager": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataManager),
/* harmony export */   "CalendarDataProvider": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataProvider),
/* harmony export */   "CalendarRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarRoot),
/* harmony export */   "Component": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ContentHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ContentHook),
/* harmony export */   "CustomContentRenderContext": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CustomContentRenderContext),
/* harmony export */   "DateComponent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent),
/* harmony export */   "DateEnv": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateEnv),
/* harmony export */   "DateProfileGenerator": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateProfileGenerator),
/* harmony export */   "DayCellContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent),
/* harmony export */   "DayCellRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot),
/* harmony export */   "DayHeader": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader),
/* harmony export */   "DaySeriesModel": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel),
/* harmony export */   "DayTableModel": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel),
/* harmony export */   "DelayedRunner": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DelayedRunner),
/* harmony export */   "ElementDragging": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ElementDragging),
/* harmony export */   "ElementScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ElementScrollController),
/* harmony export */   "Emitter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Emitter),
/* harmony export */   "EventApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventApi),
/* harmony export */   "EventRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot),
/* harmony export */   "EventSourceApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventSourceApi),
/* harmony export */   "Fragment": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Interaction": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Interaction),
/* harmony export */   "MoreLinkRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot),
/* harmony export */   "MountHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MountHook),
/* harmony export */   "NamedTimeZoneImpl": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NamedTimeZoneImpl),
/* harmony export */   "NowIndicatorRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot),
/* harmony export */   "NowTimer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer),
/* harmony export */   "PositionCache": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache),
/* harmony export */   "RefMap": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap),
/* harmony export */   "RenderHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook),
/* harmony export */   "ScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ScrollController),
/* harmony export */   "ScrollResponder": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ScrollResponder),
/* harmony export */   "Scroller": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Scroller),
/* harmony export */   "SegHierarchy": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy),
/* harmony export */   "SimpleScrollGrid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid),
/* harmony export */   "Slicer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer),
/* harmony export */   "Splitter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Splitter),
/* harmony export */   "StandardEvent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent),
/* harmony export */   "TableDateCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.TableDateCell),
/* harmony export */   "TableDowCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.TableDowCell),
/* harmony export */   "Theme": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Theme),
/* harmony export */   "ViewApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewApi),
/* harmony export */   "ViewContextType": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewContextType),
/* harmony export */   "ViewRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot),
/* harmony export */   "WeekNumberRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot),
/* harmony export */   "WindowScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WindowScrollController),
/* harmony export */   "addDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays),
/* harmony export */   "addDurations": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations),
/* harmony export */   "addMs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addMs),
/* harmony export */   "addWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks),
/* harmony export */   "allowContextMenu": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.allowContextMenu),
/* harmony export */   "allowSelection": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.allowSelection),
/* harmony export */   "applyMutationToEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyMutationToEventStore),
/* harmony export */   "applyStyle": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyle),
/* harmony export */   "applyStyleProp": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyleProp),
/* harmony export */   "asCleanDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asCleanDays),
/* harmony export */   "asRoughMinutes": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMinutes),
/* harmony export */   "asRoughMs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs),
/* harmony export */   "asRoughSeconds": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughSeconds),
/* harmony export */   "binarySearch": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.binarySearch),
/* harmony export */   "buildClassNameNormalizer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildClassNameNormalizer),
/* harmony export */   "buildEntryKey": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey),
/* harmony export */   "buildEventApis": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventApis),
/* harmony export */   "buildEventRangeKey": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey),
/* harmony export */   "buildHashFromArray": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildHashFromArray),
/* harmony export */   "buildIsoString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildIsoString),
/* harmony export */   "buildNavLinkAttrs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs),
/* harmony export */   "buildSegCompareObj": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegCompareObj),
/* harmony export */   "buildSegTimeText": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText),
/* harmony export */   "collectFromHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.collectFromHash),
/* harmony export */   "combineEventUis": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.combineEventUis),
/* harmony export */   "compareByFieldSpec": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpec),
/* harmony export */   "compareByFieldSpecs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpecs),
/* harmony export */   "compareNumbers": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareNumbers),
/* harmony export */   "compareObjs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareObjs),
/* harmony export */   "computeEarliestSegStart": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEarliestSegStart),
/* harmony export */   "computeEdges": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEdges),
/* harmony export */   "computeFallbackHeaderFormat": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeFallbackHeaderFormat),
/* harmony export */   "computeHeightAndMargins": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeHeightAndMargins),
/* harmony export */   "computeInnerRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeInnerRect),
/* harmony export */   "computeRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeRect),
/* harmony export */   "computeSegDraggable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegDraggable),
/* harmony export */   "computeSegEndResizable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegEndResizable),
/* harmony export */   "computeSegStartResizable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegStartResizable),
/* harmony export */   "computeShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeShrinkWidth),
/* harmony export */   "computeSmallestCellWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSmallestCellWidth),
/* harmony export */   "computeVisibleDayRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeVisibleDayRange),
/* harmony export */   "config": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.config),
/* harmony export */   "constrainPoint": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.constrainPoint),
/* harmony export */   "createAriaClickAttrs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createAriaClickAttrs),
/* harmony export */   "createContext": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createDuration": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration),
/* harmony export */   "createElement": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createEmptyEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore),
/* harmony export */   "createEventInstance": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEventInstance),
/* harmony export */   "createEventUi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEventUi),
/* harmony export */   "createFormatter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter),
/* harmony export */   "createPlugin": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin),
/* harmony export */   "createPortal": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPortal),
/* harmony export */   "createRef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "diffDates": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDates),
/* harmony export */   "diffDayAndTime": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDayAndTime),
/* harmony export */   "diffDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDays),
/* harmony export */   "diffPoints": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffPoints),
/* harmony export */   "diffWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWeeks),
/* harmony export */   "diffWholeDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWholeDays),
/* harmony export */   "diffWholeWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWholeWeeks),
/* harmony export */   "disableCursor": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.disableCursor),
/* harmony export */   "elementClosest": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.elementClosest),
/* harmony export */   "elementMatches": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.elementMatches),
/* harmony export */   "enableCursor": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.enableCursor),
/* harmony export */   "eventTupleToStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.eventTupleToStore),
/* harmony export */   "filterEventStoreDefs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.filterEventStoreDefs),
/* harmony export */   "filterHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.filterHash),
/* harmony export */   "findDirectChildren": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.findDirectChildren),
/* harmony export */   "findElements": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.findElements),
/* harmony export */   "flexibleCompare": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flexibleCompare),
/* harmony export */   "flushSync": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushSync),
/* harmony export */   "formatDate": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDate),
/* harmony export */   "formatDayString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDayString),
/* harmony export */   "formatIsoTimeString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatIsoTimeString),
/* harmony export */   "formatRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatRange),
/* harmony export */   "getAllowYScrolling": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getAllowYScrolling),
/* harmony export */   "getCanVGrowWithinCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getCanVGrowWithinCell),
/* harmony export */   "getClippingParents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getClippingParents),
/* harmony export */   "getDateMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDateMeta),
/* harmony export */   "getDayClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDayClassNames),
/* harmony export */   "getDefaultEventEnd": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDefaultEventEnd),
/* harmony export */   "getElRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getElRoot),
/* harmony export */   "getElSeg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getElSeg),
/* harmony export */   "getEntrySpanEnd": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEntrySpanEnd),
/* harmony export */   "getEventClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEventClassNames),
/* harmony export */   "getEventTargetViaRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEventTargetViaRoot),
/* harmony export */   "getIsRtlScrollbarOnLeft": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getIsRtlScrollbarOnLeft),
/* harmony export */   "getRectCenter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getRectCenter),
/* harmony export */   "getRelevantEvents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getRelevantEvents),
/* harmony export */   "getScrollGridClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getScrollGridClassNames),
/* harmony export */   "getScrollbarWidths": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getScrollbarWidths),
/* harmony export */   "getSectionClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSectionClassNames),
/* harmony export */   "getSectionHasLiquidHeight": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSectionHasLiquidHeight),
/* harmony export */   "getSegAnchorAttrs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegAnchorAttrs),
/* harmony export */   "getSegMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta),
/* harmony export */   "getSlotClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSlotClassNames),
/* harmony export */   "getStickyFooterScrollbar": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar),
/* harmony export */   "getStickyHeaderDates": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates),
/* harmony export */   "getUnequalProps": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUnequalProps),
/* harmony export */   "getUniqueDomId": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId),
/* harmony export */   "globalLocales": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.globalLocales),
/* harmony export */   "globalPlugins": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.globalPlugins),
/* harmony export */   "greatestDurationDenominator": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.greatestDurationDenominator),
/* harmony export */   "groupIntersectingEntries": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.groupIntersectingEntries),
/* harmony export */   "guid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.guid),
/* harmony export */   "hasBgRendering": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasBgRendering),
/* harmony export */   "hasShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasShrinkWidth),
/* harmony export */   "identity": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   "interactionSettingsStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsStore),
/* harmony export */   "interactionSettingsToStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsToStore),
/* harmony export */   "intersectRanges": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges),
/* harmony export */   "intersectRects": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRects),
/* harmony export */   "intersectSpans": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectSpans),
/* harmony export */   "isArraysEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isArraysEqual),
/* harmony export */   "isColPropsEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isColPropsEqual),
/* harmony export */   "isDateSelectionValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isDateSelectionValid),
/* harmony export */   "isDateSpansEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isDateSpansEqual),
/* harmony export */   "isInt": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isInt),
/* harmony export */   "isInteractionValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isInteractionValid),
/* harmony export */   "isMultiDayRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isMultiDayRange),
/* harmony export */   "isPropsEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual),
/* harmony export */   "isPropsValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsValid),
/* harmony export */   "isValidDate": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isValidDate),
/* harmony export */   "joinSpans": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.joinSpans),
/* harmony export */   "listenBySelector": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.listenBySelector),
/* harmony export */   "mapHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.mapHash),
/* harmony export */   "memoize": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize),
/* harmony export */   "memoizeArraylike": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeArraylike),
/* harmony export */   "memoizeHashlike": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeHashlike),
/* harmony export */   "memoizeObjArg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeObjArg),
/* harmony export */   "mergeEventStores": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.mergeEventStores),
/* harmony export */   "multiplyDuration": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.multiplyDuration),
/* harmony export */   "padStart": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.padStart),
/* harmony export */   "parseBusinessHours": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseBusinessHours),
/* harmony export */   "parseClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseClassNames),
/* harmony export */   "parseDragMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseDragMeta),
/* harmony export */   "parseEventDef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseEventDef),
/* harmony export */   "parseFieldSpecs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseFieldSpecs),
/* harmony export */   "parseMarker": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseMarker),
/* harmony export */   "pointInsideRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.pointInsideRect),
/* harmony export */   "preventContextMenu": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventContextMenu),
/* harmony export */   "preventDefault": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventDefault),
/* harmony export */   "preventSelection": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventSelection),
/* harmony export */   "rangeContainsMarker": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsMarker),
/* harmony export */   "rangeContainsRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsRange),
/* harmony export */   "rangesEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangesEqual),
/* harmony export */   "rangesIntersect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangesIntersect),
/* harmony export */   "refineEventDef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.refineEventDef),
/* harmony export */   "refineProps": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.refineProps),
/* harmony export */   "removeElement": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.removeElement),
/* harmony export */   "removeExact": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.removeExact),
/* harmony export */   "render": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "renderChunkContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderChunkContent),
/* harmony export */   "renderFill": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill),
/* harmony export */   "renderMicroColGroup": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderMicroColGroup),
/* harmony export */   "renderScrollShim": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim),
/* harmony export */   "requestJson": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.requestJson),
/* harmony export */   "sanitizeShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sanitizeShrinkWidth),
/* harmony export */   "setElSeg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setElSeg),
/* harmony export */   "setRef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef),
/* harmony export */   "sliceEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEventStore),
/* harmony export */   "sliceEvents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEvents),
/* harmony export */   "sortEventSegs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs),
/* harmony export */   "startOfDay": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay),
/* harmony export */   "translateRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.translateRect),
/* harmony export */   "triggerDateSelect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.triggerDateSelect),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode),
/* harmony export */   "unpromisify": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unpromisify),
/* harmony export */   "version": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.version),
/* harmony export */   "whenTransitionDone": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.whenTransitionDone),
/* harmony export */   "wholeDivideDurations": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)
/* harmony export */ });
/* harmony import */ var _vdom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vdom.js */ 83083);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ 7085);
/*!
FullCalendar v6.0.0-beta.1
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/




class Calendar extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarApi {
  constructor(el, optionOverrides = {}) {
    super();
    this.isRendering = false;
    this.isRendered = false;
    this.currentClassNames = [];
    this.customContentRenderId = 0; // will affect custom generated classNames?

    this.handleAction = action => {
      // actions we know we want to render immediately
      switch (action.type) {
        case 'SET_EVENT_DRAG':
        case 'SET_EVENT_RESIZE':
          this.renderRunner.tryDrain();
      }
    };

    this.handleData = data => {
      this.currentData = data;
      this.renderRunner.request(data.calendarOptions.rerenderDelay);
    };

    this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = true;
        let {
          currentData
        } = this;
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushSync)(() => {
          (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.render)((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarRoot, {
            options: currentData.calendarOptions,
            theme: currentData.theme,
            emitter: currentData.emitter
          }, (classNames, height, isHeightAuto, forPrint) => {
            this.setClassNames(classNames);
            this.setHeight(height);
            return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CustomContentRenderContext.Provider, {
              value: this.customContentRenderId
            }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarContent, Object.assign({
              isHeightAuto: isHeightAuto,
              forPrint: forPrint
            }, currentData)));
          }), this.el);
        });
      } else if (this.isRendered) {
        this.isRendered = false;
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode)(this.el);
        this.setClassNames([]);
        this.setHeight('');
      }
    };

    this.el = el;
    this.renderRunner = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DelayedRunner(this.handleRenderRequest);
    new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataManager({
      optionOverrides,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }

  get view() {
    return this.currentData.viewApi;
  } // for public API


  render() {
    let wasRendering = this.isRendering;

    if (!wasRendering) {
      this.isRendering = true;
    } else {
      this.customContentRenderId += 1;
    }

    this.renderRunner.request();

    if (wasRendering) {
      this.updateSize();
    }
  }

  destroy() {
    if (this.isRendering) {
      this.isRendering = false;
      this.renderRunner.request();
    }
  }

  updateSize() {
    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushSync)(() => {
      super.updateSize();
    });
  }

  batchRendering(func) {
    this.renderRunner.pause('batchRendering');
    func();
    this.renderRunner.resume('batchRendering');
  }

  pauseRendering() {
    this.renderRunner.pause('pauseRendering');
  }

  resumeRendering() {
    this.renderRunner.resume('pauseRendering', true);
  }

  resetOptions(optionOverrides, append) {
    this.currentDataManager.resetOptions(optionOverrides, append);
  }

  setClassNames(classNames) {
    if (!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isArraysEqual)(classNames, this.currentClassNames)) {
      let {
        classList
      } = this.el;

      for (let className of this.currentClassNames) {
        classList.remove(className);
      }

      for (let className of classNames) {
        classList.add(className);
      }

      this.currentClassNames = classNames;
    }
  }

  setHeight(height) {
    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyleProp)(this.el, 'height', height);
  }

}



/***/ }),

/***/ 83083:
/*!*************************************************!*\
  !*** ./node_modules/@fullcalendar/core/vdom.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ 98173);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/compat */ 89086);


let globalObj = typeof globalThis !== 'undefined' ? globalThis : window; // // TODO: streamline when killing IE11 support

if (globalObj.FullCalendarVDom) {
  console.warn('FullCalendar VDOM already loaded');
} else {
  globalObj.FullCalendarVDom = {
    Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
    createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
    render: preact__WEBPACK_IMPORTED_MODULE_0__.render,
    createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
    Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    createContext,
    createPortal: preact_compat__WEBPACK_IMPORTED_MODULE_1__.createPortal,
    flushSync,
    unmountComponentAtNode
  };
} // HACKS...
// TODO: lock version
// TODO: link gh issues


function flushSync(runBeforeFlush) {
  runBeforeFlush();
  let oldDebounceRendering = preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering; // orig

  let callbackQ = [];

  function execCallbackSync(callback) {
    callbackQ.push(callback);
  }

  preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = execCallbackSync;
  preact__WEBPACK_IMPORTED_MODULE_0__.render(preact__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeComponent, {}), document.createElement('div'));

  while (callbackQ.length) {
    callbackQ.shift()();
  }

  preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = oldDebounceRendering;
}

class FakeComponent extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return preact__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {});
  }

  componentDidMount() {
    this.setState({});
  }

}

function createContext(defaultValue) {
  let ContextType = preact__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultValue);
  let origProvider = ContextType.Provider;

  ContextType.Provider = function () {
    let isNew = !this.getChildContext;
    let children = origProvider.apply(this, arguments); // eslint-disable-line prefer-rest-params

    if (isNew) {
      let subs = [];

      this.shouldComponentUpdate = _props => {
        if (this.props.value !== _props.value) {
          subs.forEach(c => {
            c.context = _props.value;
            c.forceUpdate();
          });
        }
      };

      this.sub = c => {
        subs.push(c);
        let old = c.componentWillUnmount;

        c.componentWillUnmount = () => {
          subs.splice(subs.indexOf(c), 1);
          old && old.call(c);
        };
      };
    }

    return children;
  };

  return ContextType;
}

function unmountComponentAtNode(node) {
  preact__WEBPACK_IMPORTED_MODULE_0__.render(null, node);
}

/***/ }),

/***/ 13947:
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayGridView": () => (/* binding */ DayTableView),
/* harmony export */   "DayTable": () => (/* binding */ DayTable),
/* harmony export */   "DayTableSlicer": () => (/* binding */ DayTableSlicer),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "TableView": () => (/* binding */ TableView),
/* harmony export */   "buildDayTableModel": () => (/* binding */ buildDayTableModel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common */ 7085);
/*!
FullCalendar v6.0.0-beta.1
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/

/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.

class TableView extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.headerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  }

  renderSimpleLayout(headerRowContent, bodyContent) {
    let {
      props,
      context
    } = this;
    let sections = [];
    let stickyHeaderDates = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getStickyHeaderDates)(context.options);

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }

    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunk: {
        content: bodyContent
      }
    });
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ViewRoot, {
      viewSpec: context.viewSpec
    }, (rootElRef, classNames) => (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: rootElRef,
      className: ['fc-daygrid'].concat(classNames).join(' ')
    }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.SimpleScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      cols: []
      /* TODO: make optional? */
      ,
      sections: sections
    })));
  }

  renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;

    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }

    let {
      props,
      context
    } = this;
    let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getStickyHeaderDates)(context.options);
    let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getStickyFooterScrollbar)(context.options);
    let sections = [];

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunks: [{
          key: 'main',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }

    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunks: [{
        key: 'main',
        content: bodyContent
      }]
    });

    if (stickyFooterScrollbar) {
      sections.push({
        type: 'footer',
        key: 'footer',
        isSticky: true,
        chunks: [{
          key: 'main',
          content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.renderScrollShim
        }]
      });
    }

    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ViewRoot, {
      viewSpec: context.viewSpec
    }, (rootElRef, classNames) => (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: rootElRef,
      className: ['fc-daygrid'].concat(classNames).join(' ')
    }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(ScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      colGroups: [{
        cols: [{
          span: colCnt,
          minWidth: dayMinWidth
        }]
      }],
      sections: sections
    })));
  }

}

function splitSegsByRow(segs, rowCnt) {
  let byRow = [];

  for (let i = 0; i < rowCnt; i += 1) {
    byRow[i] = [];
  }

  for (let seg of segs) {
    byRow[seg.row].push(seg);
  }

  return byRow;
}

function splitSegsByFirstCol(segs, colCnt) {
  let byCol = [];

  for (let i = 0; i < colCnt; i += 1) {
    byCol[i] = [];
  }

  for (let seg of segs) {
    byCol[seg.firstCol].push(seg);
  }

  return byCol;
}

function splitInteractionByRow(ui, rowCnt) {
  let byRow = [];

  if (!ui) {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }

    for (let seg of ui.segs) {
      byRow[seg.row].segs.push(seg);
    }
  }

  return byRow;
}

class TableCellTop extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    let {
      props
    } = this;
    let navLinkAttrs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildNavLinkAttrs)(this.context, props.date);
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DayCellContent, {
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraHookProps: props.extraHookProps,
      defaultContent: renderTopInner
    }, (innerElRef, innerContent) => (innerContent || props.forceDayTop) && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-daygrid-day-top",
      ref: innerElRef
    }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", Object.assign({
      id: props.dayNumberId,
      className: "fc-daygrid-day-number"
    }, navLinkAttrs), innerContent || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "\u00A0"))));
  }

}

function renderTopInner(props) {
  return props.dayNumberText;
}

const DEFAULT_TABLE_EVENT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createFormatter)({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'narrow'
});

function hasListItemDisplay(seg) {
  let {
    display
  } = seg.eventRange.ui;
  return display === 'list-item' || display === 'auto' && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol && // can't be multi-day
  seg.isStart && // "
  seg.isEnd // "
  ;
}

class TableBlockEvent extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    let {
      props
    } = this;
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.StandardEvent, Object.assign({}, props, {
      extraClassNames: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
      defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
      defaultDisplayEventEnd: props.defaultDisplayEventEnd,
      disableResizing: !props.seg.eventRange.def.allDay
    }));
  }

}

class TableListItemEvent extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    let timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildSegTimeText)(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventRoot, {
      seg: props.seg,
      timeText: timeText,
      defaultContent: renderInnerContent,
      isDragging: props.isDragging,
      isResizing: false,
      isDateSelecting: false,
      isSelected: props.isSelected,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday
    }, (rootElRef, classNames, innerElRef, innerContent) => // we don't use styles!
    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", Object.assign({
      className: ['fc-daygrid-event', 'fc-daygrid-dot-event'].concat(classNames).join(' '),
      ref: rootElRef
    }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getSegAnchorAttrs)(props.seg, context)), innerContent));
  }

}

function renderInnerContent(innerProps) {
  return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-daygrid-event-dot",
    style: {
      borderColor: innerProps.borderColor || innerProps.backgroundColor
    }
  }), innerProps.timeText && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-time"
  }, innerProps.timeText), (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title"
  }, innerProps.event.title || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "\u00A0")));
}

class TableCellMoreLink extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super(...arguments);
    this.compileSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.memoize)(compileSegs);
  }

  render() {
    let {
      props
    } = this;
    let {
      allSegs,
      invisibleSegs
    } = this.compileSegs(props.singlePlacements);
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.MoreLinkRoot, {
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      allDayDate: props.allDayDate,
      moreCnt: props.moreCnt,
      allSegs: allSegs,
      hiddenSegs: invisibleSegs,
      alignmentElRef: props.alignmentElRef,
      alignGridTop: props.alignGridTop,
      extraDateSpan: props.extraDateSpan,
      popoverContent: () => {
        let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
        return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, allSegs.map(seg => {
          let instanceId = seg.eventRange.instance.instanceId;
          return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            className: "fc-daygrid-event-harness",
            key: instanceId,
            style: {
              visibility: isForcedInvisible[instanceId] ? 'hidden' : ''
            }
          }, hasListItemDisplay(seg) ? (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableListItemEvent, Object.assign({
            seg: seg,
            isDragging: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, props.todayRange))) : (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableBlockEvent, Object.assign({
            seg: seg,
            isDragging: false,
            isResizing: false,
            isDateSelecting: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, props.todayRange))));
        }));
      }
    }, (rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) => (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", Object.assign({
      ref: rootElRef,
      className: ['fc-daygrid-more-link'].concat(classNames).join(' '),
      title: title,
      "aria-expanded": isExpanded,
      "aria-controls": popoverId
    }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createAriaClickAttrs)(handleClick)), innerContent));
  }

}

function compileSegs(singlePlacements) {
  let allSegs = [];
  let invisibleSegs = [];

  for (let placement of singlePlacements) {
    allSegs.push(placement.seg);

    if (!placement.isVisible) {
      invisibleSegs.push(placement.seg);
    }
  }

  return {
    allSegs,
    invisibleSegs
  };
}

const DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createFormatter)({
  week: 'narrow'
});

class TableCell extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.state = {
      dayNumberId: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getUniqueDomId)()
    };

    this.handleRootEl = el => {
      (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.setRef)(this.rootElRef, el);
      (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.setRef)(this.props.elRef, el);
    };
  }

  render() {
    let {
      context,
      props,
      state,
      rootElRef
    } = this;
    let {
      date,
      dateProfile
    } = props;
    let navLinkAttrs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildNavLinkAttrs)(context, date, 'week');
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DayCellRoot, {
      date: date,
      dateProfile: dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraHookProps: props.extraHookProps,
      elRef: this.handleRootEl
    }, (dayElRef, dayClassNames, rootDataAttrs, isDisabled) => (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", Object.assign({
      ref: dayElRef,
      role: "gridcell",
      className: ['fc-daygrid-day'].concat(dayClassNames, props.extraClassNames || []).join(' ')
    }, rootDataAttrs, props.extraDataAttrs, props.showDayNumber ? {
      'aria-labelledby': state.dayNumberId
    } : {}), (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
      ref: props.innerElRef
      /* different from hook system! RENAME */

    }, props.showWeekNumber && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.WeekNumberRoot, {
      date: date,
      defaultFormat: DEFAULT_WEEK_NUM_FORMAT
    }, (weekElRef, weekClassNames, innerElRef, innerContent) => (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", Object.assign({
      ref: weekElRef,
      className: ['fc-daygrid-week-number'].concat(weekClassNames).join(' ')
    }, navLinkAttrs), innerContent)), !isDisabled && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableCellTop, {
      date: date,
      dateProfile: dateProfile,
      showDayNumber: props.showDayNumber,
      dayNumberId: state.dayNumberId,
      forceDayTop: props.forceDayTop,
      todayRange: props.todayRange,
      extraHookProps: props.extraHookProps
    }), (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-daygrid-day-events",
      ref: props.fgContentElRef
    }, props.fgContent, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-daygrid-day-bottom",
      style: {
        marginTop: props.moreMarginTop
      }
    }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableCellMoreLink, {
      allDayDate: date,
      singlePlacements: props.singlePlacements,
      moreCnt: props.moreCnt,
      alignmentElRef: rootElRef,
      alignGridTop: !props.showDayNumber,
      extraDateSpan: props.extraDateSpan,
      dateProfile: props.dateProfile,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange
    }))), (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-daygrid-day-bg"
    }, props.bgContent))));
  }

}

function computeFgSegPlacement(segs, // assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
  let hierarchy = new DayGridSegHierarchy();
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;

  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === 'number') {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === 'number') {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  } // create segInputs only for segs with known heights


  let segInputs = [];
  let unknownHeightSegs = [];

  for (let i = 0; i < segs.length; i += 1) {
    let seg = segs[i];
    let {
      instanceId
    } = seg.eventRange.instance;
    let eventHeight = eventInstanceHeights[instanceId];

    if (eventHeight != null) {
      segInputs.push({
        index: i,
        thickness: eventHeight,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }

  let hiddenEntries = hierarchy.addSegs(segInputs);
  let segRects = hierarchy.toRects();
  let {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  } = placeRects(segRects, segs, cells);
  let moreCnts = [];
  let moreMarginTops = []; // add segs with unknown heights

  for (let seg of unknownHeightSegs) {
    multiColPlacements[seg.firstCol].push({
      seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });

    for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  } // add the hidden entries


  for (let col = 0; col < cells.length; col += 1) {
    moreCnts.push(0);
  }

  for (let hiddenEntry of hiddenEntries) {
    let seg = segs[hiddenEntry.index];
    let hiddenSpan = hiddenEntry.span;
    multiColPlacements[hiddenSpan.start].push({
      seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });

    for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
      moreCnts[col] += 1;
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  } // deal with leftover margins


  for (let col = 0; col < cells.length; col += 1) {
    moreMarginTops.push(leftoverMargins[col]);
  }

  return {
    singleColPlacements,
    multiColPlacements,
    moreCnts,
    moreMarginTops
  };
} // rects ordered by top coord, then left


function placeRects(allRects, segs, cells) {
  let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  let singleColPlacements = [];
  let multiColPlacements = [];
  let leftoverMargins = [];

  for (let col = 0; col < cells.length; col += 1) {
    let rects = rectsByEachCol[col]; // compute all static segs in singlePlacements

    let singlePlacements = [];
    let currentHeight = 0;
    let currentMarginTop = 0;

    for (let rect of rects) {
      let seg = segs[rect.index];
      singlePlacements.push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: true,
        isAbsolute: false,
        absoluteTop: rect.levelCoord,
        marginTop: rect.levelCoord - currentHeight
      });
      currentHeight = rect.levelCoord + rect.thickness;
    } // compute mixed static/absolute segs in multiPlacements


    let multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;

    for (let rect of rects) {
      let seg = segs[rect.index];
      let isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?

      let isFirstCol = rect.span.start === col;
      currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg

      currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg

      if (isAbsolute) {
        currentMarginTop += rect.thickness;

        if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
            isVisible: true,
            isAbsolute: true,
            absoluteTop: rect.levelCoord,
            marginTop: 0
          });
        }
      } else if (isFirstCol) {
        multiPlacements.push({
          seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: currentMarginTop // claim the margin

        });
        currentMarginTop = 0;
      }
    }

    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }

  return {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  };
}

function groupRectsByEachCol(rects, colCnt) {
  let rectsByEachCol = [];

  for (let col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }

  for (let rect of rects) {
    for (let col = rect.span.start; col < rect.span.end; col += 1) {
      rectsByEachCol[col].push(rect);
    }
  }

  return rectsByEachCol;
}

function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }

  let eventRange = seg.eventRange;
  let origRange = eventRange.range;
  let slicedRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.intersectRanges)(origRange, {
    start: cells[spanStart].date,
    end: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.addDays)(cells[spanEnd - 1].date, 1)
  });
  return Object.assign(Object.assign({}, seg), {
    firstCol: spanStart,
    lastCol: spanEnd - 1,
    eventRange: {
      def: eventRange.def,
      ui: Object.assign(Object.assign({}, eventRange.ui), {
        durationEditable: false
      }),
      instance: eventRange.instance,
      range: slicedRange
    },
    isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
    isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
  });
}

class DayGridSegHierarchy extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.SegHierarchy {
  constructor() {
    super(...arguments); // config

    this.hiddenConsumes = false; // allows us to keep hidden entries in the hierarchy so they take up space

    this.forceHidden = {};
  }

  addSegs(segInputs) {
    const hiddenSegs = super.addSegs(segInputs);
    const {
      entriesByLevel
    } = this;

    const excludeHidden = entry => !this.forceHidden[(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEntryKey)(entry)]; // remove the forced-hidden segs


    for (let level = 0; level < entriesByLevel.length; level += 1) {
      entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
    }

    return hiddenSegs;
  }

  handleInvalidInsertion(insertion, entry, hiddenEntries) {
    const {
      entriesByLevel,
      forceHidden
    } = this;
    const {
      touchingEntry,
      touchingLevel,
      touchingLateral
    } = insertion;

    if (this.hiddenConsumes && touchingEntry) {
      const touchingEntryId = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEntryKey)(touchingEntry); // if not already hidden

      if (!forceHidden[touchingEntryId]) {
        if (this.allowReslicing) {
          const placeholderEntry = Object.assign(Object.assign({}, touchingEntry), {
            span: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.intersectSpans)(touchingEntry.span, entry.span)
          });
          const placeholderEntryId = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEntryKey)(placeholderEntry);
          forceHidden[placeholderEntryId] = true;
          entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry; // replace touchingEntry with our placeholder

          this.splitEntry(touchingEntry, entry, hiddenEntries); // split up the touchingEntry, reinsert it
        } else {
          forceHidden[touchingEntryId] = true;
          hiddenEntries.push(touchingEntry);
        }
      }
    }

    return super.handleInvalidInsertion(insertion, entry, hiddenEntries);
  }

}

class TableRow extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.RefMap(); // the <td>

    this.frameElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.RefMap(); // the fc-daygrid-day-frame

    this.fgElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.RefMap(); // the fc-daygrid-day-events

    this.segHarnessRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.RefMap(); // indexed by "instanceId:firstCol"

    this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    };
  }

  render() {
    let {
      props,
      state,
      context
    } = this;
    let {
      options
    } = context;
    let colCnt = props.cells.length;
    let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
    let {
      singleColPlacements,
      multiColPlacements,
      moreCnts,
      moreMarginTops
    } = computeFgSegPlacement((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.sortEventSegs)(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells);
    let isForcedInvisible = // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      ref: this.rootElRef,
      role: "row"
    }, props.renderIntro && props.renderIntro(), props.cells.map((cell, col) => {
      let normalFgNodes = this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
      let mirrorFgNodes = this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
      return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableCell, {
        key: cell.key,
        elRef: this.cellElRefs.createRef(cell.key),
        innerElRef: this.frameElRefs.createRef(cell.key)
        /* FF <td> problem, but okay to use for left/right. TODO: rename prop */
        ,
        dateProfile: props.dateProfile,
        date: cell.date,
        showDayNumber: props.showDayNumbers,
        showWeekNumber: props.showWeekNumbers && col === 0,
        forceDayTop: props.showWeekNumbers
        /* even displaying weeknum for row, not necessarily day */
        ,
        todayRange: props.todayRange,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        extraHookProps: cell.extraHookProps,
        extraDataAttrs: cell.extraDataAttrs,
        extraClassNames: cell.extraClassNames,
        extraDateSpan: cell.extraDateSpan,
        moreCnt: moreCnts[col],
        moreMarginTop: moreMarginTops[col],
        singlePlacements: singleColPlacements[col],
        fgContentElRef: this.fgElRefs.createRef(cell.key),
        fgContent: // Fragment scopes the keys
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, normalFgNodes), (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, mirrorFgNodes)),
        bgContent: // Fragment scopes the keys
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.renderFillSegs(highlightSegsByCol[col], 'highlight'), this.renderFillSegs(businessHoursByCol[col], 'non-business'), this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))
      });
    }));
  }

  componentDidMount() {
    this.updateSizing(true);
  }

  componentDidUpdate(prevProps, prevState) {
    let currentProps = this.props;
    this.updateSizing(!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isPropsEqual)(prevProps, currentProps));
  }

  getHighlightSegs() {
    let {
      props
    } = this;

    if (props.eventDrag && props.eventDrag.segs.length) {
      // messy check
      return props.eventDrag.segs;
    }

    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }

    return props.dateSelectionSegs;
  }

  getMirrorSegs() {
    let {
      props
    } = this;

    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }

    return [];
  }

  renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
    let {
      context
    } = this;
    let {
      eventSelection
    } = this.props;
    let {
      framePositions
    } = this.state;
    let defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1

    let isMirror = isDragging || isResizing || isDateSelecting;
    let nodes = [];

    if (framePositions) {
      for (let placement of segPlacements) {
        let {
          seg
        } = placement;
        let {
          instanceId
        } = seg.eventRange.instance;
        let key = instanceId + ':' + col;
        let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
        let isAbsolute = placement.isAbsolute;
        let left = '';
        let right = '';

        if (isAbsolute) {
          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        }
        /*
        known bug: events that are force to be list-item but span multiple days still take up space in later columns
        todo: in print view, for multi-day events, don't display title within non-start/end segs
        */


        nodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''),
          key: key,
          ref: isMirror ? null : this.segHarnessRefs.createRef(key),
          style: {
            visibility: isVisible ? '' : 'hidden',
            marginTop: isAbsolute ? '' : placement.marginTop,
            top: isAbsolute ? placement.absoluteTop : '',
            left,
            right
          }
        }, hasListItemDisplay(seg) ? (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableListItemEvent, Object.assign({
          seg: seg,
          isDragging: isDragging,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, todayRange))) : (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableBlockEvent, Object.assign({
          seg: seg,
          isDragging: isDragging,
          isResizing: isResizing,
          isDateSelecting: isDateSelecting,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, todayRange)))));
      }
    }

    return nodes;
  }

  renderFillSegs(segs, fillType) {
    let {
      isRtl
    } = this.context;
    let {
      todayRange
    } = this.props;
    let {
      framePositions
    } = this.state;
    let nodes = [];

    if (framePositions) {
      for (let seg of segs) {
        let leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventRangeKey)(seg.eventRange),
          className: "fc-daygrid-bg-harness",
          style: leftRightCss
        }, fillType === 'bg-event' ? (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BgEvent, Object.assign({
          seg: seg
        }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, todayRange))) : (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.renderFill)(fillType)));
      }
    }

    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, ...nodes);
  }

  updateSizing(isExternalSizingChange) {
    let {
      props,
      frameElRefs
    } = this;

    if (!props.forPrint && props.clientWidth !== null // positioning ready?
    ) {
      if (isExternalSizingChange) {
        let frameEls = props.cells.map(cell => frameElRefs.currentMap[cell.key]);

        if (frameEls.length) {
          let originEl = this.rootElRef.current;
          this.setState({
            framePositions: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.PositionCache(originEl, frameEls, true, // isHorizontal
            false)
          });
        }
      }

      const oldInstanceHeights = this.state.eventInstanceHeights;
      const newInstanceHeights = this.queryEventInstanceHeights();
      const limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        eventInstanceHeights: Object.assign(Object.assign({}, oldInstanceHeights), newInstanceHeights),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  }

  queryEventInstanceHeights() {
    let segElMap = this.segHarnessRefs.currentMap;
    let eventInstanceHeights = {}; // get the max height amongst instance segs

    for (let key in segElMap) {
      let height = Math.round(segElMap[key].getBoundingClientRect().height);
      let instanceId = key.split(':')[0]; // deconstruct how renderFgSegs makes the key

      eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
    }

    return eventInstanceHeights;
  }

  computeMaxContentHeight() {
    let firstKey = this.props.cells[0].key;
    let cellEl = this.cellElRefs.currentMap[firstKey];
    let fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  }

  getCellEls() {
    let elMap = this.cellElRefs.currentMap;
    return this.props.cells.map(cell => elMap[cell.key]);
  }

}

TableRow.addStateEquality({
  eventInstanceHeights: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isPropsEqual
});

function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }

  let topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?

  return mirrorSegs.map(seg => ({
    seg,
    isVisible: true,
    isAbsolute: true,
    absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
    marginTop: 0
  }));
}

function buildAbsoluteTopHash(colPlacements) {
  let topsByInstanceId = {};

  for (let placements of colPlacements) {
    for (let placement of placements) {
      topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
    }
  }

  return topsByInstanceId;
}

class Table extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.splitBusinessHourSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByRow);
    this.splitBgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByRow);
    this.splitFgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByRow);
    this.splitDateSelectionSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByRow);
    this.splitEventDrag = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitInteractionByRow);
    this.splitEventResize = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitInteractionByRow);
    this.rowRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.RefMap();

    this.handleRootEl = rootEl => {
      this.rootEl = rootEl;

      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }

  render() {
    let {
      props
    } = this;
    let {
      dateProfile,
      dayMaxEventRows,
      dayMaxEvents,
      expandRows
    } = props;
    let rowCnt = props.cells.length;
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true; // if rows can't expand to fill fixed height, can't do balanced-height event limit
    // TODO: best place to normalize these options?

    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }

    let classNames = ['fc-daygrid-body', limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced', expandRows ? '' : 'fc-daygrid-body-natural' // will height of one row depend on the others?
    ];
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames.join(' '),
      ref: this.handleRootEl,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.NowTimer, {
      unit: "day"
    }, (nowDate, todayRange) => (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      role: "presentation",
      className: "fc-scrollgrid-sync-table",
      style: {
        width: props.clientWidth,
        minWidth: props.tableMinWidth,
        height: expandRows ? props.clientHeight : ''
      }
    }, props.colGroupNode, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
      role: "presentation"
    }, props.cells.map((cells, row) => (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableRow, {
      ref: this.rowRefs.createRef(row),
      key: cells.length ? cells[0].date.toISOString()
      /* best? or put key on cell? or use diff formatter? */
      : row // in case there are no cells (like when resource view is loading)
      ,
      showDayNumbers: rowCnt > 1,
      showWeekNumbers: props.showWeekNumbers,
      todayRange: todayRange,
      dateProfile: dateProfile,
      cells: cells,
      renderIntro: props.renderRowIntro,
      businessHourSegs: businessHourSegsByRow[row],
      eventSelection: props.eventSelection,
      bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay)
      /* hack */
      ,
      fgEventSegs: fgEventSegsByRow[row],
      dateSelectionSegs: dateSelectionSegsByRow[row],
      eventDrag: eventDragByRow[row],
      eventResize: eventResizeByRow[row],
      dayMaxEvents: dayMaxEvents,
      dayMaxEventRows: dayMaxEventRows,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    })))))));
  } // Hit System
  // ----------------------------------------------------------------------------------------------------


  prepareHits() {
    this.rowPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.PositionCache(this.rootEl, this.rowRefs.collect().map(rowObj => rowObj.getCellEls()[0]), // first cell el in each row. TODO: not optimal
    false, true);
    this.colPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
    true, // horizontal
    false);
  }

  queryHit(positionLeft, positionTop) {
    let {
      colPositions,
      rowPositions
    } = this;
    let col = colPositions.leftToIndex(positionLeft);
    let row = rowPositions.topToIndex(positionTop);

    if (row != null && col != null) {
      let cell = this.props.cells[row][col];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({
          range: this.getCellRange(row, col),
          allDay: true
        }, cell.extraDateSpan),
        dayEl: this.getCellEl(row, col),
        rect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        },
        layer: 0
      };
    }

    return null;
  }

  getCellEl(row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
  }

  getCellRange(row, col) {
    let start = this.props.cells[row][col].date;
    let end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.addDays)(start, 1);
    return {
      start,
      end
    };
  }

}

function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}

class DayTableSlicer extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Slicer {
  constructor() {
    super(...arguments);
    this.forceDayIfListItem = true;
  }

  sliceRange(dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  }

}

class DayTable extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.slicer = new DayTableSlicer();
    this.tableRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  }

  render() {
    let {
      props,
      context
    } = this;
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(Table, Object.assign({
      ref: this.tableRef
    }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
      dateProfile: props.dateProfile,
      cells: props.dayTableModel.cells,
      colGroupNode: props.colGroupNode,
      tableMinWidth: props.tableMinWidth,
      renderRowIntro: props.renderRowIntro,
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      showWeekNumbers: props.showWeekNumbers,
      expandRows: props.expandRows,
      headerAlignElRef: props.headerAlignElRef,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    }));
  }

}

class DayTableView extends TableView {
  constructor() {
    super(...arguments);
    this.buildDayTableModel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.memoize)(buildDayTableModel);
    this.headerRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.tableRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  }

  render() {
    let {
      options,
      dateProfileGenerator
    } = this.context;
    let {
      props
    } = this;
    let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    let headerContent = options.dayHeaders && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DayHeader, {
      ref: this.headerRef,
      dateProfile: props.dateProfile,
      dates: dayTableModel.headerDates,
      datesRepDistinctDays: dayTableModel.rowCnt === 1
    });

    let bodyContent = contentArg => (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createElement)(DayTable, {
      ref: this.tableRef,
      dateProfile: props.dateProfile,
      dayTableModel: dayTableModel,
      businessHours: props.businessHours,
      dateSelection: props.dateSelection,
      eventStore: props.eventStore,
      eventUiBases: props.eventUiBases,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      nextDayThreshold: options.nextDayThreshold,
      colGroupNode: contentArg.tableColGroupNode,
      tableMinWidth: contentArg.tableMinWidth,
      dayMaxEvents: options.dayMaxEvents,
      dayMaxEventRows: options.dayMaxEventRows,
      showWeekNumbers: options.weekNumbers,
      expandRows: !props.isHeightAuto,
      headerAlignElRef: this.headerElRef,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      forPrint: props.forPrint
    });

    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  }

}

function buildDayTableModel(dateProfile, dateProfileGenerator) {
  let daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

class TableDateProfileGenerator extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.DateProfileGenerator {
  // Computes the date range that will be rendered.
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    let {
      dateEnv
    } = this.props;
    let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
    let start = renderRange.start;
    let end = renderRange.end;
    let endOfWeek; // year and month views should be aligned with weeks. this is already done for week

    if (/^(year|month)$/.test(currentRangeUnit)) {
      start = dateEnv.startOfWeek(start); // make end-of-week if not already

      endOfWeek = dateEnv.startOfWeek(end);

      if (endOfWeek.valueOf() !== end.valueOf()) {
        end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.addWeeks)(endOfWeek, 1);
      }
    } // ensure 6 weeks


    if (this.props.monthMode && this.props.fixedWeekCount) {
      let rowCnt = Math.ceil( // could be partial weeks due to hiddenDays
      (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffWeeks)(start, end));
      end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.addWeeks)(end, 6 - rowCnt);
    }

    return {
      start,
      end
    };
  }

}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n:root {\n  --fc-daygrid-event-dot-width: 8px;\n}\n/* help things clear margins of inner content */\n.fc-daygrid-day-frame,\n.fc-daygrid-day-events,\n.fc-daygrid-event-harness { /* for event top/bottom margins */\n}\n.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-body { /* a <div> that wraps the table */\n    position: relative;\n    z-index: 1; /* container inner z-index's because <tr>s can't do it */\n  }\n.fc .fc-daygrid-day.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n.fc .fc-daygrid-day-frame {\n    position: relative;\n    min-height: 100%; /* seems to work better than `height` because sets height after rows/cells naturally do it */\n  }\n.fc {\n\n  /* cell top */\n\n}\n.fc .fc-daygrid-day-top {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n.fc .fc-day-other .fc-daygrid-day-top {\n    opacity: 0.3;\n  }\n.fc {\n\n  /* day number (within cell top) */\n\n}\n.fc .fc-daygrid-day-number {\n    position: relative;\n    z-index: 4;\n    padding: 4px;\n  }\n.fc {\n\n  /* event container */\n\n}\n.fc .fc-daygrid-day-events {\n    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */\n  }\n.fc {\n\n  /* positioning for balanced vs natural */\n\n}\n.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {\n      position: relative; /* for containing abs positioned event harnesses */\n      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */\n    }\n.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */\n  }\n.fc .fc-daygrid-body-natural .fc-daygrid-day-events {\n      margin-bottom: 1em;\n    }\n.fc {\n\n  /* event harness */\n\n}\n.fc .fc-daygrid-event-harness {\n    position: relative;\n  }\n.fc .fc-daygrid-event-harness-abs {\n    position: absolute;\n    top: 0; /* fallback coords for when cannot yet be computed */\n    left: 0; /* */\n    right: 0; /* */\n  }\n.fc .fc-daygrid-bg-harness {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n.fc {\n\n  /* bg content */\n\n}\n.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }\n.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }\n.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }\n.fc {\n\n  /* events */\n\n}\n.fc .fc-daygrid-event {\n    z-index: 6;\n    margin-top: 1px;\n  }\n.fc .fc-daygrid-event.fc-event-mirror {\n    z-index: 7;\n  }\n.fc {\n\n  /* cell bottom (within day-events) */\n\n}\n.fc .fc-daygrid-day-bottom {\n    font-size: .85em;\n    padding: 2px 3px 0\n  }\n.fc .fc-daygrid-day-bottom:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-more-link {\n    position: relative;\n    z-index: 4;\n    cursor: pointer;\n  }\n.fc {\n\n  /* week number (within frame) */\n\n}\n.fc .fc-daygrid-week-number {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    padding: 2px;\n    min-width: 1.5em;\n    text-align: center;\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    color: #808080;\n    color: var(--fc-neutral-text-color, #808080);\n  }\n.fc {\n\n  /* popover */\n\n}\n.fc .fc-more-popover .fc-popover-body {\n    min-width: 220px;\n    padding: 10px;\n  }\n.fc-direction-ltr .fc-daygrid-event.fc-event-start,\n.fc-direction-rtl .fc-daygrid-event.fc-event-end {\n  margin-left: 2px;\n}\n.fc-direction-ltr .fc-daygrid-event.fc-event-end,\n.fc-direction-rtl .fc-daygrid-event.fc-event-start {\n  margin-right: 2px;\n}\n.fc-direction-ltr .fc-daygrid-week-number {\n    left: 0;\n    border-radius: 0 0 3px 0;\n  }\n.fc-direction-rtl .fc-daygrid-week-number {\n    right: 0;\n    border-radius: 0 0 0 3px;\n  }\n.fc-liquid-hack .fc-daygrid-day-frame {\n    position: static; /* will cause inner absolute stuff to expand to <td> */\n  }\n.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */\n  position: relative; /* for z-indexes assigned later */\n  white-space: nowrap;\n  border-radius: 3px; /* dot event needs this to when selected */\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n}\n/* --- the rectangle (\"block\") style of event --- */\n.fc-daygrid-block-event .fc-event-time {\n    font-weight: bold;\n  }\n.fc-daygrid-block-event .fc-event-time,\n  .fc-daygrid-block-event .fc-event-title {\n    padding: 1px;\n  }\n/* --- the dot style of event --- */\n.fc-daygrid-dot-event {\n  display: flex;\n  align-items: center;\n  padding: 2px 0\n\n}\n.fc-daygrid-dot-event .fc-event-title {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n    overflow: hidden;\n    font-weight: bold;\n  }\n.fc-daygrid-dot-event:hover,\n  .fc-daygrid-dot-event.fc-event-mirror {\n    background: rgba(0, 0, 0, 0.1);\n  }\n.fc-daygrid-dot-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n.fc-daygrid-event-dot { /* the actual dot */\n  margin: 0 4px;\n  box-sizing: content-box;\n  width: 0;\n  height: 0;\n  border: 4px solid #3788d8;\n  border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8);\n  border-radius: 4px;\n  border-radius: calc(var(--fc-daygrid-event-dot-width, 8px) / 2);\n}\n/* --- spacing between time and title --- */\n.fc-direction-ltr .fc-daygrid-event .fc-event-time {\n    margin-right: 3px;\n  }\n.fc-direction-rtl .fc-daygrid-event .fc-event-time {\n    margin-left: 3px;\n  }\n";
styleInject(css_248z);
var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  initialView: 'dayGridMonth',
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: 'dayGrid',
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: 'dayGrid',
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: 'dayGrid',
      duration: {
        months: 1
      },
      monthMode: true,
      fixedWeekCount: true
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ 85194:
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/main.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Draggable": () => (/* binding */ ExternalDraggable),
/* harmony export */   "FeaturefulElementDragging": () => (/* binding */ FeaturefulElementDragging),
/* harmony export */   "PointerDragging": () => (/* binding */ PointerDragging),
/* harmony export */   "ThirdPartyDraggable": () => (/* binding */ ThirdPartyDraggable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common */ 7085);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/*!
FullCalendar v6.0.0-beta.1
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/


_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.touchMouseIgnoreWait = 500;
let ignoreMouseDepth = 0;
let listenerCnt = 0;
let isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/

class PointerDragging {
  constructor(containerEl) {
    this.subjectEl = null; // options that can be directly assigned by caller

    this.selector = ''; // will cause subjectEl in all emitted events to be this element

    this.handleSelector = '';
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true; // for simulating pointermove on scroll
    // internal states

    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false; // Mouse
    // ----------------------------------------------------------------------------------------------------

    this.handleMouseDown = ev => {
      if (!this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && this.tryStart(ev)) {
        let pev = this.createEventFromMouse(ev, true);
        this.emitter.trigger('pointerdown', pev);
        this.initScrollWatch(pev);

        if (!this.shouldIgnoreMove) {
          document.addEventListener('mousemove', this.handleMouseMove);
        }

        document.addEventListener('mouseup', this.handleMouseUp);
      }
    };

    this.handleMouseMove = ev => {
      let pev = this.createEventFromMouse(ev);
      this.recordCoords(pev);
      this.emitter.trigger('pointermove', pev);
    };

    this.handleMouseUp = ev => {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      this.emitter.trigger('pointerup', this.createEventFromMouse(ev));
      this.cleanup(); // call last so that pointerup has access to props
    }; // Touch
    // ----------------------------------------------------------------------------------------------------


    this.handleTouchStart = ev => {
      if (this.tryStart(ev)) {
        this.isTouchDragging = true;
        let pev = this.createEventFromTouch(ev, true);
        this.emitter.trigger('pointerdown', pev);
        this.initScrollWatch(pev); // unlike mouse, need to attach to target, not document
        // https://stackoverflow.com/a/45760014

        let targetEl = ev.target;

        if (!this.shouldIgnoreMove) {
          targetEl.addEventListener('touchmove', this.handleTouchMove);
        }

        targetEl.addEventListener('touchend', this.handleTouchEnd);
        targetEl.addEventListener('touchcancel', this.handleTouchEnd); // treat it as a touch end
        // attach a handler to get called when ANY scroll action happens on the page.
        // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
        // http://stackoverflow.com/a/32954565/96342

        window.addEventListener('scroll', this.handleTouchScroll, true);
      }
    };

    this.handleTouchMove = ev => {
      let pev = this.createEventFromTouch(ev);
      this.recordCoords(pev);
      this.emitter.trigger('pointermove', pev);
    };

    this.handleTouchEnd = ev => {
      if (this.isDragging) {
        // done to guard against touchend followed by touchcancel
        let targetEl = ev.target;
        targetEl.removeEventListener('touchmove', this.handleTouchMove);
        targetEl.removeEventListener('touchend', this.handleTouchEnd);
        targetEl.removeEventListener('touchcancel', this.handleTouchEnd);
        window.removeEventListener('scroll', this.handleTouchScroll, true); // useCaptured=true

        this.emitter.trigger('pointerup', this.createEventFromTouch(ev));
        this.cleanup(); // call last so that pointerup has access to props

        this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };

    this.handleTouchScroll = () => {
      this.wasTouchScroll = true;
    };

    this.handleScroll = ev => {
      if (!this.shouldIgnoreMove) {
        let pageX = window.pageXOffset - this.prevScrollX + this.prevPageX;
        let pageY = window.pageYOffset - this.prevScrollY + this.prevPageY;
        this.emitter.trigger('pointermove', {
          origEvent: ev,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX,
          pageY,
          deltaX: pageX - this.origPageX,
          deltaY: pageY - this.origPageY
        });
      }
    };

    this.containerEl = containerEl;
    this.emitter = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Emitter();
    containerEl.addEventListener('mousedown', this.handleMouseDown);
    containerEl.addEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerCreated();
  }

  destroy() {
    this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
    this.containerEl.removeEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerDestroyed();
  }

  tryStart(ev) {
    let subjectEl = this.querySubjectEl(ev);
    let downEl = ev.target;

    if (subjectEl && (!this.handleSelector || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(downEl, this.handleSelector))) {
      this.subjectEl = subjectEl;
      this.isDragging = true; // do this first so cancelTouchScroll will work

      this.wasTouchScroll = false;
      return true;
    }

    return false;
  }

  cleanup() {
    isWindowTouchMoveCancelled = false;
    this.isDragging = false;
    this.subjectEl = null; // keep wasTouchScroll around for later access

    this.destroyScrollWatch();
  }

  querySubjectEl(ev) {
    if (this.selector) {
      return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(ev.target, this.selector);
    }

    return this.containerEl;
  }

  shouldIgnoreMouse() {
    return ignoreMouseDepth || this.isTouchDragging;
  } // can be called by user of this class, to cancel touch-based scrolling for the current drag


  cancelTouchScroll() {
    if (this.isDragging) {
      isWindowTouchMoveCancelled = true;
    }
  } // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------


  initScrollWatch(ev) {
    if (this.shouldWatchScroll) {
      this.recordCoords(ev);
      window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
    }
  }

  recordCoords(ev) {
    if (this.shouldWatchScroll) {
      this.prevPageX = ev.pageX;
      this.prevPageY = ev.pageY;
      this.prevScrollX = window.pageXOffset;
      this.prevScrollY = window.pageYOffset;
    }
  }

  destroyScrollWatch() {
    if (this.shouldWatchScroll) {
      window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
    }
  } // Event Normalization
  // ----------------------------------------------------------------------------------------------------


  createEventFromMouse(ev, isFirst) {
    let deltaX = 0;
    let deltaY = 0; // TODO: repeat code

    if (isFirst) {
      this.origPageX = ev.pageX;
      this.origPageY = ev.pageY;
    } else {
      deltaX = ev.pageX - this.origPageX;
      deltaY = ev.pageY - this.origPageY;
    }

    return {
      origEvent: ev,
      isTouch: false,
      subjectEl: this.subjectEl,
      pageX: ev.pageX,
      pageY: ev.pageY,
      deltaX,
      deltaY
    };
  }

  createEventFromTouch(ev, isFirst) {
    let touches = ev.touches;
    let pageX;
    let pageY;
    let deltaX = 0;
    let deltaY = 0; // if touch coords available, prefer,
    // because FF would give bad ev.pageX ev.pageY

    if (touches && touches.length) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    } else {
      pageX = ev.pageX;
      pageY = ev.pageY;
    } // TODO: repeat code


    if (isFirst) {
      this.origPageX = pageX;
      this.origPageY = pageY;
    } else {
      deltaX = pageX - this.origPageX;
      deltaY = pageY - this.origPageY;
    }

    return {
      origEvent: ev,
      isTouch: true,
      subjectEl: this.subjectEl,
      pageX,
      pageY,
      deltaX,
      deltaY
    };
  }

} // Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)


function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
} // Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------


function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(() => {
    ignoreMouseDepth -= 1;
  }, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.touchMouseIgnoreWait);
} // We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------


function listenerCreated() {
  listenerCnt += 1;

  if (listenerCnt === 1) {
    window.addEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}

function listenerDestroyed() {
  listenerCnt -= 1;

  if (!listenerCnt) {
    window.removeEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}

function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}
/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/


class ElementMirror {
  constructor() {
    this.isVisible = false; // must be explicitly enabled

    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null; // screen coords relative to viewport
    // options that can be set directly by caller

    this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues

    this.zIndex = 9999;
    this.revertDuration = 0;
  }

  start(sourceEl, pageX, pageY) {
    this.sourceEl = sourceEl;
    this.sourceElRect = this.sourceEl.getBoundingClientRect();
    this.origScreenX = pageX - window.pageXOffset;
    this.origScreenY = pageY - window.pageYOffset;
    this.deltaX = 0;
    this.deltaY = 0;
    this.updateElPosition();
  }

  handleMove(pageX, pageY) {
    this.deltaX = pageX - window.pageXOffset - this.origScreenX;
    this.deltaY = pageY - window.pageYOffset - this.origScreenY;
    this.updateElPosition();
  } // can be called before start


  setIsVisible(bool) {
    if (bool) {
      if (!this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = '';
        }

        this.isVisible = bool; // needs to happen before updateElPosition

        this.updateElPosition(); // because was not updating the position while invisible
      }
    } else if (this.isVisible) {
      if (this.mirrorEl) {
        this.mirrorEl.style.display = 'none';
      }

      this.isVisible = bool;
    }
  } // always async


  stop(needsRevertAnimation, callback) {
    let done = () => {
      this.cleanup();
      callback();
    };

    if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && ( // if 0, transition won't work
    this.deltaX || this.deltaY) // if same coords, transition won't work
    ) {
      this.doRevertAnimation(done, this.revertDuration);
    } else {
      setTimeout(done, 0);
    }
  }

  doRevertAnimation(callback, revertDuration) {
    let mirrorEl = this.mirrorEl;
    let finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened

    mirrorEl.style.transition = 'top ' + revertDuration + 'ms,' + 'left ' + revertDuration + 'ms';
    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyStyle)(mirrorEl, {
      left: finalSourceElRect.left,
      top: finalSourceElRect.top
    });
    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.whenTransitionDone)(mirrorEl, () => {
      mirrorEl.style.transition = '';
      callback();
    });
  }

  cleanup() {
    if (this.mirrorEl) {
      (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.removeElement)(this.mirrorEl);
      this.mirrorEl = null;
    }

    this.sourceEl = null;
  }

  updateElPosition() {
    if (this.sourceEl && this.isVisible) {
      (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyStyle)(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
  }

  getMirrorEl() {
    let sourceElRect = this.sourceElRect;
    let mirrorEl = this.mirrorEl;

    if (!mirrorEl) {
      mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
      // we don't want long taps or any mouse interaction causing selection/menus.
      // would use preventSelection(), but that prevents selectstart, causing problems.

      mirrorEl.classList.add('fc-unselectable');
      mirrorEl.classList.add('fc-event-dragging');
      (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyStyle)(mirrorEl, {
        position: 'fixed',
        zIndex: this.zIndex,
        visibility: '',
        boxSizing: 'border-box',
        width: sourceElRect.right - sourceElRect.left,
        height: sourceElRect.bottom - sourceElRect.top,
        right: 'auto',
        bottom: 'auto',
        margin: 0
      });
      this.parentNode.appendChild(mirrorEl);
    }

    return mirrorEl;
  }

}
/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/


class ScrollGeomCache extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ScrollController {
  constructor(scrollController, doesListening) {
    super();

    this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop();
      this.scrollLeft = this.scrollController.getScrollLeft();
      this.handleScrollChange();
    };

    this.scrollController = scrollController;
    this.doesListening = doesListening;
    this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
    this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
    this.scrollWidth = scrollController.getScrollWidth();
    this.scrollHeight = scrollController.getScrollHeight();
    this.clientWidth = scrollController.getClientWidth();
    this.clientHeight = scrollController.getClientHeight();
    this.clientRect = this.computeClientRect(); // do last in case it needs cached values

    if (this.doesListening) {
      this.getEventTarget().addEventListener('scroll', this.handleScroll);
    }
  }

  destroy() {
    if (this.doesListening) {
      this.getEventTarget().removeEventListener('scroll', this.handleScroll);
    }
  }

  getScrollTop() {
    return this.scrollTop;
  }

  getScrollLeft() {
    return this.scrollLeft;
  }

  setScrollTop(top) {
    this.scrollController.setScrollTop(top);

    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
      this.handleScrollChange();
    }
  }

  setScrollLeft(top) {
    this.scrollController.setScrollLeft(top);

    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
      this.handleScrollChange();
    }
  }

  getClientWidth() {
    return this.clientWidth;
  }

  getClientHeight() {
    return this.clientHeight;
  }

  getScrollWidth() {
    return this.scrollWidth;
  }

  getScrollHeight() {
    return this.scrollHeight;
  }

  handleScrollChange() {}

}

class ElementScrollGeomCache extends ScrollGeomCache {
  constructor(el, doesListening) {
    super(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ElementScrollController(el), doesListening);
  }

  getEventTarget() {
    return this.scrollController.el;
  }

  computeClientRect() {
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.computeInnerRect)(this.scrollController.el);
  }

}

class WindowScrollGeomCache extends ScrollGeomCache {
  constructor(doesListening) {
    super(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.WindowScrollController(), doesListening);
  }

  getEventTarget() {
    return window;
  }

  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  } // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls


  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }

} // If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance


const getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/

class AutoScroller {
  constructor() {
    // options that can be set by caller
    this.isEnabled = true;
    this.scrollQuery = [window, '.fc-scroller'];
    this.edgeThreshold = 50; // pixels

    this.maxVelocity = 300; // pixels per second
    // internal state

    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null; // protect against the initial pointerdown being too close to an edge and starting the scroll

    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;

    this.animate = () => {
      if (this.isAnimating) {
        // wasn't cancelled between animation calls
        let edge = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);

        if (edge) {
          let now = getTime();
          this.handleSide(edge, (now - this.msSinceRequest) / 1000);
          this.requestAnimation(now);
        } else {
          this.isAnimating = false; // will stop animation
        }
      }
    };
  }

  start(pageX, pageY, scrollStartEl) {
    if (this.isEnabled) {
      this.scrollCaches = this.buildCaches(scrollStartEl);
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.handleMove(pageX, pageY);
    }
  }

  handleMove(pageX, pageY) {
    if (this.isEnabled) {
      let pointerScreenX = pageX - window.pageXOffset;
      let pointerScreenY = pageY - window.pageYOffset;
      let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
      let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;

      if (yDelta < 0) {
        this.everMovedUp = true;
      } else if (yDelta > 0) {
        this.everMovedDown = true;
      }

      if (xDelta < 0) {
        this.everMovedLeft = true;
      } else if (xDelta > 0) {
        this.everMovedRight = true;
      }

      this.pointerScreenX = pointerScreenX;
      this.pointerScreenY = pointerScreenY;

      if (!this.isAnimating) {
        this.isAnimating = true;
        this.requestAnimation(getTime());
      }
    }
  }

  stop() {
    if (this.isEnabled) {
      this.isAnimating = false; // will stop animation

      for (let scrollCache of this.scrollCaches) {
        scrollCache.destroy();
      }

      this.scrollCaches = null;
    }
  }

  requestAnimation(now) {
    this.msSinceRequest = now;
    requestAnimationFrame(this.animate);
  }

  handleSide(edge, seconds) {
    let {
      scrollCache
    } = edge;
    let {
      edgeThreshold
    } = this;
    let invDistance = edgeThreshold - edge.distance;
    let velocity = // the closer to the edge, the faster we scroll
    invDistance * invDistance / (edgeThreshold * edgeThreshold) * // quadratic
    this.maxVelocity * seconds;
    let sign = 1;

    switch (edge.name) {
      case 'left':
        sign = -1;
      // falls through

      case 'right':
        scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
        break;

      case 'top':
        sign = -1;
      // falls through

      case 'bottom':
        scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
        break;
    }
  } // left/top are relative to document topleft


  computeBestEdge(left, top) {
    let {
      edgeThreshold
    } = this;
    let bestSide = null;
    let scrollCaches = this.scrollCaches || [];

    for (let scrollCache of scrollCaches) {
      let rect = scrollCache.clientRect;
      let leftDist = left - rect.left;
      let rightDist = rect.right - left;
      let topDist = top - rect.top;
      let bottomDist = rect.bottom - top; // completely within the rect?

      if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
        if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
          bestSide = {
            scrollCache,
            name: 'top',
            distance: topDist
          };
        }

        if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
          bestSide = {
            scrollCache,
            name: 'bottom',
            distance: bottomDist
          };
        }

        if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
          bestSide = {
            scrollCache,
            name: 'left',
            distance: leftDist
          };
        }

        if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
          bestSide = {
            scrollCache,
            name: 'right',
            distance: rightDist
          };
        }
      }
    }

    return bestSide;
  }

  buildCaches(scrollStartEl) {
    return this.queryScrollEls(scrollStartEl).map(el => {
      if (el === window) {
        return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
      }

      return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
    });
  }

  queryScrollEls(scrollStartEl) {
    let els = [];

    for (let query of this.scrollQuery) {
      if (typeof query === 'object') {
        els.push(query);
      } else {
        els.push(...Array.prototype.slice.call((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElRoot)(scrollStartEl).querySelectorAll(query)));
      }
    }

    return els;
  }

}
/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/


class FeaturefulElementDragging extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ElementDragging {
  constructor(containerEl, selector) {
    super(containerEl);
    this.containerEl = containerEl; // options that can be directly set by caller
    // the caller can also set the PointerDragging's options as well

    this.delay = null;
    this.minDistance = 0;
    this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag

    this.mirrorNeedsRevert = false;
    this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup

    this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation

    this.isDelayEnded = false;
    this.isDistanceSurpassed = false;
    this.delayTimeoutId = null;

    this.onPointerDown = ev => {
      if (!this.isDragging) {
        // so new drag doesn't happen while revert animation is going
        this.isInteracting = true;
        this.isDelayEnded = false;
        this.isDistanceSurpassed = false;
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.preventSelection)(document.body);
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.preventContextMenu)(document.body); // prevent links from being visited if there's an eventual drag.
        // also prevents selection in older browsers (maybe?).
        // not necessary for touch, besides, browser would complain about passiveness.

        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }

        this.emitter.trigger('pointerdown', ev);

        if (this.isInteracting && // not destroyed via pointerdown handler
        !this.pointer.shouldIgnoreMove) {
          // actions related to initiating dragstart+dragmove+dragend...
          this.mirror.setIsVisible(false); // reset. caller must set-visible

          this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down

          this.startDelay(ev);

          if (!this.minDistance) {
            this.handleDistanceSurpassed(ev);
          }
        }
      }
    };

    this.onPointerMove = ev => {
      if (this.isInteracting) {
        this.emitter.trigger('pointermove', ev);

        if (!this.isDistanceSurpassed) {
          let minDistance = this.minDistance;
          let distanceSq; // current distance from the origin, squared

          let {
            deltaX,
            deltaY
          } = ev;
          distanceSq = deltaX * deltaX + deltaY * deltaY;

          if (distanceSq >= minDistance * minDistance) {
            // use pythagorean theorem
            this.handleDistanceSurpassed(ev);
          }
        }

        if (this.isDragging) {
          // a real pointer move? (not one simulated by scrolling)
          if (ev.origEvent.type !== 'scroll') {
            this.mirror.handleMove(ev.pageX, ev.pageY);
            this.autoScroller.handleMove(ev.pageX, ev.pageY);
          }

          this.emitter.trigger('dragmove', ev);
        }
      }
    };

    this.onPointerUp = ev => {
      if (this.isInteracting) {
        this.isInteracting = false;
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.allowSelection)(document.body);
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.allowContextMenu)(document.body);
        this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert

        if (this.isDragging) {
          this.autoScroller.stop();
          this.tryStopDrag(ev); // which will stop the mirror
        }

        if (this.delayTimeoutId) {
          clearTimeout(this.delayTimeoutId);
          this.delayTimeoutId = null;
        }
      }
    };

    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', this.onPointerDown);
    pointer.emitter.on('pointermove', this.onPointerMove);
    pointer.emitter.on('pointerup', this.onPointerUp);

    if (selector) {
      pointer.selector = selector;
    }

    this.mirror = new ElementMirror();
    this.autoScroller = new AutoScroller();
  }

  destroy() {
    this.pointer.destroy(); // HACK: simulate a pointer-up to end the current drag
    // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)

    this.onPointerUp({});
  }

  startDelay(ev) {
    if (typeof this.delay === 'number') {
      this.delayTimeoutId = setTimeout(() => {
        this.delayTimeoutId = null;
        this.handleDelayEnd(ev);
      }, this.delay); // not assignable to number!
    } else {
      this.handleDelayEnd(ev);
    }
  }

  handleDelayEnd(ev) {
    this.isDelayEnded = true;
    this.tryStartDrag(ev);
  }

  handleDistanceSurpassed(ev) {
    this.isDistanceSurpassed = true;
    this.tryStartDrag(ev);
  }

  tryStartDrag(ev) {
    if (this.isDelayEnded && this.isDistanceSurpassed) {
      if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
        this.isDragging = true;
        this.mirrorNeedsRevert = false;
        this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
        this.emitter.trigger('dragstart', ev);

        if (this.touchScrollAllowed === false) {
          this.pointer.cancelTouchScroll();
        }
      }
    }
  }

  tryStopDrag(ev) {
    // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
    // that come from the document to fire beforehand. much more convenient this way.
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
  }

  stopDrag(ev) {
    this.isDragging = false;
    this.emitter.trigger('dragend', ev);
  } // fill in the implementations...


  setIgnoreMove(bool) {
    this.pointer.shouldIgnoreMove = bool;
  }

  setMirrorIsVisible(bool) {
    this.mirror.setIsVisible(bool);
  }

  setMirrorNeedsRevert(bool) {
    this.mirrorNeedsRevert = bool;
  }

  setAutoScrollEnabled(bool) {
    this.autoScroller.isEnabled = bool;
  }

}
/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/


class OffsetTracker {
  constructor(el) {
    this.origRect = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.computeRect)(el); // will work fine for divs that have overflow:hidden

    this.scrollCaches = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getClippingParents)(el).map(scrollEl => new ElementScrollGeomCache(scrollEl, true));
  }

  destroy() {
    for (let scrollCache of this.scrollCaches) {
      scrollCache.destroy();
    }
  }

  computeLeft() {
    let left = this.origRect.left;

    for (let scrollCache of this.scrollCaches) {
      left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
    }

    return left;
  }

  computeTop() {
    let top = this.origRect.top;

    for (let scrollCache of this.scrollCaches) {
      top += scrollCache.origScrollTop - scrollCache.getScrollTop();
    }

    return top;
  }

  isWithinClipping(pageX, pageY) {
    let point = {
      left: pageX,
      top: pageY
    };

    for (let scrollCache of this.scrollCaches) {
      if (!isIgnoredClipping(scrollCache.getEventTarget()) && !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.pointInsideRect)(point, scrollCache.clientRect)) {
        return false;
      }
    }

    return true;
  }

} // certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615


function isIgnoredClipping(node) {
  let tagName = node.tagName;
  return tagName === 'HTML' || tagName === 'BODY';
}
/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/


class HitDragging {
  constructor(dragging, droppableStore) {
    // options that can be set by caller
    this.useSubjectCenter = false;
    this.requireInitial = true; // if doesn't start out on a hit, won't emit any events

    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null; // won't ever be populated if shouldIgnoreMove

    this.handlePointerDown = ev => {
      let {
        dragging
      } = this;
      this.initialHit = null;
      this.movingHit = null;
      this.finalHit = null;
      this.prepareHits();
      this.processFirstCoord(ev);

      if (this.initialHit || !this.requireInitial) {
        dragging.setIgnoreMove(false); // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(

        this.emitter.trigger('pointerdown', ev);
      } else {
        dragging.setIgnoreMove(true);
      }
    };

    this.handleDragStart = ev => {
      this.emitter.trigger('dragstart', ev);
      this.handleMove(ev, true); // force = fire even if initially null
    };

    this.handleDragMove = ev => {
      this.emitter.trigger('dragmove', ev);
      this.handleMove(ev);
    };

    this.handlePointerUp = ev => {
      this.releaseHits();
      this.emitter.trigger('pointerup', ev);
    };

    this.handleDragEnd = ev => {
      if (this.movingHit) {
        this.emitter.trigger('hitupdate', null, true, ev);
      }

      this.finalHit = this.movingHit;
      this.movingHit = null;
      this.emitter.trigger('dragend', ev);
    };

    this.droppableStore = droppableStore;
    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    dragging.emitter.on('dragmove', this.handleDragMove);
    dragging.emitter.on('pointerup', this.handlePointerUp);
    dragging.emitter.on('dragend', this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Emitter();
  } // sets initialHit
  // sets coordAdjust


  processFirstCoord(ev) {
    let origPoint = {
      left: ev.pageX,
      top: ev.pageY
    };
    let adjustedPoint = origPoint;
    let subjectEl = ev.subjectEl;
    let subjectRect;

    if (subjectEl instanceof HTMLElement) {
      // i.e. not a Document/ShadowRoot
      subjectRect = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.computeRect)(subjectEl);
      adjustedPoint = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.constrainPoint)(adjustedPoint, subjectRect);
    }

    let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);

    if (initialHit) {
      if (this.useSubjectCenter && subjectRect) {
        let slicedSubjectRect = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.intersectRects)(subjectRect, initialHit.rect);

        if (slicedSubjectRect) {
          adjustedPoint = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getRectCenter)(slicedSubjectRect);
        }
      }

      this.coordAdjust = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffPoints)(adjustedPoint, origPoint);
    } else {
      this.coordAdjust = {
        left: 0,
        top: 0
      };
    }
  }

  handleMove(ev, forceHandle) {
    let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);

    if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
      this.movingHit = hit;
      this.emitter.trigger('hitupdate', hit, false, ev);
    }
  }

  prepareHits() {
    this.offsetTrackers = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.mapHash)(this.droppableStore, interactionSettings => {
      interactionSettings.component.prepareHits();
      return new OffsetTracker(interactionSettings.el);
    });
  }

  releaseHits() {
    let {
      offsetTrackers
    } = this;

    for (let id in offsetTrackers) {
      offsetTrackers[id].destroy();
    }

    this.offsetTrackers = {};
  }

  queryHitForOffset(offsetLeft, offsetTop) {
    let {
      droppableStore,
      offsetTrackers
    } = this;
    let bestHit = null;

    for (let id in droppableStore) {
      let component = droppableStore[id].component;
      let offsetTracker = offsetTrackers[id];

      if (offsetTracker && // wasn't destroyed mid-drag
      offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
        let originLeft = offsetTracker.computeLeft();
        let originTop = offsetTracker.computeTop();
        let positionLeft = offsetLeft - originLeft;
        let positionTop = offsetTop - originTop;
        let {
          origRect
        } = offsetTracker;
        let width = origRect.right - origRect.left;
        let height = origRect.bottom - origRect.top;

        if ( // must be within the element's bounds
        positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height) {
          let hit = component.queryHit(positionLeft, positionTop, width, height);

          if (hit && // make sure the hit is within activeRange, meaning it's not a dead cell
          (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.rangeContainsRange)(hit.dateProfile.activeRange, hit.dateSpan.range) && (!bestHit || hit.layer > bestHit.layer)) {
            hit.componentId = id;
            hit.context = component.context; // TODO: better way to re-orient rectangle

            hit.rect.left += originLeft;
            hit.rect.right += originLeft;
            hit.rect.top += originTop;
            hit.rect.bottom += originTop;
            bestHit = hit;
          }
        }
      }
    }

    return bestHit;
  }

}

function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }

  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }

  return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isDateSpansEqual)(hit0.dateSpan, hit1.dateSpan);
}

function buildDatePointApiWithContext(dateSpan, context) {
  let props = {};

  for (let transform of context.pluginHooks.datePointTransforms) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, transform(dateSpan, context));
  }

  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, buildDatePointApi(dateSpan, context.dateEnv));

  return props;
}

function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, {
      omitTime: span.allDay
    }),
    allDay: span.allDay
  };
}
/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/


class DateClicking extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction {
  constructor(settings) {
    super(settings);

    this.handlePointerDown = pev => {
      let {
        dragging
      } = this;
      let downEl = pev.origEvent.target; // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired

      dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
    }; // won't even fire if moving was ignored


    this.handleDragEnd = ev => {
      let {
        component
      } = this;
      let {
        pointer
      } = this.dragging;

      if (!pointer.wasTouchScroll) {
        let {
          initialHit,
          finalHit
        } = this.hitDragging;

        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          let {
            context
          } = component;
          let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), {
            dayEl: initialHit.dayEl,
            jsEvent: ev.origEvent,
            view: context.viewApi || context.calendarApi.view
          });
          context.emitter.trigger('dateClick', arg);
        }
      }
    }; // we DO want to watch pointer moves because otherwise finalHit won't get populated


    this.dragging = new FeaturefulElementDragging(settings.el);
    this.dragging.autoScroller.isEnabled = false;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsToStore)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }

  destroy() {
    this.dragging.destroy();
  }

}
/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/


class DateSelecting extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction {
  constructor(settings) {
    super(settings);
    this.dragSelection = null;

    this.handlePointerDown = ev => {
      let {
        component,
        dragging
      } = this;
      let {
        options
      } = component.context;
      let canSelect = options.selectable && component.isValidDateDownEl(ev.origEvent.target); // don't bother to watch expensive moves if component won't do selection

      dragging.setIgnoreMove(!canSelect); // if touch, require user to hold down

      dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
    };

    this.handleDragStart = ev => {
      this.component.context.calendarApi.unselect(ev); // unselect previous selections
    };

    this.handleHitUpdate = (hit, isFinal) => {
      let {
        context
      } = this.component;
      let dragSelection = null;
      let isInvalid = false;

      if (hit) {
        let initialHit = this.hitDragging.initialHit;
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);

        if (!disallowed) {
          dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
        }

        if (!dragSelection || !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isDateSelectionValid)(dragSelection, hit.dateProfile, context)) {
          isInvalid = true;
          dragSelection = null;
        }
      }

      if (dragSelection) {
        context.dispatch({
          type: 'SELECT_DATES',
          selection: dragSelection
        });
      } else if (!isFinal) {
        // only unselect if moved away while dragging
        context.dispatch({
          type: 'UNSELECT_DATES'
        });
      }

      if (!isInvalid) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
      } else {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
      }

      if (!isFinal) {
        this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
      }
    };

    this.handlePointerUp = pev => {
      if (this.dragSelection) {
        // selection is already rendered, so just need to report selection
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.triggerDateSelect)(this.dragSelection, pev, this.component.context);
        this.dragSelection = null;
      }
    };

    let {
      component
    } = settings;
    let {
      options
    } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsToStore)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', this.handlePointerUp);
  }

  destroy() {
    this.dragging.destroy();
  }

}

function getComponentTouchDelay$1(component) {
  let {
    options
  } = component.context;
  let delay = options.selectLongPressDelay;

  if (delay == null) {
    delay = options.longPressDelay;
  }

  return delay;
}

function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let ms = [dateSpan0.range.start, dateSpan0.range.end, dateSpan1.range.start, dateSpan1.range.end];
  ms.sort(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.compareNumbers);
  let props = {};

  for (let transformer of dateSelectionTransformers) {
    let res = transformer(hit0, hit1);

    if (res === false) {
      return null;
    }

    if (res) {
      (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, res);
    }
  }

  props.range = {
    start: ms[0],
    end: ms[3]
  };
  props.allDay = dateSpan0.allDay;
  return props;
}

class EventDragging extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction {
  constructor(settings) {
    super(settings); // internal state

    this.subjectEl = null;
    this.subjectSeg = null; // the seg being selected/dragged

    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null; // the events being dragged

    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;

    this.handlePointerDown = ev => {
      let origTarget = ev.origEvent.target;
      let {
        component,
        dragging
      } = this;
      let {
        mirror
      } = dragging;
      let {
        options
      } = component.context;
      let initialContext = component.context;
      this.subjectEl = ev.subjectEl;
      let subjectSeg = this.subjectSeg = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElSeg)(ev.subjectEl);
      let eventRange = this.eventRange = subjectSeg.eventRange;
      let eventInstanceId = eventRange.instance.instanceId;
      this.relevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getRelevantEvents)(initialContext.getCurrentData().eventStore, eventInstanceId);
      dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
      dragging.delay = // only do a touch delay if touch and this event hasn't been selected yet
      ev.isTouch && eventInstanceId !== component.props.eventSelection ? getComponentTouchDelay(component) : null;

      if (options.fixedMirrorParent) {
        mirror.parentNode = options.fixedMirrorParent;
      } else {
        mirror.parentNode = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(origTarget, '.fc');
      }

      mirror.revertDuration = options.dragRevertDuration;
      let isValid = component.isValidSegDownEl(origTarget) && !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(origTarget, '.fc-event-resizer'); // NOT on a resizer

      dragging.setIgnoreMove(!isValid); // disable dragging for elements that are resizable (ie, selectable)
      // but are not draggable

      this.isDragging = isValid && ev.subjectEl.classList.contains('fc-event-draggable');
    };

    this.handleDragStart = ev => {
      let initialContext = this.component.context;
      let eventRange = this.eventRange;
      let eventInstanceId = eventRange.instance.instanceId;

      if (ev.isTouch) {
        // need to select a different event?
        if (eventInstanceId !== this.component.props.eventSelection) {
          initialContext.dispatch({
            type: 'SELECT_EVENT',
            eventInstanceId
          });
        }
      } else {
        // if now using mouse, but was previous touch interaction, clear selected event
        initialContext.dispatch({
          type: 'UNSELECT_EVENT'
        });
      }

      if (this.isDragging) {
        initialContext.calendarApi.unselect(ev); // unselect *date* selection

        initialContext.emitter.trigger('eventDragStart', {
          el: this.subjectEl,
          event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(initialContext, eventRange.def, eventRange.instance),
          jsEvent: ev.origEvent,
          view: initialContext.viewApi
        });
      }
    };

    this.handleHitUpdate = (hit, isFinal) => {
      if (!this.isDragging) {
        return;
      }

      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let initialContext = this.component.context; // states based on new hit

      let receivingContext = null;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
        isEvent: true
      };

      if (hit) {
        receivingContext = hit.context;
        let receivingOptions = receivingContext.options;

        if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
          mutation = computeEventMutation(initialHit, hit, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);

          if (mutation) {
            mutatedRelevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyMutationToEventStore)(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
            interaction.mutatedEvents = mutatedRelevantEvents;

            if (!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isInteractionValid)(interaction, hit.dateProfile, receivingContext)) {
              isInvalid = true;
              mutation = null;
              mutatedRelevantEvents = null;
              interaction.mutatedEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)();
            }
          }
        } else {
          receivingContext = null;
        }
      }

      this.displayDrag(receivingContext, interaction);

      if (!isInvalid) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
      } else {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
      }

      if (!isFinal) {
        if (initialContext === receivingContext && // TODO: write test for this
        isHitsEqual(initialHit, hit)) {
          mutation = null;
        }

        this.dragging.setMirrorNeedsRevert(!mutation); // render the mirror if no already-rendered mirror
        // TODO: wish we could somehow wait for dispatch to guarantee render

        this.dragging.setMirrorIsVisible(!hit || !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElRoot)(this.subjectEl).querySelector('.fc-event-mirror')); // assign states based on new hit

        this.receivingContext = receivingContext;
        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };

    this.handlePointerUp = () => {
      if (!this.isDragging) {
        this.cleanup(); // because handleDragEnd won't fire
      }
    };

    this.handleDragEnd = ev => {
      if (this.isDragging) {
        let initialContext = this.component.context;
        let initialView = initialContext.viewApi;
        let {
          receivingContext,
          validMutation
        } = this;
        let eventDef = this.eventRange.def;
        let eventInstance = this.eventRange.instance;
        let eventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(initialContext, eventDef, eventInstance);
        let relevantEvents = this.relevantEvents;
        let mutatedRelevantEvents = this.mutatedRelevantEvents;
        let {
          finalHit
        } = this.hitDragging;
        this.clearDrag(); // must happen after revert animation

        initialContext.emitter.trigger('eventDragStop', {
          el: this.subjectEl,
          event: eventApi,
          jsEvent: ev.origEvent,
          view: initialView
        });

        if (validMutation) {
          // dropped within same calendar
          if (receivingContext === initialContext) {
            let updatedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
            initialContext.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents
            });
            let eventChangeArg = {
              oldEvent: eventApi,
              event: updatedEventApi,
              relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(mutatedRelevantEvents, initialContext, eventInstance),

              revert() {
                initialContext.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents // the pre-change data

                });
              }

            };
            let transformed = {};

            for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
              (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(transformed, transformer(validMutation, initialContext));
            }

            initialContext.emitter.trigger('eventDrop', Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), {
              el: ev.subjectEl,
              delta: validMutation.datesDelta,
              jsEvent: ev.origEvent,
              view: initialView
            }));
            initialContext.emitter.trigger('eventChange', eventChangeArg); // dropped in different calendar
          } else if (receivingContext) {
            let eventRemoveArg = {
              event: eventApi,
              relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(relevantEvents, initialContext, eventInstance),

              revert() {
                initialContext.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents
                });
              }

            };
            initialContext.emitter.trigger('eventLeave', Object.assign(Object.assign({}, eventRemoveArg), {
              draggedEl: ev.subjectEl,
              view: initialView
            }));
            initialContext.dispatch({
              type: 'REMOVE_EVENTS',
              eventStore: relevantEvents
            });
            initialContext.emitter.trigger('eventRemove', eventRemoveArg);
            let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
            let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
            let addedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(receivingContext, addedEventDef, addedEventInstance);
            receivingContext.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents
            });
            let eventAddArg = {
              event: addedEventApi,
              relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(mutatedRelevantEvents, receivingContext, addedEventInstance),

              revert() {
                receivingContext.dispatch({
                  type: 'REMOVE_EVENTS',
                  eventStore: mutatedRelevantEvents
                });
              }

            };
            receivingContext.emitter.trigger('eventAdd', eventAddArg);

            if (ev.isTouch) {
              receivingContext.dispatch({
                type: 'SELECT_EVENT',
                eventInstanceId: eventInstance.instanceId
              });
            }

            receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
              draggedEl: ev.subjectEl,
              jsEvent: ev.origEvent,
              view: finalHit.context.viewApi
            }));
            receivingContext.emitter.trigger('eventReceive', Object.assign(Object.assign({}, eventAddArg), {
              draggedEl: ev.subjectEl,
              view: finalHit.context.viewApi
            }));
          }
        } else {
          initialContext.emitter.trigger('_noEventDrop');
        }
      }

      this.cleanup();
    };

    let {
      component
    } = this;
    let {
      options
    } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = EventDragging.SELECTOR;
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsStore);
    hitDragging.useSubjectCenter = settings.useEventCenter;
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', this.handlePointerUp);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }

  destroy() {
    this.dragging.destroy();
  } // render a drag state on the next receivingCalendar


  displayDrag(nextContext, state) {
    let initialContext = this.component.context;
    let prevContext = this.receivingContext; // does the previous calendar need to be cleared?

    if (prevContext && prevContext !== nextContext) {
      // does the initial calendar need to be cleared?
      // if so, don't clear all the way. we still need to to hide the affectedEvents
      if (prevContext === initialContext) {
        prevContext.dispatch({
          type: 'SET_EVENT_DRAG',
          state: {
            affectedEvents: state.affectedEvents,
            mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
            isEvent: true
          }
        }); // completely clear the old calendar if it wasn't the initial
      } else {
        prevContext.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
    }

    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state
      });
    }
  }

  clearDrag() {
    let initialCalendar = this.component.context;
    let {
      receivingContext
    } = this;

    if (receivingContext) {
      receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    } // the initial calendar might have an dummy drag state from displayDrag


    if (initialCalendar !== receivingContext) {
      initialCalendar.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  }

  cleanup() {
    this.subjectSeg = null;
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null;
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
  }

} // TODO: test this in IE11
// QUESTION: why do we need it on the resizable???


EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';

function computeEventMutation(hit0, hit1, massagers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let date0 = dateSpan0.range.start;
  let date1 = dateSpan1.range.start;
  let standardProps = {};

  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;

    if (dateSpan1.allDay) {
      // means date1 is already start-of-day,
      // but date0 needs to be converted
      date0 = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(date0);
    }
  }

  let delta = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffDates)(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);

  if (delta.milliseconds) {
    // has hours/minutes/seconds
    standardProps.allDay = false;
  }

  let mutation = {
    datesDelta: delta,
    standardProps
  };

  for (let massager of massagers) {
    massager(mutation, hit0, hit1);
  }

  return mutation;
}

function getComponentTouchDelay(component) {
  let {
    options
  } = component.context;
  let delay = options.eventLongPressDelay;

  if (delay == null) {
    delay = options.longPressDelay;
  }

  return delay;
}

class EventResizing extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction {
  constructor(settings) {
    super(settings); // internal state

    this.draggingSegEl = null;
    this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?

    this.eventRange = null;
    this.relevantEvents = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;

    this.handlePointerDown = ev => {
      let {
        component
      } = this;
      let segEl = this.querySegEl(ev);
      let seg = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElSeg)(segEl);
      let eventRange = this.eventRange = seg.eventRange;
      this.dragging.minDistance = component.context.options.eventDragMinDistance; // if touch, need to be working with a selected event

      this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId);
    };

    this.handleDragStart = ev => {
      let {
        context
      } = this.component;
      let eventRange = this.eventRange;
      this.relevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getRelevantEvents)(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let segEl = this.querySegEl(ev);
      this.draggingSegEl = segEl;
      this.draggingSeg = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElSeg)(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger('eventResizeStart', {
        el: segEl,
        event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };

    this.handleHitUpdate = (hit, isFinal, ev) => {
      let {
        context
      } = this.component;
      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let eventInstance = this.eventRange.instance;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
        isEvent: true
      };

      if (hit) {
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);

        if (!disallowed) {
          mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
        }
      }

      if (mutation) {
        mutatedRelevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyMutationToEventStore)(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;

        if (!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isInteractionValid)(interaction, hit.dateProfile, context)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }

      if (mutatedRelevantEvents) {
        context.dispatch({
          type: 'SET_EVENT_RESIZE',
          state: interaction
        });
      } else {
        context.dispatch({
          type: 'UNSET_EVENT_RESIZE'
        });
      }

      if (!isInvalid) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
      } else {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
      }

      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }

        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };

    this.handleDragEnd = ev => {
      let {
        context
      } = this.component;
      let eventDef = this.eventRange.def;
      let eventInstance = this.eventRange.instance;
      let eventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(context, eventDef, eventInstance);
      let relevantEvents = this.relevantEvents;
      let mutatedRelevantEvents = this.mutatedRelevantEvents;
      context.emitter.trigger('eventResizeStop', {
        el: this.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });

      if (this.validMutation) {
        let updatedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: mutatedRelevantEvents
        });
        let eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(mutatedRelevantEvents, context, eventInstance),

          revert() {
            context.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: relevantEvents // the pre-change events

            });
          }

        };
        context.emitter.trigger('eventResize', Object.assign(Object.assign({}, eventChangeArg), {
          el: this.draggingSegEl,
          startDelta: this.validMutation.startDelta || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createDuration)(0),
          endDelta: this.validMutation.endDelta || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createDuration)(0),
          jsEvent: ev.origEvent,
          view: context.viewApi
        }));
        context.emitter.trigger('eventChange', eventChangeArg);
      } else {
        context.emitter.trigger('_noEventResize');
      } // reset all internal state


      this.draggingSeg = null;
      this.relevantEvents = null;
      this.validMutation = null; // okay to keep eventInstance around. useful to set it in handlePointerDown
    };

    let {
      component
    } = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = '.fc-event-resizer';
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsToStore)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }

  destroy() {
    this.dragging.destroy();
  }

  querySegEl(ev) {
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(ev.subjectEl, '.fc-event');
  }

}

function computeMutation(hit0, hit1, isFromStart, instanceRange) {
  let dateEnv = hit0.context.dateEnv;
  let date0 = hit0.dateSpan.range.start;
  let date1 = hit1.dateSpan.range.start;
  let delta = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffDates)(date0, date1, dateEnv, hit0.largeUnit);

  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      return {
        startDelta: delta
      };
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    return {
      endDelta: delta
    };
  }

  return null;
}

class UnselectAuto {
  constructor(context) {
    this.context = context;
    this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system

    this.matchesCancel = false;
    this.matchesEvent = false;

    this.onSelect = selectInfo => {
      if (selectInfo.jsEvent) {
        this.isRecentPointerDateSelect = true;
      }
    };

    this.onDocumentPointerDown = pev => {
      let unselectCancel = this.context.options.unselectCancel;
      let downEl = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getEventTargetViaRoot)(pev.origEvent);
      this.matchesCancel = !!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(downEl, unselectCancel);
      this.matchesEvent = !!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(downEl, EventDragging.SELECTOR); // interaction started on an event?
    };

    this.onDocumentPointerUp = pev => {
      let {
        context
      } = this;
      let {
        documentPointer
      } = this;
      let calendarState = context.getCurrentData(); // touch-scrolling should never unfocus any type of selection

      if (!documentPointer.wasTouchScroll) {
        if (calendarState.dateSelection && // an existing date selection?
        !this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
        ) {
          let unselectAuto = context.options.unselectAuto;

          if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
            context.calendarApi.unselect(pev);
          }
        }

        if (calendarState.eventSelection && // an existing event selected?
        !this.matchesEvent // interaction DIDN'T start on an event
        ) {
          context.dispatch({
            type: 'UNSELECT_EVENT'
          });
        }
      }

      this.isRecentPointerDateSelect = false;
    };

    let documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
    documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
    /*
    TODO: better way to know about whether there was a selection with the pointer
    */

    context.emitter.on('select', this.onSelect);
  }

  destroy() {
    this.context.emitter.off('select', this.onSelect);
    this.documentPointer.destroy();
  }

}

const OPTION_REFINERS = {
  fixedMirrorParent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity
};
const LISTENER_REFINERS = {
  dateClick: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventDragStart: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventDragStop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventDrop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventResizeStart: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventResizeStop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventResize: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  drop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventReceive: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventLeave: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity
};
/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/

class ExternalElementDragging {
  constructor(dragging, suppliedDragMeta) {
    this.receivingContext = null;
    this.droppableEvent = null; // will exist for all drags, even if create:false

    this.suppliedDragMeta = null;
    this.dragMeta = null;

    this.handleDragStart = ev => {
      this.dragMeta = this.buildDragMeta(ev.subjectEl);
    };

    this.handleHitUpdate = (hit, isFinal, ev) => {
      let {
        dragging
      } = this.hitDragging;
      let receivingContext = null;
      let droppableEvent = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
        mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
        isEvent: this.dragMeta.create
      };

      if (hit) {
        receivingContext = hit.context;

        if (this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
          droppableEvent = computeEventForDateSpan(hit.dateSpan, this.dragMeta, receivingContext);
          interaction.mutatedEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.eventTupleToStore)(droppableEvent);
          isInvalid = !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isInteractionValid)(interaction, hit.dateProfile, receivingContext);

          if (isInvalid) {
            interaction.mutatedEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)();
            droppableEvent = null;
          }
        }
      }

      this.displayDrag(receivingContext, interaction); // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
      // TODO: wish we could somehow wait for dispatch to guarantee render

      dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));

      if (!isInvalid) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
      } else {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
      }

      if (!isFinal) {
        dragging.setMirrorNeedsRevert(!droppableEvent);
        this.receivingContext = receivingContext;
        this.droppableEvent = droppableEvent;
      }
    };

    this.handleDragEnd = pev => {
      let {
        receivingContext,
        droppableEvent
      } = this;
      this.clearDrag();

      if (receivingContext && droppableEvent) {
        let finalHit = this.hitDragging.finalHit;
        let finalView = finalHit.context.viewApi;
        let dragMeta = this.dragMeta;
        receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
          draggedEl: pev.subjectEl,
          jsEvent: pev.origEvent,
          view: finalView
        }));

        if (dragMeta.create) {
          let addingEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.eventTupleToStore)(droppableEvent);
          receivingContext.dispatch({
            type: 'MERGE_EVENTS',
            eventStore: addingEvents
          });

          if (pev.isTouch) {
            receivingContext.dispatch({
              type: 'SELECT_EVENT',
              eventInstanceId: droppableEvent.instance.instanceId
            });
          } // signal that an external event landed


          receivingContext.emitter.trigger('eventReceive', {
            event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(receivingContext, droppableEvent.def, droppableEvent.instance),
            relatedEvents: [],

            revert() {
              receivingContext.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: addingEvents
              });
            },

            draggedEl: pev.subjectEl,
            view: finalView
          });
        }
      }

      this.receivingContext = null;
      this.droppableEvent = null;
    };

    let hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsStore);
    hitDragging.requireInitial = false; // will start outside of a component

    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
    this.suppliedDragMeta = suppliedDragMeta;
  }

  buildDragMeta(subjectEl) {
    if (typeof this.suppliedDragMeta === 'object') {
      return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseDragMeta)(this.suppliedDragMeta);
    }

    if (typeof this.suppliedDragMeta === 'function') {
      return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseDragMeta)(this.suppliedDragMeta(subjectEl));
    }

    return getDragMetaFromEl(subjectEl);
  }

  displayDrag(nextContext, state) {
    let prevContext = this.receivingContext;

    if (prevContext && prevContext !== nextContext) {
      prevContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }

    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state
      });
    }
  }

  clearDrag() {
    if (this.receivingContext) {
      this.receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  }

  canDropElOnCalendar(el, receivingContext) {
    let dropAccept = receivingContext.options.dropAccept;

    if (typeof dropAccept === 'function') {
      return dropAccept.call(receivingContext.calendarApi, el);
    }

    if (typeof dropAccept === 'string' && dropAccept) {
      return Boolean((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementMatches)(el, dropAccept));
    }

    return true;
  }

} // Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------


function computeEventForDateSpan(dateSpan, dragMeta, context) {
  let defProps = Object.assign({}, dragMeta.leftoverProps);

  for (let transform of context.pluginHooks.externalDefTransforms) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(defProps, transform(dateSpan, dragMeta));
  }

  let {
    refined,
    extra
  } = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.refineEventDef)(defProps, context);
  let def = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseEventDef)(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration), // hasEnd
  context);
  let start = dateSpan.range.start; // only rely on time info if drop zone is all-day,
  // otherwise, we already know the time

  if (dateSpan.allDay && dragMeta.startTime) {
    start = context.dateEnv.add(start, dragMeta.startTime);
  }

  let end = dragMeta.duration ? context.dateEnv.add(start, dragMeta.duration) : (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getDefaultEventEnd)(dateSpan.allDay, start, context);
  let instance = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEventInstance)(def.defId, {
    start,
    end
  });
  return {
    def,
    instance
  };
} // Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------


function getDragMetaFromEl(el) {
  let str = getEmbeddedElData(el, 'event');
  let obj = str ? JSON.parse(str) : {
    create: false
  }; // if no embedded data, assume no event creation

  return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseDragMeta)(obj);
}

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.dataAttrPrefix = '';

function getEmbeddedElData(el, name) {
  let prefix = _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.dataAttrPrefix;
  let prefixedName = (prefix ? prefix + '-' : '') + name;
  return el.getAttribute('data-' + prefixedName) || '';
}
/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/


class ExternalDraggable {
  constructor(el, settings = {}) {
    this.handlePointerDown = ev => {
      let {
        dragging
      } = this;
      let {
        minDistance,
        longPressDelay
      } = this.settings;
      dragging.minDistance = minDistance != null ? minDistance : ev.isTouch ? 0 : _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BASE_OPTION_DEFAULTS.eventDragMinDistance;
      dragging.delay = ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
      longPressDelay != null ? longPressDelay : _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BASE_OPTION_DEFAULTS.longPressDelay : 0;
    };

    this.handleDragStart = ev => {
      if (ev.isTouch && this.dragging.delay && ev.subjectEl.classList.contains('fc-event')) {
        this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
      }
    };

    this.settings = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(el);
    dragging.touchScrollAllowed = false;

    if (settings.itemSelector != null) {
      dragging.pointer.selector = settings.itemSelector;
    }

    if (settings.appendTo != null) {
      dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
    }

    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }

  destroy() {
    this.dragging.destroy();
  }

}
/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/


class InferredElementDragging extends _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ElementDragging {
  constructor(containerEl) {
    super(containerEl);
    this.shouldIgnoreMove = false;
    this.mirrorSelector = '';
    this.currentMirrorEl = null;

    this.handlePointerDown = ev => {
      this.emitter.trigger('pointerdown', ev);

      if (!this.shouldIgnoreMove) {
        // fire dragstart right away. does not support delay or min-distance
        this.emitter.trigger('dragstart', ev);
      }
    };

    this.handlePointerMove = ev => {
      if (!this.shouldIgnoreMove) {
        this.emitter.trigger('dragmove', ev);
      }
    };

    this.handlePointerUp = ev => {
      this.emitter.trigger('pointerup', ev);

      if (!this.shouldIgnoreMove) {
        // fire dragend right away. does not support a revert animation
        this.emitter.trigger('dragend', ev);
      }
    };

    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', this.handlePointerDown);
    pointer.emitter.on('pointermove', this.handlePointerMove);
    pointer.emitter.on('pointerup', this.handlePointerUp);
  }

  destroy() {
    this.pointer.destroy();
  }

  setIgnoreMove(bool) {
    this.shouldIgnoreMove = bool;
  }

  setMirrorIsVisible(bool) {
    if (bool) {
      // restore a previously hidden element.
      // use the reference in case the selector class has already been removed.
      if (this.currentMirrorEl) {
        this.currentMirrorEl.style.visibility = '';
        this.currentMirrorEl = null;
      }
    } else {
      let mirrorEl = this.mirrorSelector // TODO: somehow query FullCalendars WITHIN shadow-roots
      ? document.querySelector(this.mirrorSelector) : null;

      if (mirrorEl) {
        this.currentMirrorEl = mirrorEl;
        mirrorEl.style.visibility = 'hidden';
      }
    }
  }

}
/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/


class ThirdPartyDraggable {
  constructor(containerOrSettings, settings) {
    let containerEl = document;

    if ( // wish we could just test instanceof EventTarget, but doesn't work in IE11
    containerOrSettings === document || containerOrSettings instanceof Element) {
      containerEl = containerOrSettings;
      settings = settings || {};
    } else {
      settings = containerOrSettings || {};
    }

    let dragging = this.dragging = new InferredElementDragging(containerEl);

    if (typeof settings.itemSelector === 'string') {
      dragging.pointer.selector = settings.itemSelector;
    } else if (containerEl === document) {
      dragging.pointer.selector = '[data-event]';
    }

    if (typeof settings.mirrorSelector === 'string') {
      dragging.mirrorSelector = settings.mirrorSelector;
    }

    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }

  destroy() {
    this.dragging.destroy();
  }

}

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ 4902:
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/web-component/main.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_OPTION_DEFAULTS": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_DEFAULTS),
/* harmony export */   "BASE_OPTION_REFINERS": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_REFINERS),
/* harmony export */   "BaseComponent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent),
/* harmony export */   "BgEvent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent),
/* harmony export */   "CalendarApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarApi),
/* harmony export */   "CalendarContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarContent),
/* harmony export */   "CalendarDataManager": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataManager),
/* harmony export */   "CalendarDataProvider": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataProvider),
/* harmony export */   "CalendarRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarRoot),
/* harmony export */   "Component": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ContentHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ContentHook),
/* harmony export */   "CustomContentRenderContext": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CustomContentRenderContext),
/* harmony export */   "DateComponent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent),
/* harmony export */   "DateEnv": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateEnv),
/* harmony export */   "DateProfileGenerator": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateProfileGenerator),
/* harmony export */   "DayCellContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent),
/* harmony export */   "DayCellRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot),
/* harmony export */   "DayHeader": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader),
/* harmony export */   "DaySeriesModel": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel),
/* harmony export */   "DayTableModel": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel),
/* harmony export */   "DelayedRunner": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DelayedRunner),
/* harmony export */   "ElementDragging": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ElementDragging),
/* harmony export */   "ElementScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ElementScrollController),
/* harmony export */   "Emitter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Emitter),
/* harmony export */   "EventApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventApi),
/* harmony export */   "EventRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot),
/* harmony export */   "EventSourceApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventSourceApi),
/* harmony export */   "Fragment": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "FullCalendarElement": () => (/* binding */ FullCalendarElement),
/* harmony export */   "Interaction": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Interaction),
/* harmony export */   "MoreLinkRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot),
/* harmony export */   "MountHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MountHook),
/* harmony export */   "NamedTimeZoneImpl": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NamedTimeZoneImpl),
/* harmony export */   "NowIndicatorRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot),
/* harmony export */   "NowTimer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer),
/* harmony export */   "PositionCache": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache),
/* harmony export */   "RefMap": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap),
/* harmony export */   "RenderHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook),
/* harmony export */   "ScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ScrollController),
/* harmony export */   "ScrollResponder": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ScrollResponder),
/* harmony export */   "Scroller": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Scroller),
/* harmony export */   "SegHierarchy": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy),
/* harmony export */   "SimpleScrollGrid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid),
/* harmony export */   "Slicer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer),
/* harmony export */   "Splitter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Splitter),
/* harmony export */   "StandardEvent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent),
/* harmony export */   "TableDateCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.TableDateCell),
/* harmony export */   "TableDowCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.TableDowCell),
/* harmony export */   "Theme": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Theme),
/* harmony export */   "ViewApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewApi),
/* harmony export */   "ViewContextType": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewContextType),
/* harmony export */   "ViewRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot),
/* harmony export */   "WeekNumberRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot),
/* harmony export */   "WindowScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WindowScrollController),
/* harmony export */   "addDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays),
/* harmony export */   "addDurations": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations),
/* harmony export */   "addMs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addMs),
/* harmony export */   "addWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks),
/* harmony export */   "allowContextMenu": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.allowContextMenu),
/* harmony export */   "allowSelection": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.allowSelection),
/* harmony export */   "applyMutationToEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyMutationToEventStore),
/* harmony export */   "applyStyle": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyle),
/* harmony export */   "applyStyleProp": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyleProp),
/* harmony export */   "asCleanDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asCleanDays),
/* harmony export */   "asRoughMinutes": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMinutes),
/* harmony export */   "asRoughMs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs),
/* harmony export */   "asRoughSeconds": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughSeconds),
/* harmony export */   "binarySearch": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.binarySearch),
/* harmony export */   "buildClassNameNormalizer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildClassNameNormalizer),
/* harmony export */   "buildEntryKey": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey),
/* harmony export */   "buildEventApis": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventApis),
/* harmony export */   "buildEventRangeKey": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey),
/* harmony export */   "buildHashFromArray": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildHashFromArray),
/* harmony export */   "buildIsoString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildIsoString),
/* harmony export */   "buildNavLinkAttrs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs),
/* harmony export */   "buildSegCompareObj": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegCompareObj),
/* harmony export */   "buildSegTimeText": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText),
/* harmony export */   "collectFromHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.collectFromHash),
/* harmony export */   "combineEventUis": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.combineEventUis),
/* harmony export */   "compareByFieldSpec": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpec),
/* harmony export */   "compareByFieldSpecs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpecs),
/* harmony export */   "compareNumbers": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareNumbers),
/* harmony export */   "compareObjs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareObjs),
/* harmony export */   "computeEarliestSegStart": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEarliestSegStart),
/* harmony export */   "computeEdges": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEdges),
/* harmony export */   "computeFallbackHeaderFormat": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeFallbackHeaderFormat),
/* harmony export */   "computeHeightAndMargins": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeHeightAndMargins),
/* harmony export */   "computeInnerRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeInnerRect),
/* harmony export */   "computeRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeRect),
/* harmony export */   "computeSegDraggable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegDraggable),
/* harmony export */   "computeSegEndResizable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegEndResizable),
/* harmony export */   "computeSegStartResizable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegStartResizable),
/* harmony export */   "computeShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeShrinkWidth),
/* harmony export */   "computeSmallestCellWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSmallestCellWidth),
/* harmony export */   "computeVisibleDayRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeVisibleDayRange),
/* harmony export */   "config": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.config),
/* harmony export */   "constrainPoint": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.constrainPoint),
/* harmony export */   "createAriaClickAttrs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createAriaClickAttrs),
/* harmony export */   "createContext": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createDuration": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration),
/* harmony export */   "createElement": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createEmptyEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore),
/* harmony export */   "createEventInstance": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEventInstance),
/* harmony export */   "createEventUi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEventUi),
/* harmony export */   "createFormatter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter),
/* harmony export */   "createPlugin": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin),
/* harmony export */   "createPortal": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPortal),
/* harmony export */   "createRef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "defineFullCalendarElement": () => (/* binding */ defineFullCalendarElement),
/* harmony export */   "diffDates": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDates),
/* harmony export */   "diffDayAndTime": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDayAndTime),
/* harmony export */   "diffDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDays),
/* harmony export */   "diffPoints": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffPoints),
/* harmony export */   "diffWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWeeks),
/* harmony export */   "diffWholeDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWholeDays),
/* harmony export */   "diffWholeWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWholeWeeks),
/* harmony export */   "disableCursor": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.disableCursor),
/* harmony export */   "elementClosest": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.elementClosest),
/* harmony export */   "elementMatches": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.elementMatches),
/* harmony export */   "enableCursor": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.enableCursor),
/* harmony export */   "eventTupleToStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.eventTupleToStore),
/* harmony export */   "filterEventStoreDefs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.filterEventStoreDefs),
/* harmony export */   "filterHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.filterHash),
/* harmony export */   "findDirectChildren": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.findDirectChildren),
/* harmony export */   "findElements": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.findElements),
/* harmony export */   "flexibleCompare": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flexibleCompare),
/* harmony export */   "flushSync": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushSync),
/* harmony export */   "formatDate": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDate),
/* harmony export */   "formatDayString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDayString),
/* harmony export */   "formatIsoTimeString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatIsoTimeString),
/* harmony export */   "formatRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatRange),
/* harmony export */   "getAllowYScrolling": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getAllowYScrolling),
/* harmony export */   "getCanVGrowWithinCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getCanVGrowWithinCell),
/* harmony export */   "getClippingParents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getClippingParents),
/* harmony export */   "getDateMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDateMeta),
/* harmony export */   "getDayClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDayClassNames),
/* harmony export */   "getDefaultEventEnd": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDefaultEventEnd),
/* harmony export */   "getElRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getElRoot),
/* harmony export */   "getElSeg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getElSeg),
/* harmony export */   "getEntrySpanEnd": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEntrySpanEnd),
/* harmony export */   "getEventClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEventClassNames),
/* harmony export */   "getEventTargetViaRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEventTargetViaRoot),
/* harmony export */   "getIsRtlScrollbarOnLeft": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getIsRtlScrollbarOnLeft),
/* harmony export */   "getRectCenter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getRectCenter),
/* harmony export */   "getRelevantEvents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getRelevantEvents),
/* harmony export */   "getScrollGridClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getScrollGridClassNames),
/* harmony export */   "getScrollbarWidths": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getScrollbarWidths),
/* harmony export */   "getSectionClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSectionClassNames),
/* harmony export */   "getSectionHasLiquidHeight": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSectionHasLiquidHeight),
/* harmony export */   "getSegAnchorAttrs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegAnchorAttrs),
/* harmony export */   "getSegMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta),
/* harmony export */   "getSlotClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSlotClassNames),
/* harmony export */   "getStickyFooterScrollbar": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar),
/* harmony export */   "getStickyHeaderDates": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates),
/* harmony export */   "getUnequalProps": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUnequalProps),
/* harmony export */   "getUniqueDomId": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId),
/* harmony export */   "globalLocales": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.globalLocales),
/* harmony export */   "globalPlugins": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.globalPlugins),
/* harmony export */   "greatestDurationDenominator": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.greatestDurationDenominator),
/* harmony export */   "groupIntersectingEntries": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.groupIntersectingEntries),
/* harmony export */   "guid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.guid),
/* harmony export */   "hasBgRendering": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasBgRendering),
/* harmony export */   "hasShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasShrinkWidth),
/* harmony export */   "identity": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   "interactionSettingsStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsStore),
/* harmony export */   "interactionSettingsToStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsToStore),
/* harmony export */   "intersectRanges": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges),
/* harmony export */   "intersectRects": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRects),
/* harmony export */   "intersectSpans": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectSpans),
/* harmony export */   "isArraysEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isArraysEqual),
/* harmony export */   "isColPropsEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isColPropsEqual),
/* harmony export */   "isDateSelectionValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isDateSelectionValid),
/* harmony export */   "isDateSpansEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isDateSpansEqual),
/* harmony export */   "isInt": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isInt),
/* harmony export */   "isInteractionValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isInteractionValid),
/* harmony export */   "isMultiDayRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isMultiDayRange),
/* harmony export */   "isPropsEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual),
/* harmony export */   "isPropsValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsValid),
/* harmony export */   "isValidDate": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isValidDate),
/* harmony export */   "joinSpans": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.joinSpans),
/* harmony export */   "listenBySelector": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.listenBySelector),
/* harmony export */   "mapHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.mapHash),
/* harmony export */   "memoize": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize),
/* harmony export */   "memoizeArraylike": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeArraylike),
/* harmony export */   "memoizeHashlike": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeHashlike),
/* harmony export */   "memoizeObjArg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeObjArg),
/* harmony export */   "mergeEventStores": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.mergeEventStores),
/* harmony export */   "multiplyDuration": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.multiplyDuration),
/* harmony export */   "padStart": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.padStart),
/* harmony export */   "parseBusinessHours": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseBusinessHours),
/* harmony export */   "parseClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseClassNames),
/* harmony export */   "parseDragMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseDragMeta),
/* harmony export */   "parseEventDef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseEventDef),
/* harmony export */   "parseFieldSpecs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseFieldSpecs),
/* harmony export */   "parseMarker": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseMarker),
/* harmony export */   "pointInsideRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.pointInsideRect),
/* harmony export */   "preventContextMenu": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventContextMenu),
/* harmony export */   "preventDefault": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventDefault),
/* harmony export */   "preventSelection": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventSelection),
/* harmony export */   "rangeContainsMarker": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsMarker),
/* harmony export */   "rangeContainsRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsRange),
/* harmony export */   "rangesEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangesEqual),
/* harmony export */   "rangesIntersect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangesIntersect),
/* harmony export */   "refineEventDef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.refineEventDef),
/* harmony export */   "refineProps": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.refineProps),
/* harmony export */   "removeElement": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.removeElement),
/* harmony export */   "removeExact": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.removeExact),
/* harmony export */   "render": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "renderChunkContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderChunkContent),
/* harmony export */   "renderFill": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill),
/* harmony export */   "renderMicroColGroup": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderMicroColGroup),
/* harmony export */   "renderScrollShim": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim),
/* harmony export */   "requestJson": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.requestJson),
/* harmony export */   "sanitizeShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sanitizeShrinkWidth),
/* harmony export */   "setElSeg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setElSeg),
/* harmony export */   "setRef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef),
/* harmony export */   "sliceEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEventStore),
/* harmony export */   "sliceEvents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEvents),
/* harmony export */   "sortEventSegs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs),
/* harmony export */   "startOfDay": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay),
/* harmony export */   "translateRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.translateRect),
/* harmony export */   "triggerDateSelect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.triggerDateSelect),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode),
/* harmony export */   "unpromisify": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unpromisify),
/* harmony export */   "version": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.version),
/* harmony export */   "whenTransitionDone": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.whenTransitionDone),
/* harmony export */   "wholeDivideDurations": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ 22700);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ 7085);
/*!
FullCalendar v6.0.0-beta.1
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/



class FullCalendarElement extends HTMLElement {
  constructor() {
    super(...arguments);
    this._calendar = null;
    this._options = null;
  }

  connectedCallback() {
    this._handleOptionsStr(this.getAttribute('options'));
  }

  disconnectedCallback() {
    this._handleOptionsStr(null);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'options') {
      this._handleOptionsStr(newVal);
    }
  }

  get options() {
    return this._options;
  }

  set options(options) {
    this._handleOptions(options);
  }

  getApi() {
    return this._calendar;
  }

  _handleOptionsStr(optionsStr) {
    this._handleOptions(optionsStr ? JSON.parse(optionsStr) : null);
  }

  _handleOptions(options) {
    if (options) {
      if (this._calendar) {
        this._calendar.resetOptions(options);
      } else {
        this.innerHTML = '<div></div>';
        let calendarEl = this.querySelector('div');
        let calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__.Calendar(calendarEl, options);
        calendar.render();
        this._calendar = calendar;
      }

      this._options = options;
    } else {
      if (this._calendar) {
        this._calendar.destroy();

        this._calendar = null;
      }

      this._options = null;
    }
  }

}

function defineFullCalendarElement(tagName = 'full-calendar') {
  customElements.define(tagName, FullCalendarElement);
}



/***/ }),

/***/ 89086:
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Children": () => (/* binding */ A),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "PureComponent": () => (/* binding */ E),
/* harmony export */   "StrictMode": () => (/* binding */ hn),
/* harmony export */   "Suspense": () => (/* binding */ U),
/* harmony export */   "SuspenseList": () => (/* binding */ M),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ en),
/* harmony export */   "cloneElement": () => (/* binding */ ln),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   "createFactory": () => (/* binding */ un),
/* harmony export */   "createPortal": () => (/* binding */ $),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "default": () => (/* binding */ _n),
/* harmony export */   "findDOMNode": () => (/* binding */ fn),
/* harmony export */   "flushSync": () => (/* binding */ sn),
/* harmony export */   "forwardRef": () => (/* binding */ N),
/* harmony export */   "hydrate": () => (/* binding */ Y),
/* harmony export */   "isValidElement": () => (/* binding */ on),
/* harmony export */   "lazy": () => (/* binding */ F),
/* harmony export */   "memo": () => (/* binding */ w),
/* harmony export */   "render": () => (/* binding */ Z),
/* harmony export */   "startTransition": () => (/* binding */ vn),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ cn),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ an),
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
/* harmony export */   "useDeferredValue": () => (/* binding */ dn),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
/* harmony export */   "useId": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
/* harmony export */   "useInsertionEffect": () => (/* binding */ mn),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
/* harmony export */   "useSyncExternalStore": () => (/* binding */ yn),
/* harmony export */   "useTransition": () => (/* binding */ pn),
/* harmony export */   "version": () => (/* binding */ rn)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ 98173);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ 32707);





function g(n, t) {
  for (var e in t) n[e] = t[e];

  return n;
}

function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;

  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;

  return !1;
}

function E(n) {
  this.props = n;
}

function w(n, e) {
  function r(n) {
    var t = this.props.ref,
        r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
  }

  function u(e) {
    return this.shouldComponentUpdate = r, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(n, e);
  }

  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}

(E.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var R = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;

preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), R && R(n);
};

var x = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function N(n) {
  function t(t) {
    var e = g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }

  return t.$$typeof = x, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

var k = function (n, t) {
  return null == n ? null : (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).map(t));
},
    A = {
  map: k,
  forEach: k,
  count: function (n) {
    return n ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).length : 0;
  },
  only: function (n) {
    var t = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n);
    if (1 !== t.length) throw "Children.only";
    return t[0];
  },
  toArray: preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray
},
    O = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;

preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  O(n, t, e, r);
};

var T = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;

function I(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return I(n, t, e);
  })), n;
}

function L(n, t, e) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return L(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}

function U() {
  this.__u = 0, this.t = null, this.__b = null;
}

function D(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}

function F(n) {
  var e, r, u;

  function o(o) {
    if (e || (e = n()).then(function (n) {
      r = n.default || n;
    }, function (n) {
      u = n;
    }), u) throw u;
    if (!r) throw e;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(r, o);
  }

  return o.displayName = "Lazy", o.__f = !0, o;
}

function M() {
  this.u = null, this.o = null;
}

preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), T && T(n);
}, (U.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component()).__c = function (n, t) {
  var e = t.__c,
      r = this;
  null == r.t && (r.t = []), r.t.push(e);

  var u = D(r.__v),
      o = !1,
      i = function () {
    o || (o = !0, e.__R = null, u ? u(l) : l());
  };

  e.__R = i;

  var l = function () {
    if (! --r.__u) {
      if (r.state.__a) {
        var n = r.state.__a;
        r.__v.__k[0] = L(n, n.__c.__P, n.__c.__O);
      }

      var t;

      for (r.setState({
        __a: r.__b = null
      }); t = r.t.pop();) t.forceUpdate();
    }
  },
      c = !0 === t.__h;

  r.__u++ || c || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, U.prototype.componentWillUnmount = function () {
  this.t = [];
}, U.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
          o = this.__v.__k[0].__c;
      this.__v.__k[0] = I(this.__b, r, o.__O = o.__P);
    }

    this.__b = null;
  }

  var i = e.__a && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, n.fallback);
  return i && (i.__h = null), [(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, e.__a ? null : n.children), i];
};

var V = function (n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();

    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};

function W(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}

function P(n) {
  var e = this,
      r = n.i;
  e.componentWillUnmount = function () {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
    nodeType: 1,
    parentNode: r,
    childNodes: [],
    appendChild: function (n) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    insertBefore: function (n, t) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    removeChild: function (n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
    }
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(W, {
    context: e.context
  }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}

function $(n, e) {
  var r = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(P, {
    __v: n,
    i: e
  });
  return r.containerInfo = e, r;
}

(M.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component()).__a = function (n) {
  var t = this,
      e = D(t.__v),
      r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function () {
      t.props.revealOrder ? (r.push(u), V(t, n, r)) : u();
    };

    e ? e(o) : o();
  };
}, M.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);

  return n.children;
}, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    V(n, e, t);
  });
};

var j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    z = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    B = "undefined" != typeof document,
    H = function (n) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};

function Z(n, t, e) {
  return null == t.__k && (t.textContent = ""), (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

function Y(n, t, e) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype, t, {
    configurable: !0,
    get: function () {
      return this["UNSAFE_" + t];
    },
    set: function (n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var q = preact__WEBPACK_IMPORTED_MODULE_0__.options.event;

function G() {}

function J() {
  return this.cancelBubble;
}

function K() {
  return this.defaultPrevented;
}

preact__WEBPACK_IMPORTED_MODULE_0__.options.event = function (n) {
  return q && (n = q(n)), n.persist = G, n.isPropagationStopped = J, n.isDefaultPrevented = K, n.nativeEvent = n;
};

var Q,
    X = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    nn = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;

preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function (n) {
  var t = n.type,
      e = n.props,
      u = e;

  if ("string" == typeof t) {
    var o = -1 === t.indexOf("-");

    for (var i in u = {}, e) {
      var l = e[i];
      B && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !H(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && z.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
    }

    "select" == t && u.multiple && Array.isArray(u.value) && (u.value = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(e.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == t && null != u.defaultValue && (u.value = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(e.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), n.props = u, e.class != e.className && (X.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", X));
  }

  n.$$typeof = j, nn && nn(n);
};

var tn = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;

preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function (n) {
  tn && tn(n), Q = n.__c;
};

var en = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (n) {
        return Q.__n[n.__c].props.value;
      }
    }
  }
},
    rn = "17.0.2";

function un(n) {
  return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null, n);
}

function on(n) {
  return !!n && n.$$typeof === j;
}

function ln(n) {
  return on(n) ? preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null, arguments) : n;
}

function cn(n) {
  return !!n.__k && ((0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, n), !0);
}

function fn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var an = function (n, t) {
  return n(t);
},
    sn = function (n, t) {
  return n(t);
},
    hn = preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;

function vn(n) {
  n();
}

function dn(n) {
  return n;
}

function pn() {
  return [!1, vn];
}

var mn = preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;

function yn(n, t) {
  var e = t(),
      r = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    h: {
      __: e,
      v: t
    }
  }),
      u = r[0].h,
      o = r[1];
  return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    u.__ = e, u.v = t, u.__ !== t() && o({
      h: u
    });
  }, [n, e, t]), (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return u.__ !== u.v() && o({
      h: u
    }), n(function () {
      u.__ !== u.v() && o({
        h: u
      });
    });
  }, [n]), e;
}

var _n = {
  useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
  useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
  useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
  useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
  useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
  useInsertionEffect: mn,
  useTransition: pn,
  useDeferredValue: dn,
  useSyncExternalStore: yn,
  startTransition: vn,
  useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
  useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
  useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
  useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
  useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
  useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
  version: "17.0.2",
  Children: A,
  render: Z,
  hydrate: Y,
  unmountComponentAtNode: cn,
  createPortal: $,
  createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
  createContext: preact__WEBPACK_IMPORTED_MODULE_0__.createContext,
  createFactory: un,
  cloneElement: ln,
  createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
  Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
  isValidElement: on,
  findDOMNode: fn,
  Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
  PureComponent: E,
  memo: w,
  forwardRef: N,
  flushSync: sn,
  unstable_batchedUpdates: an,
  StrictMode: hn,
  Suspense: U,
  SuspenseList: M,
  lazy: F,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: en
};


/***/ }),

/***/ 98173:
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ d),
/* harmony export */   "Fragment": () => (/* binding */ p),
/* harmony export */   "cloneElement": () => (/* binding */ q),
/* harmony export */   "createContext": () => (/* binding */ B),
/* harmony export */   "createElement": () => (/* binding */ h),
/* harmony export */   "createRef": () => (/* binding */ y),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "hydrate": () => (/* binding */ S),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "options": () => (/* binding */ l),
/* harmony export */   "render": () => (/* binding */ P),
/* harmony export */   "toChildArray": () => (/* binding */ x)
/* harmony export */ });
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(l, u, i) {
  var t,
      o,
      r,
      f = {};

  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return v(l, f, t, o, null);
}

function v(n, i, t, o, r) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u : r
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}

function y() {
  return {
    current: null
  };
}

function p(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? _(n) : null;
}

function k(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return k(n);
  }
}

function b(n) {
  (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}

function g() {
  for (var n; g.__r = t.length;) n = t.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), t = [], n.some(function (n) {
    var l, u, i, t, o, r;
    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _(t) : o, t.__h), z(u, t), t.__e != o && k(t)));
  });
}

function w(n, l, u, i, t, o, r, c, s, a) {
  var h,
      y,
      d,
      k,
      b,
      g,
      w,
      x = i && i.__k || e,
      C = x.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, {
    children: k
  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;else for (y = 0; y < C; y++) {
      if ((d = x[y]) && k.key == d.key && k.type === d.type) {
        x[y] = void 0;
        break;
      }

      d = null;
    }
    j(n, k, d = d || f, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d));
  }

  for (u.__e = g, h = C; h--;) null != x[h] && N(x[h], x[h]);

  if (w) for (h = 0; h < w.length; h++) M(w[h], w[++h], w[++h]);
}

function m(n, l, u) {
  for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m(i, l, u) : A(u, i, i, t, i.__e, l));

  return l;
}

function x(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    x(n, l);
  }) : l.push(n)), l;
}

function A(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, o), r = o;
  }
  return void 0 !== r ? r : t.nextSibling;
}

function C(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || H(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i);
}

function $(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}

function H(n, l, u, i, t) {
  var o;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}

function I(n) {
  this.l[n.type + !1](l.event ? l.event(n) : n);
}

function T(n) {
  this.l[n.type + !0](l.event ? l.event(n) : n);
}

function j(n, u, i, t, o, r, f, e, c) {
  var a,
      h,
      v,
      y,
      _,
      k,
      b,
      g,
      m,
      x,
      A,
      C,
      $,
      H,
      I,
      T = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l.__b) && a(u);

  try {
    n: if ("function" == typeof T) {
      if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
          for (h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), A = 0; A < h._sb.length; A++) h.__h.push(h._sb[A]);

          h._sb = [], h.__h.length && f.push(h);
          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(y, _, k);
        });
      }

      if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l.__r, $ = 0, "prototype" in T && T.prototype.render) {
        for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);

        h._sb = [];
      } else do {
        h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
      } while (h.__d && ++$ < 25);

      h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p && null == a.key ? a.props.children : a, w(n, Array.isArray(I) ? I : [I], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);

    (a = l.diffed) && a(u);
  } catch (n) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i);
  }
}

function z(n, u) {
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}

function L(l, u, i, t, o, r, e, c) {
  var s,
      h,
      v,
      y = i.props,
      p = u.props,
      d = u.type,
      k = 0;
  if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
    l = s, r[k] = null;
    break;
  }

  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
  }

  if (null === d) y === p || c && l.data === p || (l.data = p);else {
    if (r = r && n.call(l.childNodes), h = (y = i.props || f).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
      if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) y[l.attributes[k].name] = l.attributes[k].value;
      (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
    }

    if (C(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _(i, 0), c), null != r) for (k = r.length; k--;) null != r[k] && a(r[k]);
    c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H(l, "checked", k, y.checked, !1));
  }
  return l;
}

function M(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, i);
  }
}

function N(n, u, i) {
  var t, o;

  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    t.base = t.__P = null, n.__c = void 0;
  }

  if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, i || "function" != typeof n.type);
  i || null == n.__e || a(n.__e), n.__ = n.__e = n.__d = void 0;
}

function O(n, l, u) {
  return this.constructor(n, u);
}

function P(u, i, t) {
  var o, r, e;
  l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j(i, u = (!o && t || i).__k = h(p, null, [u]), r || f, f, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z(e, u);
}

function S(n, l) {
  P(n, l, S);
}

function q(l, u, i) {
  var t,
      o,
      r,
      f = s({}, l.props);

  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v(l.type, f, t || l.key, o || l.ref, null);
}

function B(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(b);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n = e.slice, l = {
  __e: function (n, l, u, i) {
    for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {
      if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, u = 0, i = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this._sb.push(l), b(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;


/***/ }),

/***/ 32707:
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* binding */ T),
/* harmony export */   "useContext": () => (/* binding */ q),
/* harmony export */   "useDebugValue": () => (/* binding */ x),
/* harmony export */   "useEffect": () => (/* binding */ h),
/* harmony export */   "useErrorBoundary": () => (/* binding */ P),
/* harmony export */   "useId": () => (/* binding */ V),
/* harmony export */   "useImperativeHandle": () => (/* binding */ A),
/* harmony export */   "useLayoutEffect": () => (/* binding */ s),
/* harmony export */   "useMemo": () => (/* binding */ F),
/* harmony export */   "useReducer": () => (/* binding */ y),
/* harmony export */   "useRef": () => (/* binding */ _),
/* harmony export */   "useState": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ 98173);

var t,
    r,
    u,
    i,
    o = 0,
    f = [],
    c = [],
    e = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,
    a = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,
    v = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,
    l = preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,
    m = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;

function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__.options.__h && preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}

function p(n) {
  return o = 1, y(B, n);
}

function y(n, u, i) {
  var o = d(t++, 2);

  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
        r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    r.u = !0;
    var f = r.shouldComponentUpdate;

    r.shouldComponentUpdate = function (n, t, r) {
      if (!o.__c.__H) return !0;

      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });

      if (u.every(function (n) {
        return !n.__N;
      })) return !f || f.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
    };
  }

  return o.__N || o.__;
}

function h(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}

function s(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}

function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}

function A(n, t, r) {
  o = 6, s(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}

function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}

function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}

function q(n) {
  var u = r.context[n.__c],
      i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}

function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r ? r(t) : t);
}

function P(n) {
  var u = d(t++, 10),
      i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}

function V() {
  var n = d(t++, 11);
  return n.__ || (n.__ = "P" + function (n) {
    for (var t = 0, r = n.length; r > 0;) t = (t << 5) - t + n.charCodeAt(--r) | 0;

    return t;
  }(r.__v.__m) + t), n.__;
}

function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r, t.__v);
  }
}

preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function (n) {
  "function" != typeof n.type || n.__m || null === n.__ ? n.__m || (n.__m = n.__ && n.__.__m ? n.__.__m : "") : n.__m = (n.__ && n.__.__m ? n.__.__m : "") + (n.__ && n.__.__k ? n.__.__k.indexOf(n) : 0), r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function (t) {
  m && m(t);
  var r,
      u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;

function j(n) {
  var t,
      r = function () {
    clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
  },
      u = setTimeout(r, 100);

  g && (t = requestAnimationFrame(r));
}

function k(n) {
  var t = r,
      u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}

function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}

function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}

function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}



/***/ }),

/***/ 84798:
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/oszford-calendario/oszford-calendario.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".fc-today-button {\n  background: #b1d583 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9zemZvcmQtY2FsZW5kYXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKIiwiZmlsZSI6Im9zemZvcmQtY2FsZW5kYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmMtdG9kYXktYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjFkNTgzICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 90268:
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/interfaces/oszford-calendario/oszford-calendario.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <img src=\"assets/osz.jpeg\" width=\"200\" />\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <full-calendar *ngIf=\"load\" #calendar [options]=\"calendarOptions\"></full-calendar>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_interfaces_oszford-calendario_oszford-calendario_module_ts.js.map