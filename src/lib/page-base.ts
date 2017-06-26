import {SectionBase} from './section-base';

export class PageBase<T> {
  value: T;
  title: string;
  description: string;
  order: number;
  type: string;
  sections: SectionBase<any>[] = [];

  constructor(options: {
    value?: T,
    title?: string,
    description?: string,
    order?: number,
    type?: string,
    sections?: SectionBase<any>[]
  } = {}) {
    this.value = options.value;
    this.title = options.title || '';
    this.description = options.description || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || '';
    this.sections = options.sections;
  }
}
