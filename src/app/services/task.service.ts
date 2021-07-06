import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  host = "http://localhost:3000"

  viewTasks():Observable<any>{
    return this.http.get(this.host+"/task/list")
  }

  addTask(name:string,type:string,description:string,finished:number):Observable<any>{
    return this.http.post(this.host+"/task/add",{name:name,type:type,description:description,finished:finished})
  }

  delete(id:number):Observable<any>{
    return this.http.delete(this.host+"/task/delete/"+id);
  }

  edit(id:number,description:string,finished:number):Observable<any>{
    return this.http.patch(this.host+"/task/edit/"+id,{description:description,finished:finished})
  }
}
