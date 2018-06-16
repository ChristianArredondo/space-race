import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// NGRX
import { Store } from '@ngrx/store';
import * as fromRoot from './store';
import { authActions } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public authForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _store$: Store<fromRoot.State>) {
    this.authForm = this._buildForm();
  }

  public onLogin() {
    this._store$.dispatch(new authActions.Login(this.authForm.value));
  }

  private _buildForm(): FormGroup {
    return this._formBuilder.group({
      username: [null],
      password: [null, { validators: [Validators.minLength(4), Validators.maxLength(8)] }]
    });
  }
}
