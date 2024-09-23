import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../service/Usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  dataNascimento: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  cadastrar(): void {
    const novoUsuario: Usuario = {
      Nome: this.nome,
      Email: this.email,
      Senha: this.senha,
      DataNascimento: this.dataNascimento,
      UsuarioId: 0
    };

    this.usuarioService.cadastrar(novoUsuario).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('Erro ao cadastrar', err);
        alert('Falha ao realizar o cadastro.');
      }
    });
  }
}
