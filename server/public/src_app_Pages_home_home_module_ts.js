"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_home_home_module_ts"],{

/***/ 5295:
/*!**************************************************************!*\
  !*** ./src/app/Pages/Modals/chat-modal/chat-modal.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatModalPageModule": () => (/* binding */ ChatModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _chat_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-modal.page */ 1392);






let ChatModalPageModule = class ChatModalPageModule {
};
ChatModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule
        ],
        declarations: [_chat_modal_page__WEBPACK_IMPORTED_MODULE_0__.ChatModalPage]
    })
], ChatModalPageModule);



/***/ }),

/***/ 1392:
/*!************************************************************!*\
  !*** ./src/app/Pages/Modals/chat-modal/chat-modal.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatModalPage": () => (/* binding */ ChatModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chat_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-modal.page.html?ngResource */ 194);
/* harmony import */ var _chat_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-modal.page.scss?ngResource */ 6926);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 3954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 5829);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let ChatModalPage = class ChatModalPage {
    constructor(apiService, storage, socket, modalCtrl) {
        this.apiService = apiService;
        this.storage = storage;
        this.socket = socket;
        this.modalCtrl = modalCtrl;
        this.users = [];
        this.usersSelect = {
            name: 'Mi sala de chat',
            users: []
        };
        this.customer = {
            name: '',
            login: '',
            clave: '',
            company: '',
            userID: ''
        };
        this.customers = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.type === 'chat') {
                this.usersSelect = {
                    name: 'Mi sala de chat',
                    users: []
                };
                const login = yield this.storage.getLogin();
                if (login) {
                    console.log(login[0]);
                    this.apiService.getCustomersCompany(login[0].CompanyID).subscribe((data) => {
                        console.log(data, 'DaTAMAN');
                        if (data.status === 'ok') {
                            if (data.response.length > 0) {
                                data.response.forEach((item) => {
                                    item.ID = item.login;
                                    this.customers.push(item);
                                });
                            }
                            this.customers = data.response;
                        }
                    });
                    this.apiService.getUsersCompany({ AccessToken: login[0].AccessToken }).subscribe((data) => {
                        data = JSON.parse(data);
                        console.log(data);
                        this.users = data[0];
                        this.users = this.users.filter((item) => {
                            return item.ID !== login[0].UserID;
                        });
                        this.usersSelect.users.push(login[0].UserID);
                    });
                }
            }
        });
    }
    selection(event) {
        if (event.detail.checked) {
            this.usersSelect.users.push(event.detail.value);
        }
        else {
            this.usersSelect.users = this.usersSelect.users.filter((item) => item !== event.detail.value);
        }
    }
    createdChat() {
        this.socket.emit('chat', this.usersSelect);
        this.modalCtrl.dismiss({
            status: 'ok'
        });
    }
    createdCustomer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                console.log(login[0]);
                this.customer.company = login[0].CompanyID;
                this.customer.userID = login[0].UserID;
                this.apiService.createdCustomer(this.customer).subscribe((data) => {
                    console.log(data, ' data mas');
                    if (data.status === 'ok') {
                        this.modalCtrl.dismiss({
                            status: 'ok'
                        });
                    }
                    else {
                        this.modalCtrl.dismiss({
                            status: 'error',
                            error: data.error
                        });
                    }
                });
            }
        });
    }
};
ChatModalPage.ctorParameters = () => [
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__.StorageWebService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ChatModalPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ChatModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-chat-modal',
        template: _chat_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatModalPage);



/***/ }),

/***/ 7643:
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 3098);
/* harmony import */ var _Modals_chat_modal_chat_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modals/chat-modal/chat-modal.module */ 5295);
/* harmony import */ var _Modals_chat_modal_chat_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/chat-modal/chat-modal.page */ 1392);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        entryComponents: [
            _Modals_chat_modal_chat_modal_page__WEBPACK_IMPORTED_MODULE_2__.ChatModalPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
                }
            ]),
            _Modals_chat_modal_chat_modal_module__WEBPACK_IMPORTED_MODULE_1__.ChatModalPageModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 3098:
