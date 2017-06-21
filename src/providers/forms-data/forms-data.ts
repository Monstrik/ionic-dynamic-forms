import {Injectable} from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {DFDropDown} from '../../lib/df-controls/df-drop-down';
import {QuestionBase} from '../../lib/question-base';
import {DFDatebox} from '../../lib/df-controls/df-datebox';
import {DFTextbox} from '../../lib/df-controls/df-textbox';


@Injectable()
export class FormsDataProvider {


  formPage: any[];

  constructor() {
    const fields = [
      {
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
      name: "Section 1",
      fields: fields
    }];
    const page = [{
      name: "Page 1",
      sections: sections
    }];
    this.formPage = page;
  }

  // constructor(public http: Http) {
  //   console.log('Hello FormsDataProvider Provider');
  // }
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous


  getFormData() {

    let formDynData: QuestionBase<any>[] = [];
    this.formPage.forEach((page) => {
      console.log(page.name)
      page.sections.forEach((section) => {
        console.log(section.name)
        section.fields.forEach((field) => {
          switch (field.type) {
            case 'text': {
              console.log('c DFTextbox for ' + field.label);
              formDynData.push(new DFTextbox({
                key: field.name,
                label: field.label,
                value: field.data,
                required: field.required,
                order: field.order
              }));
              break;
            }
            case 'email': {
              console.log('c DFTextbox email for ' + field.label);
              formDynData.push(new DFTextbox({
                key: field.name,
                type: 'email',
                label: field.label,
                value: field.data,
                required: field.required,
                order: field.order
              }));
              break;
            }
            case 'date':
            {
              console.log('c DFTextbox date for ' + field.label);
              formDynData.push(new DFDatebox({
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
              console.log('c DFPasswordbox for ' + field.label);
              break;
            }

            case 'select': {
              console.log('c DFDropDown for ' + field.label);
              console.log('with options  ' + field.options);
              let options = [];
              field.options.forEach((option) => {
                options.push({key: option.value, value: option.label})
              })

              formDynData.push(
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
              console.log('c DFCheckbox for ' + field.label);
              break;
            }

            case 'radio': {
              console.log('c DFRadio for ' + field.label);
              break;
            }

            default: {
              console.log('c default DFTextbox for ' + field.label);
            }

          }
        })
      })
    });

    return formDynData.sort((a, b) => a.order - b.order);
    // const formData: QuestionBase<any>[] = [
    //   new DFTextbox({
    //     key: 'login',
    //     label: 'Login',
    //     // value: 'CoolLogin',
    //     // required: true,
    //     order: 0
    //   }),
    //   new DFTextbox({
    //     key: 'firstName',
    //     label: 'First Name',
    //     order: 1
    //   }),
    //   new DFTextbox({
    //     key: 'lastName',
    //     label: 'Last Name',
    //     order: 2
    //   }),
    //   new DFDatebox({
    //     key: 'birthDay',
    //     label: 'Birthday',
    //     // required: true,
    //     type: 'date',
    //     order: 3
    //   }),
    //   new DFTextbox({
    //     key: 'emailAddress',
    //     label: 'Email',
    //     type: 'email',
    //     order: 5
    //   }),
    //   new DFDropDown({
    //     key: 'brave',
    //     label: 'Bravery Rating',
    //     options: [
    //       {key: 'solid', value: 'Solid'},
    //       {key: 'great', value: 'Great'},
    //       {key: 'good', value: 'Good'},
    //       {key: 'unproven', value: 'Unproven'}
    //     ],
    //     order: 10
    //   }),
    //   new DFTextbox({
    //     key: 'spouseName',
    //     label: 'Spouse name',
    //     order: 100
    //   }),
    //   new DFDatebox({
    //     key: 'sbirthDay',
    //     label: 'Spouse Birthday',
    //     // required: true,
    //     type: 'date',
    //     order: 300
    //   }),
    //   new DFDropDown({
    //     key: 'brave',
    //     label: 'Bravery Rating',
    //     options: [
    //       {key: 'solid', value: 'Solid'},
    //       {key: 'great', value: 'Great'},
    //       {key: 'good', value: 'Good'},
    //       {key: 'unproven', value: 'Unproven'}
    //     ],
    //     order: 1000
    //   })
    // ];
  }
}
