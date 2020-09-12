import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
import { ArticlespageComponent } from './articlespage/articlespage.component';


const routes: Routes = [
  { path:'',redirectTo:'/homepage',pathMatch: 'full'},
  { path: 'homepage',component: HomepageComponent, 
  children:[
    { path: '', redirectTo: 'international', pathMatch: 'full' },
    {path:'international',component:NewscontentComponent},
    {path:'article',component:ArticlespageComponent}
     
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
