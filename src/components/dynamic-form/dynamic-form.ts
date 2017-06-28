import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {PageBase} from '../../lib/page-base';
import {concatAll} from "rxjs/operator/concatAll";
// import {QuestionControlProvider} from '../../providers/question-control/question-control';


@Component({
  //providers: [QuestionControlProvider],
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html'
})


export class DynamicFormComponent implements OnInit {

  @ViewChild('DynamicFormSlider') dynamicFormSlider: any;
  @Input() data: any[] = [];

  constructor( public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  // constructor(private qcp: QuestionControlProvider) {
  //   console.log('Create Dynamic Form');
  // }

  ngOnInit() {
    if (this.data) {
      console.log('data presented');
    }
    else {
      console.log('data not presented');
    }
  }

  // onSubmit() {
  //   //this.payLoad = JSON.stringify(this.form.value);
  // }
  // next(){
  //   this.dynamicFormSlider.slideNext();
  // }
  //
  // prev(){
  //   this.dynamicFormSlider.slidePrev();
  // }
  //
  // confirmDelete() {
  //   let prompt = this.alertCtrl.create({
  //     title: 'Confirm Delete',
  //     message: 'Are you sure you want to delete this patient care report?',
  //     buttons: [
  //       {
  //         text: 'Cancel'
  //       },
  //       {
  //         text: 'Delete',
  //         handler: data => {
  //           // if (this.pcr != null) // if the PCR has not been submitted there is nothing to delete in the DB
  //           //   this.pcrProvider.deletePCR(this.pcr)
  //           //
  //           // this.navCtrl.push(PCRList)
  //         }
  //       }
  //     ]
  //   });
  //
  //   prompt.present();
  // }
  //
  // submit(){
  // }

}




