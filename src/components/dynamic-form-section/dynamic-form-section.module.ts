import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DynamicFormSectionComponent } from './dynamic-form-section';

@NgModule({
  declarations: [
    DynamicFormSectionComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DynamicFormSectionComponent
  ]
})
export class DynamicFormSectionComponentModule {}
