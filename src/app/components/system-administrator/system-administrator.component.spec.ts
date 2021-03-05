import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdministratorComponent } from './system-administrator.component';

describe('SystemAdministratorComponent', () => {
  let component: SystemAdministratorComponent;
  let fixture: ComponentFixture<SystemAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
