import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { Cookie, CookieCategory } from '../interfaces/Cookie';

import { CookiePopupComponent } from './cookie-popup.component';

describe('CookiePopupComponent', () => {
  let component: CookiePopupComponent;
  let fixture: ComponentFixture<CookiePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookiePopupComponent],
      imports: [AppModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CookiePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to get string representation of a CoockieCategoryEnum value', () => {
    expect(component.getStringRepresentationOfCookieCategoryEnumValue(CookieCategory.Preferences)).toBe("Preferences");
  });

  it('should be able to accept all cookies', () => {
    component.acceptAll();

    expect(component.cookieService.cookies.every(x=>x.isEnabled === true)).toBeTrue()
  });

  it('should be able to reject all cookies', () => {
    component.rejectAll();
    
    const areNecesarriesEnabled =  component.cookieService.cookies.filter(x => x.category === CookieCategory.Necessary).every(x => x.isEnabled === true)
    const areAllOthersDisabled = component.cookieService.cookies.filter(x => x.category !== CookieCategory.Necessary).every(x => x.isEnabled === false)

    expect(areNecesarriesEnabled && areAllOthersDisabled).toBeTrue()
  });
});
