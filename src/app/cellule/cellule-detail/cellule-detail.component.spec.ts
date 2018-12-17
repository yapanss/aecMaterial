import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelluleDetailComponent } from './cellule-detail.component';

describe('CelluleDetailComponent', () => {
  let component: CelluleDetailComponent;
  let fixture: ComponentFixture<CelluleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelluleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelluleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
