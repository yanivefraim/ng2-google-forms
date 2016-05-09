import {Component} from '@angular/core';
import FormBlock from './form-block';
import FormElement from '../lib/form-element';

@Component({
    selector: 'app',
    template: `
      <h2>Angular 2 Google Forms</h2>
      <div>
        <form-block
          *ngFor="let block of blocks"
          [data]="block"
          (remove)="handleRemove($event)"
        ></form-block>
      </div>
      <button (click)="addFormBlock()">+</button>
    `,
    directives: [FormBlock]
})
export class AppComponent {
  blocks = [
    new FormElement('What is your name?'),
    new FormElement('Your experience with Angular 1.x?', ['Up to 1 year', '1-3 years', 'More than 3 years'], 'single')
  ];

  addFormBlock() {
    this.blocks = [...this.blocks, new FormElement()];
  }

  handleRemove(block) {
    this.blocks = this.blocks.filter(item => item !== block);
  }
}
