"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_Entrena_Designer_designer_designer_module_ts"],{

/***/ 27025:
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer/designer-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerPageRoutingModule": () => (/* binding */ DesignerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _designer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer.page */ 21538);




const routes = [
    {
        path: '',
        component: _designer_page__WEBPACK_IMPORTED_MODULE_0__.DesignerPage
    }
];
let DesignerPageRoutingModule = class DesignerPageRoutingModule {
};
DesignerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DesignerPageRoutingModule);



/***/ }),

/***/ 4094:
/*!********************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer/designer.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerPageModule": () => (/* binding */ DesignerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _designer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer-routing.module */ 27025);
/* harmony import */ var _designer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer.page */ 21538);
/* harmony import */ var _Modals_Designer_designer_designer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Modals/Designer/designer/designer.page */ 3516);
/* harmony import */ var _Modals_Designer_designer_designer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modals/Designer/designer/designer.module */ 29971);









let DesignerPageModule = class DesignerPageModule {
};
DesignerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        entryComponents: [
            _Modals_Designer_designer_designer_page__WEBPACK_IMPORTED_MODULE_2__.DesignerModalPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _designer_routing_module__WEBPACK_IMPORTED_MODULE_0__.DesignerPageRoutingModule,
            _Modals_Designer_designer_designer_module__WEBPACK_IMPORTED_MODULE_3__.DesignerModalPageModule
        ],
        declarations: [_designer_page__WEBPACK_IMPORTED_MODULE_1__.DesignerPage]
    })
], DesignerPageModule);



/***/ }),

/***/ 21538:
/*!******************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer/designer.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerPage": () => (/* binding */ DesignerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer.page.html?ngResource */ 45169);
/* harmony import */ var _designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer.page.scss?ngResource */ 8245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _Modals_Designer_designer_designer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Modals/Designer/designer/designer.page */ 3516);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 59106);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);












