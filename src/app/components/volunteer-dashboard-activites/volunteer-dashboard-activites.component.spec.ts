import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDashboardActivitesComponent } from './volunteer-dashboard-activites.component';

describe('VolunteerDashboardActivitesComponent', () => {
  let component: VolunteerDashboardActivitesComponent;
  let fixture: ComponentFixture<VolunteerDashboardActivitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerDashboardActivitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerDashboardActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
