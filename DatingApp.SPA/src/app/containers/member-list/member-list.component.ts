// CORE ANGULAR
import { Component, ChangeDetectionStrategy } from '@angular/core';
// NGRX
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store';
// RXJS
import { Observable } from 'rxjs';
// MODELS
import { User } from '../../models';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberListComponent {
  users$: Observable<User[]>;

  constructor(private _store$: Store<fromRoot.State>) {
    this.users$ = this._store$.pipe(select(fromRoot.getAllUsers));
  }

}
