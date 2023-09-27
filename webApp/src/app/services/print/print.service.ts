import { Injectable } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  private onPrintStarted: Event = new Event('onPrintStarted');
  private onPrintFinished: Event = new Event('onPrintFinished');

  public print(): void {
    dispatchEvent(this.onPrintStarted);
    window.print();
    dispatchEvent(this.onPrintFinished);
  }

  constructor(private themeService: ThemeService) { }

}
