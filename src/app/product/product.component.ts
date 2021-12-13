import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [
    {"barkod":1,"koli":30,"name":"Mercimek","price":13,"reyon":"bakliyat ürünleri","stockCode":6007457},
    {"barkod":2,"koli":30,"name":"Fasulye","price":13,"reyon":"bakliyat ürünleri","stockCode":6003032},
    {"barkod":3,"koli":30,"name":"Barbunya","price":13,"reyon":"bakliyat ürünleri","stockCode":6004057},
    {"barkod":4,"koli":30,"name":"Pirinç","price":13,"reyon":"bakliyat ürünleri","stockCode":6002441},
  ];
  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    })
  }

  deleteProduct(barkod:number){
    this.productService.deleteProduct(barkod).subscribe(data => {
      console.log(data);
      this.getProducts();
    })
  }

 


}
