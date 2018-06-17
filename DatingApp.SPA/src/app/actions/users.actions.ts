import { Action } from '@ngrx/store';
import { User } from '../models';

export enum ActionTypes {
  LoadUsers = '[Value] Load Users',
  LoadUsersSuccess = '[Value] Load Users Success'
}

export class LoadUsers implements Action {
  readonly type = ActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = ActionTypes.LoadUsersSuccess;
  constructor(public payload: User[] ) {}
}

export type Actions = LoadUsers | LoadUsersSuccess;
