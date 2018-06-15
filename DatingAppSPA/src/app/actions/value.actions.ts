import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Value } from '../models';

export enum ValueActionTypes {
  LoadValues = '[Value] Load Values',
  LoadValuesSuccess = '[Value] Load Values Success'
}

export class LoadValues implements Action {
  readonly type = ValueActionTypes.LoadValues;
}

export class LoadValuesSuccess implements Action {
  readonly type = ValueActionTypes.LoadValuesSuccess;
  constructor(public payload: { values: Value[] }) {}
}

export type ValueActions = LoadValues | LoadValuesSuccess;
