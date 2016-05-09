import {Component, Input} from '@angular/core';

@Component({
  selector: 'single-choice',
  template: `
    <style>
      a {
        display: inline-block;
        padding-top: 6px;
      }
    </style>
    <div>
      <div *ngFor="let option of options">
        <input type="radio" disabled>
        <input type="text" [value]="option">
      </div>
      <a (click)="handleClick()">+ Add option</a>
    </div>
  `
})
export default class SingleChoice {
  @Input() options = [];

  handleClick() {
    let nr = this.options.length + 1;
    this.options.push(`Option ${nr}`);
  }
}
