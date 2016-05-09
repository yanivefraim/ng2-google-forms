import {Component} from '@angular/core';

@Component({
  selector: 'multiple-choice',
  template: `
    <style>
      a {
        display: inline-block;
        padding-top: 6px;
      }
    </style>
    <div>
      <div *ngFor="let option of options">
        <input type="checkbox" disabled>
        <input type="text" [value]="option">
      </div>
      <a (click)="handleClick()">+ Add option</a>
    </div>
  `
})
export default class MultipleChoice {
  options = ['Option 1'];

  handleClick() {
    let nr = this.options.length + 1;
    this.options.push(`Option ${nr}`);
  }
}
