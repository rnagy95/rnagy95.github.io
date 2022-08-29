import { Injectable } from '@angular/core';
import { Language } from 'src/app/interfaces/Language';
import * as hu from '../../../assets/locale/hu-HU.json';
import * as en from '../../../assets/locale/en-US.json';
import { CookieService } from '../cookie/cookie.service';


@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private _localizations = {
    'en-US': en,
    'hu-HU': hu
  }

  private _languages: Language[] = [
    { code: "en-US", name: "English" },
    { code: "hu-HU", name: "Magyar" }
  ];

  public get languages(): Language[] {
    return this._languages;
  }

  private set languages(value) {
    this._languages = value;
  }

  private _selectedLanguage: Language;

  public get selectedLanguage(): Language {
    return this._selectedLanguage;
  }

  public set selectedLanguage(value: Language) {
    this._selectedLanguage = value;
    this.cookieService.storeValue('preferences.language', JSON.stringify(value))
  }

  public localize(key: string): string {
    return this._localizations[(this.selectedLanguage.code) as keyof typeof this._localizations][key as keyof (typeof en | typeof hu)];
  }

  constructor(private cookieService: CookieService) {
    const preferedLanguageString = cookieService.getValue('preferences.language');
    const preferedLanguage = !!preferedLanguageString ? JSON.parse(preferedLanguageString) : null;

    const browserLanguage = navigator.language === 'hu' ? 'hu-HU' : 'en-US'; 

    this._selectedLanguage = this.languages.find(x => x.code === preferedLanguage?.code) || this.languages.find(x => x.code === browserLanguage) || this.languages[0];
  }
}
