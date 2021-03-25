import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerEditFeedbackListComponent } from './volunteer-edit-feedback-list.component';

describe('VolunteerEditFeedbackListComponent', () => {
  let component: VolunteerEditFeedbackListComponent;
  let fixture: ComponentFixture<VolunteerEditFeedbackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerEditFeedbackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerEditFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
