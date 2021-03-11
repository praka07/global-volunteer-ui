import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerUpcomingActivitiesComponent } from './volunteer-upcoming-activities.component';

describe('VolunteerUpcomingActivitiesComponent', () => {
  let component: VolunteerUpcomingActivitiesComponent;
  let fixture: ComponentFixture<VolunteerUpcomingActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerUpcomingActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerUpcomingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
