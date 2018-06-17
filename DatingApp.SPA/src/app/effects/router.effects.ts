// CORE ANGULAR
import { Injectable } from '@angular/core';
// NGRX
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { userActions } from '../actions';
// RXJS
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
// MODELS
import { RouterState } from '../models';


@Injectable()
export class RouterEffects {

  /** Provide single reference to mapped active RouterState */
  private _activeRoute$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action: RouterNavigationAction<RouterState>) => action.payload.routerState)
  );

  /** Load all users when '/members' route is activated */
  @Effect()
  fetchUsersOnRoute$: Observable<Action> = this._activeRoute$.pipe(
    filter(route => route.mainRoute === 'members'),
    map(() => new userActions.FetchUsers())
  );

  constructor(private actions$: Actions) {}
}
