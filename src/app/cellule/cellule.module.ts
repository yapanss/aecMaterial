import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './../app-material/app-material.module';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { CelluleListComponent } from './cellule-list/cellule-list.component'
import { AddCelluleComponent } from './add-cellule/add-cellule.component'
import { CelluleDetailComponent } from './cellule-detail/cellule-detail.component'
// import { EditCelluleComponent } from './edit-cellule/edit-cellule.component'

import { CelluleRoutingModule } from './cellule-routing.module';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  imports: [
    CommonModule,
    CelluleRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMomentDateModule,
    FormsModule
  ],
  declarations: [
    CelluleListComponent,
    AddCelluleComponent,
    CelluleDetailComponent,
    SearchPipe
    // EditCelluleComponent

  ]
})
export class CelluleModule { }
