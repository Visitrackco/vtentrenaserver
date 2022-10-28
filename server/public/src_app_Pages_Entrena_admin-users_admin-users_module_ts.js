"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_Entrena_admin-users_admin-users_module_ts"],{

/***/ 8371:
/*!********************************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/users/users-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageRoutingModule": () => (/* binding */ UsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 9335);




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersEntrenaModalPage
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ 5455:
/*!************************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/users/users.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersEntrenaModalPageModule": () => (/* binding */ UsersEntrenaModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 8371);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page */ 9335);







let UsersEntrenaModalPageModule = class UsersEntrenaModalPageModule {
};
UsersEntrenaModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersPageRoutingModule
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_1__.UsersEntrenaModalPage]
    })
], UsersEntrenaModalPageModule);



/***/ }),

/***/ 9335:
/*!**********************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/users/users.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersEntrenaModalPage": () => (/* binding */ UsersEntrenaModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page.html?ngResource */ 2795);
/* harmony import */ var _users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page.scss?ngResource */ 483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 6061);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 6050);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 5829);









let UsersEntrenaModalPage = class UsersEntrenaModalPage {
    constructor(apiEntrena, toasCtrl, modalCtrl, storage) {
        this.apiEntrena = apiEntrena;
        this.toasCtrl = toasCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.existUser = false;
        this.createdAction = false;
        this.equalPassword = true;
        this.userTemp = '';
        this.login = {
            login: '',
            password: '',
            confirPassword: '',
            name: '',
            time: 1,
            id: ''
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.action === 'edit') {
            this.login = this.data;
            this.userTemp = this.data.login;
        }
    }
    validateUser(event) {
        if (this.action === 'edit') {
            if (event.detail.value !== this.userTemp) {
                this.funcValidateUser(event.detail.value);
            }
        }
        else {
            this.funcValidateUser(event.detail.value);
        }
    }
    funcValidateUser(value) {
        this.apiEntrena.existUser({ login: value }).subscribe((dataExist) => {
            if (dataExist.status === 'ok') {
                if (dataExist.response.exist) {
                    this.existUser = true;
                }
                else {
                    this.existUser = false;
                }
            }
            else {
                this.toasCtrl.newCreatedToast('No se pudo consultar el usuario, intentelo mas tarde', false);
                this.modalCtrl.dismiss({});
            }
        });
    }
    validatePassword(event, passwordcamp) {
        if (this.login.password !== this.login.confirPassword) {
            this.equalPassword = false;
        }
        else {
            this.equalPassword = true;
        }
    }
    execute() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.equalPassword && !this.existUser && this.login.login !== '' && this.login.name !== '' && this.login.time >= 1) {
                const login = yield this.storage.getLogin();
                if (login) {
                    if (this.action === 'edit') {
                        this.apiEntrena.modifyUserBasic(this.login, login[0].token, this.login.id).subscribe((data) => {
                            console.log(data);
                            if (data.status === 'ok') {
                                this.toasCtrl.newCreatedToast('Usuario editado correctamente', true);
                            }
                            else {
                                this.toasCtrl.newCreatedToast('No se pudo editar el usuario, intentelo mas tarde', false);
                            }
                            this.modalCtrl.dismiss({ reload: true });
                        }, (errpr) => {
                            this.toasCtrl.newCreatedToast('No se pudo editar el usuario, intentelo mas tarde', false);
                            this.modalCtrl.dismiss({ reload: true });
                        });
                    }
                    else {
                        this.apiEntrena.createdUserBasic(this.login, login[0].token).subscribe((data) => {
                            console.log(data);
                            if (data.status === 'ok') {
                                this.toasCtrl.newCreatedToast('Usuario creado correctamente', true);
                            }
                            else {
                                this.toasCtrl.newCreatedToast('No se pudo consultar el usuario, intentelo mas tarde', false);
                            }
                            this.modalCtrl.dismiss({ reload: true });
                        }, (errpr) => {
                            this.toasCtrl.newCreatedToast('No se pudo consultar el usuario, intentelo mas tarde', false);
                            this.modalCtrl.dismiss({ reload: true });
                        });
                    }
                }
            }
            else {
                this.toasCtrl.newCreatedToast('Debe de llenar todos los campos correctamente', false);
            }
        });
    }
    closeWindow() {
        this.modalCtrl.dismiss({});
    }
};
UsersEntrenaModalPage.ctorParameters = () => [
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__.StorageWebService }
];
UsersEntrenaModalPage.propDecorators = {
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
UsersEntrenaModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-users',
        template: _users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('entryMessage', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
                        opacity: 1,
                        transform: 'scale(1)'
                    }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
                        opacity: 1,
                        transform: 'scale(1)'
                    }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
                        opacity: 0,
                        transform: 'scale(0)'
                    }))
                ])
            ])
        ],
        styles: [_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersEntrenaModalPage);



