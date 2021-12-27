import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = environment.baseUrl;

  constructor(private httpClient: HttpClient) {} 

  public getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/product/all`);
  }

  public createProduct(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(`${this.baseURL}/product/add`, product);
  }

  public deleteProduct(barkod:number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/product/delete/${barkod}`);
  }
}





