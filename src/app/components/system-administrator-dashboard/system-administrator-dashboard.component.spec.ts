import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdministratorDashboardComponent } from './system-administrator-dashboard.component';

describe('SystemAdministratorDashboardComponent', () => {
  let component: SystemAdministratorDashboardComponent;
  let fixture: ComponentFixture<SystemAdministratorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAdministratorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAdministratorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
