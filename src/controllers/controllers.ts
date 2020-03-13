import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController, App } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
 

@Injectable()
export class Controllers {

  constructor(public http: Http,
              private app: App,
              private authProvider: AuthServiceProvider,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
  }

  toastController(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  basicAlertController(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Ok'],
    });
    alert.present();
  }

  loader(msg) {
    let loader = this.loadingCtrl.create({
      content: msg,
      duration: 2000
    })
    return loader
  }

  alertError(subTitle, msg) {
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: subTitle,
      message: msg,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked')
          }
        },
        {
          text: 'Ir para login',
          handler: () => {
            let nav = this.app.getRootNav();
            nav.setRoot(LoginPage);
            this.authProvider.logout();
          }
        }
      ]
    })
    alert.present();
  }

}