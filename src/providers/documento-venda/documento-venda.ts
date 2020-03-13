import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Controllers } from '../../controllers/controllers';


@Injectable()
export class DocumentoVendaProvider {

  constructor(public http: Http,
              public apiProvider: ApiProvider,
              public controllers: Controllers) {
  }

  getSeries(doc) {
    return this.http.get(this.apiProvider.apiUrl + 'Base/Series/ListaSeries/V/' + doc + '/false', this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  existeDocumento(doc) {
    return this.http.get(this.apiProvider.apiUrl + 'Vendas/TabVendas/Existe/' + doc, this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  daValorDocumento(documento, atributo) {
    return this.http.get(this.apiProvider.apiUrl + 'Vendas/TabVendas/DaValorAtributo/' + documento + '/' + atributo, this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  createDocument(documentoObj) {
    this.http.post(this.apiProvider.apiUrl + 'Vendas/Docs/CreateDocument/', documentoObj, this.apiProvider.setJsonHeaders())
      .map((res) => res.json())
      .subscribe(data => {
        if (data == true) {
          let msg = "Documento criado com sucesso"
          this.controllers.toastController(msg)
        } else {
          let msg = "Documento inválido"
          this.controllers.toastController(msg)
        }
      }, err => {
        err = err.json()
        console.log("ERROR!: ", err);
        this.controllers.alertError(err.Message, err.ExceptionMessage)
      })
  }

}

