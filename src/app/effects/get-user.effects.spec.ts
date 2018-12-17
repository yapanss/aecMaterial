import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GetUserEffects } from './get-user.effects';

describe('GetUserEffects', () => {
  let actions$: Observable<any>;
  let effects: GetUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetUserEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(GetUserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
