import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { TestemonialsComponent } from './testemonials/testemonials.component';
import { AddTestemonialComponent } from './add-testemonial/add-testemonial.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "interests", component: InterestsComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "resume", component: ResumeComponent },
  { path: "testemonials", component: TestemonialsComponent },
  { path: "add-testemonial", component: AddTestemonialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
