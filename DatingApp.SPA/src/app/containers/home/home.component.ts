// CORE ANGULAR
import { Component, ChangeDetectionStrategy } from '@angular/core';
// NGRX
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';
import { AuthForm } from '../../models';
import { authActions } from 'src/app/actions';
// RXJS

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public inRegisterMode = false; // determined whether to show register form

  constructor(private _store$: Store<fromRoot.State>) {
  }

  public toggleRegisterMode() {
    this.inRegisterMode = !this.inRegisterMode;
  }

  public onRegister(registrationVals: AuthForm) {
    this._store$.dispatch(new authActions.Register(registrationVals));
  }
}
