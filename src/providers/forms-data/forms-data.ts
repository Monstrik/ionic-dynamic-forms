import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {DFDropDown} from '../../lib/df-controls/df-drop-down';
import {QuestionBase} from '../../lib/question-base';
import {DFDatebox} from '../../lib/df-controls/df-datebox';
import {DFTextbox} from '../../lib/df-controls/df-textbox';


@Injectable()
export class FormsDataProvider {


  constructor() {}
  // constructor(public http: Http) {
  //   console.log('Hello FormsDataProvider Provider');
  // }
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions(index: number) {
    const questions: QuestionBase<any>[] = [
      new DFTextbox({
        key: 'login',
        label: 'Login',
        // value: 'CoolLogin',
        // required: true,
        order: 0
      }),
      new DFTextbox({
        key: 'firstName',
        label: 'First Name',
        order: 1
      }),
      new DFTextbox({
        key: 'lastName',
        label: 'Last Name',
        order: 2
      }),
      new DFDatebox({
        key: 'birthDay',
        label: 'Birthday',
        // required: true,
        type: 'date',
        order: 3
      }),
      new DFTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 5
      }),
      new DFDropDown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 10
      })
    ];
    const questions2: QuestionBase<any>[] = [
      new DFTextbox({
        key: 'spouseName',
        label: 'Spouse name',
        order: 0
      }),
      new DFDatebox({
        key: 'sbirthDay',
        label: 'Spouse Birthday',
        // required: true,
        type: 'date',
        order: 3
      }),
      new DFDropDown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 10
      })
    ];
    if (index === 1) {
      console.log('q1');
      return questions.sort((a, b) => a.order - b.order);
    }
    else {
      console.log('q2');
      return questions2.sort((a, b) => a.order - b.order);
    }
  }
}
