import { TestBed } from '@angular/core/testing';

import { ChuckpollerService } from './chuckpoller.service';

describe('ChuckpollerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChuckpollerService = TestBed.get(ChuckpollerService);
    expect(service).toBeTruthy();
  });
});
