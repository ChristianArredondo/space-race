import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Value } from '../models';
import { ValueActions, ValueActionTypes } from '../actions';

export interface State extends EntityState<Value> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Value> = createEntityAdapter<Value>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ValueActions
): State {
  switch (action.type) {
    case ValueActionTypes.LoadValuesSuccess: {
      return adapter.addAll(action.payload, state);
    }
    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