let DesignerPage = class DesignerPage {
    constructor(apiEntrena, toasCtrl, storage, ActiveRoute, modalCtrl, router, dataCompany, alert) {
        this.apiEntrena = apiEntrena;
        this.toasCtrl = toasCtrl;
        this.storage = storage;
        this.ActiveRoute = ActiveRoute;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.dataCompany = dataCompany;
        this.alert = alert;
        this.JSONDesigner = {
            save: false,
            pages: [],
            count: 0,
            prom: 0,
            tot: 0,
            apro: 0
        };
        this.load = false;
        this.nameDesing = '';
        this.viewInit = '1';
        this.save = false;
        this.pagesCount = 0;
        this.pageActive = 1;
        this.color = '';
        this.route = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environments.URL_RESORCES;
        this.dataCompany.$color.subscribe((color) => {
            this.color = color;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loadDesign();
    }
    loadDesign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.apiEntrena.readDesigner(login[0].token, this.ActiveRoute.snapshot.paramMap.get('id')).subscribe((data) => {
                    console.log(data, 'MI DATICA');
                    if (data.status === 'ok') {
                        this.JSONDesigner = data.response.JSONEntrena;
                        this.nameDesing = data.response.name;
                        this.pagesCount = this.JSONDesigner.pages.length;
                        const pagesquiz = this.JSONDesigner.pages.filter((item) => item.type === 'quiz');
                        pagesquiz.forEach((item) => {
                            const children = item.Chilndren;
                            children.forEach((child) => {
                                if (child.type === 'radio' || child.type === 'checkbox') {
                                    this.JSONDesigner.count = this.JSONDesigner.count + 1;
                                }
                            });
                        });
                        this.load = true;
                    }
                    else {
                        this.toasCtrl.newCreatedToast('Could not read design, please try again later', false);
                    }
                }, (error) => {
                    this.toasCtrl.newCreatedToast('Could not read design, please try again later', false);
                });
            }
        });
    }
    deletePage(idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: '¿Quieres eliminar esta página?',
                message: 'Se borrarán todos los campos de la página de forma pernamente',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.JSONDesigner.pages.splice(idx, 1);
                            const pagesquiz = this.JSONDesigner.pages.filter((item) => item.type === 'quiz');
                            pagesquiz.forEach((item) => {
                                const children = item.Chilndren;
                                children.forEach((child) => {
                                    if (child.type === 'radio' || child.type === 'checkbox') {
                                        this.JSONDesigner.count = this.JSONDesigner.count + 1;
                                    }
                                });
                            });
                            this.autoSave();
                            this.pagesCount = this.JSONDesigner.pages.length;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteChild(p, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: '¿Quieres eliminar este campo?',
                message: 'Se borrará de forma pernamente',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.JSONDesigner.pages[p].Chilndren.splice(i, 1);
                            const pagesquiz = this.JSONDesigner.pages.filter((item) => item.type === 'quiz');
                            pagesquiz.forEach((item) => {
                                const children = item.Chilndren;
                                children.forEach((child) => {
                                    if (child.type === 'radio' || child.type === 'checkbox') {
                                        this.JSONDesigner.count = this.JSONDesigner.count + 1;
                                    }
                                });
                            });
                            this.autoSave();
                            this.pagesCount = this.JSONDesigner.pages.length;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    prev() {
        this.slide.slidePrev(300).then(() => {
            this.pageActive = this.pageActive - 1;
        });
    }
    next() {
        this.slide.slideNext(300).then(() => {
            this.pageActive = this.pageActive + 1;
        });
    }
    autoSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.JSONDesigner);
            this.save = true;
            const login = yield this.storage.getLogin();
            if (login) {
                // tslint:disable-next-line:max-line-length
                this.apiEntrena.updateDesigner(login[0].token, { _id: this.ActiveRoute.snapshot.paramMap.get('id'), name: this.nameDesing, JSONEntrena: this.JSONDesigner }).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'ok') {
                        this.save = false;
                        this.JSONDesigner = data.response.JSONEntrena;
                        this.nameDesing = data.response.name;
                    }
                    else {
                        this.save = false;
                        this.toasCtrl.newCreatedToast('Could not update design, please try again later', false);
                    }
                }, (error) => {
                    this.save = false;
                    this.toasCtrl.newCreatedToast('Could not update design, please try again later', false);
                });
            }
        });
    }
    // Designer Pages
    // Cambio de las paginas y formulario
    changeTitleDesign(event) {
        this.nameDesing = event.detail.value;
    }
    changePromDesign(event) {
        this.JSONDesigner.apro = parseFloat(event.detail.value);
    }
    newPages() {
        const idPage = this.JSONDesigner.pages.length + 1;
        this.JSONDesigner.pages.push({
            id: idPage,
            name: '',
            type: '',
            Chilndren: []
        });
        this.autoSave();
        this.pagesCount = this.JSONDesigner.pages.length;
    }
    titlePage(event, id) {
        this.JSONDesigner.pages = this.JSONDesigner.pages.map((item) => {
            if (item.id === id) {
                item.name = event.detail.value;
            }
            return item;
        });
    }
    titlesave() {
        this.autoSave();
    }
    changeTypePage(event, id) {
        this.JSONDesigner.pages = this.JSONDesigner.pages.map((item) => {
            if (item.id === id) {
                item.type = event.detail.value;
            }
            return item;
        });
        this.autoSave();
    }
    createInputPage(event, id) {
        this.JSONDesigner.pages = this.JSONDesigner.pages.map((item) => {
            if (item.id === id) {
                const idChild = item.Chilndren.length + 1;
                let valuesSchema = {};
                if (event.detail.value === 'textline') {
                    valuesSchema = {
                        title: '',
                        value: '',
                        answer: '',
                        requerid: false
                    };
                }
                else if (event.detail.value === 'textarea') {
                    valuesSchema = {
                        title: '',
                        value: '',
                        answer: '',
                        requerid: false
                    };
                }
                else if (event.detail.value === 'radio' || event.detail.value === 'checkbox') {
                    valuesSchema = {
                        title: '',
                        opts: [],
                        answer: {
                            sum: 0,
                            value: 0,
                            text: '',
                            op: [] //  solo aplica para checkbox
                        },
                        requerid: false
                    };
                }
                else if (event.detail.value === 'image' || event.detail.value === 'file' || event.detail.value === 'video') {
                    valuesSchema = {
                        title: '',
                        src: '',
                        mime: '',
                        name: ''
                    };
                }
                item.Chilndren.push({
                    id: idChild,
                    type: event.detail.value,
                    values: valuesSchema
                });
            }
            return item;
        });
        this.autoSave();
    }
    // Alterando los campos ya creados por medio del Modal
    modalChangeInput(child, idpag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Bien');
            const modal = yield this.modalCtrl.create({
                component: _Modals_Designer_designer_designer_page__WEBPACK_IMPORTED_MODULE_5__.DesignerModalPage,
                componentProps: {
                    data: child,
                    idpage: idpag
                },
                keyboardClose: true
            });
            yield modal.present();
            const modalClose = yield modal.onWillDismiss();
            if (modalClose) {
                if (modalClose.data) {
                    if (modalClose.data.reload) {
                        this.JSONDesigner.pages = this.JSONDesigner.pages.map((item) => {
                            if (item.id === modalClose.data.info.page) {
                                item.Chilndren.map((children) => {
                                    if (children.id === modalClose.data.info.values.id) {
                                        children = modalClose.data.info.values;
                                    }
                                    return children;
                                });
                            }
                            return item;
                        });
                        this.autoSave();
                    }
                }
            }
        });
    }
    // Reordenando los inputs 
    changeOrder(event, page) {
        console.log(event, page);
        this.JSONDesigner.pages = this.JSONDesigner.pages.map((item) => {
            if (item.id === page) {
                const itemChange = item.Chilndren.splice(event.detail.from, 1)[0];
                console.log(itemChange);
                item.Chilndren.splice(event.detail.to, 0, itemChange);
            }
            return item;
        });
        event.detail.complete();
        this.autoSave();
    }
    exit() {
        this.router.navigate(['/designer-list']);
    }
};
DesignerPage.ctorParameters = () => [
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__.StorageWebService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_6__.DataComparnyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController }
];
DesignerPage.propDecorators = {
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['slide', { static: false },] }]
};
DesignerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-designer',
        template: _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DesignerPage);



