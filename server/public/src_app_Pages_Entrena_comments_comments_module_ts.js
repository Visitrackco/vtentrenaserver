"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_Entrena_comments_comments_module_ts"],{

/***/ 92409:
/*!*******************************************************************!*\
  !*** ./src/app/Pages/Entrena/comments/comments-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPageRoutingModule": () => (/* binding */ CommentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.page */ 64979);




const routes = [
    {
        path: '',
        component: _comments_page__WEBPACK_IMPORTED_MODULE_0__.CommentsPage
    }
];
let CommentsPageRoutingModule = class CommentsPageRoutingModule {
};
CommentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommentsPageRoutingModule);



/***/ }),

/***/ 88291:
/*!***********************************************************!*\
  !*** ./src/app/Pages/Entrena/comments/comments.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPageModule": () => (/* binding */ CommentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _comments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-routing.module */ 92409);
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.page */ 64979);







let CommentsPageModule = class CommentsPageModule {
};
CommentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comments_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommentsPageRoutingModule
        ],
        declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_1__.CommentsPage]
    })
], CommentsPageModule);



/***/ }),

/***/ 64979:
/*!*********************************************************!*\
  !*** ./src/app/Pages/Entrena/comments/comments.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPage": () => (/* binding */ CommentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _comments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.page.html?ngResource */ 86954);
/* harmony import */ var _comments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.page.scss?ngResource */ 87113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 59106);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);










let CommentsPage = class CommentsPage {
    constructor(modalCtrl, storage, apiEntrena, toasCtrl, active, dtacompany) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.apiEntrena = apiEntrena;
        this.toasCtrl = toasCtrl;
        this.active = active;
        this.dtacompany = dtacompany;
        this.color = '';
        this.comment = '';
        this.comments = [];
        this.role = '';
        this.userRespon = '';
        this.commentParent = '';
        this.dtacompany.$color.subscribe((color) => {
            this.color = color;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getComments();
    }
    getComments() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.role = login[0].data.role;
                if (login[0].data.ro9le === 'USER_ENTRENA') {
                    this.apiEntrena.getComments({ desing: this.active.snapshot.paramMap.get('id') }, login[0].token).subscribe((data) => {
                        console.log(data);
                        if (data.status === 'ok') {
                            let cont = data.response.length;
                            data.response.forEach((it) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                new Promise((resolve, reject) => {
                                    this.apiEntrena.getCommentChildrens({ commentParent: it._id }, login[0].token).subscribe((res) => {
                                        console.log(res, 'respuesta');
                                        if (res.status === 'ok') {
                                            it.answers = res.response;
                                        }
                                        else {
                                            it.answers = [];
                                        }
                                        resolve(true);
                                    }, (err) => {
                                        it.answers = [];
                                        resolve(true);
                                    });
                                }).then(() => {
                                    cont = cont - 1;
                                    if (cont === 0) {
                                        this.comments = data.response;
                                    }
                                });
                            }));
                        }
                        else {
                            this.toasCtrl.newCreatedToast('No se pudo obtener los comentarios', false);
                        }
                    }, (err) => {
                        this.toasCtrl.newCreatedToast('No se pudo obtener los comentarios', false);
                    });
                }
                else {
                    this.apiEntrena.getCommentsAdmin({ desing: this.active.snapshot.paramMap.get('id') }, login[0].token).subscribe((data) => {
                        console.log(data);
                        if (data.status === 'ok') {
                            let cont = data.response.length;
                            data.response.forEach((it) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                new Promise((resolve, reject) => {
                                    this.apiEntrena.getCommentChildrens({ commentParent: it._id }, login[0].token).subscribe((res) => {
                                        console.log(res, 'respuesta');
                                        if (res.status === 'ok') {
                                            it.answers = res.response;
                                        }
                                        else {
                                            it.answers = [];
                                        }
                                        resolve(true);
                                    }, (err) => {
                                        it.answers = [];
                                        resolve(true);
                                    });
                                }).then(() => {
                                    cont = cont - 1;
                                    if (cont === 0) {
                                        this.comments = data.response;
                                    }
                                });
                            }));
                        }
                        else {
                            this.toasCtrl.newCreatedToast('No se pudo obtener los comentarios', false);
                        }
                    }, (err) => {
                        this.toasCtrl.newCreatedToast('No se pudo obtener los comentarios', false);
                    });
                }
            }
        });
    }
    createComment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                // tslint:disable-next-line:max-line-length
                this.apiEntrena.comments({ comment: this.comment, desing: this.active.snapshot.paramMap.get('id') }, login[0].token).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'ok') {
                        this.comments.push(data.response);
                        this.toasCtrl.newCreatedToast('Comentario enviado', true);
                    }
                    else {
                        this.toasCtrl.newCreatedToast('No se pudo crear el comentario', false);
                    }
                }, (err) => {
                    this.toasCtrl.newCreatedToast('No se pudo crear el comentario', false);
                });
            }
        });
    }
    answerComment(comment, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.userRespon = comment.user.name;
            this.commentParent = comment._id;
        });
    }
    cancel() {
        this.userRespon = '';
        this.commentParent = '';
    }
    createCommentChildren() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                // tslint:disable-next-line:max-line-length
                this.apiEntrena.createCommentChildrens({ commentParent: this.commentParent, comment: this.comment }, login[0].token).subscribe((data) => {
                    console.log(data);
                    if (data.status === 'ok') {
                        const index = this.comments.findIndex((it) => it._id === this.commentParent);
                        this.comments[index].answers.push(data.response);
                        this.toasCtrl.newCreatedToast('Respuesta enviada', true);
                        this.cancel();
                    }
                    else {
                        this.toasCtrl.newCreatedToast('No se pudo crear el comentario', false);
                    }
                }, (err) => {
                    this.toasCtrl.newCreatedToast('No se pudo crear el comentario', false);
                });
            }
        });
    }
};
CommentsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_4__.StorageWebService },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__.DataComparnyService }
];
CommentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-comments',
        template: _comments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommentsPage);



