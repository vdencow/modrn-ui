"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonComponent = void 0;
const core_1 = require("@angular/core");
class ButtonComponent {
    constructor() {
        this.color = 'default';
    }
    ngOnInit() {
    }
    onClick(e) {
        console.log('clicked');
    }
}
exports.ButtonComponent = ButtonComponent;
ButtonComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'modrn-button',
                template: `
    <button (click)="onClick($event)" [class]="color"><ng-content></ng-content></button>
  `,
                encapsulation: core_1.ViewEncapsulation.None,
                styles: ['button {padding: 8px; border-radius: 20px; min-height: 42px;}',
                    'button.default {color: black; background: white;}',
                    'button.primary {color: white; background: green;}',
                    'button.error {color: white; background: #d70000;}']
            },] }
];
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    color: [{ type: core_1.Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vZHJuLXVpL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRztBQUVsRyxNQWFhLGVBQWU7SUFLeEI7UUFIUyxVQUFLLEdBQW9DLFNBQVMsQ0FBQztJQUc1QyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQU07UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzFCLENBQUM7O0FBekJMLDBDQTJCQzs7WUEzQkEsZ0JBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOztHQUVUO2dCQU9ELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO3lCQUxqQywrREFBK0Q7b0JBQy9ELG1EQUFtRDtvQkFDbkQsbURBQW1EO29CQUNuRCxtREFBbUQ7YUFHeEQ7Ozs7b0JBR0ksWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21vZHJuLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiIFtjbGFzc109XCJjb2xvclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2J1dHRvbj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgICAnYnV0dG9uIHtwYWRkaW5nOiA4cHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IG1pbi1oZWlnaHQ6IDQycHg7fScsXHJcbiAgICAgICdidXR0b24uZGVmYXVsdCB7Y29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kOiB3aGl0ZTt9JyxcclxuICAgICAgJ2J1dHRvbi5wcmltYXJ5IHtjb2xvcjogd2hpdGU7IGJhY2tncm91bmQ6IGdyZWVuO30nLFxyXG4gICAgICAnYnV0dG9uLmVycm9yIHtjb2xvcjogd2hpdGU7IGJhY2tncm91bmQ6ICNkNzAwMDA7fScsXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnZGVmYXVsdCcgfCAnZXJyb3InID0gJ2RlZmF1bHQnO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=