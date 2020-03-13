import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ArtigosProvider } from '../../providers/artigos/artigos';


@IonicPage()
@Component({
  selector: 'page-artigos',
  templateUrl: 'artigos.html',
})
export class ArtigosPage {
  artigos: any;

  constructor(private navCtrl: NavController,
              private artigosProvider: ArtigosProvider) {
  }

  ionViewDidLoad() {
    this.getBaseArtigos()
  }

  doRefresh(refresher) {
    this.getBaseArtigos()
    refresher.complete()
  }

  openPage(artigo) {
    this.navCtrl.push('EditaArtigosPage', { artigos: artigo })
  }

  getBaseArtigos() {
    this.artigosProvider.getBaseArtigos().subscribe(data => {
      this.artigos = data.DataSet.Table;
    })
  }

  removeArtigo(artigo) {
    this.artigosProvider.removeArtigo(artigo)
  }
}