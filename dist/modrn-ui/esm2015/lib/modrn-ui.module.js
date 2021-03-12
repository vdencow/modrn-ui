"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModrnUiModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const button_component_1 = require("./components/button.component");
const checkbox_component_1 = require("./components/checkbox.component");
const form_field_component_1 = require("./components/form-field.component");
const modrn_ui_component_1 = require("./modrn-ui.component");
class ModrnUiModule {
}
exports.ModrnUiModule = ModrnUiModule;
ModrnUiModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [modrn_ui_component_1.ModrnUiComponent, form_field_component_1.FormFieldComponent, button_component_1.ButtonComponent, checkbox_component_1.CheckBoxComponent],
                imports: [
                    common_1.CommonModule,
                ],
                exports: [modrn_ui_component_1.ModrnUiComponent, form_field_component_1.FormFieldComponent, button_component_1.ButtonComponent, checkbox_component_1.CheckBoxComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kcm4tdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kcm4tdWkvc3JjL2xpYi9tb2Rybi11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBQStDO0FBQy9DLHdDQUF5QztBQUV6QyxvRUFBZ0U7QUFDaEUsd0VBQW9FO0FBQ3BFLDRFQUF1RTtBQUN2RSw2REFBd0Q7QUFJeEQsTUFPYSxhQUFhOztBQVAxQixzQ0FPOEI7O1lBUDdCLGVBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQ0FBZ0IsRUFBRSx5Q0FBa0IsRUFBRSxrQ0FBZSxFQUFFLHNDQUFpQixDQUFDO2dCQUN4RixPQUFPLEVBQUU7b0JBQ1AscUJBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMscUNBQWdCLEVBQUUseUNBQWtCLEVBQUUsa0NBQWUsRUFBRSxzQ0FBaUIsQ0FBQzthQUNwRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RyblVpQ29tcG9uZW50IH0gZnJvbSAnLi9tb2Rybi11aS5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9kcm5VaUNvbXBvbmVudCwgRm9ybUZpZWxkQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIENoZWNrQm94Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW01vZHJuVWlDb21wb25lbnQsIEZvcm1GaWVsZENvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBDaGVja0JveENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kcm5VaU1vZHVsZSB7IH1cbiJdfQ==