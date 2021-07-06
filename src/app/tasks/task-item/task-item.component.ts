import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor(private taskService:TaskService,private router:Router) { }



  @Input() public task: Task;
  @Output() emittedTask: EventEmitter<Task> = new EventEmitter();

  delete(){
    this.emittedTask.emit(this.task);
  }
  
  editTask(){
    this.router.navigateByUrl('/task/edit',{state:{task:this.task}})
  }

  ngOnInit(): void {
  }
  
}
