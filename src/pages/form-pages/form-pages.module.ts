import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormPagesPage } from './form-pages';

@NgModule({
  declarations: [
    FormPagesPage,
  ],
  imports: [
    IonicPageModule.forChild(FormPagesPage),
  ],
  exports: [
    FormPagesPage
  ]
})
export class FormPagesPageModule {}
