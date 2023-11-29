import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestsListItemComponent } from './admin-tests-list-item.component';

describe('AdminTestsListItemComponent', () => {
  let component: AdminTestsListItemComponent;
  let fixture: ComponentFixture<AdminTestsListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestsListItemComponent]
    });
    fixture = TestBed.createComponent(AdminTestsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
