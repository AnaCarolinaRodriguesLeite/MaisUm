import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesComponent } from './pages/pages/atividades/atividades.component';
import { RefeicoesComponent } from './pages/pages/refeicoes/refeicoes.component';
import { CadastroComponent } from './pages/pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/pages/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'atividades', component: AtividadesComponent },
  { path: 'refeicoes', component: RefeicoesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component:  AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
