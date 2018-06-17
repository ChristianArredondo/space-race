// CORE ANGULAR
import {
  ActionReducerMap,
  createSelector,
  MetaReducer,
  ActionReducer
} from '@ngrx/store';
import { RouterStateSnapshot } from '@angular/router';
// NGRX
import * as fromUsers from './users.reducer';
import * as fromAuth from './auth.reducer';
import * as fromRouter from '@ngrx/router-store';
import { storageActions } from '../actions';
import { localStorageSync, rehydrateApplicationState } from 'ngrx-store-localstorage';
// MODELS
import { DecodedToken, RouterState } from '../models';
// ENV
import { environment } from '../../environments/environment';
// AUTH0
import { JwtHelperService } from '@auth0/angular-jwt';
const jwtHelper = new JwtHelperService();

export interface State {
  auth: fromAuth.State;
  router: fromRouter.RouterReducerState<RouterState>;
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  router: fromRouter.routerReducer,
  users: fromUsers.reducer,
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

// --------------------- ROUTER ---------------------
export const getRouterState = (state: State) => state.router;
export const getRouterSnapshotState = createSelector(
  getRouterState,
  snapshot => snapshot.state
);
export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;
    const pathSections = url.split('/');
    // use regex to ensure query params are not included in route name
    const mainRoute = pathSections[1].match(/[^?]*/i)[0];
    return { url, params, queryParams, mainRoute };
  }
}

// ---------------- AUTH ----------------
export const getAuthState = (state: State) => state.auth;
export const getAuthToken = createSelector(getAuthState, fromAuth.getToken);
export const getIsAuth = createSelector(getAuthToken, token => token && !jwtHelper.isTokenExpired(token));
export const getAuthUsername = createSelector(getAuthToken, getIsAuth, (token, isAuth) => {
  if (isAuth) {
    const decodedToken: DecodedToken = jwtHelper.decodeToken(token);
    return decodedToken.unique_name;
  }
});

// ---------------- USERS ----------------
export const getUsersState = (state: State) => state.users;
export const {
  selectIds: getUserIds,
  selectEntities: getUserEntities,
  selectAll: getAllUsers,
  selectTotal: getUsersTotal
} = fromUsers.adapter.getSelectors(getUsersState);



export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];
