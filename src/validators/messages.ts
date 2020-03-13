import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MessagesValidator {

    constructor(public http: Http, ) {
    }

    criarArtigo() {
        let validation_messages = {
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
        }
        return validation_messages
    }

    documentoInternos() {
        let validation_messages = {
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
        }
        return validation_messages
    }
    
    documentoVendas() {
        let validation_messages = {
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
        }
        return validation_messages
    }
    
    criarCliente() {
        let validation_messages = {
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
        }
        return validation_messages
    }

    login() {
        let validation_messages = {
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
        }
        return validation_messages
    }

}