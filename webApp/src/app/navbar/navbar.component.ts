import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../interfaces/Link';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() links: Link[] | undefined;

  constructor(public localizationService: LocalizationService) { }

  ngOnInit(): void {
  }

}
