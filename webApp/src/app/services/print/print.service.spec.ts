import { TestBed } from '@angular/core/testing';

import { PrintService } from './print.service';

describe('PrintServiceService', () => {
  let service: PrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
