import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: "home"},
  {path: 'home', component: HomeComponent},
  {path: 'post/:idpost', component:BlogComponent},
  {path: 'categoria/:categoriaTitulo', component:ViewPostComponent},
  {path: 'new', component:FormComponent},
  {path:'**', redirectTo:"/home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
