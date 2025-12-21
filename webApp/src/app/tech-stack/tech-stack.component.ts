import { Component, OnInit } from '@angular/core';
import techStack from '../../assets/tech-stack/tech-stack.json';
import { LocalizationService } from '../services/localization/localization.service';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface Category {
  name: string;
  icon: string;
}

interface Tool {
  name: string;
  category: string;
  logo: string;
}


@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  standalone: false
})
export class TechStackComponent implements OnInit {
  private readonly debounceTime: number = 300;
  private techStack = techStack;
  private tools: Tool[] = this.techStack.tools;
  private searchSubject: Subject<string> = new Subject<string>();
  
  public categories: Record<string, Category> = techStack.categories
  public groupItems: boolean = false;
  public filterText: string = '';

  public filteredTools: Tool[] = this.filterTools(this.filterText);
  public groupedTools: Record<string, Tool[]> = this.groupTools(this.filteredTools);

  public onFilterTextChange(): void {
    this.searchSubject.next(this.filterText);
  }

  public filterTools(filterText: string): Tool[] {
    if (!filterText) {
      return this.tools;
    }
    return this.tools.filter((tool) => tool.name.toLowerCase().includes(filterText.toLowerCase()));
  };

  public groupTools(filteredTools: Tool[]): Record<string, Tool[]> {
      return filteredTools.reduce<Record<string, Tool[]>>((acc, item) => {
        (acc[item.category] ??= []).push(item);
        return acc;
      }, {});
  }


  constructor(public localizationService: LocalizationService) {
    this.searchSubject.pipe(debounceTime(this.debounceTime)).subscribe((filterText) => {
      this.filteredTools = this.filterTools(filterText);
      this.groupedTools = this.groupTools(this.filteredTools);
    });

  }

  ngOnInit(): void {
  }


}
