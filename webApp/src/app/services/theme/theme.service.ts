import { Injectable } from '@angular/core';
import { Cookie } from 'src/app/interfaces/Cookie';
import { Theme } from 'src/app/interfaces/Theme';
import { CookieService } from '../cookie/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _themes: Theme[] = [
    { klass: 'dark-ide-theme', name: 'Dark IDE' },
    { klass: 'light-ide-theme', name: 'Light IDE' },
    { klass: 'terminal-theme', name: 'Terminal' }
  ]

  public get themes(): Theme[] {
    return this._themes;
  }

  private set themes(value) {
    this._themes = value;
  }

  private _selectedTheme: Theme;

  public get selectedTheme(): Theme {
    return this._selectedTheme;
  }
  public set selectedTheme(value: Theme) {
    this._selectedTheme = value;
    this.applyTheme(value)
    this.cookieService.storeValue('preferences.theme', JSON.stringify(value))
  }

  private applyTheme(theme: Theme) {
    let bodyTag = document.getElementById('body');
    if (!!bodyTag){
      this.themes.forEach((item) => {
        bodyTag?.classList.remove(item.klass);
      });
      bodyTag.classList.add(theme.klass)
    }
  }

  constructor(private cookieService: CookieService) { 
    const preferdThemeString = this.cookieService.getValue('preferences.theme');
    const preferdTheme = !!preferdThemeString ? JSON.parse(preferdThemeString) : null

    this._selectedTheme = this.themes.find(x=>x.name === preferdTheme?.name) || this.themes[0];
    this.applyTheme(this._selectedTheme);
  }
}