/***/ }),

/***/ 87113:
/*!**********************************************************************!*\
  !*** ./src/app/Pages/Entrena/comments/comments.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".campo {\n  min-width: calc(100% - 200px);\n  width: 80%;\n  padding: 10px;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.flex ion-button {\n  min-width: 200px;\n}\n\n.comment {\n  width: 100%;\n  padding: 10px;\n  margin-top: 20px;\n}\n\n.comment .info {\n  width: 100%;\n  padding: 10px;\n  background-color: #f1f1ff;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.comment .answer {\n  width: 80%;\n  margin-left: 20%;\n  padding: 10px;\n  margin-top: 5px;\n  background-color: #f1f1f1;\n}\n\n.comment p {\n  line-height: 1.8;\n}\n\n.date {\n  opacity: 0.3;\n  margin-top: 5px;\n}\n\n.respon {\n  color: blue;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDTDs7QUFHQTtFQUNLLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUw7O0FBR0E7RUFDSyxnQkFBQTtBQUFMOztBQUdBO0VBQ0ssV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUFMOztBQUlBO0VBQ0ssV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFETDs7QUFJQTtFQUNLLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFETDs7QUFJQTtFQUNLLGdCQUFBO0FBREw7O0FBSUE7RUFDSyxZQUFBO0VBQ0EsZUFBQTtBQURMOztBQUlBO0VBQ0ssV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFETCIsImZpbGUiOiJjb21tZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtcG8ge1xyXG4gICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG4gICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgcGFkZGluZzogMTBweDtcclxuICAgICBcclxufVxyXG5cclxuLmZsZXgge1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4IGlvbi1idXR0b24ge1xyXG4gICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uY29tbWVudCAuaW5mbyB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgcGFkZGluZzogMTBweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWZmO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuLmNvbW1lbnQgLmFuc3dlciB7XHJcbiAgICAgd2lkdGg6IDgwJTtcclxuICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jb21tZW50IHAge1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgICBvcGFjaXR5OiAuMztcclxuICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5yZXNwb24ge1xyXG4gICAgIGNvbG9yOiBibHVlO1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 86954:
/*!**********************************************************************!*\
  !*** ./src/app/Pages/Entrena/comments/comments.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar [color]=\"color\">\n    <ion-title>Comentarios</ion-title>\n    \n    <ion-button slot=\"end\" *ngIf=\"commentParent !== ''\"  mode=\"ios\" color=\"medium\" (click)=\"cancel()\">CANCELAR RESPUESTA</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div class=\"comment\" *ngFor=\"let commen of comments; let i = index;\">\n\n    <div class=\"info\">\n      <strong>{{ commen.user.name }}</strong> <br>\n    <p>{{ commen.message}}</p> <br>\n    <div class=\"respon\" (click)=\"answerComment( commen, i )\">Responder</div>\n\n    <div class=\"date\">{{ commen.dateCreated }}</div>\n    </div>\n\n\n    <div class=\"answer\" *ngFor=\"let answer of commen.answers; let o = index;\">\n\n      <strong>{{ answer.name }}</strong> <br>\n      <p>{{ answer.message}}</p> <br>\n      <div class=\"respon\" (click)=\"answerComment( commen, i )\">Responder</div>\n  \n      <div class=\"date\">{{ answer.dateCreated }}</div>\n   \n    </div>\n \n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar [color]=\"color\">\n  <div class=\"flex\" *ngIf=\"role === 'USER_ENTRENA'\">\n    <ion-textarea *ngIf=\"commentParent === ''\" [(ngModel)]=\"comment\" class=\"campo\" placeholder=\"Escribe un comentario\"></ion-textarea>\n    <ion-button *ngIf=\"commentParent === ''\" mode=\"ios\" color=\"light\" (click)=\"createComment()\">ENVIAR</ion-button>\n\n\n    <ion-textarea *ngIf=\"commentParent !== ''\" [(ngModel)]=\"comment\" class=\"campo\" placeholder=\"Escribe una respuesta en el comentario de {{ userRespon }}\"></ion-textarea>\n\n      <ion-button *ngIf=\"commentParent !== ''\" [disabled]=\"userRespon === ''\" mode=\"ios\" color=\"light\" (click)=\"createCommentChildren()\">RESPONDER</ion-button>\n    \n  </div>\n\n  <div class=\"flex\" *ngIf=\"role === 'ADMIN_ENTRENA'\">\n    <ion-textarea [(ngModel)]=\"comment\" class=\"campo\" placeholder=\"Escribe una respuesta en el comentario de {{ userRespon }}\"></ion-textarea>\n    <ion-button [disabled]=\"userRespon === ''\" mode=\"ios\" color=\"light\" (click)=\"createCommentChildren()\">RESPONDER</ion-button>\n  </div>\n  </ion-toolbar>\n</ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Entrena_comments_comments_module_ts.js.map