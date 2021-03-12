import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'modrn-button',
  template: `
    <button (click)="onClick($event)" [class]="color"><ng-content></ng-content></button>
  `,
  styles: [
      'button {padding: 8px; border-radius: 20px; min-height: 36px; max-height: 42px; border: none; box-shadow: 0px 0px 6px -4px black; cursor: pointer}',
      'button.default {color: black; background: white;}',
      'button.primary {color: white; background: #00A67E;}',
      'button.error {color: white; background: #d70000;}',
      'button.default:active {color: black; background: #f2f2f2;}',
      'button.primary:active {color: white; background: #004A39;}',
      'button.error:active {color: white; background: #660000;}',
      'button:focus {box-shadow: 0px 0px 6px -4px blue; outline: none !important;}'
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
