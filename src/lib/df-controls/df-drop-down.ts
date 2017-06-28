import { QuestionBase } from '../question-base';

export class DFDropDown extends QuestionBase<string> {
  controlType = 'dropdown';
  multiple: boolean;
  options: {id: string, name: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.multiple = options['multiple']  === undefined ? false : options['multiple'];
    this.options = options['options'] || [];
  }
}
