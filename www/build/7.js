webpackJsonp([7],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtigosPageModule", function() { return ArtigosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artigos__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArtigosPageModule = /** @class */ (function () {
    function ArtigosPageModule() {
    }
    ArtigosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__artigos__["a" /* ArtigosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__artigos__["a" /* ArtigosPage */]),
            ],
        })
    ], ArtigosPageModule);
    return ArtigosPageModule;
}());

//# sourceMappingURL=artigos.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtigosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_artigos_artigos__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtigosPage = /** @class */ (function () {
    function ArtigosPage(navCtrl, artigosProvider) {
        this.navCtrl = navCtrl;
        this.artigosProvider = artigosProvider;
    }
    ArtigosPage.prototype.ionViewDidLoad = function () {
        this.getBaseArtigos();
    };
    ArtigosPage.prototype.doRefresh = function (refresher) {
        this.getBaseArtigos();
        refresher.complete();
    };
    ArtigosPage.prototype.openPage = function (artigo) {
        this.navCtrl.push('EditaArtigosPage', { artigos: artigo });
    };
    ArtigosPage.prototype.getBaseArtigos = function () {
        var _this = this;
        this.artigosProvider.getBaseArtigos().subscribe(function (data) {
            _this.artigos = data.DataSet.Table;
        });
    };
    ArtigosPage.prototype.removeArtigo = function (artigo) {
        this.artigosProvider.removeArtigo(artigo);
    };
    ArtigosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-artigos',template:/*ion-inline-start:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\artigos\artigos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Artigos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Puxe para atualizar" refreshingSpinner="circles"\n\n      refreshingText="Carregando...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let artigo of artigos">\n\n      <button ion-item (click)="openPage(artigo.Artigo)">\n\n        <h2>{{artigo.Artigo}}</h2>\n\n        <p>{{artigo.Descricao}}</p>\n\n      </button>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="primary" (click)="openPage(artigo.Artigo)">\n\n          <ion-icon name="text"></ion-icon>\n\n          Editar\n\n        </button>\n\n        <button ion-button color="danger" (click)="removeArtigo(artigo.Artigo)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Remover\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\artigos\artigos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_artigos_artigos__["a" /* ArtigosProvider */]])
    ], ArtigosPage);
    return ArtigosPage;
}());

//# sourceMappingURL=artigos.js.map

/***/ })

});
//# sourceMappingURL=7.js.map