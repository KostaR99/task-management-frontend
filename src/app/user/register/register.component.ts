import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username: string = '';
  public password: string = '';


  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.username.trim().length != 0 && this.password.trim().length != 0){
      this.authService.register(this.username,this.password).subscribe(resp=>{
        alert(resp.msg);
        this.router.navigate(['/login']);}
      )
    }else{
      alert("Fill in the required fields!")
    }
  }

}
