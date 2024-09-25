import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/Usuario.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: UsuarioService) {}
  
  goToCadastro() {
    this.router.navigate(['/cadastro']);
  }

  goToMenu(){
    this.router.navigate(['/menu']);
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response) {
          this.router.navigate(['/menu']);
        } else {
          this.errorMessage = 'Usuário ou senha inválidos.';
        }
      },
      error => {
        this.errorMessage = 'Ocorreu um erro durante a autenticação.';
      }
    );
  }
}
