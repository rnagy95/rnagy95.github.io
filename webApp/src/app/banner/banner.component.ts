import { Component, OnInit } from '@angular/core';
import { ThemeType } from '../interfaces/Theme';
import { LocalizationService } from '../services/localization/localization.service';
import { ThemeService } from '../services/theme/theme.service';


@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    standalone: false
})
export class BannerComponent implements OnInit {

  constructor(public localizationService: LocalizationService, private themeService: ThemeService) { }


  ngOnInit(): void {
  }

  public scrollDown(): void {
    let vieportSize = window.innerHeight;
    window.scrollTo({ top: vieportSize - 50, behavior: 'smooth' });
  }

}
