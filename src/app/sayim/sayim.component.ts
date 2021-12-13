import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sayim',
  templateUrl: './sayim.component.html',
  styleUrls: ['./sayim.component.css']
})
export class SayimComponent implements OnInit {

  products: Product[] = [
    {"barkod":1,"koli":12,"name":"Kavurma","price":13,"reyon":"Dolap ürünleri","stockCode":1011227},
    {"barkod":2,"koli":45,"name":"Kinder Pingui","price":13,"reyon":"Dolap ürünleri","stockCode":1004575},
    {"barkod":1,"koli":12,"name":"Pastırma","price":13,"reyon":"bakliyat ürünleri","stockCode":1025747},
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

}
