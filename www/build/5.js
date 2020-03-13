webpackJsonp([5],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriaArtigosPageModule", function() { return CriaArtigosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cria_artigos__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CriaArtigosPageModule = /** @class */ (function () {
    function CriaArtigosPageModule() {
    }
    CriaArtigosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cria_artigos__["a" /* CriaArtigosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cria_artigos__["a" /* CriaArtigosPage */]),
            ],
        })
    ], CriaArtigosPageModule);
    return CriaArtigosPageModule;
}());

//# sourceMappingURL=cria-artigos.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriaArtigosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_artigos_artigos__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_artigos__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_messages__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_controllers__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CriaArtigosPage = /** @class */ (function () {
    function CriaArtigosPage(navCtrl, navParams, artigosProvider, formBuilder, artigosValidator, messagesValidator, controllers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.artigosProvider = artigosProvider;
        this.formBuilder = formBuilder;
        this.artigosValidator = artigosValidator;
        this.messagesValidator = messagesValidator;
        this.controllers = controllers;
        this.artigosObj = {};
        this.validationMessages = this.messagesValidator.criarArtigo();
        this.criaArtigosForm = this.formBuilder.group({
            artigo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]), artigosValidator.checkArtigoExiste.bind(artigosValidator)),
            descricao: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(2)])),
            codBarras: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(12)])),
            unidadeBase: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])),
            observacoes: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])),
            iva: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]), artigosValidator.ivaValidator.bind(artigosValidator)),
            peso: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])),
            volume: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]))
        });
    }
    CriaArtigosPage.prototype.criarArtigo = function () {
        var _this = this;
        var msg = "A criar artigo..";
        var loader = this.controllers.loader(msg);
        loader.present().then(function () {
            _this.artigosProvider.criarArtigo(_this.artigosObj);
        });
        loader.onDidDismiss(function () {
            var msg = "Artigo " + _this.artigosObj.Artigo + " criado com sucesso";
            _this.controllers.toastController(msg);
            _this.navCtrl.setRoot('ArtigosPage');
        });
    };
    CriaArtigosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cria-artigos',template:/*ion-inline-start:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\cria-artigos\cria-artigos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Criar Artigo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-list>\n      <form [formGroup]="criaArtigosForm">\n        <ion-item>\n          <ion-label color="primary">Artigo</ion-label>\n          <ion-input type="text" formControlName="artigo" [(ngModel)]="artigosObj.Artigo" name="artigo"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!criaArtigosForm.controls.artigo.valid && !criaArtigosForm.controls.artigo.pending && criaArtigosForm.controls.artigo.dirty ">\n          <p>Esse Artigo já existe</p>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.artigo">\n          <ion-item *ngIf="criaArtigosForm.controls.artigo.hasError(validation.type) && criaArtigosForm.controls.artigo.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Descrição</ion-label>\n          <ion-input type="text" formControlName="descricao" [(ngModel)]="artigosObj.Descricao" name="descricao"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.descricao">\n          <ion-item *ngIf="criaArtigosForm.controls.descricao.hasError(validation.type) && criaArtigosForm.controls.descricao.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Código de Barras</ion-label>\n          <ion-input type="text" formControlName="codBarras" [(ngModel)]="artigosObj.CodBarras" name="codBarras"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.codBarras">\n          <ion-item *ngIf="criaArtigosForm.controls.codBarras.hasError(validation.type) && criaArtigosForm.controls.codBarras.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Unidade Base</ion-label>\n          <ion-input placeholder="UN" type="text" formControlName="unidadeBase" [(ngModel)]="artigosObj.UnidadeBase"\n            name="unidadeBase"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.unidadeBase">\n          <ion-item *ngIf="criaArtigosForm.controls.unidadeBase.hasError(validation.type) && criaArtigosForm.controls.unidadeBase.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">IVA</ion-label>\n          <ion-input type="number" formControlName="iva" [(ngModel)]="artigosObj.IVA" name="iva"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.iva">\n          <ion-item *ngIf="criaArtigosForm.controls.iva.hasError(validation.type) && criaArtigosForm.controls.iva.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Peso</ion-label>\n          <ion-input type="number" min="0" max="1000" formControlName="peso" [(ngModel)]="artigosObj.Peso" name="peso"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary">Volume</ion-label>\n          <ion-input type="number" min="0" max="1000" formControlName="volume" [(ngModel)]="artigosObj.Volume" name="Volume"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary">Observações</ion-label>\n          <ion-textarea type="text" formControlName="observacoes" rows="3" [(ngModel)]="artigosObj.Observacoes" name="observacoes"></ion-textarea>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.marca">\n          <ion-item *ngIf="criaArtigosForm.controls.observacoes.hasError(validation.type) && criaArtigosForm.controls.observacoes.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <button ion-button item-right (click)="criarArtigo()" [disabled]="!criaArtigosForm.valid">Confirmar</button>\n        </ion-item>\n      </form>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\cria-artigos\cria-artigos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_artigos_artigos__["a" /* ArtigosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__validators_artigos__["a" /* ArtigosValidator */],
            __WEBPACK_IMPORTED_MODULE_5__validators_messages__["a" /* MessagesValidator */],
            __WEBPACK_IMPORTED_MODULE_6__controllers_controllers__["a" /* Controllers */]])
    ], CriaArtigosPage);
    return CriaArtigosPage;
}());

//# sourceMappingURL=cria-artigos.js.map

/***/ })

});
//# sourceMappingURL=5.js.map