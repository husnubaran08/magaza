import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';
import { SayimService } from '../services/sayim.service';

@Component({
  selector: 'app-sayim-hazirla',
  templateUrl: './sayim-hazirla.component.html',
  styleUrls: ['./sayim-hazirla.component.css']
})
export class SayimHazirlaComponent implements OnInit {
  
  public products: Product[] = [];
  constructor(private productService: ProductService,private sayimService:SayimService) {}

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

  public onCreateSayim(product : Product): void{
    this.sayimService.createSayim(product).subscribe(
      (response: Product) => {
        console.log(response);
        this.getProductList();
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }
}
