import { Action } from '@ngrx/store';

export enum CelluleActionTypes {
  LoadCellule = '[Cellule] Load Cellule',
  InitLoading = '[Cellule] Initiate Loading',
  AddCellule = '[Cellule] Add Cellule',
  FeatureCellule = '[Cellule] Feature Cellule',
  UpdateCellule = '[Cellule] Update Cellule',
  RemoveCellule = '[Cellule] Remove Cellule',
  Fail = '[Cellule] Actions Failed'
}

export class InitLoading implements Action {
  readonly type = CelluleActionTypes.InitLoading;

  // constructor(public collection: string){}
}

export class LoadCellule implements Action {
  readonly type = CelluleActionTypes.LoadCellule;

  constructor(public cellules) {}

}

export class AddCellule implements Action {
  readonly type = CelluleActionTypes.AddCellule;

  constructor(public cellule: any) {}

}

export class FeatureCellule implements Action {
  readonly type = CelluleActionTypes.FeatureCellule;

  constructor(public cellule: any) {}

}

export class UpdateCellule implements Action {
  readonly type = CelluleActionTypes.UpdateCellule;

  constructor(public cellule: any) {}
}

export class RemoveCellule implements Action {
  readonly type = CelluleActionTypes.RemoveCellule;

  constructor(public id: string) {}
}

export class Fail implements Action {
  readonly type = CelluleActionTypes.Fail;

  constructor(public errorMessage: string) {}
}


export type CelluleActions = LoadCellule | InitLoading | AddCellule | FeatureCellule | UpdateCellule | RemoveCellule | Fail;
