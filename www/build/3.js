webpackJsonp([3],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoVendaPageModule", function() { return DocumentoVendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documento_venda__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentoVendaPageModule = /** @class */ (function () {
    function DocumentoVendaPageModule() {
    }
    DocumentoVendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__documento_venda__["a" /* DocumentoVendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__documento_venda__["a" /* DocumentoVendaPage */]),
            ],
        })
    ], DocumentoVendaPageModule);
    return DocumentoVendaPageModule;
}());

//# sourceMappingURL=documento-venda.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentoVendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_documento_venda_documento_venda__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_documento__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_clientes__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_artigos__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validators_messages__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controllers_controllers__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DocumentoVendaPage = /** @class */ (function () {
    function DocumentoVendaPage(navCtrl, navParams, docValidator, formBuilder, docProvider, clienteValidator, artigosValidator, authProvider, messagesValidator, controllers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.docValidator = docValidator;
        this.formBuilder = formBuilder;
        this.docProvider = docProvider;
        this.clienteValidator = clienteValidator;
        this.artigosValidator = artigosValidator;
        this.authProvider = authProvider;
        this.messagesValidator = messagesValidator;
        this.controllers = controllers;
        this.documentoObj = {};
        this.docFields = {};
        this.validationMessages = this.messagesValidator.documentoVendas();
        this.docForm = this.formBuilder.group({
            documento: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('[a-zA-Z]*')]), docValidator.checkDocumento.bind(docValidator)),
            serie: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])),
            dataDoc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](''),
            dataVenc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](''),
            cliente: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]), docValidator.checkCliente.bind(docValidator)),
            artigo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]), docValidator.checkArtigo.bind(docValidator)),
            quantidade: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]), docValidator.quantidadeValidator.bind(docValidator)),
        });
        this.documentoObj.Linhas = new Array();
    }
    DocumentoVendaPage.prototype.ionViewCanEnter = function () {
        return this.authProvider.isAuthenticated(this.navCtrl);
    };
    DocumentoVendaPage.prototype.getSerie = function () {
        var _this = this;
        this.docProvider.getSeries(this.documentoObj.Tipodoc).subscribe(function (data) {
            _this.series = data;
        });
    };
    DocumentoVendaPage.prototype.daValorDocumento = function () {
        var _this = this;
        var atributo = "Descricao";
        this.docProvider.daValorDocumento(this.documentoObj.Tipodoc, atributo).subscribe(function (data) {
            _this.docFields.DescricaoDoc = data;
        });
    };
    DocumentoVendaPage.prototype.daValorCliente = function () {
        var _this = this;
        var atributos = [
            "Nome",
            "NumContribuinte"
        ];
        this.clienteValidator.daValorCliente(this.documentoObj.Entidade, atributos).then(function (data) {
            _this.docFields.NomeCliente = data[0].Valor;
            _this.docFields.NumContribuinte = data[1].Valor;
        });
    };
    DocumentoVendaPage.prototype.daValorArtigo = function () {
        var _this = this;
        var atributos = [
            "Descricao",
            "ArmazemSugestao"
        ];
        this.artigosValidator.daValorArtigo(this.docFields.Artigo, atributos).then(function (data) {
            _this.docFields.DescricaoArtigo = data[0].Valor;
            _this.docFields.ArmazemArtigo = data[1].Valor;
        });
    };
    DocumentoVendaPage.prototype.addArtigo = function () {
        this.documentoObj.Linhas.push({
            Artigo: this.docFields.Artigo,
            Quantidade: this.docFields.Quantidade
        });
        this.linhas = this.documentoObj.Linhas;
    };
    DocumentoVendaPage.prototype.removeArtigo = function (artigo) {
        var _this = this;
        this.documentoObj.Linhas.forEach(function (item, index) {
            if (item === artigo)
                _this.documentoObj.Linhas.splice(index, 1);
        });
    };
    DocumentoVendaPage.prototype.createDocument = function () {
        var _this = this;
        this.documentoObj.TipoEntidade = "C";
        var msg = "A criar documento..";
        var loader = this.controllers.loader(msg);
        loader.present().then(function () {
            _this.docProvider.createDocument(_this.documentoObj);
        });
        console.log(this.documentoObj);
    };
    DocumentoVendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documento-venda',template:/*ion-inline-start:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\documento-venda\documento-venda.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Documento de Venda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <form [formGroup]="docForm">\n      <ion-item no-lines>\n        <ion-label color="primary">Documento</ion-label>\n        <ion-input type="text" formControlName="documento" (ionBlur)="getSerie(); daValorDocumento()" [(ngModel)]="documentoObj.Tipodoc"\n          name="documento"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!docForm.controls.documento.valid && !docForm.controls.documento.pending && docForm.controls.documento.dirty ">\n        <p>Documento não é válido</p>\n      </ion-item>\n      <div *ngFor="let validation of validationMessages.documento">\n        <ion-item *ngIf="docForm.controls.documento.hasError(validation.type) && docForm.controls.documento.touched">\n          <sup ion-text color="danger">{{validation.message}}</sup>\n        </ion-item>\n      </div>\n      <ion-item *ngIf="docForm.controls.documento.valid">\n        <h5 ion-text color="secondary">{{docFields.DescricaoDoc}}</h5>\n      </ion-item>\n      <ion-item>\n        <ion-label item-left color="primary">Série</ion-label>\n        <ion-select item-left formControlName="serie" [(ngModel)]="documentoObj.Serie" name="serie">\n          <ion-option *ngFor="let serie of series" [value]="serie.Serie" [selected]="serie.Serie">{{serie.Serie}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div *ngFor="let validation of validationMessages.serie">\n        <ion-item *ngIf="docForm.controls.serie.hasError(validation.type) && docForm.controls.serie.touched">\n          <sup ion-text color="danger">{{validation.message}}</sup>\n        </ion-item>\n      </div>\n      <ion-item>\n        <ion-label color="primary">Data Documento</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" formControlName="dataDoc" max="2030" [(ngModel)]="documentoObj.DataDoc"\n          name="DataDoc"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Data Vencimento</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" formControlName="dataVenc" max="2030" [(ngModel)]="documentoObj.DataVenc"\n          name="DataVenc"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Cliente</ion-label>\n        <ion-input type="text" formControlName="cliente" [(ngModel)]="documentoObj.Entidade" name="cliente" (ionBlur)="daValorCliente()"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!docForm.controls.cliente.valid && docForm.controls.cliente.dirty">\n        <p>Cliente não existe</p>\n      </ion-item>\n      <div *ngFor="let validation of validationMessages.cliente">\n        <ion-item *ngIf="docForm.controls.cliente.hasError(validation.type) && docForm.controls.cliente.touched">\n          <sup ion-text color="danger">{{validation.message}}</sup>\n        </ion-item>\n      </div>\n      <ion-item *ngIf="docForm.controls.cliente.valid">\n        <h5>Nome: <span ion-text color="secondary">{{docFields.NomeCliente}}</span></h5>\n        <h5>Num. Contribuinte: <span ion-text color="secondary">{{docFields.NumContribuinte}}</span></h5>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Artigo</ion-label>\n        <ion-input type="text" formControlName="artigo" [(ngModel)]="docFields.Artigo" name="artigo" (ionBlur)="daValorArtigo()"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!docForm.controls.artigo.valid && docForm.controls.artigo.dirty">\n        <p>Artigo não existe</p>\n      </ion-item>\n      <div *ngFor="let validation of validationMessages.artigo">\n        <ion-item *ngIf="docForm.controls.artigo.hasError(validation.type) && docForm.controls.artigo.touched">\n          <sup ion-text color="danger">{{validation.message}}</sup>\n        </ion-item>\n      </div>\n      <ion-item *ngIf="docForm.controls.artigo.valid">\n        <h5>Descrição: <span ion-text color="secondary">{{docFields.DescricaoArtigo}}</span></h5>\n        <h5>Armazem: <span ion-text color="secondary">{{docFields.ArmazemArtigo}}</span></h5>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Quantidade</ion-label>\n        <ion-input type="number" formControlName="quantidade" [(ngModel)]="docFields.Quantidade" name="quantidade"></ion-input>\n      </ion-item>\n      <div *ngFor="let validation of validationMessages.quantidade">\n        <ion-item *ngIf="docForm.controls.quantidade.hasError(validation.type) && docForm.controls.quantidade.touched">\n          <sup ion-text color="danger">{{validation.message}}</sup>\n        </ion-item>\n      </div>\n      <ion-item>\n        <button ion-button item-right (click)="addArtigo()" [disabled]="docForm.invalid">Adicionar</button>\n      </ion-item>\n      <ion-item>\n        <button ion-button full type="submit " (click)="createDocument()" [disabled]="docForm.invalid ">Confirmar</button>\n      </ion-item>\n    </form>\n  </ion-card>\n\n  <ion-card>\n    <ion-item-divider color="light">Lista de Artigos</ion-item-divider>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Artigo</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Quantidade</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n      <ion-list *ngFor="let artigo of linhas">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <h2>{{artigo.Artigo}}</h2>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item item-left>\n              <h2>{{artigo.Quantidade}}</h2>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <button ion-button clear item-end (click)="removeArtigo(artigo)" color="danger">\n                Remover\n              </button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-grid>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\documento-venda\documento-venda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__validators_documento__["a" /* DocumentoValidator */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_documento_venda_documento_venda__["a" /* DocumentoVendaProvider */],
            __WEBPACK_IMPORTED_MODULE_5__validators_clientes__["a" /* ClientesValidator */],
            __WEBPACK_IMPORTED_MODULE_6__validators_artigos__["a" /* ArtigosValidator */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__validators_messages__["a" /* MessagesValidator */],
            __WEBPACK_IMPORTED_MODULE_9__controllers_controllers__["a" /* Controllers */]])
    ], DocumentoVendaPage);
    return DocumentoVendaPage;
}());

//# sourceMappingURL=documento-venda.js.map

/***/ })

});
//# sourceMappingURL=3.js.map