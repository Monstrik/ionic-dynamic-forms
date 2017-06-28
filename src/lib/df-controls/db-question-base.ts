//
// // ALLBUTTONSID,BUTTONID,BUTTONNAME,BUTTONTYPE,
// // MULTI,MULTIID,SECTIONNAME,SECTIONLABEL,LABEL,
// // MULTITYPE,MAPNAMEl
//
// export class DbQuestionBase<T> {
//   value: T;
//   dbId :string; // ALLBUTTONSID
//   metaId:string;// BUTTONID
//   label: string; //BUTTONNAME
//   htmlType: string;// BUTTONTYPE
//   multi:boolean;  // MULTI
//   multiId: strimg;// MULTIID
//   sectionName:// ,SECTIONNAME,SECTIONLABEL,LABEL,
//   key: string;
//   required: boolean;
//   order: number;
//   controlType: string;
//
//   constructor(options: {
//     value?: T,
//     key?: string,
//     label?: string,
//     required?: boolean,
//     type?: string,
//     order?: number,
//     controlType?: string
//   } = {}) {
//     this.value = options.value;
//     this.key = options.key || '';
//     this.htmlType = options.type || '';
//     this.label = options.label || '';
//     this.required = !!options.required;
//     this.order = options.order === undefined ? 1 : options.order;
//     this.controlType = options.controlType || '';
//   }
// }
