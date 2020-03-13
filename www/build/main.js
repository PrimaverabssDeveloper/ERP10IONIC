webpackJsonp([9],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesValidator = /** @class */ (function () {
    function MessagesValidator(http) {
        this.http = http;
    }
    MessagesValidator.prototype.criarArtigo = function () {
        var validation_messages = {
            'artigo': [
                { type: 'required', message: 'O nome do artigo é obrigatório' },
            ],
            'descricao': [
                { type: 'required', message: 'A descrição é obrigatória' },
                { type: 'minlength', message: 'A descrição deve conter no minímo 2 caracteres' }
            ],
            'codBarras': [
                { type: 'required', message: 'O código de barras é obrigatório' },
                { type: 'minlength', message: 'O código de barras deve conter no mímnimo 8 digitos' },
                { type: 'maxlength', message: 'O código de barras deve conter no máximo 12 digitos' }
            ],
            'unidadeBase': [
                { type: 'required', message: 'A unidade base é obrigatória' },
            ],
            'observacoes': [
                { type: 'required', message: 'As caracteristicas são obrigatórias' },
            ],
            'iva': [
                { type: 'required', message: 'O iva é obrigatório' },
                { type: 'ivaValidator', message: 'Esse valor não é válido' }
            ],
            'peso': [
                { type: 'required', message: 'O peso é obrigatório' },
                { type: 'min', message: 'O valor minímo é 0' }
            ],
            'volume': [
                { type: 'required', message: 'O volume é obrigatório' },
                { type: 'min', message: 'O valor minímo é 0' }
            ],
        };
        return validation_messages;
    };
    MessagesValidator.prototype.documentoInternos = function () {
        var validation_messages = {
            'documento': [
                { type: 'required', message: 'O documento é obrigatório' },
            ],
            'serie': [
                { type: 'required', message: 'A série é obrigatória' },
                { type: 'minlength', message: 'A descrição deve conter no minímo 2 caracteres' }
            ],
            'cliente': [
                { type: 'required', message: 'Por favor introduza o nome do cliente' },
            ],
            'artigo': [
                { type: 'required', message: 'Por favor introduza o nome do cliente' },
            ],
            'quantidade': [
                { type: 'required', message: 'A quantidade é um campo obrigatório' },
                { type: 'ivaValidator', message: 'Esse valor não é válido' }
            ],
        };
        return validation_messages;
    };
    MessagesValidator.prototype.documentoVendas = function () {
        var validation_messages = {
            'documento': [
                { type: 'required', message: 'O documento é obrigatório' },
            ],
            'serie': [
                { type: 'required', message: 'A série é obrigatória' },
                { type: 'minlength', message: 'A descrição deve conter no minímo 2 caracteres' }
            ],
            'cliente': [
                { type: 'required', message: 'Por favor introduza o nome do cliente' },
            ],
            'artigo': [
                { type: 'required', message: 'Por favor introduza o nome do cliente' },
            ],
            'quantidade': [
                { type: 'required', message: 'A quantidade é um campo obrigatório' },
                { type: 'ivaValidator', message: 'Esse valor não é válido' }
            ],
        };
        return validation_messages;
    };
    MessagesValidator.prototype.criarCliente = function () {
        var validation_messages = {
            'cliente': [
                { type: 'required', message: 'O cliente é obrigatório' },
            ],
            'nome': [
                { type: 'required', message: 'O nome do cliente é obrigatório' },
                { type: 'minlength', message: 'O nome deve conter no minímo 2 caracteres' }
            ],
            'descricao': [
                { type: 'required', message: 'A descrição sobre o cliente é obrigatória' },
                { type: 'minlength', message: 'A descrição deve conter no minímo 2 caracteres' },
            ],
            'morada': [
                { type: 'required', message: 'A morada é obrigatória' },
            ],
            'localidade': [
                { type: 'required', message: 'A localidade é obrigatória' },
            ],
            'codPostal': [
                { type: 'required', message: 'O código postal é  obrigatório' },
                { type: 'pattern', message: 'Esse padrão de caracteres não é autorizado' },
            ],
            'locCodPostal': [
                { type: 'required', message: 'A localidade do código postal é obrigatória' },
            ],
            'telefone': [
                { type: 'required', message: 'O telefone é obrigatório' },
                { type: 'minlength', message: 'O número de telefone deve ter no minímo 9 digítos' }
            ],
            'numContribuinte': [
                { type: 'required', message: 'O número de contribuinte é obrigatório' },
                { type: 'minlength', message: 'O número de contribuinte deve ter no minímo 9 digítos' }
            ],
            'pais': [
                { type: 'required', message: 'O país é obrigatório' },
            ],
            'moeda': [
                { type: 'required', message: 'A moeda é obrigatória' },
            ],
        };
        return validation_messages;
    };
    MessagesValidator.prototype.login = function () {
        var validation_messages = {
            'username': [
                { type: 'required', message: 'Por favor introduza o seu username' },
                { type: 'pattern', message: 'Esse padrão de caracteres não é autorizado' },
                { type: 'minlength', message: 'O username deve conter no minímo 4 caracteres' },
                { type: 'minlength', message: 'O username deve conter no máximo 20 caracteres' },
            ],
            'password': [
                { type: 'required', message: 'Por favor introduza a sua password' },
                { type: 'minlength', message: 'A descrição deve conter no minímo 2 caracteres' }
            ],
        };
        return validation_messages;
    };
    MessagesValidator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], MessagesValidator);
    return MessagesValidator;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentoVendaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(25);
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




var DocumentoVendaProvider = /** @class */ (function () {
    function DocumentoVendaProvider(http, apiProvider, controllers) {
        this.http = http;
        this.apiProvider = apiProvider;
        this.controllers = controllers;
    }
    DocumentoVendaProvider.prototype.getSeries = function (doc) {
        var _this = this;
        return this.http.get(this.apiProvider.apiUrl + 'Base/Series/ListaSeries/V/' + doc + '/false', this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    DocumentoVendaProvider.prototype.existeDocumento = function (doc) {
        var _this = this;
        return this.http.get(this.apiProvider.apiUrl + 'Vendas/TabVendas/Existe/' + doc, this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    DocumentoVendaProvider.prototype.daValorDocumento = function (documento, atributo) {
        var _this = this;
        return this.http.get(this.apiProvider.apiUrl + 'Vendas/TabVendas/DaValorAtributo/' + documento + '/' + atributo, this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    DocumentoVendaProvider.prototype.createDocument = function (documentoObj) {
        var _this = this;
        this.http.post(this.apiProvider.apiUrl + 'Vendas/Docs/CreateDocument/', documentoObj, this.apiProvider.setJsonHeaders())
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data == true) {
                var msg = "Documento criado com sucesso";
                _this.controllers.toastController(msg);
            }
            else {
                var msg = "Documento inválido";
                _this.controllers.toastController(msg);
            }
        }, function (err) {
            err = err.json();
            console.log("ERROR!: ", err);
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
        });
    };
    DocumentoVendaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__controllers_controllers__["a" /* Controllers */]])
    ], DocumentoVendaProvider);
    return DocumentoVendaProvider;
}());

