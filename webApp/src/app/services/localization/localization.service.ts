import { Injectable } from '@angular/core';
import { Language } from 'src/app/interfaces/Language';
import * as hu from '../../../assets/locale/hu-HU.json';
import * as en from '../../../assets/locale/en-US.json';


@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private languages: Language[] =  [
    { code: "en-US", name: "English", localization: en },
    { code: "hu-HU", name: "Magyar", localization: hu }
  ];

  public get Languages(): Language[] {
    return this.languages;
  }

  private set Languages(value){
    this.languages = value;
  }

  private selectedLanguage:Language = this.Languages[0];
  
  public get SelectedLanguage():Language{
    return this.selectedLanguage;
  }

  public set SelectedLanguage(value:Language){
    this.selectedLanguage = value;
  }

  public localize(key:string):string{
    return this?.SelectedLanguage?.localization[key];
  }

  constructor() { }
}
