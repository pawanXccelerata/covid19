import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfAssessmentComponent } from './self-assessment/self-assessment.component';

const routes: Routes = [
  { path: 'self-assessment', component: SelfAssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
