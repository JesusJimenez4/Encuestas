import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Encuestas } from '../Models/Encuesta.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  Url: string = `${environment.baseUrl}/encuestas`;
  constructor(private readonly http: HttpClient) {}

  getEncuesta(Id: string) {
    return lastValueFrom(this.http.get<Encuestas>(`${this.Url}/${Id}`));
  }

  getEncuestas(): Promise<Encuestas[]> {
    return lastValueFrom(this.http.get<Encuestas[]>(`${this.Url}`));
  }

  postEncuesta(encuestas: Encuestas) {
  
    return lastValueFrom(this.http.post(`${this.Url}`, encuestas));
  }
  putEncuesta(encuestas: Encuestas, Id: string) {
    return lastValueFrom(this.http.put(`${this.Url}`, encuestas));
  }

  deleteEncuesta(Id: any) {
    return lastValueFrom(this.http.delete(`${this.Url}/${Id}`));
  }
}
