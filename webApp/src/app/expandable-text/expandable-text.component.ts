import { Component, Input, OnInit } from '@angular/core';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
    selector: 'app-expandable-text',
    templateUrl: './expandable-text.component.html',
    styleUrls: ['./expandable-text.component.scss'],
    standalone: false
})
export class ExpandableTextComponent implements OnInit {

  constructor(public localizationService:LocalizationService) { }

  @Input()
  public text: string | undefined = "";

  @Input()
  public expanded: boolean = false;

  public toggleExpandedState(): void {
    this.expanded = !this.expanded;
  }

  ngOnInit(): void {
  }

}
