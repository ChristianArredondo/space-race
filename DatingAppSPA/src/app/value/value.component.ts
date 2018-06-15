import { Component, ChangeDetectionStrategy } from '@angular/core';

import * as fromRoot from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Value } from '../models';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueComponent {
  public values$: Observable<Value[]>; // list of values fetched from the server

  constructor(
    private _store$: Store<fromRoot.State>
  ) {
    this.values$ = this._store$.pipe(select(fromRoot.getAllValues));
  }

}
