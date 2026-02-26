import { TestBed } from '@angular/core/testing';

import { TimeService } from './time.service';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for daytime', () => {
    const mockDate = new Date(2025, 5, 15, 12, 0, 0); // June 15, 2025 at noon
    expect(service.isDay(mockDate)).toBe(true);
  });

  it('should return false for nighttime', () => {
    const mockDate = new Date(2025, 5, 15, 2, 0, 0); // June 15, 2025 at 2AM
    expect(service.isDay(mockDate)).toBe(false);
  });
});
