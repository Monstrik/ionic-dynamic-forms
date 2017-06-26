import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {FormsDataProvider} from '../../providers/forms-data/forms-data';


@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
  providers: [FormsDataProvider],
})
export class FormsPage {

  @ViewChild('pcrFormSlider') pcrFormSlider: any;

  submitAttempt: boolean = false;
  pcr: any;

  checked: boolean = true;

  ionTitle: string;
  dynformdata: any[];
  provider: any;


  // public formBuilder: FormBuilder public utilities: Utilities) {
  constructor(provider: FormsDataProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,) {
    this.provider = provider;
    this.dynformdata = this.provider.getFormData();
    this.ionTitle = 'Patient Care Report';
    console.log('FormsPage this.questions=',this.dynformdata);

  }

  // getForms() {
  //
  // }

  ionViewDidLoad() {
    // this.getForms()

  }

  next(){
      this.pcrFormSlider.slideNext();
  }

  prev(){
         this.pcrFormSlider.slidePrev();
  }

  confirmDelete() {
    let prompt = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this patient care report?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: data => {
            // if (this.pcr != null) // if the PCR has not been submitted there is nothing to delete in the DB
            //   this.pcrProvider.deletePCR(this.pcr)
            //
            // this.navCtrl.push(PCRList)
          }
        }
      ]
    });

    prompt.present();
  }

  submit(){
  }

}
