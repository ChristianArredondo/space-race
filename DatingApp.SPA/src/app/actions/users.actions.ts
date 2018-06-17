// CORE ANGULAR
import { Action } from '@ngrx/store';
// MODELS
import { User } from '../models';

export enum ActionTypes {
  FetchUsers = '[Users] Fetch Users',
  FetchUsersSuccess = '[Users] Fetch Users Success',
  FetchUsersError = '[Users] Fetch Users Error'
}

export class FetchUsers implements Action {
  readonly type = ActionTypes.FetchUsers;
}

export class FetchUsersSuccess implements Action {
  readonly type = ActionTypes.FetchUsersSuccess;
  constructor(public payload: User[] ) {}
}

export class FetchUsersError implements Action {
  readonly type = ActionTypes.FetchUsersError;
  constructor(public payload: any) {}
}

export type ActionsUnion = FetchUsers | FetchUsersSuccess | FetchUsersError;
