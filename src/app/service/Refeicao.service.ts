import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../endpoints';
import { Alimentacao } from '../models/refeicao.model';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {

  constructor(private http: HttpClient) {}

  getRefeicoes(): Observable<Alimentacao[]> {
    return this.http.get<Alimentacao[]>(API_ENDPOINTS.Refeicoes.getRefeicoes);
  }

  addRefeicao(refeicao: Alimentacao): Observable<Alimentacao> {
    return this.http.post<Alimentacao>(API_ENDPOINTS.Refeicoes.addRefeicao, refeicao);
  }

  updateRefeicao(refeicao: Alimentacao): Observable<Alimentacao> {
    return this.http.put<Alimentacao>(API_ENDPOINTS.Refeicoes.updateRefeicao(refeicao.AlimentacaoId), refeicao);
  }

  deleteRefeicao(id: number): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.Refeicoes.deleteRefeicao(id));
  }
}
