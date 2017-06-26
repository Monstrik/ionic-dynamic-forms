import {Component, Input, OnInit} from '@angular/core';
import {DFSection} from "../../lib/df-controls/df-section";
import {QuestionControlProvider} from '../../providers/question-control/question-control';
import {FormGroup} from '@angular/forms';
/**
 * Generated class for the DynamicFormSectionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  providers: [QuestionControlProvider],
  selector: 'dynamic-form-section',
  templateUrl: 'dynamic-form-section.html'
})
export class DynamicFormSectionComponent implements OnInit {

  @Input() section: DFSection;
  form: FormGroup;

  constructor(private qcp: QuestionControlProvider) {
    // console.log('Hello DynamicFormSectionComponent Component');
  }
  ngOnInit() {
    this.form = this.qcp.toFormGroup(this.section.questions);
  }


}
