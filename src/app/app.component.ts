import { Component, AfterViewInit } from '@angular/core';

import 'bootstrap';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit(){
    $('[data-toggle="tooltip"]').tooltip();
  }
}
