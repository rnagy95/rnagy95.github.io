import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
    standalone: false
})
export class PageNotFoundComponent implements OnInit {

  constructor(public localizationService:LocalizationService) { }

  ngOnInit(): void {

  }

}
