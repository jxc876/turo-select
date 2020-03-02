import { Component } from '@angular/core';
import {TuroOption} from './turo-select/turo-option.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  optionList1: TuroOption[] = [
    { displayText: 'Option 1', icon: 'assessment' },
    { displayText: 'Option 2', icon: 'bookmark' },
    { displayText: 'Option 3', icon: 'credit_card' },
    { displayText: 'Option 4', icon: 'eco' },
  ];

  optionList2: TuroOption[] = [
    { displayText: 'Option 5', icon: 'home' },
    { displayText: 'Option 6', icon: 'receipt' },
    { displayText: 'Option 7', icon: 'work' },
    { displayText: 'Option 8', icon: 'touch_app' },
  ];
}