/***/ }),

/***/ 46248:
/*!***********************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/Designer/designer/designer-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerPageRoutingModule": () => (/* binding */ DesignerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _designer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer.page */ 3516);




const routes = [
    {
        path: '',
        component: _designer_page__WEBPACK_IMPORTED_MODULE_0__.DesignerModalPage
    }
];
let DesignerPageRoutingModule = class DesignerPageRoutingModule {
};
DesignerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DesignerPageRoutingModule);



/***/ }),

/***/ 29971:
/*!***************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/Designer/designer/designer.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerModalPageModule": () => (/* binding */ DesignerModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _designer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer-routing.module */ 46248);
/* harmony import */ var _designer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer.page */ 3516);







let DesignerModalPageModule = class DesignerModalPageModule {
};
DesignerModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _designer_routing_module__WEBPACK_IMPORTED_MODULE_0__.DesignerPageRoutingModule
        ],
        declarations: [_designer_page__WEBPACK_IMPORTED_MODULE_1__.DesignerModalPage]
    })
], DesignerModalPageModule);



/***/ }),

/***/ 3516:
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/Designer/designer/designer.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerModalPage": () => (/* binding */ DesignerModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer.page.html?ngResource */ 29959);
/* harmony import */ var _designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer.page.scss?ngResource */ 33438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);












