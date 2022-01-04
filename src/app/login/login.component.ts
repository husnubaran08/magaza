import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Employee } from '../home/employee';
import { LoginServiceService } from '../services/loginService.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  employee = new Employee(0,"","","","",0); 
  

  constructor(private router: Router, private service:LoginServiceService) { }

  ngOnInit(): void {
  }
  login(){
    this.service.loginEmployeeFromRemote(this.employee).subscribe(
      data =>{
        console.log("response received");
        this.router.navigateByUrl('/home')
      },
      error => console.log("exception occured")
    );
  }
  forgotPassword(){
    this.router.navigateByUrl('/forgotPassword');
   }
}
