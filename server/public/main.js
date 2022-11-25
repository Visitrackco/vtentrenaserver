(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3484:
/*!***************************************************************!*\
  !*** ./src/app/Pipes/Filters/agilissa/filtroAgilissa.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroAgilissaPipe": () => (/* binding */ FiltroAgilissaPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FiltroAgilissaPipe = class FiltroAgilissaPipe {
    transform(value, filtroby, byproperty) {
        filtroby = filtroby.toLowerCase();
        if (byproperty) {
            return filtroby == '' ? [] : value.filter((item) => {
                let val = item[byproperty].toLowerCase();
                if (val.includes(filtroby)) {
                    return item;
                }
            });
        }
        else {
            return filtroby == '' ? [] : value.filter((item) => {
                let val = item.toLowerCase();
                if (val.includes(filtroby)) {
                    return item;
                }
            });
        }
    }
};
FiltroAgilissaPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'agilissacliente'
    })
], FiltroAgilissaPipe);



/***/ }),

/***/ 74932:
/*!*********************************************************!*\
  !*** ./src/app/Pipes/Filters/filter-repository.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterRepositoryPipe": () => (/* binding */ FilterRepositoryPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FilterRepositoryPipe = class FilterRepositoryPipe {
    transform(value, texto) {
        texto = texto.toLowerCase();
        const arrayReturn = value.filter((item) => {
            const tempName = item.infoAction.name;
            item.infoAction.name = item.infoAction.name.toLowerCase();
            if (item.infoAction.name.includes(texto)) {
                item.infoAction.name = tempName;
                return item;
            }
        });
        console.log(arrayReturn, 'Retorno');
        return arrayReturn;
    }
};
FilterRepositoryPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterRepository'
    })
], FilterRepositoryPipe);



/***/ }),

/***/ 91724:
/*!******************************************************!*\
  !*** ./src/app/Pipes/Filters/filterUserRepo.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterUserRepositoryPipe": () => (/* binding */ FilterUserRepositoryPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FilterUserRepositoryPipe = class FilterUserRepositoryPipe {
    transform(arrayUsers, textFilter, arrayPermiss) {
        console.log(arrayPermiss, arrayUsers, textFilter);
        textFilter = textFilter.toLocaleLowerCase();
        arrayUsers.forEach((item) => {
            if (arrayPermiss.find((id) => id === item.ID)) {
                item.checked = true;
            }
        });
        if (textFilter === '') {
            return arrayUsers;
        }
        else {
            arrayUsers = arrayUsers.filter((item) => {
                const text = item.name ? item.name.toLowerCase() : item.Name.toLowerCase();
                if (text.includes(textFilter)) {
                    return item;
                }
            });
        }
        return arrayUsers;
    }
};
FilterUserRepositoryPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterUserRepository'
    })
], FilterUserRepositoryPipe);



/***/ }),

/***/ 84542:
/*!****************************************************!*\
  !*** ./src/app/Pipes/Filters/filtroBuscar.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroBuscarPipe": () => (/* binding */ FiltroBuscarPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FiltroBuscarPipe = class FiltroBuscarPipe {
    transform(value, txt) {
        console.log(value, 'valor');
        if (txt == '') {
            return value;
        }
        value = value.filter((item) => {
            let fecha = item.Values.filter((act) => act.apiId == 'FECHA').length > 0 ? item.Values.filter((act) => act.apiId == 'FECHA')[0].Value : '';
            let obs = item.Values.filter((act) => act.apiId == 'OBSERVACIONES').length > 0 ? item.Values.filter((act) => act.apiId == 'OBSERVACIONES')[0].Value : '';
            let nov = item.Values.filter((act) => act.apiId == 'NOVEDAD').length > 0 ? item.Values.filter((act) => act.apiId == 'NOVEDAD')[0].Value : '';
            let ubi = item.Values.filter((act) => act.apiId == 'UBICACION').length > 0 ? item.Values.filter((act) => act.apiId == 'UBICACION')[0].Value : '';
            let loc = item.LocationName;
            if (fecha.includes(txt) || obs.includes(txt) || nov.includes(txt) || ubi.includes(txt) || loc.includes(txt)) {
                return item;
            }
        });
        return value;
    }
};
FiltroBuscarPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtroact'
    })
], FiltroBuscarPipe);



/***/ }),

/***/ 17597:
/*!*************************************************!*\
  !*** ./src/app/Pipes/Filters/filtroCDO.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroCDOPipe": () => (/* binding */ FiltroCDOPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FiltroCDOPipe = class FiltroCDOPipe {
    transform(value, filtroby) {
        console.log(value, 'valor');
        return filtroby == 'Todos' ? value : value.filter((item) => item.CompanyStatusName == filtroby);
    }
};
FiltroCDOPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtrocdo'
    })
], FiltroCDOPipe);



/***/ }),

/***/ 62054:
/*!********************************************************!*\
  !*** ./src/app/Pipes/Filters/filtroGeneralCDO.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroGeneralCDOpIpe": () => (/* binding */ FiltroGeneralCDOpIpe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FiltroGeneralCDOpIpe = class FiltroGeneralCDOpIpe {
    transform(value, filtroby) {
        console.log(value, 'valor');
        filtroby = filtroby.toLowerCase();
        return filtroby == '' ? value : value.filter((item) => {
            let loc = item.LocationName.toLowerCase();
            let asset = item.AssetName.toLowerCase();
            let person = item.AssignedToName.toLowerCase();
            return loc.includes(filtroby) || asset.includes(filtroby) || person.includes(filtroby);
        });
    }
};
FiltroGeneralCDOpIpe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtrogeneralcdo'
    })
], FiltroGeneralCDOpIpe);



/***/ }),

/***/ 58454:
/*!*********************************************************!*\
  !*** ./src/app/Pipes/Filters/filtroSolicPadres.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroPadrePipe": () => (/* binding */ FiltroPadrePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FiltroPadrePipe = class FiltroPadrePipe {
    transform(value, filtroby) {
        filtroby = filtroby.toLowerCase();
        return filtroby == '' ? value : value.filter((item) => {
            let loc = item.hab.toLowerCase();
            let asset = item.cam.toLowerCase();
            return loc.includes(filtroby) || asset.includes(filtroby);
        });
    }
};
FiltroPadrePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtrosolicpadres'
    })
], FiltroPadrePipe);



/***/ }),

/***/ 14265:
/*!******************************************************!*\
  !*** ./src/app/Pipes/Filters/filtrodiamante.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroDiamanteMttoPipe": () => (/* binding */ FiltroDiamanteMttoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FiltroDiamanteMttoPipe = class FiltroDiamanteMttoPipe {
    transform(value, filtroby) {
        filtroby = filtroby.toLowerCase();
        return filtroby == '' ? [] : value.filter((item) => {
            let val = item.Name.toLowerCase();
            if (val.includes(filtroby)) {
                return item;
            }
        });
    }
};
FiltroDiamanteMttoPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'diamantemtto'
    })
], FiltroDiamanteMttoPipe);



/***/ }),

/***/ 34246:
/*!*********************************************!*\
  !*** ./src/app/Pipes/Filters/users.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPipe": () => (/* binding */ UsersPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let UsersPipe = class UsersPipe {
    transform(value, type) {
        return value.filter((item) => item.type === type);
    }
};
UsersPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'userss'
    })
], UsersPipe);



/***/ }),

/***/ 52310:
/*!***********************************************!*\
  !*** ./src/app/Pipes/Filters/valores.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValuesPipe": () => (/* binding */ ValuesPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let ValuesPipe = class ValuesPipe {
    transform(value, api) {
        console.log(value, 'valor');
        return value.filter((item) => item.apiId == api).length > 0 ? value.filter((item) => item.apiId == api)[0].Value : '---';
    }
};
ValuesPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'values'
    })
], ValuesPipe);



/***/ }),

/***/ 23037:
/*!***********************************************!*\
  !*** ./src/app/Pipes/VTEntrena/users.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchVTEntrena": () => (/* binding */ SearchVTEntrena)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let SearchVTEntrena = class SearchVTEntrena {
    transform(values, param, property) {
        param = param.toLowerCase();
        if (param === '') {
            return values;
        }
        else {
            return values.filter((item) => {
                const val = item[property].toLowerCase();
                if (val.includes(param)) {
                    return item;
                }
            });
        }
    }
};
SearchVTEntrena = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'search'
    })
], SearchVTEntrena);



/***/ }),

/***/ 7844:
/*!***************************************!*\
  !*** ./src/app/Pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _Filters_filter_repository_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filters/filter-repository.pipe */ 74932);
/* harmony import */ var _Filters_users_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters/users.pipe */ 34246);
/* harmony import */ var _Filters_filterUserRepo_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filters/filterUserRepo.pipe */ 91724);
/* harmony import */ var _VTEntrena_users_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VTEntrena/users.pipe */ 23037);
/* harmony import */ var _Filters_valores_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Filters/valores.pipe */ 52310);
/* harmony import */ var _Filters_filtroBuscar_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Filters/filtroBuscar.pipe */ 84542);
/* harmony import */ var _Filters_filtroCDO_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Filters/filtroCDO.pipe */ 17597);
/* harmony import */ var _Filters_filtroGeneralCDO_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Filters/filtroGeneralCDO.pipe */ 62054);
/* harmony import */ var _Filters_filtroSolicPadres_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Filters/filtroSolicPadres.pipe */ 58454);
/* harmony import */ var _Filters_filtrodiamante_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Filters/filtrodiamante.pipe */ 14265);
/* harmony import */ var _Filters_agilissa_filtroAgilissa_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Filters/agilissa/filtroAgilissa.pipe */ 3484);













let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [
            _Filters_filter_repository_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterRepositoryPipe,
            _Filters_users_pipe__WEBPACK_IMPORTED_MODULE_1__.UsersPipe,
            _Filters_filterUserRepo_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterUserRepositoryPipe,
            _VTEntrena_users_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchVTEntrena,
            _Filters_valores_pipe__WEBPACK_IMPORTED_MODULE_4__.ValuesPipe,
            _Filters_filtroBuscar_pipe__WEBPACK_IMPORTED_MODULE_5__.FiltroBuscarPipe,
            _Filters_filtroCDO_pipe__WEBPACK_IMPORTED_MODULE_6__.FiltroCDOPipe,
            _Filters_filtroGeneralCDO_pipe__WEBPACK_IMPORTED_MODULE_7__.FiltroGeneralCDOpIpe,
            _Filters_filtroSolicPadres_pipe__WEBPACK_IMPORTED_MODULE_8__.FiltroPadrePipe,
            _Filters_filtrodiamante_pipe__WEBPACK_IMPORTED_MODULE_9__.FiltroDiamanteMttoPipe,
            _Filters_agilissa_filtroAgilissa_pipe__WEBPACK_IMPORTED_MODULE_10__.FiltroAgilissaPipe
        ],
        imports: [],
        exports: [
            _Filters_filter_repository_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterRepositoryPipe,
            _Filters_users_pipe__WEBPACK_IMPORTED_MODULE_1__.UsersPipe,
            _Filters_filterUserRepo_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterUserRepositoryPipe,
            _VTEntrena_users_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchVTEntrena,
            _Filters_valores_pipe__WEBPACK_IMPORTED_MODULE_4__.ValuesPipe,
            _Filters_filtroBuscar_pipe__WEBPACK_IMPORTED_MODULE_5__.FiltroBuscarPipe,
            _Filters_filtroCDO_pipe__WEBPACK_IMPORTED_MODULE_6__.FiltroCDOPipe,
            _Filters_filtroGeneralCDO_pipe__WEBPACK_IMPORTED_MODULE_7__.FiltroGeneralCDOpIpe,
            _Filters_filtroSolicPadres_pipe__WEBPACK_IMPORTED_MODULE_8__.FiltroPadrePipe,
            _Filters_filtrodiamante_pipe__WEBPACK_IMPORTED_MODULE_9__.FiltroDiamanteMttoPipe,
            _Filters_agilissa_filtroAgilissa_pipe__WEBPACK_IMPORTED_MODULE_10__.FiltroAgilissaPipe
        ]
    })
], PipesModule);



/***/ }),

/***/ 93954:
/*!*********************************************!*\
  !*** ./src/app/Services/Api/Api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8838);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 87580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);







let ApiService = class ApiService {
    constructor(Http) {
        this.Http = Http;
    }
    HandlerError(error) {
        let intentos = 0;
        return error.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delayWhen)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(5000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((errorResponse) => {
            if (intentos === 3) {
                if (errorResponse instanceof ErrorEvent) {
                    console.log('ErrorEvent');
                    throw new Error(' Conexion no establecida');
                }
                else if (errorResponse instanceof ProgressEvent) {
                    console.log('ProgessEvent');
                    throw new Error(' Conexion no establecida');
                }
                else {
                    if (errorResponse.status === 404) {
                        console.log('URL inv[erronea');
                    }
                    console.log('HttpError', errorResponse.error);
                    throw new Error(' server ' + errorResponse.status);
                }
            }
            intentos++;
        }));
    }
    postLogin(login) {
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_CLUUD}Users/Authentication?login=${login.user}&password=${login.password}&lan=es`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getMyActivities(tkn) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/DispatchesByCompanyStatus`, {
            AccessToken: tkn,
            CompanyStatusName: 'CREADO',
            FormGUID: 'CE30E8A1-9D77-4CD6-97A2-8EC72826E920',
            Search: '',
            ByUser: false
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getActivitieInfo(tkn, guid) {
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/Activity?AccessToken=` + tkn + '&GUID=' + guid + '&ListValues=false').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getUsers(tkn) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Users/All`, {
            AccessToken: tkn
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    cambio(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/SetDatetime`, {
            AccessToken: data.tkn,
            UserGUID: data.guid,
            CompanyStatusGUID: data.status,
            ActivityGUID: data.guid,
            DispachDateTime: moment_timezone__WEBPACK_IMPORTED_MODULE_1__().add(2, 'minutes').format('YYYY-MM-DD HH:mm')
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    aceptActivity(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/BasicDispatch`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getAssets(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Assets/AssetsByTypeID`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    updateSurvey(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/UpdateFields`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getAsset(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Assets/AssetsByLocationID`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getLists(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Lists/ByTypeGUID`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getLocs(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Locations/ByTypeID`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    createAsset(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Assets/PUT`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    childs(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/ActivityChilds`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    users(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Users/All`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(30000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getActivities(tkn) {
        const date = moment_timezone__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD");
        console.log(date);
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/Dispatches`, {
            AccessToken: tkn,
            DispatchDate: date,
            FormGUID: 'FCA171F7-227E-41FA-9129-CC5D3D7F20B3',
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getActivities2(tkn, from, to, form) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/Activities`, {
            AccessToken: tkn,
            From: from,
            To: to,
            FormGUID: form,
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    changeStatus(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/SetDatetime`, {
            AccessToken: data.tkn,
            UserGUID: data.user,
            CompanyStatusGUID: data.status,
            ActivityGUID: data.guid,
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    changeDispath(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Surveys/SetDatetime`, {
            AccessToken: data.tkn,
            DispachDateTime: data.date,
            UserGUID: data.user,
            CompanyStatusGUID: data.status,
            ActivityGUID: data.guid,
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    postLoginExte(login) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/customers/login`, login).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getForm(userVT, params) {
        console.log(userVT, 'servicio');
        // tslint:disable-next-line:max-line-length
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_CLUUD}Mobile/GetModuleInfo?tkn=${userVT.AccessToken}&key=FORMS&id=-1&f1=&f2=&f3=&lan=es`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getHelp(userVT) {
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_API}Help?tkn=${userVT.AccessToken}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getUsersCompany(userVT) {
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_CLUUD}Users/GetModuleInfo?tkn=${userVT.AccessToken}&key=USERSCUSTOMS`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    createdCategory(dataCategory) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/categories`, dataCategory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    alterCategory(dataCategory) {
        return this.Http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/categories/one/`, dataCategory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getCategory(company, userID) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-company': company,
                'x-userID': userID
            })
        };
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/categories`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    deletedCategory(id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-id': id
            })
        };
        return this.Http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/categories/one`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    createdFolder(dataCategory) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/folders/folder`, dataCategory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getFolders(parentId, type) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-parentId': parentId,
                'x-type': parentId
            })
        };
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/folders`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getPathFolder(parentId) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-parentID': parentId
            })
        };
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/folders/path/`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    download(path) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/download`, path).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    deletedFolder(id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-id': id
            })
        };
        return this.Http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/folders/one`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    recoverFolder(id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-id': id
            })
        };
        return this.Http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/folders/recover`, {}, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    // CONNECTIONS LOGIN
    getConnections(company) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-company': company
            })
        };
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/connections`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getChats(idUser) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-ID': idUser
            })
        };
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/chat/mychats`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getOneChat(id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-ID': id
            })
        };
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/chat/mychats/onechat`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    setChat(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/chat/mychats/onechat`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    // CUSTOMERS 
    createdCustomer(data) {
        return this.Http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/customers/`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    getCustomersCompany(comapny) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'x-companyID': comapny
            })
        };
        return this.Http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/customers/company`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
    alterPermiss(data) {
        return this.Http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/categories/one/permiss/`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(error => this.HandlerError(error)));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 46061:
/*!****************************************************!*\
  !*** ./src/app/Services/Api/ApiEntrena.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiEntrenaService": () => (/* binding */ ApiEntrenaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8838);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);







