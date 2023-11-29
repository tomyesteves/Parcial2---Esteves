import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestsFormComponent } from './admin-tests-form.component';

describe('AdminTestsFormComponent', () => {
  let component: AdminTestsFormComponent;
  let fixture: ComponentFixture<AdminTestsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestsFormComponent]
    });
    fixture = TestBed.createComponent(AdminTestsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
