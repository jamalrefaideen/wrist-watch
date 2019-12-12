import { TestBed } from '@angular/core/testing';

import { ClockserviceService } from './clockservice.service';

describe('ClockserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClockserviceService = TestBed.get(ClockserviceService);
    expect(service).toBeTruthy();
  });
});
