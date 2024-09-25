import { Component, OnInit } from '@angular/core';
import { RefeicaoService } from '../../service/Refeicao.service';
import { Alimentacao } from '../../models/refeicao.model';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'refeicoes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './refeicoes.component.html',
  styleUrls: ['./refeicoes.component.css']
})
export class RefeicoesComponent implements OnInit {
  refeicoes: Alimentacao[] = [];
  refeicaoForm!: FormGroup;
  newRefeicao: Alimentacao = {
    AlimentacaoId: 0,
    UsuarioId: 0,
    Tipo: '',
    Descricao: '',
    Calorias: 0,
    Data: '00/00/0000',
    Usuario: { 
      UsuarioId: 0,
      Nome: '',
      Email: '',
      Senha: '',
      DataNascimento: '00/00/0000'
     }
  };
  editingIndex: number | null = null;

  constructor(
    private refeicaoService: RefeicaoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadRefeicoes();
  }

  loadRefeicoes(): void {
    this.refeicaoService.getRefeicoes().subscribe(
      (data: Alimentacao[]) => this.refeicoes = data,
      (error) => console.error('Erro ao carregar refeições', error)
    );
  }

  addRefeicao(): void {      
      this.refeicaoService.addRefeicao(this.newRefeicao).subscribe(
        (data) => {
          this.refeicoes.push(this.newRefeicao);
          this.newRefeicao = {
            AlimentacaoId: 0,
            UsuarioId: 0,
            Tipo: '',
            Descricao: '',
            Calorias: 0,
            Data: '00/00/0000',
            Usuario: {  
              UsuarioId: 0,
              Nome: '',
              Email: '',
              Senha: '',
              DataNascimento: '00/00/0000'
            }
          };
          },
        (error) => console.error('Erro ao adicionar refeição', error)
      );
  }

  // Função chamada quando o usuário clica no botão de editar
  editRefeicao(index: number): void {
    this.newRefeicao = { ...this.refeicoes[index] }; // Preenche o formulário com os dados da atividade selecionada
    this.editingIndex = index; // Define o índice da atividade que está sendo editada
  }

  updateRefeicao(): void {
    if (this.newRefeicao.AlimentacaoId != null) {
      this.refeicaoService.updateRefeicao(this.newRefeicao).subscribe(
        (data) => {
          if (this.editingIndex !== null) {
            this.refeicoes[this.editingIndex] = data; // Atualiza a atividade na lista
            this.editingIndex = null; // Limpa o índice de edição
          }
          const index = this.refeicoes.findIndex(r => r.AlimentacaoId === data.AlimentacaoId);
          if (index !== -1) {
            this.refeicoes[index] = data;
          }
        },
        (error) => console.error('Erro ao atualizar refeição', error)
      );
    }
  }

  resetForm(): void {
      this.newRefeicao = {
        AlimentacaoId: 0,
        UsuarioId: 0,
        Tipo: '',
        Descricao: '',
        Calorias: 0,
        Data: '00/00/0000',
        Usuario: { 
          UsuarioId: 0,
          Nome: '',
          Email: '',
          Senha: '',
          DataNascimento: '00/00/0000'
         }
      };
  }

  deleteRefeicao(id: number): void {
    this.refeicaoService.deleteRefeicao(id).subscribe(
      () => {
        this.refeicoes = this.refeicoes.filter(r => r.AlimentacaoId !== id);
      },
      (error) => console.error('Erro ao deletar refeição', error)
    );
  }
}
