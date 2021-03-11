import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'modrn-button',
  template: `
    <button (click)="onClick($event)" [class]="color"><ng-content></ng-content></button>
  `,
  styles: [
      'button {padding: 8px; border-radius: 20px; min-height: 42px;}',
      'button.default {color: black; background: white;}',
      'button.primary {color: white; background: green;}',
      'button.error {color: white; background: #d70000;}',
  ],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

    @Input() color: 'primary' | 'default' | 'error' = 'default';


    constructor() { }

    ngOnInit(): void {
    }

    onClick(e: any) {
        console.log('clicked')
    }

}
