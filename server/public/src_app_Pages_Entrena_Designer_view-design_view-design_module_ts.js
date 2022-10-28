"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_Entrena_Designer_view-design_view-design_module_ts"],{

/***/ 6591:
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/view-design/view-design-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDesignPageRoutingModule": () => (/* binding */ ViewDesignPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_design_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-design.page */ 3157);




const routes = [
    {
        path: '',
        component: _view_design_page__WEBPACK_IMPORTED_MODULE_0__.ViewDesignPage
    }
];
let ViewDesignPageRoutingModule = class ViewDesignPageRoutingModule {
};
ViewDesignPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewDesignPageRoutingModule);



/***/ }),

/***/ 8249:
/*!**************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/view-design/view-design.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDesignPageModule": () => (/* binding */ ViewDesignPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_design_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-design-routing.module */ 6591);
/* harmony import */ var _view_design_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-design.page */ 3157);







let ViewDesignPageModule = class ViewDesignPageModule {
};
ViewDesignPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_design_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewDesignPageRoutingModule
        ],
        declarations: [_view_design_page__WEBPACK_IMPORTED_MODULE_1__.ViewDesignPage]
    })
], ViewDesignPageModule);



/***/ }),

/***/ 3157:
/*!************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/view-design/view-design.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDesignPage": () => (/* binding */ ViewDesignPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_design_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-design.page.html?ngResource */ 6070);
/* harmony import */ var _view_design_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-design.page.scss?ngResource */ 8815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 6061);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 6050);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 5829);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 2082);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 9106);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment.prod */ 9019);












