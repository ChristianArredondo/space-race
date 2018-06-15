import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromValue from './value.reducer';

export interface State {
  value: fromValue.State;
}

export const reducers: ActionReducerMap<State> = {
  value: fromValue.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
