import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FeatureCelluleEffects } from './feature-cellule.effects';

describe('FeatureCelluleEffects', () => {
  let actions$: Observable<any>;
  let effects: FeatureCelluleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeatureCelluleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(FeatureCelluleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
