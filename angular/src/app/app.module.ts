import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HabilidadComponent } from './componentes/habilidades/habilidad/habilidad.component';
import { PorcentajeComponent } from './componentes/habilidades/porcentaje/porcentaje.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { TituloproyectoComponent } from './componentes/proyectos/tituloproyecto/tituloproyecto.component';
import { ImgproyectoComponent } from './componentes/proyectos/imgproyecto/imgproyecto.component';
import { DetalleproyectoComponent } from './componentes/proyectos/detalleproyecto/detalleproyecto.component';
import { UrlproyectoComponent } from './componentes/proyectos/urlproyecto/urlproyecto.component';
import { ExtraComponent } from './componentes/extra/extra.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MenuverticalComponent } from './componentes/dashboard/menuvertical/menuvertical.component';
import { EditnavbarComponent } from './componentes/dashboard/editnavbar/editnavbar.component';
import { EditportadaComponent } from './componentes/dashboard/editportada/editportada.component';
import { EditperfilComponent } from './componentes/dashboard/editperfil/editperfil.component';
import { EditinfoComponent } from './componentes/dashboard/editinfo/editinfo.component';
import { EditexperienciaComponent } from './componentes/dashboard/editexperiencia/editexperiencia.component';
import { EditeducacionComponent } from './componentes/dashboard/editeducacion/editeducacion.component';
import { EdithabilidadesComponent } from './componentes/dashboard/edithabilidades/edithabilidades.component';
import { EditproyectosComponent } from './componentes/dashboard/editproyectos/editproyectos.component';

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
    EducacionComponent,
    HabilidadesComponent,
    HabilidadComponent,
    PorcentajeComponent,
    ProyectosComponent,
    TituloproyectoComponent,
    ImgproyectoComponent,
    DetalleproyectoComponent,
    UrlproyectoComponent,
    ExtraComponent,
    FooterComponent,
    ContactoComponent,
    ErrorComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    MenuverticalComponent,
    EditnavbarComponent,
    EditportadaComponent,
    EditperfilComponent,
    EditinfoComponent,
    EditexperienciaComponent,
    EditeducacionComponent,
    EdithabilidadesComponent,
    EditproyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
