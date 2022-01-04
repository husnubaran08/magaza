import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../home/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  private baseURL = environment.baseUrl;
  constructor(private http: HttpClient) { }

  public loginEmployeeFromRemote(employee:Employee):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/employees/login`, employee);
}

}
