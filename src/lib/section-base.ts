import {QuestionBase} from './question-base';

export class SectionBase<T> {
  value: T;
  title: string;
  description: string;
  order: number;
  type: string;
  questions: QuestionBase<any>[] = [];
  constructor(options: {
    value?: T,
    title?: string,
    description?: string,
    order?: number,
    type?: string,
    questions?: QuestionBase<any>[]
  } = {}) {
    this.value = options.value;
    this.title = options.title || '';
    this.description = options.description || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || '';
    this.questions = options.questions;
  }
}