let ViewDesignPage = class ViewDesignPage {
    constructor(apiEntrena, toasCtrl, storage, ActiveRoute, modalCtrl, router, loading, loadCtrl, alertCtrl, dataCompany) {
        this.apiEntrena = apiEntrena;
        this.toasCtrl = toasCtrl;
        this.storage = storage;
        this.ActiveRoute = ActiveRoute;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.loading = loading;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.dataCompany = dataCompany;
        this.JSONDesigner = {
            save: false,
            pages: [],
            count: 0,
            prom: 0,
            tot: 0,
            apro: 0
        };
        this.nameDesing = '';
        this.viewInit = '1';
        this.save = false;
        this.idAnswer = '';
        this.pagesCount = 0;
        this.pageActive = 1;
        this.load = false;
        this.saveAnswer = false;
        this.apro = false;
        this.color = '';
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
                if (login[0].data.role === 'ADMIN_ENTRENA') {
                    this.apiEntrena.readDesigner(login[0].token, this.ActiveRoute.snapshot.paramMap.get('id')).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(data);
                        if (data.status === 'ok') {
                            this.load = true;
                            this.idAnswer = data.response._id;
                            this.JSONDesigner = data.response.JSONEntrena;
                            this.JSONDesigner.count = 0;
                            this.pagesCount = this.JSONDesigner.pages.length;
                            this.nameDesing = data.response.name;
                        }
                        else {
                            yield this.toasCtrl.newCreatedToast('Could not read design, please try again later', false);
                        }
                    }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        yield this.toasCtrl.newCreatedToast('Could not read design, please try again later', false);
                    }));
                }
                else {
                    this.apiEntrena.readAnswerJson(login[0].token, this.ActiveRoute.snapshot.paramMap.get('id')).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(data, 'data del usuario');
                        if (data.status === 'ok') {
                            this.saveAnswer = data.response.saveAnswer ? data.response.saveAnswer : false;
                            this.load = true;
                            this.idAnswer = data.response._id;
                            this.JSONDesigner = data.response.JSONEntrena;
                            this.JSONDesigner.count = 0;
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
                            this.nameDesing = data.response.name;
                            console.log(this.idAnswer, 'id de respuesta');
                            // tslint:disable-next-line:max-line-length
                            this.apiEntrena.createdAnswer(login[0].token, { parentDesigner: this.ActiveRoute.snapshot.paramMap.get('id'), parentAdmin: login[0].data.parentAdmin }).subscribe((res) => {
                                if (res.status === 'error') {
                                    this.toasCtrl.newCreatedToast(res.error, false).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                    }));
                                }
                                else {
                                    this.idAnswer = res.response._id;
                                    console.log(this.JSONDesigner, 'CHACHAI');
                                    if (this.JSONDesigner.tot < this.JSONDesigner.apro && this.saveAnswer) {
                                        this.otherDesign();
                                        this.apro = false;
                                    }
                                    else {
                                        this.apro = true;
                                    }
                                }
                                console.log(this.idAnswer, 'id de respuesta 2');
                            }, (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                this.toasCtrl.newCreatedToast('No se pudo guardar el intento', false);
                            }));
                        }
                        else {
                            this.toasCtrl.newCreatedToast('No se pudo guardar el intento', false);
                        }
                    }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        this.toasCtrl.newCreatedToast('No se pudo guardar el intento', false);
                    }));
                }
            }
        });
    }
    otherDesign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Atención!',
                message: 'Usted no aprobó la prueba en el anterior intento, desea realizar uno nuevo ?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            this.router.navigate(['/list-my-designs']);
                        }
                    },
                    {
                        text: 'Aceptar',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const login = yield this.storage.getLogin();
                            if (login) {
                                // tslint:disable-next-line:max-line-length
                                this.apiEntrena.createdAnswerOther(login[0].token, { parentDesigner: this.ActiveRoute.snapshot.paramMap.get('id'), parentAdmin: login[0].data.parentAdmin }).subscribe((data) => {
                                    if (data.status === 'error') {
                                        this.toasCtrl.newCreatedToast('No se pudo guardar el intento', false);
                                    }
                                    else {
                                        this.saveAnswer = data.response.saveAnswer ? data.response.saveAnswer : false;
                                        this.load = true;
                                        this.idAnswer = data.response._id;
                                        this.JSONDesigner = data.response.JSONEntrena;
                                        this.JSONDesigner.count = 0;
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
                                        this.nameDesing = data.response.name;
                                        this.idAnswer = data.response._id;
                                        this.toasCtrl.newCreatedToast('Nuevo intento creado', true);
                                    }
                                }, (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                    this.toasCtrl.newCreatedToast('No se pudo guardar el intento', false);
                                }));
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    changeSlide() {
        this.slide.getActiveIndex().then((idx) => {
            this.pageActive = idx + 1;
            this.content.scrollToTop().then(() => { });
        });
    }
    prev() {
        this.slide.slidePrev(300).then(() => {
            this.pageActive = this.pageActive + 1;
        });
    }
    next() {
        this.slide.slideNext(300).then(() => {
            this.pageActive = this.pageActive + 1;
        });
    }
    autoSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.JSONDesigner, 'paso 1');
            if (!this.saveAnswer) {
                console.log('eNTRAMOS', this.idAnswer, this.JSONDesigner);
                const login = yield this.storage.getLogin();
                this.save = true;
                if (login) {
                    if (login[0].data.role === 'ADMIN_ENTRENA') {
                        this.save = false;
                    }
                    else {
                        // tslint:disable-next-line:max-line-length
                        this.apiEntrena.updateAnswer(login[0].token, { _id: this.idAnswer, JSONEntrena: this.JSONDesigner }).subscribe((data) => {
                            console.log(data, 'data entrena');
                            if (data.status === 'ok') {
                                this.save = false;
                                this.JSONDesigner = data.response.JSONEntrena;
                            }
                            else {
                                this.save = false;
                                this.toasCtrl.newCreatedToast('No se pudo guardar los cambios', false);
                            }
                        }, (error) => {
                            this.save = false;
                            this.toasCtrl.newCreatedToast('No se pudo guardar los cambios', false);
                        });
                    }
                }
            }
        });
    }
    saveEnd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.saveAnswer) {
                const login = yield this.storage.getLogin();
                if (login) {
                    if (login[0].data.role === 'ADMIN_ENTRENA') {
                        this.save = false;
                    }
                    else {
                        console.log('ALERTAS');
                        const alert = yield this.alertCtrl.create({
                            header: 'Está seguro de finalizar la capacitación?',
                            message: 'Al finalizar la capacitación no podrá realizar cambios en ella de nuevo.',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Aceptar',
                                    handler: () => {
                                        this.save = true;
                                        this.JSONDesigner.tot = Number((this.JSONDesigner.prom / this.JSONDesigner.count).toFixed(1));
                                        // tslint:disable-next-line:max-line-length
                                        this.apiEntrena.updateAnswerSave(login[0].token, { _id: this.idAnswer, JSONEntrena: this.JSONDesigner }).subscribe((data) => {
                                            if (data.status === 'ok') {
                                                if (this.JSONDesigner.tot >= this.JSONDesigner.apro) {
                                                    this.toasCtrl.newCreatedToast('Feclicitaciones, aprobaste el módulo', true);
                                                }
                                                else {
                                                    this.toasCtrl.newCreatedToast('Lo sentimos, no te alcanzó el promedio final para aprobar el módulo', false);
                                                }
                                                this.save = false;
                                                this.JSONDesigner = data.response.JSONEntrena;
                                                this.router.navigate(['/list-my-designs']);
                                            }
                                            else {
                                                this.save = false;
                                                this.toasCtrl.newCreatedToast('No se pudo guardar los cambios', false);
                                            }
                                        }, (error) => {
                                            this.save = false;
                                            this.toasCtrl.newCreatedToast('No se pudo guardar los cambios', false);
                                        });
                                    }
                                }
                            ]
                        });
                        yield alert.present();
                        // tslint:disable-next-line:max-line-length
                    }
                }
            }
        });
    }
    insertAnswers(event, page, child, opt) {
        this.JSONDesigner.prom = 0;
        this.JSONDesigner.pages = this.JSONDesigner.pages.map((item) => {
            if (item.id === page) {
                item.Chilndren.map((children) => {
                    if (children.id === child.id) {
                        if (child.type === 'radio') {
                            children.values.answer.text = event.detail.value;
                            const optRadio = children.values.opts.filter((ropt) => ropt.text === event.detail.value);
                            console.log(optRadio, 'bien');
                            children.values.answer.value = parseFloat(optRadio[0].value);
                        }
                        else if (child.type === 'checkbox') {
                            if (event.detail.checked) {
                                children.values.answer.sum = children.values.answer.sum + parseFloat(children.values.opts[opt].value);
                                if (!children.values.answer.op.find((op) => op === event.detail.value)) {
                                    children.values.answer.op.push(event.detail.value);
                                }
                            }
                            else {
                                children.values.answer.sum = children.values.answer.sum - parseFloat(children.values.opts[opt].value);
                                children.values.answer.op = children.values.answer.op.filter(op => op !== event.detail.value);
                            }
                            children.values.opts[opt].checked = event.detail.checked;
                        }
                    }
                    // tslint:disable-next-line:max-line-length
                    if (children.type === 'radio' || children.type === 'checkbox') {
                        this.JSONDesigner.prom = this.JSONDesigner.prom + parseFloat(children.values.answer.value) + parseFloat(children.values.answer.sum);
                        return children;
                    }
                });
            }
            return item;
        });
        this.autoSave();
        console.log(event.detail.value, page, child, opt);
    }
    exportPDF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            this.loading.createLoading('Exportando PDF...');
            if (login) {
                // tslint:disable-next-line:max-line-length
                this.apiEntrena.exportPDF(login[0].token, this.idAnswer).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'ok') {
                        this.loading.cancelLoading();
                        // tslint:disable-next-line:max-line-length
                        window.open(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environments.URL_NODE + '/vtentrena/designer/answer/download?path=' + data.path + '&name=' + 'Diploma -' + login[0].data.name + '.pdf', '_self');
                    }
                    else {
                        this.loading.cancelLoading();
                        this.toasCtrl.newCreatedToast('Could not save design, please try again later', false);
                    }
                }, (error) => {
                    this.loading.cancelLoading();
                    this.toasCtrl.newCreatedToast('Could not save design, please try again later', false);
                });
            }
        });
    }
    exit() {
        this.router.navigate(['/list-my-designs']);
    }
    download(child) {
        console.log('abrete', child);
        // tslint:disable-next-line:max-line-length
        window.open(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environments.URL_NODE + '/vtentrena/designer/answer/download/files?path=' + child.values.src + '&name=' + child.values.src, '_self');
    }
};
ViewDesignPage.ctorParameters = () => [
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__.StorageWebService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_6__.DataComparnyService }
];
ViewDesignPage.propDecorators = {
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['slide', { static: false },] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['content', { static: false },] }]
};
ViewDesignPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-view-design',
        template: _view_design_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_design_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewDesignPage);



