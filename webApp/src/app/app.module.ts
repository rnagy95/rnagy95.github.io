import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { CookiePopupComponent } from './cookie-popup/cookie-popup.component';
import { CookieService } from './services/cookie/cookie.service';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    PrivacyPolicyComponent,
    PageNotFoundComponent,
    LanguagePickerComponent,
    NavBarComponent,
    ThemePickerComponent,
    CookiePopupComponent,
    BannerComponent,
    FooterComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    NgxGoogleAnalyticsModule.forRoot('G-K0LL388L6C'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
