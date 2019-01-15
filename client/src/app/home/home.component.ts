import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emailToSend = {};

  constructor(private emailService: EmailService) { }

  ngOnInit() {}

  post() {
    this.emailService.postEmail(this.emailToSend);
  }

}
