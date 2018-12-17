import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient,
              private userService: UserService) { }

  login(username, motdepasse) {
    let url = 'http://localhost:3000/api/login'
    let body = JSON.stringify({username: username, motdepasse: motdepasse})
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  setToken(token) {
    localStorage.setItem('token', token)
  }

  setName(nom) {
    localStorage.setItem('nom', nom)
  }

  logout() {

  }

}
