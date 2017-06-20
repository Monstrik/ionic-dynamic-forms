import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionBase} from './../../lib/question-base';



@Injectable()
export class QuestionControlProvider {
  constructor() {
  }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}

