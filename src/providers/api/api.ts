import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ApiProvider {
  public apiUrl = '/api/'

  constructor(public http: Http) {

    this.apiUrl = "http://localhost:2018/WebApi/"
    //this.apiUrl = "http://localhost/Primavera.WebAPI/"

  }

  setPostHeaders() {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return options
  }

  setGetHeaders() {
    let token = localStorage.getItem('token')
    let headers = new Headers()
    headers.append('Authorization', 'Bearer ' + token)
    let options = new RequestOptions({ headers: headers });
    return options
  }

  setJsonHeaders() {
    let token = localStorage.getItem('token')
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + token)
    let options = new RequestOptions({ headers: headers });
    return options
  }

}
