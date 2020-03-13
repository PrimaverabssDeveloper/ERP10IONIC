import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

@Injectable()
export class AuthServiceProvider {
  public isLoggedIn = false;

  constructor(public http: Http,
              private alertCtrl: AlertController) {
  }

  // Login a user
  login(): void {
    this.isLoggedIn = true;
  }

  // Logout a user, destroy token
  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('token')
  }

  // Returns whether the user is currently authenticated
  isAuthenticated(nav: NavController): boolean | Promise<any> {
    var token = localStorage.getItem("token")
    if (token == null) {
      setTimeout(() => { nav.setRoot(LoginPage) }, 0);
      let alert = this.alertCtrl.create({
        title: 'Acesso negado!',
        subTitle: 'Não tem acesso a essa página, por favor faça login.',
        buttons: ['Ok'],
      });
      alert.present();
      return false
    } else {
      return true
    }
  }
}

