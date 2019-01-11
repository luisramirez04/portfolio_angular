import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestemonialService {
  testemonials = [];

  constructor(private http: HttpClient) { }

  getTestemonials() {
    this.http.get('http://localhost:3000/testemonials')
    .subscribe((res) => this.testemonials
    );
  }

  postTestemonial(newTestemonialData) {
    this.http.post('http://localhost:3000/testemonials', newTestemonialData).subscribe(res => {
    })
  }
}
