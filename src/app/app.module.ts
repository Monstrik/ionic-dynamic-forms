import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { StartPage } from '../pages/start/start';
import { FormsPage } from '../pages/forms/forms';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { FormsDataProvider } from '../providers/forms-data/forms-data';
import { QuestionControlProvider } from '../providers/question-control/question-control';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form';
import { DynamicFormQuestionComponent } from '../components/dynamic-form-question/dynamic-form-question';
import { DynamicFormSectionComponent } from '../components/dynamic-form-section/dynamic-form-section';
import { DynamicFormPageComponent } from '../components/dynamic-form-page/dynamic-form-page';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    StartPage,
    FormsPage,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormSectionComponent,
    DynamicFormPageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    StartPage,
    FormsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FormsDataProvider,
    QuestionControlProvider
  ]
})
export class AppModule {}
