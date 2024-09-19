import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { AtividadesComponent } from './pages/pages/atividades/atividades.component';
import { RefeicoesComponent } from './pages/pages/refeicoes/refeicoes.component';

@NgModule({
  declarations: [
    AppComponent,
    AtividadesComponent,
    RefeicoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
