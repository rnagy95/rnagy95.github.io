import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DegreeType } from '../interfaces/EducationHistory';
import { EmploymentType } from '../interfaces/WorkHistory';

import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to calc time delta Years', () => {
    const a = new Date(2022,0,1);
    const b = new Date(2022,11,31);

    expect(component.calcYearsFloor(a,b)).toBe(1)
  })

  it('should be able to calc time delta Months', () => {
    const a = new Date(2022,0,1);
    const b = new Date(2022,10,31);

    expect(component.calcMonthsRound(a,b)).toBe(11)
  })

  it('should be able to get string representation of a EmploymentTypeEnum value', ()=> {
    expect(component.getStringRepresentationOfEmploymentTypeEnumValue(EmploymentType.fullTime)).toBe('fullTime')
  })

  it('should be able to get string representation of a DegreeType value', ()=> {
    expect(component.getStringRepresentationOfDegreeTypeEnumValue(DegreeType.BSc)).toBe('BSc')
  })
});
