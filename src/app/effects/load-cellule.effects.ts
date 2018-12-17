import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { State } from '.././reducers'
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of, empty} from 'rxjs';
import {mergeMap, catchError, map, filter, withLatestFrom} from 'rxjs/operators';
import {ApiService } from '../services/api.service';
import { CelluleActionTypes, LoadCellule, Fail} from '../actions/cellule.actions'
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';



@Injectable()
export class LoadCelluleEffects {

@Effect()
loadCellules$: Observable<any> = this.actions$.pipe(
        ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
        filter(action => action.payload.event.url == '/cellule'),
        withLatestFrom(this.store$),
        mergeMap(([action, state]) => {
              console.log(state.cellule.cellules.length)
              if(state.cellule.cellules.length==0) {
                 return this.apiService.getList('cellule').pipe(
                // If successful, dispatch success action with result
                map(cellules => new LoadCellule(cellules)),
                catchError((err) => of(new Fail(err)))
                )

              }
              else return empty()
            })

                // If request fails, dispatch failed action

            )

  constructor(private actions$: Actions,
              private apiService: ApiService,
              private store$: Store<State>) {}
}
