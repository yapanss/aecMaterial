import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  AddCredentials = '[Login], Add Credentials',
  UserAuthenticated = '[Login] User Authenticated',
  UserUnAuthenticated = '[Login] User UnAuthenticated',
  UserAuthenticateFailed = '[Login] User Authentication Failed',
  GetUserData = '[Login] Get User Data',
  Logout = '[Login] Logout'
}

export class AddCredentials implements Action {
  readonly type = LoginActionTypes.AddCredentials;

  constructor(public username: string, public motdepasse: string) {}
}

export class UserAuthenticated implements Action {
  readonly type = LoginActionTypes.UserAuthenticated;

  constructor(public token: string) {}
}

export class UserUnAuthenticated implements Action {
  readonly type = LoginActionTypes.UserUnAuthenticated;

  constructor(public loginMessage: string) {}
}

export class GetUserData implements Action {
  readonly type = LoginActionTypes.GetUserData;

  constructor(public token: string, public nom: string) {}
}

export class UserAuthenticateFailed implements Action {
  readonly type = LoginActionTypes.UserAuthenticateFailed;

  constructor(public errorMessage: string) {}

}

export class Logout implements Action {
  readonly type = LoginActionTypes.Logout;

}

export type LoginActions = AddCredentials | UserAuthenticated | UserUnAuthenticated | UserAuthenticateFailed | Logout | GetUserData;
