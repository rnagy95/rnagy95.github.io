import { TestBed } from '@angular/core/testing';

import { LocalizationService } from './localization.service';

describe('LocalizationService', () => {
  let service: LocalizationService;

  function mockNavigatorLanguage(lang: string, langs: string[]) {
    Object.defineProperty(navigator, 'language', {
      value: lang,
      configurable: true
    });

    Object.defineProperty(navigator, 'languages', {
      value: langs,
      configurable: true
    });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    service = TestBed.inject(LocalizationService);
    expect(service).toBeTruthy();
  });

  it('should use english if no language set', () => {
    mockNavigatorLanguage('', [])
    service = TestBed.inject(LocalizationService);
    expect(service.dateFormat).toBe("MMM d, yyyy");
  });

  it('should detect hu', () => {
    mockNavigatorLanguage('hu', ['hu', 'en-US'])
    service = TestBed.inject(LocalizationService);
    expect(service.dateFormat).toBe("yyyy MMMM d");
  });

  it('should detect en', () => {
    mockNavigatorLanguage('en-GB', ['en-GB', 'en-US', 'hu-HU'])
    service = TestBed.inject(LocalizationService);
    expect(service.dateFormat).toBe("MMM d, yyyy");
  });

  it('should detect hu-HU', () => {
    mockNavigatorLanguage('hu-HU', ["hu-HU", "hu", "en-US"])
    service = TestBed.inject(LocalizationService);
    expect(service.dateFormat).toBe("yyyy MMMM d");
  });

  it('should use en if language is not supported', () => {
      mockNavigatorLanguage('de-DE', ['de-DE', 'en', 'en-US'])
      service = TestBed.inject(LocalizationService);
      expect(service.dateFormat).toBe("MMM d, yyyy");
  });

  it('should localize to hu a known phrase', () => {
    mockNavigatorLanguage('hu', ['hu', 'en-US'])
    service = TestBed.inject(LocalizationService);
    expect(service.localize('name')).toBe("Nagy Richárd");
  });

  it('should localize to en a known phrase', () => {
    mockNavigatorLanguage('en-US', ['en-US', 'en-GB'])
    service = TestBed.inject(LocalizationService);
    expect(service.localize('name')).toBe("Richard Nagy");
  });

  it('should return the input for any unknown phrase', () => {
    service = TestBed.inject(LocalizationService);
    expect(service.localize('unknownPhrase')).toBe("unknownPhrase");
  });
});
