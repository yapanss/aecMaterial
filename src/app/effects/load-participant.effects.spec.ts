import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadParticipantEffects } from './load-participant.effects';

describe('LoadParticipantEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadParticipantEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadParticipantEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LoadParticipantEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
