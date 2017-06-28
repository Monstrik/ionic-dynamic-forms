import {Component, Input, OnInit} from '@angular/core';
import {DFSection} from "../../lib/df-controls/df-section";
import {QuestionControlProvider} from '../../providers/question-control/question-control';
import {FormGroup} from '@angular/forms';

@Component({
  providers: [QuestionControlProvider],
  selector: 'dynamic-form-section',
  templateUrl: 'dynamic-form-section.html'
})
export class DynamicFormSectionComponent implements OnInit {

  @Input() section: DFSection;
  form: FormGroup;

  constructor(private qcp: QuestionControlProvider) {
  }

  ngOnInit() {
    if (this.section) {
      // console.log('data presented', this.section);
      this.form = this.qcp.toFormGroup(this.section.questions);
    }
    else {
      // console.log('data not presented');
    }
  }
}
