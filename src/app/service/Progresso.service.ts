import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../endpoints';
import { Progresso } from '../models/progresso.model';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {

  constructor(private http: HttpClient) {}

  getProgressos(): Observable<Progresso[]> {
    return this.http.get<Progresso[]>(API_ENDPOINTS.Progresso.getProgresso);
  }

  addProgresso(progresso: Progresso): Observable<Progresso> {
    return this.http.post<Progresso>(API_ENDPOINTS.Progresso.addProgresso, progresso);
  }

  updateProgresso(progresso: Progresso): Observable<Progresso> {
    return this.http.put<Progresso>(API_ENDPOINTS.Progresso.updateProgresso(progresso.ProgressoId), progresso);
  }

  deleteProgresso(id: number): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.Progresso.deleteProgresso(id));
  }
}
