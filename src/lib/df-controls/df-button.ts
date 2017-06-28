import { QuestionBase } from '../question-base';

export class DFButton extends QuestionBase<string> {
  controlType = 'button';
  constructor(options: {} = {}) {
    super(options);
  }
}


