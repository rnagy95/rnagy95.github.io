import { Component } from '@angular/core';
import { CookiePopupComponent } from './cookie-popup/cookie-popup.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { CookieService } from './services/cookie/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webApp';

  constructor(private cookieService: CookieService, private dialog: MatDialog) {
    const showCookieModal = this.cookieService.getValue('consent.isAgreed') !== true.toString();

    if (showCookieModal) {
      const dialogRef = this.dialog.open(CookiePopupComponent);
      dialogRef.afterClosed().subscribe(() => {
        this.cookieService.storeValue('consent.isAgreed', true.toString());
      });
    }

  }
}
