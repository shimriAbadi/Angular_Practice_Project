import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilsEditComponent } from './pupils-edit.component';

describe('PupilsEditComponent', () => {
  let component: PupilsEditComponent;
  let fixture: ComponentFixture<PupilsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PupilsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
