import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalizationService } from '../services/localization/localization.service';
import { CookiePopupComponent } from '../cookie-popup/cookie-popup.component';
import { ContactLink } from '../interfaces/ContactLink';
import { PrintService } from '../services/print/print.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() contacts: ContactLink[] | undefined;

  constructor(public localizationService: LocalizationService, public printService: PrintService, private dialog: MatDialog) { }

  public get year(){
    return new Date().getFullYear();
  }

  public openCookiePopup(){
    this.dialog.open(CookiePopupComponent);
  }

  ngOnInit(): void {
  }

}
