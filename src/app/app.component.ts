import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MaisUm';
  component: any = null;

  constructor(private router: Router) {}

  loadComponent(componentName: string) {
    switch (componentName) {
      case 'app-root':
        this.component = AppComponent;
        break;
      case 'sobre':
        this.component = SobreComponent;
        break;
      case 'servicos':
        this.component = ServicosComponent;
        break;
      case 'contato':
        this.component = ContatosComponent;
        break;
      default:
        this.component = null;
    }
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  goToSobre() {
    this.router.navigate(['/sobre']);
  }
  goToServicos() {
    this.router.navigate(['/servicos']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToContato() {
    this.router.navigate(['/contato']);
  }
  goAtividades(){
    this.router.navigate(['/atividades']);
  }
  goProgresso(){
    this.router.navigate(['/progresso']);
  }
  goRefeicoes(){
    this.router.navigate(['/refeicoes']);
  }
}
