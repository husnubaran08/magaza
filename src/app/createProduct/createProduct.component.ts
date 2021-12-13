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
export class CreateProductComponent implements OnInit {
  product: Product = new Product(0,0,0,"","",0);
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit() {
  }
  
  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data => { 
      this.goToProductList();
    });
  }
  goToProductList(){
    this.router.navigate(['/product']);
  }
  onSubmit(){
      this.saveProduct();
  }

  
  
}
