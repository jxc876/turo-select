import * as _ from 'lodash';
import { Component, Input, OnInit } from '@angular/core';
import { TuroOption } from './turo-option.interface';

@Component({
  selector: 'app-turo-select',
  templateUrl: './turo-select.component.html',
  styleUrls: ['./turo-select.component.scss']
})
export class TuroSelectComponent implements OnInit {

  @Input()
  options: TuroOption[] = [];

  defaultText = '- Select -';
  isOpen = false;
  selectedOptions: Set<TuroOption> = new Set<TuroOption>();

  constructor() { }

  ngOnInit() {
  }

  get triggerText(): string {
    if (this.selectedOptions.size === 0) {
      return this.defaultText;
    } else {
      const optionsAsArray = Array.from(this.selectedOptions.values());
      return _.chain(optionsAsArray).map(option => option.displayText).join(', ').value();
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  optionClicked(option: TuroOption): void {
    if (this.selectedOptions.has(option)) {
      this.selectedOptions.delete(option);
    } else {
      this.selectedOptions.add(option);
    }
  }

  isSelected(option: TuroOption): boolean {
    return this.selectedOptions.has(option);
  }

}
