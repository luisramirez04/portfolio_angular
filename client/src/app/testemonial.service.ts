import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestemonialService {
  testemonials: any[];

  constructor(private http: HttpClient, private router: Router) { }

  getTestemonials() {
    this.http.get<any[]>('http://localhost:3000/testemonials')
    .subscribe((res) => {
      this.testemonials = res;
    }
    );
  }

  postTestemonial(newTestemonialData) {
    this.http.post('http://localhost:3000/testemonials', newTestemonialData)
      .subscribe(res => this.router.navigate(["/testemonials"]));
  } 
}
