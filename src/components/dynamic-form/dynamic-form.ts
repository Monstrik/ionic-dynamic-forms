import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../lib/question-base';
import {QuestionControlProvider} from '../../providers/question-control/question-control';


@Component({
  providers: [QuestionControlProvider],
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html'
})


export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcp: QuestionControlProvider) {
    console.log('Hello DynamicFormComponent Component');
  }

  ngOnInit() {
    console.log(this.questions)
    if (this.questions){
      this.form = this.qcp.toFormGroup(this.questions);
    }
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}




