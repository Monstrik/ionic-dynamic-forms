import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


import {DFPage} from '../../lib/df-controls/df-page';
import {DFSection} from '../../lib/df-controls/df-section';
import {DFDropDown} from '../../lib/df-controls/df-drop-down';
import {QuestionBase} from '../../lib/question-base';
import {DFDatebox} from '../../lib/df-controls/df-datebox';
import {DFTextbox} from '../../lib/df-controls/df-textbox';
import {DFButton} from '../../lib/df-controls/df-button';


@Injectable()
export class FormsDataProvider {


  formPage: any[];
  sectionQuestion: Observable<any>;

  constructor(public http: Http) {
    this.sectionQuestion = this.http.get('http://localhost/way-to-api/yiicems/index.php?r=Login/ApiGetFormData');
    this.sectionQuestion
      .map(res => res.json())
      .subscribe(data => {
        console.log('my data: ', data);
      });

    const fields = [
      {
        dbId: '',
        multiId: '',
        type: "text",
        name: "firstname",
        label: "Name",
        required: true,
        order: 1,
        data: ""
      },
      {
        type: "date",
        name: "bday",
        label: "Birthday",
        required: true,
        order: 1.1,
        data: ""
      },
      {
        type: "email",
        name: "emailUser",
        label: "Email",
        required: true,
        order: 2,
        data: ""
      },
      {
        type: "password",
        name: "pass",
        label: "Password",
        min: 6,
        max: 20,
        required: true,
        order: 3,
        data: ""
      },
      {
        dbId: '983458345908',
        type: "select",
        name: "teacher_id",
        label: "Teacher",
        options: [
          {value: 'Mark', label: "Mark"},
          {value: 'Claire', label: "Claire"},
          {value: 'Daniel', label: "Daniel"},
          {value: 'Gary', label: "Gary"}
        ],
        required: true,
        order: 4,
        data: ""
      },
      {
        type: "checkbox",
        name: "car_id",
        label: "Cars",
        options: [{id: 1, name: "bmw"}, {id: 2, name: "audi"}, {id: 3, name: "porche"}, {id: 4, name: "jaguar"}],
        required: true,
        order: 50,
        data: ""
      },
      {
        type: "radio",
        name: "color_id",
        label: "Colors",
        options: [{id: 1, name: "orange"}, {id: 2, name: "pink"}, {id: 3, name: "gray"}, {id: 4, name: "cyan"}],
        required: true,
        order: 60,
        data: ""
      }
    ];
    const sections = [{
      title: "Section 1",
      description: '',
      type: 'regular',
      order: 1,
      fields: fields
    }, {
      title: "Section 2",
      description: '',
      type: 'regular',
      order: 2,
      fields: fields
    }];
    const pages = [{
      title: "Patient Care Report",
      description: '',
      type: 'regular',
      order: 1,
      sections: sections
    }, {
      title: "Dispatch",
      description: '',
      type: 'regular',
      order: 2,
      sections: sections
    }];
    this.formPage = pages;


  }

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  translateDBtoSection(data: string): QuestionBase<any>[] {


    // ALLBUTTONSID,BUTTONID,BUTTONNAME,BUTTONTYPE,
    // MULTI,MULTIID,SECTIONNAME,SECTIONLABEL,LABEL,
    // MULTITYPE,MAPNAMEl
    let json = JSON.parse(data);
    let sectionQuestions: QuestionBase<any>[] = [];
    json.forEach((field) => {
      console.log(field.BUTTONNAME);
      if (field.MULTI == 0) {
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
    return sectionQuestions;
  }

  // getDataFromServer(): QuestionBase<any>[] {
  //   this.http.get('http://localhost/way-to-api/yiicems/index.php?r=Login/ApiGetFormData')
  //     .map(res => res.json()).subscribe(data => {
  //       return this.translateDBtoSection(data);
  //     });
  // }

  getFormData() {


    let pages: DFPage[] = [];
    this.formPage.forEach((page) => {
      let pageSections: DFSection[] = [];
      page.sections.forEach((section) => {
        let sectionQuestions: QuestionBase<any>[] = [];
        // sectionQuestions = this.getDataFromServer();
        section.fields.forEach((field) => {
          switch (field.type) {
            case 'text': {
              // console.log('c DFTextbox for ' + field.label);
              sectionQuestions.push(new DFTextbox({
                key: field.name,
                label: field.label,
                value: field.data,
                required: field.required,
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
        })
        pageSections.push(new DFSection({
          title: section.title,
          description: section.description,
          type: section.type,
          order: section.order,
          questions: sectionQuestions.sort((a, b) => a.order - b.order)
        }));
      });
      pages.push(new DFPage({
        title: page.title,
        description: page.description,
        type: page.type,
        order: page.order,
        sections: pageSections.sort((a, b) => a.order - b.order)
      }))
    });
    // console.log(pages);
    return pages;
  }
}
