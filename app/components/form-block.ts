import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'form-block',
  template: `
    <style>
      .form-block {
        padding: 10px;
        border: 1px solid #eee;
        border-radius: 5px;
        margin: 14px 0;
      }
    </style>
    <div class="form-block">
      {{data | json}}
      <button (click)="handleClick()">Remove</button>
    </div>
  `
})
export default class FormBlock {
  @Input() data;
  @Output() remove = new EventEmitter();

  handleClick() {
    this.remove.emit(this.data);
  }
}
