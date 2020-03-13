import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ClientesProvider } from '../providers/clientes/clientes';
import { ApiProvider } from '../providers/api/api';


@Injectable()
export class ClientesValidator {
    debouncer: any

    constructor(public http: Http,
                private clientesProvider: ClientesProvider,
                private apiProvider: ApiProvider) {
    }

    checkClienteExiste(control: FormControl): any {
        clearTimeout(this.debouncer);
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.clientesProvider.existeCliente(control.value).subscribe((res) => {
                    if (res == false) {
                        resolve(res);
                    } else {
                        resolve({ checkClienteExiste: true })
                    }
                }, (err) => {
                    resolve({ 'checkCliente': false });
                });
            }, 1000);
        });
    }

    daValorCliente(cliente, atributos) {
        return new Promise(resolve => {
            this.http.post(this.apiProvider.apiUrl + 'Base/Clientes/DaValorAtributos/' + cliente, atributos, this.apiProvider.setJsonHeaders())
                .subscribe((res) => {
                    if (res.json() !== null) {
                        resolve(res.json())
                    }
                    if (res.status == 404) {
                        resolve(undefined);
                    }
                }, err => {
                    resolve({ daValorCliente: false });
                    console.log("ERROR!: ", err);
                })
        })
    }

}