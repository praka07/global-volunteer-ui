import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerEditFeedbackComponent } from './volunteer-edit-feedback.component';

describe('VolunteerEditFeedbackComponent', () => {
  let component: VolunteerEditFeedbackComponent;
  let fixture: ComponentFixture<VolunteerEditFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerEditFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerEditFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
