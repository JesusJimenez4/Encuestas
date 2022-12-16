import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  Url: string = `${environment.baseUrl}/usuarios`;
  constructor(private readonly http: HttpClient) {}

  getUsuario(Id: string) {
    return lastValueFrom(this.http.get<Usuario>(`${this.Url}/${Id}`));
  }

  getUsuarios(): Promise<Usuario[]> {
    return lastValueFrom(this.http.get<Usuario[]>(`${this.Url}`));
  }

  postUsuario(usuario: Usuario) {
    return lastValueFrom(this.http.post(`${this.Url}`, usuario));
  }
  putUsuario(usuario: Usuario, Id: string) {
    return lastValueFrom(this.http.put(`${this.Url}`, usuario));
  }

  deleteUsuario(Id: any) {
    return lastValueFrom(this.http.delete(`${this.Url}/${Id}`));
  }
}
