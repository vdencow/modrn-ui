"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModrnUiModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const button_component_1 = require("./components/button.component");
const form_field_component_1 = require("./components/form-field.component");
const modrn_ui_component_1 = require("./modrn-ui.component");
class ModrnUiModule {
}
exports.ModrnUiModule = ModrnUiModule;
ModrnUiModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [modrn_ui_component_1.ModrnUiComponent, form_field_component_1.FormFieldComponent, button_component_1.ButtonComponent],
                imports: [
                    common_1.CommonModule,
                ],
                exports: [modrn_ui_component_1.ModrnUiComponent, form_field_component_1.FormFieldComponent, button_component_1.ButtonComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kcm4tdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kcm4tdWkvc3JjL2xpYi9tb2Rybi11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBQStDO0FBQy9DLHdDQUF5QztBQUV6QyxvRUFBZ0U7QUFDaEUsNEVBQXVFO0FBQ3ZFLDZEQUF3RDtBQUl4RCxNQU9hLGFBQWE7O0FBUDFCLHNDQU84Qjs7WUFQN0IsZUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHFDQUFnQixFQUFFLHlDQUFrQixFQUFFLGtDQUFlLENBQUM7Z0JBQ3JFLE9BQU8sRUFBRTtvQkFDUCxxQkFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxxQ0FBZ0IsRUFBRSx5Q0FBa0IsRUFBRSxrQ0FBZSxDQUFDO2FBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kcm5VaUNvbXBvbmVudCB9IGZyb20gJy4vbW9kcm4tdWkuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01vZHJuVWlDb21wb25lbnQsIEZvcm1GaWVsZENvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW01vZHJuVWlDb21wb25lbnQsIEZvcm1GaWVsZENvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNb2RyblVpTW9kdWxlIHsgfVxuIl19