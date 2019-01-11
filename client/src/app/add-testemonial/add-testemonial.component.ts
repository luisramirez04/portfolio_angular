import { Component, OnInit } from '@angular/core';
import { TestemonialService } from '../testemonial.service';

@Component({
  selector: 'app-add-testemonial',
  templateUrl: './add-testemonial.component.html',
  styleUrls: ['./add-testemonial.component.scss']
})
export class AddTestemonialComponent implements OnInit {

  newTestemonialData = {};

  constructor(private testemonialService: TestemonialService) { }

  ngOnInit() {
    
  }

  post() {
    this.testemonialService.postTestemonial(this.newTestemonialData);
  }

}