let ApiEntrenaService = class ApiEntrenaService {
    constructor(http) {
        this.http = http;
    }
    HandlerError(error) {
        let intentos = 0;
        return error.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delayWhen)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(5000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((errorResponse) => {
            if (intentos === 3) {
                if (errorResponse instanceof ErrorEvent) {
                    console.log('ErrorEvent');
                    throw new Error(' Not Connection');
                }
                else if (errorResponse instanceof ProgressEvent) {
                    console.log('ProgessEvent');
                    throw new Error(' Not Connection');
                }
                else {
                    if (errorResponse.status === 404) {
                        console.log('URL Invalid');
                    }
                    console.log('HttpError', errorResponse.error);
                    throw new Error(' Internal Error ' + errorResponse.status);
                }
            }
            intentos++;
        }));
    }
    loginUser(data, IP, navigator) {
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/user/login/`, { data, IP, navigator }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    existUser(data) {
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/user/exist/`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    createdUserBasic(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/user/basic/`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    getUsersBasic(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/users/basic/`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    modifyUserBasic(data, token, id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/user/basic/`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    deleteUserBasic(token, id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/user/basic/`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    // DESIGNER SERVICES HTTP
    createDesigner(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/new/`, {}, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    updateDesigner(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/update/`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    deleteDesigner(token, id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/delete`, { _id: id }, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    addUsersDesing(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/add`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    readDesigner(token, id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    readDesignersAll(token, id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
                'x-parentAdmin': id
            })
        };
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/all`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    upload(formData, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
            }),
            reportProgress: true,
            observe: 'events'
        };
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/upload/`, formData, options);
    }
    createdAnswer(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/answer/`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    createdAnswerOther(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/answer/other`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    updateAnswer(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/answer/update/`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    readAnswerJson(token, id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/answer/`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    readAnswerJsonAll(token, id, iduser) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
                'x-id': id,
                'x-iduser': iduser
            })
        };
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/answer/all`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    readIP() {
        return this.http.get(`http://api.ipify.org/?format=json`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    updateAnswerSave(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/answer/save/`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    LogoutUser(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/user/logout/`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    statusUser(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/user/status/`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    readLogs(token, id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/user/logs/`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    exportLogs(token, id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/user/logs/export/`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    exportPDF(token, id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/designer/answer/pdf/`, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    uploadPreference(formData, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token,
            }),
            reportProgress: true,
            observe: 'events'
        };
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/preferences/upload`, formData, options);
    }
    preferences(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/preferences/theme`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    preferencesLoad(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/preferences`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    comments(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/comments`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    getComments(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/comments`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    getCommentsAdmin(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/comments/admin`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    createCommentChildrens(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/comments/childrens`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
    getCommentChildrens(data, token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environments.URL_NODE}/vtentrena/comments/childrens`, data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retryWhen)(error => this.HandlerError(error)));
    }
};
ApiEntrenaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
ApiEntrenaService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ApiEntrenaService);



/***/ }),

/***/ 95829:
/*!********************************************************!*\
  !*** ./src/app/Services/Storage/StorageWeb.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageWebService": () => (/* binding */ StorageWebService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 80190);



let StorageWebService = class StorageWebService {
    constructor(storage) {
        this.storage = storage;
    }
    insertUser(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.storage.get('login').then((dataLogin) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                dataLogin.push(data);
                yield this.storage.set('login', dataLogin);
                console.log('Insertado!');
            })).catch((err) => {
                console.log('Error ', err);
            });
        });
    }
    getToken() {
        return this.storage.get('login').then((dataLogin) => {
            return dataLogin[0].AccessToken;
        });
    }
    getComapny() {
        return this.storage.get('login').then((dataLogin) => {
            return dataLogin[0].CompanyID;
        });
    }
    getFormActive() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.get('formActive');
        });
    }
    getForms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.get('forms');
        });
    }
    getLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.get('login');
        });
    }
    closeSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.set('login', []);
        });
    }
    insertForms(data) {
        this.storage.get('forms').then((dataForm) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (dataForm.length > 0) {
                dataForm = [];
            }
            dataForm.push(data);
            yield this.storage.set('forms', dataForm);
            console.log('Insertado!');
        })).catch((err) => {
            console.log('Error ', err);
        });
    }
    insertFormActive(data) {
        return this.storage.get('formActive').then((dataForm) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (dataForm.length > 0) {
                dataForm = [];
            }
            dataForm.push(data);
            console.log('Insertado el formulario activo!');
            return yield this.storage.set('formActive', dataForm);
        })).catch((err) => {
            console.log('Error ', err);
            return err;
        });
    }
    insertChat(data) {
        return this.storage.get('chats').then((dataChat) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            dataChat = [];
            dataChat.push(data);
            console.log('Insertado en el chat!');
            return yield this.storage.set('chats', dataChat);
        })).catch((err) => {
            console.log('Error ', err);
            return err;
        });
    }
    getChat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.get('chats');
        });
    }
};
StorageWebService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
StorageWebService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageWebService);



/***/ }),

/***/ 62082:
/*!*******************************************************!*\
  !*** ./src/app/Services/Utilities/Loading.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let LoadingService = class LoadingService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    createLoading(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message,
                mode: 'ios'
            });
            yield loading.present();
        });
    }
    cancelLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingCtrl.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 46050:
/*!*****************************************************!*\
  !*** ./src/app/Services/Utilities/Toast.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let ToastService = class ToastService {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    newCreatedToast(message, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                cssClass: status ? 'ok' : 'not',
                header: 'Vt Message',
                duration: 5000
            });
            return yield toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ 59106:
/*!*************************************************!*\
  !*** ./src/app/Services/dataCompany.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataComparnyService": () => (/* binding */ DataComparnyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var _Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage/StorageWeb.service */ 95829);
/* harmony import */ var _Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities/Toast.service */ 46050);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
// ESTE SERVICIO SE USA PARA TRAER EL LOGO Y NOMBRE UNA VEZ INICIA SESSION Y RENDERIZARLO EN EL MENU







let DataComparnyService = class DataComparnyService {
    constructor(socket, storage, myToast, router, toasCtrl) {
        this.socket = socket;
        this.storage = storage;
        this.myToast = myToast;
        this.router = router;
        this.toasCtrl = toasCtrl;
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.dataCompany = this.data.asObservable();
        this.color = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('light');
        this.$color = this.color.asObservable();
        this.view = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('1');
        this.$view = this.view.asObservable();
        this.users = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.$users = this.users.asObservable();
        this.notification = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
        this.$notification = this.users.asObservable();
        this.socket.connect();
        this.socket.on('users', (data) => {
            console.log(data, 'chat');
            this.users.next(data);
        });
        this.socket.on('notification', (data) => {
            console.log(data, 'notification');
            this.notification.next(data);
            const audio = new Audio('/assets/notification.mp3');
            audio.play();
            this.myToast.newCreatedToast(data.message, true);
        });
        this.listenStatusUser().subscribe((change) => {
            if (change) {
                this.toasCtrl.newCreatedToast('You do not have permissions to navigate the application', false);
                this.storage.closeSession().then(() => {
                    this.router.navigate(['/login']);
                });
            }
        });
    }
    getDataCompany(data) {
        this.data.next(data);
    }
    setColor(data) {
        this.color.next(data);
    }
    getVista(view) {
        this.view.next(view);
    }
    // setUser(user) {
    //      this.users.next(user);
    // }
    // getUsersChat() {
    //      this.storage.getComapny().then((company) => {
    //           const info: any = {
    //                company
    //           };
    //           this.socket.emit('users', info);
    //           this.socket.on('usersall', (data) => {
    //                this.gets.next(data)
    //           });
    //      });
    // }
    // getViewChat(user) {
    //      this.chat.next(user);
    // }
    listenStatusUser() {
        const obs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((observer) => {
            this.socket.on('closedSession', (data) => {
                console.log(data, 'Data ');
                observer.next(true);
            });
        });
        return obs;
    }
};
DataComparnyService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__.Socket },
    { type: _Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_0__.StorageWebService },
    { type: _Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService }
];
DataComparnyService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], DataComparnyService);



/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/login.guard */ 82721);
/* harmony import */ var _guards_forms_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/forms.guard */ 80682);
/* harmony import */ var _guards_entrena_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/entrena.guard */ 85371);






const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/home/home.module */ 87643)).then(m => m.HomePageModule), canActivate: [_guards_forms_guard__WEBPACK_IMPORTED_MODULE_1__.FormsGuard] },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/login/login.module */ 45342)).then(m => m.LoginPageModule),
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard]
    },
    {
        path: 'forms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_central_central_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/central/central.module */ 65923)).then(m => m.CentralPageModule),
        canActivate: [_guards_forms_guard__WEBPACK_IMPORTED_MODULE_1__.FormsGuard]
    },
    {
        path: 'form',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/form/form.module */ 33634)).then(m => m.FormPageModule),
        canActivate: [_guards_forms_guard__WEBPACK_IMPORTED_MODULE_1__.FormsGuard]
    },
    {
        path: 'repository',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Pages_Modals_category_category_module_ts"), __webpack_require__.e("src_app_Pages_repository_repository_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/repository/repository.module */ 36890)).then(m => m.RepositoryPageModule),
        canActivate: [_guards_forms_guard__WEBPACK_IMPORTED_MODULE_1__.FormsGuard]
    },
    {
        path: 'repository/folders/:parent',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Pages_Modals_category_category_module_ts"), __webpack_require__.e("src_app_Pages_folders_folders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/folders/folders.module */ 40472)).then(m => m.FoldersPageModule),
        canActivate: [_guards_forms_guard__WEBPACK_IMPORTED_MODULE_1__.FormsGuard]
    },
    {
        path: 'render',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_render_render_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/render/render.module */ 90673)).then(m => m.RenderPageModule)
    },
    {
        path: 'messages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/messages/messages.module */ 14771)).then(m => m.MessagesPageModule),
        canActivate: [_guards_forms_guard__WEBPACK_IMPORTED_MODULE_1__.FormsGuard]
    },
    {
        path: 'init',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_Entrena_init_init_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Entrena/init/init.module */ 45620)).then(m => m.InitPageModule),
        canActivate: [_guards_entrena_guard__WEBPACK_IMPORTED_MODULE_2__.EntrenaGuard]
    },
    {
        path: 'admin-users',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_Entrena_admin-users_admin-users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Entrena/admin-users/admin-users.module */ 40737)).then(m => m.AdminUsersPageModule),
        canActivate: [_guards_entrena_guard__WEBPACK_IMPORTED_MODULE_2__.EntrenaGuard]
    },
    {
        path: 'designer-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_Entrena_Designer_designer-list_designer-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Entrena/Designer/designer-list/designer-list.module */ 67653)).then(m => m.DesignerListPageModule),
        canActivate: [_guards_entrena_guard__WEBPACK_IMPORTED_MODULE_2__.EntrenaGuard]
    },
    {
        path: 'designer/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_Entrena_Designer_designer_designer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Entrena/Designer/designer/designer.module */ 4094)).then(m => m.DesignerPageModule),
        canActivate: [_guards_entrena_guard__WEBPACK_IMPORTED_MODULE_2__.EntrenaGuard]
    },
    {
        path: 'list-my-designs',
        canActivate: [_guards_entrena_guard__WEBPACK_IMPORTED_MODULE_2__.EntrenaGuard],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_Entrena_Designer_list-my-designs_list-my-designs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Entrena/Designer/list-my-designs/list-my-designs.module */ 994)).then(m => m.ListMyDesignsPageModule),
            },
            {
                path: 'comments/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_Entrena_comments_comments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Entrena/comments/comments.module */ 88291)).then(m => m.CommentsPageModule)
            }
        ]
    },
    {
        path: 'view-design/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_Entrena_Designer_view-design_view-design_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Entrena/Designer/view-design/view-design.module */ 8249)).then(m => m.ViewDesignPageModule),
        canActivate: [_guards_entrena_guard__WEBPACK_IMPORTED_MODULE_2__.EntrenaGuard]
    },
    {
        path: 'logs/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_Entrena_logs_logs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Entrena/logs/logs.module */ 80040)).then(m => m.LogsPageModule),
        canActivate: [_guards_entrena_guard__WEBPACK_IMPORTED_MODULE_2__.EntrenaGuard]
    },
    {
        path: 'preferences',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_Entrena_preferences_preferences_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Entrena/preferences/preferences.module */ 31714)).then(m => m.PreferencesPageModule)
    },
    {
        path: 'interfaces/nettsegur',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_interfaces_nett-segur_nett-segur_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/interfaces/nett-segur/nett-segur.module */ 52966)).then(m => m.NettSegurPageModule)
    },
    {
        path: 'interfaces/cdosupervisores',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_interfaces_cdosupervisores_cdosupervisores_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/interfaces/cdosupervisores/cdosupervisores.module */ 67341)).then(m => m.CdosupervisoresPageModule)
    },
    {
        path: 'interfaces/agilissa-calendario',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fullcalendar_interaction_main_js-node_modules_fullcalendar_timegrid_main-669d30"), __webpack_require__.e("src_app_Pages_interfaces_agilissa_agilissa_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/interfaces/agilissa/agilissa.module */ 63785)).then(m => m.AgilissaPageModule)
    },
    {
        path: 'interfaces/oszford-calendario',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fullcalendar_interaction_main_js-node_modules_fullcalendar_timegrid_main-669d30"), __webpack_require__.e("src_app_Pages_interfaces_oszford-calendario_oszford-calendario_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/interfaces/oszford-calendario/oszford-calendario.module */ 11688)).then(m => m.OszfordCalendarioPageModule)
    },
    {
        path: 'interfaces/diamante-mtto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_interfaces_diamante-mtto_diamante-mtto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/interfaces/diamante-mtto/diamante-mtto.module */ 85430)).then(m => m.DiamanteMttoPageModule)
    },
    {
        path: 'interfaces/biomedicos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_interfaces_biomedicos_biomedicos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/interfaces/biomedicos/biomedicos.module */ 68894)).then(m => m.BiomedicosPageModule)
    },
    {
        path: 'interfaces/inverpack/mantenimientos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Pages_interfaces_inverpack_mantenimientos_mantenimientos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/interfaces/inverpack/mantenimientos/mantenimientos.module */ 49683)).then(m => m.MantenimientosPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { useHash: true })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/dataCompany.service */ 59106);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);









let AppComponent = class AppComponent {
    constructor(platform, storage, dataCompany, socket, router, menuCtrl) {
        this.platform = platform;
        this.storage = storage;
        this.dataCompany = dataCompany;
        this.socket = socket;
        this.router = router;
        this.menuCtrl = menuCtrl;
        // this.initializeApp();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // If using a custom driver:
            // await this.storage.defineDriver(MyCustomDriver)
            console.log('Hola');
            yield this.storage.create();
            this.initializeApp();
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            const platforms = this.platform.platforms();
            // if (platforms.includes('desktop')) {
            this.createdCollections().then(() => {
                console.log('Creado');
                //   this.myPlatform.changePlatform('web');
            }).catch((err) => {
                console.log('Error ', err);
            });
            // }
        });
    }
    createdCollections() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Holaaa');
            const login = yield this.storage.get('login');
            const forms = yield this.storage.get('forms');
            const formsActive = yield this.storage.get('formActive');
            const chats = yield this.storage.get('chats');
            if (!login) {
                yield this.storage.set('login', []);
            }
            else {
                if (login.length > 0) {
                    if (login[0].typeApp === '2') {
                        console.log('DATA VISTA', login[0].logo);
                        this.socket.emit('connectVT', login[0].data);
                        this.menuCtrl.enable(true, 'menu');
                        this.dataCompany.getVista('3');
                        this.dataCompany.getDataCompany({
                            pathLogoCompany: login[0].logo ? login[0].logo : '',
                            nameCompany: login[0].companyName
                        });
                    }
                    else if (login[0].typeApp === '1') {
                        this.socket.emit('welcome', (login[0]));
                        this.socket.emit('login', { ID: login[0].UserID });
                        this.dataCompany.getDataCompany({
                            pathLogoCompany: login[0].logo,
                            nameCompany: login[0].companyName,
                            ext: login[0].type === 'exter' ? true : false
                        });
                    }
                }
            }
            if (!forms) {
                yield this.storage.set('forms', []);
            }
            if (!formsActive) {
                yield this.storage.set('formActive', []);
            }
            if (!chats) {
                yield this.storage.set('chats', []);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_3__.DataComparnyService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__.Socket },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/login.guard */ 82721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ 45642);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 80190);











