import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FormSectionPage} from './form-section';

@NgModule({
  declarations: [
    FormSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(FormSectionPage),
  ],
  exports: [
    FormSectionPage
  ]
})
export class FormSectionPageModule {
}
