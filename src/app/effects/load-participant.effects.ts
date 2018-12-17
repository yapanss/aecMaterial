import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { State } from '.././reducers'
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of, empty} from 'rxjs';
import {mergeMap, catchError, map, filter, withLatestFrom} from 'rxjs/operators';
import {ApiService } from '../services/api.service';
import { ParticipantActionTypes, LoadParticipant, Fail} from '../actions/participant.actions'
import { CelluleActionTypes, FeatureCellule} from '../actions/cellule.actions'
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';


@Injectable()
export class LoadParticipantEffects {

@Effect()
loadParticipants$: Observable<any> = this.actions$.pipe(
        ofType(CelluleActionTypes.LoadCellule),
        mergeMap(action =>{
             return  this.apiService.getList('participant').pipe(
                // If successful, dispatch success action with result
                map(participants => {
                  return new LoadParticipant(participants)
                })
                )
              }),

                // If request fails, dispatch failed action
                catchError((err) => of(new Fail(err)))
            )

@Effect()
loadParticipants2$: Observable<any> = this.actions$.pipe(
        ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
        filter(action => action.payload.event.url == '/participant'),
        withLatestFrom(this.store$),
        mergeMap(([action, state]) =>{
            if(state.participant.participants.length==0) {
              return  this.apiService.getList('participant').pipe(
                // If successful, dispatch success action with result
                map(participants => {
                  return new LoadParticipant(participants)
                }),
                catchError((err) => of(new Fail(err)))
                )

            }
             else return empty()
          })
      )
                // If request fails, dispatch failed action



  constructor(private actions$: Actions,
              private apiService: ApiService,
              private store$: Store<State>) {}
}
