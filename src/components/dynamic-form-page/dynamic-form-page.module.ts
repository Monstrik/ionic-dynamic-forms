import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DynamicFormPageComponent } from './dynamic-form-page';

@NgModule({
  declarations: [
    DynamicFormPageComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DynamicFormPageComponent
  ]
})
export class DynamicFormPageComponentModule {}
