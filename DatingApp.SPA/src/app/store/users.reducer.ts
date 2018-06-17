// NGRX
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { userActions } from '../actions';
// MODELS
import { User } from '../models';

export interface State extends EntityState<User> {}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState();

export function reducer(
  state = initialState,
  action: userActions.Actions
): State {
  switch (action.type) {
    case userActions.ActionTypes.LoadUsersSuccess: {
      /**
       * Use `adapter.addAll()` to replace previous
       * collection with newly-loaded collection.
       */
      return adapter.addAll(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
