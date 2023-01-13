"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_messages_messages_module_ts"],{

/***/ 40736:
/*!***********************************************************!*\
  !*** ./src/app/Pages/messages/messages-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageRoutingModule": () => (/* binding */ MessagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 17944);




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ 14771:
/*!***************************************************!*\
  !*** ./src/app/Pages/messages/messages.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageModule": () => (/* binding */ MessagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-routing.module */ 40736);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page */ 17944);







let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessagesPageRoutingModule
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_1__.MessagesPage]
    })
], MessagesPageModule);



/***/ }),

/***/ 17944:
/*!*************************************************!*\
  !*** ./src/app/Pages/messages/messages.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPage": () => (/* binding */ MessagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page.html?ngResource */ 6712);
/* harmony import */ var _messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss?ngResource */ 10265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 12378);








let MessagesPage = class MessagesPage {
    constructor(socket, storage, apiService) {
        this.socket = socket;
        this.storage = storage;
        this.apiService = apiService;
        this.idUser = '';
        this.listMessages = [];
        this.message = '';
        this.idChat = '';
        this.recepMessage().subscribe((data) => {
            console.log(data, ' Mi data');
            const audio = new Audio('/assets/message.mp3');
            audio.play();
            this.listMessages.push(data.response);
        });
    }
    ngOnInit() {
    }
    // mary isabell administrativo
    // jimmy caicedo sector hospitalario 
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loadMessages();
            const login = yield this.storage.getLogin();
            if (login) {
                if (login[0].type === 'exter') {
                    this.idUser = login[0].login;
                }
                else {
                    this.idUser = login[0].UserID;
                }
            }
        });
    }
    loadMessages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const chat = yield this.storage.getChat();
            if (chat) {
                this.idChat = chat;
                this.socket.emit('entryChat', { idChat: chat });
                this.apiService.getOneChat(chat).subscribe((data) => {
                    if (data.status === 'ok') {
                        this.listMessages = data.response;
                    }
                });
            }
        });
    }
    sendMessages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.socket.emit('sendMessage', {
                ID: this.idUser,
                parentChat: this.idChat,
                message: this.message
            });
            this.listMessages.push({
                dateMessage: new Date().getDate(),
                message: this.message,
                idUser: this.idUser
            });
            this.message = '';
        });
    }
    recepMessage() {
        const observer = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(obser => {
            this.socket.on('recepMessage', (data) => {
                obser.next(data);
            });
        });
        return observer;
    }
};
MessagesPage.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__.Socket },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_2__.StorageWebService },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
MessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-messages',
        template: _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessagesPage);



/***/ }),

/***/ 10265:
/*!**************************************************************!*\
  !*** ./src/app/Pages/messages/messages.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".verde {\n  background: #FBD4D4 !important;\n}\n\n.message {\n  margin-top: 10px;\n  background: #e9e9e9;\n  border-radius: 20px;\n}\n\nion-footer {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNLLDhCQUFBO0FBQUw7O0FBSUE7RUFDSyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFETDs7QUFJQTtFQUNLLGFBQUE7RUFDQSw4QkFBQTtBQURMIiwiZmlsZSI6Im1lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udmVyZGUge1xyXG4gICAgIGJhY2tncm91bmQ6ICNGQkQ0RDQgIWltcG9ydGFudDtcclxuICAgICBcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59Il19 */";

/***/ }),

/***/ 6712:
/*!**************************************************************!*\
  !*** ./src/app/Pages/messages/messages.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Mensajeria</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"ellipsis-vertical-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid >\n    <ion-row *ngFor=\"let message of listMessages\">\n        <ion-col  *ngIf=\"(message.idUser == idUser)\" offset=\"3\" size=\"9\"  class=\"message verde\" >\n          <span>{{ message.message }}</span><br>\n          <span>{{ message.dateMessage }}</span>\n          <span>Host</span>\n        </ion-col>\n \n      <ion-col *ngIf=\"(message.idUser != idUser)\" size=\"9\" class=\"message\" >\n        <span>{{ message.message }}</span><br>\n        <span>{{ message.dateMessage }}</span>\n      </ion-col>\n \n    </ion-row>\n\n    \n\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-textarea [(ngModel)]=\"message\" placeholder=\"Escribe tu mensaje\"></ion-textarea>\n  <ion-button shape=\"round\" mode=\"ios\" fill=\"clear\" (click)=\"sendMessages()\">\n    <ion-icon name=\"send-outline\" slot=\"icon-only\"></ion-icon>\n  </ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_messages_messages_module_ts.js.map