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

  post(emailForm: any) {
    this.emailService.postEmail(this.emailToSend);
    emailForm.reset();
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
