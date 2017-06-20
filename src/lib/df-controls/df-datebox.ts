import {QuestionBase} from '../question-base';

export class DFDatebox extends QuestionBase<string> {
  controlType = 'datebox';
  htmlType: string;
  constructor(options: {} = {}) {
    super(options);
    this.htmlType = 'date';
  }
}


