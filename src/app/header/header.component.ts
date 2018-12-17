import { Component, OnInit} from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { State } from '../reducers'
import { Logout } from '../actions/login.actions'
import { LoadCellule } from '../actions/cellule.actions'
import { LoadParticipant } from '../actions/participant.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nom: string

  constructor(private loginService: LoginService,
              private route: Router,
              private store: Store<State>) { }

  ngOnInit() {
    this.store.select(state => state.login)
    .subscribe(state => {
      this.nom = state.nom
    })
  }

  onLogout() {
    this.store.dispatch(new Logout())
    this.loginService.setName("")
    this.loginService.setToken("")

    this.route.navigate(['home'])
  }
}


