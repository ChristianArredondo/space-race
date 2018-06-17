// CORE ANGULAR
import { Injectable } from '@angular/core';
// NGRX
import { Actions, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
// RXJS
import { map } from 'rxjs/operators';
// MODELS
import { RouterState } from '../models';


@Injectable()
export class RouterEffects {

  // single reference to mapped active route
  private _activeRoute$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action: RouterNavigationAction<RouterState>) => action.payload.routerState)
  );

  // @Effect()

  constructor(private actions$: Actions) {}
}