/***/ }),

/***/ 838:
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Entrena/admin-users/admin-users-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUsersPageRoutingModule": () => (/* binding */ AdminUsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-users.page */ 9508);




const routes = [
    {
        path: '',
        component: _admin_users_page__WEBPACK_IMPORTED_MODULE_0__.AdminUsersPage
    }
];
let AdminUsersPageRoutingModule = class AdminUsersPageRoutingModule {
};
AdminUsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminUsersPageRoutingModule);



/***/ }),

/***/ 737:
/*!*****************************************************************!*\
  !*** ./src/app/Pages/Entrena/admin-users/admin-users.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUsersPageModule": () => (/* binding */ AdminUsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-users-routing.module */ 838);
/* harmony import */ var _admin_users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-users.page */ 9508);
/* harmony import */ var _Modals_users_users_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/users/users.page */ 9335);
/* harmony import */ var _Modals_users_users_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modals/users/users.module */ 5455);
/* harmony import */ var src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Pipes/pipes.module */ 1000);










let AdminUsersPageModule = class AdminUsersPageModule {
};
AdminUsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        entryComponents: [
            _Modals_users_users_page__WEBPACK_IMPORTED_MODULE_2__.UsersEntrenaModalPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _admin_users_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUsersPageRoutingModule,
            _Modals_users_users_module__WEBPACK_IMPORTED_MODULE_3__.UsersEntrenaModalPageModule,
            src_app_Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule
        ],
        declarations: [_admin_users_page__WEBPACK_IMPORTED_MODULE_1__.AdminUsersPage]
    })
], AdminUsersPageModule);



/***/ }),

/***/ 9508:
/*!***************************************************************!*\
  !*** ./src/app/Pages/Entrena/admin-users/admin-users.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUsersPage": () => (/* binding */ AdminUsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _admin_users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-users.page.html?ngResource */ 3000);
/* harmony import */ var _admin_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-users.page.scss?ngResource */ 3007);
/* harmony import */ var _components_modal_assents_modal_assents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../components/modal-assents/modal-assents.component */ 6676);
/* harmony import */ var _components_modal_users_modal_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../components/modal-users/modal-users.component */ 7887);
/* harmony import */ var _Modals_users_users_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Modals/users/users.page */ 9335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 6061);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 5829);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 6050);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 9106);













