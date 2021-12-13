import { TestBed } from '@angular/core/testing';

import { PhpDecService } from './php-dec.service';

describe('PhpDecService', () => {
  let service: PhpDecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpDecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
