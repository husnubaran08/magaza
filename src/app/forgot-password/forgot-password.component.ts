import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../alertify.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
   constructor(private alertify:AlertifyService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
   this.alertify.success('Lütfen emailinizi kontrol ediniz!');
    
  }

  
}
