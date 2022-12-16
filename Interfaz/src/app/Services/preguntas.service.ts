import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Preguntas } from '../Models/Preguntas.model';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  Url: string = `${environment.baseUrl}/preguntas`;
  constructor(private readonly http: HttpClient) {}

  getPregunta(Id: string) {
    return lastValueFrom(this.http.get<Preguntas>(`${this.Url}/${Id}`));
  }

  getPreguntas(): Promise<Preguntas[]> {
    return lastValueFrom(this.http.get<Preguntas[]>(`${this.Url}`));
  }

  postPregunta(preguntas: Preguntas) {
  
    return lastValueFrom(this.http.post(`${this.Url}`, preguntas));
  }
  putPreguntas(preguntas: Preguntas, Id: string) {
    return lastValueFrom(this.http.put(`${this.Url}`, preguntas));
  }

  deletePreguntas(Id: any) {
    return lastValueFrom(this.http.delete(`${this.Url}/${Id}`));
  }
}
