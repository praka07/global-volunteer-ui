import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdministratorReportComponent } from './system-administrator-report.component';

describe('SystemAdministratorReportComponent', () => {
  let component: SystemAdministratorReportComponent;
  let fixture: ComponentFixture<SystemAdministratorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAdministratorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAdministratorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
