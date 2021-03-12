"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBoxComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
class CheckBoxComponent {
    constructor() {
        this.change = new core_1.EventEmitter();
        this.control = new forms_1.FormControl(false);
    }
    ngOnInit() {
    }
    onClick() {
        this.change.emit(this.control.value);
    }
}
exports.CheckBoxComponent = CheckBoxComponent;
CheckBoxComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'modrn-button',
                template: `
    <label class="container">
        <ng-content></ng-content>
        <input [formControl]="control" type="checkbox">
        <span class="check"></span>
    </label>
  `,
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [`.container {
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
      }`]
            },] }
];
CheckBoxComponent.ctorParameters = () => [];
CheckBoxComponent.propDecorators = {
    change: [{ type: core_1.Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kcm4tdWkvc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0c7QUFDbEcsMENBQTZDO0FBRTdDLE1BaUVhLGlCQUFpQjtJQUkxQjtRQUZVLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQTtRQUNyQyxZQUFPLEdBQUcsSUFBSSxtQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFHRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QyxDQUFDOztBQTdFTCw4Q0ErRUM7O1lBL0VBLGdCQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7Z0JBdURELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO3lCQXJEakM7Ozs7Ozs7Ozs7O1FBV0U7b0JBQ0Y7Ozs7OztRQU1FO29CQUNGOzs7Ozs7O1FBT0U7b0JBQ0Y7O1FBRUU7b0JBQ0Y7O1FBRUU7b0JBQ0Y7Ozs7UUFJRTtvQkFDRjs7UUFFRTtvQkFDRjs7Ozs7Ozs7OztRQVVFO2FBR1A7Ozs7cUJBR0ksYUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtb2Rybi1idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPGlucHV0IFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgdHlwZT1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja1wiPjwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgICAgYC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIH1gLFxyXG4gICAgICBgLmNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgfWAsXHJcbiAgICAgIGAuY2hlY2sge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgfWAsXHJcbiAgICAgIGAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICB9YCxcclxuICAgICAgYC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICAgICAgfWAsXHJcbiAgICAgIGAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9YCxcclxuICAgICAgYC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVjazphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1gLFxyXG4gICAgICBgLmNvbnRhaW5lciAuY2hlY2s6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IDlweDtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIH1gXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja0JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gICAgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSlcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jb250cm9sLnZhbHVlKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=