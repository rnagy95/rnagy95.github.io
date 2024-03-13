import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Cookie, CookieCategory } from '../interfaces/Cookie';
import { CookieService } from '../services/cookie/cookie.service';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.scss'],
})
export class CookiePopupComponent implements OnInit {

  public model: any = {};

  public toggleGroup(group: string | any): void {
    const status = this.isAllEnabledInGroup(group);

    for (const cookie of (this.model[group] as Cookie[])) {
      cookie.isEnabled = !status;
    }
  }

  public isAllEnabledInGroup(group: string | any): boolean {
    return !(this.model[group] as Cookie[]).some(x => x.isEnabled === false);
  }

  public getEnabledCookiesIndicatorString(group: string | any): string {
    const length = (this.model[group] as Cookie[]).length;
    const enabledCount = (this.model[group] as Cookie[]).filter(x => x.isEnabled === true).length;

    return `${enabledCount} / ${length}`;
  }

  public rejectAll() {
    const cookies = this.cookieService.cookies;

    for (const cookie of cookies) {
      if (cookie.category === CookieCategory.Necessary) {
        cookie.isEnabled = true;
      }
      else {
        cookie.isEnabled = false;
      }
    }

    this.cookieService.cookies = cookies;
  }

  public acceptAll() {
    const cookies = this.cookieService.cookies;

    for (const cookie of cookies) {
      cookie.isEnabled = true;
    }

    this.cookieService.cookies = cookies;
  }

  public savePreferences() {
    this._saveModel();
  }

  public getStringRepresentationOfCookieCategoryEnumValue(i: number | any): string {
    return CookieCategory[i as CookieCategory];
  }

  public get privacyPolicyUrl(): SafeResourceUrl{
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/legal/privacy_policy_${this.localizationService.selectedLanguage.code}.pdf`);
  }

  constructor(public cookieService: CookieService, public localizationService : LocalizationService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this._initModel()
  }

  private _initModel(): void {
    for (const cookie of this.cookieService.cookies) {
      const category = cookie.category;

      if (!this.model[category]) {
        this.model[category] = [];
      }
      this.model[category].push(cookie);
    }
  }

  private _saveModel(): void {
    const cookies = []

    for (const category in this.model) {
      for (const cookie of this.model[category]) {
        if (cookie.category === CookieCategory.Necessary) {
          cookie.isEnabled = true;
        }

        cookies.push(cookie)
      }
    }

    this.cookieService.cookies = cookies;
  }
}
