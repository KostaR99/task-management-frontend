import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
                        {path:'login',component:LoginComponent},
                        {path:'register',component:RegisterComponent},
                        {path:'task/list',component:ListTasksComponent,canActivate:[AuthGuard]},
                        {path:'task/add',component:AddTaskComponent,canActivate:[AuthGuard]},
                        {path:'task/edit',component:EditTaskComponent,canActivate:[AuthGuard]},
                        {path:'**',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
