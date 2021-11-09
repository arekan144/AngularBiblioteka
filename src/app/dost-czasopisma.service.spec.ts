import { TestBed } from '@angular/core/testing';

import { DostCzasopismaService } from './dost-czasopisma.service';

describe('DostCzasopismaService', () => {
  let service: DostCzasopismaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DostCzasopismaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
