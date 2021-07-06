import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loged',
  templateUrl: './loged.component.html',
  styleUrls: ['./loged.component.css']
})
export class LogedComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