const config = { url: 'https://www.vtentrena.com', options: {} };



let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__.SocketIoModule.forRoot(config),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.IonicStorageModule.forRoot({
                name: 'visitrack_entrena',
                driverOrder: [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Drivers.IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Drivers.SecureStorage, _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Drivers.LocalStorage]
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        providers: [
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage,
            _guards_login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 72360:
/*!**************************************************************!*\
  !*** ./src/app/components/FTYS/address/address.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressComponent": () => (/* binding */ AddressComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.component.html?ngResource */ 55723);
/* harmony import */ var _address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.component.scss?ngResource */ 34794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AddressComponent = class AddressComponent {
    constructor() { }
    ngOnInit() {
        if (this.pho === '') {
            this.pho = 'Escribe la dirección';
        }
    }
};
AddressComponent.ctorParameters = () => [];
AddressComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pho: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AddressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-address',
        template: _address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddressComponent);



/***/ }),

/***/ 76556:
/*!********************************************************************!*\
  !*** ./src/app/components/FTYS/cell-phone/cell-phone.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CellPhoneComponent": () => (/* binding */ CellPhoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cell_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell-phone.component.html?ngResource */ 89387);
/* harmony import */ var _cell_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell-phone.component.scss?ngResource */ 60413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CellPhoneComponent = class CellPhoneComponent {
    constructor() { }
    ngOnInit() {
        if (this.pho === '') {
            this.pho = 'Escribe el número celular';
        }
    }
};
CellPhoneComponent.ctorParameters = () => [];
CellPhoneComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pho: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CellPhoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-cell-phone',
        template: _cell_phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cell_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CellPhoneComponent);



/***/ }),

/***/ 10496:
/*!****************************************************************!*\
  !*** ./src/app/components/FTYS/checkbox/checkbox.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComponent": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _checkbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.component.html?ngResource */ 25964);
/* harmony import */ var _checkbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.component.scss?ngResource */ 90027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CheckboxComponent = class CheckboxComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.opts, typeof this.opts);
    }
};
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    opts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CheckboxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-checkbox',
        template: _checkbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_checkbox_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckboxComponent);



/***/ }),

/***/ 73274:
/*!******************************************************************!*\
  !*** ./src/app/components/FTYS/date-time/date-time.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimeComponent": () => (/* binding */ DateTimeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _date_time_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time.component.html?ngResource */ 50005);
/* harmony import */ var _date_time_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time.component.scss?ngResource */ 66872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let DateTimeComponent = class DateTimeComponent {
    constructor() {
        this.myDate = new Date().toISOString();
    }
    ngOnInit() { }
};
DateTimeComponent.ctorParameters = () => [];
DateTimeComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
DateTimeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-date-time',
        template: _date_time_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_date_time_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DateTimeComponent);



/***/ }),

/***/ 43907:
/*!********************************************************!*\
  !*** ./src/app/components/FTYS/date/date.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateComponent": () => (/* binding */ DateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.component.html?ngResource */ 60618);
/* harmony import */ var _date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.component.scss?ngResource */ 18435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let DateComponent = class DateComponent {
    constructor() {
        this.myDate = new Date().toISOString();
    }
    ngOnInit() {
    }
};
DateComponent.ctorParameters = () => [];
DateComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
DateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-date',
        template: _date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DateComponent);



/***/ }),

/***/ 50144:
/*!**********************************************************!*\
  !*** ./src/app/components/FTYS/email/email.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailComponent": () => (/* binding */ EmailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.component.html?ngResource */ 10608);
/* harmony import */ var _email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.component.scss?ngResource */ 83785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let EmailComponent = class EmailComponent {
    constructor() { }
    ngOnInit() {
        if (this.pho === '') {
            this.pho = 'Escribe el correo Electrónicos';
        }
    }
};
EmailComponent.ctorParameters = () => [];
EmailComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pho: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
EmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-email',
        template: _email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailComponent);



/***/ }),

/***/ 61184:
/*!**********************************************************!*\
  !*** ./src/app/components/FTYS/forms/forms.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsComponent": () => (/* binding */ FormsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.component.html?ngResource */ 73751);
/* harmony import */ var _forms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.component.scss?ngResource */ 22413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);






let FormsComponent = class FormsComponent {
    constructor(loading, storage) {
        this.loading = loading;
        this.storage = storage;
        this.titleForm = '';
        this.pages = [];
        this.page = 1;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loading.createLoading('Cargando Formulario, por favor espere');
            const data = yield this.storage.getForms();
            if (data) {
                console.log(data, true, this.EntityID);
                const myForm = data[0].filter((form) => {
                    return form.GUID === this.EntityID;
                });
                console.log(myForm);
                this.titleForm = myForm[0].Title;
                this.pages = JSON.parse(myForm[0].JSONQuestions);
                console.log(this.pages);
                yield this.loading.cancelLoading();
            }
            // const data = await this.storage.
            /* this.titleForm = data[0].Title;
              this.pages = data[0].JSONQuestions;*/
        });
    }
    changePage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.page = (yield this.slide.getActiveIndex()) + 1;
        });
    }
};
FormsComponent.ctorParameters = () => [
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__.StorageWebService }
];
FormsComponent.propDecorators = {
    EntityID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    Entity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    Value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['slide',] }]
};
FormsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forms',
        template: _forms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormsComponent);



/***/ }),

/***/ 72541:
/*!******************************************************************!*\
  !*** ./src/app/components/FTYS/hyperlink/hyperlink.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HyperlinkComponent": () => (/* binding */ HyperlinkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _hyperlink_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hyperlink.component.html?ngResource */ 95793);
/* harmony import */ var _hyperlink_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hyperlink.component.scss?ngResource */ 27975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let HyperlinkComponent = class HyperlinkComponent {
    constructor() { }
    ngOnInit() { }
};
HyperlinkComponent.ctorParameters = () => [];
HyperlinkComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    val: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HyperlinkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-hyperlink',
        template: _hyperlink_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_hyperlink_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HyperlinkComponent);



/***/ }),

/***/ 69069:
/*!**************************************************************************!*\
  !*** ./src/app/components/FTYS/numeric-value/numeric-value.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumericValueComponent": () => (/* binding */ NumericValueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _numeric_value_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numeric-value.component.html?ngResource */ 45686);
/* harmony import */ var _numeric_value_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numeric-value.component.scss?ngResource */ 75040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let NumericValueComponent = class NumericValueComponent {
    constructor() { }
    ngOnInit() {
        if (this.pho === '') {
            this.pho = 'Digitar valor';
        }
    }
};
NumericValueComponent.ctorParameters = () => [];
NumericValueComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pho: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
NumericValueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-numeric-value',
        template: _numeric_value_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_numeric_value_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NumericValueComponent);



/***/ }),

/***/ 84274:
/*!******************************************************************!*\
  !*** ./src/app/components/FTYS/paragrahp/paragrahp.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParagrahpComponent": () => (/* binding */ ParagrahpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _paragrahp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paragrahp.component.html?ngResource */ 39696);
/* harmony import */ var _paragrahp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paragrahp.component.scss?ngResource */ 985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ParagrahpComponent = class ParagrahpComponent {
    constructor() { }
    ngOnInit() { }
};
ParagrahpComponent.ctorParameters = () => [];
ParagrahpComponent.propDecorators = {
    txt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ParagrahpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-paragrahp',
        template: _paragrahp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_paragrahp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ParagrahpComponent);



/***/ }),

/***/ 41969:
/*!**********************************************************!*\
  !*** ./src/app/components/FTYS/phone/phone.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneComponent": () => (/* binding */ PhoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.component.html?ngResource */ 31711);
/* harmony import */ var _phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.component.scss?ngResource */ 28988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let PhoneComponent = class PhoneComponent {
    constructor() { }
    ngOnInit() {
        if (this.pho === '') {
            this.pho = 'Escribe el número de teléfono';
        }
    }
};
PhoneComponent.ctorParameters = () => [];
PhoneComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pho: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PhoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-phone',
        template: _phone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_phone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhoneComponent);



/***/ }),

/***/ 67844:
/*!**************************************************************************!*\
  !*** ./src/app/components/FTYS/radio-buttons/radio-buttons.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonsComponent": () => (/* binding */ RadioButtonsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _radio_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-buttons.component.html?ngResource */ 3657);
/* harmony import */ var _radio_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-buttons.component.scss?ngResource */ 633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let RadioButtonsComponent = class RadioButtonsComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.opts, typeof this.opts);
    }
};
RadioButtonsComponent.ctorParameters = () => [];
RadioButtonsComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    opts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
RadioButtonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-radio-buttons',
        template: _radio_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_radio_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RadioButtonsComponent);



/***/ }),

/***/ 58481:
/*!******************************************************************!*\
  !*** ./src/app/components/FTYS/text-line/text-line.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextLineComponent": () => (/* binding */ TextLineComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _text_line_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-line.component.html?ngResource */ 69569);
/* harmony import */ var _text_line_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-line.component.scss?ngResource */ 30419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TextLineComponent = class TextLineComponent {
    constructor() { }
    ngOnInit() {
        if (this.pho === '') {
            this.pho = 'Escriba aqui';
        }
    }
};
TextLineComponent.ctorParameters = () => [];
TextLineComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pho: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TextLineComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-text-line',
        template: _text_line_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_text_line_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TextLineComponent);



/***/ }),

/***/ 43579:
/*!****************************************************************!*\
  !*** ./src/app/components/FTYS/textarea/textarea.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaComponent": () => (/* binding */ TextareaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _textarea_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea.component.html?ngResource */ 60602);
/* harmony import */ var _textarea_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea.component.scss?ngResource */ 18048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TextareaComponent = class TextareaComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.required, ' colores');
        if (this.pho === '') {
            this.pho = 'Escriba aqui';
        }
    }
};
TextareaComponent.ctorParameters = () => [];
TextareaComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pho: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    col: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TextareaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-textarea',
        template: _textarea_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_textarea_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TextareaComponent);



/***/ }),

/***/ 59800:
/*!********************************************************!*\
  !*** ./src/app/components/FTYS/time/time.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeComponent": () => (/* binding */ TimeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _time_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.component.html?ngResource */ 95682);
/* harmony import */ var _time_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.component.scss?ngResource */ 36602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TimeComponent = class TimeComponent {
    constructor() {
        this.myDate = new Date().toISOString();
    }
    ngOnInit() { }
};
TimeComponent.ctorParameters = () => [];
TimeComponent.propDecorators = {
    lab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TimeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-time',
        template: _time_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_time_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimeComponent);



/***/ }),

/***/ 70476:
/*!**********************************************************!*\
  !*** ./src/app/components/FTYS/title/title.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleComponent": () => (/* binding */ TitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.component.html?ngResource */ 44153);
/* harmony import */ var _title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.component.scss?ngResource */ 36147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TitleComponent = class TitleComponent {
    constructor() {
        console.log(this.fie, 'titulo');
    }
    ngOnInit() { }
};
TitleComponent.ctorParameters = () => [];
TitleComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    fie: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-title',
        template: _title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TitleComponent);



/***/ }),

/***/ 78280:
/*!*******************************************************************************!*\
  !*** ./src/app/components/Inverpack/usarios-inver/usarios-inver.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsariosInverComponent": () => (/* binding */ UsariosInverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _usarios_inver_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usarios-inver.component.html?ngResource */ 81818);
/* harmony import */ var _usarios_inver_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usarios-inver.component.scss?ngResource */ 93611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Utilities/Loading.service */ 62082);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);









let UsariosInverComponent = class UsariosInverComponent {
    constructor(modalCtrl, api, loading, toast) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.loading = loading;
        this.toast = toast;
    }
    ngOnInit() { }
    close() {
        this.modalCtrl.dismiss();
    }
    createOnlyActivity(guid, prioridad, tec) {
        return new Promise((resolve, reject) => {
            const solicitud = this.acti.Values.filter((item) => item.apiId == 'solicitud');
            this.api.aceptActivity({
                AccessToken: this.tkn,
                FormGUID: '76E93F88-7612-466E-BBD7-3C95A7679D6D',
                LocationGUID: this.acti.LocationGUID,
                AssetGUID: this.acti.AssetGUID,
                UserGUID: guid,
                Duration: "60",
                DispachDateTime: moment_timezone__WEBPACK_IMPORTED_MODULE_2__().add(2, 'minutes').format('YYYY-MM-DD HH:mm'),
                Values: JSON.stringify([{
                        apiId: 'ENCONTRO',
                        Value: solicitud.length > 0 ? solicitud[0].Value : ''
                    }, {
                        apiId: 'TIPOMTO',
                        Value: 'CORRECTIVO'
                    }, {
                        apiId: 'PRIORIDAD',
                        Value: prioridad
                    }, {
                        apiId: 'TECNICO',
                        Value: tec
                    }]),
                ActivityGUID: '',
                ParentGUID: this.acti.GUID,
                CompanyStatusGUID: '0E7DA2A2-14A4-4B15-A4DC-4BFE9C9BCDEB'
            }).subscribe((dat) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log(dat);
                if (dat.Status === 'OK') {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }), (err) => {
                resolve(false);
            });
        });
    }
    assign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.createLoading('Creando Orden');
            console.log(this.tecnico);
            const orden = yield this.createOnlyActivity(this.tecnico.guid, this.prioridad, this.tecnico.name);
            if (orden) {
                this.api.updateSurvey({
                    AccessToken: this.tkn,
                    UserGUID: this.tecnico.guid,
                    Duration: '60',
                    SearchBy: 'ActivityID',
                    SearchValue: this.acti.ID,
                    Values: JSON.stringify([{
                            apiId: 'PRIORIDAD',
                            Value: this.prioridad
                        }, {
                            apiId: 'TECNICO',
                            Value: this.tecnico.name
                        }])
                }).subscribe((data) => {
                    if (data) {
                        this.api.changeDispath({
                            tkn: this.tkn,
                            user: this.tecnico.guid,
                            status: '6E7AF6A1-E2A6-4DA1-8BB1-21093261287C',
                            date: moment_timezone__WEBPACK_IMPORTED_MODULE_2__().add(2, 'minutes').format('YYYY-MM-DD HH:mm'),
                            guid: this.acti.GUID
                        }).subscribe((dat) => {
                            this.toast.newCreatedToast('El proceso se finalizò correctamente', true);
                            this.loading.cancelLoading();
                            this.modalCtrl.dismiss({ close: true });
                        }, (err) => {
                            this.toast.newCreatedToast('Se creo la orden pero no se actualizò el formulario', false);
                            this.loading.cancelLoading();
                        });
                    }
                    else {
                        this.toast.newCreatedToast('Se creo la orden pero no se actualizò el formulario', false);
                        this.loading.cancelLoading();
                    }
                }, (err) => {
                    this.toast.newCreatedToast('Se creo la orden pero no se actualizò el formulario', false);
                    this.loading.cancelLoading();
                });
            }
            else {
                this.loading.cancelLoading();
                this.toast.newCreatedToast('No se pudo crear la orden', false);
                this.close();
            }
        });
    }
    cambiar(event, type) {
        if (type == 1) {
            if (event.detail.value) {
                this.prioridad = event.detail.value;
            }
        }
        else {
            if (event.detail.value) {
                this.tecnico = event.detail.value;
            }
        }
        console.log(this.prioridad, this.tecnico);
    }
};
UsariosInverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_Services_Utilities_Loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService }
];
UsariosInverComponent.propDecorators = {
    tkn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    acti: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
UsariosInverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-usarios-inver',
        template: _usarios_inver_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_usarios_inver_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsariosInverComponent);



