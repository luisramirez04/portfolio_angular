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

  validateForm() {
    let isFormValid = true; 
    //This regex matches a string of characters that starts and ends with at least one character of a-z or A-Z.
    const nameRegex = /^[a-zA-Z]+$/;
    //This regex allows for domains that are between 2 and 3 letters that do not have numbers in them. 
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    //This regex requires the format of XXX-XXX-XXXX to match.
    const phoneRegex = /\d{3}[\-]\d{3}[\-]\d{4}/;

    isFormValid = isFormValid && this.isFieldValid("name", "nameError", nameRegex);
    isFormValid = isFormValid && this.isFieldValid("email", "emailError", emailRegex);
    isFormValid = isFormValid && this.isFieldValid("phone", "phoneError", phoneRegex);
    isFormValid = isFormValid && this.isCommentsValid();

    return isFormValid;
}

//reusable validator function for non-required inputs of the testemonial form. 
isFieldValid(input, error, regex) {
    const inputField = $("#"+input);
    const inputError = $("#"+error);
    if (inputField.val().length > 0 && !regex.test(inputField.val())) {
        inputError.show();
        inputField.focus();
        return false; 
    } else {
        inputError.hide();
        return true;
    }
}

isCommentsValid() {
    const comments = $("#comments");
    const commentsError = $("#commentsError");
    if (comments.val().length == 0) {
        commentsError.show("blind");
        comments.focus();
        return false;
    } else {
        commentsError.hide("blind");
        return true;
    }
}

}
