import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  employees : Employee[] = [
    {id:1, tc:"12345678910", name:" Ahmet Sayrantepe ", unvan:"Mağaza Personeli", password:"123", sayim:0}  ]
    
 
  constructor() { }

  ngOnInit(): void {
  }

}
