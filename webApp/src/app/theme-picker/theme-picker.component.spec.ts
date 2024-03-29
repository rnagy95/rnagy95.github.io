import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule as MatMenuModule } from '@angular/material/menu';

import { FilterPrivateThemesPipe, ThemePickerComponent } from './theme-picker.component';

describe('ThemePickerComponent', () => {
  let component: ThemePickerComponent;
  let fixture: ComponentFixture<ThemePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemePickerComponent, FilterPrivateThemesPipe],
      imports: [MatMenuModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ThemePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
