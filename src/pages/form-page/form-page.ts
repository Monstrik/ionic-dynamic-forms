

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormServiceProvider} from '../../providers/form-service/form-service';
import {Translator} from '../../lib/df-translate';

@IonicPage()
@Component({
  selector: 'page-form-page',
  templateUrl: 'form-page.html',
  providers: [FormServiceProvider, Translator],
})

export class FormPagePage implements OnInit {
  page: any;

  constructor(public provider: FormServiceProvider,
              public translator: Translator) {
  }

  ngOnInit() {
    const data = this.provider.loadFakePage();
    console.log(data);
    const page = this.translator.CreateDFPage(data);
    console.log(page);
    this.page = page;
  }
}
