import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import techStack from '../../assets/tech-stack/tech-stack.json';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  public techStack = techStack;

  public areCardsVisible: boolean = false;

  @ViewChild('parallaxContainer', { static: false })
  private parallaxContainer!: ElementRef<HTMLDivElement>;

  constructor(public localizationService: LocalizationService) {
  }

  ngOnInit(): void {
     this.onScroll()
     addEventListener('onPrintStarted', this.showCardWhenPrintStarted);
     addEventListener('onPrintFinished', this.hideCardsWhenPrintFinished);
  }

  private showCardWhenPrintStarted(){
    this.areCardsVisible = true;
  }

  private hideCardsWhenPrintFinished(){
    this.onScroll();
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(): void {
    if (!!this.parallaxContainer && !this.areCardsVisible) {
      const rect = this.parallaxContainer.nativeElement.getBoundingClientRect()
      this.areCardsVisible = ((rect.top >= 0) && (rect.top < window.innerHeight)) || ((rect.bottom >= 0) && (rect.bottom <= window.innerHeight)) || ((rect.top <= 0) && (rect.bottom >= window.innerHeight));
    }
  }
}
