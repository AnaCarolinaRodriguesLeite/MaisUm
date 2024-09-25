import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { RefeicoesComponent } from './pages/refeicoes/refeicoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ProgressoComponent } from './pages/progresso/progresso.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './service/Usuario.service';
import { AtividadesFisicasService } from './service/AtividadeFisica.service';
import { RefeicaoService } from './service/Refeicao.service';
import { ProgressoService } from './service/Progresso.service';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AtividadesComponent,
    RefeicoesComponent,
    ProgressoComponent,
    LoginComponent,
    CadastroComponent,
    SobreComponent,
    ContatosComponent,
    ServicosComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    AtividadesFisicasService,
    RefeicaoService,
    ProgressoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
