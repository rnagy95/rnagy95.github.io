import { Injectable } from '@angular/core';
import { Theme } from 'src/app/interfaces/Theme';

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

  private set themes(value){
    this._themes = value;
  }

  private _selectedTheme: Theme = this.themes[0];

  public get selectedTheme(): Theme {
    return this._selectedTheme;
  }
  public set selectedTheme(value: Theme) {
    this._selectedTheme = value;
  }

  constructor() { }
}
