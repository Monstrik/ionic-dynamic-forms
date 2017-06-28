
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormServiceProvider} from '../../providers/form-service/form-service';
import {Translator} from '../../lib/df-translate';

@IonicPage()
@Component({
  selector: 'page-grid-form-with-sections',
  templateUrl: 'grid-form-with-sections.html',
  providers: [FormServiceProvider, Translator],
})
export class GridFormWithSectionsPage implements OnInit {

  section: any;

  constructor(public provider: FormServiceProvider,
              public translator: Translator) {
  }

  ngOnInit() {
    const data = this.provider.loadFakeSection();
    // console.log('data', data)
    const form = this.translator.CreateDFSection(data);
    // console.log('form', form)
    this.section = form;
  }


}


