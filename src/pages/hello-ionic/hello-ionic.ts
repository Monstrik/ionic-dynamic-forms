import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';

import {StartPage} from '../start/start';
import {FormsPage} from '../forms/forms';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  showForms(){
    this.navCtrl.push(FormsPage, {
      //item: item
    });
  }
  showStart() {
    this.navCtrl.push(StartPage, {
      //item: item
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
