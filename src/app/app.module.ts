import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {HttpModule} from '@angular/http';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import {ListPage} from '../pages/list/list';
import {StartPage} from '../pages/start/start';
import {FormsPage} from '../pages/forms/forms';
import {FormPagePage} from '../pages/form-page/form-page';
import {FormPagesPage} from "../pages/form-pages/form-pages";
import {FormSectionPage} from '../pages/form-section/form-section';
import {GridFormWithSectionsPage} from '../pages/grid-form-with-sections/grid-form-with-sections';



import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';


import {FormsDataProvider} from '../providers/forms-data/forms-data';
import {QuestionControlProvider} from '../providers/question-control/question-control';
import {DynamicFormComponent} from '../components/dynamic-form/dynamic-form';
import {DynamicFormQuestionComponent} from '../components/dynamic-form-question/dynamic-form-question';
import {DynamicFormSectionComponent} from '../components/dynamic-form-section/dynamic-form-section';
import {DynamicFormPageComponent} from '../components/dynamic-form-page/dynamic-form-page';
import {FormServiceProvider} from '../providers/form-service/form-service';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    StartPage,
    FormsPage,
    FormSectionPage,
    FormPagePage,
    FormPagesPage,
    GridFormWithSectionsPage,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormSectionComponent,
    DynamicFormPageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    StartPage,
    FormsPage,
    FormSectionPage,
    FormPagePage,
    FormPagesPage,
    GridFormWithSectionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FormsDataProvider,
    QuestionControlProvider,
    FormServiceProvider
  ]
})
export class AppModule {
}
