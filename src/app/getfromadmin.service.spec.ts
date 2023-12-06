import { TestBed } from '@angular/core/testing';

import { GetfromadminService } from './getfromadmin.service';

describe('GetfromadminService', () => {
  let service: GetfromadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetfromadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