/***/ }),

/***/ 8638:
/*!*********************************************************************************!*\
  !*** ./src/app/components/asignacionnettsegur/asignacionnettsegur.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignacionnettsegurComponent": () => (/* binding */ AsignacionnettsegurComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _asignacionnettsegur_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignacionnettsegur.component.html?ngResource */ 44534);
/* harmony import */ var _asignacionnettsegur_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignacionnettsegur.component.scss?ngResource */ 72289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);






let AsignacionnettsegurComponent = class AsignacionnettsegurComponent {
    constructor(modalCtrl, api) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.users = [];
        this.selectUsersList = [];
        this.generados = [];
        this.load = true;
        this.fecha = '';
    }
    ngOnInit() { }
    close() {
        this.modalCtrl.dismiss();
    }
    ionViewWillEnter() {
        this.api.getUsers(this.tkn).subscribe((data) => {
            console.log(data, 'usuarios');
            if (data.length > 0) {
                this.users = data.filter((item) => item.Active == 'True');
            }
            else {
                this.users = [];
            }
        });
    }
    cs() {
        console.log(this.fecha);
    }
    select(event) {
        const guid = event.detail.value.ID;
        if (event.detail.checked) {
            const validate = this.selectUsersList.filter((item) => item == guid);
            if (validate.length == 0) {
                this.selectUsersList.push(guid);
            }
        }
        else {
            this.selectUsersList = this.selectUsersList.filter((item) => item != guid);
        }
        console.log(this.selectUsersList);
    }
    createOnlyActivity(guid, data) {
        return new Promise((resolve, reject) => {
            const novedad = this.data.Values.filter((item) => item.apiId == 'OBSERVACIONES');
            this.api.aceptActivity({
                AccessToken: this.tkn,
                FormGUID: '1gp0JCZkra',
                LocationGUID: this.data.LocationGUID,
                AssetGUID: this.data.AssetGUID,
                UserGUID: guid,
                Duration: "60",
                DispachDateTime: this.fecha + ' 00:00:00',
                Values: JSON.stringify([{
                        apiId: 'TRABAJOASIGNADO',
                        Value: novedad.length > 0 ? novedad[0].Value : ''
                    }]),
                ActivityGUID: '',
                ParentGUID: this.data.GUID,
                CompanyStatusGUID: 'ACA3B658-AC7E-4249-BE49-ADF2FF13979F'
            }).subscribe((dat) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.log(dat);
                if (dat.Status === 'OK') {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }));
        });
    }
    createActivities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.load = false;
            for (const user of this.selectUsersList) {
                const response = yield this.createOnlyActivity(user, this.data);
                const dataUser = this.users.filter((item) => item.ID == user);
                if (response) {
                    if (dataUser.length > 0) {
                        this.generados.push({
                            user: dataUser[0].FirstName,
                            status: true
                        });
                    }
                }
                else {
                    if (dataUser.length > 0) {
                        this.generados.push({
                            user: dataUser[0].FirstName,
                            status: false
                        });
                    }
                }
            }
            this.api.cambio({
                tkn: this.tkn,
                user: '6C66D879-2E6D-427B-B494-DEA52062F639',
                guid: this.data.GUID,
                status: 'ACA3B658-AC7E-4249-BE49-ADF2FF13979F'
            }).subscribe((data) => {
                this.load = true;
                this.modalCtrl.dismiss({ data: this.data });
            });
        });
    }
};
AsignacionnettsegurComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
AsignacionnettsegurComponent.propDecorators = {
    tkn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
AsignacionnettsegurComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-asignacionnettsegur',
        template: _asignacionnettsegur_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asignacionnettsegur_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignacionnettsegurComponent);



/***/ }),

/***/ 65633:
/*!***************************************************************!*\
  !*** ./src/app/components/carga-task/carga-task.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargaTaskComponent": () => (/* binding */ CargaTaskComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _carga_task_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carga-task.component.html?ngResource */ 80912);
/* harmony import */ var _carga_task_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carga-task.component.scss?ngResource */ 85105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);







let CargaTaskComponent = class CargaTaskComponent {
    constructor(modalCtrl, api) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.load = true;
        this.list = [];
    }
    ngOnInit() { }
    close() {
        this.modalCtrl.dismiss();
    }
    ionViewWillEnter() {
        this.loadActivities();
    }
    loadActivities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            for (const item of this.data.task) {
                const resp = yield this.createOnlyActivity(item);
                if (resp) {
                    item.GUID = resp.AcitivyGUID ? resp.AcitivyGUID : '';
                    this.list.push(item);
                }
            }
            this.modalCtrl.dismiss(this.list);
        });
    }
    createOnlyActivity(data) {
        console.log(data);
        return new Promise((resolve, reject) => {
            let tarea = '';
            if (data.tipo == 'terminal') {
                tarea = '04. Terminal';
            }
            else if (data.tipo == 'rutinario') {
                tarea = '02. Rutinaria';
            }
            else if (data.tipo == 'mantenimiento') {
                tarea = '03. Mantenimiento';
            }
            console.log({
                AccessToken: this.tkn,
                FormGUID: '2004307A-B1CF-4109-97D1-8603A63BA6E9',
                LocationGUID: data.loc,
                AssetGUID: data.ass,
                UserGUID: data.user,
                Duration: "60",
                DispachDateTime: moment_timezone__WEBPACK_IMPORTED_MODULE_2__(data.start).format('YYYY-MM-DD HH:mm'),
                Values: JSON.stringify([{
                        apiId: 'SECTOR',
                        Value: data.sector
                    }, {
                        apiId: 'TAREA',
                        Value: tarea
                    }, {
                        apiId: 'AREA',
                        Value: data.area
                    }]),
                ActivityGUID: '',
                CompanyStatusGUID: 'CA1B6E82-15F9-458C-B6A1-D988C7194C76'
            });
            if (data.dur) {
                this.api.aceptActivity({
                    AccessToken: this.tkn,
                    FormGUID: '2004307A-B1CF-4109-97D1-8603A63BA6E9',
                    LocationGUID: data.loc,
                    AssetGUID: data.ass,
                    UserGUID: data.user,
                    Duration: data.dur.toString(),
                    DispachDateTime: moment_timezone__WEBPACK_IMPORTED_MODULE_2__(data.start).format('YYYY-MM-DD HH:mm'),
                    Values: JSON.stringify([{
                            apiId: 'SECTOR',
                            Value: data.sector
                        }, {
                            apiId: 'TAREA',
                            Value: tarea
                        }, {
                            apiId: 'AREA',
                            Value: data.area
                        }]),
                    ActivityGUID: '',
                    CompanyStatusGUID: 'CA1B6E82-15F9-458C-B6A1-D988C7194C76'
                }).subscribe((dat) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(dat);
                    if (dat.Status === 'OK') {
                        resolve(dat);
                    }
                    else {
                        resolve(false);
                    }
                }));
            }
            else {
                resolve(true);
            }
        });
    }
};
CargaTaskComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
CargaTaskComponent.propDecorators = {
    tkn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
CargaTaskComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-carga-task',
        template: _carga_task_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_carga_task_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CargaTaskComponent);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_assents_modal_assents_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-assents/modal-assents.component */ 66676);
/* harmony import */ var _modal_users_modal_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-users/modal-users.component */ 47887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ 85819);
/* harmony import */ var _FTYS_title_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FTYS/title/title.component */ 70476);
/* harmony import */ var _FTYS_text_line_text_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FTYS/text-line/text-line.component */ 58481);
/* harmony import */ var _FTYS_date_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FTYS/date/date.component */ 43907);
/* harmony import */ var _FTYS_time_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FTYS/time/time.component */ 59800);
/* harmony import */ var _FTYS_address_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FTYS/address/address.component */ 72360);
/* harmony import */ var _FTYS_cell_phone_cell_phone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FTYS/cell-phone/cell-phone.component */ 76556);
/* harmony import */ var _FTYS_email_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FTYS/email/email.component */ 50144);
/* harmony import */ var _FTYS_phone_phone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FTYS/phone/phone.component */ 41969);
/* harmony import */ var _FTYS_paragrahp_paragrahp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FTYS/paragrahp/paragrahp.component */ 84274);
/* harmony import */ var _FTYS_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FTYS/textarea/textarea.component */ 43579);
/* harmony import */ var _FTYS_numeric_value_numeric_value_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FTYS/numeric-value/numeric-value.component */ 69069);
/* harmony import */ var _FTYS_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FTYS/radio-buttons/radio-buttons.component */ 67844);
/* harmony import */ var _FTYS_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FTYS/checkbox/checkbox.component */ 10496);
/* harmony import */ var _FTYS_date_time_date_time_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FTYS/date-time/date-time.component */ 73274);
/* harmony import */ var _FTYS_hyperlink_hyperlink_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FTYS/hyperlink/hyperlink.component */ 72541);
/* harmony import */ var _FTYS_forms_forms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FTYS/forms/forms.component */ 61184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Pipes/pipes.module */ 7844);
/* harmony import */ var _asignacionnettsegur_asignacionnettsegur_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./asignacionnettsegur/asignacionnettsegur.component */ 8638);
/* harmony import */ var _opciones_cdo_opciones_cdo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./opciones-cdo/opciones-cdo.component */ 67786);
/* harmony import */ var _controlcdoasistencial_controlcdoasistencial_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./controlcdoasistencial/controlcdoasistencial.component */ 60970);
/* harmony import */ var _carga_task_carga_task_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./carga-task/carga-task.component */ 65633);
/* harmony import */ var _Inverpack_usarios_inver_usarios_inver_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Inverpack/usarios-inver/usarios-inver.component */ 78280);






























let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.NgModule)({
        declarations: [
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
            _FTYS_title_title_component__WEBPACK_IMPORTED_MODULE_3__.TitleComponent,
            _FTYS_text_line_text_line_component__WEBPACK_IMPORTED_MODULE_4__.TextLineComponent,
            _FTYS_date_date_component__WEBPACK_IMPORTED_MODULE_5__.DateComponent,
            _FTYS_time_time_component__WEBPACK_IMPORTED_MODULE_6__.TimeComponent,
            _FTYS_address_address_component__WEBPACK_IMPORTED_MODULE_7__.AddressComponent,
            _FTYS_cell_phone_cell_phone_component__WEBPACK_IMPORTED_MODULE_8__.CellPhoneComponent,
            _FTYS_email_email_component__WEBPACK_IMPORTED_MODULE_9__.EmailComponent,
            _FTYS_phone_phone_component__WEBPACK_IMPORTED_MODULE_10__.PhoneComponent,
            _FTYS_paragrahp_paragrahp_component__WEBPACK_IMPORTED_MODULE_11__.ParagrahpComponent,
            _FTYS_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__.TextareaComponent,
            _FTYS_numeric_value_numeric_value_component__WEBPACK_IMPORTED_MODULE_13__.NumericValueComponent,
            _FTYS_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_14__.RadioButtonsComponent,
            _FTYS_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__.CheckboxComponent,
            _FTYS_date_time_date_time_component__WEBPACK_IMPORTED_MODULE_16__.DateTimeComponent,
            _FTYS_hyperlink_hyperlink_component__WEBPACK_IMPORTED_MODULE_17__.HyperlinkComponent,
            _FTYS_forms_forms_component__WEBPACK_IMPORTED_MODULE_18__.FormsComponent,
            _modal_users_modal_users_component__WEBPACK_IMPORTED_MODULE_1__.ModalUsersComponent,
            _modal_assents_modal_assents_component__WEBPACK_IMPORTED_MODULE_0__.ModalAssentsComponent,
            _asignacionnettsegur_asignacionnettsegur_component__WEBPACK_IMPORTED_MODULE_20__.AsignacionnettsegurComponent,
            _opciones_cdo_opciones_cdo_component__WEBPACK_IMPORTED_MODULE_21__.OpcionesCDOComponent,
            _controlcdoasistencial_controlcdoasistencial_component__WEBPACK_IMPORTED_MODULE_22__.ControlcdoasistencialComponent,
            _carga_task_carga_task_component__WEBPACK_IMPORTED_MODULE_23__.CargaTaskComponent,
            _Inverpack_usarios_inver_usarios_inver_component__WEBPACK_IMPORTED_MODULE_24__.UsariosInverComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonicModule,
            _Pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__.PipesModule
        ],
        exports: [
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
            _FTYS_title_title_component__WEBPACK_IMPORTED_MODULE_3__.TitleComponent,
            _FTYS_text_line_text_line_component__WEBPACK_IMPORTED_MODULE_4__.TextLineComponent,
            _FTYS_date_date_component__WEBPACK_IMPORTED_MODULE_5__.DateComponent,
            _FTYS_time_time_component__WEBPACK_IMPORTED_MODULE_6__.TimeComponent,
            _FTYS_address_address_component__WEBPACK_IMPORTED_MODULE_7__.AddressComponent,
            _FTYS_cell_phone_cell_phone_component__WEBPACK_IMPORTED_MODULE_8__.CellPhoneComponent,
            _FTYS_email_email_component__WEBPACK_IMPORTED_MODULE_9__.EmailComponent,
            _FTYS_phone_phone_component__WEBPACK_IMPORTED_MODULE_10__.PhoneComponent,
            _FTYS_paragrahp_paragrahp_component__WEBPACK_IMPORTED_MODULE_11__.ParagrahpComponent,
            _FTYS_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__.TextareaComponent,
            _FTYS_numeric_value_numeric_value_component__WEBPACK_IMPORTED_MODULE_13__.NumericValueComponent,
            _FTYS_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_14__.RadioButtonsComponent,
            _FTYS_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__.CheckboxComponent,
            _FTYS_date_time_date_time_component__WEBPACK_IMPORTED_MODULE_16__.DateTimeComponent,
            _FTYS_hyperlink_hyperlink_component__WEBPACK_IMPORTED_MODULE_17__.HyperlinkComponent,
            _FTYS_forms_forms_component__WEBPACK_IMPORTED_MODULE_18__.FormsComponent,
            _modal_users_modal_users_component__WEBPACK_IMPORTED_MODULE_1__.ModalUsersComponent,
            _modal_assents_modal_assents_component__WEBPACK_IMPORTED_MODULE_0__.ModalAssentsComponent,
            _asignacionnettsegur_asignacionnettsegur_component__WEBPACK_IMPORTED_MODULE_20__.AsignacionnettsegurComponent,
            _opciones_cdo_opciones_cdo_component__WEBPACK_IMPORTED_MODULE_21__.OpcionesCDOComponent,
            _controlcdoasistencial_controlcdoasistencial_component__WEBPACK_IMPORTED_MODULE_22__.ControlcdoasistencialComponent,
            _carga_task_carga_task_component__WEBPACK_IMPORTED_MODULE_23__.CargaTaskComponent,
            _Inverpack_usarios_inver_usarios_inver_component__WEBPACK_IMPORTED_MODULE_24__.UsariosInverComponent
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 60970:
/*!*************************************************************************************!*\
  !*** ./src/app/components/controlcdoasistencial/controlcdoasistencial.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlcdoasistencialComponent": () => (/* binding */ ControlcdoasistencialComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _controlcdoasistencial_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlcdoasistencial.component.html?ngResource */ 87512);
/* harmony import */ var _controlcdoasistencial_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controlcdoasistencial.component.scss?ngResource */ 9351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);







let ControlcdoasistencialComponent = class ControlcdoasistencialComponent {
    constructor(modalCtrl, api) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.revisados = [];
        this.tabla = [];
        this.txt = '';
    }
    ngOnInit() { }
    ionViewWillEnter() {
        underscore__WEBPACK_IMPORTED_MODULE_2__.each(this.padres, (dat, i) => {
            const data = this.data.filter((item) => item.ParentGUID == dat);
            console.log(data);
            const verdes = data.filter((item) => item.CompanyStatusName == 'Completado');
            const rojos = data.filter((item) => item.CompanyStatusName == 'PENDIENTE ASEO');
            const amarillos = data.filter((item) => item.CompanyStatusName == 'EN PROCESO DE ASEO');
            const grises = data.filter((item) => item.CompanyStatusName == 'CANCELADO POR DEMORA');
            const azules = data.filter((item) => item.CompanyStatusName == 'ELIMINADA POR LIMPIEZA PREVIA A SOLICITUD');
            this.tabla.push({
                padre: dat,
                data: data,
                hab: data.length > 0 ? data[0].LocationName : '',
                cam: data.length > 0 ? data[0].AssetName : '',
                rojos: rojos.length,
                amarillos: amarillos.length,
                grises: grises.length,
                verdes: verdes.length,
                azules: azules.length,
                ldg: false
            });
        });
    }
    buscar(event) {
        this.txt = event.detail.value;
    }
    cambio(data) {
        return new Promise((resolve, reject) => {
            this.api.changeStatus({
                tkn: this.tkn,
                guid: data.GUID,
                user: data.AssignedToGUID,
                status: 'FA3A75FC-596D-4A8E-923B-17D7E6BBA5F5'
            }).subscribe((data) => {
                resolve(true);
            });
        });
    }
    eliminar(item, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            const indx = this.tabla.findIndex((val) => val.padre == item.padre);
            this.tabla[indx].ldg = true;
            let arr = [];
            for (const dat of item.data) {
                yield this.cambio(dat);
                this.tabla[indx].rojos -= 1;
                arr.push(true);
            }
            yield this.cambio({
                GUID: item.padre,
                AssignedToGUID: item.data[0].AssignedToGUID
            });
            this.revisados.push(item.padre);
            this.tabla[indx].azules = arr.length;
            this.tabla[indx].ldg = false;
        });
    }
    unicos(arr, item) {
        return underscore__WEBPACK_IMPORTED_MODULE_2__.uniq(underscore__WEBPACK_IMPORTED_MODULE_2__.map(arr, (dat) => dat[item]));
    }
    cerrar() {
        if (this.revisados.length > 0) {
            this.modalCtrl.dismiss({
                revisados: this.revisados
            });
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
};
ControlcdoasistencialComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
ControlcdoasistencialComponent.propDecorators = {
    padres: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    tkn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ControlcdoasistencialComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-controlcdoasistencial',
        template: _controlcdoasistencial_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_controlcdoasistencial_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ControlcdoasistencialComponent);



/***/ }),

