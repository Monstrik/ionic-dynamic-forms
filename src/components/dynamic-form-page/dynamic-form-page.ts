import {Component, Input, OnInit} from '@angular/core';
import {DFPage} from "../../lib/df-controls/df-page";
/**
 * Generated class for the DynamicFormPageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dynamic-form-page',
  templateUrl: 'dynamic-form-page.html'
})
export class DynamicFormPageComponent implements OnInit {

  @Input() page: DFPage;
  constructor() {


  }

  ngOnInit() {
    this.page.sections.forEach((sec)=>{
      // console.log(sec);
    })

  }

}
