import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DynamicFormQuestionComponent } from './dynamic-form-question';

@NgModule({
  declarations: [
    DynamicFormQuestionComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DynamicFormQuestionComponent
  ]
})
export class DynamicFormQuestionComponentModule {}
