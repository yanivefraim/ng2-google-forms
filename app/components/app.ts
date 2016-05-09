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
          (change)="handleChange($event)"
        ></form-block>
      </div>
      <button (click)="addFormBlock()">+</button>
    `,
    directives: [FormBlock]
})
export class AppComponent {
  blocks = [new FormElement()];

  addFormBlock() {
    this.blocks = [...this.blocks, new FormElement()];
  }

  handleRemove(block) {
    this.blocks = this.blocks.filter(item => item !== block);
  }

  handleChange(data) {
    // TODO: save data
  }
}