let AdminUsersPage = class AdminUsersPage {
    constructor(modalCtrl, apiEntrena, storage, toastCrtrl, alertCtrl, socket, dataCompany) {
        this.modalCtrl = modalCtrl;
        this.apiEntrena = apiEntrena;
        this.storage = storage;
        this.toastCrtrl = toastCrtrl;
        this.alertCtrl = alertCtrl;
        this.socket = socket;
        this.dataCompany = dataCompany;
        this.listUsersBasic = [];
        this.text = '';
        this.color = '';
        this.dataCompany.$color.subscribe((color) => {
            this.color = color;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.listUsers();
    }
    listUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.apiEntrena.getUsersBasic(login[0].token).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'ok') {
                        this.listUsersBasic = data.response;
                    }
                    else {
                        this.toastCrtrl.newCreatedToast('No se pudo listar los usuarios, intentelo mas tarde', false);
                    }
                }, (error) => {
                    this.toastCrtrl.newCreatedToast('No se pudo listar los usuarios, intentelo mas tarde', false);
                });
            }
        });
    }
    modalUser(actionUser, datauser) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modals_users_users_page__WEBPACK_IMPORTED_MODULE_4__.UsersEntrenaModalPage,
                componentProps: {
                    action: actionUser,
                    data: datauser
                },
                keyboardClose: true
            });
            yield modal.present();
            const closeModal = yield modal.onWillDismiss();
            console.log(closeModal);
            if (closeModal) {
                if (closeModal.data) {
                    this.listUsers();
                }
            }
        });
    }
    editUser(userBasic) {
        const data = {
            login: userBasic.login,
            password: userBasic.password,
            confirPassword: userBasic.password,
            name: userBasic.name,
            time: userBasic.configuration.timeLimit,
            id: userBasic._id
        };
        this.modalUser('edit', data);
    }
    deleteUser(userBasic) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Esta seguro de eliminar este usuario ?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                    {
                        text: 'Aceptar',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const login = yield this.storage.getLogin();
                            if (login) {
                                this.apiEntrena.deleteUserBasic(login[0].token, userBasic._id).subscribe((data) => {
                                    if (data.status === 'ok') {
                                        this.toastCrtrl.newCreatedToast('Usuario eliminado de la lista', true);
                                        this.listUsers();
                                    }
                                    else {
                                        this.toastCrtrl.newCreatedToast('No se pudo eliminar el usuario, intentelo mas tarde', false);
                                    }
                                }, (error) => {
                                    this.toastCrtrl.newCreatedToast('No se pudo eliminar el usuario, intentelo mas tarde', false);
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    add(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_modal_users_modal_users_component__WEBPACK_IMPORTED_MODULE_3__.ModalUsersComponent,
                componentProps: {
                    user: user._id
                }
            });
            yield modal.present();
        });
    }
    history(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_modal_assents_modal_assents_component__WEBPACK_IMPORTED_MODULE_2__.ModalAssentsComponent,
                componentProps: {
                    user: user._id
                }
            });
            yield modal.present();
        });
    }
    statusUser(event, user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                // tslint:disable-next-line:max-line-length
                this.apiEntrena.statusUser({ id: user._id, status: event.detail.checked, timeLimit: user.configuration.timeLimit }, login[0].token).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'ok') {
                        if (!event.detail.checked) {
                            this.socket.emit('changeStatusUser', {
                                _id: user._id
                            });
                        }
                        this.toastCrtrl.newCreatedToast('User status changed successfully', true);
                    }
                    else {
                        this.toastCrtrl.newCreatedToast('Could not change user status', false);
                    }
                }, (err) => {
                    this.toastCrtrl.newCreatedToast('Could not change user status', false);
                });
            }
        });
    }
    changeText(event) {
        this.text = event.detail.value;
    }
};
AdminUsersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_5__.ApiEntrenaService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_6__.StorageWebService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__.Socket },
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_8__.DataComparnyService }
];
AdminUsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-admin-users',
        template: _admin_users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminUsersPage);



/***/ }),

/***/ 483:
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/users/users.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".inputItem {\n  border: 1px solid rgba(3, 3, 3, 0.1);\n  margin-bottom: 10px;\n}\n\n.maginBottom {\n  margin-bottom: 10px;\n}\n\n.invalid {\n  border: 1px solid var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLG9DQUFBO0VBQ0EsbUJBQUE7QUFDTDs7QUFFQTtFQUNLLG1CQUFBO0FBQ0w7O0FBRUE7RUFDSyx5Q0FBQTtBQUNMIiwiZmlsZSI6InVzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dEl0ZW0ge1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMywzLDMsMC4xKTtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWFnaW5Cb3R0b20ge1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufSJdfQ== */";

/***/ }),

