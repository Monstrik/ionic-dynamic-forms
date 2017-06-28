

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormServiceProvider} from '../../providers/form-service/form-service';
import {Translator} from '../../lib/df-translate';

@IonicPage()
@Component({
  selector: 'page-form-pages',
  templateUrl: 'form-pages.html',
  providers: [FormServiceProvider, Translator],
})

export class FormPagesPage implements OnInit {
  pages: any;

  constructor(public provider: FormServiceProvider,
              public translator: Translator) {
  }

  ngOnInit() {
    const data = this.provider.loadFakePages();
    console.log(data);
    const pages = this.translator.CreateDFPages(data);
    console.log(pages);
    this.pages = pages;
  }
}

