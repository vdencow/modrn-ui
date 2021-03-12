import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'modrn-button',
  template: `
    <label class="container">
        <ng-content></ng-content>
        <input [formControl]="control" type="checkbox">
        <span class="check"></span>
    </label>
  `,
  styles: [
      `.container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }`,
      `.container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }`,
      `.check {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
      }`,
      `.container:hover input ~ .check {
        background-color: #ccc;
      }`,
      `.container input:checked ~ .check {
        background-color: #2196F3;
      }`,
      `.checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }`,
      `.container input:checked ~ .check:after {
        display: block;
      }`,
      `.container .check:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

    @Output() change = new EventEmitter()
    control = new FormControl(false)
    constructor() { }

    ngOnInit(): void {
    }

 
    onClick() {
        this.change.emit(this.control.value)
    }

}
