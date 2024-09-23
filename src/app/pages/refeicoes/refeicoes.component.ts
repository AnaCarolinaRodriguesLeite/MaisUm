import { Component, OnInit } from '@angular/core';
import { RefeicaoService } from '../../service/Refeicao.service';
import { Alimentacao } from '../../models/refeicao.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'refeicoes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './refeicoes.component.html',
  styleUrls: ['./refeicoes.component.css']
})
export class RefeicoesComponent implements OnInit {
  refeicoes: Alimentacao[] = [];
  refeicaoForm!: FormGroup;
  selectedRefeicao: Alimentacao | null = null;

  constructor(
    private refeicaoService: RefeicaoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadRefeicoes();
    this.iniciarforms();
  }

  iniciarforms(){
    this.refeicaoForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      descricao: ['', Validators.required],
      alimentacaoId: [0],
      usuarioId: [0],
      calorias: [0, [Validators.required, Validators.min(1)]],
      data: ['', Validators.required]
    });
  }

  loadRefeicoes(): void {
    this.refeicaoService.getRefeicoes().subscribe(
      (data) => this.refeicoes = data,
      (error) => console.error('Erro ao carregar refeições', error)
    );
  }

  addRefeicao(): void {
    if (this.refeicaoForm.valid) {
      const novaRefeicao: Alimentacao = this.refeicaoForm.value;
      
      this.refeicaoService.addRefeicao(novaRefeicao).subscribe(
        (data) => {
          this.refeicoes.push(data);
          this.refeicaoForm.reset(); // Resetar o formulário após o envio
        },
        (error) => console.error('Erro ao adicionar refeição', error)
      );
    }
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