/***/ }),

/***/ 8815:
/*!*************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/view-design/view-design.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "ion-slide {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n\nion-slide div {\n  width: 100%;\n}\n\nion-item-divider {\n  padding: 5px;\n  text-align: left;\n}\n\n.marginBottom {\n  margin-bottom: 10px;\n}\n\n.border {\n  border: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.green {\n  background: #FFF1C9 !important;\n}\n\n.fullWidth {\n  width: 100%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.widthFile {\n  width: auto;\n  margin: auto;\n  max-width: 100%;\n}\n\n.centrado {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZGVzaWduLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0w7O0FBS0E7RUFDSyxXQUFBO0FBRkw7O0FBS0E7RUFDSyxZQUFBO0VBQ0EsZ0JBQUE7QUFGTDs7QUFLQTtFQUNLLG1CQUFBO0FBRkw7O0FBS0E7RUFDSyxvQ0FBQTtBQUZMOztBQU1BO0VBQ0ssOEJBQUE7QUFITDs7QUFNQTtFQUNLLFdBQUE7RUFDQSwyQ0FBQTtBQUhMOztBQU1BO0VBQ0ssV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSEw7O0FBTUE7RUFDSyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhMIiwiZmlsZSI6InZpZXctZGVzaWduLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5icmVha3tcclxufVxyXG5cclxuaW9uLXNsaWRlIGRpdntcclxuICAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlcntcclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm1hcmdpbkJvdHRvbSB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMsMywzLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uZ3JlZW4ge1xyXG4gICAgIGJhY2tncm91bmQ6ICNGRkYxQzkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ1bGxXaWR0aHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4ud2lkdGhGaWxlIHtcclxuICAgICB3aWR0aDogYXV0bztcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2VudHJhZG97XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 6070:
/*!*************************************************************************************!*\
  !*** ./src/app/Pages/Entrena/Designer/view-design/view-design.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar [color]=\"color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/list-my-designs\" icon=\"chevron-back\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ nameDesing }}</ion-title>\n\n    <ion-button *ngIf=\"saveAnswer && apro\" slot=\"end\" color=\"light\" mode=\"ios\" (click)=\"exportPDF()\">\n      Exportar Diploma      \n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content fullscreen=\"true\" >\n\n\n  <ion-slides *ngIf=\"load\" #slide (ionSlideWillChange)=\"changeSlide()\">\n    <ion-slide *ngFor=\"let page of JSONDesigner.pages\">\n      <div class=\"page\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>{{page.name}}</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-label>{{page.type}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    \n      <div class=\"childrens\">\n        <ion-list>\n\n            <div *ngFor=\"let child of page.Chilndren\">\n              <div class=\"fullWidth\" *ngIf=\"page.type === 'entrena'\">\n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'textline'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n  \n                  <ion-item lines=\"none\" class=\" marginBottom\"> <ion-label class=\"ion-text-wrap break\">{{ child.values.value }}</ion-label> </ion-item>\n                  \n                </div>\n  \n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'textarea'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n  \n                  <ion-item lines=\"none\"  class=\" marginBottom\"> <ion-label class=\"ion-text-wrap break\">{{ child.values.value }}</ion-label> </ion-item>\n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'radio'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n                    <ion-item *ngFor=\"let opt of child.values.opts; let i = index;\" lines=\"none\" class=\"\"> <ion-badge color=\"primary\" slot=\"start\">{{ i + 1 }}</ion-badge> <ion-label>{{ opt.text }}</ion-label></ion-item>\n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'checkbox'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n                  <ion-item *ngFor=\"let opt of child.values.opts; let i = index;\" lines=\"none\" class=\"\"> <ion-badge color=\"primary\" slot=\"start\">{{ i + 1 }}</ion-badge> <ion-label>{{ opt.text }}</ion-label></ion-item>\n                \n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'image'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n    \n                  <img src=\"https://www.vtentrena.com/uploads/Entrenamientos/{{child.values.src}}\" class=\"widthFile ion-padding\">\n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'video'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n    \n                  <video  src=\"https://www.vtentrena.com/uploads/Entrenamientos/{{child.values.src}}\" class=\"widthFile ion-padding\" controls> </video>\n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'file'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n    \n                  <ion-chip (click)=\"download(child)\" [color]=\"color\"  class=\"widthFile ion-padding\"> {{child.values.src}}</ion-chip>\n                </div>\n              </div>\n\n              <div class=\"fullWidth\" *ngIf=\"page.type === 'quiz'\">\n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'textline'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n  \n                  <ion-item lines=\"none\" color=\"light\" class=\"border marginBottom\"> <ion-input  [value]=\"child.values.value\" ></ion-input> </ion-item>\n                  \n                </div>\n  \n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'textarea'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n  \n                  <ion-item lines=\"none\" color=\"light\" class=\"border marginBottom\"> <ion-textarea  [value]=\"child.values.value\" rows=\"5\"></ion-textarea> </ion-item>\n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'radio'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n                  <ion-radio-group (ionChange)=\"insertAnswers( $event, page.id, child, '')\" value=\"{{ child.values.answer.text }}\">\n                    <ion-item *ngFor=\"let opt of child.values.opts; let o = index;\" lines=\"none\" class=\"\"> <ion-radio  value=\"{{ opt.text }}\" [color]=\"color\" slot=\"start\" ></ion-radio> <ion-label>{{ opt.text }}</ion-label></ion-item>\n                  \n                  </ion-radio-group>\n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'checkbox'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n    \n                    <ion-item *ngFor=\"let opt of child.values.opts; let o = index;\" lines=\"none\" class=\"\"> <ion-checkbox [checked]=\"opt.checked\" value=\"{{ opt.text }}\" [color]=\"color\" slot=\"start\" (ionChange)=\"insertAnswers( $event, page.id, child, o)\"></ion-checkbox> <ion-label>{{ opt.text }}</ion-label></ion-item>\n                  \n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'image'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n    \n                  <img src=\"https://www.vtentrena.com/uploads/Entrenamientos/{{child.values.src}}\" class=\"widthFile ion-padding\">\n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'video'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n    \n                  <video  src=\"https://www.vtentrena.com/uploads/Entrenamientos/{{child.values.src}}\" class=\"widthFile ion-padding\" controls> </video>\n                  \n                </div>\n  \n                <div class=\"ion-text-wrap fullWidth\" *ngIf=\"child.type === 'file'\">\n                  <ion-item-divider lines=\"none\" color=\"medium\" class=\"marginBottom\"><strong class=\"\">{{ child.values.title }}</strong> </ion-item-divider>\n    \n                  <ion-chip (click)=\"download(child)\" [color]=\"color\"  class=\"widthFile ion-padding\"> {{child.values.src}}</ion-chip>\n                </div>\n              </div>\n             \n            </div>\n              \n        </ion-list>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar [color]=\"color\">\n    <ion-item lines=\"none\" slot=\"end\" *ngIf=\"save\">\n      <ion-spinner name=\"crescent\" slot=\"start\"></ion-spinner>\n      <ion-label>Guardando Cambios...</ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n\n          <ion-button *ngIf=\"pageActive === 1\" mode=\"ios\" expand=\"block\" [color]=\"color\" (click)=\"exit()\">Salir</ion-button>\n          \n          <ion-button *ngIf=\"pageActive > 1\" mode=\"ios\" expand=\"block\" [color]=\"color\" (click)=\"prev()\"><ion-icon name=\"chevron-back\"></ion-icon></ion-button></ion-col>\n\n        <ion-col size=\"4\" class=\"ion-text-center centrado\"> {{ pageActive }} / {{ pagesCount }}</ion-col>\n\n        <ion-col size=\"4\"><ion-button *ngIf=\"pageActive < pagesCount\" mode=\"ios\" expand=\"block\" [color]=\"color\" (click)=\"next()\"><ion-icon name=\"chevron-forward\"></ion-icon></ion-button>\n        \n          <ion-button *ngIf=\"pageActive === pagesCount\" mode=\"ios\" expand=\"block\" [color]=\"color\" (click)=\"saveEnd()\">Finalizar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Entrena_Designer_view-design_view-design_module_ts.js.map