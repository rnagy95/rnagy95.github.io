import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../interfaces/Link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() links: Link[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