//# sourceMappingURL=documento-venda.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/artigos/artigos.module": [
		283,
		7
	],
	"../pages/clientes/clientes.module": [
		285,
		6
	],
	"../pages/cria-artigos/cria-artigos.module": [
		284,
		5
	],
	"../pages/cria-clientes/cria-clientes.module": [
		286,
		4
	],
	"../pages/documento-venda/documento-venda.module": [
		288,
		3
	],
	"../pages/edita-artigos/edita-artigos.module": [
		287,
		2
	],
	"../pages/edita-clientes/edita-clientes.module": [
		289,
		1
	],
	"../pages/login/login.module": [
		290,
		8
	],
	"../pages/menu/menu.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_controllers__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service_auth_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginProvider = /** @class */ (function () {
    function LoginProvider(http, apiProvider, controllers, authProvider) {
        this.http = http;
        this.apiProvider = apiProvider;
        this.controllers = controllers;
        this.authProvider = authProvider;
    }
    //Request access token
    LoginProvider.prototype.login = function (username, password, company) {
        var _this = this;
        var body = 'username=' + username + '&password=' + password + '&company=' + company + '&instance=DEFAULT&grant_type=password';
        this.http.post(this.apiProvider.apiUrl + 'token', body, this.apiProvider.setPostHeaders())
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.authProvider.login();
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('token_expire', data.expires_in);
            localStorage.setItem('user', username);
            console.log("token : " + data.access_token);
        }, function (err) {
            _this.authProvider.isLoggedIn = false;
            var msg = '';
            try {
                err = err.json();
                msg = err.error();
                ;
            }
            catch (e) {
                err = err;
                msg = err;
            }
            _this.controllers.toastController(msg);
        });
    };
    LoginProvider.prototype.getCompany = function () {
        return this.http.get(this.apiProvider.apiUrl + 'Administrador/ListaEmpresas', this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            alert("failed to get Administrador/ListaEmpresas ");
            console.log("ERROR!: ", err);
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__controllers_controllers__["a" /* Controllers */],
            __WEBPACK_IMPORTED_MODULE_5__auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtigosValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_artigos_artigos__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtigosValidator = /** @class */ (function () {
    function ArtigosValidator(http, artigosProvider, apiProvider) {
        this.http = http;
        this.artigosProvider = artigosProvider;
        this.apiProvider = apiProvider;
    }
    ArtigosValidator.prototype.checkArtigoExiste = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve) {
            _this.debouncer = setTimeout(function () {
                _this.artigosProvider.existeArtigo(control.value).subscribe(function (res) {
                    if (res == false) {
                        resolve(res);
                    }
                    else {
                        resolve({ checkArtigoExiste: false });
                    }
                }, function (err) {
                    resolve({ checkArtigoExiste: true });
                });
            }, 1000);
        });
    };
    ArtigosValidator.prototype.daValorArtigo = function (artigo, atributos) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiProvider.apiUrl + 'Base/Artigos/DaValorAtributos/' + artigo, atributos, _this.apiProvider.setJsonHeaders())
                .subscribe(function (res) {
                if (res.json() !== null) {
                    resolve(res.json());
                }
            }, function (err) {
                resolve({ daValorArtigo: false });
                console.log("ERROR!: ", err);
            });
        });
    };
    ArtigosValidator.prototype.ivaValidator = function (control) {
        return new Promise(function (resolve) {
            if (isNaN(control.value)) {
                resolve({ ivaValidator: true });
            }
            if (control.value % 1 !== 0) {
                resolve({ ivaValidator: true });
            }
            if (control.value < 20) {
                resolve({ ivaValidator: true });
            }
            if (control.value > 100) {
                resolve({ ivaValidator: true });
            }
            resolve(null);
        });
    };
    ArtigosValidator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_artigos_artigos__["a" /* ArtigosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], ArtigosValidator);
    return ArtigosValidator;
}());

//# sourceMappingURL=artigos.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientesValidator = /** @class */ (function () {
    function ClientesValidator(http, clientesProvider, apiProvider) {
        this.http = http;
        this.clientesProvider = clientesProvider;
        this.apiProvider = apiProvider;
    }
    ClientesValidator.prototype.checkClienteExiste = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve) {
            _this.debouncer = setTimeout(function () {
                _this.clientesProvider.existeCliente(control.value).subscribe(function (res) {
                    if (res == false) {
                        resolve(res);
                    }
                    else {
                        resolve({ checkClienteExiste: true });
                    }
                }, function (err) {
                    resolve({ 'checkCliente': false });
                });
            }, 1000);
        });
    };
    ClientesValidator.prototype.daValorCliente = function (cliente, atributos) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiProvider.apiUrl + 'Base/Clientes/DaValorAtributos/' + cliente, atributos, _this.apiProvider.setJsonHeaders())
                .subscribe(function (res) {
                if (res.json() !== null) {
                    resolve(res.json());
                }
                if (res.status == 404) {
                    resolve(undefined);
                }
            }, function (err) {
                resolve({ daValorCliente: false });
                console.log("ERROR!: ", err);
            });
        });
    };
    ClientesValidator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], ClientesValidator);
    return ClientesValidator;
}());

