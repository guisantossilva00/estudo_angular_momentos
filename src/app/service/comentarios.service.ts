import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Comentario } from '../Comentarios';
import { Resposta } from '../Respostas';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) { }

  criarComentario(data: Comentario): Observable<Resposta<Comentario>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Resposta<Comentario>>(url, data)
  }
}
