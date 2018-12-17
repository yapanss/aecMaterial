import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Store } from '@ngrx/store'
import { State } from '../../reducers'
import { AddCellule, UpdateCellule } from '../../actions/cellule.actions'
import { Params, ActivatedRoute, Router } from '@angular/router'
import {switchMap, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {from, of, combineLatest} from 'rxjs';
import {DateAdapter} from '@angular/material';

@Component({
  selector: 'app-add-cellule',
  templateUrl: './add-cellule.component.html',
  styleUrls: ['./add-cellule.component.css']
})
export class AddCelluleComponent implements OnInit {

  id: string
  celluleForm: FormGroup
  listeParticipants
  listeParticipantsEdit
  cellules
  cellule
  allChecked: boolean
  typeCellules: Array<string> = ['FPN', 'CDN']
  livres: Array<string> = ["Gen", "Exo", "Lev", "Nom", "Deu", "Jos"]
  chapitres: Array<number> = [1,2,3,4,5,6,7,8,9,10]
  meditOptions: Array<string> = ["Juges 1", "Juges 2", "Juges 3", "Juges 4", "Juges 5"]
  enseignOptions: Array<string> = ["Le Choix", "La Justice", "Le Courage", "La Serviabilité"]
  fpnPartageOptions: Array<string> = ["Mécanicien", "Les Animaux", "Vous êtes dans une comm."]

  columnsToDisplay: string[]

  constructor(private apiService: ApiService,
              private fb: FormBuilder,
              private store: Store<State>,
              private route: ActivatedRoute,
              private router: Router,
              private dateAdapter: DateAdapter<Date> ) {
    this.dateAdapter.setLocale('fr')
    this.createForm()
  }

  ngOnInit() {

    this.columnsToDisplay = ["check", "nom", "type_cellule", "livre", "chapitre"];

    let celluleState$ = this.store.select(state => state.cellule)
    let participantState$ = this.store.select(state => state.participant)


this.route.params.subscribe(params => {
  this.id = params.id
})

// ************************************************************

const source = combineLatest(celluleState$, participantState$)

// ************************************************************
 source.pipe(
    map((state) => {

        state[1].participants.map(participant => {
        participant.isChecked = false
        participant.livre = ""
        participant.chap = ""
        participant.typeCellule = ""
      })
      return [state[0].cellules, state[1].participants]
   }),

    map(array => {
    if(this.id) {
      let cellule = array[0].filter(cellule => cellule._id == this.id)[0]
      let celluleIds = cellule.participants.map(participant => participant._id)
      let participantsEdit = array[1].map(participant => {
        let id = celluleIds.indexOf(participant._id)
        return id != -1 ? cellule.participants[id] : participant
      })
      return [cellule, participantsEdit]
    } else return ["", array[1]]
})

 ).subscribe(array => {
  this.cellule = array[0]
  this.listeParticipants = array[1]
})
    if(this.id) {
      this.celluleForm.setValue({
        champGroup: {
            dateCellule: this.cellule.date,
            champ: this.cellule.champ,
            lieu: this.cellule.lieu,
            relecture: this.cellule.relecture
        },
        fpnGroup: {
          fpnTotal: this.cellule.fpn.nombreParticipants,
            fpnNouveaux: this.cellule.fpn.nombreNouveaux,
            meditationTexte: this.cellule.fpn.meditationTexte,
            meditationDirigeant: this.cellule.fpn.meditationDirigeant,
            enseignementTitre: this.cellule.fpn.enseignementTitre,
            enseignant: this.cellule.fpn.enseignementDirigeant,
            questionPartage: this.cellule.fpn.questionPartage,
            moderateur: this.cellule.fpn.questionPartageDirigeant
        },
        cdnGroup: {
          cdnTotal: this.cellule.cdn.nombreParticipants,
            cdnNouveaux: this.cellule.cdn.nombreNouveaux,
            meditationTexte: this.cellule.cdn.meditationTexte,
            meditationDirigeant: this.cellule.cdn.meditationDirigeant,
            enseignementTitre: this.cellule.cdn.enseignementTitre,
            enseignant: this.cellule.cdn.enseignementDirigeant,
            questionPartage: this.cellule.cdn.questionPartage,
            moderateur: this.cellule.cdn.questionPartageDirigeant
          },
          veaGroup: {
            veaTotal: this.cellule.vea.nombreParticipants,
            veaNouveaux: this.cellule.vea.nombreNouveaux,
            enseignementTitre: this.cellule.vea.enseignementTitre,
            enseignant: this.cellule.vea.enseignementDirigeant
          },
          participantGroup: {}

      })
    }
  }

createForm() {
    this.celluleForm = this.fb.group({
        champGroup: this.fb.group({
        dateCellule: "",
        champ: "",
        lieu: "",
        relecture: ""
      }),

      fpnGroup: this.fb.group({
        fpnTotal: "",
        fpnNouveaux: "",
        meditationTexte: "",
        meditationDirigeant: "",
        enseignementTitre: "",
        enseignant: "",
        questionPartage: "",
        moderateur: ""
      }),
      cdnGroup: this.fb.group({
        cdnTotal: "",
        cdnNouveaux: "",
        meditationTexte: "",
        meditationDirigeant: "",
        enseignementTitre: "",
        enseignant: "",
        questionPartage: "",
        moderateur: ""
      }),
      veaGroup: this.fb.group({
        veaTotal: "",
        veaNouveaux: "",
        enseignementTitre: "",
        enseignant: ""
      }),
      participantGroup: this.fb.group({

      })

    })

  }

  checkAll() {
    if(this.areAllChecked(this.listeParticipants)) {
     this.listeParticipants.map(participant => participant.isChecked=false)
     this.allChecked = false
    }
    else{
      this.listeParticipants.map(participant => participant.isChecked=true)
      this.allChecked = true
    }

  }

  checkOne(index) {
    this.listeParticipants[index].isChecked=!this.listeParticipants[index].isChecked
    if(!this.areAllChecked(this.listeParticipants)) {
      this.allChecked = false
    } else this.allChecked = true
  }

  areAllChecked(list) {
    let i = 0
    while(i<list.length && list[i].isChecked) {
      i = i+1
    }
    if(i==list.length) {
      return true
    }
    return false
  }

  submitCellule(e) {
    e.preventDefault()
    var cellule = this.celluleForm.value
    // cellule.participantGroup.participants = this.listeParticipants.filter(participant => participant.isChecked)
    let data = {
      fpn:{
        nombreParticipants: cellule.fpnGroup.fpnTotal,
        nombreNouveaux: cellule.fpnGroup.fpnNouveaux,
        meditationTexte: cellule.fpnGroup.meditationTexte,
        meditationDirigeant: cellule.fpnGroup.meditationDirigeant,
        questionPartage: cellule.fpnGroup.questionPartage,
        questionPartageDirigeant: cellule.fpnGroup.moderateur,
        enseignementTitre: cellule.fpnGroup.enseignementTitre,
        enseignementDirigeant: cellule.fpnGroup.enseignant
       },
       cdn:{
        nombreParticipants: cellule.cdnGroup.cdnTotal,
        nombreNouveaux: cellule.cdnGroup.cdnNouveaux,
        meditationTexte: cellule.cdnGroup.meditationTexte,
        meditationDirigeant: cellule.cdnGroup.meditationDirigeant,
        questionPartage: cellule.cdnGroup.questionPartage,
        questionPartageDirigeant: cellule.cdnGroup.moderateur,
        enseignementTitre: cellule.cdnGroup.enseignementTitre,
        enseignementDirigeant: cellule.cdnGroup.enseignant
       },
       vea: {
        nombreParticipants: cellule.veaGroup.veaTotal,
        nombreNouveaux: cellule.veaGroup.veaNouveaux,
        enseignementTitre: cellule.veaGroup.enseignementTitre,
        enseignementDirigeant: cellule.veaGroup.enseignant
       },
       date: cellule.champGroup.dateCellule,
       champ: cellule.champGroup.champ,
       lieu: cellule.champGroup.lieu,
       participants: this.listeParticipants.filter(participant => participant.isChecked),
       relecture: cellule.champGroup.relecture
    }

    if(this.id) {
      this.apiService.updateItem('cellule', this.id, data)
      .subscribe(response => {
        this.store.dispatch(new UpdateCellule(response['cellule']))
        console.log(response['cellule'])
         alert('cellule successfuly updated !')
      })
    }
    else {
      this.apiService.postForm('cellule', data)
      .subscribe(response => {

        this.store.dispatch(new AddCellule(response))
        alert('cellule successfuly saved !')
    })
    }

    this.router.navigate(['cellule'])
  }

}
