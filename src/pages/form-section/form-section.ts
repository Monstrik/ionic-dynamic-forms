import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormServiceProvider} from '../../providers/form-service/form-service';
import {Translator} from '../../lib/df-translate';

@IonicPage()
@Component({
  selector: 'page-form-section',
  templateUrl: 'form-section.html',
  providers: [FormServiceProvider, Translator],
})

export class FormSectionPage implements OnInit {
  section: any;

  constructor(public provider: FormServiceProvider,
              public translator: Translator) {
  }

  ngOnInit() {
    const data = this.provider.loadFakeSectionJson();
    // console.log('data', data)
    const form = this.translator.translateToDFSection(data);
    //const formData = this.translator.translateToDFSectionData(data);
    // console.log('form', form)
    this.section = form

  }

}



