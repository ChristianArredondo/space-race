// CORE ANGULAR
import { Injectable } from '@angular/core';
// NGRX
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { authActions } from '../actions';
// RXJS
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// SERVICES
import { ApiAuthService } from '../services';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Login),
    map((action: authActions.Login) => action.payload),
    switchMap((authLogin) => this._authservice.login(authLogin).pipe(
      // TODO. set loading state
      map(({ tokenString }) => new authActions.LoginSuccess(tokenString)),
      catchError(this._errorHandler)
    ))
  );

  @Effect()
  register$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Register),
    map((action: authActions.Register) => action.payload),
    switchMap(authRegistration => this._authservice.register(authRegistration).pipe(
      // TODO. set loading state
      map(success => new authActions.RegisterSuccess(success)),
      catchError(this._errorHandler)
    ))
  );

  /** TODO. dispatch error action */
  private _errorHandler(error: HttpErrorResponse) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return throwError(applicationError);
    }
    let modelStateError: string;
    if (error.error) {
      modelStateError = Object.keys(error.error).reduce((memo, key) => {
        if (error.error[key]) {
          memo += `${error.error[key]} \n`;
        }
        return memo;
      }, '');
    }
    return throwError(modelStateError || 'Unspecified server error');
  }

  constructor(private actions$: Actions, private _authservice: ApiAuthService) {}
}
