import { TestBed } from '@angular/core/testing';

import { LocalizationService } from './localization.service';

describe('LocalizationService', () => {
  let service: LocalizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to determine date format', () => {
    expect(service.dateFormat).toBe(navigator.language == "hu" ? "yyyy MMMM d" : "MMM d, yyyy");
  });

  it('should localize a known phrase', () => {
    expect(service.localize('name')).toBe(navigator.language == "hu" ? "Nagy Richárd" : "Richard Nagy");
  });

  it('should return the input for any unknown phrase', () => {
    expect(service.localize('unknownPhrase')).toBe("unknownPhrase");
  });
});
