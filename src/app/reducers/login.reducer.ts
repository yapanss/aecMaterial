import { Action } from '@ngrx/store';
import { LoginActions, LoginActionTypes } from '../actions/login.actions'

export interface LoginState {
  isLoggedIn: boolean,
  // success: boolean,
  username: string,
  motdepasse: string,
  loginMessage: string,
  token: string,
  errorMessage: string,
  nom: string
}

export const initialState: LoginState = {
  isLoggedIn: localStorage.getItem('token') ? true : false,
  // success: localStorage.getItem('token') ? true : false
  username: "",
  motdepasse: "",
  loginMessage: "",
  token: localStorage.getItem('token'),
  errorMessage:"",
  nom: localStorage.getItem('nom')
};

export function loginReducer(state = initialState, action: LoginActions): LoginState {
  switch (action.type) {

    case LoginActionTypes.AddCredentials:
      return Object.assign({}, state , {username: action.username, motdepasse: action.motdepasse})

    case LoginActionTypes.UserAuthenticated:
      return Object.assign({}, state , {isLoggedIn: true, token: action.token, loginMessage: ""})

      case LoginActionTypes.UserUnAuthenticated:
      return Object.assign({}, state , {loginMessage: action.loginMessage})

    case LoginActionTypes.UserAuthenticateFailed:
      return Object.assign({}, state , {errorMessage: action.errorMessage})

    case LoginActionTypes.GetUserData:
      return Object.assign({}, state , {token: action['token'], nom: action['nom']})

    case LoginActionTypes.Logout:
      return Object.assign({}, state , {errorMessage: "", isLoggedIn: false, username: "", token:"", nom: ""})

    default:
      return state;
  }
}
