import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../endpoints';
import { AtividadeFisica } from '../models/atividadesFisicas.model';

@Injectable({
  providedIn: 'root'
})
export class AtividadesFisicasService {

  constructor(private http: HttpClient) {}

  getAtividadesFisicas(): Observable<AtividadeFisica[]> {
    return this.http.get<AtividadeFisica[]>(API_ENDPOINTS.AtividadesFisicas.getAtividadesFisicas);
  }

  addAtividadesFisicas(atividadesFisicas: AtividadeFisica): Observable<AtividadeFisica> {
    return this.http.post<AtividadeFisica>(API_ENDPOINTS.AtividadesFisicas.addAtividadeFisica, atividadesFisicas);
  }

  updateAtividadesFisicas(atividadesFisicas: AtividadeFisica): Observable<AtividadeFisica> {
    return this.http.put<AtividadeFisica>(API_ENDPOINTS.AtividadesFisicas.updateAtividadeFisica(atividadesFisicas.AtividadeId), atividadesFisicas);
  }

  deleteAtividadesFisicas(id: number): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.AtividadesFisicas.deleteAtividadeFisica(id));
  }
}
