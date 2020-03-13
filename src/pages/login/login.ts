import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Controllers } from '../../controllers/controllers';
import { ILogin } from '../../interfaces/interfaces';
import { MessagesValidator } from '../../validators/messages';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  companyForm: FormGroup;
  loginObj = {} as ILogin;
  companies: any[];
  passwordType: string = 'password';
  passwordShown: boolean = false;
  @ViewChild(Slides) slider: Slides;
  validationMessages = this.messagesValidator.login();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private loginProvider: LoginProvider,
              private authServiceProvider: AuthServiceProvider,
              private controllers: Controllers,
              private messagesValidator: MessagesValidator) {

    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required,
      Validators.pattern('[a-zA-Z.]*'),
      Validators.minLength(1),
      Validators.maxLength(20)])),
      password: new FormControl('', Validators.compose([Validators.required])),
    })

    this.companyForm = this.formBuilder.group({
      company: new FormControl('', Validators.compose([Validators.required])),
    })
  }

  togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password'
    } else {
      this.passwordShown = true;
      this.passwordType = 'text'
    }
  }

  getCompany() {
    this.loginProvider.getCompany().subscribe(data => {
      this.companies = data
    })
  }

  login() {
    let msg = "A carregar empresas.."
    let loader = this.controllers.loader(msg)
    if (this.loginForm.valid) {
      loader.present().then(() => {
        this.loginProvider.login(this.loginObj.username, this.loginObj.password, this.loginObj.company = '')
      });
      loader.onDidDismiss(() => {
        this.getCompany();
        this.slider.slideTo(1, 500);
      });
    } else {
      let msg = "Login Inválido"
      this.controllers.toastController(msg)
    }
  }

  loginApp() {
    let msg = "A fazer login.."
    let loader = this.controllers.loader(msg)
    if (this.companyForm.valid) {
      loader.present().then(() => {
        this.loginProvider.login(this.loginObj.username, this.loginObj.password, this.loginObj.company)
      })
      loader.onDidDismiss(() => {
        if(this.authServiceProvider.isLoggedIn)
        {
          let msg = "Login feito com sucesso"
          this.controllers.toastController(msg)
          this.navCtrl.setRoot('MenuPage')
        }
        else
        {
          let msg = "Login inválido"
          this.controllers.toastController(msg)
        }
      })
    } else {
      let msg = "Selecione uma empresa"
      this.controllers.toastController(msg)
    }
  }
}
