import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantListeComponent } from './participant-liste/participant-liste.component'
import { ParticipantAjoutComponent } from './participant-ajout/participant-ajout.component'
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component'
// import { EditParticipantComponent } from './edit-participant/edit-participant.component'
import { AuthGuardService } from '../services/auth-guard.service'

const routes: Routes = [
  {path: 'participant', component: ParticipantListeComponent, canActivate: [AuthGuardService]},
  {path: 'participant/ajout', component: ParticipantAjoutComponent, canActivate: [AuthGuardService]},
  {path: 'participant/edit/:id', component: ParticipantAjoutComponent, canActivate: [AuthGuardService]},
  {path: 'participant/detail/:id', component: ParticipantDetailComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
