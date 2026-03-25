import { Injectable } from '@angular/core';
import { Theme, ThemeType } from 'src/app/interfaces/Theme';
import { CookieService } from '../cookie/cookie.service';
import { TimeService } from '../time/time.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _themes: Theme[] = [
    { id: 0, klass: 'auto', name: 'Auto', type: ThemeType.auto },
    { id: 1, klass: 'light-theme', name: 'Light', type: ThemeType.light },
    { id: 2, klass: 'dark-theme', name: 'Dark', type: ThemeType.dark },
    { id: 3, klass: 'print-theme', name: '.print', type: ThemeType.light }
  ]

  private timeService: TimeService = new TimeService();
  private timerId: number | undefined;

  public get themes(): Theme[] {
    return this._themes;
  }

  private set themes(value) {
    this._themes = value;
  }

  private _selectedTheme!: Theme;

  public get selectedTheme(): Theme {
    return this._selectedTheme;
  }

  public set selectedTheme(value: Theme) {
    this.cookieService.storeValue('preferences.theme', JSON.stringify(value))

    if (value.type === ThemeType.auto) {
      value = this.updateAutoTheme(value);

      this.startTimer(() => {
        const updatedTheme = this.updateAutoTheme(this.selectedTheme);
        this._selectedTheme = updatedTheme;
        this.applyTheme(updatedTheme)
      }, 60000);
    }
    else {
      this.stopTimer()
    }

    this._selectedTheme = value;
    this.applyTheme(value)
  }

  private startTimer(callback: Function, interval: number) {
    if (this.timerId === undefined) {
      this.timerId = setInterval(callback, interval);
    }
  }

  private stopTimer() {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }

  private applyTheme(theme: Theme) {
    let bodyTag = document.getElementById('body');
    if (!!bodyTag) {
      this.themes.forEach((item) => {
        bodyTag?.classList.remove(item.klass);
      });
      bodyTag.classList.add(theme.klass)
    }
  }

  private updateAutoTheme(theme: Theme): Theme {
    if (theme.type === ThemeType.auto) {
      const isDay = this.timeService.isDay(new Date());
      const klass = (this.themes.find(x => x.name === (isDay ? "Light" : "Dark")) || this.themes[0]).klass;
      theme.klass = klass;
    }
    return theme;
  }

  private setPrintTheme() {
    const printTheme = this.themes.find(x => x.name === '.print');

    if (!!printTheme) {
      this.applyTheme(printTheme);
    }
  }

  private resetThemeAfterPrint() {
    this.applyTheme(this._selectedTheme);
  }

  constructor(private cookieService: CookieService) {
    const preferdThemeString = this.cookieService.getValue('preferences.theme');
    const preferdTheme = !!preferdThemeString ? JSON.parse(preferdThemeString) : null

    this.selectedTheme = this.themes.find(x => x.name === preferdTheme?.name) || this.themes[0];

    addEventListener('onPrintStarted', this.setPrintTheme.bind(this))
    addEventListener('onPrintFinished', this.resetThemeAfterPrint.bind(this))
  }
}

