import { Action } from '@ngrx/store';
import { User } from '../models';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  Logout = '[Auth] Logout',
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;
  constructor(public payload: User) {}
}

export type AuthActions = Login | LoginSuccess | Logout;
