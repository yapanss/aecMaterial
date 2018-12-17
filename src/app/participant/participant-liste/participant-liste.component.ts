import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import { MatTable } from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { ApiService} from '../../services/api.service'
import { Store } from '@ngrx/store'
import { State } from '../../reducers'
import { RemoveParticipant, } from '../../actions/participant.actions'


@Component({
  selector: 'app-participant-liste',
  templateUrl: './participant-liste.component.html',
  styleUrls: ['./participant-liste.component.css']
})
export class ParticipantListeComponent implements OnInit {

  // participants$: AngularFireList<any>
  participants
  participants2
  subscription
  columnsToDisplay: string[]
  @ViewChild(MatTable) table: MatTable<any>

  constructor(private db: AngularFireDatabase,
              private apiService: ApiService,
              private store: Store<State>) { }

  ngOnInit() {
    // this.participants = this.db.list('/participant').valueChanges()
    // console.log(this.participants)
    this.columnsToDisplay = ['nom', 'contact', 'lieu_formation', 'statut_matri',
                              'editer', 'detail', 'supprimer']
    this.subscription = this.store.select(state => state.participant)
      .subscribe(state => {
          this.participants2 = state.participants
          this.participants = new MatTableDataSource(state.participants);
      })
    }

    onSearch(searchTerm) {
      this.participants.filter = searchTerm.trim().toLowerCase()
    }

     onDelete (index) {
      if(confirm("Voulez-vous vraiment supprimer ce participant ?")) {
        let id = this.participants[index]._id
        this.apiService.deleteItem('participant', id)
        .subscribe(message => {
         this.participants.splice(index, 1)
         this.table.renderRows()
         this.store.dispatch(new RemoveParticipant(id))
      })
      }

    }

    onDestroy() {

      this.participants2 = []
      this.subscription.unsubscribe()
    }
}

