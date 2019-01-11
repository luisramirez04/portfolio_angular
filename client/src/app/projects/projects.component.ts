import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  url = "https://api.github.com/users/luisramirez04/repos";
  htmlToAdd = "";
  
  headerDict = {
    "Accept": "application/vnd.github.mercy-preview+json"
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.displayProjects();
  }

  getProjects() {
    return this.http.get(this.url, this.requestOptions);
  }

  displayProjects() {
    this.getProjects()
    .subscribe((data: any[]) => {
      const regexForYear = /\d{4}/;
        for(let i = 0; i < data.length; i++) {
          this.htmlToAdd += "<tr>";
          this.htmlToAdd += "<td>" + data[i].name + "</td>"; 
          this.htmlToAdd += "<td class='projectDescription'>" + data[i].description + "</td>"; 
          this.htmlToAdd += "<td>" + data[i].topics.toString().replace(/,/g, ", ") + "</td>"; 
          this.htmlToAdd += "<td>" + data[i].created_at.substring(0, 4) + "</td>"; 
          this.htmlToAdd += "</tr>";
      }

    });
  }
}
