// CORE ANGULAR
import {
  ActionReducerMap,
  createSelector,
  MetaReducer,
  ActionReducer
} from '@ngrx/store';
// NGRX
import * as fromValue from './value.reducer';
import * as fromAuth from './auth.reducer';
import { storageActions } from '../actions';
import { localStorageSync, rehydrateApplicationState } from 'ngrx-store-localstorage';
// ENV
import { environment } from '../../environments/environment';
// AUTH0
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();
export interface State {
  auth: fromAuth.State;
  value: fromValue.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  value: fromValue.reducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: State, action: storageActions.Actions) => {
    const keys = ['auth'];

    if (action.type === storageActions.STORAGE && keys.includes(action.payload)) {
      const rehydratedState = rehydrateApplicationState(
        [action.payload],
        localStorage,
        key => key,
        true
      );
      return { ...state, ...rehydratedState };
    }
    return localStorageSync({
      keys,
      rehydrate: true,
    })(reducer)(state, action);
  };
}

// ---------------- AUTH ----------------
export const getAuthState = (state: State) => state.auth;
export const getAuthToken = createSelector(getAuthState, fromAuth.getToken);
export const getIsAuth = createSelector(getAuthToken, token => token && !helper.isTokenExpired(token));

// ---------------- VALUES ----------------
export const getValuesState = (state: State) => state.value;
export const getAllValues = createSelector(getValuesState, fromValue.selectAll);


export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];
