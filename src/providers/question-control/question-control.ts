import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import 'rxjs/add/operator/map';

import {QuestionBase} from './../../lib/question-base';


@Injectable()
export class QuestionControlProvider {
  constructor() {
  }

  toFormGroup(fields: QuestionBase<any>[]) {
    let group: any = {};
    fields.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
