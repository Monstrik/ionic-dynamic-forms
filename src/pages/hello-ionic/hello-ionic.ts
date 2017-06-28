import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';

import {StartPage} from '../start/start';
import {FormsPage} from '../forms/forms';
import {FormSectionPage} from '../form-section/form-section';
import {FormServiceProvider} from '../../providers/form-service/form-service';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [FormServiceProvider]
})
export class HelloIonicPage {
  public data: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public formServiceProvider: FormServiceProvider) {
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
  showFormSection() {
    this.navCtrl.push(FormSectionPage);
  }

  getData() {
    this.formServiceProvider.load()
      .then(data => {
        this.data = data;
        let alert = this.alertCtrl.create({
          title: 'Got Data',
          subTitle: this.data,
          buttons: ['OK']
        });
        alert.present();

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
