import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';
import { AddTestemonialComponent } from './add-testemonial/add-testemonial.component';
import { TestemonialsComponent } from './testemonials/testemonials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    InterestsComponent,
    ProjectsComponent,
    ResumeComponent,
    FooterComponent,
    AddTestemonialComponent,
    TestemonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