let DesignerModalPage = class DesignerModalPage {
    constructor(modalCtrl, storage, apiEntrena, toasCtrl) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.apiEntrena = apiEntrena;
        this.toasCtrl = toasCtrl;
        this.titleInput = '';
        this.values = {};
        this.files = [];
        this.filesRendering = [];
        this.route = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environments.URL_RESORCES;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.titleInput = this.data.type;
        this.values = this.data.values;
        console.log(this.values);
    }
    addOpt() {
        this.values.opts.push({
            text: '',
            value: '',
            checked: false
        });
    }
    deleteOpt(i) {
        this.values.opts.splice(i, 1);
    }
    // FILES
    uploadFile(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const Login = yield this.storage.getLogin();
            if (Login) {
                const formData = new FormData();
                formData.append('file', file.data);
                file.inProgress = true;
                console.log(Login);
                this.apiEntrena.upload(formData, Login[0].token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((event) => {
                    console.log('Holaa');
                    switch (event.type) {
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpEventType.UploadProgress:
                            file.progress = Math.round(event.loaded * 1 / event.total);
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpEventType.Response:
                            return event;
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)((error) => {
                    file.inProgress = false;
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(`${file.data.name} upload failed.`);
                })).subscribe((event) => {
                    if (typeof (event) === 'object') {
                        console.log(event.body, ' Respuesta');
                        if (event.body.status === 'ok') {
                            this.values.src = event.body.response;
                            this.values.mime = file.data.type;
                            this.values.name = file.data.name;
                            this.saveJson();
                        }
                        else {
                            this.toasCtrl.newCreatedToast('Upload failed', false);
                        }
                    }
                });
            }
        });
    }
    uploadFiles() {
        this.fileUpload.nativeElement.value = '';
        this.files.forEach(file => {
            this.uploadFile(file);
        });
    }
    onClick() {
        const fileUpload = this.fileUpload.nativeElement;
        fileUpload.onchange = () => {
            // tslint:disable-next-line:prefer-for-of
            for (let index = 0; index < fileUpload.files.length; index++) {
                const file = fileUpload.files[index];
                console.log(file, file.name);
                this.files.push({ data: file, inProgress: false, progress: 0 });
            }
        };
        fileUpload.click();
    }
    deletedFile() {
        this.files = [];
    }
    // CLOSE FILES
    save() {
        if (this.data.type === 'image' || this.data.type === 'video' || this.data.type === 'file') {
            this.uploadFiles();
        }
        else {
            this.saveJson();
        }
    }
    saveJson() {
        this.modalCtrl.dismiss({
            reload: true,
            info: {
                values: this.values,
                page: this.idpage
            }
        });
    }
    close() {
        this.modalCtrl.dismiss({});
    }
};
DesignerModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__.StorageWebService },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_3__.ApiEntrenaService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService }
];
DesignerModalPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    idpage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    fileUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['fileUpload', { static: false },] }]
};
DesignerModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-designer',
        template: _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DesignerModalPage);



/***/ }),

/***/ 8245:
/*!*******************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer/designer.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "ion-slide {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n\nion-item:hover {\n  --background: var(--ion-color-light);\n  cursor: pointer;\n}\n\nion-slide div {\n  width: 100%;\n}\n\n.titulo {\n  background-color: #777777;\n  color: #fff;\n}\n\n.title {\n  background-color: #e1e1e1;\n  width: 100%;\n  padding: 10px;\n  display: flex;\n}\n\n.green {\n  background: #f1f1f1 !important;\n}\n\n.fullWidth {\n  width: 100%;\n}\n\n.widthFile {\n  width: auto;\n  max-width: 80%;\n}\n\n.centrado {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiZGVzaWduZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5pb24taXRlbTpob3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdWxsV2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53aWR0aEZpbGUge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNlbnRyYWRvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 33438:
/*!**************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/Designer/designer/designer.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".marginBottom {\n  margin-bottom: 10px;\n}\n\n.border {\n  border: 1px solid rgba(3, 3, 3, 0.1);\n}\n\nvideo {\n  max-width: 100%;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLG1CQUFBO0FBQ0w7O0FBRUE7RUFDSyxvQ0FBQTtBQUNMOztBQUVBO0VBQ0ssZUFBQTtFQUNBLFdBQUE7QUFDTCIsImZpbGUiOiJkZXNpZ25lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luQm90dG9tIHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMywzLDMsMC4xKTtcclxufVxyXG5cclxudmlkZW8ge1xyXG4gICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICB3aWR0aDogYXV0bztcclxufSJdfQ== */";

