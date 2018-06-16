// CORE ANGULAR
import { Injectable } from '@angular/core';
// NGRX
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { authActions } from '../actions';
// RXJS
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// SERVICES
import { ApiAuthService } from '../services';


@Injectable()
export class AuthEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Login),
    map((action: authActions.Login) => action.payload),
    switchMap((authLogin) => this._authservice.login(authLogin).pipe(
      // TODO. set loading state
      map(({ tokenString }) => new authActions.LoginSuccess(tokenString)),
      catchError(error => of(error))
    ))
  );

  constructor(private actions$: Actions, private _authservice: ApiAuthService) {}
}
