import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestsListComponent } from './admin-tests-list.component';

describe('AdminTestsListComponent', () => {
  let component: AdminTestsListComponent;
  let fixture: ComponentFixture<AdminTestsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestsListComponent]
    });
    fixture = TestBed.createComponent(AdminTestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
