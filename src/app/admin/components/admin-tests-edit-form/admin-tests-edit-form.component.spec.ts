import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestsEditFormComponent } from './admin-tests-edit-form.component';

describe('AdminTestsEditFormComponent', () => {
  let component: AdminTestsEditFormComponent;
  let fixture: ComponentFixture<AdminTestsEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestsEditFormComponent]
    });
    fixture = TestBed.createComponent(AdminTestsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
