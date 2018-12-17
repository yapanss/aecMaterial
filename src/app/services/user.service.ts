import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(token) {
    let url = 'http://localhost:3000/me'
    return this.http.get(url, {
      headers: new HttpHeaders({
            'x-access-token': token
      })
    })

  }
}
