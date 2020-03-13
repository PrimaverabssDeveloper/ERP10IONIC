import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Controllers } from '../../controllers/controllers';


@Injectable()
export class ClientesProvider {

  constructor(public http: Http,
              private apiProvider: ApiProvider,
              private controllers: Controllers) {
  }

  getBaseClientes() {
    return this.http.get(this.apiProvider.apiUrl + 'Base/Clientes/LstClientes', this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  getEditaClientes(numCliente) {
    return new Promise(resolve => {
      this.http.get(this.apiProvider.apiUrl + 'Base/Clientes/Edita/' + numCliente, this.apiProvider.setGetHeaders())
        .map(res => res.json()).subscribe(data => {
          resolve(data);
        }, err => {
          err = err.json()
          this.controllers.alertError(err.Message, err.ExceptionMessage)
          console.log("ERROR!: ", err);
        })
    })
  }

  actualizaCliente(clienteObj) {
    this.http.post(this.apiProvider.apiUrl + 'Base/Clientes/Actualiza', clienteObj, this.apiProvider.setJsonHeaders())
      .subscribe(data => {
        data.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  criarCliente(clientesObj) {
    this.http.post(this.apiProvider.apiUrl + 'Base/Clientes/Actualiza', clientesObj, this.apiProvider.setJsonHeaders())
      .subscribe(data => {
        data.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  existeCliente(cliente) {
    return this.http.get(this.apiProvider.apiUrl + 'Base/Clientes/Existe/' + cliente, this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

  removeCliente(numCliente) {
    this.http.post(this.apiProvider.apiUrl + 'Base/Clientes/Remove/' + numCliente, null, this.apiProvider.setGetHeaders())
      .subscribe(data => {
        data.json()
        let msg = "Cliente " + numCliente + " removido com sucesso"
        this.controllers.toastController(msg);
      }, err => {
        err = err.json()
        this.controllers.alertError(err.Message, err.ExceptionMessage)
        console.log("ERROR!: ", err);
      })
  }

}
