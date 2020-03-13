import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Controllers } from '../../controllers/controllers';
import { AuthServiceProvider } from '../auth-service/auth-service';


@Injectable()
export class LoginProvider {
  constructor(private http: Http,
              private apiProvider: ApiProvider,
              private controllers: Controllers,
              private authProvider: AuthServiceProvider) {
  }

  //Request access token
  login(username, password, company) {
    let body = 'username=' + username + '&password=' + password + '&company=' + company + '&instance=DEFAULT&grant_type=password';
    this.http.post(this.apiProvider.apiUrl + 'token', body, this.apiProvider.setPostHeaders())
      .map((res) => res.json())
      .subscribe((data) => {
        this.authProvider.login();
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('token_expire', data.expires_in);
        localStorage.setItem('user', username);
        console.log("token : " + data.access_token)
      }, err => {
        this.authProvider.isLoggedIn = false;
        let msg = '';
        try {
          err = err.json()
          msg = err.error();
          ;
        }
        catch(e) {
          err = err;
          msg = err;
        }
        
        this.controllers.toastController(msg);
      })
  }

  getCompany() {
    return this.http.get(this.apiProvider.apiUrl + 'Administrador/ListaEmpresas', this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        alert("failed to get Administrador/ListaEmpresas ")
        console.log("ERROR!: ", err);
      })
  }

}
