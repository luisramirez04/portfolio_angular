import { Component, OnInit } from '@angular/core';
import { TestemonialService } from '../testemonial.service';

@Component({
  selector: 'app-testemonials',
  templateUrl: './testemonials.component.html',
  styleUrls: ['./testemonials.component.scss']
})
export class TestemonialsComponent implements OnInit {

  constructor(private testemonialService: TestemonialService) { }

  ngOnInit() {
    this.testemonialService.getTestemonials();
  }

}
