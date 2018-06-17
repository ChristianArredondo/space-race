// CORE ANGULAR
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// NGRX
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { authActions } from '../actions';
// RXJS
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// SERVICES
import { AlertifyService, ApiAuthService } from '../services';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Login),
    map((action: authActions.Login) => action.payload),
    switchMap((authLogin) => this._authService.login(authLogin).pipe(
      // TODO. set loading state
      tap(({ tokenString }) => {
        if (tokenString) {
          this._router.navigate(['/members']);
          this._alertifyService.successAlert('Login successful! :D');
        }
      }),
      map(({ tokenString }) => new authActions.LoginSuccess(tokenString)),
      catchError(error => {
        this._alertifyError(error);
        return of(new authActions.LoginError(error));
      })
    ))
  );

  @Effect()
  register$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Register),
    map((action: authActions.Register) => action.payload),
    switchMap(authRegistration => {
      return this._authService.register(authRegistration).pipe(
        // TODO. set loading state
        tap(() => this._alertifyService.successAlert('Registration successful!')),
        map((success) => new authActions.RegisterSuccess(success)),
        catchError(error => {
          this._alertifyError(error);
          return of(new authActions.RegisterError(error));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Logout),
    switchMap(() => this._router.navigate(['/home']))
  );

  private _alertifyError(error: HttpErrorResponse): void {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      this._alertifyService.errorAlert(applicationError);
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
    this._alertifyService.errorAlert(modelStateError || 'Unable to authenticate.');
  }

  constructor(
    private actions$: Actions,
    private _authService: ApiAuthService,
    private _alertifyService: AlertifyService,
    private _router: Router
  ) {}
}
