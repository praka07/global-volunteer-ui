import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerListActivityComponent } from './volunteer-list-activity.component';

describe('VolunteerListActivityComponent', () => {
  let component: VolunteerListActivityComponent;
  let fixture: ComponentFixture<VolunteerListActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerListActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerListActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
