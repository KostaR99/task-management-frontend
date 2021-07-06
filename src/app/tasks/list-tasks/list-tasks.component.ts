import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  constructor(private taskService:TaskService,private router:Router) { }
  public tasks:Observable<Task[]>


  ngOnInit(): void {
    this.taskService.viewTasks().subscribe(resp=>{
      this.tasks = resp.results;
    })
  }

  delete(task:Task){
    this.taskService.delete(task.idtask).subscribe(res=>{
      this.taskService.viewTasks().subscribe(resp=>{
        this.tasks=resp.results
      })
    })
  }
}
