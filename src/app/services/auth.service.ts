import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    constructor(private http:HttpClient,private router:Router){}
    host = "http://localhost:3000/"

    login(username:string,password:string):Observable<any>{
      return this.http.post(this.host+"user/login",{username:username,password:password}).pipe(map((resp:any)=>{return resp}))
    }

    register(username:string,password:string):Observable<any>{
        return this.http.post(this.host+"user/register",{username:username,password:password})
    }

    logout(){
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
    }
}