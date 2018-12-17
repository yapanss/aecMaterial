import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantAjoutComponent } from './participant-ajout.component';

describe('ParticipantAjoutComponent', () => {
  let component: ParticipantAjoutComponent;
  let fixture: ComponentFixture<ParticipantAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
