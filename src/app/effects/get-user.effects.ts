import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, switchMap, catchError, map} from 'rxjs/operators';
import {UserService} from '../services/user.service';
import { LoginActionTypes, GetUserData, UserAuthenticateFailed} from '../actions/login.actions'

@Injectable()
export class GetUserEffects {

@Effect()
    getUser$: Observable<any> = this.actions$.pipe(
        ofType(LoginActionTypes.UserAuthenticated),
        mergeMap(action =>
               this.userService.getUser(action['token']).pipe(
                // If successful, dispatch success action with result
                map(user => new GetUserData(action['token'], user['nom']))
                )

                // If request fails, dispatch failed action
                // catchError((err) => of(new UserAuthenticateFailed(err)))
            )
        )

  constructor(private actions$: Actions,
              private userService: UserService) {}
}
