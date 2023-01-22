import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public localizationService: LocalizationService) { }

  public getExperienceInYears():number{
    const start = new Date(2016,2,1).getTime();
    const now = new Date().getTime();
    return Math.round((now - start) / 31557600000);
  }

  ngOnInit(): void {
  }

}
