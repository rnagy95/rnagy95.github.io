import { TestBed } from '@angular/core/testing';

import { NavmenuService } from './navmenu.service';

describe('NavmenuService', () => {
  let service: NavmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle isOpen state', () => {
    expect(service.isOpen).toBeFalse();
    service.toggle();
    expect(service.isOpen).toBeTrue();
    service.toggle();
    expect(service.isOpen).toBeFalse();
  });
});
