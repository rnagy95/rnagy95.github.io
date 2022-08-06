import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../services/localization/localization.service'

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(public locaizationService:LocalizationService) { }

  ngOnInit(): void {
  }

}
