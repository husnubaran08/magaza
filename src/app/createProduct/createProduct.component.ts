import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-createProduct',
  templateUrl: './createProduct.component.html',
  styleUrls: ['./createProduct.component.css']
})
export class CreateProductComponent {
  constructor(private productService:ProductService, private router:Router) { }

 
  
 
  

  
  
}
