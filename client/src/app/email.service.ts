import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { 
  }

  postEmail(newEmail) {
    this.http.post('http://localhost:3000/email', newEmail).subscribe(res => {});
  }
}