/*!*****************************************!*\
  !*** ./src/app/Pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 6132);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Api/Api.service */ 3954);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 9106);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 5829);
/* harmony import */ var _Modals_chat_modal_chat_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modals/chat-modal/chat-modal.page */ 1392);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 6050);













let HomePage = class HomePage {
    constructor(socket, toastCtrl, alertCtrl, dataCompany, apiService, storage, modalCtrl, router) {
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.dataCompany = dataCompany;
        this.apiService = apiService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.mensajes = [];
        this.nombreUsuario = '';
        this.chatUser = '';
        this.listChat = [];
        this.RoleCA = false;
        this.newChat().subscribe(() => {
            this.loadChats();
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this.preventAlert().then(() => {
            this.loadChats();
            // });
        });
    }
    loadChats() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.dataCompany.getVista('2');
            const myData = yield this.storage.getLogin();
            if (myData) {
                this.RoleCA = myData[0].ROLE === 'CA' ? true : false;
                if (myData[0].type === 'exter') {
                    this.apiService.getChats(myData[0].login).subscribe((data) => {
                        this.listChat = data.response;
                    });
                }
                else if (myData[0].type === 'inter') {
                    this.apiService.getChats(myData[0].UserID).subscribe((data) => {
                        this.listChat = data.response;
                    });
                }
            }
        });
    }
    createdChat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modals_chat_modal_chat_modal_page__WEBPACK_IMPORTED_MODULE_5__.ChatModalPage,
                componentProps: {
                    type: 'chat'
                }
            });
            yield modal.present();
            const close = yield modal.onWillDismiss();
            if (close) {
                console.log('Michat', close);
                const myData = yield this.storage.getLogin();
                if (myData) {
                    setTimeout(() => {
                        this.apiService.getChats(myData[0].UserID).subscribe((data) => {
                            this.listChat = data.response;
                            console.log(data, ' data');
                            console.log(data.response);
                        });
                    }, 1000);
                }
            }
        });
    }
    createdCustomer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modals_chat_modal_chat_modal_page__WEBPACK_IMPORTED_MODULE_5__.ChatModalPage,
                componentProps: {
                    type: 'customer'
                }
            });
            yield modal.present();
            const customer = yield modal.onWillDismiss();
            if (customer) {
                if (customer.data) {
                    if (customer.data.status === 'ok') {
                        this.toastCtrl.newCreatedToast('Cliente creado con éxito', true);
                    }
                    else if (customer.data.status === 'error') {
                        this.toastCtrl.newCreatedToast('No se pudo crear el cliente', true);
                    }
                }
            }
        });
    }
    saveChat(chat) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const save = yield this.storage.insertChat(chat);
            if (save) {
                this.router.navigate(['/messages']);
            }
        });
    }
    newChat() {
        const observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((obs) => {
            this.socket.on('newchat', (data) => {
                obs.next(data);
            });
        });
        return observer;
    }
};
HomePage.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__.Socket },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__.DataComparnyService },
    { type: _Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__.StorageWebService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 6926:
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Modals/chat-modal/chat-modal.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  margin: 3px 5px !important;\n}\n\n.slides {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n\n.slides ion-slide {\n  display: flex;\n  flex-direction: column;\n}\n\n.slides ion-slide ion-item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssMEJBQUE7QUFDTDs7QUFFQTtFQUNLLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDTDs7QUFFQTtFQUNLLGFBQUE7RUFDQSxzQkFBQTtBQUNMOztBQUVBO0VBQ0ssV0FBQTtBQUNMIiwiZmlsZSI6ImNoYXQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAgbWFyZ2luOiAzcHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbGlkZXN7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zbGlkZXMgaW9uLXNsaWRle1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNsaWRlcyBpb24tc2xpZGUgaW9uLWl0ZW17XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 358:
/*!******************************************************!*\
  !*** ./src/app/Pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".verde {\n  background: #FBD4D4 !important;\n}\n\n.message {\n  margin-top: 10px;\n  background: #e9e9e9;\n  border-radius: 20px;\n}\n\nion-item:hover {\n  cursor: pointer;\n  --background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ssOEJBQUE7QUFBTDs7QUFJQTtFQUNLLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURMOztBQUlBO0VBQ0ssZUFBQTtFQUNBLG9DQUFBO0FBREwiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi52ZXJkZSB7XG4gICAgIGJhY2tncm91bmQ6ICNGQkQ0RDQgIWltcG9ydGFudDtcbiAgICAgXG59XG5cbi5tZXNzYWdlIHtcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuaW9uLWl0ZW06aG92ZXJ7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufSJdfQ== */";

/***/ }),

