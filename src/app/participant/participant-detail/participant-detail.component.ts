import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { State } from '../../reducers'
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styleUrls: ['./participant-detail.component.css']
})
export class ParticipantDetailComponent implements OnInit {

  participant: any
  cellulesParticipees: Array<any>
  columnsToDisplay: Array<string>
  id: string

  constructor(private route: ActivatedRoute,
              private store: Store<State>) { }

  ngOnInit() {
    this.columnsToDisplay = ['date', 'type_cellule', 'meditation',
                             'enseignement', 'question_partage', 'lecture']

    this.route.params.subscribe(params => this.id = params.id)
    this.store.select(state => {
      return [state.cellule.cellules, state.participant.participants]
    }).pipe(
      map(array => {
        let participant = array[1].filter(participant => participant._id == this.id)[0]
        let cellules = array[0].filter(cellule => {
        let participants = cellule.participants
        let idArray = participants.map(participant => participant._id)
        if(idArray.indexOf(this.id) != -1) {
            return true
        }
      })
        // .filter(participants => participants.indexOf(id) != -1)
        return [cellules, participant]
      }),
      map(array => {
        let cellules = array[0].map(cellule => {
        let index = cellule.participants.map(participant => participant._id).indexOf(this.id)
        let typeCellule = cellule.participants[index].typeCellule
        return {
              date: cellule.date,
              lieu: cellule.lieu,
              typeCellule: typeCellule,
              meditation: typeCellule == 'FPN'? cellule.fpn.meditationTexte : cellule.cdn.meditationTexte,
              dirigeant: typeCellule == 'FPN'? cellule.fpn.meditationDirigeant : cellule.cdn.meditationDirigeant,
              enseignement: typeCellule == 'FPN'? cellule.fpn.enseignementTitre : cellule.cdn.enseignementTitre,
              enseignant: typeCellule == 'FPN'? cellule.fpn.enseignementDirigeant : cellule.cdn.enseignementDirigeant,
              questionPartage: typeCellule == 'FPN'? cellule.fpn.questionPartage : cellule.cdn.questionPartage,
              moderateur: typeCellule == 'FPN'? cellule.fpn.questionPartageDirigeant : cellule.cdn.questionPartageDirigeant,
              lecture: cellule.participants[index].livre + " "  + cellule.participants[index].chap
            }
        })
        return [cellules, array[1]]
      })
    ).subscribe(array => {
        this.participant = array[1]
        this.cellulesParticipees = array[0]
      })
  }

}
