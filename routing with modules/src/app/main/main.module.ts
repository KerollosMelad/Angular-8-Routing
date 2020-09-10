import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [ MainComponent, NavComponent, UsersComponent, AdminComponent],
  imports: [
    CommonModule, MainRoutingModule
  ]
})
export class MainModule { }
