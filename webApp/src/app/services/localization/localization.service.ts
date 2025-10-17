import { Injectable } from '@angular/core';
import { Language } from 'src/app/interfaces/Language';
import hu from '../../../assets/locale/hu-HU.json';
import en from '../../../assets/locale/en-US.json';
import { CookieService } from '../cookie/cookie.service';


@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private _localizations = {
    'en': en,
    'hu': hu
  }

  private _languages: Language[] = [
    { code: "en", name: "English" },
    { code: "hu", name: "Magyar" }
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
    this.cookieService.storeValue('preferences.language', JSON.stringify(value));
    document.documentElement.setAttribute("lang", value.code);
    document.title = this.localize('name');
  }

  public localize(key: string): string {
    return this._localizations[this.selectedLanguage.code as keyof typeof this._localizations][key as keyof (typeof en | typeof hu)] || key;
  }

  public get dateFormat() : string {
    let dateFormat: string;
    
    if (this.selectedLanguage.code === "hu"){
      dateFormat = "yyyy MMMM d";
    }
    else{
      dateFormat = "MMM d, yyyy"
    }

    return dateFormat
  }

  constructor(private cookieService: CookieService) {
    const preferedLanguageString = cookieService.getValue('preferences.language');
    const preferedLanguage = !!preferedLanguageString ? JSON.parse(preferedLanguageString) : null;

    const browserLanguage = navigator.language === 'hu' ? 'hu' : 'en'; 

    this._selectedLanguage = this.languages.find(x => x.code === preferedLanguage?.code) || this.languages.find(x => x.code === browserLanguage) || this.languages[0];
    document.documentElement.setAttribute("lang", this._selectedLanguage.code);
    document.title = this.localize('name');
  }
}
