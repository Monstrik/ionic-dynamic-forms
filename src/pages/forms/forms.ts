import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormServiceProvider} from '../../providers/form-service/form-service';
import {Translator} from '../../lib/df-translate';

@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
  providers: [FormServiceProvider, Translator],
})

export class FormsPage implements OnInit {
  data: any[];
  section: any;
  isDataAvailable: boolean = false;

  constructor(public provider: FormServiceProvider,
              public navCtrl: NavController,
              public navParams: NavParams,
              public translator: Translator) {
    this.provider = provider;
  }

  ngOnInit() {

    this.provider.load()
      .then(data => {
        this.section = this.translator.translateDBtoSection(data);

      });

    // this.provider.loadFakeSection()
    //   .then(data => {
    //     const form=this.translator.CreateDFSection(data);
    //     console.log(form)
    //     this.section = form
    //   });
  }

  ionViewDidLoad() {
    // console.log('FormsPage ViewDidLoad')
  }
}
