import { Component, OnInit } from '@angular/core';
import { AtividadeFisica } from '../../models/atividadesFisicas.model';
import { AtividadesFisicasService } from '../../service/AtividadeFisica.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'atividades',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {
  atividades: AtividadeFisica[] = [];
  newAtividade: AtividadeFisica = {
    AtividadeId: 0,
    UsuarioId: 0,
    Nome: '',
    DuracaoMinutos: 0,
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

  constructor(private atividadeService: AtividadesFisicasService) {}

  ngOnInit(): void {
    this.loadAtividades();
  }

  loadAtividades(): void {
    this.atividadeService.getAtividadesFisicas().subscribe(
      (data: AtividadeFisica[]) => this.atividades = data,
      (error: any) => console.error('Erro ao carregar atividades', error)
    );
  }

  addAtividade(): void {
    this.atividadeService.addAtividadesFisicas(this.newAtividade).subscribe(
      (data: AtividadeFisica) => {
        this.atividades.push(this.newAtividade);
        this.newAtividade = {
          AtividadeId: 0,
          UsuarioId: 0,
          Nome: '',
          DuracaoMinutos: 0,
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
      (error: any) => console.error('Erro ao adicionar atividade', error)
    );
  }

  // Função chamada quando o usuário clica no botão de editar
  editAtividade(index: number): void {
    this.newAtividade = { ...this.atividades[index] }; // Preenche o formulário com os dados da atividade selecionada
    this.editingIndex = index; // Define o índice da atividade que está sendo editada
  }

  // Função chamada ao clicar no botão de atualizar/salvar
  updateAtividade(): void {
    if (this.newAtividade.AtividadeId != null) {
      this.atividadeService.updateAtividadesFisicas(this.newAtividade).subscribe(
        (data: AtividadeFisica) => {
          if (this.editingIndex !== null) {
            this.atividades[this.editingIndex] = data; // Atualiza a atividade na lista
            this.editingIndex = null; // Limpa o índice de edição
          }
          this.resetForm(); // Limpa o formulário
        },
        (error: any) => console.error('Erro ao atualizar atividade', error)
      );
    }
  }

  // Função para resetar o formulário
  resetForm(): void {
    this.newAtividade = { AtividadeId: 0,
      UsuarioId: 0,
      Nome: '',
      DuracaoMinutos: 0,
      Data: '00/00/0000',
      Usuario: {  
        UsuarioId: 0,
        Nome: '',
        Email: '',
        Senha: '',
        DataNascimento: '00/00/0000'
       } };
  }

  deleteAtividade(id: number): void {
    this.atividadeService.deleteAtividadesFisicas(id).subscribe(
      () => {
        this.atividades = this.atividades.filter(a => a.AtividadeId !== id);
      },
      (error: any) => console.error('Erro ao deletar atividade', error)
    );
  }
}