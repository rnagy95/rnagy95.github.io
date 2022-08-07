import { Injectable } from '@angular/core';
import { Language } from 'src/app/interfaces/Language';
import * as hu from '../../../assets/locale/hu-HU.json';
import * as en from '../../../assets/locale/en-US.json';


@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private _languages: Language[] =  [
    { code: "en-US", name: "English", localization: en },
    { code: "hu-HU", name: "Magyar", localization: hu }
  ];

  public get languages(): Language[] {
    return this._languages;
  }

  private set languages(value){
    this._languages = value;
  }

  private _selectedLanguage:Language = this.languages[0];
  
  public get selectedLanguage():Language{
    return this._selectedLanguage;
  }

  public set selectedLanguage(value:Language){
    this._selectedLanguage = value;
  }

  public localize(key:string):string{
    return this?.selectedLanguage?.localization[key];
  }

  constructor() { }
}
