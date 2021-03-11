import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'modrn-form-field',
  template: `
    <div><ng-content></ng-content></div>
  `,
  styles: [
     
  ]
})
export class FormFieldComponent implements OnInit {



    constructor() { }

    ngOnInit(): void {
    }

}
