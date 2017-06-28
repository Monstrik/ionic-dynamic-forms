import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormPagePage } from './form-page';

@NgModule({
  declarations: [
    FormPagePage,
  ],
  imports: [
    IonicPageModule.forChild(FormPagePage),
  ],
  exports: [
    FormPagePage
  ]
})
export class FormPagePageModule {}
