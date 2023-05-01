import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintContactsComponent } from './print-contacts.component';

describe('PrintContactsComponent', () => {
  let component: PrintContactsComponent;
  let fixture: ComponentFixture<PrintContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
