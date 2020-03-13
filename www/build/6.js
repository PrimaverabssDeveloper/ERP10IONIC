webpackJsonp([6],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientesPageModule = /** @class */ (function () {
    function ClientesPageModule() {
    }
    ClientesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */]),
            ],
        })
    ], ClientesPageModule);
    return ClientesPageModule;
}());

//# sourceMappingURL=clientes.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientesPage = /** @class */ (function () {
    function ClientesPage(navCtrl, clientesProvider) {
        this.navCtrl = navCtrl;
        this.clientesProvider = clientesProvider;
    }
    ClientesPage.prototype.ionViewDidLoad = function () {
        this.getBaseClientes();
    };
    ClientesPage.prototype.doRefresh = function (refresher) {
        this.getBaseClientes();
        refresher.complete();
    };
    ClientesPage.prototype.openPage = function (cliente) {
        this.navCtrl.push('EditaClientesPage', { clientes: cliente });
    };
    ClientesPage.prototype.getBaseClientes = function () {
        var _this = this;
        this.clientesProvider.getBaseClientes().subscribe(function (data) {
            _this.clientes = data.DataSet.Table;
        });
    };
    ClientesPage.prototype.removeCliente = function (cliente) {
        this.clientesProvider.removeCliente(cliente);
    };
    ClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clientes',template:/*ion-inline-start:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\clientes\clientes.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Clientes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Puxe para atualizar" refreshingSpinner="circles"\n\n      refreshingText="Carregando...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let cliente of clientes">\n\n      <button ion-item (click)="openPage(cliente.Cliente)">\n\n        <h2>{{cliente.Cliente}} - {{cliente.Nome}}</h2>\n\n        <p>{{cliente.Fac_Mor}} - {{cliente.Pais}}</p>\n\n      </button>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="primary" (click)="openPage(cliente.Cliente)">\n\n          <ion-icon name="text"></ion-icon>\n\n          Editar\n\n        </button>\n\n        <button ion-button color="danger" (click)="removeCliente(cliente.Cliente)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Remover\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\clientes\clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */]])
    ], ClientesPage);
    return ClientesPage;
}());

//# sourceMappingURL=clientes.js.map

/***/ })

});
//# sourceMappingURL=6.js.map