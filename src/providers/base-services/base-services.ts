import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';


@Injectable()
export class BaseServicesProvider {

  constructor(public http: Http,
              private apiProvider: ApiProvider) {
  }

  listaMoedas() {
    return this.http.get(this.apiProvider.apiUrl + 'Base/Moedas/Lista', this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        console.log("ERROR!: ", err);
      })
  }

  listaPaises() {
    return this.http.get(this.apiProvider.apiUrl + 'Base/Paises/Lista', this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        console.log("ERROR!: ", err);
      })
  }

}
