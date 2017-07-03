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
    const url:string = 'http://localhost/way-to-api/yiicems/index.php?r=Login/ApiGetFormData';
    const reqData = {
      section: 'allMapBreathingList',
      agency_id: '355bfcc5-baae-11e3-b9ed-842b2b4bbc99'
    };
    return new Promise(resolve => {
      this.http.post(url, JSON.stringify(reqData))
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
  loadSection(section,agency_id) {
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }
    const url:string = 'http://localhost/way-to-api/yiicems/index.php?r=Login/ApiGetFormData';
    const reqData = {
      section: section,
      agency_id: agency_id
    };
    return new Promise(resolve => {
      this.http.post(url, JSON.stringify(reqData))
        .map(res => res.json())
        .subscribe(
          data => {
            this.data = data.data;
            resolve(this.data);
          },
          err => {
            console.log(err);

          }
        );
    });
  }

  loadFakeFields(): any {
    return [
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
  }

  loadFakeSection(): any {
    const section = {
      title: "Section Name",
      description: '',
      type: 'regular',
      order: 1,
      fields: this.loadFakeFields()
    };
    return section;
  }

  loadFakeSections(): any {
    return [this.loadFakeSection(), this.loadFakeSection(), this.loadFakeSection()];
  }

  loadFakePage(): any {
    return {
      title: "Page Name",
      description: '',
      type: 'regular',
      order: 1,
      sections: this.loadFakeSections()
    };
  }

  loadFakePages(): any[] {
    return [this.loadFakePage(), this.loadFakePage(), this.loadFakePage(), this.loadFakePage()];
  }
}
