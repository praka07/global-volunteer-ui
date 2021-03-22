import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFeedbackEntryComponent } from './volunteer-feedback-entry.component';

describe('VolunteerFeedbackEntryComponent', () => {
  let component: VolunteerFeedbackEntryComponent;
  let fixture: ComponentFixture<VolunteerFeedbackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerFeedbackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFeedbackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
