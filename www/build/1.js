webpackJsonp([1],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaClientesPageModule", function() { return EditaClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edita_clientes__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditaClientesPageModule = /** @class */ (function () {
    function EditaClientesPageModule() {
    }
    EditaClientesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edita_clientes__["a" /* EditaClientesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edita_clientes__["a" /* EditaClientesPage */]),
            ],
        })
    ], EditaClientesPageModule);
    return EditaClientesPageModule;
}());

//# sourceMappingURL=edita-clientes.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditaClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_controllers__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var EditaClientesPage = /** @class */ (function () {
    function EditaClientesPage(navCtrl, navParams, clientesProvider, controllers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientesProvider = clientesProvider;
        this.controllers = controllers;
        this.clientesObj = {};
    }
    EditaClientesPage.prototype.ionViewDidLoad = function () {
        this.editaClientes();
    };
    EditaClientesPage.prototype.editaClientes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var numCliente;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        numCliente = this.navParams.get('clientes');
                        return [4 /*yield*/, this.clientesProvider.getEditaClientes(numCliente).then(function (data) {
                                _this.clientesObj = data;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditaClientesPage.prototype.atualizaCliente = function () {
        var _this = this;
        var numCliente = this.navParams.get('clientes');
        var msg = "A actualizar..";
        var loader = this.controllers.loader(msg);
        loader.present().then(function () {
            _this.clientesProvider.actualizaCliente(_this.clientesObj);
        });
        loader.onDidDismiss(function () {
            var msg = "Cliente " + numCliente + " actualizado com sucesso";
            _this.controllers.toastController(msg);
            _this.navCtrl.setRoot('ClientesPage');
        });
    };
    EditaClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edita-clientes',template:/*ion-inline-start:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\edita-clientes\edita-clientes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Cliente - {{clientesObj.Cliente}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <ion-label color="primary">Nome</ion-label>\n        <ion-input [(ngModel)]="clientesObj.Nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Descricao</ion-label>\n        <ion-input [(ngModel)]="clientesObj.Descricao"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Morada</ion-label>\n        <ion-input [(ngModel)]="clientesObj.Morada"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Localidade</ion-label>\n        <ion-input [(ngModel)]="clientesObj.Localidade"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Localidade do Cod. Postal</ion-label>\n        <ion-input [(ngModel)]="clientesObj.LocalidadeCodigoPostal"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Telefone</ion-label>\n        <ion-input [(ngModel)]="clientesObj.Telefone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button type="submit" (click)="atualizaCliente()" item-right>Confirmar</button>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\edita-clientes\edita-clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__controllers_controllers__["a" /* Controllers */]])
    ], EditaClientesPage);
    return EditaClientesPage;
}());

//# sourceMappingURL=edita-clientes.js.map

/***/ })

});
//# sourceMappingURL=1.js.map