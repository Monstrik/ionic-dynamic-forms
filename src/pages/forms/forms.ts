import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormsDataProvider} from '../../providers/forms-data/forms-data';


@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
  providers: [FormsDataProvider],
})
export class FormsPage {
  data: any[];
  provider: any;


  constructor(provider: FormsDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.provider = provider;
    this.data = this.provider.getFormData();
  }



  ionViewDidLoad() {

  }

}
