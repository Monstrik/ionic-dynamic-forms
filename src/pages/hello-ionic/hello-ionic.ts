import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';

import {StartPage} from '../start/start';
import {FormsPage} from '../forms/forms';

import {FormSectionPage} from '../form-section/form-section';
import {LiveSectionPage} from '../live-section/live-section';
import {GridFormWithSectionsPage} from '../grid-form-with-sections/grid-form-with-sections';

import {FormPagePage} from '../form-page/form-page';
import {FormServiceProvider} from '../../providers/form-service/form-service';
import {Translator} from '../../lib/df-translate';
import {FormPagesPage} from "../form-pages/form-pages";
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [FormServiceProvider, Translator]
})
export class HelloIonicPage {
  public data: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public formServiceProvider: FormServiceProvider,
              public translator: Translator) {
  }

  showForms() {
    this.navCtrl.push(FormsPage, {
      //item: item
    });
  }

  showStart() {
    this.navCtrl.push(StartPage, {
      //item: item
    });
  }
  showDynamicForm(type:string){
    switch (type){
      case 'liveSection':
        this.navCtrl.push(LiveSectionPage);
        break;
      case 'section':
        this.navCtrl.push(FormSectionPage);
        break;
      case 'grid':
        this.navCtrl.push(GridFormWithSectionsPage);
        break;
      case 'page':
        this.navCtrl.push(FormPagePage);
        break;
      case 'pages':
        this.navCtrl.push(FormPagesPage);
        break;
      default:
        this.navCtrl.push(GridFormWithSectionsPage);
        break;

    }

  }

  showFormSection() {
    this.navCtrl.push(FormSectionPage);
  }


  getData() {
    //loadSection
    this.formServiceProvider.load()
      .then(data => {
        this.data = data;

        const form = this.translator.CreateCEMSSection(data.data);
        // let alert = this.alertCtrl.create({
        //   title: 'Got Data',
        //   subTitle: JSON.stringify(form),
        //   buttons: ['OK']
        // });
        // alert.present();

      });


  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'New Friend!' + msg,
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}
