import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
      this.router.navigate(['/testemonials']);
    }
    );
  }

  postTestemonial(newTestemonialData) {
    this.http.post('http://localhost:3000/testemonials', newTestemonialData).subscribe(res => {
    })
  }
}
