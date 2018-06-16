import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Load Auths',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { username: string; password: string }) {}
}

export type AuthActions = Login;
