import { Component, Input, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/dialog';
import { LocalizationService } from '../services/localization/localization.service';
import { CookiePopupComponent } from '../cookie-popup/cookie-popup.component';
import { ContactLink } from '../interfaces/ContactLink';
import { PrintService } from '../services/print/print.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() contacts: ContactLink[] | undefined;

  constructor(public localizationService: LocalizationService, public printService: PrintService, private dialog: MatDialog, private domSanitizer: DomSanitizer) { }

  public get year(){
    return new Date().getFullYear();
  }

  public openCookiePopup(){
    this.dialog.open(CookiePopupComponent);
  }

  public get privacyPolicyUrl(): SafeResourceUrl{
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/legal/privacy_policy_${this.localizationService.selectedLanguage.code}.pdf`);
  }

  public get termsAndContitionsUrl(): SafeResourceUrl{
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/legal/terms_and_conditions_${this.localizationService.selectedLanguage.code}.pdf`);
  }

  ngOnInit(): void {
  }

}
