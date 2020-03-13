import { FormControl } from '@angular/forms';
import { DocumentoVendaProvider } from '../providers/documento-venda/documento-venda';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ClientesProvider } from '../providers/clientes/clientes';
import { ArtigosProvider } from '../providers/artigos/artigos';


@Injectable()
export class DocumentoValidator {
    debouncer: any

    constructor(public http: Http,
                private docProvider: DocumentoVendaProvider,
                private clientesProvider: ClientesProvider,
                private artigosProvider: ArtigosProvider) {
    }

    checkDocumento(control: FormControl): any {
        clearTimeout(this.debouncer);
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.docProvider.existeDocumento(control.value).subscribe((res) => {
                    if (res == true) {
                        resolve(res);
                    } else {
                        resolve({ checkDocumento: false })
                    }
                }, (err) => {
                    resolve({ checkDocumento: false });
                });
            }, 1000);
        });
    }

    checkCliente(control: FormControl): any {
        clearTimeout(this.debouncer);
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.clientesProvider.existeCliente(control.value).subscribe((res) => {
                    if (res == true) {
                        resolve(res);
                    } else {
                        resolve({ checkCliente: false })
                    }
                }, (err) => {
                    resolve({ 'checkCliente': false });
                });
            }, 1000);
        });
    }

    checkArtigo(control: FormControl): any {
        clearTimeout(this.debouncer);
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.artigosProvider.existeArtigo(control.value).subscribe((res) => {
                    if (res == true) {
                        resolve(res);
                    } else {
                        resolve({ checkArtigo: false })
                    }
                }, (err) => {
                    resolve({ 'Descricao': true });
                });
            }, 1000);
        });
    }

    quantidadeValidator(control: FormControl): any {
        return new Promise(resolve => {
            if (isNaN(control.value)) {
                resolve({ ivaValidator: true })
            }
            if (control.value % 1 !== 0) {
                resolve({ ivaValidator: true })
            }
            if (control.value <= 0) {
                resolve({ ivaValidator: true })
            }

            resolve(null)
        });
    }


}