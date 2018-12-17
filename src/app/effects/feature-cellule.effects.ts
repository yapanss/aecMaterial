import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store'
import { State } from '.././reducers'
import {Observable, of, empty} from 'rxjs';
import {mergeMap, catchError, map, filter, withLatestFrom} from 'rxjs/operators';
import {ApiService } from '../services/api.service';
import { CelluleActionTypes, LoadCellule, Fail} from '../actions/cellule.actions'
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';


@Injectable()
export class FeatureCelluleEffects {

  @Effect()
    featureCellule$: Observable<any> = this.actions$.pipe(
        ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
        filter(action => action.payload.event.url.startsWith('/cellule/edit')),
        withLatestFrom(this.store$),
        mergeMap(([action, state]) => {
              if(state.cellule.cellules.length==0) {
                let id = action.payload.event.url.split('/').pop();
                return this.apiService.getList('cellule').pipe(
                  // If successful, dispatch success action with result
                  map(cellules => new LoadCellule(cellules)),

                  // If request fails, dispatch failed action
                  catchError((err) => of(new Fail(err)))
              )
            }
            else return empty()
            })

    );

  constructor(private actions$: Actions<RouterNavigationAction>,
              private apiService: ApiService,
              private store$: Store<State>) {}
}
