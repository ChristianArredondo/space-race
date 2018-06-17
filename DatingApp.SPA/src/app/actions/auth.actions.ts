import { Action } from '@ngrx/store';
import { AuthForm, User } from '../models';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error',
  Logout = '[Auth] Logout',
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
  RegisterError = '[Auth] Register Error'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: string) {}
}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LoginError;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;
  constructor(public payload: AuthForm) {}
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;
  constructor(public payload: any) {} // TODO. update type after updating server
}

export class RegisterError implements Action {
  readonly type = AuthActionTypes.RegisterError;
  constructor(public payload: any) {}
}

export type AuthActions = Login | LoginSuccess | LoginError | Logout | Register | RegisterSuccess | RegisterError;
