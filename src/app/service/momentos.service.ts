import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../Moments';
import { environment } from 'src/environments/environment';
import { Resposta } from '../Respostas';

@Injectable({
  providedIn: 'root'
})
export class MomentosService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) { }

  pegarMomentos(): Observable<Resposta<Moment[]>> {
    return this.http.get<Resposta<Moment[]>>(this.apiUrl);
  }

  pegarMomento(id: number): Observable<Resposta<Moment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Resposta<Moment>>(url);
  }

  createMoment(formDado: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formDado);
  }

  removeMomento(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  atualizarMomento(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
