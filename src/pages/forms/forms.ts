import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormsDataProvider} from '../../providers/forms-data/forms-data';


@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
  providers: [FormsDataProvider],
})
export class FormsPage {
  questions: any[];
  questions2: any[];
  provider: any;
  text: string;
  icons: string[];


  constructor(provider: FormsDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];
    this.provider = provider;
    this.questions = this.provider.getQuestions(1);
    this.questions2 = this.provider.getQuestions(2);
    console.log('FormsPage this.questions=',this.questions);
    console.log('FormsPage this.questions2=',this.questions2);
  }

  getForms() {

  }

  ionViewDidLoad() {
    this.getForms()

  }

}
