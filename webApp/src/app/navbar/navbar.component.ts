import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Link } from '../interfaces/Link';
import { LocalizationService } from '../services/localization/localization.service';
import { NavmenuService } from '../services/navmenu/navmenu.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavBarComponent implements OnInit {

  @Input() links: Link[] | undefined;
  @Input() sidenav: Boolean | undefined;

  public onTop: boolean = true;

  constructor(public localizationService: LocalizationService, public navmenuService: NavmenuService) { }

  ngOnInit(): void {
     this.onScroll();
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(): void { 
    this.onTop = window.scrollY <= 50;
  }
}
