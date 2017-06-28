import { QuestionBase } from '../question-base';

export class DFToggle extends QuestionBase<string> {
  controlType = 'toggle';
  constructor(options: {} = {}) {
    super(options);
  }
}


