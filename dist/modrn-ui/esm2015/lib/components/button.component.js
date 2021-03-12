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
                styles: ['button {padding: 8px; border-radius: 20px; min-height: 36px; max-height: 42px; border: none; box-shadow: 0px 0px 6px -4px black; cursor: pointer}',
                    'button.default {color: black; background: white;}',
                    'button.primary {color: white; background: #00A67E;}',
                    'button.error {color: white; background: #d70000;}',
                    'button.default:active {color: black; background: #f2f2f2;}',
                    'button.primary:active {color: white; background: #004A39;}',
                    'button.error:active {color: white; background: #660000;}',
                    'button:focus {box-shadow: 0px 0px 6px -4px blue; outline: none !important;}']
            },] }
];
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    color: [{ type: core_1.Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vZHJuLXVpL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRztBQUVsRyxNQWlCYSxlQUFlO0lBSXhCO1FBRlMsVUFBSyxHQUFvQyxTQUFTLENBQUM7SUFFNUMsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFNO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMxQixDQUFDOztBQTVCTCwwQ0E4QkM7O1lBOUJBLGdCQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7R0FFVDtnQkFXRCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTt5QkFUakMsbUpBQW1KO29CQUNuSixtREFBbUQ7b0JBQ25ELHFEQUFxRDtvQkFDckQsbURBQW1EO29CQUNuRCw0REFBNEQ7b0JBQzVELDREQUE0RDtvQkFDNUQsMERBQTBEO29CQUMxRCw2RUFBNkU7YUFHbEY7Ozs7b0JBR0ksWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21vZHJuLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiIFtjbGFzc109XCJjb2xvclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2J1dHRvbj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgICAnYnV0dG9uIHtwYWRkaW5nOiA4cHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IG1pbi1oZWlnaHQ6IDM2cHg7IG1heC1oZWlnaHQ6IDQycHg7IGJvcmRlcjogbm9uZTsgYm94LXNoYWRvdzogMHB4IDBweCA2cHggLTRweCBibGFjazsgY3Vyc29yOiBwb2ludGVyfScsXHJcbiAgICAgICdidXR0b24uZGVmYXVsdCB7Y29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kOiB3aGl0ZTt9JyxcclxuICAgICAgJ2J1dHRvbi5wcmltYXJ5IHtjb2xvcjogd2hpdGU7IGJhY2tncm91bmQ6ICMwMEE2N0U7fScsXHJcbiAgICAgICdidXR0b24uZXJyb3Ige2NvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZDogI2Q3MDAwMDt9JyxcclxuICAgICAgJ2J1dHRvbi5kZWZhdWx0OmFjdGl2ZSB7Y29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kOiAjZjJmMmYyO30nLFxyXG4gICAgICAnYnV0dG9uLnByaW1hcnk6YWN0aXZlIHtjb2xvcjogd2hpdGU7IGJhY2tncm91bmQ6ICMwMDRBMzk7fScsXHJcbiAgICAgICdidXR0b24uZXJyb3I6YWN0aXZlIHtjb2xvcjogd2hpdGU7IGJhY2tncm91bmQ6ICM2NjAwMDA7fScsXHJcbiAgICAgICdidXR0b246Zm9jdXMge2JveC1zaGFkb3c6IDBweCAwcHggNnB4IC00cHggYmx1ZTsgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O30nXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnZGVmYXVsdCcgfCAnZXJyb3InID0gJ2RlZmF1bHQnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==