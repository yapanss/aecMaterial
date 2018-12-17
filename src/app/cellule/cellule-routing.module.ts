import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelluleListComponent } from './cellule-list/cellule-list.component'
import { AddCelluleComponent } from './add-cellule/add-cellule.component'
import { CelluleDetailComponent } from './cellule-detail/cellule-detail.component'
// import { EditCelluleComponent } from './edit-cellule/edit-cellule.component'
import { AuthGuardService } from '../services/auth-guard.service'

const routes: Routes = [
  {path: 'cellule', component: CelluleListComponent, canActivate: [AuthGuardService]},
  {path: 'cellule/add', component: AddCelluleComponent, canActivate: [AuthGuardService]},
  {path: 'cellule/edit/:id', component: AddCelluleComponent, canActivate: [AuthGuardService]},
  {path: 'cellule/detail/:id', component: CelluleDetailComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelluleRoutingModule { }
