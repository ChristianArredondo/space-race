import { Action } from '@ngrx/store';

export const STORAGE = '@ngrx/store/storage';

export class StorageAction implements Action {
  readonly type = STORAGE;
  constructor(readonly payload: string) {}
}

export type Actions = StorageAction;
