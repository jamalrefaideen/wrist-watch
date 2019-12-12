import { TestBed } from '@angular/core/testing';

import { TimeriService } from './timeri.service';

describe('TimeriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeriService = TestBed.get(TimeriService);
    expect(service).toBeTruthy();
  });
});
