import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FormServiceProvider {
  data: any;

  constructor(public http: Http) {
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost/way-to-api/yiicems/index.php?r=Login/ApiGetFormData')
        .map(res => res.json())
        .subscribe(
          data => {
            this.data = data;
            resolve(this.data);
          },
          err => {
            console.log(err);
            //reject(err)
          }
        );
      // .subscribe(data => {
      //   //translate data
      //   this.data = data;
      //   resolve(this.data);
      // });
    });
  }


  loadFakeSectionJson():any {
    const fields = [
      {
        dbId: '123465',
        type: "button",
        name: "CoolButton1",
        label: "CoolButton",
        required: true,
        order: 1
      },
      {
        dbId: '12345',
        type: "text",
        name: "firstname",
        label: "Name",
        required: true,
        order: 1,
        data: ""
      },
      {
        dbId: '1234445345',
        type: "toggle",
        name: "firstname",
        label: "Enabled",
        order: 1,
        data: ""
      },
      {
        dbId: '2222',
        type: "date",
        name: "bday",
        label: "Birthday",
        required: true,
        data: ""
      },
      {
        dbId: '3333',
        type: "email",
        name: "emailUser",
        label: "Email",
        required: true,
        data: ""
      },
      {
        dbId: '4444',
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
          {id: 'Mark', name: "Mark"},
          {id: 'Claire', name: "Claire"},
          {id: 'Daniel', name: "Daniel"},
          {id: 'Gary', name: "Gary"}
        ],
        required: true,
        order: 4,
        data: ""
      },
      {
        dbId: '66666',
        type: "select",
        name: "color_id",
        label: "Colors",
        options: [{id: 1, name: "orange"}, {id: 2, name: "pink"}, {id: 3, name: "gray"}, {id: 4, name: "cyan"}],
        required: true,
        order: 60,
        multiple: true,
        data: ""
      }
    ];
    const section = {
      title: "Section 1",
      description: '',
      type: 'regular',
      order: 1,
      fields: fields
    };
    return section;
  }

  // loadFakePage():any {
  //   this.loadFakeSection()
  //   return Promise.resolve();
  // }
}
