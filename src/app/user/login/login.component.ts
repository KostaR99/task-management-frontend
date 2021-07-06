import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public username: string = '';
  public password: string = '';


  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logIn(){
    if(this.username.trim().length != 0 && this.password.trim().length != 0){
      this.authService.login(this.username, this.password).subscribe(resp =>{
        if(resp.msg)
          alert(resp.msg)
        else{
          localStorage.setItem("token", resp.token)
          console.log(resp.token)
          this.router.navigate(['/task/list']);
        }
      })
    }else{
      alert("Fill in the required fields!")
    }
  }

}
