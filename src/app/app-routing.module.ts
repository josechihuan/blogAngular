import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: "home"},
  {path: 'home', component: HomeComponent},
  {path: 'post/:idpost', component:BlogComponent},
  {path: 'categoria/:categoriaTitulo', component:HomeComponent},
  {path: 'new', component:FormComponent},
  {path:'**', redirectTo:"/home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
