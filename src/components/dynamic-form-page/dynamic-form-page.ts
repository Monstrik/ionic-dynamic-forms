import {Component, Input, OnInit} from '@angular/core';
import {DFPage} from "../../lib/df-controls/df-page";

@Component({
  selector: 'dynamic-form-page',
  templateUrl: 'dynamic-form-page.html'
})
export class DynamicFormPageComponent implements OnInit {

  @Input() page: DFPage;

  constructor() {
  }

  ngOnInit() {
  }
}
