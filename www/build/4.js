webpackJsonp([4],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriaClientesPageModule", function() { return CriaClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cria_clientes__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CriaClientesPageModule = /** @class */ (function () {
    function CriaClientesPageModule() {
    }
    CriaClientesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cria_clientes__["a" /* CriaClientesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cria_clientes__["a" /* CriaClientesPage */]),
            ],
        })
    ], CriaClientesPageModule);
    return CriaClientesPageModule;
}());

//# sourceMappingURL=cria-clientes.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriaClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_clientes__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_services_base_services__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_messages__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_controllers__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CriaClientesPage = /** @class */ (function () {
    function CriaClientesPage(navCtrl, navParams, clientesProvider, formBuilder, clientesValidator, baseProvider, messagesValidator, controllers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientesProvider = clientesProvider;
        this.formBuilder = formBuilder;
        this.clientesValidator = clientesValidator;
        this.baseProvider = baseProvider;
        this.messagesValidator = messagesValidator;
        this.controllers = controllers;
        this.clientesObj = {};
        this.validationMessages = this.messagesValidator.criarCliente();
        this.criaClienteForm = this.formBuilder.group({
            cliente: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]), clientesValidator.checkClienteExiste.bind(clientesValidator)),
            nome: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(2)])),
            descricao: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(2)])),
            morada: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])),
            localidade: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])),
            codPostal: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9._-]+$')])),
            locCodPostal: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])),
            telefone: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(9)])),
            numContribuinte: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(9)])),
            pais: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])),
            moeda: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])),
        });
    }
    CriaClientesPage.prototype.ionViewDidLoad = function () {
        this.listaMoedas();
        this.listaPaises();
    };
    CriaClientesPage.prototype.listaMoedas = function () {
        var _this = this;
        this.baseProvider.listaMoedas().subscribe(function (data) {
            _this.moedas = data.DataSet.Table;
        });
    };
    CriaClientesPage.prototype.listaPaises = function () {
        var _this = this;
        this.baseProvider.listaPaises().subscribe(function (data) {
            _this.paises = data.DataSet.Table;
        });
    };
    CriaClientesPage.prototype.criarCliente = function () {
        var _this = this;
        var msg = "A criar cliente..";
        var loader = this.controllers.loader(msg);
        loader.present().then(function () {
            _this.clientesProvider.criarCliente(_this.clientesObj);
        });
        loader.onDidDismiss(function () {
            var msg = "Cliente " + _this.clientesObj.Cliente + " criado com sucesso";
            _this.controllers.toastController(msg);
            _this.navCtrl.setRoot('ClientesPage');
        });
    };
    CriaClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cria-clientes',template:/*ion-inline-start:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\cria-clientes\cria-clientes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Criar Cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-list>\n      <form [formGroup]="criaClienteForm">\n        <ion-item>\n          <ion-label color="primary">Cliente</ion-label>\n          <ion-input type="text" formControlName="cliente" [(ngModel)]="clientesObj.Cliente" name="cliente"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!criaClienteForm.controls.cliente.valid && !criaClienteForm.controls.cliente.pending && criaClienteForm.controls.cliente.dirty ">\n          <p>Esse cliente já existe</p>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.cliente">\n          <ion-item *ngIf="criaClienteForm.controls.cliente.hasError(validation.type) && criaClienteForm.controls.cliente.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Nome</ion-label>\n          <ion-input type="text" formControlName="nome" [(ngModel)]="clientesObj.Nome" name="Nome"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.nome">\n          <ion-item *ngIf="criaClienteForm.controls.nome.hasError(validation.type) && criaClienteForm.controls.nome.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Descrição</ion-label>\n          <ion-input type="text" formControlName="descricao" [(ngModel)]="clientesObj.Descricao" name="Descricao"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.descricao">\n          <ion-item *ngIf="criaClienteForm.controls.descricao.hasError(validation.type) && criaClienteForm.controls.descricao.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Morada</ion-label>\n          <ion-input type="text" formControlName="morada" [(ngModel)]="clientesObj.Morada" name="Morada"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.morada">\n          <ion-item *ngIf="criaClienteForm.controls.morada.hasError(validation.type) && criaClienteForm.controls.morada.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Localidade</ion-label>\n          <ion-input type="text" formControlName="localidade" [(ngModel)]="clientesObj.Localidade" name="Localidade"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.localidade">\n          <ion-item *ngIf="criaClienteForm.controls.localidade.hasError(validation.type) && criaClienteForm.controls.localidade.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Código Postal</ion-label>\n          <ion-input type="text" formControlName="codPostal" [(ngModel)]="clientesObj.CodigoPostal" name="CodigoPostal"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.codPostal">\n          <ion-item *ngIf="criaClienteForm.controls.codPostal.hasError(validation.type) && criaClienteForm.controls.codPostal.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Localidade do Cod. Postal</ion-label>\n          <ion-input type="text" formControlName="locCodPostal" [(ngModel)]="clientesObj.LocalidadeCodigoPostal" name="LocalidadeCodigoPostal"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.locCodPostal">\n          <ion-item *ngIf="criaClienteForm.controls.locCodPostal.hasError(validation.type) && criaClienteForm.controls.locCodPostal.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Telefone</ion-label>\n          <ion-input type="number" formControlName="telefone" [(ngModel)]="clientesObj.Telefone" name="Telefone"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.telefone">\n          <ion-item *ngIf="criaClienteForm.controls.telefone.hasError(validation.type) && criaClienteForm.controls.telefone.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label color="primary">Num. de Contribuite</ion-label>\n          <ion-input type="number" formControlName="numContribuinte" [(ngModel)]="clientesObj.NumContribuinte" name="NumContribuinte"></ion-input>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.numContribuinte">\n          <ion-item *ngIf="criaClienteForm.controls.numContribuinte.hasError(validation.type) && criaClienteForm.controls.numContribuinte.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label item-left color="primary">Pais</ion-label>\n          <ion-select item-left formControlName="pais" [(ngModel)]="clientesObj.Pais" name="pais">\n            <ion-option *ngFor="let pais of paises" value="{{pais.Pais}}">{{pais.Pais}} - {{pais.Descricao}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.pais">\n          <ion-item *ngIf="criaClienteForm.controls.pais.hasError(validation.type) && criaClienteForm.controls.pais.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label item-left color="primary">Moeda</ion-label>\n          <ion-select item-left formControlName="moeda" [(ngModel)]="clientesObj.Moeda" name="moeda">\n            <ion-option *ngFor="let moeda of moedas" value="{{moeda.Moeda}}">{{moeda.Moeda}} - {{moeda.Descricao}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <div *ngFor="let validation of validationMessages.moeda">\n          <ion-item *ngIf="criaClienteForm.controls.moeda.hasError(validation.type) && criaClienteForm.controls.moeda.touched">\n            <sup ion-text color="danger">{{validation.message}}</sup>\n          </ion-item>\n        </div>\n        <ion-item>\n          <button ion-button item-right (click)="criarCliente()" [disabled]="criaClienteForm.invalid">Confirmar</button>\n        </ion-item>\n      </form>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\cria-clientes\cria-clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__validators_clientes__["a" /* ClientesValidator */],
            __WEBPACK_IMPORTED_MODULE_5__providers_base_services_base_services__["a" /* BaseServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__validators_messages__["a" /* MessagesValidator */],
            __WEBPACK_IMPORTED_MODULE_7__controllers_controllers__["a" /* Controllers */]])
    ], CriaClientesPage);
    return CriaClientesPage;
}());

//# sourceMappingURL=cria-clientes.js.map

/***/ })

});
//# sourceMappingURL=4.js.map