import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LogonavbarComponent } from './componentes/navbar/logonavbar/logonavbar.component';
import { LinkedinComponent } from './componentes/navbar/linkedin/linkedin.component';
import { CodepenComponent } from './componentes/navbar/codepen/codepen.component';
import { GithubComponent } from './componentes/navbar/github/github.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UsuariocandadoComponent } from './componentes/navbar/usuariocandado/usuariocandado.component';
import { UsuarioabiertoComponent } from './componentes/navbar/usuarioabierto/usuarioabierto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogonavbarComponent,
    LinkedinComponent,
    CodepenComponent,
    GithubComponent,
    InicioComponent,
    UsuariocandadoComponent,
    UsuarioabiertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
