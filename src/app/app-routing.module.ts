import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/home' },
  {path: "home", component: HomeComponent},
  {path: "books", component: BooksComponent},
  {path:"profile", component: ProfileComponent},
  {path: "register", component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
