import { Component, OnInit } from '@angular/core';
import { Progresso } from '../../models/progresso.model';
import { ProgressoService } from '../../service/Progresso.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'progresso',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  progressos: Progresso[] = [];
  newProgresso: Progresso = {
    ProgressoId: 0,
    UsuarioId: 0,
    Peso: 0,
    Data: '',
    Observacoes: '',
    Usuario:{
      UsuarioId: 0,
      Nome: '',
      Email: '',
      Senha: '',
      DataNascimento: '00/00/0000'
    }
  };
  mensagemSucesso: string = '';
  editingIndex: number | null = null;

  constructor(private progressoService: ProgressoService) {}

  ngOnInit(): void {
    this.loadProgressos();
  }

  loadProgressos(): void {
    this.progressoService.getProgressos().subscribe(
      (data) => this.progressos = data,
      (error) => console.error('Erro ao carregar progressos', error)
    );
  }

  addProgresso(): void {
    if (this.newProgresso.Peso && this.newProgresso.Data) {
      this.progressoService.addProgresso(this.newProgresso).subscribe(
        (data) => {
          this.progressos.push(data);
          this.mensagemSucesso = 'Progresso salvo com sucesso!';
          this.resetForm();
        },
        (error) => console.error('Erro ao adicionar progresso', error)
      );
    } else {
      this.mensagemSucesso = 'Por favor, preencha todos os campos.';
    }
  }

  resetForm(): void {
    this.newProgresso = {
      ProgressoId: 0,
      UsuarioId: 0,
      Peso: 0,
      Data: '',
      Observacoes: '',
      Usuario:{
        UsuarioId: 0,
        Nome: '',
        Email: '',
        Senha: '',
        DataNascimento: '00/00/0000'
      }
    };
  }

  editProgresso(index: number): void {
    this.newProgresso = { ...this.progressos[index] };
    this.editingIndex = index;
  }

  updateProgresso(): void {
    if (this.newProgresso.ProgressoId != null) {
      this.progressoService.updateProgresso(this.newProgresso).subscribe(
        (data) => {
          if (this.editingIndex !== null) {
            this.progressos[this.editingIndex] = data;
            this.editingIndex = null;
          }
          const index = this.progressos.findIndex(r => r.ProgressoId === data.ProgressoId);
          if (index !== -1) {
            this.progressos[index] = data;
          }
        },
        (error) => console.error('Erro ao atualizar refeição', error)
      );
    }
  }

  deleteProgresso(index: number): void {
    this.progressoService.deleteProgresso(this.progressos[index].ProgressoId).subscribe(
      () => this.progressos.splice(index, 1),
      (error) => console.error('Erro ao deletar progresso', error)
    );
  }
}
