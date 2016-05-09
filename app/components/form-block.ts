import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import SinlgeChoice from './single-choice';
import MultipleChoice from './multiple-choice';

@Component({
  selector: 'form-block',
  directives: [SinlgeChoice, MultipleChoice],
  template: `
    <style>
      .form-block {
        padding: 16px 36px;
        border: 1px solid #eee;
        border-radius: 5px;
        margin: 14px 0;
      }

      .form-block-box {
        padding-bottom: 16px;
      }

      .form-block-foot {
        text-align: right;
      }
    </style>
    <div class="form-block">
      <div class="form-block-box">
        <input type="text" [(ngModel)]="_data.question" placeholder="Enter a Question">
        <select [(ngModel)]="_data.type">
          <option *ngFor="let type of types" [value]="type.id">{{type.text}}</option>
        </select>
      </div>
      <div class="form-block-box">
        <input placeholder="Short answer text" readonly *ngIf="_data.type === 'text'">
        <single-choice [options]="_data.options" *ngIf="_data.type === 'single'"></single-choice>
        <multiple-choice *ngIf="_data.type === 'multiple'"></multiple-choice>
      </div>
      <div class="form-block-foot">
        <button (click)="handleRemoveClick()">Remove</button>
      </div>
    </div>
  `
})
export default class FormBlock implements OnInit {
  @Input() data;
  @Output() remove = new EventEmitter();

  private types = [
    {id: 'text', text: 'Short answer'},
    {id: 'single', text: 'Multiple choice'},
    {id: 'multiple', text: 'Checkboxes'}
  ];
  private _data = {};


  ngOnInit() {
    this._data = Object.assign({}, this.data);
  }

  handleRemoveClick() {
    this.remove.emit(this.data);
  }
}
