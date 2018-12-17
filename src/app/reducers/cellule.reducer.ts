import { Action } from '@ngrx/store';
import { CelluleActions, CelluleActionTypes } from '../actions/cellule.actions'


export interface CelluleState {
  cellules: Array<any>,
  cellule: any,
  errorMessage: string,
  collection: string
}

export const initialState: CelluleState = {
  cellules: [],
  cellule: {},
  errorMessage: "",
  collection: ""
};

export function celluleReducer(state = initialState, action: CelluleActions): CelluleState {
  switch (action.type) {

    // case CelluleActionTypes.InitLoading:
    // return Object.assign({}, state, {collection: action['collection']})

    case CelluleActionTypes.LoadCellule:
      return Object.assign({}, state, {cellules: action['cellules']})

      case CelluleActionTypes.AddCellule:
      return Object.assign({}, state, {cellules: state.cellules.concat(action['cellule'])})

      case CelluleActionTypes.UpdateCellule:
      return Object.assign({}, state, {cellules: state.cellules.map(cellule => cellule._id == action['cellule']._id ? action['cellule'] : cellule )})

     case CelluleActionTypes.FeatureCellule:
      return Object.assign({}, state, {cellule: action['cellule']})
      case CelluleActionTypes.RemoveCellule:
      return Object.assign({}, state, {cellules: state.cellules.filter(cellule => cellule._id != action['id'])})

    case CelluleActionTypes.Fail:
      return Object.assign({}, state , {errorMessage: action['errorMessage']})


    default:
      return state;
  }
}
