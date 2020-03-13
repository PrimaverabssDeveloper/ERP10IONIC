import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ArtigosProvider } from '../providers/artigos/artigos';
import { ApiProvider } from '../providers/api/api';


@Injectable()
export class ArtigosValidator {
    debouncer: any

    constructor(public http: Http,
                private artigosProvider: ArtigosProvider,
                private apiProvider: ApiProvider) {
    }

    checkArtigoExiste(control: FormControl): any {

        clearTimeout(this.debouncer);
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.artigosProvider.existeArtigo(control.value).subscribe((res) => {
                    if (res == false) {
                        resolve(res);
                    } else {
                        resolve({ checkArtigoExiste: false })
                    }
                }, (err) => {
                    resolve({ checkArtigoExiste: true });
                });
            }, 1000);
        });
    }

    daValorArtigo(artigo, atributos) {
        return new Promise(resolve => {
            this.http.post(this.apiProvider.apiUrl + 'Base/Artigos/DaValorAtributos/' + artigo, atributos, this.apiProvider.setJsonHeaders())
                .subscribe(res => {
                    if (res.json() !== null) {
                        resolve(res.json())
                    }
                }, err => {
                    resolve({ daValorArtigo: false });
                    console.log("ERROR!: ", err);
                })
        })
    }

    ivaValidator(control: FormControl): any {
        return new Promise(resolve => {
            if (isNaN(control.value)) {
                resolve({ ivaValidator: true })
            }
            if (control.value % 1 !== 0) {
                resolve({ ivaValidator: true })
            }
            if (control.value < 20) {
                resolve({ ivaValidator: true })
            }
            if (control.value > 100) {
                resolve({ ivaValidator: true })
            }
            resolve(null)
        });
    }
}