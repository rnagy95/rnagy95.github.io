import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavmenuService {
  public isOpen: boolean = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
