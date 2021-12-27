import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Employee } from '../home/employee';
import { AccountService } from '../services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  model:Employee = new Employee(0,"","","","",0); 
  

  constructor(private router: Router, private accountService:AccountService) { }

  ngOnInit(): void {
  }
  login(form:NgForm){
    this.accountService.login(this.model)
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  };
  forgotPassword(){
    this.router.navigateByUrl('/forgotPassword');
   }
}
