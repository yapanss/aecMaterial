import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcelluleComponent } from './editcellule.component';

describe('EditcelluleComponent', () => {
  let component: EditcelluleComponent;
  let fixture: ComponentFixture<EditcelluleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcelluleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
