import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class SayimService {
  private baseURL = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }
  

  public createSayim(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(`${this.baseURL}/sayim/add`, product);
  }
}
