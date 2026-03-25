import { Component, OnInit } from '@angular/core';
import { WorkPlace, EmploymentType } from '../interfaces/WorkHistory';
import { DegreeType, Education } from '../interfaces/EducationHistory';
import { LocalizationService } from '../services/localization/localization.service';
import _workHistory from '../../assets/experience/work-history.json';
import _education from '../../assets/experience/education.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workHistory: WorkPlace[] = _workHistory;
  public educationHistory: Education[] = _education;

  constructor(public localizationService: LocalizationService) {
    this.workHistory.forEach(workPlace =>
      workPlace.positions.forEach(position => {
        position.startDate = new Date(position.startDateString);
        position.endDate = position.endDateString ? new Date(position.endDateString) : <Date><unknown>null;;
      }
      )
    );

    this.educationHistory.forEach(edu => {
      edu.startDate = new Date(edu.startDateString);
      edu.endDate = edu.endDateString ? new Date(edu.endDateString) : <Date><unknown>null;
    }
    )
  }

  ngOnInit(): void {

  }

  private clacTimeDelta(startDate: Date | undefined, endDate: Date | undefined): number {
    const start = (!!startDate ? startDate.getTime() : Date.now());
    const end = (!!endDate ? endDate.getTime() : Date.now());

    return end - start;
  }

  public getStringRepresentationOfEmploymentTypeEnumValue(i: number | any): string {
    return EmploymentType[i as EmploymentType];
  }

  public getStringRepresentationOfDegreeTypeEnumValue(i: number | any): string {
    return DegreeType[i as DegreeType];
  }

  public calcYearsFloor(startDate: Date | undefined, endDate: Date | undefined): number {
    const delta = this.clacTimeDelta(startDate, endDate);

    let years = Math.floor(delta / 31557600000);

    if ((365.25 - ((delta % 31557600000) / 86400000)) < 15) {

      years += 1;

    }

    return years;
  }

  public calcMonthsRound(startDate: Date | undefined, endDate: Date | undefined): number {
    const delta = this.clacTimeDelta(startDate, endDate);

    let months = Math.round((delta % 31557600000) / 2629800000);

    if (months > 11) {

      months = 0;

    }

    return months;
  }
}
