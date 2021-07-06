import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  public task:Task;
  public description:string;
  public finished:boolean;
  private pom:boolean;
  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit(): void {
    this.task = history.state['task']
    this.description = this.task.description
    this.finished = this.task.finished == 1
    this.pom = this.finished;
    console.log(this.task)
  }

  change(){
    if(this.description != this.task.description || this.pom != this.finished){
      this.taskService.edit(this.task.idtask,this.description,this.finished ? 1:0).subscribe();
    }
    this.router.navigate(['/task/list']);
  }

}
