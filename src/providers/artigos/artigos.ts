import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Controllers } from '../../controllers/controllers';


@Injectable()
export class ArtigosProvider {

  constructor(public http: Http,
              private apiProvider: ApiProvider,
              private controllers: Controllers) {
  }

  getBaseArtigos() {
    return this.http.get(this.apiProvider.apiUrl + 'Base/Artigos/LstArtigos', this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  getEditaArtigos(numArtigo) {
    return new Promise(resolve => {
      this.http.get(this.apiProvider.apiUrl + 'Base/Artigos/Edita/' + numArtigo, this.apiProvider.setGetHeaders())
        .map(res => res.json()).subscribe(data => {
          resolve(data);
        }, err => {
          err = err.json()
          this.controllers.alertError(err.Message, err.ExceptionMessage)
          console.log("ERROR!: ", err);
        })
    })
  }

  actualizaArtigo(artigo) {
    this.http.post(this.apiProvider.apiUrl + 'Base/Artigos/Actualiza', artigo, this.apiProvider.setJsonHeaders())
      .subscribe(data => {
        data.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  removeArtigo(numArtigo) {
    this.http.post(this.apiProvider.apiUrl + 'Base/Artigos/Remove/' + numArtigo, null, this.apiProvider.setGetHeaders())
      .subscribe(data => {
        data.json()
        let msg = "Artigo " + numArtigo + " removido com sucesso"
        this.controllers.toastController(msg);
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  criarArtigo(artigosObj) {
    this.http.post(this.apiProvider.apiUrl + 'Base/Artigos/Actualiza', artigosObj, this.apiProvider.setJsonHeaders())
      .subscribe(data => {
        data.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  existeArtigo(artigo) {
    return this.http.get(this.apiProvider.apiUrl + 'Base/Artigos/Existe/' + artigo, this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

}