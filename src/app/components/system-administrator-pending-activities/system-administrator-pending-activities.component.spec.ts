import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdministratorPendingActivitiesComponent } from './system-administrator-pending-activities.component';

describe('SystemAdministratorPendingActivitiesComponent', () => {
  let component: SystemAdministratorPendingActivitiesComponent;
  let fixture: ComponentFixture<SystemAdministratorPendingActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAdministratorPendingActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAdministratorPendingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
