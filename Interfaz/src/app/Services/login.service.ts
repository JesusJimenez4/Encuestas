import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  getUsuarios(): import("src/app/Models/Usuario.model").Usuario[] | PromiseLike<import("src/app/Models/Usuario.model").Usuario[]> {
    throw new Error('Method not implemented.');
  }

  Url: string = `${environment.baseUrl}/Login`;
  usuarios: string = '';

  constructor(private http: HttpClient) { }

  public get(body:any){
    return this.http.get(this.Url,body);

  }
  
  public post(body: any){
    return this.http.post(this.Url,body); 
    
  }
}
