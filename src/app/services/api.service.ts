import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable'
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map'
import { Store } from '@ngrx/store'
import { State } from '../reducers'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient){

  }

  getList(collection) {

    let token = localStorage.getItem('token')
    let url = 'http://localhost:3000/api/'+collection

    return this.http.get(url, {
      headers: new HttpHeaders({
        'x-access-token': token
      })
    })
  }

  postForm(collection, data) {
    let token = localStorage.getItem('token')
    let url = 'http://localhost:3000/api/'+collection
    let body = JSON.stringify(data)
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    })

  }

  getItem(collection, id) {
    let token = localStorage.getItem('token')
    let url = 'http://localhost:3000/api/'+collection+'/'+id
    return this.http.get(url, {
      headers: new HttpHeaders({
        'x-access-token': token
      })
    })

  }

  updateItem(collection, id, data) {
    let token = localStorage.getItem('token')
    let url = 'http://localhost:3000/api/'+collection+'/'+id
    let body = JSON.stringify(data)

    return this.http.put(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    })

  }

  deleteItem(collection, id) {
    let token = localStorage.getItem('token')
    let url = 'http://localhost:3000/api/'+collection+'/'+id
    return this.http.delete(url, {
      headers: new HttpHeaders({
        'x-access-token': token
      })
    })



  }

}
