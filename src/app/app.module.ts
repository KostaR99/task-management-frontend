import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UnLogedComponent } from './navigation/un-loged/un-loged.component';
import { LogedComponent } from './navigation/loged/loged.component';
import { AuthGuard } from './guard/auth.guard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';
import { TaskService } from './services/task.service';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UnLogedComponent,
    LogedComponent,
    ListTasksComponent,
    AddTaskComponent,
    TaskItemComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService,AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
