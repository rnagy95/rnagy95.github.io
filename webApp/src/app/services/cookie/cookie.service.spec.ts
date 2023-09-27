import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';

describe('CookieService', () => {
  let service: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be abele to get value from localStorage', () => {
    localStorage.setItem('consent.isAgreed', 'TEST READ');

    expect(service.getValue('consent.isAgreed')).toBe('TEST READ');
  });

  it('should be able to set value in localStorage', () => {
    service.storeValue('consent.isAgreed', 'TEST WRITE');

    expect(localStorage.getItem('consent.isAgreed')).toBe('TEST WRITE');
  });
});
