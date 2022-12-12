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
import { BannerComponent } from './componentes/banner/banner.component';
import { TitulobannerComponent } from './componentes/banner/titulobanner/titulobanner.component';
import { ImgbannerComponent } from './componentes/banner/imgbanner/imgbanner.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { NombreperfilComponent } from './componentes/perfil/nombreperfil/nombreperfil.component';
import { ImgperfilComponent } from './componentes/perfil/imgperfil/imgperfil.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { TextopresentComponent } from './componentes/presentacion/textopresent/textopresent.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { DescripuestoComponent } from './componentes/experiencia/descripuesto/descripuesto.component';
import { LogoempresaComponent } from './componentes/experiencia/logoempresa/logoempresa.component';
import { Descripuesto2Component } from './componentes/experiencia/descripuesto2/descripuesto2.component';
import { Logoempresa2Component } from './componentes/experiencia/logoempresa2/logoempresa2.component';

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
    UsuarioabiertoComponent,
    BannerComponent,
    TitulobannerComponent,
    ImgbannerComponent,
    PerfilComponent,
    NombreperfilComponent,
    ImgperfilComponent,
    PresentacionComponent,
    TextopresentComponent,
    ExperienciaComponent,
    DescripuestoComponent,
    LogoempresaComponent,
    Descripuesto2Component,
    Logoempresa2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
