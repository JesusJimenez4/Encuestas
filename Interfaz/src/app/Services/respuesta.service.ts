import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Respuestas } from '../Models/Respuestas.model';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  Url: string = `${environment.baseUrl}/respuestas`;
  constructor(private readonly http: HttpClient) {}

  getRespuesta(Id: string) {
    return lastValueFrom(this.http.get<Respuestas>(`${this.Url}/${Id}`));
  }

  getRespuestas(): Promise<Respuestas[]> {
    return lastValueFrom(this.http.get<Respuestas[]>(`${this.Url}`));
  }

  postRespuesta(respuestas: Respuestas) {
  
    return lastValueFrom(this.http.post(`${this.Url}`, respuestas));
  }
  putRespuesta(respuestas: Respuestas, Id: string) {
    return lastValueFrom(this.http.put(`${this.Url}`, respuestas));
  }

  deleteRespuesta(Id: any) {
    return lastValueFrom(this.http.delete(`${this.Url}/${Id}`));
  }
}