//# sourceMappingURL=clientes.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseServicesProvider = /** @class */ (function () {
    function BaseServicesProvider(http, apiProvider) {
        this.http = http;
        this.apiProvider = apiProvider;
    }
    BaseServicesProvider.prototype.listaMoedas = function () {
        return this.http.get(this.apiProvider.apiUrl + 'Base/Moedas/Lista', this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            console.log("ERROR!: ", err);
        });
    };
    BaseServicesProvider.prototype.listaPaises = function () {
        return this.http.get(this.apiProvider.apiUrl + 'Base/Paises/Lista', this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            console.log("ERROR!: ", err);
        });
    };
    BaseServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */]])
    ], BaseServicesProvider);
    return BaseServicesProvider;
}());

//# sourceMappingURL=base-services.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentoValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_documento_venda_documento_venda__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_artigos_artigos__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentoValidator = /** @class */ (function () {
    function DocumentoValidator(http, docProvider, clientesProvider, artigosProvider) {
        this.http = http;
        this.docProvider = docProvider;
        this.clientesProvider = clientesProvider;
        this.artigosProvider = artigosProvider;
    }
    DocumentoValidator.prototype.checkDocumento = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve) {
            _this.debouncer = setTimeout(function () {
                _this.docProvider.existeDocumento(control.value).subscribe(function (res) {
                    if (res == true) {
                        resolve(res);
                    }
                    else {
                        resolve({ checkDocumento: false });
                    }
                }, function (err) {
                    resolve({ checkDocumento: false });
                });
            }, 1000);
        });
    };
    DocumentoValidator.prototype.checkCliente = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve) {
            _this.debouncer = setTimeout(function () {
                _this.clientesProvider.existeCliente(control.value).subscribe(function (res) {
                    if (res == true) {
                        resolve(res);
                    }
                    else {
                        resolve({ checkCliente: false });
                    }
                }, function (err) {
                    resolve({ 'checkCliente': false });
                });
            }, 1000);
        });
    };
    DocumentoValidator.prototype.checkArtigo = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve) {
            _this.debouncer = setTimeout(function () {
                _this.artigosProvider.existeArtigo(control.value).subscribe(function (res) {
                    if (res == true) {
                        resolve(res);
                    }
                    else {
                        resolve({ checkArtigo: false });
                    }
                }, function (err) {
                    resolve({ 'Descricao': true });
                });
            }, 1000);
        });
    };
    DocumentoValidator.prototype.quantidadeValidator = function (control) {
        return new Promise(function (resolve) {
            if (isNaN(control.value)) {
                resolve({ ivaValidator: true });
            }
            if (control.value % 1 !== 0) {
                resolve({ ivaValidator: true });
            }
            if (control.value <= 0) {
                resolve({ ivaValidator: true });
            }
            resolve(null);
        });
    };
    DocumentoValidator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__providers_documento_venda_documento_venda__["a" /* DocumentoVendaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_artigos_artigos__["a" /* ArtigosProvider */]])
    ], DocumentoValidator);
    return DocumentoValidator;
}());

