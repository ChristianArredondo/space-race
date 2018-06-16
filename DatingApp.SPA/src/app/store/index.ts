import {
  ActionReducerMap,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromValue from './value.reducer';
import * as fromAuth from './auth.reducer';

export interface State {
  auth: fromAuth.State;
  value: fromValue.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  value: fromValue.reducer,
};

// ---------------- AUTH ----------------


// ---------------- VALUES ----------------
export const getValuesState = (state: State) => state.value;
export const getAllValues = createSelector(getValuesState, fromValue.selectAll);


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
