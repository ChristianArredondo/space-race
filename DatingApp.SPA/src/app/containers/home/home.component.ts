// CORE ANGULAR
import { Component, ChangeDetectionStrategy } from '@angular/core';
// NGRX
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store';
import { Observable } from 'rxjs';
import { Value, User } from '../../models';
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
  public values$: Observable<Value[]>; // values fetched from server

  constructor(private _store$: Store<fromRoot.State>) {
    this.values$ = this._store$.pipe(select(fromRoot.getAllValues));
  }

  public toggleRegisterMode() {
    this.inRegisterMode = !this.inRegisterMode;
  }

  public onRegister(registrationVals: Partial<User>) {
    this._store$.dispatch(new authActions.Register(registrationVals));
  }
}