//# sourceMappingURL=documento.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuProvider = /** @class */ (function () {
    function MenuProvider() {
    }
    MenuProvider.prototype.sideMenuPages = function () {
        var pages = [
            {
                title: 'Documento Venda', component: 'DocumentoVendaPage', Icon: 'document'
            },
            {
                title: 'Documento Interno', component: 'DocumentoInternoPage', Icon: 'document'
            },
            {
                title: 'Artigos', Icon: 'create',
                subPages: [
                    {
                        title: 'Cria Artigos', component: 'CriaArtigosPage' //, Icon: 'create'
                    },
                    {
                        title: 'Lista Artigos', component: 'ArtigosPage' //, Icon: 'md-list'
                    }
                ]
            },
            {
                title: 'Clientes', Icon: 'contacts',
                subPages: [
                    {
                        title: 'Cria Clientes', component: 'CriaClientesPage' //, Icon: 'contact'
                    },
                    {
                        title: 'Lista Clientes', component: 'ClientesPage' //, Icon: 'md-list'
                    }
                ]
            }
        ];
        return pages;
    };
    MenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MenuProvider);
    return MenuProvider;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_clientes_clientes__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_artigos_artigos__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__controllers_controllers__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_documento_venda_documento_venda__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__validators_documento__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__validators_artigos__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__validators_clientes__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__validators_messages__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_menu_menu__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_base_services_base_services__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/artigos/artigos.module#ArtigosPageModule', name: 'ArtigosPage', segment: 'artigos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cria-artigos/cria-artigos.module#CriaArtigosPageModule', name: 'CriaArtigosPage', segment: 'cria-artigos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/clientes.module#ClientesPageModule', name: 'ClientesPage', segment: 'clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cria-clientes/cria-clientes.module#CriaClientesPageModule', name: 'CriaClientesPage', segment: 'cria-clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edita-artigos/edita-artigos.module#EditaArtigosPageModule', name: 'EditaArtigosPage', segment: 'edita-artigos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documento-venda/documento-venda.module#DocumentoVendaPageModule', name: 'DocumentoVendaPage', segment: 'documento-venda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edita-clientes/edita-clientes.module#EditaClientesPageModule', name: 'EditaClientesPage', segment: 'edita-clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_clientes_clientes__["a" /* ClientesProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_artigos_artigos__["a" /* ArtigosProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__controllers_controllers__["a" /* Controllers */],
                __WEBPACK_IMPORTED_MODULE_14__providers_documento_venda_documento_venda__["a" /* DocumentoVendaProvider */],
                __WEBPACK_IMPORTED_MODULE_15__validators_documento__["a" /* DocumentoValidator */],
                __WEBPACK_IMPORTED_MODULE_16__validators_artigos__["a" /* ArtigosValidator */],
                __WEBPACK_IMPORTED_MODULE_17__validators_clientes__["a" /* ClientesValidator */],
                __WEBPACK_IMPORTED_MODULE_18__validators_messages__["a" /* MessagesValidator */],
                __WEBPACK_IMPORTED_MODULE_19__providers_menu_menu__["a" /* MenuProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_base_services_base_services__["a" /* BaseServicesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.apiUrl = '/api/';
        this.apiUrl = "http://localhost:2018/WebApi/";
        //this.apiUrl = "http://localhost/Primavera.WebAPI/"
    }
    ApiProvider.prototype.setPostHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    ApiProvider.prototype.setGetHeaders = function () {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    ApiProvider.prototype.setJsonHeaders = function () {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ApiProvider);
    return ApiProvider;
    var _a;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Controllers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Controllers = /** @class */ (function () {
    function Controllers(http, app, authProvider, toastCtrl, alertCtrl, loadingCtrl) {
        this.http = http;
        this.app = app;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    Controllers.prototype.toastController = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    Controllers.prototype.basicAlertController = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok'],
        });
        alert.present();
    };
    Controllers.prototype.loader = function (msg) {
        var loader = this.loadingCtrl.create({
            content: msg,
            duration: 2000
        });
        return loader;
    };
    Controllers.prototype.alertError = function (subTitle, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Erro!',
            subTitle: subTitle,
            message: msg,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ir para login',
                    handler: function () {
                        var nav = _this.app.getRootNav();
                        nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
                        _this.authProvider.logout();
                    }
                }
            ]
        });
        alert.present();
    };
    Controllers = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], Controllers);
    return Controllers;
}());

