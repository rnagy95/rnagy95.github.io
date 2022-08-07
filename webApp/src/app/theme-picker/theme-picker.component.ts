import { Component, OnInit } from '@angular/core';
import { Theme } from '../interfaces/Theme';
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

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
