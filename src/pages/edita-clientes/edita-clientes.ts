import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { IEditaClientes } from '../../interfaces/interfaces';
import { Controllers } from '../../controllers/controllers';


@IonicPage()
@Component({
  selector: 'page-edita-clientes',
  templateUrl: 'edita-clientes.html',
})
export class EditaClientesPage {
  clientesObj = {} as Partial<IEditaClientes>

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private clientesProvider: ClientesProvider,
              private controllers: Controllers) {
  }

  ionViewDidLoad() {
    this.editaClientes()
  }

  async editaClientes() {
    let numCliente = this.navParams.get('clientes')
    return await this.clientesProvider.getEditaClientes(numCliente).then(data => {
      this.clientesObj = data
    })
  }

  atualizaCliente() {
    let numCliente = this.navParams.get('clientes')
    let msg = "A actualizar.."
    let loader = this.controllers.loader(msg)
    loader.present().then(() => {
      this.clientesProvider.actualizaCliente(this.clientesObj)
    });
    loader.onDidDismiss(() => {
      let msg = "Cliente " + numCliente + " actualizado com sucesso"
      this.controllers.toastController(msg)
      this.navCtrl.setRoot('ClientesPage')
    })
  }
}
