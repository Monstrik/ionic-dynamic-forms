import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveSectionPage } from './live-section';

@NgModule({
  declarations: [
    LiveSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveSectionPage),
  ],
  exports: [
    LiveSectionPage
  ]
})
export class LiveSectionPageModule {}
