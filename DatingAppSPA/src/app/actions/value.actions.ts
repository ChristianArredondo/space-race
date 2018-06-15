import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Value } from '../models';

export enum ValueActionTypes {
  LoadValues = '[Value] Load Values',
  AddValue = '[Value] Add Value',
  UpsertValue = '[Value] Upsert Value',
  AddValues = '[Value] Add Values',
  UpsertValues = '[Value] Upsert Values',
  UpdateValue = '[Value] Update Value',
  UpdateValues = '[Value] Update Values',
  DeleteValue = '[Value] Delete Value',
  DeleteValues = '[Value] Delete Values',
  ClearValues = '[Value] Clear Values'
}

export class LoadValues implements Action {
  readonly type = ValueActionTypes.LoadValues;

  constructor(public payload: { values: Value[] }) {}
}

export class AddValue implements Action {
  readonly type = ValueActionTypes.AddValue;

  constructor(public payload: { value: Value }) {}
}

export class UpsertValue implements Action {
  readonly type = ValueActionTypes.UpsertValue;

  constructor(public payload: { value: Value }) {}
}

export class AddValues implements Action {
  readonly type = ValueActionTypes.AddValues;

  constructor(public payload: { values: Value[] }) {}
}

export class UpsertValues implements Action {
  readonly type = ValueActionTypes.UpsertValues;

  constructor(public payload: { values: Value[] }) {}
}

export class UpdateValue implements Action {
  readonly type = ValueActionTypes.UpdateValue;

  constructor(public payload: { value: Update<Value> }) {}
}

export class UpdateValues implements Action {
  readonly type = ValueActionTypes.UpdateValues;

  constructor(public payload: { values: Update<Value>[] }) {}
}

export class DeleteValue implements Action {
  readonly type = ValueActionTypes.DeleteValue;

  constructor(public payload: { id: string }) {}
}

export class DeleteValues implements Action {
  readonly type = ValueActionTypes.DeleteValues;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearValues implements Action {
  readonly type = ValueActionTypes.ClearValues;
}

export type ValueActions =
 LoadValues
 | AddValue
 | UpsertValue
 | AddValues
 | UpsertValues
 | UpdateValue
 | UpdateValues
 | DeleteValue
 | DeleteValues
 | ClearValues;
