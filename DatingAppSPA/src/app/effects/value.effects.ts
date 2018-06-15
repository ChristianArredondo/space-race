import { Injectable } from '@angular/core';

// NGRX
import { Action } from '@ngrx/store';
import { Actions, Effect, ROOT_EFFECTS_INIT, ofType } from '@ngrx/effects';
import { ApiValuesService } from '../services';
import { LoadValuesSuccess } from '../actions';

// RXJS
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class ValueEffects {

  @Effect()
  initLoadAll$: Observable<Action> = this._actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    switchMap(() => this._apiService.get().pipe(
      map(values => new LoadValuesSuccess(values))
    ))
  );

  constructor(
    private _actions$: Actions,
    private _apiService: ApiValuesService,
  ) {}
}
