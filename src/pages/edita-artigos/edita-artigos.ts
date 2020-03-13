import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtigosProvider } from '../../providers/artigos/artigos';
import { IEditaArtigos } from '../../interfaces/interfaces';
import { Controllers } from '../../controllers/controllers';


@IonicPage()
@Component({
  selector: 'page-edita-artigos',
  templateUrl: 'edita-artigos.html',
})
export class EditaArtigosPage {
  artigosObj = {} as Partial<IEditaArtigos>

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private artigosProvider: ArtigosProvider,
              private controllers: Controllers) {
  }

  ionViewDidLoad() {
    this.editaArtigos()
  }

  async editaArtigos() {
    let numArtigo = this.navParams.get('artigos')
    return await this.artigosProvider.getEditaArtigos(numArtigo).then(data => {
      this.artigosObj = data;
    })
  }

  atualizaArtigo() {
    let numArtigo = this.navParams.get('artigos')
    let msg = "A actualizar.."
    let loader = this.controllers.loader(msg)
    loader.present().then(() => {
      this.artigosProvider.actualizaArtigo(this.artigosObj)
    });
    loader.onDidDismiss(() => {
      let msg = "Artigo " + numArtigo + " actualizado com sucesso"
      this.controllers.toastController(msg)
      this.navCtrl.setRoot('ArtigosPage')
    })
  }
}
