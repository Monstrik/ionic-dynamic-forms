import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GridFormWithSectionsPage } from './grid-form-with-sections';

@NgModule({
  declarations: [
    GridFormWithSectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(GridFormWithSectionsPage),
  ],
  exports: [
    GridFormWithSectionsPage
  ]
})
export class GridFormWithSectionsPageModule {}
