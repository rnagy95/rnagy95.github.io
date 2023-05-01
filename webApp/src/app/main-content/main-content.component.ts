import { Component, OnInit } from '@angular/core';
import { Link } from '../interfaces/Link';
import { ContactLink } from '../interfaces/ContactLink';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  links:Link[] = [{href: '#about', text: 'about'}, {href: '#technologies', text: 'technologies'}, {href: '#experience', text: 'experience'}]
  contacts: ContactLink[] = [{altText: 'E-Mail', logo:'../../assets/email.png', url: "mailto:95.richard.nagy@gmail.com"}, {altText: 'GitHub', logo:'../../assets/GitHub-Mark-Light-64px.png', url: "https://github.com/rnagy95"}, {altText: 'LinkedIn', logo:'../../assets/LI-In-Bug.png', url: "https://www.linkedin.com/in/richard-nagy-636310135/"}]

  constructor() { }

  ngOnInit(): void {
  }

}
