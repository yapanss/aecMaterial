import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LoginState, loginReducer } from './login.reducer'
import { CelluleState, celluleReducer } from './cellule.reducer'
import { ParticipantState, participantReducer } from './participant.reducer'
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

export interface State {
  login: LoginState,
  cellule: CelluleState,
  participant: ParticipantState,
  router: RouterReducerState
}

export const reducers: ActionReducerMap<State> = {
  login: loginReducer,
  cellule: celluleReducer,
  participant: participantReducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
