// CORE ANGULAR
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// NGRX
import * as fromRoot from '../store';
import { Store, select } from '@ngrx/store';
// RXJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// SERVICES
import { AlertifyService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _store$: Store<fromRoot.State>,
    private _alertifyService: AlertifyService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._store$.pipe(
      select(fromRoot.getIsAuth),
      tap((isAuth) => {
        if (!isAuth) {
          this._alertifyService.errorAlert('You must be logged in to access this area.');
          this._router.navigate(['/home']);
        }
      })
    );
  }
}
