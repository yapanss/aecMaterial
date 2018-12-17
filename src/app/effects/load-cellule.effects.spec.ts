import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadCelluleEffects } from './load-cellule.effects';

describe('LoadCelluleEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadCelluleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadCelluleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LoadCelluleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
