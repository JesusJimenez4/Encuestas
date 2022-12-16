import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../Models/Categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  Url: string = `${environment.baseUrl}/categorias`;
  constructor(private readonly http: HttpClient) {}

  getCategoria(Id: string) {
    return lastValueFrom(this.http.get<Categoria>(`${this.Url}/${Id}`));
  }

  getCategorias(): Promise<Categoria[]> {
    return lastValueFrom(this.http.get<Categoria[]>(`${this.Url}`));
  }

  postCategoria(categoria: Categoria) {
  
    return lastValueFrom(this.http.post(`${this.Url}`, categoria));
  }
  putCategoria(categoria: Categoria, Id: string) {
    return lastValueFrom(this.http.put(`${this.Url}`, categoria));
  }

  deleteCategoria(Id: any) {
    return lastValueFrom(this.http.delete(`${this.Url}/${Id}`));
  }
}
