import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  filterText = '';
  public products: Product[] = [];
  public deleteProduct: Product | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.getProductList();
  }

  public getProductList():void{
    this.productService.getProductList().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public onSubmit(addForm : NgForm): void{
    this.productService.createProduct(addForm.value).subscribe(
      (response: Product) => {
        console.log(response);
        this.getProductList();
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public searchProduct(key:string):void{
    const results:Product[] = [];
    for(const product of this.products){
      if(product.name.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(product);
      }
    }
    this.products = results;
    if ( results.length === 0 || !key){
      this.getProductList();
    }
  }

  public onDeleteProduct(barkod : number): void{
    this.productService.deleteProduct(barkod).subscribe(
      (response: void) => {
        console.log(response);
        this.getProductList();
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public onOpenModal(product:Product, mode:string):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle', 'model');
    if(mode === 'delete'){
      this.deleteProduct = product;
      button.setAttribute('data-target','#deleteProductModel');
    }
    container?.appendChild(button);
    button.click();
  }



 


}
