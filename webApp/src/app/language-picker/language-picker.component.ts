import { Component, OnInit } from '@angular/core';
import { Language } from '../interfaces/Language';
import { CookieService } from '../services/cookie/cookie.service';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  public onLanguageChanged(language:Language){
    this.localizationService.selectedLanguage = language;
  }

  constructor(public localizationService:LocalizationService) { }

  ngOnInit(): void {
  }

}
