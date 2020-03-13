webpackJsonp([2],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaArtigosPageModule", function() { return EditaArtigosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edita_artigos__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditaArtigosPageModule = /** @class */ (function () {
    function EditaArtigosPageModule() {
    }
    EditaArtigosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edita_artigos__["a" /* EditaArtigosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edita_artigos__["a" /* EditaArtigosPage */]),
            ],
        })
    ], EditaArtigosPageModule);
    return EditaArtigosPageModule;
}());

//# sourceMappingURL=edita-artigos.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditaArtigosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_artigos_artigos__ = __webpack_require__(55);
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




var EditaArtigosPage = /** @class */ (function () {
    function EditaArtigosPage(navCtrl, navParams, artigosProvider, controllers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.artigosProvider = artigosProvider;
        this.controllers = controllers;
        this.artigosObj = {};
    }
    EditaArtigosPage.prototype.ionViewDidLoad = function () {
        this.editaArtigos();
    };
    EditaArtigosPage.prototype.editaArtigos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var numArtigo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        numArtigo = this.navParams.get('artigos');
                        return [4 /*yield*/, this.artigosProvider.getEditaArtigos(numArtigo).then(function (data) {
                                _this.artigosObj = data;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditaArtigosPage.prototype.atualizaArtigo = function () {
        var _this = this;
        var numArtigo = this.navParams.get('artigos');
        var msg = "A actualizar..";
        var loader = this.controllers.loader(msg);
        loader.present().then(function () {
            _this.artigosProvider.actualizaArtigo(_this.artigosObj);
        });
        loader.onDidDismiss(function () {
            var msg = "Artigo " + numArtigo + " actualizado com sucesso";
            _this.controllers.toastController(msg);
            _this.navCtrl.setRoot('ArtigosPage');
        });
    };
    EditaArtigosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edita-artigos',template:/*ion-inline-start:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\edita-artigos\edita-artigos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Artigo - {{artigosObj.Artigo}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <ion-label color="primary">Descricao</ion-label>\n        <ion-input [(ngModel)]="artigosObj.Descricao"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Código de Barras</ion-label>\n        <ion-input [(ngModel)]="artigosObj.CodBarras"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Unidade Base</ion-label>\n        <ion-input [(ngModel)]="artigosObj.UnidadeBase"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">IVA</ion-label>\n        <ion-input type="number" [(ngModel)]="artigosObj.IVA"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Peso</ion-label>\n        <ion-input type="number" [(ngModel)]="artigosObj.Peso"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Volume</ion-label>\n        <ion-input type="number" [(ngModel)]="artigosObj.Volume"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Observações</ion-label>\n        <ion-textarea [(ngModel)]="artigosObj.Observacoes" rows="3"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <button ion-button type="submit" (click)="atualizaArtigo()" item-right>Confirmar</button>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\edita-artigos\edita-artigos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_artigos_artigos__["a" /* ArtigosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__controllers_controllers__["a" /* Controllers */]])
    ], EditaArtigosPage);
    return EditaArtigosPage;
}());

//# sourceMappingURL=edita-artigos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map