/***/ 194:
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Modals/chat-modal/chat-modal.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"type === 'chat'\">\n  <ion-toolbar color=\"danger\">\n    <ion-title>Crar Nuevo Chat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"type === 'customer'\">\n  <ion-toolbar color=\"danger\">\n    <ion-title>Crar Nuevo Cliente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"type === 'chat'\">\n\n  <ion-list>\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"usersSelect.name\" placeholder=\"Nombre de la sala de chat\"></ion-input>\n    </ion-item>\n    <ion-slides class=\"slides\">\n      <ion-slide>\n        <ion-item-divider color=\"light\"><h4>Usuario de mi empresa</h4></ion-item-divider>\n        <ion-item *ngFor=\"let entry of users\">\n          <ion-checkbox slot=\"start\" value=\"{{entry.ID}}\" (ionChange)=\"selection( $event )\"></ion-checkbox>\n          <ion-label>\n            <strong>{{entry.Name}}</strong><br>\n            <p>Agregar al chat</p>\n    \n          </ion-label>\n          \n        </ion-item>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-item-divider color=\"light\"><h4>Clientes de mi Empresa</h4></ion-item-divider>\n        <ion-item *ngFor=\"let entry of customers\">\n          <ion-checkbox slot=\"start\" value=\"{{entry.ID}}\" (ionChange)=\"selection( $event )\"></ion-checkbox>\n          <ion-label>\n            <strong>{{entry.name}}</strong><br>\n            <p>Agregar al chat</p>\n    \n          </ion-label>\n          \n        </ion-item>\n      </ion-slide>\n    </ion-slides>\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\"type === 'customer'\">\n  <ion-list>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Nombre del Cliente\" [(ngModel)]=\"customer.name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Login del Cliente\" [(ngModel)]=\"customer.login\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"password\" placeholder=\"Contraseña del Cliente\" [(ngModel)]=\"customer.clave\"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer *ngIf=\"type === 'chat'\">\n  <ion-toolbar color=\"light\">\n    <ion-title>Crar nuevo chat</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"createdChat()\">\n        <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  </ion-footer>\n\n  <ion-footer *ngIf=\"type === 'customer'\">\n    <ion-toolbar color=\"light\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"createdCustomer()\" >\n          <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    </ion-footer>\n";

/***/ }),

/***/ 6132:
/*!******************************************************!*\
  !*** ./src/app/Pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title *ngIf=\"chatUser !== ''\"> Hablando con \n      {{ chatUser.FirstName }} {{ chatUser.LastName }}\n    </ion-title>\n    <ion-title *ngIf=\"chatUser == ''\"> Modulo Chat\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"loadChats()\">\n        <ion-icon name=\"refresh-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n\n\n  <ion-list>\n    <ion-item *ngFor=\"let chat of listChat\" (click)=\"saveChat(chat.parentChat._id)\">\n      <ion-icon name=\"chatbubble-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{chat.parentChat.name}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n\n  \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"light\" (click)=\"createdChat()\">\n        <ion-icon name=\"chatbubble-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button *ngIf=\"RoleCA\" color=\"secondary\" (click)=\"createdCustomer()\">\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>  \n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_home_home_module_ts.js.map