import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../../services/api.service'
import { Store } from '@ngrx/store'
import { State } from '../../reducers'
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cellule-detail',
  templateUrl: './cellule-detail.component.html',
  styleUrls: ['./cellule-detail.component.css']
})
export class CelluleDetailComponent implements OnInit {

  id: string
  cellule: any
  fpnParticipant:Array<any>
  cdnParticipant:Array<any>
  cellules: Array<any>
  columnsToDisplay: Array<string>
  columnsToDisplay2: Array<string>

  constructor(private store: Store<State>,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.columnsToDisplay = ['meditation', 'dirigeant', 'enseignement',
                              'enseignant', 'qtion_partage', 'moderateur']
    this.columnsToDisplay2 = ['nom', 'lecture'];

    this.route.params.subscribe(params => {
      this.id = params.id
    })

     this.store.select(state => state.cellule)
     .pipe(
        map(state => {
          return state.cellules.filter(cellule => cellule._id == this.id)

        })
      )
      .subscribe(cellules => {
        this.cellules = cellules
        this.cellule = cellules[0]
        this.fpnParticipant = this.cellule.participants.filter(participant => participant.typeCellule == 'FPN')
        this.cdnParticipant = this.cellule.participants.filter(participant => participant.typeCellule == 'CDN')
      })
  }
}
