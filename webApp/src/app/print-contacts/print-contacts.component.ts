import { Component, Input, OnInit } from '@angular/core';
import { PrintContact } from '../interfaces/PrintContact';

@Component({
  selector: 'app-print-contacts',
  templateUrl: './print-contacts.component.html',
  styleUrls: ['./print-contacts.component.scss']
})
export class PrintContactsComponent implements OnInit {

  @Input() contacts: PrintContact[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
