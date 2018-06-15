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
    case ValueActionTypes.AddValue: {
      return adapter.addOne(action.payload.value, state);
    }

    case ValueActionTypes.UpsertValue: {
      return adapter.upsertOne(action.payload.value, state);
    }

    case ValueActionTypes.AddValues: {
      return adapter.addMany(action.payload.values, state);
    }

    case ValueActionTypes.UpsertValues: {
      return adapter.upsertMany(action.payload.values, state);
    }

    case ValueActionTypes.UpdateValue: {
      return adapter.updateOne(action.payload.value, state);
    }

    case ValueActionTypes.UpdateValues: {
      return adapter.updateMany(action.payload.values, state);
    }

    case ValueActionTypes.DeleteValue: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ValueActionTypes.DeleteValues: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ValueActionTypes.LoadValues: {
      return adapter.addAll(action.payload.values, state);
    }

    case ValueActionTypes.ClearValues: {
      return adapter.removeAll(state);
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
