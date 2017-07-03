import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {FormServiceProvider} from '../../providers/form-service/form-service';
import {Translator} from '../../lib/df-translate';
import {DBTranslator} from '../../lib/db-translate';


@IonicPage()
@Component({
  selector: 'page-live-section',
  templateUrl: 'live-section.html',
  providers: [FormServiceProvider, Translator, DBTranslator],
})

export class LiveSectionPage implements OnInit {
  sectionName: string = 'allMapBreathingList';
  agencyId: string = '355bfcc5-baae-11e3-b9ed-842b2b4bbc99';
  data: string;// = '{"title":"Breathing","description":"","type":"regular","order":1,"fields":[{"dbId":"06737847-07a7-11e0-bdc9-8e92303c9d5f","name":"06737847-07a7-11e0-bdc9-8e92303c9d5f","type":"text","label":"Respiration Rate(/min)","grid":"Multi1.5"},{"dbId":"067387ad-07a7-11e0-bdc9-8e92303c9d5f","name":"067387ad-07a7-11e0-bdc9-8e92303c9d5f","type":"text","label":"Sp02(%)","grid":"Multi1.5"},{"name":"71718b4d-2a34-11e5-b454-842b2b4bbc99","label":null,"grid":"Multi3","type":"select","options":[{"id":"71718b4d-2a34-11e5-b454-842b2b4bbc99","name":"ORA"},{"id":"f398960b-2a34-11e5-b454-842b2b4bbc99","name":"W02"}],"multiple":false},{"name":"06742347-07a7-11e0-bdc9-8e92303c9d5f","label":"Breathing Quality","grid":"Multi3","type":"select","options":[{"id":"06742347-07a7-11e0-bdc9-8e92303c9d5f","name":"Regular"},{"id":"06742848-07a7-11e0-bdc9-8e92303c9d5f","name":"Shallow"},{"id":"06742d59-07a7-11e0-bdc9-8e92303c9d5f","name":"Labored"},{"id":"06745c86-07a7-11e0-bdc9-8e92303c9d5f","name":"Access Mus. Use"},{"id":"067461b4-07a7-11e0-bdc9-8e92303c9d5f","name":"Decreased B.S."},{"id":"3c20a279-c795-11e6-b953-3052cb650342","name":"Apneic"},{"id":"42844a4f-c795-11e6-b953-3052cb650342","name":"Rapid"},{"id":"4a7bfa42-c795-11e6-b953-3052cb650342","name":"Weak/Agonal"},{"id":"51576619-c795-11e6-b953-3052cb650342","name":"Mechanically Assisted"}],"multiple":true},{"name":"06739748-07a7-11e0-bdc9-8e92303c9d5f","label":"Cough","grid":"Multi3","type":"select","options":[{"id":"0673a198-07a7-11e0-bdc9-8e92303c9d5f","name":"None"},{"id":"0673a69d-07a7-11e0-bdc9-8e92303c9d5f","name":"Productive"},{"id":"0673abab-07a7-11e0-bdc9-8e92303c9d5f","name":"Dry"}],"multiple":false},{"name":"0673f553-07a7-11e0-bdc9-8e92303c9d5f","label":"Sputum Color","grid":"Multi3","type":"select","options":[{"id":"0673f553-07a7-11e0-bdc9-8e92303c9d5f","name":"Clear"},{"id":"0673fc20-07a7-11e0-bdc9-8e92303c9d5f","name":"Yellow"},{"id":"067401ee-07a7-11e0-bdc9-8e92303c9d5f","name":"Green"},{"id":"06740710-07a7-11e0-bdc9-8e92303c9d5f","name":"Brown"},{"id":"06740c2a-07a7-11e0-bdc9-8e92303c9d5f","name":"Pink"},{"id":"06741768-07a7-11e0-bdc9-8e92303c9d5f","name":"Bloody"}],"multiple":false},{"dbId":"06743c59-07a7-11e0-bdc9-8e92303c9d5f","name":"06743c59-07a7-11e0-bdc9-8e92303c9d5f","type":"text","label":"Other()","grid":"Multi3"}]}';
  section: any;

  constructor(public formServiceProvider: FormServiceProvider,
              public dbTranslator: DBTranslator,
              public translator: Translator) {
  }

  ngOnInit() {

  }

  getData() {
    this.formServiceProvider.loadSection(this.sectionName, this.agencyId)
      .then(data => {
        const json = this.dbTranslator.translateDBtoJsonSection(data);
        this.data = JSON.stringify(json);
      });
  }

  show() {
    const data = JSON.parse(this.data);
    const form = this.translator.CreateDFSection(data);
    this.section = form;
  }
}



