import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Store } from '@ngrx/store'
import { State } from '../reducers'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nom: string

  constructor(private loginService: LoginService,
              private store: Store<State>) { }

  ngOnInit() {

      this.store.select(state => state.login)
      .subscribe(state => this.nom = state.nom)


  }
}