/***/ 85819:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 22574);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 91346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/dataCompany.service */ 59106);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment.prod */ 89019);













let MenuComponent = class MenuComponent {
    constructor(dataCompanyService, navCtrl, toasService, apiService, apiEntrena, router, socket, storage, menuCtrl) {
        this.dataCompanyService = dataCompanyService;
        this.navCtrl = navCtrl;
        this.toasService = toasService;
        this.apiService = apiService;
        this.apiEntrena = apiEntrena;
        this.router = router;
        this.socket = socket;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.dataCompany = {
            pathLogoCompany: false,
            nameCompany: false
        };
        this.view = '0';
        this.users = [];
        this.inter = [];
        this.exter = [];
        this.ext = false;
        // ENTRENA 
        this.role = '';
        this.logo = '';
        this.name = 'Visitrack Application';
        this.dataCompanyService.dataCompany.subscribe((data) => {
            console.log(data, 'data menu');
            if (data.logo || data.name) {
                if (data.logo) {
                    this.logo = data.logo;
                }
                this.name = data.name;
            }
            // this.ext = data.ext ? data.ext : false;
        });
        this.dataCompanyService.$view.subscribe((view) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.view = view;
            if (view === '2') {
                const login = yield this.storage.getLogin();
                if (login) {
                    this.apiService.getConnections(login[0].CompanyID).subscribe((connections) => {
                        this.users = connections.response;
                        this.inter = this.users.filter((item) => {
                            return item.type === 'inter';
                        });
                        this.exter = this.users.filter((item) => {
                            return item.type === 'exter';
                        });
                    });
                }
            }
            else if (view === '3') {
                const login = yield this.storage.getLogin();
                if (login) {
                    if (login[0].typeApp === '2') {
                        this.role = login[0].data.role;
                    }
                }
            }
        }));
        this.dataCompanyService.$users.subscribe((arrConnections) => {
            this.users = arrConnections.connections;
        });
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // this.socket.connect();
            this.menuCtrl.enable(false, 'menu');
            const login = yield this.storage.getLogin();
            if (login) {
                console.log('MENU', login[0]);
                if (login[0].typeApp === '2') {
                    this.role = login[0].data.role;
                    this.loadDataMenu(login[0]);
                }
                else if (login[0].typeApp === '1') {
                    this.ext = login[0].type === 'exter' ? true : false;
                    this.apiService.getConnections(login[0].CompanyID).subscribe((connections) => {
                        this.users = connections.response;
                        this.inter = this.users.filter((item) => {
                            return item.type === 'inter';
                        });
                        this.exter = this.users.filter((item) => {
                            return item.type === 'exter';
                        });
                    });
                }
            }
        });
    }
    loadDataMenu(login) {
        let user = '';
        if (login.data.role === 'USER_ENTRENA') {
            user = login.data.parentAdmin;
        }
        else {
            user = login.data._id;
        }
        this.apiEntrena.preferencesLoad({ user }, login.token).subscribe({ next: (data) => {
                console.log(data, 'todo');
                if (data.status === 'ok') {
                    if (data.response) {
                        console.log('LOGOG', data.response);
                        //  this.logo = data.response.logo ? environments.URL_NODE + '/uploads/Perfiles/' +  data.response.logo : '';
                        const theme = data.response.theme ? data.response.theme : 'light';
                        this.dataCompanyService.setColor(theme);
                        this.dataCompanyService.getDataCompany({
                            logo: data.response.logo && data.response.logo.includes('https://s3.amazonaws.com') ? data.response.logo : _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environments.URL_NODE + '/uploads/Perfiles/' + data.response.logo,
                            name: data.response.nameCompany ? data.response.nameCompany : 'VTEntrena Application'
                        });
                    }
                    else {
                        this.logo = '';
                        this.name = 'VTEntrena Application';
                    }
                }
                else {
                    this.logo = '';
                    this.name = 'VTEntrena Application';
                }
            }, error: (err) => {
                this.logo = '';
                this.name = 'VTEntrena Application';
            } });
    }
    navigate(direction) {
        switch (direction) {
            case 1:
                this.router.navigate(['/forms']);
                this.dataCompanyService.getVista('1');
                break;
            case 2:
                console.log('Ubicaciones');
                break;
            case 3:
                this.router.navigate(['/home']);
                break;
            case 4:
                console.log('Configuracion');
                break;
            case 5:
                this.router.navigate(['/repository']);
                break;
            case 5:
                this.router.navigate(['/render']);
                break;
            case 6:
                this.storage.getLogin().then((data) => {
                    console.log(data[0], 'saliendo');
                    if (data[0].typeApp === '2') {
                        this.apiEntrena.LogoutUser(data[0].data, data[0].token).subscribe((res) => {
                            console.log('Bien');
                            if (res.status === 'ok') {
                                this.socket.emit('exitVT', data[0].data);
                            }
                        });
                    }
                    else if (data[0].typeApp === '1') {
                        this.socket.emit('salir', data[0]);
                    }
                    this.storage.closeSession().then(() => {
                        this.router.navigate(['/login']);
                    });
                });
                break;
            case 11:
                this.router.navigate(['/admin-users']);
                break;
            case 12:
                this.router.navigate(['/preferences']);
                break;
            case 13:
                this.router.navigate(['/designer-list']);
                break;
            case 14:
                this.router.navigate(['/list-my-designs']);
                break;
        }
    }
    chat() {
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_2__.DataComparnyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_6__.ApiEntrenaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__.Socket },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_5__.StorageWebService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController }
];
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-menu',
        template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuComponent);



/***/ }),

/***/ 66676:
/*!*********************************************************************!*\
  !*** ./src/app/components/modal-assents/modal-assents.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalAssentsComponent": () => (/* binding */ ModalAssentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_assents_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-assents.component.html?ngResource */ 82025);
/* harmony import */ var _modal_assents_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-assents.component.scss?ngResource */ 66394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);









let ModalAssentsComponent = class ModalAssentsComponent {
    constructor(router, apiEntrena, storage, toasCtrl, alertCtrl, modal) {
        this.router = router;
        this.apiEntrena = apiEntrena;
        this.storage = storage;
        this.toasCtrl = toasCtrl;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.listDesigns = [];
        this.text = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.ListDesigners();
    }
    ListDesigners() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                const id = login[0].data.role === 'USER_ENTRENA' ? login[0].data.parentAdmin : '';
                this.apiEntrena.readDesignersAll(login[0].token, id).subscribe((data) => {
                    if (data.status === 'ok') {
                        let cont = data.response.length;
                        data.response.forEach((desing) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            desing.active = false;
                            if (desing.keys) {
                                const validate = desing.keys.filter((item) => {
                                    return item === this.user;
                                });
                                if (validate.length > 0) {
                                    desing.active = true;
                                }
                            }
                            const promise = new Promise((resolve, reject) => {
                                this.apiEntrena.readAnswerJsonAll(login[0].token, desing._id, this.user).subscribe((re) => {
                                    if (re.status === 'ok') {
                                        resolve(re.response);
                                    }
                                    else {
                                        resolve([]);
                                    }
                                }, (err) => {
                                    resolve([]);
                                });
                            }).then((res) => {
                                cont = cont - 1;
                                desing.assents = res;
                                if (cont === 0) {
                                    this.listDesigns = data.response;
                                }
                            });
                        }));
                    }
                    else {
                        this.toasCtrl.newCreatedToast('No se pudo realizar la operación', false);
                    }
                }, (error) => {
                    this.toasCtrl.newCreatedToast('No se pudo realizar la operación', false);
                });
            }
        });
    }
    assign(id, status, idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.apiEntrena.addUsersDesing(login[0].token, { id, user: this.user }).subscribe((data) => {
                    if (data.status === 'ok') {
                        if (status) {
                            this.toasCtrl.newCreatedToast('Usuario removido correctamente', true);
                        }
                        else {
                            this.toasCtrl.newCreatedToast('Usuario asignado correctamente', true);
                        }
                        this.listDesigns[idx].active = !status;
                    }
                    else {
                        this.toasCtrl.newCreatedToast('No se pudo asignar el usuario', false);
                    }
                }, (error) => {
                    this.toasCtrl.newCreatedToast('No se pudo asignar el usuario', false);
                });
            }
        });
    }
    toggleUser() {
    }
    changeText(event) {
    }
};
ModalAssentsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__.StorageWebService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
ModalAssentsComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
ModalAssentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-modal-assents',
        template: _modal_assents_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_assents_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalAssentsComponent);



/***/ }),

/***/ 47887:
/*!*****************************************************************!*\
  !*** ./src/app/components/modal-users/modal-users.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalUsersComponent": () => (/* binding */ ModalUsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-users.component.html?ngResource */ 6950);
/* harmony import */ var _modal_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-users.component.scss?ngResource */ 2980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/ApiEntrena.service */ 46061);
/* harmony import */ var src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Utilities/Toast.service */ 46050);









let ModalUsersComponent = class ModalUsersComponent {
    constructor(router, apiEntrena, storage, toasCtrl, alertCtrl, modal) {
        this.router = router;
        this.apiEntrena = apiEntrena;
        this.storage = storage;
        this.toasCtrl = toasCtrl;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.listDesigns = [];
        this.text = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.ListDesigners();
    }
    ListDesigners() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                const id = login[0].data.role === 'USER_ENTRENA' ? login[0].data.parentAdmin : '';
                this.apiEntrena.readDesignersAll(login[0].token, id).subscribe((data) => {
                    if (data.status === 'ok') {
                        data.response.forEach((desing) => {
                            desing.active = false;
                            if (desing.keys) {
                                const validate = desing.keys.filter((item) => {
                                    return item === this.user;
                                });
                                if (validate.length > 0) {
                                    desing.active = true;
                                }
                            }
                        });
                        this.listDesigns = data.response;
                    }
                    else {
                        this.toasCtrl.newCreatedToast('Could not create design, please try again later', false);
                    }
                }, (error) => {
                    this.toasCtrl.newCreatedToast('Could not create design, please try again later', false);
                });
            }
        });
    }
    assign(id, status, idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const login = yield this.storage.getLogin();
            if (login) {
                this.apiEntrena.addUsersDesing(login[0].token, { id, user: this.user }).subscribe((data) => {
                    if (data.status === 'ok') {
                        if (status) {
                            this.toasCtrl.newCreatedToast('Usuario removido correctamente', true);
                        }
                        else {
                            this.toasCtrl.newCreatedToast('Usuario asignado correctamente', true);
                        }
                        this.listDesigns[idx].active = !status;
                    }
                    else {
                        this.toasCtrl.newCreatedToast('No se pudo asignar el usuario', false);
                    }
                }, (error) => {
                    this.toasCtrl.newCreatedToast('No se pudo asignar el usuario', false);
                });
            }
        });
    }
    toggleUser() {
    }
    changeText(event) {
    }
};
ModalUsersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_Services_Api_ApiEntrena_service__WEBPACK_IMPORTED_MODULE_2__.ApiEntrenaService },
    { type: src_app_Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_3__.StorageWebService },
    { type: src_app_Services_Utilities_Toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
ModalUsersComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
ModalUsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-modal-users',
        template: _modal_users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalUsersComponent);



/***/ }),

/***/ 67786:
/*!*******************************************************************!*\
  !*** ./src/app/components/opciones-cdo/opciones-cdo.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpcionesCDOComponent": () => (/* binding */ OpcionesCDOComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _opciones_cdo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opciones-cdo.component.html?ngResource */ 86334);
/* harmony import */ var _opciones_cdo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opciones-cdo.component.scss?ngResource */ 89390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Api/Api.service */ 93954);






let OpcionesCDOComponent = class OpcionesCDOComponent {
    constructor(popover, api) {
        this.popover = popover;
        this.api = api;
        this.color = '';
    }
    ngOnInit() { }
    ionViewWillEnter() {
        if (this.color == 'CANCELADO POR DEMORA') {
            return 'gris';
        }
        if (this.color == 'Completado') {
            return 'verde';
        }
        if (this.color == 'EN PROCESO DE ASEO') {
            return 'amarillo';
        }
        if (this.color == 'PENDIENTE ASEO') {
            return 'rojo';
        }
        if (this.color == 'ELIMINADA POR LIMPIEZA PREVIA A SOLICITUD') {
            return 'azuñ';
        }
    }
    seleccion(item) {
        this.popover.dismiss({
            by: item
        });
    }
};
OpcionesCDOComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController },
    { type: src_app_Services_Api_Api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
OpcionesCDOComponent.propDecorators = {
    opciones: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
OpcionesCDOComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-opciones-cdo',
        template: _opciones_cdo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_opciones_cdo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OpcionesCDOComponent);



/***/ }),

/***/ 85371:
/*!*****************************************!*\
  !*** ./src/app/guards/entrena.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrenaGuard": () => (/* binding */ EntrenaGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/dataCompany.service */ 59106);






let EntrenaGuard = class EntrenaGuard {
    constructor(storage, router, menuCtrl, dataCompany) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.dataCompany = dataCompany;
    }
    canActivate(next, state) {
        return this.storage.getLogin().then((data) => {
            if (data.length > 0) {
                this.menuCtrl.enable(true, 'menu');
                if (data[0].typeApp === '2') {
                    this.dataCompany.getVista('3');
                    return true;
                }
                else if (data[0].typeApp === '1') {
                    this.router.navigate(['/forms']);
                    return false;
                }
            }
            else {
                console.log('Entramos al login');
                this.router.navigate(['/login']);
                return false;
            }
        }).catch(() => {
            console.log('Error');
            this.router.navigate(['/login']);
            return false;
        });
    }
};
EntrenaGuard.ctorParameters = () => [
    { type: _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_0__.StorageWebService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_1__.DataComparnyService }
];
EntrenaGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], EntrenaGuard);



/***/ }),

/***/ 80682:
/*!***************************************!*\
  !*** ./src/app/guards/forms.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsGuard": () => (/* binding */ FormsGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/dataCompany.service */ 59106);






