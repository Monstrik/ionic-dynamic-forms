import {QuestionBase} from '../question-base';

export class DFTimebox extends QuestionBase<string> {
  htmlType: string;
  constructor(options: {} = {}) {
    super(options);
    this.htmlType = 'time';
  }
}


