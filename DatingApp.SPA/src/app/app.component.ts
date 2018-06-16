// CORE ANGULAR
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// NGRX
import { Store, select } from '@ngrx/store';
import * as fromRoot from './store';
import { authActions } from './actions';
// RXJS
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public authForm: FormGroup; // auth-related FormGroup for performing login
  public isAuth$: Observable<boolean>; // based on whether token exists in localstorage

  constructor(private _formBuilder: FormBuilder, private _store$: Store<fromRoot.State>) {
    this.authForm = this._buildAuthForm();
    this.isAuth$ = this._store$.pipe(select(fromRoot.getIsAuth));
  }

  // POST new login to server and set token in localstorage if successful
  public onLogin() {
    this._store$.dispatch(new authActions.Login(this.authForm.value));
  }

  // clear token in localstorage
  public onLogout() {
    this._store$.dispatch(new authActions.Logout());
  }

  // use FormBuilder to construct FormGroup for login form
  private _buildAuthForm(): FormGroup {
    return this._formBuilder.group({
      username: [null],
      password: [null, { validators: [Validators.minLength(4), Validators.maxLength(8)] }]
    });
  }
}
