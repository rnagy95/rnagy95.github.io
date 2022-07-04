import { Component } from '@angular/core';

class Link {
  href:string;
  text:string;

  constructor(text:string, href:string) {
    this.href = href;
    this.text = text;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webApp';
  isDarkTheme = true;
  links = [
    new Link("Home", "#"),
    new Link("BIO", "#"),
    new Link("CV", "#"),
    new Link("Technologies", "#")
  ]
}