let FormsGuard = class FormsGuard {
    constructor(storage, router, menuCtrl, dataCompany) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.dataCompany = dataCompany;
    }
    canActivate(next, state) {
        return this.storage.getLogin().then((data) => {
            if (data.length > 0) {
                this.menuCtrl.enable(true, 'menu');
                if (data[0].typeApp === '2') {
                    this.dataCompany.getVista('3');
                    this.router.navigate(['/list-my-designs']);
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                this.router.navigate(['/login']);
                return false;
            }
        }).catch(() => {
            console.log('Error');
            this.router.navigate(['/login']);
            return false;
        });
    }
};
FormsGuard.ctorParameters = () => [
    { type: _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_0__.StorageWebService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _Services_dataCompany_service__WEBPACK_IMPORTED_MODULE_1__.DataComparnyService }
];
FormsGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], FormsGuard);



/***/ }),

/***/ 82721:
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Storage/StorageWeb.service */ 95829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LoginGuard = class LoginGuard {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canActivate() {
        return this.storage.getLogin().then((data) => {
            if (data.length > 0) {
                if (data[0].typeApp === '2') {
                    this.router.navigate(['/list-my-designs']);
                }
                else {
                    this.router.navigate(['/forms']);
                }
                return false;
            }
            else {
                return true;
            }
        }).catch(() => {
            console.log('Error en auth/serve-store');
            return true;
        });
    }
};
LoginGuard.ctorParameters = () => [
    { type: _Services_Storage_StorageWeb_service__WEBPACK_IMPORTED_MODULE_0__.StorageWebService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
LoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], LoginGuard);



/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "environments": () => (/* binding */ environments)
/* harmony export */ });
const environment = {
    production: true
};
const environments = {
    URL_CLUUD: 'https://cloud.visitrack.com/',
    URL_API: 'https://api.visitrack.com/api/',
    URL_NODE: 'https://www.vtentrena.com',
    // URL_NODE: 'http://localhost:3000',
    //   URL_RESORCES: 'http://localhost:3000/uploads/Entrenamientos/'
    URL_RESORCES: 'https://www.vtentrena.com/uploads/Entrenamientos/'
    //https://www.vtentrena.com/
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "environments": () => (/* binding */ environments)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const environments = {
    URL_CLUUD: 'https://cloud.visitrack.com/',
    URL_API: 'https://api.visitrack.com/api/',
    URL_NODE: 'https://www.vtentrena.com',
    // URL_NODE: 'http://localhost:3000',
    //   URL_RESORCES: 'http://localhost:3000/uploads/Entrenamientos/'
    URL_RESORCES: 'https://www.vtentrena.com/uploads/Entrenamientos/'
    //https://www.vtentrena.com/
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-decd0f85_js-node_modules_ionic_core_dist_esm_t-a92c48",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-decd0f85_js-node_modules_ionic_core_dist_esm_t-a92c48",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 34794:
/*!***************************************************************************!*\
  !*** ./src/app/components/FTYS/address/address.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-input {\n  width: 100%;\n  padding: 0px 20px !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #fafafa;\n  text-align: left;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0w7O0FBRUE7RUFDSyxnQkFBQTtBQUNMOztBQUVBO0VBQ0ssaUJBQUE7QUFDTDs7QUFFQTtFQUNLLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0wiLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBwYWRkaW5nOiAwcHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 60413:
/*!*********************************************************************************!*\
  !*** ./src/app/components/FTYS/cell-phone/cell-phone.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-input {\n  width: 100%;\n  padding: 0px 20px !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #FFF8E7;\n  text-align: center;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbGwtcGhvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0w7O0FBRUE7RUFDSyxnQkFBQTtBQUNMOztBQUVBO0VBQ0ssaUJBQUE7QUFDTDs7QUFFQTtFQUNLLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0wiLCJmaWxlIjoiY2VsbC1waG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBwYWRkaW5nOiAwcHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgYmFja2dyb3VuZDogI0ZGRjhFNztcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 90027:
/*!*****************************************************************************!*\
  !*** ./src/app/components/FTYS/checkbox/checkbox.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ssZ0JBQUE7QUFBTDs7QUFHQTtFQUNLLGlCQUFBO0FBQUw7O0FBR0E7RUFDSyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFMIiwiZmlsZSI6ImNoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1sYWJlbCB7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 66872:
/*!*******************************************************************************!*\
  !*** ./src/app/components/FTYS/date-time/date-time.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-datetime {\n  width: 100%;\n  padding: 10px 20px;\n  background: var(--ion-color-light);\n  border-radius: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0w7O0FBRUE7RUFDSyxnQkFBQTtBQUNMOztBQUVBO0VBQ0ssaUJBQUE7QUFDTDs7QUFFQTtFQUNLLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0wiLCJmaWxlIjoiZGF0ZS10aW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWRhdGV0aW1lIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 18435:
/*!*********************************************************************!*\
  !*** ./src/app/components/FTYS/date/date.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-datetime {\n  width: 100%;\n  padding: 10px 20px;\n  background: var(--ion-color-light);\n  border-radius: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNMOztBQUVBO0VBQ0ssZ0JBQUE7QUFDTDs7QUFFQTtFQUNLLGlCQUFBO0FBQ0w7O0FBRUE7RUFDSyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNMIiwiZmlsZSI6ImRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZGF0ZXRpbWUge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 83785:
/*!***********************************************************************!*\
  !*** ./src/app/components/FTYS/email/email.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-input {\n  width: 100%;\n  padding: 0px 20px !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #FFF8E7;\n  text-align: center;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssV0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNMOztBQUVBO0VBQ0ssZ0JBQUE7QUFDTDs7QUFFQTtFQUNLLGlCQUFBO0FBQ0w7O0FBRUE7RUFDSyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNMIiwiZmlsZSI6ImVtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0e1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHBhZGRpbmc6IDBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICBiYWNrZ3JvdW5kOiAjRkZGOEU3O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 22413:
/*!***********************************************************************!*\
  !*** ./src/app/components/FTYS/forms/forms.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-slides {\n  min-height: 100%;\n}\n\nion-content {\n  height: calc(100% - 100px);\n  position: fixed;\n}\n\nion-footer {\n  background: var(--ion-color-light);\n  position: fixed;\n  bottom: 0;\n}\n\n.botones {\n  display: flex;\n}\n\n.left, .right, .info {\n  width: 33.33%;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.left ion-button, .right ion-button {\n  width: 100%;\n}\n\n.info h3 {\n  color: var(--ion-color-primary);\n}\n\nion-col {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZ0JBQUE7QUFDTDs7QUFFQztFQUNLLDBCQUFBO0VBQ0EsZUFBQTtBQUNOOztBQUVDO0VBQ0ssa0NBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUNOOztBQUVDO0VBQ0ssYUFBQTtBQUNOOztBQUVDO0VBQ0ssYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNOOztBQUVDO0VBQ0ssV0FBQTtBQUNOOztBQUVDO0VBQ0ssK0JBQUE7QUFDTjs7QUFFQztFQUNLLG1CQUFBO0FBQ04iLCJmaWxlIjoiZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gfVxyXG5cclxuIGlvbi1jb250ZW50e1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gfVxyXG4gXHJcbiBpb24tZm9vdGVye1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuIH1cclxuIFxyXG4gLmJvdG9uZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG4gXHJcbiAubGVmdCwgLnJpZ2h0LCAuaW5mbyB7XHJcbiAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAubGVmdCBpb24tYnV0dG9uLCAucmlnaHQgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG4gXHJcbiAuaW5mbyBoMyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiB9XHJcbiBcclxuIGlvbi1jb2x7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiB9Il19 */";

/***/ }),

/***/ 27975:
/*!*******************************************************************************!*\
  !*** ./src/app/components/FTYS/hyperlink/hyperlink.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-button {\n  width: 100%;\n  display: flex;\n  text-align: center;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh5cGVybGluay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDTDs7QUFFQTtFQUNLLGdCQUFBO0FBQ0w7O0FBRUE7RUFDSyxpQkFBQTtBQUNMOztBQUVBO0VBQ0ssYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDTCIsImZpbGUiOiJoeXBlcmxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 75040:
/*!***************************************************************************************!*\
  !*** ./src/app/components/FTYS/numeric-value/numeric-value.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-input {\n  width: 100%;\n  padding: 0px 20px !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #fafafa;\n  text-align: left;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWVyaWMtdmFsdWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0w7O0FBRUE7RUFDSyxnQkFBQTtBQUNMOztBQUVBO0VBQ0ssaUJBQUE7QUFDTDs7QUFFQTtFQUNLLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0wiLCJmaWxlIjoibnVtZXJpYy12YWx1ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBwYWRkaW5nOiAwcHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 985:
/*!*******************************************************************************!*\
  !*** ./src/app/components/FTYS/paragrahp/paragrahp.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".info {\n  text-align: left;\n}\n\nh3 {\n  opacity: 0.7;\n  font-weight: 300;\n}\n\np {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFncmFocC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNLLGdCQUFBO0FBQUw7O0FBR0E7RUFDSyxZQUFBO0VBQ0EsZ0JBQUE7QUFBTDs7QUFHQTtFQUNLLFlBQUE7QUFBTCIsImZpbGUiOiJwYXJhZ3JhaHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmluZm8ge1xyXG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgICBvcGFjaXR5OiAuNztcclxuICAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5we1xyXG4gICAgIG9wYWNpdHk6IC41O1xyXG59Il19 */";

/***/ }),

/***/ 28988:
/*!***********************************************************************!*\
  !*** ./src/app/components/FTYS/phone/phone.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-input {\n  width: 100%;\n  padding: 0px 20px !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #FFF8E7;\n  text-align: center;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssV0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNMOztBQUVBO0VBQ0ssZ0JBQUE7QUFDTDs7QUFFQTtFQUNLLGlCQUFBO0FBQ0w7O0FBRUE7RUFDSyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNMIiwiZmlsZSI6InBob25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0e1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHBhZGRpbmc6IDBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICBiYWNrZ3JvdW5kOiAjRkZGOEU3O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 633:
/*!***************************************************************************************!*\
  !*** ./src/app/components/FTYS/radio-buttons/radio-buttons.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSyxnQkFBQTtBQUFMOztBQUdBO0VBQ0ssaUJBQUE7QUFBTDs7QUFHQTtFQUNLLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUwiLCJmaWxlIjoicmFkaW8tYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tbGFiZWwge1xyXG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 30419:
/*!*******************************************************************************!*\
  !*** ./src/app/components/FTYS/text-line/text-line.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-input {\n  width: 100%;\n  padding: 0px 20px !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #fafafa;\n  text-align: left;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLFdBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDTDs7QUFFQTtFQUNLLGdCQUFBO0FBQ0w7O0FBRUE7RUFDSyxpQkFBQTtBQUNMOztBQUVBO0VBQ0ssYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDTCIsImZpbGUiOiJ0ZXh0LWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgcGFkZGluZzogMHB4IDIwcHggIWltcG9ydGFudDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 18048:
/*!*****************************************************************************!*\
  !*** ./src/app/components/FTYS/textarea/textarea.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-textarea {\n  width: 100%;\n  padding: 0px 20px !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #fcfcfc;\n  text-align: left;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssV0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNMOztBQUVBO0VBQ0ssZ0JBQUE7QUFDTDs7QUFFQTtFQUNLLGlCQUFBO0FBQ0w7O0FBRUE7RUFDSyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNMIiwiZmlsZSI6InRleHRhcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhe1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHBhZGRpbmc6IDBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 36602:
/*!*********************************************************************!*\
  !*** ./src/app/components/FTYS/time/time.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-datetime {\n  width: 100%;\n  padding: 10px 20px;\n  background: var(--ion-color-light);\n  border-radius: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\nion-label {\n  text-align: left;\n}\n\n.icon {\n  margin-right: 2px;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNMOztBQUVBO0VBQ0ssZ0JBQUE7QUFDTDs7QUFFQTtFQUNLLGlCQUFBO0FBQ0w7O0FBRUE7RUFDSyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNMIiwiZmlsZSI6InRpbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZGF0ZXRpbWUge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 36147:
/*!***********************************************************************!*\
  !*** ./src/app/components/FTYS/title/title.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "p {\n  background-color: #f1f1f1;\n  padding: 20px;\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0sseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDTCIsImZpbGUiOiJ0aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO1xyXG4gICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn0iXX0= */";

/***/ }),

/***/ 93611:
/*!********************************************************************************************!*\
  !*** ./src/app/components/Inverpack/usarios-inver/usarios-inver.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2FyaW9zLWludmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 72289:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/asignacionnettsegur/asignacionnettsegur.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWduYWNpb25uZXR0c2VndXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6ImFzaWduYWNpb25uZXR0c2VndXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 85105:
/*!****************************************************************************!*\
  !*** ./src/app/components/carga-task/carga-task.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmdhLXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJjYXJnYS10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 9351:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/controlcdoasistencial/controlcdoasistencial.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".main {\n  width: 100%;\n}\n.main ion-grid {\n  width: 40%;\n  margin: 0;\n}\n.main .campo {\n  width: 100%;\n  background-color: #f1f1f1;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 0;\n  height: 50px;\n  border-radius: 20px;\n}\n.main .tarjetas {\n  width: 100%;\n  display: flex;\n}\n.main .tarjetas ion-card {\n  padding: 10px;\n  background-color: #F3F0F8;\n  width: calc(25% - 20px);\n  margin: 10px;\n}\n.main .tarjetas ion-card ion-card-title {\n  font-size: 22px;\n}\n.main .tarjetas ion-card ion-card-content {\n  font-size: 16px;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  margin: 20px 0;\n  padding: 10px;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.flex img {\n  height: 100px;\n}\n.tit {\n  display: flex;\n}\n.tit ion-avatar {\n  margin: 5px;\n}\n.separador {\n  margin: 10px 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.rojo {\n  background-color: #E9463C;\n  color: #E9463C;\n}\n.amarillo {\n  background-color: #F2E850;\n  color: #F2E850;\n}\n.verde {\n  background-color: #2C6520;\n  color: #2C6520;\n}\n.gris {\n  background-color: #93938B;\n  color: #93938B;\n}\n.azul {\n  background-color: #53B6A4;\n  color: #53B6A4;\n}\n.todos {\n  background: rgb(255, 12, 12);\n  background: radial-gradient(circle, rgb(255, 12, 12) 0%, rgb(230, 114, 15) 30%, rgb(0, 255, 91) 100%);\n}\nion-avatar {\n  width: 20px;\n  height: 20px;\n}\n.solicitudes {\n  margin-bottom: 15px;\n}\n.ldg {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xjZG9hc2lzdGVuY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRVI7QUFEUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0FBSWhCO0FBRlk7RUFDSSxlQUFBO0FBSWhCO0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0FBRVI7QUFFQTtFQUNJLGFBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtBQUVSO0FBRUE7RUFDSSxjQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFDSSw0QkFBQTtFQUNBLHFHQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJjb250cm9sY2RvYXNpc3RlbmNpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaW9uLWdyaWQge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5jYW1wbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgICAudGFyamV0YXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YwRjg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sb2FkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG4udGl0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG59XG5cbi5zZXBhcmFkb3Ige1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnJvam8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOTQ2M0M7XG4gICAgY29sb3I6ICNFOTQ2M0M7XG59XG5cbi5hbWFyaWxsbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRTg1MDtcbiAgICBjb2xvcjogI0YyRTg1MDtcbn1cblxuLnZlcmRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkM2NTIwO1xuICAgIGNvbG9yOiAjMkM2NTIwO1xufVxuXG4uZ3JpcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzOTM4QjtcbiAgICBjb2xvcjogIzkzOTM4Qjtcbn1cblxuLmF6dWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M0I2QTQ7XG4gICAgY29sb3I6ICM1M0I2QTQ7XG59XG5cbi50b2RvcyB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTIsIDEyKTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwgMTIsIDEyLCAxKSAwJSwgcmdiYSgyMzAsIDExNCwgMTUsIDEpIDMwJSwgcmdiYSgwLCAyNTUsIDkxLCAxKSAxMDAlKTtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uc29saWNpdHVkZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sZGcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 91346:
/*!****************************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item {\n  cursor: pointer;\n}\n\nion-footer div {\n  text-align: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxlQUFBO0FBQ0w7O0FBRUE7RUFDSyxrQkFBQTtFQUNBLFdBQUE7QUFDTCIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW9uLWZvb3RlciBkaXYge1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 66394:
/*!**********************************************************************************!*\
  !*** ./src/app/components/modal-assents/modal-assents.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".intentos {\n  background-color: var(--ion-color-medium);\n  color: #ffffff;\n  padding: 10px;\n}\n\n.assent {\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWFzc2VudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0w7O0FBRUE7RUFDSyxhQUFBO0VBQ0EsMkNBQUE7QUFDTCIsImZpbGUiOiJtb2RhbC1hc3NlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludGVudG9ze1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5hc3NlbnQge1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxufSJdfQ== */";

