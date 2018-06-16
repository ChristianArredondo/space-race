// CORE ANGULAR
import { Injectable } from '@angular/core';
// NGRX
import { Actions, Effect, ofType } from '@ngrx/effects';
import { authActions } from '../actions';
// RXJS
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// SERVICES
import { AuthService } from '../services';


@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login$: Observable<void> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Login),
    map((action: authActions.Login) => action.payload),
    switchMap((authLogin) => this._authservice.login(authLogin).pipe(
      // TODO. set loading state
      tap((token: { tokenString: string}) => token && localStorage.setItem('token', token.tokenString)),
      catchError(error => of(error))
    ))
  );

  constructor(private actions$: Actions, private _authservice: AuthService) {}
}
