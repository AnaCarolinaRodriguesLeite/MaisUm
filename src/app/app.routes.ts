import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { RefeicoesComponent } from './pages/refeicoes/refeicoes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ProgressoComponent } from './pages/progresso/progresso.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
  { path: 'atividades', component: AtividadesComponent },
  { path: 'refeicoes', component: RefeicoesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'progresso', component: ProgressoComponent },
  { path: 'sobre', component: SobreComponent },
  //{ path: '', redirectTo: '/app-root', pathMatch: 'full' },
  { path: 'contato', component: ContatosComponent},
  { path: 'servicos', component: ServicosComponent},
  { path: 'app-root', component: AppComponent},
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
