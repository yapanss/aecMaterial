import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, catchError, map} from 'rxjs/operators';
import {LoginService} from '../services/login.service';
import {UserService} from '../services/user.service';
import { AddCredentials, LoginActionTypes, UserAuthenticated, UserUnAuthenticated, UserAuthenticateFailed, GetUserData} from '../actions/login.actions'

@Injectable()
export class LoginEffects {

    @Effect()
    login$: Observable<any> = this.actions$.pipe(
        ofType(LoginActionTypes.AddCredentials),
        mergeMap(action =>
               this.loginService.login(action['username'], action['motdepasse']).pipe(
                // If successful, dispatch success action with result
                map(function(response) {
                  if(!response['success']) {
                   return new UserUnAuthenticated(response['message'])
                  } else {
                   return new UserAuthenticated(response['token'])
                  }
                }

                ),

                // If request fails, dispatch failed action
                catchError((err) => of(new UserAuthenticateFailed(err)))
            )
        )
    );

    constructor(private actions$: Actions<AddCredentials>,
                private loginService: LoginService) {}
}
// else new userAuthenticated(true, 'tout va bien', 'token')

