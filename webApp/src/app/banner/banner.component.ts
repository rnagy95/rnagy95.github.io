import { Component, OnInit } from '@angular/core';
import { ThemeType } from '../interfaces/Theme';
import { LocalizationService } from '../services/localization/localization.service';
import { ThemeService } from '../services/theme/theme.service';
import darkParticles from "../../assets/scripts/particles/particles-dark.json"
import lightParticles from "../../assets/scripts/particles/particles-light.json"

declare const particlesJS: any;
declare let pJSDom: Array<any>;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(public localizationService: LocalizationService, private themeService: ThemeService) { }

  private setTheme() {
    if (!!pJSDom && !!pJSDom[0]) {
      pJSDom[0].pJS.particles = (this.themeService.selectedTheme.type === ThemeType.dark ? lightParticles.particles : darkParticles.particles);
      pJSDom[0].pJS.fn.particlesRefresh();
    }
  }

  ngOnInit(): void {
    addEventListener('onSelectedThemeChanged', () => this.setTheme())

    const lightConfig = '../assets/scripts/particles/particles-light.json';
    const darkConfig = '../assets/scripts/particles/particles-dark.json';
    const config = this.themeService.selectedTheme.type === ThemeType.dark ? lightConfig : darkConfig;
    particlesJS.load('particles-js', config, null);
  }

}
