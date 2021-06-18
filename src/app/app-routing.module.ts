import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'takmicenja',
    component: QuestionListComponent
  },
  {
    path:'takmicenjalist/:id',
    component: QuestionDetailsComponent
  },
  {
    path: 'homepage',
    component:HomepageComponent
  },
  {
  path: 'heroes',
  component:HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
