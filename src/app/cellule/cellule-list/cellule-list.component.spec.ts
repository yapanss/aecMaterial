import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelluleListComponent } from './cellule.component';

describe('CelluleListComponent', () => {
  let component: CelluleListComponent;
  let fixture: ComponentFixture<CelluleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelluleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelluleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
