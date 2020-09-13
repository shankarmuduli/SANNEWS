import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewscontentComponent } from './newscontent/newscontent.component';
import { ArticlespageComponent } from './articlespage/articlespage.component';


const routes: Routes = [
  { path:'',redirectTo:'/international',pathMatch: 'full'},
  {path:'international',component:NewscontentComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
