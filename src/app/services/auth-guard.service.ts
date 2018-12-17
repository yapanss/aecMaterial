import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store'
import { State } from '../reducers'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  isLoggedIn: boolean

  constructor(private store: Store<State>,
              private route: Router) { }

  canActivate() {
    this.store.select(state => state.login)
    .subscribe(state => this.isLoggedIn = state.isLoggedIn)
    if(this.isLoggedIn) {
      return true
    } else {
      alert('Veuillez vous authentifier pour accéder à cette page')
      // this.route.navigate(['home'])
      return false
    }
  }

}
