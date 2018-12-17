import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database'
import { ApiService} from '../../services/api.service'
import { Store } from '@ngrx/store'
import { State } from '../../reducers'
import { Params, ActivatedRoute, Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { AddParticipant, UpdateParticipant } from '../../actions/participant.actions'
import {DateAdapter} from '@angular/material';

@Component({
  selector: 'app-participant-ajout',
  templateUrl: './participant-ajout.component.html',
  styleUrls: ['./participant-ajout.component.css']
})
export class ParticipantAjoutComponent implements OnInit {

  nom: string
  contact: string
  dateArrivee: Date
  invitePar: string
  religion: string
  statutMatrimonial: string
  sexe: string
  lieuFormation: string
  participant: any
  id: string

  constructor(private db: AngularFireDatabase,
              private apiService: ApiService,
              private store: Store<State>,
              private route: ActivatedRoute,
              private router: Router,
              private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('fr')
  }

  ngOnInit() {

    this.route.params.subscribe(params => this.id = params.id)

    this.store.select(state => state.participant)
    .pipe(
      map(state => {
        if(this.id) {
          return state.participants.filter(participant => participant._id == this.id)[0]
        }
      })
    ).subscribe(participant => this.participant = participant)

    if(this.participant) {
      this.nom = this.participant.nom
      this.contact = this.participant.contact
      this.dateArrivee = this.participant.dateArrivee
      this.invitePar = this.participant.invitePar
      this.religion = this.participant.religion
      this.statutMatrimonial = this.participant.statutMatrimonial
      this.sexe = this.participant.sexe
      this.lieuFormation = this.participant.lieuFormation
    }
  }

  onSubmit(e) {
    // this.db.list('/participant').push({
    //   nom: this.nom,
    //   contact: this.contact
    // })

    e.preventDefault()

    let data = {
        nom: this.nom,
        contact: this.contact,
        dateArrivee: this.dateArrivee,
        invitePar: this.invitePar,
        religion: this.religion,
        statutMatrimonial: this.statutMatrimonial,
        sexe: this.sexe,
        lieuFormation: this.lieuFormation
    }

    if(this.id) {
      this.apiService.updateItem('participant', this.id, data)
      .subscribe(response => {
        this.store.dispatch(new UpdateParticipant(response['participant']))
         alert('participant successfuly updated !')
      })
    } else {
      this.apiService.postForm('participant', data)
      .subscribe(response => {
        this.store.dispatch(new AddParticipant(response))
      alert('participant successfuly created !')
      })

    this.router.navigate(['participant'])
    }
  }
}