//# sourceMappingURL=controllers.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.isLoggedIn = false;
    }
    // Login a user
    AuthServiceProvider.prototype.login = function () {
        this.isLoggedIn = true;
    };
    // Logout a user, destroy token
    AuthServiceProvider.prototype.logout = function () {
        this.isLoggedIn = false;
        localStorage.removeItem('token');
    };
    // Returns whether the user is currently authenticated
    AuthServiceProvider.prototype.isAuthenticated = function (nav) {
        var token = localStorage.getItem("token");
        if (token == null) {
            setTimeout(function () { nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]); }, 0);
            var alert_1 = this.alertCtrl.create({
                title: 'Acesso negado!',
                subTitle: 'Não tem acesso a essa página, por favor faça login.',
                buttons: ['Ok'],
            });
            alert_1.present();
            return false;
        }
        else {
            return true;
        }
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_controllers__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_messages__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, loginProvider, authServiceProvider, controllers, messagesValidator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loginProvider = loginProvider;
        this.authServiceProvider = authServiceProvider;
        this.controllers = controllers;
        this.messagesValidator = messagesValidator;
        this.loginObj = {};
        this.passwordType = 'password';
        this.passwordShown = false;
        this.validationMessages = this.messagesValidator.login();
        this.loginForm = this.formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z.]*'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(1),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])),
        });
        this.companyForm = this.formBuilder.group({
            company: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])),
        });
    }
    LoginPage.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    };
    LoginPage.prototype.getCompany = function () {
        var _this = this;
        this.loginProvider.getCompany().subscribe(function (data) {
            _this.companies = data;
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var msg = "A carregar empresas..";
        var loader = this.controllers.loader(msg);
        if (this.loginForm.valid) {
            loader.present().then(function () {
                _this.loginProvider.login(_this.loginObj.username, _this.loginObj.password, _this.loginObj.company = '');
            });
            loader.onDidDismiss(function () {
                _this.getCompany();
                _this.slider.slideTo(1, 500);
            });
        }
        else {
            var msg_1 = "Login Inválido";
            this.controllers.toastController(msg_1);
        }
    };
    LoginPage.prototype.loginApp = function () {
        var _this = this;
        var msg = "A fazer login..";
        var loader = this.controllers.loader(msg);
        if (this.companyForm.valid) {
            loader.present().then(function () {
                _this.loginProvider.login(_this.loginObj.username, _this.loginObj.password, _this.loginObj.company);
            });
            loader.onDidDismiss(function () {
                if (_this.authServiceProvider.isLoggedIn) {
                    var msg_2 = "Login feito com sucesso";
                    _this.controllers.toastController(msg_2);
                    _this.navCtrl.setRoot('MenuPage');
                }
                else {
                    var msg_3 = "Login inválido";
                    _this.controllers.toastController(msg_3);
                }
            });
        }
        else {
            var msg_4 = "Selecione uma empresa";
            this.controllers.toastController(msg_4);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], LoginPage.prototype, "slider", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\login\login.html"*/'<ion-content>\n\n  <ion-grid style="height: 100%">\n\n    <ion-row justify-content-center align-items-center style="height: 100%">\n\n      <ion-card class="card">\n\n        <ion-card-content>\n\n          <ion-slides class="swiper-no-swiping">\n\n            <ion-slide>\n\n              <h1>Bem-vindo</h1>\n\n              <form [formGroup]="loginForm">\n\n                <ion-list>\n\n                  <ion-item>\n\n                    <ion-label>Username</ion-label>\n\n                    <ion-input formControlName="username" [(ngModel)]="loginObj.username" type="text"></ion-input>\n\n                  </ion-item>\n\n                  <div *ngFor="let validation of validationMessages.username">\n\n                    <ion-item *ngIf="loginForm.controls.username.hasError(validation.type) && loginForm.controls.username.touched">\n\n                      <sup ion-text color="danger">{{validation.message}}</sup>\n\n                    </ion-item>\n\n                  </div>\n\n                  <ion-item>\n\n                    <ion-label>Password</ion-label>\n\n                    <ion-input formControlName="password" [(ngModel)]="loginObj.password" [type]="passwordType"></ion-input>\n\n                    <ion-icon name="eye" *ngIf="passwordShown" item-end (click)="togglePassword()"></ion-icon>\n\n                    <ion-icon name="eye-off" *ngIf="!passwordShown" item-end (click)="togglePassword()"></ion-icon>\n\n                  </ion-item>\n\n                  <div *ngFor="let validation of validationMessages.password">\n\n                    <ion-item *ngIf="loginForm.controls.password.hasError(validation.type) && loginForm.controls.password.touched">\n\n                      <sup ion-text color="danger">{{validation.message}}</sup>\n\n                    </ion-item>\n\n                  </div>\n\n                </ion-list>\n\n                <ion-list>\n\n                  <ion-item>\n\n                    <button ion-button (click)="login()" item-right icon-end>\n\n                      <ion-icon name="md-arrow-round-forward"></ion-icon>\n\n                    </button>\n\n                  </ion-item>\n\n                </ion-list>\n\n              </form>\n\n            </ion-slide>\n\n            <ion-slide>\n\n              <h1>Escolha a sua empresa</h1>\n\n              <form (ngSubmit)="onSubmit" [formGroup]="companyForm">\n\n                <ion-list>\n\n                  <ion-item>\n\n                    <ion-select item-left [(ngModel)]="loginObj.company" formControlName="company">\n\n                      <ion-option *ngFor="let company of companies" value="{{company.Codigo}}">{{company.Codigo}}</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n                  <div padding>\n\n                    <button ion-button block type="submit" (click)="loginApp()">\n\n                      Log-in\n\n                    </button>\n\n                  </div>\n\n                </ion-list>\n\n              </form>\n\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\PrjNet\ERP10\ERP\Mainline\WebAPI\Samples\Primavera.WebAPI.Shell\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__controllers_controllers__["a" /* Controllers */],
            __WEBPACK_IMPORTED_MODULE_6__validators_messages__["a" /* MessagesValidator */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtigosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(25);
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




var ArtigosProvider = /** @class */ (function () {
    function ArtigosProvider(http, apiProvider, controllers) {
        this.http = http;
        this.apiProvider = apiProvider;
        this.controllers = controllers;
    }
    ArtigosProvider.prototype.getBaseArtigos = function () {
        var _this = this;
        return this.http.get(this.apiProvider.apiUrl + 'Base/Artigos/LstArtigos', this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ArtigosProvider.prototype.getEditaArtigos = function (numArtigo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiProvider.apiUrl + 'Base/Artigos/Edita/' + numArtigo, _this.apiProvider.setGetHeaders())
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                err = err.json();
                _this.controllers.alertError(err.Message, err.ExceptionMessage);
                console.log("ERROR!: ", err);
            });
        });
    };
    ArtigosProvider.prototype.actualizaArtigo = function (artigo) {
        var _this = this;
        this.http.post(this.apiProvider.apiUrl + 'Base/Artigos/Actualiza', artigo, this.apiProvider.setJsonHeaders())
            .subscribe(function (data) {
            data.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ArtigosProvider.prototype.removeArtigo = function (numArtigo) {
        var _this = this;
        this.http.post(this.apiProvider.apiUrl + 'Base/Artigos/Remove/' + numArtigo, null, this.apiProvider.setGetHeaders())
            .subscribe(function (data) {
            data.json();
            var msg = "Artigo " + numArtigo + " removido com sucesso";
            _this.controllers.toastController(msg);
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ArtigosProvider.prototype.criarArtigo = function (artigosObj) {
        var _this = this;
        this.http.post(this.apiProvider.apiUrl + 'Base/Artigos/Actualiza', artigosObj, this.apiProvider.setJsonHeaders())
            .subscribe(function (data) {
            data.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ArtigosProvider.prototype.existeArtigo = function (artigo) {
        var _this = this;
        return this.http.get(this.apiProvider.apiUrl + 'Base/Artigos/Existe/' + artigo, this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ArtigosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__controllers_controllers__["a" /* Controllers */]])
    ], ArtigosProvider);
    return ArtigosProvider;
}());

//# sourceMappingURL=artigos.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(25);
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




var ClientesProvider = /** @class */ (function () {
    function ClientesProvider(http, apiProvider, controllers) {
        this.http = http;
        this.apiProvider = apiProvider;
        this.controllers = controllers;
    }
    ClientesProvider.prototype.getBaseClientes = function () {
        var _this = this;
        return this.http.get(this.apiProvider.apiUrl + 'Base/Clientes/LstClientes', this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ClientesProvider.prototype.getEditaClientes = function (numCliente) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiProvider.apiUrl + 'Base/Clientes/Edita/' + numCliente, _this.apiProvider.setGetHeaders())
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                err = err.json();
                _this.controllers.alertError(err.Message, err.ExceptionMessage);
                console.log("ERROR!: ", err);
            });
        });
    };
    ClientesProvider.prototype.actualizaCliente = function (clienteObj) {
        var _this = this;
        this.http.post(this.apiProvider.apiUrl + 'Base/Clientes/Actualiza', clienteObj, this.apiProvider.setJsonHeaders())
            .subscribe(function (data) {
            data.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ClientesProvider.prototype.criarCliente = function (clientesObj) {
        var _this = this;
        this.http.post(this.apiProvider.apiUrl + 'Base/Clientes/Actualiza', clientesObj, this.apiProvider.setJsonHeaders())
            .subscribe(function (data) {
            data.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ClientesProvider.prototype.existeCliente = function (cliente) {
        var _this = this;
        return this.http.get(this.apiProvider.apiUrl + 'Base/Clientes/Existe/' + cliente, this.apiProvider.setGetHeaders())
            .map(function (res) {
            return res.json();
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ClientesProvider.prototype.removeCliente = function (numCliente) {
        var _this = this;
        this.http.post(this.apiProvider.apiUrl + 'Base/Clientes/Remove/' + numCliente, null, this.apiProvider.setGetHeaders())
            .subscribe(function (data) {
            data.json();
            var msg = "Cliente " + numCliente + " removido com sucesso";
            _this.controllers.toastController(msg);
        }, function (err) {
            err = err.json();
            _this.controllers.alertError(err.Message, err.ExceptionMessage);
            console.log("ERROR!: ", err);
        });
    };
    ClientesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__controllers_controllers__["a" /* Controllers */]])
    ], ClientesProvider);
    return ClientesProvider;
}());

//# sourceMappingURL=clientes.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map