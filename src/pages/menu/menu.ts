import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Nav, AlertController, App, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MenuProvider } from '../../providers/menu/menu';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'ArtigosPage';
  activePage: any;
  username = localStorage.getItem('user')
  pages: any
  selectedMenu: any

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              private alertCtrl: AlertController,
              private app: App,
              private menuProvider: MenuProvider,
              private menuCtrl: MenuController,
              private authProvider: AuthServiceProvider) {
                
    this.pages = this.menuProvider.sideMenuPages()
    this.activePage = this.pages[0]
  }

  ionViewCanEnter(): boolean | Promise<any> {
    return this.authProvider.isAuthenticated(this.navCtrl);
  }

  openPage(page, index) {
    if (page.component) {
      this.nav.setRoot(page.component);
      this.activePage = page;
      this.menuCtrl.close();
    } else {
      if (this.selectedMenu) {
        this.selectedMenu = 0;
      } else {
        this.selectedMenu = index;
      }
    }
  }

  checkActive(page) {
    return page == this.activePage
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Tem a certeza que deseja sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked')
          }
        },
        {
          text: 'Sim',
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
