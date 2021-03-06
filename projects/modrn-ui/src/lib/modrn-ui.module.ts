import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button.component';
import { CheckBoxComponent } from './components/checkbox.component';
import { FormFieldComponent } from './components/form-field.component';
import { ModrnUiComponent } from './modrn-ui.component';



@NgModule({
  declarations: [ModrnUiComponent, FormFieldComponent, ButtonComponent, CheckBoxComponent],
  imports: [
    CommonModule,
  ],
  exports: [ModrnUiComponent, FormFieldComponent, ButtonComponent, CheckBoxComponent]
})
export class ModrnUiModule { }
