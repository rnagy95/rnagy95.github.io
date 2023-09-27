import { Component, OnInit, Pipe, PipeTransform, NgModule } from '@angular/core';
import { Theme } from '../interfaces/Theme';
import { LocalizationService } from '../services/localization/localization.service';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  public onThemeSelected(theme:Theme){
    this.themeService.selectedTheme = theme;
  }

  constructor(public themeService: ThemeService, public localizationService: LocalizationService) { }

  ngOnInit(): void {
  }

}

@Pipe({
  name: 'filterPrivateThemes'
})
export class FilterPrivateThemesPipe implements PipeTransform{
  public transform(values:any[], ...args: unknown[]): any[]{
    return (values.filter(v => v.name[0] !== '.'));
  }
}
