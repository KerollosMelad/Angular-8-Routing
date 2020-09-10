import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    outlet: "firstPage"
  },
  {
    path: "",
    component: HomeComponent,
    outlet: "firstPage"
  },
  {
    path: "users",
    component: UsersComponent,
  },

  {
    path: "admin",
    component: AdminComponent,
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
