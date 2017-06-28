import {DFPage} from './df-controls/df-page';
import {DFSection} from './df-controls/df-section';
import {DFDropDown} from './df-controls/df-drop-down';
import {QuestionBase} from './question-base';
import {DFDatebox} from './df-controls/df-datebox';
import {DFTextbox} from './df-controls/df-textbox';
import {DFButton} from './df-controls/df-button';
import {DFToggle} from './df-controls/df-toggle';
import {SectionBase} from "./section-base";


export class Translator {

  createDFControll(field: any): QuestionBase<any> {
    switch (field.type) {

      case 'text':
      case 'email':
      case 'time':
      case 'password': {
        return new DFTextbox({
          key: field.name,
          label: field.label,
          value: field.data,
          type: field.type,
          required: field.required,
          order: field.order
        });
      }
      case 'toggle': {
        return new DFToggle({
          key: field.name,
          label: field.label,
          value: field.data,
          order: field.order
        });
      }
      case 'date': {
        return new DFDatebox({
          key: field.name,
          label: field.label,
          value: field.data,
          required: field.required,
          order: field.order
        });
      }
      case 'button': {
        return new DFButton({
          key: field.name,
          label: field.label,
          value: field.data,
          required: field.required,
          order: field.order
        });
      }
      case 'select': {
        let options = [];
        field.options.forEach((option) => {
          options.push({id: option.id, name: option.name})
        });

        return new DFDropDown({
          key: field.name,
          label: field.label,
          value: field.data,
          required: field.required,
          order: field.order,
          multiple: field.multiple,
          options: options,
        });
      }
      // case 'checkbox': {
      //   // console.log('c DFCheckbox for ' + field.label);
      //   return;
      // }
      default: {
        return new DFTextbox({
          key: field.name,
          label: field.label,
          value: field.data,
          required: field.required,
          order: field.order
        });
      }
    }
  }

  translateToDFSectionData(json: any): SectionBase<any> {
    let sectionModel: any;
    json.fields.forEach((field) => {
      sectionModel[field.key] = field.value;
    });
    return sectionModel;
  }

  translateToDFSection(json: any): SectionBase<any> {
    let sectionQuestions: QuestionBase<any>[] = [];
    json.fields.forEach((field) => {
      sectionQuestions.push(this.createDFControll(field))
    });
    return new DFSection({
      title: json.title,
      description: json.description,
      type: json.type,
      order: json.order,
      questions: sectionQuestions.sort((a, b) => a.order - b.order)
    });

  }

  translateDBtoSection(data: string): SectionBase<any> {


    // ALLBUTTONSID,BUTTONID,BUTTONNAME,BUTTONTYPE,
    // MULTI,MULTIID,SECTIONNAME,SECTIONLABEL,LABEL,
    // MULTITYPE,MAPNAMEl
    let json = JSON.parse(data);
    let sectionQuestions: QuestionBase<any>[] = [];
    json.forEach((field) => {
      // console.log(field.BUTTONNAME);
      if (field.MULTI == 1) {
        switch (field.BUTTONTYPE) {
          case 'Button': {
            sectionQuestions.push(new DFButton({
              key: field.ALLBUTTONSID,
              label: field.BUTTONNAME,
              order: field.order
            }));
            break;
          }
          case 'email': {
            // console.log('c DFTextbox email for ' + field.label);
            sectionQuestions.push(new DFTextbox({
              key: field.name,
              type: 'email',
              label: field.label,
              value: field.data,
              required: field.required,
              order: field.order
            }));
            break;
          }
          case 'date': {
            // console.log('c DFTextbox date for ' + field.label);
            sectionQuestions.push(new DFDatebox({
              key: field.name,
              type: 'date',
              label: field.label,
              value: field.data,
              required: field.required,
              order: field.order
            }));
            break;
          }
          case 'password': {
            // console.log('c DFPasswordbox for ' + field.label);
            break;
          }
          case 'select': {
            // console.log('c DFDropDown for ' + field.label);
            // console.log('with options  ' + field.options);
            let options = [];
            field.options.forEach((option) => {
              options.push({key: option.value, value: option.label})
            })

            sectionQuestions.push(
              new DFDropDown({
                key: field.name,
                label: field.label,
                value: field.data,
                required: field.required,
                order: field.order,
                options: options
              }))
            break;
          }
          case 'checkbox': {
            // console.log('c DFCheckbox for ' + field.label);
            break;
          }
          case 'radio': {
            // console.log('c DFRadio for ' + field.label);
            break;
          }
          default: {
            // console.log('c default DFTextbox for ' + field.label);
          }

        }
      }

    });
    return new DFSection({
      title: 'Test Section',
      description: 'ion',
      type: '',
      order: 2,
      questions: sectionQuestions.sort((a, b) => a.order - b.order)
    });

  }

}