/***/ }),

/***/ 2980:
/*!******************************************************************************!*\
  !*** ./src/app/components/modal-users/modal-users.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 89390:
/*!********************************************************************************!*\
  !*** ./src/app/components/opciones-cdo/opciones-cdo.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".rojo {\n  background-color: #E9463C;\n  color: #E9463C;\n}\n\n.amarillo {\n  background-color: #F2E850;\n  color: #F2E850;\n}\n\n.verde {\n  background-color: #2C6520;\n  color: #2C6520;\n}\n\n.gris {\n  background-color: #93938B;\n  color: #93938B;\n}\n\n.azul {\n  background-color: #53B6A4;\n  color: #53B6A4;\n}\n\n.todos {\n  background: rgb(255, 12, 12);\n  background: radial-gradient(circle, rgb(255, 12, 12) 0%, rgb(230, 114, 15) 30%, rgb(0, 255, 91) 100%);\n}\n\nion-avatar {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wY2lvbmVzLWNkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDSSw0QkFBQTtFQUNBLHFHQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6Im9wY2lvbmVzLWNkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb2pvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTk0NjNDO1xuICAgIGNvbG9yOiAjRTk0NjNDO1xufVxuXG4uYW1hcmlsbG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkU4NTA7XG4gICAgY29sb3I6ICNGMkU4NTA7XG59XG5cbi52ZXJkZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDNjUyMDtcbiAgICBjb2xvcjogIzJDNjUyMDtcbn1cblxuLmdyaXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MzkzOEI7XG4gICAgY29sb3I6ICM5MzkzOEI7XG59XG5cbi5henVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNCNkE0O1xuICAgIGNvbG9yOiAjNTNCNkE0O1xufVxuXG5cbi50b2RvcyB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTIsIDEyKTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwgMTIsIDEyLCAxKSAwJSwgcmdiYSgyMzAsIDExNCwgMTUsIDEpIDMwJSwgcmdiYSgwLCAyNTUsIDkxLCAxKSAxMDAlKTtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <app-menu></app-menu>\n  \n</ion-app>\n";

/***/ }),

/***/ 55723:
/*!***************************************************************************!*\
  !*** ./src/app/components/FTYS/address/address.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   <div class=\"info\">\n    <ion-label>{{ lab }}</ion-label>\n    <div class=\"guia\">\n      <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n      <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n    </div>\n   </div>\n   <ion-list>\n      <ion-item lines=\"none\">\n         <ion-icon name=\"eye-outline\" *ngIf=\"readonly === 'true'\" slot=\"start\"></ion-icon>\n   <ion-input type=\"text\" placeholder=\"{{pho}}\"></ion-input>\n   </ion-item>\n   </ion-list>";

/***/ }),

/***/ 89387:
/*!*********************************************************************************!*\
  !*** ./src/app/components/FTYS/cell-phone/cell-phone.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   <div class=\"info\">\n    <ion-label>{{ lab }}</ion-label>\n    <div class=\"guia\">\n      <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n      <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n    </div>\n   </div>\n   <ion-list>\n      <ion-item lines=\"none\">\n         <ion-icon name=\"eye-outline\" *ngIf=\"readonly === 'true'\" slot=\"start\"></ion-icon>\n   <ion-input type=\"number\" placeholder=\"{{pho}}\"></ion-input>\n   </ion-item>\n   </ion-list>";

/***/ }),

/***/ 25964:
/*!*****************************************************************************!*\
  !*** ./src/app/components/FTYS/checkbox/checkbox.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   <div class=\"info\">\n    <ion-label>{{ lab }}</ion-label>\n    <div class=\"guia\">\n      <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n      <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n    </div>\n   </div>\n   <ion-list>\n    <ion-radio-group value=\"biff\">\n      <ion-item *ngFor=\"let opt of opts\" lines=\"none\">\n        <ion-label>{{ opt.txt }}</ion-label>\n        <ion-checkbox slot=\"start\" value=\"{{ opt.txt }}\"></ion-checkbox>\n      </ion-item>\n   </ion-radio-group>\n   </ion-list>";

/***/ }),

/***/ 50005:
/*!*******************************************************************************!*\
  !*** ./src/app/components/FTYS/date-time/date-time.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n <div class=\"info\">\n  <ion-label>{{ lab }}</ion-label>\n  <div class=\"guia\">\n    <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n    <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n  </div>\n </div>\n <ion-list>\n   <ion-item lines=\"none\">\n    <ion-icon name=\"eye-outline\" slot=\"start\" *ngIf=\"readonly === 'true'\"></ion-icon>\n    <ion-datetime [disabled]=\"readonly === 'true'\" displayFormat=\"DD MMMM YYYY, HH:mm\" placeholder=\"Select Date\" [value]=\"myDate\" display-timezone=\"America/Bogota\">\n    </ion-datetime>\n   </ion-item>\n </ion-list>\n";

/***/ }),

/***/ 60618:
/*!*********************************************************************!*\
  !*** ./src/app/components/FTYS/date/date.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n <div class=\"info\">\n  <ion-label>{{ lab }}</ion-label>\n  <div class=\"guia\">\n    <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n    <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n  </div>\n </div>\n <ion-list>\n   <ion-item lines=\"none\">\n    <ion-icon name=\"eye-outline\" slot=\"start\" *ngIf=\"readonly === 'true'\"></ion-icon>\n    <ion-datetime [disabled]=\"readonly === 'true'\" displayFormat=\"DD MMMM YYYY\" placeholder=\"Select Date\" [value]=\"myDate\" display-timezone=\"America/Bogota\">\n    </ion-datetime>\n   </ion-item>\n </ion-list>\n";

/***/ }),

/***/ 10608:
/*!***********************************************************************!*\
  !*** ./src/app/components/FTYS/email/email.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   <div class=\"info\">\n    <ion-label>{{ lab }}</ion-label>\n    <div class=\"guia\">\n      <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n      <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n    </div>\n   </div>\n   <ion-list>\n      <ion-item lines=\"none\">\n         <ion-icon name=\"eye-outline\" *ngIf=\"readonly === 'true'\" slot=\"start\"></ion-icon>\n   <ion-input type=\"email\" placeholder=\"{{pho}}\"></ion-input>\n   </ion-item>\n   </ion-list>";

/***/ }),

/***/ 73751:
/*!***********************************************************************!*\
  !*** ./src/app/components/FTYS/forms/forms.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>{{ titleForm }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-slides #slide pager=\"true\" (ionSlideDidChange)=\"changePage()\">\n    <ion-slide *ngFor=\"let page of pages\" id=\"{{page.id}}\">\n      <ion-grid >\n        <ion-row *ngFor=\"let fie of page.fie\">\n          <ion-col size=\"10\" offset=\"1\">\n            <app-title *ngIf=\"fie.fty === 'title'\" [fie]=\"fie\" title=\"{{ fie.lab }}\"></app-title>\n\n            <app-text-line *ngIf=\"fie.fty === 'text'\"  id=\"{{ fie.id }}\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" pho=\"{{ fie.pho }}\"></app-text-line>\n\n            <app-date *ngIf=\"fie.fty === 'date'\" readonly=\"{{ fie.rea }}\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\"></app-date>\n\n            <app-time *ngIf=\"fie.fty === 'time'\" readonly=\"{{ fie.rea }}\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\"></app-time>\n\n            <app-address *ngIf=\"fie.fty === 'addressline'\" readonly=\"{{ fie.rea }}\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" pho=\"{{ fie.pho }}\"></app-address>\n\n            <app-email *ngIf=\"fie.fty === 'email'\" readonly=\"{{ fie.rea }}\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" pho=\"{{ fie.pho }}\"></app-email>\n\n            <app-cell-phone *ngIf=\"fie.fty === 'cellphone'\" readonly=\"{{ fie.rea }}\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" pho=\"{{ fie.pho }}\"></app-cell-phone>\n\n            <app-phone *ngIf=\"fie.fty === 'phone'\" readonly=\"{{ fie.rea }}\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" pho=\"{{ fie.pho }}\"></app-phone>\n\n            <app-paragrahp *ngIf=\"fie.fty === 'paragraph'\" txt=\"{{ fie.txt }}\" title=\"{{ fie.tit }}\" ></app-paragrahp>\n\n            <app-textarea *ngIf=\"fie.fty === 'textarea'\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" pho=\"{{ fie.pho }}\" col=\"{{ fie.col }}\" row=\"{{ fie.row }}\"></app-textarea>\n\n            <app-numeric-value *ngIf=\"fie.fty === 'numeric'\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" pho=\"{{ fie.pho }}\"></app-numeric-value>\n            \n\n            <app-radio-buttons *ngIf=\"fie.fty === 'radio'\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" [opts]=\"fie.opt\"></app-radio-buttons>\n\n            <app-checkbox *ngIf=\"fie.fty === 'checkbox'\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" [opts]=\"fie.opt\"></app-checkbox>\n\n            <app-date-time *ngIf=\"fie.fty === 'datetime'\" readonly=\"{{ fie.rea }}\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\"></app-date-time>\n\n            <app-hyperlink *ngIf=\"fie.fty === 'hyperlink'\" readonly=\"{{ fie.rea }}\" lab=\"{{ fie.lab }}\" required=\"{{ fie.req }}\" hel=\"{{ fie.hel }}\" val=\"{{ fie.val }}\"></app-hyperlink>\n\n\n            <app-forms *ngIf=\"fie.fty === 'form'\" Entity=\"4\" [Value]=\"Value\" EntityID=\"{{fie.fid}}\" ></app-forms>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer>\n  <div class=\"botones\">\n    <div class=\"left\">\n      <ion-button *ngIf=\"page > 1\" expand=\"block\" fill=\"clear\" >Anterior</ion-button>\n      <ion-button *ngIf=\"page === 1\" expand=\"block\" fill=\"clear\" >Salir</ion-button>\n    </div>\n    <div class=\"info\">\n      <h3>{{ page }} / {{ pages.length }}</h3>\n    </div>\n    <div class=\"right\">\n      <ion-button expand=\"block\" fill=\"clear\" >Siguiente</ion-button>\n    </div>\n  </div>\n</ion-footer>\n";

/***/ }),

/***/ 95793:
/*!*******************************************************************************!*\
  !*** ./src/app/components/FTYS/hyperlink/hyperlink.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n <div class=\"info\">\n  <ion-chip color=\"success\">Enlace</ion-chip>\n  <div class=\"guia\">\n    <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n    <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n  </div>\n </div>\n    \n    <ion-button [disabled]=\"readonly === 'true'\" color=\"light\" [href]=\"val\" expand=\"block\" mode=\"md\">\n      <ion-icon name=\"eye-outline\" slot=\"start\" *ngIf=\"readonly === 'true'\" shape=\"round\"></ion-icon>\n      <ion-label>{{lab}}</ion-label>\n    </ion-button>\n \n";

/***/ }),

/***/ 45686:
/*!***************************************************************************************!*\
  !*** ./src/app/components/FTYS/numeric-value/numeric-value.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   <div class=\"info\">\n    <ion-label>{{ lab }}</ion-label>\n    <div class=\"guia\">\n      <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n      <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n    </div>\n   </div>\n   <ion-list>\n      <ion-item lines=\"none\">\n         <ion-icon name=\"eye-outline\" *ngIf=\"readonly === 'true'\" slot=\"start\"></ion-icon>\n   <ion-input type=\"number\" placeholder=\"{{pho}}\"></ion-input>\n   </ion-item>\n   </ion-list>";

/***/ }),

/***/ 39696:
/*!*******************************************************************************!*\
  !*** ./src/app/components/FTYS/paragrahp/paragrahp.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"info\">\r\n     <h3>{{title}}</h3>\r\n     <p>{{ txt}}</p>\r\n</div>";

/***/ }),

/***/ 31711:
/*!***********************************************************************!*\
  !*** ./src/app/components/FTYS/phone/phone.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   <div class=\"info\">\n    <ion-label>{{ lab }}</ion-label>\n    <div class=\"guia\">\n      <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n      <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n    </div>\n   </div>\n   <ion-list>\n      <ion-item lines=\"none\">\n         <ion-icon name=\"eye-outline\" *ngIf=\"readonly === 'true'\" slot=\"start\"></ion-icon>\n   <ion-input type=\"number\" placeholder=\"{{pho}}\"></ion-input>\n   </ion-item>\n   </ion-list>";

/***/ }),

/***/ 3657:
/*!***************************************************************************************!*\
  !*** ./src/app/components/FTYS/radio-buttons/radio-buttons.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   <div class=\"info\">\n    <ion-label>{{ lab }}</ion-label>\n    <div class=\"guia\">\n      <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n      <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n    </div>\n   </div>\n   <ion-list>\n    <ion-radio-group value=\"biff\">\n      <ion-item *ngFor=\"let opt of opts\" lines=\"none\">\n        <ion-label>{{ opt.txt }}</ion-label>\n        <ion-radio slot=\"start\" value=\"{{ opt.txt }}\"></ion-radio>\n      </ion-item>\n   </ion-radio-group>\n   </ion-list>";

/***/ }),

/***/ 69569:
/*!*******************************************************************************!*\
  !*** ./src/app/components/FTYS/text-line/text-line.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   <div class=\"info\">\n    <ion-label>{{ lab }}</ion-label>\n    <div class=\"guia\">\n      <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n      <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n    </div>\n   </div>\n   <ion-list>\n      <ion-item lines=\"none\">\n         <ion-icon name=\"eye-outline\" *ngIf=\"readonly === 'true'\" slot=\"start\"></ion-icon>\n   <ion-input placeholder=\"{{pho}}\"></ion-input>\n   </ion-item>\n   </ion-list>";

/***/ }),

/***/ 60602:
/*!*****************************************************************************!*\
  !*** ./src/app/components/FTYS/textarea/textarea.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n   <div class=\"info\">\n    <ion-label>{{ lab }}</ion-label>\n    <div class=\"guia\">\n      <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n      <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n    </div>\n   </div>\n   <ion-list>\n      <ion-item lines=\"none\">\n         <ion-icon name=\"eye-outline\" *ngIf=\"readonly === 'true'\" slot=\"start\"></ion-icon>\n   <ion-textarea [rows]=\"row\" [cols]=\"col\" placeholder=\"{{pho}}\"></ion-textarea>\n   </ion-item>\n   </ion-list>";

/***/ }),

/***/ 95682:
/*!*********************************************************************!*\
  !*** ./src/app/components/FTYS/time/time.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n <div class=\"info\">\n  <ion-label>{{ lab }}</ion-label>\n  <div class=\"guia\">\n    <ion-chip color=\"warning\" *ngIf=\"hel !== ''\">{{ hel }}</ion-chip>\n    <ion-chip color=\"danger\" *ngIf=\"required === 'true'\"><ion-icon class=\"icon\" name=\"alert-circle-outline\"></ion-icon> Requerido</ion-chip>\n  </div>\n </div>\n <ion-list>\n   <ion-item lines=\"none\">\n    <ion-icon name=\"eye-outline\" slot=\"start\" *ngIf=\"readonly === 'true'\"></ion-icon>\n    <ion-datetime [disabled]=\"readonly === 'true'\" displayFormat=\"HH:mm\" placeholder=\"Select Date\" [value]=\"myDate\" display-timezone=\"America/Bogota\">\n    </ion-datetime>\n   </ion-item>\n </ion-list>\n";

/***/ }),

/***/ 44153:
/*!***********************************************************************!*\
  !*** ./src/app/components/FTYS/title/title.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  {{title}}\n</p>\n";

/***/ }),

