import { Component, OnInit } from '@angular/core';
import { AtividadeFisica } from '../../models/atividadesFisicas.model';
import { AtividadesFisicasService } from '../../service/AtividadeFisica.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  selectedAtividade: AtividadeFisica | null = null;

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
        this.atividades.push(data);
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

  updateAtividade(atividade: AtividadeFisica): void {
    if (atividade.AtividadeId != null) {
      this.atividadeService.updateAtividadesFisicas(atividade).subscribe(
        (data: AtividadeFisica) => {
          const index = this.atividades.findIndex(a => a.AtividadeId === data.AtividadeId);
          if (index !== -1) {
            this.atividades[index] = data;
          }
        },
        (error: any) => console.error('Erro ao atualizar atividade', error)
      );
    }
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