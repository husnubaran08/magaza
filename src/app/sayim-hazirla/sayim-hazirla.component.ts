import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sayim-hazirla',
  templateUrl: './sayim-hazirla.component.html',
  styleUrls: ['./sayim-hazirla.component.css']
})
export class SayimHazirlaComponent implements OnInit {
  
  products: Product[] = [
    {"barkod":1,"koli":30,"name":"Kinder Pingui","price":13,"reyon":"Dolap ürünleri","stockCode":1011227},
    {"barkod":2,"koli":30,"name":"Sütaş Süt","price":13,"reyon":"Dolap ürünleri","stockCode":1004575},
    {"barkod":1,"koli":30,"name":"Sütaş Kaşar Peynir","price":13,"reyon":"bakliyat ürünleri","stockCode":1025747},
    {"barkod":2,"koli":30,"name":"Kavurma","price":13,"reyon":"dolap ürünleri","stockCode":1004175}
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
