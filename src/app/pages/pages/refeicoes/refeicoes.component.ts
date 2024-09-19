import { Component, OnInit } from '@angular/core';
import { RefeicaoService } from '../../../service/Refeicao.service';
import { Alimentacao } from '../../../models/refeicao.model';

@Component({
  selector: 'app-refeicoes',
  standalone: true,
  imports: [],
  templateUrl: './refeicoes.component.html',
  styleUrls: ['./refeicoes.component.css']
})
export class RefeicoesComponent implements OnInit {
  refeicoes: Alimentacao[] = [];
  newRefeicao: Alimentacao = {
    tipo: '', 
    descricao: '',
    alimentacaoId: 0,
    usuarioId: 0,
    calorias: 0,
    data: new Date()
  };
  selectedRefeicao: Alimentacao | null = null;

  constructor(private refeicaoService: RefeicaoService) {}

  ngOnInit(): void {
    this.loadRefeicoes();
  }

  loadRefeicoes(): void {
    this.refeicaoService.getRefeicoes().subscribe(
      (data) => this.refeicoes = data,
      (error) => console.error('Erro ao carregar refeições', error)
    );
  }

  addRefeicao(): void {
    this.refeicaoService.addRefeicao(this.newRefeicao).subscribe(
      (data) => {
        this.refeicoes.push(data);
        this.newRefeicao = {
          tipo: '', 
          descricao: '',
          alimentacaoId: 0,
          usuarioId: 0,
          calorias: 0,
          data: new Date()
        }; // Resetar o formulário
      },
      (error) => console.error('Erro ao adicionar refeição', error)
    );
  }

  updateRefeicao(refeicao: Alimentacao): void {
    if (refeicao.alimentacaoId != null) {
      this.refeicaoService.updateRefeicao(refeicao).subscribe(
        (data) => {
          const index = this.refeicoes.findIndex(r => r.alimentacaoId === data.alimentacaoId);
          if (index !== -1) {
            this.refeicoes[index] = data;
          }
        },
        (error) => console.error('Erro ao atualizar refeição', error)
      );
    }
  }

  deleteRefeicao(id: number): void {
    this.refeicaoService.deleteRefeicao(id).subscribe(
      () => {
        this.refeicoes = this.refeicoes.filter(r => r.alimentacaoId !== id);
      },
      (error) => console.error('Erro ao deletar refeição', error)
    );
  }
}