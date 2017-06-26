import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../lib/question-base';

@Component({
  selector: 'dynamic-form-question',
  templateUrl: 'dynamic-form-question.html'
})


export class DynamicFormQuestionComponent {


  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  constructor() {
    // console.log('Hello DynamicFormQuestionComponent Component');
  }
  update(){
    console.log('update field');
  }
  get isValid() { return this.form.controls[this.question.key].valid; }
}

