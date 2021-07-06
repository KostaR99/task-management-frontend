import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public name: string = '';
  public type: string = '';
  public description: string = '';
  public finished: number = 0;

  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    if(this.name.trim().length != 0 && this.type.trim().length != 0){
      
    this.taskService.addTask(this.name,this.type,this.description,this.finished).subscribe(resp=>{
      alert(resp.msg)
      this.router.navigate(['/task/list'])
    })
  }
  else{
    alert("Please input all required fields!")
  }
}

}
