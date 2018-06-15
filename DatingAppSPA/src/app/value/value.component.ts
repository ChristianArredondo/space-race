import { Component, ChangeDetectionStrategy } from '@angular/core';
// NGRX
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../store';
// RXJS
import { Observable } from 'rxjs';
// MODELS
import { Value } from '../models';

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
