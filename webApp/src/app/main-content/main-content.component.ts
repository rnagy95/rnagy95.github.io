import { Component, OnInit } from '@angular/core';
import { Link } from '../interfaces/Link';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  links:Link[] = [{href: '', text: 'About'}, {href: '', text: 'Technologies'}, {href: '', text: 'CV'}]

  constructor() { }

  ngOnInit(): void {
  }

}
