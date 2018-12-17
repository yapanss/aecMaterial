// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../../services/api.service'
// import { Params, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { Store } from '@ngrx/store'
// import { State } from '../../reducers'

// @Component({
//   selector: 'app-editcellule',
//   templateUrl: './editcellule.component.html',
//   styleUrls: ['./editcellule.component.css']
// })
// export class EditCelluleComponent implements OnInit {

//   cellule: any

//   celluleForm: FormGroup
//   listeParticipants
//   allChecked: boolean
//   livres: Array<string> = ["Gen", "Exo", "Lev", "Nom", "Deu", "Jos"]
//   chapitres: Array<number> = [1,2,3,4,5,6,7,8,9,10]

//   constructor(private apiService: ApiService,
//               private route: ActivatedRoute,
//               private store: Store<State>,
//               private fb: FormBuilder) {
//     this.createForm()
//   }

//   ngOnInit() {

//     this.store.select(state => {
//       return [state.cellule, state.participant]
//     })
//     .subscribe(state => {
//       this.cellule = state[0].cellule
//       this.listeParticipants = state[1].participants
//       let celluleIds = this.cellule.participants.map(participant => participant._id)
//       this.listeParticipants = this.listeParticipants.map(participant => {
//         let i = celluleIds.indexOf(participant._id)
//         if(i !=-1) {
//           participant=this.cellule.participants[i]
//         }
//         return participant
//       })


//     })

//   }

//   onUpdate(e) {
//     e.preventDefault()
//     let id = this.route.snapshot.params['id']
//     this.apiService.updateItem('cellule', id, this.cellule)
//     .subscribe(cellule => alert(`Cellule mise à jour. \n
//                            La nouvelle cellule est : ${JSON.stringify(cellule)}`))
//   }

//   // createForm() {

//   //       this.celluleForm = this.fb.group({
//   //       champGroup: this.fb.group({
//   //       dateCellule: this.cellule.date,
//   //       champ: this.cellule.champ,
//   //       lieu: this.cellule.lieu
//   //     }),

//   //     fpnGroup: this.fb.group({
//   //       fpnTotal: this.cellule.fpn.nombreParticipants,
//   //       fpnNouveaux: this.cellule.fpn.nombreNouveaux,
//   //       meditationTexte: this.cellule.fpn.meditationTexte,
//   //       meditationDirigeant: this.cellule.fpn.meditationDirigeant,
//   //       enseignementTitre: this.cellule.fpn.enseignementTitre,
//   //       enseignant: this.cellule.fpn.enseignementDirigeant,
//   //       questionPartage: this.cellule.fpn.questionPartage,
//   //       moderateur: this.cellule.fpn.questionPartageDirigeant
//   //     }),
//   //     cdnGroup: this.fb.group({
//   //       cdnTotal: this.cellule.cdn.nombreParticipants,
//   //       cdnNouveaux: this.cellule.cdn.nombreNouveaux,
//   //       meditationTexte: this.cellule.cdn.meditationTexte,
//   //       meditationDirigeant: this.cellule.cdn.meditationDirigeant,
//   //       enseignementTitre: this.cellule.cdn.enseignementTitre,
//   //       enseignant: this.cellule.cdn.enseignementDirigeant,
//   //       questionPartage: this.cellule.cdn.questionPartage,
//   //       moderateur: this.cellule.cdn.questionPartageDirigeant
//   //     }),
//   //     veaGroup: this.fb.group({
//   //       veaTotal: this.cellule.vea.nombreParticipants,
//   //       veaNouveaux: this.cellule.vea.nombreNouveaux,
//   //       enseignementTitre: this.cellule.vea.enseignementTitre,
//   //       enseignant: this.cellule.vea.enseignementDirigeant
//   //     }),
//   //     participantGroup: this.fb.group({

//   //     })

//   //   })

//   // }

//   // ******************************************

//   createForm() {

//         this.celluleForm = {
//           champGroup: this.fb.group({
//           dateCellule: "",
//           champ: "",
//           lieu: ""
//       }),

//       fpnGroup: this.fb.group({
//         fpnTotal: "",
//         fpnNouveaux:"",
//         meditationTexte: "",
//         meditationDirigeant: "",
//         enseignementTitre: "",
//         enseignant: "",
//         questionPartage: "",
//         moderateur:""
//       }),
//       cdnGroup: this.fb.group({
//         cdnTotal: "",
//         cdnNouveaux: "",
//         meditationTexte: "",
//         meditationDirigeant: "",
//         enseignementTitre: "",
//         enseignant: "",
//         questionPartage: "",
//         moderateur: ""
//       }),
//       veaGroup: this.fb.group({
//         veaTotal: "",
//         veaNouveaux: "",
//         enseignementTitre: "",
//         enseignant: ""
//       }),
//       participantGroup: this.fb.group({

//       })
//     }
//   }

//   // ******************************************

//   checkAll() {
//     if(this.areAllChecked(this.listeParticipants)) {
//      this.listeParticipants.map(participant => participant.isChecked=false)
//      this.allChecked = false
//     }
//     else{
//       this.listeParticipants.map(participant => participant.isChecked=true)
//       this.allChecked = true
//     }

//   }

//   checkOne(index) {
//     this.listeParticipants[index].isChecked=!this.listeParticipants[index].isChecked
//     if(!this.areAllChecked(this.listeParticipants)) {
//       this.allChecked = false
//     } else this.allChecked = true
//   }

//   areAllChecked(list) {
//     let i = 0
//     while(i<list.length && list[i].isChecked) {
//       i = i+1
//     }
//     if(i==list.length) {
//       return true
//     }
//     return false
//   }

// }
