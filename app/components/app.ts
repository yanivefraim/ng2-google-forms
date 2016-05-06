import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <h3>Angular 2 Google Form</h3>
    <ul>
      <li *ngFor="let elem of data">{{elem | json}}</li>
    </ul>
    <button (click)="addFormElement()">+</button>`
})
export class AppComponent {
  data = [new FormElement()];

  addFormElement() {
    this.data = [...this.data, new FormElement()];
  }
}

export class FormElement {

  constructor(
    public title = 'New Item',
    public type = 'input',
    public value = '',
    public required = false) {
      //
    }
}
