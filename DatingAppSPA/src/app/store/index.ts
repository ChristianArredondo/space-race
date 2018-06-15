import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromValue from './value.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  value: fromValue.State;
}

export const reducers: ActionReducerMap<State> = {
  value: fromValue.reducer,
};

// ---------------- VALUES ----------------
export const getValuesState = (state: State) => state.value;
export const getAllValues = createSelector(getValuesState, fromValue.selectAll);


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
