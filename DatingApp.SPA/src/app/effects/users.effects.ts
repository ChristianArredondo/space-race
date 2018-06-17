// CORE ANGULAR
import { Injectable } from '@angular/core';
// NGRX
import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { userActions } from '../actions';
import * as fromRoot from '../store';
// RXJS
import { Observable, of } from 'rxjs';
import { catchError, switchMap, map, withLatestFrom } from 'rxjs/operators';
// SERVICES
import { ApiUsersService } from '../services';


@Injectable()
export class UserEffects {

  @Effect()
  fetchUsers$: Observable<Action> = this._actions$.pipe(
    ofType(userActions.ActionTypes.FetchUsers),
    withLatestFrom(this._store$.pipe(select(fromRoot.getAuthToken))),
    switchMap(([action, token]) => this._apiService.get(token).pipe(
      map(users => new userActions.FetchUsersSuccess(users)),
      // TODO. show alert for error
      catchError(error => of(new userActions.FetchUsersError(error)))
    ))
  );

  constructor(
    private _actions$: Actions,
    private _apiService: ApiUsersService,
    private _store$: Store<fromRoot.State>
  ) {}
}
