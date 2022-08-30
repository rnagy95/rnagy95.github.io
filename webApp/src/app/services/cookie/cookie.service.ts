import { Injectable, NgModule } from '@angular/core';
import { Cookie, CookieCategory, CookieType } from 'src/app/interfaces/Cookie';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  private _cookies: Cookie[] = [
    { id: 'consent.isAgreed', name: 'Consent', description: 'consent.description', type: CookieType.LocalStorage, category: CookieCategory.Necessary, isEnabled: true },
    { id: 'consent.cookieConfig', name: 'Cookie Configuration', description: 'cookieConfig.description', type: CookieType.LocalStorage, category: CookieCategory.Necessary, isEnabled: true },
    { id: 'preferences.language', name: 'Selected language', description: 'selectedLanguage.description', type: CookieType.LocalStorage, category: CookieCategory.Preferences, isEnabled: false },
    { id: 'preferences.theme', name: 'Selected theme', description: 'selectedTheme.description', type: CookieType.LocalStorage, category: CookieCategory.Preferences, isEnabled: false },
    { id: 'analytics.google', name: 'Google Analytics', description: 'googleAnalytics.description', type: CookieType.GoogleAnalytics, category: CookieCategory.Analytics, isEnabled: false }
  ];

  public get cookies(): Cookie[] {
    return this._cookies;
  }

  public set cookies(value: Cookie[]) {
    this._cookies = value;
    this.toggleGoogleAnalytics();
    localStorage.setItem('consent.cookieConfig', JSON.stringify(value))
  }

  private readCookieConfigFromLocalStorage(): void {
    const storedConfigText = localStorage.getItem('consent.cookieConfig');

    if (!!storedConfigText) {
      const storedConfig: Cookie[] = JSON.parse(storedConfigText);

      storedConfig.forEach((item) => {
        const cookie = this.cookies.find(x => x.id === item.id);
        if (!!cookie) {
          cookie.isEnabled = item.isEnabled;
        }
      });
    }
  }

  private toggleGoogleAnalytics(): void {
    const isEnabled = environment.production && this.cookies.find(x=>x.id === "analytics.google")?.isEnabled;
    (window as any)["ga-disable-G-K0LL388L6C"] = !isEnabled;
  }

  public getValue(id: string): string | null {
    const cookie = this.cookies.find(x => x.id === id);

    if (cookie?.isEnabled && cookie?.type === CookieType.LocalStorage) {
      return localStorage.getItem(id);
    }
    else {
      return null;
    }
  }

  public storeValue(id: string, value: string): void {
    let cookie = this.cookies.find(x => x.id === id);

    if (cookie?.isEnabled && cookie?.type === CookieType.LocalStorage) {
      localStorage.setItem(id, value);
    }
  }

  constructor() {
    this.readCookieConfigFromLocalStorage();
    this.toggleGoogleAnalytics();
  }
}