/***/ }),

/***/ 45169:
/*!*******************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/designer/designer.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar [color]=\"color\">\n        <ion-back-button defaultHref=\"/designer-list\" icon=\"chevron-back-outline\" slot=\"start\">\n\n        </ion-back-button>\n\n        <ion-input type=\"text\" placeholder=\"ESCRIBA AQUI EL NOMBRE DEL ENTRENAMIENTO\" [value]=\"nameDesing\" (ionChange)=\"changeTitleDesign($event)\" (ionBlur)=\"autoSave()\"></ion-input>\n\n\n        <ion-input slot=\"end\" type=\"number\" placeholder=\"PUNTAJE MINIMO DE APROBACION\" [value]=\"JSONDesigner.apro\" (ionChange)=\"changePromDesign($event)\" (ionBlur)=\"autoSave()\"></ion-input>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab vertical=\"top\" horizontal=\"start\">\n        <ion-fab-button (click)=\"newPages()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <ion-slides #slide *ngIf=\"load\">\n        <ion-slide *ngFor=\"let page of JSONDesigner.pages; let p = index;\">\n\n            <div class=\"page\">\n\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-item lines=\"none\" class=\"sinfondo\">\n                                <ion-button slot=\"end\" color=\"danger\" mode=\"ios\" (click)=\"deletePage(p)\">\n                                    <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"titulo\">\n                        <ion-col size=\"6\">\n                            Titulo\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            Tipo de Página\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"6\">\n                            <ion-input type=\"text\" placeholder=\"Titulo de la página\" (ionChange)=\"titlePage( $event, page.id )\" (ionBlur)=\"titlesave()\" [value]=\"page.name\"></ion-input>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <ion-select [value]=\"page.type\" class=\"green\" placeholder=\"Seleccione el tipo de página\" (ionChange)=\"changeTypePage( $event, page.id)\">\n                                <ion-select-option value=\"entrena\">Entrenamiento</ion-select-option>\n                                <ion-select-option value=\"quiz\">Quiz</ion-select-option>\n                            </ion-select>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"titulo\">\n                        <ion-col size=\"12\">\n                            Agregar campos al formulario\n                        </ion-col>\n\n                    </ion-row>\n                </ion-grid>\n            </div>\n\n            <div class=\"barra\">\n                <ion-list>\n                    <ion-item-divider lines=\"none\" color=\"light\">\n                        <ion-select placeholder=\"Seleccione el campo a crear\" (ionChange)=\"createInputPage($event, page.id)\">\n                            <ion-select-option value=\"textline\">Campo de Texto</ion-select-option>\n                            <ion-select-option value=\"textarea\">Campo de texto largo</ion-select-option>\n                            <ion-select-option value=\"radio\">Seleccion Unica</ion-select-option>\n                            <ion-select-option value=\"checkbox\">Seleccion multiple</ion-select-option>\n                            <ion-select-option value=\"image\">Imagen</ion-select-option>\n                            <ion-select-option value=\"video\">Video</ion-select-option>\n                            <ion-select-option value=\"file\">Archivo</ion-select-option>\n                        </ion-select>\n                    </ion-item-divider>\n                </ion-list>\n            </div>\n\n            <div class=\"childrens\">\n                <ion-list>\n\n                    <ion-reorder-group disabled=\"false\" (ionItemReorder)=\"changeOrder( $event, page.id )\">\n\n                        <div *ngFor=\"let child of page.Chilndren; let c = index;\">\n                            <div class=\"flex\">\n                                <ion-reorder></ion-reorder>\n                                <ion-buttons>\n                                    <ion-button (click)=\"deleteChild(p, c)\">\n                                        <ion-icon name=\"trash\" slot=\"icon-only\" [color]=\"color\"></ion-icon>\n                                    </ion-button>\n                                </ion-buttons>\n                            </div>\n                            <ion-item (click)=\"modalChangeInput( child, page.id )\">\n                                <ion-label *ngIf=\"child.values.title === ''\">{{ child.type }}</ion-label>\n                                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.values.title !== '' && child.type === 'textline'\">\n                                    <strong class=\"marginBottom title\">{{ child.values.title }}</strong> <br>\n                                    <ion-input [value]=\"child.values.value\" class=\"border\"></ion-input>\n                                </div>\n\n                                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.values.title !== '' && child.type === 'textarea'\">\n                                    <strong class=\"marginBottom title\">{{ child.values.title }}</strong> <br>\n                                    <ion-textarea [value]=\"child.values.value\" class=\"border\"></ion-textarea>\n                                </div>\n\n\n                                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.values.title !== '' && (child.type === 'radio' || child.type === 'checkbox')\">\n                                    <strong class=\"marginBottom title\">{{ child.values.title }}</strong> <br>\n                                    <div *ngFor=\"let opt of child.values.opts; let i = index;\">\n                                        <strong> {{ i + 1 }}</strong> {{ opt.text }}\n                                    </div>\n                                </div>\n\n\n                                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.values.title !== '' && child.type === 'image'\">\n                                    <strong class=\"marginBottom title\">{{ child.values.title }}</strong> <br>\n                                    <img src=\"{{route}}{{child.values.src}}\" class=\"widthFile ion-padding\">\n                                </div>\n\n                                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.values.title !== '' && child.type === 'file'\">\n                                    <strong class=\"marginBottom title\">{{ child.values.title }}</strong> <br>\n                                    <ion-chip color=\"warning\" class=\"widthFile ion-padding\"> {{child.values.src}}</ion-chip>\n                                </div>\n\n                                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.values.title !== '' && child.type === 'video'\">\n                                    <strong class=\"marginBottom title\">{{ child.values.title }}</strong> <br>\n                                    <video src=\"{{route}}{{child.values.src}}\" class=\"widthFile ion-padding\"> </video>\n                                </div>\n\n                            </ion-item>\n                        </div>\n\n\n                    </ion-reorder-group>\n                </ion-list>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>\n\n\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar [color]=\"color\">\n        <ion-item lines=\"none\" slot=\"end\" *ngIf=\"save\">\n            <ion-spinner name=\"crescent\" slot=\"start\"></ion-spinner>\n            <ion-label>Guardando Cambios...</ion-label>\n        </ion-item>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\">\n\n                    <ion-button *ngIf=\"pageActive === 1\" mode=\"ios\" expand=\"block\" [color]=\"color\" (click)=\"exit()\">Salir</ion-button>\n\n                    <ion-button *ngIf=\"pageActive > 1\" mode=\"ios\" expand=\"block\" [color]=\"color\" (click)=\"prev()\">\n                        <ion-icon name=\"chevron-back\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n\n                <ion-col size=\"4\" class=\"ion-text-center centrado\"> {{ pageActive }} / {{ pagesCount }}</ion-col>\n\n                <ion-col size=\"4\">\n                    <ion-button *ngIf=\"pageActive < pagesCount\" mode=\"ios\" expand=\"block\" [color]=\"color\" (click)=\"next()\">\n                        <ion-icon name=\"chevron-forward\"></ion-icon>\n                    </ion-button>\n\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 29959:
/*!**************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/Designer/designer/designer.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"users\">\n        <ion-title>{{ titleInput }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-list *ngIf=\"data.type === 'textline' || data.type === 'textarea'\">\n        <strong>Titulo del campo</strong><br>\n        <ion-item lines=\"none\" class=\"marginBottom border\">\n            <ion-input type=\"text\" placeholder=\"Titulo del campo\" [(ngModel)]=\"values.title\"></ion-input>\n        </ion-item>\n\n        <strong>Contenido del campo</strong><br>\n        <ion-item *ngIf=\"data.type === 'textline'\" lines=\"none\" class=\"marginBottom border\">\n            <ion-input type=\"text\" placeholder=\"Contenido del campo\" [(ngModel)]=\"values.value\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"data.type === 'textarea'\" lines=\"none\" class=\"marginBottom border\">\n            <ion-textarea type=\"text\" placeholder=\"Contenido del campo\" [(ngModel)]=\"values.value\"></ion-textarea>\n        </ion-item>\n    </ion-list>\n\n\n\n    <div class=\"input\" *ngIf=\"data.type === 'radio'\">\n        <ion-list>\n            <strong>Titulo del campo</strong><br>\n            <ion-item lines=\"none\" class=\"marginBottom border\">\n                <ion-input type=\"text\" placeholder=\"Titulo del campo\" [(ngModel)]=\"values.title\"></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <strong>Opciones</strong>\n\n        <ion-list *ngFor=\"let opt of values.opts; let i = index;\">\n            <ion-item lines=\"none\" class=\" \">\n                <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"deleteOpt(i)\">\n                        <ion-icon name=\"trash\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"marginBottom border\">\n                <ion-input type=\"text\" placeholder=\"Text\" [(ngModel)]=\"opt.text\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"marginBottom border\">\n                <ion-input type=\"text\" placeholder=\"Value\" [(ngModel)]=\"opt.value\"></ion-input>\n            </ion-item>\n            <div class=\"border\"></div>\n        </ion-list>\n\n        <div class=\"marginBottom\"></div>\n        <ion-button color=\"secondary\" mode=\"ios\" (click)=\"addOpt()\">Agregar Opción</ion-button>\n    </div>\n\n\n\n\n\n    <div class=\"input\" *ngIf=\"data.type === 'checkbox'\">\n        <ion-list>\n            <strong>Titulo del campo</strong><br>\n            <ion-item lines=\"none\" class=\"marginBottom border\">\n                <ion-input type=\"text\" placeholder=\"Titulo del campo\" [(ngModel)]=\"values.title\"></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <strong>Opciones</strong>\n\n        <ion-list *ngFor=\"let opt of values.opts; let i = index;\">\n            <ion-item lines=\"none\" class=\" \">\n                <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"deleteOpt(i)\">\n                        <ion-icon name=\"trash\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"marginBottom border\">\n                <ion-input type=\"text\" placeholder=\"Text\" [(ngModel)]=\"opt.text\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"marginBottom border\">\n                <ion-input type=\"text\" placeholder=\"Value\" [(ngModel)]=\"opt.value\"></ion-input>\n            </ion-item>\n            <div class=\"border\"></div>\n        </ion-list>\n\n        <div class=\"marginBottom\"></div>\n        <ion-button color=\"secondary\" mode=\"ios\" (click)=\"addOpt()\">Agregar Opción</ion-button>\n    </div>\n\n\n    <div *ngIf=\"data.type === 'image'\">\n        <div style=\"margin-top:10px;\">\n            <ion-list>\n                <strong>Titulo de la imagen</strong><br>\n                <ion-item lines=\"none\" class=\"marginBottom border\">\n                    <ion-input type=\"text\" placeholder=\"Titulo del campo\" [(ngModel)]=\"values.title\"></ion-input>\n                </ion-item>\n            </ion-list>\n\n            <strong *ngIf=\"values.src !== ''\">Imagen Actual</strong>\n            <ion-list *ngIf=\"values.src !== ''\">\n                <ion-item class=\"marginBottom\">\n                    <ion-label>{{ values.name }} <br>\n                        <img src=\"{{route}}{{values.src}}\" alt=\"\">\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngFor=\"let file of files\">\n                <ion-item-divider color=\"warning\"></ion-item-divider>\n                <ion-item class=\"marginBottom\">\n                    <ion-label><strong>Actualizar imagen por:</strong> <br> {{file.data.name}} - {{file.data.type}}\n                    </ion-label>\n                    <ion-buttons slot=\"end\">\n                        <ion-button (click)=\"deletedFile()\">\n                            <ion-icon name=\"trash\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                </ion-item>\n            </ion-list>\n            <div>\n                <ion-button class=\"myButton\" expand=\"block\" mode=\"ios\" color=\"tertiary\" (click)=\"onClick()\">\n                    <div>Subir Imagen</div>\n\n                </ion-button>\n            </div>\n        </div>\n        <input type=\"file\" #fileUpload id=\"fileUpload\" name=\"file\" accept=\"image/*\" style=\"display:none;\" /></div>\n\n\n\n    <div *ngIf=\"data.type === 'video'\">\n        <div style=\"margin-top:10px;\">\n            <ion-list>\n                <strong>Titulo del Video</strong><br>\n                <ion-item lines=\"none\" class=\"marginBottom border\">\n                    <ion-input type=\"text\" placeholder=\"Titulo del campo\" [(ngModel)]=\"values.title\"></ion-input>\n                </ion-item>\n            </ion-list>\n\n            <strong *ngIf=\"values.src !== ''\">Video Actual</strong>\n            <ion-list *ngIf=\"values.src !== ''\">\n                <ion-item class=\"marginBottom\">\n                    <ion-label>{{ values.name }} <br>\n                        <video controls src=\"{{route}}{{values.src}}\">\n          </video>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngFor=\"let file of files\">\n                <ion-item-divider color=\"warning\"></ion-item-divider>\n                <ion-item class=\"marginBottom\">\n                    <ion-label><strong>Actualizar Video por:</strong> <br> {{file.data.name}} - {{file.data.type}}\n                    </ion-label>\n                    <ion-buttons slot=\"end\">\n                        <ion-button (click)=\"deletedFile()\">\n                            <ion-icon name=\"trash\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                </ion-item>\n            </ion-list>\n            <div>\n                <ion-button class=\"myButton\" expand=\"block\" mode=\"ios\" color=\"tertiary\" (click)=\"onClick()\">\n                    <div>Subir Video</div>\n\n                </ion-button>\n            </div>\n        </div>\n        <input type=\"file\" #fileUpload id=\"fileUpload\" name=\"file\" accept=\"video/*\" style=\"display:none;\" /></div>\n\n\n\n\n    <div *ngIf=\"data.type === 'file'\">\n        <div style=\"margin-top:10px;\">\n            <ion-list>\n                <strong>Titulo del Video</strong><br>\n                <ion-item lines=\"none\" class=\"marginBottom border\">\n                    <ion-input type=\"text\" placeholder=\"Titulo del campo\" [(ngModel)]=\"values.title\"></ion-input>\n                </ion-item>\n            </ion-list>\n\n            <strong *ngIf=\"values.src !== ''\">Video Actual</strong>\n            <ion-list *ngIf=\"values.src !== ''\">\n                <ion-item class=\"marginBottom\">\n                    <ion-label>{{ values.name }} <br>\n                        <ion-chip>{{values.src}}</ion-chip>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngFor=\"let file of files\">\n                <ion-item-divider color=\"warning\"></ion-item-divider>\n                <ion-item class=\"marginBottom\">\n                    <ion-label><strong>Actualizar Archivo por:</strong> <br> {{file.data.name}} - {{file.data.type}}\n                    </ion-label>\n                    <ion-buttons slot=\"end\">\n                        <ion-button (click)=\"deletedFile()\">\n                            <ion-icon name=\"trash\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                </ion-item>\n            </ion-list>\n            <div>\n                <ion-button class=\"myButton\" expand=\"block\" mode=\"ios\" color=\"tertiary\" (click)=\"onClick()\">\n                    <div>Subir Archivo</div>\n\n                </ion-button>\n            </div>\n        </div>\n        <input type=\"file\" #fileUpload id=\"fileUpload\" name=\"file\" style=\"display:none;\" /></div>\n\n\n\n\n</ion-content>\n\n\n<ion-footer>\n    <ion-toolbar>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-button mode=\"ios\" expand=\"block\" color=\"light\" (click)=\"close()\">cancelar</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-button mode=\"ios\" expand=\"block\" color=\"primary\" (click)=\"save()\">Guardar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Entrena_Designer_designer_designer_module_ts.js.map