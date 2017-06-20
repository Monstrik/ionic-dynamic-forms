import { QuestionBase } from '../question-base';

export class DFTextbox extends QuestionBase<string> {
  controlType = 'textbox';
  htmltype: string;

  constructor(options: {} = {}) {
    super(options);
    this.htmltype = options['type'] || '';
  }
}


