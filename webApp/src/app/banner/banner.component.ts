import { Component, OnInit } from '@angular/core';
import { ThemeType } from '../interfaces/Theme';
import { LocalizationService } from '../services/localization/localization.service';
import { ThemeService } from '../services/theme/theme.service';

declare const particlesJS: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(public localizationService: LocalizationService, private themeService: ThemeService) { }

  private setTheme() {
    const lightConfig = '../assets/scripts/particles/particles-light.json';
    const darkConfig = '../assets/scripts/particles/particles-dark.json';
    const config = this.themeService.selectedTheme.type === ThemeType.dark ? lightConfig : darkConfig;

    particlesJS.load('particles-js', config, null);
  }

  ngOnInit(): void {
    this.setTheme();

    addEventListener('onSelectedThemeChanged', () => this.setTheme())
  }

}