/***/ 81818:
/*!********************************************************************************************!*\
  !*** ./src/app/components/Inverpack/usarios-inver/usarios-inver.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"warning\">\n      <ion-title>Asignación</ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-button (click)=\"close()\">\n              <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n\n  <div >\n\n      <h3>Formularios creados</h3> <br>\n\n      <ion-item>\n        <ion-label>Tènicos</ion-label>\n     \n        <ion-select placeholder=\"Seleccione\" (ionChange)=\"cambiar($event, 2)\">\n          <ion-select-option [value]=\"{guid: 'B0C8BA3F-757C-44BC-A363-02F4D7B26BA0', name: 'DIEGO CHAMORRO'}\">DIEGO CHAMORRO</ion-select-option>\n          <ion-select-option [value]=\"{guid: 'D1016D99-0FAA-4C96-B811-77175E9A1B34', name: 'ROLANDO SALAZAR ERAZO'}\">ROLANDO SALAZAR ERAZO</ion-select-option>\n          <ion-select-option [value]=\"{guid: '2219E883-62EE-4129-9B2D-53778716339C', name: 'SERGIO DAVID ELVIRA ELVIRA'}\">SERGIO DAVID ELVIRA ELVIRA</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Prioridad</ion-label>\n     \n        <ion-select placeholder=\"Seleccione\" (ionChange)=\"cambiar($event, 1)\">\n          <ion-select-option value=\"ALTA\">ALTA</ion-select-option>\n          <ion-select-option value=\"MEDIA\">MEDIA</ion-select-option>\n          <ion-select-option value=\"BAJA\">BAJA</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n    \n\n  \n  </div>\n\n\n\n  <ion-button [disabled]=\"!prioridad || !tecnico\" mode=\"ios\" color=\"warning\" expand=\"block\" (click)=\"assign()\">Asignar</ion-button>\n\n</ion-content>";

/***/ }),

/***/ 44534:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/asignacionnettsegur/asignacionnettsegur.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n        <ion-title>Asignación</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"close()\">\n                <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <h3>{{ selectUsersList.length }} usuarios seleccionados</h3> <br>\n\n    <ion-item *ngFor=\"let user of users\">\n\n        <ion-checkbox (ionChange)=\"select($event)\" [value]=\"user\" mode=\"ios\" slot=\"start\" color=\"tertiary\"></ion-checkbox>\n        <ion-label>{{ user.FirstName }} {{ user.LastName }}</ion-label>\n\n    </ion-item> <br>\n    <ion-item color=\"light\" (click)=\"cs()\">\n        <ion-label>Seleccione fecha</ion-label>\n        <input type=\"date\" [(ngModel)]=\"fecha\">\n    </ion-item> <br> <br>\n\n    <div *ngIf=\"!load\">\n\n        <h3>Formularios creados</h3> <br>\n\n        <ion-item *ngFor=\"let user of generados\">\n\n            <ion-icon *ngIf=\"user.status\" color=\"success\" name=\"checkmark-done-circle\" slot=\"start\"></ion-icon>\n            <ion-icon *ngIf=\"!user.status\" color=\"danger\" name=\"close-circle\" slot=\"start\"></ion-icon>\n            <ion-label>{{ user.user }} </ion-label>\n\n        </ion-item> <br>\n\n        <div class=\"loading\">\n            <ion-spinner name=\"crescent\"></ion-spinner>\n            <h3>Creando actividades</h3>\n        </div>\n\n    </div>\n\n\n\n    <ion-button *ngIf=\"select.length > 0 && fecha\" mode=\"ios\" color=\"tertiary\" expand=\"block\" (click)=\"createActivities()\">Crear asignaciones</ion-button>\n\n</ion-content>";

/***/ }),

/***/ 80912:
/*!****************************************************************************!*\
  !*** ./src/app/components/carga-task/carga-task.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"agilissa\">\n      <ion-title>Actividades</ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-button (click)=\"close()\">\n              <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item lines=\"none\">\n    <ion-label>\n      <div class=\"flex\">\n        <h4>Actividades subidas</h4>\n        <h4>{{list.length}}</h4>\n\n        </div>\n    </ion-label>\n  </ion-item>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of list\">\n      <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\n      <ion-label>{{ item.tipo }} </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <div class=\"loading\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <h3>Creando actividades</h3>\n</div>\n</ion-content>";

/***/ }),

/***/ 87512:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/controlcdoasistencial/controlcdoasistencial.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n\n    <ion-toolbar color=\"dark\">\n\n        <ion-title>CONTROL SOLICITUDES </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Solcicitud\" (ionChange)=\"buscar($event)\"></ion-searchbar>\n\n\n\n    <div>\n        <ion-card class=\"solicitudes\" lines=\"none\" *ngFor=\"let item of tabla | filtrosolicpadres : txt; let i = index; \">\n\n            <ion-card-header class=\"ion-padding\">\n                <ion-card-title>{{item.hab}}</ion-card-title>\n                <ion-card-subtitle>{{item.cam}}</ion-card-subtitle>\n            </ion-card-header>\n\n\n\n\n\n            <ion-card-content>\n\n                <div class=\"separador\"></div>\n\n                <div class=\"flex\">\n                    <div class=\"tit\">\n                        <ion-avatar class=\"verde\"></ion-avatar>\n                        Completado\n                    </div>\n                    <strong>{{ item.verdes }}</strong>\n                </div>\n\n                <div class=\"flex\">\n                    <div class=\"tit\">\n                        <ion-avatar class=\"amarillo\"></ion-avatar>\n                        En progreso\n                    </div>\n                    <strong>{{ item.amarillos }}</strong>\n                </div>\n\n                <div class=\"flex\">\n                    <div class=\"tit\">\n                        <ion-avatar class=\"rojo\"></ion-avatar>\n                        Pentientes aseo\n                    </div>\n                    <strong>{{ item.rojos }}</strong>\n                </div>\n\n                <div class=\"flex\">\n                    <div class=\"tit\">\n                        <ion-avatar class=\"gris\"></ion-avatar>\n                        Cancelados\n                    </div>\n                    <strong>{{ item.grises }}</strong>\n                </div> <br>\n\n\n                <div class=\"flex\">\n                    <div class=\"tit ion-text-wrap\">\n                        <ion-avatar class=\"azul\"></ion-avatar>\n                        Eliminadas por limpieza previa a solicitud\n                    </div>\n                    <strong>{{ item.azules }}</strong>\n                </div> <br>\n\n                <div class=\"ldg\" *ngIf=\"item.ldg\">\n                    <ion-spinner name=\"crescent\"></ion-spinner>\n                    <h4>Cambiando estado, por favor espere</h4>\n                </div>\n\n                <ion-button *ngIf=\"item.rojos > 0 && item.verdes == 0 && item.grises == 0 && item.amarillos == 0\" expand=\"block\" color=\"danger\" mode=\"iod\" (click)=\"eliminar(item, i)\">Eliminar</ion-button>\n\n            </ion-card-content>\n        </ion-card> <br> <br>\n    </div>\n\n\n\n</ion-content>";

/***/ }),

/***/ 22574:
/*!****************************************************************!*\
  !*** ./src/app/components/menu/menu.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-split-pane contentId=\"menu\">\n    <ion-menu side=\"start\" menuId=\"menu\" contentId=\"menu\">\n\n        <ion-header class=\"ion-no-border\">\n            <ion-toolbar color=\"dark\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"12\" class=\"center\">\n                            <img *ngIf=\"logo != ''\" [src]=\"logo\" width=\"150px\">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"12\" class=\"center\">\n                            <strong *ngIf=\"name !== ''\">{{ name }}</strong>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content color=\"dark\" *ngIf=\"view === '1' && ext === false\">\n            <ion-list class=\"dark\" color=\"dark\">\n\n                <ion-item color=\"dark\" (click)=\"navigate(1)\">\n                    <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>Formularios</ion-label>\n                </ion-item>\n\n                <ion-item color=\"dark\" (click)=\"navigate(2)\">\n                    <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>Ubicaciones</ion-label>\n                </ion-item>\n\n                <ion-item color=\"dark\" (click)=\"navigate(3)\">\n                    <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>Conversaciones</ion-label>\n                </ion-item>\n\n                <ion-item color=\"dark\" (click)=\"navigate(4)\">\n                    <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>Configuracion</ion-label>\n                </ion-item>\n\n                <ion-item color=\"dark\" (click)=\"navigate(5)\">\n                    <ion-icon name=\"heart\" (click)=\"help()\" slot=\"start\"></ion-icon>\n                    <ion-label>Repositorio</ion-label>\n                </ion-item>\n\n                <ion-item color=\"dark\" (click)=\"navigate(7)\">\n                    <ion-icon name=\"heart\" (click)=\"help()\" slot=\"start\"></ion-icon>\n                    <ion-label>Render</ion-label>\n                </ion-item>\n\n                <ion-item color=\"dark\" (click)=\"navigate(6)\">\n                    <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>Cerrar Sesión</ion-label>\n                </ion-item>\n\n            </ion-list>\n\n        </ion-content>\n\n\n\n        <ion-content color=\"dark\" *ngIf=\"view === '2' && ext === false\">\n            <ion-list class=\"dark\" color=\"dark\">\n                <ion-item-divider color=\"users\">\n                    <h5>Usuarios conectados </h5>\n                </ion-item-divider>\n                <ion-item color=\"dark\" *ngFor=\"let user of users | userss:'inter'\">\n                    <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n                    <ion-label>{{ user.userName }}</ion-label>\n                </ion-item>\n\n                <ion-item-divider color=\"users\">\n                    <h5>Clientes conectados</h5>\n                </ion-item-divider>\n\n                <ion-item color=\"dark\" *ngFor=\"let user of users | userss:'exter'\">\n                    <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n                    <ion-label>{{ user.userName }}</ion-label>\n                </ion-item>\n            </ion-list>\n\n        </ion-content>\n\n\n        <ion-content color=\"dark\" *ngIf=\"view === '2' && ext\">\n            <ion-list class=\"dark\" color=\"dark\">\n                <ion-item-divider color=\"users\">\n                    <h5>Menu</h5>\n                </ion-item-divider>\n                <ion-item color=\"dark\" (click)=\"navigate(3)\">\n                    <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>Conversaciones</ion-label>\n                </ion-item>\n\n                <ion-item color=\"dark\" (click)=\"navigate(4)\">\n                    <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>Configuracion</ion-label>\n                </ion-item>\n\n                <ion-item color=\"dark\" (click)=\"navigate(5)\">\n                    <ion-icon name=\"heart\" (click)=\"help()\" slot=\"start\"></ion-icon>\n                    <ion-label>Repositorio</ion-label>\n                </ion-item>\n            </ion-list>\n\n        </ion-content>\n\n\n\n        <ion-content color=\"dark\" *ngIf=\"view === '3'\">\n            <ion-list class=\"dark\" color=\"dark\">\n\n                <ion-item *ngIf=\"role === 'ADMIN_ENTRENA'\" color=\"dark\" (click)=\"navigate(13)\">\n                    <ion-icon name=\"pencil\" slot=\"start\"></ion-icon>\n                    <ion-label>Modulo de diseño</ion-label>\n                </ion-item>\n\n                <ion-item color=\"dark\" (click)=\"navigate(14)\">\n                    <ion-icon name=\"list\" slot=\"start\"></ion-icon>\n                    <ion-label>Lista de Entrenamientos</ion-label>\n                </ion-item>\n\n                <ion-item *ngIf=\"role === 'ADMIN_ENTRENA'\" color=\"dark\" (click)=\"navigate(11)\">\n                    <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\n                    <ion-label>Administración de usuarios</ion-label>\n                </ion-item>\n\n                <ion-item *ngIf=\"role === 'ADMIN_ENTRENA'\" color=\"dark\" (click)=\"navigate(12)\">\n                    <ion-icon name=\"color-palette\" slot=\"start\"></ion-icon>\n                    <ion-label>Preferencias</ion-label>\n                </ion-item>\n\n\n                <ion-item color=\"dark\" (click)=\"navigate(6)\">\n                    <ion-icon name=\"power\" slot=\"start\"></ion-icon>\n                    <ion-label>Cerrar Sesión</ion-label>\n                </ion-item>\n\n            </ion-list>\n\n        </ion-content>\n\n\n\n\n        <ion-footer *ngIf=\"view === '2' && ext\">\n            <ion-toolbar color=\"danger\">\n                <ion-list class=\"danger\">\n\n                    <ion-item color=\"danger\" (click)=\"navigate(6)\">\n                        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                        <ion-label>Salir de la app</ion-label>\n                    </ion-item>\n                </ion-list>\n            </ion-toolbar>\n        </ion-footer>\n\n        <ion-footer *ngIf=\"view === '2' && ext === false\">\n            <ion-toolbar color=\"danger\">\n                <ion-list class=\"danger\">\n\n                    <ion-item color=\"danger\" (click)=\"navigate(1)\">\n                        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                        <ion-label>Salir de la sala</ion-label>\n                    </ion-item>\n                </ion-list>\n            </ion-toolbar>\n        </ion-footer>\n\n        <ion-footer>\n            <ion-toolbar color=\"dark\">\n                <div>Visitrack &copy; 2021</div>\n            </ion-toolbar>\n        </ion-footer>\n\n    </ion-menu>\n    <ion-router-outlet id=\"menu\"></ion-router-outlet>\n</ion-split-pane>";

/***/ }),

/***/ 82025:
/*!**********************************************************************************!*\
  !*** ./src/app/components/modal-assents/modal-assents.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Historial de Modulos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar mode=\"ios\" placeholder=\"Buscar Modulo\" (ionChange)=\"changeText( $event )\"></ion-searchbar>\n\n<ion-list>\n  <ion-item-sliding *ngFor=\"let mydesign of listDesigns | search : text : 'name'; let i = index;\">\n   <ion-item >\n     <ion-label>\n       <strong>{{ mydesign.name }}</strong><br>\n       <strong>Creado: </strong> {{ mydesign.dateCreated }} \n       <br> <br>\n\n       <div class=\"intentos\">\n        Cantidad de Intentos {{mydesign.assents.length}}\n      </div> <br>\n       <div class=\"assent\" *ngFor=\"let assent of mydesign.assents; let i = index;\">\n         <div>Intento {{ i + 1 }}</div>\n         <strong>Promedio: {{ assent.JSONEntrena.tot }}</strong>\n       </div>\n     </ion-label>\n      \n   </ion-item>\n\n  </ion-item-sliding>\n </ion-list>\n</ion-content>";

/***/ }),

/***/ 6950:
/*!******************************************************************************!*\
  !*** ./src/app/components/modal-users/modal-users.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n        <ion-title>Asignaciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Modulo\" (ionChange)=\"changeText( $event )\"></ion-searchbar>\n\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let mydesign of listDesigns | search : text : 'name'; let i = index;\">\n            <ion-item>\n                <ion-label>\n                    <strong>{{ mydesign.name }}</strong><br>\n                    <strong>Creado: </strong> {{ mydesign.dateCreated }}\n                </ion-label>\n\n                <ion-button *ngIf=\"!mydesign.active\" slot=\"end\" mode=\"ios\" color='success' (click)=\"assign(mydesign._id, mydesign.active, i)\">ASIGNAR</ion-button>\n                <ion-button *ngIf=\"mydesign.active\" slot=\"end\" mode=\"ios\" color='danger' (click)=\"assign(mydesign._id, mydesign.active, i)\">QUITAR</ion-button>\n\n            </ion-item>\n\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>";

/***/ }),

/***/ 86334:
/*!********************************************************************************!*\
  !*** ./src/app/components/opciones-cdo/opciones-cdo.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n    <ion-item *ngFor=\"let item of opciones\" (click)=\"seleccion(item)\">\n        <ion-avatar slot=\"start\" *ngIf=\"item == 'CANCELADO POR DEMORA'\" class=\"gris\"></ion-avatar>\n        <ion-avatar slot=\"start\" *ngIf=\"item == 'Completado'\" class=\"verde\"></ion-avatar>\n        <ion-avatar slot=\"start\" *ngIf=\"item == 'EN PROCESO DE ASEO'\" class=\"amarillo\"></ion-avatar>\n        <ion-avatar slot=\"start\" *ngIf=\"item == 'PENDIENTE ASEO'\" class=\"rojo\"></ion-avatar>\n        <ion-avatar slot=\"start\" *ngIf=\"item == 'ELIMINADA POR LIMPIEZA PREVIA A SOLICITUD'\" class=\"azul\"></ion-avatar>\n        <ion-avatar slot=\"start\" *ngIf=\"item == 'Todos'\" class=\"todos\"></ion-avatar>\n        <ion-label class=\"ion-text-wrap\">{{ item }}</ion-label>\n    </ion-item>\n</ion-list>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map