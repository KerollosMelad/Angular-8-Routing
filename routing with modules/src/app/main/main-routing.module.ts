
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main.component';


const routes: Routes = [
    {
        path: "", component: MainComponent, children: [{
            path: "users", component: UsersComponent
        },
        {
            path: "admin", component: AdminComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
