import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';


@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  clientes: any;

  constructor(public navCtrl: NavController,
              private clientesProvider: ClientesProvider) {
  }

  ionViewDidLoad() {
    this.getBaseClientes()
  }

  doRefresh(refresher) {
    this.getBaseClientes()
    refresher.complete()
  }

  openPage(cliente) {
    this.navCtrl.push('EditaClientesPage', { clientes: cliente })
  }

  getBaseClientes() {
    this.clientesProvider.getBaseClientes().subscribe((data) => {
      this.clientes = data.DataSet.Table
    })
  }

  removeCliente(cliente) {
    this.clientesProvider.removeCliente(cliente)
  }
}
