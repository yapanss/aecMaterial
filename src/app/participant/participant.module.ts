import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AppMaterialModule } from './../app-material/app-material.module';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantAjoutComponent } from './participant-ajout/participant-ajout.component';
import { ParticipantListeComponent } from './participant-liste/participant-liste.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    ParticipantRoutingModule,
    FormsModule
  ],
  declarations: [ParticipantAjoutComponent, ParticipantListeComponent, EditParticipantComponent, ParticipantDetailComponent]
})
export class ParticipantModule { }
