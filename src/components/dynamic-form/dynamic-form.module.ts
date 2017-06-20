import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DynamicFormComponent } from './dynamic-form';

@NgModule({
  declarations: [
    DynamicFormComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormComponentModule {}