/***/ 3007:
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Entrena/admin-users/admin-users.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2Vycy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2795:
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Entrena/Modals/users/users.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"users\">\n    <ion-title>Crear Usuario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n    <ion-item lines=\"none\" class=\"inputItem\">\n      <ion-input [(ngModel)]=\"login.name\" type=\"text\" placeholder=\"Nombre del Usuario\"></ion-input>\n    </ion-item>\n\n    <ion-item-divider class=\"maginBottom\" *ngIf=\"existUser\" @entryMessage color=\"danger\" lines=\"none\">\n      <ion-label>Este usuario ya pertenece a otra persona</ion-label>\n    </ion-item-divider>\n\n    <ion-item  lines=\"none\" class=\"inputItem\" (ionChange)=\"validateUser( $event );\" [class.invalid]=\"existUser\">\n      <ion-input [(ngModel)]=\"login.login\" type=\"text\" placeholder=\"Login del Usuario\"></ion-input>\n    </ion-item>\n\n    <ion-item-divider *ngIf=\"!equalPassword\" @entryMessage color=\"danger\" lines=\"none\" class=\"maginBottom\">\n      <ion-label>Las contraseñas no coinciden, por favor verifique</ion-label>\n    </ion-item-divider>\n\n    <ion-item lines=\"none\" class=\"inputItem\" [class.invalid]=\"!equalPassword\">\n      <ion-input [(ngModel)]=\"login.password\" (ionBlur)=\"validatePassword( $event, '1')\" type=\"password\" placeholder=\"Contraseña del Usuario\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"inputItem\" [class.invalid]=\"!equalPassword\">\n      <ion-input [(ngModel)]=\"login.confirPassword\" (ionBlur)=\"validatePassword( $event, '2')\" type=\"password\" placeholder=\"Confirmar Contraseña\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">Configurar tiempo limite de la sesión en horas</ion-label>\n      <ion-input [(ngModel)]=\"login.time\" class=\"ion-padding\" min=\"1\" max=\"5000\" type=\"number\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button mode=\"ios\" shape=\"round\" color=\"light\" expand=\"block\" (click)=\"closeWindow()\">Cancelar</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button mode=\"ios\" shape=\"round\" color=\"primary\" expand=\"block\" (click)=\"execute()\">Aceptar</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";

/***/ }),

/***/ 3000:
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Entrena/admin-users/admin-users.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar [color]=\"color\">\n    <ion-title>Control de usuarios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar mode=\"ios\" placeholder=\"Buscar Usuario\" (ionChange)=\"changeText( $event )\"></ion-searchbar>\n\n  <ion-list>\n   <ion-item-sliding *ngFor=\"let userBasic of listUsersBasic | search : text : 'name'\">\n    <ion-item>\n      <ion-checkbox [checked]=\"userBasic.status === 'on' ? true : false\" value=\"\" color=\"secondary\" slot=\"start\" (ionChange)=\"statusUser( $event, userBasic)\"></ion-checkbox>\n      <ion-label>\n        <strong>{{ userBasic.name }}</strong><br>\n        <strong>Creado: </strong> {{ userBasic.dateCreatedUser }}\n      </ion-label>\n    </ion-item>\n    <ion-item-options side=\"end\">\n\n\n\n      <ion-item-option color=\"success\" (click)=\"add(userBasic)\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-item-option>\n\n      <ion-item-option color=\"secondary\" (click)=\"history(userBasic)\">\n        <ion-icon name=\"list\" slot=\"icon-only\"></ion-icon>\n      </ion-item-option>\n      <!-- <ion-item-option color=\"primary\" [routerLink]=\"['/logs', userBasic._id]\">\n        <ion-icon name=\"information\" slot=\"icon-only\"></ion-icon>\n      </ion-item-option> -->\n\n      <ion-item-option color=\"warning\" (click)=\"editUser( userBasic )\">\n        <ion-icon name=\"pencil\" slot=\"icon-only\"></ion-icon>\n      </ion-item-option>\n\n      <ion-item-option color=\"danger\" (click)=\"deleteUser(userBasic)\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-item-option>\n\n    </ion-item-options>\n   </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [color]=\"color\" (click)=\"modalUser('create', {})\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Entrena_admin-users_admin-users_module_ts.js.map