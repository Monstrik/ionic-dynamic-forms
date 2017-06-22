export class SectionBase<T> {
  value: T;
  title: string;
  description: string;
  order: number;
  sectionType: string;

  constructor(options: {
    value?: T,
    title?: string,
    description?: string,
    order?: number,
    sectionType?: string
  } = {}) {
    this.value = options.value;
    this.title = options.title || '';
    this.description = options.description || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.sectionType = options.sectionType || '';
  }
}
