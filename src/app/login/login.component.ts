import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { State } from '../reducers'
import { AddCredentials } from '../actions/login.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginMessage: string
  username: string
  motdepasse: string
  nom: string

  constructor(private loginService: LoginService,
              private route: Router,
              private userService: UserService,
              private store: Store<State>) { }

  ngOnInit() {
    this.store.select(state => state.login)
    .subscribe(state => {
      this.loginMessage = state.loginMessage
      this.nom = state.nom
      console.log(state)
      if(this.nom) {
        this.loginService.setName(this.nom)
        this.loginService.setToken(state.token)
        this.route.navigate(['home'])

      }
    })
  }

  onSubmit(e) {
    e.preventDefault()

    this.store.dispatch(new AddCredentials(this.username, this.motdepasse))
    }

    }





