import { TestBed } from '@angular/core/testing';

import { AdminTestsService } from './admin-tests.service';

describe('AdminTestsService', () => {
  let service: AdminTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
