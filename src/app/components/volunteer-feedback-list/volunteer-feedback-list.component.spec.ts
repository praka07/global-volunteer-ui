import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFeedbackListComponent } from './volunteer-feedback-list.component';

describe('VolunteerFeedbackListComponent', () => {
  let component: VolunteerFeedbackListComponent;
  let fixture: ComponentFixture<VolunteerFeedbackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerFeedbackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
