import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ValueEffects } from './value.effects';

describe('ValueService', () => {
  let actions$: Observable<any>;
  let effects: ValueEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ValueEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ValueEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
