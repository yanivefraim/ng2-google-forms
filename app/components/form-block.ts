import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'form-block',
  template: `
    <div>
      {{data | json}}
    </div>
  `
})
export default class FormBlock {
  @Input() data;
}
